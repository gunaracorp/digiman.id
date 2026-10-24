import type { ServiceContent } from "./types";

/**
 * Konten editorial — EKSPANSI LAINNYA (3 layanan baru).
 * Kepatuhan OSS (LKPM), kesehatan pangan (SLHS), merek internasional (Madrid).
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const lainnyaEkspansiContent: ServiceContent[] = [
  {
    slug: "lkpm",
    tagline: "Laporan kecil yang menyelamatkan seluruh perizinan Anda.",
    heroSub:
      "Laporan Kegiatan Penanaman Modal (LKPM) tepat waktu dan benar isi — kewajiban periodik semua pelaku usaha ber-NIB, yang diabaikan berujung sanksi, perizinan tertahan, sampai NIB dicabut.",
    timeline: "1–3 hari kerja per periode laporan",
    intro: [
      "Sedikit yang memberi tahu pemilik usaha: sejak NIB terbit, perusahaan Anda WAJIB melaporkan perkembangan penanaman modal dan realisasi kegiatannya secara periodik di OSS-RBA — itulah LKPM (Laporan Kegiatan Penanaman Modal, bekas LKPM BKPM). Perusahaan kecil melaporkan setiap 6 bulan, menengah setiap 3 bulan, besar setiap bulan. Kewajiban ini lahir dari UU 25/2007 dan teknisnya diatur Peraturan BKPM 5/2021 — dan sanksi keteledorannya tertulis jelas: teguran tertulis, denda, penahanan perizinan, pembekuan fasilitas, sampai pencabutan NIB.",
      "Yang paling merusak biasanya bukan dendanya, tapi TIMING-nya: perusahaan baru sadar kewajiban ini saat mengajukan perubahan perizinan, penambahan KBLI, fasilitas pajak, atau dalam due diligence oleh investor — dan menemukan riwayat LKPMe kosong bertahun-tahun. Menunggak laporan ke belakang (backlog) menuntut pemulihan data satu per satu, dan selama itu semua pengajuan di OSS bisa tersendat. Laporan juga bukan sekadar isi angka: realisasi investasi, tenaga kerja, produksi — isi yang tidak konsisten dengan NPWP dan dokumen lain memicu pertanyaan lebih jauh.",
      "Kami mengambil alih kewajiban ini secara penuh sebagai layanan berjalan: pemetaan takaran laporan perusahaan Anda (periode, batas waktu), pengumpulan data dengan template sederhana yang tim keuangan Anda cukup isi 10 menit, penyusunan laporan yang konsisten dengan realita pajak & operasional, pengunggahan di OSS-RBA sebelum tenggat, plus bukti laporan terarsip rapi. Untuk perusahaan yang sudah menunggak — jalur pemulihan backlog juga kami tangani sampai riwayat laporan bersih kembali.",
    ],
    benefits: [
      { title: "NIB & perizinan aman", desc: "Riwayat laporan bersih — perubahan izin, KBLI, dan fasilitas di OSS tidak tersendat karena tunggakan." },
      { title: "Sanksi tidak pernah datang", desc: "Teguran, denda, sampai risiko pencabutan NIB hilang dari daftar khawatir Anda — tenggat selalu dikejar pihak kami." },
      { title: "10 menit per periode", desc: "Tim Anda cukup mengisi template sederhana — susunan laporan, konsistensi data, dan pengunggahan urusan kami." },
      { title: "Data konsisten lintas dokumen", desc: "Realisasi investasi & tenaga kerja diselaraskan dengan NPWP dan laporan lain — tidak memicu pertanyaan yang membingungkan." },
      { title: "Siap saat diuji", desc: "Due diligence investor, pengajuan kredit bank, kenaikan kelas skala usaha — riwayat kepatuhan Anda tertata dan terbukti." },
    ],
    process: [
      { title: "Pemetaan kewajiban & kalender", desc: "Skala usaha ditetapkan (kecil/menengah/besar) — periode laporan dan tenggatnya dikunci di kalender kepatuhan." },
      { title: "Template data & alur", desc: "Tim keuangan Anda menerima template ringkas — realisasi investasi, tenaga kerja, produksi terkumpul tanpa repot." },
      { title: "Penyusunan & pengunggahan", desc: "Laporan disusun konsisten, diunggah di OSS-RBA sebelum tenggat — bukti laporan diteruskan ke Anda." },
      { title: "Pantauan & pemulihan (bila perlu)", desc: "Status di OSS dipantau; bila ada tunggakan lama, jalur pelaporan backlog kami kerjakan sampai bersih." },
    ],
    requirements: [
      "NIB aktif & akses akun OSS perusahaan (atau data loginnya — kami bantu pulihkan bila hilang)",
      "Data periodik sederhana: realisasi investasi, jumlah tenaga kerja, perkiraan produksi/omzet",
      "Kontak personel keuangan/administrasi yang memegang data",
      "Laporan pajak terakhir (menjadi rujukan konsistensi — bila ada)",
      "Bila menunggak: periode terakhir yang pernah dilaporkan (bila ingat — kami cek sisanya di sistem)",
    ],
    faqs: [
      { q: "Usaha saya masih kecil dan baru berdiri — apakah benar wajib LKPM juga?", a: "Ya, semua pelaku usaha ber-NIB wajib, termasuk UMKM dan perusahaan yang baru berdiri. Yang berbeda hanya frekuensinya: usaha kecil melaporkan tiap 6 bulan (paling ringan), menengah tiap 3 bulan, besar tiap bulan. Isi laporannya pun sederhana untuk usaha kecil — realisasi investasi dan tenaga kerja. Justru perusahaan muda paling rentan lupa karena tidak ada yang mengingatkan — dan tunggakan baru ketahuan di saat paling tidak tepat: saat butuh perizinan baru atau saat investor memeriksa legalitas." },
      { q: "Perusahaan saya menunggak LKPM bertahun-tahun — apakah bisa dipulihkan tanpa sanksi?", a: "Bisa dipulihkan, dan kecepatan penanganannya menentukan seberapa ringan akibatnya. Jalurnya: melaporkan tunggakan secara berurutan dengan data yang disusun realistis (bukan angka asal isi — konsistensi antar periode dan dengan dokumen lain diperiksa), lalu menyusun tanggapan bila sistem atau instansi mengeluarkan teguran. Strategi terbaik: pulihkan SEBELUM mengajukan perubahan perizinan/fasilitas apa pun, karena saat itu riwayat laporan akan diperiksa. Kami tangani pemulihannya dari pemeriksaan tunggakan di sistem sampai riwayat bersih." },
      { q: "Apa risikonya kalau saya biarkan saja tidak lapor?", a: "Sanksinya berjenjang dan nyata: pertama teguran tertulis, lalu denda, kemudian penahanan pengajuan perizinan di OSS, hingga fasilitas dibekukan dan NIB dicabut (itu artinya seluruh perizinan yang lahir dari NIB ikut goncang). Praktisnya, dampak paling sering terjadi lebih cepat dari sanksi formal: pengajuan apa pun di OSS tertahan, bank dan investor yang melakukan due diligence menemukan riwayat yang kosong, dan kredibilitas perusahaan jadi pertanyaan. Biaya berlangganan laporan kami jauh di bawah kerugian satu kasus penahanan perizinan." },
    ],
    related: ["nib-oss", "pt-pma", "pelaporan-pajak"],
  },
  {
    slug: "higiene-sanitasi",
    tagline: "Dapur yang bersih hati, izin yang bersih status.",
    heroSub:
      "Sertifikat Laik Higiene dan Sanitasi Jasaboga (SLHS) dari Dinas Kesehatan — kelayakan usaha makanan-minuman Anda terjamin dari sisi kebersihan, sebelum inspeksi mengetuk pintu.",
    timeline: "2–5 minggu tergantung kesiapan lokasi",
    intro: [
      "Restoran, kafe, katering, kantin, sampai pabrik pangan — semua usaha yang menyentuh makanan dan minuman untuk orang lain tunduk pada satu tolok ukur: higiene dan sanitasi. Sertifikat Laik Higiene dan Sanitasi Jasaboga (SLHS) diterbitkan Dinas Kesehatan setelah lokasi usaha Anda diperiksa terhadap standar yang kini diatur Permenkes 2/2023: bangunan & fasilitas, sanitasi air dan limbah, pengelolaan bahan pangan, personal higiene pekerja, sampai pengelolaan kebersihan peralatan. Tanpa sertifikat ini, usaha Anda berjalan di atas landasan yang bisa dihentikan sewaktu-waktu oleh pengawasan.",
      "Kesalahan yang paling sering membuat usaha makanan tersandung: menyiapkan sesuatu yang enak untuk lidah tapi tidak disiapkan untuk inspektur — saluran air yang tidak tertutup, rak bahan makanan yang menempel lantai, area cuci tangan tanpa sabun & pengeringan, kamar mandi pekerja yang tidak memenuhi standar, sampai dokumen kesehatan pekerja (termasuk pemeriksaan tinja) yang belum lengkap. Inspeksi pertama yang gagal bukan hanya menunda sertifikat — tetap juga memakan biaya dan menurunkan semangat tim.",
      "Kami menyiapkan lokasi Anda MEMENUHI standar sebelum inspektur datang: audit pra-inspeksi dengan checklist lengkap permenkes, daftar perbaikan prioritas dengan perkiraan biaya (sering kali hanya perbaikan kecil yang membuat beda lolos-tidaknya), pemeriksaan kesehatan pekerja di laboratorium kerja sama, pengajuan ke Dinkes, dan pendampingan hari inspeksi. Setelah terbit, Anda dapat panduan pemeliharaan — sertifikat ini punya masa berlaku dan kondisi yang harus tetap dijaga setiap hari operasional.",
    ],
    benefits: [
      { title: "Lolos inspeksi di kunjungan pertama", desc: "Audit pra-inspeksi memastikan seluruh poin diperiksa tertutup sebelum inspektur datang — tidak gagal karena detail kecil." },
      { title: "Usaha berjalan tanpa henti", desc: "Sertifikat mengunci status laik — pengawasan Dinkes tidak menghentikan operasional di saat paling ramai." },
      { title: "Prasyarat izin lain terbuka", desc: "Izin edar produk, kerja sama retail, dan pendaftaran platform mengharuskan bukti higiene — dokumen Anda siap duluan." },
      { title: "Percaya diri di mata pelanggan", desc: "Sertifikat yang dipajang bukan dekorasi — bukti nyata bahwa kebersihan usaha Anda diawasi dan terkualifikasi." },
      { title: "Tim paham standar", desc: "Panduan harian untuk staf — kebersihan jadi sistem yang berjalan sendiri, bukan hanya hari-h menjelang inspeksi." },
    ],
    process: [
      { title: "Audit pra-inspeksi lokasi", desc: "Seluruh poin permenkes diperiksa di lokasi Anda — daftar perbaikan prioritas dengan perkiraan biaya tersusun." },
      { title: "Perbaikan & kelengkapan", desc: "Perbaikan lokasi dilakukan (kami pandu prioritasnya), kesehatan pekerja diperiksa — lokasi siap diperiksa dengan benar." },
      { title: "Pengajuan ke Dinkes", desc: "Dokumen dan formulir diajukan, jadwal inspeksi dikunci — seluruh administrasi kami bawa." },
      { title: "Inspeksi & sertifikat", desc: "Hari inspeksi didampingi penuh — temuan kecil dijawab di tempat, sertifikat terbit dan panduan pemeliharaan diterima." },
    ],
    requirements: [
      "Data usaha: NIB/izin usaha, lokasi & alamat lengkap kegiatan pangan",
      "Foto kondisi lokasi (dapur, area penyimpanan, toilet, tempat cuci tangan — pemeriksaan awal kami dari foto)",
      "Daftar pekerja yang menyentuh pangan (untuk pemeriksaan kesehatan — kami atur jadwalnya)",
      "Jenis produk & cara penyajian (menentukan poin pemeriksaan yang lebih ketat)",
      "Kesediaan melakukan perbaikan minor bila audit menemukannya — biasanya kecil dan cepat",
    ],
    faqs: [
      { q: "Usaha saya warung kecil tanpa tempat duduk — apakah tetap perlu SLHS?", a: "Kewajiban mengikuti jenis jasaboga: restoran, katering, kantin, jasa boga lainnya — termasuk usaha kecil — memang disyaratkan laik higiene sanitasi oleh regulasi kesehatan. Skala pemeriksaannya disesuaikan dengan jenis usahanya, jadi warung kecil tidak diperiksa seberat hotel atau pabrik. Praktisnya: sertifikat ini juga melindungi usaha kecil — karena keluhan pelanggan atau pengawasan daerah menjadi non-isu bila dokumen Anda lengkap. Biaya penyiapan untuk skala kecil pun jauh lebih ringan dari yang dibayangkan banyak orang." },
      { q: "Saya sudah punya izin BPOM / sertifikat halal — apakah SLHS masih perlu?", a: "Ya, itu tiga dokumen yang menutup lapisan berbeda. BPOM mengatur KEAMANAN PRODUK (izin edar/notifikasi produk yang beredar), sertifikat halal mengatur KESAHAN BAHAN & proses menurut syariat, sedangkan SLHS mengatur KELAYAKAN TEMPAT & proses produksinya dari sisi kesehatan. Ketiganya saling melengkapi — dan beberapa pengajuan (misalnya izin edar BPOM untuk pabrik) justru meminta bukti kelayakan tempat produksi sebagai bagian dokumennya. Kami bantu menyusun urutan pengurusan ketiganya agar tidak saling menunggu." },
      { q: "Berapa lama berlaku sertifikatnya dan apa yang harus dijaga setelah terbit?", a: "SLHS berlaku sesuai ketentuan masa berlaku yang tercantum (umumnya dengan siklus pemutakhiran berkala) DAN kondisi: lokasi yang sudah laik harus tetap dijaga kelayakannya — perubahan besar (renovasi, ganti alat, perluasan) bisa memicu pemeriksaan ulang. Kami memberikan panduan pemeliharaan harian yang mudah dijalankan staf — karena strategi termurah adalah menjaga kondisi laik, bukan mengulang perbaikan besar tiap kali inspeksi datang." },
    ],
    related: ["bpom", "sertifikasi-halal", "nib-oss"],
  },
  {
    slug: "merek-internasional",
    tagline: "Merek Anda berjalan ke luar negeri sebelum kompetitor menyalinnya.",
    heroSub:
      "Pendaftaran merek ke 100+ negara lewat Protokol Madrid — satu pengajuan, satu bahasa, satu mata uang, diurus dari DJKI Indonesia. Untuk bisnis yang mulai diekspor, dijual lintas negara, atau dipantau kompetitor global.",
    timeline: "Pengajuan 2–4 minggu · Perlindungan tiap negara 12–18 bulan",
    intro: [
      "Merek yang terdaftar di DJKI melindungi Anda DI INDONESIA SAJA. Begitu produk Anda mulai dijual ke Singapura, di marketplace internasional, atau diproduksi bekerja sama dengan pabrik luar negeri, merek Anda berjalan tanpa pelindung di wilayah itu — dan hukum merek bersifat teritorial: pihak lain di negara itu boleh mendaftarkan merek Anda SEBELUM Anda, lalu memblokir Anda justru di pasar Anda sendiri. Kasusnya terjadi berulang: brand Indonesia yang mulai melejit justru diblokir di negara tujuan ekspornya oleh pendaftar yang lebih dulu — tebusannya mahal atau pindah nama.",
      "Protokol Madrid adalah sistem pendaftaran internasional yang menyelesaikan masalah itu secara elegan: Anda mengajukan SATU aplikasi internasional melalui DJKI (kantor asal), dalam SATU bahasa, membayar SATU rangkaian biaya — dan memilih negara-negara tujuan dari 100+ negara anggota. Tiap negara memprosesnya dengan aturannya masing-masing, tetapi administrasinya terpusat: tidak perlu agen di tiap negara untuk pengajuan awal, dan perpanjangan berlaku serentak setiap 10 tahun. Biaya jauh lebih hemat dibanding mendaftar manual negara per negara.",
      "Persiapan yang menentukan keberhasilannya ada sebelum aplikasi: merek Anda harus terdaftar dulu di DJKI (dasar aplikasi Madrid), kelas-kelas Nice yang dipilih harus mencerminkan rencana bisnis di negara tujuan (kelas yang salah = pelindungan bolong di produk yang justru paling penting), dan pencarian risiko di negara tujuan sebaiknya dilakukan dulu — mencegah pengajuan menabrak merek yang sudah ada di pasar itu. Kami urus seluruh rantainya: dasar DJKI, pemetaan kelas & negara (termasuk strategi negara besar vs pasar niche), pengajuan Madrid via WIPO, sampai pemantauan status tiap negara sampai sertifikat-sertifikatnya terbit.",
    ],
    benefits: [
      { title: "Satu pengajuan, banyak negara", desc: "Aplikasi Madrid mencakup negara-negara pilihan sekaligus — tanpa mengurus agen di tiap negara untuk pengajuan awal." },
      { title: "Biaya terkendali", desc: "Satu rangkaian biaya resmi + jasa — jauh lebih hemat dibanding pendaftaran manual negara per negara." },
      { title: "Pasar tujuan terlindungi duluan", desc: "Negara ekspor & rencana bisnis dipetakan dulu — merek Anda aman SEBELUM kompetitor atau pendaftar nakal maju." },
      { title: "Kelas Nice strategis", desc: "Pemilihan kelas mencerminkan produk yang benar-benar akan dijual — pelindungan tidak bolong di produk inti." },
      { title: "Pemantauan sampai terbit", desc: "Status di tiap negara dipantau — tanggapan pengaduan & kelanjutan tidak tercecer di tengah jalan." },
    ],
    process: [
      { title: "Pemetaan pasar & kelas", desc: "Negara tujuan & rencana bisnis dipetakan — kelas Nice dan strategi negara disusun, plus pencarian risiko di negara kunci." },
      { title: "Dasar DJKI & dokumen", desc: "Bila merek belum terdaftar di DJKI, pendaftarannya diurus dulu sebagai dasar aplikasi Madrid — dokumen disiapkan lengkap." },
      { title: "Aplikasi Madrid via WIPO", desc: "Aplikasi internasional diajukan melalui DJKI ke WIPO (Jenewa) — biaya negara dipetakan transparan sebelum diteken." },
      { title: "Pemantauan per negara", desc: "Tiap negara memproses dengan aturannya — status dipantau, tanggapan bila ada pengaduan disiapkan, sampai perlindungan berjalan." },
    ],
    requirements: [
      "Merek terdaftar di DJKI (atau sedang diproses — kami urus pendaftarannya bila belum)",
      "Daftar negara tujuan (kami bantu menyusunnya dari rencana bisnis: ekspor, marketplace, produksi)",
      "Produk/jasa yang akan dijual di tiap pasar (menentukan kelas Nice yang diajukan)",
      "Logo & data merek yang sama dengan pendaftaran dasar (teks, gambar, warna)",
      "Kontak pengelola merek yang bisa mengambil keputusan cepat saat ada tanggapan negara",
    ],
    faqs: [
      { q: "Bisakah langsung daftar Madrid tanpa merek Indonesia?", a: "Tidak — aplikasi Madrid menuntut 'dasar pendaftaran' di kantor asal, yaitu merek Anda harus terdaftar (atau setidaknya telah diajukan dan diterima) di DJKI dulu. Inilah alur yang benar: kunci merek Indonesia dulu (3–7 hari pengajuan, proses DJKI 8–10 bulan), lalu aplikasi Madrid dibangun di atasnya. Bagi yang belum punya apa pun, strategi terbaik kami: ajukan merek DJKI HARI INI juga — karena setiap bulan menunggu adalah bulan yang bisa dimanfaatkan pendaftar lain, baik di Indonesia maupun di negara ekspor Anda." },
      { q: "Berapa negara yang sebaiknya saya daftarkan sekaligus?", a: "Prinsip kami: lindungi PASAR YANG NYATA + rencana 2–3 tahun, bukan semua negara. Umumnya kombinasi: negara ekspor aktual, negara produksi/mitra, negara tetangga ASEAN (Singapura, Malaysia, Thailand — pasar yang paling cepat tersalip), plus AS/UE bila produk berpotensi ke sana. Tiap negara menambah biaya, jadi strategi bertahap dengan prioritas yang benar lebih bijak daripada membeli semuanya sekali — dan sistem Madrid memungkinkan penambahan negara di kemudian hari (dengan catatan biaya baru per penambahan)." },
      { q: "Bagaimana kalau ada negara yang menolak (pengaduan) aplikasi saya?", a: "Proses Madrid memberi tiap negara jendela waktu (umumnya 12–18 bulan) untuk menilai aplikasi di wilayahnya — penolakan di SATU negara tidak mempengaruhi negara lain. Tanggapannya bisa: koreksi kelas, pembatasan produk, atau pembelaan substantif dengan hukum setempat (di sinilah partner hukum lokal negara itu diperlukan — kami koordinasikan). Pemetaan risiko pra-pengajuan yang kami lakukan di awal meminimalkan kasus ini — merek yang sudah dicek di negara tujuan sebelum aplikasi jarang sekali ditabrak secara mengejutkan." },
    ],
    related: ["pendaftaran-merek", "hak-cipta-paten", "franchise"],
  },
];
