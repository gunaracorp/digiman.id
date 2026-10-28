/**
 * DIGIMAN.ID — Server shell bersama untuk view berbasis URL:
 * / (landing), /proposal, /dashboard.
 * Mengambil seluruh data dari database lalu merendernya via AppRouter,
 * yang memilih view berdasarkan pathname (parsePathname).
 */
import { getSiteData } from "@/lib/site-data";
import { db } from "@/lib/db";
import { parseBlogCard } from "@/lib/blog-types";
import type { BlogCardData } from "@/lib/blog-types";
import type { GunaraPackageData } from "@/lib/gunara";
import AppRouter from "@/components/digiman/app-router";
import { LocaleProvider } from "@/lib/i18n";

export const dynamic = "force-dynamic";

function jsonArr(raw: string | null | undefined): string[] {
  try {
    const v: unknown = JSON.parse(raw ?? "[]");
    return Array.isArray(v) ? v.map((x) => String(x)) : [];
  } catch {
    return [];
  }
}

export default async function HomeShell() {
  const { settings, services, testimonials, faqs, offices, team, sections } =
    await getSiteData();

  // Data fitur baru — gagal aman: landing tetap tampil tanpa teaser.
  let blogPosts: BlogCardData[] = [];
  let packages: GunaraPackageData[] = [];
  let domainCount = 0;
  let docCount = 0;
  try {
    const [rows, pkgs, dc, tc] = await Promise.all([
      db.blogPost.findMany({
        where: { published: true },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: 3,
      }),
      db.gunaraPackage.findMany({
        where: { active: true },
        orderBy: { order: "asc" },
      }),
      db.pgaDomain.count(),
      db.pgaDocument.count(),
    ]);
    blogPosts = rows.map(parseBlogCard);
    packages = pkgs.map((p) => ({
      code: p.code,
      name: p.name,
      tagline: p.tagline,
      description: p.description,
      docCount: p.docCount,
      price: p.price,
      durationWeeks: p.durationWeeks,
      features: jsonArr(p.features),
      documentCodes: jsonArr(p.documentCodes),
      highlight: p.highlight,
      order: p.order,
    }));
    domainCount = dc;
    docCount = tc;
  } catch {
    // fallback: teaser disembunyikan, situs tetap hidup
  }

  // ── SEO GOD MODE: JSON-LD level halaman ──────────────────────────────
  const ratingVals = testimonials
    .map((tst) => Number((tst as { rating?: number }).rating) || 0)
    .filter((r) => r > 0);
  const ratingAvg =
    ratingVals.length > 0
      ? ratingVals.reduce((a, b) => a + b, 0) / ratingVals.length
      : 0;

  const PAGE_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://digiman.id/#faq-halaman",
        isPartOf: { "@id": "https://digiman.id/#website" },
        mainEntity: faqs
          .slice(0, 20)
          .map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://digiman.id/#layanan-bisnis",
        aggregateRating:
          ratingAvg > 0
            ? {
                "@type": "AggregateRating",
                ratingValue: ratingAvg.toFixed(1),
                reviewCount: ratingVals.length,
                bestRating: 5,
                worstRating: 1,
              }
            : undefined,
        review: testimonials.slice(0, 3).map((tst) => ({
          "@type": "Review",
          author: { "@type": "Person", name: tst.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: Number((tst as { rating?: number }).rating) || 5,
            bestRating: 5,
          },
          reviewBody: tst.text,
        })),
      },
      {
        "@type": "ItemList",
        "@id": "https://digiman.id/#katalog-layanan",
        name: "Katalog Layanan DIGIMAN.ID",
        numberOfItems: services.length,
        itemListElement: services.map((svc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: svc.title,
            provider: { "@id": "https://digiman.id/#organisasi" },
            areaServed: { "@type": "Country", name: "Indonesia" },
          },
        })),
      },
      ...offices.slice(0, 6).map((office, i) => ({
        "@type": "LocalBusiness",
        "@id": `https://digiman.id/#kantor-${i + 1}`,
        name: `${office.label} — DIGIMAN.ID`,
        parentOrganization: { "@id": "https://digiman.id/#organisasi" },
        image: { "@id": "https://digiman.id/#logo" },
        telephone: "+62-813-1651-6524",
        email: "halo@digiman.id",
        priceRange: "Rp 350.000 - Rp 165.000.000",
        address: {
          "@type": "PostalAddress",
          streetAddress: office.address,
          addressCountry: "ID",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        areaServed: { "@type": "Country", name: "Indonesia" },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PAGE_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <LocaleProvider>
        <AppRouter
          settings={settings}
          services={services}
          testimonials={testimonials}
          faqs={faqs}
          offices={offices}
          blogPosts={blogPosts}
          packages={packages}
          domainCount={domainCount}
          docCount={docCount}
          team={team}
          sections={sections}
        />
      </LocaleProvider>
    </>
  );
}
