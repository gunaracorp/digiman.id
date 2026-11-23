import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — ESG & KEBERLANJUTAN (10 layanan).
 * Laporan keberlanjutan, jejak karbon & NZKC, kredit karbon, ESG rantai pasok,
 * gedung hijau, B Corp, EPR kemasan, pembiayaan hijau, EUDR, CSR & CDAS.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const esgContent: ServiceContent[] = [
  {
    slug: "laporan-keberlanjutan",
    tagline: "Cerita keberlanjutan Anda layak ditulis dengan angka yang bisa dipertanggungjawabkan.",
    heroSub:
      "Laporan Keberlanjutan standar GRI dan IFRS S1/S2 yang memenuhi POJK 51/2017 untuk emitens — sekaligus alasan buyer global, bank hijau, dan panitia tender memilih perusahaan Anda sebelum menilai kompetitor.",
    timeline: "8–14 minggu untuk laporan tahunan pertama, lebih ringkas di siklus berikutnya",
    intro: [
      "Bagi emiten dan perusahaan publik, Laporan Keberlanjutan bukan pilihan gaya hidup korporat — ia kewajiban regulasi. POJK 51/POJK.03/2017 menuntut setiap emiten dan perusahaan publik menyusun Laporan Keberlanjutan setiap tahun berisi praktik ekonomi, sosial, dan lingkungan yang disusun dengan matriks materialitas serta selaras dengan laporan tahunan. Di pasar global, acuannya berkembang pesat: GRI menjadi kerangka paling luas dipakai, sementara IFRS S1 dan S2 yang diterbitkan ISSB kini dituntut investor lintas negara. Perusahaan non-emiten pun merasakan tarikan yang sama: buyer global meminta laporan ESG sebelum menandatangani supply agreement, bank memintanya untuk fasilitas pembiayaan, dan panitia tender menjadikannya poin penilaian.",
      "Kesalahan yang paling sering membuat laporan gagal berfungsi: laporan disusun seperti brosur — penuh foto kegiatan, minim angka, tanpa baseline yang bisa dibandingkan tahun depan. Data lingkungan dikumpulkan mendadak di akhir tahun dari departemen yang tidak saling bicara, sehingga angka energi dan emisi tidak konsisten dengan data pajak dan operasional. Ada pula yang menyalin template laporan perusahaan lain — praktik yang berisiko tuduhan greenwashing begitu klausulnya tidak cocok dengan realita usaha. Laporan yang lemah ini tidak hanya memicu teguran OJK bagi emitens; di tangan buyer global, ia justru jawaban yang menggugurkan.",
      "Kami menangani laporan ini sebagai proyek data, bukan proyek desain. Dimulai dari penentuan materialitas ganda — apa yang penting bagi bisnis dan bagi pemangku kepentingan — lalu dibangun sistem pengumpulan data per departemen dengan template sederhana, struktur laporan mengikuti GRI/ISSB dan POJK 51/2017, sampai penulisan narasi, desain, dan publikasi. Setelah terbit, siklusnya kami tata agar tahun berikutnya tidak dimulai dari nol — baseline yang baik membuat laporan kedua jauh lebih murah dan jauh lebih kuat.",
    ],
    benefits: [
      { title: "Kepatuhan OJK tanpa drama", desc: "Struktur laporan selaras POJK 51/2017 sejak draf pertama — emiten tidak menunggu teguran untuk mulai menata data." },
      { title: "Menang hati buyer dan tender", desc: "Laporan ESG yang punya angka dan baseline menjadi bukti kelayakan — poin penilaian tender dan kuesioner buyer terjawab sebelum ditanya." },
      { title: "Data ESG jadi aset", desc: "Materialitas, baseline, dan indikator yang tertata dipakai ulang untuk pembiayaan hijau, audit buyer, dan roadmap net zero." },
      { title: "Aman dari tuduhan greenwashing", desc: "Setiap klaim ditopang data dan metodologi yang bisa dipertanggungjawabkan — narasi berhenti tepat di tempat data berhenti." },
      { title: "Siklus tahunan berjalan sendiri", desc: "Template data dan kalender pelaporan tertanam di proses perusahaan — tahun berikutnya cukup diperbarui, tidak dibangun ulang." },
    ],
    process: [
      { title: "Pemetaan materialitas ganda", desc: "Pemangku kepentingan dan topik material dipetakan lewat survei dan wawancara — matriks materialitas menjadi fondasi struktur laporan." },
      { title: "Sistem data ESG", desc: "Template pengumpulan data diserahkan ke tiap departemen — energi, air, limbah, SDM, dan sosial terkumpul dalam format yang bisa diaudit." },
      { title: "Penyusunan laporan", desc: "Narasi dan angka disusun mengikuti GRI/ISSB serta POJK 51/2017 — setiap klaim dipetakan ke data sumbernya." },
      { title: "Desain, publikasi, siklus", desc: "Laporan didesain layak publikasi dan diunggah ke kanal resmi — kalender serta template tahun berikutnya diserahkan ke tim Anda." },
    ],
    requirements: [
      "Profil perusahaan: kegiatan usaha, lokasi operasi, dan struktur organisasi",
      "Laporan tahunan atau laporan keuangan terakhir (rujukan konsistensi angka)",
      "Data operasional yang tersedia: tagihan listrik, air, limbah, data karyawan (kami petakan kolom yang dibutuhkan)",
      "Daftar program CSR, pelatihan, dan kegiatan lingkungan tahun berjalan",
      "Personel penghubung tiap departemen yang memegang data",
      "Daftar pemangku kepentingan utama: investor, buyer, mitra, masyarakat sekitar",
    ],
    faqs: [
      { q: "Apakah laporan keberlanjutan hanya wajib untuk perusahaan terbuka?", a: "Kewajiban resmi berlaku bagi emiten dan perusahaan publik melalui POJK 51/2017. Namun dalam praktiknya perusahaan tertutup juga dituntut: buyer global memintanya sebagai syarat kerja sama, bank memintanya untuk fasilitas pembiayaan berkelanjutan, dan tender tertentu menjadikannya poin penilaian. Banyak perusahaan non-emiten kami bantu menyusun laporan dengan struktur yang sama, dengan skala data yang disesuaikan ukuran usahanya." },
      { q: "Berapa lama menyusun laporan keberlanjutan dan berapa biayanya?", a: "Untuk laporan pertama, angka realistisnya 8–14 minggu — sebagian besar waktunya dipakai mengumpulkan data yang selama ini tidak tersimpan rapi. Laporan kedua biasanya 4–6 minggu karena baseline sudah berdiri. Biaya jasa kami mulai dari kisaran Rp 15 juta tergantung skala data dan jumlah lokasi, sedangkan biaya desain cetak dan verifikasi pihak ketiga (bila diminta buyer) dihitung terpisah dan transparan sejak penawaran." },
      { q: "Apakah satu laporan bisa dipakai untuk kebutuhan OJK sekaligus buyer global?", a: "Bisa, dan memang begitu desain yang benar. Prinsipnya satu: data inti (energi, emisi, SDM, sosial) dikumpulkan sekali dengan struktur rapi, lalu disajikan sesuai bahasa tiap audiens — struktur POJK 51/2017 untuk OJK, peta standar GRI atau IFRS S1/S2 untuk buyer dan investor. Kesalahan yang kami hindari adalah membuat dua dokumen terpisah dengan dua alur data — itu resep inkonsistensi yang berbahaya saat diperiksa silang." },
    ],
    related: ["jejak-karbon-nzkc", "esg-rantai-pasok", "iso", "pembiayaan-hijau"],
  },
  {
    slug: "jejak-karbon-nzkc",
    tagline: "Tidak ada target net zero yang serius sebelum angka emisinya berani bicara.",
    heroSub:
      "Penghitungan jejak karbon Scope 1, 2, dan 3 dengan GHG Protocol dan SNI ISO 14064, dilanjutkan roadmap Net Zero berjenjang menuju 2060 — dasar laporan ESG Anda sekaligus tiket masuk pasar karbon Indonesia.",
    timeline: "4–8 minggu tergantung ketersediaan data operasional",
    intro: [
      "Indonesia menargetkan net zero emission pada 2060 atau lebih cepat — dan arah kebijakannya sudah tertulis: Perpres 98/2021 menata pelaksanaan nilai ekonomi karbon, Sertifikat Pengurangan Emisi, dan Rencana Aksi Penurunan Emisi, sementara PP 98/2021 menegakkan kerangka hukumnya. Bagi perusahaan, langkah pertama yang tidak bisa dilewati adalah menghitung sendiri emisi gas rumah kacanya: Scope 1 untuk emisi langsung dari kegiatan (genset, kendaraan, boiler), Scope 2 untuk listrik yang dibeli, dan Scope 3 untuk rantai nilai — logistik, pembelian bahan baku, sampai perjalanan karyawan. Metodenya mengacu GHG Protocol Corporate Standard dan SNI ISO 14064-1, dua acuan yang juga dipakai verifikator dan buyer global.",
      "Kesalahan yang paling merusak kredibilitas: menghitung hanya Scope 1 dan 2 lalu mengklaim perusahaan hijau — padahal pada banyak sektor, Scope 3 justru porsi terbesar. Faktor emisi diambil dari sumber asal sehingga hasilnya runtuh saat diperiksa. Target net zero diumumkan tanpa baseline — artinya tidak ada garis ukur untuk membuktikan penurunan. Data energi terpencar di tagihan dan departemen berbeda sehingga penghitungan berhenti di tengah jalan. Semua itu baru terasa mahalnya saat laporan ESG diverifikasi, buyer menanyakan angka, atau perusahaan ingin masuk skema karbon.",
      "Kami bekerja berurutan: memetakan seluruh sumber emisi operasional, mengumpulkan data dengan template per departemen (tagihan listrik, pembelian BBM, logistik, pembelian utama), menerapkan faktor emisi resmi dari Kementerian LH/ESDM dan IPCC, lalu mengkalkulasi Scope 1–3 beserta intensitas emisi per unit usaha — angka yang lebih bermakna bagi manajemen daripada ton absolut. Hasilnya disusun menjadi roadmap NZKC berjenjang: milestone penurunan per periode dan opsi mitigasi dari efisiensi energi, penggantian energi terbarukan, sampai penggunaan kredit karbon. Dokumennya siap diverifikasi pihak ketiga dan dipakai untuk laporan keberlanjutan maupun kebutuhan SRN.",
    ],
    benefits: [
      { title: "Baseline yang benar", desc: "Angka emisi dengan faktor emisi resmi dan metode yang bisa dipertahankan — tidak runtuh saat diverifikasi atau ditanya buyer." },
      { title: "Scope 3 tidak bolong", desc: "Rantai nilai turut dihitung — porsi emisi yang sering paling besar tidak menyisakan kejutan saat audit." },
      { title: "Roadmap, bukan jargon", desc: "Target net zero menjadi milestone berjenjang dengan opsi mitigasi berbiaya jelas — manajemen bisa memutuskan, bukan hanya mengumumkan." },
      { title: "Intensitas sebagai alat manajemen", desc: "Emisi per unit produksi atau omzet memudahkan perbandingan antarlokasi — target bisnis dan target karbon berjalan di satu bahasa." },
      { title: "Siap pasar karbon & verifikasi", desc: "Data terstruktur untuk kebutuhan SRN dan verifikasi pihak ketiga — langkah berikutnya tidak perlu mulai dari nol." },
    ],
    process: [
      { title: "Pemetaan sumber emisi", desc: "Seluruh aktivitas operasional dipetakan ke kategori Scope 1, 2, dan 3 — batas penghitungan disepakati sejak awal." },
      { title: "Pengumpulan data", desc: "Template data diserahkan per departemen — tagihan, log pembelian, dan jadwal operasional terkumpul dalam format tunggal." },
      { title: "Kalkulasi & intensitas", desc: "Emisi dihitung dengan faktor emisi resmi — hasil absolut dan intensitas per unit usaha disajikan bersama rujukan sumber datanya." },
      { title: "Roadmap NZKC", desc: "Target penurunan berjenjang disusun dengan opsi mitigasi berbiaya jelas — dokumen siap dipakai laporan, verifikasi, dan strategi." },
    ],
    requirements: [
      "Tagihan listrik 12 bulan terakhir untuk setiap lokasi operasional",
      "Data bahan bakar: genset, kendaraan perusahaan, boiler, LPG (bila dipakai)",
      "Data logistik dan distribusi: jarak, moda, volume (untuk Scope 3 — bila relevan)",
      "Data pembelian utama: bahan baku, kemasan, jasa (ringkasan tahunan cukup)",
      "Daftar lokasi operasional beserta jam operasionalnya",
    ],
    faqs: [
      { q: "Scope 1, 2, dan 3 itu artinya apa?", a: "Scope 1 adalah emisi langsung dari peralatan yang Anda operasikan — genset, kendaraan, boiler. Scope 2 adalah emisi dari listrik yang Anda beli, dihitung di sisi pembangkitnya. Scope 3 mencakup seluruh rantai nilai — bahan baku yang dibeli, distribusi produk, perjalanan karyawan. Pada banyak sektor Scope 3 justru porsi terbesar, sehingga penghitungan yang melewatkannya lemah di mata verifikator dan buyer." },
      { q: "Berapa biaya dan berapa lama penghitungan jejak karbon?", a: "Untuk perusahaan dengan 1–3 lokasi operasional dan data yang tersedia, prosesnya berjalan 4–6 minggu; perusahaan multi-lokasi dengan rantai pasok kompleks bisa mencapai 8 minggu. Jasa kami mulai dari kisaran Rp 12 juta tergantung jumlah sumber emisi dan kedalaman Scope 3, sedangkan biaya verifikasi pihak ketiga dihitung terpisah bila diminta. Faktor yang paling menaikkan biaya biasanya bukan kalkulasinya, melainkan waktu mengumpulkan data yang belum tertata — dan itulah bagian yang kami pangkas dengan template." },
      { q: "Apakah hasilnya bisa dipakai untuk laporan OJK dan sistem karbon pemerintah?", a: "Bisa — dan itulah desainnya. Metode GHG Protocol dan SNI ISO 14064-1 yang kami pakai dikenali lintas kebutuhan: laporan keberlanjutan untuk OJK, baseline untuk pendaftaran di SRN, dan data yang diminta buyer global. Yang berbeda per tujuan biasanya tingkat verifikasi dan batasan organisasi yang dipakai. Kami petakan sejak awal agar satu penghitungan melayani banyak kebutuhan, bukan berulang-ulang tiap kali ada permintaan baru." },
    ],
    related: ["laporan-keberlanjutan", "kredit-karbon", "izin-lingkungan", "izin-energi-terbarukan"],
  },
  {
    slug: "kredit-karbon",
    tagline: "Lahan, sampah, dan energi Anda menghasilkan sesuatu yang tak terlihat — dan kini punya harga.",
    heroSub:
      "Pengembangan proyek kredit karbon dari feasibility, baseline, sistem MRV, sampai pendaftaran SRN-PPI — proyek Anda menghasilkan kredit karbon yang sah, terdaftar, dan siap ditawarkan kepada pembeli.",
    timeline: "6–12 bulan sampai pendaftaran, tergantung jenis proyek",
    intro: [
      "Sebagian kegiatan bisnis justru paling bernilai dilihat dari sisi karbon: rehabilitasi dan penanaman hutan, konservasi lahan, pengelolaan sampah dengan penangkapan metana, sampai pembangkit energi terbarukan. Regulasi Indonesia memberi jalan agar aktivitas itu diakui secara ekonomi: Perpres 98/2021 dan PP 98/2021 menetapkan mekanisme nilai ekonomi karbon, Sertifikat Pengurangan Emisi GRK, dan Rencana Aksi Penurunan Emisi. Kewajibannya satu dan tegas — proyek harus terdaftar di SRN-PPI (Sistem Registri Nasional Pengendalian Perubahan Iklim) agar kreditnya diakui negara, dan sejak 2023 perdagangannya berjalan di bursa karbon sesuai POJK 14/2023. Proyek yang baik selalu berdiri di atas tiga prinsip: tambahan (kegiatan tidak akan terjadi tanpa proyek), permanensi, dan tanpa penghitungan ganda.",
      "Kesalahan yang paling sering menggugurkan proyek: pengurangan emisi dihitung tanpa baseline yang bisa dipertahankan sehingga verifikator menolak. Sistem MRV (Measurement, Reporting, Verification) dibangun setengah hati — data lahan dan aktivitas tidak terdokumentasi tiap periode. Kredit dijual di luar sistem resmi sehingga berisiko dihitung ganda dan gugur nilainya. Perjanjian lahan dan izin diabaikan di awal, lalu meledak di tengah proyek. Dan yang paling berbahaya bagi pemula: menjanjikan harga karbon tertinggi kepada pemilik lahan — padahal harga kredit sangat bervariasi menurut jenis proyek, standar, dan profil pembeli, sehingga janji semacam itu membangun konflik yang pasti datang.",
      "Kami menata proyek dari dasar: studi kelayakan dan penyusunan baseline, dokumen proyek (PDD), desain sistem MRV dengan jadwal monitoring yang realistis, lalu pemilihan jalur pendaftaran dan verifikator. Pendaftaran di SRN-PPI kami jalankan sampai kredit resmi tercatat, dilanjutkan koneksi dengan pembeli domestik maupun internasional. Kami tidak menjual ilusi harga — yang kami janjikan adalah proses yang sah: kredit yang terdaftar, dokumen yang tahan diperiksa, dan struktur pembagian hasil dengan pemilik lahan yang tertulis jelas sejak awal.",
    ],
    benefits: [
      { title: "Kredit sah di mata negara", desc: "Proyek terdaftar di SRN-PPI — kredit yang dihasilkan diakui, tidak berisiko dihitung ganda, dan bisa masuk bursa karbon." },
      { title: "MRV yang lolos verifikasi", desc: "Sistem monitoring dirancang sejak awal dengan jadwal realistis — data tiap periode siap diperiksa verifikator." },
      { title: "Pendapatan baru dari aset yang ada", desc: "Lahan, sampah, dan energi yang sudah Anda kelola menghasilkan aliran pendapatan tambahan yang selama ini tidak terhitung." },
      { title: "Akses pembeli domestik & global", desc: "Kami menghubungkan proyek dengan pembeli karbon korporasi dan pasar internasional — sesuai jalur dan standar proyek." },
      { title: "Struktur hasil yang jelas", desc: "Pembagian hasil dengan pemilik lahan dan mitra ditulis sejak awal — tidak ada konflik yang menyala di tengah proyek." },
    ],
    process: [
      { title: "Feasibility & baseline", desc: "Potensi proyek dihitung dengan skenario baseline yang bisa dipertahankan — legalitas lahan dan izin diperiksa paling awal." },
      { title: "Dokumen proyek & MRV", desc: "PDD dan sistem monitoring disusun lengkap — jadwal pengukuran, pelaporan, dan verifikasi ditetapkan sejak desain." },
      { title: "Verifikasi & pendaftaran SRN-PPI", desc: "Verifikator independen menelaah proyek — pendaftaran dijalankan sampai kredit resmi tercatat." },
      { title: "Pemasaran & pemantauan", desc: "Kredit ditawarkan ke pembeli domestik dan internasional — monitoring berjalan tiap periode agar penerbitan berikutnya tetap lancar." },
    ],
    requirements: [
      "Data lahan atau proyek: lokasi, luas, status kepemilikan atau hak pengelolaan",
      "Dokumen perizinan terkait: izin lingkungan dan izin kegiatan yang berlaku",
      "Deskripsi aktivitas proyek: jenis tanaman atau teknologi, volume sampah, kapasitas energi (bila ada)",
      "Peta, foto, dan dokumentasi lahan yang tersedia",
      "Pihak yang berwenang mengambil keputusan: pemilik lahan, entitas pengelola, atau mitra masyarakat",
    ],
    faqs: [
      { q: "Berapa harga satu kredit karbon per ton?", a: "Kami sengaja tidak memberi angka tunggal karena harganya sangat bervariasi — ditentukan jenis proyek (reboisasi, sampah, energi terbarukan), standar dan kualitas dokumen, ko-benefit sosial, serta profil pembeli. Yang bisa kami jamin adalah sisi yang mengendalikan nilai: baseline yang benar, MRV yang tertata, dan pendaftaran resmi — tiga hal yang menentukan apakah kredit Anda dihargai murah atau premium. Estimasi rentang harga untuk jenis proyek Anda kami sampaikan di tahap feasibility, berdasarkan transaksi terkini, bukan janji." },
      { q: "Jenis proyek apa saja yang bisa menghasilkan kredit karbon?", a: "Spektrumnya luas: rehabilitasi dan penanaman hutan, konservasi dan perlindungan lahan, pengelolaan sampah dengan penangkapan metana, pembangkit energi terbarukan, sampai efisiensi energi tertentu. Persyaratannya sama untuk semua: tambahan, data baseline yang bisa dipertahankan, legalitas lahan yang jelas, dan sistem monitoring yang berjalan tiap periode. Studi kelayakan di awal menjawab pertanyaan paling praktis: proyek Anda layak dikembangkan, perlu perbaikan apa, atau lebih bijak tidak dijalankan." },
      { q: "Apa beda kredit karbon domestik dan internasional?", a: "Kredit domestik terdaftar di SRN-PPI dan diperdagangkan di bursa karbon Indonesia — diakui negara sesuai Perpres 98/2021 dan POJK 14/2023. Kredit internasional mengikuti standar global dengan pembeli di luar negeri, namun harus hati-hati soal penghitungan ganda: satu pengurangan emisi tidak boleh dijual dua kali di dua sistem. Pilihan jalurnya bergantung profil proyek dan pembeli yang Anda tuju — kami petakan opsi dan konsekuensinya sebelum Anda mengikat diri pada satu jalur." },
    ],
    related: ["jejak-karbon-nzkc", "izin-lingkungan", "izin-energi-terbarukan", "laporan-keberlanjutan"],
  },
  {
    slug: "esg-rantai-pasok",
    tagline: "Kontrak besar Anda kalah bukan karena produk — tapi karena satu kuesioner yang tidak terjawab.",
    heroSub:
      "Assessment ESG bertingkat atas pemasok, penyusunan kode etik vendor, dan kesiapan audit buyer internasional bergaya SMETA — untuk pemasok global yang sedang dievaluasi maupun perusahaan yang sedang menilai pemasoknya sendiri.",
    timeline: "6–10 minggu untuk siklus assessment pertama",
    intro: [
      "Perhatian buyer global kini bergeser dari kualitas produk ke cara produk itu lahir. Retail Eropa dan Amerika, manufaktur otomotif Jepang, serta brand FMCG global menjalankan due diligence rantai pasok — didorong regulasi kawasan seperti Corporate Sustainability Due Diligence Directive (CSDDD) UE dan aturan pelaporan keberlanjutan yang menjangkau pemasoknya. Bentuknya nyata di lapangan: kuesioner ESG yang harus dijawab dengan bukti, audit sosial-lingkungan di lokasi produksi (SMETA memeriksa empat pilar: ketenagakerjaan, kesehatan dan keselamatan kerja, lingkungan, serta etika bisnis), dan kode etik vendor yang harus ditandatangani. Pemasok Indonesia yang tidak siap tidak dilamar — ia diganti.",
      "Kesalahan yang paling umum: menjawab kuesioner seolah paling baik, lalu tertampar saat audit lapangan menemukan jam kerja yang tidak terdokumentasi, alat keselamatan yang kedaluwarsa, atau limbah yang tidak ada dokumennya. Perusahaan menilai pemasoknya sekali lalu berhenti — tanpa pemeringkatan risiko, pemasok bermasalah baru ketahuan setelah merusak. Tidak ada kode etik vendor tertulis sehingga tidak ada dasar menuntut perbaikan. Dan dokumen kepatuhan tercecer di banyak tempat sehingga tiap audit selalu dimulai dari kepanikan. Biaya kegagalan bukan hanya satu kontrak: buyer mencatat riwayatnya, dan pemasok lain menunggu untuk menggantikan posisi Anda.",
      "Kami menangani dua arah sekaligus. Untuk perusahaan yang dievaluasi buyer: perbaikan kepatuhan dasar (ketenagakerjaan, K3, lingkungan, etika), penyusunan dokumen bukti, dan pendampingan hari audit. Untuk perusahaan yang menilai pemasoknya: assessment bertingkat sesuai risiko (kritis, menengah, rendah), penyusunan vendor code of conduct, rencana perbaikan (CAP) untuk pemasok yang tertinggal, dan sistem dokumen kepatuhan yang hidup — diperbarui berkala, bukan sekali saja saat kontrak dibuka.",
    ],
    benefits: [
      { title: "Audit buyer lolos dengan tenang", desc: "Kepatuhan dasar dan dokumen bukti tertata sebelum auditor datang — temuan minor tinggal diperbaiki, kontrak tidak terancam." },
      { title: "Kuesioner ESG terjawab dengan bukti", desc: "Setiap jawaban didukung dokumen nyata — tidak ada jarak antara klaim di kertas dan realita lapangan." },
      { title: "Pemasok bermasalah terdeteksi dini", desc: "Assessment bertingkat membedakan risiko kritis dan ringan — perbaikan diarahkan sebelum masalah menjalar ke Anda." },
      { title: "Kode etik jadi alat penegakan", desc: "Vendor code of conduct yang ditandatangani memberi dasar menuntut perbaikan — bahkan mengakhiri kerja sama bila diperlukan." },
      { title: "Dokumen kepatuhan satu sistem", desc: "Arsip vendor diperbarui berkala di satu tempat — audit berikutnya tidak lagi dimulai dari pencarian berkas." },
    ],
    process: [
      { title: "Pemetaan rantai & tiering", desc: "Pemasok dipetakan menurut risiko dan ketergantungan — prioritas assessment disusun berbasis dampak, bukan urutan abjad." },
      { title: "Assessment & temuan", desc: "Pemeriksaan dokumen dan lapangan menghasilkan daftar temuan — diklasifikasikan menurut urgensi perbaikannya." },
      { title: "Kode etik & rencana perbaikan", desc: "Vendor code of conduct dan CAP disusun — target perbaikan pemasok disepakati dengan tenggat yang bisa dipegang." },
      { title: "Kesiapan audit & pemantauan", desc: "Simulasi dan pendampingan audit buyer — sistem dokumen dan pemantauan berkala diterapkan agar status bertahan." },
    ],
    requirements: [
      "Daftar pemasok utama beserta lokasi dan jenis kegiatannya (untuk perusahaan pembeli)",
      "Profil perusahaan dan perizinan dasar (untuk perusahaan yang dievaluasi buyer)",
      "Kuesioner atau standar ESG yang diminta buyer (bila sudah diterima — kami baca dulu sebelum Anda menjawab)",
      "Dokumen kepegawaian, K3, dan lingkungan yang tersedia: jam kerja, alat keselamatan, izin limbah",
      "Nama tim atau personel penghubung yang menghadapi buyer dan auditor",
    ],
    faqs: [
      { q: "Apa itu SMETA dan apakah wajib?", a: "SMETA (Sedex Members Ethical Trade Audit) adalah metode audit etika dagang yang paling luas dipakai buyer global — memeriksa empat pilar: ketenagakerjaan, kesehatan dan keselamatan kerja, lingkungan, serta etika bisnis. Ia bukan regulasi negara, melainkan standar yang dituntut kontrak: buyer yang memintanya menjadikan audit sebagai syarat kerja sama. Statusnya wajib sejauh buyer Anda mewajibkan — dan lebih murah menyiapkannya sebelum jadwal audit diumumkan daripada memperbaiki temuan saat kontrak sudah terancam." },
      { q: "Berapa lama sampai kami siap menghadapi audit buyer?", a: "Untuk perusahaan yang dasar kepatuhannya sudah berjalan, penyiapan memakan 6–10 minggu: perbaikan temuan administratif, penyusunan dokumen bukti, dan simulasi audit. Bila ditemukan ketidaksesuaian besar — misalnya jam lembur yang tidak tercatat atau izin limbah yang belum ada — waktunya mengikuti besaran perbaikannya dan kami berikan estimasi jujur di awal. Audit ulang oleh buyer biasanya dijadwalkan beberapa bulan setelah audit pertama, jadi rencana perbaikan kami susun agar mengejar tenggat itu." },
      { q: "Pemasok kami kecil dan jauh dari siap — apakah kami harus memutus kerja sama?", a: "Belum tentu, dan sering kali memutus justru pilihan yang merugikan karena mencari pemasok baru juga tidak murah. Pendekatan yang kami pakai adalah pemeringkatan risiko: pemasok kecil dengan risiko terbatas diberi target perbaikan bertahap dengan tenggat jelas, sementara pemasok risiko tinggi dipantau lebih ketat. Kode etik vendor memberi Anda dasar menuntut, dan CAP memberi pemasok jalan untuk membaik — buyer justru lebih menghargai pembeli yang mengelola pemasoknya secara berkelanjutan daripada yang mengklaim rantainya bersih tanpa bukti." },
    ],
    related: ["laporan-keberlanjutan", "sni", "iso", "eudr-komoditas"],
  },
  {
    slug: "gedung-hijau",
    tagline: "Bangunan terbaik tidak sekadar berdiri — ia bekerja lebih hemat setiap hari.",
    heroSub:
      "Sertifikasi gedung hijau GREENSHIP (GBCI) atau EDGE (IFC) untuk gedung baru maupun eksisting — biaya operasional turun 20–30%, nilai aset naik, dan syarat tender instansi pemerintah terjawab.",
    timeline: "3–6 bulan tergantung tahap gedung dan skala perbaikan",
    intro: [
      "Gedung hijau di Indonesia punya dua pintu sertifikasi yang diakui: GREENSHIP yang dikelola Green Building Council Indonesia (GBCI) dengan rating bertingkat dari hemat sampai platinum, dan EDGE yang dikembangkan IFC (Grup Bank Dunia) dengan tolok ukur efisiensi minimal 20% dibanding gedung konvensional pada tiga sisi — energi, air, dan material. Dorongan regulasinya juga nyata: PP 16/2021 menegakkan ketertiban bangunan melalui PBG dan SLF, SNI 6390 mengatur konservasi energi pada bangunan, dan beberapa daerah seperti Jakarta telah lama mewajibkan bangunan gedung hijau untuk gedung tertentu. Instansi pemerintah dan perusahaan besar semakin menyertakan sertifikasi hijau sebagai poin penilaian sewa dan tender.",
      "Kesalahan yang paling mahal: mengajukan sertifikasi ketika gedung hampir selesai — padahal banyak kriteria (orientasi fasad, efisiensi sistem pendingin, pemilihan material) menuntut keputusan desain yang jauh lebih murah diambil di awal. Perhitungan efisiensi dikerjakan sendiri tanpa simulasi, lalu tidak lolos saat dinilai. Komisioning sistem diabaikan sehingga peralatan yang bagus tetap bekerja boros. Skema sertifikasi dipilih asal — jalur gedung baru dan gedung eksisting menuntut kriteria yang berbeda. Akibatnya gedung membayar pembenahan besar yang seharusnya bisa dihindari dengan keputusan tiga bulan lebih awal.",
      "Kami memulai dari gap analysis terhadap kriteria sertifikasi yang dipilih, melanjutkan ke simulasi energi dan air untuk menguji angka sebelum dijanjikan, rekomendasi perbaikan yang diurutkan menurut biaya-dampak — sering kali perbaikan kecil yang menentukan lolos-tidaknya — lalu koordinasi dengan konsultan MEP dan assessor GBCI/EDGE sampai pendampingan penilaian dan sertifikat terbit. Setelah itu Anda menerima perhitungan balik modal: berapa biaya perbaikan dan berapa hemat operasional per bulan. Keputusan gedung hijau seharusnya berdiri di atas angka, bukan gengsi.",
    ],
    benefits: [
      { title: "Biaya operasional turun nyata", desc: "Efisiensi energi dan air biasanya menggeser biaya operasional gedung 20–30% — hemat yang terjadi tiap bulan, bukan klaim sekali pakai." },
      { title: "Nilai aset & harga sewa naik", desc: "Gedung tersertifikasi lebih dicari penyewa dan investor — status hijau menjadi harga premium yang bisa dipertahankan." },
      { title: "Tender & instansi terbuka", desc: "Poin penilaian sertifikasi hijau pada tender dan kebutuhan instansi pemerintah terjawab dengan dokumen resmi." },
      { title: "Kepatuhan bangunan daerah", desc: "Keselarasan dengan PBG/SLF, SNI 6390, dan peraturan daerah bangunan hijau — tidak ada regulasi yang saling menabrak." },
      { title: "Perbaikan berbiaya jelas", desc: "Rekomendasi diurutkan biaya-dampak dengan hitungan balik modal — anggaran mengalir ke yang berdampak, bukan ke kosmetika." },
    ],
    process: [
      { title: "Gap analysis & pemilihan skema", desc: "Kondisi gedung diperiksa terhadap kriteria GBCI/EDGE — skema dan rating target disepakati realistis dengan tahap gedung." },
      { title: "Simulasi & rekomendasi", desc: "Energi, air, dan material disimulasikan — daftar perbaikan diurutkan biaya-dampak beserta estimasi balik modalnya." },
      { title: "Implementasi & dokumentasi", desc: "Perbaikan dijalankan bersama tim gedung dan konsultan MEP — bukti kriteria dikumpulkan dalam format penilaian." },
      { title: "Penilaian & sertifikat", desc: "Assessor GBCI/EDGE menilai dokumen dan gedung — temuan minor ditutup, sertifikat resmi diterbitkan." },
    ],
    requirements: [
      "Data gedung: gambar teknis atau denah dan spesifikasi sistem MEP (bila tersedia)",
      "Tagihan listrik dan air 12 bulan terakhir (khusus gedung eksisting)",
      "Status perizinan bangunan: PBG dan SLF",
      "Akses ke tim pengelola gedung untuk data operasional",
      "Kesiapan anggaran untuk perbaikan minor yang direkomendasikan (diberi estimasi dulu, bukan kejutan)",
    ],
    faqs: [
      { q: "Apa beda GREENSHIP dan EDGE, mana yang sebaiknya diambil?", a: "GREENSHIP dikelola GBCI, diuji terhadap kriteria lokal Indonesia, dan rating-nya bertingkat dari hemat sampai platinum — cocok bila Anda menargetkan pengakuan tertinggi di pasar Indonesia, termasuk tender instansi yang mengenalnya. EDGE dikembangkan IFC dengan tolok ukur global yang sederhana: bukti efisiensi minimal 20% pada energi, air, dan material — jalurnya lebih terstandar dan dikenal investor internasional. Pilihan terbaik bergantung tujuan Anda: menang tender lokal, menarik penyewa global, atau memenuhi aturan daerah. Kami petakan ketiganya di tahap awal sebelum Anda mengeluarkan biaya penilaian." },
      { q: "Berapa biaya sertifikasi gedung hijau dan berapa lama kembali modalnya?", a: "Ada dua biaya berbeda yang sering dicampur: biaya jasa penyiapan dan penilaian (mulai dari kisaran Rp 15 juta tergantung luas dan skema) serta biaya perbaikan gedung yang direkomendasikan — di sinilah rentangnya paling lebar dan paling sering salah diperkirakan. Kabar baiknya banyak perbaikan bernilai kecil tetapi menentukan lolos, dan perbaikan besar biasanya punya hitungan balik modal 2–5 tahun dari hemat listrik dan air. Kami serahkan perhitungan balik modal per rekomendasi di awal — Anda memutuskan dari angka, bukan dari tawaran vendor." },
      { q: "Gedung kami sudah lama beroperasi — apakah masih bisa disertifikasi?", a: "Bisa. GREENSHIP punya jalur khusus gedung eksisting dan EDGE juga menjangkau pembenahan gedung lama, dengan kriteria yang menilai kinerja operasional nyata — tagihan listrik dan air justru menjadi bahan penilaian utama. Prosesnya biasanya dimulai dari audit energi ringan untuk menemukan perbaikan termurah dengan dampak terbesar. Pengalaman kami, gedung eksisting yang dikelola rapi sering lolos dengan perbaikan lebih sedikit dari perkiraan pemiliknya — keraguan biasanya muncul karena belum ada angka, bukan karena gedungnya memang tidak layak." },
    ],
    related: ["pbg-slf", "jejak-karbon-nzkc", "laporan-keberlanjutan", "kawasan-industri"],
  },
  {
    slug: "sertifikasi-b-corp",
    tagline: "Gelar keberdampak yang paling sulit dipalsukan sedang menunggu perusahaan yang layak memakainya.",
    heroSub:
      "Kesiapan menyeluruh menuju sertifikasi B Corp: baseline BIA, perbaikan tata kelola dan kebijakan, sampai verifikasi B Lab — memasukkan perusahaan Anda ke daftar pendek bisnis Indonesia yang memegang gelar bisnis terbaik-dunia untuk dampaknya.",
    timeline: "9–18 bulan termasuk antrean verifikasi B Lab",
    intro: [
      "B Corp adalah sertifikasi keberdampak yang dikelola B Lab, organisasi nirlaba global — bukan label pemasaran yang bisa dibeli. Jalannya: mengisi B Impact Assessment (BIA) lebih dari 200 pertanyaan yang menilai lima pilar — tata kelola, pekerja, komunitas, lingkungan, dan pelanggan — dengan ambang lolos skor 80. Ditambah satu syarat legal yang sering dilupakan: amendemen akta pendirian agar pertimbangan pemangku kepentingan (stakeholder governance) masuk ke tujuan perusahaan menurut UU 40/2007. Hingga kini perusahaan Indonesia bersertifikat B Corp masih terhitung puluhan dari jutaan bisnis — kekurangan yang bagi yang lolos menjadi keunggulan yang nyaris tak bertanding di kelasnya.",
      "Kesalahan yang paling sering mematikan proses: perusahaan mengisi BIA sendiri, mendapat skor rendah, lalu menyerah — padahal banyak poin bisa diangkat cepat lewat kebijakan tertulis yang belum ada: kebijakan antikorupsi, kebijakan lingkungan, manual SDM, mekanisme umpan balik pekerja. Yang kedua: memandang BIA sebagai kuesioner, bukan proyek bukti — saat verifikasi, B Lab menuntut dokumen pendukung untuk jawaban yang diisi, dan penyiapan itu memakan waktu 6–12 bulan. Yang ketiga: biaya sertifikasi tahunan B Lab dan durasi antrean verifikasi tidak dibuatkan rencana sehingga momentum internal hilang di tengah jalan.",
      "Kami menyusun kesiapan ini sebagai proyek bertahap: dimulai dari baseline BIA dan peta skor per pilar untuk melihat di mana poin termurah dan termahal. Perbaikan prioritas berjalan dari kebijakan yang belum tertulis sampai indikator lingkungan yang belum diukur, lalu dokumen legal ditata termasuk amendemen akta. Tahap akhirnya simulasi dan pendampingan verifikasi B Lab sampai gelar terbit — dan hasil sampingannya sering diabaikan: perusahaan yang lolos biasanya juga lebih siap menghadapi due diligence investor, kuesioner buyer global, dan tender yang menilai tata kelola, karena struktur yang dituntut B Corp adalah struktur yang semua pemeriksa itu cari.",
    ],
    benefits: [
      { title: "Diferensiasi yang langka", desc: "Perusahaan Indonesia bersertifikat masih sangat sedikit — gelar ini membedakan Anda di pasar yang semua pihaknya mengklaim keberlanjutan." },
      { title: "Tata kelola naik kelas", desc: "Kebijakan, indikator, dan akuntabilitas yang dibangun dipakai ulang saat investor, buyer, dan panitia tender memeriksa." },
      { title: "Skor dipetakan, kerja terarah", desc: "Peta skor BIA menunjukkan poin termurah dan termahal — perbaikan diurutkan sesuai dampak, bukan perasaan." },
      { title: "Verifikasi terdampingi", desc: "Dokumen bukti disiapkan dan simulasi dijalankan sebelum B Lab datang — verifikasi tidak lagi masa-masa panik." },
      { title: "Stakeholder governance resmi", desc: "Amendemen akta menetapkan pertimbangan pemangku kepentingan — komitmen dampak menjadi tatanan hukum, bukan retorika." },
    ],
    process: [
      { title: "Baseline BIA & peta skor", desc: "BIA diisi dan divisualisasikan per pilar — celah terhadap ambang 80 dipetakan beserta jalan menutupnya." },
      { title: "Perbaikan prioritas & kebijakan", desc: "Kebijakan tertulis, indikator, dan praktik yang belum ada disusun — prioritas pada poin dengan dampak skor terbesar." },
      { title: "Amendemen akta & dokumen", desc: "Klausul stakeholder governance ditata di akta — dokumen legal dan bukti verifikasi dikumpulkan rapi." },
      { title: "Verifikasi & sertifikasi", desc: "Pengajuan ke B Lab dan pendampingan verifikasi — gelar B Corp terbit dan materi publikasi disiapkan." },
    ],
    requirements: [
      "Data dasar perusahaan: struktur organisasi dan kebijakan yang sudah ada (meski belum lengkap)",
      "Data SDM: jumlah karyawan, benefit, kebijakan kerja, data pelatihan",
      "Data lingkungan dan sosial tahun berjalan: energi, limbah, program komunitas (yang tersedia saja)",
      "Akta pendirian dan perubahannya (untuk amendemen klausul stakeholder)",
      "Komitmen manajemen puncak — proses ini menuntut keterlibatan pengambil keputusan, bukan hanya admin",
    ],
    faqs: [
      { q: "Berapa biaya sertifikasi B Corp dan berapa lama prosesnya?", a: "Ada dua komponen biaya yang harus dipisahkan: jasa penyiapan kami (mulai dari kisaran Rp 25 juta tergantung ukuran perusahaan dan jarak skornya) dan biaya tahunan B Lab yang dihitung dari pendapatan perusahaan dan dibayar langsung ke B Lab setelah lolos. Waktu prosesnya realistis 9–18 bulan termasuk antrean verifikasi B Lab — yang bisa dipangkas adalah waktu menutup celah skor dan menyiapkan bukti, sisanya antrean global yang tidak bisa disuap. Perusahaan yang skor baseline-nya sudah mendekati 80 biasanya jauh lebih cepat." },
      { q: "Perusahaan kami masih kecil — apakah B Corp realistis?", a: "Justru banyak perusahaan kecil yang lolos lebih cepat karena strukturnya sederhana dan kebijakannya mudah ditata. B Lab menyesuaikan penilaian BIA terhadap ukuran dan sektor perusahaan sehingga poin yang diminta tetap proporsional. Pertanyaan yang lebih tepat bukan apakah ukuran kecil itu realistis, melainkan apakah perusahaan Anda memang beroperasi dengan tanggung jawab yang bisa dibuktikan — karena verifikasi menuntut bukti, bukan niat." },
      { q: "Apa beda B Corp dengan ISO 14001 atau laporan keberlanjutan?", a: "Tiga instrumen ini menutup lapisan berbeda: ISO 14001 menilai sistem manajemen lingkungan — satu pilar, bukan seluruh perusahaan; laporan keberlanjutan adalah pengungkapan data ESG tahunan yang kedalamannya bergantung penyusunnya. B Corp menilai perusahaan secara utuh — tata kelola, pekerja, komunitas, lingkungan, pelanggan — melalui skor minimum dan verifikasi independen, lalu menuntut keterlibatan pemangku kepentingan di akta. Praktisnya saling menguatkan: data laporan keberlanjutan dan sistem ISO mempermudah jawaban BIA Anda, sementara B Corp memberi cap independen yang tidak bisa diproduksi sendiri." },
    ],
    related: ["tata-kelola-korporat", "laporan-keberlanjutan", "esop-program", "csr-cdas"],
  },
  {
    slug: "epr-kemasan",
    tagline: "Kemasan yang Anda edarkan hari ini adalah kewajiban yang suatu saat harus pulang.",
    heroSub:
      "Pemetaan kewajiban Extended Producer Responsibility menurut PP 81/2023, target pengembalian kemasan bertahap, dan skema koleksi bersama mitra daur ulang — patuh sebelum teguran datang, dengan program yang benar-benar berjalan.",
    timeline: "4–8 minggu untuk peta kewajiban dan roadmap; skema berjalan bertahap",
    intro: [
      "PP 81/2023 menandai pergeseran besar dalam tanggung jawab persampahan: produsen kini wajib mengurangi dan menangani sampah kemasan dan barang tertentu yang mereka edarkan — kemasan plastik, kertas dan kardus, kaleng logam, dan kaca. Bentuknya tanggung jawab produsen (Extended Producer Responsibility): menyusun rencana pengurangan dan pengembalian sampah kemasan, memenuhi target pengembalian bertahap yang naik tiap fase, serta melaporkan pelaksanaannya ke sistem pelaporan pemerintah (SIPSN/DPLH). Yang sering mengejutkan: yang disebut produsen bukan hanya pabrik — importir dan pengecer dengan ciri tertentu ikut terjangkau, dan jangkauannya lintas produk, dari makanan-minuman, barang konsumsi, sampai kemasan belanja daring.",
      "Kesalahan yang paling mahal: menganggap kewajiban ini mulai berlaku nanti — fase target pengembalian sudah berjalan dan teguran bagi yang tidak menyusun rencana tidak menunggu kesempurnaan. Data bobot kemasan per bahan tidak pernah dicatat sehingga target tidak bisa dihitung — dan tanpa angka, laporan tidak bisa disusun dengan jujur. Skema koleksi dijalankan improvisasi tanpa mitra resmi sehingga realisasinya tidak terdokumentasi. Laporan tidak masuk SIPSN, dan seluruh program baru ketahuan saat pengawasan datang. Risiko administratif (teguran sampai sanksi) berdiri berdampingan dengan risiko reputasi — kemasan plastik adalah isu yang paling mudah viral.",
      "Kami menata kepatuhan ini dari dasar yang paling sederhana: pemetaan kewajiban perusahaan Anda terhadap PP 81/2023 — termasuk menguji apakah Anda terjangkau definisi produsen — lalu pengumpulan data bobot kemasan per bahan dan penyusunan target bertahap yang realistis. Skema koleksi kami desain bersama mitra yang bisa dipertanggungjawabkan: bank sampah, pengelola daur ulang, atau skema deposit, dengan perjanjian yang tertulis. Pelaporan ke SIPSN/DPLH kami formatkan dan datanya kami siapkan mengalir ke laporan keberlanjutan Anda — kepatuhan yang kami bangun berjalan tiap tahun, bukan program sekali jalan saat pengawasan mendekat.",
    ],
    benefits: [
      { title: "Patuh sebelum teguran", desc: "Rencana pengurangan dan pengembalian tersusun sesuai PP 81/2023 — pengawasan datang menemukan kepatuhan, bukan alasan." },
      { title: "Target bertahap yang realistis", desc: "Angka pengembalian disusun dari data kemasan aktual — target yang bisa dipenuhi lebih berharga daripada target besar yang bohong." },
      { title: "Skema koleksi yang benar-benar jalan", desc: "Mitra daur ulang dan bank sampah terikat perjanjian — realisasi terdokumentasi, bukan sekadar foto kegiatan." },
      { title: "Laporan SIPSN tertata", desc: "Format pelaporan dan jadwalnya dikunci — data tahunan tersusun dari sistem, bukan digali saat tenggat." },
      { title: "Program jadi cerita ESG", desc: "Data pengembalian dan daur ulang mengalir ke laporan keberlanjutan — kewajiban berubah menjadi bukti komitmen." },
    ],
    process: [
      { title: "Pemetaan kewajiban & data kemasan", desc: "Status perusahaan diuji terhadap PP 81/2023 — bobot kemasan per bahan dikumpulkan dari data produk dan rantai pasok." },
      { title: "Target & desain skema", desc: "Target pengembalian bertahap disusun realistis — skema koleksi, mitra, dan mekanisme biayanya dirancang dari awal." },
      { title: "Mitra & pelaksanaan", desc: "Perjanjian dengan bank sampah dan pengelola daur ulang ditandatangani — skema mulai berjalan dengan dokumentasi realisasi." },
      { title: "Pelaporan & pemantauan", desc: "Laporan ke SIPSN/DPLH disusun sesuai format — pemantauan tahunan menjaga target fase berikutnya tetap dijalani." },
    ],
    requirements: [
      "Data produk dan kemasan: jenis bahan, bobot kemasan, volume yang dipasarkan per periode",
      "Struktur penjualan: produksi sendiri, importir, atau retail modern (menentukan kewajiban)",
      "Data distribusi wilayah (untuk merancang titik koleksi yang masuk akal)",
      "Perizinan dasar usaha (NIB atau izin terkait)",
      "Ketersediaan anggaran program — kami hitungkan opsi biaya skema sebelum Anda berkomitmen",
    ],
    faqs: [
      { q: "Siapa saja yang termasuk produsen dalam PP 81/2023?", a: "Definisi produsennya lebar: pihak yang memproduksi kemasan dan barang tertentu, mengimpor, hingga mengecer dengan ciri tertentu — praktisnya pabrikan, importir, dan sebagian pengecer modern terjangkau. Penentuannya melihat peran dalam rantai edar dan jenis barangnya: kemasan plastik, kertas, logam, kaca, serta barang tertentu seperti elektronik dan tekstil. Cara paling aman adalah menguji profil usaha Anda terhadap aturannya sejak awal — kami lakukan itu di tahap pemetaan, sebelum Anda mengeluarkan biaya program apa pun." },
      { q: "Bagaimana target pengembalian kemasannya dan apa risikonya bila tidak tercapai?", a: "Target pengembalian diatur bertahap dan naik tiap fase menurut jenis bahan kemasan — perusahaan tidak diminta langsung memulihkan semua kemasan, tapi harus menunjukkan tren nyata. Risiko keterlambatan menyusun rencana dan melaporkan berupa teguran administratif sampai sanksi sesuai ketentuan persampahan — dan di sisi lain ada risiko reputasi yang sering lebih mahal, karena isu sampah kemasan paling mudah diangkat publik. Strategi kami: mulai dari data yang jujur, target fase pertama yang pasti tercapai, lalu naik bertahap — kepatuhan yang berkelanjutan mengalahkan program besar yang hanya berjalan satu tahun." },
      { q: "Berapa biaya menjalankan skema EPR untuk perusahaan kami?", a: "Biayanya tersusun dari tiga lapis: jasa penyusunan peta kewajiban dan roadmap (mulai dari kisaran Rp 8 juta), biaya skema koleksi itu sendiri yang bergantung volume kemasan dan wilayah — di sini ada opsi kemitraan yang membagi beban dengan pengelola daur ulang — dan biaya pelaporan. Kami memberi estimasi ketiga lapisnya sebelum Anda berkomitmen, termasuk opsi kemitraan kolektif bila volumenya belum sepadan untuk skema sendiri. Yang menghemat paling banyak biasanya bukan memilih mitra termurah, melainkan mendesain skema dari data kemasan yang akurat — karena target yang salah dihitung membuat seluruh skema salah ukur." },
    ],
    related: ["izin-lingkungan", "laporan-keberlanjutan", "bpom", "izin-distribusi"],
  },
  {
    slug: "pembiayaan-hijau",
    tagline: "Modal murah ada — ia hanya menyukai proyek yang bisa membuktikan bahwa ia hijau.",
    heroSub:
      "Strukturisasi green bond, sukuk hijau, dan sustainability-linked loan menurut POJK 60/2017 — dari kelayakan proyek, framework pembiayaan, opini second party, sampai negosiasi dengan pemberi dana — untuk proyek berkelanjutan yang layak dibayar murah oleh pasar.",
    timeline: "2–4 bulan untuk kelayakan & framework, terpisah dari proses penerbitan atau negosiasi bank",
    intro: [
      "Pasar pembiayaan hijau Indonesia sudah punya fondasi hukumnya: POJK 60/2017 mengatur penerbitan Efek Berwujud Aset Berkelanjutan — green bond dan sukuk hijau — dengan tuntutan inti: dana hanya boleh mengalir ke proyek hijau yang dinyatakan (use of proceeds), dikelola terpisah, dan dilaporkan alokasinya. Di sisi perbankan, fasilitas sustainability-linked loan mengaitkan bunga dengan tercapainya KPI keberlanjutan peminjam. Spektrum proyek yang diterima cukup lebar: energi terbarukan, efisiensi energi, transportasi rendah karbon, bangunan hijau, serta pengelolaan air dan sampah. Imbalannya nyata: penerbit memanggil dana dengan bunga kompetitif, membuka akses investor global yang memakai mandat hijau, dan membangun rekam jejak ESG yang dipakai untuk transaksi berikutnya.",
      "Kesalahan yang membuat proyek ditolak pasar: mengklaim hijau tanpa framework — tidak ada dokumen yang menyatakan kriteria proyek, proses evaluasi, dan pengelolaan dana, sehingga investor dan regulator tidak punya dasar percaya. Proyek campur (sebagian hijau, sebagian bukan) tidak ditata proyeksinya. Opini second party dilewati demi hemat — padahal inilah dokumen yang menjawab keraguan investor. Dana tidak dipantau alokasinya sehingga laporan tahunan macet dan pemanggilan berikutnya menjadi pertanyaan. KPI sustainability-linked loan dipilih terlalu mudah sehingga dipertanyakan pemberi dana — bunga berkurang tanpa perubahan nyata, dan reputasinya jebol.",
      "Kami menyusun jalannya dari awal: asesmen kelayakan proyek terhadap taksonomi hijau, penyusunan green financing framework (use of proceeds, proses evaluasi, pengelolaan dana, pelaporan), lalu koordinasi opini second party dengan penyedia yang punya kredibilitas di mata investor. Dokumen penawaran dan pendampingan negosiasi dengan bank maupun investor kami bawa sampai kesepakatan. Setelah dana cair, sistem pelaporan alokasi kami tata agar laporan tahunan berjalan otomatis — karena kredibilitas pembiayaan hijau diuji bukan saat penerbitan, tapi tiap kali laporan alokasi terbit.",
    ],
    benefits: [
      { title: "Bunga yang lebih kompetitif", desc: "Proyek yang terbukti hijau dibayar lebih murah oleh pasar — selisih bunga bertahun-tahun sering lebih besar dari biaya strukturisasi." },
      { title: "Akses investor global", desc: "Framework dan opini second party membuka investor yang memakai mandat hijau — basis dana lebih luas dari jalur konvensional." },
      { title: "Kredibilitas yang teruji", desc: "Opini second party menjawab keraguan sebelum ditanya — proyek Anda masuk daftar pendek, bukan daftar ragu." },
      { title: "Pelaporan alokasi beres", desc: "Sistem pemantauan use of proceeds tertata sejak awal — laporan tahunan terbit tepat waktu, pemanggilan berikutnya aman." },
      { title: "KPI SLL yang masuk akal", desc: "Sasaran berkelanjutan dipilih terukur dan relevan — bunga berkurang karena perubahan nyata, bukan kompromi kosong." },
    ],
    process: [
      { title: "Kelayakan proyek & taksonomi", desc: "Proyek diuji terhadap taksonomi hijau — struktur pendanaan yang paling cocok (bond, sukuk, pinjaman) direkomendasikan." },
      { title: "Framework pembiayaan hijau", desc: "Use of proceeds, kriteria proyek, dan pengelolaan dana disusun — dokumen menjadi fondasi keyakinan pemberi dana." },
      { title: "Opini second party & dokumen", desc: "Penyedia opini dipilih dan dikoordinasikan — dokumen penawaran dan pelaporan disiapkan lengkap." },
      { title: "Negosiasi & pelaporan pasca", desc: "Pendampingan bicara dengan bank dan investor — sistem pelaporan alokasi berjalan sampai dana habis dialokasikan." },
    ],
    requirements: [
      "Profil proyek: sektor, teknologi, rencana anggaran biaya, dan proyeksi keuangan",
      "Laporan keuangan perusahaan 2–3 tahun terakhir (audited bila ada)",
      "Perizinan proyek: izin lingkungan, NIB, izin lokasi atau izin usaha terkait",
      "Preferensi struktur pendanaan: bond, sukuk, atau pinjaman — atau permintaan bank yang sudah masuk",
      "Komitmen manajemen untuk pelaporan use of proceeds selama masa efek beredar",
    ],
    faqs: [
      { q: "Apa beda green bond, sukuk hijau, dan sustainability-linked loan?", a: "Green bond dan sukuk hijau adalah efek utang yang dana khususnya digarap untuk proyek hijau yang dinyatakan — sukuk adalah versi syariahnya dengan struktur yang sama sesuai prinsip syariah, keduanya diatur POJK 60/2017. Sustainability-linked loan (SLL) adalah pinjaman bank yang bunganya terkait tercapainya target keberlanjutan peminjam — prosesnya lebih ringan dari penerbitan bond, tapi menuntut KPI yang terukur. Pilihan terbaik bergantung skala dana yang dibutuhkan dan kemampuan perusahaan menjalankan pelaporan — kami petakan keduanya di tahap kelayakan sebelum Anda mengikat biaya strukturisasi." },
      { q: "Apakah opini second party wajib dan berapa biaya strukturisasinya?", a: "Untuk green bond yang dicari investor institusi dan mengusung label hijau (termasuk skema ASEAN Green Bond Standards), opini second party praktis menjadi standar pasar — investor dan penilai risiko cenderung menuntutnya meski teks regulasi menempatkannya sebagai instrumen keyakinan. Biaya jasa kami mulai dari kisaran Rp 15 juta untuk kelayakan dan framework, sedangkan tarif penyedia opini second party terpisah dan bervariasi antar penyedia — kami bantu memilih yang kredibilitasnya diakui investor tanpa membayar lebih dari perlu. Total biaya yang sehat biasanya terbayar dari selisih bunga pada tahun pertama." },
      { q: "Proyek seberapa besar yang layak masuk skema pembiayaan hijau?", a: "Penerbitan bond umumnya ekonomis untuk kebutuhan dana besar karena ada biaya strukturisasi, opini, dan pelaporan — untuk kebutuhan di bawah itu, sustainability-linked loan atau fasilitas hijau perbankan biasanya lebih masuk akal. Yang lebih menentukan dari ukuran adalah kualitas: proyek yang jelas sektor hijau di taksonomi, perizinan yang beres, dan proyeksi yang bisa dipertahankan. Kami sering mulai dari sesi kelayakan untuk menjawab pertanyaan paling jujur: apakah proyek ini layak didanai hijau sekarang, perlu apa saja, atau lebih bijak masuk lewat pinjaman bank dulu." },
    ],
    related: ["laporan-keberlanjutan", "kredit-karbon", "restrukturisasi-utang", "jejak-karbon-nzkc"],
  },
  {
    slug: "eudr-komoditas",
    tagline: "Eropa tidak lagi bertanya asal negaranya — ia bertanya koordinat lahirnya.",
    heroSub:
      "Kepatuhan EU Deforestation Regulation 2023/1115 untuk kopi, kakao, sawit, karet, kayu, kedelai, dan turunannya — pemetaan plot lahan, due diligence rantai pasok, dan sistem traceability yang menjaga ekspor Anda tetap melintasi benua.",
    timeline: "8–16 minggu untuk sistem pertama, lalu berjalan tiap musim panen",
    intro: [
      "Regulasi Deforestasi Uni Eropa (EUDR — EU Regulation 2023/1115) mengubah aturan main ekspor komoditas: produk dalam cakupannya — kopi, kakao, kelapa sawit, karet, kayu, kedelai, sapi beserta turunannya — hanya boleh masuk pasar UE bila terbukti tidak berasal dari lahan yang dideforestasi setelah 31 Desember 2020, diproduksi sesuai hukum negara asal, dan disertai due diligence statement. Yang membuatnya berat: pengiriman tidak bisa ditopang laporan perusahaan saja — data harus sampai ke tingkat plot lahan dengan geolocation (koordinat, dan poligon untuk lahan lebih dari empat hektar), dirangkai dari petani sampai kontainer. Setelah penundaan satu tahun, kewajiban penuh berlaku akhir 2025 untuk perusahaan besar dan pertengahan 2026 untuk usaha mikro-kecil — dan beban itu mengalir ke eksportir Indonesia melalui tuntutan buyer.",
      "Kesalahan yang paling mahal: menganggap sertifikasi (RSPO, Rainforest Alliance, Fairtrade) otomatis lolos — EUDR tetap menuntut data plot dan due diligence; sertifikasi membantu, bukan menggantikan. Pembelian dari pengumpul perantara tanpa jejak lahan membuat sebagian rantai tidak bisa dijelasakan — dan satu rantai yang gelap menggugurkan seluruh pengiriman. Koordinat dicatat sebagai titik tunggal padahal lahan luas menuntut poligon. Legalitas lahan petani tidak pernah disusun sehingga saat due diligence ditelusuri balik, dokumen tidak ada. Dan sistem yang dibangun hanya sekali lalu mati — padahal due diligence ini kewajiban tiap pengiriman, bukan sekali untuk selamanya.",
      "Kami membangun kepatuhan yang bertahan lama: pemetaan rantai pasok dan geolocation plot (termasuk pengumpulan poligon untuk lahan luas), pengumpulan dan pemulihan bukti legalitas lahan pemasok, serta penyusunan due diligence statement beserta mitigasi risikonya. Integrasi dengan alur ekspor (API, dokumen lartas, dan pihak yang menandatangani statement) kami rapikan agar tiap pengiriman punya dukungan dokumen penuh. Sistem traceability berkelanjutan kami tata tetap berjalan tiap musim panen — karena regulator UE dan buyer mencari bukti yang bisa diproduksi ulang, bukan laporan yang indah sekali.",
    ],
    benefits: [
      { title: "Pintu UE tetap terbuka", desc: "Due diligence statement dan data plot siap tiap pengiriman — ekspor tidak berhenti di ujung dokumen." },
      { title: "Rantai sampai plot lahan", desc: "Geolocation dan poligon terkumpul dari petani sampai kontainer — tidak ada bagian rantai yang gelap." },
      { title: "Legalitas lahan pulih", desc: "Dokumen legal pemasok yang kurang diidentifikasi dan dipulihkan — due diligence tidak runtuh saat ditelusuri balik." },
      { title: "Bukti yang bisa diproduksi ulang", desc: "Sistem traceability berjalan tiap musim — audit regulator UE dan buyer dijawab dengan data, bukan cerita." },
      { title: "Posisi tawar menguat", desc: "Eksportir yang siap EUDR dipilih buyer yang kekurangan pemasok patuh — kontrak panjang dan harga lebih baik mengikuti." },
    ],
    process: [
      { title: "Pemetaan rantai & plot lahan", desc: "Alur barang digambarkan dari petani sampai ekspor — plot lahan dipetakan dengan geolocation dan poligon sesuai ketentuan." },
      { title: "Legalitas & dokumen pemasok", desc: "Bukti legalitas lahan dan produksi dikumpulkan — dokumen yang kurang diidentifikasi jalur pemulihannya." },
      { title: "Due diligence statement", desc: "Risiko dianalisis dan ditutup — statement disusun sesuai format EUDR untuk tiap pengiriman." },
      { title: "Traceability berkelanjutan", desc: "Sistem pengumpulan data berjalan tiap musim panen — audit dan pemeriksaan dijawab dengan arsip yang hidup." },
    ],
    requirements: [
      "Daftar pemasok atau petani beserta volume pembelian per musim",
      "Peta lahan yang tersedia atau kesediaan survei lapangan (poligon untuk lahan luas)",
      "Dokumen legalitas lahan pemasok yang ada (yang kurang kami petakan jalurnya)",
      "Data ekspor: produk, kode HS, volume, dan negara tujuan UE",
      "Personel penghubung yang memegang rantai pasok dan dokumen ekspor",
    ],
    faqs: [
      { q: "Apakah sertifikasi RSPO atau Rainforest Alliance otomatis lolos EUDR?", a: "Tidak — EUDR adalah kewajiban hukum dengan data wajibnya sendiri: geolocation plot, bukti legalitas, dan due diligence statement per pengiriman. Sertifikasi memperkuat bukti praktik baik dan mengurangi risiko dalam penilaian, namun otoritas UE tidak mengganti due diligence dengan sertifikat pihak ketiga. Praktisnya: perusahaan tersertifikasi yang tidak punya data plot tetap tertahan, sedangkan perusahaan tanpa sertifikasi yang datanya lengkap bisa berjalan. Jalur terbaik adalah memakai sertifikasi sebagai satu lapis bukti di dalam sistem due diligence Anda." },
      { q: "Kapan EUDR mulai berlaku dan siapa yang kena duluan?", a: "Setelah penundaan satu tahun, kewajiban penuh berlaku akhir Desember 2025 untuk perusahaan besar dan pertengahan 2026 untuk usaha mikro serta kecil. Tapi praktiknya beban datang lebih cepat: buyer besar UE yang menyiapkan rantai mereka sudah menagih data plot dan dokumen dari pemasoknya jauh sebelum tenggat — eksportir Indonesia yang menunggu tanggal efektif justru kehilangan buyer yang sudah memilih pemasok siap. Perusahaan kecil tetap harus mematuhinya bila produknya masuk rantai UE, walau tenggatnya lebih longgar." },
      { q: "Berapa biaya menyiapkan kepatuhan EUDR untuk eksportir yang masih kecil?", a: "Biaya terbesarnya bukan jasa penyusunan sistem (jasa kami mulai dari kisaran Rp 15 juta), melainkan pengumpulan data lapangan — memetakan plot lahan dan melengkapi legalitas pemasok, yang biayanya mengikuti jumlah pemasok dan aksesibilitas lokasi. Itulah sebabnya kami menyarankan pendekatan bertingkat: mulai dari pemasok yang menghidupkan ekspor UE Anda, tuntaskan kepatuhannya, lalu perluas ke rantai berikutnya. Biaya ini juga biasanya bisa dibicarakan dengan buyer — banyak dari mereka siap membantu pemasok yang serius, karena mencari pemasok baru jauh lebih mahal bagi mereka." },
    ],
    related: ["esg-rantai-pasok", "lartas-ekspor-komoditas", "api-bea-cukai", "sertifikat-asal"],
  },
  {
    slug: "csr-cdas",
    tagline: "Tanggung jawab sosial yang terukur tidak perlu berbohong di banner.",
    heroSub:
      "Strukturisasi program CSR menurut pasal 74 UU 40/2007 dan dana CDAS migas 1–5% menurut UU 3/2020 — dari perencanaan berbasis kebutuhan masyarakat, mitra pelaksana yang memenuhi syarat, sampai laporan yang tahan diperiksa.",
    timeline: "4–8 minggu untuk strukturisasi; program berjalan tahunan",
    intro: [
      "Bagi PT yang bergerak di bidang sumber daya alam, CSR bukan pilihan anggaran — ia kewajiban pasal 74 UU 40/2007, yang dijabarkan PP 47/2012 tentang tanggung jawab sosial dan lingkungan perseroan yang kegiatannya berkaitan dengan sumber daya alam. Sanksinya bukan peringatan kosong: undang-undang memuat ketentuan pidana berupa denda paling banyak 10% dari anggaran CSR yang tidak dilaksanakan. Untuk industri migas, tanggung jawab itu dibingkai lebih ketat: UU 3/2020 (perubahan kedua UU 22/2001 tentang Migas) mewajibkan pengalokasian dana tanggung jawab sosial dan lingkungan (CDAS) berkisar 1–5% dari net operating revenue — dengan format dan pengawasan khusus, mulai dari SKK Migas. Kewajiban ini menuntut program yang terarah dan terukur, bukan sumbangan yang dipotret.",
      "Kesalahan yang paling sering ditemui: anggaran CSR dihabiskan menjadi sumbangan langsung — foto penyerahan bantuan tanpa program, tanpa indikator, tanpa dokumen perencanaan; saat audit atau pemeriksaan SKK Migas, realisasinya tidak bisa dipertanggungjawabkan. Mitra pelaksana tidak memenuhi kriteria (bukan badan hukum yang bergerak di bidang pemberdayaan) sehingga penyalurannya dipermasalahkan. Dana CDAS dipakai untuk keperluan di luar program — padahal formatnya ketat: dana harus sepenuhnya berupa program pemberdayaan masyarakat dan tidak boleh dimanfaatkan selain sebagai program. Laporan hanya berisi foto kegiatan — tanpa data penerima manfaat, realisasi anggaran, dan dampak.",
      "Kami menata program dari hulu: pemetaan kewajiban dan wilayah sosial, perencanaan program berbasis kebutuhan masyarakat (bukan kebutuhan banner), strukturisasi dan kurasi mitra pelaksana yang memenuhi syarat, serta mekanisme distribusi dan pertanggungjawaban per tahap. Indikator dampak dan laporan tahunan kami susun siap diperiksa — dari pemeriksaan internal, auditor migas, sampai publikasi di laporan keberlanjutan. Untuk perusahaan yang belum punya saluran sah, kami juga menyiapkan struktur mitra seperti yayasan pemberdayaan — karena CSR yang sah dimulai dari saluran yang sah.",
    ],
    benefits: [
      { title: "Kewajiban hukum terpenuhi", desc: "Pasal 74 UU 40/2007 dan aturan CDAS migas dipenuhi dengan dokumen yang benar — risiko denda dan teguran hilang dari daftar khawatir." },
      { title: "Dampak terukur, laporan tahan audit", desc: "Program punya indikator, data penerima, dan realisasi anggaran — pemeriksaan auditor atau regulator dijawab dengan berkas, bukan foto." },
      { title: "CDAS sesuai format migas", desc: "Dana dialokasikan penuh ke program pemberdayaan sesuai ketentuan — tidak ada format yang melenceng di pertengahan tahun." },
      { title: "Mitra pelaksana yang layak", desc: "Kurasi mitra memenuhi syarat dan kontraknya tertulis — penyaluran tidak dipertanyakan kemudian hari." },
      { title: "Cerita CSR yang sah dipublikasikan", desc: "Data program mengalir ke laporan keberlanjutan dan komunikasi perusahaan — anggaran yang keluar menghasilkan reputasi yang masuk." },
    ],
    process: [
      { title: "Pemetaan kewajiban & wilayah", desc: "Status perusahaan diuji terhadap pasal 74 UU 40/2007 dan aturan CDAS — wilayah sosial dan anggaran dipetakan." },
      { title: "Perencanaan program & anggaran", desc: "Program disusun berbasis kebutuhan masyarakat — indikator, target penerima, dan anggaran tertulis di dokumen perencanaan." },
      { title: "Mitra & pelaksanaan", desc: "Mitra pelaksana dikurasi dan dikontrak — distribusi berjalan dengan pertanggungjawaban per tahap." },
      { title: "Pengukuran & laporan", desc: "Dampak diukur dari indikator yang ditetapkan — laporan tahunan tersusun siap diperiksa dan dipublikasikan." },
    ],
    requirements: [
      "Profil perusahaan: sektor usaha (sumber daya alam, migas, atau lainnya) dan struktur anggaran",
      "Lokasi operasi dan wilayah sosial yang terdampak",
      "Dokumen CSR tahun sebelumnya (bila ada — kami periksa kesesuaiannya)",
      "Anggaran CSR/CDAS tahun berjalan atau rencana anggarannya",
      "Personel penghubung yang memegang program (kami selaraskan dengan divisi humas atau hubungan masyarakat)",
    ],
    faqs: [
      { q: "Apakah semua perusahaan wajib CSR dan apa sanksinya kalau diabaikan?", a: "Tidak semua. Kewajiban CSR di UU 40/2007 pasal 74 menjangkau PT yang kegiatan usahanya berkaitan dengan sumber daya alam — dijabarkan PP 47/2012 untuk aspek lingkungan hidup. Sanksinya berupa ketentuan pidana: denda paling banyak 10% dari anggaran CSR yang tidak dilaksanakan. Risiko yang lebih cepat terasa biasanya pemeriksaan kepatuhan dan celah reputasi — untuk migas kewajibannya lebih spesifik lagi lewat CDAS berkisar 1–5% dari net operating revenue." },
      { q: "Apa beda CSR biasa dengan CDAS di industri migas?", a: "CSR pasal 74 adalah kewajiban umum perseroan sumber daya alam dengan ruang pilihan program yang lebih bebas, asal bermanfaat dan terdokumentasi. CDAS di migas jauh lebih kaku: nilainya berkisar 1–5% dari net operating revenue, wajib sepenuhnya berupa program pemberdayaan masyarakat, dan tidak boleh dimanfaatkan untuk hal lain termasuk sumbangan atau donasi. Pengelolaannya juga melewati mekanisme dan pengawasan khusus industri migas. Kesalahan yang sering kami temui: dana CDAS dicampur dengan anggaran CSR umum — begitu tercampur, pertanggungjawabannya kacau dan realisasi dipermasalahkan." },
      { q: "Berapa biaya jasa strukturisasi CSR dan apakah programnya harus besar?", a: "Jasa strukturisasi kami mulai dari kisaran Rp 10 juta untuk satu siklus perencanaan dan tata kelola program — biaya programnya sendiri ditentukan kewajiban anggaran perusahaan Anda, bukan pilihan kami. Untuk perusahaan dengan anggaran lebih kecil, program yang kami desain tetap memenuhi syarat kewajiban sambil memberi dampak nyata: fokus pada satu masalah yang dipilih dari data kebutuhan masyarakat, bukan lima program yang semuanya setengah jalan. Yang menaikkan biaya biasanya bukan ukuran anggaran, melainkan jumlah wilayah dan kompleksitas mitra — dan itu kami petakan di awal, bukan kejutan di tengah tahun." },
    ],
    related: ["pendirian-yayasan", "laporan-keberlanjutan", "pt-pma", "izin-tambang-iup"],
  },
];

/**
 * LAPISAN PENGAYAAN — ESG & Keberlanjutan.
 * whoFor, deliverables, costs, legalBasis per slug.
 * Digabung otomatis oleh getServiceContent() di index.ts.
 */
export const esgEnrichment: Record<string, ServiceEnrichment> = {
  "laporan-keberlanjutan": {
    whoFor: [
      "Emiten dan perusahaan publik yang wajib menyusun Laporan Keberlanjutan sesuai POJK 51/2017",
      "Pemasok buyer global yang diminta data ESG sebelum kontrak diperpanjang",
      "Perusahaan yang rutin mengikuti tender BUMN atau pemerintah dengan penilaian ESG",
      "Perusahaan yang menyiapkan diri mengakses pembiayaan hijau atau green bond",
    ],
    deliverables: [
      "Laporan Keberlanjutan siap publikasi (dokumen utuh beserta versi desain cetak/digital)",
      "Matriks materialitas ganda beserta dokumentasi proses penyusunannya",
      "Sistem dan template pengumpulan data ESG per departemen untuk siklus tahunan",
      "Baseline dan indikator utama (KPI) energi, emisi, sosial, dan tata kelola",
      "Ringkasan eksekutif dan materi publikasi untuk kanal investor serta mitra",
    ],
    costs: [
      { item: "Jasa penyusunan laporan DIGIMAN.ID", note: "mulai Rp 15 jt — sesuai skala data dan jumlah lokasi" },
      { item: "Desain laporan & materi publikasi", note: "menyesuaikan panjang laporan dan kebutuhan cetak/digital" },
      { item: "Verifikasi pihak ketiga (opsional)", note: "bila diminta OJK atau buyer — biaya penyedia verifikasi terpisah dan transparan" },
      { item: "Pelatihan tim internal", note: "agar siklus tahun berikutnya berjalan tanpa ketergantungan penuh" },
      { item: "Biaya publikasi kanal resmi", note: "umumnya tanpa biaya negara — diunggah ke situs perusahaan/kanal OJK sesuai ketentuan" },
    ],
    legalBasis: [
      "POJK No. 51/POJK.03/2017 tentang Penerapan Keuangan Berkelanjutan bagi Lembaga Jasa Keuangan, Emiten, dan Perusahaan Publik",
      "GRI Universal Standards — kerangka pelaporan keberlanjutan paling luas dipakai",
      "IFRS S1 dan IFRS S2 (ISSB) — standar pengungkapan keberlanjutan global",
      "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup (dasar data kinerja lingkungan)",
    ],
  },

  "jejak-karbon-nzkc": {
    whoFor: [
      "Perusahaan manufaktur dan energi yang mulai dituntut data emisi oleh buyer dan bank",
      "Emiten yang membutuhkan angka emisi untuk laporan keberlanjutan POJK 51/2017",
      "Perusahaan yang menyiapkan roadmap net zero atau masuk skema nilai ekonomi karbon",
      "Perusahaan multi-lokasi yang ingin membandingkan kinerja karbon antarlokasi",
    ],
    deliverables: [
      "Laporan kalkulasi jejak karbon Scope 1, 2, dan 3 dengan faktor emisi yang dirujuk",
      "Tabel intensitas emisi per unit usaha (ton CO2e per unit produksi atau omzet)",
      "Roadmap Net Zero berjenjang dengan milestone dan opsi mitigasi berbiaya",
      "Template pengumpulan data emisi untuk siklus penghitungan tahunan",
      "Dokumen pendukung verifikasi pihak ketiga dan laporan keberlanjutan",
    ],
    costs: [
      { item: "Jasa penghitungan & roadmap DIGIMAN.ID", note: "mulai Rp 12 jt — sesuai jumlah sumber emisi dan kedalaman Scope 3" },
      { item: "Survei lapangan (bila data tidak lengkap)", note: "diestimasi sebelum berangkat — khusus lokasi yang datanya tidak terdokumentasi" },
      { item: "Verifikasi pihak ketiga (opsional)", note: "biaya penyedia verifikasi terpisah — kami bantu memilih dan menyiapkan dokumennya" },
      { item: "Perhitungan ulang tahunan", note: "jauh lebih ringan karena baseline dan template sudah berdiri" },
      { item: "Data faktor emisi", note: "memakai faktor resmi Kementerian LH/ESDM dan IPCC — umumnya tanpa biaya lisensi" },
    ],
    legalBasis: [
      "Perpres No. 98 Tahun 2021 tentang Pelaksanaan Nilai Ekonomi Karbon untuk Pencapaian Target NDC dan Pengendalian Emisi GRK dalam Pembangunan Nasional",
      "PP No. 98 Tahun 2021 tentang Penyelenggaraan Nilai Ekonomi Karbon serta Tata Kelola Karbon dalam Kerangka Pembangunan Berkelanjutan",
      "SNI ISO 14064-1 tentang Kuantifikasi dan Pelaporan Emisi GRK di Tingkat Organisasi",
      "GHG Protocol Corporate Accounting and Reporting Standard (WRI/WBCSD)",
    ],
  },

  "kredit-karbon": {
    whoFor: [
      "Pemilik lahan dan pengelola hutan masyarakat yang ingin lahan produktifnya menghasilkan pendapatan karbon",
      "Perusahaan pengelola sampah dan TPA yang menekan emisi metana",
      "Pengembang energi terbarukan yang ingin menambah aliran pendapatan dari proyeknya",
      "Perusahaan yang sudah punya program lingkungan dan ingin monetisasi pengurangan emisinya",
    ],
    deliverables: [
      "Dokumen studi kelayakan dan baseline emisi proyek",
      "Project Design Document (PDD) dan sistem MRV beserta jadwal monitoringnya",
      "Pendaftaran proyek di SRN-PPI sampai kredit tercatat resmi",
      "Dokumen verifikasi dan bukti penerbitan kredit",
      "Koneksi dan negosiasi awal dengan pembeli kredit karbon",
    ],
    costs: [
      { item: "Jasa pengembangan proyek DIGIMAN.ID", note: "mulai Rp 20 jt untuk feasibility & baseline — tahap lanjutan tertulis di penawaran" },
      { item: "Biaya verifikator independen", note: "tergantung standar dan luas proyek — kami bantu memilih penyedia bereputasi" },
      { item: "Biaya pendaftaran & penerbitan", note: "sesuai ketentuan SRN-PPI atau standar terpilih — transparan sejak awal" },
      { item: "Survei lapangan & data lahan", note: "dikalikan luas dan aksesibilitas lokasi — diestimasi sebelum survei" },
      { item: "Fee keberhasilan pemasaran kredit", note: "persentase dari transaksi — hanya saat kredit terjual, tertulis di perjanjian" },
    ],
    legalBasis: [
      "Perpres No. 98 Tahun 2021 tentang Pelaksanaan Nilai Ekonomi Karbon",
      "PP No. 98 Tahun 2021 tentang Penyelenggaraan Nilai Ekonomi Karbon serta Tata Kelola Karbon",
      "POJK No. 14 Tahun 2023 tentang Perdagangan Karbon melalui Bursa (Bursa Karbon Indonesia)",
      "SNI ISO 14064-2 tentang Kuantifikasi, Pemantauan, dan Pelaporan Pengurangan Emisi GRK Proyek",
    ],
  },

  "esg-rantai-pasok": {
    whoFor: [
      "Pemasok dan eksportir yang menghadapi kuesioner ESG atau audit buyer internasional",
      "Perusahaan manufaktur dengan banyak pemasok yang perlu dikelola risikonya",
      "Brand dan retail yang sedang membangun standar vendor formal",
      "Perusahaan yang terdampak regulasi due diligence rantai pasok di pasar tujuannya",
    ],
    deliverables: [
      "Laporan assessment ESG bertingkat untuk seluruh pemasok prioritas",
      "Vendor Code of Conduct siap tanda tangan beserta naskah pemberlakuan",
      "Rencana perbaikan (CAP) per pemasok dengan tenggat dan prioritas",
      "Paket dokumen bukti kepatuhan untuk kebutuhan audit dan kuesioner",
      "Sistem pemantauan berkala dan arsip kepatuhan vendor yang terstruktur",
    ],
    costs: [
      { item: "Jasa assessment & penyiapan DIGIMAN.ID", note: "mulai Rp 10 jt — sesuai jumlah pemasok dan kedalaman pemeriksaan" },
      { item: "Kunjungan lapangan ke lokasi pemasok", note: "dikalikan lokasi dan jangkauan — diestimasi sebelum jadwal" },
      { item: "Biaya audit pihak ketiga (SMETA dengan badan sertifikasi)", note: "bila buyer menuntut audit tersertifikasi — tarif badan audit terpisah" },
      { item: "Penyusunan kebijakan & dokumen bukti", note: "termasuk format kepegawaian, K3, dan lingkungan dasar" },
      { item: "Pemantauan berkala (opsional)", note: "siklus tahunan atau semesteran agar status vendor tetap hidup" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan (pilar ketenagakerjaan yang diperiksa audit sosial)",
      "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
      "Directive (UE) 2024/1760 tentang Due Diligence Keberlanjutan Korporasi (CSDDD)",
      "SMETA Best Practice Guidance & ETI Base Code — standar audit yang umum dituntut buyer",
    ],
  },

  "gedung-hijau": {
    whoFor: [
      "Pemilik dan pengelola gedung perkantoran, hotel, atau pusat perbelanjaan yang menekan biaya listrik dan air",
      "Developer yang menyiapkan gedung baru dengan target rating hijau untuk pemasaran",
      "Perusahaan yang mengejar tender instansi dengan syarat bangunan hijau",
      "Pengelola kawasan industri yang membangun standar gedung hijau bagi tenant",
    ],
    deliverables: [
      "Laporan gap analysis kriteria gedung hijau beserta skema dan rating target",
      "Hasil simulasi energi dan air beserta rekomendasi perbaikan berurutan biaya-dampak",
      "Dokumen bukti kriteria lengkap dalam format penilaian GBCI/EDGE",
      "Pendampingan penuh hingga sertifikat resmi terbit",
      "Perhitungan balik modal per rekomendasi dan panduan pemeliharaan kinerja pasca-sertifikasi",
    ],
    costs: [
      { item: "Jasa penyiapan & pendampingan DIGIMAN.ID", note: "mulai Rp 15 jt — sesuai luas gedung dan skema sertifikasi" },
      { item: "Biaya penilaian GBCI/EDGE", note: "tarif lembaga penilai terpisah — dihitung dari luas dan jenis skema" },
      { item: "Biaya perbaikan gedung", note: "disortir biaya-dampak; perbaikan minor sering menentukan lolos" },
      { item: "Simulasi energi/air", note: "termasuk dalam jasa — bila perlu model khusus, diestimasi dulu" },
      { item: "Masa berlaku & pembaruan", note: "sertifikat memiliki masa berlaku — panduan pemeliharaan diserahkan saat terbit" },
    ],
    legalBasis: [
      "PP No. 16 Tahun 2021 tentang Pelaksanaan UU No. 28 Tahun 2002 tentang Bangunan Gedung (PBG & SLF)",
      "SNI 6390:2011 tentang Konservasi Energi pada Bangunan Gedung",
      "Peraturan Daerah DKI Jakarta No. 2 Tahun 2012 beserta Pergub No. 38 Tahun 2012 tentang Bangunan Gedung Hijau",
      "GREENSHIP Rating Tools (GBCI) & EDGE (IFC) — standar sertifikasi yang diikuti",
    ],
  },

  "sertifikasi-b-corp": {
    whoFor: [
      "Perusahaan tujuan ganda yang menjadikan dampak sosial-lingkungan sebagai inti model bisnisnya",
      "Brand konsumen yang butuh kredensial keberdampak independen di pasar yang penuh klaim hijau",
      "Perusahaan yang mendekati investor impact dan butuh bukti tata kelola yang terverifikasi",
      "Perusahaan sedang-kecil dengan struktur sederhana yang ingin membangun fondasi tata kelola sejak dini",
    ],
    deliverables: [
      "Baseline B Impact Assessment beserta peta skor per pilar",
      "Paket kebijakan tertulis yang dibutuhkan: tata kelola, SDM, lingkungan, etika",
      "Rancangan amendemen akta untuk klausul stakeholder governance (kerja sama notaris)",
      "Dokumen bukti verifikasi yang terstruktur sesuai jawaban BIA",
      "Pendampingan verifikasi B Lab dan materi publikasi pasca-sertifikasi",
    ],
    costs: [
      { item: "Jasa penyiapan B Corp DIGIMAN.ID", note: "mulai Rp 25 jt — sesuai ukuran perusahaan dan celah skor" },
      { item: "Biaya tahunan B Lab", note: "dihitung dari pendapatan perusahaan — dibayar langsung ke B Lab setelah lolos" },
      { item: "Biaya notaris amendemen akta", note: "menyesuaikan notaris Anda — kami siapkan naskah klausulnya" },
      { item: "Perbaikan operasional yang direkomendasikan", note: "dari kebijakan hingga indikator — diurutkan dampak skor terbesar" },
      { item: "Biaya verifikasi B Lab (bila dikenakan)", note: "bergantung kategori — dikonfirmasi B Lab saat pengajuan" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (dasar amendemen akta dan tujuan perusahaan)",
      "B Lab Performance Requirements & B Impact Assessment — kerangka penilaian dan ambang skor 80",
      "SNI ISO 26000 tentang Tanggung Jawab Sosial — panduan yang selaras dengan pilar BIA",
      "UU No. 13 Tahun 2003 (pilar kebijakan ketenagakerjaan yang dinilai BIA)",
    ],
  },

  "epr-kemasan": {
    whoFor: [
      "Pabrikan makanan, minuman, dan barang konsumsi yang mengedarkan kemasan dalam volume besar",
      "Importir produk beremasan yang menurut aturan terjangkau definisi produsen",
      "Pengecer dan platform dengan kemasan jualan besar yang mulai ditagih kewajibannya",
      "Perusahaan yang sudah punya program lingkungan dan ingin formalisasi sesuai regulasi",
    ],
    deliverables: [
      "Laporan pemetaan kewajiban EPR perusahaan beserta status keterjangkauan regulasi",
      "Data bobot kemasan per bahan dan target pengembalian bertahap yang disepakati",
      "Desain skema koleksi beserta daftar dan perjanjian mitra pelaksana",
      "Format dan jadwal pelaporan ke SIPSN/DPLH",
      "Integrasi data program ke laporan keberlanjutan dan materi komunikasi",
    ],
    costs: [
      { item: "Jasa pemetaan & roadmap DIGIMAN.ID", note: "mulai Rp 8 jt — sesuai jumlah produk dan kompleksitas kemasan" },
      { item: "Biaya skema koleksi operasional", note: "tergantung volume dan wilayah — opsi kemitraan mengurangi beban, dihitung dulu" },
      { item: "Perjanjian & kurasi mitra daur ulang", note: "termasuk seleksi mitra yang realisasinya bisa didokumentasikan" },
      { item: "Pelaporan tahunan", note: "format dan jadwal dikunci — laporan tahun kedua lebih ringan karena data mengalir" },
      { item: "Audit data kemasan (bila data belum ada)", note: "dari daftar produk dan faktur — estimasi disampaikan sebelum dimulai" },
    ],
    legalBasis: [
      "PP No. 81 Tahun 2023 tentang Pengelolaan Sampah Kemasan dan Barang Tertentu",
      "UU No. 18 Tahun 2008 tentang Pengelolaan Sampah",
      "Perpres No. 97 Tahun 2017 tentang Kebijakan dan Strategi Nasional Pengelolaan Sampah Rumah Tangga",
      "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup (dasar sanksi administratif)",
    ],
  },

  "pembiayaan-hijau": {
    whoFor: [
      "Perusahaan dengan proyek energi terbarukan, efisiensi energi, atau infrastruktur hijau yang butuh dana besar",
      "Emiten yang ingin memanggil dana dengan label hijau menurut POJK 60/2017",
      "Perusahaan yang ditawari sustainability-linked loan bank dan butuh KPI yang terukur",
      "Pengembang bangunan hijau dan proyek air/limbah yang mencari pembiayaan berbunga kompetitif",
    ],
    deliverables: [
      "Laporan asesmen kelayakan proyek terhadap taksonomi hijau",
      "Green/Sustainable Financing Framework lengkap: use of proceeds, evaluasi, pengelolaan dana, pelaporan",
      "Koordinasi dan penyiapan dokumen opini second party",
      "Materi negosiasi untuk bank dan investor beserta proyeksi biaya dana",
      "Sistem pelaporan alokasi proceeds untuk laporan tahunan pasca penerbitan",
    ],
    costs: [
      { item: "Jasa kelayakan & framework DIGIMAN.ID", note: "mulai Rp 15 jt — sesuai jenis efek dan kompleksitas proyek" },
      { item: "Tarif penyedia opini second party", note: "terpisah, bervariasi antar penyedia — kami bantu memilih yang diakui investor" },
      { item: "Biaya penerbitan efek (trustee, rating, legal)", note: "bila sampai penerbitan bond/sukuk — dikalikan struktur dan rating" },
      { item: "Negosiasi & pendampingan bank", note: "termasuk penataan KPI untuk jalur sustainability-linked loan" },
      { item: "Pelaporan alokasi tahunan", note: "ringan bila sistemnya tertata sejak awal — tersedia sebagai layanan berjalan" },
    ],
    legalBasis: [
      "POJK No. 60/POJK.04/2017 tentang Penerbitan dan Persyaratan Efek Berwujud Aset Berkelanjutan",
      "POJK No. 51/POJK.03/2017 (pelaporan keberlanjutan yang menyertai penerbit hijau)",
      "ICMA Green Bond Principles & ASEAN Green Bond Standards — kerangka pasar yang diikuti investor",
      "Peraturan OJK tentang tata kelola penerbitan efek utang perusahaan terbuka",
    ],
  },

  "eudr-komoditas": {
    whoFor: [
      "Eksportir kopi, kakao, sawit, karet, kayu, dan kedelai yang menjual ke pasar Uni Eropa",
      "Pengumpul dan pemasok komoditas yang menjadi bagian rantai buyer global",
      "Perusahaan sawit dan kopi dengan petani mitra yang lahan belum terpeta",
      "Trader dan manufaktur turunan komoditas (cokelat, furnitur, minyak olahan) yang terjangkau EUDR",
    ],
    deliverables: [
      "Peta rantai pasok dan basis data geolocation plot lahan pemasok",
      "Paket bukti legalitas lahan dan produksi per pemasok utama",
      "Due diligence statement sesuai format EUDR untuk pengiriman",
      "Sistem traceability dan SOP pengumpulan data tiap musim panen",
      "Paket kesiapan menghadapi pemeriksaan otoritas UE dan kuesioner buyer",
    ],
    costs: [
      { item: "Jasa penyiapan EUDR DIGIMAN.ID", note: "mulai Rp 15 jt — sesuai jumlah pemasok dan kedalaman rantai" },
      { item: "Survei geolocation lapangan", note: "dikalikan jumlah plot dan akses lokasi — diestimasi sebelum tim berangkat" },
      { item: "Pemulihan legalitas lahan pemasok", note: "bila dokumen kurang — biaya mengikuti jenis kekurangannya" },
      { item: "Sistem traceability & pemeliharaan", note: "layanan berjalan tiap musim — data tetap hidup, bukan laporan sekali" },
      { item: "Konsultasi buyer & audit kesiapan", note: "menjawab kuesioner dan audit buyer UE atas rantai Anda" },
    ],
    legalBasis: [
      "EU Regulation 2023/1115 tentang produk bebas deforestasi (EUDR)",
      "UU No. 41 Tahun 1999 tentang Kehutanan (dasar legalitas kawasan dan bahan kayu)",
      "UU No. 18 Tahun 2013 tentang Pencegahan dan Pemberantasan Perusakan Hutan",
      "PP No. 5 Tahun 2021 tentang Penyelenggaraan Perizinan Berusaha Berbasis Risiko (legalitas usaha dan lahan di OSS)",
    ],
  },

  "csr-cdas": {
    whoFor: [
      "PT bergerak di bidang sumber daya alam (tambang, migas, kehutanan, energi) yang wajib CSR pasal 74",
      "Kontraktor dan pemegang wilayah kerja migas yang mengelola dana CDAS 1–5%",
      "Perusahaan dengan anggaran CSR besar yang realisasinya belum terdokumentasi rapi",
      "Perusahaan yang ingin program CSR menjadi aset reputasi dan materi laporan keberlanjutan",
    ],
    deliverables: [
      "Dokumen perencanaan program CSR/CDAS berbasis kebutuhan masyarakat",
      "Struktur tata kelola program: kurasi mitra, kontrak, dan mekanisme distribusi",
      "Indikator dampak dan format pendataan penerima manfaat",
      "Laporan realisasi tahunan siap diperiksa (auditor, SKK Migas/OJK, regulator)",
      "Materi integrasi program ke laporan keberlanjutan dan komunikasi perusahaan",
    ],
    costs: [
      { item: "Jasa strukturisasi DIGIMAN.ID", note: "mulai Rp 10 jt — sesuai jumlah wilayah dan kompleksitas program" },
      { item: "Biaya program CSR/CDAS", note: "ditentukan kewajiban anggaran perusahaan — desain program kami sesuaikan" },
      { item: "Kurasi & kontrak mitra pelaksana", note: "termasuk pemeriksaan syarat legal mitra yang bergerak di bidang pemberdayaan" },
      { item: "Pendirian yayasan atau lembaga mitra (opsional)", note: "bila belum ada saluran sah — diatur terpisah sesuai layanan pendirian" },
      { item: "Laporan tahunan & kesiapan audit", note: "persiapan menghadapi pemeriksaan dan publikasi" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas, Pasal 74 (kewajiban CSR dan sanksi denda 10% anggaran)",
      "PP No. 47 Tahun 2012 tentang Tanggung Jawab Sosial dan Lingkungan Perseroan Terbatas",
      "UU No. 3 Tahun 2020 (Perubahan Kedua UU No. 22 Tahun 2001 tentang Migas) — dana tanggung jawab sosial dan lingkungan 1–5% net operating revenue",
      "Peraturan SKK Migas PTK-007/SOK01/2013 tentang Pengelolaan Program Pengembangan Masyarakat (teknis CDAS migas)",
    ],
  },
};
