import type { ServiceContent } from "./types";

/** KATEGORI: PERPAJAKAN (2 layanan) */
export const pajakContent: ServiceContent[] = [
  {
    slug: "npwp-pkp",
    tagline: "NPWP badan & pengukuhan PKP — fondasi fiskal perusahaan yang bersih.",
    heroSub:
      "Registrasi NPWP badan, pengukuhan Pengusaha Kena Pajak (PKP), dan konfigurasi coretax — pajak perusahaan dimulai dengan benar.",
    timeline: "1–5 hari kerja",
    intro: [
      "NPWP badan lahir bersama SK pengesahan PT — namun fondasi fiskal perusahaan belum selesai di situ. Pengukuhan PKP (Pengusaha Kena Pajak) menentukan kapan perusahaan Anda mulai mengenakan dan memungut PPN, hak kredit pajak masukan dimulai, dan kewajiban faktur pajak elektronik aktif. Kesalahan timing pengukuhan PKP adalah salah satu kesalahan mahal di tahun pertama perusahaan.",
      "Sejak pindah ke sistem coretax, mekanisme registrasi dan pelaporan berganti wajah — banyak pemilik usaha kebingungan konfigurasi profil, pemilihan skema pelaporan, dan sinkronisasi NIK-NPWP. Tim pajak kami bekerja di sistem ini setiap hari, sehingga Anda tidak membayar 'biaya belajar' dengan waktu dan penalti.",
      "Layanan ini mencakup: verifikasi NPWP badan terbentuk dengan benar, pengajuan pengukuhan PKP (atau penundaan bila lebih menguntungkan), aktivitas e-faktur, dan sesi edukasi singkat tentang kewajiban rutin Anda — sehingga tim keuangan Anda jalan sendiri setelahnya.",
    ],
    benefits: [
      { title: "Timing PKP yang tepat", desc: "Kami hitung apakah pengukuhan PKP sekarang menguntungkan atau menunda lebih bijak — keputusan berbasis angka." },
      { title: "Hak pajak masukan terbuka", desc: "Begitu PKP, faktur masukan dari supplier dapat dikreditkan — beban pajak efisien sejak awal." },
      { title: "Konfigurasi coretax rapi", desc: "Profil, sertifikat digital, dan skema pelaporan disetel benar — hindari penalti karena salah konfigurasi." },
      { title: "E-faktur siap pakai", desc: "Aplikasi e-faktur terpasang dan tim Anda dilatih pemakaian dasarnya." },
      { title: "Fondasi kredit & tender", desc: "NPWP & PKP yang bersih adalah syarat rekening koran, kredit bank, dan dokumen tender." },
    ],
    process: [
      { title: "Verifikasi status fiskal", desc: "Kami cek NPWP badan, profil coretax, dan status PKP Anda saat ini." },
      { title: "Analisis pengukuhan PKP", desc: "Proyeksi omzet & supplier menentukan: pengukuhan sekarang, menunda, atau memakai fasilitas tertentu." },
      { title: "Pengajuan & konfigurasi", desc: "Pengajuan ke kantor pajak, aktivasi e-faktur, dan penyetelan profil pelaporan." },
      { title: "Edukasi tim keuangan", desc: "Sesi singkat bagi tim Anda: kewajiban rutin, jadwal pelaporan, dan kesalahan yang harus dihindari." },
    ],
    requirements: [
      "Dokumen badan usaha (SK, akta, NIB)",
      "NPWP direksi & surat kuasa (bila diwakilkan)",
      "Estimasi omzet & daftar supplier utama",
      "Alamat tempat kegiatan usaha",
      "Email & nomor HP penanggung jawab pajak",
    ],
    faqs: [
      { q: "Kapan perusahaan wajib jadi PKP?", a: "Wajib ketika peredaran barang kena pajak melewati Rp 4,8 miliar dalam satu tahun. Namun Anda boleh memilih mengukuhan lebih awal — keuntungannya bila supplier utama Anda PKP (pajak masukan bisa dikreditkan) dan klien Anda korporasi yang menuntut faktur pajak. Kami hitung skenario Anda dan rekomendasikan yang paling efisien." },
      { q: "Apa risiko tidak lapor pajak sama sekali di tahun pertama?", a: "Nol laporan tetap berarti SPT nol wajib diajukan — tidak lapor memicu denda administrasi, profil pajak tidak rapi (menyulitkan kredit/tender), dan dalam kasus ekstrem pemeriksaan yang menyita waktu. Kebiasaan benar sejak bulan pertama jauh lebih murah daripada memperbaiki profil yang rusak." },
      { q: "Bisakah Digiman menangani pelaporan pajak bulanan kami juga?", a: "Bisa — layanan pelaporan bulanan (PPN, PPh 21, PPh 25) dan tahunan tersedia dengan langganan yang transparan. Konsultan bersertifikat kami yang menangani, sehingga risiko salah lapor berada di tangan ahlinya, bukan di tim Anda yang sedang sibuk jualan." },
    ],
    related: ["pelaporan-pajak", "pendirian-pt", "nib-oss"],
  },
  {
    slug: "pelaporan-pajak",
    tagline: "Pajak rapi setiap bulan — konsultan bersertifikat, tenggat tak pernah terlewat.",
    heroSub:
      "Langganan pelaporan SPT bulanan & tahunan, e-faktur, dan PPh karyawan — kepajakan yang tenang untuk pemilik usaha.",
    timeline: "Bulanan (SPT paling lambat sesuai jadwal DJP)",
    intro: [
      "Kepatuhan pajak bukan momen tahunan — ia irama bulanan: PPN dan PPh 21 paling lambat akhir bulan berikutnya, PPh 25 mencicil setiap bulan, e-faktur menyusul setiap transaksi, dan SPT tahunan menutup siklusnya. Satu bulan terlewat menciptakan denda, dan yang lebih mahal: profil pajak yang kotor ketika Anda paling membutuhkannya — saat mengajukan kredit, tender, atau due diligence investor.",
      "Kebanyakan pemilik usaha tidak gagal pajak karena ingin menghindar — mereka gagal karena sibuk: buku usaha tidak tercatat, faktur tercecer, sistem e-faktur bermasalah, dan tenggat datang diam-diam. Solusinya bukan app sekali pakai, melainkan sistem + manusia: konsultan bersertifikat yang memegang kalender pajak Anda setiap bulan.",
      "Layanan langganan Digiman mencakup pencatatan transaksi dari source data Anda, pembuatan e-faktur, penghitungan & pelaporan seluruh SPT bulanan, hingga SPT tahunan badan. Anda menerima laporan ringkas posisi pajak setiap bulan — tahu persis berapa yang harus disetor dan kenapa. Transparan, terjadwal, tanpa kejutan.",
    ],
    benefits: [
      { title: "Nol denda telat lapor", desc: "Kalender pajak kami pegang — seluruh SPT terlapor sebelum tenggat, tanpa pengejaran mendadak." },
      { title: "Konsultan bersertifikat", desc: "Pajak Anda dihitung dan ditandatangani tenaga bersertifikat — bukan tebakan dari template." },
      { title: "Efisiensi pajak legal", desc: "Kredit pajak, fasilitas, dan pemilihan skema (misalnya PP 23) kami maksimalkan secara sah." },
      { title: "Laporan yang bisa dibaca", desc: "Setiap bulan Anda terima ringkasan posisi pajak dalam bahasa manusia — bukan kertas SP2DK." },
      { title: "Siap audit & due diligence", desc: "Buku dan laporan yang rapi membuat pemeriksa pajak dan investor menemukan yang mereka cari." },
    ],
    process: [
      { title: "Setup awal", desc: "Kami susun struktur pencatatan, kumpulkan saldo awal, dan setel kalender pajak perusahaan Anda." },
      { title: "Pencatatan bulanan", desc: "Transaksi (jual, beli, gaji) kami proses dari dokumen/invoice yang Anda kirim atau sistem Anda." },
      { title: "Lapor tepat waktu", desc: "e-Faktur dibuat, SPT bulanan dilaporkan, bukti setor diserahkan — semuanya sebelum tenggat." },
      { title: "Laporan & konsultasi", desc: "Ringkasan pajak bulanan dikirim, pertanyaan Anda dijawab konsultan — tanpa biaya kejutan." },
    ],
    requirements: [
      "Akses data transaksi (invoice, kasbon, rekening koran, payroll)",
      "Dokumen badan usaha & NPWP",
      "Daftar karyawan & gaji (untuk PPh 21)",
      "Kontak penanggung jawab keuangan Anda",
    ],
    faqs: [
      { q: "Berapa biaya langganan pelaporan pajak bulanan?", a: "Biaya menyesuaikan volume transaksi dan jenis SPT yang diperlukan — usaha jasa dengan transaksi sedikit berbeda dengan distribusi bervolume tinggi. Kirim gambaran omzet & jumlah transaksi bulanan Anda, dan kami berikan penawaran tetap per bulan tanpa biaya per dokumen tersembunyi." },
      { q: "Apakah data keuangan saya aman di Digiman?", a: "Kami bekerja dengan prinsip kerahasiaan profesi: akses data terbatas pada tim yang menangani, dokumen disimpan terenkripsi, dan non-disclosure agreement tersedia atas permintaan. Kepercayaan adalah satu-satunya aset layanan pajak — kami menjaganya seperti menjaga akta notaris." },
      { q: "Bagaimana jika perusahaan saya terkena pemeriksaan pajak?", a: "Pelanggan langganan kami mendampingi proses korespondensi dan klarifikasi awal tanpa biaya tambahan; bila sampai pemeriksaan resmi, tim kami menyiapkan seluruh dokumen dan mewakili Anda dalam koordinasi. Kunci pemeriksaan yang lancar justru pencatatan bulanan yang rapi — yang telah kami jalankan sejak awal." },
    ],
    related: ["npwp-pkp", "legal-drafting", "bpjs"],
  },
];

/** KATEGORI: KETENAGAKERJAAN & IMIGRASI (2 layanan) */
export const ketenagakerjaanContent: ServiceContent[] = [
  {
    slug: "bpjs",
    tagline: "BPJS tertata — karyawan tenang, perusahaan patuh, biaya terkendali.",
    heroSub:
      "Pendaftaran & administrasi BPJS Kesehatan dan Ketenagakerjaan: dari registrasi perusahaan sampai pembayaran bulanan yang terjadwal.",
    timeline: "2–5 hari kerja",
    intro: [
      "BPJS Ketenagakerjaan (JHT, JP, JKK, JKM) adalah kewajiban hukum untuk setiap karyawan — bukan fasilitas opsional. Bersama BPJS Kesehatan, keduanya menjadi fondasi rasa aman kerja: saat sakit, kecelakaan, atau masa pensiun. Bagi karyawan berkualitas, BPJS yang tertata adalah sinyal perusahaan yang serius; bagi perusahaan, kepemilikan BPJS adalah syarat legal yang diperiksa saat tender dan audit ketenagakerjaan.",
      "Administrasinya punya detail yang sering menjebak: perhitungan iuran per program, karyawan baru dan keluar yang harus tepat bulan, dasar pengupahan yang harus konsisten dengan payroll, hingga program tambahan (JP) yang tahap pemberlakuannya berlanjut. Salah hitung kecil berulang setiap bulan menjadi selisih yang menyulitkan saat audit.",
      "Digiman mengurus seluruh siklusnya: registrasi perusahaan & karyawan, perhitungan iuran, pembayaran terjadwal, penambahan-pengurangan karyawan, hingga klaim bila terjadi kejadian. Tim HR Anda menerima ringkasan bulanan yang rapi — dan karyawan Anda menerima kepastian yang mereka berhak terima.",
    ],
    benefits: [
      { title: "Patuh hukum ketenagakerjaan", desc: "Kewajiban BPJS terpenuhi penuh — aman saat inspeksi tenaga kerja & dokumen tender." },
      { title: "Daya tarik karyawan naik", desc: "Paket kerja dengan BPJS lengkap lebih mudah menarik & menahan talenta berkualitas." },
      { title: "Perhitungan tanpa selisih", desc: "Iuran dihitung presisi per program & per karyawan — tidak ada selisih menumpuk antarbulan." },
      { title: "Administrasi otomatis", desc: "Karyawan masuk-keluar, kenaikan gaji, dan pembayaran semua kami kelola berjadwal." },
      { title: "Dukungan klaim", desc: "Bila kejadian datang (sakit, kecelakaan), proses klaim karyawan didampingi sampai cair." },
    ],
    process: [
      { title: "Registrasi perusahaan", desc: "Pendaftaran perusahaan di BPJS Kesehatan & BPJS Ketenagakerjaan dengan seluruh dokumen legal." },
      { title: "Enrolment karyawan", desc: "Data seluruh karyawan kami masukkan sesuai program yang wajib & opsional." },
      { title: "Iuran & pembayaran", desc: "Perhitungan iuran bulanan diserahkan ke Anda, pembayaran kami koordinasikan tepat jadwal." },
      { title: "Pemeliharaan bulanan", desc: "Perubahan karyawan & gaji diproses setiap bulan; klaim dibantu sampai selesai." },
    ],
    requirements: [
      "Dokumen badan usaha & NIB",
      "Daftar karyawan: nama, NIK, gaji pokok, tanggal masuk",
      "NPWP perusahaan & kontak HR",
      "Kebijakan gaji & struktur jabatan (bila perlu penyesuaian dasar iuran)",
    ],
    faqs: [
      { q: "Program BPJS apa saja yang wajib untuk perusahaan?", a: "BPJS Ketenagakerjaan empat program: JKK (kecelakaan kerja), JKM (kematian), JHT (hari tua), dan JP (pensiun sesuai tahap pemberlakuan) — ditambah BPJS Kesehatan untuk kesehatan karyawan dan keluarganya. Iuran dibagi antara perusahaan dan karyawan sesuai aturan masing-masing program; bagian perusahaan tidak boleh dipotong dari gaji karyawan." },
      { q: "Bagaimana dengan karyawan harian lepas / kontrak pendek?", a: "Karyawan harian lepas wajib diikuti BPJS Ketenagakerjaan program non-JP pada hari kerjanya (JKK, JKM, JHT); pola ini kami atur agar administrasi tetap ringan namun sah. Untuk karyawan kontrak, perlakuannya sama seperti tetap sesuai kontraknya." },
      { q: "Bisakah Digiman juga menyusun kontrak kerja & aturan perusahaan?", a: "Bisa — layanan legal ketenagakerjaan kami mencakup kontrak kerja sesuai jenis (PKWT/PKWTT), peraturan perusahaan, dan surat-surat ketenagakerjaan standar. Ini melengkapi BPJS: kepatuhan yang utuh, bukan sepotong-sepotong." },
    ],
    related: ["pelaporan-pajak", "legal-drafting", "kitas-rptka"],
  },
  {
    slug: "kitas-rptka",
    tagline: "Tenaga asing bekerja sah — RPTKA & KITAS tanpa jebakan imigrasi.",
    heroSub:
      "Perizinan mempekerjakan tenaga asing: RPTKA, notifikasi, KITAS/KITAP — dari ekspatriat direksi hingga pakar teknis.",
    timeline: "10–25 hari kerja (tergantung jenis visa)",
    intro: [
      "Mempekerjakan tenaga asing di Indonesia memerlukan dua izin berlapis: RPTKA (Rencana Penggunaan Tenaga Kerja Asing) yang disahkan Kemenaker, dan izin tinggal KITAS bagi sang tenaga asing. Rangkaian ini memakan waktu berminggu-minggu dan menyimpan banyak aturan penjaga: posisi yang boleh diisi asing, rasio karyawan lokal (pemenuhan TKI sebagai kontraprestasi), dan kuota posisi ekspatriat per perusahaan.",
      "Kesalahan paling mahal adalah bekerja dengan visa turis/wisata atau KITAS yang salah jenis — risikonya deportasi, denda, blacklist, dan operasional perusahaan yang lumpuh karena direksi/pakar dideportasi. Proses yang benar sejak awal jauh lebih murah daripada memperbaiki pelanggaran.",
      "Tim imigrasi kami menangani jalur penuh: pengajuan RPTKA, pembayaran DKP-TKA (dan strategi pemenuhan kewajibannya), notifikasi visa, VITAS di kedutaan, konversi KITAS, sampai KITAP untuk kepemilikan jangka panjang — semuanya terkoordinasi dengan status perusahaan dan kebutuhan operasional Anda.",
    ],
    benefits: [
      { title: "100% legal & terlacak", desc: "RPTKA, notifikasi, dan KITAS resmi — tenaga asing Anda bekerja tenang tanpa risiko deportasi." },
      { title: "Strategi DKP-TKA efisien", desc: "Kewajiban dana $100/posisi/bulan kami kelola termasuk opsi pemenuhan alternatif yang disediakan pemerintah." },
      { title: "Satu koordinator", desc: "Kemenaker, imigrasi, dan kedutaan dikoordinasikan satu tim — tidak ada tautan yang tercecer." },
      { title: "Jalur keluarga", desc: "KITAS keluarga (pasangan & anak) kami urus sekaligus — ekspatriat datang dengan tenang." },
      { title: "Jalur KITAP", desc: "Untuk investasi & pernikahan jangka panjang, kami susun KITAP (5 tahun + perpanjangan) dengan rapi." },
    ],
    process: [
      { title: "Analisis posisi & rasio", desc: "Kami periksa posisi yang boleh diisi asing, rasio TKI, dan kuota perusahaan Anda." },
      { title: "RPTKA & persetujuan", desc: "Rencana penggunaan tenaga asing disusun dan diajukan hingga persetujuan Kemenaker terbit." },
      { title: "Visa & KITAS", desc: "Notifikasi & VITAS diproses, kedatangan dieksekusi, lalu konversi KITAS di imigrasi." },
      { title: "Kepatuhan berjalan", desc: "Laporan berkala, perpanjangan, dan perubahan status keluarga kami kelola berjadwal." },
    ],
    requirements: [
      "Dokumen badan usaha & NIB (penanaman modal minimal sesuai ketentuan bila PMA)",
      "Data tenaga asing: paspor, foto, riwayat pendidikan/pengalaman, surat penunjukan",
      "Posisi yang diisi & deskripsi tugas",
      "Struktur karyawan lokal (rasio)",
      "Alamat tinggal di Indonesia (bisa dibantu)",
    ],
    faqs: [
      { q: "Apa itu DKP-TKA dan berapa besarnya?", a: "Dana Kompensasi Penggunaan Tenaga Kerja Asing: USD 100 per posisi per bulan, dibayar ke pemerintah sebagai kontraprestasi penggunaan TKI. Ada mekanisme alternatif pemenuhannya (misalnya program tertentu yang disahkan) yang bisa lebih hemat untuk perusahaan dengan banyak posisi — kami analisis mana yang paling efisien untuk Anda." },
      { q: "Bisakah pendiri asing PT PMA tinggal lama di Indonesia?", a: "Ya — direksi/komisaris asing PT PMA berhak atas KITAS indeks investasi sesuai nilai modal yang diinvestasikan, dan pemegang saham tertentu dapat mengakses KITAP investasi. Struktur saham & jabatan disusun benar di awal agar jalur visa ini terbuka — salah struktur berarti jalur tertutup." },
      { q: "Berapa lama proses KITAS dari nol?", a: "Untuk KITAS kerja umumnya 2–4 minggu sejak dokumen lengkap: RPTKA (±5–10 hari), notifikasi & VITAS (±5–7 hari), konversi di imigrasi (±5–10 hari). Tenggat kedatangan ekspatriat harus dihitung mundur dari jadwal ini — jangan beli tiket sebelum VITAS jelas. Kami membantu menata jadwal yang realistis." },
    ],
    related: ["pt-pma", "bpjs", "legalisasi-apostille"],
  },
];

/** KATEGORI: KORPORASI & LEGAL (3 layanan) */
export const korporasiContent: ServiceContent[] = [
  {
    slug: "perubahan-akta",
    tagline: "Perusahaan tumbuh, akta harus mengikuti — perubahan yang sah dan rapi.",
    heroSub:
      "Perubahan nama, alamat, pengurus, modal, pemegang saham, atau penambahan KBLI — semua diproses resmi dari notaris sampai OSS.",
    timeline: "3–10 hari kerja (tergantung jenis perubahan)",
    intro: [
      "Perusahaan yang hidup pasti berubah: pendiri baru masuk, saham berpindah, kantor pindah alamat, bidang usaha diperluas, atau modal ditambah untuk proyek besar. Setiap perubahan itu hanya sah bila tercatat di akta dan disahkan — dan dokumen turunannya (NIB, NPWP, OSS, rekening bank, sertifikat merek) harus ikut diperbarui, bukan tertinggal selaras.",
      "Kesalahan klasik: perusahaan mengubah pengurus di notaris tetapi lupa sinkron ke OSS dan bank — dua tahun kemudian, saat mengajukan kredit, dokumen saling bertentangan dan proses macet. Sinkronisasi menyeluruh adalah standar kerja kami: satu perubahan, semua dokumen mengikuti.",
      "Digiman menangani perubahan dari rapat pemegang saham, akta notaris, pengesahan Kemenkumham, hingga pembaruan NIB/OSS, NPWP, dan dokumen turunan lain. Anda cukup menyampaikan apa yang berubah — kami menjamin akhirnya seluruh dokumen perusahaan bicara dengan suara yang sama.",
    ],
    benefits: [
      { title: "Semua dokumen selaras", desc: "Akta, SK, NIB, NPWP, OSS, dan bank diperbarui serentak — tidak ada dokumen yang berkonflik." },
      { title: "Cepat tanpa salah tahap", desc: "Urutan proses yang benar (mana dulu mana kemudian) menjaga waktu proses tetap pendek." },
      { title: "Struktur saham aman", desc: "Pemindahan saham disertai dokumen penjualan & pph finalnya — bebas masalah di kemudian hari." },
      { title: "Ekspansi KBLI lancar", desc: "Tambah bidang usaha baru tanpa membuat kewajiban perizinan yang tak terkendali." },
      { title: "Kepatuhan pasca-perubahan", desc: "Kewajiban pelaporan perubahan ke instansi terkait kami selesaikan hingga titik nol." },
    ],
    process: [
      { title: "Pemetaan perubahan", desc: "Kami identifikasi seluruh dokumen yang terdampak perubahan Anda — bukan hanya akta." },
      { title: "RUPS/kesepakatan & akta", desc: "Dokumen persetujuan disusun, notaris mencatat perubahan dalam akta resmi." },
      { title: "Pengesahan Kemenkumham", desc: "Pengajuan SK perubahan via sistem AHU hingga terbit." },
      { title: "Sinkronisasi turunan", desc: "NIB/OSS, NPWP, dan dokumen turunan lain diperbarui — semuanya selaras dengan akta baru." },
    ],
    requirements: [
      "Akta & SK terakhir perusahaan",
      "KTP & NPWP pihak-pihak yang berubah (masuk/keluar/berubah data)",
      "Detail perubahan yang diinginkan (nama, alamat, saham, KBLI, pengurus)",
      "Dokumen dukungan bila ada (kontrak penjualan saham, bukti alamat baru, dll.)",
    ],
    faqs: [
      { q: "Perubahan apa saja yang wajib lewat notaris?", a: "Perubahan pada anggaran dasar — nama, kedudukan, maksud-tujuan/KBLI, modal dasar & disetor, susunan direksi/komisaris, dan pemegang saham — semua melalui akta + pengesahan. Perubahan alamat cabang (bukan kedudukan) atau data administratif tertentu cukup diperbarui di OSS/NPWP. Sampaikan perubahan Anda, kami petakan jalur yang benar." },
      { q: "Kena pajak tidak saat memindahkan saham?", a: "Pemindahan saham PT dapat dikenai PPh final 0,1% dari harga (dengan ketentuan tertentu bila harga tidak sesuai wajar). Dokumen penjualan saham dan pembayaran pajaknya kami urus sekalian — banyak pemilik baru tersandung masalah ini bertahun-tahun setelah transaksi." },
      { q: "Berapa lama perubahan pengurus berlaku?", a: "Akta perubahan berlaku sejak ditandatangani; namun validitasnya di mata pihak ketiga (bank, tender, partner) menunggu SK Kemenkumham dan pembaruan dokumen turunan. Itulah sebabnya layanan kami selalu paket lengkap sampai seluruh dokumen selesai diperbarui — bukan berhenti di akta." },
    ],
    related: ["legal-drafting", "pembubaran", "nib-oss"],
  },
  {
    slug: "pembubaran",
    tagline: "Menutup bab dengan benar — pembubaran & likuidasi tanpa benang kusut.",
    heroSub:
      "Proses pembubaran dan likuidasi badan usaha yang tuntas: kewajiban pajak, aset, karyawan, dan penghapusan badan hukum.",
    timeline: "30–90 hari kerja (tergantung kondisi perusahaan)",
    intro: [
      "Tidak semua usaha harus jalan terus — kondisi pasar, strategi, atau keputusan hidup bisa menghentikan perjalanan sebuah perusahaan. Yang membedakan pebisnis dewasa adalah cara menutupnya: pembubaran yang sah meninggalkan pemilik bersih di mata hukum; yang ditinggalkan begitu saja meninggalkan bom waktu — pajak menumpuk, sanksi berjalan, dan nama Anda tetap terkait utang perusahaan.",
      "Pembubaran (berhenti operasional) dan likuidasi (pencairan aset, pelunasan kewajiban, pembagian sisa) adalah dua tahap yang berbeda dengan prosedur masing-masing: RUPS, pemberitahuan, pelaporan pajak sampai titik nol, penyelesaian kewajiban karyawan, pengumuman kepada kreditur, hingga penghapusan badan hukum di Kemenkumham dan penonaktifan NIB/NPWP.",
      "Tim kami memandu seluruh rangkaian dengan peta yang jelas: apa yang harus diselesaikan, berapa estimasi biayanya, dan berapa lama prosesnya — jujur sejak awal. Tujuan akhirnya satu: Anda bebas dari seluruh kewajiban dan dapat melangkah ke bab berikutnya dengan tangan bersih.",
    ],
    benefits: [
      { title: "Bebas kewajiban sesudahnya", desc: "Seluruh pajak, kewajiban, dan perizinan ditutup tuntas — tidak ada bom waktu menunggu." },
      { title: "Peta proses jujur", desc: "Estimasi waktu, biaya, dan kemungkinan hambatan disampaikan sejak awal — tanpa kejutan." },
      { title: "Aset terbagi sah", desc: "Sisa aset dibagikan ke pemegang saham sesuai hukum — tidak ada sengketa di kemudian." },
      { title: "Karyawan terhormat", desc: "Hak-hak karyawan (PHK, kepesenjaan) diselesaikan patuh hukum — reputasi pemilik terjaga." },
      { title: "Nama bersih untuk babak baru", desc: "Direksi & pemilik bebas dari jejak utang — memulai usaha berikutnya tanpa beban." },
    ],
    process: [
      { title: "Audit kondisi perusahaan", desc: "Kami inventarisasi aset, kewajiban, pajak, karyawan, dan perizinan yang masih hidup." },
      { title: "Keputusan pembubaran", desc: "RUPS memutuskan pembubaran; akta pembubaran disusun notaris dan diumumkan sesuai aturan." },
      { title: "Likuidasi & penyelesaian", desc: "Kewajiban dilunasi, pajak diselesaikan sampai titik nol, aset sisa dibagikan sah." },
      { title: "Penghapusan badan hukum", desc: "Penghapusan di Kemenkumham, penonaktifan NIB & NPWP — perusahaan ditutup sampai titik nol administrasi." },
    ],
    requirements: [
      "Seluruh dokumen legal perusahaan (akta, SK, NIB, NPWP)",
      "Laporan keuangan & bukti pajak yang ada",
      "Data karyawan & kewajiban ketenagakerjaan",
      "Daftar aset & kewajiban yang masih hidup (kontrak, utang, piutang)",
      "Keputusan & kesepakatan seluruh pemegang saham",
    ],
    faqs: [
      { q: "Apa risiko kalau perusahaan ditinggalkan saja tanpa dibubarkan?", a: "Badan hukum tetap hidup di mata hukum: SPT tahunan tetap wajib (denda menumpuk), NPWP aktif, dan pemilik/direksi dapat dipertanggungjawabkan atas kewajiban yang muncul. Ketika suatu saat Anda perlu bersih (kredit pribadi, usaha baru, perjalanan tertentu), masa lalu itu menagih. Pembubaran yang benar adalah investasi ketenangan." },
      { q: "Berapa lama proses likuidasi?", a: "Sangat bergantung kondisi: perusahaan bersih tanpa utang-pajak bisa cepat (sekitar 1–3 bulan); perusahaan dengan kewajiban, pemeriksaan pajak, atau sengketa aset memakan lebih lama. Audit awal kami memberi estimasi realistis sebelum Anda memutuskan — tanpa janji manis yang menyesatkan." },
      { q: "Apakah semua pajak harus nol sebelum badan hukum dihapus?", a: "Ya — surat keterangan tidak ada utang pajak / penyelesaian pajak akhir adalah syarat kunci penghapusan badan hukum. Inilah tahap yang paling sering menahan proses bila pembukuan perusahaan tidak rapi sejak awal. Layanan pelaporan pajak kami dapat merapikannya terlebih dahulu bila diperlukan." },
    ],
    related: ["perubahan-akta", "pelaporan-pajak", "legal-drafting"],
  },
  {
    slug: "legal-drafting",
    tagline: "Perjanjian yang melindungi Anda — bukan sekadar formalitas bertinta.",
    heroSub:
      "Penyusunan perjanjian bisnis, surat legal, dan due diligence: kontrak kerja sama, NDA, MoU, sampai audit legal perusahaan.",
    timeline: "2–10 hari kerja per dokumen",
    intro: [
      "Setiap perjanjian bisnis adalah kalimat 'jika nanti terjadi perselisihan' yang ditulis hari ini. Kontrak yang lemah — klausul samar, tanggung jawab tidak jelas, mekanisme putus yang tidak bisa dieksekusi — baru terasa mahalnya saat hubungan bisnis asam: uang tertahan, karya tidak diserahkan, mitra berpindah lawan. Biaya menyusun kontrak yang benar selalu lebih murah daripada biaya menuntut kontrak yang salah.",
      "Layanan legal drafting kami menyusun dokumen dari kepentingan bisnis Anda: kontrak kerja sama & kemitraan, NDA (kerahasiaan), MoU, perjanjian vendor & pelanggan, perjanjian kerja (PKWT/PKWTT), perjanjian lisensi, hingga surat kuasa dan keputusan direksi. Bahasanya tegas namun bisa dipahami — bukan jargon hukum untuk menyembunyikan sesuatu.",
      "Untuk yang sedang membeli perusahaan, menerima investor, atau menguji calon mitra besar, kami menjalankan due diligence: memeriksa keabsahan dokumen legal, status pajak, dan perizinan — sehingga Anda masuk kesepakatan dengan mata terbuka, bukan dengan harapan.",
    ],
    benefits: [
      { title: "Ditulis dari sisi Anda", desc: "Klausul disusun memprioritaskan kepentingan & risiko bisnis Anda — bukan templat internet." },
      { title: "Bahasa tegas & jelas", desc: "Perjanjian yang bisa dipahami kedua pihak — mengurangi alasan 'saya tidak tahu' saat sengketa." },
      { title: "Mekanisme eksekusi nyata", desc: "Sanksi, denda, dan jalur putus kontrak dirancang agar benar-benar bisa dijalankan." },
      { title: "Due diligence menyeluruh", desc: "Legal, pajak, dan perizinan target usaha kami bedah sebelum Anda menandatangani." },
      { title: "Kecepatan profesional", desc: "Dokumen standar selesai dalam hitungan hari — kesempatan bisnis tidak menunggu." },
    ],
    process: [
      { title: "Pemahaman transaksi", desc: "Kami dengarkan kesepakatan bisnis Anda: apa yang diberikan, apa yang ditakuti, apa yang tidak bisa ditawar." },
      { title: "Penyusunan rancangan", desc: "Draf perjanjian disusun dengan klausul perlindungan yang tepat untuk posisi Anda." },
      { title: "Revisi bersama", desc: "Catatan Anda dan penawaran pihak lawan kami terjemahkan ke klausul — hingga dokumen final." },
      { title: "Penandatanganan benar", desc: "Kami pandu cara penandatanganan yang sah (materai, saksi, TTE) agar dokumen benar-benar kuat." },
    ],
    requirements: [
      "Ringkasan kesepakatan bisnis (siapa, apa, nilai, durasi)",
      "Dokumen pendukung (proposal, penawaran, draf dari pihak lain bila ada)",
      "Hal yang paling ingin Anda hindari (batal, bocor, telat bayar, dst.)",
      "Identitas para pihak (KTP/NPWP/badan usaha)",
    ],
    faqs: [
      { q: "Apa beda MoU, NDA, dan kontrak kerja sama?", a: "NDA melindungi kerahasiaan informasi sebelum/selama negosiasi. MoU mencatat kesepakatan awal (bisa mengikat sebagian atau seluruhnya tergantung klausul). Kontrak kerja sama adalah kesepakatan penuh yang mengatur pelaksanaan: tugas, pembayaran, dan sanksi. Kesalahan umum: memakai MoU untuk transaksi final — lemah saat dibawa ke meja hukum." },
      { q: "Apakah kontrak harus dimaterai & dilegalisasi notaris?", a: "Materai memperkuat nilai pembuktian dokumen; legalisasi notaris (dan akta bila wajib) menambah kekuatan tertentu untuk dokumen khusus. Tidak semua kontrak wajib akta — namun cara menandatangani yang benar (wewenang pihak, saksi, lampiran) sering lebih menentukan daripada materainya. Kami memandu format yang tepat per dokumen." },
      { q: "Kapan perusahaan perlu due diligence?", a: "Sebelum membeli saham/aset perusahaan, sebelum investor masuk besar, sebelum kemitraan bernilai tinggi, dan saat menguji kelayakan vendor kritikal. Due diligence kami memeriksa keabsahan dokumen, status pajak, perizinan, dan kontrak berjalan — laporan hasilnya menjadi dasar negosiasi harga & jaminan Anda." },
    ],
    related: ["perubahan-akta", "franchise", "pembubaran"],
  },
];

/** KATEGORI: DIGITALISASI & TEKNOLOGI (3 layanan) */
export const digitalContent: ServiceContent[] = [
  {
    slug: "website-ecommerce",
    tagline: "Kedai digital 24 jam — website yang jualan, bukan sekadar tampil.",
    heroSub:
      "Company profile premium, toko online dengan payment gateway, dan fondasi SEO — kehadiran digital yang menghasilkan.",
    timeline: "7–21 hari kerja",
    intro: [
      "Di era ketika pembeli memeriksa Google sebelum percaya, website bukan pilihan — melainkan etalase kredibilitas yang buka 24 jam. Perbedaan website biasa dan website yang menghasilkan terletak pada tiga hal: kecepatan (pengunjung kabur dalam 3 detik bila lambat), kejelasan (apa yang Anda tawarkan dan bagaimana membelinya), dan kemampuan ditemukan (SEO yang membuat Google merekomendasikan Anda).",
      "Kami membangun website dengan standar situs terbaik dunia: ringan (skor performa tinggi), futuristik namun bersih, aman (HTTPS, proteksi standar), dan siap mesin pencari sejak baris pertama — sitemap, structured data, dan konten yang menjawab pertanyaan pelanggan. Untuk toko online: integrasi pembayaran (QRIS, transfer, e-wallet), manajemen stok, dan alur checkout yang tidak membuat pembeli berpaling.",
      "Semua produk digital Digiman diserahkan lengkap dengan pelatihan singkat: Anda bisa update konten sendiri, membaca laporan pengunjung, dan memahami apa yang perlu dilakukan bulan depan. Website kami adalah mesin yang Anda kendalikan — bukan kotak hitam yang menagih biaya perubahan.",
    ],
    benefits: [
      { title: "Kecepatan kelas dunia", desc: "Dibangun dengan teknologi modern & dioptimalkan — skor performa tinggi, pengunjung betah." },
      { title: "SEO sejak hari pertama", desc: "Sitemap, structured data, dan struktur konten yang benar — Google memahami bisnis Anda." },
      { title: "Payment gateway lengkap", desc: "QRIS, transfer bank, e-wallet terintegrasi — pembeli bayar tanpa gesekan." },
      { title: "Panel mandiri", desc: "Update produk & konten dari panel admin sendiri — tidak menunggu developer untuk ganti harga." },
      { title: "Mobile-first", desc: "Mayoritas pengunjung dari HP — desain kami utamakan pengalaman ponsel sejak awal." },
    ],
    process: [
      { title: "Strategi & sitemap", desc: "Kami petakan tujuan website (jualan, kredibilitas, lead) dan struktur halamannya." },
      { title: "Desain & copywriting", desc: "Tampilan sesuai karakter brand + teks yang menjual — bukan template yang dipakai ribuan orang." },
      { title: "Pengembangan & uji", desc: "Situs dibangun, diuji di berbagai perangkat, dan dioptimalkan kecepatannya." },
      { title: "Peluncuran & pelatihan", desc: "Domain, hosting, email bisnis aktif — plus pelatihan pengelolaan & laporan awal SEO." },
    ],
    requirements: [
      "Profil bisnis: produk/jasa, harga, keunggulan, foto aset",
      "Logo & warna brand (bila belum ada, kami bantu sederhana)",
      "Domain yang diinginkan (bila belum punya, kami carikan)",
      "Referensi website yang Anda suka (opsional tapi membantu)",
    ],
    faqs: [
      { q: "Berapa lama website selesai dan bisa langsung muncul di Google?", a: "Company profile umumnya 1–2 minggu, toko online 2–3 minggu. Muncul di Google: situs terindeks dalam hitungan hari setelah peluncuran; ranking kompetitif adalah proses konten 3–6 bulan. Kami menyetel seluruh fondasi SEO sejak hari pertama dan memberi roadmap konten agar peringkat Anda tumbuh benar." },
      { q: "Apakah saya bisa mengelola isi website sendiri?", a: "Ya — semua situs kami dilengkapi panel admin yang sederhana: ubah produk, harga, artikel, dan gambar tanpa menyentuh kode. Pelatihan kami sertakan saat serah terima, dan dokumentasi ringkas tersedia. Bila suatu saat butuh fitur baru, tim kami siap melanjutkan." },
      { q: "Bagaimana dengan biaya tahunan domain & hosting?", a: "Kami tampilkan semuanya transparan di awal: domain (per tahun), hosting (per tahun), dan biaya pemeliharaan opsional. Tidak ada biaya siluman — dan Anda memegang kepemilikan penuh domain & situs; tidak ada ketergantungan sandera seperti pada beberapa vendor." },
    ],
    related: ["otomasi-ai", "pendaftaran-merek", "aplikasi-sistem"],
  },
  {
    slug: "aplikasi-sistem",
    tagline: "Sistem internal yang bekerja sesuai cara bisnis Anda — bukan sebaliknya.",
    heroSub:
      "Aplikasi internal & sistem operasional: kasir, inventori, CRM, hingga dashboard manajemen — dibangun presisi sesuai proses Anda.",
    timeline: "14–90 hari kerja (tergantung cakupan)",
    intro: [
      "Banyak bisnis memaksakan diri mengikuti aplikasi siap pakai — memutar prosesnya agar cocok dengan software, bukan sebaliknya. Hasilnya: input ganda, spreadsheet sampingan yang terus muncul, dan data yang tidak pernah benar-benar satu sumber kebenaran. Aplikasi yang dibangun sesuai proses bisnis Anda sendiri adalah investasi yang membayar dirinya lewat waktu yang dihemat dan kesalahan yang dicegah.",
      "Tim kami membangun sistem internal dengan metodologi yang disiplin: pemetaan proses (flowchart bisnis yang nyata, bukan asumsi), desain antarmuka yang ringan dipakai staf harian, pengembangan bertahap (Anda melihat versi hidup sejak minggu-minggu awal), dan pelatihan sampai tim benar-benar jalan sendiri.",
      "Contoh sistem yang kami bangun: kasir & inventori retail, manajemen pesanan produksi, CRM & pipeline sales, sistem administrasi sekolah, portal keanggotaan, hingga dashboard keuangan manajemen. Semuanya dimiliki penuh oleh Anda — kode & data tidak disandera vendor.",
    ],
    benefits: [
      { title: "Sesuai proses Anda", desc: "Sistem mengikuti cara kerja bisnis Anda — bukan tim Anda yang mengikuti software." },
      { title: "Satu sumber data", desc: "Spreadsheet tercecer melebur ke satu sistem — keputusan diambil dari data yang benar." },
      { title: "Bertahap & terkendali", desc: "Rilis kecil-kecil yang bisa dipakai — risiko besar dicegah, feedback cepat dimasukkan." },
      { title: "Anda pemilik penuh", desc: "Kode, data, dan server milik Anda — vendor tidak menyandera bisnis Anda." },
      { title: "Tim ikut terlatih", desc: "Pelatihan & dokumentasi sampai staf jalan mandiri — bukan serah terima lalu hilang." },
    ],
    process: [
      { title: "Workshop proses bisnis", desc: "Kami petakan alur kerja nyata & masalah terbesarnya — dasar desain sistem yang tepat." },
      { title: "Rancangan & estimasi", desc: "Cakupan fase pertama, wireframe, dan estimasi biaya-waktu yang jujur." },
      { title: "Pengembangan bertahap", desc: "Sistem dibangun per fase dengan demo rutin — Anda melihat kemajuan dan mengarahkan." },
      { title: "Peluncuran & pendampingan", desc: "Pelatihan tim, migrasi data, masa pendampingan hingga sistem benar-benar hidup." },
    ],
    requirements: [
      "Pemaparan proses bisnis saat ini & masalah terbesarnya",
      "Jumlah pengguna & peran (kasir, admin, manajer)",
      "Sistem/data yang sudah ada (Excel, aplikasi lama) untuk migrasi",
      "Estimasi anggaran rentang — agar rancangan fase yang realistis",
    ],
    faqs: [
      { q: "Kenapa tidak memakai aplikasi siap pakai saja?", a: "Aplikasi siap pakai bagus untuk proses yang umum. Bila proses bisnis Anda spesifik (dan itulah sering sumber keunggulan bersaing), memaksakan software generik menimbulkan kebocoran waktu & data. Hitungan sederhana: bila sistem menghemat 1–2 jam staf per hari, biaya pembangunan kembali dalam 6–12 bulan." },
      { q: "Bagaimana jaga keberlanjutan sistem setelah selesai?", a: "Anda menerima kode lengkap + dokumentasi + hak penuh atasnya. Layanan pemeliharaan bulanan tersedia (opsional) untuk perbaikan, perubahan kecil, dan penambahan fitur — namun keputusan itu milik Anda, tanpa ketergantungan paksa pada kami." },
      { q: "Apakah sistem bisa terhubung dengan website/kasir/lainnya?", a: "Ya — integrasi adalah spesialisasi kami: website ↔ inventori ↔ kasir ↔ akuntansi. API yang benar menghapus input ganda, sumber utama kesalahan data. Saat workshop awal, kami petakan seluruh sistem yang harus bicara satu sama lain." },
    ],
    related: ["website-ecommerce", "otomasi-ai", "iso"],
  },
  {
    slug: "otomasi-ai",
    tagline: "Mesin jualan yang tidak tidur — otomasi AI untuk bisnis modern.",
    heroSub:
      "Chatbot WhatsApp, otomasi pemasaran, integrasi AI untuk layanan pelanggan & operasional — plus digital marketing yang terukur.",
    timeline: "7–30 hari kerja per fase otomasi",
    intro: [
      "Sebagian besar waktu bisnis habis di pekerjaan berulang: menjawab pertanyaan pelanggan yang sama, memindahkan data antarsistem, mengejar follow-up penjualan, dan menyusun laporan. Otomasi AI mengambil pekerjaan itu — cepat, konsisten 24 jam, tanpa lelah — sehingga manusia di tim Anda mengerjakan hal yang benar-benar butuh manusia: relasi, kreativitas, dan keputusan.",
      "Kami membangun otomasi yang pragmatis: chatbot WhatsApp yang menjawab katalog & FAQ lalu menyerahkan percakapan panas ke sales, pipeline leads yang mengikuti calon pelanggan otomatis, laporan harian yang menyusun dirinya sendiri, dan integrasi AI untuk balasan email, klasifikasi pesanan, hingga ringkasan review pelanggan. Semuanya terukur: waktu yang dihemat dan konversi yang naik.",
      "Untuk digital marketing, kami mengelola konten & iklan dengan disiplin data: satu pesan kunci per kanal, pengukuran konversi yang benar, dan iterasi bulanan berdasarkan angka — bukan selera. Kombinasi otomasi + marketing yang terukur adalah cara bisnis kecil tampil besar dengan anggaran yang waras.",
    ],
    benefits: [
      { title: "Respons 24 jam", desc: "Pelanggan dibalas detik itu juga oleh AI — di luar jam kantor pun kesempatan tidak lolos." },
      { title: "Waktu staf terbebaskan", desc: "Pekerjaan berulang diambil mesin — tim fokus pada penjualan & layanan yang butuh sentuhan manusia." },
      { title: "Leads tidak tercecer", desc: "Follow-up otomatis & pipeline terstruktur — calon pelanggan tidak hilang di chat yang tertidur." },
      { title: "Marketing terukur", desc: "Setiap rupiah iklan dilacak sampai konversi — keputusan berdasarkan angka, bukan perasaan." },
      { title: "Integrasi menyeluruh", desc: "WhatsApp, website, CRM, dan spreadsheet Anda terhubung — data mengalir tanpa input ganda." },
    ],
    process: [
      { title: "Audit proses & peluang", desc: "Kami petakan pekerjaan berulang terbesar & titik kebocoran peluang di bisnis Anda." },
      { title: "Prioritas fase pertama", desc: "Satu otomasi dengan dampak terbesar dibangun dulu — bukti cepat sebelum meluas." },
      { title: "Bangun & integrasi", desc: "Chatbot/otomasi dibangun, dihubungkan ke sistem Anda, dan diuji bersama tim." },
      { title: "Ukur & kembangkan", desc: "Laporan dampak bulanan (waktu hemat, konversi) — fase berikutnya disusun dari hasil nyata." },
    ],
    requirements: [
      "Profil bisnis & volume pertanyaan/pesanan per minggu",
      "Akses kanal yang dipakai (WhatsApp Business, website, sosial media)",
      "Daftar pertanyaan pelanggan yang paling sering muncul",
      "Anggaran rentang bulanan untuk otomasi & marketing",
    ],
    faqs: [
      { q: "Apakah chatbot AI bisa salah menjawab pelanggan?", a: "Bisa — itulah mengapa kami merancang batas yang jelas: AI menjawab dari basis pengetahuan yang Anda setujui, dan bila ragu atau pelanggan emosional, percakapan diserahkan ke manusia dengan konteks lengkap. Desain yang benar menghilangkan 80% beban pertanyaan tanpa mempertaruhkan relasi pelanggan." },
      { q: "Apa beda layanan ini dengan beli aplikasi chatbot jadi?", a: "Aplikasi jadi memberi mesin; kami memberi mesin + bahan bakar + mekanik: pengetahuan bisnis Anda yang disusun benar, integrasi ke sistem yang sudah ada, pengukuran dampak, dan iterasi bulanan. Nilai otomasi bukan di alatnya, melainkan di bagaimana alat itu dipasangkan dengan proses bisnis Anda." },
      { q: "Berapa anggaran iklan yang wajar untuk mulai digital marketing?", a: "Untuk bisnis lokal, mulai dari beberapa juta rupiah per bulan sudah cukup menghasilkan data pembelajaran yang benar — yang penting bukan besar anggarannya, melainkan pengukuran yang tidak bocor: konversi terlacak, target audiens yang tepat, dan kreatif yang diuji. Kami susun rencana sesuai anggaran yang Anda siapkan, tanpa paksaan." },
    ],
    related: ["website-ecommerce", "aplikasi-sistem", "nib-oss"],
  },
];
