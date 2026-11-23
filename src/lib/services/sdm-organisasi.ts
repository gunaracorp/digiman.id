import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — SDM & ORGANISASI (10 layanan).
 * Struktur organisasi & grading, audit payroll, kontrak kerja, magang,
 * alih daya, PHK terkelola, LKS Bipartit, antisuap, penilaian kinerja,
 * kebijakan remote-hybrid.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const sdmOrganisasiContent: ServiceContent[] = [
  {
    slug: "struktur-organisasi-grading",
    tagline: "Kekacauan tidak lahir dari orang yang banyak — ia lahir dari peran yang samar.",
    heroSub:
      "Struktur organisasi, jenjang jabatan (grading), rentang gaji, dan kartu jabatan yang hidup — untuk perusahaan yang tumbuh cepat dan kehabisan cara adil menentukan gaji, promosi, dan tanggung jawab.",
    timeline: "4–8 minggu bertahap, sesuai ukuran organisasi",
    intro: [
      "Perusahaan yang tumbuh dari sepuluh menjadi enam puluh orang jarang punya waktu menyusun struktur — yang ada hanya kebiasaan: satu orang satu tugas, gaji ditentukan per negosiasi, dan promosi lahir dari kedekatan. Ketika organisasi kecil, cara ini masih berjalan; ketika besar, ia menjadi sumber konflik yang paling mahal. Hukum juga menuntut kejelasan: PP No. 36 Tahun 2021 mewajibkan pengusaha menyusun struktur dan skala upah dalam perusahaan — dokumen yang menjelaskan mengapa satu jabatan bernilai lebih dari jabatan lain. Tanpa struktur yang benar, struktur dan skala upah yang disusun pun hanya tempelan yang tidak menjawab pertanyaan pemeriksa, apalagi pertanyaan karyawan.",
      "Akun kerugiannya dihitung bukan dari biaya konsultan yang tidak jadi dibayar, melainkan dari anomali gaji yang menumpuk diam-diam: karyawan baru yang ditawar lebih tinggi dari atasannya, dua orang dengan pekerjaan sama berbeda gaji sebesar empat puluh persen, dan manajer yang tidak bisa menjelaskan mengapa. Pertanyaan 'kenapa dia gajinya lebih besar' akhirnya tidak punya jawaban tertulis — dan di ruang percakapan informal, jawabannya menyusun sendiri: karena dia dekat dengan bos. Orang terbaik membaca pola itu lebih cepat dari siapa pun, lalu pergi ke tempat yang jalur kariernya kelihatan; yang bertahan sering bukan yang paling produktif. Saat pengadilan atau pemeriksa meminta dasar keputusan pengupahan, perusahaan yang tidak punya struktur berdiri di depan jebakan yang ia bangun sendiri.",
      "Kami menata fondasi ini secara utuh dan bertahap: pemetaan jabatan dengan wawancara pemegang peran, desain jenjang grading berdasarkan bobot tanggung jawab dan kompleksitas, penetapan rentang gaji per level dengan rujukan pasar, sampai kartu jabatan yang menjelaskan tanggung jawab dan indikator setiap peran. Implementasi dibagi dalam kalender realistis — anomali gaji yang sudah terjadi tidak dikoreksi sekaligus, melainkan disusun roadmap-nya agar anggaran dan kepercayaan karyawan sama-sama terjaga. Setiap keputusan dibekali dokumen: struktur yang sesuai ketentuan pengupahan, kartu jabatan, dan panduan komunikasi kepada karyawan. Hasilnya, keputusan SDM berhenti menjadi keputusan pribadi dan mulai menjadi keputusan perusahaan.",
    ],
    benefits: [
      { title: "Keputusan gaji punya dasar", desc: "Rentang gaji per level menutup ruang anomali — tawaran rekrutmen dan kenaikan tidak lagi lahir dari negosiasi semata." },
      { title: "Jalur karier yang kelihatan", desc: "Karyawan tahu langkah berikutnya dan syaratnya — retensi naik karena masa depan tidak lagi ditebak." },
      { title: "Promosi yang bisa dipertanggungjawabkan", desc: "Kriteria tertulis per level membuat keputusan karier objektif — dan tahan diperiksa, baik oleh karyawan maupun pemeriksa." },
      { title: "Rekrutmen dan payroll lebih cepat", desc: "Level menentukan kisaran tawaran dan perhitungan upah — proses berjalan tanpa menunggu keputusan sepihak di setiap kasus." },
      { title: "Dokumen kepatuhan sekalian jadi", desc: "Struktur dan skala upah tersusun sesuai PP 36/2021 — dokumen yang sama melindungi Anda saat inspeksi tenaga kerja." },
    ],
    process: [
      { title: "Pemetaan jabatan & alur kerja", desc: "Analisis peran, wawancara pemegang jabatan, dan pemetaan alur kerja — peta organisasi sekarang dan yang seharusnya tersusun." },
      { title: "Desain grading & rentang gaji", desc: "Jabatan dinilai bobot tanggung jawabnya, dikelompokkan ke jenjang, dan diberi rentang gaji berdasarkan data pasar." },
      { title: "Kartu jabatan & SOP peran", desc: "Setiap peran mendapat kartu jabatan: tanggung jawab, batasan, indikator kinerja — dokumen yang menjadi dasar rekrutmen dan penilaian." },
      { title: "Implementasi bertahap", desc: "Kalender transisi, roadmap koreksi gaji, dan panduan komunikasi ke karyawan — struktur berjalan tanpa mengguncang kepercayaan." },
    ],
    requirements: [
      "Profil perusahaan: jumlah karyawan per fungsi dan struktur yang berjalan hari ini (sketsa kasar pun cukup)",
      "Data gaji karyawan saat ini apa adanya — kerahasiaan datanya kami jaga penuh",
      "Jabatan-jabatan yang paling rawan ketidakjelasan atau konflik",
      "Rencana bisnis 1–3 tahun, karena struktur disusun untuk perusahaan yang akan datang, bukan hanya yang hari ini",
      "Nama pemilik keputusan di sisi Anda (pemilik usaha, direksi, atau kepala HRD) yang menyetujui setiap tahap",
    ],
    faqs: [
      { q: "Berapa biaya menyusun struktur organisasi dan job grading?", a: "Paketnya mulai Rp 10 juta, tergantung jumlah jabatan yang dipetakan dan kedalaman benchmark gaji yang Anda butuhkan. Perusahaan di bawah 50 orang umumnya selesai di kisaran awal; perusahaan dengan banyak fungsi dan multi-cabang membutuhkan lingkup lebih besar. Semua angka kami tulis penuh di penawaran sebelum pekerjaan dimulai — tanpa biaya siluman di tengah jalan." },
      { q: "Apakah semua gaji harus disesuaikan setelah grading selesai dibuat?", a: "Tidak harus sekaligus, dan justru tidak disarankan. Yang kami serahkan adalah roadmap koreksi bertahap: anomali paling merusak dikoreksi lebih dulu, sisanya mengikuti siklus anggaran tahunan. Yang penting komitmen pimpinan pada roadmap — grading yang dibuat lalu diabaikan lebih buruk daripada tidak dibuat, karena janji yang tidak ditepati terbaca oleh seluruh karyawan." },
      { q: "Perusahaan saya baru sekitar lima belas orang — apakah perlu grading sekarang?", a: "Pada skala itu yang mendesak bukan grading penuh, melainkan kejelasan jabatan dan struktur skala upah sederhana agar dasar pengupahan sudah benar sejak dini. Grading penuh baru benar-benar berdampak ketika rekrutmen ramai, promosi mulai sering, atau karyawan mulai membandingkan gaji. Banyak klien menyiapkan kerangkanya sekarang dan mengisi jenjangnya saat tumbuh — biayanya jauh lebih murah daripada merapikan anomali yang menumpuk lima tahun." },
    ],
    related: ["sistem-penilaian-kinerja", "audit-payroll", "kontrak-kerja-pkwt", "tata-kelola-korporat"],
  },
  {
    slug: "audit-payroll",
    tagline: "Setiap rupiah gaji yang keluar melanggar aturan adalah utang yang menunggu tanggal jatuh tempo.",
    heroSub:
      "Audit menyeluruh atas PPh 21, THR, BPJS, upah, dan status kontrak — untuk perusahaan yang ingin memperbaiki sendiri kesalahannya sebelum pemeriksa pajak, inspektur tenaga kerja, atau gugatan karyawan yang menemukannya.",
    timeline: "1–3 minggu, sesuai jumlah karyawan dan kompleksitas",
    intro: [
      "Payroll adalah titik temu paling padat di seluruh hukum perusahaan: di satu meja bertemu aturan pajak, ketenagakerjaan, dan jaminan sosial sekaligus. PPh 21 baru saja dirombak lewat PMK No. 168 Tahun 2023 — metode perhitungan, terbilang, sampai kewajiban menggunakan NIK — dan perusahaan yang masih memakai rumus lama menghasilkan potongan yang salah setiap bulan. THR mengikuti Permenaker No. 6 Tahun 2016 dengan aturan proporsional bagi pekerja yang masa kerjanya belum dua belas bulan, termasuk pekerja PKWT. BPJS dihitung dari penghasilan yang benar menurut UU No. 24 Tahun 2011 — dan kesalahan dasar penghitungannya menumpuk menjadi selisih puluhan juta sebelum ada yang menyadarinya.",
      "Kesalahan payroll jarang meledak saat terjadi; ia meledak di hari yang paling salah. Ketika pemeriksa pajak memeriksa masa pajak, sanksi bunga dihitung per bulan atas kurang bayar yang bertahun-tahun menumpuk. Ketika karyawan keluar dan membawa kasusnya ke Pengadilan Hubungan Industrial, isu yang diajukan sering bukan PHK itu sendiri, melainkan selisih THR, komponen upah yang tidak ikut dihitung pesangon, atau potongan yang tidak didasarkan aturan. Dan ketika BPJS meminta penyesuaian dasar pendataan, selisih masa lalu ditagih sekaligus dengan biayanya. Dalam due diligence oleh investor, catatan payroll yang berantakan langsung menurunkan nilai perusahaan.",
      "Kami mengaudit seluruh rantainya: master data karyawan, kontrak dan status kepegawaian, slip gaji, perhitungan PPh 21 terhadap PMK 168/2023, kesesuaian THR, dasar dan tarif BPJS, sampai rekonsiliasi dengan SPT Masa dan laporan yang diserahkan. Temuan kami kelompokkan berjenjang — kritis, menengah, minor — lengkap dengan estimasi dampak finansial dan opsi koreksi untuk masing-masing. Untuk kesalahan yang menumpuk ke belakang, kami menyusun strategi perbaikan sukarela yang meminimalkan sanksi, bukan sekadar menyerahkan daftar masalah lalu pergi. Selesai audit, tim HR dan keuangan Anda menerima sesi penjelasan agar kesalahan yang sama tidak lahir kembali bulan depan.",
    ],
    benefits: [
      { title: "Temuan di tangan Anda, bukan pemeriksa", desc: "Kesalahan diketahui dan dikoreksi di jalur sukarela — jauh lebih ringan daripada ditemukan orang lain dengan sanksi penuh." },
      { title: "PPh 21 sesuai aturan terbaru", desc: "Perhitungan diselaraskan dengan PMK 168/2023 dan integrasi NIK — potongan bulanan benar sejak bulan berjalan." },
      { title: "THR dan BPJS tanpa selisih menumpuk", desc: "Dasar penghitungan diuji terhadap aturan — proporsi, komponen upah, dan tarif diperiksa satu per satu." },
      { title: "Status setiap pekerja diuji", desc: "Kontrak, jam kerja, dan realita pekerjaan dibandingkan — risiko status yang menyebabkan gugatan dipetakan lebih dulu." },
      { title: "Roadmap perbaikan yang aman", desc: "Perbaikan disusun berjenjang sesuai risiko — termasuk cara mengoreksi masa lalu tanpa mengguncang arus kas." },
    ],
    process: [
      { title: "Pengumpulan data & sampel", desc: "Master data, kontrak, slip gaji 12 bulan terakhir, laporan SPT Masa, dan data BPJS terkumpul lewat checklist yang ringan diisi." },
      { title: "Pengujian per kewajiban", desc: "PPh 21, THR, BPJS, upah, dan komponennya diuji terhadap regulasi — selisih dihitung, bukan diduga." },
      { title: "Laporan temuan berjenjang", desc: "Temuan kritis, menengah, dan minor dilaporkan dengan estimasi dampak dan opsi koreksi masing-masing." },
      { title: "Pendampingan perbaikan", desc: "Koreksi berjalan sesuai roadmap, termasuk perbaikan sukarela ke DJP atau BPJS bila diperlukan — tim Anda mendapat sesi penjelasan." },
    ],
    requirements: [
      "Daftar karyawan beserta master data: upah, tunjangan, status kepegawaian, tanggal masuk",
      "Kontrak kerja atau surat penunjukan yang sedang berlaku",
      "Slip gaji dan jurnal payroll 12 bulan terakhir",
      "Laporan SPT Masa PPh 21 dan laporan BPJS terakhir",
      "Kebijakan internal terkait THR, bonus, lembur, dan tunjangan (bila ada)",
    ],
    faqs: [
      { q: "Berapa biaya audit payroll dan apa saja yang memengaruhinya?", a: "Auditnya mulai Rp 5 juta, dengan faktor utama jumlah karyawan, jumlah entitas yang diaudit, dan keberantakan dokumen yang kami terima. Perusahaan 50 karyawan dengan payroll satu entitas biasanya selesai di kisaran awal; multi-cabang dengan tunjangan bervariasi membutuhkan lingkup lebih luas. Penawarannya tertulis dan tetap setelah ceklis data awal kami periksa." },
      { q: "Apakah hasil audit bisa menyeret perusahaan ke masalah yang lebih besar?", a: "Hasil audit adalah milik Anda — tidak ada laporan yang kami kirim ke mana pun tanpa izin Anda. Yang berubah setelah audit adalah posisi Anda: kesalahan yang tadinya tersembunyi dengan sanksi penuh kini bisa dikoreksi lewat jalur sukarela yang biasanya jauh lebih ringan. Dalam praktik pemeriksaan, kesediaan mengoreksi secara sukarela justru dinilai baik — yang merusak adalah kesalahan yang ditemukan orang lain lebih dulu." },
      { q: "Apakah operasional payroll harus berhenti selama audit berlangsung?", a: "Tidak — audit berjalan di samping operasional: kami meminta data yang sudah ada, bukan menghentikan pembayaran. Payroll bulanan tetap jalan, dan bila temuan menuntut perubahan metode, perubahannya dijadwalkan agar tidak menyentuh siklus gaji yang sedang berjalan. Seluruh proses biasanya tuntas satu hingga tiga minggu tergantung jumlah karyawan." },
    ],
    related: ["npwp-pkp", "bpjs", "kontrak-kerja-pkwt", "pelaporan-pajak"],
  },
  {
    slug: "kontrak-kerja-pkwt",
    tagline: "Kontrak yang dianggap aman karena sudah ditandatangani sering menjadi tanda tembak di hari sengketa.",
    heroSub:
      "PKWT, PKWTT, dan perjanjian pekerja kreatif disusun sesuai aturan pasca-Ciptaker — untuk perusahaan yang menginginkan tenaga fleksibel tanpa menabung gugatan di balik setiap tanda tangan.",
    timeline: "3–7 hari kerja untuk satu rangkaian template",
    intro: [
      "Aturan PKWT pasca-Ciptaker sebenarnya lebih sederhana dari dulu, tetapi sanksi kekeliruannya makin tegas. UU No. 6 Tahun 2023 hanya mengenal dua bentuk PKWT: berdasarkan jangka waktu atau selesainya pekerjaan tertentu, dan wajib tertulis — yang dilakukan secara lisan dianggap PKWTT. Total masa PKWT, termasuk perpanjangannya, maksimal lima tahun, dan berakhirnya PKWT menimbulkan kewajiban dana kompensasi yang diatur PP No. 35 Tahun 2021. Sementara itu, kerja sama dengan pelaku kreatif diberi jalurnya sendiri di Pasal 66: berdasarkan perjanjian, tanpa unsur perintah dan pengawasan layaknya hubungan kerja.",
      "Kesalahan yang paling kami temui hampir selalu pola yang sama. PKWT dipakai untuk pekerjaan yang sifatnya permanen dan diperpanjang terus tanpa pernah membayar kompensasi — kewajiban yang menumpuk diam-diam sebesar satu bulan upah per tahun kontrak. Kontrak 'magang' atau 'kerja sama' diberikan kepada orang yang setiap hari diperintah, diawasi, dan digaji berkala — dan saat hubungan berakhir buruk, pengadilan menyatakan yang terjadi adalah hubungan kerja: status menjadi PKWTT, pesangon dihitung dari awal kerja, dan bukti yang paling jujur justru rekaman grup chat. Kontrak yang disalin dari internet mencampur istilah yang saling meniadakan — dan isinya baru dibaca saat sedang digugat.",
      "Kami memulai dari pengujian, bukan dari template: setiap posisi dinilai satu per satu — mana yang benar PKWT, mana yang semestinya PKWTT, mana yang layak kerja sama kreatif dengan syarat Pasal 66 dipenuhi sungguh-sungguh. Template yang kami susun mengikat dua arah: hak perusahaan diatur, hak pekerja tertulis jelas, dan dokumen pendukung seperti laporan pengerjaan disiapkan agar kontrak berbasis 'selesainya pekerjaan' punya bukti yang berdiri kokoh. Untuk kontrak yang sudah berjalan, kami memetakan jangka waktunya di satu kalender: kapan perpanjangan, kapan kompensasi jatuh tempo, kapan konversi wajib dipertimbangkan. Sistemnya yang kami bangun, bukan hanya kertasnya.",
    ],
    benefits: [
      { title: "Status setiap orang benar", desc: "Tidak ada orang yang tertulis mitra padahal diperintah seperti karyawan — sumber gugatan paling mahal ditutup dari awal." },
      { title: "Jangka waktu terkendali", desc: "Kalender PKWT per karyawan dengan pengingat sebelum berakhir — tidak ada kontrak yang diam-diam melewati batasnya." },
      { title: "Dana kompensasi tidak tercecer", desc: "Kompensasi dihitung, dijadwalkan, dan dibayar tepat waktu — kewajiban kecil yang bila diabaikan menjadi temuan berantai." },
      { title: "Template yang lindungi dua arah", desc: "Hak perusahaan dan hak pekerja sama-sama tertulis — kontrak yang adil justru paling tahan diperiksa." },
      { title: "Bukti pengerjaan terarsip", desc: "Laporan dan berita acara menyertai kontrak berbasis selesainya pekerjaan — posisi hukum Anda punya punggung." },
    ],
    process: [
      { title: "Pemetaan posisi & jenis kerja", desc: "Setiap posisi diuji: PKWT, PKWTT, atau kerja sama kreatif — disertai risiko masing-masing pilihan." },
      { title: "Penyusunan template & dokumen", desc: "Template per kategori posisi disusun, lengkap dengan dokumen pendukung seperti laporan pengerjaan dan format berita acara." },
      { title: "Penandatanganan & arsip terpusat", desc: "Kontrak ditandatangani tertulis atau elektronik tersertifikasi dan diarsipkan rapi — siap ditarik kapan pun diperlukan." },
      { title: "Sistem berjalan", desc: "Kalender perpanjangan, pengingat kompensasi, dan SOP masuk-keluar tenaga kerja — fleksibilitas yang tetap dalam rel." },
    ],
    requirements: [
      "Daftar posisi dan jumlah orang per posisi yang akan dikontrak",
      "Jenis pekerjaan dan estimasi durasi untuk setiap posisi",
      "Upah, tunjangan, dan komponen penghasilan per posisi",
      "Kontrak yang sedang berjalan (bila ada — kami audit ulang strukturnya)",
      "NIB atau dokumen legal perusahaan sebagai identitas pemberi kerja",
    ],
    faqs: [
      { q: "Berapa biaya menyiapkan kontrak kerja dan PKWT yang benar?", a: "Layanannya mulai Rp 1,5 juta untuk satu rangkaian template per kategori posisi — sekali dibuat, dipakai untuk seluruh karyawan dalam kategori itu, bukan per orang. Bila perusahaan ingin sekaligus menata ulang kontrak yang sedang berjalan, lingkup auditnya dihitung sesuai jumlah dokumen. Semua angka tertulis di penawaran sebelum pekerjaan dimulai." },
      { q: "Kapan dana kompensasi PKWT wajib dibayar dan berapa besarannya?", a: "Kompensasi dibayar saat PKWT berakhir dan tidak dilanjutkan: sebesar satu bulan upah untuk PKWT yang berjalan terus-menerus dua belas bulan atau lebih, atau dihitung proporsional untuk yang lebih singkat. Bila PKWT diperpanjang, pembayarannya ditunda sampai satu bulan PKWT baru berjalan. Kewajibannya tetap berdiri meskipun pekerjanya mengundurkan diri — yang mengabaikannya menanggung risiko denda dan gugatan yang jauh lebih mahal dari kompensasinya sendiri." },
      { q: "Bisakah saya memakai perjanjian kerja sama untuk orang yang mengerjakan proyek saya?", a: "Bisa, dengan syarat hubungannya benar-benar berbentuk kerja sama: tidak ada perintah harian, pengawasan jam kerja, atau pembayaran upah berkala seperti karyawan — inilah semangat Pasal 66 tentang pekerja kreatif. Begitu realitas kerjanya menyerupai hubungan kerja, selembar perjanjian kerja sama tidak menyelamatkan siapa pun; pengadilan menilai fakta, bukan judul dokumen. Kami uji dulu realitas kerjanya, lalu menyarankan bentuk yang paling aman — kadang jawabannya memang PKWT, dan itu bukan berita buruk." },
    ],
    related: ["alih-daya-outsourcing", "program-magang", "phk-terkelola", "audit-payroll"],
  },
  {
    slug: "program-magang",
    tagline: "Magang yang baik bukan kerja murah berlabel belajar — ia program dengan aturan yang tertulis.",
    heroSub:
      "Perjanjian magang dan PKL, batas pekerjaan, uang saku, dan asuransi kecelakaan tertata per angkatan — untuk perusahaan yang menerima murid sekolah, mahasiswa, dan peserta pemagangan dengan cara yang benar.",
    timeline: "1–2 minggu per angkatan program",
    intro: [
      "Pemagangan di dalam negeri punya rumahnya sendiri: Permenaker No. 6 Tahun 2020 mengaturnya dalam tiga bentuk — magang sertifikasi, magang penyiapan kerja, dan magang peningkatan keahlian — dengan kewajiban perjanjian tertulis, masa magang yang terbatas, uang saku, dan perlindungan asuransi kecelakaan. Jalurnya berbeda dari magang mahasiswa yang digerakkan kerja sama dengan perguruan tinggi — magang adalah salah satu bentuk kegiatan pembelajaran yang diakui kurikulum pendidikan tinggi — maupun PKL siswa SMK yang terikat pada program sekolah. Apa pun jalurnya, satu hal tetap: peserta magang bukan pekerja, tidak ada hubungan kerja, tetapi keselamatannya tetap dilindungi aturan keselamatan kerja di tempat usaha Anda sejak UU No. 1 Tahun 1970. Kelalaian membedakan status inilah yang menjadi akar hampir semua sengketa magang.",
      "Pola kekeliruan yang kami temui berulang di banyak industri. Peserta magang diperlakukan sebagai tenaga tambahan penuh: tanpa perjanjian, tanpa batas tugas, jadwalnya seperti karyawan shift — dan tanpa asuransi, sehingga satu kecelakaan kecil di gudang berubah menjadi tanggung jawab penuh perusahaan. Sebaliknya, ada perusahaan yang menempatkan pekerja sungguhan di bawah label magang demi membayar lebih murah — dan saat hubungan berakhir buruk, pengadilan membedah realitasnya: ada perintah, pengawasan, upah berkala. Yang tersisa adalah keputusan bahwa yang terjadi adalah hubungan kerja, dengan seluruh kewajibannya dihitung dari awal. Program yang baik sebenarnya menguntungkan dua pihak — selama aturannya ditulis sebelum hari pertama, bukan sesudah masalah.",
      "Kami menata program magang Anda sebagai program, bukan improvisasi: desain posisi magang dengan durasi, batasan pekerjaan, dan uang saku yang jelas; perjanjian yang sesuai jalurnya — tripartit dengan sekolah atau kampus, atau perjanjian pemagangan untuk jalur Kemnaker; asuransi kecelakaan untuk setiap peserta; orientasi keselamatan di hari pertama; serta handbook ringkas yang menjelaskan jam kerja, hak, dan batasan. Di akhir masa magang, evaluasi terstruktur dan sertifikat menutup program — dan bagi peserta yang menonjol, jalur konversi menjadi karyawan disiapkan dengan dokumen yang benar. Seluruhnya dirakit sekali dan dapat dipakai ulang setiap angkatan tanpa mengulang pekerjaan dari nol. Kampus dan sekolah mitra akan merasakan perbedaannya: program yang rapi adalah program yang mereka kirimkan pesertanya lagi tahun depan.",
    ],
    benefits: [
      { title: "Status yang benar sejak hari pertama", desc: "Perjanjian yang sesuai jalurnya — peserta dilindungi, perusahaan tidak menyimpan sengketa yang belum terlihat." },
      { title: "Perlindungan yang lengkap", desc: "Asuransi kecelakaan dan orientasi keselamatan menyelimuti setiap peserta — kejadian kecil tidak berubah menjadi beban besar." },
      { title: "Etika program terjaga", desc: "Uang saku, batas jam, dan batasan tugas tertulis — magang menjadi pembelajaran, bukan kerja terselubung." },
      { title: "Pipa bakat yang terbentuk", desc: "Evaluasi terstruktur memudahkan mengenali siapa yang layak dikonversi menjadi karyawan — rekrutmen berjalan lebih murah." },
      { title: "Kepercayaan kampus dan sekolah", desc: "Koordinasi yang rapi membuat institusi pendidikan ingin mengirim peserta lagi — angkatan berikutnya tidak perlu diburu." },
    ],
    process: [
      { title: "Desain program & posisi", desc: "Durasi, tugas, batasan pekerjaan, uang saku, dan penunjukan mentor disusun — program punya wajah yang jelas." },
      { title: "Dokumen perjanjian", desc: "Perjanjian tripartit dengan sekolah atau kampus, atau perjanjian pemagangan jalur Kemnaker — sesuai jenis pesertanya." },
      { title: "Persiapan pelaksanaan", desc: "Asuransi kecelakaan aktif, orientasi keselamatan terjadwal, handbook peserta tersedia — hari pertama berjalan tertata." },
      { title: "Evaluasi & penutupan", desc: "Penilaian, sertifikat, dan rekomendasi konversi bagi yang menonjol — program berakhir baik di kedua pihak." },
    ],
    requirements: [
      "Profil perusahaan dan posisi magang yang ditawarkan beserta batasannya",
      "Data peserta: identitas, instansi asal, dan masa program yang diusulkan",
      "Dokumen permintaan resmi dari kampus atau sekolah (bila ada)",
      "Mentor atau pembimbing internal yang akan menampung peserta",
      "Tanggal mulai dan durasi program yang diinginkan",
    ],
    faqs: [
      { q: "Apakah peserta magang wajib diberi uang saku dan berapa standarnya?", a: "Pada pemagangan jalur Kemnaker, uang saku adalah kewajiban yang diatur dalam peraturan pemagangan — besarnya disepakati dalam perjanjian sesuai kesediaan perusahaan pemberi magang. Pada magang mahasiswa dan PKL, bentuk dukungannya mengikuti perjanjian dengan institusi pendidikan, umumnya berupa uang saku atau fasilitas. Yang jelas: uang saku bukan upah, tidak menciptakan hubungan kerja, dan justru dengan tertulis ia memisahkan status peserta dari status pekerja." },
      { q: "Apa risikonya bila peserta magang diperlakukan seperti karyawan penuh tanpa perjanjian yang benar?", a: "Risikonya bertingkat: tanpa asuransi, setiap kecelakaan menjadi tanggung jawab penuh perusahaan; tanpa batas tugas dan jam kerja yang jelas, hubungan kerja bisa dinyatakan pengadilan dari realitas perintah dan pengawasan. Ketika itu terjadi, kewajiban pekerja — selisih upah, kompensasi, sampai pesangon bila dihitung dari awal — menimpa perusahaan sekaligus. Program yang tertulis dengan batasan yang benar adalah satu-satunya payung yang diakui saat diuji." },
      { q: "Berapa biaya menyiapkan program magang yang tertata?", a: "Penyiapan programnya mulai Rp 2 juta per angkatan — mencakup perancangan posisi, dokumen perjanjian, dan handbook peserta. Biaya berulang per peserta umumnya berupa premi asuransi kecelakaan dan uang saku yang besarnya Anda tetapkan sesuai jalurnya. Bila program menggunakan jalur sertifikasi, biaya uji kompetensi pesertanya juga kami petakan transparan di penawaran." },
    ],
    related: ["kontrak-kerja-pkwt", "bnsp", "lks-bipartit", "sistem-penilaian-kinerja"],
  },
  {
    slug: "alih-daya-outsourcing",
    tagline: "Tenaga yang Anda gunakan tetapi bukan Anda pekerjakan — garis pemisahnya harus digambar dengan tinta hukum.",
    heroSub:
      "Pasca-Ciptaker, pekerjaan alih daya tidak lagi dibatasi jenis tertentu, tetapi perlindungan pekerjanya justru diperketat — kami uji kesahihan penggunaan, tata perjanjiannya, dan audit penyedia yang Anda pakai.",
    timeline: "2–4 minggu untuk satu siklus audit dan penataan",
    intro: [
      "Aturan alih daya berubah bentuk total pasca-Ciptaker. UU No. 6 Tahun 2023 menghapus daftar jenis pekerjaan yang boleh dialihdayangkan: perusahaan kini bebas memindahkan sebagian pekerjaannya kepada perusahaan lain berdasarkan perjanjian — dengan syarat yang justru mengeras: perusahaan alih daya harus berbadan hukum dan berizin, dan pelindungan pekerjanya tidak boleh tergosok. PP No. 35 Tahun 2021 merinci pelindungan itu: pekerja alih daya wajib dilindungi melalui kontrak kerja tertulis, upah dan kesejahteraan, jaminan sosial, serta keselamatan dan kesehatan kerja. Tanggung jawab itu berdiri di leher perusahaan penyedia — tetapi pemeriksa dan pengadilan tahu menemukan siapa yang harus dikejar bila rantai ini dipotong di tengah.",
      "Risiko terbesar bukan pada lembarnya perjanjian, melainkan pada realitas sehari-hari. Bila pekerja alih daya setiap pagi absen di sistem perusahaan pengguna, menerima perintah langsung dari supervisornya, dan digantikan perusahaan pengguna saat tidak masuk — pengadilan tidak perlu berdebat lama sebelum menyatakan hubungan kerja langsung dengan perusahaan pengguna: status menjadi PKWTT, pesangon dihitung dari awal kerja, berapa pun lembar perjanjian yang menyangkalnya. Risiko kedua menyusup dari sisi penyedia: badan usaha yang tidak berizin atau gagal membayar BPJS membuat pengguna menanggung akibat bersama saat pekerja berhalangan atau inspeksi datang. Kasus serupa berulang di banyak industri karena perjanjian disalin tanpa menguji struktur operasionalnya.",
      "Kami memeriksa penggunaan alih daya Anda dari dua arah sekaligus. Dari arah struktur: apakah jenis pekerjaan dan cara pengarahannya memungkinkan status alih daya bertahan di depan pemeriksa — dan bila tidak, bentuk kerja sama apa yang lebih tepat. Dari arah penyedia: badan hukum, izin, kepatuhan upah dan BPJS, sampai cara penyedia mengelola pekerjannya — semuanya diaudit dengan checklist yang bisa dipakai ulang untuk vendor lain. Hasilnya, perjanjian utama antara pengguna dan penyedia disusun ulang dengan pembagian tanggung jawab yang jernih, klausul perlindungan pekerja, dan mekanisme pemantauan berkala — agar alih daya menjadi alat fleksibilitas, bukan bom waktu yang meledak lewat gugatan orang lain.",
    ],
    benefits: [
      { title: "Status alih daya bertahan saat diuji", desc: "Struktur perintahan dan pekerjaan ditata agar hubungan tetap antar-perusahaan — bukan hubungan kerja yang menyamar." },
      { title: "Tanggung renteng diminimalkan", desc: "Penyedia diaudit dan klausul ganti rugi ditulis jelas — kegagalan penyedia tidak langsung jatuh ke meja Anda." },
      { title: "Pekerja tetap terlindungi", desc: "Kontrak, BPJS, dan keselamatan kerja dari pihak yang benar — rantai perlindungan yang utuh adalah rantai yang tidak menggugat siapa pun." },
      { title: "Risiko pengadilan dipetakan lebih dulu", desc: "Kelemahan struktur yang biasa dibongkar pengadilan hubungan industrial ditutup sebelum gugatan menemukannya." },
      { title: "Standar vendor yang bisa dipakai ulang", desc: "Checklist audit penyedia menjadi alat permanen tim pengadaan Anda — setiap vendor baru dinilai dengan tolok ukur yang sama." },
    ],
    process: [
      { title: "Pemetaan penggunaan alih daya", desc: "Jenis pekerjaan yang dialihdayangkan, jumlah orang, dan cara pengarahan sehari-hari dipetakan jujur — bukti yang menentukan adalah praktik, bukan niat." },
      { title: "Audit penyedia & struktur", desc: "Badan hukum, izin, kepatuhan upah dan BPJS penyedia diperiksa — kelemahan dirapikan sebelum menjadi tanggungan bersama." },
      { title: "Penataan perjanjian", desc: "Perjanjian utama, lingkup pekerjaan, dan pembagian tanggung jawab disusun ulang — termasuk klausul perlindungan pekerja dan ganti rugi." },
      { title: "Pemantauan berkala", desc: "Checklist audit periodik dan peninjauan kontrak — status yang benar dirawat, bukan hanya dibangun sekali." },
    ],
    requirements: [
      "Daftar penyedia alih daya yang dipakai dan jenis pekerjaan yang dialihdayangkan",
      "Kontrak kerja sama dengan penyedia yang sedang berlaku (bila ada)",
      "Jumlah pekerja yang terlibat dan gambaran tugas harian mereka",
      "Dokumen legal penyedia: akta, NIB, izin usaha yang relevan",
      "Catatan keluhan, kecelakaan, atau insiden pekerja sebelumnya (bila ada)",
    ],
    faqs: [
      { q: "Apa bedanya alih daya dengan mempekerjakan langsung — dan di mana batasnya rusak?", a: "Alih daya adalah hubungan antara dua badan hukum: perusahaan penyedia mengelola pekerjanya sendiri — perintahan, upah, BPJS — sementara pengguna menerima hasil pekerjaan berdasarkan perjanjian. Batas itu rusak saat praktiknya berubah: pekerja diperintah langsung oleh pengguna, diawasi jam kerjanya, dan diperlakukan seperti karyawan internal. Pengadilan menilai realitas, bukan judul dokumen — dan saat hubungan kerja langsung dinyatakan, seluruh kewajiban pekerja jatuh kepada pengguna dihitung dari awal kerja." },
      { q: "Berapa biaya menata kepatuhan alih daya?", a: "Layanannya mulai Rp 5 juta untuk satu siklus pemetaan dan penataan, dengan tambahan sesuai jumlah penyedia yang diaudit dan kompleksitas kontrak yang berjalan. Perusahaan dengan satu-dua penyedia dan pekerjaan yang jelas biasanya selesai di kisaran awal; yang memakai banyak vendor di beberapa lokasi membutuhkan lingkup lebih luas. Penawaran tertulis kami sampaikan setelah pemetaan awal." },
      { q: "Penyedia saya berbentuk CV dan tidak jelas izinnya — apakah bisa tetap dipakai?", a: "Bisa dipakai, tetapi risikonya harus Anda ketahui lebih dulu: penyedia tanpa badan hukum dan izin yang memadai melemahkan seluruh struktur alih daya di atasnya, dan saat inspeksi atau gugatan datang, tanggung jawab bisa naik ke Anda. Jalur perbaikannya ada dua: mendorong penyedia menyempurnakan bentuk badan usaha dan izinnya, atau mengubah bentuk kerja sama menjadi yang sesuai kondisi — misalnya kontrak kerja langsung. Kami petakan opsi beserta biaya dan risikonya agar keputusannya berdasar, bukan berharap." },
    ],
    related: ["kontrak-kerja-pkwt", "bpjs", "audit-payroll", "legal-drafting"],
  },
  {
    slug: "phk-terkelola",
    tagline: "PHK yang tertata menyisakan cerita yang bisa dilanjutkan; PHK yang asal menyisakan berkas gugatan.",
    heroSub:
      "Analisis alasan, prosedur berlapis, kalkulasi pesangon, dan komunikasi yang manusiawi — untuk perusahaan yang harus mengurangi tenaga kerja tanpa mengorbankan martabat siapa pun maupun keamanan hukumnya.",
    timeline: "2–6 minggu dari analisis hingga penyelesaian per kelompok",
    intro: [
      "PHK adalah titik paling rawan di seluruh hubungan industrial, dan aturannya sengaja dibuat ketat. Alasan PHK dibatasi dalam daftar tertutup UU No. 6 Tahun 2023 — dari pelanggaran perjanjian yang diberi surat peringatan sampai efisiensi karena kerugian — dan setiap PHK harus diupayakan lewat perundingan bipartit lebih dulu; bila tidak tercapai, jalur mediasi menantang. Hak yang menuntunnya diatur PP No. 35 Tahun 2021: uang pesangon, uang penghargaan masa kerja, dan penghasilan penggantian hak, dengan tarif yang berbeda per alasan PHK. Pasca-Ciptaker memang menyederhanakan beberapa komponen — tetapi kesederhanaan itu tidak mengurangi ketelitian prosedur yang dituntut.",
      "Gugatan yang masuk ke Pengadilan Hubungan Industrial jarang berawal dari angka yang salah; ia berawal dari cara yang salah. PHK disampaikan lewat pesan singkat, alasan yang dipakai tidak sesuai daftar hukum, surat peringatan tidak pernah berjenjang, dan perhitungan memakai gaji pokok saja padahal tunjangan tetap ikut dihitung. Akibatnya bukan sekadar menang-kalah: pengadilan dapat menyatakan PHK tidak sah sehingga pekerja tetap dianggap berhubungan kerja — dan perusahaan menggaji sepanjang sengketa sebelum akhirnya membayar juga. Ada pula proteksi yang sering terlewat: pekerja hamil, sakit yang dibuktikan dokter, anggota pengurus serikat pekerja, dan pelapor tidak boleh di-PHK karena statusnya — kecerobohan di area ini mengubah kasus biasa menjadi kasus yang memalukan di publik.",
      "Kami mengelola PHK sebagai proses yang punya protokol: analisis alasan dan jalur terkuat beserta alternatifnya — mutasi, demosi, surat peringatan, program keluar sukarela; kalkulasi seluruh hak per orang dengan skenario anggaran; draft surat, berita acara kesepakatan bipartit, dan kuitansi yang menutup hubungan kerja dengan bersih; sampai skrip komunikasi hari-H agar manajer yang menyampaikan tidak kehabisan kata di momen paling sulit. Bila perundingan berputar ke jalan buntu, jalur mediasi kami siapkan dengan posisi dokumen yang sudah tertata. Tujuan akhirnya satu: perusahaan bergerak lebih ramping, pekerja pulang dengan haknya terbayar penuh, dan tidak ada satu pun berkas yang siap digugatkan.",
    ],
    benefits: [
      { title: "Alasan yang berdiri kokoh", desc: "Alasan PHK dipilih dari daftar hukum dan dibuktikan dokumen — bukan keputusan yang digantungkan pada kesalahan orang lain." },
      { title: "Angka yang tidak bisa digugat", desc: "Pesangon, penghargaan masa kerja, dan penghasilan penggantian hak dihitung transparan per orang — siap diperiksa siapa pun." },
      { title: "Prosedur yang terdokumentasi", desc: "Berita acara, kesepakatan bipartit, dan kuitansi tersusun — setiap langkah punya jejak yang tahan diuji." },
      { title: "Komunikasi yang memelihara martabat", desc: "Skrip, jadwal, dan peran setiap pihak disiapkan — pekerja pulang dengan kejelasan, bukan dengan kehinaan." },
      { title: "Sengketa dicegah atau dikendalikan", desc: "Bila perundingan buntu, posisi dokumen dan jalur mediasi sudah siap — posisi tawar Anda tidak pernah kosong." },
    ],
    process: [
      { title: "Analisis kasus & jalur", desc: "Alasan, bukti, status proteksi, dan alternatif selain PHK dinilai — jalur teraman dipilih dengan matang." },
      { title: "Kalkulasi hak & anggaran", desc: "Seluruh komponen dihitung per orang dengan skenario — pimpinan menandatangani keputusan di atas angka yang jelas." },
      { title: "Pelaksanaan & dokumen", desc: "Komunikasi hari-H, kesepakatan bipartit, dan seluruh dokumen penutup disiapkan dan diteken." },
      { title: "Pemantauan pasca-PHK", desc: "Pembayaran, BPJS, surat pengalaman kerja, dan bila diperlukan jalur mediasi — ditutup sampai bersih." },
    ],
    requirements: [
      "Daftar karyawan terdampak beserta masa kerja dan komponen upahnya",
      "Alasan PHK yang dipertimbangkan dan bukti yang menyertainya",
      "Dokumen kinerja atau surat peringatan yang pernah terbit (bila ada)",
      "Status khusus karyawan: kehamilan, sakit, keanggotaan serikat pekerja",
      "Nama pejabat yang memegang keputusan akhir di sisi perusahaan",
    ],
    faqs: [
      { q: "Berapa biaya layanan pengelolaan PHK — apakah termasuk uang pesangonnya?", a: "Jasa pengelolaannya mulai Rp 4 juta, disesuaikan jumlah karyawan terdampak dan kompleksitas kasusnya — seluruhnya tertulis di penawaran. Uang pesangon dan hak-hak karyawan bukan bagian biaya jasa; itu kewajiban perusahaan kepada pekerja yang kami hitungkan secara transparan per orang. Bila kasus sudah berjalan sebagai sengketa, pendampingan mediasinya dihitung terpisah sesuai tingkatannya." },
      { q: "Apakah boleh memberitahukan PHK lewat WhatsApp atau pesan singkat?", a: "Tidak disarankan, dan dalam banyak kasus justru merugikan sendiri. Prosedurnya menuntut perundingan dan penyampaian yang terdokumentasi — pesan singkat tidak menunjukkan perundingan berlangsung, tidak menandatangani apa pun, dan mudah dibacakan di pengadilan sebagai bukti PHK sepihak yang asal. Akibat yang bisa jatuh: PHK dinyatakan tidak sah, pekerja dianggap tetap berhubungan kerja, dan perusahaan menggaji selama sengketa sebelum akhirnya membayar juga. Surat, berita acara, dan komunikasi tatap muka yang tertata adalah perlindungan termurah yang tersedia." },
      { q: "Siapa saja pekerja yang tidak boleh di-PHK karena status proteksinya?", a: "Regulasi melindungi pekerja hamil, pekerja yang sakit dan dibuktikan surat dokter, pekerja yang menjalankan ibadah agama, serta pekerja yang menjadi anggota atau pengurus serikat pekerja dan pelapor — PHK karena alasan biasa kepada mereka diharamkan. Artinya bukan selamanya tidak bisa dipisahkan, tetapi harus lewat jalur dan alasan yang berbeda serta sangat hati-hati. Bagian dari pekerjaan kami adalah mengenali status proteksi ini sejak analisis awal, sebelum keputusan yang tidak bisa ditarik kembali diambil." },
    ],
    related: ["kontrak-kerja-pkwt", "lks-bipartit", "legal-drafting", "sengketa-bisnis-mediasi"],
  },
  {
    slug: "lks-bipartit",
    tagline: "Forum kecil dengan agenda besar — tempat ketidakpuasan berunding sebelum ia memilih jalan lain.",
    heroSub:
      "Lembaga Kerja Sama Bipartit dibentuk, disahkan, dan didaftarkan resmi ke Disnaker — kewajiban perusahaan dengan pekerja 50 orang lebih yang sekaligus membuka dokumen kualifikasi tender dan ruang perundingan yang hidup.",
    timeline: "2–4 minggu hingga SK terbit",
    intro: [
      "Perusahaan dengan pekerja 50 orang atau lebih wajib membentuk Lembaga Kerja Sama Bipartit — forum perundingan antara pengusaha dan perwakilan pekerja yang diatur Permenaker No. 31 Tahun 2013. Bentuknya sederhana: pengurus dari kedua pihak, program kerja tahunan, dan rapat yang terjadwal membahas hal-hal yang menyentuh kedua pihak — kesepakatan bersama, peraturan perusahaan, kondisi kerja, sampai program kesejahteraan. Lembaga ini disahkan dan didaftarkan pada dinas ketenagakerjaan kabupaten atau kota tempat perusahaan berada. Banyak tender pemerintah dan BUMN serta sejumlah sertifikasi memintanya sebagai dokumen kualifikasi — jadi kewajiban yang sekaligus aset.",
      "Kenyataannya, banyak LKS Bipartit lahir hanya untuk melengkapi berkas tender — SK tersimpan, forum tidak pernah bertemu. Risiko pertama bersifat administratif: saat inspeksi tenaga kerja menanyakan kewajiban pembentukan, perusahaan tanpa SK menanggung teguran. Risiko kedua lebih dalam: tanpa forum resmi, keinginan dan keluhan pekerja tidak punya saluran terukur — ia mencari jalurnya sendiri, dari ledakan di grup chat sampai gerakan yang baru diketahui perusahaan saat sudah sulit diatur. Perlu pula dibedakan dengan benar: LKS Bipartit bukan serikat pekerja dan tidak menggantikannya — keduanya punya peran berbeda dan bisa berjalan bersama di satu perusahaan.",
      "Kami menyiapkan lembaga ini sampai hidup, bukan sampai SK terbit saja: dokumen pendirian dan susunan pengurus dari kedua pihak disusun, pengesahan dan pendaftaran ke Disnaker kami urus, program kerja tahunan dirancang realistis sesuai isu perusahaan Anda, dan rapat perdana kami dampingi agar budaya berunding lahir dengan benar. Setelahnya, format notula, kalender rapat, dan panduan pelaporan tahunan menjadi milik tim Anda. Forum yang berjalan adalah peredam konflik paling murah yang pernah ditemukan hubungan industrial — dan lembaganya kini resmi milik perusahaan Anda.",
    ],
    benefits: [
      { title: "Kewajiban terpenuhi", desc: "SK LKS Bipartit terdaftar resmi — inspeksi tenaga kerja tidak lagi menemukan kekosongan di sisi ini." },
      { title: "Syarat tender terbuka", desc: "Dokumen kualifikasi yang kerap diminta tender BUMN dan sertifikasi tersedia kapan pun dibutuhkan." },
      { title: "Aspirasi punya saluran terukur", desc: "Keluhan kecil berunding di forum sebelum membesar menjadi protes yang tidak terkendali." },
      { title: "Kesepakatan bersama tertata", desc: "Ruang negosiasi resmi membuat hasil perundingan tertulis, terdokumentasi, dan mengikat dengan benar." },
      { title: "Forum yang benar-benar hidup", desc: "Program kerja tahunan dan rapat terjadwal — SK yang dipakai, bukan yang dijajakan di dinding." },
    ],
    process: [
      { title: "Penyiapan dokumen", desc: "Surat pendirian, susunan pengurus kedua pihak, dan dukungan pimpinan tersusun sesuai format yang diminta Disnaker." },
      { title: "Pengesahan & pendaftaran", desc: "Dokumen diajukan ke dinas ketenagakerjaan kabupaten/kota — SK pendaftaran LKS Bipartit terbit." },
      { title: "Program kerja & rapat perdana", desc: "Agenda tahunan disusun realistis dan rapat pertama didampingi — forum lahir dengan budaya yang benar." },
      { title: "Pelaporan & pemeliharaan", desc: "Format notula, kalender rapat, dan panduan pelaporan tahunan diserahkan — lembaga dirawat oleh tim Anda sendiri." },
    ],
    requirements: [
      "Data perusahaan dan jumlah pekerja saat ini",
      "Kandidat pengurus dari pihak pekerja dan pihak pengusaha beserta identitasnya",
      "Surat penunjukan atau dukungan pimpinan perusahaan",
      "Peraturan perusahaan atau PP-PKB yang berlaku (bila ada)",
      "Alamat lokasi perusahaan tempat rapat akan diselenggarakan",
    ],
    faqs: [
      { q: "Perusahaan saya baru sekitar empat puluh pekerja — apakah wajib membentuk LKS Bipartit?", a: "Kewajiban pembentukannya menempel pada perusahaan dengan pekerja 50 orang atau lebih — di bawah itu Anda belum diwajibkan. Namun dua alasan praktis sering membuat perusahaan lebih kecil tetap menyusunnya lebih dulu: pertumbuhan tenaga kerja yang cepat, dan dokumen kualifikasi tender yang memintanya meski belum wajib hukum. Menyiapkan lebih awal berarti forum sudah hidup saat kewajiban dan kebutuhannya datang, bukan dibentuk tergesa di tengah berkas tender." },
      { q: "Apa bedanya LKS Bipartit dengan serikat pekerja?", a: "Serikat pekerja adalah organisasi karyawan yang berdiri dari inisiatif pekerja dan menjadi mitra perundingan hubungan industrial; LKS Bipartit adalah forum kerja sama kedua pihak yang wajib dibentuk perusahaan dan didaftarkan ke Disnaker. Keduanya tidak saling menggantikan — perusahaan dengan serikat pekerja tetap dapat dan sering diminta membentuk LKS Bipartit. Yang penting perannya tidak tertukar: satu organisasi perwakilan, satu forum perundingan bersama." },
      { q: "Berapa biaya dan berapa lama sampai SK terbit?", a: "Layanannya mulai Rp 1,5 juta — mencakup penyusunan dokumen, pengurusan pengesahan dan pendaftaran, hingga pendampingan rapat perdana. Prosesnya umumnya 2–4 minggu tergantung antrean pemeriksaan di dinas ketenagakerjaan setempat dan kelengkapan data pengurus. Biaya rapat dan kegiatan forum berikutnya menjadi kegiatan internal perusahaan sesuai program kerja yang disusun." },
    ],
    related: ["bpjs", "smk3", "p2k3-panitia-k3", "phk-terkelola"],
  },
  {
    slug: "iso-37001-antisuap",
    tagline: "Integritas yang tidak terbukti hanyalah pernyataan — sistem antisuap membuatnya teruji.",
    heroSub:
      "SNI ISO 37001 membangun kebijakan hadiah, due diligence mitra, dan kanal pelaporan hingga audit sertifikasi — untuk perusahaan yang mengejar tender BUMN, rantai pasok global, dan perlindungan dari risiko gratifikasi.",
    timeline: "3–6 bulan hingga sertifikat terbit",
    intro: [
      "Antisuap di Indonesia bukan hanya soal moral; ia punya tarik hukum yang jelas. UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 mengatur gratifikasi yang wajib dilaporkan kepada KPK, dan korporasi pun dapat dipertanggungjawabkan atas tindak pidana korupsinya. Sementara pasar menuntut dari arah lain: tender BUMN dan rantai pasok korporasi global kini kerap meminta bukti sistem manajemen antisuap — dan bahasa paling diakui untuk itu adalah SNI ISO 37001. Kerugian dari ketiadaan sistem jarang datang sebagai denda; ia datang sebagai hilangnya tender, pemecatan dari daftar vendor, dan berkas pidana yang menyertai satu gratifikasi yang tidak dielola.",
      "Kesalahan yang paling sering menjerat perusahaan bukan korupsi besar, melainkan kabur pada hal-hal kecil. Kebijakan etik dipasang di dinding tetapi tidak menyentuh pertanyaan sehari-hari: bolehkah menerima kotak oleh-oleh dari vendor, siapa yang menyetujui jamuan makan, berapa ambang hadiah. Due diligence mitra dikerjakan setengah hati — cek dokumen, tanpa memahami kepemilikan dan rekam jejak. Kanal pelaporan tidak ada, sehingga karyawan yang melihat kejanggalan punya dua pilihan: diam atau bocor — dua-duanya merugikan perusahaan. Saat kasus datang, kepanikan menggantikan sistem, dan perundingan di meja penyidik berlangsung tanpa kekuatan tawar.",
      "Kami membangun sistem antisuap yang sesuai struktur SNI ISO 37001 dan nyata dijalankan: gap analysis terhadap seluruh klausul, komitmen dan kebijakan antisuap yang diteken pimpinan puncak, penunjukan fungsi kepatuhan, kebijakan hadiah dan hospitalitas dengan ambang yang jelas, prosedur due diligence mitra, kanal whistleblowing yang aman bagi pelapor, pelatihan karyawan, dan dokumentasi sistem yang bisa diaudit. Pemilihan lembaga sertifikasi terakreditasi kami dampingi hingga audit berjalan dan sertifikat terbit. Setelahnya, panduan pemeliharaan menjaga sistem tetap hidup — karena sertifikat yang berhenti di pigura belum pernah melindungi siapa pun.",
    ],
    benefits: [
      { title: "Syarat tender terpenuhi", desc: "Sertifikat SNI ISO 37001 menjadi bukti yang diminta tender BUMN dan rantai pasok global — pintu yang sebelumnya tertutup terbuka." },
      { title: "Risiko pidana korporasi turun", desc: "Gratifikasi dielola, dilaporkan, dan didokumentasikan — posisi hukum perusahaan berdiri di atas sistem, bukan harapan." },
      { title: "Rantai pasok yang bersih", desc: "Due diligence mitra menjadi prosedur baku — vendor bermasalah tersaring sebelum menyeret nama Anda." },
      { title: "Kanal pelaporan yang aman", desc: "Whistleblowing berjalan terlindungi — kejanggalan dilaporkan ke dalam perusahaan, bukan keluar ke publik." },
      { title: "Budaya yang teruji", desc: "Pelatihan, prosedur, dan evaluasi berkala — integritas berhenti menjadi poster dan mulai menjadi kebiasaan." },
    ],
    process: [
      { title: "Gap analysis & komitmen", desc: "Kondisi saat ini dipetakan terhadap SNI ISO 37001 dan komitmen pimpinan puncak dikunci — sistem tanpa dukungan puncak hanya berkas." },
      { title: "Penyusunan sistem", desc: "Kebijakan antisuap, kebijakan hadiah, due diligence mitra, kanal pelaporan, dan register risiko disusun sesuai operasional Anda." },
      { title: "Implementasi & uji internal", desc: "Sistem dijalankan, karyawan dilatih, audit internal menguji — temuan diperbaiki sebelum pihak luar datang." },
      { title: "Audit sertifikasi", desc: "Lembaga sertifikasi terakreditasi melakukan audit dengan pendampingan penuh — sertifikat terbit dan pemeliharaannya terjadwal." },
    ],
    requirements: [
      "Profil perusahaan, struktur organisasi, dan proses yang paling rawan (pengadaan, penjualan, relasi pemerintah)",
      "Dokumen tata kelola dan kebijakan yang sudah ada (kode etik, SOP — apa adanya)",
      "Komitmen pimpinan puncak — kebijakan antisuap diteken direksi adalah fondasi yang tidak bisa diwakilkan",
      "Penunjukan personel yang akan memegang fungsi kepatuhan",
      "Daftar mitra utama (vendor, distributor, agen) untuk dipetakan dalam due diligence",
    ],
    faqs: [
      { q: "Berapa biaya membangun sistem antisuap sampai tersertifikasi?", a: "Jasa pembangunan sistemnya mulai Rp 12 juta, menyesuaikan skala perusahaan dan jumlah proses rawan yang harus dipetakan. Biaya lembaga sertifikasi terpisah dan mengikuti lembaga serta ukuran organisasi yang diaudit — kami uraikan transparan sebelum Anda memilih. Semua pos biaya tertulis di penawaran agar tidak ada kejutan di tengah proyek." },
      { q: "Berapa lama sertifikat berlaku dan apa yang harus dijaga setelahnya?", a: "Sertifikat ISO 37001 umumnya berlaku tiga tahun dengan siklus audit surveilans tahunan untuk memastikan sistem tetap dijalankan. Yang dijaga bukan kertasnya, melainkan kebiasaannya: pencatatan hadiah, pemutakhiran due diligence mitra, keberjalanan kanal pelaporan, dan tinjauan manajemen berkala. Panduan pemeliharaan yang kami serahkan membuat tim Anda mampu menjaganya tanpa bergantung pihak luar setiap bulan." },
      { q: "Perusahaan saya tidak sebesar kontraktor BUMN — apakah sistem ini relevan untuk saya?", a: "Relevansinya ditentukan kebutuhan, bukan ukuran: bila Anda memasok BUMN, ikut tender pemerintah, atau bekerja untuk korporasi yang menuntut mitra antisuap, sertifikat menjadi tiket yang diminta — perusahaan kecil pun mengalaminya. Yang bisa disederhanakan adalah skala sistemnya: prosedur yang ringkas namun hidup jauh lebih bernilai daripada dokumen tebal yang tidak dijalankan. Kami menyesuaikan kedalaman sistem dengan operasional Anda, bukan menyalin templat korporasi raksasa." },
    ],
    related: ["iso", "tata-kelola-korporat", "pencegahan-fraud-sop", "dewan-komisaris-mandiri"],
  },
  {
    slug: "sistem-penilaian-kinerja",
    tagline: "Kinerja yang tidak diukur akan dinilai oleh rumor — dan rumor tidak pernah adil.",
    heroSub:
      "KPI per peran, siklus review dengan calibrasi, dan kaitan kompensasi yang sah secara hukum — untuk perusahaan yang ingin keputusan gaji, promosi, bahkan pemisahan berdiri di atas bukti, bukan perasaan.",
    timeline: "5–8 minggu untuk desain dan implementasi awal",
    intro: [
      "Setiap keputusan SDM yang penting — kenaikan gaji, promosi, demosi, sampai pemutusan hubungan kerja — pada akhirnya diuji satu pertanyaan: atas dasar apa. Hukum ketenagakerjaan tahu menilai dokumen: evaluasi masa percobaan hanya berlaku maksimal tiga bulan dan harus berupa penilaian tertulis menurut UU No. 13 Tahun 2003, upah yang mengaitkan kinerja diakui dalam kerangka pengupahan PP No. 36 Tahun 2021, dan pemutusan karena kinerja harus melewati jalur PHK yang sah dengan bukti pembinaan — bukan sekadar angka rendah di lembar penilaian. Sistem penilaian yang tertata adalah jembatan antara manajemen yang ingin tegas dan hukum yang menuntut bukti. Tanpa jembatan itu, setiap keputusan berjalan di tali yang tidak terlihat.",
      "Kekacauan yang kami temui hampir selalu dimulai dari KPI yang disalin dari internet: target yang tidak nyambung dengan pekerjaan sehari-hari, ukuran yang tidak bisa diukur siapa pun, dan bobot yang ditetapkan tanpa pernah didiskusikan. Review tahunan menjadi formalitas lima belas menit yang semua pihak ingin cepat selesai; skala penilaian miring karena setiap manajer punya standar keadilannya sendiri — manajer yang paling murah hati skor justru mendapat tim yang paling diperhatikan di musim bonus. Ketika keputusan pemisahan diambil atas dasar 'kinerja tidak memadai', berkasnya kosong: tidak ada target yang disepakati, tidak ada catatan pembinaan, tidak ada bukti yang bisa dibawa ke mana pun. Karyawan terbaik membaca inkonsistensi ini lebih cepat dari manajemen — dan yang pergi duluan biasanya justru mereka.",
      "Kami merancang sistemnya dari fondasi yang benar: KPI per peran yang diturunkan dari kartu jabatan dan target bisnis yang nyata, siklus review yang berjalan cukup sering untuk memperbaiki — bukan hanya mencatat, dan sesi calibrasi antar manajer yang meratakan standar penilaian. Hasil penilaian ditautkan dengan aturan tertulis ke kompensasi, promosi, dan tindakan kinerja rendah — sehingga setiap rupiah insentif dan setiap keputusan karier punya jejak yang bisa diperiksa. Manajer penilai kami latih, karena sistem terbaik tetap gagal di tangan penilai yang belum paham. Dokumen yang lahir dari sistem ini dirancang tahan diperiksa — oleh karyawan, auditor, sampai pengadilan bila sampai di sana.",
    ],
    benefits: [
      { title: "Keputusan berbasis bukti", desc: "Gaji, promosi, dan tindakan kinerja rendah memiliki jejak dokumen — bukan keputusan yang diangkat dari ingatan." },
      { title: "Adil di mata semua pihak", desc: "Calibrasi antar manajer meratakan standar penilaian — bias personal kehilangan tempatnya." },
      { title: "Orang terbaik bertahan", desc: "Kerja yang baik kelihatan, diukur, dan dihargai tepat waktu — alasan paling lama orang bagus bertahan." },
      { title: "Payroll dan bonus selaras", desc: "Insentif tertaut kriteria yang disepakati sejak awal — musim bonus tidak lagi menjadi musim protes." },
      { title: "Tahan uji hukum", desc: "Dokumen kinerja yang benar menjadi bukti sah saat sengketa — jalur PHK karena kinerja berdiri di punggung yang kuat." },
    ],
    process: [
      { title: "Desain KPI per peran", desc: "Indikator diturunkan dari kartu jabatan dan target bisnis — realistis, terukur, dan disepakati bersama pemegang peran." },
      { title: "Siklus review & calibrasi", desc: "Jadwal penilaian, forum calibrasi antar manajer, dan aturan skor yang merata — standar yang sama untuk semua tim." },
      { title: "Kaitan kompensasi & karier", desc: "Aturan tertulis menautkan hasil penilaian ke bonus, promosi, dan tindakan kinerja rendah — konsisten dari tahun ke tahun." },
      { title: "Pelatihan & evaluasi sistem", desc: "Manajer penilai dilatih menjalankan review yang benar — sistem diperiksa dan disempurnakan tiap siklus." },
    ],
    requirements: [
      "Struktur dan daftar jabatan (bila belum ada, penataan jabatan kami kerjakan lebih dulu)",
      "Data kinerja apa pun yang selama ini tercatat, apa adanya",
      "Komponen upah, bonus, dan insentif yang sedang berlaku",
      "Daftar peran kunci dan masalah kinerja yang paling sering terjadi",
      "Komitmen manajemen menjalankan siklus review secara konsisten",
    ],
    faqs: [
      { q: "Berapa biaya membangun sistem penilaian kinerja?", a: "Layanannya mulai Rp 7,5 juta, terutama ditentukan jumlah peran yang harus diberi KPI dan kedalaman kaitan ke kompensasi. Perusahaan dengan lima belas jenis jabatan berbeda selesai di kisaran awal; organisasi besar dengan banyak lapisan membutuhkan lingkup lebih luas. Penawaran tertulis kami sampaikan setelah pemetaan peran awal." },
      { q: "Apakah nilai kinerja rendah bisa langsung menjadi alasan PHK?", a: "Tidak bisa langsung — dan di sinilah banyak perusahaan tersandung. Hukum menuntut alasan PHK dari daftar tertentu dan jalur pembinaan yang terdokumentasi: target yang disepakati, catatan pembinaan, surat peringatan yang berjenjang, sebelum jalur PHK dibuka dengan benar. Justru sistem penilaian yang kami bangun menyediakan seluruh bukti itu secara alami — sehingga bila suatu saat pemisahan harus dilakukan, berkasnya sudah tertata, bukan dirakit tergesa setelah keputusan diambil." },
      { q: "Tim kami masih kecil — apakah sistem semacam ini tidak terlalu berat?", a: "Justru pada tim kecil, keadilan penilaian paling terasa dan paling murah dijaga — semua orang tahu semua orang, sehingga ketidakadilan tidak bisa disembunyikan. Sistemnya kami sederhanakan sesuai skala: beberapa indikator inti, satu siklus review per semester, dan aturan bonus satu halaman. Yang penting dasarnya tertulis sejak sekarang — menata ulang sistem yang sudah merusak kepercayaan jauh lebih mahal daripada membangunnya benar dari awal." },
    ],
    related: ["struktur-organisasi-grading", "esop-program", "audit-payroll", "kontrak-kerja-pkwt"],
  },
  {
    slug: "kebijakan-remote-hybrid",
    tagline: "Bekerja dari mana saja hanya aman bila aturannya tertulis — sisanya adalah menunggu gugatan.",
    heroSub:
      "Kebijakan kerja remote dan hybrid yang lengkap: jam kerja fleksibel sesuai aturan Ciptaker, pengamanan data sesuai UU PDP, kompensasi, dan kehadiran — untuk perusahaan yang timnya tersebar namun tanggung jawabnya tidak boleh.",
    timeline: "2–4 minggu hingga kebijakan berlaku",
    intro: [
      "Kerja fleksibel sudah punya payung hukumnya — yang sering tidak dimiliki perusahaan adalah dokumen pengikatnya. UU No. 6 Tahun 2023 dan PP No. 35 Tahun 2021 mengakui sistem waktu kerja fleksibel yang dituangkan dalam perjanjian kerja, peraturan perusahaan, atau kesepakatan bersama; tanpa itu, jam kerja tetap dinilai dengan aturan umum — tujuh jam sehari, empat puluh jam seminggu — dan pekerjaan di luar itu berpotensi diperhitungkan sebagai lembur. Di sisi lain, karyawan yang mengakses data perusahaan dari kafe dan rumah menarik UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi ke meja kerjanya sendiri: kebocoran dari perangkat pribadi tetap kebocoran yang bisa ditagih. Fleksibilitas tanpa kebijakan bukan kebebasan — ia kekosongan yang menunggu diisi sengketa.",
      "Konflik remote yang paling sering kami lihat lahir dari aturan yang hanya hidup di grup chat. Karyawan yang membalas pesan kerja hingga tengah malam menganggap dirinya lembur; perusahaan menganggapnya antusias — sampai tagihan lembur dua tahun masuk sebagai gugatan. Laptop pribadi tanpa enkripsi menjadi pintu keluar data karyawan dan data klien, dan saat insiden terjadi, tidak ada kebijakan yang bisa meredam pertanyaan penguji kepatuhan. Karyawan yang pindah domisili ke kota lain membuat jam kerja, zona waktu, dan bahkan perbandingan upah minimum wilayah menjadi polemik yang tidak punya jawaban tertulis. Semua itu terjadi karena satu keputusan yang tertunda: menuliskan aturannya.",
      "Kami menyusun kebijakan remote dan hybrid yang berdiri di atas hukum dan realitas kerja Anda: pemetaan per tim mana pekerjaan yang boleh lepas lokasi dan mana yang wajib hadir, aturan jam inti dan pencatatan waktu kerja yang sah, kebijakan perangkat dan akses — perangkat perusahaan atau pribadi, enkripsi, larangan berbagi akun, penanganan insiden data — sesuai tuntutan UU PDP, serta kebijakan kompensasi seperti bantuan internet dan aturan kehadiran yang bisa dilacak dengan adil. Perubahan itu kami tuangkan ke dokumen yang mengikat: perjanjian kerja yang diperbarui, peraturan perusahaan atau panduan karyawan, dan sosialisasi yang membuat aturan dimengerti, bukan sekadar dikirim. Hasilnya, perusahaan Anda fleksibel secara tertata — dan tetap tangguh saat diperiksa.",
    ],
    benefits: [
      { title: "Aturan yang mengikat, bukan grup chat", desc: "Kebijakan tertulis dalam dokumen yang sah — sumber kebenaran tunggal saat terjadi perbedaan tafsir." },
      { title: "Jam kerja dan lembur terkendali", desc: "Sistem waktu kerja fleksibel dituangkan sesuai aturan — tagihan lembur yang tidak terduga kehilangan pijakannya." },
      { title: "Data perusahaan tetap terjaga", desc: "Perangkat, akses, dan penanganan insiden diatur sesuai UU PDP — kebocoran dari rumah tidak lagi menjadi lubang yang tidak terpikir." },
      { title: "Kompensasi yang jelas", desc: "Bantuan internet, alat kerja, dan aturan kehadiran ditulis terang — tidak ada polemik baru setiap kasus baru." },
      { title: "Siap diperiksa kapan pun", desc: "Kebijakan konsisten dengan perjanjian kerja dan peraturan perusahaan — dokumen yang saling menguatkan, bukan saling membantah." },
    ],
    process: [
      { title: "Pemetaan pola kerja", desc: "Per tim dipetakan: pekerjaan yang boleh lepas lokasi, yang wajib hadir, dan data yang disentuh di setiap mode kerja." },
      { title: "Penyusunan kebijakan", desc: "Jam inti, pencatatan waktu kerja, kompensasi, dan kehadiran disusun sesuai aturan waktu kerja fleksibel yang berlaku." },
      { title: "Pengamanan data & perangkat", desc: "Kebijakan perangkat, akses, dan penanganan insiden disusun sejalan dengan UU Pelindungan Data Pribadi." },
      { title: "Sosialisasi & pemberlakuan", desc: "Perjanjian kerja dan dokumen internal diperbarui, tim diedukasi — kebijakan berlaku dengan dimengerti, bukan sekadar dikirim." },
    ],
    requirements: [
      "Struktur tim dan pola kerja yang sedang berjalan hari ini",
      "Perangkat dan sistem yang dipakai karyawan: laptop, aplikasi, akses jarak jauh",
      "Jenis data yang diakses karyawan dari luar kantor",
      "Komponen upah, tunjangan, dan fasilitas yang sedang berlaku",
      "Peraturan perusahaan atau dokumen kepegawaian yang ada (bila ada)",
    ],
    faqs: [
      { q: "Apakah perusahaan boleh memotong gaji karyawan yang bekerja remote?", a: "Upah tidak boleh dipotong asal-asalan — pekerja tetap berhak atas upah penuh selama bekerja sesuai perjanjian, apa pun lokasinya. Yang dapat diatur adalah komponen di luar upah pokok: tunjangan kehadiran, bantuan operasional, atau fasilitas kantor — dan pengaturannya harus tertulis serta tidak menurunkan hak yang sudah diperoleh. Sebaiknya kebijakan membedakan dengan jelas mana upah yang tetap dan mana fasilitas yang mengikuti pola kerja, agar tidak ada salah paham di kemudian hari." },
      { q: "Bagaimana aturan lembur bagi karyawan yang bekerja dari rumah?", a: "Aturan lembur tetap berlaku sama seperti bekerja di kantor — pekerjaan di luar jam kerja yang ditetapkan dapat diperhitungkan sebagai kerja lembur dengan persetujuan dan pencatatan yang benar. Justru karena tidak ada jam pulang kantor yang kelihatan, kebijakan remote wajib mengatur cara mencatat: jam inti, persetujuan tugas di luar jam, dan sistem pelaporan waktu. Tanpa itu, perbedaan tafsir antara 'balas pesan malam' dan 'lembur' akan diselesaikan di tempat yang paling mahal: pengadilan." },
      { q: "Berapa biaya menyusun kebijakan remote dan hybrid?", a: "Layanannya mulai Rp 3,5 juta untuk kebijakan menyeluruh yang disesuaikan pola kerja tim Anda — dari jam kerja fleksibel, kompensasi, sampai pengamanan data. Tambahan lingkup muncul bila kebutuhannya lebih dalam, misalnya audit keamanan data dasar atau penataan ulang perjanjian kerja per kelompok karyawan. Angka finalnya tertulis di penawaran setelah pemetaan awal pola kerja Anda." },
    ],
    related: ["kepatuhan-uu-pdp", "kontrak-kerja-pkwt", "kebijakan-privasi-situs", "audit-payroll"],
  },
];

/**
 * Lapisan pengayaan SDM & Organisasi — digabung otomatis oleh getServiceContent().
 * whoFor, deliverables, costs, legalBasis per slug.
 */
export const sdmOrganisasiEnrichment: Record<string, ServiceEnrichment> = {
  "struktur-organisasi-grading": {
    whoFor: [
      "Perusahaan 20 orang ke atas yang gajinya sudah tidak bisa dijelaskan dengan satu logika",
      "Bisnis keluarga yang bertransisi mempekerjakan profesional non-keluarga",
      "Perusahaan yang mengejar tender atau investor yang menanyakan struktur organisasi",
      "HRD yang diminta membangun jalur karier dan rencana suksesi namun belum punya fondasi jabatan",
    ],
    deliverables: [
      "Struktur organisasi baru beserta peta alur kerja antar fungsi",
      "Matriks grading: setiap jabatan duduk di jenjang mana dan mengapa",
      "Dokumen Struktur dan Skala Upah (SSU) sesuai ketentuan pengupahan",
      "Kartu jabatan per peran: tanggung jawab, batasan, dan indikator",
      "Kalender implementasi, roadmap koreksi gaji, dan panduan komunikasi",
    ],
    costs: [
      { item: "Jasa penyusunan struktur & grading", note: "mulai Rp 10 jt — ditetapkan penuh di penawaran sesuai jumlah jabatan" },
      { item: "Benchmark gaji pasar", note: "opsional — sumber data pasar terpercaya, disepakati di awal" },
      { item: "Sesi pelatihan manajer implementasi", note: "opsional — menyiapkan manajer menjelaskan struktur ke timnya" },
      { item: "Biaya transisi gaji", note: "kewajiban internal perusahaan mengikuti roadmap koreksi yang disusun" },
      { item: "Peninjauan struktur tahunan", note: "opsional — retainer ringan untuk menyesuaikan jenjang saat organisasi berubah" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan jo. UU No. 6 Tahun 2023 (Cipta Kerja)",
      "PP No. 36 Tahun 2021 tentang Pengupahan — kewajiban menyusun struktur dan skala upah",
      "Peraturan Menteri Tenaga Kerja dan Transmigrasi No. 17 Tahun 2005 tentang Tata Cara Penyusunan Struktur dan Skala Upah Perusahaan",
    ],
  },

  "audit-payroll": {
    whoFor: [
      "Perusahaan 30 karyawan ke atas dengan payroll yang dikelola internal",
      "Perusahaan yang baru menerima panggilan pemeriksaan pajak atau surat BPJS",
      "Perusahaan yang baru berganti personel HR atau payroll dan ingin memastikan tidak ada warisan kesalahan",
      "Perusahaan menjelang due diligence investor, audit tahunan, atau rencana akuisisi",
    ],
    deliverables: [
      "Laporan audit temuan berjenjang: kritis, menengah, minor — dengan estimasi dampak finansial",
      "Matriks kepatuhan per kewajiban: PPh 21, THR, BPJS, upah, dan komponennya",
      "Roadmap koreksi bertahap beserta opsi perbaikan sukarela",
      "Template perhitungan dan slip yang benar untuk dipakai tim payroll",
      "Sesi penjelasan hasil audit ke tim HR dan keuangan",
    ],
    costs: [
      { item: "Jasa audit payroll", note: "mulai Rp 5 jt — final di penawaran setelah ceklis data awal" },
      { item: "Tambahan lingkup per jumlah karyawan", note: "mengikuti volume — tertulis sejak penawaran" },
      { item: "Pendampingan koreksi ke belakang", note: "opsional — dihitung per kasus sesuai masa yang dikoreksi" },
      { item: "Penyiapan tanggapan teguran", note: "opsional — per kasus, bila surat sudah masuk" },
      { item: "Audit ulang tahunan", note: "opsional — retainer ringan sebelum setiap tutup buku" },
    ],
    legalBasis: [
      "UU No. 7 Tahun 2021 (HPP) dan PMK No. 168 Tahun 2023 tentang PPh atas Penghasilan dari Pekerjaan",
      "UU No. 13 Tahun 2003 jo. UU No. 6 Tahun 2023 dan PP No. 36 Tahun 2021 tentang Pengupahan",
      "Permenaker No. 6 Tahun 2016 tentang Tunjangan Hari Raya Keagamaan bagi Pekerja di Perusahaan Swasta",
      "UU No. 24 Tahun 2011 tentang Badan Penyelenggara Jaminan Sosial",
    ],
  },

  "kontrak-kerja-pkwt": {
    whoFor: [
      "Perusahaan proyek, retail, dan FMCG dengan lonjakan pekerjaan musiman",
      "Startup yang membangun tim berbasis milestone dengan tenggat yang jelas",
      "Perusahaan kreatif dan digital yang bekerja sama dengan pekerja kreatif",
      "Perusahaan yang kontraknya dibuat asal tanda tangan dan ingin dirapikan sebelum disengketakan",
    ],
    deliverables: [
      "Template PKWT dan PKWTT per kategori posisi",
      "Perjanjian kerja sama pekerja kreatif sesuai kaidah Pasal 66 (bila relevan)",
      "Matriks status tenaga kerja: siapa berada di bentuk apa dan alasannya",
      "Kalender jangka waktu PKWT dengan pengingat kompensasi",
      "SOP berakhir dan konversi kontrak, termasuk format berita acara",
    ],
    costs: [
      { item: "Jasa penyusunan template", note: "mulai Rp 1,5 jt per rangkaian — dipakai lintas karyawan per kategori" },
      { item: "Audit kontrak yang berjalan", note: "opsional — dihitung per volume dokumen" },
      { item: "Penyesuaian posisi khusus", note: "opsional — untuk posisi dengan struktur penghasilan tidak lazim" },
      { item: "Dana kompensasi PKWT", note: "kewajiban internal perusahaan — dihitung per karyawan sesuai masa kontrak" },
      { item: "Legalisasi atau notaris", note: "opsional — bila dokumen tertentu memerlukan" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan jo. UU No. 6 Tahun 2023 (Cipta Kerja)",
      "PP No. 35 Tahun 2021 — PKWT, dana kompensasi, alih daya, waktu kerja, dan PHK",
      "PP No. 36 Tahun 2021 tentang Pengupahan",
      "UU No. 11 Tahun 2008 (ITE) jo. UU No. 1 Tahun 2024 — keabsahan tanda tangan elektronik",
    ],
  },

  "program-magang": {
    whoFor: [
      "Perusahaan yang rutin menerima PKL dari SMK atau mahasiswa magang setiap semester",
      "Perusahaan yang mengikuti program magang dari perguruan tinggi (skema Merdeka Belajar)",
      "Perusahaan yang menyelenggarakan pemagangan jalur Kemnaker dengan sertifikasi kompetensi",
      "Perusahaan yang ingin membangun pipa rekrutmen dari kampus secara terstruktur",
    ],
    deliverables: [
      "Perjanjian magang sesuai jalur: tripartit dengan institusi pendidikan atau perjanjian pemagangan Kemnaker",
      "Handbook program: jam kerja, hak peserta, batasan tugas, dan tata tertib",
      "Polis asuransi kecelakaan untuk seluruh peserta angkatan",
      "Format evaluasi, sertifikat, dan rekomendasi konversi",
      "SOP orientasi keselamatan dan penunjukan mentor",
    ],
    costs: [
      { item: "Jasa penyusunan program", note: "mulai Rp 2 jt per angkatan — termasuk dokumen dan handbook" },
      { item: "Premi asuransi kecelakaan", note: "per peserta — mengikuti durasi program" },
      { item: "Uang saku peserta", note: "kewajiban internal perusahaan — disepakati sesuai jalur magang" },
      { item: "Uji kompetensi (jalur sertifikasi)", note: "biaya lembaga sertifikasi — bila program memakai jalur BNSP" },
      { item: "Pendampingan program per angkatan", note: "opsional — retainer ringan untuk program yang berjalan rutin" },
    ],
    legalBasis: [
      "Permenaker No. 6 Tahun 2020 tentang Penyelenggaraan Pemagangan di Dalam Negeri",
      "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "UU No. 13 Tahun 2003 jo. UU No. 6 Tahun 2023 (Cipta Kerja)",
      "Peraturan Menteri Pendidikan dan Kebudayaan No. 3 Tahun 2020 (SN-Dikti — magang sebagai bentuk kegiatan pembelajaran)",
    ],
  },

  "alih-daya-outsourcing": {
    whoFor: [
      "Perusahaan dengan tenaga kebersihan, keamanan, packing, atau produksi dari penyedia pihak ketiga",
      "Perusahaan logistik dan gudang dengan kebutuhan tenaga yang naik-turun musiman",
      "Perusahaan yang akan mengikuti tender atau diaudit dan diminta bukti kepatuhan vendor",
      "Perusahaan yang pernah terkena gugatan pekerja alih daya dan ingin menutup celahnya",
    ],
    deliverables: [
      "Laporan uji kesahihan penggunaan alih daya per jenis pekerjaan",
      "Perjanjian alih daya utama beserta lingkup pekerjaan dan SLA",
      "Checklist audit penyedia yang dapat dipakai ulang untuk vendor baru",
      "Matriks tanggung jawab pengguna dan penyedia",
      "Panduan pemantauan berkala dan peninjauan kontrak",
    ],
    costs: [
      { item: "Jasa pemetaan dan penataan", note: "mulai Rp 5 jt per siklus — ditetapkan di penawaran" },
      { item: "Audit per penyedia tambahan", note: "mengikuti jumlah vendor — tertulis sejak penawaran" },
      { item: "Penyusunan ulang kontrak per vendor", note: "sesuai volume dan kompleksitas kontrak lama" },
      { item: "Pendampingan sengketa", note: "opsional — per kasus, kami arahkan ke pendamping hukum yang tepat" },
      { item: "Pemantauan tahunan", note: "opsional — retainer ringan untuk audit vendor berkala" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 (Pasal 64–66) jo. UU No. 6 Tahun 2023 (Cipta Kerja)",
      "PP No. 35 Tahun 2021 — pelindungan pekerja alih daya",
      "UU No. 24 Tahun 2011 tentang Badan Penyelenggara Jaminan Sosial",
      "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
    ],
  },

  "phk-terkelola": {
    whoFor: [
      "Perusahaan yang mengefisienkan organisasi atau menutup divisi dan cabang",
      "Perusahaan yang memproses karyawan bermasalah dengan surat peringatan sudah berjenjang",
      "HRD yang membutuhkan protokol agar manajer pelaksana tidak salah langkah di hari-H",
      "Perusahaan yang sudah menghadapi gugatan dan perlu menata posisi dokumennya",
    ],
    deliverables: [
      "Analisis jalur dan alasan PHK beserta alternatifnya",
      "Tabel kalkulasi hak per orang: pesangon, penghargaan masa kerja, penghasilan penggantian hak",
      "Draft surat PHK, berita acara kesepakatan bipartit, dan kuitansi",
      "Skrip komunikasi dan protokol hari-H untuk manajer pelaksana",
      "Panduan pasca-PHK: pembayaran, BPJS, dan surat pengalaman kerja",
    ],
    costs: [
      { item: "Jasa pengelolaan PHK", note: "mulai Rp 4 jt — disesuaikan jumlah karyawan terdampak" },
      { item: "Tambahan per karyawan terdampak", note: "mengikuti volume — tertulis di penawaran" },
      { item: "Pendampingan mediasi", note: "opsional — per kasus bila perundingan buntu" },
      { item: "Konsultasi khusus kasus proteksi", note: "opsional — untuk karyawan berstatus proteksi tertentu" },
      { item: "Pelatihan manajer pelaksana", note: "opsional — menyiapkan manajer menyampaikan PHK dengan layak" },
    ],
    legalBasis: [
      "UU No. 6 Tahun 2023 (Cipta Kerja) — daftar alasan dan prosedur PHK",
      "PP No. 35 Tahun 2021 — pesangon, penghargaan masa kerja, dan penghasilan penggantian hak",
      "UU No. 13 Tahun 2003 — pasal-pasal PHK dan proteksi pekerja tertentu",
      "PP No. 36 Tahun 2021 — komponen upah sebagai dasar perhitungan",
    ],
  },

  "lks-bipartit": {
    whoFor: [
      "Perusahaan 50 pekerja ke atas yang belum membentuk LKS Bipartit",
      "Perusahaan yang SK-nya sudah lama terbit namun forumnya tidak pernah berjalan",
      "Perusahaan yang menyiapkan dokumen kualifikasi tender BUMN atau pemerintah",
      "Perusahaan yang sedang memulihkan hubungan industrial setelah konflik atau protes",
    ],
    deliverables: [
      "Dokumen pendirian dan SK pendaftaran LKS Bipartit dari Disnaker",
      "Program kerja tahunan yang realistis dan dapat dijalankan",
      "Format notula, absensi, dan arsip rapat",
      "Pendampingan rapat perdana bersama kedua pihak",
      "Panduan pelaporan tahunan ke dinas ketenagakerjaan",
    ],
    costs: [
      { item: "Jasa pembentukan dan pendaftaran", note: "mulai Rp 1,5 jt — sampai SK terbit" },
      { item: "Rapat dan logistik forum", note: "kegiatan internal perusahaan sesuai program kerja" },
      { item: "Pendampingan rapat berkala", note: "opsional — retainer ringan per kuartal" },
      { item: "Pembaruan SK pergantian pengurus", note: "kecil, per kasus — sesuai prosedur Disnaker setempat" },
      { item: "Pelatihan pengurus LKS", note: "opsional — menyiapkan kedua pihak menjalankan forumnya" },
    ],
    legalBasis: [
      "Permenaker No. 31 Tahun 2013 tentang Lembaga Kerja Sama Bipartit",
      "UU No. 13 Tahun 2003 jo. UU No. 6 Tahun 2023 (Cipta Kerja)",
      "PP No. 35 Tahun 2021 — kesepakatan bersama hasil perundingan",
      "UU No. 21 Tahun 2000 tentang Serikat Pekerja/Serikat Buruh (pembedaan peran)",
    ],
  },

  "iso-37001-antisuap": {
    whoFor: [
      "Kontraktor dan vendor yang mengejar tender BUMN atau proyek pemerintah",
      "Perusahaan yang masuk rantai pasok korporasi multinasional",
      "Perusahaan dengan interaksi intensif terhadap instansi pemerintah dan pengadaan",
      "Perusahaan yang sedang membangun kembali kredibilitas setelah insiden kepatuhan",
    ],
    deliverables: [
      "Laporan gap analysis terhadap SNI ISO 37001",
      "Dokumen sistem antisuap: kebijakan, prosedur, dan register risiko",
      "Kebijakan hadiah dan hospitalitas dengan ambang yang jelas",
      "Prosedur due diligence mitra dan kanal whistleblowing",
      "Sertifikat SNI ISO 37001 dan panduan pemeliharaan sistem",
    ],
    costs: [
      { item: "Jasa pembangunan sistem antisuap", note: "mulai Rp 12 jt — sesuai skala dan kompleksitas" },
      { item: "Biaya lembaga sertifikasi", note: "terpisah — mengikuti lembaga terakreditasi yang dipilih" },
      { item: "Audit surveilans tahunan", note: "biaya lembaga — selama masa berlaku sertifikat" },
      { item: "Pelatihan karyawan antisuap", note: "opsional — disesuaikan jumlah peserta" },
      { item: "Pemutakhiran sistem", note: "opsional — saat revisi standar atau perubahan besar organisasi" },
    ],
    legalBasis: [
      "UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi",
      "SNI ISO 37001:2016 — Sistem Manajemen Anti Penyuapan",
      "Peraturan Komisi Pemberantasan Korupsi tentang tata cara pelaporan gratifikasi",
    ],
  },

  "sistem-penilaian-kinerja": {
    whoFor: [
      "Perusahaan 25 karyawan ke atas yang bonus dan insentifnya tidak punya dasar yang jelas",
      "Perusahaan yang keputusan promosinya selalu berujung pertanyaan 'kenapa dia'",
      "HRD yang membangun penilaian 9-box, rencana suksesi, dan jalur karier",
      "Perusahaan yang akan memproses karyawan kinerja rendah secara benar dan tertata",
    ],
    deliverables: [
      "Dokumen KPI per peran beserta bobot dan targetnya",
      "Kalender siklus review dan mekanisme calibrasi antar manajer",
      "Aturan kaitan kompensasi: bonus, promosi, dan tindakan kinerja rendah",
      "Template dokumen penilaian yang tahan diuji secara hukum",
      "Sesi pelatihan manajer sebagai penilai",
    ],
    costs: [
      { item: "Jasa desain sistem penilaian", note: "mulai Rp 7,5 jt — sesuai jumlah peran dan kompleksitas" },
      { item: "Penyesuaian per peran tambahan", note: "mengikuti volume jabatan — tertulis di penawaran" },
      { item: "Fasilitasi calibrasi per siklus", note: "opsional — untuk siklus-siklus awal" },
      { item: "Pelatihan lanjutan penilai", note: "opsional — untuk manajer baru setiap tahun" },
      { item: "Peninjauan sistem tahunan", note: "opsional — retainer ringan menjaga sistem tetap relevan" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 jo. UU No. 6 Tahun 2023 — evaluasi masa percobaan dan alasan PHK",
      "PP No. 36 Tahun 2021 tentang Pengupahan — komponen upah terkait kinerja",
      "PP No. 35 Tahun 2021 — jalur pembinaan dan PHK",
      "Permenaker No. 38 Tahun 2016 tentang Pembentukan dan Penggunaan Surat Peringatan",
    ],
  },

  "kebijakan-remote-hybrid": {
    whoFor: [
      "Perusahaan teknologi dan kreatif dengan tim yang bekerja jarak jauh secara rutin",
      "Perusahaan yang mengurangi luas kantor dan memindahkan sebagian pekerjaan ke rumah",
      "Perusahaan yang menerima karyawan lintas kota dengan jam kerja berbeda",
      "HRD yang ingin menutup celah keamanan data dan lembur yang tidak tercatat",
    ],
    deliverables: [
      "Dokumen kebijakan kerja remote dan hybrid yang menyeluruh",
      "Perubahan perjanjian kerja atau peraturan perusahaan yang diperlukan",
      "Kebijakan keamanan data dan perangkat sesuai tuntutan UU PDP",
      "Format pelaporan kehadiran dan pencatatan waktu kerja",
      "Panduan kompensasi dan kewajiban karyawan yang dapat disosialisasikan",
    ],
    costs: [
      { item: "Jasa penyusunan kebijakan", note: "mulai Rp 3,5 jt — sesuai kompleksitas pola kerja" },
      { item: "Penyesuaian per tim khusus", note: "opsional — untuk tim dengan pola kerja tidak lazim" },
      { item: "Audit keamanan data dasar", note: "opsional — terkait kepatuhan UU PDP" },
      { item: "Sosialisasi dan pelatihan tim", note: "opsional — sesi daring per kelompok karyawan" },
      { item: "Pemutakhiran kebijakan tahunan", note: "opsional — retainer ringan mengikuti perkembangan regulasi" },
    ],
    legalBasis: [
      "UU No. 6 Tahun 2023 (Cipta Kerja) — sistem waktu kerja fleksibel",
      "PP No. 35 Tahun 2021 — perjanjian waktu kerja fleksibel",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi",
      "UU No. 11 Tahun 2008 (ITE) jo. UU No. 1 Tahun 2024",
    ],
  },
};
