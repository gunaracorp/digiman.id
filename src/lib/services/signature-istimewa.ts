import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — KATEGORI SIGNATURE: Layanan Istimewa Gunara (7 layanan).
 * Ini PRODUK BERBRAND Gunara Consultant — ditulis dengan sudut pandang
 * produk terstandar yang punya metodologi bernama, bukan jasa umum:
 *   Gunara Business DNA™, Gunara LaunchPad 30, Gunara Compliance Shield™,
 *   Gunara Deal Desk, Gunara Exit Ready™, Gunara TenderReady™, Gunara Founder Shield™.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 * Catatan teknis: ServiceEnrichment didefinisikan di enrichment.ts (types.ts
 * hanya mengekspor ServiceContent) — import type diambil dari sana.
 */
export const signatureContent: ServiceContent[] = [
  {
    slug: "dna-bisnis-360",
    tagline: "Mobil punya servis berkala — bisnis yang hidup dari Anda jarang punya, sampai hari ia berhenti di jalan.",
    heroSub:
      "Gunara Business DNA™ adalah audit menyeluruh kesehatan legal-kepatuhan: dokumen badan usaha, NIB dan kecocokan KBLI, perizinan sektor, pajak, ketenagakerjaan, merek, dan kontrak dagang diperiksa lapis demi lapis, lalu dirangkum menjadi satu skor kesehatan DNA dan roadmap penutupan 12 bulan. Untuk pemilik usaha yang ingin tahu posisi berdirinya hari ini — sebelum klien besar, bank, atau pemeriksa yang menemukan celahnya lebih dulu.",
    timeline: "Pemetaan 3–7 hari kerja · laporan & roadmap 1–2 minggu",
    intro: [
      "Bisnis yang berjalan di Indonesia menggendong tumpukan kewajiban yang jarang dilihat utuh: badan usahanya dibentuk di bawah UU No. 40 Tahun 2007 tentang Perseroan Terbatas, perizinannya diurus melalui OSS-RBA sebagaimana diatur PP No. 5 Tahun 2021 bersama UU No. 6 Tahun 2023, kewajiban pajaknya dikejar UU KUP No. 28 Tahun 2007 jo. UU No. 7 Tahun 2021, dan pengelolaan tenaga kerjanya tunduk pada UU No. 13 Tahun 2003. Keempat lapisan itu tidak hidup sendiri-sendiri. KBLI yang tidak mencerminkan aktivitas nyata membuat izin sektor tidak bisa terbit; NIB yang diterbitkan tanpa kepatuhan dasar bisa ditegur lewat mekanisme sanksi administratif OSS; pembukuan yang tidak tertata membuat SPT disusun asal jadi; kontrak kerja yang tidak tertulis memangkas perlindungan kedua belah pihak. Celah di satu lapisan hampir selalu menarik celah di lapisan berikutnya — dan pemilik bisnis jarang mengetahuinya sampai pihak ketiga yang memintanya: bank saat kredit, calon mitra saat due diligence, atau pemeriksa saat penindakan.",
      "Celah yang tidak pernah dilihat adalah celah yang paling mahal. Dari pekerjaan pemetaan yang kami lakukan, polanya berulang: SPT yang terlambat bertahun-tahun menumpuk denda administratif per bulan di bawah UU KUP; laporan kegiatan usaha yang tidak pernah dikirim mengunci perizinan sektor berikutnya di sistem OSS sesuai PP No. 5 Tahun 2021; kontrak kerja yang hilang membuahkan gugatan yang dimenangkan karyawan; merek yang dipakai belasan tahun ternyata terdaftar atas nama mantan mitra; dan pembukuan yang bercampur dengan rekening pribadi membuat laporan keuangan tidak layak dipakai mengajukan kredit bank. Di kegiatan yang menyentuh lingkungan, izin yang tidak pernah diurus bisa naik level dari sanksi administratif menjadi pidana. Dan yang paling sering terjadi: semua temuan itu muncul justru saat bisnis sedang naik daun — ketika bank menolak kredit karena pembukuan, ketika klien korporasi menunda kontrak karena izin kedaluwarsa, atau ketika calon investor memotong penawaran karena legalitas yang berantakan.",
      "Gunara Business DNA™ bekerja seperti mekanik yang membongkar mesin, bukan sekadar menyapu bodi. Tujuh lapis diperiksa satu per satu — dokumen badan usaha beserta seluruh akta perubahannya dan SK Kemenkumham, NIB dan kecocokan KBLI dengan aktivitas nyata, perizinan sektor, pajak dari SPT sampai bukti potong dan pembukuan, ketenagakerjaan dari BPJS sampai kontrak, merek dan kekayaan intelektual, hingga kontrak dagang yang menaungi uang Anda — dengan cek silang ke sistem resmi seperti AHU Kemenkumham, OSS, DJP, dan BPJS supaya yang dilaporkan adalah status yang sebenarnya, bukan status yang diharapkan. Hasilnya diserahkan dalam format yang bisa dipakai memutuskan: satu skor kesehatan DNA dari skala 100, daftar celah yang berperingkat risiko dari kritis sampai rendah, dan roadmap penutupan 12 bulan lengkap dengan estimasi biaya per butir. Tidak ada temuan yang dihaluskan dan tidak ada biaya yang disembunyikan — laporan ini dibuat untuk dibaca pemilik, bukan untuk disimpan di map.",
    ],
    benefits: [
      { title: "Satu angka yang jujur", desc: "Skor kesehatan DNA dari skala 100 memuat seluruh lapisan legal-kepatuhan — posisi bisnis Anda bisa dibaca, dibandingkan, dan dipantau dari waktu ke waktu." },
      { title: "Celah berperingkat risiko", desc: "Temuan tidak disajikan sebagai daftar panjang tanpa arah — setiap celah diberi tingkat risiko, dampaknya dijelaskan, dan urutan penanganannya disusun." },
      { title: "Roadmap 12 bulan berbiaya jelas", desc: "Penutupan celah dituangkan menjadi rencana kerja berurutan dengan estimasi biaya per butir — anggaran bisa disiapkan tanpa kejutan." },
      { title: "Siap menghadapi pihak ketiga", desc: "Bank, klien korporasi, dan calon investor menguji hal yang sama: legalitas dan kepatuhan. Ketika bank meminta keterangan, klien meminta dokumen legal, atau investor membuka data room, laporan ini membuat setiap pertanyaan dijawab dengan dokumen — bukan dengan janji dan semangat." },
      { title: "Ketenangan yang terdokumentasi", desc: "Pemilik bisnis berhenti menebak apa yang belum diurus — daftar yang tersisa ada di tangan dengan urutan prioritasnya, bukan di kepala yang lupa." },
    ],
    process: [
      { title: "Pengumpulan & verifikasi dokumen", desc: "Seluruh dokumen badan usaha, perizinan, pajak, ketenagakerjaan, KI, dan kontrak dikumpulkan — keaslian dan status keterbaruiannya diverifikasi ke sistem resmi." },
      { title: "Pemeriksaan tujuh lapis", desc: "Setiap lapisan diuji kesesuaiannya dengan aktivitas nyata dan regulasinya — termasuk cek silang KBLI, status SPT, tunggakan BPJS, serta keberlakuan dan tanggal kedaluwarsa setiap izin dan kontrak." },
      { title: "Skoring & peringkat risiko", desc: "Temuan dinilai dampak dan kemungkinannya, lalu diterjemahkan menjadi skor kesehatan DNA dan daftar celah berperingkat dari kritis sampai rendah." },
      { title: "Laporan & roadmap penutupan", desc: "Laporan disampaikan dan didiskusikan bersama pemilik — roadmap 12 bulan dengan estimasi biaya disepakati, termasuk urutan prioritas yang realistis untuk anggaran Anda." },
    ],
    requirements: [
      "Akta pendirian beserta seluruh perubahannya dan SK pengesahan dari Kemenkumham",
      "NIB, perizinan sektor yang pernah terbit, dan akses akun OSS perusahaan",
      "SPT yang pernah dilaporkan, bukti potong, dan pembukuan terakhir",
      "Daftar karyawan beserta kontrak, lampiran BPJS, dan status pelaporan ketenagakerjaan",
      "Sertifikat merek atau KI lain yang dimiliki serta kontrak dagang utama yang sedang berjalan",
      "Penunjukan satu orang yang berwenang menjawab pertanyaan pemetaan selama audit berjalan",
    ],
    faqs: [
      { q: "Berapa biaya Gunara Business DNA™?", a: "Audit dimulai dari Rp 4,9 juta untuk bisnis dengan satu entitas dan lapisan perizinan yang sederhana. Nilai naik bila entitasnya lebih dari satu, cabangnya tersebar, atau lapisan perizinannya dalam — seluruhnya kami kunci tertulis di penawaran sebelum pekerjaan dimulai, tanpa biaya yang muncul di tengah jalan. Biaya penutupan celah dihitung terpisah per butir di roadmap — dari biaya negara sampai jasa perizinan — sehingga total anggaran Anda tahu sebelum memutuskan apa pun." },
      { q: "Berapa lama auditnya dan apakah mengganggu operasional?", a: "Pemetaan dokumen berjalan 3–7 hari kerja, lalu laporan dan roadmap diserahkan dalam 1–2 minggu. Pekerjaan hampir seluruhnya berjalan di atas dokumen yang Anda kirimkan, jadi operasional tidak terganggu — yang kami butuhkan hanya beberapa sesi tanya jawab dengan orang yang memegang keputusan. Prinsip kami sederhana: melelahkan dokumen, bukan orangnya." },
      { q: "Kalau audit menemukan celah besar, apakah saya langsung kena masalah?", a: "Tidak — tujuan audit ini memperbaiki, bukan melaporkan. Kewajiban legal-kepatuhan pada umumnya dipenuhi secara sukarela dan kebanyakan celah bisa ditutup tanpa sanksi selama belum ada penindakan yang berjalan; sanksi baru lahir saat kewajiban diperiksa atau saat izin diajukan. Hasil audit kami kerahasiaan dan justru menjadi alasan Anda tertib lebih dulu — langkah yang oleh sistem dihargai, bukan dihukum." },
    ],
    related: ["shield-kepatuhan-tahunan", "nib-oss", "lkpm", "legal-drafting"],
  },
  {
    slug: "launchpad-30-hari",
    tagline: "Sebelum hari ke-31 tiba, bisnis Anda harus sudah bisa menerima pesanan pertamanya — bukan masih menunggu berkas.",
    heroSub:
      "Gunara LaunchPad 30 adalah program empat minggu yang mengubah ide menjadi bisnis resmi: badan usaha di minggu pertama, identitas di minggu kedua, infrastruktur jualan di minggu ketiga, dan kepatuhan go-live di minggu keempat. Untuk pembuka usaha baru, UMKM yang naik kelas, dan pemilik usaha lama yang selama ini berjalan tanpa legalitas.",
    timeline: "Program terstruktur 30 hari · 4 fase mingguan",
    intro: [
      "Alasan paling umum bisnis belum legal bukan malas — melainkan tidak tahu bahwa urusannya saling menunggu: NPWP badan butuh badan usaha, merek butuh nama yang sudah resmi, rekening atas nama perusahaan butuh dokumen yang belum ada. Padahal pemerintah sudah memangkas jalan itu. UU No. 40 Tahun 2007 mengatur bentuk perseroan, sementara PP No. 8 Tahun 2021 memudahkan pendirian usaha mikro dan kecil: modal dasar dapat langsung ditetapkan dalam anggaran dasar dan pendiriannya berjalan daring tanpa menunggu berpindah meja. Identitas merek dilindungi UU No. 20 Tahun 2016 dengan pendaftaran yang berlaku sepuluh tahun, dan sisi pajak sudah menyiapkan jalan cepat bagi UMKM — termasuk PPh final 0,5% dari omzet sebagaimana diatur PP No. 23 Tahun 2018. Semua pintu itu bisa dijalanikan sekaligus, asal ada yang menyusun urutannya.",
      "Pendirian yang berhenti setengah jalan justru lebih mahal daripada tidak memulai. Kami sering menemukan PT yang sudah terbentuk tetapi mereknya tidak pernah didaftar — sampai hari nama itu dipakai pihak lain dan merek yang selama ini dianggap milik sendiri ternyata tercatat atas nama orang lain. Ada pemilik usaha yang punya NPWP tetapi belum dikukuhkan sebagai PKP, sehingga klien korporasi membatalkan kontrak karena tidak bisa menerima faktur pajak. Ada pula yang jualannya berjalan di nomor pribadi tanpa kanal resmi, tanpa katalog, dan tanpa satu pun kontrak tertulis — hingga pembayaran pertama bermasalah dan tidak ada alat untuk menuntutnya. Yang paling menyesalkan, semua itu biasanya baru dirasakan saat peluang besar datang: tender, klien enterprise, atau permintaan investor yang menuntut dokumen dalam hitungan hari.",
      "LaunchPad 30 menyusun seluruhnya menjadi garis waktu yang bisa dipegang: empat fase mingguan dengan target yang disepakati di awal. Minggu pertama menyelesaikan badan usaha — pemilihan entitas yang tepat bersama pemilihan KBLI-nya, akta di notaris mitra kami, pengesahan, sampai NIB terbit melalui OSS. Minggu kedua membangun identitas: pemeriksaan nama lalu pendaftaran merek ke DGIP, pengadaan domain, NPWP badan dan pengukuhan PKP bila dibutuhkan, serta WhatsApp Business sebagai kanal resmi yang konsisten dengan nama terdaftar. Minggu ketiga menyiapkan infrastruktur jualan — katalog WhatsApp, landing page, template faktur, dan kontrak dasar penjualan. Minggu keempat menutup program dengan kepatuhan awal dan go-live: kalender kewajiban, checklist operasional, dan bisnis yang sah, beridentitas, serta siap menerima pesanan pada hari ke-30.",
    ],
    benefits: [
      { title: "Satu garis waktu, satu penanggung jawab", desc: "Badan usaha, identitas, infrastruktur, dan kepatuhan disusun dalam satu program — Anda tidak menjadi kurir berkas antar notaris, DGIP, OSS, dan kantor pajak." },
      { title: "Legalitas yang dihitung hari, bukan bulan", desc: "Setiap fase punya target mingguan yang disepakati di awal — keterlambatan yang biasanya lahir dari antrean, dokumen yang bolong-balik, dan urusan yang saling menunggu dipangkas dengan koordinasi satu penanggung jawab." },
      { title: "Identitas yang saling sinkron", desc: "Merek, domain, NPWP, dan kanal WhatsApp Business dikerjakan berdampingan — nama yang terdaftar sama dengan nama yang dipakai jualan." },
      { title: "Alat jualan siap pakai di hari ke-30", desc: "Katalog WhatsApp, landing page, template faktur, dan kontrak dasar penjualan diserahkan dalam bentuk yang langsung dipakai, bukan sekadar diceritakan." },
      { title: "Kewajiban dipetakan sejak awal", desc: "Kalender kewajiban dan checklist operasional diserahkan di fase terakhir — bisnis baru tidak menabrak kewajiban pertamanya dengan kaget." },
    ],
    process: [
      { title: "Minggu 1 — Badan usaha", desc: "Pemilihan entitas yang sesuai skala dan rencana usaha, penyiapan akta di notaris mitra, pengesahan, sampai NIB terbit melalui OSS." },
      { title: "Minggu 2 — Identitas", desc: "Pendaftaran merek ke DGIP setelah pemeriksaan nama, pengadaan domain, NPWP badan dan pengukuhan PKP bila dibutuhkan, serta penataan WhatsApp Business sebagai kanal resmi." },
      { title: "Minggu 3 — Infrastruktur jualan", desc: "Katalog WhatsApp, landing page, template faktur, dan kontrak dasar penjualan disusun dan disetujui bersama — alat yang benar-benar dipakai harian." },
      { title: "Minggu 4 — Kepatuhan & go-live", desc: "Kalender kewajiban pajak dan perizinan, checklist operasional awal, dan serah terima lengkap — bisnis dinyatakan siap menerima pesanan pertamanya." },
    ],
    requirements: [
      "KTP dan NPWP seluruh pendiri, beserta kesepakatan alokasi saham bila lebih dari satu orang",
      "Tiga alternatif nama usaha dan gambaran aktivitas nyata untuk pemilihan KBLI",
      "Alamat domisili usaha beserta bukti tempat — sewa atau milik sendiri",
      "Estimasi omzet tahun pertama untuk menentukan perlakuan pajak dan kebutuhan pengukuhan PKP",
      "Nomor WhatsApp yang akan dipakai, preferensi domain, dan contoh produk untuk katalog",
    ],
    faqs: [
      { q: "Berapa biaya program LaunchPad 30?", a: "Program dimulai dari Rp 9,9 juta yang mencakup pendampingan seluruh empat fase — dari badan usaha sampai go-live dengan kalender kewajiban pertama di tangan. Biaya notaris, biaya negara, dan pendaftaran merek dihitung terpisah dan perinciannya kami sampaikan di awal supaya total anggaran bisa disiapkan. Tidak ada biaya yang muncul diam-diam di tengah jalan." },
      { q: "Bisakah 30 hari itu benar-benar dipatok?", a: "Dalam kondisi dokumen lengkap, ya — target fase kami kunci mingguan dan jalannya kami kendalikan penuh bersama notaris serta mitra pendaftaran. Risiko yang paling sering menggeser jadwal hanya satu: nama merek yang bentrok dengan pendaftaran orang lain, dan untuk itu kami meminta tiga alternatif sejak hari pertama serta memeriksa nama sebelum pengajuan. Ketika risiko itu muncul, Anda tahu lebih dulu dan bisa memilih jalan penggantinya — bukan setelah bulan berlalu tanpa kabar." },
      { q: "Usaha saya masih kecil — apakah harus langsung PT?", a: "Tidak selalu, tetapi kini bukan hal yang mahal. PP No. 8 Tahun 2021 memberi jalan pendirian PT bagi usaha mikro dan kecil dengan modal dasar yang ditetapkan langsung di anggaran dasar, sehingga bentuk korporasi terjangkau untuk skala kecil — sementara bentuk lain tetap dipertimbangkan sesuai rencana usaha Anda. Pemilihan entitas kami putuskan di minggu pertama bersama perlakuannya: PPh final 0,5% dari omzet sesuai PP No. 23 Tahun 2018 sering menjadi titik awal yang tepat bagi UMKM." },
    ],
    related: ["pendirian-pt", "pendaftaran-merek", "wa-business", "npwp-pkp"],
  },
  {
    slug: "shield-kepatuhan-tahunan",
    tagline: "Sanksi paling mahal jarang lahir dari niat buruk — ia lahir dari tanggal yang lewat tanpa dilihat.",
    heroSub:
      "Gunara Compliance Shield™ adalah langganan penjaga kewajiban: kalender kewajiban personal, pengingat proaktif lewat WhatsApp, eksekusi administratif dalam kuota bulanan, dan peringatan dini izin kedaluwarsa pada H-90, H-60, dan H-30. Untuk pemilik bisnis yang ingin kepatuhan menjadi kebiasaan yang dijaga sistem — bukan ingatan manusia.",
    timeline: "Langganan bulanan · kontrak 12 bulan · onboarding 1 minggu",
    intro: [
      "Kepatuhan bukan proyek sekali jadi — ia kebiasaan bulanan yang hidup di atas kalender: SPT Masa PPN paling lambat akhir bulan berikutnya sejak UU No. 7 Tahun 2021 mengubahnya, SPT Masa PPh 21 dan 26 paling lambat tanggal 20 bulan berikutnya, dan SPT Tahunan PPh Badan paling lambat empat bulan setelah tahun buku berakhir menurut UU Ketentuan Umum dan Tata Cara Perpajakan. Di luar pajak, laporan kegiatan usaha tetap wajib dikirim melalui OSS sebagaimana diatur PP No. 5 Tahun 2021 — usaha mikro dan kecil setiap enam bulan, usaha menengah setiap tiga bulan. Iuran BPJS wajib mengalir setiap bulan di bawah UU No. 24 Tahun 2011, dengan iuran BPJS Kesehatan dari pemberi kerja paling lambat tanggal 10 bulan berikutnya, sementara kewajiban ketenagakerjaan lain menumpuk di bawah UU No. 13 Tahun 2003 — termasuk wajib lapor ketenagakerjaan. Belum ada satu pun kalender itu yang bisa diingat manusia dengan sempurna selama tahun berjalan — dan satu tanggal yang lewat cukup untuk menghasilkan sanksi.",
      "Dari tahun-tahun terakhir pekerjaan kami, sanksi paling mahal lahir dari lupa, bukan dari sengaja. Izin yang kedaluwarsa tanpa disadari membuat kegiatan berhenti di hari yang tidak bisa dipilih; SPT yang lewat menumpuk denda administratif per bulan di bawah UU KUP; LKPM yang tidak pernah dikirim mengunci perizinan sektor berikutnya di sistem OSS. Tunggakan BPJS berubah menjadi manfaat karyawan yang terhenti dan gugatan yang tidak pernah direncanakan siapa pun. Polanya selalu sama: pemilik tahu semua kewajibannya ada — ia hanya tidak tahu mana yang jatuh tempo minggu ini, dan tidak ada yang mengingatkannya lebih dulu.",
      "Compliance Shield™ bekerja dari onboarding satu minggu: seluruh kewajiban bisnis Anda — pajak, OSS, BPJS, ketenagakerjaan, sampai perpanjangan izin — dipetakan dan dituangkan menjadi kalender personal. Pengingat berjalan proaktif lewat WhatsApp jauh sebelum tenggat, dan pekerjaan administratif rutin dieksekusi tim kami dalam kuota bulanan yang tertulis di kontrak. Izin yang akan kedaluwarsa mendapat peringatan dini bertingkat pada H-90, H-60, dan H-30 — ruang waktu yang cukup untuk memutuskan, bukan sekadar panik. Status seluruh kewajiban tersedia dalam satu dashboard yang bisa dibuka kapan pun — pajak, OSS, BPJS, ketenagakerjaan, dan perizinan — dan setiap bulan Anda menerima laporan apa yang sudah selesai, apa yang sedang jalan, serta apa yang menunggu keputusan Anda. Prinsip kami tetap transparan: yang masuk kuota dan yang di luar kuota diperinci dari awal, dengan garansi pekerjaan yang benar.",
    ],
    benefits: [
      { title: "Kalender yang bekerja untuk Anda", desc: "Seluruh kewajiban bulanan dan tahunan tersusun personal per bisnis, dari SPT masa sampai perpanjangan izin — tanggal tidak lagi dipercayakan pada ingatan." },
      { title: "Peringatan dini tiga tahap", desc: "Izin kedaluwarsa dipanggil pada H-90, H-60, dan H-30 — ruang keputusan terjaga, bukan sekadar pengingat di hari terakhir." },
      { title: "Eksekusi, bukan sekadar pengingat", desc: "SPT masa, LKPM, dan pelaporan BPJS dieksekusi dalam kuota bulanan — berkas bergerak tanpa Anda menjadi kurirnya." },
      { title: "Satu dashboard untuk semua status", desc: "Kondisi pajak, OSS, BPJS, dan izin terbaca dalam satu tempat — rapat direksi tidak lagi dimulai dari tebakan." },
      { title: "Biaya yang bisa diperhitungkan", desc: "Langganan bulanan tetap dan tertulis di kontrak — hampir selalu lebih murah daripada satu denda yang terlewat." },
    ],
    process: [
      { title: "Onboarding & pemetaan kewajiban", desc: "Dalam satu minggu, seluruh kewajiban dipetakan dari dokumen badan usaha sampai izin yang berjalan — akun DJP, OSS, dan BPJS dicek langsung ke sistemnya, lalu kalender personal disusun dan disepakati." },
      { title: "Pengingat & jalur WhatsApp", desc: "Tenggat dikirim jauh sebelum jatuh tempo lewat WhatsApp — setiap item diberi status, tenggat, dan pemegang pekerjaannya." },
      { title: "Eksekusi administratif bulanan", desc: "SPT masa, LKPM, BPJS, dan pelaporan rutin dieksekusi dalam kuota bulanan — bukti serah terima terdokumentasi." },
      { title: "Peringatan dini & laporan", desc: "Izin kedaluwarsa dipanggil bertingkat H-90, H-60, H-30 — laporan bulanan merangkum yang selesai, yang menunggu, dan yang berisiko." },
    ],
    requirements: [
      "Dokumen badan usaha dan seluruh izin yang sedang berlaku",
      "Akses akun DJP, OSS, dan BPJS perusahaan — atau bantuan membukanya",
      "Daftar karyawan, struktur gaji, dan informasi absensi untuk kebutuhan BPJS serta pelaporan ketenagakerjaan",
      "Volume transaksi bulanan dan jenis kegiatan usaha untuk penentuan SPT masa",
      "Penunjukan satu orang PIC yang menerima pengingat bersama pemilik",
    ],
    faqs: [
      { q: "Berapa biaya langganannya?", a: "Langganan Compliance Shield™ dimulai dari Rp 2,9 juta per bulan dengan kontrak 12 bulan — mencakup kalender personal, pengingat proaktif lewat WhatsApp, dan eksekusi administratif dalam kuota bulanan. Kuota disesuaikan jumlah entitas dan kepadatan kewajiban Anda, onboarding pemetaan kewajibannya termasuk di dalamnya, dan seluruhnya tertulis di penawaran. Setelah itu biayanya tetap dan bisa diperhitungkan sebagai biaya operasional — berbeda dengan denda, yang selalu datang di waktu dan nominal yang salah." },
      { q: "Saya punya kewajiban yang sudah tertunggak — apakah bisa langsung masuk program?", a: "Bisa, dan justru itu cara terbaik memulai: onboarding satu minggu pertama kami gunakan memetakan tunggakan, menilai risikonya, lalu menyusun urutan pelunasan yang realistis. Tunggakan yang sudah ada diperlakukan sebagai pekerjaan khusus di luar kuota dengan penawaran tertulis — apa yang ditunggak, apa risikonya, dan berapa biayanya tertulis jelas. Program menjaga tunggakan tidak bertambah, sementara yang lama ditutup secara bertahap sesuai prioritasnya." },
      { q: "Apakah pembayaran pajaknya juga dilakukan oleh DIGIMAN?", a: "Tidak — setiap pembayaran ke negara dan asuransi tetap keluar dari rekening perusahaan Anda, sehingga jejaknya bersih dan tertib secara administrasi. Yang kami jalankan adalah seluruh pekerjaan penyusunan, penghitungan, pengajuan, dan pemantauannya. Pemisahan ini melindungi Anda: uang tidak pernah berganti tangan, dan tanggung jawabnya tetap jelas." },
    ],
    related: ["dna-bisnis-360", "pelaporan-pajak", "lkpm", "bpjs"],
  },
  {
    slug: "deal-room-negosiasi",
    tagline: "Term sheet ditulis oleh pihak yang sudah sering membacanya — Anda berhak membacanya lebih dulu.",
    heroSub:
      "Gunara Deal Desk adalah pendampingan penuh founder dan pemilik usaha saat menerima LOI, term sheet investor, penawaran kemitraan JV asing, atau offer akuisisi: dari membongkar klausul, mengelola due diligence dua arah, hingga drafting dan closing. Pendamping manusia di meja negosiasi — bukan sekadar alat data room.",
    timeline: "Term sheet hingga closing 4–12 minggu",
    intro: [
      "Keputusan terbesar dalam sejarah sebuah bisnis sering diputus dalam hitungan hari, dengan bahasa yang tidak dipakai sehari-hari: valuasi pre-money dan post-money, liquidation preference, board seat, drag-along dan tag-along, vesting pendiri, sampai anti-dilution. Di sisi hukum, keputusan itu berpijak pada kerangka yang tetap harus dijaga: struktur saham dan tata kelola dibentuk di bawah UU No. 40 Tahun 2007 tentang Perseroan Terbatas, investor asing terikat laporan kegiatan penanaman modal sebagaimana diatur UU No. 25 Tahun 2007, dan akuisisi yang ambangnya tercapai wajib dinotifikasikan ke KPPU menurut UU No. 5 Tahun 1999 dan PP No. 57 Tahun 2010 — nilai transaksi yang melebihi Rp 250 miliar, atau yang menghasilkan nilai aset dan penjualan di atas Rp 2,5 triliun, dilaporkan paling lambat 30 hari kerja sejak transaksi berlaku sah. Kewajiban pasca-closing yang terlewat dari perhatian adalah sumber masalah yang tidak muncul di meja tanda tangan — ia muncul berbulan-bulan kemudian.",
      "Founder yang menandatangani term sheet tanpa membaca penuh adalah cerita yang terlalu sering kami dengar setelah semuanya terlanjur. Dua kata kecil di klausul liquidation preference — participating atau non-participating — bisa memisahkan miliaran rupiah saat exit; drag-along yang terlalu luas membuat Anda bisa dipaksa menjual saat tidak siap; exclusivity yang berlarut menutup opsi negosiasi lain tanpa jaminan apa pun. Sisi lain juga berbahaya: LOI yang dibaca santai ternyata memuat klausul mengikat, dan due diligence yang berhenti pada cerita calon mitra menyembunyikan utang yang kemudian ikut Anda bawa. Yang paling sering hilang sama sekali adalah kewajiban setelah tanda tangan: laporan kegiatan penanaman modal, notifikasi KPPU bila ambang tercapai, dan perubahan akta yang belum dilakukan — semuanya menjadi cacat yang muncul justru saat pendanaan berikutnya dicari.",
      "Deal Desk bekerja sebagai meja yang menyatukan sisi komersial dan hukum negosiasi Anda. Term sheet dibongkar klausul demi klausul dengan skenario uang yang konkrit — berapa yang benar-benar sampai ke tangan Anda di tiga skenario keluar yang berbeda. Due diligence dua arah kami koordinasikan dengan daftar permintaan dan penyaringan temuan, strategi kursi disusun sebelum rapat pertama, dan drafting serta negosiasi SHA/SPA dijalankan bersama notaris. Closing tidak berhenti di tanda tangan: kewajiban pasca-closing — perubahan akta, laporan BKPM, notifikasi KPPU bila ambang terpenuhi — masuk checklist yang dieksekusi sampai selesai. Kami tidak menggantikan kuasa hukum atau notaris; kami memastikan Anda berdiri setara di meja yang selama ini didominasi pihak yang lebih sering bermain di sana.",
    ],
    benefits: [
      { title: "Klausul diterjemahkan menjadi uang", desc: "Setiap klausul kunci diperlihatkan dampaknya dalam skenario uang — keputusan diambil karena memahami nilainya, bukan karena terlihat standar." },
      { title: "Kursi yang setara", desc: "Anda tidak bernegosiasi sendirian — strategi, agenda, batas tawar, dan peran setiap sidang disusun sebelum masuk ruangan, termasuk apa yang layak dan tidak layak Anda setujui." },
      { title: "Due diligence dua arah terkendali", desc: "Permintaan dokumen disaring, temuan diprioritaskan, dan jawaban disusun — kecepatan DD tidak lagi hanya ditentukan pihak lawan." },
      { title: "Risiko pasca-closing terjaga", desc: "Laporan BKPM, notifikasi KPPU bila ambang tercapai, dan perubahan akta masuk checklist yang dieksekusi — deal tidak meninggalkan utang administratif." },
      { title: "Kecepatan yang terstruktur", desc: "Dari term sheet sampai closing dalam 4–12 minggu — jalannya dipetakan fase demi fase dengan keluaran dokumen yang bisa diperiksa, bukan asal cepat." },
    ],
    process: [
      { title: "Membongkar term sheet", desc: "Setiap klausul dibaca dengan skenario uang — poin yang layak diperjuangkan, yang dapat ditawar, dan yang tidak berbahaya dipisahkan dengan jelas." },
      { title: "Due diligence dua arah", desc: "Daftar permintaan dan jawaban dikoordinasikan dua sisi — temuan disaring dan dampaknya diterjemahkan ke meja negosiasi." },
      { title: "Strategi, drafting & negosiasi", desc: "Strategi kursi disusun per sidang — SHA/SPA digarap bersama notaris dan setiap perubahan dibaca ulang sebelum diterima." },
      { title: "Closing & kewajiban pasca-closing", desc: "Tanda tangan dijalankan dan checklist pasca-closing dieksekusi: perubahan akta, laporan BKPM, dan notifikasi KPPU bila ambang tercapai." },
    ],
    requirements: [
      "LOI atau term sheet yang telah diterima beserta surat-menyurat pendahulunya",
      "Struktur saham terkini (cap table) dan dokumen badan usaha utama",
      "Laporan keuangan 2–3 tahun terakhir beserta data metrik yang dipakai bernegosiasi",
      "Tujuan dan batas founder: berapa yang bersedia dilepas dan kondisi mana yang tidak bisa ditawar",
      "Kontak pihak lawan dan status komunikasi yang sudah berjalan",
    ],
    faqs: [
      { q: "Berapa biaya Deal Desk untuk satu deal?", a: "Pendampingan dimulai dari Rp 12,5 juta per deal — mencakup pembongkaran term sheet, koordinasi due diligence dua arah, strategi dan negosiasi, sampai closing. Untuk transaksi besar dengan banyak pihak, cakupan dan biayanya kami perinci tertulis sebelum mulai. Jasa notaris dan pihak ketiga dihitung terpisah dan transparan." },
      { q: "Apakah Deal Desk menjamin deal jadi?", a: "Tidak — dan jujur itu bukan cara kerja yang sehat. Yang kami kerjakan: Anda masuk ruangan dengan pemahaman penuh atas nilai dan risiko setiap klausul, dan keluar dengan posisi yang tidak bisa ditawar dari luar. Deal yang gagal karena temuan yang sah bukan kegagalan persiapan — justru dana dan waktu Anda yang terselamatkan." },
      { q: "Berapa lama proses dari term sheet sampai closing?", a: "Umumnya 4–12 minggu, tergantung kedalaman due diligence, jumlah pihak yang berunding, dan kelengkapan dokumen di kedua sisi. Jadwal per fase kami susun di awal dan kami jaga dengan mengelola antrean dokumen dua arah sekaligus kewajiban yang menunggu di belakangnya. Keterlambatan yang paling sering bukan dari negosiasinya — melainkan dari dokumen due diligence yang tidak siap." },
    ],
    related: ["data-room-virtual", "valuasi-bisnis", "perjanjian-pemegang-saham", "akuisisi-merger-umkm"],
  },
  {
    slug: "exit-ready-valuation",
    tagline: "Bisnis yang bisa berjalan tanpa Anda adalah bisnis yang dihargai paling tinggi.",
    heroSub:
      "Gunara Exit Ready™ adalah program enam sampai dua belas bulan yang menyiapkan bisnis agar layak dibeli atau diseraikan dengan harga premium: tujuh pilar kesiapan dievaluasi, diberi skor Exit-Ready per pilar, dan dikerjakan lewat rencana kuartalan. Untuk pemilik yang menatap akhir perjalanan — atau yang sekadar ingin opsi menjualnya tetap terbuka.",
    timeline: "Program 6–12 bulan · evaluasi kuartalan",
    intro: [
      "Menjual bisnis bukan keputusan hari-H — ia hasil persiapan yang dimulai jauh sebelum pembeli pertama muncul. Pembeli yang serius menguji hal yang sama di semua bisnis: pembukuan yang bersih dan bisa diaudit sesuai PSAK atau SAK-EP bagi entitas privat, legalitas yang bebas cacat di bawah UU No. 40 Tahun 2007, kekayaan intelektual yang terdaftar atas nama PT sebagaimana diatur UU No. 20 Tahun 2016, pajak yang patuh di bawah UU Ketentuan Umum dan Tata Cara Perpajakan, dan tim yang berjalan tanpa bergantung pada pendiri — ditambah kontrak kunci dengan pelanggan, pemasok, dan karyawan yang terdokumentasi dan berlaku. Ketujuh ujian itulah yang kami susun menjadi tujuh pilar program Exit Ready™ — masing-masing diberi skor, prioritas, dan rencana kerja kuartalan. Pilar ketujuh menutup semuanya: narasi pertumbuhan yang didukung data metrik, karena bisnis yang bagus dibeli, tetapi bisnis yang bercerita dengan angka dibeli lebih tinggi.",
      "Perbedaan penjual yang siap dan yang tidak sering terlihat di satu angka: diskon harga 20–40% dan penundaan closing biasanya lahir dari temuan due diligence, bukan dari pasar. Pembukuan yang bercampur dengan rekening pribadi, laporan yang tidak bisa diaudit, merek yang terdaftar atas nama pendiri alih-alih PT, kontrak pelanggan yang hanya hidup di kepala, dan tim yang tidak bisa berjalan satu minggu tanpa pendiri — semuanya menjadi catatan yang memotong harga. Pajak yang belum beres memperparahnya: kewajiban yang belum dilaporkan bisa dipindahkan ke meja negosiasi sebagai risiko yang harus ditanggung penjual. Yang paling pahit, semua itu bisa dicegah berbulan-bulan sebelumnya — dan penjual yang tidak siap kehilangan daya tawarnya tepat di momen paling mahal dalam hidupnya.",
      "Exit Ready™ tidak menjual ilusi exit cepat — ia menjalankan pekerjaan yang membuat exit itu layak terjadi. Program dimulai dari evaluasi awal tujuh pilar dan pemberian skor Exit-Ready, lalu rencana kerja kuartalan disusun: pembukuan dibereskan bersama akuntan, legalitas ditutup celahnya bersama notaris, kekayaan intelektual didaftarkan atas nama yang benar, kontrak kunci didokumentasikan, dan struktur pajak ditanai agar patuh tanpa boros. Setiap kuartal skornya dievaluasi ulang — kemajuan terukur, dan saat pembeli datang, data room Anda sudah tertata, bukan masih dibongkar. Transparansi tetap prinsip kami: setiap pilar yang belum selesai dinyatakan apa adanya, dengan biaya dan waktunya — karena pembeli menghargai kejujuran yang terdokumentasi lebih daripada kesempurnaan yang tidak bisa dibuktikan.",
    ],
    benefits: [
      { title: "Harga yang tidak tergerus di meja DD", desc: "Temuan due diligence adalah sumber diskon 20–40% yang paling umum — program ini menutup sumbernya sebelum pembeli mencarinya." },
      { title: "Closing yang tidak berlarut", desc: "Dokumen yang tertata membuat proses berjalan dalam minggu, bukan bulan — waktu yang sama sering dipakai pembeli menguji komitmen Anda." },
      { title: "Opsi yang tetap terbuka", desc: "Bisnis yang siap dijual adalah bisnis yang juga siap diseraikan kepada penerus, dimasukkan mitra baru, atau dibawa ke pendanaan — kesiapan adalah kebebasan memilih, bukan keterpaksaan menerima." },
      { title: "Tim yang berjalan tanpa pendiri", desc: "Pilar kelima menuntut operasional berjalan tanpa Anda — ujian yang paling sering diberikan pembeli dan paling sulit dijawab tanpa persiapan." },
      { title: "Narasi yang didukung angka", desc: "Data metrik dan cerita pertumbuhan disusun rapi — nilai yang Anda minta punya dasar yang bisa diperiksa." },
    ],
    process: [
      { title: "Evaluasi awal tujuh pilar", desc: "Seluruh pilar dipetakan dan diberi skor Exit-Ready — celah yang paling mahal risikonya dikenali sejak awal." },
      { title: "Rencana kerja kuartalan", desc: "Prioritas dan target per kuartal disepakati — pekerjaan dibagi ke spesialis yang tepat: akuntan, notaris, pajak, dan KI, dengan keluaran dokumen yang jelas per kuartal." },
      { title: "Eksekusi & koordinasi spesialis", desc: "Pembukuan, legalitas, KI, kontrak kunci, dan pajak dikerjakan paralel — kemajuannya dipantau mingguan." },
      { title: "Evaluasi kuartalan & pembaruan skor", desc: "Skor Exit-Ready diukur ulang tiap kuartal — kemajuan terbaca, dan data room siap dibuka kapan pun pembeli datang." },
    ],
    requirements: [
      "Laporan keuangan 2–3 tahun terakhir — atau catatan terbaik yang dimiliki",
      "Dokumen badan usaha, izin yang sedang berlaku, dan status kewajiban pajak",
      "Daftar kontrak utama: pelanggan, pemasok, dan karyawan",
      "Sertifikat kekayaan intelektual yang dimiliki beserta nama pemilik tercatatnya",
      "Rencana pendiri: menjual penuh, menjual sebagian, atau meneruskan ke penerus",
      "Akses data operasional: pelanggan, transaksi, dan metrik yang dipakai memutuskan",
    ],
    faqs: [
      { q: "Berapa biaya program Exit Ready™?", a: "Program dimulai dari Rp 15 juta yang mencakup evaluasi awal tujuh pilar, skor Exit-Ready, dan rencana kerja kuartalan pertama. Biaya pekerjaan penutupan — akuntan, notaris, pajak, pendaftaran KI — dihitung per butir di rencana dan transparan sebelum dikerjakan. Anda bisa memulai dari pilar yang paling mahal risikonya dan bergerak sesuai anggaran tiap kuartal." },
      { q: "Kenapa programnya 6–12 bulan, bukan satu bulan?", a: "Karena yang dijual bukan dokumen, melainkan kebiasaan: pembukuan yang bisa diaudit butuh minimal satu siklus, tim yang berjalan tanpa pendiri butuh waktu untuk terbukti, dan pajak yang beres menunggu periode berjalan. Pembeli yang serius menguji konsistensi antar kuartal, bukan dokumen yang baru disusun minggu lalu. Enam bulan adalah batas bawah yang realistis; dua belas bulan memberi hasil yang paling mengikat harga." },
      { q: "Apakah program ini menjamin bisnis saya terjual?", a: "Tidak — harga akhir dan keputusan tetap di pasar. Yang dijamin program ini: saat pembeli datang, temuan due diligence tidak lagi memotong harga Anda, proses closing tidak berlarut, dan Anda bernegosiasi dari posisi siap. Diskon 20–40% yang biasanya lahir dari temuan DD itulah yang kami tutup sumbernya." },
    ],
    related: ["valuasi-bisnis", "suksesi-penerus", "pelaporan-pajak", "data-room-virtual"],
  },
  {
    slug: "tender-ready-program",
    tagline: "Mayoritas peserta lelang gugur di babak administrasi — sebelum kualitasnya sempat dinilai siapa pun.",
    heroSub:
      "Gunara TenderReady™ adalah program kesiapan mengikuti pengadaan pemerintah dan korporasi: pemetaan kualifikasi, penyiapan personel bersertifikat, dokumen administratif baku LPSE, registrasi vendor, dan simulasi evaluasi administrasi. Agar yang menentukan kalah-menang Anda adalah teknis dan harga — bukan berkas yang kurang satu lembar.",
    timeline: "Penataan kesiapan 2–6 minggu sesuai kondisi awal",
    intro: [
      "Pengadaan barang dan jasa pemerintah berjalan di atas aturan yang rapi dan tanpa tebak-tebakan: Perpres No. 16 Tahun 2018 jo. Perpres No. 12 Tahun 2021 mengatur jalannya lelang dari pendaftaran di LPSE sampai evaluasi administrasi, teknis, dan harga. Untuk jasa konstruksi, UU No. 2 Tahun 2017 menuntut sertifikat badan usaha dan personel yang terdaftar; produk tertentu tidak boleh ditawarkan tanpa SNI; dan seluruhnya berdiri di atas legalitas dasar yang dimudahkan PP No. 8 Tahun 2021. Korporasi swasta tidak kalah ketatnya: portal vendor seperti SAP Ariba menerapkan audit vendor yang meminta dokumen hampir sama dengan lelang pemerintah. Babak pertama setiap lelang adalah evaluasi administrasi — dan gugur di babak ini berarti kualifikasi teknis Anda tidak pernah dibaca siapa pun.",
      "Kegagalan administratif nyaris selalu bisa diprediksi dari luar: sertifikat badan usaha yang kualifikasinya tidak cocok dengan paket yang diikuti, personel yang SKTTK-nya tidak terdaftar, atau NPWP yang aktif tetapi keterangan pajaknya tidak bisa terbit karena kewajiban tertunggak. Bukti pengalaman yang tidak terdokumentasi — SPK yang hilang, berita acara serah terima yang tidak pernah ditandatangani — membuat riwayat yang selama ini diceritakan dengan bangga dianggap tidak ada. Berkas yang kedaluwarsa di tengah jadwal lelang, modal dasar yang tidak sesuai, dan registrasi vendor yang belum terbuka menambah daftar panjang yang membuat peserta pulang sebelum bertanding. Dan yang paling menyakitkan: semua itu bisa diperbaiki berbulan-bulan sebelum lelang — hanya saja tidak ada yang memeriksa sampai pengumuman gugur terbit.",
      "TenderReady™ bekerja mundur dari dokumen yang dituntut bidang Anda: kualifikasi badan usaha dipetakan terhadap paket yang realistis diikuti, personel bersertifikat disiapkan sesuai kualifikasi yang diminta, dan dokumen administratif baku LPSE disusun sekali untuk dipakai berulang di setiap lelang. Registrasi vendor di LPSE daerah dan portal supplier korporasi kami buka dan rawat, lalu kalender tender relevan disaring supaya Anda tidak mengikuti semua — hanya yang kualifikasinya nyata tercapai. Bagian yang paling membedakan adalah simulasi evaluasi administrasi: berkas Anda kami periksa seolah kami panitia — yang bolong dilengkapi, yang mendekati kedaluwarsa diganti, sebelum panitia asli menemukannya. Hasilnya bukan jaminan menang — tetapi jaminan bahwa Anda tampil di babak tempat kualitas teknis dan harga benar-benar dinilai.",
    ],
    benefits: [
      { title: "Kualifikasi yang dipetakan, bukan ditebak", desc: "Paket yang realistis untuk kualifikasi Anda dipetakan sebelum biaya ikut lelang dikeluarkan — biaya bermaterai, dokumen, dan waktu dihitung dulu, sehingga yang diikuti adalah lelang yang mungkin dimenangkan, bukan sekadar yang tersedia." },
      { title: "Personel yang sesuai tuntutan", desc: "SKA, SKT, dan SKTTK disiapkan sesuai matriks kualifikasi — dokumen personel tidak lagi menjadi alasan gugur." },
      { title: "Dokumen baku yang dipakai ulang", desc: "Administratif baku disusun sekali dan diperbarui berjalan — setiap lelang berikutnya tinggal menyesuaikan, bukan menyusun dari nol." },
      { title: "Registrasi vendor yang terbuka", desc: "LPSE daerah dan portal supplier korporasi terdaftar dan terawat — pintu masuknya siap sebelum tender datang." },
      { title: "Simulasi sebelum panitia asli", desc: "Berkas diperiksa seolah kami panitia — cacat administratif ditemukan oleh kami lebih dulu, bukan oleh pengumuman gugur." },
    ],
    process: [
      { title: "Pemetaan kualifikasi & celah", desc: "Kualifikasi badan usaha dan personel disandingkan dengan tuntutan bidang — celah diprioritaskan menurut paket yang realistis diikuti." },
      { title: "Penyiapan dokumen & personel", desc: "SBU, SKA/SKT/SKTTK, SNI bila wajib, dan keterangan pajak disiapkan — dokumen administratif baku ditata siap pakai ulang." },
      { title: "Registrasi vendor & kalender tender", desc: "LPSE daerah dan portal supplier korporasi didaftarkan — kalender tender relevan disaring sesuai kualifikasi nyata Anda." },
      { title: "Simulasi evaluasi administrasi", desc: "Seluruh berkas diperiksa seperti panitia yang menilai urutan halaman sampai nomor dokumen — temuan dilengkapi dan berkas yang mendekati kedaluwarsa diperbarui sebelum lelang." },
    ],
    requirements: [
      "Dokumen badan usaha beserta izin dan sertifikat yang sudah dimiliki",
      "Daftar personel beserta kualifikasi, pengalaman, dan status sertifikatnya",
      "Bukti pengalaman kerja: SPK, BASTP, dan berita acara yang pernah diterima",
      "Laporan keuangan terakhir dan status kewajiban pajak",
      "Bidang dan skala tender yang dituju beserta wilayah operasinya",
    ],
    faqs: [
      { q: "Berapa biaya program TenderReady™?", a: "Penataan kesiapan dimulai dari Rp 6,5 juta — mencakup pemetaan kualifikasi, penyusunan dokumen administratif baku, dan simulasi evaluasi administrasi. Biaya sertifikasi seperti SBU, SKA/SKT, atau SNI dihitung terpisah sesuai celah yang ditemukan, dan rinciannya kami sampaikan sebelum dikerjakan. Tidak ada biaya yang muncul setelah program berjalan tanpa kesepakatan tertulis." },
      { q: "Berapa lama sampai kami benar-benar siap?", a: "Penataan kesiapan berjalan 2–6 minggu tergantung kondisi awal — bisnis yang legalitas dasarnya rapi bisa siap di ujung bawah, sementara yang perlu menambah sertifikat personel butuh waktu lebih. Yang kami pastikan: setiap minggu punya target dokumen, registrasi vendor berjalan paralel, dan simulasi evaluasi dilakukan sebelum tender pertama Anda. Kesiapan lebih murah daripada kecepatan — satu lelang gugur hampir selalu lebih mahal daripada enam minggu menunggu." },
      { q: "Apakah TenderReady™ menjamin kami menang lelang?", a: "Tidak — siapa pun yang menjanjikan itu jangan Anda bayar. Yang program ini kerjakan adalah memastikan Anda tidak gugur administratif, sehingga kualitas teknis dan harga Anda sempat dinilai — babak di mana menang memang ditentukan. Setelah itu yang berbicara adalah kualitas Anda; kami berhenti di garis kejujuran itu." },
    ],
    related: ["sbu-konstruksi", "skttk-personel-konstruksi", "sni", "virtual-office"],
  },
  {
    slug: "pendiri-pribadi-shield",
    tagline: "Bisnis dibangun puluhan tahun — dan bisa kacau oleh satu peristiwa yang tidak pernah dibicarakan.",
    heroSub:
      "Gunara Founder Shield™ memetakan titik-titik di mana risiko perusahaan menjalar ke pribadi pendiri, lalu memasang pengamannya: pemisahan rekening dan aset, klausul SHA antar pemain, surat wasiat dan kuasa khusus, serta asuransi jiwa kunci. Untuk pendiri yang tidak ingin nasib keluarganya menjadi jaminan atas nasib perseroannya.",
    timeline: "Pemetaan 1–2 minggu · implementasi 1–2 bulan",
    intro: [
      "Tanggung jawab terbatas adalah janji hukum yang paling sering dianggap otomatis — padahal batasnya bocor di titik-titik tertentu yang jarang diperiksa. UU No. 40 Tahun 2007 menetapkan anggota direksi bertanggung jawab pribadi atas kerugian perseroan bila tidak dapat membuktikan pengelolaan yang baik dan cermat, serta melarang perseroan memberikan pinjaman kepada anggota direksi atau komisaris tanpa persetujuan rapat umum pemegang saham. Di rumah, harta bersama perkawinan tunduk pada UU No. 1 Tahun 1974 jo. UU No. 16 Tahun 2019 — rekening bisnis yang bercampur bisa memukul harta keluarga, dan perjanjian kawin kini sah dibuat pula selama perkawinan berlangsung. Pengalihan harta termasuk hak atas tanah lewat pewarisan diatur UU No. 5 Tahun 1960 dan hukum wasiat dalam KUHPerdata, sementara proteksi asuransi berdiri di atas UU No. 40 Tahun 2014 tentang Perasuransian. Lima pintu itu — direksi, pinjaman, harta kawin, warisan, asuransi — adalah peta kerja program ini.",
      "Bisnis dibangun puluhan tahun bisa kacau oleh satu peristiwa yang tidak dibicarakan: rekening perusahaan yang dipakai membayar sekolah anak, pinjaman pribadi ke perseroan yang tidak pernah didokumentasikan, atau saham yang tercatat atas nama yang tidak pernah disepakati lagi. Peristiwa paling berat datang tanpa undangan: pendiri yang meninggal atau kehilangan kecakapan tanpa wasiat membuat perusahaan terkunci — ahli waris bertengkar, tidak ada yang sah menandatangani, dan tim serta pelanggan menunggu keputusan yang tidak bisa terbit. Relasi antar saudara yang selama ini dijaga kepercayaan lisan berubah menjadi sengketa begitu nilai sahamnya membesar, dan perceraian yang tidak disiapkan memukul kepemilikan saham tanpa pernah diminta siapa pun. Yang kehilangan paling banyak sering bukan pendirinya — melainkan keluarga yang tidak pernah diminta memilih antara mengurus bisnis dan berduka.",
      "Founder Shield™ dimulai dari pemetaan yang jujur: kapan dan di situasi apa direksi, komisaris, atau pendiri bisa dijerat tanggung jawab pribadi — diikuti keputusan memasang pengaman satu per satu. Rekening dan aset dipisahkan, aturan pinjaman pribadi-perseroan dibuat sah dan terdokumentasi — pinjaman kepada anggota direksi atau komisaris baru sah setelah persetujuan rapat umum pemegang saham — dan klausul antar pemain dituangkan dalam anggaran dasar serta perjanjian pemegang saham. Surat wasiat dan kuasa khusus disusun bersama notaris — siapa berwenang menandatangani apa, bila pendiri meninggal atau tidak cakap — dan asuransi jiwa kunci serta tanggung jawab disiapkan sesuai UU No. 40 Tahun 2014 agar bisnis punya dana untuk berdiri di hari terburuk. Semuanya ditulis dalam bahasa yang bisa dibaca keluarga, bukan hanya notaris — karena dokumen perlindungan yang tidak dipahami keluarga akan gagal tepat saat dibutuhkan.",
    ],
    benefits: [
      { title: "Batas tanggung jawab yang benar-benar berbatas", desc: "Titik di mana perlindungan terbatas bocor dikenali lebih dulu — direksi dan komisaris tahu tepat di mana iktikad baik dan kecermatan pengelolaan harus bisa dibuktikan." },
      { title: "Harta keluarga yang berdiri sendiri", desc: "Rekening, aset, dan harta kawin dipisahkan secara sah — termasuk perjanjian kawin yang kini sah dibuat selama perkawinan berlangsung — sehingga risiko usaha tidak lagi mengalir diam-diam ke dapur keluarga." },
      { title: "Kejelasan di hari terburuk", desc: "Wasiat, kuasa khusus, dan polis jiwa kunci menjawab siapa berwenang apa — perusahaan tidak berhenti menunggu keputusan yang tidak bisa terbit." },
      { title: "Relasi keluarga yang tertulis", desc: "Kesepakatan antar pemain dituangkan dalam perjanjian — kepercayaan lisan dilestarikan tanpa dijadikan beban saat keadaan berubah." },
      { title: "Dana untuk berdiri kembali", desc: "Asuransi jiwa kunci dan tanggung jawab menyediakan uang pada saat yang tepat — melunasi kewajiban, mempertahankan tim, dan menata ulang kepemilikan tanpa menjual aset tergesa-gesa." },
    ],
    process: [
      { title: "Pemetaan titik tanggung jawab", desc: "Situasi yang bisa menjangkiti harta pribadi dipetakan satu per satu — dari posisi direksi dan penjaminan pinjaman, sampai status harta kawin dan kepemilikan tanah." },
      { title: "Penataan pemisahan", desc: "Rekening dan aset dipisahkan, pinjaman pribadi-perseroan didokumentasikan — jejaknya dirapikan dengan cara yang sah." },
      { title: "Dokumen perlindungan", desc: "Klausul SHA antar pemain, wasiat, kuasa khusus, dan rekomendasi polis disusun bersama notaris dan penasihat asuransi." },
      { title: "Implementasi & pemutakhiran", desc: "Dokumen ditandatangani, polis aktif, dan pemetaan dimutakhirkan saat keluarga atau bisnis berubah — proteksi yang hidup, bukan berkas sekali jadi." },
    ],
    requirements: [
      "Struktur saham saat ini beserta pemegangnya dan relasi keluarga di dalamnya",
      "Daftar rekening dan aset yang dipakai bisnis maupun pribadi — termasuk yang bercampur",
      "Status perkawinan, perjanjian kawin bila ada, dan keinginan suksesi pendiri",
      "Riwayat pinjaman pribadi ke perseroan atau sebaliknya",
      "Kontrak utama dan kewajiban menanda tangan yang menempel pada pribadi pendiri",
    ],
    faqs: [
      { q: "Berapa biaya Founder Shield™?", a: "Program dimulai dari Rp 7,5 juta — mencakup pemetaan titik tanggung jawab dan implementasi dasar: pemisahan rekening dan aset, klausul SHA antar pemain, wasiat, dan kuasa khusus. Premi asuransi dibayar langsung ke asuradur dan biaya notaris diperinci di awal sesuai dokumen yang dibutuhkan keluarga Anda. Seluruhnya tertulis sebelum pekerjaan dimulai — dan dimutakhirkan tertulis setiap kali keadaan keluarga berubah." },
      { q: "Berapa lama sampai proteksinya berdiri?", a: "Pemetaan berjalan 1–2 minggu dan implementasi 1–2 bulan, tergantung kompleksitas keluarga dan asetnya. Pemisahan rekening bisa dimulai sejak minggu pertama, sementara dokumen notaris dan polis mengikuti setelah kesepakatan. Yang penting bukan kecepatan tanda tangan — melainkan keputusan yang benar-benar dibicarakan sebelum tertulis." },
      { q: "Apakah ini berarti saya tidak percaya keluarga atau mitra saya?", a: "Justru sebaliknya — dokumen ini menjaga kepercayaan yang sudah ada dari sengketa yang tidak diminta siapa pun. Keluarga yang paling harmonis pun bisa berbeda tafsir saat mendadak dan kehilangan, dan hukum tidak menerima cerita lisan. Tertulis bukan tanda curiga — ia cara paling manusiawi untuk menghormati kesepakatan yang selama ini hanya diingat." },
    ],
    related: ["perjanjian-pendiri-vesting", "suksesi-penerus", "piagam-keluarga-bisnis", "asuransi-bisnis"],
  },
];

/* ═══════════════════════ LAPISAN PENGAYAAN ═══════════════════════
   whoFor, deliverables, costs, legalBasis — digabung otomatis oleh
   getServiceContent() di index.ts. Kunci = slug layanan. */
export const signatureEnrichment: Record<string, ServiceEnrichment> = {
  "dna-bisnis-360": {
    whoFor: [
      "Pemilik bisnis yang siap mengajukan kredit bank, mengikuti tender, atau menutup kontrak korporasi besar",
      "Bisnis keluarga yang legalitasnya tersimpan di ingatan orang tertentu — dan orang itu sedang sakit, sibuk, atau sudah tidak berada di dalam perusahaan",
      "Perusahaan yang akan memasuki due diligence investasi atau penjualan dan tidak ingin kaget",
      "Usaha yang pernah pindah alamat, berganti nama, atau menjalankan aktivitas di luar KBLI terdaftarnya",
    ],
    deliverables: [
      "Skor kesehatan DNA dari skala 100 beserta rinciannya per lapisan",
      "Daftar celah berperingkat risiko — kritis, tinggi, sedang, rendah — dengan dampak masing-masing",
      "Roadmap penutupan 12 bulan lengkap dengan estimasi biaya per butir",
      "Ringkasan status seluruh izin: aktif, kedaluwarsa, atau menunggu kewajiban",
      "Sesi penyampaian laporan bersama pemilik dan manajemen untuk menyepakati prioritas, urutan kerja, dan pemilik pekerjaan setiap butir",
    ],
    costs: [
      { item: "Jasa audit Gunara Business DNA™", note: "mulai Rp 4,9 jt untuk satu entitas — tertulis penuh di penawaran" },
      { item: "Perluasan cakupan", note: "menyesuaikan jumlah entitas, cabang, dan lapisan perizinan" },
      { item: "Penutupan celah yang ditemukan", note: "dihitung terpisah per butir di roadmap — dari biaya negara sampai jasa perizinan" },
      { item: "Biaya notaris & negara bila dibutuhkan", note: "muncul hanya bila roadmap menuntut perubahan akta atau izin baru" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "PP No. 5 Tahun 2021 tentang Perizinan Berusaha Berbasis Risiko jo. UU No. 6 Tahun 2023 (Cipta Kerja)",
      "UU No. 28 Tahun 2007 tentang Ketentuan Umum dan Tata Cara Perpajakan jo. UU No. 7 Tahun 2021",
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan",
    ],
  },

  "launchpad-30-hari": {
    whoFor: [
      "Pembuka usaha baru yang ingin mulai dari fondasi yang benar, bukan merapikan kemudian",
      "Pemilik UMKM yang naik kelas dan mulai dituntut faktur pajak serta kontrak oleh klien korporasi",
      "Pengusaha lama yang berjalan bertahun-tahun tanpa legalitas dan ingin menyerahkannya kepada keluarga atau penerus dengan rapi",
      "Profesional yang keluar dari pekerjaan tetap untuk membuka bisnis dengan target waktu yang jelas",
    ],
    deliverables: [
      "Badan usaha resmi: akta, SK pengesahan, NPWP badan, dan NIB sesuai KBLI aktivitas nyata — siap untuk membuka rekening usaha",
      "Pengajuan merek ke DGIP setelah pemeriksaan nama awal, ditambah domain yang terpilih",
      "Katalog WhatsApp, landing page, template faktur, dan kontrak dasar penjualan siap pakai",
      "WhatsApp Business tertata sebagai kanal resmi beserta pengukuhan PKP bila dibutuhkan",
      "Kalender kewajiban dan checklist operasional untuk 12 bulan pertama",
    ],
    costs: [
      { item: "Jasa program LaunchPad 30", note: "mulai Rp 9,9 jt — mencakup empat fase dari pendirian sampai go-live" },
      { item: "Biaya notaris pendirian", note: "menyesuaikan bentuk entitas dan jumlah pendiri — diperinci di penawaran" },
      { item: "Biaya pengesahan & negara", note: "sesuai ketentuan per bentuk entitas — bagi PT usaha mikro dan kecil, PP 8/2021 memudahkan pendiriannya dengan modal dasar yang ditetapkan langsung di anggaran dasar" },
      { item: "Pendaftaran merek DGIP", note: "tarif resmi pendaftaran ditambah jasa pemeriksaan nama terlebih dahulu" },
      { item: "Infrastruktur digital", note: "domain dan kebutuhan landing page — dipetakan transparan sebelum dikerjakan" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "PP No. 8 Tahun 2021 tentang Perlindungan Usaha Mikro, Usaha Kecil, Usaha Menengah dan Percepatan Kemitraan",
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
      "UU No. 28 Tahun 2007 tentang Ketentuan Umum dan Tata Cara Perpajakan beserta PP No. 23 Tahun 2018 tentang PPh atas Penghasilan Usaha Mikro, Kecil, dan Menengah",
    ],
  },
  "shield-kepatuhan-tahunan": {
    whoFor: [
      "Pemilik bisnis yang waktunya habis untuk berkas — dan belum punya tim administrasi penuh waktu",
      "Perusahaan dengan banyak izin yang tanggal kedaluwarsanya tersebar sepanjang tahun",
      "Usaha yang pernah kena denda atau kehilangan peluang karena tenggat terlewat",
      "Manajemen yang ingin status kepatuhan terbaca satu dashboard saat rapat direksi",
    ],
    deliverables: [
      "Kalender kewajiban personal: pajak, OSS, BPJS, ketenagakerjaan, dan perpanjangan izin — personal per entitas dan per tanggal",
      "Pengingat proaktif via WhatsApp untuk setiap tenggat, lengkap dengan status dan pemegang pekerjaan",
      "Eksekusi administratif rutin dalam kuota bulanan beserta bukti serah terima",
      "Peringatan dini izin kedaluwarsa bertingkat H-90, H-60, dan H-30",
      "Dashboard status dan laporan bulanan yang bisa dibaca direksi",
    ],
    costs: [
      { item: "Langganan Compliance Shield™", note: "mulai Rp 2,9 jt/bulan — kontrak 12 bulan, kuota eksekusi tertulis di kontrak" },
      { item: "Onboarding pemetaan kewajiban", note: "berjalan 1 minggu pada awal kontrak — termasuk dalam langganan, hasilnya kalender personal yang disepakati" },
      { item: "Pekerjaan di luar kuota", note: "dipisahkan dengan penawaran tertulis — tanpa biaya diam-diam" },
      { item: "Pembayaran pajak & iuran", note: "dari rekening perusahaan — jejak tetap bersih atas nama Anda" },
      { item: "Perizinan penutupan bila dibutuhkan", note: "biaya negara dan jasa diperinci sebelum dikerjakan" },
    ],
    legalBasis: [
      "UU No. 28 Tahun 2007 tentang Ketentuan Umum dan Tata Cara Perpajakan jo. UU No. 7 Tahun 2021",
      "PP No. 5 Tahun 2021 tentang Perizinan Berusaha Berbasis Risiko (kewajiban laporan kegiatan usaha)",
      "UU No. 24 Tahun 2011 tentang Badan Penyelenggara Jaminan Sosial",
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan",
    ],
  },

  "deal-room-negosiasi": {
    whoFor: [
      "Founder yang menerima term sheet investor untuk pertama kali dan tidak ingin menandatangani tanpa memahami setiap klausulnya",
      "Pemilik bisnis keluarga yang memasuki kemitraan JV dengan mitra asing",
      "Perusahaan yang menerima offer akuisisi dan ingin memastikan harga tidak tergerus temuan DD",
      "Bisnis yang berada di posisi membeli — akuisisi saham atau aset — dan butuh struktur yang benar",
    ],
    deliverables: [
      "Analisis term sheet per klausul dengan skenario uang dan rekomendasi yang layak diperjuangkan",
      "Rencana due diligence dua arah: daftar permintaan, penyaringan temuan, dan dampaknya ke harga serta jadwal closing",
      "Strategi negosiasi per sidang beserta peran setiap pihak dari sisi Anda",
      "Draf SHA/SPA yang digarap bersama notaris beserta catatan setiap perubahannya",
      "Checklist kewajiban pasca-closing: perubahan akta, laporan BKPM, notifikasi KPPU bila ambang tercapai",
    ],
    costs: [
      { item: "Jasa Deal Desk per deal", note: "mulai Rp 12,5 jt — dari term sheet sampai closing" },
      { item: "Jasa notaris & pengesahan", note: "sesuai pekerjaan akta yang dibutuhkan — diperinci sebelum mulai" },
      { item: "Due diligence pihak ketiga", note: "kajian teknis atau keuangan mendalam bila diperlukan — dipilih bersama" },
      { item: "Sewa data room virtual", note: "bila pertukaran dokumen ingin terpusat dan tercatat — menyatu dengan layanan data-room-virtual kami" },
      { item: "Biaya negara & pelaporan", note: "laporan BKPM dan notifikasi KPPU tidak berbiaya — kewajiban kepatuhannya kami eksekusi" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "UU No. 25 Tahun 2007 tentang Penanaman Modal (laporan kegiatan penanaman modal)",
      "UU No. 5 Tahun 1999 tentang Larangan Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
      "PP No. 57 Tahun 2010 tentang pemeriksaan perkara merger, penggabungan usaha, dan akuisisi perseroan",
    ],
  },

  "exit-ready-valuation": {
    whoFor: [
      "Pemilik bisnis yang memikirkan jual, serah terima, atau pensiun dalam 2–3 tahun ke depan",
      "Founder yang ingin opsi pendanaan berikutnya tetap terbuka tanpa kaget saat due diligence datang",
      "Bisnis keluarga yang menyiapkan suksesi dan butuh fondasi yang tertulis",
      "Perusahaan yang dipanggil pembeli strategis dan ingin memulai negosiasi dari posisi siap",
    ],
    deliverables: [
      "Skor Exit-Ready per pilar beserta rincian celahnya",
      "Rencana kerja kuartalan dengan prioritas, biaya, dan waktu",
      "Pemetaan temuan due diligence diri: apa yang akan ditemukan pembeli lebih dulu dan berapa kira-kira nilai yang dipertaruhkan",
      "Dokumen remediasi: pembukuan, legalitas, KI, kontrak kunci, dan struktur pajak",
      "Narasi pertumbuhan dan paket data metrik yang siap dipakai bernegosiasi",
    ],
    costs: [
      { item: "Program Exit Ready™", note: "mulai Rp 15 jt — evaluasi awal, skor Exit-Ready, dan rencana kuartalan pertama" },
      { item: "Pekerjaan penutupan per pilar", note: "akuntan, notaris, pajak, KI — dihitung per butir, transparan di rencana" },
      { item: "Audit laporan keuangan pihak ketiga", note: "bila dituntut skala deal — kami bantu memilih dan mengkoordinasikan" },
      { item: "Pendaftaran & pemutakhiran KI", note: "merek dan KI lain didaftarkan ulang atas nama PT — tarif resmi DGIP sesuai jenisnya" },
      { item: "Pemutakhiran data room", note: "termasuk evaluasi kuartalan — dokumen selalu siap dibuka" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "PSAK dan SAK Entitas Privat (SAK-EP) sebagai kerangka pelaporan keuangan",
      "UU No. 28 Tahun 2007 tentang Ketentuan Umum dan Tata Cara Perpajakan jo. UU No. 7 Tahun 2021",
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
    ],
  },
  "tender-ready-program": {
    whoFor: [
      "Kontraktor dan penyedia jasa yang baru mulai mengikuti lelang pemerintah",
      "Perusahaan yang sudah beberapa kali gugur administratif dan ingin berhenti kehilangan biaya ikut lelang",
      "Supplier yang dituntut registrasi vendor korporasi besar dengan standar dokumentasi ketat",
      "Bisnis yang ingin menambah pendapatan dari pengadaan tanpa menambah kacau administrasi",
    ],
    deliverables: [
      "Peta kualifikasi: kesesuaian NIB, SBU/SKK, dan sertifikat personel dengan paket yang realistis diikuti, lengkap dengan estimasi biaya menutup setiap celah",
      "Dokumen administratif baku LPSE siap pakai ulang beserta daftar perawatannya",
      "Registrasi vendor: LPSE daerah dan portal supplier korporasi yang relevan",
      "Kalender dan saringan tender relevan beserta alasan layak atau tidak mengikuti",
      "Laporan simulasi evaluasi administrasi beserta daftar perbaikan yang dilakukan sebelum lelang pertama berjalan",
    ],
    costs: [
      { item: "Program TenderReady™", note: "mulai Rp 6,5 jt — pemetaan kualifikasi, dokumen baku, dan simulasi evaluasi" },
      { item: "Sertifikasi badan usaha & personel", note: "SBU, SKA/SKT/SKTTK — dihitung per butir sesuai celah yang ditemukan" },
      { item: "SNI bila produk wajib", note: "tarif lembaga sertifikasi terpisah — kebutuhannya kami petakan lebih dulu" },
      { item: "Biaya negara & pengesahan", note: "sesuai dokumen yang harus diterbitkan ulang" },
      { item: "Keanggotaan portal vendor", note: "portal supplier korporasi tertentu mengenakan biaya tahunan — diberitahu sebelum mendaftar" },
    ],
    legalBasis: [
      "Perpres No. 16 Tahun 2018 tentang Pengadaan Barang/Jasa Pemerintah jo. Perpres No. 12 Tahun 2021",
      "UU No. 2 Tahun 2017 tentang Jasa Konstruksi",
      "PP No. 8 Tahun 2021 tentang Perlindungan Usaha Mikro, Kecil, dan Menengah serta Kemudahan Berusaha",
      "Peraturan LPJK tentang uji kelayakan dan pendaftaran tenaga kerja konstruksi (SKA/SKT/TDK dan SKTTK)",
    ],
  },

  "pendiri-pribadi-shield": {
    whoFor: [
      "Pendiri tunggal atau keluarga yang sahamnya tersebar di anggota keluarga tanpa kesepakatan tertulis",
      "Direktur utama yang menandatangani banyak kewajiban atas nama perseroan setiap hari",
      "Pendiri dengan rekening dan aset yang masih bercampur antara bisnis dan pribadi",
      "Pemilik usaha yang menatap pertanyaan suksesi atau kondisi kesehatan yang menuntut kesiapan",
    ],
    deliverables: [
      "Peta titik tanggung jawab pribadi: direksi, komisaris, penjaminan, dan campuran aset — beserta sanksi masing-masing bila dibiarkan",
      "Dokumen pemisahan rekening dan aset beserta aturan pinjaman pribadi-perseroan yang sah",
      "Klausul antar pemain dalam SHA: kematian, kehilangan kecakapan, perceraian, dan penjualan saham",
      "Surat wasiat dan kuasa khusus yang disusun bersama notaris",
      "Rekomendasi asuransi jiwa kunci dan tanggung jawab beserta penetapan nilai yang masuk akal",
    ],
    costs: [
      { item: "Program Founder Shield™", note: "mulai Rp 7,5 jt — pemetaan titik tanggung jawab dan implementasi dasar" },
      { item: "Jasa notaris", note: "akta perubahan, perjanjian, dan legalisasi — diperinci sesuai dokumen yang dibutuhkan" },
      { item: "Premi asuradur", note: "jiwa kunci dan tanggung jawab — dibayar langsung ke penanggung sesuai penetapan nilai" },
      { item: "Penetapan nilai & underwriting", note: "kuesioner dan riwayat kesehatan untuk polis jiwa kunci — kami bantu menyiapkannya agar premi terkunci" },
      { item: "Pemutakhiran berkala", note: "dianjurkan setiap perubahan keluarga atau struktur saham — ringan karena fondasinya sudah ada" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (tanggung jawab direksi Pasal 99 dan larangan pinjaman kepada direksi dan komisaris Pasal 106)",
      "KUHPerdata beserta UU No. 1 Tahun 1974 tentang Perkawinan jo. UU No. 16 Tahun 2019 (harta bersama dan perjanjian kawin)",
      "UU No. 5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria (pengalihan hak atas tanah, termasuk pewarisan)",
      "UU No. 40 Tahun 2014 tentang Perasuransian",
    ],
  },
};


