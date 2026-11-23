import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireWrite, cleanStr, isValidDataUrl, logActivity } from "@/lib/admin-guard";

/**
 * Backup & Restore ala WordPress Tools > Export/Import — tapi satu file JSON
 * berisi SELURUH konten situs (pengaturan key/value, struktur, layanan,
 * testimoni, faq, kantor, section, media). Tidak menyertakan akun admin &
 * log keamanan. Format: _format "digiman-backup" _version 3 (settings KV).
 */

const TABLES = [
  "siteSetting", "teamMember", "service", "testimonial", "faq",
  "office", "sectionConfig", "mediaAsset",
] as const;

/** Key settings yang boleh dipulihkan (adminPassword sengaja dikecualikan
 * agar berkas backup tidak bisa mengganti kredensial). */
const RESTORABLE_SETTING_KEYS = new Set([
  "companyName", "waNumber", "waDisplay", "email", "addressShort", "addressFull",
  "logoUrl", "statClients", "statExperts", "statLayers", "statSuccess",
  "heroHeadline", "heroSub", "heroWords", "metaTitle", "metaDescription",
  "metaKeywords", "ogImage", "googleSiteVerification", "headScripts",
  "contactFormEnabled", "hours", "instagram", "linkedin", "tiktok",
  "facebook", "youtube", "gunaraOsHeadline", "gunaraOsSub",
]);

/** GET /api/admin/backup — unduh berkas backup JSON */
export async function GET(req: NextRequest) {
  const session = await requireWrite(req, "backup");
  if (session instanceof NextResponse) return session;

  const [settings, team, services, testimonials, faqs, offices, sections, media] =
    await Promise.all([
      db.siteSetting.findMany({ orderBy: { key: "asc" } }),
      db.teamMember.findMany(),
      db.service.findMany(),
      db.testimonial.findMany(),
      db.faq.findMany(),
      db.office.findMany(),
      db.sectionConfig.findMany(),
      db.mediaAsset.findMany(),
    ]);

  const payload = {
    _format: "digiman-backup",
    _version: 3,
    _exportedAt: new Date().toISOString(),
    data: {
      settings: settings.map((s) => ({ key: s.key, value: s.value })),
      team, services, testimonials, faqs, offices, sections, media,
    },
  };

  await logActivity(session.username, "EXPORT", "Mengunduh berkas backup konten situs");

  const stamp = new Date().toISOString().slice(0, 10);
  return new NextResponse(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="digiman-backup-${stamp}.json"`,
    },
  });
}

/** POST /api/admin/backup — pulihkan dari berkas JSON (mode ganti semua) */
export async function POST(req: NextRequest) {
  const session = await requireWrite(req, "backup");
  if (session instanceof NextResponse) return session;

  try {
    const body = await req.json();
    if (body.confirm !== "PULIHKAN") {
      return NextResponse.json(
        { error: 'Konfirmasi salah. Ketik "PULIHKAN" untuk melanjutkan.' },
        { status: 400 }
      );
    }
    const data = body.data;
    if (!data || data._format !== "digiman-backup") {
      return NextResponse.json({ error: "Berkas bukan backup DIGIMAN yang valid." }, { status: 400 });
    }

    const d = data.data ?? {};
    let restored = 0;

    // 1) Pengaturan (key/value) — hanya key yang dikenal, adminPassword tidak bisa ditimpa via backup
    if (Array.isArray(d.settings)) {
      for (const row of d.settings) {
        const key = typeof row?.key === "string" ? row.key.trim() : "";
        const value = typeof row?.value === "string" ? row.value : "";
        if (!key || !RESTORABLE_SETTING_KEYS.has(key)) continue;
        let safe = value;
        // Sanitasi khusus per key
        if (key === "waNumber") safe = value.replace(/[^0-9]/g, "").slice(0, 20) || "6281316516524";
        if (key === "logoUrl" || key === "ogImage") {
          if (!isValidDataUrl(value, 2_600_000)) continue;
        }
        if (key.startsWith("stat")) {
          const n = Number(value);
          if (!Number.isFinite(n) || n < 0) continue;
        }
        if (key === "headScripts") safe = value.slice(0, 8000);
        await db.siteSetting.upsert({ where: { key }, update: { value: safe }, create: { key, value: safe } });
        restored += 1;
      }
    }

    // 2) Tabel konten: kosongkan lalu isi ulang by id (urutan & relasi tetap utuh)
    type RestoreDef = { model: keyof typeof db; rows: unknown[] };
    const restores: RestoreDef[] = [
      { model: "teamMember", rows: Array.isArray(d.team) ? d.team : [] },
      { model: "service", rows: Array.isArray(d.services) ? d.services : [] },
      { model: "testimonial", rows: Array.isArray(d.testimonials) ? d.testimonials : [] },
      { model: "faq", rows: Array.isArray(d.faqs) ? d.faqs : [] },
      { model: "office", rows: Array.isArray(d.offices) ? d.offices : [] },
      { model: "sectionConfig", rows: Array.isArray(d.sections) ? d.sections : [] },
      { model: "mediaAsset", rows: Array.isArray(d.media) ? d.media : [] },
    ];

    for (const { model, rows } of restores) {
      const client = db[model] as unknown as {
        deleteMany: () => Promise<unknown>;
        createMany: (args: { data: unknown[] }) => Promise<{ count: number }>;
      };
      await client.deleteMany();
      if (rows.length > 0) {
        // buang field relasional & konversi tanggal; id boleh dipertahankan
        const clean = rows.map((r) => {
          const row = { ...(r as Record<string, unknown>) };
          for (const k of ["updatedAt", "createdAt", "date", "publishedAt"]) {
            if (typeof row[k] === "string") {
              const t = new Date(row[k] as string);
              row[k] = Number.isNaN(t.getTime()) ? new Date() : t;
            }
          }
          return row;
        });
        try {
          const res = await client.createMany({ data: clean });
          restored += res.count;
        } catch {
          // fallback satu-per-satu bila createMany gagal (mis. data lama bermasalah)
          for (const row of clean) {
            try {
              await (db[model] as unknown as { create: (a: { data: unknown }) => Promise<unknown> }).create({ data: row });
              restored += 1;
            } catch {
              /* lewati baris rusak */
            }
          }
        }
      }
    }

    await logActivity(session.username, "IMPORT", `Memulihkan backup — ${restored} baris dipulihkan`);

    return NextResponse.json({ ok: true, restored });
  } catch (e) {
    console.error("POST /api/admin/backup error:", e);
    return NextResponse.json({ error: "Gagal memulihkan backup." }, { status: 500 });
  }
}
