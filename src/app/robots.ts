import type { MetadataRoute } from "next";

const BASE = "https://digiman.id";

/**
 * robots.txt dinamis — semua mesin pencari diizinkan mengindeks halaman publik,
 * panel admin & API dilindungi. Mengarah ke sitemap dinamis.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/", "/_next/"],
      },
      // Mesin pencari utama eksplisit (sinyal tambahan)
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "YandexBot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      // Pratinjau sosial
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "WhatsApp", allow: "/" },
      // AI crawler — era baru pencarian (Google SGE, Bing Copilot, dst.)
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" }, // ChatGPT Search
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
