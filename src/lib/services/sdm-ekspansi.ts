import type { ServiceContent } from "./types";

/**
 * Konten editorial — EKSPANSI SDM & KETENAGAKERJAAN (3 layanan baru).
 * KITAS investor, SMK3, sertifikasi kompetensi BNSP.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const sdmEkspansiContent: ServiceContent[] = [
  {
    slug: "kitas-investor",
    tagline: "Investor dan direksi PMA tinggal legal — tanpa RPTKA, tanpa antre panjang.",
    heroSub:
      "KITAS jalur investor (indeks D2) untuk pemegang saham, komisaris, dan direksi PMA — tinggal 1–2 tahun di Indonesia untuk mengurus bisnis Anda sendiri, dengan kemampuan keluar-masuk negara bebas.",
    timeline: "2–4 minggu dari dokumen lengkap hingga KITAS aktif",
    intro: [
      "Pendiri dan direksi PT PMA sering terjebak dilema: perusahaan sudah berdiri, keputusan bisnis harus diambil di lokasi, tetapi tinggal di Indonesia butuh izin tinggal yang benar. Jalur KITAS pekerja asing (RPTKA) ditujukan untuk karyawan — padahal investor dan direksi punya jalurnya sendiri: KITAS indeks D2, dirancang khusus untuk pemegang saham, komisaris, dan direksi perusahaan asing/PMA. Keunggulannya bukan cuma status: tidak perlu RPTKA (perizinan tenaga kerja asing), tidak ada DPKK/Dana Kesejahteraan Karya, dan direksi utama dibebaskan sebagian kewajiban itu oleh aturan tersendiri.",
      "Kekeliruan yang paling mahal: memakai paspornya bolak-balik dengan visa on arrival lalu meneruskannya sampai kelebihan tinggal — denda, deportasi, sampai larangan masuk adalah risiko nyatanya. Keliru kedua: memakai KITAS pekerja untuk direksi dengan beban biaya RPTKA yang tidak perlu. Keliru ketiga: dokumen perusahaan belum sinkron (modal disetor, susunan direksi di akta, keterisian laporan LKPM) sehingga pengajuan ditolak atau dipersulit di Imigrasi.",
      "Kami menangani rangkaiannya utuh: audit kesiapan dokumen perusahaan (modal, akta, struktur), e-visa indeks D2, KITAS 1–2 tahun sesuai kebutuhan, MERP (izin keluar-masuk berkali-kali) agar perjalanan bisnis Anda ke luar negeri tetap lancar, sampai kartu tinggal tercetak dan batas-batas yang harus diingat dijelaskan — kapan harus keluar, bagaimana perpanjangannya, dan apa yang membuat KITAS dicabut. Anda tinggal mengurus bisnis; legalitas tinggal Anda beres.",
    ],
    benefits: [
      { title: "Tanpa RPTKA & DPKK", desc: "Jalur investor membebaskan Anda dari perizinan tenaga kerja asing dan dana kesejahteraannya — biaya & waktu jauh lebih hemat." },
      { title: "Tinggal 1–2 tahun sekaligus", desc: "Tidak bolak-balik perpanjang tiap bulan — status tinggal stabil mengikuti masa komitmen bisnis Anda." },
      { title: "Keluar-masuk bebas (MERP)", desc: "Perjalanan bisnis ke Singapura, Shenzhen, atau mana pun tetap jalan — masuk kembali tanpa mengurus visa baru." },
      { title: "Dokumen perusahaan disinkronkan", desc: "Modal disetor, akta, dan struktur direksi dicek benar sebelum diajukan — tingkat persetujuan maksimal." },
      { title: "Semua dilema dijelaskan di awal", desc: "Batas tinggal, aturan kerja vs mengurus, kewajiban pajak — Anda tahu seluruh aturan main sebelum tanda tangan apa pun." },
    ],
    process: [
      { title: "Audit kesiapan & jalur", desc: "Struktur saham, modal disetor, dan posisi Anda di perusahaan diperiksa — ditetapkan indeks & durasi KITAS yang tepat." },
      { title: "E-Visa D2", desc: "Visa indeks investor diajukan ke Imigrasi — persetujuan elektronik umumnya cepat setelah dokumen lengkap." },
      { title: "Kedatangan & KITAS", desc: "Setibanya di Indonesia: foto, tanda tangan, penerbitan KITAS & MERP — proses di kantor imigrasi kami dampingi penuh." },
      { title: "Kepatuhan berjalan", desc: "Panduan batas tinggal, pengembangan ke KITAP (bila berminat), dan sinkronisasi dengan kewajiban perusahaan (LKPM, pajak)." },
    ],
    requirements: [
      "PT PMA / perusahaan asing yang mempekerjakan Anda sebagai pemegang saham, komisaris, atau direksi",
      "Paspornya masih berlaku minimal 18 bulan (sebaiknya 30 bulan untuk KITAS 2 tahun)",
      "Dokumen perusahaan: akta & pengesahan, NIB, bukti penempatan modal (kami pandu bila belum rapi)",
      "Pasfoto latar merah & data pribadi terkini",
      "Alamat tinggal di Indonesia (hotel/properti sewa — kami jelaskan formatnya saat konsultasi)",
    ],
    faqs: [
      { q: "Saya pemegang saham tapi belum menyetor modal penuh — masih bisa KITAS investor?", a: "Bisa diproses, tetapi bukti penempatan modal yang realistis sangat memengaruhi kelancaran persetujuan — imigrasi menguji keseriusan investasi dari data perusahaan. Untuk modal yang belum menetap, strateginya kami susun bersama: menyinkronkan penempatan modal dengan pengajuan, atau memakai struktur posisi yang sesuai kondisi perusahaan Anda dulu, lalu upgrade saat modal terealisasi. Konsultasi awal kami menilai jalur mana yang paling mulus untuk kondisi Anda hari ini." },
      { q: "Apa bedanya KITAS investor dengan KITAS pekerja asing? Mana yang untuk saya?", a: "KITAS pekerja mensyaratkan RPTKA (rekomendasi Kemnaker atas posisi yang tidak bisa diisi WNI) plus DPKK — cocok untuk karyawan asing. KITAS investor (indeks D2) justru untuk pemilik/komisaris/direksi — tanpa RPTKA dan tanpa DPKK. Batas pentingnya: investor mengurus perusahaan (rapat saham, pengawasan, keputusan strategis), bukan memegang operasional harian sebagaimana karyawan. Bila Anda direksi yang juga menjalankan operasional, sering kali kombinasi kedua jalur justru yang tepat — kami petakan saat konsultasi." },
      { q: "Bisakah keluarga (istri/anak) ikut tinggal di Indonesia?", a: "Bisa — istri & anak investor dapat KITAS keluarga (dependent) yang terikat pada KITAS utama Anda, dengan hak tinggal yang mengikuti. Pernikahan sah dan akta kelahiran anak menjadi dasarnya. Perlu diingat: KITAS dependent tidak memberi hak bekerja; bila keluarga akan aktif bekerja/bisnis di Indonesia, jalur masing-masing perlu disiapkan. Kami urus keluarga dalam satu paket agar seluruh anggota tinggal legal sekaligus." },
    ],
    related: ["pt-pma", "kitas-rptka", "lkpm"],
  },
  {
    slug: "smk3",
    tagline: "Pekerja selamat, perusahaan tertib — keselamatan yang disertifikasi negara.",
    heroSub:
      "Sertifikasi Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) dari Kemnaker — wajib untuk perusahaan dengan pekerja 100 orang lebih atau berisiko tinggi, dan kami dampingi dari audit awal sampai sertifikat terbit.",
    timeline: "2–4 bulan tergantung kesiapan sistem",
    intro: [
      "SMK3 bukan formalitas: UU 1/1970 dan PP 50/2012 mewajibkan setiap perusahaan dengan pekerja 100 orang atau lebih (atau yang memiliki tingkat potensi bahaya tinggi) menerapkan sistem manajemen keselamatan dan kesehatan kerja — dan menerapkan berarti DISERTIFIKASI oleh Kemnaker. Perusahaan yang mengabaikannya menanggung risiko berlapis: sanksi administratif, penahanan perizinan, tanggung jawab penuh saat kecelakaan kerja terjadi, dan kehilangan nilai kualifikasi dalam tender — karena sertifikat SMK3 kini kerap diminta sebagai syarat dokumen kualifikasi.",
      "Kenyataan di lapangan: banyak perusahaan punya K3 di praktik (APAR, APD, safety talk) tapi tidak punya SISTEM — dokumen kebijakan, identifikasi bahaya, penilaian risiko, perencanaan, implementasi, pemantauan, serta tinjauan manajemen yang terstruktur dalam lima kriteria PP 50/2012. Saat audit eksternal Kemnaker datang, yang dinilai bukan niat baik, melainkan bukti sistem yang hidup: kebijakan yang diteken direksi, IDHL yang mutakhir, investigasi kejadian, catatan pelatihan, sampai kinerja K3 yang diukur dan ditinjau.",
      "Kami bangun sistemnya bersama Anda — bukan sekadar dokumen yang rapi saat audit lalu lembek setelahnya: gap analysis terhadap lima kriteria, penyusunan dokumen inti (kebijakan, IDHL, perencanaan, prosedur), pendampingan implementasi di lapangan, pelatihan internal kunci, penunjukan audit eksternal dari daftar Kemnaker, dan pendampingan hari-H audit sampai sertifikat terbit. Untuk perusahaan yang juga membutuhkan Ahli K3 (umum/khusus) — termasuk rekrutmen personel atau sertifikasi tim sendiri — semuanya dalam satu kendali proyek.",
    ],
    benefits: [
      { title: "Patuhi kewajiban hukum", desc: "Kepatuhan penuh atas UU 1/1970 & PP 50/2012 — bebas dari sanksi administratif dan risiko hukum saat inspeksi." },
      { title: "Nilai kualifikasi tender naik", desc: "Sertifikat SMK3 menjadi poin kualifikasi di banyak tender BUMN/pemerintah — peluang proyek Anda melebar." },
      { title: "Kecelakaan & biaya turun", desc: "Sistem yang hidup menekan angka kecelakaan — kompensasi, klaim BPJS, dan gangguan produksi menurun bersamaan." },
      { title: "Sistem yang benar-benar hidup", desc: "Dokumen + implementasi lapangan dibangun bersama — audit lewat, sistem tetap berjalan oleh tim Anda sendiri." },
      { title: "Audit eksternal terkendali", desc: "Pemilihan auditor Kemnaker, jadwal, dan pendampingan hari-H — tidak ada kejutan saat penilaian berlangsung." },
    ],
    process: [
      { title: "Gap analysis & perencanaan", desc: "Kondisi K3 Anda saat ini dipetakan terhadap lima kriteria PP 50/2012 — rencana kerja, jadwal, dan penanggung jawab tersusun." },
      { title: "Penyusunan sistem & dokumen", desc: "Kebijakan K3, IDHL, perencanaan, prosedur kritis, dan format pemantauan disusun — disesuaikan realitas operasional Anda." },
      { title: "Implementasi & pelatihan", desc: "Sistem dijalankan di lapangan: safety talk, inspeksi, investigasi, pelatihan — tim internal dilatih memegangnya sendiri." },
      { title: "Audit eksternal & sertifikat", desc: "Audit eksternal Kemnaker dijalankan dengan pendampingan penuh — temuan diperbaiki cepat, sertifikat terbit dan masa berlaku terkelola." },
    ],
    requirements: [
      "Data profil perusahaan: jumlah pekerja, jenis kegiatan, potensi bahaya (penentu kewajiban & skema)",
      "Struktur organisasi & penunjukan personel K3 (bila belum ada, kami bantu susun)",
      "Dokumen K3 yang sudah ada (kebijakan, catatan inspeksi, pelatihan — di awal apa adanya, kami susun ulang)",
      "Data kecelakaan kerja / near-miss bila ada (bahan analisis, bukan alasan penolakan)",
      "Komitmen manajemen — kebijakan K3 diteken direksi adalah fondasi yang tidak bisa digantikan siapa pun",
    ],
    faqs: [
      { q: "Perusahaan saya di bawah 100 pekerja — apakah bebas dari SMK3?", a: "Yang wajib DISERTIFIKASI SMK3 adalah perusahaan 100+ pekerja atau berpotensi bahaya tinggi. Di bawah itu, kewajibannya tetap ada namun lebih ringan: menerapkan SMK3 versi sederhana (kewajiban P4GN dan penerapan K3 tetap berjalan dari UU Ketenagakerjaan). Praktisnya banyak perusahaan kecil justru membangun sistemnya sejak sekarang — bukan hanya karena pertumbuhan akan memicu kewajiban, tetapi juga karena klien besar & tender mulai memintanya meski belum wajib hukum." },
      { q: "Berapa lama berlaku sertifikat SMK3 dan harus diperbarui setiap kapan?", a: "Sertifikat SMK3 berlaku 3 tahun, dengan audit penilaian (surveillance) di tengah masa berlaku untuk memastikan sistem tetap dijalankan. Setelah 3 tahun, perusahaan mengajukan re-sertifikasi. Bagi banyak perusahaan, titik lemahnya bukan audit pertama, melainkan menjaga sistem tetap hidup di antara audit — karena itu model layanan kami menitikberatkan pelatihan tim internal, bukan sekadar lolos audit." },
      { q: "Apa hubungan SMK3 dengan Ahli K3 dan apakah harus punya dua-duanya?", a: "Dua hal yang berbeda namun saling terkait: SMK3 adalah SISTEM manajemen yang disertifikasi ke perusahaan; Ahli K3 adalah PERSONEL kompeten yang ditunjuk untuk menjalankan fungsi K3 (wajib untuk perusahaan tertentu sesuai Permenaker). Perusahaan besar umumnya butuh keduanya: sistemnya diertifikasi, personelnya bersertifikat. Kami menangani keduanya dalam satu perencanaan — sertifikasi Ahli K3 umum/khusus untuk tim Anda, atau penunjukan jalurnya — supaya tidak ada yang tumpang tindih atau terlewat." },
    ],
    related: ["bnsp", "bpjs", "iso"],
  },
  {
    slug: "bnsp",
    tagline: "Kompetensi yang diakui negara — modal kerja bagi individu, kualitas bagi perusahaan.",
    heroSub:
      "Sertifikat Kompetensi BNSP untuk personel dan pekerja — dari pemilihan skema, pelatihan, uji kompetensi di TUK, sampai sertifikat resmi terbit. Syarat seleksi kerja, tender, dan perizinan sektor.",
    timeline: "2–4 minggu dari daftar hingga ujian",
    intro: [
      "Sertifikat Kompetensi BNSP adalah pengakuan resmi bahwa seseorang mampu melakukan pekerjaan tertentu sesuai standar nasional — bukan sekadar ijazah yang membuktikan pernah belajar, melainkan bukti BISA. Di banyak titik, dokumen ini menjadi gerbang yang tidak bisa dilewati: syarat SKA/SKT personel konstruksi, tenaga teknis di perizinan sektor (misalnya operator boiler, tukang terampil di proyek), persyaratan tender yang meminta personel bersertifikat, hingga seleksi kerja di perusahaan besar dan instansi pemerintah.",
      "Prosesnya punya tahapan yang sering membuat orang menyerah di tengah: memilih skema yang benar sesuai jabatan dan pengalaman, menyiapkan portfolio bukti kerja (portofolio adalah inti penilaian — bukan sekadar menghadiri pelatihan), mengikuti asesmen dengan asesor bersertifikat di TUK (Tempat Uji Kompetensi) terakreditasi, lalu mengurus sertifikat ke LSP. Kesalahan memilih skema atau portofolio yang lemah mengakhiri proses dengan TIDAK KOMPETEN — uang dan waktu hilang, ujian harus diulang.",
      "Kami mengurusi jalannya dari awal: pemetaan jabatan → skema yang tepat, persiapan portofolio yang kuat bersama Anda (format bukti kerja, surat rekomendasi, foto kegiatan), pendaftaran di LSP/TUK terdekat atau fleksibel, pendampingan pra-uji (aspek apa yang dinilai, bagaimana menjawab wawancara asesmen), sampai sertifikat terbit dan masa berlaku 3 tahunnya terkelola. Untuk perusahaan yang ingin mensertifikasi sekelompok pegawai sekaligus — kami susun jadwal & skema massal yang efisien.",
    ],
    benefits: [
      { title: "Gerbang karier & tender terbuka", desc: "Sertifikat resmi memenuhi syarat seleksi kerja, kualifikasi personel tender, dan persyaratan perizinan sektor." },
      { title: "Skema yang tepat sejak awal", desc: "Jabatan dipetakan ke skema yang benar — tidak salah daftar ke skema yang tidak sesuai pengalaman." },
      { title: "Portofolio yang kuat", desc: "Bukti kerja disusun formatnya sebelum uji — penilaian berjalan mulus, risiko 'belum kompeten' minim." },
      { title: "TUK fleksibel & terdekat", desc: "Ujian di Tempat Uji Kompetensi terakreditasi — jadwal dan lokasi disesuaikan, untuk tim perusahaan bisa di tempat Anda." },
      { title: "Satu layanan untuk tim penuh", desc: "Sertifikasi sekelompok pegawai diatur massal — perusahaan memenuhi syarat personel dengan satu kendali." },
    ],
    process: [
      { title: "Pemetaan jabatan & skema", desc: "Pengalaman dan posisi tiap peserta dicocokkan ke skema yang benar — hindari daftar salah skema." },
      { title: "Persiapan portofolio", desc: "Bukti kerja, dokumen pendukung, dan format portofolio disiapkan — inti penilaian dikuasai sebelum hari uji." },
      { title: "Pendaftaran & uji kompetensi", desc: "Daftar di LSP/TUK yang tepat, uji berjalan dengan asesor bersertifikat — pra-uji kami dampingi." },
      { title: "Sertifikat & pemeliharaan", desc: "Sertifikat terbit, data tercatat — pengingat masa berlaku 3 tahun dan jalur perpanjangan dibimbing." },
    ],
    requirements: [
      "Data pribadi peserta: KTP, ijazah terakhir, dokumen pendukung lainnya",
      "Bukti pengalaman kerja sesuai skema (surat keterangan kerja, SPK, foto kegiatan — kami pandu formatnya)",
      "Daftar jabatan/skema yang dituju (bila ragu, kami petakan dari deskripsi pekerjaan Anda)",
      "Untuk perusahaan: daftar peserta + jabatan masing-masing (kami susun skema massal)",
      "Kesediaan mengikuti uji kompetensi di TUK (tatap muka — kami carikan jadwal & lokasi terbaik)",
    ],
    faqs: [
      { q: "Apa bedanya Sertifikat BNSP dengan SKA/SKT di konstruksi?", a: "Sertifikat BNSP diterbitkan lembaga sertifikasi profesi (LSP) di bawah kerangka BNSP untuk skema kompetensi umum maupun teknis — dipakai lintas industri. SKA (Ahli Teknik) dan SKT (Tukang Terampil) adalah sertifikat kompetensi personel khusus konstruksi yang diterbitkan LJK/LPJK — menjadi syarat di dalam SBU konstruksi. Alurnya sering begini: personel konstruksi menguji kompetensi via LSP-BNSP dulu, lalu SKA/SKT menerbitkannya di atas dasar itu. Kami urus keduanya — jadi personel Anda tertangani sampai kebutuhan akhirnya terpenuhi." },
      { q: "Portofolio saya minim karena kerja serba instansial — apakah tetap bisa uji?", a: "Sangat sering terjadi — dan justru di sinilah pendampingan kami paling berguna. Asesmen menilai bukti kemampuan sesuai unit kompetensi skema; buktinya bisa beragam: surat keterangan kerja dari atasan, dokumen proyek yang Anda kerjakan, foto/video kegiatan, hingga penugasan spesifik. Kami bantu memetakan pengalaman Anda ke unit-unit yang dinilai dan menyiapkan formatnya — peserta yang portofolionya kami siapkan bersama memiliki tingkat keberhasilan yang jauh lebih tinggi dibanding datang langsung tanpa persiapan." },
      { q: "Perusahaan kami ingin sertifikasi banyak pegawai sekaligus — bagaimana mekanismenya?", a: "Kami susun program massal: pemetaan jabatan seluruh peserta, pengelompokan skema (satu skema bisa menampung banyak peserta), jadwal asesmen berkelompok, dan bila jumlah memadai, TUK dapat berjalan di lokasi perusahaan Anda (asalkan memenuhi persyaratan tempat uji). Perusahaan mendapat satu kendali, satu laporan, dan biaya yang lebih efisien per peserta — plus semua kewajiban personel bersertifikat untuk perizinan/tender langsung tertutup." },
    ],
    related: ["smk3", "sbu-konstruksi", "bpjs"],
  },
];
