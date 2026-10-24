/**
 * Konten editorial mendalam untuk halaman detail layanan.
 * Setiap layanan punya: tagline, intro, keuntungan, proses, syarat, FAQ.
 * Ditulis mengikuti standar konten situs terbaik dunia: spesifik, edukatif,
 * dan menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */

export interface ServiceContent {
  slug: string;
  /** Headline puitis halaman */
  tagline: string;
  /** Sub-headline 1–2 kalimat */
  heroSub: string;
  /** Estimasi waktu proses */
  timeline: string;
  /** 2–3 paragraf pembuka mendalam */
  intro: string[];
  /** Keuntungan/nilai: judul + deskripsi */
  benefits: { title: string; desc: string }[];
  /** Langkah proses kerja */
  process: { title: string; desc: string }[];
  /** Dokumen/kebutuhan yang disiapkan klien */
  requirements: string[];
  /** FAQ spesifik layanan (dijadikan JSON-LD FAQPage) */
  faqs: { q: string; a: string }[];
  /** 3 slug layanan terkait */
  related: string[];

  /* ── Lapisan pengayaan opsional (modul enrichment) ──
     Semua opsional: layanan tanpa pengayaan tetap tampil utuh tanpa section kosong. */

  /** Profil calon klien yang cocok — menjawab query "apakah X cocok untuk saya" */
  whoFor?: string[];
  /** Dokumen/hasil konkret yang diserahkan ke klien — menjawab "apa yang saya dapat" */
  deliverables?: string[];
  /** Rincian estimasi biaya per pos — menjawab query "biaya X" (high intent) */
  costs?: { item: string; note?: string }[];
  /** Dasar hukum & regulasi — sinyal E-E-A-T kuat untuk layanan legal */
  legalBasis?: string[];
}
