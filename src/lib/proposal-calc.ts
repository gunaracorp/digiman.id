/**
 * PROPOSAL STUDIO — mesin hitung penawaran Gunara OS.
 * File MURNI: tanpa React, tanpa import server — aman dipakai di komponen
 * client maupun API route.
 *
 * Kontrak bisnis (final, jangan diubah):
 * - 5 paket standar: PGA-39/45/72/120/165 — harga = docCount × Rp 1.000.000
 *   (sudah tersimpan di DB GunaraPackage.price).
 * - Diskon transparan per paket ("Diskon Standarisasi"):
 *   PGA-39 0% · PGA-45 0% · PGA-72 5% · PGA-120 8% · PGA-165 12%.
 * - Paket CUSTOM: dokumen dipilih manual; harga = jumlah dokumen × Rp 1 jt
 *   TANPA diskon; durasi estimasi = ceil(n/8) – ceil(n/6) minggu.
 * - Kode proposal: PNW-YYYYMMDD-XXX (3 karakter acak A-Z0-9); berlaku +30 hari.
 */

// ─────────────────────────────── Konstanta ───────────────────────────────

/** Harga per dokumen (formula standar Gunara OS). */
export const UNIT_PRICE = 1_000_000;

/** Masa berlaku penawaran (hari kalender). */
export const VALIDITY_DAYS = 30;

/** Label resmi diskon paket standar. */
export const DISCOUNT_LABEL = "Diskon Standarisasi";

/** Batas bawah/atas dokumen per minggu untuk estimasi durasi kustom. */
const WEEKS_MIN_PER_DOC = 8;
const WEEKS_MAX_PER_DOC = 6;

export type Addon = { id: string; title: string; price: number };

/** ADD-ON tetap (harga rupiah). */
export const ADDONS: Addon[] = [
  { id: "workshop-ekstra", title: "Workshop penerapan tambahan (2 sesi)", price: 5_000_000 },
  { id: "sprint-cepat", title: "Sprint revisi prioritas (jalur cepat)", price: 7_500_000 },
  { id: "implementasi-3bln", title: "Pendampingan implementasi 3 bulan", price: 15_000_000 },
  { id: "audit-tahun1", title: "Audit arsitektur dokumen tahun pertama", price: 9_000_000 },
  { id: "website", title: "Website company profile premium", price: 3_000_000 },
  { id: "ai-chatbot", title: "AI chatbot layanan pelanggan", price: 2_500_000 },
];

/** Persentase diskon per paket standar (kode → persen). */
export const DISCOUNT_PCT: Record<string, number> = {
  "PGA-39": 0,
  "PGA-45": 0,
  "PGA-72": 5,
  "PGA-120": 8,
  "PGA-165": 12,
};

// ─────────────────────────────── Tipe input ──────────────────────────────

export type ProposalInput = {
  /** Kode paket (mis. "PGA-72") atau "CUSTOM". */
  packageCode: string;
  /** Kode dokumen efektif (untuk CUSTOM = pilihan user; untuk standar = isi paket). */
  documentCodes: string[];
  /** Id add-on terpilih (harus ada di ADDONS). */
  addonIds: string[];
};

/** Bentuk paket minimal yang dibutuhkan calcProposal (subset GunaraPackageData). */
export type PackageLite = {
  code: string;
  name: string;
  docCount: number;
  price: number;
  durationWeeks: string;
};

/** Bentuk dokumen minimal untuk mapping kode → tier. */
export type DocLite = { code: string; tier: string };

// ─────────────────────────────── Tipe hasil ──────────────────────────────

export type TierBreakdown = { tier: string; count: number };

export type ProposalCalc = {
  docCount: number;
  unitPrice: number;
  subtotal: number;
  discountPct: number;
  discount: number;
  addons: Addon[];
  total: number;
  durationLabel: string;
  packageLabel: string;
  tierBreakdown: TierBreakdown[];
};

export type ProposalLineItem = { label: string; qty: number; amount: number };

// ─────────────────────────────── Kalkulasi ───────────────────────────────

const TIER_ORDER = ["P0 Navigasi", "P1 Pertumbuhan", "P2 Perluasan", "P3 Warisan"];

/**
 * Hitung penawaran dari input + daftar paket (dari DB).
 * @param input    pilihan user
 * @param packages daftar paket standar dari DB (GunaraPackage)
 * @param docs     opsional: mapping kode → tier (dari PgaDocument) untuk tierBreakdown
 */
export function calcProposal(
  input: ProposalInput,
  packages: PackageLite[],
  docs?: DocLite[],
): ProposalCalc {
  const pkg = packages.find((p) => p.code === input.packageCode) ?? null;
  const isStandard = pkg !== null;

  const docCount = isStandard ? pkg.docCount : input.documentCodes.length;
  const unitPrice = UNIT_PRICE;
  const subtotal = docCount * unitPrice;
  const discountPct = isStandard ? (DISCOUNT_PCT[pkg.code] ?? 0) : 0;
  const discount = Math.round((subtotal * discountPct) / 100);
  const addons = ADDONS.filter((a) => input.addonIds.includes(a.id));
  const addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
  const total = subtotal - discount + addonsTotal;

  // Durasi: paket standar pakai durationWeeks dari DB; kustom dihitung dari
  // jumlah dokumen (cepat = 6 dok/minggu, konservatif = 8 dok/minggu).
  let durationLabel: string;
  if (isStandard) {
    durationLabel = `${pkg.durationWeeks} minggu`;
  } else if (docCount === 0) {
    durationLabel = "—";
  } else {
    const min = Math.ceil(docCount / WEEKS_MIN_PER_DOC);
    const max = Math.ceil(docCount / WEEKS_MAX_PER_DOC);
    durationLabel = min === max ? `${min} minggu` : `${min}–${max} minggu`;
  }

  const packageLabel = isStandard ? `${pkg.code} — ${pkg.name}` : "Rakitan Kustom";

  // tierBreakdown: hitung dokumen per tier memakai mapping kode → tier.
  const tierByCode = new Map<string, string>();
  if (docs) {
    for (const d of docs) tierByCode.set(d.code, d.tier);
  }
  const counts = new Map<string, number>();
  let unknown = 0;
  for (const code of input.documentCodes) {
    const tier = tierByCode.get(code);
    if (tier) counts.set(tier, (counts.get(tier) ?? 0) + 1);
    else unknown += 1;
  }
  const tierBreakdown: TierBreakdown[] = [];
  for (const tier of TIER_ORDER) {
    const count = counts.get(tier);
    if (count) {
      tierBreakdown.push({ tier, count });
      counts.delete(tier);
    }
  }
  // Sisa tier di luar urutan standar (jaga-jaga bila DB berisi tier baru).
  for (const [tier, count] of counts) tierBreakdown.push({ tier, count });
  if (unknown > 0) tierBreakdown.push({ tier: "Tanpa Tier", count: unknown });

  return {
    docCount,
    unitPrice,
    subtotal,
    discountPct,
    discount,
    addons,
    total,
    durationLabel,
    packageLabel,
    tierBreakdown,
  };
}

/**
 * Susun line items [{label, qty, amount}] dari hasil kalkulasi — dipakai
 * bersama oleh API (menyimpan ke DB) dan wizard (ringkasan langkah 3)
 * agar keduanya selalu konsisten. Diskon masuk sebagai item negatif.
 */
export function buildLineItems(calc: ProposalCalc): ProposalLineItem[] {
  const items: ProposalLineItem[] = [];
  for (const t of calc.tierBreakdown) {
    items.push({ label: `Dokumen ${t.tier}`, qty: t.count, amount: t.count * calc.unitPrice });
  }
  if (calc.tierBreakdown.length === 0 && calc.docCount > 0) {
    items.push({
      label: `Dokumen arsitektur ${calc.packageLabel}`,
      qty: calc.docCount,
      amount: calc.subtotal,
    });
  }
  for (const a of calc.addons) {
    items.push({ label: a.title, qty: 1, amount: a.price });
  }
  if (calc.discount > 0) {
    items.push({
      label: `${DISCOUNT_LABEL} (${calc.discountPct}%)`,
      qty: 1,
      amount: -calc.discount,
    });
  }
  return items;
}

// ─────────────────────────────── Kode & tanggal ──────────────────────────

const CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** PNW-YYYYMMDD-XXX (3 karakter acak A-Z0-9) — tanggal dipin zona WIB agar
 *  konsisten dengan tanggal yang tercetak di dokumen. */
export function makeProposalCode(now: Date = new Date()): string {
  const ymd = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(now)
    .replace(/-/g, "");
  let suffix = "";
  for (let i = 0; i < 3; i += 1) {
    suffix += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return `PNW-${ymd}-${suffix}`;
}

/** Tanggal berlaku hingga: now + VALIDITY_DAYS hari. */
export function validUntilFrom(now: Date = new Date()): Date {
  return new Date(now.getTime() + VALIDITY_DAYS * 24 * 60 * 60 * 1000);
}

/** 4 Desember 2025 — format tanggal Indonesia (WIB) utk dokumen.
 *  Dipin ke Asia/Jakarta agar SSR & client menghasilkan teks yang identik. */
export function fmtDateID(value: Date | string): string {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  try {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    }).format(d);
  } catch {
    return "-";
  }
}

// ─────────────────────────────── Format rupiah ───────────────────────────

const RP_FORMATTER = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

/** 39000000 → "Rp 39.000.000" */
export function fmtRp(n: number): string {
  return RP_FORMATTER.format(n);
}

/** 39000000 → "Rp 39 jt" */
export function fmtJt(n: number): string {
  const jt = n / 1_000_000;
  const text = Number.isInteger(jt) ? String(jt) : jt.toFixed(1).replace(".", ",");
  return `Rp ${text} jt`;
}

// ─────────────────────────────── Status penawaran ────────────────────────

export const PROPOSAL_STATUSES = ["DRAFT", "SENT", "NEGOTIATION", "WON", "LOST"] as const;
export type ProposalStatus = (typeof PROPOSAL_STATUSES)[number];

export type StatusMeta = { label: string; chipClass: string };

/** Kelas chip lengkap (tinggal dipakai sebagai className). */
export const STATUS_META: Record<ProposalStatus, StatusMeta> = {
  DRAFT: {
    label: "Draft",
    chipClass:
      "inline-flex items-center gap-1.5 rounded-full border border-zinc-400/30 bg-zinc-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300",
  },
  SENT: {
    label: "Terkirim",
    chipClass:
      "inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300",
  },
  NEGOTIATION: {
    label: "Negosiasi",
    chipClass:
      "inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300",
  },
  WON: {
    label: "Menang",
    chipClass:
      "inline-flex items-center gap-1.5 rounded-full border border-emerald-400 bg-emerald-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-950",
  },
  LOST: {
    label: "Gagal",
    chipClass:
      "inline-flex items-center gap-1.5 rounded-full border border-red-400/40 bg-red-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300",
  },
};

const FALLBACK_STATUS: StatusMeta = STATUS_META.DRAFT;

/** Meta status dengan fallback aman (status tak dikenal → DRAFT). */
export function statusMeta(status: string): StatusMeta {
  return (STATUS_META as Record<string, StatusMeta>)[status] ?? FALLBACK_STATUS;
}

// ─────────────────────── Parsing baris DB → ProposalData ─────────────────

export type ProposalData = {
  id: string;
  code: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientWa: string;
  packageCode: string;
  documentCodes: string[];
  addons: Addon[];
  items: ProposalLineItem[];
  subtotal: number;
  discount: number;
  total: number;
  durationWeeks: string;
  notes: string;
  status: string;
  validUntil: string | null;
  createdAt: string;
  updatedAt: string;
};

/** Bentuk baris Proposal dari Prisma (kolom JSON masih string, tanggal Date). */
export type ProposalRowLike = {
  id: string;
  code: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientWa: string;
  packageCode: string;
  documentCodes: string;
  addons: string;
  items: string;
  subtotal: number;
  discount: number;
  total: number;
  durationWeeks: string;
  notes: string;
  status: string;
  validUntil: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
};

function parseStringArray(raw: string): string[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

function parseAddons(raw: string): Addon[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out: Addon[] = [];
    for (const item of parsed) {
      if (item && typeof item === "object" && "title" in item && "price" in item) {
        const rec = item as Record<string, unknown>;
        if (typeof rec.title === "string" && typeof rec.price === "number") {
          out.push({
            id: typeof rec.id === "string" ? rec.id : "",
            title: rec.title,
            price: rec.price,
          });
        }
      }
    }
    return out;
  } catch {
    return [];
  }
}

function parseItems(raw: string): ProposalLineItem[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out: ProposalLineItem[] = [];
    for (const item of parsed) {
      if (item && typeof item === "object" && "label" in item && "qty" in item && "amount" in item) {
        const rec = item as Record<string, unknown>;
        if (typeof rec.label === "string" && typeof rec.qty === "number" && typeof rec.amount === "number") {
          out.push({ label: rec.label, qty: rec.qty, amount: rec.amount });
        }
      }
    }
    return out;
  } catch {
    return [];
  }
}

function toIso(value: Date | string | null): string | null {
  if (value === null) return null;
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

/** Ubah baris Proposal (Prisma) menjadi objek terparse siap render. */
export function parseProposal(row: ProposalRowLike): ProposalData {
  return {
    id: row.id,
    code: row.code,
    clientName: row.clientName,
    clientCompany: row.clientCompany,
    clientEmail: row.clientEmail,
    clientWa: row.clientWa,
    packageCode: row.packageCode,
    documentCodes: parseStringArray(row.documentCodes),
    addons: parseAddons(row.addons),
    items: parseItems(row.items),
    subtotal: row.subtotal,
    discount: row.discount,
    total: row.total,
    durationWeeks: row.durationWeeks,
    notes: row.notes,
    status: row.status,
    validUntil: toIso(row.validUntil),
    createdAt: toIso(row.createdAt) ?? new Date(0).toISOString(),
    updatedAt: toIso(row.updatedAt) ?? new Date(0).toISOString(),
  };
}
