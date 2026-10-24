"use client";

import { motion } from "framer-motion";
import { Hash, KeyRound, MapPin, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  ALL_HASHTAGS,
  ALL_KEYWORDS,
  DIRECTORY_PAIRS,
  SEO_STATS,
} from "@/lib/seo-keywords";

/**
 * SEO HUB — "Direktori Kata Kunci & Tagar".
 *
 * Menampilkan korpus 1.000 kata kunci + 1.000 tagar sebagai KONTEN TERLIHAT
 * (teks direktori yang sah — bukan hidden text): mesin pencari membaca
 * kombinasi layanan × kota × intent langsung dari DOM, sementara pengunjung
 * memakainya seperti indeks layanan. Area panjang memakai max-height +
 * scroll (konsisten aturan UI) dan scrollbar kustom global.
 */
export default function SeoHub() {
  const { t } = useI18n();

  return (
    <section
      id="seo-hub"
      aria-labelledby="seo-hub-judul"
      className="section-padding relative py-24"
    >
      {/* Aura dekoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {t("seoHub.kicker")}
          </span>
          <h2
            id="seo-hub-judul"
            className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {t("seoHub.judul")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            {t("seoHub.sub")}
          </p>

          {/* Statistik korpus */}
          <div
            role="list"
            aria-label={t("seoHub.statAria")}
            className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { icon: KeyRound, nilai: SEO_STATS.keywords, label: t("seoHub.statKw") },
              { icon: Hash, nilai: SEO_STATS.hashtags, label: t("seoHub.statTag") },
              { icon: MapPin, nilai: SEO_STATS.cities, label: t("seoHub.statKota") },
              { icon: Sparkles, nilai: SEO_STATS.services, label: t("seoHub.statLayanan") },
            ].map(({ icon: Icon, nilai, label }) => (
              <div
                key={label}
                role="listitem"
                className="rounded-2xl border border-emerald-400/15 bg-surface/60 px-4 py-3"
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
                  <span className="font-display text-2xl font-bold text-white">
                    {nilai}
                  </span>
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-foreground/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Direktori Layanan × Kota */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12"
        >
          <h3 className="font-display text-lg font-bold text-emerald-bright">
            {t("seoHub.dirJudul")}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={t("seoHub.dirJudul")}>
            {DIRECTORY_PAIRS.map((pair) => (
              <li
                key={pair}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-100/85"
              >
                {pair}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* 1.000 Kata Kunci */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-white">
                {t("seoHub.kwJudul")}
              </h3>
              <span className="shrink-0 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-bright">
                {SEO_STATS.keywords}
              </span>
            </div>
            <div className="custom-scroll mt-4 max-h-80 overflow-y-auto rounded-2xl border border-emerald-400/15 bg-surface/40 p-4">
              <ul className="flex flex-wrap gap-1.5" aria-label={t("seoHub.kwJudul")}>
                {ALL_KEYWORDS.map((kw) => (
                  <li
                    key={kw}
                    className="rounded-md bg-emerald-400/[0.06] px-2 py-0.5 text-[11px] leading-5 text-emerald-100/70"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 1.000 Tagar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-white">
                {t("seoHub.tagJudul")}
              </h3>
              <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold">
                {SEO_STATS.hashtags}
              </span>
            </div>
            <div className="custom-scroll mt-4 max-h-80 overflow-y-auto rounded-2xl border border-gold/15 bg-surface/40 p-4">
              <ul className="flex flex-wrap gap-1.5" aria-label={t("seoHub.tagJudul")}>
                {ALL_HASHTAGS.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-gold/[0.06] px-2 py-0.5 text-[11px] leading-5 text-gold/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <p className="mt-8 text-center text-xs text-foreground/50">
          {t("seoHub.catatan")}
        </p>
      </div>
    </section>
  );
}
