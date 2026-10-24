"use client";

/**
 * GUNARA OS EXPLORER — full-page view (dirender ketika hash #/os).
 * Tidak membawa navbar sendiri; kembali ke landing via tombol "← Beranda".
 * Alur jualan: lihat seluruh arsitektur 165 dokumen → pilih paket / dokumen
 * → preset disimpan ke sessionStorage → lanjut ke #route-proposal (Proposal Studio).
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FolderOpen,
  LayoutGrid,
  Loader2,
  MessageCircle,
  Package2,
  Plus,
  RefreshCw,
  Search,
  SearchX,
  Sparkles,
  TriangleAlert,
  User,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import {
  addDocCode,
  fmtJt,
  readDocCodes,
  savePackagePreset,
  tierMeta,
  TIER_KEYS,
  type GunaraApiResponse,
  type GunaraPackageData,
  type PgaDocData,
} from "@/lib/gunara";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WA_LINK = `https://wa.me/6281333397223?text=${encodeURIComponent(
  "Halo, saya tertarik dengan Gunara OS — arsitektur 165 dokumen super organisasi DIGIMAN.ID. Mohon info lebih lanjut.",
)}`;

type LoadStatus = "loading" | "error" | "ready";

/* ────────────────────────── Sub-komponen modul ────────────────────────── */

function Pill({
  children,
  tone = "emerald",
}: {
  children: React.ReactNode;
  tone?: "emerald" | "gold";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        tone === "gold"
          ? "border-gold/40 bg-gold/10 text-gold-light"
          : "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
      }`}
    >
      {children}
    </span>
  );
}

function chipClass(active: boolean): string {
  return `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
    active
      ? "border-gold/50 bg-gold/15 text-gold-light"
      : "border-emerald-400/20 bg-emerald-400/5 text-emerald-50/60 hover:border-emerald-400/40 hover:text-emerald-100"
  }`;
}

function ExplorerSkeleton() {
  return (
    <div className="section-padding pt-28" role="status" aria-label="Memuat Gunara OS">
      <Skeleton className="h-9 w-44 rounded-full" />
      <Skeleton className="mt-7 h-12 w-3/4 max-w-2xl rounded-2xl" />
      <Skeleton className="mt-3 h-5 w-2/3 max-w-xl rounded-full" />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-2xl" />
        ))}
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-[26rem] rounded-[1.75rem]" />
        ))}
      </div>
    </div>
  );
}

function ExplorerError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="section-padding flex min-h-[70vh] items-center justify-center py-24">
      <div className="glass mx-auto max-w-md rounded-3xl p-10 text-center">
        <TriangleAlert className="mx-auto h-10 w-10 text-gold" aria-hidden />
        <h1 className="font-display mt-4 text-xl font-bold text-white">
          Gagal memuat Gunara OS
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
          Koneksi ke server data terganggu. Periksa koneksi Anda lalu coba lagi.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-6 py-3 text-sm font-bold text-emerald-950 transition-transform hover:scale-[1.03]"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Coba Lagi
        </button>
      </div>
    </div>
  );
}

function PackageCard({
  pkg,
  index,
  isFlagship,
}: {
  pkg: GunaraPackageData;
  index: number;
  isFlagship: boolean;
}) {
  const isFeatured = pkg.highlight;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: EASE, delay: Math.min(index * 0.08, 0.32) }}
      className={`relative flex h-full flex-col rounded-[1.75rem] p-7 ${
        isFlagship ? "md:col-span-2 xl:col-span-2" : ""
      } ${
        isFeatured
          ? // Kartu featured TANPA .glass agar gradien emas tidak tertimpa (cascade, lihat worklog 4-b).
            "card-glow border border-gold/50 bg-gradient-to-b from-[#12241d] to-[#0a1613] shadow-[0_0_60px_-20px_rgba(242,193,78,0.45)]"
          : "glass card-glow"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-950 shadow-[0_6px_20px_-6px_rgba(242,193,78,0.8)]">
          Terpopuler
        </span>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-sm font-bold tracking-[0.22em] text-gold">
          {pkg.code}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 text-[11px] font-medium text-emerald-200/80">
          <Clock className="h-3 w-3" aria-hidden />
          {pkg.durationWeeks} minggu
        </span>
      </div>

      <h3
        className={`font-display mt-4 text-xl font-bold ${isFeatured ? "text-gold-light" : "text-white"}`}
      >
        {pkg.name}
      </h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
        {pkg.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-emerald-50/60">{pkg.description}</p>

      <div className="mt-5 flex items-end justify-between gap-4 border-t border-emerald-400/10 pt-5">
        <div>
          <div
            className={`font-display text-5xl font-extrabold leading-none ${
              isFeatured ? "gradient-text-gold" : "gradient-text-emerald"
            }`}
          >
            {pkg.docCount}
          </div>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-emerald-50/50">
            Dokumen
          </p>
        </div>
        <div className="text-right">
          <div className="font-display text-2xl font-bold text-gold">{fmtJt(pkg.price)}</div>
          <p className="mt-1 text-[11px] leading-snug text-emerald-50/45">
            Formula standar: {pkg.docCount} × Rp 1 jt
          </p>
        </div>
      </div>

      <ul
        className={`mt-5 flex-1 ${isFlagship ? "grid content-start gap-2 sm:grid-cols-2" : "space-y-2"}`}
      >
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-emerald-50/75">
            <CheckCircle2
              className={`mt-0.5 h-4 w-4 shrink-0 ${isFeatured ? "text-gold" : "text-emerald-400"}`}
              aria-hidden
            />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#route-proposal"
        onClick={() => savePackagePreset(pkg.code)}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
          isFeatured
            ? "shimmer-btn bg-gradient-to-r from-yellow-300 to-amber-400 text-emerald-950"
            : "border border-emerald-400/25 bg-emerald-400/10 text-emerald-100 hover:border-gold/50 hover:text-gold-light"
        }`}
      >
        Buat Penawaran
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </motion.article>
  );
}

function DocCard({
  doc,
  domainName,
  isAdded,
  onOpen,
}: {
  doc: PgaDocData;
  domainName: string;
  isAdded: boolean;
  onOpen: () => void;
}) {
  const meta = tierMeta(doc.tier);
  return (
    <button
      type="button"
      onClick={onOpen}
      className="glass card-glow group flex h-full flex-col rounded-2xl p-5 text-left"
      aria-label={`Buka detail dokumen ${doc.code}: ${doc.title}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-display text-sm font-bold tracking-[0.14em] text-gold">
          {doc.code}
        </span>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${meta.colorClass}`}
          title={`Tier ${doc.tier}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`} aria-hidden />
          {meta.short}
        </span>
      </div>
      <h3 className="mt-2.5 line-clamp-2 min-h-[2.6rem] text-sm font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-gold-light">
        {doc.title}
      </h3>
      <span className="mt-3 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-[11px] text-emerald-200/75">
        <FolderOpen className="h-3 w-3 shrink-0" aria-hidden />
        <span className="truncate">{domainName}</span>
      </span>
      <p className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[11px] text-emerald-50/45">
        <User className="h-3 w-3 shrink-0" aria-hidden />
        <span className="truncate">{doc.owner}</span>
      </p>
      {isAdded && (
        <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold-light">
          <CheckCircle2 className="h-3 w-3" aria-hidden />
          Di penawaran
        </span>
      )}
    </button>
  );
}

/* ──────────────────────────── Komponen utama ──────────────────────────── */

export default function OsExplorer() {
  const [data, setData] = useState<GunaraApiResponse | null>(null);
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [query, setQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<string | null>(null);
  const [domainFilter, setDomainFilter] = useState<number | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<PgaDocData | null>(null);
  const [addedDocs, setAddedDocs] = useState<Set<string>>(() => new Set());

  const loadData = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/gunara", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as GunaraApiResponse;
      setData(json);
      setStatus("ready");
    } catch {
      setData(null);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  // Sinkronkan status "sudah di penawaran" — hanya di client effect (SSR-safe).
  useEffect(() => {
    setAddedDocs(new Set(readDocCodes()));
  }, []);

  const domains = data?.domains ?? [];
  const docs = data?.docs ?? [];
  const packages = data?.packages ?? [];

  const domainNameById = useMemo(() => {
    const map = new Map<number, string>();
    for (const d of domains) map.set(d.number, d.name);
    return map;
  }, [domains]);

  const domainCounts = useMemo(() => {
    const map = new Map<number, number>();
    for (const doc of docs) {
      map.set(doc.domainNumber, (map.get(doc.domainNumber) ?? 0) + 1);
    }
    return map;
  }, [docs]);

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return docs.filter((doc) => {
      if (tierFilter && doc.tier !== tierFilter) return false;
      if (domainFilter !== null && doc.domainNumber !== domainFilter) return false;
      if (!q) return true;
      return (
        doc.code.toLowerCase().includes(q) ||
        doc.title.toLowerCase().includes(q) ||
        doc.owner.toLowerCase().includes(q)
      );
    });
  }, [docs, query, tierFilter, domainFilter]);

  const handleAddDoc = useCallback((doc: PgaDocData) => {
    addDocCode(doc.code);
    setAddedDocs((prev) => new Set(prev).add(doc.code));
    toast({
      title: "Dokumen ditambahkan",
      description: `${doc.code} — ${doc.title} masuk ke draft penawaran Anda.`,
    });
  }, []);

  const resetFilters = useCallback(() => {
    setQuery("");
    setTierFilter(null);
    setDomainFilter(null);
  }, []);

  const stats = [
    { value: data ? String(data.docs.length) : "165", label: "Dokumen Standar" },
    { value: data ? String(data.domains.length) : "20", label: "Domain Kepemimpinan" },
    { value: String(TIER_KEYS.length), label: "Tier Prioritas" },
    { value: data ? String(data.packages.length) : "5", label: "Paket Standar" },
  ];

  const selectedDomainName = selectedDoc
    ? (domainNameById.get(selectedDoc.domainNumber) ?? `Domain ${selectedDoc.domainNumber}`)
    : "";

  return (
    <div className="relative min-h-screen bg-night text-foreground">
      {/* Dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] starfield opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] grid-lines"
      />

      <main className="relative">
        {status === "loading" && <ExplorerSkeleton />}
        {status === "error" && <ExplorerError onRetry={() => void loadData()} />}

        {status === "ready" && (
          <>
            {/* ═══════════ HEADER ═══════════ */}
            <header className="section-padding pt-24 sm:pt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mx-auto max-w-7xl"
              >
                <a
                  href="#/"
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-50/70 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Beranda
                </a>

                <div className="mt-10 max-w-3xl">
                  <Pill>
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Gunara OS
                  </Pill>
                  <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                    Arsitektur <span className="gradient-text-gold">165 Dokumen</span> Super
                    Organisasi
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/65 sm:text-lg">
                    Sistem operasi perusahaan buatan DIGIMAN.ID: 165 dokumen siap pakai dalam 20
                    domain kepemimpinan, tersusun dalam 4 tier prioritas. Jelajahi seluruhnya, lalu
                    pilih paket standar — atau rakit kombinasi dokumen Anda sendiri.
                  </p>
                </div>

                <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="glass card-glow flex flex-col-reverse rounded-2xl p-5"
                    >
                      <dt className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-50/50">
                        {s.label}
                      </dt>
                      <dd className="font-display gradient-text-gold text-3xl font-extrabold leading-none">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </header>

            {/* ═══════════ SEKSI PAKET ═══════════ */}
            <section aria-labelledby="os-paket-title" className="section-padding pt-20 sm:pt-28">
              <div className="mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease: EASE }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
                >
                  <div>
                    <Pill>
                      <Package2 className="h-3.5 w-3.5" aria-hidden />
                      Paket Standar
                    </Pill>
                    <h2
                      id="os-paket-title"
                      className="font-display mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl"
                    >
                      Lima Paket, <span className="gradient-text-gold">Satu Sistem</span>
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/60 sm:text-base">
                      Setiap paket adalah kurasi dokumen siap implementasi — bukan sekadar file.
                      Pilih skala Anda, harga transparan mengikuti formula standar.
                    </p>
                  </div>
                  <p className="shrink-0 text-xs leading-relaxed text-emerald-50/45 sm:text-right">
                    Formula standar: dokumen × Rp 1 jt
                    <br />
                    Harga final tercantum di penawaran resmi.
                  </p>
                </motion.div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {packages.map((p, idx) => (
                    <PackageCard
                      key={p.code}
                      pkg={p}
                      index={idx}
                      isFlagship={idx === packages.length - 1}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════ SEKSI BROWSER DOKUMEN ═══════════ */}
            <section
              aria-labelledby="os-browser-title"
              className="section-padding pb-8 pt-20 sm:pt-28"
            >
              <div className="mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease: EASE }}
                >
                  <Pill>
                    <FolderOpen className="h-3.5 w-3.5" aria-hidden />
                    Browser Dokumen
                  </Pill>
                  <h2
                    id="os-browser-title"
                    className="font-display mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl"
                  >
                    Jelajahi <span className="gradient-text-emerald">Seluruh Sistem</span>
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/60 sm:text-base">
                    Cari per kode atau judul, saring per tier prioritas, dan telusuri 20 domain
                    kepemimpinan. Klik kartu dokumen untuk melihat isi pokoknya.
                  </p>
                </motion.div>

                <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
                  {/* ── Panel kiri: search + filter (sticky) ── */}
                  <aside
                    className="lg:sticky lg:top-24 lg:self-start"
                    aria-label="Filter dokumen Gunara OS"
                  >
                    <div className="glass rounded-2xl p-5">
                      <label htmlFor="gunara-search" className="sr-only">
                        Cari dokumen
                      </label>
                      <div className="relative">
                        <Search
                          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-300/50"
                          aria-hidden
                        />
                        <Input
                          id="gunara-search"
                          type="search"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Cari kode / judul…"
                          className="border-emerald-400/20 bg-night/60 pl-10 text-sm placeholder:text-emerald-50/30 focus-visible:ring-gold/40"
                        />
                      </div>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-50/40">
                        Tier Prioritas
                      </p>
                      <div
                        className="mt-2.5 flex flex-wrap gap-2"
                        role="group"
                        aria-label="Filter tier prioritas"
                      >
                        <button
                          type="button"
                          aria-pressed={tierFilter === null}
                          onClick={() => setTierFilter(null)}
                          className={chipClass(tierFilter === null)}
                        >
                          Semua
                        </button>
                        {TIER_KEYS.map((t) => {
                          const meta = tierMeta(t);
                          const active = tierFilter === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              aria-pressed={active}
                              title={`Tier ${t}`}
                              onClick={() => setTierFilter(active ? null : t)}
                              className={chipClass(active)}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`}
                                aria-hidden
                              />
                              {meta.short}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="glass mt-4 rounded-2xl p-4">
                      <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-50/40">
                        Peta Domain
                      </p>
                      <nav
                        aria-label="Daftar domain"
                        className="mt-2 max-h-[70vh] overflow-y-auto pr-1 [scrollbar-color:rgba(242,193,78,0.45)_transparent] [scrollbar-width:thin] lg:max-h-[42vh]"
                      >
                        <button
                          type="button"
                          aria-pressed={domainFilter === null}
                          onClick={() => setDomainFilter(null)}
                          className={`mb-2 flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-[13px] font-semibold transition-colors duration-300 ${
                            domainFilter === null
                              ? "border-gold/40 bg-emerald-400/10 text-gold"
                              : "border-transparent text-emerald-50/70 hover:bg-emerald-400/5 hover:text-emerald-50"
                          }`}
                        >
                          <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden />
                          Semua Domain
                        </button>
                        {domains.map((d) => {
                          const active = domainFilter === d.number;
                          return (
                            <button
                              key={d.number}
                              type="button"
                              aria-pressed={active}
                              title={d.tagline}
                              onClick={() => setDomainFilter(active ? null : d.number)}
                              className={`flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-colors duration-300 ${
                                active
                                  ? "border-gold/40 bg-emerald-400/10 text-gold"
                                  : "border-transparent text-emerald-50/60 hover:border-emerald-400/20 hover:bg-emerald-400/5 hover:text-emerald-50"
                              }`}
                            >
                              <span
                                className={`font-display w-6 shrink-0 text-right text-xs font-bold tabular-nums ${
                                  active ? "text-gold" : "text-emerald-400/60"
                                }`}
                              >
                                {String(d.number).padStart(2, "0")}
                              </span>
                              <span className="flex-1 truncate text-[13px] leading-snug">
                                {d.name}
                              </span>
                              <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 text-[10px] font-semibold text-emerald-200/70">
                                {domainCounts.get(d.number) ?? 0}
                              </span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>
                  </aside>

                  {/* ── Panel kanan: hasil ── */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p aria-live="polite" className="text-sm text-emerald-50/60">
                        <span className="font-display font-bold text-gold">
                          {filteredDocs.length}
                        </span>{" "}
                        dokumen ditemukan
                        {domainFilter !== null && domainNameById.has(domainFilter)
                          ? ` di Domain ${String(domainFilter).padStart(2, "0")} — ${domainNameById.get(domainFilter)}`
                          : ""}
                        {tierFilter ? ` • Tier ${tierMeta(tierFilter).short} ${tierMeta(tierFilter).label}` : ""}
                      </p>
                      {(query.trim() || tierFilter || domainFilter !== null) && (
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="text-xs font-medium text-emerald-300 underline-offset-4 transition-colors hover:text-gold hover:underline"
                        >
                          Reset filter
                        </button>
                      )}
                    </div>

                    {filteredDocs.length === 0 ? (
                      <div className="glass mt-5 rounded-2xl p-12 text-center">
                        <SearchX className="mx-auto h-10 w-10 text-emerald-300/40" aria-hidden />
                        <h3 className="font-display mt-4 text-lg font-bold text-white">
                          Tidak ada dokumen ditemukan
                        </h3>
                        <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-emerald-50/55">
                          Coba kata kunci lain, atau reset filter tier &amp; domain untuk melihat
                          seluruh 165 dokumen.
                        </p>
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition-colors hover:border-gold/50 hover:text-gold-light"
                        >
                          <RefreshCw className="h-4 w-4" aria-hidden />
                          Reset Filter
                        </button>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                      >
                        {filteredDocs.map((doc) => (
                          <DocCard
                            key={doc.code}
                            doc={doc}
                            domainName={domainNameById.get(doc.domainNumber) ?? `Domain ${doc.domainNumber}`}
                            isAdded={addedDocs.has(doc.code)}
                            onOpen={() => setSelectedDoc(doc)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════════ CTA BAND ═══════════ */}
            <section aria-labelledby="os-cta-title" className="section-padding pb-24 pt-20 sm:pt-28">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 starfield opacity-30"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]"
                />
                <div className="relative">
                  <Pill tone="gold">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Mulai Sekarang
                  </Pill>
                  <h2
                    id="os-cta-title"
                    className="font-display mx-auto mt-5 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-4xl"
                  >
                    Siap membangun <span className="gradient-text-gold">Super Organisasi</span>{" "}
                    Anda?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-emerald-50/60 sm:text-base">
                    Pilih paket standar atau rakit kombinasi dokumen sendiri — Proposal Studio
                    menyusun penawaran resmi lengkap dengan harga dan timeline dalam hitungan
                    menit.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#route-proposal"
                      className="shimmer-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-8 py-4 text-sm font-bold text-emerald-950 transition-transform hover:scale-[1.03] sm:w-auto"
                    >
                      Buka Proposal Studio
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-emerald-50 transition-colors duration-300 hover:border-gold/50 hover:text-gold-light sm:w-auto"
                    >
                      Chat WhatsApp
                      <MessageCircle className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>
          </>
        )}
      </main>

      {/* ═══════════ DIALOG DETAIL DOKUMEN ═══════════ */}
      <Dialog
        open={selectedDoc !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedDoc(null);
        }}
      >
        <DialogContent className="glass-strong max-h-[85vh] overflow-y-auto border-emerald-400/25 [scrollbar-color:rgba(242,193,78,0.45)_transparent] [scrollbar-width:thin] sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold leading-snug text-white">
              {selectedDoc?.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detail dokumen {selectedDoc?.code} — tier {selectedDoc?.tier}, pemilik{" "}
              {selectedDoc?.owner}, domain {selectedDomainName}.
            </DialogDescription>
          </DialogHeader>

          {selectedDoc && (
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-display gradient-text-gold text-2xl font-extrabold tracking-wide">
                  {selectedDoc.code}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${tierMeta(selectedDoc.tier).colorClass}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${tierMeta(selectedDoc.tier).dotClass}`}
                    aria-hidden
                  />
                  {tierMeta(selectedDoc.tier).short} · {tierMeta(selectedDoc.tier).label}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-200/80">
                  <FolderOpen className="h-3 w-3" aria-hidden />
                  {selectedDomainName}
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-xl p-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-50/40">
                    Pemilik Dokumen
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    <User className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
                    {selectedDoc.owner}
                  </p>
                </div>
                <div className="glass rounded-xl p-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-50/40">
                    Domain
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {String(selectedDoc.domainNumber).padStart(2, "0")} — {selectedDomainName}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-50/40">
                Isi Pokok Dokumen
              </p>
              {selectedDoc.points.length > 0 ? (
                <ul className="mt-2.5 space-y-2.5">
                  {selectedDoc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm leading-relaxed text-emerald-50/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2.5 text-sm italic text-emerald-50/50">
                  Rincian isi dokumen tersedia saat sesi konsultasi.
                </p>
              )}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {addedDocs.has(selectedDoc.code) ? (
                  <span
                    aria-live="polite"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-bold text-gold-light"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    Sudah di Draft Penawaran
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleAddDoc(selectedDoc)}
                    className="shimmer-btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-6 py-3 text-sm font-bold text-emerald-950 transition-transform hover:scale-[1.02]"
                  >
                    <Plus className="h-4 w-4" aria-hidden />
                    Masukkan ke Penawaran
                  </button>
                )}
                <a
                  href="#route-proposal"
                  onClick={() => setSelectedDoc(null)}
                  className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-emerald-100 transition-colors duration-300 hover:border-gold/50 hover:text-gold-light"
                >
                  Buka Proposal Studio
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
