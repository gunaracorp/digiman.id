import { ImageResponse } from "next/og";

/**
 * Open Graph image dinamis (/opengraph-image) — 1200×630.
 * Digambar oleh kode (Satori) dari identitas brand: latar night, aksen
 * emerald→gold, judul 7 Lapis Langit, dan kredit nama lengkap.
 * Otomatis dipakai sebagai og:image untuk seluruh route root.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "DIGIMAN.ID — 7 Lapis Langit Legalitas & Digitalisasi — by Gugun Gunara & Muhammad Lutfi Azmi";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050d0a",
          backgroundImage:
            "linear-gradient(135deg, rgba(52,211,153,0.14) 0%, rgba(5,13,10,0) 45%), linear-gradient(315deg, rgba(242,193,78,0.14) 0%, rgba(5,13,10,0) 45%)",
          padding: "64px 72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Kop brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:
                  "linear-gradient(135deg, #34d399, #0d9488)",
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>
                DIGIMAN.ID
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                PT Digital Bisnis Manajemen
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid rgba(242,193,78,0.55)",
              color: "#f2c14e",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            GUNARA OS
          </div>
        </div>

        {/* Judul utama — dua baris agar tidak terpotong lebar 1200px */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            Naikkan Bisnis Anda ke
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: "#34d399",
            }}
          >
            7 Lapis Langit Legalitas &amp; Digitalisasi
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              marginTop: 10,
            }}
          >
            Legalitas Perusahaan · Gunara OS 165 Dokumen · Transformasi Digital
          </div>
        </div>

        {/* Strip kredit */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(52,211,153,0.25)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            by Gugun Gunara&nbsp;·&nbsp;
            <span style={{ color: "#f2c14e", display: "flex" }}>
              Muhammad Lutfi Azmi
            </span>
            &nbsp;· Santri Angon · PT Top Konsultan Internasional
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 800,
              color: "#34d399",
            }}
          >
            digiman.id
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
