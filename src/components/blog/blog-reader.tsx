"use client";

import { useEffect, useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Eye,
  SearchX,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fmtLongDateID, type BlogPostData } from "@/lib/blog-types";
import { BRAND } from "@/lib/brand";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Override elemen markdown agar match tema emerald + gold. */
const mdComponents: Components = {
  h2: ({ children }) => (
    <h2 className="font-display mt-10 mb-4 border-l-2 border-gold pl-3 text-2xl text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold text-emerald-200">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-foreground/80">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-foreground/80">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-foreground/80">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-r-xl border-l-2 border-gold/60 bg-gold/5 p-4 italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold underline underline-offset-4 transition hover:text-gold-light"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-8 border-emerald-400/20" />,
};

type Status = "loading" | "ok" | "notfound" | "error";

/**
 * Pembaca artikel penuh — dirender saat hash #/blog/{slug}.
 * Fetch GET /api/blog?slug=... ; scroll ke atas saat mount;
 * state dibersihkan (abort + reset) saat slug berubah / keluar artikel.
 */
export default function BlogReader({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    setPost(null);
    setStatus("loading");
    window.scrollTo({ top: 0, behavior: "smooth" });
    (async () => {
      try {
        const res = await fetch(`/api/blog?slug=${encodeURIComponent(slug)}`, {
          cache: "no-store",
          signal: ac.signal,
        });
        if (res.status === 404) {
          setStatus("notfound");
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { post?: BlogPostData };
        if (!data.post) {
          setStatus("notfound");
          return;
        }
        setPost(data.post);
        setStatus("ok");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setStatus("error");
      }
    })();
    // Cleanup: batalkan fetch saat slug berubah / komponen dilepas — state bersih.
    return () => ac.abort();
  }, [slug]);

  useEffect(() => {
    setShareUrl(
      `${window.location.origin}${window.location.pathname}#/blog/${slug}`,
    );
  }, [slug]);

  // ── Loading skeleton ──
  if (status === "loading") {
    return (
      <main className="relative min-h-screen pb-24 pt-28">
        <div
          className="mx-auto max-w-3xl px-5 sm:px-8"
          aria-busy="true"
          aria-label="Memuat artikel"
        >
          <div className="h-4 w-48 animate-pulse rounded bg-emerald-400/10" />
          <div className="mt-8 h-9 w-3/4 animate-pulse rounded bg-emerald-400/10" />
          <div className="mt-3 h-9 w-1/2 animate-pulse rounded bg-emerald-400/10" />
          <div className="mt-6 flex gap-4">
            <div className="h-4 w-40 animate-pulse rounded bg-emerald-400/10" />
            <div className="h-4 w-24 animate-pulse rounded bg-emerald-400/10" />
            <div className="h-4 w-28 animate-pulse rounded bg-emerald-400/10" />
          </div>
          <div className="mt-10 space-y-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-4 animate-pulse rounded bg-emerald-400/10",
                  i % 3 === 2 ? "w-2/3" : "w-full",
                )}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // ── Artikel tidak ditemukan ──
  if (status === "notfound") {
    return (
      <main className="relative min-h-screen pb-24 pt-40">
        <div className="glass mx-auto max-w-lg rounded-2xl p-10 text-center">
          <SearchX className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
          <h1 className="font-display mt-4 text-2xl font-bold text-white">
            Artikel tidak ditemukan
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
            Artikel yang Anda cari mungkin sudah dihapus, belum diterbitkan,
            atau alamatnya salah.
          </p>
          <a
            href="#/blog"
            className="glass mt-8 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-emerald-50 transition hover:border-gold/40 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali ke Blog
          </a>
        </div>
      </main>
    );
  }

  // ── Error server ──
  if (status === "error") {
    return (
      <main className="relative min-h-screen pb-24 pt-40">
        <div className="glass mx-auto max-w-lg rounded-2xl p-10 text-center">
          <SearchX className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
          <h1 className="font-display mt-4 text-2xl font-bold text-white">
            Gagal memuat artikel
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
            Terjadi kendala jaringan atau server. Muat ulang halaman untuk
            mencoba lagi.
          </p>
          <a
            href={`#/blog/${slug}`}
            className="glass mt-8 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-emerald-50 transition hover:border-gold/40 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Coba lagi
          </a>
        </div>
      </main>
    );
  }

  if (!post) return null;

  const dateIso = post.publishedAt ?? post.createdAt;

  /** BlogPosting JSON-LD — asosiasi artikel ke kedua nama & organisasi. */
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    datePublished: dateIso,
    dateModified: post.createdAt,
    inLanguage: "id-ID",
    author: [
      {
        "@type": "Person",
        name: BRAND.people.founder.name,
        jobTitle: BRAND.people.founder.role,
      },
      {
        "@type": "Person",
        name: BRAND.people.architect.name,
        alternateName: BRAND.people.architect.handle,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: `${BRAND.legalName} (${BRAND.siteName})`,
      logo: { "@type": "ImageObject", url: `${BRAND.siteUrl}/logo-digiman.png` },
    },
    mainEntityOfPage: `${BRAND.siteUrl}/#/blog/${post.slug}`,
    image: `${BRAND.siteUrl}${BRAND.ogImage}`,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/ReadAction",
      userInteractionCount: post.views,
    },
  };
  const ARTICLE_LD_HTML = JSON.stringify(articleLd).replace(/</g, "\\u003c");
  const waShareHref = `https://wa.me/?text=${encodeURIComponent(
    `${post.title} — ${shareUrl || `#/blog/${post.slug}`}`,
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden pb-24 pt-28">
      {/* JSON-LD artikel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ARTICLE_LD_HTML }}
      />
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-gold/5 blur-[110px]"
      />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mx-auto max-w-3xl px-5 sm:px-8"
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs text-emerald-50/50"
        >
          <a href="#/" className="transition hover:text-gold">
            Beranda
          </a>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <a href="#/blog" className="transition hover:text-gold">
            Blog
          </a>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span className="text-emerald-50/80" aria-current="page">
            {post.category}
          </span>
        </nav>

        {/* Judul & meta */}
        <header className="mt-6">
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-emerald-50/50">
            <time
              dateTime={dateIso}
              className="inline-flex items-center gap-1.5"
            >
              <CalendarDays className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {fmtLongDateID(dateIso)}
            </time>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {post.readMinutes} mnt baca
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {post.views.toLocaleString("id-ID")} kali dibaca
            </span>
          </div>

          {post.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tag artikel">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-[11px] font-semibold text-gold-light"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          )}
        </header>

        {/* Konten markdown */}
        <div className="mt-10">
          <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
        </div>

        {/* Bagikan */}
        <div className="mt-10 border-t border-emerald-400/15 pt-6">
          <a
            href={waShareHref}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-emerald-50 transition hover:border-emerald-400/40"
            aria-label={`Bagikan artikel ${post.title} via WhatsApp`}
          >
            <Share2 className="h-4 w-4 text-gold" aria-hidden="true" />
            Bagikan via WhatsApp
          </a>
        </div>

        {/* CTA bawah */}
        <aside className="glass-strong relative mt-12 overflow-hidden rounded-2xl p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl"
          />
          <p className="font-display text-xl font-bold text-white sm:text-2xl">
            Ingin sistem seperti ini untuk bisnis Anda?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
            GUNARA OS menyusun hingga 165 dokumen SOP agar bisnis Anda berjalan
            tertib, terukur, dan siap diwariskan — tanpa bergantung pada satu
            orang saja. Konsultasi awal gratis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#/proposal"
              className="shimmer-btn inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-amber-500 px-6 text-sm font-bold text-emerald-950 shadow-lg shadow-gold/25 transition hover:brightness-110"
            >
              Buat Penawaran
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#/blog"
              className="glass inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-emerald-50 transition hover:border-gold/40 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Kembali ke Blog
            </a>
          </div>
        </aside>
      </motion.article>
    </main>
  );
}
