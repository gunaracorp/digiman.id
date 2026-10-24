import type { ServiceContent } from "./types";
import { pendirianContent } from "./pendirian";
import { perizinanContent } from "./perizinan";
import { kiContent, sertifikasiContent } from "./ki-sertifikasi";
import {
  pajakContent,
  ketenagakerjaanContent,
  korporasiContent,
  digitalContent,
} from "./lainnya";
import { digitalGrowthContent } from "./digital-growth";
import { perizinanEkspansiContent } from "./perizinan-ekspansi";
import { sdmEkspansiContent } from "./sdm-ekspansi";
import { lainnyaEkspansiContent } from "./lainnya-ekspansi";
import { SERVICE_ENRICHMENT } from "./enrichment";

export type { ServiceContent };

/** Seluruh konten editorial layanan, dirakit dari berkas per kategori */
export const SERVICE_CONTENTS: ServiceContent[] = [
  ...pendirianContent,
  ...perizinanContent,
  ...kiContent,
  ...sertifikasiContent,
  ...pajakContent,
  ...ketenagakerjaanContent,
  ...korporasiContent,
  ...digitalContent,
  ...digitalGrowthContent,
  ...perizinanEkspansiContent,
  ...sdmEkspansiContent,
  ...lainnyaEkspansiContent,
];

const CONTENT_MAP = new Map(SERVICE_CONTENTS.map((c) => [c.slug, c]));

/** Ambil konten editorial untuk slug tertentu + lapisan pengayaan (untuk siapa,
 *  hasil yang diterima, rincian biaya, dasar hukum) digabung otomatis */
export function getServiceContent(slug: string): ServiceContent | undefined {
  const base = CONTENT_MAP.get(slug);
  const extra = SERVICE_ENRICHMENT[slug];
  if (!base) return undefined;
  return extra ? { ...base, ...extra } : base;
}

/**
 * Konten cadangan yang tetap bermartabat untuk layanan yang belum punya
 * konten manual — dibangun dari data DB (judul, deskripsi, fitur, harga).
 * Menjamin setiap layanan dari Panel Admin selalu punya halaman layak SEO.
 */
export function buildFallbackContent(input: {
  slug: string;
  title: string;
  desc: string;
  price: string;
  features: string[];
  categoryLabel: string;
}): ServiceContent {
  const { slug, title, desc, price, features, categoryLabel } = input;
  return {
    slug,
    tagline: `${title} — ${categoryLabel.toLowerCase()} yang ditangani tuntas.`,
    heroSub: desc || `${title} dikerjakan tim dewan pakar DIGIMAN.ID dengan proses transparan dan garansi di tangan.`,
    timeline: "Estimasi dikonfirmasi saat konsultasi gratis",
    intro: [
      `${title} adalah salah satu layanan inti ${categoryLabel} yang kami tangani di DIGIMAN.ID. ${desc || "Tim dewan pakar kami menangani seluruh proses dari awal hingga dokumen terbit di tangan Anda."}`,
      `Seperti seluruh layanan Digiman, ${title.toLowerCase()} dikerjakan dengan prinsip transparan: seluruh biaya tertulis sejak penawaran, progres terpantau, dan garansi perbaikan bila ada tahap yang gagal karena proses kami. Harga mulai ${price} — konfirmasi detailnya lewat konsultasi gratis dengan dewan pakar kami.`,
    ],
    benefits: [
      { title: "Ditangani dewan pakar", desc: "Tim yang benar-benar paham bidang ini — bukan perantara yang meneruskan berkas." },
      { title: "Progres terpantau", desc: "Anda selalu tahu dokumen sedang berada di tahap mana dan kapan selesai." },
      { title: "Transparan sejak awal", desc: "Seluruh biaya tertulis di penawaran — tanpa biaya siluman di tengah proses." },
      { title: "Garansi di tangan", desc: "Bila ada tahap gagal karena proses kami, kami ulangi tanpa biaya tambahan." },
    ],
    process: [
      { title: "Konsultasi gratis", desc: "Diskusikan kebutuhan Anda via WhatsApp — kami petakan langkah dan biayanya." },
      { title: "Persiapan dokumen", desc: "Kami pandu pengumpulan dokumen yang benar sejak awal." },
      { title: "Eksekusi oleh tim", desc: "Seluruh proses dikerjakan tim kami, progres dilaporkan berkala." },
      { title: "Penyerahan & pendampingan", desc: "Dokumen diserahkan lengkap plus panduan kewajiban lanjutannya." },
    ],
    requirements: [
      "KTP & NPWP pemilik/direktur",
      "Dokumen badan usaha yang relevan (bila sudah berdiri)",
      "Email aktif & nomor HP yang dapat dihubungi",
      "Detail kebutuhan spesifik Anda — akan kami konfirmasi saat konsultasi",
    ],
    faqs: [
      { q: `Berapa biaya ${title.toLowerCase()}?`, a: `Harga mulai ${price} tergantung kebutuhan spesifik Anda. Konsultasi gratis kami akan memetakan cakupan pekerjaan dan memberikan penawaran tertulis yang transparan — tanpa biaya tersembunyi.` },
      { q: `Berapa lama proses ${title.toLowerCase()}?`, a: "Estimasi waktu kami sampaikan saat konsultasi gratis berdasarkan kondisi dokumen Anda. Tim kami bekerja secepat regulasi memungkinkan — dan memastikan tidak ada tahap yang tercecer." },
      { q: "Apakah bisa 100% online tanpa datang ke kantor?", a: "Ya, mayoritas proses dapat berjalan penuh daring dengan tanda tangan elektronik tersertifikasi dan kurir untuk dokumen asli. Klien kami di seluruh Indonesia sebagian besar tidak pernah perlu datang ke kantor kami." },
    ],
    related: ["pendirian-pt", "nib-oss", "pendaftaran-merek"],
  };
}
