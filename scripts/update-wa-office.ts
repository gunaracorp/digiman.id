/**
 * update-wa-office.ts — Set nomor WhatsApp resmi di database (idempotent).
 *
 * RIWAYAT: versi Task 13 memakai schema lama (siteSetting dengan kolom
 * waNumber/waDisplay + insert kantor SCBD). Schema kini key/value
 * (SiteSetting { key, value }) dan kantor SCBD sudah ada di DB — insert
 * ulang akan menduplikasi data. Script ini ditulis ulang agar aman
 * dijalankan kapan pun: cukup meng-upsert dua key settings.
 *
 * Pemakaian: DATABASE_URL=file:./db/custom.db bun run scripts/update-wa-office.ts
 * (Alternatif menyeluruh: scripts/update-wa-number-db.py — menyapu seluruh tabel.)
 */
import { PrismaClient } from "@prisma/client";

const WA_NUMBER = "6281316516524";
const WA_DISPLAY = "+62 813-1651-6524";

const p = new PrismaClient();

async function main() {
  await p.siteSetting.upsert({
    where: { key: "waNumber" },
    update: { value: WA_NUMBER },
    create: { key: "waNumber", value: WA_NUMBER },
  });
  await p.siteSetting.upsert({
    where: { key: "waDisplay" },
    update: { value: WA_DISPLAY },
    create: { key: "waDisplay", value: WA_DISPLAY },
  });

  const rows = await p.siteSetting.findMany({
    where: { key: { in: ["waNumber", "waDisplay"] } },
  });
  for (const r of rows) console.log(`${r.key} = ${r.value}`);
  console.log("OK — nomor WhatsApp resmi terpasang di database.");

  await p.$disconnect();
}

main().catch((e) => {
  console.error("GAGAL:", e);
  process.exit(1);
});
