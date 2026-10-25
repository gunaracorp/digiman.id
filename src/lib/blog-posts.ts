/**
 * Artikel blog DIGIMAN.ID — konten edukatif bertarget pencarian nyata.
 * Artikel tersedia sejak build; admin dapat menambah artikel dari Panel
 * Admin > Post (DB) yang akan otomatis tergabung di halaman blog.
 */
import { BLOG_POSTS_2026 } from "./blog-posts-2026";
import { BLOG_POSTS_PILLAR_A } from "./blog-posts-pillar-a";
import { BLOG_POSTS_PILLAR_B } from "./blog-posts-pillar-b";
import { BLOG_POSTS_PILLAR_C } from "./blog-posts-pillar-c";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  readMinutes: number;
  keywords: string[];
  /** Konten terstruktur: heading + paragraf + daftar + tabel */
  sections: {
    h2: string;
    blocks: (
      | { type: "p"; text: string }
      | { type: "ul"; items: string[] }
      | { type: "table"; headers: string[]; rows: string[][] }
      | { type: "h3"; text: string }
    )[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "biaya-pendirian-pt-2025-rincian-lengkap",
    title: "Biaya Pendirian PT 2025: Rincian Lengkap Tanpa Biaya Siluman",
    excerpt:
      "Berapa sebenarnya biaya mendirikan PT? Kami bongkar semua komponennya — honor notaris, resi Kemenkumham, hingga biaya yang sering disembunyikan perantara.",
    date: "2025-09-15",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: ["biaya pendirian pt", "biaya pendirian pt 2025", "honor notaris pendirian pt"],
    sections: [
      {
        h2: "Ringkasan: berapa yang harus Anda siapkan",
        blocks: [
          {
            type: "p",
            text: "Untuk PT standar dengan 1–2 pendiri dan kebutuhan KBLI umum, total biaya pendirian di 2025 umumnya berada di kisaran Rp 3–4,5 juta termasuk seluruh komponen resminya. Angka ini sudah mencakup honor notaris, resi pengesahan, NPWP badan, NIB, dan jasa penanganan. Yang perlu Anda curigai adalah penawaran yang tampak jauh lebih murah di depan — karena hampir selalu ada biaya yang baru muncul di tengah proses.",
          },
          {
            type: "table",
            headers: ["Komponen", "Rentang Biaya", "Catatan"],
            rows: [
              ["Honor notaris & akta", "Rp 1,5–2,5 jt", "Tergantung jumlah pendiri & KBLI"],
              ["Resi Kemenkumham", "Rp 200–400 rb", "Berasal dari tarif resmi negara"],
              ["NPWP badan", "Gratis", "Terbit bersama SK pengesahan"],
              ["NIB via OSS-RBA", "Gratis", "Dilakukan sendiri atau dibantu"],
              ["Domisili usaha", "Rp 0–2 jt", "Gratis bila pakai rumah; VO ada biaya sewa"],
              ["Jasa penyelenggara", "Rp 500 rb–1 jt", "Termasuk pemetaan KBLI & koordinasi"],
            ],
          },
        ],
      },
      {
        h2: "Tiga biaya tersembunyi yang paling sering terjadi",
        blocks: [
          {
            type: "h3",
            text: "1. Biaya per-KBLI yang tidak dijelaskan di awal",
          },
          {
            type: "p",
            text: "Sebagian penawaran menghitung honor notaris hanya untuk 2–3 KBLI, lalu menagih tambahan per KBLI setelah Anda setuju. Padahal kebutuhan KBLI yang realistis untuk bisnis yang tumbuh biasanya 8–15 kode. Selalu tanyakan: 'Berapa KBLI yang sudah termasuk, dan berapa biaya tambahan per KBLI?'",
          },
          {
            type: "h3",
            text: "2. Biaya domisili yang berlipat",
          },
          {
            type: "p",
            text: "Surat keterangan domisili dari kelurahan gratis — namun banyak pihak menagih 'biaya pengurusan' yang berlipat-lipat. Bila Anda butuh virtual office, bayar sewanya secara langsung ke penyedia VO dengan kontrak atas nama Anda, bukan melalui perantara yang membatilkan margin.",
          },
          {
            type: "h3",
            text: "3. Biaya 'pemrosesan cepat' yang meragukan",
          },
          {
            type: "p",
            text: "Pengesahan SK Kemenkumham saat ini umumnya terbit real-time hingga 1 hari kerja secara normal. Penawaran 'bayar lebih untuk percepatan' pada tahap ini patut diwaspadai — tidak ada jalur khusus berbayar di sistem AHU untuk umum.",
          },
        ],
      },
      {
        h2: "Cara membandingkan penawaran dengan benar",
        blocks: [
          {
            type: "p",
            text: "Minta penawaran yang menguraikan setiap komponen: berapa honor notaris, berapa resi negara, berapa jasa, dan apa saja yang sudah termasuk. Penyedia yang transparan tidak akan kesulitan menjawab — sebaliknya, ini justru tanda profesionalisme. Di DIGIMAN.ID, seluruh komponen tertulis sejak penawaran pertama; bila ada kebutuhan di luar scope, Anda dihubungi dulu sebelum biaya baru timbul.",
          },
          {
            type: "p",
            text: "Satu catatan penutup yang penting: PT yang berdiri dengan biaya murah tetapi KBLI tidak lengkap akan menghabiskan lebih banyak di kemudian hari — perubahan akta untuk menambah KBLI jauh lebih mahal daripada memetakan dengan benar sejak awal. Investasikan di pemetaan yang benar, bukan di harga termurah.",
          },
        ],
      },
    ],
  },
  {
    slug: "syarat-cara-mendirikan-pt-online-2025",
    title: "Syarat & Cara Mendirikan PT Secara Online (Tanpa Datang ke Notaris)",
    excerpt:
      "Panduan langkah demi langkah mendirikan PT dari rumah: dokumen yang disiapkan, alur TTE, hingga berapa lama prosesnya benar-benar selesai.",
    date: "2025-09-22",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: ["cara mendirikan pt", "syarat pendirian pt", "pendirian pt online"],
    sections: [
      {
        h2: "Dokumen yang Anda siapkan (semuanya digital)",
        blocks: [
          {
            type: "ul",
            items: [
              "KTP dan NPWP seluruh pendiri/pemegang saham",
              "Email aktif dan nomor HP yang terhubung ke aplikasi bank/e-wallet untuk verifikasi",
              "Alamat usaha — rumah diperbolehkan untuk banyak bidang usaha",
              "Nama PT (siapkan 3 alternatif agar tersedia di sistem AHU)",
              "Rencana modal dasar dan pembagian saham",
              "Deskripsi bidang usaha (untuk pemetaan KBLI)",
            ],
          },
          {
            type: "p",
            text: "Tidak ada lagi kebutuhan KK, surat nikah, atau izin tempat usaha sebagai syarat dasar pendirian — pengalaman lapangan menunjukkan banyak instansi sudah tidak menuntutnya untuk PT kecil-menengah.",
          },
        ],
      },
      {
        h2: "Alur proses online dari awal sampai akhir",
        blocks: [
          {
            type: "ul",
            items: [
              "Langkah 1 — Pemetaan KBLI: menentukan kode bidang usaha yang optimal (risiko, insentif, peluang).",
              "Langkah 2 — Tanda tangan elektronik (TTE): seluruh pendiri memverifikasi identitas elektronik tersertifikasi.",
              "Langkah 3 — Akta notaris digital: akta disusun dan ditandatangani para pihak tanpa tatap muka.",
              "Langkah 4 — Pengesahan AHU: SK Kemenkumham terbit (umumnya real-time s.d. 1 hari kerja).",
              "Langkah 5 — NPWP badan: terbit otomatis bersama SK.",
              "Langkah 6 — NIB via OSS-RBA: izin dasar usaha terbit, sekaligus menjadi izin usaha untuk KBLI risiko rendah.",
              "Langkah 7 — Serah terima dokumen: akta asli dikirim via kurir terjamin.",
            ],
          },
        ],
      },
      {
        h2: "Berapa lama sebenarnya?",
        blocks: [
          {
            type: "p",
            text: "Dengan dokumen lengkap, proses teknis dapat selesai dalam 3–7 hari kerja. Yang paling sering memperlambat bukan sistem pemerintah — melainkan pergantian nama karena bentrok di AHU dan antre verifikasi identitas. Siapkan tiga alternatif nama dan pastikan data KTP-NPWP konsisten dengan email/HP Anda, dan proses Anda akan berjalan di batas teratas estimasinya.",
          },
          {
            type: "p",
            text: "Setelah PT resmi berdiri, jangan lupa kewajiban bulan pertama: konfigurasi profil coretax, keputusan PKP (atau penundanya), dan pembukaan rekening perusahaan. Bila Anda ingin semuanya ditangani bersamaan, Paket Tumbuh DIGIMAN.ID mencakup seluruh rangkaian ini termasuk sesi orientasi kewajiban rutinnya.",
          },
        ],
      },
    ],
  },
  {
    slug: "pt-perorangan-vs-cv-vs-pt-mana-yang-cocok",
    title: "PT Perorangan vs CV vs PT: Pilihan Badan Usaha yang Tepat",
    excerpt:
      "Bukan soal mana yang paling murah — tapi mana yang paling efisien untuk tahap bisnis Anda. Peta keputusan lengkap dengan perbandingan biaya, pajak, dan risiko.",
    date: "2025-10-02",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 10,
    keywords: ["pt perorangan vs cv", "pt perorangan vs pt", "pilih badan usaha"],
    sections: [
      {
        h2: "Peta cepat: tiga pilihan, tiga fase bisnis",
        blocks: [
          {
            type: "table",
            headers: ["Aspek", "PT Perorangan", "CV", "PT"],
            rows: [
              ["Jumlah pemilik", "1 orang saja", "2 orang atau lebih", "1 orang lebih (bisa asing)"],
              ["Badan hukum", "Ya (via NIB)", "Pengesahan kehakiman", "Ya, penuh"],
              ["Biaya awal", "Termurah (Rp 850rb-an)", "Menengah (Rp 1,8jt-an)", "Tertinggi (Rp 3,5jt-an)"],
              ["Tanggung jawab aset", "Terpisah (terbatas)", "Sekutu aktif tak terbatas", "Terpisah penuh"],
              ["Investor/saham", "Tidak bisa", "Sekutu pasif saja", "Bisa penuh"],
              ["Kepatuhan pajak", "Ringan", "Menengah", "Lengkap"],
            ],
          },
        ],
      },
      {
        h2: "Kapan memilih PT Perorangan",
        blocks: [
          {
            type: "p",
            text: "Anda pebisnis solo yang ingin legalitas resmi dengan biaya minimal — freelancer, kreator, konsultan, dropshipper. PT Perorangan memberi badan hukum tanpa notaris: NIB terbit dari OSS sebagai legalitas pasti. Batasannya jelas: satu pendiri satu PT Perorangan, tidak bisa menerima saham investor, dan tidak bisa memegang saham di PT lain.",
          },
        ],
      },
      {
        h2: "Kapan memilih CV",
        blocks: [
          {
            type: "p",
            text: "Usaha dibangun 2 orang atau lebih yang saling percaya penuh — keluarga, sahabat, mitra sederhana. CV lebih murah dari PT dan fleksibel untuk struktur sekutu aktif-pasif. Ingat risikonya: sekutu aktif menanggung kewajiban usaha dengan kekayaan pribadi (tanggung jawab tak terbatas), sehingga CV kurang cocok untuk usaha berisiko tinggi atau kontrak besar.",
          },
        ],
      },
      {
        h2: "Kapan langsung PT biasa",
        blocks: [
          {
            type: "p",
            text: "Tiga sinyal: (1) rencana menerima investor atau pinjaman bank besar — PT adalah bahasa mereka; (2) bisnis menanggung risiko — produk fisik, karyawan banyak, tanggung jawab kontraktual; (3) target kelembagaan — tender, enterprise client, atau ekspansi multi-cabang. Biaya awal PT lebih tinggi, tetapi biaya konversi dari CV/PT Perorangan ke PT kemudian hari jauh lebih mahal daripada berdiri benar sejak awal.",
          },
          {
            type: "p",
            text: "Masih ragu? Konsultasi gratis kami akan menilai posisi Anda berdasarkan omzet rencana, jumlah pemilik, risiko usaha, dan rencana 3 tahun — lalu merekomendasikan satu pilihan dengan alasannya. Tanpa komitmen paket apa pun.",
          },
        ],
      },
    ],
  },
  {
    slug: "cara-mendirikan-pt-pma-investor-asing",
    title: "Cara Mendirikan PT PMA: Panduan Lengkap Investor Asing di Indonesia",
    excerpt:
      "Modal minimum, persentase kepemilikan asing, laporan BKPM, hingga KITAS — semua yang harus dipahami investor sebelum menanam modal di Indonesia.",
    date: "2025-10-10",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 11,
    keywords: ["cara mendirikan pt pma", "pt pma indonesia", "modal minimum pma"],
    sections: [
      {
        h2: "Apa itu PT PMA dan kapan Anda membutuhkannya",
        blocks: [
          {
            type: "p",
            text: "PT PMA (Penanaman Modal Asing) adalah badan hukum Indonesia dengan kepemilikan saham asing. Setiap warga negara asing atau korporasi luar negeri yang ingin berbisnis secara serius di Indonesia — membuka kantor, merekrut, berkontrak besar, memiliki properti perusahaan — membutuhkan struktur ini. Berjualan via KITAS turis atau menggunakan nama kerabat lokal bukan hanya berisiko; keduanya pelanggaran dengan konsekuensi deportasi dan blacklist.",
          },
        ],
      },
      {
        h2: "Empat aturan dasar yang wajib dipahami",
        blocks: [
          {
            type: "ul",
            items: [
              "Modal investasi minimum Rp 10 miliar per KBLI 5 digit per lokasi (di luar tanah & bangunan) — berupa rencana investasi, bukan setoran tunai penuh.",
              "Kepemilikan asing mengikuti Daftar Positif Investasi: banyak sektor terbuka 100%, sektor tertentu dibatasi atau menuntut kemitraan.",
              "Laporan investasi berkala (LKI) wajib setiap kuartal melalui OSS — kewajiban yang sering terlewat dan berujung masalah perizinan.",
              "Tenaga asing (termasuk direksi) menuntut RPTKA dan KITAS sesuai jenisnya, dengan kompensasi DKP-TKA.",
            ],
          },
        ],
      },
      {
        h2: "Jalur pendirian yang benar",
        blocks: [
          {
            type: "p",
            text: "Alurnya: pemetaan KBLI & persentase kepemilikan → izin prinsip/deklarasi modal via OSS-BKPM → akta notaris dengan struktur direksi-komisaris yang benar → pengesahan Kemenkumham → NIB & perizinan operasional → KITAS direksi/karyawan. Totalnya 2–4 minggu untuk kasus standar, lebih lama untuk sektor terspesifik.",
          },
          {
            type: "p",
            text: "Dokumen dari luar negeri (akta korporasi asing, paspor, dll.) perlu apostille atau legalisasi kedutaan plus terjemahan tersumpah — kelalaian di tahap ini adalah penyebab penundaan paling umum. Tim kami menangani rantai dokumen luar negeri ini sekaligus dengan pendirian perusahaan, sehingga investor cukup berfokus pada rencana bisnisnya.",
          },
        ],
      },
      {
        h2: "Pertanyaan yang harus Anda tanyakan ke konsultan sebelum bayar",
        blocks: [
          {
            type: "ul",
            items: [
              "Berapa persen kepemilikan asing yang diperbolehkan untuk KBLI saya — dan di mana dasar hukumnya?",
              "Bagaimana struktur modal Rp 10 miliar itu direalisasikan dan dilaporkan ke BKPM?",
              "Siapa yang menangani LKI kuartalan saya setelah perusahaan berdiri?",
              "Berapa total biaya termasuk KITAS direksi — dan apa yang tidak termasuk?",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "cara-mendaftarkan-merek-dagang-djki",
    title: "Cara Mendaftarkan Merek Dagang ke DJKI (dan Kesalahan yang Membuatnya Gugur)",
    excerpt:
      "Merek yang sudah terkenal belum tentu sah secara hukum. Pelajari alur pendaftaran yang benar, pemilihan kelas Nice, dan cara menghindari keberatan.",
    date: "2025-10-16",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: ["cara mendaftarkan merek", "pendaftaran merek dagang", "djki merek"],
    sections: [
      {
        h2: "Kenapa 'sudah terkenal' tidak cukup",
        blocks: [
          {
            type: "p",
            text: "Di Indonesia, hak eksklusif merek lahir dari pendaftaran ke DJKI — bukan dari pemakaian. Kami menangani kasus di mana brand yang berjalan bertahun-tahun direbut pendaftar lebih dulu, dan memperjuangkannya memakan waktu berbulan-bulan dengan hasil tidak pasti. Jauh lebih murah mendaftar hari ini daripada menuntut tahun depan.",
          },
        ],
      },
      {
        h2: "Alur pendaftaran yang benar",
        blocks: [
          {
            type: "ul",
            items: [
              "Cek ketersediaan di database DJKI — identik dan mirip sama-sama berbahaya; hindari sejak awal.",
              "Tetapkan kelas Nice berdasarkan produk sekarang DAN rencana ekspansi (kelas yang bolong = perlindungan bolong).",
              "Siapkan label merek: teks dan/atau logo — format yang benar menentukan cakupan perlindungan.",
              "Ajukan melalui pendaftaran DJKI; tanggal penerimaan menjadi prioritas hak Anda.",
              "Pantau masa pengumuman — keberatan pihak ketiga harus direspons dengan argumen hukum.",
              "Terima sertifikat, catat tenggat perpanjangan 10 tahunan.",
            ],
          },
        ],
      },
      {
        h2: "Tiga kesalahan yang paling sering membuat pendaftaran bermasalah",
        blocks: [
          {
            type: "h3",
            text: "1. Kelas yang terlalu sempit",
          },
          {
            type: "p",
            text: "Mendaftar kelas kopi saja ketika rencana bisnis mencakup kafe, catering, dan produk kemasan — kemudian hari, ekspansi berarti merek Anda tidak terlindungi di kelas baru, dan pesaing bisa mendaftar lebih dulu di sana.",
          },
          {
            type: "h3",
            text: "2. Mengabaikan kemiripan",
          },
          {
            type: "p",
            text: "Bukan hanya merek identik yang ditolak — kemiripan secara keseluruhan (bunyi, bentuk, kesan) pada kelas yang sama juga menimbulkan keberatan. Pencarian pra-ajuan yang teliti adalah pekerjaan yang paling menghemat uang.",
          },
          {
            type: "h3",
            text: "3. Mendaftar atas nama pribadi padahal bisnisnya korporasi",
          },
          {
            type: "p",
            text: "Merek atas nama pribadi sah — namun bila brand adalah aset perusahaan, kepemilikan pribadi menciptakan kekacauan saat masuk investor, due diligence, atau warisan. Susun kepemilikan dengan benar sejak awal.",
          },
          {
            type: "p",
            text: "Pendaftaran merek DIGIMAN.ID mencakup pencarian ketersediaan, strategi kelas Nice, pengajuan, monitoring, hingga pembelaan bila ada keberatan — mulai Rp 1,5 juta.",
          },
        ],
      },
    ],
  },
  {
    slug: "panduan-nib-oss-rba-2026",
    title: "NIB & OSS-RBA: Panduan Lengkap Izin Usaha yang Wajib Dimiliki Setiap Bisnis",
    excerpt:
      "NIB bukan sekadar nomor — untuk KBLI risiko rendah, NIB Anda sudah berstatus izin usaha. Pahami cara mendapatkannya dan apa saja yang termasuk di dalamnya.",
    date: "2026-10-13",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: ["nib oss", "cara mendapatkan nib", "oss rba", "izin usaha nib"],
    sections: [
      {
        h2: "Apa itu NIB dan mengapa nomor ini begitu penting",
        blocks: [
          {
            type: "p",
            text: "Nomor Induk Berusaha (NIB) adalah identitas resmi pelaku usaha di sistem OSS-RBA — dan sejak UU Cipta Kerja, NIB untuk KBLI berisiko rendah sekaligus berfungsi sebagai izin usaha. Artinya, begitu NIB terbit, banyak bisnis sudah legal beroperasi tanpa perlu mengurus izin tambahan. Nomor 13 digit ini menjadi 'KTP bisnis' Anda: diminta bank saat membuka rekening korporasi, diminta marketplace saat verifikasi penjual, dan diminta instansi pemerintah untuk setiap urusan administrasi usaha.",
          },
          {
            type: "p",
            text: "Yang sering luput dipahami: NIB diterbitkan berdasarkan pemetaan KBLI yang Anda daftarkan. Salah memetakan KBLI berarti profil usaha Anda salah sejak hari pertama — dan koreksinya menuntut revisi data OSS, bahkan perubahan akta bila KBLI-nya belum tercantum. Karena itu urutan yang benar selalu: pemetaan KBLI dulu, registrasi NIB kemudian.",
          },
        ],
      },
      {
        h2: "Apa saja yang sudah termasuk saat NIB terbit",
        blocks: [
          {
            type: "ul",
            items: [
              "Identitas badan usaha di seluruh sistem pemerintah (OSS, pajak, ketenagakerjaan).",
              "Status izin usaha untuk seluruh KBLI berisiko rendah yang dipetakan.",
              "Dasar pengurusan sertifikat standar / izin untuk KBLI risiko menengah-tinggi.",
              "Syarat administratif akses pembiayaan: KUR, kredit bank, insentif fiskal.",
              "Syarat pendaftaran tender pemerintah dan verifikasi marketplace/e-commerce.",
            ],
          },
        ],
      },
      {
        h2: "NIB saja tidak cukup untuk semua jenis usaha",
        blocks: [
          {
            type: "table",
            headers: ["Tingkat Risiko KBLI", "Perizinan yang Diperlukan", "Contoh Bidang Usaha"],
            rows: [
              ["Rendah", "NIB (sudah berstatus izin usaha)", "Konsultan, jasa kreatif, trading umum"],
              ["Menengah", "NIB + Sertifikat Standar", "Restoran, gudang, konstruksi kecil"],
              ["Tinggi", "NIB + Izin khusus (verifikasi instansi)", "Kesehatan, logistik udara, farmasi"],
            ],
          },
          {
            type: "p",
            text: "Menentukan tingkat risiko bukan perkiraan sendiri — ia ditetapkan regulasi per KBLI. Kesalahan umum yang kami temui: pebisnis mendaftar KBLI berisiko menengah lalu menganggap usahanya sudah legal padahal Sertifikat Standarnya belum diurus. NIB adalah pintu masuknya; kelengkapan perizinan sektor menentukan apakah Anda benar-benar aman beroperasi.",
          },
          {
            type: "p",
            text: "Registrasi NIB gratis dan bisa dilakukan sendiri — yang dijual penyelenggara adalah kebenaran pemetaannya: KBLI mana yang Anda butuhkan sekarang dan nanti, risikonya apa, dan insentif apa yang bisa Anda dapatkan. Kalau Anda ingin dipastikan sekali jalan, layanan NIB, OSS-RBA & Pemetaan KBLI DIGIMAN.ID menangani semuanya mulai Rp 750 ribu.",
          },
        ],
      },
    ],
  },
  {
    slug: "cara-memilih-kode-kbli-yang-tepat",
    title: "Kode KBLI: Cara Memilih yang Tepat agar Tidak Mengubah Akta Dua Kali",
    excerpt:
      "KBLI yang keliru adalah kesalahan legalitas paling mahal: memaksa perubahan akta, menunda izin sektor, dan memicu masalah pajak. Ini cara memetanya dengan benar.",
    date: "2026-10-20",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: ["kode kbli", "cara memilih kbli", "kbli pendirian pt", "pemetaan kbli"],
    sections: [
      {
        h2: "Mengapa KBLI sering disepelekan — dan mahal akibatnya",
        blocks: [
          {
            type: "p",
            text: "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) adalah kode yang mendefinisikan bidang usaha Anda di seluruh sistem pemerintah — akta pendirian, NIB, perizinan sektor, hingga profil pajak. Masalahnya, saat mendirikan badan usaha, banyak pebisnis buru-buru memilih 2–3 kode yang 'kelihatannya cocok', lalu enam bulan kemudian menemukan bisnisnya tumbuh ke arah yang tidak tercakup. Hasilnya: perubahan akta (Rp 1–2 juta, plus waktu), revisi OSS, dan dalam banyak kasus izin sektor yang tertunda karena dasar KBLI-nya belum ada.",
          },
          {
            type: "p",
            text: "Lebih serius lagi untuk sisi pajak: beberapa KBLI membuka akses insentif (fasilitas tertentu, tarif khusus), sementara beberapa lainnya membawa kewajiban perizinan yang tidak Anda butuhkan. Pemetaan yang asal cukup bukan hanya boros — ia bisa menempatkan Anda di posisi hukum yang salah.",
          },
        ],
      },
      {
        h2: "Empat aturan memilih KBLI yang benar",
        blocks: [
          {
            type: "ul",
            items: [
              "Aturan 1 — Aktivitas utama dulu: KBLI pertama harus mencerminkan sumber pendapatan terbesar Anda hari ini, bukan harapan.",
              "Aturan 2 — Petakan rencana 12–24 bulan: produk/layanan yang hampir pasti Anda jalankan (ekspansi katalog, cabang baru, kanal baru) masukkan sejak awal.",
              "Aturan 3 — Cek risiko & insentif per kode: dua KBLI yang mirip secara aktivitas bisa berbeda tingkat risikonya (NIB saja vs perlu sertifikat standar) dan insentif fiskalnya.",
              "Aturan 4 — Jangan memborong kode: KBLI berisiko tinggi yang tidak Anda jalankan justru membawa kewajiban (laporan, izin sektor) tanpa nilai. Ambil yang realistis.",
            ],
          },
        ],
      },
      {
        h2: "Kesalahan pemetaan yang paling sering kami temui",
        blocks: [
          {
            type: "table",
            headers: ["Kesalahan", "Akibatnya", "Cara Benar"],
            rows: [
              ["Hanya 2–3 KBLI 'sesuai kebutuhan hari ini'", "Perubahan akta saat ekspansi (Rp 1–2 jt + waktu)", "Petakan aktivitas saat ini + rencana 24 bulan"],
              ["KBLI serba guna yang tidak relevan", "Kewajiban perizinan usang, profil usaha tidak jelas", "Pilih kode yang benar-benar dijalankan"],
              ["Lupa KBLI untuk kanal online", "Marketplace/iklan ditolak verifikasi", "Masukkan KBLI perdagangan jasa/e-commerce"],
              ["Asumsi risiko sendiri tanpa cek regulasi", "Usaha berjalan tanpa sertifikat standar", "Verifikasi tingkat risiko per KBLI di OSS"],
            ],
          },
        ],
      },
      {
        h2: "Berapa kode yang ideal?",
        blocks: [
          {
            type: "p",
            text: "Pengalaman kami mendampingi ribuan bisnis: kebanyakan usaha yang tumbuh sehat cukup dengan 8–15 KBLI yang terpilih berdasarkan aktivitas nyata dan rencana ekspansi — bukan 3 (terlalu sempit) dan bukan 50 (semrawut). Angka ini biasanya menutup seluruh arah pertumbuhan tanpa memicu kewajiban yang tidak perlu. Pemetaan ulang di kemudian hari hampir selalu lebih mahal daripada pemetaan benar di awal, karena setiap penambahan KBLI di luar akta menuntut akta perubahan, bukan sekadar revisi OSS.",
          },
          {
            type: "p",
            text: "Sesungguhnya ini pekerjaan 30 menit bila dilakukan oleh orang yang paham peta KBLI dan risikonya. Karena itu setiap paket pendirian DIGIMAN.ID selalu dibuka dengan sesi pemetaan KBLI — konsultasi dan analisisnya gratis, dan hasilnya menjadi dasar akta, NIB, hingga strategi pajak Anda. Kalau ragu dengan pemetaan yang pernah Anda buat, kirim KBLI Anda untuk kami tinjau — gratis, tanpa komitmen.",
          },
        ],
      },
    ],
  },
  {
    slug: "urutan-legalitas-usaha-dari-nib-sampai-sertifikasi",
    title: "Urutan Legalitas Usaha yang Benar: Dari NIB sampai Sertifikasi",
    excerpt:
      "Banyak pebisnis mengurusi legalitas secara acak lalu membayar dua kali. Ini peta urutan yang benar — langkah mana dulu, mana yang bisa menunggu.",
    date: "2025-10-18",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: ["legalitas usaha", "urutan perizinan usaha", "nib oss sertifikasi"],
    sections: [
      {
        h2: "Lapisan 1–3: fondasi (wajib sejak hari pertama)",
        blocks: [
          {
            type: "ul",
            items: [
              "Lapis 1 — Badan usaha: PT/CV/PT Perorangan sesuai fase bisnis Anda.",
              "Lapis 2 — NPWP & profil pajak: NPWP badan, keputusan PKP, konfigurasi coretax.",
              "Lapis 3 — NIB via OSS-RBA: izin dasar + pemetaan KBLI yang benar (dasar semua lapisan berikutnya).",
            ],
          },
          {
            type: "p",
            text: "Kesalahan di tiga lapisan ini mahal: KBLI yang keliru memaksa perubahan akta; PKP yang salah timing memicu masalah faktur; badan usaha yang salah bentuk memaksa konversi lengkap. Perbaiki di sini sebelum melangkah.",
          },
        ],
      },
      {
        h2: "Lapisan 4–5: operasional (menyusul sesuai aktivitas nyata)",
        blocks: [
          {
            type: "ul",
            items: [
              "Lapis 4 — Perizinan sektor: sertifikat standar atau izin khusus untuk KBLI risiko menengah-tinggi (pangan, kesehatan, logistik, dll.).",
              "Lapis 5 — Ketenagakerjaan: BPJS Kesehatan & Ketenagakerjaan begitu karyawan pertama masuk.",
            ],
          },
        ],
      },
      {
        h2: "Lapisan 6–7: pertumbuhan (investasi aset & pasar)",
        blocks: [
          {
            type: "ul",
            items: [
              "Lapis 6 — Aset intelektual: merek sebelum brand dikenal; hak cipta/paten untuk karya & inovasi.",
              "Lapis 7 — Sertifikasi pasar: Halal, BPOM, SNI, ISO — sesuai kanal penjualan & target pasar Anda.",
            ],
          },
          {
            type: "p",
            text: "Peta ini adalah versi ringkas dari metodologi 7 Lapis Langit yang kami gunakan mendampingi 2.500+ bisnis. Prinsip utamanya: urutan yang benar menghemat uang dua kali — sekali dari menghindari perbaikan, sekali dari izin yang benar-benar dipakai (tidak membeli izin yang tidak diperlukan).",
          },
          {
            type: "p",
            text: "Ingin memetakan posisi bisnis Anda di tujuh lapisan ini? Konsultasi gratis kami menghasilkan satu dokumen sederhana: apa yang sudah aman, apa yang mendesak, apa yang bisa menunggu — dengan estimasi biaya dan waktunya.",
          },
        ],
      },
    ],
  },
  {
    slug: "pph-final-umkm-05-persen",
    title: "PPh Final UMKM 0,5%: Aturan, Cara Hitung, dan Batas yang Wajib Anda Tahu",
    excerpt:
      "Tarif 0,5% atas omzet adalah relaksi pajak paling menguntungkan untuk UMKM — tetapi ada batas omzet, batas tahun, dan kewajiban lapor yang membuat banyak orang kehilangan haknya.",
    date: "2026-10-27",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: ["pph final umkm", "pajak umkm 05 persen", "pp 23 2018", "tarif 05 persen"],
    sections: [
      {
        h2: "Siapa yang berhak memakai tarif 0,5%",
        blocks: [
          {
            type: "p",
            text: "Dasar hukumnya PP 23/2018 sebagaimana diperbarui PP 55/2022: badan usaha dengan peredaran bruto di bawah Rp 4,8 miliar per tahun dapat memilih membayar PPh final 0,5% dari omzet kotor — bukan dari laba. Untuk pebisnis solo (PT Perorangan, usaha pribadi), relaksasi ini berlaku hingga 7 tahun; untuk badan berbentuk PT/CV umumnya 4 tahun pajak buku. Tarif ini jauh lebih ringan daripada tarif normal badan (22%) karena dihitung dari omzet dengan basis yang sudah sangat kecil.",
          },
          {
            type: "ul",
            items: [
              "Berlaku untuk orang pribadi pengusaha dan badan usaha (PT, CV, PT Perorangan).",
              "Syarat utama: peredaran bruto < Rp 4,8 miliar per tahun.",
              "Tidak berlaku bagi usaha yang memilih memakai tarif normal, badan yang dimiliki PKP tertentu, atau badan yang dikuasai badan besar/pemerintah.",
              "Bukti potong tidak diperlukan — pajak dihitung langsung dari omzet Anda sendiri.",
            ],
          },
        ],
      },
      {
        h2: "Cara menghitungnya (contoh nyata)",
        blocks: [
          {
            type: "p",
            text: "Perhitungannya sengaja dibuat sederhana agar UMKM benar-benar bisa melakukannya sendiri: PPh terutang = omzet bulan tersebut × 0,5%. Contoh: usaha Anda beromzet Rp 60 juta sebulan — PPh final = Rp 300 ribu. Bandingkan bila memakai tarif normal 22% dari laba: Anda bahkan harus menghitung pemisahan biaya, penyusutan, dan rekonsiliasi fiskal terlebih dahulu. Inilah alasan tarif 0,5% disebut relaksasi paling praktis untuk UMKM.",
          },
          {
            type: "table",
            headers: ["Omzet per Bulan", "PPh Final 0,5%", "Catatan"],
            rows: [
              ["Rp 25 juta", "Rp 125 ribu", "Wajib lapor meski omzet kecil"],
              ["Rp 60 juta", "Rp 300 ribu", "Contoh usaha F&B menengah"],
              ["Rp 150 juta", "Rp 750 ribu", "Masih jauh di bawah tarif normal"],
              ["Rp 400 juta", "Rp 2 juta", "Mendekati batas tahunan — mulai evaluasi strategi"],
            ],
          },
        ],
      },
      {
        h2: "Yang membuat orang kehilangan hak 0,5%",
        blocks: [
          {
            type: "ul",
            items: [
              "Omzet menembus Rp 4,8 miliar dalam satu tahun — mulai bulan berikutnya tarif normal berlaku.",
              "Membentuk badan usaha baru yang tidak memenuhi syarat penguasaan (dimiliki PKP/badan besar).",
              "Masa relaksasi habis (4 tahun badan / 7 tahun orang pribadi) tanpa persiapan struktur.",
              "Tidak lapor SPT Masa — hak memakai tarif selanjutnya bermasalah dan denda mengalir.",
            ],
          },
          {
            type: "p",
            text: "Soal denda: keterlambatan bayar/terutang dikenakan bunga per bulan, dan keterlambatan lapor SPT Masa PPh dikenakan denda Rp 100 ribu (orang pribadi) atau Rp 1 juta (badan) per laporan. Angka kecil di mata — tetapi menumpuk sepanjang tahun dan menurunkan profil kepatuhan Anda di mata bank dan marketplace. Solusi paling murah: satu kalender pajak sederhana, atau serahkan rutinitasnya ke pengelola yang tepat.",
          },
          {
            type: "p",
            text: "DIGIMAN.ID mengelola siklus pajak UMKM secara lengkap — perhitungan PPh final, pelaporan masa, hingga SPT tahunan — dengan konsultan bersertifikat. Anda cukup kirim ringkasan omzet tiap awal bulan; sisanya terlapor tepat waktu tanpa Anda buka aplikasi pajak sama sekali.",
          },
        ],
      },
    ],
  },
  {
    slug: "sertifikasi-halal-umkm-syarat-proses-biaya",
    title: "Sertifikasi Halal untuk UMKM: Syarat, Proses, dan Biaya (Jalur Gratis Termasuk)",
    excerpt:
      "Produk makanan-minuman tanpa sertifikat halal perlahan kehilangan pasar. Kabar baiknya ada jalur self-declare gratis — asal Anda tahu alur dan syaratnya.",
    date: "2026-11-03",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 9,
    keywords: ["sertifikasi halal umkm", "syarat sertifikasi halal", "biaya sertifikasi halal", "self declare halal"],
    sections: [
      {
        h2: "Sertifikasi halal kini kebutuhan pasar — dan kewajiban hukum",
        blocks: [
          {
            type: "p",
            text: "Sejak UU Jaminan Produk Halal berlaku penuh untuk makanan-minuman, produk yang beredar di Indonesia diwajibkan bersertifikat halal sesuai jadwal bertahap yang ditetapkan pemerintah. Di lapangan efeknya terasa lebih cepat dari regulasinya: marketplace menampilkan label halal sebagai filter pencarian, ritel besar menuntut dokumen halal untuk produk masuk rak, dan konsumen semakin memeriksa label sebelum membeli. Bagi UMKM, sertifikat halal kini sama strategisnya dengan merek — ia membuka kanal distribusi yang tanpa sertifikat tertutup.",
          },
        ],
      },
      {
        h2: "Dua jalur pengurusan — dan jalur gratisnya",
        blocks: [
          {
            type: "ul",
            items: [
              "Jalur Reguler (berbayar): diaudit auditor halal BPJPH — cocok untuk badan usaha dengan produk banyak / skala menengah ke atas.",
              "Jalur Self-Declare (GRATIS): khusus UMKM dengan kuota bantuan pemerintah, prosesnya disederhanakan dan diverifikasi lewat pendamping PPH (Penyuluh Halal) yang dibina BPJPH.",
              "Keduanya menghasilkan sertifikat halal resmi dengan masa berlaku 4 tahun dan dapat diperpanjang.",
            ],
          },
          {
            type: "p",
            text: "Kesalahan yang umum terjadi: UMKM langsung memakai jalur reguler dan membayar jutaan rupiah, padahal kualifikasinya memenuhi jalur self-declare yang kebetulan sedang buka kuota. Sebaliknya, ada juga yang menunggu kuota gratis sementara produknya sebenarnya butuh masuk pasar bulan ini. Peta dulu posisi Anda: jumlah produk, skala produksi, dan tenggat kanal penjualan target.",
          },
        ],
      },
      {
        h2: "Prosesnya langkah demi langkah",
        blocks: [
          {
            type: "ul",
            items: [
              "Langkah 1 — Buat akun di SIHALAL (sistem BPJPH) dan lengkapi data usaha.",
              "Langkah 2 — Inventarisasi seluruh bahan: dari bahan utama sampai pengawet, pewarna, dan pengolahan — masing-masing butuh dokumen kehalalan dari pemasok.",
              "Langkah 3 — Susun dokumen produk: komposisi, proses produksi, dan nama produk (cek juga: nama yang mengandung makna haram harus diganti).",
              "Langkah 4 — Audit / verifikasi proses: auditor atau PPH menilai proses produksi, kebersihan, dan kecocokan dokumen.",
              "Langkah 5 — Sidang fatwa & penetapan: produk yang lolos mendapat keterangan halal dari MUI/BPJPH.",
              "Langkah 6 — Sertifikat terbit di SIHALAL — terapkan label halal Indonesia pada kemasan.",
            ],
          },
        ],
      },
      {
        h2: "Berapa biaya dan berapa lama",
        blocks: [
          {
            type: "table",
            headers: ["Jalur", "Biaya Sertifikasi", "Estimasi Waktu"],
            rows: [
              ["Self-Declare (kuota UMKM)", "Rp 0 (didanai pemerintah)", "2–6 minggu (tergantung antrean kuota)"],
              ["Reguler — usaha mikro/kecil", "Sesuai tarif BPJPH per kelompok produk", "1–3 bulan"],
              ["Reguler — menengah ke atas", "Tarif BPJPH + pendampingan dokumen", "2–4 bulan"],
            ],
          },
          {
            type: "p",
            text: "Yang membuat proses tersendat biasanya bukan auditnya — melainkan dokumen bahan dari pemasok yang tidak bisa dikumpulkan lengkap. Karena itu mulailah dari inventarisasi bahan sekalipun Anda masih menunggu kuota. Tim DIGIMAN.ID menangani sertifikasi halal end-to-end: penilaian jalur tercepat untuk profil Anda, penyiapan dokumen, koordinasi PPH/auditor, hingga label — Anda cukup menyediakan daftar bahan dan akses produksi.",
          },
        ],
      },
    ],
  },
  {
    slug: "virtual-office-vs-kantor-fisik",
    title: "Virtual Office vs Kantor Fisik: Alamat Bisnis Legal yang Tidak Menguras Modal",
    excerpt:
      "Alamat usaha menentukan legalitas NIB Anda — tetapi bukan berarti Anda harus menyewa kantor mahal. Pahami kapan rumah cukup, kapan virtual office aman, dan kapan wajib fisik.",
    date: "2026-11-10",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: ["virtual office", "sewa virtual office", "alamat bisnis", "domisili usaha"],
    sections: [
      {
        h2: "Alamat usaha adalah kebutuhan legalitas, bukan gaya",
        blocks: [
          {
            type: "p",
            text: "Setiap badan usaha membutuhkan alamat untuk terbitnya NIB — dan alamat ini menjadi dasar perizinan lanjutan, surat-menyurat resmi, hingga lokasi audit bila pernah diperlukan. Kabar baiknya: untuk sebagian besar KBLI jasa dan perdagangan, alamat rumah sah digunakan tanpa biaya apa pun. Jadi pertanyaan sebenarnya bukan 'harus kantor atau tidak', melainkan 'alamat apa yang paling efisien untuk profil usaha saya'.",
          },
        ],
      },
      {
        h2: "Tiga pilihan alamat — dan batasannya",
        blocks: [
          {
            type: "table",
            headers: ["Aspek", "Rumah Sendiri", "Virtual Office", "Kantor Fisik"],
            rows: [
              ["Biaya", "Rp 0", "Sewa bulanan ringan", "Sewa + operasional besar"],
              ["Citra bisnis", "Netral", "Alamat premium/gedung", "Paling meyakinkan"],
              ["KBLI jasa & dagang umum", "Umumnya sah", "Sah (periksa izin bangunan VO)", "Sah"],
              ["KBLI yang butuh tempat nyata", "Bergantung komposisi bangunan", "Tidak cukup", "Cocok"],
              ["Korespondensi & audiensi", "Di alamat rumah", "Layanan resepsionis VO", "Penuh"],
            ],
          },
          {
            type: "p",
            text: "Virtual office cocok untuk konsultan, agensi, perdagangan online, dan startup yang butuh alamat kredibel tanpa biaya kantor. Tetapi perhatikan batas tegasnya: KBLI atau izin sektor yang menuntut keberadaan tempat usaha nyata (misal produksi pangan, klinik, gudang) tidak bisa memakai VO — sertifikat standarnya akan gugur saat verifikasi lapangan.",
          },
        ],
      },
      {
        h2: "Kesalahan paling mahal saat memakai virtual office",
        blocks: [
          {
            type: "p",
            text: "Satu hal yang kami temui berulang kali: penyedia VO yang bangunannya tidak berperuntukan kantor (izin bangunannya masih hunian atau belum ber-PBG memadai). NIB mungkin terbit — tetapi saat Anda mengurus sertifikat standar atau menghadapi verifikasi, perizinan bangunan yang tidak sesuai menjadi buntut yang menyulitkan. Pastikan tiga hal sebelum menyewa: perizinan bangunan VO sesuai peruntukan, kontrak sewa atas nama perusahaan Anda (bukan perantara), dan penyedia siap memberikan dokumen pendukung saat diminta instansi.",
          },
          {
            type: "p",
            text: "DIGIMAN.ID menyediakan opsi domisili usaha yang terjamin perizinannya sebagai bagian dari paket pendirian — Anda dapat alamat bisnis yang aman untuk NIB dan perizinan lanjutan, sekaligus konsultasi KBLI mana yang wajib memakai tempat nyata. Konsultasi awalnya gratis; kami akan jujur bila rumah Anda justru pilihan paling efisien.",
          },
        ],
      },
    ],
  },
  {
    slug: "kewajiban-awal-setelah-pt-berdiri",
    title: "Baru Saja Punya PT? 7 Kewajiban Bulan Pertama yang Sering Terlewat",
    excerpt:
      "PT resmi berdiri adalah awal, bukan garis finis. Tujuh kewajiban bulan pertama ini menentukan apakah perusahaan Anda mulai dengan rapi — atau menumpuk denda diam-diam.",
    date: "2026-11-17",
    author: "Dewan Pakar DIGIMAN.ID",
    readMinutes: 8,
    keywords: ["kewajiban setelah pendirian pt", "pt baru berdiri", "coretax perusahaan baru", "rekening korporasi"],
    sections: [
      {
        h2: "Tujuh yang harus selesai di bulan pertama",
        blocks: [
          {
            type: "ul",
            items: [
              "1 — Konfigurasi profil pajak: aktifkan akses perusahaan di sistem perpajakan (coretax), verifikasi data NPWP badan, dan tetapkan status PKP atau pengundaannya.",
              "2 — Rekening bank korporasi: diminta atas nama PT dengan akta & NIB — dipisahkan dari rekening pribadi sejak transaksi pertama.",
              "3 — Laporan OSS: periksa dan finalisasi data usaha di OSS-RBA (KBLI, modal, keterangan) — kesalahan data paling mudah dikoreksi di awal.",
              "4 — Sertifikat standar / izin sektor: bila KBLI Anda berisiko menengah, urus sebelum operasional — bukan sesudah diingatkan.",
              "5 — BPJS saat karyawan pertama masuk: pendaftaran wajib begitu ada hubungan kerja; hitung biayanya ke struktur gaji sejak awal.",
              "6 — Arsip dokumen legal: akta asli, SK, NIB, NPWP, kontrak kerja, sewa kantor — satu folder yang semua pendiri tahu lokasinya.",
              "7 — Kalender kepatuhan: tenggat SPT masa, laporan OSS tahunan, SPT tahunan badan — walau perusahaan belum beromzet, laporannya tetap jalan.",
            ],
          },
        ],
      },
      {
        h2: "Konsekuensi bila diabaikan",
        blocks: [
          {
            type: "p",
            text: "Kewajiban yang terlewat tidak langsung terasa — dan justru itu bahayanya. Status PKP yang tidak ditetapkan membingungkan faktur pajak saat klien enterprise menagih; laporan OSS yang bolong menyulitkan perpanjangan izin; SPT yang tidak dilaporkan menghasilkan denda dan status 'pra-audit'. Ketika perusahaan mulai menghadapi investor atau pinjaman bank, due diligence akan membuka semua catatan ini — dan kekacauan administrasi yang sebenarnya murah diperbaiki di awal bisa menunda pendanaan berbulan-bulan.",
          },
        ],
      },
      {
        h2: "Cara paling ringan menanganinya",
        blocks: [
          {
            type: "p",
            text: "Pola yang kami rekomendasikan: kumpulkan seluruh kewajiban bulan pertama menjadi satu sesi administrasi tunggal (2–3 jam) yang dipandu orang yang paham urutannya — bukan tersebar berminggu-minggu sambil menebak. Setiap paket pendirian DIGIMAN.ID sudah termasuk sesi orientasi kewajiban ini: kami konfigurasikan profil pajak perusahaan Anda, siapkan daftar periksa yang disesuaikan KBLI Anda, dan mengingatkan tenggat-tenggatnya. Anda cukup fokus pada hal yang membuat perusahaan berdiri: menjual.",
          },
        ],
      },
    ],
  },
  ...BLOG_POSTS_2026,
  ...BLOG_POSTS_PILLAR_A,
  ...BLOG_POSTS_PILLAR_B,
  ...BLOG_POSTS_PILLAR_C,
];

/** Mekanisme "artikel baru tiap minggu": artikel bertanggal masa depan otomatis
 * tayang saat tanggalnya tiba — tanpa deploy, tanpa campur tangan manual.
 * Tanggal tanpa jam (YYYY-MM-DD) dibaca sebagai tengah malam WIB (UTC+7),
 * sehingga artikel "terbit hari ini" tayang untuk pembaca Indonesia hari itu. */
export function isPostLive(post: Pick<BlogPost, "date">, now: Date = new Date()): boolean {
  const t =
    /^\d{4}-\d{2}-\d{2}$/.test(post.date)
      ? Date.parse(`${post.date}T00:00:00+07:00`)
      : Date.parse(post.date);
  return t <= now.getTime();
}

/** Artikel yang boleh tayang (sudah lewat tanggal terbit), urut terbaru. */
export function getVisiblePosts(now: Date = new Date()): BlogPost[] {
  return BLOG_POSTS.filter((p) => isPostLive(p, now)).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
