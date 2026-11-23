import { OgCard, renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

/** OG image halaman hub /layanan */
export const alt = "Semua Layanan Legalitas & Digitalisasi Bisnis — DIGIMAN.ID";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg(
    <OgCard
      kicker="Layanan"
      chip="29+ Layanan"
      title="Semua Layanan Legalitas & Digitalisasi Bisnis"
      sub="Dari akta pendirian hingga sertifikasi halal — satu pintu, transparan, garansi di tangan."
      footerLeft="Mulai Rp 350 ribu"
    />
  );
}
