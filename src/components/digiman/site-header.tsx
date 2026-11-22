"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/content/holding";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Logo DIGIMAN.ID"
    >
      <rect width="32" height="32" rx="7" className="fill-card" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 20.5 L16 24.5 L24 20.5" />
        <path d="M8 15.5 L16 19.5 L24 15.5" />
        <path d="M8 10.5 L16 14.5 L24 10.5" opacity="0.5" />
      </g>
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          aria-label="DIGIMAN.ID — kembali ke beranda"
        >
          <LogoMark className="size-8 text-gold" />
          <span className="text-[17px] font-semibold tracking-tight">
            DIGIMAN
            <span className="text-gold">.ID</span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-9 rounded-full px-5 text-sm font-medium"
          >
            <a href="#kontak">Hubungi Kami</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-11 rounded-full lg:hidden"
              aria-label="Buka menu navigasi"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            aria-describedby={undefined}
            className="w-[300px] border-border bg-background"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-base font-semibold tracking-tight">
                DIGIMAN<span className="text-gold">.ID</span>
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Navigasi seluler" className="px-4">
              <ul className="flex flex-col gap-1">
                {[...NAV_ITEMS, { href: "#karier", label: "Karier" }, { href: "#kontak", label: "Kontak" }].map(
                  (item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  )
                )}
              </ul>
              <SheetClose asChild>
                <Button asChild className="mt-6 h-11 w-full rounded-full">
                  <a href="#kontak">Hubungi Kami</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export { LogoMark };
