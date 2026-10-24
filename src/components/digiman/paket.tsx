"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  type LucideIcon,
  Calculator,
  Check,
  CheckCircle2,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { CALC_ADDONS, CALC_ENTITIES, PAKET_TIERS, fmtRp } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Kunci timeline stabil (bukan label) agar pilihan tidak nyasar saat ganti bahasa. */
const TIMELINE_KEYS = ["segera", "1_3", "rencana"] as const;
type TimelineKey = (typeof TIMELINE_KEYS)[number];

export default function Paket({ waNumber }: { waNumber: string }) {
  const { t } = useI18n();
  const [entity, setEntity] = useState<string | null>(null);
  const [addons, setAddons] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<TimelineKey | null>(null);

  const waBase = `https://wa.me/${waNumber}`;

  const timelineLabels: Record<TimelineKey, string> = {
    segera: t("calc.timelineSegera"),
    "1_3": t("calc.timeline1_3"),
    rencana: t("calc.timelineRencana"),
  };
  const timelineOptions = TIMELINE_KEYS.map((key) => ({
    key,
    label: timelineLabels[key],
  }));

  // ── Kalkulator ──
  const ent = CALC_ENTITIES.find((e) => e.id === entity) ?? null;
  const chosenAddons = CALC_ADDONS.filter((a) => addons.includes(a.id));

  let minCost = 0;
  let maxCost = 0;
  let minDays = 0;
  let maxDays = 0;
  if (ent) {
    minCost += ent.cost[0];
    maxCost += ent.cost[1];
    minDays += ent.days[0];
    maxDays += ent.days[1];
  }
  for (const a of chosenAddons) {
    minCost += a.cost[0];
    maxCost += a.cost[1];
    minDays += a.days[0];
    maxDays += a.days[1];
  }

  const ready = ent !== null;

  const toggleAddon = (id: string) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const calcMessage = [
    t("calc.waIntro"),
    t("calc.waEntity", { entity: ent ? ent.label : "-" }),
    t("calc.waAddons", {
      addons:
        chosenAddons.length > 0
          ? chosenAddons.map((a) => a.label).join(", ")
          : "-",
    }),
    t("calc.waTimeline", {
      timeline: timeline ? timelineLabels[timeline] : "-",
    }),
    t("calc.waBiaya", { cost: `${fmtRp(minCost)} – ${fmtRp(maxCost)}` }),
    t("calc.waWaktu", {
      duration: `${minDays}–${maxDays} ${t("calc.hariKerja")}`,
    }),
    t("calc.waClosing"),
  ].join("\n");

  const calcWaLink = `${waBase}?text=${encodeURIComponent(calcMessage)}`;

  return (
    <section
      id="paket"
      aria-label={t("paket.ariaLabel")}
      className="section-padding relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* ═══════════ PART 1 — Paket Berjenjang ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-gold inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t("paket.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("paket.judulA")}{" "}
            <span className="gradient-text-gold">{t("paket.judulB")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/60">
            {t("paket.sub")}
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PAKET_TIERS.map((tier, idx) => {
            const isFeatured = idx === 1;
            const href = `${waBase}?text=${encodeURIComponent(
              t("paket.waPesan", { name: tier.name, entity: tier.entity }),
            )}`;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.1 }}
                className={
                  isFeatured
                    ? "card-glow relative flex h-full flex-col rounded-[1.75rem] border border-gold/50 bg-gradient-to-b from-[#12241d] to-[#0a1613] shadow-[0_0_60px_-20px_rgba(242,193,78,0.45)] xl:-my-3 xl:py-10"
                    : "glass card-glow relative flex h-full flex-col rounded-[1.75rem] p-7"
                }
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-950 shadow-[0_6px_20px_-6px_rgba(242,193,78,0.8)]">
                    {t("paket.terpopuler")}
                  </span>
                )}

                <h3 className={`font-display text-lg font-bold ${isFeatured ? "text-gold-light" : "text-white"}`}>
                  {tier.name}
                </h3>
                <p
                  className={`mt-1 text-xs uppercase tracking-wide ${
                    isFeatured ? "text-gold" : "text-emerald-300"
                  }`}
                >
                  {tier.entity}
                </p>

                <div
                  className={`font-display mt-4 text-3xl font-extrabold ${
                    isFeatured ? "gradient-text-gold" : "text-white"
                  }`}
                >
                  {tier.price}
                </div>
                <p className="mt-1 text-xs text-emerald-300/80">{tier.priceNote}</p>
                <p className="mt-3 text-sm leading-relaxed text-emerald-50/60">{tier.desc}</p>

                <ul className="mt-4 flex-1 space-y-2">
                  {tier.features.map((f) => (
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
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("paket.ctaAria", { cta: tier.cta })}
                  className={`mt-6 block rounded-xl px-5 py-3 text-center text-sm font-bold transition ${
                    isFeatured
                      ? "shimmer-btn bg-gradient-to-r from-yellow-300 via-gold to-amber-400 text-emerald-950 shadow-[0_10px_30px_-10px_rgba(242,193,78,0.6)] hover:brightness-110"
                      : "glass border-emerald-400/30 text-emerald-50 hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════ PART 2 — Kalkulator Legalitas ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            <Calculator className="h-3.5 w-3.5" aria-hidden />
            {t("calc.kicker")}
          </span>
          <h3 className="font-display mt-5 text-2xl font-bold leading-tight text-white md:text-4xl">
            {t("calc.judulPre")}{" "}
            <span className="gradient-text-gold">{t("calc.judul")}</span>
            {t("calc.judulPost") ? ` ${t("calc.judulPost")}` : null}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/60">
            {t("calc.sub")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Kolom kiri — pilihan */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="space-y-10"
          >
            {/* (a) Bentuk badan usaha */}
            <div aria-label={t("calc.pilihBadan")} role="radiogroup">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                {t("calc.pilihBadan")}
              </h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {CALC_ENTITIES.map((o) => {
                  const selected = entity === o.id;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setEntity(selected ? null : o.id)}
                      className={`relative rounded-2xl p-4 text-left transition-all duration-300 ${
                        selected
                          ? "border border-gold/60 bg-gold/5 shadow-[0_0_30px_-12px_rgba(242,193,78,0.55)]"
                          : "glass border-white/5 hover:border-emerald-400/40"
                      }`}
                    >
                      {selected && (
                        <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-gold" aria-hidden />
                      )}
                      <span className="block pr-6 text-sm font-semibold text-white">{o.label}</span>
                      <span className="mt-1 block text-xs text-emerald-300/80">
                        {fmtRp(o.cost[0])} – {fmtRp(o.cost[1])}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* (b) Tambahan opsional */}
            <div aria-label={t("calc.pilihAddon")}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                {t("calc.pilihAddon")}
              </h4>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {CALC_ADDONS.map((a) => {
                  const selected = addons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleAddon(a.id)}
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
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="flex-1 font-medium">{a.label}</span>
                      <span className="text-xs text-emerald-300/80">
                        {fmtRp(a.cost[0])}+
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* (c) Rencana waktu */}
            <div aria-label={t("calc.pilihTimeline")}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                {t("calc.pilihTimeline")}
              </h4>
              <div className="mt-4 flex flex-wrap gap-2.5" role="radiogroup">
                {timelineOptions.map((tl) => {
                  const selected = timeline === tl.key;
                  return (
                    <button
                      key={tl.key}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setTimeline(selected ? null : tl.key)}
                      className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                        selected
                          ? "border border-gold/60 bg-gold/10 font-semibold text-gold shadow-[0_0_24px_-10px_rgba(242,193,78,0.6)]"
                          : "glass border-white/5 text-emerald-50/70 hover:border-gold/40 hover:text-white"
                      }`}
                    >
                      {tl.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Kolom kanan — hasil estimasi (sticky) */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            aria-label={t("calc.hasilAria")}
            className="glass-strong rounded-3xl p-7 lg:sticky lg:top-28"
          >
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              {t("calc.estimasiAnda")}
            </h4>

            <div className="font-display mt-3 text-3xl font-extrabold leading-tight">
              {ready ? (
                <span className="gradient-text-gold">
                  {fmtRp(minCost)} – {fmtRp(maxCost)}
                </span>
              ) : (
                <span className="text-emerald-50/25">Rp —</span>
              )}
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-emerald-50/70">
              <Clock className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
              {ready
                ? `${minDays}–${maxDays} ${t("calc.hariKerja")}`
                : t("calc.pilihDurasi")}
            </div>

            {/* Rincian */}
            <ul aria-label={t("calc.rincian")} className="mt-5 space-y-2 border-t border-white/5 pt-5">
              {(ent ? [ent, ...chosenAddons] : []).map((o) => (
                <li key={o.id} className="flex items-center justify-between gap-3 text-xs">
                  <span className="flex min-w-0 items-center gap-1.5 text-emerald-50/75">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                    <span className="truncate">{o.label}</span>
                  </span>
                  <span className="shrink-0 font-semibold text-emerald-50/90">
                    {fmtRp(o.cost[0])}–{fmtRp(o.cost[1])}
                  </span>
                </li>
              ))}
              {!ready && (
                <li className="text-xs text-emerald-50/40">{t("calc.belumAda")}</li>
              )}
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-emerald-50/45">
              {t("calc.disclaimer")}
            </p>

            <a
              href={ready ? calcWaLink : undefined}
              target={ready ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-disabled={!ready}
              aria-label={t("calc.kirimWa")}
              className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                ready
                  ? "shimmer-btn bg-gradient-to-r from-yellow-300 via-gold to-amber-400 text-emerald-950 shadow-[0_10px_30px_-10px_rgba(242,193,78,0.55)] hover:brightness-110"
                  : "pointer-events-none bg-emerald-400/10 text-emerald-50/40 opacity-50"
              }`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {t("calc.kirimWa")}
            </a>
            {!ready && (
              <p className="mt-3 text-center text-xs font-medium text-gold/80">
                {t("calc.pilihDulu")}
              </p>
            )}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
