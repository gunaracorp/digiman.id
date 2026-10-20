"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileCheck2,
  FileSearch,
  FileSpreadsheet,
  FileText,
  HelpCircle,
  Inbox,
  Info,
  LayoutGrid,
  MessageSquareText,
  ScrollText,
  Star,
  Trophy,
  Video,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PROPOSAL_STATUSES, fmtRpFull, statusMeta, useAdminData } from "./admin-helpers";

/* ────────────────── types ────────────────── */

type ActivityItem = {
  id: string;
  type: string;
  title: string;
  description: string;
  createdAt: string;
  project: { code: string; company: string };
};

type Stats = {
  contactTotal: number;
  contactUnhandled: number;
  proposalTotal: number;
  proposalByStatus: Record<string, number>;
  blogTotal: number;
  chatSessions: number;
  chatMessages: number;
  services: number;
  testimonials: number;
  faqs: number;
  docs: number;
  packages: number;
  clientProjects: number;
  clientProjectsActive: number;
  contractValue: number;
  revenuePaid: number;
  revenueOutstanding: number;
  invoiceCount: number;
  invoices: { number: string; label: string; amount: number; status: string }[];
  docsByTier: Record<string, number>;
  recentActivities: ActivityItem[];
};

/* ────────────────── format helpers ────────────────── */

/** Rp ringkas: 36000000 → "Rp 36 jt" (id-ID). */
function fmtRpCompact(v: number): string {
  const n = Number(v || 0);
  if (n >= 1_000_000_000)
    return `Rp ${(n / 1_000_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} M`;
  if (n >= 1_000_000)
    return `Rp ${(n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  if (n >= 1_000)
    return `Rp ${(n / 1_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} rb`;
  return `Rp ${n.toLocaleString("id-ID")}`;
}

const WIB_SHORT = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Jakarta",
});
const WIB_DAY = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  timeZone: "Asia/Jakarta",
});

/** Waktu relatif — dipanggil HANYA setelah mount (aman hydration). */
function relativeTimeID(iso: string, now: number): string {
  if (!now) return "";
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return "—";
  const diff = Math.max(0, now - t);
  const m = Math.floor(diff / 60_000);
  if (m < 1) return "baru saja";
  if (m < 60) return `${m} mnt lalu`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} jam lalu`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d} hari lalu`;
  return WIB_DAY.format(t);
}

/* ────────────────── animated counter (client-only, post-mount) ────────────────── */

function useCountUp(target: number, duration = 850): number {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // reduced-motion atau target 0 → tidak perlu animasi (tampilkan target langsung)
    if (reduce || target === 0) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, reduce]);

  return reduce || target === 0 ? target : display;
}

/* ────────────────── meta maps ────────────────── */

const INVOICE_STATUS_META: Record<string, { color: string; label: string }> = {
  PAID: { color: "#f2c14e", label: "Terbayar" },
  PENDING: { color: "#fb923c", label: "Menunggu" },
  SCHEDULED: { color: "#3f6b5b", label: "Terjadwal" },
};

const PROPOSAL_COLORS: Record<string, string> = {
  DRAFT: "#a1a1aa",
  SENT: "#34d399",
  NEGOTIATION: "#fb923c",
  WON: "#f2c14e",
  LOST: "#f87171",
};

const TIER_META: { key: string; short: string; color: string }[] = [
  { key: "P0 Navigasi", short: "P0", color: "#f2c14e" },
  { key: "P1 Pertumbuhan", short: "P1", color: "#34d399" },
  { key: "P2 Perluasan", short: "P2", color: "#2dd4bf" },
  { key: "P3 Warisan", short: "P3", color: "#fb7185" },
];

const ACTIVITY_META: Record<string, { icon: LucideIcon; cls: string }> = {
  DOC_APPROVED: {
    icon: FileCheck2,
    cls: "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/25",
  },
  DOC_REVIEW: {
    icon: FileSearch,
    cls: "bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/25",
  },
  PAYMENT: { icon: Wallet, cls: "bg-gold/10 text-gold ring-1 ring-gold/30" },
  MEETING: {
    icon: Video,
    cls: "bg-teal-400/10 text-teal-300 ring-1 ring-teal-400/25",
  },
  MILESTONE: {
    icon: Trophy,
    cls: "bg-gold/10 text-gold-light ring-1 ring-gold/30",
  },
  SYSTEM: {
    icon: Info,
    cls: "bg-zinc-400/10 text-zinc-300 ring-1 ring-zinc-400/25",
  },
};

const TOOLTIP_STYLE = {
  background: "rgba(5,13,10,0.96)",
  border: "1px solid rgba(242,194,78,0.28)",
  borderRadius: 12,
  fontSize: 12,
  color: "#ffffff",
} as const;

const AXIS_TICK = { fill: "rgba(209,250,229,0.55)", fontSize: 11 } as const;

/* ────────────────── small components ────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-50/45">
      {children}
    </h2>
  );
}

type KpiProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: React.ReactNode;
  chips?: React.ReactNode;
  tone?: "default" | "gold" | "red";
  tab?: string;
  onNavigate?: (tab: string) => void;
};

function KpiCard({ icon: Icon, label, value, sub, chips, tone = "default", tab, onNavigate }: KpiProps) {
  const toneCls =
    tone === "gold"
      ? "bg-gold/10 text-gold ring-1 ring-gold/30"
      : tone === "red"
        ? "bg-red-400/10 text-red-300 ring-1 ring-red-400/40"
        : "bg-emerald-400/10 text-emerald-bright ring-1 ring-emerald-400/25";
  const valueCls =
    tone === "red" ? "text-red-300" : tone === "gold" ? "text-gold" : "text-white";

  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${toneCls}`}
          aria-hidden="true"
        >
          <Icon className="h-4.5 w-4.5" />
        </span>
        {tone === "red" && (
          <span className="rounded-full bg-red-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300 ring-1 ring-red-400/40">
            Perlu Aksi
          </span>
        )}
        {tone === "gold" && (
          <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold/90 ring-1 ring-gold/25">
            Live
          </span>
        )}
      </div>
      <p
        className={`font-display mt-3 text-xl font-bold leading-tight sm:text-2xl ${valueCls}`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-xs font-medium text-emerald-50/60">{label}</p>
      {sub && <div className="mt-1.5 text-[11px] leading-snug text-emerald-50/40">{sub}</div>}
      {chips}
    </>
  );

  if (tab && onNavigate) {
    return (
      <button
        type="button"
        onClick={() => onNavigate(tab)}
        aria-label={`Buka tab ${label}`}
        className="glass card-glow group flex flex-col rounded-2xl p-4 text-left transition hover:border-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 md:p-5"
      >
        {inner}
      </button>
    );
  }
  return <div className="glass flex flex-col rounded-2xl p-4 md:p-5">{inner}</div>;
}

function ChartLegend({
  items,
}: {
  items: { name: string; value: number; color: string }[];
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((it) => (
        <span
          key={it.name}
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold text-emerald-50/70"
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: it.color }}
          />
          {it.name} · {it.value.toLocaleString("id-ID")}
        </span>
      ))}
    </div>
  );
}

/* ────────────────── main ────────────────── */

export default function AdminOverview({
  onNavigate,
  onUnauthorized,
}: {
  onNavigate: (tab: string) => void;
  onUnauthorized: () => void;
}) {
  const { data, loading, error, reload } = useAdminData<Stats>(
    "/api/admin/stats",
    onUnauthorized,
  );
  const reduce = useReducedMotion();

  // Waktu acuan untuk waktu relatif — nilai tidak pernah tampil di HTML SSR
  // (data admin dimuat via fetch setelah mount), jadi aman dari hydration mismatch.
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);

  // ── Animated counters (nilai final = data API) ──
  const paid = useCountUp(data?.revenuePaid ?? 0);
  const contract = useCountUp(data?.contractValue ?? 0);
  const klienAktif = useCountUp(data?.clientProjectsActive ?? 0);
  const proposal = useCountUp(data?.proposalTotal ?? 0);
  const unhandled = useCountUp(data?.contactUnhandled ?? 0);
  const docsCount = useCountUp(data?.docs ?? 0);

  const fade = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.45, delay: reduce ? 0 : i * 0.07 },
  });

  /* ── data grafik ── */
  const invoiceChartData = useMemo(
    () =>
      (data?.invoices ?? []).map((inv) => ({
        name: inv.number.split("-").pop() ?? inv.number,
        full: inv.number,
        label: inv.label,
        amount: inv.amount,
        status: inv.status,
      })),
    [data?.invoices],
  );

  const proposalChartData = useMemo(
    () =>
      PROPOSAL_STATUSES.map((st) => ({
        name: statusMeta(st).label,
        value: data?.proposalByStatus?.[st] ?? 0,
        color: PROPOSAL_COLORS[st] ?? "#a1a1aa",
      })).filter((d) => d.value > 0),
    [data?.proposalByStatus],
  );

  const tierChartData = useMemo(
    () =>
      TIER_META.map((t) => ({
        name: t.key,
        short: t.short,
        value: data?.docsByTier?.[t.key] ?? 0,
        color: t.color,
      })),
    [data?.docsByTier],
  );

  const totalDocsInTiers = tierChartData.reduce((a, b) => a + b.value, 0);
  const paidPct =
    data && data.contractValue > 0
      ? Math.min(100, Math.round((data.revenuePaid / data.contractValue) * 100))
      : 0;

  const statusChips = (
    <div className="mt-2 flex flex-wrap gap-1">
      {PROPOSAL_STATUSES.map((st) => {
        const meta = statusMeta(st);
        const count = data?.proposalByStatus?.[st] ?? 0;
        if (count === 0) return null;
        return (
          <span
            key={st}
            className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${meta.chip}`}
          >
            {meta.label} {count}
          </span>
        );
      })}
    </div>
  );

  const tierMiniChips = (
    <div className="mt-2 flex flex-wrap gap-1">
      {tierChartData.map((t) => (
        <span
          key={t.name}
          className="inline-flex items-center gap-1 rounded-full border border-emerald-400/15 bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold text-emerald-50/70"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: t.color }}
          />
          {t.short} {t.value}
        </span>
      ))}
    </div>
  );

  /* ── loading skeleton ── */
  if (loading && !data) {
    return (
      <div className="space-y-4 md:space-y-6" aria-busy="true" aria-live="polite">
        <Skeleton className="h-10 w-72 rounded-xl bg-emerald-400/5" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-2xl bg-emerald-400/5" />
          ))}
        </div>
        <Skeleton className="h-72 rounded-2xl bg-emerald-400/5" />
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <Skeleton className="h-72 rounded-2xl bg-emerald-400/5" />
          <Skeleton className="h-72 rounded-2xl bg-emerald-400/5" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* ── Header strip ── */}
      <motion.div
        {...fade(0)}
        className="flex flex-wrap items-end justify-between gap-3"
      >
        <div>
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
            Mission <span className="gradient-text-gold">Control</span>
          </h2>
          <p className="mt-0.5 text-xs text-emerald-50/50">
            Denyut bisnis digiman.id — pendapatan, klien &amp; operasi dalam satu
            layar
            {now > 0 && (
              <> · diperbarui {WIB_SHORT.format(now)} WIB</>
            )}
          </p>
        </div>
        {/* ── CTA cepat ── */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onNavigate("pesan")}
            className="border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
          >
            Tangani Pesan
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onNavigate("penawaran")}
            className="border-emerald-400/30 bg-white/[0.03] hover:border-gold/50 hover:text-gold"
          >
            Buat Penawaran
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onNavigate("blog")}
            className="border-emerald-400/30 bg-white/[0.03] hover:border-gold/50 hover:text-gold"
          >
            Tulis Artikel
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>
      </motion.div>

      {error && (
        <div
          className="glass flex flex-wrap items-center justify-between gap-3 rounded-xl border-red-400/30 p-4"
          role="alert"
        >
          <p className="text-sm text-red-300">{error}</p>
          <Button
            size="sm"
            variant="outline"
            onClick={reload}
            className="border-emerald-400/30"
          >
            Coba Lagi
          </Button>
        </div>
      )}

      {/* ── KPI hero row ── */}
      <motion.section aria-label="Statistik utama" {...fade(1)}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
          <KpiCard
            icon={Wallet}
            label="Pendapatan Terbayar"
            value={fmtRpCompact(paid)}
            tone="gold"
            sub={
              <>
                <span className="font-semibold text-gold/80">{fmtRpFull(data?.revenuePaid ?? 0)}</span>
                {data ? ` · ${paidPct}% dari kontrak` : ""}
              </>
            }
          />
          <KpiCard
            icon={FileSpreadsheet}
            label="Nilai Kontrak Aktif"
            value={fmtRpCompact(contract)}
            sub={
              <>
                {fmtRpFull(data?.contractValue ?? 0)}
                {data ? ` · ${data.invoiceCount} invoice` : ""}
              </>
            }
          />
          <KpiCard
            icon={LayoutGrid}
            label="Klien Aktif"
            value={String(klienAktif)}
            sub={data ? `dari ${data.clientProjects} proyek berjalan` : undefined}
          />
          <KpiCard
            icon={FileSpreadsheet}
            label="Proposal Masuk"
            value={String(proposal)}
            tab="penawaran"
            onNavigate={onNavigate}
            chips={statusChips}
          />
          <KpiCard
            icon={Inbox}
            label="Pesan Belum Ditangani"
            value={String(unhandled)}
            tone={(data?.contactUnhandled ?? 0) > 0 ? "red" : "default"}
            tab="pesan"
            onNavigate={onNavigate}
            sub={data ? `dari ${data.contactTotal} pesan masuk` : undefined}
          />
          <KpiCard
            icon={ScrollText}
            label="Dokumen PGA"
            value={String(docsCount)}
            tab="paket"
            onNavigate={onNavigate}
            sub={data ? `${data.packages} paket Gunara OS` : undefined}
            chips={tierMiniChips}
          />
        </div>
      </motion.section>

      {/* ── Charts ── */}
      <motion.section aria-label="Grafik analitik" {...fade(2)}>
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          {/* a. Pendapatan per Invoice */}
          <div className="glass rounded-2xl p-4 lg:col-span-2 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <SectionTitle>Pendapatan per Invoice</SectionTitle>
              <ChartLegend
                items={(data?.invoices ?? [])
                  .filter((inv, i, arr) => arr.findIndex((x) => x.status === inv.status) === i)
                  .map((inv) => ({
                    name: INVOICE_STATUS_META[inv.status]?.label ?? inv.status,
                    value: (data?.invoices ?? []).filter((x) => x.status === inv.status).length,
                    color: INVOICE_STATUS_META[inv.status]?.color ?? "#3f6b5b",
                  }))}
              />
            </div>
            <div className="relative mt-4 h-[260px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={invoiceChartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(52,211,153,0.08)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={AXIS_TICK}
                    axisLine={{ stroke: "rgba(52,211,153,0.18)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={AXIS_TICK}
                    axisLine={false}
                    tickLine={false}
                    width={44}
                    tickFormatter={(v: number) => (v >= 1_000_000 ? `${v / 1_000_000} jt` : String(v))}
                  />
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    cursor={{ fill: "rgba(242,194,78,0.06)" }}
                    formatter={(value: unknown) => fmtRpFull(Number(value))}
                    labelFormatter={(_, payload) => {
                      const p = payload?.[0]?.payload as
                        | { full?: string; label?: string }
                        | undefined;
                      return p?.full ? `${p.full} — ${p.label ?? ""}` : "";
                    }}
                  />
                  <Bar dataKey="amount" radius={[6, 6, 0, 0]} maxBarSize={40} aria-label="Nilai invoice">
                    {invoiceChartData.map((entry) => (
                      <Cell
                        key={entry.full}
                        fill={INVOICE_STATUS_META[entry.status]?.color ?? "#3f6b5b"}
                        fillOpacity={entry.status === "SCHEDULED" ? 0.55 : 0.9}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* b. Proposal per Status */}
          <div className="glass rounded-2xl p-4 md:p-6">
            <SectionTitle>Proposal per Status</SectionTitle>
            <div className="relative mt-4 h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(value: unknown, name: unknown) =>
                      [`${Number(value)} proposal`, String(name)] as [string, string]
                    }
                  />
                  <Pie
                    data={proposalChartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="58%"
                    outerRadius="85%"
                    paddingAngle={3}
                    cornerRadius={6}
                    stroke="none"
                    aria-label="Proposal per status"
                  >
                    {proposalChartData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-display text-3xl font-bold text-white">
                  {(data?.proposalTotal ?? 0).toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-emerald-50/45">
                  Proposal
                </span>
              </div>
            </div>
            <ChartLegend items={proposalChartData} />
          </div>

          {/* c. Dokumen per Tier */}
          <div className="glass rounded-2xl p-4 md:p-6">
            <SectionTitle>Dokumen per Tier</SectionTitle>
            <div className="relative mt-4 h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(value: unknown, name: unknown) =>
                      [`${Number(value)} dokumen`, String(name)] as [string, string]
                    }
                  />
                  <Pie
                    data={tierChartData.filter((t) => t.value > 0)}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="58%"
                    outerRadius="85%"
                    paddingAngle={3}
                    cornerRadius={6}
                    stroke="none"
                    aria-label="Dokumen per tier"
                  >
                    {tierChartData
                      .filter((t) => t.value > 0)
                      .map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-display text-3xl font-bold text-white">
                  {totalDocsInTiers.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-emerald-50/45">
                  Dokumen
                </span>
              </div>
            </div>
            <ChartLegend items={tierChartData} />
          </div>
        </div>
      </motion.section>

      {/* ── Aktivitas + konten ── */}
      <motion.section aria-label="Aktivitas terbaru" {...fade(3)}>
        <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
          {/* Aktivitas Terbaru */}
          <div className="glass rounded-2xl p-4 lg:col-span-2 md:p-6">
            <div className="flex items-center justify-between">
              <SectionTitle>Aktivitas Terbaru</SectionTitle>
              <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-50/35">
                WIB · Asia/Jakarta
              </span>
            </div>
            <div className="custom-scroll mt-4 max-h-96 space-y-2 overflow-y-auto pr-1">
              {(data?.recentActivities ?? []).map((a) => {
                const meta = ACTIVITY_META[a.type] ?? ACTIVITY_META.SYSTEM;
                const Icon = meta.icon;
                return (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 rounded-xl border border-emerald-400/10 bg-white/[0.02] p-3 transition hover:border-gold/25"
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${meta.cls}`}
                      aria-hidden="true"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <p className="truncate text-sm font-semibold text-white">{a.title}</p>
                        <span className="shrink-0 text-[11px] font-medium text-emerald-50/40">
                          {relativeTimeID(a.createdAt, now)}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-emerald-50/55">
                        {a.description}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gold/70">
                        {a.project?.company ?? "—"}
                      </p>
                    </div>
                  </div>
                );
              })}
              {(data?.recentActivities ?? []).length === 0 && (
                <p className="py-8 text-center text-sm text-emerald-50/40">
                  Belum ada aktivitas tercatat.
                </p>
              )}
            </div>
          </div>

          {/* Konten & Komunitas (ringkas) */}
          <div className="glass rounded-2xl p-4 md:p-6">
            <SectionTitle>Konten &amp; Komunitas</SectionTitle>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { label: "Blog", value: data?.blogTotal ?? 0, icon: FileText, tab: "blog" },
                { label: "Sesi Chat AI", value: data?.chatSessions ?? 0, icon: MessageSquareText, tab: "ringkasan" },
                { label: "Layanan", value: data?.services ?? 0, icon: LayoutGrid, tab: "layanan" },
                { label: "Testimoni", value: data?.testimonials ?? 0, icon: Star, tab: "testimoni" },
                { label: "FAQ", value: data?.faqs ?? 0, icon: HelpCircle, tab: "faq" },
                { label: "Paket", value: data?.packages ?? 0, icon: ScrollText, tab: "paket" },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => onNavigate(m.tab)}
                    aria-label={`Buka tab ${m.label}`}
                    className="group rounded-xl border border-emerald-400/10 bg-white/[0.02] p-3 text-left transition hover:border-gold/35 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  >
                    <Icon
                      className="h-4 w-4 text-emerald-bright transition group-hover:text-gold"
                      aria-hidden="true"
                    />
                    <p className="font-display mt-2 text-xl font-bold text-white">
                      {m.value.toLocaleString("id-ID")}
                    </p>
                    <p className="text-[11px] font-medium text-emerald-50/55">{m.label}</p>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-emerald-50/40">
              {data
                ? `${data.chatMessages.toLocaleString("id-ID")} pesan chat tercatat · ${data.docs.toLocaleString("id-ID")} dokumen PGA aktif`
                : ""}
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
