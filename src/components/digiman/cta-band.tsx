"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function CtaBand({ waNumber }: { waNumber: string }) {
  const { t } = useI18n();
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    t("ctaband.waPesan"),
  )}`;

  return (
    <section className="noise-overlay relative overflow-hidden py-20">
      {/* Artwork background */}
      <Image
        src="/cta-artwork.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-padding relative z-10 mx-auto max-w-4xl text-center"
      >
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {t("ctaband.judulA")}{" "}
          <span className="gradient-text-gold">{t("ctaband.judulB")}</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-emerald-50/65 sm:text-base">
          {t("ctaband.sub")}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-amber-500 px-7 text-sm font-bold text-emerald-950 shadow-xl shadow-gold/25 transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t("ctaband.btnWa")}
          </a>
          <a
            href="#paket"
            className="glass inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white transition hover:bg-white/[0.04]"
          >
            {t("ctaband.btnPaket")}
            <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
          </a>
        </div>

        <p className="mt-7 text-xs text-emerald-50/50">
          {t("ctaband.trust1")} <span className="mx-1.5 text-gold">•</span>{" "}
          {t("ctaband.trust2")} <span className="mx-1.5 text-gold">•</span>{" "}
          {t("ctaband.trust3")}
        </p>
      </motion.div>
    </section>
  );
}
