import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { PAGES } from "@/lib/pages";
import { CITY_SLUGS } from "@/lib/cities";
import { SITE } from "@/lib/seo";

/**
 * SITEMAP GOD MODE — /sitemap.xml
 *
 * Sebelumnya hanya memuat 1 URL (root). Kini memetakan SELURUH permukaan
 * indeks situs: halaman statis (registri PAGES), seluruh halaman detail
 * layanan, seluruh artikel blog, hub kota, dan 65 halaman programmatic
 * kota — dengan lastModified per-halaman (sinyal freshness) sehingga
 * mesin pencari tahu persis apa yang baru dan seberapa sering kembali.
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ── Sinyal freshness global dari blog terbaru (fallback: sekarang) ──
  let blogFreshness = now;
  try {
    const latest = await db.blogPost.findFirst({
      where: { published: true },
      orderBy: [{ publishedAt: "desc" }, { updatedAt: "desc" }],
      select: { publishedAt: true, updatedAt: true },
    });
    if (latest) blogFreshness = latest.publishedAt ?? latest.updatedAt;
  } catch {
    // DB tidak tersedia — sitemap tetap valid dengan waktu sekarang.
  }

  const entries: MetadataRoute.Sitemap = [];

  // ── 1. Beranda — prioritas tertinggi ──
  entries.push({
    url: `${SITE.url}/`,
    lastModified: blogFreshness,
    changeFrequency: "daily",
    priority: 1,
  });

  // ── 2. Halaman statis dari registri PAGES (sumber tunggal navigasi) ──
  for (const p of PAGES) {
    entries.push({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    });
  }

  // ── 3. Hub kota + 65 halaman programmatic kota ──
  entries.push({
    url: `${SITE.url}/legalitas`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  });
  for (const slug of CITY_SLUGS) {
    entries.push({
      url: `${SITE.url}/legalitas/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  // ── 4. Halaman detail layanan (dari DB, gagal aman) ──
  try {
    const services = await db.service.findMany({
      where: { visible: true, slug: { not: null } },
      orderBy: { order: "asc" },
      select: { slug: true, updatedAt: true },
    });
    for (const s of services) {
      if (!s.slug) continue;
      entries.push({
        url: `${SITE.url}/layanan/${s.slug}`,
        lastModified: s.updatedAt ?? now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  } catch {
    // fallback: DB kosong — halaman layanan diindeks on-demand
  }

  // ── 5. Artikel blog terbit ──
  try {
    const posts = await db.blogPost.findMany({
      where: { published: true },
      orderBy: [{ publishedAt: "desc" }, { updatedAt: "desc" }],
      select: { slug: true, publishedAt: true, updatedAt: true },
    });
    for (const p of posts) {
      entries.push({
        url: `${SITE.url}/blog/${p.slug}`,
        lastModified: p.updatedAt ?? p.publishedAt ?? blogFreshness,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  } catch {
    // fallback: DB kosong — artikel diindeks on-demand
  }

  // Hindari URL duplikat ketika registri halaman dan hub programmatic
  // sama-sama mendaftarkan jalur yang identik.
  return Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());
}
