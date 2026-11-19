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

// ─── Nilai bawaan brand (fallback tanpa database) ───
// Angka & isi di bawah = identitas Gunara OS yang statis (dipublikasikan di
// seluruh halaman marketing): 165 dokumen, 20 domain, 4 tier, 5 paket.
// Isi paket disalin persis dari scripts/seed-gunara.ts agar fallback tidak
// pernah menampilkan versi berbeda dari data asli.

export const DEFAULT_DOC_COUNT = 165;
export const DEFAULT_DOMAIN_COUNT = 20;

export const DEFAULT_GUNARA_PACKAGES: GunaraPackageData[] = [
  {
    code: "PGA-39",
    name: "Gunara OS Core",
    tagline: "Fondasi kendali perusahaan",
    description:
      "39 dokumen navigasi inti untuk melindungi identitas, arah, tata kelola, dan kendali operasional perusahaan. Titik mulai wajib setiap organisasi serius — satu sumber kebenaran untuk seluruh tim.",
    docCount: 39,
    price: 39_000_000,
    durationWeeks: "6–8",
    features: [
      "39 dokumen P0 Navigasi terpilih",
      "Kickoff workshop 1 hari + wawancara founder",
      "Drafting oleh dewan pakar + 2x revisi",
      "Workshop serah terima & adopsi tim",
      "Akses Gunara OS digital 12 bulan",
    ],
    // Kode dokumen final dihitung dari relasi DB saat seeding —
    // fallback tanpa DB sengaja kosong.
    documentCodes: [],
    highlight: false,
    order: 1,
  },
  {
    code: "PGA-45",
    name: "Gunara OS Bisnis",
    tagline: "Fondasi + mesin pertumbuhan awal",
    description:
      "Semua dokumen Core ditambah 6 dokumen pertumbuhan paling vital: charter nilai, whitepaper, peta pasar, playbook penjualan, sistem kinerja, dan kode budaya. Perusahaan mulai berjalan dan tumbuh dengan sistem.",
    docCount: 45,
    price: 45_000_000,
    durationWeeks: "7–9",
    features: [
      "Semua isi paket Core (39 dokumen)",
      "6 dokumen P1 Pertumbuhan esensial",
      "Sesi strategi go-to-market 1x",
      "Peta KPI awal untuk tim inti",
      "Akses Gunara OS digital 18 bulan",
    ],
    documentCodes: [],
    highlight: false,
    order: 2,
  },
  {
    code: "PGA-72",
    name: "Gunara OS Pro",
    tagline: "Sistem operasi lengkap skala menengah",
    description:
      "Seluruh lapisan navigasi ditambah 32 dokumen pertumbuhan: strategi, layanan, operasional, keuangan, talenta, merek, dan data. Standar firma konsultan korporat — kini milik bisnis Anda.",
    docCount: 72,
    price: 72_000_000,
    durationWeeks: "10–14",
    features: [
      "40 dokumen P0 + 32 dokumen P1 terpilih",
      "Semua benefit paket Bisnis",
      "Peta kompetisi & unit economics",
      "SOP delivery + risk register",
      "Akses Gunara OS digital 24 bulan",
    ],
    documentCodes: [],
    highlight: true,
    order: 3,
  },
  {
    code: "PGA-120",
    name: "Gunara OS Skala",
    tagline: "Ekspansi multi-unit & kemitraan",
    description:
      "72 dokumen Pro diperluas ke arah perluasan: kemitraan global, ekonomi syariah, dampak sosial, teknologi masa depan, dan ketahanan krisis. Untuk grup usaha yang menyiapkan gelombang ekspansi berikutnya.",
    docCount: 120,
    price: 120_000_000,
    durationWeeks: "16–22",
    features: [
      "P0 (40) + P1 (40) + 40 dokumen P2 terpilih",
      "Semua benefit paket Pro",
      "Dokumen ekspansi & kemitraan global",
      "Framework teknologi & kedaulatan digital",
      "Akses Gunara OS digital 36 bulan",
    ],
    documentCodes: [],
    highlight: false,
    order: 4,
  },
  {
    code: "PGA-165",
    name: "Gunara OS Super Organisasi",
    tagline: "Arsitektur penuh 165 dokumen + warisan seabad",
    description:
      "Seluruh 165 dokumen lintas 20 domain — dari jiwa perusahaan hingga benteng hukum final. Paket warisan untuk membangun institusi yang bertahan seabad: lengkap, terukur, dan siap diaudit siapa pun.",
    docCount: 165,
    price: 165_000_000,
    durationWeeks: "20–28",
    features: [
      "Seluruh 165 dokumen lintas 20 domain",
      "Semua benefit paket Skala",
      "Dokumen warisan & covenant seabad",
      "Review berkala arsitektur dokumen 1x/tahun",
      "Akses Gunara OS digital seumur paket + prioritas dewan pakar",
    ],
    documentCodes: [],
    highlight: false,
    order: 5,
  },
];
