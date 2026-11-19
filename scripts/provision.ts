/**
 * provision.ts — bootstrap data saat deploy: seed HANYA bila database masih
 * kosong, sehingga konten yang sudah diedit lewat panel admin tidak pernah
 * tertimpa seed bawaan saat redeploy.
 *
 * Dipanggil otomatis dari `npm run build` (via scripts/vercel-build.mjs)
 * setelah `prisma db push`, atau manual: `npm run db:provision`.
 */
import { execSync } from "node:child_process";
import { createPrismaClient } from "./db";

async function main() {
  const db = createPrismaClient();

  const serviceCount = await db.service.count();
  const adminCount = await db.adminUser.count();

  if (serviceCount > 0 && adminCount > 0) {
    console.log(
      `[provision] Database sudah terisi (service=${serviceCount}, admin=${adminCount}) — seed dilewati.`
    );
    await db.$disconnect();
    return;
  }

  console.log(
    `[provision] Database kosong (service=${serviceCount}, admin=${adminCount}) — menjalankan seed idempoten...`
  );
  try {
    // Urutan penting: konten publik dulu, lalu admin, lalu demo dashboard
    // (seed-dashboard merujuk paket PGA yang dibuat oleh seed-gunara).
    execSync("tsx scripts/seed-gunara.ts", { stdio: "inherit" });
    execSync("tsx scripts/seed-admin.ts", { stdio: "inherit" });
    execSync("tsx scripts/seed-dashboard.ts", { stdio: "inherit" });
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error("[provision] GAGAL:", err);
  process.exit(1);
});
