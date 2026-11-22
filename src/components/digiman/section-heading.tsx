import { cn } from "@/lib/utils";
import { Reveal } from "@/components/digiman/motion/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "paper";
  id?: string;
  className?: string;
};

/**
 * Shared section header: mono eyebrow, serif display title, muted description.
 * `tone="paper"` adapts colors for the light interlude section.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow", tone === "paper" && "text-[#8a6d2f]")}>
        <span
          aria-hidden="true"
          className={cn(
            "mr-3 inline-block h-px w-8 translate-y-[-3px] bg-gold",
            align === "center" && "hidden"
          )}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl",
          tone === "paper" ? "text-ink" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "paper" ? "paper-muted" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
