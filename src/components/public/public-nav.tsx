import Link from "next/link";
import { PAGES } from "@/lib/pages";

/**
 * Navigasi halaman publik — server component murni (tanpa JS klien).
 * Mengikuti pola situs terbaik dunia: tautan jelas, satu CTA utama.
 */
export default function PublicNav({ activePath }: { activePath: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050d0a]/85 backdrop-blur-md">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="DIGIMAN.ID — Beranda">
          <img
            src="/logo-emblem.png"
            alt="Logo DIGIMAN.ID"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="font-[family-name:var(--font-grotesk)] text-lg font-bold tracking-tight text-white">
            DIGIMAN<span className="text-[var(--gold)]">.ID</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {PAGES.filter((p) => p.nav).map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                aria-current={activePath === p.path ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  activePath === p.path
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6281316516524?text=Halo%20DIGIMAN.ID%2C%20saya%20ingin%20konsultasi"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-[#1a1206] shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.03] active:scale-95"
        >
          Konsultasi Gratis
        </a>
      </nav>

      {/* Navigasi mobile — scroll horizontal ringan, tanpa hamburger JS */}
      <ul className="flex gap-1 overflow-x-auto px-4 pb-2 md:hidden [scrollbar-width:none]">
        {PAGES.filter((p) => p.nav).map((p) => (
          <li key={p.path} className="shrink-0">
            <Link
              href={p.path}
              aria-current={activePath === p.path ? "page" : undefined}
              className={`block rounded-full px-3 py-1.5 text-xs whitespace-nowrap ${
                activePath === p.path
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
