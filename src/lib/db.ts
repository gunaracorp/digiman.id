import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Arsitektur Prisma 7/8: koneksi dibangun lewat driver adapter.
 *
 * DUAL-MODE (satu kode, dua lingkungan — perilaku produksi tidak berubah):
 * - Produksi (Vercel/Postgres): POSTGRES_URL terpasang → PrismaPg
 *   (node-postgres), persis seperti semula.
 * - Sandbox/hosting file-based (SQLite, jalur resmi .env.example):
 *   tanpa POSTGRES_URL → PrismaLibSql memakai DATABASE_URL "file:…".
 */
function createAdapter() {
  if (process.env.POSTGRES_URL) {
    return new PrismaPg({ connectionString: process.env.POSTGRES_URL });
  }
  return new PrismaLibSql({
    url: process.env.DATABASE_URL ?? "file:./db/custom.db",
  });
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: createAdapter(),
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
