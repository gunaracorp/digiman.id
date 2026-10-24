"use client";

import { useEffect } from "react";

/**
 * Error boundary global — menangkap error runtime render dan menawarkan
 * pemulihan tanpa meninggalkan pengguna pada layar putih.
 * Error asli tetap tercatat di console untuk diagnosa dev/monitoring.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[DIGIMAN.ID] Runtime error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050d0a] px-4 text-center text-white">
      <p className="font-[family-name:var(--font-grotesk)] bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-6xl font-bold text-transparent">
        Ups
      </p>
      <h1 className="mt-5 font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight">
        Terjadi gangguan sesaat
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
        Sistem kami mendeteksi kesalahan tak terduga. Coba muat ulang halaman —
        bila berlanjut, tim kami siap membantu via WhatsApp.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-[#04120c] shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.02] active:scale-95"
        >
          Muat Ulang Halaman
        </button>
        <a
          href="/"
          className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition-colors hover:border-[var(--gold)]/50 hover:text-white"
        >
          Ke Beranda
        </a>
      </div>
    </div>
  );
}
