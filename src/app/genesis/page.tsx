import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../genesis.css";

import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/digiman/site-header";
import { SiteFooter } from "@/components/digiman/site-footer";
import { Hero } from "@/components/genesis/hero";
import { Services } from "@/components/genesis/services";
import { Contact } from "@/components/genesis/contact";
import { TrustMarquee } from "@/components/digiman/trust-marquee";
import { Manifesto } from "@/components/digiman/manifesto";
import { Ecosystem } from "@/components/digiman/ecosystem";
import { BusinessPortfolio } from "@/components/digiman/business-portfolio";
import { Metode } from "@/components/digiman/metode";
import { Technology } from "@/components/digiman/technology";
import { Governance } from "@/components/digiman/governance";
import { Dewan } from "@/components/digiman/dewan";
import { Vision2125 } from "@/components/digiman/visi-2125";
import { Insights, type InsightItem } from "@/components/digiman/insights";
import { Careers } from "@/components/digiman/careers";

import {
  BUSINESS_UNITS,
  INSIGHTS,
  ORG,
  type BusinessUnit,
} from "@/content/holding";

/* ── Tipografi ASLI konsep pertama (dipulihkan dari layout asli) ── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genesis — Holding Digital Indonesia | Kaji Dulu, Baru Bangun",
  description: ORG.description,
  keywords: [
    "DIGIMAN",
    "digital holding",
    "holding digital Indonesia",
    "konsultan transformasi digital",
    "jasa pembuatan website",
    "konsultan manajemen & SOP",
    "riset bisnis & studi kelayakan",
    "otomasi AI",
    "venture building",
  ],
  alternates: { canonical: "/genesis" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/genesis",
    siteName: ORG.name,
    title: "DIGIMAN.ID Genesis — Yang masuk ke kita bakal selamat",
    description: ORG.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

/* Unit bisnis & insights — sumber data konsep pertama (holding.ts).
   Jalur DB (model BusinessUnit/Insight, lihat docs/DATA-MODEL.md)
   menyusul saat migrasi skema; fallback statis adalah desain resiliensi
   asli konsep ini. */
const units: BusinessUnit[] = BUSINESS_UNITS;

const insightItems: InsightItem[] = INSIGHTS.map((seed) => ({
  slug: seed.slug,
  title: seed.title,
  excerpt: seed.excerpt,
  category: seed.category,
  readMinutes: seed.readMinutes,
  publishedAt: new Date(Date.now() - seed.daysAgo * 86_400_000),
  featured: seed.featured,
}));

/** Structured data asli: Organization + WebSite + WebPage. */
function GenesisJsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${ORG.url}/#organization`,
      name: ORG.name,
      url: ORG.url,
      description: ORG.description,
      foundingDate: ORG.founded,
      email: ORG.email,
      knowsAbout: [
        "Digital transformation",
        "Business research",
        "Management systems",
        "AI & automation",
        "Venture building",
        "Digital governance",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${ORG.url}/#website`,
      url: ORG.url,
      name: ORG.name,
      description: ORG.description,
      inLanguage: "id-ID",
      publisher: { "@id": `${ORG.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${ORG.url}/#webpage-genesis`,
      url: `${ORG.url}/genesis`,
      name: "DIGIMAN.ID Genesis — Holding Digital Indonesia",
      isPartOf: { "@id": `${ORG.url}/#website` },
      about: { "@id": `${ORG.url}/#organization` },
      inLanguage: "id-ID",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

/**
 * GENESIS — konsep utama pertama DIGIMAN.ID, dipulihkan utuh dari
 * histori git dan dinikahkan dengan situs repo:
 *
 *   "Yang masuk ke kita bakal selamat,
 *    yang tidak masuk digital akan tertinggal."
 *
 * Komposisi asli: Hero (jargon + motion) → Marquee → Manifesto →
 * Ekosistem → Portofolio Bisnis → Layanan & Harga (16 jasa terharga) →
 * Metode → Teknologi 7 Lapis → Tata Kelola → 46 Dewan → Visi 2125 →
 * Insights → Karier → Kontak. Palet ink + capital gold dan tipografi
 * Geist + Instrument Serif dikembalikan setia via .genesis-theme —
 * tanpa mengubah satu pun halaman situs repo di sekitarnya.
 */
export default function GenesisPage() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} genesis-theme flex min-h-screen flex-col`}
    >
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Langsung ke konten
      </a>

      <SiteHeader />

      <main id="konten" className="flex-1">
        <Hero />
        <TrustMarquee />
        <Manifesto />
        <Ecosystem units={units} />
        <BusinessPortfolio units={units} />
        <Services />
        <Metode />
        <Technology />
        <Governance />
        <Dewan />
        <Vision2125 />
        <Insights insights={insightItems} />
        <Careers />
        <Contact />
      </main>

      <SiteFooter />
      <GenesisJsonLd />
      <Toaster position="bottom-right" />
    </div>
  );
}
