import Link from "next/link";
import { PAGES, CATEGORY_LABEL } from "@/lib/pages";

/**
 * Footer halaman publik — server component murni.
 * Site-link SEO: seluruh halaman penting terjangkau maksimal 1 klik.
 */
export default function PublicFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#03080a] text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-emblem.png"
              alt="Logo DIGIMAN.ID"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div>
              <p className="font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
                DIGIMAN<span className="text-[var(--gold)]">.ID</span>
              </p>
              <p className="text-xs text-white/50">PT Digital Bisnis Manajemen</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Satu pintu legalitas & digitalisasi bisnis Indonesia — dari akta
            pendirian hingga transformasi digital. Didampingi 46 dewan pakar
            lintas bidang, proses transparan, garansi di tangan.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            SK Kemenkumham AHU-059566.AH.01.30.Tahun 2022 · NIB 2612220035584
          </p>
        </div>

        <nav aria-label="Halaman">
          <p className="text-sm font-semibold text-white">Jelajahi</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PAGES.filter((p) => p.footer).map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="transition-colors hover:text-[var(--gold)]">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kategori layanan">
          <p className="text-sm font-semibold text-white">Layanan</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {Object.entries(CATEGORY_LABEL).slice(0, 6).map(([key, label]) => (
              <li key={key}>
                <Link
                  href={`/layanan?kategori=${key}`}
                  className="transition-colors hover:text-[var(--gold)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} PT Digital Bisnis Manajemen ·
            Ekosistem{" "}
            <a
              href="https://topkonsultan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70"
            >
              TOP Konsultan
            </a>{" "}
            · Grand Design by Gunara
          </p>
          <p className="flex items-center gap-4">
            <span>halo@digiman.id</span>
            <span>+62 813-1651-6524</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
