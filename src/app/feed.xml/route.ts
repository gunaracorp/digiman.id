import { getAllVisiblePosts } from "@/lib/blog-data";
import { SITE } from "@/lib/seo";

/**
 * RSS 2.0 feed blog DIGIMAN.ID — /feed.xml
 * Pembaca berlangganan bisa mengikuti ritme artikel mingguan tanpa sosial media.
 */
export const revalidate = 600;

function esc(s: string): string {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = (await getAllVisiblePosts()).slice(0, 20);

  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE.url}/blog/${p.slug}</guid>
      <description>${esc(p.excerpt)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>${esc(p.author)}</author>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog DIGIMAN.ID — Panduan Legalitas &amp; Digitalisasi Bisnis</title>
    <link>${SITE.url}/blog</link>
    <description>Panduan praktis legalitas usaha Indonesia: pendirian PT/CV, NIB &amp; OSS, merek, sertifikasi, dan pajak UMKM. Artikel baru setiap minggu.</description>
    <language>id-id</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1800",
    },
  });
}
