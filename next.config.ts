import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Ringan: sembunyikan header teknis & optimalkan impor paket ikon
  poweredByHeader: false,
  compiler: {
    // Produksi tanpa console.log (error tetap dipertahankan) — bundle lebih ramping
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    // Siap pakai format modern bila next/image diadopsi
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Panel admin: file upload base64 via route handler
    serverActions: {
      bodySizeLimit: "4mb",
    },
    // Tree-shaking agresif untuk ikon & motion — JS lebih kecil
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
