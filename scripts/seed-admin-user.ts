import { db } from "../src/lib/db";
import { hashPassword } from "../src/lib/auth";
async function main() {
  const count = await db.adminUser.count();
  if (count > 0) { console.log(`AdminUser sudah ada (${count}) — lewati.`); return; }
  await db.adminUser.create({
    data: {
      username: "gunara",
      passwordHash: hashPassword("gunara165"),
      name: "Gugun Gunara",
      role: "SUPERADMIN",
    },
  });
  console.log("✅ AdminUser 'gunara' dibuat (password: gunara165 — SEGERA GANTI setelah go-live)");
  await db.$disconnect();
}
main();
