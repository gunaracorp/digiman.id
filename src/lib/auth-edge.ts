/**
 * Fungsi auth yang AMAN untuk Edge Runtime (dipakai middleware).
 * Hanya JWT via jose + konstanta cookie — tanpa node:crypto.
 */
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "digiman_admin";
const SESSION_TTL = "7d";

function secretKey(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    // Produksi TANPA AUTH_SECRET = token admin dapat dipalsukan siapa pun
    // yang tahu fallback lama. Fail-closed: login & sesi admin ditolak,
    // website publik tetap berjalan normal.
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "AUTH_SECRET belum diset — wajib diisi di environment produksi (min. 32 karakter acak)."
      );
    }
    return new TextEncoder().encode(
      "digiman-dev-secret-jangan-dipakai-produksi"
    );
  }
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  sub: string;
  username: string;
  name: string;
  role: string; // SUPERADMIN | EDITOR | VIEWER
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ username: payload.username, name: payload.name, role: payload.role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(SESSION_TTL)
    .sign(secretKey());
}

export async function verifySession(token: string | undefined | null): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    if (!payload.sub) return null;
    return {
      sub: payload.sub,
      username: String(payload.username ?? ""),
      name: String(payload.name ?? "Administrator"),
      role: String(payload.role ?? "SUPERADMIN"),
    };
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 hari
};

/* ─── Sesi klien Portal Klien (#/dashboard) — cookie terpisah dari admin ─── */

export const CLIENT_SESSION_COOKIE = "digiman_client";
const CLIENT_SESSION_TTL = "7d";

export interface ClientSessionPayload {
  sub: string;
  email: string;
  name: string;
}

/** Token sesi klien: role disematkan "CLIENT" agar tak tertukar dengan sesi admin. */
export async function signClientSession(payload: ClientSessionPayload): Promise<string> {
  return new SignJWT({ email: payload.email, name: payload.name, role: "CLIENT" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(CLIENT_SESSION_TTL)
    .sign(secretKey());
}

export async function verifyClientSession(token: string | undefined | null): Promise<ClientSessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    if (!payload.sub || String(payload.role ?? "") !== "CLIENT") return null;
    return {
      sub: payload.sub,
      email: String(payload.email ?? "").toLowerCase(),
      name: String(payload.name ?? "Klien"),
    };
  } catch {
    return null;
  }
}

export const clientSessionCookieOptions = {
  ...sessionCookieOptions,
};

/** Ambil sesi klien dari nilai cookie (dipakai route handler & middleware). */
export async function getClientSessionFromToken(token: string | undefined | null) {
  return verifyClientSession(token);
}
