/**
 * MIGRASI LAYANAN v3 — sinkronisasi penuh DB dengan katalog kanonik (seed-v2).
 *
 * Latar belakang (audit Task 20): DB ter-seed dari prisma/seed.ts versi lama
 * dengan 10 slug berbeda dari pustaka konten editorial (src/lib/services/*).
 * Akibatnya 11 layanan kehilangan konten landing page-nya (jatuh ke fallback
 * generik) dan 2 layanan (legal-drafting, aplikasi-sistem) tidak pernah masuk
 * DB sehingga tak terindeks sitemap.
 *
 * Yang dilakukan skrip ini (idempoten — aman dijalankan berulang):
 *   1. Rename 10 slug lama → slug kanonik (URL ramah query pencarian).
 *   2. Sinkron title/desc/price/features/icon/category/featured dari CATALOG.
 *   3. Insert layanan yang belum ada (legal-drafting, aplikasi-sistem,
 *      + 4 layanan baru digital: wa-business, google-bisnisku, marketplace,
 *      branding-katalog).
 *   4. Laporan akhir: jumlah layanan + daftar slug final.
 */
import { db } from "../src/lib/db";
import { CATALOG } from "./seed-v2";

/** Slug lama (DB lama) → slug kanonik (pustaka konten & seed-v2) */
const RENAME: Record<string, string> = {
  koperasi: "pendirian-koperasi",
  yayasan: "pendirian-yayasan",
  perkumpulan: "perkumpulan-asosiasi",
  "izin-sektor": "izin-sektor-ss",
  apostille: "legalisasi-apostille",
  "hak-cipta": "hak-cipta-paten",
  halal: "sertifikasi-halal",
  "kitas-kitap": "kitas-rptka",
  likuidasi: "pembubaran",
  "digitalisasi-ai": "otomasi-ai",
  // "virtual-office" TIDAK diubah — DB sudah benar; pustaka konten yang
  // direname ke "virtual-office" (slug query ber-volume tertinggi).
};

async function main() {
  console.log("=== Migrasi layanan v3 dimulai ===");

  // 1. Rename slug lama → kanonik
  let renamed = 0;
  for (const [oldSlug, newSlug] of Object.entries(RENAME)) {
    const hit = await db.service.findUnique({ where: { slug: oldSlug } });
    if (!hit) continue;
    // Hindari bentrok bila slug baru kebetulan sudah ada
    const clash = await db.service.findUnique({ where: { slug: newSlug } });
    if (clash) {
      console.warn(`  ! ${oldSlug}: slug baru ${newSlug} sudah ada — lewati rename`);
      continue;
    }
    await db.service.update({ where: { id: hit.id }, data: { slug: newSlug } });
    renamed++;
  }
  console.log(`Rename slug: ${renamed} layanan`);

  // 2 + 3. Sinkron & insert dari katalog kanonik
  let updated = 0;
  let created = 0;
  const maxOrder = (await db.service.aggregate({ _max: { order: true } }))._max.order ?? 0;
  let orderCursor = maxOrder;

  for (const s of CATALOG) {
    const data = {
      slug: s.slug,
      title: s.title,
      desc: s.desc,
      price: s.price,
      features: JSON.stringify(s.features),
      icon: s.icon,
      category: s.category,
      featured: Boolean(s.featured),
    };
    const bySlug = await db.service.findUnique({ where: { slug: s.slug } });
    if (bySlug) {
      await db.service.update({ where: { id: bySlug.id }, data });
      updated++;
      continue;
    }
    orderCursor += 10;
    await db.service.create({ data: { ...data, visible: true, order: orderCursor } });
    created++;
    console.log(`  + BARU: ${s.slug} — ${s.title} (${s.price})`);
  }
  console.log(`Sinkron katalog: ${updated} update, ${created} insert (dari ${CATALOG.length} entri)`);

  // 3b. Rapikan urutan (order) = urutan katalog kanonik × 10
  for (let i = 0; i < CATALOG.length; i++) {
    await db.service.updateMany({ where: { slug: CATALOG[i].slug }, data: { order: (i + 1) * 10 } });
  }
  console.log("Urutan katalog dirapikan (order = indeks katalog × 10)");

  // 4. Laporan akhir
  const all = await db.service.findMany({ orderBy: { order: "asc" }, select: { slug: true, title: true, price: true, category: true } });
  console.log(`\nTOTAL layanan DB: ${all.length}`);
  for (const s of all) console.log(`  ${(s.slug ?? "-").padEnd(24)} [${s.category}] ${s.title} — ${s.price}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit(0));
