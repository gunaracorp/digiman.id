"use client";

/**
 * DIGIMAN.ID — App Router (hash-based, single-route constraint).
 *
 * Rute:
 *   #/              → landing (semua seksi premium)
 *   #/dashboard     → Portal Klien / Client Dashboard (30 fitur premium)
 *   /gunara-os      → Gunara OS Explorer (165 dokumen)
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
} from "@/lib/digiman-data";
import type { SectionRow, OfficeItem } from "@/lib/site-data";
import type { TeamMemberItem } from "@/components/digiman/team-structure";
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
import Legacy from "@/components/digiman/legacy";
import Holding from "@/components/digiman/holding";
import Process from "@/components/digiman/process";
import Testimonials from "@/components/digiman/testimonials";
import TeamStructure from "@/components/digiman/team-structure";
import Offices from "@/components/digiman/offices";
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
import ClientDashboard from "@/components/dashboard/client-dashboard";

export type AppRoute =
  | { view: "landing" }
  | { view: "dashboard" }
  | { view: "os" }
  | { view: "blog" }
  | { view: "blog-post"; slug: string }
  | { view: "proposal" };

export function parseHash(rawHash: string): AppRoute {
  const h = (rawHash || "").replace(/^#/, "");
  // Anchor biasa (#layanan dst) atau kosong → landing.
  const routeHash = h.startsWith("route-") ? `/${h.slice("route-".length)}` : h;
  if (!routeHash.startsWith("/")) return { view: "landing" };
  const parts = routeHash
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
  team: TeamMemberItem[];
  sections: SectionRow[];
};

/** Hook rute hash — SSR-safe (render awal selalu landing, lalu sinkron di effect). */
function parsePathname(pathname: string): AppRoute {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/gunara-os") return { view: "os" };
  if (path === "/dashboard") return { view: "dashboard" };
  if (path === "/blog") return { view: "blog" };
  if (path.startsWith("/blog/")) {
    return { view: "blog-post", slug: decodeURIComponent(path.slice("/blog/".length)) };
  }
  if (path === "/proposal") return { view: "proposal" };
  return { view: "landing" };
}

function useHashRoute(): AppRoute {
  // Keep the first client render identical to SSR. Browser URL state is
  // synchronized immediately after hydration to avoid rendering a different
  // view before React attaches to the server HTML.
  const [route, setRoute] = useState<AppRoute>({ view: "landing" });

  useEffect(() => {
    const sync = () => {
      const { pathname, hash } = window.location;
      const pathnameRoute = parsePathname(pathname);
      // Pada view-route non-landing (/proposal, /dashboard), tautan hash
      // "#/blog" dst. dinavigasikan sebagai path biasa agar tidak buntu.
      if (pathnameRoute.view !== "landing" && hash.startsWith("#/")) {
        const sameView =
          ("/" + (hash.slice(2).split("/")[0] ?? "")) ===
          (pathname.replace(/\/$/, ""));
        if (!sameView) {
          window.location.assign(hash.slice(1));
          return;
        }
      }
      setRoute(pathnameRoute.view === "landing" ? parseHash(hash) : pathnameRoute);
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
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
        </div>
      )}
    </MotionProvider>
  );
}

/** Pengalaman landing lengkap (server data lewat props).
 * Urutan & visibilitas section mengikuti konfigurasi Panel Admin (/admin/tampilan)
 * — fallback ke urutan default bila konfigurasi kosong. */
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
  team,
  sections,
}: RouterProps) {
  const marqueeItems = [
    ...services.slice(0, 14).map((s) => s.title),
    "Garansi Terbit",
    "100% Online",
    "46 Dewan Pakar",
  ];

  const officesOrdered = [...offices].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const officesEnabled = sections.some((s) => s.key === "offices" && s.enabled);

  // Peta key → komponen section (kontrak sama dengan /api/admin/sections)
  const sectionByKey: Record<string, React.ReactNode> = {
    hero: <Hero settings={settings} />,
    marquee: <Marquee items={marqueeItems} />,
    stats: (
      <Stats
        clients={settings.statClients}
        experts={settings.statExperts}
        layers={settings.statLayers}
        success={settings.statSuccess}
      />
    ),
    "seven-heavens": <SevenHeavens />,
    services: <Services services={services} />,
    paket: <Paket waNumber={settings.waNumber} />,
    "os-teaser": (
      <OsTeaser packages={packages} domainCount={domainCount} docCount={docCount} />
    ),
    "why-us": <WhyUs />,
    team: <TeamStructure members={team} />,
    legacy: <Legacy />,
    holding: <Holding />,
    process: <Process />,
    testimonials: <Testimonials testimonials={testimonials} />,
    artikel: <BlogTeaser posts={blogPosts} />,
    faq: <Faq faqs={faqs} />,
    "seo-hub": <SeoHub />,
    cta: <CtaBand waNumber={settings.waNumber} />,
    offices: (
      <Offices
        offices={officesOrdered}
        waDisplay={settings.waDisplay}
        hours={settings.hours}
        waNumber={settings.waNumber}
      />
    ),
    "contact-form": (
      <Contact
        offices={offices}
        settings={settings}
        services={services}
        showOfficeList={!officesEnabled}
      />
    ),
  };

  const ordered = (sections.length > 0
    ? sections
    : FALLBACK_SECTIONS.map((key, i) => ({ key, label: key, enabled: true, order: i }))
  )
    .filter((s) => s.enabled && sectionByKey[s.key])
    .sort((a, b) => a.order - b.order)
    .map((s) => <div key={s.key}>{sectionByKey[s.key]}</div>);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-night text-foreground">
      <ScrollProgress />
      <Navbar waNumber={settings.waNumber} />

      <main className="flex-1">{ordered}</main>

      <Footer settings={settings} />
      <FloatingWidgets waNumber={settings.waNumber} />
      <DigiAi />
    </div>
  );
}

/** Urutan default bila SectionConfig kosong — sama dengan DEFAULT_SECTIONS (site-data). */
const FALLBACK_SECTIONS = [
  "hero",
  "marquee",
  "stats",
  "seven-heavens",
  "services",
  "paket",
  "os-teaser",
  "why-us",
  "team",
  "legacy",
  "holding",
  "process",
  "testimonials",
  "artikel",
  "faq",
  "seo-hub",
  "cta",
  "offices",
  "contact-form",
];
