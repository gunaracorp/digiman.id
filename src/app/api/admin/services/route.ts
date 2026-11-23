import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { requireAdminOrDenied } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

type Body = Record<string, unknown>;

function slugify(v: string): string {
  return v
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

async function uniqueSlug(base: string, excludeId?: string): Promise<string> {
  const root = slugify(base) || "layanan";
  let candidate = root;
  let i = 2;
  for (;;) {
    const clash = await db.service.findFirst({
      where: { slug: candidate, ...(excludeId ? { NOT: { id: excludeId } } : {}) },
      select: { id: true },
    });
    if (!clash) return candidate;
    candidate = `${root}-${i++}`;
  }
}

function parseArr(s: string): string[] {
  try {
    const v = JSON.parse(s);
    return Array.isArray(v) ? v.map(String) : [];
  } catch {
    return [];
  }
}

function serialize(row: Awaited<ReturnType<typeof db.service.findFirst>>) {
  if (!row) return null;
  return { ...row, features: parseArr(row.features) };
}

/** GET — semua layanan urut `order` asc. features di-parse jadi array. */
export async function GET(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const rows = await db.service.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(rows.map((r) => serialize(r)));
  } catch (e) {
    console.error("[api/admin/services GET]", e);
    return NextResponse.json({ error: "Gagal memuat layanan." }, { status: 500 });
  }
}

/** POST — create. slug otomatis dari title bila kosong (+suffix unik). */
export async function POST(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const body = (await req.json().catch(() => ({}))) as Body;

    const title = String(body.title ?? "").trim();
    if (!title)
      return NextResponse.json(
        { error: "Judul layanan wajib diisi." },
        { status: 400 },
      );

    const features = Array.isArray(body.features)
      ? body.features.map(String)
      : [];
    const slug = await uniqueSlug(
      typeof body.slug === "string" && body.slug.trim() ? body.slug : title,
    );

    const created = await db.service.create({
      data: {
        slug,
        title,
        desc: String(body.desc ?? "").trim(),
        price: String(body.price ?? "").trim(),
        features: JSON.stringify(features),
        icon: String(body.icon ?? "").trim() || "Sparkles",
        category: String(body.category ?? "").trim() || "Umum",
        featured: Boolean(body.featured),
        visible: body.visible === undefined ? true : Boolean(body.visible),
        order: Number(body.order) || 0,
      },
    });

    return NextResponse.json(
      { ok: true, service: serialize(created) },
      { status: 201 },
    );
  } catch (e) {
    console.error("[api/admin/services POST]", e);
    return NextResponse.json(
      { error: "Gagal menambah layanan." },
      { status: 500 },
    );
  }
}

/** PUT ?id= — update parsial sesuai field yang dikirim. */
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
    const data: Prisma.ServiceUpdateInput = {};

    if (typeof body.title === "string" && body.title.trim())
      data.title = body.title.trim();
    if (typeof body.desc === "string") data.desc = body.desc.trim();
    if (typeof body.price === "string") data.price = body.price.trim();
    if (typeof body.icon === "string" && body.icon.trim())
      data.icon = body.icon.trim();
    if (typeof body.category === "string" && body.category.trim())
      data.category = body.category.trim();
    if (Array.isArray(body.features))
      data.features = JSON.stringify(body.features.map(String));
    if (typeof body.featured === "boolean") data.featured = body.featured;
    if (typeof body.visible === "boolean") data.visible = body.visible;
    if (body.order !== undefined) data.order = Number(body.order) || 0;

    if (typeof body.slug === "string" && body.slug.trim()) {
      data.slug = await uniqueSlug(body.slug, id);
    }

    const updated = await db.service
      .update({ where: { id }, data })
      .catch(() => null);
    if (!updated)
      return NextResponse.json(
        { error: "Layanan tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({ ok: true, service: serialize(updated) });
  } catch (e) {
    console.error("[api/admin/services PUT]", e);
    return NextResponse.json(
      { error: "Gagal memperbarui layanan." },
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

    const deleted = await db.service
      .delete({ where: { id } })
      .catch(() => null);
    if (!deleted)
      return NextResponse.json(
        { error: "Layanan tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/admin/services DELETE]", e);
    return NextResponse.json(
      { error: "Gagal menghapus layanan." },
      { status: 500 },
    );
  }
}
