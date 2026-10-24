import type { ServiceContent } from "./types";

/** KATEGORI: KEKAYAAN INTELEKTUAL (3 layanan) */
export const kiContent: ServiceContent[] = [
  {
    slug: "pendaftaran-merek",
    tagline: "Brand Anda adalah aset — pastikan hanya Anda yang memilikinya.",
    heroSub:
      "Pendaftaran merek ke DJKI: pencarian ketersediaan, pengajuan kelas Nice yang tepat, monitoring, hingga balas argumen bila ada keberatan.",
    timeline: "Pengajuan 1–3 hari; sertifikat mengikuti jadwal DJKI",
    intro: [
      "Merek adalah wajah bisnis di pasar: satu nama yang membedakan produk Anda dari ribuan pesaing. Di Indonesia, hak eksklusif atas merek hanya lahir melalui pendaftaran ke DJKI (Direktorat Jenderal Kekayaan Intelektual) — bukan dari pemakaian. Artinya: brand yang Anda bangun bertahun-tahun bisa direbut orang lain hanya karena mereka mengajukan lebih dulu.",
      "Proses pendaftaran menyimpan banyak jebakan teknis: pemilihan kelas Nice yang salah membuat perlindungan bolong di kelas yang justru Anda butuhkan, merek yang mirip dengan pendaftar lebih dulu akan mengalami keberatan substansif, dan formulir yang salah format berujung pengulangan. Setiap kesalahan memakan waktu berminggu-minggu.",
      "Digiman menangani dari hulu: pencarian ketersediaan di database DJKI (menghindari tabrakan sejak awal), strategi kelas Nice untuk posisi sekarang dan masa depan, pengajuan resmi, monitoring berkala, hingga pembelaan bila examiner mengeluarkan keberatan. Hasil akhirnya satu: sertifikat merek atas nama Anda, dengan perlindungan yang benar-benar menutupi bisnis Anda.",
    ],
    benefits: [
      { title: "Hak eksklusif legal", desc: "Hanya Anda yang berhak memakai merek di kelas terdaftar — pesaing dapat dituntut bila meniru." },
      { title: "Cek ketersediaan dulu", desc: "Pencarian database DJKI sebelum mengajukan — meminimalkan risiko keberatan dan uang terbuang." },
      { title: "Strategi kelas Nice", desc: "Kelas yang dipilih bukan sekadar sesuai produk hari ini, tapi juga rencana ekspansi produk Anda." },
      { title: "Monitoring status", desc: "Progres pengajuan dipantau dan dilaporkan — tidak ada tahap yang lolos tanpa perhatian." },
      { title: "Pembelaan saat keberatan", desc: "Bila examiner mengangkat argumen, tim kami menyusun respons hukum yang mempertahankan pengajuan Anda." },
      { title: "Aset yang bernilai", desc: "Sertifikat merek dapat dipindahtangankan, diwariskan, dan menjadi agunan — nilai perusahaan naik." },
    ],
    process: [
      { title: "Pencarian ketersediaan", desc: "Nama merek Anda kami cek di database DJKI: identik, mirip, atau tersedia — plus rekomendasi format aman." },
      { title: "Penetapan kelas & label", desc: "Kami susun daftar barang/jasa pada kelas Nice yang tepat untuk bisnis Anda." },
      { title: "Pengajuan ke DJKI", desc: "Formulir dan data logo/nama diajukan resmi; tanggal penerimaan menjadi prioritas hak Anda." },
      { title: "Pengumuman & respons", desc: "Selama masa pengumuman, kami pantau keberatan pihak ketiga dan siap membela." },
      { title: "Sertifikat terbit", desc: "Sertifikat merek kami serahkan plus panduan penggunaan hak dan kewajiban pembaruan 10 tahunan." },
    ],
    requirements: [
      "Nama/logo merek (file logo resolusi baik bila ada)",
      "KTP & NPWP pemohon (pribadi atau badan usaha)",
      "Daftar produk/jasa yang akan memakai merek",
      "Email aktif & nomor HP",
      "Alternatif nama (opsional, bila pencarian menemukan tabrakan)",
    ],
    faqs: [
      { q: "Berapa lama sertifikat merek terbit?", a: "Proses resmi DJKI umumnya memakan waktu berminggu-minggu hingga beberapa bulan tergantung antrean dan keberatan. Namun tanggal pengajuan Anda (filing date) sudah menjadi prioritas hak — artinya sejak pengajuan resmi, pendaftar kemudian atas merek serupa tidak dapat menyaingi Anda. Kami memastikan pengajuan terjadi secepat mungkin." },
      { q: "Apakah merek harus didaftarkan atas nama badan usaha?", a: "Tidak wajib — merek dapat didaftar atas nama pribadi maupun badan usaha. Atas nama badan usaha lebih rapi bila merek adalah aset perusahaan (memudahkan akuntansi dan investasi); atas nama pribadi cukup bagi usaha solo. Tim kami akan menyarankan pilihan paling sesuai struktur bisnis Anda." },
      { q: "Merek saya sudah terkenal tapi belum didaftarkan — apa yang harus saya lakukan?", a: "Segera daftarkan. Hak Indonesia mengenal beberapa perlindungan merek terkenal, namun membuktikannya jauh lebih mahal daripada mendaftar sejak awal. Kasus 'brand dibajak pendaftar lebih dulu' yang kami tangani nyaris selalu dimulai dari kelalaian ini. Jadikan hari ini sebagai filing date Anda." },
    ],
    related: ["hak-cipta-paten", "franchise", "website-ecommerce"],
  },
  {
    slug: "hak-cipta-paten",
    tagline: "Karya dan inovasi Anda dilindungi hukum — dari naskah sampai mesin.",
    heroSub:
      "Pendaftaran hak cipta (karya kreatif & software), paten (inovasi teknologi), dan desain industri ke DJKI dengan strategi perlindungan yang tepat.",
    timeline: "Pengajuan 3–7 hari; sertifikat mengikuti jadwal DJKI",
    intro: [
      "Hak cipta melindungi karya kreatif sejak diciptakan: buku, musik, ilustrasi, desain grafis, hingga program komputer (source code). Paten melindungi invensi teknis yang baru, inventif, dan dapat diterapkan industri — alat, metode produksi, formula. Desain industri melindungi bentuk visual produk. Ketiganya adalah payung berbeda untuk aset berbeda — memilih payung yang tepat menentukan kekuatan perlindungan Anda.",
      "Banyak kreator dan inovator kehilangan haknya bukan karena hukum lemah, melainkan karena bukti ciptaan pertama lemah dan pendaftaran terlambat. Ketika sengketa datang — karya dipakai pesaing, kode dicuri mantan karyawan — sertifikat DJKI dan jejak tanggal yang rapi adalah senjata penentu di meja perundingan maupun pengadilan.",
      "Digiman membantu dari penyusunan dokumen ciptaan (deskripsi, kode, sketsa) hingga sertifikat terbit, dengan saran strategis: apa yang perlu didaftar sebagai hak cipta, apa yang layak diupayakan sebagai paten, dan mana yang lebih dilindungi lewat rahasia dagang. Perlindungan yang cerdas, bukan sekadar mahal.",
    ],
    benefits: [
      { title: "Bukti kepemilikan resmi", desc: "Sertifikat DJKI + tanggal tercatat: bukti prima saat sengketa kepemilikan meletus." },
      { title: "Semua jenis karya", desc: "Naskah, musik, desain grafis, aplikasi/kode program, hingga karya arsitektur — satu pintu." },
      { title: "Strategi IP cerdas", desc: "Kami sarankan payung yang benar per aset: hak cipta, paten, desain industri, atau rahasia dagang." },
      { title: "Dokumentasi teknis presisi", desc: "Deskripsi invensi & klaim paten disusun sesuai standar pemeriksa — meningkatkan peluang diberi paten." },
      { title: "Senjata komersial", desc: "Lisensi, royalti, dan penjualan hak: aset IP terdaftar menghasilkan pendapatan jangka panjang." },
    ],
    process: [
      { title: "Pemetaan aset intelektual", desc: "Kami inventarisasi karya/inovasi Anda dan menentukan instrumen perlindungan terbaik masing-masing." },
      { title: "Penyusunan dokumen", desc: "Deskripsi ciptaan, klaim invensi, atau sketsa desain disusun presisi sesuai standar DJKI." },
      { title: "Pengajuan resmi", desc: "Pendaftaran ke DJKI dengan tanggal penerimaan yang menjadi jejak hukum Anda." },
      { title: "Pemantauan & respons", desc: "Proses diperiksa berkala; bila ada keberatan/koreksi, kami susun responsnya." },
      { title: "Sertifikat & panduan", desc: "Sertifikat diserahkan plus panduan memanfaatkan hak (lisensi, penegakan, pembaruan)." },
    ],
    requirements: [
      "Karya/inovasi lengkap (naskah, kode, gambar teknis, atau deskripsi)",
      "KTP & NPWP pencipta/pemegang hak",
      "Klarifikasi siapa pencipta vs pemegang hak (bisa berbeda)",
      "Email aktif & nomor HP",
      "Riwayat publikasi karya (penting untuk penilaian paten)",
    ],
    faqs: [
      { q: "Apa beda hak cipta dan paten secara sederhana?", a: "Hak cipta melindungi ekspresi karya (tulisan, gambar, kode, musik) — otomatis ada sejak karya diciptakan, pendaftaran memperkuat bukti. Paten melindungi ide teknis yang dipakai (cara kerja alat/metode) — tidak otomatis, harus diajukan dan lulus pemeriksaan substantif. Jika Anda bikin aplikasi: kode = hak cipta; algoritme/mekanisme uniknya = paten (bila memenuhi syarat)." },
      { q: "Apakah source code aplikasi saya bisa didaftarkan?", a: "Ya — program komputer dilindungi hak cipta dan dapat didaftarkan ke DJKI dengan mengumpulkan cuplikan kode dan deskripsi. Praktik terbaik: daftarkan setelah rilis versi stabil utama, dan kelola NDA + kontrak kerja bagi developer agar kepemilikan penuh berada di tangan perusahaan Anda." },
      { q: "Berapa lama perlindungannya?", a: "Hak cipta bertahan seumur hidup pencipta ditambah 70 tahun (karya pribadi) atau 50 tahun sejak publikasi (karya badan hukum/karya tertentu). Paten berlaku 20 tahun sejak tanggal penerimaan dengan pembayaran tahunan. Desain industri 10 tahun. Kami mengingatkan dan mengelola seluruh tenggat pembaruan untuk Anda." },
    ],
    related: ["pendaftaran-merek", "franchise", "legal-drafting"],
  },
  {
    slug: "franchise",
    tagline: "Perluas bisnis lewat mitra — lisensi franchise (STPW) yang sah dan menguntungkan.",
    heroSub:
      "Perizinan STPW, penyusunan prospeltus & perjanjian franchise yang melindungi brand Anda di setiap mitra.",
    timeline: "10–20 hari kerja",
    intro: [
      "Franchise adalah mesin ekspansi terbukti: mitra menanggung biaya dan risiko lokasi, Anda menyewakan merek, sistem, dan reputasi. Namun di Indonesia, menjual hak waralba tanpa Surat Tanda Pendaftaran Waralba (STPW) adalah pelanggaran — dan perjanjian yang longgar adalah undangan konflik: mitra melanggar SOP, membuka cabang liar, atau merusak reputasi brand di wilayahnya.",
      "Struktur franchise yang sehat membutuhkan dua dokumen inti: STPW dari Kemenperin/dinas terkait (menjadikan usaha Anda sah sebagai pemberi waralba) dan perjanjian franchise yang detail — wilayah, royalti, standar operasional, durasi, hingga mekanisme putus. Ditambah prospeltus waralba yang jujur dan lengkap sesuai regulasi.",
      "Tim kami menyusun semuanya: audit kesiapan brand (seberapa layak bisnis Anda difranchisekan), dokumen STPW, prospeltus, dan perjanjian yang menyeimbangkan kepentingan kedua pihak — sehingga ekspansi Anda cepat tanpa mengorbankan kontrol kualitas.",
    ],
    benefits: [
      { title: "STPW resmi", desc: "Status pemberi waralba sah — aman dari sanksi dan meyakinkan calon mitra." },
      { title: "Perjanjian presisi", desc: "Wilayah, royalti, SOP, audit, dan sanksi ditulis jelas — konflik mitra dicegah sejak awal." },
      { title: "Prospeltus lengkap", desc: "Profil usaha, biaya, dan proyeksi disusun sesuai regulasi — kewajiban hukum terpenuhi." },
      { title: "Audit kesiapan brand", desc: "Kami nilai apakah sistem bisnis Anda sudah layak difranchisekan — jujur, sebelum Anda berinvestasi besar." },
      { title: "Ekspansi modal mitra", desc: "Tumbuh tanpa menambah hutang: mitra yang menyetor, Anda yang mengendalikan standar." },
    ],
    process: [
      { title: "Audit kesiapan franchise", desc: "Kami nilai sistem bisnis: dokumentasi SOP, profitabilitas unit, dan repeatability operasional." },
      { title: "Penyusunan dokumen inti", desc: "Prospeltus waralba + rancangan perjanjian franchise disusun sesuai regulasi & kepentingan Anda." },
      { title: "Pengajuan STPW", desc: "Dokumen perizinan diajukan ke instansi hingga STPW terbit atas brand Anda." },
      { title: "Paket mitra siap jual", desc: "Anda menerima paket dokumen franchise lengkap — siap dipresentasikan ke calon mitra." },
    ],
    requirements: [
      "Dokumen badan usaha (PT/CV) & merek terdaftar DJKI (bila sudah)",
      "Profil bisnis: model, SOP, harga jual-cetak, profitabilitas unit",
      "Rencana royalti & fee yang diinginkan (kami bantu bandingkan standar pasar)",
      "KTP & NPWP pemilik",
      "Data cabang/mitra yang sudah ada (bila pernah jalankan pilot)",
    ],
    faqs: [
      { q: "Apakah merek harus terdaftar dulu sebelum franchise?", a: "Ya — merek yang akan difranchisekan harus terdaftar di DJKI atas nama pemberi waralba. Tanpa sertifikat merek, Anda praktis menyewakan sesuatu yang belum pasti milik Anda. Bila merek belum terdaftar, kami urus pendaftarannya terlebih dahulu sebagai tahap awal paket franchise." },
      { q: "Berapa royalti yang wajar untuk franchise?", a: "Umumnya di Indonesia berkisar 5–10% dari omzet, plus biaya awal (franchise fee) sesuai nilai brand — namun angka yang tepat bergantung pada margin bisnis dan dukungan yang Anda berikan mitra. Kami membantu menyusun struktur fee yang menarik bagi mitra namun sehat bagi Anda." },
      { q: "Bagaimana mengatasi mitra yang melanggar standar?", a: "Kuncinya di perjanjian: definisi pelanggaran yang jelas, grace period perbaikan, sanksi bertingkat, dan mekanisme pengakhiran yang bisa dieksekusi. Bersama itu, audit berkala dan sistem monitoring (POS terintegrasi, mystery shopper) menjaga standar sebelum pelanggaran membesar. Kami desain sistem ini untuk Anda." },
    ],
    related: ["pendaftaran-merek", "legal-drafting", "website-ecommerce"],
  },
];

/** KATEGORI: SERTIFIKASI PRODUK (4 layanan) */
export const sertifikasiContent: ServiceContent[] = [
  {
    slug: "sertifikasi-halal",
    tagline: "Logo halal yang menenangkan 230 juta konsumen Indonesia.",
    heroSub:
      "Sertifikasi Halal BPJPH lengkap: sistem jaminan produk halal (SJPH), audit, fatwa, hingga label halal di kemasan Anda.",
    timeline: "14–45 hari kerja (tergantung jalur & kesiapan)",
    intro: [
      "Sejak Undang-Undang Halal JPH, sertifikasi halal menjadi wajib bertahap untuk produk makanan-minuman, obat, kosmetik, dan produk lain yang diedarkan di Indonesia — dengan tenggat yang terus diperpanjang namun tidak bisa dihindari. Di mata konsumen Muslim Indonesia, logo halal bukan sekadar label: ia adalah keputusan beli yang instan.",
      "Sertifikasi halal modern bukan lagi sekadar surat dari lembaga: ia menuntut Sistem Jaminan Produk Halal (SJPH) yang terdokumentasi — komposisi bahan, chain supplier, proses produksi, penyimpanan, hingga SDM. Jalur reguler melewati BPJPH, PPH, audit, dan sidang fatwa; jalur mandiri tersedia bagi UMKM dengan pendampingan PPH lokal.",
      "Digiman menangani seluruh rangkaian: dari penyusunan SJPH yang benar, pengajuan ke BPJPH, koordinasi audit, sampai label halal terpasang di kemasan. Untuk UMKM, kami arahkan jalur yang paling hemat; untuk pabrik, kami susun sistem yang lolos audit sekaligus efisien operasional.",
    ],
    benefits: [
      { title: "Wajib hukum, aman bisnis", desc: "Patuh UU JPH dan tenggat wajib halal — tanpa risiko sanksi penarikan produk." },
      { title: "Keputusan beli konsumen", desc: "Logo halal menghilangkan keraguan konsumen Muslim — konversi jualan naik di pasar utama Indonesia." },
      { title: "SJPH yang operasional", desc: "Sistem halal kami desain supaya nyata dipakai harian, bukan dokumen untuk ditaruh di lemari." },
      { title: "Jalur terhemat untuk UMKM", desc: "Kami arahkan skema subsidi jalur mandiri bila Anda memenuhi syarat — biaya bisa jauh lebih hemat." },
      { title: "Sertifikat bertahan lama", desc: "Sertifikat halal berlaku 4 tahun dengan peninjauan — investasi kepatuhan jangka panjang." },
    ],
    process: [
      { title: "Analisis produk & bahan", desc: "Seluruh komposisi kami telusuri: bahan, aditif, chain supplier, hingga kecenderungan status halalnya." },
      { title: "Penyusunan SJPH", desc: "Sistem jaminan produk halal disusun: dokumen, SOP, tim internal, dan pelatihan dasar." },
      { title: "Pengajuan BPJPH", desc: "Pendaftaran produk & perusahaan di sistem BPJPH dengan seluruh lampiran yang benar." },
      { title: "Audit & fatwa", desc: "Audit lapangan didampingi; hasil diajukan ke komisi fatwa hingga penetapan halal." },
      { title: "Label & pemeliharaan", desc: "Logo halal kami bantu integrasikan ke kemasan, plus jadwal peninjauan 2 tahunan diingatkan." },
    ],
    requirements: [
      "NIB & dokumen badan usaha",
      "Daftar produk dan komposisi lengkap (lembar data bahan dari supplier bila perlu)",
      "Denah & foto area produksi, penyimpanan, dan pengemasan",
      "Data supplier bahan utama",
      "Foto produk & kemasan",
    ],
    faqs: [
      { q: "Apakah produk saya wajib sertifikasi halal sekarang?", a: "Kewajiban halal berjalan bertahap berdasarkan jenis produk dan skala usaha, dengan tenggat yang telah beberapa kali diperpanjang — namun arah akhirnya jelas: wajib semua. Menunggu tenggat berisiko: pasar sudah menuntut logo halal sekarang, dan kapasitas lembaga penuh mendekati deadline. Mulai lebih awal = lebih tenang." },
      { q: "Berapa biaya sertifikasi halal untuk UMKM?", a: "Banyak UMKM dapat memakai jalur pendampingan halal bersubsidi (gratis untuk sertifikatnya) melalui PPH lokal — yang perlu dibayar hanya pendampingan administrasi. Syarat utamanya skala usaha memenuhi kriteria UMKM dan produknya belum beredar luas. Kirim profil usaha Anda, kami periksa kelayakan subsidi ini." },
      { q: "Apakah sertifikat halal diakui untuk ekspor?", a: "Sertifikat halal Indonesia (BPJPH) semakin diakui internasional dan menjadi dasar mutual recognition dengan negara tertentu. Untuk pasar spesifik (misalnya JCC halal tertentu), kadang diperlukan tambahan sertifikasi lembaga setempat. Sampaikan pasar target Anda, kami petakan persyaratannya." },
    ],
    related: ["bpom", "sni", "nib-oss"],
  },
  {
    slug: "bpom",
    tagline: "Izin edar BPOM — tiket legal produk masuk ke seluruh pasar Indonesia.",
    heroSub:
      "Pengurusan izin edar POM-NA & notifikasi kosmetik: komposisi, label, hingga testing — produk Anda sah jual di marketplace dan toko.",
    timeline: "10–30 hari kerja (tergantung kategori produk)",
    intro: [
      "Produk makanan, minuman, obat, suplemen, dan kosmetik yang diedarkan di Indonesia wajib memiliki izin edar dari BPOM. Tanpa izin edar, marketplace bisa menurunkan listing Anda, distributor besar menolak bekerja sama, dan yang paling berat: sanksi penarikan produk dari peredaran — sekaligus reputasi brand yang sulit dipulihkan.",
      "Prosesnya menuntut presisi ganda: pengajuan sistem (e-registration BPOM) dan kelayakan produk itu sendiri — komposisi bahan yang dibolehkan, dosis, klaim, label sesuai standar, hingga hasil lab bila dituntut. Produk bagus pun sering tertolak hanya karena penulisan label atau komposisi yang tidak sesuai kaidah.",
      "Tim regulasi kami memeriksa produk Anda seperti pemeriksa BPOM: komposisi, label, klaim, dan file testing — lalu menyusun pengajuan yang benar sejak percobaan pertama. Untuk kosmetik tersedia jalur notifikasi yang lebih cepat; untuk makanan/minuman dan suplemen, kami petakan jalur MD/MOI yang tepat sesuai kategori Anda.",
    ],
    benefits: [
      { title: "Legal penuh di pasar", desc: "Produk sah beredar di seluruh Indonesia — marketplace, supermarket, dan distributor terbuka." },
      { title: "Audit pra-pengajuan", desc: "Komposisi & label kami periksa seperti pemeriksa — penolakan dicegah sebelum terjadi." },
      { title: "Label yang benar", desc: "Sistem penandaan sesuai standar BPOM disusun untuk Anda: komposisi, klaim, logo, dan batas use." },
      { title: "Koordinasi lab terpercaya", desc: "Bila testing dituntut, kami atur ke laboratorium terakreditasi dengan jadwal yang terkontrol." },
      { title: "Perpanjangan terjadwal", desc: "Izin edar punya masa berlaku — sistem kami mengingatkan dan mengurus pembaruannya tepat waktu." },
    ],
    process: [
      { title: "Klasifikasi produk", desc: "Produk dipetakan ke kategori yang tepat (MD/MOI/notifikasi) — menentukan jalur, biaya, dan lama proses." },
      { title: "Audit komposisi & label", desc: "Kami periksa bahan (dibolehkan/tidak, dosis aman) dan label terhadap standar BPOM, lalu sarankan perbaikan." },
      { title: "Persiapan dokumen & testing", desc: "HACCP/komposisi/label/testing disiapkan sesuai kebutuhan kategori produk Anda." },
      { title: "Pengajuan e-registration", desc: "Pengajuan resmi di sistem BPOM dengan seluruh lampiran yang benar." },
      { title: "Izin terbit & pelaporan", desc: "Nomor izin edar kami serahkan plus panduan kewajiban pasca-terbit (perubahan formulasi, reklame, dst.)." },
    ],
    requirements: [
      "NIB & dokumen badan usaha",
      "Formulasi/komposisi lengkap produk (persentase bahan)",
      "Artwork label/kemasan (yang akan dipakai)",
      "Sertifikat halal/daftar status bahan (bila ada)",
      "Data pabrik/tempat produksi (milik atau kontrak produksi)",
    ],
    faqs: [
      { q: "Apa beda izin edar MD dan MOI?", a: "MD (Murni Dalam Negeri) untuk produk yang bahan dasarnya diproduksi di Indonesia; MOI (Melalui Impor) untuk produk dengan bahan dasar impor atau produk impor jadi. Klasifikasi ini menentukan formulir, dokumen, dan tingkat kesulitan pengajuan. Kami menilai struktur produksi Anda dan memilih jalur yang tepat sejak awal." },
      { q: "Apakah kosmetik juga butuh izin edar BPOM?", a: "Kosmetik memakai mekanisme notifikasi (bukan izin edar penuh) — prosesnya lebih ringan namun tetap wajib dan menuntut kebenaran formulasi & label. Notifikasi kosmetik adalah layanan rutin kami; rata-rata produk klien kami sah jual dalam hitungan hari setelah dokumen lengkap." },
      { q: "Produk saya diproduksi pihak ketiga (contract manufacturing), izin atas siapa?", a: "Izin edar atas nama pemilik merek, dengan syarat pabrik memiliki izin produksi dan kontrak produksi yang jelas. Kami menyiapkan struktur dokumen yang tepat: kontrak, sertifikat pabrik, dan surat kuasa — sehingga izin sah dan hubungan produksi Anda terlindungi." },
    ],
    related: ["sertifikasi-halal", "sni", "website-ecommerce"],
  },
  {
    slug: "sni",
    tagline: "SNI — standar yang membuka gerbang pasar besar dan tender.",
    heroSub:
      "Sertifikasi SNI: penyusunan sistem mutu, pengujian lab, audit pabrik, hingga sertifikat terbit untuk produk wajib & strategis.",
    timeline: "30–90 hari kerja (tergantung produk)",
    intro: [
      "Standar Nasional Indonesia (SNI) adalah tanda produk Anda memenuhi kriteria mutu nasional. Untuk sejumlah produk, SNI wajib menurut regulasi (pupuk, besi, sepeda motor helm, kabel, dan puluhan kategori lain); untuk produk lain, SNI adalah keunggulan kompetitif yang menentukan siapa yang menang tender dan rak supermarket modern.",
      "Jalur sertifikasi menuntut tiga kesiapan sekaligus: sistem manajemen mutu di pabrik (prosedur, pencatatan, kontrol produksi), keberhasilan pengujian sampel di lab terakreditasi, dan kelulusan audit pabrik oleh lembaga sertifikasi (LSPro). Produk yang gagal uji memaksa pengulangan — yang paling merugikan waktu bagi pebisnis yang menunggu masuk pasar.",
      "Digiman mengelola sertifikasi end-to-end: kajian standar SNI yang berlaku untuk produk Anda, persiapan sistem mutu, koordinasi pengujian lab, pendampingan audit, sampai sertifikat terbit. Kami juga menjaga siklus lanjutannya: surveilans berkala dan pembaruan agar sertifikat tidak mati di tengah kontrak Anda.",
    ],
    benefits: [
      { title: "Syarat masuk pasar wajib", desc: "Produk kategori wajib SNI tidak bisa beredar tanpa sertifikat — ini tiket masuknya." },
      { title: "Menang tender & retail", desc: "SNI menjadi poin penentu dalam tender pemerintah dan syarat listing retail modern." },
      { title: "Sistem mutu yang hidup", desc: "Prosedur & pencatatan mutu kami susun untuk dipakai operator harian, bukan dekorasi audit." },
      { title: "Kesempatan uji maksimal", desc: "Pramu-uji internal sebelum lab resmi memangkas risiko gagal dan mengulang — waktu Anda terlindungi." },
      { title: "Siklus sertifikasi terjaga", desc: "Jadwal surveilans & pembaruan terpantau — sertifikat tidak pernah mati tanpa Anda sadari." },
    ],
    process: [
      { title: "Kajian standar produk", desc: "Kami tentukan SNI yang berlaku (beserta versi terbaru) dan seluruh parameter uji yang dituntut." },
      { title: "Persiapan sistem mutu", desc: "Prosedur produksi, pencatatan mutu, dan sarana kami rapikan sesuai yang akan diaudit." },
      { title: "Pengujian lab", desc: "Sampel diuji di lab terakreditasi KAN dengan parameter standar — hasil jadi dasar sertifikasi." },
      { title: "Audit pabrik", desc: "LSPro mengaudit sistem & sarana; tim kami dampingi hingga temuan selesai." },
      { title: "Sertifikat & surveilans", desc: "Sertifikat terbit, logo SNI terpasang di produk — jadwal surveilans berikutnya kami kelola." },
    ],
    requirements: [
      "NIB & dokumen badan usaha",
      "Spesifikasi produk & proses produksi (bahan, mesin, kapasitas)",
      "Data pabrik: denah, foto, daftar alat uji",
      "Sampel produk untuk pengujian",
      "SDM yang mengelola produksi (bila ada sertifikasi teknis)",
    ],
    faqs: [
      { q: "Apakah produk saya wajib SNI?", a: "Daftar produk wajib SNI ditetapkan pemerintah dan terus bertambah. Ciri cepatnya: kategori yang berdampak keselamatan (helm, kabel, gas, pupuk, komponen kendaraan, dll.). Kirim nama produk Anda; kami jawab status kewajibannya beserta dasar regulasinya — gratis, dalam hitungan jam." },
      { q: "Kenapa sertifikasi SNI bisa memakan 1–3 bulan?", a: "Karena tiga tahap wajibnya: pengujian lab (antrean lab + waktu uji), audit pabrik (penjadwalan LSPro), dan keputusan sertifikasi. Percepatan terbaik bukan lewat jalan pintas, melainkan kesiapan: pabrik yang rapi dan pramu-uji yang lolos membuat audit & pengujian sekali jalan. Di situ kami memangkas waktu paling banyak." },
      { q: "Sertifikat SNI berlaku berapa lama?", a: "Umumnya 4 tahun dengan surveilans tahunan (audit ringan + pengujian berkala) untuk memastikan mutu konsisten. Lembaga kami ingatkan dan dampingi setiap siklusnya — banyak pemilik sertifikat kehilangan sertifikat bukan karena gagal uji, melainkan lupa surveilans." },
    ],
    related: ["iso", "sertifikasi-halal", "bpom"],
  },
  {
    slug: "iso",
    tagline: "ISO — bahasa kepercayaan global untuk perusahaan Anda.",
    heroSub:
      "Sertifikasi ISO 9001, 14001, 45001, 27001 dan lainnya: gap analysis, penyusunan sistem manajemen, hingga audit sertifikasi.",
    timeline: "45–120 hari kerja (tergantung jenis ISO & kesiapan)",
    intro: [
      "Sertifikasi ISO adalah cara perusahaan berkata 'kami serius' dalam bahasa yang dipahami dunia: ISO 9001 untuk manajemen mutu, 14001 untuk lingkungan, 45001 untuk keselamatan kerja, 27001 untuk keamanan informasi, 22000 untuk keamanan pangan. Perusahaan besar, tender korporasi, dan mitra internasional menanyakan ISO bukan sebagai gaya — melainkan sebagai filter kelayakan.",
      "Nilai ISO sejati bukan di sertifikatnya, melainkan di sistem yang dibangun: proses yang terdokumentasi, tanggung jawab yang jelas, perbaikan berkelanjutan. Perusahaan yang mengimplementasikan ISO dengan benar melaporkan efisiensi operasional, retensi pelanggan, dan insiden yang menurun — sertifikat hanya puncak esnya.",
      "Tim kami mengelola jalur penuh: gap analysis jujur terhadap kondisi sekarang, penyusunan dokumen sistem manajemen yang realistis (bukan copy-paste templat), pelatihan SDM, audit internal, hingga hari audit sertifikasi bersama LSPro terakreditasi. Hasilnya: sertifikat yang sah dan sistem yang benar-benar bekerja untuk bisnis Anda.",
    ],
    benefits: [
      { title: "Kunci tender & korporat", desc: "Banyak tender dan kemitraan besar mensyaratkan ISO — sertifikat membuka pintu yang tertutup." },
      { title: "Operasional lebih efisien", desc: "Proses terdokumentasi & diukur: pemborosan terlihat, perbaikan terarah, kinerja stabil." },
      { title: "Kepercayaan internasional", desc: "ISO dikenali lintas negara — mempermudah ekspansi dan negosiasi dengan mitra global." },
      { title: "Risiko terkendali", desc: "Sistem manajemen risiko (khususnya 45001/27001) melindungi perusahaan dari kerugian besar." },
      { title: "Implementasi realistis", desc: "Dokumen kami susun dari kondisi nyata perusahaan Anda — tim ikut memakainya, bukan menolaknya." },
    ],
    process: [
      { title: "Gap analysis", desc: "Kami petakan jarak antara praktik sekarang dan klausul standar ISO — laporan plus rencana perjalanan." },
      { title: "Penyusunan sistem", desc: "Kebijakan, prosedur, SOP, dan instrumen pemantauan disusun dan disosialisasikan ke tim." },
      { title: "Implementasi & audit internal", desc: "Sistem dijalankan 1–2 siklus penuh; audit internal menguji kesiapan sebelum pemeriksa datang." },
      { title: "Audit sertifikasi", desc: "LSPro terakreditasi mengaudit; temuan minor kami dampingi perbaikannya." },
      { title: "Sertifikat & pemeliharaan", desc: "Sertifikat terbit untuk 3 tahun — surveilans tahunan kami kelola agar tak pernah gugur." },
    ],
    requirements: [
      "NIB & dokumen badan usaha",
      "Struktur organisasi & daftar proses utama bisnis",
      "Jumlah karyawan & lokasi operasional (multi-situs menambah cakupan audit)",
      "Jenis ISO yang ditargetkan (atau kami rekomendasikan sesuai tujuan bisnis)",
      "Komitmen waktu manajemen puncak untuk sosialisasi sistem",
    ],
    faqs: [
      { q: "ISO mana yang paling tepat untuk perusahaan saya?", a: "ISO 9001 adalah fondasi terumum (mutu & kepuasan pelanggan). Untuk manufaktur berisiko lingkungan: 14001; kesehatan-keselamatan kerja: 45001; perusahaan IT/perdataan sensitif: 27001; pangan: 22000/HACCP. Banyak perusahaan membangun sistem terintegrasi. Ceritakan tujuan bisnis Anda — kami rekomendasikan jalurnya." },
      { q: "Berapa biaya sertifikasi ISO?", a: "Tiga komponen: biaya LSPro (tergantung jumlah karyawan & situs), biaya implementasi sistem (dokumen, pelatihan, perbaikan), dan pemeliharaan tahunan. Kami selalu transparan memecahnya sejak awal — dan mencari titik efisien tanpa memotong substansi sistem." },
      { q: "Apakah perusahaan kecil layak mengambil ISO?", a: "Layak dan sering justru berdampak paling besar: sistem yang rapi menyiapkan usaha kecil untuk tumbuh cepat tanpa chaos, dan ISO menjadi pembeda saat bersaing dengan pemain besar. Skala standarnya sama; kami menyesuaikan kedalaman dokumen dengan ukuran tim Anda — bukan menenggelamkan Anda dalam kertas." },
    ],
    related: ["sni", "otomasi-ai", "aplikasi-sistem"],
  },
];
