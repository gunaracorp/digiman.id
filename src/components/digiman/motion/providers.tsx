"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion configuration.
 * `reducedMotion="user"` automatically disables transform/layout animations
 * for users with prefers-reduced-motion enabled (accessibility requirement).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
