/**
 * Seed GUNARA OS — 20 domain, 165 dokumen PGA, 5 paket standar, blog, settings.
 * Idempotent: upsert berdasarkan code/slug/key.
 */
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import path from "path";

const prisma = new PrismaClient();

type ParsedDoc = {
  code: string;
  number: number;
  title: string;
  tier: string;
  owner: string;
  points: string[];
  domain: number;
};
type ParsedDomain = {
  number: number;
  name: string;
  tagline: string;
  description: string;
};

const parsed = JSON.parse(
  readFileSync(path.join(__dirname, "pga-parsed.json"), "utf-8")
) as { meta: unknown; domains: ParsedDomain[]; docs: ParsedDoc[] };

// ─── 5 Paket Gunara OS (standarisasi: harga = jumlah dokumen × Rp 1 jt) ───

type PkgDef = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  docCount: number;
  durationWeeks: string;
  features: string[];
  highlight: boolean;
  order: number;
  select: (d: ParsedDoc, tiers: Map<string, number>) => boolean;
};

const tierSeq: Record<string, number> = {
  "P0 Navigasi": 0,
  "P1 Pertumbuhan": 1,
  "P2 Perluasan": 2,
  "P3 Warisan": 3,
};

const PKGS: PkgDef[] = [
  {
    code: "PGA-39",
    name: "Gunara OS Core",
    tagline: "Fondasi kendali perusahaan",
    description:
      "39 dokumen navigasi inti untuk melindungi identitas, arah, tata kelola, dan kendali operasional perusahaan. Titik mulai wajib setiap organisasi serius — satu sumber kebenaran untuk seluruh tim.",
    docCount: 39,
    durationWeeks: "6–8",
    features: [
      "39 dokumen P0 Navigasi terpilih",
      "Kickoff workshop 1 hari + wawancara founder",
      "Drafting oleh dewan pakar + 2x revisi",
      "Workshop serah terima & adopsi tim",
      "Akses Gunara OS digital 12 bulan",
    ],
    highlight: false,
    order: 1,
    select: (d) =>
      d.tier === "P0 Navigasi" && d.code !== "PGA-72",
  },
  {
    code: "PGA-45",
    name: "Gunara OS Bisnis",
    tagline: "Fondasi + mesin pertumbuhan awal",
    description:
      "Semua dokumen Core ditambah 6 dokumen pertumbuhan paling vital: charter nilai, whitepaper, peta pasar, playbook penjualan, sistem kinerja, dan kode budaya. Perusahaan mulai berjalan dan tumbuh dengan sistem.",
    docCount: 45,
    durationWeeks: "7–9",
    features: [
      "Semua isi paket Core (39 dokumen)",
      "6 dokumen P1 Pertumbuhan esensial",
      "Sesi strategi go-to-market 1x",
      "Peta KPI awal untuk tim inti",
      "Akses Gunara OS digital 18 bulan",
    ],
    highlight: false,
    order: 2,
    select: (d, seq) =>
      (d.tier === "P0 Navigasi" && d.code !== "PGA-72") ||
      (d.tier === "P1 Pertumbuhan" && (seq.get("P1 Pertumbuhan") ?? 99) <= 6),
  },
  {
    code: "PGA-72",
    name: "Gunara OS Pro",
    tagline: "Sistem operasi lengkap skala menengah",
    description:
      "Seluruh lapisan navigasi ditambah 32 dokumen pertumbuhan: strategi, layanan, operasional, keuangan, talenta, merek, dan data. Standar firma konsultan korporat — kini milik bisnis Anda.",
    docCount: 72,
    durationWeeks: "10–14",
    features: [
      "40 dokumen P0 + 32 dokumen P1 terpilih",
      "Semua benefit paket Bisnis",
      "Peta kompetisi & unit economics",
      "SOP delivery + risk register",
      "Akses Gunara OS digital 24 bulan",
    ],
    highlight: true,
    order: 3,
    select: (d, seq) =>
      (d.tier === "P0 Navigasi" && d.code !== "PGA-72") ||
      (d.tier === "P1 Pertumbuhan" && (seq.get("P1 Pertumbuhan") ?? 99) <= 33),
  },
  {
    code: "PGA-120",
    name: "Gunara OS Skala",
    tagline: "Ekspansi multi-unit & kemitraan",
    description:
      "72 dokumen Pro diperluas ke arah perluasan: kemitraan global, ekonomi syariah, dampak sosial, teknologi masa depan, dan ketahanan krisis. Untuk grup usaha yang menyiapkan gelombang ekspansi berikutnya.",
    docCount: 120,
    durationWeeks: "16–22",
    features: [
      "P0 (40) + P1 (40) + 40 dokumen P2 terpilih",
      "Semua benefit paket Pro",
      "Dokumen ekspansi & kemitraan global",
      "Framework teknologi & kedaulatan digital",
      "Akses Gunara OS digital 36 bulan",
    ],
    highlight: false,
    order: 4,
    select: (d, seq) =>
      (d.tier === "P0 Navigasi" && d.code !== "PGA-72") ||
      d.tier === "P1 Pertumbuhan" ||
      (d.tier === "P2 Perluasan" && (seq.get("P2 Perluasan") ?? 99) <= 41),
  },
  {
    code: "PGA-165",
    name: "Gunara OS Super Organisasi",
    tagline: "Arsitektur penuh 165 dokumen + warisan seabad",
    description:
      "Seluruh 165 dokumen lintas 20 domain — dari jiwa perusahaan hingga benteng hukum final. Paket warisan untuk membangun institusi yang bertahan seabad: lengkap, terukur, dan siap diaudit siapa pun.",
    docCount: 165,
    durationWeeks: "20–28",
    features: [
      "Seluruh 165 dokumen lintas 20 domain",
      "Semua benefit paket Skala",
      "Dokumen warisan & covenant seabad",
      "Review berkala arsitektur dokumen 1x/tahun",
      "Akses Gunara OS digital seumur paket + prioritas dewan pakar",
    ],
    highlight: false,
    order: 5,
    select: () => true,
  },
];

// ─── Blog awal ───

const BLOG = [
  {
    slug: "gunara-os-165-dokumen-super-organisasi",
    title: "Gunara OS: 165 Dokumen yang Mengubah Bisnis Anda Jadi Super Organisasi",
    excerpt:
      "Kebanyakan bisnis mati bukan karena kekurangan ide, tapi karena keputusan penting hanya hidup di kepala pendirinya. Gunara OS mengubahnya menjadi arsitektur 165 dokumen yang hidup, terukur, dan bisa diwariskan.",
    category: "Gunara OS",
    tags: ["Gunara OS", "PGA-165", "Super Organisasi", "SOP"],
    readMinutes: 8,
    content: `## Kenapa bisnis butuh "sistem operasi"?

Bayangkan komputer tanpa sistem operasi: hardware mahal, aplikasi canggih, tapi tidak ada yang mengatur kapan program berjalan, siapa yang boleh mengakses file, dan bagaimana memori dibagi. Bisnis tanpa dokumen arsitektural persis seperti itu — energi besar, hasil tidak stabil.

**Gunara OS** adalah standardisasi arsitektur dokumen perusahaan yang kami kembangkan dari pengalaman mendampingi 2.500+ pemilik bisnis: **20 domain, 165 dokumen**, disusun dalam empat lapis prioritas:

- **P0 Navigasi (40 dokumen)** — peta kendali: visi, misi, tata kelola, SOP inti. Tanpa lapisan ini, perusahaan jalan tanpa kompas.
- **P1 Pertumbuhan (40 dokumen)** — mesin penjualan, merek, talenta, dan keuangan yang membuat organisasi naik kelas.
- **P2 Perluasan (48 dokumen)** — kemitraan global, ekspansi ASEAN, teknologi masa depan, dan ketahanan krisis.
- **P3 Warisan (37 dokumen)** — dokumen seabad: covenant, legacy, dan benteng hukum final.

## Bukan tumpukan template, tapi sistem yang hidup

Setiap dokumen di Gunara OS punya tiga ciri:

1. **Satu pemilik jelas** — tidak ada dokumen "milik semua orang" (artinya milik tidak ada).
2. **Terhubung antar dokumen** — visi terhubung ke strategi, strategi ke SOP, SOP ke KPI.
3. **Ada ritual pembaruan** — dokumen yang tidak pernah direvisi adalah dokumen mati.

## Mulai dari mana?

Kami menstandardisasi lima paket: **PGA-39 (Core), PGA-45 (Bisnis), PGA-72 (Pro), PGA-120 (Skala), dan PGA-165 (Super Organisasi)**. Rumus harganya sederhana dan transparan: *jumlah dokumen × Rp 1 juta*. Tidak ada biaya siluman.

> Aturan praktisnya: jika sebuah keputusan penting tidak tertulis di dokumen mana pun, maka organisasi Anda belum memiliki keputusan itu — hanya kebetulan-kebetulan.

Bicara dengan tim kami lewat WhatsApp atau buka **Proposal Studio** — dalam 5 menit Anda mendapat penawaran resmi lengkap dengan rincian dokumen per domain.`,
  },
  {
    slug: "tujuh-lapis-langit-legalitas-peta-lengkap",
    title: "7 Lapis Langit Legalitas: Peta Lengkap dari NIB sampai Kategori Atas",
    excerpt:
      "Legalitas bukan satu dokumen, tapi tujuh lapis yang saling menopang. Ini peta lengkapnya — dan cara melewatinya tanpa drama.",
    category: "Legalitas",
    tags: ["Legalitas", "NIB", "PT", "Perizinan"],
    readMinutes: 7,
    content: `## Lapis demi lapis, bukan sekadar "punya PT"

Banyak pemilik bisnis berhenti di SK Kemenkumham dan merasa "sudah legal". Padahal legalitas punya tujuh lapis, dan setiap lapis membuka pintu yang berbeda:

1. **Identitas Hukum** — badan usaha resmi berdiri (PT, CV, PT Perorangan).
2. **Identitas Pajak** — NPWP badan, pengukuhan PKP, fasilitas yang tepat.
3. **Izin Berusaha** — NIB via OSS-RBA dan pemetaan KBLI yang benar.
4. **Izin Sektor** — sertifikat standar & lisensi sektor (kesehatan, makanan, logistik).
5. **Kekayaan Intelektual** — merek, hak cipta, desain industri di DJKI.
6. **Sertifikasi Pasar** — halal, BPOM, SNI, ISO.
7. **Langit Ketujuh: Ekosistem Digital** — website, otomasi, sistem manajemen yang membuat legalitas Anda menghasilkan uang.

## Kesalahan paling mahal

Tiga kesalahan yang paling sering kami temui (dan paling mahal diperbaiki):

- **KBLI asal lengkap** — KBLI yang salah memblokir izin sektor di kemudian hari.
- **Merek didaftarkan belakangan** — begitu brand naik, orang lain mengajukannya lebih dulu.
- **Pajak dipikirkan terakhir** — restrukturisasi di tengah jalan selalu lebih mahal daripada menyusunnya di awal.

## Cara efisien melewatinya

Urutan yang benar menghemat waktu dan biaya: bentuk badan usaha → NPWP → NIB + KBLI → izin sektor → merek → sertifikasi → ekosistem digital. Setiap lapisan kami kerjakan paralel bila memungkinkan — klien kami rata-rata selesai 3–7 hari kerja untuk lapisan dasar.

Ingin peta yang disesuaikan dengan bisnis Anda? Gunakan **kalkulator legalitas** di halaman ini — gratis, tanpa komitmen.`,
  },
  {
    slug: "ai-untuk-ukm-indonesia-5-otomasi",
    title: "AI untuk UKM Indonesia: 5 Otomasi yang Bisa Dimulai Hari Ini",
    excerpt:
      "Teknologi AI bukan lagi mainan korporasi besar. Lima otomasi ini bisa dipasang di bisnis kecil dalam hitungan hari, bukan bulan.",
    category: "Digital",
    tags: ["AI", "Otomasi", "UKM", "Chatbot"],
    readMinutes: 6,
    content: `## AI kini terjangkau untuk bisnis kecil

Dulu hanya korporasi yang mampu *customer service* 24 jam. Sekarang chatbot AI + WhatsApp menyelesaikan 70% pertanyaan berulang — tanpa menambah satu pun karyawan.

## Lima otomasi dengan ROI tercepat

1. **AI Customer Service di WhatsApp** — jawab pertanyaan harga, status, dan FAQ otomatis. Biaya mulai Rp 2,5 jt, pasang dalam 5 hari.
2. **Otomasi Follow-up Penawaran** — 80% penawaran mati bukan karena ditolak, tapi karena lupa di-follow-up. Otomasi ini menyelamatkannya.
3. **Generator Konten Marketing** — kalender konten 30 hari dihasilkan dari satu brief produk.
4. **Dashboard Laporan Otomatis** — penjualan, kas, dan stok tampil setiap pagi tanpa rekap manual.
5. **Penyaring Lead Cerdas** — AI menilai lead mana yang layak dikejar lebih dulu berdasarkan perilaku dan profil.

## Prinsip yang kami pegang

Otomasi harus menghemat waktu yang sudah terukur. Karena itu setiap proyek AI di digiman.id diawali pemetaan SOP (lihat: Gunara OS) — proses yang kacau tidak bisa diautomasi, hanya bisa dipercepat kekacauannya.

Mulai dari satu otomasi, ukur hasilnya selama 30 hari, lalu scale. Itu cara yang benar.`,
  },
  {
    slug: "studi-kasus-dari-cv-ke-pt-28-hari",
    title: "Studi Kasus: Dari CV Keluarga ke PT Bersertifikat dalam 28 Hari",
    excerpt:
      "Perjalanan nyata CV Sinar Teknik: restrukturisasi CV ke PT, merek terdaftar, dan sertifikasi halal — selesai sebelum kontrak besar datang.",
    category: "Studi Kasus",
    tags: ["Studi Kasus", "CV", "PT", "Sertifikasi"],
    readMinutes: 5,
    content: `## Titik awal: kontrak besar mengetuk pintu

CV Sinar Teknik — usaha keluarga komponen manufaktur di Bandung — mendapat undangan tender dari produsen alat kesehatan. Syaratnya tegas: berbadan hukum PT, merek terdaftar, dan sertifikasi produk. Batas waktu: 30 hari.

## Peta jalan 28 hari

- **Hari 1–3**: analisis KBLI & struktur modal; penyusunan akta PT.
- **Hari 4–7**: SK Kemenkumham, NPWP badan, NIB via OSS.
- **Hari 8–14**: pendaftaran merek di DJKI (pengajuan cepat sejak hari ke-8 — waktu berlaku bagi yang duluan mengajukan).
- **Hari 15–24**: persiapan dokumen sertifikasi halal + audit kecil produksi.
- **Hari 25–28**: finalisasi company profile, dokumen tender, dan file legal lengkap.

## Hasilnya

Kontrak tender diperoleh. Tapi yang lebih penting: struktur yang benar menghemat pajak mereka ~18% per tahun dibanding skenario CV yang semula direncanakan.

**Pelajaran**: legalitas yang disusun *sebelum* dibutuhkan adalah investasi; legalitas yang dikejar *saat* dibutuhkan adalah tebusan.`,
  },
  {
    slug: "memahami-tier-p0-p1-p2-p3-gunara-os",
    title: "P0, P1, P2, P3: Dokumen Mana yang Harus Didahulukan?",
    excerpt:
      "Tidak semua dokumen lahir sama. Empat tier prioritas Gunara OS menjawab pertanyaan klasik: mulai dari mana saat waktunya terbatas?",
    category: "Gunara OS",
    tags: ["Gunara OS", "Prioritas", "Dokumentasi"],
    readMinutes: 6,
    content: `## Analogi rumah

Membangun dokumen perusahaan seperti membangun rumah:

- **P0 Navigasi = fondasi & kerangka.** 40 dokumen: visi, misi, charter tata kelola, struktur organisasi, SOP inti, model keuangan dasar. Jika fondasi salah, lantai mahal tidak menyelamatkan.
- **P1 Pertumbuhan = ruang yang menghasilkan.** 40 dokumen: strategi go-to-market, playbook penjualan, sistem kinerja, kode budaya. Di sinilah mesin pendapatan dirakit.
- **P2 Perluasan = lantai tambahan.** 48 dokumen: kemitraan global, ekspansi, teknologi frontier, ketahanan krisis. Diambil saat fondasi kuat.
- **P3 Warisan = arsitektur seabad.** 37 dokumen: covenant, legacy plan, benteng hukum final. Yang membuat institusi bertahan jauh melampaui pendirinya.

## Aturan prioritas praktis

1. Perusahaan baru (0–2 tahun): 90% energi ke P0.
2. Perusahaan tumbuh (2–5 tahun): P0 dirapikan sambil mengeksekusi P1.
3. Perusahaan skala (5+ tahun): P2 jadi fokus, P0 diaudit tiap kuartal.
4. Siapa pun yang memikirkan suksesi: P3 tidak boleh menunggu "sudah sukses".

Di setiap paket Gunara OS, distribusi tier ini sudah kami susun agar tidak ada lompatan yang berbahaya.`,
  },
  {
    slug: "kalkulator-legalitas-biaya-pendirian-2025",
    title: "Kalkulator Legalitas: Cara Menghitung Biaya Pendirian Badan Usaha 2025",
    excerpt:
      "Berapa sebenarnya biaya mendirikan PT, CV, atau PT Perorangan? Ini rinciannya per komponen — plus cara memakai kalkulator di situs ini dengan benar.",
    category: "Panduan",
    tags: ["Biaya", "Kalkulator", "Pendirian", "2025"],
    readMinutes: 5,
    content: `## Komponen biaya yang sering disembunyikan

Banyak pemasok jasa mengiklankan "pendirian PT 1 juta" lalu menagih ekstra di tengah jalan. Biaya jujur terdiri dari:

1. **Honor notaris & akta** — bervariasi sesuai modal dasar.
2. **Resmi pemerintah** — PNBP Kemenkumham untuk pengesahan.
3. **NPWP & administrasi pajak awal** — termasuk pengukuhan PKP bila diperlukan.
4. **NIB & pemetaan KBLI** — di OSS-RBA.
5. **Domisili usaha** — SKDU atau virtual office bila tidak punya alamat kantor.
6. **Jasa pendampingan** — konsultasi, penyusunan dokumen, komunikasi instansi.

## Cara memakai kalkulator kami

Di bagian **Paket & Kalkulator** halaman ini:

1. Pilih bentuk badan usaha — PT, CV, PT Perorangan, Yayasan, PMA, dll.
2. Tambahkan kebutuhan opsional (merek, halal, website, virtual office).
3. Estimasi biaya (rentang jujur, bukan angka umpan) langsung muncul — beserta estimasi hari kerja.
4. Klik "Kirim Estimasi via WhatsApp" — pesan sudah terisi otomatis, tim kami membalas dalam 1×24 jam.

## Prinsip transparansi kami

Angka yang kami tampilkan adalah rentang realistis: komponen pemerintah fixed, komponen notaris bervariasi. Jika ada kebutuhan di luar scope, kami konfirmasi *sebelum* melanjutkan — bukan sesudah. Itu alasan 2.500+ klien tetap kembali.`,
  },
];

const SETTINGS: [string, string][] = [
  ["gunaraOsHeadline", "Sistem Operasi Super Organisasi"],
  ["gunaraOsSub", "20 domain, 165 dokumen, 4 tier prioritas — arsitektur lengkap yang mengubah perusahaan menjadi institusi."],
  ["adminPassword", "gunara165"],
];

async function main() {
  console.log("Seeding GUNARA OS...");

  // ── Domain + Dokumen ──
  for (const d of parsed.domains) {
    await prisma.pgaDomain.upsert({
      where: { number: d.number },
      update: { name: d.name, tagline: d.tagline, description: d.description },
      create: { number: d.number, name: d.name, tagline: d.tagline, description: d.description },
    });
  }
  for (const doc of parsed.docs) {
    await prisma.pgaDocument.upsert({
      where: { code: doc.code },
      update: {
        number: doc.number,
        title: doc.title,
        tier: doc.tier,
        owner: doc.owner,
        points: JSON.stringify(doc.points),
        domainNumber: doc.domain,
      },
      create: {
        code: doc.code,
        number: doc.number,
        title: doc.title,
        tier: doc.tier,
        owner: doc.owner,
        points: JSON.stringify(doc.points),
        domainNumber: doc.domain,
      },
    });
  }
  console.log(`PgaDomain: ${parsed.domains.length}, PgaDocument: ${parsed.docs.length}`);

  // ── Paket ──
  const seq = new Map<string, number>();
  for (const doc of parsed.docs) {
    const k = doc.tier;
    seq.set(k, (seq.get(k) ?? 0) + 1);
  }
  for (const p of PKGS) {
    const seqLocal = new Map<string, number>();
    const codes: string[] = [];
    for (const doc of parsed.docs) {
      const k = doc.tier;
      const n = seqLocal.get(k) ?? 0;
      seqLocal.set(k, n + 1);
      if (p.select(doc, seqLocal)) codes.push(doc.code);
    }
    // jumlahkan seq global per tier untuk select yang memakai hitungan global
    const codesFinal: string[] = [];
    const seqRun = new Map<string, number>();
    for (const doc of parsed.docs) {
      const k = doc.tier;
      const n = (seqRun.get(k) ?? 0) + 1;
      seqRun.set(k, n);
      if (p.select(doc, seqRun)) codesFinal.push(doc.code);
    }
    if (codesFinal.length !== p.docCount) {
      console.warn(`PERINGATAN: ${p.code} target ${p.docCount} tapi terpilih ${codesFinal.length}`);
    }
    await prisma.gunaraPackage.upsert({
      where: { code: p.code },
      update: {
        name: p.name,
        tagline: p.tagline,
        description: p.description,
        docCount: codesFinal.length,
        price: codesFinal.length * 1_000_000,
        durationWeeks: p.durationWeeks,
        features: JSON.stringify(p.features),
        documentCodes: JSON.stringify(codesFinal),
        highlight: p.highlight,
        active: true,
        order: p.order,
      },
      create: {
        code: p.code,
        name: p.name,
        tagline: p.tagline,
        description: p.description,
        docCount: codesFinal.length,
        price: codesFinal.length * 1_000_000,
        durationWeeks: p.durationWeeks,
        features: JSON.stringify(p.features),
        documentCodes: JSON.stringify(codesFinal),
        highlight: p.highlight,
        active: true,
        order: p.order,
      },
    });
    console.log(`${p.code} → ${codesFinal.length} dokumen, Rp ${(codesFinal.length).toLocaleString("id-ID")} jt`);
  }

  // ── Blog ──
  for (const post of BLOG) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: JSON.stringify(post.tags),
        readMinutes: post.readMinutes,
        published: true,
        publishedAt: new Date(),
      },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: JSON.stringify(post.tags),
        readMinutes: post.readMinutes,
        published: true,
        publishedAt: new Date(),
      },
    });
  }
  console.log(`BlogPost: ${BLOG.length}`);

  // ── Settings ──
  for (const [key, value] of SETTINGS) {
    await prisma.siteSetting.upsert({ where: { key }, update: {}, create: { key, value } });
  }
  console.log(`SiteSetting: ${SETTINGS.length}`);

  console.log("Seed GUNARA OS selesai.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
