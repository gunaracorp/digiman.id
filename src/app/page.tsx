import { SiteHeader } from "@/components/digiman/site-header";
import { SiteFooter } from "@/components/digiman/site-footer";
import { Hero } from "@/components/digiman/hero";
import { TrustMarquee } from "@/components/digiman/trust-marquee";
import { Manifesto } from "@/components/digiman/manifesto";
import { Ecosystem } from "@/components/digiman/ecosystem";
import { BusinessPortfolio } from "@/components/digiman/business-portfolio";
import { Ventures } from "@/components/digiman/ventures";
import { Services } from "@/components/digiman/services";
import { Technology } from "@/components/digiman/technology";
import { Governance } from "@/components/digiman/governance";
import { Insights, type InsightItem } from "@/components/digiman/insights";
import { Careers } from "@/components/digiman/careers";
import { Contact } from "@/components/digiman/contact";
import { db } from "@/lib/db";
import {
  BUSINESS_UNITS,
  INSIGHTS,
  ORG,
  type BusinessUnit,
} from "@/content/holding";

export const revalidate = 300;

/** DB read with static fallback — content resilience by design. */
async function getUnits(): Promise<BusinessUnit[]> {
  try {
    const rows = await db.businessUnit.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
    });
    if (rows.length === 0) return BUSINESS_UNITS;
    return rows.map((row) => ({
      key: row.key,
      name: row.name,
      tagline: row.tagline,
      sector: row.sector,
      stage: row.stage as BusinessUnit["stage"],
      description: row.description,
      focus: row.focus
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      attributes: JSON.parse(row.attributes || "[]") as {
        label: string;
        value: string;
      }[],
    }));
  } catch (error) {
    console.error("[page] businessUnit read failed, using fallback:", error);
    return BUSINESS_UNITS;
  }
}

async function getInsights(): Promise<InsightItem[]> {
  try {
    const rows = await db.insight.findMany({
      orderBy: { publishedAt: "desc" },
      take: 6,
    });
    return rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      category: row.category,
      readMinutes: row.readMinutes,
      publishedAt: row.publishedAt,
      featured: row.featured,
    }));
  } catch (error) {
    console.error("[page] insight read failed, using fallback:", error);
    const now = Date.now();
    return INSIGHTS.map((seed) => ({
      slug: seed.slug,
      title: seed.title,
      excerpt: seed.excerpt,
      category: seed.category,
      readMinutes: seed.readMinutes,
      publishedAt: new Date(now - seed.daysAgo * 86_400_000),
      featured: seed.featured,
    }));
  }
}

/** Structured data: Organization + WebSite + WebPage (entity-consistent). */
function JsonLd() {
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
        "Digital holding",
        "Product engineering",
        "Artificial intelligence",
        "Venture capital",
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
      "@id": `${ORG.url}/#webpage`,
      url: ORG.url,
      name: "DIGIMAN.ID — Digital Holding Architecture",
      isPartOf: { "@id": `${ORG.url}/#website` },
      about: { "@id": `${ORG.url}/#organization` },
      inLanguage: "id-ID",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

export default async function HomePage() {
  const [units, insights] = await Promise.all([getUnits(), getInsights()]);

  return (
    <div className="flex min-h-screen flex-col">
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
        <Ventures />
        <Services />
        <Technology />
        <Governance />
        <Insights insights={insights} />
        <Careers />
        <Contact />
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
