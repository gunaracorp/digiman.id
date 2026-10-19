"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DICT_ID, isLocale, LOCALE_META, loadDictionary, type Dictionary, type Locale } from "@/lib/i18n";

interface I18nCtx {
  locale: Locale;
  dict: Dictionary;
  setLocale: (l: Locale) => void;
}

const Ctx = createContext<I18nCtx>({
  locale: "id",
  dict: DICT_ID,
  setLocale: () => {},
});

const STORAGE_KEY = "digiman-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Hydration aman: render pertama selalu "id" (kamus statis, nol fetch),
  // lalu preferensi tersimpan dimuat & kamus lazily diunduh bila perlu.
  const [locale, setLocaleState] = useState<Locale>("id");
  const [dict, setDict] = useState<Dictionary>(DICT_ID);

  // Muat preferensi tersimpan / bahasa browser setelah mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      let next: Locale = "id";
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && isLocale(saved)) {
          next = saved;
        } else {
          const nav = navigator.language?.slice(0, 2).toLowerCase() ?? "id";
          if (isLocale(nav)) next = nav;
        }
      } catch {
        /* abaikan */
      }
      if (next === "id") return;
      const d = await loadDictionary(next);
      if (cancelled) return;
      setDict(d);
      setLocaleState(next);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Sinkronkan <html lang> & arah teks (RTL untuk Arab)
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = LOCALE_META[locale].dir;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* abaikan */
    }
    if (l === "id") {
      // Bahasa default: sinkron, tanpa unduhan
      setDict(DICT_ID);
      setLocaleState("id");
      return;
    }
    // Unduh kamus dulu, lalu tukar sekaligus — hindari UI campuran
    loadDictionary(l).then((d) => {
      setDict(d);
      setLocaleState(l);
    });
  }, []);

  const value = useMemo<I18nCtx>(() => ({ locale, dict, setLocale }), [locale, dict, setLocale]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
