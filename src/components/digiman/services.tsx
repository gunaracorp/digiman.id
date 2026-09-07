import {
  Brain,
  Cloud,
  Compass,
  Layers,
  PenTool,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { SERVICES, type ServiceCapability } from "@/content/holding";

const ICONS: Record<ServiceCapability["icon"], LucideIcon> = {
  layers: Layers,
  brain: Brain,
  cloud: Cloud,
  "pen-tool": PenTool,
  compass: Compass,
  "shield-check": ShieldCheck,
};

/**
 * Capability grid — internal-grade capabilities opened to selected partners.
 */
export function Services() {
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.key} delay={(i % 3) * 0.08} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40 sm:p-7">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-gold transition-colors duration-300 group-hover:border-gold/40">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
