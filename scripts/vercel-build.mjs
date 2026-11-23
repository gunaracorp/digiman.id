/**
 * vercel-build.mjs — langkah pra-build yang sadar-environment.
 *
 * Dipanggil oleh `npm run build` sebelum `next build`. Bila POSTGRES_URL
 * tersedia (Vercel/produksi): sinkronkan skema (`prisma db push` — tanpa
 * --accept-data-loss, sehingga perubahan skema yang destruktif akan gagal
 * keras alih-alih diam-diam menghapus data produksi), lalu provision data
 * (seed hanya bila database masih kosong). Bila POSTGRES_URL tidak diset
 * (mis. builder pratinjau tanpa database): lewati agar build tetap berjalan.
 */
import { execSync } from "node:child_process";

const url = process.env.POSTGRES_URL;

if (!url) {
  console.warn(
    "[build] POSTGRES_URL tidak diset — lewati prisma db push & provisioning seed."
  );
  process.exit(0);
}

console.log("[build] Menyinkronkan skema database (prisma db push)...");
execSync("prisma db push", { stdio: "inherit" });

console.log("[build] Provisioning data (seed hanya bila database kosong)...");
execSync("tsx scripts/provision.ts", { stdio: "inherit" });
