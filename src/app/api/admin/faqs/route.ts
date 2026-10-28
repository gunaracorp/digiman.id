import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { requireAdminOrDenied } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

type Body = Record<string, unknown>;

/** GET — semua FAQ urut `order` asc. */
export async function GET(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const rows = await db.faq.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(rows);
  } catch (e) {
    console.error("[api/admin/faqs GET]", e);
    return NextResponse.json({ error: "Gagal memuat FAQ." }, { status: 500 });
  }
}

/** POST — create {question, answer, visible, order}. */
export async function POST(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const body = (await req.json().catch(() => ({}))) as Body;

    const question = String(body.question ?? "").trim();
    const answer = String(body.answer ?? "").trim();
    if (!question || !answer)
      return NextResponse.json(
        { error: "Pertanyaan dan jawaban wajib diisi." },
        { status: 400 },
      );

    const created = await db.faq.create({
      data: {
        question,
        answer,
        visible: body.visible === undefined ? true : Boolean(body.visible),
        order: Number(body.order) || 0,
      },
    });

    return NextResponse.json({ ok: true, faq: created }, { status: 201 });
  } catch (e) {
    console.error("[api/admin/faqs POST]", e);
    return NextResponse.json({ error: "Gagal menambah FAQ." }, { status: 500 });
  }
}

/** PUT ?id= — update parsial. */
export async function PUT(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Parameter id wajib." },
        { status: 400 },
      );

    const body = (await req.json().catch(() => ({}))) as Body;
    const data: Prisma.FaqUpdateInput = {};

    if (typeof body.question === "string" && body.question.trim())
      data.question = body.question.trim();
    if (typeof body.answer === "string" && body.answer.trim())
      data.answer = body.answer.trim();
    if (typeof body.visible === "boolean") data.visible = body.visible;
    if (body.order !== undefined) data.order = Number(body.order) || 0;

    const updated = await db.faq
      .update({ where: { id }, data })
      .catch(() => null);
    if (!updated)
      return NextResponse.json(
        { error: "FAQ tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({ ok: true, faq: updated });
  } catch (e) {
    console.error("[api/admin/faqs PUT]", e);
    return NextResponse.json(
      { error: "Gagal memperbarui FAQ." },
      { status: 500 },
    );
  }
}

/** DELETE ?id= */
export async function DELETE(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Parameter id wajib." },
        { status: 400 },
      );

    const deleted = await db.faq.delete({ where: { id } }).catch(() => null);
    if (!deleted)
      return NextResponse.json({ error: "FAQ tidak ditemukan." }, { status: 404 });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/admin/faqs DELETE]", e);
    return NextResponse.json({ error: "Gagal menghapus FAQ." }, { status: 500 });
  }
}
