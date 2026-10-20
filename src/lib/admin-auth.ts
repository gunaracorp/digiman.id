import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
// KANONIK — dibuat oleh agen 6-c karena file belum ada saat
// pengembangan fitur Blog. Implementasi persis mengikuti kontrak
// worklog 6-0: cookie "gunara_admin" + tabel AdminSession.
// Agen lain (6-e dst.) dipersilakan memakai apa adanya.
// ─────────────────────────────────────────────────────────────

export const ADMIN_COOKIE = "gunara_admin";

export async function isAdmin(): Promise<boolean> {
  const c = await cookies();
  const token = c.get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  const s = await db.adminSession.findUnique({ where: { token } });
  return !!s && s.expiresAt > new Date();
}

export async function requireAdmin(): Promise<NextResponse | null> {
  if (await isAdmin()) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function adminPassword(): Promise<string> {
  const s = await db.siteSetting.findUnique({ where: { key: "adminPassword" } });
  return s?.value ?? "gunara165";
}
