import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const denied = await requireAdmin();
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
    ]);

    const proposalByStatus: Record<string, number> = {};
    for (const row of proposalGrouped) {
      proposalByStatus[row.status] = row._count._all;
    }

    return NextResponse.json({
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
    });
  } catch (e) {
    console.error("[api/admin/stats GET]", e);
    return NextResponse.json(
      { error: "Gagal menghitung statistik." },
      { status: 500 },
    );
  }
}
