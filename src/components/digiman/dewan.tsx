import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { DEWAN } from "@/content/holding";

/**
 * 46 Dewan Pakar — peta disiplin ilmu dari hulu ke hilir.
 * Strip ringan: chip bernomor, hover emas, reveal sekali.
 */
export function Dewan() {
  return (
    <section
      id="dewan"
      aria-labelledby="dewan-title"
      className="py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="dewan-title"
          eyebrow={DEWAN.eyebrow}
          title={DEWAN.title}
          description={DEWAN.description}
        />

        <Reveal delay={0.1}>
          <ul
            aria-label="Daftar 46 disiplin ilmu dewan pakar"
            className="mt-12 flex flex-wrap gap-2.5"
          >
            {DEWAN.disciplines.map((discipline, i) => (
              <li
                key={discipline}
                className="flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-gold/40 hover:text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-[10px] tracking-widest text-gold/80"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {discipline}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
