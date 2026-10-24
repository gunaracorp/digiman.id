import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — EKSPANSI GLOBAL (10 layanan baru).
 * Kantor perwakilan, entitas luar negeri, sertifikat asal, Incoterms,
 * kawasan berikat, transfer pricing, marketplace global, antidumping,
 * lartas komoditas, distributor brand asing.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const globalContent: ServiceContent[] = [
  {
    slug: "kantor-perwakilan-asing",
    tagline: "Hadir resmi di Indonesia dulu, berdiri sebagai perusahaan kemudian.",
    heroSub:
      "Kantor Perwakilan Perusahaan Asing (KP3A, KP2A, KPPA) — presensi sah perusahaan Anda di Indonesia untuk riset pasar, pengawasan jaringan, dan persiapan investasi, tanpa menyuntik modal PT PMA lebih dulu.",
    timeline: "2–4 minggu sampai kartu izin terbit",
    intro: [
      "Perusahaan asing yang belum siap mendirikan PT PMA tetapi perlu hadir resmi di Indonesia punya satu kendaraan yang dirancang khusus untuk itu: kantor perwakilan. Dasar hukumnya UU No. 25 Tahun 2007 tentang Penanaman Modal dan Peraturan BKPM No. 5 Tahun 2021, dengan bentuk yang dibedakan menurut fungsi dan kuota staf: KP3A (kantor perwakilan perusahaan asing, paling banyak tiga tenaga asing), KP2A (perwakilan yang menyiapkan pendirian PT PMA, dua tenaga asing), dan KPPA (perwakilan pedagang asing, satu tenaga asing). Kewenangannya terbatas pada kegiatan non-komersial: mengawasi dan mengelola perusahaan afiliasi, menyiapkan pendirian PT PMA, riset pasar, serta memperkenalkan produk. Persetujuannya diterbitkan oleh Kepala Badan (Kementerian Investasi/BKPM) melalui OSS-RBA, lengkap dengan kartu izin yang menjadi identitas resmi di mata bank, pemilik gedung, dan mitra.",
      "Kesalahan yang paling sering menjerat kantor perwakilan: menggunakannya seolah-olah perusahaan biasa. Kantor perwakilan dilarang melakukan kegiatan yang menghasilkan penghasilan di Indonesia — tidak boleh menandatangani kontrak penjualan, tidak boleh menagih, tidak boleh mengoperasikan transaksi dagang — dan pelanggarannya dapat berujung sanksi administratif sampai pencabutan. Jebakan kedua ada di dokumen awal: surat keterangan perwakilan induk dan surat penunjukan kepala perwakilan yang tidak sesuai format membuat pengajuan bolak-balik berkali-kali. Kewajiban berjalan juga sering diabaikan: rasio penempatan tenaga kerja Indonesia untuk setiap tenaga asing, serta perpanjangan izin yang harus dikejar sebelum masa berlakunya berakhir.",
      "Kami mengurus seluruh rantainya: pemetaan jenis perwakilan yang sesuai rencana staf dan fungsi Anda, penyusunan surat keterangan induk dan dokumen penunjukan sesuai format yang diterima BKPM, pengajuan melalui OSS-RBA sampai kartu izin terbit. Setelah itu kalender kepatuhan dikunci — perpanjangan dan kewajiban pelaporan masuk jadwal kami, bukan khawatir Anda. Ketika bisnis mulai membutuhkan penjualan langsung, jalur upgrade ke PT PMA kami siapkan sejak awal, karena menyiapkan pendirian PT PMA memang kewenangan sah kantor perwakilan. Satu alur, tidak ada langkah yang hilang di tengah.",
    ],
    benefits: [
      { title: "Presensi resmi tanpa modal besar", desc: "Perusahaan Anda hadir sah di Indonesia tanpa menyuntik modal investasi — kartu izin menjadi identitas di mata bank, mitra, dan pemilik gedung." },
      { title: "Cepat dan ringan", desc: "Proses jauh lebih singkat daripada mendirikan PT PMA — cocok untuk fase riset pasar dan pengujian komitmen bisnis." },
      { title: "Jalur menuju PT PMA terarah", desc: "Menyiapkan pendirian PT PMA adalah kewenangan sah perwakilan — transisi ke entitas komersial terukur dan mulus saat saatnya tiba." },
      { title: "Staf asing terpetakan", desc: "Kuota tenaga asing sesuai jenis (tiga, dua, atau satu) dan rasio tenaga kerja Indonesia ditetapkan sejak awal — tidak jalan di tempat saat KITAS diajukan." },
      { title: "Kepatuhan tidak tercecer", desc: "Perpanjangan izin dan kewajiban berjalan dikejar kalender kami — status tidak kedaluwarsa di saat paling dibutuhkan." },
    ],
    process: [
      { title: "Pemetaan fungsi dan jenis", desc: "Rencana kegiatan dan jumlah staf dipetakan — KP3A, KP2A, atau KPPA ditetapkan dengan rasio tenaga kerja Indonesia yang benar." },
      { title: "Dokumen induk dan penunjukan", desc: "Surat keterangan perwakilan induk, penunjukan kepala perwakilan, dan pernyataan disusun sesuai format yang diterima BKPM." },
      { title: "Pengajuan via OSS-RBA", desc: "Akun OSS, pengajuan persetujuan, dan komunikasi dengan Kementerian Investasi/BKPM kami bawa sampai pengesahan." },
      { title: "Kartu izin dan pasca terbit", desc: "Kartu izin diterima, kalender perpanjangan dikunci, dan jalur upgrade ke PT PMA disiapkan saat bisnis siap bertransaksi." },
    ],
    requirements: [
      "Dokumen legal perusahaan induk: akta pendirian dan dokumen korporasi asing (terjemahan tersumpah kami bantu)",
      "Surat keterangan dan rekomendasi dari perusahaan induk (disusun bersama kami sesuai format yang diterima BKPM)",
      "Data dan paspor kepala kantor perwakilan serta rencana staf asing sesuai jenis perwakilan",
      "Alamat kantor di Indonesia yang sah (gedung komersial atau virtual office — disiapkan bila belum ada)",
      "Rencana kegiatan perwakilan: riset pasar, pengawasan afiliasi, atau persiapan PT PMA",
    ],
    faqs: [
      { q: "Apakah kantor perwakilan boleh berjualan atau menerima pembayaran di Indonesia?", a: "Tidak — dan inilah batas yang paling sering dilanggar. Kewenangannya terbatas pada fungsi non-komersial: mengawasi afiliasi, riset pasar, memperkenalkan produk, dan menyiapkan pendirian PT PMA. Menandatangani kontrak penjualan atau menagih pembayaran berarti melampaui izin, dengan risiko sanksi administratif sampai pencabutan. Bila model bisnis sudah butuh berjualan, PT PMA adalah kendaraannya — kantor perwakilan adalah jembatannya." },
      { q: "Berapa biaya dan berapa lama prosesnya?", a: "Jasa pendampingan kami mulai Rp 5 juta, tertulis penuh di penawaran, terpisah dari biaya administratif yang umumnya ringan. Durasi realistis 2–4 minggu sejak dokumen induk lengkap. Keterlambatan paling sering terjadi bukan di BKPM, melainkan pada surat keterangan perwakilan induk yang formatnya salah — karena itu dokumen induk kami bimbing langsung dari negara asalnya." },
      { q: "Bisa berubah menjadi PT PMA nanti, atau harus mulai dari nol?", a: "Berlanjut, dan memang dirancang untuk itu. Ketika bisnis siap bertransaksi, PT PMA didirikan terpisah sementara kantor perwakilan dapat dipertahankan untuk fungsi pengawasan atau ditutup rapi. Riwayat kehadiran yang tertib justru memperkuat profil investasi Anda di mata BKPM dan mitra — perwakilan yang terkelola baik adalah bukti komitmen, bukan langkah terbuang." },
    ],
    related: ["pt-pma", "nib-oss", "kitas-investor", "virtual-office"],
  },
  {
    slug: "entitas-luar-negeri",
    tagline: "Struktur lintas negara yang dipahami investor, bukan sekadar nama yang terdengar besar.",
    heroSub:
      "Pendirian entitas di luar negeri — Singapura, Hong Kong, Dubai, Delaware — bersama mitra lokal terpercaya, lengkap dengan kepatuhan tahunan dan sinkronisasi pajak dengan PT Anda di Indonesia.",
    timeline: "2–6 minggu tergantung yurisdiksi",
    intro: [
      "Bisnis Indonesia yang tumbuh lintas batas hampir selalu berakhir di satu pertanyaan yang sama: di negara mana struktur penampungnya berdiri. Investor menyuntik dana lewat entitas Singapura, buyer Eropa meminta lawan transaksi yang bisa menangani VAT, kemitraan Timur Tengah berjalan lewat perusahaan free zone Dubai, dan startup dengan rencana pendanaan bertahap memakai Delaware C-Corp sebagai bahasa bersama para investor. Tiap yurisdiksi menawarkan kombinasi berbeda: Singapura dengan pajak korporasi 17% dan keringanan bagi perusahaan muda, Hong Kong dengan prinsip pajak teritorial, Dubai free zone dengan tarif 0% di wilayahnya (sementara income mainland dikenai 9% sejak 2023), dan Delaware LLC yang murah dirawat dengan perpajakan passthrough. Pilihan yang tepat ditentukan oleh fungsi entitas — investasi, penjualan, kekayaan intelektual, atau kemitraan — bukan oleh angka pajak di brosur.",
      "Kesalahan yang paling sering terjadi: entitas didirikan untuk mengikuti tren, lalu sisanya dilupakan. Kepatuhan tahunan — annual return, audit bila wajib, pembaruan registered agent dan lisensi — terlewat sampai entitas diberhentikan atau kewajiban menumpuk. Rekening bank menolak membuka akun bila dokumen dan kehadiran bisnis tidak meyakinkan, dan entitas kosong tanpa substansi justru menjadi titik sorot DJP di sisi Indonesia karena transaksi dengan PT dianggap transaksi pihak berelasi. Semua itu baru ketahuan di momen paling buruk: saat due diligence investor, saat dana harus dipindahkan, atau saat aset ingin dialihkan.",
      "Kami memulai dari pemetaan fungsi, bukan dari daftar negara. Perbandingan yurisdiksi disusun dengan biaya yang jujur — pendirian dan biaya tahunan sekaligus — lalu pendirian dijalankan bersama mitra lokal terpercaya: registered agent, sekretaris korporat, alamat terdaftar, sampai rekening bank terbuka. Kepatuhan tahunan masuk kalender, dan arus antara PT Indonesia dengan entitas luar didokumentasikan benar agar tidak menabrak aturan transfer pricing. Hasilnya satu struktur yang dipahami investor, diterima bank, dan aman di mata dua otoritas pajak.",
    ],
    benefits: [
      { title: "Yurisdiksi yang benar sejak awal", desc: "Fungsi entitas dipetakan lebih dulu — pilihan jatuh pada negara yang menjawab kebutuhan, bukan yang sedang ramai dibicarakan." },
      { title: "Biaya jujur dua arah", desc: "Pendirian dan biaya tahunan dihitung terbuka sejak penawaran — tidak ada kejutan renewal, agent, atau audit di tahun berikutnya." },
      { title: "Rekening bank terbuka", desc: "Dokumen korporasi dan profil substansi disiapkan meyakinkan — pengajuan bank tidak berhenti di hari pertama bisnis." },
      { title: "Dipahami investor dan buyer", desc: "Singapura, Delaware, dan Dubai adalah nama yang dikenali dana global — due diligence dan pendanaan berjalan lebih cepat." },
      { title: "Sinkron dengan PT Indonesia", desc: "Arus antar entitas didokumentasikan sesuai aturan transfer pricing — satu struktur, dua otoritas, tidak saling menyeret." },
    ],
    process: [
      { title: "Pemetaan fungsi dan yurisdiksi", desc: "Tujuan entitas dianalisis — investasi, penjualan, IP, atau kemitraan — dan perbandingan yurisdiksi dengan biaya total tahunan disusun." },
      { title: "Pendirian bersama mitra lokal", desc: "Pendaftaran entitas, dokumen konstitutif, registered agent, dan alamat terdaftar dituntaskan di yurisdiksi pilihan." },
      { title: "Rekening bank dan legalisasi", desc: "Apostille atau legalisasi dokumen dan pengajuan rekening korporasi didampingi sampai akun aktif." },
      { title: "Kepatuhan tahunan berjalan", desc: "Annual return, audit bila wajib, dan pembaruan lisensi masuk kalender — sinkron dengan kewajiban PT di Indonesia." },
    ],
    requirements: [
      "Nama yang direncanakan dan struktur pemegang saham (pribadi atau PT Indonesia — menentukan dokumen korporasi)",
      "Identitas paspor seluruh pemegang saham dan direktur",
      "Rencana bisnis singkat: fungsi entitas, target pasar, dan aliran dana",
      "Dokumen legal PT Indonesia bila menjadi pemegang saham (akta, NIB, laporan keuangan — untuk KYC bank)",
      "Preferensi yurisdiksi awal, atau biarkan kami merekomendasikan dari hasil pemetaan fungsi",
    ],
    faqs: [
      { q: "Berapa biaya total, dan apakah tahun berikutnya ada biaya lagi?", a: "Mulai Rp 25 juta untuk yurisdiksi standar seperti Singapura atau Hong Kong, tergantung kompleksitas struktur — mencakup jasa, biaya pemerintah, dan alamat terdaftar. Dan ya, setiap tahun ada kepatuhan: annual return, registered agent atau sekretaris, audit bila wajib, dan renewal lisensi free zone di Dubai. Biaya tahunan inilah yang sering dihilangkan dari brosur — kami tampilkan sejak awal, karena entitas yang murah didirikan tetapi mahal dirawat adalah kesalahan paling umum." },
      { q: "Yurisdiksi mana yang paling cocok untuk bisnis saya?", a: "Fungsinya yang menentukan, bukan mode. Mencari investor dan pendanaan berikutnya — Singapura atau Delaware C-Corp adalah bahasa yang dipahami venture capital. Menampung penjualan ekspor dan penagihan buyer global — Hong Kong atau Singapura. Kemitraan Timur Tengah, procurement, atau kebutuhan privasi dengan tarif 0% di free zone — Dubai. Kami memulai dari aliran uang Anda, lalu merekomendasikan satu yurisdiksi dengan perbandingan biaya total." },
      { q: "Apakah PT Indonesia saya boleh menjadi pemegang saham entitas luar negeri?", a: "Boleh, dan umum dipakai untuk struktur holding — tetapi ada konsekuensi yang harus dikelola, bukan diabaikan: pelaporan investasi ke luar negeri di sisi BKPM, perlakuan PPh atas dividen yang kembali ke Indonesia, dan transfer pricing untuk transaksi antar entitas. Semuanya bisa rapi bila disiapkan sejak pendirian, dan menjadi masalah bila disusun setelah otoritas bertanya. Kami menangani sinkronisasi dua arah itu bersama penasihat pajak Anda." },
    ],
    related: ["pt-pma", "kantor-perwakilan-asing", "transfer-pricing", "legalisasi-apostille"],
  },
  {
    slug: "sertifikat-asal",
    tagline: "Tarif nol persen tidak datang sendiri — ia dituntut lewat dokumen yang benar.",
    heroSub:
      "Certificate of Origin yang tepat untuk tiap FTA — Form D ASEAN, Form E ACFTA, AANZFTA, dan lainnya — membuka tarif preferensi hingga 0% untuk produk Anda di pelabuhan negara tujuan.",
    timeline: "1–3 hari kerja per dokumen setelah data lengkap",
    intro: [
      "Indonesia terikat dalam belasan perjanjian perdagangan — ATIGA di ASEAN (Form D), ACFTA dengan Tiongkok (Form E), AANZFTA dengan Australia dan Selandia Baru, AJCEP dengan Jepang, IK-CEPA dengan Korea, IA-CEPA dengan Australia, sampai RCEP — dan buahnya nyata di ujung pelabuhan tujuan: bea masuk yang bisa turun hingga 0% untuk produk yang memenuhi kriteria asal. Kuncinya satu dokumen: Sertifikat Asal Barang (Certificate of Origin) yang diterbitkan lembaga pemenerbit resmi seperti Ditjen PEN Kemendag atau KADIN. Syaratnya ditentukan kriteria asal tiap FTA: wholly obtained untuk barang yang seluruhnya berasal dari negara anggota, RVC (regional value content) yang umumnya menuntut porsi nilai tambah regional sekitar 40%, atau CTC (change in tariff classification) untuk produk yang kelas tarifnya berubah lewat pengolahan. Penerbitannya kini berjalan elektronik — e-Form D melalui Indonesia National Single Window.",
      "Kesalahan yang paling mahal: memilih form karena kebiasaan, bukan karena perhitungan. Eksportir berpegang pada Form D yang terkenal, padahal FTA lain mungkin memberi tarif lebih rendah untuk HS code produknya — preferensi terbaik tidak pernah dipakai. Kesalahan kedua: bill of materials tidak pernah dianalisis, sehingga bahan impor dari negara non-anggota diam-diam menurunkan RVC di bawah ambang atau kriteria CTC gagal tercapai — dan dokumen yang terbit pun rapuh saat diverifikasi. Kesalahan ketiga: soal waktu — dokumen disiapkan setelah kontainer berlayar, buyer menanggung tarif penuh, dan di pengiriman berikutnya mencari pemasok lain yang dokumennya beres.",
      "Kami bekerja dari data produk Anda, bukan dari kebiasaan pasar. FTA yang mengikat Indonesia dengan negara tujuan dipetakan, tarif preferensi per HS code dihitung dan dibandingkan, lalu BOM dianalisis untuk menetapkan kriteria asal yang benar. Form paling menguntungkan diajukan ke pemenerbit resmi, diterbitkan elektronik, dan dicek konsistensinya dengan invoice, bill of lading, dan packing list. Hasilnya bukan sekadar dokumen — melainkan posisi harga yang kompetitif yang bisa Anda pertahankan pengiriman demi pengiriman.",
    ],
    benefits: [
      { title: "Tarif preferensi dimanfaatkan penuh", desc: "Produk yang memenuhi kriteria masuk dengan tarif preferensi hingga 0% — marjin tidak dimakan bea masuk di pelabuhan tujuan." },
      { title: "Form terbaik per produk", desc: "FTA dengan tarif terendah untuk HS code Anda yang dipilih — bukan form yang paling dikenal saja." },
      { title: "BOM dianalisis benar", desc: "Dampak bahan impor ke RVC dan CTC dihitung sejak awal — dokumen tidak runtuh saat diverifikasi buyer." },
      { title: "Dokumen konsisten satu rantai", desc: "Sertifikat asal, invoice, dan bill of lading saling menguatkan — pemeriksaan bea cukai negara tujuan berjalan mulus." },
      { title: "Elektronik dan terarsip", desc: "e-Form D melalui INSW dengan arsip digital — riwayat tertata untuk audit dan pengajuan ulang." },
    ],
    process: [
      { title: "Pemetaan FTA dan tarif", desc: "FTA yang mengikat Indonesia dengan negara tujuan diidentifikasi — tarif preferensi per HS code dihitung dan dibandingkan." },
      { title: "Analisis BOM dan kriteria asal", desc: "Bill of materials diperiksa — RVC dihitung, CTC diverifikasi, dan status asal produk ditetapkan dengan bukti." },
      { title: "Pemilihan form dan pengajuan", desc: "Form paling menguntungkan diajukan ke pemenerbit resmi (Ditjen PEN atau KADIN) sampai terbit." },
      { title: "Digitalisasi dan konsistensi", desc: "e-Form D terbit via INSW — kesesuaian dengan dokumen ekspor lain diperiksa sebelum kontainer berlayar." },
    ],
    requirements: [
      "NIB aktif dan API (bila belum ada, kami urus melalui layanan terpisah)",
      "Data produk dan HS code (kami bantu penetapannya bila ragu)",
      "Bill of materials: daftar bahan, asalnya (lokal, impor, atau negara anggota), dan nilainya",
      "Proforma invoice dan data pengiriman: buyer, negara tujuan, jadwal muat",
      "Bila ekspor pertama kali: data perusahaan untuk registrasi eksportir di pemenerbit",
    ],
    faqs: [
      { q: "Berapa biaya dan lama penerbitan sertifikat asal?", a: "Jasa pendampingan mulai Rp 750 ribu per dokumen, ditambah biaya resmi pemenerbit yang umumnya ratusan ribu rupiah per SKA tergantung jenis formnya. Durasi realistis 1–3 hari kerja setelah BOM dan invoice lengkap, dan penerbitan elektronik e-Form D memangkas lagi waktunya. Yang menentukan kecepatan bukan antrean pemenerbit, melainkan kelengkapan BOM dan kepastian kriteria asal — itulah yang kami rapikan lebih dulu." },
      { q: "Produk saya memakai bahan impor dari luar negara anggota — masih bisa dapat preferensi?", a: "Sering kali bisa, tetapi harus dihitung, bukan diasumsikan. Kriteria RVC menghitung porsi nilai tambah regional: bahan impor memang menguranginya, namun selama ambang tercapai — umumnya 40% tergantung FTA — atau kelas tarifnya berubah lewat pengolahan (CTC), produk tetap berhak. Analisis BOM kami menghasilkan jawaban tegas: layak atau tidak, di form mana, dengan dokumentasi yang harus dijaga. Kelayakan itu bisa dipanggil audit di pelabuhan tujuan, jadi bukti harus tertata sejak awal." },
      { q: "Apa risikonya bila sertifikat asal ternyata salah?", a: "Konsekuensinya menimpa buyer Anda lebih dulu: preferensi ditolak, tarif penuh dibayar, dan di banyak negara penyalahgunaan preferensi memicu pemeriksaan pasca-cukai sampai penahanan barang. Untuk eksportir, kerugian terbesar sering berupa reputasi — satu dokumen yang gagal verifikasi bisa mengakhiri relasi dengan buyer. Karena itu kami hanya menyusun dokumen yang didukung BOM dan data nyata: dokumen yang benar sejak awal jauh lebih murah daripada yang tertangkap kemudian." },
    ],
    related: ["api-bea-cukai", "ekspor-marketplace-global", "eudr-komoditas", "inkoterm-kontrak-ekspor"],
  },
  {
    slug: "inkoterm-kontrak-ekspor",
    tagline: "Siapa membayar apa dari pabrik sampai pelabuhan tujuan — jangan disiapkan saat kapal sudah berlayar.",
    heroSub:
      "Pemilihan Incoterms 2020, klausul risiko, dan metode pembayaran (L/C, T/T, DP) yang menyeimbangkan nilai kontrak dengan risiko yang Anda sanggup — dituangkan dalam kontrak ekspor yang tegas.",
    timeline: "1–2 minggu per kontrak",
    intro: [
      "Setiap pengiriman ekspor membawa dua pertanyaan yang sering dijawab asal: sampai titik mana risiko menjadi milik penjual, dan siapa membayar apa di sepanjang perjalanan. ICC Incoterms 2020 menjawabnya dengan sebelas istilah: EXW menyerahkan hampir semuanya kepada pembeli, FOB memindahkan risiko saat barang melewati pagar kapal di pelabuhan asal, CIF menambah kewajiban ongkos angkut dan asuransi ke pelabuhan tujuan, sementara DDP menanggungkan hampir semuanya kepada penjual sampai pintu pembeli. Pilihan ini bukan soal istilah yang enak dibaca — ia menentukan siapa mengurus asuransi, kapan barang dan risikonya berpindah, dan siapa berdiri di depan bea cukai dua negara. Kontrak ekspor yang baik menuliskannya dengan tegas, lengkap dengan metode pembayaran yang mengikutinya.",
      "Kesalahan kontrak yang paling mahal biasanya sederhana bentuknya. Menawarkan DDP tanpa memahami bea masuk dan pajak negara tujuan berarti menanggung biaya yang tidak pernah masuk kalkulasi harga. Kontrak tanpa klausul force majeure dan tanpa forum penyelesaian sengketa menyerahkan nasib Anda ke pengadilan negara pembeli bila hubungan memburuk. Metode pembayaran yang salah melukai dua arah: open account untuk buyer baru tanpa jaminan adalah kredit gratis yang risikonya milik Anda, sedangkan L/C yang dianggap otomatis aman bisa tertunda karena satu diskrepansi dokumen — dan saat itu terjadi, barang sudah berlayar.",
      "Kami menghitung dulu, baru menulis. Tiap opsi Incoterms dites terhadap biaya aktual Anda — pengangkutan dalam negeri, freight, asuransi, bea dua negara — sehingga term yang direkomendasikan beralasan angka, bukan kebiasaan. Kontrak disusun atau ditinjau dengan klausul yang menentukan: harga, jadwal dan titik serah, pembayaran, force majeure, keterlambatan, dan arbitrase. Dokumen pelabuhan — bill of lading, invoice, packing list — diperiksa konsistensinya sebelum berangkat, karena diskrepansi yang murah dibetulkan di darat menjadi mahal di meja bank.",
    ],
    benefits: [
      { title: "Incoterms yang beralasan angka", desc: "Term dipilih dari kalkulasi biaya aktual dan kapasitas risiko Anda — bukan warisan kebiasaan penawaran sebelumnya." },
      { title: "Pembayaran sesuai profil buyer", desc: "L/C, T/T, atau DP dipilih menurut profil pembeli — risiko wanprestasi dan diskrepansi dikelola, bukan diabaikan." },
      { title: "Klausul krisis tersedia sejak awal", desc: "Force majeure, keterlambatan, dan pembatalan dituangkan tegas — tidak ada perdebatan panjang saat masalah datang." },
      { title: "Sengketa punya rumah", desc: "Forum arbitrase netral (BANI, SIAC, atau ICC) dipilih di kontrak — tidak menyerahkan nasib ke pengadilan negara pembeli." },
      { title: "Dokumen pelabuhan rapi", desc: "Bill of lading, invoice, dan packing list konsisten dengan kontrak — penahanan dan diskrepansi diminimalkan." },
    ],
    process: [
      { title: "Peta risiko dan biaya", desc: "Tiap Incoterms dihitung terhadap biaya aktual Anda: inland, freight, asuransi, dan bea dua negara — opsi terbaik direkomendasikan dengan alasan angka." },
      { title: "Penyusunan atau review kontrak", desc: "Kontrak ekspor ditulis atau ditinjau — klausul harga, pengiriman, pembayaran, force majeure, dan arbitrase dibuat tegas." },
      { title: "Struktur pembayaran", desc: "Metode dan jadwal pembayaran disesuaikan profil buyer; teks L/C diperiksa sebelum Anda menandatanganinya." },
      { title: "Review dokumen kirim", desc: "Bill of lading, invoice, dan packing list dicek konsistensinya sebelum berlayar — temuan diperbaiki sebelum menjadi diskrepansi." },
    ],
    requirements: [
      "Draft kontrak atau PO dari buyer (bila ada), atau template perusahaan Anda",
      "Data produk, HS code, dan negara tujuan pengiriman",
      "Informasi logistik: pelabuhan asal-tujuan, mode pengiriman (LCL/FCL/udara), dan penawaran freight dari forwarder bila ada",
      "Profil buyer baru: reputasi, sejarah transaksi, dan permintaan metode pembayarannya",
      "Dokumen ekspor sebelumnya yang pernah bermasalah, bila ada",
    ],
    faqs: [
      { q: "Kapan sebaiknya pakai FOB, dan kapan CIF lebih menguntungkan?", a: "FOB nyaman bila Anda tidak ingin mengurus freight internasional — risiko pindah saat barang di atas kapal di pelabuhan asal, biaya setelahnya milik pembeli. CIF memberi kendali asuransi dan angkutan (sering lebih murah lewat forwarder lokal yang tahu harga), dengan tambahan tanggung jawab sampai pelabuhan tujuan. EXW terlihat paling ringan tetapi jebakan klasik: buyer kesulitan memproses ekspor dari Indonesia, pengiriman tersendat, dan ujungnya nama Anda yang dipanggil. Prinsip kami: pertahankan kendali dokumen ekspor di tangan Anda — biasanya FCA atau FOB untuk memulai, dan CIF saat volume sudah stabil." },
      { q: "L/C katanya aman — kenapa banyak eksportir tetap tertahan pembayarannya?", a: "L/C hanya seaman dokumennya: bank membayar bila dokumen persis sesuai syarat, dan satu diskrepansi kecil bisa menunda pembayaran sampai buyer menyetujui — dengan posisi Anda yang sudah lemah karena barang berlayar. Kuncinya dua: periksa teks L/C sebelum produksi dimulai agar syarat yang mustahil ditolak lebih dulu, dan pastikan seluruh dokumen konsisten sebelum diserahkan ke bank. Keduanya pekerjaan kami, dan murah dibanding nilai satu pengiriman yang menggantung." },
      { q: "Buyer meminta open account 60 hari — aman atau tidak?", a: "Tergantung seberapa banyak Anda tahu tentang buyer dan seberapa besar nilai kontraknya. Open account adalah kredit tanpa bunga ke pembeli: risiko wanprestasi sepenuhnya milik Anda. Alternatif yang menyeimbangkan: T/T bertahap dengan deposit, credit insurance untuk buyer terverifikasi, atau L/C untuk nilai besar. Bila buyer menolak semua opsi aman sejak transaksi pertama, pola itu sendiri adalah data — kami bantu menilai profilnya dan menyusun klausul yang melindungi Anda tanpa mematikan negosiasi." },
    ],
    related: ["api-bea-cukai", "sertifikat-asal", "legal-drafting", "kawasan-berikat"],
  },
  {
    slug: "kawasan-berikat",
    tagline: "Barang masuk untuk diolah, keluar untuk dunia — bea masuk menunggu di luar pagar.",
    heroSub:
      "Status Kawasan Berikat atau KITE — bahan impor untuk produksi ekspor masuk tanpa bea masuk, dengan pencatatan dan pelaporan kepabeanan yang tertib sejak hari pertama.",
    timeline: "KITE 1–2 bulan · Status KB 2–4 bulan",
    intro: [
      "Pabrik ekspor dengan bahan baku impor yang besar membayar bea masuk dua kali bila tidak punya fasilitas kepabeanan: sekali saat bahan masuk, lalu lagi sebagai beban yang tertanam di harga produknya. Kawasan Berikat menyelesaikan itu: barang dari luar negeri masuk tanpa dibebani bea masuk dan pajak-pajak imurnya, diolah dan dikombinasikan dengan bahan lokal, lalu diekspor — bea hanya ditagih bila produk menyimpang ke pasar dalam negeri. Dasar hukumnya UU No. 17 Tahun 2006 tentang Kepabeanan sebagaimana diubah UU Cipta Kerja dan PP No. 32 Tahun 2009, dengan dua bentuk utama: Kawasan Berikat (perusahaan berdiri sendiri dengan komitmen ekspor) dan Kawasan Berikat Terintegrasi (rantai antar perusahaan berikat). Untuk pabrik yang sudah berjalan di lokasi mana pun dan tidak perlu pindah, tersedia KITE — Kawasan Berikat di Luar Kawasan Berikat — dengan mekanisme serupa dan komitmen mengekspor hasil olahan.",
      "Fasilitas ini bukan hadiah tanpa syarat. Pemegang status wajib menjaga pencatatan persediaan barang asing dan hasil olahan yang akurat, menyusun laporan berkala kepabeanan, dan siap diperiksa fisik oleh bea cukai — selisih barang di gudang adalah temuan yang ditagih. Kesalahan klasiknya: status diajukan lebih dulu, sistem pencatatan dibangun kemudian — hasilnya temuan di pemeriksaan pertama, fasilitas ditangguhkan sampai dicabut, dan selisih bea masuk pulang ke kantor Anda. Jebakan kedua: struktur produksi tidak dipetakan, sehingga bahan lokal dan asing tidak tercatat terpisah dan penjualan lokal bercampur dengan ekspor dalam satu arsip.",
      "Kami menilai kelayakan dulu, sebelum angka berkomitmen. Proyeksi ekspor, struktur bahan, dan lokasi dianalisis untuk memilih skema yang paling ekonomis — KB, KB Terintegrasi, atau KITE. Pengajuan dijalankan bersamaan dengan penyiapan sistem pencatatan dan dokumen kepabeanan, sehingga pemeriksaan fisik tidak menemukan kejutan. Setelah status terbit, pelaporan berkala dan pendampingan pemeriksaan berjalan — karena fasilitas yang terbit lalu tersandung pelaporan sama saja dengan tidak terbit.",
    ],
    benefits: [
      { title: "Bea masuk bahan impor tak tertagih", desc: "Bahan untuk diolah dan diekspor masuk tanpa bea masuk — struktur harga ekspor kembali kompetitif." },
      { title: "Arus kas produksi sehat", desc: "PPN dan PPh impor tidak dibayar di depan — modal kerja tidak tertahan di kas negara terlebih dahulu." },
      { title: "Pasar lokal tetap terbuka", desc: "Kelebihan produksi boleh dijual dalam negeri lewat mekanisme PIBK — fleksibilitas tanpa kehilangan status." },
      { title: "Pemeriksaan tanpa kejutan", desc: "Sistem pencatatan disiapkan paralel dengan pengajuan — pemeriksaan fisik bea cukai menemukan arsip yang rapi, bukan selisih." },
      { title: "Pelaporan berjalan sendiri", desc: "Laporan berkala kepabeanan dikerjakan tepat waktu — fasilitas tidak ditangguhkan karena urusan administrasi." },
    ],
    process: [
      { title: "Kajian kelayakan dan skema", desc: "Proyeksi ekspor, struktur bahan, dan lokasi dianalisis — KB, KB Terintegrasi, atau KITE dipilih yang paling ekonomis." },
      { title: "Sistem pencatatan dan dokumen", desc: "Tata kelola persediaan barang asing dan hasil olahan disiapkan bersama dokumen pengajuan." },
      { title: "Pengajuan status", desc: "Pengajuan ke Ditjen Bea Cukai dijalankan — verifikasi dan peninjauan lokasi didampingi sampai penetapan." },
      { title: "Operasional dan pelaporan", desc: "Penyerapan fasilitas dipantau, laporan berkala dikerjakan tepat waktu, dan pemeriksaan didampingi." },
    ],
    requirements: [
      "NIB aktif dan API sesuai kegiatan usaha",
      "Proyeksi ekspor dan data bahan: rasio bahan impor terhadap lokal, nilai, dan rencana produksi",
      "Dokumen lokasi usaha: milik sendiri atau sewa (peninjauan fisik DJBC dilakukan)",
      "Struktur organisasi dan penanggung jawab kepabeanan",
      "Sistem pembukuan atau inventory yang sudah ada (kami periksa kesiapannya)",
    ],
    faqs: [
      { q: "Apa beda KB, KB Terintegrasi, dan KITE — mana yang cocok untuk saya?", a: "Sederhananya: Kawasan Berikat adalah perusahaan dengan fasilitas penuh, biasanya dibangun untuk produksi yang hampir seluruhnya diekspor. KB Terintegrasi menghubungkan dua perusahaan berikat sebagai satu rantai — hasil yang satu menjadi bahan yang lain. KITE dirancang untuk pabrik yang sudah berdiri di lokasi mana pun tanpa perlu pindah: bahan impor untuk produksi ekspor menikmati pembebasan dengan komitmen mengekspor hasil olahannya. Pabrik yang berjalan dan sebagian menjual lokal biasanya mulai dari KITE; pabrik baru untuk ekspor penuh jatuh pada KB." },
      { q: "Kalau sebagian produk dijual di dalam negeri, apakah status hangus?", a: "Tidak hangus — asal lewat mekanisme yang benar: penjualan ke pasar dalam negeri dikenai PIBK atas bea masuk, PPN, dan PPh impor dari bahan asing yang tertanam, lalu dilaporkan sebagai pemanfaatan fasilitas yang sah. Yang membahayakan bukan penjualannya, melainkan penjualan tanpa mekanisme itu: saat pencocokan persediaan, selisih barang menjadi temuan, bea ditagih, dan fasilitas bisa ditangguhkan sampai dicabut. Sistem pencatatan yang benar sejak awal membuat fleksibilitas ini aman dipakai kapan pun dibutuhkan." },
      { q: "Berapa biaya dan lamanya, dan setelah terbit ada kewajiban apa?", a: "Jasa pendampingan status KB mulai Rp 15 juta dan KITE lebih ringan — durasi realistis 2–4 bulan untuk KB dan 1–2 bulan untuk KITE, dengan kesiapan dokumen dan jadwal peninjauan DJBC sebagai penentu. Setelah terbit, kewajiban berjalan: pencatatan persediaan yang akurat, laporan berkala kepabeanan, dan kesiapan menghadapi pemeriksaan fisik berkala. Kami menawarkan pengelolaan pelaporannya juga — status yang terbit lalu tersandung pelaporan sama saja dengan tidak terbit." },
    ],
    related: ["api-bea-cukai", "izin-distribusi", "kawasan-industri", "inkoterm-kontrak-ekspor"],
  },
  {
    slug: "transfer-pricing",
    tagline: "Harga yang Anda sepakati sendiri bisa dinilai ulang negara — siapkan pembelaannya sebelum dipanggil.",
    heroSub:
      "Dokumen Transfer Pricing sesuai PMK 172/2023 — bukti bahwa harga transaksi antar pihak berelasi Anda memenuhi prinsip kewajaran, disusun tepat waktu sebelum pemeriksaan DJP datang.",
    timeline: "3–6 minggu sesuai jumlah transaksi dan pembanding",
    intro: [
      "Setiap kali PT Anda bertransaksi dengan afiliasinya — membeli bahan dari induk di Singapura, membayar royalti merek ke grup, menerima pinjaman antar entitas, memakai jasa manajemen — harga itu wajib memenuhi prinsip kewajaran (arm's length principle): seolah-olah dilakukan pihak yang tidak berelasi. Dasar hukumnya UU PPh Pasal 18 ayat (4) yang memberi DJP kewenangan menilai ulang, dan teknisnya kini diatur PMK No. 172/PMK.03/2023 yang menggantikan PMK 213/2016. Ambangnya tegas: transaksi kotor dengan pihak berelasi di atas Rp 10 miliar per jenis wajib disertai dokumentasi transfer pricing yang lengkap, paling lambat 4 bulan setelah akhir tahun pajak. Di antara Rp 4–10 miliar cukup menyusun indikator kewajaran, dan di bawahnya dibebaskan dari kewajiban dokumen — tetapi transaksinya sendiri tetap harus wajar.",
      "Tanpa dokumentasi yang benar, pemeriksaan pajak berubah menjadi negosiasi satu arah: DJP menilai ulang harga, mengkoreksi penghasilan, dan sanksi berupa bunga per bulan mengikuti pokoknya. Yang paling sering salah bukan niatnya, melainkan timing dan metodologinya: TP Doc disusun terburu-buru saat pemeriksaan dimulai — tanggal pembuatannya kelihatan, isinya tidak konsisten dengan laporan keuangan yang sudah terbit. Pembanding dipilih asal mirip tanpa analisis yang benar, dan transaksi yang dianggap kecil seperti jasa antar afiliasi diabaikan — padahal justru jenis itu yang paling sering dikoreksi. Fiskal Notable Transactions yang tidak selaras dengan SPT menambah lubang lain untuk digali pemeriksa.",
      "Kami menyusunnya dari data nyata perusahaan, bukan dari template. Seluruh transaksi berelasi dipetakan dan diukur terhadap ambang per jenis, analisis fungsi-risiko-aset menetapkan di mana laba wajar seharusnya berada, dan pembanding dicari serta dianalisis dengan metodologi yang terdokumentasi. TP Doc disusun sesuai struktur PMK 172/2023 — Master File dan Local File bila berlaku — lalu diperbarui tiap tahun mengikuti realisasi. Dan bila surat pemeriksaan datang, pendampingan hingga tanggapan tertulis berjalan bersama Anda.",
    ],
    benefits: [
      { title: "Koreksi raksasa dicegah", desc: "Harga antar afiliasi terbukti wajar dengan metode yang diakui — dasar penilaian ulang DJP hilang sejak awal." },
      { title: "Tenggat 4 bulan tidak terlewat", desc: "Dokumen selesai sebelum batas waktu tahunan — kewajiban formal tidak menjadi temuan pertama pemeriksa." },
      { title: "Benchmark yang benar", desc: "Pembanding dipilih dengan metodologi dan rentang kewajaran yang terdokumentasi — bukan tabel asal mirip." },
      { title: "Konsisten dengan laporan keuangan", desc: "Dokumen disusun dari data nyata perusahaan — tidak goyah saat dibedah pemeriksa." },
      { title: "Pemeriksaan tidak sendirian", desc: "Saat surat pemeriksaan datang, pembelaan metode dan tanggapan tertulis disiapkan bersama Anda." },
    ],
    process: [
      { title: "Pemetaan transaksi berelasi", desc: "Seluruh aliran dengan afiliasi diidentifikasi dan diukur — ambang Rp 10 M dan Rp 4 M per jenis transaksi ditetapkan." },
      { title: "Analisis fungsi-risiko-aset", desc: "Peran tiap entitas dipetakan — fungsi, risiko, dan asetnya menentukan letak laba yang wajar." },
      { title: "Benchmarking dan penyusunan", desc: "Pembanding dicari dan dianalisis, TP Doc disusun sesuai struktur PMK 172/2023 lalu diulas bersama Anda." },
      { title: "Pemutakhiran dan pemeriksaan", desc: "Dokumen diperbarui tiap tahun, Fiskal Notable Transactions diselaraskan dengan SPT, dan pemeriksaan DJP didampingi bila datang." },
    ],
    requirements: [
      "Daftar entitas terafiliasi dan persentase kepemilikan, langsung maupun tidak langsung",
      "Rincian transaksi berelasi tahun berjalan dan sebelumnya, bernilai per jenis transaksi",
      "Laporan keuangan (audited atau belum) yang relevan",
      "Kontrak atau perjanjian antar afiliasi: distribusi, jasa, lisensi, pinjaman — bila tertulis",
      "TP Doc tahun sebelumnya, bila ada — untuk kelanjutan dan konsistensi",
    ],
    faqs: [
      { q: "Transaksi berelasi saya di bawah Rp 10 miliar — apakah benar bebas dari TP Doc?", a: "Ambangnya dihitung per jenis transaksi: di atas Rp 10 miliar wajib dokumen lengkap, Rp 4–10 miliar cukup indikator kewajaran, dan di bawah Rp 4 miliar dibebaskan dari kewajiban dokumen. Tetapi ada dua catatan: bebas dari dokumen bukan bebas dari prinsip — DJP tetap berhak menilai kewajaran harga dan mengoreksi bila tidak wajar. Banyak perusahaan juga salah menghitung karena merasa aman dari total gabungan, padahal satu jenis transaksinya melewati batas. Kami menghitung posisi Anda dari data nyata, bukan perkiraan." },
      { q: "Berapa biaya penyusunannya, dan apa yang menentukan harganya?", a: "Mulai Rp 12 juta untuk struktur sederhana dengan satu-dua jenis transaksi dan pembanding yang mudah ditemukan. Biaya naik seiring jumlah jenis transaksi, kompleksitas fungsi antar entitas, dan usaha benchmarking yang dibutuhkan — grup dengan lisensi, pinjaman, dan distribusi bersamaan menuntut analisis lebih berat. Bandingkan dengan risikonya: koreksi transfer pricing dihitung dari selisih harga dikali volume transaksi, ditambah bunga per bulan. Satu kasus koreksi sering melebihi biaya dokumen berkali-kali lipat." },
      { q: "TP Doc dibuat saat pemeriksaan datang bisa tidak?", a: "Secara teknis bisa dibuat kapan saja, tetapi secara strategis itu keputusan termahal. PMK 172/2023 menetapkan tenggat 4 bulan setelah akhir tahun pajak, dan dokumen yang lahir saat pemeriksaan jelas jejaknya — kapan disusun dan dari mana isinya mudah dipertanyakan. Dokumen darurat juga sering tidak konsisten dengan laporan keuangan yang sudah terbit, dan inkonsistensi itulah yang membuka pintu koreksi lebih dalam. Dokumen yang disusun tepat waktu dari data nyata adalah pembelaan; yang disusun mendadak hanya tambahan berkas." },
    ],
    related: ["pelaporan-pajak", "pendirian-holding", "entitas-luar-negeri", "pt-pma"],
  },
  {
    slug: "ekspor-marketplace-global",
    tagline: "Toko Anda terbuka untuk dunia — pastikan legalitasnya ikut terbuka.",
    heroSub:
      "Ekspor melalui Amazon, Alibaba, Etsy, dan eBay — dari struktur legal toko dan verifikasi akun, logistik fulfillment, sampai pajak pasar tujuan dan alur uang yang pulang dengan sah ke Indonesia.",
    timeline: "3–6 minggu sampai toko aktif dan pengiriman pertama",
    intro: [
      "Marketplace global telah menurunkan pagar ekspor: pengrajin Indonesia menjual ke pembeli Amerika lewat Etsy, brand lokal mengisi gudang Amazon lewat FBA, dan supplier B2B menemukan buyer di Alibaba tanpa menghadiri satu pameran pun. Tetapi di balik antarmuka yang ramah, setiap platform menuntut fondasi yang sah: verifikasi identitas bisnis dengan dokumen badan usaha, barcode produk (UPC/GTIN), kepatuhan produk terhadap pasar tujuan — FDA untuk kosmetik dan pangan ke Amerika, CE untuk Uni Eropa — serta struktur logistik yang benar. Di sisi Indonesia, penghasilan dari penjualan luar negeri tetap penghasilan yang dilaporkan, dan dana platform masuk lewat jalur yang legal serta tercatat. Dua sisi ini harus dipetakan sebelum toko dibuka, bukan setelah penjualan menggigit.",
      "Kesalahan yang merusak biasanya bermula dari yang terlihat sepele. Akun didaftarkan asal-asalan lalu dibekukan platform persis saat penjualan mulai naik — dan dana tertahan berbulan-bulan di balik proses keberatan. Produk dikirim tanpa memahami VAT pasar tujuan: di Uni Eropa, tanpa nomor IOSS pembeli ditagih VAT plus biaya administrasi di gerbang, rating toko runtuh, dan pengembalian menghantui. Kemudian yang paling mahal: penjualan naik, lalu baru disadari struktur pajak Indonesia belum siap — penghasilan luar negeri, pembayaran melalui Payoneer dan sejenisnya, dan kewajiban NPWP-PKP saat usaha bertransaksi formal. Semua itu bisa dipersiapkan sebelum toko aktif dengan biaya kecil, atau diurus setelah akun dibekukan dengan biaya yang jauh lebih besar.",
      "Kami merapikan seluruh rantainya sejak sebelum toko berdiri. Platform dan pasar dipilih sesuai produk, struktur legal pemilik toko ditetapkan — perorangan, PT, atau PT dengan entitas luar — dan verifikasi akun dijalankan dengan dokumen yang tahan uji. Pajak dua sisi dipetakan: IOSS untuk Uni Eropa, mekanisme sales tax Amerika yang umumnya dipungut platform, serta PPh dan PKP di Indonesia. Logistik dipilih sesuai margin — direct mail, third-party logistics, atau FBA — dan alur pembayaran ditata agar setiap rupiah yang pulang mudah dijelaskan saat pelaporan pajak.",
    ],
    benefits: [
      { title: "Akun terverifikasi dan tahan uji", desc: "Didaftarkan dengan dokumen badan usaha yang sah — tidak dibekukan persis saat penjualan mulai bergerak." },
      { title: "Pajak dua sisi tertata", desc: "IOSS Uni Eropa, sales tax Amerika, serta PPh dan PKP di Indonesia dipetakan sebelum penjualan — tidak ada tagihan kejutan dari dua arah benua." },
      { title: "Produk lolos kepatuhan", desc: "Kebutuhan FDA, CE, labeling, dan barcode pasar tujuan diperiksa sebelum listing — tidak terhapus platform atau tertahan di gerbang." },
      { title: "Logistik yang menjaga margin", desc: "Direct mail, 3PL, atau FBA dipilih berdasarkan perhitungan per unit — ongkos kirim tidak memakan untung diam-diam." },
      { title: "Uang pulang dengan jalur sah", desc: "Pembayaran platform menuju rekening Indonesia tercatat benar — mudah dijelaskan saat pelaporan pajak dan due diligence." },
    ],
    process: [
      { title: "Peta platform dan struktur", desc: "Platform yang sesuai produk dan pasar ditetapkan — struktur legal pemilik toko direkomendasikan dengan alasan yang jelas." },
      { title: "Registrasi dan verifikasi", desc: "Dokumen verifikasi platform, barcode produk, dan kepatuhan pasar tujuan disiapkan sampai toko aktif." },
      { title: "Pajak dan pembayaran", desc: "IOSS (bila Uni Eropa), mekanisme sales tax platform Amerika, dan jalur dana ke Indonesia diatur — PPh dan PKP dipetakan." },
      { title: "Logistik dan peluncuran", desc: "Skema pengiriman atau fulfillment disusun, listing diluncurkan, dan pengiriman pertama didampingi sampai diterima buyer." },
    ],
    requirements: [
      "Data usaha: NIB, dokumen badan usaha, dan NPWP (termasuk status PKP bila sudah atau akan diurus)",
      "Daftar produk dan kategorinya — menentukan kepatuhan pasar tujuan dan batasan platform",
      "Rencana harga jual untuk menghitung margin setelah fee, kirim, dan pajak",
      "Bila sudah ada akun atau penjualan: akses akun dan riwayat pembayaran untuk dirapikan",
      "Rekening bank dan identitas pemilik usaha untuk jalur pembayaran",
    ],
    faqs: [
      { q: "Harus punya PT dulu, atau perorangan bisa jual di marketplace global?", a: "Bisa mulai sebagai perorangan — banyak platform menerima individu — tetapi ada dua titik yang mendorong naik ke PT. Pertama, verifikasi akun dan akses fitur tertentu lebih mulus untuk badan usaha. Kedua, begitu omzet naik, PT memberi struktur pajak yang lebih bersih dan kredibilitas untuk fitur seperti Amazon Brand Registry. Rekomendasi kami: mulai ringan bila masih menguji pasar, tetapi siapkan struktur sejak akun dibuka agar tidak perlu memindahkan toko di tengah riwayat penjualan — perpindahan itu sendiri memicu verifikasi ulang." },
      { q: "Bagaimana soal pajaknya — di Indonesia dan di negara pembeli?", a: "Dua sisi, dan keduanya nyata. Di Uni Eropa, VAT dipungut lewat skema IOSS untuk barang sampai batas nilai tertentu (saat ini 150 euro) — tanpa nomor IOSS, pembeli ditagih di gerbang dan toko Anda menuai ulasan buruk. Di Amerika, marketplace facilitator seperti Amazon umumnya memungut dan menyetor sales tax, sehingga fokus Anda bergeser ke pencatatan yang benar. Di Indonesia, penghasilan dari penjualan luar negeri tetap objek PPh dan dilaporkan — bila usaha PKP, transaksi formalnya juga dirapikan. Semua ini kami petakan sebelum toko aktif, jauh lebih murah daripada membongkar setelah setahun berjualan." },
      { q: "Berapa biaya memulai dan berapa lama sampai bisa jualan?", a: "Jasa pendampingan mulai Rp 5 juta sampai toko aktif dan pengiriman pertama, mencakup struktur, verifikasi, pemetaan pajak, dan peluncuran. Biaya lain mengikuti pilihan Anda: barcode produk, pendaftaran merek bila ingin Brand Registry, fee platform per transaksi, dan ongkos logistik per unit. Durasi realistis 3–6 minggu, dengan verifikasi platform sebagai porsi terbesarnya — dan dokumen yang benar sejak awal membuatnya selesai sekali jalan. Anggap biaya masuk yang murah dibanding risiko akun dibekukan ketika penjualan sudah menggigit." },
    ],
    related: ["marketplace", "api-bea-cukai", "sertifikat-asal", "npwp-pkp"],
  },
  {
    slug: "antidumping-bmtp",
    tagline: "Ketika harga pasar dibajak impor yang tidak wajar, hukum menyediakan kanal untuk menanggulanginya.",
    heroSub:
      "Perlindungan perdagangan melalui jalur resmi — petisi antidumping, anti-subsidi, dan tindakan pengamanan ke KADI dan instansi terkait, dengan bukti kerugian industri yang tahan investigasi.",
    timeline: "Kajian 4–8 minggu · Investigasi pemerintah umumnya 12–18 bulan",
    intro: [
      "Produk impor yang dijual di bawah nilai normalnya (dumping), disubsidi negara asalnya, atau mengalir masuk dalam lonjakan mendadak dapat menekan industri dalam negeri sampai mesin berhenti. Hukum perdagangan menyediakan tiga instrumen tarif untuk menjawabnya: bea masuk antidumping, bea masuk anti-subsidi, dan bea masuk tambahan tindakan pengamanan (safeguard). Jalurnya formal dan panjang: petisi dari industri dalam negeri diperiksa Komite Anti Dumping Indonesia (KADI, dibentuk lewat PP No. 34 Tahun 2011) bersama instansi terkait, berujung rekomendasi dan penetapan PMK yang membebankan tarif tambahan pada produk asal tertentu untuk masa tertentu. Instrumen ini bukan nasihat bisnis — ia adalah mekanisme hukum yang mengubah tarif secara resmi, dan karenanya seluruh prosesnya menuntut bukti.",
      "Petisi yang gagal umumnya bukan karena alurnya salah, melainkan buktinya tipis. Data kerugian industri — produksi, penjualan, harga, profit, tenaga kerja — tidak dikumpulkan sistematis, kausalitas antara impor dan kerugian tidak dibangun, dan definisi produk serupa ditulis longgar sehingga mudah digugat. Ada sisi lain yang sering terlewat: importir terdampak tarif memiliki hak pembelaan yang sama — mengajukan tanggapan, menghadiri hearing, meminta review setelah penetapan. Perusahaan yang tidak memantau investigasi produknya menemukan tarif baru menimpa kontrak impor yang sudah berjalan, tanpa strategi apa pun di tangan.",
      "Kami melayani dua sisi meja dengan disiplin yang sama. Bagi industri yang tertekan: kajian kerugian, penyusunan petisi dan bukti, pengajuan, dan pendampingan investigasi dari kuesioner sampai verifikasi. Bagi importir dan distributor: pemetaan risiko produk terdampak, penyusunan tanggapan dan pembelaan di setiap tahap investigasi, serta strategi rantai pasok menghadapi tarif baru. Di kedua arah itu, prinsipnya satu: data yang benar dari awal, bukan argumen yang mengejar angka.",
    ],
    benefits: [
      { title: "Kanal resmi, bukan pasrah", desc: "Keluhan atas impor murah punya mekanisme hukum yang dapat dijalankan — dengan bukti, bukan dengan keluhan." },
      { title: "Petisi yang tahan gugat", desc: "Data kerugian dan kausalitas disusun sistematis — investigasi berjalan dari pengajuan, bukan gugur di awal." },
      { title: "Dua arah terlindungi", desc: "Sebagai pemohon atau importir terdampak, tanggapan dan pembelaan disiapkan di setiap tahap investigasi." },
      { title: "Rantai pasok antisipatif", desc: "Tarif baru dipetakan dampaknya sebelum menimpa kontrak — harga jual dan sumber pasokan menyesuaikan, tidak kaget." },
      { title: "Produk Anda dipantau", desc: "Investigasi produk serupa di kawasan diperhatikan — perubahan regulasi tarif tidak datang sebagai kejutan." },
    ],
    process: [
      { title: "Kajian awal dan kelayakan", desc: "Data impor, harga, dan kerugian industri dianalisis — kelayakan petisi termasuk syarat dukungan industri disimpulkan jujur." },
      { title: "Penyusunan petisi dan bukti", desc: "Petisi ditulis lengkap: data produksi dan harga, definisi produk serupa, dan kausalitas yang dibangun dari dokumen nyata." },
      { title: "Pengajuan dan investigasi", desc: "Petisi masuk ke KADI dan instansi terkait — kuesioner, verifikasi, dan hearing didampingi sampai penetapan." },
      { title: "Tindak lanjut", desc: "Penetapan dipantau, review dan jalur hukum dievaluasi — atau pembelaan importir dilanjutkan bila Anda berada di sisi itu." },
    ],
    requirements: [
      "Data produksi, penjualan, harga jual, dan profit perusahaan minimal tiga tahun terakhir",
      "Data impor produk terkait: HS code, negara asal, nilai dan volume (kami bantu menarik dari sumber resmi)",
      "Bukti dampak: penurunan tenaga kerja, kapasitas terpakai, persediaan, atau piutang — bila ada",
      "Dokumen perusahaan: NIB, akta, dan laporan keuangan",
      "Untuk importir terdampak: kontrak impor, PIB, dan riwayat penjualan produk terkait",
    ],
    faqs: [
      { q: "Berapa biaya dan berapa lama sampai tarif benar-benar dipungut?", a: "Prosesnya dua babak. Kajian dan penyusunan petisi dengan pendampingan kami mulai Rp 15 juta sesuai kompleksitas data, lalu investigasi pemerintah berjalan dengan durasi yang diatur regulasi — umumnya belasan hingga delapan belas bulan sebelum penetapan final, dengan kemungkinan tindakan sementara lebih awal. Ini maraton administratif, bukan sprint, dan kelayakan bukti di minggu-minggu awal menentukan apakah maraton itu layak dimulai. Karena itu kajian awal kami memberi jawaban jujur: layak diperjuangkan, atau tidak." },
      { q: "Apa syarat utama petisi diterima untuk diinvestigasi?", a: "Tiga fondasi. Kedudukan petisi: industri dalam negeri yang mengajukan harus mewakili porsi produksi yang cukup sesuai prinsip WTO. Bukti dumping, subsidi, atau lonjakan impor yang dapat diverifikasi. Dan kerugian material industri — penurunan produksi, pangsa pasar, harga, profit, tenaga kerja — dengan kausalitas yang jelas terhadap impor terkait. Petisi yang datang dengan data lengkap di tiga fondasi ini berjalan; yang datang dengan keluhan tanpa angka berhenti sebelum dimulai." },
      { q: "Saya importir produk yang kena tarif — apakah bisa melakukan sesuatu?", a: "Ya, posisi importir dalam investigasi bukan penonton. Anda berhak mengajukan tanggapan tertulis, menghadiri hearing, dan menyangkal klaim kerugian atau kausalitas — data importir kerap menjadi pembanding penting di meja investigasi. Setelah penetapan, tersedia jalur review seperti perubahan keadaan dan expiry review menjelang akhir masa berlaku tarif. Yang paling mahal adalah diam: tarif menimpa kontrak berjalan tanpa strategi — mulai dari penyesuaian negara asal, klasifikasi, sampai harga jual." },
    ],
    related: ["api-bea-cukai", "izin-distribusi", "legal-drafting", "lartas-ekspor-komoditas"],
  },
  {
    slug: "lartas-ekspor-komoditas",
    tagline: "Komoditas Anda sah di hutan, di kebun, dan di laut — pastikan sah juga di pelabuhan.",
    heroSub:
      "Lartas ekspor tiap komoditas — V-Legal dan SVLK untuk kayu, persetujuan ekspor CPO, lartas ikan, hingga rekomendasi ekspor minerba — lengkap sebelum muat, dengan traceability yang bisa dipertanggungjawabkan.",
    timeline: "2–6 minggu sesuai komoditas dan kesiapan traceability",
    intro: [
      "Komoditas ekspor Indonesia bukan barang yang bebas berangkat: kayu dan produk kayunya wajib melewati SVLK (Sertifikasi Legality dan Keberlanjutan) dengan dokumen V-Legal, CPO dan turunannya keluar lewat persetujuan ekspor yang kebijakannya dinamis mengikuti DMO dan DPO, produk perikanan menuntut lartas dari KKP termasuk persetujuan negara tujuan, dan minerba mengikuti rekomendasi ekspor melalui sistem MODI milik ESDM dengan batasan hilirisasi. Masing-masing dipegang kementerian berbeda — LHK, Perdagangan, KP, ESDM — dan pelabuhan hanya mengeksekusi kelengkapannya. Kerangkanya tersebar di UU No. 41 Tahun 1999 tentang Kehutanan, UU No. 7 Tahun 2014 tentang Perdagangan, UU No. 31 Tahun 2004 tentang Perikanan, dan UU No. 3 Tahun 2020 untuk minerba. Satu kekurangan dokumen di hulu menjadi satu kontainer tertahan di hilir.",
      "Muat tanpa lartas bukan pelanggaran administratif kecil. Barang ditahan di terminal, sanksi administratif berjalan, kontrak buyer batal dengan penalti, dan API dapat dicabut — pola ini berulang setiap kali kebijakan persetujuan ekspor berubah dan eksportir terlambat menyesuaikan. Di sisi lain, buyer global kini menuntut lebih dari dokumen: traceability dari titik asal — hutan, kebun, kapal — seperti yang dituntut EUDR Uni Eropa dengan bukti bebas deforestasi. Legalitas yang rapuh di hulu selalu patah di hilir pelabuhan, dan memperbaikinya di tengah pengiriman adalah posisi termahal untuk berdiri.",
      "Kami memetakan dulu: lartas apa saja yang berlaku untuk komoditas dan negara tujuan Anda, berdasarkan regulasi terkini — bukan daftar tahun lalu. Kesiapan traceability diaudit: rantai asal bahan, dokumen petani atau pemasok, dan chain of custody untuk kayu. Pengurusan sertifikasi hulu seperti SVLK dan PHPL dijalankan bila belum ada, lalu persetujuan ekspor dan dokumen kementerian diajukan sampai terbit. Setelah itu kebijakan komoditas Anda dipantau — karena aturan DMO, DPO, dan kuota bisa berubah di antara dua pengiriman.",
    ],
    benefits: [
      { title: "Muat tanpa drama", desc: "Seluruh lartas lengkap sebelum jadwal kapal — barang tidak tertahan terminal dan kontrak tidak berjalan ke penalti." },
      { title: "Satu peta, banyak kementerian", desc: "LHK, Perdagangan, KP, ESDM — tidak ada kewajiban yang tertinggal di antara kantor yang berbeda." },
      { title: "Traceability yang bisa ditunjuk", desc: "Rantai asal bahan terdokumentasi — siap untuk buyer, audit, dan era EUDR." },
      { title: "Kebijakan dinamis tidak mengejutkan", desc: "Perubahan DMO, DPO, dan kuota dipantau — pengiriman berikutnya menyesuaikan sebelum aturan menimpa." },
      { title: "Legalitas hulu dibangun sekali", desc: "Sertifikasi seperti SVLK dan PHPL dibangun untuk jangka panjang — pengajuan berikutnya jauh lebih cepat." },
    ],
    process: [
      { title: "Pemetaan lartas", desc: "Komoditas, HS code, dan negara tujuan diperiksa terhadap regulasi terkini — seluruh dokumen yang wajib dipetakan." },
      { title: "Audit traceability dan sertifikasi", desc: "Rantai asal bahan diperiksa — V-Legal, PHPL, atau dokumen asal lain disiapkan bila belum ada." },
      { title: "Pengajuan PE dan lartas", desc: "Persetujuan ekspor dan dokumen kementerian diajukan — koordinasi antar instansi kami bawa sampai terbit." },
      { title: "Pantauan dan kepatuhan berjalan", desc: "Kebijakan komoditas dipantau, pengajuan berikutnya dijadwalkan, dan penahanan bila terlanjur dipulihkan." },
    ],
    requirements: [
      "Data perusahaan ekspor: NIB, API, dan keanggotaan asosiasi bila disyaratkan",
      "Komoditas dan HS code, volume, negara tujuan, serta jadwal pengiriman",
      "Bukti asal bahan: dokumen asal hasil hutan, kebun, laut, atau tambang — termasuk data petani, koperasi, atau pemasok hulu",
      "Untuk kayu dan produk kayu: data pemasok dan kesiapan chain of custody untuk SVLK",
      "Riwayat pengiriman dan kendala lartas sebelumnya, bila ada",
    ],
    faqs: [
      { q: "Komoditas saya dianggap biasa saja — bagaimana tahu dia termasuk lartas ekspor?", a: "Ceknya bukan dari kebiasaan pasar, melainkan dari HS code dan daftar lartas resmi. Banyak komoditas yang terasa sehari-hari ternyata masuk daftar — turunan kayu tertentu, hasil laut, sampai bahan tertentu dari sektor pertanian dan minerba. Praktik yang aman: sebelum kontrak ditandatangani, HS code produk diperiksa terhadap regulasi terkini kementerian pemegangnya, karena daftar dan kebijakannya berubah — kasus persetujuan ekspor CPO yang berubah berkali-kali adalah pelajaran yang baik. Pemetaan satu hari menghindari satu kontainer tertahan." },
      { q: "Berapa biaya dan lamanya, misalnya untuk kayu dengan SVLK?", a: "Untuk pengurusan dokumen lartas seperti persetujuan ekspor atau V-Legal dengan traceability yang sudah siap, mulai Rp 7,5 juta dan berjalan 2–4 minggu. Bila sertifikasi hulu belum ada — misalnya SVLK untuk industri kayu — biaya dan waktu bertambah mengikuti kesiapan rantai pasok: audit legality, penilaian lembaga, dan perbaikan dokumen asal bahan dapat menggeser total ke satu hingga tiga bulan. Kami memberi estimasi jujur setelah pemetaan awal, karena angka yang salah di awal lebih mahal daripada tidak ada angka." },
      { q: "Barang saya tertahan di pelabuhan karena lartas kurang — bisa diselamatkan?", a: "Kadang bisa, tergantung jenis kekurangannya. Dokumen yang dapat dilengkapi — persetujuan yang belum terbit, sertifikat yang tertunda penomoran — kami kejar lewat kanal resmi instansi terkait, dan banyak penahanan selesai di titik ini. Tetapi bila masalahnya substansi legalitas, misalnya asal bahan yang tidak dapat dibuktikan, jalurnya adalah pemulihan yang benar — bukan dokumen tipuan yang menambah pelanggaran. Setelah kasus beres, sistem kami pasang agar pengiriman berikutnya tidak mengulang kejadian yang sama." },
    ],
    related: ["api-bea-cukai", "izin-tambang-iup", "eudr-komoditas", "sertifikat-asal"],
  },
  {
    slug: "distributor-brand-asing",
    tagline: "Mewakili merek dunia tanpa menjadi pihak yang paling rentan di ruang negosiasi.",
    heroSub:
      "Perjanjian distribusi resmi merek internasional — wilayah, target, eksklusivitas, dan perlindungan bila hubungan berakhir — disusun sambil merapikan perizinan dagang dan kepatuhan produk Anda.",
    timeline: "Perjanjian 2–4 minggu · Perizinan menyusul sesuai kategori produk",
    intro: [
      "Menjadi distributor resmi merek global membuka margin dan kredibilitas yang tidak bisa dibeli — tetapi kontrak yang ditawarkan prinsipal biasanya disusun untuk kepentingan prinsipal. Isinya yang lazim: target penjualan yang naik tiap tahun, hak mencabut dengan pemberitahuan singkat, eksklusivitas yang bisa dicabut tanpa kompensasi, dan kewajiban membeli inventory minimum. Sebelum tanda tangan, dua fondasi harus diperiksa. Pertama, apakah merek itu benar-benar terdaftar di Indonesia menurut UU No. 20 Tahun 2016 — merek yang tidak terdaftar sulit dipertahankan dari pembajakan. Kedua, apakah struktur bisnis Anda siap: entitas dan izin distribusi, API bila mengimpor langsung, dan kepatuhan produk sesuai kategori — SNI yang wajib, izin edar BPOM untuk pangan dan kosmetika, sertifikasi halal untuk F&B menurut UU No. 33 Tahun 2014 jo. PP No. 42 Tahun 2024.",
      "Kesalahan yang paling mahal terjadi di akhir hubungan, bukan di awalnya. Distributor menginvestasikan gudang, staf, dan pasar bertahun-tahun, lalu prinsipal mengambil alih pasar langsung atau berpindah ke distributor lain — dan kontrak yang tidak menyiapkan perlindungan terminasi meninggalkan distributor dengan stok terjebak, non-compete tanpa batas, dan pasar yang sudah dibangun diserahkan kepada pihak lain tanpa kompensasi. Kesalahan kedua: menerima eksklusivitas wilayah yang ternyata bocor lewat e-commerce milik prinsipal sendiri atau lewat distributor paralel — tanpa klausul pengelolaan kanal, kata eksklusif hanya tinggal di kertas. Ketiga, dan paling diam-diam: menandatangani forum sengketa dan hukum yang berlaku di negara prinsipal, sehingga setiap tuntutan dimulai dari posisi yang lemah.",
      "Kami masuk sebelum tanda tangan, bukan sesudahnya. Due diligence dijalankan lebih dulu: status merek di DJKI, legalitas prinsipal, dan dukungan pemasaran yang dijanjikan. Negosiasi dan penyusunan perjanjian menutup celah kritis: wilayah dan target yang realistis, eksklusivitas yang bisa ditegakkan, perlindungan terminasi dengan kompensasi inventory dan buy-back, serta forum sengketa yang masuk akal. Perizinan dagang dan kepatuhan produk kategori Anda dirapikan paralel, dan bila prinsipal ingin hubungan yang lebih dalam, struktur joint venture disiapkan sebagai langkah berikutnya.",
    ],
    benefits: [
      { title: "Kontrak yang setara", desc: "Target, eksklusivitas, dan hak mencabut dinegosiasikan — distributor tidak berdiri di posisi lemah sejak halaman pertama." },
      { title: "Perlindungan saat berakhir", desc: "Kompensasi inventory, buy-back, dan batas non-compete dituangkan tegas — investasi pasar tidak hangus saat hubungan selesai." },
      { title: "Merek yang benar-benar aman", desc: "Registrasi merek di DJKI diperiksa lebih dulu — Anda menjual merek yang bisa dipertahankan, bukan sekadar nama yang indah." },
      { title: "Produk legal sampai rak", desc: "Izin distribusi, API, SNI, BPOM, dan halal dipetakan sesuai kategori — barang sampai rak, bukan berhenti di pelabuhan." },
      { title: "Eksklusivitas yang ditegakkan", desc: "Kanal daring prinsipal dan distributor paralel diatur di kontrak — kata eksklusif berlaku, bukan sekadar dijanjikan." },
    ],
    process: [
      { title: "Due diligence merek dan prinsipal", desc: "Status merek di DJKI, legalitas prinsipal, dan komitmen dukungan pemasaran diperiksa sebelum negosiasi." },
      { title: "Negosiasi dan perjanjian", desc: "Wilayah, target, harga, eksklusivitas, dan perlindungan terminasi dinegosiasikan — perjanjian ditulis yang setara." },
      { title: "Perizinan dan kepatuhan produk", desc: "Struktur entitas, izin distribusi, API bila mengimpor, dan kepatuhan produk dirapikan paralel dengan kontrak." },
      { title: "Operasional dan pengawasan kontrak", desc: "Kewajiban berjalan — laporan penjualan, marketing fund, target — masuk kalender; pelanggaran kecil ditindak sebelum menjadi besar." },
    ],
    requirements: [
      "Identitas prinsipal dan dokumen korespondensi awal: term sheet atau draf perjanjian bila sudah dikirim",
      "Kategori produk dan negara asal — menentukan SNI, BPOM, halal, dan jalur impor",
      "Struktur bisnis Anda saat ini: badan usaha, NIB, izin distribusi, dan API bila ada",
      "Rencana wilayah dan kanal penjualan: offline, retail modern, marketplace",
      "Kapasitas finansial dan distribusi: gudang, jaringan, dan target yang sanggup dijalankan",
    ],
    faqs: [
      { q: "Berapa biaya membuat perjanjian distributor resmi dan mengurus izinnya?", a: "Jasa due diligence, negosiasi, dan penyusunan perjanjian mulai Rp 10 juta tergantung kompleksitas draf prinsipal. Perizinan dagang dan kepatuhan produk dihitung terpisah sesuai kategori — izin distribusi untuk produk umum jauh lebih ringan daripada pangan atau kosmetika yang menyentuh BPOM dan halal. Yang perlu masuk hitungan juga adalah kebutuhan operasional kontrak itu sendiri: inventory minimum, marketing fund, dan fit-out untuk retail modern — sering lebih besar dari biaya legal, dan justru itu yang harus dinegosiasikan realistis di awal." },
      { q: "Prinsipal mengirim draf kontrak standar dari kantor pusatnya — apakah masih perlu ditinjau?", a: "Justru itu dokumen yang paling wajib ditinjau. Draf standar disusun di negara prinsipal dengan hukum dan kepentingan prinsipal: klausul pencabutan singkat, tanpa kompensasi, non-compete tanpa batas, dan forum sengketa di negara mereka adalah hal yang lazim ditemukan di sana. Menandatanganinya tanpa peninjauan berarti menerima posisi lemah sejak hari pertama, tetapi menolak mentah-mentah juga bukan jawaban — prinsipal besar biasanya terbuka pada perubahan yang rasional bila diajukan dengan argumentasi yang tepat. Pengalaman kami: klausul kunci seperti terminasi, kompensasi, wilayah, dan forum memang bisa digeser bila negosiasinya punya bekal." },
      { q: "Kalau nanti prinsipal mencabut kemitraan atau melanggar eksklusivitas, apa hak saya?", a: "Tergantung apa yang tertulis sebelum peristiwa itu datang — dan di situlah letak nilainya. Perjanjian yang baik menyiapkan masa pemberitahuan yang layak, kompensasi inventory dan buy-back, perlindungan atas investasi pasar dengan angka tertentu, batas non-compete yang wajar, serta mekanisme menindak pelanggaran eksklusivitas termasuk yang bocor lewat kanal daring prinsipal. Tanpa itu, tuntutan tetap mungkin lewat hukum umum, tetapi posisinya jauh lebih lemah dan mahal. Satu lagi yang praktis: pastikan mereknya terdaftar di DJKI — merek yang tidak terdaftar sulit dipertahankan siapa pun, termasuk oleh prinsipalnya sendiri." },
    ],
    related: ["izin-distribusi", "franchise", "joint-venture", "legal-drafting"],
  },
];

/**
 * LAPISAN PENGAYAAN — Ekspansi Global.
 * Gabungan otomatis oleh getServiceContent(): profil klien, hasil kerja,
 * rincian biaya (query high-intent), dan dasar hukum (sinyal E-E-A-T).
 */
export const globalEnrichment: Record<string, ServiceEnrichment> = {
  "kantor-perwakilan-asing": {
    whoFor: [
      "Perusahaan asing yang ingin hadir resmi di Indonesia sebelum berinvestasi penuh",
      "Merek global yang membutuhkan kantor pemantauan distributor dan jaringan penjualan lokal",
      "Perusahaan yang sedang menilai kelayakan pasar Indonesia lewat riset langsung",
      "Perusahaan asing yang menargetkan pendirian PT PMA dalam satu-dua tahun ke depan",
    ],
    deliverables: [
      "Persetujuan dan kartu izin kantor perwakilan terbit melalui OSS-RBA",
      "Surat keterangan perwakilan induk dan dokumen penunjukan sesuai format resmi",
      "Akun OSS aktif dengan seluruh dokumen perwakilan terarsip rapi",
      "Kalender kepatuhan: tenggat perpanjangan izin dan kewajiban berjalan",
      "Peta jalur upgrade ke PT PMA dengan estimasi biaya dan waktu",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 5 jt — tertulis penuh di penawaran" },
      { item: "Terjemahan tersumpah dokumen induk", note: "per dokumen, sesuai jumlah berkas asing" },
      { item: "Alamat kantor atau virtual office", note: "bila belum ada — mulai sekitar Rp 2 jt per tahun" },
      { item: "Biaya pemerintah dan pengiriman dokumen", note: "ringan, ditanggung sesuai nota resmi" },
    ],
    legalBasis: [
      "UU No. 25 Tahun 2007 tentang Penanaman Modal",
      "Peraturan BKPM No. 5 Tahun 2021 tentang Bidang Usaha dan Persyaratan Kegiatan Usaha Penanaman Modal (ketentuan kantor perwakilan perusahaan asing, antara lain Pasal 91–100)",
      "PP No. 36 Tahun 2021 jo. PP No. 55 Tahun 2023 — izin menempatkan tenaga kerja asing untuk staf perwakilan",
      "Ketentuan BKPM/Kementerian Investasi tentang tata cara pengajuan kantor perwakilan melalui OSS-RBA",
    ],
  },

  "entitas-luar-negeri": {
    whoFor: [
      "Startup dan perusahaan yang menyiapkan pendanaan dengan investor asing",
      "Eksportir yang membutuhkan entitas penagihan dan penjualan dekat buyer global",
      "Grup bisnis yang merapikan holding lintas negara dan perlindungan aset",
      "Perusahaan yang menjalin kemitraan Timur Tengah atau ekspansi regional",
    ],
    deliverables: [
      "Entitas luar negeri resmi terdaftar: sertifikat incorporasi dan dokumen konstitutif",
      "Registered agent dan alamat terdaftar aktif untuk tahun pertama",
      "Rekening bank korporasi terbuka di yurisdiksi pilihan",
      "Kalender kepatuhan tahunan: annual return, audit, dan renewal",
      "Catatan struktur pajak dan transfer pricing untuk sinkronisasi dengan PT Indonesia",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 25 jt tergantung yurisdiksi dan struktur" },
      { item: "Biaya pemerintah dan registered agent", note: "Singapura dan Hong Kong relatif ringan; free zone Dubai lebih berat" },
      { item: "Kepatuhan tahunan (sekretaris, audit, renewal)", note: "mulai sekitar Rp 15–30 jt per tahun sesuai yurisdiksi" },
      { item: "Pendampingan rekening bank dan KYC", note: "biaya bank sesuai ketentuan masing-masing" },
    ],
    legalBasis: [
      "Hukum korporasi yurisdiksi tujuan: antara lain Companies Act (Singapura), Companies Ordinance (Hong Kong), regulasi free zone Dubai, dan Delaware LLC Act",
      "UU No. 7 Tahun 2021 (HPP) jo. UU Pajak Penghasilan — penghasilan luar negeri dan foreign tax credit",
      "Peraturan BKPM No. 5 Tahun 2021 — pelaporan penanaman modal di luar negeri bagi investor Indonesia",
      "PMK No. 172/PMK.03/2023 — dokumentasi transfer pricing untuk transaksi entitas terafiliasi",
    ],
  },

  "sertifikat-asal": {
    whoFor: [
      "Eksportir manufaktur dan pertanian yang mengirim ke negara anggota FTA Indonesia",
      "Produsen dengan bahan baku campuran lokal dan impor yang ingin tahu kelayakan asal produknya",
      "Eksportir yang menerima permintaan Form D atau Form E dari buyer",
      "Perusahaan dagang yang menggabungkan produk beberapa pemasok dalam satu pengiriman",
    ],
    deliverables: [
      "Sertifikat asal terbit sesuai FTA terbaik untuk produk Anda",
      "Analisis BOM dan kriteria asal per produk dalam laporan kelayakan tertulis",
      "Registrasi eksportir di pemenerbit aktif (bila belum terdaftar)",
      "e-Form D elektronik via INSW beserta arsip digital",
      "Panduan konsistensi dokumen ekspor untuk pengiriman berikutnya",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 750 rb per dokumen" },
      { item: "Biaya resmi pemenerbit (Ditjen PEN/KADIN)", note: "ratusan ribu rupiah per SKA tergantung jenis form" },
      { item: "Analisis BOM untuk produk baru", note: "mulai Rp 1,5 jt untuk produk kompleks; ringan untuk produk sederhana" },
      { item: "Registrasi eksportir pertama kali", note: "sekali saja, ringan" },
    ],
    legalBasis: [
      "UU No. 7 Tahun 2014 tentang Perdagangan — legalitas ekspor dan lartas",
      "ATIGA (ASEAN Trade in Goods Agreement) beserta kriteria asal dan Form D",
      "ACFTA (Form E), AANZFTA, AJCEP, IK-CEPA, IA-CEPA, dan RCEP — kriteria asal masing-masing perjanjian",
      "Peraturan Ditjen PEN/Permendag tentang tata cara penerbitan SKA dan e-Form D melalui Indonesia National Single Window",
    ],
  },

  "inkoterm-kontrak-ekspor": {
    whoFor: [
      "Eksportir yang akan menandatangani kontrak ekspor pertamanya",
      "Produsen yang naik dari penjualan lokal ke penjualan langsung ke buyer luar negeri",
      "Perusahaan yang menerima L/C pertama kali dan khawatir diskrepansi",
      "Eksportir berpengalaman yang kontrak lamanya belum pernah ditinjau ulang",
    ],
    deliverables: [
      "Kontrak ekspor siap tanda tangan dengan klausul risiko lengkap",
      "Review tertulis atas draft kontrak buyer dengan catatan perbaikan",
      "Rekomendasi Incoterms dengan perbandingan biaya aktual per opsi",
      "Struktur pembayaran dan checklist dokumen L/C",
      "Checklist konsistensi dokumen pelabuhan untuk setiap pengiriman",
    ],
    costs: [
      { item: "Penyusunan kontrak ekspor", note: "mulai Rp 3,5 jt per kontrak" },
      { item: "Review draft kontrak dari buyer", note: "mulai Rp 2 jt dengan catatan tertulis" },
      { item: "Review teks L/C dan dokumen kirim", note: "mulai Rp 1,5 jt per pengiriman — paket langganan tersedia" },
      { item: "Pendampingan sengketa atau arbitrase", note: "dihitung terpisah sesuai kasus" },
    ],
    legalBasis: [
      "ICC Incoterms 2020 (Publikasi ICC No. 723E)",
      "UCP 600 — aturan praktis dokumen kredit (L/C) dari ICC",
      "KUHD dan KUHPerdata — kontrak dagang dan wanprestasi",
      "UU No. 30 Tahun 1999 tentang Arbitrase — klausul penyelesaian sengketa (BANI)",
    ],
  },

  "kawasan-berikat": {
    whoFor: [
      "Pabrik ekspor dengan porsi bahan baku impor yang tinggi",
      "Perusahaan manufaktur yang membangun pabrik baru untuk pasar ekspor",
      "Produsen yang ingin memasok ke perusahaan berikat lain sebagai rantai integrasi",
      "Perusahaan di kawasan industri yang belum memanfaatkan fasilitas kepabeanan",
    ],
    deliverables: [
      "Status Kawasan Berikat atau persetujuan KITE terbit dari Ditjen Bea Cukai",
      "Kajian kelayakan dan rekomendasi skema dengan proyeksi penghematan bea masuk",
      "Struktur pencatatan persediaan dan dokumen kepabeanan yang siap pemeriksaan",
      "Registrasi sistem kepabeanan (CEISA) aktif",
      "Kalender pelaporan berkala dan pendampingan pemeriksaan fisik",
    ],
    costs: [
      { item: "Jasa pendampingan status KB/KITE", note: "KB mulai Rp 15 jt; KITE lebih ringan — tertulis di penawaran" },
      { item: "Penyusunan sistem pencatatan dan SOP kepabeanan", note: "mulai Rp 5 jt sesuai kompleksitas produksi" },
      { item: "Biaya pemerintah dan peninjauan lokasi", note: "sesuai ketentuan Ditjen Bea Cukai" },
      { item: "Pengelolaan pelaporan berkala (opsional)", note: "langganan menyesuaikan volume transaksi" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2006 jo. UU No. 7 Tahun 2021 (HPP) tentang Kepabeanan",
      "PP No. 32 Tahun 2009 tentang Kawasan Berikat",
      "PMK No. 19/PMK.04/2016 beserta perubahannya — kawasan berikat dan kawasan berikat terintegrasi",
      "PMK No. 21/PMK.04/2017 jo. PMK No. 74/PMK.04/2018 — Kawasan Berikat di Luar Kawasan Berikat (KITE)",
    ],
  },

  "transfer-pricing": {
    whoFor: [
      "PT PMA yang bertransaksi dengan induk atau afiliasi luar negeri",
      "Grup bisnis dengan entitas ganda di Indonesia dan luar negeri",
      "Perusahaan yang membayar atau menerima royalti, jasa, dan pinjaman antar afiliasi",
      "Perusahaan yang menerima surat pemeriksaan dengan fokus transaksi berelasi",
    ],
    deliverables: [
      "TP Doc lengkap sesuai struktur PMK 172/2023 (Master File dan Local File bila berlaku)",
      "Analisis fungsi-risiko-aset dan pemilihan metode kewajaran per jenis transaksi",
      "Laporan benchmarking dengan pembanding terdokumentasi",
      "Fiskal Notable Transactions yang selaras dengan SPT",
      "Pendampingan pemeriksaan DJP: tanggapan tertulis dan pembelaan metode",
    ],
    costs: [
      { item: "Penyusunan TP Doc", note: "mulai Rp 12 jt untuk struktur sederhana — penawaran tertulis setelah pemetaan" },
      { item: "Benchmarking dan database pembanding", note: "sesuai jenis transaksi dan tahun pajak" },
      { item: "Pemutakhiran tahunan", note: "lebih ringan dari penyusunan awal" },
      { item: "Pendampingan pemeriksaan DJP", note: "dihitung terpisah sesuai kompleksitas kasus" },
    ],
    legalBasis: [
      "UU No. 7 Tahun 1983 tentang Pajak Penghasilan sebagaimana berkali-kali diubah, antara lain Pasal 18 ayat (4)",
      "PMK No. 172/PMK.03/2023 tentang Kewajiban Dokumentasi Transaksi Pihak Berelasi",
      "UU No. 7 Tahun 2021 (HPP) — sanksi administratif dan bunga",
      "Ketentuan PMK terkait Fiskal Notable Transactions dan Perjanjian Harga Lanjutan (APA)",
    ],
  },

  "ekspor-marketplace-global": {
    whoFor: [
      "Produsen UMKM dan pengrajin yang produknya diminati buyer luar negeri",
      "Brand lokal yang ingin menjual langsung ke konsumen global tanpa distributor",
      "Eksportir yang ingin menambah kanal B2C dan B2B di samping jalur tradisional",
      "Penjual yang akunnya dibekukan platform dan ingin restrukturisasi yang benar",
    ],
    deliverables: [
      "Toko global terverifikasi aktif dengan struktur legal yang benar",
      "Peta kewajiban pajak dua sisi: pasar tujuan (IOSS, sales tax) dan Indonesia (PPh, PKP)",
      "Checklist kepatuhan produk pasar tujuan: FDA, CE, labeling, barcode",
      "Skema logistik dan fulfillment dengan estimasi biaya per unit terjual",
      "Jalur pembayaran sah ke rekening Indonesia beserta panduan pencatatan pajak",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 5 jt sampai toko aktif dan pengiriman pertama" },
      { item: "Biaya platform dan verifikasi", note: "fee transaksi dan subscription sesuai platform" },
      { item: "Barcode, merek, dan kepatuhan produk", note: "sesuai kebutuhan pasar tujuan — pengujian bila diminta" },
      { item: "Logistik per pengiriman", note: "direct mail, 3PL, atau FBA — dihitung per unit agar margin terjaga" },
    ],
    legalBasis: [
      "UU No. 7 Tahun 2014 tentang Perdagangan jo. PP No. 80 Tahun 2019 tentang Perdagangan Melalui Sistem Elektronik",
      "Regulasi pajak pasar tujuan: skema IOSS (VAT) Uni Eropa dan ketentuan sales tax negara bagian Amerika (marketplace facilitator laws)",
      "UU No. 7 Tahun 2021 (HPP) dan PMK terkait — PPh atas penghasilan dari luar negeri dan PPN",
      "Ketentuan kepatuhan produk pasar tujuan sesuai kategori: antara lain FDA (Amerika) dan penandaan CE (Uni Eropa)",
    ],
  },

  "antidumping-bmtp": {
    whoFor: [
      "Industri dalam negeri yang produksinya tertekan lonjakan impor murah",
      "Asosiasi industri yang mengagregasi keluhan para anggotanya",
      "Importir dan distributor produk yang sedang atau akan menjadi objek investigasi",
      "Grup bisnis yang memantau risiko tarif atas produk yang didistribusikannya",
    ],
    deliverables: [
      "Kajian kelayakan tertulis: potensi dumping, kerugian industri, dan peluang petisi",
      "Draf petisi lengkap dengan lampiran data dan analisis kausalitas",
      "Pengajuan terdokumentasi dan pendampingan seluruh tahap investigasi",
      "Untuk importir: tanggapan investigasi, strategi tarif, dan opsi rantai pasok",
      "Monitoring penetapan dan kalender review (expiry review, perubahan keadaan)",
    ],
    costs: [
      { item: "Kajian kelayakan dan penyusunan petisi", note: "mulai Rp 15 jt sesuai kompleksitas data industri" },
      { item: "Pendampingan investigasi", note: "per tahap: kuesioner, verifikasi, hearing" },
      { item: "Pembelaan importir terdampak", note: "mulai Rp 10 jt sesuai posisi kasus" },
      { item: "Data dan analisis pasar", note: "sumber resmi ditambah pembelian data bila perlu — transparan di penawaran" },
    ],
    legalBasis: [
      "UU No. 7 Tahun 2014 tentang Perdagangan — antidumping, anti-subsidi, dan tindakan pengamanan",
      "PP No. 34 Tahun 2011 tentang Komite Anti Dumping Indonesia dan BMTP",
      "UU No. 17 Tahun 2006 jo. UU No. 7 Tahun 2021 (HPP) tentang Kepabeanan — penetapan dan pemungutan tarif",
      "Perjanjian WTO: Antidumping Agreement (GATT Pasal VI), SCM Agreement, dan Safeguards Agreement",
    ],
  },

  "lartas-ekspor-komoditas": {
    whoFor: [
      "Eksportir kayu dan furnitur yang membutuhkan SVLK dan V-Legal",
      "Produsen dan trader CPO beserta turunannya yang menghadapi kebijakan persetujuan ekspor yang dinamis",
      "Pelaku ekspor perikanan yang menghadapi lartas KKP dan persyaratan negara tujuan",
      "Eksportir minerba yang memerlukan rekomendasi ekspor melalui MODI",
    ],
    deliverables: [
      "Peta lartas lengkap untuk komoditas dan negara tujuan berdasarkan regulasi terkini",
      "Dokumen lartas terbit: persetujuan ekspor, V-Legal, lartas ikan, atau rekomendasi ekspor minerba",
      "Struktur traceability: dokumen asal bahan dan chain of custody",
      "Kalender kepatuhan: perubahan kebijakan komoditas dipantau, pengajuan berikutnya dijadwalkan",
      "Bila terlanjur: pendampingan pemulihan penahanan barang di pelabuhan",
    ],
    costs: [
      { item: "Pengurusan dokumen lartas (PE, V-Legal, lartas ikan)", note: "mulai Rp 7,5 jt per komoditas atau jenis dokumen" },
      { item: "Sertifikasi hulu (SVLK/PHPL) bila belum ada", note: "biaya penilaian lembaga dan perbaikan traceability — diestimasi setelah audit awal" },
      { item: "Biaya pemerintah dan lembaga", note: "sesuai tarif resmi instansi" },
      { item: "Monitoring kebijakan komoditas", note: "langganan — perubahan DMO/DPO/kuota dipantau" },
    ],
    legalBasis: [
      "UU No. 41 Tahun 1999 tentang Kehutanan dan UU No. 18 Tahun 2013 — legality kayu; PermenLHK tentang PHPL dan SVLK",
      "UU No. 7 Tahun 2014 tentang Perdagangan dan Permendag terkait lartas ekspor, antara lain persetujuan ekspor komoditas pertanian dan CPO",
      "UU No. 31 Tahun 2004 jo. UU No. 45 Tahun 2009 tentang Perikanan — lartas ekspor produk perikanan",
      "UU No. 3 Tahun 2020 (minerba) dan regulasi ESDM — rekomendasi ekspor melalui MODI",
    ],
  },

  "distributor-brand-asing": {
    whoFor: [
      "Perusahaan dagang yang ingin menjadi master distributor atau sole agent merek global",
      "Distributor eksisting yang perjanjiannya akan diperbarui atau direnegosiasi",
      "Importir yang menerima tawaran kemitraan langsung dari prinsipal luar negeri",
      "Pemilik brand lokal yang membangun jaringan distribusi terstruktur",
    ],
    deliverables: [
      "Laporan due diligence: status merek di DJKI, legalitas prinsipal, dan risiko kontrak",
      "Perjanjian distribusi yang dinegosiasikan dan siap tanda tangan",
      "Peta perizinan dagang dan kepatuhan produk (SNI, BPOM, halal) dengan urutan pengerjaan",
      "Struktur impor (API atau importir umum) dan rantai dokumen barang",
      "Kalender kewajiban kontrak dan SOP penindakan pelanggaran",
    ],
    costs: [
      { item: "Due diligence dan penyusunan perjanjian", note: "mulai Rp 10 jt sesuai kompleksitas draf prinsipal" },
      { item: "Kehadiran di meja negosiasi", note: "dihitung per sesi atau tahap bila diperlukan" },
      { item: "Perizinan dagang dan kepatuhan produk", note: "dihitung terpisah per kategori: izin distribusi, SNI, BPOM, halal" },
      { item: "Pendaftaran merek bila belum terdaftar", note: "termasuk opsi jalur Madrid — dihitung terpisah" },
    ],
    legalBasis: [
      "KUHD (Kitab Undang-Undang Hukum Dagang) dan KUHPerdata — perjanjian distribusi",
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
      "UU No. 7 Tahun 2014 tentang Perdagangan — legalitas usaha dagang dan distribusi",
      "UU No. 33 Tahun 2014 jo. PP No. 42 Tahun 2024 (halal) dan PP No. 29 Tahun 2021 (SNI) — kepatuhan produk",
    ],
  },
};
