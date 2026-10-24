import { getCity } from "@/lib/cities";
import { renderOg, OgCard } from "@/lib/og";

export const alt = "DIGIMAN.ID — Jasa legalitas & pendirian badan usaha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ kota: string }>;
}) {
  const { kota } = await params;
  const city = getCity(kota);
  return renderOg(
    OgCard({
      kicker: `Legalitas Lokal · ${city?.province ?? "Indonesia"}`,
      title: `Pendirian PT & Legalitas Usaha di ${city?.name ?? "Kota Anda"}`,
      sub: "Akta notaris, NIB OSS-RBA, merek, hingga sertifikasi — 100% online, transparan, garansi di tangan.",
      chip: city?.name.toUpperCase(),
      footerLeft: "Konsultasi gratis · balasan < 1×24 jam",
      footerRight: "digiman.id · 46 dewan pakar",
    })
  );
}
