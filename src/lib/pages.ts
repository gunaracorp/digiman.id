/**
 * Registri halaman publik DIGIMAN.ID — sumber tunggal untuk:
 * sitemap.ts, navigasi (navbar/footer), dan breadcrumb.
 * Menambah halaman baru di sini otomatis ikut terindeks mesin pencari.
 */
export interface PageEntry {
  path: string;
  title: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  /** Tampilkan di navigasi utama (desktop) */
  nav?: boolean;
  /** Tampilkan di footer */
  footer?: boolean;
}

export const PAGES: PageEntry[] = [
  { path: "/layanan", title: "Semua Layanan", changeFrequency: "weekly", priority: 0.9, nav: true, footer: true },
  { path: "/paket-harga", title: "Paket & Harga", changeFrequency: "weekly", priority: 0.9, nav: true, footer: true },
  { path: "/tentang-kami", title: "Tentang Kami", changeFrequency: "monthly", priority: 0.8, nav: true, footer: true },
  { path: "/blog", title: "Artikel & Panduan", changeFrequency: "weekly", priority: 0.8, nav: true, footer: true },
  { path: "/faq", title: "Pertanyaan Umum", changeFrequency: "monthly", priority: 0.7, footer: true },
  { path: "/kontak", title: "Kontak & Kantor", changeFrequency: "monthly", priority: 0.8, nav: true, footer: true },
  { path: "/syarat-ketentuan", title: "Syarat & Ketentuan", changeFrequency: "yearly", priority: 0.3, footer: true },
  { path: "/kebijakan-privasi", title: "Kebijakan Privasi", changeFrequency: "yearly", priority: 0.3, footer: true },
];

/** Label ramah untuk kategori layanan (sinkron dengan kategori di DB) */
export const CATEGORY_LABEL: Record<string, string> = {
  pendirian: "Pendirian Badan Usaha",
  perizinan: "Perizinan & Legalitas",
  ki: "Kekayaan Intelektual",
  sertifikasi: "Sertifikasi Produk",
  pajak: "Perpajakan",
  ketenagakerjaan: "Ketenagakerjaan & Imigrasi",
  korporasi: "Korporasi & Legal",
  digital: "Digitalisasi & Teknologi",
};

export const CATEGORY_DESC: Record<string, string> = {
  pendirian:
    "Lahirkan badan usaha Anda secara resmi — PT, CV, PT PMA, koperasi, yayasan, hingga perkumpulan. Akta resmi, terpengesahan, siap operasi.",
  perizinan:
    "NIB OSS-RBA, izin sektor, sertifikat standar, domisili usaha, hingga legalisasi dokumen untuk ekspansi luar negeri.",
  ki: "Amankan aset tak berwujud Anda: merek, hak cipta, paten, desain industri, dan lisensi franchise (STPW).",
  sertifikasi:
    "Buka gerbang pasar yang lebih besar: Halal, BPOM, SNI, dan ISO — didampingi konsultan bersertifikat.",
  pajak:
    "NPWP badan, pengukuhan PKP, SPT, e-Faktur — patuh pajak tanpa drama, dikelola konsultan bersertifikat.",
  ketenagakerjaan:
    "BPJS, RPTKA, KITAS/KITAP — urus tenaga kerja dan tenaga asing sesuai regulasi terbaru.",
  korporasi:
    "Perusahaan hidup dan berubah: perubahan akta, struktur saham, pembubaran-likuidasi, hingga legal drafting & due diligence.",
  digital:
    "Website, e-commerce, aplikasi internal, otomasi AI, dan digital marketing — langit ke-7 ekosistem Digiman.",
};
