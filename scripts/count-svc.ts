import { CATALOG, CATEGORY_LABELS } from "../src/lib/catalog";
const byCat: Record<string, number> = {};
for (const s of CATALOG) byCat[s.category] = (byCat[s.category] ?? 0) + 1;
console.log("TOTAL:", CATALOG.length);
for (const [c, n] of Object.entries(byCat)) console.log(`  ${c} (${CATEGORY_LABELS[c] ?? c}): ${n}`);
console.log("SLUGS:\n" + CATALOG.map(s => s.slug).join("\n"));
