import { NextResponse, type NextRequest } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import { parseBlogCard, parseBlogPost } from "@/lib/blog-types";

export const dynamic = "force-dynamic";

/**
 * CRUD blog untuk panel admin (guard cookie "gunara_admin" via requireAdmin).
 *
 * GET    /api/admin/blog        → semua artikel (termasuk unpublished), {posts}
 * GET    /api/admin/blog?id=    → detail 1 artikel apa pun, {post}
 * POST   /api/admin/blog        → create (slug auto dari title bila kosong + unik;
 *                                 publishedAt = now bila published) → 201 {post}
 * PUT    /api/admin/blog?id=    → update field yang dikirim → {post}
 * DELETE /api/admin/blog?id=    → hapus → {ok:true}
 *
 * Validasi: title min 3 karakter; slug regex [a-z0-9-]; slug unik.
 * Error: 401 (belum login admin), 400 (validasi), 404 (id tidak ada),
 *        409 (slug bentrok), 500 (kesalahan server).
 */

const SLUG_RE = /^[a-z0-9-]+$/;

interface BlogPayload {
  title?: unknown;
  slug?: unknown;
  excerpt?: unknown;
  content?: unknown;
  category?: unknown;
  tags?: unknown;
  readMinutes?: unknown;
  published?: unknown;
  publishedAt?: unknown;
}

function bad(message: string): NextResponse {
  return NextResponse.json({ error: message }, { status: 400 });
}

function slugify(input: string): string {
  const slug = input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || "artikel";
}

/** Pastikan slug unik; bila bentrok tambahkan sufiks -2, -3, dst. */
async function uniqueSlug(base: string): Promise<string> {
  let candidate = base;
  let i = 2;
  for (let guard = 0; guard < 50; guard += 1) {
    const found = await db.blogPost.findUnique({ where: { slug: candidate } });
    if (!found) return candidate;
    candidate = `${base}-${i}`;
    i += 1;
  }
  return `${base}-${Date.now()}`;
}

/** Terima tags sebagai array, JSON string, atau string dipisah koma. */
function normalizeTags(input: unknown): { tags?: string[]; error?: string } {
  if (input === undefined || input === null) return { tags: [] };
  if (Array.isArray(input)) {
    return { tags: input.map((t) => String(t).trim()).filter(Boolean) };
  }
  if (typeof input === "string") {
    const s = input.trim();
    if (!s) return { tags: [] };
    try {
      const parsed: unknown = JSON.parse(s);
      if (Array.isArray(parsed)) {
        return { tags: parsed.map((t) => String(t).trim()).filter(Boolean) };
      }
    } catch {
      // bukan JSON — fallback dipisah koma
    }
    return { tags: s.split(",").map((t) => t.trim()).filter(Boolean) };
  }
  return { error: "Format tags tidak valid." };
}

function deriveExcerpt(content: string): string {
  const plain = content
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[#>*_`~]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > 180 ? `${plain.slice(0, 180).trimEnd()}…` : plain;
}

/** readMinutes dari input admin; bila kosong → hitung dari jumlah kata (±200 kata/menit). */
function parseReadMinutes(input: unknown, content: string): number {
  const n =
    typeof input === "number"
      ? input
      : typeof input === "string"
        ? Number.parseInt(input, 10)
        : Number.NaN;
  if (Number.isFinite(n) && n >= 1 && n <= 120) return Math.round(n);
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parseDate(input: unknown): { date?: Date; error?: string } {
  if (typeof input !== "string" || !input.trim()) return {};
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return { error: "publishedAt bukan tanggal yang valid." };
  return { date: d };
}

// ─────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const id = req.nextUrl.searchParams.get("id")?.trim() ?? "";
    if (id) {
      const row = await db.blogPost.findUnique({ where: { id } });
      if (!row) {
        return NextResponse.json({ error: "Artikel tidak ditemukan." }, { status: 404 });
      }
      return NextResponse.json({ post: parseBlogPost(row) });
    }
    const rows = await db.blogPost.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ posts: rows.map(parseBlogCard) });
  } catch (e) {
    console.error("[api/admin/blog][GET]", e);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const body = (await req.json().catch(() => null)) as BlogPayload | null;
    if (!body || typeof body !== "object") return bad("Body JSON tidak valid.");

    const title = typeof body.title === "string" ? body.title.trim() : "";
    if (title.length < 3) return bad("Judul minimal 3 karakter.");

    const content = typeof body.content === "string" ? body.content : "";
    if (!content.trim()) return bad("Konten artikel wajib diisi.");

    const category = typeof body.category === "string" ? body.category.trim() : "";
    if (!category) return bad("Kategori wajib diisi.");

    // Slug: auto dari title bila kosong; bila diisi, validasi regex.
    let slugInput = "";
    if (body.slug !== undefined && body.slug !== null && String(body.slug).trim() !== "") {
      slugInput = slugify(String(body.slug));
      if (!SLUG_RE.test(slugInput)) {
        return bad("Slug hanya boleh huruf kecil, angka, dan tanda hubung (a-z0-9-).");
      }
    }

    const tagsRes = normalizeTags(body.tags);
    if (tagsRes.error) return bad(tagsRes.error);

    const published = typeof body.published === "boolean" ? body.published : true;

    let publishedAt: Date | null = published ? new Date() : null;
    const atRes = parseDate(body.publishedAt);
    if (atRes.error) return bad(atRes.error);
    if (atRes.date) publishedAt = atRes.date;

    const row = await db.blogPost.create({
      data: {
        slug: await uniqueSlug(slugInput || slugify(title)),
        title,
        excerpt:
          typeof body.excerpt === "string" && body.excerpt.trim()
            ? body.excerpt.trim()
            : deriveExcerpt(content),
        content,
        category,
        tags: JSON.stringify(tagsRes.tags ?? []),
        readMinutes: parseReadMinutes(body.readMinutes, content),
        published,
        publishedAt,
      },
    });

    return NextResponse.json({ post: parseBlogPost(row) }, { status: 201 });
  } catch (e) {
    console.error("[api/admin/blog][POST]", e);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const id = req.nextUrl.searchParams.get("id")?.trim() ?? "";
    if (!id) return bad("Parameter id wajib diisi.");

    const existing = await db.blogPost.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Artikel tidak ditemukan." }, { status: 404 });
    }

    const body = (await req.json().catch(() => null)) as BlogPayload | null;
    if (!body || typeof body !== "object") return bad("Body JSON tidak valid.");

    const data: Prisma.BlogPostUpdateInput = {};

    if (body.title !== undefined) {
      const title = typeof body.title === "string" ? body.title.trim() : "";
      if (title.length < 3) return bad("Judul minimal 3 karakter.");
      data.title = title;
    }

    if (body.slug !== undefined) {
      const slug = slugify(typeof body.slug === "string" ? body.slug : "");
      if (!SLUG_RE.test(slug)) {
        return bad("Slug hanya boleh huruf kecil, angka, dan tanda hubung (a-z0-9-).");
      }
      const clash = await db.blogPost.findUnique({ where: { slug } });
      if (clash && clash.id !== id) {
        return NextResponse.json({ error: "Slug sudah dipakai artikel lain." }, { status: 409 });
      }
      data.slug = slug;
    }

    if (body.excerpt !== undefined) {
      const excerpt = typeof body.excerpt === "string" ? body.excerpt.trim() : "";
      if (!excerpt) return bad("Ringkasan tidak boleh kosong.");
      data.excerpt = excerpt;
    }

    if (body.content !== undefined) {
      const content = typeof body.content === "string" ? body.content : "";
      if (!content.trim()) return bad("Konten tidak boleh kosong.");
      data.content = content;
    }

    if (body.category !== undefined) {
      const category = typeof body.category === "string" ? body.category.trim() : "";
      if (!category) return bad("Kategori tidak boleh kosong.");
      data.category = category;
    }

    if (body.tags !== undefined) {
      const tagsRes = normalizeTags(body.tags);
      if (tagsRes.error) return bad(tagsRes.error);
      data.tags = JSON.stringify(tagsRes.tags ?? []);
    }

    if (body.readMinutes !== undefined) {
      const n =
        typeof body.readMinutes === "number"
          ? body.readMinutes
          : typeof body.readMinutes === "string"
            ? Number.parseInt(body.readMinutes, 10)
            : Number.NaN;
      if (!Number.isFinite(n) || n < 1 || n > 120) {
        return bad("readMinutes harus angka antara 1 dan 120.");
      }
      data.readMinutes = Math.round(n);
    }

    if (body.published !== undefined) {
      if (typeof body.published !== "boolean") return bad("published harus boolean.");
      data.published = body.published;
      // Setel tanggal terbit pertama kali saat artikel dimunculkan.
      if (body.published && !existing.publishedAt) data.publishedAt = new Date();
    }

    const atRes = parseDate(body.publishedAt);
    if (atRes.error) return bad(atRes.error);
    if (atRes.date) data.publishedAt = atRes.date;

    const row = await db.blogPost.update({ where: { id }, data });
    return NextResponse.json({ post: parseBlogPost(row) });
  } catch (e) {
    console.error("[api/admin/blog][PUT]", e);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const id = req.nextUrl.searchParams.get("id")?.trim() ?? "";
    if (!id) return bad("Parameter id wajib diisi.");

    const existing = await db.blogPost.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Artikel tidak ditemukan." }, { status: 404 });
    }

    await db.blogPost.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/admin/blog][DELETE]", e);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
