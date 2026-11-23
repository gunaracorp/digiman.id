import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

/**
 * POST /api/genesis-contact
 * Pernikahan dua arsitektur: form Genesis (konsep pertama, skema zod
 * bersama) dipersistenkan ke tabel ContactMessage milik situs repo —
 * pesan masuk langsung tampil di kotak masuk panel admin (/admin/pesan).
 * Validasi zod + rate limit 5/menit/IP.
 */
export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const { ok, retryAfter } = rateLimit(`genesis-contact:${ip}`);
    if (!ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Terlalu banyak permintaan. Silakan coba lagi dalam sekejap.",
        },
        {
          status: 429,
          headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined,
        }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Format permintaan tidak valid." },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Data yang dikirim tidak valid.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, phone, topic, budget, message } = parsed.data;

    // Pemetaan ke ContactMessage (model repo):
    // - phone wajib di model → "-" bila kosong
    // - service membawa topik + anggaran
    // - company dititipkan di baris pertama pesan
    const serviceLine = [topic, budget].filter(Boolean).join(" · ");
    const fullMessage = company
      ? `[Perusahaan: ${company}]\n${message}`
      : message;

    await db.contactMessage.create({
      data: {
        name,
        email,
        phone: phone ? phone : "-",
        service: serviceLine ? serviceLine : null,
        message: fullMessage,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/genesis-contact]", error);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan pada server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
