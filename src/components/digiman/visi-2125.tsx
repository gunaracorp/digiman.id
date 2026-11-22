import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { VISION } from "@/content/holding";

/**
 * Visi 2125 — linimasa 100 tahun dari fondasi sampai institusi abadi.
 * Lapisan ambient: grid + glow emas, mengikuti bahasa visual hero.
 */
export function Vision2125() {
  return (
    <section
      id="visi"
      aria-labelledby="visi-title"
      className="grain relative overflow-hidden border-y border-border bg-card/20 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="animate-drift absolute -right-40 top-10 h-[420px] w-[420px] rounded-full glow-gold blur-3xl"
      />

      <div className="shell relative z-10">
        <SectionHeading
          id="visi-title"
          eyebrow={VISION.eyebrow}
          title={VISION.title}
          description={VISION.description}
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Angka abadi */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p
                aria-hidden="true"
                className="font-display text-[clamp(6rem,14vw,11rem)] leading-none tracking-tight text-gold/90"
              >
                2125
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                2025 → 2125 · Seratus tahun horizon
              </p>
              <p className="mt-8 max-w-sm font-display text-2xl italic leading-snug text-foreground/85">
                “{VISION.closing}”
              </p>
            </div>
          </Reveal>

          {/* Linimasa */}
          <ol className="relative border-l border-border pl-8 sm:pl-10">
            {VISION.milestones.map((milestone, i) => {
              const isLast = i === VISION.milestones.length - 1;
              return (
                <li key={milestone.year} className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={
                      isLast
                        ? "absolute -left-[37px] top-1.5 size-3 rounded-full bg-gold shadow-[0_0_18px_2px_rgb(201_164_92/0.5)] sm:-left-[45px]"
                        : "absolute -left-[35px] top-1.5 size-2.5 rounded-full border border-gold/50 bg-background sm:-left-[43px]"
                    }
                  />
                  <Reveal delay={i * 0.06}>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-sm tracking-widest text-gold">
                        {milestone.year}
                      </span>
                      <h3
                        className={
                          isLast
                            ? "font-display text-3xl tracking-tight text-gold-strong"
                            : "font-display text-3xl tracking-tight"
                        }
                      >
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {milestone.description}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
