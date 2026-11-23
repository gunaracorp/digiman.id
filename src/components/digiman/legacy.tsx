"use client";

/**
 * DIGIMAN.ID — Legacy: narasi pengalaman 17 tahun.
 *
 * Bercerita JUJUR dan kuat: keahlian dimulai jauh sebelum badan hukum berdiri
 * (McKinsey & Company 2009 → praktik independen 2013 → PT 2022 → era
 * digiman.id & Gunara OS). Data tahun dari LEGACY (src/lib/brand.ts) —
 * sumber tunggal, statis, bebas hydration mismatch.
 */

import { motion } from "framer-motion";
import { Award, Building2, GraduationCap, Rocket, type LucideIcon } from "lucide-react";

import { LEGACY } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Milestone = {
  yearKey: string;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  accent: string;
};

const MILESTONES: Milestone[] = [
  { yearKey: "legacy.m1Year", titleKey: "legacy.m1Title", descKey: "legacy.m1Desc", icon: GraduationCap, accent: "text-emerald-bright" },
  { yearKey: "legacy.m2Year", titleKey: "legacy.m2Title", descKey: "legacy.m2Desc", icon: Rocket, accent: "text-emerald-bright" },
  { yearKey: "legacy.m3Year", titleKey: "legacy.m3Title", descKey: "legacy.m3Desc", icon: Building2, accent: "text-gold" },
  { yearKey: "legacy.m4Year", titleKey: "legacy.m4Title", descKey: "legacy.m4Desc", icon: Award, accent: "text-gold" },
];

export default function Legacy() {
  const { t } = useI18n();

  return (
    <section
      id="perjalanan"
      aria-label={t("legacy.ariaLabel")}
      className="section-padding relative overflow-hidden py-24 md:py-32"
    >
      {/* Aura latar lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-gold-light">
            <Award className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {t("legacy.kicker")}
          </span>
          <h2 className="font-display mt-6 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("legacy.title1")}{" "}
            <span className="gradient-text-gold">{t("legacy.title2")}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-emerald-50/70 sm:text-lg">
            {t("legacy.desc")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Garis vertikal emas */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[22px] w-px bg-gradient-to-b from-emerald-400/40 via-gold/50 to-gold/10 sm:left-1/2"
          />

          <ol className="space-y-10 md:space-y-14">
            {MILESTONES.map((m, i) => {
              const Icon = m.icon;
              const left = i % 2 === 0;
              return (
                <li key={m.yearKey} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
                    className={`flex items-start gap-5 sm:items-center ${
                      left ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Tahun */}
                    <span
                      className={`glass font-display w-11 shrink-0 rounded-full py-2 text-center text-sm font-bold ring-1 sm:w-auto sm:px-5 ${
                        left ? "sm:ml-auto sm:mr-16" : "sm:mr-auto sm:ml-16"
                      } ${m.accent}`}
                      aria-hidden="true"
                    >
                      {t(m.yearKey)}
                    </span>

                    {/* Kartu */}
                    <div className="glass group relative flex-1 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:ring-gold/40 sm:max-w-md md:p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/12 ring-1 ring-emerald-400/25">
                          <Icon className={`h-5 w-5 ${m.accent}`} aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                          {t(m.titleKey)}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-emerald-50/65">
                        {t(m.descKey)}
                      </p>
                    </div>

                    {/* Spacer untuk sisi kosong (desktop) */}
                    <div aria-hidden="true" className="hidden flex-1 sm:block" />
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Footer strip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-14 text-center text-xs font-medium tracking-[0.18em] text-emerald-50/50 uppercase"
        >
          {t("legacy.footer")}
        </motion.p>
      </div>
    </section>
  );
}
