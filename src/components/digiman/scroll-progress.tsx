"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Bar progres scroll global — fixed di paling atas layar.
 * Gradien emas → emerald, memakai spring agar terasa premium & halus.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-gradient-to-r from-gold via-gold-light to-emerald-400"
      style={{ scaleX }}
    />
  );
}
