/**
 * /api/admin/proposals — CRUD penawaran untuk panel admin.
 * Semua method dijaga cookie "gunara_admin" via requireAdmin() (401 bila gagal).
 *
 * GET    /api/admin/proposals            → semua penawaran (createdAt desc), {proposals}
 * GET    /api/admin/proposals?status=…   → filter status (DRAFT|SENT|NEGOTIATION|WON|LOST)
 * GET    /api/admin/proposals?id=…       → detail 1 penawaran terparse, {proposal}
 * PATCH  /api/admin/proposals?id=…       → update {status, notes?} → {proposal}
 * DELETE /api/admin/proposals?id=…       → hapus → {ok:true}
 *
 * Error: 400 (validasi), 401 (belum login admin), 404 (id tak ada), 500.
 */
import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { requireAdminOrDenied } from "@/lib/admin-guard";
import {
  parseProposal,
  PROPOSAL_STATUSES,
  type ProposalStatus,
} from "@/lib/proposal-calc";

export const dynamic = "force-dynamic";

const MAX_NOTES = 2000;

function bad(message: string): NextResponse {
  return NextResponse.json({ error: message }, { status: 400 });
}

function notFound(): NextResponse {
  return NextResponse.json({ error: "Penawaran tidak ditemukan." }, { status: 404 });
}

function isStatus(value: unknown): value is ProposalStatus {
  return typeof value === "string" && (PROPOSAL_STATUSES as readonly string[]).includes(value);
}

// ───────────────────────────────── GET ───────────────────────────────────

export async function GET(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;
  try {
    const params = req.nextUrl.searchParams;
    const id = params.get("id")?.trim() ?? "";

    if (id) {
      const row = await db.proposal.findUnique({ where: { id } });
      if (!row) return notFound();
      return NextResponse.json({ proposal: parseProposal(row) });
    }

    const statusParam = params.get("status")?.trim() ?? "";
    if (statusParam && !isStatus(statusParam)) {
      return bad(
        `Status tidak valid. Gunakan salah satu dari: ${PROPOSAL_STATUSES.join(", ")}.`,
      );
    }

    const rows = await db.proposal.findMany({
      where: statusParam ? { status: statusParam } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      { proposals: rows.map(parseProposal) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[api/admin/proposals][GET]", error);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

// ───────────────────────────────── PATCH ─────────────────────────────────

export async function PATCH(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;
  try {
    const id = req.nextUrl.searchParams.get("id")?.trim() ?? "";
    if (!id) return bad("Parameter id wajib diisi.");

    const existing = await db.proposal.findUnique({ where: { id } });
    if (!existing) return notFound();

    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || typeof body !== "object") return bad("Body JSON tidak valid.");

    if (!isStatus(body.status)) {
      return bad(
        `Status wajib salah satu dari: ${PROPOSAL_STATUSES.join(", ")}.`,
      );
    }

    const data: { status: string; notes?: string } = { status: body.status };
    if (body.notes !== undefined) {
      if (typeof body.notes !== "string") return bad("notes harus berupa string.");
      data.notes = body.notes.trim().slice(0, MAX_NOTES);
    }

    const row = await db.proposal.update({ where: { id }, data });
    return NextResponse.json({ ok: true, proposal: parseProposal(row) });
  } catch (error) {
    console.error("[api/admin/proposals][PATCH]", error);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

// ───────────────────────────────── DELETE ────────────────────────────────

export async function DELETE(req: NextRequest) {
  const denied = await requireAdminOrDenied(req);
  if (denied) return denied;
  try {
    const id = req.nextUrl.searchParams.get("id")?.trim() ?? "";
    if (!id) return bad("Parameter id wajib diisi.");

    const existing = await db.proposal.findUnique({ where: { id } });
    if (!existing) return notFound();

    await db.proposal.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/admin/proposals][DELETE]", error);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
