/**
 * Seed v2 — kantor (HQ + cabang), katalog layanan lengkap 8 kategori,
 * FAQ tambahan, dan backfill slug untuk terjemahan multi-bahasa.
 * Aman dijalankan berulang (upsert by slug / match by title lama).
 *
 * CATALOG diekspor — dipakai juga oleh scripts/migrate-services-v3.ts
 * sebagai sumber kanonik data layanan (satu sumber, tidak ada dua kebenaran).
 */
import { db } from "../src/lib/db";

const OFFICES = [
  {
    type: "HEAD",
    label: "Head Office — Tasikmalaya",
    address:
      "Andalusia Garden Cluster Granada No.11, Mangkubumi, Mangkubumi, Tasikmalaya, 46181, Jawa Barat, Indonesia",
    order: 1,
  },
  {
    type: "BRANCH",
    label: "Branch Office I — Bandung",
    address: "Jln. Muararajeun Lama No.26, Bandung, Jawa Barat 40122",
    order: 2,
  },
  {
    type: "BRANCH",
    label: "Branch Office II — Sukarame",
    address:
      "Guntur Village 50, Desa Padasuka, Kecamatan Sukarame, Kabupaten Tasikmalaya, Jawa Barat, 46464",
    order: 3,
  },
  {
    type: "BRANCH",
    label: "Branch Office III — Arjasari",
    address:
      "Perumahan Arjamukti Kencana Raya Blok B7 No.2, Leuwisari, Arjasari, Kabupaten Tasikmalaya, Jawa Barat",
    order: 4,
  },
];

export { type Svc, CATALOG } from "../src/lib/catalog";
import { CATALOG } from "../src/lib/catalog";

const NEW_FAQS = [
  {
    slug: "faq-7",
    question: "Apa bedanya PT, CV, dan PT Perorangan? Mana yang cocok untuk usaha saya?",
    answer:
      "PT cocok untuk bisnis yang butuh kredibilitas tinggi, investor, dan perlindungan aset pribadi (tanggung jawab terbatas pada modal). CV ideal untuk usaha keluarga/kemitraan dengan modal ringan namun tanggung jawab para sekutu tidak terbatas. PT Perorangan paling ringan dan murah — khusus usaha individu dengan modal kecil, tanpa notaris, cukup NIB via OSS. Tim kami akan memetakan pilihan paling efisien secara pajak dan hukum sesuai skala serta rencana bisnis Anda, gratis saat konsultasi awal.",
  },
  {
    slug: "faq-8",
    question: "Perusahaan saya sudah berjalan — bisakah diganti nama, pindah alamat, atau tambah KBLI?",
    answer:
      "Sangat bisa. Layanan perubahan akta & struktur kami mencakup: perubahan nama perusahaan, alamat, bidang usaha (KBLI), susunan pengurus/komisaris, pemegang saham, dan modal dasar. Kami urus dari akta notaris, pengesahan Kemenkumham, sampai sinkronisasi NIB/OSS dan NPWP agar seluruh dokumen turunan konsisten. Rata-rata proses 3–7 hari kerja, dan Anda tetap fokus beroperasi karena kami yang menangani seluruh birokrasinya.",
  },
  {
    slug: "faq-9",
    question: "Bagaimana keamanan data sensitif seperti KTP dan NPWP yang saya kirimkan?",
    answer:
      "Data Anda hanya diakses oleh konsultan penanggung jawab akun Anda — tidak dibagikan ke pihak ketiga di luar keperluan pengurusan (notaris, kementerian). Seluruh berkas tersimpan terenkripsi, dan setelah proses selesai Anda dapat meminta penghapusan arsip digital. Kami juga memberikan tanda terima dokumen yang jelas serta pemantauan status real-time, sehingga Anda selalu tahu dokumen sensitif Anda sedang berada di tahap apa.",
  },
  {
    slug: "faq-10",
    question: "Apakah DIGIMAN melayani klien dari luar kota atau luar negeri?",
    answer:
      "Melayani. Seluruh proses dapat berjalan 100% online dengan tanda tangan elektronik tersertifikasi — klien kami tersebar dari Aceh sampai Papua, termasuk diaspora Indonesia dan investor asing yang mendirikan PT PMA. Dokumen asli dikirim via kurir terjamin. Kami punya head office di Tasikmalaya serta cabang di Bandung dan sekitarnya, namun untuk Anda di mana pun, akun manager pribadi tetap memantau setiap tahap pengurusan Anda.",
  },
];

async function main() {
  console.log("=== Seed v2 dimulai ===");

  // 1. Kantor
  for (const o of OFFICES) {
    const existing = await db.office.findFirst({ where: { label: o.label } });
    if (!existing) await db.office.create({ data: o });
  }
  console.log(`Kantor OK (${OFFICES.length})`);

  // 2. Alamat utama = HQ Tasikmalaya (kontrak key/value SiteSetting)
  for (const [key, value] of [
    ["addressShort", "Andalusia Garden Granada No.11, Tasikmalaya"],
    ["addressFull", "Andalusia Garden Cluster Granada No.11, Mangkubumi, Mangkubumi, Tasikmalaya, 46181, Jawa Barat, Indonesia"],
  ] as const) {
    await db.siteSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }
  console.log("SiteSetting alamat -> HQ Tasikmalaya");

  // 3. Katalog layanan
  let created = 0, updated = 0;
  for (let i = 0; i < CATALOG.length; i++) {
    const s = CATALOG[i];
    const data = {
      slug: s.slug, title: s.title, desc: s.desc, price: s.price,
      features: JSON.stringify(s.features), icon: s.icon, category: s.category,
      featured: Boolean(s.featured), order: (i + 1) * 10,
    };
    const bySlug = await db.service.findUnique({ where: { slug: s.slug } });
    if (bySlug) {
      await db.service.update({ where: { id: bySlug.id }, data });
      updated++;
      continue;
    }
    const byOldTitle = s.matchTitle
      ? await db.service.findFirst({ where: { title: s.matchTitle, slug: null } })
      : null;
    if (byOldTitle) {
      await db.service.update({ where: { id: byOldTitle.id }, data });
      updated++;
      continue;
    }
    const byAnyTitle = await db.service.findFirst({ where: { title: s.title, slug: null } });
    if (byAnyTitle) {
      await db.service.update({ where: { id: byAnyTitle.id }, data });
      updated++;
      continue;
    }
    await db.service.create({ data });
    created++;
  }
  console.log(`Layanan: ${updated} update, ${created} baru (total ${CATALOG.length})`);

  // 4. Backfill slug FAQ lama (faq-1..faq-6 by order) + tambah FAQ baru
  const oldFaqs = await db.faq.findMany({ where: { slug: null }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
  let faqNo = 1;
  for (const f of oldFaqs) {
    await db.faq.update({ where: { id: f.id }, data: { slug: `faq-${faqNo}` } });
    faqNo++;
  }
  for (const f of NEW_FAQS) {
    const exists = await db.faq.findUnique({ where: { slug: f.slug } });
    const maxOrder = (await db.faq.aggregate({ _max: { order: true } }))._max.order ?? 0;
    if (!exists) {
      await db.faq.create({ data: { ...f, order: maxOrder + 10 } });
    }
  }
  console.log("FAQ OK");

  // 5. Backfill slug testimoni (testimoni-1..n by order)
  const oldTs = await db.testimonial.findMany({ where: { slug: null }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
  let tNo = 1;
  for (const t of oldTs) {
    await db.testimonial.update({ where: { id: t.id }, data: { slug: `testimoni-${tNo}` } });
    tNo++;
  }
  console.log("Testimoni OK");

  const counts = {
    offices: await db.office.count(),
    services: await db.service.count(),
    faqs: await db.faq.count(),
    testimonials: await db.testimonial.count(),
  };
  console.log("TOTAL:", JSON.stringify(counts));
}

if (import.meta.main) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => process.exit(0));
}
