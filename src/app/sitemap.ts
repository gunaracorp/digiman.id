import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { PAGES } from "@/lib/pages";

const BASE = "https://digiman.id";

/**
 * Sitemap dinamis DIGIMAN.ID — standarisasi tertinggi mesin pencari.
 * Memuat: beranda, semua halaman statis, seluruh layanan (dari DB), dan blog.
 * Otomatis bertambah saat layanan/artikel baru dibuat dari Panel Admin.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastBuild = new Date();

  // Halaman statis dengan prioritas berbeda-beda
  const staticPages: MetadataRoute.Sitemap = PAGES.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: lastBuild,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // Seluruh layanan dari database (fallback aman bila DB bermasalah)
  let servicePages: MetadataRoute.Sitemap = [];
  try {
    const services = await db.service.findMany({
      where: { visible: true, slug: { not: null } },
      select: { slug: true, updatedAt: true },
      orderBy: { order: "asc" },
    });
    servicePages = services.map((s) => ({
      url: `${BASE}/layanan/${s.slug}`,
      lastModified: s.updatedAt ?? lastBuild,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));
  } catch {
    // DB tidak tersedia — sitemap tetap terbit dengan halaman statis
  }

  // Artikel blog: statis (dengan jadwal mingguan) + artikel dari Panel Admin.
  // Hanya artikel yang sudah lewat tanggal terbit yang masuk sitemap.
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { getAllVisiblePosts } = await import("@/lib/blog-data");
    const posts = await getAllVisiblePosts();
    blogPages = posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // Fallback aman
  }

  return [
    {
      url: BASE,
      lastModified: lastBuild,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...staticPages,
    ...servicePages,
    ...blogPages,
  ];
}
