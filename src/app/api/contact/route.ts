import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

interface ContactPayload {
  nama?: string;
  email?: string;
  wa?: string;
  layanan?: string;
  pesan?: string;
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot — bot terdeteksi: balas sukses tanpa simpan
    if (typeof body.company === "string" && body.company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const nama = (body.nama ?? "").trim();
    const email = (body.email ?? "").trim();
    const wa = (body.wa ?? "").trim();
    const layanan = (body.layanan ?? "").trim();
    const pesan = (body.pesan ?? "").trim();

    const errors: Record<string, string> = {};
    if (nama.length < 3) errors.nama = "Nama lengkap minimal 3 karakter.";
    if (!EMAIL_RE.test(email)) errors.email = "Email tidak valid.";
    const digits = wa.replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 15) errors.wa = "Nomor WhatsApp tidak valid.";
    if (pesan.length < 10) errors.pesan = "Pesan minimal 10 karakter.";

    if (Object.keys(errors).length > 0 || !nama || !email || !wa || !pesan) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    await db.contactMessage.create({
      data: {
        name: nama,
        email,
        phone: digits,
        service: layanan || null,
        message: pesan,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/contact]", e);
    return NextResponse.json({ ok: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
