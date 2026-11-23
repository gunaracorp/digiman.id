"use client";

import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { SERVICES, SERVICE_CATALOG } from "@/content/holding";
import { cn } from "@/lib/utils";

const TOTAL_SERVICES = SERVICE_CATALOG.reduce(
  (sum, line) => sum + line.services.length,
  0
);

/**
 * Layanan & Harga — katalog jasa berharga per unit holding.
 * Prinsip "harga terang, lingkup jelas": deliverables, durasi, dan
 * harga indikatif tampil di depan untuk semua jasa.
 */
export function Services() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="layanan-title"
          eyebrow={SERVICES.eyebrow}
          title={SERVICES.title}
          description={SERVICES.description}
        />

        <Reveal delay={0.1}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {TOTAL_SERVICES} jasa · harga indikatif · final setelah Kaji
          </p>

          <Tabs defaultValue={SERVICE_CATALOG[0].unitKey} className="mt-6">
            <TabsList
              aria-label="Pilih unit layanan"
              className="h-auto w-full max-w-3xl flex-wrap justify-start gap-1 rounded-2xl border border-border bg-card p-1.5"
            >
              {SERVICE_CATALOG.map((line) => (
                <TabsTrigger
                  key={line.unitKey}
                  value={line.unitKey}
                  className="rounded-xl px-4 py-2 text-sm data-[state=active]:bg-gold data-[state=active]:text-[#17130a]"
                >
                  {line.unitName}
                </TabsTrigger>
              ))}
            </TabsList>

            {SERVICE_CATALOG.map((line) => (
              <TabsContent key={line.unitKey} value={line.unitKey} className="mt-8">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {line.intro}
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {line.services.map((service) => (
                    <article
                      key={service.key}
                      className={cn(
                        "flex h-full flex-col rounded-2xl border bg-card p-6 transition-colors duration-300 sm:p-7",
                        service.popular
                          ? "border-gold/50 shadow-[0_0_50px_-18px_rgb(201_164_92/0.45)]"
                          : "border-border hover:border-gold/40"
                      )}
                    >
                      {service.popular && (
                        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold">
                          <Sparkles className="size-3" aria-hidden="true" />
                          Paling Diminati
                        </span>
                      )}
                      <h3 className="text-lg font-semibold tracking-tight">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <ul
                        aria-label={`Lingkup ${service.name}`}
                        className="mt-5 space-y-2.5"
                      >
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-foreground/85"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-gold"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <div className="flex flex-wrap items-end justify-between gap-3 border-t border-border pt-5">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                              Investasi
                            </p>
                            <p className="mt-1 font-display text-[1.55rem] leading-tight tracking-tight text-gold-strong">
                              {service.price}
                            </p>
                          </div>
                          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="size-3.5" aria-hidden="true" />
                            {service.duration}
                          </p>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="mt-4 h-10 w-full rounded-full text-sm"
                        >
                          <a
                            href="#kontak"
                            className="group/cta inline-flex items-center justify-center gap-2"
                            aria-label={`Konsultasi jasa ${service.name}`}
                          >
                            Konsultasi jasa ini
                            <ArrowRight
                              className="size-3.5 transition-transform group-hover/cta:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {SERVICES.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
