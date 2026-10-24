"use client";

/**
 * Client Dashboard — util & hook ringan.
 *
 * Aturan anti-hydration (WAJIB):
 * - Semua formatter tanggal memakai Intl.DateTimeFormat timeZone "Asia/Jakarta".
 * - Jam / hitung mundur hanya dihitung SETELAH mount (useNow null-safe).
 * - Tidak ada Date.now()/Math.random()/window di jalur render awal.
 */

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";

type TFn = (key: string, vars?: Record<string, string | number>) => string;

const intlLocale = (locale: Locale | string) => (locale === "en" ? "en-GB" : "id-ID");

/** Tanggal: 19 Okt 2026 */
export function fmtDate(iso: string, locale: Locale | string): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(iso));
}

/** Tanggal + jam: 19 Okt 2026 · 10.00 */
export function fmtDateTime(iso: string, locale: Locale | string): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Jakarta",
  }).format(new Date(iso));
}

/** Jam singkat: 10.00 */
export function fmtTime(iso: string, locale: Locale | string): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Jakarta",
  }).format(new Date(iso));
}

/** Jam live: 10.15.42 */
export function fmtClock(date: Date, locale: Locale | string): string {
  return new Intl.DateTimeFormat(intlLocale(locale), {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

/** Jam WIB (0–23) dari sebuah Date. */
export function jakartaHour(date: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Jakarta",
  }).formatToParts(date);
  const hour = parts.find((p) => p.type === "hour")?.value ?? "0";
  return Number(hour) % 24;
}

/** Kunci greeting sesuai jam WIB. */
export function greetingKey(date: Date): string {
  const h = jakartaHour(date);
  if (h >= 4 && h < 11) return "dash.greeting.morning";
  if (h >= 11 && h < 15) return "dash.greeting.afternoon";
  if (h >= 15 && h < 19) return "dash.greeting.evening";
  return "dash.greeting.night";
}

/** Waktu relatif: "baru saja", "5 mnt lalu", "2 jam lalu", "3 hari lalu". */
export function relTime(iso: string, nowMs: number, locale: Locale | string, t: TFn): string {
  const diff = Math.max(0, nowMs - new Date(iso).getTime());
  const min = Math.floor(diff / 60_000);
  if (min < 1) return t("dash.time.now");
  if (min < 60) return t("dash.time.minAgo", { n: min });
  const hour = Math.floor(min / 60);
  if (hour < 24) return t("dash.time.hourAgo", { n: hour });
  const day = Math.floor(hour / 24);
  if (day < 7) return t("dash.time.dayAgo", { n: day });
  return fmtDate(iso, locale);
}

/** Rupiah penuh: Rp 18.000.000 */
export function rupiah(v: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(v);
}

/** Rupiah ringkas untuk sumbu chart: 18 jt / 1,2 M */
export function rupiahShort(v: number): string {
  if (v >= 1_000_000_000) return `${(v / 1_000_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} M`;
  if (v >= 1_000_000) return `${Math.round(v / 1_000_000)} jt`;
  if (v >= 1_000) return `${Math.round(v / 1_000)} rb`;
  return String(v);
}

/** Hook: timestamp berjalan; null sebelum mount (aman SSR/hydration).
 *  Implementasi useSyncExternalStore — lint-safe (tanpa setState di effect). */
export function useNow(intervalMs = 1000): number | null {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const id = setInterval(onStoreChange, intervalMs);
      return () => clearInterval(id);
    },
    [intervalMs],
  );
  // Snapshot stabil dalam satu kuantum interval → aman untuk React 19.
  const getSnapshot = useCallback(() => {
    const now = Date.now();
    return Math.floor(now / intervalMs) * intervalMs;
  }, [intervalMs]);
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}

/** Hook: true setelah mount pertama (store-trick, tanpa setState di effect). */
export function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/**
 * Hook animasi count-up (F12): 0 → target dengan easing cubic-out via rAF.
 * Aman hydration: selalu mulai dari 0, berjalan hanya di effect.
 */
export function useCountUp(target: number, durationMs = 900): number {
  const [value, setValue] = useState(0);
  const safeTarget = Number.isFinite(target) ? target : 0;
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (ts: number) => {
      const p = Math.min(1, (ts - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(safeTarget * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [safeTarget, durationMs]);
  return value;
}

/** Hitung sisa hari (ceil) menuju ISO datetime — null sebelum mount. */
export function daysUntil(iso: string, nowMs: number | null): number | null {
  if (nowMs === null) return null;
  return Math.ceil((new Date(iso).getTime() - nowMs) / 86_400_000);
}
