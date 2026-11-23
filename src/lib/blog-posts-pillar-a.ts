/**
 * ARTIKEL PILLAR KATEGORI — Seri A (Ketenagakerjaan, Kepatuhan Digital,
 * Digital, Kreatif, Properti).
 *
 * Satu artikel pillar dedikasi per kategori layanan: menangkap query
 * pencarian volume-tinggi per topik dan menjadi "pintu masuk" trafik
 * organik yang menautkan pembaca ke halaman layanan terkait.
 */
import type { BlogPost } from "./blog-posts";

export const BLOG_POSTS_PILLAR_A: BlogPost[] = [
  {
    slug: "kewajiban-bpjs-ketenagakerjaan-panduan-lengkap",
    title: "BPJS Ketenagakerjaan untuk Pemilik Usaha: Kewajiban, Biaya, dan Cara Pendaftarannya",
    excerpt:
      "Setiap usaha yang mempekerjakan orang wajib mendaftarkan karyawannya ke BPJS Ketenagakerjaan — termasuk karyawan kontrak. Ini panduan lengkapnya: program, tarif, urutan pendaftaran, dan sanksi bila diabaikan.",
    date: "2026-09-28",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: [
      "bpjs ketenagakerjaan wajib",
      "biaya bpjs ketenagakerjaan",
      "cara daftar bpjs ketenagakerjaan usaha",
      "sanksi tidak daftar bpjs",
    ],
    sections: [
      {
        h2: "Bukan pilihan, tapi kewajiban yang diatur undang-undang",
        blocks: [
          {
            type: "p",
            text: "Banyak pemilik usaha menganggap BPJS Ketenagakerjaan sebagai fasilitas tambahan yang boleh ditunda. Kenyataannya sebaliknya: UU No. 40 Tahun 2004 tentang SJSN, UU No. 24 Tahun 2011 tentang BPJS, dan UU Ketenagakerjaan beserta perubahannya di UU Cipta Kerja mewajibkan setiap majikan mendaftarkan pekerjanya. Kewajiban ini berlaku untuk karyawan tetap (PKWTT) maupun karyawan kontrak (PKWT), termasuk pekerja alih daya yang ditempatkan di tempat Anda.",
          },
          {
            type: "p",
            text: "Bentuk badan usaha juga tidak membedakan. PT, CV, koperasi, bahkan perorangan yang mempekerjakan orang lain semuanya menjadi majikan di mata hukum. Yang menentukan bukan skala usaha atau jumlah karyawan, melainkan fakta bahwa ada hubungan kerja yang menghasilkan upah. Semakin cepat usaha Anda tumbuh, semakin besar pula konsekuensi bila fondasi kepatuhan ini tidak pernah disiapkan.",
          },
        ],
      },
      {
        h2: "Lima program dan siapa yang menanggung biayanya",
        blocks: [
          {
            type: "p",
            text: "BPJS Ketenagakerjaan mengelola lima program dengan tarif yang berbeda-beda dan pembagian tanggungan yang sudah diatur peraturan. Sebagian program sepenuhnya ditanggung majikan, sebagian dibagi dengan pekerja. Memahami komposisi ini penting agar Anda bisa menghitung biaya overhead SDM secara akurat sejak menyusun anggaran.",
          },
          {
            type: "table",
            headers: ["Program", "Manfaat", "Tarif Umum", "Ditanggung"],
            rows: [
              ["JKK", "Kecelakaan kerja & penyakit akibat kerja", "0,24%–1,74% upah", "Majikan penuh (sesuai sektor)"],
              ["JKM", "Kematian & janda/yatim", "0,30% upah", "Majikan penuh"],
              ["JHT", "Hari tua (dibayar saat pensiun/berhenti)", "5,7% upah", "Majikan 3,7% + pekerja 2%"],
              ["JP", "Pensiun usia lanjut", "3% upah (naik bertahap)", "Majikan 2% + pekerja 1%"],
              ["JKP", "Kehilangan pekerjaan", "0,46% upah", "Majikan 0,22% + pemerintah 0,14% + pekerja 0,1%"],
            ],
          },
          {
            type: "p",
            text: "Sebagai ilustrasi, untuk sektor perkantoran dengan tarif JKK terendah, total tanggungan majikan umumnya berada di kisaran 6% dari upah. Angka ini jauh lebih kecil dibanding satu gugatan kecelakaan kerja tanpa asuransi JKK, yang bisa mencapai ratusan juta rupiah dan dihadirkan langsung ke pengadilan. Tarif JKK berbeda per sektor sesuai tingkat risikonya, jadi pastikan kode pekerjaan karyawan Anda dipetakan dengan benar sejak awal pendaftaran.",
          },
        ],
      },
      {
        h2: "Urutan pendaftaran yang benar dari nol",
        blocks: [
          {
            type: "p",
            text: "Proses pendaftaran sebenarnya sederhana bila dokumen usaha Anda sudah rapi. Masalahnya, kebanyakan pemilik usaha mendaftar secara terpisah-pisah, tanpa memahami urutannya, lalu tersandung revisi data berulang. Urutan yang benar adalah sebagai berikut:",
          },
          {
            type: "ul",
            items: [
              "Daftarkan usaha sebagai majikan melalui kantor BPJS Ketenagakerjaan terdekat atau kanal daring, membawa NIB dan dokumen badan usaha.",
              "Pastikan profil perusahaan (sektor usaha, jumlah pekerja, alamat) sesuai data OSS agar tarif JKK yang diterapkan tepat.",
              "Daftarkan setiap pekerja dengan KTP aktif, alamat terkini, dan data upah yang realistis — bukan upah minimal hanya demi kontribusi kecil.",
              "Aktifkan kartu peserta digital dan edukasi karyawan tentang haknya, termasuk cara klaim.",
              "Bayar tagihan setiap bulan sebelum jatuh tempo yang ditetapkan BPJS-T dan simpan bukti pembayaran sebagai arsip kepatuhan.",
            ],
          },
          {
            type: "p",
            text: "Satu hal yang sering terlewat: setiap karyawan yang keluar atau masuk wajib dilaporkan statusnya. Karyawan yang sudah resign tetapi masih terdaftar akan terus menghasilkan tagihan, sedangkan karyawan baru yang belum didaftarkan menciptakan celah risiko pada hari-hari pertamanya. Kelola ini seperti Anda mengelola absensi — rutin, bukan insidental.",
          },
        ],
      },
      {
        h2: "Sanksi dan risiko bila diabaikan",
        blocks: [
          {
            type: "p",
            text: "Konsekuensi paling langsung adalah denda administratif atas tunggakan kontribusi sebagaimana diatur UU No. 24 Tahun 2011. Namun denda justru bagian termurah dari risikonya. Ketika terjadi kecelakaan kerja kepada pekerja yang tidak terlindungi JKK, majikan menanggung seluruh biaya pengobatan dan ganti rugi secara perdata — tanpa plafon yang jelas dan tanpa melindungi reputasi usaha.",
          },
          {
            type: "p",
            text: "Risiko kedua bersifat komersial. Semakin banyak instansi pemerintah dan korporasi besar mensyaratkan bukti kepatuhan BPJS dalam tender dan seleksi vendor, karena status kepatuhan majikan dapat diperiksa publik. Ketika perusahaan membutuhkan pendanaan atau sedang diperiksa investor, kelalaian administrasi kepegawaian seperti ini akan muncul di laporan due diligence dan menurunkan penilaian kelayakan usaha Anda.",
          },
        ],
      },
      {
        h2: "Kesalahan yang paling sering kami temukan di lapangan",
        blocks: [
          {
            type: "ul",
            items: [
              "Mendaftarkan hanya sebagian karyawan padahal kewajiban mencakup semua pekerja yang menerima upah.",
              "Salah memetakan kode pekerjaan sehingga tarif JKK terlalu tinggi (uang bocor) atau terlalu rendah (masalah saat klaim).",
              "Menganggap karyawan kontrak dan magang dibayar penuh tidak wajib didaftarkan, padahal ketentuannya berbeda tiap program.",
              "Tidak melaporkan perubahan status pekerja sehingga tagihan jalan terus untuk orang yang sudah keluar.",
              "Menunggu ada inspeksi atau tender baru mendaftar — padahal kepatuhan baru dihargai bila berjalan sebelum dibutuhkan.",
            ],
          },
          {
            type: "p",
            text: "Kalau usaha Anda sudah berjalan tanpa BPJS-T, jangan menunggu inspeksi untuk membereskannya. Normalisasi pendaftaran yang didampingi orang yang paham urutannya biasanya tuntas dalam hitungan hari kerja, dan biayanya jauh lebih murah daripada satu sanksi atau satu gugatan. Tim DIGIMAN.ID membantu pendaftaran majikan dan pekerja sekaligus menata sistem penggajian agar kontribusi terhitung otomatis setiap bulan.",
          },
        ],
      },
    ],
  },
  {
    slug: "kepatuhan-uu-pdp-panduan-lengkap-bisnis",
    title: "Kepatuhan UU PDP untuk Bisnis: Panduan Lengkap dari Dasar Hukum sampai Implementasi",
    excerpt:
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi sudah berlaku penuh untuk semua bisnis yang mengelola data orang. Panduan ini merangkum kewajibannya, sanksinya, dan roadmap implementasi yang realistis untuk UMKM sampai korporasi.",
    date: "2026-10-02",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 10,
    keywords: [
      "kepatuhan uu pdp",
      "uu pelindungan data pribadi bisnis",
      "kewajiban pengendali data pribadi",
      "sanksi uu pdp",
    ],
    sections: [
      {
        h2: "Semua bisnis yang menyentuh data pribadi ikut diatur",
        blocks: [
          {
            type: "p",
            text: "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) tidak hanya berlaku untuk korporasi besar atau fintech. Setiap entitas — dari toko daring yang menyimpan nomor WhatsApp pelanggan sampai aplikasi absensi karyawan — berperan sebagai pengendali data pribadi atau pemroses data pribadi, dan keduanya terikat kewajiban hukum. Masa transisi dua tahun sejak pengesahannya telah berlalu, artinya regulator tidak lagi melihat kepatuhan sebagai 'sedang disiapkan' melainkan sebagai kewajiban yang seharusnya sudah berjalan.",
          },
          {
            type: "p",
            text: "Pembedaan peran penting dipahami sejak awal karena konsekuensinya berbeda. Pengendali menentukan tujuan dan cara pemrosesan data; pemroses mengerjakan atas perintah pengendali, misalnya vendor cloud atau agency iklan. Pemindahan data ke pihak lain juga diatur ketat: perlu dasar hukum dan penjaminan bahwa pihak penerima memenuhi standar pelindungan yang setara. Tanpa pemetaan peran ini, hampir mustahil menyusun kebijakan yang benar.",
          },
        ],
      },
      {
        h2: "Kewajiban konkret pengendali data pribadi",
        blocks: [
          {
            type: "p",
            text: "UU PDP memuat daftar kewajiban yang panjang, tetapi dalam praktiknya inti yang harus segera dijalankan bisnis dapat diringkas menjadi beberapa kelompok kerja:",
          },
          {
            type: "ul",
            items: [
              "Pemrosesan harus punya dasar yang sah dan tujuan yang terbatas — persetujuan bukan satu-satunya dasar, tetapi harus benar-benar spesifik, mudah dipahami, dan mudah ditarik kembali.",
              "Sediakan saluran bantuan (SSP) dan fasilitasi hak subjek: akses, perbaikan, penghapusan, penarikan persetujuan, dan penolakan terhadap keputusan otomatis.",
              "Lakukan pemetaan dan dokumentasi seluruh alur data: apa yang dikumpulkan, dari mana, disimpan di mana, berapa lama, dan siapa yang bisa mengaksesnya.",
              "Lindungi data dengan langkah teknis dan organisasi yang proporsional — enkripsi, pembatasan akses, dan kebijakan retensi yang benar-benar dijalankan.",
              "Berkewajiban mengabarkan kegagalan pelindungan data pribadi kepada subjek dan lembaga pengawas dalam waktu 3×24 jam sejak diketahui.",
              "Tunjuk DPO bila pemrosesan Anda berskala besar, sistematis, atau menyentuh data sensitif dalam jumlah banyak.",
            ],
          },
          {
            type: "p",
            text: "Perhatikan bahwa kewajiban ini berlaku meski vendor Anda berada di luar negeri. Transaksi lintas batas tetap terikat standar pelindungan yang setara, sehingga memilih vendor dan menata kontraknya menjadi bagian dari kepatuhan — bukan sekadar urusan teknis.",
          },
        ],
      },
      {
        h2: "Sanksi yang membuat isu ini tidak bisa ditunda",
        blocks: [
          {
            type: "p",
            text: "Regulator dapat menjatuhkan sanksi administratif mulai dari peringatan, penghentian sementara pemrosesan, penghapusan data, sampai denda hingga dua persen dari pendapatan tahunan. Pihak yang dirugikan juga dapat menuntut ganti rugi melalui gugatan perdata, termasuk gugatan kelompok, dan sebagian pelanggaran dapat berujung pidana. Lebih dari itu, kebocoran data yang dimuat media akan menghancurkan kepercayaan pelanggan jauh lebih cepat daripada denda yang diterima.",
          },
          {
            type: "p",
            text: "Pengalaman kami, kejadian yang paling sering memicu masalah bukan serangan hacker yang canggih, melainkan kebodohan internal: database pelanggan dibagikan lewat grup chat, karyawan lama masih menyimpan arsip di laptop pribadi, atau formulir pendaftaran yang meminta data jauh melebihi kebutuhan. Semua itu teratasi dengan tata kelola, bukan dengan teknologi mahal.",
          },
        ],
      },
      {
        h2: "Roadmap implementasi yang realistis",
        blocks: [
          {
            type: "table",
            headers: ["Fase", "Fokus", "Hasil Konkret"],
            rows: [
              ["30 hari pertama", "Pemetaan data & peran", "Inventaris alur data, identifikasi pengendali/pemroses, daftar vendor"],
              ["30–60 hari", "Kebijakan & hak subjek", "Kebijakan privasi terbit, saluran bantuan aktif, SOP respons permintaan subjek"],
              ["60–90 hari", "Proteksi & respons insiden", "Kontrol akses beres, retensi data diatur, SOP notifikasi kebocoran 3×24 jam siap uji"],
            ],
          },
          {
            type: "p",
            text: "Pendekatan bertahap seperti ini membuat kepatuhan tidak lagi terasa seperti proyek raksasa. Yang penting dimulai dengan pemetaan yang jujur, karena seluruh kewajiban lain turun dari situ: tanpa tahu data apa yang Anda pegang, Anda tidak bisa melindunginya, menjawab subjek data, atau mendeteksi kebocoran. Untuk bisnis yang ingin menuntaskan cepat, layanan kepatuhan UU PDP DIGIMAN.ID menyediakan seluruh fase ini sebagai satu paket kerja — mulai dari pemetaan sampai dokumen kebijakan yang siap dipublikasikan.",
          },
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-umkm-panduan-lengkap-2026",
    title: "Digital Marketing untuk UMKM 2026: Panduan Berjenjang dari Nol sampai Otomasi",
    excerpt:
      "Pemasaran digital bukan soal viral, tapi soal sistem: ditemukan, dipercaya, ditindaklanjuti, dan diulang. Panduan berjenjang ini menyusun langkah digital marketing UMKM dari fondasi paling dasar sampai otomasi yang bekerja 24 jam.",
    date: "2026-10-05",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 11,
    keywords: [
      "digital marketing umkm",
      "strategi pemasaran online usaha kecil",
      "cara promosi online umkm 2026",
      "google bisnis profil umkm",
    ],
    sections: [
      {
        h2: "Perilaku pembeli berubah, cara menjual harus mengikuti",
        blocks: [
          {
            type: "p",
            text: "Sebelum membeli, orang mencari: nama produk di mesin pencari, profil usaha di peta, ulasan di marketplace, dan katalog di WhatsApp. Jika usaha Anda tidak muncul di satu pun dari titik-titik itu, kompetitor Anda yang muncul. Digital marketing yang efektif tidak dimulai dari iklan mahal, melainkan dari memastikan setiap titik pencarian itu memuat informasi yang benar dan memudahkan pembeli bertindak.",
          },
          {
            type: "p",
            text: "Kesalahan klasik UMKM adalah melompat ke konten viral tanpa fondasi: ribuan viewers tetapi tidak ada yang tahu ke mana harus memesan, atau profil bisnis yang tidak terverifikasi sehingga pembeli ragu. Urutan yang benar adalah memperbaiki fondasi dulu — identitas, lokasi digital, kanal komunikasi — baru menambah bahan bakar lewat konten dan iklan. Dengan urutan ini, setiap rupiah promosi tidak bocor ke tempat mati.",
          },
        ],
      },
      {
        h2: "Fondasi: tiga aset digital yang wajib dimiliki siapa pun",
        blocks: [
          {
            type: "ul",
            items: [
              "Google Bisnis Profil: cara termurah agar usaha muncul saat orang mencari 'produk Anda + nama kota'; lengkapi jam, foto, katalog, dan balas ulasan secara rutin.",
              "WhatsApp Business: etalase katalog, label pesanan, jawaban otomatis, dan nomor yang konsisten di seluruh media — ini kasir dan CS Anda sekaligus.",
              "Etalase marketplace: toko di platform tempat pembeli sudah kebiasaan transaksi, dengan foto produk yang seragam dan deskripsi yang menjawab pertanyaan paling sering.",
            ],
          },
          {
            type: "p",
            text: "Ketiga aset ini gratis atau sangat murah, tetapi menuntut konsistensi pengelolaan. Data yang tidak diperbarui — jam buka lama, harga berubah, nomor tidak aktif — justru merusak kepercayaan lebih cepat daripada tidak punya profil sama sekali. Setiap hari menunda merapikan fondasi adalah hari-hari di mana calon pembeli berpindah ke kompetitor yang informasinya jelas.",
          },
        ],
      },
      {
        h2: "Memilih kanal: organik dulu, iklan kemudian",
        blocks: [
          {
            type: "table",
            headers: ["Kanal", "Biaya", "Cocok Untuk", "Catatan"],
            rows: [
              ["SEO & konten blog", "Waktu", "Jangka panjang", "Hasil lambat tapi nyata & berlaku lama"],
              ["Media sosial organik", "Waktu + alat", "Bangun kepercayaan", "Pilih 1–2 platform, jangan semuanya"],
              ["Iklan pencarian/sosial", "Anggaran harian", "Percepat penjualan", "Efektif setelah landing & katalog rapi"],
              ["Marketplace", "Komisi", "Transaksi langsung", "Perhatikan margin setelah fee & ongkir"],
              ["WhatsApp broadcast", "Sangat rendah", "Pelanggan lama", "Cocok untuk repeat order & promo"],
            ],
          },
          {
            type: "p",
            text: "Aturan praktisnya: iklan mempercepat apa yang sudah bekerja, tidak bisa menyelamatkan yang belum bekerja. Bila pengunjung datang tetapi tidak ada yang memesan karena informasi berantakan, menambah anggaran iklan hanya mempercepat pembakaran uang. Perbaiki dulu pengalaman sampai ada pembeli organik yang menyelesaikan transaksi, baru kalikan dengan iklan — di titik itu setiap rupiah memiliki data umpan balik yang jelas.",
          },
        ],
      },
      {
        h2: "Konten yang menjual bukan yang sekadar rame",
        blocks: [
          {
            type: "p",
            text: "Konten paling menjual bagi UMKM biasanya bukan yang paling kreatif, melainkan yang paling menjawab: harga, cara pakai, perbandingan, bukti nyata, dan jawaban atas pertanyaan yang diulang setiap hari oleh calon pembeli. Kumpulkan pertanyaan dari chat WhatsApp Anda, jadikan daftar konten, dan jawab satu per satu secara terpublikasi. Selain mengurangi pertanyaan berulang, konten semacam ini muncul di pencarian saat orang lain bertanya hal yang sama.",
          },
          {
            type: "p",
            text: "Ritme lebih penting daripada volume. Satu konten berkualitas per hari yang konsisten jauh lebih efektif daripada sepuluh konten sehari yang bertahan seminggu. Susun kalender sederhana mingguan, gunakan template agar produksi cepat, dan simpan aset (foto, video pendek, ulasan pelanggan) sebagai perpustakaan yang bisa dipakai ulang berkali-kali.",
          },
        ],
      },
      {
        h2: "Ukur dengan benar, lalu otomasi yang sudah bekerja",
        blocks: [
          {
            type: "p",
            text: "Tanpa pengukuran, digital marketing hanyalah tebak-tebakan berbiaya. Minimal, catat tiga angka mingguan: dari mana pengunjung datang, berapa yang bertanya, dan berapa yang membeli. Dari tiga angka itu Anda bisa tahu titik bocornya — apakah masalahnya belum terlihat, belum dipercaya, atau belum mudah dibeli. Setiap titik bocor punya obat yang berbeda, dan tidak ada iklan yang bisa mengobati ketiganya sekaligus.",
          },
          {
            type: "p",
            text: "Setelah alur ini bekerja, otomasi mengambil alih pekerjaan berulang: jawaban otomatis untuk pertanyaan umum, broadcast untuk pelanggan lama, integrasi marketplace ke satu dasbor, dan laporan penjualan otomatis. Di titik ini pemasaran digital berhenti menjadi pekerjaan tambahan yang melelahkan dan mulai menjadi mesin yang bekerja saat Anda tidur. Tim DIGIMAN.ID membantu menyusun seluruh rantai ini — dari Google Bisnis Profil, katalog WhatsApp Business, sampai aplikasi yang mengotomasi alurnya — dengan target yang terukur, bukan sekadar jasa posting konten.",
          },
        ],
      },
    ],
  },
  {
    slug: "legalitas-industri-kreatif-film-musik-penerbitan",
    title: "Legalitas Industri Kreatif: Izin Film, Musik, Penerbitan, dan Event Tanpa Pusing",
    excerpt:
      "Sensor film, royalti musik, ISBN buku, sampai izin konser — industri kreatif punya peta izin yang unik dan sering tidak dipahami sampai masalah datang. Ini peta lengkapnya per bidang, dengan lembaga yang benar dan urutan yang efisien.",
    date: "2026-10-08",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: [
      "izin film lsf",
      "royalti musik lmk",
      "isbn buku cara daftar",
      "izin konser di indonesia",
    ],
    sections: [
      {
        h2: "Industri kreatif punya regulator yang berbeda-beda per bidang",
        blocks: [
          {
            type: "p",
            text: "Berbeda dengan legalitas umum yang cukup NIB dan izin sektor, industri kreatif dibenturkan pada berbagai lembaga khusus: film diatur lewat sistem persensoran, musik menyentuh hak ekonomi pencipta lewat badan manajemen kolektif, penerbitan berhubungan dengan nomor identitas publikasi, dan event menyentuh izin lokal serta pajak pertunjukan. Kebingungan wajar — tetapi tidak boleh dibiarkan, karena pelanggaran di bidang ini mudah terekspos publik dan merusak reputasi karya itu sendiri.",
          },
          {
            type: "table",
            headers: ["Aktivitas", "Legalitas Kunci", "Lembaga Terkait"],
            rows: [
              ["Film & serial (edar/siar)", "Sertifikat lolos sensor + izin edar", "Lembaga Sensor Film (LSF)"],
              ["Pemutaran musik komersial/event", "Lisensi royalti musik", "LMK berizin (hak pencipta)"],
              ["Penerbitan buku", "ISBN (dan ISSN utk serial)", "Perpustakaan Nasional RI"],
              ["Konser & pertunjukan", "Izin event + kewajiban pajak lokal", "Pemda & instansi terkait"],
              ["Media daring/pers", "Pendaftaran perusahaan media", "Dewan Pers"],
              ["Game", "Rating usia & kepatuhan konten", "Instansi terkait perangkat lunak"],
            ],
          },
        ],
      },
      {
        h2: "Film dan konten audiovisual: sensor bukan formalitas",
        blocks: [
          {
            type: "p",
            text: "Karya film yang diedarkan atau disiarkan di Indonesia wajib melalui persensoran dan memperoleh sertifikat lolos sensor beserta izin edar atau izin tayang sesuai kanal distribusinya. Proses ini bukan belakangan belaka: naskah atau footage yang mengandung konten terlarang harus direvisi, dan jadwal rilis yang ketat tanpa antisipasi waktu sensor sering berujung penundaan pemutaran yang mahal. Sisihkan waktu di kalender produksi untuk tahap ini sejak hari pertama perencanaan.",
          },
          {
            type: "p",
            text: "Bagi rumah produksi, kepatuhan juga menyentuh struktur badan usaha dan kontrak talenta. Kontrak dengan aktor, kru, dan hak cipta hasil karya sebaiknya ditulis tegas sejak produksi — siapa memegang hak apa, bagaimana pembagian hasil digital, dan bagaimana kelanjutan sekuel. Sengketa kreatif hampir selalu lahir dari kontrak yang buruk, bukan dari regulator.",
          },
        ],
      },
      {
        h2: "Musik: royalti itu kewajiban, bukan sukarela",
        blocks: [
          {
            type: "p",
            text: "Memutar musik secara komersial — di kafe, konser, iklan, video produk, dan media digital — menyentuh hak ekonomi pencipta yang dijamin UU Hak Cipta. Pengguna komersial diperbolehkan mengelola kewajiban royalti lewat badan manajemen kolektif yang berizin, sehingga pembayaran jadi terstruktur dan pencipta tetap dihargai. Mengabaikan ini membuka risiko tuntutan yang dihitung dari lama pemutaran, dan justru lebih mahal daripada lisensi yang rapi sejak awal.",
          },
          {
            type: "p",
            text: "Di sisi lain, bagi pencipta dan label, memahami sistem ini adalah sumber penghasilan pasif yang sering tidak terkumpul karena tidak terdaftar. Mengurus keanggotaan dan katalog karya memastikan royalti mengalir ke yang berhak. Ini dua sisi mata uang yang sama: kepatuhan pengguna dan pendaftaran pencipta.",
          },
        ],
      },
      {
        h2: "Penerbitan dan event: nomor resmi + izin lokal",
        blocks: [
          {
            type: "p",
            text: "Buku yang diterbitkan memerlukan ISBN per judul (dan ISSN untuk publikasi serial), yang juga menjadi syarat distribusi ke perpustakaan, toko buku besar, dan ajang penghargaan. Untuk penerbit yang serius, tambahkan kepatuhan pajak dan kontrak hak cipta dengan penulis yang jelas. Sementara event dan konser menggabungkan izin operasional dari pemda setempat, keselamatan penonton, dan kewajiban pajak pertunjukan — tiga hal yang paling sering ditagih mundur oleh pemerintah daerah ketika event sudah selesai.",
          },
          {
            type: "ul",
            items: [
              "Ajukan izin event jauh sebelum tanggal H, sertakan rencana penonton, keamanan, dan linimasa teknis.",
              "Tata kewajiban royalti musik sejak kontrak artis dibuat, bukan setelah undangan promosi keluar.",
              "Siapkan kontrak talenta dan vendor dengan rincian hak, pembatalan, dan asuransi.",
              "Arsipkan seluruh izin dan bukti pelunasan pajak — menjadi aset reputasi untuk event berikutnya.",
            ],
          },
          {
            type: "p",
            text: "Industri kreatif berkembang cepat dan regulasinya mengikuti, jadi cara paling efisien adalah membentuk pola kerja yang kepatuhan-nya sudah rapi sejak awal, bukan memperbaikinya setelah masalah datang. DIGIMAN.ID menyusun peta izin khusus untuk bisnis kreatif Anda — film, musik, penerbitan, event, merchandise, sampai kontrak kreator — dalam satu paket pendampingan yang menyesuaikan model bisnis Anda.",
          },
        ],
      },
    ],
  },
  {
    slug: "pbg-slf-legalitas-bangunan-panduan-lengkap",
    title: "PBG dan SLF: Panduan Legalitas Bangunan dari Pembangunan sampai Operasional",
    excerpt:
      "IMB sudah tidak ada — yang berlaku PBG dan SLF. Panduan ini menjelaskan bedanya, urutan pengurusannya lewat SIMBG, masa berlaku SLF, dan risiko bisnis yang beroperasi di bangunan tanpa dokumen legal.",
    date: "2026-10-11",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: [
      "perbedaan pbg dan slf",
      "cara mengurus slf bangunan",
      "pbg simbg",
      "sanksi bangunan tanpa slf",
    ],
    sections: [
      {
        h2: "IMB sudah pensiun: era PBG dan SLF",
        blocks: [
          {
            type: "p",
            text: "Sejak UU Cipta Kerja dan PP No. 16 Tahun 2021 berlaku, Izin Mendirikan Bangunan (IMB) digantikan oleh dua dokumen dengan fungsi berbeda: Persetujuan Bangunan Gedung (PBG) yang diterbitkan sebelum dan selama pembangunan, serta Sertifikat Laik Fungsi (SLF) yang menyatakan bangunan laik digunakan setelah selesai. Banyak orang masih menyebutnya 'IMB' sehari-hari, tetapi dalam dokumen resmi dan urusan dengan bank, notaris, serta regulator, yang dituntut adalah PBG dan SLF.",
          },
          {
            type: "table",
            headers: ["Aspek", "PBG", "SLF"],
            rows: [
              ["Diterbitkan", "Sebelum bangunan didirikan/dimodifikasi", "Setelah pembangunan selesai"],
              ["Menilai", "Kesesuaian rencana teknis vs tata ruang", "Kelaikan fungsi: struk, listrik, ME, sanitasi, akses"],
              ["Diurus lewat", "SIMBG", "SIMBG"],
              ["Berlaku", "Seumur hidup bangunan (wajib lapor pembangunan)", "Perlu diperpanjang sesuai ketentuan"],
            ],
          },
        ],
      },
      {
        h2: "Urutan pengurusan yang benar",
        blocks: [
          {
            type: "ul",
            items: [
              "Pastikan status lahan dan kesesuaian kegiatan dengan tata ruang — kesalahan di tahap ini membuat semua dokumen berikutnya tidak bermakna.",
              "Susun dokumen teknis bangunan (gambar arsitektur, struktur, MEP) oleh tenaga teknis yang berhak, sesuai kompleksitas bangunan.",
              "Ajukan PBG melalui SIMBG dengan data Pemilik/GSBT dan dokumen teknis, lalu tanggapi perbaikan bila ada.",
              "Laksanakan pembangunan sesuai dokumen yang disetujui dan laporkan perkembangannya sesuai ketentuan.",
              "Setelah selesai, ajukan SLF dengan lampiran hasil penilaian teknis — jangan menunggu ada audit baru mengurus.",
            ],
          },
          {
            type: "p",
            text: "Untuk bangunan sederhana (rumah tinggal kecil, ruko kecil), alurnya dirancang ringan dan bisa diurus sendiri. Untuk bangunan besar — pabrik, hotel, gudang, gedung perkantoran — dokumen teknisnya lebih kompleks dan penilaiannya lebih ketat, sehingga pendampingan teknis biasanya lebih hemat daripada perbaikan berulang yang menunda operasional.",
          },
        ],
      },
      {
        h2: "Risiko beroperasi tanpa PBG/SLF",
        blocks: [
          {
            type: "p",
            text: "Bangunan tanpa PBG dianggap bangunan tanpa izin yang dikenai sanksi administratif, dan bangunan tanpa SLF dianggap tidak laik fungsi — keduanya dapat berujung penghentian aktivitas sampai penyegelan. Yang lebih sering dirasakan sebelum sanksi datang adalah hambatan komersial: bank menolak KPR/ kredit investasi, investor menunda akuisisi saat due diligence menemukan dokumen tidak lengkap, asuransi mempersulit klaim kebakaran, dan lelang/pengadaan menuntut bukti legalitas bangunan.",
          },
          {
            type: "p",
            text: "Banyak kasus SLF terancam ditolak karena dibangun menyimpang dari PBG — tambahan lantai, perubahan fungsi ruang, atau pembangunan di bagian yang tidak direncanakan. Karena itu, setiap rencana modifikasi bangunan sebaiknya dibahas dulu implikasi dokumennya, bukan dikerjakan dulu dan dibenahi belakangan. Untuk kasus yang sudah menyimpang, ada jalur normalisasi, tetapi harganya jauh lebih mahal daripada mengikuti dokumen dari awal.",
          },
        ],
      },
      {
        h2: "Bila bangunan tua atau diwilayah menyulitkan",
        blocks: [
          {
            type: "p",
            text: "Banyak bisnis beroperasi di bangunan lama yang tidak pernah punya IMB/PBG, atau di properti sewa yang legalitasnya tidak jelas. Di titik ini, langkah pertama selalu bukan mengurus SLF, melainkan memeriksa status lahan dan bangunannya terlebih dahulu — termasuk apakah fungsi kegiatan Anda (pabrik, ritel, jasa) sesuai tata ruang wilayahnya. Mengurusi dokumen di atas fondasi yang bermasalah hanya menghasilkan dokumen yang bisa dibatalkan.",
          },
          {
            type: "p",
            text: "Tim DIGIMAN.ID memulai pendampingan PBG/SLF dengan pemeriksaan status properti dan kesesuaian tata ruang, baru menyusun strategi pengurusan — termasuk jalur normalisasi bila perlu. Pendekatan ini mencegah klien membuang biaya di proses yang tidak akan pernah lulus, dan menghubungkan kebutuhan bangunan Anda dengan legalitas usaha secara utuh.",
          },
        ],
      },
    ],
  },
];
