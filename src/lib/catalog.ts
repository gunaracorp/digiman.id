/**
 * KATALOG KANONIK LAYANAN DIGIMAN.ID — SATU SUMBER KEBENARAN.
 *
 * Berkas ini adalah data murni (tanpa dependensi DB) yang dipakai oleh:
 *   - scripts/seed-v2.ts        (seeding DB awal)
 *   - scripts/migrate-services-v3.ts (sinkronisasi DB ↔ katalog)
 *   - src/lib/digiman-data.ts   (DEFAULT_SERVICES fallback — diturunkan otomatis)
 *
 * Urutan entri = urutan tampil di situs. Jangan mengubah slug yang sudah
 * tayang tanpa menambahkan redirect 301 di next.config.ts.
 */

export interface Svc {
  slug: string;
  title: string;
  desc: string;
  price: string;
  features: string[];
  icon: string;
  category: string;
  featured?: boolean;
  matchTitle?: string; // judul lama di DB utk di-update
}

/** Kategori layanan dengan label tampilan (dipakai seluruh situs) */
export const CATEGORY_LABELS: Record<string, string> = {
  pendirian: "Pendirian Badan Usaha",
  perizinan: "Perizinan & NIB",
  ki: "Kekayaan Intelektual",
  sertifikasi: "Sertifikasi",
  pajak: "Pajak",
  ketenagakerjaan: "Ketenagakerjaan",
  korporasi: "Korporasi",
  digital: "Digitalisasi",
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

export const CATALOG: Svc[] = [
  // ===== 1. PENDIRIAN BADAN USAHA =====
  {
    slug: "pendirian-pt", title: "Pendirian PT", icon: "Building2", category: "pendirian", featured: true,
    matchTitle: "Pendirian PT", price: "Mulai Rp 3,5 jt",
    desc: "Akta notaris, SK Kemenkumham, NPWP, NIB — paket lengkap PT resmi berdiri dalam hitungan hari.",
    features: ["Akta Notaris + SK Kemenkumham", "NPWP & NIB otomatis", "Domisili usaha", "Gratis konsultasi KBLI"],
  },
  {
    slug: "pt-perorangan", title: "PT Perorangan (UUCK)", icon: "FileBadge", category: "pendirian",
    price: "Mulai Rp 850 rb",
    desc: "Badan usaha resmi untuk usaha individu via OSS — tanpa notaris, NIB terbit langsung, modal kecil maksimal.",
    features: ["NIB sebagai legalitas pasti", "Tanpa akta notaris", "Kewajiban pajak ringan", "Cocok UMKM & freelancer"],
  },
  {
    slug: "pendirian-cv", title: "Pendirian CV", icon: "Users", category: "pendirian",
    matchTitle: "Pendirian CV", price: "Mulai Rp 1,8 jt",
    desc: "Pilihan ideal usaha keluarga & kemitraan. Cepat, murah, dan sah di mata hukum.",
    features: ["Akta notaris CV", "Pengesahan kehakiman", "NPWP & NIB", "Konsultasi struktur modal"],
  },
  {
    slug: "pt-pma", title: "PT PMA (Investasi Asing)", icon: "Globe2", category: "pendirian",
    matchTitle: "PT PMA (Modal Asing)", price: "Mulai Rp 15 jt",
    desc: "Berinvestasi di Indonesia? Kami pegang seluruh regulasi BKPM & OSS untuk Anda.",
    features: ["Struktur saham asing", "Laporan BKPM/OSS", "Izin investasi", "Pendampingan DGT & Bank"],
  },
  {
    slug: "firma-ud", title: "Firma, UD & Persekutuan", icon: "Store", category: "pendirian",
    price: "Mulai Rp 1,2 jt",
    desc: "Bentuk badan usaha klasik untuk dagang & kemitraan nama bersama — cepat berdiri, biaya efisien.",
    features: ["Akta Firma/UD notaris", "NPWP & NIB", "Surat Keterangan Domisili", "Konsultasi tanggung jawab utang"],
  },
  {
    slug: "pendirian-koperasi", title: "Pendirian Koperasi", icon: "Handshake", category: "pendirian",
    price: "Mulai Rp 2,5 jt",
    desc: "Koperasi konsumen, produsen, atau jasa — dari AD/ART hingga BADAN legalitas resmi Kemenkop.",
    features: ["Rapat pendirian & AD/ART", "Pengesahan Kemenkop UKM", "NPWP & NIB koperasi", "Panduan SHU & RAT"],
  },
  {
    slug: "pendirian-yayasan", title: "Yayasan & Lembaga Nirlaba", icon: "HeartHandshake", category: "pendirian",
    price: "Mulai Rp 3 jt",
    desc: "Berdiri untuk kebaikan sosial, pendidikan, atau keagamaan — legal penuh dengan struktur organ yang benar.",
    features: ["Akta yayasan + SK Kemenkumham", "Struktur pembina-pengurus-pengawas", "NPWP & NIB", "Konsultasi pajak nirlaba"],
  },
  {
    slug: "perkumpulan-asosiasi", title: "Perkumpulan & Asosiasi", icon: "Network", category: "pendirian",
    price: "Mulai Rp 2,5 jt",
    desc: "Asosiasi profesi atau industri dengan badan hukum — angkatan besar, kredibilitas tinggi.",
    features: ["AD/ART perkumpulan", "SK Kemenkumham", "NPWP & NIB", "Panduan keanggotaan & iuran"],
  },

  // ===== 2. PERIZINAN & LEGALITAS =====
  {
    slug: "nib-oss", title: "NIB, OSS-RBA & Pemetaan KBLI", icon: "Stamp", category: "perizinan",
    matchTitle: "NIB, OSS & Izin Sektor", price: "Mulai Rp 750 rb",
    desc: "Nomor Induk Berusaha sebagai identitas utama bisnis Anda di sistem OSS-RBA — KBLI dipetakan presisi.",
    features: ["Registrasi OSS-RBA", "Analisis KBLI optimal", "NIB sama dengan izin dasar", "Revisi & penyesuaian data"],
  },
  {
    slug: "izin-sektor-ss", title: "Izin Usaha Sektor & Sertifikat Standar", icon: "FileCheck2", category: "perizinan",
    price: "Mulai Rp 1 jt",
    desc: "Perizinan spesifik sektor: kesehatan, makanan, logistik, konstruksi, pariwisata — sampai terbit.",
    features: ["Sertifikat Standar (SS)", "PKKPR & lingkungan", "Izin edar, SIUP, SLO", "Pendampingan audit lapangan"],
  },
  {
    slug: "virtual-office", title: "Domisili Usaha & Virtual Office", icon: "MapPin", category: "perizinan",
    price: "Mulai Rp 500 rb",
    desc: "Alamat bisnis bergengsi tanpa biaya kantor fisik — SKDU/SKPPK lengkap untuk pendirian & perizinan.",
    features: ["SKDU / SKPPK", "Virtual office premium", "Layanan terima surat", "Cocok untuk PT & PMA"],
  },
  {
    slug: "legalisasi-apostille", title: "Legalisisasi, Apostille & Terjemahan", icon: "FileSignature", category: "perizinan",
    price: "Mulai Rp 350 rb/dok",
    desc: "Dokumen sah untuk dipakai luar negeri: apostille Kemenkumham, legalisasi KBRI, terjemahan tersumpah.",
    features: ["Apostille documents resmi", "Legalisasi kedutaan", "Terjemahan tersumpah", "Notaris & e-KTA"],
  },
  {
    slug: "izin-lingkungan", title: "Persetujuan Lingkungan & AMDAL", icon: "Leaf", category: "perizinan",
    price: "Mulai Rp 2,5 jt",
    desc: "UKL-UPL atau AMDAL sesuai skala risiko usaha — pintu wajib sebelum izin sektor terbit.",
    features: ["Saringan risiko & jenis dokumen", "UKL-UPL / AMDAL lengkap", "Panduan persetujuan DPMPTSP", "Sosialisasi & partisipasi publik"],
  },
  {
    slug: "pbg-slf", title: "PBG & Sertifikat Laik Fungsi", icon: "Building", category: "perizinan",
    price: "Mulai Rp 1,5 jt",
    desc: "Persetujuan Bangunan Gedung pengganti IMB dan SLF — gedung Anda sah dibangun, sah dipakai.",
    features: ["PBG baru & perubahan", "SLF gedung eksisting", "Cek gambar teknis & lokasi", "Konsultasi tarif retribusi"],
  },
  {
    slug: "sbu-konstruksi", title: "SBU Konstruksi & Sertifikat Kompetensi", icon: "HardHat", category: "perizinan",
    price: "Mulai Rp 2 jt",
    desc: "Sertifikat Badan Usaha jasa konstruksi via LPJK — kualifikasi & subkualifikasi sesuai bidang Anda.",
    features: ["Registrasi SBU LPJK", "Sertifikat teknis & ahli", "Kualifikasi Madya & Utama", "Perpanjangan & peningkatan"],
  },
  {
    slug: "api-bea-cukai", title: "API-U/API-P & Registrasi Bea Cukai", icon: "Ship", category: "perizinan",
    price: "Mulai Rp 1,5 jt",
    desc: "Angka Pengenal Impor dan nomor registrasi bea cukai — pintu legal impor-ekspor untuk bisnis Anda.",
    features: ["API-U / API-P di OSS", "Nomor registrasi bea cukai", "Konfigurasi KBLI impor", "Panduan HS Code & lartas"],
  },
  {
    slug: "izin-distribusi", title: "Izin Distribusi & Fasilitas Pemasaran", icon: "Truck", category: "perizinan",
    price: "Mulai Rp 1,5 jt",
    desc: "Izin usaha distribusi, penjualan langsung, sampai fasilitas pemasaran (Warsek) — barang beredar legal.",
    features: ["Izin distribusi (IDT)", "Fasilitas pemasaran & gudang", "Surat jalan & wajib lapor", "Untuk produsen & distributor"],
  },

  // ===== 3. KEKAYAAN INTELEKTUAL =====
  {
    slug: "pendaftaran-merek", title: "Pendaftaran Merek", icon: "Lightbulb", category: "ki",
    matchTitle: "Merek, Hak Cipta & Paten", price: "Mulai Rp 1,5 jt",
    desc: "Amankan brand Anda sebelum orang lain. Cek ketersediaan + pengajuan ke DJKI.",
    features: ["Pencarian & analisis merek", "Pengajuan kelas Nice", "Monitoring status", "Balasan argumen DJKI"],
  },
  {
    slug: "hak-cipta-paten", title: "Hak Cipta, Paten & Desain Industri", icon: "Copyright", category: "ki",
    price: "Mulai Rp 900 rb",
    desc: "Karya, inovasi, dan desain adalah aset — daftarkan agar sah, bernilai, dan bisa dipertaruhkan.",
    features: ["Hak cipta karya & aplikasi", "Paten & paten sederhana", "Desain industri", "Sertifikat resmi DJKI"],
  },
  {
    slug: "merek-internasional", title: "Merek Internasional (Protokol Madrid)", icon: "Flag", category: "ki",
    price: "Mulai Rp 12 jt",
    desc: "Satu pengajuan, banyak negara — daftarkan merek Anda ke 100+ negara lewat Protokol Madrid via DJKI.",
    features: ["Aplikasi Madrid via DJKI", "Seleksi negara tujuan", "Riset kelas Nice & risk check", "Monitoring pendaftaran"],
  },
  {
    slug: "franchise", title: "Lisensi Franchise (STPW)", icon: "ScrollText", category: "ki",
    price: "Mulai Rp 2 jt",
    desc: "Siap mengembangkan jaringan franchise? STPW + prospek usaha tersusun sesuai regulasi Kemenperin.",
    features: ["STPW Kemenperin", "Prospek & pengalaman usaha", "Perjanjian franchise", "Manual brand & SOP"],
  },

  // ===== 4. SERTIFIKASI & STANDAR =====
  {
    slug: "sertifikasi-halal", title: "Sertifikasi Halal", icon: "BadgeCheck", category: "sertifikasi",
    price: "Mulai Rp 1,5 jt",
    desc: "Proses penuh di SIHALAL: dari SJPH, penyelia halal, hingga Audit & keputusan fatwa — garansi halal.",
    features: ["Pengajuan SIHALAL", "Pendampingan SJPH", "Penyelia halal terlatih", "Audit & sertifikat BPJPH"],
  },
  {
    slug: "bpom", title: "Izin Edar & Notifikasi BPOM", icon: "ShieldCheck", category: "sertifikasi",
    price: "Mulai Rp 2 jt",
    desc: "Produk makanan, kosmetik, obat tradisional lolos BPOM — MD/CD terbit, produk siap pajang di rak.",
    features: ["Notifikasi kosmetik (e-Not)", "Izin edar MD & CD", "Analisis label & komposisi", "Pendaftaran pabrik/importir"],
  },
  {
    slug: "sni", title: "Sertifikat SNI", icon: "Award", category: "sertifikasi",
    price: "Mulai Rp 2,5 jt",
    desc: "Wajib untuk produk tertentu (sepatu, kabel, makanan olahan) — kami dampingi uji lab sampai SNI terbit.",
    features: ["Analisis kewajiban SNI", "Pengujian lab terakreditasi", "Audit pabrik (SPPT-SNI)", "Penandaan LSPro"],
  },
  {
    slug: "iso", title: "Sertifikasi ISO", icon: "Medal", category: "sertifikasi",
    price: "Mulai Rp 5 jt",
    desc: "ISO 9001, 14001, 22000, 27001 — naikkan kredibilitas tender & kepercayaan mitra internasional.",
    features: ["Gap analysis awal", "Penyusunan dokumen SMM", "Pendampingan audit sertifikasi", "Sertifikat dari badan akreditasi"],
  },
  {
    slug: "higiene-sanitasi", title: "Sertifikat Laik Higiene & Sanitasi", icon: "UtensilsCrossed", category: "sertifikasi",
    price: "Mulai Rp 900 rb",
    desc: "Restoran, katering, pabrik pangan sah operasional — SLHS dari Dinkes agar inspeksi tidak menghentikan usaha.",
    features: ["Audit pra-inspeksi Dinkes", "Checklist higiene & sanitasi", "Pengujian lab & swab OK", "Sertifikat & pemutakhiran"],
  },

  // ===== 5. PERPAJAKAN =====
  {
    slug: "npwp-pkp", title: "NPWP Badan & Pengukuhan PKP", icon: "Receipt", category: "pajak",
    price: "Mulai Rp 400 rb",
    desc: "NPWP badan, pengukuhan PKP 4,7% rate 0,5% (UMKM), sampai aktivasi e-Faktur & coretax.",
    features: ["NPWP badan/pribadi asing", "Pengukuhan PKP", "Aktivasi Coretax DJP", "Konsultasi tarif optimal"],
  },
  {
    slug: "pelaporan-pajak", title: "SPT, e-Faktur & Pelaporan Pajak", icon: "Calculator", category: "pajak",
    price: "Mulai Rp 500 rb/bln",
    desc: "Tenangkan kepala Anda: seluruh kewajiban pajak bulanan & tahunan dikelola konsultan bersertifikat.",
    features: ["SPT Masa PPN & PPh", "SPT Tahunan badan", "e-Faktur & pembukuan", "Restitusi & pemeriksaan pajak"],
  },

  // ===== 6. KETENAGAKERJAAN =====
  {
    slug: "bpjs", title: "BPJS Kesehatan & Ketenagakerjaan", icon: "HeartPulse", category: "ketenagakerjaan",
    price: "Mulai Rp 300 rb",
    desc: "Patuhi aturan ketenagakerjaan: daftar & kelola BPJS seluruh karyawan tanpa pusing administrasi.",
    features: ["Registrasi perusahaan BPJS", "Enrollment karyawan", "JPK terintegrasi perjanjian kerja", "Mutasi & klaim bulanan"],
  },
  {
    slug: "kitas-rptka", title: "KITAS/KITAP & RPTKA", icon: "Plane", category: "ketenagakerjaan",
    price: "Mulai Rp 5 jt",
    desc: "Pekerja asing & investor asing legal bekerja/tinggal: RPTKA, notification, VITAS-KITAS sampai KITAP.",
    features: ["RPTKA Kemnaker", "Notifikasi & telex VITAS", "KITAS investor & pekerja", "KITAP & MERP"],
  },
  {
    slug: "kitas-investor", title: "KITAS Investor & Direksi PMA", icon: "UserCheck", category: "ketenagakerjaan",
    price: "Mulai Rp 7 jt",
    desc: "Tinggal & mengurus bisnis di Indonesia tanpa RPTKA — jalur indeks D2 untuk investor & direksi PMA.",
    features: ["E-Visa indeks D2", "KITAS investor 1–2 tahun", "Tanpa DPKK & RPTKA", "MERP & multiple exit"],
  },
  {
    slug: "smk3", title: "SMK3 & Ahli K3 Kemnaker", icon: "ShieldPlus", category: "ketenagakerjaan",
    price: "Mulai Rp 3 jt",
    desc: "Sertifikasi Sistem Manajemen K3 wajib untuk perusahaan berisiko tinggi/100+ pekerja — dari audit sampai terbit.",
    features: ["Gap audit & perencanaan", "Dokumen SMK3 (5 kriteria)", "Audit eksternal Kemnaker", "Ahli K3 umum & khusus"],
  },
  {
    slug: "bnsp", title: "Sertifikasi Kompetensi BNSP", icon: "GraduationCap", category: "ketenagakerjaan",
    price: "Mulai Rp 750 rb",
    desc: "Sertifikat kompetensi personel & pekerja — syarat seleksi kerja, tender, dan perizinan sektor.",
    features: ["Skema sesuai jabatan", "Pendampingan uji kompetensi", "TUK terdekat & fleksibel", "Sertifikat resmi BNSP"],
  },

  // ===== 7. KORPORASI & LEGAL =====
  {
    slug: "perubahan-akta", title: "Perubahan Akta & Struktur", icon: "FileText", category: "korporasi",
    price: "Mulai Rp 1,5 jt",
    desc: "Ganti nama, alamat, pengurus, modal, pemegang saham, atau tambah KBLI — semua diurus tuntas.",
    features: ["Akta perubahan notaris", "Pengesahan Kemenkumham", "Update NIB/OSS & NPWP", "Publikasi tambahan bila wajib"],
  },
  {
    slug: "pembubaran", title: "Pembubaran & Likuidasi", icon: "Archive", category: "korporasi",
    price: "Mulai Rp 2,5 jt",
    desc: "Tutup badan usaha dengan benar: RUPS pembubaran, pelunasan kewajiban, hingga penghapusan NIB.",
    features: ["RUPS & akta pembubaran", "Pemberitahuan kreditor", "Pelaporan pajak akhir", "Penghapusan NIB & NPWP"],
  },
  {
    slug: "legal-drafting", title: "Legal Drafting & Due Diligence", icon: "Scale", category: "korporasi",
    price: "Mulai Rp 750 rb",
    desc: "Perjanjian bisnis yang menutup celah hukum, dan pemeriksaan legalitas mitra sebelum Anda menandatangani.",
    features: ["Perjanjian kerja sama", "Perjanjian kerja & confidential", "Legal due diligence mitra", "Review kontrak oleh pakar"],
  },
  {
    slug: "lkpm", title: "LKPM & Kepatuhan OSS", icon: "ClipboardCheck", category: "korporasi",
    price: "Mulai Rp 400 rb/lapor",
    desc: "Laporan Kegiatan Penanaman Modal tepat waktu — hindari sanksi, penahanan perizinan, sampai pencabutan NIB.",
    features: ["LKPM bulanan/triwulan", "Susunan laporan & data", "Validasi di OSS-RBA", "Audit kepatuhan OSS penuh"],
  },

  // ===== 8. DIGITALISASI =====
  {
    slug: "website-ecommerce", title: "Website & E-Commerce", icon: "Rocket", category: "digital",
    matchTitle: "Digitalisasi Bisnis", price: "Mulai Rp 3 jt",
    desc: "Website company profile sampai toko online — cepat, SEO-ready, dan meyakinkan pelanggan.",
    features: ["Company profile premium", "Toko online & payment gateway", "SEO & Google Business", "Domain, hosting, email bisnis"],
  },
  {
    slug: "aplikasi-sistem", title: "Aplikasi & Sistem Internal", icon: "MonitorSmartphone", category: "digital",
    price: "Konsultasi custom",
    desc: "POS, inventori, HRIS, CRM, hingga sistem khusus industri — dibangun tim software berpengalaman.",
    features: ["Kasir, stok & laporan", "HRIS & penggajian", "CRM & keanggotaan", "Integrasi & dashboard"],
  },
  {
    slug: "otomasi-ai", title: "Otomasi AI & Digital Marketing", icon: "Sparkles", category: "digital",
    price: "Mulai Rp 2,5 jt/bln",
    desc: "Chatbot WhatsApp AI, iklan berperforma, dan konten yang bekerja 24 jam untuk penjualan Anda.",
    features: ["Chatbot & AI assistant", "Ads Meta/Google/TikTok", "Konten & social media", "Laporan performa bulanan"],
  },
  {
    slug: "wa-business", title: "WhatsApp Business API & Katalog", icon: "MessageCircle", category: "digital",
    price: "Mulai Rp 1,5 jt",
    desc: "WA Business API resmi, katalog produk digital, chatbot pemesanan — jualan langsung dari chat pelanggan.",
    features: ["Pendaftaran WABA resmi Meta", "Katalog produk & keranjang", "Chatbot pemesanan 24 jam", "Integrasi CRM & notifikasi"],
  },
  {
    slug: "google-bisnisku", title: "Google Business Profile & Local SEO", icon: "SearchCheck", category: "digital",
    price: "Mulai Rp 750 rb",
    desc: "Tampil pertama saat warga cari usaha Anda di Google Maps & pencarian lokal — profil dioptimalkan penuh.",
    features: ["Profil Google diverifikasi", "Optimasi kategori & jasa", "Foto, produk & promo", "Review strategy & laporan"],
  },
  {
    slug: "marketplace", title: "Marketplace & TikTok Shop", icon: "ShoppingBag", category: "digital",
    price: "Mulai Rp 1,25 jt",
    desc: "Toko resmi di Shopee, Tokopedia, Lazada & TikTok Shop — setup lengkap sampai pesanan pertama masuk.",
    features: ["Toko resmi & verifikasi", "Listing produk SEO marketplace", "Flash sale & promo setup", "Live selling & affiliate setup"],
  },
  {
    slug: "branding-katalog", title: "Branding & Konten Katalog", icon: "Palette", category: "digital",
    price: "Mulai Rp 1,5 jt",
    desc: "Logo, foto produk, desain katalog & konten sosial media — penampilan premium yang membangun kepercayaan.",
    features: ["Logo & identitas visual", "Foto produk profesional", "Desain katalog & banner", "Template konten sosmed"],
  },

  // ===== 9. ESG & KEBERLANJUTAN =====
  {
    slug: "laporan-keberlanjutan", title: "Laporan Keberlanjutan (Sustainability Report)", icon: "Sprout", category: "esg",
    price: "Mulai Rp 15 jt",
    desc: "Laporan keberlanjutan standar GRI/ISSB — kewajiban emitens, keunggulan tender dan kredibilitas di mata mitra global.",
    features: ["Garis dasar materialitas ESG", "Struktur GRI/ISSB & POJK 51/2017", "Pengumpulan data ESG menyeluruh", "Desain laporan & publikasi"],
  },
  {
    slug: "jejak-karbon-nzkc", title: "Jejak Karbon & Roadmap Net Zero", icon: "Wind", category: "esg",
    price: "Mulai Rp 12 jt",
    desc: "Penghitungan jejak karbon Scope 1–3 dan peta jalan net zero — dasar laporan ESG dan kesiapan pasar karbon.",
    features: ["Kalkulasi Scope 1, 2 & 3", "Intensitas emisi per unit usaha", "Roadmap NZKC berjenjang", "Siap SRN & verifikasi pihak ketiga"],
  },
  {
    slug: "kredit-karbon", title: "Pengembangan Proyek Kredit Karbon", icon: "Earth", category: "esg",
    price: "Mulai Rp 20 jt",
    desc: "Dari baseline, MRV, sampai pendaftaran SRN-PPI — proyek Anda menghasilkan kredit karbon yang sah dan bisa dijual.",
    features: ["Feasibility & baseline proyek", "Dokumen MRV lengkap", "Pendaftaran SRN-PPI", "Koneksi dengan pembeli kredit"],
  },
  {
    slug: "esg-rantai-pasok", title: "Audit ESG Rantai Pasok", icon: "Boxes", category: "esg",
    price: "Mulai Rp 10 jt",
    desc: "Rantai pasok Anda diperiksa dan diberi kode vendor — memenuhi syarat buyer global yang semakin ketat.",
    features: ["Assessment vendor bertingkat", "Penyusunan kode etik vendor", "Rencana perbaikan pemasok", "Kesiapan audit buyer internasional"],
  },
  {
    slug: "gedung-hijau", title: "Sertifikasi Gedung Hijau", icon: "House", category: "esg",
    price: "Mulai Rp 15 jt",
    desc: "GREENSHIP/EDGE untuk gedung yang lebih hemat energi, bernilai lebih, dan siap tender instansi pemerintah.",
    features: ["Gap analysis kriteria gedung hijau", "Perhitungan efisiensi energi & air", "Pendampingan penilaian GBCI/EDGE", "Sertifikat resmi terbit"],
  },
  {
    slug: "sertifikasi-b-corp", title: "Kesiapan Sertifikasi B Corp", icon: "Gem", category: "esg",
    price: "Mulai Rp 25 jt",
    desc: "Skor BIA, perbaikan tata kelola, sampai verifikasi — jadikan bisnis Anda terakreditasi B Corp pertama di bidangnya.",
    features: ["Baseline Impact Assessment (BIA)", "Perbaikan skor & kebijakan", "Dokumen verifikasi lengkap", "Pendampingan asesmen B Lab"],
  },
  {
    slug: "epr-kemasan", title: "EPR — Kewajiban Pengembalian Kemasan", icon: "Package", category: "esg",
    price: "Mulai Rp 8 jt",
    desc: "Roadmap kewajiban pengembalian kemasan (EPR) bagi produsen — patuh PP 81/2023 sebelum teguran datang.",
    features: ["Pemetaan kewajiban produsen", "Target pengembalian bertahap", "Desain skema koleksi & mitra daur ulang", "Laporan ke SIPSN/DPLH"],
  },
  {
    slug: "pembiayaan-hijau", title: "Pembiayaan Hijau & Green Bond", icon: "Banknote", category: "esg",
    price: "Mulai Rp 15 jt",
    desc: "Strukturisasi pinjaman dan bonds hijau — akses pembiayaan berbunga kompetitif untuk proyek berkelanjutan.",
    features: ["Kelayakan proyek hijau", "Framework green financing", "Opini second party", "Negosiasi dengan pemberi dana"],
  },
  {
    slug: "eudr-komoditas", title: "Kepatuhan EUDR Komoditas Ekspor", icon: "Trees", category: "esg",
    price: "Mulai Rp 15 jt",
    desc: "Regulasi deforestasi UE untuk kopi, kakao, sawit, karet — jaminan produk Anda tetap bisa masuk Eropa.",
    features: ["Pemetaan plot lahan (geolocation)", "Due diligence rantai pasok", "Statement of compliance", "Sistem traceability berkelanjutan"],
  },
  {
    slug: "csr-cdas", title: "Strukturisasi CSR & CDAS", icon: "Heart", category: "esg",
    price: "Mulai Rp 10 jt",
    desc: "Program CSR yang terukur dan kepatuhan CDAS migas — dari perencanaan hingga laporan tanggung jawab sosial.",
    features: ["Perencanaan program CSR", "Struktur pelaksanaan & mitra", "Pengukuran dampak program", "Laporan & publikasi tahunan"],
  },

  // ===== 10. PENDANAAN & INVESTASI =====
  {
    slug: "pitch-deck-investor", title: "Pitch Deck & Investor Kit", icon: "Presentation", category: "pendanaan",
    price: "Mulai Rp 5 jt",
    desc: "Deck yang menjual, angka yang masuk akal, teaser yang menggoda — perangkat lengkap menutup pendanaan.",
    features: ["Narasi & pitch deck 12–15 slide", "Proyeksi keuangan ringkas", "One-pager & teaser investor", "Latihan pitching 1-on-1"],
  },
  {
    slug: "valuasi-bisnis", title: "Valuasi Bisnis", icon: "Percent", category: "pendanaan",
    price: "Mulai Rp 10 jt",
    desc: "Nilai wajar perusahaan dengan DCF dan pembanding pasar — untuk jual saham, warisan, atau sengketa.",
    features: ["Analisis keuangan & prospek", "DCF & multiple pembanding", "Laporan valuasi tertulis", "Siap dipertahankan saat negosiasi"],
  },
  {
    slug: "data-room-virtual", title: "Data Room Virtual (Due Diligence)", icon: "Folder", category: "pendanaan",
    price: "Mulai Rp 7,5 jt",
    desc: "Ruang data virtual tertata yang membuat investor bergerak cepat — legalitas, keuangan, operasional siap diperiksa.",
    features: ["Struktur folder due diligence", "Gap list dokumen & perbaikannya", "Pengelolaan akses aman", "Indeks & log pemeriksaan"],
  },
  {
    slug: "pendanaan-scf", title: "Pendanaan Securities Crowdfunding", icon: "Coins", category: "pendanaan",
    price: "Mulai Rp 10 jt",
    desc: "Galang dana saham di platform SCF berizin OJK — legal, terstruktur, menjangkau ribuan mikroinvestor.",
    features: ["Kelayakan & struktur saham", "Dokumen lembar faktual (OJK)", "Akses platform SCF resmi", "Kampanye & pelaporan pasca-dana"],
  },
  {
    slug: "kredit-kur", title: "Proposal Kredit/KUR & Modal Kerja", icon: "Landmark", category: "pendanaan",
    price: "Mulai Rp 2 jt",
    desc: "Proposal bisnis, proyeksi, dan dokumen bank lengkap — peluang KUR dan kredit modal kerja Anda disetujui.",
    features: ["Proposal & profil bisnis", "Proyeksi arus kas realistis", "Dokumen persyaratan bank", "Pendampingan proses pengajuan"],
  },
  {
    slug: "hibah-riset", title: "Pendanaan Riset & Hibah", icon: "Atom", category: "pendanaan",
    price: "Mulai Rp 7,5 jt",
    desc: "Kedaireka, RISPRO, BRIN, hibah koperasi — proposal riset yang lolos seleksi dan dananya cair.",
    features: ["Pemetaan skema pendanaan", "Proposal & MOU mitra", "Anggaran sesuai ketentuan", "Pelaporan kemajuan berkala"],
  },
  {
    slug: "esop-program", title: "ESOP — Kepemilikan Saham Karyawan", icon: "Crown", category: "pendanaan",
    price: "Mulai Rp 12 jt",
    desc: "Skema ESOP yang adil dan mengikat — alat retensi talenta kunci terbaik untuk startup maupun korporasi keluarga.",
    features: ["Desain pool & vesting", "Dokumen skema & perjanjian", "Struktur pajak saham karyawan", "Administrasi grant berkala"],
  },
  {
    slug: "convertible-note-safe", title: "Convertible Note & SAFE", icon: "Shuffle", category: "pendanaan",
    price: "Mulai Rp 7,5 jt",
    desc: "Pendanaan awal yang cepat tanpa pertengkaran valuasi — convertible note dan SAFE ditata dengan benar.",
    features: ["Struktur note/SAFE & valuation cap", "Perjanjian investasi awal", "Proyeksi konversi & dilusi", "Sinkronisasi akta & penerbitan saham"],
  },
  {
    slug: "jamintel-ip-jaminan", title: "IP sebagai Jaminan Kredit (Jaminfidusia)", icon: "Wallet", category: "pendanaan",
    price: "Mulai Rp 12 jt",
    desc: "Merek dan paten Anda bisa jadi jaminan kredit — pendaftaran jaminfidusia kekayaan intelektual sesuai UU 13/2016.",
    features: ["Penilaian nilai aset IP", "Perjanjian jaminfidusia IP", "Pendaftaran di DJKI", "Koordinasi dengan bank pemberi kredit"],
  },
  {
    slug: "restrukturisasi-utang", title: "Restrukturisasi Utang Usaha", icon: "Repeat", category: "pendanaan",
    price: "Mulai Rp 7,5 jt",
    desc: "Negosiasi penjadwalan ulang, moratorium, sampai restrukturisasi kredit — selamatkan perusahaan dari default.",
    features: ["Analisis utang & kemampuan bayar", "Strategi & paket negosiasi", "Pendampingan dengan bank/kreditor", "Dokumen perjanjian restrukturisasi"],
  },

  // ===== 11. STRUKTUR GRUP & TRANSAKSI =====
  {
    slug: "pendirian-holding", title: "Strukturisasi Perusahaan Holding", icon: "Layers", category: "struktur",
    price: "Mulai Rp 15 jt",
    desc: "Satu induk yang mengendalikan banyak entitas — efisiensi pajak, perlindungan aset, dan kesiapan ekspansi.",
    features: ["Desain struktur grup", "Pendirian entitas induk", "Alih saham antar entitas", "Sinkronisasi pajak & konsolidasi"],
  },
  {
    slug: "perjanjian-pendiri-vesting", title: "Perjanjian Pendiri & Vesting", icon: "Files", category: "struktur",
    price: "Mulai Rp 5 jt",
    desc: "Kesepakatan para pendiri sebelum pertumbuhan — pembagian saham, vesting, dan aturan keluar masuk.",
    features: ["Pembagian saham yang adil", "Skema vesting 4 tahun", "Aturan kepergian & exit pendiri", "Perjanjian tertulis semua pendiri"],
  },
  {
    slug: "joint-venture", title: "Joint Venture & Kemitraan Strategis", icon: "Briefcase", category: "struktur",
    price: "Mulai Rp 12 jt",
    desc: "Bermitra dengan pihak yang tepat tanpa kehilangan kendali — struktur JV, modal, dan tata kelolanya.",
    features: ["Pemilihan bentuk JV (entitas/kontraktual)", "Perjanjian JV & SHA", "Perlindungan teknologi & merek", "Mekanisme keluar (exit) yang jelas"],
  },
  {
    slug: "akuisisi-merger-umkm", title: "Akuisisi & Merger (Skala Usaha)", icon: "Merge", category: "struktur",
    price: "Mulai Rp 20 jt",
    desc: "Membeli atau digabung? Due diligence, valuasi, sampai penyerahan — transaksi yang aman dua arah.",
    features: ["Legal & financial due diligence", "Struktur transaksi & pembayaran", "Akta merger/akuisisi", "Pengurusan pasca-transaksi penuh"],
  },
  {
    slug: "spin-off-divestasi", title: "Spin-off & Divestasi Divisi", icon: "Split", category: "struktur",
    price: "Mulai Rp 15 jt",
    desc: "Melepas unit usaha dengan rapi — aset, pegawai, dan kontrak pindah tertata, nilai maksimal diperoleh.",
    features: ["Kajian struktur spin-off", "Pemisahan aset & karyawan", "Penawaran ke calon pembeli", "Pelaporan & kepatuhan pasca"],
  },
  {
    slug: "piagam-keluarga-bisnis", title: "Piagam Keluarga Bisnis", icon: "Home", category: "struktur",
    price: "Mulai Rp 10 jt",
    desc: "Konstitusi keluarga bisnis — mencegah konflik generasi kedua yang meruntuhkan perusahaan besar.",
    features: ["Perumusan nilai & visi keluarga", "Aturan masuk anggota keluarga", "Kebijakan dividen & pekerjaan", "Forum keluarga & penyelesaian sengketa"],
  },
  {
    slug: "suksesi-penerus", title: "Perencanaan Suksesi Bisnis", icon: "Baby", category: "struktur",
    price: "Mulai Rp 10 jt",
    desc: "Kepemimpinan dan saham berpindah dengan terencana — bukan dengan drama keluarga saat sudah terlambat.",
    features: ["Pemetaan kandidat & kesiapan penerus", "Transfer saham & pajaknya", "Struktur testamen/hibah", "Pengembangan kapabilitas penerus"],
  },
  {
    slug: "perjanjian-pemegang-saham", title: "Perjanjian Pemegang Saham (SHA)", icon: "FolderOpen", category: "struktur",
    price: "Mulai Rp 6 jt",
    desc: "Aturan main antar pemegang saham — tag-along, drag-along, batas pengalihan, dan penyelesaian kebuntuan.",
    features: ["Hak suara & kurungan pengalihan", "Klausul tag-along & drag-along", "Kebijakan dividen & pendanaan", "Mekanisme kebuntuan & exit"],
  },
  {
    slug: "tata-kelola-korporat", title: "Tata Kelola & Etika Korporasi", icon: "Target", category: "struktur",
    price: "Mulai Rp 10 jt",
    desc: "Manual tata kelola, kode etik, dan salur pelaporan (whistleblowing) — kredibilitas di mata investor & bank.",
    features: ["Manual tata kelola & komite", "Kode etik & konflik kepentingan", "Sistem whistleblowing", "Pelatihan & sosialisasi menyeluruh"],
  },
  {
    slug: "dewan-komisaris-mandiri", title: "Dewan Komisaris Profesional", icon: "Compass", category: "struktur",
    price: "Mulai Rp 8 jt/bln",
    desc: "Komisaris profesional berpengalaman duduk di kursi Anda — pengawasan nyata, bukan formalitas akta.",
    features: ["Penempatan komisaris profesional", "Agenda rapat & evaluasi kinerja", "Pengawasan arah & risiko", "Laporan berkala ke pemilik"],
  },

  // ===== 12. EKSPANSI GLOBAL =====
  {
    slug: "kantor-perwakilan-asing", title: "Kantor Perwakilan Asing (KP3A)", icon: "Globe", category: "global",
    price: "Mulai Rp 5 jt",
    desc: "Presensi resmi di Indonesia tanpa transaksi langsung — KP3A/KP2A/KPPA dari pengajuan sampai kartu terbit.",
    features: ["KP3A/KP2A/KPPA via BKPM-OSS", "Surat keterangan perwakilan induk", "Kartu izin & staf asing terbatas", "Perpanjangan tahunan"],
  },
  {
    slug: "entitas-luar-negeri", title: "Pendirian Entitas di Luar Negeri", icon: "Languages", category: "global",
    price: "Mulai Rp 25 jt",
    desc: "Singapura, Hong Kong, Dubai, Delaware — entitas luar negeri Anda dibangun bersama mitra lokal terpercaya.",
    features: ["Pemilihan yurisdiksi & bentuk entitas", "Pendaftaran entitas & registered agent", "Rekening bank & alamat terdaftar", "Kepatuhan tahunan"],
  },
  {
    slug: "sertifikat-asal", title: "Sertifikat Asal (Certificate of Origin)", icon: "Signpost", category: "global",
    price: "Mulai Rp 750 rb/dok",
    desc: "Tarif preferensi hingga 0% lewat Form D, ACFTA, AANZFTA — sertifikat asal yang benar jenisnya.",
    features: ["Pemilihan Form per FTA", "Kriteria asal & analisis BOM", "Pengajuan ke pemenerbit resmi", "Digitalisasi e-Form D"],
  },
  {
    slug: "inkoterm-kontrak-ekspor", title: "Incoterms & Kontrak Ekspor", icon: "Anchor", category: "global",
    price: "Mulai Rp 3,5 jt",
    desc: "Siapa bayar apa dari pabrik sampai pelabuhan tujuan? Kontrak ekspor dengan incoterms yang menguntungkan dan aman.",
    features: ["Pemilihan incoterms 2020", "Kontrak ekspor & metode pembayaran", "Klausul risiko & asuransi", "Review dokumen pelabuhan"],
  },
  {
    slug: "kawasan-berikat", title: "Status Kawasan Berikat & Fasilitas Kepabeanan", icon: "Warehouse", category: "global",
    price: "Mulai Rp 15 jt",
    desc: "Tahun bebas masuk-keluar barang — status kawasan berikat dan KITE untuk efisiensi bea cukai maksimal.",
    features: ["Kelayakan & struktur perusahaan", "Pengajuan status kawasan berikat", "Fasilitas pembebasan sementara", "Kewajiban pelaporan kepabeanan"],
  },
  {
    slug: "transfer-pricing", title: "Dokumen Transfer Pricing (TP Doc)", icon: "Sigma", category: "global",
    price: "Mulai Rp 12 jt",
    desc: "Transaksi dengan pihak berelasi? TP Doc yang kuat menjaga Anda dari koreksi pajak raksasa.",
    features: ["Pemetaan transaksi berelasi", "Analisis pembanding (benchmark)", "TP Doc sesuai PMK terbaru", "Pendampingan pemeriksaan DJP"],
  },
  {
    slug: "ekspor-marketplace-global", title: "Ekspor via Marketplace Global", icon: "Route", category: "global",
    price: "Mulai Rp 5 jt",
    desc: "Amazon, Alibaba, Etsy, eBay — toko global resmi, alur pembayaran, dan kepatuhan produk pasar tujuan.",
    features: ["Registrasi toko global & verifikasi", "Logistik & fulfillment (FBA)", "Pajak & kepatuhan pasar tujuan", "Optimasi listing internasional"],
  },
  {
    slug: "antidumping-bmtp", title: "Perlindungan Antidumping & Safeguard", icon: "ShieldHalf", category: "global",
    price: "Mulai Rp 15 jt",
    desc: "Impor menekan usaha Anda? Jalur petisi antidumping, CVD, dan safeguard ke KADI dan instansi bea cukai.",
    features: ["Kajian kerugian industri", "Penyusunan petisi & bukti", "Pengajuan ke KADI/instansi", "Pendampingan investigasi"],
  },
  {
    slug: "lartas-ekspor-komoditas", title: "Lartas & Legalitas Ekspor Komoditas", icon: "Wheat", category: "global",
    price: "Mulai Rp 7,5 jt",
    desc: "V-Legal kayu, PE CPO, lartas ikan — lartas ekspor tiap komoditas dipastikan lengkap sebelum muat.",
    features: ["Pemetaan lartas komoditas Anda", "SVLK/V-Legal & PHPL", "Persetujuan ekspor (PE) komoditas", "Koordinasi kementerian terkait"],
  },
  {
    slug: "distributor-brand-asing", title: "Distributor Resmi Brand Internasional", icon: "Trophy", category: "global",
    price: "Mulai Rp 10 jt",
    desc: "Menjadi distributor resmi brand global di Indonesia — perjanjian kemitraan, perizinan, dan perlindungan wilayah.",
    features: ["Negosiasi & perjanjian distributor", "Struktur entitas & perizinan dagang", "Perlindungan wilayah & target", "Kepatuhan produk (SNI/BPOM/halal)"],
  },

  // ===== 13. KEPATUHAN DIGITAL & DATA =====
  {
    slug: "kepatuhan-uu-pdp", title: "Program Kepatuhan UU PDP", icon: "Fingerprint", category: "kepatuhan-digital",
    price: "Mulai Rp 15 jt",
    desc: "Audit data, kebijakan, perjanjian, sampai tata kelola — kepatuhan UU PDP penuh sebelum masa tenggang habis.",
    features: ["Audit data personal & alurnya", "Kebijakan & dokumen PDP", "Data Processing Agreement dengan vendor", "Pelatihan & roadmap kepatuhan"],
  },
  {
    slug: "dpo-layanan", title: "DPO sebagai Layanan (DPOaaS)", icon: "UserCog", category: "kepatuhan-digital",
    price: "Mulai Rp 5 jt/bln",
    desc: "Petugas pelindungan data bersertifikasi sebagai layanan bulanan — memenuhi mandat UU PDP tanpa merekrut sendiri.",
    features: ["Penunjukan DPO resmi", "Pengawasan pemrosesan data", "Kontak regulator & subjek data", "Laporan kinerja berkala"],
  },
  {
    slug: "pse-komdigi", title: "Registrasi PSE Komdigi", icon: "Server", category: "kepatuhan-digital",
    price: "Mulai Rp 3,5 jt",
    desc: "Website, aplikasi, dan platform Anda wajib terdaftar PSE — amankan dari pemblokiran dan sanksi Komdigi.",
    features: ["Penilaian jenis PSE (publik/privat)", "Registrasi PSE Tera/Privat", "Dokumen sistem elektronik", "Penanganan koreksi & perubahan"],
  },
  {
    slug: "audit-siber", title: "Audit Keamanan Siber", icon: "Bug", category: "kepatuhan-digital",
    price: "Mulai Rp 12 jt",
    desc: "Celah sistem ditemukan sebelum perusak menemukannya — audit siber praktis dengan peta perbaikan berprioritas.",
    features: ["Assessment infrastruktur & aplikasi", "Uji konfigurasi & hak akses", "Prioritas perbaikan berbiaya realistis", "Kesiapan sertifikasi ISO 27001"],
  },
  {
    slug: "respons-insiden-data", title: "Respons Insiden & Kebocoran Data", icon: "Siren", category: "kepatuhan-digital",
    price: "Mulai Rp 7,5 jt",
    desc: "Retainer 72 jam: bila data bocor, protokol penanganan, notifikasi, dan mitigasi langsung berjalan.",
    features: ["Protokol penanganan insiden", "Notifikasi regulator & subjek data", "Forensik awal & mitigasi", "Pendampingan komunikasi publik"],
  },
  {
    slug: "kepatuhan-iklan-digital", title: "Kepatuhan Iklan Digital", icon: "Radar", category: "kepatuhan-digital",
    price: "Mulai Rp 5 jt",
    desc: "Iklan dan konten promosi Anda diperiksa terhadap aturan — label iklan, klaim, dan perlindungan konsumen.",
    features: ["Review materi iklan & promosi", "Label iklan & endorsement", "Klaim yang sah & terbukti", "Panduan untuk tim marketing"],
  },
  {
    slug: "tata-kelola-ai", title: "Tata Kelola & Etika AI", icon: "Brain", category: "kepatuhan-digital",
    price: "Mulai Rp 10 jt",
    desc: "Kerangka penggunaan AI yang bertanggung jawab — kebijakan, risiko, dan tata kelola data latih.",
    features: ["Pemetaan penggunaan AI", "Kebijakan & etika AI", "Risiko bias, privasi & hak cipta", "Panduan tim & vendor"],
  },
  {
    slug: "kebijakan-privasi-situs", title: "Kebijakan Privasi & Syarat Layanan", icon: "Lock", category: "kepatuhan-digital",
    price: "Mulai Rp 2,5 jt",
    desc: "Kebijakan privasi, syarat & ketentuan, cookie — dokumen legal situs/aplikasi yang benar-benar sesuai praktik Anda.",
    features: ["Kebijakan privasi sesuai UU PDP", "Syarat & ketentuan layanan", "Kebijakan cookie & banner consent", "Review alur data aktual"],
  },
  {
    slug: "kepatuhan-fintech-ojk", title: "Kepatuhan Fintech & Layanan Keuangan OJK", icon: "BarChart3", category: "kepatuhan-digital",
    price: "Mulai Rp 15 jt",
    desc: "Menjalankan fintech/layanan keuangan? Kerangka patuh OJK — dari kelayakan model sampai pelaporan rutin.",
    features: ["Pemetaan kewajiban per model usaha", "Dokumen & regulasi POJK", "Pelaporan OJK berkala", "Mitigasi risiko & sanksi"],
  },
  {
    slug: "kepatuhan-dagang-daring", title: "Kepatuhan Dagang Daring (E-Commerce)", icon: "ShoppingCart", category: "kepatuhan-digital",
    price: "Mulai Rp 5 jt",
    desc: "Toko daring Anda patuh penuh: identitas pedagang, label iklan, garansi, dan penanganan komplain konsumen.",
    features: ["Audit kepatuhan PP 80/2019", "Identitas & informasi pedagang", "Kebijakan retur/garansi/pembatalan", "SOP komplain & rating"],
  },

  // ===== 14. INDUSTRI KREATIF & MEDIA =====
  {
    slug: "sertifikat-film-lsf", title: "Sertifikat Lulus Sensor (LSF)", icon: "Film", category: "kreatif",
    price: "Mulai Rp 5 jt",
    desc: "Film, iklan, trailer lulus sensor LSF — syarat penayangan bioskop, TV, dan platform streaming.",
    features: ["Pengajuan sensor ke LSF", "Kelengkapan dokumen produksi", "Penanganan koreksi hasil sensor", "Salinan & perpanjangan"],
  },
  {
    slug: "izin-event-konser", title: "Izin Penyelenggaraan Event & Konser", icon: "Ticket", category: "kreatif",
    price: "Mulai Rp 5 jt",
    desc: "Konser, pameran, festival — seluruh perizinan event dari polisi, tempat, sampai protokol keamanan.",
    features: ["Pemetaan izin per jenis event", "Izin polisi & keamanan", "Izin tempat & dinas terkait", "SOP keamanan & asuransi"],
  },
  {
    slug: "izin-reklame-luar-ruang", title: "Izin Reklame Luar Ruang", icon: "Ruler", category: "kreatif",
    price: "Mulai Rp 3,5 jt",
    desc: "Billboard, videotron, spanduk — izin reklame daerah dengan tarif dan lokasi yang tepat, tanpa penutupan paksa.",
    features: ["Kelayakan lokasi & jenis reklame", "Pengajuan izin reklame daerah", "Retribusi & masa berlaku", "Perpanjangan & penyesuaian"],
  },
  {
    slug: "lisensi-musik-lmk", title: "Lisensi Musik & Royalti LMK", icon: "Music", category: "kreatif",
    price: "Mulai Rp 2,5 jt",
    desc: "Kafe, radio, YouTube, aplikasi — lisensi musik ke LMK yang benar agar usaha Anda bebas gugatan royalti.",
    features: ["Pemetaan penggunaan musik", "Lisensi LMK (WAMI, RAIV, KCI)", "Negosiasi tarif", "Kepatuhan konten kreator"],
  },
  {
    slug: "isbn-penerbitan", title: "ISBN & Legalitas Penerbitan", icon: "Book", category: "kreatif",
    price: "Mulai Rp 750 rb",
    desc: "Buku Anda terbit dengan ISBN resmi — pendaftaran penerbit, ISBN, dan distribusi legal.",
    features: ["Registrasi penerbit di Perpusnas", "Pendaftaran ISBN", "Katalog Dalam Terbitan (KDT)", "Panduan deposit buku"],
  },
  {
    slug: "rating-game-igrs", title: "Registrasi & Rating Game (IGRS)", icon: "Gamepad2", category: "kreatif",
    price: "Mulai Rp 2 jt",
    desc: "Game Anda resmi diedarkan — registrasi & rating IGRS Komdigi, syarat rilis dan monetisasi di Indonesia.",
    features: ["Registrasi game di IGRS", "Penilaian rating umur", "Dokumen gameplay & konten", "Koreksi & sertifikat"],
  },
  {
    slug: "pendaftaran-pers-online", title: "Pendaftaran Media Online (Dewan Pers)", icon: "Newspaper", category: "kreatif",
    price: "Mulai Rp 1,5 jt",
    desc: "Situs berita Anda terdaftar Dewan Pers — kredibilitas, standar UUT, dan akses iklan pemerintah.",
    features: ["Verifikasi usaha pers online", "Kesesuaian standar UUT", "Kepatuhan UU ITE", "Sertifikat & syarat periklanan"],
  },
  {
    slug: "lisensi-merchandise", title: "Lisensi Merchandise & Kolaborasi Brand", icon: "Sparkle", category: "kreatif",
    price: "Mulai Rp 5 jt",
    desc: "Merch, kolaborasi, dan pelisensian karakter — kontrak royalti yang menjaga nilai brand Anda.",
    features: ["Struktur lisensi & royalti", "Perjanjian merch & kolaborasi", "Quality control & approval", "Perlindungan merek & karakter"],
  },
  {
    slug: "kontrak-talent-kreator", title: "Kontrak Talent, Kreator & Influencer", icon: "Mic", category: "kreatif",
    price: "Mulai Rp 3,5 jt",
    desc: "Kerja sama kreator yang adil dan aman — eksklusivitas, revenue share, IP konten, dan skenario keluar.",
    features: ["Perjanjian talent/management", "Hak konten & eksklusivitas", "Revenue share & deliverables", "Klausul moral & penyelesaian"],
  },
  {
    slug: "badan-usaha-produksi-film", title: "Badan Usaha Produksi Film", icon: "Clapperboard", category: "kreatif",
    price: "Mulai Rp 5 jt",
    desc: "Production house berbadan usaha resmi — SIUP Film, pemilikan karya, dan kontrak produksi siap pakai.",
    features: ["Pendirian entitas produksi", "SIUP Film", "Kontrak produksi standar", "Pemilikan hak cipta karya"],
  },

  // ===== 15. PANGAN, KESEHATAN & FARMA =====
  {
    slug: "cpotb-obat-tradisional", title: "CPOTB — Sertifikasi Pabrik Obat Tradisional", icon: "Pill", category: "pangan-kesehatan",
    price: "Mulai Rp 15 jt",
    desc: "Produksi obat tradisional & suplemen hukum penuh — sertifikat CPOTB dari BPOM untuk pabrik Anda.",
    features: ["Gap analysis fasilitas produksi", "Dokumen CPOTB (SOP, validasi)", "Audit pra-inspeksi", "Pendampingan inspeksi BPOM"],
  },
  {
    slug: "akl-alat-kesehatan", title: "Izin Edar Alat Kesehatan (AKL/AKD)", icon: "Stethoscope", category: "pangan-kesehatan",
    price: "Mulai Rp 7,5 jt",
    desc: "Alat kesehatan beredar legal — AKL/AKD Kemenkes dari klasifikasi risiko sampai sertifikat terbit.",
    features: ["Klasifikasi risiko alat", "Dokumen teknis & uji", "Pengajuan e-Kemenkes", "Sertifikat & pembaruan"],
  },
  {
    slug: "label-gizi", title: "Label Gizi & Informasi Produk Pangan", icon: "Apple", category: "pangan-kesehatan",
    price: "Mulai Rp 3,5 jt",
    desc: "Label yang sah sebelum dicetak — ING, gizi, klaim diperiksa; produksi tidak menanggung risiko penarikan.",
    features: ["Review komposisi & klaim", "ING & label gizi sesuai regulasi", "Klaim yang diperbolehkan", "Koreksi desain kemasan"],
  },
  {
    slug: "izin-apotek-pbf", title: "Izin Apotek & PBF", icon: "Syringe", category: "pangan-kesehatan",
    price: "Mulai Rp 10 jt",
    desc: "Apotek, PBF, hingga industri farmasi — perizinan lengkap dengan penanggung jawab farmasis yang benar.",
    features: ["Izin apotek/PBF (Dinkes/BPOM)", "Penanggung jawab farmasis", "Sarana & SOP farmasi", "Pembinaan & pembaruan"],
  },
  {
    slug: "haccp-gmp-pangan", title: "HACCP & GMP Pangan", icon: "FlaskConical", category: "pangan-kesehatan",
    price: "Mulai Rp 10 jt",
    desc: "Sistem keamanan pangan HACCP/GMP — syarat ekspor, retail modern, dan kepercayaan pembeli besar.",
    features: ["Analisis bahaya & CCP", "Dokumen HACCP/GMP", "Pelatihan tim produksi", "Audit sertifikasi"],
  },
  {
    slug: "pangan-organik", title: "Sertifikasi Pangan Organik", icon: "Salad", category: "pangan-kesehatan",
    price: "Mulai Rp 12 jt",
    desc: "Organik Indonesia, USDA, UE — sertifikasi organik untuk pasar premium dalam dan luar negeri.",
    features: ["Pemetaan skema organik", "Inspeksi & dokumen lahan", "Sertifikat organik resmi", "Hak guna logo organik"],
  },
  {
    slug: "izin-klinik-praktik", title: "Izin Klinik & Praktik Kesehatan", icon: "Ambulance", category: "pangan-kesehatan",
    price: "Mulai Rp 10 jt",
    desc: "Klinik, laboratorium, fisioterapi — izin fasyankes lengkap dengan tenaga medis terdaftar resmi.",
    features: ["Izin fasyankes (Kemenkes/Dinkes)", "STR & SIP tenaga medis", "Sarana & standar pelayanan", "Pendampingan akreditasi"],
  },
  {
    slug: "p2k3-panitia-k3", title: "P2K3 — Panitia Pembina K3", icon: "LifeBuoy", category: "pangan-kesehatan",
    price: "Mulai Rp 3,5 jt",
    desc: "Panitia Pembina K3 terbentuk resmi dan berjalan — kewajiban perusahaan 100+ pekerja yang sering terlupakan.",
    features: ["Pembentukan & SK P2K3", "Pelatihan pengurus", "Program kerja K3 tahunan", "Laporan ke instansi ketenagakerjaan"],
  },
  {
    slug: "laboratorium-uji-produk", title: "Koordinasi Pengujian Laboratorium", icon: "Microscope", category: "pangan-kesehatan",
    price: "Mulai Rp 1,5 jt",
    desc: "Uji lab produk di laboratorium terakreditasi KAN — satu pintu untuk kebutuhan SNI, BPOM, halal, dan ekspor.",
    features: ["Pemetaan parameter uji", "Lab terakreditasi KAN yang tepat", "Pengurusan sampel & jadwal", "Interpretasi hasil & langkah lanjut"],
  },
  {
    slug: "audit-klaim-iklan-kesehatan", title: "Audit Klaim & Iklan Produk Kesehatan", icon: "ScanLine", category: "pangan-kesehatan",
    price: "Mulai Rp 5 jt",
    desc: "Klaim menyembuhkan bisa berujung penarikan produk — audit klaim & materi iklan sebelum biaya produksi mengalir.",
    features: ["Review klaim kemasan & iklan", "Kesesuaian izin edar vs klaim", "Pemetaan risiko sanksi BPOM", "Panduan klaim yang aman"],
  },

  // ===== 16. PROPERTI & INFRASTRUKTUR =====
  {
    slug: "due-diligence-properti", title: "Due Diligence Properti", icon: "Map", category: "properti",
    price: "Mulai Rp 7,5 jt",
    desc: "Sebelum bayar DP besar — sertifikat, sengketa, tata ruang, dan riwayat properti diperiksa menyeluruh.",
    features: ["Verifikasi sertifikat di BPN", "Riwayat & status sengketa", "Kesesuaian tata ruang (KKPR)", "Laporan risiko & rekomendasi"],
  },
  {
    slug: "pengalihan-hak-tanah", title: "Pengalihan Hak Atas Tanah", icon: "Footprints", category: "properti",
    price: "Mulai Rp 5 jt",
    desc: "Jual beli, hibah, tukar-menukar, APHT — pengalihan tanah tertib administrasi, pajak dan BPN tertangani.",
    features: ["Akta PPAT & verifikasi pajak", "PBB & SPPT lunas", "Balik nama di BPN", "Pemilihan hak yang tepat (HGB/SHM)"],
  },
  {
    slug: "hgu-hgb-pertanahan", title: "Hak Guna Usaha & Hak Guna Bangunan", icon: "Palmtree", category: "properti",
    price: "Mulai Rp 15 jt",
    desc: "HGU/HGB untuk perkebunan, industri, dan komersial — perolehan, perpanjangan, hingga peningkatan hak.",
    features: ["Kelayakan & pilihan hak", "Pengajuan HGU/HGB (BPN)", "Perpanjangan & pembaruan", "Pengalihan & penetapan agunan"],
  },
  {
    slug: "izin-usaha-perumahan", title: "Izin Usaha Perumahan & Kawasan", icon: "Sofa", category: "properti",
    price: "Mulai Rp 7,5 jt",
    desc: "Pengembang perumahan legal penuh — izin usaha, persetujuan pembangunan, hingga pemasaran unit.",
    features: ["Izin usaha perumahan (PUPR/PBJT)", "KKPR & PBG per tahap", "Perjanjian PPJB/AJB standar", "Kewajiban pembangunan rumah susun"],
  },
  {
    slug: "konsesi-ppjt-infrastruktur", title: "Konsesi & PPP Infrastruktur", icon: "Train", category: "properti",
    price: "Konsultasi custom",
    desc: "Jalan tol, air minum, terminal — struktur konsesi PPJT dan kemitraan pemerintah-tim swasta yang bankable.",
    features: ["Feasibility & struktur proyek", "Dokumen PPJT & dukungan pemerintah", "Koordinasi skema KPBU", "Negosiasi & penutupan finansial"],
  },
  {
    slug: "sertifikasi-menara-telekomunikasi", title: "Menara & Infrastruktur Telekomunikasi", icon: "Wifi", category: "properti",
    price: "Mulai Rp 10 jt",
    desc: "Menara, fiber, dan BTS dibangun sesuai regulasi — persetujuan lokasi, konstruksi, dan sertifikasi keamanan.",
    features: ["Persetujuan lokasi menara", "Izin konstruksi & penyelenggaraan", "Uji keamanan & laik fungsi", "Kewajiban sharing infrastruktur"],
  },
  {
    slug: "kawasan-industri", title: "Status & Pengembangan Kawasan Industri", icon: "Factory", category: "properti",
    price: "Mulai Rp 20 jt",
    desc: "Kawasan industri berizin penuh — status kawasan, fasilitas pajak, dan perizinan penyewa tersistem.",
    features: ["Pengajuan status kawasan industri", "Kesesuaian KKPR & lingkungan", "Perizinan pengelola & tenant", "Fasilitas & insentif"],
  },
  {
    slug: "sengketa-tanah-penyelesaian", title: "Penyelesaian Sengketa Tanah", icon: "Gavel", category: "properti",
    price: "Mulai Rp 7,5 jt",
    desc: "Sengketa batas, ganda sertifikat, garapan — penelusuran, mediasi, hingga upaya hukum dengan strategi yang benar.",
    features: ["Penelusuran riwayat tanah", "Strategi mediasi/aduan BPN", "Pendampingan upaya hukum", "Pencegahan sengketa lanjutan"],
  },
  {
    slug: "izin-tambang-iup", title: "Perizinan Pertambangan (IUP/IUPK)", icon: "Mountain", category: "properti",
    price: "Mulai Rp 25 jt",
    desc: "IUP, IUPK, sampai kewajiban good mining practice — perizinan mineral dan batubara yang sah bertahap.",
    features: ["Pemetaan wilayah & kelayakan", "Pengajuan IUP/IUPK (ESDM/Daerah)", "RKAB & kewajiban periodik", "Kepatuhan good mining practice"],
  },
  {
    slug: "izin-energi-terbarukan", title: "Izin Energi Terbarukan & PLTS", icon: "Power", category: "properti",
    price: "Mulai Rp 15 jt",
    desc: "PLTS, biogas, hingga co-firing — perizinan energi baru terbarukan dan sambungan ke jaringan PLN.",
    features: ["Pemetaan skema & kelayakan", "Izin usaha penyediaan (IUPTLU)", "Persetujuan koneksi PLN", "Insentif & kepatuhan"],
  },

  // ===== 17. SDM & ORGANISASI =====
  {
    slug: "struktur-organisasi-grading", title: "Struktur Organisasi & Job Grading", icon: "GitBranch", category: "sdm-organisasi",
    price: "Mulai Rp 10 jt",
    desc: "Struktur yang jelas, level yang adil, jalur karier yang hidup — fondasi SDM sebelum perusahaan membesar.",
    features: ["Pemetaan jabatan & alur", "Penetapan grading (level)", "Rentang gaji per level", "Kartu jabatan & SOP"],
  },
  {
    slug: "audit-payroll", title: "Audit Kepatuhan Payroll", icon: "Hash", category: "sdm-organisasi",
    price: "Mulai Rp 5 jt",
    desc: "THR, PPh 21, BPJS, kontrak — payroll Anda diaudit seluruhnya sebelum pemeriksa atau gugatan datang.",
    features: ["Audit PPh 21 & THR", "Kesesuaian BPJS & upah", "Kontrak & status pekerja", "Laporan perbaikan bertahap"],
  },
  {
    slug: "kontrak-kerja-pkwt", title: "Kontrak Kerja & PKWT yang Benar", icon: "BookText", category: "sdm-organisasi",
    price: "Mulai Rp 1,5 jt",
    desc: "PKWT, PKWTT, jasa kreatif — kontrak kerja yang mengikat namun tidak membuat perusahaan tergugat.",
    features: ["Template PKWT/PKWTT", "Kontrak proyek & jasa", "Kepatuhan jangka waktu PKWT", "Dana kompensasi PKWT"],
  },
  {
    slug: "program-magang", title: "Program Magang & PKL Terkelola", icon: "BookOpen", category: "sdm-organisasi",
    price: "Mulai Rp 2 jt",
    desc: "Magang murid maupun mahasiswa tertata — perjanjian, asuransi, dan batas kerja sesuai regulasi.",
    features: ["Perjanjian magang/pemagangan", "Batas & hak peserta", "Asuransi kecelakaan", "Koordinasi kampus/sekolah"],
  },
  {
    slug: "alih-daya-outsourcing", title: "Kepatuhan Alih Daya (Outsourcing)", icon: "Replace", category: "sdm-organisasi",
    price: "Mulai Rp 5 jt",
    desc: "Kerja alih daya yang sah pasca-Ciptaker — jenis pekerjaan, asuransi, dan perjanjian perusahaan alih daya.",
    features: ["Uji jenis pekerjaan alih daya", "Perjanjian dengan pemberi jasa", "Perlindungan & asuransi pekerja", "Audit penyedia eksisting"],
  },
  {
    slug: "phk-terkelola", title: "Pengelolaan PHK & Kompensasi", icon: "DoorOpen", category: "sdm-organisasi",
    price: "Mulai Rp 4 jt",
    desc: "PHK yang manusiawi dan hukumnya aman — alasan, prosedur, uang pesangon, sampai persetujuan bipartit.",
    features: ["Analisis alasan & jalur PHK", "Kalkulasi pesangon & kompensasi", "Protokol komunikasi & dokumen", "Mediasi bila sengketa"],
  },
  {
    slug: "lks-bipartit", title: "Pembentukan LKS Bipartit", icon: "Users2", category: "sdm-organisasi",
    price: "Mulai Rp 1,5 jt",
    desc: "Forum perundingan perusahaan terdaftar resmi — kewajiban 50+ pekerja yang membuka kredibilitas & harmoni.",
    features: ["Penyusunan akta & SK LKS", "Pendaftaran ke Disnaker", "Program kerja & rapat", "Pelaporan tahunan"],
  },
  {
    slug: "iso-37001-antisuap", title: "SNI ISO 37001 — Sistem Antisuap", icon: "ShieldAlert", category: "sdm-organisasi",
    price: "Mulai Rp 12 jt",
    desc: "Sistem manajemen antisuap tersertifikasi — syarat tender BUMN/korporasi global yang makin umum.",
    features: ["Gap analysis & komitmen manajemen", "Dokumen sistem antisuap", "Due diligence mitra & kebijakan hadiah", "Audit sertifikasi"],
  },
  {
    slug: "sistem-penilaian-kinerja", title: "Sistem Penilaian & Kinerja Karyawan", icon: "TrendingUp", category: "sdm-organisasi",
    price: "Mulai Rp 7,5 jt",
    desc: "KPI, OKR, review berkala — sistem kinerja yang adil, terukur, dan menjadi dasar kompensasi yang sah.",
    features: ["Desain KPI per peran", "Siklus review & calibrasi", "Kaitan kompensasi & promosi", "Pelatihan manajer penilai"],
  },
  {
    slug: "kebijakan-remote-hybrid", title: "Kebijakan Kerja Remote & Hybrid", icon: "Laptop", category: "sdm-organisasi",
    price: "Mulai Rp 3,5 jt",
    desc: "Kerja dari mana saja dengan aturan yang jelas — kebijakan hybrid, pengamanan data, dan jam kerja fleksibel.",
    features: ["Kebijakan kerja hybrid", "Jam kerja & kompensasi fleksibel", "Keamanan data & perangkat", "Panduan pajak & kehadiran"],
  },

  // ===== 18. RESILIENSI & PERLINDUNGAN BISNIS =====
  {
    slug: "asuransi-bisnis", title: "Pemetaan & Negosiasi Asuransi Bisnis", icon: "Umbrella", category: "resiliensi",
    price: "Mulai Rp 5 jt",
    desc: "All risk, marine cargo, liability, money — perlindungan yang tepat dengan premi efisien, bukan polis yang menganggur.",
    features: ["Pemetaan risiko & aset", "Rekomendasi jenis & nilai pertanggungan", "Negosiasi premi & klausul", "Pendampingan klaim"],
  },
  {
    slug: "forensik-digital", title: "Forensik Digital & Bukti", icon: "Binary", category: "resiliensi",
    price: "Mulai Rp 10 jt",
    desc: "Karyawan membocorkan data atau mencuri konten? Jejak digital dikumpulkan secara sah untuk tindakan hukum.",
    features: ["Pengamanan & imaging bukti", "Analisis perangkat & log", "Laporan teknik yang kuat di pengadilan", "Koordinasi penegak hukum"],
  },
  {
    slug: "manajemen-krisis-pr", title: "Protokol Manajemen Krisis & PR", icon: "AlarmClock", category: "resiliensi",
    price: "Mulai Rp 7,5 jt",
    desc: "Viral negatif bisa meruntuhkan usaha dalam 24 jam — protokol krisis, naskah respons, dan pemulihan reputasi.",
    features: ["Peta risiko krisis & skenario", "Tim krisis & rantai keputusan", "Naskah respons & holding statement", "Pemulihan pasca-krisis"],
  },
  {
    slug: "bisnis-kontinuitas-bcp", title: "Rencana Kelangsungan Bisnis (BCP)", icon: "Plug", category: "resiliensi",
    price: "Mulai Rp 10 jt",
    desc: "Server mati, pabrik banjir, vendor gagal — bisnis Anda tetap berjalan dengan rencana kelangsungan yang teruji.",
    features: ["Analisis dampak bisnis", "Rencana kontinuitas per skenario", "RTO/RPO & cadangan data", "Uji simulasi berkala"],
  },
  {
    slug: "pencegahan-fraud-sop", title: "Pencegahan Fraud & Kontrol Internal", icon: "Eye", category: "resiliensi",
    price: "Mulai Rp 7,5 jt",
    desc: "Kebocoran kas dan penipuan pengadaan dipatahkan dengan sistem — kontrol internal dan SOP pencegahan fraud.",
    features: ["Pemetaan celah fraud", "Kontrol internal & pemisahan tugas", "SOP pengadaan & pembayaran", "Salur pelaporan & audit rutin"],
  },
  {
    slug: "manajemen-risiko-erm", title: "Manajemen Risiko Terintegrasi (ERM)", icon: "Crosshair", category: "resiliensi",
    price: "Mulai Rp 10 jt",
    desc: "Risiko strategis, operasional, kepatuhan dipetakan dan dikecilkan — bahasa risiko yang sama di seluruh perusahaan.",
    features: ["Registrasi risiko & pemiliknya", "Matriks risiko & toleransi", "Rencana mitigasi & monitoring", "Kaitan dengan target & KPI"],
  },
  {
    slug: "sengketa-bisnis-mediasi", title: "Mediasi & Penyelesaian Sengketa Bisnis", icon: "Vote", category: "resiliensi",
    price: "Mulai Rp 7,5 jt",
    desc: "Sengketa tanpa drama pengadilan bertahun-tahun — mediasi, arbitrase BANI, dan strategi tuntutan yang efisien.",
    features: ["Analisis posisi hukum", "Strategi mediasi & negosiasi", "Pengajuan arbitrase BANI", "Koordinasi pengacara litigasi"],
  },
  {
    slug: "penagihan-piutang-legal", title: "Penagihan Piutang & Somasi Legal", icon: "HandCoins", category: "resiliensi",
    price: "Mulai Rp 2,5 jt",
    desc: "Piutang macet bukan nasib — somasi, perjanjian penyelesaian, gugatan, dan eksekusi jaminan dijalankan sistematis.",
    features: ["Analisis dokumen utang", "Somasi & perjanjian angsuran", "Gugatan & eksekusi", "Koordinasi aparat bila perlu"],
  },
  {
    slug: "perlindungan-domain-brand", title: "Perlindungan Domain & Identitas Digital", icon: "Link", category: "resiliensi",
    price: "Mulai Rp 2,5 jt",
    desc: "Domain dicuri, email ditiru, brand dipalsukan — pengamanan domain, SPF/DKIM/DMARC, dan pemantauan pencemaran.",
    features: ["Audit & pengamanan domain", "SPF/DKIM/DMARC email", "Pemantauan situs palsu & brandjacking", "Prosedur pemulihan domain"],
  },
  {
    slug: "manajemen-reputasi-online", title: "Manajemen Reputasi Daring (ORM)", icon: "ThumbsUp", category: "resiliensi",
    price: "Mulai Rp 3,5 jt/bln",
    desc: "Halaman pertama Google mencerminkan bisnis Anda — pemantauan, penanganan review negatif, dan konten positif.",
    features: ["Audit hasil pencarian & ulasan", "Protokol respons review", "Strategi konten positif", "Laporan reputasi bulanan"],
  },

  // ===== 19. LAYANAN ISTIMEWA GUNARA (PRODUK SIGNATURE) =====
  {
    slug: "dna-bisnis-360", title: "Gunara Business DNA™ — Audit Legal 360°", icon: "Fingerprint", category: "signature", featured: true,
    price: "Mulai Rp 4,9 jt",
    desc: "Audit kesehatan legal-kepatuhan bisnis menyeluruh: skor DNA dari 100, peta celah berperingkat risiko, dan roadmap penutupan 12 bulan.",
    features: ["Audit 8 dimensi legal & kepatuhan", "Skor kesehatan DNA bisnis", "Roadmap penutupan celah 12 bulan", "Estimasi biaya & prioritas risiko"],
  },
  {
    slug: "launchpad-30-hari", title: "Gunara LaunchPad 30 — Ide ke Bisnis Resmi 30 Hari", icon: "Rocket", category: "signature", featured: true,
    price: "Mulai Rp 9,9 jt",
    desc: "Program terstruktur 30 hari: badan usaha, merek, katalog WhatsApp, landing page, dan kepatuhan awal — hari ke-30 bisnis sah dan siap jualan.",
    features: ["4 fase mingguan terpandu", "Badan usaha + NIB + merek", "Katalog WA & landing page jadi", "Checklist kepatuhan awal"],
  },
  {
    slug: "shield-kepatuhan-tahunan", title: "Gunara Compliance Shield™ — Langganan Penjaga Kewajiban", icon: "CalendarCheck", category: "signature",
    price: "Mulai Rp 2,9 jt/bln",
    desc: "Kalender kewajiban personal + pengingat WhatsApp + eksekusi administratif bulanan — izin kedaluwarsa dan laporan terlewat jadi sejarah.",
    features: ["Kalender kewajiban personal", "Pengingat WA H-90/60/30", "Eksekusi administratif dalam kuota", "Dashboard status kewajiban"],
  },
  {
    slug: "deal-room-negosiasi", title: "Gunara Deal Desk — Pendampingan Negosiasi Investasi", icon: "MessagesSquare", category: "signature",
    price: "Mulai Rp 12,5 jt",
    desc: "Saat term sheet investor atau penawaran akuisisi datang: pembongkaran klausul, koordinasi due diligence, dan pendamping negosiasi sampai closing.",
    features: ["Analisis & bongkar term sheet", "Koordinasi due diligence", "Strategi & pendampingan negosiasi", "Closing + kewajiban pasca-closing"],
  },
  {
    slug: "exit-ready-valuation", title: "Gunara Exit Ready™ — Program Kesiapan Dijual & Suksesi", icon: "PackageCheck", category: "signature",
    price: "Mulai Rp 15 jt",
    desc: "Program 6–12 bulan menyiapkan bisnis agar layak dibeli dengan harga premium: 7 pilar kesiapan, skor Exit-Ready, rencana kerja kuartalan.",
    features: ["Audit 7 pilar kesiapan jual", "Skor Exit-Ready per pilar", "Rencana kerja kuartalan", "Evaluasi progres berkala"],
  },
  {
    slug: "tender-ready-program", title: "Gunara TenderReady™ — Kesiapan Dokumen Lelang & Tender", icon: "Trophy", category: "signature",
    price: "Mulai Rp 6,5 jt",
    desc: "Kualifikasi legal, personel bersertifikat, dokumen administratif LPSE, dan registrasi vendor — tidak gugur di babak administrasi lagi.",
    features: ["Pemetaan kualifikasi bidang", "Dokumen administratif LPSE", "Registrasi vendor & portal supplier", "Simulasi evaluasi administrasi"],
  },
  {
    slug: "pendiri-pribadi-shield", title: "Gunara Founder Shield™ — Proteksi Pribadi di Balik Bisnis", icon: "LifeBuoy", category: "signature",
    price: "Mulai Rp 7,5 jt",
    desc: "Pisahkan nasib pribadi dari risiko perusahaan: pemetaan tanggung jawab pribadi, pemisahan aset, wasiat, kuasa khusus, dan asuransi kunci.",
    features: ["Peta tanggung jawab pribadi", "Pemisahan aset & rekening", "Wasiat & kuasa khusus pendiri", "Asuransi jiwa kunci & tanggung jawab"],
  },

  // ===== 20. AGRIBISNIS, PETERNAKAN & MARITIM =====
  {
    slug: "ispo-rspo-sawit", title: "Sertifikasi Sawit Berkelanjutan ISPO/RSPO", icon: "Leaf", category: "agri-maritim",
    price: "Mulai Rp 25 jt",
    desc: "ISPO wajib hukum, RSPO tiket pasar Eropa — gap analysis, penyiapan dokumen & SOP, audit bodi sertifikasi, sampai izin logo.",
    features: ["Gap analysis prinsip-kriteria ISPO/RSPO", "Penyiapan dokumen & SOP kebun", "Pendampingan audit sertifikasi", "Izin penggunaan logo"],
  },
  {
    slug: "izin-perikanan-sikpi", title: "Legalitas Usaha Perikanan (SIKPI, SIUP & SIPI)", icon: "Fish", category: "agri-maritim",
    price: "Mulai Rp 3,5 jt",
    desc: "SIUP, SIPI, SIKL, izin budidaya, dan pendaftaran nelayan via PPIP KKP — kapal melaut tanpa risiko ditahan, tangkapan sah diekspor.",
    features: ["SIUP/SIPI/SIKL kapal perikanan", "Izin budidaya ikan & rumput laut", "Pendaftaran nelayan & alat tangkap", "Sertifikat asal ikan ekspor"],
  },
  {
    slug: "pvt-varietas-tanaman", title: "Perlindungan Varietas Tanaman (PVT)", icon: "Sprout", category: "agri-maritim",
    price: "Mulai Rp 4,5 jt",
    desc: "Paten-nya dunia tanaman: hak eksklusif pemulia atas varietas baru — pengajuan PPV, pemeriksaan DUS, hingga lisensi komersial.",
    features: ["Pengajuan PVT ke PPV Kementan", "Pendampingan uji DUS", "Hak eksklusif & lisensi varietas", "Strategi benih & pengecualian petani"],
  },
  {
    slug: "izin-peternakan-nak", title: "Legalitas Peternakan, Pakan & Obat Hewan", icon: "Beef", category: "agri-maritim",
    price: "Mulai Rp 2,5 jt",
    desc: "NIB peternakan, rekomendasi dinas, CPB ternak, izin edar pakan (HPA) dan obat hewan — farm beroperasi patuh dari bibit sampai panen.",
    features: ["NIB & rekomendasi teknis dinas", "Sertifikat CPB ternak", "Izin edar pakan HPA & obat hewan", "Pengangkutan ternak & NVK"],
  },
  {
    slug: "plasma-perkebunan-kemitraan", title: "Kemitraan Plasma Inti Rakyat (PIR)", icon: "Trees", category: "agri-maritim",
    price: "Mulai Rp 8,5 jt",
    desc: "Wajib 20% lahan untuk petani — desain skema plasma, perjanjian kemitraan, FPIC, dan dokumentasi perizinan yang bebas sengketa.",
    features: ["Desain skema plasma kelola/modal", "Perjanjian kemitraan KUD/tani", "Kepatuhan FPIC & konsultasi", "Audit kemitraan berkala"],
  },
  {
    slug: "izin-air-tanah-sipa", title: "Pemanfaatan Air Tanah & Sumber Daya Air (SIPA)", icon: "Droplets", category: "agri-maritim",
    price: "Mulai Rp 5,5 jt",
    desc: "Pabrik, hotel, gedung yang bor air tanah wajib SIPA — survei hidrogeologi, pengajuan izin, retribusi, dan laporan berkala tertib.",
    features: ["Survei hidrogeologi bersertifikat", "Pengajuan SIPA e-perizinan", "Retribusi & meter air tertib", "Laporan pengambilan berkala"],
  },
  {
    slug: "riph-impor-hortikultura", title: "RIPH — Rekomendasi Impor Hortikultura", icon: "Apple", category: "agri-maritim",
    price: "Mulai Rp 3,9 jt",
    desc: "Bawang, kentang, apel tidak boleh berlayar tanpa RIPH — perhitungan kuota semester, pengajuan Kementan, dan pelaporan realisasi.",
    features: ["Hitung rencana impor semester", "Pengajuan RIPH Kementan", "Sinkron API-U/UP & PIB", "Pelaporan realisasi & kuota"],
  },

  // ===== 21 LAYANAN BARU SEBAR KATEGORI (Task 23) =====
  {
    slug: "kitap-pasangan-investor", title: "KITAP — Izin Tinggal Tetap", icon: "Luggage", category: "ketenagakerjaan",
    price: "Mulai Rp 4,5 jt",
    desc: "Izin tinggal tetap 5 tahun: KITAP pasangan WNI, investor/eksekutif PMA, dan pensiun — dari VTT sampai e-POA tanpa drama.",
    features: ["KITAP pasangan WNI", "KITAP investor & eksekutif PMA", "KITAP pensiun 55+", "e-POA & perpanjangan"],
  },
  {
    slug: "skb-relief-pajak-treaty", title: "SKB & Tax Relief Pajak Luar Negeri (P3B)", icon: "Landmark", category: "pajak",
    price: "Mulai Rp 3,5 jt",
    desc: "Hentikan pemotongan yang tidak seharusnya: SKB PPh 4(2)/23, tarif P3B via DGT-1/DGT-2, dan refund kelebihan potong lintas negara.",
    features: ["SKB PPh 4(2) & PPh 23", "Pengurangan tarif P3B (DGT-1/DGT-2)", "Relief bunga & dividen luar negeri", "Refund kelebihan potong"],
  },
  {
    slug: "keberatan-banding-pajak", title: "Keberatan, Banding & Sengketa Pajak", icon: "Scale", category: "pajak",
    price: "Mulai Rp 5 jt",
    desc: "Melawan SPHP/SKP kurang bayar dengan strategi benar: keberatan DJP, banding Pengadilan Pajak, dan penundaan penagihan.",
    features: ["Analisis SPHP & temuan pemeriksaan", "Keberatan ke DJP 30 hari", "Banding ke Pengadilan Pajak", "Penundaan penagihan (stelsel)"],
  },
  {
    slug: "indikasi-geografis-sttig", title: "Indikasi Geografis & Sertifikat STTIG", icon: "MapPinned", category: "ki",
    price: "Mulai Rp 8 jt",
    desc: "Kopi Gayo, batik, asam jawa Ponorogo layak dilindungi: pendaftaran IG ke DGIP, penetapan, dan STTIG per produsen untuk harga premium.",
    features: ["Penyusunan buku syarat & peta wilayah", "Pendaftaran IG ke DGIP", "Fasilitasi komite IG", "STTIG per produsen"],
  },
  {
    slug: "bujp-jasa-keamanan", title: "Izin Usaha Jasa Keamanan (BUJP)", icon: "Siren", category: "perizinan",
    price: "Mulai Rp 4,5 jt",
    desc: "Berdiri & beroperasi sebagai perusahaan security yang sah: badan usaha, personel Gada bersertifikat, dan registrasi Polri.",
    features: ["Badan usaha & KBLI jasa keamanan", "Sertifikasi personel Gada", "Registrasi & laporan Polri", "SOP operasional & kontrak personel"],
  },
  {
    slug: "izin-limbah-b3", title: "Persetujuan & Pengelolaan Limbah B3 (LB3)", icon: "Biohazard", category: "esg",
    price: "Mulai Rp 6,5 jt",
    desc: "Generator limbah B3 patuh penuh: TPS berstandar, manifest elektronik SIPN, kontrak pengolah berizin, dan laporan LAPB3.",
    features: ["Klasifikasi & kode limbah B3", "Persetujuan teknis TPS LB3", "Manifest elektronik (SIPN)", "Laporan berkala LAPB3"],
  },
  {
    slug: "skttk-personel-konstruksi", title: "SKTTK & SKA/SKT Personel Konstruksi", icon: "HardHat", category: "properti",
    price: "Mulai Rp 1,5 jt/personel",
    desc: "Personel proyek wajib terdaftar LPJK: SKA, SKT, TDK dari uji kelayakan, lalu SKTTK — individual maupun paket tim korporasi.",
    features: ["Uji kelayakan SKA/SKT/TDK", "Penerbitan SKTTK LPJK", "Paket tim sesuai kualifikasi SBU", "Pembaruan & penyesuaian aturan"],
  },
];
