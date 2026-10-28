import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/messages
 * - ?filter=all|new|starred|archived  → { messages, counts } (panel admin baru)
 * - ?handled=true|false               → array pesan (kompatibilitas panel lama)
 * - tanpa parameter                   → array pesan terbaru (maks 200)
 */
export async function GET(req: NextRequest) {
  const session = await requireAdmin(req);
  if (!session) return NextResponse.json({ error: "Tidak terautentikasi." }, { status: 401 });

  try {
    const sp = new URL(req.url).searchParams;
    const filter = sp.get("filter");

    if (filter !== undefined && filter !== null) {
      const f = filter || "all";
      const where =
        f === "new"
          ? { status: "NEW" }
          : f === "starred"
            ? { starred: true }
            : f === "archived"
              ? { status: "ARCHIVED" }
              : {};

      const [rows, countNew, countStarred, countArchived] = await Promise.all([
        db.contactMessage.findMany({
          where: f === "all" ? { status: { not: "ARCHIVED" } } : where,
          orderBy: [{ starred: "desc" }, { createdAt: "desc" }],
          take: 200,
        }),
        db.contactMessage.count({ where: { status: "NEW" } }),
        db.contactMessage.count({ where: { starred: true } }),
        db.contactMessage.count({ where: { status: "ARCHIVED" } }),
      ]);
      const total = await db.contactMessage.count();

      return NextResponse.json({
        messages: rows,
        counts: {
          new: countNew,
          starred: countStarred,
          archived: countArchived,
          inbox: total - countArchived,
          total,
        },
      });
    }

    // Format legacy (?handled=true|false atau tanpa parameter)
    const handled = sp.get("handled");
    const where =
      handled === "true" || handled === "false"
        ? { handled: handled === "true" }
        : undefined;

    const messages = await db.contactMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 200,
    });
    return NextResponse.json(messages);
  } catch (e) {
    console.error("[api/admin/messages GET]", e);
    return NextResponse.json(
      { error: "Gagal memuat pesan." },
      { status: 500 },
    );
  }
}

/** PATCH ?id= {handled:boolean} — format legacy panel lama. */
export async function PATCH(req: NextRequest) {
  const session = await requireAdmin(req);
  if (!session) return NextResponse.json({ error: "Tidak terautentikasi." }, { status: 401 });

  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Parameter id wajib." },
        { status: 400 },
      );

    const body = (await req.json().catch(() => ({}))) as { handled?: unknown };
    const handled = Boolean(body.handled);

    const updated = await db.contactMessage
      .update({ where: { id }, data: { handled, status: handled ? "READ" : "NEW" } })
      .catch(() => null);
    if (!updated)
      return NextResponse.json(
        { error: "Pesan tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({ ok: true, message: updated });
  } catch (e) {
    console.error("[api/admin/messages PATCH]", e);
    return NextResponse.json({ error: "Gagal memperbarui pesan." }, { status: 500 });
  }
}

/** DELETE ?id= */
export async function DELETE(req: NextRequest) {
  const session = await requireAdmin(req);
  if (!session) return NextResponse.json({ error: "Tidak terautentikasi." }, { status: 401 });

  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Parameter id wajib." },
        { status: 400 },
      );

    await db.contactMessage.delete({ where: { id } }).catch(() => null);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/admin/messages DELETE]", e);
    return NextResponse.json({ error: "Gagal menghapus pesan." }, { status: 500 });
  }
}
