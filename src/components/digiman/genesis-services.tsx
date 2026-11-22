import { Check } from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { SERVICES, SERVICE_CATALOG } from "@/content/holding";

/**
 * Katalog jasa berharga — jantung "bisnis real" DIGIMAN.ID.
 * Render statis dari SERVICE_CATALOG (single source of truth di
 * src/content/holding.ts): lima unit, enam belas jasa, harga
 * indikatif yang transparan.
 */
export function GenesisServices() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="border-y border-border bg-secondary/20 py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="layanan-title"
          eyebrow={SERVICES.eyebrow}
          title={SERVICES.title}
          description={SERVICES.description}
        />

        <div className="mt-16 space-y-16">
          {SERVICE_CATALOG.map((line) => (
            <div key={line.unitKey}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-gold">
                  {line.unitName}
                </span>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {line.intro}
                </p>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {line.services.map((service, i) => (
                  <Reveal
                    key={service.key}
                    delay={(i % 3) * 0.08}
                    className="h-full"
                  >
                    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl tracking-tight">
                          {service.name}
                        </h3>
                        {service.popular ? (
                          <span className="shrink-0 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold">
                            Populer
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <ul
                        aria-label={`Deliverables ${service.name}`}
                        className="mb-7 space-y-2"
                      >
                        {service.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check
                              aria-hidden="true"
                              className="mt-0.5 size-4 shrink-0 text-gold"
                            />
                            {deliverable}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto border-t border-border pt-5">
                        <p className="font-display text-3xl tracking-tight text-gold">
                          {service.price}
                        </p>
                        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {service.duration}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 rounded-2xl border border-border bg-card/60 p-6 text-sm leading-relaxed text-muted-foreground">
            {SERVICES.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
