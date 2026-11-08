import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Kebijakan Privasi dan Proteksi Data Pribadi — DIGIMAN.ID",
  description:
    "Kebijakan Privasi dan Proteksi Data Pribadi resmi DIGIMAN.ID (PT Digital Bisnis Manajemen), versi 1.0, selaras UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi: data yang kami kumpulkan, dasar dan tujuan pemrosesan, cookie, pengungkapan kepada pihak ketiga, retensi, keamanan, hak Anda sebagai subjek data, notifikasi insiden 3×24 jam, dan cara menghubungi kami.",
  path: "/kebijakan-privasi",
});

const STATEMENT =
  "Dokumen ini merupakan pernyataan komitmen PT Digital Bisnis Manajemen, perseroan terbatas yang didirikan berdasarkan hukum Republik Indonesia dan telah memperoleh pengesahan Kementerian Hukum dan HAM Republik Indonesia berdasarkan Surat Keputusan AHU-059566.AH.01.30.Tahun 2022, dalam mengelola Data Pribadi Anda secara bertanggung jawab, aman, dan penuh hormat. Kebijakan ini berlaku untuk seluruh layanan yang dioperasikan di bawah merek DIGIMAN.ID, termasuk situs digiman.id, Portal Klien, dan platform Gunara OS.";

const SECTIONS = [
  {
    h: "Pasal 1 — Pendahuluan dan Komitmen Perusahaan",
    p: [
      "Pasal ini adalah pintu masuk seluruh kebijakan: siapa kami, kepada siapa kebijakan ini berlaku, dan prinsip dasar yang kami pegang dalam menangani Data Pribadi Anda.",
      "1.1 PT Digital Bisnis Manajemen (\"Perusahaan\") adalah penyedia jasa pendampingan legalitas badan usaha, perizinan berusaha berbasis risiko, kekayaan intelektual, kepatuhan administrasi, dan transformasi digital bagi pelaku usaha di Indonesia. Perusahaan berdiri pada tanggal 26 Desember 2022, pengesahannya tercatat dalam Surat Keputusan Menteri Hukum dan HAM Republik Indonesia Nomor AHU-059566.AH.01.30.Tahun 2022, dan menjalankan kegiatan usahanya melalui situs digiman.id, Portal Klien, serta platform Gunara OS, dengan dukungan tim pakar lintas bidang.",
      "1.2 Kebijakan Privasi ini (\"Kebijakan\") berlaku atas seluruh pemrosesan Data Pribadi yang dilakukan Perusahaan dalam kedudukan sebagai Pengendali Data Pribadi, mencakup pengunjung situs, calon klien, klien, perwakilan resmi badan usaha yang menggunakan layanan Perusahaan, pengguna Portal Klien dan Gunara OS, serta mitra kerja.",
      "1.3 Perusahaan memahami bahwa Data Pribadi bukanlah komoditas yang dapat diperjualbelikan, melainkan amanah yang dititipkan oleh seseorang kepada kami untuk mencapai tujuan tertentu. Atas dasar itu, setiap pemrosesan Data Pribadi wajib mematuhi prinsip: terbatas pada tujuan yang jelas dan sah, proporsional, transparan, aman, akurat, dan dapat dipertanggungjawabkan.",
      "1.4 Kebijakan ini disusun sebagai perwujudan kepatuhan terhadap Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (\"UU PDP\") beserta peraturan pelaksananya, serta dengan mempertimbangkan kerangka praktik terbaik internasional — antara lain prinsip perlindungan data OECD, standar manajemen keamanan informasi ISO/IEC 27001 dan ISO/IEC 27701, serta praktik berlalui umum (good practice) di bawah GDPR Uni Eropa — sebagai acuan kualitas, bukan sebagai pernyataan atau klaim sertifikasi.",
      "1.5 Dengan mengakses situs, menggunakan formulir kontak, mengajukan konsultasi, atau menggunakan Layanan dalam bentuk apa pun, Anda menyatakan telah membaca, memahami, dan menyetujui praktik yang diatur dalam Kebijakan ini. Kebijakan ini berlaku bersama-sama dan saling terhubung dengan Syarat dan Ketentuan Layanan DIGIMAN.ID.",
      "1.6 Apabila terdapat ketentuan dalam Kebijakan ini yang bertentangan dengan peraturan perundang-undangan Republik Indonesia, ketentuan peraturan perundang-undangan tersebut yang berlaku.",
    ],
  },
  {
    h: "Pasal 2 — Ringkasan dalam Bahasa Manusia: Sepuluh Komitmen Kami",
    p: [
      "Sebelum masuk ke bahasa hukum yang lengkap, berikut janji kami dalam sepuluh kalimat sederhana. Rincian hukumnya ada di pasal-pasal berikutnya — dan bila suatu saat terjadi perbedaan penafsiran, Pasal 18.2 menentukan bagaimana ambiguitas diselesaikan.",
      "(a) Kami tidak pernah menjual atau menyewakan Data Pribadi Anda kepada siapa pun, dalam kondisi apa pun. (Pasal 8.1)",
      "(b) Kami hanya memproses data Anda untuk tujuan yang disebutkan secara terbuka di muka, tidak lebih. (Pasal 6)",
      "(c) Kami meminta persetujuan Anda lebih dahulu untuk pemrosesan yang menuntut persetujuan, dan Anda dapat menariknya kapan saja tanpa penalti. (Pasal 6.3)",
      "(d) Kami melindungi data Anda dengan enkripsi, pembatasan akses berbasis peran, dan audit berkelanjutan. (Pasal 10)",
      "(e) Kami tidak menahan data Anda lebih lama dari yang diperlukan — setiap kategori data punya jadwal retensi tertulis. (Pasal 9)",
      "(f) Anda berhak meminta salinan, koreksi, pembatasan, portabilitas, atau penghapusan data Anda. (Pasal 11)",
      "(g) Kami menanggapi permintaan Anda dengan konfirmasi paling lambat 3×24 jam kerja dan penyelesaian paling lambat 30 hari kalender. (Pasal 11.2)",
      "(h) Jika terjadi kegagalan perlindungan data, kami memberitahu Anda dan Kementerian Komunikasi secara tertulis dalam 3×24 jam sebagaimana diwajibkan Pasal 46 UU PDP — kami tidak menyembunyikan insiden. (Pasal 15)",
      "(i) Kami tidak mengambil keputusan berdampak hukum signifikan atas diri Anda murni dengan otomatisasi tanpa penjelasan dan jalur keberatan. (Pasal 6.4)",
      "(j) Jika hak Anda dilanggar, Anda berhak menuntut ganti rugi dan/atau keadilan menurut hukum yang berlaku. (Pasal 11.1)",
    ],
  },
  {
    h: "Pasal 3 — Definisi",
    p: [
      "3.1 Dalam Kebijakan ini, istilah berikut dimaknai sebagai berikut:",
      "(a) \"Data Pribadi\" adalah data tentang orang pribadi yang teridentifikasi atau dapat diidentifikasi secara langsung maupun tidak langsung melalui data elektronik dan/atau bukan elektronik, sebagaimana dimaksud Pasal 1 angka 1 UU PDP.",
      "(b) \"Data Pribadi Spesifik\" adalah Data Pribadi yang pemrosesannya memerlukan perlindungan lebih ketat, antara lain data kesehatan, psikologis, politik, kejahatan atau sumber kekayaan, biometrik, dan fisik, sebagaimana dimaksud Pasal 4 ayat (3) UU PDP.",
      "(c) \"Pengendali Data Pribadi\" adalah pihak yang menentukan tujuan dan menerapkan kontrol atas pemrosesan Data Pribadi; dalam Kebijakan ini, Pengendali adalah PT Digital Bisnis Manajemen.",
      "(d) \"Memproses\" mencakup setiap tindakan atas Data Pribadi, seperti mengumpulkan, menyimpan, mencatat, mengorganisasi, menggunakan, mengungkapkan, mengubah, menghapus, atau menghancurkan.",
      "(e) \"Subjek Data\" adalah orang pribadi yang Data Pribadinya diproses — Anda.",
      "(f) \"Layanan\" adalah seluruh jasa yang ditawarkan Perusahaan di bawah merek DIGIMAN.ID, sebagaimana diuraikan dalam Syarat dan Ketentuan Layanan, termasuk pendampingan legalitas badan usaha, perizinan berusaha, kekayaan intelektual, dan transformasi digital.",
      "(g) \"Portal Klien\" adalah ruang kerja digital yang disediakan Perusahaan bagi klien untuk mengunggah dokumen, memantau kemajuan permohonan, dan berkomunikasi dengan tim penangan.",
      "(h) \"Gunara OS\" adalah platform produk digital milik Perusahaan untuk mendukung administrasi, tata kelola dokumen, dan transformasi digital klien.",
      "(i) \"Pihak Ketiga\" adalah pihak selain Perusahaan, Subjek Data, dan pihak yang berwenang menurut peraturan perundang-undangan.",
    ],
  },
  {
    h: "Pasal 4 — Dasar Hukum",
    p: [
      "4.1 Kebijakan ini disusun dengan mengacu pada peraturan perundang-undangan berikut:",
      "(a) Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP);",
      "(b) Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik sebagaimana telah diubah terakhir dengan Undang-Undang Nomor 1 Tahun 2024 (UU ITE), termasuk perubahannya melalui Undang-Undang Nomor 19 Tahun 2016;",
      "(c) Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (PP PSTE);",
      "(d) Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik;",
      "(e) Undang-Undang Nomor 8 Tahun 1999 tentang Perlindungan Konsumen;",
      "(f) Undang-Undang Nomor 40 Tahun 2007 tentang Perseroan Terbatas;",
      "(g) Kitab Undang-Undang Hukum Perdata (antara lain Pasal 1320, 1338, dan 1339 Buku III KUHPerdata); serta",
      "(h) peraturan pelaksana dan peraturan teknis lain yang relevan dengan kegiatan Perusahaan.",
      "4.2 Apabila dalam dokumen ini disebutkan nomor pasal dari suatu undang-undang, penyebutan dimaksudkan sebagai penunjuk arah pembacaan, bukan sebagai reproduksi resmi. Untuk naskah yang berlaku, Anda merujuk pada lembaran negara atau salinan resmi.",
      "4.3 Perusahaan memantau perkembangan regulasi pelindungan data dan meninjau Kebijakan ini sebagaimana diatur dalam Pasal 17.",
    ],
  },
  {
    h: "Pasal 5 — Data Pribadi yang Kami Kumpulkan",
    p: [
      "5.1 Perusahaan mengumpulkan Data Pribadi melalui tiga jalur: (a) data yang Anda berikan secara langsung melalui formulir, percakapan, atau unggahan dokumen; (b) data yang dihasilkan secara otomatis saat Anda menggunakan situs dan Portal Klien; dan (c) data yang diterima dari sumber ketiga yang sah sepanjang diizinkan peraturan perundang-undangan.",
      "5.2 Inventaris kategori data yang diproses:",
      "Data identitas — contoh: nama lengkap, nomor KTP/Paspor, nomor NPWP, jabatan; sumber: diisi sendiri saat formulir layanan dan konsultasi; sifat: wajib untuk layanan legalitas.",
      "Data kontak — contoh: alamat email, nomor telepon/WhatsApp, alamat korespondensi; sumber: formulir kontak dan komunikasi langsung; sifat: wajib untuk tindak lanjut.",
      "Data badan usaha — contoh: nama PT/CV/yayasan, akta pendirian, NIB, KBLI, komposisi pemegang saham; sumber: dokumen yang Anda serahkan; sifat: wajib sesuai jenis layanan.",
      "Data Portal Klien — contoh: nama pengguna, log aktivitas, dokumen yang diunggah; sumber: dihasilkan otomatis saat penggunaan; sifat: wajib untuk operasional.",
      "Data pembayaran — contoh: riwayat transaksi, bukti pembayaran, data penagihan; sumber: Anda dan penyedia jasa pembayaran; sifat: wajib; nomor kartu penuh tidak disimpan.",
      "Data teknis — contoh: alamat IP, jenis perangkat dan peramban, cookie, log keamanan; sumber: dihasilkan otomatis; sifat: teknis; dapat dianonimkan.",
      "Data komunikasi — contoh: isi percakapan email, WhatsApp, dan konsultasi; sumber: Anda; sifat: wajib untuk dokumentasi layanan.",
      "5.3 Perusahaan secara umum tidak meminta Data Pribadi Spesifik. Apabila suatu waktu pemrosesan Data Pribadi Spesifik diperlukan — misalnya dalam rangka kewajiban hukum tertentu — Perusahaan meminta persetujuan tersendiri yang tegas dan informatif, atau memprosesnya hanya jika diwajibkan atau diizinkan oleh peraturan perundang-undangan.",
      "5.4 Data pribadi anak diatur tersendiri dalam Pasal 12 Kebijakan ini.",
      "5.5 Apabila Anda memberikan Data Pribadi orang lain kepada kami (misalnya data karyawan, komisioner, pemegang saham, atau anggota keluarga pengurus badan usaha), Anda menjamin bahwa Anda telah memperoleh persetujuan atau memiliki dasar yang sah untuk menyerahkan data tersebut kepada kami, dan Anda menyarankan pihak yang bersangkutan membaca Kebijakan ini.",
    ],
  },
  {
    h: "Pasal 6 — Dasar dan Tujuan Pemrosesan",
    p: [
      "6.1 Perusahaan memproses Data Pribadi hanya apabila memenuhi salah satu dasar pemrosesan yang sah menurut Pasal 20 UU PDP, yaitu:",
      "(a) persetujuan yang diberikan secara sah, jelas, dan tegas oleh Subjek Data;",
      "(b) pelaksanaan kewajiban perjanjian dalam memberikan Layanan kepada Subjek Data;",
      "(c) kepatuhan atas kewajiban hukum Pengendali Data Pribadi;",
      "(d) pelaksanaan kepentingan vital Subjek Data;",
      "(e) pelaksanaan tugas tertentu dalam pelayanan publik; atau",
      "(f) kepentingan sah Pengendali Data Pribadi, dengan tetap memperhatikan hak dan kebebasan Subjek Data.",
      "6.2 Pemetaan antara tujuan pemrosesan, dasar hukum utama, dan kategori data:",
      "Menindaklanjuti permintaan konsultasi dan penawaran — dasar utama: kepentingan sah / perjanjian; kategori data: data kontak.",
      "Melaksanakan perjanjian layanan legalitas, perizinan, dan HKI — dasar utama: perjanjian dan kewajiban hukum; kategori data: identitas, badan usaha, komunikasi.",
      "Mengurus permohonan dokumen ke instansi (antara lain Kemenkumham, OSS, Ditjen KI, DJP) — dasar utama: kewajiban hukum dan persetujuan; kategori data: identitas, badan usaha.",
      "Mengoperasikan Portal Klien dan Gunara OS — dasar utama: perjanjian; kategori data: akun, dokumen, log.",
      "Fakturasi, pembayaran, pembukuan, dan pelaporan pajak — dasar utama: perjanjian dan kewajiban hukum; kategori data: pembayaran, identitas.",
      "Menjaga keamanan sistem dan mencegah penyalahgunaan — dasar utama: kepentingan sah; kategori data: teknis, log.",
      "Menganalisis dan menyempurnakan layanan secara agregat — dasar utama: kepentingan sah; kategori data: teknis (teranonimkan).",
      "Komunikasi pemasaran dan penawaran layanan — dasar utama: persetujuan; kategori data: kontak.",
      "6.3 Pemrosesan untuk pemasaran langsung hanya dilakukan dengan persetujuan Anda. Anda berhak menarik persetujuan atau mengajukan keberatan atas pemasaran langsung kapan saja melalui jalur pada Pasal 16, tanpa memengaruhi keabsahan pemrosesan sebelum penarikan.",
      "6.4 Perusahaan tidak menghasilkan keputusan yang menimbulkan akibat hukum atau berdampak signifikan terhadap Anda murni melalui otomatisasi termasuk profilisasi, tanpa peninjauan manusia. Apabila di kemudian hari pemrosesan semacam itu diperkenalkan, Anda berhak atas penjelasan logika dasarnya serta hak keberatan sesuai Pasal 9 UU PDP.",
    ],
  },
  {
    h: "Pasal 7 — Cookie dan Teknologi Serupa",
    p: [
      "7.1 Situs dan Portal Klien menggunakan cookie dan teknologi serupa (antara lain local storage dan pixel teknis) untuk menjaga fungsionalitas, mengenali preferensi, dan memahami penggunaan situs secara agregat.",
      "7.2 Jenis cookie yang digunakan:",
      "Cookie esensial — menjaga sesi aman pada Portal Klien, keamanan formulir (antara lain proteksi CSRF), dan fungsionalitas inti situs; durasi: selama sesi hingga maksimal 12 bulan.",
      "Cookie preferensi — menyimpan pilihan bahasa (Indonesia/Inggris) dan penyesuaian tampilan; durasi: maksimal 12 bulan.",
      "Cookie analitik agregat — statistik kunjungan halaman untuk perbaikan layanan, dalam bentuk agregat; durasi: maksimal 13 bulan.",
      "Cookie pemasaran — pengukuran efektivitas penawaran; hanya aktif dengan persetujuan Anda; durasi: maksimal 13 bulan.",
      "7.3 Anda dapat mengelola cookie melalui banner persetujuan saat kunjungan pertama serta melalui pengaturan peramban Anda. Perlu dicatat bahwa menonaktifkan cookie esensial dapat mengganggu fungsi Portal Klien, misalnya sesi masuk yang tidak stabil.",
      "7.4 Perusahaan tidak melakukan pemprofilean lintas situs (cross-site tracking) untuk kepentingan iklan pihak ketiga.",
    ],
  },
  {
    h: "Pasal 8 — Pengungkapan Data kepada Pihak Ketiga",
    p: [
      "8.1 Perusahaan tidak menjual, tidak menyewakan, dan tidak memperdagangkan Data Pribadi Anda dalam bentuk apa pun. Ini komitmen mutlak.",
      "8.2 Data Pribadi hanya diungkapkan kepada pihak berikut, sebatas yang diperlukan:",
      "(a) kementerian, lembaga, dan instansi yang berwenang — antara lain Kementerian Hukum dan HAM, sistem OSS untuk perizinan berusaha, Direktorat Jenderal Kekayaan Intelektual, dan Direktorat Jenderal Pajak — dalam rangka kewajiban pengurusan dokumen yang Anda pesankan;",
      "(b) notaris dan/atau PPAT mitra yang ditunjuk dalam rangka pembuatan akta dan dokumen kependudukan-perusahaan (pendirian, perubahan, dan sejenisnya);",
      "(c) penyedia infrastruktur teknologi informasi (penyedia hosting, penyimpanan awan, surel, dan komunikasi) yang bertindak sebagai Pemroses Data Pribadi di bawah perjanjian tertulis;",
      "(d) penyedia jasa pembayaran dan lembaga keuangan pendukung untuk menyelesaikan transaksi;",
      "(e) auditor, penasihat profesional, dan penjamin mutu yang terikat kewajiban kerahasiaan, dalam rangka pemeriksaan internal dan kepatuhan;",
      "(f) aparat penegak hukum atau pengadilan, hanya apabila diminta secara resmi dan berdasarkan perintah peraturan perundang-undangan; serta",
      "(g) pihak lain yang ditunjuk oleh Anda dengan persetujuan Anda.",
      "8.3 Setiap penerima data terikat kewajiban menjaga kerahasiaan dan memproses data hanya atas instruksi Perusahaan. Kewajiban akuntabilitas atas pemrosesan tetap berada pada Perusahaan sebagai Pengendali Data Pribadi.",
      "8.4 Dalam rangka merger, akuisisi, pemisahan, atau pengalihan aset perusahaan, Data Pribadi dapat berpindah ke pihak penerima; Perusahaan memastikan penerima menerapkan tingkat perlindungan yang setara dan memberitahukan pengalihan tersebut kepada Anda.",
      "8.5 Sebagian data badan usaha menjadi informasi publik karena kewajiban hukum — misalnya pengumuman pendirian perseroan terbatas dalam Berita Negara Republik Indonesia oleh Kementerian Hukum dan HAM. Pengungkapan semacam itu terjadi karena ketentuan hukum, bukan karena tindakan Perusahaan, dan Perusahaan akan menjelaskan hal ini kepada klien sejak awal.",
    ],
  },
  {
    h: "Pasal 9 — Penyimpanan, Retensi, dan Penghapusan Data",
    p: [
      "9.1 Data Pribadi disimpan pada sistem dengan standar keamanan yang diuraikan dalam Pasal 10. Perusahaan menyimpan data di pusat data di wilayah Republik Indonesia atau pada penyedia yang menerapkan standar perlindungan setara; penyimpanan di luar negeri diperlakukan sesuai Pasal 14.",
      "9.2 Perusahaan menyimpan Data Pribadi hanya selama diperlukan untuk mencapai tujuan pemrosesan, memenuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian. Jadwal retensi setiap kategori data:",
      "Dokumen akta dan legalitas badan usaha klien — minimal 10 tahun sejak berakhirnya perjanjian layanan (kewajiban hukum dan kearsipan).",
      "Data perpajakan dan pembayaran — selama jangka waktu yang diwajibkan peraturan kepajakan dan pembukuan yang berlaku (kewajiban hukum).",
      "Akun dan data Portal Klien — selama akun aktif, ditambah 90 hari kalender setelah penutupan (perjanjian).",
      "Riwayat komunikasi layanan — 5 tahun (kepentingan sah dan kewajiban hukum).",
      "Log teknis dan keamanan — 12 bulan (kepentingan sah).",
      "Data pemasaran (berbasis persetujuan) — sampai persetujuan ditarik (persetujuan).",
      "9.3 Setelah jangka retensi berakhir, data dihapus secara aman atau dianonimkan sehingga tidak lagi mengidentifikasi Anda. Salinan sisa pada sistem cadangan dihapus mengikuti siklus cadangan yang ditetapkan, dengan jangka waktu tersisa paling lama 6 bulan.",
      "9.4 Penghapusan dapat ditunda sebatas yang wajar dan proporsional apabila data diperlukan untuk sengketa, pemeriksaan resmi, atau penyidikan (legal hold), dengan pemberitahuan yang menjelaskan dasar dan perkiraan durasinya.",
    ],
  },
  {
    h: "Pasal 10 — Keamanan Data Pribadi",
    p: [
      "10.1 Perusahaan menerapkan langkah teknis dan organisatoris yang proporsional terhadap risiko, antara lain:",
      "(a) enkripsi data saat transit (antara lain TLS) dan enkripsi data saat tersimpan untuk data sensitif;",
      "(b) kontrol akses berbasis peran dengan prinsip hak akses minimal (least privilege) dan peninjauan akses berkala;",
      "(c) autentikasi yang kuat pada Portal Klien serta pemisahan lingkungan produksi dan pengembangan;",
      "(d) pencatatan log dan pemantauan keamanan dengan mekanisme tata kelola insiden;",
      "(e) penyimpanan dokumen fisik di ruang terkunci dengan pihak yang berhak terbatas;",
      "(f) penandatanganan perjanjian kerahasiaan dan pelatihan perlindungan data bagi seluruh personel — termasuk para pakar lintas bidang yang mendampingi klien; serta",
      "(g) pemilihan penyedia teknologi yang mampu menunjukkan komitmen keamanan dan perlindungan data yang memadai.",
      "10.2 Perusahaan menjadikan kerangka kerja ISO/IEC 27001 dan ISO/IEC 27701 sebagai acuan pengelolaan keamanan informasi dan perlindungan data, serta berupaya menyelaraskan praktiknya secara bertahap. Penyebutan kerangka ini bukan merupakan pernyataan tersertifikasi.",
      "10.3 Perusahaan menguji dan meninjau keamanan sistemnya secara berkala, termasuk melalui tinjauan akses, pemutakhiran perangkat lunak, dan latihan respons insiden.",
      "10.4 Perusahaan mengakui bahwa tidak ada sistem yang sepenuhnya bebas risiko. Ketika metode penyerangan berkembang, Perusahaan berkomitmen melakukan mitigasi segera dan transparan sebagaimana diatur dalam Pasal 15.",
    ],
  },
  {
    h: "Pasal 11 — Hak-Hak Anda sebagai Subjek Data",
    p: [
      "11.1 Sebagai Subjek Data, Anda memiliki hak-hak sebagaimana diatur dalam Pasal 5 sampai dengan Pasal 13 UU PDP. Daftar berikut merangkum hak tersebut beserta rujukannya:",
      "Hak atas informasi — mengetahui tujuan dan keabsahan pemrosesan, serta permintaan maupun penarikan persetujuan (Pasal 5 UU PDP).",
      "Hak akses dan koreksi — memperoleh salinan data dan meminta perbaikan atas data yang tidak akurat (Pasal 6 UU PDP).",
      "Hak penghapusan — meminta penghapusan data yang memenuhi syarat penghapusan (Pasal 7 UU PDP).",
      "Hak penarikan persetujuan — menarik persetujuan pemrosesan kapan saja (Pasal 8 UU PDP).",
      "Hak keberatan atas otomatisasi — melawan keputusan murni otomatis termasuk profilisasi (Pasal 9 UU PDP).",
      "Hak penundaan atau pembatasan — menunda atau membatasi pemrosesan dalam keadaan tertentu (Pasal 10 UU PDP).",
      "Hak keberatan atas pemrosesan tertentu — antara lain keberatan atas pemasaran langsung (Pasal 11 UU PDP).",
      "Hak portabilitas data — memperoleh data dalam format terstruktur dan umum (Pasal 12 UU PDP).",
      "Hak menuntut ganti rugi dan keadilan — menuntut ganti rugi dan/atau keadilan atas pelanggaran (Pasal 13 UU PDP).",
      "11.2 Permintaan hak disampaikan melalui jalur kontak pada Pasal 16 dengan menyertakan identitas yang cukup untuk verifikasi. Kami mengonfirmasi penerimaan permintaan paling lambat 3×24 jam kerja dan menyampaikan hasilnya paling lambat 30 (tiga puluh) hari kalender sejak diterimanya permintaan yang lengkap, sebagaimana diwajibkan UU PDP.",
      "11.3 Terdapat pengecualian yang sah atas penghapusan atau pembatasan — misalnya ketika data wajib disimpan menurut hukum, diperlukan untuk pembelaan hukum, atau terikat kerahasiaan profesi notaris. Dalam setiap pengecualian, kami menjelaskan alasannya kepada Anda secara terbuka.",
      "11.4 Penggunaan hak tidak dikenakan biaya. Untuk permintaan yang bersifat berulang, tidak berwajar, atau berlebihan, Perusahaan dapat mengenakan biaya wajar atas dasar pemberitahuan sebelumnya, atau menolak dengan penjelasan.",
      "11.5 Apabila Anda merasa permintaan Anda tidak ditanggapi dengan memadai, Anda berhak menyampaikan keberatan kepada pejabat pelaksana pengamanan data pribadi Perusahaan dan berhak melaporkan ke regulator yang berwenang — antara lain Kementerian Komunikasi dan Informatika — sesuai mekanisme UU PDP, tanpa mengurangi hak Anda menuntut ganti rugi dan/atau keadilan.",
    ],
  },
  {
    h: "Pasal 12 — Data Pribadi Anak",
    p: [
      "12.1 Layanan Perusahaan ditujukan bagi pelaku usaha dan badan usaha yang dikelola orang dewasa. Perusahaan tidak dengan sengaja memproses data pribadi anak — yaitu subjek data yang belum berusia 18 tahun — kecuali dengan persetujuan yang diberikan secara sah oleh orang tua atau wali sesuai Pasal 25 UU PDP.",
      "12.2 Apabila Perusahaan mengetahui bahwa data pribadi anak diproses tanpa persetujuan sah orang tua atau wali, data tersebut segera dihapus.",
      "12.3 Orang tua atau wali yang memperhatikan pemrosesan data anak dapat menghubungi kami melalui jalur pada Pasal 16.",
    ],
  },
  {
    h: "Pasal 13 — Portal Klien, Gunara OS, dan Layanan Digital",
    p: [
      "13.1 Akun Portal Klien bersifat pribadi. Anda bertanggung jawab menjaga kerahasiaan kredensial dan seluruh aktivitas yang terjadi dalam akun Anda, sebagaimana diatur lebih rinci dalam Syarat dan Ketentuan Layanan.",
      "13.2 Dokumen yang Anda unggah diproses hanya untuk melaksanakan layanan yang Anda pesankan. Akses tim kami terbatas pada petugas yang menangani berkas Anda dan tunduk pada kontrol akses Pasal 10.",
      "13.3 Aktivitas pada Portal Klien dan Gunara OS tercatat dalam log audit untuk keperluan keamanan dan penelusuran kemajuan layanan, dengan retensi sesuai Pasal 9.",
      "13.4 Apabila layanan digital menggunakan integrasi penyedia pihak ketiga (misalnya penyimpanan awan atau layanan surel), integrasi tersebut berada dalam lingkup pengungkapan Pasal 8 dan terikat perjanjian pemrosesan data.",
      "13.5 Setelah penutupan akun, Anda dapat meminta ekspor data atau penghapusan data sesuai hak Anda pada Pasal 11.",
    ],
  },
  {
    h: "Pasal 14 — Transfer Data",
    p: [
      "14.1 Perusahaan menyimpan dan memproses Data Pribadi dengan preferensi lokasi di wilayah Republik Indonesia.",
      "14.2 Transfer Data Pribadi ke luar yurisdiksi Republik Indonesia hanya dilakukan apabila:",
      "(a) negara tujuan memiliki tingkat pelindungan Data Pribadi yang setara atau lebih tinggi;",
      "(b) terdapat jaminan yang memadai dan sah, antara lain melalui klausul perlindungan data yang mengikat pihak penerima;",
      "(c) Subjek Data memberikan persetujuan secara eksplisit; atau",
      "(d) transfer diwajibkan untuk kepentingan pelaksanaan perjanjian dengan Subjek Data, kepentingan vital, atau kewajiban hukum.",
      "Ketentuan ini selaras dengan prinsip pengendalian transfer internasional dalam UU PDP (antara lain Pasal 55 dan Pasal 56).",
      "14.3 Apabila terjadi transfer internasional secara berkelanjutan, Perusahaan mencatat daftar negara tujuan dan penyedia penerima, serta menyediakan informasi tersebut atas permintaan yang wajar.",
    ],
  },
  {
    h: "Pasal 15 — Kegagalan Perlindungan Data Pribadi dan Notifikasi",
    p: [
      "15.1 Kegagalan perlindungan Data Pribadi adalah setiap tindakan atau kelalaian yang menyebabkan Data Pribadi hilang, rusak, diakses, diubah, atau diungkapkan secara tidak sah.",
      "15.2 Apabila terjadi kegagalan perlindungan Data Pribadi, Perusahaan segera: (a) menilai lingkup dan risikonya; (b) membatasi dan memulihkan; (c) mendokumentasikan kronologi dan langkah penanganan; serta (d) menilai kewajiban pelaporan.",
      "15.3 Perusahaan menyampaikan pemberitahuan tertulis kepada Subjek Data yang terdampak dan kepada Kementerian Komunikasi dan Informatika paling lambat 3×24 jam sejak kegagalan diketahui, sebagaimana diwajibkan Pasal 46 UU PDP. Pemberitahuan memuat sekurang-kurangnya: kronologi kejadian, waktu dan jumlah Data Pribadi yang terdampak, upaya yang dilakukan, risiko yang mungkin timbul, rekomendasi mitigasi bagi Subjek Data, serta kanal komunikasi resmi Perusahaan.",
      "15.4 Apabila kegagalan tersebut mengandung unsur pidana, Perusahaan mengoordinasikan penanganannya dengan aparat penegak hukum yang berwenang.",
      "15.5 Perusahaan tidak menyembunyikan insiden pelindungan data dari Subjek Data dan regulator. Keterbukaan adalah bagian dari akuntabilitas.",
    ],
  },
  {
    h: "Pasal 16 — Pejabat Pelaksana Pengamanan Data dan Cara Menghubungi Kami",
    p: [
      "16.1 Sesuai Pasal 35 UU PDP, Perusahaan menunjuk Muhammad Lutfi Azmi sebagai Pejabat Pelaksana Pengamanan Data Pribadi yang bertugas memastikan kepatuhan internal, menjadi titik kontak Subjek Data, dan mengawasi pelaksanaan Kebijakan ini. Permintaan dan pertanyaan disampaikan melalui kanal kontak berikut:",
      `Surel resmi (kanal utama) — ${SITE.email}; Telepon/WhatsApp resmi — +62 813-1651-6524.`,
      `Alamat kantor terdaftar — Kampung Gunung Guntur RT 022/RW 006 No. 50, Dusun Bojong, Kelurahan Padasuka, Kecamatan Sukarame, Kabupaten Tasikmalaya, Provinsi Jawa Barat 46464, Indonesia.`,
      "16.2 Permintaan hak Subjek Data, pertanyaan tentang Kebijakan ini, atau laporan kekhawatiran sebaiknya disampaikan melalui surel resmi dengan subjek yang jelas agar dapat diproses cepat dan terdokumentasi baik.",
    ],
  },
  {
    h: "Pasal 17 — Perubahan Kebijakan dan Tata Kelola Dokumen",
    p: [
      "17.1 Perusahaan dapat memperbarui Kebijakan ini seiring perkembangan layanan, teknologi, dan regulasi. Setiap perubahan ditandai dengan kenaikan nomor versi dan tanggal berlaku pada halaman pertama.",
      "17.2 Apabila perubahan bersifat material dan mengurangi tingkat perlindungan, Perusahaan memberitahukannya kepada Anda secara wajar — antara lain melalui pemberitahuan pada situs dan/atau surel kepada pengguna aktif — sebelum perubahan berlaku.",
      "17.3 Versi terdahulu diarsipkan dan dapat diberikan atas permintaan yang wajar, sehingga Anda selalu dapat memeriksa bagaimana kebijakan berubah dari waktu ke waktu.",
      "17.4 Perusahaan meninjau Kebijakan ini paling sedikit satu kali dalam setahun kalender, serta lebih cepat apabila terjadi perubahan regulasi yang material, perubahan model layanan, atau temuan dari insiden dan audit.",
    ],
  },
  {
    h: "Pasal 18 — Penutup",
    p: [
      "18.1 Kebijakan ini adalah dokumen hidup: ia ditulis bukan sekadar untuk memenuhi kewajiban, melainkan untuk mencerminkan cara Perusahaan bekerja setiap hari — dengan hormat pada orang yang datanya kami titipkan.",
      "18.2 Apabila terdapat ambiguitas dalam Kebijakan ini, penyusunan penafsiran diarahkan pada makna yang paling melindungi Subjek Data, sepanjang konsisten dengan peraturan perundang-undangan dan kelogisanan dokumen.",
      "18.3 Kebijakan ini merupakan pernyataan praktik Perusahaan, bukan nasihat hukum formal. Untuk situasi khusus — khususnya yang melibatkan data sensitif, lintas yurisdiksi, atau sengketa — Anda dianjurkan memperoleh nasihat profesional yang independen.",
      "18.4 Kebijakan ini berlaku efektif sejak tanggal yang tercantum pada halaman ini.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Kebijakan Privasi", path: "/kebijakan-privasi" }])} />

      <PublicNav activePath="/kebijakan-privasi" />

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Kebijakan Privasi", path: "/kebijakan-privasi" }]} />
        </div>

        <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Kebijakan Privasi dan Proteksi Data Pribadi
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
          <a href="/syarat-ketentuan" className="text-[var(--gold)] hover:underline">
            Syarat dan Ketentuan Layanan DIGIMAN.ID
          </a>{" "}
          — kerangka perjanjian yang mengatur penggunaan situs dan layanan kami.
        </p>

        <p className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/55">
          Untuk hak privasi Anda: hubungi{" "}
          <a href={`mailto:${SITE.email}`} className="text-[var(--gold)] hover:underline">
            {SITE.email}
          </a>{" "}
          — permintaan Anda ditangani manusia yang paham konteksnya, bukan ticket
          bot.
        </p>
      </main>

      <PublicFooter />
    </div>
  );
}
