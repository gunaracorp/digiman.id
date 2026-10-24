/**
 * DIGIMAN.ID — Sumber data tunggal untuk seluruh situs.
 * Membaca konten dari database (Prisma) dengan fallback aman ke data default,
 * sehingga website tetap tampil sempurna walau DB kosong / bermasalah.
 */
import { CATALOG } from "@/lib/catalog";
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
  { key: "esg", label: "ESG & Keberlanjutan" },
  { key: "pendanaan", label: "Pendanaan & Investasi" },
  { key: "struktur", label: "Struktur Grup & Transaksi" },
  { key: "global", label: "Ekspansi Global" },
  { key: "kepatuhan-digital", label: "Kepatuhan Digital & Data" },
  { key: "kreatif", label: "Industri Kreatif & Media" },
  { key: "pangan-kesehatan", label: "Pangan, Kesehatan & Farma" },
  { key: "properti", label: "Properti & Infrastruktur" },
  { key: "sdm-organisasi", label: "SDM & Organisasi" },
  { key: "resiliensi", label: "Resiliensi & Perlindungan" },
] as const;

// ─────────────────────── Data default ───────────────────────

export const DEFAULT_SETTINGS: SiteSettings = {
  companyName: "PT Digital Bisnis Manajemen",
  waNumber: "6281316516524",
  waDisplay: "+62 813-1651-6524",
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

/**
 * DEFAULT_SERVICES diturunkan otomatis dari katalog kanonik (src/lib/catalog.ts)
 * — tidak ada lagi dua salinan data. Fallback tampil bila DB kosong.
 */
export const DEFAULT_SERVICES: ServiceItem[] = CATALOG.map((s) => ({
  slug: s.slug,
  title: s.title,
  desc: s.desc,
  price: s.price,
  items: s.features,
  icon: s.icon,
  category: s.category,
  featured: Boolean(s.featured),
}));

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

/** Format Rupiah ringkas gaya Indonesia: Rp 7,5 jt / Rp 850 rb */
export function fmtRp(v: number): string {
  const n = v >= 1_000_000_000 ? v / 1_000_000_000 : v >= 1_000_000 ? v / 1_000_000 : v / 1_000;
  const s = n.toLocaleString("id-ID", { maximumFractionDigits: 1 });
  if (v >= 1_000_000_000) return `Rp ${s} M`;
  if (v >= 1_000_000) return `Rp ${s} jt`;
  if (v >= 1_000) return `Rp ${s} rb`;
  return `Rp ${v.toLocaleString("id-ID")}`;
}
