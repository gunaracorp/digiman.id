import type { Metadata } from "next";
import "./genesis.css";

import { MotionProvider } from "@/components/digiman/motion/providers";
import { Counter } from "@/components/digiman/motion/counter";
import { SiteHeader } from "@/components/digiman/site-header";
import { TrustMarquee } from "@/components/digiman/trust-marquee";
import { Manifesto } from "@/components/digiman/manifesto";
import { Ecosystem } from "@/components/digiman/ecosystem";
import { BusinessPortfolio } from "@/components/digiman/business-portfolio";
import { GenesisServices } from "@/components/digiman/genesis-services";
import { Metode } from "@/components/digiman/metode";
import { Dewan } from "@/components/digiman/dewan";
import { Technology } from "@/components/digiman/technology";
import { Vision2125 } from "@/components/digiman/visi-2125";
import { Governance } from "@/components/digiman/governance";
import { Insights, type InsightItem } from "@/components/digiman/insights";
import { Careers } from "@/components/digiman/careers";
import { SiteFooter } from "@/components/digiman/site-footer";

import {
  BUSINESS_UNITS,
  CONTACT,
  HERO,
  HERO_METRICS,
  INSIGHTS,
  ORG,
} from "@/content/holding";

export const metadata: Metadata = {
  title: "Genesis — Holding Digital DIGIMAN.ID · Kaji Dulu, Baru Bangun",
  description: ORG.description,
  alternates: { canonical: "/genesis" },
  openGraph: {
    title: "Genesis — Holding Digital DIGIMAN.ID",
    description: ORG.description,
    url: "/genesis",
    siteName: ORG.name,
    locale: "id_ID",
    type: "website",
  },
};

/** Seed insights → render items (daysAgo → publishedAt statis). */
const insightItems: InsightItem[] = INSIGHTS.map((insight) => ({
  slug: insight.slug,
  title: insight.title,
  excerpt: insight.excerpt,
  category: insight.category,
  readMinutes: insight.readMinutes,
  featured: insight.featured,
  publishedAt: new Date(Date.now() - insight.daysAgo * 86_400_000),
}));

/**
 * GENESIS — lapisan "Bisnis Real" DIGIMAN.ID.
 * Jargon: "Yang masuk ke kita bakal selamat, yang tidak masuk
 * digital akan tertinggal." — tidak boleh dilunakkan.
 *
 * Komposisi aditif: tidak satu pun halaman/komponen lama disentuh.
 */
export default function GenesisPage() {
  return (
    <MotionProvider>
      <SiteHeader />

      <main id="genesis">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
          <div
            aria-hidden="true"
            className="animate-drift absolute -left-40 top-24 h-[420px] w-[420px] rounded-full glow-gold blur-3xl"
          />
          <div className="shell relative z-10 pb-20 pt-36 sm:pt-44">
            <p className="eyebrow">{HERO.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.04] tracking-tight text-balance sm:text-7xl">
              {HERO.line1A} <span className="text-gold">{HERO.line1B}</span>{" "}
              <span className="mt-2 block">
                {HERO.line2A}{" "}
                <span className="text-gold">{HERO.line2B}</span>
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {HERO.statement}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={HERO.primaryCta.href}
                className="inline-flex h-12 items-center rounded-full bg-gold px-7 text-sm font-semibold text-[#04110c] transition-colors duration-300 hover:bg-gold-light"
              >
                {HERO.primaryCta.label}
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                {HERO.secondaryCta.label}
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t border-border pt-5"
                >
                  <p
                    className="font-display text-4xl tracking-tight text-gold"
                    aria-label={String(metric.value)}
                  >
                    <Counter to={metric.value} />
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustMarquee />
        <Manifesto />
        <Ecosystem units={BUSINESS_UNITS} />
        <BusinessPortfolio units={BUSINESS_UNITS} />
        <GenesisServices />
        <Metode />
        <Dewan />
        <Technology />
        <Vision2125 />
        <Governance />
        <Insights insights={insightItems} />
        <Careers />

        {/* ---------- KONTAK: gerbang ke rute resmi situs ---------- */}
        <section
          id="kontak"
          aria-labelledby="kontak-title"
          className="relative overflow-hidden border-t border-border"
        >
          <div
            aria-hidden="true"
            className="animate-drift absolute -right-40 top-16 h-[420px] w-[420px] rounded-full glow-gold blur-3xl"
          />
          <div className="shell relative z-10 py-24 text-center sm:py-32">
            <p className="eyebrow">{CONTACT.eyebrow}</p>
            <h2
              id="kontak-title"
              className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl"
            >
              {CONTACT.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {CONTACT.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/kontak"
                className="inline-flex h-12 items-center rounded-full bg-gold px-7 text-sm font-semibold text-[#04110c] transition-colors duration-300 hover:bg-gold-light"
              >
                Mulai Kaji — Konsultasi Gratis
              </a>
              <a
                href="/layanan"
                className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                Katalog Layanan
              </a>
              <a
                href="/paket-harga"
                className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                Paket Harga
              </a>
            </div>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {ORG.email} · Respons 1–2 hari kerja · Est. {ORG.founded}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </MotionProvider>
  );
}
