import type { MetadataRoute } from "next";

/** PWA manifest (disajikan di /manifest.webmanifest) — identitas brand saat install. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DIGIMAN.ID — PT Digital Bisnis Manajemen × PT Top Konsultan Internasional",
    short_name: "DIGIMAN.ID",
    description:
      "Jasa legalitas usaha & Gunara OS — standarisasi 165 dokumen super organisasi. by Gugun Gunara & Muhammad Lutfi Azmi (prabudanling).",
    start_url: "/",
    display: "standalone",
    background_color: "#050d0a",
    theme_color: "#050d0a",
    lang: "id",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicon-digiman.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/logo-emblem.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
