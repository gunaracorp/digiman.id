import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — KATEGORI KREATIF: Industri Kreatif & Media (10 layanan).
 * Perfilman (LSF, badan usaha produksi), event & konser, reklame luar ruang,
 * musik & LMK, penerbitan (ISBN), game (IGRS), pers online, merchandise, talent.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const kreatifContent: ServiceContent[] = [
  {
    slug: "sertifikat-film-lsf",
    tagline: "Layar menunggu film Anda — dan sensor yang menentukan kapan itu terjadi.",
    heroSub:
      "Sertifikat Lulus Sensor untuk film, trailer, serial, dan iklan layar lebar — kunci penayangan di bioskop, televisi, dan platform streaming, diurus oleh pihak yang paham apa yang diperiksa dan mengapa.",
    timeline: "Trailer & iklan 1–2 minggu · Film panjang 3–6 minggu",
    intro: [
      "Setiap film, serial, trailer, dan iklan yang akan ditayangkan secara komersial di Indonesia wajib lulus sensor terlebih dahulu — ketentuan yang tertanam sejak Pasal 7 UU No. 33 Tahun 2009 tentang Perfilman dan dijabarkan dalam PP No. 32 Tahun 2013 jo. PP No. 19 Tahun 2017. Yang diperiksa bukan sekadar adegan seronok atau kekerasan: pengklasifikasi menilai keseluruhan konten lalu menempatkannya pada klasifikasi umur — SU (semua umur), 13+, 17+, atau 21+. Penyelenggaraan sensor sendiri kini berada di bawah kementerian yang membidangi kebudayaan, menyusul penataan ulang Lembaga Sensor Film melalui Peraturan Presiden No. 12 Tahun 2025 — istilah dan fungsinya tetap sama: tanpa sertifikat lulus sensor, tidak ada bioskop, stasiun TV, atau platform streaming yang berani menayangkan karya Anda.",
      "Kesalahan yang paling mahal terjadi di ujung proses: tim produksi menyelesaikan final cut, baru mengajukan sensor — lalu catatan pengklasifikasi menuntut pemotongan adegan yang sudah dimesin warna, dimusikalisasi, dan di-render mahal. Ada juga yang menganggap trailer dan iklan layar lebar tidak wajib sensor, padahal keduanya termasuk yang diperiksa — dan stasiun TV serta bioskop memintanya sebagai dokumen wajib sebelum masuk jadwal. Konsekuensi penayangan tanpa sertifikat bukan sekadar dibatalkan: regulasi perfilman mengancam sanksi administratif hingga pidana, dan platform streaming besar menolak karya tanpa bukti sensor di tahap penyerahan berkas.",
      "Kami bekerja lebih awal, bukan lebih cepat di akhir: naskah dan versi kerja ditelaah terhadap standar klasifikasi sebelum pengambilan gambar selesai — potensi adegan bermasalah ditandai, alternatif penyutradaraannya didiskusikan dengan tim kreatif Anda. Selanjutnya berkas pengajuan disusun lengkap (formulir sensor, bukti kepemilikan karya, sinopsis, data produksi), diajukan, dan setiap catatan sensor diinterpretasikan menjadi rencana suntingan yang seminimal mungkin dampaknya pada karya. Sertifikat terbit, salinan resmi diserahkan, dan karya Anda masuk ke layar dengan dokumen yang tidak bisa dibantah siapa pun.",
    ],
    benefits: [
      { title: "Jalan ke layar tidak tersendat di ujung", desc: "Jadwal tayang bioskop dan rilis streaming tidak mundur karena menunggu sensor — pengajuan sudah berjalan sebelum karya benar-benar selesai." },
      { title: "Naskah diperiksa lebih dulu", desc: "Pre-check konten mencegah potong ulang yang mahal — potensi catatan sensor diantisipasi di tahap naskah dan versi kerja." },
      { title: "Semua format tertangani", desc: "Film panjang, serial, trailer, iklan layar lebar, sampai materi promosi — masing-masing punya jalur dan dokumennya sendiri, kami urus semuanya." },
      { title: "Koreksi ditangani dengan rapi", desc: "Catatan pengklasifikasi diterjemahkan menjadi rencana suntingan yang terukur — karya tetap utuh pesannya, syarat tetap terpenuhi." },
      { title: "Dokumen yang diterima platform", desc: "Bioskop, stasiun TV, dan layanan streaming menuntut sertifikat sebagai syarat penyerahan — berkas Anda lengkap tanpa gesekan di akhir." },
    ],
    process: [
      { title: "Pre-check konten & dokumen", desc: "Naskah atau versi kerja ditelaah terhadap standar klasifikasi — adegan berisiko ditandai, kekurangan dokumen dicatat sejak awal." },
      { title: "Berkas pengajuan disusun", desc: "Formulir sensor, bukti hak atas karya, sinopsis, data produksi, dan materi final disiapkan dalam format yang diterima pengelola sensor." },
      { title: "Proses sensor & hasil", desc: "Pengajuan berjalan di jalurnya; hasil klasifikasi dan catatan sensor dikomunikasikan — bukan sekadar diteruskan, tapi dijelaskan artinya bagi karya Anda." },
      { title: "Koreksi & sertifikat terbit", desc: "Bila ada koreksi, versi revisi diajukan ulang dengan penjelasan; sertifikat lulus sensor terbit, salinan resmi diserahkan siap dipakai ke platform." },
    ],
    requirements: [
      "Naskah atau versi kerja/final cut film beserta durasi total",
      "Data produksi: judul, nama produser, sutradara, tahun produksi, negara asal",
      "Bukti kepemilikan karya atau hak tayang (kontrak produksi, lisensi — khusus film impor)",
      "Sinopsis dan uraian adegan yang berpotensi sensitif (bila ada)",
      "Jenis penayangan tujuan: bioskop, televisi, platform streaming, atau festival",
      "Legalitas badan usaha produksi (NIB — bila belum punya, kami bantu urus sekaligus)",
    ],
    faqs: [
      { q: "Berapa biaya sensor film dan apa yang mempengaruhinya?", a: "Biaya resmi sensor dihitung per menit durasi dengan tarif PNBP yang berbeda antara film nasional dan film impor — jadi film panjang berbiaya lebih tinggi daripada trailer atau iklan tiga puluh detik. Di atas itu ada jasa kami: mulai Rp 5 juta, mencakup pre-check konten, penyusunan berkas, pengajuan, sampai sertifikat terbit. Yang sering dilupakan orang: biaya re-edit bila ada koreksi — dan di sinilah pre-check naskah membayar dirinya sendiri, karena koreksi kecil di awal jauh lebih murah daripada memotong adegan di final cut." },
      { q: "Apakah konten YouTube atau serial untuk platform streaming juga wajib lulus sensor?", a: "Serial dan film yang diproduksi untuk didistribusikan sebagai karya perfilman komersial — termasuk kepada platform streaming — termasuk dalam pengertian film menurut UU Perfilman, dan platform besar rutin meminta sertifikat lulus sensor sebagai syarat penyerahan berkas. Berbeda halnya dengan konten kreator harian di YouTube atau TikTok yang bukan karya perfilman. Batasnya memang bisa halus — web series dengan episode berdurasi panjang hampir pasti masuk, vlog tidak. Ceritakan format dan rencana distribusi Anda, dan kami akan menunjukkan di garis mana kewajibannya berdiri." },
      { q: "Apa yang terjadi kalau film saya tidak lulus atau mendapat catatan sensor?", a: "Pengklasifikasi jarang menolak mutlak — yang lebih sering muncul adalah catatan: adegan tertentu dipotong, diubah, atau film ditempatkan pada klasifikasi umur tertentu yang membatasi jadwal tayang. Catatan itu kami tafsirkan untuk Anda: adegan mana yang bisa disunting dengan dampak minimal, yang mana cukup diberi penjelasan, dan bagaimana mengajukan versi revisi. Film yang diperiksa tanpa persiapan bisa berputar revisi berbulan-bulan; film yang diajukan dengan pre-check biasanya selesai dalam satu putaran." },
    ],
    related: ["badan-usaha-produksi-film", "hak-cipta-paten", "izin-event-konser", "kontrak-talent-kreator"],
  },
  {
    slug: "izin-event-konser",
    tagline: "Panggung naik tiga puluh hari lagi — izin yang naik lebih dulu.",
    heroSub:
      "Seluruh perizinan penyelenggaraan konser, festival, dan pameran — SITK kepolisian, izin tempat, keamanan, kesehatan, sampai asuransi — dipetakan, diajukan paralel, dan selesai sebelum hari-H.",
    timeline: "30–45 hari sebelum hari-H — makin mendekati tanggal, makin sempit jalurnya",
    intro: [
      "Menyelenggarakan event bukan satu izin, melainkan tumpukan izin yang berjalan paralel: Surat Izin Tertulis dari Kepolisian (SITK) untuk keramaian — yang sejak Peraturan Kapolri No. 16 Tahun 2023 diajukan daring melalui aplikasi Regula dan tidak dipungut biaya resmi — lalu izin pemakaian tempat, kesiapan pemadam kebakaran, dukungan kesehatan, pengaturan parkir, izin reklame untuk publikasinya, sampai pajak hiburan yang kini mengikuti tarif minimum UU No. 1 Tahun 2022 (HKPD). Ditambah lagi venue modern menuntut SOP keamanan tertulis dan asuransi kecelakaan sebelum kunci ruangan diserahkan. Setiap izin punya instansi, dokumen, dan tempo yang berbeda — itulah sebabnya pemetaan lebih penting daripada kecepatan.",
      "Promotor pemula hampir selalu tersandung di tempat yang sama: mulai mengurus izin tujuh hari sebelum acara, padahal SITK sendiri disarankan diajukan paling lambat tiga puluh hari kalender sebelum kegiatan — dan izin lain tidak mau menunggu SITK. Yang lebih berbahaya: menjual tiket sebelum legalitas penyelenggara berdiri — satu keputusan pembatalan, dan ribuan uang tiket harus dikembalikan sementara vendor dan artis sudah dibayar. Venue yang tidak punya PBG/Sertifikat Laik Fungsi mematikan pengajuan di jalurnya sendiri, dan event besar tanpa SOP keamanan yang sungguh-sungguh mempertaruhkan bukan hanya izin — melainkan keselamatan orang yang datang.",
      "Kami mengambil peta lengkapnya dari hari pertama: jenis dan skala event ditentukan, daftar izin beserta urutan dan tenggatnya dikunci, lalu pengajuan dijalankan paralel — SITK via Regula, tempat, dinas teknis, sampai koordinasi dengan kelurahan dan pihak berwenang setempat. SOP keamanan dan protokol kontingensi kami susun, jumlah petugas pengamanan dihitung sesuai kapasitas, asuransi diatur. Anda fokus pada lineup dan pengalaman penonton; hari-H tetap hari-H, dengan buku izin lengkap di meja penyelenggaraan.",
    ],
    benefits: [
      { title: "Semua izin dalam satu peta", desc: "SITK, tempat, pemadam, kesehatan, parkir, reklame — tidak ada yang terlewat karena satu daftar mengendalikan semuanya dengan tenggat masing-masing." },
      { title: "Jual tiket dengan tenang", desc: "Legalitas penyelenggara terbukti sebelum pemasaran dimulai — keputusan pembatalan pihak berwenang bukan lagi skenario yang menghantui." },
      { title: "Didampingi ke meja otoritas", desc: "Koordinasi dengan kepolisian, pemda, dan pengelola venue dijalankan pihak yang sudah paham bahasa dan ritmenya." },
      { title: "SOP keamanan yang benar", desc: "Protokol kerumunan, petugas sesuai kapasitas, dan kontingensi darurat — melindungi penonton sekaligus melindungi promotor dari tanggung jawab yang jauh lebih mahal." },
      { title: "Timeline yang dipegang", desc: "Tanggal acara tidak bergeser karena urusan administrasi — setiap tenggat izin dipantau mundur dari hari-H." },
    ],
    process: [
      { title: "Pemetaan event", desc: "Jenis, skala, venue, kapasitas, dan tanggal dipetakan menjadi daftar izin lengkap — urutan dan tenggat tiap izin dikunci mundur dari hari-H." },
      { title: "Pengajuan paralel", desc: "SITK via Regula, izin tempat, dan perizinan dinas teknis diajukan serentak — bukan antre berurutan yang memakan dua bulan." },
      { title: "Koordinasi & perbaikan", desc: "Tanggapan instansi dijawab cepat, SOP keamanan dan protokol kontingensi disusun, jadwal inspeksi lapangan ditemani penuh." },
      { title: "Kelengkapan hari-H", desc: "Seluruh buku izin terkumpul, asuransi aktif, petugas siap — tim penyelenggara menerima ringkasan kewajiban yang berlaku selama acara berjalan." },
    ],
    requirements: [
      "Identitas penyelenggara dan legalitas badan usaha (NIB) atau dokumen kepanitiaan",
      "Kontrak atau surat persetujuan venue beserta denah lokasi dan kapasitas",
      "Rencana kegiatan: tanggal, rundown, lineup/pengisi acara, kapasitas penonton, skema tiket",
      "Rencana keamanan: jumlah petugas pengamanan, pengamanan swakarsa/kerjasama, SOP kerumunan",
      "Tanggal kegiatan yang tersisa minimal 30 hari kalender (idealnya 45 hari) untuk pengurusan",
      "Data asuransi kecelakaan bila diwajibkan venue atau platform ticketing",
    ],
    faqs: [
      { q: "Kapan sebaiknya saya mulai mengurus izin konser?", a: "Mulailah 45 hari sebelum hari-H — itu buffer yang nyaman. SITK sejak Perkap 16/2023 disarankan diajukan paling lambat 30 hari kalender sebelum kegiatan, dan izin lainnya (tempat, pemadam, kesehatan, reklame publikasi) berjalan dengan tenggat yang saling menumpuk. Dengan 45 hari, satu-dua kelambanan instansi masih tertampung; dengan 7 hari, hampir pasti ada izin yang tidak sempat terbit — dan pilihan yang tersisa adalah menunda acara atau berjalan ilegal, dua-duanya mahal." },
      { q: "Bolehkah menjual tiket sebelum izin keluar?", a: "Secara hukum tidak ada larangan eksplisit mengumumkan rencana acara, tetapi menjual tiket tanpa legalitas penyelenggaraan yang berjalan adalah taruhan yang tidak pernah menang: bila izin ditolak atau dipersulit, Anda wajib mengembalikan ribuan tiket, sementara deposit artis, vendor, dan pemasaran sudah keluar. Praktik yang lebih aman dan tetap efektif: buat pengumuman dan daftar tunggu (waitlist) tanpa transaksi, sementara pengurusan izin berjalan — lalu buka penjualan begitu SITK dan izin tempat terbit." },
      { q: "Berapa total biaya perizinan sebuah konser?", a: "Biaya resmi SITK tidak dipungut — pengurusan lewat Regula gratis menurut Perkap 16/2023. Yang membebani sebenarnya di luar itu: pajak hiburan dan retribusi daerah yang tarifnya berbeda tiap pemda, biaya petugas pengamanan sesuai jumlah yang disyaratkan, asuransi kecelakaan, dan kebutuhan teknis venue. Jasa pengurusan kami mulai Rp 5 juta tergantung jumlah izin dan skala acara — dan biasanya jauh lebih murah daripada satu kali penundaan acara karena izin yang tidak terbit." },
    ],
    related: ["badan-usaha-produksi-film", "izin-reklame-luar-ruang", "lisensi-musik-lmk", "kontrak-talent-kreator"],
  },
  {
    slug: "izin-reklame-luar-ruang",
    tagline: "Papan besar bicara paling lantang — pastikan pemerintah mendengarnya dengan baik hati.",
    heroSub:
      "Billboard, videotron, dan spanduk dengan izin reklame daerah yang benar — lokasi lolos kelayakan, pajak terukur, dan aset reklame Anda tidak berakhir ditutup paksa di tengah kampanye klien.",
    timeline: "Papan & spanduk 1–3 minggu · Videotron 4–8 minggu",
    intro: [
      "Reklame luar ruang adalah urusan daerah: jenis reklame (papan, videotron, spanduk, baliho), klasifikasi lokasi, tarif, sampai masa berlakunya ditentukan peraturan daerah dan perkada masing-masing daerah — dipayungi UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah yang menetapkan tarif pajak reklame terendah, misalnya Rp 50.000 per meter persegi per bulan untuk reklame video (videotron) dan Rp 25.000 untuk reklame papan. Karena setiap kota mengaturnya berbeda, dua papan ukuran sama di dua kota bisa berbeda biaya dan prosesnya berlipat. Itulah mengapa pengurusan reklame bukan administrasi seragam, melainkan pemetaan per lokasi.",
      "Risikonya nyata dan cepat: papan tanpa izin ditutup paksa, denda, bahkan dibongkar — sering kali di tengah masa kontrak advertiser yang sudah bayar penuh. Kesalahan yang berulang: memasang dulu sambil bilang akan mengurus nanti, memilih lokasi yang sebenarnya dilarang perda (jarak dari sekolah, tempat ibadah, simpang jalan tertentu), videotron yang lolos administrasi tapi gagal di kesesuaian tata ruang, dan yang paling senyap tapi paling mahal — lupa memperpanjang izin yang sudah habis, sehingga papan senilai ratusan juta itu berdiri ilegal hanya karena kalender yang tidak dijaga.",
      "Kami menangani reklame sebagai aset yang hidup: kelayakan lokasi dan jenis diperiksa terhadap perda dan rencana tata ruang sebelum Anda menanam modal papan, pengajuan izin beserta perhitungan pajak dan retribusinya diajukan dengan klasifikasi yang tepat — tidak bayar lebih dari seharusnya. Setelah terbit, masa berlaku dipantau dan perpanjangan dijalankan sebelum hangus; perubahan konten besar atau perubahan spesifikasi disesuaikan administrasinya. Media house dan pemilik aset reklame mendapat portofolio yang bersih di mata advertiser mana pun yang melakukan due diligence.",
    ],
    benefits: [
      { title: "Tidak ditutup di tengah kampanye", desc: "Izin yang berdiri sebelum papan berdiri — penutupan paksa, denda, dan pembongkaran keluar dari perhitungan risiko Anda." },
      { title: "Tarif & klasifikasi yang tepat", desc: "Kelas lokasi dan jenis reklame dihitung sesuai perda — Anda membayar pajak yang benar, tidak lebih, dan tidak menanggung temuan di kemudian hari." },
      { title: "Videotron lolos tata ruang", desc: "Media digital membutuhkan kesesuaian tata ruang di luar izin reklame biasa — kami memeriksanya sebelum Anda berinvestasi di perangkatnya." },
      { title: "Perpanjangan terkendali", desc: "Masa berlaku dipantau dan diperpanjang sebelum hangus — aset ratusan juta tidak mati mendadak karena kalender yang terlewat." },
      { title: "Portofolio yang dipercaya advertiser", desc: "Brand besar memeriksa legalitas media sebelum menempel — berkas Anda bersih, transaksi Anda lebih cepat." },
    ],
    process: [
      { title: "Kelayakan lokasi & jenis", desc: "Lokasi, ukuran, dan jenis media diperiksa terhadap perda reklame dan tata ruang — larangan jarak, kelas lokasi, dan batas ketinggian ditetapkan dulu." },
      { title: "Pengajuan izin & pajak", desc: "Permohonan diajukan ke instansi daerah, pajak reklame dan retribusi dihitung dengan klasifikasi yang benar — berkas lengkap sekali jalan." },
      { title: "Terbit & pemakaian", desc: "Izin terbit dan diserahkan bersama rangkuman kewajiban berjalan — pemasangan sesuai spesifikasi yang disetujui." },
      { title: "Pantauan & perpanjangan", desc: "Masa berlaku masuk kalender kepatuhan, perpanjangan diajukan sebelum kedaluwarsa, penyesuaian konten/spesifikasi besar diurus saat berubah." },
    ],
    requirements: [
      "Identitas pemohon dan legalitas badan usaha (NIB) — pemilik media atau penyewa papan",
      "Data lokasi: alamat, koordinat/titik pemasangan, ukuran dan spesifikasi media",
      "Rancangan desain atau konten yang akan dipasang",
      "Bukti hubungan dengan lahan/struktur: izin pemilik bangunan atau lahan, bila bukan milik sendiri",
      "Rencana tanggal pemasangan dan masa berlaku yang diinginkan",
    ],
    faqs: [
      { q: "Berapa pajak reklame untuk billboard dan videotron?", a: "UU No. 1 Tahun 2022 menetapkan tarif terendahnya: reklame video (termasuk videotron) Rp 50.000 per meter persegi per bulan dan reklame papan Rp 25.000 per meter persegi per bulan — di atas tarif minimum itu, tiap daerah menetapkan tarif sendiri lewat perda dan perkada, sering kali dengan pengali kelas lokasi. Jadi papan sama ukurannya bisa berbeda biaya nyata antara kota. Kami menghitung estimasi pajak per lokasi sebelum Anda komitmen — angka yang benar sejak awal menghindarkan Anda dari koreksi yang menyakitkan." },
      { q: "Papan saya sudah terlanjur terpasang tanpa izin — apa yang harus dilakukan?", a: "Jangan menunggu teguran datang. Jalur regularisasi: laporan terbuka ke instansi daerah, pembayaran pajak tertunggak sesuai hitungan yang seharusnya, dan pengajuan izin atas papan yang berdiri — peluang terbesarnya ada sebelum pengawasan mencatat pelanggaran, karena setelah teguran terbit, denda dan kemungkinan pembongkaran masuk percakapan. Kami menangani regularisasi seperti ini cukup sering; semakin cepat dimulai, semakin murah akhirnya." },
      { q: "Berapa lama masa berlaku izin reklame dan bagaimana perpanjangannya?", a: "Tergantung jenisnya dan perda daerahnya: videotron dan papan besar umumnya bertahun-tahun, spanduk dan umbul-umbul hanya mingguan sampai bulanan. Perpanjangan biasanya lebih ringan dari pengajuan awal — asal diajukan sebelum masa berlaku habis, karena papan dengan izin yang sudah hangus diperlakukan seperti tanpa izin. Karena itu kami menaruh semua tanggal berlaku di satu kalender kepatuhan: perpanjangan jalan di latar belakang, aset Anda terus menghasilkan." },
    ],
    related: ["pbg-slf", "izin-event-konser", "izin-usaha-perumahan", "branding-katalog"],
  },
  {
    slug: "lisensi-musik-lmk",
    tagline: "Lagu orang lain mempercantik usaha Anda — hormati lewat royalti, bukan kebetulan.",
    heroSub:
      "Registrasi lisensi musik ke Lembaga Manajemen Kolektif yang benar — untuk kafe, restoran, radio, YouTube, sampai aplikasi — agar usaha Anda bebas gugatan royalti dan kreator mendapat haknya.",
    timeline: "Pemetaan & registrasi 1–3 minggu, termasuk negosiasi tarif bila perlu",
    intro: [
      "Pasal 80 UU No. 28 Tahun 2014 tentang Hak Cipta menyebutnya tegas: setiap penggunaan karya secara komersial — musik yang diputar di kafe, restoran, hotel, karaoke, televisi, radio, aplikasi, sampai video yang dimonetisasi — wajib membayar royalti kepada pencipta melalui Lembaga Manajemen Kolektif (LMK). Untuk musik, repertoarnya berlapis: KCI mengelola hak komposisi (penulis lagu dan penerbit), WAMI repertoar penulis lagu luar negeri, PAPPRI hak penyanyi, ASIRI hak produser rekaman, dan IPWI hak pemain musik — tiap lapisan punya LMK-nya sendiri, dan PP No. 56 Tahun 2021 mengatur bagaimana seluruh pengelolaan royalti ini berjalan. Tarifnya berjenjang per kategori pengguna: kafe kecil berbeda jauh dari jaringan restoran, dan beda lagi dengan televisi nasional.",
      "Kesalahpahaman yang paling umum: musik dianggap gratis karena lagunya sudah tersedia di Spotify atau karena pemutarannya dari playlist pribadi — padahal lisensi langganan streaming menutup pemakaian pribadi, bukan pementasan publik di tempat usaha. Kesalahan kedua: bayar ke satu LMK dan merasa selesai, padahal satu lagu yang diputar memuat lapisan hak yang berbeda-beda. Kesalahan ketiga: mengabaikannya sampai gugatan datang — kasus kafe, karaoke, dan perusahaan media yang digugat royalti berlipat-lipat sudah cukup sering menjadi berita, dan di dalam gugatan itu biasanya bukan cuma royalti berjalan yang ditagih, melainkan tunggakan dari belakang yang membengkak.",
      "Kami mulai dari pemetaan: di mana musik dipakai, dari sumber apa, seberapa sering, dalam konteks apa — lalu dari situ terlihat LMK mana yang relevan dan tarif kategori mana yang seharusnya berlaku. Negosiasi tarif dilakukan sesuai skala usaha Anda yang sesungguhnya, registrasi dan pelaporan diatur, dan untuk konten kreator atau perusahaan digital, sistem kepatuhan musik disusun agar monetisasi tidak tiba-tiba diputus klaim hak cipta. Usaha yang membayar royalti dengan benar juga punya posisi berbeda di mata label dan artis — permintaan lisensi untuk event dan kolaborasi jadi jauh lebih mudah.",
    ],
    benefits: [
      { title: "Bebas gugatan royalti", desc: "Status lisensi terbukti tertulis — tuntutan perdata dan tunggakan berlipat tidak pernah masuk kalkulasi usaha Anda." },
      { title: "Tarif yang adil untuk skala Anda", desc: "Kategori penggunaan dan tarif dinegosiasikan sesuai kenyataan usaha — bukan tarif seragam yang menindih kafe kecil seperti menindih jaringan nasional." },
      { title: "Satu peta untuk semua LMK", desc: "Repertoar komposisi, rekaman, penyanyi, dan pemain musik dipetakan sekaligus — tidak ada lapisan hak yang terlewat dan tidak ada bayaran ganda." },
      { title: "Kredibel di mata label & artis", desc: "Bukti kepatuhan membuat permintaan penggunaan musik untuk event, iklan, dan kolaborasi diproses lebih cepat dan lebih murah." },
      { title: "Monetisasi digital tidak putus", desc: "Untuk konten kreator dan aplikasi: sistem penggunaan musik yang benar meminimalkan klaim Content ID dan pemutusan pendapatan." },
    ],
    process: [
      { title: "Pemetaan penggunaan musik", desc: "Sumber musik, frekuensi, lokasi, dan konteks pemakaian diinventarisasi — dari sinilah kewajiban yang sebenarnya terlihat." },
      { title: "Identifikasi LMK & kewajiban", desc: "Lapisan hak yang relevan ditetapkan: komposisi, rekaman, penyanyi, pemain musik — lengkap dengan tarif kategori yang seharusnya berlaku." },
      { title: "Negosiasi & registrasi", desc: "Tarif ditegakkan sesuai skala usaha, perjanjian lisensi ditandatangani, pembayaran awal diatur — status legal Anda mulai berlaku." },
      { title: "Sistem berjalan", desc: "Pelaporan berkala dan pemutakhiran penggunaan diatur sebagai rutinitas ringan — kepatuhan dipelihara tanpa mengganggu operasional." },
    ],
    requirements: [
      "Profil usaha: NIB/badan usaha, jenis usaha, lokasi, jam operasional",
      "Uraian penggunaan musik: live music, playlist, siaran, streaming, atau konten digital",
      "Daftar playlist atau sumber musik yang dipakai saat ini (bila ada)",
      "Data platform digital: nama channel, aplikasi, atau situs — untuk penggunaan daring",
      "Kontak pengelola yang mengurus hiburan atau konten di perusahaan Anda",
    ],
    faqs: [
      { q: "Berapa tarif lisensi musik untuk kafe atau usaha saya?", a: "Tarif LMK ditetapkan per kategori pengguna dan skala usaha — kafe kecil dengan playlist di jam tertentu berada di kelas terendah dan terbayar jauh lebih ringan daripada yang dibayangkan banyak orang, sementara jaringan restoran, hotel, dan televisi memakai kelas yang jauh lebih tinggi. Jasa kami mulai Rp 2,5 juta mencakup pemetaan, negosiasi, dan registrasi; yang pasti, tarif yang benar selalu lebih murah daripada satu gugatan royalti plus tunggakan dari belakang yang dihitung bertahun-tahun." },
      { q: "Saya memutar musik dari Spotify di kafe — apakah tetap wajib bayar LMK?", a: "Ya. Langganan Spotify menutup pemakaian pribadi — mendengarkan musik untuk diri sendiri. Memutarnya di tempat usaha untuk pengunjung adalah pementasan publik, yang lisensinya berbeda dan wajib melalui LMK. Hal yang sama berlaku untuk YouTube di layar kafe dan untuk band yang membawakan lagu orang lain — hak komposisi tetap milik penulis lagunya, apa pun medium pembawanya. Kabar baiknya: untuk penggunaan publik kecil, tarifnya memang dirancang terjangkau — masalahnya bukan harganya, melainkan tidak pernah mengurusnya." },
      { q: "Apa risikonya kalau saya tidak membayar royalti musik?", a: "Risiko paling nyata bukan denda negara, melainkan gugatan perdata dari LMK atas nama pencipta: pembayaran royalti berjalan, tunggakan masa lalu yang dihitung mundur, biaya perkara — dan berita yang tidak menyenangkan untuk nama usaha Anda. Kasus karaoke dan kafe yang digugat dengan nominal ratusan juta sudah pernah terjadi lebih dari sekali. Selain itu, usaha yang tertangkap masalah lisensi sulit melanjutkan kerja sama dengan label, artis, dan penyelenggara event — pintu yang rapuh di industri yang semuanya bertumpu pada relasi." },
    ],
    related: ["hak-cipta-paten", "izin-event-konser", "kontrak-talent-kreator", "sertifikat-film-lsf"],
  },
  {
    slug: "isbn-penerbitan",
    tagline: "Buku yang berguna layak punya nomor resmi — dan Anda layak disebut penerbit.",
    heroSub:
      "Registrasi penerbit, penerbitan ISBN, dan Katalog Dalam Terbitan di Perpustakaan Nasional — legalitas terbit yang membuka jalur toko buku, perpustakaan, marketplace, sampai bukti kepemilikan karya.",
    timeline: "5–10 hari kerja setelah dokumen lengkap",
    intro: [
      "ISBN (International Standard Book Number) bagi buku adalah apa yang NIB bagi usaha: identitas resmi yang membuat karya bisa ditemukan, dipesan, dan diperdagangkan di sistem yang benar. Penerbitannya dikelola Perpustakaan Nasional RI berdasarkan standar internasional ISO 2108, dan alurnya tetap: penerbit mendaftar dulu — penerbit bisa badan usaha, bisa pula perorangan yang menerbitkan bukunya sendiri — baru kemudian mengajukan ISBN untuk setiap judul, lengkap dengan Katalog Dalam Terbitan (KDT) yang mendokumentasikan data terbitnya. Dua hal yang sering terlewat dari percakapan: satu ISBN hanya berlaku untuk satu format (cetak dan e-book adalah dua ISBN), dan UU No. 43 Tahun 2007 tentang Perpustakaan menuntut kewajiban menyimpan eksemplar buku terbit ke Perpusnas — kewajiban kecil yang menentukan sah-tidaknya keberlangsungan ISBN Anda.",
      "Tanpa ISBN, pintu distribusi tertutup satu per satu: toko buku dan jaringan distribusinya, perpustakaan sekolah dan kampus, marketplace buku, sampai program perpustakaan digital menuntut nomor tersebut sebagai syarat masuk. Jebakan yang lebih licik ada di sekitarnya: penulis yang meminjam ISBN penerbit lain menemukan bukunya tercatat atas nama penerbit itu — hak dan identitas terbit yang bukan miliknya; penerbit mandiri yang lupa mengirim eksemplar menemukan status penerbitannya bermasalah saat mengajukan ISBN berikutnya; dan edisi revisi yang dicetak ulang tanpa ISBN baru membuat dua versi buku yang sama tercampur dalam satu nomor — kekacauan kecil yang memakan waktu lama untuk dibersihkan.",
      "Kami menata seluruh rantainya: registrasi penerbit di Perpusnas atas nama yang benar, pendaftaran ISBN per judul beserta KDT-nya, panduan penempatan kode di buku, sampai kewajiban deposit eksemplar yang dijadwalkan agar tidak terlewat. Untuk penerbit mandiri dan penulis yang membangun katalognya sendiri, kami selaraskan legalitas terbit ini dengan strategi distribusi dan pencatatan hak cipta — sehingga buku yang Anda terbitkan bukan hanya ada, tapi tercatat milik siapa dan bisa dijual ke mana pun.",
    ],
    benefits: [
      { title: "Identitas penerbit yang sah", desc: "Nama penerbit terdaftar di sistem Perpusnas — buku terbit atas nama Anda, bukan nama pihak lain yang menyewakan ISBN-nya." },
      { title: "Jalur distribusi terbuka", desc: "Toko buku, perpustakaan, marketplace, dan katalog penerbitan menuntut ISBN — pintu-pintu itu terbuka sejak buku pertama." },
      { title: "Bukti keperluan hak cipta", desc: "Data terbit resmi memperkuat posisi Anda saat mencatat hak cipta atau membuktikan kepemilikan karya di kemudian hari." },
      { title: "Katalog Dalam Terbitan rapi", desc: "Metadata judul yang benar sejak awal — pencarian, sitasi, dan inventarisasi buku Anda berjalan bersih di seluruh sistem." },
      { title: "Self-publishing tanpa kompromi", desc: "Penerbit perorangan sah dan diakui — penulis membangun katalognya sendiri tanpa menyerahkan identitas terbitnya ke pihak lain." },
    ],
    process: [
      { title: "Registrasi penerbit", desc: "Identitas penerbit — badan usaha atau perorangan — didaftarkan di sistem Perpusnas dengan data yang benar dan bertahan lama." },
      { title: "ISBN & KDT per judul", desc: "Setiap judul dan format diajukan ISBN-nya, Katalog Dalam Terbitan disusun lengkap — termasuk edisi dan rencana format." },
      { title: "Cetak & tempel", desc: "Panduan penempatan kode ISBN dan data penerbitan pada buku — kecil, tapi sering salah dan berulang kali diminta distributor." },
      { title: "Deposit & arsip", desc: "Kewajiban eksemplar ke Perpusnas dijadwalkan — status penerbitan Anda tetap bersih untuk judul-judul berikutnya." },
    ],
    requirements: [
      "Identitas penerbit: KTP perorangan atau dokumen badan usaha (NIB bila ada)",
      "Data buku: judul, nama penulis, spesifikasi (jumlah halaman, ukuran, format)",
      "Rencana terbit: perkiraan tanggal terbit dan jumlah format (cetak, e-book, audiobook)",
      "Rancangan sampul dan halaman identitas penerbitan (bila sudah ada)",
      "Naskah final atau bab contoh bila diminta saat pendaftaran",
    ],
    faqs: [
      { q: "Berapa biaya mengurus ISBN dan pendaftaran penerbit?", a: "Biaya resmi dari Perpusnas untuk pendaftaran penerbit dan penerbitan ISBN tidak dipungut — layanan ini gratis oleh negara. Yang Anda bayarkan adalah jasa pengurusan dan penataannya: mulai Rp 750 ribu untuk registrasi penerbit, ISBN per judul, KDT, dan panduan deposit. Tambahkan biaya kecil pengiriman eksemplar buku ke Perpusnas sebagai kewajiban penyimpanan. Totalnya tetap kecil dibanding nilai yang dibuka: tanpa ISBN, buku Anda praktis tidak bisa masuk toko buku dan perpustakaan mana pun." },
      { q: "Apakah saya harus punya badan usaha untuk menerbitkan buku sendiri?", a: "Tidak wajib. Sistem Perpusnas mengakui penerbit perorangan — penulis yang menerbitkan karyanya sendiri bisa mendaftar sebagai penerbit atas namanya. Badan usaha menjadi relevan ketika rencananya lebih besar: katalog banyak judul, kerja sama distributor yang menuntut NIB, atau pemasukan yang perlu ditampung entitas usaha. Strategi yang kami sarankan untuk penulis baru: mulai sebagai penerbit perorangan sekarang, dan bila katalog tumbuh, naikkan strukturnya — pendaftarannya bisa disesuaikan tanpa membuang riwayat ISBN yang sudah berjalan." },
      { q: "Buku saya terbit dalam versi cetak dan e-book — apakah satu ISBN cukup?", a: "Tidak — setiap format berhak dan memerlukan ISBN tersendiri: cetak satu, e-book satu, dan audiobook lagi satu. Aturan itu bukan formalitas semata: distributor dan katalog mengelola setiap format sebagai produk berbeda, dan pencampuran format dalam satu nomor membuat data penerbitan Anda kacau di seluruh sistem. Satu-satunya pengecualian: cetak ulang konten yang sama tanpa perubahan berarti tetap memakai ISBN yang ada — yang menuntut nomor baru adalah perubahan format atau edisi yang berarti." },
    ],
    related: ["hak-cipta-paten", "website-ecommerce", "kontrak-talent-kreator", "pendaftaran-pers-online"],
  },
  {
    slug: "rating-game-igrs",
    tagline: "Game bagus yang diblokir hanya karena satu dokumen — jangan biarkan itu kisah Anda.",
    heroSub:
      "Registrasi & rating umur di IGRS Komdigi untuk setiap game yang diedarkan di Indonesia — dari studio lokal sampai publisher global — sebelum pemblokiran yang memilih tanggal rilis Anda.",
    timeline: "2–4 minggu tergantung kelengkapan dokumen & antrean penilaian",
    intro: [
      "Game yang diedarkan dan dimonetisasi di Indonesia bukan sekadar hiburan di mata hukum — ia adalah penyelenggaraan sistem elektronik, dan itu menempatkannya di bawah PP No. 71 Tahun 2019: wajib registrasi PSE dan tunduk pada pengawasan Komdigi. Di atas itu berdiri IGRS (Indeks Game Rating SIZE — Sistem Informasi dan Evaluasi), portal rating dan registrasi game milik Komdigi yang menempatkan setiap game pada klasifikasi umur: 3+, 7+, 13+, 17+, atau 21+ sesuai unsur kekerasan, perjudian, bahasa, dan konten sensitifnya. Cakupannya disengaja luas: game lokal, game global yang menyasar pemain Indonesia, sampai game sederhana yang monetisasinya dari iklan — semuanya berada di dalam pagar yang sama.",
      "Seksanya sudah pernah dipertontonkan: pemblokiran platform dan game global pada 2022 menyebabkan ratusan juta pemain Indonesia kehilangan akses semalam — dan sejak itu penindakan terhadap game tanpa registrasi berjalan teratur. Kesalahan yang berulang: studio kecil menganggap aturan ini hanya untuk raksasa, padahal monetisasi iklan pun menjadikan game mereka operator sistem elektronik; developer global mengandalkan publisher lokal yang ternyata tidak mendaftarkan judulnya; dan pengajuan yang paling sering mundur-mundur adalah yang dokumen gameplay-nya tidak representatif — video dan deskripsi yang tidak menunjukkan unsur konten sebenarnya, sehingga penilaian rating kembali dan koreksi diminta berkali-kali.",
      "Kami mengurusnya sebagai satu rangkaian, bukan dua urusan: penilaian konten dilakukan lebih dulu — elemen yang menentukan naik-turunnya rating diidentifikasi dan direkomendasikan — lalu dokumen gameplay, deskripsi fitur, dan model monetisasi disusun dalam format yang penilai harapkan. Pengajuan IGRS dan registrasi PSE dijalankan selaras, tanggapan Komdigi dijawab dengan cepat, dan setelah rating resmi terbit, pembaruan konten besar di masa depan diketahui kapan perlu penyesuaian. Untuk game rilis global, ini bukan birokrasi tambahan — ini syarat masuk ke pasar ratusan juta pemain.",
    ],
    benefits: [
      { title: "Rilis tanpa risiko blokir", desc: "Registrasi berdiri sebelum distribusi — pemblokiran dan penindakan Komdigi bukan lagi momok di atas tanggal rilis Anda." },
      { title: "Rating yang akurat", desc: "Klasifikasi umur yang benar menempatkan game di tangan pemain yang tepat — komplain orang tua dan temuan konten menyusut." },
      { title: "Monetisasi yang aman", desc: "Iklan, in-app purchase, dan loot box yang didokumentasikan sejak pengajuan — sumber pendapatan Anda tidak menjadi temuan pengawasan." },
      { title: "Kredibilitas di mata publisher & platform", desc: "Rating IGRS dan status PSE adalah dokumen yang ditanyakan distributor dan marketplace — Anda menjawabnya sebelum ditanya." },
      { title: "Dua kewajiban, satu rangkaian", desc: "IGRS dan PSE Komdigi diurus selaras dengan dokumen yang saling memakai — tidak ada pengajuan ganda yang membuang waktu." },
    ],
    process: [
      { title: "Penilaian konten", desc: "Unsur kekerasan, perjudian, bahasa, dan konten sensitif ditelaah — rekomendasi rating disusun sebelum dokumen dibuat, bukan setelah ditolak." },
      { title: "Dokumen gameplay", desc: "Video gameplay, screenshot, deskripsi fitur, dan model monetisasi disiapkan representatif — meminimalkan putaran koreksi penilaian." },
      { title: "Pengajuan & tanggapan", desc: "Registrasi IGRS dan sinkronisasi PSE diajukan; tanggapan penilai dijawab cepat dan terukur sampai disetujui." },
      { title: "Rating resmi & pemeliharaan", desc: "Rating terbit dan dilampirkan sesuai ketentuan; pembaruan konten besar di masa depan dipetakan kapan menuntut penyesuaian rating." },
    ],
    requirements: [
      "Akses build/game beserta deskripsi fitur inti dan mode permainan",
      "Video gameplay dan screenshot yang representatif atas seluruh konten",
      "Data pengembang atau publisher: badan usaha (NIB) bila ada, kontak resmi",
      "Uraian model monetisasi: iklan, in-app purchase, langganan, atau berbayar di muka",
      "Daftar platform distribusi yang dituju (mobile, PC, konsol, web)",
    ],
    faqs: [
      { q: "Apakah game kecil yang monetisasinya dari iklan juga wajib registrasi IGRS?", a: "Ya, dan inilah salah understanding yang paling sering menghantam studio kecil. Kewajiban tidak mengukur ukuran tim — yang dinilai adalah kegiatan: game yang diedarkan kepada publik Indonesia dan menghasilkan, termasuk lewat iklan, berstatus operator sistem elektronik menurut PP 71/2019 dan tunduk pada rating serta registrasi. Kabar baiknya, beban administratif untuk game kecil juga lebih ringan dan biaya resminya tidak memberatkan. Yang tidak terjangkau justru pemblokiran mendadak di tengah kampanye iklan yang sedang berjalan." },
      { q: "Berapa biaya registrasi IGRS dan PSE?", a: "Registrasi dan rating di IGRS tidak dipungut biaya resmi — layanan Komdigi ini gratis. Yang berbiaya adalah registrasi PSE Lingkup Privat bila game Anda belum terdaftar sebagai PSE, dengan PNBP sekitar Rp 1 juta, dan jasa kami mulai Rp 2 juta yang mencakup penilaian konten, penyusunan dokumen gameplay, dan pengelolaan tanggapan penilai. Dibandingkan kerugian satu minggu pemblokiran — pemain hilang, pendapatan iklan nol — biaya ini praktis dianggap asuransi tanggal rilis." },
      { q: "Apa yang terjadi kalau game saya tidak diregistrasi dan ketahuan?", a: "Preseden 2022 menjawabnya dengan tegas: platform dan game tanpa kepatuhan diblokir aksesnya dari jaringan Indonesia — dan pemain tidak peduli siapa yang salah, mereka hanya kehilangan akses. Untuk game individual, penindakan berjalan lewat pemblokiran konten dan penonaktifan distribusi, dengan pemanggilan penyelenggara untuk kepatuhan. Ada juga dampak yang lebih senyap: marketplace dan publisher menolak judul tanpa dokumen rating, dan kampanye iklan yang menargetkan Indonesia berisiko ditarik. Regularisasi setelah diblokir memungkinkan, tapi akses yang hilang dan pemain yang pindah tidak sepenuhnya kembali." },
    ],
    related: ["pse-komdigi", "aplikasi-sistem", "hak-cipta-paten", "website-ecommerce"],
  },
  {
    slug: "pendaftaran-pers-online",
    tagline: "Berita bisa gratis; kredibilitas perusahaan pers tidak.",
    heroSub:
      "Verifikasi perusahaan pers online ke Dewan Pers — kredibilitas di mata publik, perlindungan UU Pers, akses iklan pemerintah, dan tarif pajak khusus yang hanya untuk media yang terverifikasi.",
    timeline: "Verifikasi 2–6 minggu termasuk proses pengecekan Dewan Pers",
    intro: [
      "UU No. 40 Tahun 1999 tentang Pers menempatkan media pers — termasuk media online — dalam posisi yang dihormati hukum: bebas dari sensor dan pembredelan, dengan hak jawab dan hak koreksi yang terlindungi. Tapi perlindungan itu tidak datang otomatis ke setiap situs berita: yang mengaku sebagai perusahaan pers dinilai kebenarannya oleh Dewan Pers melalui verifikasi perusahaan pers — kesesuaian standar UUT, kejelasan legalitas badan usaha dan pendiri, keberadaan redaksi yang nyata, dan kepatuhan pada standar kepersan termasuk Kode Etik Jurnalistik serta Pedoman Pemberitaan Media Siber. Sertifikat verifikasi itu yang membedakan media yang dilindungi UU Pers dari blog biasa yang berpakaian seperti media.",
      "Nilai verifikasinya terasa di tempat yang tidak diperkirakan banyak orang. Perusahaan pers terverifikasi berhak atas tarif pajak penghasilan final 0,5 persen dari omzet — fasilitas yang dibuka UU No. 7 Tahun 2021 (HPP) khusus untuk usaha pers yang disahkan Dewan Pers. Media online terdaftar lebih mudah mendapat akses iklan layanan publik dan kerja sama pemerintah yang mensyaratkan verifikasi. Wartawannya bisa diakreditasi. Dan ketika kontennya disengketai, jalurnya bukan pemblokiran mendadak lewat UU ITE — melainkan prosedur pers melalui Dewan Pers, dengan hak jawab dan koreksi yang berjalan sebagaimana mestinya. Media yang tidak terverifikasi menjalani sebaliknya: gugatan, takedown, dan pencurian kredibilitas yang sulit dibantah.",
      "Kami memeriksa kesiapan Anda sebelum mengajukan: legalitas badan usaha dan struktur pendirinya, kesesuaian situs terhadap standar yang diuji Dewan Pers — identitas redaksi, rubrikasi, keberadaan wartawan, mekanisme hak jawab — sampai ketertiban konten terhadap Pedoman Pemberitaan Media Siber. Yang kurang disiapkan lebih dulu, lalu verifikasi diajukan dan proses pengecekannya didampingi sampai sertifikat terbit. Setelahnya, kepatuhan berjalan sebagai rutinitas editorial — bukan kepanikan saat sengketa datang.",
    ],
    benefits: [
      { title: "Kredibilitas yang terbukti", desc: "Sertifikat Dewan Pers adalah jangkar kepercayaan — pembaca, iklan, dan mitra tidak lagi menggolongkan Anda sebagai blog tak bertanggung jawab." },
      { title: "Perlindungan penuh UU Pers", desc: "Hak jawab, hak koreksi, dan kebebasan dari pembredelan berlaku — sengketa konten diperlakukan sebagai urusan pers, bukan urusan pemblokiran." },
      { title: "Akses iklan & kerja sama pemerintah", desc: "Banyak iklan layanan publik dan kerja sama resmi mensyaratkan media terverifikasi — pintu itu terbuka bagi Anda, tertutup bagi yang lain." },
      { title: "Pajak final 0,5 persen", desc: "Fasilitas UU HPP untuk perusahaan pers terverifikasi — tarif penghasilan dari omzet yang jauh lebih ringan daripada tarif umum." },
      { title: "Wartawan bisa diakreditasi", desc: "Tim redaksi Anda memperoleh kartu pers dan akses liputan resmi — cakupan berita melebar, kredibilitas bertumpuk." },
    ],
    process: [
      { title: "Audit kesiapan", desc: "Legalitas usaha, struktur redaksi, dan situs diperiksa terhadap standar verifikasi — kekurangan dicatat dan dijadikan daftar kerja, bukan kejutan." },
      { title: "Penataan situs & redaksi", desc: "Identitas redaksi, rubrikasi, mekanisme hak jawab, dan kepatuhan konten ditata sesuai standar UUT dan Pedoman Pemberitaan Media Siber." },
      { title: "Pengajuan verifikasi", desc: "Berkas diajukan ke Dewan Pers; proses pengecekan dan klarifikasi didampingi penuh sampai selesai." },
      { title: "Sertifikat & kepatuhan lanjutan", desc: "Sertifikat terbit dan dipasang sesuai ketentuan — panduan kepatuhan editorial berkelanjutan diserahkan agar status terjaga." },
    ],
    requirements: [
      "Legalitas badan usaha media (NIB) dan identitas pendiri",
      "Struktur redaksi: pimpinan redaksi, alamat redaksi, kontak yang aktif",
      "Profil situs: domain, rubrikasi, frekuensi pemberitaan, kebijakan editorial",
      "Daftar wartawan dan kontributor beserta perannya",
      "Komitmen kepatuhan terhadap standar UUT, Kode Etik Jurnalistik, dan Pedoman Pemberitaan Media Siber",
    ],
    faqs: [
      { q: "Apakah blog pribadi atau portal kecil bisa mendaftar sebagai perusahaan pers?", a: "Yang dinilai Dewan Pers bukan ukuran trafik, melainkan kenyataan: apakah ada badan usaha yang jelas, ada redaksi yang bekerja sungguhan dengan identitas yang terbuka, dan apakah pemberitaannya berjalan sesuai standar kepersan. Blog pribadi tanpa redaksi dan portal isi salin-tempel akan tersandung di pengecekan. Sebaliknya, portal kecil dengan redaksi nyata dan kepatuhan yang terjata berpeluang besar — media online kecil terverifikasi sudah banyak beroperasi. Kami memeriksa kesiapan Anda lebih dulu agar pengajuan pertama bukan percobaan kedua." },
      { q: "Berapa biaya dan berapa lama proses verifikasi Dewan Pers?", a: "Biaya resmi verifikasi Dewan Pers tergolong kecil — jauh di bawah jutaan rupiah — karena ini mekanisme kelembagaan, bukan perizinan komersial. Jasa kami mulai Rp 1,5 juta mencakup audit kesiapan, penataan situs dan redaksi, pengajuan, dan pendampingan pengecekan. Waktunya umumnya dua sampai enam minggu tergantung antrean dan kecepatan klarifikasi. Yang menentukan lama-pendeknya paling sering bukan Dewan Pers-nya, melainkan kekurangan dokumen dan penataan situs yang harus diperbaiki di tengah proses — itulah sebabnya audit kesiapan di depan menghemat minggu-minggu di belakang." },
      { q: "Apa manfaat nyata fasilitas pajak 0,5 persen untuk media?", a: "UU No. 7 Tahun 2021 (HPP) memberi tarif penghasilan final 0,5 persen dari omzet bagi usaha pers yang terverifikasi Dewan Pers — jauh lebih ringan daripada tarif PPh badan umum 22 persen atas laba. Untuk portal berita yang omzetnya dominan dari iklan dengan margin tipis, selisih ini bisa menjadi pembeda untung-rugi di akhir tahun. Syaratnya persis yang diperiksa di proses verifikasi ini, sehingga satu sertifikat membuka dua pintu sekaligus: kredibilitas di depan publik dan efisiensi pajak di pembukuan." },
    ],
    related: ["pse-komdigi", "website-ecommerce", "hak-cipta-paten", "kontrak-talent-kreator"],
  },
  {
    slug: "lisensi-merchandise",
    tagline: "Karakter Anda layak jadi kaus, gelas, dan mainan — dengan kontrak yang menjaganya.",
    heroSub:
      "Struktur lisensi merchandise & kolaborasi brand yang benar: royalti terukur, kualitas terkontrol, dan hak atas karakter serta merek Anda tetap di tangan Anda — sebagai pemilik IP maupun pemegang lisensi.",
    timeline: "Audit & penyusunan kontrak 5–10 hari kerja per kesepakatan",
    intro: [
      "Merchandise adalah cara paling lama dan paling menguntungkan untuk menghidupkan karya: karakter, logo, dan estetika Anda dicetak menjadi produk, dan setiap penjualan membawa royalti kembali ke pemiliknya. Hukumnya berdiri di dua kaki: karakter dan karya grafis dilindungi hak cipta menurut UU No. 28 Tahun 2014, sementara nama dan logo dilindungi merek menurut UU No. 20 Tahun 2016 — dan hanya yang terdaftar yang memberi Anda amunisi saat pelanggaran datang. Kontrak lisensi kemudian menerjemahkan hak itu menjadi kesepakatan yang bisa dijalankan: cakupan produk dan kanal, wilayah, masa berlaku, royalti sebagai persentase dari penjualan bersih (industri bergerak dari satu digit sampai belasan persen tergantung kekuatan IP), uang muka minimum, mekanisme persetujuan desain, quality control, sampai hak audit pembukuan mitra.",
      "Keruntuhan kesepakatan merchandise hampir selalu bermula dari yang sama: segalanya diatur lewat pesan singkat dan kepercayaan, tanpa satu dokumen pun. Lalu pertanyaan-pertanyaan kecil menjadi perang: royalti dihitung dari harga kotor atau penjualan bersih — siapa menentukan biaya mana yang boleh dipotong; eksklusivitas tidak pernah disebut — lalu karakter yang sama muncul di produk pesaing mitra Anda; tidak ada persetujuan desain — produk jelek beredar memakai wajah brand Anda; dan pada kolaborasi, tidak pernah jelas karya barunya milik siapa. Untuk pemegang lisensi, risikonya berlawanan arah: bayar advance untuk lisensi yang ternyata tidak eksklusif, atau investasi produksi hancur karena kontrak bisa diakhiri sewaktu-waktu tanpa ganti rugi.",
      "Kami menangani ini sebagai pekerjaan strategi, bukan sekadar drafting: audit IP dulu — merek terdaftar di kelas yang tepat, karakter terdokumentasi sebagai karya — karena tidak ada yang bisa dilisensikan dari hak yang tidak jelas. Struktur kesepakatan disusun sesuai posisi tawar Anda: royalti dan advance yang wajar, wilayah dan masa berlaku yang masuk akal, approval cycle yang bisa dijalankan tanpa membunuh kecepatan produksi. Drafting dan negosiasinya kami bawa sampai tanda tangan, dan pelaksanaannya — persetujuan desain, laporan penjualan, audit — kami jadikan rutinitas yang tertulis di dalam kontrak itu sendiri.",
    ],
    benefits: [
      { title: "Nilai IP menjadi pendapatan terukur", desc: "Karakter dan merek Anda bekerja sebagai aset — royalti mengalir tercatat, bukan menjadi kemurahan hati yang tidak pernah dihitung." },
      { title: "Royalti tidak bocor", desc: "Definisi penjualan bersih, penyertaan diskon dan retur, serta hak audit ditulis tegas — angka royalti tidak bisa dimainkan di pembukuan mitra." },
      { title: "Kualitas terjaga", desc: "Mekanisme persetujuan desain dan quality control berjalan di dalam kontrak — produk jelek tidak berhak memakai wajah brand Anda." },
      { title: "Eksklusivitas yang jelas", desc: "Produk, kanal, dan wilayah yang eksklusif ditetapkan sejak awal — karakter Anda tidak diperebutkan atau dijual dua kali di pasar yang sama." },
      { title: "Berakhir dengan rapi", desc: "Sisa stok, perpanjangan, dan hak pasca-berakhirnya kontrak diatur dari awal — hubungan yang berhenti tidak meninggalkan luka yang menggugat." },
    ],
    process: [
      { title: "Audit IP & posisi tawar", desc: "Merek dan hak cipta atas karakter diverifikasi dan didokumentasikan — kekuatan IP menentukan royalti, bukan sebaliknya." },
      { title: "Struktur kesepakatan", desc: "Cakupan produk, wilayah, masa berlaku, royalti, advance, dan eksklusivitas dirancang sesuai tujuan Anda: pendapatan maksimal atau penyebaran brand." },
      { title: "Drafting & negosiasi", desc: "Kontrak disusun lengkap — approval, QC, pelaporan, audit, skenario berakhir — dan dinegosiasikan sampai dua pihak menandatangani dengan kepala tegak." },
      { title: "Pelaksanaan terpandu", desc: "Siklus persetujuan desain, laporan penjualan berkala, dan pemutakhiran kontrak berjalan sesuai ketentuan — kesepakatan hidup, bukan diarsipkan." },
    ],
    requirements: [
      "Bukti kekayaan intelektual: sertifikat merek dan/atau dokumentasi karya karakter (kami urus pendaftarannya bila belum ada)",
      "Profil mitra dan rencana produk: jenis merchandise, estimasi produksi, kanal penjualan",
      "Target wilayah dan masa kerja sama yang diinginkan",
      "Ekspektasi komersial: royalti, uang muka, atau skema bagi hasil yang dipikirkan",
      "Contoh desain atau artwork yang akan dilisensikan",
    ],
    faqs: [
      { q: "Berapa royalti merchandise yang wajar?", a: "Praktik industri bergerak dari satu digit sampai belasan persen dari penjualan bersih — karakter independen dengan penggemar setia bisa duduk lebih tinggi, lisensi lisensier baru lebih rendah, dan kolaborasi besar sering memakai advance minimum yang menjamin pemilik IP meski penjualan lambat. Yang lebih menentukan daripada persentasenya adalah definisinya: dari penjualan bersih atau kotor, potongan apa yang boleh, dan adakah hak audit. Kontrak yang menulis angka besar tanpa definisi jelas sering bernilai lebih sedikit daripada angka sedang yang terukur dengan benar." },
      { q: "Apakah merek harus terdaftar dulu sebelum melisensikan merchandise?", a: "Sangat disarankan — sampai hampir menjadi syarat. Lisensi pada hakikatnya adalah memberi izin memakai hak Anda; kalau mereknya belum terdaftar dan karakternya tidak terdokumentasi, yang Anda lisensikan adalah reputasi, bukan hak — dan reputasi tidak bisa digugat. Pendaftaran merek ke DJKI berjalan beberapa bulan sampai sertifikat terbit, tetapi pengajuan sejak hari-h pertama sudah memberi posisi prioritas yang berarti. Untuk karakter, pencatatan hak cipta melengkapi perlindungannya. Kami mengurutkan keduanya bersamaan dengan penyusunan kontrak agar waktu Anda tidak menganggur." },
      { q: "Apa bedanya kolaborasi brand dan lisensi merchandise?", a: "Lisensi adalah memberi izin memakai IP Anda dengan bayaran — kepemilikan tetap di tangan Anda. Kolaborasi membuat sesuatu yang baru bersama-sama, dan di sinilah pertanyaan yang paling sering menghantam: karya barunya milik siapa, siapa boleh memakainya setelah kampanye berakhir, dan siapa yang menanggung jika terjadi pelanggaran. Kolaborasi tanpa kontrak yang menegaskan hal-hal itu meninggalkan IP gabungan yang tidak jelas pemiliknya — masalah yang jauh lebih sulit dibongkar daripada mencegahnya. Keduanya sah dan menguntungkan; yang tidak boleh adalah menjalankan salah satunya dengan dokumen yang ditulis untuk yang lain." },
    ],
    related: ["pendaftaran-merek", "hak-cipta-paten", "kontrak-talent-kreator", "franchise"],
  },
  {
    slug: "kontrak-talent-kreator",
    tagline: "Wajah yang menopang juta pengikut adalah aset — jangan biarkan aset itu berjalan tanpa kontrak.",
    heroSub:
      "Kontrak talent, kreator, dan influencer yang adil dua arah: eksklusivitas yang dibayar wajarnya, pembagian hasil yang jelas, kepemilikan konten yang tercatat, dan pintu keluar yang tidak meninggalkan perang.",
    timeline: "3–7 hari kerja per paket kontrak",
    intro: [
      "Di industri kreator, aset terbesar sering berupa manusia dan akunnya — dan hukum memperlakukan hal itu persis seperti yang ditulisnya, bukan seperti yang disepakati keduanya di atas meja makan. Hubungan talent dan management berdiri di atas hukum perikatan KUHPerdata: bebas disusun, selama tidak melanggar ketentuan. Satu garis yang harus dilintasi dengan hati-hati: batas antara kerja sama mandiri dan hubungan kerja menurut UU Ketenagakerjaan (UU 13/2003 jo. UU Cipta Kerja) — struktur yang salah bisa menyeret management ke kewajiban pemberi kerja yang jauh lebih berat dari yang direncanakan. Di atas semuanya berlaku UU ITE dan UU Perlindungan Data Pribadi: konten dan data pengikut yang dikelola punya kewajiban hukumnya sendiri.",
      "Skenario tanpa kontrak sudah menjadi cerita klasik yang tidak pernah membosankan: talent pergi membawa akun yang sebenarnya dibangun management — tidak ada klausul yang menahan, tidak ada pembagian yang menyisa; revenue share dihitung dari definisi yang tidak pernah ditulis — pendapatan kotor atau bersih, potongan platform masuk atau tidak; footage dan konten yang dibayar mahal ternyata secara hukum tetap milik kreator yang membuatnya, karena tidak pernah ada alih hak; dan morals clause yang tidak pernah ada membuat brand yang menggandeng talent tengah skandal ikut terbakar tanpa pintu keluar yang tertulis. Sebaliknya, kontrak yang timpang — eksklusivitas tanpa kompensasi yang layak — hanya menahan talent sampai kontrak pertama habis, lalu ia pergi untuk selamanya.",
      "Kami menyusunnya dari pemetaan hubungan: karyawan, mitra usaha, atau duta — karena strukturnya menentukan segalanya. Kontraknya kemudian menutup titik-titik rawan: scope kerja dan deliverables, masa dan wilayah eksklusivitas beserta kompensasinya, revenue share dengan definisi angka yang tidak bisa ditafsirkan dua arah, kepemilikan dan pemberian lisensi atas konten, morals clause yang proporsional, serta skenario keluar — pemindahan akun, konten buffer, dan larangan merampas tim. Negosiasi kami bawa dua arah: kontrak yang dianggap adil oleh talent adalah kontrak yang benar-benar bertahan, dan bertahanlah yang melindungi kedua sisi.",
    ],
    benefits: [
      { title: "Aset terikat, hubungan terhormat", desc: "Hak dan kewajiban tertulis dua arah — talent dilindungi, management terlindungi, dan tidak ada yang memegang kekuasaan yang tidak disepakati." },
      { title: "Uang yang jelas", desc: "Revenue share ditulis dengan definisi angka: kotor atau bersih, potongan apa, dilaporkan kapan — sengketa pembagian hilang dari kalender." },
      { title: "Konten tetap milik yang berhak", desc: "Alih hak atau lisensi atas konten disusun sesuai tujuan — footage mahal tidak pergi bersama orang yang mengeditnya." },
      { title: "Skandal terkelola", desc: "Morals clause yang proporsional memberi pintu keluar yang tertulis saat reputasi terbakar — brand Anda tidak ikut terjun tanpa pilihan." },
      { title: "Keluar tanpa perang", desc: "Skenario berakhirnya hubungan diatur: akun, buffer konten, tim, dan jadwal transisi — perpisahan mahal tidak perlu menjadi gugatan." },
    ],
    process: [
      { title: "Pemetaan hubungan & risiko", desc: "Karyawan, mitra, atau duta ditetapkan — struktur hukum yang salah di sini membuat semua klausul di bawahnya rapuh." },
      { title: "Penyusunan draft", desc: "Scope, eksklusivitas, revenue share, IP, morals clause, dan exit disusun utuh — titik rawan ditutup satu per satu dengan bahasa yang bisa ditegakkan." },
      { title: "Negosiasi & finalisasi", desc: "Kedua pihak meninjau dengan bantuan kami — klausul yang tidak akan dijalankan dibuang, yang krusial dipertahankan, tanda tangan dicap dengan pemahaman yang sama." },
      { title: "Pelaksanaan & pemutakhiran", desc: "Addendum disiapkan saat kerja sama berkembang — kampanye baru, platform baru, struktur baru — tanpa membongkar kontrak induknya." },
    ],
    requirements: [
      "Profil talent/kreator: platform, jumlah pengikut, rentang konten, kinerja historis (bila ada)",
      "Rencana kerja sama: jenis (kemitraan, kampanye, manajemen penuh), durasi, dan target",
      "Model kompensasi yang dipikirkan: fee tetap, revenue share, barter produk, atau campuran",
      "Ekspektasi eksklusivitas: platform, kategori produk, dan wilayah",
      "Kondisi aset saat ini: akun, konten yang sudah ada, tim yang mendampingi",
    ],
    faqs: [
      { q: "Apakah kreator yang saya kelola harus dijadikan karyawan?", a: "Tidak harus, dan sering kali tidak sebaiknya. Hubungan kerja menurut UU Ketenagakerjaan membawa kewajiban besar — upah minimum, BPJS, aturan PHK — yang masuk akal untuk karyawan tetap tapi menyulitkan hubungan berbasis proyek. Mayoritas kemitraan talent berjalan sebagai kerja sama mandiri di bawah hukum perikatan, selama strukturnya konsisten: bukan jam kerja di bawah perintah penuh, melainkan deliverables dalam kesepakatan. Yang tidak boleh adalah struktur ganda — disebut mitra tapi diperlakukan seperti karyawan — karena saat hubungan retak, hukum akan menilai kenyataannya, bukan namanya di atas kertas." },
      { q: "Konten yang dibuat talent — secara hukum milik siapa?", a: "Secara default UU Hak Cipta, hak ekonomi atas karya ada pada penciptnya — jadi konten yang dibuat kreator adalah milik kreator, sampai ada perjanjian yang mengatakan sebaliknya. Ada dua jalan yang bisa ditulis: alih hak (kepemilikan pindah ke perusahaan — tepat untuk konten inti yang berumur panjang) atau lisensi (kreator tetap pemilik, perusahaan memakai dengan batas yang disepakati — lebih adil untuk konten pribadi dan platform milik talent). Kontrak yang baik membedakan keduanya per jenis konten, bukan menyeragamkan semuanya — dan inilah klausul yang paling sering menyelamatkan kedua pihak saat hubungan berakhir." },
      { q: "Apa yang terjadi kalau talent pergi mendadak di tengah kontrak?", a: "Itulah tujuan skenario keluar ditulis sejak awal: klausul terminasi menetapkan kapan pihak mana boleh keluar, akibat hukumnya, dan apa yang harus diserahkan — akses akun yang dibangun bersama, konten buffer yang belum tayang, jadwal kampanye yang berjalan, serta larangan menarik tim atau membocorkan data penonton. Pelanggaran berat — misalnya menandatangani pesaing langsung saat eksklusif — bisa diikat dengan sanksi yang proporsional, bukan pidana asal bunyi. Praktik terbaik kami: pasang klausul ini bahkan saat hubungan sedang harum, karena kontrak yang ditulis saat damai adalah satu-satunya yang tersisa saat tidak damai." },
    ],
    related: ["legal-drafting", "lisensi-merchandise", "pendaftaran-pers-online", "lisensi-musik-lmk"],
  },
  {
    slug: "badan-usaha-produksi-film",
    tagline: "Film dibuat oleh mimpi — tapi dibayar oleh badan usaha yang rapi.",
    heroSub:
      "Pendirian entitas produksi film dengan badan hukum resmi, izin usaha perfilman, kontrak produksi siap pakai, dan kepastian pemilikan hak cipta — fondasi production house yang dipercaya investor, platform, dan klien korporat.",
    timeline: "2–4 minggu hingga entitas beroperasi legal penuh",
    intro: [
      "UU No. 33 Tahun 2009 tentang Perfilman menempatkan badan usaha di pusat industri: kegiatan produksi film yang berkelanjutan dijalankan oleh badan usaha yang memenuhi ketentuan, dan produsernya — badan usaha itu sendiri — menjadi pengendali produksi dan pemegang hak cipta film menurut UU No. 28 Tahun 2014, karena film adalah karya yang dibuat bersama banyak orang. Alur legalitasnya kini melalui satu pintu: pendirian badan hukum (umumnya PT, dengan jalur PT mikro-kecil yang biaya pengesahannya hanya Rp 300 ribu menurut PP No. 8 Tahun 2021), lalu NIB dan perizinan berusaha profil film melalui OSS-RBA — yang dulu dikenal masyarakat industri sebagai SIUP Film. Yang diperoleh bukan sekadar tanda daftar: status inilah yang membuat production house bisa menandatangani kontrak distribusi, menerima bayaran korporat, mengajukan insentif dan program pemerintah, serta duduk setara di meja pitching ke platform streaming.",
      "Produksi yang berjalan atas nama pribadi menumpuk utang hukum yang tidak terlihat dari layar: kontrak ditandatangani orang, bukan entitas — sehingga saat sengketa datang, yang menggugat dan tergugat adalah pribadi yang dompetnya menyatu dengan biaya produksi; hak cipta atas film menjadi kabur karena freelancer dan tim tanpa kontrak alih hak secara hukum tetap memegang hak atas kontribusinya; pembagian profit diatur lewat kesepakatan lisan yang larut begitu film mulai menghasilkan; dan saat investor ingin masuk, tidak ada entitas yang bisa mereka beli sahamnya. Banyak film selesai dengan sempurna — dan justru di bagian uangnya kacau, karena fondasinya tidak pernah berdiri.",
      "Kami membangun fondasinya utuh: pemilihan entitas yang sesuai skala dan rencana Anda — PT, PT Perorangan untuk produksi solo, atau struktur lain — lalu pendirian, NPWP, NIB, dan izin usaha profil film dalam satu rangkaian. Di atasnya kami pasang paket kontrak yang dipakai hari-hari: kontrak produksi dan pekerjaan kreatif, alih hak atas kontribusi tim, perjanjian talent dan profit sharing. Semua disertai panduan dokumentasi hak dari naskah sampai final cut — sehingga setiap film yang lahir dari rumah produksi Anda lahir dengan pemilik yang jelas, dan setiap rupiah yang masuk punya pintu yang benar.",
    ],
    benefits: [
      { title: "Menandatangani kontrak besar", desc: "Distribusi, sponsor, klien korporat, dan platform streaming menandatangani kontrak dengan badan usaha — tawaran yang menemui nama pribadi sering berhenti di meja legal mereka." },
      { title: "Hak cipta film yang jelas", desc: "Produser berbadan usaha memegang hak cipta atas karya bersama — film, serial, dan iklan Anda tercatat milik entitas, bukan tersebar di tangan timnya." },
      { title: "Izin usaha perfilman resmi", desc: "NIB dan perizinan profil film via OSS memperlihatkan production house Anda legal penuh — syarat insentif, program, dan pengadaan pemerintah." },
      { title: "Siap saat investor datang", desc: "Saham, struktur, dan pembukuan yang berdiri sejak awal — masuknya investor menjadi proses, bukan kekacauan." },
      { title: "Keuangan produksi terpisah", desc: "Uang produksi, pajak, dan pribadi berjalan di jalurnya masing-masing — film yang rugi tidak menyeret rekening rumah." },
    ],
    process: [
      { title: "Pilihan entitas & struktur", desc: "PT, PT Perorangan, atau struktur lain ditentukan sesuai skala, sekutu, dan rencana investasi — keputusan yang murah sekarang, mahal bila dibongkar nanti." },
      { title: "Pendirian badan hukum", desc: "Akta dan pengesahan dikerjakan, NPWP badan aktif — entitas Anda sah di mata hukum dan pajak." },
      { title: "NIB & izin perfilman", desc: "NIB dan perizinan berusaha profil film diterbitkan via OSS-RBA — status production house resmi, siap berkontrak dan mengikuti program." },
      { title: "Paket kontrak & SOP produksi", desc: "Kontrak produksi, alih hak kreatif, talent, dan profit sharing disiapkan siap pakai — ditutup panduan dokumentasi hak dari naskah sampai final cut." },
    ],
    requirements: [
      "Data pendiri: KTP dan NPWP seluruh pemegang saham/pendiri",
      "Nama calon PT (dua-tiga alternatif) dan rencana modal",
      "Alamat domisili perusahaan (kantor, home office, atau virtual office yang sesuai ketentuan)",
      "Uraian kegiatan produksi: film, iklan, serial, konten komersial",
      "Identitas calon direktur/pengurus yang akan menjalankan produksi",
    ],
    faqs: [
      { q: "Apakah production house harus berbentuk PT, atau PT Perorangan cukup?", a: "Tergantung rencananya. PT Perorangan — yang pengurusannya sangat ringan dan gratis — cocok untuk produksi solo atau tim kecil yang belum mengundang sekutu. PT biasa menjadi pilihan yang benar begitu ada pemegang saham lain, rencana investasi, profit sharing yang rumit, atau klien besar yang meminta badan hukum penuh. Yang jelas: berproduksi atas nama pribadi tanpa entitas apa pun adalah pilihan yang paling sering dibayar mahal di kemudian hari — kontrak dan hak ciptanya tidak punya tempat berdiri. Ceritakan rencana dua-tiga tahun Anda, dan kami tunjukkan strukturnya." },
      { q: "Apakah SIUP Film masih ada dan bagaimana cara mendapatkannya?", a: "Istilah SIUP Film adalah peninggalan tata kelola lama; kini perizinan usaha di bidang perfilman terbit melalui OSS-RBA sebagai perizinan berusaha berbasis risiko sesuai UU Cipta Kerja — NIB perusahaan menjadi pintunya, dan sertifikat standar atau perizinan tertentu mengikuti skala risiko kegiatannya. Fungsinya bagi production house sama: bukti resmi bahwa badan usaha Anda sah menjalankan kegiatan perfilman. Prosesnya sebenarnya ringan bila pendirian badan usahanya sudah benar — kesulitan biasanya ada di pemetaan KBLI dan skala risiko, dan itulah bagian yang kami kerjakan untuk Anda." },
      { q: "Berapa total biaya mendirikan badan usaha produksi film?", a: "Rinciannya masuk akal: jasa kami mulai Rp 5 juta mencakup pendirian hingga izin profil film dan paket kontrak produksi; biaya notaris menyesuaikan struktur dan modal; pengesahan badan hukum Rp 300 ribu untuk PT mikro-kecil menurut PP 8/2021; sedangkan NIB dan perizinan via OSS tidak dipungut biaya negara. Bandingkan dengan biaya satu kali kontrak distribusi yang batal karena Anda tidak punya badan hukum untuk menandatanganinya — fondasi ini hampir selalu lebih murah daripada nanti dibangun tergesa-gesa saat kesempatan sudah di depan pintu." },
    ],
    related: ["pendirian-pt", "sertifikat-film-lsf", "kontrak-talent-kreator", "hak-cipta-paten"],
  },
];

/**
 * LAPISAN PENGAYAAN — KATEGORI KREATIF (10 layanan).
 * whoFor, deliverables, costs, legalBasis per slug.
 * Digabung oleh getServiceContent() / index.ts sesuai pola pustaka.
 */
export const kreatifEnrichment: Record<string, ServiceEnrichment> = {
  "sertifikat-film-lsf": {
    whoFor: [
      "Production house yang akan merilis film atau serial di bioskop dan platform streaming",
      "Distributor film impor yang menyiapkan penayangan komersial di Indonesia",
      "Agensi iklan dan brand yang memproduksi TVC, trailer, atau materi layar lebar",
      "Studio konten yang menjual serial dan film ke layanan streaming",
    ],
    deliverables: [
      "Sertifikat Lulus Sensor resmi beserta salinan untuk keperluan platform dan jadwal tayang",
      "Penetapan klasifikasi umur yang berlaku untuk seluruh penayangan",
      "Berkas pengajuan lengkap yang terarsip — bisa dipakai ulang untuk materi lanjutan",
      "Panduan pemenuhan catatan sensor berupa rencana suntingan yang terukur",
      "Rangkuman syarat dokumen penyerahan untuk bioskop, TV, dan platform streaming",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 5 jt — pre-check, berkas, pengajuan, sampai sertifikat" },
      { item: "Biaya resmi sensor (PNBP)", note: "dihitung per menit durasi — berbeda film nasional dan impor" },
      { item: "Re-edit bila ada koreksi sensor", note: "di luar jasa — jauh lebih ringan bila pre-check naskah dilakukan lebih dulu" },
      { item: "Pengurusan salinan & materi lanjutan", note: "trailer, iklan, dan versi lain memakai jalur ringan tersendiri" },
    ],
    legalBasis: [
      "UU No. 33 Tahun 2009 tentang Perfilman",
      "PP No. 32 Tahun 2013 jo. PP No. 19 Tahun 2017 tentang Penyelenggaraan Perfilman",
      "Peraturan Presiden No. 10 Tahun 2005 jo. Perpres No. 12 Tahun 2025 tentang penyelenggaraan sensor film",
      "Ketentuan PNBP sensor film yang berlaku pada pengelola layanan sensor",
    ],
  },

  "izin-event-konser": {
    whoFor: [
      "Promotor dan penyelenggara konser, festival musik, dan panggung besar",
      "Perusahaan dan komunitas yang menyelenggarakan pameran, bazar, dan expo",
      "Pengelola venue yang membutuhkan kejelasan perizinan tamu penyelenggaranya",
      "Brand dan agensi yang mengadakan launching, activation, dan event komersial",
    ],
    deliverables: [
      "SITK (Surat Izin Tertulis dari Kepolisian) terbit melalui jalur Regula",
      "Izin pemakaian tempat dan perizinan dinas teknis yang berlaku untuk acara",
      "SOP keamanan dan protokol kontingensi yang disusun sesuai kapasitas event",
      "Rangkuman seluruh buku izin beserta kewajiban yang berlaku selama acara",
      "Pengaturan asuransi kecelakaan dan kebutuhan petugas pengamanan",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 5 jt — menyesuaikan jumlah izin dan skala acara" },
      { item: "Biaya resmi SITK", note: "tidak dipungut — pengurusan kepolisian melalui Regula gratis" },
      { item: "Pajak hiburan & retribusi daerah", note: "tarif per pemda mengikuti UU 1/2022 — dihitung per lokasi" },
      { item: "Asuransi kecelakaan & petugas keamanan", note: "menyesuaikan kapasitas penonton dan ketentuan venue" },
    ],
    legalBasis: [
      "UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia",
      "Peraturan Kapolri No. 16 Tahun 2023 tentang penerbitan SITK via aplikasi Regula",
      "UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah (pajak hiburan)",
      "Peraturan daerah setempat tentang ketertiban umum dan penyelenggaraan keramaian",
    ],
  },

  "izin-reklame-luar-ruang": {
    whoFor: [
      "Pemilik dan operator media luar ruang: billboard, videotron, baliho, spanduk",
      "Brand dan agensi yang memasang reklame untuk kampanye di lokasi tertentu",
      "Media house yang membangun portofolio aset reklame untuk advertiser besar",
      "Usaha lokal yang memasang papan nama dan reklame kecil di depan tempatnya",
    ],
    deliverables: [
      "Izin reklame daerah terbit untuk jenis dan lokasi media yang dipasang",
      "Kalkulasi pajak reklame dan retribusi dengan klasifikasi lokasi yang benar",
      "Verifikasi kelayakan lokasi terhadap perda dan rencana tata ruang sebelum investasi",
      "Kalender kepatuhan berisi masa berlaku seluruh izin reklame Anda",
      "Pengurusan perpanjangan dan penyesuaian konten/spesifikasi saat berubah",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 3,5 jt per media/lokasi" },
      { item: "Pajak reklame", note: "tarif terendah UU 1/2022: videotron Rp 50.000/m²/bulan, papan Rp 25.000/m²/bulan — di atasnya mengikuti perda" },
      { item: "Retribusi & biaya daerah", note: "menyesuaikan kelas lokasi dan jenis reklame menurut perkada" },
      { item: "Perpanjangan tahunan", note: "lebih ringan dari pengajuan awal — asal diajukan sebelum masa berlaku habis" },
    ],
    legalBasis: [
      "UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah (pajak reklame)",
      "UU No. 26 Tahun 2007 tentang Penataan Ruang (kesesuaian lokasi dan tata ruang)",
      "Peraturan daerah dan perkada setempat tentang ketertiban umum, reklame, dan tarifnya",
    ],
  },

  "lisensi-musik-lmk": {
    whoFor: [
      "Kafe, restoran, hotel, dan karaoke yang memutar musik untuk pengunjung",
      "Radio, televisi, dan media penyiaran yang menyiarkan musik secara rutin",
      "Konten kreator dan perusahaan digital yang memproduksi video bermonetisasi",
      "Penyelenggara event dan konser yang menggunakan musik dalam pertunjukannya",
    ],
    deliverables: [
      "Peta penggunaan musik usaha Anda: sumber, frekuensi, konteks, dan lapisan hak yang terlibat",
      "Perjanjian lisensi dengan LMK yang relevan — KCI, WAMI, PAPPRI, ASIRI, IPWI sesuai kebutuhan",
      "Tarif yang dinegosiasikan sesuai kategori dan skala usaha yang sebenarnya",
      "Sistem pelaporan berkala yang ringan dijalankan tim operasional",
      "Panduan kepatuhan musik untuk konten digital — meminimalkan klaim Content ID",
    ],
    costs: [
      { item: "Jasa pemetaan & pengurusan DIGIMAN.ID", note: "mulai Rp 2,5 jt — termasuk negosiasi tarif" },
      { item: "Royalti lisensi LMK", note: "tarif per kategori pengguna — kafe kecil hingga televisi berbeda berjenjang" },
      { item: "Pembayaran awal lisensi", note: "sesuai perjanjian LMK — umumnya untuk periode pertama" },
      { item: "Lisensi khusus event/kampanye", note: "dihitung per kegiatan bila penggunaan di luar lisensi rutin" },
    ],
    legalBasis: [
      "UU No. 28 Tahun 2014 tentang Hak Cipta (Pasal 80–81: kewajiban royalti dan LMK)",
      "PP No. 56 Tahun 2021 tentang Pengelolaan Royalti Hak Ekonomi Hak Cipta",
      "Ketentuan tarif LMK per kategori pengguna yang berlaku",
    ],
  },

  "isbn-penerbitan": {
    whoFor: [
      "Penulis yang menerbitkan bukunya sendiri secara mandiri (self-publishing)",
      "Penerbit kecil dan komunitas literasi yang membangun katalog buku",
      "Perusahaan dan lembaga yang menerbitkan buku institusional, panduan, atau monograf",
      "Penerbit digital yang mengedarkan e-book dan audiobook secara komersial",
    ],
    deliverables: [
      "Registrasi penerbit resmi di Perpustakaan Nasional atas nama yang benar",
      "ISBN untuk setiap judul dan format — cetak, e-book, audiobook",
      "Katalog Dalam Terbitan (KDT) yang lengkap dan benar",
      "Panduan penempatan kode ISBN dan halaman identitas penerbitan",
      "Jadwal dan panduan deposit eksemplar agar status penerbitan tetap bersih",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 750 rb — registrasi penerbit, ISBN, KDT, panduan deposit" },
      { item: "Biaya resmi Perpusnas", note: "gratis — pendaftaran penerbit dan penerbitan ISBN tidak dipungut biaya" },
      { item: "Pengiriman eksemplar deposit", note: "biaya kirim buku ke Perpusnas sesuai kewajiban penyimpanan" },
      { item: "ISBN tambahan per format", note: "setiap format (cetak, e-book, audiobook) menuntut nomor tersendiri" },
    ],
    legalBasis: [
      "UU No. 43 Tahun 2007 tentang Perpustakaan (kewajiban penyimpanan eksemplar)",
      "Peraturan Kepala Perpustakaan Nasional RI tentang penyediaan Nomor Pokok Bahan Pustaka (ISBN/ISSN)",
      "Standar internasional ISO 2108 tentang ISBN",
      "UU No. 28 Tahun 2014 tentang Hak Cipta (posisi penerbit dan pencipt buku)",
    ],
  },

  "rating-game-igrs": {
    whoFor: [
      "Studio game lokal yang merilis game mobile, PC, atau web ke pasar Indonesia",
      "Publisher global yang mendistribusikan game kepada pemain Indonesia",
      "Developer indie dengan monetisasi iklan yang sering merasa tidak tercakup aturan",
      "Perusahaan gamifikasi dan aplikasi berbasis konten permainan",
    ],
    deliverables: [
      "Registrasi game di IGRS Komdigi dengan rating umur resmi (3+ hingga 21+)",
      "Penilaian konten dan rekomendasi rating sebelum pengajuan",
      "Dokumen gameplay, screenshot, dan deskripsi fitur dalam format yang penilai harapkan",
      "Sinkronisasi dengan registrasi PSE Komdigi bila belum terdaftar",
      "Pemetaan kapan pembaruan konten besar menuntut penyesuaian rating",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 2 jt — penilaian konten, dokumen, pengajuan, tanggapan" },
      { item: "Biaya resmi IGRS", note: "gratis — registrasi dan rating di portal Komdigi tidak dipungut" },
      { item: "PNBP registrasi PSE", note: "sekitar Rp 1 jt bila game sekalian didaftarkan sebagai PSE Lingkup Privat" },
      { item: "Penyesuaian konten bila diminta", note: "perubahan kecil menurunkan rating — dihitung terpisah bila diperlukan" },
    ],
    legalBasis: [
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik",
      "UU No. 11 Tahun 2008 jo. UU No. 19 Tahun 2016 jo. UU No. 1 Tahun 2024 tentang ITE",
      "Pedoman penilaian dan klasifikasi Game Rating SIZE (IGRS) Komdigi",
    ],
  },

  "pendaftaran-pers-online": {
    whoFor: [
      "Portal berita dan majalah daring yang membangun kredibilitas media",
      "Perusahaan media yang ingin memanfaatkan tarif pajak khusus perusahaan pers",
      "Wartawan dan jurnalis pendiri media online yang membutuhkan payung legal pers",
      "Media lokal yang mengejar akses iklan layanan publik dan akreditasi wartawan",
    ],
    deliverables: [
      "Sertifikat verifikasi perusahaan pers dari Dewan Pers",
      "Audit dan penataan situs sesuai standar UUT dan Pedoman Pemberitaan Media Siber",
      "Struktur redaksi yang memenuhi pengecekan: identitas, pimpinan, rubrikasi, wartawan",
      "Panduan kepatuhan editorial berkelanjutan agar status terjaga",
      "Pengurusan lanjutan: akreditasi wartawan dan fasilitas pajak perusahaan pers",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 1,5 jt — audit, penataan, pengajuan, pendampingan" },
      { item: "Biaya verifikasi Dewan Pers", note: "biaya administrasi kelembagaan — tergolong kecil" },
      { item: "Penataan situs bila diperlukan", note: "perbaikan identitas redaksi/rubrikasi — diperiksa lebih dulu di audit" },
      { item: "Akreditasi wartawan lanjutan", note: "opsional — sesuai kebutuhan tim redaksi" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 1999 tentang Pers",
      "UU No. 7 Tahun 2021 tentang HPP (fasilitas PPh final 0,5% bagi perusahaan pers terverifikasi Dewan Pers)",
      "UU No. 11 Tahun 2008 jo. perubahannya tentang ITE dan Pedoman Pemberitaan Media Siber (Dewan Pers)",
      "Kode Etik Jurnalistik dan peraturan verifikasi perusahaan pers Dewan Pers",
    ],
  },

  "lisensi-merchandise": {
    whoFor: [
      "Pemilik karakter, IP, dan brand yang ingin monetisasi lewat produk merchandise",
      "Produsen merchandise yang memegang lisensi resmi dan membutuhkan kontrak yang benar",
      "Brand besar yang menjalankan kolaborasi produk dengan IP lain",
      "Kreator dan studio yang IP-nya mulai ditawari kerja sama produk oleh pihak ketiga",
    ],
    deliverables: [
      "Audit kekayaan intelektual: status merek, dokumentasi karya, dan celah yang harus ditambal",
      "Struktur kesepakatan: cakupan produk, wilayah, masa berlaku, eksklusivitas",
      "Kontrak lisensi lengkap — royalti, advance, approval, quality control, audit",
      "Mekanisme persetujuan desain dan laporan penjualan yang bisa dijalankan",
      "Skenario berakhirnya kerja sama: sisa stok, perpanjangan, hak pasca-kontrak",
    ],
    costs: [
      { item: "Jasa penyusunan kontrak DIGIMAN.ID", note: "mulai Rp 5 jt per paket kesepakatan" },
      { item: "Pendaftaran merek (bila belum)", note: "biaya resmi DJKI per kelas — syarat kuatnya struktur lisensi" },
      { item: "Pencatatan hak cipta karakter", note: "opsional — memperkuat bukti kepemilikan karya" },
      { item: "Royalti & advance", note: "kesepakatan komersial antar pihak — satu digit hingga belasan persen dari penjualan bersih" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
      "UU No. 28 Tahun 2014 tentang Hak Cipta (karakter dan karya grafis)",
      "KUHPerdata Buku III tentang Perikatan (sah dan kekuatan mengikat perjanjian)",
      "UU No. 30 Tahun 1999 tentang Arbitrase (klausul penyelesaian sengketa)",
    ],
  },

  "kontrak-talent-kreator": {
    whoFor: [
      "Talent agency dan management yang mengelola kreator dan influencer",
      "Brand dan agensi yang menggandeng talent untuk kampanye dan kemitraan",
      "Kreator dan influencer yang menerima tawaran kerja sama jangka panjang",
      "Perusahaan media dan MCN yang membangun portofolio talent berskala besar",
    ],
    deliverables: [
      "Kontrak talent/management utuh: scope, deliverables, masa berlaku, kompensasi",
      "Klausul eksklusivitas beserta kompensasinya — dibayar wajarnya atau tidak eksklusif",
      "Struktur revenue share dengan definisi angka yang tidak bisa ditafsirkan dua arah",
      "Kepemilikan konten: alih hak atau lisensi per jenis konten, termasuk akun dan buffer",
      "Morals clause dan skenario keluar: terminasi, pemindahan aset, sanksi yang proporsional",
    ],
    costs: [
      { item: "Jasa penyusunan kontrak DIGIMAN.ID", note: "mulai Rp 3,5 jt per paket kontrak" },
      { item: "Biaya negara", note: "tidak ada — kontrak kemitraan tidak dikenakan PNBP" },
      { item: "Pencatatan hak cipta konten penting (opsional)", note: "sekitar Rp 250 rb per karya melalui DJKI" },
      { item: "Addendum & pemutakhiran", note: "bila kerja sama berkembang — lebih murah dari membongkar kontrak induk" },
    ],
    legalBasis: [
      "KUHPerdata Buku III tentang Perikatan (kebebasan berkontrak dan kekuatan mengikat)",
      "UU No. 13 Tahun 2003 jo. UU No. 6 Tahun 2023 (Cipta Kerja) — batas hubungan kerja dan kerja sama jasa",
      "UU No. 11 Tahun 2008 jo. perubahannya tentang ITE dan UU No. 27 Tahun 2022 tentang PDP",
      "UU No. 28 Tahun 2014 tentang Hak Cipta (kepemilikan dan alih hak karya konten)",
    ],
  },

  "badan-usaha-produksi-film": {
    whoFor: [
      "Production house rumahan yang siap berbadan hukum untuk mengejar kontrak besar",
      "Filmmaker independen yang membangun rumah produksi miliknya sendiri",
      "Grup produksi iklan dan konten korporat yang membutuhkan legalitas penuh",
      "Investor dan pemilik dana yang menata struktur sebelum masuk ke industri film",
    ],
    deliverables: [
      "Badan usaha berdiri: akta, pengesahan, NPWP badan — sesuai entitas pilihan",
      "NIB dan perizinan berusaha profil film melalui OSS-RBA",
      "Paket kontrak produksi siap pakai: produksi, alih hak kreatif, talent, profit sharing",
      "Panduan dokumentasi hak dari naskah sampai final cut",
      "Arah pengelolaan: pembukuan produksi terpisah dan kewajiban berjalan perusahaan",
    ],
    costs: [
      { item: "Jasa pendirian & pengurusan DIGIMAN.ID", note: "mulai Rp 5 jt — hingga izin profil film dan paket kontrak" },
      { item: "Biaya notaris", note: "menyesuaikan struktur dan modal entitas" },
      { item: "Pengesahan badan hukum", note: "Rp 300.000 untuk PT mikro & kecil (PP 8/2021)" },
      { item: "NIB & izin usaha profil film", note: "gratis via OSS-RBA — tanpa biaya negara" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas & PP No. 8 Tahun 2021 (kemudahan badan usaha mikro-kecil)",
      "UU No. 33 Tahun 2009 tentang Perfilman (kegiatan usaha perfilman oleh badan usaha)",
      "UU No. 28 Tahun 2014 tentang Hak Cipta (produser sebagai pemegang hak cipta film)",
      "PP No. 5 Tahun 2021 jo. PP No. 28 Tahun 2025 (perizinan berusaha berbasis risiko via OSS-RBA)",
    ],
  },
};
