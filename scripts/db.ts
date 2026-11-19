/**
 * Pabrik PrismaClient bersama untuk script operasional (bun/node).
 *
 * Arsitektur Prisma generasi baru (7/8): koneksi tidak lagi dibaca dari
 * schema.prisma — PrismaClient wajib dibangun di atas driver adapter.
 * PrismaPg memakai `pg` (node-postgres) di bawah kap; URL dari env
 * POSTGRES_URL (bun otomatis memuat berkas .env).
 */
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

export function createPrismaClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: process.env.POSTGRES_URL });
  return new PrismaClient({ adapter });
}
