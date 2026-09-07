import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { Button } from "@/components/ui/button";
import { VENTURES } from "@/content/holding";

/**
 * Investment theses of DIGIMAN Capital.
 */
export function Ventures() {
  return (
    <section
      id="ventura"
      aria-labelledby="ventura-title"
      className="py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="ventura-title"
          eyebrow={VENTURES.eyebrow}
          title={VENTURES.title}
          description={VENTURES.description}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {VENTURES.theses.map((thesis, i) => (
            <Reveal key={thesis.key} delay={i * 0.1} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-gold/40">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                  {thesis.stage}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {thesis.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {thesis.thesis}
                </p>
                <div className="mt-6 border-l-2 border-gold/50 pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Yang kami dukung
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed">
                    {thesis.backing}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Punya tesis yang sejalan?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ceritakan perusahaan yang Anda bangun — kami membaca setiap
                pesan.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 shrink-0 rounded-full px-6"
            >
              <a href="#kontak">
                Kirim pitch
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
