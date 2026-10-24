import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — KEPATUHAN DIGITAL & DATA (10 layanan).
 * Kepatuhan UU PDP, DPOaaS, registrasi PSE, audit siber, respons insiden,
 * kepatuhan iklan digital, tata kelola AI, kebijakan privasi, kepatuhan
 * fintech OJK, dan kepatuhan dagang daring.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const kepatuhanDigitalContent: ServiceContent[] = [
  {
    slug: "kepatuhan-uu-pdp",
    tagline: "Data pelanggan Anda adalah amanah — kini dengan tenggat waktu dan sanksi yang hitam di atas putih.",
    heroSub:
      "Program kepatuhan UU PDP menyeluruh bagi perusahaan yang mengelola data pribadi: audit alur data, basis legal, kebijakan, perjanjian pemrosesan, sampai roadmap kepatuhan — dirampungkan sebelum sanksi hingga 2% pendapatan tahunan menjadi berita utama perusahaan Anda.",
    timeline: "4–12 minggu tergantung kompleksitas alur data",
    intro: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi sudah berlaku penuh: masa transisi dua tahun setelah diundangkan telah berakhir pada Oktober 2024, artinya seluruh pengendali dan pemroses data pribadi di Indonesia kini tunduk pada kewajiban penuhnya — tanpa kecuali skala usaha. Regulasinya menuntut hal-hal yang sangat konkret: setiap alur data harus punya basis legal yang jelas (persetujuan, pelaksanaan perjanjian, kewajiban hukum, atau kepentingan yang sah), subjek data punya hak yang wajib dijamin mulai dari akses, koreksi, penghapusan, sampai penarikan persetujuan, dan kebocoran data wajib dinotifikasi dalam 3x24 jam. Pengendali yang memproses dalam skala besar, memantau perilaku secara sistematis, atau mengolah data sensitif juga wajib menunjuk Petugas Pelindungan Data. Sanksinya bukan wacana: denda administratif hingga 2% dari pendapatan tahunan, di samping gugatan perdata yang bisa diajukan langsung oleh subjek data yang dirugikan.",
      "Kesalahan yang paling sering terjadi: perusahaan mengira kepatuhan PDP selesai dengan memasang kebijakan privasi di situs — padahal yang diperiksa adalah alur datanya: data apa yang dikumpulkan, untuk tujuan apa, disimpan di mana, dibagikan kepada siapa (termasuk vendor pihak ketiga yang sering tidak punya perjanjian pemrosesan), dan dihapus dengan cara apa. Kesalahan kedua adalah menunggu: kepatuhan PDP bukan dokumen yang lahir dalam satu hari — audit, perbaikan kontrak, penyusunan kebijakan, dan pelatihan tim semuanya memakan waktu. Perusahaan yang menunggu sanksi pertama jatuh akan memproses semuanya dalam keadaan panik, dengan alur data yang sudah bertahun-tahun kacau di belakangnya — dan saat itu pula setiap kontrak vendor yang bolong dan setiap persetujuan yang tidak sah menjadi temuan yang tidak bisa disembunyikan.",
      "Kami menangani kepatuhan PDP sebagai program, bukan produk dokumen. Ruang lingkupnya menyentuh seluruh titik: audit pemetaan alur data di seluruh titik sentuh perusahaan, penetapan basis legal untuk setiap tujuan pemrosesan, penyusunan kebijakan dan dokumen wajib, penyiapan Data Processing Agreement dengan vendor, mekanisme hak subjek data yang benar-benar berfungsi termasuk jalur penghapusan, pelatihan tim, serta roadmap kepatuhan 12 bulan yang realistis. Prioritas disusun dari risiko terbesar — bukan dari yang paling mudah dikerjakan — sehingga bulan-bulan pertama selalu menghasilkan penurunan risiko yang terukur, bukan sekadar dokumen baru di folder yang tak pernah dibuka.",
    ],
    benefits: [
      { title: "Tenggat terlewat tanpa panik", desc: "Program dirampungkan terstruktur setelah masa transisi berlaku penuh — sanksi 2% pendapatan tahunan tidak lagi masuk daftar risiko Anda." },
      { title: "Alur data terpetakan utuh", desc: "Anda tahu persis data apa yang dikelola perusahaan, tersimpan di mana, dengan basis legal apa — fondasi semua keputusan data selanjutnya." },
      { title: "Vendor ikut tertib", desc: "DPA disiapkan untuk pihak ketiga yang menyentuh data — tanggung jawab hukum tidak bolong di vendor yang paling sering terlewat." },
      { title: "Hak subjek data terlayani", desc: "Jalur akses, koreksi, dan penghapusan data berfungsi — permintaan pelanggan ditangani sesuai hukum, tanpa improvisasi." },
      { title: "Tim paham, bukan sekadar punya dokumen", desc: "Pelatihan membuat kepatuhan berjalan di operasional harian — bukan berhenti di kebijakan yang diunggah lalu dilupakan." },
    ],
    process: [
      { title: "Audit dan pemetaan data", desc: "Seluruh alur data dipetakan: titik pengumpulan, penyimpanan, pembagian, sampai penghapusan — lalu diukur terhadap seluruh kewajiban UU PDP." },
      { title: "Basis legal dan kebijakan", desc: "Basis legal ditetapkan per tujuan pemrosesan; kebijakan privasi, prosedur internal, dan mekanisme hak subjek data disusun." },
      { title: "Perjanjian dan dokumentasi", desc: "DPA disiapkan untuk vendor dan mitra; catatan pemrosesan dan dokumen pendukung lainnya dirampungkan sesuai standar akuntabilitas." },
      { title: "Pelatihan dan roadmap", desc: "Tim dilatih menjalankan prosedurnya; roadmap kepatuhan 12 bulan diserahkan — kepatuhan menjadi sistem berjalan, bukan proyek sekali jalan." },
    ],
    requirements: [
      "Profil badan usaha: NIB, akta, dan bidang usaha",
      "Daftar sistem dan platform yang menyimpan data pelanggan (CRM, aplikasi, spreadsheet — semuanya)",
      "Kebijakan privasi dan perjanjian vendor yang sudah ada (bila ada)",
      "Kontak personel yang memahami alur data harian (produk, marketing, IT)",
      "Kesediaan menjadwalkan wawancara singkat dengan pemilik keputusan data",
    ],
    faqs: [
      { q: "Apakah perusahaan kecil seperti kami juga wajib mematuhi UU PDP?", a: "Ya. UU PDP berlaku untuk semua pengendali dan pemroses data pribadi tanpa ambang skala usaha — satu pelanggan pun datanya tercakup. Yang berbeda hanya kedalaman programnya: perusahaan kecil umumnya menyelesaikan kepatuhan dasarnya dengan biaya jauh lebih ringan karena alur datanya lebih sederhana. Yang mahal bukan ukuran perusahaan, melainkan menunda sampai terjadi insiden atau teguran." },
      { q: "Berapa biaya dan berapa lama program kepatuhan PDP?", a: "Program mulai Rp 15 juta untuk perusahaan dengan alur data sederhana; kompleksitas naik mengikuti jumlah sistem, vendor, dan jenis data yang dikelola — data sensitif seperti kesehatan dan keuangan menuntut perlakuan lebih ketat. Durasinya 4–12 minggu tergantung temuan audit awal. Penawaran tertulis diberikan setelah konsultasi pemetaan, tanpa biaya siluman di tengah jalan." },
      { q: "Apa risikonya kalau kami menunggu sampai lembaga pengawas PDP beroperasi penuh?", a: "Risikonya Anda memproses semuanya di tengah tekanan: denda administratif hingga 2% pendapatan tahunan, gugatan subjek data, dan pemeriksaan yang berjalan sementara alur data Anda belum tertata. Padahal kewajiban hukumnya sudah berlaku sekarang — kontrak vendor yang bermasalah tetap bermasalah, kebocoran tetap wajib dinotifikasi dalam 3x24 jam. Perusahaan yang memulai lebih awal memperbaiki dengan tenang dan biaya terjadwal; yang menunggu memperbaiki dengan panik dan biaya penuh." },
    ],
    related: ["dpo-layanan", "kebijakan-privasi-situs", "respons-insiden-data", "tata-kelola-ai"],
  },
  {
    slug: "dpo-layanan",
    tagline: "Penjaga data pribadi Anda datang dalam bentuk langganan — kewajiban hukum yang dipikulkan orang lain.",
    heroSub:
      "Petugas Pelindungan Data bersertifikasi sebagai layanan bulanan untuk perusahaan yang wajib menunjuk DPO menurut UU PDP — kewajiban hukum dipenuhi resmi, tanpa merekrut dan menanggung satu kepala penuh waktu.",
    timeline: "Penunjukan efektif dalam 1–2 minggu; layanan berjalan bulanan",
    intro: [
      "UU PDP Pasal 53 menetapkan kewajiban yang sering terlewat: pengendali data yang memproses dalam skala besar, melakukan pemantauan perilaku subjek data secara sistematis, atau mengolah data sensitif — dan pemroses data dengan kriteria yang sama — wajib menunjuk seorang Petugas Pelindungan Data. Syaratnya bukan sekadar mencantumkan nama di dokumen: DPO harus ahli di bidangnya sesuai ketentuan Pasal 55, menjalankan fungsinya secara independen, menjadi titik kontak bagi subjek data dan regulator, serta mengawasi kepatuhan pemrosesan sehari-hari. Menunjuk orang tanpa kompetensi dan tanpa kewenangan sama artinya dengan tidak menunjuk apa-apa.",
      "Dilema yang dihadapi ribuan perusahaan: merekrut DPO internal bersertifikasi di pasar kerja Indonesia berarti berkompetisi gaji dengan industri keuangan dan teknologi besar — sementara kebutuhan perusahaan menengah belum tentu menuntut satu posisi penuh waktu. Solusi yang salah yang justru paling umum: menunjuk staf HR atau IT sebagai DPO sambilan tanpa pelatihan dan tanpa kewenangan. Saat insiden datang, orang itu tidak tahu harus berbuat apa, tidak punya jalur ke regulator, dan perusahaan tidak punya bukti penunjukan yang layak. Kedua jalur — mahal atau salah — berakhir di titik yang sama: kewajiban hukum terpenuhi di atas kertas, gagal di realita.",
      "DPO as a Service kami menjawabnya secara berbeda: seorang profesional yang paham pelindungan data ditunjuk resmi sebagai DPO perusahaan Anda dengan dokumen penunjukan yang sah. Fungsinya berjalan utuh: pengawasan pemrosesan, titik kontak subjek data dan regulator, edukasi internal, serta penilaian dampak bila diperlukan — dengan tim legal DIGIMAN di belakangnya. Anda menerima laporan kinerja berkala yang terdokumentasi, dan beban kepatuhan data berpindah dari masalah yang tidak jelas dipegang siapa menjadi layanan berjalan yang terukur dan bisa diaudit kapan saja.",
    ],
    benefits: [
      { title: "Kewajiban Pasal 53 terpenuhi", desc: "Penunjukan resmi dengan dokumen yang sah dan kompetensi yang benar — bukan sekadar nama yang tertulis di kebijakan." },
      { title: "Biaya jauh di bawah rekrutmen", desc: "Langganan bulanan mulai Rp 5 juta — di bawah gaji DPO internal bersertifikasi, belum menghitung biaya rekrutmen dan risiko salah pilih." },
      { title: "Subjek data dan regulator terlayani", desc: "Titik kontak resmi berfungsi: permintaan data, keberatan, dan komunikasi dengan lembaga pengawas ditangani secara prosedural." },
      { title: "Insiden tidak menunggu orang", desc: "Saat kebocoran terjadi, protokol dan tim siap menjalankannya — bukan improvisasi panik di tengah malam." },
      { title: "Kepatuhan jadi laporan, bukan tebakan", desc: "Laporan kinerja DPO berkala menjadi bukti kepatuhan yang terdokumentasi — siap dipertunjukkan saat diuji." },
    ],
    process: [
      { title: "Asesmen kewajiban dan penunjukan", desc: "Kriteria Pasal 53 diuji terhadap profil data Anda; surat penunjukan DPO disusun dan diumumkan secara resmi di organisasi." },
      { title: "Inventarisasi dan pengawasan awal", desc: "Alur data dipetakan dan risiko diinventarisasi — prioritas pengawasan disusun dalam 30 hari pertama." },
      { title: "Fungsi DPO berjalan", desc: "Titik kontak subjek data aktif, review pemrosesan dan vendor berjalan berkala, edukasi internal dijadwalkan." },
      { title: "Laporan dan penyempurnaan", desc: "Laporan kinerja berkala diserahkan; rekomendasi perbaikan menjadi agenda kerja bulan berikutnya — pengawasan yang hidup, bukan formalitas." },
    ],
    requirements: [
      "Profil badan usaha dan deskripsi singkat alur data",
      "Daftar sistem atau platform utama yang memproses data",
      "Kontak personel internal (IT atau operasional) sebagai mitra kerja DPO",
      "Kebijakan privasi dan dokumen PDP yang sudah ada (bila ada)",
      "Kepastian anggaran langganan bulanan — penawaran tertulis disepakati sebelum mulai",
    ],
    faqs: [
      { q: "Apakah perusahaan kami wajib menunjuk DPO?", a: "Cek tiga kriteria Pasal 53 UU PDP: pemrosesan dalam skala besar, pemantauan perilaku subjek data secara sistematis seperti tracking dan profiling, atau pemrosesan data sensitif seperti kesehatan, keuangan, dan biometrik. Pengendali atau pemroses yang menjalankan salah satu kriteria wajib menunjuk DPO. Platform e-commerce besar, aplikasi dengan basis pengguna masif, klinik dan rumah sakit, fintech — hampir selalu terkena. Konsultasi gratis kami menilai posisi Anda dalam satu sesi." },
      { q: "Berapa biaya DPOaaS dibanding merekrut DPO sendiri?", a: "Layanan mulai Rp 5 juta per bulan — di bawah separuh gaji DPO internal bersertifikasi di pasar kerja saat ini, belum termasuk biaya rekrutmen, sertifikasi, dan risiko salah rekrut. Untuk perusahaan menengah yang kewajibannya jelas tetapi kebutuhannya belum penuh waktu, model langganan biasanya paling efisien. Untuk korporasi dengan volume pemrosesan sangat besar, kami akan jujur menyarankan jalur internal — dan membantu menyiapkannya." },
      { q: "Apakah menunjuk DPO eksternal membebaskan perusahaan dari tanggung jawab hukum?", a: "Tidak — dan penting dipahami sejak awal: tanggung jawab atas pemrosesan data tetap berada di tangan pengendali data. Yang Anda peroleh adalah pemenuhan kewajiban penunjukan dengan kompetensi yang benar, pengawasan yang benar-benar berjalan, dan dokumentasi yang membuktikan kewajaran usaha perusahaan. Justru dengan DPO yang berfungsi nyata, posisi hukum Anda saat insiden jauh lebih kuat daripada menunjuk nama tanpa fungsi apa pun." },
    ],
    related: ["kepatuhan-uu-pdp", "respons-insiden-data", "kebijakan-privasi-situs", "audit-siber"],
  },
  {
    slug: "pse-komdigi",
    tagline: "Website dan aplikasi Anda bisa diblokir besok pagi — kecuali hari ini sudah terdaftar PSE.",
    heroSub:
      "Registrasi Penyelenggara Sistem Elektronik (PSE) ke Komdigi untuk website, aplikasi, dan platform Anda — syarat legal beroperasi di ranah digital Indonesia dan penghalang terakhir sebelum tombol pemblokiran ditekan.",
    timeline: "1–3 minggu tergantung kelengkapan dokumen",
    intro: [
      "Hukumnya sederhana dan tanpa celah: PP No. 71 Tahun 2019 menyatakan setiap penyelenggara sistem elektronik wajib terdaftar, dan Permenkomdigi No. 5 Tahun 2024 — pengganti Permenkominfo 5/2020 — menetapkan teknisnya untuk PSE Privat maupun PSE Publik. Yang sering mengejutkan orang adalah luas ruang lingkupnya: website company profile yang punya pendaftaran pengguna, toko daring, aplikasi dengan login eksternal, SaaS, game — semuanya termasuk penyelenggara sistem elektronik. Preseden 2022 tercatat jelas: Komdigi (saat itu Kominfo) memblokir akses sejumlah platform global yang menolak mendaftar — PayPal, Steam, Yahoo, dan lainnya — sampai mereka akhirnya menyerah dan mendaftar. Aturan ini tidak melihat ukuran, dan tidak memberi pengecualian untuk yang kecil.",
      "Risikonya berjenjang dari teguran, denda, sampai pemblokiran akses — dan untuk pelanggaran tertentu, jerat pidana UU ITE tetap terbuka. Kesalahan yang paling umum: perusahaan mengira tidak terkena karena asumsi kami hanya punya website; mendaftar dengan jenis PSE dan data sistem yang salah sehingga dokumen tidak mencerminkan realitas — masalah tersendiri saat perubahan atau pemeriksaan; atau mendaftar sekali lalu melepas fitur baru tanpa memperbarui registrasi. Perbedaan PSE Publik dan Privat juga menentukan kewajiban lanjutan Anda — termasuk kewajiban pelindungan data dan pelaporan — sehingga salah klasifikasi di awal membuat seluruh bangunan kepatuhan dibangun miring.",
      "Kami menangani registrasi dari titik paling awal: analisis sistem Anda — fitur, cara akses, monetisasi, dan data yang diproses — untuk menetapkan jenis PSE yang benar. Seluruh dokumen persyaratan kami siapkan mulai dari informasi teknis sistem sampai kebijakan yang disyaratkan, lalu diajukan di sistem PSE Komdigi dengan penanganan koreksi bila ada temuan. Prosesnya selesai di bukti terdaftar resmi di tangan Anda. Untuk perusahaan dengan banyak properti digital, kami memetakan semuanya dalam satu audit kecil — agar tidak ada aset digital yang beroperasi tanpa registrasi tanpa Anda sadari.",
    ],
    benefits: [
      { title: "Pemblokiran bukan lagi risiko", desc: "Registrasi resmi mengunci status legal sistem elektronik Anda — platform tidak lagi berada di daftar tunggu pemblokiran." },
      { title: "Jenis PSE yang benar sejak awal", desc: "Analisis PSE Publik atau Privat dilakukan sebelum pengajuan — kewajiban lanjutan Anda tidak salah sejak hari pertama." },
      { title: "Dokumen mencerminkan sistem nyata", desc: "Data sistem, fitur, dan kebijakan yang didaftarkan akurat — aman saat perubahan fitur maupun saat diperiksa." },
      { title: "Semua properti digital terpetakan", desc: "Website, aplikasi, subdomain, sistem internal — tidak ada aset digital yang terlewat dari registrasi tanpa Anda sadari." },
      { title: "Syarat bisnis lain terbuka", desc: "Kemitraan platform, iklan, dan pendanaan kini banyak yang meminta bukti registrasi PSE — dokumen Anda siap duluan." },
    ],
    process: [
      { title: "Klasifikasi dan pemetaan sistem", desc: "Fitur, cara akses, dan data yang diproses dianalisis — jenis PSE dan cakupan registrasi ditetapkan dengan benar." },
      { title: "Penyiapan dokumen", desc: "Informasi teknis sistem, kebijakan yang disyaratkan, dan dokumen badan usaha dirampungkan sesuai format Komdigi." },
      { title: "Pengajuan dan koreksi", desc: "Registrasi diajukan di sistem PSE; koreksi bila ada temuan kami tangani sampai terbit — tanpa Anda perlu belajar antarmukanya." },
      { title: "Bukti dan pemeliharaan", desc: "Bukti terdaftar diserahkan plus panduan kewajiban berkelanjutan: perubahan fitur, pembaruan data, dan kewajiban pelaporan bila ada." },
    ],
    requirements: [
      "NIB dan dokumen badan usaha yang aktif",
      "Daftar domain, aplikasi, dan properti digital yang akan didaftarkan",
      "Deskripsi fitur utama sistem (login, transaksi, iklan, penyimpanan data — apa saja yang ada)",
      "Kebijakan privasi dan syarat layanan yang berlaku di sistem — kami bantu bila belum ada",
      "Kontak teknis yang memegang akses domain atau server",
    ],
    faqs: [
      { q: "Website kami hanya company profile — apakah benar wajib registrasi PSE?", a: "Jika situs benar-benar statis tanpa fitur apa pun, mungkin saja berada di luar cakupan. Tetapi begitu ada pendaftaran pengguna, formulir yang disimpan, newsletter, login, atau proses apa pun yang menyentuh pengguna — sistem elektronik Anda sudah dihitung penyelenggara menurut PP 71/2019 dan Permenkomdigi 5/2024, yang tidak membedakan skala. Konsultasi singkat menentukan posisi Anda — dan bila memang wajib, prosesnya cepat dan biayanya ringan dibanding risiko pemblokiran." },
      { q: "Berapa biaya dan berapa lama proses registrasi PSE?", a: "Jasa kami mulai Rp 3,5 juta untuk satu properti digital dengan skop standar, umumnya selesai 1–3 minggu tergantung kelengkapan dokumen dan kemungkinan koreksi di sistem. Biaya resmi registrasinya sendiri tidak berat; yang menentukan adalah penyiapan dokumen teknis dan kebijakan yang disyaratkan — bila situs Anda belum punya kebijakan privasi, itu pun kami tangani dalam satu paket." },
      { q: "Apa risikonya kalau sistem kami tidak terdaftar?", a: "Sanksi berjenjang: teguran, denda, dan pemblokiran akses dari sisi penyelenggara jaringan — dengan jerat pidana UU ITE yang tetap terbuka untuk pelanggaran tertentu. Preseden 2022 membuktikan Komdigi tidak ragu memblokir platform besar yang menolak mendaftar; platform kecil justru lebih rentan karena tidak punya daya tawar saat diblokir. Selain itu, mitra bisnis, platform iklan, dan investor kini sering meminta bukti registrasi PSE dalam due diligence — ketiadaan dokumen ini menahan kesepakatan lebih sering daripada pemblokirannya sendiri." },
    ],
    related: ["website-ecommerce", "aplikasi-sistem", "kepatuhan-uu-pdp", "otomasi-ai"],
  },
  {
    slug: "audit-siber",
    tagline: "Celah keamanan paling mahal adalah yang ditemukan orang lain lebih dulu.",
    heroSub:
      "Audit keamanan siber yang praktis dan bisa dieksekusi: kelemahan infrastruktur, aplikasi, dan prosedur Anda dipetakan dengan peta perbaikan berprioritas — bukan laporan tebal yang berakhir menganggur di folder.",
    timeline: "2–4 minggu per siklus audit",
    intro: [
      "Kebocoran data di Indonesia bukan lagi statistik jauh — dan setiap kebocoran membawa tiga lapis kerugian sekaligus: finansial (pemulihan, downtime, tebusan), reputasi (pelanggan yang pergi dan tidak kembali), dan hukum (UU PDP menuntut notifikasi dalam 3x24 jam serta kewajiban menjaga keamanan pemrosesan, dengan denda administratif yang mengintai). PP 71/2019 menuntut setiap penyelenggara sistem elektronik menjaga keamanannya, dan Perpres No. 47 Tahun 2023 menempatkan keamanan sistem elektronik nasional di bawah koordinasi BSSN. Satu-satunya cara membuktikan sistem Anda layak disebut aman adalah mengujinya sendiri — sebelum pihak lain mengujinya untuk Anda, dengan cara yang tidak menyenangkan.",
      "Kesalahan yang paling sering: perusahaan mengira keamanan sama dengan membeli software — antivirus, firewall, backup. Padahal mayoritas insiden lahir dari hal yang tidak dijual software mana pun: hak akses yang terlalu longgar, kata sandi yang dipakai berulang, server yang tidak pernah di-patch, backup yang ternyata tidak pernah berhasil diuji restore, dan karyawan yang tidak bisa membedakan email phishing dari email bos. Kesalahan kedua sama merugikan: audit yang menghasilkan laporan ratusan halaman tanpa prioritas — tim tidak tahu mulai dari mana, anggaran tidak tahu dialokasikan ke mana, dan enam bulan kemudian tidak ada satu pun yang berubah.",
      "Audit kami dirancang untuk dieksekusi. Penilaian infrastruktur dan aplikasinya mencakup konfigurasi server, jaringan, hak akses, patch, backup, kebijakan kata sandi, sampai kesadaran staf; setiap temuan diperingkat berdasarkan risiko nyata dan perkiraan biaya perbaikannya. Lalu peta jalan perbaikan disusun dari yang paling murah dan paling berbahaya ke yang paling mahal dan bisa menunggu. Untuk perusahaan yang mengejar sertifikasi, hasil audit menjadi fondasi kesiapan ISO/IEC 27001 — satu pekerjaan, dua tujuan, dan seluruh temuan tersimpan dalam format yang bisa dipertunjukkan ke auditor, bank, maupun mitra enterprise.",
    ],
    benefits: [
      { title: "Celah ditutup sebelum dieksploitasi", desc: "Kelemahan ditemukan dan diprioritaskan oleh Anda — bukan oleh pihak yang menemukannya dengan niat buruk." },
      { title: "Peta perbaikan yang bisa dieksekusi", desc: "Setiap temuan berperingkat risiko dan biaya — tim teknis tahu persis mulai dari mana dan anggaran tahu harus menyediakan berapa." },
      { title: "Kewajiban keamanan terbukti", desc: "Dokumen audit dan tindak lanjutnya menjadi bukti kewajaran usaha menjaga data — penting saat insiden maupun pemeriksaan." },
      { title: "Backup yang benar-benar berfungsi", desc: "Restore diuji nyata, bukan diasumsikan — data Anda aman di atas kertas dan di realita." },
      { title: "Fondasi menuju ISO 27001", desc: "Hasil audit menjadi peta awal sertifikasi — bila nanti bisnis menuntut kredibilitas keamanan yang formal." },
    ],
    process: [
      { title: "Pemetaan aset dan ruang lingkup", desc: "Sistem, server, aplikasi, dan hak akses diinventarisasi — area dengan risiko terbesar diidentifikasi sejak awal." },
      { title: "Assessment teknis", desc: "Konfigurasi, hak akses, patch, backup, dan prosedur diuji lapis demi lapis — temuan terkumpul dari seluruh permukaan." },
      { title: "Prioritisasi temuan", desc: "Temuan diperingkat berdasarkan dampak dan biaya — peta perbaikan disusun dari yang paling mendesak." },
      { title: "Serahan dan retest", desc: "Laporan utuh diserahkan plus sesi penjelasan untuk tim teknis; retest dijadwalkan untuk memastikan perbaikan benar-benar berjalan." },
    ],
    requirements: [
      "Daftar aset digital: server, domain, aplikasi, dan layanan cloud yang dipakai",
      "Akses atau pendampingan tim IT (bila ada)",
      "Dokumen kebijakan IT atau keamanan yang sudah ada (bila ada)",
      "Riwayat insiden atau kecurigaan keamanan (bila ada)",
      "Kesediaan mengeksekusi perbaikan prioritas — audit tanpa tindak lanjut hanya menggeser risiko",
    ],
    faqs: [
      { q: "Apakah audit ini meliputi penetration testing?", a: "Audit kami mencakup penilaian konfigurasi, hak akses, patch, backup, dan prosedur — cakupan yang menutup mayoritas akar insiden nyata. Penetration testing penuh (uji eksploitasi aktif) tersedia sebagai fase lanjutan untuk sistem tertentu bila temuan awal menunjukkan kebutuhan itu. Pendekatan bertahap ini menjaga biaya tetap terkendali; untuk sebagian besar perusahaan menengah, fase pertama sudah mengubah kondisi keamanan secara drastis." },
      { q: "Berapa biaya audit keamanan siber?", a: "Mulai Rp 12 juta untuk ruang lingkup perusahaan menengah dengan aset digital standar; biayanya naik mengikuti jumlah sistem dan kedalaman pengujian — semuanya tertulis di penawaran. Bandingkan dengan biaya satu kebocoran: pemulihan, downtime, notifikasi wajib, denda administratif, dan pelanggan yang pergi. Satu insiden biasanya melampaui biaya audit berkala bertahun-tahun." },
      { q: "Sistem kami kecil — apakah masih layak diaudit?", a: "Justru sistem kecil yang paling sering menjadi target karena diasumsikan tidak dijaga — serangan otomatis tidak melihat ukuran perusahaan. Audit untuk skop kecil berjalan lebih cepat dengan biaya lebih ringan, dan temuannya biasanya paling bertindak: hak akses, kata sandi, backup, patch. Ukuran yang kecil bukan alasan untuk tidak diaudit — itu alasan untuk diaudit sekarang, sebelum pertumbuhan membuat semuanya lebih rumit." },
    ],
    related: ["respons-insiden-data", "kepatuhan-uu-pdp", "bisnis-kontinuitas-bcp", "iso"],
  },
  {
    slug: "respons-insiden-data",
    tagline: "Saat data bocor, jam-jam pertama menentukan sisa hidup reputasi Anda.",
    heroSub:
      "Retainer respons insiden 72 jam: protokol penanganan, notifikasi regulator dan subjek data, forensik awal, dan komunikasi publik berjalan sesuai naskah — bukan improvisasi panik di jam-jam tergelap perusahaan Anda.",
    timeline: "Penyiapan retainer 1–2 minggu; respons aktif mulai jam pertama insiden",
    intro: [
      "UU PDP menetapkan tenggat yang tidak mengenal kompromi: saat terjadi kegagalan pelindungan data pribadi, pengendali wajib menyampaikan notifikasi dalam 3x24 jam kepada subjek data dan lembaga — secara tertulis atau elektronik, dengan isi yang jelas: data apa yang terdampak, bagaimana cara terjadinya, dan langkah penanganannya. Kegagalan notifikasi adalah pelanggaran tersendiri dengan sanksi administratifnya — terpisah dari insiden aslinya. Praktisnya, perusahaan tanpa protokol menghabiskan 3x24 jam pertama untuk mencari tahu siapa harus menghubungi siapa dan data mana yang sebenarnya bocor — dan tenggatnya lewat persis di tengah kebingungan itu.",
      "Insiden tanpa protokol selalu berjalan dengan pola yang sama dan bisa diprediksi: tim IT menemukan anomali tetapi tidak tahu kapan harus menaikkan ke manajemen, manajemen ragu mengumumkan karena takut reputasi, dan rumor berjalan lebih dulu di media sosial. Pernyataan pertama yang keluar kemudian bertentangan dengan fakta forensik. Saat notifikasi akhirnya tersusun, isinya tidak konsisten dengan apa yang sudah dikatakan staf ke pelanggan. Setiap kesalahan itu adalah luka kedua di atas luka pertama — dan semuanya bisa dicegah dengan satu dokumen protokol yang ditulis saat tidak ada insiden apa pun yang sedang terjadi.",
      "Layanan ini menyiapkan semuanya sebelum insiden. Protokol penanganan berjenjangnya menetapkan siapa memutuskan apa dalam jam keberapa, lengkap dengan template notifikasi ke subjek data dan lembaga pengawas. Alur forensik awal menyiapkan pengawetan bukti sekaligus pembatasan kerusakan, ditambah naskah komunikasi untuk pelanggan, media, dan karyawan. Jalur eskalasi ke tim kami tersedia langsung saat insiden terjadi. Retainer bermakna di sini: kecepatan respons Anda tidak lagi ditentukan oleh seberapa cepat Anda menemukan konsultan — di tengah krisis, saat semua pilihan sudah buruk.",
    ],
    benefits: [
      { title: "Tenggat 3x24 jam terkejar", desc: "Notifikasi tersusun dari template yang sudah disiapkan — kewajiban hukum dipenuhi bahkan di hari paling kacau." },
      { title: "Keputusan tidak menunggu rapat panik", desc: "Protokol berjenjang menetapkan siapa memutuskan apa dan kapan — keraguan digantikan naskah yang sudah disepakati." },
      { title: "Bukti terawat, kerusakan terkendali", desc: "Forensik awal dijalankan dengan benar — penyebab insiden teridentifikasi tanpa menghancurkan jejak yang dibutuhkan." },
      { title: "Narasi Anda lebih dulu dari rumor", desc: "Komunikasi pelanggan, media, dan karyawan berjalan dari naskah yang konsisten — bukan pernyataan yang dicoret-coret saat krisis." },
      { title: "Posisi hukum lebih kuat", desc: "Protokol dan notifikasi tepat waktu menjadi bukti kewajaran usaha — sanksi administratif jauh lebih mudah dilawan." },
    ],
    process: [
      { title: "Penyiapan protokol", desc: "Alur data dan risiko dipetakan; protokol penanganan berjenjang, template notifikasi, dan naskah komunikasi disusun lengkap." },
      { title: "Simulasi dan penyelarasan tim", desc: "Tim inti melewati simulasi ringkas — semua pihak tahu perannya sebelum perannya benar-benar dibutuhkan." },
      { title: "Aktivasi saat insiden", desc: "Satu panggilan mengaktifkan tim: forensik awal, pembatasan kerusakan, dan penyusunan notifikasi berjalan paralel." },
      { title: "Purna-insiden dan perbaikan", desc: "Laporan purna-insiden, perbaikan akar masalah, dan pembaruan protokol — insiden yang sama tidak diberi kesempatan terulang." },
    ],
    requirements: [
      "Gambaran alur data dan sistem yang menyimpan data pribadi",
      "Kontak darurat manajemen dan tim IT",
      "Daftar vendor pihak ketiga yang menyentuh data (hosting, CRM, pembayaran)",
      "Kebijakan komunikasi yang ada (spokesperson, kanal resmi)",
      "Komitmen manajemen untuk mengikuti protokol yang disepakati",
    ],
    faqs: [
      { q: "Berapa biaya layanan ini — padahal kami belum pernah mengalami insiden?", a: "Retainer mulai Rp 7,5 juta untuk penyiapan protokol lengkap plus kesiapan respons — anggap ini asuransi, bukan biaya perbaikan. Bila insiden terjadi, aktivasi tim berjalan sesuai skema yang tertulis di perjanjian — tidak ada negosiasi harga di tengah krisis. Perbandingannya sederhana: satu insiden tanpa protokol biasanya berbiaya puluhan sampai ratusan juta, plus tenggat 3x24 jam yang terlewat dan sanksi yang mengikutinya." },
      { q: "Apa yang harus dilakukan dalam 3x24 jam pertama saat kebocoran terjadi?", a: "Menurut UU PDP: mengidentifikasi cakupan (data apa dan siapa yang terdampak), membatasi kerusakan dengan menutup celahnya, menyiapkan notifikasi ke subjek data dan lembaga pengawas, dan mendokumentasikan semua langkah sebagai bukti. Tanpa protokol, keempat hal itu biasanya saling menunggu sampai tenggat lewat. Dengan retainer, keempatnya berjalan paralel dari jam pertama — karena template, alur keputusan, dan timnya sudah ada sebelum insiden terjadi." },
      { q: "Apakah mengumumkan kebocoran tidak justru merusak reputasi?", a: "Yang merusak reputasi adalah keterlambatan dan inkonsistensi, bukan pengumumannya. Pelanggan memaafkan insiden yang ditangani cepat, jujur, dan terukur — mereka tidak memaafkan perusahaan yang menyembunyikan sampai ketahuan dari pihak ketiga. Ditambah lagi, notifikasi bukan pilihan melainkan kewajiban hukum dengan tenggat 3x24 jam; yang bisa Anda kendalikan hanyalah seberapa baik kewajiban itu dilakukan. Pengumuman yang terkelola bahkan bisa memperkuat kepercayaan." },
    ],
    related: ["kepatuhan-uu-pdp", "audit-siber", "manajemen-krisis-pr", "forensik-digital"],
  },
  {
    slug: "kepatuhan-iklan-digital",
    tagline: "Iklan yang menarik pelanggan dan iklan yang memanggil regulator — bedanya hanya beberapa kata yang salah.",
    heroSub:
      "Review kepatuhan materi iklan dan promosi digital Anda: label iklan, klaim yang terbukti, endorsement yang sah — agar tim marketing menjual seagresif apa pun tanpa menyodorkan perusahaan ke meja pemeriksa.",
    timeline: "Review awal 1–2 minggu; panduan dan review berjalan per kampanye",
    intro: [
      "Iklan digital di Indonesia diikat tiga tali yang saling terkait: UU No. 8 Tahun 1999 tentang Perlindungan Konsumen yang melarang iklan menyesatkan dan klaim tanpa bukti, UU ITE yang mengatur konten elektronik yang bersifat menyesatkan, dan ketentuan pelabelan iklan yang mengharuskan setiap promosi berbayar teridentifikasi sebagai iklan. Praktiknya kini jauh lebih rumit dari banner. Konten KOL tidak diberi label berbayar, tautan afiliasi dibungkus sebagai rekomendasi personal, klaim skincare terbukti klinis tanpa satu pun uji klinis, testimoni dikompilasi tanpa izin, dan diskon memakai harga coret yang tidak pernah benar-benar berlaku. Semuanya tampak wajar di beranda, tetapi berdiri di atas pelanggaran yang tertulis jelas di peraturan.",
      "Sanksinya datang dari dua arah sekaligus. Dari regulator: teguran, sanksi administratif, dan untuk sektor tertentu seperti kesehatan, pangan, dan keuangan, jerat yang lebih ketat lagi dari lembaga pengawas masing-masing. Dari pasar: gugatan konsumen, komplain platform, dan — yang paling cepat datang — kehilangan kredibilitas saat klaim palsu terbongkar di media sosial. Kesalahan yang paling umum bukan niat jahat, melainkan ketidaktahuan yang sistemik: tim marketing belajar praktik dari kompetitor yang kebetulan belum tertangkap, dan kampanye bertumpuk di atas klaim yang tidak pernah diverifikasi oleh siapa pun.",
      "Kami bekerja di dua lapis. Lapis pertama: review materi — iklan aktif dan rencana kampanye diperiksa, klaim ditarik ke dokumen pendukungnya, label dan disclosure disesuaikan dengan format yang benar, dan praktik endorsement serta afiliasi diluruskan. Lapis kedua: penyiapan sistem — panduan kepatuhan untuk tim marketing berisi kata yang boleh dan tidak boleh, format label yang benar, dan alur verifikasi klaim sebelum tayang. Hasilnya: tim marketing Anda tetap agresif — tetapi tidak lagi menandatangani dokumen hukum yang tidak pernah dibaca.",
    ],
    benefits: [
      { title: "Klaim yang semua bisa dibuktikan", desc: "Setiap klaim ditarik ke dokumen pendukungnya — iklan Anda bertahan saat diperiksa, bukan hanya saat di-screenshot." },
      { title: "Label iklan yang benar", desc: "Konten berbayar, afiliasi, dan endorsement teridentifikasi sesuai aturan — kepercayaan audiens ikut terjaga." },
      { title: "Risiko regulator turun drastis", desc: "Teguran, sanksi administratif, dan komplain platform menyusut karena materi diperiksa sebelum tayang, bukan setelah komplain." },
      { title: "Tim marketing punya pagar yang jelas", desc: "Panduan praktis tentang boleh, tidak boleh, dan cara aman mengatakan yang ingin dikatakan — kreativitas tidak mati, yang mati risikonya." },
      { title: "Kepatuhan jadi keunggulan kompetitif", desc: "Saat praktik abu-abu mulai diburu, merek yang bersih menang kepercayaan — kompetitor makan sanksi, Anda makan pasar." },
    ],
    process: [
      { title: "Audit materi aktif", desc: "Iklan, konten KOL, dan halaman promosi yang berjalan diperiksa — risiko tertinggi diidentifikasi lebih dulu." },
      { title: "Review dan revisi materi", desc: "Klaim diverifikasi ke dokumen pendukung; label, disclosure, dan keterangan penyangkalan disesuaikan formatnya." },
      { title: "Panduan tim marketing", desc: "Boleh dan tidak boleh, format label yang benar, dan alur verifikasi klaim sebelum tayang — dikemas praktis untuk dipakai harian." },
      { title: "Review berkala per kampanye", desc: "Materi kampanye baru diperiksa sebelum tayang — kepatuhan menjadi proses yang berjalan, bukan sekali selesai." },
    ],
    requirements: [
      "Materi iklan dan konten promosi aktif (banner, feed, video, halaman landing)",
      "Daftar KOL atau afiliator yang bekerja sama beserta bentuk kerja samanya",
      "Dokumen pendukung klaim (ujilab, sertifikat, data internal) — bila ada",
      "Informasi sektor usaha — kesehatan, pangan, dan keuangan punya aturan tambahan",
      "Kontak tim marketing untuk penyelarasan panduan",
    ],
    faqs: [
      { q: "Apakah konten KOL yang kami bayar wajib diberi label iklan?", a: "Ya — prinsipnya tegas: setiap konten yang dibayar untuk mempromosikan produk harus teridentifikasi sebagai iklan atau berbayar secara jelas dan mudah dikenali. Format kolaborasi atau rekomendasi personal tanpa keterangan berbayar adalah pelanggaran yang paling umum — dan paling mudah dibuktikan, karena kontrak pembayaran Anda sendiri sudah menjadi buktinya. Label yang benar melindungi dua pihak sekaligus: merek dan KOL — keduanya bisa tertangkap bersama saat pelanggaran terbongkar." },
      { q: "Berapa biaya dan bagaimana cara kerjanya?", a: "Mulai Rp 5 juta untuk audit materi aktif plus panduan tim; berikutnya review per kampanye dengan tarif yang disepakati di awal. Prosesnya: kirim materi dan daftar KOL, kami kembalikan laporan risiko per materi beserta revisi yang dibutuhkan, lalu panduan tim disusun agar materi berikutnya lahir dalam kondisi yang benar. Untuk perusahaan dengan volume kampanye tinggi, model retainer bulanan lebih ekonomis daripada review per dokumen." },
      { q: "Apa risiko nyata kalau kami terus berjalan seperti sekarang?", a: "Risikonya berjenjang: komplain konsumen dan koreksi dari platform, teguran administratif, sanksi atas iklan menyesatkan menurut UU Perlindungan Konsumen — dan untuk sektor teregulasi seperti kesehatan, pangan, dan keuangan, sanksi lembaga pengawasnya ditambahkan di atasnya. Yang datang paling cepat biasanya bukan regulator melainkan reputasi: satu tangkapan layar klaim palsu yang viral menghancurkan lebih banyak penjualan daripada semua iklan yang pernah Anda tayang. Biaya review kepatuhan selalu jauh di bawah biaya satu kasus." },
    ],
    related: ["kepatuhan-dagang-daring", "audit-klaim-iklan-kesehatan", "kebijakan-privasi-situs", "otomasi-ai"],
  },
  {
    slug: "tata-kelola-ai",
    tagline: "AI yang dipakai tanpa aturan hari ini adalah gugatan yang sedang disiapkan untuk besok.",
    heroSub:
      "Kerangka tata kelola dan etika AI untuk perusahaan: kebijakan penggunaan, pemetaan risiko bias dan privasi, kewenangan data latih — agar tim bergerak cepat dengan teknologi tanpa menandatangani risiko yang belum pernah dibaca.",
    timeline: "3–6 minggu tergantung luas penggunaan AI di organisasi",
    intro: [
      "AI kemungkinan besar sudah dipakai di perusahaan Anda — diperkenalkan lewat pintu samping: staf yang menempel data klien ke chatbot, tim marketing yang membuat visual dengan model generatif, layanan pelanggan yang dijawab otomatis. Surat Edaran Kominfo Nomor 9 Tahun 2023 tentang Etika Kecerdasan Artifisial menandai perubahan nada pemerintah: pengembang dan pengguna AI diminta menjalankan transparansi, akuntabilitas, netralitas, keamanan, dan perlindungan data pribadi. Sementara itu UU PDP mengikat seluruh data pribadi yang mengalir masuk dan keluar sistem AI, dan bagi perusahaan yang berjualan ke Eropa, EU AI Act menambah lapisan yang tegas — dengan kewajiban yang menembus rantai pasok digital hingga ke penyedia di negara lain.",
      "Risiko yang paling sering diabaikan bukan cerita fiksi tentang AI yang memberontak, melainkan hal yang jauh lebih sederhana: data pelanggan yang ditempel ke layanan pihak ketiga berarti pemrosesan data tanpa basis legal yang jelas — pelanggaran UU PDP yang sederhana dan mudah dibuktikan. Lanjutannya sama mahalnya: output AI yang dipublikasi tanpa verifikasi berujung klaim menyesatkan, visual generatif yang menyerupai karya berhak cipta memicu sengketa, model yang diskriminatif pada calon pegawai atau calon debitur membuka gugatan, dan status hak cipta atas karya AI masih menjadi kebingungan bersama. Perusahaan tanpa kebijakan AI menjawab semuanya dengan tidak tahu — dan tidak tahu bukan pertahanan yang diterima di meja hukum.",
      "Kami menyusun tata kelolanya secara pragmatis. Pemetaannya mencakup di mana AI benar-benar dipakai di organisasi — yang resmi maupun yang bersembunyi. Kebijakan penggunaannya menetapkan data apa yang boleh masuk ke layanan mana, siapa yang berhak, dan bagaimana output diverifikasi. Penilaian risiko per kasus penggunaan menyusul pada dimensi privasi, bias, hak cipta, dan ketelitian, ditambah klausul kemitraan untuk vendor AI utama serta panduan tim yang bisa dibaca manusia — bukan dokumen tata kelola yang hanya layak dibingkai. Hasilnya: inovasi tetap berjalan, dan setiap inovasi membawa pengelolaan risikonya sendiri.",
    ],
    benefits: [
      { title: "Data tidak bocor lewat pintu samping", desc: "Kebijakan menetapkan data apa yang boleh disentuhkan ke layanan AI mana — kebocoran lewat chatbot berhenti hari itu." },
      { title: "Risiko dipetakan, bukan dikira-kira", desc: "Bias, privasi, hak cipta, dan ketelitian dinilai per kasus penggunaan — keputusan diambil berdasarkan risiko nyata." },
      { title: "Prinsip SE Kominfo 9/2023 terjalankan", desc: "Etika AI diterjemahkan menjadi prosedur kerja — bukan sekadar mengutip naskah edaran di laporan tahunan." },
      { title: "Kemitraan vendor AI aman", desc: "Klausul data dan tanggung jawab disiapkan untuk kontrak vendor — tanggungan hukum tidak Anda bawa sendirian." },
      { title: "Tim berinovasi dengan pagar yang jelas", desc: "Panduan praktis membuat staf berhenti menebak — kecepatan adopsi justru naik karena kepastiannya." },
    ],
    process: [
      { title: "Pemetaan penggunaan AI", desc: "Semua titik penggunaan AI diinventarisasi — termasuk yang berjalan tanpa sepengetahuan manajemen." },
      { title: "Penilaian risiko per kasus", desc: "Privasi, bias, hak cipta, dan dampak bisnis dinilai per kasus penggunaan — prioritas diurutkan dari risiko tertinggi." },
      { title: "Kebijakan dan klausul vendor", desc: "Kebijakan penggunaan AI disusun resmi plus klausul kemitraan untuk vendor AI yang paling kritikal." },
      { title: "Panduan dan sosialisasi tim", desc: "Panduan ringkas untuk seluruh staf dan pelatihan untuk tim utama — kebijakan yang dipakai, bukan yang disimpan." },
    ],
    requirements: [
      "Deskripsi operasional dan unit kerja yang menggunakan AI (resmi maupun tidak)",
      "Daftar layanan AI yang diketahui dipakai (chatbot, generator, analitik)",
      "Jenis data yang bersentuhan dengan sistem tersebut",
      "Dokumen kebijakan IT atau keamanan yang ada (bila ada)",
      "Akses wawancara singkat dengan pemilik proses bisnis utama",
    ],
    faqs: [
      { q: "Apakah Indonesia sudah punya hukum khusus tentang AI?", a: "Belum ada undang-undang AI khusus — tetapi itu bukan zona bebas hukum: data yang mengalir ke sistem AI diikat UU PDP, output yang menyesatkan diikat UU ITE dan UU Perlindungan Konsumen, karya yang disalin diikat UU Hak Cipta, dan SE Kominfo 9/2023 menetapkan prinsip etika yang menjadi acuan pemerintah. Tren dunia juga jelas: EU AI Act berlaku bertahap dan mengenai perusahaan Indonesia yang melayani pasar Eropa. Menyusun tata kelola sekarang berarti bergerak lebih dulu sebelum aturan yang lebih keras datang." },
      { q: "Berapa biaya dan apa yang kami dapatkan?", a: "Mulai Rp 10 juta untuk organisasi dengan penggunaan AI standar: pemetaan, kebijakan, penilaian risiko utama, dan panduan tim. Organisasi dengan sistem AI yang lebih dalam — model kustom, data pelanggan berskala besar, keputusan otomatis — membutuhkan kedalaman lebih dan biayanya menyesuaikan, tertulis di penawaran setelah pemetaan awal. Yang Anda terima bukan dokumen simpanan, melainkan kebijakan dan panduan yang benar-benar dipakai tim setiap hari." },
      { q: "Apakah kebijakan ini akan memperlambat tim kami dalam memakai AI?", a: "Biasanya justru sebaliknya. Tanpa kebijakan, banyak perusahaan memblokir semua AI karena tidak tahu cara mengelolanya — tim kehilangan alat produktivitas, sementara staf tetap memakainya diam-diam. Dengan kebijakan yang jelas, penggunaan yang aman disahkan cepat, penggunaan berisiko mendapat jalur persetujuan, dan yang dilarang punya alasan yang dipahami semua orang. Tata kelola yang baik mempercepat adopsi, karena kepastian menghilangkan rasa takut di kedua sisi." },
    ],
    related: ["kepatuhan-uu-pdp", "otomasi-ai", "hak-cipta-paten", "tata-kelola-korporat"],
  },
  {
    slug: "kebijakan-privasi-situs",
    tagline: "Dokumen legal yang paling sering disalin dan paling jarang dibaca — sampai menjadi bukti di meja pemeriksa.",
    heroSub:
      "Kebijakan privasi, syarat dan ketentuan, serta kebijakan cookie yang disusun dari alur data nyata situs atau aplikasi Anda — bukan template yang disalin dari situs lain dan menjanjikan hal yang tidak pernah Anda lakukan.",
    timeline: "1–2 minggu per situs atau aplikasi",
    intro: [
      "Kebijakan privasi bukan formalitas dekoratif: UU PDP mewajibkan pengendali data memberi informasi yang jelas tentang tujuan pemrosesan, hak subjek data, dan cara menjalankan hak tersebut; UU ITE dan PP 71/2019 menambahkan kewajiban keterbukaan bagi penyelenggara sistem elektronik. Artinya, kebijakan privasi yang Anda pasang adalah pernyataan hukum yang mengikat. Ketika isinya tidak cocok dengan praktik Anda — misalnya menjanjikan data tidak dibagikan ke pihak ketiga padahal pixel iklan berjalan, atau menyebut retensi selama diperlukan tanpa batas yang jelas — dokumen itu berubah dari perisai menjadi bukti pelanggaran yang rapi.",
      "Masalah terbesarnya: dokumen template. Ribuan situs Indonesia memakai kebijakan privasi hasil salin-tempel — lengkap dengan referensi hukum negara lain, nama perusahaan yang lupa diganti, dan janji yang tidak mencerminkan sistemnya sama sekali. Lapisannya bertambah di atasnya: cookie dan teknologi pelacakan seperti analytics, pixel iklan, dan chatbot yang tidak diungkapkan; banner consent yang tombol menolaknya sengaja disembunyikan; syarat dan ketentuan hasil terjemahan mentah yang tidak bisa dijalankan di pengadilan Indonesia; dan halaman pendaftaran yang mengumpulkan data tanpa dokumen apa pun. Saat komplain datang, semua lapisan ini diperiksa sekaligus — dan setiap celahnya saling menguatkan.",
      "Cara kerja kami kebalikan template: alur data situs atau aplikasi Anda diperiksa lebih dulu — data apa yang dikumpulkan, oleh teknologi apa, dikirim ke layanan mana, dan disimpan berapa lama — lalu kebijakan privasi disusun yang benar-benar mencerminkan peta itu, dengan bahasa yang bisa dipahami manusia, hak subjek data yang operasional, dan dasar hukum Indonesia yang benar. Syarat dan ketentuan, kebijakan cookie, serta banner consent menyusul dengan logika yang sama. Untuk layanan yang harganya kecil ini, dampaknya besar: dokumen yang berdiri sendiri saat dibaca pengguna, regulator, maupun pengadilan.",
    ],
    benefits: [
      { title: "Mencerminkan praktik nyata", desc: "Kebijakan disusun dari alur data Anda yang diperiksa lebih dulu — tidak ada janji yang tidak bisa dipenuhi." },
      { title: "Dasar hukum Indonesia yang benar", desc: "UU PDP dan UU ITE diacunya dengan benar — bukan referensi hukum negara lain yang disalin mentah." },
      { title: "Cookie dan pelacak terungkap", desc: "Analytics, pixel iklan, dan chatbot diungkapkan sesuai kewajiban — celah komplain yang paling umum tertutup." },
      { title: "Persetujuan yang sah dan adil", desc: "Banner consent dengan opsi menolak yang setara — persetujuan yang sah secara hukum sekaligus etis." },
      { title: "Menopang bisnis lanjutan", desc: "Registrasi PSE, kemitraan platform, dan due diligence selalu meminta dokumen ini — Anda tinggal menyerahkan." },
    ],
    process: [
      { title: "Review alur data", desc: "Situs atau aplikasi diperiksa: formulir, cookie, pixel, layanan pihak ketiga — peta data aktual tersusun." },
      { title: "Penyusunan dokumen", desc: "Kebijakan privasi, syarat dan ketentuan, dan kebijakan cookie disusun dari peta nyata — bahasa jelas, dasar hukum benar." },
      { title: "Penyempurnaan persetujuan", desc: "Banner consent dan titik persetujuan disesuaikan — opsi menolak setara dengan opsi menerima." },
      { title: "Serahan dan panduan pemeliharaan", desc: "Dokumen final diserahkan plus panduan singkat: kapan dokumen harus diperbarui ketika fitur berubah." },
    ],
    requirements: [
      "URL situs atau aplikasi beserta akses ke halaman-halamannya",
      "Daftar layanan pihak ketiga yang dipakai (analytics, iklan, chat, pembayaran — semuanya)",
      "Data usaha: nama badan usaha dan kontak resmi",
      "Jenis layanan dan transaksi yang berjalan di situs (bila ada)",
      "Dokumen kebijakan lama (bila ada — untuk perbandingan)",
    ],
    faqs: [
      { q: "Berapa biaya penyiapan kebijakan privasi dan syarat layanan?", a: "Mulai Rp 2,5 juta untuk satu situs atau aplikasi dengan alur data standar — mencakup review alur data, kebijakan privasi, syarat dan ketentuan, kebijakan cookie, serta penyesuaian banner consent. Aplikasi dengan alur data kompleks seperti pembayaran, data kesehatan, atau tracking intensif membutuhkan pekerjaan lebih dan biayanya menyesuaikan, ditawarkan tertulis setelah review awal. Jauh lebih murah daripada satu kasus komplain atau registrasi PSE yang tertahan." },
      { q: "Saya sudah punya kebijakan privasi dari template gratis — apa kurangnya?", a: "Template punya satu kelemahan struktural: ia tidak tahu sistem Anda. Umumnya ia menjanjikan hal yang tidak Anda lakukan — dan itu pelanggaran — serta melewatkan teknologi yang benar-benar Anda pakai seperti pixel iklan dan chatbot, sambil mengacu hukum negara lain yang tidak relevan. Dokumen seperti itu bukan netral; isinya bisa diuji langsung terhadap sistem Anda dan berubah menjadi bukti. Review ulang kami memutuskan apakah cukup direvisi, harus ditulis ulang, atau memang sudah layak." },
      { q: "Apakah dokumen ini benar-benar mengikat secara hukum di Indonesia?", a: "Ya — kebijakan privasi dan syarat dan ketentuan yang ditampilkan di situs adalah bagian perjanjian elektronik yang diakui UU ITE dan diikat kewajibannya oleh UU PDP. Justru karena mengikat, kualitasnya menentukan: syarat dan ketentuan yang baik membatasi tanggung jawab Anda secara sah, mengatur mekanisme sengketa, dan melindungi aset; yang buruk justru membuat klaim Anda tidak bisa dilaksanakan. Dokumen yang benar adalah aset hukum, bukan formalitas." },
    ],
    related: ["kepatuhan-uu-pdp", "pse-komdigi", "website-ecommerce", "kepatuhan-dagang-daring"],
  },
  {
    slug: "kepatuhan-fintech-ojk",
    tagline: "Di sektor yang paling padat regulasi, kepatuhan bukan biaya — dia syarat untuk tetap hidup.",
    heroSub:
      "Kerangka kepatuhan OJK bagi fintech dan layanan keuangan digital: model bisnis dipetakan ke lisensi yang benar, dokumen POJK dipenuhi, pelaporan berjalan rutin — sebelum sanksi memilih jalannya masuk.",
    timeline: "6–16 minggu tergantung model usaha dan kesiapan dokumen",
    intro: [
      "Fintech adalah sektor dengan kepadatan regulasi tertinggi di Indonesia — dan itu bukan kebetulan, karena Anda mengelola uang orang lain. UU No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan (P2SK) mengukuhkan kerangka pengawasan sektor keuangan digital; POJK 10/2022 mengatur platform pendanaan gabungan berbasis teknologi informasi (LPBBTI) dengan ketentuan rinci tentang modal, struktur pemegang saham, tata kelola, dan pelaporan; model lain seperti dompet digital, layanan pembayaran, dan asuransi digital masing-masing punya jalur perizinan dan pengawasnya sendiri antara OJK dan Bank Indonesia. Model bisnis Anda menentukan lisensinya — dan memilih model lebih dulu baru mencari lisensinya adalah urutan yang salah yang paling mahal harganya.",
      "Kesalahan klasik pertama: beroperasi lebih dulu dengan alasan pendaftaran sedang diproses — padahal sejak UU P2SK, layanan keuangan tanpa izin bukan lagi zona abu-abu: penghentian kegiatan, kewajiban mengembalikan dana pengguna, dan tanggung jawab pidana terbuka untuk kasus tertentu. Kesalahan kedua sama mahal: punya izin tetapi tumbuh keluar dari batasnya — produk baru yang sebenarnya butuh izin lain, pemegang saham baru yang tidak melewati uji kelayakan, pelaporan yang terlambat satu periode lalu dua periode. Sanksi administratif OJK berjenjang dari teguran sampai pencabutan izin — dan pencabutan izin di sektor ini artinya akhir dari bisnis itu sendiri.",
      "Kami membantu dari dua titik jalur. Untuk yang baru memulai: pemetaan model bisnis ke kewajiban lisensi yang benar, penyiapan dokumen perizinan, kesiapan tata kelola yang akan diuji, dan urutan langkah yang realistis — termasuk saran yang jujur bila model Anda lebih baik dijalankan di bawah payung mitra yang sudah berizin. Untuk yang sudah beroperasi: gap audit terhadap POJK yang berlaku, perbaikan dokumen dan proses, disiplin pelaporan berkala, dan pemantauan perubahan regulasi yang di sektor ini berubah cepat — karena kepatuhan fintech bukan proyek yang selesai, melainkan sistem yang harus tetap hidup.",
    ],
    benefits: [
      { title: "Model bisnis dan lisensi selaras", desc: "Pemetaan model ke izin yang benar sejak awal — operasi tidak berdiri di atas kertas yang salah." },
      { title: "Zona abu-abu ditutup", desc: "Aktivitas yang butuh izin diidentifikasi sebelum penghentian kegiatan yang datang menghentikannya." },
      { title: "Pelaporan tidak pernah terlambat", desc: "Kalender pelaporan OJK dikelola — sanksi yang lahir dari kelalaian administratif hilang dari daftar risiko." },
      { title: "Due diligence investor lebih mulus", desc: "Kepatuhan yang terdokumentasi mempercepat pendanaan — investor sektor keuangan memeriksa lebih dalam dari yang Anda kira." },
      { title: "Regulasi berubah, Anda tahu lebih dulu", desc: "Pemantauan POJK dan kebijakan pengawas menjadi bagian layanan — keputusan strategis diambil dengan data terbaru." },
    ],
    process: [
      { title: "Pemetaan model dan kewajiban", desc: "Model bisnis dipetakan ke regulasi yang berlaku — lisensi, batasan, dan urutan kewajiban ditetapkan." },
      { title: "Gap audit dan perbaikan dokumen", desc: "Kondisi saat ini diuji terhadap POJK — setiap gap disusun dengan prioritas perbaikannya." },
      { title: "Penyiapan dan pengajuan", desc: "Dokumen perizinan atau laporan disiapkan dan diajukan — komunikasi dengan pengawas didampingi penuh." },
      { title: "Pelaporan dan pemantauan berkelanjutan", desc: "Kalender kepatuhan berjalan; perubahan regulasi dipantau dan diterjemahkan menjadi tindakan konkret." },
    ],
    requirements: [
      "Dokumen badan usaha dan struktur pemegang saham",
      "Deskripsi model bisnis dan produk (alur dana, layanan, monetisasi)",
      "Dokumen perizinan atau pendaftaran yang sudah ada (bila ada)",
      "Data pengguna dan volume transaksi (bila sudah beroperasi)",
      "Dokumentasi tata kelola dan sistem IT (bila ada)",
    ],
    faqs: [
      { q: "Apakah model fintech kami butuh izin OJK, BI, atau lembaga lain?", a: "Itu ditentukan oleh karakter uang di model Anda: platform pendanaan gabungan masuk ranah OJK melalui POJK 10/2022, layanan pembayaran dan dompet digital menyentuh ranah Bank Indonesia, sementara kombinasi model bisa berarti dua pengawas sekaligus. Pemetaan ini persis pekerjaan pertama yang kami lakukan — karena salah menilai pengawas berarti seluruh jalur perizinan dibangun di atas fondasi yang salah, dan semua biaya di atasnya terbuang." },
      { q: "Berapa biaya dan berapa lama proses kepatuhan fintech?", a: "Pemetaan model dan gap audit mulai Rp 15 juta; penyiapan perizinan penuh dan program kepatuhan menyesuaikan kompleksitas model — di sektor ini tidak ada jalan pintas yang jujur, dan penawaran kami selalu terperinci per pos. Durasinya 6–16 minggu untuk kesiapan dokumen, sementara waktu proses di pengawas ditentukan antrean dan prosedur mereka. Yang bisa kami jamin: dokumen Anda lahir benar dan tidak kembali berulang karena kesalahan yang seharusnya bisa dicegah." },
      { q: "Saat ini kami beroperasi tanpa izin — apakah masih bisa dibenahi?", a: "Bisa, dan urutan tindakannya menentukan segalanya. Opsi yang biasanya tersedia: menghentikan sementara aktivitas yang butuh izin selama proses berjalan, menjalankan model di bawah kemitraan dengan entitas yang sudah berizin, atau merestrukturisasi model agar aktivitas teregulasi minimal sampai izin terbit. Yang tidak tersedia adalah terus beroperasi sambil berharap — UU P2SK telah menutup zona abu-abu itu, dan penghentian kegiatan biasanya datang lebih cepat daripada izin yang ditunggu. Semakin cepat pemetaan dilakukan, semakin banyak pilihan yang masih terbuka." },
    ],
    related: ["kepatuhan-uu-pdp", "legal-drafting", "pendirian-pt", "audit-siber"],
  },
  {
    slug: "kepatuhan-dagang-daring",
    tagline: "Toko daring Anda sedang mengumpulkan kewajiban hukum dengan derasnya omzet.",
    heroSub:
      "Audit dan pembenahan kepatuhan dagang daring menurut PP 80/2019 dan Permendag 50/2020: identitas pedagang, label iklan, kebijakan retur, dan penanganan komplain — agar toko tumbuh tanpa berjalan di atas sanksi.",
    timeline: "2–4 minggu untuk audit dan pembenahan toko",
    intro: [
      "Jualan daring di Indonesia diatur lebih rinci daripada yang dikira banyak pemilik toko: PP No. 80 Tahun 2019 tentang Perdagangan melalui Sistem Elektronik dan Permendag No. 50 Tahun 2020 menetapkan kewajiban yang menyentuh halaman depan toko Anda — identitas pedagang yang jelas mencakup nama, alamat, dan kontak, informasi produk yang benar dan lengkap, kewajiban menyimpan bukti transaksi, perlindungan data konsumen, dan perlakuan yang jujur dalam promosi. Digabung dengan UU No. 8 Tahun 1999 tentang Perlindungan Konsumen, setiap halaman produk Anda adalah dokumen hukum. Klaim, harga coret, garansi, dan kebijakan returnya semua bisa diuji kebenarannya.",
      "Pelanggaran yang paling umum terjadi tanpa niat jahat: harga coret yang tidak pernah benar-benar berlaku sehingga diskonnya palsu, garansi yang ditulis asal seperti garansi 30 hari tanpa ketentuan prosesnya, kebijakan retur yang diketik dalam caption dan berubah tergantung admin yang menjawab, identitas toko yang hanya berupa username, dan komplain konsumen yang dijawab berdasarkan suasana hati. Konsekuensinya berjenjang: teguran, sanksi administratif, sampai pemblokiran dari sisi regulator. Dalam praktiknya yang datang lebih cepat: komplain yang viral, penutupan toko oleh platform, dan gugatan konsumen yang jeleknya melekat di hasil pencarian nama Anda.",
      "Kami mengaudit toko Anda seperti pemeriksa yang paling teliti — lalu membenahinya seperti konsultan yang paling praktis. Kepatuhan terhadap PP 80/2019 dan Permendag 50/2020 dicek per halaman mulai dari identitas, informasi produk, sampai alur transaksi. Dokumen konsumen disusun berupa kebijakan retur, pembatalan, dan garansi yang benar-benar bisa dijalankan. SOP komplain dan penanganan rating disiapkan untuk tim, serta label iklan dan praktik promosi diselaraskan. Hasilnya: toko yang tumbuh di atas fondasi yang tidak runtuh saat diperiksa — atau saat viral, tetapi dengan cara yang salah.",
    ],
    benefits: [
      { title: "Audit seperti pemeriksa, perbaikan seperti praktisi", desc: "Seluruh kewajiban PP 80/2019 dicek tanpa simpati — lalu diperbaiki dengan cara yang bisa dijalankan tim nyata." },
      { title: "Dokumen konsumen yang bisa dijalankan", desc: "Kebijakan retur, pembatalan, dan garansi yang jelas prosesnya — staf tidak lagi mengarang jawaban per komplain." },
      { title: "Identitas dan transaksi tertib", desc: "Identitas pedagang dan bukti transaksi memenuhi ketentuan — dasar yang dicari regulator maupun platform." },
      { title: "Komplain jadi proses, bukan krisis", desc: "SOP penanganan komplain dan rating menstandarkan respons — kepuasan terukur, eskalasi terkendali." },
      { title: "Promosi yang tidak menyesatkan", desc: "Harga coret, diskon, dan label iklan diselaraskan aturan — penjualan naik tanpa membawa sanksi menyusul." },
    ],
    process: [
      { title: "Audit kepatuhan toko", desc: "Seluruh halaman dan alur transaksi diperiksa terhadap PP 80/2019 dan Permendag 50/2020 — temuan diperingkat." },
      { title: "Perbaikan identitas dan informasi", desc: "Identitas pedagang, informasi produk, dan ketentuan transaksi diperbaiki — dasar kepatuhan menjadi tertib." },
      { title: "Penyusunan dokumen konsumen", desc: "Kebijakan retur, pembatalan, dan garansi plus SOP komplain dan rating disusun untuk dipakai tim." },
      { title: "Serahan dan pemantauan", desc: "Laporan audit dan seluruh dokumen diserahkan plus panduan agar toko tetap patuh saat tumbuh: produk baru, kampanye baru." },
    ],
    requirements: [
      "URL toko atau situs beserta akses ke halaman produk utama",
      "Data usaha: NIB, identitas pemilik atau badan usaha, kontak resmi",
      "Kebijakan retur atau garansi yang berlaku saat ini (tertulis apa pun bentuknya)",
      "Contoh kasus komplain yang pernah terjadi (bila ada)",
      "Daftar platform yang dipakai (marketplace, media sosial, situs sendiri)",
    ],
    faqs: [
      { q: "Saya hanya jualan di marketplace — apakah tetap terkena aturan dagang daring?", a: "Ya — PP 80/2019 dan Permendag 50/2020 tidak membedakan platform milik sendiri atau milik pihak ketiga: pedagang di marketplace tetap wajib identitas yang jelas, informasi produk yang benar, dan perlakuan konsumen yang sesuai ketentuan. Marketplace itu sendiri punya kewajiban pemantauan yang bisa berujung penutupan akun Anda. Kepatuhan juga melindungi: saat sengketa dengan pembeli atau platform, dokumen yang tertib adalah posisi bertahan terbaik yang Anda punya." },
      { q: "Berapa biaya audit dan pembenahan toko saya?", a: "Mulai Rp 5 juta untuk toko dengan skop standar: audit kepatuhan penuh, perbaikan identitas dan informasi, kebijakan retur, pembatalan, dan garansi, serta SOP komplain. Toko dengan banyak platform, katalog besar, atau model langganan membutuhkan pekerjaan lebih — biayanya ditawarkan tertulis setelah review awal. Bandingkan dengan biaya satu komplain viral atau penutupan akun di puncak kampanye — kepatuhan adalah asuransi termurah di dunia jualan daring." },
      { q: "Apa yang terjadi kalau toko saya ditemukan tidak patuh?", a: "Sanksi resminya berjenjang: teguran, sanksi administratif, sampai pemblokiran akses atau penutupan berdasarkan ketentuan perdagangan elektronik — dan di sisi konsumen, UU Perlindungan Konsumen membuka gugatan atas iklan menyesatkan dan pengingkaran garansi. Yang datang lebih dulu biasanya bukan regulator: komplain yang viral, rating yang anjlok, atau tindakan platform. Semua itu bisa dicegah dengan audit sekali jalan — lalu dijaga dengan kebiasaan yang benar setelahnya." },
    ],
    related: ["marketplace", "website-ecommerce", "kepatuhan-iklan-digital", "wa-business"],
  },
];

/** Lapisan pengayaan untuk 10 layanan kepatuhan digital & data. */
export const kepatuhanDigitalEnrichment: Record<string, ServiceEnrichment> = {
  "kepatuhan-uu-pdp": {
    whoFor: [
      "E-commerce dan aplikasi yang memproses data pelanggan dalam skala besar",
      "Perusahaan yang mengelola data sensitif: kesehatan, keuangan, biometrik",
      "Bisnis yang memakai banyak vendor SaaS dan pemroses data pihak ketiga",
      "Korporasi yang menyiapkan due diligence investor atau transaksi strategis",
    ],
    deliverables: [
      "Laporan audit alur data beserta gap analysis terhadap UU PDP",
      "Kebijakan privasi internal dan eksternal plus prosedur hak subjek data",
      "Data Processing Agreement untuk vendor dan mitra utama",
      "Matriks basis legal untuk setiap tujuan pemrosesan data",
      "Roadmap kepatuhan 12 bulan beserta pelatihan tim",
    ],
    costs: [
      { item: "Jasa program kepatuhan PDP", note: "mulai Rp 15 jt — menyesuaikan kompleksitas alur data, tertulis penuh di penawaran" },
      { item: "Pelatihan tim", note: "per sesi — durasi dan jumlah peserta menyesuaikan" },
      { item: "Data Processing Agreement", note: "per vendor utama — vendor dengan volume besar diprioritaskan" },
      { item: "Penyesuaian sistem (hak akses dan retensi data)", note: "bila temuan audit menuntutnya — kebutuhan dipetakan sebelum eksekusi" },
      { item: "Konsultasi awal", note: "gratis — pemetaan kebutuhan sebelum penawaran" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (khususnya Pasal 20 tentang basis legal, Pasal 46 tentang notifikasi kebocoran, dan Pasal 57 tentang sanksi administratif)",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (PSTE)",
      "Permenkominfo No. 20 Tahun 2016 tentang Pelindungan Data Pribadi dalam Sistem Elektronik",
      "UU No. 1 Tahun 2024 (perubahan kedua atas UU No. 11 Tahun 2008 tentang ITE)",
    ],
  },

  "dpo-layanan": {
    whoFor: [
      "E-commerce dan platform dengan basis data pelanggan berskala besar",
      "Klinik, rumah sakit, dan usaha kesehatan digital yang mengolah data sensitif",
      "Fintech dan penyedia jasa keuangan dengan kewajiban pelindungan data",
      "Perusahaan dengan tim marketing yang menjalankan tracking dan profiling",
    ],
    deliverables: [
      "Surat penunjukan DPO resmi beserta dokumen penugasannya",
      "Laporan kinerja DPO berkala (bulanan atau kuartalan)",
      "Prosedur penanganan permintaan subjek data yang berjalan",
      "Catatan pengawasan pemrosesan dan review vendor berkala",
      "Edukasi internal bagi karyawan terkait pelindungan data",
    ],
    costs: [
      { item: "Langganan layanan DPO", note: "mulai Rp 5 jt/bulan — menyesuaikan skala pemrosesan" },
      { item: "Penyiapan dokumen penunjukan", note: "surat resmi, dokumen penugasan, dan pengumuman internal" },
      { item: "Asesmen awal dan penilaian dampak", note: "bila skop pemrosesan menuntutnya" },
      { item: "Pelatihan internal", note: "per sesi — untuk seluruh staf atau tim tertentu" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (Pasal 53 tentang kewajiban DPO dan Pasal 55 tentang persyaratannya)",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (Pasal 46 tentang kewajiban notifikasi kebocoran yang diawasi DPO)",
      "Permenkominfo No. 20 Tahun 2016 tentang Pelindungan Data Pribadi dalam Sistem Elektronik (acuan teknis berjalan)",
    ],
  },

  "pse-komdigi": {
    whoFor: [
      "Pemilik website dan e-commerce dengan fitur transaksi atau pendaftaran pengguna",
      "Startup dan perusahaan software: SaaS, aplikasi mobile, platform digital",
      "Agensi dan developer yang membangun sistem untuk klien",
      "Perusahaan dengan banyak properti digital yang status registrasinya belum terpetakan",
    ],
    deliverables: [
      "Penetapan jenis PSE (Publik atau Privat) beserta analisis dasarnya",
      "Seluruh dokumen persyaratan registrasi sesuai format Komdigi",
      "Registrasi terdaftar beserta bukti resmi dari sistem PSE",
      "Pemetaan properti digital dan status registrasi masing-masing",
      "Panduan kewajiban pasca-registrasi: perubahan fitur dan pembaruan data",
    ],
    costs: [
      { item: "Jasa registrasi PSE per properti", note: "mulai Rp 3,5 jt — menyesuaikan skop sistem" },
      { item: "Penyiapan kebijakan privasi dan syarat layanan", note: "bila situs belum memilikinya — tersedia dalam paket" },
      { item: "Registrasi properti tambahan", note: "harga lebih ringan untuk properti kedua dan seterusnya" },
      { item: "Penanganan koreksi kompleks", note: "bila muncul temuan dari sistem — biasanya kecil" },
      { item: "Konsultasi klasifikasi awal", note: "gratis — menentukan jenis PSE sebelum penawaran" },
    ],
    legalBasis: [
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (PSTE)",
      "Permenkomdigi No. 5 Tahun 2024 tentang Penyelenggara Sistem Elektronik (menggantikan Permenkominfo No. 5 Tahun 2020)",
      "Perpres No. 47 Tahun 2023 tentang Penyelenggaraan Sistem Elektronik Nasional (SSN)",
      "UU No. 1 Tahun 2024 (perubahan kedua atas UU No. 11 Tahun 2008 tentang ITE)",
    ],
  },

  "audit-siber": {
    whoFor: [
      "E-commerce dan platform yang menyimpan data pelanggan",
      "Perusahaan yang menyiapkan due diligence investor atau kemitraan enterprise",
      "Bisnis dengan server atau cloud sendiri — bukan sekadar memakai SaaS",
      "Organisasi yang mengejar ISO/IEC 27001 atau syarat keamanan kontrak B2B",
    ],
    deliverables: [
      "Laporan temuan berperingkat risiko dan perkiraan biaya perbaikan",
      "Peta jalan perbaikan berprioritas yang bisa dieksekusi tim teknis",
      "Hasil uji restore backup yang terdokumentasi",
      "Rekomendasi kebijakan keamanan dan pelatihan kesadaran staf",
      "Sesi penjelasan teknis plus jadwal retest",
    ],
    costs: [
      { item: "Jasa audit per ruang lingkup", note: "mulai Rp 12 jt — menyesuaikan jumlah aset dan kedalaman pengujian" },
      { item: "Penetration testing fase lanjutan", note: "per sistem tertentu — bila temuan awal menunjukkan kebutuhan" },
      { item: "Penyiapan kebijakan keamanan", note: "bila belum ada — tersedia sebagai tambahan" },
      { item: "Retest dan pemantauan", note: "opsional — per siklus, untuk memastikan perbaikan bertahan" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (kewajiban keamanan pemrosesan dan notifikasi insiden)",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (kewajiban keamanan sistem elektronik)",
      "Perpres No. 47 Tahun 2023 tentang Penyelenggaraan Sistem Elektronik Nasional (SSN)",
      "Standar ISO/IEC 27001 sebagai acuan sistem manajemen keamanan informasi",
    ],
  },

  "respons-insiden-data": {
    whoFor: [
      "Platform dan e-commerce dengan basis data pelanggan besar",
      "Klinik, rumah sakit, dan usaha kesehatan dengan data sensitif",
      "Fintech dan perusahaan keuangan dengan kewajiban notifikasi regulator",
      "Perusahaan yang pernah mendekati insiden dan tidak ingin mengulang improvisasi",
    ],
    deliverables: [
      "Protokol respons insiden berjenjang beserta matriks kewenangan",
      "Template notifikasi ke subjek data dan lembaga pengawas",
      "Naskah komunikasi untuk pelanggan, media, dan karyawan",
      "Alur forensik awal dan pengawetan bukti",
      "Laporan purna-insiden beserta rekomendasi perbaikan",
    ],
    costs: [
      { item: "Penyiapan retainer dan protokol", note: "mulai Rp 7,5 jt — mencakup seluruh dokumen dan simulasi awal" },
      { item: "Aktivasi respons insiden", note: "sesuai skema retainer yang tertulis di perjanjian — tanpa negosiasi saat krisis" },
      { item: "Forensik lanjutan", note: "per kasus — bila insiden menuntut pendalaman teknis" },
      { item: "Simulasi insiden tahunan", note: "opsional — menjaga protokol tetap segar di ingatan tim" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (Pasal 46 tentang kewajiban notifikasi 3x24 jam)",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (Pasal 57 tentang sanksi administratif atas kegagalan pelindungan)",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (kewajiban keamanan dan penanganan insiden)",
    ],
  },

  "kepatuhan-iklan-digital": {
    whoFor: [
      "Merek dengan kampanye iklan digital aktif di media sosial dan mesin pencari",
      "Perusahaan yang bekerja dengan KOL dan afiliator",
      "Sektor teregulasi: kosmetik, suplemen, kesehatan, dan jasa keuangan",
      "Tim marketing internal dan agensi yang butuh panduan kepatuhan praktis",
    ],
    deliverables: [
      "Laporan audit materi iklan berperingkat risiko",
      "Rekomendasi revisi untuk setiap materi bermasalah",
      "Panduan kepatuhan iklan untuk tim marketing",
      "Format label dan disclosure yang benar untuk konten berbayar",
      "Alur verifikasi klaim sebelum materi tayang",
    ],
    costs: [
      { item: "Audit awal materi aktif", note: "mulai Rp 5 jt — seluruh iklan berjalan dan halaman promosi" },
      { item: "Review per kampanye", note: "tarif per paket materi — disepakati sejak awal" },
      { item: "Retainer bulanan", note: "untuk volume kampanye tinggi — lebih ekonomis daripada per dokumen" },
      { item: "Penyiapan dokumen pendukung klaim", note: "bila klaim belum punya bukti — koordinasi ujilab atau konsultasi sektoral" },
    ],
    legalBasis: [
      "UU No. 8 Tahun 1999 tentang Perlindungan Konsumen (kewajiban iklan yang benar, jujur, dan tidak menyesatkan)",
      "UU No. 1 Tahun 2024 (perubahan kedua atas UU No. 11 Tahun 2008 tentang ITE) mengenai konten elektronik",
      "Permenkominfo No. 11 Tahun 2021 tentang Pedoman Perilaku Penyelenggara Sistem dan Layanan Digital (perlakuan iklan pada sistem elektronik)",
      "Peraturan lembaga sektoral untuk klaim khusus (BPOM untuk kesehatan dan kosmetik, OJK untuk jasa keuangan) sesuai bidang usaha",
    ],
  },

  "tata-kelola-ai": {
    whoFor: [
      "Perusahaan dengan tim yang memakai AI generatif dalam pekerjaan harian",
      "Bisnis yang membangun produk berbasis AI atau model kustom",
      "Tim HR dan rekrutmen yang menggunakan AI untuk seleksi kandidat",
      "Eksportir digital yang melayani pasar Eropa dan terkena EU AI Act",
    ],
    deliverables: [
      "Peta penggunaan AI di organisasi beserta tingkat risikonya",
      "Kebijakan penggunaan AI resmi untuk seluruh perusahaan",
      "Penilaian risiko per kasus penggunaan utama",
      "Klausul kemitraan untuk kontrak vendor AI",
      "Panduan tim beserta sesi sosialisasinya",
    ],
    costs: [
      { item: "Jasa penyusunan tata kelola AI", note: "mulai Rp 10 jt — pemetaan, kebijakan, penilaian risiko utama" },
      { item: "Penilaian risiko mendalam", note: "per sistem AI kustom — bila keputusan otomatis menyentuh orang" },
      { item: "Penyusunan klausul vendor", note: "per kontrak — untuk vendor AI yang paling kritikal" },
      { item: "Sesi pelatihan tambahan", note: "per kelompok — untuk tim yang pemakaiannya paling intensif" },
    ],
    legalBasis: [
      "Surat Edaran Kominfo No. 9 Tahun 2023 tentang Etika Kecerdasan Artifisial",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (data latih, profil, dan keputusan otomatis)",
      "UU No. 28 Tahun 2014 tentang Hak Cipta (status karya AI dan materi latih)",
      "EU AI Act (Regulation (EU) 2024/1689) untuk aktivitas yang menyentuh pasar Uni Eropa",
    ],
  },

  "kebijakan-privasi-situs": {
    whoFor: [
      "Pemilik website dan e-commerce yang baru diluncurkan atau sedang migrasi",
      "Startup dengan aplikasi mobile yang mengumpulkan data pengguna",
      "Perusahaan yang menyiapkan registrasi PSE atau kemitraan platform",
      "Bisnis yang sadar dokumennya hasil salin-tempel dari template",
    ],
    deliverables: [
      "Kebijakan privasi sesuai UU PDP yang disusun dari alur data nyata",
      "Syarat dan ketentuan layanan yang bisa dijalankan di Indonesia",
      "Kebijakan cookie beserta konfigurasi banner consent",
      "Peta alur data situs atau aplikasi",
      "Panduan pembaruan dokumen saat fitur berubah",
    ],
    costs: [
      { item: "Penyiapan dokumen per situs atau aplikasi", note: "mulai Rp 2,5 jt — kebijakan privasi, S&T, kebijakan cookie, banner consent" },
      { item: "Review alur data kompleks", note: "bila tracking dan layanan pihak ketiga banyak" },
      { item: "Dokumen tambahan", note: "kebijakan pengembalian dana, keterangan penyangkalan sektoral — sesuai kebutuhan" },
      { item: "Pembaruan tahunan", note: "opsional — menjaga dokumen tetap selaras dengan sistem yang berkembang" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (kewajiban informasi dan hak subjek data)",
      "UU No. 1 Tahun 2024 (perubahan kedua atas UU No. 11 Tahun 2008 tentang ITE)",
      "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (kewajiban keterbukaan penyelenggara)",
      "Permenkominfo No. 20 Tahun 2016 tentang Pelindungan Data Pribadi dalam Sistem Elektronik (acuan teknis berjalan)",
    ],
  },

  "kepatuhan-fintech-ojk": {
    whoFor: [
      "Startup dan perusahaan yang membangun platform pendanaan atau pinjaman",
      "Penyedia dompet digital, layanan pembayaran, dan uang elektronik",
      "Fintech yang sudah beroperasi dan butuh gap audit serta disiplin pelaporan",
      "Investor yang melakukan due diligence terhadap target sektor keuangan",
    ],
    deliverables: [
      "Pemetaan model bisnis ke kewajiban lisensi yang benar",
      "Laporan gap audit terhadap POJK yang berlaku",
      "Dokumen perizinan dan kebijakan internal yang disiapkan",
      "Kalender pelaporan berkala untuk seluruh kewajiban",
      "Ringkasan pemantauan perubahan regulasi secara periodik",
    ],
    costs: [
      { item: "Pemetaan model dan konsultasi", note: "mulai Rp 15 jt — diperhitungkan bila lanjut ke program penuh" },
      { item: "Penyiapan dokumen perizinan", note: "per jalur lisensi — menyesuaikan kompleksitas model" },
      { item: "Program kepatuhan dan pelaporan bulanan", note: "langganan — kalender kepatuhan dan pemantauan regulasi" },
      { item: "Gap audit untuk yang sudah beroperasi", note: "diuji terhadap POJK yang berlaku beserta prioritas perbaikannya" },
    ],
    legalBasis: [
      "UU No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan (P2SK)",
      "POJK No. 10 Tahun 2022 tentang Penyelenggaraan Pendanaan Gabungan Berbasis Teknologi Informasi (LPBBTI)",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (data keuangan dan subjek data)",
      "Peraturan Bank Indonesia terkait layanan pembayaran dan uang elektronik (sesuai model usaha)",
    ],
  },

  "kepatuhan-dagang-daring": {
    whoFor: [
      "Pemilik toko daring dan merek yang menjual langsung ke konsumen",
      "UMKM yang tumbuh dari media sosial ke transaksi yang serius",
      "Penjual multi-platform: marketplace, media sosial, dan situs sendiri",
      "Perusahaan yang menyiapkan tim layanan pelanggan untuk volume komplain besar",
    ],
    deliverables: [
      "Laporan audit kepatuhan PP 80/2019 per halaman toko",
      "Pembenahan identitas dan informasi pedagang",
      "Kebijakan retur, pembatalan, dan garansi yang operasional",
      "SOP komplain dan penanganan rating untuk tim",
      "Panduan kepatuhan promosi untuk tim marketing",
    ],
    costs: [
      { item: "Audit dan pembenahan toko", note: "mulai Rp 5 jt — menyesuaikan jumlah platform dan skop katalog" },
      { item: "Penyiapan dokumen konsumen tambahan", note: "bila model usaha menuntutnya — langganan, pre-order, digital goods" },
      { item: "SOP dan pelatihan tim layanan pelanggan", note: "bila volume komplain besar — standar respons yang konsisten" },
      { item: "Review berkala musiman", note: "opsional — menjaga kepatuhan saat kampanye besar berjalan" },
    ],
    legalBasis: [
      "PP No. 80 Tahun 2019 tentang Perdagangan melalui Sistem Elektronik (PMSE)",
      "Permendag No. 50 Tahun 2020 tentang Ketentuan Pelisensian, Periklanan, Pembinaan, dan Pengawasan Pelaku Usaha dalam Perdagangan melalui Sistem Elektronik",
      "UU No. 8 Tahun 1999 tentang Perlindungan Konsumen",
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (data pelanggan dan transaksi)",
    ],
  },
};
