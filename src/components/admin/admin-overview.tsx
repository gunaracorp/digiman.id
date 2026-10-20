"use client";

import {
  ArrowRight,
  FileSpreadsheet,
  FileText,
  HelpCircle,
  Inbox,
  LayoutGrid,
  MessageSquareText,
  ScrollText,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PROPOSAL_STATUSES, statusMeta, useAdminData } from "./admin-helpers";

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
};

type Card = {
  key: string;
  label: string;
  value: number;
  icon: LucideIcon;
  tab: string;
  sub?: string;
  warn?: boolean;
  custom?: React.ReactNode;
};

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

  const statusChips = (
    <div className="mt-2 flex flex-wrap gap-1">
      {PROPOSAL_STATUSES.map((st) => {
        const meta = statusMeta(st);
        const count = data?.proposalByStatus?.[st] ?? 0;
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

  const cards: Card[] = data
    ? [
        {
          key: "pesan",
          label: "Pesan Masuk",
          value: data.contactTotal,
          icon: Inbox,
          tab: "pesan",
          sub: `${data.contactUnhandled} belum ditangani`,
          warn: data.contactUnhandled > 0,
        },
        {
          key: "proposal",
          label: "Penawaran",
          value: data.proposalTotal,
          icon: FileSpreadsheet,
          tab: "penawaran",
          custom: statusChips,
        },
        {
          key: "blog",
          label: "Artikel Blog",
          value: data.blogTotal,
          icon: FileText,
          tab: "blog",
        },
        {
          key: "chat",
          label: "Sesi Chat AI",
          value: data.chatSessions,
          icon: MessageSquareText,
          tab: "ringkasan",
          sub: `${data.chatMessages} pesan tercatat`,
        },
        {
          key: "layanan",
          label: "Layanan",
          value: data.services,
          icon: LayoutGrid,
          tab: "layanan",
        },
        {
          key: "testimoni",
          label: "Testimoni",
          value: data.testimonials,
          icon: Star,
          tab: "testimoni",
        },
        {
          key: "faq",
          label: "FAQ",
          value: data.faqs,
          icon: HelpCircle,
          tab: "faq",
        },
        {
          key: "docs",
          label: "Dokumen 165",
          value: data.docs,
          icon: ScrollText,
          tab: "paket",
          sub: `${data.packages} paket Gunara OS`,
        },
      ]
    : [];

  return (
    <div className="space-y-5">
      {/* ── CTA cepat ── */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-emerald-50/45">
          CTA Cepat
        </span>
        <Button
          size="sm"
          onClick={() => onNavigate("pesan")}
          className="border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
          variant="outline"
        >
          Tangani Pesan
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
        <Button
          size="sm"
          onClick={() => onNavigate("blog")}
          className="border-emerald-400/30 bg-white/[0.03] hover:border-gold/50 hover:text-gold"
          variant="outline"
        >
          Tulis Artikel
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
        <Button
          size="sm"
          onClick={() => onNavigate("layanan")}
          className="border-emerald-400/30 bg-white/[0.03] hover:border-gold/50 hover:text-gold"
          variant="outline"
        >
          Atur Layanan
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      </div>

      {error && (
        <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-xl border-red-400/30 p-4">
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

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-36 rounded-2xl bg-emerald-400/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => onNavigate(c.tab)}
                aria-label={`Buka tab ${c.label}`}
                className="glass card-glow group flex flex-col rounded-2xl p-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-bright ring-1 ring-emerald-400/25 transition group-hover:scale-110 group-hover:text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {c.warn && (
                    <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/40">
                      Perlu Aksi
                    </span>
                  )}
                </div>
                <p className="font-display mt-4 text-3xl font-bold text-white">
                  {c.value.toLocaleString("id-ID")}
                </p>
                <p className="mt-0.5 text-sm font-medium text-emerald-50/60">
                  {c.label}
                </p>
                {c.custom ? (
                  c.custom
                ) : c.sub ? (
                  <p
                    className={`mt-2 text-xs ${c.warn ? "text-gold/90" : "text-emerald-50/40"}`}
                  >
                    {c.sub}
                  </p>
                ) : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
