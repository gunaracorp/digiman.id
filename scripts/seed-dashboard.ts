/**
 * Seed Client Dashboard — data demo proyek klien (idempotent, upsert by code).
 * Jalankan: bun run scripts/seed-dashboard.ts  (atau bun run db:seed:dashboard)
 *
 * Membuat 1 proyek klien lengkap: paket PGA-72, progress 165 dokumen,
 * invoice, aktivitas, meeting, dan extras (legalitas, digitalisasi, goals,
 * team, files, achievements, notifications, messages).
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DAY = 24 * 60 * 60 * 1000;
const now = Date.now();
const at = (offsetDays: number, hour = 9, minute = 0) => {
  // Jam WIB (UTC+7) — kembalikan Date pada offset hari dari sekarang.
  const d = new Date(now + offsetDays * DAY);
  d.setUTCHours(hour - 7, minute, 0, 0);
  return d;
};

async function main() {
  const extras = {
    legalitas: [
      { name: "NIB (OSS-RBA)", status: "DONE", detail: "Terbit — 1203000261842" },
      { name: "Pengesahan Kemenkumham", status: "DONE", detail: "SK AHU-0048321" },
      { name: "NPWP & Konfirmasi PKP", status: "IN_REVIEW", detail: "Nadhir file diajukan" },
      { name: "Sertifikat Standar KBLI 63122", status: "IN_REVIEW", detail: "Menunggu verifikasi OSS" },
      { name: "Izin Komersial & Hak Cipta", status: "PENDING", detail: "Setelah PKP terbit" },
    ],
    digitalisasi: [
      { name: "Website Company Profile", progress: 100 },
      { name: "SEO & Google Business Profile", progress: 80 },
      { name: "Sistem CRM Internal", progress: 45 },
      { name: "Aplikasi Mobile (PWA)", progress: 15 },
    ],
    goals: [
      { title: "Selesaikan 120 dokumen (P0+P1)", current: 97, target: 120, unit: "dok" },
      { title: "Legalitas perusahaan lengkap", current: 3, target: 5, unit: "izin" },
      { title: "Skor SEO ≥ 90", current: 80, target: 90, unit: "skor" },
      { title: "Go-live CRM internal", current: 45, target: 100, unit: "%" },
      { title: "Tim inti tersertifikasi", current: 2, target: 4, unit: "orang" },
    ],
    team: [
      { name: "Gugun Gunara", role: "Lead Konsultan", initials: "GG" },
      { name: "Muhammad Lutfi Azmi", role: "Arsitek Digital", initials: "ML" },
      { name: "Rani Kusumawati", role: "Analis Legalitas", initials: "RK" },
      { name: "Bimo Prasetyo", role: "Project Manager", initials: "BP" },
    ],
    files: [
      { name: "PGA-72 Master Plan.pdf", size: "4.2 MB", type: "pdf", date: at(-2).toISOString() },
      { name: "NIB-OSS-1203000261842.pdf", size: "1.1 MB", type: "pdf", date: at(-9).toISOString() },
      { name: "Akta-Pendirian-SK-Kemenkumham.pdf", size: "2.6 MB", type: "pdf", date: at(-16).toISOString() },
      { name: "Brand-Guidelines-v2.zip", size: "18.4 MB", type: "zip", date: at(-21).toISOString() },
      { name: "Website-Handover-Report.docx", size: "840 KB", type: "doc", date: at(-27).toISOString() },
      { name: "Laporan-Bulanan-Oktober.xlsx", size: "320 KB", type: "xls", date: at(-1).toISOString() },
    ],
    achievements: [
      { id: "kickoff", title: "Kickoff Megah", desc: "Rapat perdana & penandatanganan kontrak", icon: "rocket", unlocked: true },
      { id: "nib", title: "NIB Terbit", desc: "Legalitas dasar perusahaan resmi", icon: "shield", unlocked: true },
      { id: "d25", title: "25 Dokumen", desc: "Kuartal pertama arsitektur selesai", icon: "file", unlocked: true },
      { id: "d50", title: "50 Dokumen", desc: "Setengah jalan tier P1", icon: "file", unlocked: true },
      { id: "web", title: "Website Live", desc: "Company profile tayang & terindeks", icon: "globe", unlocked: true },
      { id: "pay1", title: "Pembayaran Tepat", desc: "Invoice pertama dilunasi", icon: "wallet", unlocked: true },
      { id: "d97", title: "97 Dokumen", desc: "Memasuki fase P2 Perluasan", icon: "trending", unlocked: true },
      { id: "d165", title: "PGA-72 Selesai", desc: "Seluruh 72 dokumen diserahterimakan", icon: "crown", unlocked: false },
    ],
    notifications: [
      { id: "n1", title: "3 dokumen menunggu persetujuan Anda", body: "PGA-98, PGA-99, PGA-100 sudah masuk tahap review klien.", time: at(0, 8).toISOString(), read: false, level: "info" },
      { id: "n2", title: "Invoice INV-…-03 jatuh tempo 5 hari", body: "Sebesar Rp 18.000.000 — termin pembangunan 3.", time: at(0, 7).toISOString(), read: false, level: "warning" },
      { id: "n3", title: "Rapat progres mingguan beserta agenda", body: "Setiap Jumat 10.00 WIB bersama Bimo Prasetyo.", time: at(-1, 16).toISOString(), read: true, level: "info" },
      { id: "n4", title: "Sertifikat Standar masuk tahap verifikasi", body: "Estimasi selesai 3-5 hari kerja.", time: at(-2, 11).toISOString(), read: true, level: "success" },
      { id: "n5", title: "Laporan SEO bulanan tersedia", body: "Skor naik 72 → 80. Unduh di File Center.", time: at(-3, 9).toISOString(), read: true, level: "success" },
    ],
    messages: [
      { id: "m1", from: "team", sender: "Bimo Prasetyo", text: "Pagi Pak Andi! Dokumen PGA-98 s/d 100 sudah kami unggah untuk review 🙌", time: at(0, 8, 12).toISOString() },
      { id: "m2", from: "me", sender: "Andi Wijaya", text: "Pagi juga. Saya review siang ini ya, terima kasih.", time: at(0, 8, 40).toISOString() },
      { id: "m3", from: "team", sender: "Rani Kusumawati", text: "Update PKP: file nadhir sudah masuk, estimasi 3 hari kerja.", time: at(0, 9, 5).toISOString() },
      { id: "m4", from: "me", sender: "Andi Wijaya", text: "Mantap. Kalau sudah terbit tolong kabari.", time: at(0, 9, 30).toISOString() },
      { id: "m5", from: "team", sender: "Gugun Gunara", text: "Skor SEO bulan ini naik ke 80 — roadmap ke 90 sudah kami siapkan.", time: at(-1, 14, 20).toISOString() },
      { id: "m6", from: "team", sender: "Muhammad Lutfi Azmi", text: "Draft PWA sudah 15% — arsitektur modul CRM dipakai ulang, hemat 2 minggu.", time: at(-1, 15, 45).toISOString() },
    ],
  };

  const project = await prisma.clientProject.upsert({
    where: { code: "PRJ-2026-001" },
    update: {
      docCompleted: 97,
      docInReview: 14,
      healthScore: 87,
      extras: JSON.stringify(extras),
    },
    create: {
      code: "PRJ-2026-001",
      clientName: "Andi Wijaya",
      company: "PT Maju Bersama Sejahtera",
      email: "andi@majubersama.id",
      phone: "+62 812-3456-7890",
      packageCode: "PGA-72",
      packageName: "PGA-72 — Pertumbuhan Terpadu",
      price: 72_000_000,
      docTotal: 165,
      docCompleted: 97,
      docInReview: 14,
      status: "ON_TRACK",
      healthScore: 87,
      startedAt: at(-112),
      targetDoneAt: at(56),
      extras: JSON.stringify(extras),
    },
  });

  const invoices = [
    { number: "INV-PRJ-2026-001-01", label: "Termin 1 — Kickoff & Legalitas Dasar", amount: 18_000_000, dueDate: at(-98), paidAt: at(-95), status: "PAID", order: 1 },
    { number: "INV-PRJ-2026-001-02", label: "Termin 2 — Arsitektur Dokumen P0", amount: 18_000_000, dueDate: at(-64), paidAt: at(-62), status: "PAID", order: 2 },
    { number: "INV-PRJ-2026-001-03", label: "Termin 3 — Dokumen P1 & Website", amount: 18_000_000, dueDate: at(5), paidAt: null, status: "PENDING", order: 3 },
    { number: "INV-PRJ-2026-001-04", label: "Termin 4 — CRM & Integrasi", amount: 12_000_000, dueDate: at(30), paidAt: null, status: "SCHEDULED", order: 4 },
    { number: "INV-PRJ-2026-001-05", label: "Termin 5 — Serah Terima Akhir", amount: 6_000_000, dueDate: at(54), paidAt: null, status: "SCHEDULED", order: 5 },
  ];
  for (const inv of invoices) {
    await prisma.invoice.upsert({
      where: { number: inv.number },
      update: { status: inv.status, paidAt: inv.paidAt },
      create: { ...inv, projectId: project.id },
    });
  }

  const activities = [
    { type: "DOC_APPROVED", title: "PGA-100 disetujui klien", description: "Dokumen SOP Pemasaran Digital ditandatangani.", createdAt: at(0, 7, 30) },
    { type: "PAYMENT", title: "Pengingat invoice termin 3", description: "INV-…-03 jatuh tempo dalam 5 hari.", createdAt: at(0, 7, 0) },
    { type: "DOC_REVIEW", title: "3 dokumen masuk review klien", description: "PGA-98, PGA-99, PGA-100 menunggu persetujuan Anda.", createdAt: at(-1, 10, 0) },
    { type: "MILESTONE", title: "Milestone P1 Pertumbuhan 100%", description: "Seluruh 40 dokumen P1 selesai & diserahkan.", createdAt: at(-3, 15, 0) },
    { type: "MEETING", title: "Rapat progres mingguan", description: "Notulen terkirim ke seluruh stakeholder.", createdAt: at(-4, 11, 0) },
    { type: "DOC_APPROVED", title: "PGA-85 s/d PGA-90 disetujui", description: "Batch SOP Operasional lulus review.", createdAt: at(-6, 13, 30) },
    { type: "SYSTEM", title: "Laporan SEO bulanan tersedia", description: "Skor 72 → 80. Detail di File Center.", createdAt: at(-7, 9, 0) },
    { type: "MILESTONE", title: "Website company profile live", description: "Terindeks Google, Core Web Vitals hijau.", createdAt: at(-12, 16, 0) },
  ];
  const existingActivities = await prisma.activityEvent.count({
    where: { projectId: project.id },
  });
  if (existingActivities === 0) {
    await prisma.activityEvent.createMany({
      data: activities.map((a) => ({ ...a, projectId: project.id })),
    });
  }

  const meetings = [
    { title: "Review Dokumen P2 Perluasan", agenda: "PGA-101 s/d PGA-110 — SOP keuangan & SDM", host: "Bimo Prasetyo", scheduledAt: at(1, 10), durationMin: 60, status: "UPCOMING" },
    { title: "Workshop CRM Internal", agenda: "Pemetaan alur penjualan & pipeline", host: "Muhammad Lutfi Azmi", scheduledAt: at(4, 13), durationMin: 90, status: "UPCOMING" },
    { title: "Rapat Progres Mingguan", agenda: "Health score, blokir, rencana minggu depan", host: "Bimo Prasetyo", scheduledAt: at(6, 10), durationMin: 45, status: "UPCOMING" },
    { title: "Rapat Progres Mingguan", agenda: "Evaluasi milestone P1", host: "Bimo Prasetyo", scheduledAt: at(-4, 10), durationMin: 45, status: "DONE" },
  ];
  const existingMeetings = await prisma.meeting.count({
    where: { projectId: project.id },
  });
  if (existingMeetings === 0) {
    await prisma.meeting.createMany({
      data: meetings.map((m) => ({ ...m, projectId: project.id })),
    });
  }

  console.log(
    `✅ Seed dashboard OK — ${project.code} (${project.company}), doc ${project.docCompleted}/${project.docTotal}, health ${project.healthScore}`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
