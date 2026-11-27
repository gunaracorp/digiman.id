/**
 * Reset password akun admin panel — pelengkap scripts/seed-admin.ts.
 * Jalankan: bun run scripts/reset-admin-password.ts
 *
 * seed-admin.ts hanya membuat akun admin bila tabel kosong; skrip ini menyetel
 * ulang password akun yang sudah ada ke nilai terdokumentasi.
 * Env opsional: ADMIN_USERNAME (default "admin"), ADMIN_PASSWORD (default "digiman2025").
 */
import { randomBytes, scryptSync } from "node:crypto";
import { createPrismaClient } from "./db";

const prisma = createPrismaClient();

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

async function main() {
  const username = (process.env.ADMIN_USERNAME ?? "admin").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD ?? "digiman2025";

  const users = await prisma.adminUser.findMany({ select: { username: true } });
  console.log(
    "AdminUser di DB:",
    users.map((u) => u.username).join(", ") || "(kosong)"
  );

  const existing = await prisma.adminUser.findUnique({ where: { username } });
  if (existing) {
    await prisma.adminUser.update({
      where: { username },
      data: { passwordHash: hashPassword(password) },
    });
    console.log(`✅ Password admin "${username}" direset.`);
  } else {
    await prisma.adminUser.create({
      data: { username, passwordHash: hashPassword(password), name: "Administrator Digiman" },
    });
    console.log(`✅ Akun admin "${username}" dibuat.`);
  }
}

main()
  .catch((e) => {
    console.error("❌ Reset password admin gagal:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
