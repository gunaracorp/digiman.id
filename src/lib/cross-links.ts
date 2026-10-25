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
    "kewajiban-bpjs-ketenagakerjaan-panduan-lengkap",
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  korporasi: [
    "kewajiban-rups-laporan-tahunan-pt-panduan",
    "kewajiban-awal-setelah-pt-berdiri",
    "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok",
  ],
  digital: [
    "digital-marketing-umkm-panduan-lengkap-2026",
    "legalitas-umkm-online-2026",
    "virtual-office-vs-kantor-fisik",
  ],
  "kepatuhan-digital": [
    "kepatuhan-uu-pdp-panduan-lengkap-bisnis",
    "legalitas-umkm-online-2026",
    "panduan-nib-oss-rba-2026",
  ],
  kreatif: [
    "legalitas-industri-kreatif-film-musik-penerbitan",
    "merek-vs-hak-cipta-vs-paten",
  ],
  "pangan-kesehatan": [
    "izin-edar-bpom-panduan-lengkap",
    "sertifikasi-halal-umkm-syarat-proses-biaya",
  ],
  properti: [
    "pbg-slf-legalitas-bangunan-panduan-lengkap",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  "sdm-organisasi": [
    "struktur-organisasi-grading-karyawan-panduan",
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  resiliensi: [
    "business-continuity-plan-panduan-lengkap",
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  pendanaan: [
    "pendanaan-bisnis-investor-pitch-deck-panduan",
    "biaya-pendirian-pt-2026-rincian-lengkap",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  struktur: [
    "perusahaan-holding-struktur-korporasi-panduan",
    "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok",
    "kewajiban-awal-setelah-pt-berdiri",
  ],
  global: [
    "panduan-memulai-ekspor-peb-sertifikat-asal",
    "cara-mendirikan-pt-pma-investor-asing",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  esg: [
    "laporan-keberlanjutan-pojk-51-panduan-lengkap",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  signature: [
    "layanan-signature-gunara-consultant-panduan",
    "biaya-pendirian-pt-2026-rincian-lengkap",
    "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
  ],
  "agri-maritim": [
    "legalitas-agribisnis-perkebunan-perikanan-panduan",
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
  // ── 14 artikel pillar kategori (1 dedikasi per kategori layanan) ──
  "kewajiban-bpjs-ketenagakerjaan-panduan-lengkap": [
    "bpjs", "audit-payroll", "kontrak-kerja-pkwt",
  ],
  "kepatuhan-uu-pdp-panduan-lengkap-bisnis": [
    "kepatuhan-uu-pdp", "dpo-layanan", "kebijakan-privasi-situs", "pse-komdigi",
  ],
  "digital-marketing-umkm-panduan-lengkap-2026": [
    "google-bisnisku", "marketplace", "wa-business", "website-ecommerce",
  ],
  "legalitas-industri-kreatif-film-musik-penerbitan": [
    "sertifikat-film-lsf", "lisensi-musik-lmk", "isbn-penerbitan", "izin-event-konser",
  ],
  "pbg-slf-legalitas-bangunan-panduan-lengkap": [
    "pbg-slf", "hgu-hgb-pertanahan", "due-diligence-properti",
  ],
  "struktur-organisasi-grading-karyawan-panduan": [
    "struktur-organisasi-grading", "sistem-penilaian-kinerja", "audit-payroll",
  ],
  "business-continuity-plan-panduan-lengkap": [
    "bisnis-kontinuitas-bcp", "manajemen-risiko-erm", "pencegahan-fraud-sop",
  ],
  "pendanaan-bisnis-investor-pitch-deck-panduan": [
    "pitch-deck-investor", "valuasi-bisnis", "kredit-kur", "pendanaan-scf",
  ],
  "perusahaan-holding-struktur-korporasi-panduan": [
    "pendirian-holding", "perjanjian-pemegang-saham", "tata-kelola-korporat",
  ],
  "laporan-keberlanjutan-pojk-51-panduan-lengkap": [
    "laporan-keberlanjutan", "jejak-karbon-nzkc", "esg-rantai-pasok",
  ],
  "legalitas-agribisnis-perkebunan-perikanan-panduan": [
    "ispo-rspo-sawit", "izin-perikanan-sikpi", "izin-peternakan-nak", "plasma-perkebunan-kemitraan",
  ],
  "panduan-memulai-ekspor-peb-sertifikat-asal": [
    "api-bea-cukai", "sertifikat-asal", "inkoterm-kontrak-ekspor", "lartas-ekspor-komoditas",
  ],
  "layanan-signature-gunara-consultant-panduan": [
    "dna-bisnis-360", "launchpad-30-hari", "shield-kepatuhan-tahunan", "exit-ready-valuation",
  ],
  "kewajiban-rups-laporan-tahunan-pt-panduan": [
    "perubahan-akta", "lkpm", "pelaporan-pajak", "tata-kelola-korporat",
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
