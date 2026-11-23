"use client";

import { useState } from "react";

/**
 * Tombol salin-ke-clipboard untuk bidang Katalog WhatsApp.
 * Server component tidak bisa memakai clipboard — komponen klien terkecil
 * yang mungkin: satu tombol, satu state, umpan balik visual 1,5 detik.
 */
export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API tidak tersedia (http/non-secure) → fallback textarea
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Salin ${label}`}
      className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-all active:scale-95 ${
        copied
          ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-300"
          : "border-white/15 bg-white/[0.05] text-white/70 hover:border-[var(--gold)]/50 hover:text-white"
      }`}
    >
      {copied ? (
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="9" y="9" width="11" height="11" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {copied ? "Tersalin!" : "Salin"}
    </button>
  );
}
