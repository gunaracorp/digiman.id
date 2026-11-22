import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { METODE } from "@/content/holding";

/**
 * Metode kerja: 5 langkah Kaji → Rancang → Bangun → Kelola → Skala.
 * Server-rendered semantic list dengan scroll reveal.
 */
export function Metode() {
  return (
    <section
      id="metode"
      aria-labelledby="metode-title"
      className="border-y border-border bg-secondary/20 py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="metode-title"
          eyebrow={METODE.eyebrow}
          title={METODE.title}
          description={METODE.description}
        />

        <ol className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {METODE.steps.map((step, i) => (
            <li
              key={step.index}
              className="relative border-t border-border pt-6"
            >
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-px w-12 bg-gold"
              />
              <Reveal delay={i * 0.08}>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs tracking-widest text-gold"
                >
                  {step.index}
                </span>
                <h3 className="mt-3 font-display text-3xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
