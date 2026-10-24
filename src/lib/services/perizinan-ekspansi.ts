import type { ServiceContent } from "./types";

/**
 * Konten editorial — EKSPANSI PERIZINAN (5 layanan baru, permintaan pasar tinggi).
 * Lingkungan, bangunan gedung, konstruksi, perdagangan luar negeri, distribusi.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const perizinanEkspansiContent: ServiceContent[] = [
  {
    slug: "izin-lingkungan",
    tagline: "Usaha yang baik hati pada lingkungan, dibuka pintunya oleh regulasi.",
    heroSub:
      "UKL-UPL atau AMDAL sesuai skala risiko usaha Anda — dokumen lingkungan yang menjadi pintu wajib sebelum sertifikat standar dan izin sektor terbit.",
    timeline: "UKL-UPL 2–4 minggu · AMDAL 2–6 bulan",
    intro: [
      "Setiap rencana kegiatan usaha di Indonesia melewati satu saringan yang sama: bagaimana kegiatan itu memengaruhi lingkungan — air, udara, tanah, masyarakat di sekitarnya. Saringan ini berbentuk tiga jenis dokumen sesuai skala risiko: Surat Pernyataan Kesanggupan (untuk risiko rendah), UKL-UPL (risiko menengah), dan AMDAL (risiko tinggi/besar). Memilih jenis dokumen yang salah — terlalu ringan atau terlalu berat — berarti kehilangan waktu berbulan-bulan atau menanggung biaya penyusunan yang tidak perlu.",
      "Masalah paling sering kami temui: pemilik usaha mengajukan sertifikat standar dulu, baru sadar sistem menahan proses sampai dokumen lingkungan selesai. Padahal urutannya terbalik — persetujuan lingkungan adalah prasyarat. Dokumen yang disusun asal-asalan juga kerap ditolak atau dikembalikan berkali-kali oleh DPMPTSP, dan dalam kasus AMDAL, gagal saat pembahasan di forum Komisi Penilai karena data dasarnya lemah.",
      "Kami menangani rantai utuhnya: penyaringan risiko dan penentuan jenis dokumen, rintisan kawasan (bila usaha berada di kawasan industri yang sudah punya AMDAL kawasan — biaya bisa jauh lebih hemat), penyusunan dokumen bersama penyusun berpengalaman, pemenuhan partisipasi publik, sampai pernyataan kesanggupan diteken dan persetujuan lingkungan terbit di OSS-RBA. Anda fokus menyiapkan pabrik dan tim — urusan dokumen jalan paralel dengan konstruksi Anda.",
    ],
    benefits: [
      { title: "Jenis dokumen yang tepat sejak awal", desc: "Saringan risiko dilakukan dulu — Anda tidak membayar AMDAL untuk usaha yang cukup UKL-UPL, atau sebaliknya." },
      { title: "Prasyarat izin sektor terbuka", desc: "Sertifikat standar & izin sektor berjalan mulus karena persetujuan lingkungan sudah siap lebih dulu." },
      { title: "Hemat via rintisan kawasan", desc: "Bila usaha berada di kawasan industri ber-AMDAL, dokumen Anda jauh lebih ringkas — kami petakan jalurnya." },
      { title: "Lolos partisipasi publik", desc: "Sosialisasi dan tanggapan masyarakat disiapkan benar — tidak gagal di forum penilai karena keluhan yang tak terjawab." },
      { title: "Rencana lingkungan yang bisa dijalankan", desc: "Dokumen bukan sekadar lulus — RPL-RPL-nya realistis, sehingga kepatuhan pasca-terbit tidak menyiksa operasional Anda." },
    ],
    process: [
      { title: "Saringan risiko & penentuan jalur", desc: "KBLI, skala, dan lokasi usaha dianalisis — ditetapkan dokumen yang benar: Pernyataan Kesanggupan, UKL-UPL, atau AMDAL." },
      { title: "Pengumpulan data dasar", desc: "Karakteristik usaha, komponen lingkungan, dan sosial sekitar dikumpulkan — termasuk cek rintisan kawasan untuk efisiensi biaya." },
      { title: "Penyusunan & pengajuan dokumen", desc: "Draft disusun, disempurnakan bersama Anda, lalu diajukan ke DPMPTSP — termasuk persiapan partisipasi publik bila diperlukan." },
      { title: "Perbaikan, persetujuan & tindak lanjut", desc: "Tanggapan penilai kami jawab sampai persetujuan terbit di OSS, plus panduan menjalankan RPL pasca-operasional." },
    ],
    requirements: [
      "NIB & KBLI usaha (bila belum berdiri, mulai dari paket pendirian)",
      "Data lokasi: peta, status lahan, dan jenis kegiatan produksi yang direncanakan",
      "Gambar rencana proses atau skema kegiatan (bila ada — bila belum, kami pandu penyusunannya)",
      "Dokumen penguasaan lahan (sertifikat, sewa, atau hak pakai)",
      "Untuk AMDAL: dokumen teknis pendukung (kesetiaan kerja tim penyusun tersedia melalui kami)",
    ],
    faqs: [
      { q: "Bagaimana tahu usaha saya cukup UKL-UPL atau harus AMDAL?", a: "Penentu utamanya adalah klasifikasi risiko KBLI di OSS-RBA (rendah-menengah-tinggi) dan skala kegiatan. Sebagai gambaran: usaha dengan dampak lintas kabupaten/kota, lahan luas, atau masuk daftar kegiatan wajib AMDAL per PP 22/2021 harus AMDAL; sisanya umumnya UKL-UPL atau cukup pernyataan kesanggupan. Konsultasi gratis kami dimulai persis di sini — supaya Anda tidak membayar dokumen yang lebih berat dari kebutuhan." },
      { q: "Usaha saya di ruko/di dalam kawasan industri, apakah tetap perlu dokumen lingkungan?", a: "Rintisan kawasan industri yang telah memiliki AMDAL kawasan memungkinkan Anda memakai dokumen lingkungan kawasan — proses jauh lebih cepat dan murah. Untuk usaha di ruko dengan kegiatan tanpa dampak berarti, banyak kasus cukup dengan pernyataan kesanggupan di OSS. Yang penting dicek: jenis KBLI dan status lahan Anda. Kami cek gratis saat konsultasi awal." },
      { q: "Berapa lama proses dan apakah bisa paralel dengan pembangunan?", a: "UKL-UPL umumnya 2–4 minggu setelah dokumen lengkap; AMDAL 2–6 bulan tergantung kompleksitas dan jadwal forum penilai. Persiapan dokumen lingkungan bisa (dan sebaiknya) berjalan paralel dengan perencanaan pembangunan — yang tidak boleh hanya memulai operasi produksi sebelum persetujuan terbit. Kami susun jadwal agar izin terbit mendekati hari operasional Anda." },
    ],
    related: ["izin-sektor-ss", "nib-oss", "pbg-slf"],
  },
  {
    slug: "pbg-slf",
    tagline: "Gedung yang sah dibangun, sah pula dipakai — dari PBG sampai SLF.",
    heroSub:
      "Persetujuan Bangunan Gedung (pengganti IMB) untuk membangun, dan Sertifikat Laik Fungsi untuk memakai — dua dokumen yang membuat properti Anda legal penuh, siap dipakai maupun dijual.",
    timeline: "PBG 2–6 minggu · SLF 2–8 minggu",
    intro: [
      "Sejak PP 16/2021 berlaku, IMB resmi pensiun dan digantikan dua dokumen dengan logika yang lebih masuk akal: PBG (Persetujuan Bangunan Gedung) adalah izin untuk MEMBANGUN atau mengubah bangunan, sedangkan SLF (Sertifikat Laik Fungsi) adalah sertifikat bahwa gedung yang sudah terbangun LAIK DIPAKAI — strukturnya aman, listriknya benar, jalur evakuasinya ada. Banyak pemilik properti keliru: punya IMB/PBG tapi lupa SLF, lalu kewalahan saat mau menjual, menggadaikan, membuka usaha, atau mengurus jaminan pembiayaan.",
      "Kompleksitasnya ada di detail: gambar teknis arsitektur-struktur-MEP harus sesuai standar, pemanfaatan lahan harus cocok dengan RTRW dan persawahan/PKKPR, dan untuk gedung tertentu perlu pendamping konsultan yang tersertifikasi di SIMBG. Kesalahan kecil — kelas bangunan yang salah diisi, tapak melebihi KDB, data tanah tidak sinkron — membuat pengajuan ditolak atau ditarik-tarik berbulan-bulan di DPMPTSP/BP2T.",
      "Kami mengurus keduanya dengan alur yang sudah berulang puluhan kali: pemeriksaan awal kelengkapan lahan & gambar, penyusunan/perbaikan dokumen teknis, pengajuan di SIMBG, menjawab tanggapan verifikator, sampai dokumen terbit. Untuk SLF gedung eksisting yang dulu dibangun tanpa kelengkapan gambar, kami punya jalur pemetaan ulang dan pengurusan retroaktif — gedung lama pun tetap bisa sah.",
    ],
    benefits: [
      { title: "Properti bernilai penuh", desc: "SLF membuat gedung bisa dijual, digadaikan, dan dipakai legal — dokumen ini yang dicari bank & pembeli serius." },
      { title: "Aman dari penghentian & pembongkaran", desc: "Bangunan tanpa PBG berisiko diberhentikan konstruksi atau dibongkar — amankan sebelum pengawasan datang." },
      { title: "Prasyarat izin usaha terbuka", desc: "Banyak izin sektor (restoran, hotel, pabrik, sekolah) mensyaratkan bukti laik fungsi — dokumen Anda siap duluan." },
      { title: "Ditangani konsultan paham SIMBG", desc: "Kesalahan isian di SIMBG adalah penyebab penolakan terbanyak — kami isi dengan benar sejak pengajuan pertama." },
      { title: "Retroaktif gedung lama", desc: "Gedung eksisting tanpa dokumen tetap bisa diurus SLF-nya — kami petakan jalur dan kelengkapan yang dibutuhkan." },
    ],
    process: [
      { title: "Pemeriksaan awal lahan & bangunan", desc: "Status tanah, RTRW/PKKPR, kelas bangunan, dan kondisi eksisting diperiksa — ditetapkan jalur PBG, SLF, atau kombinasi." },
      { title: "Penyiapan dokumen teknis", desc: "Gambar arsitektur, struktur, MEP, dan perhitungan teknis disusun/disempurnakan bersama tim & pendamping tersertifikasi." },
      { title: "Pengajuan di SIMBG & verifikasi", desc: "Dokumen diunggah, tarif retribusi diproses, tanggapan verifikator kami jawab — Anda tidak perlu mengurus ke kantor." },
      { title: "Terbit & serah terima", desc: "PBG/SLF terbit dengan QR verifikasi resmi — plus panduan kewajiban berikutnya (pemeliharaan, perubahan fungsi, perpanjangan)." },
    ],
    requirements: [
      "Dokumen kepemilikan lahan (SHM/SHGB/HGB atau hak pakai lainnya)",
      "Peta situasi & data koordinat lokasi bangunan",
      "Gambar teknis bangunan (arsitektur, struktur, MEP — bila belum ada, kami bantu susun)",
      "KTP & NPWP pemilik (pribadi atau badan usaha)",
      "Untuk gedung eksisting: data konstruksi yang tersedia (foto, gambar lama, keterangan teknis — kami pandu)",
    ],
    faqs: [
      { q: "Apa bedanya PBG, SLF, dan IMB lama?", a: "IMB dulu menggabungkan dua fungsi menjadi satu; sekarang dipisah menjadi dua tahap yang lebih jelas. PBG = persetujuan untuk membangun/mengubah bangunan (diterbitkan sebelum & selama konstruksi). SLF = sertifikat bahwa bangunan yang SUDAH JADI laik dipakai (diterbitkan setelah konstruksi selesai). Punya PBG saja belum cukup — gedung baru legal ditempati setelah SLF terbit." },
      { q: "Gedung saya dulu dibangun tanpa IMB, masih bisa diurus?", a: "Bisa — ini kebutuhan yang sangat umum dan punya jalur resmi. Prinsipnya pengurusan retroaktif: kondisi bangunan yang ada dipetakan/digambar ulang sesuai realita, dicek kesesuaiannya dengan peraturan zonasi dan standar teknis, lalu diajukan PBG/SLF sesuai kondisi. Hasilnya bisa persetujuan penuh, persetujuan dengan koreksi, atau (pada kasus tertentu) rekomendasi perbaikan. Konsultasi awal kami gratis untuk menilai jalur mana yang paling realistis." },
      { q: "Saya mau buka usaha (restoran/hotel/pabrik) di gedung yang sudah ada — dokumen mana yang dibutuhkan?", a: "Umumnya dua lapis: pertama, kepatuhan bangunan (SLF atau PBG bila ada perubahan fungsi/pembangunan — perubahan fungsi bangunan memang mewajibkan PBG baru). Kedua, dokumen itu menjadi prasyarat izin usaha sektornya di DPMPTSP/OSS. Banyak klien datang karena pengajuan usahanya tertahan di titik ini — kami cek dulu kondisi dokumen bangunannya, lalu susun urutan pengerjaan yang paling cepat." },
    ],
    related: ["izin-lingkungan", "izin-sektor-ss", "nib-oss"],
  },
  {
    slug: "sbu-konstruksi",
    tagline: "Kualifikasi resmi yang membuka pintu proyek — dari tender sampai mitra besar.",
    heroSub:
      "Sertifikat Badan Usaha jasa konstruksi melalui LPJK beserta sertifikat kompetensi personel teknisnya — kualifikasi & subkualifikasi disesuaikan bidang kerja yang Anda kejar.",
    timeline: "2–5 minggu hingga SBU terbit",
    intro: [
      "Di industri jasa konstruksi, SBU (Sertifikat Badan Usaha) adalah kartu identitas kompetensi: tanpa SBU, perusahaan Anda secara hukum tidak boleh mengerjakan konstruksi — dan secara komersial tidak akan dilirik pada tender BUMN, pemerintah, maupun proyek swasta besar. SBU menetapkan kualifikasi (Kecil, Madya, Utama) yang menentukan nilai proyek maksimum yang boleh Anda kerjakan, serta subkualifikasi yang menunjukkan bidang keahlian spesifik Anda.",
      "Yang membuat banyak perusahaan tersandung bukan niat, melainkan persyaratan personel: setiap kualifikasi mensyaratkan personel teknis bersertifikat (SKA/SKT) dengan jumlah dan level tertentu — perencana dan pelaksana untuk tiap subkualifikasi. Ditambah dokumen pengalaman (kontrak, BAST, SPK), NPWP & akta yang konsisten, dan registrasi yang kini berjalan penuh di sistem LPJK. Satu-satunya jalan pintas yang benar adalah menyiapkan semuanya dalam urutan yang tepat.",
      "Kami menangani sisi sistem dan sisi personel sekaligus: pemetaan kualifikasi yang realistis sesuai pengalaman dan rencana bisnis Anda (jangan over-apply lalu gagal), persiapan dokumen badan usaha, pendampingan sertifikasi kompetensi personel (termasuk BNSP untuk yang belum punya SKA/SKT), registrasi di LPJK, sampai SBU terbit. Untuk perusahaan yang sudah punya SBU, kami tangani perpanjangan, peningkatan kualifikasi, dan penambahan subkualifikasi.",
    ],
    benefits: [
      { title: "Lolos administrasi tender", desc: "SBU + personel bersertifikat membuat perusahaan Anda memenuhi syarat kualifikasi tender pemerintah & BUMN." },
      { title: "Kualifikasi yang realistis", desc: "Kami petakan kualifikasi yang benar-benar bisa lolos dengan dokumen yang Anda punya — tidak buang waktu apply terlalu tinggi." },
      { title: "Personel teknis diselesaikan", desc: "SKA/SKT personel adalah syarat paling sering menggagalkan — pendampingan sertifikasinya bagian dari layanan." },
      { title: "Sistem LPJK tanpa drama", desc: "Registrasi dan unggah dokumen dilakukan oleh yang paham alurnya — tidak tertahan di verifikasi karena salah format." },
      { title: "Jalur pertumbuhan terencana", desc: "Roadmap naik kualifikasi kecil→madya→utama sesuai pertumbuhan pengalaman — bisnis konstruksi Anda punya tangga yang jelas." },
    ],
    process: [
      { title: "Pemetaan kualifikasi & subkualifikasi", desc: "Pengalaman, personel, dan target proyek dianalisis — ditetapkan kualifikasi yang diajukan dan bidang subkualifikasinya." },
      { title: "Penyiapan dokumen & personel", desc: "Dokumen badan usaha disiapkan; personel teknis yang belum bersertifikat kami dampingi proses SKA/SKT/BNSP-nya." },
      { title: "Registrasi LPJK & pengajuan SBU", desc: "Seluruh dokumen didaftarkan di sistem LPJK — tanggapan verifikasi kami tangani sampai disetujui." },
      { title: "Terbit & strategi lanjutan", desc: "SBU terbit dan aktif — plus panduan mempertahankan kualifikasi dan merencanakan kenaikan level berikutnya." },
    ],
    requirements: [
      "Badan usaha PT/CV/koperasi (bila belum berdiri, mulai dari paket pendirian)",
      "Akta & SK pengesahan, NPWP, NIB",
      "Data personel teknis & sertifikat yang dimiliki (SKA/SKT/BNSP — belum ada pun kami siapkan jalurnya)",
      "Dokumen pengalaman pekerjaan konstruksi (kontrak/SPK/BAST — mempermudah kualifikasi lebih tinggi)",
      "Struktur organisasi & susunan pengurus",
    ],
    faqs: [
      { q: "Apa bedanya SBU, SKA, SKT, dan Sertifikat BNSP?", a: "SBU = sertifikat untuk BADAN USAHA (perusahaan), menentukan kualifikasi proyek yang boleh dikerjakan. SKA/SKT = sertifikat kompetensi PERSONEL teknis (ahli keterampilan: arsitektur, struktur, MEP) dari LJK/LPJK — ini yang disyaratkan di dalam SBU. Sertifikat BNSP = sertifikat kompetensi individu dari lembaga sertifikasi BNSP, sering menjadi langkah/pendukung menuju SKA/SKT dan juga disyaratkan untuk personel di tender. Singkatnya: perusahaan butuh SBU, orangnya butuh SKA/SKT/BNSP — kami urus keduanya berbarengan." },
      { q: "Perusahaan saya belum punya pengalaman proyek — bisa dapat SBU?", a: "Bisa, untuk kualifikasi Kecil. Syarat pengalaman makin berat di kualifikasi Madya dan Utama (jumlah nilai kontrak yang dikerjakan dalam beberapa tahun terakhir). Strategi yang kami rekomendasikan: mulai dari kualifikasi yang realistis, kumpulkan pengalaman dari proyek yang terbuka untuk level itu, lalu naik kualifikasi — dokumen pengalaman kami susun rapi sejak awal supaya kenaikan level lancar." },
      { q: "Berapa lama dan berapa biaya keseluruhan?", a: "Durasi 2–5 minggu tergantung kesiapan personel bersertifikat — bila personel belum ada SKA/SKT, tambah waktu sertifikasi kompetensi (biasanya 2–4 minggu tambahan). Biaya terdiri dari jasa kami (mulai Rp 2 jt), biaya resmi registrasi, dan biaya sertifikasi personel bila dibutuhkan — semua kami rincikan transparan di penawaran saat konsultasi gratis, tanpa biaya siluman." },
    ],
    related: ["bnsp", "pendirian-pt", "nib-oss"],
  },
  {
    slug: "api-bea-cukai",
    tagline: "Pintu masuk resmi dunia impor-ekspor — dibuka sekali, berlaku selamanya.",
    heroSub:
      "Angka Pengenal Impor (API-U/API-P) dan nomor registrasi bea cukai dalam satu rangkaian — identitas legal Anda untuk bertransaksi lintas negara, dari PIB sampai PEB.",
    timeline: "3–7 hari kerja setelah dokumen lengkap",
    intro: [
      "Bisnis impor-ekspor di Indonesia berdiri di atas dua identitas: API (Angka Pengenal Impor) yang diterbitkan di OSS sebagai izin berusaha kegiatan imponya, dan nomor registrasi bea cukai (kini NIB berlaku sebagai nomor tersebut) yang memungkinkan perusahaan Anda membuat PIB (Pemberitahuan Impor Barang) atau PEB di sistem CEISA Bea Cukai. Tanpa keduanya, barang tidak bisa masuk atau keluar atas nama perusahaan — Anda terpaksa jual-beli melalui perantara dan kehilangan margin.",
      "Pilihan API sering disalahpahami: API-U (umum) untuk impor barang yang dijual kembali dalam kondisi tidak diubah — trader, distributor, toko online yang impor stok; API-P (produsen) untuk barang yang dipakai sebagai bahan baku/penunjang produksi — pabrikan dan manufaktur. Salah memilih berarti kesulitan saat pemberitahuan pabean: barang untuk produksi tidak boleh masuk lewat API-U, dan sebaliknya. Plus ada konfigurasi KBLI yang harus sinkron, dan lartas (batasan larangan) tertentu yang menambah persyaratan per jenis barang.",
      "Kami rangkai semuanya menjadi satu layanan: penentuan API yang tepat sesuai model bisnis Anda, pemetaan KBLI & HS Code barang (penentu besarnya tarif bea masuk dan syarat lartas), aktivasi API di OSS-RBA, penyiapan registrasi bea cukai, sampai panduan pertama Anda membuat PIB/PEB — termasuk menjelaskan biaya apa saja yang akan muncul (bea masuk, PPN impor, PPh 22 impor) agar margin Anda terhitung sejak hari pertama.",
    ],
    benefits: [
      { title: "Impor/ekspor atas nama sendiri", desc: "Tidak lagi melalui perantara — margin penuh, dokumen atas nama perusahaan, kredibilitas naik di mata supplier." },
      { title: "API yang tepat sejak awal", desc: "API-U vs API-P ditentukan dari model bisnis — menghindari kebuntuan saat pemberitahuan pabean nantinya." },
      { title: "HS Code & lartas terpetakan", desc: "Kode barang dan syarat perizinan tambahan diketahui SEBELUM barang berlayar — tidak ada kejutan di pelabuhan." },
      { title: "CEISA siap pakai", desc: "Registrasi bea cukai aktif dan siap digunakan untuk PIB/PEB — plus panduan alur pertama Anda." },
      { title: "Simulasi biaya impor", desc: "Bea masuk, PPN impor, PPh 22 dihitung contoh — keputusan harga jual & margin berbasis angka, bukan kira-kira." },
    ],
    process: [
      { title: "Analisis model bisnis & barang", desc: "Apa yang diimpor/diekspor, untuk dijual atau diproduksi — ditetapkan jenis API dan KBLI yang benar." },
      { title: "Pemetaan HS Code & lartas", desc: "Kode tarif barang diketahui, syarat lartas teridentifikasi sejak awal — rencana perizinan tersusun lengkap." },
      { title: "Pengajuan API & registrasi pabean", desc: "API diaktifkan di OSS-RBA, nomor registrasi bea cukai disiapkan — dokumen atas nama perusahaan Anda." },
      { title: "Panduan operasional pertama", desc: "Alur PIB/PEB, biaya pabean, dan dokumen apa yang diminta supplier — Anda jalan sendiri setelahnya dengan penuh percaya." },
    ],
    requirements: [
      "Badan usaha berdiri (PT/CV/dll) dengan NIB aktif — bila belum, mulai dari paket pendirian + NIB",
      "NPWP badan",
      "Rincian barang yang akan diimpor/diekspor (jenis, fungsi — untuk pemetaan HS Code)",
      "Model bisnis: jual kembali (trader) atau bahan produksi (produsen)",
      "Kontak personel yang akan mengelola pengurusan dokumen (bagian logistik/purchasing)",
    ],
    faqs: [
      { q: "NIB saya sudah ada — apakah otomatis bisa impor?", a: "Belum tentu. NIB memang berlaku sebagai nomor registrasi bea cukai, tetapi pengajuan impor tetap membutuhkan API sesuai izin berusaha kegiatan impor yang tercantum di OSS. Banyak NIB lama tidak memuat kegiatan impor sama sekali — PIB tidak bisa dibuat. Kami cek dulu profil NIB & izin berusaha Anda di OSS, lalu tambahkan kegiatan yang kurang. Sering kali ini hanya perkara 1–3 hari kerja." },
      { q: "Bisnis online kecil, sebaiknya impor sendiri atau lewat jasa titip/importir umum?", a: "Tergantung volume dan margin. Impor sendiri membutuhkan API + kesiapan administrasi, tetapi membuka margin penuh dan kontrol kualitas; untuk volume kecil dan berkala, undername bisa jadi opsi sementara. Aturan praktis kami: bila nilai impor tahunan sudah di atas ratusan juta rupiah, legalitas sendiri terbayang cepat — dan status importir resmi juga membuka akses supplier besar yang tidak mau bertransaksi dengan perantara." },
      { q: "Barang saya kena lartas — apa yang harus disiapkan?", a: "Lartas (batasan larangan) berarti barang Anda butuh izin/rekomendasi tambahan dari kementerian terkait sebelum/bersamaan pemberitahuan pabean — contoh: izin edar BPOM untuk makanan-minuman, SNI untuk produk tertentu, rekomendasi dari Kementerian untuk barang tertentu. Dari HS Code yang kami petakan, daftar lartas ini teridentifikasi sejak awal dan bisa diurus paralel — supaya saat barang tiba, dokumen sudah siap dan tidak menunggak di pelabuhan menanggung biaya penimbunan." },
    ],
    related: ["nib-oss", "izin-distribusi", "bpom"],
  },
  {
    slug: "izin-distribusi",
    tagline: "Barang Anda beredar legal — dari gudang sampai ke seluruh Indonesia.",
    heroSub:
      "Izin usaha distribusi, penjualan langsung, dan fasilitas pemasaran (termasuk gudang/Warsek) — fondasi legal bagi produsen dan distributor barang di seluruh wilayah Indonesia.",
    timeline: "1–3 minggu hingga izin aktif",
    intro: [
      "Produk yang bagus tetap bermasalah bila jalur edarnya tidak legal. Regulasi perdagangan (PP 29/2021) menuntut kegiatan penyaluran barang dijalankan dengan izin berusaha yang sesuai — izin distribusi untuk perusahaan yang menyalurkan barang dari/atas nama produsen ke agen, reseller, dan pengecer, serta fasilitas pemasaran untuk produsen yang membangun jaringan penjualan sendiri, termasuk penguasaan gudang (dulu dikenal Warsek — Warung Serba Ekonomi) sebagai infrastruktur penyaluran di daerah.",
      "Tanpa izin ini, risikonya nyata: kerja sama dengan retail modern dan principal sering menyaring legalitas saat vendor onboarding, transaksi antar-perusahaan membutuhkan dokumen izin sebagai kelengkapan faktur, dan pengawasan perdagangan daerah dapat menandai perusahaan yang menyalurkan barang skala besar tanpa izin. Ditambah kebutuhan yang sering terlupa: surat jalan, wajib lapor distribusi, dan konsistensi KBLI dengan kegiatan yang dijalankan.",
      "Kami bantu menentukan struktur yang tepat — apakah usaha Anda butuh izin distribusi penuh, cukup fasilitas pemasaran, atau kombinasi dengan kegiatan lain — lalu urus dari konfigurasi KBLI di OSS, pengajuan izin, persiapan dokumen gudang & surat jalan, sampai kewajiban pelaporan berjalanannya. Produsen yang baru mulai membangun jaringan agen pun kami dampingi: struktur harga distributor, perjanjian kerja sama, dan legalitas jaringannya sekaligus.",
    ],
    benefits: [
      { title: "Lolos vendor onboarding retail", desc: "Legalitas distribusi lengkap — Tokopedia, ritel modern, dan principal menerima dokumen Anda tanpa kendala." },
      { title: "Gudang & jaringan sah", desc: "Penguasaan gudang dan jaringan penjualan legal — pengawasan daerah tidak menemukan kegiatan tak berizin." },
      { title: "Struktur yang tepat", desc: "Distribusi, penjualan langsung, atau fasilitas pemasaran dipilih sesuai model bisnis — tidak salah bayar dan salah jalur." },
      { title: "Kewajiban terkelola", desc: "Surat jalan, wajib lapor, dan konsistensi KBLI — kepatuhan berjalan otomatis tanpa risiko denda di kemudian hari." },
      { title: "Siap ekspansi daerah", desc: "Ingin bukan cabang per cabang? Struktur izin yang benar membuat penyaluran lintas provinsi mulus." },
    ],
    process: [
      { title: "Pemetaan model penyaluran", desc: "Bagaimana barang mengalir dari pabrik/agen ke konsumen — ditetapkan izin yang dibutuhkan (distribusi, penjualan langsung, fasilitas pemasaran)." },
      { title: "Konfigurasi KBLI & pengajuan OSS", desc: "Kegiatan usaha disesuaikan di OSS-RBA, izin diajukan — dokumen atas nama perusahaan dengan KBLI yang konsisten." },
      { title: "Kelengkapan operasional", desc: "Dokumen gudang, surat jalan, dan format wajib lapor disiapkan — alur kerja tim logistik Anda langsung sesuai aturan." },
      { title: "Pendampingan berjalan", desc: "Sertifikat terbit plus panduan kepatuhan — bila ekspansi ke wilayah/jaringan baru, strukturnya tinggal diperluas." },
    ],
    requirements: [
      "Badan usaha berdiri (PT/CV) — untuk distributor sering diminta PT oleh principal besar",
      "NIB aktif & kegiatan usaha terkait perdagangan (kami sesuaikan bila belum)",
      "Data gudang/lokasi penyimpanan (alamat, status — sewa pun bisa)",
      "Kategori & jenis barang yang didistribusikan (produk tertentu punya izin lartas tambahan)",
      "Model penyaluran: langsung ke konsumen, lewat agen/reseller, atau kombinasi",
    ],
    faqs: [
      { q: "Saya produsen, barangnya saya jual sendiri ke toko-toko — butuh izin distribusi juga?", a: "Prinsipnya: produsen yang menjual hasil produksinya sendiri berada di bawah izin kegiatan produksinya, dengan kemungkinan menambah fasilitas pemasaran untuk jaringan penjualan & gudangnya. Izin distribusi penuh diperlukan bila Anda juga menyalurkan barang dari pihak lain. Praktisnya banyak produsen berkembang ke dua-duanya — dan justru itu yang perlu disusun benar di KBLI dan izinnya sejak awal. Konsultasi kami memetakan ini dulu sebelum mengajukan apa pun." },
      { q: "Toko online yang kirim barang sendiri di seluruh Indonesia — masuk kategori ini?", a: "Kegiatan e-commerce punya jalurnya sendiri (perdagangan melalui sistem elektronik). Namun begitu Anda menaruh stok di beberapa titik, memakai gudang di daerah lain, atau mengirim dalam volume bisnis-bisnis, kombinasi dengan izin distribusi/penjualan langsung perlu dievaluasi. Pemetaan ini penting supaya saat berkembang dari toko online ke jaringan reseller, legalitas Anda tidak ketinggalan dari skala operasinya." },
      { q: "Apa itu Warsek dan apakah saya wajib memilikinya?", a: "Warsek (Warung Serba Ekonomi) adalah fasilitas penguasaan gudang/infrastruktur penyaluran yang didaftarkan ke Kementerian Perdagangan — dulu menjadi prasyarat penting bagi distributor besar dan produsen dengan jaringan luas. Pasca-PP 29/2021 mekanismenya bergeser ke rezim perizinan berusaha. Apakah usaha Anda butuh: tergantung skala penyaluran dan kebijakan principal/brand yang Anda jalankan — banyak kontrak distribusi besar masih memintanya. Kami cek kebutuhan spesifik bisnis Anda saat konsultasi gratis." },
    ],
    related: ["api-bea-cukai", "nib-oss", "pendirian-pt"],
  },
];
