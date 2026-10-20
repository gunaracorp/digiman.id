/**
 * Parser PGA-165 — mengubah docs/PGA165-master-architecture.md
 * menjadi scripts/pga-parsed.json (20 domain, 165 dokumen).
 * Jalankan dari root proyek: bun run scripts/parse-pga.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const SRC = join(process.cwd(), "docs", "PGA165-master-architecture.md");
const OUT = join(process.cwd(), "scripts", "pga-parsed.json");

const raw = readFileSync(SRC, "utf-8");
// Hentikan di register tabel akhir
const stopIdx = raw.indexOf("## Register Induk 165 Dokumen");
const text = stopIdx > 0 ? raw.slice(0, stopIdx) : raw;
const lines = text.split("\n");

type PgaDoc = {
  code: string;
  number: number;
  title: string;
  domain: number;
  domainName: string;
  tier: string;
  owner: string;
  points: string[];
  summary: string;
};
type PgaDomain = {
  number: number;
  name: string;
  tagline: string;
  description: string;
  docCount: number;
};

const domains: PgaDomain[] = [];
const docs: PgaDoc[] = [];

let curDomain: (typeof domains)[number] | null = null;
let curDoc: PgaDoc | null = null;
let domainDesc: string[] = [];

const domainRe = /^## Domain (\d+):\s*(.+)$/;
const docRe = /^### (PGA-(\d+))\s*-\s*(.+)$/;
const metaRe = /^-\s*Pemilik:\s*(.+?)\s*\|\s*Tier:\s*(.+?)\s*$/;
const bulletRe = /^\s+-\s+(.+)$/;
const taglineRe = /^\*([^*]+)\*$/;

for (const lineRaw of lines) {
  const line = lineRaw.trimEnd();
  const dm = line.match(domainRe);
  if (dm) {
    curDomain = {
      number: parseInt(dm[1], 10),
      name: dm[2].trim(),
      tagline: "",
      description: "",
      docCount: 0,
    };
    domains.push(curDomain);
    domainDesc = [];
    curDoc = null;
    continue;
  }
  const dc = line.match(docRe);
  if (dc) {
    if (!curDomain) continue;
    curDoc = {
      code: dc[1],
      number: parseInt(dc[2], 10),
      title: dc[3].trim(),
      domain: curDomain.number,
      domainName: curDomain.name,
      tier: "",
      owner: "",
      points: [],
      summary: "",
    };
    docs.push(curDoc);
    curDomain.docCount++;
    continue;
  }
  if (!curDomain && !curDoc) continue;
  if (curDoc) {
    const mm = line.match(metaRe);
    if (mm) {
      curDoc.owner = mm[1].trim();
      curDoc.tier = mm[2].trim();
      continue;
    }
    const bm = line.match(bulletRe);
    if (bm) {
      curDoc.points.push(bm[1].trim());
      continue;
    }
    // baris kosong pemisah antar dokumen
    if (line.trim() === "") curDoc = null;
  } else if (curDomain) {
    const tg = line.match(taglineRe);
    if (tg && !curDomain.tagline) {
      curDomain.tagline = tg[1].trim();
      continue;
    }
    if (line.trim() !== "") domainDesc.push(line.trim());
  }
}

for (const d of domains) d.description = domainDesc.join(" ").trim();
for (const d of docs) d.summary = d.points.join(" ");

const tierCount = docs.reduce<Record<string, number>>((acc, d) => {
  acc[d.tier] = (acc[d.tier] ?? 0) + 1;
  return acc;
}, {});

const result = {
  meta: {
    brand: "TOP Manajemen powered by digiman.id",
    entities: "PT Digital Bisnis Manajemen x PT Top Konsultan Internasional",
    totalDocs: docs.length,
    totalDomains: domains.length,
    tierCounts: tierCount,
  },
  domains,
  docs,
};

writeFileSync(OUT, JSON.stringify(result, null, 2));
console.log("Domains:", domains.length, "Docs:", docs.length);
console.log("Tier counts:", tierCount);
console.log(
  "Domain doc counts:",
  domains.map((d) => `${d.number}:${d.docCount}`).join(" ")
);
const missing = docs.filter((d) => !d.tier || !d.owner || d.points.length === 0);
console.log(
  "Docs missing meta/points:",
  missing.map((d) => d.code).join(", ") || "none"
);
