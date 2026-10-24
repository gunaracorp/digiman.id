import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { BRAND, SOCIAL_HREFS, CREDIT_LINE } from "@/lib/brand";
import { topKeywords } from "@/lib/seo-keywords";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/**
 * ENTITY GRAPH — schema.org JSON-LD.
 * Satu @graph berisi Organization (DIGIMAN + TopKonsultan), Brand (Santri Angon),
 * dua Person (Gugun Gunara & Muhammad Lutfi Azmi) yang saling terhubung via
 * @id, dan `sameAs` ke seluruh profil sosial — strategi entity-building agar
 * nama & brand terasosiasi kuat di mesin pencari (knowledge panel / brand SERP).
 */
const ENTITY_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://digiman.id/#organisasi",
      name: "PT Digital Bisnis Manajemen",
      alternateName: ["DIGIMAN.ID", "Digiman ID", "DIGIMAN"],
      url: "https://digiman.id/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://digiman.id/#logo",
        url: "https://digiman.id/logo-emblem.png",
        width: 512,
        height: 512,
        caption: "Logo PT Digital Bisnis Manajemen (DIGIMAN.ID)",
      },
      image: { "@id": "https://digiman.id/#logo" },
      email: "halo@digiman.id",
      telephone: "+62-813-1651-6524",
      foundingDate: "2022-12-26",
      foundingLocation: {
        "@type": "Place",
        name: "Tasikmalaya, Jawa Barat, Indonesia",
      },
      slogan: "Pengalaman sejak 2009 — legalitas sejak 2022",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tasikmalaya",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
      founder: { "@id": "https://digiman.id/#gugun-gunara" },
      employee: [
        { "@id": "https://digiman.id/#gugun-gunara" },
        { "@id": "https://digiman.id/#muhammad-lutfi-azmi" },
      ],
      // sameAs = kunci asosiasi entitas di mesin pencari
      sameAs: ["https://topkonsultan.web.id", ...SOCIAL_HREFS],
      sponsor: { "@id": "https://digiman.id/#topkonsultan" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paket Legalitas & Digitalisasi DIGIMAN.ID",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Paket Berdiri — PT Perorangan (UUCK)",
            priceCurrency: "IDR",
            price: "850000",
          },
          {
            "@type": "Offer",
            name: "Paket Tumbuh — Pendirian PT Lengkap",
            priceCurrency: "IDR",
            price: "3500000",
          },
          {
            "@type": "Offer",
            name: "Paket Terbang — PT + Merek + Website",
            priceCurrency: "IDR",
            price: "7500000",
          },
          {
            "@type": "Offer",
            name: "Paket 7 Lapis Langit — PMA, Ekspansi & Enterprise",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "15000000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "Offer",
            name: "Gunara OS — Standarisasi 165 Dokumen Super Organisasi (PGA-39 s.d. PGA-165)",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "39000000",
              maxPrice: "165000000",
              priceCurrency: "IDR",
            },
          },
        ],
      },
      knowsAbout: [
        "Jasa pendirian PT",
        "Akta pendirian perusahaan",
        "Legalitas usaha Indonesia",
        "NIB OSS RBA",
        "Pendaftaran merek",
        "Sertifikasi halal",
        "Konsultan digitalisasi bisnis",
        "Gunara OS",
        "Standarisasi dokumen super organisasi",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://digiman.id/#topkonsultan",
      name: "PT Top Konsultan Internasional",
      alternateName: ["Top Konsultan", "TOPKONSULTAN"],
      url: "https://topkonsultan.web.id",
      sameAs: ["https://digiman.id/"],
    },
    {
      "@type": "Brand",
      "@id": "https://digiman.id/#santri-angon",
      name: "Santri Angon",
      url: "https://digiman.id/",
    },
    {
      "@type": "Person",
      "@id": "https://digiman.id/#gugun-gunara",
      name: "Gugun Gunara",
      alternateName: ["Gugun", "Founder Gunara OS"],
      jobTitle: "Pendiri & Direktur Utama",
      description:
        "Pengalaman konsultansi 17+ tahun: memulai karier di McKinsey & Company (2009), praktik konsultan independen sejak 2013, mendirikan PT Digital Bisnis Manajemen (2022) sebagai jangkar legal.",
      worksFor: { "@id": "https://digiman.id/#organisasi" },
      url: "https://digiman.id/",
      image: "https://digiman.id/logo-emblem.png",
      sameAs: ["https://topkonsultan.web.id", ...SOCIAL_HREFS],
      knowsAbout: [
        "Legalitas bisnis Indonesia",
        "Gunara OS",
        "Standarisasi 165 dokumen super organisasi",
        "Konsultan manajemen internasional",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://digiman.id/#muhammad-lutfi-azmi",
      name: "Muhammad Lutfi Azmi",
      alternateName: ["prabudanling", "Lutfi Azmi", "Danling"],
      jobTitle: "Arsitek Digital & Pengembang Sistem Gunara OS",
      worksFor: [
        { "@id": "https://digiman.id/#organisasi" },
        { "@id": "https://digiman.id/#topkonsultan" },
      ],
      url: "https://digiman.id/",
      sameAs: SOCIAL_HREFS,
      knowsAbout: [
        "Digitalisasi bisnis",
        "Gunara OS",
        "Otomasi AI",
        "Pengembangan web",
        "Santri Angon",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://digiman.id/#website",
      url: "https://digiman.id/",
      name: "DIGIMAN.ID",
      alternateName: "DIGIMAN — PT Digital Bisnis Manajemen",
      publisher: { "@id": "https://digiman.id/#organisasi" },
      author: [
        { "@id": "https://digiman.id/#gugun-gunara" },
        { "@id": "https://digiman.id/#muhammad-lutfi-azmi" },
      ],
      inLanguage: "id-ID",
      keywords: topKeywords(80).join(", "),
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://digiman.id/#layanan-bisnis",
      name: "DIGIMAN.ID — Jasa Legalitas & Digitalisasi Bisnis",
      parentOrganization: { "@id": "https://digiman.id/#organisasi" },
      url: "https://digiman.id/",
      image: "https://digiman.id/logo-digiman.png",
      priceRange: "Rp 350.000 - Rp 165.000.000",
      currenciesAccepted: "IDR",
      paymentAccepted: "Bank Transfer, QRIS, E-Wallet",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: [
        { "@type": "Country", name: "Indonesia" },
        "Jakarta",
        "Bandung",
        "Tasikmalaya",
        "Jawa Barat",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Andalusia Garden Cluster Granada No.11, Mangkubumi",
        addressLocality: "Tasikmalaya",
        addressRegion: "Jawa Barat",
        postalCode: "46181",
        addressCountry: "ID",
      },
      telephone: "+62-813-1651-6524",
      email: "halo@digiman.id",
      founder: { "@id": "https://digiman.id/#gugun-gunara" },
    },
  ],
};

const JSON_LD_HTML = JSON.stringify(ENTITY_JSON_LD).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "DIGIMAN.ID | Legalitas & Digitalisasi Bisnis Indonesia",
  description:
    "Jasa pendirian PT, CV, NIB, OSS, merek, halal, dan digitalisasi bisnis di Indonesia. Konsultasi profesional dari DIGIMAN.ID, PT Digital Bisnis Manajemen.",
  keywords: topKeywords(80),
  applicationName: "DIGIMAN.ID",
  authors: [
    { name: "Gugun Gunara", url: "https://digiman.id" },
    {
      name: "Muhammad Lutfi Azmi (prabudanling)",
      url: "https://www.instagram.com/prabudanling",
    },
  ],
  creator: "Gugun Gunara & Muhammad Lutfi Azmi (prabudanling)",
  publisher:
    "PT Digital Bisnis Manajemen (digiman.id) × PT Top Konsultan Internasional",
  metadataBase: new URL("https://digiman.id"),
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/" },
    // RSS autodiscovery — pembaca & agregator menemukan feed tanpa ekspor
    types: {
      "application/rss+xml": [{
        url: "/feed.xml",
        title: "Blog DIGIMAN.ID — Panduan Legalitas & Digitalisasi Bisnis",
      }],
    },
  },
  icons: {
    icon: [{ url: "/favicon-digiman.png", type: "image/png" }],
    apple: [{ url: "/logo-emblem.png", sizes: "180x180", type: "image/png" }],
  },
  // Sinyal geolokasi legacy — membantu pemetaan lokal di mesin pencari minor
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Tasikmalaya, Jawa Barat, Indonesia",
    ICBM: "-7.3274, 108.2207",
  },
  openGraph: {
    title: "DIGIMAN.ID — 7 Lapis Langit Legalitas Bisnis Indonesia | by Gugun Gunara",
    description:
      "Satu pintu dari akta pendirian sampai transformasi digital + Gunara OS 165 dokumen. " +
      CREDIT_LINE,
    url: "https://digiman.id",
    siteName: "DIGIMAN.ID",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: BRAND.ogImage,
        width: 1344,
        height: 768,
        alt: "DIGIMAN.ID — by Gugun Gunara & Muhammad Lutfi Azmi, didukung PT Top Konsultan Internasional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIMAN.ID — 7 Lapis Langit Legalitas Bisnis | by Gugun Gunara",
    description:
      "Jasa legalitas perusahaan & konsultan digitalisasi + Gunara OS 165 dokumen super organisasi.",
    site: "@prabudanling",
    creator: "@gunzz_krenzz",
    images: [BRAND.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#050d0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${grotesk.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD_HTML }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
