"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Loader2, LogOut } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLogin from "./admin-login";
import AdminOverview from "./admin-overview";
import AdminMessages from "./admin-messages";
import AdminProposals from "./admin-proposals";
import AdminBlog from "./admin-blog";
import { AdminFaqs, AdminServices, AdminTestimonials } from "./admin-content";
import AdminPackages from "./admin-packages";
import AdminSettings from "./admin-settings";

type AuthStatus = "checking" | "authed" | "guest";

const TABS = [
  { value: "ringkasan", label: "Ringkasan" },
  { value: "pesan", label: "Pesan" },
  { value: "penawaran", label: "Penawaran" },
  { value: "blog", label: "Blog" },
  { value: "layanan", label: "Layanan" },
  { value: "testimoni", label: "Testimoni" },
  { value: "faq", label: "FAQ" },
  { value: "paket", label: "Paket" },
  { value: "pengaturan", label: "Pengaturan" },
] as const;

/**
 * Panel Admin digiman.id — full-page view untuk hash #route-admin.
 * Tanpa props: cek sesi sendiri via GET /api/admin/auth.
 */
export default function AdminApp() {
  const [status, setStatus] = useState<AuthStatus>("checking");
  const [tab, setTab] = useState<string>("ringkasan");

  useEffect(() => {
    let alive = true;
    fetch("/api/admin/auth", { cache: "no-store" })
      .then((r) => r.json())
      .then((d: { authenticated?: boolean } | null) => {
        if (alive) setStatus(d?.authenticated ? "authed" : "guest");
      })
      .catch(() => {
        if (alive) setStatus("guest");
      });
    return () => {
      alive = false;
    };
  }, []);

  const handleUnauthorized = useCallback(() => setStatus("guest"), []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
    } catch {
      /* tetap keluar di sisi klien */
    }
    setStatus("guest");
    toast({ title: "Berhasil keluar.", description: "Sesi admin ditutup." });
  }, []);

  if (status === "checking") {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background"
        role="status"
        aria-live="polite"
      >
        <Loader2 className="h-8 w-8 animate-spin text-gold" aria-hidden="true" />
        <p className="text-sm text-emerald-50/60">Memeriksa sesi admin…</p>
      </div>
    );
  }

  if (status === "guest") {
    return <AdminLogin onSuccess={() => setStatus("authed")} />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <div aria-hidden="true" className="starfield pointer-events-none absolute inset-0 opacity-25" />
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />

      <main className="section-padding relative mx-auto w-full max-w-7xl py-8 sm:py-10">
        {/* ── Header ── */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-emblem.png"
              alt="Logo emblem DIGIMAN.ID"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <div>
              <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Dashboard{" "}
                <span className="gradient-text-gold">Gunara</span>
              </h1>
              <p className="mt-0.5 text-xs text-emerald-50/55 sm:text-sm">
                Kelola konten &amp; interaksi digiman.id
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="border-emerald-400/25 bg-white/[0.03] hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
            >
              <a href="/#route-" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Lihat Situs
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={logout}
              className="border-red-400/25 bg-white/[0.03] text-red-300 hover:bg-red-400/10 hover:text-red-200"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Keluar
            </Button>
          </div>
        </header>

        {/* ── Tabs ── */}
        <Tabs value={tab} onValueChange={setTab} className="mt-6">
          <div className="overflow-x-auto pb-1">
            <TabsList className="glass h-auto w-max justify-start gap-1 rounded-xl p-1.5">
              {TABS.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-50/60 data-[state=active]:bg-gold/15 data-[state=active]:text-gold data-[state=active]:shadow-none"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="ringkasan" className="mt-6">
            <AdminOverview
              onNavigate={setTab}
              onUnauthorized={handleUnauthorized}
            />
          </TabsContent>
          <TabsContent value="pesan" className="mt-6">
            <AdminMessages onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="penawaran" className="mt-6">
            <AdminProposals onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="blog" className="mt-6">
            <AdminBlog onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="layanan" className="mt-6">
            <AdminServices onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="testimoni" className="mt-6">
            <AdminTestimonials onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="faq" className="mt-6">
            <AdminFaqs onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="paket" className="mt-6">
            <AdminPackages onUnauthorized={handleUnauthorized} />
          </TabsContent>
          <TabsContent value="pengaturan" className="mt-6">
            <AdminSettings onUnauthorized={handleUnauthorized} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
