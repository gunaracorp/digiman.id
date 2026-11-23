/**
 * ARTICLE BLOCKS — pengalaman membaca premium untuk halaman blog & halaman
 * panjang. Semua server component: progress bar memakai CSS scroll-driven
 * animation (tanpa JavaScript), TOC pakai anchor asli yang bisa diindeks.
 */

/* ── ReadingProgress: garis progres membaca emas (progressive enhancement) ── */
export function ReadingProgress() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[3px]">
      <div className="dm-reading-progress h-full w-full bg-gradient-to-r from-[var(--gold)] via-amber-300 to-emerald-400" />
    </div>
  );
}

/* ── Toc: daftar isi bernomor dengan anchor asli ── */
export function Toc({
  items,
  title = "Daftar isi",
}: {
  items: { href: string; label: string }[];
  title?: string;
}) {
  if (items.length < 2) return null;
  return (
    <nav aria-label={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">{title}</p>
      <ol className="mt-4 space-y-1">
        {items.map((it, i) => (
          <li key={it.href}>
            <a
              href={it.href}
              className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 text-sm text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              <span aria-hidden="true" className="font-[family-name:var(--font-grotesk)] text-xs font-bold text-[var(--gold)]/70 group-hover:text-[var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── AuthorCard: E-E-A-T — siapa yang berbicara di balik artikel ── */
export function AuthorCard({ author }: { author: string }) {
  return (
    <aside
      aria-label="Tentang penulis"
      className="mt-14 rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--gold)]/35 bg-[var(--gold)]/10 font-[family-name:var(--font-grotesk)] text-xl font-bold text-[var(--gold)]">
          DP
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
            Ditulis oleh
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
            {author}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-[1.8] text-white/55">
            Dewan pakar DIGIMAN.ID — praktisi legalitas bisnis, perpajakan, dan
            digitalisasi yang setiap minggu menangani kasus nyata pendiri bisnis
            Indonesia. Artikel ditulis dari pengalaman lapangan, bukan salin-tempel
            teori, dan selalu dirujuk ke regulasi resmi yang berlaku.
          </p>
          <p className="mt-3 text-xs text-white/40">
            Terverifikasi redaksi DIGIMAN.ID · direview berkala mengikuti perubahan regulasi terbaru
          </p>
        </div>
      </div>
    </aside>
  );
}

/* ── ShareRow: bagikan artikel (tautan server murni, tanpa tracker pihak ketiga) ── */
export function ShareRow({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${t}%20${u}`,
      d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.03c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.13.24-3.83-.8-3.23-1.27-5.28-4.55-5.44-4.76-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.12-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.27.64.9 2.2.98 2.36.08.16.13.35.02.56-.1.21-.16.34-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.57 1.59.32.16.51.13.69-.08.19-.21.79-.92 1-1.24.21-.32.43-.26.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.14.08.79-.16 1.47Z",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${u}&text=${t}`,
      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
    },
  ];
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2.5">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-white/40">
        Bagikan
      </span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Bagikan via ${l.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <path d={l.d} />
          </svg>
        </a>
      ))}
    </div>
  );
}
