import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { requireAdminOrDenied } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

type Body = Record<string, unknown>;

function clampRating(v: unknown): number {
  const n = Number(v);
  if (!Number.isFinite(n)) return 5;
  return Math.min(5, Math.max(1, Math.round(n)));
}

/** GET — semua testimoni urut `order` asc. */
export async function GET(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const rows = await db.testimonial.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(rows);
  } catch (e) {
    console.error("[api/admin/testimonials GET]", e);
    return NextResponse.json(
      { error: "Gagal memuat testimoni." },
      { status: 500 },
    );
  }
}

/** POST — create {name, role, text, rating, visible, order}. */
export async function POST(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const body = (await req.json().catch(() => ({}))) as Body;

    const name = String(body.name ?? "").trim();
    const text = String(body.text ?? "").trim();
    if (!name || !text)
      return NextResponse.json(
        { error: "Nama dan isi testimoni wajib diisi." },
        { status: 400 },
      );

    const created = await db.testimonial.create({
      data: {
        name,
        role: String(body.role ?? "").trim(),
        text,
        rating: clampRating(body.rating),
        visible: body.visible === undefined ? true : Boolean(body.visible),
        order: Number(body.order) || 0,
      },
    });

    return NextResponse.json({ ok: true, testimonial: created }, { status: 201 });
  } catch (e) {
    console.error("[api/admin/testimonials POST]", e);
    return NextResponse.json(
      { error: "Gagal menambah testimoni." },
      { status: 500 },
    );
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
    const data: Prisma.TestimonialUpdateInput = {};

    if (typeof body.name === "string" && body.name.trim())
      data.name = body.name.trim();
    if (typeof body.role === "string") data.role = body.role.trim();
    if (typeof body.text === "string" && body.text.trim())
      data.text = body.text.trim();
    if (body.rating !== undefined) data.rating = clampRating(body.rating);
    if (typeof body.visible === "boolean") data.visible = body.visible;
    if (body.order !== undefined) data.order = Number(body.order) || 0;

    const updated = await db.testimonial
      .update({ where: { id }, data })
      .catch(() => null);
    if (!updated)
      return NextResponse.json(
        { error: "Testimoni tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({ ok: true, testimonial: updated });
  } catch (e) {
    console.error("[api/admin/testimonials PUT]", e);
    return NextResponse.json(
      { error: "Gagal memperbarui testimoni." },
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

    const deleted = await db.testimonial
      .delete({ where: { id } })
      .catch(() => null);
    if (!deleted)
      return NextResponse.json(
        { error: "Testimoni tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/admin/testimonials DELETE]", e);
    return NextResponse.json(
      { error: "Gagal menghapus testimoni." },
      { status: 500 },
    );
  }
}
