import { LogoMark } from "@/components/digiman/site-header";
import { FOOTER, ORG } from "@/content/holding";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card/30">
      <div className="shell grid gap-12 py-14 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] md:gap-8">
        <div>
          <a
            href="/"
            className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            aria-label="DIGIMAN.ID — kembali ke beranda"
          >
            <LogoMark className="size-8 text-gold" />
            <span className="text-[17px] font-semibold tracking-tight">
              DIGIMAN
              <span className="text-gold">.ID</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {FOOTER.blurb}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {ORG.location} · Est. {ORG.founded}
          </p>
        </div>

        {FOOTER.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {ORG.name}. Seluruh hak cipta.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Kaji Dulu · Baru Bangun · Bertahan 100 Tahun
          </p>
        </div>
      </div>
    </footer>
  );
}
