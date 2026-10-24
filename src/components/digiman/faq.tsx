"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

const WA_NUMBER = "6281316516524";

export default function Faq({ faqs }: { faqs: FaqItem[] }) {
  const { t } = useI18n();
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    t("faq.waPesan"),
  )}`;

  return (
    <section id="faq" className="section-padding relative py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-bright">
            {t("faq.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("faq.judulA")}{" "}
            <span className="gradient-text-emerald">{t("faq.judulB")}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-emerald-50/60 sm:text-base">
            {t("faq.sub")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass mb-3 rounded-xl border-emerald-400/15 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline hover:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-emerald-50/70">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA card */}
          <div className="glass-strong mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-white">
                {t("faq.ctaJudul")}
              </p>
              <p className="mt-1 text-sm text-emerald-50/60">
                {t("faq.ctaSub")}
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-amber-500 px-6 text-sm font-bold text-emerald-950 shadow-lg shadow-gold/25 transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t("faq.ctaBtn")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
