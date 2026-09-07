import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center px-5">
        <div className="max-w-md text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">
            Halaman tidak <em className="italic text-gold">ditemukan</em>.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Alamat yang Anda tuju tidak ada atau telah dipindahkan. Kembali ke
            beranda untuk menjelajahi ekosistem DIGIMAN.ID.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    </div>
  );
}
