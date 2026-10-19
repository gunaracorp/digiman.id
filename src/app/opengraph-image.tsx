import { OgCard, renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

/**
 * OG image bawaan situs — otomatis dipakai SEMUA halaman yang tidak punya
 * og image sendiri (beranda, tentang-kami, kontak, paket-harga, faq, dst).
 */
export const alt = "DIGIMAN.ID — Legalitas & Digitalisasi Bisnis Indonesia";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOg(
    <OgCard
      chip="7 Lapis Langit Legalitas"
      title="Naikkan Bisnis Anda ke 7 Lapis Langit Legalitas"
      sub="Satu pintu dari akta pendirian, NIB & OSS, merek, sertifikasi, hingga digitalisasi — didampingi 46 dewan pakar."
      footerLeft="2.500+ bisnis terbantu · garansi di tangan"
    />
  );
}
