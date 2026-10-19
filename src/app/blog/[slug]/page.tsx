import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, isPostLive } from "@/lib/blog-posts";
import { getVisiblePost, getAllVisiblePosts } from "@/lib/blog-data";
import { buildMetadata, JsonLd, breadcrumbLd, articleLd } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";

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

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const others = (await getAllVisiblePosts()).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          author: post.author,
          image: `/blog/${post.slug}/opengraph-image`,
        })}
      />
      <JsonLd data={breadcrumbLd(crumbs)} />

      <PublicNav activePath="/blog" />

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={crumbs} />
        </div>

        <article>
          <header>
            <p className="text-xs text-white/40">
              {formatDate(post.date)} · {post.readMinutes} menit baca · {post.author}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-grotesk)] text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              {post.excerpt}
            </p>
          </header>

          <div className="mt-10 space-y-10 border-t border-white/5 pt-10">
            {post.sections.map((sec) => (
              <section key={sec.h2}>
                <h2 className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight text-white">
                  {sec.h2}
                </h2>
                <div className="mt-4 space-y-4">
                  {sec.blocks.map((b, i) => {
                    if (b.type === "p")
                      return (
                        <p key={i} className="text-[15px] leading-[1.9] text-white/70">
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
        </article>

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
