"use client";

/**
 * PROPOSAL STUDIO — full-page view (dirender ketika hash #route-proposal).
 * Wizard 3 langkah: Data Klien → Paket & Dokumen → Review & Kirim,
 * diakhiri PREVIEW MODE berupa dokumen resmi yang siap dicetak.
 *
 * Alur masuk dari Gunara OS Explorer: preset sessionStorage "gunara-preset"
 * (kode paket) / "gunara-docs" (JSON array kode dokumen) dibaca saat mount,
 * dipakai untuk pre-select, lalu keduanya dihapus.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileStack,
  LayoutGrid,
  Loader2,
  MessageCircle,
  Package2,
  Plus,
  RefreshCw,
  Search,
  Send,
  Sparkles,
  TriangleAlert,
  X,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "@/hooks/use-toast";
import {
  ADDONS,
  buildLineItems,
  calcProposal,
  DISCOUNT_LABEL,
  DISCOUNT_PCT,
  fmtDateID,
  fmtJt,
  fmtRp,
  UNIT_PRICE,
  validUntilFrom,
  type ProposalData,
} from "@/lib/proposal-calc";
import {
  DOCS_KEY,
  PRESET_KEY,
  readDocCodes,
  tierMeta,
  TIER_KEYS,
  type GunaraApiResponse,
  type GunaraPackageData,
  type PgaDocData,
} from "@/lib/gunara";
import {
  EASE,
  inputCls,
  Pill,
  Stepper,
  waLinkFor,
} from "@/components/proposal/proposal-ui";
import ProposalPreview from "@/components/proposal/proposal-preview";

type LoadStatus = "loading" | "error" | "ready";
type Step = 1 | 2 | 3;
type Mode = "package" | "custom";

type ClientForm = {
  name: string;
  company: string;
  email: string;
  wa: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof ClientForm, string>>;

const EMPTY_FORM: ClientForm = { name: "", company: "", email: "", wa: "", notes: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateClient(form: ClientForm): FormErrors {
  const errs: FormErrors = {};
  if (form.name.trim().length < 3) errs.name = "Nama minimal 3 karakter.";
  if (!EMAIL_RE.test(form.email.trim())) errs.email = "Format email tidak valid.";
  const digits = form.wa.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) {
    errs.wa = "Nomor WhatsApp tidak valid (9–15 digit).";
  }
  return errs;
}

/* ────────────────────────── Sub-komponen modul ────────────────────────── */

function StudioSkeleton() {
  return (
    <div className="section-padding pt-28" role="status" aria-label="Memuat Proposal Studio">
      <Skeleton className="h-9 w-44 rounded-full" />
      <Skeleton className="mt-7 h-12 w-3/4 max-w-2xl rounded-2xl" />
      <Skeleton className="mt-3 h-5 w-2/3 max-w-xl rounded-full" />
      <Skeleton className="mt-10 h-20 rounded-2xl" />
      <Skeleton className="mt-8 h-[28rem] rounded-3xl" />
    </div>
  );
}

function StudioError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="section-padding flex min-h-[70vh] items-center justify-center py-24">
      <div className="glass mx-auto max-w-md rounded-3xl p-10 text-center">
        <TriangleAlert className="mx-auto h-10 w-10 text-gold" aria-hidden />
        <h1 className="font-display mt-4 text-xl font-bold text-white">
          Gagal memuat data paket
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

/* ──────────────────────────── Komponen utama ──────────────────────────── */

export default function ProposalStudio() {
  // Data master
  const [data, setData] = useState<GunaraApiResponse | null>(null);
  const [status, setStatus] = useState<LoadStatus>("loading");

  // Wizard
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<ClientForm>(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [mode, setMode] = useState<Mode>("package");
  const [packageCode, setPackageCode] = useState<string | null>(null);
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [stepError, setStepError] = useState<string | null>(null);

  // Simpan & preview
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState<ProposalData | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  // Browser dokumen kustom
  const [docQuery, setDocQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<string | null>(null);
  const [openDomains, setOpenDomains] = useState<Set<number>>(() => new Set());

  /* ── Muat data master ── */
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

  /* ── Preset dari Gunara OS Explorer (dibaca sekali saat mount, lalu dihapus) ── */
  useEffect(() => {
    try {
      const preset = window.sessionStorage.getItem(PRESET_KEY);
      const docCodes = readDocCodes();
      if (docCodes.length > 0) setSelectedDocs(docCodes);
      if (preset) {
        setMode("package");
        setPackageCode(preset);
      } else if (docCodes.length > 0) {
        setMode("custom");
      }
      window.sessionStorage.removeItem(PRESET_KEY);
      window.sessionStorage.removeItem(DOCS_KEY);
    } catch {
      // sessionStorage bisa diblokir (private mode) — abaikan dengan aman.
    }
  }, []);

  /* ── Scroll ke atas saat pindah langkah / buka preview ── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, showPreview]);

  const packages = useMemo(() => data?.packages ?? [], [data]);
  const docs = useMemo(() => data?.docs ?? [], [data]);
  const domains = useMemo(() => data?.domains ?? [], [data]);

  const selectedPkg: GunaraPackageData | null =
    packages.find((p) => p.code === packageCode) ?? null;

  /* ── Kalkulasi live (satu sumber kebenaran dengan API) ── */
  const calc = useMemo(
    () =>
      calcProposal(
        {
          packageCode: mode === "custom" ? "CUSTOM" : (packageCode ?? ""),
          documentCodes:
            mode === "custom" ? selectedDocs : (selectedPkg?.documentCodes ?? []),
          addonIds: selectedAddons,
        },
        packages.map((p) => ({
          code: p.code,
          name: p.name,
          docCount: p.docCount,
          price: p.price,
          durationWeeks: p.durationWeeks,
        })),
        docs.map((d) => ({ code: d.code, tier: d.tier })),
      ),
    [mode, packageCode, selectedDocs, selectedAddons, packages, docs, selectedPkg],
  );

  const summaryItems = useMemo(() => buildLineItems(calc), [calc]);
  const hasSelection = mode === "package" ? selectedPkg !== null : selectedDocs.length > 0;
  /** Persen diskon bawaan paket (dari tabel kontrak, terlepas dari pilihan aktif). */
  const pctOf = useCallback(
    (code: string) => DISCOUNT_PCT[code] ?? 0,
    [],
  );

  /* ── Browser dokumen kustom ── */
  const docsByDomain = useMemo(() => {
    const map = new Map<number, PgaDocData[]>();
    for (const d of docs) {
      const list = map.get(d.domainNumber) ?? [];
      list.push(d);
      map.set(d.domainNumber, list);
    }
    return map;
  }, [docs]);

  const filterActive = docQuery.trim() !== "" || tierFilter !== null;

  const filteredByDomain = useMemo(() => {
    const q = docQuery.trim().toLowerCase();
    return domains
      .map((domain) => ({
        domain,
        docs: (docsByDomain.get(domain.number) ?? []).filter((doc) => {
          if (tierFilter && doc.tier !== tierFilter) return false;
          if (!q) return true;
          return (
            doc.code.toLowerCase().includes(q) ||
            doc.title.toLowerCase().includes(q) ||
            doc.owner.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((group) => group.docs.length > 0);
  }, [domains, docsByDomain, docQuery, tierFilter]);

  const toggleDomain = useCallback((n: number, open: boolean) => {
    setOpenDomains((prev) => {
      const next = new Set(prev);
      if (open) next.add(n);
      else next.delete(n);
      return next;
    });
  }, []);

  const toggleDoc = useCallback((code: string) => {
    setSelectedDocs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
    );
  }, []);

  const toggleAddon = useCallback((id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const selectAllFiltered = useCallback(() => {
    setSelectedDocs((prev) =>
      Array.from(new Set([...prev, ...filteredByDomain.flatMap((g) => g.docs.map((d) => d.code))])),
    );
  }, [filteredByDomain]);

  /* ── Navigasi wizard ── */
  const setField = (key: keyof ClientForm) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setFormErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const handleNext1 = () => {
    const errs = validateClient(form);
    setFormErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setStep(2);
  };

  const handleNext2 = () => {
    if (mode === "package" && !selectedPkg) {
      setStepError("Pilih salah satu paket terlebih dahulu, atau beralihlah ke mode Kustom.");
      return;
    }
    if (mode === "custom" && selectedDocs.length === 0) {
      setStepError("Pilih minimal satu dokumen untuk paket kustom.");
      return;
    }
    setStepError(null);
    setStep(3);
  };

  /* ── Simpan penawaran ── */
  const handleSubmit = async () => {
    if (saving) return;

    const errs = validateClient(form);
    setFormErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      setStep(1);
      return;
    }
    if (!hasSelection) {
      setStep(2);
      return;
    }

    setSaving(true);
    setPostError(null);
    try {
      const res = await fetch("/api/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: form.name.trim(),
          clientCompany: form.company.trim() || undefined,
          clientEmail: form.email.trim(),
          clientWa: form.wa.trim(),
          packageCode: mode === "custom" ? "CUSTOM" : packageCode,
          documentCodes: mode === "custom" ? selectedDocs : undefined,
          addonIds: selectedAddons,
          notes: form.notes.trim() || undefined,
        }),
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        code?: string;
        proposal?: ProposalData;
        error?: string;
      } | null;
      if (!res.ok || !json?.ok || !json.proposal) {
        throw new Error(json?.error || `Gagal menyimpan penawaran (HTTP ${res.status}).`);
      }

      setSaved(json.proposal);
      setShowPreview(true);
      toast({
        title: "Penawaran berhasil dibuat",
        description: `Kode penawaran Anda: ${json.code}. Masa berlaku 30 hari — cetak PDF atau bagikan via WhatsApp.`,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Gagal menyimpan penawaran.";
      setPostError(message);
      toast({
        title: "Gagal menyimpan penawaran",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  /* ── PREVIEW MODE ── */
  if (showPreview && saved) {
    return <ProposalPreview proposal={saved} onBack={() => setShowPreview(false)} />;
  }

  const waMessage = `Halo, saya ${form.name.trim() || "calon klien"}. Saya baru membuat penawaran ${
    saved?.code ?? ""
  } untuk paket ${mode === "custom" ? "rakit kustom" : (packageCode ?? "")} Gunara OS. Mohon info langkah selanjutnya. Terima kasih.`;

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
        {status === "loading" && <StudioSkeleton />}
        {status === "error" && <StudioError onRetry={() => void loadData()} />}

        {status === "ready" && (
          <>
            {/* ═══════════ HEADER ═══════════ */}
            <header className="section-padding pt-24 sm:pt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mx-auto max-w-6xl"
              >
                <a
                  href="#route-"
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-50/70 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Beranda
                </a>

                <div className="mt-10 max-w-3xl">
                  <Pill>
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Proposal Studio
                  </Pill>
                  <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
                    Rakit <span className="gradient-text-gold">Penawaran Resmi</span> dalam 3
                    Langkah
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/65 sm:text-lg">
                    Susun penawaran arsitektur dokumen Gunara OS — pilih paket standar atau rakit
                    kombinasi dokumen Anda sendiri, tambahkan add-on, lalu cetak sebagai dokumen
                    resmi.
                  </p>
                </div>
              </motion.div>
            </header>

            <div className="section-padding mx-auto max-w-6xl pb-28 pt-10">
              <Stepper step={step} onNavigate={(s) => setStep(s)} />

              {/* Banner penawaran tersimpan (tampil setelah kembali dari preview) */}
              {saved && (
                <div className="glass mt-6 flex flex-wrap items-center gap-3 rounded-2xl p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <p className="min-w-0 flex-1 text-sm text-emerald-50/80">
                    Penawaran{" "}
                    <span className="font-display font-bold text-gold-light">{saved.code}</span>{" "}
                    sudah tersimpan (status Draft). Perubahan di bawah akan membuat penawaran baru
                    saat disimpan ulang.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowPreview(true)}
                    className="shimmer-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-gold to-amber-400 px-4 py-2 text-sm font-bold text-emerald-950 transition hover:brightness-110"
                  >
                    Lihat Penawaran
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              )}

              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="mt-8"
              >
                {/* ═══════════════════ LANGKAH 1 — DATA KLIEN ═══════════════════ */}
                {step === 1 && (
                  <section aria-label="Langkah 1: Data Klien" className="mx-auto max-w-2xl">
                    <form
                      noValidate
                      className="glass rounded-3xl p-7 sm:p-9"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleNext1();
                      }}
                    >
                      <h2 className="font-display text-xl font-bold text-white">
                        Data Klien Penawaran
                      </h2>
                      <p className="mt-1 text-sm text-emerald-50/55">
                        Identitas ini akan tercetak pada kop penawaran resmi.
                      </p>

                      <div className="mt-7 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="prop-nama"
                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                          >
                            Nama Lengkap <span className="text-gold">*</span>
                          </label>
                          <Input
                            id="prop-nama"
                            name="clientName"
                            value={form.name}
                            onChange={(e) => setField("name")(e.target.value)}
                            placeholder="Nama pemilik / pimpinan"
                            autoComplete="name"
                            aria-invalid={!!formErrors.name}
                            aria-describedby={formErrors.name ? "prop-nama-error" : undefined}
                            className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${inputCls(!!formErrors.name)}`}
                          />
                          {formErrors.name && (
                            <p id="prop-nama-error" className="mt-1.5 text-xs text-red-400">
                              {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="prop-perusahaan"
                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                          >
                            Perusahaan / Organisasi
                          </label>
                          <Input
                            id="prop-perusahaan"
                            name="clientCompany"
                            value={form.company}
                            onChange={(e) => setField("company")(e.target.value)}
                            placeholder="PT / CV / Yayasan (opsional)"
                            autoComplete="organization"
                            className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${inputCls(false)}`}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="prop-email"
                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                          >
                            Email <span className="text-gold">*</span>
                          </label>
                          <Input
                            id="prop-email"
                            name="clientEmail"
                            type="email"
                            value={form.email}
                            onChange={(e) => setField("email")(e.target.value)}
                            placeholder="nama@perusahaan.id"
                            autoComplete="email"
                            aria-invalid={!!formErrors.email}
                            aria-describedby={formErrors.email ? "prop-email-error" : undefined}
                            className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${inputCls(!!formErrors.email)}`}
                          />
                          {formErrors.email && (
                            <p id="prop-email-error" className="mt-1.5 text-xs text-red-400">
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="prop-wa"
                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                          >
                            WhatsApp <span className="text-gold">*</span>
                          </label>
                          <Input
                            id="prop-wa"
                            name="clientWa"
                            type="tel"
                            inputMode="tel"
                            value={form.wa}
                            onChange={(e) => setField("wa")(e.target.value)}
                            placeholder="0812 3456 7890 (atau +62…)"
                            autoComplete="tel"
                            aria-invalid={!!formErrors.wa}
                            aria-describedby={formErrors.wa ? "prop-wa-error" : undefined}
                            className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${inputCls(!!formErrors.wa)}`}
                          />
                          {formErrors.wa ? (
                            <p id="prop-wa-error" className="mt-1.5 text-xs text-red-400">
                              {formErrors.wa}
                            </p>
                          ) : (
                            <p className="mt-1.5 text-[11px] text-emerald-50/40">
                              Sertakan kode area — awali dengan 08 atau 62 (+62).
                            </p>
                          )}
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="prop-notes"
                            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                          >
                            Catatan (opsional)
                          </label>
                          <Textarea
                            id="prop-notes"
                            name="notes"
                            rows={4}
                            value={form.notes}
                            onChange={(e) => setField("notes")(e.target.value)}
                            placeholder="Konteks bisnis, target go-live, hal yang ingin diprioritaskan…"
                            className={`min-h-[100px] rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${inputCls(false)}`}
                          />
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-end gap-3">
                        <button
                          type="submit"
                          className="shimmer-btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 via-gold to-amber-400 px-6 py-3 text-sm font-bold text-emerald-950 shadow-[0_10px_30px_-10px_rgba(242,193,78,0.55)] transition hover:brightness-110"
                        >
                          Lanjut: Paket &amp; Dokumen
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </button>
                      </div>
                    </form>
                  </section>
                )}

                {/* ═══════════════════ LANGKAH 2 — PAKET & DOKUMEN ═══════════════════ */}
                {step === 2 && (
                  <section aria-label="Langkah 2: Paket dan Dokumen" className="space-y-10">
                    {/* Mode pemilihan */}
                    <div
                      role="radiogroup"
                      aria-label="Mode pemilihan penawaran"
                      className="grid gap-3 sm:grid-cols-2"
                    >
                      {(
                        [
                          {
                            id: "package" as const,
                            icon: Package2,
                            title: "Paket Standar",
                            desc: "Pilih 1 dari 5 paket kurasi resmi Gunara OS.",
                          },
                          {
                            id: "custom" as const,
                            icon: LayoutGrid,
                            title: "Kustom",
                            desc: "Rakit sendiri — bayar per dokumen, tanpa diskon.",
                          },
                        ]
                      ).map((opt) => {
                        const selected = mode === opt.id;
                        const Icon = opt.icon;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => {
                              setMode(opt.id);
                              setStepError(null);
                            }}
                            className={`relative flex items-start gap-3 rounded-2xl p-4 text-left transition-all duration-300 sm:p-5 ${
                              selected
                                ? "border border-gold/60 bg-gold/5 shadow-[0_0_30px_-12px_rgba(242,193,78,0.55)]"
                                : "glass border-white/5 hover:border-emerald-400/40"
                            }`}
                          >
                            {selected && (
                              <CheckCircle2
                                className="absolute right-3 top-3 h-5 w-5 text-gold"
                                aria-hidden
                              />
                            )}
                            <span
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${
                                selected
                                  ? "bg-gold/15 text-gold ring-gold/40"
                                  : "bg-emerald-400/10 text-emerald-300 ring-emerald-400/25"
                              }`}
                            >
                              <Icon className="h-5 w-5" aria-hidden />
                            </span>
                            <span className="min-w-0 pr-6">
                              <span className="block text-sm font-bold text-white">{opt.title}</span>
                              <span className="mt-1 block text-xs leading-relaxed text-emerald-50/60">
                                {opt.desc}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* (a) Paket standar */}
                    {mode === "package" && (
                      <fieldset className="border-0 p-0">
                        <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                          Pilih Paket Standar
                        </legend>
                        <div
                          role="radiogroup"
                          aria-label="Paket Gunara OS"
                          className="mt-4 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3"
                        >
                          {packages.map((pkg) => {
                            const selected = packageCode === pkg.code;
                            const isFeatured = pkg.highlight;
                            const pct = pctOf(pkg.code);
                            return (
                              <button
                                key={pkg.code}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                aria-label={`Pilih paket ${pkg.code} ${pkg.name}, ${pkg.docCount} dokumen, ${fmtJt(pkg.price)}`}
                                onClick={() => {
                                  setPackageCode(selected ? null : pkg.code);
                                  setStepError(null);
                                }}
                                className={`relative flex h-full flex-col rounded-2xl p-5 text-left transition-all duration-300 ${
                                  selected
                                    ? "border border-gold/60 bg-gold/10 shadow-[0_0_34px_-12px_rgba(242,193,78,0.6)]"
                                    : isFeatured
                                      ? "border border-gold/40 bg-gradient-to-b from-[#12241d] to-[#0a1613] shadow-[0_0_50px_-24px_rgba(242,193,78,0.4)] hover:border-gold/60"
                                      : "glass border-white/5 hover:border-emerald-400/40"
                                }`}
                              >
                                {isFeatured && (
                                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-950 shadow-[0_6px_20px_-6px_rgba(242,193,78,0.8)]">
                                    Terpopuler
                                  </span>
                                )}
                                {selected && (
                                  <CheckCircle2
                                    className="absolute right-3 top-3 h-5 w-5 text-gold"
                                    aria-hidden
                                  />
                                )}

                                <div className="flex items-center justify-between gap-2 pr-6">
                                  <span className="font-display text-sm font-bold tracking-[0.22em] text-gold">
                                    {pkg.code}
                                  </span>
                                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-2.5 py-0.5 text-[10px] font-medium text-emerald-200/80">
                                    <Clock className="h-3 w-3" aria-hidden />
                                    {pkg.durationWeeks} minggu
                                  </span>
                                </div>

                                <h3
                                  className={`font-display mt-3 text-base font-bold ${isFeatured ? "text-gold-light" : "text-white"}`}
                                >
                                  {pkg.name}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-emerald-50/55">
                                  {pkg.tagline}
                                </p>

                                <div className="mt-4 flex items-end justify-between gap-3 border-t border-emerald-400/10 pt-4">
                                  <div>
                                    <span className="font-display gradient-text-gold text-2xl font-extrabold leading-none">
                                      {pkg.docCount}
                                    </span>
                                    <span className="ml-1.5 text-[11px] uppercase tracking-wider text-emerald-50/50">
                                      dokumen
                                    </span>
                                  </div>
                                  <span className="font-display text-lg font-bold text-gold">
                                    {fmtJt(pkg.price)}
                                  </span>
                                </div>

                                {pct > 0 && (
                                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold-light">
                                    <Sparkles className="h-3 w-3" aria-hidden />
                                    {DISCOUNT_LABEL} {pct}%
                                  </span>
                                )}

                                <ul className="mt-3 flex-1 space-y-1.5">
                                  {pkg.features.slice(0, 3).map((f) => (
                                    <li
                                      key={f}
                                      className="flex items-start gap-2 text-xs text-emerald-50/70"
                                    >
                                      <CheckCircle2
                                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isFeatured ? "text-gold" : "text-emerald-400"}`}
                                        aria-hidden
                                      />
                                      {f}
                                    </li>
                                  ))}
                                </ul>
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}

                    {/* (b) Kustom — browser dokumen */}
                    {mode === "custom" && (
                      <fieldset className="border-0 p-0">
                        <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                          Rakit Dokumen Anda
                        </legend>

                        <div className="glass mt-4 rounded-2xl p-4 sm:p-5">
                          {/* Bar pencarian + counter */}
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="relative min-w-0 flex-1">
                              <label htmlFor="prop-doc-search" className="sr-only">
                                Cari dokumen
                              </label>
                              <Search
                                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-50/40"
                                aria-hidden
                              />
                              <Input
                                id="prop-doc-search"
                                value={docQuery}
                                onChange={(e) => setDocQuery(e.target.value)}
                                placeholder="Cari kode / judul dokumen…"
                                className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] pl-9 text-white placeholder:text-emerald-50/30 focus-visible:border-gold/50 focus-visible:ring-gold/20"
                              />
                            </div>
                            <p
                              className="font-display text-sm font-bold text-gold-light"
                              aria-live="polite"
                            >
                              {selectedDocs.length} dokumen dipilih ·{" "}
                              {fmtJt(selectedDocs.length * UNIT_PRICE)}
                            </p>
                          </div>

                          {/* Chip tier */}
                          <div
                            className="mt-3 flex flex-wrap gap-2"
                            role="group"
                            aria-label="Filter tier prioritas"
                          >
                            <button
                              type="button"
                              aria-pressed={tierFilter === null}
                              onClick={() => setTierFilter(null)}
                              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                                tierFilter === null
                                  ? "border-gold/50 bg-gold/15 text-gold-light"
                                  : "border-emerald-400/20 bg-emerald-400/5 text-emerald-50/60 hover:border-emerald-400/40 hover:text-emerald-100"
                              }`}
                            >
                              Semua Tier
                            </button>
                            {TIER_KEYS.map((tier) => {
                              const meta = tierMeta(tier);
                              const active = tierFilter === tier;
                              return (
                                <button
                                  key={tier}
                                  type="button"
                                  aria-pressed={active}
                                  onClick={() => setTierFilter(active ? null : tier)}
                                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                                    active
                                      ? "border-gold/50 bg-gold/15 text-gold-light"
                                      : "border-emerald-400/20 bg-emerald-400/5 text-emerald-50/60 hover:border-emerald-400/40 hover:text-emerald-100"
                                  }`}
                                >
                                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`} aria-hidden />
                                  {meta.short} {meta.label}
                                </button>
                              );
                            })}
                          </div>

                          {/* Daftar domain (Collapsible) — list panjang discroll */}
                          <div className="mt-4 max-h-96 space-y-2.5 overflow-y-auto pr-1">
                            {filteredByDomain.map(({ domain, docs: domainDocs }) => {
                              const selectedInDomain = domainDocs.filter((d) =>
                                selectedDocs.includes(d.code),
                              ).length;
                              const open = filterActive || openDomains.has(domain.number);
                              return (
                                <Collapsible
                                  key={domain.number}
                                  open={open}
                                  onOpenChange={(o) => toggleDomain(domain.number, o)}
                                >
                                  <div className="rounded-xl border border-emerald-400/10 bg-white/[0.02]">
                                    <CollapsibleTrigger className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-300 hover:bg-emerald-400/5">
                                      <span className="font-display text-xs font-bold text-gold">
                                        {String(domain.number).padStart(2, "0")}
                                      </span>
                                      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-white">
                                        {domain.name}
                                      </span>
                                      {selectedInDomain > 0 && (
                                        <span className="inline-flex shrink-0 items-center rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-bold text-gold-light">
                                          {selectedInDomain} dipilih
                                        </span>
                                      )}
                                      <span className="shrink-0 text-[11px] text-emerald-50/45">
                                        {domainDocs.length} dok
                                      </span>
                                      <ChevronDown
                                        className={`h-4 w-4 shrink-0 text-emerald-50/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                                        aria-hidden
                                      />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                      <ul className="max-h-72 space-y-1 overflow-y-auto border-t border-emerald-400/10 px-2 py-2">
                                        {domainDocs.map((doc) => {
                                          const meta = tierMeta(doc.tier);
                                          const checked = selectedDocs.includes(doc.code);
                                          return (
                                            <li key={doc.code}>
                                              <label
                                                htmlFor={`prop-doc-${doc.code}`}
                                                className={`flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-emerald-400/5 ${checked ? "bg-gold/5" : ""}`}
                                              >
                                                <Checkbox
                                                  id={`prop-doc-${doc.code}`}
                                                  checked={checked}
                                                  onCheckedChange={() => toggleDoc(doc.code)}
                                                  className="mt-0.5"
                                                  aria-label={`Pilih dokumen ${doc.code}: ${doc.title}`}
                                                />
                                                <span className="min-w-0 flex-1">
                                                  <span className="font-display text-[11px] font-bold tracking-[0.14em] text-gold">
                                                    {doc.code}
                                                  </span>
                                                  <span className="block truncate text-sm text-emerald-50/85">
                                                    {doc.title}
                                                  </span>
                                                </span>
                                                <span
                                                  className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-bold ${meta.colorClass}`}
                                                >
                                                  {meta.short}
                                                </span>
                                              </label>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </CollapsibleContent>
                                  </div>
                                </Collapsible>
                              );
                            })}
                            {filteredByDomain.length === 0 && (
                              <div className="flex flex-col items-center gap-3 rounded-xl border border-emerald-400/10 bg-white/[0.02] px-4 py-10 text-center">
                                <FileStack className="h-8 w-8 text-emerald-50/30" aria-hidden />
                                <p className="text-sm text-emerald-50/55">
                                  Tidak ada dokumen yang cocok dengan pencarian/filter.
                                </p>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDocQuery("");
                                    setTierFilter(null);
                                  }}
                                  className="glass rounded-full px-4 py-2 text-xs font-semibold text-emerald-50/75 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                                >
                                  Reset filter
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Aksi cepat browser */}
                          <div className="mt-3 flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={selectAllFiltered}
                              className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-emerald-50/75 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                            >
                              <Plus className="h-3.5 w-3.5" aria-hidden />
                              Pilih semua hasil filter ({filteredByDomain.reduce((n, g) => n + g.docs.length, 0)})
                            </button>
                            {selectedDocs.length > 0 && (
                              <button
                                type="button"
                                onClick={() => setSelectedDocs([])}
                                className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-emerald-50/60 transition-colors duration-300 hover:border-red-400/40 hover:text-red-300"
                              >
                                <X className="h-3.5 w-3.5" aria-hidden />
                                Kosongkan pilihan
                              </button>
                            )}
                          </div>
                        </div>
                      </fieldset>
                    )}

                    {/* (c) Add-on */}
                    <fieldset className="border-0 p-0">
                      <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                        Add-on Opsional
                      </legend>
                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {ADDONS.map((a) => {
                          const selected = selectedAddons.includes(a.id);
                          return (
                            <label
                              key={a.id}
                              htmlFor={`prop-addon-${a.id}`}
                              className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300 ${
                                selected
                                  ? "border border-emerald-400/60 bg-emerald-400/10 text-white shadow-[0_0_24px_-12px_rgba(52,211,153,0.6)]"
                                  : "glass border-white/5 text-emerald-50/70 hover:border-emerald-400/40 hover:text-white"
                              }`}
                            >
                              <Checkbox
                                id={`prop-addon-${a.id}`}
                                checked={selected}
                                onCheckedChange={() => toggleAddon(a.id)}
                                aria-label={`Tambahkan add-on ${a.title}`}
                              />
                              <span className="min-w-0 flex-1 text-sm font-medium leading-snug">
                                {a.title}
                              </span>
                              <span className="shrink-0 text-xs font-bold text-gold">
                                {fmtJt(a.price)}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    {/* Error validasi langkah 2 */}
                    {stepError && (
                      <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
                        <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
                        {stepError}
                      </p>
                    )}

                    {/* Estimasi berjalan */}
                    <div className="glass-strong flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5">
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-50/45">
                          Estimasi berjalan
                        </p>
                        <p className="font-display mt-1 truncate text-sm font-bold text-white">
                          {hasSelection
                            ? calc.packageLabel
                            : "Belum ada paket / dokumen dipilih"}
                        </p>
                        <p className="mt-0.5 text-xs text-emerald-50/55">
                          {calc.docCount} dokumen · {calc.durationLabel}
                          {calc.discount > 0 && ` · ${DISCOUNT_LABEL} ${calc.discountPct}%`}
                          {calc.addons.length > 0 && ` · ${calc.addons.length} add-on`}
                        </p>
                      </div>
                      <p className="font-display gradient-text-gold text-2xl font-extrabold">
                        {hasSelection ? fmtRp(calc.total) : "Rp —"}
                      </p>
                    </div>

                    {/* Navigasi */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-emerald-50/80 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                      >
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                        Kembali
                      </button>
                      <button
                        type="button"
                        onClick={handleNext2}
                        className="shimmer-btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 via-gold to-amber-400 px-6 py-3 text-sm font-bold text-emerald-950 shadow-[0_10px_30px_-10px_rgba(242,193,78,0.55)] transition hover:brightness-110"
                      >
                        Lanjut: Review &amp; Kirim
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </button>
                    </div>
                  </section>
                )}

                {/* ═══════════════════ LANGKAH 3 — REVIEW & KIRIM ═══════════════════ */}
                {step === 3 && (
                  <section aria-label="Langkah 3: Review dan Kirim">
                    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                      {/* Ringkasan kiri */}
                      <div className="glass-strong rounded-3xl p-6 sm:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h2 className="font-display text-xl font-bold text-white">
                            Ringkasan Penawaran
                          </h2>
                          <span className="rounded-full border border-zinc-400/30 bg-zinc-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                            Draft
                          </span>
                        </div>

                        <dl className="mt-5 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
                          <div className="flex gap-2">
                            <dt className="shrink-0 text-emerald-50/45">Klien</dt>
                            <dd className="min-w-0 font-semibold text-white">{form.name.trim()}</dd>
                          </div>
                          {form.company.trim() && (
                            <div className="flex gap-2">
                              <dt className="shrink-0 text-emerald-50/45">Perusahaan</dt>
                              <dd className="min-w-0 font-semibold text-white">
                                {form.company.trim()}
                              </dd>
                            </div>
                          )}
                          <div className="flex gap-2">
                            <dt className="shrink-0 text-emerald-50/45">Email</dt>
                            <dd className="min-w-0 truncate font-semibold text-white">
                              {form.email.trim()}
                            </dd>
                          </div>
                          <div className="flex gap-2">
                            <dt className="shrink-0 text-emerald-50/45">WhatsApp</dt>
                            <dd className="min-w-0 font-semibold text-white">{form.wa.trim()}</dd>
                          </div>
                        </dl>

                        {/* Line items */}
                        <ul aria-label="Rincian biaya" className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
                          {summaryItems.map((item, i) => {
                            const isDiscount = item.amount < 0;
                            return (
                              <li
                                key={`${item.label}-${i}`}
                                className="flex items-start justify-between gap-4 text-sm"
                              >
                                <span className="flex min-w-0 items-start gap-2 text-emerald-50/75">
                                  <CheckCircle2
                                    className={`mt-0.5 h-4 w-4 shrink-0 ${isDiscount ? "text-gold" : "text-emerald-400"}`}
                                    aria-hidden
                                  />
                                  <span className="min-w-0">
                                    <span className="block leading-snug">{item.label}</span>
                                    <span className="block text-[11px] text-emerald-50/40">
                                      {isDiscount
                                        ? `hemat ${fmtRp(-item.amount)}`
                                        : `${item.qty} × ${fmtRp(UNIT_PRICE)}`}
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className={`shrink-0 font-semibold ${isDiscount ? "text-gold" : "text-emerald-50/90"}`}
                                >
                                  {isDiscount ? `− ${fmtRp(-item.amount)}` : fmtRp(item.amount)}
                                </span>
                              </li>
                            );
                          })}
                          {summaryItems.length === 0 && (
                            <li className="text-sm text-emerald-50/40">
                              Belum ada item — kembali ke langkah 2 untuk memilih paket/dokumen.
                            </li>
                          )}
                        </ul>

                        {/* Subtotal / diskon / total */}
                        <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                          <div className="flex items-baseline justify-between gap-4 text-sm">
                            <span className="text-emerald-50/60">Subtotal</span>
                            <span className="font-semibold text-emerald-50/90">
                              {fmtRp(calc.subtotal)}
                            </span>
                          </div>
                          <div className="flex items-baseline justify-between gap-4 text-sm">
                            <span className="text-emerald-50/60">
                              {DISCOUNT_LABEL} ({calc.discountPct}%)
                            </span>
                            <span className="font-semibold text-gold">
                              {calc.discount > 0 ? `− ${fmtRp(calc.discount)}` : fmtRp(0)}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-gold/25 pt-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-50/60">
                              Total Investasi
                            </span>
                            <span className="font-display gradient-text-gold text-3xl font-extrabold sm:text-4xl">
                              {fmtRp(calc.total)}
                            </span>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          <div className="glass flex items-center gap-3 rounded-xl p-3.5">
                            <Clock className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
                            <div className="min-w-0">
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-50/45">
                                Estimasi pengerjaan
                              </p>
                              <p className="truncate text-sm font-semibold text-white">
                                {calc.durationLabel}
                              </p>
                            </div>
                          </div>
                          <div className="glass flex items-center gap-3 rounded-xl p-3.5">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                            <div className="min-w-0">
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-50/45">
                                Berlaku hingga
                              </p>
                              <p className="truncate text-sm font-semibold text-white">
                                {fmtDateID(validUntilFrom())} (30 hari)
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-xs leading-relaxed text-emerald-50/45">
                          Formula standar: {calc.docCount} × {fmtRp(UNIT_PRICE)} per dokumen.
                          {calc.discountPct > 0 &&
                            ` ${DISCOUNT_LABEL} ${calc.discountPct}% sudah diterapkan.`}
                        </p>
                      </div>

                      {/* Kolom aksi kanan */}
                      <div className="glass space-y-5 rounded-3xl p-6 sm:p-8 lg:sticky lg:top-28">
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">
                            {saved ? "Penawaran tersimpan" : "Siap dikirim"}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-emerald-50/55">
                            {saved
                              ? "Buka lagi dokumen penawaran, cetak PDF, atau langsung chat tim kami."
                              : "Saat disimpan, penawaran mendapat kode resmi PNW dan berlaku 30 hari."}
                          </p>
                        </div>

                        <ul className="space-y-2.5 text-sm text-emerald-50/70">
                          {[
                            "Tersimpan sebagai Draft di database kami",
                            "Dokumen resmi siap dicetak / disimpan PDF",
                            "Satu klik bagikan via WhatsApp",
                          ].map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                              {point}
                            </li>
                          ))}
                        </ul>

                        {postError && (
                          <p className="flex items-start gap-2 text-sm text-red-400" role="alert">
                            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                            {postError}
                          </p>
                        )}

                        {saved ? (
                          <div className="space-y-3">
                            <div className="glass rounded-xl p-4 text-center">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-50/45">
                                Kode penawaran
                              </p>
                              <p className="font-display mt-1 text-xl font-extrabold tracking-[0.1em] text-gold-light">
                                {saved.code}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setShowPreview(true)}
                              className="shimmer-btn inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 via-gold to-amber-400 text-sm font-bold text-emerald-950 shadow-[0_10px_30px_-10px_rgba(242,193,78,0.55)] transition hover:brightness-110"
                            >
                              Buka Preview Penawaran
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            </button>
                            <a
                              href={waLinkFor(waMessage)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-emerald-50/85 transition-colors duration-300 hover:border-emerald-400/50 hover:text-emerald-200"
                            >
                              <MessageCircle className="h-4 w-4" aria-hidden />
                              Chat WhatsApp
                            </a>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => void handleSubmit()}
                            disabled={saving || !hasSelection}
                            className="shimmer-btn inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 via-gold to-amber-400 text-sm font-bold text-emerald-950 shadow-[0_10px_30px_-10px_rgba(242,193,78,0.55)] transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-60"
                          >
                            {saving ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                                Menyimpan…
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4" aria-hidden />
                                Simpan &amp; Tampilkan Penawaran
                              </>
                            )}
                          </button>
                        )}
                        {!saved && !hasSelection && (
                          <p className="text-center text-xs font-medium text-gold/80">
                            Pilih paket atau dokumen dulu di langkah 2.
                          </p>
                        )}

                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="glass inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-emerald-50/75 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
                        >
                          <ArrowLeft className="h-4 w-4" aria-hidden />
                          Ubah Paket / Dokumen
                        </button>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
