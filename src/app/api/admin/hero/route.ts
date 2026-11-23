import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin, requireWrite, cleanStr, logActivity } from "@/lib/admin-guard";

/**
 * Editor Hero (beranda) — endpoint terpisah agar update parsial tidak
 * mengganggu pengaturan lain.
 * Penyimpanan memakai kontrak SiteSetting key/value (sama dengan schema.prisma
 * dan seluruh panel admin): key `heroHeadline`, `heroSub`, `heroWords` (JSON).
 */

const MAX_WORDS = 12;
const KEY_HEADLINE = "heroHeadline";
const KEY_SUB = "heroSub";
const KEY_WORDS = "heroWords";

const DEFAULT_HEADLINE = "Naikkan Bisnis Anda ke 7 Lapis Langit Legalitas.";
const DEFAULT_SUB =
  "Satu pintu untuk seluruh legalitas perusahaan di Indonesia — dari akta pendirian, perizinan OSS, kekayaan intelektual, hingga transformasi digital. Didampingi 46 dewan pakar lintas bidang, proses transparan, garansi di tangan.";
const DEFAULT_WORDS: string[] = [
  "Pendirian PT",
  "Pendirian CV",
  "PT PMA",
  "NIB & OSS",
  "Pendaftaran Merek",
  "Sertifikasi Halal",
  "Digitalisasi Bisnis",
];

/** Upsert satu key setting dengan nilai aman. */
async function putSetting(key: string, value: string): Promise<void> {
  await db.siteSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
}

export async function GET(req: NextRequest) {
  const session = await requireAdmin(req);
  if (!session) return NextResponse.json({ error: "Tidak terautentikasi." }, { status: 401 });

  const rows = await db.siteSetting.findMany({
    where: { key: { in: [KEY_HEADLINE, KEY_SUB, KEY_WORDS] } },
  });
  const kv = new Map(rows.map((r) => [r.key, r.value]));

  let words: string[] = [];
  try {
    const parsed = JSON.parse(kv.get(KEY_WORDS) ?? "[]");
    if (Array.isArray(parsed)) words = parsed.map((w) => String(w)).slice(0, MAX_WORDS);
  } catch {
    words = [];
  }

  return NextResponse.json({
    hero: {
      heroHeadline: kv.get(KEY_HEADLINE) || DEFAULT_HEADLINE,
      heroSub: kv.get(KEY_SUB) || DEFAULT_SUB,
      words: words.length >= 2 ? words : DEFAULT_WORDS,
    },
  });
}

export async function PUT(req: NextRequest) {
  const session = await requireWrite(req, "hero");
  if (session instanceof NextResponse) return session;

  try {
    const body = await req.json();
    const headline = cleanStr(body.heroHeadline, 160);
    const sub = cleanStr(body.heroSub, 600);

    const words: string[] = Array.isArray(body.heroWords)
      ? body.heroWords
          .map((w: unknown) => String(w).trim().slice(0, 40))
          .filter(Boolean)
          .slice(0, MAX_WORDS)
      : [];

    if (!headline) {
      return NextResponse.json({ error: "Judul hero wajib diisi." }, { status: 400 });
    }
    if (words.length < 2) {
      return NextResponse.json(
        { error: "Minimal 2 kata berputar agar animasi berjalan." },
        { status: 400 }
      );
    }

    await putSetting(KEY_HEADLINE, headline);
    await putSetting(KEY_SUB, sub);
    await putSetting(KEY_WORDS, JSON.stringify(words));

    await logActivity(session.username, "UPDATE", "Memperbarui tampilan Beranda (judul hero & kata berputar)");
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("PUT /api/admin/hero error:", e);
    return NextResponse.json({ error: "Gagal menyimpan hero." }, { status: 500 });
  }
}
