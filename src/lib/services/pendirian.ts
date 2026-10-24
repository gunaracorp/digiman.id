import type { ServiceContent } from "./types";

/**
 * KATEGORI: PENDIRIAN BADAN USAHA (8 layanan)
 * Kategori pertama & utama — "Badan Usaha & Akta Pendirian".
 * Tagline kategori: "Fondasi bisnis Anda lahir secara resmi."
 */
export const pendirianContent: ServiceContent[] = [
  {
    slug: "pendirian-pt",
    tagline: "Badan Usaha & Akta Pendirian — Fondasi bisnis Anda lahir secara resmi.",
    heroSub:
      "Pendirian PT lengkap: akta notaris, SK Kemenkumham, NPWP badan, dan NIB — semua dalam satu paket, tanpa biaya siluman.",
    timeline: "3–7 hari kerja",
    intro: [
      "Perseroan Terbatas (PT) adalah bentuk badan usaha paling disegani di Indonesia — dipisahkan secara hukum dari kekayaan pribadi pemegang saham, dipercaya bank, investor, dan mitra besar. Ketika bisnis Anda berdiri sebagai PT, Anda tidak sekadar punya surat izin: Anda punya entitas hukum yang dapat mengikat kontrak, mengajukan kredit, menerima investasi, dan mewariskan perusahaan kepada generasi berikutnya.",
      "Proses pendirian PT melibatkan lima tahap resmi: penyusunan akta oleh notaris, pengesahan Kemenkumham yang menerbitkan nomor SK AHU, penerbitan NPWP badan, registrasi NIB melalui OSS-RBA, hingga pengurusan domisili usaha. Setiap tahap punya persyaratan dokumen dan format yang ketat — satu kesalahan kecil bisa mengulang seluruh proses. Di sinilah Digiman masuk: tim legal kami menangani seluruh rantai proses, Anda cukup memantau dari portal.",
      "Sejak 2022 kami telah mendirikan lebih dari 2.500 badan usaha di seluruh Indonesia — dari UMKM yang naik kelas hingga perusahaan dengan modal miliaran rupiah. Semua dikerjakan dengan prinsip yang sama: transparan sejak penawaran, cepat tanpa mengorbankan kepatuhan, dan bergaransi terbit.",
    ],
    benefits: [
      { title: "Tanggung jawab terbatas", desc: "Aset pribadi pemegang saham terpisah dari aset perusahaan. Risiko usaha tidak menyentuh rumah dan tabungan Anda." },
      { title: "Dipercaya bank & investor", desc: "PT adalah syarat mutlak untuk kredit modal kerja besar, venture capital, tender BUMN, dan kemitraan korporasi." },
      { title: "Skala pajak badan", desc: "Tarif pajak penghasilan badan hingga fasilitas PP 23/2018 (0,5% untuk omzet di bawah Rp 4,8 M) jauh lebih efisien bagi bisnis yang tumbuh." },
      { title: "Kelangsungan permanen", desc: "Perusahaan tetap hidup meski pendiri mundur atau wafat — saham dapat dialihkan, kepemimpinan dapat berganti." },
      { title: "Kredibilitas merek", desc: "Nama PT setelah brand Anda menaikkan persepsi profesional di mata klien, vendor, dan pasar." },
      { title: "Siap ekspansi", desc: "Struktur saham PT memudahkan pembukaan cabang, joint venture, hingga pencatatan di bursa di masa depan." },
    ],
    process: [
      { title: "Konsultasi & pemetaan KBLI", desc: "Dewan pakar kami memetakan bidang usaha ke kode KBLI 2020 yang paling optimal — termasuk analisis risiko dan peluang insentif pajak." },
      { title: "Penyusunan akta notaris", desc: "Anggaran dasar disusun sesuai UU Cipta Kerja & PP 8/2021, ditandatangani para pendiri (bisa online via TTE tersertifikasi)." },
      { title: "Pengesahan Kemenkumham", desc: "Pengajuan SK via sistem AHU — kebanyakan terbit real-time atau 1 hari kerja setelah akta ditandatangani." },
      { title: "NPWP & NIB otomatis", desc: "NPWP badan terbit bersama SK; kami lanjutkan registrasi OSS-RBA hingga NIB terbit sebagai izin dasar usaha." },
      { title: "Penyerahan & pendampingan", desc: "Seluruh dokumen asli kami serahkan lengkap (via kurir bila perlu) plus sesi orientasi kewajiban rutin: SPT, laporan keuangan, dan perizinan lanjutan." },
    ],
    requirements: [
      "KTP & NPWP seluruh pendiri dan pemegang saham",
      "Alamat email aktif & nomor ponsel yang dapat dihubungi",
      "Alamat usaha (rumah diperbolehkan — kami bantu surat keterangan domisili)",
      "Nama PT yang diinginkan (3 alternatif, agar tersedia di sistem AHU)",
      "Rincian modal dasar & komposisi saham para pemegang",
      "Bidang usaha yang direncanakan (kami bantu pemetaan KBLI-nya)",
    ],
    faqs: [
      { q: "Berapa modal dasar minimal untuk mendirikan PT?", a: "Sejak PP 8/2021, tidak ada lagi batas minimum modal dasar Rp 50 juta — modal dasar ditetapkan para pendiri sesuai kesepakatan, dan modal disetor minimal 25% dari modal dasar. Untuk PT PMA (asing) berlaku aturan investasi minimal Rp 10 miliar per KBLI 5 digit. Konsultasi gratis kami akan membantu Anda menetapkan angka paling efisien secara pajak dan kredibilitas." },
      { q: "Apakah pendirian PT bisa 100% online tanpa datang ke notaris?", a: "Bisa. Dengan tanda tangan elektronik tersertifikasi (TTE) yang diakui Kemenkumham, seluruh proses — dari akta hingga SK — dapat berjalan tanpa tatap muka. Kami mengirim seluruh dokumen asli via kurir terjamin setelah proses selesai. Rata-rata klien kami tidak pernah meninggalkan rumah sepanjang proses." },
      { q: "Apa yang membuat Digiman berbeda dari jasa pendirian PT lain?", a: "Tiga hal: transparansi biaya penuh sejak penawaran (tidak ada biaya siluman di tengah jalan), garansi terbit (jika gagal karena proses kami, kami ulangi gratis plus kompensasi), dan ekosistem pasca-pendirian — dari perizinan sektor, pajak, hingga website — semua di satu atap sehingga Anda tidak berpindah-pindah vendor." },
      { q: "Setelah PT berdiri, kewajiban rutin apa yang harus saya jalankan?", a: "Minimal tiga: SPT Tahunan Badan (paling lambat 4 bulan setelah tutup buku), laporan keuangan yang disusun sesuai SAK EMKM untuk usaha kecil-menengah, dan pembaruan data perizinan bila terjadi perubahan. Digiman menawarkan layanan tata kelola bulanan agar semua kewajiban ini terjaga — Anda fokus jualan." },
    ],
    related: ["pt-perorangan", "nib-oss", "npwp-pkp"],
  },
  {
    slug: "pt-perorangan",
    tagline: "Badan usaha resmi untuk pekerja mandiri — tanpa notaris, terbit hari itu.",
    heroSub:
      "PT Perorangan berbasis UUCK: NIB sebagai legalitas pasti, dibuat via OSS, tanpa akta notaris dan tanpa biaya notaris.",
    timeline: "1–2 hari kerja",
    intro: [
      "UU Cipta Kerja (UUCK) memperkenalkan bentuk badan usaha revolusioner: PT Perorangan — badan hukum yang cukup berdiri dengan NIB yang diterbitkan OSS. Tidak perlu akta notaris, tidak perlu pengesahan kemenkumham, tidak ada biaya notaris. Bagi freelancer, kreator, konsultan, dan pebisnis solo, ini adalah pintu legalitas termurah dan tercepat yang pernah ada di Indonesia.",
      "Meski sederhana, PT Perorangan tetap merupakan badan hukum: aset usaha terpisah dari aset pribadi, dan Anda bisa memakai nama usaha (bukan nama pribadi) dalam bertransaksi. Batasnya satu orang pendiri satu PT Perorangan — cocok untuk usaha individu yang ingin tampak profesional dengan modal minim.",
      "Digiman menangani registrasi PT Perorangan end-to-end: pemetaan KBLI, registrasi OSS-RBA, verifikasi data, hingga NIB terbit. Kami juga menjelaskan dengan jelas kewajiban lanjutannya (SPT tahunan via e-Filing, dan transisi ke PT biasa bila usaha tumbuh) supaya Anda tidak tersesat setelah dokumen terbit.",
    ],
    benefits: [
      { title: "Biaya paling hemat", desc: "Tanpa honor notaris dan tanpa biaya pengesahan — Anda hanya menanggung jasa pemetaan KBLI dan registrasi OSS kami." },
      { title: "Terbit super cepat", desc: "NIB dapat terbit di hari yang sama setelah data lengkap dan terverifikasi di sistem OSS." },
      { title: "Tetap badan hukum", desc: "Pemisahan tanggung jawab aset tetap ada — lebih aman dibanding usaha perorangan biasa tanpa badan hukum." },
      { title: "Nama usaha sendiri", desc: "Transaksi memakai nama brand Anda, bukan nama pribadi — kredibilitas naik di mata klien dan marketplace." },
      { title: "Pintu naik kelas", desc: "Saat omzet membesar, PT Perorangan dapat diubah menjadi PT biasa — kami siap mendampingi transisinya." },
    ],
    process: [
      { title: "Pemetaan KBLI", desc: "Kami petakan aktivitas usaha Anda ke KBLI berisiko rendah-menengah yang sesuai untuk PT Perorangan." },
      { title: "Registrasi OSS-RBA", desc: "Pembuatan akun OSS atas NIK dan verifikasi identitas elektronik (KTP, NPWP, email, nomor HP)." },
      { title: "Pengajuan NIB", desc: "Pengisian data usaha dan pengajuan NIB sebagai legalitas pasti — sistem memverifikasi otomatis." },
      { title: "Penyerahan & edukasi", desc: "NIB dan seluruh dokumen kami serahkan plus panduan kewajiban pajak & perizinan lanjutan yang mudah dipahami." },
    ],
    requirements: [
      "KTP & NPWP diri sendiri (pemilik tunggal)",
      "Email aktif & nomor HP terdaftar e-Warung/OSS",
      "Alamat usaha (boleh rumah sendiri)",
      "Nama usaha yang diinginkan",
      "Deskripsi singkat aktivitas usaha",
    ],
    faqs: [
      { q: "Apa perbedaan PT Perorangan dengan usaha dagang (UD)?", a: "UD bukan badan hukum — tanggung jawab usaha menyatu dengan aset pribadi. PT Perorangan adalah badan hukum yang berdiri dengan NIB: aset terpisah, bisa pakai nama usaha, dan lebih dipercaya mitra bisnis. Sejak UUCK, PT Perorangan dirancang sebagai pengganti modern UD untuk usaha individu." },
      { q: "Bisakah PT Perorangan punya karyawan?", a: "Bisa. PT Perorangan boleh mempekerjakan karyawan dan wajib mendaftarkan BPJS Kesehatan & Ketenagakerjaan untuk mereka, sama seperti PT biasa. Batasannya hanya pada kepemilikan: satu pendiri, satu PT Perorangan, dan tidak boleh memegang saham di PT lain." },
      { q: "Kapan sebaiknya saya naik ke PT biasa?", a: "Tiga sinyal utama: (1) Anda butuh modal/investor eksternal — PT Perorangan tidak bisa menerbitkan saham; (2) omzet melampaui Rp 4,8 miliar sehingga skema 0,5% tidak lagi efisien; (3) mitra besar mensyaratkan PT dengan struktur lengkap. Konsultan kami akan menghitung titik paling efisien untuk transisi." },
    ],
    related: ["pendirian-pt", "nib-oss", "npwp-pkp"],
  },
  {
    slug: "pendirian-cv",
    tagline: "Usaha keluarga & kemitraan — sah, cepat, dan ramah di kantong.",
    heroSub:
      "Commanditaire Vennootschap (CV) untuk usaha bersama: akta notaris resmi, pengesahan kehakiman, dan NPWP — paket hemat.",
    timeline: "3–5 hari kerja",
    intro: [
      "CV adalah pilihan klasik untuk usaha yang dibangun oleh dua orang atau lebih — keluarga, sahabat, atau mitra yang saling percaya. Strukturnya sederhana: sekutu aktif yang mengelola sehari-hari, dan sekutu pasif yang menyetorkan modal. Keuntungan CV terletak pada biaya pendirian yang jauh lebih murah dari PT dan fleksibilitas pengelolaan yang longgar.",
      "Meski tidak sekuensial PT di mata investor besar, CV sepenuhnya sah untuk mengurus NIB, membuka rekening atas nama usaha, mengikuti tender tertentu, dan membangun kredibilitas brand. Untuk usaha dagang, jasa, produksi kecil-menengah, dan usaha keluarga, CV sering kali menjadi pilihan paling rasional secara biaya-manfaat.",
      "Digiman menyusun akta CV yang detail: pembagian untung-rugi, hak dan kewajiban tiap sekutu, mekanisme keluar-masuk sekutu, hingga klausul penyelesaian sengketa. Bagian-bagian inilah yang sering diabaikan jasa murahan — dan menjadi bom waktu di kemudian hari. Kami memastikan CV Anda berdiri di fondasi yang rapi.",
    ],
    benefits: [
      { title: "Biaya jauh lebih murah", desc: "Pendirian CV umumnya 40–60% lebih hemat dibanding PT — cocok untuk usaha baru yang belum butuh struktur korporat penuh." },
      { title: "Proses cepat", desc: "Akta dan pengesahan dapat beres dalam hitungan hari — usaha Anda segera resmi beroperasi." },
      { title: "Fleksibel untuk keluarga", desc: "Struktur sekutu aktif-pasif cocok untuk usaha keluarga: yang punya modal berbeda dengan yang menjalankan." },
      { title: "Rekening atas nama usaha", desc: "CV dapat membuka rekening perusahaan dan memisahkan keuangan usaha dari keuangan pribadi." },
      { title: "Dasar perizinan lengkap", desc: "CV sah sebagai dasar pengurusan NIB, izin sektor, dan sertifikasi produk sesuai bidang usaha." },
    ],
    process: [
      { title: "Konsultasi struktur sekutu", desc: "Kami petakan siapa sekutu aktif/pasif, besaran kontribusi, dan pembagian untung-rugi yang adil." },
      { title: "Penyusunan akta CV", desc: "Notaris menyusun akta persekutuan lengkap dengan klausul perlindungan semua pihak." },
      { title: "Pengesahan kehakiman", desc: "Pengesahan akta di Pengadilan Negeri setempat — ciri khas CV yang membedakannya dari PT." },
      { title: "NPWP, NIB & domisili", desc: "Kami lanjutkan NPWP CV, registrasi NIB via OSS, dan surat keterangan domisili usaha." },
      { title: "Penyerahan dokumen", desc: "Seluruh dokumen asli diserahkan rapi plus panduan kewajiban pajak orang pribadi para sekutu." },
    ],
    requirements: [
      "KTP & NPWP seluruh sekutu (aktif dan pasif)",
      "Email aktif & nomor HP perwakilan",
      "Alamat usaha CV",
      "Nama CV yang diinginkan (3 alternatif)",
      "Kesepakatan awal kontribusi & pembagian untung (kami bantu merapikan)",
    ],
    faqs: [
      { q: "Apakah CV bisa menerima investor seperti PT?", a: "CV tidak menerbitkan saham, sehingga tidak cocok untuk investasi berbasis equity. Investor di CV umumnya masuk sebagai sekutu pasif dengan kesepakatan modal. Jika rencana Anda menerima venture capital atau investor institusional, PT adalah struktur yang tepat — kami bisa bantu konversi CV ke PT di kemudian hari." },
      { q: "Bagaimana pajak CV dihitung?", a: "CV sendiri tidak dikenai pajak penghasilan badan; laba CV dialokasikan ke masing-masing sekutu lalu dipajaki sebagai orang pribadi sesuai progresifnya. Untuk omzet tertentu, sekutu bisa memakai skema PP 23 (0,5% dari omzet). Konsultan pajak kami akan menghitung skenario paling hemat untuk posisi Anda." },
      { q: "Apa risiko CV dibanding PT?", a: "Sekutu aktif menanggung kewajiban usaha hingga seluruh kekayaan pribadinya (tanggung jawab tak terbatas), sehingga CV kurang ideal untuk usaha berisiko tinggi atau bernilai kontrak besar. Untuk usaha dengan risiko rendah dan pihak-pihak yang saling percaya, CV tetap efisien. Dewan pakar kami akan jujur menilai apakah CV benar-benar cocok untuk Anda." },
    ],
    related: ["pendirian-pt", "firma-ud", "nib-oss"],
  },
  {
    slug: "pt-pma",
    tagline: "Pintu resmi investor asing menanam modal di Indonesia.",
    heroSub:
      "PT PMA dengan struktur saham asing penuh: perizinan BKPM/OSS, laporan investasi berkala, dan pendampingan penuh hingga operasional.",
    timeline: "7–14 hari kerja",
    intro: [
      "Penanaman Modal Asing (PMA) adalah jalur resmi warga asing dan korporasi luar negeri memiliki bisnis di Indonesia. PT PMA adalah badan hukum Indonesia dengan kepemilikan saham asing — mengikat pada regulasi BKPM (Badan Investasi/BKPM), daftar positif investasi (Perpres 10/2021 beserta perubahannya), dan aturan modal minimum Rp 10 miliar per bidang usaha KBLI 5 digit.",
      "Navigasi regulasi PMA membutuhkan ketelitian: persentase kepemilikan asing berbeda antarbidang usaha, sektor tertentu menuntut kemitraan dengan UMKM, dan laporan investasi berkala (LKI) wajib diajukan setiap kuartal. Kesalahan struktur di awal bisa memakan biaya restrukturisasi besar di kemudian hari. Tim PMA kami memahami seluruh alurnya — dari persetujuan KBLI hingga repatriasi laba.",
      "Kami telah mendampingi investor dari Jepang, Korea, Singapura, China, dan Eropa. Layanan kami mencakup penerbitan izin prinsip, pendirian badan hukum, izin lokasi, perekrutan tenaga asing (RPTKA/KITAS), sampai kepatuhan pajak lintas negara — sehingga investor cukup fokus pada bisnisnya.",
    ],
    benefits: [
      { title: "Kepemilikan saham asing", desc: "Investor asing dapat memegang saham mayoritas (hingga 100% pada banyak sektor) sesuai Daftar Positif Investasi." },
      { title: "Kepatuhan BKPM menyeluruh", desc: "Izin investasi, LKI kuartalan, dan realisasi penanaman modal — semua dikelola tim kami tepat waktu." },
      { title: "Visa & tenaga asing", desc: "RPTKA, KITAS direksi/karyawan asing, hingga KITAP untuk jangka panjang — satu pintu dengan pendirian perusahaan." },
      { title: "Struktur pajak internasional", desc: "Pendampingan tax treaty, transfer pricing, dan repatriasi laba agar investasi efisien dan patuh." },
      { title: "Kredibilitas korporat", desc: "PT PMA diakui penuh untuk kontrak besar, akuisisi lahan, dan kemitraan dengan pemerintah maupun korporasi lokal." },
    ],
    process: [
      { title: "Analisis KBLI & kepemilikan", desc: "Kami petakan bidang usaha ke Daftar Positif Investasi — berapa persen saham asing yang diperbolehkan dan syarat khususnya." },
      { title: "Izin prinsip & deklarasi modal", desc: "Penyusunan rencana investasi dan pengajuan izin prinsip melalui sistem OSS-BKPM." },
      { title: "Akta & pengesahan", desc: "Akta PT PMA disusun notaris dengan struktur direksi-komisaris sesuai regulasi, lalu dipengesahkan Kemenkumham." },
      { title: "Perizinan operasional", desc: "NIB, izin lokasi, izin lingkungan (sesuai risiko KBLI), hingga izin sektor khusus bila diperlukan." },
      { title: "Pasca-berdiri", desc: "LKI kuartalan, NPWP & PKP, pendaftaran KITAS direksi asing, hingga pembukaan rekening eksternal — kami dampingi sampai jalan." },
    ],
    requirements: [
      "Paspor seluruh pemegang saham & direksi asing",
      "Dokumen badan hukum negara asal (apostille/legalisasi) bila pemegang saham korporasi",
      "Rencana investasi: nilai, jadwal, lokasi, dan jumlah tenaga kerja",
      "Alamat kantor di Indonesia (virtual office dapat dibantu)",
      "Nama PT PMA yang diinginkan (3 alternatif)",
    ],
    faqs: [
      { q: "Berapa modal minimum PT PMA?", a: "Regulasi BKPM menetapkan nilai investasi minimal Rp 10 miliar (di luar tanah & bangunan) per KBLI 5 digit per lokasi proyek. Nilai ini adalah rencana investasi (bukan setoran tunai penuh di awal) — dapat berupa mesin, peralatan, dan modal kerja. Kami bantu menyusun rencana investasi yang realistis dan sesuai kapasitas Anda." },
      { q: "Apakah investor asing bisa 100% memiliki PT PMA?", a: "Pada mayoritas sektor ya — Daftar Positif Investasi membuka kepemilikan asing hingga 100%. Beberapa sektor sensitif (transportasi tertentu, media, kesehatan tertentu) menetapkan batas maksimal atau menuntut kemitraan. Kirimkan bidang usaha Anda, dan tim kami akan memberi jawaban pasti beserta dasar hukumnya." },
      { q: "Berapa lama investor asing bisa tinggal di Indonesia?", a: "Direksi dan karyawan asing PT PMA berhak atas KITAS (izin tinggal terbatas, umumnya 6–12 bulan per periode, dapat diperpanjang) dengan RPTKA yang terlebih dahulu disahkan. Untuk pemegang saham tertentu tersedia juga indeks visa investasi. Kami menangani seluruh rantai ini bersamaan dengan pendirian perusahaan." },
    ],
    related: ["kitas-rptka", "npwp-pkp", "virtual-office"],
  },
  {
    slug: "firma-ud",
    tagline: "Bentuk klasik usaha bersama — sederhana, langsung, efektif.",
    heroSub:
      "Pendirian Firma dan perizinan UD (Usaha Dagang) untuk usaha dagang dan kemitraan sederhana dengan biaya paling hemat.",
    timeline: "2–5 hari kerja",
    intro: [
      "Firma (Fa) adalah persekutuan di mana semua sekutu aktif dan bertanggung jawab bersama atas seluruh kekayaan masing-masing. Bentuk ini digemari untuk usaha jasa profesional bersama — kantor akuntan, studio arsitek, atau agen perjalanan — di mana kepercayaan antarsekutu tinggi dan skala usaha moderat.",
      "Sementara UD (Usaha Dagang) tetap relevan sebagai usaha perorangan di bidang perdagangan: tanpa badan hukum, tapi tetap membutuhkan izin tempat usaha, NIB, dan kepatuhan pajak dasar untuk beroperasi resmi — terutama bila menghadap instansi, bank, atau supplier besar yang meminta legalitas.",
      "Digiman membantu Anda memilih dengan jujur: bila target pasar menuntut badan hukum penuh, kami akan merekomendasikan PT Perorangan atau PT. Bila Firma/UD memang paling efisien, kami urus akta (untuk Firma), izin, NIB, dan domisili dengan cepat — tanpa menjual yang tidak Anda butuhkan.",
    ],
    benefits: [
      { title: "Biaya paling ekonomis", desc: "Pendirian Firma dan pengurusan UD berada di rentang biaya terendah seluruh layanan kami." },
      { title: "Struktur sederhana", desc: "Tanpa rapat umum pemegang saham dan struktur direksi-komisaris — keputusan cepat diambil bersama." },
      { title: "Cocok untuk jasa profesional", desc: "Kemitraan antarprofesional (konsultan, desainer, tenaga hukum) sangat cocok dengan pola Firma." },
      { title: "Dasar legalitas lengkap", desc: "NIB, izin tempat usaha, dan domisili tetap kami urus sehingga usaha sah di mata pemerintah dan mitra." },
      { title: "Jalur naik kelas jelas", desc: "Bila usaha tumbuh, kami bantu konversi ke CV atau PT dengan memindahkan aset secara rapi." },
    ],
    process: [
      { title: "Penilaian bentuk usaha", desc: "Dewan pakar menilai Firma/UD/CV/PT mana yang paling efisien untuk tujuan dan risiko usaha Anda." },
      { title: "Akta firma (bila Firma)", desc: "Penyusunan akta persekutuan oleh notaris dengan pembagian hak-kewajiban yang jelas." },
      { title: "Izin & NIB", desc: "Surat izin usaha (untuk UD), registrasi NIB via OSS, dan surat keterangan domisili." },
      { title: "Penyerahan & panduan", desc: "Dokumen lengkap diserahkan plus panduan kewajiban pajak orang pribadi sekutu/pemilik." },
    ],
    requirements: [
      "KTP & NPWP seluruh sekutu/pemilik",
      "Email aktif & nomor HP",
      "Alamat usaha",
      "Nama usaha yang diinginkan",
      "Gambaran bidang usaha & target pasar",
    ],
    faqs: [
      { q: "Kapan Firma lebih baik daripada CV?", a: "Ketika semua anggota aktif mengelola usaha dan berbagi tanggung jawab penuh — misalnya kemitraan profesional setara. Bila ada anggota yang hanya menyetor modal tanpa mengelola, CV lebih tepat (posisi sekutu pasif). Kami akan menilai struktur tim Anda dan merekomendasikan yang paling aman." },
      { q: "UD tanpa badan hukum apakah cukup untuk berjualan online besar?", a: "Untuk marketplace dan komunitas, banyak UD berjalan dengan NIB saja. Namun begitu Anda menghadap supplier besar, mengajukan kredit, atau membangun brand jangka panjang, badan hukum (PT Perorangan/PT) memberi perlindungan aset dan kredibilitas yang tidak dimiliki UD. Konsultasi kami membantu Anda memilih titik yang tepat." },
    ],
    related: ["pendirian-cv", "nib-oss", "pendirian-pt"],
  },
  {
    slug: "pendirian-koperasi",
    tagline: "Ekonomi bersama yang sah — koperasi berdiri kuat dari hari pertama.",
    heroSub:
      "Pendirian Koperasi lengkap: RAT pendirian, akta notaris, pengesahan Dinas Koperasi, hingga NIB dan NPWP koperasi.",
    timeline: "10–14 hari kerja",
    intro: [
      "Koperasi adalah badan usaha yang berangkat dari prinsip kebersamaan: anggota adalah pemilik sekaligus pengguna. Sejak UU Cipta Kerja, pendirian koperasi dimulai dari Rapat Anggota (RAT) pendirian minimal 9 orang, dilanjutkan akta pendirian oleh notaris, lalu pengesahan badan hukum oleh Dinas Koperasi dan UKM — yang kini dapat berjalan elektronik.",
      "Koperasi membuka akses yang tak dimiliki badan usaha lain: pinjaman anggota, perizinan simpan pinjam (untuk koperasi SP), kerja sama pemerintah, dan berbagai program pemberdayaan. Namun tata kelolanya punya disiplin sendiri — RAT tahunan, laporan keuangan koperasi, dan struktur pengurus-pengawas yang sah.",
      "Tim kami mendampingi dari nol: menyusun AD/ART koperasi, memandu RAT pendirian yang sah, hingga pengesahan, NPWP, dan NIB. Untuk koperasi digital dan koperasi modern, kami juga membantu sistem keanggotaan online — menggabungkan nilai kebersamaan dengan efisiensi teknologi.",
    ],
    benefits: [
      { title: "Badan hukum ekonomi rakyat", desc: "Status koperasi membuka program pemerintah, fasilitas permodalan, dan kepercayaan komunitas." },
      { title: "Pelayanan anggota optimal", desc: "Struktur RAT memberi kekuasaan tertinggi ke anggota — tata kelola demokratis dan transparan." },
      { title: "Akses permodalan khusus", desc: "Koperasi dapat mengakses LKBB, dana pemerintah, dan skema pembiayaan yang didesain untuk koperasi." },
      { title: "Kepatuhan tersusun rapi", desc: "AD/ART, RAT, dan laporan kami susun benar sejak awal — menghindari sengketa tata kelola di kemudian hari." },
      { title: "Pendampingan tata kelola", desc: "Pasca-berdiri, tim kami siap mendampingi RAT tahunan, pembukuan, hingga digitalisasi keanggotaan." },
    ],
    process: [
      { title: "Persiapan pendirian", desc: "Kami pandu pengumpulan minimal 9 pendiri anggota dan penyusunan rencana usaha koperasi." },
      { title: "RAT pendirian", desc: "Berita acara RAT pendirian disusun dan dijalankan sah: AD/ART disetujui, pengurus & pengawas dipilih." },
      { title: "Akta & pengesahan", desc: "Akta pendirian oleh notaris, dilanjutkan pengajuan pengesahan badan hukum ke Dinas Koperasi (elektronik)." },
      { title: "NPWP, NIB & perizinan usaha", desc: "Kami urus NPWP koperasi, NIB via OSS, dan izin usaha koperasi sesuai bidang (termasuk simpan pinjam bila perlu)." },
    ],
    requirements: [
      "Minimal 9 orang pendiri anggota (KTP & NPWP masing-masing)",
      "Berita acara RAT pendirian (kami pandu penyusunannya)",
      "Nama koperasi & bidang usaha (simpan pinjam, konsumsi, produksi, jasa, digital)",
      "Alamat kantor koperasi",
      "Susunan pengurus & pengawas terpilih",
    ],
    faqs: [
      { q: "Berapa minimal anggota untuk mendirikan koperasi?", a: "Sejak UUCK, pendirian koperasi cukup dengan 9 orang pendiri anggota (turun dari 20 orang pada aturan lama). Rat pendirian memutuskan AD/ART dan memilih pengurus. Jika komunitas Anda belum mencapai jumlah itu, alternatifnya adalah memulai dengan perkumpulan atau CV terlebih dahulu — kami bantu bandingkan opsi." },
      { q: "Apakah koperasi bisa menjalankan usaha simpan pinjam?", a: "Bisa, melalui bagian usaha simpan pinjam atau menjadi koperasi simpan pinjam penuh dengan perizinan khusus sebagai LKBB (lembaga keuangan bukan bank). Regulasinya lebih ketat demi melindungi dana anggota — tim legal kami akan memandu seluruh persyaratannya." },
      { q: "Apa kewajiban rutin koperasi?", a: "RAT tahunan wajib (menyetujui laporan pengurus & pembagian SHU), pembukuan sesuai standar akuntansi koperasi, laporan berkala ke Dinas Koperasi, serta SPT Tahunan badan. Digiman menawarkan layanan tata kelola bulanan agar semua ini beres tanpa merepotkan pengurus." },
    ],
    related: ["perkumpulan-asosiasi", "pendirian-yayasan", "nib-oss"],
  },
  {
    slug: "pendirian-yayasan",
    tagline: "Nirlaba yang berdampak — berdiri sah, transparan, dan terpercaya.",
    heroSub:
      "Pendirian yayasan & lembaga nirlaba: akta notaris, pengesahan Kemenkumham, NPWP, dan NIB — tata kelola yang menginspirasi donor.",
    timeline: "5–10 hari kerja",
    intro: [
      "Yayasan adalah badan hukum nirlaba yang memisahkan kegiatan sosial, keagamaan, dan kemanusiaan Anda dari kepentingan komersial. Status yayasan menjadi prasyarat untuk menggalang dana secara resmi, mengelola zakat/infak/sedekah, mendirikan lembaga pendidikan atau kesehatan, dan membangun kepercayaan donatur — karena ada pengawasan struktur yang sah.",
      "Pendirian yayasan menuntut kejelian penyusunan anggaran dasar: maksud-tujuan, kekayaan, organ yayasan (pembina, pengurus, pengawas), serta mekanisme pertanggungjawaban. Kesalahan penulisan tujuan dapat membuat pengesahan tertolak atau memicu persoalan pajak di kemudian hari — di sinilah pengalaman kami menyelamatkan waktu Anda.",
      "Digiman telah mendirikan puluhan yayasan: lembaga pendidikan, ormas keagamaan, rumah sakit nirlaba, hingga YKKS. Kami memastikan seluruh struktur sah sejak hari pertama, plus pendampingan perizinan lanjutan (misalnya izin lembaga pendidikan atau izin operasional dari instansi teknis).",
    ],
    benefits: [
      { title: "Kredibilitas donor tinggi", desc: "Yayasan yang terpengesahan memudahkan penggalangan dana dan akuntabilitas publik." },
      { title: "Kewajiban pajak terpisah", desc: "Kegiatan nirlaba tertentu dapat menikmati perlakuan pajak berbeda dari entitas komersial." },
      { title: "Struktur organ jelas", desc: "Pembina-pengurus-pengawas yang tertata memberi kontrol internal dan kepercayaan eksternal." },
      { title: "Dasar perizinan lembaga", desc: "Yayasan adalah syarat pendirian sekolah, pesantren, klinik nirlaba, dan lembaga sosial resmi." },
      { title: "Kelangsungan misi", desc: "Kekayaan yayasan melekat pada tujuannya — misi sosial Anda berlanjut lintas generasi." },
    ],
    process: [
      { title: "Perumusan misi & organ", desc: "Kami bantu merumuskan maksud-tujuan yang tepat hukum serta susunan pembina, pengurus, dan pengawas." },
      { title: "Penyusunan akta yayasan", desc: "Notaris menyusun anggaran dasar lengkap sesuai UU Yayasan dan kebutuhan instansi terkait." },
      { title: "Pengesahan Kemenkumham", desc: "Pengajuan pengesahan badan hukum melalui sistem AHU online hingga SK terbit." },
      { title: "NPWP, NIB & perizinan lanjutan", desc: "NPWP yayasan, NIB via OSS, dan izin operasional dari instansi teknis (diknas, kemenkes, dll.) bila diperlukan." },
    ],
    requirements: [
      "KTP & NPWP 3 organ wajib: pembina, pengurus, pengawas",
      "Email aktif & nomor HP perwakilan",
      "Alamat kedudukan yayasan",
      "Nama yayasan & rumusan maksud-tujuan (kami bantu merumuskan)",
      "Rencana sumber kekayaan awal yayasan",
    ],
    faqs: [
      { q: "Apa beda yayasan dengan perkumpulan?", a: "Yayasan berangkat dari kekayaan yang dialokasikan untuk tujuan tertentu dan tidak punya anggota; perkumpulan berangkat dari keanggotaan (minimal 2 orang) dengan tujuan bersama. Untuk lembaga sosial yang dikelola atas nama dana/donatur, yayasan lebih tepat; untuk komunitas/asosiasi profesi, perkumpulan lebih tepat. Kami bantu menentukan mana yang cocok." },
      { q: "Apakah yayasan bebas pajak?", a: "Tidak sepenuhnya. Pendapatan yayasan yang berasal dari sumbangan, zakat/infak/sedekah, dan bantuan untuk kegiatan sosial umumnya tidak menjadi objek pajak; namun kegiatan ekonomi yayasan (misalnya unit usaha) tetap dikenai pajak. Konsultan pajak kami akan memetakan posisi pajak yayasan Anda secara spesifik." },
      { q: "Berapa minimal orang untuk mendirikan yayasan?", a: "Hukum menetapkan tiga organ minimum: 1 pembina, 1 pengurus, 1 pengawas (dapat dirangkap dengan ketentuan tertentu, namun kami sarankan tiga orang berbeda demi tata kelola bersih). Bila Anda berencana mengelola dana publik, struktur yang jelas adalah investasi kepercayaan." },
    ],
    related: ["perkumpulan-asosiasi", "pendirian-koperasi", "nib-oss"],
  },
  {
    slug: "perkumpulan-asosiasi",
    tagline: "Satukan komunitas & profesi — perkumpulan Anda berdiri resmi.",
    heroSub:
      "Pendirian perkumpulan & asosiasi: akta notaris, pengesahan Kemenkumham, dan tata kelola keanggotaan yang rapi.",
    timeline: "5–10 hari kerja",
    intro: [
      "Perkumpulan adalah badan hukum yang berangkat dari kesamaan tujuan antaranggota — asosiasi profesi, komunitas industri, organisasi alumni, hingga kumpulan pebisnis. Status badan hukum membuat perkumpulan dapat membuka rekening organisasi, menerima iuran, menandatangani kontrak, dan berkoordinasi resmi dengan pemerintah atau mitra internasional.",
      "Berbeda dengan yayasan (berbasis kekayaan), perkumpulan berbasis keanggotaan: keputusan besar diambil Rapat Anggota, dan AD/ART harus mengatur hak-kewajiban anggota dengan adil. Penyusunan AD/ART yang buruk adalah sumber konflik klasik organisasi — itulah mengapa kami menyusunnya dengan presisi tinggi.",
      "Digiman mendampingi pendirian perkumpulan dari rumusan visi sampai SK Kemenkumham terbit, termasuk menyusun mekanisme keanggotaan, iuran, etika organisasi, dan struktur kepengurusan yang sehat untuk jangka panjang.",
    ],
    benefits: [
      { title: "Badan hukum keanggotaan", desc: "Rekening organisasi, iuran resmi, dan kontrak atas nama perkumpulan menjadi sah dan tertib." },
      { title: "Kekuatan kolektif", desc: "Asosiasi yang sah lebih didengar pemerintah & industri dalam advokasi kebijakan." },
      { title: "Tata kelola demokratis", desc: "Rapat Anggota sebagai pemegang kekuasaan tertinggi — legitimasi keputusan terjaga." },
      { title: "AD/ART anti sengketa", desc: "Hak, kewajiban, dan mekanisme keluar-masuk anggota kami rumuskan presisi dari awal." },
      { title: "Jaringan & kredibilitas", desc: "Status badan hukum menaikkan kepercayaan mitra nasional dan internasional." },
    ],
    process: [
      { title: "Perumusan tujuan & anggota", desc: "Kami bantu merumuskan tujuan organisasi dan memastikan jumlah pendiri anggota memenuhi syarat." },
      { title: "Penyusunan AD/ART", desc: "Anggaran dasar & dalam disusun lengkap: keanggotaan, iuran, kepengurusan, dan mekanisme pertemuan." },
      { title: "Akta notaris", desc: "Akta pendirian perkumpulan ditandatangani para pendiri di hadapan notaris." },
      { title: "Pengesahan Kemenkumham", desc: "Pengajuan badan hukum via sistem AHU hingga SK terbit, dilanjutkan NPWP & NIB." },
    ],
    requirements: [
      "KTP & NPWP para pendiri (sesuai syarat jumlah minimal)",
      "Email aktif & nomor HP perwakilan",
      "Alamat kedudukan perkumpulan",
      "Nama perkumpulan & rumusan tujuan",
      "Rancangan program kegiatan organisasi",
    ],
    faqs: [
      { q: "Berapa minimal orang mendirikan perkumpulan?", a: "Peraturan pemerintah menetapkan perkumpulan berangkat dari minimal 2 orang pendiri; namun untuk keberlangsungan dan kredibilitas, banyak asosiasi berdiri dengan lebih banyak pendiri sejak awal. Kami bantu menilai struktur terbaik untuk komunitas Anda." },
      { q: "Bisakah perkumpulan menerima hibah dan sponsorship?", a: "Bisa — rekening atas nama perkumpulan yang terpengesahan dapat menerima hibah, sponsorship, dan iuran secara resmi dengan kuitansi/faktur organisasi. Untuk hibah dari luar negeri, ada mekanisme pelaporan tambahan yang akan kami jelaskan dan dampingi." },
      { q: "Apa kewajiban rutin perkumpulan?", a: "Musyawarah/musyawarah anggota sesuai AD (biasanya tahunan), laporan keuangan kepada anggota, pembayaran pajak atas kegiatan yang menjadi objek pajak, serta pembaruan data bila kepengurusan berganti. Digiman menawarkan pendampingan tata kelola agar organisasi tetap sehat." },
    ],
    related: ["pendirian-yayasan", "pendirian-koperasi", "legal-drafting"],
  },
];
