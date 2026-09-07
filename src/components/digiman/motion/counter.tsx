"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

type CounterProps = {
  to: number;
  className?: string;
  duration?: number;
};

/**
 * Animated metric counter that counts up when scrolled into view.
 * Falls back to a static number when reduced motion is requested
 * (handled by MotionConfig) and renders value directly for crawlers.
 */
export function Counter({ to, className, duration = 1.4 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, to, count, duration]);

  return (
    <motion.span ref={ref} className={className} aria-label={String(to)}>
      {rounded}
    </motion.span>
  );
}
