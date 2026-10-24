"use client";

import { motion } from "framer-motion";
import {
  type LucideIcon,
  BadgeCheck,
  FileSpreadsheet,
  MessagesSquare,
  Sparkles,
  Workflow,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

const ICON_MAP: Record<string, LucideIcon> = {
  MessagesSquare,
  FileSpreadsheet,
  Workflow,
  BadgeCheck,
};

const FALLBACK_ICON = Sparkles;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function StepNode({ icon, no }: { icon: LucideIcon; no: string }) {
  const Icon = icon;
  return (
    <div className="glass relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full ring-1 ring-emerald-400/40 shadow-[0_0_30px_-10px_rgba(52,211,153,0.45)]">
      <Icon className="h-8 w-8 text-emerald-300" aria-hidden />
      <span className="font-display absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-gold/60 bg-[#0a1613] text-[11px] font-bold text-gold">
        {no}
      </span>
    </div>
  );
}

export default function Process() {
  const { t } = useI18n();
  return (
    <section
      id="proses"
      aria-label={t("process.ariaLabel")}
      className="section-padding relative overflow-hidden py-24 md:py-32"
    >
      {/* Latar grid halus */}
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 -z-10" />

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
            {t("process.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("process.judulA")}{" "}
            <span className="gradient-text-gold">{t("process.judulB")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/60">
            {t("process.sub")}
          </p>
        </motion.div>

        {/* Desktop — 4 kolom + garis penghubung */}
        <div className="relative mt-16 hidden md:grid md:grid-cols-4 md:gap-6">
          <div
            aria-hidden
            className="border-animated absolute left-[12.5%] right-[12.5%] top-10 h-px"
          />
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] ?? FALLBACK_ICON;
            return (
              <motion.div
                key={step.no}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <StepNode icon={Icon} no={step.no} />
                <div className="glass card-glow mt-6 w-full rounded-2xl p-5">
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile — stack vertikal dengan rail kiri */}
        <div className="relative mt-14 md:hidden">
          <div
            aria-hidden
            className="absolute bottom-6 left-10 top-4 w-px bg-gradient-to-b from-emerald-400/60 via-gold/40 to-transparent"
          />
          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] ?? FALLBACK_ICON;
              return (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  className="relative flex items-start gap-5"
                >
                  <div className="h-20 w-20">
                    <StepNode icon={Icon} no={step.no} />
                  </div>
                  <div className="glass flex-1 rounded-2xl p-4">
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-emerald-50/60">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
