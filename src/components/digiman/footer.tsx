"use client";

import Image from "next/image";
import {
  Clock,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import type { SiteSettings } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";
import { BRAND } from "@/lib/brand";

const POPULER_LINKS = [
  "Pendirian PT",
  "NIB & OSS",
  "Pendaftaran Merek",
  "Sertifikasi Halal",
  "Website & AI",
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">
      {children}
    </h3>
  );
}

export default function Footer({ settings }: { settings: SiteSettings }) {
  const { t } = useI18n();
  // Tahun WIB (dipin zona waktu agar SSR & client identik — anti hydration mismatch).
  const year = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
    }).format(new Date()),
  );

  // Label kolom perusahaan diterjemahkan via i18n (href tetap sama).
  const companyLinks = [
    { label: t("footer.tentang"), href: "#mengapa-kami" },
    { label: t("footer.prosesKerja"), href: "#proses" },
    { label: t("footer.paketHarga"), href: "#paket" },
    { label: t("footer.faq"), href: "#faq" },
    { label: t("footer.kontak"), href: "#kontak" },
  ];

  return (
    <footer className="mt-auto relative border-t border-emerald-400/10 bg-[#040b09]/80">
      <div className="section-padding mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Col 1 — brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-digiman.png"
                alt="Logo DIGIMAN.ID"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="font-display mt-4 text-lg font-bold text-white">
              DIGIMAN<span className="text-gold">.ID</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
              {t("footer.tagline")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[10px] font-semibold tracking-wide text-emerald-50/60">
                SK {settings.skNumber}
              </span>
              <span className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[10px] font-semibold tracking-wide text-emerald-50/60">
                NIB {settings.nibNumber}
              </span>
            </div>
          </div>

          {/* Col 2 — layanan populer */}
          <nav aria-label={t("footer.layananPopuler")}>
            <ColHeading>{t("footer.layananPopuler")}</ColHeading>
            <ul className="space-y-2.5">
              {POPULER_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#layanan"
                    className="text-sm text-emerald-50/60 transition-colors hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — perusahaan */}
          <nav aria-label={t("footer.perusahaan")}>
            <ColHeading>{t("footer.perusahaan")}</ColHeading>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-emerald-50/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — kontak */}
          <div>
            <ColHeading>{t("footer.kontak")}</ColHeading>
            <ul className="space-y-3 text-sm text-emerald-50/60">
              <li className="flex items-start gap-2.5">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright"
                  aria-hidden="true"
                />
                <a
                  href={`https://wa.me/${settings.waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {settings.waDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${settings.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright"
                  aria-hidden="true"
                />
                <span>{settings.addressShort}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright"
                  aria-hidden="true"
                />
                <span>{settings.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ExternalLink
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href="https://topkonsultan.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold transition-colors hover:text-gold-light"
                >
                  {t("footer.ekosistem")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Ekosistem, brand & jejak sosial — branding + entity-building SEO ── */}
        <section
          aria-label={t("footer.brandJudul")}
          className="mt-12 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Kolom ekosistem & kredit nama */}
            <div className="min-w-0 flex-1">
              <ColHeading>{t("footer.brandJudul")}</ColHeading>
              <p className="text-sm leading-relaxed text-emerald-50/60">
                {t("footer.dukunganSistem")}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {BRAND.ecosystem.map((item) => (
                  <li key={item.name}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-50/80 transition hover:border-gold/40 hover:text-gold"
                      >
                        {item.name}
                        {item.note && (
                          <span className="font-normal text-emerald-50/45">· {item.note}</span>
                        )}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-50/80">
                        {item.name}
                        {item.note && (
                          <span className="font-normal text-emerald-50/45">· {item.note}</span>
                        )}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-emerald-50/50">
                {t("footer.kreditBy")} · PT Top Konsultan Internasional
                (topkonsultan.web.id) · digiman.id — PT Digital Bisnis Manajemen
              </p>
            </div>

            {/* Kolom sosial media — anchor text nama brand (SEO) */}
            <nav aria-label={t("footer.sosialAria")} className="shrink-0 lg:w-72">
              <ColHeading>{t("footer.ikutiKami")}</ColHeading>
              <ul className="flex flex-wrap gap-2">
                {BRAND.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`${s.label} — ${s.handle}`}
                      className="inline-flex items-baseline gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-50/80 transition hover:border-gold/40 hover:text-gold"
                    >
                      {s.label}
                      <span className="font-normal text-emerald-50/45">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Divider + bottom bar */}
        <div className="mt-12 border-t border-emerald-400/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-50/40">
            <p>
              {t("footer.hakCipta", { year })}
            </p>
            <a
              href="/download/digiman-id-source-lengkap.zip"
              download="digiman-id-source-lengkap.zip"
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 font-semibold text-gold transition hover:bg-gold/20"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              {t("footer.unduhKode")}
            </a>
            <p>
              {t("footer.founder", { date: settings.established })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
