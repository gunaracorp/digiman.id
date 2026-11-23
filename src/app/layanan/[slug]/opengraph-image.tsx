import { OgCard, renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getSiteData } from "@/lib/site-data";
import { getServiceContent } from "@/lib/services";
import { CATEGORY_LABEL } from "@/lib/pages";

/**
 * OG image OTOMATIS per halaman layanan — dirender dinamis dari data layanan
 * (DB Panel Admin + konten editorial). Satu file = 29+ gambar unik.
 */
export const alt = "Layanan DIGIMAN.ID";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let card = (
    <OgCard
      kicker="Layanan"
      chip="DIGIMAN.ID"
      title="Layanan Legalitas & Digitalisasi Bisnis"
      sub="Konsultasi gratis — balasan kurang dari 1×24 jam."
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
          titleMax={85}
          footerLeft={service.price}
        />
      );
    }
  } catch {
    // DB bermasalah → kartu generik di atas tetap terbit
  }

  return renderOg(card);
}
