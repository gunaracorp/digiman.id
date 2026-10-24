import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

/** GET ?handled=true|false (opsional) — list pesan kontak terbaru, maks 200. */
export async function GET(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const handled = new URL(req.url).searchParams.get("handled");
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

/** PATCH ?id= {handled:boolean} */
export async function PATCH(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

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
      .update({ where: { id }, data: { handled } })
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
  const denied = await requireAdmin();
  if (denied) return denied;

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
