"use client";

/**
 * Toggle bahasa ID | EN — pill kaca kompak (h-9).
 * Butuh <LocaleProvider> di ancestor agar interaktif; tanpa provider tetap
 * render aman (locale default "id", setLocale no-op).
 */

import { useI18n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const OPTIONS: Array<{ value: Locale; label: string }> = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("common.bahasa")}
      className={cn(
        "glass inline-flex h-9 items-center gap-1 rounded-full p-1",
        className,
      )}
    >
      <span className="hidden pl-2 pr-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-50/50 sm:inline">
        {t("common.bahasa")}
      </span>
      {OPTIONS.map((option) => {
        const active = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            aria-label={option.value === "id" ? "Bahasa Indonesia" : "English"}
            onClick={() => setLocale(option.value)}
            className={cn(
              "inline-flex h-7 cursor-pointer items-center justify-center rounded-full border px-2.5 text-xs font-bold transition-colors duration-200",
              active
                ? "border-gold/20 bg-gold/10 text-gold"
                : "border-transparent text-emerald-50/60 hover:text-white",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
