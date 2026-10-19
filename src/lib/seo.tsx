import type { Metadata } from "next";

export const SITE = {
  name: "DIGIMAN.ID",
  company: "PT Digital Bisnis Manajemen",
  url: "https://digiman.id",
  logo: "https://digiman.id/logo-digiman.png",
  wa: "6281316516524",
  email: "halo@digiman.id",
};

/** Wa link dengan pesan yang sudah terisi — konversi tanpa gesekan */
export function waLink(number: string | undefined, message: string): string {
  const n = (number && number.replace(/[^0-9]/g, "")) || SITE.wa;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

/**
 * Metadata standar tertinggi untuk halaman statis: canonical, OG, Twitter, robots.
 * Satu fungsi = tidak ada halaman yang lupa canonical.
 * Robots granular: thumbnail OG besar di hasil pencarian, cuplikan penuh —
 * sinyal kualitas tampilan SERP yang sering terlewat.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const { title, description, path, keywords } = opts;
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Generator kata kunci high-intent untuk halaman layanan.
 * Menutup pola pencarian nyata: "jasa X", "biaya X", "syarat X", "cara mengurus X".
 */
export function serviceKeywords(title: string, categoryLabel?: string): string[] {
  const t = title.toLowerCase();
  return [
    t,
    `jasa ${t}`,
    `biaya ${t}`,
    `syarat ${t}`,
    `cara mengurus ${t}`,
    `${t} 2026`,
    ...(categoryLabel ? [`jasa ${categoryLabel.toLowerCase()}`] : []),
    "digiman.id",
    "digiman",
  ];
}

/** Escape string untuk injeksi JSON-LD yang aman */
function escapeLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

/** Komponen script JSON-LD server-side (tanpa client JS) */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeLd(data) }}
    />
  );
}

/** BreadcrumbList schema.org — sitelink & hasil pencarian lebih kaya */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

/** FAQPage schema.org — peluang rich result FAQ di Google */
export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Service schema.org — inti peringkat halaman layanan.
 * Versi god-mode: @id unik, image, dateModified (kejatuhan data DB),
 * kota areaServed, Offer dengan url & availability, isPartOf website,
 * dan tautan semantik ke graph Organization global di layout.
 */
export function serviceLd(input: {
  name: string;
  description: string;
  path: string;
  price?: string;
  category: string;
  /** path gambar OG relatif, mis. "/layanan/pendirian-pt/opengraph-image" */
  image?: string;
  /** tanggal modifikasi terakhir dari DB (updatedAt) */
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${input.path}#layanan`,
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    serviceType: input.category,
    category: input.category,
    inLanguage: "id-ID",
    isPartOf: { "@id": `${SITE.url}/#website` },
    provider: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organisasi`,
      name: SITE.company,
      url: SITE.url,
      telephone: "+62-813-1651-6524",
    },
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      "Jakarta", "Bandung", "Tasikmalaya",
    ],
    ...(input.image ? { image: [`${SITE.url}${input.image}`] } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(input.price
      ? {
          offers: {
            "@type": "Offer",
            url: `${SITE.url}${input.path}`,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            description: input.price,
            seller: { "@id": `${SITE.url}/#organisasi` },
          },
        }
      : {}),
  };
}

/** Article schema.org untuk halaman blog */
export function articleLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  /** path relatif OG image (mis. /blog/slug/opengraph-image) — opsional */
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Person", name: input.author },
    publisher: {
      "@type": "Organization",
      name: SITE.company,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    ...(input.image ? { image: [`${SITE.url}${input.image}`] } : {}),
    mainEntityOfPage: `${SITE.url}${input.path}`,
    inLanguage: "id-ID",
  };
}
