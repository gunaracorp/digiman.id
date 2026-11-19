import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Arsitektur Prisma 7/8: koneksi dibangun lewat driver adapter (node-postgres),
// URL dari environment POSTGRES_URL — bukan lagi dari schema.prisma.
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.POSTGRES_URL }),
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
