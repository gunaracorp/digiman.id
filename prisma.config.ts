import 'dotenv/config'
import { defineConfig } from 'prisma/config'

/**
 * Konfigurasi CLI Prisma (arsitektur generasi baru 7/8).
 *
 * schema.prisma tidak lagi menyimpan URL koneksi — URL untuk perintah CLI
 * (db push / migrate) didefinisikan di sini, sementara PrismaClient saat
 * runtime memakai driver adapter (lihat src/lib/db.ts dan scripts/db.ts).
 *
 * DUAL-MODE (satu kode, dua lingkungan):
 * - Produksi/Vercel (Postgres): set POSTGRES_URL — dipakai duluan.
 * - Sandbox/hosting file-based (SQLite): provider schema "sqlite" +
 *   DATABASE_URL "file:…" (jalur resmi di .env.example).
 */
export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // Sengaja toleran: `prisma generate` (postinstall/build) tidak butuh
    // koneksi database, jadi config tidak boleh meledak saat URL belum
    // diset. Perintah yang benar-benar konek (db push / migrate) baru
    // memerlukan URL asli — tanpa itu, error koneksi akan jelas.
    url: process.env.POSTGRES_URL ?? process.env.DATABASE_URL ?? '',
  },
})
