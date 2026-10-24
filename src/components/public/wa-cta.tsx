import { waLink } from "@/lib/seo";

/**
 * CTA WhatsApp — server component, tautan langsung ke percakapan.
 * Pesan sudah terisi konteks halaman sehingga pakar mahu bacaan.
 */
export default function WaCta({
  waNumber,
  context,
  label = "Konsultasi Gratis via WhatsApp",
  sub,
  variant = "large",
}: {
  waNumber?: string;
  context: string;
  label?: string;
  sub?: string;
  variant?: "large" | "compact";
}) {
  const href = waLink(
    waNumber,
    `Halo DIGIMAN.ID, saya ingin konsultasi mengenai ${context}.`
  );

  if (variant === "compact") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#04120c] shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.03] active:scale-95"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.03c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.13.24-3.83-.8-3.23-1.27-5.28-4.55-5.44-4.76-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.12-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.27.64.9 2.2.98 2.36.08.16.13.35.02.56-.1.21-.16.34-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.57 1.59.32.16.51.13.69-.08.19-.21.79-.92 1-1.24.21-.32.43-.26.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.14.08.79-.16 1.47Z" />
        </svg>
        {label}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
      <p className="font-[family-name:var(--font-grotesk)] text-xl font-bold text-white">
        Mulai dari percakapan, bukan biaya.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {sub ??
          "Ceritakan kebutuhan Anda — dalam 1×24 jam kami hubungkan dengan dewan pakar yang tepat. Konsultasi awal gratis, tanpa komitmen apa pun."}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-[#04120c] shadow-lg shadow-emerald-500/30 transition-transform hover:scale-[1.03] active:scale-95"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.03c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.13.24-3.83-.8-3.23-1.27-5.28-4.55-5.44-4.76-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.12-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.27.64.9 2.2.98 2.36.08.16.13.35.02.56-.1.21-.16.34-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.57 1.59.32.16.51.13.69-.08.19-.21.79-.92 1-1.24.21-.32.43-.26.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.14.08.79-.16 1.47Z" />
        </svg>
        {label}
      </a>
    </div>
  );
}
