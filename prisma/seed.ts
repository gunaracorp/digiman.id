/**
 * Seed database DIGIMAN.ID — layanan, testimoni, FAQ, kantor.
 * Idempotent: aman dijalankan berulang (upsert by slug).
 *
 * Katalog layanan diimpor dari scripts/seed-v2.ts (CATALOG kanonik) —
 * satu sumber kebenaran untuk DB, fallback, dan pustaka konten editorial.
 */
import { PrismaClient } from "@prisma/client";
import { CATALOG } from "../scripts/seed-v2";

const prisma = new PrismaClient();

const TESTIMONIALS = [
  ["Rendra Wijaya", "Founder, Kopi Nusantara Rasa", "Dari NIB sampai sertifikasi halal, semua beres dalam 9 hari. Tim Digiman bahkan membantu saya memilih KBLI yang bikin saya dapat cuti pajak UMKM. Luar biasa detail.", 1],
  ["Sandra Halim", "Owner, CV Sinar Teknik", "Pendiriannya cuma 4 hari dan saya tidak pernah keluar kantor. Portal monitoring-nya bikin saya tenang karena selalu tahu dokumen saya sedang di mana.", 2],
  ["Michael Tanaka", "Director, Sakura Digital PMA", "Sebagai investor asing, regulasi Indonesia terasa rumit. Digiman memegang semuanya — BKPM, OSS, sampai laporan berkala. Highly recommended.", 3],
  ["dr. Amelinda Putri", "Founder, Klinik Sehat Bersama", "Izin operasional klinik itu rumit. Dewan pakar mereka paham banget alur Dinkes dan BPOM. Pendampingannya sampai klinik kami benar-benar beroperasi.", 4],
  ["Bagas Prakoso", "CEO, LogistikPro PT", "Garansi terbitnya bukan gimmick. Ada revisi dokumen dari notaris, mereka ulangi proses tanpa biaya tambahan dan tetap tepat waktu.", 5],
  ["Lestari Ningsih", "Owner, Batik Larasati", "Merek saya sempat hampir dibajak kompetitor. Untung pendaftaran DJKI lewat Digiman sudah jalan duluan. Sekarang brand saya aman total.", 6],
  ["Yusuf Ramadhan", "Founder, EduSkill Academy", "Langit ke-7 mereka nyata: website + sistem manajemen siswa + otomasi marketing. Sekarang pendaftaran murid jalan sendiri 24 jam.", 7],
  ["Clara Suryani", "Managing Partner, CS Consulting", "Saya langganan urus SPT klien-klien saya di sini. Konsultan pajaknya benar-benar bersertifikat dan fast response. 5 tahun tidak pernah telat lapor.", 8],
  ["Hendra Gunawan", "Owner, Gudang Makan Sehat", "Sertifikasi halal + SNI selesai tanpa saya pusing. Harganya transparan dari awal, tidak ada biaya siluman seperti pengalaman saya di tempat lain.", 9],
  ["Nadia Kusuma", "Co-Founder, Glowlab Skincare", "BPOM, merek, sampai website e-commerce semua ditangani satu tim. Koordinasinya gampang karena satu penanggung jawab akun.", 10],
] as const;

const FAQS = [
  ["Berapa lama proses pendirian PT sampai resmi beroperasi?", "Rata-rata 3–7 hari kerja sejak dokumen lengkap dan akta ditandatangani. Proses mencakup akta notaris, pengesahan SK Kemenkumham (biasanya real-time atau 1 hari), penerbitan NPWP badan, dan NIB via OSS. Untuk izin sektor tertentu (kesehatan, logistik, makanan) dapat memakan waktu tambahan — estimasi detail selalu kami berikan di awal, gratis.", 1],
  ["Apa saja yang saya siapkan untuk mendirikan perusahaan?", "Cukup: KTP & NPWP para pendiri (dan pemegang saham), alamat email aktif, nomor HP, serta alamat usaha (bisa rumah — kami bantu atur domisili). Untuk PT PMA diperlukan paspor asing dan surat pernyataan modal. Selebihnya — penyusunan akta, KBLI, hingga pengurusan online — tim kami yang mengerjakan.", 2],
  ["Apakah bisa mendirikan perusahaan tanpa datang ke kantor?", "Bisa, 100% online. Dengan tanda tangan elektronik tersertifikasi (TTE) yang diakui Kemenkumham, akta dan pengesahan dapat dilakukan tanpa tatap muka. Dokumen asli kami kirim ke alamat Anda via kurir terjamin, atau Anda ambil di kantor kami.", 3],
  ["Apakah ada biaya tersembunyi di tengah proses?", "Tidak. Semua biaya — honor notaris, resi Kemenkumham, administrasi pemerintahan, hingga jasa kami — tertulis jelas dalam penawaran sebelum Anda setuju. Jika ada kebutuhan di luar scope (misal izin sektor tambahan), kami konfirmasi dulu sebelum melanjutkan. Ini komitmen transparansi Digiman.", 4],
  ["Apa yang dimaksud 'Garansi Terbit'?", "Jika dokumen tidak terbit karena kesalahan proses atau administrasi pihak kami, seluruh tahap yang bermasalah kami ulangi tanpa biaya tambahan, plus kompensasi penundaan. Selama 5 tahun operasi, 99,2% dokumen kami terbit sesuai jadwal — sisanya karena perubahan regulasi mendadak yang selalu kami antisipasi dan komunikasikan.", 5],
  ["Bagaimana cara mulai konsultasi? Apakah berbayar?", "Gratis. Klik tombol WhatsApp di halaman ini atau isi form kontak — dalam 1×24 jam Anda terhubung dengan dewan pakar sesuai bidang bisnis Anda. Kami akan memetakan kebutuhan legalitas, merekomendasikan bentuk badan usaha yang paling efisien secara pajak, dan memberi estimasi biaya & waktu. Tanpa komitmen apa pun.", 6],
] as const;

const OFFICES = [
  ["HEAD", "Head Office — Tasikmalaya", "Andalusia Garden Cluster Granada No.11, Mangkubumi, Tasikmalaya, 46181, Jawa Barat", 1],
  ["BRANCH", "Branch Office I — Bandung", "Jln. Muararajeun Lama No.26, Bandung, Jawa Barat 40122", 2],
  ["BRANCH", "Branch Office II — Sukarame", "Guntur Village 50, Desa Padasuka, Sukarame, Kab. Tasikmalaya, Jawa Barat 46464", 3],
  ["BRANCH", "Branch Office III — Arjasari", "Perumahan Arjamukti Kencana Raya Blok B7 No.2, Leuwisari, Arjasari, Kab. Tasikmalaya, Jawa Barat", 4],
] as const;

async function main() {
  console.log("Seeding DIGIMAN.ID database...");

  for (const [i, s] of CATALOG.entries()) {
    const order = (i + 1) * 10;
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {
        title: s.title, desc: s.desc, price: s.price,
        features: JSON.stringify(s.features), icon: s.icon,
        category: s.category, featured: Boolean(s.featured), order,
      },
      create: {
        slug: s.slug, title: s.title, desc: s.desc, price: s.price,
        features: JSON.stringify(s.features), icon: s.icon,
        category: s.category, featured: Boolean(s.featured), order,
      },
    });
  }
  console.log(`Services: ${CATALOG.length}`);

  if ((await prisma.testimonial.count()) === 0) {
    for (const [name, role, text, order] of TESTIMONIALS) {
      await prisma.testimonial.create({ data: { name, role, text, rating: 5, order } });
    }
    console.log(`Testimonials: ${TESTIMONIALS.length}`);
  }

  if ((await prisma.faq.count()) === 0) {
    for (const [question, answer, order] of FAQS) {
      await prisma.faq.create({ data: { question, answer, order } });
    }
    console.log(`FAQs: ${FAQS.length}`);
  }

  if ((await prisma.office.count()) === 0) {
    for (const [type, label, address, order] of OFFICES) {
      await prisma.office.create({ data: { type, label, address, order } });
    }
    console.log(`Offices: ${OFFICES.length}`);
  }

  console.log("Seed selesai.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
