"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingWidgets({ waNumber }: { waNumber: string }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Halo DIGIMAN.ID! Saya ingin konsultasi."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            type="button"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="glass-strong flex h-11 w-11 items-center justify-center rounded-full text-emerald-50/80 transition-colors hover:text-gold"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp float */}
      <div className="flex items-center gap-3">
        <span className="glass-strong hidden rounded-full px-3 py-1.5 text-xs font-medium text-emerald-50/85 sm:block">
          Chat WhatsApp
        </span>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp DIGIMAN.ID"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 text-emerald-950 shadow-[0_0_30px_rgba(242,193,78,0.45)] transition-transform hover:scale-105"
        >
          <span
            className="animate-pulse-ring absolute inset-0 rounded-full bg-gold/50"
            aria-hidden="true"
          />
          <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
