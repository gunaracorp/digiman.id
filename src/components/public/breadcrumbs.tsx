import Link from "next/link";

/** Breadcrumb visual — pasangan dari JSON-LD BreadcrumbList */
export default function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true" className="text-white/25">/</span>}
              {last ? (
                <span aria-current="page" className="text-[var(--gold)]">
                  {it.name}
                </span>
              ) : (
                <Link href={it.path} className="transition-colors hover:text-white">
                  {it.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
