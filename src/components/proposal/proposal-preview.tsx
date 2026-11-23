"use client";

/**
 * PROPOSAL STUDIO — PREVIEW MODE.
 * Panel dokumen bernuansa resmi (krem kertas) — toolbar & banner memakai
 * `print:hidden` sehingga saat window.print() hanya dokumen (.proposal-print)
 * yang tercetak: A4 penuh, bersih, tanpa halaman kosong.
 */

import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Copy,
  MessageCircle,
  Printer,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { fmtDateID, fmtRp, statusMeta, type ProposalData } from "@/lib/proposal-calc";
import { waLinkFor } from "@/components/proposal/proposal-ui";

/** Print: dokumen jadi satu-satunya konten — A4 penuh, tanpa halaman kosong,
 *  tipografi diperbesar agar resmi & terbaca jelas di kertas/PDF. */
const PRINT_CSS = `
@media print {
  @page { size: A4; margin: 12mm 13mm; }
  html, body { background: #ffffff !important; }
  /* Toast / portal notifikasi jangan ikut tercetak */
  [role="region"][aria-label*="Notifications"],
  [data-radix-portal],
  [data-radix-toast-viewport] { display: none !important; }
  .proposal-print {
    color: #0f172a !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .proposal-print tr,
  .proposal-print header,
  .proposal-print section { page-break-inside: avoid; }
  .proposal-print thead { display: table-header-group; }
  /* Tipografi cetak lebih besar — dokumen terbaca penuh di A4 */
  .proposal-print .text-\\[10px\\] { font-size: 9pt !important; }
  .proposal-print .text-\\[11px\\] { font-size: 10pt !important; }
  .proposal-print .text-xs { font-size: 10.5pt !important; }
  .proposal-print .text-sm { font-size: 11.5pt !important; }
  /* Rapatkan spasi vertikal agar seluruh surat pas satu halaman A4 */
  .proposal-print .mt-5 { margin-top: 0.9rem !important; }
  .proposal-print .mt-6 { margin-top: 1.1rem !important; }
  .proposal-print .mt-7 { margin-top: 1.25rem !important; }
  .proposal-print .mt-8 { margin-top: 1.4rem !important; }
  .proposal-print .mt-10 { margin-top: 1.5rem !important; }
  .proposal-print .mt-14 { margin-top: 2.6rem !important; }
}
`;

export default function ProposalPreview({
  proposal,
  onBack,
}: {
  proposal: ProposalData;
  onBack: () => void;
}) {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(proposal.code);
      toast({
        title: "Kode disalin",
        description: `${proposal.code} siap ditempel ke chat Anda.`,
      });
    } catch {
      toast({
        title: "Gagal menyalin",
        description: `Salin manual kode berikut: ${proposal.code}`,
        variant: "destructive",
      });
    }
  };

  const pkgLabel = proposal.packageCode === "CUSTOM" ? "rakit kustom" : proposal.packageCode;
  const waLink = waLinkFor(
    `Halo, saya ${proposal.clientName}. Saya baru membuat penawaran ${proposal.code} untuk paket ${pkgLabel} Gunara OS. Mohon info langkah selanjutnya. Terima kasih.`,
  );

  const status = statusMeta(proposal.status);

  return (
    <div className="relative min-h-screen bg-night pb-24 text-foreground print:bg-white print:pb-0">
      <style>{PRINT_CSS}</style>

      {/* ══════════ Toolbar sticky (tidak ikut tercetak) ══════════ */}
      <div className="glass-strong sticky top-0 z-40 border-b print:hidden">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-2 px-4 py-3 sm:gap-3">
          <button
            type="button"
            onClick={onBack}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-50/80 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Kembali
          </button>

          <span
            className="font-display ml-auto hidden rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-bold tracking-[0.12em] text-gold-light sm:inline-flex"
            aria-label={`Kode penawaran ${proposal.code}`}
          >
            {proposal.code}
          </span>

          <div className="ml-auto flex flex-wrap items-center gap-2 sm:ml-0">
            <button
              type="button"
              onClick={() => void copyCode()}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-50/80 transition-colors duration-300 hover:border-gold/40 hover:text-gold"
            >
              <Copy className="h-4 w-4" aria-hidden />
              Salin Kode
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="shimmer-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-gold to-amber-400 px-5 py-2 text-sm font-bold text-emerald-950 shadow-[0_8px_24px_-8px_rgba(242,193,78,0.6)] transition hover:brightness-110"
            >
              <Printer className="h-4 w-4" aria-hidden />
              Cetak / Simpan PDF
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-50/80 transition-colors duration-300 hover:border-emerald-400/50 hover:text-emerald-200"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="section-padding print:p-0! print:pt-0! pt-8">
        {/* Banner sukses (tidak ikut tercetak) */}
        <div className="glass mx-auto mb-6 flex max-w-3xl items-start gap-3 rounded-2xl p-4 print:hidden">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
          <p className="text-sm leading-relaxed text-emerald-50/80">
            Penawaran berhasil dibuat dan tersimpan sebagai{" "}
            <span className={status.chipClass}>{status.label}</span>. Bagikan kode{" "}
            <span className="font-display font-bold text-gold-light">{proposal.code}</span> ke tim
            kami via WhatsApp, atau cetak dokumen di bawah sebagai PDF resmi.
          </p>
        </div>

        {/* ══════════ DOKUMEN ══════════ */}
        <article className="proposal-print mx-auto max-w-3xl rounded-xl bg-[#faf7ef] p-6 text-slate-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] sm:p-10 md:p-12 print:max-w-none! print:rounded-none! print:bg-white! print:p-0! print:shadow-none!">
          {/* KOP surat */}
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-emblem.png"
                alt="Emblem TOP Manajemen"
                width={52}
                height={52}
                className="rounded-lg"
              />
              <div>
                <p className="font-display text-xl font-extrabold leading-tight text-emerald-950">
                  TOP Manajemen
                </p>
                <p className="text-xs font-medium tracking-wide text-slate-500">
                  powered by digiman.id
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Kode Penawaran
              </p>
              <p className="font-display text-lg font-bold text-emerald-900">{proposal.code}</p>
              <p className="text-xs text-slate-500">{fmtDateID(proposal.createdAt)}</p>
            </div>
          </header>
          <div aria-hidden className="mt-5 border-b-2 border-slate-800" />
          <div aria-hidden className="mt-[3px] border-b border-slate-400" />

          {/* Identitas klien */}
          <section className="mt-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Kepada Yth.
            </p>
            <p className="font-display mt-1 text-lg font-bold text-slate-900">
              {proposal.clientName}
            </p>
            {proposal.clientCompany && (
              <p className="text-sm text-slate-700">{proposal.clientCompany}</p>
            )}
            <p className="mt-1 text-sm text-slate-600">
              {proposal.clientEmail} · +{proposal.clientWa}
            </p>
          </section>

          {/* Judul */}
          <h1 className="font-display mt-8 text-center text-lg font-extrabold uppercase leading-snug tracking-[0.08em] text-emerald-950 sm:text-2xl">
            Penawaran Arsitektur Dokumen
            <span className="mt-1 block text-sm tracking-[0.3em] text-amber-700 sm:text-base">
              — Gunara OS —
            </span>
          </h1>

          {/* Meta durasi & masa berlaku */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-300 bg-white/70 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Estimasi Pengerjaan
              </p>
              <p className="text-sm font-bold text-slate-900">{proposal.durationWeeks}</p>
            </div>
            <div className="rounded-lg border border-slate-300 bg-white/70 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Penawaran Berlaku Hingga
              </p>
              <p className="text-sm font-bold text-slate-900">
                {proposal.validUntil ? fmtDateID(proposal.validUntil) : "-"}
              </p>
            </div>
          </div>

          {/* Tabel line items */}
          <table className="mt-6 w-full border-collapse text-sm">
            <thead>
              <tr className="bg-emerald-900/10">
                <th
                  scope="col"
                  className="w-10 border border-slate-300 px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-emerald-950"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="border border-slate-300 px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-emerald-950"
                >
                  Uraian
                </th>
                <th
                  scope="col"
                  className="w-12 border border-slate-300 px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-emerald-950"
                >
                  Qty
                </th>
                <th
                  scope="col"
                  className="w-32 border border-slate-300 px-3 py-2 text-right text-[10px] font-bold uppercase tracking-wider text-emerald-950 sm:w-40"
                >
                  Jumlah
                </th>
              </tr>
            </thead>
            <tbody>
              {proposal.items.map((item, i) => (
                <tr key={`${item.label}-${i}`}>
                  <td className="border border-slate-300 px-2 py-2 text-center text-slate-600">
                    {i + 1}
                  </td>
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">
                    {item.label}
                  </td>
                  <td className="border border-slate-300 px-2 py-2 text-center text-slate-700">
                    {item.qty}
                  </td>
                  <td
                    className={`border border-slate-300 px-3 py-2 text-right font-semibold ${
                      item.amount < 0 ? "text-emerald-700" : "text-slate-900"
                    }`}
                  >
                    {fmtRp(item.amount)}
                  </td>
                </tr>
              ))}
              {proposal.items.length === 0 && (
                <tr>
                  <td colSpan={4} className="border border-slate-300 px-3 py-3 text-center text-slate-500">
                    Belum ada item.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Subtotal / Diskon / Total */}
          <div className="mt-4 flex justify-end">
            <dl className="w-full max-w-xs space-y-1.5 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-slate-600">Subtotal</dt>
                <dd className="font-semibold text-slate-900">{fmtRp(proposal.subtotal)}</dd>
              </div>
              {proposal.discount > 0 && (
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-slate-600">Diskon Standarisasi</dt>
                  <dd className="font-semibold text-emerald-700">− {fmtRp(proposal.discount)}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between gap-4 border-t-2 border-slate-800 pt-2">
                <dt className="font-display font-extrabold uppercase tracking-wide text-emerald-950">
                  Total
                </dt>
                <dd className="font-display text-lg font-extrabold text-emerald-950">
                  {fmtRp(proposal.total)}
                </dd>
              </div>
            </dl>
          </div>

          {/* Catatan klien */}
          {proposal.notes && (
            <p className="mt-5 rounded-lg bg-slate-900/5 px-4 py-3 text-xs italic leading-relaxed text-slate-600">
              Catatan klien: {proposal.notes}
            </p>
          )}

          {/* Syarat singkat */}
          <section className="mt-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-950">
              Syarat &amp; Ketentuan
            </h2>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs leading-relaxed text-slate-700">
              <li>Penawaran ini berlaku 30 hari kalender sejak tanggal dibuat di atas.</li>
              <li>Pekerjaan dimulai setelah down payment (DP) sebesar 50% dari nilai total diterima.</li>
              <li>Revisi konten disediakan maksimal 2 (dua) kali per dokumen.</li>
            </ol>
          </section>

          {/* Tanda tangan */}
          <section className="mt-10 flex justify-end">
            <div className="w-56 text-center">
              <p className="text-sm text-slate-700">Hormat kami,</p>
              <div className="mt-14 border-t border-slate-800 pt-1.5">
                <p className="font-display text-sm font-bold text-slate-900">Gugun Gunara</p>
                <p className="text-xs text-slate-600">Founder</p>
              </div>
            </div>
          </section>

          {/* Legal footer */}
          <footer className="mt-10 border-t border-slate-300 pt-3 text-center text-[10px] leading-relaxed text-slate-500">
            TOP Manajemen — SK AHU-059566.AH.01.30 Tahun 2022 · NIB 2612220035584 ·
            halo@digiman.id · +62 813-1651-6524
          </footer>
        </article>
      </div>
    </div>
  );
}
