import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { TECHNOLOGY } from "@/content/holding";

/**
 * The 7-Layer Digital Architecture as an interactive (accessible) stack.
 * Radix Accordion provides keyboard navigation + ARIA out of the box.
 */
export function Technology() {
  return (
    <section
      id="teknologi"
      aria-labelledby="teknologi-title"
      className="py-24 sm:py-32"
    >
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            id="teknologi-title"
            eyebrow={TECHNOLOGY.eyebrow}
            title={TECHNOLOGY.title}
            description={TECHNOLOGY.description}
          />

          <Reveal delay={0.15}>
            <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {TECHNOLOGY.pillars.map((pillar) => (
                <li key={pillar.label} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <div>
                    <p className="text-sm font-medium">{pillar.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {pillar.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            {TECHNOLOGY.stackLabel}
          </p>
          <Accordion
            type="single"
            collapsible
            defaultValue="layer-0"
            className="mt-5 rounded-2xl border border-border bg-card px-6"
          >
            {TECHNOLOGY.layers.map((layer, i) => (
              <AccordionItem
                key={layer.index}
                value={`layer-${i}`}
                className="border-border last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline [&>svg]:text-gold">
                  <span className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs tracking-widest text-gold"
                    >
                      {layer.index}
                    </span>
                    <span className="text-[15px] font-medium sm:text-base">
                      {layer.title}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-9 text-sm leading-relaxed text-muted-foreground">
                  {layer.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
