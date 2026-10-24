"use client";

import { fmtRp } from "@/lib/proposal-calc";
import { fmtDateId, type PreviewModel } from "./types";

/* ────────────────────────────────────────────────────────────
   Panel dokumen penawaran (preview + print).
   Warna gading #faf7ef agar terlihat seperti dokumen resmi;
   kelas .proposal-print dipakai oleh @media print di proposal-studio.
   ──────────────────────────────────────────────────────────── */

export default function ProposalDocument({ model }: { model: PreviewModel }) {
  const hasDiscount = model.discount > 0;
  const hasAddons = model.addons.length > 0;

  return (
    <article
      className="proposal-print relative mx-auto w-full max-w-3xl rounded-xl bg-[#faf7ef] p-7 text-slate-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] md:p-12"
      aria-label={`Dokumen penawaran ${model.code}`}
    >
      {/* garis aksen atas ala kop surat */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 rounded-t-xl bg-gradient-to-r from-emerald-800 via-emerald-600 to-amber-500" />

      {/* ─── KOP ─── */}
      <header className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-emerald-900/60 pb-5">
        <div>
          <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-emerald-950">
            TOP Manajemen
          </p>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-800/70">
            powered by digiman.id
          </p>
        </div>
        <div className="text-right">
          <p className="inline-block rounded border border-emerald-900/40 px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-emerald-950">
            {model.code}
          </p>
          <p className="mt-1.5 text-xs text-emerald-900/70">
            Tanggal: {fmtDateId(model.createdAt)}
          </p>
        </div>
      </header>

      {/* ─── Identitas klien ─── */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="Identitas klien">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800/70">
            Kepada Yth.
          </p>
          <p className="mt-1 text-base font-bold text-slate-900">{model.clientName}</p>
          {model.clientCompany && (
            <p className="text-sm text-slate-700">{model.clientCompany}</p>
          )}
          <p className="mt-1 text-xs text-slate-600">
            {model.clientEmail} • WA {model.clientWa}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800/70">
            Masa Berlaku Penawaran
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {fmtDateId(model.validUntil)}
          </p>
          <p className="text-xs text-slate-600">30 hari sejak tanggal dibuat</p>
        </div>
      </section>

      {/* ─── Judul ─── */}
      <div className="mt-8 text-center">
        <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-emerald-950 md:text-xl">
          Penawaran Arsitektur Dokumen — Gunara OS
        </h2>
        <p className="mt-1 text-sm font-medium text-emerald-800">{model.packageLabel}</p>
        <div aria-hidden="true" className="mx-auto mt-4 h-px w-24 bg-emerald-900/30" />
      </div>

      {/* ─── Tabel line items ─── */}
      <table className="mt-6 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-emerald-900/10">
            <th className="border border-emerald-900/20 px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider text-emerald-950">
              Uraian
            </th>
            <th className="border border-emerald-900/20 px-3 py-2 text-center text-[11px] font-bold uppercase tracking-wider text-emerald-950">
              Qty
            </th>
            <th className="border border-emerald-900/20 px-3 py-2 text-right text-[11px] font-bold uppercase tracking-wider text-emerald-950">
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody>
          {model.tierBreakdown.map((tb) => (
            <tr key={`tier-${tb.tier}`}>
              <td className="border-b border-emerald-900/10 px-3 py-2.5">
                <span className="font-medium text-slate-900">Dokumen {tb.tier}</span>
                <span className="block text-xs text-slate-600">
                  Arsitektur dokumen Gunara OS • {fmtRp(model.unitPrice)}/dokumen
                </span>
              </td>
              <td className="border-b border-emerald-900/10 px-3 py-2.5 text-center text-slate-800">
                {tb.count}
              </td>
              <td className="border-b border-emerald-900/10 px-3 py-2.5 text-right font-semibold text-slate-900">
                {fmtRp(tb.count * model.unitPrice)}
              </td>
            </tr>
          ))}
          {model.addons.map((a) => (
            <tr key={`addon-${a.id}`}>
              <td className="border-b border-emerald-900/10 px-3 py-2.5">
                <span className="font-medium text-slate-900">{a.title}</span>
                <span className="block text-xs uppercase tracking-wider text-emerald-800/70">
                  Add-on opsional
                </span>
              </td>
              <td className="border-b border-emerald-900/10 px-3 py-2.5 text-center text-slate-800">
                1
              </td>
              <td className="border-b border-emerald-900/10 px-3 py-2.5 text-right font-semibold text-slate-900">
                {fmtRp(a.price)}
              </td>
            </tr>
          ))}
          {hasDiscount && (
            <tr>
              <td className="border-b border-emerald-900/10 px-3 py-2.5" colSpan={2}>
                <span className="font-semibold text-emerald-800">
                  Diskon Standarisasi ({model.discountPct}%)
                </span>
              </td>
              <td className="border-b border-emerald-900/10 px-3 py-2.5 text-right font-semibold text-emerald-800">
                −{fmtRp(model.discount)}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ─── Ringkasan biaya ─── */}
      <div className="mt-5 ml-auto w-full max-w-xs space-y-1.5 text-sm">
        <div className="flex justify-between text-slate-700">
          <span>Subtotal dokumen</span>
          <span className="font-semibold">{fmtRp(model.subtotal)}</span>
        </div>
        {hasAddons && (
          <div className="flex justify-between text-slate-700">
            <span>Add-on</span>
            <span className="font-semibold">{fmtRp(model.addonTotal)}</span>
          </div>
        )}
        {hasDiscount && (
          <div className="flex justify-between text-emerald-800">
            <span>Diskon Standarisasi</span>
            <span className="font-semibold">−{fmtRp(model.discount)}</span>
          </div>
        )}
        <div className="flex items-baseline justify-between border-t-2 border-emerald-900/60 pt-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">
            Total Investasi
          </span>
          <span className="font-display text-xl font-extrabold text-emerald-950 md:text-2xl">
            {fmtRp(model.total)}
          </span>
        </div>
      </div>

      {/* ─── Info pelaksanaan ─── */}
      <div className="mt-6 grid gap-3 rounded-lg border border-emerald-900/20 bg-emerald-900/[0.06] p-4 text-sm sm:grid-cols-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800/80">
            Jumlah Dokumen
          </p>
          <p className="mt-0.5 font-bold text-slate-900">{model.docCount} dokumen</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800/80">
            Estimasi Pengerjaan
          </p>
          <p className="mt-0.5 font-bold text-slate-900">{model.durationLabel}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800/80">
            Masa Berlaku
          </p>
          <p className="mt-0.5 font-bold text-slate-900">{fmtDateId(model.validUntil)}</p>
        </div>
      </div>

      {/* ─── Syarat singkat ─── */}
      <section className="mt-6" aria-label="Syarat dan ketentuan singkat">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800/80">
          Syarat &amp; Ketentuan Singkat
        </h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs leading-relaxed text-slate-700">
          <li>Penawaran ini berlaku 30 hari sejak tanggal dibuat.</li>
          <li>Pengerjaan dimulai setelah pembayaran di muka (DP) sebesar 50% diterima.</li>
          <li>Revisi isi dokumen termasuk hingga 2 (dua) kali per dokumen.</li>
        </ol>
      </section>

      {/* ─── Tanda tangan ─── */}
      <div className="mt-10 flex justify-end">
        <div className="w-56 text-center">
          <p className="text-sm text-slate-700">Hormat kami,</p>
          <div aria-hidden="true" className="h-16" />
          <p className="border-t border-slate-400 pt-1.5 text-sm font-bold text-slate-900">
            Gugun Gunara
          </p>
          <p className="text-xs text-slate-600">Founder — TOP Manajemen</p>
        </div>
      </div>

      {/* ─── Footer micro ─── */}
      <footer className="mt-8 border-t border-emerald-900/20 pt-3 text-center text-[10px] tracking-wide text-emerald-900/60">
        TOP Manajemen • powered by digiman.id • halo@digiman.id • WA 0813-3339-7223
      </footer>
    </article>
  );
}
