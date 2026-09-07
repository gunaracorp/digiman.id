import { ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { ECOSYSTEM, type BusinessUnit } from "@/content/holding";
import { cn } from "@/lib/utils";

const STAGE_STYLES: Record<BusinessUnit["stage"], string> = {
  Operating: "border-gold/40 bg-gold/10 text-gold",
  Building: "border-border bg-secondary text-muted-foreground",
  Genesis: "border-dashed border-border bg-transparent text-muted-foreground",
};

type EcosystemProps = {
  units: BusinessUnit[];
};

/**
 * Holding tree: central holding node connected to the business units.
 * Pure server-rendered structure (semantic list) with scroll reveals.
 */
export function Ecosystem({ units }: EcosystemProps) {
  return (
    <section
      id="ekosistem"
      aria-labelledby="ekosistem-title"
      className="py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="ekosistem-title"
          eyebrow={ECOSYSTEM.eyebrow}
          title={ECOSYSTEM.title}
          description={ECOSYSTEM.description}
        />

        <div className="mt-16">
          {/* Holding node */}
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="relative rounded-2xl border border-gold/40 bg-card px-8 py-6 text-center shadow-[0_0_60px_-15px_rgb(201_164_92/0.25)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                Holding
              </p>
              <p className="mt-2 font-display text-3xl tracking-tight">
                DIGIMAN<span className="text-gold">.ID</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {ECOSYSTEM.holdingLabel}
              </p>
            </div>
          </Reveal>

          {/* Connectors */}
          <div
            aria-hidden="true"
            className="mx-auto hidden h-10 w-px bg-border md:block"
          />
          <div aria-hidden="true" className="relative hidden md:block">
            <div className="absolute inset-x-[12.5%] top-0 h-px bg-border" />
            <div className="h-px" />
          </div>

          {/* Units */}
          <ul className="mt-0 grid gap-4 md:grid-cols-4">
            {units.map((unit, i) => (
              <li key={unit.key} className="flex flex-col">
                <div
                  aria-hidden="true"
                  className="mx-auto hidden h-10 w-px bg-border md:block"
                />
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        {unit.sector}
                      </span>
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-wide",
                          STAGE_STYLES[unit.stage]
                        )}
                      >
                        {unit.stage}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">
                      {unit.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {unit.tagline}
                    </p>
                    <a
                      href="#bisnis"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-strong"
                      aria-label={`Lihat detail ${unit.name}`}
                    >
                      Detail
                      <ArrowDown className="size-3.5" />
                    </a>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
