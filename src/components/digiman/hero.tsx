"use client";

import { Fragment, useEffect, useState } from "react";
import { m, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, ChevronDown, Sparkles, Star } from "lucide-react";
import ParticleField from "./particle-field";
import { useI18n } from "@/components/i18n/locale-provider";

const badges = [
  { label: "PT", x: "8%", y: "20%", delay: 0 },
  { label: "CV", x: "86%", y: "18%", delay: 0.8 },
  { label: "NIB", x: "10%", y: "56%", delay: 1.6 },
  { label: "NPWP", x: "88%", y: "54%", delay: 2.4 },
  { label: "MEREK™", x: "80%", y: "74%", delay: 3.2 },
  { label: "HALAL", x: "14%", y: "76%", delay: 4 },
];


export default function Hero({
  waNumber,
  headline,
  sub,
  rotatingWords,
}: {
  waNumber?: string;
  headline?: string;
  sub?: string;
  rotatingWords?: string[];
}) {
  const { dict, locale } = useI18n();
  // Bahasa lain memakai kamus; Indonesia memakai konten yang dikelola admin (DB)
  const rotating =
    locale !== "id" ? dict.hero.words : rotatingWords && rotatingWords.length >= 2 ? rotatingWords : dict.hero.words;
  const headlineText = locale !== "id" ? dict.hero.headline : headline?.trim() || dict.hero.headline;
  const subText = locale !== "id" ? dict.hero.sub : sub?.trim() || dict.hero.sub;
  const headlineWords = headlineText.split(/\s+/).filter(Boolean);
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const orbX = useTransform(sx, (v) => v * 40);
  const orbY = useTransform(sy, (v) => v * 40);
  const orbX2 = useTransform(sx, (v) => v * -55);
  const orbY2 = useTransform(sy, (v) => v * -55);
  const badgeX = useTransform(sx, (v) => v * 18);
  const badgeY = useTransform(sy, (v) => v * 18);

  const { scrollYProgress } = useScroll();
  const heroFade = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroRise = useTransform(scrollYProgress, [0, 0.08], [0, -120]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    const iv = setInterval(() => setWordIndex((i) => (i + 1) % rotating.length), 2400);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <section id="beranda" className="relative flex min-h-screen items-center overflow-hidden noise-overlay">
      {/* Backdrops */}
      <div className="absolute inset-0 starfield opacity-70" aria-hidden />
      <div className="absolute inset-0 grid-lines" aria-hidden />
      <m.div
        aria-hidden
        style={{ x: orbX, y: orbY }}
        className="animate-aurora absolute -top-32 left-[8%] h-[480px] w-[480px] rounded-full bg-emerald-500/20 blur-[130px]"
      />
      <m.div
        aria-hidden
        style={{ x: orbX2, y: orbY2 }}
        className="animate-aurora-rev absolute bottom-[-10%] right-[5%] h-[520px] w-[520px] rounded-full bg-yellow-500/14 blur-[140px]"
      />
      <ParticleField />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050d0a] to-transparent" aria-hidden />

      {/* Floating document badges */}
      <m.div aria-hidden style={{ x: badgeX, y: badgeY }} className="pointer-events-none absolute inset-0 hidden md:block">
        {badges.map((b, i) => (
          <m.div
            key={b.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 160, damping: 14 }}
            className="absolute"
            style={{ left: b.x, top: b.y }}
          >
            <div
              className="animate-floaty glass flex items-center gap-1.5 rounded-2xl px-4 py-2.5"
              style={{ animationDelay: `${b.delay * 0.4}s` }}
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="font-display text-sm font-semibold tracking-wide text-emerald-50">{b.label}</span>
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Content */}
      <m.div style={{ opacity: heroFade, y: heroRise }} className="section-padding relative z-10 mx-auto w-full max-w-7xl pt-28 pb-24">
        {/* Metrik live ala situs terbaik dunia — angka berdenyut, bukan klaim statis */}
        <m.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-5 flex w-fit items-center gap-2 text-xs text-emerald-100/50 sm:text-sm"
        >
          <span>{dict.hero.liveLabel}</span>
          <m.span
            className="font-display font-bold tabular-nums text-gold-light"
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {dict.hero.liveValue}
          </m.span>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-950/50 px-5 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/90">
            PT Digital Bisnis Manajemen
          </span>
        </m.div>

        <h1 className="mx-auto max-w-5xl text-center text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {headlineWords.map((w, i) => {
            const hasDigit = /\d/.test(w);
            const isLast = i === headlineWords.length - 1 && /\.$/.test(w);
            return (
              <Fragment key={i}>
                <m.span
                  initial={{ opacity: 0, y: 44, rotateX: -60 }}
                  animate={mounted ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.035, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${
                    hasDigit ? "gradient-text-gold font-display" : ""
                  } ${isLast ? "gradient-text-emerald" : ""}`}
                >
                  {w}
                </m.span>
                {/* Spasi asli antar kata — teks H1 terbaca utuh oleh mesin pencari */}
                {i < headlineWords.length - 1 ? " " : null}
              </Fragment>
            );
          })}
        </h1>

        {/* Rotating service word */}
        <m.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-6 flex h-9 max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 text-center"
        >
          <span className="text-base text-emerald-100/70 sm:text-xl">{dict.hero.startFrom}</span>
          <span className="relative inline-flex h-9 min-w-[190px] items-center justify-center overflow-hidden sm:min-w-[280px]">
            {rotating.map((r, i) => (
              <m.span
                key={r}
                className="absolute font-display text-lg font-bold text-gold-light sm:text-xl"
                initial={false}
                animate={
                  i === wordIndex
                    ? { y: 0, opacity: 1, filter: "blur(0px)" }
                    : { y: i < wordIndex ? -36 : 36, opacity: 0, filter: "blur(4px)" }
                }
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {r}
              </m.span>
            ))}
          </span>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-emerald-50/65 sm:text-lg"
        >
          {subText}
        </m.p>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#kontak"
            className="shimmer-btn group relative flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-8 py-4 text-base font-bold text-emerald-950 shadow-[0_14px_44px_-10px_rgba(52,211,153,0.65)] transition-all hover:scale-[1.04] hover:shadow-[0_18px_54px_-8px_rgba(52,211,153,0.85)]"
          >
            {dict.hero.ctaPrimary}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`https://wa.me/${waNumber || "6281333397223"}?text=${encodeURIComponent(dict.hero.waGreeting)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-950/40 px-8 py-4 text-base font-semibold text-emerald-100 backdrop-blur-md transition-all hover:border-gold/60 hover:bg-emerald-900/40 hover:text-gold-light"
          >
            <MessageCircle className="h-5 w-5 text-gold" />
            {dict.hero.ctaSecondary}
          </a>
        </m.div>

        {/* Mini trust row */}
        <m.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-emerald-50/55"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> {dict.hero.trustOfficial}
          </span>
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" /> {dict.hero.trustRating}
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold" /> {dict.hero.trustSpeed}
          </span>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <m.a
        href="#tujuh-langit"
        aria-label="Gulir ke bawah"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 4.2 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-emerald-100/50 transition-colors hover:text-gold">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">{dict.hero.scroll}</span>
          <ChevronDown className="animate-bounce-soft h-5 w-5" />
        </div>
      </m.a>
    </section>
  );
}
