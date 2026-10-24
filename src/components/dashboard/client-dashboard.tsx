"use client";

/**
 * DIGIMAN.ID — Client Dashboard (#/dashboard) · Task 15-b
 * 30 fitur premium (F01–F30) — daftar fitur ditandai di komentar tiap bagian.
 *
 * Shell: sidebar desktop collapsible (F28) · topbar sticky · bottom-nav mobile ·
 * command palette (F01) · tema terang/gelap (F03) · bahasa ID/EN (F04) ·
 * jam live WIB (F02) · notifikasi (F13) · print/PDF (F27) · state robust (F30).
 */

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme, ThemeProvider } from "next-themes";
import {
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
  Home,
  MessageSquare,
  Moon,
  RefreshCw,
  Search,
  Sparkles,
  Sun,
  TriangleAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import LanguageToggle from "@/components/digiman/language-toggle";

import { DASH_SECTIONS, CommandPalette, scrollToSection } from "@/components/dashboard/command-palette";
import { DomainBarsCard, HealthGaugeCard, PaymentAreaCard, ProgressRingCard, StatusDonutCard } from "@/components/dashboard/dashboard-charts";
import {
  DigitalisasiCard,
  GoalsCard,
  HeroProjectCard,
  KpiStrip,
  LegalitasCard,
  MilestoneTimelineCard,
  TeamCard,
  TierBreakdownCard,
} from "@/components/dashboard/dashboard-widgets";
import {
  AchievementsCard,
  ChatPanel,
  FilesCard,
  InvoicePanel,
  MeetingsCard,
} from "@/components/dashboard/dashboard-panels";
import {
  ActivityFeedCard,
  DocSearchCard,
  NotificationsMenu,
  QuickActionsCard,
} from "@/components/dashboard/dashboard-collab";
import type { ChatMessage, DashboardData } from "@/components/dashboard/dash-types";
import {
  fmtClock,
  greetingKey,
  useMounted,
  useNow,
} from "@/components/dashboard/dash-utils";

/* ─── Tema terang (F03): variabel CSS di-scope ke .dash-light + aturan print (F27) ─── */
const LIGHT_VARS = [
  "--night:#f7f5ee", "--surface:#fffdf6", "--background:#f7f5ee", "--foreground:#132019",
  "--card:#fffdf6", "--card-foreground:#132019", "--popover:#fffdf6", "--popover-foreground:#132019",
  "--primary:#0d9488", "--primary-foreground:#ffffff", "--secondary:#ece7d8", "--secondary-foreground:#132019",
  "--muted:#e9e4d4", "--muted-foreground:#4c6156", "--accent:#e6f2ea", "--accent-foreground:#132019",
  "--border:rgba(13,84,60,0.16)", "--input:rgba(13,84,60,0.2)", "--ring:rgba(146,97,10,0.45)",
  "--gold:#a16207", "--gold-light:#b8860b", "--emerald-bright:#0d9488",
].join(";");

const DASH_STYLES = `
.dash-light { ${LIGHT_VARS}; color-scheme: light; }
.dash-light .glass, .dash-light .glass-strong { background: rgba(255,253,246,0.82); border-color: rgba(13,84,60,0.14); }
.dash-light .gradient-text-gold, .dash-light .gradient-text-emerald { animation: none; background: #92610a; -webkit-background-clip: text; background-clip: text; }
.dash-light .shimmer-btn::before { display: none; }
@media print {
  @page { size: A4; margin: 10mm; }
  #dashboard-root { ${LIGHT_VARS}; }
  html, body { background: #f7f5ee !important; }
  #dashboard-root { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  #dashboard-root [data-print-hidden] { display: none !important; }
  #dash-main { max-width: 100% !important; padding: 0 !important; }
  .card-glow:hover { transform: none !important; }
}
`;

export default function ClientDashboard() {
  // F03 — next-themes di-scope dashboard (attribute data-theme, default dark premium).
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="digiman-dash-theme"
      disableTransitionOnChange
    >
      <DashboardShell />
    </ThemeProvider>
  );
}

/* ════════════════════════════ SHELL ════════════════════════════ */

function DashboardShell() {
  const { t, locale, setLocale } = useI18n();
  const { toast } = useToast();
  const { resolvedTheme, setTheme } = useTheme();
  const themeMounted = useMounted();
  const isLight = themeMounted && resolvedTheme === "light";

  // F30 — data fetching + retry.
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/dashboard", { cache: "no-store" });
      const json: unknown = await res.json();
      if (!res.ok) {
        const msg = (json as { error?: string })?.error ?? `HTTP ${res.status}`;
        throw new Error(msg);
      }
      const raw = json as DashboardData;
      // Normalisasi defensif — seksi opsional tetap aman dirender (F30).
      setData({
        ...raw,
        milestones: raw.milestones ?? [],
        activities: raw.activities ?? [],
        meetings: raw.meetings ?? [],
        legalitas: raw.legalitas ?? [],
        digitalisasi: raw.digitalisasi ?? [],
        goals: raw.goals ?? [],
        team: raw.team ?? [],
        files: raw.files ?? [],
        achievements: raw.achievements ?? [],
        notifications: raw.notifications ?? [],
        messages: raw.messages ?? [],
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal memuat data.");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  // F02 — jam WIB + greeting (hanya setelah mount → bebas hydration mismatch).
  const now = useNow(1000);
  const clock = now ? fmtClock(new Date(now), locale) : "--.--.--";
  const greeting = now ? t(greetingKey(new Date(now))) : "";

  // F03 — toggle tema; F04 — toggle bahasa.
  const toggleTheme = () => setTheme(isLight ? "dark" : "light");
  const toggleLanguage = () => setLocale(locale === "id" ? "en" : "id");

  // F01 — palette state; listener Ctrl/⌘+K ada di <CommandPalette>.
  const [paletteOpen, setPaletteOpen] = useState(false);

  // F13 — notifikasi dibaca (state lokal, reset saat data berganti).
  const [allRead, setAllRead] = useState(false);
  useEffect(() => setAllRead(false), [data]);

  // F18 — pesan chat lokal (optimistik).
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  useEffect(() => {
    if (data) setMessages(data.messages);
  }, [data]);
  const sendChat = (text: string) => {
    if (!data) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        from: "me",
        sender: data.project.clientName,
        text,
        time: new Date().toISOString(),
      },
    ]);
  };

  // F28 — sidebar collapse + scrollspy sederhana.
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dash-ringkasan");
  useEffect(() => {
    if (!data) return;
    const els = DASH_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [data]);

  // F25/F27 — aksi cepat.
  const handlePrint = () => {
    window.print();
    toast({ title: t("dash.toast.print"), description: t("dash.toast.printDesc") });
  };
  const handleSchedule = () =>
    toast({ title: t("dash.toast.meeting"), description: t("dash.toast.meetingDesc") });
  const handleMessage = () => {
    scrollToSection("dash-kolaborasi");
    window.setTimeout(
      () => document.getElementById("dash-chat-input")?.focus({ preventScroll: true }),
      450,
    );
  };
  const handleSupport = () => {
    // Anchor kontak berada di landing — rute dulu, lalu scroll mulus.
    window.location.hash = "#kontak";
    window.setTimeout(
      () => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" }),
      300,
    );
  };

  return (
    <div id="dashboard-root" className={cn("min-h-screen bg-background text-foreground", isLight && "dash-light")}>
      <style dangerouslySetInnerHTML={{ __html: DASH_STYLES }} />

      {/* F29 — skip link keyboard */}
      <a
        href="#dash-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-emerald-950"
      >
        {t("dash.skip")}
      </a>

      <div className="mx-auto flex w-full max-w-[1536px]">
        <Sidebar
          data={data}
          collapsed={collapsed}
          active={active}
          onToggle={() => setCollapsed((c) => !c)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar
            data={data}
            clock={clock}
            onOpenPalette={() => setPaletteOpen(true)}
            notifications={data?.notifications ?? []}
            allRead={allRead}
            onMarkAllRead={() => setAllRead(true)}
            now={now}
            isLight={isLight}
            onToggleTheme={toggleTheme}
          />

          <main id="dash-main" className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 md:px-6 md:pt-8 lg:pb-14">
            {/* F27 — kop laporan khusus cetak/PDF */}
            <div className="hidden print:block" aria-hidden="true">
              <p className="font-display text-xl font-bold">
                DIGIMAN.ID — {t("dash.report.meta", { code: data?.project.code ?? "—" })}
              </p>
              <p className="text-xs">
                {data ? `${data.project.company} · ${data.project.clientName} · ${clock} WIB` : ""}
              </p>
            </div>

            {loading && <LoadingGrid label={t("dash.loading")} />}
            {!loading && error && <ErrorState message={error} onRetry={load} label={{ retry: t("dash.error.retry"), title: t("dash.error.title") }} />}

            {!loading && !error && data && (
              <div className="space-y-10 md:space-y-12">
                {/* ─── RINGKASAN: F05 · F12 · F06 · F10 · F08 ─── */}
                <section id="dash-ringkasan" aria-label={t("dash.nav.ringkasan")} className="scroll-mt-24 space-y-4 md:space-y-6">
                  <HeroProjectCard project={data.project} greeting={greeting} clock={clock} />
                  <KpiStrip progress={data.progress} paymentPercent={data.payment.percent} />
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
                    <ProgressRingCard progress={data.progress} />
                    <HealthGaugeCard score={data.project.healthScore} />
                    <TierBreakdownCard byTier={data.progress.byTier} />
                  </div>
                </section>

                {/* ─── PROGRES: F07 · F09 · F11 ─── */}
                <section id="dash-progres" aria-label={t("dash.nav.progres")} className="scroll-mt-24 space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <StatusDonutCard progress={data.progress} />
                    </div>
                    <div className="lg:col-span-7">
                      <DomainBarsCard progress={data.progress} />
                    </div>
                  </div>
                  <MilestoneTimelineCard milestones={data.milestones} />
                </section>

                {/* ─── KEUANGAN: F15 · F16 ─── */}
                <section id="dash-keuangan" aria-label={t("dash.nav.keuangan")} className="scroll-mt-24 space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <InvoicePanel payment={data.payment} />
                    </div>
                    <div className="lg:col-span-5">
                      <PaymentAreaCard payment={data.payment} />
                    </div>
                  </div>
                </section>

                {/* ─── KOLABORASI: F14 · F18 · F19 · F24 ─── */}
                <section id="dash-kolaborasi" aria-label={t("dash.nav.kolaborasi")} className="scroll-mt-24 space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <ActivityFeedCard activities={data.activities} now={now} />
                    </div>
                    <div className="lg:col-span-7">
                      <ChatPanel messages={messages} clientName={data.project.clientName} onSend={sendChat} />
                    </div>
                  </div>
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <MeetingsCard meetings={data.meetings} now={now} />
                    </div>
                    <div className="lg:col-span-5">
                      <TeamCard members={data.team} />
                    </div>
                  </div>
                </section>

                {/* ─── KUALITAS: F20 · F21 · F22 · F23 ─── */}
                <section id="dash-kualitas" aria-label={t("dash.nav.kualitas")} className="scroll-mt-24 space-y-4 md:space-y-6">
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
                    <LegalitasCard items={data.legalitas} />
                    <DigitalisasiCard items={data.digitalisasi} />
                    <GoalsCard items={data.goals} />
                  </div>
                  <AchievementsCard items={data.achievements} />
                </section>

                {/* ─── ALAT: F25 · F26 · F17 ─── */}
                <section id="dash-alat" aria-label={t("dash.nav.alat")} className="scroll-mt-24 space-y-4 md:space-y-6">
                  <QuickActionsCard
                    onPrint={handlePrint}
                    onSchedule={handleSchedule}
                    onMessage={handleMessage}
                    onSupport={handleSupport}
                  />
                  <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <DocSearchCard progress={data.progress} />
                    </div>
                    <div className="lg:col-span-5">
                      <FilesCard files={data.files} />
                    </div>
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>

      <BottomNav active={active} />
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onPrint={handlePrint}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
        isLight={isLight}
      />
    </div>
  );
}

/* ════════════════════════════ SIDEBAR (F28, F29) ════════════════════════════ */

function Sidebar({
  data,
  collapsed,
  active,
  onToggle,
}: {
  data: DashboardData | null;
  collapsed: boolean;
  active: string;
  onToggle: () => void;
}) {
  const { t } = useI18n();
  return (
    <aside
      data-print-hidden
      aria-label="Navigasi dasbor"
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 flex-col border-r border-emerald-400/15 bg-surface/50 px-3 py-5 backdrop-blur lg:flex print:hidden",
        collapsed ? "w-[84px]" : "w-64",
      )}
    >
      <div className={cn("flex items-center gap-3 px-2", collapsed && "justify-center px-0")}>
        <Image src="/logo-emblem.png" alt="Logo DIGIMAN.ID" width={40} height={40} className="h-10 w-10 rounded-full" />
        {!collapsed && (
          <div className="min-w-0">
            <p className="font-display truncate text-sm font-bold tracking-wide text-foreground">
              DIGIMAN<span className="text-gold">.ID</span>
            </p>
            <p className="truncate text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {t("dash.title")}
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-label={collapsed ? "Perluas sidebar" : "Ciutkan sidebar"}
        aria-expanded={!collapsed}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border/70 text-xs font-semibold text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" aria-hidden="true" /> : <ChevronLeft className="h-4 w-4" aria-hidden="true" />}
        {!collapsed && t("dash.sidebar.collapse")}
      </button>

      <nav className="mt-5 flex-1 space-y-1" aria-label={t("dash.title")}>
        {DASH_SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                collapsed && "justify-center px-0",
                isActive
                  ? "border border-gold/25 bg-gold/10 text-gold"
                  : "border border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              <section.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              {!collapsed && <span className="truncate">{t(section.key)}</span>}
            </button>
          );
        })}
      </nav>

      <div className="space-y-3 border-t border-border/60 pt-4">
        {!collapsed && (
          <p className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {t("dash.badge30")}
          </p>
        )}
        {!collapsed && data && (
          <p className="px-1 text-[10px] text-muted-foreground/70">
            {data.project.code} · {data.project.packageCode}
          </p>
        )}
        <a
          href="#/"
          className={cn(
            "flex min-h-[44px] items-center gap-3 rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            collapsed && "justify-center px-0",
          )}
        >
          <Home className="h-5 w-5 shrink-0" aria-hidden="true" />
          {!collapsed && <span className="truncate">{t("dash.nav.backSite")}</span>}
        </a>
      </div>
    </aside>
  );
}

/* ════════════════════════════ TOPBAR (F02, F03, F04, F13, F01) ════════════════════════════ */

function Topbar({
  data,
  clock,
  onOpenPalette,
  notifications,
  allRead,
  onMarkAllRead,
  now,
  isLight,
  onToggleTheme,
}: {
  data: DashboardData | null;
  clock: string;
  onOpenPalette: () => void;
  notifications: DashboardData["notifications"];
  allRead: boolean;
  onMarkAllRead: () => void;
  now: number | null;
  isLight: boolean;
  onToggleTheme: () => void;
}) {
  const { t } = useI18n();
  return (
    <header
      data-print-hidden
      className="glass-strong sticky top-0 z-40 flex h-16 items-center gap-2 border-b border-emerald-400/15 px-4 md:px-6 print:hidden"
    >
      {/* Brand mobile (desktop memakai sidebar) */}
      <a href="#/" className="flex shrink-0 items-center gap-2 lg:hidden" aria-label="DIGIMAN.ID — beranda">
        <Image src="/logo-emblem.png" alt="" width={32} height={32} className="h-8 w-8 rounded-full" />
        <span className="font-display text-sm font-bold tracking-wide text-foreground">
          DIGIMAN<span className="text-gold">.ID</span>
        </span>
      </a>

      {data && (
        <p className="hidden min-w-0 flex-1 truncate text-sm text-muted-foreground lg:block">
          {data.project.company} · <span className="font-mono text-xs text-gold">{data.project.code}</span>
        </p>
      )}
      {!data && <div className="flex-1" />}

      {/* F01 — pemicu command palette */}
      <button
        type="button"
        onClick={onOpenPalette}
        aria-label={t("dash.palette.aria")}
        className="hidden h-10 items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex"
      >
        <Search className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden md:inline">{t("dash.palette.placeholder")}</span>
        <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px]">Ctrl K</kbd>
      </button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onOpenPalette}
        aria-label={t("dash.palette.aria")}
        className="h-11 w-11 shrink-0 rounded-full text-muted-foreground hover:text-gold sm:hidden"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
      </Button>

      {/* F02 — jam WIB live */}
      <span
        aria-label="Waktu Asia/Jakarta"
        className="glass hidden h-10 items-center gap-2 rounded-full px-3 font-mono text-xs text-foreground md:inline-flex"
      >
        {clock} <span className="font-sans font-bold text-gold">WIB</span>
      </span>

      {/* F04 — bahasa */}
      <div className="hidden sm:block">
        <LanguageToggle />
      </div>

      {/* F03 — tema */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleTheme}
        aria-label={isLight ? t("dash.theme.dark") : t("dash.theme.light")}
        className="glass h-11 w-11 shrink-0 rounded-full text-foreground hover:text-gold"
      >
        {isLight ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
      </Button>

      {/* F13 — lonceng notifikasi */}
      <NotificationsMenu
        notifications={notifications}
        allRead={allRead}
        onMarkAllRead={onMarkAllRead}
        now={now}
      />
    </header>
  );
}

/* ════════════════════════════ BOTTOM NAV (F28) ════════════════════════════ */

function BottomNav({ active }: { active: string }) {
  const { t } = useI18n();
  return (
    <nav
      data-print-hidden
      aria-label="Navigasi bawah"
      className="glass-strong fixed inset-x-0 bottom-0 z-40 border-t border-emerald-400/15 pb-[env(safe-area-inset-bottom)] lg:hidden print:hidden"
    >
      <ul className="grid grid-cols-6">
        {DASH_SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex min-h-[56px] w-full flex-col items-center justify-center gap-1 px-0.5 text-[10px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive ? "text-gold" : "text-muted-foreground",
                )}
              >
                <section.icon className="h-5 w-5" aria-hidden="true" />
                <span className="w-full truncate text-center">{t(section.key)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ════════════════════════════ F30 — state grid ════════════════════════════ */

function LoadingGrid({ label }: { label: string }) {
  return (
    <div className="space-y-4 md:space-y-6" role="status" aria-live="polite" aria-label={label}>
      <span className="sr-only">{label}</span>
      <Skeleton className="h-44 w-full rounded-2xl" />
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-28 rounded-2xl" />
        ))}
      </div>
      <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-72 rounded-2xl" />
        ))}
      </div>
      <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
        <Skeleton className="h-64 rounded-2xl lg:col-span-5" />
        <Skeleton className="h-64 rounded-2xl lg:col-span-7" />
      </div>
    </div>
  );
}

function ErrorState({
  message,
  onRetry,
  label,
}: {
  message: string;
  onRetry: () => void;
  label: { retry: string; title: string };
}) {
  return (
    <Card className="glass mx-auto max-w-lg border-emerald-400/15 bg-card/70 p-8 text-center" role="alert">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
        <TriangleAlert className="h-6 w-6" aria-hidden="true" />
      </span>
      <h2 className="font-display mt-4 text-lg font-bold text-foreground">{label.title}</h2>
      <p className="mt-1 break-words text-sm text-muted-foreground">{message}</p>
      <Button
        onClick={onRetry}
        className="mt-5 h-11 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 px-6 font-bold text-emerald-950 hover:from-yellow-200 hover:to-amber-400"
      >
        <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
        {label.retry}
      </Button>
    </Card>
  );
}
