import type { Metadata } from "next";
import Link from "next/link";
import { getAllVisiblePosts } from "@/lib/blog-data";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";

// Ritme "artikel baru tiap minggu": daftar dihitung ulang tiap 5 menit (ISR),
// sehingga artikel terjadwal muncul sendiri tepat saat tanggal terbitnya tiba.
export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Artikel & Panduan Legalitas Bisnis — Blog DIGIMAN.ID",
  description:
    "Panduan praktis legalitas usaha Indonesia: biaya pendirian PT, syarat online, perbandingan badan usaha, PT PMA, pendaftaran merek, dan urutan perizinan yang benar. Artikel baru setiap minggu.",
  path: "/blog",
  keywords: ["blog legalitas usaha", "panduan pendirian pt", "tips perizinan bisnis"],
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogIndexPage() {
  const posts = await getAllVisiblePosts();

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog DIGIMAN.ID",
          url: `${SITE.url}/blog`,
          description: "Panduan legalitas & digitalisasi bisnis Indonesia",
          publisher: { "@id": `${SITE.url}/#organisasi` },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE.url}/blog/${p.slug}`,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author },
          })),
        }}
      />

      <PublicNav activePath="/blog" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Blog", path: "/blog" }]} />
        </div>

        <h1 className="max-w-3xl font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Panduan yang membuat Anda{" "}
          <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
            tidak membayar dua kali.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
          Ditulis dewan pakar kami dari kasus nyata klien — bahasa yang bisa
          dipahami pebisnis, presisi yang bisa dipercaya konsultan. Artikel baru
          terbit setiap minggu.
        </p>
        <p className="mt-3 text-xs text-white/40">
          Ikuti lewat{" "}
          <a href="/feed.xml" className="text-[var(--gold)] underline-offset-4 hover:underline">
            RSS feed
          </a>{" "}
          agar tidak ketinggalan.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:bg-white/[0.05]"
            >
              <p className="text-xs text-white/40">
                {formatDate(p.date)} · {p.readMinutes} menit baca
              </p>
              <h2 className="mt-3 text-base font-bold leading-snug text-white group-hover:text-[var(--gold)]">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/50">
                {p.excerpt}
              </p>
              <span className="mt-5 text-xs font-semibold text-[var(--gold)]">
                Baca panduan →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
