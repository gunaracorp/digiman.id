/**
 * DIGIMAN.ID — Sumber data tunggal untuk seluruh situs.
 * Membaca konten dari database (Prisma) dengan fallback aman ke data default,
 * sehingga website tetap tampil sempurna walau DB kosong / bermasalah.
 */
import { db } from "@/lib/db";

// ─────────────────────────── Types ───────────────────────────

export interface SiteSettings {
  companyName: string;
  waNumber: string;
  waDisplay: string;
  email: string;
  addressShort: string;
  hours: string;
  statClients: number;
  statExperts: number;
  statLayers: number;
  statSuccess: number;
  heroHeadline: string;
  heroSub: string;
  heroWords: string[];
  skNumber: string;
  nibNumber: string;
  npwpNumber: string;
  established: string;
}

export interface ServiceItem {
  slug: string | null;
  title: string;
  desc: string;
  price: string;
  items: string[];
  icon: string;
  category: string;
  featured: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface OfficeItem {
  type: string;
  label: string;
  address: string;
}

export interface SiteData {
  settings: SiteSettings;
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  offices: OfficeItem[];
}

export const SERVICE_CATEGORIES = [
  { key: "semua", label: "Semua Layanan" },
  { key: "pendirian", label: "Pendirian Badan Usaha" },
  { key: "perizinan", label: "Perizinan & NIB" },
  { key: "ki", label: "Kekayaan Intelektual" },
  { key: "sertifikasi", label: "Sertifikasi" },
  { key: "pajak", label: "Pajak" },
  { key: "ketenagakerjaan", label: "Ketenagakerjaan" },
  { key: "korporasi", label: "Korporasi" },
  { key: "digital", label: "Digitalisasi" },
] as const;

// ─────────────────────── Data default ───────────────────────

export const DEFAULT_SETTINGS: SiteSettings = {
  companyName: "PT Digital Bisnis Manajemen",
  waNumber: "6281333397223",
  waDisplay: "+62 813-3339-7223",
  email: "halo@digiman.id",
  addressShort: "Andalusia Garden Granada No.11, Tasikmalaya",
  hours: "Senin–Jumat 09.00–17.00 WIB",
  statClients: 2500,
  statExperts: 46,
  statLayers: 7,
  statSuccess: 98,
  heroHeadline: "Naikkan Bisnis Anda ke 7 Lapis Langit Legalitas.",
  heroSub:
    "Satu pintu untuk seluruh legalitas perusahaan di Indonesia — dari akta pendirian, perizinan OSS, kekayaan intelektual, hingga transformasi digital. Didampingi 46 dewan pakar lintas bidang, proses transparan, garansi di tangan.",
  heroWords: [
    "Pendirian PT",
    "Pendirian CV",
    "PT PMA",
    "NIB & OSS",
    "Pendaftaran Merek",
    "Sertifikasi Halal",
    "Digitalisasi Bisnis",
  ],
  skNumber: "AHU-059566.AH.01.30.Tahun 2022",
  nibNumber: "2612220035584",
  npwpNumber: "62.239.729.7-423.000",
  established: "26 Desember 2022",
};

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    slug: "pendirian-pt", title: "Pendirian PT", featured: true, icon: "Building2", category: "pendirian",
    desc: "Akta notaris, SK Kemenkumham, NPWP, NIB — paket lengkap PT resmi berdiri dalam hitungan hari.",
    price: "Mulai Rp 3,5 jt",
    items: ["Akta Notaris + SK Kemenkumham", "NPWP & NIB otomatis", "Domisili usaha", "Gratis konsultasi KBLI"],
  },
  {
    slug: "pt-perorangan", title: "PT Perorangan (UUCK)", featured: false, icon: "FileBadge", category: "pendirian",
    desc: "Badan usaha resmi untuk usaha individu via OSS — tanpa notaris, NIB terbit langsung.",
    price: "Mulai Rp 850 rb",
    items: ["NIB sebagai legalitas pasti", "Tanpa akta notaris", "Kewajiban pajak ringan", "Cocok UMKM & freelancer"],
  },
  {
    slug: "pendirian-cv", title: "Pendirian CV", featured: false, icon: "Users", category: "pendirian",
    desc: "Pilihan ideal usaha keluarga & kemitraan. Cepat, murah, dan sah di mata hukum.",
    price: "Mulai Rp 1,8 jt",
    items: ["Akta notaris CV", "Pengesahan kehakiman", "NPWP & NIB", "Konsultasi struktur modal"],
  },
  {
    slug: "pt-pma", title: "PT PMA (Investasi Asing)", featured: false, icon: "Globe2", category: "pendirian",
    desc: "Berinvestasi di Indonesia? Kami pegang seluruh regulasi BKPM & OSS untuk Anda.",
    price: "Mulai Rp 15 jt",
    items: ["Struktur saham asing", "Laporan BKPM/OSS", "Izin investasi", "Pendampingan DGT & Bank"],
  },
  {
    slug: "firma-ud", title: "Firma, UD & Persekutuan", featured: false, icon: "Store", category: "pendirian",
    desc: "Bentuk badan usaha klasik untuk usaha dagang & kemitraan — berdiri cepat, biaya efisien.",
    price: "Mulai Rp 1,2 jt",
    items: ["Akta pendirian", "Pengesahan legalitas", "NPWP & NIB", "Konsultasi tanggung jawab"],
  },
  {
    slug: "koperasi", title: "Pendirian Koperasi", featured: false, icon: "Handshake", category: "pendirian",
    desc: "Badan usaha beranggotakan warga — legalitas lengkap dari RAT hingga Kemenkop.",
    price: "Mulai Rp 2,5 jt",
    items: ["BADAN HUKUM Kemenkop", "AD/ART koperasi", "NPWP & NIB", "Pendampingan RAT"],
  },
  {
    slug: "yayasan", title: "Yayasan & Lembaga Nirlaba", featured: false, icon: "HeartHandshake", category: "pendirian",
    desc: "Untuk kegiatan sosial, pendidikan, & kemanusiaan — badan hukum sah dengan struktur organ yang benar.",
    price: "Mulai Rp 3 jt",
    items: ["Akta yayasan", "SK Kemenkumham", "NPWP & NIB", "Panduan kepatuhan"],
  },
  {
    slug: "perkumpulan", title: "Perkumpulan & Asosiasi", featured: false, icon: "Network", category: "pendirian",
    desc: "Wadah profesional & komunitas — berbadan hukum resmi untuk kredibilitas maksimal.",
    price: "Mulai Rp 2,5 jt",
    items: ["Akta perkumpulan", "Pengesahan kehakiman", "NPWP & NIB", "Konsultasi AD/ART"],
  },
  {
    slug: "nib-oss", title: "NIB, OSS-RBA & Pemetaan KBLI", featured: true, icon: "Stamp", category: "perizinan",
    desc: "Nomor Induk Berusaha sebagai identitas utama bisnis Anda di sistem OSS-RBA — KBLI dipetakan presisi.",
    price: "Mulai Rp 750 rb",
    items: ["Registrasi OSS-RBA", "Analisis KBLI optimal", "NIB sama dengan izin dasar", "Revisi & penyesuaian data"],
  },
  {
    slug: "izin-sektor", title: "Izin Usaha Sektor & Sertifikat Standar", featured: false, icon: "FileCheck2", category: "perizinan",
    desc: "Izin sektor spesifik — kesehatan, logistik, makanan, pendidikan — dipetakan sampai SS & lisensi final.",
    price: "Mulai Rp 1 jt",
    items: ["Analisis perizinan berusaha", "Perizinan tunggal", "Sertifikat standar", "Izin sektor instansi terkait"],
  },
  {
    slug: "virtual-office", title: "Domisili Usaha & Virtual Office", featured: false, icon: "MapPin", category: "perizinan",
    desc: "Alamat bisnis bergengsi tanpa biaya kantor fisik — SKDU, terima surat, siap untuk PT & PMA.",
    price: "Mulai Rp 500 rb",
    items: ["SKDU / SKPPK", "Virtual office premium", "Layanan terima surat", "Cocok untuk PT & PMA"],
  },
  {
    slug: "apostille", title: "Legalisisasi, Apostille & Terjemahan", featured: false, icon: "FileSignature", category: "perizinan",
    desc: "Dokumen legal Anda diakui di luar negeri — apostille, legalisasi Kemenlu, & sworn translation.",
    price: "Mulai Rp 350 rb/dok",
    items: ["Apostille & legalisasi", "Terjemahan tersumpah", "Notarisasi dokumen", "Konsularisasi negara tujuan"],
  },
  {
    slug: "pendaftaran-merek", title: "Pendaftaran Merek", featured: true, icon: "Lightbulb", category: "ki",
    desc: "Amankan brand Anda sebelum orang lain. Cek ketersediaan + pengajuan ke DJKI.",
    price: "Mulai Rp 1,5 jt",
    items: ["Pencarian & analisis merek", "Pengajuan kelas Nice", "Monitoring status", "Balasan argumen DJKI"],
  },
  {
    slug: "hak-cipta", title: "Hak Cipta, Paten & Desain Industri", featured: false, icon: "Copyright", category: "ki",
    desc: "Karya, inovasi, dan desain Anda tercatat resmi di DJKI — bukti kepemilikan yang kuat di pengadilan.",
    price: "Mulai Rp 900 rb",
    items: ["Hak cipta karya & aplikasi", "Paten & paten sederhana", "Desain industri", "Pendampingan klaim"],
  },
  {
    slug: "franchise", title: "Lisensi Franchise (STPW)", featured: false, icon: "ScrollText", category: "ki",
    desc: "Siap ekspansi waralaba? STPW sah dari Kemenperin supaya franchise Anda legal & terlindungi.",
    price: "Mulai Rp 2 jt",
    items: ["Pengajuan STPW", "Penyusunan perjanjian", "Prospektus & manual", "Wajib lapor terpenuhi"],
  },
  {
    slug: "halal", title: "Sertifikasi Halal", featured: false, icon: "BadgeCheck", category: "sertifikasi",
    desc: "Sertifikat halal resmi BPJPH — proses self-declare atau reguler, produk siap masuk pasar Muslim.",
    price: "Mulai Rp 1,5 jt",
    items: ["Pendampingan BPJPH", "Pemeriksaan LPH", "Fatwa & penetapan", "Label halal siap pakai"],
  },
  {
    slug: "bpom", title: "Izin Edar & Notifikasi BPOM", featured: false, icon: "ShieldCheck", category: "sertifikasi",
    desc: "MD, ML, dan notifikasi kosmetika — produk Anda legal beredar di seluruh Indonesia.",
    price: "Mulai Rp 2 jt",
    items: ["Izin edar MD/ML", "Notifikasi kosmetika", "Cek kemasan & label", "Pendampingan lab test"],
  },
  {
    slug: "sni", title: "Sertifikat SNI", featured: false, icon: "Award", category: "sertifikasi",
    desc: "Standar nasional Indonesia untuk produk Anda — jaminan mutu yang diwajibkan pasar & tender.",
    price: "Mulai Rp 2,5 jt",
    items: ["Audit pabrik LSPro", "Pengujian lab terakreditasi", "Sertifikat & logo SNI", "Pemantauan berkala"],
  },
  {
    slug: "iso", title: "Sertifikasi ISO", featured: false, icon: "Medal", category: "sertifikasi",
    desc: "ISO 9001, 14001, 22000, 27001 — standar internasional yang membuka pintu korporasi & ekspor.",
    price: "Mulai Rp 5 jt",
    items: ["Gap analysis", "Dokumentasi sistem mutu", "Audit sertifikasi", "Sertifikat berlaku internasional"],
  },
  {
    slug: "npwp-pkp", title: "NPWP Badan & Pengukuhan PKP", featured: false, icon: "Receipt", category: "pajak",
    desc: "NPWP badan, pengukuhan PKP, hingga fasilitas pajak — kewajiban pajak Anda rapi sejak hari pertama.",
    price: "Mulai Rp 400 rb",
    items: ["NPWP badan", "Pengukuhan PKP", "Fasilitas PP 23/2018", "Konsultasi tarif optimal"],
  },
  {
    slug: "pelaporan-pajak", title: "SPT, e-Faktur & Pelaporan Pajak", featured: false, icon: "Calculator", category: "pajak",
    desc: "SPT Tahunan & Masa, e-Faktur, buku besar — konsultan pajak bersertifikat menangani semuanya.",
    price: "Mulai Rp 500 rb/bln",
    items: ["SPT Tahunan badan/pribadi", "SPT Masa PPN/PPh", "e-Faktur & e-Bupot", "Restitusi & kompensasi"],
  },
  {
    slug: "bpjs", title: "BPJS Kesehatan & Ketenagakerjaan", featured: false, icon: "HeartPulse", category: "ketenagakerjaan",
    desc: "Registrasi & administrasi BPJS untuk karyawan — patuh UU Ketenagakerjaan tanpa pusing.",
    price: "Mulai Rp 300 rb",
    items: ["Registrasi perusahaan", "Pendaftaran karyawan", "Mutasi & tagihan bulanan", "Klaim & dewan pengurus"],
  },
  {
    slug: "kitas-kitap", title: "KITAS/KITAP & RPTKA", featured: false, icon: "Plane", category: "ketenagakerjaan",
    desc: "Izin tinggal & kerja tenaga asing — RPTKA, VITAS, KITAS/KITAP diurus end-to-end.",
    price: "Mulai Rp 5 jt",
    items: ["RPTKA & IMTA", "VITAS & KITAS", "KITAS keluarga & KITAP", "Perpanjangan & merger"],
  },
  {
    slug: "perubahan-akta", title: "Perubahan Akta & Struktur", featured: false, icon: "FileText", category: "korporasi",
    desc: "Ganti nama, tambah modal, pindah alamat, masuk pemegang saham baru — akta & persetujuan beres rapi.",
    price: "Mulai Rp 1,5 jt",
    items: ["Perubahan AD/arta", "RUPS & akta perubahan", "Pengesahan Kemenkumham", "Update NIB & OSS"],
  },
  {
    slug: "likuidasi", title: "Pembubaran & Likuidasi", featured: false, icon: "Archive", category: "korporasi",
    desc: "Tutup badan usaha dengan benar — tanpa warisan kewajiban pajak & legal yang menghantui.",
    price: "Mulai Rp 2,5 jt",
    items: ["RUPS pembubaran", "Pelunasan kewajiban", "Penghapusan NPWP & NIB", "Pencabutan SK"],
  },
  {
    slug: "website-ecommerce", title: "Website & E-Commerce", featured: true, icon: "Rocket", category: "digital",
    desc: "Website company profile sampai toko online — cepat, SEO-ready, dan meyakinkan pelanggan.",
    price: "Mulai Rp 3 jt",
    items: ["Company profile premium", "Toko online & payment gateway", "SEO & Google Business", "Domain, hosting, email bisnis"],
  },
  {
    slug: "digitalisasi-ai", title: "Otomasi & AI untuk Bisnis", featured: false, icon: "Sparkles", category: "digital",
    desc: "Chatbot layanan pelanggan, otomasi marketing, integrasi AI — operasional jalan 24 jam tanpa lelah.",
    price: "Mulai Rp 2,5 jt",
    items: ["AI customer service", "Otomasi WhatsApp & CRM", "Dashboard & laporan otomatis", "Integrasi sistem internal"],
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  { slug: "testimoni-1", name: "Rendra Wijaya", role: "Founder, Kopi Nusantara Rasa", text: "Dari NIB sampai sertifikasi halal, semua beres dalam 9 hari. Tim Digiman bahkan membantu saya memilih KBLI yang bikin saya dapat cuti pajak UMKM. Luar biasa detail.", rating: 5 },
  { slug: "testimoni-2", name: "Sandra Halim", role: "Owner, CV Sinar Teknik", text: "Pendiriannya cuma 4 hari dan saya tidak pernah keluar kantor. Portal monitoring-nya bikin saya tenang karena selalu tahu dokumen saya sedang di mana.", rating: 5 },
  { slug: "testimoni-3", name: "Michael Tanaka", role: "Director, Sakura Digital PMA", text: "Sebagai investor asing, regulasi Indonesia terasa rumit. Digiman memegang semuanya — BKPM, OSS, sampai laporan berkala. Highly recommended.", rating: 5 },
  { slug: "testimoni-4", name: "dr. Amelinda Putri", role: "Founder, Klinik Sehat Bersama", text: "Izin operasional klinik itu rumit. Dewan pakar mereka paham banget alur Dinkes dan BPOM. Pendampingannya sampai klinik kami benar-benar beroperasi.", rating: 5 },
  { slug: "testimoni-5", name: "Bagas Prakoso", role: "CEO, LogistikPro PT", text: "Garansi terbitnya bukan gimmick. Ada revisi dokumen dari notaris, mereka ulangi proses tanpa biaya tambahan dan tetap tepat waktu.", rating: 5 },
  { slug: "testimoni-6", name: "Lestari Ningsih", role: "Owner, Batik Larasati", text: "Merek saya sempat hampir dibajak kompetitor. Untung pendaftaran DJKI lewat Digiman sudah jalan duluan. Sekarang brand saya aman total.", rating: 5 },
  { slug: "testimoni-7", name: "Yusuf Ramadhan", role: "Founder, EduSkill Academy", text: "Langit ke-7 mereka nyata: website + sistem manajemen siswa + otomasi marketing. Sekarang pendaftaran murid jalan sendiri 24 jam.", rating: 5 },
  { slug: "testimoni-8", name: "Clara Suryani", role: "Managing Partner, CS Consulting", text: "Saya langganan urus SPT klien-klien saya di sini. Konsultan pajaknya benar-benar bersertifikat dan fast response. 5 tahun tidak pernah telat lapor.", rating: 5 },
  { slug: "testimoni-9", name: "Hendra Gunawan", role: "Owner, Gudang Makan Sehat", text: "Sertifikasi halal + SNI selesai tanpa saya pusing. Harganya transparan dari awal, tidak ada biaya siluman seperti pengalaman saya di tempat lain.", rating: 5 },
  { slug: "testimoni-10", name: "Nadia Kusuma", role: "Co-Founder, Glowlab Skincare", text: "BPOM, merek, sampai website e-commerce semua ditangani satu tim. Koordinasinya gampang karena satu penanggung jawab akun.", rating: 5 },
].map(({ slug: _slug, ...rest }) => rest);

export const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "Berapa lama proses pendirian PT sampai resmi beroperasi?",
    a: "Rata-rata 3–7 hari kerja sejak dokumen lengkap dan akta ditandatangani. Proses mencakup akta notaris, pengesahan SK Kemenkumham (biasanya real-time atau 1 hari), penerbitan NPWP badan, dan NIB via OSS. Untuk izin sektor tertentu (kesehatan, logistik, makanan) dapat memakan waktu tambahan — estimasi detail selalu kami berikan di awal, gratis.",
  },
  {
    q: "Apa saja yang saya siapkan untuk mendirikan perusahaan?",
    a: "Cukup: KTP & NPWP para pendiri (dan pemegang saham), alamat email aktif, nomor HP, serta alamat usaha (bisa rumah — kami bantu atur domisili). Untuk PT PMA diperlukan paspor asing dan surat pernyataan modal. Selebihnya — penyusunan akta, KBLI, hingga pengurusan online — tim kami yang mengerjakan.",
  },
  {
    q: "Apakah bisa mendirikan perusahaan tanpa datang ke kantor?",
    a: "Bisa, 100% online. Dengan tanda tangan elektronik tersertifikasi (TTE) yang diakui Kemenkumham, akta dan pengesahan dapat dilakukan tanpa tatap muka. Dokumen asli kami kirim ke alamat Anda via kurir terjamin, atau Anda ambil di kantor kami.",
  },
  {
    q: "Apakah ada biaya tersembunyi di tengah proses?",
    a: "Tidak. Semua biaya — honor notaris, resi Kemenkumham, administrasi pemerintahan, hingga jasa kami — tertulis jelas dalam penawaran sebelum Anda setuju. Jika ada kebutuhan di luar scope (misal izin sektor tambahan), kami konfirmasi dulu sebelum melanjutkan. Ini komitmen transparansi Digiman.",
  },
  {
    q: "Apa yang dimaksud 'Garansi Terbit'?",
    a: "Jika dokumen tidak terbit karena kesalahan proses atau administrasi pihak kami, seluruh tahap yang bermasalah kami ulangi tanpa biaya tambahan, plus kompensasi penundaan. Selama 5 tahun operasi, 99,2% dokumen kami terbit sesuai jadwal — sisanya karena perubahan regulasi mendadak yang selalu kami antisipasi dan komunikasikan.",
  },
  {
    q: "Bagaimana cara mulai konsultasi? Apakah berbayar?",
    a: "Gratis. Klik tombol WhatsApp di halaman ini atau isi form kontak — dalam 1×24 jam Anda terhubung dengan dewan pakar sesuai bidang bisnis Anda. Kami akan memetakan kebutuhan legalitas, merekomendasikan bentuk badan usaha yang paling efisien secara pajak, dan memberi estimasi biaya & waktu. Tanpa komitmen apa pun.",
  },
];

export const DEFAULT_OFFICES: OfficeItem[] = [
  {
    type: "HEAD",
    label: "Head Office — Tasikmalaya",
    address: "Andalusia Garden Cluster Granada No.11, Mangkubumi, Tasikmalaya, 46181, Jawa Barat",
  },
  { type: "BRANCH", label: "Branch Office I — Bandung", address: "Jln. Muararajeun Lama No.26, Bandung, Jawa Barat 40122" },
  {
    type: "BRANCH",
    label: "Branch Office II — Sukarame",
    address: "Guntur Village 50, Desa Padasuka, Sukarame, Kab. Tasikmalaya, Jawa Barat 46464",
  },
  {
    type: "BRANCH",
    label: "Branch Office III — Arjasari",
    address: "Perumahan Arjamukti Kencana Raya Blok B7 No.2, Leuwisari, Arjasari, Kab. Tasikmalaya, Jawa Barat",
  },
];

// ─────────────────────── 7 Lapis Langit ───────────────────────

export interface HeavenLayer {
  no: string;
  title: string;
  tagline: string;
  desc: string;
  items: string[];
  icon: string;
}

export const SEVEN_HEAVENS: HeavenLayer[] = [
  {
    no: "01", title: "Badan Hukum Resmi", tagline: "Fondasi Legal", icon: "Building2",
    desc: "PT, CV, PT PMA, Yayasan — badan usaha Anda berdiri sah dengan akta notaris & SK Kemenkumham. Aset pribadi terpisah dari risiko usaha, bank & investor langsung percaya.",
    items: ["Akta Notaris", "SK Kemenkumham", "PT / CV / PMA / Yayasan", "TTE 100% Online"],
  },
  {
    no: "02", title: "NIB & Perizinan OSS", tagline: "Identitas Usaha", icon: "FileCheck2",
    desc: "NIB via OSS-RBA adalah paspor bisnis Anda — satu nomor untuk semua izin dasar. KBLI dipetakan presisi agar pajak efisien dan izin sektor tidak menggantung.",
    items: ["NIB OSS-RBA", "Pemetaan KBLI 2020", "Izin sektor & SS", "Domisili usaha"],
  },
  {
    no: "03", title: "Pajak & Ketenagakerjaan", tagline: "Kepatuhan Rutin", icon: "ScrollText",
    desc: "NPWP badan, PKP, SPT, BPJS — seluruh kewajiban rutin ditangani konsultan bersertifikat. Bisnis Anda berjalan tenang tanpa surat pemberitahuan dari kantor pajak.",
    items: ["NPWP & PKP", "SPT Masa & Tahunan", "e-Faktur", "BPJS Karyawan"],
  },
  {
    no: "04", title: "Kekayaan Intelektual", tagline: "Benteng Brand", icon: "Lightbulb",
    desc: "Merek, hak cipta, paten, desain industri — aset tak berwujud yang bisa bernilai miliaran. Amankan sejak hari pertama sebelum orang lain mengklaimnya.",
    items: ["Pendaftaran Merek DJKI", "Hak Cipta & Paten", "Franchise STPW", "Monitoring pelanggaran"],
  },
  {
    no: "05", title: "Sertifikasi Produk", tagline: "Akses Pasar", icon: "BadgeCheck",
    desc: "Halal, BPOM, SNI, ISO — pintu masuk ke supermarket, marketplace, ekspor, dan tender. Label resmi yang membuat pelanggan mempercayai produk Anda.",
    items: ["Sertifikasi Halal BPJPH", "BPOM MD/ML", "SNI", "ISO 9001/22000/27001"],
  },
  {
    no: "06", title: "Ekspansi & Investasi", tagline: "Skala Berikutnya", icon: "Landmark",
    desc: "PT PMA, KITAS asing, franchise, merger & akuisisi — struktur hukum untuk pertumbuhan besar. Dari investor lokal sampai korporasi multinasional.",
    items: ["PT PMA & BKPM", "KITAS/KITAP", "Merger & Akuisisi", "Perubahan struktur"],
  },
  {
    no: "07", title: "Transformasi Digital", tagline: "Langit Ke-7", icon: "Rocket",
    desc: "Puncak perjalanan: website, e-commerce, otomasi AI, sistem manajemen — bisnis Anda bekerja 24 jam, melayani pelanggan bahkan saat Anda tidur.",
    items: ["Website & E-Commerce", "AI Customer Service", "Otomasi Marketing", "Dashboard Analytics"],
  },
];

// ─────────────────────── Paket & Harga ───────────────────────

export interface PaketTier {
  name: string;
  entity: string;
  price: string;
  priceNote: string;
  desc: string;
  features: string[];
  cta: string;
}

export const PAKET_TIERS: PaketTier[] = [
  {
    name: "Berdiri", entity: "PT Perorangan (UUCK)", price: "Rp 850 rb", priceNote: "Sekali bayar — NIB terbit 1–3 hari",
    desc: "Legalitas resmi untuk UMKM & freelancer tanpa notaris. Pintu masuk termurah ke dunia usaha formal.",
    features: ["NIB sebagai legalitas pasti", "Pemetaan KBLI optimal", "Kewajiban pajak ringan", "Konsultasi awal gratis", "Garansi terbit"],
    cta: "Mulai Berdiri",
  },
  {
    name: "Tumbuh", entity: "Pendirian PT Lengkap", price: "Rp 3,5 jt", priceNote: "Mulai dari — akta + SK + NPWP + NIB",
    desc: "Paket paling populer. PT resmi berdiri lengkap dalam 3–7 hari kerja — siap terima investor & pinjaman bank.",
    features: ["Akta Notaris + SK Kemenkumham", "NPWP Badan & NIB otomatis", "Domisili usaha", "Konsultasi KBLI & pajak", "Monitoring portal real-time", "Garansi terbit + kompensasi"],
    cta: "Tumbuh Sekarang",
  },
  {
    name: "Terbang", entity: "PT + Merek + Website", price: "Rp 7,5 jt", priceNote: "Paket bundling hemat 15%",
    desc: "Badan hukum + merek terdaftar + website premium. Bisnis Anda lahir dengan identitas, perlindungan, dan etalase digital sekaligus.",
    features: ["Semua fitur Paket Tumbuh", "Pendaftaran Merek DJKI", "Website company profile premium", "SEO dasar + Google Business", "Email bisnis & domain", "Akun manager pribadi"],
    cta: "Terbang Tinggi",
  },
  {
    name: "7 Lapis Langit", entity: "PMA, Ekspansi & Enterprise", price: "Custom", priceNote: "Mulai Rp 15 jt — dirancang Grand Design",
    desc: "Konsultasi strategis menyeluruh: PT PMA, sertifikasi, ISO, otomasi AI, sampai sistem operasional. Kerangka Grand Design by Gunara.",
    features: ["Seluruh lapisan legalitas", "PT PMA & regulasi BKPM", "Sertifikasi Halal/BPOM/ISO", "Otomasi AI & digitalisasi", "Dewan pakar lintas bidang", "Pendampingan berkelanjutan"],
    cta: "Konsultasi Strategis",
  },
];

// ─────────────────────── Kalkulator ───────────────────────

export interface CalcOption {
  id: string;
  label: string;
  cost: [number, number];
  days: [number, number];
}

export const CALC_ENTITIES: CalcOption[] = [
  { id: "pt", label: "PT (Perseroan Terbatas)", cost: [3_500_000, 5_000_000], days: [3, 7] },
  { id: "cv", label: "CV (Persekutuan Komanditer)", cost: [1_800_000, 2_800_000], days: [3, 7] },
  { id: "perorangan", label: "PT Perorangan (UUCK)", cost: [850_000, 1_500_000], days: [1, 3] },
  { id: "pma", label: "PT PMA (Investasi Asing)", cost: [15_000_000, 25_000_000], days: [14, 30] },
  { id: "yayasan", label: "Yayasan / Lembaga Nirlaba", cost: [2_500_000, 4_000_000], days: [5, 10] },
  { id: "koperasi", label: "Koperasi", cost: [2_500_000, 3_500_000], days: [5, 10] },
  { id: "firma", label: "Firma / UD / Persekutuan", cost: [1_200_000, 2_000_000], days: [2, 5] },
];

export const CALC_ADDONS: CalcOption[] = [
  { id: "merek", label: "Pendaftaran Merek", cost: [1_500_000, 2_500_000], days: [3, 7] },
  { id: "halal", label: "Sertifikasi Halal", cost: [1_500_000, 3_000_000], days: [10, 20] },
  { id: "bpom", label: "Izin Edar BPOM", cost: [2_000_000, 5_000_000], days: [14, 30] },
  { id: "iso", label: "Sertifikasi ISO", cost: [5_000_000, 12_000_000], days: [30, 60] },
  { id: "vo", label: "Virtual Office", cost: [500_000, 1_200_000], days: [1, 2] },
  { id: "pajak", label: "Setup Pajak & PKP", cost: [4_000_000, 6_000_000], days: [1, 2] },
  { id: "bpjs", label: "BPJS Karyawan", cost: [300_000, 600_000], days: [1, 2] },
  { id: "website", label: "Website / E-Commerce", cost: [3_000_000, 8_000_000], days: [7, 14] },
  { id: "ai", label: "Otomasi & AI", cost: [2_500_000, 5_000_000], days: [3, 7] },
  { id: "apostille", label: "Apostille & Legalisasi", cost: [350_000, 700_000], days: [2, 5] },
];

// ─────────────────────── Proses Kerja ───────────────────────

export const PROCESS_STEPS = [
  {
    no: "01", title: "Konsultasi Gratis", icon: "MessagesSquare",
    desc: "Ceritakan bisnis Anda via WhatsApp atau form. Dalam 1×24 jam, dewan pakar sesuai bidang Anda memetakan kebutuhan legalitas — tanpa biaya, tanpa komitmen.",
  },
  {
    no: "02", title: "Penawaran Transparan", icon: "FileSpreadsheet",
    desc: "Anda terima rincian biaya per pos — honor notaris, resi negara, jasa kami. Semua tertulis jelas sebelum Anda setuju. Tidak ada biaya siluman.",
  },
  {
    no: "03", title: "Eksekusi & Monitoring", icon: "Workflow",
    desc: "Tim mulai bekerja. Setiap tahap — akta, pengesahan, NIB — terpantau di portal monitoring Anda. Tahu persis dokumen sedang di mana.",
  },
  {
    no: "04", title: "Serah Terima & Garansi", icon: "BadgeCheck",
    desc: "Dokumen asli dikirim via kurir terjamin. Ada masalah proses? Kami ulangi tanpa biaya tambahan. Pendampingan pasca-terbit tetap berjalan.",
  },
];

export const WHY_US = [
  {
    title: "46 Dewan Pakar Lintas Bidang", icon: "Users",
    desc: "Notaris, konsultan pajak bersertifikat, ahli Kemenkumham, hingga software engineer — semua dalam satu tim yang saling terhubung.",
  },
  {
    title: "Garansi Terbit", icon: "ShieldCheck",
    desc: "Dokumen tidak terbit karena kesalahan kami? Kami ulangi tanpa biaya, plus kompensasi penundaan. 98,4% dokumen terbit sesuai jadwal.",
  },
  {
    title: "Transparansi Total", icon: "Receipt",
    desc: "Rincian biaya per pos tertulis sebelum Anda setuju. Portal monitoring membuat Anda selalu tahu status dokumen.",
  },
  {
    title: "100% Online, Jangkauan Nasional", icon: "Globe2",
    desc: "Tanda tangan elektronik tersertifikasi — klien kami dari Aceh sampai Papua, termasuk diaspora & investor asing.",
  },
  {
    title: "Satu Pintu Sampai Digital", icon: "Rocket",
    desc: "Dari akta pendirian sampai website & otomasi AI — Anda tidak perlu mencari vendor lain di tengah jalan.",
  },
  {
    title: "Grand Design Framework", icon: "Compass",
    desc: "Kerangka perancangan transformasi digital khas Digiman — bisnis Anda naik lapis demi lapis secara terstruktur, bukan asal cepat.",
  },
];

// ─────────────────────── Reader (DB + fallback) ───────────────────────

export async function getSiteData(): Promise<SiteData> {
  try {
    const [serviceRows, testimonialRows, faqRows, officeRows] = await Promise.all([
      db.service.findMany({ where: { visible: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
      db.testimonial.findMany({ where: { visible: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
      db.faq.findMany({ where: { visible: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
      db.office.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }] }),
    ]);

    const services: ServiceItem[] = serviceRows.map((s) => {
      let items: string[] = [];
      try {
        items = JSON.parse(s.features);
      } catch {
        items = [];
      }
      return {
        slug: s.slug,
        title: s.title,
        desc: s.desc,
        price: s.price,
        items,
        icon: s.icon,
        category: s.category,
        featured: s.featured,
      };
    });

    return {
      settings: DEFAULT_SETTINGS,
      services: services.length > 0 ? services : DEFAULT_SERVICES,
      testimonials:
        testimonialRows.length > 0
          ? testimonialRows.map((t) => ({ name: t.name, role: t.role, text: t.text, rating: t.rating }))
          : DEFAULT_TESTIMONIALS,
      faqs: faqRows.length > 0 ? faqRows.map((f) => ({ q: f.question, a: f.answer })) : DEFAULT_FAQS,
      offices: officeRows.length > 0
        ? officeRows.map((o) => ({ type: o.type, label: o.label, address: o.address }))
        : DEFAULT_OFFICES,
    };
  } catch (e) {
    console.error("getSiteData fallback ke data default:", e);
    return {
      settings: DEFAULT_SETTINGS,
      services: DEFAULT_SERVICES,
      testimonials: DEFAULT_TESTIMONIALS,
      faqs: DEFAULT_FAQS,
      offices: DEFAULT_OFFICES,
    };
  }
}

/** Format Rupiah ringkas gaya Indonesia: Rp 7,5 jt / Rp 850 rb */
export function fmtRp(v: number): string {
  const n = v >= 1_000_000_000 ? v / 1_000_000_000 : v >= 1_000_000 ? v / 1_000_000 : v / 1_000;
  const s = n.toLocaleString("id-ID", { maximumFractionDigits: 1 });
  if (v >= 1_000_000_000) return `Rp ${s} M`;
  if (v >= 1_000_000) return `Rp ${s} jt`;
  if (v >= 1_000) return `Rp ${s} rb`;
  return `Rp ${v.toLocaleString("id-ID")}`;
}
