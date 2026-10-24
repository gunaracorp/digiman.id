import { getSiteData } from "@/lib/site-data";
import { getServiceContent } from "@/lib/services";
import { buildCatalogEntry, catalogCsv } from "@/lib/wa-catalog";

/**
 * /katalog-whatsapp/download — CSV seluruh layanan siap impor katalog.
 * Dibangun dari DB (Panel Admin) + konten editorial; UTF-8 BOM (Excel-safe).
 */
export const revalidate = 3600;

export async function GET() {
  const data = await getSiteData();

  const entries = data.services
    .filter((s) => s.slug)
    .map((s) =>
      buildCatalogEntry({
        slug: s.slug as string,
        title: s.title,
        desc: s.desc,
        price: s.price,
        features: s.items,
        category: s.category,
        content: s.slug ? getServiceContent(s.slug) : undefined,
        waNumber: data.settings.waNumber,
      })
    );

  const csv = catalogCsv(entries);

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="katalog-whatsapp-digiman-id.csv"',
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
