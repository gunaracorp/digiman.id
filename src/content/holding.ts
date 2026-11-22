/**
 * DIGIMAN.ID — Content source of truth.
 * Single typed module that seeds the database and provides a static
 * fallback if the database is unavailable. Pure data — no React imports.
 *
 * v0.2.0 — "Bisnis Real": lima unit nyata, katalog jasa berharga,
 * metode kerja lima langkah, visi 100 tahun, 46 dewan pakar.
 */

export type BusinessUnit = {
  key: string;
  name: string;
  tagline: string;
  sector: string;
  stage: "Operating" | "Building" | "Genesis";
  description: string;
  focus: string[];
  attributes: { label: string; value: string }[];
};

export type PricedService = {
  key: string;
  name: string;
  description: string;
  deliverables: string[];
  price: string;
  duration: string;
  popular?: boolean;
};

export type ServiceLine = {
  unitKey: string;
  unitName: string;
  intro: string;
  services: PricedService[];
};

export type MetodeStep = {
  index: string;
  title: string;
  description: string;
};

export type VisionMilestone = {
  year: string;
  title: string;
  description: string;
};

export type TechLayer = {
  index: string;
  title: string;
  description: string;
};

export type GovernancePillar = {
  key: string;
  title: string;
  description: string;
};

export type CareerRole = {
  key: string;
  title: string;
  unit: string;
  type: string;
  location: string;
};

export type InsightSeed = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  daysAgo: number;
  featured: boolean;
};

export const ORG = {
  name: "DIGIMAN.ID",
  legalName: "DIGIMAN.ID",
  url: "https://digiman.id",
  tagline: "Holding Digital — Kaji Dulu, Baru Bangun",
  description:
    "Holding digital Indonesia yang mengurus bisnis secara detail — kaji, bangun, sistem, kelola — dengan lingkup dan harga yang terang. Dibangun untuk 100 tahun ke depan.",
  founded: "2025",
  email: "hello@digiman.id",
  careersEmail: "careers@digiman.id",
  location: "Indonesia",
} as const;

/**
 * JARGON — kalimat perang perusahaan. Tidak boleh dilunakkan.
 * "Yang masuk ke kita bakal selamat, yang tidak masuk digital akan tertinggal."
 */
export const NAV_ITEMS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#ekosistem", label: "Unit Bisnis" },
  { href: "#layanan", label: "Layanan & Harga" },
  { href: "#metode", label: "Metode" },
  { href: "#teknologi", label: "Teknologi" },
  { href: "#visi", label: "Visi 2125" },
] as const;

export const HERO = {
  eyebrow: "Holding Digital Indonesia — Est. 2025 · Horizon 2125",
  line1A: "Masuk bersama kami,",
  line1B: "Anda selamat.",
  line2A: "Tidak berdigital,",
  line2B: "Anda tertinggal.",
  statement:
    "DIGIMAN.ID mengurus bisnis Anda secara detail: kaji dulu, bangun bisnisnya, pasang sistem manajemennya, lalu kelola bersama. Lingkup jelas, harga terang — dibangun untuk seratus tahun ke depan.",
  primaryCta: { href: "#layanan", label: "Lihat Layanan & Harga" },
  secondaryCta: { href: "#kontak", label: "Konsultasi Kaji — Gratis" },
  scrollCue: "Gulir untuk menjelajah",
} as const;

export const HERO_METRICS = [
  { value: 5, label: "Unit bisnis nyata" },
  { value: 16, label: "Jasa dengan harga terang" },
  { value: 46, label: "Dewan pakar lintas ilmu" },
  { value: 100, label: "Tahun horizon visi" },
] as const;

export const MARQUEE_ITEMS = [
  "DIGIMAN Kaji",
  "DIGIMAN Digital",
  "DIGIMAN Bisnis",
  "DIGIMAN Manajemen",
  "DIGIMAN Akademi",
  "Kaji Dulu",
  "Sistem Nyata",
  "Harga Terang",
] as const;

export const MANIFESTO = {
  eyebrow: "Tentang Kami",
  title:
    "Kami bukan agensi yang menjual janji. Kami holding yang ikut mengurus.",
  body: "DIGIMAN.ID lahir dari satu keyakinan sederhana: bisnis yang tidak berdigital akan tertinggal. Karena itu kami hadir sebagai kekuatan lengkap — unit Kaji untuk memahami, unit Digital untuk membangun, unit Bisnis untuk menumbuhkan, unit Manajemen untuk mengatur, unit Akademi untuk membekali manusianya. Anda fokus menjalankan bisnis; kami memastikan sistemnya berdiri kokoh.",
  principles: [
    {
      index: "01",
      title: "Kaji dulu, bangun kemudian",
      description:
        "Tidak ada satu rupiah dieksekusi sebelum masalahnya dipahami. Riset adalah investasi termurah yang menghemat segalanya.",
    },
    {
      index: "02",
      title: "Bisnis nyata, sistem nyata",
      description:
        "Kami bekerja pada yang terukur: legalitas, proses, data, penjualan. Tidak ada slide kosong yang dijual sebagai strategi.",
    },
    {
      index: "03",
      title: "Harga terang, lingkup jelas",
      description:
        "Setiap jasa punya lingkup, durasi, dan harga yang tertulis di depan. Kejutan biaya adalah kegagalan profesionalisme.",
    },
    {
      index: "04",
      title: "Dibangun untuk 100 tahun",
      description:
        "Keputusan hari ini dievaluasi terhadap generasi berikutnya — bukan terhadap tren kuartal ini.",
    },
  ],
} as const;

export const ECOSYSTEM = {
  eyebrow: "Struktur Holding",
  title: "Satu holding. Lima kekuatan. Satu tujuan: bisnis Anda selamat.",
  description:
    "Setiap unit mengerjakan satu lapis persoalan — dan saling menguatkan. Semuanya dimulai dari Kaji; sisanya mengikuti bukti.",
  holdingLabel: "Digital Holding — Indonesia",
} as const;

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    key: "kaji",
    name: "DIGIMAN Kaji",
    tagline: "Riset dan kecerdasan sebelum eksekusi.",
    sector: "Riset & Intelijen Bisnis",
    stage: "Operating",
    description:
      "Gerbang masuk setiap kerja sama. Kami mengkaji bisnis Anda secara utuh — pasar, proses, data, teknologi, tim — sehingga setiap keputusan berikutnya berdiri di atas bukti, bukan asumsi.",
    focus: ["Audit Digital", "Riset Pasar", "Studi Kelayakan", "Data & Insight"],
    attributes: [
      { label: "Model", value: "Kaji dulu, baru bangun" },
      { label: "Peran", value: "Gerbang masuk klien" },
    ],
  },
  {
    key: "digital",
    name: "DIGIMAN Digital",
    tagline: "Membangun aset digital yang bekerja untuk Anda.",
    sector: "Teknologi & Produk",
    stage: "Operating",
    description:
      "Unit teknologi holding: website korporat, aplikasi, e-commerce, AI agent, dan otomasi — dibangun dengan standar produksi, bukan demo yang mengkilap lalu mati.",
    focus: [
      "Website Korporat",
      "Aplikasi Web & Mobile",
      "AI & Otomasi",
      "E-commerce",
    ],
    attributes: [
      { label: "Model", value: "Build — Operate — Transfer" },
      { label: "Standar", value: "Production-grade, selalu" },
    ],
  },
  {
    key: "bisnis",
    name: "DIGIMAN Bisnis",
    tagline: "Membangun dan menumbuhkan lini bisnis.",
    sector: "Pengembangan Bisnis",
    stage: "Building",
    description:
      "Bisnis berarti ada bisnisnya: dari pendirian badan usaha, business plan, hingga venture building — kami membangun lini bisnis baru bersama Anda, dari nol legalitas sampai siap ekspansi.",
    focus: ["Legalitas Usaha", "Business Plan", "Venture Building", "Akses Pendanaan"],
    attributes: [
      { label: "Model", value: "Fee atau kemitraan" },
      { label: "Horizon", value: "Jangka panjang" },
    ],
  },
  {
    key: "manajemen",
    name: "DIGIMAN Manajemen",
    tagline: "Sistem yang mengurus detail, setiap hari.",
    sector: "Manajemen & Sistem",
    stage: "Building",
    description:
      "Manajemen berarti ada sistemnya: SOP, struktur organisasi, KPI, dashboard, dan tata kelola — sehingga bisnis Anda berjalan tanpa bergantung pada satu orang pun.",
    focus: ["SOP & Playbook", "Dashboard & ERP", "Keuangan & KPI", "Tata Kelola"],
    attributes: [
      { label: "Model", value: "Sistem dulu, baru skala" },
      { label: "Prinsip", value: "Terukur, dapat diaudit" },
    ],
  },
  {
    key: "akademi",
    name: "DIGIMAN Akademi",
    tagline: "Manusia yang menjalankan sistem.",
    sector: "Talenta & Literasi Digital",
    stage: "Genesis",
    description:
      "Sistem sebaik apa pun gagal tanpa manusia yang menguasainya. Akademi membekali direksi hingga tim muda dengan literasi digital yang aplikatif — bukan teori pamer.",
    focus: ["Kelas Eksekutif", "In-house Training", "Bootcamp", "Sertifikasi"],
    attributes: [
      { label: "Status", value: "Tahap perancangan" },
      { label: "Misi", value: "Digital untuk semua lini usaha" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* KATALOG JASA & HARGA — inti dari model bisnis nyata DIGIMAN.ID.     */
/* 16 jasa, tiap jasa: lingkup (deliverables), durasi, harga indikatif. */
/* ------------------------------------------------------------------ */

export const SERVICES = {
  eyebrow: "Layanan & Harga",
  title: "Jasa yang jelas isinya, terang harganya.",
  description:
    "Lima unit, enam belas jasa. Pilih titik masuk sesuai kebutuhan — atau mulai dari Kaji dan biarkan kajian yang menentukan.",
  note: "Harga bersifat indikatif dan transparan sebagai titik awal sebelum sesi Kaji. Lingkup final ditetapkan bersama dalam proposal tertulis — tidak ada biaya tersembunyi, tidak ada kejutan di akhir.",
} as const;

export const SERVICE_CATALOG: ServiceLine[] = [
  {
    unitKey: "kaji",
    unitName: "Kaji",
    intro:
      "Tidak ada keputusan tanpa kajian. Semua kerja sama dimulai di sini — riset adalah fondasi, bukan formalitas.",
    services: [
      {
        key: "kaji-express",
        name: "Kaji Express",
        description:
          "Diagnosis cepat lima hari: di mana bisnis Anda kuat, rapuh, dan paling siap untuk berdigital.",
        deliverables: [
          "Peta aset digital dan celahnya",
          "Benchmark 3 kompetitor terdekat",
          "Rekomendasi prioritas 90 hari",
        ],
        price: "Rp 7.500.000",
        duration: "5 hari kerja",
        popular: true,
      },
      {
        key: "kaji-deep",
        name: "Kaji Mendalam",
        description:
          "Kajian menyeluruh atas bisnis, proses, data, teknologi, dan tim — dasar dari program transformasi berikutnya.",
        deliverables: [
          "Audit 6 dimensi bisnis",
          "Wawancara pemangku kepentingan",
          "Peta Jalan 12 bulan + estimasi anggaran",
        ],
        price: "Rp 25.000.000",
        duration: "2–3 minggu",
      },
      {
        key: "kaji-feasibility",
        name: "Studi Kelayakan Bisnis Baru",
        description:
          "Validasi ide sebelum modal mengalir: ukuran pasar, kompetitor, unit ekonomi, dan risiko yang jujur.",
        deliverables: [
          "Ukuran pasar dan segmentasi",
          "Proyeksi unit ekonomi 24 bulan",
          "Rekomendasi go / no-go",
        ],
        price: "Mulai Rp 18.000.000",
        duration: "3–4 minggu",
      },
    ],
  },
  {
    unitKey: "digital",
    unitName: "Digital",
    intro:
      "Aset digital dibangun sekali dengan standar produksi — lalu bekerja untuk Anda bertahun-tahun.",
    services: [
      {
        key: "web-premium",
        name: "Website Korporat Premium",
        description:
          "Situs kelas institusi: cepat, aman, siap-SEO, dan mudah dikelola tim internal Anda sendiri.",
        deliverables: [
          "Desain kustom + design system",
          "CMS + pelatihan pengelolaan",
          "SEO teknis + analitik terpasang",
        ],
        price: "Mulai Rp 45.000.000",
        duration: "4–6 minggu",
        popular: true,
      },
      {
        key: "app",
        name: "Aplikasi Web / Mobile",
        description:
          "Dari MVP untuk validasi cepat sampai aplikasi produksi dengan pengguna nyata dan pemeliharaan.",
        deliverables: [
          "Discovery dan spesifikasi tertulis",
          "Desain + pengembangan iteratif",
          "Rilis app store / domain produksi",
        ],
        price: "Mulai Rp 120.000.000",
        duration: "8–12 minggu",
      },
      {
        key: "ai-automation",
        name: "AI Agent & Otomasi",
        description:
          "Chatbot layanan pelanggan, otomasi dokumen, integrasi antar sistem — pekerjaan berulang diserahkan ke mesin.",
        deliverables: [
          "Peta proses dan peluang otomasi",
          "AI agent terlatih dari data Anda",
          "Dashboard monitoring dan evaluasi",
        ],
        price: "Mulai Rp 25.000.000",
        duration: "2–4 minggu",
      },
      {
        key: "digital-care",
        name: "Digital Care",
        description:
          "Pemeliharaan berkelanjutan: keamanan, backup, pembaruan, dan iterasi kecil setiap bulan.",
        deliverables: [
          "Monitoring dan patch keamanan",
          "Backup teruji dan terjadwal",
          "Laporan kesehatan bulanan",
        ],
        price: "Rp 3.500.000/bulan",
        duration: "Kontrak bulanan",
      },
    ],
  },
  {
    unitKey: "bisnis",
    unitName: "Bisnis",
    intro:
      "Bisnis berarti ada bisnisnya — kami bangun dari legalitas hingga lini usaha siap ekspansi.",
    services: [
      {
        key: "legal",
        name: "Pendirian & Legalitas Usaha",
        description:
          "PT, CV, NIB, izin dasar — urusan birokrasi diselesaikan rapi tanpa Anda bolak-balik memusingkannya.",
        deliverables: [
          "Pendampingan akta dan SK Kemenkumham",
          "NIB, NPWP, izin usaha",
          "Checklist kewajiban bulanan",
        ],
        price: "Mulai Rp 6.000.000",
        duration: "2–3 minggu",
      },
      {
        key: "bizplan",
        name: "Business Plan & Pitch Deck",
        description:
          "Dokumen yang membuat bank dan investor paham — dan membuat Anda sendiri lebih percaya pada bisnis Anda.",
        deliverables: [
          "Model bisnis dan unit ekonomi",
          "Proyeksi keuangan 3 tahun",
          "Pitch deck 12–15 halaman",
        ],
        price: "Mulai Rp 12.000.000",
        duration: "2 minggu",
      },
      {
        key: "venture",
        name: "Venture Building",
        description:
          "Bangun lini bisnis baru bersama: tim gabungan, sistem, teknologi, dan jalur pendanaan — dengan target terukur.",
        deliverables: [
          "Tim gabungan dedikasi penuh",
          "Sistem & teknologi dari DIGIMAN Digital",
          "KPI dan milestone bersama",
        ],
        price: "Custom — fee atau equity",
        duration: "Mulai 6 bulan",
        popular: true,
      },
    ],
  },
  {
    unitKey: "manajemen",
    unitName: "Manajemen",
    intro:
      "Manajemen berarti ada sistemnya — supaya bisnis berjalan tanpa bergantung pada satu orang.",
    services: [
      {
        key: "sop",
        name: "Sistem Manajemen & SOP",
        description:
          "Struktur, proses baku, KPI, playbook — sistem operasi bisnis Anda tertulis, terpakai, dan diaudit.",
        deliverables: [
          "Struktur organisasi dan RACI",
          "SOP proses inti: sales, operasional, keuangan",
          "Playbook + pelatihan implementasi",
        ],
        price: "Mulai Rp 35.000.000",
        duration: "4–6 minggu",
        popular: true,
      },
      {
        key: "erp",
        name: "Dashboard & ERP Ringan",
        description:
          "Data penjualan, stok, dan keuangan terkumpul di satu tempat; laporan otomatis, keputusan lebih cepat.",
        deliverables: [
          "Sistem data terpusat",
          "Dashboard realtime",
          "Laporan otomatis mingguan/bulanan",
        ],
        price: "Mulai Rp 30.000.000",
        duration: "4–8 minggu",
      },
      {
        key: "vcoo",
        name: "Virtual COO / CDO",
        description:
          "Direktur operasional atau digital sewa bulanan — pengalaman C-level tanpa biaya C-level penuh.",
        deliverables: [
          "Pimpinan eksekusi bulanan",
          "Rapat komite dan laporan tertulis",
          "Penjamin mutu kerja semua unit",
        ],
        price: "Rp 12.500.000/bulan",
        duration: "Min. 3 bulan",
      },
    ],
  },
  {
    unitKey: "akademi",
    unitName: "Akademi",
    intro:
      "Sistem gagal tanpa manusia. Kami bekali manusia Anda sampai sistemnya hidup.",
    services: [
      {
        key: "exec",
        name: "Kelas Eksekutif: Digital Strategy",
        description:
          "Dua hari intensif untuk direksi dan manajemen puncak — peta digital yang relevan dengan bisnis Anda.",
        deliverables: [
          "Workshop 2 hari (maks. 20 orang)",
          "Materi dan template kerja",
          "Sesi tindak lanjut 30 hari kemudian",
        ],
        price: "Rp 8.500.000/orang",
        duration: "2 hari",
      },
      {
        key: "inhouse",
        name: "In-house Training",
        description:
          "Kurikulum kustom atas masalah nyata tim Anda, disampaikan langsung di kantor Anda.",
        deliverables: [
          "Analisis kebutuhan tim",
          "Materi kustom + praktik langsung",
          "Evaluasi pasca-training",
        ],
        price: "Mulai Rp 20.000.000/batch",
        duration: "1–3 hari",
        popular: true,
      },
      {
        key: "bootcamp",
        name: "Digital Bootcamp",
        description:
          "Enam minggu praktik: data, AI, dan otomasi untuk tim muda Anda — dengan proyek dari bisnis Anda sendiri.",
        deliverables: [
          "6 minggu, 12 sesi praktik",
          "Proyek nyata dari bisnis Anda",
          "Sertifikat dan portofolio",
        ],
        price: "Rp 15.000.000/orang",
        duration: "6 minggu",
      },
    ],
  },
];

export const METODE = {
  eyebrow: "Metode Kerja",
  title: "Satu alur. Lima langkah. Nol asumsi.",
  description:
    "Alur yang sama kami terapkan pada klien dan pada unit internal holding — karena sistem yang baik tidak mengenal dobel standar.",
  steps: [
    {
      index: "01",
      title: "Kaji",
      description:
        "Riset menyeluruh: bisnis, pasar, data, sistem. Tidak ada keputusan sebelum masalah dipahami.",
    },
    {
      index: "02",
      title: "Rancang",
      description:
        "Arsitektur solusi — strategi, sistem, desain — lengkap dengan lingkup kerja dan anggaran terbuka.",
    },
    {
      index: "03",
      title: "Bangun",
      description:
        "Eksekusi standar produksi: tonggak jelas, laporan berkala, tanpa kabur dari tanggung jawab.",
    },
    {
      index: "04",
      title: "Kelola",
      description:
        "Operasi, keamanan, pemeliharaan. Sistem dirawat terus; Anda fokus menjual dan melayani.",
    },
    {
      index: "05",
      title: "Skala",
      description:
        "Ukur, belajar, evolusi. Yang berhasil kami gandakan; yang gagal kami perbaiki atau buang.",
    },
  ] satisfies MetodeStep[],
} as const;

export const VISION = {
  eyebrow: "Visi",
  title: "Dibangun untuk seratus tahun ke depan.",
  description:
    "Keputusan besar hari ini kami uji dengan satu pertanyaan: apakah ini membuat DIGIMAN dan mitranya lebih kokoh di 2125?",
  milestones: [
    {
      year: "2025",
      title: "Fondasi",
      description:
        "Lima unit beroperasi. Metodologi Kaji terstandar. Klien pertama masuk — dan selamat dari keterpurukan digital.",
    },
    {
      year: "2030",
      title: "Regional",
      description:
        "Layanan menjangkau Asia Tenggara. Sistem terbukti dapat diulang lintas pasar dan lintas tim.",
    },
    {
      year: "2040",
      title: "Business OS",
      description:
        "DIGIMAN OS menjadi sistem operasi ribuan usaha menengah: satu papan kendali untuk bisnis, sistem, dan pertumbuhan.",
    },
    {
      year: "2060",
      title: "Orkestra Otonom",
      description:
        "AI mengorkestrasi operasi harian. Manusia memimpin visi, nilai, dan relasi.",
    },
    {
      year: "2100",
      title: "Institusi",
      description:
        "Pengetahuan mewariskan dirinya sendiri. Tata kelola abadi lintas generasi pemimpin.",
    },
    {
      year: "2125",
      title: "Seratus Tahun",
      description:
        "Generasi ketiga memimpin. Ekosistem hidup melampaui pendirinya — bukti bahwa yang berdigital, bertahan.",
    },
  ] satisfies VisionMilestone[],
  closing:
    "Kami tidak membangun untuk tren. Kami membangun untuk seratus tahun.",
} as const;

export const DEWAN = {
  eyebrow: "Modal Intelektual",
  title: "46 Dewan Pakar. Dari hulu ke hilir.",
  description:
    "Setiap persoalan diturunkan kepada dewan yang tepat — dari strategi dan teknologi sampai hukum, keuangan, dan filosofi peradaban. Satu holding, empat puluh enam disiplin.",
  disciplines: [
    "Strategi Bisnis",
    "Transformasi Digital",
    "Arsitektur Perangkat Lunak",
    "Kecerdasan Buatan",
    "Data & Analitik",
    "Keamanan Siber",
    "Keuangan Korporat",
    "Akuntansi",
    "Perpajakan",
    "Hukum Bisnis",
    "Kepatuhan",
    "Tata Kelola",
    "Manajemen Risiko",
    "Rantai Pasok",
    "Operasi & Proses",
    "SDM & Talenta",
    "Desain UX",
    "Desain Visual",
    "Copywriting",
    "Pemasaran Digital",
    "SEO",
    "Growth",
    "Penjualan",
    "Layanan Pelanggan",
    "Riset Pasar",
    "Perilaku Konsumen",
    "Pendidikan",
    "Psikologi Organisasi",
    "Kepemimpinan",
    "Inovasi",
    "Kewirausahaan",
    "Investasi",
    "Properti",
    "Energi",
    "Logistik",
    "Kesehatan Digital",
    "Fintech",
    "E-commerce",
    "Agrikultur Digital",
    "Pariwisata",
    "Manufaktur",
    "Media & Publikasi",
    "Komunikasi Publik",
    "Diplomasi Bisnis",
    "Filosofi",
    "Sejarah Peradaban",
  ],
} as const;

export const TECHNOLOGY = {
  eyebrow: "Teknologi",
  title: "Menembus tujuh lapis langit digital.",
  description:
    "Setiap keputusan teknis DIGIMAN dievaluasi terhadap tujuh lapis ini — dari fondasi teknis di dasar sampai evolusi di puncak. Tidak ada lapis yang boleh dilompati.",
  stackLabel: "7-Layer Digital Architecture — hulu ke hilir",
  layers: [
    {
      index: "L1",
      title: "Technical Foundation",
      description:
        "Infrastruktur, keamanan, performa, dan tooling yang andal — prasyarat dari semua yang lain.",
    },
    {
      index: "L2",
      title: "Information Architecture",
      description:
        "Struktur informasi yang mengikuti model bisnis Anda, bukan sekadar kebiasaan website.",
    },
    {
      index: "L3",
      title: "Semantic Meaning",
      description:
        "Makna yang eksplisit: entitas, relasi, dan metadata yang dapat dipahami manusia maupun mesin.",
    },
    {
      index: "L4",
      title: "Discovery",
      description:
        "Kemudahan ditemukan — oleh mesin pencari, AI search, dan sistem pengetahuan — melalui kejelasan, bukan trik.",
    },
    {
      index: "L5",
      title: "Human Experience",
      description:
        "Pengalaman yang cepat, aksesibel, dan berhierarki — teknologi melayani manusia, bukan sebaliknya.",
    },
    {
      index: "L6",
      title: "Authority / Trust",
      description:
        "Otoritas dibangun dari bukti, konsistensi, dan tata kelola — tidak pernah dari klaim yang direkayasa.",
    },
    {
      index: "L7",
      title: "Evolution",
      description:
        "Sistem yang dirancang untuk belajar dan berevolusi — measurement, learning, evolution.",
    },
  ] satisfies TechLayer[],
  pillars: [
    { label: "Search-native", detail: "SEO & AI-ready sejak kode pertama" },
    { label: "Performance-first", detail: "RSC, JS minimal, Core Web Vitals" },
    { label: "Accessible", detail: "WCAG-minded, reduced-motion aware" },
    { label: "Portable", detail: "Data standar, export path selalu ada" },
  ],
} as const;

export const GOVERNANCE = {
  eyebrow: "Tata Kelola",
  title: "Sistem yang mengurus detail — termasuk pertanggungjawabannya.",
  description:
    "Manajemen tanpa tata kelola adalah kekacauan yang tertata rapi di atas kertas. Kami mengikat setiap entitas pada kejelasan kepemilikan, peran, dan mekanisme persetujuan.",
  entityLifecycle: [
    "Holding",
    "Subsidiaries",
    "Business Units",
    "Projects",
    "Products",
    "Services",
  ],
  pillars: [
    {
      key: "ownership",
      title: "Ownership",
      description:
        "Setiap entitas memiliki pemilik yang jelas dengan mandat dan tanggung jawab yang terdokumentasi.",
    },
    {
      key: "roles",
      title: "Roles & Permissions",
      description:
        "Akses mengikuti peran — prinsip least privilege diterapkan pada sistem, data, dan keputusan.",
    },
    {
      key: "approval",
      title: "Approval Workflow",
      description:
        "Keputusan berdampak besar melewati mekanisme persetujuan yang terstruktur, bukan konsensus diam-diam.",
    },
    {
      key: "audit",
      title: "Audit & Reporting",
      description:
        "Jejak audit untuk operasi sensitif dan pelaporan berkala yang dapat diverifikasi pihak eksternal.",
    },
    {
      key: "compliance",
      title: "Compliance",
      description:
        "Kepatuhan terhadap regulasi yang berlaku, termasuk perlindungan data pribadi pengguna.",
    },
    {
      key: "security",
      title: "Security",
      description:
        "Validasi input, prinsip least privilege, tanpa rahasia di dalam kode, dan pemantauan dependensi.",
    },
  ] satisfies GovernancePillar[],
} as const;

export const CAREERS = {
  eyebrow: "Karier",
  title: "Bangun bisnis nyata, bukan slide nyata.",
  description:
    "Kami mencari praktisi yang suka mengurus detail: yang senang meriset, membangun sistem, dan melihat klien bertahan karena hasil kerjanya.",
  culture: [
    "Kaji dulu — pendapat tanpa data adalah opini, bukan kerja.",
    "Tulis dan dokumentasikan — memori institusi lebih penting dari hero individu.",
    "Harga terang ke klien, laporan jujur ke tim.",
  ],
  roles: [
    {
      key: "analis",
      title: "Analis Riset Bisnis",
      unit: "DIGIMAN Kaji",
      type: "Full-time",
      location: "Hybrid — Indonesia",
    },
    {
      key: "fseng",
      title: "Full-Stack Engineer",
      unit: "DIGIMAN Digital",
      type: "Full-time",
      location: "Remote — Indonesia",
    },
    {
      key: "builder",
      title: "Business Builder",
      unit: "DIGIMAN Bisnis",
      type: "Full-time",
      location: "Jakarta — Indonesia",
    },
    {
      key: "mgr",
      title: "Konsultan Manajemen",
      unit: "DIGIMAN Manajemen",
      type: "Kontrak",
      location: "Hybrid — Indonesia",
    },
  ] satisfies CareerRole[],
} as const;

export const CONTACT = {
  eyebrow: "Kontak",
  title: "Mulai dari Kaji. Percakapan pertama gratis.",
  description:
    "Ceritakan bisnis Anda — kami dengarkan dulu, baru sarankan unit dan jasa yang tepat. Tanpa kewajiban apa pun.",
  topics: [
    "Konsultasi Kaji (Gratis)",
    "Layanan & Harga",
    "Venture Building",
    "Kemitraan",
    "Karier",
    "Lainnya",
  ],
  budgets: [
    "< Rp 10 juta",
    "Rp 10 – 50 juta",
    "Rp 50 – 150 juta",
    "> Rp 150 juta",
    "Belum tahu",
  ],
  info: [
    { label: "Email", value: ORG.email },
    { label: "Konsultasi awal", value: "Gratis — 30 menit" },
    { label: "Waktu respons", value: "1–2 hari kerja" },
  ],
} as const;

export const INSIGHTS: InsightSeed[] = [
  {
    slug: "holding-digital-butuh-arsitektur",
    title: "Mengapa holding digital butuh arsitektur, bukan sekadar website",
    excerpt:
      "Website adalah permukaannya. Arsitektur adalah sistemnya. Perbedaan keduanya menentukan apakah perusahaan bertumbuh atau sekadar tampil baik.",
    category: "Arsitektur",
    readMinutes: 6,
    daysAgo: 9,
    featured: true,
  },
  {
    slug: "kaji-dulu-ekonomi-kehati-hatian",
    title: "Kaji dulu: ekonomi kehati-hatian di era digital",
    excerpt:
      "Biaya riset terlihat mahal sampai Anda menghitung biaya salah bangun. Data dari lapangan mengapa kaji dulu selalu lebih murah.",
    category: "Metode",
    readMinutes: 5,
    daysAgo: 16,
    featured: false,
  },
  {
    slug: "tujuh-lapis-arsitektur-digital",
    title: "Tujuh lapis langit digital: dari fondasi teknis hingga evolusi",
    excerpt:
      "Kerangka yang kami gunakan untuk mengevaluasi setiap keputusan teknis — dan mengapa urutannya tidak boleh dibalik.",
    category: "Framework",
    readMinutes: 8,
    daysAgo: 21,
    featured: false,
  },
  {
    slug: "sistem-atau-mati",
    title: "Bisnis tanpa sistem: skenario pelan-pelan tenggelam",
    excerpt:
      "Yang tidak berdigital akan tertinggal — tapi yang berdigital tanpa sistem hanya tertinggal lebih lambat. Inilah jalan tengahnya.",
    category: "Manajemen",
    readMinutes: 7,
    daysAgo: 34,
    featured: false,
  },
];

export const FOOTER = {
  blurb:
    "Holding digital yang mengurus bisnis secara detail: kaji dulu, bangun bisnisnya, pasang sistemnya. Yang masuk bersama kami akan selamat — yang tidak berdigital akan tertinggal.",
  columns: [
    {
      title: "Navigasi",
      links: [
        { href: "#tentang", label: "Tentang" },
        { href: "#ekosistem", label: "Unit Bisnis" },
        { href: "#layanan", label: "Layanan & Harga" },
        { href: "#metode", label: "Metode Kerja" },
      ],
    },
    {
      title: "Unit Holding",
      links: [
        { href: "#ekosistem", label: "DIGIMAN Kaji" },
        { href: "#ekosistem", label: "DIGIMAN Digital" },
        { href: "#ekosistem", label: "DIGIMAN Bisnis" },
        { href: "#ekosistem", label: "DIGIMAN Manajemen" },
        { href: "#ekosistem", label: "DIGIMAN Akademi" },
      ],
    },
    {
      title: "Lebih Lanjut",
      links: [
        { href: "#visi", label: "Visi 2125" },
        { href: "#dewan", label: "46 Dewan Pakar" },
        { href: "#insights", label: "Insights" },
        { href: "#kontak", label: "Kontak" },
      ],
    },
  ],
} as const;
