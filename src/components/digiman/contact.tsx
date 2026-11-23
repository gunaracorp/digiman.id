"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  OfficeItem,
  ServiceItem,
  SiteSettings,
} from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

/* ────────────────────────── helpers ────────────────────────── */

type FormData = {
  nama: string;
  email: string;
  wa: string;
  layanan: string;
  pesan: string;
  company: string; // honeypot — harus tetap kosong
};

const EMPTY_FORM: FormData = {
  nama: "",
  email: "",
  wa: "",
  layanan: "",
  pesan: "",
  company: "",
};
type Errors = Partial<Record<keyof FormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Signature t() dari useI18n — dipakai validate() agar pesan error ikut locale. */
type Translate = (key: string, vars?: Record<string, string | number>) => string;

function validate(form: FormData, t: Translate): Errors {
  const errs: Errors = {};
  if (form.nama.trim().length < 3) errs.nama = t("contact.errNama");
  if (!EMAIL_RE.test(form.email.trim())) errs.email = t("contact.errEmail");
  const digits = form.wa.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) errs.wa = t("contact.errWa");
  if (form.pesan.trim().length < 10) errs.pesan = t("contact.errPesan");
  return errs;
}

/* ────────────────────────── component ────────────────────────── */

export default function Contact({
  offices,
  settings,
  services,
  showOfficeList = true,
}: {
  offices: OfficeItem[];
  settings: SiteSettings;
  services: ServiceItem[];
  /** Sembunyikan daftar kantor bila section Offices sudah dirender terpisah. */
  showOfficeList?: boolean;
}) {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const waLink = `https://wa.me/${settings.waNumber}?text=${encodeURIComponent(
    t("contact.waPesan"),
  )}`;

  const set = (key: keyof FormData) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    // Honeypot terisi → bot. Sukses diam-diam tanpa POST.
    if (form.company.trim() !== "") {
      setForm(EMPTY_FORM);
      toast({
        title: t("contact.suksesJudul"),
        description: t("contact.suksesDescBot"),
      });
      return;
    }

    const errs = validate(form, t);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: { ok?: boolean } | null = await res
        .json()
        .catch(() => null);
      if (!res.ok || data?.ok === false) throw new Error("gagal");

      setForm(EMPTY_FORM);
      setErrors({});
      toast({
        title: t("contact.suksesJudul"),
        description: t("contact.suksesDesc"),
      });
    } catch {
      toast({
        title: t("contact.errJudul"),
        description: t("contact.errDesc"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactRows = [
    {
      icon: MessageCircle,
      label: t("contact.labelWa"),
      href: waLink,
      value: settings.waDisplay,
      online: true,
    },
    {
      icon: Mail,
      label: t("contact.labelEmail"),
      href: `mailto:${settings.email}`,
      value: settings.email,
      online: false,
    },
    {
      icon: Clock,
      label: t("contact.labelJam"),
      value: settings.hours,
      online: false,
    },
    {
      icon: MapPin,
      label: t("contact.labelAlamat"),
      value: settings.addressShort,
      online: false,
    },
  ];

  const legalRows = [
    { label: t("contact.legalSk"), value: settings.skNumber },
    { label: t("contact.legalNib"), value: settings.nibNumber },
    { label: t("contact.legalNpwp"), value: settings.npwpNumber },
  ];

  const errCls = (has: boolean) =>
    has
      ? "border-red-400/60 focus-visible:border-red-400 focus-visible:ring-red-400/20"
      : "border-emerald-400/20 focus-visible:border-gold/50 focus-visible:ring-gold/20";

  return (
    <section id="kontak" className="section-padding relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {t("contact.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("contact.judulA")}{" "}
            <span className="gradient-text-gold">{t("contact.judulB")}</span>{" "}
            {t("contact.judulPost")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-emerald-50/60 sm:text-base">
            {t("contact.sub")}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* ─────────── LEFT: info ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* (a) contact info */}
            <ul className="space-y-4">
              {contactRows.map((row) => {
                const Icon = row.icon;
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-bright ring-1 ring-emerald-400/25">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-emerald-50/50">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block break-words font-medium text-white">
                        {row.value}
                      </span>
                      {row.online && (
                        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          </span>
                          {t("contact.online")}
                        </span>
                      )}
                    </span>
                  </>
                );
                return (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 rounded-xl p-1 transition hover:bg-white/[0.03]"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-1">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* (b) legal identity */}
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="font-display text-base font-bold text-white">
                  {t("contact.legalJudul")}
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {legalRows.map((row) => (
                  <li key={row.label} className="flex items-start gap-2.5">
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-widest text-emerald-50/45">
                        {row.label}
                      </span>
                      <span className="block break-all text-sm font-medium text-emerald-50/90">
                        {row.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-emerald-400/10 pt-3 text-xs leading-relaxed text-emerald-50/50">
                {t("contact.berdiri", {
                  date: settings.established,
                  company: settings.companyName,
                })}
              </p>
            </div>

            {/* (c) offices */}
            {showOfficeList && offices.length > 0 && (
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-emerald-50/70">
                  {t("contact.kantor")}
                </h3>
                <ul className="mt-4 space-y-4">
                  {offices.map((office, i) => {
                    const isHq = (office.type || "").toUpperCase() === "HEAD";
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/25">
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-white">
                              {office.label}
                            </p>
                            {isHq ? (
                              <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/40">
                                HQ
                              </span>
                            ) : (
                              <span className="rounded-full border border-emerald-400/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-50/60">
                                {t("contact.cabang")}
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-sm leading-relaxed text-emerald-50/60">
                            {office.address}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </motion.div>

          {/* ─────────── RIGHT: form ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-3xl p-7"
              aria-label={t("contact.formAria")}
            >
              <h3 className="font-display text-xl font-bold text-white">
                {t("contact.formJudul")}
              </h3>
              <p className="mt-1 text-sm text-emerald-50/55">
                {t("contact.formSub")}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* Nama */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="kontak-nama"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                  >
                    {t("contact.nama")} <span className="text-gold">*</span>
                  </label>
                  <Input
                    id="kontak-nama"
                    name="nama"
                    value={form.nama}
                    onChange={(e) => set("nama")(e.target.value)}
                    placeholder={t("contact.phNama")}
                    autoComplete="name"
                    aria-invalid={!!errors.nama}
                    aria-describedby={errors.nama ? "kontak-nama-error" : undefined}
                    className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.nama)}`}
                  />
                  {errors.nama && (
                    <p id="kontak-nama-error" className="mt-1.5 text-xs text-red-400">
                      {errors.nama}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="kontak-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                  >
                    {t("contact.email")} <span className="text-gold">*</span>
                  </label>
                  <Input
                    id="kontak-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder={t("contact.phEmail")}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "kontak-email-error" : undefined}
                    className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.email)}`}
                  />
                  {errors.email && (
                    <p id="kontak-email-error" className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="kontak-wa"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                  >
                    {t("contact.wa")} <span className="text-gold">*</span>
                  </label>
                  <Input
                    id="kontak-wa"
                    name="wa"
                    type="tel"
                    inputMode="tel"
                    value={form.wa}
                    onChange={(e) => set("wa")(e.target.value)}
                    placeholder={t("contact.phWa")}
                    autoComplete="tel"
                    aria-invalid={!!errors.wa}
                    aria-describedby={errors.wa ? "kontak-wa-error" : undefined}
                    className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.wa)}`}
                  />
                  {errors.wa && (
                    <p id="kontak-wa-error" className="mt-1.5 text-xs text-red-400">
                      {errors.wa}
                    </p>
                  )}
                </div>

                {/* Layanan */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="kontak-layanan"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                  >
                    {t("contact.layanan")}
                  </label>
                  <Select
                    value={form.layanan || undefined}
                    onValueChange={(v) => set("layanan")(v)}
                  >
                    <SelectTrigger
                      id="kontak-layanan"
                      aria-label={t("contact.layananAria")}
                      className={`h-11 w-full rounded-xl bg-white/[0.03] text-left text-white ${errCls(false)}`}
                    >
                      <SelectValue placeholder={t("contact.phLayanan")} />
                    </SelectTrigger>
                    <SelectContent className="glass-strong max-h-72 rounded-xl border-emerald-400/20 text-emerald-50">
                      <SelectItem value={t("contact.layananUmum")}>
                        {t("contact.layananUmum")}
                      </SelectItem>
                      {services.map((s) => (
                        <SelectItem key={s.slug ?? s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pesan */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="kontak-pesan"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
                  >
                    {t("contact.pesan")} <span className="text-gold">*</span>
                  </label>
                  <Textarea
                    id="kontak-pesan"
                    name="pesan"
                    rows={5}
                    value={form.pesan}
                    onChange={(e) => set("pesan")(e.target.value)}
                    placeholder={t("contact.phPesan")}
                    aria-invalid={!!errors.pesan}
                    aria-describedby={errors.pesan ? "kontak-pesan-error" : undefined}
                    className={`min-h-[120px] rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.pesan)}`}
                  />
                  {errors.pesan && (
                    <p id="kontak-pesan-error" className="mt-1.5 text-xs text-red-400">
                      {errors.pesan}
                    </p>
                  )}
                </div>
              </div>

              {/* Honeypot anti-bot — disembunyikan total */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="kontak-company">Company</label>
                <input
                  id="kontak-company"
                  name="company"
                  value={form.company}
                  onChange={(e) => set("company")(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="shimmer-btn mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-amber-500 text-sm font-bold text-emerald-950 shadow-lg shadow-gold/25 transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    {t("contact.mengirim")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {t("contact.kirim")}
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-emerald-50/40">
                {t("contact.privasi")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
