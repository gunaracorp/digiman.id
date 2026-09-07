/**
 * Seed script — populates the database from the content source of truth.
 * Run: bun scripts/seed.ts   (after `bun run db:push`)
 */
import { PrismaClient } from "@prisma/client";
import { BUSINESS_UNITS, INSIGHTS } from "../src/content/holding";

const db = new PrismaClient();

const DAY_MS = 86_400_000;

async function main() {
  for (const [index, unit] of BUSINESS_UNITS.entries()) {
    const data = {
      key: unit.key,
      name: unit.name,
      tagline: unit.tagline,
      sector: unit.sector,
      stage: unit.stage,
      description: unit.description,
      focus: unit.focus.join(", "),
      attributes: JSON.stringify(unit.attributes),
      order: index,
      active: true,
    };
    await db.businessUnit.upsert({
      where: { key: unit.key },
      update: data,
      create: data,
    });
  }

  for (const seed of INSIGHTS) {
    const publishedAt = new Date(Date.now() - seed.daysAgo * DAY_MS);
    const data = {
      slug: seed.slug,
      title: seed.title,
      excerpt: seed.excerpt,
      category: seed.category,
      readMinutes: seed.readMinutes,
      featured: seed.featured,
      publishedAt,
    };
    await db.insight.upsert({
      where: { slug: seed.slug },
      update: data,
      create: data,
    });
  }

  const [unitCount, insightCount] = await Promise.all([
    db.businessUnit.count(),
    db.insight.count(),
  ]);
  console.log(
    `Seed selesai: ${unitCount} business unit, ${insightCount} insight.`
  );
}

main()
  .catch((error) => {
    console.error("Seed gagal:", error);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
