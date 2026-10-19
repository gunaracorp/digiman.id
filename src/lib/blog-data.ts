/**
 * Lapisan data blog — menggabungkan artikel statis (blog-posts.ts) dengan
 * artikel yang dibuat dari Panel Admin (DB), hanya yang sudah boleh tayang.
 * Artikel DB bertanggal masa depan otomatis muncul saat tanggalnya tiba.
 */
import { db } from "@/lib/db";
import { BLOG_POSTS, isPostLive, type BlogPost } from "./blog-posts";

/** Normalisasi konten post DB (JSON sections atau teks polos) → format BlogPost */
function normalizeContent(raw: string, title: string): BlogPost["sections"] {
  try {
    const parsed = JSON.parse(raw);
    const valid =
      Array.isArray(parsed) &&
      parsed.length > 0 &&
      parsed.every((s) => s && typeof s.h2 === "string" && Array.isArray(s.blocks));
    if (valid) return parsed as BlogPost["sections"];
  } catch {
    // bukan JSON → perlakukan sebagai teks polos
  }
  const paragraphs = raw
    .split(/\n\s*\n/)
    .map((t) => t.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) paragraphs.push(title);
  return [{ h2: "Isi Artikel", blocks: paragraphs.map((text) => ({ type: "p" as const, text })) }];
}

/** Gabungan semua artikel yang boleh tayang (statis + DB), urut terbaru. */
export async function getAllVisiblePosts(now: Date = new Date()): Promise<BlogPost[]> {
  const staticLive = BLOG_POSTS.filter((p) => isPostLive(p, now));

  let dbPosts: BlogPost[] = [];
  try {
    const rows = await db.post.findMany({
      where: { published: true, date: { lte: now } },
      orderBy: { date: "desc" },
    });
    dbPosts = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: r.excerpt,
      date: r.date.toISOString().slice(0, 10),
      author: r.author,
      readMinutes: r.readMinutes,
      keywords: r.tags
        ? r.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
      sections: normalizeContent(r.content || "", r.title),
    }));
  } catch {
    // DB tidak tersedia → blog statis tetap tayang penuh
  }

  return [...dbPosts, ...staticLive].sort((a, b) => b.date.localeCompare(a.date));
}

/** Satu artikel yang boleh tayang berdasarkan slug (cari di DB + statis). */
export async function getVisiblePost(slug: string, now: Date = new Date()): Promise<BlogPost | null> {
  const posts = await getAllVisiblePosts(now);
  return posts.find((p) => p.slug === slug) ?? null;
}
