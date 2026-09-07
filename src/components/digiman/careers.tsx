import { Check } from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { CAREERS, ORG } from "@/content/holding";

/**
 * Careers: culture principles + open roles (mailto application).
 */
export function Careers() {
  return (
    <section
      id="karier"
      aria-labelledby="karier-title"
      className="border-y border-border bg-secondary/20 py-24 sm:py-32"
    >
      <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="karier-title"
            eyebrow={CAREERS.eyebrow}
            title={CAREERS.title}
            description={CAREERS.description}
          />
          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-4">
              {CAREERS.culture.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <Check className="size-3 text-gold" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Posisi terbuka
          </p>
          <ul className="mt-5 space-y-4">
            {CAREERS.roles.map((role) => (
              <li
                key={role.key}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-medium tracking-tight">{role.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {role.unit}
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="text-xs text-muted-foreground">
                    <p>{role.type}</p>
                    <p className="mt-0.5">{role.location}</p>
                  </div>
                  <a
                    href={`mailto:${ORG.careersEmail}?subject=${encodeURIComponent(
                      `Lamaran: ${role.title}`
                    )}`}
                    className="inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    Lamar
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Tidak menemukan posisi yang cocok? Kirim perkenalan singkat ke{" "}
            <a
              href={`mailto:${ORG.careersEmail}`}
              className="text-gold underline-offset-4 hover:underline"
            >
              {ORG.careersEmail}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
