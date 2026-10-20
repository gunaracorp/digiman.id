"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import type { SiteSettings } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero({ settings }: { settings: SiteSettings }) {
  const { t, tArr } = useI18n();
  const [wordIdx, setWordIdx] = useState(0);
  const heroWords = useMemo(() => tArr("hero.words"), [tArr]);

  // Kata berputar — interval 2,4 detik.
  useEffect(() => {
    if (!heroWords || heroWords.length <= 1) return;
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % heroWords.length),
      2400,
    );
    return () => clearInterval(id);
  }, [heroWords]);

  const rotatingWord = heroWords[wordIdx] ?? "";
  const waHref = `https://wa.me/${settings.waNumber}?text=${encodeURIComponent(
    t("hero.waPesan"),
  )}`;

  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
      aria-label={t("hero.ariaLabel")}
    >
      {/* Lapisan latar: aurora, bintang, grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-aurora absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="animate-aurora-rev absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <div className="section-padding relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[7fr_5fr] lg:gap-10">
        {/* Kolom kiri — teks */}
        <div>
          {/* Baris badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-50/90">
              <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
              {t("hero.badgeSk")} {settings.skNumber}
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-50/90">
              <BadgeCheck className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
              {t("hero.badgeSejak")}
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-50/90">
              <BadgeCheck className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
              {t("hero.badgeBerdiri")} {settings.established}
            </span>
          </motion.div>

          {/* Judul utama */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t("hero.titleEm")}{" "}
            <span className="gradient-text-gold">
              {t("hero.title2")} {t("hero.title1")}.
            </span>
          </motion.h1>

          {/* Kata berputar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-5 flex items-baseline gap-3 text-base sm:text-lg"
          >
            <span className="shrink-0 text-emerald-50/60">{t("hero.prioritas")}</span>
            <span className="relative inline-flex min-h-7 items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWord}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="font-semibold text-emerald-300"
                >
                  {rotatingWord}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-5 max-w-xl text-base leading-relaxed text-emerald-50/70 sm:text-lg"
          >
            {settings.heroSub}
          </motion.p>

          {/* Baris CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="shimmer-btn inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 px-7 py-3.5 text-sm font-bold text-emerald-950 shadow-[0_0_45px_-10px_rgba(242,193,78,0.55)] transition-transform duration-300 hover:scale-[1.04] sm:text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaUtama")}
            </a>
            <a
              href="#layanan"
              className="glass card-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-emerald-50 transition-colors duration-300 hover:text-gold sm:text-base"
            >
              {t("hero.ctaKedua")}
            </a>
          </motion.div>

          {/* Strip kepercayaan */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3"
            aria-label={t("hero.trustAria")}
          >
            {[t("hero.trust1"), t("hero.trust2"), t("hero.trust3")].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-emerald-50/80"
                >
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ),
            )}
          </motion.ul>
        </div>

        {/* Kolom kanan — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass relative rounded-[2rem] p-3 sm:p-4">
            <Image
              src="/hero-artwork.png"
              alt={t("hero.artworkAlt")}
              width={864}
              height={1152}
              priority
              className="h-auto w-full rounded-[2rem]"
            />
          </div>

          {/* Chip mengambang 1 */}
          <div className="animate-floaty glass absolute -left-3 top-10 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:-left-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15">
              <BadgeCheck className="h-5 w-5 text-emerald-bright" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-white">
              {t("hero.chip1")}
            </span>
          </div>

          {/* Chip mengambang 2 */}
          <div className="animate-floaty-slow glass absolute -right-3 bottom-10 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:-right-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-300/15">
              <FileCheck2 className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-white">
              {t("hero.chip2")}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Petunjuk scroll */}
      <motion.a
        href="#tujuh-langit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-emerald-100/60 transition-colors hover:text-gold"
        aria-label={t("hero.scrollCueAria")}
      >
        <span className="sr-only">{t("hero.scrollCue")}</span>
        <ChevronDown className="animate-bounce-soft h-6 w-6" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
