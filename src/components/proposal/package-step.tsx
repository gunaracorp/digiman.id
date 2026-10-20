"use client";

import { useMemo, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  FileStack,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ADDONS, fmtJt, fmtRp } from "@/lib/proposal-calc";
import {
  TIER_FILTERS,
  tierChipClass,
  type GunaraData,
  type PgaDocView,
} from "./types";

/* ────────────────────────────────────────────────────────────
   Langkah 2 — Paket & Dokumen
   Mode "Paket Standar" (radio kartu 5 paket) ATAU "Kustom"
   (browser 165 dokumen: search + filter tier + collapsible per domain),
   lalu add-on. Counter & ringkasan mini live.
   ──────────────────────────────────────────────────────────── */

type Mode = "standar" | "kustom" | null;

export default function PackageStep({
  data,
  mode,
  packageCode,
  docCodes,
  addonIds,
  onMode,
  onPackage,
  onToggleDoc,
  onSetDocs,
  onToggleAddon,
}: {
  data: GunaraData;
  mode: Mode;
  packageCode: string | null;
  docCodes: string[];
  addonIds: string[];
  onMode: (m: Exclude<Mode, null>) => void;
  onPackage: (code: string) => void;
  onToggleDoc: (code: string) => void;
  onSetDocs: (codes: string[]) => void;
  onToggleAddon: (id: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState<string | null>(null);
  const [openDomains, setOpenDomains] = useState<Record<number, boolean>>({});

  const selectedSet = useMemo(() => new Set(docCodes), [docCodes]);
  const filtering = search.trim().length > 0 || tierFilter !== null;

  /* dokumen terkelompok per domain */
  const docsByDomain = useMemo(() => {
    const map = new Map<number, PgaDocView[]>();
    for (const d of data.docs) {
      const arr = map.get(d.domainNumber) ?? [];
      arr.push(d);
      map.set(d.domainNumber, arr);
    }
    return map;
  }, [data.docs]);

  const q = search.trim().toLowerCase();
  const matches = (doc: PgaDocView): boolean =>
    (!q || doc.title.toLowerCase().includes(q) || doc.code.toLowerCase().includes(q)) &&
    (!tierFilter || doc.tier.startsWith(tierFilter));

  const visibleCodes = useMemo(() => {
    const query = search.trim().toLowerCase();
    const out: string[] = [];
    for (const d of data.docs) {
      const ok =
        (!query || d.title.toLowerCase().includes(query) || d.code.toLowerCase().includes(query)) &&
        (!tierFilter || d.tier.startsWith(tierFilter));
      if (ok) out.push(d.code);
    }
    return out;
  }, [data.docs, search, tierFilter]);

  const selectVisible = () => {
    const next = new Set(docCodes);
    for (const c of visibleCodes) next.add(c);
    onSetDocs(Array.from(next).slice(0, 165));
  };

  return (
    <div className="space-y-8">
      {/* ─── Mode ─── */}
      <div
        role="radiogroup"
        aria-label="Mode penawaran"
        className="grid gap-3 sm:grid-cols-2"
      >
        <button
          type="button"
          role="radio"
          aria-checked={mode === "standar"}
          onClick={() => onMode("standar")}
          className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all duration-300 ${
            mode === "standar"
              ? "border border-gold/60 bg-gold/5 shadow-[0_0_30px_-12px_rgba(242,193,78,0.55)]"
              : "glass border-white/5 hover:border-emerald-400/40"
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              mode === "standar"
                ? "bg-gold/15 text-gold ring-1 ring-gold/40"
                : "bg-emerald-400/10 text-emerald-bright ring-1 ring-emerald-400/25"
            }`}
          >
            <Layers className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-bold text-white">Paket Standar</span>
            <span className="mt-0.5 block text-xs text-emerald-50/55">
              5 paket Gunara OS berjenjang — harga &amp; isi fixed
            </span>
          </span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={mode === "kustom"}
          onClick={() => onMode("kustom")}
          className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all duration-300 ${
            mode === "kustom"
              ? "border border-gold/60 bg-gold/5 shadow-[0_0_30px_-12px_rgba(242,193,78,0.55)]"
              : "glass border-white/5 hover:border-emerald-400/40"
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              mode === "kustom"
                ? "bg-gold/15 text-gold ring-1 ring-gold/40"
                : "bg-emerald-400/10 text-emerald-bright ring-1 ring-emerald-400/25"
            }`}
          >
            <FileStack className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-bold text-white">Kustom</span>
            <span className="mt-0.5 block text-xs text-emerald-50/55">
              Pilih dokumen manual — Rp 1 jt/dokumen tanpa diskon
            </span>
          </span>
        </button>
      </div>

      {/* ─── Paket standar ─── */}
      {mode === "standar" && (
        <fieldset>
          <legend className="sr-only">Pilih paket standar Gunara OS</legend>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.packages.map((p) => {
              const selected = packageCode === p.code;
              return (
                <button
                  key={p.code}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onPackage(p.code)}
                  className={`card-glow relative flex h-full flex-col rounded-2xl p-5 text-left transition-all duration-300 ${
                    selected
                      ? "border border-gold/60 bg-gold/5 shadow-[0_0_40px_-14px_rgba(242,193,78,0.6)]"
                      : "glass border-white/5 hover:border-emerald-400/40"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-950 shadow-[0_6px_18px_-6px_rgba(242,193,78,0.8)]">
                      Terpopuler
                    </span>
                  )}
                  {selected && (
                    <CheckCircle2
                      className="absolute right-4 top-4 h-5 w-5 text-gold"
                      aria-hidden="true"
                    />
                  )}
                  <p className="font-display text-sm font-extrabold uppercase tracking-wider text-gold">
                    {p.code}
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white">{p.name}</p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-emerald-50/55">
                    {p.tagline || p.description}
                  </p>
                  <div className="mt-4 flex items-end justify-between gap-2">
                    <span className="font-display text-2xl font-extrabold text-white">
                      {fmtJt(p.price)}
                    </span>
                    <span className="text-right text-[11px] leading-tight text-emerald-300/80">
                      {p.docCount} dokumen
                      <br />
                      {p.durationWeeks || "—"} minggu
                    </span>
                  </div>
                  {p.features.length > 0 && (
                    <ul className="mt-3 space-y-1.5 border-t border-white/5 pt-3">
                      {p.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-1.5 text-[11px] text-emerald-50/65"
                        >
                          <Check
                            className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400"
                            aria-hidden="true"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* ─── Kustom: browser dokumen ─── */}
      {mode === "kustom" && (
        <div className="glass rounded-2xl p-4 md:p-5">
          {/* toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px] flex-1">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-50/35"
                aria-hidden="true"
              />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari kode / judul dokumen…"
                aria-label="Cari dokumen"
                className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] pl-9 text-sm text-white placeholder:text-emerald-50/30 focus-visible:border-gold/50 focus-visible:ring-gold/20"
              />
            </div>
            <p
              className="text-sm font-bold text-gold"
              aria-live="polite"
              aria-atomic="true"
            >
              {docCodes.length}
              <span className="font-medium text-emerald-50/50"> / {data.docs.length} dipilih</span>
            </p>
          </div>

          {/* filter tier */}
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter tier dokumen">
            <button
              type="button"
              aria-pressed={tierFilter === null}
              onClick={() => setTierFilter(null)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                tierFilter === null
                  ? "border border-gold/60 bg-gold/10 text-gold"
                  : "glass border-white/5 text-emerald-50/60 hover:text-white"
              }`}
            >
              Semua
            </button>
            {TIER_FILTERS.map((t) => (
              <button
                key={t.key}
                type="button"
                aria-pressed={tierFilter === t.key}
                onClick={() => setTierFilter(tierFilter === t.key ? null : t.key)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                  tierFilter === t.key
                    ? tierChipClass(t.key) + " ring-1 ring-inset"
                    : "glass border-white/5 text-emerald-50/60 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
            <span className="flex-1" aria-hidden="true" />
            {filtering && visibleCodes.length > 0 && (
              <button
                type="button"
                onClick={selectVisible}
                className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/20"
              >
                Pilih semua hasil ({visibleCodes.length})
              </button>
            )}
            {docCodes.length > 0 && (
              <button
                type="button"
                onClick={() => onSetDocs([])}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-emerald-50/60 transition hover:border-red-400/40 hover:text-red-300"
              >
                Kosongkan
              </button>
            )}
          </div>

          {/* daftar per domain (collapsible) */}
          <div className="mt-4 max-h-[440px] space-y-2 overflow-y-auto rounded-xl bg-white/[0.02] p-2 pr-3">
            {data.domains.map((domain) => {
              const all = docsByDomain.get(domain.number) ?? [];
              const visible = all.filter(matches);
              if (visible.length === 0) return null;
              const selectedCount = all.filter((d) => selectedSet.has(d.code)).length;
              const isOpen = filtering ? true : (openDomains[domain.number] ?? false);

              return (
                <Collapsible
                  key={domain.number}
                  open={isOpen}
                  onOpenChange={(o) =>
                    setOpenDomains((prev) => ({ ...prev, [domain.number]: o }))
                  }
                  className="rounded-xl border border-white/5 bg-white/[0.02]"
                >
                  <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.04]">
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-emerald-300/70 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">
                        {domain.number}. {domain.name}
                      </span>
                      <span className="block truncate text-[11px] text-emerald-50/45">
                        {domain.tagline}
                      </span>
                    </span>
                    {selectedCount > 0 && (
                      <span className="shrink-0 rounded-full border border-gold/45 bg-gold/10 px-2 py-0.5 text-[10px] font-bold text-gold">
                        {selectedCount} dipilih
                      </span>
                    )}
                    <span className="shrink-0 text-[11px] text-emerald-50/40">
                      {visible.length} dok
                    </span>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <fieldset className="px-2 pb-2">
                      <legend className="sr-only">Dokumen domain {domain.name}</legend>
                      <div className="divide-y divide-white/5">
                        {visible.map((doc) => {
                          const checked = selectedSet.has(doc.code);
                          return (
                            <label
                              key={doc.code}
                              htmlFor={`prop-doc-${doc.code}`}
                              className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-white/[0.04]"
                            >
                              <Checkbox
                                id={`prop-doc-${doc.code}`}
                                checked={checked}
                                onCheckedChange={() => onToggleDoc(doc.code)}
                                aria-label={`Pilih ${doc.code} — ${doc.title}`}
                                className="border-emerald-400/30 bg-white/[0.04] data-[state=checked]:border-gold data-[state=checked]:bg-gold data-[state=checked]:text-emerald-950"
                              />
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm text-white">
                                  {doc.title}
                                </span>
                                <span className="block text-[11px] font-medium uppercase tracking-wider text-emerald-300/70">
                                  {doc.code}
                                </span>
                              </span>
                              <span
                                className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tierChipClass(doc.tier)}`}
                              >
                                {doc.tier}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
            {data.docs.length === 0 && (
              <p className="p-4 text-center text-sm text-emerald-50/50">
                Belum ada dokumen — pastikan data Gunara OS sudah di-seed.
              </p>
            )}
          </div>

          <p className="mt-3 text-xs text-emerald-50/40">
            Harga kustom: {fmtRp(1_000_000)} per dokumen, tanpa diskon. Durasi estimasi
            dihitung otomatis dari jumlah dokumen.
          </p>
        </div>
      )}

      {/* ─── Add-on ─── */}
      <fieldset>
        <legend className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
          <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Add-on Opsional
        </legend>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {ADDONS.map((a) => {
            const selected = addonIds.includes(a.id);
            return (
              <button
                key={a.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onToggleAddon(a.id)}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-left text-sm transition-all duration-300 ${
                  selected
                    ? "border border-emerald-400/60 bg-emerald-400/10 text-white shadow-[0_0_24px_-12px_rgba(52,211,153,0.6)]"
                    : "glass border-white/5 text-emerald-50/70 hover:border-emerald-400/40 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition ${
                    selected ? "bg-emerald-400 text-emerald-950" : "bg-white/5 text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="flex-1 font-medium">{a.title}</span>
                <span className="shrink-0 text-xs font-semibold text-gold">
                  {fmtJt(a.price)}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
