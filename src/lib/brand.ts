/**
 * DIGIMAN.ID — Sumber tunggal identitas brand, person, & jejak sosial.
 *
 * Dipakai oleh layout (metadata + JSON-LD entity graph), footer, dan
 * blog (Article schema) agar Google melihat satu versi konsisten dari
 * setiap nama → mempercepat asosiasi entitas (knowledge panel / brand SERP).
 *
 * Prinsip: tambah sosial/brand baru HANYA di sini.
 */

export const BRAND = {
  siteName: "DIGIMAN.ID",
  siteUrl: "https://digiman.id",
  legalName: "PT Digital Bisnis Manajemen",
  tagline: "Naikkan Bisnis Anda ke 7 Lapis Langit Legalitas & Digitalisasi",
  /** Gambar share (1344×768, rasio mendekati 16:9). */
  ogImage: "/cta-artwork.png",

  people: {
    founder: {
      name: "Gugun Gunara",
      role: "Pendiri & Direktur Utama",
      orgRef: "#organisasi",
    },
    architect: {
      name: "Muhammad Lutfi Azmi",
      handle: "prabudanling",
      role: "Arsitek Digital & Pengembang Sistem Gunara OS",
    },
  },

  /** Ekosistem brand pendukung (tampil di footer + JSON-LD). */
  ecosystem: [
    {
      name: "PT Digital Bisnis Manajemen",
      href: "https://digiman.id",
      note: "digiman.id",
    },
    {
      name: "PT Top Konsultan Internasional",
      href: "https://topkonsultan.web.id",
      note: "topkonsultan.web.id",
    },
    {
      name: "Santri Angon",
      href: null,
      note: "komunitas pendukung",
    },
    {
      name: "Gunara OS",
      href: "#/os",
      note: "standarisasi 165 dokumen",
    },
  ] as ReadonlyArray<{ name: string; href: string | null; note?: string }>,

  /** Seluruh profil sosial resmi (footer + JSON-LD sameAs). */
  socials: [
    {
      label: "Facebook",
      handle: "@bossdanling",
      href: "https://www.facebook.com/bossdanling",
    },
    {
      label: "X (Twitter)",
      handle: "@gunzz_krenzz",
      href: "https://x.com/gunzz_krenzz",
    },
    {
      label: "Instagram",
      handle: "@prabudanling",
      href: "https://www.instagram.com/prabudanling",
    },
    {
      label: "TikTok",
      handle: "@gunaracorp",
      href: "https://www.tiktok.com/@gunaracorp",
    },
    {
      label: "Threads",
      handle: "@prabudanling",
      href: "https://www.threads.com/@prabudanling",
    },
    {
      label: "Reddit",
      handle: "u/prabudanling",
      href: "https://www.reddit.com/user/prabudanling/",
    },
  ] as ReadonlyArray<{ label: string; handle: string; href: string }>,
} as const;

/** Daftar URL profil sosial — untuk schema.org `sameAs`. */
export const SOCIAL_HREFS: string[] = BRAND.socials.map((s) => s.href);

/**
 * LEGACY — sumber tunggal narasi pengalaman (kredibilitas perusahaan).
 *
 * Fakta: pendiri memulai karier konsultansi di McKinsey & Company (2009),
 * praktik independen sejak 2013, lalu diformalisasi sebagai
 * PT Digital Bisnis Manajemen pada 2022 (SK AHU-059566.AH.01.30.Tahun 2022).
 * `yearsLabel` diperbarui manual tiap pergantian tahun — sengaja statis agar
 * bebas hydration mismatch dan deterministik untuk SEO.
 */
export const LEGACY = {
  mckinseySince: 2009,
  independentSince: 2013,
  establishedYear: 2022,
  yearsLabel: "17+",
  skNumber: "AHU-059566.AH.01.30.Tahun 2022",
} as const;

/** Kredit ringkas berisi semua nama — dipakai footer & OG description. */
export const CREDIT_LINE =
  "by Gugun Gunara · Muhammad Lutfi Azmi (prabudanling) · Santri Angon · PT Top Konsultan Internasional (topkonsultan.web.id) · digiman.id — PT Digital Bisnis Manajemen";
