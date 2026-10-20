/* ────────────────────────────────────────────────────────────
   Proposal Studio — tipe view bersama + normalizer data /api/gunara
   (dipakai lintas file di folder components/proposal)
   ──────────────────────────────────────────────────────────── */

import type { Addon, TierBreakdown } from "@/lib/proposal-calc";

export type GunaraPackageView = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  docCount: number;
  price: number;
  durationWeeks: string;
  features: string[];
  documentCodes: string[];
  highlight: boolean;
};

export type PgaDocView = {
  code: string;
  title: string;
  tier: string;
  owner: string;
  domainNumber: number;
};

export type PgaDomainView = {
  number: number;
  name: string;
  tagline: string;
  description: string;
};

export type GunaraData = {
  packages: GunaraPackageView[];
  domains: PgaDomainView[];
  docs: PgaDocView[];
};

export type ClientFormState = {
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientWa: string;
  notes: string;
};

export type ClientFormErrors = Partial<Record<keyof ClientFormState, string>>;

/** Ringkasan kalkulasi (subset ProposalCalc — dipakai step 2/3 sebelum tersimpan). */
export type CalcSummary = {
  packageLabel: string;
  docCount: number;
  unitPrice: number;
  subtotal: number;
  discountPct: number;
  discount: number;
  addonTotal: number;
  total: number;
  durationLabel: string;
  tierBreakdown: TierBreakdown[];
  addons: Addon[];
};

export type PreviewModel = CalcSummary & {
  code: string;
  createdAt: string;
  validUntil: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientWa: string;
  packageCode: string;
  notes: string;
};

/* ─── Chip warna tier (P0 emerald, P1 teal, P2 amber, P3 gold) ─── */

const TIER_CHIP: Record<string, string> = {
  P0: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  P1: "border-teal-400/40 bg-teal-400/10 text-teal-300",
  P2: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  P3: "border-gold/45 bg-gold/10 text-gold",
};

export function tierChipClass(tier: string): string {
  return TIER_CHIP[tier.slice(0, 2).toUpperCase()] ?? "border-white/15 bg-white/5 text-emerald-50/70";
}

export const TIER_FILTERS: { key: string; label: string }[] = [
  { key: "P0", label: "P0 Navigasi" },
  { key: "P1", label: "P1 Pertumbuhan" },
  { key: "P2", label: "P2 Perluasan" },
  { key: "P3", label: "P3 Warisan" },
];

/* ─── Normalizer response /api/gunara (defensif terhadap bentuk data) ─── */

function asRecord(v: unknown): Record<string, unknown> {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : {};
}

function asArray(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function toStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map(String);
  if (typeof v === "string") {
    try {
      const p = JSON.parse(v) as unknown;
      return Array.isArray(p) ? p.map(String) : [];
    } catch {
      return [];
    }
  }
  return [];
}

function toNumber(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

/**
 * Menormalkan response GET /api/gunara menjadi GunaraData.
 * Mengembalikan null bila packages tidak tersedia (dianggap gagal muat).
 * Docs diambil dari root `docs`, atau di-flatten dari `domains[].docs`.
 */
export function normalizeGunara(raw: unknown): GunaraData | null {
  const root = asRecord(raw);

  let rawDocs = asArray(root.docs);
  const rawDomains = asArray(root.domains);
  if (rawDocs.length === 0) {
    for (const d of rawDomains) rawDocs = rawDocs.concat(asArray(asRecord(d).docs));
  }

  const packages: GunaraPackageView[] = asArray(root.packages)
    .map((p): GunaraPackageView => {
      const r = asRecord(p);
      return {
        code: String(r.code ?? ""),
        name: String(r.name ?? ""),
        tagline: String(r.tagline ?? ""),
        description: String(r.description ?? ""),
        docCount: toNumber(r.docCount),
        price: toNumber(r.price),
        durationWeeks: String(r.durationWeeks ?? ""),
        features: toStringArray(r.features),
        documentCodes: toStringArray(r.documentCodes),
        highlight: Boolean(r.highlight),
      };
    })
    .filter((p) => p.code);

  if (packages.length === 0) return null;

  const domains: PgaDomainView[] = rawDomains
    .map((d): PgaDomainView => {
      const r = asRecord(d);
      return {
        number: toNumber(r.number),
        name: String(r.name ?? ""),
        tagline: String(r.tagline ?? ""),
        description: String(r.description ?? ""),
      };
    })
    .filter((d) => d.name);

  const docs: PgaDocView[] = rawDocs
    .map((doc): PgaDocView => {
      const r = asRecord(doc);
      return {
        code: String(r.code ?? ""),
        title: String(r.title ?? ""),
        tier: String(r.tier ?? ""),
        owner: String(r.owner ?? ""),
        domainNumber: toNumber(r.domainNumber),
      };
    })
    .filter((d) => d.code);

  return { packages, domains, docs };
}

/* ─── Format tanggal id-ID ─── */

const DATE_FMT = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function fmtDateId(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return DATE_FMT.format(d);
}
