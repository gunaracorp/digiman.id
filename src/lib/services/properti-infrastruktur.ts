import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — PROPERTI & INFRASTRUKTUR (10 layanan).
 * Due diligence, pengalihan hak atas tanah, HGU/HGB, izin usaha perumahan,
 * konsesi KPBU/PPJT, menara telekomunikasi, kawasan industri, sengketa tanah,
 * perizinan tambang (IUP/IUPK), dan energi terbarukan.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const propertiContent: ServiceContent[] = [
  {
    slug: "due-diligence-properti",
    tagline: "Setiap sertifikat punya cerita — dengarkan dulu sebelum Anda membayar.",
    heroSub:
      "Due diligence properti menyeluruh: verifikasi sertifikat di BPN, riwayat kepemilikan, status sengketa, kesesuaian tata ruang (KKPR), hingga beban hak — untuk pembeli rumah, tanah, gedung, dan investor yang tidak mau menyesal setelah DP dibayar.",
    timeline: "5–10 hari kerja untuk laporan lengkap",
    intro: [
      "Setiap transaksi properti di Indonesia bermula dari satu asumsi berbahaya: sertifikat berarti aman. Kenyataannya, sertifikat hanya bukti administratif atas data yang dilaporkan — di baliknya bisa tersimpan riwayat yang tidak tertulis di permukaan: kepemilikan ganda, tanah yang sudah diikat sebagai agunan kredit, keberatan ahli waris yang belum selesai, atau perubahan tata ruang yang membuat rencana Anda tidak boleh berdiri di atasnya. Pendaftaran tanah diatur PP 24/1997, hak-hak atas tanah berakar pada UU 5/1960, sementara arah penggunaan lahan kini ditentukan Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR) sebagaimana diatur UU 6/2023. Due diligence properti adalah pekerjaan memeriksa semua lapisan itu SEBELUM uang Anda keluar — bukan sesudah.",
      "Kesalahan yang paling mahal terjadi karena urutan yang terbalik: pembeli menandatangani PPJB dan membayar DP besar lebih dulu, baru mengecek — dan menemukan bahwa tanah itu digarapi orang lain, atau sertifikatnya punya kembar yang sah, atau lahan untuk pabrik ternyata masuk wilayah lindung. Kasus sertifikat ganda yang berujung pengadilan bertahun-tahun hampir selalu bermula dari transaksi yang berjalan cepat tanpa verifikasi. Ada pula jebakan yang tidak terlihat di lapangan: tanah yang sudah diikat hak tanggungan oleh pemiliknya, tanah warisan yang dijual sebagian ahli waris saja, atau kepemilikan yang hanya dipegang girik dan belum terdaftar. Semua itu bisa dicek — yang tidak bisa diperbaiki adalah uang yang sudah dibayarkan.",
      "Kami menjalankan due diligence berlapis: verifikasi sertifikat, akta, dan riwayat alih hak langsung ke BPN; pengecekan KKPR dan rencana tata ruang; penelusuran status sengketa, keberatan, dan beban hak termasuk hak tanggungan; pemeriksaan kondisi lapangan bersama tim survei; serta pemeriksaan pajak seperti SPPT PBB dan berita acara yang terkait. Hasilnya adalah laporan risiko dengan klasifikasi yang jelas — aman, aman dengan catatan, atau tinggi risiko — lengkap dengan rekomendasi cara menata transaksi agar aman: struktur APHT, klausul pembayaran bertahap, sampai saran menarik diri bila temuan terlalu berat. Laporan ini juga menjadi alat tawar Anda di meja negosiasi, dan dapat dipakai ulang oleh bank, investor, atau notaris Anda.",
    ],
    benefits: [
      { title: "Risiko terbaca sebelum dibayar", desc: "DP dan pelunasan baru bergerak setelah laporan risiko ada — uang Anda tidak pernah mendahului informasi." },
      { title: "Ganda sertifikat terbongkar dini", desc: "Riwayat hak dan keberatan di BPN ditelusuri sampai akar — kasus kembar sertifikat terlihat sebelum Anda terlanjur menjadi pihaknya." },
      { title: "Tata ruang tidak mengejutkan", desc: "KKPR dan RTRW diperiksa terhadap rencana penggunaan Anda — tanah hunian tetap hunian, lahan industri tetap boleh industri." },
      { title: "Daya tawar lebih kuat", desc: "Temuan due diligence adalah bahasa negosiasi yang paling keras — harga, jadwal, dan struktur pembayaran disesuaikan dengan risiko yang ditemukan." },
      { title: "Satu laporan, banyak kegunaan", desc: "Dokumen yang sama melayani bank sebagai penilai agunan, investor sebagai dasar keputusan, dan notaris sebagai dasar akta." },
    ],
    process: [
      { title: "Pemetaan objek & akses data", desc: "Objek, tujuan pembelian, dan para pihak dipetakan — daftar pengecekan disusun sesuai jenis transaksi Anda." },
      { title: "Verifikasi kelembagaan", desc: "Sertifikat, akta, riwayat alih hak, dan beban hak dicek ke BPN; KKPR, pajak, dan jejak sengketa diperiksa ke instansi masing-masing." },
      { title: "Pemeriksaan lapangan", desc: "Batas, fisik, penguasaan aktual, dan kondisi sekitar diperiksa langsung — selisih antara dokumen dan lapangan tidak boleh lolos." },
      { title: "Laporan risiko & rekomendasi", desc: "Temuan disusun menjadi laporan berklasifikasi dengan rekomendasi konkret: lanjut, negosiasi ulang, atau menarik diri." },
    ],
    requirements: [
      "Data objek: alamat, nomor sertifikat, luas, dan nama pemilik yang tercantum",
      "Tujuan pembelian atau rencana penggunaan (hunian, usaha, industri — menentukan poin KKPR yang diperiksa)",
      "Foto kondisi lapangan dan batas tanah bila tersedia",
      "SPPT PBB terakhir dan bukti pembayaran (bila ada)",
      "Salinan identitas pihak penjual dan surat kuasa bila diwakilkan",
    ],
    faqs: [
      { q: "Berapa biaya due diligence properti?", a: "Jasa kami mulai Rp 7,5 juta untuk satu objek, dengan biaya resmi pengecekan BPN dan instansi lain dihitung sesuai temuan yang diperlukan. Nilainya jauh lebih kecil dibanding potensi kerugian satu transaksi yang salah: DP yang terkunci, litigasi bertahun-tahun, atau tanah yang tidak bisa dipakai sesuai rencana. Untuk beberapa objek sekaligus — misalnya akuisisi lahan pengembangan — biaya per objek turun karena pengecekan wilayahnya berbagi." },
      { q: "Berapa lama prosesnya dan apakah saya harus ikut ke lapangan?", a: "Umumnya 5–10 hari kerja untuk laporan lengkap, tergantung kecepatan akses data di BPN setempat dan kompleksitas riwayat tanah. Anda tidak perlu ikut turun ke lapangan — pemeriksaan fisik dan wawancara penguasaan kami kerjakan dengan tim survei. Bila ada temuan yang menuntut keputusan Anda, kami hubungi sebelum laporan dikunci." },
      { q: "Tanah sudah bersertifikat dan penjual tampak jujur — masih perlu due diligence?", a: "Ya, karena sertifikat tidak menjamin tiga hal: bahwa itu satu-satunya sertifikat di atas tanah itu, bahwa tanahnya tidak sedang diikat sebagai agunan, dan bahwa rencana penggunaan Anda sesuai tata ruang. Kejujuran penjual juga sering terbatas pada yang ia ketahui — banyak penjual sendiri tidak sadar tanah warisannya masih menyimpan keberatan ahli waris lain. Due diligence bukan soal curiga pada orang, melainkan soal membaca aset seperti bank membacanya." },
    ],
    related: ["pengalihan-hak-tanah", "hgu-hgb-pertanahan", "pbg-slf", "sengketa-tanah-penyelesaian"],
  },
  {
    slug: "pengalihan-hak-tanah",
    tagline: "Tanah berganti tangan hanya sah jika kertasnya ikut berganti nama.",
    heroSub:
      "Jual beli, hibah, tukar-menukar, sampai APHT — seluruh rantai pengalihan diurus tertib: PPAT, pajak PPh dan BPHTB, sampai balik nama di BPN. Untuk pembeli, penjual, dan keluarga yang tidak mau haknya goyah di kemudian hari.",
    timeline: "2–6 minggu dari akta hingga sertifikat baru terbit",
    intro: [
      "Pengalihan hak atas tanah baru sah dan melawan pihak ketiga setelah didaftarkan — itulah inti PP 24/1997 tentang Pendaftaran Tanah. Jalannya selalu melalui akta pejabat Pembuat Akta Tanah (PPAT) sesuai bentuk peraliannya: akta jual beli, akta hibah, tukar-menukar, atau APHT bila pembayaran belum lunas. Dua pajak harus dibersihkan di jalurnya masing-masing: PPh final atas pengalihan hak ditanggung penjual (tarif 2,5% berdasarkan PP 34/2016) dan BPHTB ditanggung pembeli (tarif 5% di atas nilai perolehan yang melebihi NPOPTKP, kini diatur UU 1/2022 tentang HKPD). Ditambah satu prasyarat yang sering terlupakan: SPPT PBB harus lunas dan jenis hak harus cocok dengan status pembeli — badan usaha tidak bisa memegang Hak Milik, dan haknya disesuaikan menjadi HGB.",
      "Kesalahan paling umum adalah urutan yang berbahaya: membayar penuh terlebih dahulu, baru mengurus dokumen — dan saat dokumen tersendat, posisi tawar Anda sudah habis. Kesalahan kedua: menganggap akta PPAT adalah garis finis, padahal balik nama di BPN belum diurus sehingga sertifikat tetap atas nama pemilik lama — tanah itu belum bisa dijadikan agunan, sulit dijual lagi, dan rentan dikaitkan utang pihak lama. Kesalahan ketiga menyasar tanah warisan: akta ditandatangani sebagian ahli waris, lalu ahli waris lain muncul dengan klaim yang sah secara hukum. Setiap satu dari itu bisa mengunci aset Anda bertahun-tahun.",
      "Kami menata urutan transaksi dari ujung ke ujung: pemeriksaan ringan atas objek sebelum apa pun ditandatangani, penyusunan APHT atau PPJB yang mengikat dengan klausul pembayaran bertahap, pengurusan pembayaran dan validasi PPh dan BPHTB ke KPP serta Badan Pendapatan Daerah, akta PPAT yang benar, dan permohonan balik nama ke BPN sampai sertifikat atas nama Anda terbit dan diserahkan. Untuk pembeli badan usaha dan investor, kami memetakan sejak awal hak yang tepat dan rutenya, agar yang Anda terima bukan sekadar kunci pintu, melainkan hak yang kuat di mata hukum. Sepanjang jalan, Anda menerima laporan status tiap tahap — tidak ada dokumen yang berpindah tangan tanpa Anda tahu posisinya.",
    ],
    benefits: [
      { title: "Nama Anda, sah di BPN", desc: "Balik nama dikejar sampai sertifikat baru terbit — transaksi tidak berhenti di akta PPAT yang belum berarti pindahnya hak." },
      { title: "Pajak bersih tanpa kejutan", desc: "PPh dan BPHTB dihitung, dibayar, dan divalidasi resmi — tidak ada tuntutan pajak yang muncul bertahun-tahun kemudian." },
      { title: "Uang tidak keluar duluan", desc: "APHT dan PPJB disusun dengan klausul pembayaran bertahap — dana besar baru bergerak setelah dokumen terbukti siap." },
      { title: "Hak yang tepat sejak awal", desc: "SHM untuk perorangan, HGB untuk badan usaha — hak disesuaikan status pembeli agar tidak perlu dibongkar ulang." },
      { title: "Aset langsung siap dipakai", desc: "Sertifikat atas nama Anda artinya tanah bisa dijadikan agunan, dijual kembali, atau dibangun — tanpa jejak administratif yang tertunda." },
    ],
    process: [
      { title: "Pemeriksaan awal & struktur transaksi", desc: "Objek dan para pihak diperiksa ringan, bentuk peralihan dipilih (jual beli, hibah, APHT) dan hak yang tepat ditetapkan." },
      { title: "Dokumen & pajak", desc: "Kelengkapan dokumen dikumpulkan, PPh dan BPHTB dihitung serta dibayar, SPPT PBB dipastikan lunas." },
      { title: "Akta PPAT & serah terima", desc: "Akta ditandatangani di hadapan PPAT, pembayaran diselesaikan sesuai kesepakatan, fisik tanah beralih." },
      { title: "Balik nama & penyerahan sertifikat", desc: "Permohonan pendaftaran diteruskan ke BPN sampai sertifikat atas nama baru terbit dan diserahkan ke tangan Anda." },
    ],
    requirements: [
      "Sertifikat asli (SHM/SHMSRS/HGB) dan SPPT PBB terakhir yang lunas",
      "KTP, Kartu Keluarga, dan NPWP para pihak (pembeli dan penjual)",
      "Bila tanah warisan: akta kematian, surat keterangan waris, dan kesediaan para ahli waris",
      "Bila diwakilkan: surat kuasa yang sah (kuasa menjual harus legalisasi)",
      "Nilai kesepakatan transaksi (menjadi dasar perhitungan pajak)",
    ],
    faqs: [
      { q: "Berapa PPh dan BPHTB yang harus dibayar, dan siapa yang menanggung?", a: "PPh final atas pengalihan hak atas tanah ditanggung penjual dengan tarif 2,5% dari nilai transaksi atau NJOP (yang lebih tinggi), berdasarkan PP 34/2016. BPHTB ditanggung pembeli dengan tarif 5% atas nilai perolehan setelah dikurangi NPOPTKP — nilai bebas pajak yang ditetapkan daerah masing-masing. Dalam praktiknya kedua pajak ini sering dibayar saat akta, tetapi validasi resmi ke KPP dan Bapenda tetap harus dilakukan — di situlah letak pekerjaan kami." },
      { q: "Akta jual beli sudah tanda tangan — apakah cukup, atau harus balik nama juga?", a: "Belum cukup. Menurut PP 24/1997, peralihan hak baru melawan pihak ketiga setelah didaftarkan — artinya sampai balik nama selesai, sertifikat masih atas nama pemilik lama dan tanah itu belum sepenuhnya milik Anda di mata hukum. Risiko praktisnya nyata: pemilik lama yang punya utang bisa menjadikan sertifikat itu agunan, atau mewariskan masalah ke pembeli berikutnya. Kami mengejar balik nama sampai sertifikat atas nama Anda terbit." },
      { q: "Tanah warisan belum dibagi ke para ahli waris — bisa langsung dijual?", a: "Bisa, tetapi semua ahli waris yang berhak harus ikut menandatangani akta, atau pembagian warisan diselesaikan terlebih dahulu dengan surat keterangan waris dan pernyataan para pihak. Akta yang ditandatangani sebagian ahli waris rentan digugat oleh yang tertinggal — dan gugatan itu bisa membatalkan transaksi yang sudah dibayar penuh. Bila ada ahli waris yang tidak bisa hadir, kuasanya harus sah dan tidak mudah dibatalkan — kami pastikan strukturnya benar sebelum akta dibuat." },
    ],
    related: ["due-diligence-properti", "virtual-office", "izin-usaha-perumahan", "perubahan-akta"],
  },
  {
    slug: "hgu-hgb-pertanahan",
    tagline: "Lahan produksi butuh hak yang setebal usahanya.",
    heroSub:
      "HGU untuk perkebunan dan pertanian, HGB untuk industri dan bangunan komersial — perolehan, perpanjangan, pembaruan, sampai pengikatan agunan diurus lengkap. Untuk perusahaan yang tidak mau aset produktifnya berdiri di atas hak yang salah.",
    timeline: "3–8 bulan tergantung status lahan & instansi",
    intro: [
      "UU 5/1960 (UUPA) menyediakan hak atas tanah yang dirancang untuk usaha: Hak Guna Usaha (HGU) untuk menggarap — perkebunan, pertanian, perikanan — dan Hak Guna Bangunan (HGB) untuk mendirikan bangunan — pabrik, gudang, hotel, ruko, gedung komersial. PP 18/2021 yang menyempurnakannya menegaskan: kedua hak ini hanya untuk badan hukum yang didirikan menurut hukum Indonesia dan berkedudukan di Indonesia — termasuk PT PMA yang beroperasi dengan izin investasi. HGU diberikan paling lama 25 tahun dan dapat diperpanjang 25 tahun serta diperbarui 35 tahun; HGB diberikan paling lama 30 tahun, diperpanjang 20 tahun, dan diperbarui 30 tahun. Pilihannya menentukan banyak hal di hilirnya: hak yang tepat membuat aset layak diikat hak tanggungan sebagai agunan kredit, dan hak yang salah membuat investasi tersangkut di tengah.",
      "Kesalahan yang paling sering: perusahaan membeli tanah masyarakat dengan Hak Milik, membangun pabrik, lalu menyadari bahwa badan usaha tidak boleh memegang Hak Milik — aset berdiri di atas hak yang secara hukum tidak boleh dimilikinya. Kesalahan kedua: HGU atau HGB dibiarkan mendekati masa akhir tanpa perencanaan perpanjangan, sementara pabrik dan kebun terus berproduksi di atas hak yang segera habis. Kesalahan ketiga terjadi di meja kredit: pengikatan agunan ditolak bank karena haknya lemah, belum bersertifikat, atau belum diikat hak tanggungan. Investor yang melakukan due diligence juga membaca hak atas tanah lebih awal dari laporan keuangan — hak yang goyah membuat valuasi ikut goyah.",
      "Kami bekerja dari kelayakan, bukan dari formulir: pemetaan KKPR dan RTRW terhadap rencana usaha, penentuan hak yang tepat beserta rutenya, penyiapan dokumen perolehan lahan, dan pengajuan penetapan hak ke ATR/BPN sesuai kewenangan penerbitannya. Untuk perusahaan yang sudah memegang hak, kami mengelola perpanjangan dan pembaruan jauh sebelum masa berlaku menipis, mengikat hak tanggungan untuk kebutuhan kredit, serta menangani pengalihan hak saat terjadi merger, akuisisi, atau perubahan struktur. Semua bergerak dengan satu kalender kepatuhan yang jelas.",
    ],
    benefits: [
      { title: "Hak yang tepat untuk usaha yang tepat", desc: "HGU untuk yang menggarap, HGB untuk yang membangun — dipetakan sejak awal berdasarkan KKPR dan rencana kegiatan." },
      { title: "Aset layak dijadikan agunan", desc: "Hak yang bersertifikat dan kuat membuka jalan pengikatan hak tanggungan — kredit bank tidak tertahan oleh status lahan." },
      { title: "Perpanjangan tidak dihinggapi", desc: "Kalender masa berlaku dipantau bertahun-tahun sebelumnya — perpanjangan diajukan saat posisi Anda masih kuat." },
      { title: "Siap diuji investor", desc: "Hak atas tanah adalah hal pertama yang diperiksa saat akuisisi — dokumen Anda menjawab sebelum ditanya." },
      { title: "Struktur korporasi selaras", desc: "Peralihan hak saat merger, pemisahan, atau perubahan pemegang saham ditangani tanpa meninggalkan hak yang menggantung." },
    ],
    process: [
      { title: "Pemetaan kelayakan & pilihan hak", desc: "KKPR, RTRW, dan rencana usaha diperiksa — pilihan HGU atau HGB beserta durasi dan rutenya ditetapkan." },
      { title: "Penyiapan lahan & dokumen", desc: "Dokumen perolehan lahan dirapikan, kelengkapan badan usaha disusun, formulir dan persyaratan BPN dikumpulkan." },
      { title: "Pengajuan penetapan hak", desc: "Permohonan diajukan ke instansi berwenang sampai penetapan hak dan sertifikat terbit atas nama perusahaan." },
      { title: "Pengikatan & pemeliharaan hak", desc: "Hak tanggungan diikat bila dibutuhkan kredit; kalender perpanjangan, pembaruan, dan kewajiban berkala dikelola berjalan." },
    ],
    requirements: [
      "Akta pendirian dan perubahan terakhir perusahaan beserta pengesahannya",
      "Data lahan: lokasi, luas, status hak saat ini, dan SPPT PBB",
      "KBLI dan rencana kegiatan usaha di atas lahan",
      "Dokumen perolehan lahan: akta jual beli, hibah, atau bukti pengadaan lainnya",
      "KKPR/RTRW wilayah (kami bantu periksa bila belum tersedia)",
    ],
    faqs: [
      { q: "Apa beda HGU dan HGB, dan mana yang cocok untuk kegiatan saya?", a: "HGU dipakai untuk menggarap tanah — perkebunan, pertanian, perikanan — sedangkan HGB untuk mendirikan dan memiliki bangunan — pabrik, gudang, hotel, ruko, gedung usaha. Banyak perusahaan membutuhkan keduanya: HGU untuk lahan tanam dan HGB untuk pabrik pengolahan atau kantor di atasnya. Pemilihan hak mengikuti kegiatan yang benar-benar berjalan di atas tanah, dan keduanya dapat disesuaikan sesuai perkembangan usaha melalui jalur yang tersedia di BPN." },
      { q: "Berapa lama masa berlaku HGU dan HGB, dan bagaimana perpanjangannya?", a: "Menurut PP 18/2021, HGU diberikan paling lama 25 tahun, dapat diperpanjang paling lama 25 tahun, dan diperbarui paling lama 35 tahun; HGB diberikan paling lama 30 tahun, diperpanjang 20 tahun, dan diperbarui 30 tahun. Perpanjangan diajukan sebelum masa berlaku habis — dan posisi terbaik untuk mengajukannya adalah jauh sebelum tenggat, bukan minggu-minggu terakhir. Kegiatan usaha yang berjalan baik, patuh pajak, dan sesuai peruntukan menjadi pertimbangan penerbitnya." },
      { q: "Apakah PT PMA bisa memegang HGB atau HGU?", a: "Ya. HGU dan HGB diperuntukkan bagi badan hukum yang didirikan menurut hukum Indonesia dan berkedudukan di Indonesia — kategori yang mencakup PT PMA dengan izin investasi, bukan hanya PT lokal. Yang tidak boleh dipegang badan usaha adalah Hak Milik; oleh karena itu tanah yang dibeli perusahaan dari pemilik perorangan harus disesuaikan haknya menjadi HGB atau hak lain yang tersedia. Kami menangani penyesuaian hak ini secara langsung agar aset perusahaan berdiri di atas dasar yang sah." },
    ],
    related: ["izin-tambang-iup", "due-diligence-properti", "kawasan-industri", "kredit-kur"],
  },
  {
    slug: "izin-usaha-perumahan",
    tagline: "Perumahan yang dijual hari ini harus lahir dari izin yang jalan lebih dulu.",
    heroSub:
      "Izin usaha perumahan dari Kementerian PUPR atau Pemda, persetujuan lingkungan dan PBG per tahap, matrikulasi rumah susun, hingga kontrak jual beli unit yang benar — kelayakan pengembang dibangun dari kertas sebelum paku pertama dipalu.",
    timeline: "4–10 minggu tergantung skala & kelengkapan lokasi",
    intro: [
      "Pengembang perumahan di Indonesia tidak boleh sekadar punya tanah lalu mulai bangun: UU 1/2011 tentang Perumahan dan Kawasan Permukiman jo. UU 6/2023 mewajibkan izin usaha perumahan bagi setiap pengembang, diterbitkan Kementerian PUPR atau instansi daerah sesuai kewenangan. Sebelum membangun, rantai persetujuan harus berjalan: bukti hak atas tanah, Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR), persetujuan lingkungan, dan Persetujuan Bangunan Gedung (PBG) per tahap pembangunan berdasarkan UU 28/2002 jo. PP 16/2021. Ada pula kewajiban sosial yang melekat pada skala tertentu: pengembang perumahan wajib membangun rumah susun, yang tercatat lewat matrikulasi sesuai UU 20/2011. Seluruhnya menjadi dasar legal bagi kontrak jual beli unit — dari PPJB hingga AJB.",
      "Kesalahan yang paling sering menghantui pengembang adalah memasarkan unit sebelum izin usaha terbit — uang muka pembeli diterima tanpa dasar legal, dan satu keluhan perlindungan konsumen bisa menghentikan seluruh kampanye penjualan. Kesalahan kedua: membangun tahap demi tahap tanpa PBG per tahap, sehingga SLF dan KPR pembeli tersendat di akhir. Kesalahan ketiga: kewajiban rumah susun diabaikan atau dianggap isu administratif kecil — padahal ia menjadi prasyarat perizinan lanjutan pengembang. Kontrak PPJB yang disalin tanpa disesuaikan menambah lapisan risiko: klausul yang bertentangan dengan UU Perlindungan Konsumen gugur saat diuji.",
      "Kami membangun kelayakan pengembang dari tanah sampai kontrak: pemeriksaan lahan dan haknya, penerbitan izin usaha perumahan, penataan persetujuan lingkungan dan KKPR, PBG per tahap pembangunan, matrikulasi rumah susun, dan penyusunan kontrak PPJB/AJB yang berdiri di atas UUPK. Untuk pengembang yang tengah berjalan, kami menata kepatuhan yang tertinggal agar tahap berikutnya tidak tersendat. Hasil akhirnya bukan sekadar izin di dinding kantor, melainkan alur penjualan unit yang bisa berjalan dari unit pertama sampai serah terima kunci.",
    ],
    benefits: [
      { title: "Pemasaran legal sejak unit pertama", desc: "Uang muka pembeli diterima di atas izin yang sah — kampanye penjualan tidak bisa dihentikan oleh keluhan keabsahan." },
      { title: "Pembangunan tidak berhenti di tengah", desc: "PBG per tahap ditata sebelum konstruksi — tahap berikutnya berjalan tanpa pembekuan." },
      { title: "Kewajiban rumah susun tertata", desc: "Matrikulasi diurus benar — kewajiban sosial tidak menjadi ganjalan perizinan berikutnya." },
      { title: "Kontrak yang melindungi pengembang", desc: "PPJB dan AJB disusun sesuai UUPK — klausul bertahan saat diuji, sengketa pembeli berkurang." },
      { title: "KPR pembeli lancar", desc: "Bank menilai legalitas pengembang sebelum menyetujui KPR — kelengkapan izin Anda mempercepat penjualan unit." },
    ],
    process: [
      { title: "Kelayakan lahan & struktur pengembangan", desc: "Hak atas tanah, KKPR, dan rencana induk pengembangan diperiksa — peta kebutuhan perizinan disusun per tahap." },
      { title: "Izin usaha perumahan", desc: "Permohonan disusun dan diajukan ke instansi berwenang sampai izin usaha terbit atas nama pengembang." },
      { title: "Lingkungan, KKPR & PBG per tahap", desc: "Persetujuan lingkungan dan PBG diurus sesuai tahapan pembangunan yang direncanakan." },
      { title: "Matrikulasi & kontrak jual beli", desc: "Kewajiban rumah susun dimatrikulasi, kontrak PPJB/AJB disusun, dan kepatuhan penjualan dipantau berjalan." },
    ],
    requirements: [
      "NIB dan dokumen badan usaha: akta dan KBLI kegiatan perumahan/bangunan gedung",
      "Bukti hak atas tanah, lokasi pengembangan, dan rencana induknya (jumlah unit, tahap, komponen)",
      "Data pengurus perusahaan dan penanggung jawab proyek",
      "Dokumen lingkungan bila sudah ada (persetujuan lingkungan/AMDAL/UKL-UPL)",
      "Rencana pemasaran awal (menentukan urutan kepatuhan yang disusun)",
    ],
    faqs: [
      { q: "Bolehkah pengembang mengumpulkan uang muka sebelum izin usaha perumahan terbit?", a: "Tidak. Pemasaran unit menuntut legalitas yang berdiri lebih dulu — izin usaha perumahan, persetujuan lingkungan, dan PBG tahap terkait — karena pembeli yang membayar di atas proyek yang belum berizin berada di posisi paling rentan saat proyek macet. Praktik yang aman adalah menyusun seluruh perizinan pada masa pra-pemasaran, sehingga kampanye penjualan berjalan penuh sejak hari pertama. Kami menata urutan itu agar waktu pra-pemasaran Anda tetap ringkas." },
      { q: "Apa itu matrikulasi rumah susun dan kapan pengembang kena?", a: "Matrikulasi adalah pencatatan kewajiban pengembang perumahan untuk membangun rumah susun sesuai UU 20/2011 dan peraturan pelaksananya — kewajiban yang melekat pada pengembangan perumahan dengan skala tertentu. Pencatatan ini dilakukan sebelum izin usaha dan pembangunan berjalan, dan pemenuhannya dipantau sampai selesai. Mengabaikannya sering baru terasa saat perizinan tahap berikutnya ditolak — jadi kami memasukkannya ke kalender sejak awal, bukan menunggu jadi ganjalan." },
      { q: "Berapa biaya dan berapa lama menyiapkan seluruh legalitas pengembangan?", a: "Jasa kami mulai Rp 7,5 juta, dengan biaya resmi penerbitan izin, persetujuan lingkungan, dan PBG menyesuaikan skala proyek serta daerahnya. Secara umum menyiapkan izin usaha perumahan memakan 4–10 minggu, sedangkan persetujuan lingkungan untuk proyek besar bisa lebih lama karena kajian yang diperlukan. Kami memberi estimasi per tahap di awal — tanpa angka yang menyembunyikan tahapan yang sebenarnya panjang." },
    ],
    related: ["pbg-slf", "pengalihan-hak-tanah", "due-diligence-properti", "virtual-office"],
  },
  {
    slug: "konsesi-ppjt-infrastruktur",
    tagline: "Infrastruktur besar dibangun oleh kontrak sebelum dibangun oleh beton.",
    heroSub:
      "Konsesi jalan tol, air minum, terminal — struktur kemitraan KPBU, dokumen PPJT, dukungan pemerintah, sampai penutupan finansial yang bankable. Untuk investor infrastruktur yang menawar posisi dengan pemerintah sejak hari pertama.",
    timeline: "6–24 bulan dari studi kelayakan hingga penutupan finansial",
    intro: [
      "Infrastruktur publik yang memakai modal swasta berjalan di atas satu instrumen: kontrak. Skema Kerja Sama Pemerintah dengan Badan Usaha (KPBU) diatur PP 78/2019 — pemerintah memilih mitra melalui lelang, penawaran langsung, atau presentasi langsung, membagi risiko secara eksplisit, dan dapat memberi dukungan seperti Viable Government Facility (VGF) atau garansi sebagian utang. Jalan tol memiliki instrumen khusus: Persetujuan Penyelenggaraan dari BPJT dan PPJT — Perjanjian Penjualan Jasa Tanah — yang mengatur pembebanan biaya pembebasan lahan berdasarkan UU 38/2004 dan PP 15/2005. Air minum berjalan di atas UU 17/2019 dan PP 122/2015; setiap sektor punya lembaga dan formulirnya sendiri. Menang lelang itu satu hal; kontrak yang Anda tandatangani menentukan dua puluh tahun sesudahnya.",
      "Kegagalan proyek infrastruktur jarang bermula dari beton — ia bermula dari kontrak dan angka yang tidak diuji. Sponsor yang masuk tanpa studi kelayakan independen mendapati model pendapatannya salah hitung ketika proyek sudah berjalan; proyek dengan pembagian risiko yang kabur — siapa menanggung lahan, siapa menanggung risiko permintaan — berubah menjadi negosiasi tanpa akhir di saat krisis. Yang paling sering menghentikan proyek adalah bankability: bank menolak membiayai karena arus kas konsesi tidak diikat kontrak yang kuat dan dukungan pemerintah tidak terdefinisi. Modal yang terjebak di proyek yang macet adalah biaya termahal dari semua kemungkinan.",
      "Kami mendampingi dari sebelum tawaran sampai sesudah pemecahan tanah: studi kelayakan dan pemodelan keuangan ringkas, pembentukan SPV yang benar, penyusunan dan negosiasi dokumen konsesi termasuk PPJT, pemetaan dukungan pemerintah yang dapat diminta, dan penataan paket pembiayaan yang bankable sampai penutupan finansial. Saat proyek berjalan, kami menangani amandemen, perpanjangan konsesi, dan penyelesaian perselisihan kontraktual. Satu tim memegang benang merah dari awal sampai akhir — bukan dokumen yang berpindah tangan antar konsultan.",
    ],
    benefits: [
      { title: "Struktur yang bankable", desc: "Arus kas, jaminan, dan dukungan pemerintah ditata agar bank dapat membiayai — penutupan finansial bukan wacana." },
      { title: "Risiko terbagi dengan eksplisit", desc: "Risiko lahan, permintaan, dan konstruksi dipetakan ke pihak yang mampu mengelolanya — sesuai kerangka KPBU." },
      { title: "Posisi negosiasi terjaga", desc: "Anda masuk meja dengan studi kelayakan dan rancangan kontrak sendiri — bukan sekadar menerima draf pihak lain." },
      { title: "Dukungan pemerintah tidak terlewat", desc: "VGF, garansi, dan fasilitas yang tersedia dipetakan dan diajukan — nilai ekonomi proyek membaik secara legal." },
      { title: "Dari konsesi ke operasional", desc: "Amandemen, perpanjangan, dan sengketa kontrak ditangani oleh tim yang memahami proyek sejak hari pertama." },
    ],
    process: [
      { title: "Feasibility & struktur proyek", desc: "Kelayakan teknis-ekonomis dan model pendapatan diuji, struktur SPV dan pembagian risiko disusun." },
      { title: "Pemetaan skema & dukungan pemerintah", desc: "Jalur KPBU yang tersedia, lembaga yang berwenang, dan dukungan yang dapat diajukan dipetakan." },
      { title: "Drafting & negosiasi dokumen konsesi", desc: "PPJT, perjanjian konsesi, dan dokumen pendukung disusun serta dinegosiasikan sampai tanda tangan." },
      { title: "Penutupan finansial & pelaksanaan", desc: "Paket pembiayaan ditutup, syarat pelaksanaan dipenuhi, dan kepatuhan kontrak dipantau sepanjang masa konsesi." },
    ],
    requirements: [
      "Profil sponsor dan rencana investasi (kapasitas modal, pengalaman, mitra)",
      "Data awal proyek: sektor, lokasi, kapasitas rencana, dan kajian bila sudah ada",
      "Kebutuhan pembiayaan dan calon penyandang dana yang telah dikontak (bila ada)",
      "Tim teknis dan keuangan perusahaan yang siap didampingi",
      "Bila sudah ada draf kontrak atau dokumen lelang: salinannya untuk ditinjau",
    ],
    faqs: [
      { q: "Apa itu PPJT dan proyek seperti apa yang membutuhkannya?", a: "PPJT — Perjanjian Penjualan Jasa Tanah — adalah instrumen khas jalan tol yang mengatur kesepakatan pembebanan biaya pembebasan lahan antara pemerintah dan investor, di bawah UU 38/2004 dan PP 15/2005. Bagi investor, PPJT adalah dokumen yang menentukan seberapa besar beban lahan berpindah ke struktur proyeknya — salah membacanya berarti salah menghitung biaya modal. Proyek jalan tol baru maupun perpanjangan konsesi lama sama-sama membutuhkan dokumen ini, dan kami menanganinya sejak penyusunan hingga negosiasi." },
      { q: "Berapa lama dari studi kelayakan sampai proyek bisa closing?", a: "Rentang realistisnya 6–24 bulan, tergantung sektor, lembaga pemerintah yang berwenang, dan kompleksitas lahan. Proyek yang masuk daftar prioritas KPBU dengan dukungan yang jelas biasanya lebih cepat daripada yang membangun proposal dari nol. Kami memberi peta jalur dan estimasi per tahap di awal — termasuk tahap mana yang paling rawan memakan waktu." },
      { q: "Apa bedanya KPBU dengan konsesi murni swasta?", a: "Dalam KPBU (PP 78/2019), pemerintah terlibat aktif: memilih mitra lewat prosedur resmi, membagi risiko, dan dapat memberi dukungan seperti VGF atau garansi — sementara konsesi murni swasta berjalan atas risiko investor sepenuhnya. KPBU memberi kepastian dan dukungan, dengan konsekuensi prosedur yang lebih panjang; konsesi swasta lebih leluasa, dengan kepastian yang lebih bergantung pada verifikasi Anda sendiri. Pilihan yang tepat mengikuti jenis infrastruktur, kesiapan pemerintah setempat, dan selera risiko penyandang dana Anda." },
    ],
    related: ["kawasan-industri", "izin-energi-terbarukan", "pendirian-holding", "valuasi-bisnis"],
  },
  {
    slug: "sertifikasi-menara-telekomunikasi",
    tagline: "Sinyal yang memenuhi kota harus berdiri di atas izin yang penuh.",
    heroSub:
      "Menara, BTS, dan jalur fiber yang legal dari akarnya: persetujuan lokasi dari pemda, PBG, uji keamanan struktur, sampai kewajiban berbagi pakai — untuk operator, penyedia infrastruktur, dan tower company yang tidak mau asetnya disegel.",
    timeline: "4–10 minggu per titik lokasi",
    intro: [
      "Satu menara telekomunikasi menyentuh tiga lapis regulasi sekaligus: penyelenggaraan jaringan (UU 36/1999 dan PP 52/2000), penataan ruang dan bangunan (PBG berdasarkan UU 28/2002 jo. PP 16/2021), dan aturan khusus menara — termasuk Permen Kominfo 2/2023 tentang penataan menara telekomunikasi yang menuntut perencanaan berbagi pakai sejak awal. Sebelum berdiri, menara harus memperoleh persetujuan lokasi dari pemerintah daerah, memenuhi standar jarak terhadap hunian dan fasilitas publik, serta dibangun dengan desain yang lolos uji keamanan struktur. Jalur fiber dan BTS menambah lapisan izin penyelenggaraan bagi pihak yang mengoperasikan jaringannya. Regulasinya padat — dan semua titiknya bisa diperiksa siapa pun.",
      "Kasus pembongkaran menara di berbagai daerah hampir selalu memiliki akar yang sama: berdiri tanpa persetujuan lokasi tertulis, melanggar jarak aman dengan hunian, atau berdiri bertahun-tahun tanpa pernah diuji keamanan strukturnya. Beberapa berakhir tragis — menara tua yang roboh di musim angin — dan selebihnya berakhir di pengaduan warga yang menemukan menara itu tidak pernah berizin. Konsekuensinya seragam: pembongkaran, sinyal padam di area yang dilayani, kerugian pendapatan sewa, dan sengketa dengan pemilik lahan serta lingkungan sekitar. Biaya merapikan satu menara bermasalah jauh melebihi biaya menguruskannya dengan benar sejak awal.",
      "Kami menangani satu titik secara utuh: kajian kelayakan lokasi dan pemetaan jarak, pengurusan persetujuan lokasi ke pemerintah daerah, PBG, uji keamanan struktur oleh lembaga inspeksi yang kompeten, penataan kewajiban berbagi pakai, dan perjanjian lahan yang sah dengan pemiliknya. Untuk armada menara yang sudah berdiri, kami melakukan pemetaan kepatuhan massal — titik mana yang perlu dilengkapi, diurus ulang, atau dijadwalkan uji ulang. Armada yang patuh adalah aset yang tenang disewakan.",
    ],
    benefits: [
      { title: "Tidak berisiko dibongkar", desc: "Persetujuan lokasi dan PBG lengkap — aset Anda tidak bisa digugat hanya karena tidak pernah berizin." },
      { title: "Aman bagi warga sekitar", desc: "Jarak dan keamanan struktur teruji — pengaduan lingkungan tidak lagi menjadi titik lemah operasional." },
      { title: "Sharing jadi pendapatan", desc: "Kewajiban berbagi pakai ditata sejak desain — kapasitas kosong menara bisa disewakan tanpa merusak kepatuhan." },
      { title: "Fiber dan BTS satu paket", desc: "Izin penyelenggaraan jaringan dan infrastruktur pasif ditangani dalam satu alur kerja yang sama." },
      { title: "Armada terpeta", desc: "Untuk tower company: kepatuhan seluruh titik dipetakan — prioritas perbaikan jelas dan terukur." },
    ],
    process: [
      { title: "Kelayakan & pemetaan lokasi", desc: "Koordinat, jarak dengan hunian, status lahan, dan rencana teknis diperiksa sebelum pengajuan." },
      { title: "Persetujuan lokasi & PBG", desc: "Dokumen diajukan ke pemerintah daerah sampai persetujuan lokasi dan PBG terbit." },
      { title: "Konstruksi & uji keamanan", desc: "Pembangunan dipastikan sesuai desain yang disetujui, lalu keamanan struktur diuji lembaga inspeksi." },
      { title: "Sertifikasi & kepatuhan berjalan", desc: "Dokumen laik fungsi tersusun, kewajiban berbagi pakai dan perizinan jaringan dikelola berjalan per titik." },
    ],
    requirements: [
      "Data titik: koordinat, luas lahan, status lahan (sewa/beli/pengelolaan)",
      "Desain menara dan rencana teknis dari vendor (bila sudah ada)",
      "NIB dan izin penyelenggaraan jaringan (bila Anda mengoperasikan jaringan)",
      "Perjanjian lahan dengan pemilik (bila sewa)",
      "Pemetaan awal objek sekitar — kami bantu dari data publik bila belum ada",
    ],
    faqs: [
      { q: "Apa yang terjadi kalau menara berdiri tanpa persetujuan lokasi?", a: "Risiko paling nyata adalah pembongkaran — pemerintah daerah berwenang menindak bangunan tanpa persetujuan, dan kasus pembongkaran BTS terjadi berulang di banyak daerah. Di samping itu, operator yang menyewa infrastruktur tidak berizin dapat ditarik dari menara tersebut, dan pemilik lahan ikut terseret sengketa. Jalur pemulihannya ada: menara yang berdiri dapat ditinjau untuk dilengkapi perizinan atau dipindahkan sesuai penataan — kami mulai dari pemetaan status aslinya." },
      { q: "Berapa biaya dan berapa lama untuk satu titik menara?", a: "Jasa kami mulai Rp 10 juta per titik, belum termasuk biaya resmi pemerintah daerah, biaya uji keamanan struktur dari lembaga inspeksi, dan biaya sewa lahan yang disepakati dengan pemiliknya. Waktu prosesnya umumnya 4–10 minggu per titik, tergantung daerah dan kelengkapan dokumen awal. Untuk armada banyak titik, biaya per titik turun karena pengecekan wilayahnya berbagi." },
      { q: "Apa itu kewajiban sharing menara dan apa dampaknya bagi saya?", a: "Regulasi telekomunikasi mewajibkan infrastruktur menara dirancang untuk berbagi pakai antarpenyelenggara — satu menara dapat dipakai beberapa operator, dan pembangunan menara baru tidak boleh dilakukan bila ada menara yang dapat dipakai di sekitarnya. Bagi pemilik menara, ini berarti desain harus menghitung beban beberapa operator sejak awal — dan justru menjadi peluang pendapatan sewa tambahan. Bagi pencari lokasi, ini berarti prioritasnya adalah menyewa infrastruktur yang ada, bukan membangun baru." },
    ],
    related: ["pbg-slf", "pse-komdigi", "izin-usaha-perumahan", "kawasan-industri"],
  },
  {
    slug: "kawasan-industri",
    tagline: "Pabrik yang hebat lahir dari kawasan yang legal.",
    heroSub:
      "Status kawasan industri yang sah membuka pintu bagi pengelola dan penyewa: perizinan tersistem, fasilitas kepabeanan, dan insentif. Untuk pemilik lahan yang mengembangkan kawasan dan pengusaha yang menimbang lokasi pabriknya.",
    timeline: "4–8 bulan untuk pengesahan status kawasan",
    intro: [
      "Kawasan industri bukan sekadar kompleks gudang dengan pagar tinggi — ia adalah status hukum. UU 3/2014 tentang Perindustrian jo. UU 6/2023 dan PP 142/2015 menetapkan bahwa pengembangan kawasan industri menuntut izin usaha kawasan industri dari Kementerian Perindustrian, dengan persyaratan kesesuaian KKPR, kesiapan infrastruktur dasar, dan pengelolaan lingkungan yang tertata. Status itulah yang membuka pintu bagi seluruh penyewanya: perizinan tenant berjalan lebih cepat melalui sistem satu pintu pengelola kawasan, fasilitas kepabeanan seperti kawasan berikat dapat dikembangkan, dan berbagai insentif menjadi lebih mudah diakses. Tanpa status, lahan Anda hanyalah kumpulan gudang yang tenant-nya mengurus segalanya sendiri.",
      "Kesalahan yang paling mahal adalah mengembangkan kompleks industri tanpa mengecek KKPR sejak awal — pembagian blok dan pembangunan berjalan, lalu status kawasan tertahan karena peruntukan ruangnya tidak mendukung. Kesalahan kedua: pengelolaan lingkungan dipersiapkan setengah hati, sehingga persetujuan lingkungan menjadi titik macet yang menggeser seluruh jadwal. Kesalahan ketiga menyangkut tenant: penyewa masuk tanpa pemetaan perizinan oleh pengelola, lalu produksinya tersendat dan keluhan bermuara ke pengelola. Kawasan yang sepi tenant hampir selalu punya cerita perizinan yang gagal di salah satu titik ini.",
      "Kami bekerja dari lahan ke kawasan berizin: kajian KKPR dan lingkungan, penyusunan dokumen pengajuan izin usaha kawasan industri ke Kemenperin, penataan struktur pengelola, dan sistem perizinan tenant yang membuat penyewa baru bergerak cepat. Untuk kawasan yang sudah berjalan, kami memetakan fasilitas yang belum dimanfaatkan — kepabeanan, insentif, skema energi — dan merapikan kepatuhan yang tertinggal. Tujuan akhirnya satu: kawasan yang tenant lain rekomendasikan.",
    ],
    benefits: [
      { title: "Status yang membuka fasilitas", desc: "Izin usaha kawasan industri menjadi tiket bagi fasilitas kepabeanan dan insentif — bukan sekadar nama di papan." },
      { title: "Tenant cepat berizin", desc: "Sistem satu pintu pengelola membuat penyewa baru berproduksi lebih cepat — argumen jual yang paling keras." },
      { title: "KKPR & lingkungan rapi", desc: "Kesesuaian ruang dan persetujuan lingkungan ditata sejak awal — status tidak tertahan di tengah pembangunan." },
      { title: "Insentif terpetakan", desc: "Fasilitas fiskal, kepabeanan, dan energi yang tersedia dikaji dan diajukan — nilai kawasan naik secara legal." },
      { title: "Nilai lahan naik", desc: "Lahan dalam kawasan berizin dihargai pasar lebih tinggi — investasi perizinan kembali sebagai tambahan nilai aset." },
    ],
    process: [
      { title: "Kajian kelayakan kawasan", desc: "KKPR, lingkungan, dan infrastruktur dasar dinilai — celah yang akan menghambat status ditemukan lebih awal." },
      { title: "Pengajuan izin usaha kawasan industri", desc: "Dokumen disusun lengkap dan diajukan ke Kemenperin sampai izin usaha terbit." },
      { title: "Struktur pengelola & perizinan tenant", desc: "Sistem satu pintu ditata: alur izin tenant, perjanjian sewa, dan pengawasan kawasan." },
      { title: "Fasilitas & pengembangan lanjutan", desc: "Kawasan berikat, insentif, dan kemitraan energi dikaji untuk meningkatkan daya saing kawasan." },
    ],
    requirements: [
      "Data lahan kawasan: lokasi, luas, status hak, dan rencana pembagian blok",
      "Akta dan NIB badan usaha pengembang/pengelola",
      "KKPR/RTRW wilayah dan keterangan infrastruktur dasar yang tersedia",
      "Rencana kegiatan: jenis industri yang dituju dan target tenant",
      "Dokumen lingkungan bila sudah ada (persetujuan lingkungan/kajian terdahulu)",
    ],
    faqs: [
      { q: "Apa bedanya kawasan industri dengan kompleks gudang biasa?", a: "Kawasan industri memiliki status hukum yang ditetapkan Kementerian Perindustrian berdasarkan PP 142/2015 — dengan izin usaha kawasan industri, pengelola yang sah, dan sistem perizinan tersendiri bagi penyewanya. Kompleks gudang biasa tidak punya itu: tenant mengurus seluruh perizinannya sendiri dan tidak menikmati fasilitas kawasan. Bagi tenant besar yang butuh kecepatan dan fasilitas, perbedaan ini menentukan pilihan lokasi." },
      { q: "Berapa biaya dan berapa lama mendapatkan status kawasan industri?", a: "Jasa kami mulai Rp 20 juta, dengan biaya resmi Kemenperin, persetujuan lingkungan, dan kajian teknis dihitung terpisah sesuai skala kawasan. Secara umum pengesahan status memakan waktu 4–8 bulan, dan faktor yang paling menentukan adalah kelengkapan KKPR serta kesiapan dokumen lingkungan. Kawasan yang datang dengan kajian utuh biasanya bergerak paling cepat." },
      { q: "Apakah tenant tetap harus mengurus perizinan sendiri?", a: "Ya, tenant tetap wajib memiliki perizinan berusaha berbasis risiko untuk kegiatannya — tetapi dalam kawasan berizin, sebagian proses berjalan melalui sistem satu pintu pengelola sehingga lebih cepat dan terstandar. Pengelola kawasan memainkan peran penghubung: data kawasan, pengelolaan lingkungan bersama, dan pengawasan. Justru karena itu kualitas perizinan kawasan menjadi daya jual utama pengelola." },
    ],
    related: ["kawasan-berikat", "izin-lingkungan", "izin-tambang-iup", "nib-oss"],
  },
  {
    slug: "sengketa-tanah-penyelesaian",
    tagline: "Tanah tidak pernah bohong — riwayatnya hanya perlu didengar dengan benar.",
    heroSub:
      "Sengketa batas, sertifikat ganda, tanah garapan — ditelusuri sampai akar, diselesaikan lewat jalur yang tepat: mediasi, aduan ke BPN, atau upaya hukum dengan strategi yang tidak membakar uang Anda.",
    timeline: "1–3 bulan penelusuran & mediasi; upaya hukum lanjutan menyesuaikan",
    intro: [
      "Sengketa tanah di Indonesia memiliki wajah yang berulang: batas antartetangga yang berbeda antara peta dan jalur lapangan, sertifikat ganda yang terbit dari dua permohonan, tanah yang digarapi pihak lain bertahun-tahun, atau warisan yang dijual sebagian ahli waris tanpa persetujuan yang lain. Jalur penyelesaiannya berlapis: administratif melalui keberatan dan penelusuran data di BPN berdasarkan PP 24/1997, mediasi dan perdamaian antarpihak, sampai upaya hukum perdata atau pidana. Setiap jalur menuntut bukti yang berbeda dan menghasilkan kecepatan yang berbeda. Memilih jalur yang salah di awal adalah keputusan paling mahal dalam sengketa tanah.",
      "Kesalahan yang paling sering: langsung menggugat tanpa menelusuri riwayat hak — menang dalam narasi, kalah dalam dokumen. Kesalahan kedua: mengandalkan surat lama dan ingatan tanpa memeriksa status hak yang terdaftar hari ini, padahal tanah bisa saja sudah berpindah, diikat, atau dikeberatan pihak lain. Kesalahan ketiga: memakai jalur pidana sebagai alat tekan — laporan yang gagal terbukti justru membalik posisi ke pelapornya. Dan kesalahan yang paling manusiawi: membakar jembatan dengan tetangga yang kelak tetap menjadi tetangga, sementara mediasi dengan posisi kuat sering menyelesaikan masalah lebih cepat dan lebih murah.",
      "Kami memulai dari bawah: penelusuran riwayat hak di BPN — sertifikat, akta, alih hak, keberatan — pemeriksaan lapangan, dan wawancara pihak-pihak yang mengetahui. Dari situ kami menyusun penilaian posisi hukum yang jujur, lalu merekomendasikan jalurnya: aduan administratif ke BPN, mediasi dengan posisi yang kuat, atau gugatan yang disiapkan matang-matang. Selesai bukan berhenti di keputusan — kami membantu mengunci hasilnya: pembagian batas yang didaftarkan ulang, peralihan hak yang dibenahi, dan dokumen yang membuat sengketa yang sama tidak bisa kembali.",
    ],
    benefits: [
      { title: "Akar masalah terlihat dulu", desc: "Riwayat hak ditelusuri sampai dokumen tertua yang relevan — strategi dibangun di atas fakta, bukan narasi." },
      { title: "Jalur yang tepat, bukan yang emosional", desc: "Administratif, mediasi, atau gugatan dipilih berdasarkan kekuatan bukti dan biaya nyatanya." },
      { title: "Mediasi dengan posisi kuat", desc: "Perundingan dijalankan ketika dokumen Anda sudah tak terbantah — hasil perdamaian yang tahan diuji." },
      { title: "Aset kembali bergerak", desc: "Tanah yang selesai sengketanya bisa didaftarkan ulang, dipakai, atau dijual — bukan sekadar aman untuk sementara." },
      { title: "Tidak kambuh", desc: "Dokumen dan pendaftaran ulang ditata agar akar sengketa yang sama tidak muncul lagi di generasi berikutnya." },
    ],
    process: [
      { title: "Penelusuran riwayat & lapangan", desc: "Data BPN, akta, keberatan, dan kondisi fisik diperiksa — kronologi kejadian disusun dari bukti." },
      { title: "Penilaian posisi hukum", desc: "Kekuatan bukti, jalur yang tersedia, dan estimasi biaya-waktu disusun jujur — termasuk bila posisi Anda lemah." },
      { title: "Mediasi & jalur administratif", desc: "Aduan ke BPN, somasi, dan perundingan dijalankan dengan dokumen yang siap — sebelum mempertimbangkan gugatan." },
      { title: "Upaya hukum & penguncian hasil", desc: "Bila gugatan diperlukan, ia disiapkan utuh; hasil apa pun didaftarkan ulang agar sengketa tidak kembali." },
    ],
    requirements: [
      "Sertifikat atau dokumen kepemilikan yang diperselisihkan",
      "Kronologi kepemilikan dan penguasaan: tahun, kejadian, nama-nama yang terlibat",
      "Bukti pendukung: PBB, foto lapangan, peta, bukti membangun/menggarap, daftar saksi",
      "Surat-surat yang sudah diterima dari BPN, kepolisian, atau pengadilan (bila ada)",
      "Data pihak lawan yang diketahui",
    ],
    faqs: [
      { q: "Berapa biaya penyelesaian sengketa tanah?", a: "Penelusuran riwayat dan penyusunan strategi kami mulai Rp 7,5 juta, ditambah biaya resmi pengecekan atau keberatan di BPN sesuai temuan. Tahap litigasi dihitung terpisah karena durasi dan kompleksitasnya berbeda jauh antarkasus — kami memberi estimasi nyata sebelum Anda mengambil keputusan. Prinsip kami sederhana: keluarkan biaya berat hanya setelah posisi hukum diketahui, bukan sebaliknya." },
      { q: "Lebih baik langsung gugat, atau coba mediasi dulu?", a: "Jawabannya mengikuti kekuatan dokumen Anda, bukan emosi hari itu. Bila bukti Anda kuat dan terdaftar, mediasi dari posisi kuat sering menyelesaikan masalah dalam hitungan minggu dengan biaya kecil — sedangkan gugatan menyita bertahun-tahun. Bila dokumen lawan yang kuat, gugatan prematur justru mengunci Anda dalam kekalahan yang mahal; jalur administratif atau pembenahan peralihan bisa lebih menguntungkan. Penilaian posisi hukum di awal adalah pekerjaan paling murah dari seluruh sengketa." },
      { q: "Tanah saya digarapi orang lain — apa langkah pertama?", a: "Amankan bukti sebelum menghadapi siapa pun: foto kondisi, peta, PBB, kronologi penguasaan, dan nama-nama yang dapat menjadi saksi. Dari situ kami menyusun jalur yang tersedia: somasi tertulis, aduan administratif, dan bila diperlukan laporan atau gugatan — urutannya disusun agar setiap langkah memperkuat posisi Anda, bukan membocorkannya. Hindari konfrontasi fisik yang bisa membalik status hukum ke arah Anda." },
    ],
    related: ["due-diligence-properti", "legal-drafting", "sengketa-bisnis-mediasi", "pengalihan-hak-tanah"],
  },
  {
    slug: "izin-tambang-iup",
    tagline: "Gunung tidak bisa digarap setengah hati — izinnya pun harus utuh.",
    heroSub:
      "IUP eksplorasi dan operasi produksi, IUPK, RKAB, sampai kewajiban kaidah teknik pertambangan yang baik — perizinan mineral dan batubara yang bertahap, sah, dan tahan audit. Untuk perusahaan tambang yang bermain di sektor paling diawasi negara.",
    timeline: "4–12 bulan tergantung tahap & wilayah",
    intro: [
      "Pertambangan adalah sektor dengan izin berlapis dan pengawasan paling ketat: UU 4/2009 jo. UU 3/2020 dan PP 96/2021 menetapkan bahwa kegiatan pertambangan hanya boleh berjalan di Wilayah Izin Usaha Pertambangan (WIUP) yang ditetapkan pemerintah, dengan izin yang bertahap — IUP eksplorasi untuk menelusuri cadangan, dan IUP operasi produksi untuk mengambil serta mengolahnya. Kewenangan penerbitannya terbagi: Kementerian ESDM untuk wilayah lintas provinsi dan komoditas tertentu, gubernur atau bupati/walikota untuk sisanya. IUPK — izin usaha pertambangan khusus — menjadi jalur untuk area tertentu, termasuk bekas wilayah kontrak karya. Kewajibannya tidak berhenti saat izin terbit: RKAB disetujui tiap tahun, laporan berkala dituntut, kaidah teknik pertambangan yang baik diuji, dan rencana pascatambang harus disiapkan sejak awal.",
      "Kesalahan yang paling sering menggerogoti perusahaan tambang bukan soal izin utamanya, melainkan soal kepatuhan berkelanjutan: RKAB yang tidak disetujui karena realisasi produksi tidak konsisten dengan rencana, laporan berkala yang tertinggal, atau kegiatan yang berjalan sebelum persetujuan lingkungan dan kesesuaian tata ruang lengkap. Ada pula yang memulai kegiatan di lahan yang hak atasnya belum ditata — IUP tidak otomatis memberi hak atas tanah, dan HGU menjadi kewajiban tersendiri. Konsekuensinya berjenjang: teguran, penghentian kegiatan, denda, sampai pencabutan izin — dan dalam era ekspor komoditas, kelalaian administratif ikut mengunci kelancaran penjualan dan ekspor.",
      "Kami menangani perizinan tambang sebagai sistem, bukan dokumen tunggal: pemetaan wilayah dan komoditas, pengajuan IUP atau IUPK sesuai kewenangan, penataan persetujuan lingkungan dan tata ruang, penyusunan RKAB yang realistis dan laporan berkala yang tersistem, kepatuhan kaidah teknik pertambangan yang baik, hingga rencana pascatambang. Untuk pemegang izin lama, kami mengejar kepatuhan yang tertinggal dan kenaikan tahap — dari eksplorasi menuju operasi produksi. Tujuannya satu: izin yang tahan audit tahun demi tahun.",
    ],
    benefits: [
      { title: "Izin yang tahan audit", desc: "Dokumen, laporan, dan realisasi konsisten — pemeriksaan ESDM atau pemda tidak menemukan kejutan." },
      { title: "RKAB bukan lagi momok", desc: "Rencana kerja disusun realistis dan diajukan tepat waktu — persetujuan tahunan berjalan tanpa drama." },
      { title: "Tahapan rapi", desc: "Dari eksplorasi ke operasi produksi, setiap kenaikan tahap disiapkan sesuai syaratnya." },
      { title: "Lingkungan & pascatambang tertangani", desc: "Persetujuan lingkungan dan rencana pascatambang disiapkan sejak awal — beban yang biasanya menimbun di akhir menjadi terjadwal." },
      { title: "Penjualan & ekspor lancar", desc: "Legalitas utuh membuat dokumen ekspor dan kontrak penjualan tidak tersendat oleh isu perizinan." },
    ],
    process: [
      { title: "Pemetaan wilayah & kelayakan", desc: "Komoditas, wilayah yang tersedia, dan kewenangan penerbit dipetakan — jalur izin yang benar ditetapkan." },
      { title: "Pengajuan IUP/IUPK & lingkungan", desc: "Dokumen kemampuan, rencana kegiatan, dan lingkungan disusun serta diajukan sampai izin terbit." },
      { title: "RKAB & kepatuhan periodik", desc: "Rencana kerja tahunan disusun, laporan berkala ditata, dan realisasi dipantau tetap konsisten." },
      { title: "Kepatuhan teknik & pascatambang", desc: "Kaidah teknik pertambangan yang baik dijalankan, rencana pascatambang disiapkan dan dipantau." },
    ],
    requirements: [
      "Akta, NIB, dan KBLI perusahaan sesuai kegiatan pertambangan",
      "Wilayah yang dituju: kabupaten/provinsi, komoditas, dan tahap yang diinginkan",
      "Bukti kemampuan finansial: laporan keuangan atau rekening koran (disyaratkan pengajuan)",
      "Rencana kegiatan awal untuk RKAB pertama",
      "Bila sudah berizin: izin lama, RKAB terakhir, dan laporan realisasi terkini",
    ],
    faqs: [
      { q: "Apa beda IUP, IUPK, dan WIUP?", a: "WIUP adalah wilayah yang ditetapkan pemerintah untuk kegiatan pertambangan — wilayahnya, bukan izinnya; IUP adalah izin untuk mengelola WIUP tersebut dalam tahap eksplorasi atau operasi produksi, sedangkan IUPK adalah izin usaha pertambangan khusus untuk jalur tertentu, termasuk bekas wilayah kontrak karya. Perbedaan penerbitnya pun penting: ESDM untuk wilayah tertentu, pemda untuk sisanya. Pemetaan yang benar di awal mencegah Anda mengajukan ke pintu yang salah." },
      { q: "Berapa biaya dan berapa lama memperoleh IUP?", a: "Jasa kami mulai Rp 25 juta, dengan biaya resmi pemerintah, persetujuan lingkungan, dan kajian teknis seperti survei atau kajian geologi dihitung terpisah sesuai kebutuhan tahapnya. Secara umum pengajuan memakan 4–12 bulan — tahap operasi produksi dan wilayah dengan antrean WIUP memakan waktu paling panjang. Kami memberi estimasi per tahap sebelum Anda berkomitmen." },
      { q: "Apa risiko bila RKAB tidak disetujui atau laporan berkala tertinggal?", a: "Sanksinya berjenjang: teguran, penghentian kegiatan, denda, sampai pencabutan izin — dan RKAB yang tidak disetujui membuat kegiatan tahun berjalan berada di posisi rentan sejak awal. Dampak praktisnya lebih cepat dari sanksi formal: dokumen ekspor, kelayakan kredit, dan due diligence pembeli terganggu begitu kepatuhan periodik bolong. Kami menata RKAB dan laporan sebagai rutinitas tahunan yang terjadwal, bukan pekerjaan darurat." },
    ],
    related: ["izin-lingkungan", "hgu-hgb-pertanahan", "kawasan-industri", "lartas-ekspor-komoditas"],
  },
  {
    slug: "izin-energi-terbarukan",
    tagline: "Matahari dan angin tidak meminta izin — pebisnisnya yang harus.",
    heroSub:
      "PLTS rooftop, pembangkit skala kecil, hingga co-firing — izin usaha penyediaan energi (IUPTLU), persetujuan koneksi PLN, dan insentif yang bisa diambil. Untuk pengusaha energi terbarukan yang tidak mau proyeknya berhenti di pagar jaringan.",
    timeline: "1–3 bulan rooftop; 2–6 bulan proyek komersial",
    intro: [
      "Energi baru terbarukan sedang didorong kuat oleh regulasi: UU 30/2007 tentang Energi menjadi payungnya, sementara PP 112/2022 memerintahkan percepatan pengembangan EBT beserta skema tarifnya. Kegiatan usaha penyediaan tenaga listrik untuk kepentingan umum menuntut IUPTLU sesuai PP 14/2012 — kecuali skema tertentu seperti PLTS untuk kepentingan sendiri, yang tidak memerlukan izin usaha melainkan persetujuan koneksi ke jaringan PLN sesuai Permen ESDM 26/2021. Proyek komersial yang menjual listrik ke PLN atau ke pelanggan berdiri di atas kombinasi berbeda: izin usaha, persetujuan koneksi, dan perjanjian jual beli tenaga listrik. Skema yang Anda pilih menentukan izin yang dibutuhkan — dan menentukan apakah ekonomi proyeknya masuk akal.",
      "Kesalahan yang paling sering adalah memulai dari panel surya, bukan dari skema: pemilik gedung memasang PLTS rooftop dengan ekspektasi menjual kelebihan listrik secara besar, lalu menemukan bahwa skema penyaluran dan kebijakan jaringan membuat ekonomi proyeknya berbeda dari perhitungan vendor. Kesalahan kedua: proyek komersial berjalan tanpa IUPTLU yang dibutuhkan, dan berhenti tepat sebelum koneksi. Kesalahan ketiga: kapasitas jaringan PLN di titik lokasi tidak dikaji dulu — pembangkit berdiri, tetapi tidak dapat disambungkan pada kapasitas yang diharapkan. Aset yang berdiri tapi tidak menyambung adalah investasi yang diam-diam membengkak.",
      "Kami memulai dari skema dan angka: pemetaan pilihan — kepentingan sendiri, komersial, hingga skema khusus seperti co-firing — beserta kelayakan ekonominya, lalu kebutuhan perizinan yang persis untuk skema itu: IUPTLU bila diperlukan, persetujuan koneksi ke PLN, perjanjian jual beli tenaga listrik, dan pemetaan insentif yang tersedia untuk proyek Anda. Untuk industri dengan target energi hijau, kami menyambungkan perizinan ini dengan agenda keberlanjutan perusahaan — dari jejak karbon sampai pembiayaan hijau. Proyek yang benar sejak skema jarang berhenti di pagar jaringan.",
    ],
    benefits: [
      { title: "Skema benar sejak awal", desc: "Kepentingan sendiri, komersial, atau skema khusus — dipetakan dengan hitungan ekonominya sebelum panel dipesan." },
      { title: "Koneksi bukan ganjalan", desc: "Kapasitas jaringan dan persetujuan koneksi dikaji dini — pembangkit tidak berdiri lalu menganggur." },
      { title: "Izin usaha tepat kebutuhan", desc: "IUPTLU diurus hanya bila skema Anda memang menuntutnya — tidak ada perizinan yang membebani tanpa alasan." },
      { title: "Insentif terpetakan", desc: "Fasilitas fiskal dan dukungan yang tersedia untuk EBT dikaji dan diajukan — ekonomi proyek membaik secara legal." },
      { title: "Menyambung ke agenda hijau", desc: "Perizinan proyek terhubung dengan agenda karbon dan pembiayaan hijau perusahaan — satu cerita yang utuh." },
    ],
    process: [
      { title: "Pemetaan skema & kelayakan ekonomi", desc: "Pilihan skema dan hitungan ekonominya diuji — termasuk kapasitas jaringan di titik lokasi." },
      { title: "Perizinan usaha (bila perlu)", desc: "IUPTLU dan perizinan dasar lainnya diurus sesuai skema yang dipilih." },
      { title: "Koneksi & kontrak tenaga listrik", desc: "Persetujuan koneksi ke PLN dan perjanjian jual beli tenaga listrik ditata sampai tanda tangan." },
      { title: "Operasional, insentif & kepatuhan", desc: "Kewajiban operasional dipantau, insentif diajukan, dan perluasan kapasitas disiapkan." },
    ],
    requirements: [
      "Akta dan NIB perusahaan (bila usaha) atau data pemilik bangunan (bila rooftop)",
      "Lokasi, sumber energi, dan kapasitas rencana (kWp/MWp)",
      "Data konsumsi listrik atau rencana penjualan energi (menentukan skema)",
      "Bukti kepemilikan atap/lahan atau persetujuan pemilik (bila sewa)",
      "Rencana keuangan proyek (bila skema komersial)",
    ],
    faqs: [
      { q: "PLTS rooftop untuk kantor atau pabrik saya — perlu izin apa saja?", a: "Untuk kepentingan sendiri, PLTS rooftop tidak memerlukan izin usaha penyediaan tenaga listrik — yang dibutuhkan adalah persetujuan koneksi ke jaringan PLN sesuai Permen ESDM 26/2021, mengikuti prosedur dan skema penyaluran yang berlaku. Yang menentukan ekonomi proyek Anda adalah skema penyaluran kelebihan energi dan kebijakan jaringan setempat, bukan sekadar kapasitas panel yang terpasang. Kami menata persetujuan koneksi sekaligus hitungan ekonominya agar ekspektasi dan realitanya bertemu." },
      { q: "Berapa biaya dan berapa lama prosesnya?", a: "Jasa kami mulai Rp 15 juta, dengan biaya resmi izin dan koneksi, serta biaya teknis seperti studi kelayakan, dihitung terpisah sesuai skala proyek. Untuk skema rooftop biasanya 1–3 bulan; proyek komersial dengan IUPTLU dan perjanjian jual beli tenaga listrik umumnya 2–6 bulan. Proyek yang lebih besar menyesuaikan proses koneksi dan kapasitas jaringan yang tersedia." },
      { q: "Apakah masih menguntungkan menjual listrik ke PLN?", a: "Keuntungannya bergantung pada skema yang berlaku saat proyek Anda masuk — kebijakan penyaluran kelebihan energi dan antrean kuota koneksi berubah dari waktu ke waktu, sehingga proyek yang menguntungkan tahun lalu belum tentu sama tahun ini. Pendekatan yang aman adalah memodelkan ekonomi proyek berdasarkan skema terkini sebelum berkomitmen, bukan mengikuti cerita sukses vendor. Kami selalu menunjukkan angkanya dengan asumsi yang jujur — termasuk bila skema terbaik adalah kepentingan sendiri dengan prioritas efisiensi tagihan." },
    ],
    related: ["jejak-karbon-nzkc", "konsesi-ppjt-infrastruktur", "nib-oss", "pembiayaan-hijau"],
  },
];

/**
 * Lapisan pengayaan — profil klien, deliverables, rincian biaya, dasar hukum.
 * Digabung otomatis oleh getServiceContent(); kunci = slug layanan.
 */
export const propertiEnrichment: Record<string, ServiceEnrichment> = {
  "due-diligence-properti": {
    whoFor: [
      "Calon pembeli rumah, tanah, atau gedung yang akan membayar DP dalam jumlah besar",
      "Investor dan pengembang yang mengakuisisi lahan dalam jumlah atau berblok",
      "Perusahaan yang menerima tanah sebagai agunan, sewa jangka panjang, atau kerja sama dengan pemilik lahan",
      "Pembeli tanah warisan atau tanah bekas proyek yang riwayatnya panjang",
    ],
    deliverables: [
      "Laporan due diligence berklasifikasi risiko dengan rekomendasi transaksi",
      "Hasil verifikasi BPN: status sertifikat, riwayat alih hak, beban hak, dan keberatan",
      "Hasil pengecekan KKPR/RTRW terhadap rencana penggunaan Anda",
      "Hasil pengecekan pajak (SPPT PBB) dan jejak sengketa",
      "Rekomendasi struktur transaksi yang aman (APHT, tahapan pembayaran, klausul kunci)",
    ],
    costs: [
      { item: "Jasa due diligence DIGIMAN.ID", note: "mulai Rp 7,5 jt per objek — turun per objek untuk beberapa lahan sekaligus" },
      { item: "Biaya resmi pengecekan BPN", note: "sesuai tarif permohonan pengecekan data di kantor BPN setempat" },
      { item: "Biaya pengecekan pajak & dokumen", note: "kecil, menyesuaikan instansi yang perlu dikonfirmasi" },
      { item: "Biaya survei lapangan", note: "termasuk jasa untuk wilayah Jabodetabek; luar wilayah menyesuaikan perjalanan" },
    ],
    legalBasis: [
      "UU No. 5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria (UUPA)",
      "PP No. 24 Tahun 1997 tentang Pendaftaran Tanah",
      "PP No. 18 Tahun 2021 tentang Hak Pengelolaan, Hak Milik, HGU, HGB, Hak Pakai, dan Hak Sewa atas Tanah",
      "UU No. 6 Tahun 2023 (Cipta Kerja) dan Permen ATR/BPN No. 21 Tahun 2021 tentang KKPR",
    ],
  },

  "pengalihan-hak-tanah": {
    whoFor: [
      "Pembeli rumah atau tanah yang menyelesaikan transaksi sampai balik nama",
      "Penerima hibah dan keluarga yang membagi atau menjual warisan",
      "Badan usaha, PT, dan PMA yang membeli tanah dengan hak yang sesuai (HGB)",
      "Pengembang dan investor yang mengakuisisi lahan untuk kegiatan usaha",
    ],
    deliverables: [
      "Akta jual beli, hibah, atau APHT yang dibuat PPAT",
      "Bukti pembayaran PPh dan BPHTB yang telah divalidasi resmi",
      "Sertifikat atas nama baru yang terbit dari BPN",
      "SPPT PBB terbaru atas nama Anda",
      "Arsip dokumen transaksi lengkap dalam satu laporan status",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 5 jt — mencakup seluruh rantai sampai balik nama" },
      { item: "PPh final pengalihan (penjual)", note: "2,5% dari nilai transaksi/NJOP — PP 34/2016" },
      { item: "BPHTB (pembeli)", note: "5% atas nilai perolehan dikurangi NPOPTKP daerah" },
      { item: "Biaya PPAT & resmi BPN", note: "tarif standar pengikatan jual beli dan pendaftaran" },
      { item: "Biaya kuasa legalisasi (bila perlu)", note: "untuk pihak yang berhalangan hadir" },
    ],
    legalBasis: [
      "UU No. 5 Tahun 1960 (UUPA) dan PP No. 18 Tahun 2021 tentang Hak Atas Tanah",
      "PP No. 24 Tahun 1997 tentang Pendaftaran Tanah",
      "PP No. 34 Tahun 2016 tentang PPh atas Pengalihan Hak atas Tanah dan Bangunan",
      "UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (BPHTB)",
    ],
  },

  "hgu-hgb-pertanahan": {
    whoFor: [
      "Perusahaan perkebunan, pertanian, dan perikanan yang menggarap lahan luas",
      "Pengembang industri, gudang, dan properti komersial yang membangun atas tanah",
      "PT PMA yang berinvestasi dan butuh hak atas tanah yang sah bagi badan usaha",
      "Perusahaan pemegang HGU/HGB lama yang mendekati masa berakhir atau berencana agunan kredit",
    ],
    deliverables: [
      "Penetapan hak dan sertifikat HGU/HGB atas nama perusahaan",
      "Laporan kelayakan KKPR dan pilihan hak yang direkomendasikan",
      "Sertifikat Hak Tanggungan yang diikat untuk agunan kredit (bila dibutuhkan)",
      "Dokumen perpanjangan/pembaruan hak yang disetujui",
      "Kalender kepatuhan hak atas tanah perusahaan",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 15 jt — menyesuaikan luas, jenis hak, dan instansi" },
      { item: "Biaya resmi BPN", note: "pengukuran, pendaftaran, dan penerbitan — dihitung berdasarkan luas lahan" },
      { item: "Pajak perolehan (BPHTB/PPh)", note: "menyesuaikan jalur perolehan lahan yang dipakai" },
      { item: "Biaya teknis kajian", note: "survei/pengukuran dan dokumen pendukung oleh tenaga ahli bila diperlukan" },
    ],
    legalBasis: [
      "UU No. 5 Tahun 1960 (UUPA)",
      "PP No. 18 Tahun 2021 tentang Hak Pengelolaan, Hak Milik, HGU, HGB, Hak Pakai, dan Hak Sewa atas Tanah",
      "PP No. 24 Tahun 1997 tentang Pendaftaran Tanah",
      "UU No. 4 Tahun 1996 tentang Hak Tanggungan",
    ],
  },

  "izin-usaha-perumahan": {
    whoFor: [
      "Perusahaan yang memulai pengembangan perumahan pertamanya",
      "Pengembang gedung, apartemen, dan kawasan tercampur",
      "Pengembang berjalan yang menyiapkan tahap berikutnya atau memperbaiki kepatuhan",
      "Pemilik lahan besar yang akan bekerja sama dengan pengembang",
    ],
    deliverables: [
      "Izin usaha perumahan yang terbit atas nama pengembang",
      "Persetujuan lingkungan dan pemetaan KKPR per lokasi",
      "PBG per tahap pembangunan",
      "Matrikulasi rumah susun tercatat",
      "Kontrak PPJB/AJB standar dan panduan kepatuhan penjualan",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 7,5 jt — menyesuaikan skala dan jumlah tahap" },
      { item: "Biaya resmi izin usaha", note: "tarif instansi PUPR/pemda setempat" },
      { item: "Biaya persetujuan lingkungan", note: "kajian UKL-UPL atau AMDAL sesuai skala proyek" },
      { item: "Biaya PBG per tahap", note: "tarif bangunan sesuai daerah dan luasnya" },
      { item: "Kewajiban pembangunan rumah susun", note: "biaya pembangunan oleh pengembang — tercatat lewat matrikulasi" },
    ],
    legalBasis: [
      "UU No. 1 Tahun 2011 tentang Perumahan dan Kawasan Permukiman jo. UU No. 6 Tahun 2023",
      "PP No. 12 Tahun 2021 sebagai peraturan pelaksanaannya",
      "UU No. 20 Tahun 2011 tentang Rumah Susun (matrikulasi)",
      "UU No. 28 Tahun 2002 tentang Bangunan dan PP No. 16 Tahun 2021 (PBG)",
    ],
  },

  "konsesi-ppjt-infrastruktur": {
    whoFor: [
      "Investor dan sponsor yang menawar proyek infrastruktur publik",
      "Pengusaha jalan tol, air minum, terminal, dan infrastruktur jaringan",
      "Perusahaan konstruksi besar yang naik kelas menjadi pengembang proyek",
      "Pemda dan BUMD yang menyiapkan kemitraan dengan swasta (sisi penyiapan proyek)",
    ],
    deliverables: [
      "Studi kelayakan ringkas dan model keuangan proyek",
      "Struktur SPV dan dokumen pendirian yang benar",
      "Rancangan dan negosiasi perjanjian konsesi, termasuk PPJT",
      "Peta dukungan pemerintah yang dapat diajukan beserta jalurnya",
      "Paket pembiayaan yang siap ditawarkan ke bank sampai penutupan finansial",
    ],
    costs: [
      { item: "Konsultasi awal", note: "custom — sesuai sektor, skala, dan tahap proyek Anda" },
      { item: "Studi kelayakan & model keuangan", note: "pos terpisah, menyesuaikan kedalaman kajian yang diminta penyandang dana" },
      { item: "Jasa drafting & negosiasi kontrak", note: "berdasarkan jumlah dokumen dan panjang negosiasinya" },
      { item: "Biaya resmi lelang/penawaran", note: "sesuai ketentuan lembaga penyelenggara" },
    ],
    legalBasis: [
      "PP No. 78 Tahun 2019 tentang Pelaksanaan KPBU dalam Penyediaan Infrastruktur",
      "UU No. 38 Tahun 2004 tentang Jalan dan PP No. 15 Tahun 2005 tentang Jalan Tol (BPJT/PPJT)",
      "UU No. 17 Tahun 2019 tentang Air Minum dan PP No. 122 Tahun 2015 (SPAM)",
      "UU No. 6 Tahun 2023 (Cipta Kerja) terkait fasilitasi investasi infrastruktur",
    ],
  },

  "sertifikasi-menara-telekomunikasi": {
    whoFor: [
      "Tower company dan penyedia infrastruktur telekomunikasi",
      "Operator dan ISP yang membangun BTS, fiber, dan jaringan akses",
      "Perusahaan yang menyewakan lahan atau gedung untuk infrastruktur telekomunikasi",
      "Investor yang mengakuisisi portofolio menara dan perlu memetakan kepatuhannya",
    ],
    deliverables: [
      "Persetujuan lokasi menara dari pemerintah daerah",
      "PBG dan dokumen bangunan yang sah per titik",
      "Sertifikat hasil uji keamanan struktur",
      "Dokumen berbagi pakai (sharing) dan perjanjian lahan yang tertata",
      "Peta kepatuhan armada (untuk beberapa titik sekaligus)",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 10 jt per titik — paket armada menyesuaikan" },
      { item: "Biaya resmi pemda", note: "persetujuan lokasi dan PBG sesuai tarif daerah" },
      { item: "Biaya uji keamanan struktur", note: "lembaga inspeksi — per titik, menyesuaikan tinggi menara" },
      { item: "Sewa lahan", note: "kesepakatan dengan pemilik — di luar biaya perizinan" },
    ],
    legalBasis: [
      "UU No. 36 Tahun 1999 tentang Telekomunikasi",
      "PP No. 52 Tahun 2000 tentang Penyelenggaraan Jaringan Telekomunikasi",
      "Permen Kominfo No. 2 Tahun 2023 tentang Penyelenggaraan Menara Telekomunikasi",
      "UU No. 28 Tahun 2002 tentang Bangunan dan PP No. 16 Tahun 2021",
    ],
  },

  "kawasan-industri": {
    whoFor: [
      "Pengembang yang membangun kawasan industri baru",
      "Pemilik lahan luas yang menawarkannya untuk pengembangan kawasan",
      "Pengelola kawasan lama yang memperbaiki status dan kepatuhan",
      "Perusahaan yang memilih lokasi pabrik dan menimbang masuk kawasan",
    ],
    deliverables: [
      "Izin usaha kawasan industri yang terbit dari Kemenperin",
      "Kajian KKPR dan persetujuan lingkungan kawasan",
      "Struktur pengelola dan sistem perizinan tenant yang siap jalan",
      "Peta fasilitas dan insentif yang dapat diajukan kawasan",
      "Roadmap pengembangan kawasan bertahap",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 20 jt — menyesuaikan luas dan kompleksitas kawasan" },
      { item: "Biaya resmi Kemenperin", note: "sesuai ketentuan pengesahan pengembangan kawasan industri" },
      { item: "Biaya persetujuan lingkungan", note: "kajian lingkungan sesuai skala kegiatan kawasan" },
      { item: "Biaya kajian teknis", note: "infrastruktur dasar dan rencana induk oleh tenaga ahli" },
    ],
    legalBasis: [
      "UU No. 3 Tahun 2014 tentang Perindustrian jo. UU No. 6 Tahun 2023",
      "PP No. 142 Tahun 2015 tentang Pengembangan Kawasan Industri",
      "Permenperin No. 7 Tahun 2015 tentang Tata Cara Pemberian Izin Usaha Kawasan Industri",
      "UU No. 6 Tahun 2023 terkait KKPR sebagai prasyarat kawasan",
    ],
  },

  "sengketa-tanah-penyelesaian": {
    whoFor: [
      "Pemilik tanah yang batasnya diperselisihkan atau tanahnya digarapi",
      "Pembeli yang menemukan masalah kepemilikan setelah transaksi",
      "Perusahaan dengan lahan operasional yang disengketakan",
      "Keluarga yang terlibat perselisihan warisan atas tanah",
    ],
    deliverables: [
      "Laporan penelusuran riwayat hak dan temuan lapangan",
      "Penilaian posisi hukum dan rekomendasi jalur penyelesaian",
      "Surat somasi, aduan administratif, dan dokumen mediasi",
      "Pendampingan di BPN dan forum mediasi",
      "Penguncian hasil: pendaftaran ulang batas, pembetulan, dan dokumen pencegahan",
    ],
    costs: [
      { item: "Jasa penelusuran & strategi", note: "mulai Rp 7,5 jt" },
      { item: "Biaya resmi BPN", note: "pengecekan data, keberatan, atau pembetulan sesuai temuan" },
      { item: "Biaya litigasi (bila diperlukan)", note: "dihitung terpisah sesuai kompleksitas gugatan" },
      { item: "Biaya survei ulang", note: "bila perlu penentuan ulang batas oleh surveyor berlisensi" },
    ],
    legalBasis: [
      "UU No. 5 Tahun 1960 (UUPA)",
      "PP No. 24 Tahun 1997 tentang Pendaftaran Tanah (keberatan & pembetulan)",
      "Peraturan Menteri Negara Agraria/Kepala BPN No. 3 Tahun 1997 tentang Pedoman Pelaksanaan PP 24/1997",
      "KUHPerdata tentang pembuktian dan peralihan hak",
    ],
  },

  "izin-tambang-iup": {
    whoFor: [
      "Perusahaan baru yang memasuki kegiatan pertambangan",
      "Pemegang IUP yang naik tahap dari eksplorasi ke operasi produksi",
      "Investor yang mengakuisisi perusahaan berizin dan perlu memeriksa kepatuhannya",
      "Pemegang izin lama yang kepatuhan periodiknya tertinggal",
    ],
    deliverables: [
      "IUP/IUPK yang terbit sesuai kewenangan",
      "Persetujuan lingkungan dan kesesuaian tata ruang",
      "RKAB yang disetujui dan sistem laporan berkala",
      "Rencana pascatambang dan dokumen kaidah teknik yang baik",
      "Kalender kepatuhan tambang tahunan",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 25 jt — menyesuaikan tahap dan komoditas" },
      { item: "Biaya resmi pemerintah", note: "penerbitan izin dan persetujuan RKAB" },
      { item: "Biaya persetujuan lingkungan", note: "kajian UKL-UPL/AMDAL sesuai skala kegiatan" },
      { item: "Biaya teknis", note: "survei/kajian geologi oleh tenaga ahli terkait" },
    ],
    legalBasis: [
      "UU No. 4 Tahun 2009 tentang Pertambangan Mineral dan Batubara jo. UU No. 3 Tahun 2020",
      "PP No. 96 Tahun 2021 tentang Pelaksanaan Kegiatan Usaha Pertambangan Minerba",
      "Permen ESDM No. 10 Tahun 2023 tentang RKAB dan Laporan Kegiatan Usaha Pertambangan",
      "Keputusan Menteri ESDM No. 1827 K/30/MEM/2018 tentang Kaidah Teknik Pertambangan yang Baik",
    ],
  },

  "izin-energi-terbarukan": {
    whoFor: [
      "Pemilik bangunan besar (pabrik, gudang, mal) yang memasang PLTS rooftop",
      "Pengusaha energi terbarukan komersial (PLTS, biogas, mini-hidro)",
      "Industri dengan target energi hijau dan agenda keberlanjutan",
      "Investor proyek EBT yang menilai kelayakan perizinan dan koneksi",
    ],
    deliverables: [
      "IUPTLU dan perizinan usaha yang tepat untuk skema terpilih",
      "Persetujuan koneksi ke jaringan PLN",
      "Perjanjian jual beli tenaga listrik yang ditata dan ditandatangani",
      "Peta insentif dan fasilitas yang dapat diajukan proyek",
      "Roadmap kepatuhan operasional dan perluasan kapasitas",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 15 jt — menyesuaikan skema dan skala proyek" },
      { item: "Biaya resmi izin & koneksi", note: "tarif pemerintah dan PLN sesuai skema" },
      { item: "Biaya studi kelayakan", note: "teknis-ekonomis oleh tim terkait bila diperlukan" },
      { item: "Biaya instalasi pembangkit", note: "vendor teknis — di luar lingkup perizinan" },
    ],
    legalBasis: [
      "UU No. 30 Tahun 2007 tentang Energi",
      "PP No. 112 Tahun 2022 tentang Percepatan Pengembangan Energi Baru Terbarukan",
      "PP No. 14 Tahun 2012 tentang Kegiatan Usaha Penyediaan Tenaga Listrik (IUPTLU)",
      "Permen ESDM No. 26 Tahun 2021 tentang PLTS untuk Kepentingan Sendiri",
    ],
  },
};
