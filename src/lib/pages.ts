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
  { path: "/katalog-whatsapp", title: "Katalog WhatsApp", changeFrequency: "weekly", priority: 0.75, footer: true },
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
  esg: "ESG & Keberlanjutan",
  pendanaan: "Pendanaan & Investasi",
  struktur: "Struktur Grup & Transaksi",
  global: "Ekspansi Global",
  "kepatuhan-digital": "Kepatuhan Digital & Data",
  kreatif: "Industri Kreatif & Media",
  "pangan-kesehatan": "Pangan, Kesehatan & Farma",
  properti: "Properti & Infrastruktur",
  "sdm-organisasi": "SDM & Organisasi",
  resiliensi: "Resiliensi & Perlindungan",
  signature: "Layanan Istimewa Gunara",
  "agri-maritim": "Agribisnis, Peternakan & Maritim",
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
  esg:
    "Laporan keberlanjutan, jejak & kredit karbon, gedung hijau, EPR kemasan, hingga kepatuhan EUDR — bisnis yang bertanggung jawab sekaligus bernilai lebih.",
  pendanaan:
    "Pitch deck, valuasi, data room, crowdfunding OJK, KUR, ESOP, hingga IP sebagai jaminan kredit — pintu modal terbuka dengan struktur yang benar.",
  struktur:
    "Holding, joint venture, merger-akuisisi, piagam keluarga bisnis, suksesi, hingga perjanjian pemegang saham — arsitektur korporasi yang kokoh.",
  global:
    "Kantor perwakilan, entitas luar negeri, sertifikat asal, kawasan berikat, transfer pricing, hingga antidumping — dunia menjadi pasar Anda.",
  "kepatuhan-digital":
    "UU PDP, DPO as-a-service, PSE Komdigi, audit siber, tata kelola AI, hingga kepatuhan fintech OJK — data dan sistem Anda aman hukumnya.",
  kreatif:
    "LSF, izin konser, reklame, lisensi musik LMK, ISBN, rating game IGRS, Dewan Pers, hingga kontrak kreator — ekonomi kreatif tertata legalnya.",
  "pangan-kesehatan":
    "CPOTB, AKL alat kesehatan, label gizi, apotek & PBF, HACCP, organik, klinik, hingga P2K3 — produk sehat dengan legalitas lengkap.",
  properti:
    "Due diligence properti, pengalihan & HGU-HGB, perumahan, konsesi PPP, menara telekomunikasi, IUP tambang, hingga energi terbarukan.",
  "sdm-organisasi":
    "Job grading, audit payroll, PKWT, magang terkelola, outsourcing, PHK terkelola, ISO 37001, hingga kebijakan hybrid — SDM tertata dari akar.",
  resiliensi:
    "Asuransi bisnis, forensik digital, protokol krisis, BCP, pencegahan fraud, ERM, mediasi, piutang macet, hingga reputasi daring — bisnis yang tak mudah runtuh.",
  signature:
    "Produk eksklusif Gunara yang tidak dijual konsultan mana pun: Business DNA™, LaunchPad 30, Compliance Shield™, Deal Desk, Exit Ready™, TenderReady™, dan Founder Shield™ — metodologi berbrand dengan hasil terukur.",
  "agri-maritim":
    "ISPO/RSPO sawit, perikanan SIKPI, PVT varietas tanaman, peternakan & pakan, kemitraan plasma, SIPA air tanah, hingga RIPH hortikultura — legalitas lahan, laut, dan farm.",
};
