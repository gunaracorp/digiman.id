import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — TASK 23-c: EKSPANSI 165 LAYANAN, KATEGORI 3 (7 layanan).
 * Tujuh layanan disebarkan ke kategori lama: kitap-pasangan-investor
 * (ketenagakerjaan), skb-relief-pajak-treaty (pajak), keberatan-banding-pajak
 * (pajak), indikasi-geografis-sttig (ki), bujp-jasa-keamanan (perizinan),
 * izin-limbah-b3 (esg), skttk-personel-konstruksi (properti).
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */

export const ekspansi165Content: ServiceContent[] = [
  {
    slug: "kitap-pasangan-investor",
    tagline:
      "Izin yang mengubah kunjungan panjang menjadi rumah yang diakui negara.",
    heroSub:
      "Izin Tinggal Tetap (KITAP) lima tahun untuk pasangan yang menikah dengan WNI, investor dan eksekutif PT PMA, serta pensiun, kami urus dari pemetaan jalur dan pra-syarat, penyiapan dokumen, hingga kartu terbit melalui evisa.imigrasi.go.id.",
    timeline: "VTT/KITAS pra-syarat 1–2 bulan · KITAP 2–4 minggu setelahnya",
    intro: [
      "Izin Tinggal Tetap (KITAP) adalah status keimigrasian lima tahun yang menempatkan orang asing pada posisi paling stabil di Indonesia: tidak lagi bergantung pada perpanjangan berkala, bebas keluar-masuk sesuai izin yang menyertainya, dan diakui bank, pengelola hunian, hingga urusan kepegawaian sebagai penghuni yang sah tanpa menjelaskan ulang statusnya di setiap meja administrasi. Dasar hukumnya UU No. 6 Tahun 2011 tentang Keimigrasian beserta perubahannya, dengan PP No. 31 Tahun 2013 jo. PP No. 45 Tahun 2024 tentang pengendalian orang asing dan pengendalian aktivitas keimigrasian, serta peraturan Menteri Hukum dan HAM tentang tata cara izin tinggal tetap. Terdapat tiga jalur utama: KITAP pasangan bagi orang asing yang menikah dengan WNI dengan perkawinan tercatat minimal dua tahun atau yang memiliki anak; KITAP investor dan eksekutif bagi direktur utama atau komisaris PT PMA dengan modal disetor; dan KITAP pensiun bagi usia 55 tahun ke atas dengan bukti penghasilan atau pendepositan yang menunjukkan kemandirian finansial selama menetap. Seluruh proses kini berjalan elektronik melalui aplikasi evisa.imigrasi.go.id, mulai dari persetujuan elektronik (e-POA) hingga kartu izin yang terbit.",
      "Kesalahan yang paling sering menggagalkan KITAP berangkat dari sebelum pengajuan: perkawinan yang belum tercatat resmi membuat status pasangan bermasalah, karena buku nikah adalah dokumen yang menentukan, bukan undangan atau resepsi. Jebakan kedua ada di kebiasaan bepergian: izin masuk kembali yang lupa diperbarui membuat pemegang KITAP mendapati statusnya hangus di bandara setelah pulang dari luar negeri, dan perbaikannya jauh lebih mahal daripada pengingat yang tepat waktu, mulai dari denda administratif hingga mengulang perjalanan yang sudah terjadwal. Kesalahan ketiga muncul dari perantara abal-abal yang menjanjikan jalur cepat: data terisi ke sistem dengan cara yang tidak dapat dipertanggungjawabkan, lalu terbongkar saat pemeriksaan keimigrasian, dan pemegang izin itulah yang menanggung akibatnya, dari status yang dipersoalkan hingga pengusiran sesuai prosedur pengendalian orang asing. Ada pula yang mengajukan KITAP investor tanpa memastikan struktur modal PT PMA benar-benar disetor, sehingga pengajuan bermundur setelah akta dan bukti penyertaan diperiksa, dan biaya yang sudah keluar untuk pengajuan pertama tidak kembali.",
      "Kami memulai dari pemetaan jalur, bukan dari janji: pasangan, investor, atau pensiun ditetapkan bersama pra-syaratnya, termasuk VTT atau KITAS yang menjadi pintu masuk bila status Anda belum memadai. Dokumen disusun sesuai format yang diterima imigrasi, diterjemahkan dan dilegalisasi bila berasal dari luar negeri, lalu pengajuan berjalan di evisa.imigrasi.go.id dengan status yang bisa Anda pantau setiap saat. Setelah kartu terbit, kalender keimigrasian dikunci: izin masuk kembali yang kini menyatu pada kartu izin elektronik, pembaruan data, dan kewajiban laporan masuk jadwal kami, bukan khawatir Anda yang harus mengingat setiap tanggal sendiri. Setiap biaya tertulis penuh di penawaran sebelum pekerjaan dimulai, dan bila ada tahap yang tidak lolos, Anda menerima alasan beserta langkah perbaikannya, bukan diam-diam diulang tanpa penjelasan. Bila satu kanal macet, misalnya antrean kantor imigrasi yang penuh, jalur alternatifnya langsung kami petakan bersama Anda.",
    ],
    benefits: [
      {
        title: "Jalur yang tepat sejak hari pertama",
        desc: "Pasangan, investor, atau pensiun dipetakan dengan pra-syaratnya sebelum dokumen diajukan, karena kegagalan paling mahal adalah salah jalur lalu mengulang semuanya dari nol dengan biaya dan waktu yang terbuang dua kali lipat.",
      },
      {
        title: "Pra-syarat dituntaskan lebih dulu",
        desc: "VTT atau KITAS pintu masuk, usia perkawinan tercatat, dan struktur modal PT PMA dipastikan sebelum uang dan waktu Anda dikeluarkan untuk pengajuan utama, karena satu dokumen yang belum matang bisa memundurkan seluruh jadwal.",
      },
      {
        title: "Dokumen kelulusan pertama",
        desc: "Format yang diterima imigrasi, terjemahan tersumpah untuk dokumen asing, dan pengecekan silang data sebelum pengajuan sehingga berkas tidak bolak-balik dan pertanyaan administrasi kecil terjawab sebelum ditanyakan.",
      },
      {
        title: "Status keluar-masuk terjaga",
        desc: "Izin masuk kembali dipantau dan diperbarui terjadwal sehingga perjalanan bisnis tidak berujung status hangus di bandara atau pengajuan ulang yang mahal, termasuk rencana perjalanan yang harus dibatalkan mendadak.",
      },
      {
        title: "Kalender keimigrasian berjalan",
        desc: "Perpanjangan, pembaruan data, dan kewajiban laporan masuk kalender kami dengan pengingat sebelum tenggat, termasuk perubahan status perkawinan atau perseroan yang berdampak langsung pada keabsahan izin Anda.",
      },
    ],
    process: [
      {
        title: "Pemetaan jalur dan kelayakan",
        desc: "Kondisi perkawinan, struktur PT PMA, atau kesiapan pensiun dianalisis, lalu jalur KITAP ditetapkan bersama pra-syarat, estimasi biaya resmi, dan risiko setiap jalurnya secara tertulis.",
      },
      {
        title: "Penyiapan pra-syarat dan dokumen",
        desc: "VTT atau KITAS pintu masuk diurus bila belum ada, dokumen asing diterjemahkan dan dilegalisasi, dan seluruh berkas disusun sesuai format yang diterima imigrasi dengan pengecekan silang data sebelum masuk sistem.",
      },
      {
        title: "Pengajuan di evisa.imigrasi.go.id",
        desc: "Permohonan dan pembayaran dijalankan elektronik, e-POA dipantau, dan korespondensi dengan keimigrasian ditangani sampai persetujuan diperoleh, termasuk menjawab permintaan dokumen tambahan bila muncul di tengah proses.",
      },
      {
        title: "Kartu terbit dan kalender pasca-terbit",
        desc: "KITAP lima tahun diterima beserta kartunya, izin masuk kembali terjadwal, dan seluruh kewajiban pasca-terbit masuk kalender yang kami jaga, lengkap dengan panduan peristiwa umum dari kehilangan kartu hingga perubahan alamat.",
      },
    ],
    requirements: [
      "Paspor sah dengan masa berlaku memadai dan riwayat keimigrasian yang tertib",
      "Buku nikah atau bukti perkawinan tercatat untuk jalur pasangan, akta dan bukti modal disetor untuk jalur investor, atau bukti penghasilan dan pendepositan untuk jalur pensiun",
      "VTT atau KITAS aktif sesuai jalur sebagai status pintu masuk",
      "Alamat domisili di Indonesia beserta surat jaminan dari pasangan, perseroan, atau pemberi jaminan",
      "Dokumen pendukung: foto terkini, dokumen identitas pasangan atau perseroan, dan dokumen asing dalam terjemahan tersumpah bila diperlukan",
      "Rencana kegiatan di Indonesia selama lima tahun ke depan untuk kami petakan ke jalur dan kewajiban yang paling sesuai",
    ],
    faqs: [
      {
        q: "Berapa biaya pengurusan KITAP?",
        a: "Jasa pendampingan kami mulai Rp 4,5 jt, tertulis penuh di penawaran, terpisah dari biaya resmi keimigrasi yang bergantung pada jalur dan masa berlaku yang dimohonkan. Untuk pasangan yang baru menikah, perhitungan total juga memperhitungkan VTT atau KITAS pra-syarat terlebih dahulu. Semua pos biaya kami buka sejak awal agar tidak ada kejutan di tengah proses, termasuk skenario bila pra-syarat masih harus dituntaskan lebih dulu. Bila jalur Anda campuran, misalnya pasangan sekaligus direksi PT PMA, jalurnya dipilih yang paling menguntungkan status dan kewajibannya.",
      },
      {
        q: "Berapa lama prosesnya dan apa risiko bila terlambat?",
        a: "VTT atau KITAS pra-syarat umumnya memakan satu sampai dua bulan, dan KITAP 2–4 minggu setelahnya sejak berkas lengkap. Risiko terbesar adalah mengajukan dengan status yang sudah kedaluwarsa atau izin masuk kembali yang lupa diperbarui, karena keduanya bisa membuat status hangus di bandara. Kami menjaga tenggat-tenggat itu di kalender agar Anda tidak pernah terlambat tanpa sengaja, dan bila keterlambatan sudah terjadi kami petakan jalur perbaikannya sebelum kondisinya memburuk.",
      },
      {
        q: "Apakah pemegang KITAP pasangan boleh bekerja?",
        a: "Boleh, dengan catatan yang benar. KITAP pasangan mencakup kewenangan bekerja mandiri bagi pasangan WNA, sedangkan pemegang KITAP investor memimpin perseroan sesuai posisinya di akta. Aktivitas di luar itu, misalnya menjadi karyawan perusahaan lain, tetap memerlukan izin kerja yang sesuai, dan kami bantu petakan jalurnya sejak awal sehingga Anda tidak membiasakan status yang kelak mempersulit perpanjangan.",
      },
    ],
    related: ["kitas-rptka", "kitas-investor", "pt-pma", "kantor-perwakilan-asing"],
  },
  {
    slug: "skb-relief-pajak-treaty",
    tagline:
      "Di balik setiap potongan dengan tarif yang salah, ada perjanjian yang siap mengembalikan uang itu.",
    heroSub:
      "SKB dan pengurangan tarif berbasis Perjanjian Penghindaran Pajak Ganda (P3B) untuk pihak luar negeri dan pembayarannya di Indonesia: menghentikan pemotongan yang tidak seharusnya dan mengembalikan kelebihan potong dari masa lalu.",
    timeline: "SKB 2–4 minggu · refund 6–12 bulan",
    intro: [
      "Setiap pembayaran dari Indonesia ke pihak luar negeri atas jasa, sewa, royalti, dividen, bunga pinjaman, hingga upah awak pesawat udara dan kapal pada umumnya dikenai pemotongan pajak di sumber: PPh Pasal 23 untuk jasa dan sewa, PPh Pasal 4 ayat (2) untuk royalti dan dividen, dan PPh Pasal 26 sebesar 20% untuk penghasilan wajib pajak luar negeri, dihitung atas jumlah bruto tanpa pengurangan. Tarif itu bukan harga final: Perjanjian Penghindaran Pajak Ganda (P3B) yang mengikat Indonesia dengan lebih dari 70 negara mitra dapat menurunkan tarifnya, dan pihak tertentu dapat mengajukan Surat Keterangan Bebas (SKB) PPh Pasal 4 ayat (2) atau PPh Pasal 23 agar pemotongan dihentikan. Dasarnya UU Pajak Penghasilan No. 7 Tahun 1983 jo. perubahannya termasuk UU No. 7 Tahun 2021, restitusi diatur UU Ketentuan Umum dan Tata Cara Perpajakan, bukti domisili DGT-1 dan DGT-2 diatur PMK No. 249/PMK.03/2008, sementara instrumen multilateral (MLI) yang mengamandemen banyak P3B telah diundangkan lewat UU No. 4 Tahun 2021. Uang yang kembali dari jalur ini nyata dan berulang setiap tahun, bukan sekadar catatan kepatuhan yang menghiasi laporan bulanan, karena nilainya bisa mencapai miliaran rupiah pada kontrak besar.",
      "Kesalahan yang paling umum: pembayaran berjalan tanpa SKB, pemotongan penuh terjadi berbulan-bulan, dan uang itu baru menunggu refund lewat proses restitusi yang panjang dengan pemeriksaan yang bisa meminta banyak dokumen pendukung. Kesalahan kedua adalah dokumen domisili yang kedaluwarsa: DGT-1 dan DGT-2 memiliki masa berlaku, dan pembayaran yang jatuh setelah kedaluwarsa dipotong menurut tarif domestik meski perjanjian sebenarnya masih melindungi. Ketiga, klaim perjanjian ditolak karena penerima penghasilan tidak terbukti menjadi pemilik manfaat akhir, misalnya entitas perantara tanpa substansi, atau kategori penghasilan diklaim salah sehingga pasal perjanjian yang dipakai tidak tepat. Setiap satu dari kesalahan itu berarti uang tertahan, kelebihan bayar yang menunggu lama, atau pengajuan yang harus diulang dari awal dengan biaya tambahan dan reputasi pembayar yang menurun di mata pemeriksa.",
      "Kami bekerja dari kontrak dan arus pembayaran Anda, bukan dari asumsi tarif: jenis penghasilan dipetakan, P3B yang mengikat dibaca pasal demi pasal, dan syarat pemberian manfaat perjanjian dipastikan sebelum dokumen diajukan agar tidak ada klaim yang runtuh di tengah jalan. SKB atau klaim tarif perjanjian kami ajukan ke DJP dengan bukti domisili yang sah dan bukti pemilik manfaat akhir yang utuh, termasuk dokumen substansi dari negara mitra bila diperlukan, sementara kelebihan potong masa lalu kami susun menjadi permohonan restitusi yang konsisten dengan pembukuan dan bukti potong Anda. Hasilnya bukan sekadar kepatuhan: arus kas yang tertahan kembali, dan pembayaran berikutnya berjalan dengan tarif yang benar sejak awal tanpa perdebatan di setiap faktur.",
    ],
    benefits: [
      {
        title: "Arus kas langsung lega",
        desc: "Pemotongan yang tidak seharusnya dihentikan lewat SKB, dan pembayaran berikutnya memakai tarif perjanjian sejak awal sehingga tidak ada uang yang tertahan di sumber pada setiap tagihan.",
      },
      {
        title: "Uang lama kembali",
        desc: "Kelebihan potong masa lalu disusun menjadi permohonan restitusi yang konsisten dengan pembukuan, bukti potong, dan laporan SPT sehingga peluang persetujuan maksimal tanpa selisih yang bisa digali pemeriksa.",
      },
      {
        title: "P3B dibaca pasal demi pasal",
        desc: "Kategori penghasilan dan pasal perjanjian yang benar ditetapkan dari teks perjanjian yang mengikat Indonesia dengan negara mitra, bukan diasumsikan dari kebiasaan pasar atau contoh kasus pihak lain.",
      },
      {
        title: "Dokumen domisili terkelola",
        desc: "DGT-1 dan DGT-2 dipantau masa berlakunya dan diperbarui tepat waktu agar tidak ada pembayaran yang jatuh di luar perlindungan perjanjian hanya karena dokumen yang terlambat sebulan.",
      },
      {
        title: "Tahan pemeriksaan",
        desc: "Bukti pemilik manfaat akhir dan substansi penerima penghasilan disiapkan sejak pengajuan, sehingga klaim tidak runtuh saat DJP meminta penjelasan dan pembayaran tidak dikembalikan ke tarif domestik.",
      },
    ],
    process: [
      {
        title: "Pemetaan penghasilan dan P3B",
        desc: "Kontrak, jenis penghasilan, dan negara mitra dipetakan, lalu tarif perjanjian beserta syarat pemberian manfaatnya dianalisis dan dituangkan tertulis agar keputusan bisa ditimbang bersama manajemen.",
      },
      {
        title: "Penyiapan bukti domisili dan substansi",
        desc: "DGT-1 atau DGT-2 dikoordinasikan dengan pihak luar negeri, diterjemahkan bila perlu, dan dilengkapi bukti pemilik manfaat akhir serta substansi kegiatan yang dapat diverifikasi DJP.",
      },
      {
        title: "Pengajuan SKB atau klaim tarif",
        desc: "Permohonan diajukan ke DJP dan diikuti sampai terbit, termasuk melengkapi kekurangan berkas bila ada keberatan administrasi dari otoritas di tengah proses.",
      },
      {
        title: "Refund dan pemantauan berjalan",
        desc: "Kelebihan potong diproses menjadi restitusi dan dipantau sampai cair, lalu kalender keberlakuan dokumen dibuat agar pembayaran berikutnya tetap aman tanpa perlu mengulang dari nol.",
      },
    ],
    requirements: [
      "Surat keterangan domisili DGT-1 atau DGT-2 dari negara mitra sesuai jenis penerima penghasilan",
      "Kontrak atau perjanjian yang mendasari pembayaran: jasa, sewa, royalti, dividen, bunga, atau ketentuan awak pesawat dan kapal",
      "Bukti pemotongan pajak sebelumnya bila mengajukan refund, termasuk bukti potong dan laporan SPT masa terkait",
      "Dokumen legal dan laporan keuangan penerima penghasilan untuk membuktikan substansi dan status pemilik manfaat akhir",
      "Data pembayaran: jadwal, nilai, jenis penghasilan, dan rekening tujuan",
      "Riwayat pembayaran sebelumnya kepada pihak luar negeri untuk memetakan potongan yang sudah terlanjur terjadi",
    ],
    faqs: [
      {
        q: "Berapa biaya pengurusan SKB atau refund pajak ini?",
        a: "Jasa pendampingan kami mulai Rp 3,5 jt untuk satu pihak penerima penghasilan, tertulis penuh di penawaran sebelum pekerjaan dimulai. Untuk refund dengan nilai besar, biayanya tetap jelas sejak awal karena hasilnya berupa uang kembali yang umumnya jauh melebihi nilai jasanya. Biaya terjemahan dan legalisasi dokumen dari negara mitra dihitung terpisah sesuai jumlah berkasnya.",
      },
      {
        q: "Berapa lama SKB terbit dan berapa lama uang kembali?",
        a: "SKB umumnya terbit dalam 2–4 minggu setelah berkas lengkap, sementara refund kelebihan potong melalui restitusi berjalan 6–12 bulan tergantung pemeriksaan awal atau pemeriksaan yang menentukan besarnya. Tanpa SKB, pemotongan 20% untuk PPh Pasal 26 atau 2% untuk PPh Pasal 23 tetap berjalan pada setiap pembayaran. Itulah sebabnya SKB kami kejar lebih dulu, dan refund menyusul sebagai pemulihan uang yang sudah tertahan sejak lama.",
      },
      {
        q: "Siapa saja yang biasanya membutuhkan layanan ini?",
        a: "Pihak luar negeri yang menerima jasa, sewa, royalti, atau dividen dari Indonesia; perusahaan di Indonesia yang membayar jasa atau bunga pinjaman luar negeri dan ingin pemotongannya benar; hingga investor asing yang mulai menerima dividen dari PT-nya di Indonesia. Upah awak pesawat udara dan kapal pelayaran internasional pun memiliki jalur pembebasan tersendiri. Jalur yang tepat kami tetapkan dari jenis penghasilannya, bukan dari tebakan atau contoh kasus orang lain. Bila kasus Anda tidak masuk daftar itu, pemetaan singkat tetap bisa kami mulai dari kontrak yang sedang berjalan.",
      },
    ],
    related: ["transfer-pricing", "npwp-pkp", "pelaporan-pajak", "entitas-luar-negeri"],
  },
  {
    slug: "keberatan-banding-pajak",
    tagline:
      "Tagihan pajak bukanlah putusan akhir, melainkan argumen yang belum dijawab.",
    heroSub:
      "Analisis hasil pemeriksaan dan strategi sengketa yang benar: keberatan ke DJP, banding ke Pengadilan Pajak, upaya sela, dan penundaan penagihan untuk menjaga kas perusahaan Anda selama proses berjalan penuh.",
    timeline: "Keberatan 2–4 bulan · banding 6–18 bulan",
    intro: [
      "Pemeriksaan pajak yang berakhir dengan Surat Pemberitahuan Hasil Pemeriksaan (SPHP) dan kemudian Surat Ketetapan Pajak Kurang Bayar (SKPKB) bukanlah akhir dari cerita, melainkan awal dari jalur sengketa yang tersedia bagi setiap wajib pajak selama batas waktunya belum terlewati. Dasar hukumnya UU Ketentuan Umum dan Tata Cara Perpajakan No. 28 Tahun 2007 jo. UU No. 7 Tahun 2021: keberatan diajukan ke DJP paling lambat 30 hari sejak SKPKB diterima, DJP wajib menjawab paling lama 12 bulan, dan bila keberatan ditolak atau dijawab sebagian, banding dapat diajukan ke Pengadilan Pajak dalam 30 hari sejak keputusan diterima, dengan biaya perdata yang ringan namun kesiapan berkasnya yang menentukan. Prosedur di Pengadilan Pajak diatur PP No. 17 Tahun 2021, sementara tata cara keberatan, banding, dan sengketa lain diatur peraturan Menteri Keuangan. Tersedia pula upaya sela: TERA atas elemen atau data yang diperselisihkan, keberatan atas penindakan seperti SP2DK, serta penundaan penagihan hingga 18–24 bulan agar tagihan tidak menekan kas sebelum keputusan final, dan pengajuannya kami sesuaikan dengan nilai sengketa serta kondisi kas perusahaan Anda.",
      "Kesalahan yang paling mahal adalah keberatan yang menolak semua temuan tanpa analisis: DJP menjawab butir demi butir, kredibilitas wajib pajak anjlok, dan peluang yang sebenarnya ada ikut terkubur bersama klaim yang lemah di butir-butir lainnya. Kesalahan kedua adalah waktu: batas 30 hari itu tajam, dan pengajuan yang terlambat sedikit membuat SKPKB menjadi permanen meski materinya sebenarnya dapat dibantah dengan kuat. Ketiga, bukti yang tidak dikumpulkan saat pemeriksaan sulit diangkat di keberatan, apalagi di banding, karena komposisi bukti yang menentukan, bukan emosi di ruang sidang. Ada pula perusahaan yang membayar penuh lebih dulu tanpa mengajukan penundaan penagihan, lalu menunggu uangnya kembali bertahun-tahun padahal kas itu sedang dibutuhkan produksi, penggajian, dan pertumbuhan bisnis.",
      "Kami memulai dari analisis SPHP butir demi butir: temuan mana yang berasal dari koreksi fiskal yang dapat dibantah, mana yang murni salah penghitungan, dan mana yang didukung bukti kuat sehingga lebih bijak disetujui demi menjaga kredibilitas. Dari situ strategi disusun dengan perhitungan nilai, biaya, dan peluang, lalu dijalankan: keberatan dengan argumen dan bukti yang rapi, banding ke Pengadilan Pajak bila keberatan ditolak, TERA untuk perselisihan yang layak, dan penundaan penagihan agar kas tetap aman selama proses berjalan tanpa mengorbankan kewajiban yang tidak tersengketa. Setiap langkah beserta peluangnya kami jelaskan dengan jujur, termasuk rekomendasi untuk tidak melanjutkan bila perjuangannya tidak sebanding dengan nilainya.",
    ],
    benefits: [
      {
        title: "Temuan dibedah satu per satu",
        desc: "Koreksi fiskal, kesalahan penghitungan, dan persoalan bukti dianalisis terpisah sehingga keberatan memiliki arah yang jelas dan kredibel di mata pemeriksa maupun majelis banding.",
      },
      {
        title: "Batas waktu terjaga",
        desc: "Batas 30 hari keberatan dan 30 hari banding masuk kalender dengan dokumen yang siap sebelum tenggat, karena satu hari keterlambatan mengubah status tagihan menjadi permanen.",
      },
      {
        title: "Kas terlindungi saat sengketa",
        desc: "Penundaan penagihan hingga 18–24 bulan diajukan bersamaan sehingga perusahaan tidak membayar penuh lebih dulu lalu menunggu uangnya bertahun-tahun di tengah kebutuhan operasional yang tidak menunggu.",
      },
      {
        title: "Strategi nilai, bukan emosi",
        desc: "Nilai sengketa, biaya proses, dan peluang menang dihitung per butir; temuan yang tidak layak diperjuangkan kami sampaikan apa adanya sebelum Anda mengeluarkan biaya sepeser pun untuk tahap yang berat.",
      },
      {
        title: "Komposisi bukti yang menang",
        desc: "Bukti dikumpulkan dan disusun ulang sebelum diajukan, karena Pengadilan Pajak memutuskan dari berkas yang lengkap dan konsisten, bukan dari argumen lisan di ruang sidang.",
      },
    ],
    process: [
      {
        title: "Analisis SPHP dan SKPKB",
        desc: "Seluruh temuan dianalisis butir demi butir: dasar koreksinya, angkanya, dan bukti yang tersedia untuk membantah atau menyetujuinya, lengkap dengan catatan risiko per butir.",
      },
      {
        title: "Strategi sengketa dan perhitungan nilai",
        desc: "Peluang per butir ditetapkan bersama Anda, termasuk temuan yang lebih bijak disetujui, dengan estimasi biaya, waktu, dan dampaknya ke kas perusahaan.",
      },
      {
        title: "Keberatan ke DJP dalam 30 hari",
        desc: "Keberatan disusun dan diajukan sebelum tenggat, lengkap dengan bukti dan argumen per butir, lalu didampingi hingga DJP menjawab dalam batas 12 bulannya.",
      },
      {
        title: "Banding, upaya sela, dan penundaan penagihan",
        desc: "Bila keberatan ditolak, banding diajukan ke Pengadilan Pajak; sementara TERA dan penundaan penagihan diurus pada jalurnya masing-masing agar kas tidak tersedot selama proses.",
      },
    ],
    requirements: [
      "SPHP dan SKPKB lengkap beserta lampiran temuan pemeriksaan",
      "Dokumen pembukuan dan kontrak yang mendasari bantahan atas setiap temuan",
      "Kronologi pemeriksaan beserta korespondensi dengan DJP yang pernah berlangsung",
      "Surat kuasa khusus dan dokumen identitas penandatangan",
      "Keputusan keberatan DJP bila melanjutkan ke tahap banding",
      "Rencana nilai sengketa dan batas toleransi biaya agar strategi sejalan dengan keputusan manajemen",
    ],
    faqs: [
      {
        q: "Berapa biaya pendampingan sengketa pajak?",
        a: "Jasa pendampingan kami mulai Rp 5 jt per tahap sengketa, tertulis penuh di penawaran, terpisah dari biaya perdata banding ke Pengadilan Pajak sebesar Rp 200 ribu. Bila nilai sengketa besar, biaya jasa tetap transparan dan setiap tahap dikoordinasikan lebih dulu sebelum dijalankan. Kami juga berani menolak memperjuangkan temuan yang peluangnya tidak sebanding, dan itu kami sampaikan sejak analisis awal. Setiap tahap baru, seperti lanjut ke banding, dikonfirmasi dahulu dengan estimasi biayanya sebelum dijalankan.",
      },
      {
        q: "Berapa lama proses keberatan dan banding?",
        a: "Keberatan ke DJP umumnya selesai 2–4 bulan, sedangkan banding ke Pengadilan Pajak berjalan 6–18 bulan tergantung kompleksitas materi dan jadwal sidang. Risiko terbesar bukan lamanya, melainkan tagihan yang berjalan sementara sengketa belum selesai. Karena itu penundaan penagihan hingga 18–24 bulan kami urus bersamaan agar kas perusahaan tetap aman sampai ada keputusan final.",
      },
      {
        q: "Apakah semua temuan pemeriksaan layak diperjuangkan?",
        a: "Tidak, dan justru di sinilah strategi dibedakan dari emosi. Beberapa temuan memang lemah dan layak dibantah habis, sementara sebagian lebih bijak disetujui agar kredibilitas yang kuat terpelihara untuk butir-butir yang benar-benar penting. Kami menghitung nilai sengketa, biaya, dan peluang per butir, lalu merekomendasikan jalur yang paling masuk akal untuk kondisi kas, kalender bisnis, dan reputasi Anda di mata otoritas.",
      },
    ],
    related: ["pelaporan-pajak", "transfer-pricing", "sengketa-bisnis-mediasi", "npwp-pkp"],
  },
  {
    slug: "indikasi-geografis-sttig",
    tagline:
      "Nama asal bukan sekadar letak di peta, melainkan warisan yang bernilai ketika dilindungi.",
    heroSub:
      "Pendaftaran Indikasi Geografis hingga penetapan dan STTIG untuk produsen: melindungi nama seperti kopi Gayo, Toraja, Kintamani, batik Pekalongan, atau asam jawa Ponorogo sebagai milik bersama wilayahnya, bukan milik satu perusahaan.",
    timeline: "Pengajuan IG 6–18 bulan · STTIG per produsen 1–3 bulan",
    intro: [
      "Beberapa nama jualan ternyata lebih mahal daripada produknya: kopi Gayo, kopi Toraja, kopi Kintamani, batik Pekalongan, asam jawa Ponorogo, nama-nama yang dijual berulang-ulang tanpa perlu beriklan. Nilai itu lahir dari kombinasi wilayah, tanah, iklim, dan proses yang tidak bisa dipindahkan ke tempat lain, dan hukum menyebutnya Indikasi Geografis (IG), tanda asal yang melindungi reputasi wilayah sekaligus standar kualitas produknya. Dasarnya UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis dengan PP No. 51 Tahun 2007 tentang Indikasi Geografis, serta peraturan Menteri Hukum dan HAM tentang tata cara pendaftaran IG dan pemberian Sertifikat Tanda Tempat Indikasi Geografis (STTIG). Jalurnya tiga lapis: pendaftaran IG ke Direktorat Jenderal Kekayaan Intelektual oleh komite yang mewakili kelompok masyarakat di wilayah tersebut, penetapan IG, lalu penerbitan STTIG bagi setiap produsen di dalam wilayah agar berhak memakai nama. Jantungnya adalah buku syarat: kualitas, reputasi, peta batas wilayah, karakter iklim dan tanah, serta proses produksi yang dapat diverifikasi.",
      "Pengajuan yang gagal hampir selalu gagal di buku syarat: komite belum berbadan hukum atau tidak mewakili kelompok masyarakat, batas wilayah digambarkan kabur, dan data kualitas tidak bisa diverifikasi sehingga pemeriksaan berjalan bolak-balik sampai berbulan-bulan, sementara produk serupa dari wilayah lain keburu terdaftar lebih dulu. Kesalahan lain terjadi justru setelah IG terdaftar: produsen di dalam wilayah belum memiliki STTIG sehingga hak pakainya tidak jelas, sementara pengguna nama dari luar wilayah tidak terkejar karena penjagaan nama tidak pernah disusun. Ada juga kasus di mana satu produsen besar mengurus semua untuk dirinya sendiri, padahal IG adalah milik bersama wilayah, dan struktur seperti itu rapuh saat muncul sengketa internal atau saat buyer ekspor menanyakan siapa yang berhak menggunakan nama dengan bukti yang sah.",
      "Kami menangani rantainya dari akar: konsolidasi komite, penyusunan buku syarat bersama produsen dan pakar lokal, pengujian kualitas di laboratorium, penggambaran peta batas, sampai pendaftaran di DJKI dan pendampingan pemeriksaan sampai penetapan. Setelah IG ditetapkan, STTIG diurus per produsen agar hak pakai menjadi jelas, dan tata kelola penjagaan nama disusun: siapa yang berhak, bagaimana memakai nama dan logonya, serta langkah apa yang diambil bila ada pelanggaran, dari somasi hingga gugatan. Hasilnya bukan sertifikat yang diarsipkan di lemari, melainkan aset bersama yang menaikkan harga jual, membuka akses ekspor, dan menutup pintu pemalsuan yang selama ini menikmati nama tanpa ikut memenuhi standarnya.",
    ],
    benefits: [
      {
        title: "Harga premium yang sah",
        desc: "Nama asal yang terlindungi memberi alasan harga lebih tinggi yang dipahami pasar domestik maupun buyer internasional, bukan sekadar klaim pemasaran yang mudah ditiru pesaing tanpa izin.",
      },
      {
        title: "Milik bersama wilayah",
        desc: "IG terdaftar atas nama komite yang mewakili wilayah, bukan satu perusahaan, sehingga manfaat reputasinya dinikmati seluruh produsen yang memenuhi syarat kualitas yang disepakati.",
      },
      {
        title: "Tameng antipemalsuan",
        desc: "Nama yang terdaftar memberi dasar hukum untuk mengejar pengguna di luar wilayah yang menumpang reputasi tanpa ikut memenuhi standar kualitas dan proses produksinya.",
      },
      {
        title: "Akses ekspor lebih percaya diri",
        desc: "Buyer internasional mengenali sistem indikasi geografis, dan sertifikat yang sah mempercepat kepercayaan serta negosiasi di pasar tujuan tanpa perdebatan asal-usul produk.",
      },
      {
        title: "Hak pakai yang jelas",
        desc: "STTIG per produsen menegaskan siapa yang berhak memakai nama, mengurangi gesekan internal antarprodusen dan memperjelas tanggung jawab menjaga kualitas bersama.",
      },
    ],
    process: [
      {
        title: "Konsolidasi komite dan pemetaan wilayah",
        desc: "Kelompok masyarakat, koperasi, atau lembaga penguat dikoordinasikan menjadi komite yang sah, dan batas wilayah produksi dipetakan bersama pakar lokal yang memahami karakter tanah dan iklimnya.",
      },
      {
        title: "Penyusunan buku syarat dan pengujian",
        desc: "Kualitas, reputasi, iklim, tanah, dan proses produksi disusun menjadi buku syarat yang dapat diverifikasi, termasuk pengujian kualitas di laboratorium yang menjadi bukti objektif saat pemeriksa meminta data.",
      },
      {
        title: "Pendaftaran IG sampai penetapan",
        desc: "Permohonan diajukan ke DJKI, pemeriksaan didampingi dari tanggapan administratif sampai substansi, dan IG ditetapkan sebagai milik bersama wilayah.",
      },
      {
        title: "STTIG per produsen dan penjagaan nama",
        desc: "Setiap produsen di dalam wilayah mendapatkan STTIG, dan tata kelola penggunaan nama beserta langkah antipemalsuan disiapkan untuk dijaga jangka panjang.",
      },
    ],
    requirements: [
      "Komite atau kelompok masyarakat yang mewakili wilayah, seperti koperasi atau gabungan kelompok tani",
      "Data kualitas produk dan proses produksi yang bisa diverifikasi",
      "Peta batas wilayah produksi beserta karakter iklim dan tanahnya",
      "Bukti reputasi nama: sejarah, penjualan, penghargaan, atau pemberitaan",
      "Data produsen di dalam wilayah untuk pengurusan STTIG",
      "Kesediaan para produsen menyepakati standar kualitas bersama dalam forum komite",
    ],
    faqs: [
      {
        q: "Berapa biaya pendaftaran Indikasi Geografis?",
        a: "Jasa fasilitasi kami mulai Rp 8 jt, menyesuaikan kompleksitas buku syarat dan kebutuhan pengujian kualitas produknya. Biaya resmi pemerintah relatif ringan, sedangkan pos terbesar biasanya pengujian laboratorium dan koordinasi komite yang melibatkan banyak produsen dengan kepentingan yang berbeda-beda. Semua pos kami buka sejak penawaran agar komite dapat menganggarkan dengan tenang dari awal.",
      },
      {
        q: "Berapa lama proses IG dan STTIG?",
        a: "Pendaftaran IG berjalan 6–18 bulan karena pemeriksaan DJKI terhadap buku syarat cukup mendalam, sementara STTIG per produsen lebih cepat, umumnya 1–3 bulan setelah IG terdaftar. Risiko keterlambatan terbesar adalah buku syarat yang data kualitasnya tidak bisa diverifikasi saat pemeriksaan. Karena itu pengujian dan penyusunan buku syarat kami kerjakan sungguh-sungguh sebelum pengajuan, bukan diperbaiki setelah ditolak. Komite yang tertata rapi sejak awal hampir selalu lebih cepat menembus pemeriksaan.",
      },
      {
        q: "Siapa yang menjadi pemilik Indikasi Geografis?",
        a: "IG adalah milik bersama wilayah, terdaftar atas nama komite yang mewakili kelompok masyarakat, bukan milik satu perusahaan tertentu. Produsen di dalam batas wilayah yang memenuhi syarat kualitas berhak memakai nama lewat STTIG. Struktur inilah yang membuat nilai reputasi tetap terjaga sekaligus dibagi secara adil di antara para produsen.",
      },
    ],
    related: ["pendaftaran-merek", "sni", "hak-cipta-paten", "franchise"],
  },
  {
    slug: "bujp-jasa-keamanan",
    tagline:
      "Keamanan yang dijual kepada orang lain harus berizin, karena kepercayaan klien selalu dimulai dari legalitas.",
    heroSub:
      "Pendirian dan perizinan badan usaha jasa penunjang keamanan: pemilihan bentuk badan dan KBLI yang benar, sertifikasi Gada personel, SOP operasional, hingga registrasi dan izin operasional ke Kepolisian.",
    timeline: "1–3 bulan",
    intro: [
      "Perusahaan penyedia petugas keamanan adalah badan usaha jasa penunjang keamanan (BUJP), dan usaha ini tidak bisa dibuka sembarangan: dasarnya UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia yang mengatur jenis jasa penunjang keamanan, dengan Peraturan Kepala Kepolisian tentang pengawasan dan pembinaan BUJP serta PP No. 8 Tahun 2021 tentang kewenangan berusaha yang menempatkan sektor ini di bawah pembinaan langsung Kepolisian. Bentuk badannya PT atau koperasi, KBLI-nya jasa penunjang keamanan, dan personelnya wajib bersertifikat Gada Pratama, Madya, atau Utama dari pelatihan yang terakreditasi Polri. Registrasi atau izin operasional BUJP diurus ke pihak Kepolisian melalui Direktorat Sabhara dengan sistem pelaporan terkini, dan tanpa lapisan ini kegiatan pengamanan berjalan di luar payung hukum meski badan usahanya sudah berdiri, NIB sudah terbit, dan kantor sudah beroperasi penuh.",
      "Kesalahan yang paling sering terjadi: pendiri membuka usaha dengan KBLI umum karena terasa lebih mudah, lalu saat kontrak dengan klien korporasi masuk tahap audit vendor, legalitas ditolak karena KBLI tidak mencerminkan jasa penunjang keamanan yang menjadi objek kontrak. Kesalahan kedua: personel dikerahkan tanpa sertifikat Gada, dan kepolisian berhak menghentikan kegiatan yang tidak sesuai ketentuan di tengah penugasan. Ketiga, banyak yang menganggap NIB sudah menyelesaikan semuanya, padahal registrasi BUJP ke Polri adalah lapisan tersendiri yang tidak otomatis mengikuti OSS. Akibatnya kontrak dibatalkan, pembayaran ditahan, dan reputasi yang baru dibangun langsung retak di depan klien pertama, sementara pesaing yang legalitasnya rapi mengambil posisi itu tanpa hambatan.",
      "Kami menata dari fondasi: pemilihan bentuk badan dan KBLI yang tepat sejak akta, NIB dan perizinan dasar melalui OSS, penjadwalan pelatihan dan sertifikasi Gada bagi personel, sampai registrasi BUJP ke Polri sampai terbit. SOP operasional dan template kontrak kerja personel kami siapkan agar hubungan kerja tahan pemeriksaan ketenagakerjaan, dan peta perizinan cabang antardaerah kami susun bila ekspansi masuk rencana. Hasilnya satu alur legalitas utuh yang bisa Anda tunjukkan ke meja audit vendor mana pun tanpa perlu menjelaskan kekurangan apa pun di tengah negosiasi.",
    ],
    benefits: [
      {
        title: "KBLI benar sejak akta",
        desc: "Jasa penunjang keamanan tertulis tepat sejak pendirian atau perubahan akta sehingga audit vendor tidak menolak legalitas Anda saat kontrak besar masuk ke meja negosiasi.",
      },
      {
        title: "Personel bersertifikat Gada",
        desc: "Pelatihan terakreditasi Polri dijadwalkan dan dilacak per personel, dari Pratama hingga Utama, sesuai kebutuhan kontrak dan struktur tarif yang Anda tawarkan ke klien.",
      },
      {
        title: "Registrasi Polri terbit",
        desc: "Registrasi BUJP diurus ke Direktorat Sabhara sampai terbit, bukan berhenti di NIB, sehingga operasional berjalan di bawah payung yang benar sejak hari pertama penugasan.",
      },
      {
        title: "Kontrak dan SOP patuh",
        desc: "Template kontrak kerja personel dan SOP operasional disiapkan sehingga hubungan kerja patuh ketenagakerjaan dan tahan pemeriksaan dari siapa pun yang datang.",
      },
      {
        title: "Siap ekspansi cabang",
        desc: "Kewenangan usaha dan peta perizinan cabang antardaerah disusun sejak awal agar pertumbuhan tidak tertahan oleh kekurangan dokumen yang baru disadari terlambat.",
      },
    ],
    process: [
      {
        title: "Pemilihan badan dan KBLI",
        desc: "Bentuk badan usaha ditetapkan dan KBLI jasa penunjang keamanan dipastikan sejak akta pendirian atau perubahan akta, dengan struktur pengurus yang benar.",
      },
      {
        title: "NIB dan perizinan dasar",
        desc: "NIB diterbitkan melalui OSS-RBA sesuai PP 8/2021 beserta perizinan dasar yang menyertainya sesuai kewenangan usaha jasa keamanan.",
      },
      {
        title: "Sertifikasi Gada personel",
        desc: "Personel dijadwalkan ke pelatihan terakreditasi Polri dan sertifikasi Gada Pratama, Madya, atau Utama dikoordinasikan sampai diterbitkan sesuai kebutuhan tim dan jadwal kontrak yang masuk.",
      },
      {
        title: "Registrasi BUJP dan pasca-terbit",
        desc: "Registrasi ke Direktorat Sabhara diurus sampai terbit, lalu SOP operasional, kontrak kerja personel, dan peta perizinan cabang disiapkan untuk operasional yang tuntas.",
      },
    ],
    requirements: [
      "Identitas pendiri dan struktur pengurus badan usaha",
      "Rencana usaha: jenis jasa penunjang keamanan yang ditawarkan dan wilayah operasi",
      "Data personel beserta rencana jumlah dan kualifikasi Gada yang dituju beserta penugasan yang direncanakan",
      "Alamat kantor dan fasilitas operasional",
      "Draf SOP keamanan bila sudah ada, atau kami bantu susun dari awal",
      "Daftar klien atau rencana pasar yang dituju untuk menentukan jenis jasa yang tepat didaftarkan",
    ],
    faqs: [
      {
        q: "Berapa biaya mendirikan dan mengurus BUJP?",
        a: "Jasa pendampingan kami mulai Rp 4,5 jt, tertulis penuh di penawaran, terpisah dari biaya notaris, PNBP, dan biaya pelatihan Gada per personel yang dibayar ke penyelenggara pelatihannya. NIB dan perizinan dasar melalui OSS tidak dikenai biaya negara. Kami rincikan setiap pos agar anggaran Anda bisa dihitung sejak awal dan tidak ada biaya yang muncul tiba-tiba.",
      },
      {
        q: "Berapa lama sampai BUJP bisa beroperasi?",
        a: "Secara umum 1–3 bulan tergantung kecepatan pendirian badan dan ketersediaan jadwal pelatihan Gada. Risiko terbesar adalah beroperasi sebelum registrasi Polri terbit, karena kepolisian berhak menghentikan kegiatan yang berjalan tanpa payung yang benar dan klien berhak membatalkan kontrak. Kami susun urutannya agar tidak ada personel dikerahkan di luar ketentuan sedikit pun.",
      },
      {
        q: "Apakah BUJP boleh membekali personel dengan senjata api?",
        a: "Tidak untuk jasa penunjang keamanan umum. Kelengkapan dan barang operasional keamanan mengikuti ketentuan Kepolisian, dan jenis jasa tertentu memiliki persyaratan tersendiri. Kami pastikan kelengkapan yang direncanakan sesuai dengan kategori jasa yang Anda daftarkan sejak awal. Bila rencana kelengkapan Anda menyentuh jenis jasa khusus, kami periksa dulu kategori yang tepat sebelum pengajuan.",
      },
    ],
    related: ["pendirian-pt", "nib-oss", "bnsp", "iso"],
  },
  {
    slug: "izin-limbah-b3",
    tagline:
      "Bahan berbahaya tidak memberi kelonggaran; ia hanya memberi prosedur, dan prosedur itu menyelamatkan.",
    heroSub:
      "Persetujuan teknis penyimpanan, kontrak pengelolaan berizin, manifest elektronik, dan laporan berkala bagi generator limbah B3: pabrik, bengkel, galvanis, percetakan, laboratorium, rumah sakit, hingga SPBU yang menghasilkan sisa produk dan pengendapan.",
    timeline: "1–3 bulan tergantung jenis dan volume limbah",
    intro: [
      "Setiap usaha yang menghasilkan limbah B3, dari pabrik, bengkel, galvanis, percetakan, laboratorium, rumah sakit, sampai SPBU, memikul tanggung jawab mutlak atas limbahnya sejak lahir sampai musnah. Dasar hukumnya UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup, yang Pasal 88 menetapkan tanggung jawab mutlak tersebut, dengan PP No. 22 Tahun 2021 sebagai aturan pelaksanaannya termasuk ketentuan penyimpanan sementara, serta peraturan Menteri LHK tentang tata cara dan persyaratan pengelolaan limbah B3. Alat kerjanya satu rangkaian: identitas dan klasifikasi limbah beserta kodenya, persetujuan teknis tempat penyimpanan sementara yang memenuhi standar bangunan dan label, kontrak dengan transporter serta pengolah atau pemusnah berizin, manifest elektronik untuk setiap pengiriman, dan laporan pengelolaan berkala melalui sistem pelaporan KLHK, tanpa satu pun mata rantai yang boleh bolong. Penyimpanan sendiri punya jam pasir: umumnya maksimal 12 bulan sebelum limbah harus berpindah ke pengelola berizin, dan penghitungannya dimulai sejak limbah dihasilkan, bukan sejak TPS selesai dibangun.",
      "Kesalahan yang paling mahal adalah menganggap persoalan selesai saat limbah masuk truk: bila transporter atau pengolah ternyata tidak berizin, tanggung jawab mutlak tetap melekat pada generator sampai limbah benar-benar dimusnahkan, dan sanksinya berlaku surut ke atasnya. TPS yang dibangun tanpa persetujuan teknis membuat seluruh rantai dinilai tidak patuh saat pemeriksaan lingkungan, meski limbahnya dikirim rutin setiap bulan. Manifest yang tidak diisi dan laporan LAPB3 yang tidak konsisten dengan manifest menjadi temuan mudah bagi pemeriksa, dan temuan yang menumpuk berubah menjadi sanksi administratif, denda lingkungan, hingga pidana pada UU 32/2009 dengan besaran yang jauh melebihi seluruh penghematan yang dulu dipuji. Biaya pemulihan lingkungan setelah tercemar selalu jauh melebihi biaya kepatuhan yang dulu ditunda, dan itu belum menghitung reputasi yang ikut tercemar.",
      "Kami mulai dari inventarisasi: limbah apa yang dihasilkan, berapa volume, dan kodenya apa, lalu desain TPS disiapkan untuk lolos persetujuan teknis ke pemda terkait, dari denah sampai penandaan berbahaya. Rantai pengelolaan kami susun hanya dari transporter dan pengolah berizin, dengan manifest elektronik terisi untuk setiap perpindahan dan laporan LAPB3 terjadwal dua kali dalam satu tahun sesuai ketentuan pelaporan. Protokol respons tumpahan dan rencana pengurangan limbah kami susun sebagai bagian tata kelola, sehingga saat pemeriksaan lingkungan datang, dokumen Anda berbicara sebelum pertanyaan selesai dibacakan.",
    ],
    benefits: [
      {
        title: "Tanggung jawab mutlak terkelola",
        desc: "Dokumentasi dari titik lahir sampai musnah limbah tersusun rapi, sehingga tanggung jawab mutlak Pasal 88 UU 32/2009 terlindungi dengan bukti, bukan dengan niat baik semata.",
      },
      {
        title: "TPS lolos persetujuan teknis",
        desc: "Standar bangunan, label, dan tata letak disiapkan sesuai peraturan sejak desain, bukan ditempel setelah pemeriksaan menemukan kekurangan di lapangan saat kunjungan.",
      },
      {
        title: "Rantai penuh izin",
        desc: "Transporter dan pengolah diperiksa izinnya sebelum kontrak ditandatangani, sehingga limbah tidak berpindah ke tangan yang membuat Anda ikut tersandera atas kesalahan pihak ketiga.",
      },
      {
        title: "Manifest dan LAPB3 konsisten",
        desc: "Setiap pengiriman tercatat elektronik dan laporan berkala cocok dengan manifest, tanpa selisih yang bisa digali lebih dalam oleh pemeriksa yang teliti.",
      },
      {
        title: "Siap saat pemeriksaan datang",
        desc: "Protokol tumpahan, rencana pengurangan, dan arsip pengelolaan tersedia rapi setiap kali pihak lingkungan meminta, tanpa kejar-kejaran dokumen yang berujung panik.",
      },
    ],
    process: [
      {
        title: "Inventarisasi dan klasifikasi limbah",
        desc: "Jenis, volume, dan kode limbah B3 ditetapkan, termasuk aliran yang membutuhkan jalur khusus seperti oli bekas dan limbah infeksius dari fasilitas kesehatan.",
      },
      {
        title: "Desain TPS dan persetujuan teknis",
        desc: "TPS disiapkan sesuai standar bangunan dan label, lalu persetujuan teknis penyimpanan sementara diurus ke pemda terkait sampai terbit.",
      },
      {
        title: "Kontrak rantai dan manifest elektronik",
        desc: "Transporter dan pengolah berizin dikontrakkan setelah izinnya diverifikasi, dan setiap pengiriman dilengkapi manifest elektronik yang tercatat di sistem dan bisa ditelusuri saat pemeriksaan.",
      },
      {
        title: "Laporan berkala dan tata kelola berjalan",
        desc: "LAPB3 dilaporkan terjadwal dua kali setahun, rencana pengurangan dan protokol respons tumpahan disusun, dan kalender kepatuhan berjalan sepanjang tahun.",
      },
    ],
    requirements: [
      "Data proses usaha dan jenis limbah B3 yang dihasilkan beserta perkiraan volume",
      "Denah dan kondisi tempat penyimpanan sementara yang ada saat ini",
      "Dokumen perusahaan dan izin lingkungan yang dimiliki, seperti AMDAL, UKL-UPL, atau SPPL bila ada",
      "Kontrak transporter atau pengolah bila sudah ada, untuk kami tinjau izinnya",
      "Tim pengelola lingkungan dan data personel yang menangani limbah",
      "Perkiraan jadwal pengangkatan limbah dan ruang penyimpanan yang tersedia hari ini",
    ],
    faqs: [
      {
        q: "Berapa biaya pengurusan pengelolaan limbah B3?",
        a: "Jasa pendampingan kami mulai Rp 6,5 jt, menyesuaikan jenis dan jumlah aliran limbah, tertulis penuh di penawaran. Terpisah dari itu ada biaya pemerintah untuk persetujuan teknis sesuai PNBP daerah, serta tarif transporter dan pengolah yang dihitung per ton atau per aliran limbah. Tarif pengolahan sangat bervariasi antarjenis limbah, dan kami bantu mengantongi angka yang realistis sebelum kontrak ditandatangani sehingga anggaran lingkungan bisa direncanakan tahunan.",
      },
      {
        q: "Berapa lama proses dan apa risiko bila ditunda?",
        a: "Secara umum 1–3 bulan tergantung jenis dan volume limbah serta kesiapan TPS. Risiko menunda bukan sekadar denda: tanggung jawab mutlak membuat Anda tetap terikat pada limbah yang dikelola pihak tidak berizin, dan biaya pemulihan lingkungan bila tercemar jauh melebihi seluruh biaya kepatuhan. Sanksi beratnya bahkan sampai pidana pada UU 32/2009. Karena itu kepatuhan kami tata dari hari pertama, bukan setelah surat peringatan datang.",
      },
      {
        q: "Apakah semua limbah B3 dikelola dengan cara yang sama?",
        a: "Tidak, dan di sinilah klasifikasi kode limbah menentukan jalurnya. Beberapa limbah punya skema khusus, misalnya oli bekas yang memasuki jalur sirkulasi, sementara limbah tertentu harus dimusnahkan di pengolah bersertifikat dengan persyaratan pengangkutan khusus. Kami petakan setiap aliran limbah ke pengelola yang izinnya memang mencakup jenis tersebut.",
      },
    ],
    related: ["izin-lingkungan", "laporan-keberlanjutan", "p2k3-panitia-k3", "laboratorium-uji-produk"],
  },
  {
    slug: "skttk-personel-konstruksi",
    tagline:
      "Proyek besar dibangun oleh nama-nama yang terdaftar, bukan hanya oleh mesin yang bagus.",
    heroSub:
      "Sertifikasi dan pendaftaran personel jasa konstruksi di LPJK: SKA untuk ahli, SKT untuk terampil, TDK untuk terampil khusus, hingga SKTTK yang wajib melekat pada personel di lapangan proyek beserta perpanjangannya.",
    timeline: "2–6 minggu tergantung kelengkapan riwayat",
    intro: [
      "Hukum jasa konstruksi menuntut dua hal yang saling menopang: perusahaan yang berkualifikasi dan personel yang terdaftar. Dasarnya UU No. 2 Tahun 2017 tentang Jasa Konstruksi dengan PP No. 22 Tahun 2020 tentang Penyelenggaraan Jasa Konstruksi, serta peraturan Menteri PUPR tentang uji kelayakan profesional teknis, terampil teknis, dan terampil khusus beserta tata cara tanda daftar pada sistem LPJK. Untuk personel, jalurnya begini: Sertifikat Keahlian (SKA) bagi profesional teknis, Sertifikat Ke Terampilan (SKT) bagi terampil teknis, dan Tanda Daftar terampil khusus (TDK) bagi terampil khusus, semuanya diperoleh melalui uji kelayakan LPJK berbasis matrik kualifikasi. Setelah sertifikat terbit, personel wajib memiliki SKTTK, tanda terdaftar yang menjadi legalitas di lapangan proyek, dan inilah yang diperiksa pada evaluasi administrasi tender maupun pengawasan proyek di lapangan.",
      "Kesalahan yang paling sering menggugurkan: perusahaan merasa cukup dengan SBU, padahal evaluasi administrasi lelang memeriksa kesesuaian personel dengan kualifikasi yang dituntut, dan bila tidak ada SKA atau SKT yang cocok, dokumen gugur sebelum kualifikasi teknis sempat dibaca satu halaman pun. Kesalahan kedua adalah memakai sertifikat milik orang lain, praktik yang terlihat praktis sampai LPJK atau evaluasi lapangan memeriksa kesesuaian personel dengan pekerjaan, dan akibatnya bukan sekadar gugur tetapi tercatat buruk di sistem yang bisa dilihat pihak lain. Ketiga, personel bekerja di proyek tanpa SKTTK: bila terjadi insiden keselamatan, posisi hukum perusahaan melemah karena legalitas personel yang menangani pekerjaan tidak tertutup dengan benar, dan klaim asuransi pun bisa diperdebatkan justru di saat perusahaan paling membutuhkan perlindungan.",
      "Kami menata personel seperti menata dokumen perusahaan: kebutuhan kualifikasi dipetakan dari rencana tender atau profil SBU, lalu setiap personel dinilai terhadap matrik kualifikasi berdasarkan pendidikan, pengalaman, dan rapor. Uji kelayakan dijadwalkan, SKA, SKT, atau TDK diurus sampai terbit, lalu SKTTK diterbitkan untuk setiap personel dan kalender perpanjangannya dikunci. Untuk perusahaan dengan tim besar, pengurusan paket korporasi membuat seluruh tim menyamakan kualifikasi SBU sekaligus, sehingga dokumen lelang berikutnya tidak lagi dicari satu per satu di tengah tenggat lelang yang bergerak cepat.",
    ],
    benefits: [
      {
        title: "Tim sejajar dengan SBU",
        desc: "Kualifikasi personel dipetakan terhadap profil SBU sehingga keduanya saling menguatkan di evaluasi tender dan tidak ada kualifikasi yang menggantung tanpa pemiliknya saat evaluasi.",
      },
      {
        title: "Lelang tidak gugur administratif",
        desc: "SKA, SKT, dan TDK yang cocok dengan kualifikasi yang dituntut tersedia sebelum dokumen lelang disusun, bukan dicari panik setelah pengumuman keluar.",
      },
      {
        title: "Rapor tertata rapi",
        desc: "Riwayat pendidikan, pengalaman, dan penugasan disusun sesuai matrik kualifikasi, bukan ditebak-tebak saat evaluasi menuntut bukti dalam waktu yang sempit.",
      },
      {
        title: "Risiko K3 lebih tertutup",
        desc: "Personel di lapangan yang terdaftar membuat posisi hukum perusahaan dan klaim asuransi lebih kuat bila terjadi insiden keselamatan kerja yang tidak terduga.",
      },
      {
        title: "Perawatan terjadwal",
        desc: "Perpanjangan dan penyesuaian aturan yang berlaku terkini masuk kalender, tanpa sertifikat kedaluwarsa yang baru disadari di momen lelang yang paling penting.",
      },
    ],
    process: [
      {
        title: "Pemetaan kebutuhan kualifikasi",
        desc: "Rencana tender dan profil SBU dipetakan ke matrik kualifikasi, dan daftar personel yang perlu tersertifikasi ditetapkan beserta kualifikasi tujuannya.",
      },
      {
        title: "Kelengkapan riwayat dan rapor",
        desc: "Pendidikan, pengalaman, dan penugasan disusun per personel sesuai matrik, lengkap dengan dokumen pendukung yang dapat diverifikasi LPJK pada uji kelayakan.",
      },
      {
        title: "Uji kelayakan SKA, SKT, dan TDK",
        desc: "Peserta dijadwalkan ke uji kelayakan LPJK dan didampingi dari administrasi sampai sertifikat terbit tanpa tahapan yang terlewat.",
      },
      {
        title: "SKTTK terbit dan perawatan",
        desc: "Tanda terdaftar diterbitkan per personel, lalu kalender perpanjangan dan penyesuaian aturan terkini dijaga tetap berjalan sepanjang masa kerja tim.",
      },
    ],
    requirements: [
      "Data pribadi personel: identitas, ijazah, dan riwayat pekerjaan",
      "Rapor atau bukti pengalaman proyek sesuai kualifikasi yang dituju",
      "SKA atau SKT lama beserta bukti penugasan bila mengajukan perpanjangan",
      "Dokumen perusahaan untuk pengurusan paket korporasi",
      "Sertifikat pelatihan atau bukti kompetensi tambahan bila ada",
      "Target jadwal tender atau proyek agar pengurusan dipercepat bila diperlukan",
    ],
    faqs: [
      {
        q: "Berapa biaya pengurusan SKA, SKT, dan SKTTK?",
        a: "Jasa pendampingan kami mulai Rp 1,5 jt per personel, menyesuaikan kualifikasi yang dituju dan kondisi rapornya, tertulis penuh di penawaran. Terpisah dari itu ada biaya uji kelayakan yang ditetapkan LPJK sesuai jenis sertifikat dan kualifikasinya. Untuk paket korporasi dengan banyak personel, kami susun penawaran yang lebih efisien sekaligus. Angka totalnya kami terangkan per komponen agar Anda bisa membandingkan dengan penawaran lain secara adil.",
      },
      {
        q: "Berapa lama proses dan apa risiko bila personel belum terdaftar?",
        a: "Secara umum 2–6 minggu tergantung kelengkapan riwayat dan jadwal uji kelayakan. Risiko tanpa personel terdaftar itu ganda: dokumen lelang bisa gugur administratif sebelum dinilai, dan bila terjadi insiden keselamatan, legalitas personel yang lemah mempersulit posisi hukum serta klaim asuransi. Karena itu kami sarankan menuntaskan sebelum dokumen tender disusun.",
      },
      {
        q: "Apa bedanya SKA, SKT, TDK, dan SKTTK?",
        a: "SKA adalah sertifikat keahlian bagi profesional teknis, SKT sertifikat bagi terampil teknis, dan TDK adalah tanda daftar bagi terampil khusus, semuanya lahir dari uji kelayakan LPJK. SKTTK adalah tanda terdaftar personel jasa konstruksi yang wajib dimiliki setelah sertifikat terbit dan menjadi legalitas kerja di lapangan proyek. Kami urus keduanya dalam satu alur agar tidak ada personel yang terhenti di tengah jalan saat proyek sudah di tangan.",
      },
    ],
    related: ["sbu-konstruksi", "bnsp", "pbg-slf", "tender-ready-program"],
  },
];

export const ekspansi165Enrichment: Record<string, ServiceEnrichment> = {
  "kitap-pasangan-investor": {
    whoFor: [
      "Orang asing yang menikah dengan WNI dan ingin menetap jangka panjang di Indonesia tanpa mengulang perpanjangan setiap tahun",
      "Direktur utama atau komisaris PT PMA dengan modal disetor yang mengelola bisnisnya langsung dari Indonesia",
      "Pensiunan usia 55 tahun ke atas dengan bukti penghasilan atau pendepositan yang ingin beristirahat di Indonesia dalam jangka panjang",
      "Pemegang KITAS yang statusnya akan berakhir dan ingin naik ke izin tinggal tetap lima tahun agar tidak berhenti di tengah rencana",
    ],
    deliverables: [
      "KITAP lima tahun terbit dengan kartu izin resmi yang dapat ditunjukkan di bank dan instansi",
      "e-POA dan dokumen persetujuan elektronik terarsip rapi untuk riwayat keimigrasian Anda",
      "Izin masuk kembali terjadwal beserta kalender keimigrasian lima tahun ke depan yang bisa Anda akses",
      "Dokumen asing diterjemahkan dan dilegalisasi sesuai format yang diterima imigrasi",
      "Panduan kewajiban pasca-terbit: pembaruan data, laporan, dan perubahan status perkawinan atau perseroan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 4,5 jt, tertulis penuh di penawaran" },
      { item: "Biaya resmi keimigrasi (VTT, KITAS, KITAP, izin masuk kembali)", note: "sesuai PNBP per jalur, lama masa berlaku, dan lokus kantor imigrasi penerbit" },
      { item: "Terjemahan tersumpah dan legalisasi dokumen asing", note: "per berkas, sesuai jumlah dokumen dari negara asal" },
      { item: "Pengurusan pra-syarat VTT atau KITAS", note: "bila belum dimiliki, dihitung terpisah sesuai jalurnya" },
      { item: "Konsultasi strategi status campuran perkawinan, perseroan, atau pensiun", note: "termasuk dalam jasa utama tanpa biaya tambahan" },
    ],
    legalBasis: [
      "UU No. 6 Tahun 2011 tentang Keimigrasian beserta perubahannya, antara lain ketentuan izin tinggal tetap pada Pasal 54–58",
      "PP No. 31 Tahun 2013 jo. PP No. 45 Tahun 2024 tentang Pengendalian Orang Asing dan Pengendalian Aktivitas Keimigrasian",
      "Peraturan Menteri Hukum dan HAM tentang tata cara pemberian izin tinggal tetap",
      "Peraturan Menteri Hukum dan HAM tentang perizinan elektronik keimigrasian melalui evisa.imigrasi.go.id beserta ketentuan PNBP",
    ],
  },

  "skb-relief-pajak-treaty": {
    whoFor: [
      "Pihak luar negeri yang menerima jasa, sewa, royalti, atau dividen dari Indonesia dalam jumlah berulang sepanjang tahun",
      "Perusahaan di Indonesia yang membayar jasa atau bunga ke luar negeri dan ingin pemotongannya benar sejak awal",
      "Perusahaan dengan pinjaman luar negeri yang beban potongnya terasa pada setiap angsuran bunga",
      "Investor asing melalui entitas di Indonesia yang mulai menerima dividen dan tidak ingin potongannya berlebihan",
    ],
    deliverables: [
      "SKB terbit dari DJP sesuai jenis penghasilan yang dipetakan dari kontrak",
      "Analisis P3B tertulis: pasal yang berlaku, tarif perjanjian, dan syarat pemberian manfaat",
      "DGT-1 dan DGT-2 terkelola dengan kalender keberlakuan agar tidak kedaluwarsa diam-diam",
      "Permohonan restitusi kelebihan potong terkirim dan dipantau sampai selesai",
      "Panduan pemotongan untuk pembayaran berikutnya agar tidak salah tarif lagi pada kontrak berikutnya",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 3,5 jt per pihak penerima penghasilan" },
      { item: "Permohonan SKB per jenis penghasilan", note: "termasuk dalam jasa utama untuk skenario umum" },
      { item: "Pendampingan restitusi kelebihan potong", note: "menyesuaikan nilai sengketa dan kompleksitas pembukuan" },
      { item: "Terjemahan dan legalisasi DGT-1 atau DGT-2", note: "per berkas sesuai negara mitra" },
      { item: "Koordinasi dengan penasihat pajak pihak luar negeri", note: "termasuk bila diperlukan bukti substansi" },
    ],
    legalBasis: [
      "UU No. 7 Tahun 1983 tentang Pajak Penghasilan jo. perubahannya termasuk UU No. 7 Tahun 2021 (PPh Pasal 4 ayat 2, Pasal 23, Pasal 26, dan SKB)",
      "UU No. 28 Tahun 2007 tentang Ketentuan Umum dan Tata Cara Perpajakan jo. UU No. 7 Tahun 2021 (restitusi)",
      "UU No. 4 Tahun 2021 tentang Pengesahan Multilateral Convention to Implement Tax Treaty Related Measures (MLI) untuk penerapan P3B",
      "PMK No. 249/PMK.03/2008 tentang pengurangan pemotongan dan pembebasan PPh bagi wajib pajak luar negeri dengan bukti domisili DGT-1 dan DGT-2",
    ],
  },

  "keberatan-banding-pajak": {
    whoFor: [
      "Perusahaan yang baru menerima SKPKB dari pemeriksaan pajak dan ingin membantah sebagian atau seluruh temuan",
      "Wajib pajak yang keberatannya ditolak DJP dan menimbang banding ke Pengadilan Pajak",
      "Perusahaan yang tagihannya berat untuk dibayar sementara proses sengketa belum selesai",
      "Wajib pajak yang menerima SP2DK atau penindakan administratif lain yang angkanya dipersoalkan sampai ke dasarnya",
    ],
    deliverables: [
      "Analisis tertulis SPHP butir demi butir beserta peluang per temuan dan catatan risikonya",
      "Keberatan tersusun lengkap dengan bukti dan diajukan dalam batas 30 hari",
      "Dokumen banding ke Pengadilan Pajak yang siap sidang bila keberatan ditolak",
      "Permohonan penundaan penagihan agar kas tidak tersedot saat sengketa berjalan",
      "Kalender tenggat sengketa: jawaban DJP, masa banding, dan kewajiban lanjutan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 5 jt per tahap sengketa" },
      { item: "Biaya perdata banding ke Pengadilan Pajak", note: "Rp 200.000 sesuai ketentuan" },
      { item: "Analisis SPHP mendalam untuk sengketa bernilai besar", note: "menyesuaikan jumlah temuan dan kompleksitas" },
      { item: "Pengurusan penundaan penagihan", note: "termasuk dalam pendampingan tahap terkait" },
      { item: "Pendampingan sidang banding", note: "menyesuaikan jadwal sidang dan kompleksitas materi" },
    ],
    legalBasis: [
      "UU No. 28 Tahun 2007 tentang Ketentuan Umum dan Tata Cara Perpajakan jo. UU No. 7 Tahun 2021 (keberatan, banding, TERA, dan penundaan penagihan)",
      "PP No. 17 Tahun 2021 tentang peraturan pelaksanaan UU KUP termasuk tata cara di Pengadilan Pajak",
      "PMK No. 205/PMK.03/2015 tentang tata cara keberatan dan pengurangan",
      "PMK No. 204/PMK.03/2015 dan PMK No. 203/PMK.03/2015 tentang tata cara banding serta sengketa pajak lainnya",
    ],
  },

  "indikasi-geografis-sttig": {
    whoFor: [
      "Komite, koperasi, atau gabungan produsen yang ingin mendaftarkan nama asal produk wilayahnya ke DJKI",
      "Produsen di dalam wilayah IG yang sudah ditetapkan dan membutuhkan STTIG untuk memakai nama secara sah",
      "Pemerintah daerah atau lembaga daerah yang mengembangkan produk unggulan berbasis asal sebagai aset daerah",
      "Eksportir produk asal yang buyer-nya menanyakan perlindungan indikasi geografis sebelum kontrak ditandatangani",
    ],
    deliverables: [
      "Buku syarat IG lengkap: kualitas, reputasi, peta batas, iklim, tanah, dan proses produksi",
      "Komite terkonsolidasi dengan struktur dan tata kelola tertulis yang siap diperiksa",
      "IG terdaftar dan ditetapkan di DJKI atas nama komite wilayah",
      "STTIG per produsen di dalam wilayah sehingga hak pakai menjadi jelas",
      "Tata kelola penggunaan nama beserta langkah antipemalsuan yang dirancang untuk jangka panjang",
    ],
    costs: [
      { item: "Jasa fasilitasi DIGIMAN.ID", note: "mulai Rp 8 jt, menyesuaikan kompleksitas buku syarat" },
      { item: "Pengujian kualitas di laboratorium", note: "per parameter, sesuai kebutuhan buku syarat" },
      { item: "Biaya resmi pendaftaran dan penetapan di DJKI", note: "sesuai PNBP yang berlaku" },
      { item: "Pengurusan STTIG per produsen", note: "ringan, menyesuaikan jumlah produsen" },
      { item: "Koordinasi komite dan pendampingan lapangan", note: "termasuk dalam jasa utama" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
      "PP No. 51 Tahun 2007 tentang Indikasi Geografis",
      "Peraturan Menteri Hukum dan HAM No. 60 Tahun 2016 tentang tata cara pendaftaran Indikasi Geografis",
      "Peraturan Menteri Hukum dan HAM No. 63 Tahun 2016 tentang tata cara pemberian Sertifikat Tanda Tempat Indikasi Geografis",
    ],
  },

  "bujp-jasa-keamanan": {
    whoFor: [
      "Pendiri perusahaan jasa pengamanan baru yang ingin legalitasnya benar sejak hari pertama berdiri",
      "Korporasi yang memisahkan unit pengamanan internalnya menjadi badan usaha tersendiri yang bisa menjual jasa",
      "BUJP lama yang KBLI, personel, atau registrasinya belum sesuai ketentuan terkini dan rawan ditolak audit vendor",
      "BUJP yang berencana ekspansi cabang ke daerah lain dengan perizinan yang tertata",
    ],
    deliverables: [
      "Badan usaha berdiri dengan KBLI jasa penunjang keamanan yang tepat sejak akta pendirian",
      "NIB dan perizinan dasar terbit melalui OSS-RBA sesuai kewenangan usaha",
      "Daftar personel bersertifikat Gada beserta bukti pelatihan yang terarsip untuk audit vendor",
      "Registrasi BUJP ke Polri terbit lewat Direktorat Sabhara",
      "SOP operasional, template kontrak kerja personel, dan peta perizinan cabang",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 4,5 jt sesuai skala usaha" },
      { item: "Biaya notaris pendirian atau perubahan akta", note: "menyesuaikan bentuk badan dan struktur pengurus" },
      { item: "Pelatihan dan sertifikasi Gada per personel", note: "dibayar ke penyelenggara pelatihan terakreditasi Polri" },
      { item: "NIB dan perizinan dasar OSS", note: "tanpa biaya negara" },
      { item: "Registrasi BUJP ke Polri", note: "sesuai PNBP dan ketentuan yang berlaku" },
    ],
    legalBasis: [
      "UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia, antara lain jenis jasa penunjang keamanan pada Pasal 58",
      "Peraturan Kepala Kepolisian Negara RI No. 24 Tahun 2007 tentang Pengawasan dan Pembinaan Badan Usaha Jasa Penunjang Keamanan",
      "PP No. 8 Tahun 2021 tentang Kewenangan Pemerintah Pusat dan Kewenangan Pemerintah Daerah sesuai Ketentuan Umum Pemerintah Daerah",
      "Peraturan Kepolisian tentang pelatihan dan sertifikasi personel keamanan Gada Pratama, Madya, dan Utama",
    ],
  },

  "izin-limbah-b3": {
    whoFor: [
      "Pabrik dan perusahaan kawasan industri yang menghasilkan limbah proses dan sisa bahan baku setiap hari kerjanya",
      "Bengkel, galvanis, dan percetakan dengan aliran limbah khusus seperti oli bekas dan sisa tinta",
      "Laboratorium dan rumah sakit dengan limbah infeksius dan kimia yang jalurnya diatur khusus",
      "SPBU dan pemilik instalasi bahan bakar dengan sisa produk dan pengendapan tangki yang terakumulasi",
    ],
    deliverables: [
      "Inventarisasi dan klasifikasi kode limbah B3 per aliran dengan bukti uji bila perlu",
      "Persetujuan teknis TPS penyimpanan sementara terbit dari pemda",
      "Kontrak transporter dan pengolah berizin yang izinnya terverifikasi sebelum ditandatangani",
      "Manifest elektronik berjalan dan LAPB3 terlapor dua kali setahun",
      "Protokol respons tumpahan dan rencana pengurangan limbah sebagai bagian tata kelola",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 6,5 jt, menyesuaikan aliran limbah" },
      { item: "Biaya persetujuan teknis ke pemda", note: "sesuai PNBP daerah setempat" },
      { item: "Tarif transporter dan pengolah limbah", note: "per ton atau per aliran, sangat bervariasi antarjenis" },
      { item: "Pengujian karakteristik limbah di laboratorium", note: "bila kode limbah perlu ditetapkan melalui uji" },
      { item: "Pendampingan LAPB3 berkala", note: "termasuk dalam tata kelola berjalan" },
    ],
    legalBasis: [
      "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup (tanggung jawab mutlak Pasal 88)",
      "PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup, termasuk pengelolaan limbah B3",
      "Peraturan Menteri LHK No. 6 Tahun 2021 tentang Tata Cara dan Persyaratan Pengelolaan Limbah B3",
      "Keputusan Menteri LHK tentang inventarisasi limbah B3 sebagai acuan klasifikasi dan kode limbah",
    ],
  },

  "skttk-personel-konstruksi": {
    whoFor: [
      "Kontraktor yang menyiapkan SBU atau dokumen tender dan perlu tim yang kualifikasinya sepadan",
      "Perusahaan konstruksi dengan personel baru yang belum memiliki SKTTK untuk kerja di lapangan proyek",
      "Profesional dan terampil teknis individual yang mengurus sertifikasi untuk dirinya sendiri",
      "Personel dengan sertifikat yang akan atau sudah kedaluwarsa dan membutuhkan perpanjangan sebelum musim tender berikutnya dimulai",
    ],
    deliverables: [
      "SKA, SKT, atau TDK terbit dari uji kelayakan LPJK sesuai kualifikasi tujuan",
      "SKTTK per personel yang melekat sebagai legalitas kerja di lapangan",
      "Pemetaan matrik kualifikasi tim terhadap profil SBU perusahaan",
      "Rapor dan riwayat penugasan tertata rapi per personel untuk evaluasi berikutnya",
      "Kalender perpanjangan seluruh sertifikat tim agar tidak ada yang kedaluwarsa diam-diam",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1,5 jt per personel" },
      { item: "Biaya uji kelayakan LPJK", note: "sesuai jenis sertifikat dan kualifikasi" },
      { item: "Paket korporasi untuk tim banyak personel", note: "penawaran efisien menyesuaikan jumlah" },
      { item: "Penyusunan rapor dan kelengkapan dokumen", note: "termasuk dalam jasa utama" },
      { item: "Perpanjangan dan pendaftaran berikutnya", note: "dihitung sesuai kondisi sertifikat lama" },
    ],
    legalBasis: [
      "UU No. 2 Tahun 2017 tentang Jasa Konstruksi",
      "PP No. 22 Tahun 2020 tentang Perubahan atas PP No. 29 Tahun 2000 tentang Penyelenggaraan Jasa Konstruksi",
      "Peraturan Menteri PUPR No. 10 Tahun 2021 tentang Uji Kelayakan Profesional Teknis, Terampil Teknis, dan Terampil Khusus Jasa Konstruksi",
      "Peraturan Menteri PUPR tentang tanda daftar jasa konstruksi dan tanda terdaftar personel (SKTTK)",
    ],
  },
};
