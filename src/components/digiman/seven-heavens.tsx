"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  FileCheck2,
  Landmark,
  Lightbulb,
  Rocket,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SEVEN_HEAVENS, type HeavenLayer } from "@/lib/digiman-data";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Peta ikon dari nama string pada data → komponen lucide. */
const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  FileCheck2,
  ScrollText,
  Lightbulb,
  BadgeCheck,
  Landmark,
  Rocket,
};

function glowFor(index: number, isLast: boolean) {
  return isLast
    ? "rgba(255, 233, 168, 0.35)"
    : `rgba(52, 211, 153, ${0.16 + index * 0.028})`;
}

type LayerCardProps = {
  layer: HeavenLayer;
  index: number;
  isLast: boolean;
  active: boolean;
  onActive: (index: number) => void;
};

function LayerCard({ layer, index, isLast, active, onActive }: LayerCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Kartu dianggap "aktif" saat berada di pita tengah viewport.
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  const Icon = ICON_MAP[layer.icon] ?? Sparkles;
  const glow = glowFor(index, isLast);

  return (
    <motion.div
      id={`lapis-${index}`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.75, ease: EASE }}
      className={`scroll-mt-28 ${active && !isLast ? "ring-1 ring-emerald-400/30 rounded-[2rem]" : ""} ${active && isLast ? "ring-1 ring-gold/30 rounded-[2rem]" : ""}`}
    >
      <motion.div
        ref={ref}
        animate={{
          scale: active ? 1 : 0.95,
          opacity: active ? 1 : 0.35,
          filter: active ? "blur(0px)" : "blur(1.5px)",
          boxShadow: active
            ? `0 0 90px -20px ${glow}`
            : "0 0 0px -20px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.55, ease: EASE }}
        className={`glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10 ${
          isLast ? "border-gold/40" : ""
        }`}
        aria-label={`Lapis ${layer.no}: ${layer.title}`}
      >
        {/* Overlay gradien khusus lapis 7 */}
        {isLast && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-emerald-400/10"
          />
        )}

        <div className="relative">
          {/* Baris atas: tile ikon + nomor besar */}
          <div className="flex items-start justify-between gap-4">
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ${
                isLast
                  ? "from-yellow-300 to-amber-500 text-emerald-950"
                  : "from-emerald-400 to-emerald-600 text-emerald-950"
              }`}
            >
              <Icon className="h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span
              className={`font-display text-5xl leading-none font-bold select-none sm:text-6xl ${
                isLast ? "gradient-text-gold" : "text-emerald-400/25"
              }`}
              aria-hidden="true"
            >
              {layer.no}
            </span>
          </div>

          {/* Badge puncak (lapis 7) */}
          {isLast && (
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-yellow-300/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-gold-light uppercase">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Puncak Perjalanan
            </span>
          )}

          <h3 className="font-display mt-5 text-2xl font-bold text-white sm:text-3xl">
            {layer.title}
          </h3>
          <p
            className={`mt-1.5 text-xs font-semibold tracking-[0.22em] uppercase ${
              isLast ? "text-gold-light" : "text-emerald-300/80"
            }`}
          >
            {layer.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-emerald-50/70 sm:text-base">
            {layer.desc}
          </p>

          {/* Chip butir layanan */}
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {layer.items.map((item) => (
              <li
                key={item}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium sm:text-[13px] ${
                  isLast
                    ? "border-gold/40 bg-yellow-300/10 text-gold-light"
                    : "border-emerald-400/25 bg-emerald-400/5 text-emerald-100/80"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SevenHeavens() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleActive = useCallback((index: number) => setActiveIdx(index), []);

  // Progres vertikal rel kiri, terikat pada posisi section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.75"],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  const scrollToLayer = useCallback((index: number) => {
    document
      .getElementById(`lapis-${index}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <section
      id="tujuh-langit"
      ref={sectionRef}
      className="section-padding relative mx-auto w-full max-w-7xl py-24 sm:py-32"
      aria-labelledby="tujuh-langit-heading"
    >
      {/* Header terpusat */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-gold-light uppercase"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Konsep Signature
        </motion.span>
        <motion.h2
          id="tujuh-langit-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="font-display mt-5 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl"
        >
          7 Lapis Langit <span className="gradient-text-gold">Legalitas</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="mt-5 text-base leading-relaxed text-emerald-50/70 sm:text-lg"
        >
          Perjalanan legalitas bisnis kami petakan menjadi tujuh lapis — dari
          fondasi badan hukum hingga puncak transformasi digital. Setiap lapis
          adalah tonggak yang membuat usaha Anda semakin kokoh dan siap tumbuh.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[280px_1fr] lg:gap-12">
        {/* Rel vertikal kiri (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-32">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-emerald-50/40 uppercase">
              Peta Perjalanan
            </p>
            <nav aria-label="Navigasi 7 lapis langit" className="relative pl-6">
              {/* Garis dasar + garis progres emas */}
              <div
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-0 w-px bg-emerald-400/15"
              >
                <motion.div
                  style={{ scaleY: railScale }}
                  className="h-full w-full origin-top bg-gradient-to-b from-gold-light via-gold to-emerald-400"
                />
              </div>
              <ul className="space-y-1.5">
                {SEVEN_HEAVENS.map((layer, i) => {
                  const isActive = activeIdx === i;
                  return (
                    <li key={layer.no}>
                      <button
                        type="button"
                        onClick={() => scrollToLayer(i)}
                        aria-current={isActive ? "true" : undefined}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 ${
                          isActive
                            ? "bg-emerald-400/8"
                            : "hover:bg-emerald-400/5"
                        }`}
                      >
                        <span
                          className={`font-display text-xs font-bold tabular-nums transition-colors ${
                            isActive ? "text-gold" : "text-emerald-400/50"
                          }`}
                        >
                          {layer.no}
                        </span>
                        <span
                          className={`flex-1 text-sm transition-colors ${
                            isActive
                              ? "text-gold font-semibold"
                              : "text-emerald-50/60 group-hover:text-emerald-50/90"
                          }`}
                        >
                          {layer.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 rounded-full bg-gold transition-all duration-300 ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Tumpukan 7 kartu */}
        <div className="flex flex-col gap-7 sm:gap-9">
          {SEVEN_HEAVENS.map((layer, i) => (
            <LayerCard
              key={layer.no}
              layer={layer}
              index={i}
              isLast={i === SEVEN_HEAVENS.length - 1}
              active={activeIdx === i}
              onActive={handleActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
