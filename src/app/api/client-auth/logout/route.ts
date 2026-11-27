import { NextResponse } from "next/server";
import { CLIENT_SESSION_COOKIE, clientSessionCookieOptions } from "@/lib/auth";

/** POST /api/client-auth/logout — keluar Portal Klien (hapus cookie sesi). */
export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(CLIENT_SESSION_COOKIE, "", { ...clientSessionCookieOptions, maxAge: 0 });
  return res;
}
