"use client";

/**
 * DIGIMAN.ID — App Router (hash-based, single-route constraint).
 *
 * Rute:
 *   #/              → landing (semua seksi premium)
 *   #/dashboard     → Portal Klien / Client Dashboard (30 fitur premium)
 *   #/os            → Gunara OS Explorer (165 dokumen)
 *   #/blog          → indeks artikel
 *   #/blog/{slug}   → pembaca artikel
 *   #/proposal      → Proposal Studio (generator penawaran)
 *   #/admin         → panel admin
 *
 * Hash anchor biasa (#layanan, #faq, …) TIDAK diawali "#/" —
 * dibiarkan berperilaku native (scroll ke seksi landing).
 */

import { useEffect, useState } from "react";

import type {
  SiteSettings,
  ServiceItem,
  TestimonialItem,
  FaqItem,
  OfficeItem,
} from "@/lib/digiman-data";
import type { BlogCardData } from "@/lib/blog-types";
import type { GunaraPackageData } from "@/lib/gunara";

import { MotionProvider } from "@/components/digiman/motion-provider";
import ScrollProgress from "@/components/digiman/scroll-progress";
import Navbar from "@/components/digiman/navbar";
import Hero from "@/components/digiman/hero";
import Marquee from "@/components/digiman/marquee";
import SeoHub from "@/components/digiman/seo-hub";
import Stats from "@/components/digiman/stats";
import SevenHeavens from "@/components/digiman/seven-heavens";
import Services from "@/components/digiman/services";
import Paket from "@/components/digiman/paket";
import WhyUs from "@/components/digiman/why-us";
import Process from "@/components/digiman/process";
import Testimonials from "@/components/digiman/testimonials";
import Faq from "@/components/digiman/faq";
import CtaBand from "@/components/digiman/cta-band";
import Contact from "@/components/digiman/contact";
import Footer from "@/components/digiman/footer";
import FloatingWidgets from "@/components/digiman/floating-widgets";
import DigiAi from "@/components/digiman/digi-ai";

import OsTeaser from "@/components/gunara/os-teaser";
import OsExplorer from "@/components/gunara/os-explorer";
import BlogTeaser from "@/components/blog/blog-teaser";
import BlogIndex from "@/components/blog/blog-index";
import BlogReader from "@/components/blog/blog-reader";
import ProposalStudio from "@/components/proposal/proposal-studio";
import AdminApp from "@/components/admin/admin-app";
import ClientDashboard from "@/components/dashboard/client-dashboard";

export type AppRoute =
  | { view: "landing" }
  | { view: "dashboard" }
  | { view: "os" }
  | { view: "blog" }
  | { view: "blog-post"; slug: string }
  | { view: "proposal" }
  | { view: "admin" };

export function parseHash(rawHash: string): AppRoute {
  const h = (rawHash || "").replace(/^#/, "");
  // Anchor biasa (#layanan dst) atau kosong → landing.
  if (!h.startsWith("/")) return { view: "landing" };
  const parts = h
    .slice(1)
    .split("?")[0]
    .split("/")
    .filter(Boolean)
    .map(decodeURIComponent);
  if (parts[0] === "os") return { view: "os" };
  if (parts[0] === "dashboard") return { view: "dashboard" };
  if (parts[0] === "blog") {
    return parts[1] ? { view: "blog-post", slug: parts[1] } : { view: "blog" };
  }
  if (parts[0] === "proposal") return { view: "proposal" };
  if (parts[0] === "admin") return { view: "admin" };
  return { view: "landing" };
}

export type RouterProps = {
  settings: SiteSettings;
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  offices: OfficeItem[];
  blogPosts: BlogCardData[];
  packages: GunaraPackageData[];
  domainCount: number;
  docCount: number;
};

/** Hook rute hash — SSR-safe (render awal selalu landing, lalu sinkron di effect). */
function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>({ view: "landing" });

  useEffect(() => {
    const sync = () => setRoute(parseHash(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return route;
}

export default function AppRouter(props: RouterProps) {
  const route = useHashRoute();
  const viewKey =
    route.view === "blog-post" ? `blog-post:${route.slug}` : route.view;

  // Pindah view (bukan anchor) → kembali ke atas.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewKey]);

  return (
    <MotionProvider>
      {route.view === "landing" ? (
        <LandingView {...props} />
      ) : (
        <div className="min-h-screen bg-night text-foreground">
          {route.view === "dashboard" && <ClientDashboard />}
          {route.view === "os" && <OsExplorer />}
          {route.view === "blog" && <BlogIndex />}
          {route.view === "blog-post" && (
            <BlogReader key={route.slug} slug={route.slug} />
          )}
          {route.view === "proposal" && <ProposalStudio />}
          {route.view === "admin" && <AdminApp />}
        </div>
      )}
    </MotionProvider>
  );
}

/** Pengalaman landing lengkap (server data lewat props). */
function LandingView({
  settings,
  services,
  testimonials,
  faqs,
  offices,
  blogPosts,
  packages,
  domainCount,
  docCount,
}: RouterProps) {
  const marqueeItems = [
    ...services.slice(0, 14).map((s) => s.title),
    "Garansi Terbit",
    "100% Online",
    "46 Dewan Pakar",
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-night text-foreground">
      <ScrollProgress />
      <Navbar waNumber={settings.waNumber} />

      <main className="flex-1">
        <Hero settings={settings} />
        <Marquee items={marqueeItems} />
        <Stats
          clients={settings.statClients}
          experts={settings.statExperts}
          layers={settings.statLayers}
          success={settings.statSuccess}
        />
        <SevenHeavens />
        <Services services={services} />
        <Paket waNumber={settings.waNumber} />
        <OsTeaser
          packages={packages}
          domainCount={domainCount}
          docCount={docCount}
        />
        <WhyUs />
        <Process />
        <Testimonials testimonials={testimonials} />
        <BlogTeaser posts={blogPosts} />
        <Faq faqs={faqs} />
        <SeoHub />
        <CtaBand waNumber={settings.waNumber} />
        <Contact offices={offices} settings={settings} services={services} />
      </main>

      <Footer settings={settings} />
      <FloatingWidgets waNumber={settings.waNumber} />
      <DigiAi />
    </div>
  );
}
