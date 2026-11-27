import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyPassword, signClientSession, clientSessionCookieOptions, CLIENT_SESSION_COOKIE } from "@/lib/auth";

/** Rate limit login sederhana in-memory: maks 8 percobaan / 5 menit per kombinasi ip+email */
const attempts = new Map<string, { count: number; resetAt: number }>();
function loginBlocked(key: string): { blocked: boolean; retryIn: number } {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 0, resetAt: now + 5 * 60 * 1000 });
    return { blocked: false, retryIn: 0 };
  }
  return { blocked: entry.count >= 8, retryIn: Math.ceil((entry.resetAt - now) / 1000) };
}
function recordAttempt(key: string) {
  const entry = attempts.get(key);
  if (entry) entry.count += 1;
}
function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local"
  );
}

/**
 * POST /api/client-auth/login — masuk Portal Klien (#/dashboard).
 * Body: { email, password }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const rateKey = `${clientIp(req)}:${email}`;

    if (!email || !password) {
      return NextResponse.json({ error: "Email dan password wajib diisi." }, { status: 400 });
    }

    const { blocked, retryIn } = loginBlocked(rateKey);
    if (blocked) {
      return NextResponse.json(
        { error: `Terlalu banyak percobaan gagal. Coba lagi dalam ${retryIn} detik.` },
        { status: 429 }
      );
    }

    const user = await db.clientUser.findUnique({ where: { email } });

    // Jeda kecil untuk memperlambat brute force
    if (!user || !verifyPassword(password, user.passwordHash)) {
      recordAttempt(rateKey);
      await new Promise((r) => setTimeout(r, 500));
      return NextResponse.json({ error: "Email atau password salah." }, { status: 401 });
    }

    attempts.delete(rateKey);
    const token = await signClientSession({ sub: user.id, email: user.email, name: user.name });
    const res = NextResponse.json({
      ok: true,
      user: { email: user.email, name: user.name, company: user.company },
    });
    res.cookies.set(CLIENT_SESSION_COOKIE, token, clientSessionCookieOptions);
    await db.clientUser.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } }).catch(() => {});
    return res;
  } catch (e) {
    console.error("POST /api/client-auth/login error:", e);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
