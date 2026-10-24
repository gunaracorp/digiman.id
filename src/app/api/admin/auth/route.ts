import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHash, randomUUID, timingSafeEqual } from "crypto";
import { db } from "@/lib/db";
import { ADMIN_COOKIE, adminPassword, isAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 hari
const COOKIE_MAX_AGE = 604800; // 7 hari (detik)

/** Hash agar perbandingan constant-time aman untuk panjang string berapa pun. */
function hashPw(s: string): Buffer {
  return createHash("sha256").update(s, "utf8").digest();
}

export async function GET() {
  try {
    return NextResponse.json({ authenticated: await isAdmin() });
  } catch (e) {
    console.error("[api/admin/auth GET]", e);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req
      .json()
      .catch(() => ({}))) as { action?: string; password?: string };

    // ── Logout: hapus sesi + cookie ──
    if (body.action === "logout") {
      const store = await cookies();
      const token = store.get(ADMIN_COOKIE)?.value;
      if (token) await db.adminSession.deleteMany({ where: { token } });
      const res = NextResponse.json({ ok: true });
      res.cookies.set(ADMIN_COOKIE, "", {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        maxAge: 0,
      });
      return res;
    }

    // ── Login: bandingkan password (constant-time) lalu buat sesi ──
    const password = typeof body.password === "string" ? body.password : "";
    const expected = await adminPassword();
    const match = timingSafeEqual(hashPw(password), hashPw(expected));
    if (!match) {
      return NextResponse.json(
        { ok: false, error: "Password salah." },
        { status: 401 },
      );
    }

    const token = randomUUID();
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
    await db.adminSession.create({ data: { token, expiresAt } });

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
    });
    return res;
  } catch (e) {
    console.error("[api/admin/auth POST]", e);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan server." },
      { status: 500 },
    );
  }
}
