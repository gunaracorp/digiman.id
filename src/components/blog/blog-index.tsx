"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Newspaper,
  Search,
  SearchX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fmtDateID, type BlogCardData } from "@/lib/blog-types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function CategoryChip({ children }: { children: ReactNode }) {
  return (
    <span className="self-start rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-bright">
      {children}
    </span>
  );
}

function CardMeta({ post }: { post: BlogCardData }) {
  const dateIso = post.publishedAt ?? post.createdAt;
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-emerald-50/50">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          {post.readMinutes} mnt baca
        </span>
        <time dateTime={dateIso}>{fmtDateID(dateIso)}</time>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
        Baca
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </span>
    </>
  );
}

function CardSkeleton() {
  return (
    <div className="glass animate-pulse rounded-2xl p-6" aria-hidden="true">
      <div className="h-5 w-24 rounded-full bg-emerald-400/10" />
      <div className="mt-4 h-5 w-3/4 rounded bg-emerald-400/10" />
      <div className="mt-2 h-5 w-1/2 rounded bg-emerald-400/10" />
      <div className="mt-5 space-y-2">
        <div className="h-3.5 w-full rounded bg-emerald-400/10" />
        <div className="h-3.5 w-5/6 rounded bg-emerald-400/10" />
        <div className="h-3.5 w-2/3 rounded bg-emerald-400/10" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="h-3.5 w-28 rounded bg-emerald-400/10" />
        <div className="h-3.5 w-12 rounded bg-emerald-400/10" />
      </div>
    </div>
  );
}

function ChipButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition",
        active
          ? "border-gold/50 bg-gold/15 text-gold shadow-[0_0_20px_-6px_rgba(242,193,78,0.5)]"
          : "glass text-emerald-50/60 hover:border-emerald-400/40 hover:text-emerald-50",
      )}
    >
      {children}
    </button>
  );
}

function BlogCard({ post, index }: { post: BlogCardData; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index, 8) * 0.07, ease: EASE }}
      className="h-full"
    >
      <a
        href={`#/blog/${post.slug}`}
        aria-label={`Baca artikel: ${post.title}`}
        className="group glass card-glow flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        <CategoryChip>{post.category}</CategoryChip>
        <h2 className="mt-4 line-clamp-2 font-display text-lg font-semibold leading-snug text-white transition group-hover:text-gold">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-emerald-50/60">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-5">
          <CardMeta post={post} />
        </div>
      </a>
    </motion.article>
  );
}

/**
 * Halaman penuh daftar blog — dirender saat hash #/blog.
 * Fetch client ke GET /api/blog (no-store) dengan ?q= & ?category=.
 */
export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogCardData[] | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    const timer = setTimeout(
      async () => {
        setLoading(true);
        setError(false);
        try {
          const params = new URLSearchParams();
          if (query.trim()) params.set("q", query.trim());
          if (category) params.set("category", category);
          const qs = params.toString();
          const res = await fetch(`/api/blog${qs ? `?${qs}` : ""}`, {
            cache: "no-store",
            signal: ac.signal,
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = (await res.json()) as { posts?: BlogCardData[] };
          const list = data.posts ?? [];
          setPosts(list);
          // Kategori selalu di-refresh dari hasil tanpa filter (kumpulan penuh).
          if (!query.trim() && !category) {
            setCategories(
              Array.from(new Set(list.map((p) => p.category).filter(Boolean))),
            );
          }
        } catch (err) {
          if ((err as Error).name !== "AbortError") setError(true);
        } finally {
          if (!ac.signal.aborted) setLoading(false);
        }
      },
      query.trim() ? 300 : 0,
    );
    return () => {
      clearTimeout(timer);
      ac.abort();
    };
  }, [query, category, nonce]);

  const resetFilter = useCallback(() => {
    setQuery("");
    setCategory(null);
  }, []);

  const retry = useCallback(() => setNonce((n) => n + 1), []);

  return (
    <main className="relative min-h-screen overflow-hidden pb-24 pt-28">
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="starfield pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <a
            href="/#/"
            className="glass inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-emerald-50/80 transition hover:border-gold/40 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Beranda
          </a>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
              Blog
            </span>
            <h1 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Wawasan &amp;{" "}
              <span className="gradient-text-gold">Pengetahuan</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-emerald-50/60 sm:text-base">
              Catatan, studi kasus, dan panduan praktis seputar legalitas,
              sistem operasi bisnis, serta digitalisasi — langsung dari meja
              tim DIGIMAN.ID.
            </p>
          </div>
        </motion.header>

        {/* Kontrol pencarian & filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="mt-10"
        >
          <div className="glass mx-auto flex h-12 max-w-xl items-center gap-3 rounded-full px-5">
            <Search className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari judul atau ringkasan artikel..."
              aria-label="Cari artikel"
              className="h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-emerald-50/40"
            />
          </div>

          <div
            role="group"
            aria-label="Filter kategori"
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            <ChipButton active={category === null} onClick={() => setCategory(null)}>
              Semua
            </ChipButton>
            {categories.map((c) => (
              <ChipButton key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </ChipButton>
            ))}
          </div>
        </motion.div>

        {/* Hasil */}
        <section
          aria-label="Daftar artikel"
          aria-busy={loading || undefined}
          className={cn(
            "mt-12 transition-opacity duration-300",
            loading && posts !== null ? "opacity-50" : "opacity-100",
          )}
        >
          {posts === null && !error ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : error && posts === null ? (
            <div className="glass mx-auto max-w-md rounded-2xl p-10 text-center">
              <SearchX className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
              <h2 className="font-display mt-4 text-xl font-bold text-white">
                Gagal memuat artikel
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
                Terjadi kendala jaringan atau server. Silakan coba lagi.
              </p>
              <button
                type="button"
                onClick={retry}
                className="glass mt-6 inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold text-emerald-50 transition hover:border-gold/40 hover:text-gold"
              >
                Muat ulang
              </button>
            </div>
          ) : posts !== null && posts.length === 0 ? (
            <div className="glass mx-auto max-w-md rounded-2xl p-10 text-center">
              <SearchX className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
              <h2 className="font-display mt-4 text-xl font-bold text-white">
                Tidak ada artikel ditemukan
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
                Coba kata kunci lain, atau reset filter untuk melihat semua
                artikel.
              </p>
              <button
                type="button"
                onClick={resetFilter}
                className="glass mt-6 inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold text-emerald-50 transition hover:border-gold/40 hover:text-gold"
              >
                Reset pencarian
              </button>
            </div>
          ) : posts !== null ? (
            <>
              <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-emerald-50/40">
                {posts.length} artikel
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
            </>
          ) : null}
        </section>
      </div>
    </main>
  );
}
