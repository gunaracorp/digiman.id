import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cleanStr, logActivity, requireAdmin, requireWrite, toInt } from "@/lib/admin-guard";

/** Slug aman URL: huruf kecil, angka, tanda hubung */
function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

/** Pastikan slug unik — tambah sufiks -2, -3, … bila bentrok */
async function uniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const root = slugify(base) || `artikel-${Date.now()}`;
  let candidate = root;
  let i = 2;
  for (;;) {
    const existing = await db.post.findUnique({ where: { slug: candidate }, select: { id: true } });
    if (!existing || existing.id === ignoreId) return candidate;
    candidate = `${root}-${i++}`;
  }
}

/** Estimasi menit baca dari panjang konten bila tidak diisi wajar */
function estimateReadMinutes(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.min(60, Math.round(words / 200)));
}

export async function GET(req: NextRequest) {
  const session = await requireAdmin(req);
  if (!session) return NextResponse.json({ error: "Tidak terautentikasi." }, { status: 401 });

  const posts = await db.post.findMany({ orderBy: [{ date: "desc" }, { createdAt: "desc" }] });
  const now = Date.now();
  return NextResponse.json({
    posts: posts.map((p) => ({
      ...p,
      // status tampilan: Draf | Terjadwal (tanggal masa depan) | Tayang
      state: !p.published ? "DRAFT" : p.date.getTime() > now ? "SCHEDULED" : "LIVE",
    })),
  });
}

export async function POST(req: NextRequest) {
  const session = await requireWrite(req, "posts");
  if (session instanceof NextResponse) return session;

  try {
    const body = await req.json();
    const title = cleanStr(body.title, 150);
    if (!title) {
      return NextResponse.json({ error: "Judul artikel wajib diisi." }, { status: 400 });
    }

    // Konten: JSON sections (disarankan) atau teks polos — disimpan apa adanya
    const content = typeof body.content === "string" ? body.content : "";
    const date = body.date ? new Date(String(body.date)) : new Date();
    if (Number.isNaN(date.getTime())) {
      return NextResponse.json({ error: "Tanggal terbit tidak valid." }, { status: 400 });
    }

    const payload = {
      title,
      excerpt: cleanStr(body.excerpt, 400),
      content,
      tags: cleanStr(body.tags, 300),
      readMinutes: Math.max(1, toInt(body.readMinutes, estimateReadMinutes(content))),
      author: cleanStr(body.author, 80) || "Dewan Pakar DIGIMAN.ID",
      published: body.published === undefined ? true : Boolean(body.published),
      date,
    };

    if (body.id) {
      const id = String(body.id);
      const slug = body.slug ? await uniqueSlug(String(body.slug), id) : await uniqueSlug(title, id);
      const updated = await db.post.update({
        where: { id },
        data: { ...payload, slug },
      });
      await logActivity(session.username, "UPDATE", `Mengubah artikel “${title.slice(0, 60)}”`);
      return NextResponse.json({ post: updated });
    }

    const slug = await uniqueSlug(body.slug ? String(body.slug) : title);
    const created = await db.post.create({ data: { ...payload, slug } });
    await logActivity(
      session.username,
      "CREATE",
      `Menambah artikel “${title.slice(0, 60)}”${date.getTime() > Date.now() ? " (terjadwal)" : ""}`
    );
    return NextResponse.json({ post: created }, { status: 201 });
  } catch (e) {
    console.error("POST /api/admin/posts error:", e);
    return NextResponse.json({ error: "Gagal menyimpan artikel." }, { status: 500 });
  }
}
