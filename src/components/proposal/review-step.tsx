"use client";

import {
  CalendarClock,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Printer,
  Save,
  User,
} from "lucide-react";
import { fmtRp } from "@/lib/proposal-calc";
import { fmtDateId, type CalcSummary, type ClientFormState } from "./types";

/* ────────────────────────────────────────────────────────────
   Langkah 3 — Review & Kirim
   Kiri: ringkasan line items (per tier, add-on, subtotal, diskon, TOTAL).
   Kanan: opsi kirim (simpan → preview, WhatsApp setelah tersimpan).
   ──────────────────────────────────────────────────────────── */

export default function ReviewStep({
  form,
  calc,
  validUntil,
  saving,
  savedCode,
  waHref,
  onSave,
}: {
  form: ClientFormState;
  calc: CalcSummary;
  validUntil: Date;
  saving: boolean;
  savedCode: string | null;
  waHref: string;
  onSave: () => void;
}) {
  const hasDiscount = calc.discount > 0;
  const hasAddons = calc.addons.length > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
      {/* ─── Ringkasan ─── */}
      <div className="glass-strong rounded-3xl p-6 md:p-7" aria-label="Ringkasan penawaran">
        <h3 className="font-display text-lg font-bold text-white">Ringkasan Penawaran</h3>
        <p className="mt-1 text-sm text-emerald-50/55">
          {calc.packageLabel} • {calc.durationLabel}
        </p>

        <ul className="mt-5 space-y-2.5 border-t border-white/5 pt-5">
          {calc.tierBreakdown.map((tb) => (
            <li key={`tier-${tb.tier}`} className="flex items-center justify-between gap-3">
              <span className="flex min-w-0 items-center gap-2 text-sm text-emerald-50/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span className="truncate">Dokumen {tb.tier}</span>
                <span className="shrink-0 text-xs text-emerald-50/40">
                  {fmtRp(calc.unitPrice)} × {tb.count}
                </span>
              </span>
              <span className="shrink-0 text-sm font-semibold text-emerald-50/90">
                {fmtRp(tb.count * calc.unitPrice)}
              </span>
            </li>
          ))}

          {hasAddons && (
            <>
              <li className="pt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300/70">
                Add-on Opsional — {fmtRp(calc.addonTotal)}
              </li>
              {calc.addons.map((a) => (
                <li key={`addon-${a.id}`} className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2 text-sm text-emerald-50/80">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span className="truncate">{a.title}</span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-emerald-50/90">
                    {fmtRp(a.price)}
                  </span>
                </li>
              ))}
            </>
          )}
        </ul>

        <div className="mt-5 space-y-2 border-t border-white/5 pt-4 text-sm">
          <div className="flex justify-between text-emerald-50/70">
            <span>Subtotal dokumen</span>
            <span className="font-semibold">{fmtRp(calc.subtotal)}</span>
          </div>
          {hasAddons && (
            <div className="flex justify-between text-emerald-50/70">
              <span>Add-on</span>
              <span className="font-semibold">{fmtRp(calc.addonTotal)}</span>
            </div>
          )}
          {hasDiscount && (
            <div className="flex justify-between text-gold">
              <span>Diskon Standarisasi ({calc.discountPct}%)</span>
              <span className="font-semibold">−{fmtRp(calc.discount)}</span>
            </div>
          )}
          <div className="flex items-baseline justify-between border-t border-white/10 pt-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-50/60">
              Total Investasi
            </span>
            <span className="font-display gradient-text-gold text-3xl font-extrabold">
              {fmtRp(calc.total)}
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4 text-xs sm:grid-cols-2">
          <p className="flex items-center gap-2 text-emerald-50/70">
            <CalendarClock className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
            Berlaku hingga {fmtDateId(validUntil.toISOString())}
          </p>
          <p className="flex items-center gap-2 text-emerald-50/70">
            <Printer className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
            Bisa dicetak / disimpan PDF setelah dibuat
          </p>
        </div>
      </div>

      {/* ─── Opsi kirim ─── */}
      <div className="space-y-4">
        <div className="glass rounded-2xl p-5" aria-label="Data klien">
          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300/80">
            <User className="h-3.5 w-3.5" aria-hidden="true" />
            Ditujukan Kepada
          </h4>
          <p className="mt-2 text-sm font-bold text-white">{form.clientName || "—"}</p>
          {form.clientCompany && (
            <p className="text-xs text-emerald-50/60">{form.clientCompany}</p>
          )}
          <p className="mt-1 text-xs text-emerald-50/50">
            {form.clientEmail || "—"} • WA {form.clientWa || "—"}
          </p>
          {form.notes.trim() && (
            <p className="mt-2 border-t border-white/5 pt-2 text-xs italic leading-relaxed text-emerald-50/50">
              Catatan: {form.notes}
            </p>
          )}
        </div>

        <div className="glass-strong rounded-2xl p-5">
          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            className="shimmer-btn flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-amber-500 text-sm font-bold text-emerald-950 shadow-lg shadow-gold/25 transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-60"
          >
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Menyimpan...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" aria-hidden="true" />
                Simpan &amp; Tampilkan Penawaran
              </>
            )}
          </button>

          <a
            href={savedCode ? waHref : undefined}
            target={savedCode ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={!savedCode}
            aria-label="Bagikan penawaran via WhatsApp"
            className={`mt-3 flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold transition ${
              savedCode
                ? "glass border-emerald-400/30 text-emerald-50 hover:border-gold/50 hover:text-gold"
                : "pointer-events-none border border-white/10 bg-white/[0.04] text-emerald-50/35"
            }`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat WhatsApp
          </a>
          {!savedCode && (
            <p className="mt-3 text-center text-xs font-medium text-gold/80">
              Simpan dulu — tombol WhatsApp aktif setelah penawaran tersimpan
            </p>
          )}
          <p className="mt-3 text-center text-[11px] leading-relaxed text-emerald-50/40">
            Penawaran tersimpan berstatus Draft — tim admin dapat mengubah status
            (Terkirim / Negosiasi / Menang / Hilang).
          </p>
        </div>
      </div>
    </div>
  );
}
