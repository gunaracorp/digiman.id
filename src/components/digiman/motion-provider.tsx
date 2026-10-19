"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * LazyMotion + domAnimation:
 * - Hanya memuat fitur animasi inti (tanpa layout projection/drag) — JS framer-motion
 *   turun drastis dibanding impor `motion` penuh.
 * - Semua komponen publik memakai `m` (bukan `motion`) — mode `strict` menjamin
 *   tidak ada komponen berat yang menyelinap masuk.
 * - MotionConfig reducedMotion="user": menghormati preferensi aksesibilitas
 *   "prefers-reduced-motion: reduce" — transform dimatikan, opacity dipertahankan.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
