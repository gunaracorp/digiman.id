/**
 * Validator Task 23-c — memeriksa src/lib/services/ekspansi-165.ts
 * terhadap STANDAR PENULISAN di scripts/expansion-spec-165.md:
 *   per layanan (7): intro=3, benefits=5, process=4, requirements 4-6,
 *   faqs=3 (jawaban 2-4 kalimat), related=4 dan SEMUA slug related ada
 *   di daftar slug SAH spek (144 lama + 21 baru).
 *   enrichment (7 slug): whoFor=4, deliverables=5, costs 4-5 (note
 *   memuat harga "mulai Rp"), legalBasis 3-4.
 * Jalankan: bun run scripts/validate-23c.ts
 */
import {
  ekspansi165Content,
  ekspansi165Enrichment,
} from "../src/lib/services/ekspansi-165";

const EXPECTED_SERVICES = 7;

/* Daftar slug SAH sesuai scripts/expansion-spec-165.md (144 lama + 21 baru) */
const VALID_SLUGS: string[] = [
  // 144 lama
  "pendirian-pt", "pt-perorangan", "pendirian-cv", "pt-pma", "firma-ud",
  "pendirian-koperasi", "pendirian-yayasan", "perkumpulan-asosiasi", "nib-oss",
  "izin-sektor-ss", "virtual-office", "legalisasi-apostille", "izin-lingkungan",
  "pbg-slf", "sbu-konstruksi", "api-bea-cukai", "izin-distribusi",
  "pendaftaran-merek", "hak-cipta-paten", "merek-internasional", "franchise",
  "sertifikasi-halal", "bpom", "sni", "iso", "higiene-sanitasi", "npwp-pkp",
  "pelaporan-pajak", "bpjs", "kitas-rptka", "kitas-investor", "smk3", "bnsp",
  "perubahan-akta", "pembubaran", "legal-drafting", "lkpm", "website-ecommerce",
  "aplikasi-sistem", "otomasi-ai", "wa-business", "google-bisnisku",
  "marketplace", "branding-katalog", "laporan-keberlanjutan", "jejak-karbon-nzkc",
  "kredit-karbon", "esg-rantai-pasok", "gedung-hijau", "sertifikasi-b-corp",
  "epr-kemasan", "pembiayaan-hijau", "eudr-komoditas", "csr-cdas",
  "pitch-deck-investor", "valuasi-bisnis", "data-room-virtual", "pendanaan-scf",
  "kredit-kur", "hibah-riset", "esop-program", "convertible-note-safe",
  "jamintel-ip-jaminan", "restrukturisasi-utang", "pendirian-holding",
  "perjanjian-pendiri-vesting", "joint-venture", "akuisisi-merger-umkm",
  "spin-off-divestasi", "piagam-keluarga-bisnis", "suksesi-penerus",
  "perjanjian-pemegang-saham", "tata-kelola-korporat", "dewan-komisaris-mandiri",
  "kantor-perwakilan-asing", "entitas-luar-negeri", "sertifikat-asal",
  "inkoterm-kontrak-ekspor", "kawasan-berikat", "transfer-pricing",
  "ekspor-marketplace-global", "antidumping-bmtp", "lartas-ekspor-komoditas",
  "distributor-brand-asing", "kepatuhan-uu-pdp", "dpo-layanan", "pse-komdigi",
  "audit-siber", "respons-insiden-data", "kepatuhan-iklan-digital",
  "tata-kelola-ai", "kebijakan-privasi-situs", "kepatuhan-fintech-ojk",
  "kepatuhan-dagang-daring", "sertifikat-film-lsf", "izin-event-konser",
  "izin-reklame-luar-ruang", "lisensi-musik-lmk", "isbn-penerbitan",
  "rating-game-igrs", "pendaftaran-pers-online", "lisensi-merchandise",
  "kontrak-talent-kreator", "badan-usaha-produksi-film",
  "cpotb-obat-tradisional", "akl-alat-kesehatan", "label-gizi",
  "izin-apotek-pbf", "haccp-gmp-pangan", "pangan-organik", "izin-klinik-praktik",
  "p2k3-panitia-k3", "laboratorium-uji-produk", "audit-klaim-iklan-kesehatan",
  "due-diligence-properti", "pengalihan-hak-tanah", "hgu-hgb-pertanahan",
  "izin-usaha-perumahan", "konsesi-ppjt-infrastruktur",
  "sertifikasi-menara-telekomunikasi", "kawasan-industri",
  "sengketa-tanah-penyelesaian", "izin-tambang-iup", "izin-energi-terbarukan",
  "struktur-organisasi-grading", "audit-payroll", "kontrak-kerja-pkwt",
  "program-magang", "alih-daya-outsourcing", "phk-terkelola", "lks-bipartit",
  "iso-37001-antisuap", "sistem-penilaian-kinerja", "kebijakan-remote-hybrid",
  "asuransi-bisnis", "forensik-digital", "manajemen-krisis-pr",
  "bisnis-kontinuitas-bcp", "pencegahan-fraud-sop", "manajemen-risiko-erm",
  "sengketa-bisnis-mediasi", "penagihan-piutang-legal",
  "perlindungan-domain-brand", "manajemen-reputasi-online",
  // 21 baru (Task 23)
  "dna-bisnis-360", "launchpad-30-hari", "shield-kepatuhan-tahunan",
  "deal-room-negosiasi", "exit-ready-valuation", "tender-ready-program",
  "pendiri-pribadi-shield", "ispo-rspo-sawit", "izin-perikanan-sikpi",
  "pvt-varietas-tanaman", "izin-peternakan-nak", "plasma-perkebunan-kemitraan",
  "izin-air-tanah-sipa", "riph-impor-hortikultura", "kitap-pasangan-investor",
  "skb-relief-pajak-treaty", "keberatan-banding-pajak",
  "indikasi-geografis-sttig", "bujp-jasa-keamanan", "izin-limbah-b3",
  "skttk-personel-konstruksi",
];

const VALID_SET = new Set(VALID_SLUGS);

let errors = 0;
const fail = (msg: string) => {
  errors += 1;
  console.log("FAIL: " + msg);
};

/* Penghitung kalimat sederhana: pisah pada titik/tanya/seru diikuti huruf kapital/angka.
   Singkatan baku sitasi hukum (No., jo., dll.) tidak dihitung sebagai akhir kalimat. */
function sentenceCount(text: string): number {
  const cleaned = text.replace(/\b(No|no|Jo|jo|dll|dsb)\./g, "$1");
  const marked = cleaned.replace(/([.!?])\s+(?=[A-Z0-9])/g, "$1\u0001");
  return marked.split("\u0001").filter((s) => s.trim().length > 0).length;
}

/* Cek simbol terlarang: emoji, markdown, ampersand */
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2190}-\u{21FF}]/u;
const MARKDOWN_RE = /[*#`_&\[\]{}<>|~]/;
const collectedStrings: string[] = [];
const collect = (s: string) => collectedStrings.push(s);

/* ── Konten ── */
if (ekspansi165Content.length !== EXPECTED_SERVICES) {
  fail(`jumlah layanan = ${ekspansi165Content.length}, harus ${EXPECTED_SERVICES}`);
}

for (const s of ekspansi165Content) {
  const tag = `[${s.slug}]`;

  collect(s.tagline); collect(s.heroSub); collect(s.timeline);
  s.intro.forEach(collect);
  s.benefits.forEach((b) => { collect(b.title); collect(b.desc); });
  s.process.forEach((p) => { collect(p.title); collect(p.desc); });
  s.requirements.forEach(collect);
  s.faqs.forEach((f) => { collect(f.q); collect(f.a); });

  if (!s.tagline) fail(`${tag} tagline kosong`);
  if (!s.heroSub || !s.timeline) fail(`${tag} heroSub/timeline kosong`);

  if (s.intro.length !== 3) fail(`${tag} intro = ${s.intro.length} paragraf, harus 3`);
  s.intro.forEach((p, i) => {
    const sc = sentenceCount(p);
    if (sc < 3 || sc > 5) fail(`${tag} intro paragraf ${i + 1} = ${sc} kalimat, harus 3-5`);
  });

  if (s.benefits.length !== 5) fail(`${tag} benefits = ${s.benefits.length}, harus 5`);
  if (s.process.length !== 4) fail(`${tag} process = ${s.process.length}, harus 4`);
  if (s.requirements.length < 4 || s.requirements.length > 6) {
    fail(`${tag} requirements = ${s.requirements.length}, harus 4-6`);
  }

  if (s.faqs.length !== 3) fail(`${tag} faqs = ${s.faqs.length}, harus 3`);
  s.faqs.forEach((f, i) => {
    const sc = sentenceCount(f.a);
    if (sc < 2 || sc > 4) fail(`${tag} faq ${i + 1} jawaban = ${sc} kalimat, harus 2-4`);
  });

  if (s.related.length !== 4) fail(`${tag} related = ${s.related.length}, harus 4`);
  s.related.forEach((r) => {
    if (!VALID_SET.has(r)) fail(`${tag} related slug tidak sah: ${r}`);
  });
  if (s.related.includes(s.slug)) fail(`${tag} related memuat slug dirinya sendiri`);

  for (const [i, st] of [s.tagline, s.heroSub, s.timeline, ...s.intro].entries()) {
    if (EMOJI_RE.test(st) || MARKDOWN_RE.test(st)) fail(`${tag} simbol terlarang di field konten ${i}`);
  }
}

/* ── Enrichment ── */
const contentSlugs = ekspansi165Content.map((s) => s.slug);
const enrichSlugs = Object.keys(ekspansi165Enrichment);

if (enrichSlugs.length !== EXPECTED_SERVICES) {
  fail(`jumlah slug enrichment = ${enrichSlugs.length}, harus ${EXPECTED_SERVICES}`);
}
for (const slug of contentSlugs) {
  const e = ekspansi165Enrichment[slug];
  const tag = `[${slug}]`;
  if (!e) { fail(`${tag} tidak ada enrichment`); continue; }

  e.whoFor.forEach(collect);
  e.deliverables.forEach(collect);
  e.costs.forEach((c) => { collect(c.item); if (c.note) collect(c.note); });
  e.legalBasis.forEach(collect);

  if (e.whoFor.length !== 4) fail(`${tag} whoFor = ${e.whoFor.length}, harus 4`);
  if (e.deliverables.length !== 5) fail(`${tag} deliverables = ${e.deliverables.length}, harus 5`);
  if (e.costs.length < 4 || e.costs.length > 5) {
    fail(`${tag} costs = ${e.costs.length}, harus 4-5`);
  }
  const hasPrice = e.costs.some((c) => (c.note ?? "").includes("mulai Rp"));
  if (!hasPrice) fail(`${tag} tidak ada cost note dengan harga "mulai Rp" dari spek`);
  if (e.legalBasis.length < 3 || e.legalBasis.length > 4) {
    fail(`${tag} legalBasis = ${e.legalBasis.length}, harus 3-4`);
  }
}

/* Slug enrichment harus sama persis dengan slug konten */
for (const slug of enrichSlugs) {
  if (!contentSlugs.includes(slug)) fail(`enrichment slug tidak ada di konten: ${slug}`);
}

/* ── Ringkasan ── */
const totalWords = collectedStrings.join(" ").split(/\s+/).filter(Boolean).length;
const fileWords = collectedStrings.length;

if (errors === 0) {
  console.log(`ALL-CHECKS-PASSED: ${ekspansi165Content.length} layanan + ${enrichSlugs.length} enrichment`);
  console.log(`Slug: ${contentSlugs.join(", ")}`);
  console.log(`Related total: ${ekspansi165Content.reduce((n, s) => n + s.related.length, 0)} slug, semua sah di daftar spek`);
  console.log(`Kata konten string: ${totalWords} (field string ${fileWords})`);
} else {
  console.log(`VALIDATION FAILED: ${errors} temuan`);
  process.exit(1);
}
