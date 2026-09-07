import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

/**
 * POST /api/contact
 * Validates (zod), rate-limits (5/min/IP), and persists the inquiry.
 */
export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const { ok, retryAfter } = rateLimit(`contact:${ip}`);
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
    await db.contactInquiry.create({
      data: {
        name,
        email,
        company: company ? company : null,
        phone: phone ? phone : null,
        topic,
        budget: budget ? budget : null,
        message,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan pada server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
