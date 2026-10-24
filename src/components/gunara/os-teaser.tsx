"use client";

/**
 * GUNARA OS TEASER — seksi pengantar Gunara OS untuk landing page.
 * Dirender di page.tsx antara seksi Paket dan WhyUs (props dari server).
 * CTA "Jelajahi" membuka full-page explorer (#route-os); chip paket menyimpan
 * preset ke sessionStorage lalu menuju #/proposal.
 */
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileStack,
  FolderOpen,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { fmtJt, savePackagePreset, type GunaraPackageData } from "@/lib/gunara";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
  gold?: boolean;
};

export default function OsTeaser({
  packages,
  domainCount,
  docCount,
}: {
  packages: GunaraPackageData[];
  domainCount: number;
  docCount: number;
}) {
  const stats: StatItem[] = [
    { icon: FileStack, value: String(docCount), label: "Dokumen Standar", gold: true },
    { icon: FolderOpen, value: String(domainCount), label: "Domain Kepemimpinan" },
    { icon: Layers, value: "4", label: "Tier Prioritas" },
  ];

  return (
    <section
      id="gunara-os"
      aria-labelledby="gunara-os-title"
      className="section-padding relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Standarisasi Baru
          </span>
          <h2
            id="gunara-os-title"
            className="font-display mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Kenalkan <span className="gradient-text-gold">Gunara OS</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-emerald-50/70 sm:text-lg">
            Seluruh pengetahuan manajemen kami kodifikasi menjadi {docCount} dokumen operasional
            dalam {domainCount} domain kepemimpinan — dari visi hingga warisan seabad. Bukan teori
            yang menganggur di lemari, melainkan sistem operasi lengkap yang membuat perusahaan
            Anda berjalan dengan standar korporasi.
          </p>
        </motion.div>

        {/* 3 stat glass */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="glass card-glow rounded-2xl p-6 text-center"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-emerald-950 shadow-lg">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                </span>
                <div
                  className={`font-display mt-3.5 text-3xl font-extrabold leading-none ${
                    s.gold ? "gradient-text-gold" : "gradient-text-emerald"
                  }`}
                >
                  {s.value}
                </div>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-50/50">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Strip 5 chip paket — klik = simpan preset + menuju Proposal Studio */}
        {packages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
            aria-label="Paket standar Gunara OS"
          >
            {packages.map((p) => (
              <a
                key={p.code}
                href="#/proposal"
                onClick={() => savePackagePreset(p.code)}
                title={`${p.name} — ${p.docCount} dokumen`}
                aria-label={`Pilih paket ${p.name} (${fmtJt(p.price)}) dan buat penawaran`}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-300 hover:border-gold/50"
              >
                <span className="font-display text-xs font-bold tracking-[0.14em] text-gold">
                  {p.code}
                </span>
                <span className="h-1 w-1 rounded-full bg-emerald-400/50" aria-hidden />
                <span className="text-emerald-50/75">{fmtJt(p.price)}</span>
              </a>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="/gunara-os"
            className="shimmer-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-8 py-4 text-sm font-bold text-emerald-950 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Jelajahi {docCount} Dokumen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#/proposal"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-emerald-50 transition-colors duration-300 hover:border-gold/50 hover:text-gold-light sm:w-auto"
          >
            Minta Penawaran
          </a>
        </motion.div>
      </div>
    </section>
  );
}
