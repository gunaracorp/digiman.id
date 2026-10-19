import type { MetadataRoute } from "next";

/**
 * PWA manifest — situs dapat di-install di layar utama HP,
 * sinyal kualitas tambahan di Lighthouse & mesin pencari.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DIGIMAN.ID — PT Digital Bisnis Manajemen",
    short_name: "DIGIMAN.ID",
    description:
      "Satu pintu legalitas usaha Indonesia: akta pendirian PT/CV/PMA, NIB OSS, merek, halal, hingga digitalisasi bisnis.",
    start_url: "/",
    display: "standalone",
    background_color: "#050d0a",
    theme_color: "#050d0a",
    lang: "id",
    orientation: "portrait",
    icons: [
      { src: "/favicon-digiman.png", sizes: "32x32", type: "image/png" },
      { src: "/logo-digiman.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo-emblem.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
    ],
  };
}
