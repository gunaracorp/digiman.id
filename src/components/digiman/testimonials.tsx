"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { TestimonialItem } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TestimonialCard({
  t,
  hidden = false,
}: {
  t: TestimonialItem;
  hidden?: boolean;
}) {
  // Alias "tr" karena param "t" adalah item testimoni (data, tidak diterjemahkan).
  const { t: tr } = useI18n();
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="card-glow mr-6 w-[340px] shrink-0 rounded-2xl glass p-6 whitespace-normal"
    >
      <div
        className="mb-4 flex items-center gap-1"
        aria-label={tr("testimonials.ratingAria", { rating: t.rating })}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={cn(
              "h-4 w-4",
              i <= Math.round(t.rating)
                ? "fill-gold text-gold"
                : "text-emerald-50/25"
            )}
          />
        ))}
      </div>

      <blockquote className="line-clamp-4 text-sm leading-relaxed text-emerald-50/75">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-600/20 font-display text-sm font-bold text-emerald-100 ring-1 ring-emerald-400/40"
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-white">
            {t.name}
          </span>
          <span className="block truncate text-xs text-emerald-50/50">
            {t.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) {
  const { t } = useI18n();
  const row2 = [...testimonials].reverse();

  return (
    <section id="testimoni" className="section-padding relative overflow-hidden py-24">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <Star className="h-3.5 w-3.5 fill-gold" aria-hidden="true" />
            {t("testimonials.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("testimonials.judulA")}{" "}
            <span className="gradient-text-gold">{t("testimonials.judulB")}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-emerald-50/60 sm:text-base">
            {t("testimonials.sub")}
          </p>
        </motion.div>

        {testimonials.length === 0 ? (
          <p className="mt-12 text-center text-sm text-emerald-50/50">
            {t("testimonials.kosong")}
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="marquee-paused mt-14 space-y-6"
          >
            {/* Row 1 — maju */}
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
              <div className="animate-marquee flex w-max whitespace-nowrap py-2">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={`r1-a-${i}`} t={t} />
                ))}
                {testimonials.map((t, i) => (
                  <TestimonialCard key={`r1-b-${i}`} t={t} hidden />
                ))}
              </div>
            </div>

            {/* Row 2 — mundur */}
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
              <div className="animate-marquee-reverse flex w-max whitespace-nowrap py-2">
                {row2.map((t, i) => (
                  <TestimonialCard key={`r2-a-${i}`} t={t} />
                ))}
                {row2.map((t, i) => (
                  <TestimonialCard key={`r2-b-${i}`} t={t} hidden />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
