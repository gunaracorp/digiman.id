import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";

export type InsightItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  publishedAt: Date;
  featured: boolean;
};

type InsightsProps = {
  insights: InsightItem[];
};

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

/**
 * Editorial insights — data-driven from the database (RSC).
 * Includes an honest empty state when nothing has been published yet.
 */
export function Insights({ insights }: InsightsProps) {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className="py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          id="insights-title"
          eyebrow="Insights"
          title="Pengetahuan adalah aset holding."
          description="Catatan, kerangka kerja, dan pembelajaran dari praktik membangun ekosistem digital."
        />

        {insights.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              Insight pertama akan segera diterbitkan.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, i) => (
              <Reveal key={insight.slug} delay={(i % 3) * 0.08} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/40 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                      {insight.category}
                    </span>
                    {insight.featured && (
                      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold">
                        Unggulan
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
                    {insight.title}
                  </h3>
                  <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">
                    {insight.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                    <time dateTime={insight.publishedAt.toISOString()}>
                      {dateFormatter.format(insight.publishedAt)}
                    </time>
                    <span className="flex items-center gap-3">
                      <span>{insight.readMinutes} mnt baca</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.15}>
          <p className="mt-10 text-sm text-muted-foreground">
            Tertarik membahas salah satu tema di atas?{" "}
            <a
              href="#kontak"
              className="text-gold underline-offset-4 hover:underline"
            >
              Hubungi kami
            </a>{" "}
            — atau lihat langsung{" "}
            <a
              href="#layanan"
              className="text-gold underline-offset-4 hover:underline"
            >
              layanan &amp; harga
            </a>{" "}
            kami.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
