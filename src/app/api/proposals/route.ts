/**
 * /api/proposals — endpoint publik Proposal Studio.
 *
 * POST  /api/proposals          → buat penawaran baru (status DRAFT)
 * GET   /api/proposals?code=…   → ambil 1 penawaran terparse (halaman share)
 *
 * Body POST: {clientName, clientCompany?, clientEmail, clientWa,
 *             packageCode, documentCodes?, addonIds?, notes?}
 * Response : {ok:true, code, proposal} — proposal sudah terparse (JSON arrays).
 * Error    : 400 validasi, 404 tak ditemukan, 500 kesalahan server.
 */
import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import {
  ADDONS,
  buildLineItems,
  calcProposal,
  makeProposalCode,
  parseProposal,
  validUntilFrom,
  type ProposalLineItem,
} from "@/lib/proposal-calc";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CODE_RE = /^PGA-\d{1,3}$/i;
const CUSTOM_CODE = "CUSTOM";
const MAX_NOTES = 2000;

function bad(message: string): NextResponse {
  return NextResponse.json({ error: message }, { status: 400 });
}

/** Parse kolom JSON-string menjadi array string dengan aman. */
function parseJsonArray(raw: string): string[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

/** Normalisasi array kode dokumen dari body: string, trim, uppercase, dedupe. */
function normalizeCodes(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of input) {
    if (typeof item !== "string") continue;
    const code = item.trim().toUpperCase();
    if (!code || seen.has(code)) continue;
    seen.add(code);
    out.push(code);
  }
  return out;
}

/** Normalisasi id add-on: hanya id yang dikenal di ADDONS yang disimpan. */
function normalizeAddonIds(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  const known = new Set(ADDONS.map((a) => a.id));
  const out: string[] = [];
  for (const item of input) {
    if (typeof item !== "string") continue;
    const id = item.trim();
    if (known.has(id) && !out.includes(id)) out.push(id);
  }
  return out;
}

// ───────────────────────────────── POST ──────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || typeof body !== "object") return bad("Body JSON tidak valid.");

    // ── Validasi manual (pola /api/contact) ──
    const clientName = typeof body.clientName === "string" ? body.clientName.trim() : "";
    if (clientName.length < 3) return bad("Nama klien minimal 3 karakter.");

    const clientCompany =
      typeof body.clientCompany === "string" ? body.clientCompany.trim().slice(0, 160) : "";

    const clientEmail = typeof body.clientEmail === "string" ? body.clientEmail.trim() : "";
    if (!EMAIL_RE.test(clientEmail)) return bad("Format email tidak valid.");

    const clientWa = typeof body.clientWa === "string" ? body.clientWa.trim() : "";
    const waDigits = clientWa.replace(/\D/g, "");
    if (waDigits.length < 9 || waDigits.length > 15) {
      return bad("Nomor WhatsApp tidak valid (9–15 digit).");
    }

    const packageCode =
      typeof body.packageCode === "string" ? body.packageCode.trim().toUpperCase() : "";
    if (!packageCode) return bad("packageCode wajib diisi.");

    const notes = typeof body.notes === "string" ? body.notes.trim().slice(0, MAX_NOTES) : "";

    // ── Data master dari DB ──
    const [packages, docs] = await Promise.all([
      db.gunaraPackage.findMany({ orderBy: { order: "asc" } }),
      db.pgaDocument.findMany({ select: { code: true, tier: true } }),
    ]);

    const knownCodes = new Set(packages.map((p) => p.code));
    const isCustom = packageCode === CUSTOM_CODE;
    if (!isCustom && !knownCodes.has(packageCode)) {
      return bad("Kode paket tidak dikenal.");
    }

    const validDocCodes = new Set(docs.map((d) => d.code));
    const bodyCodes = normalizeCodes(body.documentCodes).filter((c) => CODE_RE.test(c));

    // Dokumen efektif: paket standar → komposisi dari DB; CUSTOM → pilihan user.
    const effectiveCodes = isCustom
      ? bodyCodes.filter((c) => validDocCodes.has(c))
      : (() => {
          const pkg = packages.find((p) => p.code === packageCode);
          return pkg ? parseJsonArray(pkg.documentCodes) : [];
        })();

    if (isCustom && effectiveCodes.length === 0) {
      return bad("Pilih minimal satu dokumen yang valid untuk paket kustom.");
    }

    const addonIds = normalizeAddonIds(body.addonIds);

    // ── Kalkulasi (satu sumber kebenaran: proposal-calc) ──
    const calc = calcProposal(
      { packageCode, documentCodes: effectiveCodes, addonIds },
      packages.map((p) => ({
        code: p.code,
        name: p.name,
        docCount: p.docCount,
        price: p.price,
        durationWeeks: p.durationWeeks,
      })),
      docs,
    );
    const items: ProposalLineItem[] = buildLineItems(calc);

    // ── Kode unik PNW-YYYYMMDD-XXX ──
    let code = makeProposalCode();
    for (let i = 0; i < 8; i += 1) {
      const clash = await db.proposal.findUnique({ where: { code } });
      if (!clash) break;
      code = makeProposalCode();
    }

    const row = await db.proposal.create({
      data: {
        code,
        clientName,
        clientCompany,
        clientEmail,
        clientWa: waDigits,
        packageCode: isCustom ? CUSTOM_CODE : packageCode,
        documentCodes: JSON.stringify(effectiveCodes),
        addons: JSON.stringify(calc.addons),
        items: JSON.stringify(items),
        subtotal: calc.subtotal,
        discount: calc.discount,
        total: calc.total,
        durationWeeks: calc.durationLabel,
        notes,
        status: "DRAFT",
        validUntil: validUntilFrom(),
      },
    });

    return NextResponse.json(
      { ok: true, code: row.code, proposal: parseProposal(row) },
      { status: 201 },
    );
  } catch (error) {
    console.error("[api/proposals][POST]", error);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

// ───────────────────────────────── GET ───────────────────────────────────

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code")?.trim() ?? "";
    if (!code) return bad("Parameter code wajib diisi (contoh: ?code=PNW-20251204-AB1).");

    const row = await db.proposal.findUnique({ where: { code } });
    if (!row) {
      return NextResponse.json({ error: "Penawaran tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json(
      { ok: true, proposal: parseProposal(row) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[api/proposals][GET]", error);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
