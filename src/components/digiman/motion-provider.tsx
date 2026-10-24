"use client";

import { MotionConfig } from "framer-motion";

/** Wrapper client untuk MotionConfig — hormati preferensi reduced-motion pengguna OS */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
