"use client";

/**
 * Client Dashboard — primitif visual bersama.
 * DashCard  : kartu seksi bergaya glass + emas dengan animasi masuk halus
 *             (menghormati prefers-reduced-motion via framer-motion).
 * IconChip  : kotak ikon berwarna (tone emerald/gold/teal/red/muted).
 */

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type Tone = "emerald" | "gold" | "teal" | "red" | "muted";

export const TONE_CLASS: Record<Tone, string> = {
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-bright",
  gold: "border-gold/30 bg-gold/10 text-gold",
  teal: "border-teal-400/25 bg-teal-400/10 text-teal-300",
  red: "border-red-400/30 bg-red-400/10 text-red-300",
  muted: "border-border bg-secondary text-muted-foreground",
};

export function IconChip({
  icon: Icon,
  tone = "gold",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
        TONE_CLASS[tone],
        className,
      )}
    >
      <Icon className="h-4 w-4" />
    </span>
  );
}

type DashCardProps = {
  id?: string;
  icon: LucideIcon;
  title: string;
  desc?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export function DashCard({
  id,
  icon,
  title,
  desc,
  action,
  children,
  className,
  bodyClassName,
}: DashCardProps) {
  const reduce = useReducedMotion();
  return (
    <Card
      id={id}
      className={cn(
        "glass card-glow overflow-hidden border-emerald-400/15 bg-card/70 p-0",
        className,
      )}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-24px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex h-full flex-col p-4 md:p-6"
      >
        <header className="mb-4 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <IconChip icon={icon} />
            <div className="min-w-0">
              <h3 className="font-display truncate text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                {title}
              </h3>
              {desc ? (
                <p className="truncate text-xs text-muted-foreground">{desc}</p>
              ) : null}
            </div>
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </header>
        <div className={cn("min-h-0 flex-1", bodyClassName)}>{children}</div>
      </motion.div>
    </Card>
  );
}
