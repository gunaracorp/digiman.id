import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { MANIFESTO } from "@/content/holding";

/**
 * Light "paper" interlude — editorial manifesto with working principles.
 * Provides tonal contrast against the dark ink sections (brand restraint).
 */
export function Manifesto() {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-title"
      className="paper-section relative overflow-hidden"
    >
      <div className="shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="tentang-title"
              eyebrow={MANIFESTO.eyebrow}
              title={MANIFESTO.title}
              tone="paper"
            />
          </div>
          <Reveal delay={0.15} className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed paper-muted sm:text-xl">
              {MANIFESTO.body}
            </p>
            <p className="mt-8 font-display text-2xl italic text-[#171410]">
              — Prinsip kerja DIGIMAN
            </p>
          </Reveal>
        </div>

        <ol className="mt-20">
          {MANIFESTO.principles.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.06}>
              <li className="grid gap-3 border-t border-[#171410]/10 py-7 sm:grid-cols-[72px_280px_1fr] sm:items-baseline sm:gap-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm tracking-widest text-[#8a6d2f]"
                >
                  {principle.index}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[#171410]">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed paper-muted sm:text-[15px]">
                  {principle.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
