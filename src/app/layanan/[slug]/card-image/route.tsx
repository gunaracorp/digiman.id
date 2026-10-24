import { OgCard, renderOgSquare } from "@/lib/og";
import { getSiteData } from "@/lib/site-data";
import { getServiceContent } from "@/lib/services";
import { CATEGORY_LABEL } from "@/lib/pages";

/**
 * Route Handler /layanan/[slug]/card-image — kartu produk PERSEGI 1024×1024
 * khusus Katalog WhatsApp Business (WA menganjurkan gambar persegi min 1024px)
 * dan marketplace/e-commerce. Satu route = 33 gambar katalog unik, dirender
 * otomatis dari data DB + konten editorial. Cache publik 1 jam + SWR 1 hari.
 */
export const revalidate = 3600;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let card = (
    <OgCard
      kicker="Katalog Layanan"
      chip="DIGIMAN.ID"
      title="Layanan Legalitas & Digitalisasi Bisnis"
      sub="Konsultasi gratis — balasan kurang dari 1×24 jam."
      titleMax={72}
    />
  );

  try {
    const data = await getSiteData();
    const service = data.services.find((s) => s.slug === slug);
    if (service) {
      const content = getServiceContent(slug);
      const categoryLabel = CATEGORY_LABEL[service.category] ?? service.category;
      card = (
        <OgCard
          kicker={categoryLabel}
          chip={service.price}
          title={service.title}
          sub={content?.heroSub ?? service.desc}
          titleMax={70}
          footerLeft={service.price}
        />
      );
    }
  } catch {
    // DB bermasalah → kartu generik di atas tetap terbit
  }

  const response = await renderOgSquare(card);
  response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  return response;
}
