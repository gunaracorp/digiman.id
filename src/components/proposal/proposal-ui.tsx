"use client";

/**
 * PROPOSAL STUDIO — potongan UI bersama (Pill, Stepper, helper kelas input).
 * Semua presentational: tanpa state, tanpa fetch.
 */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Nomor WhatsApp resmi DIGIMAN.ID (format internasional tanpa +). */
export const WA_NUMBER = "6281333397223";

export function waLinkFor(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Kelas border/ring input — merah saat error, gold saat fokus (pola contact.tsx). */
export function inputCls(hasError: boolean): string {
  return hasError
    ? "border-red-400/60 focus-visible:border-red-400 focus-visible:ring-red-400/20"
    : "border-emerald-400/20 focus-visible:border-gold/50 focus-visible:ring-gold/20";
}

export function Pill({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "emerald";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        tone === "gold"
          ? "border-gold/40 bg-gold/10 text-gold-light"
          : "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
      }`}
    >
      {children}
    </span>
  );
}

export const STEP_LABELS: Record<1 | 2 | 3, string> = {
  1: "Data Klien",
  2: "Paket & Dokumen",
  3: "Review & Kirim",
};

/** Stepper glass 3 langkah — langkah sebelumnya bisa diklik untuk kembali. */
export function Stepper({
  step,
  onNavigate,
}: {
  step: 1 | 2 | 3;
  onNavigate: (s: 1 | 2 | 3) => void;
}) {
  return (
    <ol
      aria-label="Langkah pengerjaan penawaran"
      className="glass flex items-stretch gap-1 rounded-2xl p-2 sm:gap-2 sm:p-3"
    >
      {([1, 2, 3] as const).map((n, i) => {
        const active = n === step;
        const done = n < step;
        return (
          <li key={n} className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => done && onNavigate(n)}
              disabled={!done}
              aria-current={active ? "step" : undefined}
              aria-label={`Langkah ${n}: ${STEP_LABELS[n]}${done ? " (klik untuk kembali)" : ""}`}
              className={`flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors duration-300 sm:px-3 sm:py-2.5 ${
                active
                  ? "bg-gold/10 ring-1 ring-gold/40"
                  : done
                    ? "hover:bg-emerald-400/5"
                    : "cursor-default"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  active
                    ? "bg-gradient-to-br from-yellow-300 to-amber-400 text-emerald-950 shadow-[0_4px_14px_-4px_rgba(242,193,78,0.7)]"
                    : done
                      ? "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/40"
                      : "bg-white/5 text-emerald-50/50 ring-1 ring-white/10"
                }`}
                aria-hidden
              >
                {done ? "✓" : n}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-emerald-50/45">
                  Langkah {n}
                </span>
                <span
                  className={`block truncate text-xs font-semibold sm:text-sm ${
                    active ? "text-gold-light" : done ? "text-emerald-50/75" : "text-emerald-50/45"
                  }`}
                >
                  {STEP_LABELS[n]}
                </span>
              </span>
            </button>
            {i < 2 && (
              <span
                aria-hidden
                className="hidden h-px w-4 shrink-0 bg-gradient-to-r from-emerald-400/30 to-gold/30 sm:block lg:w-8"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** Label seksi kecil bergaya uppercase (konsisten paket.tsx). */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
      {children}
    </legend>
  );
}
