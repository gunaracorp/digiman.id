/**
 * DIGIMAN.ID — Content source of truth.
 * Single typed module that seeds the database and provides a static
 * fallback if the database is unavailable. Pure data — no React imports.
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

export type VentureThesis = {
  key: string;
  title: string;
  thesis: string;
  backing: string;
  stage: string;
};

export type ServiceCapability = {
  key: string;
  icon: "layers" | "brain" | "cloud" | "pen-tool" | "compass" | "shield-check";
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
  tagline: "Digital Holding Architecture",
  description:
    "Digital holding yang menaungi, membangun, dan mengorkestrasi bisnis, teknologi, serta modal intelektual dalam satu ekosistem terpadu.",
  founded: "2025",
  email: "hello@digiman.id",
  careersEmail: "careers@digiman.id",
  location: "Indonesia",
} as const;

export const NAV_ITEMS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#ekosistem", label: "Ekosistem" },
  { href: "#bisnis", label: "Bisnis" },
  { href: "#layanan", label: "Layanan" },
  { href: "#teknologi", label: "Teknologi" },
  { href: "#insights", label: "Insights" },
] as const;

export const HERO = {
  eyebrow: "Digital Holding — Indonesia · Est. 2025",
  headlineA: "Arsitektur untuk",
  headlineB: "ekosistem",
  headlineC: "yang bertumbuh.",
  statement:
    "DIGIMAN.ID menaungi, membangun, dan mengorkestrasi bisnis, teknologi, serta modal intelektual dalam satu ekosistem terpadu — dari fondasi teknis hingga tata kelola yang dapat diaudit.",
  primaryCta: { href: "#ekosistem", label: "Jelajahi Ekosistem" },
  secondaryCta: { href: "#kontak", label: "Hubungi Kami" },
  scrollCue: "Gulir untuk menjelajah",
} as const;

export const HERO_METRICS = [
  { value: 4, label: "Unit bisnis" },
  { value: 7, label: "Lapis arsitektur" },
  { value: 6, label: "Kapabilitas inti" },
  { value: 1, label: "Ekosistem terpadu" },
] as const;

export const MARQUEE_ITEMS = [
  "DIGIMAN Digital",
  "DIGIMAN Intelligence",
  "DIGIMAN Capital",
  "DIGIMAN Academy",
  "Holding",
  "Technology",
  "Capital",
  "Governance",
] as const;

export const MANIFESTO = {
  eyebrow: "Tentang Kami",
  title:
    "Kami tidak membangun sekadar perusahaan. Kami membangun sistem yang saling menguatkan.",
  body: "DIGIMAN.ID adalah digital holding architecture — sebuah ekosistem tempat bisnis, teknologi, dan modal intelektual dirancang sebagai satu kesatuan. Setiap unit menguatkan unit lain; setiap keputusan diukur dampaknya terhadap keseluruhan sistem.",
  principles: [
    {
      index: "01",
      title: "Kejelasan melebihi kepintaran",
      description:
        "Sistem terbaik adalah yang dapat dipahami, dijelaskan, dan dipelihara oleh manusia yang membangunnya.",
    },
    {
      index: "02",
      title: "Kepercayaan adalah arsitektur",
      description:
        "Trust tidak diklaim — ia direkayasa melalui transparansi, konsistensi, dan tata kelola yang dapat diaudit.",
    },
    {
      index: "03",
      title: "Setiap unit menguatkan unit lain",
      description:
        "Nilai holding lahir dari konektivitas: teknologi melayani bisnis, bisnis menghasilkan data, data mempertajam keputusan.",
    },
    {
      index: "04",
      title: "Dibangun untuk diwariskan",
      description:
        "Kami merancang untuk jangka panjang: dokumentasi, portabilitas, dan evolusi berkelanjutan di atas trik jangka pendek.",
    },
  ],
} as const;

export const ECOSYSTEM = {
  eyebrow: "Ekosistem",
  title: "Satu holding. Empat pilar. Banyak entitas masa depan.",
  description:
    "Setiap unit dirancang agar dapat berkembang menjadi entitas yang berdiri sendiri — sambil tetap mengambil kekuatan dari jaringan yang sama.",
  holdingLabel: "DIGIMAN Holding",
} as const;

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    key: "digital",
    name: "DIGIMAN Digital",
    tagline: "Rekayasa produk & platform digital.",
    sector: "Software & Product Engineering",
    stage: "Operating",
    description:
      "Unit pengembangan inti: merancang, membangun, dan mengoperasikan produk serta platform digital untuk kebutuhan internal ekosistem dan klien terpilih.",
    focus: ["Product Design", "Web Platform", "Mobile Apps", "Design Systems"],
    attributes: [
      { label: "Model", value: "Build — Operate — Transfer" },
      { label: "Fokus pasar", value: "B2B & Enterprise" },
    ],
  },
  {
    key: "intelligence",
    name: "DIGIMAN Intelligence",
    tagline: "Data, AI, dan otomasi keputusan.",
    sector: "AI & Data",
    stage: "Building",
    description:
      "Membangun lapisan kecerdasan ekosistem: platform data, sistem AI, dan otomasi yang mengubah informasi menjadi keputusan yang dapat dipertanggungjawabkan.",
    focus: ["Data Platform", "Machine Learning", "LLM Systems", "Automation"],
    attributes: [
      { label: "Pendekatan", value: "AI-ready by architecture" },
      { label: "Prinsip", value: "Manusia tetap memegang kendali" },
    ],
  },
  {
    key: "capital",
    name: "DIGIMAN Capital",
    tagline: "Modal untuk fondasi digital jangka panjang.",
    sector: "Venture & Investment",
    stage: "Operating",
    description:
      "Lengan investasi holding: menyediakan modal dan pendampingan strategis bagi perusahaan yang memperkuat tema jangka panjang ekosistem.",
    focus: ["Early-stage", "B2B SaaS", "Digital Infrastructure", "Fintech"],
    attributes: [
      { label: "Peran", value: "Investor & mitra strategis" },
      { label: "Horizon", value: "Jangka panjang, bukan spekulatif" },
    ],
  },
  {
    key: "academy",
    name: "DIGIMAN Academy",
    tagline: "Modal intelektual & talenta digital.",
    sector: "Knowledge & Talent",
    stage: "Genesis",
    description:
      "Mengelola dan menumbuhkan pengetahuan ekosistem: kurikulum, riset, sertifikasi, dan komunitas praktisi digital Indonesia.",
    focus: ["Curriculum", "Research", "Certification", "Community"],
    attributes: [
      { label: "Status", value: "Tahap perancangan" },
      { label: "Misi", value: "Teknologi melayani manusia" },
    ],
  },
];

export const VENTURES = {
  eyebrow: "Ventures",
  title: "Kami menanamkan modal pada tema yang kami pahami.",
  description:
    "DIGIMAN Capital berinvestasi pada perusahaan yang memperkuat tesis jangka panjang ekosistem — bukan tren musiman.",
  theses: [
    {
      key: "ai-native",
      title: "AI-Native Applications",
      thesis:
        "Perangkat lunak yang memang dibangun di atas AI sejak hari pertama — bukan fitur tambal sulam — akan mendefinisikan ulang setiap industri.",
      backing:
        "Kami mendukung tim kecil dengan kedalaman teknis dan distribusi yang jelas.",
      stage: "Pre-seed — Series A",
    },
    {
      key: "digital-infra",
      title: "Digital Infrastructure",
      thesis:
        "Fondasi yang membuat ekonomi digital berjalan: data, konektivitas, keamanan, dan tooling untuk pengembang.",
      backing:
        "Aset yang tumbuh perlahan tetapi menguasai posisi strategis dalam rantai nilai.",
      stage: "Seed — Series B",
    },
    {
      key: "work-commerce",
      title: "Future of Work & Commerce",
      thesis:
        "Cara orang bekerja dan bertransaksi berubah secara struktural di Indonesia — dan membutuhkan infrastruktur baru.",
      backing:
        "Kami mencari model yang bekerja untuk pasar berkembang, bukan sekadar replika model global.",
      stage: "Pre-seed — Series A",
    },
  ] satisfies VentureThesis[],
} as const;

export const SERVICES = {
  eyebrow: "Layanan",
  title: "Kapabilitas ekosistem, dibuka untuk mitra terpilih.",
  description:
    "Kemampuan yang kami bangun untuk kebutuhan internal holding — dengan standar kelas institusi — juga kami buka untuk klien yang sejalan.",
  items: [
    {
      key: "product",
      icon: "layers",
      title: "Product Engineering",
      description:
        "Perancangan dan pengembangan produk digital end-to-end: dari discovery, arsitektur, hingga operasi.",
    },
    {
      key: "ai",
      icon: "brain",
      title: "AI & Data Integration",
      description:
        "Integrasi AI dan pipeline data yang siap diaudit — dengan manusia tetap memegang kendali keputusan.",
    },
    {
      key: "cloud",
      icon: "cloud",
      title: "Cloud & Infrastructure",
      description:
        "Infrastruktur yang aman, portabel, dan efisien biaya — dirancang untuk bertumbuh dari 1 hingga jutaan pengguna.",
    },
    {
      key: "design",
      icon: "pen-tool",
      title: "Design Systems",
      description:
        "Sistem desain yang konsisten dan dapat diskalakan, sehingga setiap produk terasa dari satu keluarga yang sama.",
    },
    {
      key: "strategy",
      icon: "compass",
      title: "Digital Strategy & Governance",
      description:
        "Peta jalan transformasi digital dengan model tata kelola yang jelas: ownership, peran, dan mekanisme audit.",
    },
    {
      key: "operations",
      icon: "shield-check",
      title: "Managed Operations",
      description:
        "Operasi berkelanjutan dengan SLA yang transparan — monitoring, pemeliharaan, dan evolusi sistem.",
    },
  ] satisfies ServiceCapability[],
} as const;

export const TECHNOLOGY = {
  eyebrow: "Teknologi",
  title: "Tujuh lapis arsitektur digital.",
  description:
    "Setiap keputusan teknis DIGIMAN dievaluasi terhadap tujuh lapis ini — dari fondasi teknis hingga evolusi berkelanjutan.",
  stackLabel: "7-Layer Digital Architecture",
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
        "Struktur informasi yang mengikuti model bisnis, bukan sekadar kebiasaan website.",
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
  title: "Tata kelola yang dapat diaudit, sejak hari pertama.",
  description:
    "Holding yang sehat dibangun di atas kejelasan kepemilikan, peran, dan pertanggungjawaban — bukan simpul jaringan informal.",
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
  title: "Bangun sistem yang bertahan lebih lama dari kita semua.",
  description:
    "Kami mencari orang yang menghargai kejelasan, bertanggung jawab atas hasil, dan ingin membangun sesuatu yang dapat diwariskan.",
  culture: [
    "Tulis dan dokumentasikan — memori institusi lebih penting dari hero individu.",
    "Keputusan disertai alasan; alasan disertai bukti.",
    "Teknologi melayani manusia — tidak ada dark patterns, tidak ada klaim palsu.",
  ],
  roles: [
    {
      key: "spe",
      title: "Senior Product Engineer",
      unit: "DIGIMAN Digital",
      type: "Full-time",
      location: "Remote — Indonesia",
    },
    {
      key: "ml",
      title: "AI/ML Engineer",
      unit: "DIGIMAN Intelligence",
      type: "Full-time",
      location: "Remote — Indonesia",
    },
    {
      key: "va",
      title: "Venture Analyst",
      unit: "DIGIMAN Capital",
      type: "Full-time",
      location: "Hybrid — Indonesia",
    },
  ] satisfies CareerRole[],
} as const;

export const CONTACT = {
  eyebrow: "Kontak",
  title: "Mari bicara tentang sistem yang ingin Anda bangun.",
  description:
    "Ceritakan kebutuhan Anda — kemitraan, layanan, investasi, atau karier. Tim yang tepat akan merespons.",
  topics: [
    "Kemitraan",
    "Layanan & Proyek",
    "Investasi & Ventura",
    "Karier",
    "Lainnya",
  ],
  info: [
    { label: "Email", value: ORG.email },
    { label: "Lokasi", value: "Indonesia" },
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
    slug: "tujuh-lapis-arsitektur-digital",
    title: "Tujuh lapis arsitektur digital: dari fondasi teknis hingga evolusi",
    excerpt:
      "Kerangka yang kami gunakan untuk mengevaluasi setiap keputusan teknis — dan mengapa urutannya tidak boleh dibalik.",
    category: "Framework",
    readMinutes: 8,
    daysAgo: 21,
    featured: false,
  },
  {
    slug: "ai-ready-adalah-konsekuensi-ia-yang-baik",
    title: "AI readiness adalah konsekuensi dari information architecture yang baik",
    excerpt:
      "Sistem yang mudah dipahami AI adalah sistem yang mudah dipahami manusia. Kecerdasan artifisial hanya memperbesar kualitas struktur yang sudah ada.",
    category: "AI",
    readMinutes: 5,
    daysAgo: 34,
    featured: false,
  },
  {
    slug: "tata-kelola-data-perusahaan-bertumbuh",
    title: "Tata kelola data untuk perusahaan yang sedang bertumbuh",
    excerpt:
      "Tata kelola bukan birokrasi — ia adalah cara memastikan keputusan tetap baik ketika organisasi tumbuh sepuluh kali lipat.",
    category: "Tata Kelola",
    readMinutes: 7,
    daysAgo: 47,
    featured: false,
  },
];

export const FOOTER = {
  blurb:
    "Digital holding architecture yang menaungi, membangun, dan mengorkestrasi bisnis, teknologi, serta modal intelektual dalam satu ekosistem.",
  columns: [
    {
      title: "Navigasi",
      links: [
        { href: "#tentang", label: "Tentang" },
        { href: "#ekosistem", label: "Ekosistem" },
        { href: "#bisnis", label: "Bisnis" },
        { href: "#ventura", label: "Ventures" },
      ],
    },
    {
      title: "Kapabilitas",
      links: [
        { href: "#layanan", label: "Layanan" },
        { href: "#teknologi", label: "Teknologi" },
        { href: "#tata-kelola", label: "Tata Kelola" },
        { href: "#insights", label: "Insights" },
      ],
    },
    {
      title: "Hubungi",
      links: [
        { href: "#kontak", label: "Kontak" },
        { href: "#karier", label: "Karier" },
        { href: `mailto:${ORG.email}`, label: ORG.email },
      ],
    },
  ],
} as const;
