import { db } from "../src/lib/db";
async function main() {
  const existing = await db.teamMember.count();
  if (existing > 0) { console.log(`TeamMember sudah ada (${existing}) — lewati.`); return; }
  const team = [
    { name: "Gugun Gunara", role: "Pendiri & Direktur Utama", division: "Pimpinan", order: 1 },
    { name: "Muhammad Lutfi Azmi", role: "Arsitek Digital & Pengembang Gunara OS", division: "Teknologi", order: 2 },
    { name: "Tim Legalitas", role: "Dewan Pakar Pendirian Badan Usaha", division: "Legal", order: 3 },
    { name: "Tim Perizinan & Sertifikasi", role: "Konsultan Izin, Halal, BPOM & SNI", division: "Perizinan", order: 4 },
    { name: "Tim Pajak & Keuangan", role: "Konsultan Perpajakan Bersertifikat", division: "Keuangan", order: 5 },
    { name: "Tim Digitalisasi", role: "Website, Otomasi AI & Marketing", division: "Teknologi", order: 6 },
  ];
  for (const m of team) await db.teamMember.create({ data: m });
  console.log(`✅ ${team.length} TeamMember dibuat`);
  await db.$disconnect();
}
main();
