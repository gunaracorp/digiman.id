import { OgCard, renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

/** OG image halaman /blog */
export const alt = "Blog DIGIMAN.ID — Panduan Legalitas Bisnis";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg(
    <OgCard
      kicker="Blog"
      chip="Panduan Gratis"
      title="Panduan Legalitas Bisnis — Blog DIGIMAN.ID"
      sub="Ditulis dewan pakar dari kasus nyata klien: biaya, syarat, dan urutan legalitas yang benar."
      footerLeft="Artikel baru setiap minggu"
    />
  );
}
