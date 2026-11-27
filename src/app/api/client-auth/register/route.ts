import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword, signClientSession, clientSessionCookieOptions, CLIENT_SESSION_COOKIE } from "@/lib/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/client-auth/register — pendaftaran akun klien Portal Klien.
 * Body: { name, email, password, company?, phone? }
 * Setelah sukses, sesi klien langsung di-set (cookie httpOnly).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Nama wajib diisi (min. 2 karakter)." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password minimal 8 karakter." }, { status: 400 });
    }

    const existing = await db.clientUser.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Email sudah terdaftar. Silakan masuk dengan password Anda." },
        { status: 409 }
      );
    }

    const user = await db.clientUser.create({
      data: {
        email,
        passwordHash: hashPassword(password),
        name: name.slice(0, 80),
        company: company ? company.slice(0, 120) : null,
        phone: phone ? phone.slice(0, 32) : null,
      },
    });

    const token = await signClientSession({ sub: user.id, email: user.email, name: user.name });
    const res = NextResponse.json({
      ok: true,
      user: { email: user.email, name: user.name, company: user.company },
    });
    res.cookies.set(CLIENT_SESSION_COOKIE, token, clientSessionCookieOptions);
    return res;
  } catch (e) {
    console.error("POST /api/client-auth/register error:", e);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
