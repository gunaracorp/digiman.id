"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  type LucideIcon,
  Archive,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Building,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Copyright,
  FileBadge,
  FileCheck2,
  FileSignature,
  FileText,
  Flag,
  Globe2,
  GraduationCap,
  HardHat,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Lightbulb,
  MapPin,
  Medal,
  Network,
  Plane,
  Receipt,
  Rocket,
  ScrollText,
  ShieldPlus,
  ShieldCheck,
  Ship,
  Sparkles,
  Stamp,
  Star,
  Store,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
  Sprout,
  Wind,
  Earth,
  Boxes,
  House,
  Gem,
  Package,
  Banknote,
  Trees,
  Heart,
  Presentation,
  Percent,
  Folder,
  Coins,
  Landmark,
  Atom,
  Crown,
  Shuffle,
  Wallet,
  Repeat,
  Layers,
  Files,
  Briefcase,
  Merge,
  Split,
  Home,
  Baby,
  FolderOpen,
  Target,
  Compass,
  Globe,
  Languages,
  Signpost,
  Anchor,
  Warehouse,
  Sigma,
  Route,
  ShieldHalf,
  Wheat,
  Trophy,
  Fingerprint,
  UserCog,
  Server,
  Bug,
  Siren,
  Radar,
  Brain,
  Lock,
  BarChart3,
  ShoppingCart,
  Film,
  Ticket,
  Ruler,
  Music,
  Book,
  Gamepad2,
  Newspaper,
  Sparkle,
  Mic,
  Clapperboard,
  Pill,
  Stethoscope,
  Apple,
  Syringe,
  FlaskConical,
  Salad,
  Ambulance,
  LifeBuoy,
  Microscope,
  ScanLine,
  Map,
  Footprints,
  Palmtree,
  Sofa,
  Train,
  Wifi,
  Factory,
  Gavel,
  Mountain,
  Power,
  GitBranch,
  Hash,
  BookText,
  BookOpen,
  Replace,
  DoorOpen,
  Users2,
  ShieldAlert,
  TrendingUp,
  Laptop,
  Umbrella,
  Binary,
  AlarmClock,
  Plug,
  Eye,
  Crosshair,
  Vote,
  HandCoins,
  Link as LinkIcon,
  ThumbsUp,
  CalendarCheck,
  MessagesSquare,
  PackageCheck,
  Fish,
  Beef,
  Droplets,
  Luggage,
  Scale,
  MapPinned,
  Biohazard,
} from "lucide-react";
import { SERVICE_CATEGORIES, type ServiceItem } from "@/lib/digiman-data";
import { useI18n } from "@/lib/i18n";

const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  FileBadge,
  Users,
  Store,
  Handshake,
  HeartHandshake,
  Network,
  Fingerprint,
  Rocket,
  CalendarCheck,
  MessagesSquare,
  PackageCheck,
  Trophy,
  LifeBuoy,
  Leaf,
  Fish,
  Sprout,
  Beef,
  Trees,
  Droplets,
  Apple,
  Luggage,
  Landmark,
  Scale,
  MapPinned,
  Siren,
  Biohazard,
  HardHat,
  Stamp,
  FileCheck2,
  MapPin,
  FileSignature,
  Lightbulb,
  Copyright,
  ScrollText,
  BadgeCheck,
  ShieldCheck,
  Award,
  Medal,
  Receipt,
  Calculator,
  HeartPulse,
  Plane,
  FileText,
  Archive,
  Building,
  Ship,
  Truck,
  ShieldPlus,
  GraduationCap,
  UserCheck,
  ClipboardCheck,
  UtensilsCrossed,
  Flag,
  Wind,
  Earth,
  Boxes,
  House,
  Gem,
  Presentation,
  Percent,
  Folder,
  Coins,
  Atom,
  Crown,
  Shuffle,
  Wallet,
  Repeat,
  Layers,
  Files,
  Briefcase,
  Merge,
  Split,
  Home,
  Baby,
  FolderOpen,
  Target,
  Compass,
  Globe,
  Languages,
  Signpost,
  Anchor,
  Warehouse,
  Sigma,
  Route,
  ShieldHalf,
  Wheat,
  UserCog,
  Server,
  Bug,
  Radar,
  Brain,
  Lock,
  BarChart3,
  ShoppingCart,
  Film,
  Ticket,
  Ruler,
  Music,
  Book,
  Gamepad2,
  Newspaper,
  Sparkle,
  Mic,
  Clapperboard,
  Pill,
  Stethoscope,
  Syringe,
  FlaskConical,
  Salad,
  Ambulance,
  Microscope,
  ScanLine,
  Map,
  Footprints,
  Palmtree,
  Sofa,
  Train,
  Wifi,
  Factory,
  Gavel,
  Mountain,
  Power,
  GitBranch,
  Hash,
  BookText,
  BookOpen,
  Replace,
  DoorOpen,
  Users2,
  ShieldAlert,
  TrendingUp,
  Laptop,
  Umbrella,
  Binary,
  AlarmClock,
  Plug,
  Eye,
  Crosshair,
  Vote,
  HandCoins,
  Link: LinkIcon,
  ThumbsUp,
};

const FALLBACK_ICON = Sparkles;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Services({ services }: { services: ServiceItem[] }) {
  const { t } = useI18n();
  const [active, setActive] = useState("semua");

  const filtered = useMemo(
    () => (active === "semua" ? services : services.filter((s) => s.category === active)),
    [active, services],
  );

  const countFor = (key: string) =>
    key === "semua" ? services.length : services.filter((s) => s.category === key).length;

  return (
    <section
      id="layanan"
      aria-label={t("services.ariaLabel")}
      className="section-padding relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-gold inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t("services.kicker")}
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("services.judulPre")}{" "}
            <span className="gradient-text-emerald">
              {t("services.judulA")} {t("services.judulB")}
            </span>{" "}
            {t("services.judulPost")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/60">
            {t("services.sub")}
          </p>
        </motion.div>

        {/* Filter kategori */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          aria-label={t("services.filterAria")}
          className="mt-10 flex gap-2.5 overflow-x-auto pb-3 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
        >
          {SERVICE_CATEGORIES.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(c.key)}
                className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-400 to-teal-500 font-semibold text-emerald-950 shadow-[0_8px_24px_-8px_rgba(52,211,153,0.65)]"
                    : "glass text-emerald-50/70 hover:border-emerald-400/40 hover:text-white"
                }`}
              >
                {c.key === "semua" ? t("services.semuaKategori") : c.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                    isActive ? "bg-emerald-950/25 text-emerald-950" : "bg-emerald-400/10 text-emerald-300"
                  }`}
                >
                  {countFor(c.key)}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid layanan */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => {
              const Icon = ICON_MAP[s.icon] ?? FALLBACK_ICON;
              const waLink = `https://wa.me/6281316516524?text=${encodeURIComponent(
                t("services.waPesan", { title: s.title }),
              )}`;
              return (
                <motion.div
                  layout
                  key={s.slug ?? s.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: EASE, delay: i * 0.04 }}
                  className="glass card-glow relative flex flex-col rounded-2xl p-6"
                >
                  {s.featured && (
                    <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-950 shadow-[0_4px_16px_-4px_rgba(242,193,78,0.8)]">
                      <Star className="h-3 w-3 fill-current" aria-hidden />
                      {t("services.favorit")}
                    </span>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/30 to-teal-600/15 ring-1 ring-emerald-400/40">
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>

                  <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-emerald-50/60">{s.desc}</p>

                  <ul className="mt-3 space-y-1.5">
                    {s.items.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-emerald-50/70">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <p className="text-gold text-lg font-bold">{s.price}</p>
                    {/* Link internal ke halaman detail nyata — link equity ke /layanan/{slug} */}
                    {s.slug && (
                      <Link
                        href={`/layanan/${s.slug}`}
                        aria-label={`Detail layanan ${s.title}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-50/50 transition-colors hover:text-gold"
                      >
                        Detail
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    )}
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("services.ctaAria", { title: s.title })}
                    className="text-gold hover:text-gold-light mt-2 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
                  >
                    {t("services.konsultasi")}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
