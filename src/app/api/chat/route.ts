import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { db } from "@/lib/db";
import {
  DEFAULT_SERVICES,
  PAKET_TIERS,
  DEFAULT_FAQS,
  DEFAULT_SETTINGS,
} from "@/lib/digiman-data";

interface ChatPayload {
  sessionId?: string;
  message?: string;
}

/** Bangun system prompt berisi pengetahuan lengkap DIGIMAN.ID */
function buildSystemPrompt(): string {
  const katalog = DEFAULT_SERVICES.map((s) => `- ${s.title} (${s.price}): ${s.desc}`).join("\n");
  const paket = PAKET_TIERS.map((p) => `- Paket ${p.name} — ${p.entity}: ${p.price} (${p.priceNote})`).join("\n");
  const faq = DEFAULT_FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");
  const s = DEFAULT_SETTINGS;

  return `Kamu adalah "Digi AI", asisten virtual resmi DIGIMAN.ID (PT Digital Bisnis Manajemen) — perusahaan konsultan legalitas bisnis & digitalisasi di Indonesia. Pendiri: Gugun Gunara. Berdiri ${s.established} (SK ${s.skNumber}).

KARAKTER:
- Ramah, cepat, solutif, profesional tapi tidak kaku. Panggil user "Kak" atau "Bapak/Ibu".
- SELALU jawab dalam Bahasa Indonesia. Jawaban ringkas: maksimal 120 kata kecuali diminta detail.
- Kamu HANYA menjawab seputar layanan DIGIMAN.ID, legalitas usaha Indonesia, dan topik bisnis terkait. Topik lain: arahkan kembali dengan sopan.
- Jangan mengarang harga/regulasi. Pakai data katalog di bawah. Untuk hal di luar data, sarankan konsultasi gratis.

DATA PERUSAHAAN:
- WhatsApp: ${s.waDisplay} | Email: ${s.email} | Jam kerja: ${s.hours}
- Alamat: ${s.addressShort} + cabang Bandung, Sukarame, Arjasari. Layanan 100% online untuk seluruh Indonesia (TTE tersertifikasi).
- Statistik: ${s.statClients}+ klien, ${s.statExperts} dewan pakar, 98%+ dokumen terbit tepat waktu. Ada "Garansi Terbit" (ulang tanpa biaya jika gagal karena kesalahan kami).

KATALOG LAYANAN (harga mulai):
${katalog}

PAKET HARGA:
${paket}

KONSEP "7 LAPIS LANGIT": perjalanan legalitas bisnis bertahap — 1. Badan hukum resmi (akta & SK), 2. NIB & perizinan OSS, 3. Pajak & ketenagakerjaan, 4. Kekayaan intelektual (merek dsb), 5. Sertifikasi produk (halal/BPOM/SNI/ISO), 6. Ekspansi & investasi (PMA/KITAS), 7. Transformasi digital (website, AI, otomasi).

FAQ UMUM:
${faq}

PANDUAN PENUTUPAN:
- Akhiri jawaban yang relevan dengan ajakan lembut, misal: "Mau saya bantu hubungkan dengan dewan pakar kami? Tinggal chat WhatsApp ${s.waDisplay} atau isi form di bagian Kontak ya, Kak."
- Jika user tertarik pada layanan tertentu, dorong ke konsultasi gratis. Jangan pernah memaksa.`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatPayload;
    const message = (body.message ?? "").trim();
    const sessionId = (body.sessionId ?? "").trim() || "anon";

    if (!message) {
      return NextResponse.json({ error: "Pesan kosong." }, { status: 400 });
    }
    if (message.length > 1000) {
      return NextResponse.json({ error: "Pesan terlalu panjang." }, { status: 400 });
    }

    // Riwayat percakapan sesi ini (12 pesan terakhir agar konteks terjaga)
    let history: { role: "user" | "assistant"; content: string }[] = [];
    try {
      const rows = await db.chatLog.findMany({
        where: { sessionId },
        orderBy: { createdAt: "desc" },
        take: 12,
      });
      history = rows
        .reverse()
        .map((r) => ({ role: (r.role === "assistant" ? "assistant" : "user") as "user" | "assistant", content: r.content }));
    } catch {
      history = [];
    }

    await db.chatLog.create({ data: { sessionId, role: "user", content: message } });

    const zai = await ZAI.create();
    const completion = await zai.chat.completions.create({
      messages: [
        { role: "assistant", content: buildSystemPrompt() },
        ...history,
        { role: "user", content: message },
      ],
      thinking: { type: "disabled" },
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) throw new Error("Respon AI kosong");

    await db.chatLog.create({ data: { sessionId, role: "assistant", content: reply } });

    return NextResponse.json({ reply });
  } catch (e) {
    console.error("[api/chat]", e);
    return NextResponse.json(
      { error: "Asisten sedang sibuk. Silakan coba lagi atau chat WhatsApp kami." },
      { status: 500 }
    );
  }
}
