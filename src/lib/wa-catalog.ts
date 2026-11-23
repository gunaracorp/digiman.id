import { SITE } from "@/lib/seo";
import type { ServiceContent } from "@/lib/services";

/**
 * KATALOG WHATSAPP BUSINESS — pembangkit entri katalog dari data layanan.
 *
 * Satu sumber untuk: halaman /katalog-whatsapp (kit salin-tempel) dan
 * /katalog-whatsapp/download (CSV UTF-8 untuk alat impor massal).
 *
 * Bidang mengikuti batas nyata platform:
 *   - name       ≤ 100 karakter (WhatsApp/Commerce Manager)
 *   - description ≈ ≤ 1.000 karakter (aman untuk WA & Commerce Manager)
 *   - price      teks bebas "Mulai Rp X" (layanan, bukan SKU tetap)
 *   - link       halaman landing layanan — biar calon pembeli bisa lihat detail
 *   - image_link gambar persegi 1024×1024 khusus katalog (/layanan/[slug]/card-image)
 */

export interface WaCatalogEntry {
  slug: string;
  name: string;
  description: string;
  price: string;
  link: string;
  imageLink: string;
  category: string;
}

/** Batas aman panjang deskripsi katalog */
const DESC_MAX = 1000;

export function buildCatalogEntry(input: {
  slug: string;
  title: string;
  desc: string;
  price: string;
  features: string[];
  category: string;
  content?: ServiceContent;
  waNumber?: string;
}): WaCatalogEntry {
  const { slug, title, desc, price, features, category, content, waNumber } = input;

  // Nama katalog: judul layanan (sudah ringkas) — potong aman di 100
  const name = title.length > 100 ? `${title.slice(0, 99)}…` : title;

  // Deskripsi: pitch inti + fitur utama + harga + CTA WA
  const pitch = content?.heroSub || desc;
  const fitur = (features.length > 0 ? features : content?.deliverables ?? [])
    .slice(0, 4)
    .join("; ");
  const garansi =
    "Dikerjakan dewan pakar DIGIMAN.ID — transparan biayanya, garansi di tangan, proses bisa 100% online untuk seluruh Indonesia.";
  const cta = `Konsultasi & pesan: chat WA ${waNumber ? `+${waNumber.replace(/^62/, "62 ")}` : "di halaman detail"}.`;

  const parts = [pitch, fitur ? `Termasuk: ${fitur}.` : "", garansi, cta];
  let description = parts.filter(Boolean).join(" ");
  if (description.length > DESC_MAX) {
    description = `${description.slice(0, DESC_MAX - 1).replace(/[\s,.;:]+$/, "")}…`;
  }

  return {
    slug,
    name,
    description,
    price,
    link: `${SITE.url}/layanan/${slug}`,
    imageLink: `${SITE.url}/layanan/${slug}/card-image`,
    category,
  };
}

/** Escape satu bidang CSV (RFC 4180) */
function csvField(value: string): string {
  if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

/**
 * CSV katalog — kolom kompatibel pola umum Commerce Manager / alat impor:
 * name, description, price, link, image_link (+category sebagai kolom tambahan).
 * UTF-8 dengan BOM agar aman dibuka Excel & Google Sheets.
 */
export function catalogCsv(entries: WaCatalogEntry[]): string {
  const header = ["name", "description", "price", "link", "image_link", "category"];
  const rows = entries.map((e) =>
    [e.name, e.description, e.price, e.link, e.imageLink, e.category].map(csvField).join(",")
  );
  return `\uFEFF${[header.join(","), ...rows].join("\r\n")}\r\n`;
}
