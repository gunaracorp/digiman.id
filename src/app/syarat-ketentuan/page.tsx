import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Syarat dan Ketentuan Layanan — DIGIMAN.ID",
  description:
    "Syarat dan Ketentuan Layanan resmi DIGIMAN.ID (PT Digital Bisnis Manajemen), versi 1.0: dasar hukum dan penerimaan, identitas penyedia, kerangka 7 Lapis Langit Legalitas, kewajiban klien, harga dan pembayaran, Garansi Terbit, pengembalian dana, kekayaan intelektual, kerahasiaan, batasan tanggung jawab yang berimbang, keadaan memaksa, pengakhiran, serta penyelesaian sengketa yang menghormati hak konsumen.",
  path: "/syarat-ketentuan",
});

const STATEMENT =
  "Dokumen ini menetapkan syarat dan ketentuan penggunaan situs digiman.id serta pemanfaatan seluruh layanan yang dioperasikan PT Digital Bisnis Manajemen, perseroan terbatas yang didirikan berdasarkan hukum Republik Indonesia dan telah memperoleh pengesahan Kementerian Hukum dan HAM berdasarkan Surat Keputusan AHU-059566.AH.01.30.Tahun 2022, di bawah merek DIGIMAN.ID. Dokumen ini disusun dengan niat memberikan perlindungan yang seimbang bagi Perusahaan dan bagi Anda.";

const SECTIONS = [
  {
    h: "Pasal 1 — Dasar, Penerimaan, dan Kekuatan Mengikat",
    p: [
      "Pasal ini menjelaskan dasar hukum dokumen, bagaimana Anda dinyatakan menyetujuinya, dan kedudukannya terhadap perjanjian lain.",
      "1.1 Syarat dan Ketentuan ini (\"Ketentuan\") disusun berdasarkan prinsip kebebasan berkontrak sebagaimana dimaksud Pasal 1338 Buku III Kitab Undang-Undang Hukum Perdata, Undang-Undang Nomor 8 Tahun 1999 tentang Perlindungan Konsumen, Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik sebagaimana telah diubah terakhir dengan Undang-Undang Nomor 1 Tahun 2024, serta Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.",
      "1.2 Dengan mengakses atau menggunakan Situs, mengajukan konsultasi, memesan Layanan, atau menggunakan Portal Klien dan Gunara OS, Anda menyatakan telah membaca, memahami, dan menerima Ketentuan ini. Apabila Anda tidak menyetujuinya, Anda dianjurkan untuk tidak menggunakan Situs dan Layanan.",
      "1.3 Apabila terdapat Perjanjian Layanan tersendiri antara Anda dan Perusahaan, ketentuan Perjanjian Layanan tersebut berlaku mengungguli Ketentuan ini dalam hal terdapat pertentangan, sepanjang tidak melanggar peraturan perundang-undangan.",
      "1.4 Ketentuan ini tidak mengurangi hak-hak Anda sebagai konsumen yang dilindungi oleh peraturan perundang-undangan dan yang berdasarkan hukum tidak dapat dikesampingkan.",
      "1.5 Ketentuan ini menggantikan seluruh syarat dan ketentuan layanan versi sebelumnya yang dipublikasikan oleh Perusahaan.",
    ],
  },
  {
    h: "Pasal 2 — Definisi",
    p: [
      "2.1 Dalam Ketentuan ini, istilah berikut dimaknai sebagai berikut:",
      "(a) \"Perusahaan\" adalah PT Digital Bisnis Manajemen, dengan merek layanan DIGIMAN.ID, berkedudukan di Kampung Gunung Guntur RT 022/RW 006 No. 50, Dusun Bojong, Kelurahan Padasuka, Kecamatan Sukarame, Kabupaten Tasikmalaya, Provinsi Jawa Barat 46464, Indonesia.",
      "(b) \"Situs\" adalah situs web dengan domain digiman.id beserta seluruh halaman dan subdomainnya yang dioperasikan Perusahaan.",
      "(c) \"Layanan\" adalah seluruh jasa yang ditawarkan Perusahaan sebagaimana diuraikan dalam Pasal 4.",
      "(d) \"Klien\" adalah orang pribadi atau badan usaha yang telah menyetujui Penawaran dan/atau menandatangani Perjanjian Layanan dengan Perusahaan.",
      "(e) \"Pengguna\" adalah setiap orang yang mengakses Situs, termasuk calon klien dan pengunjung.",
      "(f) \"Portal Klien\" adalah ruang kerja digital untuk unggah dokumen, pemantauan kemajuan, dan komunikasi; \"Gunara OS\" adalah platform produk digital Perusahaan untuk administrasi dan transformasi digital.",
      "(g) \"Instansi\" adalah kementerian, lembaga, dan pemerintah yang berwenang — antara lain Kementerian Hukum dan HAM, pengelola sistem OSS, Direktorat Jenderal Kekayaan Intelektual, dan Direktorat Jenderal Pajak.",
      "(h) \"Dokumen Klien\" adalah seluruh data, berkas, dan informasi yang Anda serahkan kepada Perusahaan dalam rangka Layanan.",
      "(i) \"Penawaran\" adalah dokumen tawaran jasa tertulis dari Perusahaan yang memuat lingkup, jadwal, dan biaya; \"Perjanjian Layanan\" adalah perjanjian tertulis yang ditandatangani kedua pihak atas dasar Penawaran.",
      "(j) \"Biaya Resmi Negara\" adalah biaya yang ditetapkan Instansi untuk suatu permohonan (misalnya biaya pengesahan akta, penerbitan dokumen, atau pendaftaran kekayaan intelektual); \"Hari Kerja\" adalah hari selain hari Minggu dan hari libur nasional.",
    ],
  },
  {
    h: "Pasal 3 — Identitas dan Legalitas Penyedia Layanan",
    p: [
      `3.1 Layanan disediakan oleh PT Digital Bisnis Manajemen, perseroan terbatas yang didirikan pada tanggal 26 Desember 2022 dan disahkan berdasarkan Surat Keputusan Menteri Hukum dan HAM Republik Indonesia Nomor AHU-059566.AH.01.30.Tahun 2022, dengan alamat kantor terdaftar di Kampung Gunung Guntur RT 022/RW 006 No. 50, Dusun Bojong, Kelurahan Padasuka, Kecamatan Sukarame, Kabupaten Tasikmalaya, Provinsi Jawa Barat 46464, Indonesia; dapat dihubungi melalui surel ${SITE.email} dan telepon/WhatsApp +62 813-1651-6524.`,
      "3.2 Layanan Perusahaan bersifat pendampingan administratif, perizinan, dan digitalisasi usaha. Layanan tersebut bukan penggantian nasihat hukum formal dalam sengketa, perwakilan di pengadilan, atau pendapat hukum (legal opinion) — untuk hal-hal tersebut, Anda dianjurkan menggunakan jasa advokat atau notaris secara langsung.",
      "3.3 Perusahaan bekerja bersama notaris, pakar pajak, dan pakar kepatuhan yang berpraktik secara pribadi menurut kewajiban profesinya; status profesi dan tanggung jawab profesinya tetap berada pada pihak yang bersangkutan.",
    ],
  },
  {
    h: "Pasal 4 — Ruang Lingkup Layanan: Tujuh Lapis Langit Legalitas",
    p: [
      "Layanan kami disusun dalam kerangka \"7 Lapis Langit Legalitas\" — dari fondasi badan hukum sampai transformasi digital. Lingkup aktual untuk setiap Klien ditetapkan dalam Penawaran dan Perjanjian Layanan masing-masing.",
      "4.1 Ruang lingkup umum Layanan mencakup tujuh lapis berikut:",
      "(a) Lapis 1 — Pendirian Badan Usaha: pendampingan pendirian PT, CV, yayasan, perkumpulan, atau badan usaha lain, termasuk penyusunan akta pendirian bersama notaris dan pengesahan pada Kementerian Hukum dan HAM;",
      "(b) Lapis 2 — Perizinan Usaha Berbasis Risiko: pendampingan penerbitan Nomor Induk Berusaha (NIB) dan perizinan umum melalui sistem OSS-RBA, penentuan KBLI, dan pernyataan kesediaan standar;",
      "(c) Lapis 3 — Perizinan Spesifik dan Sertifikasi: pendampingan perizinan lingkup/sektoral dan sertifikasi pendukung yang dituntut oleh jenis usaha menurut KBLI;",
      "(d) Lapis 4 — Kekayaan Intelektual: pendampingan pendaftaran merek, hak cipta, paten, dan desain industri pada Direktorat Jenderal Kekayaan Intelektual;",
      "(e) Lapis 5 — Kepatuhan Perpajakan dan Administrasi: pendampingan registrasi NPWP, kepatuhan administrasi perpajakan dasar, dan penataan dokumen administrasi usaha;",
      "(f) Lapis 6 — Legalitas Lanjutan: penataan dokumen operasional usaha, antara lain kontrak kerja sama, dokumen kepegawaian dasar, dan kepatuhan berkala;",
      "(g) Lapis 7 — Transformasi Digital: penyediaan dan pendampingan Gunara OS, Portal Klien, serta sistem administrasi dan arsip digital usaha.",
      "4.2 Lingkup detail, jumlah permohonan, dan estimasi waktu setiap Layanan ditetapkan dalam Penawaran. Hal-hal yang tidak dinyatakan secara tegas dalam Penawaran tidak dianggap bagian dari Layanan.",
      "4.3 Layanan tidak mencakup, kecuali disepakati secara tertulis: advokasi litigasi atau perwakilan di pengadilan; pendapat hukum formal; penandatanganan akta oleh notaris (ditandatangani oleh notaris secara pribadi menurut jabatannya); pembayaran Biaya Resmi Negara (ditagihkan terpisah sesuai Pasal 9.2); dan jaminan keputusan Instansi sebagaimana diatur Pasal 10.",
    ],
  },
  {
    h: "Pasal 5 — Prinsip Pelayanan Profesional",
    p: [
      "5.1 Perusahaan memberikan Layanan dengan integritas, ketelitian, dan kepatuhan pada hukum. Perusahaan tidak menggunakan jalur singkat yang melanggar peraturan, tidak memfasilitasi penyuapan, dan tidak memalsukan dokumen — permintaan semacam itu akan ditolak.",
      "5.2 Perusahaan menyampaikan biaya, proses, dan risiko dengan transparan sejak awal, dan menyampaikan perkembangan pekerjaan secara teratur melalui Portal Klien atau kanal komunikasi yang disepakati.",
      "5.3 Seluruh personel dan pakar lintas bidang yang bekerja untuk Klien terikat kewajiban kerahasiaan. Informasi Klien hanya digunakan untuk melaksanakan Layanan.",
      "5.4 Perusahaan menanggapi komunikasi Klien melalui kanal utama paling lambat 1 (satu) Hari Kerja, kecuali diatur lain dalam Perjanjian Layanan atau dalam keadaan yang tidak dapat dikuasai Perusahaan.",
      "5.5 Perusahaan memberikan pelayanan tanpa diskriminasi dan menolak setiap bentuk tekanan yang bertentangan dengan hukum dan etika profesi.",
    ],
  },
  {
    h: "Pasal 6 — Pembentukan Perjanjian, Penawaran, dan Pesanan",
    p: [
      "6.1 Penawaran berlaku selama 30 (tiga puluh) hari kalender sejak diterbitkan, kecuali dinyatakan lain. Harga dapat berubah setelah masa berlaku berakhir atau bila regulasi biaya berubah.",
      "6.2 Perjanjian Layanan terbentuk apabila Klien mengonfirmasi persetujuan atas Penawaran secara tertulis dan/atau menyelesaikan pembayaran pertama sesuai termin pada Pasal 9.4.",
      "6.3 Setiap Perjanjian Layanan sekurang-kurangnya memuat: lingkup Layanan, estimasi waktu, komposisi biaya, jadwal pembayaran, penanggung jawab kedua pihak, dan mekanisme perubahan lingkup.",
      "6.4 Syarat-syarat yang dicantumkan Klien dalam pesanan pembelian (purchase order) atau dokumen serupa tidak mengikat Perusahaan apabila bertentangan dengan Ketentuan ini atau Perjanjian Layanan, kecuali disetujui secara tertulis.",
    ],
  },
  {
    h: "Pasal 7 — Kewajiban Klien",
    p: [
      "7.1 Klien wajib menyediakan dokumen yang sah, benar, lengkap, dan mutakhir. Klien bertanggung jawab sepenuhnya atas kebenaran dan keabsahan Dokumen Klien yang diserahkan; Perusahaan memproses berdasarkan dokumen tersebut dengan itikad baik.",
      "7.2 Klien menyediakan dokumen dan keputusan yang diperlukan dalam waktu yang wajar. Keterlambatan penyediaan oleh Klien menggeser jadwal Layanan secara proporsional tanpa dianggap kelalaian Perusahaan.",
      "7.3 Biaya Resmi Negara, biaya notaris, dan biaya pihak ketiga lainnya ditanggung Klien sebagaimana diatur Pasal 9.",
      "7.4 Klien menunjuk satu penanggung jawab resmi yang berwenang mengambil keputusan dan memberikan keterangan, agar komunikasi dan persetujuan berjalan efektif.",
      "7.5 Apabila Klien adalah badan usaha, perwakilan yang menandatangani menjamin dirinya berwenang mengikat badan usaha tersebut.",
      "7.6 Klien dilarang menggunakan Layanan untuk tujuan yang melanggar hukum. Perusahaan berhak menolak atau menghentikan pekerjaan yang diketahui atau diduga kuat digunakan untuk tujuan semacam itu, dengan pemberitahuan yang menjelaskan alasannya.",
    ],
  },
  {
    h: "Pasal 8 — Akun Portal Klien dan Layanan Digital",
    p: [
      "8.1 Kredensial akun Portal Klien bersifat pribadi dan tidak boleh dipindahkan kepada pihak lain tanpa persetujuan Perusahaan. Klien bertanggung jawab atas seluruh aktivitas yang terjadi melalui akunnya.",
      "8.2 Kehilangan, kebocoran, atau penggunaan kredensial secara tidak sah wajib dilaporkan kepada Perusahaan paling lambat 1×24 jam sejak diketahui.",
      "8.3 Perusahaan berhak menunda sementara akses akun apabila terdapat dugaan yang patut atas penyalahgunaan atau ancaman keamanan, dengan pemberitahuan kepada Klien secepatnya dan penerapan langkah proporsional.",
      "8.4 Data pribadi dalam Portal Klien dikelola sesuai Kebijakan Privasi dan Proteksi Data Pribadi DIGIMAN.ID.",
      "8.5 Perusahaan berupaya menjaga ketersediaan Layanan digital dengan standar yang wajar bagi industri. Pemeliharaan terjadwal akan diberitahukan sebelumnya bila memungkinkan; Perusahaan tidak menjamin Layanan digital bebas gangguan sepenuhnya, namun berkomitmen memulihkan gangguan dengan segera.",
    ],
  },
  {
    h: "Pasal 9 — Harga, Biaya, Pembayaran, dan Pajak",
    p: [
      "9.1 Harga Layanan dinyatakan dalam Penawaran dalam mata uang Rupiah. Seluruh biaya yang harus ditanggung Klien diuraikan secara terbuka; Perusahaan tidak mengenakan biaya tersembunyi.",
      "9.2 Komposisi biaya dipisahkan menjadi: (a) biaya jasa Perusahaan; (b) Biaya Resmi Negara yang dibayarkan kepada Instansi; dan (c) biaya mitra seperti imbalan notaris. Penawaran menunjukkan setiap komponen secara terpisah.",
      "9.3 Pajak — termasuk PPN sepanjang berlaku — dikenakan sesuai peraturan perpajakan yang berlaku dan dicantumkan pada faktur.",
      "9.4 Pembayaran dilakukan sesuai jadwal dalam Perjanjian Layanan. Apabila tidak diatur lain, pembayaran dilakukan dalam dua tahap: 50% (lima puluh persen) saat pembentukan Perjanjian Layanan dan 50% (lima puluh persen) sebelum penyerahan hasil akhir.",
      "9.5 Keterlambatan pembayaran dapat menyebabkan penundaan jadwal Layanan secara proporsional; Perusahaan menyampaikan pemberitahuan sebelum penundaan. Denda keterlambatan, apabila disepakati, mengikuti Perjanjian Layanan.",
      "9.6 Perusahaan menerbitkan faktur dan bukti pembayaran yang sah untuk setiap transaksi.",
    ],
  },
  {
    h: "Pasal 10 — Garansi, Ekspektasi Layanan, dan Ketergantungan Instansi",
    p: [
      "10.1 \"Garansi Terbit\" dimaknai sebagai berikut: apabila dokumen yang menjadi objek Layanan tidak terbit karena kesalahan proses atau penyusunan berkas oleh Perusahaan, Perusahaan memperbaiki dan mengulang pengerjaannya tanpa biaya jasa tambahan hingga dokumen terbit. Garansi ini bukan jaminan atas keputusan Instansi, yang sepenuhnya berada dalam kewenangan Instansi.",
      "10.2 Waktu penyelesaian yang disampaikan adalah estimasi berdasarkan praktik terbaik dan pengalaman. Instansi memiliki kewenangan penuh atas waktu penerbitan dokumennya; keterlambatan yang bersumber dari Instansi bukan merupakan kelalaian Perusahaan.",
      "10.3 Apabila terjadi perubahan regulasi, kebijakan biaya, atau prosedur Instansi yang memengaruhi pekerjaan, Perusahaan menyampaikan dampak dan penyesuaian yang diperlukan kepada Klien segera setelah diketahui.",
      "10.4 Statistik kinerja historis yang ditampilkan Perusahaan — antara lain tingkat ketepatan waktu 98,4% — merupakan rekaman kinerja masa lalu, bukan jaminan hasil untuk transaksi mendatang.",
      "10.5 Kegagalan terbit yang bersumber dari dokumen yang tidak benar, tidak sah, atau tidak lengkap yang diserahkan Klien tidak termasuk dalam Garansi Terbit; tanggung jawab hukum atas keabsahan dokumen tetap berada pada Klien.",
    ],
  },
  {
    h: "Pasal 11 — Pengembalian Dana",
    p: [
      "11.1 Perusahaan menerapkan prinsip pengembalian yang adil dan proporsional: biaya jasa untuk pekerjaan yang belum dilaksanakan dikembalikan kepada Klien apabila Layanan dibatalkan.",
      "11.2 Biaya yang telah dibayarkan kepada Instansi atau pihak ketiga atas nama Klien tidak dapat dikembalikan oleh Perusahaan, kecuali pihak penerima mengembalikannya; Perusahaan mendampingi proses permohonan pengembaliannya.",
      "11.3 Pembatalan sebelum pengerjaan dimulai menghasilkan pengembalian penuh biaya jasa, dikurangi biaya administrasi transfer bila ada.",
      "11.4 Permintaan pengembalian disampaikan secara tertulis; setelah verifikasi, pengembalian dilakukan paling lambat 14 (empat belas) Hari Kerja ke rekening sumber pembayaran.",
    ],
  },
  {
    h: "Pasal 12 — Jaminan Mutu dan Koreksi Kesalahan",
    p: [
      "12.1 Perusahaan mengerjakan Layanan menurut standar keprofesian yang baik dan menyelesaikannya sesuai lingkup Perjanjian Layanan.",
      "12.2 Kesalahan yang bersumber dari Perusahaan diperbaiki secara gratis dan diprioritaskan.",
      "12.3 Klien menyampaikan temuan cacat hasil Layanan paling lambat 14 (empat belas) Hari Kerja sejak penyerahan hasil, agar koreksi dapat dilakukan pada waktu yang paling efektif; temuan setelah jangka tersebut tetap ditinjau dengan itikad baik.",
      "12.4 Hak-hak Klien berkedudukan sebagai konsumen menurut Undang-Undang Perlindungan Konsumen tetap berlaku penuh dan tidak dibatasi oleh Ketentuan ini.",
    ],
  },
  {
    h: "Pasal 13 — Hak Kekayaan Intelektual",
    p: [
      "13.1 Seluruh konten Situs — termasuk teks, desain antarmuka, logo, dan sistem yang menjalankannya — dilindungi menurut Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta dan peraturan kekayaan intelektual lainnya, dan merupakan milik Perusahaan atau pemberi lisensinya.",
      "13.2 Perusahaan memberikan kepada Pengguna lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat dicabut untuk mengakses dan menggunakan Situs sesuai Ketentuan ini.",
      "13.3 Merek DIGIMAN.ID dan Gunara OS beserta identitas visualnya adalah milik Perusahaan. Penggunaan tanpa izin tertulis — termasuk untuk promosi, penjualan kembali, atau pembuatan produk serupa yang menimbulkan kebingungan — dilarang.",
      "13.4 Dokumen Klien tetap menjadi milik Klien. Perusahaan tidak menggunakan Dokumen Klien di luar pelaksanaan Layanan tanpa persetujuan tertulis; penampilan nama atau pengalaman Klien sebagai rujukan (testimonial/portofolio) hanya dilakukan dengan izin.",
      "13.5 Saran dan umpan balik yang Anda sampaikan dapat Perusahaan gunakan untuk perbaikan Layanan; hal ini tidak mengubah hak kekayaan intelektual Anda atas materi yang Anda miliki.",
    ],
  },
  {
    h: "Pasal 14 — Penggunaan Situs dan Layanan yang Dilarang",
    p: [
      "14.1 Dalam menggunakan Situs dan Layanan, Anda dilarang:",
      "(a) melanggar peraturan perundang-undangan yang berlaku;",
      "(b) mengambil data Situs secara otomatis (scraping) atau menggunakan robot tanpa izin tertulis;",
      "(c) menyalahgunakan akun, mengakses akun pihak lain, atau berbagi kredensial;",
      "(d) melakukan rekayasa balik (reverse engineering) terhadap sistem Perusahaan;",
      "(e) mengunggah atau menyebarkan kode berbahaya; mengelabui sistem atau pengguna lain; atau menyamar sebagai Perusahaan;",
      "(f) memalsukan dokumen, identitas, atau keterangan yang menjadi dasar permohonan; serta",
      "(g) mengganggu infrastruktur, membebani tidak wajar sistem, atau memfasilitasi pelanggaran oleh pihak lain.",
      "14.2 Atas pelanggaran, Perusahaan dapat menunda atau menghentikan Layanan, menutup akun, dan mengambil tindakan hukum yang tersedia, dengan pemberitahuan yang menjelaskan dasar tindakan.",
    ],
  },
  {
    h: "Pasal 15 — Kerahasiaan dan Perlindungan Data Klien",
    p: [
      "15.1 Perusahaan menjaga kerahasiaan seluruh informasi Klien yang tidak bersifat publik, selama Perjanjian Layanan berlaku dan selama 5 (lima) tahun setelah berakhirnya.",
      "15.2 Kewajiban kerahasiaan tidak berlaku atas informasi yang: telah menjadi publik tanpa kesalahan Perusahaan; wajib diungkapkan menurut perintah hukum yang sah; atau diungkapkan dengan persetujuan Klien.",
      "15.3 Pemrosesan data pribadi Klien dan pengguna mengikuti Kebijakan Privasi dan Proteksi Data Pribadi DIGIMAN.ID, yang merupakan bagian tidak terpisahkan dari Ketentuan ini.",
      "15.4 Setelah Layanan berakhir, Dokumen Klien yang berada dalam penguasaan Perusahaan dikembalikan atau dihancurkan aman atas permintaan Klien, sepanjang tidak bertentangan dengan kewajiban menyimpan dokumen menurut hukum.",
    ],
  },
  {
    h: "Pasal 16 — Batasan Tanggung Jawab",
    p: [
      "Prinsipnya: Perusahaan bertanggung jawab atas kerugian yang disebabkan kesalahannya, dengan batas yang adil — dan batas itu tidak berlaku untuk hal-hal yang menurut hukum tidak boleh dibatasi.",
      "16.1 Perusahaan bertanggung jawab atas kerugian langsung yang ditimbulkan oleh kelalaian atau wanprestasi Perusahaan dalam pelaksanaan Layanan.",
      "16.2 Kecuali ditentukan lain oleh hukum, tanggung jawab total Perusahaan untuk satu Perjanjian Layanan dibatasi maksimal sebesar total biaya jasa yang telah dibayarkan Klien untuk Layanan tersebut dalam 12 (dua belas) bulan terakhir.",
      "16.3 Batasan pada Pasal 16.2 tidak berlaku untuk: kesengajaan atau kelalaian berat Perusahaan; kewajiban ganti rugi kepada konsumen yang menurut Undang-Undang Perlindungan Konsumen tidak dapat dikecualikan atau dibatasi; kewajiban hukum lain yang menurut peraturan perundang-undangan tidak dapat dikesampingkan; serta tanggung jawab atas hilangnya nyawa atau cedera badan.",
      "16.4 Sebatas yang diizinkan hukum, Perusahaan tidak bertanggung jawab atas kerugian tidak langsung — antara lain kehilangan keuntungan atau kehilangan peluang usaha — yang tidak merupakan akibat langsung yang dapat diprediksi dari pelanggaran.",
      "16.5 Perusahaan tidak bertanggung jawab atas kelalaian atau tindakan tidak sah oleh Klien, perwakilan Klien, atau pihak yang diarahkan Klien.",
      "Klausul pembatasan tanggung jawab ini disusun untuk keadilan kedua pihak. Untuk transaksi bernilai besar atau berisiko tinggi, klausul ini perlu ditinjau bersama penasihat hukum sesuai kondisi spesifik transaksi.",
    ],
  },
  {
    h: "Pasal 17 — Ganti Rugi",
    p: [
      "17.1 Klien mengganti rugi Perusahaan dari klaim pihak ketiga yang timbul karena dokumen atau keterangan yang tidak benar yang diserahkan Klien, atau karena penggunaan Layanan di luar tujuan yang sah.",
      "17.2 Perusahaan mengganti rugi Klien dari klaim pihak ketiga yang timbul karena kesalahan Perusahaan yang melanggar Perjanjian Layanan atau hukum yang berlaku.",
      "17.3 Pihak yang meminta ganti rugi memberitahukan pihak lainnya segera setelah menerima klaim, memberikan kesempatan ikut membela diri, dan bekerja sama secara wajar dalam penanganannya.",
    ],
  },
  {
    h: "Pasal 18 — Keadaan Memaksa",
    p: [
      "18.1 Keadaan memaksa adalah keadaan di luar kendali yang wajar dari satu pihak dan tidak dapat diantisipasi — antara lain bencana alam, kebakaran, perang, huru-hara, pandemi, kebijakan Instansi yang berubah secara mendadak dan bersifat mengikat, serta kegagalan total jaringan telekomunikasi yang meluas.",
      "18.2 Pihak yang terdampak memberitahukan pihak lainnya segera, paling lambat 5 (lima) Hari Kerja sejak keadaan diketahui, beserta perkiraan durasi, dan berusaha membatasi dampaknya.",
      "18.3 Tenggat waktu pelaksanaan ditunda selama keadaan memaksa berlangsung. Apabila keadaan memaksa berlangsung lebih dari 90 (sembilan puluh) hari kalender, masing-masing pihak berhak mengakhiri Perjanjian Layanan dengan penyelesaian yang proporsional sesuai Pasal 11 dan Pasal 19.",
    ],
  },
  {
    h: "Pasal 19 — Pengakhiran dan Penyelesaian Akhir",
    p: [
      "19.1 Perjanjian Layanan berakhir karena: penyelesaian seluruh Layanan; kesepakatan tertulis kedua pihak; atau pengakhiran oleh salah satu pihak apabila pihak lainnya melakukan pelanggaran berat dan tidak memperbaikinya dalam 14 (empat belas) hari kalender sejak pemberitahuan tertulis.",
      "19.2 Setelah pengakhiran: Klien membayar biaya jasa untuk pekerjaan yang telah dilaksanakan; Perusahaan menyerahkan seluruh dokumen milik Klien yang ada dalam penguasaannya; dan data pribadi diperlakukan sesuai Kebijakan Privasi.",
      "19.3 Hak dan kewajiban yang telah timbul sebelum pengakhiran — termasuk kewajiban kerahasiaan, batasan tanggung jawab, dan penyelesaian sengketa — tetap bertahan.",
    ],
  },
  {
    h: "Pasal 20 — Hukum yang Berlaku dan Penyelesaian Sengketa",
    p: [
      "20.1 Ketentuan ini diatur dan ditafsirkan menurut hukum Republik Indonesia.",
      "20.2 Setiap perselisihan terlebih dahulu diselesaikan melalui musyawarah untuk mufakat dalam 30 (tiga puluh) hari kalender sejak salah satu pihak menyampaikan pemberitahuan tertulis mengenai perselisihan.",
      "20.3 Apabila musyawarah tidak menghasilkan kesepakatan, para pihak bersepakat menempuh mediasi bersama dalam masa 30 (tiga puluh) hari kalender berikutnya sebelum menempuh jalur penyelesaian sengketa berikutnya.",
      "20.4 Apabila musyawarah dan mediasi tidak berhasil, sengketa antara pelaku usaha diselesaikan melalui arbitrase pada Badan Arbitrase Nasional Indonesia (BANI) di Jakarta sesuai Undang-Undang Nomor 30 Tahun 1999 tentang Arbitrase, dengan bahasa pengadilan Bahasa Indonesia dan putusan yang mengikat kedua pihak; komposisi arbiter mengikuti peraturan arbitrase BANI.",
      "20.5 Bagi Klien yang berkedudukan sebagai konsumen, hak untuk menempuh jalur penyelesaian sengketa konsumen — termasuk Badan Penyelesaian Sengketa Konsumen atau pengadilan — sesuai Undang-Undang Perlindungan Konsumen tetap dihormati dan tidak dihilangkan oleh Ketentuan ini.",
      "20.6 Selama sengketa berlangsung, kewajiban yang tidak diperselisihkan tetap dilaksanakan dengan itikad baik.",
    ],
  },
  {
    h: "Pasal 21 — Ketentuan Umum dan Penutup",
    p: [
      "21.1 Klien tidak boleh mengalihkan hak dan kewajibannya dari Perjanjian Layanan tanpa persetujuan tertulis Perusahaan. Perusahaan dapat melibatkan pakar dan mitra dalam pelaksanaan Layanan dengan tetap memikul tanggung jawab utama terhadap Klien.",
      "21.2 Apabila suatu ketentuan Ketentuan ini dinyatakan tidak sah atau tidak dapat dilaksanakan, ketentuan lainnya tetap berlaku penuh dan ketentuan yang bermasalah diganti dengan ketentuan sah yang paling mendekati maksud awalnya.",
      "21.3 Ketidakmenegakan suatu hak oleh salah satu pihak bukan berarti pengesampingan hak tersebut; pengesampingan hanya berlaku bila disampaikan secara tertulis.",
      "21.4 Perusahaan dapat memperbarui Ketentuan ini dengan memberitahukannya pada Situs; pembaruan berlaku sejak tanggal yang tercantum pada versi terbaru. Perjanjian Layanan yang telah berjalan mengikuti versi pada saat pembentukannya, kecuali disepakati lain.",
      "21.5 Ketentuan ini merupakan keseluruhan kesepakatan mengenai penggunaan Situs dan ketentuan umum Layanan, dan tidak mengurangi ketentuan Perjanjian Layanan yang lebih rinci.",
      `21.6 Pemberitahuan resmi kepada Perusahaan disampaikan ke alamat kantor terdaftar sebagaimana diatur dalam Pasal 3.1 atau surel ${SITE.email}.`,
      "21.7 Dokumen ini disusun dengan niat memberikan perlindungan yang seimbang bagi kedua pihak dan ditinjau secara berkala agar tetap bijaksana di tengah perkembangan hukum. Untuk kondisi transaksi yang bersifat khusus, Anda dianjurkan memperoleh nasihat hukum yang independen.",
    ],
  },
];

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Syarat & Ketentuan", path: "/syarat-ketentuan" }])} />

      <PublicNav activePath="/syarat-ketentuan" />

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Syarat & Ketentuan", path: "/syarat-ketentuan" }]} />
        </div>

        <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Syarat dan Ketentuan Layanan
        </h1>
        <p className="mt-4 text-sm text-white/40">
          Versi 1.0 — berlaku sejak 8 November 2026
        </p>

        <p className="mt-6 text-[15px] leading-[1.85] text-white/65">{STATEMENT}</p>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((sec) => (
            <section key={sec.h}>
              <h2 className="font-[family-name:var(--font-grotesk)] text-xl font-bold text-white">
                {sec.h}
              </h2>
              {sec.p.map((par, i) => (
                <p key={i} className="mt-3 text-[15px] leading-[1.85] text-white/65">
                  {par}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/55">
          Dokumen pendamping:{" "}
          <a href="/kebijakan-privasi" className="text-[var(--gold)] hover:underline">
            Kebijakan Privasi dan Proteksi Data Pribadi DIGIMAN.ID
          </a>{" "}
          — cara kami mengumpulkan, menggunakan, dan melindungi data Anda.
        </p>

        <p className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/55">
          Pertanyaan tentang syarat ini? Hubungi{" "}
          <a href={`mailto:${SITE.email}`} className="text-[var(--gold)] hover:underline">
            {SITE.email}
          </a>{" "}
          — kami jelaskan dalam bahasa yang jelas, bukan dalam labirin klausul.
        </p>
      </main>

      <PublicFooter />
    </div>
  );
}
