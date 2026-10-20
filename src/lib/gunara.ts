/**
 * GUNARA OS — tipe data & helper bersama.
 * Dipakai oleh: /api/gunara, os-explorer, os-teaser, dan (nanti) Proposal Studio.
 * Bentuk tipe di bawah = PERSIS response JSON GET /api/gunara.
 */

// ─── Tipe data (bentuk response API) ───

export type GunaraPackageData = {
  code: string; // "PGA-39" .. "PGA-165"
  name: string;
  tagline: string;
  description: string;
  docCount: number;
  price: number; // rupiah (formula standar: docCount × 1.000.000)
  durationWeeks: string; // "6–8"
  features: string[];
  documentCodes: string[];
  highlight: boolean;
  order: number;
};

export type PgaDomainData = {
  number: number; // 1..20
  name: string;
  tagline: string;
  description: string;
  docCount: number; // dihitung server dari relasi dokumen
};

export type PgaDocData = {
  code: string; // "PGA-01" .. "PGA-165"
  number: number;
  title: string;
  tier: string; // "P0 Navigasi" | "P1 Pertumbuhan" | "P2 Perluasan" | "P3 Warisan"
  owner: string;
  domainNumber: number;
  points: string[];
};

export type GunaraApiResponse = {
  packages: GunaraPackageData[];
  domains: PgaDomainData[];
  docs: PgaDocData[];
};

// ─── Tier metadata ───

export const TIER_KEYS = [
  "P0 Navigasi",
  "P1 Pertumbuhan",
  "P2 Perluasan",
  "P3 Warisan",
] as const;

export type PgaTierKey = (typeof TIER_KEYS)[number];

export type TierMeta = {
  short: "P0" | "P1" | "P2" | "P3";
  label: string;
  /** Kelas chip lengkap (border + bg + teks). */
  colorClass: string;
  /** Kelas titik warna kecil. */
  dotClass: string;
};

export const TIER_META: Record<PgaTierKey, TierMeta> = {
  "P0 Navigasi": {
    short: "P0",
    label: "Navigasi",
    colorClass: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    dotClass: "bg-emerald-400",
  },
  "P1 Pertumbuhan": {
    short: "P1",
    label: "Pertumbuhan",
    colorClass: "border-teal-400/30 bg-teal-400/10 text-teal-300",
    dotClass: "bg-teal-400",
  },
  "P2 Perluasan": {
    short: "P2",
    label: "Perluasan",
    colorClass: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    dotClass: "bg-amber-400",
  },
  "P3 Warisan": {
    short: "P3",
    label: "Warisan",
    colorClass: "border-gold/40 bg-gold/10 text-gold-light",
    dotClass: "bg-gold",
  },
};

const FALLBACK_TIER: TierMeta = TIER_META["P0 Navigasi"];

/** Meta tier dengan fallback aman bila DB memuat nilai tier di luar 4 standar. */
export function tierMeta(tier: string): TierMeta {
  return (TIER_META as Record<string, TierMeta>)[tier] ?? FALLBACK_TIER;
}

// ─── Format rupiah ───

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

// ─── sessionStorage presets ───
// PENTING (SSR-safe): fungsi-fungsi ini HANYA boleh dipanggil dari event
// handler klik / efek client — tidak pernah saat render awal.

/** Kunci preset paket terpilih (isi: string kode, mis. "PGA-72"). */
export const PRESET_KEY = "gunara-preset";
/** Kunci daftar dokumen terpilih (isi: JSON array kode, mis. ["PGA-01"]). */
export const DOCS_KEY = "gunara-docs";

/** Simpan pilihan paket (dipanggil saat klik CTA paket). */
export function savePackagePreset(code: string): void {
  try {
    window.sessionStorage.setItem(PRESET_KEY, code);
  } catch {
    // Storage bisa diblokir (private mode) — abaikan dengan aman.
  }
}

/** Tambahkan satu kode dokumen ke draft penawaran (dedupe). */
export function addDocCode(code: string): void {
  try {
    const list = readDocCodes();
    if (!list.includes(code)) list.push(code);
    window.sessionStorage.setItem(DOCS_KEY, JSON.stringify(list));
  } catch {
    // abaikan
  }
}

/** Baca daftar kode dokumen dari draft penawaran. */
export function readDocCodes(): string[] {
  try {
    const raw = window.sessionStorage.getItem(DOCS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}
