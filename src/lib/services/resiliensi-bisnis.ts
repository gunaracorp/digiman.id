import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — RESILIENSI & PERLINDUNGAN BISNIS (10 layanan).
 * Asuransi bisnis, forensik digital, krisis PR, kontinuitas (BCP), anti-fraud,
 * ERM, sengketa-mediasi, penagihan piutang, domain & brand, reputasi daring.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 * Catatan teknis: ServiceEnrichment didefinisikan di enrichment.ts (types.ts
 * hanya mengekspor ServiceContent) — import type diambil dari sana.
 */
export const resiliensiContent: ServiceContent[] = [
  {
    slug: "asuransi-bisnis",
    tagline: "Payung yang dibeli sebelum hujan — bukan sesudah atapnya runtuh.",
    heroSub:
      "Pemetaan risiko, pemilihan jenis pertanggungan yang benar — all risk, marine cargo, liability, money, cyber — negosiasi premi dan klausul, sampai pendampingan klaim. Untuk pemilik usaha yang tidak ingin membayar polis yang menganggur atau klaim yang terpotong.",
    timeline: "Pemetaan 1–2 minggu · penempatan polis 2–4 minggu",
    intro: [
      "Kebakaran gudang, kontainer tenggelam di pelabuhan, pelanggan tercederai di area usaha, kas yang hilang saat berpindah tangan — risiko-risiko ini bukan teori, ia berita yang terjadi setiap bulan di Indonesia. Asuransi adalah alat perpindahan risiko yang diatur UU No. 40 Tahun 2014 tentang Perasuransian, dengan pengawasan OJK atas produk dan klausul baku yang mengikat penanggung. Jenis pertanggungan yang umum dibutuhkan bisnis: Property All Risk untuk bangunan dan mesin, Marine Cargo untuk barang yang bergerak, Public Liability dan Product Liability untuk tanggung jawab kepada pihak ketiga, Money Insurance untuk kas yang berpindah, dan Cyber untuk risiko era digital. Aturan dasarnya sederhana namun kejam: asas iktikad baik berlaku dua arah, dan nilai pertanggungan yang lebih rendah dari nilai aset sebenarnya membuat klaim dipotong secara proporsional — itulah yang disebut underinsurance.",
      "Kesalahan yang paling mahal biasanya terjadi sebelum polis dibeli, bukan sesudahnya: perusahaan membeli polis karena diminta bank tanpa memetakan risikonya sendiri, sehingga yang tertanggung bukan risiko yang paling mungkin menyakitkan. Ada yang menginsuranskan aset di bawah nilai pasar demi premi ringan — lalu menanggung sendiri potongan proporsional justru saat klaim terjadi. Ada yang membayar dua polis yang tumpang tindih tanpa sadar, atau menandatangani klausul pengecualian yang menutup persis risiko yang paling dikhawatirkan. Dan saat klaim datang, penolakan paling sering lahir dari kewajiban yang terlupakan: perubahan risiko tidak dilaporkan, dokumen aset tidak lengkap, atau notifikasi terlambat.",
      "Kami menangani asuransi sebagai keputusan risiko, bukan kewajiban administratif: dimulai dari pemetaan risiko per aset dan proses, desain program pertanggungan yang sesuai, lalu penawaran diperebutkan beberapa asuradur agar premi efisien. Klausul dinegosiasikan sebelum tanda tangan — deductible, perluasan, dan pengecualian dibaca dengan mata pemilik usaha, bukan mata penjual polis. Setelah polis berjalan, kami tetap di samping Anda: pengingat pembaruan, pemutakhiran nilai aset, dan pendampingan klaim dari notifikasi sampai dana benar-benar cair.",
    ],
    benefits: [
      { title: "Risiko yang tepat yang tertutup", desc: "Pemetaan per aset dan proses memastikan risiko yang paling mungkin meruntuhkan usaha Anda justru yang tertanggung — bukan polis yang indah di kertas saja." },
      { title: "Premi efisien tanpa tumpang tindih", desc: "Beberapa asuradur diperebutkan untuk program yang sama dan polis lama diperiksa — pembayaran ganda untuk perlindungan yang sama berakhir." },
      { title: "Klaim tidak terpotong konyol", desc: "Nilai pertanggungan ditetapkan mendekati nilai sebenarnya, sehingga potongan proporsional akibat underinsurance tidak menunggu di akhir proses klaim." },
      { title: "Klausul diperjuangkan sebelum tanda tangan", desc: "Deductible, perluasan, dan pengecualian dibaca serta dinegosiasikan — bukan ditemukan pertama kali saat klaim berjalan." },
      { title: "Klaim didampingi sampai cair", desc: "Notifikasi, kelengkapan dokumen, komunikasi dengan surveyor dan adjuster — bagian proses yang paling memusingkan ini kami ambil alih." },
    ],
    process: [
      { title: "Pemetaan risiko & aset", desc: "Aset fisik, barang bergerak, tanggung jawab pihak ketiga, kas, dan sistem digital dipetakan — risiko mana yang layak diasuransikan dan mana yang ditanggung sendiri diputuskan bersama." },
      { title: "Desain program & tender premi", desc: "Jenis dan nilai pertanggungan disusun, lalu beberapa asuradur diundang menawar — premi dibandingkan bersama kualitas klausul, bukan angka saja." },
      { title: "Negosiasi klausul & penempatan", desc: "Deductible, perluasan, dan pengecualian diperjuangkan; polis ditempatkan dan ringkasan klausulnya diserahkan dalam bahasa yang bisa dibaca manusia." },
      { title: "Pemeliharaan & pendampingan klaim", desc: "Nilai aset dimutakhirkan dan pembaruan polis dijaga; saat insiden terjadi, notifikasi hingga pembayaran klaim didampingi penuh." },
    ],
    requirements: [
      "Daftar aset dan nilainya: bangunan, mesin, stok, kendaraan (invoice atau pembukuan terakhir)",
      "Gambaran alur usaha: distribusi, ekspor-impor, kunjungan pelanggan, pergerakan kas",
      "Polis yang sedang berjalan dan riwayat klaim (bila ada — bahan audit tumpang tindih)",
      "Data karyawan dan lokasi usaha (untuk pertanggungan tanggung jawab dan kecelakaan)",
      "Kontak pemegang keputusan pembelian (direksi atau pemilik — kecepatan keputusan menentukan premi)",
    ],
    faqs: [
      { q: "Berapa biaya jasa dan berapa premi yang harus disiapkan?", a: "Jasa DIGIMAN.ID dimulai dari Rp 5 juta untuk pemetaan, desain program, dan negosiasi — tertulis penuh di penawaran. Premi sendiri dibayar langsung ke asuradur dan nilainya bergantung jenis risiko, nilai aset, serta riwayat klaim Anda. Hasil tender yang kami jalankan umumnya menekan premi lebih besar daripada jasa yang dibayar." },
      { q: "Bank memaksa polis untuk kredit saya — apakah masih perlu kajian ulang?", a: "Perlu, justru karena itu. Bank mensyaratkan aset jaminan diasuransikan, tetapi polis yang dipasang demi memenuhi syarat sering ditetapkan asal ada: nilai pertanggungan tidak dicek, klausul tidak dibaca. Saat klaim terjadi, potongan underinsurance dan pengecualian yang tidak diperjuangkan jatuh ke Anda — bukan ke bank." },
      { q: "Apa penyebab klaim paling sering ditolak?", a: "Tiga yang paling sering: nilai pertanggungan di bawah nilai sebenarnya, perubahan risiko yang tidak dilaporkan sesuai kewajiban iktikad baik, dan kelengkapan dokumen klaim yang lemah. Ketiganya bisa dicegah jauh sebelum insiden terjadi — dan di sinilah pendampingan kami bekerja, dari penetapan nilai dan kewajiban polis sampai persiapan dokumen saat klaim berjalan." },
    ],
    related: ["bisnis-kontinuitas-bcp", "manajemen-risiko-erm", "pencegahan-fraud-sop", "manajemen-krisis-pr"],
  },
  {
    slug: "forensik-digital",
    tagline: "Jejak digital tak bisa dihapus — asalkan dikumpulkan sebelum disentuh ulang.",
    heroSub:
      "Pengamanan bukti yang sah (chain of custody), analisis perangkat dan log, serta laporan teknis yang kuat di pengadilan. Untuk perusahaan yang datanya atau karyanya dicuri oleh orang dalam, mitra, maupun pihak luar.",
    timeline: "Preservasi bukti 1–3 hari · analisis dan laporan 2–6 minggu",
    intro: [
      "Karyawan yang keluar membawa daftar pelanggan dan harga ke kompetitor; agency menemukan karyanya dipakai klien melampaui lisensi yang dibayar; sistem pesanan diakses dari akun yang bukan haknya — pencurian data dan objek kekayaan intelektual oleh orang dalam adalah fraud yang paling sering diabaikan karena pelakunya pernah dipercaya. Hukum Indonesia mengakui bukti elektronik: UU Informasi dan Transaksi Elektronik beserta perubahannya, dengan teknis pemeriksaannya kini diatur Perma No. 3 Tahun 2023 tentang Tata Cara Pemeriksaan Alat Bukti Elektronik. Namun pengakuan itu bersyarat: integritas bukti harus terjaga dari momen perangkat diamankan, dibuat salinannya (imaging), hingga dianalisis — dan seluruh rantai penanganannya terdokumentasi, itulah chain of custody. Bukti digital yang diutak-atik tanpa prosedur kehilangan kekuatannya, dan kehilangan itu tidak bisa dipulihkan.",
      "Kesalahan yang menghancurkan kasus biasanya dilakukan orang baik-baik: laptop karyawan langsung dibuka dan diperiksa sendiri, akunnya dihapus, chat didelete, atau pelaku dikonfrontasi lebih dulu — memberi waktu untuk membersihkan jejak. Screenshot tanpa hash mudah dibantah dengan tuduhan rekayasa, dan perusahaan yang memeriksa perangkat tanpa prosedur justru bisa dikejar balik di bawah UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi karena memperluas akses tanpa dasar. Hasilnya: tuduhan saling lempar, bukti dianggap tidak sah, sengketa berakhir dengan kerugian di dua sisi. Waktu adalah musuh utama — log server bergilir dan tertimpa, cache terhapus, dan karyawan keluar dari organisasi membawa akunnya.",
      "Respons kami bekerja dalam hitungan jam, bukan minggu: perangkat dan akun yang dicurigai dipreservasi dengan imaging ber-hash dan dokumentasi penanganan yang tahan bantah. Analisis berjalan di salinannya — log akses, email, berkas, metadata — untuk merekonstruksi siapa, kapan, dan apa yang dibawa keluar. Hasilnya dituangkan dalam laporan teknis yang terbaca bagi majelis, penyidik, dan mediator, lengkap dengan kronologi terverifikasi. Dari posisi bukti itu kami bantu menentukan jalur tindakannya: somasi, gugatan perdata, laporan pidana, atau kombinasi — dengan koordinasi ke penegak hukum dan kuasa hukum bila dibutuhkan.",
    ],
    benefits: [
      { title: "Bukti yang tahan bantah", desc: "Imaging ber-hash, dokumentasi penanganan, dan rantai pemegang yang jelas — bukti Anda tidak mudah dijatuhkan dengan tuduhan rekayasa." },
      { title: "Kronologi terverifikasi", desc: "Log, email, dan metadata disusun menjadi cerita: siapa, kapan, dan apa yang dibawa keluar — bukan dugaan, melainkan rekonstruksi." },
      { title: "Laporan yang dibaca forum hukum", desc: "Format laporan disusun untuk majelis, penyidik, dan mediator — temuan teknis yang bisa dipahami pengambil keputusan." },
      { title: "Risiko hukum dua arah terkendali", desc: "Prosedur menghormati batas pelindungan data pribadi — tuntutan Anda tidak berbalik menjadi keluhan terhadap perusahaan." },
      { title: "Keputusan tindakan yang tepat", desc: "Kekuatan bukti dinilai lebih dulu — somasi, gugatan, laporan pidana, atau perundingan dipilih karena posisinya, bukan karena emosi." },
    ],
    process: [
      { title: "Preservasi darurat", desc: "Perangkat dan akun diamankan, dibuat salinan forensik ber-hash, dan seluruh penanganan didokumentasikan — sebelum ada kesempatan disentuh ulang." },
      { title: "Analisis forensik", desc: "Salinan dianalisis: log akses, berkas, email, metadata — jejak pergerakan data direkonstruksi pada salinan, bukan pada bukti asli." },
      { title: "Rekonstruksi & laporan", desc: "Temuan disusun menjadi kronologi dan laporan teknis — ringkasan eksekutif untuk direksi, lampiran metodologis untuk forum hukum." },
      { title: "Dukungan tindakan hukum", desc: "Jalur tindakan dipilih dan dijalankan: somasi, gugatan, laporan pidana — termasuk koordinasi penyidik dan penjelasan teknis bila dibutuhkan." },
    ],
    requirements: [
      "Kronologi awal insiden dan dugaan pihak yang terlibat (nama, peran, akses)",
      "Perangkat dan akun yang dicurigai — jangan dioperasikan dulu, kami pandu pengamanannya",
      "Akses ke log server, email korporat, dan aplikasi yang relevan (bila dimiliki perusahaan)",
      "Kontrak kerja, NDA, atau kode etik yang menaungi pelaku (dasar pelanggaran yang ditunjuk)",
      "Bukti kondisi sebelum insiden: versi data, lisensi, atau kepemilikan yang diklaim",
    ],
    faqs: [
      { q: "Apakah hasil forensik digital bisa dipakai di pengadilan?", a: "Bisa, selama prosedurnya benar. Bukti elektronik diakui UU ITE dan pemeriksaannya diatur Perma No. 3 Tahun 2023 — syaratnya integritas dan keabsahan pengambilan: salinan forensik ber-hash, dokumentasi penanganan, dan laporan yang metodologis. Screenshot asal-asalan sebaliknya mudah dibantah, dan begitu integritasnya diragukan, bukti yang sama sulit dipulihkan." },
      { q: "Berapa biaya forensik digital?", a: "Layanan dimulai dari Rp 10 juta untuk kasus dengan cakupan sederhana — satu perangkat atau akun dengan pertanyaan forensik yang terbatas. Biaya naik seiring jumlah perangkat, volume data, dan kedalaman analisis. Estimasi tertulis kami sampaikan setelah preservasi awal, sehingga kelanjutannya Anda putuskan dengan angka yang jelas." },
      { q: "Bolehkah saya langsung membuka laptop karyawan yang dicurigai?", a: "Jangan — setiap pembukaan dan operasional bisa mengubah data di dalamnya, melemahkan bukti, bahkan memicu persoalan pelindungan data bagi perusahaan. Amankan perangkatnya secara fisik, catat siapa yang terakhir memegang, lalu hubungi kami. Preservasi yang benar berlangsung cepat dan murah; memulihkan bukti yang terlanjur rusak hampir mustahil." },
    ],
    related: ["respons-insiden-data", "perlindungan-domain-brand", "pencegahan-fraud-sop", "sengketa-bisnis-mediasi"],
  },
  {
    slug: "manajemen-krisis-pr",
    tagline: "Krisis tidak memberi jadwal — ia hanya memberi waktu yang sangat sedikit.",
    heroSub:
      "Protokol krisis yang siap pakai: peta skenario, tim dan rantai keputusan, holding statement, serta pemulihan pasca-krisis. Untuk perusahaan yang namanya bisa viral negatif dalam hitungan jam.",
    timeline: "Penyusunan protokol 2–4 minggu · simulasi menyesuaikan jadwal tim",
    intro: [
      "Satu unggahan keluhan pelanggan bisa berubah menjadi ribuan repost sebelum direksi selesai rapat — di era umpan pintar, keputusan publik tentang perusahaan Anda dibentuk dalam 24 jam pertama, sering kali oleh orang yang tidak tahu kenyataan penuhnya. Krisis tidak memilih industri: kejutan produk di kelas konsumen, kebocoran data pelanggan, kecelakaan operasional, atau karyawan yang viral karena ulahnya di tempat kerja. Kewajiban hukum yang menyertai tak boleh terlupa saat panik: pemberitahuan atas kebocoran data pribadi diatur UU No. 27 Tahun 2022, hak konsumen dilindungi UU No. 8 Tahun 1999, dan pernyataan yang salah ketik di masa krisis bisa berujung persoalan UU ITE. Perusahaan tanpa protokol membiarkan jam-jam paling menentukan itu diisi keputusan spontan dari orang yang salah posisi.",
      "Pola kesalahan krisis nyaris selalu sama: diam terlalu lama sampai ruang informasi diisi pihak lain, menjawab defensif seolah pelanggan adalah musuh, menghapus komentar yang justru menambah api, dan membiarkan setiap karyawan bicara versinya sendiri di ruang pribadi. Perusahaan besar pernah jatuh bukan karena insidennya besar, melainkan karena responsnya buruk — publik lebih mudah memaafkan produk yang gagal daripada perusahaan yang berbohong. Dan setelah badai mereda, kebanyakan tim pulang tanpa evaluasi: pola yang sama menunggu untuk berulang, kali ini lebih cepat karena krisis sebelumnya sudah membekas di ingatan publik.",
      "Kami menyiapkan segalanya saat kepala masih dingin: peta skenario krisis yang spesifik pada industri Anda — bukan daftar generik — dengan level dampak, pemicu, dan pemegang keputusan yang disebut nama. Struktur tim krisis, rantai persetujuan, dan batas waktu respons dikunci; holding statement serta naskah respons per skenario disiapkan siap pakai, termasuk protokol monitoring yang memanggil tim sebelum isu membesar. Protokol lalu diuji lewat simulasi, karena dokumen yang tak pernah dilatih akan gagal tepat saat dibutuhkan — dan pasca-krisis, kami dampingi evaluasi serta strategi pemulihan reputasi.",
    ],
    benefits: [
      { title: "Jam pertama terkendali", desc: "Holding statement siap pakai dan rantai keputusan yang jelas — perusahaan Anda tidak mencari kata di tengah badai." },
      { title: "Satu suara resmi", desc: "Siapa bicara, atas nama siapa, dengan persetujuan siapa — sudah disepakati, sehingga versi ganda yang saling menanggalkan tidak muncul." },
      { title: "Keputusan cepat, bukan spontan", desc: "Skenario dan eskalasi disepakati saat kepala dingin — keputusan di jam krisis tinggal menjalankan rencana." },
      { title: "Tim terlatih, bukan sekadar terdokumen", desc: "Simulasi membuat protokol hidup di kepala tim — bukan berkas yang baru dibuka pertama kali saat krisis datang." },
      { title: "Pemulihan terukur", desc: "Pasca-krisis ada evaluasi dan strategi memulihkan kepercayaan — bukan sekadar menunggu publik lupa." },
    ],
    process: [
      { title: "Peta risiko & skenario", desc: "Celah krisis yang nyata pada industri Anda dipetakan dan diprioritaskan — setiap skenario mendapat level dampak dan pemicunya." },
      { title: "Tim & rantai keputusan", desc: "Struktur tim krisis disusun dengan pemegang peran yang disebut nama — keputusan apa yang boleh diambil dalam berapa menit." },
      { title: "Naskah & protokol respons", desc: "Holding statement per skenario, protokol monitoring, dan alur eskalasi disiapkan — naskah diuji baca, bukan disimpan." },
      { title: "Simulasi & pemulihan", desc: "Tim menjalankan simulasi skenario utama dan celahnya diperbaiki; pasca-insiden nyata, evaluasi dan strategi pulih dijalankan." },
    ],
    requirements: [
      "Gambaran risiko usaha: produk yang disentuh publik, data pelanggan, operasional lapangan",
      "Struktur organisasi dan pemegang keputusan (direksi, komunikasi, hukum)",
      "Kanal resmi yang aktif: akun media sosial, situs, kontak media",
      "Isu atau keluhan yang pernah muncul, sekecil apa pun (bahan peta skenario)",
      "Ketersediaan tim mengikuti simulasi — rencana tanpa latihan hanyalah dokumen",
    ],
    faqs: [
      { q: "Berapa biaya dan apa yang menaikkan harganya?", a: "Penyusunan protokol dasar dimulai dari Rp 7,5 juta — mencakup peta skenario, struktur tim, dan naskah respons untuk satu entitas. Cakupan naik seiring jumlah unit, lokasi, dan kedalaman simulasi. Seluruhnya tertulis di penawaran sebelum pekerjaan dimulai." },
      { q: "Krisis sedang terjadi sekarang — apakah masih ada waktu?", a: "Ada, dan itulah jalur darurat kami: dalam 1x24 jam kami bantu menahan situasi lewat holding statement, monitoring, dan eskalasi agar tidak bertambah parah. Setelah situasi terkendali, protokol permanen dibangun dari pembelajaran insiden yang baru terjadi. Krisis yang ditangani benar justru menjadi bahan protokol terbaik." },
      { q: "Apakah protokol menjamin nama kami selamat dari viral?", a: "Tidak ada yang bisa menjamin viral tidak terjadi — yang bisa dijamin adalah respons Anda tidak memperburuknya. Sebagian besar kerusakan reputasi lahir dari salah langkah respons, bukan dari insiden aslinya, dan protokol yang terlatih memangkas persis bagian itu. Publik memaafkan kesalahan operasional jauh lebih mudah daripada perusahaan yang kacau saat menjawab." },
    ],
    related: ["manajemen-reputasi-online", "respons-insiden-data", "asuransi-bisnis", "tata-kelola-korporat"],
  },
  {
    slug: "bisnis-kontinuitas-bcp",
    tagline: "Mesin boleh mati hari ini — bisnis tidak harus ikut mati.",
    heroSub:
      "Rencana Kelangsungan Bisnis (BCP): analisis dampak, target RTO dan RPO, rencana per skenario, serta uji simulasi berkala. Untuk perusahaan yang operasionalnya disentuh server, vendor tunggal, dan bencana.",
    timeline: "Penyusunan 4–8 minggu menyesuaikan kompleksitas · uji simulasi berkala",
    intro: [
      "Rantai yang menopang bisnis modern panjang dan tak terlihat: server dan cloud, jaringan listrik, satu vendor pengiriman, satu orang yang memegang konfigurasi, sampai jalan menuju gudang. Kegagalannya tidak harus bencana alam — ransomware mengunci seluruh berkas, datacenter mati tanpa pemberitahuan, vendor tunggal gulung tikar, kebakaran melanda satu lantai kantor. Kerangka menanganinya sudah ada: SNI ISO 22301 tentang manajemen kelangsungan bisnis (Business Continuity Management System), yang untuk sektor jasa keuangan bahkan diwajibkan regulator melalui POJK No. 11/POJK.03/2022. Kewajiban teknisnya berlapis: PP No. 71 Tahun 2019 menuntut sistem elektronik yang andal, dan UU No. 27 Tahun 2022 menuntut kemampuan memulihkan data pribadi.",
      "Kegagalan paling klasik bukan tidak punya cadangan, melainkan punya cadangan yang tak pernah diuji: backup berjalan bertahun-tahun, dan saat dipulihkan ternyata gagal atau isinya bukan yang dibutuhkan. RTO dan RPO tak pernah didefinisikan sehingga setiap keputusan pemulihan menjadi taruhan; rencana kelangsungan hanya hidup di kepala satu orang yang bisa resign sewaktu-waktu; vendor kritis tidak punya penerus. Simulasi dianggap membuang waktu sampai bencana benar-benar datang — dan saat itu seluruh organisasi berimprovisasi dalam kepanikan, dengan pelanggan menonton.",
      "Kami menyusunnya sistematis: analisis dampak bisnis (BIA) memetakan proses mana yang paling merugikan bila mati dan berapa lama toleransinya, lalu target RTO dan RPO ditetapkan per proses — bukan asal satu angka untuk semua. Strategi kelangsungan disusun menyesuaikan: backup yang diuji restore-nya, redundansi sistem, vendor alternatif, tempat kerja darurat, hingga urutan pemanggilan tim. Rencana dituangkan per skenario dalam dokumen yang bisa dijalankan petugas mana pun, lalu diuji lewat simulasi berkala — karena rencana yang tidak diuji belum bisa disebut rencana.",
    ],
    benefits: [
      { title: "Proses kritis terlindungi dulu", desc: "BIA memetakan proses yang paling menyakitkan bila berhenti — sumber daya pengamanan diarahkan ke sana, bukan tersebar asal rapi." },
      { title: "Target pemulihan yang terukur", desc: "RTO dan RPO ditetapkan per proses — keputusan pemulihan tidak lagi menjadi taruhan saat krisis." },
      { title: "Rencana per skenario, siap jalankan", desc: "Server mati, vendor gagal, bencana lokasi: masing-masing punya jalannya — bisa dijalankan petugas mana pun, bukan hanya penyusunnya." },
      { title: "Teruji sebelum dibutuhkan", desc: "Simulasi berkala menguji rencana dan membongkar asumsi — kegagalan ditemukan saat masih murah untuk diperbaiki." },
      { title: "Nilai plus di hadapan mitra", desc: "Dokumen kelangsungan yang teruji menjadi modal di tender, syarat kontrak enterprise, audit siber, dan due diligence." },
    ],
    process: [
      { title: "Analisis dampak bisnis (BIA)", desc: "Proses bisnis dipetakan bersama toleransi gangguannya — prioritas pemulihan disusun dari dampak finansial dan reputasi." },
      { title: "Desain strategi & target", desc: "RTO dan RPO ditetapkan per proses; strategi backup, redundansi, dan vendor cadangan dipilih menyesuaikan." },
      { title: "Penyusunan rencana per skenario", desc: "Rencana ditulis per skenario dengan langkah konkret, urutan pemanggilan, dan daftar kontak — dokumen yang bisa dijalankan, bukan arsip." },
      { title: "Uji simulasi & pemeliharaan", desc: "Simulasi menguji rencana dan timnya, temuan diperbaiki — rencana diperbarui setiap kali bisnis dan sistemnya berubah." },
    ],
    requirements: [
      "Peta proses bisnis dan sistem yang menaunginya (bila belum ada, kami susun bersama)",
      "Akses atau koordinasi dengan tim IT untuk informasi infrastruktur dan vendor",
      "Daftar vendor kritis beserta status kontraknya",
      "Kesediaan menetapkan toleransi gangguan per proses (kami pandu menentukannya)",
      "Komitmen uji simulasi — rencana yang tak pernah diuji belum selesai dibuat",
    ],
    faqs: [
      { q: "Berapa biaya dan berapa lama penyusunannya?", a: "Penyusunan dimulai dari Rp 10 juta untuk organisasi dengan proses yang tidak terlalu berlapis, berlangsung 4 hingga 8 minggu menyesuaikan kompleksitas. Perusahaan multi-lokasi dengan sistem yang saling menumpuk dikerjakan bertahap. Seluruh cakupan tertulis di penawaran sebelum pekerjaan dimulai." },
      { q: "Saya sudah punya backup harian — apakah itu sudah BCP?", a: "Backup hanyalah satu komponen dari kelangsungan bisnis. BCP menutup orang, tempat, listrik, vendor, komunikasi, dan keputusan — termasuk menjawab pertanyaan tentang backup Anda sendiri: apakah restore-nya pernah diuji, berapa cepat, dan apakah versinya yang dibutuhkan. Banyak perusahaan baru tahu jawabannya justru pada hari mereka paling membutuhkannya." },
      { q: "Apakah BCP kewajiban hukum?", a: "Untuk sektor tertentu ya — lembaga jasa keuangan diwajibkan memiliki sistem manajemen kelangsungan usaha melalui POJK No. 11/POJK.03/2022. Di luar itu ia opsional, tetapi praktisnya makin sering diminta: tender, kontrak enterprise, dan audit siber menanyainya — sementara PP No. 71 Tahun 2019 dan UU Pelindungan Data Pribadi menuntut keandalan sistem serta pemulihan data yang hanya bisa dibuktikan dengan rencana nyata." },
    ],
    related: ["audit-siber", "asuransi-bisnis", "manajemen-risiko-erm", "aplikasi-sistem"],
  },
  {
    slug: "pencegahan-fraud-sop",
    tagline: "Fraud tidak datang dari orang jahat saja — ia datang dari pintu yang lupa dikunci.",
    heroSub:
      "Pemetaan celah fraud, kontrol internal, pemisahan tugas, SOP pengadaan dan pembayaran, salur pelaporan, serta audit rutin. Untuk pemilik yang kas dan pengadaannya tumbuh lebih cepat dari pengawasannya.",
    timeline: "Pemetaan dan desain 3–6 minggu · implementasi menyusul",
    intro: [
      "Kasus fraud di dunia usaha hampir selalu memenuhi segitiga yang sama: tekanan, kesempatan, dan rasionalisasi — dari ketiganya, hanya kesempatan yang bisa dikendalikan perusahaan. Bentuknya di lapangan monoton dan dikenal luas: pembelian fiktif dan kolusi dengan pemasok, harga yang dinaikkan diam-diam sebelum invoice, penggelapan kas penerimaan, karyawan fiktif dan lembur rekaan, sampai stok yang menyusut tanpa penjelasan. Kerugian terbesarnya tak selalu angkanya: data pelanggan yang bocor bersama karyawan yang keluar, tim yang dingin karena yang salah justru naik jabatan, dan reputasi yang runtuh ketika hal itu sampai ke publik. Kerangka hukumnya tegas — penggelapan dan penipuan mengancam di KUHP Pasal 372 dan 378, korupsi diatur UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001, dan hasil fraud dapat terjerat UU No. 8 Tahun 2010 tentang pencucian uang.",
      "Kesalahan desain kontrol yang paling umum adalah menyamarata: semua dokumen dicek dua kali, semua orang dicurigai — proses mati lemah dan kontrolnya sendiri dilanggar demi pekerjaan selesai. Di ujung lain, pintu-pintu besar justru terbuka: satu orang memegang pengajuan, persetujuan, pembayaran, dan pencatatan sekaligus; audit hanya datang setahun sekali; salur pelaporan dibuat tanpa proteksi pelapor sehingga tak seorang pun berani menyalakannya. Saat fraud akhirnya ketahuan, tanggapan spontan yang pertama — membentak, mengganti kunci, menghapus akses — justru mengacaukan bukti dan memberi pelaku posisi untuk berpaling.",
      "Kami mulai dari pemetaan celah per proses — kas, pengadaan, stok, gaji, penjualan — dan menyusun prioritasnya berdasarkan nilai kerugian yang mungkin, bukan asal rapi. Kontrol yang kami desain proporsional ukuran usaha: pemisahan tugas yang masuk akal untuk tim kecil, matriks otorisasi, SOP pengadaan dan pembayaran, rekonsiliasi rutin, serta salur pelaporan dengan kebijakan proteksi pelapor yang tertulis. Seluruhnya ditutup dengan indikator pemantauan dan jadwal audit — dan bila kasus sudah berjalan, perolehan buktinya kami koordinasikan dengan layanan forensik digital agar posisi hukum tidak hancur di menit pertama.",
    ],
    benefits: [
      { title: "Pintu besar dikunci lebih dulu", desc: "Celah dengan potensi kerugian terbesar ditangani prioritas — kontrol tidak diboroskan pada pintu yang kecil." },
      { title: "Kontrol yang menyehatkan proses", desc: "Desainnya proporsional ukuran tim dan usaha — keamanan meningkat tanpa membekukan operasional." },
      { title: "Informasi mengalir ke atas", desc: "Salur pelaporan dengan proteksi pelapor yang jelas — isu kecil didengar sebelum menjadi bencana." },
      { title: "Vendor dan pembelian tersaring", desc: "SOP pengadaan menutup ruang kolusi dan harga fiktif — setiap rupiah yang keluar punya jejak yang bisa diperiksa." },
      { title: "Bukti siap bila terjadi", desc: "Dokumentasi dan prosedur yang tertata membuat tindakan hukum mungkin — fraud yang ketahuan tidak lagi berakhir tanpa daya." },
    ],
    process: [
      { title: "Pemetaan celah fraud", desc: "Proses kas, pengadaan, stok, gaji, dan penjualan diperiksa dengan lensa kesempatan — celah dinilai dari potensi kerugiannya." },
      { title: "Desain kontrol & pemisahan tugas", desc: "Matriks otorisasi dan pemisahan tugas disusun menyesuaikan ukuran tim — kontrol besar ditempatkan di pintu besar." },
      { title: "SOP & salur pelaporan", desc: "Alur pengadaan, pembayaran, dan penyimpanan aset ditulis baku; salur pelaporan dibuat dengan proteksi pelapor yang tertulis." },
      { title: "Pemantauan & pembaruan", desc: "Indikator dan jadwal audit menutup siklus — kontrol dievaluasi setiap kali proses atau orangnya berubah." },
    ],
    requirements: [
      "Akses pemahaman proses: alur kas, pengadaan, stok, gaji, dan penjualan",
      "Struktur organisasi dan siapa memegang otorisasi saat ini",
      "SOP atau pedoman yang sudah berjalan (bila ada — kami mulai dari sini)",
      "Insiden atau kecurangan yang pernah terjadi, termasuk yang hanya berupa dugaan",
      "Komitmen pimpinan — kontrol tanpa teladan dari atas akan bubar sendiri",
    ],
    faqs: [
      { q: "Usaha kami kecil, lima orang — apakah kontrol semacam ini tidak berlebihan?", a: "Justru usaha kecil paling rentan, karena pemisahan tugas nyaris tidak ada dan pengawasan bergantung sepenuhnya pada kepercayaan. Kontrolnya tetap ada, hanya desainnya ringan: persetujuan ganda untuk pembayaran, rekonsiliasi kas rutin, akses sistem yang dibatasi. Bukan birokrasi tebal — hanya pintu yang dikunci di tempat yang benar." },
      { q: "Berapa biaya layanannya?", a: "Pemetaan celah dan desain kontrol dimulai dari Rp 7,5 juta; implementasi SOP serta pelatihan tim dihitung menyusul menyesuaikan cakupan, dan audit berkala bersifat opsional per periode. Seluruhnya tertulis di penawaran. Dibandingkan dengan satu kasus fraud yang lolos, angkanya kecil." },
      { q: "Kami menduga sedang ada fraud berjalan — apa urutan langkahnya?", a: "Jangan konfrontasi lebih dulu — pelaku yang sadar akan membersihkan jejak dan menyiapkan pembelaan. Amankan akses dan bukti secara terdokumentasi (kami koordinasikan dengan forensik digital), tentukan skopnya, lalu pilih tindakan: sanksi internal, somasi, gugatan, atau laporan pidana. Urutan inilah yang menentukan apakah kasus berakhir dengan pemulihan kerugian atau sekadar rasa sakit." },
    ],
    related: ["forensik-digital", "tata-kelola-korporat", "iso-37001-antisuap", "manajemen-risiko-erm"],
  },
  {
    slug: "manajemen-risiko-erm",
    tagline: "Risiko yang dipetakan tidak pernah benar-benar mengejutkan.",
    heroSub:
      "Manajemen Risiko Terintegrasi (ERM): registrasi risiko dengan pemiliknya, matriks dan toleransi, rencana mitigasi terukur, serta pemantauan yang hidup di ritme rapat. Untuk direksi — dan untuk perusahaan yang menghadapi investor atau bank.",
    timeline: "Pendirian kerangka 4–8 minggu · siklus pembaruan berkala",
    intro: [
      "Risiko menyerang dari segala arah dan tiap divisi menyebutnya dengan bahasanya sendiri: operasional menyebut gangguan mesin, keuangan menyebut kurs dan piutang, legal menyebut izin yang terlambat, komersial menyebut pesaing baru — dan karena bahasanya berbeda, keputusan lintas divisi selalu tumpang tindih atau bolong. Enterprise Risk Management menyatukan semuanya dalam satu kerangka yang dirujuk SNI ISO 31000:2018: risiko didaftarkan, diberi pemilik, dinilai dengan skala yang sama, dimitigasi, dan dipantau. Bagi perusahaan perseroan, pengelolaan risiko bahkan menjadi kewajiban melalui PP No. 54 Tahun 2012, sementara emiten dituntut POJK No. 33/POJK.04/2014 — dan bagi perusahaan apa pun yang menghadapi investor atau bank, registrasi risiko yang rapi adalah bahan wajib due diligence. UU No. 40 Tahun 2007 sendiri menempatkan pengawasan risiko sebagai bagian tugas direksi dan komisaris.",
      "Kegagalan ERM punya pola yang bisa diduga sebelum dimulai: risiko hanya hidup di kepala dan tak pernah tertulis, pemilik risiko tidak jelas sehingga tanggung jawab semua orang berarti tak ada yang bertanggung jawab, dan mitigasi menjadi wacana rapat tanpa indikator serta tenggat. Matriks risiko pun kerap dibuat sekali demi memenuhi auditor, lalu mati di folder — dan ketika kejadian buruk datang, ia selalu dilabeli tak terbayangkan, padahal ia ada di daftar yang tak pernah dibuka. Biaya paling mahal bukan biaya menyusun ERM, melainkan keputusan ekspansi, produk baru, atau vendor besar yang diambil dengan firasat karena tidak ada tolok ukur risikonya.",
      "Kami membangunnya lewat workshop lintas divisi — bukan formular yang diisi sendirian di meja konsultan: risiko diidentifikasi bersama orang yang menghadapinya setiap hari, lalu dinilai dengan skala dampak dan kemungkinan yang disepakati. Registrasi risiko diberi pemilik bernama, toleransi (risk appetite) ditetapkan bersama pimpinan, dan setiap risiko utama mendapat rencana mitigasi dengan indikator serta tenggat. Siklus pembaruannya dirancang sejak awal untuk masuk ke ritme rapat manajemen — karena ERM yang tidak dibicarakan berkala akan mati dalam satu kuartal.",
    ],
    benefits: [
      { title: "Satu bahasa risiko", desc: "Skala dan istilah yang sama untuk seluruh divisi — keputusan lintas fungsi tidak lagi tersesat dalam terjemahan." },
      { title: "Setiap risiko punya pemilik", desc: "Registrasi menyebut nama — tidak ada lagi risiko milik semua orang yang diurus tak seorang pun." },
      { title: "Mitigasi yang hidup", desc: "Rencana dengan indikator dan tenggat dipantau di rapat rutin — bukan wacana yang menunggu kejadian." },
      { title: "Dipercaya pemberi dana", desc: "Registrasi risiko yang rapi memuluskan due diligence investor dan kredit bank — pertanyaan dijawab dokumen, bukan improvisasi." },
      { title: "Strategi dengan tolok ukur", desc: "Ekspansi, produk baru, dan vendor besar dinilai terhadap profil risiko — keputusan besar tidak lagi bergantung firasat." },
    ],
    process: [
      { title: "Workshop identifikasi risiko", desc: "Risiko diangkat lintas divisi bersama orang yang menghadapinya — strategis, operasional, keuangan, kepatuhan." },
      { title: "Registrasi, skoring & toleransi", desc: "Risiko dinilai dengan skala dampak dan kemungkinan yang disepakati; toleransi ditetapkan bersama pimpinan." },
      { title: "Rencana mitigasi & pemilik", desc: "Setiap risiko utama diberi pemilik bernama, mitigasi terukur, dan tenggat — registrasi menjadi satu sumber kebenaran." },
      { title: "Integrasi monitoring & pembaruan", desc: "Laporan risiko masuk ritme rapat manajemen; daftar dinilai ulang tiap perubahan besar — siklusnya dijaga hidup." },
    ],
    requirements: [
      "Kepemimpinan dan perwakilan divisi yang dapat hadir di workshop",
      "Gambaran bisnis dasar: proses, kondisi keuangan, kontrak besar, status perizinan",
      "Insiden atau kerugian yang pernah terjadi (bahan belajar registrasi awal)",
      "Target strategis 1–3 tahun — risiko dinilai terhadap tujuan, bukan di ruang hampa",
      "Kesediaan memasukkan risiko ke ritme rapat manajemen secara rutin",
    ],
    faqs: [
      { q: "Apakah ERM hanya untuk korporasi besar?", a: "Kewajiban formal memang menarget perusahaan perseroan dan emiten melalui PP No. 54 Tahun 2012 dan POJK, tetapi kerangkanya bisa diukur sesuai skala. Untuk usaha menengah, versi ringkasnya tetap berisi daftar risiko, pemilik, mitigasi, dan pantauan — dan justru di sanalah nilainya terasa paling cepat, karena keputusan besar datang sering dan cepat." },
      { q: "Berapa biaya pendirian kerangka ERM?", a: "Kerangka dasar dimulai dari Rp 10 juta untuk organisasi satu lokasi; jumlah divisi, lokasi, dan kompleksitas proses menaikkan cakupan. Workshop lanjutan serta pendampingan tinjauan kuartalan bersifat opsional dan dihitung terpisah. Seluruhnya kami tuliskan di penawaran sebelum pekerjaan dimulai." },
      { q: "Bagaimana memastikan ERM tidak berhenti sebagai dokumen mati?", a: "Ada tiga kuncinya: pemilik risiko yang disebut nama, indikator yang benar-benar diukur, dan tempat tetap di ritme rapat manajemen. Kami merancang ketiganya sejak awal, bukan menambahkannya belakangan. Bila diminta, kami juga mendampingi tinjauan periodik hingga siklusnya berdiri sendiri." },
    ],
    related: ["bisnis-kontinuitas-bcp", "asuransi-bisnis", "pencegahan-fraud-sop", "tata-kelola-korporat"],
  },
  {
    slug: "sengketa-bisnis-mediasi",
    tagline: "Sengketa selesai di meja perundingan jauh lebih murah daripada di kursi pengadilan.",
    heroSub:
      "Analisis posisi hukum, somasi terstruktur, mediasi, arbitrase (UU No. 30 Tahun 1999, lembaga seperti BANI), hingga koordinasi litigasi. Untuk perusahaan yang terlibat sengketa kontrak, kemitraan, atau penagihan besar.",
    timeline: "Analisis posisi 3–7 hari · mediasi 1–3 bulan · arbitrase 6–12 bulan",
    intro: [
      "Sengketa bisnis jarang lahir dari niat jahat — kebanyakan lahir dari kontrak yang terlalu ringkas: pekerjaan berubah tanpa dibuat baku, pembayaran menunggu pencairan pihak lain, standar kualitas diperdebatkan setelah barang diterima. Hukum menyediakan tangga yang bisa dinaiki berjenjang: perundingan, mediasi yang teknisnya diatur PERMA No. 1 Tahun 2016, arbitrase yang dasarnya UU No. 30 Tahun 1999 dengan lembaga seperti BANI, dan gugatan ke pengadilan negeri. Dasar materinya pun jelas — KUHPerdata membebankan ganti rugi dan bunga pada wanprestasi. Pengadilan dapat berjalan bertahun-tahun dengan biaya yang menumpuk seiring waktu, sementara banyak sengketa sebenarnya bisa selesai di tingkat yang lebih rendah — asalkan posisi hukumnya dipahami sejak awal.",
      "Kesalahan paling mahal adalah menggugat sebelum menganalisis — gugatan yang lemah berarti kalah dua kali, sekali pada biaya dan sekali pada waktu. Yang kedua: membakar jembatan sejak surat pertama — mitra hari ini kerap menjadi pasar esok, dan nada somasi yang murka menghapus kemungkinan solusi dagang. Yang ketiga: mengabaikan klausul arbitrase yang tertulis di kontrak sendiri, sehingga gugatan jatuh di eksepsi kompetensi dan waktu terbuang. Dan yang paling senyap: menunda menata bukti — korespondensi tercecer, saksi keluar, ingatan memudar — sengketa yang tertunda biasanya berakhir dengan bukti yang kurus.",
      "Kami memulai dari analisis posisi hukum: seberapa kuat dokumen dan bukti, apa target hasil yang realistis, dan berapa biaya dibanding nilai yang dipertaruhkan — direksi menerima angka sebelum memilih jalan. Dari sana strategi disusun berjenjang: somasi terstruktur yang memulai mula-mula lalai, mediasi dengan pihak ketiga yang netral, arbitrase bila klausulnya ada dan nilai sengketanya besar, serta koordinasi kuasa hukum litigasi bila pengadilan tidak terhindarkan. Tujuan kami bukan memenangkan drama, melainkan menutup sengketa dengan biaya, waktu, dan kerusakan hubungan yang paling kecil.",
    ],
    benefits: [
      { title: "Posisi hukum jelas sebelum uang keluar", desc: "Kekuatan bukti dan target realistis dianalisis lebih dulu — memutuskan gugat atau damai menjadi keputusan dengan angka, bukan amarah." },
      { title: "Waktu dan biaya terkendali", desc: "Mediasi berjalan bulanan, arbitrase tahunan — bukan pengadilan bertahun-tahun dengan biaya yang terus menumpuk." },
      { title: "Hubungan bisnis terselamatkan bila bisa", desc: "Jalur perundingan dan mediasi membuka solusi dagang — penggantian pekerjaan, restrukturisasi pembayaran — yang gugatan tidak mampu hasilkan." },
      { title: "Putusan yang mengikat dan eksekutabel", desc: "Arbitrase sesuai UU No. 30 Tahun 1999 menghasilkan putusan final dan mengikat — tepat untuk sengketa bernilai besar." },
      { title: "Strategi dipilih posisi, bukan emosi", desc: "Somasi, mediasi, arbitrase, gugatan — tiap anak tangga dipilih karena posisinya memang di sana." },
    ],
    process: [
      { title: "Analisis posisi hukum & bukti", desc: "Kontrak, korespondensi, dan bukti kinerja ditelaah — memo posisi memetakan kekuatan, kelemahan, dan target hasil yang realistis." },
      { title: "Somasi & persiapan perundingan", desc: "Somasi terstruktur dikirim dengan bukti terima — membuka pintu negosiasi sekaligus mengunci mula-mula lalai." },
      { title: "Mediasi atau arbitrase", desc: "Perundingan didampingi dengan strategi dan batas bawah yang jelas; bila klausul arbitrase ada, pengajuan ke lembaga seperti BANI disiapkan penuh." },
      { title: "Eksekusi hasil & litigasi bila perlu", desc: "Perjanjian dan putusan diterjemahkan menjadi tindakan; bila pengadilan tak terhindarkan, kuasa hukum litigasi kami koordinasikan." },
    ],
    requirements: [
      "Kontrak dan seluruh lampirannya: PO, SPK, perjanjian kerja sama, adendum",
      "Bukti kinerja dan pembayaran: invoice, bukti transfer, berita acara, korespondensi",
      "Kronologi sengketa dan tawaran yang pernah diajukan para pihak",
      "Target hasil yang dapat diterima: uang, pengulangan pekerjaan, atau pengakhiran hubungan",
      "Kejelasan pihak yang berwenang mengambil keputusan dan menandatangani perdamaian",
    ],
    faqs: [
      { q: "Berapa biaya dan lama mediasi dibanding menggugat?", a: "Jasa analisis posisi dan pendampingan kami mulai dari Rp 7,5 juta di luar biaya lembaga atau mediator, dan mediasi umumnya selesai dalam 1 hingga 3 bulan. Gugatan pengadilan dapat berjalan bertahun-tahun dengan biaya yang terus menumpuk, sedangkan arbitrase berjalan 6 hingga 12 bulan dengan biaya lembaga yang lebih besar — masuk akal untuk sengketa bernilai besar. Perbandingan lengkapnya kami sertakan di memo analisis posisi agar keputusan direksi berbasis angka." },
      { q: "Kontrak saya memuat klausul arbitrase — bisakah tetap menggugat ke pengadilan?", a: "Bisa diajukan, tetapi pihak lawan umumnya mengangkat eksepsi kompetensi dan majelis akan mengembalikan penyelesaiannya ke arbitrase sesuai UU No. 30 Tahun 1999. Pengecualiannya hanya bila para pihak bersama-sama menegaskan menghentikan klausul itu. Karena itu rumusan klausulnya kami periksa lebih dulu sebelum strategi dipilih." },
      { q: "Apakah hasil mediasi benar-benar bisa dieksekusi?", a: "Hasil mediasi dituangkan dalam perjanjian perdamaian yang mengikat para pihak menurut KUHPerdata, dan bila perlu dikukuhkan dalam akta otentik hingga berkekuatan sebagai titel eksekusi. Dalam praktik, perjanjian yang disusun dengan benar dan disertai jaminan sebagian besar ditepati. Karena itu kami selalu menyertakan mekanisme jaminan dan konsekuensi bila angsuran atau kewajiban macet." },
    ],
    related: ["legal-drafting", "penagihan-piutang-legal", "sengketa-tanah-penyelesaian", "forensik-digital"],
  },
  {
    slug: "penagihan-piutang-legal",
    tagline: "Piutang yang dijaga hati saja tidak pernah cair — ia cair karena prosedur.",
    heroSub:
      "Audit dokumen utang, somasi legal, perjanjian angsuran berjamin, gugatan, hingga eksekusi jaminan fidusia dan hak tanggungan. Untuk pemilik usaha yang kasnya tertahan di neraca orang lain.",
    timeline: "Somasi 1–2 minggu · perjanjian 2–6 minggu · gugatan menyesuaikan tingkat",
    intro: [
      "Piutang macet bukan sekadar angka di neraca — itu modal kerja Anda yang tinggal di neraca orang lain, sementara gaji, stok, dan cicilan di sisi Anda tetap jatuh tempo. Hukum menyediakan tangga penagihan yang dinaiki berurutan: pengingat formal, somasi yang memulai mula-mula lalai menurut KUHPerdata, perjanjian angsuran dengan jaminan, gugatan, hingga eksekusi. Bagi debitur yang menyandarkan jaminan, kekuatannya nyata: hak jaminan fidusia diatur UU No. 42 Tahun 1999 dan dapat dieksekusi dengan titel yang cukup kuat, hak tanggungan diatur UU No. 4 Tahun 1996 dengan jalur penjualannya sendiri, dan eksekusi putusan perdata diatur HIR Pasal 254 dan seterusnya. Menaiki tangga ini dengan urutan yang benar justru membuat penagihan berwibawa — tanpa perlu teriakan.",
      "Kesalahan yang merusak penagihan biasanya dilakukan pihak yang sebenarnya benar: menagih dengan amarah dan ancaman tanpa dasar — yang bukannya memaksa, melainkan memberi debitur bahan laporan pengancaman. Sebagian memilih diam terlalu lama karena malu atau menunggu janji, sampai debitur pindah, bangkrut, atau asetnya berpindah tangan. Sebagian mengirim somasi asal kirim tanpa bukti terima dan tanpa dasar dokumen yang rapi, sehingga posisi hukumnya goyah justru saat dibutuhkan. Dan yang paling sering: dokumen utangnya sendiri lemah — tidak ada kontrak tertulis, tidak ada bukti serah terima, hanya kesepakatan di panggilan telepon.",
      "Kami mulai dari audit dokumen utang: apa yang ada di tangan Anda, seberapa kuat, dan siapa debitur itu hari ini — lalu strategi disusun dari anak tangga yang termurah dulu. Somasi kami kirim terstruktur dengan bukti terima; bila debitur beritikad baik namun kekurangan kas, perjanjian angsuran disusun dengan jaminan dan konsekuensi yang mengikat. Bila jalur dagang tertutup, gugatan dan eksekusi jaminan kami siapkan bersama kuasa hukum — dan sepanjang proses, pembayaran dipantau sampai benar-benar masuk rekening.",
    ],
    benefits: [
      { title: "Kas kembali mengalir", desc: "Tangga penagihan dinaiki dari yang termurah dan paling cepat — uang bergerak kembali tanpa menunggu putusan bertahun-tahun." },
      { title: "Somasi yang berwibawa", desc: "Surat resmi dengan dasar dokumen dan bukti terima — mula-mula lalai dimulai, posisi gugatan berikutnya terkunci." },
      { title: "Jalan damai yang mengikat", desc: "Perjanjian angsuran dengan jaminan dan konsekuensi — debitur beritikad baik mendapat ruang, posisi Anda tetap aman." },
      { title: "Jaminan bisa dieksekusi", desc: "Fidusia dan hak tanggungan punya jalur eksekusi yang jelas — jaminan yang dipegang bukan sekadar kertas." },
      { title: "Piutang berikutnya lebih aman", desc: "Kekuatan dokumen dianalisis dan polanya diperbaiki — kebocoran yang sama tidak terulang di kontrak berikutnya." },
    ],
    process: [
      { title: "Audit dokumen utang", desc: "Kontrak, invoice, bukti serah terima, dan riwayat penagihan ditelaah — kekuatan posisi dan profil debitur dinilai sebelum langkah pertama." },
      { title: "Somasi & negosiasi", desc: "Somasi terstruktur dikirim dengan bukti terima; peluang perundingan dibuka dengan batas waktu yang tegas." },
      { title: "Perjanjian atau gugatan", desc: "Debitur beritikad baik diberi perjanjian angsuran berjamin; jalur dagang yang tertutup dilanjutkan gugatan bersama kuasa hukum." },
      { title: "Pemantauan & eksekusi", desc: "Pembayaran dipantau sampai lunas; bila janji dilanggar, eksekusi jaminan atau putusan dijalankan sesuai jalurnya." },
    ],
    requirements: [
      "Kontrak, PO, atau invoice beserta bukti serah terima dan penerimaan",
      "Riwayat penagihan dan korespondensi dengan debitur",
      "Data debitur: identitas, alamat terakhir, informasi aset yang diketahui",
      "Jaminan yang dipegang bila ada: fidusia, hak tanggungan, cek, atau bilyet",
      "Target penyelesaian yang realistis: lunas, angsuran, atau gugatan",
    ],
    faqs: [
      { q: "Berapa biaya penagihan legal?", a: "Analisis dokumen dan somasi dimulai dari Rp 2,5 juta; tahap perjanjian penyelesaian dan gugatan dihitung menyusul menyesuaikan kompleksitas dan nilai piutang. Estimasi tiap tahap kami sampaikan sebelum berjalan, supaya biaya penagihan tidak pernah melebihi nilai yang ditagihkan. Prinsip kami sederhana: tidak layak membeli gugatan seharga piutang yang ditagih." },
      { q: "Debitur hilang kontak dan pindah alamat — apakah masih bisa ditagih?", a: "Masih. Identitas dan alamat terakhir dipakai untuk pemanggilan resmi, dan perkara perdata tetap dapat berjalan meski debitur tidak hadir sesuai aturan tata cara peradilan. Yang perlu diwaspadai adalah waktu: daluwarsa piutang memiliki batas dan aset debitur bisa berpindah — makin lama ditunggu, makin kecil peluang pemulihan." },
      { q: "Apakah penagihan bisa berujung pidana?", a: "Piutang pada dasarnya perkara perdata — wanprestasi atas kewajiban keuangan. Jalur pidana terbuka hanya bila ada pola kejahatannya: identitas fiktif, bukti palsu, atau penggelapan yang memenuhi KUHP Pasal 372 dan 378. Sebaliknya penagih juga harus menjaga diri — ancaman, kekerasan, atau menahan barang tanpa dasar justru membalik posisi; jalur kami murni legal dan tetap mengintimadasi karena prosedurnya resmi." },
    ],
    related: ["legal-drafting", "sengketa-bisnis-mediasi", "restrukturisasi-utang", "valuasi-bisnis"],
  },
  {
    slug: "perlindungan-domain-brand",
    tagline: "Nama yang dibangun bertahun-tahun bisa dicuri dalam satu email.",
    heroSub:
      "Audit dan pengamanan domain, autentikasi email SPF/DKIM/DMARC, pemantauan situs palsu dan brandjacking, serta prosedur pemulihan domain. Untuk brand yang berjalan di atas domain .id, .com, dan email korporat.",
    timeline: "Audit dan pengamanan 1–2 minggu · pemantauan berjalan terus",
    intro: [
      "Domain adalah pintu digital perusahaan: dari situs, email, sampai tautan akses aplikasi — dan pintu yang tidak dikunci bisa dibajak dalam semalam. Modusnya berlapis: domain yang lupa diperpanjang disidai pihak lain, akun registrar diambil alih lewat email pemilik yang dibobol, email korporat ditiru untuk mengirim instruksi pembayaran ke rekening penipu, situs palsu menjual produk tak resmi atas nama brand Anda, dan domain mirip (typosquatting) menampung halaman yang merusak. Pelindungnya terdiri dari dua lapis yang harus sejalan: merek yang terdaftar di DJKI berdasar UU No. 20 Tahun 2016 melindungi tandanya, sementara domain .id berada di bawah kebijakan PANDI yang menyediakan jalur sengketa tersendiri. Sementara itu, autentikasi email lewat SPF, DKIM, dan DMARC adalah pagar yang membuat pemalsuan pengirim menjadi sulit dan terdeteksi.",
      "Yang membuat kasus ini menyakitkan: hampir seluruhnya bisa dicegah dengan pengaturan yang murah, tetapi jarang dikerjakan sampai kejadian. Akun registrar dipegang satu orang yang lulus resign membawa kuncinya; domain tidak diberi lock; perpanjangan mengandalkan ingatan; email korporat terkirim tanpa SPF dan DKIM sehingga siapa pun bisa memalsukan alamat Anda; dan merek yang dipamerkan di semua material justru tidak terdaftar. Ketika pencurian atau pemalsuan terjadi, pemulihan bisa berbulan-bulan lewat prosedur registrar atau PANDI — sementara pelanggan yang menerima email penipuan itu kehilangan uang, dan kepercayaan yang hilang tidak menunggu putusan.",
      "Kami mulai dari audit kepemilikan dan akses: siapa memegang registrar, DNS, host, dan email, dengan siapa emailnya terkait, dan kapan semuanya jatuh tempo. Pengamanan lalu dikerjakan: lock dan autentikasi dua faktor pada domain, pemisahan akses yang tidak bergantung satu orang, kalender perpanjangan, serta konfigurasi SPF, DKIM, dan DMARC dengan panduan penerapannya. Lapisan ketiganya pemantauan: domain mirip, situs palsu, dan brandjacking dipantau berjalan — dan bila insiden tetap terjadi, prosedur pemulihan lewat registrar, PANDI, atau UDRP sudah tertulis dan siap dijalankan tanpa improvisasi.",
    ],
    benefits: [
      { title: "Domain tidak bisa berpindah diam-diam", desc: "Lock, autentikasi dua faktor, dan pemisahan akses — kuncinya tidak lagi bergantung pada satu orang atau satu email." },
      { title: "Email Anda sulit dipalsukan", desc: "SPF, DKIM, dan DMARC memvalidasi pengirim sah — instruksi pembayaran palsu atas nama perusahaan jadi jauh lebih sulit lolos." },
      { title: "Penipuan terdeteksi lebih cepat", desc: "Domain mirip, situs palsu, dan brandjacking dipantau — isu ditangani saat masih kecil, bukan setelah pelanggan berdatangan mengeluh." },
      { title: "Jalur pemulihan siap pakai", desc: "Prosedur registrar, PANDI, dan UDRP tertulis sejak damai — pemulihan dijalankan, bukan disusun di tengah panik." },
      { title: "Merek dan domain berjalan seiring", desc: "Strategi satu identitas digital: tanda yang terdaftar melindungi domainnya, domain yang terkunci melindungi tandanya." },
    ],
    process: [
      { title: "Audit kepemilikan & akses", desc: "Registrar, DNS, host, dan email korporat dipetakan — risiko titik tunggal dan jatuh tempo diidentifikasi." },
      { title: "Pengamanan domain & email", desc: "Lock, 2FA, pemisahan akses, kalender perpanjangan, dan konfigurasi SPF/DKIM/DMARC diterapkan dengan panduan penuh." },
      { title: "Pemantauan & deteksi", desc: "Domain mirip dan situs palsu dipantau berjalan — temuan dilaporkan beserta rekomendasi tindakannya." },
      { title: "Prosedur pemulihan & tindakan", desc: "Bila insiden terjadi: lapor registrar, jalur PANDI atau UDRP, pelaporan, dan takedown dijalankan sesuai prosedur yang tertulis." },
    ],
    requirements: [
      "Daftar domain yang dimiliki beserta registrar-nya (atau akses akunnya)",
      "Akses atau koordinasi dengan tim IT untuk DNS, host, dan layanan email",
      "Status pendaftaran merek (bila ada — memperkuat tindakan; bila belum, kami urus)",
      "Insiden atau laporan pelanggan yang pernah terjadi, sekecil apa pun",
      "Kontak pemegang keputusan teknis dan bisnis untuk tindakan cepat",
    ],
    faqs: [
      { q: "Berapa biaya perlindungan domain dan email ini?", a: "Audit dan pengamanan dimulai dari Rp 2,5 juta untuk satu merek dengan domain dan email korporat standar. Biaya teknis lanjutan seperti layanan pemantauan dan autentikasi email dibayar ke penyedianya — kebutuhannya kami petakan secara transparan. Perpanjangan domain tetap dibayar ke registrar, tetapi kalendernya kami pegang agar tak ada satu pun jatuh tempo terlewat." },
      { q: "Domain saya baru saja dicuri — apa langkah pertama?", a: "Jangan menunggu: lapor registrar secara resmi sebagai keluhan transfer, kumpulkan bukti kepemilikan dan riwayat domain, lalu gunakan jalur kebijakan PANDI bila domainnya .id atau UDRP bila .com. Kecepatan laporan sangat menentukan peluang pemulihan — pemegang baru yang jahat membutuhkan waktu untuk memindahkan atau mengisi domain itu. Setelah pulih, pengamanan dan prosedurnya dibangun agar tidak terulang." },
      { q: "Apa bedanya perlindungan domain dengan pendaftaran merek?", a: "Merek melindungi tandanya — nama dan logo — untuk kelas produk atau jasa tertentu lewat DJKI; domain melindungi alamat digitalnya lewat registrar dan kebijakan PANDI. Keduanya saling menguatkan: merek yang terdaftar menjadi dasar klaim atas domain yang dipalsukan, sementara domain yang terkunci mencegah pencurian yang tidak bisa dibela hanya dengan sertifikat merek. Di layanan ini keduanya kami selaraskan sekaligus." },
    ],
    related: ["pendaftaran-merek", "audit-siber", "kepatuhan-uu-pdp", "forensik-digital"],
  },
  {
    slug: "manajemen-reputasi-online",
    tagline: "Google adalah etalase kedua Anda — dan selama ini Anda tidak pernah menata raknya.",
    heroSub:
      "Audit hasil pencarian, protokol respons ulasan, strategi konten positif, dan layanan reputasi bulanan. Untuk bisnis yang keputusan pelanggannya lahir dari halaman pertama Google dan bintang ulasan.",
    timeline: "Audit dan penyiapan 2–3 minggu · layanan bulanan berjalan",
    intro: [
      "Sebelum membeli, calon pelanggan mengetik nama Anda — dan halaman pertama hasil pencarian itulah etalase kedua perusahaan, ditata bukan oleh Anda melainkan oleh ulasan, forum, dan berita. Manajemen reputasi daring (online reputation management) bukan usaha menghapus kritik: ulasan yang jujur adalah bagian sah dari keterbukaan publik. Tujuannya lebih jujur lagi: membuat hasil pencarian mencerminkan kenyataan — profil resmi yang benar, ulasan yang direspons layaknya manusia, dan konten resmi yang muncul di atas halaman usang. Batasnya juga tegas: UU No. 27 Tahun 2022 mengatur data pribadi, PP No. 71 Tahun 2019 mengatur konten pada sistem elektronik, dan UU ITE tidak boleh dijadikan alat menekan pengkritik yang berkata benar.",
      "Kesalahan penanganan reputasi biasanya lebih merusak daripada ulasan asalnya: menjawab ulasan dengan nada menyerang — tangkapan layarnya viral lebih cepat dari keluhan awal; membeli ulasan palsu — platform mendeteksinya dan menghukum akun yang seharusnya menolong; menghapus akun dan situs — jejaknya justru diperbesar arsip publik. Ada pula jalan pintas yang berbahaya secara hukum: mengancam pengkritik dengan pasal-pasal UU ITE, yang hampir selalu berbalik menjadi bencana reputasi kedua. Dan yang paling umum: mengabaikan profil Google Bisnisku yang informasinya diisi orang lain — alamat, jam, dan nomor yang salah mengerucutkan kemarahan ke sasaran yang keliru.",
      "Kami bekerja berlapis: audit hasil pencarian dan ulasan memetakan apa yang publik lihat hari ini dan dari mana isu itu berasal. Protokol respons disusun — bagaimana menjawab ulasan negatif dan positif dalam nada yang manusiawi, siapa yang berwenang, dalam berapa jam — lalu konten yang benar-benar melanggar (palsu, fitnah, akun fiktif) kami laporkan lewat jalur sah masing-masing platform, dengan gugatan perdata sebagai pilihan terakhir. Lapisan berjalannya strategi konten: profil resmi ditata, testimoni asli dikumpulkan, dan publikasi yang layak diarahkan — seluruhnya dipantau bulanan dengan laporan tren, bukan janji.",
    ],
    benefits: [
      { title: "Halaman pertama mencerminkan kenyataan", desc: "Konten resmi yang benar naik ke atas, halaman usang dan keliru turun — publik menilai Anda dari potret yang akurat." },
      { title: "Ulasan direspons, bukan diabaikan", desc: "Protokol respons membuat setiap ulasan — negatif maupun positif — dijawab dalam nada yang manusiawi dan tepat waktu." },
      { title: "Konten melanggar ditindak jalur sah", desc: "Ulasan palsu dan akun fiktif dilaporkan ke platform sesuai prosedurnya — tanpa jalan pintas yang berbahaya." },
      { title: "Tanpa jalan pintas beracun", desc: "Tidak membeli ulasan palsu, tidak menekan pengkritik dengan pidana — reputasi dibangun di atas fondasi yang tidak runtuh saat diperiksa." },
      { title: "Tren dipantau setiap bulan", desc: "Isu kecil terlihat sebelum membesar — laporan bulanan menunjukkan arah reputasi, bukan sekadar aktivitas." },
    ],
    process: [
      { title: "Audit reputasi digital", desc: "Hasil pencarian, ulasan, dan kanal publik dipetakan — sumber isu dan halaman yang mendistorsi diidentifikasi." },
      { title: "Protokol & penataan kanal", desc: "Protokol respons disusun dan kanal resmi ditata: Google Bisnisku, profil platform, dan akun yang tertinggal dirapikan." },
      { title: "Strategi konten & penindakan", desc: "Konten resmi dan testimoni asli diarahkan; konten yang melanggar dilaporkan lewat jalur sah platform." },
      { title: "Layanan bulanan & laporan", desc: "Pemantauan berjalan tiap bulan dengan laporan tren dan rekomendasi — reputasi dijaga sebagai proses, bukan proyek sekali jadi." },
    ],
    requirements: [
      "Daftar nama usaha dan variasi pencarian yang dipakai publik",
      "Akses kanal resmi: Google Bisnisku, akun media sosial, situs",
      "Riwayat isu reputasi dan ulasan bermasalah yang pernah muncul",
      "Konten resmi yang tersedia: foto, testimoni asli, publikasi, sertifikasi",
      "Penanggung jawab yang dapat menyetujui naskah respons dengan cepat",
    ],
    faqs: [
      { q: "Bisakah review negatif dihapus?", a: "Ulasan yang jujur tidak dihapus — dan itu bukan tujuan layanan ini; kritik sah adalah bagian dari keterbukaan. Yang dapat ditindak adalah ulasan palsu, fitnah, atau yang dikirim akun fiktif — dilaporkan melalui jalur resmi platform. Ulasan yang sah sebaliknya ditanggung dengan respons yang bagus — publik justru menilai bisnis Anda dari cara menjawab." },
      { q: "Berapa biaya dan bagaimana mekanismenya?", a: "Layanan bulanan dimulai dari Rp 3,5 juta per bulan — mencakup pemantauan, protokol respons, arahan konten, dan laporan bulanan. Audit awal untuk cakupan luas dihitung terpisah sesuai kedalaman yang dibutuhkan. Skema bulanan ini berjalan tanpa penguncian kontrak panjang bila kebutuhannya sudah berdiri sendiri." },
      { q: "Apakah manajemen reputasi daring legal?", a: "Legal selama jalurnya benar: menata konten sendiri, menanggapi ulasan, melaporkan konten palsu ke platform, dan menggugat secara perdata bila fitnah terbukti. Yang ilegal dan berbahaya justru jalan pintasnya: membeli ulasan palsu, menekan pengkritik dengan UU ITE, atau memanipulasi data pribadi orang lain. Kami bekerja sepenuhnya di sisi yang aman — reputasi yang dibangun dengan cara yang salah akan runtuh bersama caranya." },
    ],
    related: ["manajemen-krisis-pr", "google-bisnisku", "perlindungan-domain-brand", "kepatuhan-iklan-digital"],
  },
];

/* ═══════════════════════ LAPISAN PENGAYAAN ═══════════════════════
   whoFor, deliverables, costs, legalBasis — digabung otomatis oleh
   getServiceContent() di index.ts. Kunci = slug layanan. */
export const resiliensiEnrichment: Record<string, ServiceEnrichment> = {
  "asuransi-bisnis": {
    whoFor: [
      "Pemilik pabrik, gudang, dan rumah usaha dengan aset fisik bernilai besar",
      "Distributor, importir, dan eksportir yang barangnya terus bergerak lintas kota dan negara",
      "Usaha yang melayani publik secara langsung — tanggung jawab kepada pihak ketiga nyata setiap hari",
      "Perusahaan yang polisnya dibangun demi syarat bank, tender, atau kontrak enterprise",
    ],
    deliverables: [
      "Dokumen pemetaan risiko per aset dan proses bisnis",
      "Rekomendasi program pertanggungan: jenis, nilai, dan struktur polis",
      "Perbandingan penawaran beberapa asuradur beserta catatan kualitas klausulnya",
      "Polis berjalan plus ringkasan klausul dan kewajiban dalam bahasa yang bisa dibaca",
      "Playbook klaim: langkah pertama yang harus dilakukan di jam-jam pertama insiden",
    ],
    costs: [
      { item: "Jasa pemetaan, desain program, dan negosiasi DIGIMAN.ID", note: "mulai Rp 5 jt — tertulis penuh di penawaran" },
      { item: "Premi asuradur", note: "dibayar langsung ke penanggung — menyesuaikan jenis risiko, nilai aset, dan riwayat klaim" },
      { item: "Survei risiko oleh asuradur", note: "umumnya gratis atau termasuk premi; lokasi berisiko tinggi bisa diminta survei khusus" },
      { item: "Perluasan klausul", note: "tambahan premi kecil untuk perluasan yang diperjuangkan — dihitung transparan sebelum penempatan" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2014 tentang Perasuransian",
      "PP No. 39 Tahun 2014 tentang Perkembangan Usaha Perasuransian dan Reasuransian",
      "Kitab Undang-Undang Hukum Perdata, Bagian tentang Asuransi (Pasal 246 dan seterusnya)",
      "Peraturan dan surat edaran OJK tentang produk asuransi serta klausul polis baku",
    ],
  },

  "forensik-digital": {
    whoFor: [
      "Perusahaan kreatif, agency, dan pengembang software yang karyanya berisiko dibawa keluar",
      "Bisnis dengan basis data pelanggan dan harga yang bernilai bagi kompetitor",
      "Pemilik usaha yang mendapati akses sistem dipakai di luar kewenangan",
      "Korban penipuan digital yang butuh jejak teknis untuk laporan resmi",
    ],
    deliverables: [
      "Salinan forensik (imaging) ber-hash dengan dokumentasi chain of custody",
      "Laporan analisis teknis: temuan, metodologi, dan lampiran bukti",
      "Kronologi insiden terverifikasi yang bisa dipakai somasi maupun persidangan",
      "Ringkasan eksekutif untuk direksi dan penasihat hukum",
      "Dukungan koordinasi penyidik dan penjelasan teknis di forum hukum",
    ],
    costs: [
      { item: "Jasa preservasi dan analisis forensik", note: "mulai Rp 10 jt untuk cakupan sederhana — estimasi tertulis setelah preservasi awal" },
      { item: "Perluasan per perangkat atau akun", note: "dihitung per objek tambahan yang dianalisis" },
      { item: "Pendampingan persidangan dan koordinasi penyidik", note: "terpisah — menyesuaikan forum dan durasi" },
      { item: "Konsultasi darurat preservasi", note: "bisa mulai di jam pertama insiden — langkah paling murah yang menyelamatkan kasus" },
    ],
    legalBasis: [
      "UU Informasi dan Transaksi Elektronik beserta perubahannya (UU No. 19 Tahun 2016, UU No. 1 Tahun 2024)",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik",
      "PERMA No. 3 Tahun 2023 tentang Tata Cara Pemeriksaan Alat Bukti Elektronik",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi",
    ],
  },

  "manajemen-krisis-pr": {
    whoFor: [
      "Bisnis konsumen yang produk dan layanannya disentuh ribuan orang setiap hari",
      "Platform dan aplikasi yang menyimpan data pengguna dalam jumlah besar",
      "Operasional lapangan dengan risiko insiden: logistik, konstruksi, manufaktur",
      "Brand dengan komunitas besar di media sosial yang membentuk opini publik",
    ],
    deliverables: [
      "Peta skenario krisis spesifik industri dengan level dampak",
      "Struktur tim krisis dan rantai keputusan berikut pemegang peran",
      "Holding statement dan naskah respons per skenario, siap pakai",
      "Protokol monitoring dan eskalasi dengan ambang pemicu",
      "Laporan simulasi beserta rekomendasi perbaikan",
    ],
    costs: [
      { item: "Jasa penyusunan protokol krisis", note: "mulai Rp 7,5 jt untuk satu entitas — tertulis di penawaran" },
      { item: "Simulasi dan latihan tim", note: "dihitung terpisah menyesuaikan skala dan lokasi" },
      { item: "Retainer penjagaan krisis (opsional)", note: "per periode — tim siap panggil bila isu membesar" },
      { item: "Penanganan darurat saat insiden", note: "menyesuaikan cakupan dan durasi — estimasi disampaikan di jam pertama respons" },
    ],
    legalBasis: [
      "UU Informasi dan Transaksi Elektronik beserta perubahannya",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (kewajiban pemberitahuan kebocoran data)",
      "UU No. 8 Tahun 1999 tentang Perlindungan Konsumen",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik",
    ],
  },

  "bisnis-kontinuitas-bcp": {
    whoFor: [
      "Bisnis digital dan aplikasi yang pendapatannya berhenti persis saat sistemnya mati",
      "Manufaktur dan distribusi yang bergantung pada mesin serta rantai pasok tunggal",
      "Perusahaan dengan kontrak ber-SLA yang jam gangguan dihitung sebagai denda",
      "Lembaga jasa keuangan yang kewajiban kelangsungannya diatur regulator",
    ],
    deliverables: [
      "Laporan analisis dampak bisnis (BIA) dengan prioritas proses",
      "Matriks RTO dan RPO per proses bisnis",
      "Dokumen rencana kelangsungan per skenario yang bisa dijalankan",
      "Panduan respons darurat per tim beserta peta kontak",
      "Laporan uji simulasi beserta rekomendasi perbaikan",
    ],
    costs: [
      { item: "Jasa penyusunan BCP", note: "mulai Rp 10 jt — menyesuaikan jumlah proses, lokasi, dan sistem" },
      { item: "Uji simulasi", note: "per periode — dianjurkan sekali setahun atau setiap perubahan besar" },
      { item: "Investasi infrastruktur yang direkomendasikan", note: "backup cloud, redundansi, vendor cadangan — dibayar ke penyedia, kebutuhannya kami petakan" },
      { item: "Pemeliharaan dan pembaruan rencana (opsional)", note: "per tahun — menyegarkan rencana saat bisnis berubah" },
    ],
    legalBasis: [
      "SNI ISO 22301 tentang Manajemen Kelangsungan Bisnis (kerangka BCMS)",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (ketersediaan dan pemulihan data)",
      "POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Sistem Manajemen Kelangsungan Usaha",
    ],
  },

  "pencegahan-fraud-sop": {
    whoFor: [
      "Pemilik usaha keluarga yang kas dan pengadaannya dijalankan atas dasar kepercayaan",
      "Perusahaan yang tumbuh cepat — nilai pembelian membesar lebih cepat dari pengawasannya",
      "Jaringan outlet dan cabang yang diawasi dari jarak jauh",
      "Perusahaan yang mengerjakan proyek publik atau tender dengan risiko tipikor",
    ],
    deliverables: [
      "Laporan pemetaan celah fraud berikut prioritasnya",
      "Matriks otorisasi dan desain pemisahan tugas",
      "SOP pengadaan, pembayaran, dan penyimpanan aset",
      "Mekanisme salur pelaporan beserta kebijakan proteksi pelapor",
      "Indikator pemantauan dan kalender audit rutin",
    ],
    costs: [
      { item: "Jasa pemetaan celah dan desain kontrol", note: "mulai Rp 7,5 jt — menyesuaikan jumlah proses dan lokasi" },
      { item: "Implementasi SOP dan pelatihan tim", note: "terpisah menyesuaikan cakupan dan jumlah personel" },
      { item: "Audit berkala (opsional)", note: "per periode — dianjurkan setiap semester pada usaha dengan banyak titik kas" },
      { item: "Penanganan kasus berjalan", note: "koordinasi forensik dan hukum — estimasi menyesuaikan skop kasus" },
    ],
    legalBasis: [
      "KUHP Pasal 372 dan 378 tentang penggelapan dan penipuan",
      "UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi",
      "UU No. 8 Tahun 2010 tentang Pencegahan dan Pemberantasan Tindak Pidana Pencucian Uang",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (proteksi data pelapor)",
    ],
  },

  "manajemen-risiko-erm": {
    whoFor: [
      "Direksi perusahaan keluarga yang divisi-divisinya belum berbicara dalam bahasa risiko yang sama",
      "Perusahaan menuju pendanaan, kredit investasi, atau kemitraan besar yang menuntut due diligence",
      "BUMN dan BUMD yang kewajiban pengelolaan risikonya diatur PP No. 54 Tahun 2012",
      "Perusahaan ekspansi cepat — produk baru, lokasi baru, vendor baru tiap kuartal",
    ],
    deliverables: [
      "Registrasi risiko (risk register) lintas divisi dengan pemilik bernama",
      "Matriks risiko beserta skala dampak-kemungkinan dan toleransi",
      "Dokumen rencana mitigasi dengan indikator dan tenggat",
      "Pedoman kerangka ERM yang merujuk SNI ISO 31000",
      "Format laporan risiko siap pakai untuk rapat direksi",
    ],
    costs: [
      { item: "Jasa pendirian kerangka ERM", note: "mulai Rp 10 jt — menyesuaikan jumlah divisi dan lokasi" },
      { item: "Workshop lanjutan (opsional)", note: "per sesi — untuk pendalaman risiko per divisi" },
      { item: "Pendampingan tinjauan kuartalan (opsional)", note: "per periode — sampai siklusnya berdiri sendiri" },
      { item: "Aplikasi atau sistem risiko (bila diinginkan)", note: "biaya vendor — kebutuhan dan pemilihannya kami susun" },
    ],
    legalBasis: [
      "SNI ISO 31000:2018 tentang Manajemen Risiko (kerangka acuan)",
      "PP No. 54 Tahun 2012 tentang Pengelolaan Risiko dalam Perusahaan Perseroan",
      "POJK No. 33/POJK.04/2014 tentang Penyelenggaraan Kerja Dewan Komisaris dan Direktur Emiten",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
    ],
  },

  "sengketa-bisnis-mediasi": {
    whoFor: [
      "Kontraktor dan vendor jasa yang pekerjaannya diselesaikan namun pembayarannya tidak",
      "Pemasok dengan piutang dagang bernilai besar yang berlarut tanpa kejelasan",
      "Mitra kerja sama yang berselisih soal bagi hasil, kepemilikan, atau kewajiban kontrak",
      "Perusahaan yang digugat dan membutuhkan penilaian posisi sebelum menjawab",
    ],
    deliverables: [
      "Memo analisis posisi hukum dengan skenario biaya-waktu-hasil",
      "Naskah somasi terstruktur beserta bukti pengirimannya",
      "Strategi penyelesaian berjenjang: perundingan, mediasi, arbitrase",
      "Pendampingan penuh pada sesi mediasi atau proses arbitrase",
      "Koordinasi kuasa hukum litigasi bila pengadilan tak terhindarkan",
    ],
    costs: [
      { item: "Jasa analisis posisi hukum", note: "mulai Rp 7,5 jt — laporan tertulis dengan skenario penyelesaian" },
      { item: "Pendampingan mediasi atau negosiasi", note: "dihitung per tahap menyesuaikan kompleksitas" },
      { item: "Biaya lembaga (BANI atau mediator)", note: "dibayar ke lembaga — menyesuaikan nilai sengketa" },
      { item: "Litigasi pengadilan (bila diperlukan)", note: "koordinasi kuasa hukum — biaya menyesuaikan tingkat perkara" },
    ],
    legalBasis: [
      "UU No. 30 Tahun 1999 tentang Arbitrase dan Alternatif Penyelesaian Sengketa",
      "PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan",
      "KUHPerdata (Pasal 1234 dan 1243 tentang wanprestasi; ketentuan perdamaian)",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (sengketa korporasi dan tindakan perseroan)",
    ],
  },

  "penagihan-piutang-legal": {
    whoFor: [
      "Distributor dan pemasok dengan piutang dagang macet yang menyedot modal kerja",
      "Kontraktor dan vendor jasa dengan termin tidak dibayar setelah pekerjaan selesai",
      "Pemberi pinjaman dan pemilik modal dengan perjanjian kredit yang berhenti dibayar",
      "Perusahaan dengan pelanggan korporasi yang rutin membayar jauh lewat jatuh tempo",
    ],
    deliverables: [
      "Laporan audit kekuatan dokumen utang dan profil debitur",
      "Surat somasi resmi dengan bukti pengiriman dan terima",
      "Naskah perjanjian penyelesaian atau angsuran berjamin",
      "Koordinasi gugatan dengan kuasa hukum bila jalur dagang tertutup",
      "Panduan eksekusi jaminan bila ada fidusia atau hak tanggungan",
    ],
    costs: [
      { item: "Jasa analisis dokumen dan somasi", note: "mulai Rp 2,5 jt — estimasi tahap berikutnya disampaikan sebelum berjalan" },
      { item: "Penyusunan perjanjian penyelesaian", note: "per kasus — termasuk struktur jaminan dan konsekuensi" },
      { item: "Gugatan dan litigasi", note: "menyesuaikan tingkat perkara dan nilai piutang" },
      { item: "Eksekusi jaminan", note: "proses tersendiri — estimasi disiapkan setelah audit dokumen" },
    ],
    legalBasis: [
      "KUHPerdata (kewajiban, wanprestasi, mula-mula lalai, dan perdamaian)",
      "UU No. 42 Tahun 1999 tentang Jaminan Fidusia",
      "UU No. 4 Tahun 1996 tentang Hak Tanggungan",
      "HIR Pasal 254 dan seterusnya tentang eksekusi putusan perdata",
    ],
  },

  "perlindungan-domain-brand": {
    whoFor: [
      "Brand e-commerce dan konsumen yang penjualannya berjalan di atas domain dan email",
      "Perusahaan jasa yang transaksinya dipicu email korporat — risiko pemalsuan instruksi pembayaran nyata",
      "Startup dengan nama yang mulai ditiru dan dijual ulang oleh pihak lain",
      "Perusahaan ekspor yang butuh domain .com dan .id sama-sama terlindungi",
    ],
    deliverables: [
      "Laporan audit kepemilikan, akses, dan risiko domain",
      "Konfigurasi SPF, DKIM, dan DMARC beserta panduan penerapannya",
      "Kebijakan kepemilikan domain dan kalender perpanjangan",
      "Laporan pemantauan: domain mirip, situs palsu, brandjacking",
      "Prosedur pemulihan dan eskalasi siap jalankan saat insiden",
    ],
    costs: [
      { item: "Jasa audit dan pengamanan", note: "mulai Rp 2,5 jt untuk satu merek — tertulis di penawaran" },
      { item: "Layanan pemantauan", note: "per periode — domain mirip, situs palsu, dan brandjacking dipantau berjalan" },
      { item: "Biaya teknis penyedia (registrar, autentikasi email)", note: "dibayar ke vendor — kebutuhannya kami petakan transparan" },
      { item: "Penanganan insiden", note: "terpisah menyesuaikan kasus — prosedurnya sudah siap sehingga biayanya lebih kecil" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
      "Kebijakan PANDI tentang pengelolaan domain .id dan penyelesaian sengketa domain",
      "UU Informasi dan Transaksi Elektronik beserta PP No. 71 Tahun 2019",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi",
    ],
  },

  "manajemen-reputasi-online": {
    whoFor: [
      "Bisnis konsumen — F&B, properti, travel, kesehatan — yang dipilih lewat pencarian dan ulasan",
      "Perusahaan yang namanya tercoreng isu lama yang masih muncul di halaman pertama",
      "Founder dan persona publik dengan nama yang tercampur konten yang bukan miliknya",
      "Brand dengan volume ulasan besar di marketplace dan platform ulasan",
    ],
    deliverables: [
      "Laporan audit reputasi: hasil pencarian, ulasan, dan peta isu",
      "Protokol respons ulasan siap pakai untuk seluruh kanal",
      "Kanal resmi yang ditata: profil, informasi usaha, akun tertinggal",
      "Kalender strategi konten positif",
      "Laporan bulanan tren reputasi beserta rekomendasi",
    ],
    costs: [
      { item: "Layanan bulanan ORM", note: "mulai Rp 3,5 jt/bln — pemantauan, protokol, arahan konten, laporan" },
      { item: "Audit awal dengan cakupan luas", note: "terpisah — sesuai kedalaman dan jumlah kanal" },
      { item: "Produksi konten (opsional)", note: "menyesuaikan kebutuhan — foto, artikel, publikasi" },
      { item: "Penanganan isu krisis", note: "dikoordinasikan dengan layanan manajemen krisis PR bila membesar" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi",
      "UU Informasi dan Transaksi Elektronik beserta perubahannya",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik",
      "UU No. 8 Tahun 1999 tentang Perlindungan Konsumen",
    ],
  },
};
