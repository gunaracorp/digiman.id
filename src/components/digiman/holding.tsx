"use client";

/**
 * DIGIMAN.ID — Holding: arsitektur ekosistem grup.
 *
 * Memvisualkan struktur holding yang NYATA dan dapat diverifikasi
 * (Genesis §9 + §38 — never fabricate trust):
 *
 *   PT Digital Bisnis Manajemen (digiman.id) — Digital Holding
 *   ├── PT Top Konsultan Internasional  — badan hukum legal & konsultan
 *   ├── Gunara OS                       — intellectual capital (165 dokumen)
 *   ├── Santri Angon                    — komunitas pendukung
 *   └── Platform digiman.id             — teknologi (Portal Klien, Admin, DigiAI)
 *
 * Semua data identitas dari src/lib/brand.ts (BRAND + LEGACY) — sumber tunggal.
 */

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpenCheck,
  Cpu,
  HeartHandshake,
  Network,
  Scale,
  type LucideIcon,
} from "lucide-react";

import { BRAND, LEGACY } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Pillar = {
  roleKey: string;
  nameKey: string;
  descKey: string;
  icon: LucideIcon;
  href: string | null;
  external: boolean;
  gold: boolean;
};

/** Empat pilar — urutan & konten dari struktur grup yang sebenarnya. */
const PILLARS: Pillar[] = [
  {
    roleKey: "holding.p1Role",
    nameKey: "holding.p1Name",
    descKey: "holding.p1Desc",
    icon: Scale,
    href: "https://topkonsultan.web.id",
    external: true,
    gold: false,
  },
  {
    roleKey: "holding.p2Role",
    nameKey: "holding.p2Name",
    descKey: "holding.p2Desc",
    icon: BookOpenCheck,
    href: "/gunara-os",
    external: false,
    gold: false,
  },
  {
    roleKey: "holding.p3Role",
    nameKey: "holding.p3Name",
    descKey: "holding.p3Desc",
    icon: HeartHandshake,
    href: null,
    external: false,
    gold: false,
  },
  {
    roleKey: "holding.p4Role",
    nameKey: "holding.p4Name",
    descKey: "holding.p4Desc",
    icon: Cpu,
    href: null,
    external: false,
    gold: true,
  },
];

export default function Holding() {
  const { t } = useI18n();

  return (
    <section
      id="holding"
      aria-label={t("holding.ariaLabel")}
      className="section-padding relative overflow-hidden py-24 md:py-32"
    >
      {/* Aura latar lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-gold-light">
            <Network className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {t("holding.kicker")}
          </span>
          <h2 className="font-display mt-6 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("holding.title1")}{" "}
            <span className="gradient-text-gold">{t("holding.title2")}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-emerald-50/70 sm:text-lg">
            {t("holding.desc")}
          </p>
        </motion.div>

        {/* Kartu akar holding */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
          className="glass-strong mx-auto mt-14 max-w-3xl rounded-2xl border border-gold/25 p-6 text-center sm:p-8"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/30 to-emerald-400/10 ring-1 ring-gold/40">
            <Network className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
            {t("holding.rootRole")}
          </p>
          <h3 className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">
            DIGIMAN.ID{" "}
            <span className="text-emerald-50/50">— {BRAND.legalName}</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-emerald-50/65">
            {t("holding.rootDesc")}
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            <li className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-50/70">
              SK {LEGACY.skNumber}
            </li>
            <li className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-50/70">
              {t("holding.chipFounded", { year: LEGACY.establishedYear })}
            </li>
            <li className="rounded-md border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gold">
              {t("holding.chipHolding")}
            </li>
          </ul>
        </motion.div>

        {/* Konektor akar → pilar */}
        <div
          aria-hidden="true"
          className="mx-auto mt-0 mb-0 h-10 w-px bg-gradient-to-b from-gold/50 to-emerald-400/30"
        />

        {/* Empat pilar */}
        <ul className="mx-auto mt-0 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            const inner = (
              <>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110 ${
                    p.gold
                      ? "bg-gradient-to-br from-gold/25 to-emerald-400/10 ring-gold/40"
                      : "bg-emerald-400/10 ring-emerald-400/25"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${p.gold ? "text-gold" : "text-emerald-bright"}`}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-50/45">
                  {t(p.roleKey)}
                </p>
                <h3 className="font-display mt-1 text-base leading-snug font-bold text-white">
                  {t(p.nameKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">
                  {t(p.descKey)}
                </p>
                {p.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                    {p.external ? t("holding.kunjungi") : t("holding.jelajahi")}
                    <span aria-hidden="true">↗</span>
                  </span>
                )}
              </>
            );

            return (
              <motion.li
                key={p.roleKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.07 * i, ease: EASE }}
                className={`glass card-glow group relative flex h-full flex-col rounded-2xl p-6 transition-colors ${
                  p.gold
                    ? "border border-gold/30 hover:border-gold/60"
                    : "border border-emerald-400/15 hover:border-gold/40"
                }`}
              >
                {p.href ? (
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="block h-full"
                    aria-label={t(p.nameKey)}
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Strip tata kelola & kepemimpinan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="glass mx-auto mt-10 flex max-w-4xl flex-col items-center gap-3 rounded-2xl p-5 text-center sm:flex-row sm:justify-center sm:gap-6 sm:p-6"
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <BadgeCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            {BRAND.people.founder.name} — {t("holding.leaderRole")}
          </p>
          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-emerald-400/20 sm:block"
          />
          <p className="text-xs text-emerald-50/55">
            {t("holding.leaderBio", { years: LEGACY.yearsLabel })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
