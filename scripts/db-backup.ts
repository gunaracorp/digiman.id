/**
 * db-backup.ts — ekspor SELURUH isi database ke db/backup.json (teks, ramah-GitHub).
 * Jalankan: bun run db:backup
 *
 * Melindungi dari reset sandbox: semua konten (termasuk yang dibuat lewat
 * panel admin: layanan, testimoni, FAQ, blog, penawaran, pesan, proyek klien)
 * tersimpan sebagai satu file JSON yang di-commit ke git & dimasukkan ke zip.
 * Pemulihan: bun run db:restore
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Urutan FK-aman: parent dulu (PgaDomain → PgaDocument, ClientProject → turunannya)
const MODELS = [
  "service",
  "testimonial",
  "faq",
  "office",
  "contactMessage",
  "chatLog",
  "pgaDomain",
  "pgaDocument",
  "gunaraPackage",
  "blogPost",
  "proposal",
  "siteSetting",
  "clientProject",
  "invoice",
  "activityEvent",
  "meeting",
] as const;

const DATETIME_KEYS = new Set([
  "createdAt",
  "updatedAt",
  "publishedAt",
  "startedAt",
  "targetDoneAt",
  "dueDate",
  "paidAt",
  "scheduledAt",
  "expiresAt",
  "validUntil",
]);

function revive(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    if (DATETIME_KEYS.has(k) && typeof v === "string") out[k] = new Date(v);
    else out[k] = v;
  }
  return out;
}

async function main() {
  const data: Record<string, unknown[]> = {};
  const counts: Record<string, number> = {};

  for (const model of MODELS) {
    const rows = await (prisma as unknown as Record<string, { findMany: () => Promise<Record<string, unknown>[]> }>)[model].findMany();
    data[model] = rows;
    counts[model] = rows.length;
  }

  const payload = {
    meta: {
      version: 1,
      exportedAt: new Date().toISOString(),
      app: "digiman.id",
      note: "Backup seluruh tabel. Pemulihan: bun run db:restore",
      counts,
    },
    data,
  };

  const outPath = join(process.cwd(), "db", "backup.json");
  mkdirSync(join(process.cwd(), "db"), { recursive: true });
  writeFileSync(outPath, JSON.stringify(payload, null, 1), "utf-8");

  const total = Object.values(counts).reduce((s, n) => s + n, 0);
  console.log(`✅ Backup ${total} baris → db/backup.json`);
  for (const [m, n] of Object.entries(counts)) if (n > 0) console.log(`   ${m}: ${n}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
