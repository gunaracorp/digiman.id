import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";

/* ────────────────── fetch helpers (401-aware) ────────────────── */

/** dilempar saat /api/admin/* balas 401 → pemanggil harus kembali ke login. */
export class UnauthorizedError extends Error {
  constructor() {
    super("Sesi berakhir — silakan masuk kembali.");
    this.name = "UnauthorizedError";
  }
}

/** fetch relatif + no-store; 401 otomatis jadi UnauthorizedError. */
export async function adminFetch(
  url: string,
  init?: RequestInit,
): Promise<Response> {
  const res = await fetch(url, { cache: "no-store", ...init });
  if (res.status === 401) throw new UnauthorizedError();
  return res;
}

export async function adminJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await adminFetch(url, init);
  const data = (await res.json().catch(() => null)) as unknown;
  if (!res.ok) {
    const msg =
      (data as { error?: string } | null)?.error ??
      `Permintaan gagal (HTTP ${res.status}).`;
    throw new Error(msg);
  }
  return data as T;
}

/** Error handler bersama untuk semua mutasi admin. */
export function handleAdminError(
  e: unknown,
  onUnauthorized: () => void,
  fallback = "Aksi gagal. Coba lagi.",
) {
  if (e instanceof UnauthorizedError) {
    onUnauthorized();
    return;
  }
  toast({
    title: "Gagal",
    description: e instanceof Error ? e.message : fallback,
    variant: "destructive",
  });
}

/* ────────────────── data hook ────────────────── */

type AdminDataState<T> = { data: T | null; error: string | null; done: string | null };

/**
 * Hook data admin: fetch + loading + error + reload manual.
 * 401 otomatis memicu onUnauthorized (kembali ke layar login).
 */
export function useAdminData<T>(
  url: string,
  onUnauthorized: () => void,
): { data: T | null; loading: boolean; error: string | null; reload: () => void } {
  const [state, setState] = useState<AdminDataState<T>>({
    data: null,
    error: null,
    done: null,
  });
  const [tick, setTick] = useState(0);
  const key = `${url}#${tick}`;
  const loading = state.done !== key;

  const unauthRef = useRef(onUnauthorized);
  useEffect(() => {
    unauthRef.current = onUnauthorized;
  }, [onUnauthorized]);

  useEffect(() => {
    let alive = true;
    adminJson<T>(url)
      .then((d) => {
        if (!alive) return;
        setState({ data: d, error: null, done: `${url}#${tick}` });
      })
      .catch((e: unknown) => {
        if (!alive) return;
        if (e instanceof UnauthorizedError) {
          unauthRef.current();
          return;
        }
        const msg =
          e instanceof Error ? e.message : "Gagal memuat data.";
        setState((s) => ({ data: s.data, error: msg, done: `${url}#${tick}` }));
      });
    return () => {
      alive = false;
    };
  }, [url, tick]);

  const reload = useCallback(() => setTick((t) => t + 1), []);
  return { data: state.data, loading, error: state.error, reload };
}

/* ────────────────── parsing & format ────────────────── */

/** List endpoint kadang balas array polos atau dibungkus objek — normalkan. */
export function listOf<T>(raw: unknown, keys: string[] = ["items", "data", "results", "posts", "proposals", "messages"]): T[] {
  if (Array.isArray(raw)) return raw as T[];
  if (raw && typeof raw === "object") {
    for (const k of keys) {
      const v = (raw as Record<string, unknown>)[k];
      if (Array.isArray(v)) return v as T[];
    }
  }
  return [];
}

/** Parse field JSON-string → string[] (aman untuk yang sudah array). */
export function parseJsonArray(v: unknown): string[] {
  if (Array.isArray(v))
    return v.map((x) => (typeof x === "string" ? x : JSON.stringify(x)));
  if (typeof v !== "string" || !v.trim()) return [];
  try {
    const p: unknown = JSON.parse(v);
    if (!Array.isArray(p)) return [];
    return p.map((x) => (typeof x === "string" ? x : JSON.stringify(x)));
  } catch {
    return [];
  }
}

/** Parse field JSON-string → unknown[] (untuk line items/addons berisi objek). */
export function parseJsonLoose(v: unknown): unknown[] {
  if (Array.isArray(v)) return v;
  if (typeof v !== "string" || !v.trim()) return [];
  try {
    const p: unknown = JSON.parse(v);
    return Array.isArray(p) ? p : [];
  } catch {
    return [];
  }
}

export function slugify(v: string): string {
  return v
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

const DATE_FMT = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
const DATETIME_FMT = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function fmtDateID(v?: string | Date | null): string {
  if (!v) return "—";
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? "—" : DATE_FMT.format(d);
}

export function fmtDateTimeID(v?: string | Date | null): string {
  if (!v) return "—";
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? "—" : DATETIME_FMT.format(d);
}

export function fmtRpFull(v: number): string {
  return `Rp ${Number(v || 0).toLocaleString("id-ID")}`;
}

export function waDigits(v: string): string {
  return (v || "").replace(/\D/g, "");
}

/* ────────────────── status penawaran ────────────────── */

export type ProposalStatus = "DRAFT" | "SENT" | "NEGOTIATION" | "WON" | "LOST";

export const PROPOSAL_STATUSES: ProposalStatus[] = [
  "DRAFT",
  "SENT",
  "NEGOTIATION",
  "WON",
  "LOST",
];

export const STATUS_META: Record<ProposalStatus, { label: string; chip: string }> = {
  DRAFT: { label: "Draf", chip: "border-zinc-400/40 bg-zinc-400/10 text-zinc-300" },
  SENT: {
    label: "Terkirim",
    chip: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  },
  NEGOTIATION: {
    label: "Negosiasi",
    chip: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  },
  WON: { label: "Menang", chip: "border-gold/50 bg-gold/10 text-gold" },
  LOST: {
    label: "Gagal",
    chip: "border-red-400/40 bg-red-400/10 text-red-300",
  },
};

export function statusMeta(status: string) {
  return STATUS_META[(status as ProposalStatus) in STATUS_META ? (status as ProposalStatus) : "DRAFT"];
}
