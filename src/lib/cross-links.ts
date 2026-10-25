/**
 * CROSS-LINKS — mesin internal linking DIGIMAN.ID.
 * Menghubungkan 165 halaman layanan dengan panduan blog (dua arah):
 *   • halaman layanan → artikel panduan terkait (kedalaman konten + crawl)
 *   • artikel blog → layanan relevan (jembatan pembaca → konversi)
 * Internal link yang kontekstual adalah salah satu sinyal on-page
 * terkuat untuk SEO — dan sepenuhnya berguna bagi pembaca manusia.
 */

/** Kategori layanan → slug artikel blog yang relevan (urut prioritas). */
const POSTS_BY_CATEGORY: Record<string, string[]> = {
  pendirian: [
    "biaya-pendirian-pt-2026-rincian-lengkap",
    "syarat-cara-mendirikan-pt-online-2025",
    "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok",
    "cara-memilih-kode-kbli-yang-tepat",
  ],
  perizinan: [
    "panduan-nib-oss-rba-2026",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
    "cara-memilih-kode-kbli-yang-tepat",
  ],
  ki: [
    "merek-vs-hak-cipta-vs-paten",
    "cara-mendaftarkan-merek-dagang-djki",
  ],
  sertifikasi: [
    "izin-edar-bpom-panduan-lengkap",
    "sertifikasi-halal-umkm-syarat-proses-biaya",
  ],
  pajak: [
    "pajak-umkm-2026-panduan-lengkap",
    "pph-final-umkm-05-persen",
    "biaya-pendirian-pt-2026-rincian-lengkap",
  ],
  ketenagakerjaan: [
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  korporasi: [
    "kewajiban-awal-setelah-pt-berdiri",
    "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok",
  ],
  digital: [
    "legalitas-umkm-online-2026",
    "virtual-office-vs-kantor-fisik",
  ],
  "kepatuhan-digital": [
    "legalitas-umkm-online-2026",
    "panduan-nib-oss-rba-2026",
  ],
  kreatif: [
    "merek-vs-hak-cipta-vs-paten",
  ],
  "pangan-kesehatan": [
    "izin-edar-bpom-panduan-lengkap",
    "sertifikasi-halal-umkm-syarat-proses-biaya",
  ],
  properti: [
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  "sdm-organisasi": [
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  resiliensi: [
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  pendanaan: [
    "biaya-pendirian-pt-2026-rincian-lengkap",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  struktur: [
    "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok",
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  global: [
    "cara-mendirikan-pt-pma-investor-asing",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  esg: [
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  signature: [
    "biaya-pendirian-pt-2026-rincian-lengkap",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  "agri-maritim": [
    "panduan-nib-oss-rba-2026",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
};

/** Fallback universal — untuk kategori yang belum punya pemetaan khusus. */
const DEFAULT_POSTS = [
  "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  "cara-memilih-kode-kbli-yang-tepat",
];

/** Slug artikel blog → slug layanan yang relevan (jembatan konversi). */
const SERVICES_BY_POST: Record<string, string[]> = {
  "biaya-pendirian-pt-2026-rincian-lengkap": [
    "pendirian-pt", "pt-perorangan", "pendirian-cv", "nib-oss",
  ],
  "syarat-cara-mendirikan-pt-online-2025": [
    "pendirian-pt", "nib-oss", "virtual-office",
  ],
  "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok": [
    "pt-perorangan", "pendirian-pt", "pendirian-cv", "firma-ud",
  ],
  "cara-mendirikan-pt-pma-investor-asing": [
    "pt-pma", "kitas-investor", "legalisasi-apostille",
  ],
  "cara-mendaftarkan-merek-dagang-djki": [
    "pendaftaran-merek", "branding-katalog", "franchise",
  ],
  "panduan-nib-oss-rba-2026": [
    "nib-oss", "izin-sektor-ss", "npwp-pkp",
  ],
  "cara-memilih-kode-kbli-yang-tepat": [
    "nib-oss", "pendirian-pt", "npwp-pkp",
  ],
  "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi": [
    "nib-oss", "pendirian-pt", "pendaftaran-merek", "sertifikasi-halal",
  ],
  "pph-final-umkm-05-persen": [
    "npwp-pkp", "pelaporan-pajak", "pt-perorangan",
  ],
  "sertifikasi-halal-umkm-syarat-proses-biaya": [
    "sertifikasi-halal", "higiene-sanitasi", "bpom",
  ],
  "virtual-office-vs-kantor-fisik": [
    "virtual-office", "pbg-slf",
  ],
  "kewajiban-awal-setelah-pt-berdiri": [
    "npwp-pkp", "bpjs", "lkpm", "pelaporan-pajak",
  ],
  // ── 5 artikel pillar premium 2026 ──
  "izin-edar-bpom-panduan-lengkap": [
    "bpom", "higiene-sanitasi", "sertifikasi-halal", "pendaftaran-merek",
  ],
  "merek-vs-hak-cipta-vs-paten": [
    "pendaftaran-merek", "hak-cipta-paten", "merek-internasional",
  ],
  "pajak-umkm-2026-panduan-lengkap": [
    "npwp-pkp", "pelaporan-pajak", "pt-perorangan", "lkpm",
  ],
  "legalitas-umkm-online-2026": [
    "pt-perorangan", "nib-oss", "wa-business", "marketplace",
  ],
};

/** Post slug → daftar slug layanan (maks `max`). */
export function serviceSlugsForPost(slug: string, max = 4): string[] {
  return (SERVICES_BY_POST[slug] ?? []).slice(0, max);
}

/** Kategori layanan → daftar slug artikel (maks `max`), fallback universal. */
export function postSlugsForCategory(category: string, max = 3): string[] {
  return (POSTS_BY_CATEGORY[category] ?? DEFAULT_POSTS).slice(0, max);
}
