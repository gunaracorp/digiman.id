/**
 * Pabrik PrismaClient bersama untuk script operasional (bun/node).
 *
 * Arsitektur Prisma generasi baru (7/8): koneksi tidak lagi dibaca dari
 * schema.prisma — PrismaClient wajib dibangun di atas driver adapter.
 *
 * DUAL-MODE:
 * - Produksi (Postgres): POSTGRES_URL → PrismaPg (node-postgres).
 * - Sandbox/hosting file-based (SQLite): DATABASE_URL "file:…" →
 *   PrismaLibSql (libsql) — jalur resmi di .env.example.
 */
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

export function createPrismaClient(): PrismaClient {
  const adapter = process.env.POSTGRES_URL
    ? new PrismaPg({ connectionString: process.env.POSTGRES_URL })
    : new PrismaLibSql({
        url: process.env.DATABASE_URL ?? "file:./db/custom.db",
      });
  return new PrismaClient({ adapter });
}
