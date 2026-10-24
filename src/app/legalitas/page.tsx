import type { Metadata } from "next";
import Link from "next/link";
import { CITY_PROFILES } from "@/lib/cities";
import { buildMetadata, JsonLd, breadcrumbLd } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";

/**
 * HUB PROGRAMMATIC SEO — indeks seluruh halaman kota.
 * Pintu crawl untuk 65 halaman lokal /legalitas/[kota].
 */

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Cakupan Kota — Jasa Legalitas & Pendirian PT di 65 Kota Indonesia | DIGIMAN.ID",
    description:
      "Jasa pendirian PT, CV, PT PMA & perizinan usaha untuk 65 kota di seluruh Indonesia: Jakarta, Surabaya, Bandung, Medan, Makassar, hingga Jayapura. 100% online, garansi di tangan.",
    path: "/legalitas",
    keywords: [
      "jasa pendirian pt seluruh indonesia",
      "jasa legalitas usaha 65 kota",
      "jasa pendirian pt online",
      "layanan legalitas se indonesia",
      "konsultan perizinan daerah",
    ],
  });
}

export default async function LegalitasIndexPage() {
  // Kelompokkan kota per pulau → navigasi ringan untuk manusia & crawler
  const byIsland = new Map<string, typeof CITY_PROFILES>();
  for (const c of CITY_PROFILES) {
    const list = byIsland.get(c.island) ?? [];
    list.push(c);
    byIsland.set(c.island, list);
  }

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Cakupan Kota", path: "/legalitas" },
  ];

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Cakupan Kota DIGIMAN.ID",
          description: `Layanan legalitas usaha untuk ${CITY_PROFILES.length} kota di seluruh Indonesia`,
          url: `${SITE.url}/legalitas`,
          isPartOf: { "@id": `${SITE.url}/#website` },
        }}
      />
      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Kota yang dilayani DIGIMAN.ID",
          numberOfItems: CITY_PROFILES.length,
          itemListElement: CITY_PROFILES.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Legalitas usaha di ${c.name}`,
            url: `${SITE.url}/legalitas/${c.slug}`,
          })),
        }}
      />

      <PublicNav activePath="/layanan" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={crumbs} />
        </div>

        <header className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Program Cakupan Nasional
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-grotesk)] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Legalitas usaha di{" "}
            <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
              {CITY_PROFILES.length} kota
            </span>{" "}
            Indonesia
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            Dari Sabang sampai Merauke — pemilik usaha di kota mana pun mendapat
            layanan DIGIMAN.ID yang sama cepatnya: konsultasi WhatsApp, proses
            100% daring, dokumen asli dikirim kurir. Pilih kota Anda untuk melihat
            panduan lokal, arah KBLI, dan estimasi biaya.
          </p>
        </header>

        <div className="mt-14 space-y-12">
          {[...byIsland.entries()].map(([island, cities]) => (
            <section key={island} aria-labelledby={`island-${island.replace(/\s+/g, "-")}`}>
              <h2
                id={`island-${island.replace(/\s+/g, "-")}`}
                className="font-[family-name:var(--font-grotesk)] text-xl font-bold tracking-tight"
              >
                {island}
                <span className="ml-2 text-sm font-normal text-white/40">{cities.length} kota</span>
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/legalitas/${c.slug}`}
                    className="group rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-colors hover:border-[var(--gold)]/50 hover:bg-white/[0.06] hover:text-white"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20">
          <WaCta context="legalitas usaha di kota saya" />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
