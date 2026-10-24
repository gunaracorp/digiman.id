import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/**
 * GET /api/dashboard — payload lengkap Client Dashboard.
 * Data demo dari tabel ClientProject + agregat deterministik PgaDocument.
 */
export async function GET() {
  try {
    const project = await db.clientProject.findFirst({
      include: {
        invoices: { orderBy: { order: "asc" } },
        activities: { orderBy: { createdAt: "desc" }, take: 12 },
        meetings: { orderBy: { scheduledAt: "asc" } },
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Belum ada proyek klien. Jalankan seed dashboard." },
        { status: 404 },
      );
    }

    // ── Dokumen: urut nomor → DONE lalu IN_REVIEW lalu PENDING (deterministik)
    const docs = await db.pgaDocument.findMany({
      select: { number: true, tier: true, domainNumber: true },
      orderBy: { number: "asc" },
    });
    const doneUntil = project.docCompleted;
    const reviewUntil = project.docCompleted + project.docInReview;

    const byTierRaw: Record<
      string,
      { done: number; review: number; pending: number; total: number }
    > = {};
    const byDomainRaw: Record<number, { done: number; total: number }> = {};
    for (const d of docs) {
      const tier =
        byTierRaw[d.tier] ??
        (byTierRaw[d.tier] = { done: 0, review: 0, pending: 0, total: 0 });
      tier.total++;
      const dom =
        byDomainRaw[d.domainNumber] ??
        (byDomainRaw[d.domainNumber] = { done: 0, total: 0 });
      dom.total++;
      if (d.number <= doneUntil) {
        tier.done++;
        dom.done++;
      } else if (d.number <= reviewUntil) {
        tier.review++;
      } else {
        tier.pending++;
      }
    }

    const docTotal = docs.length;
    const percent = docTotal
      ? Math.round((project.docCompleted / docTotal) * 100)
      : 0;

    // ── Milestones: 6 titik dari startedAt → targetDoneAt
    const start = project.startedAt.getTime();
    const end = project.targetDoneAt.getTime();
    const progressFraction = percent / 100;
    const milestoneDefs = [
      { title: "Kickoff & Analisis Kebutuhan", weight: 0.08 },
      { title: "Legalitas Dasar Terbit", weight: 0.24 },
      { title: "Arsitektur P0 Navigasi Selesai", weight: 0.42 },
      { title: "Pertumbuhan P1 Rampung", weight: 0.6 },
      { title: "Perluasan & Digitalisasi P2", weight: 0.82 },
      { title: "Serah Terima Akhir P3 Warisan", weight: 1 },
    ];
    const nowMs = Date.now();
    const milestones = milestoneDefs.map((m, i) => {
      const atMs = Math.round(start + (end - start) * m.weight);
      let status: "DONE" | "ACTIVE" | "UPCOMING" =
        progressFraction >= m.weight - 0.001 ? "DONE" : "UPCOMING";
      if (status === "UPCOMING") {
        const prevWeight = i === 0 ? 0 : milestoneDefs[i - 1].weight;
        if (progressFraction >= prevWeight) status = "ACTIVE";
      }
      return {
        title: m.title,
        at: new Date(atMs).toISOString(),
        status,
        isOverdue: status !== "DONE" && atMs < nowMs,
      };
    });

    // ── Pembayaran
    const paid = project.invoices
      .filter((i) => i.status === "PAID")
      .reduce((s, i) => s + i.amount, 0);

    // ── Domain names untuk byDomain
    const domains = await db.pgaDomain.findMany({
      select: { number: true, name: true },
      orderBy: { number: "asc" },
    });
    const domainName = new Map(domains.map((d) => [d.number, d.name]));

    const byDomain = Object.entries(byDomainRaw)
      .map(([num, v]) => ({
        number: Number(num),
        name: domainName.get(Number(num)) ?? `Domain ${num}`,
        ...v,
      }))
      .sort((a, b) => b.done / b.total - a.done / a.total || b.total - a.total);

    let extras: Record<string, unknown> = {};
    try {
      extras = JSON.parse(project.extras) as Record<string, unknown>;
    } catch {
      extras = {};
    }

    return NextResponse.json({
      project: {
        id: project.id,
        code: project.code,
        clientName: project.clientName,
        company: project.company,
        email: project.email,
        phone: project.phone,
        packageCode: project.packageCode,
        packageName: project.packageName,
        price: project.price,
        status: project.status,
        healthScore: project.healthScore,
        startedAt: project.startedAt.toISOString(),
        targetDoneAt: project.targetDoneAt.toISOString(),
      },
      progress: {
        total: docTotal,
        done: project.docCompleted,
        review: project.docInReview,
        pending: Math.max(0, docTotal - doneUntil - project.docInReview),
        percent,
        byTier: byTierRaw,
        byDomain: byDomain.slice(0, 8),
      },
      milestones,
      payment: {
        price: project.price,
        paid,
        remaining: Math.max(0, project.price - paid),
        percent: project.price ? Math.round((paid / project.price) * 100) : 0,
        invoices: project.invoices.map((i) => ({
          ...i,
          dueDate: i.dueDate.toISOString(),
          paidAt: i.paidAt ? i.paidAt.toISOString() : null,
        })),
      },
      activities: project.activities.map((a) => ({
        ...a,
        createdAt: a.createdAt.toISOString(),
      })),
      meetings: project.meetings.map((m) => ({
        ...m,
        scheduledAt: m.scheduledAt.toISOString(),
      })),
      ...extras,
    });
  } catch (e) {
    console.error("[api/dashboard GET]", e);
    return NextResponse.json({ error: "Gagal memuat data dashboard." }, { status: 500 });
  }
}
