import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { logActivity, requireWrite } from "@/lib/admin-guard";

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const session = await requireWrite(req, "posts");
  if (session instanceof NextResponse) return session;

  const { id } = await ctx.params;
  try {
    const existing = await db.post.findUnique({ where: { id }, select: { title: true } });
    if (!existing) {
      return NextResponse.json({ error: "Artikel tidak ditemukan." }, { status: 404 });
    }
    await db.post.delete({ where: { id } });
    await logActivity(session.username, "DELETE", `Menghapus artikel “${existing.title.slice(0, 60)}”`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("DELETE /api/admin/posts/[id] error:", e);
    return NextResponse.json({ error: "Gagal menghapus artikel." }, { status: 500 });
  }
}
