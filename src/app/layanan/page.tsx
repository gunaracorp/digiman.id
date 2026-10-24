import type { Metadata } from "next";
import Link from "next/link";
import { getSiteData } from "@/lib/site-data";
import { PAGES, CATEGORY_LABEL, CATEGORY_DESC } from "@/lib/pages";
import { getServiceContent } from "@/lib/services";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  const n = data.services.filter((s) => s.slug).length;
  return buildMetadata({
    title: `${n} Layanan Legalitas & Digitalisasi Bisnis — DIGIMAN.ID`,
    description:
      "Seluruh layanan PT Digital Bisnis Manajemen: pendirian PT/CV/PMA, NIB OSS, merek, halal, BPOM, SNI, ISO, pajak, BPJS, hingga website, WhatsApp Business API & otomasi AI. Harga transparan, garansi di tangan.",
    path: "/layanan",
    keywords: [
      "jasa legalitas usaha",
      "layanan pendirian pt",
      "jasa pengurusan izin usaha",
      "jasa sertifikasi halal",
      "konsultan digitalisasi",
    ],
  });
}

const CATEGORY_ORDER = [
  "pendirian",
  "perizinan",
  "ki",
  "sertifikasi",
  "pajak",
  "ketenagakerjaan",
  "korporasi",
  "digital",
];

export default async function LayananPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const data = await getSiteData();

  // Kelompokkan layanan DB per kategori
  const byCategory = new Map<string, typeof data.services>();
  for (const s of data.services) {
    const list = byCategory.get(s.category) ?? [];
    list.push(s);
    byCategory.set(s.category, list);
  }

  const activeCategory = kategori && byCategory.has(kategori) ? kategori : null;
  const categories = activeCategory
    ? CATEGORY_ORDER.filter((c) => byCategory.has(c) && c === activeCategory)
    : CATEGORY_ORDER.filter((c) => byCategory.has(c));

  const totalServices = data.services.length;

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Layanan DIGIMAN.ID",
          description: `Katalog ${totalServices} layanan legalitas & digitalisasi bisnis`,
          url: `${SITE.url}/layanan`,
          isPartOf: { "@id": `${SITE.url}/#website` },
        }}
      />
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Layanan", path: "/layanan" }])} />
      {/* ItemList: peta katalog lengkap utk mesin pencari — semua layanan & posisinya */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Katalog Layanan DIGIMAN.ID",
          numberOfItems: data.services.length,
          itemListElement: data.services
            .filter((s) => s.slug)
            .map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE.url}/layanan/${s.slug}`,
            })),
        }}
      />

      <PublicNav activePath="/layanan" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Layanan", path: "/layanan" }]} />

          <h1 className="max-w-3xl font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Satu pintu,{" "}
            <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
              {totalServices} layanan
            </span>{" "}
            legalitas & digitalisasi.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            Dari akta pendirian sampai otomasi AI — setiap layanan dikerjakan
            dewan pakar bidangnya, transparan biayanya, dan bergaransi. Pilih
            kategori untuk menjelajah.
          </p>
        </div>

        {/* Filter kategori */}
        <nav aria-label="Kategori layanan" className="mt-8 flex flex-wrap gap-2">
          <Link
            href="/layanan"
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              !activeCategory
                ? "border-[var(--gold)]/60 bg-[var(--gold)]/10 text-[var(--gold)]"
                : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
            }`}
          >
            Semua
          </Link>
          {CATEGORY_ORDER.filter((c) => byCategory.has(c)).map((cat) => (
            <Link
              key={cat}
              href={`/layanan?kategori=${cat}`}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === cat
                  ? "border-[var(--gold)]/60 bg-[var(--gold)]/10 text-[var(--gold)]"
                  : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
              }`}
            >
              {CATEGORY_LABEL[cat]}
              <span className="ml-1.5 text-xs text-white/40">{byCategory.get(cat)?.length}</span>
            </Link>
          ))}
        </nav>

        {/* Kategori & kartu layanan */}
        <div className="mt-14 space-y-16">
          {categories.map((cat) => {
            const services = byCategory.get(cat) ?? [];
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`}>
                <h2
                  id={`cat-${cat}`}
                  className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight"
                >
                  {CATEGORY_LABEL[cat]}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
                  {CATEGORY_DESC[cat]}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => {
                    const content = s.slug ? getServiceContent(s.slug) : undefined;
                    return (
                      <Link
                        key={s.slug ?? s.title}
                        href={`/layanan/${s.slug}`}
                        className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:bg-white/[0.05]"
                      >
                        {s.featured && (
                          <span className="absolute right-4 top-4 rounded-full bg-[var(--gold)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--gold)]">
                            Populer
                          </span>
                        )}
                        <p className="text-sm font-semibold text-white group-hover:text-[var(--gold)]">
                          {s.title}
                        </p>
                        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-white/50">
                          {content?.heroSub ?? s.desc}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                          <span className="text-xs font-semibold text-[var(--gold)]">{s.price}</span>
                          <span className="text-xs text-white/40 transition-transform group-hover:translate-x-0.5">
                            Detail →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-20">
          <WaCta context="layanan yang sedang saya butuhkan" />
        </div>

        {/* Banner Katalog WhatsApp — permukaan konversi & internal link kuat */}
        <section aria-labelledby="katalog-banner" className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 id="katalog-banner" className="font-[family-name:var(--font-grotesk)] text-lg font-bold text-white sm:text-xl">
                Jualan lewat WhatsApp? Ambil katalog siap pakainya.
              </h2>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-white/55">
                Seluruh layanan di halaman ini sudah disiapkan sebagai entri Katalog WhatsApp Business — nama, deskripsi, harga, link, dan gambar 1024×1024. Salin per bidang atau unduh CSV.
              </p>
            </div>
            <Link
              href="/katalog-whatsapp"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-[#04120c] shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              Buka Katalog WhatsApp →
            </Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
