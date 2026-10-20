"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "@/components/digiman/language-toggle";

type NavbarProps = {
  waNumber: string;
};

type NavLink = { href: string; key: string };

// Gabungan anchor landing (#…) dan rute aplikasi (#/…).
const NAV_LINKS: NavLink[] = [
  { href: "#beranda", key: "nav.beranda" },
  { href: "#tujuh-langit", key: "nav.tujuhLangit" },
  { href: "#layanan", key: "nav.layanan" },
  { href: "#paket", key: "nav.paket" },
  { href: "#/os", key: "nav.gunaraOs" },
  { href: "#/blog", key: "nav.blog" },
  { href: "#faq", key: "nav.faq" },
  { href: "#kontak", key: "nav.kontak" },
];

const SECTION_IDS = ["beranda", "tujuh-langit", "layanan", "paket", "faq", "kontak"];

export function waLink(waNumber: string, message?: string) {
  const text =
    message ??
    "Halo DIGIMAN.ID, saya ingin konsultasi gratis mengenai legalitas bisnis.";
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
}

export default function Navbar({ waNumber }: NavbarProps) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("beranda");

  // Latar navbar berubah setelah melewati 24px scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lacak section aktif via IntersectionObserver (sederhana & tahan banting).
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const ctaHref = waLink(waNumber);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass-strong border-b border-emerald-400/20 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.85)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="section-padding mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 md:h-20"
      >
        {/* Logo */}
        <a
          href="#beranda"
          className="flex shrink-0 items-center gap-3"
          aria-label="DIGIMAN.ID — kembali ke beranda"
        >
          <Image
            src="/logo-emblem.png"
            alt="Logo DIGIMAN.ID"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wide text-white">
              DIGIMAN<span className="text-gold">.ID</span>
            </span>
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.18em] text-emerald-100/50 sm:block">
              PT Digital Bisnis Manajemen
            </span>
          </span>
        </a>

        {/* Link desktop */}
        <ul className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={
                  active === link.href.slice(1) ? "true" : undefined
                }
                className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  active === link.href.slice(1)
                    ? "text-gold"
                    : "text-emerald-50/80"
                }`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Aksi desktop */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="shimmer-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 px-5 py-2.5 text-sm font-bold text-emerald-950 shadow-[0_0_35px_-10px_rgba(242,193,78,0.6)] transition-transform duration-300 hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t("common.konsultasiGratis")}
          </a>
        </div>

        {/* Hamburger mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Buka menu navigasi"
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl text-emerald-50 transition-colors hover:text-gold"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="glass-strong w-[300px] border-l border-emerald-400/25 p-0"
            >
              <SheetTitle className="sr-only">Menu Navigasi DIGIMAN.ID</SheetTitle>
              <SheetDescription className="sr-only">
                Jelajahi bagian-bagian utama website DIGIMAN.ID
              </SheetDescription>
              <div className="flex h-full flex-col px-6 pb-8 pt-8">
                <div className="flex items-center gap-3 border-b border-emerald-400/15 pb-5">
                  <Image
                    src="/logo-emblem.png"
                    alt="Logo DIGIMAN.ID"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full"
                  />
                  <span className="font-display text-base font-bold tracking-wide text-white">
                    DIGIMAN<span className="text-gold">.ID</span>
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-emerald-400/10 hover:text-gold ${
                            active === link.href.slice(1)
                              ? "text-gold"
                              : "text-emerald-50/85"
                          }`}
                        >
                          {t(link.key)}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-4 pt-6">
                  <div className="flex items-center justify-between rounded-xl border border-emerald-400/15 px-4 py-2">
                    <span className="text-xs font-medium uppercase tracking-widest text-emerald-100/50">
                      {t("common.bahasa")}
                    </span>
                    <LanguageToggle />
                  </div>
                  <SheetClose asChild>
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="shimmer-btn flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 px-5 py-3 text-sm font-bold text-emerald-950"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {t("common.konsultasiGratis")}
                    </a>
                  </SheetClose>
                  <p className="text-center text-xs text-emerald-100/40">
                    Senin–Jumat 09.00–17.00 WIB
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
