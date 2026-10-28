import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { requireAdminOrDenied } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

type Body = Record<string, unknown>;

function parseArr(s: string): string[] {
  try {
    const v = JSON.parse(s);
    return Array.isArray(v) ? v.map(String) : [];
  } catch {
    return [];
  }
}

/**
 * GET — 5 paket Gunara OS urut `order` asc.
 * features & documentCodes di-parse jadi array.
 */
export async function GET(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;

  try {
    const rows = await db.gunaraPackage.findMany({
      orderBy: [{ order: "asc" }, { code: "asc" }],
    });
    return NextResponse.json(
      rows.map((r) => ({
        ...r,
        features: parseArr(r.features),
        documentCodes: parseArr(r.documentCodes),
      })),
    );
  } catch (e) {
    console.error("[api/admin/packages GET]", e);
    return NextResponse.json(
      { error: "Gagal memuat paket." },
      { status: 500 },
    );
  }
}

/**
 * PUT ?id= — update parsial, HANYA field non-dokumen:
 * name, tagline, description, price, durationWeeks, features (string[]),
 * highlight, active, order.
 * documentCodes TIDAK boleh diubah (dikelola seed Gunara OS) — diabaikan.
 */
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
    const data: Prisma.GunaraPackageUpdateInput = {};

    if (typeof body.name === "string" && body.name.trim())
      data.name = body.name.trim();
    if (typeof body.tagline === "string") data.tagline = body.tagline.trim();
    if (typeof body.description === "string")
      data.description = body.description.trim();
    if (body.price !== undefined) data.price = Math.max(0, Number(body.price) || 0);
    if (typeof body.durationWeeks === "string" && body.durationWeeks.trim())
      data.durationWeeks = body.durationWeeks.trim();
    if (Array.isArray(body.features))
      data.features = JSON.stringify(body.features.map(String));
    if (typeof body.highlight === "boolean") data.highlight = body.highlight;
    if (typeof body.active === "boolean") data.active = body.active;
    if (body.order !== undefined) data.order = Number(body.order) || 0;

    // body.documentCodes sengaja DIABAIKAN — dikelola lewat seed Gunara OS.

    const updated = await db.gunaraPackage
      .update({ where: { id }, data })
      .catch(() => null);
    if (!updated)
      return NextResponse.json(
        { error: "Paket tidak ditemukan." },
        { status: 404 },
      );

    return NextResponse.json({
      ok: true,
      package: {
        ...updated,
        features: parseArr(updated.features),
        documentCodes: parseArr(updated.documentCodes),
      },
    });
  } catch (e) {
    console.error("[api/admin/packages PUT]", e);
    return NextResponse.json(
      { error: "Gagal memperbarui paket." },
      { status: 500 },
    );
  }
}
