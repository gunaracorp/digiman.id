/**
 * db-restore.ts — pulihkan SELURUH database dari db/backup.json.
 * Jalankan: bun run db:restore
 *
 * Aman dijalankan kapan pun: menghapus data lama lalu mengisi ulang persis
 * seperti saat backup dibuat. Skema tabel TIDAK disentuh (gunakan db:push
 * terlebih dahulu bila skema berubah).
 */
import { readFileSync } from "fs";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Urutan FK-aman untuk DELETE: child dulu; CREATE: parent dulu.
const DELETE_ORDER = [
  "invoice",
  "activityEvent",
  "meeting",
  "clientProject",
  "pgaDocument",
  "pgaDomain",
  "chatLog",
  "contactMessage",
  "proposal",
  "blogPost",
  "gunaraPackage",
  "siteSetting",
  "office",
  "faq",
  "testimonial",
  "service",
] as const;

const CREATE_ORDER = [...DELETE_ORDER].reverse();

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
  const file = join(process.cwd(), "db", "backup.json");
  const payload = JSON.parse(readFileSync(file, "utf-8")) as {
    meta: { exportedAt: string; counts: Record<string, number> };
    data: Record<string, Record<string, unknown>[]>;
  };

  console.log(`📦 Backup dari: ${payload.meta.exportedAt}`);

  for (const model of DELETE_ORDER) {
    await (prisma as unknown as Record<string, { deleteMany: () => Promise<unknown> }>)[model].deleteMany();
  }

  let total = 0;
  for (const model of CREATE_ORDER) {
    const rows = payload.data[model] ?? [];
    if (rows.length === 0) continue;
    await (prisma as unknown as Record<string, { createMany: (a: { data: unknown[] }) => Promise<{ count: number }> }>)[model]
      .createMany({ data: rows.map(revive) });
    total += rows.length;
    console.log(`   ${model}: ${rows.length}`);
  }

  console.log(`✅ Restore selesai — ${total} baris dipulihkan dari backup.json`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
