/**
 * Validasi ekspansi 165 — cek struktur semua layanan baru Task 23
 * dan kevalidan slug related terhadap CATALOG + slug baru.
 */
import { signatureContent, signatureEnrichment } from "../src/lib/services/signature-istimewa";
import { agriMaritimContent, agriMaritimEnrichment } from "../src/lib/services/agri-maritim";
import { ekspansi165Content, ekspansi165Enrichment } from "../src/lib/services/ekspansi-165";
import { CATALOG } from "../src/lib/catalog";

const VALID = new Set(CATALOG.map((s) => s.slug));
for (const s of [
  "dna-bisnis-360", "launchpad-30-hari", "shield-kepatuhan-tahunan", "deal-room-negosiasi",
  "exit-ready-valuation", "tender-ready-program", "pendiri-pribadi-shield", "ispo-rspo-sawit",
  "izin-perikanan-sikpi", "pvt-varietas-tanaman", "izin-peternakan-nak", "plasma-perkebunan-kemitraan",
  "izin-air-tanah-sipa", "riph-impor-hortikultura", "kitap-pasangan-investor", "skb-relief-pajak-treaty",
  "keberatan-banding-pajak", "indikasi-geografis-sttig", "bujp-jasa-keamanan", "izin-limbah-b3",
  "skttk-personel-konstruksi",
]) VALID.add(s);

const FILES: [string, ReturnType<() => any>, Record<string, any>][] = [
  ["signature-istimewa", signatureContent, signatureEnrichment],
  ["agri-maritim", agriMaritimContent, agriMaritimEnrichment],
  ["ekspansi-165", ekspansi165Content, ekspansi165Enrichment],
];

let fails = 0;
const fail = (msg: string) => { fails++; console.log("  FAIL:", msg); };

for (const [name, content, enrichment] of FILES) {
  console.log(`\n=== ${name} (${content.length} layanan) ===`);
  if (content.length !== 7) fail(`jumlah layanan ${content.length} ≠ 7`);
  const slugs = content.map((c: any) => c.slug);
  if (new Set(slugs).size !== slugs.length) fail("slug duplikat");
  if (Object.keys(enrichment).length !== 7) fail(`enrichment ${Object.keys(enrichment).length} ≠ 7`);
  for (const c of content) {
    const e = enrichment[c.slug];
    const check = (ok: boolean, msg: string) => { if (!ok) fail(`${c.slug}: ${msg}`); };
    check(!!e, "enrichment hilang");
    check(typeof c.tagline === "string" && c.tagline.length > 10, "tagline");
    check(c.intro?.length === 3, `intro=${c.intro?.length} ≠ 3`);
    c.intro?.forEach((p: string, i: number) => {
      const sentences = p.split(/[.!?]+\s/).length;
      check(p.split(".").filter((s: string) => s.trim().length > 5).length >= 3, `intro P${i + 1} terlalu pendek`);
    });
    check(c.benefits?.length === 5, `benefits=${c.benefits?.length} ≠ 5`);
    check(c.process?.length === 4, `process=${c.process?.length} ≠ 4`);
    check(c.requirements?.length >= 4 && c.requirements.length <= 6, `requirements=${c.requirements?.length}`);
    check(c.faqs?.length === 3, `faqs=${c.faqs?.length} ≠ 3`);
    check(c.related?.length === 4, `related=${c.related?.length} ≠ 4`);
    for (const r of c.related ?? []) if (!VALID.has(r)) fail(`${c.slug}: related "${r}" TIDAK VALID`);
    if (e) {
      check(e.whoFor?.length === 4, `whoFor=${e.whoFor?.length} ≠ 4`);
      check(e.deliverables?.length === 5, `deliverables=${e.deliverables?.length} ≠ 5`);
      check(e.costs && e.costs.length >= 4 && e.costs.length <= 5, `costs=${e.costs?.length}`);
      check(e.legalBasis && e.legalBasis.length >= 3 && e.legalBasis.length <= 4, `legalBasis=${e.legalBasis?.length}`);
    }
    // anti-emoji / anti-markdown
    for (const [field, v] of Object.entries(c)) {
      const text = JSON.stringify(v);
      if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(text)) fail(`${c.slug}.${field}: emoji terdeteksi`);
      if (/[*_#`]/.test(text.replace(/[.*+?^${}()|[\]\\]/g, "")) === false && /(^|\s)[*_#]/.test(text)) fail(`${c.slug}.${field}: markdown terdeteksi`);
    }
  }
}

console.log(`\n=== RINGKASAN: ${fails === 0 ? "SEMUA VALID" : fails + " GAGAL"} ===`);
process.exit(fails === 0 ? 0 : 1);
