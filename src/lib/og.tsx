/**
 * Mesin OG Image DIGIMAN.ID — gambar share sosial media otomatis per halaman.
 * Dirender server-side via satori (next/og) memakai font brand asli
 * (Space Grotesk + Plus Jakarta Sans, tersimpan di public/fonts — offline-safe).
 *
 * Palet identik dengan situs: night #050d0a · gold #f2c14e · emerald #34d399.
 * Ukuran standar 1200×630 (OG / Twitter summary_large_image).
 */
import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** Ukuran kartu persegi — untuk gambar produk Katalog WhatsApp Business (min 1024×1024) */
export const CARD_SIZE = { width: 1024, height: 1024 };

const NIGHT = "#050d0a";
const GOLD = "#f2c14e";
const GOLD_LIGHT = "#ffe9a8";
const EMERALD = "#34d399";

interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: number;
  style: "normal";
}

let fontsCache: OgFont[] | null = null;

/** Muat font brand dari public/fonts (aman gagal → fallback font bawaan next/og) */
async function loadFonts(): Promise<OgFont[]> {
  if (fontsCache) return fontsCache;
  const fonts: OgFont[] = [];
  try {
    const dir = path.join(process.cwd(), "public", "fonts");
    const files: [string, string, number][] = [
      ["SpaceGrotesk-700.ttf", "Grotesk", 700],
      ["SpaceGrotesk-500.ttf", "Grotesk", 500],
      ["PlusJakartaSans-800.ttf", "Jakarta", 800],
      ["PlusJakartaSans-600.ttf", "Jakarta", 600],
    ];
    for (const [file, name, weight] of files) {
      try {
        const buf = await readFile(path.join(dir, file));
        fonts.push({
          name,
          data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer,
          weight,
          style: "normal",
        });
      } catch {
        // satu font hilang tidak boleh menggagalkan yang lain
      }
    }
  } catch {
    // folder tidak ada → pakai font bawaan
  }
  fontsCache = fonts;
  return fonts;
}

type ImageResponseOptions = NonNullable<ConstructorParameters<typeof ImageResponse>[1]>;

/** Render JSX → Response PNG 1200×630 */
export async function renderOg(node: React.ReactNode): Promise<Response> {
  const fonts = await loadFonts();
  const options: ImageResponseOptions = { ...OG_SIZE };
  if (fonts.length > 0) options.fonts = fonts as NonNullable<ImageResponseOptions["fonts"]>;
  return new ImageResponse(node as React.ReactElement, options);
}

/** Render JSX → Response PNG persegi 1024×1024 (Katalog WhatsApp / e-commerce) */
export async function renderOgSquare(node: React.ReactNode): Promise<Response> {
  const fonts = await loadFonts();
  const options: ImageResponseOptions = { ...CARD_SIZE };
  if (fonts.length > 0) options.fonts = fonts as NonNullable<ImageResponseOptions["fonts"]>;
  return new ImageResponse(node as React.ReactElement, options);
}

/** Potong teks agar tidak meluber keluar kanvas */
function truncate(s: string, max: number): string {
  const t = (s ?? "").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/[\s,.;:!—-]+$/, "") + "…";
}

/**
 * Kartu OG berbrand — satu desain untuk seluruh situs.
 * satori: hanya flexbox + inline style, tanpa CSS grid/filter.
 */
export function OgCard(opts: {
  kicker?: string;
  title: string;
  sub?: string;
  chip?: string;
  footerLeft?: string;
  footerRight?: string;
  titleMax?: number;
}) {
  const title = truncate(opts.title, opts.titleMax ?? 110);
  const titleSize = title.length <= 32 ? 62 : title.length <= 55 ? 52 : title.length <= 85 ? 42 : 34;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "52px 64px",
        backgroundColor: NIGHT,
        backgroundImage: "linear-gradient(135deg, #04110c 0%, #050d0a 55%, #082016 100%)",
        position: "relative",
        color: "#ffffff",
        fontFamily: "Jakarta",
      }}
    >
      {/* Ornamen dekoratif */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: 999,
          border: "2px solid rgba(242,193,78,0.22)",
          right: -80,
          top: -100,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 190,
          height: 190,
          borderRadius: 999,
          border: "2px solid rgba(52,211,153,0.20)",
          right: 60,
          top: 130,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 430,
          height: 430,
          borderRadius: 999,
          backgroundColor: "rgba(52,211,153,0.06)",
          left: -150,
          bottom: -170,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          backgroundImage: "linear-gradient(180deg, #f2c14e 0%, #34d399 100%)",
          display: "flex",
        }}
      />

      {/* Header: brand + chip */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "2px solid rgba(242,193,78,0.55)",
              backgroundColor: "rgba(242,193,78,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: "Grotesk", fontWeight: 700, fontSize: 26, color: GOLD }}>D</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={{ fontFamily: "Grotesk", fontWeight: 700, fontSize: 24, letterSpacing: 3, color: "#ffffff" }}>
              DIGIMAN.ID
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: 1 }}>
              PT Digital Bisnis Manajemen
            </span>
          </div>
        </div>
        {opts.chip ? (
          <div
            style={{
              border: "1px solid rgba(242,193,78,0.45)",
              borderRadius: 999,
              padding: "9px 20px",
              backgroundColor: "rgba(242,193,78,0.08)",
              display: "flex",
            }}
          >
            <span style={{ fontWeight: 800, fontSize: 15, color: GOLD_LIGHT, letterSpacing: 1 }}>
              {truncate(opts.chip, 32)}
            </span>
          </div>
        ) : null}
      </div>

      {/* Isi utama: kicker + judul + subjudul */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative", maxWidth: 1010 }}>
        {opts.kicker ? (
          <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: 4, color: EMERALD, textTransform: "uppercase" }}>
            {truncate(opts.kicker, 60)}
          </span>
        ) : null}
        <span style={{ fontFamily: "Grotesk", fontWeight: 700, fontSize: titleSize, lineHeight: 1.12, color: "#ffffff" }}>
          {title}
        </span>
        {opts.sub ? (
          <span style={{ fontSize: 21, lineHeight: 1.5, color: "rgba(255,255,255,0.62)", maxWidth: 900 }}>
            {truncate(opts.sub, 150)}
          </span>
        ) : null}
      </div>

      {/* Footer: nilai jual + kontak */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          paddingTop: 24,
          position: "relative",
        }}
      >
        <span style={{ fontFamily: "Grotesk", fontWeight: 500, fontSize: 20, color: EMERALD }}>
          {opts.footerLeft ?? "Konsultasi gratis · garansi di tangan"}
        </span>
        <span style={{ fontFamily: "Grotesk", fontWeight: 500, fontSize: 19, color: "rgba(255,255,255,0.55)" }}>
          {opts.footerRight ?? "digiman.id · WA 0813-1651-6524"}
        </span>
      </div>
    </div>
  );
}
