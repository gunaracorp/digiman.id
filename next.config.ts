import type { NextConfig } from "next";

/**
 * Security headers (Genesis §20 — security minimum).
 *
 * CATATAN PENTING: header `X-Frame-Options` SENGAJA TIDAK dipasang.
 * Panel preview platform (dan beberapa alat embed) memuat situs ini
 * dalam iframe lintas-domain — X-Frame-Options: SAMEORIGIN akan
 * memblokirnya ("refused to connect"). Pengerasan framing dilakukan
 * nanti di produksi via CSP `frame-ancestors` dengan daftar origin
 * yang diketahui (lihat ARCHITECTURE.md §8).
 *
 * CSP penuh juga belum dipasang karena next/og + JSON-LD inline —
 * naikkan bertahap saat deployment produksi terverifikasi.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
