/**
 * VALIDATOR TASK 23-a — konten 7 layanan kategori signature.
 * Memvalidasi struktur signature-istimewa.ts terhadap standar penulisan
 * di scripts/expansion-spec-165.md, termasuk keabsahan seluruh slug `related`
 * terhadap daftar slug SAH (144 lama + 21 baru).
 *
 * Jalankan: cd /home/z/my-project && bun scripts/validate-23a.ts
 */

import { signatureContent, signatureEnrichment } from "../src/lib/services/signature-istimewa";

/* ══════ DAFTAR SLUG SAH (spek expansion-spec-165.md — hardcode) ══════ */
const VALID_SLUGS = new Set<string>([
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
  "kontrak-talent-kreator", "badan-usaha-produksi-film", "cpotb-obat-tradisional",
  "akl-alat-kesehatan", "label-gizi", "izin-apotek-pbf", "haccp-gmp-pangan", "pangan-organik",
  "izin-klinik-praktik", "p2k3-panitia-k3", "laboratorium-uji-produk", "audit-klaim-iklan-kesehatan",
  "due-diligence-properti", "pengalihan-hak-tanah", "hgu-hgb-pertanahan", "izin-usaha-perumahan",
  "konsesi-ppjt-infrastruktur", "sertifikasi-menara-telekomunikasi", "kawasan-industri",
  "sengketa-tanah-penyelesaian", "izin-tambang-iup", "izin-energi-terbarukan",
  "struktur-organisasi-grading", "audit-payroll", "kontrak-kerja-pkwt", "program-magang",
  "alih-daya-outsourcing", "phk-terkelola", "lks-bipartit", "iso-37001-antisuap",
  "sistem-penilaian-kinerja", "kebijakan-remote-hybrid", "asuransi-bisnis", "forensik-digital",
  "manajemen-krisis-pr", "bisnis-kontinuitas-bcp", "pencegahan-fraud-sop", "manajemen-risiko-erm",
  "sengketa-bisnis-mediasi", "penagihan-piutang-legal", "perlindungan-domain-brand",
  "manajemen-reputasi-online",
  // 21 baru
  "dna-bisnis-360", "launchpad-30-hari", "shield-kepatuhan-tahunan", "deal-room-negosiasi",
  "exit-ready-valuation", "tender-ready-program", "pendiri-pribadi-shield", "ispo-rspo-sawit",
  "izin-perikanan-sikpi", "pvt-varietas-tanaman", "izin-peternakan-nak", "plasma-perkebunan-kemitraan",
  "izin-air-tanah-sipa", "riph-impor-hortikultura", "kitap-pasangan-investor",
  "skb-relief-pajak-treaty", "keberatan-banding-pajak", "indikasi-geografis-sttig",
  "bujp-jasa-keamanan", "izin-limbah-b3", "skttk-personel-konstruksi",
]);

/* Harga "mulai Rp X" yang wajib muncul di FAQ biaya tiap slug (dari spek). */
const EXPECTED_PRICE: Record<string, string> = {
  "dna-bisnis-360": "Rp 4,9",
  "launchpad-30-hari": "Rp 9,9",
  "shield-kepatuhan-tahunan": "Rp 2,9",
  "deal-room-negosiasi": "Rp 12,5",
  "exit-ready-valuation": "Rp 15",
  "tender-ready-program": "Rp 6,5",
  "pendiri-pribadi-shield": "Rp 7,5",
};

/* Penghitung kalimat: singkatan "No." dan "jo." dilindungi agar tidak dihitung ganda. */
function sentenceCount(text: string): number {
  const cleaned = text.replace(/No\.\s/g, "No_").replace(/jo\.\s/g, "jo_");
  return cleaned.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0).length;
}

let errors = 0;
let checks = 0;
function fail(msg: string) {
  errors++;
  console.log("GAGAL : " + msg);
}
function expect(cond: boolean, msg: string, okMsg: string) {
  checks++;
  if (cond) {
    console.log("OK    : " + okMsg);
  } else {
    fail(msg);
  }
}

console.log("=== VALIDASI TASK 23-a — 7 layanan signature ===\n");

expect(signatureContent.length === 7, `jumlah layanan ${signatureContent.length} (harus 7)`, "jumlah layanan = 7");
expect(Object.keys(signatureEnrichment).length === 7, `enrichment ${Object.keys(signatureEnrichment).length} entri (harus 7)`, "jumlah entri enrichment = 7");

for (const s of signatureContent) {
  console.log(`\n--- ${s.slug} ---`);
  const tag = `[${s.slug}]`;

  // tagline 1 kalimat puitis, heroSub 1-2 kalimat
  expect(
    sentenceCount(s.tagline) === 1,
    `${tag} tagline ${sentenceCount(s.tagline)} kalimat (harus 1)`,
    "tagline = 1 kalimat",
  );
  const hs = sentenceCount(s.heroSub);
  expect(hs >= 1 && hs <= 2, `${tag} heroSub ${hs} kalimat (harus 1-2)`, `heroSub = ${hs} kalimat (1-2)`);

  // intro TEPAT 3 paragraf, tiap paragraf 3-5 kalimat
  expect(s.intro.length === 3, `${tag} intro ${s.intro.length} paragraf (harus 3)`, "intro = 3 paragraf");
  s.intro.forEach((par, i) => {
    const n = sentenceCount(par);
    expect(n >= 3 && n <= 5, `${tag} intro P${i + 1} ${n} kalimat (harus 3-5)`, `intro P${i + 1} = ${n} kalimat`);
  });

  // benefits TEPAT 5, process TEPAT 4
  expect(s.benefits.length === 5, `${tag} benefits ${s.benefits.length} (harus 5)`, "benefits = 5");
  expect(s.process.length === 4, `${tag} process ${s.process.length} (harus 4)`, "process = 4");

  // requirements 4-6
  expect(
    s.requirements.length >= 4 && s.requirements.length <= 6,
    `${tag} requirements ${s.requirements.length} (harus 4-6)`,
    `requirements = ${s.requirements.length} (4-6)`,
  );

  // faqs TEPAT 3, jawaban 2-4 kalimat, ada biaya (harga spek) & lama proses/risiko
  expect(s.faqs.length === 3, `${tag} faqs ${s.faqs.length} (harus 3)`, "faqs = 3");
  s.faqs.forEach((f, i) => {
    const n = sentenceCount(f.a);
    expect(n >= 2 && n <= 4, `${tag} faq#${i + 1} jawaban ${n} kalimat (harus 2-4)`, `faq#${i + 1} jawaban = ${n} kalimat`);
  });
  const price = EXPECTED_PRICE[s.slug] ?? "";
  expect(
    s.faqs.some((f) => f.a.includes(price)),
    `${tag} tidak ada FAQ yang menyebut harga spek (${price})`,
    `FAQ biaya menyebut harga spek (${price})`,
  );

  // related TEPAT 4 dan semuanya valid
  expect(s.related.length === 4, `${tag} related ${s.related.length} (harus 4)`, "related = 4");
  for (const r of s.related) {
    expect(VALID_SLUGS.has(r), `${tag} related tidak valid: ${r}`, `related valid: ${r}`);
  }

  // enrichment
  const e = signatureEnrichment[s.slug];
  expect(!!e, `${tag} enrichment tidak ditemukan`, "enrichment ditemukan");
  if (e) {
    expect(e.whoFor?.length === 4, `${tag} whoFor ${e.whoFor?.length} (harus 4)`, "whoFor = 4");
    expect(e.deliverables?.length === 5, `${tag} deliverables ${e.deliverables?.length} (harus 5)`, "deliverables = 5");
    const cl = e.costs?.length ?? 0;
    expect(cl >= 4 && cl <= 5, `${tag} costs ${cl} (harus 4-5)`, `costs = ${cl} (4-5)`);
    expect(
      (e.costs ?? []).some((c) => typeof c.note === "string" && /mulai Rp \d/i.test(c.note)),
      `${tag} tidak ada cost note yang menyebut 'mulai Rp X' dari spek`,
      "cost note menyebut 'mulai Rp X' dari spek",
    );
    const lb = e.legalBasis?.length ?? 0;
    expect(lb >= 3 && lb <= 4, `${tag} legalBasis ${lb} (harus 3-4)`, `legalBasis = ${lb} (3-4)`);
  }
}

/* Slug konten vs slug enrichment harus sama. */
const contentSlugs = signatureContent.map((s) => s.slug).sort().join(",");
const enrichSlugs = Object.keys(signatureEnrichment).sort().join(",");
expect(contentSlugs === enrichSlugs, "slug konten vs slug enrichment tidak sama", "slug konten = slug enrichment (7 sama)");

/* Tidak boleh ada emoji / markdown di string. */
const allStrings: string[] = [];
for (const s of signatureContent) {
  allStrings.push(s.tagline, s.heroSub, s.timeline, ...s.intro, ...s.requirements);
  for (const b of s.benefits) allStrings.push(b.title, b.desc);
  for (const p of s.process) allStrings.push(p.title, p.desc);
  for (const f of s.faqs) allStrings.push(f.q, f.a);
}
for (const e of Object.values(signatureEnrichment)) {
  allStrings.push(...(e.whoFor ?? []), ...(e.deliverables ?? []), ...(e.legalBasis ?? []));
  for (const c of e.costs ?? []) allStrings.push(c.item, c.note ?? "");
}
const badChars = allStrings.filter((t) => /[*#_`\[\]>]|[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(t));
expect(badChars.length === 0, `ditemukan ${badChars.length} string dengan emoji/markdown`, "tanpa emoji & markdown di seluruh string");

console.log(`\n=== RINGKASAN: ${checks} pemeriksaan, ${errors} gagal ===`);
if (errors > 0) process.exit(1);
console.log("SEMUA VALIDASI LULUS.");
