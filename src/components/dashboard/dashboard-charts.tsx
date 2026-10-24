"use client";

/**
 * Client Dashboard — kartu chart (Recharts + SVG kustom).
 *
 * F06 ProgressRingCard : ring SVG animasi untuk 165 dokumen.
 * F07 StatusDonutCard  : donut komposisi status (done/review/pending).
 * F09 DomainBarsCard   : BarChart horizontal top-8 domain.
 * F10 HealthGaugeCard  : gauge skor kesehatan 0–100 (warna dinamis).
 * F16 PaymentAreaCard  : AreaChart akumulasi pembayaran antar-termin.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Activity, HeartPulse, Layers, PieChart, Target } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useI18n } from "@/lib/i18n";

import { DashCard } from "@/components/dashboard/dash-primitives";
import type { ProgressInfo, PaymentInfo } from "@/components/dashboard/dash-types";
import { rupiah, rupiahShort } from "@/components/dashboard/dash-utils";
import { cn } from "@/lib/utils";

const EMERALD = "#34d399";
const GOLD = "#f2c14e";
const SLATE = "#2a4a3f";

const TOOLTIP_STYLE = {
  background: "#0a1613",
  border: "1px solid rgba(52,211,153,0.3)",
  borderRadius: 12,
  color: "#e9f6f0",
  fontSize: 12,
} as const;

/* ─────────────────────────── F06 — Progress ring ─────────────────────────── */

function Ring({ percent, size = 168 }: { percent: number; size?: number }) {
  const reduce = useReducedMotion();
  const r = 66;
  const c = 2 * Math.PI * r;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      role="img"
      aria-label={`Progress ${percent}%`}
    >
      <defs>
        <linearGradient id="dash-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD} />
          <stop offset="100%" stopColor={EMERALD} />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(52,211,153,0.14)" strokeWidth="12" />
      <motion.circle
        cx="80"
        cy="80"
        r={r}
        fill="none"
        stroke="url(#dash-ring-grad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: c * (1 - percent / 100) }}
        transition={{ duration: reduce ? 0 : 1.4, ease: "easeOut" }}
        transform="rotate(-90 80 80)"
      />
    </svg>
  );
}

export function ProgressRingCard({ progress }: { progress: ProgressInfo }) {
  const { t } = useI18n();
  return (
    <DashCard icon={Target} title={t("dash.ring.title")}>
      <div className="relative mx-auto w-fit">
        <Ring percent={progress.percent} />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-bold text-gold">
            {progress.percent}%
          </span>
          <span className="text-xs text-muted-foreground">
            {progress.done}/{progress.total}
          </span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        {t("dash.ring.docs", { done: progress.done, total: progress.total })}
      </p>
    </DashCard>
  );
}

/* ─────────────────────────── F10 — Health gauge ─────────────────────────── */

function gaugeColor(score: number): string {
  if (score >= 80) return EMERALD;
  if (score >= 60) return GOLD;
  return "#f87171";
}

export function HealthGaugeCard({ score }: { score: number }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const color = gaugeColor(score);
  const levelKey = score >= 80 ? "dash.health.high" : score >= 60 ? "dash.health.mid" : "dash.health.low";
  return (
    <DashCard icon={HeartPulse} title={t("dash.health.title")}>
      <div className="flex flex-col items-center">
        <svg width="200" height="112" viewBox="0 0 200 112" role="img" aria-label={`Health score ${score}`}>
          <path
            d="M20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(52,211,153,0.14)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <motion.path
            d="M20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={color}
            strokeWidth="14"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 100 - Math.max(0, Math.min(100, score)) }}
            transition={{ duration: reduce ? 0 : 1.2, ease: "easeOut" }}
          />
        </svg>
        <p className="font-display -mt-8 text-4xl font-bold" style={{ color }}>
          {score}
          <span className="text-base text-muted-foreground">/100</span>
        </p>
        <span
          className={cn(
            "mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
            score >= 80
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-bright"
              : score >= 60
                ? "border-gold/40 bg-gold/10 text-gold"
                : "border-red-400/30 bg-red-400/10 text-red-300",
          )}
        >
          {t(levelKey)}
        </span>
      </div>
    </DashCard>
  );
}

/* ─────────────────────────── F07 — Status donut ─────────────────────────── */

export function StatusDonutCard({ progress }: { progress: ProgressInfo }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const data = [
    { key: "dash.legend.done", label: t("dash.legend.done"), value: progress.done, color: EMERALD },
    { key: "dash.legend.review", label: t("dash.legend.review"), value: progress.review, color: GOLD },
    { key: "dash.legend.pending", label: t("dash.legend.pending"), value: progress.pending, color: SLATE },
  ].filter((d) => d.value > 0);
  const total = progress.total || 1;
  const centerPercent = Math.round((progress.done / total) * 100);

  return (
    <DashCard icon={PieChart} title={t("dash.donut.title")} desc={`${progress.total} dokumen`}>
      <div className="relative mx-auto h-[210px] w-full max-w-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart_ data={data} total={total} centerPercent={centerPercent} reduce={!!reduce} />
        </ResponsiveContainer>
      </div>
      <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {data.map((d) => (
          <li key={d.key} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} aria-hidden="true" />
            <span className="font-semibold text-foreground">{d.value}</span>
            {d.label}
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

/** Donut dengan animasi stroke — dipisah agar helper di atas tetap ringkas. */
function PieChart_({
  data,
  total,
  centerPercent,
  reduce,
}: {
  data: { label: string; value: number; color: string }[];
  total: number;
  centerPercent: number;
  reduce: boolean;
}) {
  const R = 70;
  const C = 2 * Math.PI * R;
  // Segmen pra-hitung (tanpa mutasi varibel render — lint-safe React 19).
  const segments = data.reduce(
    (list, d) => {
      const startFrac = list.length > 0 ? list[list.length - 1].endFrac : 0;
      const frac = total > 0 ? d.value / total : 0;
      return [
        ...list,
        {
          color: d.color,
          label: d.label,
          dash: `${Math.max(0, C * frac - 3)} ${Math.max(0, C - C * frac + 3)}`,
          offset: -startFrac * C + C * 0.25,
          endFrac: startFrac + frac,
        },
      ];
    },
    [] as { color: string; label: string; dash: string; offset: number; endFrac: number }[],
  );
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full">
      {segments.map((seg) => (
        <motion.circle
          key={seg.label}
          cx="90"
          cy="90"
          r={R}
          fill="none"
          stroke={seg.color}
          strokeWidth="18"
          strokeLinecap="butt"
          strokeDasharray={seg.dash}
          initial={{ strokeDashoffset: reduce ? seg.offset : C }}
          animate={{ strokeDashoffset: seg.offset }}
          transition={{ duration: reduce ? 0 : 1.1, ease: "easeOut" }}
        />
      ))}
      <text
        x="90"
        y="86"
        textAnchor="middle"
        className="fill-foreground font-display"
        fontSize="24"
        fontWeight="700"
      >
        {centerPercent}%
      </text>
      <text x="90" y="104" textAnchor="middle" className="fill-muted-foreground" fontSize="10">
        {data[0]?.label ?? ""}
      </text>
    </svg>
  );
}

/* ─────────────────────── F09 — Domain horizontal bars ─────────────────────── */

export function DomainBarsCard({ progress }: { progress: ProgressInfo }) {
  const { t } = useI18n();
  const data = progress.byDomain.map((d) => ({
    ...d,
    short: d.name.length > 26 ? `${d.name.slice(0, 25)}…` : d.name,
    ratio: d.total ? Math.round((d.done / d.total) * 100) : 0,
  }));

  return (
    <DashCard
      icon={Layers}
      title={t("dash.domains.title")}
      desc={t("dash.domains.desc", { n: data.length })}
    >
      <div className="h-[264px] w-full" role="img" aria-label={t("dash.domains.title")}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 42, bottom: 0, left: 0 }}>
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="short"
              width={150}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#8fb5a7", fontSize: 11 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(52,211,153,0.06)" }}
              contentStyle={TOOLTIP_STYLE}
              formatter={(value: number, _name, item) => [
                `${item?.payload?.done ?? 0}/${item?.payload?.total ?? 0} dokumen · ${value}%`,
                item?.payload?.name ?? "",
              ]}
            />
            <Bar dataKey="ratio" fill="url(#dash-bar-grad)" radius={[0, 8, 8, 0]} barSize={16}>
              <defs>
                <linearGradient id="dash-bar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={EMERALD} />
                  <stop offset="100%" stopColor={GOLD} />
                </linearGradient>
              </defs>
              <LabelList
                dataKey="ratio"
                position="right"
                formatter={(value: number) => `${value}%`}
                style={{ fill: "#f2c14e", fontSize: 11, fontWeight: 600 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashCard>
  );
}

/* ─────────────────────── F16 — Payment accumulation ─────────────────────── */

export function PaymentAreaCard({ payment }: { payment: PaymentInfo }) {
  const { t } = useI18n();
  const data = payment.invoices.map((inv, i) => ({
    name: `T${inv.order}`,
    // Akumulasi murni (tanpa mutasi luar map — lint-safe React 19).
    cum: payment.invoices.slice(0, i + 1).reduce((sum, x) => sum + x.amount, 0),
    status: inv.status,
  }));

  return (
    <DashCard
      icon={Activity}
      title={t("dash.pay.title")}
      desc={`${rupiah(payment.paid)} / ${rupiah(payment.price)}`}
    >
      <div className="h-[236px] w-full" role="img" aria-label={t("dash.pay.title")}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -8 }}>
            <defs>
              <linearGradient id="dash-pay-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={GOLD} stopOpacity={0.4} />
                <stop offset="100%" stopColor={GOLD} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: "rgba(52,211,153,0.2)" }}
              tick={{ fill: "#8fb5a7", fontSize: 11 }}
            />
            <YAxis
              tickFormatter={(v: number) => rupiahShort(v)}
              tickLine={false}
              axisLine={false}
              width={56}
              tick={{ fill: "#8fb5a7", fontSize: 10 }}
            />
            <Tooltip
              cursor={{ stroke: "rgba(242,193,78,0.4)" }}
              contentStyle={TOOLTIP_STYLE}
              formatter={(value: number) => [rupiah(value), t("dash.pay.accumulated")]}
            />
            <Area
              type="monotone"
              dataKey="cum"
              stroke={GOLD}
              strokeWidth={2.5}
              fill="url(#dash-pay-grad)"
              dot={{ r: 3, fill: GOLD, strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </DashCard>
  );
}
