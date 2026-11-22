import { ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { GOVERNANCE } from "@/content/holding";

/**
 * Governance: entity lifecycle stepper + operating pillars.
 */
export function Governance() {
  return (
    <section
      id="tata-kelola"
      aria-labelledby="tata-kelola-title"
      className="border-y border-border bg-secondary/20 py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="tata-kelola-title"
          eyebrow={GOVERNANCE.eyebrow}
          title={GOVERNANCE.title}
          description={GOVERNANCE.description}
        />

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              Siklus entitas
            </p>
            <ul
              aria-label="Siklus entitas holding"
              className="mt-5 flex flex-wrap items-center gap-2.5"
            >
              {GOVERNANCE.entityLifecycle.map((stage, i) => (
                <li key={stage} className="flex items-center gap-2.5">
                  <span
                    className={
                      i === GOVERNANCE.entityLifecycle.length - 1
                        ? "rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs font-medium text-gold sm:text-sm"
                        : "rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs text-muted-foreground sm:text-sm"
                    }
                  >
                    {stage}
                  </span>
                  {i < GOVERNANCE.entityLifecycle.length - 1 && (
                    <ChevronRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-muted-foreground"
                    />
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Setiap tahap memiliki model kepemilikan, pelaporan, dan
              persetujuan tersendiri — siap dipisahkan menjadi entitas yang
              berdiri sendiri saat maturity mencapai ambang yang ditetapkan.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GOVERNANCE.pillars.map((pillar, i) => (
            <Reveal key={pillar.key} delay={(i % 3) * 0.08} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40">
                <p
                  aria-hidden="true"
                  className="font-mono text-xs tracking-widest text-gold"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
