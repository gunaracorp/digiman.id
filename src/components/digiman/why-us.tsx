"use client";

import { motion } from "framer-motion";
import {
  type LucideIcon,
  Compass,
  Globe2,
  Receipt,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { WHY_US } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  Receipt,
  Globe2,
  Rocket,
  Compass,
};

const FALLBACK_ICON = Sparkles;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WhyUs() {
  const { t } = useI18n();
  return (
    <section
      id="mengapa-kami"
      aria-label={t("whyus.ariaLabel")}
      className="section-padding relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-gold inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t("whyus.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("whyus.judulA")}{" "}
            <span className="gradient-text-emerald">{t("whyus.judulB")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/60">
            {t("whyus.sub")}
          </p>
        </motion.div>

        {/* Grid alasan */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => {
            const Icon = ICON_MAP[w.icon] ?? FALLBACK_ICON;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="glass card-glow group rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/30 to-teal-600/15 ring-1 ring-emerald-400/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                </div>
                <h3 className="mt-4 font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/65">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
