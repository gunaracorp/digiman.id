import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

const MASK = "••••••";

/** GET — list SiteSetting; value adminPassword disamarkan. */
export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const rows = await db.siteSetting.findMany({
      orderBy: { key: "asc" },
    });
    return NextResponse.json(
      rows.map((r) =>
        r.key === "adminPassword"
          ? { key: r.key, value: MASK, masked: true }
          : { key: r.key, value: r.value },
      ),
    );
  } catch (e) {
    console.error("[api/admin/settings GET]", e);
    return NextResponse.json(
      { error: "Gagal memuat pengaturan." },
      { status: 500 },
    );
  }
}

/**
 * PUT {key, value} — upsert SiteSetting.
 * Untuk adminPassword: hanya diterima bila value bukan mask dan panjang ≥ 6.
 */
export async function PUT(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const body = (await req.json().catch(() => ({}))) as {
      key?: string;
      value?: string;
    };

    const key = (body.key ?? "").trim();
    const value = body.value;
    if (!key || typeof value !== "string")
      return NextResponse.json(
        { error: "Payload tidak valid — key dan value wajib." },
        { status: 400 },
      );

    if (key === "adminPassword") {
      if (value === MASK || value.trim().length < 6) {
        return NextResponse.json(
          { error: "Password baru tidak valid (minimal 6 karakter)." },
          { status: 400 },
        );
      }
      const setting = await db.siteSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      });
      return NextResponse.json({ ok: true, masked: true, setting: { key: setting.key, value: MASK, masked: true } });
    }

    const setting = await db.siteSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
    return NextResponse.json({ ok: true, setting });
  } catch (e) {
    console.error("[api/admin/settings PUT]", e);
    return NextResponse.json(
      { error: "Gagal menyimpan pengaturan." },
      { status: 500 },
    );
  }
}
