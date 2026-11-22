import { MARQUEE_ITEMS } from "@/content/holding";

/**
 * Trust marquee: business units + holding pillars.
 * Pure CSS animation; duplicated track (aria-hidden) loops seamlessly.
 * Disabled via CSS when prefers-reduced-motion is set.
 */
export function TrustMarquee() {
  const half = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex w-max items-center gap-12 pr-12"
    >
      {MARQUEE_ITEMS.map((item) => (
        <li
          key={`${item}-${hidden ? "b" : "a"}`}
          className="flex items-center gap-12"
        >
          <span className="whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.24em] text-muted-foreground">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="size-1 rounded-full bg-gold/60"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="Unit dan pilar DIGIMAN"
      className="border-y border-border bg-secondary/30 py-6"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max">
          {half(false)}
          {half(true)}
        </div>
      </div>
    </section>
  );
}
