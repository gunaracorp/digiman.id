import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyClientSession, CLIENT_SESSION_COOKIE } from "@/lib/auth";

/** GET /api/client-auth/me — cek sesi klien aktif (dipakai gate portal). */
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(CLIENT_SESSION_COOKIE)?.value;
    const session = await verifyClientSession(token);
    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    const user = await db.clientUser.findUnique({
      where: { id: session.sub },
      select: { email: true, name: true, company: true, lastLoginAt: true },
    });
    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    return NextResponse.json({ authenticated: true, user });
  } catch (e) {
    console.error("GET /api/client-auth/me error:", e);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
