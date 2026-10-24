import type { NextConfig } from "next";

/**
 * Security headers (Genesis §20 — security minimum) + SEO headers.
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
  // HTTPS-only — sinyal kepercayaan & prasyarat ranking modern
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  // ── DEV STABILITY (mencegah hydration mismatch di preview iframe) ──
  // 1) allowedDevOrigins: origin preview platform diajukan sebagai origin
  //    resmi untuk resource /_next/* — menghilangkan cross-origin warning
  //    dan memastikan chunk dev selalu termuat mulus dari iframe preview.
  // 2) devIndicators: false — badge indikator dev Next.js menyisipkan
  //    elemen <next-dev-tools-indicator> ke DOM saat runtime. Pada koneksi
  //    lambat, injeksinya bisa memenangkan race terhadap hydration React
  //    sehingga menggeser posisi tree → seluruh ID useId Radix
  //    (aria-controls/id) dianggap berbeda oleh React (hydration mismatch).
  //    Overlay error dev TETAP aktif — hanya badge indikator yang dimatikan.
  allowedDevOrigins: ["*.space-z.ai"],
  devIndicators: false,
  async redirects() {
    return [
      // ── Migrasi slug layanan v3 (Task 20) — 301 dari URL lama → kanonik.
      // Asuransi murah: melindungi tautan lama yang mungkin sudah tersebar
      // dan mencegah duplikasi konten saat mesin pencari memperbarui indeks.
      { source: "/layanan/koperasi", destination: "/layanan/pendirian-koperasi", permanent: true },
      { source: "/layanan/yayasan", destination: "/layanan/pendirian-yayasan", permanent: true },
      { source: "/layanan/perkumpulan", destination: "/layanan/perkumpulan-asosiasi", permanent: true },
      { source: "/layanan/izin-sektor", destination: "/layanan/izin-sektor-ss", permanent: true },
      { source: "/layanan/apostille", destination: "/layanan/legalisasi-apostille", permanent: true },
      { source: "/layanan/hak-cipta", destination: "/layanan/hak-cipta-paten", permanent: true },
      { source: "/layanan/halal", destination: "/layanan/sertifikasi-halal", permanent: true },
      { source: "/layanan/kitas-kitap", destination: "/layanan/kitas-rptka", permanent: true },
      { source: "/layanan/likuidasi", destination: "/layanan/pembubaran", permanent: true },
      { source: "/layanan/digitalisasi-ai", destination: "/layanan/otomasi-ai", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
      {
        // Area privat TIDAK boleh diindeks meski terekspos URL
        source: "/(admin|api)/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        // Aset font & statis brand — cache panjang, aman berubah via build
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(logo-.*|favicon-.*|hero-artwork|cta-artwork)\\.png",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
        ],
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
