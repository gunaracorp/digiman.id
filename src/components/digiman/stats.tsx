"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Award,
  Mountain,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

/** Hitung naik halus dengan requestAnimationFrame, easing ease-out ~1,6 detik. */
function useCountUp(target: number, started: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return value;
}

type Stat = {
  icon: LucideIcon;
  label: string;
  target: number;
  suffix: string;
};

type StatCardProps = {
  stat: Stat;
  started: boolean;
  index: number;
};

function StatCard({ stat, started, index }: StatCardProps) {
  const { icon: Icon, label, target, suffix } = stat;
  const { locale } = useI18n();
  const value = useCountUp(target, started);
  // Format angka mengikuti locale aktif (id-ID default, en-US saat EN).
  const display = value.toLocaleString(locale === "en" ? "en-US" : "id-ID");

  return (
    <div
      className="glass card-glow relative overflow-hidden rounded-3xl p-6 sm:p-7"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Sisi atas bercahaya tipis */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
      />
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/12 ring-1 ring-emerald-400/25">
          <Icon className="h-5 w-5 text-emerald-bright" aria-hidden="true" />
        </span>
        <p className="text-xs font-medium tracking-[0.14em] text-emerald-50/60 uppercase">
          {label}
        </p>
      </div>
      <p
        className="font-display gradient-text-gold mt-4 text-4xl font-bold sm:text-[2.6rem]"
        aria-label={`${display}${suffix}`}
      >
        {display}
        <span className="text-gold-light">{suffix}</span>
      </p>
      {/* Pembatas halus */}
      <div
        aria-hidden="true"
        className="mt-4 h-px w-12 bg-gradient-to-r from-gold/60 to-transparent"
      />
    </div>
  );
}

type StatsProps = {
  clients: number;
  experts: number;
  layers: number;
  success: number;
};

export default function Stats({ clients, experts, layers, success }: StatsProps) {
  const { t } = useI18n();
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-60px 0px -60px 0px" });

  const stats: Stat[] = [
    { icon: Users, label: t("stats.klien"), target: clients, suffix: "+" },
    { icon: Award, label: t("stats.pakar"), target: experts, suffix: "" },
    { icon: Mountain, label: t("stats.lapis"), target: layers, suffix: "" },
    { icon: TrendingUp, label: t("stats.sukses"), target: success, suffix: "%" },
  ];

  return (
    <section
      aria-label={t("stats.ariaLabel")}
      className="section-padding relative mx-auto w-full max-w-7xl py-16 sm:py-20"
    >
      <div
        ref={gridRef}
        className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <StatCard key={`stat-${i}`} stat={stat} started={inView} index={i} />
        ))}
      </div>
    </section>
  );
}
