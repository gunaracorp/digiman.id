"use client";

/**
 * Client Dashboard — panel interaktif.
 *
 * F15 InvoicePanel     : tabel invoice + progres pembayaran.
 * F17 FilesCard        : file center + unduh (toast demo).
 * F18 ChatPanel        : pesan tim (bubble kiri/kanan, kirim optimistik).
 * F19 MeetingsCard     : agenda meeting + hitung mundur hari + riwayat.
 * F23 AchievementsCard : 8 lencana pencapaian (locked/unlocked).
 */

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  CircleCheck,
  Crown,
  FileArchive,
  FileSpreadsheet,
  FileText,
  Lock,
  Send,
  Video,
  Wallet,
  Download,
  Rocket,
  ShieldCheck,
  Globe,
  TrendingUp,
  FileCheck2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { DashCard } from "@/components/dashboard/dash-primitives";
import type {
  Achievement,
  ChatMessage,
  FileItem,
  Meeting,
  PaymentInfo,
} from "@/components/dashboard/dash-types";
import {
  daysUntil,
  fmtDate,
  fmtDateTime,
  fmtTime,
  rupiah,
  rupiahShort,
} from "@/components/dashboard/dash-utils";

/* ───────────────────────── F15 — Invoice table ───────────────────────── */

const INVOICE_BADGE: Record<string, { cls: string; key: string }> = {
  PAID: { cls: "border-emerald-400/30 bg-emerald-400/10 text-emerald-bright", key: "dash.invoiceStatus.PAID" },
  PENDING: { cls: "border-gold/40 bg-gold/10 text-gold", key: "dash.invoiceStatus.PENDING" },
  SCHEDULED: { cls: "border-border bg-secondary text-muted-foreground", key: "dash.invoiceStatus.SCHEDULED" },
};

export function InvoicePanel({ payment }: { payment: PaymentInfo }) {
  const { t, locale } = useI18n();
  return (
    <DashCard
      icon={Wallet}
      title={t("dash.invoices.title")}
      desc={`${rupiah(payment.paid)} ${t("dash.pay.paid")} · ${rupiah(payment.remaining)} ${t("dash.pay.remaining")}`}
    >
      {/* Progres pembayaran (F15) */}
      <div className="mb-5">
        <div className="mb-1.5 flex items-baseline justify-between text-xs">
          <span className="font-semibold text-gold">{payment.percent}%</span>
          <span className="text-muted-foreground">{rupiah(payment.price)}</span>
        </div>
        <Progress value={payment.percent} className="h-2.5 [&>div]:bg-gold" aria-label={t("dash.kpi.payment")} />
      </div>

      <div className="overflow-x-auto custom-scroll">
        <Table>
          <TableHeader>
            <TableRow className="border-border/70">
              <TableHead className="text-xs">{t("dash.invoices.no")}</TableHead>
              <TableHead className="hidden text-xs md:table-cell">{t("dash.invoices.label")}</TableHead>
              <TableHead className="text-xs">{t("dash.invoices.due")}</TableHead>
              <TableHead className="text-right text-xs">{t("dash.invoices.amount")}</TableHead>
              <TableHead className="text-right text-xs">{t("dash.invoices.status")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payment.invoices.map((inv) => {
              const badge = INVOICE_BADGE[inv.status] ?? INVOICE_BADGE.SCHEDULED;
              return (
                <TableRow key={inv.id} className="border-border/50">
                  <TableCell className="whitespace-nowrap font-mono text-xs text-foreground">
                    {inv.number.replace("INV-PRJ-2026-001", "INV")}
                  </TableCell>
                  <TableCell className="hidden max-w-[220px] truncate text-xs text-muted-foreground md:table-cell">
                    {inv.label}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                    {fmtDate(inv.dueDate, locale)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-right text-xs font-semibold text-foreground">
                    {rupiahShort(inv.amount)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className={cn("text-[10px]", badge.cls)}>
                      {t(badge.key)}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </DashCard>
  );
}

/* ───────────────────────── F17 — File center ───────────────────────── */

function fileIcon(type: string): { icon: LucideIcon; tone: "emerald" | "gold" | "teal" | "muted" } {
  switch (type) {
    case "pdf":
      return { icon: FileText, tone: "emerald" };
    case "zip":
      return { icon: FileArchive, tone: "gold" };
    case "xls":
      return { icon: FileSpreadsheet, tone: "teal" };
    default:
      return { icon: FileText, tone: "muted" };
  }
}

export function FilesCard({ files }: { files: FileItem[] }) {
  const { t, locale } = useI18n();
  const { toast } = useToast();

  return (
    <DashCard icon={FileArchive} title={t("dash.files.title")} desc={`${files.length} berkas`}>
      <ul className="max-h-80 space-y-2 overflow-y-auto pr-1 custom-scroll">
        {files.map((file) => {
          const meta = fileIcon(file.type);
          return (
            <li
              key={file.name}
              className="flex items-center gap-3 rounded-lg border border-border/60 bg-secondary/30 px-3 py-2.5"
            >
              <span className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                meta.tone === "emerald" && "border-emerald-400/25 bg-emerald-400/10 text-emerald-bright",
                meta.tone === "gold" && "border-gold/30 bg-gold/10 text-gold",
                meta.tone === "teal" && "border-teal-400/25 bg-teal-400/10 text-teal-300",
                meta.tone === "muted" && "border-border bg-secondary text-muted-foreground",
              )}>
                <meta.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {file.size} · {fmtDate(file.date, locale)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 shrink-0 text-muted-foreground hover:text-gold"
                aria-label={t("dash.files.download", { name: file.name })}
                onClick={() =>
                  toast({
                    title: t("dash.toast.file"),
                    description: t("dash.toast.fileDesc", { name: file.name }),
                  })
                }
              >
                <Download className="h-4 w-4" aria-hidden="true" />
              </Button>
            </li>
          );
        })}
      </ul>
    </DashCard>
  );
}

/* ───────────────────────── F18 — Team chat ───────────────────────── */

export function ChatPanel({
  messages,
  clientName,
  onSend,
}: {
  messages: ChatMessage[];
  clientName: string;
  onSend: (text: string) => void;
}) {
  const { t, locale } = useI18n();
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke pesan terbaru (optimistik).
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
  };

  return (
    <DashCard
      icon={Send}
      title={t("dash.chat.title")}
      desc={clientName}
      bodyClassName="flex flex-col"
    >
      <div
        ref={listRef}
        role="log"
        aria-label={t("dash.chat.title")}
        className="custom-scroll flex max-h-72 flex-col gap-3 overflow-y-auto pr-1 md:max-h-80"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "max-w-[82%] rounded-2xl border px-3.5 py-2.5",
              msg.from === "team"
                ? "self-start rounded-bl-sm border-border/70 bg-secondary/50"
                : "self-end rounded-br-sm border-gold/25 bg-gold/10",
            )}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {msg.from === "team" ? msg.sender : clientName} · {fmtTime(msg.time, locale)}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={submit} className="mt-3 flex items-center gap-2" aria-label={t("dash.chat.title")}>
        <Input
          id="dash-chat-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t("dash.chat.placeholder")}
          aria-label={t("dash.chat.placeholder")}
          className="h-11 flex-1 rounded-full border-border/70 bg-secondary/40 text-sm"
          maxLength={500}
        />
        <Button
          type="submit"
          size="icon"
          className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 text-emerald-950 hover:from-yellow-200 hover:to-amber-400"
          aria-label={t("dash.chat.send")}
          disabled={!draft.trim()}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </form>
    </DashCard>
  );
}

/* ───────────────────────── F19 — Meetings ───────────────────────── */

export function MeetingsCard({
  meetings,
  now,
}: {
  meetings: Meeting[];
  now: number | null;
}) {
  const { t, locale } = useI18n();
  const upcoming = meetings.filter((m) => m.status === "UPCOMING");
  const history = meetings.filter((m) => m.status === "DONE");

  return (
    <DashCard icon={Video} title={t("dash.meetings.title")} desc={`${upcoming.length} ${t("dash.meetings.upcoming").toLowerCase()}`}>
      <ul className="space-y-3">
        {upcoming.map((m) => {
          const days = daysUntil(m.scheduledAt, now);
          const dayLabel =
            days === null
              ? ""
              : days <= 0
                ? t("dash.today")
                : days === 1
                  ? t("dash.tomorrow")
                  : t("dash.daysLeft", { days });
          return (
            <li key={m.id} className="flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/30 px-3 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-400/25 bg-teal-400/10 text-teal-300">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">{m.title}</p>
                <p className="truncate text-xs text-muted-foreground">{m.agenda}</p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  {fmtDateTime(m.scheduledAt, locale)} · {m.host} · {t("dash.meetings.duration", { n: m.durationMin })}
                </p>
              </div>
              <Badge variant="outline" className="shrink-0 border-gold/40 bg-gold/10 text-[10px] font-bold text-gold">
                {dayLabel}
              </Badge>
            </li>
          );
        })}
      </ul>

      {history.length > 0 && (
        <div className="mt-4 border-t border-border/60 pt-3">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {t("dash.meetings.history")}
          </p>
          <ul className="space-y-2">
            {history.map((m) => (
              <li key={m.id} className="flex items-center gap-3 text-xs">
                <CircleCheck className="h-4 w-4 shrink-0 text-emerald-bright" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate text-muted-foreground">
                  {m.title} · {fmtDate(m.scheduledAt, locale)}
                </span>
                <Badge variant="outline" className="shrink-0 border-border text-[10px] text-muted-foreground">
                  {t("dash.meetings.done")}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      )}
    </DashCard>
  );
}

/* ───────────────────────── F23 — Achievements ───────────────────────── */

const ACH_ICON: Record<string, LucideIcon> = {
  rocket: Rocket,
  shield: ShieldCheck,
  file: FileCheck2,
  globe: Globe,
  wallet: Wallet,
  trending: TrendingUp,
  crown: Crown,
};

export function AchievementsCard({ items }: { items: Achievement[] }) {
  const { t } = useI18n();
  const unlockedCount = items.filter((a) => a.unlocked).length;

  return (
    <DashCard
      icon={Crown}
      title={t("dash.ach.title")}
      desc={`${unlockedCount}/${items.length}`}
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((a) => {
          const Icon = ACH_ICON[a.icon] ?? Rocket;
          return (
            <li key={a.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "relative flex h-full min-h-[104px] cursor-default flex-col items-center justify-center gap-2 rounded-xl border p-3 text-center transition-transform duration-300 hover:-translate-y-1",
                      a.unlocked
                        ? "border-gold/40 bg-gradient-to-b from-gold/15 to-gold/5 shadow-[0_0_26px_-8px_rgba(242,193,78,0.55)]"
                        : "border-border/70 bg-secondary/30 opacity-55 grayscale",
                    )}
                  >
                    {!a.unlocked && (
                      <span className="absolute right-2 top-2 rounded-full border border-border bg-secondary p-1 text-muted-foreground" aria-hidden="true">
                        <Lock className="h-3 w-3" />
                      </span>
                    )}
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border",
                        a.unlocked ? "border-gold/40 bg-gold/15 text-gold" : "border-border bg-secondary text-muted-foreground",
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className={cn("text-xs font-bold", a.unlocked ? "text-gold-light" : "text-muted-foreground")}>
                      {a.title}
                    </p>
                    {!a.unlocked && (
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">
                        {t("dash.ach.locked")}
                      </p>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-[220px] text-xs" side="top">
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-muted-foreground">{a.desc}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </DashCard>
  );
}
