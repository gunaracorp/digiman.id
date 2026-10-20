/**
 * Seed database DIGIMAN.ID — layanan, testimoni, FAQ, kantor.
 * Idempotent: aman dijalankan berulang (skip jika data sudah ada).
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SERVICES = [
  ["pendirian-pt", "Pendirian PT", "Akta notaris, SK Kemenkumham, NPWP, NIB — paket lengkap PT resmi berdiri dalam hitungan hari.", "Mulai Rp 3,5 jt", ["Akta Notaris + SK Kemenkumham", "NPWP & NIB otomatis", "Domisili usaha", "Gratis konsultasi KBLI"], "Building2", "pendirian", true, 1],
  ["pt-perorangan", "PT Perorangan (UUCK)", "Badan usaha resmi untuk usaha individu via OSS — tanpa notaris, NIB terbit langsung.", "Mulai Rp 850 rb", ["NIB sebagai legalitas pasti", "Tanpa akta notaris", "Kewajiban pajak ringan", "Cocok UMKM & freelancer"], "FileBadge", "pendirian", false, 2],
  ["pendirian-cv", "Pendirian CV", "Pilihan ideal usaha keluarga & kemitraan. Cepat, murah, dan sah di mata hukum.", "Mulai Rp 1,8 jt", ["Akta notaris CV", "Pengesahan kehakiman", "NPWP & NIB", "Konsultasi struktur modal"], "Users", "pendirian", false, 3],
  ["pt-pma", "PT PMA (Investasi Asing)", "Berinvestasi di Indonesia? Kami pegang seluruh regulasi BKPM & OSS untuk Anda.", "Mulai Rp 15 jt", ["Struktur saham asing", "Laporan BKPM/OSS", "Izin investasi", "Pendampingan DGT & Bank"], "Globe2", "pendirian", false, 4],
  ["firma-ud", "Firma, UD & Persekutuan", "Bentuk badan usaha klasik untuk usaha dagang & kemitraan — berdiri cepat, biaya efisien.", "Mulai Rp 1,2 jt", ["Akta pendirian", "Pengesahan legalitas", "NPWP & NIB", "Konsultasi tanggung jawab"], "Store", "pendirian", false, 5],
  ["koperasi", "Pendirian Koperasi", "Badan usaha beranggotakan warga — legalitas lengkap dari RAT hingga Kemenkop.", "Mulai Rp 2,5 jt", ["BADAN HUKUM Kemenkop", "AD/ART koperasi", "NPWP & NIB", "Pendampingan RAT"], "Handshake", "pendirian", false, 6],
  ["yayasan", "Yayasan & Lembaga Nirlaba", "Untuk kegiatan sosial, pendidikan, & kemanusiaan — badan hukum sah dengan struktur organ yang benar.", "Mulai Rp 3 jt", ["Akta yayasan", "SK Kemenkumham", "NPWP & NIB", "Panduan kepatuhan"], "HeartHandshake", "pendirian", false, 7],
  ["perkumpulan", "Perkumpulan & Asosiasi", "Wadah profesional & komunitas — berbadan hukum resmi untuk kredibilitas maksimal.", "Mulai Rp 2,5 jt", ["Akta perkumpulan", "Pengesahan kehakiman", "NPWP & NIB", "Konsultasi AD/ART"], "Network", "pendirian", false, 8],
  ["nib-oss", "NIB, OSS-RBA & Pemetaan KBLI", "Nomor Induk Berusaha sebagai identitas utama bisnis Anda di sistem OSS-RBA — KBLI dipetakan presisi.", "Mulai Rp 750 rb", ["Registrasi OSS-RBA", "Analisis KBLI optimal", "NIB sama dengan izin dasar", "Revisi & penyesuaian data"], "Stamp", "perizinan", true, 9],
  ["izin-sektor", "Izin Usaha Sektor & Sertifikat Standar", "Izin sektor spesifik — kesehatan, logistik, makanan, pendidikan — dipetakan sampai SS & lisensi final.", "Mulai Rp 1 jt", ["Analisis perizinan berusaha", "Perizinan tunggal", "Sertifikat standar", "Izin sektor instansi terkait"], "FileCheck2", "perizinan", false, 10],
  ["virtual-office", "Domisili Usaha & Virtual Office", "Alamat bisnis bergengsi tanpa biaya kantor fisik — SKDU, terima surat, siap untuk PT & PMA.", "Mulai Rp 500 rb", ["SKDU / SKPPK", "Virtual office premium", "Layanan terima surat", "Cocok untuk PT & PMA"], "MapPin", "perizinan", false, 11],
  ["apostille", "Legalisisasi, Apostille & Terjemahan", "Dokumen legal Anda diakui di luar negeri — apostille, legalisasi Kemenlu, & sworn translation.", "Mulai Rp 350 rb/dok", ["Apostille & legalisasi", "Terjemahan tersumpah", "Notarisasi dokumen", "Konsularisasi negara tujuan"], "FileSignature", "perizinan", false, 12],
  ["pendaftaran-merek", "Pendaftaran Merek", "Amankan brand Anda sebelum orang lain. Cek ketersediaan + pengajuan ke DJKI.", "Mulai Rp 1,5 jt", ["Pencarian & analisis merek", "Pengajuan kelas Nice", "Monitoring status", "Balasan argumen DJKI"], "Lightbulb", "ki", true, 13],
  ["hak-cipta", "Hak Cipta, Paten & Desain Industri", "Karya, inovasi, dan desain Anda tercatat resmi di DJKI — bukti kepemilikan yang kuat di pengadilan.", "Mulai Rp 900 rb", ["Hak cipta karya & aplikasi", "Paten & paten sederhana", "Desain industri", "Pendampingan klaim"], "Copyright", "ki", false, 14],
  ["franchise", "Lisensi Franchise (STPW)", "Siap ekspansi waralaba? STPW sah dari Kemenperin supaya franchise Anda legal & terlindungi.", "Mulai Rp 2 jt", ["Pengajuan STPW", "Penyusunan perjanjian", "Prospektus & manual", "Wajib lapor terpenuhi"], "ScrollText", "ki", false, 15],
  ["halal", "Sertifikasi Halal", "Sertifikat halal resmi BPJPH — proses self-declare atau reguler, produk siap masuk pasar Muslim.", "Mulai Rp 1,5 jt", ["Pendampingan BPJPH", "Pemeriksaan LPH", "Fatwa & penetapan", "Label halal siap pakai"], "BadgeCheck", "sertifikasi", false, 16],
  ["bpom", "Izin Edar & Notifikasi BPOM", "MD, ML, dan notifikasi kosmetika — produk Anda legal beredar di seluruh Indonesia.", "Mulai Rp 2 jt", ["Izin edar MD/ML", "Notifikasi kosmetika", "Cek kemasan & label", "Pendampingan lab test"], "ShieldCheck", "sertifikasi", false, 17],
  ["sni", "Sertifikat SNI", "Standar nasional Indonesia untuk produk Anda — jaminan mutu yang diwajibkan pasar & tender.", "Mulai Rp 2,5 jt", ["Audit pabrik LSPro", "Pengujian lab terakreditasi", "Sertifikat & logo SNI", "Pemantauan berkala"], "Award", "sertifikasi", false, 18],
  ["iso", "Sertifikasi ISO", "ISO 9001, 14001, 22000, 27001 — standar internasional yang membuka pintu korporasi & ekspor.", "Mulai Rp 5 jt", ["Gap analysis", "Dokumentasi sistem mutu", "Audit sertifikasi", "Sertifikat berlaku internasional"], "Medal", "sertifikasi", false, 19],
  ["npwp-pkp", "NPWP Badan & Pengukuhan PKP", "NPWP badan, pengukuhan PKP, hingga fasilitas pajak — kewajiban pajak Anda rapi sejak hari pertama.", "Mulai Rp 400 rb", ["NPWP badan", "Pengukuhan PKP", "Fasilitas PP 23/2018", "Konsultasi tarif optimal"], "Receipt", "pajak", false, 20],
  ["pelaporan-pajak", "SPT, e-Faktur & Pelaporan Pajak", "SPT Tahunan & Masa, e-Faktur, buku besar — konsultan pajak bersertifikat menangani semuanya.", "Mulai Rp 500 rb/bln", ["SPT Tahunan badan/pribadi", "SPT Masa PPN/PPh", "e-Faktur & e-Bupot", "Restitusi & kompensasi"], "Calculator", "pajak", false, 21],
  ["bpjs", "BPJS Kesehatan & Ketenagakerjaan", "Registrasi & administrasi BPJS untuk karyawan — patuh UU Ketenagakerjaan tanpa pusing.", "Mulai Rp 300 rb", ["Registrasi perusahaan", "Pendaftaran karyawan", "Mutasi & tagihan bulanan", "Klaim & dewan pengurus"], "HeartPulse", "ketenagakerjaan", false, 22],
  ["kitas-kitap", "KITAS/KITAP & RPTKA", "Izin tinggal & kerja tenaga asing — RPTKA, VITAS, KITAS/KITAP diurus end-to-end.", "Mulai Rp 5 jt", ["RPTKA & IMTA", "VITAS & KITAS", "KITAS keluarga & KITAP", "Perpanjangan & merger"], "Plane", "ketenagakerjaan", false, 23],
  ["perubahan-akta", "Perubahan Akta & Struktur", "Ganti nama, tambah modal, pindah alamat, masuk pemegang saham baru — akta & persetujuan beres rapi.", "Mulai Rp 1,5 jt", ["Perubahan AD/arta", "RUPS & akta perubahan", "Pengesahan Kemenkumham", "Update NIB & OSS"], "FileText", "korporasi", false, 24],
  ["likuidasi", "Pembubaran & Likuidasi", "Tutup badan usaha dengan benar — tanpa warisan kewajiban pajak & legal yang menghantui.", "Mulai Rp 2,5 jt", ["RUPS pembubaran", "Pelunasan kewajiban", "Penghapusan NPWP & NIB", "Pencabutan SK"], "Archive", "korporasi", false, 25],
  ["website-ecommerce", "Website & E-Commerce", "Website company profile sampai toko online — cepat, SEO-ready, dan meyakinkan pelanggan.", "Mulai Rp 3 jt", ["Company profile premium", "Toko online & payment gateway", "SEO & Google Business", "Domain, hosting, email bisnis"], "Rocket", "digital", true, 26],
  ["digitalisasi-ai", "Otomasi & AI untuk Bisnis", "Chatbot layanan pelanggan, otomasi marketing, integrasi AI — operasional jalan 24 jam tanpa lelah.", "Mulai Rp 2,5 jt", ["AI customer service", "Otomasi WhatsApp & CRM", "Dashboard & laporan otomatis", "Integrasi sistem internal"], "Sparkles", "digital", false, 27],
] as const;

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

  for (const [slug, title, desc, price, items, icon, category, featured, order] of SERVICES) {
    await prisma.service.upsert({
      where: { slug },
      update: { title, desc, price, features: JSON.stringify(items), icon, category, featured, order },
      create: { slug, title, desc, price, features: JSON.stringify(items), icon, category, featured, order },
    });
  }
  console.log(`Services: ${SERVICES.length}`);

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
