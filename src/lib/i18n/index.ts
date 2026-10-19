/**
 * Runtime i18n dengan lazy-loading kamus.
 *
 * Hemat bundle: hanya kamus Indonesia (+ Inggris, kandidat bahasa kedua
 * paling mungkin) yang di-bundle statis. 8 kamus lainnya (zh, es, hi, ar,
 * fr, pt, ru, ja — masing-masing berisi terjemahan penuh 29 layanan, FAQ,
 * dan UI) hanya diunduh saat pengguna benar-benar memakai bahasa itu.
 * Locale apa pun di-merge DI ATAS kamus Indonesia sebagai fallback, sehingga
 * kunci yang hilang otomatis memakai Bahasa Indonesia — UI tak pernah rusak.
 */
import idDict from "./dict-id";
import enDict from "./dict-en";
import type { Dictionary, Locale } from "./types";
import { LOCALES } from "./types";

export * from "./types";

function deepMerge(base: unknown, over: unknown): Record<string, unknown> {
  if (Array.isArray(over)) return over as unknown as Record<string, unknown>;
  if (over && typeof over === "object") {
    const out: Record<string, unknown> = { ...((base ?? {}) as Record<string, unknown>) };
    for (const k of Object.keys(over as Record<string, unknown>)) {
      out[k] = deepMerge((base as Record<string, unknown>)?.[k], (over as Record<string, unknown>)[k]);
    }
    return out;
  }
  return (over ?? base) as Record<string, unknown>;
}

// Kamus yang diunduh on-demand (chunk terpisah, tidak masuk bundle utama)
const LAZY: Record<string, () => Promise<{ default: unknown }>> = {
  zh: () => import("./locales/zh.json"),
  es: () => import("./locales/es.json"),
  hi: () => import("./locales/hi.json"),
  ar: () => import("./locales/ar.json"),
  fr: () => import("./locales/fr.json"),
  pt: () => import("./locales/pt.json"),
  ru: () => import("./locales/ru.json"),
  ja: () => import("./locales/ja.json"),
};

const cache = new Map<Locale, Dictionary>();

/** Kamus Indonesia — selalu tersedia sinkron (bahasa default & fallback). */
export const DICT_ID = idDict as unknown as Dictionary;

/** Kamus Inggris — dimuat statis karena paling sering dipakai kedua. */
export const DICT_EN = deepMerge(idDict, enDict) as unknown as Dictionary;

/** Muat kamus untuk locale tertentu (dinamis + cache). */
export async function loadDictionary(l: Locale): Promise<Dictionary> {
  if (l === "id") return DICT_ID;
  if (l === "en") return DICT_EN;
  const hit = cache.get(l);
  if (hit) return hit;
  const loader = LAZY[l];
  if (!loader) return DICT_ID;
  const mod = await loader();
  const merged = deepMerge(idDict, mod.default) as unknown as Dictionary;
  cache.set(l, merged);
  return merged;
}

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

/** Konten layanan sesuai bahasa; slug tak dikenal → konten DB (Indonesia). */
export function svc(
  item: { slug?: string | null; title: string; desc: string; price: string; items: string[] },
  dict: Dictionary,
  locale: Locale
) {
  if (locale === "id" || !item.slug) return { title: item.title, desc: item.desc, price: item.price, items: item.items };
  const c = dict.content.services[item.slug];
  return c ? { ...c } : { title: item.title, desc: item.desc, price: item.price, items: item.items };
}

/** Konten FAQ sesuai bahasa. */
export function faqC(item: { slug?: string | null; q: string; a: string }, dict: Dictionary, locale: Locale) {
  if (locale === "id" || !item.slug) return { q: item.q, a: item.a };
  const c = dict.content.faqs[item.slug];
  return c ? { ...c } : { q: item.q, a: item.a };
}

/** Konten testimoni sesuai bahasa. */
export function testiC(item: { slug?: string | null; text: string }, dict: Dictionary, locale: Locale) {
  if (locale === "id" || !item.slug) return { text: item.text };
  const c = dict.content.testi[item.slug];
  return c ? { ...c } : { text: item.text };
}
