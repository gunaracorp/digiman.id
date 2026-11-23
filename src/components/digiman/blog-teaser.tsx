import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";

/**
 * Section "Artikel Terbaru" di beranda — internal linking kuat ke blog,
 * sinyal konten segar untuk mesin pencari. Server component murni:
 * nol JS klien, animasi hanya CSS transition.
 */
export default function BlogTeaser({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return (
    <section id="artikel" aria-labelledby="artikel-heading" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Blog
            </p>
            <h2
              id="artikel-heading"
              className="mt-3 font-[family-name:var(--font-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Panduan terbaru dari dewan pakar
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
              Artikel baru terbit setiap minggu — biaya, syarat, dan urutan
              legalitas yang benar, ditulis dari kasus nyata klien.
            </p>
          </div>
          <Link
            href="/blog"
            className="rounded-full border border-[var(--gold)]/40 px-5 py-2.5 text-sm font-semibold text-[var(--gold)] transition-colors hover:bg-[var(--gold)]/10"
          >
            Lihat semua artikel →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:bg-white/[0.05]"
            >
              <p className="text-xs text-white/40">
                {formatDate(p.date)} · {p.readMinutes} menit baca
              </p>
              <h3 className="mt-3 text-base font-bold leading-snug text-white group-hover:text-[var(--gold)]">
                {p.title}
              </h3>
              <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-white/50">
                {p.excerpt}
              </p>
              <span className="mt-5 text-xs font-semibold text-[var(--gold)]">
                Baca panduan →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
