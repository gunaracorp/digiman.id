"use client";

/**
 * Client Dashboard — widget kartu utama.
 *
 * F05 HeroProjectCard   : hero proyek + status badge framer/CSS pulse.
 * F12 KpiStrip          : 4 statistik dengan animasi count-up.
 * F08 TierBreakdownCard : bar bertumpuk P0–P3.
 * F11 MilestoneTimeline : timeline vertikal 6 fase (Asia/Jakarta).
 * F20 LegalitasCard     : checklist legalitas.
 * F21 DigitalisasiCard  : progres inisiatif digital.
 * F22 GoalsCard         : tracker sasaran (OKR).
 * F24 TeamCard          : tim & stakeholder.
 */

import {
  BadgeCheck,
  CalendarDays,
  CircleCheck,
  CircleDot,
  Circle,
  Flag,
  Hourglass,
  Eye,
  ShieldCheck,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { DashCard, IconChip } from "@/components/dashboard/dash-primitives";
import type {
  LegalItem,
  Milestone,
  DigitalItem,
  GoalItem,
  ProgressInfo,
  ProjectInfo,
  TeamMember,
  TierStat,
} from "@/components/dashboard/dash-types";
import { tierRows } from "@/components/dashboard/dash-types";
import {
  fmtDate,
  fmtDateTime,
  rupiah,
  useCountUp,
} from "@/components/dashboard/dash-utils";

/* ───────────────────────────── F05 — Hero ───────────────────────────── */

const STATUS_STYLE: Record<
  string,
  { dot: string; badge: string; key: string }
> = {
  ON_TRACK: {
    dot: "bg-emerald-400",
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-bright",
    key: "dash.status.ON_TRACK",
  },
  ATTENTION: {
    dot: "bg-amber-400",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    key: "dash.status.ATTENTION",
  },
  AT_RISK: {
    dot: "bg-red-400",
    badge: "border-red-400/30 bg-red-400/10 text-red-300",
    key: "dash.status.AT_RISK",
  },
  DONE: {
    dot: "bg-gold",
    badge: "border-gold/40 bg-gold/10 text-gold",
    key: "dash.status.DONE",
  },
};

export function HeroProjectCard({
  project,
  greeting,
  clock,
}: {
  project: ProjectInfo;
  greeting: string;
  clock: string;
}) {
  const { t, locale } = useI18n();
  const status = STATUS_STYLE[project.status] ?? STATUS_STYLE.ON_TRACK;

  return (
    <Card className="glass card-glow relative overflow-hidden border-emerald-400/15 bg-card/70 p-6 md:p-8">
      {/* dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-40 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-gold/40 bg-gold/10 font-mono text-[11px] tracking-wider text-gold" variant="outline">
              {project.code}
            </Badge>
            <Badge className="border-emerald-400/25 bg-emerald-400/10 text-[11px] text-emerald-bright" variant="outline">
              {project.packageCode}
            </Badge>
            <span className="text-xs text-muted-foreground">{clock} WIB</span>
          </div>
          <h1 className="font-display mt-4 text-2xl font-bold text-foreground md:text-3xl">
            {greeting ? `${greeting}, ` : ""}
            <span className="gradient-text-gold">{project.clientName}</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.company} · {project.packageName}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-emerald-bright" aria-hidden="true" />
              {t("dash.started")}: {fmtDate(project.startedAt, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Flag className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {t("dash.target")}: {fmtDate(project.targetDoneAt, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Wallet className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {rupiah(project.price)}
            </span>
          </div>
        </div>

        {/* Status badge dengan denyut halus (F05) */}
        <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
          <Badge
            variant="outline"
            className={cn("px-3 py-1.5 text-xs font-bold", status.badge)}
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", status.dot)} />
              <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", status.dot)} />
            </span>
            {t(status.key)}
          </Badge>
          <p className="text-xs text-muted-foreground">
            {t("dash.kpi.health")}: <span className="font-bold text-gold">{project.healthScore}</span>/100
          </p>
        </div>
      </div>
    </Card>
  );
}

/* ───────────────────────── F12 — KPI strip ───────────────────────── */

function CountValue({ value, suffix }: { value: number; suffix?: string }) {
  const n = useCountUp(value);
  return (
    <span className="font-display text-2xl font-bold text-foreground md:text-3xl">
      {n}
      {suffix ? <span className="text-lg text-gold">{suffix}</span> : null}
    </span>
  );
}

export function KpiStrip({
  progress,
  paymentPercent,
}: {
  progress: ProgressInfo;
  paymentPercent: number;
}) {
  const { t } = useI18n();
  const items = [
    {
      key: "dash.kpi.done",
      value: progress.done,
      suffix: "",
      sub: `/ ${progress.total}`,
      icon: CircleCheck,
      tone: "emerald" as const,
    },
    {
      key: "dash.kpi.review",
      value: progress.review,
      suffix: "",
      sub: t("dash.legend.review"),
      icon: Eye,
      tone: "gold" as const,
    },
    {
      key: "dash.kpi.pending",
      value: progress.pending,
      suffix: "",
      sub: t("dash.legend.pending"),
      icon: Hourglass,
      tone: "muted" as const,
    },
    {
      key: "dash.kpi.payment",
      value: paymentPercent,
      suffix: "%",
      sub: t("dash.legend.payment"),
      icon: Wallet,
      tone: "gold" as const,
    },
  ];

  return (
    <ul className="grid grid-cols-2 gap-4 xl:grid-cols-4" aria-label={t("dash.kpi.aria")}>
      {items.map((item) => (
        <li key={item.key}>
          <Card className="glass card-glow h-full border-emerald-400/15 bg-card/70 p-4 md:p-6">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <CountValue value={item.value} suffix={item.suffix} />
                <p className="mt-1 truncate text-xs font-medium text-muted-foreground">
                  {t(item.key)}
                </p>
              </div>
              <IconChip icon={item.icon} tone={item.tone} />
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground/70">{item.sub}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────── F08 — Tier breakdown (stacked) ─────────────────── */

export function TierBreakdownCard({ byTier }: { byTier: Record<string, TierStat> }) {
  const { t } = useI18n();
  const rows = tierRows(byTier);

  return (
    <DashCard icon={Sparkles} title={t("dash.tier.title")} desc="P0 → P3">
      <ul className="space-y-4">
        {rows.map((row) => (
          <li key={row.key}>
            <div className="mb-1.5 flex items-baseline justify-between gap-2 text-xs">
              <span className="font-semibold text-foreground">{row.key}</span>
              <span className="text-muted-foreground">
                {row.done}/{row.total} · {t("dash.legend.review")} {row.review} · {t("dash.legend.pending")} {row.pending}
              </span>
            </div>
            <div
              className="flex h-3 w-full overflow-hidden rounded-full bg-secondary"
              role="img"
              aria-label={`${row.key}: ${row.done}/${row.total}`}
            >
              <div className="h-full bg-emerald-400" style={{ width: `${(row.done / Math.max(1, row.total)) * 100}%` }} />
              <div className="h-full bg-gold" style={{ width: `${(row.review / Math.max(1, row.total)) * 100}%` }} />
              <div className="h-full bg-[#2a4a3f]" style={{ width: `${(row.pending / Math.max(1, row.total)) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400" />{t("dash.legend.done")}</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold" />{t("dash.legend.review")}</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#2a4a3f] ring-1 ring-border" />{t("dash.legend.pending")}</span>
      </p>
    </DashCard>
  );
}

/* ─────────────────── F11 — Milestone timeline ─────────────────── */

export function MilestoneTimelineCard({ milestones }: { milestones: Milestone[] }) {
  const { t, locale } = useI18n();

  return (
    <DashCard icon={Flag} title={t("dash.timeline.title")} desc="Asia/Jakarta">
      <ol className="relative space-y-5 pl-1">
        {milestones.map((m, i) => {
          const last = i === milestones.length - 1;
          const Icon =
            m.status === "DONE" ? CircleCheck : m.status === "ACTIVE" ? CircleDot : Circle;
          const tone =
            m.status === "DONE"
              ? "text-emerald-bright border-emerald-400/30 bg-emerald-400/10"
              : m.status === "ACTIVE"
                ? "text-gold border-gold/40 bg-gold/10"
                : "text-muted-foreground border-border bg-secondary";
          return (
            <li key={`${m.title}-${i}`} className="relative flex gap-4 pb-1">
              {/* rel vertikal */}
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute left-[17px] top-10 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-emerald-400/40 to-transparent"
                />
              )}
              <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border", tone)}>
                <Icon className={cn("h-4 w-4", m.status === "ACTIVE" && "animate-pulse")} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">{m.title}</p>
                  {m.isOverdue && (
                    <Badge variant="outline" className="border-red-400/40 bg-red-400/10 text-[10px] text-red-300">
                      {t("dash.overdue")}
                    </Badge>
                  )}
                  {m.status === "ACTIVE" && (
                    <Badge variant="outline" className="border-gold/40 bg-gold/10 text-[10px] text-gold">
                      {t("dash.milestone.ACTIVE")}
                    </Badge>
                  )}
                  {m.status === "DONE" && (
                    <Badge variant="outline" className="border-emerald-400/30 bg-emerald-400/10 text-[10px] text-emerald-bright">
                      {t("dash.legend.done")}
                    </Badge>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{fmtDateTime(m.at, locale)}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </DashCard>
  );
}

/* ─────────────────── F20 — Legalitas checklist ─────────────────── */

const LEGAL_BADGE: Record<string, { cls: string; key: string }> = {
  DONE: { cls: "border-emerald-400/30 bg-emerald-400/10 text-emerald-bright", key: "dash.legalStatus.DONE" },
  IN_REVIEW: { cls: "border-gold/40 bg-gold/10 text-gold", key: "dash.legalStatus.IN_REVIEW" },
  PENDING: { cls: "border-border bg-secondary text-muted-foreground", key: "dash.legalStatus.PENDING" },
};

export function LegalitasCard({ items }: { items: LegalItem[] }) {
  const { t } = useI18n();
  return (
    <DashCard icon={ShieldCheck} title={t("dash.legalitas.title")} desc={`${items.length} izin`}>
      <ul className="max-h-72 space-y-3 overflow-y-auto pr-1 custom-scroll">
        {items.map((item) => {
          const badge = LEGAL_BADGE[item.status] ?? LEGAL_BADGE.PENDING;
          return (
            <li key={item.name} className="flex items-start justify-between gap-3 rounded-lg border border-border/60 bg-secondary/30 px-3 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{item.name}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{item.detail}</p>
              </div>
              <Badge variant="outline" className={cn("shrink-0 text-[10px]", badge.cls)}>
                {t(badge.key)}
              </Badge>
            </li>
          );
        })}
      </ul>
    </DashCard>
  );
}

/* ─────────────────── F21 — Digitalisasi ─────────────────── */

export function DigitalisasiCard({ items }: { items: DigitalItem[] }) {
  const { t } = useI18n();
  return (
    <DashCard icon={Sparkles} title={t("dash.digital.title")}>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-2 text-xs">
              <span className="truncate font-medium text-foreground">{item.name}</span>
              <span className="font-semibold text-emerald-bright">{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2 [&>div]:bg-emerald-bright" aria-label={item.name} />
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

/* ─────────────────── F22 — Goals / OKR ─────────────────── */

export function GoalsCard({ items }: { items: GoalItem[] }) {
  const { t } = useI18n();
  return (
    <DashCard icon={Target} title={t("dash.goals.title")}>
      <ul className="max-h-72 space-y-4 overflow-y-auto pr-1 custom-scroll">
        {items.map((goal) => {
          const pct = Math.min(100, Math.round((goal.current / Math.max(1, goal.target)) * 100));
          return (
            <li key={goal.title}>
              <div className="mb-1.5 flex items-baseline justify-between gap-2 text-xs">
                <span className="truncate font-medium text-foreground">{goal.title}</span>
                <span className="shrink-0 font-semibold text-gold">
                  {goal.current}/{goal.target} {goal.unit}
                </span>
              </div>
              <Progress value={pct} className="h-2 [&>div]:bg-gold" aria-label={goal.title} />
            </li>
          );
        })}
      </ul>
    </DashCard>
  );
}

/* ─────────────────── F24 — Team & stakeholder ─────────────────── */

export function TeamCard({ members }: { members: TeamMember[] }) {
  const { t } = useI18n();
  return (
    <DashCard icon={BadgeCheck} title={t("dash.team.title")} desc={`${members.length} orang`}>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {members.map((m) => (
          <li
            key={m.name}
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/30 p-3"
          >
            <Avatar className="h-10 w-10 border border-emerald-400/25">
              <AvatarFallback className="bg-emerald-400/10 text-xs font-bold text-emerald-bright">
                {m.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{m.name}</p>
              <p className="truncate text-xs text-muted-foreground">{m.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}
