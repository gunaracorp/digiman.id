/**
 * Seed akun klien Portal Klien — idempotent (upsert by email).
 * Jalankan: bun run scripts/seed-client-user.ts  (atau bun run db:seed:client)
 *
 * 1. Membuat/memperbarui akun ClientUser (password di-hash scrypt "salt:hash",
 *    format identik dengan src/lib/auth.ts).
 * 2. Mengikat proyek demo (PRJ-2026-001 dari seed-dashboard) ke email akun
 *    agar Portal Klien langsung menampilkan data setelah login.
 */
import { randomBytes, scryptSync } from "node:crypto";
import { createPrismaClient } from "./db";

const prisma = createPrismaClient();

/**
 * Akun pemilik portal — dari environment, BUKAN hardcode (repo ini publik).
 * Set di .env: CLIENT_SEED_EMAIL + CLIENT_SEED_PASSWORD
 * (opsional: CLIENT_SEED_NAME, CLIENT_SEED_COMPANY).
 */
const CLIENT_EMAIL = process.env.CLIENT_SEED_EMAIL?.trim().toLowerCase() ?? "";
const CLIENT_PASSWORD = process.env.CLIENT_SEED_PASSWORD ?? "";
const CLIENT_NAME = process.env.CLIENT_SEED_NAME?.trim() || "Digital Bisnis Manajemen";
const CLIENT_COMPANY = process.env.CLIENT_SEED_COMPANY?.trim() || "PT Digital Bisnis Manajemen";

if (!CLIENT_EMAIL || !CLIENT_PASSWORD) {
  console.error(
    "❌ Kredensial seed belum diset. Tambahkan di .env lalu jalankan ulang:\n" +
      '   CLIENT_SEED_EMAIL="klien@perusahaan.id"\n' +
      '   CLIENT_SEED_PASSWORD="password-aman-minimal-8-karakter"\n' +
      "   (opsional) CLIENT_SEED_NAME / CLIENT_SEED_COMPANY"
  );
  process.exit(1);
}

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

async function main() {
  const email = CLIENT_EMAIL.trim().toLowerCase();

  const user = await prisma.clientUser.upsert({
    where: { email },
    update: { passwordHash: hashPassword(CLIENT_PASSWORD), name: CLIENT_NAME, company: CLIENT_COMPANY },
    create: {
      email,
      passwordHash: hashPassword(CLIENT_PASSWORD),
      name: CLIENT_NAME,
      company: CLIENT_COMPANY,
    },
  });

  // Ikat proyek demo ke email akun (hanya bila proyek masih memakai email default).
  const project = await prisma.clientProject.findUnique({ where: { code: "PRJ-2026-001" } });
  let bound = false;
  if (project && project.email !== email) {
    await prisma.clientProject.update({
      where: { id: project.id },
      data: { email, clientName: CLIENT_NAME, company: CLIENT_COMPANY },
    });
    bound = true;
  }

  console.log(
    `✅ Seed akun klien OK — ${user.email} (${user.name})` +
      (bound ? ` · proyek demo ${project?.code} diikat ke email ini` : " · proyek sudah terikat")
  );
}

main()
  .catch((e) => {
    console.error("❌ Seed akun klien gagal:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
