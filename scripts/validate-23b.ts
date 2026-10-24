/**
 * Validasi Task 23-b — agri-maritim.ts (7 layanan kategori agri-maritim).
 * Cek struktur sesuai standar spek expansion-spec-165.md:
 *   intro=3 (tiap paragraf 3-5 kalimat), benefits=5, process=4,
 *   requirements 4-6, faqs=3 (jawaban 2-4 kalimat), related=4 dan semua
 *   slug related ada di DAFTAR SLUG SAH spek, enrichment whoFor=4,
 *   deliverables=5, costs 4-5, legalBasis 3-4.
 * Jalankan: bun scripts/validate-23b.ts
 */
import { agriMaritimContent, agriMaritimEnrichment } from "../src/lib/services/agri-maritim";

/* DAFTAR SLUG SAH untuk `related` — persis dari expansion-spec-165.md (144 lama + 21 baru) */
const VALID_SLUGS: string[] = [
  // 144 lama
  "pendirian-pt", "pt-perorangan", "pendirian-cv", "pt-pma", "firma-ud", "pendirian-koperasi",
  "pendirian-yayasan", "perkumpulan-asosiasi", "nib-oss", "izin-sektor-ss", "virtual-office",
  "legalisasi-apostille", "izin-lingkungan", "pbg-slf", "sbu-konstruksi", "api-bea-cukai",
  "izin-distribusi", "pendaftaran-merek", "hak-cipta-paten", "merek-internasional", "franchise",
  "sertifikasi-halal", "bpom", "sni", "iso", "higiene-sanitasi", "npwp-pkp", "pelaporan-pajak",
  "bpjs", "kitas-rptka", "kitas-investor", "smk3", "bnsp", "perubahan-akta", "pembubaran",
  "legal-drafting", "lkpm", "website-ecommerce", "aplikasi-sistem", "otomasi-ai", "wa-business",
  "google-bisnisku", "marketplace", "branding-katalog", "laporan-keberlanjutan", "jejak-karbon-nzkc",
  "kredit-karbon", "esg-rantai-pasok", "gedung-hijau", "sertifikasi-b-corp", "epr-kemasan",
  "pembiayaan-hijau", "eudr-komoditas", "csr-cdas", "pitch-deck-investor", "valuasi-bisnis",
  "data-room-virtual", "pendanaan-scf", "kredit-kur", "hibah-riset", "esop-program",
  "convertible-note-safe", "jamintel-ip-jaminan", "restrukturisasi-utang", "pendirian-holding",
  "perjanjian-pendiri-vesting", "joint-venture", "akuisisi-merger-umkm", "spin-off-divestasi",
  "piagam-keluarga-bisnis", "suksesi-penerus", "perjanjian-pemegang-saham", "tata-kelola-korporat",
  "dewan-komisaris-mandiri", "kantor-perwakilan-asing", "entitas-luar-negeri", "sertifikat-asal",
  "inkoterm-kontrak-ekspor", "kawasan-berikat", "transfer-pricing", "ekspor-marketplace-global",
  "antidumping-bmtp", "lartas-ekspor-komoditas", "distributor-brand-asing", "kepatuhan-uu-pdp",
  "dpo-layanan", "pse-komdigi", "audit-siber", "respons-insiden-data", "kepatuhan-iklan-digital",
  "tata-kelola-ai", "kebijakan-privasi-situs", "kepatuhan-fintech-ojk", "kepatuhan-dagang-daring",
  "sertifikat-film-lsf", "izin-event-konser", "izin-reklame-luar-ruang", "lisensi-musik-lmk",
  "isbn-penerbitan", "rating-game-igrs", "pendaftaran-pers-online", "lisensi-merchandise",
  "kontrak-talent-kreator", "badan-usaha-produksi-film", "cpotb-obat-tradisional", "akl-alat-kesehatan",
  "label-gizi", "izin-apotek-pbf", "haccp-gmp-pangan", "pangan-organik", "izin-klinik-praktik",
  "p2k3-panitia-k3", "laboratorium-uji-produk", "audit-klaim-iklan-kesehatan", "due-diligence-properti",
  "pengalihan-hak-tanah", "hgu-hgb-pertanahan", "izin-usaha-perumahan", "konsesi-ppjt-infrastruktur",
  "sertifikasi-menara-telekomunikasi", "kawasan-industri", "sengketa-tanah-penyelesaian",
  "izin-tambang-iup", "izin-energi-terbarukan", "struktur-organisasi-grading", "audit-payroll",
  "kontrak-kerja-pkwt", "program-magang", "alih-daya-outsourcing", "phk-terkelola", "lks-bipartit",
  "iso-37001-antisuap", "sistem-penilaian-kinerja", "kebijakan-remote-hybrid", "asuransi-bisnis",
  "forensik-digital", "manajemen-krisis-pr", "bisnis-kontinuitas-bcp", "pencegahan-fraud-sop",
  "manajemen-risiko-erm", "sengketa-bisnis-mediasi", "penagihan-piutang-legal",
  "perlindungan-domain-brand", "manajemen-reputasi-online",
  // 21 baru
  "dna-bisnis-360", "launchpad-30-hari", "shield-kepatuhan-tahunan", "deal-room-negosiasi",
  "exit-ready-valuation", "tender-ready-program", "pendiri-pribadi-shield", "ispo-rspo-sawit",
  "izin-perikanan-sikpi", "pvt-varietas-tanaman", "izin-peternakan-nak", "plasma-perkebunan-kemitraan",
  "izin-air-tanah-sipa", "riph-impor-hortikultura", "kitap-pasangan-investor", "skb-relief-pajak-treaty",
  "keberatan-banding-pajak", "indikasi-geografis-sttig", "bujp-jasa-keamanan", "izin-limbah-b3",
  "skttk-personel-konstruksi",
];

const VALID = new Set(VALID_SLUGS);

/* Hitung kalimat: pecah pada . ? ! diikuti spasi/akhir; abaikan singkatan umum (No., jo., dll.) */
function countSentences(text: string): number {
  const cleaned = text.replace(/\b(No|no|jo|dll|dsb|ps|Pj|vp|Jl|KKP|s\.d)\./g, "$1");
  const parts = cleaned.split(/[.!?]+(?:\s|$)/).map((s) => s.trim()).filter(Boolean);
  return parts.length;
}

/* Hitung kata dari seluruh nilai string (konten editorial murni, tanpa token kode) */
function words(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function collectStrings(v: unknown): string[] {
  if (typeof v === "string") return [v];
  if (Array.isArray(v)) return v.flatMap(collectStrings);
  if (v && typeof v === "object") return Object.values(v).flatMap(collectStrings);
  return [];
}

const errors: string[] = [];
const warnings: string[] = [];

const content = agriMaritimContent;
const enrichment = agriMaritimEnrichment;

/* 1. Jumlah layanan */
if (content.length !== 7) errors.push(`Jumlah layanan konten = ${content.length}, harus 7`);
if (Object.keys(enrichment).length !== 7) errors.push(`Jumlah entri enrichment = ${Object.keys(enrichment).length}, harus 7`);

let totalWords = 0;

for (const s of content) {
  const tag = `[${s.slug}]`;

  /* Slug harus ada di enrichment */
  if (!enrichment[s.slug]) errors.push(`${tag} tidak punya entri enrichment`);
  if (!VALID.has(s.slug)) errors.push(`${tag} slug layanan tidak ada di daftar slug SAH spek`);

  /* Tagline & heroSub */
  if (!s.tagline || countSentences(s.tagline) !== 1) errors.push(`${tag} tagline harus 1 kalimat`);
  if (!s.heroSub || !s.heroSub.trim()) errors.push(`${tag} heroSub kosong`);

  /* Intro: tepat 3 paragraf, tiap paragraf 3-5 kalimat */
  if (s.intro.length !== 3) errors.push(`${tag} intro = ${s.intro.length} paragraf, harus 3`);
  s.intro.forEach((p, i) => {
    const n = countSentences(p);
    if (n < 3 || n > 5) errors.push(`${tag} intro paragraf ${i + 1} = ${n} kalimat, harus 3-5`);
  });
  if (!/Perpres|UU |PP |Permentan|PMK|RSPO|EUDR|Peraturan Menteri/.test(s.intro[0] ?? "")) {
    warnings.push(`${tag} intro P1 sebaiknya menyebut regulasi konkret`);
  }

  /* Benefits: tepat 5 */
  if (s.benefits.length !== 5) errors.push(`${tag} benefits = ${s.benefits.length}, harus 5`);
  s.benefits.forEach((b, i) => {
    if (!b.title?.trim() || !b.desc?.trim()) errors.push(`${tag} benefits[${i}] title/desc kosong`);
  });

  /* Process: tepat 4 */
  if (s.process.length !== 4) errors.push(`${tag} process = ${s.process.length}, harus 4`);

  /* Requirements: 4-6 */
  if (s.requirements.length < 4 || s.requirements.length > 6) {
    errors.push(`${tag} requirements = ${s.requirements.length}, harus 4-6`);
  }

  /* FAQs: tepat 3, jawaban 2-4 kalimat */
  if (s.faqs.length !== 3) errors.push(`${tag} faqs = ${s.faqs.length}, harus 3`);
  s.faqs.forEach((f, i) => {
    const n = countSentences(f.a);
    if (n < 2 || n > 4) errors.push(`${tag} faq[${i}] jawaban = ${n} kalimat, harus 2-4`);
  });
  const mentionsCost = s.faqs.some((f) => /Rp \d/.test(f.a));
  const mentionsTime = s.faqs.some((f) => /minggu|bulan|lama|risiko/i.test(f.q + f.a));
  if (!mentionsCost) errors.push(`${tag} tidak ada FAQ yang menjawab biaya (Rp)`);
  if (!mentionsTime) errors.push(`${tag} tidak ada FAQ yang menjawab lama proses/risiko`);
  if (!s.faqs.some((f) => f.a.includes("Rp"))) {
    errors.push(`${tag} FAQ biaya tidak menyebut harga dari spek`);
  }

  /* Related: tepat 4, semua valid */
  if (s.related.length !== 4) errors.push(`${tag} related = ${s.related.length}, harus 4`);
  s.related.forEach((r) => {
    if (!VALID.has(r)) errors.push(`${tag} related "${r}" TIDAK ada di daftar slug SAH spek`);
  });

  /* Enrichment */
  const e = enrichment[s.slug];
  if (e) {
    if (e.whoFor?.length !== 4) errors.push(`${tag} whoFor = ${e.whoFor?.length}, harus 4`);
    if (e.deliverables?.length !== 5) errors.push(`${tag} deliverables = ${e.deliverables?.length}, harus 5`);
    if (!e.costs || e.costs.length < 4 || e.costs.length > 5) {
      errors.push(`${tag} costs = ${e.costs?.length}, harus 4-5`);
    } else if (!e.costs.some((c) => /mulai Rp \d/.test(c.note ?? ""))) {
      errors.push(`${tag} costs tidak ada note yang menyebut "mulai Rp X"`);
    }
    if (!e.legalBasis || e.legalBasis.length < 3 || e.legalBasis.length > 4) {
      errors.push(`${tag} legalBasis = ${e.legalBasis?.length}, harus 3-4`);
    }
  }

  totalWords += collectStrings(s).reduce((a, t) => a + words(t), 0);
  totalWords += collectStrings(enrichment[s.slug] ?? {}).reduce((a, t) => a + words(t), 0);
}

/* Konsistensi: semua slug enrichment dipakai konten, dan tidak ada slug asing */
const contentSlugs = new Set(content.map((s) => s.slug));
for (const k of Object.keys(enrichment)) {
  if (!contentSlugs.has(k)) errors.push(`enrichment "${k}" tidak punya konten di agriMaritimContent`);
}

/* Simbol terlarang: emoji, markdown, karakter khusus */
const forbidden = /[*#`~\[\]{}<>|\\^$_\u00A9\u00AE\u2122]|[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u;
for (const s of content) {
  for (const t of collectStrings(s)) {
    if (forbidden.test(t)) errors.push(`[${s.slug}] string mengandung simbol terlarang: "${(t.match(forbidden) ?? ["?"])[0]}"`);
  }
  const e = enrichment[s.slug];
  if (e) for (const t of collectStrings(e)) {
    if (forbidden.test(t)) errors.push(`[${s.slug}] enrichment mengandung simbol terlarang`);
  }
}

/* Ringkasan */
const relatedTotal = content.reduce((a, s) => a + s.related.length, 0);
const allRelatedValid = content.every((s) => s.related.every((r) => VALID.has(r)));
console.log("=== VALIDASI TASK 23-b — agri-maritim.ts ===");
console.log(`Layanan konten          : ${content.length}`);
console.log(`Entri enrichment        : ${Object.keys(enrichment).length}`);
console.log(`Total slug related      : ${relatedTotal} (7 x 4)`);
console.log(`Semua related valid     : ${allRelatedValid ? "YA" : "TIDAK"}`);
console.log(`Kata konten+enrichment  : ${totalWords}`);
console.log("");
for (const w of warnings) console.log(`WARN : ${w}`);
for (const e of errors) console.log(`ERROR: ${e}`);
if (errors.length === 0) {
  console.log("");
  console.log("ALL-STRUCTURE-OK — semua batasan jumlah terpenuhi, semua related valid.");
} else {
  console.log("");
  console.log(`FAILED — ${errors.length} pelanggaran.`);
  process.exit(1);
}
