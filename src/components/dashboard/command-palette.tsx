"use client";

/**
 * Client Dashboard — F01 Command Palette (Ctrl+K / ⌘K).
 * cmdk di dalam Dialog: lompat seksi, aksi cepat & tautan eksternal.
 * Ekspor juga DASH_SECTIONS (meta navigasi) untuk sidebar & bottom-nav.
 */

import { useEffect } from "react";
import {
  Boxes,
  Globe,
  Languages,
  LayoutDashboard,
  Moon,
  Printer,
  ShieldCheck,
  Sun,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { useI18n } from "@/lib/i18n";

export type DashSection = { id: string; icon: LucideIcon; key: string };

/** Meta 6 seksi dashboard — dipakai sidebar, bottom-nav, scrollspy & palette. */
export const DASH_SECTIONS: DashSection[] = [
  { id: "dash-ringkasan", icon: LayoutDashboard, key: "dash.nav.ringkasan" },
  { id: "dash-progres", icon: TrendingUp, key: "dash.nav.progres" },
  { id: "dash-keuangan", icon: Wallet, key: "dash.nav.keuangan" },
  { id: "dash-kolaborasi", icon: Users, key: "dash.nav.kolaborasi" },
  { id: "dash-kualitas", icon: ShieldCheck, key: "dash.nav.kualitas" },
  { id: "dash-alat", icon: Wrench, key: "dash.nav.alat" },
];

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPrint: () => void;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  isLight: boolean;
};

export function CommandPalette({
  open,
  onOpenChange,
  onPrint,
  onToggleTheme,
  onToggleLanguage,
  isLight,
}: CommandPaletteProps) {
  const { t, locale, setLocale } = useI18n();

  // F01 — daftarkan/musnahkan listener pintasan global saat palette terpasang.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const run = (fn: () => void) => {
    onOpenChange(false);
    // Beri jeda agar dialog tertutup dulu sebelum aksi (fokus & scroll bersih).
    window.setTimeout(fn, 80);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("dash.palette.aria")}
      description={t("dash.palette.placeholder")}
    >
      <CommandInput placeholder={t("dash.palette.placeholder")} />
      <CommandList>
        <CommandEmpty>{t("dash.palette.empty")}</CommandEmpty>

        <CommandGroup heading={t("dash.palette.sections")}>
          {DASH_SECTIONS.map((section) => (
            <CommandItem
              key={section.id}
              value={`${section.id} ${t(section.key)}`}
              onSelect={() => run(() => scrollToSection(section.id))}
              className="gap-3"
            >
              <section.icon className="text-gold" aria-hidden="true" />
              <span>{t(section.key)}</span>
              <CommandShortcut>⏎</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading={t("dash.palette.actions")}>
          <CommandItem
            value="print laporan cetak report"
            onSelect={() => run(onPrint)}
            className="gap-3"
          >
            <Printer className="text-gold" aria-hidden="true" />
            <span>{t("dash.action.report")}</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem
            value="tema terang gelap theme light dark"
            onSelect={() => run(onToggleTheme)}
            className="gap-3"
          >
            {isLight ? <Sun className="text-gold" /> : <Moon className="text-gold" />}
            <span>{t("dash.palette.theme")}</span>
          </CommandItem>
          <CommandItem
            value="bahasa language id en english indonesia"
            onSelect={() => run(onToggleLanguage)}
            className="gap-3"
          >
            <Languages className="text-gold" aria-hidden="true" />
            <span>{t("dash.palette.language")}</span>
            <CommandShortcut>{locale.toUpperCase()}</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading={t("dash.palette.links")}>
          <CommandItem
            value="gunara os explorer dokumen"
            onSelect={() => run(() => (window.location.href = "/gunara-os"))}
            className="gap-3"
          >
            <Boxes className="text-gold" aria-hidden="true" />
            <span>{t("dash.action.os")}</span>
          </CommandItem>
          <CommandItem
            value="blog artikel berita"
            onSelect={() => run(() => (window.location.hash = "#route-blog"))}
            className="gap-3"
          >
            <Globe className="text-gold" aria-hidden="true" />
            <span>{t("dash.palette.blog")}</span>
          </CommandItem>
          <CommandItem
            value="beranda landing home situs"
            onSelect={() => run(() => (window.location.hash = "#route-"))}
            className="gap-3"
          >
            <Globe className="text-gold" aria-hidden="true" />
            <span>{t("dash.nav.backSite")}</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
