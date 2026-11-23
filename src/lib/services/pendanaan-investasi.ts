import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — KATEGORI PENDANAAN & INVESTASI (10 layanan).
 * Pitch deck, valuasi, data room, SCF, kredit/KUR, hibah riset, ESOP,
 * convertible note/SAFE, IP sebagai jaminan (jaminfidusia), restrukturisasi utang.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const pendanaanContent: ServiceContent[] = [
  /* ══════════════ 1. PITCH DECK & INVESTOR KIT ══════════════ */
  {
    slug: "pitch-deck-investor",
    tagline: "Angka yang jujur, cerita yang menusuk — investor berhenti menggulir untuk Anda.",
    heroSub:
      "Pitch deck 12-15 slide yang mengikuti cara investor membaca, one-pager dan teaser yang membuat mereka membalas email Anda, plus latihan tanya-jawab yang mengubah pertanyaan tersulit menjadi peluang. Untuk pendiri yang siap naik meja pendanaan.",
    timeline: "2-3 minggu dari riset cerita sampai kit final",
    intro: [
      "Banyak pendiri mengira pitch deck adalah soal desain yang indah — padahal investor membacanya dengan pola yang bisa diprediksi: masalah, solusi, ukuran pasar, traksi, model bisnis, tim, angka, lalu ask — jumlah dana yang dicari dan alokasinya. Struktur 12-15 slide itu bukan konvensi kosong; ia mengikuti urutan berpikir pengambil keputusan investasi, dari kesadaran akan masalah sampai keyakinan menulis cek. Konteks hukumnya juga perlu dipahami sejak awal: begitu dana disetujui, penerbitan saham baru untuk investor berpijak pada UU 40/2007 tentang Perseroan Terbatas dan, untuk PT tertutup, POJK 38/POJK.04/2020 — sehingga angka dan struktur kepemilikan yang ditawarkan di deck harus bisa dipertanggungjawabkan sampai ke meja notaris.",
      "Kesalahan yang paling umum: deck penuh fitur tapi tidak pernah menjawab mengapa sekarang, mengapa tim Anda, dan berapa besar hadiahnya bagi investor. Proyeksi keuangan yang menaikkan grafik tanpa dasar asumsi langsung terbaca — investor melihat ratusan deck per tahun dan tahu persis mana angka yang dihitung dan mana yang dihias. Teaser yang membocorkan data sensitif terlalu dini, deck yang dikirim tanpa one-pager (padahal mitra investor sering meneruskannya ke rekan), dan pendiri yang goyah saat sesi tanya-jawab — ketiganya menutup pintu yang sebenarnya terbuka.",
      "Kami membangun kit pendanaan Anda sebagai satu kesatuan: riset dan penyusunan narasi, deck 12-15 slide dengan angka yang dihitung ulang dan konsisten dengan laporan keuangan Anda, proyeksi ringkas dengan asumsi yang terbuka, one-pager dan teaser yang menggoda tanpa membocorkan, lalu latihan pitching dan simulasi tanya-jawab dengan pertanyaan-pertanyaan paling menyakitkan yang biasa datang. Hasilnya bukan sekadar berkas PDF — Anda berangkat ke ruang investor dengan cerita yang utuh dan jawaban yang sudah diuji lebih dulu.",
    ],
    benefits: [
      { title: "Narasi yang menjual, bukan dekorasi", desc: "Deck disusun dari logika keputusan investor — setiap slide punya satu tugas dan mendorong pembaca ke slide berikutnya." },
      { title: "Angka yang tahan diuji", desc: "Proyeksi dan traksi direkonsiliasi dengan laporan keuangan Anda — tidak runtuh di tengah sesi tanya-jawab." },
      { title: "Teaser tanpa kebocoran", desc: "Dokumen penggoda dibuat memancing tawar-menawar tanpa membuka data sensitif sebelum perjanjian kerahasiaan dan percakapan serius." },
      { title: "Tanya-jawab sudah diuji duluan", desc: "Pertanyaan paling sulit dibawa ke ruang latihan — jawabannya menyatu dengan narasi deck, bukan diimprovisasi." },
      { title: "Satu kit untuk semua jalur", desc: "Deck, one-pager, dan teaser siap pakai untuk pitching langsung, surel pengantar, dan platform pendanaan." },
    ],
    process: [
      { title: "Riset dan penajaman cerita", desc: "Bisnis Anda dibedah: masalah yang benar-benar mahal, bukti solusi, titik pembeda — kerangka 12-15 slide disepakati bersama." },
      { title: "Penyusunan deck dan angka", desc: "Slide ditulis, proyeksi dan metrik dihitung ulang, desain dibersihkan — deck final dengan asumsi yang terbuka." },
      { title: "One-pager dan teaser", desc: "Ringkasan satu halaman dan teaser investor disusun — pesan yang sama, dosis data yang berbeda untuk tahap percakapan yang berbeda." },
      { title: "Latihan pitching dan tanya-jawab", desc: "Simulasi dengan pertanyaan-pertanyaan yang biasa menjatuhkan — penyampaian, tempo, dan jawaban krisis dipolaskan sampai mengalir." },
    ],
    requirements: [
      "Data dasar bisnis: produk, pelanggan, metrik utama (traksi, pertumbuhan, retensi — apa pun yang sudah Anda punya)",
      "Laporan keuangan atau catatan kas terkini (sementara pun tidak apa — kami bantu merapikannya)",
      "Profil tim dan alasan mereka adalah orang yang tepat (dipakai untuk slide tim dan jawaban tanya-jawab)",
      "Rencana penggunaan dana (atau kertas kosong — kami susun bersama dari data bisnis Anda)",
      "Deck atau dokumen lama bila ada — jadi bahan bedah, bukan diulang dari nol",
    ],
    faqs: [
      { q: "Berapa biaya pembuatan pitch deck profesional dan apa yang memengaruhinya?", a: "Paket kami mulai Rp 5 juta untuk kit lengkap: deck 12-15 slide, one-pager, teaser, plus latihan pitching — bukan jasa desain semata, tapi riset, penulisan narasi, rekonsiliasi angka, dan latihan tanya-jawab. Yang menggeser biaya biasanya kompleksitas data: banyak sumber metrik, proyeksi multi lini, atau kebutuhan materi dua bahasa. Bandingkan dengan satu kesempatan pitching yang gagal karena deck lemah — biaya paling mahal justru yang tidak terlihat." },
      { q: "Deck berapa slide yang ideal dan berapa lama prosesnya?", a: "12-15 slide adalah titik yang kami pakai — cukup untuk masalah, solusi, pasar, traksi, model bisnis, tim, angka, dan ask tanpa menjadi katalog produk. Prosesnya 2-3 minggu: riset dan kerangka di minggu pertama, penyusunan dan angka di minggu kedua, latihan pitching di akhir. Bila tenggat pertemuan investor lebih cepat, ada alur percepatan satu minggu dengan sesi kerja intensif bersama Anda." },
      { q: "Traksi saya masih kecil — apakah deck tetap layak dibuat?", a: "Layak — justru deck yang baik mengubah traksi kecil menjadi sinyal yang bisa dipercaya: kurva pertumbuhan lebih penting daripada angka absolutnya, dan bukti yang menempel seperti pelanggan awal, daftar tunggu, atau retensi lebih bernilai daripada klaim pasar raksasa. Yang kami hindarkan adalah menghias angka — investor menemukannya dalam satu pertanyaan lanjutan, dan kepercayaan yang runtuh tidak bisa direbut kembali di pertemuan yang sama." },
    ],
    related: ["valuasi-bisnis", "data-room-virtual", "convertible-note-safe", "akuisisi-merger-umkm"],
  },

  /* ══════════════ 2. VALUASI BISNIS ══════════════ */
  {
    slug: "valuasi-bisnis",
    tagline: "Tahu berapa harga bisnis Anda sebelum orang lain menetapkannya.",
    heroSub:
      "Laporan valuasi tertulis dengan metode DCF dan pembanding pasar — untuk penjualan saham, warisan, sengketa, sampai dasar garansi utang. Angka yang bisa Anda pertahankan di meja negosiasi, bukan tebakan.",
    timeline: "2-4 minggu dari data awal sampai laporan final",
    intro: [
      "Nilai perusahaan bukan hasil perasaan — ia angka yang dihitung dengan metode yang diakui: DCF yang menjumlahkan arus kas masa depan yang didiskontokan ke hari ini, multiple pembanding seperti EV/EBITDA atau P/S dari transaksi serupa, dan pendekatan aset untuk bisnis yang kaya aset. Di Indonesia, praktik penilaian profesional tunduk pada UU 1/2014 tentang Penilaian dan Standar Penilaian Indonesia (MPSPI) yang diterbitkan MAPPI — sehingga laporan yang kami susun bukan sekadar berkas hitungan, melainkan dokumen dengan metode terbuka, asumsi terbaca, dan kesimpulan yang bisa dipertanggungjawabkan. Kebutuhannya luas: penjualan saham, masuknya investor baru, pembagian warisan, sengketa pemegang saham, sampai jaminan kredit.",
      "Kesalahan yang paling mahal: pemilik bisnis menerima angka dari calon pembeli tanpa pembanding independen — dan baru menyadari harga jualnya jauh di bawah nilai wajar setelah tanda tangan. Sebaliknya, ada yang memasang harga berdasarkan gosip valuasi startup dan menggagalkan transaksi serius karena seleranya terbang ke langit. Untuk warisan dan sengketa, angka tanpa laporan tertulis sering ditolak pihak lain atau pengadilan — dan pajak pengalihan saham (PPh final yang diatur PMK 68/PMK.03/2009) dihitung dari harga yang tidak bisa dijelaskan asal-usulnya, menambah masalah di bagian yang salah.",
      "Kami menganalisis laporan keuangan dan prospek bisnis Anda, memilih kombinasi metode yang paling pantas — DCF untuk bisnis yang arus kasnya bisa diproyeksikan, multiple untuk pasar yang punya pembanding, aset untuk lapisan dasarnya — menerapkan faktor diskonto yang jujur terhadap risiko pasar Indonesia, lalu menyerahkan laporan tertulis yang menjelaskan seluruh asumsi. Saat negosiasi, Anda tidak hanya punya angka: Anda paham mengapa angka itu, bagian mana yang paling kuat, dan bagian mana yang paling bisa diperdebatkan.",
    ],
    benefits: [
      { title: "Angka yang bisa dipertahankan", desc: "Setiap asumsi tercatat dan dijelaskan — Anda bernegosiasi dengan pemahaman penuh, bukan dengan harapan." },
      { title: "Tiga metode, satu kesimpulan", desc: "DCF, multiple pembanding, dan pendekatan aset saling mengunci — kelemahan satu metode ditutup oleh metode lainnya." },
      { title: "Laporan tertulis yang diterima", desc: "Dokumen terstruktur yang bisa dipakai di negosiasi, notaris, hingga perkara warisan dan sengketa pemegang saham." },
      { title: "Risiko pasar Indonesia dihitung jujur", desc: "Faktor diskonto dan premi risiko disesuaikan realita — tidak dibumbui agar terlihat cantik lalu runtuh saat ditanya." },
      { title: "Pajak ikut terpetakan", desc: "Konsekuensi PPh pengalihan saham dihitung per skenario — tidak ada kejutan fiskal setelah transaksi selesai." },
    ],
    process: [
      { title: "Bedah data dan pemahaman bisnis", desc: "Laporan keuangan, kontrak kunci, dan prospek dibedah — sumber nilai dan risiko yang menggerusnya dipetakan." },
      { title: "Pemilihan dan perhitungan metode", desc: "DCF, multiple pembanding, dan pendekatan aset dihitung — faktor diskonto disusun berdasar risiko yang nyata di pasar Anda." },
      { title: "Rekonsiliasi dan laporan tertulis", desc: "Hasil antarmetode direkonsiliasi — laporan valuasi lengkap dengan asumsi, analisis kepekaan, dan kesimpulan nilai wajar." },
      { title: "Pendampingan negosiasi", desc: "Angka dibela dan skenario harga dijelaskan — Anda masuk meja transaksi dengan kaki yang berdiri kuat." },
    ],
    requirements: [
      "Laporan keuangan 2-3 tahun terakhir (atau catatan kas sebisanya — kami bantu menata ulang)",
      "Data operasional: pelanggan utama, kontrak penting, keunggulan yang sulit ditiru",
      "Tujuan valuasi (jual saham, investor masuk, warisan, sengketa, jaminan — menentukan pendekatan)",
      "Struktur kepemilikan saham saat ini dan rencana pengalihannya bila ada",
      "Informasi industri: pesaing utama dan transaksi pembanding yang Anda ketahui bila ada",
    ],
    faqs: [
      { q: "Berapa biaya valuasi bisnis dan apa saja yang termasuk di dalamnya?", a: "Paket kami mulai Rp 10 juta untuk laporan valuasi lengkap dengan metode DCF dan pembanding pasar. Biaya naik bila data keuangan perlu ditata lebih dulu, struktur grupnya kompleks, atau laporan dituntut dalam format penilaian resmi untuk keperluan hukum. Dibandingkan selisih harga jual yang bisa salah belasan persen karena bernegosiasi tanpa angka — biaya valuasi adalah yang termurah dalam seluruh rantai transaksi." },
      { q: "DCF dan multiple — mana yang benar untuk bisnis saya?", a: "Keduanya biasanya dipakai bersama karena saling mengunci. DCF cocok bila arus kas Anda bisa diproyeksikan dengan masuk akal — ia menghargai masa depan bisnis, bukan gosip pasar. Multiple seperti EV/EBITDA atau P/S cocok bila ada pembanding transaksi sejenis — ia menjawab apa yang benar-benar dibayar pasar hari ini. Bisnis kecil dengan keuntungan stabil biasanya bertumpu pada multiple; bisnis yang masih membakar kas tapi tumbuh cepat hidup di DCF. Laporan kami menampilkan keduanya lalu merekonsiliasinya menjadi satu kesimpulan." },
      { q: "Apakah laporan valuasi bisa dipakai untuk sengketa atau warisan?", a: "Bisa — laporan tertulis dengan metode standar dan asumsi terbuka adalah dasar penilaian yang diterima dalam pembagian warisan, sengketa pemegang saham, hingga perkara kepailitan yang diatur UU 37/2004. Untuk keperluan pengadilan atau lembaga tertentu, laporan dapat diterbitkan dalam format penilaian resmi sesuai UU 1/2014 dan MPSPI. Poin pentingnya: angka lisan dari teman atau hitungan pribadi tidak akan pernah bertahan ketika pihak lain membawa laporan tertulis — dan Anda tidak ingin menjadi pihak yang kekurangan dokumen." },
    ],
    related: ["akuisisi-merger-umkm", "pitch-deck-investor", "suksesi-penerus", "data-room-virtual"],
  },

  /* ══════════════ 3. DATA ROOM VIRTUAL ══════════════ */
  {
    slug: "data-room-virtual",
    tagline: "Investor menemukan apa yang dicarinya — tanpa menemukan alasan untuk kabur.",
    heroSub:
      "Ruang data virtual tertata untuk due diligence: 150-300 dokumen terindeks, celah ditemukan dan ditutup sebelum tamu datang, akses aman dan tercatat. Kecepatan penutupan transaksi ternyata dijual lewat keteraturan.",
    timeline: "2-4 minggu penyusunan dan audit sampai data room siap tamu",
    intro: [
      "Begitu investor serius menandatangani term sheet, due diligence dimulai — dan daftar yang diminta hampir selalu sama: legalitas badan usaha, struktur saham, kontrak kunci, keuangan, perizinan, SDM, aset, sengketa. Hitungannya mencapai 150-300 dokumen untuk transaksi menengah. Kesediaan menyerahkan dokumen adalah tanda kepercayaan, tetapi bentuk penyampaiannya menentukan kecepatan: data room yang tertata mempercepat keputusan, sedangkan kumpulan berkas yang berserakan memperlambat — dan dalam transaksi pendanaan, kecepatan adalah uang. Kerahasiaan dokumen juga wajib dijaga sesuai UU 27/2022 tentang Pelindungan Data Pribadi: akses harus terbatas, terukur, dan tercatat.",
      "Kesalahan yang paling sering menunda transaksi: dokumen penting ternyata tidak ada — akta yang tidak pernah diubah, izin yang sudah kedaluwarsa, kontrak pelanggan tanpa klausul pengalihan — lalu ditemukan tepat di depan investor. Setiap temuan seperti itu menjadi amunisi pemangkasan harga atau alasan menarik diri. Kesalahan kedua: memberi akses terlalu longgar — dokumen sensitif seperti gaji, klien utama, dan rahasia operasional terbaca oleh pihak yang tidak berhak, dan tidak ada jejak siapa melihat apa. Keduanya bisa dicegah, dan keduanya paling murah diperbaiki sebelum tamu pertama masuk.",
      "Kami membangun data room Anda dari struktur folder standar due diligence: setiap kategori punya indeks, setiap dokumen punya nama dan tanggal yang bisa dicari, dan daftar celah ditutup sebelum investor memintanya — akta diurus ulang, izin diperbarui, klausul kunci disiapkan. Akses disusun berlapis: tahap awal hanya melihat ringkasan, detail dibuka setelah perjanjian kerahasiaan terikat dan minat terbukti serius, dengan log pemeriksaan yang menunjukkan siapa membuka apa dan kapan. Hasilnya: due diligence yang berjalan dalam hitungan minggu, bukan bulan.",
    ],
    benefits: [
      { title: "Due diligence selesai cepat", desc: "Investor menemukan dokumen dengan sendirinya — keputusan tidak tertunda oleh kekacauan arsip yang harus dibongkar manual." },
      { title: "Celah ditutup sebelum ketahuan", desc: "Dokumen hilang dan izin kedaluwarsa ditemukan dan diperbaiki oleh kami — bukan ditemukan oleh calon pembeli di momen paling mahal." },
      { title: "Rahasia tetap rahasia", desc: "Akses berlapis dengan perjanjian kerahasiaan, peran, dan batas waktu — dokumen sensitif hanya terbuka bagi yang berhak." },
      { title: "Jejak akses lengkap", desc: "Log siapa membuka apa tersimpan rapi — klaim yang tidak pernah menerima berkas tidak bisa dipakai bermain di tengah negosiasi." },
      { title: "Nilai transaksi terlindungi", desc: "Setiap temuan due diligence adalah mata uang pemotongan harga — keteraturan menutup sumber pemotongan yang sebenarnya tidak perlu." },
    ],
    process: [
      { title: "Pemetaan dan struktur folder", desc: "Daftar periksa due diligence disesuaikan dengan transaksi Anda — struktur folder dan indeks dibangun sejak hari pertama." },
      { title: "Pengumpulan dan audit dokumen", desc: "Dokumen dikumpulkan dan keabsahannya dicek — daftar celah tersusun dengan prioritas dan jalur perbaikan masing-masing." },
      { title: "Perbaikan dan pengisian penuh", desc: "Dokumen yang kurang diurus — perubahan akta, pembaruan izin, klausul kunci — sampai data room terisi lengkap dan sah." },
      { title: "Akses aman dan pendampingan", desc: "Peran akses ditata, kerahasiaan dibakukan, log aktif — kami dampingi menjawab permintaan dokumen hingga transaksi tuntas." },
    ],
    requirements: [
      "Akses ke arsip legal dan keuangan perusahaan (akta, laporan, kontrak, izin — format apa pun, kami digitalisasi)",
      "Gambaran transaksi yang direncanakan: jual saham, investor masuk, merger, kredit — menentukan daftar periksa dan lapisan akses",
      "Kontak pemegang dokumen (notaris, konsultan pajak, administrasi SDM) bila sebagian arsip tersebar",
      "Kesepakatan dokumen sensitif yang diberi lapisan akses tertinggi",
      "Perjanjian kerahasiaan yang sudah ada bila ada — bila belum, kami susunkan",
    ],
    faqs: [
      { q: "Berapa biaya membangun data room virtual?", a: "Mulai Rp 7,5 juta untuk paket standar: struktur folder, pengumpulan, audit celah, dan pengelolaan akses. Biaya bergerak naik bila arsip masih kertas dalam jumlah besar (ada biaya digitalisasi), banyak dokumen yang harus diurus ulang seperti perubahan akta atau izin baru, atau transaksinya melibatkan beberapa entitas. Bandingkan dengan satu temuan due diligence yang dipakai pembeli memangkas harga transaksi — penghematannya berkali lipat dari biaya penyiapannya." },
      { q: "Berapa lama sampai data room siap dan kapan sebaiknya mulai?", a: "2-4 minggu dari titik mulai hingga siap menerima tamu, tergantung kelengkapan arsip awal. Sebaiknya mulai sebelum term sheet ditandatangani — bahkan jauh sebelum itu: bisnis yang menyimpan arsip tertata sejak dini selalu terlihat siap dan tidak pernah kehilangan kesempatan pendanaan karena dokumen belum beres. Bila investor sudah mengirim daftar permintaan dan tenggat, kami menjalankan mode percepatan dengan memprioritaskan dokumen yang paling dulu diminta." },
      { q: "Apakah dokumen sensitif seperti gaji dan daftar klien harus ikut dibuka?", a: "Tidak semuanya sekaligus — dan memang tidak seharusnya. Praktik yang benar adalah akses berlapis: pada tahap awal investor melihat ringkasan dan dokumen legal inti; detail sensitif seperti gaji individual, klien bervolume besar, atau rahasia bisnis dibuka setelah perjanjian kerahasiaan terikat dan minatnya terbukti serius, biasanya di akhir due diligence. Log akses memastikan Anda selalu tahu apa yang sudah dibuka kepada siapa — dan bisa membatasi atau mencabut akses kapan pun." },
    ],
    related: ["pitch-deck-investor", "akuisisi-merger-umkm", "legal-drafting", "valuasi-bisnis"],
  },

  /* ══════════════ 4. PENDANAAN SECURITIES CROWDFUNDING ══════════════ */
  {
    slug: "pendanaan-scf",
    tagline: "Seribu investor kecil membiayai impian yang bank pikirkan dua kali.",
    heroSub:
      "Galang dana berbasis saham di platform Securities Crowdfunding berizin OJK — legal, terstruktur, dan menjangkau ribuan mikroinvestor yang justru menjadi pelanggan setia Anda.",
    timeline: "Kesiapan dan dokumen 4-8 minggu · Kampanye galangan 30-60 hari",
    intro: [
      "Securities Crowdfunding (SCF) memungkinkan publik membeli saham PT tertutup lewat platform pendanaan massal — mekanisme yang diloloskan OJK melalui POJK 57/POJK.04/2020 tentang Penyelenggaraan Layanan Urun Dana. Penerbitnya harus berbadan hukum PT, menjual saham dengan batas dana yang diatur regulasi, dan mempublikasikan lembar faktual — dokumen pengungkapan yang menjadi wajah jujur perusahaan di hadapan ribuan investor kecil. Kerangka besar diperkuat UU 4/2023 (P2SK) yang melegitimasi urun dana sebagai bagian dari sektor keuangan digital. Bagi bisnis yang menolak menjadi milik satu investor raksasa, SCF adalah jalan pendanaan dengan ribuan pemilik kecil yang sekaligus menjadi pelanggan dan duta produk.",
      "Yang membuat galangan gagal: perusahaan mengajukan ke platform sebelum legalitas dan keuangannya rapi — dan tersingkir di saringan awal. Yang lolos lalu menulis lembar faktual seolah itu brosur promosi: klaim tanpa dasar, proyeksi tanpa asumsi — berisiko diminta koreksi OJK atau platform, atau lebih buruk, menjadi bahan gugatan investor bila realitanya berbeda dari yang dijanjikan. Ada pula yang mengabaikan kewajiban pasca-galang: pelaporan berkala ke investor dan platform. Ingat: setelah dana cair, Anda punya ratusan hingga ribuan pemegang saham kecil yang mengharapkan kabar — menghilang setelah cair adalah cara tercepat membakar reputasi di pasar pendanaan publik.",
      "Kami menyiapkan Anda sampai platform menyetujui: pemeriksaan kelayakan (struktur PT, saham, keuangan), penataan struktur saham dan harga per lembar yang masuk akal, penyusunan lembar faktual yang memenuhi format OJK — jujur, menarik, dan bisa dipertanggungjawabkan — dukungan materi kampanye, sampai sistem pelaporan pasca-galangan yang berjalan dari kalender kami. Kami juga berbicara jujur di awal bila SCF bukan jalur yang pas untuk tahap bisnis Anda — dan mengarahkan ke alternatif yang lebih cocok.",
    ],
    benefits: [
      { title: "Jalur legal yang jelas", desc: "SCF berizin OJK dengan regulasi lengkap — bukan urun dana abu-abu yang masa depannya menggantung." },
      { title: "Ribuan pemilik kecil, satu komunitas", desc: "Investor SCF umumnya juga pelanggan — pendanaan dan pasar tumbuh bersamaan dalam satu gerakan." },
      { title: "Lembar faktual yang lolos dan jujur", desc: "Dokumen disusun sesuai format OJK — menarik tanpa klaim yang kelak memakan Anda balik." },
      { title: "Tanpa satu penguasa tunggal", desc: "Kepemilikan terpecah secara wajar — pendiri tetap memegang kendali operasional dan arah perusahaan." },
      { title: "Kewajiban pasca-galang tertata", desc: "Sistem pelaporan berkala siap sejak hari pertama — reputasi di pasar pendanaan terjaga untuk galangan berikutnya." },
    ],
    process: [
      { title: "Pemeriksaan kelayakan dan struktur", desc: "Status PT, saham, keuangan, dan rencana dana diperiksa — cocok atau tidak cocok untuk SCF diputuskan dengan jujur di awal." },
      { title: "Penyusunan dokumen dan lembar faktual", desc: "Harga per lembar, plafon galangan, dan lembar faktual disusun sesuai format OJK dan ketentuan platform." },
      { title: "Pengajuan ke platform dan kampanye", desc: "Akun penerbit dibuka, materi kampanye disiapkan — galangan berjalan dengan jawaban yang siap untuk pertanyaan investor." },
      { title: "Dana cair dan pelaporan pasca-galang", desc: "Dana diterima, saham dicatat benar — jadwal pelaporan berkala ke investor dan platform berjalan dari kalender kami." },
    ],
    requirements: [
      "PT aktif dengan legalitas lengkap: akta, SK pengesahan, NIB (bila belum berdiri, kami urus terlebih dulu)",
      "Laporan keuangan atau catatan keuangan yang bisa disusun ulang (kami bantu menatanya)",
      "Rencana penggunaan dana dan proyeksi bisnis (kami bantu menyusunnya dari data nyata Anda)",
      "Kesediaan membuka informasi perusahaan kepada publik investor — prinsip dasar SCF",
      "Kesediaan menjalankan kewajiban pelaporan pasca-galangan — jangan galang bila belum siap bercerita berkala",
    ],
    faqs: [
      { q: "Berapa biaya menggalang dana lewat SCF?", a: "Jasa persiapan kami mulai Rp 10 juta: pemeriksaan kelayakan, struktur saham, lembar faktual, dan materi kampanye. Di atas itu ada biaya platform — umumnya persentase dari dana terkumpul, tarifnya berbeda antar platform — dan biaya resmi yang kecil. Bandingkan dengan bunga pinjaman atau potongan saham besar yang diminta satu investor tunggal — SCF sering lebih hemat, terutama karena komunitas investor Anda sekaligus pasar Anda." },
      { q: "Berapa dana yang bisa digalang dan berapa lama kampanyenya?", a: "Plafon dana penerbit diatur POJK 57/2020 dan diperbarui dari waktu ke waktu — platform yang kami ajak bekerja akan menyampaikan batas yang berlaku saat pengajuan Anda. Kampanye umumnya berjalan 30-60 hari, dan galangan yang berhasil biasanya punya komunitas yang sudah hangat sebelum kampanye dibuka, bukan mulai promosi di hari pertama. Kesiapan internal menentukan hasil lebih banyak daripada besarnya anggaran iklan." },
      { q: "Apa risiko terbesar bila menggalang dana SCF?", a: "Risiko utamanya bukan ditolak platform — melainkan gagal memenuhi kewajiban pasca-galang: pelaporan berkala dan pengelolaan ratusan pemegang saham kecil. Bila kewajiban pengungkapan diabaikan, sanksi administratif bisa datang dari OJK atau platform, dan reputasi Anda di pasar pendanaan publik terbakar — sulit galang lagi di kemudian hari. Risiko kedua: lembar faktual yang berisi klaim berlebihan bisa menjadi bahan sengketa dengan investor. Keduanya kami tutup sejak tahap persiapan — termasuk kejujuran di awal bila bisnis Anda belum siap menjadi penerbit." },
    ],
    related: ["pendirian-pt", "pitch-deck-investor", "valuasi-bisnis", "legal-drafting"],
  },

  /* ══════════════ 5. PROPOSAL KREDIT / KUR ══════════════ */
  {
    slug: "kredit-kur",
    tagline: "Bank tidak menolak bisnis — ia menolak berkas yang tidak bisa dibaca.",
    heroSub:
      "Proposal bisnis, proyeksi arus kas, dan dokumen persyaratan yang disusun sesuai cara bank menilai — untuk KUR berbunga subsidi maupun kredit modal kerja konvensional, dengan strategi agunan alternatif bila aset tetap terbatas.",
    timeline: "Penyusunan dokumen 3-7 hari kerja · Keputusan bank 1-4 minggu",
    intro: [
      "Kredit Usaha Rakyat (KUR) memberi bunga subsidi yang jauh di bawah kredit konvensional — skemanya diperbarui berkala melalui Peraturan Menteri Keuangan (yang terakhir PMK 40/PMK.05/2022 beserta perubahannya): plafon per debitur, batas skala usaha mikro dan kecil, serta persyaratan Pelaku Usaha Mikro dan Kecil yang wajib dipenuhi. Di jalur lain, kredit modal kerja konvensional menuntut analisis yang lebih berat: arus kas yang mampu membayar angsuran, agunan yang cukup atau alternatifnya, dan riwayat kredit yang bersih. Keduanya berpapangkal pada hal yang sama: bank memutuskan dari dokumen yang mampu menjelaskan bisnis Anda.",
      "Penolakan kredit paling sering bukan karena bisnisnya buruk — tetapi karena berkasnya tidak menjawab pertanyaan bank: omzet yang diucapkan lisan tanpa bukti, arus kas yang tidak terlihat arahnya, agunan yang statusnya belum jelas, atau legalitas dan NPWP yang belum rapi. Ada pula yang mengajukan KUR padahal skala usahanya sudah melewati batas skemanya — ditolak, dan meninggalkan jejak pengajuan gagal. Begitu catatan penolakan bertumpuk di riwayat kredit, peluang pengajuan berikutnya menurun — padahal bisnisnya sebenarnya layak.",
      "Kami menyusun paket pengajuan yang menjawab cara bank menilai: profil bisnis yang terdokumentasi, proyeksi arus kas yang realistis — bukan grafik mimpi, melainkan proyeksi yang bisa dipertahankan saat analis bertanya — kelengkapan dokumen dari legalitas sampai laporan, dan saran pemilihan jalur yang tepat: KUR bila memenuhi syaratnya, modal kerja konvensional dengan struktur agunan atau penjaminan alternatif bila tidak. Hingga keputusan terbit, kami dampingi menjawab pertanyaan analis — karena satu jawaban yang jelas sering memisahkan disetujui dan ditolak.",
    ],
    benefits: [
      { title: "Berkas yang menjawab, bukan sekadar lengkap", desc: "Dokumen disusun mengikuti logika penilaian bank — analis menemukan jawabannya sebelum sempat bertanya." },
      { title: "Jalur KUR atau konvensional yang benar", desc: "Kelayakan skema diuji lebih dulu — tidak ada pengajuan gagal yang meninggalkan jejak di tempat yang salah." },
      { title: "Proyeksi kas yang tahan ditanya", desc: "Angka dibangun dari riwayat nyata bisnis Anda — realistis saat diuji, bukan hanya cantik di atas kertas." },
      { title: "Agunan bukan lagi dinding", desc: "Opsi agunan alternatif dan skema penjaminan dipetakan — bisnis tanpa sertifikat tanah tetap punya jalan." },
      { title: "Pendampingan sampai keputusan", desc: "Pertanyaan analis dijawab dengan persiapan — tidak ada momen bingung di tengah proses yang seharusnya cepat." },
    ],
    process: [
      { title: "Bedah kelayakan dan pemilihan jalur", desc: "Skala usaha, legalitas, dan riwayat keuangan diperiksa — KUR atau konvensional dipilih berdasar syarat yang benar-benar Anda penuhi." },
      { title: "Penyusunan paket dokumen", desc: "Profil bisnis, proposal, proyeksi kas, dan kelengkapan administrasi disusun menjadi satu paket siap serah ke bank." },
      { title: "Pengajuan dan penjawaban analis", desc: "Berkas diajukan, pertanyaan analis didampingi — kekurangan kecil ditutup cepat sebelum sempat menjadi alasan penolakan." },
      { title: "Hasil dan langkah lanjut", desc: "Persetujuan disambut dengan pemahaman skema angsurannya; penolakan dibedah alasannya — jalur perbaikan pengajuan berikutnya tergambar." },
    ],
    requirements: [
      "Data usaha: NIB atau legalitas, NPWP, dan catatan transaksi (rekening koran 3-6 bulan terakhir)",
      "Kepemilikan usaha dan kartu identitas pengurus",
      "Catatan penjualan dan biaya apa pun yang ada — buku kas, nota, laporan sementara",
      "Informasi agunan bila ada (SHM/SHGB, BPKB) — tidak wajib, kami petakan alternatifnya bila tidak ada",
      "Riwayat kredit sebelumnya bila ada (laporan SLIK dapat kami bantu ambilkan dan bacakan)",
    ],
    faqs: [
      { q: "Berapa biaya jasanya — apakah dihitung persen dari kredit yang disetujui?", a: "Jasa kami mulai Rp 2 juta — tarif tetap untuk penyusunan paket dokumen dan pendampingan, bukan persentase dari kredit yang disetujui. Yang bisa menambah biaya hanyalah bila ada dokumen dasar yang harus dibuat lebih dulu, misalnya legalitas atau laporan keuangan sederhana. Kami tidak menjanjikan persetujuan — yang menentukan akhirnya kondisi bisnis dan kebijakan bank — tetapi kami memastikan penolakan tidak pernah terjadi karena berkas yang buruk." },
      { q: "Syarat apa saja untuk mendapat KUR, dan bagaimana kalau saya tidak memenuhinya?", a: "KUR untuk usaha mikro dan kecil dengan plafon tertentu — syarat intinya: usaha produktif yang benar-benar berjalan, legalitas dasar seperti NIB, dan masuk kriteria Pelaku Usaha Mikro Kecil sesuai PMK yang berlaku. Bila skala usaha sudah melewati batasnya, jalur yang tepat bukan KUR melainkan kredit modal kerja konvensional — bunganya lebih tinggi, tetapi plafonnya jauh lebih besar. Kesalahan terbesar adalah memaksakan KUR saat tidak memenuhi syarat: ditolak, meninggalkan jejak, dan pengajuan berikutnya ikut berat. Kami memetakan jalurnya sejak awal." },
      { q: "Berapa lama proses pengajuan dan apa yang membuatnya lama?", a: "Penyusunan dokumen di pihak kami 3-7 hari kerja. Keputusan bank umumnya 1-4 minggu tergantung jenis kreditnya — KUR mikro sering lebih cepat, modal kerja konvensional dengan analisis lebih dalam bisa lebih lama. Yang paling sering memperlambat: dokumen menyusul yang datang terpotong-potong dan pertanyaan analis yang lambat dijawab. Kedua hal itu kami tutup — berkas lengkap sejak serah, dan pertanyaan dijawab dalam hari yang sama." },
    ],
    related: ["pt-perorangan", "nib-oss", "npwp-pkp", "virtual-office"],
  },

  /* ══════════════ 6. PENDANAAN RISET & HIBAH ══════════════ */
  {
    slug: "hibah-riset",
    tagline: "Ide yang bagus layak didanai — proposal yang benar adalah pintunya.",
    heroSub:
      "Pemetaan skema hibah riset dari Kedaireka, RISPRO LPDP, BRIN, sampai hibah koperasi — proposal yang lolos seleksi, anggaran yang patuh ketentuan, dan dana yang benar-benar cair sampai laporan akhir.",
    timeline: "Proposal dan MOU 2-4 minggu · Siklus seleksi lembaga 2-6 bulan",
    intro: [
      "Indonesia punya banyak pintu dana riset yang jarang dimanfaatkan: Kedaireka dengan skema match funding yang menandingkan dana kampus dengan kontribusi mitra industri, RISPRO dari LPDP untuk riset yang ditujukan peningkatan produktivitas industri (diatur PMK 51/PMK.05/2018), skema riset BRIN untuk kolaborasi lembaga yang kini berpijak pada Perpres 78/2021, sampai hibah pengembangan koperasi di bawah payung UU 25/1992. Masing-masing punya struktur proposal, jatah anggaran — berapa persen boleh ke honorarium, berapa ke operasional — dan tuntutan mitra: MOU, bukti kontribusi, luaran yang terukur. Yang membedakan penerima dan bukan penerima jarang ada pada kualitas idenya — lebih sering pada kesesuaian proposal dengan format dan prioritas yang diminta lembaga.",
      "Kesalahan yang paling sering menggagalkan: proposal ditulis dengan bahasa akademik yang kaya, tetapi anggarannya tidak patuh ketentuan — honorarium melebihi jatah, pos belanja yang tidak diakui, luaran yang tidak bisa diukur. Kedua: MOU mitra disiapkan terlambat atau isinya tidak selaras dengan proposal — selektor langsung membaca ketidakseriusan. Ketiga: setelah dana cair, pelaporan kemajuan diabaikan dan dana terpotong atau diminta kembali. Dan yang sering terlupa: kekayaan intelektual hasil riset — siapa memilikinya, bagaimana hak komersialisasinya — bila tidak ditulis jelas sejak awal, konflik menunggu di akhir jalan.",
      "Kami bekerja dari pemetaan skema: dana mana yang paling pas untuk karakter riset dan tahap lembaga atau bisnis Anda, lalu proposal disusun dengan struktur yang dicari selektor — latar belakang, metodologi, luaran terukur, rencana komersialisasi bila dituntut — anggaran yang patuh ketentuan per pos, MOU mitra yang sinkron dengan isi proposal, dan peta kepemilikan IP hasil riset sejak awal. Setelah dana cair, sistem pelaporan kemajuan berkala berjalan dari kalender kami — karena hibah yang baik berakhir dengan laporan yang rapi dan peluang dana berikutnya yang terbuka.",
    ],
    benefits: [
      { title: "Skema yang tepat sejak awal", desc: "Kedaireka, RISPRO, BRIN, atau koperasi dipetakan ke karakter riset Anda — tenaga tidak terbakar di pintu yang salah." },
      { title: "Proposal yang menjawab selektor", desc: "Struktur dan bahasa mengikuti kriteria penilaian — bukan karangan akademik yang indah tetapi nyasar formatnya." },
      { title: "Anggaran patuh, tidak dipotong", desc: "Setiap pos mengikuti jatah ketentuan lembaga — tidak ada kasus honorarium berlebih yang menunda pencairan." },
      { title: "MOU mitra yang sinkron", desc: "Dokumen kemitraan selaras dengan isi proposal — sinyal kesiapan yang membuat skor penilaian naik." },
      { title: "IP hasil riset terjaga", desc: "Kepemilikan dan hak komersialisasi ditulis jelas sejak MOU — tidak ada sengketa ketika risetnya berhasil." },
    ],
    process: [
      { title: "Pemetaan skema dan kelayakan", desc: "Skema pendanaan dipetakan dengan prioritas dan tenggatnya — target yang realistis dipilih, bukan sekadar yang paling menggiurkan." },
      { title: "Penyusunan proposal dan anggaran", desc: "Proposal ditulis sesuai format seleksi, anggaran disusun patuh per pos — luaran terukur dan jadwal yang jelas." },
      { title: "MOU mitra dan pengajuan", desc: "Kemitraan dibakukan, dokumen lengkap diajukan — pertanyaan administrasi dari panitia seleksi dijawab cepat." },
      { title: "Pasca-cair: pelaporan dan IP", desc: "Dana dipakai sesuai pos, kemajuan dilaporkan tepat waktu — kepemilikan hasil riset tercatat dan siap menuju komersialisasi." },
    ],
    requirements: [
      "Ringkasan riset atau ide: tujuan, metode garis besar, dan luaran yang diharapkan (kami bantu mematangkan)",
      "Profil lembaga atau tim pengusul: perguruan tinggi, lembaga, perusahaan, atau koperasi",
      "Calon mitra bila ada (industri, kampus, koperasi — MOU kami susun; bila belum ada, kami bantu memetakan polanya)",
      "Estimasi kebutuhan dana garis besar (dipetakan ulang ke jatah pos skema yang dipilih)",
      "Dokumen legalitas pengusul (NIB, akta, atau dokumen kampus — sesuai jenis pengusul yang diminta skema)",
    ],
    faqs: [
      { q: "Berapa biaya jasanya — apakah diambil dari dana hibahnya?", a: "Tidak — jasa kami mulai Rp 7,5 juta dan dibayar terpisah dari dana hibah, karena dana hibah wajib dipakai sesuai pos anggaran yang disetujui lembaga. Memasukkan jasa konsultan ke pos anggaran hibah tanpa izin adalah pelanggaran yang bisa membatalkan penggunaan dana. Posisinya kami buat transparan: yang Anda bayar adalah pemetaan skema, penyusunan proposal, anggaran, dan MOU — dana hibah murni untuk risetnya." },
      { q: "Berapa lama dari proposal sampai dana cair?", a: "Penyusunan proposal dan MOU memakan 2-4 minggu di pihak kami. Seleksi lembaga memakan 2-6 bulan tergantung skemanya — Kedaireka dan RISPRO punya siklus tahunan dengan tenggat yang pasti, sehingga strategi terbaik adalah masuk siklus terdekat dengan dokumen yang benar-benar siap, bukan buru-buru mendaftar lalu direvisi berkali-kali. Setelah dinyatakan lolos dan perjanjian diteken, pencairan biasanya bertahap — tahap pertama cair beberapa minggu setelah tanda tangan." },
      { q: "Siapa pemilik hasil riset dan bolehkah dikomersialkan?", a: "Tergantung skema dan perjanjian yang ditandatangani — dan itulah alasan IP harus ditata sebelum proposal diajukan. Skema riset industri umumnya mengatur pembagian hak: lembaga pendanai sering mendapat hak prioritas atau pembagian royalti, mitra industri mendapat lisensi penggunaan, dan peneliti memegang hak cipta sesuai UU 28/2014 serta hak paten sesuai UU 13/2016 bila didaftarkan. Kami menulis ketentuan ini dengan jelas di MOU dan proposal — supaya ketika risetnya berhasil, yang muncul adalah komersialisasi, bukan sengketa." },
    ],
    related: ["pendirian-yayasan", "hak-cipta-paten", "pendirian-koperasi", "pitch-deck-investor"],
  },

  /* ══════════════ 7. ESOP ══════════════ */
  {
    slug: "esop-program",
    tagline: "Gaji menarik orang masuk — kepemilikan yang membuat mereka bertahan.",
    heroSub:
      "Skema ESOP yang adil, mengikat, dan patuh pajak — pool saham, vesting dengan masa penguatan, sampai perjanjian per karyawan. Alat retensi talenta kunci untuk startup yang tumbuh maupun korporasi yang melangkah ke suksesi.",
    timeline: "3-5 minggu dari desain skema sampai dokumen ditandatangani",
    intro: [
      "ESOP (Employee Stock Ownership Program) mengubah karyawan menjadi pemilik: sebagian kepemilikan perusahaan disiapkan sebagai pool — umumnya 10-15 persen untuk startup — dialokasikan kepada orang-orang kunci, dan diperoleh bertahap lewat vesting dengan pola umum 4 tahun dan masa tunggu (cliff) 1 tahun: tidak ada saham yang melekat sebelum 12 bulan pertama lewat, lalu melekat bertahap tiap bulan atau kuartal. Untuk PT tertutup, program ini berpijak pada UU 40/2007 dan POJK 38/POJK.04/2020 yang mengatur penerbitan efek oleh perseroan terbatas tertutup, termasuk program ESOP. Sisi pajaknya diatur PMK 130/PMK.03/2020: keuntungan karyawan saat transfer atau jual saham ESOP dikenai PPh — mekanismenya harus dipahami sejak desain, bukan saat dana jual datang.",
      "Skema yang disusun asal-asalan menimbulkan tiga bom waktu. Pertama: vesting yang tidak jelas — karyawan yang keluar setelah enam bulan membawa pergi kepemilikan penuh, dan pendiri menolak karena merasa diambil untungnya. Kedua: kebingungan pajak — karyawan terkejut kewajiban PPh saat saham dilepas karena tidak ada yang menjelaskan sejak awal, dan kemarahannya diarahkan ke perusahaan. Ketiga: dokumen yang tidak mengikat — janji saham diucapkan di rapat dan dicatat di percakapan, tetapi tidak pernah menjadi perjanjian tertulis — lalu menjadi bahan sengketa justru ketika perusahaan sedang tumbuh atau sedang dinegosiasikan kepada investor.",
      "Kami mendesain program yang seimbang: besaran pool dan kriterianya, jadwal vesting dengan masa tunggu, ketentuan leaver — bagaimana saham diperlakukan bila seseorang keluar dengan baik maupun tidak — perjanjian skema per karyawan yang mengikat, struktur perpajakannya yang dijelaskan ke karyawan sejak awal, dan administrasi pemberian hak yang tercatat rapi. Untuk korporasi keluarga, skema yang sama disesuaikan menjadi instrumen retensi penerus dan manajemen kunci — dengan batasan kepemilikan yang menjaga kendali keluarga tetap utuh.",
    ],
    benefits: [
      { title: "Talenta kunci bertahun-tahun bertahan", desc: "Vesting dan masa tunggu membuat waktu kerja dan kepemilikan berjalan searah — keluar cepat bukan pilihan yang menguntungkan." },
      { title: "Tidak ada bom pajak tersembunyi", desc: "PPh per skenario transfer dihitung dan dijelaskan sejak desain — karyawan tidak kaget, perusahaan tidak disalahkan." },
      { title: "Kendali pendiri tetap terjaga", desc: "Pool dan batasan kelas saham disusun agar kepemilikan karyawan tidak menggeser penguasaan keputusan." },
      { title: "Ketentuan leaver yang tegas", desc: "Saham karyawan yang keluar diperlakukan sesuai ketentuan yang sudah disepakati — tidak ada sengketa yang menunggu di sudut." },
      { title: "Investor melihat kebersihan", desc: "ESOP dengan dokumentasi rapi menaikkan kepercayaan saat due diligence — bukan area abu-abu yang menunda transaksi." },
    ],
    process: [
      { title: "Desain pool dan vesting", desc: "Besaran pool, kriteria penerima, jadwal vesting, dan ketentuan leaver disusun — rancangan dibahas terbuka bersama pendiri." },
      { title: "Dokumen dan perjanjian skema", desc: "Keputusan pemegang saham, peraturan program, dan perjanjian per karyawan disiapkan dalam bentuk yang mengikat." },
      { title: "Struktur pajak dan komunikasi", desc: "PPh per skenario dihitung, karyawan diberi penjelasan yang mudah dimengerti — tidak ada kejutan di kemudian hari." },
      { title: "Administrasi dan pemberian hak", desc: "Pemberian hak pertama berjalan, pencatatan tertata — kalender vesting dan administrasi berkala kami yang pegang." },
    ],
    requirements: [
      "Struktur kepemilikan saat ini: daftar pemegang saham dan persentasenya",
      "Daftar karyawan yang diusulkan menerima hak beserta perannya (kami bantu menyusun kriterianya)",
      "Kesediaan mengalokasikan pool saham (umumnya 10-15 persen — dampaknya ke semua pemegang kami hitungkan)",
      "Rencana jangka menengah: pendanaan berikutnya, kandidat penjualan, atau suksesi — memengaruhi desain vesting",
      "Data pajak karyawan yang akan menerima hak (untuk pemodelan PPh per skenario)",
    ],
    faqs: [
      { q: "Berapa persen saham yang sebaiknya dialokasikan untuk ESOP?", a: "Untuk startup, praktik yang lazim adalah 10-15 persen dari total kepemilikan — cukup untuk beberapa gelombang pemberian hak bagi talenta kunci tanpa membebani pemegang saham lain. Untuk perusahaan yang lebih mapan, pool bisa lebih kecil dan ditargetkan pada manajemen kunci. Yang penting bukan besarnya angka, melainkan dampak dilusinya dipetakan sejak awal: setiap saham yang dialokasikan menggeser persentase semua pemegang — perhitungan itu kami tunjukkan sebelum keputusan diambil." },
      { q: "Bagaimana perpajakan ESOP — siapa yang membayar dan kapan?", a: "Menurut PMK 130/PMK.03/2020, keuntungan karyawan dari ESOP dikenai PPh pada saat transfer atau penjualan saham — besarnya mengacu pada selisih harga perolehan dengan harga pasar saat pelepasan. Secara praktik, pemotongan dan penyetoran melibatkan perusahaan sebagai pemotong pajak, dan mekanismenya harus dirancang benar sejak skema dibuat. Kami membuatkan simulasi per skenario — vesting, jual, keluar perusahaan — supaya karyawan tahu persis apa yang menunggu; kejutan pajak adalah pembunuh kepercayaan program ini." },
      { q: "Apa yang terjadi pada saham karyawan yang keluar dari perusahaan?", a: "Itulah fungsi ketentuan leaver — dan mengapa program tanpa ketentuan ini adalah kesalahan klasik. Pola umumnya: saham yang belum vesting hangus otomatis; yang sudah vesting ditawarkan kembali dengan harga yang dihitung dari rumus yang disepakati di perjanjian; dan bila keluar dengan cara yang melanggar seperti menyalin data atau bergabung ke pesaing langsung, perusahaan punya hak pelepasan paksa dengan harga berbeda. Semua itu harus tertulis di perjanjian per karyawan di hari pertama — bukan dinegosiasikan ulang di hari keluar." },
    ],
    related: ["perjanjian-pendiri-vesting", "pendirian-pt", "valuasi-bisnis", "convertible-note-safe"],
  },

  /* ══════════════ 8. CONVERTIBLE NOTE & SAFE ══════════════ */
  {
    slug: "convertible-note-safe",
    tagline: "Dana masuk hari ini — tawar-menawar valuasi ditunda untuk nanti.",
    heroSub:
      "Pendanaan tahap awal lewat convertible note dan SAFE: cepat, tanpa perdebatan valuasi, dengan valuation cap dan diskon yang dihitung benar supaya konversinya adil bagi pendiri maupun investor.",
    timeline: "2-3 minggu dari term sheet sampai dana diterima",
    intro: [
      "Pendanaan tahap sangat awal punya masalah klasik: menetapkan valuasi saat bisnisnya belum berjalan itu tidak adil bagi kedua pihak — dan memakan waktu berminggu-minggu. Convertible note dan SAFE menyelesaikannya: investor memberi dana hari ini sebagai pinjaman yang berbunga (note) atau perjanjian sederhana tanpa bunga (SAFE), dan dana itu berubah menjadi saham di putaran pendanaan berikutnya dengan harga yang lebih menguntungkan investor lama melalui valuation cap — batas atas valuasi efektif — dan atau diskon. Mekanisme konversinya tetap harus dijalankan melalui hukum perseroan: UU 40/2007 untuk penerbitan saham dan POJK 38/POJK.04/2020 yang mengatur efek yang diterbitkan PT tertutup — dokumen yang benar sejak awal menentukan mulusnya konversi nanti.",
      "Kesalahan yang paling sering ditemukan: perjanjian yang disalin dari templat luar negeri tanpa disesuaikan hukum Indonesia — istilahnya mengikuti struktur Amerika, tetapi tidak ada yang tahu dijalankan lewat notaris mana. Cap yang dipasang tanpa perhitungan akan melempar dilusi besar ke pendiri saat putaran berikutnya — dan banyak pendiri baru menyadarinya setelah angkanya jadi. Note yang jatuh tempo tanpa rencana bisa dipaksa dilunasi persis di saat kas paling kering, dan SAFE yang tumpang-tindih dengan perjanjian pendiri yang lama adalah dua jebakan lain yang sering menunda putaran berikutnya.",
      "Kami menata pendanaan konversi yang benar: pemilihan instrumen — note dengan bunga dan jatuh tempo, atau SAFE yang lebih sederhana — penetapan cap dan diskon yang dihitung dari proyeksi putaran berikutnya, simulasi dilusi lengkap sehingga pendiri melihat persis berapa persen yang mereka pegang di tiga skenario, perjanjian yang patuh hukum Indonesia dan siap dijalankan notaris, serta sinkronisasi dengan akta dan penerbitan saham saat konversi benar-benar terjadi. Dana cepat masuk — struktur tetap benar.",
    ],
    benefits: [
      { title: "Valuasi tidak lagi jalan buntu", desc: "Negosiasi harga saham ditunda ke putaran berikutnya — dana masuk di minggu-minggu yang paling Anda butuhkan." },
      { title: "Cap dan diskon yang dihitung", desc: "Dua parameter kunci ditetapkan dari proyeksi nyata — investor diuntungkan, pendiri tidak dibantai dilusi." },
      { title: "Simulasi dilusi terbuka", desc: "Pendiri melihat kepemilikan di tiga skenario sebelum tanda tangan — tidak ada kejutan saat konversi terjadi." },
      { title: "Dokumen patuh hukum Indonesia", desc: "Bukan templat luar negeri yang menabrak notaris — setiap istilah bisa dijalankan lewat akta yang benar." },
      { title: "Konversi mulus di putaran berikutnya", desc: "Jalur konversi disiapkan sejak awal — penerbitan saham tidak menunda putaran pendanaan baru." },
    ],
    process: [
      { title: "Pemilihan instrumen dan parameter", desc: "Note atau SAFE dipilih sesuai kebutuhan, cap dan diskon dihitung dari proyeksi putaran — term sheet tersusun jelas." },
      { title: "Perjanjian dan simulasi dilusi", desc: "Dokumen investasi disusun patuh hukum Indonesia — tabel dilusi tiga skenario ditunjukkan sebelum tanda tangan." },
      { title: "Penandatanganan dan pencairan", desc: "Perjanjian diteken, dana masuk — pencatatan atas dana dan kewajiban pajaknya dilakukan benar sejak hari pertama." },
      { title: "Konversi saat putaran berikutnya", desc: "Saat putaran pendanaan terjadi, konversi dijalankan: akta, penerbitan saham, pembaruan struktur — tertangani sampai tuntas." },
    ],
    requirements: [
      "Jumlah dana yang dicari dan profil investor (satu pihak atau beberapa — memengaruhi struktur)",
      "Kondisi kepemilikan saham saat ini: daftar pemegang dan persentasenya",
      "Perjanjian pendiri atau pemegang saham yang sudah ada (dicek tumpang-tindihnya)",
      "Proyeksi putaran pendanaan berikutnya secara garis besar — dasar perhitungan cap dan diskon",
      "Dokumen PT: akta dan struktur saham (bila PT belum berdiri, kami urus pendiriannya lebih dulu)",
    ],
    faqs: [
      { q: "Apa bedanya convertible note dan SAFE — mana yang sebaiknya dipakai?", a: "Keduanya menunda penetapan valuasi, tetapi berbeda bentuknya: convertible note adalah pinjaman — ada bunga dan tanggal jatuh tempo, dan bila putaran berikutnya tidak terjadi, bisa diminta dilunasi. SAFE lebih sederhana: bukan pinjaman, tidak berbunga, tidak jatuh tempo — konversinya hanya terjadi bila putaran atau peristiwa yang disepakati datang. Untuk dana kecil dari beberapa investor awal, SAFE lebih ringan; note dipilih bila investor menginginkan perlindungan berupa bunga dan pengembalian. Kami menghitung keduanya dan menunjukkan konsekuensinya sebelum Anda memilih." },
      { q: "Valuation cap dan diskon itu apa — bagaimana menentukan angkanya?", a: "Cap adalah batas atas valuasi efektif untuk konversi: bila putaran berikutnya menilai perusahaan lebih tinggi dari cap, investor lama Anda berkonversi seolah valuasinya hanya setinggi cap — itu hadiahnya karena berani lebih dulu. Diskon memberi harga konversi di bawah investor baru, umumnya 10-20 persen. Keduanya boleh dipakai bersama dengan mekanisme yang lebih menguntungkan investor. Angkanya ditetapkan dari proyeksi valuasi putaran berikutnya: cap terlalu rendah berarti pendiri terdilusi berlebihan, terlalu tinggi berarti investor tidak tertarik — simulasi kami menampilkan keduanya sebelum disepakati." },
      { q: "Berapa biaya jasanya dan berapa lama sampai dana bisa dipakai?", a: "Jasa kami mulai Rp 7,5 juta untuk struktur instrumen, perjanjian, simulasi dilusi, sampai sinkronisasi dokumen PT. Prosesnya 2-3 minggu dari term sheet sampai dana diterima — jauh lebih cepat dari putaran saham penuh yang bisa memakan dua bulan lebih. Di atas jasa kami tidak ada biaya tersembunyi; yang mungkin muncul adalah biaya notaris bila struktur PT perlu disesuaikan — dihitung transparan sebelum kerja dimulai." },
    ],
    related: ["pitch-deck-investor", "esop-program", "pendirian-pt", "perjanjian-pendiri-vesting"],
  },

  /* ══════════════ 9. IP SEBAGAI JAMINAN KREDIT (JAMINFIDUSIA) ══════════════ */
  {
    slug: "jamintel-ip-jaminan",
    tagline: "Merek yang Anda kira hanya hiasan kemasan — ternyata bisa mencair menjadi modal.",
    heroSub:
      "Jadikan merek, paten, dan desain industri Anda sebagai jaminan kredit lewat pendaftaran jaminfidusia kekayaan intelektual di DJKI — jalur yang dibuka UU 13/2016 dan PP 36/2018, yang masih jarang diketahui pelaku usaha kreatif.",
    timeline: "Penilaian dan perjanjian 1-2 minggu · Pendaftaran di DJKI 3-6 minggu",
    intro: [
      "Selama puluhan tahun bank hanya mau menerima tanah dan bangunan sebagai jaminan — dan bisnis kreatif yang aset utamanya justru berupa merek, desain, dan teknologi terkunci dari akses kredit. UU 13/2016 tentang Paten (bersama UU 20/2016 tentang Merek) membuka pintunya: hak kekayaan intelektual boleh dijaminkan, dan PP 36/2018 menetapkan mekanismenya — jaminfidusia atas kekayaan intelektual didaftarkan ke DJKI sehingga berlaku terhadap pihak ketiga, memberi kepastian bagi bank bahwa jaminan itu tercatat resmi dan tidak bisa dijual dua kali. Bagi pelaku usaha kreatif dengan merek kuat atau pemilik paten teknologi, ini jalan modal yang sering tidak pernah mereka dengar ada.",
      "Kenapa jalurnya sepi: bank membutuhkan penilaian nilai aset IP yang bisa dipercaya — dan menilai merek tidak semudah menilai rumah. Merek yang tidak terdaftar, paten yang masa berlakunya nyaris habis, atau IP yang masih atas nama pribadi (bukan badan usaha) tidak bisa dijaminkan — dan pemilik sering mengetahuinya persis di saat pengajuan kredit. Kesalahan kedua: perjanjian jaminfidusia yang disusun seadanya — tidak selaras dengan perjanjian pokok kredit, atau tidak didaftarkan di DJKI. Jaminan yang tidak terdaftar tidak berlaku terhadap pihak ketiga, dan bank menolaknya di tengah proses.",
      "Kami menyiapkan seluruh rantainya: pemeriksaan kualitas IP Anda — status pendaftaran, masa berlaku, kepemilikan; bila perlu diurus dulu, kami yang urus — penilaian nilai bersama penilai, penyusunan perjanjian jaminfidusia yang selaras dengan perjanjian pokok kredit, pendaftaran resmi di DJKI sampai sertifikat pendaftaran terbit, dan koordinasi dengan bank pemberi kredit — termasuk menjelaskan basis regulasinya kepada analis yang belum pernah melihat IP sebagai agunan.",
    ],
    benefits: [
      { title: "Aset tak berwujud menjadi modal", desc: "Merek dan paten tercatat sebagai jaminan resmi — kredit tidak lagi tertahan karena tidak punya sertifikat tanah." },
      { title: "Berlaku terhadap pihak ketiga", desc: "Pendaftaran di DJKI memberi kepastian hukum — jaminan tidak bisa digandakan atau dialihkan dua kali." },
      { title: "Kualitas IP diperiksa lebih dulu", desc: "Status, masa berlaku, dan kepemilikan diuji sebelum pengajuan — tidak gagal di tangan analis bank." },
      { title: "Dokumen yang saling selaras", desc: "Perjanjian jaminfidusia selaras dengan perjanjian pokok kredit — tidak ada klausul yang saling menjatuhkan." },
      { title: "Bank yang belum biasa pun terbantu", desc: "Basis regulasi dan penilaian disiapkan sebagai paket — keraguan pertama analis dijawab sebelum ditanyakan." },
    ],
    process: [
      { title: "Audit kualitas dan nilai IP", desc: "Status pendaftaran, masa berlaku, dan pemilik IP diperiksa — penilaian nilai disusun bersama penilai yang diakui." },
      { title: "Perjanjian dan sinkronisasi kredit", desc: "Perjanjian jaminfidusia disusun selaras dengan perjanjian pokok kredit dari bank — klausul eksekusinya jelas." },
      { title: "Pendaftaran di DJKI", desc: "Jaminfidusia didaftarkan secara resmi — sertifikat pendaftaran terbit dan jaminan berlaku terhadap pihak ketiga." },
      { title: "Koordinasi bank dan penyerahan", desc: "Paket regulasi, penilaian, dan bukti pendaftaran diteruskan ke bank — persetujuan kredit berjalan dengan jaminan yang sah." },
    ],
    requirements: [
      "Sertifikat HKI yang akan dijaminkan: merek, paten, atau desain industri (bila belum terdaftar, kami urus pendaftarannya lebih dulu)",
      "Kepemilikan IP atas nama badan usaha (bila masih atas nama pribadi, pengalihannya diurus lebih dulu)",
      "Bank atau mitra kredit yang akan diajui (atau biarkan kami memetakan yang menerima jaminan IP)",
      "Data penggunaan IP: lisensi yang berjalan, reputasi merek, pendapatan yang terkait — dasar penilaian nilai",
      "Dokumen legalitas badan usaha standar pengajuan kredit",
    ],
    faqs: [
      { q: "Merek saya belum terdaftar di DJKI — bisa langsung dijaminkan?", a: "Belum — yang bisa dijaminkan secara jaminfidusia adalah hak yang sah dan terdaftar. Langkah pertama adalah mendaftarkan merek atau paten Anda (pendaftaran merek umumnya diproses DJKI sekitar 8-10 bulan, paten lebih lama), lalu pendaftaran jaminfidusianya baru bisa berjalan. Bagi yang belum punya apa pun: mulai pendaftaran hari ini, karena setiap bulan menunggu adalah bulan akses kredit yang tertunda — dan risiko merek Anda didaftar pihak lain berjalan sepanjang waktu itu." },
      { q: "Berapa nilai kredit yang bisa keluar dari jaminan IP?", a: "Terus terang: tergantung bank dan kualitas IP-nya. Bank menilai jaminan IP lebih konservatif daripada tanah — biasanya memperhitungkan fraksi dari nilai penilai, dan sebagian bank menuntut kombinasi dengan agunan lain atau skema penjaminan. Yang menentukan nilainya: kekuatan merek seperti penggunaan nyata, reputasi, dan lisensi yang berjalan; sisa masa perlindungan paten; serta pendapatan yang terkait langsung dengan aset IP itu. Kami berbicara jujur sejak penilaian awal — supaya Anda tidak menghabiskan waktu mengejar plafon yang tidak realistis." },
      { q: "Apa risiko terbesar memakai IP sebagai jaminan?", a: "Risiko utamanya adalah eksekusi: bila kredit macet, jaminan berhak dieksekusi — artinya merek atau paten bisa berpindah tangan. Itu wajar seperti agunan mana pun, tetapi khusus IP dampaknya lebih jauh karena merek adalah identitas pasar Anda. Kelola risikonya dengan dua hal: pilih aset IP yang kritis tetapi tidak menyentuh inti identitas bila ada alternatif, dan susun jadwal angsuran yang realistis dari arus kas — restrukturisasi selalu lebih murah daripada kehilangan merek. Risiko kedua: nilai IP yang menyusut karena tidak dirawat — kami beri panduan pemeliharaan statusnya selama kredit berjalan." },
    ],
    related: ["pendaftaran-merek", "hak-cipta-paten", "kredit-kur", "valuasi-bisnis"],
  },

  /* ══════════════ 10. RESTRUKTURISASI UTANG ══════════════ */
  {
    slug: "restrukturisasi-utang",
    tagline: "Utang yang kelelahan bisa dipulihkan — selama Anda bergerak sebelum kreditor kehilangan sabar.",
    heroSub:
      "Analisis kelayakan, strategi negosiasi, dan perjanjian restrukturisasi dengan bank maupun kreditor lain — rescheduling, reprofiling, reconditioning — dikerjakan sebelum lalai berubah menjadi pailit.",
    timeline: "Negosiasi dan perjanjian 1-3 bulan tergantung jumlah kreditor",
    intro: [
      "Distres utang punya tahapan yang bisa dibaca: arus kas yang makin tipis, keterlambatan kecil yang berulang, lalu kolektibilitas kredit yang menurun di laporan SLIK — dan setiap tahap menutup satu opsi. Hukum Indonesia memberi dua lapis jalan. Lapis pertama perbankan: POJK 11/POJK.03/2020 mengatur klasifikasi kualitas aset dan mekanisme restrukturisasi kredit yang boleh dijalankan bank — rescheduling (penjadwalan ulang), reprofiling (perubahan syarat termasuk jangka waktu dan plafon), dan reconditioning (penyesuaian lebih dalam termasuk bunga). Lapis kedua peradilan: UU 37/2004 tentang Kepailitan dan PKPU menyediakan Penundaan Kewajiban Pembayaran Utang sebagai payung hukum yang menjaga seluruh kreditor berunding di satu meja bila negosiasi swasta buntu.",
      "Kesalahan yang paling sering memperburuk keadaan: bersembunyi dari kreditor. Panggilan yang dihindari, laporan yang berhenti dikirim, janji yang dibayar sekadar menahan teguran — semuanya menggeser kreditor dari kepercayaan menuju tindakan: fasilitas ditarik, kolektibilitas turun, somasi datang. Satu bank yang menarik diri bisa membuat bank lain ikut panik, dan posisi tawar Anda runtuh dalam hitungan bulan. Kesalahan kedua: mengajukan restrukturisasi tanpa data — bank meminta proyeksi dan rencana perbaikan yang kredibel, dan proposal yang berisi permintaan tanpa perhitungan langsung ditolak.",
      "Kami masuk dengan urutan yang benar: analisis utang dan kemampuan bayar yang jujur — kolektibilitas, arus kas riil, aset yang tersedia — strategi restrukturisasi per kreditor: skema mana yang dipinta dari bank mana dan urutan negosiasinya, penyusunan paket proposal yang kredibel berisi rencana perbaikan, proyeksi kas, dan komitmen pemilik, lalu pendampingan negosiasi sampai perjanjian restrukturisasi ditandatangani. Bila posisi sudah terlalu dalam, kami memetakan jalur PKPU bersama penasihat hukum — bukan sebagai kegagalan, melainkan payung hukum yang menjaga seluruh kreditor tetap berunding.",
    ],
    benefits: [
      { title: "Kolektibilitas tidak jatuh lebih dalam", desc: "Tindakan awal yang benar menjaga status kredit — fasilitas bank tidak tertarik di tengah perbaikan yang sedang jalan." },
      { title: "Satu strategi untuk semua kreditor", desc: "Urutan dan skema per bank disusun — tidak ada kreditor yang diperlakukan berbeda tanpa alasan yang bisa membakar kepercayaan." },
      { title: "Proposal kredibel, bukan sekadar permohonan", desc: "Rencana perbaikan, proyeksi, dan komitmen pemilik dibundel — bank melihat jalan keluar, bukan pujut yang menunggu didoakan." },
      { title: "Arus kas yang bisa bernapas", desc: "Angsuran disesuaikan kapasitas riil — perusahaan memperoleh waktu untuk membenahi, bukan menunggu kehabisan napas." },
      { title: "Payung PKPU siap bila perlu", desc: "Jalur hukum terakhir dipetakan sejak awal — bila negosiasi buntu, Anda tidak mulai dari nol di pengadilan." },
    ],
    process: [
      { title: "Analisis utang dan kapasitas", desc: "Seluruh utang, kolektibilitas, agunan, dan arus kas riil dipetakan — posisi tawar Anda tergambar dengan jujur." },
      { title: "Strategi per kreditor", desc: "Skema restrukturisasi dipilih per kreditor — rescheduling, reprofiling, atau reconditioning — dengan urutan negosiasi yang disusun." },
      { title: "Proposal dan pendampingan negosiasi", desc: "Paket proposal kredibel disusun, negosiasi didampingi — kompromi yang lahir dicatat dan diuji dampaknya ke arus kas." },
      { title: "Perjanjian dan pemenuhan", desc: "Perjanjian restrukturisasi diteken, kewajiban barunya dijalankan — pemantauan kepatuhan berjalan agar tidak jatuh untuk kedua kalinya." },
    ],
    requirements: [
      "Daftar lengkap kewajiban: kreditor, plafon, sisa, bunga, jadwal, dan agunan masing-masing",
      "Laporan SLIK terakhir (kami bantu ambilkan bila belum ada)",
      "Arus kas 6-12 bulan terakhir dan proyeksi realistis 12 bulan ke depan (kami bantu menyusunnya)",
      "Daftar aset yang tersedia beserta statusnya — sudah menjadi agunan atau belum",
      "Kesiapan komitmen pemilik: dana tambahan, agunan pribadi, atau pengorbanan lain — kreditor menanyakan ini lebih dulu daripada yang Anda kira",
    ],
    faqs: [
      { q: "Apa beda rescheduling, reprofiling, dan reconditioning?", a: "Rescheduling paling ringan: hanya jadwal bayar yang diubah — masa tenggang dan cicilan digeser, syarat lain tetap. Reprofiling lebih dalam: jangka waktu, plafon, dan beberapa syarat kredit diubah. Reconditioning paling berat: syarat inti disesuaikan termasuk bunga, dan dalam kasus tertentu sebagian kewajiban dinegosiasikan. Bank memilih levelnya berdasarkan keparahan kondisi dan kepercayaannya pada rencana perbaikan Anda — karena itu proposal yang kredibel adalah penentu level yang bisa dicapai, bukan sekadar permohonan yang bunyinya bagus." },
      { q: "Kapan sebaiknya restrukturisasi dimulai — sebelum atau setelah macet?", a: "Sebelum macet — jauh sebelum. Negosiasi dari posisi masih membayar, walau makin berat, jauh lebih baik daripada dari posisi sudah lalai: kolektibilitas belum turun, kepercayaan masih ada, dan opsi yang tersedia lebih banyak. Tanda waktunya: proyeksi arus kas menunjukkan angsuran tidak bisa dibayar penuh dalam satu hingga dua kuartal ke depan — itulah momen mulai bergerak. Menunggu sampai somasi datang berarti menegosiasikan dari posisi terlemah dengan opsi yang tinggal sedikit." },
      { q: "Apa itu PKPU dan kapan jalur itu perlu diambil?", a: "PKPU atau Penundaan Kewajiban Pembayaran Utang diatur UU 37/2004: pengadilan menunjuk pengurus untuk mengelola perundingan damai dengan seluruh kreditor di bawah payung hukum — keputusan damai yang disahkan pengadilan mengikat semua pihak. Jalur ini dipertimbangkan bila kreditor banyak dan negosiasi swasta tidak bisa serentak, atau bila satu kreditor berpotensi menggugat pailit dan perlu satu payung yang menahan semuanya. PKPU bukan kegagalan — ia kerangka yang menjaga perundingan tetap tertib. Kami memetakannya sejak awal sebagai rencana cadangan, bukan kejutan di akhir." },
    ],
    related: ["pelaporan-pajak", "legal-drafting", "akuisisi-merger-umkm", "valuasi-bisnis"],
  },
];

/**
 * LAPISAN PENGAYAAN — kategori pendanaan & investasi.
 * whoFor, deliverables, costs, legalBasis untuk 10 layanan di atas.
 * Digabung otomatis oleh getServiceContent().
 */
export const pendanaanEnrichment: Record<string, ServiceEnrichment> = {
  "pitch-deck-investor": {
    whoFor: [
      "Pendiri tahap awal yang menyiapkan putaran pre-seed atau seed dan butuh kit pendanaan pertama",
      "Bisnis yang sudah punya traksi nyata tetapi belum tahu cara membungkusnya menjadi cerita investor",
      "Perusahaan yang akan bertemu mitra, korporasi, atau investor institusional dan butuh materi yang meyakinkan",
      "Tim yang sudah punya deck lama tetapi selalu tersandung di sesi tanya-jawab",
    ],
    deliverables: [
      "Pitch deck final 12-15 slide (PDF dan berkas sumber) dengan angka yang terekonsiliasi",
      "Proyeksi keuangan ringkas dengan asumsi terbuka yang bisa dipertahankan saat diuji",
      "One-pager dan teaser investor siap kirim",
      "Dokumen latihan tanya-jawab: daftar pertanyaan yang paling sering menjatuhkan beserta jawabannya",
      "Naskah pitch versi 3 menit dan versi 10 menit untuk skema pertemuan yang berbeda",
    ],
    costs: [
      { item: "Jasa penyusunan kit pendanaan DIGIMAN.ID", note: "mulai Rp 5 jt — deck, one-pager, teaser, latihan tanya-jawab" },
      { item: "Desain deck profesional", note: "termasuk dalam paket — tanpa biaya desain terpisah" },
      { item: "Riset pasar dan pembanding", note: "termasuk — memakai data pembanding publik, tanpa langganan tambahan" },
      { item: "Sesi latihan pitching tambahan", note: "opsional bila ingin simulasi lebih dari dua putaran" },
      { item: "Terjemahan deck ke bahasa Inggris", note: "opsional — untuk investor asing, dikenakan terpisah" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (penerbitan saham baru untuk investor)",
      "POJK No. 38/POJK.04/2020 tentang Penerbitan Efek oleh Perseroan Terbatas Tertutup",
      "UU No. 8 Tahun 1995 tentang Pasar Modal jo. UU No. 4 Tahun 2023 tentang P2SK",
    ],
  },

  "valuasi-bisnis": {
    whoFor: [
      "Pemilik bisnis yang akan menjual saham atau mengundang investor dan butuh harga wajar sebagai dasar",
      "Keluarga yang merencanakan suksesi atau pembagian warisan bisnis",
      "Perusahaan dalam sengketa pemegang saham yang butuh nilai wajar yang terdokumentasi",
      "Bisnis yang mengajukan kredit dan butuh dasar nilai perusahaan untuk bank",
    ],
    deliverables: [
      "Laporan valuasi tertulis lengkap: metode, asumsi, perhitungan, analisis kepekaan, kesimpulan",
      "Rentang nilai wajar (bukan satu angka mati) dari skenario konservatif hingga optimis",
      "Analisis pembanding pasar dari transaksi dan perusahaan sejenis",
      "Pemetaan konsekuensi PPh pengalihan saham per skenario",
      "Sesi penjelasan untuk menyiapkan Anda menerima pertanyaan di meja negosiasi",
    ],
    costs: [
      { item: "Jasa valuasi DIGIMAN.ID", note: "mulai Rp 10 jt — laporan tertulis lengkap" },
      { item: "Penataan laporan keuangan (bila belum rapi)", note: "opsional — bergantung kondisi data Anda" },
      { item: "Data pembanding pasar", note: "termasuk — memakai sumber publik dan basis data langganan kami" },
      { item: "Format penilaian resmi (UU 1/2014)", note: "opsional — bila dituntut untuk keperluan hukum atau lembaga" },
      { item: "Sesi pembelaan angka tambahan", note: "termasuk satu sesi; tambahan bila negosiasi berputar panjang" },
    ],
    legalBasis: [
      "UU No. 1 Tahun 2014 tentang Penilaian (jasa penilai publik Indonesia)",
      "Standar Penilaian Indonesia (MPSPI) — Masyarakat Appraisal Profesional Indonesia",
      "PMK No. 68/PMK.03/2009 tentang PPh atas pengalihan saham PT yang tidak diperdagangkan di bursa",
      "UU No. 37 Tahun 2004 tentang Kepailitan dan PKPU (konteks sengketa dan nilai wajar)",
    ],
  },

  "data-room-virtual": {
    whoFor: [
      "Perusahaan yang menutup pendanaan atau penjualan saham dan akan memasuki due diligence",
      "Pemilik bisnis yang rencana penjualannya masih jauh — tetapi ingin arsip tertata sejak dini",
      "Tim transaksi pihak penjual maupun pembeli yang butuh penyelenggara dokumen pihak ketiga",
      "Perusahaan keluarga dengan arsip tersebar di banyak tangan yang perlu disatukan sebelum transaksi",
    ],
    deliverables: [
      "Data room virtual siap tamu dengan struktur folder standar due diligence",
      "Indeks dokumen lengkap beserta status keabsahan masing-masing",
      "Daftar celah yang terbukti tertutup: dokumen diurus ulang atau jalur perbaikannya tercatat",
      "Pengaturan akses berlapis, perjanjian kerahasiaan, dan batas waktu per pihak",
      "Log akses dan dukungan menjawab permintaan dokumen selama due diligence",
    ],
    costs: [
      { item: "Jasa penyusunan data room DIGIMAN.ID", note: "mulai Rp 7,5 jt — struktur, audit celah, akses" },
      { item: "Digitalisasi arsip kertas", note: "per kebutuhan volume — dihitung sebelum kerja dimulai" },
      { item: "Perbaikan dokumen (perubahan akta, pembaruan izin)", note: "dihitung per item — Anda setujui lebih dulu sebelum kami jalankan" },
      { item: "Platform penyimpanan dan keamanan", note: "termasuk dalam jasa — tanpa langganan terpisah untuk Anda" },
      { item: "Pendampingan selama due diligence", note: "termasuk untuk periode transaksi standar; retainer bila lebih panjang" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (akses dan kerahasiaan dokumen)",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (dokumen legal inti yang wajib lahir dan dijaga)",
      "UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik (prinsip klasifikasi dan pembatasan akses)",
    ],
  },

  "pendanaan-scf": {
    whoFor: [
      "PT aktif dengan traksi awal yang ingin dana dari komunitas, bukan dari satu investor besar",
      "Bisnis konsumen dengan penggemar setia — pelanggan yang ingin menjadi pemilik",
      "Perusahaan yang menghindari kendali investor tunggal dalam keputusan strategis",
      "Pendiri yang memahami kewajiban publikasi dan pelaporan — dan siap menjalankannya",
    ],
    deliverables: [
      "Penilaian kelayakan SCF dengan rekomendasi jujur (lanjut atau alternatif jalur)",
      "Struktur saham, harga per lembar, dan plafon galangan yang dihitung",
      "Lembar faktual sesuai format OJK dan platform — lengkap dengan dasar setiap klaim",
      "Paket materi kampanye: narasi, ringkasan visual, dan jawaban pertanyaan yang diprediksi",
      "Kalender dan templat pelaporan pasca-galangan ke investor dan platform",
    ],
    costs: [
      { item: "Jasa persiapan SCF DIGIMAN.ID", note: "mulai Rp 10 jt — sampai lembar faktual disetujui platform" },
      { item: "Biaya platform SCF", note: "umumnya persentase dari dana terkumpul — tarif tiap platform berbeda" },
      { item: "Biaya resmi efek atau pencatatan", note: "kecil, sesuai tarif yang berlaku — transparan sebelum diteken" },
      { item: "Penataan laporan keuangan (bila belum siap)", note: "opsional — disepakati terpisah bila datanya perlu dirapikan" },
      { item: "Dukungan pelaporan pasca-galang", note: "retainer ringan bila Anda ingin kami yang kelola berkala" },
    ],
    legalBasis: [
      "POJK No. 57/POJK.04/2020 tentang Penyelenggaraan Layanan Urun Dana (Securities Crowdfunding)",
      "UU No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan (P2SK)",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (penerbitan saham dan perlindungan pemegang saham)",
    ],
  },

  "kredit-kur": {
    whoFor: [
      "Usaha mikro dan kecil yang mengincar KUR berbunga subsidi untuk modal kerja atau investasi",
      "Bisnis menengah yang butuh kredit modal kerja konvensional dengan plafon lebih besar",
      "Usaha tanpa agunan kuat yang butuh pemetaan alternatif penjaminan dan struktur pengajuan",
      "Pemilik usaha yang pernah ditolak bank dan ingin tahu persis apa yang kurang",
    ],
    deliverables: [
      "Proposal bisnis dan profil usaha terdokumentasi sesuai format penilaian bank",
      "Proyeksi arus kas realistis dengan asumsi yang bisa dipertahankan saat ditanya analis",
      "Paket dokumen persyaratan lengkap: legalitas, identitas, catatan keuangan",
      "Rekomendasi jalur kredit yang tepat (KUR atau konvensional) dengan strategi agunan atau penjaminan",
      "Pendampingan menjawab pertanyaan analis hingga keputusan bank terbit",
    ],
    costs: [
      { item: "Jasa penyusunan pengajuan DIGIMAN.ID", note: "mulai Rp 2 jt — tarif tetap, bukan persen dari kredit" },
      { item: "Penataan legalitas dasar (bila belum ada)", note: "dihitung terpisah — NIB, NPWP, dan sejenisnya bila perlu dibuat dulu" },
      { item: "Biaya bank (provisi, administrasi)", note: "sesuai tarif bank masing-masing — dipetakan sebelum Anda memilih" },
      { item: "Biaya penjaminan (bila memakai skema penjaminan)", note: "persentase kecil dari plafon — dihitung saat jalur dipilih" },
      { item: "Pengurusan dokumen agunan (bila ada)", note: "sesuai kebutuhan — kelengkapan SHM/SHGB/BPKB dicek dan disiapkan" },
    ],
    legalBasis: [
      "PMK No. 40/PMK.05/2022 tentang Pemberian Kredit Usaha Rakyat beserta perubahan terbarunya",
      "UU No. 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah",
      "UU No. 10 Tahun 1998 tentang Perbankan (prinsip penyaluran kredit bank)",
    ],
  },

  "hibah-riset": {
    whoFor: [
      "Dosen dan peneliti perguruan tinggi yang mengincar skema match funding Kedaireka atau RISPRO",
      "Perusahaan yang menjadi mitra industri dan butuh dokumen kemitraan yang benar",
      "Lembaga dan koperasi yang mengincar hibah pengembangan dari pemerintah atau lembaga pendanaan",
      "Tim riset startup yang butuh dana non-dilusi — tanpa melepas saham — untuk validasi teknologi",
    ],
    deliverables: [
      "Peta skema pendanaan yang cocok beserta tenggat dan tingkat kesulitannya",
      "Proposal riset lengkap sesuai format seleksi: latar, metode, luaran terukur, jadwal",
      "Anggaran patuh ketentuan per pos (honorarium, operasional, perlengkapan)",
      "MOU mitra yang selaras dengan isi proposal dan siap diteken",
      "Sistem pelaporan kemajuan berkala dan peta kepemilikan IP hasil riset",
    ],
    costs: [
      { item: "Jasa penyusunan hibah DIGIMAN.ID", note: "mulai Rp 7,5 jt — proposal, anggaran, MOU" },
      { item: "Biaya seleksi atau pendaftaran lembaga", note: "mayoritas skema gratis — yang berbayar kami beritahukan di awal" },
      { item: "Kontribusi match funding (bila skema menuntut)", note: "sesuai rasio skema — bisa berasal dari mitra industri, bukan selalu kas Anda" },
      { item: "Pendaftaran IP hasil riset (bila ada)", note: "opsional — paten atau hak cipta dihitung terpisah saat riset menghasilkan" },
      { item: "Dukungan pelaporan pasca-cair", note: "retainer ringan bila ingin kami kelola sampai laporan akhir" },
    ],
    legalBasis: [
      "PMK No. 51/PMK.05/2018 tentang Riset KeInovatifan-Produktivitas Indonesia (RISPRO)",
      "UU No. 28 Tahun 2014 tentang Hak Cipta dan UU No. 13 Tahun 2016 tentang Paten (IP hasil riset)",
      "UU No. 25 Tahun 1992 tentang Perkoperasian (konteks hibah dan pengembangan koperasi)",
      "Perpres No. 78 Tahun 2021 tentang BRIN (konteks skema riset lembaga)",
    ],
  },

  "esop-program": {
    whoFor: [
      "Startup tahap tumbuh yang bersaing merekrut talenta dengan anggaran gaji terbatas",
      "Perusahaan keluarga yang menyiapkan retensi manajemen kunci di era suksesi",
      "Perusahaan yang akan masuk pendanaan besar dan butuh ESOP tertata sebelum due diligence",
      "Pemegang saham yang ingin memberi kepemilikan tanpa melepas kendali pengambilan keputusan",
    ],
    deliverables: [
      "Desain program: pool, kriteria penerima, jadwal vesting dengan masa tunggu, ketentuan leaver",
      "Dokumen legal: keputusan pemegang saham, peraturan program ESOP, perjanjian per karyawan",
      "Simulasi pajak per skenario (PPh saat transfer dan pelepasan) sesuai PMK 130/2020",
      "Peta dampak dilusi terhadap seluruh pemegang saham per gelombang pemberian hak",
      "Sistem administrasi pemberian hak dan kalender vesting yang berjalan berkala",
    ],
    costs: [
      { item: "Jasa desain dan pendirian program ESOP DIGIMAN.ID", note: "mulai Rp 12 jt — sampai perjanjian per karyawan siap tanda tangan" },
      { item: "Biaya notaris (keputusan GMS atau penyesuaian akta bila perlu)", note: "dihitung per kebutuhan struktur saham Anda" },
      { item: "PPh karyawan saat transfer atau jual", note: "tanggungan karyawan — dihitung dan dijelaskan lewat simulasi kami" },
      { item: "Administrasi berkala (pemberian hak tiap gelombang)", note: "ringan — retainer opsional setelah program berjalan" },
      { item: "Pembelian kembali saham karyawan yang keluar", note: "bila terjadi — harga mengikuti rumus yang disepakati di perjanjian" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (penerbitan dan perpindahan saham)",
      "POJK No. 38/POJK.04/2020 tentang Penerbitan Efek oleh PT Tertutup (termasuk program ESOP)",
      "PMK No. 130/PMK.03/2020 tentang PPh atas pendapatan dari ESOP",
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan (konteks perjanjian karyawan)",
    ],
  },

  "convertible-note-safe": {
    whoFor: [
      "Pendiri tahap pre-seed atau seed yang butuh dana cepat tanpa debat valuasi yang panjang",
      "Perusahaan yang menerima dana dari angel investor atau korporasi dalam jumlah moderat",
      "Tim yang menyiapkan putaran saham penuh dan butuh jembatan dana di antara keduanya",
      "Investor awal yang ingin struktur pendanaan yang benar dan jalur konversi yang terjamin mulus",
    ],
    deliverables: [
      "Struktur instrumen terpilih (note atau SAFE) dengan cap dan diskon yang dihitung dari proyeksi",
      "Perjanjian investasi konversi yang patuh hukum Indonesia dan siap dijalankan notaris",
      "Simulasi dilusi tiga skenario untuk keputusan pendiri sebelum tanda tangan",
      "Term sheet yang jelas sebagai dasar tawar-menawar",
      "Layanan konversi: akta, penerbitan saham, dan pembaruan struktur saat putaran terjadi",
    ],
    costs: [
      { item: "Jasa struktur dan perjanjian DIGIMAN.ID", note: "mulai Rp 7,5 jt — sampai dokumen siap tanda tangan" },
      { item: "Biaya notaris saat konversi (akta dan saham)", note: "dibayar saat putaran berikutnya terjadi — dihitung sesuai struktur" },
      { item: "Bunga note (bila memilih convertible note)", note: "umumnya rendah dan melekat ke konversi — disepakati di perjanjian" },
      { item: "PPh pengalihan saham saat konversi", note: "sesuai ketentuan PPh final — dihitung dalam simulasi kami" },
      { item: "Pendampingan negosiasi term sheet tambahan", note: "termasuk satu putaran; tambahan bila negosiasi berputar panjang" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (penerbitan saham dan konversi efek)",
      "POJK No. 38/POJK.04/2020 tentang Penerbitan Efek oleh Perseroan Terbatas Tertutup",
      "PMK No. 68/PMK.03/2009 tentang PPh final atas pengalihan saham PT",
      "UU No. 4 Tahun 2023 tentang P2SK (kerangka pendanaan berbasis efek)",
    ],
  },

  "jamintel-ip-jaminan": {
    whoFor: [
      "UMKM kreatif dan brand lokal dengan merek kuat tetapi tanpa sertifikat tanah untuk dijaminkan",
      "Pemilik paten atau desain industri yang mencari modal kerja dari aset teknologinya",
      "Perusahaan yang ditolak bank karena minim agunan konvensional",
      "Kreditur yang menerima IP sebagai jaminan dan butuh pendaftaran yang memenuhi syarat",
    ],
    deliverables: [
      "Laporan audit kualitas IP: status pendaftaran, masa berlaku, kepemilikan, kelayakan dijaminkan",
      "Penilaian nilai aset IP bersama penilai yang diakui",
      "Perjanjian jaminfidusia HKI yang selaras dengan perjanjian pokok kredit",
      "Pendaftaran jaminfidusia di DJKI sampai sertifikat pendaftaran terbit",
      "Paket penjelasan regulasi untuk bank dan panduan pemeliharaan status IP selama kredit berjalan",
    ],
    costs: [
      { item: "Jasa jaminfidusia IP DIGIMAN.ID", note: "mulai Rp 12 jt — penilaian, perjanjian, pendaftaran DJKI" },
      { item: "Biaya resmi pendaftaran jaminfidusia DJKI", note: "sesuai tarif resmi — transparan sebelum pengajuan" },
      { item: "Jasa penilai publik", note: "menyesuaikan jumlah dan jenis aset IP yang dinilai" },
      { item: "Pendaftaran merek atau paten lebih dulu (bila belum ada)", note: "dihitung terpisah — prasyarat sebelum jaminan bisa didaftar" },
      { item: "Pengalihan IP ke badan usaha (bila masih atas nama pribadi)", note: "opsional — dikenakan bila diperlukan untuk kelayakan jaminan" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2016 tentang Paten (hak paten dapat dijaminkan)",
      "UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis",
      "PP No. 36 Tahun 2018 tentang Pendaftaran Jaminfidusia atas HKI dan Pengalihan Hak atas HKI",
      "UU No. 10 Tahun 1998 tentang Perbankan (konteks penyaluran kredit berjaminan)",
    ],
  },

  "restrukturisasi-utang": {
    whoFor: [
      "Pemilik usaha yang melihat arus kas tertekan dan angsuran mulai tidak terbawa penuh",
      "Perusahaan dengan beberapa kreditor — bank dan non-bank — yang butuh satu strategi serentak",
      "Bisnis yang kreditnya sudah turun kolektibilitas dan somasi mulai datang",
      "Bisnis keluarga yang menegosiasikan utang jangka panjang dengan bank sebagai satu keluarga",
    ],
    deliverables: [
      "Analisis posisi utang lengkap: kreditor, kolektibilitas, agunan, kapasitas bayar riil",
      "Strategi restrukturisasi per kreditor dengan urutan negosiasi",
      "Paket proposal restrukturisasi kredibel: rencana perbaikan, proyeksi kas, komitmen pemilik",
      "Pendampingan negosiasi sampai perjanjian restrukturisasi ditandatangani",
      "Peta jalur PKPU sebagai rencana cadangan dan pemantauan kepatuhan pasca-perjanjian",
    ],
    costs: [
      { item: "Jasa restrukturisasi DIGIMAN.ID", note: "mulai Rp 7,5 jt — analisis, strategi, proposal, pendampingan" },
      { item: "Pengambilan laporan SLIK", note: "biaya kecil sesuai ketentuan OJK — kami atur pengambilannya" },
      { item: "Penasihat hukum dan biaya PKPU (bila jalur peradilan dibuka)", note: "dihitung terpisah dan diinformasikan sebelum jalur dibuka" },
      { item: "Notaris perjanjian restrukturisasi", note: "menyesuaikan jumlah kreditor dan kompleksitas perjanjian" },
      { item: "Retainer pemantauan kepatuhan pasca-perjanjian", note: "opsional — ringan, agar tidak jatuh lagi di tahun pertama" },
    ],
    legalBasis: [
      "UU No. 37 Tahun 2004 tentang Kepailitan dan PKPU sebagaimana diubah terakhir",
      "POJK No. 11/POJK.03/2020 tentang Penerapan Manajemen Risiko bagi Bank Umum (klasifikasi kualitas aset dan restrukturisasi kredit)",
      "UU No. 10 Tahun 1998 tentang Perbankan (hubungan debitur-kreditor perbankan)",
    ],
  },
};
