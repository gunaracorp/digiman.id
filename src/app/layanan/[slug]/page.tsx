import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSiteData } from "@/lib/site-data";
import { CATEGORY_LABEL } from "@/lib/pages";
import { getServiceContent, buildFallbackContent } from "@/lib/services";
import { buildMetadata, JsonLd, breadcrumbLd, faqPageLd, serviceLd, serviceKeywords, waLink } from "@/lib/seo";
import { postSlugsForCategory } from "@/lib/cross-links";
import { BLOG_POSTS, isPostLive } from "@/lib/blog-posts";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";
import { SectionHead, TrustBand, TestimonialSpot, ComparisonTable, GuaranteeCard } from "@/components/public/premium-blocks";

/**
 * Halaman detail layanan — mesin SEO inti DIGIMAN.ID.
 * Server component murni: nol JS klien, nol framer-motion — ringan & instan.
 * Data dari DB (Panel Admin) + konten editorial mendalam per layanan.
 */

export async function generateStaticParams() {
  const data = await getSiteData();
  return data.services
    .filter((s) => s.slug)
    .map((s) => ({ slug: s.slug as string }));
}

async function getService(slug: string) {
  const data = await getSiteData();
  const service = data.services.find((s) => s.slug === slug);
  return {
    service,
    settings: data.settings,
    allServices: data.services,
    testimonials: data.testimonials,
  };
}

/** Label kategori untuk slug — dipakai generateMetadata sebelum page render */
function categoryLabelOf(category: string): string {
  return CATEGORY_LABEL[category] ?? category;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { service } = await getService(slug);
  if (!service) return {};

  const content = getServiceContent(slug);

  // Judul menutup query high-intent: "syarat", "biaya", "proses" — 3 kata kunci
  // paling dicari calon klien, plus brand di akhir (bukan tengah).
  const title = `${service.title} — Syarat, Biaya & Proses | DIGIMAN.ID`;
  const description = content?.heroSub ?? service.desc;

  return buildMetadata({
    title,
    description,
    path: `/layanan/${slug}`,
    keywords: serviceKeywords(service.title, categoryLabelOf(service.category)),
  });
}

export default async function LayananDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { service, settings, allServices, testimonials } = await getService(slug);
  if (!service || !service.slug) notFound();

  const categoryLabel = CATEGORY_LABEL[service.category] ?? service.category;
  const features = service.items;

  // Konten editorial: manual bila tersedia, fallback bermartabat bila belum
  const content = getServiceContent(slug) ?? buildFallbackContent({
    slug,
    title: service.title,
    desc: service.desc,
    price: service.price,
    features,
    categoryLabel,
  });

  const waHref = waLink(
    settings.waNumber,
    `Halo DIGIMAN.ID, saya ingin konsultasi mengenai ${service.title}.`
  );

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/layanan" },
    { name: service.title, path: `/layanan/${slug}` },
  ];

  const related = content.related
    .map((r) => allServices.find((x) => x.slug === r))
    .filter((r): r is NonNullable<typeof r> => r != null)
    .slice(0, 3);

  // ── PREMIUM: peta navigasi halaman (chips "Di halaman ini") ──
  const tocItems = [
    { href: "#whofor-heading", label: "Siapa yang cocok" },
    { href: "#benefit-heading", label: "Manfaat utama" },
    { href: "#process-heading", label: "Alur proses" },
    { href: "#req-heading", label: "Syarat & hasil" },
    { href: "#compare-heading", label: "Perbandingan" },
    ...(content.costs && content.costs.length > 0
      ? [{ href: "#cost-heading", label: "Estimasi biaya" }]
      : []),
    { href: "#faq-heading", label: "Tanya jawab" },
    ...(content.legalBasis && content.legalBasis.length > 0
      ? [{ href: "#legal-heading", label: "Dasar hukum" }]
      : []),
  ];

  // ── PREMIUM: panduan blog terkait kategori ini (internal linking dua arah) ──
  const guidePosts: { slug: string; title: string; readMinutes: number }[] = [];
  for (const ps of postSlugsForCategory(service.category, 3)) {
    const p = BLOG_POSTS.find((x) => x.slug === ps);
    if (p && isPostLive(p)) {
      guidePosts.push({ slug: p.slug, title: p.title, readMinutes: p.readMinutes });
    }
  }

  // ── PREMIUM: layanan lain dalam kategori yang sama ──
  const sameCategory = allServices
    .filter((s) => s.category === service.category && s.slug && s.slug !== slug)
    .slice(0, 10);

  const categoryCount = new Set(allServices.map((s) => s.category)).size;
  const livePostCount = BLOG_POSTS.filter((p) => isPostLive(p)).length;
  const guidePageCount =
    allServices.filter((s) => s.slug).length + livePostCount + 65; // + 65 halaman kota

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      {/* ── Struktur data: Service + FAQPage + Breadcrumb ── */}
      <JsonLd
        data={serviceLd({
          name: service.title,
          description: content.heroSub,
          path: `/layanan/${slug}`,
          price: service.price,
          category: categoryLabel,
          image: `/layanan/${slug}/opengraph-image`,
          dateModified: service.updatedAt ?? undefined,
        })}
      />
      <JsonLd data={faqPageLd(content.faqs)} />
      <JsonLd data={breadcrumbLd(crumbs)} />

      <PublicNav activePath="/layanan" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={crumbs} />
        </div>

        {/* ── HERO: tagline + harga + CTA (pola Stripe: hierarki tegas) ── */}
        <article className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {categoryLabel}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-grotesk)] text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {content.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {content.heroSub}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-4 w-4 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Estimasi {content.timeline}
              </span>
              <span className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Garansi di tangan
              </span>
              <span className="flex items-center gap-2">
                <svg aria-hidden="true" className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% online
              </span>
            </div>

            {/* ── INTRO mendalam ── */}
            <div className="mt-12 space-y-5 text-[15px] leading-[1.85] text-white/70">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* ── SIDEBAR: harga + CTA (pola Stripe: satu aksi utama) ── */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[var(--gold)]/25 bg-gradient-to-b from-[var(--gold)]/[0.08] to-transparent p-6">
              <p className="text-xs uppercase tracking-wider text-white/50">Investasi mulai</p>
              <p className="mt-2 font-[family-name:var(--font-grotesk)] text-2xl font-bold text-[var(--gold)]">
                {service.price}
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-[#04120c] shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.03c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.13.24-3.83-.8-3.23-1.27-5.28-4.55-5.44-4.76-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.12-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.27.64.9 2.2.98 2.36.08.16.13.35.02.56-.1.21-.16.34-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.57 1.59.32.16.51.13.69-.08.19-.21.79-.92 1-1.24.21-.32.43-.26.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.14.08.79-.16 1.47Z" />
                </svg>
                Konsultasi layanan ini
              </a>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-white/40">
                Konsultasi gratis · tanpa komitmen · balasan &lt; 1×24 jam
              </p>
            </div>

            {features.length > 0 && (
              <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <p className="text-sm font-semibold text-white">Sudah termasuk</p>
                <ul className="mt-4 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/60">
                      <svg aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </article>

        {/* ── PREMIUM: peta halaman + pita kepercayaan (membangun orientasi pembaca) ── */}
        <nav aria-label="Di halaman ini" className="mt-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Di halaman ini
            </span>
            {tocItems.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/60 transition-colors hover:border-[var(--gold)]/50 hover:text-white"
              >
                {t.label}
              </a>
            ))}
          </div>
        </nav>

        <TrustBand services={allServices.length} categories={categoryCount} pages={guidePageCount} />

        {/* ── UNTUK SIAPA (profil calon klien — menjawab "cocok untuk saya?" + long-tail SEO) ── */}
        {content.whoFor && content.whoFor.length > 0 && (
          <section aria-labelledby="whofor-heading" className="mt-20">
            <SectionHead
              id="whofor-heading"
              eyebrow="Profil klien"
              title="Layanan ini cocok untuk Anda yang…"
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.whoFor.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/70"
                >
                  <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  {w}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── KEUNTUNGAN ── */}
        <section aria-labelledby="benefit-heading" className="mt-20">
          <SectionHead
            id="benefit-heading"
            eyebrow="Manfaat"
            title="Mengapa penting & apa yang Anda dapat"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-white/15"
              >
                <p className="text-sm font-semibold text-white">{b.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PREMIUM: suara klien nyata (deterministik per layanan) ── */}
        <TestimonialSpot testimonials={testimonials} seed={slug} />

        {/* ── PROSES ── */}
        <section aria-labelledby="process-heading" className="mt-20">
          <SectionHead
            id="process-heading"
            eyebrow="Alur kerja"
            title="Proses yang Anda jalani"
            sub="Langkah demi langkah yang jelas — Anda selalu tahu sedang berada di tahap mana."
          />
          <ol className="mt-8 space-y-0">
            {content.process.map((p, i) => (
              <li key={p.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < content.process.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[17px] top-10 h-full w-px bg-gradient-to-b from-[var(--gold)]/40 to-white/5" />
                )}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 font-[family-name:var(--font-grotesk)] text-sm font-bold text-[var(--gold)]">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-white/50">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── SIAPKAN & TERIMA: dua sisi transaksi dalam satu pandangan ── */}
        <ComparisonTable subject={service.title} />
        <section aria-label="Syarat dan hasil yang Anda terima" className="mt-20">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-10">
              <h2 id="req-heading" className="font-[family-name:var(--font-grotesk)] text-xl font-bold tracking-tight sm:text-2xl">
                Yang Anda siapkan
              </h2>
              <p className="mt-2 text-xs text-white/40">
                Sederhana — sisanya tim kami yang mengerjakan.
              </p>
              <ul className="mt-6 space-y-3.5">
                {content.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {content.deliverables && content.deliverables.length > 0 && (
              <div className="rounded-2xl border border-[var(--gold)]/25 bg-gradient-to-b from-[var(--gold)]/[0.08] to-transparent p-8 sm:p-10">
                <h3 className="font-[family-name:var(--font-grotesk)] text-xl font-bold tracking-tight sm:text-2xl">
                  Yang Anda terima
                </h3>
                <p className="mt-2 text-xs text-white/40">
                  Dokumen &amp; hasil konkret di tangan Anda — bukan janji.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {content.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                      <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ── RINCIAN BIAYA (tabel semantik — menutup query high-intent "biaya X") ── */}
        {content.costs && content.costs.length > 0 && (
          <section aria-labelledby="cost-heading" className="mt-20">
            <SectionHead
              id="cost-heading"
              eyebrow="Transparansi"
              title="Rincian estimasi biaya"
              sub="Transparan sejak awal — angka final selalu tertulis di penawaran setelah konsultasi gratis, tanpa biaya siluman."
            />
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">
                  Rincian estimasi biaya {service.title} di DIGIMAN.ID
                </caption>
                <thead>
                  <tr className="border-b border-white/8 bg-white/[0.04] text-xs uppercase tracking-wider text-white/50">
                    <th scope="col" className="px-5 py-4 font-semibold">Pos biaya</th>
                    <th scope="col" className="px-5 py-4 font-semibold sm:text-right">Estimasi</th>
                  </tr>
                </thead>
                <tbody>
                  {content.costs.map((c) => (
                    <tr key={c.item} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]">
                      <th scope="row" className="px-5 py-4 font-medium text-white/80">{c.item}</th>
                      <td className="px-5 py-4 text-right align-top text-white/50 sm:text-left">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── FAQ (schema FAQPage di atas) ── */}
        <section aria-labelledby="faq-heading" className="mt-20">
          <SectionHead
            id="faq-heading"
            eyebrow="Tanya jawab"
            title="Pertanyaan yang sering diajukan"
          />
          <div className="mt-8 space-y-3">
            {content.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] open:border-[var(--gold)]/30 open:bg-white/[0.05]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-[var(--gold)] transition-transform group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-[1.8] text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── DASAR HUKUM (E-E-A-T: sitasi regulasi resmi) ── */}
        {content.legalBasis && content.legalBasis.length > 0 && (
          <section aria-labelledby="legal-heading" className="mt-20">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-10">
              <h2 id="legal-heading" className="font-[family-name:var(--font-grotesk)] text-xl font-bold tracking-tight sm:text-2xl">
                Dasar hukum &amp; regulasi
              </h2>
              <p className="mt-2 text-xs text-white/40">
                Kami bekerja persis di atas teks regulasi — bukan tafsir sendiri.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.legalBasis.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                    <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── PREMIUM: panduan blog terkait (internal linking dua arah) ── */}
        {guidePosts.length > 0 && (
          <section aria-labelledby="panduan-heading" className="mt-20">
            <SectionHead
              id="panduan-heading"
              eyebrow="Belajar dulu, putuskan kemudian"
              title="Panduan gratis untuk topik ini"
              sub="Ditulis dewan pakar kami dari kasus nyata klien — gratis dibaca penuh, tanpa gated content."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {guidePosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/40"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]/70">
                    Panduan · {p.readMinutes} menit
                  </p>
                  <p className="mt-2.5 flex-1 text-sm font-semibold leading-snug text-white group-hover:text-[var(--gold)]">
                    {p.title}
                  </p>
                  <span aria-hidden="true" className="mt-4 text-xs font-semibold text-white/40 group-hover:text-[var(--gold)]">
                    Baca panduan →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA + JAMINAN (penutup konversi berdampingan) ── */}
        <section className="mt-20 grid gap-4 lg:grid-cols-2">
          <WaCta context={service.title} />
          <GuaranteeCard />
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-16">
            <h2 id="related-heading" className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Layanan terkait yang biasanya dibutuhkan bersamaan
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/layanan/${svc.slug}`}
                  className="group rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/40"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-[var(--gold)]">{svc.title}</p>
                  <p className="mt-1.5 text-xs text-white/40">{svc.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── PREMIUM: peta kategori — 10 layanan seindustri dalam satu sentuhan ── */}
        {sameCategory.length > 0 && (
          <section aria-labelledby="cat-heading" className="mt-16">
            <h2 id="cat-heading" className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Layanan lain di kategori {categoryLabel}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {sameCategory.map((s) => (
                <Link
                  key={s.slug}
                  href={`/layanan/${s.slug}`}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 transition-colors hover:border-[var(--gold)]/50 hover:text-white"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href={`/layanan?kategori=${service.category}`}
                className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-2 text-xs font-semibold text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/20"
              >
                Lihat semua →
              </Link>
            </div>
          </section>
        )}
      </main>

      <PublicFooter />
    </div>
  );
}
