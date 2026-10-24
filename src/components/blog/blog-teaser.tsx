"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Newspaper } from "lucide-react";
import { fmtDateID, type BlogCardData } from "@/lib/blog-types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function TeaserCard({ post, index }: { post: BlogCardData; index: number }) {
  const dateIso = post.publishedAt ?? post.createdAt;
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      className="h-full"
    >
      {/* Link nyata /blog/{slug} — halaman terindeks & menerima link equity */}
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Baca artikel: ${post.title}`}
        className="group glass card-glow flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        <span className="self-start rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-bright">
          {post.category}
        </span>
        <h3 className="mt-4 line-clamp-2 font-display text-lg font-semibold leading-snug text-white transition group-hover:text-gold">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-emerald-50/60">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-5">
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
        </div>
      </Link>
    </motion.article>
  );
}

/**
 * Teaser blog di landing page (id="blog") — data disediakan server
 * (props), tanpa search. Render null bila tidak ada artikel.
 */
export default function BlogTeaser({ posts }: { posts: BlogCardData[] }) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section-padding relative overflow-hidden py-24">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
            Terbaru
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Dari <span className="gradient-text-gold">Meja Pengetahuan</span>{" "}
            Kami
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-emerald-50/60 sm:text-base">
            Catatan, studi kasus, dan panduan praktis seputar legalitas serta
            sistem bisnis — langsung dari tim DIGIMAN.ID.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <TeaserCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="glass inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-bold text-emerald-50 transition hover:border-gold/40 hover:text-gold"
          >
            Lihat Semua Artikel
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
