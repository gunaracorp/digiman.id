import type { ServiceContent } from "./types";

/**
 * Konten editorial — kelompok DIGITAL GROWTH (4 layanan baru).
 * Dirancang untuk ekosistem jualan modern: WhatsApp Business, Google lokal,
 * marketplace, dan branding katalog — pelengkap sempurna kategori digital.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const digitalGrowthContent: ServiceContent[] = [
  {
    slug: "wa-business",
    tagline: "Ubah WhatsApp menjadi mesin jualan yang berjalan 24 jam.",
    heroSub:
      "WhatsApp Business API resmi, katalog produk digital, dan chatbot pemesanan — pelanggan chat, pesanan masuk, tanpa Anda memegang ponsel sepanjang hari.",
    timeline: "3–14 hari kerja hingga WABA aktif",
    intro: [
      "Setiap hari, pelanggan Indonesia bertanya dan membeli lewat WhatsApp — namun sebagian besar bisnis masih mengandalkan satu ponsel, satu nomor, dan satu orang yang melelahkan dirinya membalas chat dari subuh sampai tengah malam. WhatsApp Business API (WABA) mengubah pola itu: satu nomor bisnis resmi dengan verifikasi Meta, katalog produk yang bisa dilihat dan dipesan langsung dari chat, balasan otomatis untuk pertanyaan yang berulang, dan seluruh percakapan masuk ke sistem yang terukur.",
      "Kami mengurus seluruh rantai teknisnya: pendaftaran WABA ke Meta lewat Business Solution Provider resmi, verifikasi bisnis (badge hijau bila memenuhi syarat), penyusunan katalog produk — foto, nama, deskripsi, harga — sampai siap dikoneksikan, chatbot yang menjawab FAQ dan meneruskan calon pembeli panas ke sales, serta integrasi notifikasi pesanan ke CRM atau spreadsheet yang Anda pakai hari ini.",
      "Yang Anda dapat bukan sekadar \"WhatsApp kantor\" — melainkan infrastruktur jualan: tiap tanya harga dijawab dalam hitungan detik, tiap pesanan tercatat otomatis, tiap pelanggan lama bisa di-follow-up tanpa mengetik ulang. Bisnis kecil memakai ini untuk tampil sebesar kompetitornya yang punya tim CS sepuluh orang.",
    ],
    benefits: [
      { title: "Nomor resmi & terverifikasi", desc: "WABA terdaftar resmi ke Meta dengan nama bisnis & profil lengkap — bukan nomor pribadi yang mudah diblokir." },
      { title: "Katalog jualan sendiri", desc: "Produk & jasa tampil rapi di dalam chat — pelanggan lihat, tanya, dan pesan tanpa keluar dari WhatsApp." },
      { title: "Balasan secepat detik", desc: "Chatbot menjawab harga, stok, dan FAQ kapan pun ditanya — pelanggan panas langsung diteruskan ke sales." },
      { title: "Pesanan tercatat rapi", desc: "Setiap percakapan & pesanan masuk ke sistem — data penjualan tidak lagi tercecer di riwayat chat pribadi." },
      { title: "Broadcast yang taat aturan", desc: "Template pesan yang disetujui Meta untuk promo & follow-up — antrean jutaan chat pelanggan aman dari pemblokiran." },
    ],
    process: [
      { title: "Audit kebutuhan & perencanaan", desc: "Kami petakan alur pertanyaan-pesanan Anda dan rancang arsitektur: nomor, katalog, otomasi, integrasi." },
      { title: "Pendaftaran WABA & verifikasi", desc: "Registrasi ke Meta via BSP resmi, verifikasi bisnis, aktivasi nomor — semua berkas kami bawa." },
      { title: "Bangun katalog & chatbot", desc: "Produk dimasukkan, alur pemesanan dirancang, chatbot dilatih dari FAQ nyata bisnis Anda." },
      { title: "Integrasi & peluncuran", desc: "Koneksi ke CRM/spreadsheet, uji end-to-end bersama tim Anda, plus panduan penggunaan harian." },
    ],
    requirements: [
      "Nomor ponsel khusus bisnis yang belum terdaftar WhatsApp (bisa bantu migrasi)",
      "Email bisnis aktif & dokumen perusahaan (NIB/akta — kami pandu bila belum ada)",
      "Daftar produk/jasa + harga untuk katalog (foto memakai foto yang ada dulu juga bisa)",
      "Akses akun Meta Business bila sudah punya (belum punya pun kami buatkan)",
    ],
    faqs: [
      { q: "Apa beda WhatsApp Business biasa, Business App, dan Business API?", a: "WhatsApp Business biasa adalah aplikasi gratis untuk satu orang menjawab chat. WhatsApp Business App menambah profil bisnis & katalog sederhana — masih satu ponsel, satu orang. WhatsApp Business API (WABA) adalah versi infrastruktur: nomor bisa dipakai banyak staf bersamaan, chatbot menjawab otomatis, katalog lengkap, dan semua terhubung ke sistem Anda. Kalau volume chat sudah melelahkan tim atau pesanan tercecer, itulah waktunya WABA." },
      { q: "Nomor WhatsApp saya yang sekarang bisa dipakai?", a: "Bisa, dengan proses migrasi: nomor dipindahkan ke platform API (riwayat chat pribadi tidak terbawa, tapi bisnis jalan tanpa ganti nomor yang pelanggan sudah kenal). Bila Anda ingin nomor terpisah untuk bisnis — yang kami rekomendasikan agar skala mudah — kami bantu siapkan nomor baru dari awal." },
      { q: "Berapa biaya bulanan yang harus dianggarkan selain jasa setup?", a: "Tiga komponen: biaya platform BSP (bervariasi per penyedia, umumnya ratusan ribu per bulan), biaya percakapan Meta (gratis untuk chat masuk 24 jam; chat keluar/template promo ada tarif per percakapan — angka terbaru kami sampaikan saat konsultasi), dan opsional biaya CRM bila butuh. Kami sajikan simulasi biaya bulanan sesuai volume chat Anda sebelum Anda memutuskan — tanpa kejutan." },
    ],
    related: ["otomasi-ai", "branding-katalog", "website-ecommerce"],
  },
  {
    slug: "google-bisnisku",
    tagline: "Jadi pilihan pertama saat tetangga mencari usaha Anda di Google.",
    heroSub:
      "Google Business Profile teroptimasi penuh — tampil di Maps & hasil pencarian lokal, lengkap dengan foto, produk, ulasan, dan statistik yang bisa Anda baca.",
    timeline: "5–10 hari kerja hingga profil terverifikasi",
    intro: [
      "Ketika seseorang mengetik \"printing terdekat\" atau \"toko kue tasikmalaya\", Google menjawab dengan tiga hasil utama di peta — dan mayoritas orang hanya klik salah satu dari tiga itu. Google Business Profile (dulu Google Bisnisku) adalah pintu masuk ke posisi tersebut: gratis, berdampak langsung pada langkah pelanggan, dan sering disalahpahami sebagai \"cukup daftar saja\". Kenyataannya, profil yang dibiarkan kosong kalah tampil oleh profil kompetitor yang aktif dikelola.",
      "Kami mengoptimalkan seluruh sinyal yang Google pakai untuk mempercayai dan menampilkan profil Anda: kategori & atribut bisnis yang tepat, deskripsi berisi kata kunci lokal yang dicari orang, foto & produk yang diperbarui rutin, jam operasional yang akurat (termasuk jam libur nasional), sampai strategi ulasan — cara meminta pelanggan puas menulis review dan cara membalas review buruk tanpa merusak reputasi.",
      "Hasil yang bisa Anda ukur sendiri: berapa orang melihat profil, berapa yang mengklik telepon, meminta rute, atau membuka website Anda. Untuk bisnis lokal — klinik, restoran, bengkel, sekolah, toko — ini kanal pemasaran dengan pengembalian paling cepat karena menangkap orang yang saat itu juga sedang butuh.",
    ],
    benefits: [
      { title: "Tampil di 3 besar Maps", desc: "Profil teroptimasi bersaing di local pack tiga teratas — posisi yang diklik paling banyak di pencarian lokal." },
      { title: "Telepon & rute satu klik", desc: "Pelanggan langsung menelepon atau navigasi ke tempat Anda — tanpa harus membuka website dulu." },
      { title: "Kepercayaan dari ulasan", desc: "Rating bintang & balasan profesional menaikkan keputusan orang untuk datang — strategi review kami bagian layanan." },
      { title: "Produk & promo tampil", desc: "Foto produk, menu, atau penawaran bisa diperbarui kapan pun — etalase digital yang selalu segar." },
      { title: "Statistik nyata", desc: "Anda tahu berapa orang menemukan Anda, dari kata kunci apa, dan tindakan apa yang mereka ambil." },
    ],
    process: [
      { title: "Audit & riset kata lokal", desc: "Kami cek kondisi profil Anda & kata kunci lokal yang dicari — dasar strategi optimasi." },
      { title: "Pembuatan & verifikasi", desc: "Profil dibuat/diklaim, verifikasi via pos/kamera/telepon sesuai metode Google — kami dampingi penuh." },
      { title: "Optimasi penuh", desc: "Kategori, deskripsi, foto, produk, atribut, jam operasional — semua diisi benar dan menarik." },
      { title: "Sistem berkelanjutan", desc: "Template balasan review, jadwal update foto/post, dan laporan bulanan performa profil Anda." },
    ],
    requirements: [
      "Nama, alamat, dan nomor telepon bisnis yang konsisten (persis seperti papan nama toko)",
      "Foto aset: tampak depan, interior, produk/jasa (bila belum ada, kami bantu kurasi minimum)",
      "Jam operasional harian",
      "Akses email yang akan menjadi pemilik profil (kami pandu bila akun Google belum ada)",
    ],
    faqs: [
      { q: "Apakah bisnis online tanpa toko fisik bisa daftar Google Business?", a: "Bisa — Google menyediakan opsi Service Area Business: profil tampil dengan area layanan (mis. seluruh Tasikmalaya atau Jabodetabek) tanpa alamat toko yang dipublikasikan. Syaratnya bisnis tetap harus bisa diverifikasi keberadaannya. Kami bantu memilih konfigurasi yang tepat agar tidak ditolak saat verifikasi." },
      { q: "Berapa lama sampai profil saya muncul & mulai mendatangkan pelanggan?", a: "Verifikasi umumnya 3–7 hari kerja. Setelah itu, profil teroptimasi mulai muncul di pencarian lokal dalam hitungan hari; posisi di 3 besar Maps naik bertahap seiring aktivitas (foto, review, engagement) selama 4–12 minggu. Kami beri roadmap & target realistis sejak awal — bukan janji nomor satu instan." },
      { q: "Ada review negatif — bagaimana menanganinya?", a: "Jangan dihapus demi sembunyi — kelola dengan benar. Review menyalahi kebijakan Google kami bantu ajukan penghapusan; review sah tapi negatif kami bantu susun balasan profesional yang justru menaikkan kepercayaan calon pelanggan (orang membaca cara Anda membalas, bukan hanya bintangnya). Strategi meminta review dari pelanggan puas juga bagian layanan — sehingga rating naik secara alami." },
    ],
    related: ["website-ecommerce", "branding-katalog", "wa-business"],
  },
  {
    slug: "marketplace",
    tagline: "Toko resmi di Shopee, Tokopedia, Lazada & TikTok Shop — dari nol sampai pesanan masuk.",
    heroSub:
      "Setup toko marketplace lengkap: verifikasi toko resmi, listing produk SEO, etalase & promo, sampai persiapan live selling dan program affiliate.",
    timeline: "7–14 hari kerja per marketplace",
    intro: [
      "Marketplace adalah tempat orang Indonesia membeli — dan setiap platform punya aturan mainnya sendiri: algoritma pencarian Shopee berbeda dari Tokopedia, TikTok Shop menjual lewat video dan live, sementara Lazada kuat di kategori tertentu. Membuka toko itu mudah; membuat toko yang benar-benar jualan membutuhkan pemahaman atas algoritma, konten, dan promo masing-masing platform.",
      "Kami menyiapkan seluruh fondasi toko Anda: pendaftaran & verifikasi (termasuk toko resmi/Power Merchant bila produk Anda layak), riset kata kunci pencarian di tiap marketplace, judul & deskripsi produk yang SEO namun tetap enak dibaca manusia, foto & video produk sesuai standar platform, pengaturan varian-stok-harga yang bebas salah klik, sampai perencanaan promo — flash sale, voucher, gratis ongkir — yang tidak membuat margin Anda ludes.",
      "Untuk TikTok Shop, kami siapkan pula lapisan kontennya: strategi video pendek & live selling, penyiapan bahan konten, dan penghubungan ke program affiliate supaya kreator lain ikut menjual produk Anda. Toko yang kami bangun bukan etalase kosong — melainkan mesin jualan multi-kanal yang berjalan bersama WhatsApp Business dan website Anda sebagai satu ekosistem.",
    ],
    benefits: [
      { title: "Toko resmi & terpercaya", desc: "Badge toko resmi/Power Merchant menaikkan kepercayaan & konversi — syarat dokumennya kami urus." },
      { title: "Listing yang ditemukan", desc: "Judul & kata kunci hasil riset pencarian marketplace nyata — produk muncul saat orang mencari." },
      { title: "Promo yang menjaga margin", desc: "Strategi flash sale & voucher yang menguntungkan — naik volume tanpa jual rugi." },
      { title: "Multi-platform sekaligus", desc: "Shopee, Tokopedia, Lazada, TikTok Shop dikelola dengan strategi yang sesuai tiap algoritmanya." },
      { title: "Siap konten & affiliate", desc: "Bahan video/live selling dan koneksi affiliate — jangkauan melebar tanpa iklan besar." },
    ],
    process: [
      { title: "Riset produk & platform", desc: "Kami analisis kompetitor, permintaan pasar, dan pilih prioritas marketplace yang paling cocok." },
      { title: "Pendaftaran & verifikasi toko", desc: "Registrasi akun, dokumen usaha, pengajuan badge toko resmi — kami bawa sampai disetujui." },
      { title: "Listing & etalase", desc: "Produk diunggah lengkap: foto standar platform, deskripsi SEO, varian, harga, dan kategorisasi benar." },
      { title: "Peluncuran & optimasi", desc: "Promo pembuka, pengaturan pengiriman, pelatihan kelola pesanan — plus evaluasi performa minggu pertama." },
    ],
    requirements: [
      "KTP & NPWP pemilik usaha + dokumen NIB/akta (kami bantu buat bila belum ada)",
      "Rekening bisnis untuk pencairan dana",
      "Daftar produk: nama, harga jual, varian, dan berat/dimensi kemasan",
      "Foto produk yang ada (bila belum layak, layanan Branding & Konten Katalog kami lanjutan alami)",
    ],
    faqs: [
      { q: "Marketplace mana yang paling cocok untuk produk saya?", a: "Tergantung kategori & target: produk massal harga terjangkau biasanya kuat di Shopee/TikTok Shop, produk spesifik dengan pencarian jelas cocok Tokopedia/Lazada, produk lifestyle & fashion cepat naik lewat TikTok. Saat audit awal, kami analisis kompetitor & volume pencarian produk Anda per platform — lalu rekomendasikan urutan masuk yang paling hemat tenaga." },
      { q: "Saya belum punya badan usaha — bisa buka toko resmi?", a: "Toko reguler bisa dengan KTP & NPWP pribadi. Namun badge toko resmi/Power Merchant dan beberapa kategori (kosmetik, makanan, elektronik tertentu) mensyaratkan badan usaha — NIB sudah cukup untuk sebagian besar. Kalau Anda belum punya, layanan NIB & pendirian PT/CV kami bisa berjalan paralel: saat toko disiapkan, legalitasnya juga tuntas." },
      { q: "Apakah saya bisa kelola toko sendiri setelah setup?", a: "Itu tujuan kami. Serah terima mencakup pelatihan kelola pesanan, update stok, dan membaca statistik toko — plus panduan tertulis. Untuk operasional harian (balasan chat, packing, live), Anda atau tim Anda yang jalankan dengan sistem yang sudah benar; jika ingin kami yang kelola penuh, tersedia paket pengelolaan bulanan terpisah." },
    ],
    related: ["branding-katalog", "website-ecommerce", "wa-business"],
  },
  {
    slug: "branding-katalog",
    tagline: "Penampilan premium yang membuat orang percaya sebelum bertanya.",
    heroSub:
      "Logo, identitas visual, foto produk profesional, desain katalog & konten sosial media — satu bahasa desain yang konsisten di WhatsApp, marketplace, dan toko Anda.",
    timeline: "7–21 hari kerja tergantung cakupan",
    intro: [
      "Sebelum pelanggan bertanya harga, mereka sudah menilai: dari foto yang buram, logo yang berubah-ubah setiap minggu, dan katalog yang sama sekali tidak menyebutkan keunggulan produk. Penampilan bukan kosmetik — melainkan bahasa kepercayaan. Branding yang rapi membuat produk Anda terlihat sepadan dengan kompetitor yang jualan dua kali lipat harganya.",
      "Kami merancang identitas yang bekerja di semua kanal jualan Anda: logo & palet warna yang enak dilihat di layar kecil, foto produk dengan pencahayaan profesional (produk makanan, fashion, kosmetik — tiap kategori punya kaidahnya), desain katalog digital yang siap dipasang di Katalog WhatsApp Business, toko marketplace, dan website, plus template konten sosial media yang membuat tim Anda bisa posting rutin tanpa menyewa desainer tiap minggu.",
      "Hasil akhirnya satu paket aset yang Anda miliki penuh: file logo lengkap (versi warna, hitam, dan satu warna), foto terkurasi, katalog siap unggah, dan panduan sederhana cara memakai semuanya — supaya enam bulan ke depan tampilan Anda tetap konsisten, bukan kembali berantakan.",
    ],
    benefits: [
      { title: "Kesan premium instan", desc: "Foto & desain profesional menaikkan nilai produk di mata pelanggan — sebelum harga dibahas." },
      { title: "Satu bahasa visual", desc: "Logo, warna, dan gaya konsisten di WhatsApp, marketplace, sosmed — brand mudah dikenali." },
      { title: "Katalog siap pakai", desc: "Desain katalog produk siap unggah ke Katalog WhatsApp & marketplace — tinggal jualan." },
      { title: "Tim bisa mandiri", desc: "Template konten & panduan brand — posting rutin tidak lagi tergantung desainer." },
      { title: "Aset milik penuh", desc: "Seluruh file sumber & hak pakai menjadi milik Anda — tidak disandera vendor." },
    ],
    process: [
      { title: "Workshop brand", desc: "Kami dengarkan cerita usaha, target pembeli, dan karakter yang ingin ditampilkan — dasar arah desain." },
      { title: "Konsep & logo", desc: "Dua-tiga arah visual disodorkan, dipilih bersama, lalu disempurnakan sampai puas." },
      { title: "Produksi aset", desc: "Foto produk, desain katalog, dan template konten dibuat sesuai kebutuhan kanal Anda." },
      { title: "Serah terima & panduan", desc: "Seluruh file diserahkan rapi dengan panduan pakai — plus satu sesi konsultasi lanjutan gratis." },
    ],
    requirements: [
      "Cerita singkat usaha: produk utama, siapa pembelinya, siapa kompetitornya",
      "Produk fisik untuk difoto (atau daftar layanan untuk didesain)",
      "Referensi tampilan yang Anda suka (screenshot seadanya pun membantu)",
      "Logo lama bila ada (untuk dievaluasi: diperbaiki atau dirancang ulang)",
    ],
    faqs: [
      { q: "Logo lama saya masih layak dipakai atau harus ganti baru?", a: "Tidak selalu harus ganti — banyak logo lama tinggal disegarkan: dirapikan bentuknya, dipertegas ukurannya untuk layar ponsel, diseragamkan warnanya. Saat workshop awal kami evaluasi jujur: bila logo lama punya modal (dikenal pelanggan), kami segarkan; bila justru menghambat, kami rancang baru. Anda yang memutuskan, dengan alasan yang jelas." },
      { q: "Saya tidak punya alat foto & model — bagaimana produksi fotonya?", a: "Ada dua jalur sesuai anggaran: foto studio (produk dikirim ke studio mitra kami, hasil editan siap pakai) atau foto kurasi lapangan (fotografer datang ke lokasi Anda untuk produk besar/makanan). Untuk layanan atau produk digital, desain mockup profesional menggantikan foto. Biaya masing-masing tersedia transparan di penawaran." },
      { q: "Setelah branding jadi, apakah bisa dilanjutkan ke katalog WhatsApp & toko online?", a: "Justru itu desain paketnya: aset branding langsung dipasangkan ke layanan WhatsApp Business & Katalog (katalog produk digital), setup marketplace (foto & desain listing), dan website (identitas visual konsisten). Banyak klien mengambil paket gabungan ini — hasilnya ekosistem jualan yang tampil satu rumpun dari chat sampai checkout." },
    ],
    related: ["wa-business", "marketplace", "pendaftaran-merek"],
  },
];
