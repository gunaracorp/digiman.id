"use client";

type MarqueeProps = {
  items: string[];
};

/**
 * Dua baris marquee bertumpuk (baris kedua berjalan terbalik).
 * Konten diulang 3× per chunk, chunk diduplikasi tepat 2× agar
 * loop -50% mulus tanpa lompatan. Hover memause via .marquee-paused.
 */
export default function Marquee({ items }: MarqueeProps) {
  if (!items || items.length === 0) return null;

  const triple = [...items, ...items, ...items];

  const chunk = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {triple.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="font-display text-sm tracking-[0.2em] text-emerald-100/70 uppercase">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="mx-6 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-paused" aria-label="Keunggulan DIGIMAN.ID berjalan">
      {/* Baris 1 */}
      <div className="overflow-hidden border-y border-emerald-400/15 bg-surface/60 py-4">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {chunk(false)}
          {chunk(true)}
        </div>
      </div>
      {/* Baris 2 — arah sebaliknya */}
      <div className="overflow-hidden border-b border-emerald-400/15 bg-surface/60 py-4">
        <div className="animate-marquee-reverse flex w-max whitespace-nowrap">
          {chunk(false)}
          {chunk(true)}
        </div>
      </div>
    </div>
  );
}
