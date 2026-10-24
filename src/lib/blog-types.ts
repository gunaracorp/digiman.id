/**
 * Tipe & helper bersama untuk fitur Blog (agen 6-c).
 * Dipakai di server (API routes) dan client (komponen) —
 * file ini HARUS tetap murni: tanpa import modul server.
 */

export interface BlogCardData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readMinutes: number;
  views: number;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
}

export type BlogPostData = BlogCardData & {
  content: string;
};

/** Bentuk mentah row BlogPost dari Prisma (tags = JSON string, tanggal = Date). */
export interface BlogPostRowLike {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  readMinutes: number;
  views: number;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
}

/** JSON.parse field tags dengan try/catch — aman untuk data lama/rusak. */
export function parseTags(raw: string): string[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((t): t is string => typeof t === "string" && t.trim() !== "");
    }
    return [];
  } catch {
    return [];
  }
}

/** Row Prisma → BlogCardData (tanpa content). */
export function parseBlogCard(row: BlogPostRowLike): BlogCardData {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    tags: parseTags(row.tags),
    readMinutes: row.readMinutes,
    views: row.views,
    published: row.published,
    publishedAt: row.publishedAt ? row.publishedAt.toISOString() : null,
    createdAt: row.createdAt.toISOString(),
  };
}

/** Row Prisma → BlogPostData (card + content markdown). */
export function parseBlogPost(row: BlogPostRowLike): BlogPostData {
  return {
    ...parseBlogCard(row),
    content: row.content,
  };
}

/** Zona waktu resmi situs — dipin agar SSR & client menghasilkan teks identik. */
export const SITE_TIME_ZONE = "Asia/Jakarta";

/** Tanggal pendek gaya id-ID: "12 Mei 2025" (hydration-safe, zona WIB). */
export function fmtDateID(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: SITE_TIME_ZONE,
    }).format(new Date(iso));
  } catch {
    return "—";
  }
}

/** Tanggal lengkap dengan hari gaya id-ID: "Senin, 12 Mei 2025" (hydration-safe, WIB). */
export function fmtLongDateID(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: SITE_TIME_ZONE,
    }).format(new Date(iso));
  } catch {
    return "—";
  }
}
