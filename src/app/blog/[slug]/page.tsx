import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, isPostLive } from "@/lib/blog-posts";
import { getVisiblePost, getAllVisiblePosts } from "@/lib/blog-data";
import { buildMetadata, JsonLd, breadcrumbLd, articleLd, SITE } from "@/lib/seo";
import { serviceSlugsForPost } from "@/lib/cross-links";
import { getSiteData } from "@/lib/site-data";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";
import { ReadingProgress, Toc, AuthorCard, ShareRow } from "@/components/public/article-blocks";
import { SectionHead } from "@/components/public/premium-blocks";

// Artikel terjadwal otomatis tayang saat tanggalnya tiba; halaman dihitung
// ulang tiap 5 menit (ISR) tanpa deploy.
export const revalidate = 300;

export function generateStaticParams() {
  // Hanya artikel yang sudah tayang saat build — artikel masa depan dibangun
  // on-demand lewat ISR begitu tanggal terbitnya lewat.
  return BLOG_POSTS.filter((p) => isPostLive(p)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getVisiblePost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getVisiblePost(slug);
  if (!post) notFound();

  // Jembatan konversi: layanan yang relevan dengan topik artikel.
  let relatedServices: { slug: string; title: string; price: string }[] = [];
  let others: { slug: string; title: string; readMinutes: number; date: string }[] = [];
  try {
    const data = await getSiteData();
    relatedServices = serviceSlugsForPost(slug, 3)
      .map((s) => data.services.find((x) => x.slug === s))
      .filter((s): s is NonNullable<typeof s> => s !== null)
      .map((s) => ({ slug: s.slug as string, title: s.title, price: s.price }));
    others = (await getAllVisiblePosts())
      .filter((p) => p.slug !== slug)
      .slice(0, 3)
      .map((p) => ({ slug: p.slug, title: p.title, readMinutes: p.readMinutes, date: p.date }));
  } catch {
    // DB tidak tersedia — artikel tetap tampil penuh tanpa jembatan.
  }

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  // Hitung jumlah kata isi artikel — sinyal kedalaman konten untuk mesin pencari
  const wordCount = post.sections.reduce(
    (sum, s) =>
      sum +
      s.blocks.reduce(
        (acc, b) => acc + ("text" in b && typeof b.text === "string" ? b.text.split(/\s+/).filter(Boolean).length : 0),
        0
      ),
    0
  );

  // Daftar isi dari heading artikel — anchor asli yang bisa diindeks
  const tocItems = post.sections.map((s) => ({
    href: `#${slugToId(s.h2)}`,
    label: s.h2,
  }));

  const shareUrl = `${SITE.url}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <ReadingProgress />
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          author: post.author,
          image: `/blog/${post.slug}/opengraph-image`,
          wordCount,
          keywords: post.keywords,
        })}
      />
      <JsonLd data={breadcrumbLd(crumbs)} />

      <PublicNav activePath="/blog" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={crumbs} />
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[230px_1fr]">
          {/* ── SIDEBAR: daftar isi lengket (desktop) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Toc items={tocItems} />
              <p className="mt-4 px-2 text-[11px] leading-relaxed text-white/30">
                Diperbarui berkala mengikuti regulasi terbaru oleh redaksi DIGIMAN.ID.
              </p>
            </div>
          </aside>

          <article>
            <header>
              {post.keywords[0] && (
                <p className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                  {post.keywords[0]}
                </p>
              )}
              <h1 className="mt-5 font-[family-name:var(--font-grotesk)] text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-xs text-white/40">
                {formatDate(post.date)} · {post.readMinutes} menit baca · {wordCount.toLocaleString("id-ID")} kata · {post.author}
              </p>
              <p className="mt-5 rounded-2xl border-l-2 border-[var(--gold)] bg-white/[0.03] p-5 text-base leading-relaxed text-white/70">
                {post.excerpt}
              </p>
            </header>

            {/* Daftar isi mobile */}
            <div className="mt-8 lg:hidden">
              <Toc items={tocItems} />
            </div>

            <div className="mt-10 space-y-12 border-t border-white/5 pt-10">
              {post.sections.map((sec, si) => (
                <section key={sec.h2} id={slugToId(sec.h2)} className="scroll-mt-24">
                  <h2 className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight text-white">
                    <span aria-hidden="true" className="mr-2 text-[var(--gold)]">
                      {String(si + 1).padStart(2, "0")}.
                    </span>
                    {sec.h2}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {sec.blocks.map((b, i) => {
                      if (b.type === "p")
                        return (
                          <p
                            key={i}
                            className={`text-[15px] leading-[1.9] text-white/70 ${
                              si === 0 && i === 0
                                ? "first-letter:float-left first-letter:mr-2.5 first-letter:font-[family-name:var(--font-grotesk)] first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[var(--gold)]"
                                : ""
                            }`}
                          >
                            {b.text}
                          </p>
                        );
                      if (b.type === "h3")
                        return (
                          <h3 key={i} className="pt-2 text-base font-bold text-white/90">
                            {b.text}
                          </h3>
                        );
                      if (b.type === "ul")
                        return (
                          <ul key={i} className="space-y-3">
                            {b.items.map((it) => (
                              <li
                                key={it}
                                className="flex items-start gap-3 text-[15px] leading-[1.75] text-white/70"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                                />
                                {it}
                              </li>
                            ))}
                          </ul>
                        );
                      if (b.type === "table")
                        return (
                          <div
                            key={i}
                            className="overflow-x-auto rounded-2xl border border-white/8 bg-white/[0.03]"
                          >
                            <table className="w-full text-left text-sm">
                              <thead>
                                <tr className="border-b border-white/8">
                                  {b.headers.map((h) => (
                                    <th
                                      key={h}
                                      className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--gold)]"
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {b.rows.map((row, ri) => (
                                  <tr
                                    key={ri}
                                    className="border-b border-white/5 last:border-0"
                                  >
                                    {row.map((cell, ci) => (
                                      <td
                                        key={ci}
                                        className={`px-4 py-3 leading-relaxed ${
                                          ci === 0 ? "font-semibold text-white/85" : "text-white/60"
                                        }`}
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      return null;
                    })}
                  </div>
                </section>
              ))}
            </div>

            <AuthorCard author={post.author} />
            <ShareRow url={shareUrl} title={post.title} />
          </article>
        </div>

        {/* ── JEMBATAN KONVERSI: layanan yang relevan dengan topik artikel ── */}
        {relatedServices.length > 0 && (
          <section aria-labelledby="svc-bridge" className="mt-20">
            <SectionHead
              id="svc-bridge"
              eyebrow="Dari membaca ke bertindak"
              title="Kami bisa mengerjakannya untuk Anda"
              sub="Artikel ini membahas topik yang juga ditangani tim spesialis kami — urut dari awal sampai dokumen di tangan."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/layanan/${s.slug}`}
                  className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/40"
                >
                  <p className="text-sm font-semibold leading-snug text-white group-hover:text-[var(--gold)]">
                    {s.title}
                  </p>
                  <p className="mt-2 text-xs text-[var(--gold)]">{s.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16">
          <WaCta
            context={post.title}
            sub="Punya pertanyaan spesifik setelah membaca? Dewan pakar kami menjawab langsung — gratis, tanpa komitmen."
          />
        </div>

        {others.length > 0 && (
          <section aria-labelledby="more-reading" className="mt-16">
            <h2 id="more-reading" className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Lanjutkan membaca
            </h2>
            <div className="mt-5 space-y-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-[var(--gold)]/40"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-[var(--gold)]">
                    {p.title}
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-white/30">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <PublicFooter />
    </div>
  );
}

/** Judul section → id anchor stabil (slug sederhana, deterministik). */
function slugToId(h2: string): string {
  return (
    "s-" +
    h2
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60)
  );
}
