import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminOrDenied } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const [
      contactTotal,
      contactUnhandled,
      proposalTotal,
      proposalGrouped,
      blogTotal,
      chatSessions,
      chatMessages,
      services,
      testimonials,
      faqs,
      docs,
      packages,
      // ── Analytics (Task 15-c): klien, kontrak, pendapatan, dokumen, aktivitas ──
      clientProjects,
      clientProjectsActive,
      contractAgg,
      revenuePaidAgg,
      revenueOutstandingAgg,
      invoiceCount,
      invoiceRows,
      docsByTierGrouped,
      recentActivities,
    ] = await Promise.all([
      db.contactMessage.count(),
      db.contactMessage.count({ where: { handled: false } }),
      db.proposal.count(),
      db.proposal.groupBy({ by: ["status"], _count: { _all: true } }),
      db.blogPost.count(),
      db.chatLog.findMany({
        select: { sessionId: true },
        distinct: ["sessionId"],
      }),
      db.chatLog.count(),
      db.service.count(),
      db.testimonial.count(),
      db.faq.count(),
      db.pgaDocument.count(),
      db.gunaraPackage.count(),
      db.clientProject.count(),
      db.clientProject.count({ where: { status: { not: "DONE" } } }),
      db.clientProject.aggregate({ _sum: { price: true } }),
      db.invoice.aggregate({ _sum: { amount: true }, where: { status: "PAID" } }),
      db.invoice.aggregate({
        _sum: { amount: true },
        where: { status: { not: "PAID" } },
      }),
      db.invoice.count(),
      db.invoice.findMany({
        orderBy: { order: "asc" },
        select: { number: true, label: true, amount: true, status: true },
      }),
      db.pgaDocument.groupBy({ by: ["tier"], _count: { _all: true } }),
      db.activityEvent.findMany({
        take: 8,
        orderBy: { createdAt: "desc" },
        include: { project: { select: { code: true, company: true } } },
      }),
    ]);

    const proposalByStatus: Record<string, number> = {};
    for (const row of proposalGrouped) {
      proposalByStatus[row.status] = row._count._all;
    }

    const docsByTier: Record<string, number> = {};
    for (const row of docsByTierGrouped) {
      docsByTier[row.tier] = row._count._all;
    }

    return NextResponse.json({
      // ── Field lama (dipakai komponen lain — jangan diubah) ──
      contactTotal,
      contactUnhandled,
      proposalTotal,
      proposalByStatus,
      blogTotal,
      chatSessions: chatSessions.length,
      chatMessages,
      services,
      testimonials,
      faqs,
      docs,
      packages,
      // ── Field baru: analytics mission control ──
      clientProjects,
      clientProjectsActive,
      contractValue: contractAgg._sum.price ?? 0,
      revenuePaid: revenuePaidAgg._sum.amount ?? 0,
      revenueOutstanding: revenueOutstandingAgg._sum.amount ?? 0,
      invoiceCount,
      invoices: invoiceRows,
      docsByTier,
      recentActivities: recentActivities.map((a) => ({
        id: a.id,
        type: a.type,
        title: a.title,
        description: a.description,
        createdAt: a.createdAt,
        project: { code: a.project.code, company: a.project.company },
      })),
    });
  } catch (e) {
    console.error("[api/admin/stats GET]", e);
    return NextResponse.json(
      { error: "Gagal menghitung statistik." },
      { status: 500 },
    );
  }
}
