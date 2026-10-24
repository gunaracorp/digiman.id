import Link from "next/link";

import { SITE } from "@/lib/seo";
import { breadcrumbLd, JsonLd } from "@/lib/seo";

/**
 * 404 BRANDED — bukan halaman mati, melainkan penunjuk arah.
 * Mesin pencari menghargai 404 yang jujur (status tetap 404, bukan soft-404)
 * dengan jalur pemulihan jelas: beranda, layanan populer, artikel, kota.
 */

export const metadata = {
  title: "Halaman Tidak Ditemukan — DIGIMAN.ID",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/layanan", title: "Semua Layanan", desc: "27 layanan legalitas & digitalisasi" },
  { href: "/paket-harga", title: "Paket & Harga", desc: "Pilihan investasi transparan" },
  { href: "/blog", title: "Artikel & Panduan", desc: "Panduan legalitas terkini" },
  { href: "/legalitas", title: "Cakupan 65 Kota", desc: "Layanan di kota Anda" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }])} />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="font-[family-name:var(--font-grotesk)] bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
          Halaman ini masih terbang di lapisan lain
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
          Alamat yang Anda tuju tidak ditemukan atau sudah dipindahkan. Mari kami
          antar kembali ke jalur yang benar — beranda, layanan, atau panduan
          legalitas di {SITE.name}.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-[#04120c] shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.02] active:scale-95"
          >
            Kembali ke Beranda
          </Link>
          <a
            href={`https://wa.me/6281333397223?text=${encodeURIComponent(
              "Halo DIGIMAN.ID, saya kesulitan menemukan informasi di situs Anda."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition-colors hover:border-[var(--gold)]/50 hover:text-white"
          >
            Tanya via WhatsApp
          </a>
        </div>

        <nav aria-label="Pintasan berguna" className="mt-14 grid w-full gap-3 sm:grid-cols-2">
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/40"
            >
              <p className="text-sm font-semibold text-white group-hover:text-[var(--gold)]">{l.title}</p>
              <p className="mt-1 text-xs text-white/45">{l.desc}</p>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
