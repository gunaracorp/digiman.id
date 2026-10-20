import type { MetadataRoute } from "next";
import { db } from "@/lib/db";

/**
 * Sitemap resmi situs (disajikan di /sitemap.xml).
 * Situs memakai hash-router dalam satu route "/" — hash (#/os, #/blog, dst.)
 * tidak diindeks terpisah oleh mesin pencari, cukup root URL.
 *
 * `lastModified` diambil dari postingan blog terbaru agar mesin pencari
 * selalu melihat sinyal kesegaran (freshness) setiap ada konten baru.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let lastModified = new Date();
  try {
    const latest = await db.blogPost.findFirst({
      where: { published: true },
      orderBy: [{ publishedAt: "desc" }, { updatedAt: "desc" }],
      select: { publishedAt: true, updatedAt: true },
    });
    if (latest) {
      lastModified = latest.publishedAt ?? latest.updatedAt;
    }
  } catch {
    // DB tidak tersedia — pakai waktu sekarang, sitemap tetap valid.
  }

  return [
    {
      url: "https://digiman.id/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
