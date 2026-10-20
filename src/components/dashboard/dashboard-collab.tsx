"use client";

/**
 * Client Dashboard — panel kolaborasi & alat.
 *
 * F13 NotificationsMenu : lonceng + dropdown, hitung belum dibaca, mark-all.
 * F14 ActivityFeedCard  : umpan aktivitas dengan ikon per tipe & waktu relatif.
 * F25 QuickActionsCard  : 6 aksi cepat (print, meeting, chat, OS, support, cetak).
 * F26 DocSearchCard     : pencari dokumen PGA-XXX + nama domain (filter instan).
 */

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Boxes,
  CalendarPlus,
  CircleCheck,
  FileDown,
  FileSearch,
  Info,
  LifeBuoy,
  MessageSquare,
  Milestone as MilestoneIcon,
  Printer,
  Search,
  Video,
  Wallet,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { DashCard, IconChip, type Tone } from "@/components/dashboard/dash-primitives";
import type {
  Activity,
  NotificationItem,
  ProgressInfo,
} from "@/components/dashboard/dash-types";
import { docCode, docStatus, tierForDoc } from "@/components/dashboard/dash-types";
import { relTime } from "@/components/dashboard/dash-utils";

type TFn = (key: string, vars?: Record<string, string | number>) => string;

/* ───────────────────────── F13 — Notifications ───────────────────────── */

const LEVEL_META: Record<string, { icon: LucideIcon; cls: string }> = {
  info: { icon: Info, cls: "text-emerald-bright" },
  warning: { icon: AlertTriangle, cls: "text-gold" },
  success: { icon: CircleCheck, cls: "text-emerald-bright" },
};

export function NotificationsMenu({
  notifications,
  allRead,
  onMarkAllRead,
  now,
}: {
  notifications: NotificationItem[];
  allRead: boolean;
  onMarkAllRead: () => void;
  now: number | null;
}) {
  const { t, locale } = useI18n();
  const unread = allRead ? 0 : notifications.filter((n) => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="glass relative h-11 w-11 shrink-0 rounded-full text-foreground hover:text-gold"
          aria-label={`${t("dash.notif.title")}${unread ? ` (${unread})` : ""}`}
        >
          <Bell className="h-4.5 w-4.5" aria-hidden="true" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-emerald-950">
              {unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 md:w-96">
        <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
          <p className="font-display text-sm font-bold text-foreground">{t("dash.notif.title")}</p>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-xs text-gold hover:text-gold-light"
            onClick={onMarkAllRead}
            disabled={unread === 0}
          >
            {t("dash.notif.markAll")}
          </Button>
        </div>
        <ul className="custom-scroll max-h-80 overflow-y-auto">
          {notifications.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">{t("dash.notif.empty")}</li>
          )}
          {notifications.map((n) => {
            const meta = LEVEL_META[n.level] ?? LEVEL_META.info;
            const isUnread = !allRead && !n.read;
            return (
              <li
                key={n.id}
                className={cn(
                  "flex gap-3 border-b border-border/40 px-4 py-3 last:border-b-0",
                  isUnread && "bg-gold/[0.04]",
                )}
              >
                <meta.icon className={cn("mt-0.5 h-4 w-4 shrink-0", meta.cls)} aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className={cn("text-xs font-semibold", isUnread ? "text-foreground" : "text-muted-foreground")}>
                    {n.title}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{n.body}</p>
                  <p className="mt-1 text-[10px] text-muted-foreground/70">
                    {now === null ? "" : relTime(n.time, now, locale, t as unknown as TFn)}
                  </p>
                </div>
                {isUnread && <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ───────────────────────── F14 — Activity feed ───────────────────────── */

const ACTIVITY_META: Record<string, { icon: LucideIcon; tone: Tone }> = {
  DOC_APPROVED: { icon: CircleCheck, tone: "emerald" },
  DOC_REVIEW: { icon: FileSearch, tone: "gold" },
  PAYMENT: { icon: Wallet, tone: "gold" },
  MEETING: { icon: Video, tone: "teal" },
  MILESTONE: { icon: MilestoneIcon, tone: "emerald" },
  SYSTEM: { icon: Info, tone: "muted" },
};

export function ActivityFeedCard({
  activities,
  now,
}: {
  activities: Activity[];
  now: number | null;
}) {
  const { t, locale } = useI18n();
  return (
    <DashCard icon={Bell} title={t("dash.activity.title")} desc={`${activities.length} event`}>
      <ul className="custom-scroll max-h-96 space-y-1 overflow-y-auto pr-1">
        {activities.map((act) => {
          const meta = ACTIVITY_META[act.type] ?? ACTIVITY_META.SYSTEM;
          return (
            <li key={act.id} className="flex gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary/40">
              <IconChip icon={meta.icon} tone={meta.tone} className="h-8 w-8" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{act.title}</p>
                <p className="line-clamp-2 text-xs text-muted-foreground">{act.description}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground/70">
                  {now === null ? "" : relTime(act.createdAt, now, locale, t as unknown as TFn)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </DashCard>
  );
}

/* ───────────────────────── F25 — Quick actions ───────────────────────── */

type QuickAction = {
  key: string;
  icon: LucideIcon;
  onSelect?: () => void;
  href?: string;
  external?: boolean;
};

export function QuickActionsCard({
  onPrint,
  onSchedule,
  onMessage,
  onSupport,
}: {
  onPrint: () => void;
  onSchedule: () => void;
  onMessage: () => void;
  onSupport: () => void;
}) {
  const { t } = useI18n();
  const actions: QuickAction[] = [
    { key: "dash.action.report", icon: FileDown, onSelect: onPrint },
    { key: "dash.action.meeting", icon: CalendarPlus, onSelect: onSchedule },
    { key: "dash.action.message", icon: MessageSquare, onSelect: onMessage },
    { key: "dash.action.os", icon: Boxes, href: "#/os" },
    { key: "dash.action.support", icon: LifeBuoy, onSelect: onSupport },
    { key: "dash.action.print", icon: Printer, onSelect: onPrint },
  ];

  return (
    <DashCard icon={Printer} title={t("dash.actions.title")} desc={t("dash.palette.hint")}>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {actions.map((action) => {
          const cls =
            "group flex min-h-[96px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/70 bg-secondary/30 px-2 text-center text-xs font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/5 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";
          return (
            <li key={action.key} className="contents">
              {action.href ? (
                <a href={action.href} className={cls}>
                  <action.icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  {t(action.key)}
                </a>
              ) : (
                <button type="button" onClick={action.onSelect} className={cls}>
                  <action.icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  {t(action.key)}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </DashCard>
  );
}

/* ───────────────────────── F26 — Document search ───────────────────────── */

const DOC_STATUS_STYLE: Record<"done" | "review" | "pending", string> = {
  done: "border-emerald-400/40 bg-emerald-400/10 text-emerald-bright",
  review: "border-gold/40 bg-gold/10 text-gold",
  pending: "border-border bg-secondary text-muted-foreground",
};

export function DocSearchCard({ progress }: { progress: ProgressInfo }) {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const { docHits, domainHits } = useMemo(() => {
    if (!q) return { docHits: [] as number[], domainHits: [] as typeof progress.byDomain };
    const numMatch = q.match(/(\d{1,3})/);
    const n = numMatch ? parseInt(numMatch[1], 10) : NaN;
    const valid = Number.isFinite(n) && n >= 1 && n <= progress.total;
    const docHits = valid ? [n] : [];
    const domainHits = progress.byDomain
      .filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          `domain ${d.number}`.includes(q) ||
          String(d.number) === q,
      )
      .slice(0, 6);
    return { docHits, domainHits };
  }, [q, progress]);

  const resultCount = docHits.length + domainHits.length;
  const statusLabel: Record<"done" | "review" | "pending", string> = {
    done: t("dash.legend.done"),
    review: t("dash.legend.review"),
    pending: t("dash.legend.pending"),
  };

  return (
    <DashCard icon={Search} title={t("dash.search.title")} desc="165 dokumen">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("dash.search.placeholder")}
          aria-label={t("dash.search.title")}
          className="h-11 rounded-full border-border/70 bg-secondary/40 pl-10 pr-10 text-sm"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label={t("dash.search.clear")}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:text-gold"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Kosong: tampilkan ringkasan tier sebagai chip */}
      {!q && (
        <div className="mt-4">
          <p className="text-xs text-muted-foreground">{t("dash.search.hint")}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {Object.entries(progress.byTier).map(([tier, stat]) => (
              <li key={tier}>
                <Badge variant="outline" className="border-emerald-400/25 bg-emerald-400/5 text-xs text-emerald-bright">
                  {tier}: {stat.done}/{stat.total}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Ada query: hasil filter instan */}
      {q && (
        <div className="mt-4" aria-live="polite">
          <p className="text-xs text-muted-foreground">
            {resultCount === 0
              ? `${t("dash.search.empty")} "${query}"`
              : `${t("dash.search.results", { n: resultCount })} "${query}"`}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {docHits.map((n) => {
              const st = docStatus(n, progress);
              const tier = tierForDoc(n, progress.byTier);
              return (
                <li key={n}>
                  <Badge variant="outline" className={cn("gap-1.5 px-3 py-1.5 text-xs", DOC_STATUS_STYLE[st])}>
                    <span className="font-mono font-bold">{docCode(n)}</span>
                    <span className="opacity-60">·</span>
                    <span>{statusLabel[st]}</span>
                    {tier && <span className="hidden opacity-60 sm:inline">· {tier}</span>}
                  </Badge>
                </li>
              );
            })}
            {domainHits.map((d) => (
              <li key={d.number}>
                <Badge variant="outline" className="gap-1.5 px-3 py-1.5 text-xs border-gold/35 bg-gold/5 text-gold">
                  <span className="font-semibold">{d.name}</span>
                  <span className="opacity-60">·</span>
                  <span>{d.done}/{d.total}</span>
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      )}
    </DashCard>
  );
}
