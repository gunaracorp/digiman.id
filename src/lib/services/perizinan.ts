import type { ServiceContent } from "./types";

/** KATEGORI: PERIZINAN & LEGALITAS (4 layanan) */
export const perizinanContent: ServiceContent[] = [
  {
    slug: "nib-oss",
    tagline: "NIB Anda adalah kunci pintu seluruh perizinan usaha Indonesia.",
    heroSub:
      "Registrasi NIB & OSS-RBA dengan pemetaan KBLI presisi — izin dasar usaha terbit cepat, siap dikembangkan ke izin sektor.",
    timeline: "1–3 hari kerja",
    intro: [
      "Nomor Induk Berusaha (NIB) adalah identitas tunggal setiap pelaku usaha di Indonesia — sekaligus menjadi dokumen izin dasar, dokumen kepastian registrasi, dan terhitung sebagai izin usaha untuk kegiatan berisiko rendah. Tanpa NIB, usaha Anda tidak dapat mengakses izin sektor, fasilitas pajak, kemudahan ekspor-impor, bahkan banyak rekening bank korporasi.",
      "Sistem OSS-RBA (Risk-Based Approach) menghitung perizinan berdasarkan tingkat risiko KBLI: rendah cukup NIB, menengah-rendah menunggu sertifikat standar (SS), menengah-tinggi dan tinggi menuntut izin khusus. Kesalahan memetakan KBLI — terlalu sempit membatasi operasional, terlalu luas menimbulkan kewajiban izin yang tak pernah dipakai — adalah kesalahan paling mahal yang kami perbaiki dari klien lain.",
      "Tim kami memetakan KBLI berdasarkan aktivitas usaha nyata Anda (bukan tebak-tebakan), merancang roadmap perizinan 1–3 tahun ke depan, lalu mengeksekusi registrasi OSS hingga NIB terbit. Anda mendapat dokumen lengkap plus penjelasan polos: apa yang sudah aman, apa yang menyusul seiring pertumbuhan usaha.",
    ],
    benefits: [
      { title: "KBLI presisi & strategis", desc: "Pemetaan berbasis aktivitas nyata + rencana ekspansi — bukan copy-paste dari usaha lain." },
      { title: "NIB terhitung izin usaha", desc: "Untuk KBLI risiko rendah, NIB otomatis menjadi izin usaha sah tanpa tahap tambahan." },
      { title: "Roadmap perizinan", desc: "Anda tahu persis izin apa yang menyusul saat usaha tumbuh — tidak ada kejutan di tengah jalan." },
      { title: "Akses fasilitas penuh", desc: "NIB membuka akses kemudahan ekspor-impor, insentif, dan kepercayaan bank & mitra." },
      { title: "Koreksi & penyesuaian", desc: "Data OSS keliru dari pendaftaran mandiri? Kami perbaiki hingga bersih dan konsisten." },
    ],
    process: [
      { title: "Analisis aktivitas usaha", desc: "Wawancara singkat untuk memahami seluruh aktivitas bisnis — termasuk yang direncanakan 1–3 tahun ke depan." },
      { title: "Pemetaan KBLI optimal", desc: "Tim menyusun daftar KBLI seimbang: cukup luas untuk ekspansi, tidak membongkar beban izin tak perlu." },
      { title: "Registrasi OSS-RBA", desc: "Pembuatan akun, verifikasi data, dan pengajuan NIB di sistem OSS dengan seluruh data yang benar." },
      { title: "Penyerahan & roadmap", desc: "NIB + dokumen terkait diserahkan, disertai roadmap perizinan lanjutan dan briefing kewajiban." },
    ],
    requirements: [
      "NIB yang sudah ada (bila koreksi) atau data badan usaha (bila baru)",
      "KTP & NPWP pemilik/direktur",
      "Deskripsi aktivitas usaha saat ini & rencana",
      "Email aktif & nomor HP",
      "Alamat usaha",
    ],
    faqs: [
      { q: "Apakah NIB sama dengan izin usaha?", a: "Untuk KBLI dengan tingkat risiko rendah, ya — NIB berfungsi penuh sebagai izin usaha. Untuk risiko menengah-rendah, Anda memerlukan sertifikat standar (SS) yang terbit otomatis setelah pernyataan mandiri; risiko menengah-tinggi dan tinggi menuntut izin khusus dengan proses verifikasi. Kami memetakan posisi KBLI Anda di spekuum ini sejak awal." },
      { q: "Bisakah saya menambah KBLI nanti setelah NIB terbit?", a: "Bisa. Perubahan KBLI dilakukan melalui penyesuaian data OSS — kami melayani penambahan KBLI kapan pun usaha Anda berkembang. Catatan: penambahan KBLI tertentu memicu kewajiban izin sektor baru, jadi selalu konsultasikan dulu agar tidak ada kewajiban yang terlewat." },
      { q: "Saya sudah daftar OSS sendiri tapi datanya berantakan. Bisa diperbaiki?", a: "Bisa — ini salah satu kasus paling sering kami tangani. Data yang tidak konsisten (KBLI salah, alamat beda, modal tidak logis) dapat menghambat izin sektor dan kredit bank. Kami audit, perbaiki, dan rapikan seluruh data OSS hingga konsisten dengan dokumen legal Anda." },
    ],
    related: ["izin-sektor-ss", "pendirian-pt", "domisili-vo"],
  },
  {
    slug: "izin-sektor-ss",
    tagline: "Izin sektor & sertifikat standar — usaha Anda lolos verifikasi tanpa drama.",
    heroSub:
      "Pengurusan izin khusus sektor & Sertifikat Standar (SS) untuk KBLI risiko menengah-tinggi: kesehatan, makanan, logistik, hingga konstruksi.",
    timeline: "5–20 hari kerja (tergantung sektor)",
    intro: [
      "Banyak bidang usaha menuntut izin sektor di atas NIB: klinik dan apotek menjawab ke Dinkes, jasa logistik menjawab Kemenhub, restoran dan produksi pangan menuntut Sertifikat Standar Pangan, konstruksi menuntut SBU/sertifikasi, dan banyak lagi. Sistem OSS-RBA memetakan semuanya — namun proses verifikasi di tingkat instansi teknis tetap menuntut dokumen, sarana, dan naskah yang benar.",
      "Pengalaman kami menunjukkan 80% penolakan izin sektor terjadi karena tiga alasan: dokumen persyaratan tidak lengkap, kelayakan sarana (denah, alat, SDM) tidak sesuai standar, dan pemilik usaha tidak memahami alur verifikasi lapangan. Kami menghilangkan ketiga sebab itu: audit kesiapan di awal, penyusunan dokumen menyeluruh, dan pendampingan hingga izin terbit.",
      "Anda mendapat satu penanggung jawab akun yang memahami sektor Anda — bukan call center yang membaca naskah. Semua progres terpantau, semua pertanyaan instansi kami jawab bersama Anda.",
    ],
    benefits: [
      { title: "Audit kesiapan di awal", desc: "Kami cek sarana, dokumen, dan SDM Anda sebelum mengajukan — menghindari penolakan yang mahal." },
      { title: "Spesialis per sektor", desc: "Konsultan yang benar-benar paham alur instansi teknis Anda: kesehatan, pangan, logistik, konstruksi, dan lainnya." },
      { title: "Dokumen menyeluruh", desc: "Naskah, denah, SOP, dan persyaratan teknis kami susun sampai siap lolos verifikasi." },
      { title: "Pendampingan lapangan", desc: "Saat instansi memeriksa lokasi, tim kami siap mendampingi dan menyiapkan Anda." },
      { title: "Terintegrasi OSS", desc: "Setelah izin terbit, status di OSS kami sinkronkan agar profil perizinan perusahaan bersih." },
    ],
    process: [
      { title: "Identifikasi KBLI & risiko", desc: "Kami petakan seluruh KBLI Anda ke jenis perizinan sektor yang dituntut sistem." },
      { title: "Audit kesiapan", desc: "Pengecekan dokumen, sarana, dan SDM terhadap standar instansi — laporan hasil plus rencana perbaikan." },
      { title: "Penyusunan & pengajuan", desc: "Seluruh dokumen teknis disusun, diunggah ke OSS/instansi, dan diajukan resmi." },
      { title: "Verifikasi & klarifikasi", desc: "Kami pantau proses, menjawab permintaan perbaikan instansi, dan mengatur pemeriksaan lapangan bila perlu." },
      { title: "Izin terbit & sinkronisasi", desc: "Izin/SS terbit, kami unduh, arsipkan, dan sinkronkan ke profil OSS perusahaan Anda." },
    ],
    requirements: [
      "NIB & dokumen badan usaha",
      "Detail lokasi usaha (denah, status sewa/milik, foto)",
      "Data SDM teknis (ijazah/sertifikat bila dituntut sektor)",
      "Daftar peralatan & sarana produksi (bila berlaku)",
      "Deskripsi produk/jasa yang direncanakan",
    ],
    faqs: [
      { q: "Apa itu Sertifikat Standar (SS)?", a: "SS adalah perizinan untuk KBLI risiko menengah-rendah yang terbit otomatis setelah Anda menandatangani pernyataan mandiri bahwa memenuhi standar. Meski terbit otomatis, kewajiban pemenuhan standarnya nyata — pemerintah dapat mengaudit kapan pun. Kami memastikan Anda benar-benar siap memenuhi standar yang Anda nyatakan." },
      { q: "Kenapa izin sektor saya lama sekali saat mengurus sendiri?", a: "Umumnya karena dua hal: dokumen yang diajukan tidak sesuai format yang diminta instansi (mundur-maju revisi), dan pemeriksaan lapangan gagal karena kesiapan sarana. Tim kami menyelesaikan kedua sebab ini sejak hari pertama — tarif kami jauh lebih murah dibanding biaya bulan-bulan operasional tertunda." },
      { q: "Bisakah usaha beroperasi saat izin sektor masih diproses?", a: "Tergantung sektor — beberapa mengizinkan operasi terbatas dengan SS yang sudah terbit, sektor sensitif (kesehatan, logistik berbahaya) melarang operasi sebelum izin penuh. Jangan berjudi dengan sanksi penutupan; konsultasikan status spesifik KBLI Anda pada tim kami — gratis." },
    ],
    related: ["nib-oss", "sertifikasi-halal", "bpom"],
  },
  {
    slug: "domisili-vo",
    tagline: "Alamat bergengsi tanpa harga sewa kantor — kehadiran usaha naik kelas.",
    heroSub:
      "Pengurusan surat keterangan domisili usaha dan sewa virtual office di alamat premium, termasuk kesiapan untuk PT PMA.",
    timeline: "1–3 hari kerja",
    intro: [
      "Alamat usaha bukan sekadar teks di akta — ia menentukan kantor yang melayani perizinan Anda, citra perusahaan di mata klien, dan bahkan kelancaran kunjungan pemeriksa. Untuk founder yang bekerja dari rumah atau bisnis digital tanpa lokasi fisik, virtual office (VO) memberikan solusi: alamat kantor nyata di gedung premium, layanan penerimaan surat, ruang meeting sewa waktu, tanpa biaya sewa kantor penuh.",
      "Pengurusan domisili punya nuansa teknis: beberapa kantor pemerintah menuntut format surat keterangan tertentu, perumahan ber-GPS harus diubah statusnya untuk usaha tertentu, dan PT PMA membutuhkan alamat yang lolos verifikasi BKPM. Kami mengurus semuanya — dari surat domisili RT/RW hingga kontrak VO yang diakui sistem OSS.",
      "Digiman menyediakan opsi alamat di Tasikmalaya, Bandung, dan Jakarta (termasuk area SCBD) melalui mitra gedung resmi. Semua kontrak sah, bisa dipakai untuk akta, OSS, dan pembukaan rekening bank — dengan dukungan penuh bila pemeriksa datang mengecek.",
    ],
    benefits: [
      { title: "Alamat premium & sah", desc: "Gedung resmi yang diakui untuk akta, OSS, dan bank — bukan alamat fiktif yang berisiko." },
      { title: "Hemat biaya operasional", desc: "Dapatkan citra kantor kelas atas dengan biaya sebagian kecil dari sewa kantor fisik." },
      { title: "Layanan penerimaan surat", desc: "Surat resmi & paket kami terima, notifikasikan, dan teruskan ke Anda — bisnis tetap responsif." },
      { title: "Ruang meeting sewa waktu", desc: "Bila perlu tatap muka klien atau verifikasi, ruang pertemuan profesional tersedia per jam." },
      { title: "Siap untuk verifikasi", desc: "Kontrak & dukungan administratif tersiapkan agar kunjungan pemeriksa selalu mulus." },
    ],
    process: [
      { title: "Pilih alamat & paket", desc: "Kami tampilkan opsi alamat (Tasikmalaya, Bandung, Jakarta) dengan tarif dan fasilitasnya." },
      { title: "Kontrak & dokumen", desc: "Perjanjian sewa VO/keterangan domisili disusun resmi sesuai format yang diakui pemerintah." },
      { title: "Integrasi ke legalitas", desc: "Alamat kami integrasikan ke akta/OSS Anda — termasuk koreksi bila sebelumnya keliru." },
      { title: "Aktivasi layanan", desc: "Penerusan surat, akses ruang meeting, dan dukungan verifikasi mulai berjalan." },
    ],
    requirements: [
      "KTP & NPWP pemilik/direktur",
      "Dokumen badan usaha (bila sudah berdiri)",
      "Pilihan kota alamat yang diinginkan",
      "Nomor HP aktif untuk notifikasi surat",
    ],
    faqs: [
      { q: "Apakah virtual office sah untuk akta dan OSS?", a: "Sah, selama kontrak sewa VO diterbitkan oleh pihak yang berhak atas gedung dan formatnya memenuhi ketentuan notaris/OSS. Mitra gedung kami menyediakan dokumen standar yang diakui notaris, Kemenkumham, dan sistem OSS — termasuk untuk PT PMA yang butuh verifikasi lokasi." },
      { q: "Bisakah alamat rumah saya dipakai untuk PT?", a: "Bisa untuk banyak bidang usaha — dengan surat keterangan domisili dari RT/RW/Kelurahan dan persetujuan pemilik rumah. Namun beberapa izin sektor dan citra korporat menuntut alamat kantor komersial. Kami menilai kebutuhan Anda dan merekomendasikan jalur paling efisien." },
      { q: "Apa yang terjadi jika ada pemeriksa datang ke alamat VO?", a: "Gedung VO resmi memiliki resepsionis dan administrasi yang menjawab verifikasi: mengonfirmasi perusahaan Anda terdaftar di sana sesuai kontrak. Kami juga menyiapkan Anda dengan daftar jawaban administratif yang benar sehingga verifikasi selalu beres satu kali." },
    ],
    related: ["nib-oss", "pendirian-pt", "pt-pma"],
  },
  {
    slug: "legalisasi-apostille",
    tagline: "Dokumen Anda diakui dunia — apostille, legalisasi, dan terjemahan tersertifikasi.",
    heroSub:
      "Legalisisi dokumen Indonesia untuk kepentingan luar negeri: apostille, tanda tangan basah, dan terjemahan tersumpah untuk semua keperluan.",
    timeline: "2–10 hari kerja (tergantung negara tujuan)",
    intro: [
      "Dokumen Indonesia — akta pendirian, ijazah, akta lahir/nikah, surat kuasa, hingga dokumen perusahaan — tidak otomatis sah di negara lain. Ada dua jalur pengakuan: Konvensi Apostille (untuk 120+ negara anggota konvensi Haag — Indonesia resmi bergabung sejak 2022) dan rantai legalisasi klasik (Kemenlu → kedutaan negara tujuan) untuk negara non-anggota.",
      "Prosesnya menuntut ketelitian rangkaian: dokumen harus ditandatangani pejabat yang benar, diterjemahkan oleh penerjemah tersumpah bila negara tujuan berbahasa lain, diverifikasi Kemenkumham/Kemenlu, lalu diapostille atau dilegalisasi kedutaan. Satu mata rantai lewat — dokumen ditolak dan seluruh rangkaian diulang. Bagi yang sedang kejar tenggat visa, studi, atau kontrak internasional, itu harga yang mahal.",
      "Tim dokumen luar negeri kami menangani seluruh mata rantai secara end-to-end: dari persiapan dokumen asli, terjemahan tersumpah bersertifikat, sampai apostille/legalisasi terbit dan dokumen kembali ke tangan Anda — lengkap dengan pelacakan status untuk setiap tahap.",
    ],
    benefits: [
      { title: "Satu pintu semua rangkaian", desc: "Terjemahan tersumpah, verifikasi instansi, apostille, hingga legalisasi kedutaan — tanpa Anda antre." },
      { title: "Penerjemah tersumpah resmi", desc: "Terjemahan bersertifikat yang diterima kedutaan dan instansi luar negeri tanpa pertanyaan." },
      { title: "Ahli jalur per negara", desc: "Tim kami tahu persis persyaratan spesifik tiap negara — mencegah penolakan akibat format yang keliru." },
      { title: "Pemantauan transparan", desc: "Setiap tahap terlaporkan — Anda selalu tahu dokumen sedang di mana dan kapan selesai." },
      { title: "Layanan kurir aman", desc: "Dokumen asli berpindah tangan lewat kurir terjamin, baik saat proses maupun penyerahan akhir." },
    ],
    process: [
      { title: "Analisis negara tujuan", desc: "Kami tentukan jalur tepat: apostille atau legalisasi kedutaan, plus kebutuhan terjemahan." },
      { title: "Persiapan dokumen", desc: "Dokumen asli kami periksa kelengkapannya; bila perlu, dibuat salinan bertanda tangan pejabat yang benar." },
      { title: "Terjemahan tersumpah", desc: "Penerjemah tersumpah menerjemahkan dengan sertifikat resmi yang diakui kedutaan." },
      { title: "Apostille / legalisasi", desc: "Pengajuan apostille Kemenkumham atau rantai legalisasi Kemenlu-kedutaan sesuai jalur." },
      { title: "Penyerahan akhir", desc: "Dokumen lengkap dikirim ke alamat Anda (lokal maupun internasional) dengan pelacakan." },
    ],
    requirements: [
      "Dokumen asli yang akan dilegalisasi/apostille",
      "KTP/paspor pemilik dokumen",
      "Nama negara tujuan & tujuan penggunaan dokumen",
      "Batas waktu (deadline) Anda — kami susun jadwal realistis",
    ],
    faqs: [
      { q: "Apa perbedaan apostille dan legalisasi?", a: "Apostille adalah sertifikat tunggal yang mengakui dokumen di seluruh negara anggota Konvensi Haag — satu langkah. Legalisasi klasik adalah rantai tanda tangan bertingkat (instansi → Kemenlu → kedutaan negara tujuan) untuk negara non-anggota, misalnya beberapa negara Timur Tengah dan Asia. Kami menentukan jalur yang benar berdasarkan negara tujuan Anda." },
      { q: "Dokumen mana saja yang biasa diproses?", a: "Paling sering: akta pendirian & SK perusahaan, dokumen PMA/investasi, ijazah & transkrip, akta lahir/nikah, surat izin kerja, surat kuasa, dan dokumen pajak. Hampir semua dokumen resmi Indonesia dapat diproses — kirimkan daftarnya, kami nilai jalurnya." },
      { q: "Bisakah dokumen untuk keperluan visa kerja/PMA dipercepat?", a: "Untuk tenggat mendesak, kami menjadwalkan proses berurutan sepadat mungkin dan memakai layanan prioritas yang tersedia. Kami selalu memberi estimasi realistis di awal — bukan janji yang gagal di tengah jalan, karena satu hari keterlambatan bagi Anda berarti biaya." },
    ],
    related: ["pt-pma", "kitas-rptka", "nib-oss"],
  },
];
