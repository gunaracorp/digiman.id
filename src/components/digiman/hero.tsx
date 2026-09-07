"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/digiman/motion/counter";
import { HERO, HERO_METRICS } from "@/content/holding";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="beranda"
      aria-label="Pembuka"
      className="grain relative overflow-hidden"
    >
      {/* Ambient background: grid + gold glow fields */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div
        aria-hidden="true"
        className="animate-drift absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full glow-gold blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-40 h-[420px] w-[420px] rounded-full glow-gold opacity-60 blur-3xl"
      />

      <div className="shell relative z-10 flex min-h-[92svh] flex-col justify-center pb-20 pt-36 sm:pt-44">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p variants={item} className="eyebrow">
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[clamp(2.7rem,7.4vw,5.9rem)] leading-[1.04] tracking-[-0.02em]"
          >
            <span className="block">
              {HERO.line1A} <em className="italic text-gold">{HERO.line1B}</em>
            </span>
            <span className="block text-foreground/60">
              {HERO.line2A} <em className="italic text-gold">{HERO.line2B}</em>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {HERO.statement}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              className="group h-12 rounded-full px-7 text-[15px] font-medium"
            >
              <a href={HERO.primaryCta.href}>
                {HERO.primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-border px-7 text-[15px] font-medium hover:bg-accent"
            >
              <a href={HERO.secondaryCta.href}>
                {HERO.secondaryCta.label}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Metrics strip */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 md:grid-cols-4"
        >
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <dd className="flex items-baseline gap-1">
                <Counter
                  to={metric.value}
                  className="font-display text-4xl tracking-tight sm:text-5xl"
                />
                <span aria-hidden="true" className="text-gold">
                  ·
                </span>
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {metric.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
