import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import type { BusinessUnit } from "@/content/holding";
import { cn } from "@/lib/utils";

const STAGE_STYLES: Record<BusinessUnit["stage"], string> = {
  Operating: "border-gold/40 bg-gold/10 text-gold",
  Building: "border-border bg-secondary text-muted-foreground",
  Genesis: "border-dashed border-border bg-transparent text-muted-foreground",
};

type BusinessPortfolioProps = {
  units: BusinessUnit[];
};

/**
 * Portfolio detail cards for every business unit.
 * Data comes from the database (RSC) with a static fallback.
 */
export function BusinessPortfolio({ units }: BusinessPortfolioProps) {
  return (
    <section
      id="bisnis"
      aria-labelledby="bisnis-title"
      className="border-y border-border bg-secondary/20 py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="bisnis-title"
          eyebrow="Bisnis"
          title="Portofolio holding."
          description="Empat unit yang saling terhubung — masing-masing dengan mandat, sektor, dan tahap perkembangan yang jelas."
        />

        {units.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              Portofolio sedang diperbarui. Silakan hubungi kami untuk
              informasi terkini.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {units.map((unit, i) => (
              <Reveal key={unit.key} delay={(i % 2) * 0.1} className="h-full">
                <article className="group flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm tracking-widest text-gold"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide",
                        STAGE_STYLES[unit.stage]
                      )}
                    >
                      {unit.stage}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl tracking-tight">
                      {unit.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {unit.tagline}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {unit.description}
                  </p>

                  <ul
                    aria-label={`Fokus ${unit.name}`}
                    className="flex flex-wrap gap-2"
                  >
                    {unit.focus.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-auto grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                    {unit.attributes.map((attr) => (
                      <div key={attr.label}>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {attr.label}
                        </dt>
                        <dd className="mt-1 text-sm">{attr.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
