import { db } from "../src/lib/db";

async function main() {
  const rows = await db.siteSetting.findMany({ orderBy: { key: "asc" } });
  if (rows.length === 0) {
    console.log("NO SETTINGS ROWS");
    return;
  }
  console.log(JSON.stringify(Object.fromEntries(rows.map((r) => [r.key, r.value.slice(0, 60)])), null, 2));
  const logs = await db.activityLog.findMany({ orderBy: { createdAt: "desc" }, take: 5 });
  console.log("LOGS:", logs.map((l) => `${l.action} | ${l.detail} | ${l.createdAt.toISOString()}`));
  const team = await db.teamMember.count();
  console.log("TEAM COUNT:", team);
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
