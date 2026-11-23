/**
 * ARTIKEL PILLAR KATEGORI — Seri B (SDM & Organisasi, Resiliensi Bisnis,
 * Pendanaan, Struktur Korporasi).
 */
import type { BlogPost } from "./blog-posts";

export const BLOG_POSTS_PILLAR_B: BlogPost[] = [
  {
    slug: "struktur-organisasi-grading-karyawan-panduan",
    title: "Struktur Organisasi & Grading Karyawan: Fondasi SDM yang Sering Diabaikan",
    excerpt:
      "Bisnis yang tumbuh cepat paling sering tersandung bukan di pasar, tapi di dalam: tugas tumpang-tindih, gaji tidak adil, dan jalur karier kabur. Panduan ini menyusun struktur organisasi dan sistem grading yang bisa dipakai UMKM sampai korporasi.",
    date: "2026-10-14",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: [
      "struktur organisasi perusahaan",
      "sistem grading karyawan",
      "job grading perusahaan",
      "standar gaji grading",
    ],
    sections: [
      {
        h2: "Gejala bisnis yang strukturnya belum tertata",
        blocks: [
          {
            type: "p",
            text: "Ada tanda-tanda yang mudah dikenali: semua keputusan penting harus lewat pemilik, dua orang merasa tugasnya sama, karyawan resign karena 'tidak ada jalur naik', dan gaji baru ditentukan saat merekrut berdasarkan tawar-menawar — bukan berdasarkan nilai posisi. Gejala-gejala ini jarang dianggap masalah serius sampai tim melewati sekitar sepuluh orang, ketika komunikasi langsung tidak lagi cukup dan kekosongan struktur mulai terasa mahal.",
          },
          {
            type: "p",
            text: "Struktur organisasi dan grading bukan formalitas korporat besar; itu infrastruktur yang membuat usaha Anda bisa tumbuh tanpa bergantung pada ingatan pemilik. Perusahaan yang ingin menarik investor atau sertifikasi tertentu juga akan diminta dokumen ini — struktur, uraian tugas, dan sistem remunerasi adalah salah satu bagian pertama yang diperiksa saat due diligence SDM.",
          },
        ],
      },
      {
        h2: "Bangun struktur dari fungsi, bukan dari orang",
        blocks: [
          {
            type: "p",
            text: "Kesalahan paling umum adalah menyusun struktur dengan memposisikan orang yang sudah ada, sehingga struktur berubah setiap kali orang berpindah. Pendekatan yang benar membaliknya: petakan dulu fungsi-fungsi yang harus ada untuk menjalankan bisnis — produksi, pemasaran, keuangan, SDM, operasional — lalu definisikan posisi apa yang menjalankan fungsi itu, dan baru tempatkan orang pada posisi yang ada. Dengan cara ini, struktur tetap stabil meskipun personel berganti.",
          },
          {
            type: "ul",
            items: [
              "Tulis bagan organisasi hingga level yang relevan hari ini (jangan menambah level fiktif demi prestise).",
              "Buat uraian tugas per posisi: output yang diharapkan, wewenang, dan batasannya — bukan daftar aktivitas harian.",
              "Tegaskan garis pelaporan siapa-kepada-siapa agar tidak ada karyawan yang menerima perintah ganda.",
              "Petakan posisi kunci dan siapa cadangannya — risiko terbesar usaha kecil adalah semua pengetahuan ada di satu kepala.",
            ],
          },
        ],
      },
      {
        h2: "Grading: bahasa bersama untuk nilai posisi",
        blocks: [
          {
            type: "p",
            text: "Sistem grading memberi setiap posisi tingkatan (misalnya G1 sampai G7) berdasarkan kompleksitas tugas, tanggung jawab, dan kualifikasi yang dibutuhkan. Dengan grading, keputusan gaji tidak lagi ad-hoc: setiap tingkat punya rentang gaji, syarat naik tingkat, dan benefit yang jelas. Ini menyelesaikan dua masalah sekaligus — gaji yang timpang antar karyawan lama dan baru, serta pertanyaan 'apa jalur karier saya di sini' yang kini punya jawaban konkret.",
          },
          {
            type: "table",
            headers: ["Tingkat", "Contoh Posisi", "Ciri Utama"],
            rows: [
              ["G1–G2", "Staf, admin, operator", "Tugas terstandar, pengawasan rutin"],
              ["G3–G4", "Senior staf, supervisor", "Mandiri pada domainnya, mengarahkan staf"],
              ["G5", "Manajer", "Bertanggung jawab atas hasil unit"],
              ["G6–G7", "Direksi/eksekutif", "Keputusan strategis & akuntabilitas penuh"],
            ],
          },
          {
            type: "p",
            text: "Jumlah tingkat tidak harus tujuh — usaha kecil bisa cukup dengan empat. Yang penting dua hal: kriteria kenaikan tingkat tertulis dan terukur, serta rentang gaji antar tingkat masuk akal dibanding pasar. Grading yang terlalu banyak tingkat justru menyulitkan; yang terlalu sedikit membuat jalur karier tidak terasa bergerak.",
          },
        ],
      },
      {
        h2: "Hubungkan grading dengan gaji, KPI, dan pelatihan",
        blocks: [
          {
            type: "p",
            text: "Grading baru berguna bila menjadi tulang punggung sistem lain. Remunerasi mengacu ke rentang per grade; penilaian kinerja mengukur seberapa baik seseorang menjalankan posisinya; kebutuhan pelatihan diturunkan dari kesenjangan kompetensi per posisi. Ketika ketiganya terhubung, rapat penilaian tahunan berubah dari negosiasi emosional menjadi keputusan berbasis data — dan karyawan melihat hubungan yang adil antara kerja, hasil, dan imbalan.",
          },
          {
            type: "p",
            text: "Bagi perusahaan yang mengelola payroll besar, struktur dan grading juga menjadi dasar audit: apakah setiap pembayaran punya dasar posisi dan tingkat yang sah. Ketidakteraturan di sini sering ditemukan saat audit kepatuhan ketenagakerjaan atau saat perusahaan mempersiapkan pendanaan. Karena itu kami menyarankan penataan struktur-grading dilakukan sekali dengan benar, lalu dirawat tiap tahun — bukan disusun ulang dari nol setiap ada masalah.",
          },
        ],
      },
      {
        h2: "Mulai dari mana jika belum sama sekali",
        blocks: [
          {
            type: "p",
            text: "Bila usaha Anda belum punya struktur tertulis, jangan mencoba meniru struktur korporasi besar sekaligus. Mulailah dari tiga dokumen minimum: bagan organisasi saat ini apa adanya, uraian tugas untuk posisi yang paling menentukan pendapatan, dan rentang gaji per fungsi. Dalam satu hingga dua bulan kerja terstruktur, fondasi ini bisa berdiri, kemudian ditingkatkan bertahap ke grading penuh dan sistem kinerja. Tim DIGIMAN.ID menyusun seluruhnya — dari pemetaan fungsi, grading, sampai implementasi sistem penilaian kinerja — dengan ukuran yang sesuai tahap pertumbuhan usaha Anda.",
          },
        ],
      },
    ],
  },
  {
    slug: "business-continuity-plan-panduan-lengkap",
    title: "Business Continuity Plan: Panduan Menjaga Bisnis Tetap Jalan Saat Krisis",
    excerpt:
      "Kebakaran gudang, server mati, karyawan kunci resign, atau krisis reputasi — bisnis yang survive bukan yang tak kena musibah, tapi yang punya rencana. Ini panduan menyusun Business Continuity Plan yang realistis, berbasis ISO 22301.",
    date: "2026-10-17",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: [
      "business continuity plan",
      "rencana kelangsungan bisnis",
      "iso 22301",
      "manajemen risiko bisnis",
    ],
    sections: [
      {
        h2: "Kelangsungan bisnis adalah rencana, bukan harapan",
        blocks: [
          {
            type: "p",
            text: "Hampir semua pemilik usaha tahu risikonya — kebakaran, kebocoran data, gangguan pemasok, krisis reputasi di media sosial — tetapi sangat sedikit yang punya jawaban tertulis ketika risiko itu terjadi. Padahal perbedaan antara bisnis yang pulih dalam beberapa hari dan bisnis yang berhenti selamanya jarang soal dana; itu soal rencana yang sudah disiapkan sebelum kejadian: siapa memutuskan apa, data diambil dari mana, dan pelanggan diinformasikan dengan kalimat apa.",
          },
          {
            type: "p",
            text: "Business Continuity Plan (BCP) adalah dokumen hidup yang menjawab persis itu. Standar internasional ISO 22301 memberi kerangkanya, tetapi prinsipnya sederhana: identifikasi apa yang paling tidak boleh berhenti, siapkan cara agar tetap berjalan pada tingkat minimum, dan latih orangnya. UMKM bisa memulai dengan versi ringkas berukuran belasan halaman; korporasi yang diatur regulasi khusus membutuhkan versi yang lebih menyeluruh dan teruji.",
          },
        ],
      },
      {
        h2: "Mulai dari analisis dampak bisnis (BIA)",
        blocks: [
          {
            type: "p",
            text: "Fondasi BCP adalah Business Impact Analysis: menentukan proses mana yang paling kritis dan berapa lama boleh berhenti. Tiga angka yang biasa dipakai: MTPD (batas maksimal gangguan sebelum kerugian fatal), RTO (target waktu pemulihan), dan RPO (jumlah data yang boleh hilang). Tanpa angka ini, keputusan investasi proteksi menjadi tebakan — terlalu murah untuk risiko besar, atau boros untuk hal yang sebenarnya bisa berhenti sehari tanpa masalah.",
          },
          {
            type: "table",
            headers: ["Proses Kritis", "Contoh Risiko", "Target Pemulihan (RTO)", "Strategi"],
            rows: [
              ["Sistem pemesanan", "Server mati / serangan", "4–24 jam", "Backup otomatis + server cadangan"],
              ["Pengiriman produk", "Gudang terganggu", "1–3 hari", "Gudang alternatif + mitra logistik cadangan"],
              ["Penerimaan pembayaran", "Payment gateway bermasalah", "Beberapa jam", "Minimal dua kanal pembayaran aktif"],
              ["Layanan pelanggan", "Nomor WA terblokir", "Hari yang sama", "Nomor cadangan + kanal resmi kedua"],
            ],
          },
        ],
      },
      {
        h2: "Isi rencana: tim, komunikasi, dan sumber daya cadangan",
        blocks: [
          {
            type: "ul",
            items: [
              "Tunjuk struktur tanggap darurat: siapa memimpin, siapa bicara ke media/pelanggan, siapa mengurus operasional teknis — dengan kontak yang tercetak, bukan hanya di HP pribadi.",
              "Siapkan panduan komunikasi: template kabar ke pelanggan, ke pegawai, ke pemasok, dan protokol media sosial saat krisis.",
              "Catat ketergantungan kritis: pemasok tunggal, sistem tunggal, orang tunggal — dan rencana cadangan untuk masing-masing.",
              "Dokumentasikan prosedur pemulihan: cara mengakses backup, lokasi gudang alternatif, prosedur kerja manual bila sistem utama mati.",
              "Tetapkan ambang pemutusan keputusan: kapan aktivitas dihentikan sementara, kapan dijalankan manual, kapan kembali normal.",
            ],
          },
          {
            type: "p",
            text: "Bagian paling sering dilupakan adalah komunikasi. Krisis yang ditangani baik secara operasional tetap bisa berakhir buruk bila pelanggan mendengar kabar dari rumor. Template komunikasi yang sudah disetujui sebelum krisis menghemat jam-jam paling mahal dan menjaga nada bicara perusahaan tetap tenang.",
          },
        ],
      },
      {
        h2: "Rencana yang tidak dilatih adalah dokumen mati",
        blocks: [
          {
            type: "p",
            text: "Nilai BCP terbukti saat dilatih. Minimal sekali setahun, jalankan simulasi sederhana: matikan akses ke sistem utama selama satu jam dan amati apakah tim tahu harus ke mana. Catat yang tersendat, perbaiki rencananya, lalu ulangi. Pengujian rutin inilah yang membedakan BCP sungguhan dari dokumen yang hanya ada untuk memenuhi syarat audit atau tender.",
          },
          {
            type: "p",
            text: "Perhatikan juga bahwa BCP berlaku untuk risiko manusiawi, bukan hanya bencana: karyawan kunci yang mendadak keluar, kontroversi produk yang viral, atau pemasok utama yang bangkrut. Struktur BIA yang sama memetakan semuanya, dan justru skenario semacam ini yang paling sering terjadi dibanding bencana besar. Untuk kebutuhan yang lebih komprehensif — integrasi manajemen risiko (ERM), SOP pencegahan fraud, sampai manajemen krisis PR — DIGIMAN.ID menyusunnya sebagai satu paket resiliensi yang saling terhubung.",
          },
        ],
      },
    ],
  },
  {
    slug: "pendanaan-bisnis-investor-pitch-deck-panduan",
    title: "Panduan Pendanaan Bisnis: Dari KUR sampai Investor — Pilih yang Tepat untuk Tahap Anda",
    excerpt:
      "Hutang, ekuitas, hibah, atau dana sendiri? Kesalahan memilih sumber dana di tahap yang salah bisa menekan bisnis justru saat sedang tumbuh. Panduan ini memetakan pilihan pendanaan per tahap bisnis dan dokumen yang harus disiapkan.",
    date: "2026-10-20",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 10,
    keywords: [
      "cara mendapatkan investor",
      "pendanaan bisnis",
      "syarat kredit modal usaha",
      "pitch deck investor",
    ],
    sections: [
      {
        h2: "Setiap tahap bisnis punya sumber dana yang tepat",
        blocks: [
          {
            type: "p",
            text: "Kesalahan paling mahal dalam pendanaan bukan gagal mendapat dana, melainkan mendapat dana dari pintu yang salah. Bisnis yang sepi pembeli seharusnya tidak menambah hutang untuk ekspansi; bisnis yang pesat tetapi kepemilikannya rapuh seharusnya tidak buru-buru menjual saham besar. Memetakan tahap bisnis — mulai, tumbuh, ekspansi, dewasa — sebelum memilih sumber dana menyelamatkan Anda dari keputusan yang mahal untuk dibatalkan.",
          },
          {
            type: "table",
            headers: ["Sumber Dana", "Sifat", "Cocok Untuk", "Catatan Penting"],
            rows: [
              ["Dana sendiri & laba ditahan", "Tanpa kewajiban", "Semua tahap", "Fondasi; menunjukkan komitmen ke pihak luar"],
              ["Kredit modal usaha (mis. KUR)", "Hutang berbunga", "Modal kerja produktif", "Butuh legalitas rapi & catatan usaha"],
              ["Investor ekuitas", "Saham berbagi", "Bisnis tumbuh cepat", "Hilangkan sebagian kepemilikan & kontrol"],
              ["Hibah & program riset", "Tanpa imbalan", "Inovasi & riset", "Proses selektif, laporan wajib"],
              ["Financing instrumen khusus", "Campuran", "Perusahaan mapan", "Butuh struktur legal & data keuangan matang"],
            ],
          },
        ],
      },
      {
        h2: "Legalitas adalah tiket masuk, bukan kelengkapan tambahan",
        blocks: [
          {
            type: "p",
            text: "Baik ke bank, lembaga pembiayaan, maupun investor, hal pertama yang diperiksa adalah legalitas: badan usaha yang sesuai, NIB dan izin sektor, NPWP aktif dengan pelaporan rapi, serta kepemilikan saham yang jelas. Ketidakberesan yang tampak kecil — KBLI tidak sesuai kegiatan, laporan pajak tertunggak, saham atas nama orang yang tidak jelas — cukup untuk menghentikan seluruh proses. Investor korporasi bahkan menjadikan ini penyebab penolakan paling umum, bukan kualitas produk.",
          },
          {
            type: "p",
            text: "Karena itu, menyiapkan pendanaan sebaiknya dimulai dari merapikan rumah sendiri: badan usaha yang benar, dokumen kepemilikan tertulis, dan catatan keuangan yang konsisten minimal dua belas bulan terakhir. Biaya merapikan ini jauh lebih kecil daripada nilai pendanaan yang hilang karena dokumen — dan prosesnya bisa berjalan paralel dengan pembicaraan awal.",
          },
        ],
      },
      {
        h2: "Dokumen yang menentukan: pitch deck dan angka yang bisa dipercaya",
        blocks: [
          {
            type: "ul",
            items: [
              "Pitch deck 10–15 halaman: masalah, solusi, ukuran pasar, model bisnis, traksi (angka nyata), tim, dan permintaan dana dengan penggunaannya.",
              "Proyeksi keuangan 3–5 tahun dengan asumsi yang ditulis dan masuk akal — investor menguji asumsi, bukan mengagumi grafik.",
              "Data room: dokumen legal, kontrak kunci, daftar aset & liabilitas, dan laporan keuangan yang siap diperiksa.",
              "Rencana penggunaan dana yang spesifik per pos, bukan angka bulat tanpa rincian.",
            ],
          },
          {
            type: "p",
            text: "Yang membuat pendanaan gagal paling sering bukan deck yang jelek, melainkan ketidakkonsistenan antara cerita dan data: proyeksi tumbuh 10x tanpa penjelasan, traksi yang tidak bisa direkonsiliasi, atau tim yang tidak jelas bagiannya. Kerjakan angka sampai Anda bisa menjawab pertanyaan tingkat ketiga — di situ Anda tahu siap bicara dengan investor atau lembaga pembiayaan.",
          },
        ],
      },
      {
        h2: "Ekuitas: pahami dulu apa yang Anda berikan",
        blocks: [
          {
            type: "p",
            text: "Mengambil investor berarti berbagi kepemilikan — dan berarti berbagi cara mengambil keputusan. Sebelum menerima tawaran, pahami valuasi yang diberikan, instrumen yang dipakai (saham biasa, convertible note, SAFE), hak khusus investor (veto, kursi komisaris, preferensi likuidasi), dan bagaimana hal itu berubah bila ada pendanaan berikutnya. Perjanjian pemegang saham yang baik melindungi kedua pihak; yang buruk meledak tepat saat bisnis mulai bernilai besar.",
          },
          {
            type: "p",
            text: "Untuk usaha keluarga atau bisnis yang ingin tetap dikendalikan pendiri, ada jalur tanpa melepas saham: kredit produktif, pembiayaan piutang, atau kemitraan yang tidak menyentuh struktur kepemilikan. Tim DIGIMAN.ID membantu memilih jalur yang sesuai tahap Anda — menyusun pitch deck dan data room, valuasi bisnis, sampai negosiasi dan perjanjian pemegang saham — dengan satu prinsip: dana harus mempercepat bisnis, bukan mempercepat hilangnya kendali.",
          },
        ],
      },
    ],
  },
  {
    slug: "perusahaan-holding-struktur-korporasi-panduan",
    title: "Perusahaan Holding: Panduan Struktur Korporasi untuk Bisnis yang Tumbuh",
    excerpt:
      "Kapan bisnis perlu holding? Bagaimana strukturnya, apa insentif pajaknya, dan apa jebakan yang membuat pendirian holding justru mahal tanpa guna? Panduan lengkap untuk pemilik multi-bisnis.",
    date: "2026-10-22",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: [
      "perusahaan holding adalah",
      "struktur perusahaan holding",
      "pendirian holding indonesia",
      "insentif pajak holding",
    ],
    sections: [
      {
        h2: "Apa itu holding dan bentuk-bentuknya",
        blocks: [
          {
            type: "p",
            text: "Perusahaan holding adalah perusahaan yang memegang saham pengendali di perusahaan lain (anak perusahaan). Fungsinya bertingkat: mengkonsolidasikan kepemilikan, mengisolasi risiko antar unit, memfasilitasi pendanaan dan investasi, serta menyatukan kendali strategis sementara operasional berjalan di entitas masing-masing. Di Indonesia, holding umumnya berbentuk PT dan tunduk pada UU No. 40 Tahun 2007 sebagai perseroan terbatas biasa — tidak ada jenis 'PT holding' khusus dalam hukum.",
          },
          {
            type: "p",
            text: "Dua bentuk yang umum: holding murni yang hanya memegang saham tanpa operasional, dan holding campuran yang tetap menjalankan bisnis utamanya sambil memegang entitas lain. Pilihan ini memengaruhi struktur modal, biaya pemeliharaan dua entitas, dan cara regulator memandangnya — khususnya bila holding melibatkan pihak asing atau sektor yang diatur khusus.",
          },
        ],
      },
      {
        h2: "Tanda bisnis Anda mulai butuh holding",
        blocks: [
          {
            type: "ul",
            items: [
              "Menjalankan lebih dari satu bisnis dengan profil risiko berbeda dan ingin risikonya saling terisolasi.",
              "Menerima investor di unit tertentu tanpa menggabungkan seluruh bisnis ke satu entitas.",
              "Bersiap suksesi atau pembagian warisan usaha antar anggota keluarga.",
              "Membangun aset bersama (merek, tanah, teknologi) yang dipakai banyak unit dan sebaiknya dimiliki satu entitas.",
              "Mempersiapkan akuisisi, kemitraan, atau penjualan sebagian bisnis yang lebih mudah dilakukan per entitas.",
            ],
          },
          {
            type: "p",
            text: "Sebaliknya, holding bukan untuk semua. Satu bisnis tunggal yang masih membangun pasar biasanya tidak membutuhkan biaya dua entitas; bahkan struktur yang terlalu rumit justru menghambat pendanaan karena investor sulit memahami keseluruhan aliran kepemilikan. Keputusan yang tepat menggabungkan analisis bisnis, pajak, dan hukum sekaligus — bukan mengikuti tren.",
          },
        ],
      },
      {
        h2: "Jalur pendirian dan catatan pentingnya",
        blocks: [
          {
            type: "p",
            text: "Secara hukum, holding bisa dibentuk dengan mendirikan PT baru yang kemudian memegang saham entitas lain, atau mengubah entitas yang sudah ada menjadi pemegang saham melalui perubahan akta dan pengalihan saham. Bila terlibat pihak asing atau sektor berizin khusus, perizinan berusaha dan kewajiban investasinya mengikuti ketentuan yang berlaku untuk entitas tersebut. Setiap jalur punya konsekuensi pajak pengalihan yang berbeda — inilah alasan perencanaan lebih dulu jauh lebih murah daripada pembongkaran struktur yang salah.",
          },
          {
            type: "p",
            text: "Soal pajak, sering beredar anggapan bahwa holding otomatis hemat pajak. Realitasnya lebih bernuansa: Indonesia tidak menerapkan konsolidasi fiskal penuh, sehingga kerugian satu anak tidak sederhananya mengimbangi laba anak lain. Sementara itu, dividen antar-badan usaha dalam negeri dapat dikecualikan dari objek pajak bila memenuhi syarat penyertaan dan bentuk hukum menurut ketentuan yang berlaku. Insentif nyata ada — tetapi hanya bekerja bila struktur dibangun mengikuti syaratnya, bukan sebaliknya.",
          },
        ],
      },
      {
        h2: "Tata kelola yang membuat holding berguna",
        blocks: [
          {
            type: "p",
            text: "Holding yang baik tidak berhenti di struktur saham. Nilainya baru muncul lewat tata kelola: perjanjian pemegang saham yang jelas, pembagian wewenang antara holding dan anak, mekanisme laporan antar-entitas, serta kebijakan transaksi afiliasi yang dipatok harga wajar. Tanpa ini, holding justru menjadi sumber sengketa — terutama bila pendiri keluarga memegang peran berbeda di entitas yang berbeda.",
          },
          {
            type: "p",
            text: "Untuk keluarga bisnis, kombinasi yang kami anjurkan biasanya: holding sebagai penjaga aset & saham, piagam keluarga sebagai penjaga hubungan, dan suksesi yang disiapkan bertahun sebelum dibutuhkan. Tim DIGIMAN.ID menyusun seluruh paket ini — desain struktur, pendirian entitas, perjanjian pemegang saham, sampai tata kelola korporat — dengan satu tujuan: struktur yang memperjelas kendali dan melindungi kekayaan, bukan sekadar banyaknya PT.",
          },
        ],
      },
    ],
  },
];
