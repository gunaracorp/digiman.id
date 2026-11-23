import { NextResponse, type NextRequest } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { parseBlogCard, parseBlogPost } from "@/lib/blog-types";

export const dynamic = "force-dynamic";

/**
 * GET /api/blog — API publik blog DIGIMAN.ID / GUNARA OS.
 *
 * Tanpa query      → daftar artikel published (orderBy publishedAt desc)
 * ?limit=3         → batasi jumlah hasil (1–50)
 * ?category=X      → filter kategori persis
 * ?q=kata          → pencarian case-insensitive pada title + excerpt
 * ?slug=xxx        → 1 artikel published + content lengkap (views +1 atomik)
 *
 * Response: { posts: BlogCardData[] } atau { post: BlogPostData }
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const slug = searchParams.get("slug")?.trim() ?? "";
    const q = searchParams.get("q")?.trim() ?? "";
    const category = searchParams.get("category")?.trim() ?? "";
    const limitRaw = searchParams.get("limit");

    // ── Detail satu artikel (published saja) ──
    if (slug) {
      const existing = await db.blogPost.findFirst({
        where: { slug, published: true },
        select: { id: true },
      });
      if (!existing) {
        return NextResponse.json(
          { error: "Artikel tidak ditemukan." },
          { status: 404 },
        );
      }
      // Increment views secara atomik
      const row = await db.blogPost.update({
        where: { id: existing.id },
        data: { views: { increment: 1 } },
      });
      return NextResponse.json({ post: parseBlogPost(row) });
    }

    // ── Daftar artikel published ──
    const where: Prisma.BlogPostWhereInput = { published: true };
    if (category) where.category = category;

    let take: number | undefined;
    if (limitRaw !== null) {
      const n = Number.parseInt(limitRaw, 10);
      if (Number.isFinite(n)) take = Math.min(Math.max(n, 1), 50);
    }

    // Pencarian selalu dilakukan di memori agar case-insensitive di SEMUA
    // provider database (SQLite LIKE hanya case-insensitive untuk ASCII,
    // sedangkan Postgres LIKE case-sensitive).
    let rows = await db.blogPost.findMany({
      where,
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      ...(q || take === undefined ? {} : { take }),
    });
    if (q) {
      const needle = q.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.title.toLowerCase().includes(needle) ||
          r.excerpt.toLowerCase().includes(needle)
      );
    }
    if (take !== undefined) rows = rows.slice(0, take);

    return NextResponse.json({ posts: rows.map(parseBlogCard) });
  } catch (e) {
    console.error("[api/blog]", e);
    return NextResponse.json(
      { error: "Terjadi kesalahan server." },
      { status: 500 },
    );
  }
}
