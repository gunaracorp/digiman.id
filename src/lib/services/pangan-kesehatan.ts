import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — PANGAN, KESEHATAN & FARMA (10 layanan).
 * CPOTB, AKL/AKD, label gizi, apotek & PBF, HACCP/GMP, pangan organik,
 * izin fasyankes, P2K3, pengujian laboratorium, audit klaim & iklan.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const panganKesehatanContent: ServiceContent[] = [
  {
    slug: "cpotb-obat-tradisional",
    tagline: "Pabrik yang laik di mata BPOM, produk yang berani beredar.",
    heroSub:
      "Sertifikat CPOTB dari BPOM memastikan fasilitas, SOP, dan validasi produksi obat tradisional serta suplemen kesehatan Anda memenuhi standar. Untuk produsen yang serius mendaftarkan izin edar — dari gap analysis sampai pendampingan inspeksi.",
    timeline: "2–4 bulan tergantung kesiapan fasilitas",
    intro: [
      "Tidak ada obat tradisional atau suplemen kesehatan yang boleh diproduksi untuk dipasarkan di Indonesia sebelum fasilitasnya lolos pemeriksaan Cara Produksi Obat Tradisional yang Baik — itulah CPOTB, sertifikat yang diterbitkan BPOM setelah inspeksi langsung ke pabrik Anda. Dasar hukumnya berlapis: UU 17/2023 tentang Kesehatan dan PP 28/2024 menegaskan kewajiban produksi farmasi yang laik, sedangkan teknis pemeriksaannya diatur Peraturan BPOM tentang penerbitan sertifikat CPOTB. CPOTB bukan dokumen pajangan: tanpa sertifikat ini, pendaftaran izin edar produk (nomor MD untuk obat tradisional maupun suplemen) tidak bisa jalan — artinya seluruh investasi produk Anda berhenti di depan pintu.",
      "Fakta di lapangan: banyak pabrik kecil dan menengah gagal di inspeksi pertama, dan penyebabnya hampir selalu sama. Aliran zona produksi tidak terpisah (bahan kotor dan bersih bersilangan di satu lorong), air produksi tidak diuji kualitasnya, validasi proses tidak punya bukti, SOP tersusun rapi di rak tapi tidak hidup di lantai produksi, personel kunci tidak punya kualifikasi dan pelatihan terdokumentasi, atau batch record produksi terisi setengah hati. Inspeksi yang gagal bukan hanya menunda sertifikat — biaya re-inspeksi, perbaikan ulang, dan jadwal peluncuran produk yang mundur semuanya menumpuk di satu titik.",
      "Kami menyiapkan pabrik Anda laik sebelum inspektur datang. Semuanya berawal dari gap analysis seluruh area terhadap kriteria CPOTB, lalu penyusunan dokumen — SOP produksi, QC, QA, validasi, batch record, sampai kualifikasi personel. Perbaikan fasilitas kami urutkan berdasarkan prioritas dengan perkiraan biaya, sementara pengujian lab pendukung kami koordinasikan ke laboratorium yang tepat. Sebelum hari-H, tim produksi Anda melewati simulasi inspeksi penuh, lalu kami dampingi saat inspeksi BPOM berjalan — dan setelah sertifikat terbit, panduan pemeliharaan memastikan kelaikan itu tetap terjaga di setiap produksi berikutnya.",
    ],
    benefits: [
      { title: "Lolos inspeksi, bukan percobaan", desc: "Simulasi inspeksi dan audit pra-BPOM menutup celah sebelum inspektur menemukannya — re-inspeksi yang mahal dan menunda tidak perlu terjadi." },
      { title: "Jalan ke izin edar terbuka", desc: "CPOTB adalah prasyarat pendaftaran nomor MD — begitu sertifikat terbit, produk Anda bisa langsung bergerak ke BPOM." },
      { title: "Fasilitas menjadi aset", desc: "Perbaikan yang kami pandu berbasis kriteria resmi — investasi renovasi tepat sasaran, bukan belanja dekorasi yang ditolak inspektur." },
      { title: "Dokumen yang hidup", desc: "SOP, validasi, dan batch record disusun sesuai kondisi produksi nyata — tim Anda mampu menjalankannya, bukan sekadar menghafalnya saat audit." },
      { title: "Tim produksi terlatih", desc: "Pelatihan internal menyertai penyusunan dokumen — kelaikan pabrik bertahan setelah kami pergi, bukan berhenti di hari terbit sertifikat." },
    ],
    process: [
      { title: "Gap analysis fasilitas", desc: "Seluruh area, aliran bahan, dan dokumen diperiksa terhadap kriteria CPOTB — daftar temuan diprioritaskan dengan perkiraan biaya perbaikan." },
      { title: "Penyusunan dokumen & perbaikan", desc: "SOP, validasi proses, kualifikasi personel, dan batch record disusun bersama tim Anda — perbaikan fasilitas dieksekusi sesuai prioritas." },
      { title: "Simulasi inspeksi", desc: "Audit internal dengan skenario inspektur — temuan terakhir ditutup, tim produksi berlatih menjawab pertanyaan yang benar-benar datang." },
      { title: "Inspeksi BPOM & pasca-terbit", desc: "Pendampingan penuh hari inspeksi, penindaklanjutan temuan bila ada, sertifikat terbit — dilanjut panduan pemeliharaan dan siap masuk jalur izin edar." },
    ],
    requirements: [
      "Data perusahaan & pabrik: NIB, izin industri, alamat lokasi produksi, dan status kepemilikan",
      "Denah fasilitas produksi dan daftar alat utama (bila belum ada, kami pandu pembuatannya)",
      "Rencana produk yang akan diproduksi: jenis obat tradisional atau suplemen, bentuk sediaan, kapasitas",
      "Struktur tim produksi & personel kunci (pengelola produksi, QC, QA) beserta latar pendidikannya",
      "Status kesiapan bangunan — pabrik beroperasi, sedang dibangun, atau masih rencana (menentukan strategi kami)",
    ],
    faqs: [
      { q: "Berapa biaya persiapan CPOTB dan apa saja posnya?", a: "Biaya terbagi tiga: jasa pendampingan DIGIMAN.ID (mulai Rp 15 juta, tertulis penuh di penawaran), biaya resmi inspeksi & sertifikat BPOM, dan biaya perbaikan fasilitas di sisi Anda — pos terakhir ini paling bervariasi karena tergantung kondisi awal pabrik. Dari pengalaman kami, pabrik yang baru selesai dibangun biasanya butuh perbaikan jauh lebih ringan daripada pabrik lama yang diadaptasi. Saat konsultasi gratis, kami berikan estimasi ketiga pos berdasarkan kondisi riil fasilitas Anda — bukan angka teori." },
      { q: "Berapa lama sampai sertifikat CPOTB terbit?", a: "Rata-rata 2–4 bulan dari mulai persiapan: gap analysis dan penyusunan dokumen sekitar 4–8 minggu, perbaikan fasilitas menyesuaikan prioritasnya, lalu antrean inspeksi BPOM sekitar 3–6 minggu setelah pengajuan lengkap. Faktor paling menentukan bukan antreannya, tapi kesiapan fasilitas saat inspektur datang — satu inspeksi yang lolos jauh lebih cepat daripada dua inspeksi yang gagal. Untuk jadwal peluncuran produk, sebaiknya rencanakan CPOTB selesai dulu sebelum target pendaftaran izin edar." },
      { q: "Apakah pabrik saya yang kecil dan baru berdiri mampu memenuhi standar CPOTB?", a: "Mampu, karena kriteria CPOTB memang dirancang untuk diterapkan pabrik obat tradisional dan suplemen dari skala kecil ke atas — yang dinilai adalah kesesuaian sistem, bukan kemewahan gedung. Yang membuat banyak pabrik kecil gagal justru kesiapan yang salah arah: dana habis untuk tampilan sementara dokumen dan validasinya kosong. Kami menempatkan prioritas pada yang benar-benar diperiksa — aliran bahan, kebersihan zona, dokumentasi, kompetensi personel — agar modal terbatas Anda terpakai di titik yang menentukan." },
    ],
    related: ["bpom", "haccp-gmp-pangan", "laboratorium-uji-produk", "sertifikasi-halal"],
  },
  {
    slug: "akl-alat-kesehatan",
    tagline: "Alat kesehatan Anda beredar dengan nama yang sah di depan Kemenkes.",
    heroSub:
      "Izin edar AKL/AKD dari Kemenkes — dari klasifikasi risiko kelas A sampai D, dokumen teknis, sampai sertifikat terbit. Untuk produsen dan importir alat kesehatan yang tidak mau produknya disita di tengah jalur distribusi.",
    timeline: "3–6 minggu (AKD kelas A) · 2–3 bulan (AKL kelas B–D dengan pengujian)",
    intro: [
      "Banyak pengusaha terkejut mengetahui bahwa izin edar alat kesehatan BUKAN wilayah BPOM — pengawasannya di tangan Kemenkes, lewat AKL (izin edar alat kesehatan) dan AKD (izin edar alat kesehatan diagnostik in vitro). Setiap alat diklasifikasikan berdasarkan risiko dari kelas A (rendah, misalnya gelang identitas pasien) sampai kelas D (tinggi, misalnya stent dan pacu jantung), dan tinggi rendahnya kelas menentukan kedalaman dokumen teknis serta durasi prosesnya. Dasar hukumnya: UU 17/2023 tentang Kesehatan, PP 28/2024, dan Permenkes 62/2017 beserta keturunannya — dengan kabar baik pasca-UU Kesehatan baru: izin edar kini berlaku selama produk masih diproduksi dan tidak berubah signifikan, bukan lagi periode pendek yang harus diperpanjang terus.",
      "Distribusi alat kesehatan tanpa AKL/AKD adalah pelanggaran berat: produk bisa disita, ditolak di lelang Kemenkes dan rumah sakit, dan pelaku usahanya menghadapi sanksi pengawasan. Kesalahan yang paling sering makan waktu: salah mengira semua alat cukup notifikasi cepat (padahal kelas tertentu menuntut pengujian dan penilaian penuh), dokumen teknis tidak lengkap — ISO 13485, test report, FSC/CFS untuk produk impor yang usianya dihitung ketat — serta kebingungan peran: produsen, importir, dan distributor punya jalur dan syarat berbeda, dan salah susun peran membuat pengajuan bolak-balik ditolak. Untuk produk impor, keterlambatan satu dokumen dari pabrikan luar negeri bisa menunda satu bulan penuh.",
      "Kami memetakan semuanya di awal, sebelum satu pun dokumen disusun. Kelas risiko ditentukan dari katalog klasifikasi resmi — bukan tebakan — dan peran Anda dalam rantai distribusi dipastikan sekalian. Daftar dokumen teknis lengkap per kelas kami susun, pengujian ke laboratorium yang hasilnya diterima Kemenkes kami koordinasikan, lalu pengajuan berjalan di sistem elektronik Kemenkes dengan pemantauan tanggapan dan perbaikan dokumen sampai selesai. Setelah sertifikat terbit, Anda menerima panduan perubahan signifikan: kapan harus memutakhirkan data, dan bagaimana memperluas ke varian atau distributor baru tanpa mengguncang izin yang sudah ada.",
    ],
    benefits: [
      { title: "Klasifikasi benar sejak hari pertama", desc: "Kelas risiko dipastikan sebelum dokumen disusun — tidak ada pengajuan yang dibangun di atas jalur yang salah." },
      { title: "Produk lolos lelang & tender", desc: "AKL/AKD adalah tiket masuk rumah sakit, klinik, dan pengadaan pemerintah — peluang pasar besar terbuka legal." },
      { title: "Distribusi tanpa risiko sita", desc: "Produk beredar dengan dokumen lengkap — pengawasan Kemenkes dan penyekatan distributor tidak lagi jadi kekhawatiran." },
      { title: "Dokumen impor terkendali", desc: "Daftar dokumen dari pabrikan luar negeri disiapkan sejak awal dengan ketentuan masa berlaku — tidak ada kejutan menunggu yang membuang bulan." },
      { title: "Izin awet tanpa drama", desc: "Pasca-UU Kesehatan, izin edar berlaku selama produk tetap diproduksi — kami beri panduan mutakhirkan data agar statusnya tidak tergelincir." },
    ],
    process: [
      { title: "Klasifikasi & pemetaan peran", desc: "Kelas risiko A–D ditetapkan dari katalog resmi — peran produsen/importir/distributor dan jalurnya dipastikan sebelum dokumen disusun." },
      { title: "Dokumen teknis & pengujian", desc: "Berkas teknis disiapkan lengkap per kelas — bila kelas menuntut pengujian, koordinasi ke laboratorium terakreditasi kami atur." },
      { title: "Pengajuan ke Kemenkes", desc: "Pengajuan berjalan di sistem elektronik Kemenkes — tanggapan dan permintaan perbaikan kami kerjakan cepat agar antrean tidak mundur." },
      { title: "Sertifikat & panduan lanjutan", desc: "AKL/AKD terbit dan diserahkan dengan panduan pemutakhiran data, perluasan varian, dan kewajiban pasca-terbit." },
    ],
    requirements: [
      "NIB & KBLI yang mencakup industri/distribusi alat kesehatan (kami cek dan rapikan bila belum cocok)",
      "Data produk: nama, fungsi, kategori, foto/katalog, dan materi dari pabrikan (specification, IFU/manual penggunaan)",
      "Untuk impor: FSC/CFS dari negara asal, ISO 13485 pabrikan, LOA/test report — kami pandu daftar lengkapnya",
      "Bukti jaminan produk sesuai peran usaha Anda",
      "Komposisi kemasan & label untuk direview kesesuaiannya sebelum cetak",
    ],
    faqs: [
      { q: "Apa bedanya AKL, AKD, dan notifikasi — dan mana yang saya butuhkan?", a: "AKL adalah izin edar untuk alat kesehatan umum, AKD untuk alat kesehatan diagnostik in vitro (misalnya kit reagen tes), dan keduanya terbit Kemenkes — bukan BPOM. Jalur notifikasi/pencatatan hanya untuk alat risiko rendah kelas A: prosesnya jauh lebih cepat dan murah. Penentuannya adalah klasifikasi risiko alat Anda, bukan pilihan — dan salah mengira alat kelas A padahal B adalah salah satu penyebab pengajuan ditolak paling sering. Kami pastikan klasifikasinya benar di hari pertama, karena semua dokumen bergantung padanya." },
      { q: "Berapa biaya izin edar alat kesehatan?", a: "Jasa pendampingan kami mulai Rp 7,5 juta tergantung kelas risiko dan kelengkapan dokumen dari pabrikan — seluruhnya tertulis di penawaran. Biaya resmi Kemenkes relatif ringan, tetapi untuk kelas B–D biasanya muncul pos pengujian lab dan pembelian sampel, serta biaya dokumen impor (legalisasi, terjemahan tersumpah) untuk produk luar negeri. Saat konsultasi, kami petakan semua pos ini sejak awal agar anggaran Anda tidak kaget di tengah jalan." },
      { q: "Apa risikonya kalau alat kesehatan dijual tanpa AKL/AKD?", a: "Risikonya nyata dan cepat datang: produk dapat disita dan dimusnahkan dalam pengawasan, distributor dan marketplace menolaknya, dan alat tidak bisa masuk lelang Kemenkes, rumah sakit, atau klinik — pasar terbesar alat kesehatan justru tertutup. Pelaku usahanya bisa dikenai sanksi administratif sampai pidana sesuai regulasi kesehatan. Yang sering menyengat lebih dulu bukan sanksinya, tapi kompetitor berdokumen lengkap yang menang tender — sementara produk Anda berhenti di gudang." },
    ],
    related: ["izin-klinik-praktik", "bpom", "sni", "izin-distribusi"],
  },
  {
    slug: "label-gizi",
    tagline: "Cetak label setelah diperiksa, bukan setelah penyesalan.",
    heroSub:
      "Review menyeluruh Informasi Nilai Gizi, klaim, dan seluruh elemen kemasan terhadap peraturan BPOM — sebelum desain dikirim ke percetakan. Untuk produsen pangan yang tidak mau produknya ditarik karena satu baris label.",
    timeline: "5–10 hari kerja per varian produk",
    intro: [
      "Label bukan urusan desain — ia kewajiban hukum yang dibaca pengawas lebih teliti daripada konsumen. Untuk pangan olahan, peraturan BPOM tentang label pangan mewajibkan sejumlah elemen lengkap dan benar: nama jenis pangan, daftar komposisi berurutan dari bahan terbanyak, Informasi Nilai Gizi (ING) dengan persentase AKG, tanggal kedaluwarsa, identitas produsen, tanda edar BPOM, logo halal, sampai kode produksi. Payung hukumnya jelas: UU 18/2012 tentang Pangan dan PP 86/2019 tentang Keamanan Pangan menempatkan informasi pangan yang benar sebagai bagian dari perlindungan konsumen — dan label yang salah membuat produk laik diproduksi menjadi produk yang ditarik.",
      "Kesalahan label jarang terlihat oleh mata pembisnis, selalu terlihat oleh mata pengawas. ING yang tidak sesuai hasil uji laboratorium, klaim gizi seperti rendah gula atau tanpa lemak yang kriterianya sebenarnya tidak terpenuhi, ukuran dan ketebalan huruf yang tidak sesuai ketentuan, daftar komposisi yang menyembunyikan nama golongan bahan, logo halal dan tanda edar yang posisinya salah, sampai klaim fungsional yang masuk wilayah terlarang — semuanya alasan produk ditarik dari peredaran atau dihentikan produksinya. Biayanya brutal: satu batch yang sudah tercetak dan terisi harus dimusnahkan, bukan dicoret ulang, dan penarikan dari pasar menelan biaya logistik plus nama baik.",
      "Kami bekerja sebelum cetak, dan urutannya menentukan hasilnya. Resep dan komposisi Anda dianalisis lebih dulu, lalu klaim yang ingin dipasang dicek terhadap kriteria resmi — mana yang boleh, mana yang boleh dengan syarat, dan mana yang mesti dihapus. ING disusun dari data resep dan divalidasi dengan hasil uji lab bila diperlukan, kemudian desain kemasan dikoreksi dengan anotasi per elemen: persis di mana dan bagaimana harus berubah. Hasil akhirnya adalah berkas label yang bisa Anda serahkan ke desainer dan percetakan dengan tenang, karena seluruh isinya sudah dicek terhadap regulasi yang berlaku hari ini.",
    ],
    benefits: [
      { title: "Produksi tidak membakar uang", desc: "Koreksi terjadi sebelum cetak — satu kali revisi desain jauh lebih murah daripada satu batch kemasan yang dimusnahkan." },
      { title: "Klaim yang tahan pemeriksaan", desc: "Setiap klaim gizi dan klaim fungsi dicek ke kriteria resmi — kompetitor atau pengawas tidak menemukan bahan serangan." },
      { title: "ING yang benar dari data riil", desc: "Informasi Nilai Gizi disusun dari resep dan divalidasi uji lab — tidak ada angka yang goyah saat diperiksa." },
      { title: "Desainer Anda tidak menebak", desc: "Anotasi per elemen kemasan membuat tim desain tahu persis apa yang harus berubah — revisi selesai cepat dan tepat." },
      { title: "Siap gabung izin edar", desc: "Berkas label yang sudah benar mempercepat pendaftaran izin edar BPOM — dokumen tidak bolak-balik karena cacat label." },
    ],
    process: [
      { title: "Analisis resep & komposisi", desc: "Resep, bahan, dan fungsi aditif diperiksa — komposisi disusun sesuai urutan dan penamaan yang diwajibkan regulasi." },
      { title: "Pemeriksaan klaim & ING", desc: "Klaim yang Anda inginkan diuji ke kriterianya; ING disusun dari data resep dan diarahkan ke pengujian lab bila butuh bukti." },
      { title: "Koreksi desain kemasan", desc: "Desain dikoreksi dengan anotasi per elemen — teks, ukuran, posisi tanda edar, halal, kedaluwarsa, dan kode produksi." },
      { title: "Verifikasi akhir & berkas siap cetak", desc: "Desain final diperiksa ulang menyeluruh, berkas label diserahkan — siap dicetak dan siap dilampirkan ke pengajuan izin edar." },
    ],
    requirements: [
      "Resep/formulasi lengkap per varian: semua bahan, takaran, dan perannya (bahan pengawet, pewarna, pemanis)",
      "Mock-up atau desain kemasan terbaru (file desain apa pun — kami kerjakan dari situ)",
      "Hasil uji lab produk bila sudah ada (bila belum, kami petakan parameter yang perlu diuji)",
      "Daftar klaim yang ingin dicantumkan: gizi, fungsi, perbandingan, atau klaim lain yang sedang dipertimbangkan",
      "Status perizinan produk: sudah punya tanda edar MD, sedang mendaftar, atau masih rencana",
    ],
    faqs: [
      { q: "Berapa biaya review label dan apakah uji lab sudah termasuk?", a: "Jasa review label kami mulai Rp 3,5 juta per rangkaian varian — mencakup analisis komposisi, pemeriksaan klaim, dan koreksi desain beranotasi. Pengujian lab biasanya pos terpisah: untuk produk yang belum punya data gizi teruji, pengujian proksimat (energi, protein, lemak, karbohidrat, gula, natrium) adalah investasi yang menopang ING Anda. Kami hitung dulu parameter minimum yang benar-benar wajib — banyak produsen menguji kelebihan parameter dan membayar untuk hasil yang tidak mereka perlukan." },
      { q: "Produk saya hanya dijual online skala kecil — apakah label tetap wajib sesuai peraturan?", a: "Ya, kewajiban informasi pangan berlaku untuk pangan olahan yang diperjualbelikan, tidak melihat skala atau kanal penjualan — marketplace dan pengawasan daring kini memeriksa produk sama seperti toko fisik. Yang berbeda adalah konteks sanksinya: produk kecil yang viral justru paling cepat tergepak karena pengawasan mengikuti volume penjualan, bukan ukuran pabrik. Menata label sejak kecil jauh lebih murah daripada mengganti kemasan ketika produk sudah dikenal pasar dengan tampilan lama." },
      { q: "Klaim seperti tanpa MSG atau rendah gula boleh dipakai bebas?", a: "Tidak bebas — setiap klaim gizi punya kriteria kuantitatif yang harus terpenuhi dan terbukti. Klaim rendah gula, misalnya, menuntut batas kandungan tertentu per sajian yang harus didukung data uji; klaim tanpa MSG menuntut benar-benar tidak ada MSG termasuk dari bahan terolah seperti ekstrak ragi yang implisitnya mengandung glutamat. Memasang klaim tanpa kriteria terpenuhi bukan sekadar kesalahan kecil: itu alasan penarikan produk dan pelanggaran perlindungan konsumen. Kami bantu memilih klaim yang sah untuk resep Anda — biasanya ada klaim yang lebih lemah namun aman, yang tetap menjual." },
    ],
    related: ["bpom", "higiene-sanitasi", "sertifikasi-halal", "audit-klaim-iklan-kesehatan"],
  },
  {
    slug: "izin-apotek-pbf",
    tagline: "Farmasis yang benar, sarana yang laik, izin yang terbit.",
    heroSub:
      "Perizinan lengkap sarana farmasi — apotek, PBF, sampai cabangnya — dengan penanggung jawab farmasis dan standar sarana yang benar dari awal. Untuk pelaku usaha farmasi yang tidak mau izinnya bermasalah di bulan-bulan pengawasan.",
    timeline: "3–8 minggu tergantung kesiapan sarana dan farmasis",
    intro: [
      "Membuka apotek atau Pedagang Besar Farmasi (PBF) adalah salah satu izin usaha dengan rantai prasyarat terpanjang di sektor kesehatan: badan usaha yang KBLI-nya cocok, farmasis yang memegang STR dan diangkat sebagai penanggung jawab, sarana prasarana yang memenuhi standar pelayanan kefarmasian, SOP penyimpanan dan distribusi obat, sampai ruangan dengan spesifikasi tertentu. Pasca UU 17/2023 dan PP 28/2024, izin usaha sektor kesehatan berjalan melalui OSS dengan komitmen pemenuhan standar yang diverifikasi Dinkes — artinya kesiapan sarana bukan formalitas, karena pemeriksaan fisik tetap datang. Untuk PBF, pengawasan distribusi obat bahkan berlapis antara Dinkes dan BPOM sesuai skala dan cakupannya.",
      "Kesalahan yang membuat izin farmasi macet hampir selalu di luar dokumen. Sarana disewa dan dirapikan setelah pengajuan — padahal denah dan spesifikasi ruang harus laik sejak awal; farmasis diangkat setengah hati — padahal PBF menuntut penanggung jawab yang benar-benar mengawasi distribusi, bukan nama yang menempel di surat; SOP disalin dari internet tanpa menyesuaikan kondisi toko atau gudang; dan penyimpanan obat tidak memenuhi ketentuan — obat rusak tidak dikarantina, suhu tidak dicatat, obat tertentu tersimpan sembarangan. Inspeksi yang menemukan hal-hal ini menunda izin berbulan-bulan, dan izin yang sudah terbit pun bisa dicabut bila kondisi berjalan menyimpang dari komitmen.",
      "Kami mengurusi seluruh rantainya dari ujung ke ujung. Jenis izin yang benar dipetakan dari model usaha Anda — apotek, PBF, cabang, atau kombinasinya — lalu sarana disiapkan berdasarkan standar yang benar-benar diperiksa. Kualifikasi farmasis diurus dari STR sampai surat penunjukan, SOP disusun sesuai kondisi operasional, dan pengajuan berjalan di OSS dan Dinkes hingga inspeksi fisik didampingi penuh. Setelah izin terbit, pembinaan lanjutan memastikan Anda lolos pengawasan berkala — karena di sektor farmasi, izin yang terbit di awal hanya setengah pekerjaan, dan kepatuhan berjalan adalah separuh sisanya.",
    ],
    benefits: [
      { title: "Jenis izin yang benar sejak awal", desc: "Apotek, PBF, atau kombinasi dipetakan dari model usaha Anda — tidak ada pengajuan yang dibangun di atas izin yang keliru." },
      { title: "Farmasis yang sah dan berfungsi", desc: "Penanggung jawab farmasis diurus dari STR sampai penunjukan formal — fondasi keabsahan yang tidak bisa ditawar pengawasan." },
      { title: "Sarana lolos pemeriksaan fisik", desc: "Penyiapan berbasis standar yang benar-benar diperiksa — denah, penyimpanan, dan peralatan laik sejak kunjungan pertama." },
      { title: "SOP sesuai kondisi riil", desc: "SOP disusun dari cara kerja Anda, bukan salinan asing — staf menjalankannya, inspektur menyetujuinya." },
      { title: "Aman di pengawasan berkala", desc: "Pembinaan pasca-terbit menjaga kepatuhan berjalan — izin yang terbit tidak goncang saat Dinkes atau BPOM datang." },
    ],
    process: [
      { title: "Pemetaan izin & model usaha", desc: "Jenis sarana farmasi, cakupan kegiatan, dan lokasi dipetakan — daftar prasyarat dan urutan pengurusan tersusun." },
      { title: "Sarana, farmasis, dan SOP", desc: "Penyiapan ruang dan peralatan dipandu per standar, farmasis diurus kualifikasinya, SOP disusun sesuai operasional Anda." },
      { title: "Pengajuan izin", desc: "Pengajuan berjalan di OSS dan Dinkes sesuai jalur yang berlaku — dokumen, verifikasi komitmen, dan administrasi kami bawa." },
      { title: "Inspeksi & pembinaan pasca-terbit", desc: "Pemeriksaan fisik didampingi penuh, izin terbit, dan panduan kepatuhan berjalan diterima — siap menghadapi pengawasan berkala." },
    ],
    requirements: [
      "Badan usaha ber-NIB dengan KBLI yang sesuai (kami cek dan bantu rapikan bila belum cocok)",
      "Data farmasis yang akan menjadi penanggung jawab (atau rencana rekrutmen — kami bantu jalur kualifikasinya)",
      "Denah lokasi usaha dan rencana tata ruang apotek/gudang PBF",
      "Rencana cakupan usaha: jenis obat dan produk yang akan ditangani (termasuk obat keras, psikotropika bila ada)",
      "Kesediaan menyiapkan sarana sesuai standar — prioritas perbaikan kami petakan dengan biaya yang realistis",
    ],
    faqs: [
      { q: "Berapa biaya mendirikan apotek atau PBF dengan pendampingan DIGIMAN.ID?", a: "Jasa pendampingan kami mulai Rp 10 juta tergantung jenis izin dan kondisi sarana — apotek tunggal berbeda kebutuhan dari PBF dengan gudang besar atau jaringan cabang. Di luar jasa, pos terbesar ada di sisi Anda: penyiapan sarana dan biaya farmasis (gaji atau perjanjian penanggung jawab), plus biaya resmi yang relatif ringan. Saat konsultasi gratis, kami uraikan seluruh pos ini dengan estimasi realistis sesuai lokasi dan model usaha Anda — sehingga keputusan bisnisnya bisa diambil dengan angka yang jujur." },
      { q: "Apakah farmasis bisa dipakai paruh waktu untuk apotek saya?", a: "Untuk apotek, penanggung jawab farmasis dituntut hadir menjalankan fungsinya selama pelayanan berlangsung — praktik farmasis melayani banyak apotek sekaligus di atas kertas sudah lama menjadi sasaran pembinaan dan bisa membuat izin bermasalah saat pemeriksaan. Kepatuhannya bukan hanya soal surat penunjukan, tapi soal pelayanan yang benar-benar dijalankan: resep diperiksa farmasis, konseling berjalan, catatan terarsip. Kami bantu menyusun struktur penanggung jawab yang sah dan realistis — termasuk jalur merekrut farmasis yang tepat bila Anda belum punya." },
      { q: "Apa risiko kalau apotek atau PBF beroperasi tanpa izin yang lengkap?", a: "Risikonya berlapis: operasional tanpa izin adalah pelanggaran yang bisa dihentikan sewaktu-waktu oleh pengawasan, obat yang dijual dari sarana tidak berizin berstatus distribusi ilegal di mata hukum, dan dalam kasus PBF, seluruh rantai pasok ke bawah (apotek, klinik, rumah sakit) ikut tertular masalahnya karena sumber distribusinya tidak sah. Di luar sanksi, ada kerugian bisnis yang lebih cepat terasa: kontrak kerja sama dengan klinik dan lembaga menuntut dokumen izin yang valid. Menata izin sejak awal jauh lebih murah daripada memulihkan operasional yang dihentikan di tengah jalan." },
    ],
    related: ["izin-klinik-praktik", "izin-distribusi", "izin-sektor-ss", "virtual-office"],
  },
  {
    slug: "haccp-gmp-pangan",
    tagline: "Sistem keamanan pangan yang membuat pembeli besar percaya.",
    heroSub:
      "Penerapan dan sertifikasi HACCP/GMP untuk industri pangan — dari analisis bahaya sampai audit sertifikasi. Kunci masuk retail modern, rantai ekspor, dan kontrak pembeli besar yang menuntut lebih dari sekadar rasa enak.",
    timeline: "2–4 bulan termasuk pelatihan tim dan audit sertifikasi",
    intro: [
      "HACCP (Hazard Analysis Critical Control Point) adalah sistem yang mengidentifikasi di titik mana produk pangan Anda bisa berbahaya — biologis, kimia, fisik — lalu mengunci titik-titik kritis itu dengan pengawasan yang terukur, sementara GMP memastikan praktik produksinya benar sejak higiene personal sampai kebersihan peralatan. Keduanya bukan tren estetika: pembeli besar — retail modern, jaringan restoran, pemasok ekspor — menuntut bukti sistemnya, dan beberapa pasar ekspor membuatnya prasyarat mutlak. Payung hukum domestiknya UU 18/2012 tentang Pangan dan PP 86/2019 tentang Keamanan Pangan, dengan rujukan teknis Codex Alimentarius dan SNI tentang sistem HACCP — dipatuhi bukan karena kertas, tapi karena pembeli memeriksa sistemnya sendiri.",
      "Kegagalan paling umum bukan ketiadaan dokumen HACCP, tapi dokumen yang tidak hidup: aliran proses digambar indah tapi tidak sesuai realita lantai produksi, titik kendali kritis ditetapkan lalu tidak dimonitor harian, catatan pengawasan diisi belakangan untuk kepentingan audit, dan analisis bahaya disalin dari template perusahaan lain sehingga bahaya spesifik produk Anda justru terlewat. Auditor yang kompeten menemukannya dalam sehari — dan sertifikat yang dikejar enam bulan mundur ke garis start. Kesalahan kedua: mengira sertifikat HACCP menggantikan kewajiban lain, padahal SLHS mengatur kelayakan tempat, SNI mengatur standar produk — ketiganya lapisan berbeda yang saling menopang, bukan saling menggantikan.",
      "Kami membangun sistem yang berjalan, bukan berkas yang menang audit. Analisis bahaya dilakukan per produk bersama tim produksi Anda sendiri, lalu titik kendali kritis ditetapkan dengan batas kritis yang realistis dan formulir monitoring yang staf benar-benar mampu isi setiap hari. Pelatihan menyentuh seluruh lapisan tim dari operator sampai manajer, disusul audit internal untuk menutup temuan sebelum auditor datang. Hari audit sertifikasi lembaga terakreditasi kami dampingi penuh — dan setelah sertifikat terbit, jadwal surveilans tahunan serta pemeliharaan sistem kami ikuti, karena nilai HACCP ada di keberlanjutannya, bukan di hari terbitnya.",
    ],
    benefits: [
      { title: "Tiket masuk pembeli besar", desc: "Retail modern, rantai ekspor, dan kontrak korporasi menuntut bukti sistem keamanan pangan — sertifikat Anda adalah bukti itu." },
      { title: "Sistem yang hidup, bukan berkas", desc: "Monitoring harian yang staf mampu jalankan — audit tak terjadwal tidak mengguncang karena realitanya memang sesuai dokumen." },
      { title: "Insiden pangan tercegah", desc: "Titik kritis teridentifikasi dan terkunci — biaya penarikan produk, kompensasi pelanggan, dan krisis reputasi terhindar sebelum terjadi." },
      { title: "Tim produksi matang", desc: "Pelatihan menyeluruh membuat keamanan pangan jadi budaya kerja — bukan senjata yang diasah hanya menjelang audit." },
      { title: "Berlapis dengan izin lain", desc: "HACCP menopang SLHS dan SNI tanpa saling menggantikan — arsitektur kepatuhan pangan Anda tersusun benar dari awal." },
    ],
    process: [
      { title: "Pemetaan proses & analisis bahaya", desc: "Alur produksi nyata digambar bersama tim Anda — bahaya biologis, kimia, dan fisik dianalisis per tahap, titik kendali kritis ditetapkan." },
      { title: "Penyusunan dokumen & monitoring", desc: "Rencana HACCP, SOP GMP, batas kritis, tindakan koreksi, dan formulir monitoring disusun — dirancang agar mudah dijalankan staf setiap hari." },
      { title: "Pelatihan & audit internal", desc: "Seluruh tim dilatih menjalankan sistemnya, audit internal menutup temuan — kepastian sebelum auditor eksternal datang." },
      { title: "Audit sertifikasi & surveilans", desc: "Pendampingan audit lembaga sertifikasi terakreditasi sampai sertifikat terbit, plus jadwal surveilans tahunan dan pemeliharaan sistem." },
    ],
    requirements: [
      "Denah alur produksi dan deskripsi tahapan proses (dari bahan masuk sampai produk jadi)",
      "Daftar produk dan spesifikasinya — HACCP disusun per kategori produk, bukan satu untuk semua",
      "Struktur tim produksi dan personel yang akan menjadi tim keamanan pangan",
      "Dokumen dasar yang sudah ada: SOP, catatan higiene, hasil uji air atau produk (bila ada)",
      "Target pembeli/pasar yang menuntut sertifikat (retail, eksportir, atau kontrak korporasi — menentukan skema yang dipilih)",
    ],
    faqs: [
      { q: "Berapa biaya penerapan HACCP dan sertifikasinya?", a: "Jasa pendampingan kami mulai Rp 10 juta — mencakup analisis bahaya, penyusunan dokumen, pelatihan, dan pendampingan audit. Di luar itu ada biaya lembaga sertifikasi (berbeda antar lembaga dan skala fasilitas) serta perbaikan kecil fasilitas bila analisis awal menemukannya. Kami transparankan seluruh pos sejak penawaran, termasuk estimasi biaya sertifikasi lembaga yang kami rekomendasikan — dan kami bantu memilih lembaga yang kredensialnya diakui pembeli target Anda, bukan sekadar termurah." },
      { q: "Apakah HACCP wajib untuk semua usaha pangan, atau hanya yang ekspor?", a: "Secara hukum, penerapan sistem keamanan pangan berbasis HACCP diwajibkan untuk kelompok usaha tertentu dan menjadi prasyarat pasar tertentu — terutama industri pangan berskala besar, eksportir, dan pemasok retail modern. Untuk usaha kecil, HACCP belum selalu wajib, tetapi arah regulasinya jelas menguat dan pembeli besar memintanya lebih dulu daripada aturan. Praktisnya: bila rencana bisnis Anda menyentuh kontrak korporasi, retail modern, atau ekspor, mulai siapkan sistemnya sekarang — karena prosesnya berbulan-bulan dan pembeli tidak mau menunggu sertifikat selesai." },
      { q: "Apa bedanya HACCP dengan SLHS dan SNI yang sudah saya punya?", a: "Ketiganya lapisan berbeda: SLHS dari Dinkes mengatur kelayakan tempat dan higiene sanitasi lokasi usaha, SNI mengatur spesifikasi dan mutu produk tertentu, sedangkan HACCP mengatur SISTEM pengendalian keamanan di sepanjang proses produksi Anda. Punya dua yang pertama tidak otomatis membuat Anda siap audit HACCP — dan sebaliknya. Dalam praktik kami, ketiganya tersusun bertingkat: tempat laik dulu, produk terstandar, lalu sistem yang menopang keduanya — dan begitu tersusun benar, sertifikasi berikutnya berjalan jauh lebih cepat karena fondasinya sudah ada." },
    ],
    related: ["sni", "higiene-sanitasi", "cpotb-obat-tradisional", "laporan-keberlanjutan"],
  },
  {
    slug: "pangan-organik",
    tagline: "Organik bukan klaim bebas — kami buktikan di lahan dan di kertas.",
    heroSub:
      "Sertifikasi pangan organik resmi — skema Indonesia untuk pasar domestik, USDA dan Uni Eropa untuk ekspor. Untuk produsen premium yang mau klaim organiknya tertopang sertifikat, bukan cuma tipografi cantik di kemasan.",
    timeline: "3–6 bulan; periode konversi lahan bisa lebih panjang",
    intro: [
      "Menuliskan kata organik di kemasan tanpa sertifikat bukan pemasaran — itu pelanggaran, karena klaim organik di Indonesia tertopang sistem sertifikasi resmi: Sistem Pertanian Organik yang diatur Permentan 64/2013 dengan rujukan SNI, diperiksa lembaga sertifikasi organik (LSO) terakreditasi KAN, dan berhak memakai logo organik Indonesia. Untuk pasar ekspor, aturan mainnya ketat lagi: USDA Organic untuk pasar Amerika Serikat dan regulasi organik Uni Eropa untuk Eropa — masing-masing dengan standar, auditor, dan dokumentasi tersendiri yang tidak bisa diakali satu sama lain. Prinsip dasarnya satu di semua skema: buktikan sejak benih, lahan, bahan tambahan, catatan budidaya, sampai penyimpanan dan penjualan — bahwa tidak ada bahan kimia sintetis dan praktik terlarang masuk ke rantai produk Anda.",
      "Kesalahan yang paling mahal adalah mengklaim organik dulu, menyiapkan bukti belakangan: pembeli premium yang memeriksa dokumen akan pergi, dan pengawasan dapat menjerat klaim yang tak tertopang. Selain itu, kegagalan inspeksi LSO biasanya muncul dari detail yang bisa dicegah: catatan pembelian bahan dan log produksi tidak lengkap, lahan tanpa pembatas jelas dari lahan tetangga yang menyemprot pestisida, hasil panen tercampur dengan produksi konvensional di gudang yang sama, atau bahan tambahan yang dipakai ternyata tidak ada dalam daftar yang diperbolehkan skema. Untuk lahan yang baru beralih dari konvensional, ada periode konversi — produk belum boleh dijual berlabel organik meski cara budidayanya sudah benar, dan banyak produsen baru menyadari ini saat sudah menjanjikan pasar.",
      "Kami memetakan skema yang tepat untuk pasar Anda — organik Indonesia untuk domestik, atau USDA dan UE untuk ekspor. Seluruh rantainya lalu kami siapkan: SOP budidaya dan catatan produksi yang memenuhi standar, penataan lahan dan pencegahan kontaminasi, sampai pemilihan LSO yang sesuai target pasar. Inspeksi lahan kami dampingi penuh sampai sertifikat terbit dan hak pakai logo organik aktif, dengan jadwal surveilans tahunan tersusun sejak awal. Untuk ekspor, kami selaraskan dengan kepatuhan pasar tujuan lainnya — karena sertifikat organik yang kuat paling bernilai bila berjalan seiring dokumen keberlanjutan dan keamanan produk yang diminta pembeli luar negeri.",
    ],
    benefits: [
      { title: "Harga premium yang tertopang bukti", desc: "Klaim organik berdiri di atas sertifikat resmi — pembeli premium dan retailer tidak menemukan celah untuk meragukan." },
      { title: "Pasar ekspor terbuka", desc: "Skema USDA atau EU disiapkan sesuai negara tujuan — jalur produk organik ke Amerika dan Eropa tersusun benar sejak awal." },
      { title: "Lahan terlindungi dari kontaminasi", desc: "Pembatasan lahan, pencegahan drift pestisida tetangga, dan pemisahan stok — risiko kegagalan inspeksi ditekan sejak akar." },
      { title: "Hak pakai logo resmi", desc: "Logo organik Indonesia (atau USDA/EU) terpasang sah di kemasan — daya jual naik tanpa risiko jerat pengawasan." },
      { title: "Sistem yang bertahun-tahun", desc: "Sertifikat organik menuntut keberlanjutan — catatan, surveilans, dan pembaruan kami susun agar tidak runtuh di tahun kedua." },
    ],
    process: [
      { title: "Pemetaan skema & pasar", desc: "Target pasar ditentukan (domestik, USDA, EU) — skema sertifikasi, LSO, dan kesiapan lahan dipetakan, termasuk status konversi." },
      { title: "SOP budidaya & sistem catatan", desc: "Praktik budidaya, daftar bahan yang boleh, catatan log dan pembelian disusun — lahan dan gudang ditata bebas kontaminasi." },
      { title: "Inspeksi LSO", desc: "Pengajuan ke lembaga sertifikasi organik, inspeksi lahan dan fasilitas didampingi penuh — temuan minor ditindaklanjuti cepat." },
      { title: "Sertifikat, logo & surveilans", desc: "Sertifikat terbit, hak pakai logo diaktifkan — jadwal surveilans tahunan dan pembaruan tersusun agar sertifikat tidak putus." },
    ],
    requirements: [
      "Data lahan: lokasi, luas, riwayat pemakaian bahan kimia, dan status lahan sekitarnya",
      "Komoditas dan rencana produksi: jenis tanaman atau pangan, volume, musim panen",
      "Catatan budidaya yang sudah ada (log, pembelian bahan) — bila belum ada, kami susun sistemnya dari nol",
      "Target pasar: domestik atau ekspor (negara tujuan) — menentukan skema sertifikasinya",
      "Struktur usaha: petani sendiri, koperasi, atau pengolah pangan — rantai siapa pun yang menyentuh produk ikut dinilai",
    ],
    faqs: [
      { q: "Berapa biaya sertifikasi pangan organik?", a: "Jasa pendampingan kami mulai Rp 12 juta, sedangkan biaya LSO ditentukan lembaga yang dipilih dan dipengaruhi luas lahan, jumlah komoditas, dan skema (domestik umumnya lebih ringan daripada USDA atau EU). Untuk ekspor ada pos tambahan seperti inspektur dari luar negeri dan dokumentasi pasar tujuan. Kami berikan estimasi lengkap semua pos saat konsultasi — termasuk rekomendasi LSO yang kredibel untuk pasar target Anda, agar biaya yang Anda keluarkan menghasilkan sertifikat yang benar-benar diakui." },
      { q: "Berapa lama prosesnya dan apakah benar ada periode konversi lahan?", a: "Persiapan dokumen dan inspeksi berjalan 3–6 bulan, tetapi untuk lahan yang sebelumnya konvensional ada periode konversi — biasanya dua sampai tiga tahun sesuai skema — di mana produk belum boleh dijual berlabel organik penuh meski praktiknya sudah benar. Karena itu strategi paling efektif adalah memulai sertifikasi jauh sebelum produk siap dipasarkan, atau memetakan skema yang cocok untuk kondisi lahan Anda saat ini. Kami bantu menghitung linimasa realistisnya sejak awal — agar janji Anda ke pembeli tidak terlanjur melebihi kemampuan sertifikat." },
      { q: "Apa risiko kalau saya tulis organik di kemasan tanpa sertifikat?", a: "Klaim organik tanpa sertifikat adalah pelanggaran regulasi pangan dan perlindungan konsumen — produk bisa ditarik, dikenai sanksi pengawasan, dan dalam pasar ekspor risikonya lebih jauh: pembeli dan regulator negara tujuan menuntut bukti sertifikasi, dan penipuan label organik diperlakukan serius di sana. Selain sanksi, ada dampak reputasi yang lebih sulit dipulihkan: satu pemberitaan tentang klaim palsu bisa menggulingkan merek premium yang dibangun bertahun-tahun. Alternatif yang aman tersedia — misalnya menyorot praktik alami tanpa kata organik sampai sertifikat terbit — dan kami bantu menyusun komunikasinya." },
    ],
    related: ["sertifikasi-halal", "sni", "eudr-komoditas", "laporan-keberlanjutan"],
  },
  {
    slug: "izin-klinik-praktik",
    tagline: "Klinik yang menyembuhkan tanpa melanggar aturan.",
    heroSub:
      "Izin lengkap fasilitas pelayanan kesehatan — klinik, laboratorium, fisioterapi — dengan tenaga medis terdaftar resmi dan standar pelayanan yang benar. Untuk dokter dan investor kesehatan yang membangun layanan, bukan sekadar ruang berlabel klinik.",
    timeline: "4–8 minggu tergantung kelengkapan tenaga medis",
    intro: [
      "Membuka klinik berarti mengumpulkan tumpukan kewajiban yang saling menunggu satu sama lain: badan usaha dengan KBLI yang benar, tenaga medis dengan STR dari konsil masing-masing plus Surat Izin Praktik yang sah, ruangan dan peralatan yang memenuhi standar pelayanan, rekam medis dan sistem rujukan yang tertata, lalu izin fasyankes itu sendiri — yang pasca UU 17/2023 dan PP 28/2024 berjalan sebagai izin usaha sektor kesehatan melalui OSS dengan komitmen pemenuhan standar yang diverifikasi. Dan pekerjaan tidak berhenti di izin terbit: kewajiban akreditasi fasyankes menunggu dalam tenggat tertentu, diperiksa lembaga akreditasi resmi. Setiap cincin rantai ini harus terpasang — satu yang bolong membuat seluruh operasional berstatus tidak sah.",
      "Kesalahan yang paling sering memakan waktu dan uang: menganggap izin berdiri organisasi sama dengan izin fasyankes (keduanya beda dan keduanya wajib), menyiapkan ruang dan alat sembarangan padahal standar pelayanannya kuantitatif — dari luas ruang perawatan sampai kelengkapan alat per jenis layanan — dan praktik tenaga medis yang SIP-nya tidak sesuai jenis layanan yang dijalankan. Yang mengerikan: konsekuensinya tidak berhenti di administrasi — tindakan medis yang dilakukan di fasyankes tanpa izin dapat menggugurkan perlindungan asuransi dan malpraktik, dan kasus sengketa medis di fasyankes ilegal hampir selalu berakhir buruk bagi pihak penyelenggara. Akreditasi yang ditunda juga bukan masalah kecil — teguran dan penghentian layanan mengikuti bila tenggatnya lewat.",
      "Kami merakit seluruh rantainya dalam urutan yang benar. Jenis klinik dan layanan yang dibuka dipetakan lebih dulu, lalu STR dan SIP seluruh tenaga medis serta tenaga kesehatan diurus sekalian. Sarana disiapkan sesuai standar pelayanan yang benar-benar diperiksa, pengajuan izin usaha fasyankes berjalan di OSS dengan pemenuhan komitmennya, dan persiapan akreditasi disusun lewat lembaga akreditasi resmi. Setelah beroperasi, pembinaan lanjutan menjaga kewajiban berkala tetap berjalan — karena di sektor pelayanan kesehatan, kelalaian administratif bisa menghapus seluruh nilai layanan yang baik.",
    ],
    benefits: [
      { title: "Rantai izin tersusun benar", desc: "STR, SIP, izin usaha, dan akreditasi diurutkan tanpa saling menunggu — operasional tidak tertunda oleh kesalahan urutan." },
      { title: "Perlindungan hukum layanan medis", desc: "Fasyankes berizin membuat tindakan medis tertopang kerangka hukum — asuransi, sengketa, dan rujukan berjalan di atas landasan yang sah." },
      { title: "Standar pelayanan yang diperiksa, bukan ditebak", desc: "Sarana disiapkan sesuai standar kuantitatif resmi — inspeksi fisik lolos di kunjungan pertama." },
      { title: "Tenaga medis resmi penuh", desc: "Seluruh dokter, perawat, dan tenaga kesehatan terdaftar sah — praktik mereka melindungi klinik dan pasien sekaligus." },
      { title: "Akreditasi tidak jadi utang", desc: "Persiapan akreditasi dimulai sejak izin — teguran, denda, dan penghentian layanan tidak menyusul di tengah operasional." },
    ],
    process: [
      { title: "Pemetaan layanan & jenis fasyankes", desc: "Jenis klinik, layanan yang dibuka, dan kapasitas dipetakan — kebutuhan tenaga, ruang, dan alat tersusun dari standar resmi." },
      { title: "Tenaga medis & sarana", desc: "STR dan SIP seluruh tenaga diurus, sarana disiapkan sesuai standar pelayanan — fondasi yang diperiksa fisik terpasang benar." },
      { title: "Pengajuan izin fasyankes", desc: "Izin usaha sektor kesehatan diajukan via OSS dengan pemenuhan komitmen standar — administrasi dan verifikasi kami bawa." },
      { title: "Akreditasi & pembinaan lanjutan", desc: "Persiapan akreditasi lembaga resmi, pendampingan penilaian — lalu kewajiban berkala dipantau agar izin tetap sehat." },
    ],
    requirements: [
      "Badan usaha ber-NIB dengan KBLI kesehatan yang sesuai (atau rencana pendirian — kami urus bersama)",
      "Daftar tenaga medis yang akan praktik: nama, STR, spesialisasi (bila belum ada, kami bantu jalur pengurusannya)",
      "Denah lokasi dan rencana tata ruang klinik beserta alur pasien",
      "Rencana layanan yang dibuka: rawat jalan, rawat inap, laboratorium, atau lainnya — menentukan standar yang berlaku",
      "Status lokasi: milik sendiri atau sewa (dengan masa sewa yang memadai untuk keberlangsungan izin)",
    ],
    faqs: [
      { q: "Berapa biaya pengurusan izin klinik?", a: "Jasa pendampingan kami mulai Rp 10 juta tergantung jenis fasyankes — klinik pratama berbeda beban dari klinik utama dengan rawat inap atau laboratorium klinik. Di luar jasa, pos pentingnya ada di sisi tenaga medis dan sarana: biaya pendaftaran STR/SIP, penyiapan ruang dan alat sesuai standar, serta biaya akreditasi lembaga resmi di kemudian hari. Kami uraikan seluruh pos dengan estimasi per jenis layanan saat konsultasi — sehingga rencana investasi klinik Anda berdiri di atas angka yang jujur, bukan perkiraan kasar." },
      { q: "Apakah dokter pemilik klinik tetap perlu SIP dan STR sendiri?", a: "Ya — kepemilikan klinik dan hak untuk praktik adalah dua hal berbeda. STR adalah pengakuan kompetensi dari konsil (KKI dan konsil kesehatan lainnya) yang wajib dimiliki setiap tenaga medis dan tenaga kesehatan, sedangkan SIP adalah izin untuk praktik di lokasi tertentu. Dokter pemilik yang ikut melayani pasien di kliniknya sendiri tetap wajib keduanya, dan seluruh dokter serta perawat yang direkrut pun sama. Kami urus seluruh pendaftaran ini sekaligus — termasuk struktur agar dokter pemilik dan tenaga yang direkrut sama-sama tertata dokumennya." },
      { q: "Apa risiko menjalankan klinik sebelum izin lengkap terbit?", a: "Risikonya paling berat di seluruh daftar perizinan usaha: pelayanan kesehatan yang dilakukan di fasyankes tanpa izin berstatus pelanggaran berat, sanksinya mencakup penghentian operasional dan sanksi administratif sampai pidana — dan yang paling menyakitkan, tindakan medis yang dilakukan di situ rentan dinyatakan tanpa perlindungan hukum bila terjadi sengketa. Asuransi malpraktik pun bisa menolak klaim bila fasilitasnya tidak berizin. Beberapa pelaku memilih mulai layanan sambil mengurus izin — strategi yang memahat cepat hari ini dan membayar mahal besok; urutan yang benar adalah izin dulu, layanan kemudian, dan prosesnya kami percepat agar celah keuangannya minimal." },
    ],
    related: ["izin-sektor-ss", "akl-alat-kesehatan", "izin-apotek-pbf", "higiene-sanitasi"],
  },
  {
    slug: "p2k3-panitia-k3",
    tagline: "Satu SK yang menolong ketika kecelakaan datang.",
    heroSub:
      "Pembentukan Panitia Pembina K3 yang resmi dan benar-benar berjalan — SK direksi, pelatihan pengurus, program kerja tahunan, sampai pelaporan ke instansi. Kewajiban perusahaan 100+ pekerja yang sering baru diingat saat pemeriksaan datang.",
    timeline: "2–4 minggu dari pembentukan sampai pelaporan",
    intro: [
      "Sejak UU 1/1970 tentang Keselamatan Kerja, setiap tempat kerja wajib menjamin keselamatan dan kesehatan tenaga kerjanya — dan Permenaker 4/1980 menurunkan kewajiban konkret itu: perusahaan dengan 100 pekerja atau lebih, atau yang bekerjanya berisiko tinggi, wajib membentuk Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3). Panitia ini bukan struktur hiasan di buku perusahaan: ia dibentuk dengan SK dari pimpinan, diketuai langsung pejabat senior, beranggotakan unsur pengusaha dan pekerja, menjalankan program kerja K3 tahunan, mengadakan rapat berkala, dan melaporkan perkembangan ke instansi ketenagakerjaan. PP 50/2012 tentang SMK3 memperkuat kerangkanya — dan untuk perusahaan yang wajib SMK3, P2K3 adalah mesin penggeraknya.",
      "Pola kelalaian yang berulang terasa hampir semua pemeriksaan ketenagakerjaan. SK P2K3 pernah dibuat bertahun-tahun lalu tidak pernah dievaluasi, anggota panitia tidak pernah dilatih, program kerja mati di tinta tanda tangan, dan laporan tahunan tidak pernah dikirim ke Disnaker — sehingga di mata instansi, panitia itu TIDAK ADA meski dokumennya pernah terbit. Akibatnya datang di waktu paling buruk: pemeriksaan rutin menghasilkan teguran, tender dan sertifikasi yang menanyakan dokumen K3 tertahan, dan ketika kecelakaan kerja sungguh terjadi, perusahaan tanpa panitia yang aktif berdiri tanpa pertahanan — baik di depan pengawasan maupun di depan keluarga korban.",
      "Kami membentuk P2K3 yang hidup, bukan yang hanya tertanda tangan. SK dan struktur panitia disusun sesuai komposisi yang dituntut, lalu pengurus dilatih dasar pengelolaan K3 — berlanjut ke sertifikasi Ahli K3 atau sertifikat kompetensi BNSP bila diperlukan. Program kerja K3 tahunan disusun realistis untuk industri Anda, lengkap dengan template notulen rapat dan inspeksi yang benar-benar terpakai. Pelaporan ke instansi ketenagakerjaan kami selesaikan sesuai jenjangnya — dan hasil akhirnya bukan sekadar dokumen yang lolos diperiksa, melainkan sistem yang membuat pekerja Anda pulang selamat dan perusahaan Anda berdiri tegak setiap kali K3 diperiksa.",
    ],
    benefits: [
      { title: "Kewajiban hukum tertutup", desc: "Kewajiban P2K3 yang dituntut UU 1/1970 dan Permenaker 4/1980 terpenuhi penuh — dari SK sampai pelaporan." },
      { title: "Lolos pemeriksaan Disnaker", desc: "Dokumen, program, dan bukti kegiatan tersusun rapi — teguran dan sanksi pengawasan tidak muncul dari kekosongan." },
      { title: "Tender & sertifikasi tak terhambat", desc: "Dokumen K3 yang valid diminta di tender, sertifikasi SMK3, dan penilaian mitra — perusahaan Anda siap duluan." },
      { title: "Pertahanan saat kecelakaan", desc: "Panitia yang aktif adalah bukti kepatuhan yang membatasi kerugian hukum — dan yang terpenting, mencegah tragedinya terjadi." },
      { title: "Pengurus yang kompeten", desc: "Pelatihan membuat panitia bekerja sungguhan — program K3 berjalan, bukan berhenti di tanda tangan SK." },
    ],
    process: [
      { title: "Pemetaan kepatuhan K3", desc: "Jumlah pekerja, tingkat risiko, dan kewajiban K3 lainnya dipetakan — posisi kepatuhan Anda dilihat jernih sebelum langkah." },
      { title: "SK, struktur & pelatihan", desc: "SK pembentukan dan struktur panitia disusun sesuai komposisi resmi, pengurus dilatih dasar pengelolaan K3." },
      { title: "Program kerja tahunan", desc: "Program K3 disusun realistis untuk industri Anda — inspeksi rutin, rapat berkala, sosialisasi, dan template notulennya siap dipakai." },
      { title: "Pelaporan & pemeliharaan", desc: "Pendaftaran dan laporan ke instansi ketenagakerjaan selesai — kalender kegiatan tahunan diberikan agar panitia tetap berjalan." },
    ],
    requirements: [
      "Data perusahaan: NIB, jumlah pekerja, jenis industri, dan lokasi kegiatan",
      "Struktur organisasi dan personel yang diusulkan menjadi pengurus panitia (dari unsur pengusaha dan pekerja)",
      "Catatan K3 yang sudah ada: kecelakaan kerja, APAR, P3K, atau program keselamatan yang pernah berjalan (bila ada)",
      "Status kewajiban K3 lain: SMK3, ahli K3, LKS Bipartit (kami petakan sekaligus agar tidak saling tertinggal)",
      "Kesediaan mengalokasikan waktu pengurus untuk pelatihan dan rapat berkala",
    ],
    faqs: [
      { q: "Perusahaan saya pekerjanya di bawah 100 orang — apakah tetap perlu P2K3?", a: "Kewajiban P2K3 memang disebut untuk perusahaan dengan 100 pekerja atau lebih ATAU yang bekerjanya berisiko tinggi menurut penilaian — jadi perusahaan di bawah 100 orang dengan aktivitas berisiko (konstruksi, manufaktur berat, energi, logistik) tetap masuk kewajiban. Di luar kewajiban, banyak perusahaan kecil dan menengah membentuknya secara sukarela karena praktisnya: dokumen K3 yang rapi diminta di tender, audit pelanggan, dan sertifikasi mitra. Kami bantu menilai posisi Anda terhadap dua kriteria itu — kewajiban atau strategi — lalu membentuknya dengan cara yang sesuai skala perusahaan." },
      { q: "Berapa biaya pembentukan P2K3 dan apakah pelatihannya termasuk?", a: "Jasa pendampingan kami mulai Rp 3,5 juta — mencakup SK, struktur, program kerja tahunan, template dokumen, dan pelaporan ke instansi. Pelatihan dasar pengurus sudah masuk dalam pendampingan; bila perusahaan butuh sertifikasi formal seperti Ahli K3 Umum atau sertifikat kompetensi BNSP untuk personelnya, itu pos terpisah dengan biaya penyelenggara pelatihan. Kami petakan dulu apa yang benar-benar wajib untuk skala dan risiko perusahaan Anda — banyak perusahaan membeli sertifikasi yang belum saatnya, sementara kewajiban dasarnya belum tertutup." },
      { q: "SK P2K3 kami sudah ada bertahun-tahun lalu — apakah masih sah?", a: "SK yang ada tapi tidak berjalan berstatus lemah di mata pemeriksaan: yang dinilai bukan keberadaan dokumennya, tapi keaktifannya — program tahunan, rapat berkala yang ternotulen, inspeksi yang berjalan, dan laporan yang dikirim. Kalau panitia lama sudah tidak aktif, jalan terbaik biasanya membentuk ulang dengan SK baru berikut pembaruan komposisinya, lalu langsung menjalankan siklusnya dengan benar. Kami bantu menilai kondisi panitia Anda saat ini dan menentukan: cukup direvitalisasi, atau dibentuk ulang dari awal — keduanya kami tangani sampai laporan ke instansi beres." },
    ],
    related: ["smk3", "bnsp", "lks-bipartit", "audit-payroll"],
  },
  {
    slug: "laboratorium-uji-produk",
    tagline: "Satu hasil uji yang benar membuka banyak pintu.",
    heroSub:
      "Koordinasi pengujian produk di laboratorium terakreditasi KAN — satu pintu untuk kebutuhan SNI, izin edar BPOM, halal, dan ekspor. Parameter yang tepat, lab yang benar, hasil yang dipahami — tanpa biaya uji yang terbuang.",
    timeline: "1–3 minggu per set pengujian tergantung parameter",
    intro: [
      "Hampir setiap pintu perizinan produk berdiri di atas hasil pengujian laboratorium. SNI menuntut uji mutu sesuai standarnya; izin edar dan notifikasi BPOM menuntut bukti keamanan pangan atau kosmetik; sertifikasi halal menuntut bukti tidak ada bahan nonhalal; ekspor menuntut COA yang diterima pembeli luar negeri; dan label gizi menuntut data proksimat. Syarat yang menentukan validnya semua itu hanya satu: laboratorium pengujinya terakreditasi KAN dengan lingkup ISO/IEC 17025 yang mencakup parameter yang diuji. Di titik inilah banyak produsen tersandung tanpa sadar — lab yang salah atau parameter yang keliru membuat seluruh sertifikat di hilirnya ikut runtuh.",
      "Kesalahan yang paling sering menguras biaya jarang terlihat dari awal. Lab dipilih dari daftar harga termurah, lalu hasilnya tidak diterima instansi karena akreditasi atau lingkup parameternya tidak mencakup. Ada juga pengujian yang parameternya kekurangan sehingga pengajuan tertolak dan uji diulang dari sampel baru, atau justru berlebihan — membayar untuk hasil yang tidak diminta dokumen apa pun. Kesalahan yang lebih senyap lagi: hasil uji sudah di tangan tapi implikasinya tidak dipahami — angka yang gagal untuk satu sertifikat ternyata memenuhi untuk yang lain, dan tanpa analisis yang benar, keperluan yang sebenarnya cukup satu pengujian dibayar dua kali.",
      "Kami menjadi satu pintu pengujian Anda. Tujuan uji dipetakan dulu — SNI, BPOM, halal, ekspor, atau klaim label — lalu daftar parameter minimum yang benar-benar disyaratkan tersusun. Laboratorium terakreditasi KAN dengan lingkup yang cocok kami pilih, koordinasi sampel dan jadwal kami bawa, dan hasil uji kami interpretasikan terhadap standar yang jadi tujuan, lengkap dengan langkah lanjut bila ada parameter yang belum memenuhi. Untuk produsen dengan banyak produk, strategi pengujian kami susun agar satu rangkaian sampel dan biaya bisa menopang beberapa keperluan sekaligus.",
    ],
    benefits: [
      { title: "Tidak ada uji yang terbuang", desc: "Parameter dipetakan dari tujuan resminya sebelum sampel dikirim — pembayaran untuk uji yang tidak diperlukan hilang dari anggaran." },
      { title: "Lab yang benar sejak awal", desc: "Hanya laboratorium terakreditasi KAN dengan lingkup cocok yang kami tuju — hasil Anda diterima instansi, bukan ditolak di meja administrasi." },
      { title: "Satu uji, beberapa pintu", desc: "Untuk produk dengan banyak target sertifikasi, strategi pengujian kami susun agar hasil yang sama menopang beberapa keperluan." },
      { title: "Hasil yang dipahami", desc: "Interpretasi terhadap standar tujuan diberikan jelas — lulus, belum lulus, atau perlu tindakan — beserta langkah lanjutnya." },
      { title: "Kecepatan yang terkendali", desc: "Jadwal antar lab dan antrean kami koordinasikan — tenggat pengajuan sertifikasi Anda tidak tergantung antrean yang tidak dipahami." },
    ],
    process: [
      { title: "Pemetaan tujuan & parameter uji", desc: "Keperluan resmi ditetapkan (SNI, BPOM, halal, ekspor) — daftar parameter minimum yang disyaratkan tersusun akurat." },
      { title: "Pemilihan lab & koordinasi", desc: "Laboratorium terakreditasi KAN dengan lingkup cocok dipilih, biaya dan jadwal dikonfirmasi — sampel disiapkan dengan cara yang benar." },
      { title: "Pengujian & pemantauan", desc: "Pengujian berjalan di lab dengan status yang dipantau — kendala teknis atau antrean dijawab cepat agar tenggat tidak geser." },
      { title: "Interpretasi & langkah lanjut", desc: "Laporan uji diinterpretasikan terhadap standar tujuan — rekomendasi tindakan diberikan bila ada parameter yang belum memenuhi." },
    ],
    requirements: [
      "Produk yang diuji: nama, jenis, kemasan, dan batch/lot produksi",
      "Tujuan pengujian: SNI tertentu, izin edar BPOM, sertifikasi halal, COA ekspor, atau klaim label (menentukan parameternya)",
      "Dokumen acuan yang diminta instansi/pembeli (bila sudah ada) — kami cek kesesuaiannya",
      "Jumlah sampel yang memadai sesuai ketentuan lab (kami pandu penyiapan dan pengirimannya)",
      "Tenggat yang harus ditepati: tenggat pengajuan sertifikasi atau pengiriman ekspor",
    ],
    faqs: [
      { q: "Berapa biaya pengujian laboratorium produk?", a: "Jasa koordinasi kami mulai Rp 1,5 juta, sedangkan biaya uji itu sendiri sangat bervariasi tergantung jumlah parameter dan jenisnya — uji proksimat gizi berbeda kisaran harga dengan uji mikroba atau uji logam berat, dan pengujian ekspor bisa berbeda lagi dengan domestik. Kesalahan mahal yang sering terjadi adalah menguji terlalu banyak karena tidak tahu parameter minimumnya; pemetaan yang benar biasanya justru menekan total biaya meski ada biaya jasa kami. Kami berikan estimasi biaya lab bersama penawaran — terukur, dengan pilihan lab yang Anda pahami alasannya." },
      { q: "Berapa lama hasil uji lab keluar?", a: "Umumnya 1–3 minggu per set pengujian tergantung jumlah parameter dan antrean lab — uji mikroba biasanya butuh waktu inkubasi tertentu yang tidak bisa dipercundakan, sementara sebagian parameter fisika-kimia bisa lebih cepat. Bila ada tenggat ketat seperti pengiriman ekspor, kami bantu memilih lab dengan lead time yang cocok dan mengkoordinasikan prioritasnya sejak awal. Perencanaan yang benar membuat pengujian tidak menjadi titik tersedak: kalender sertifikasi Anda disusun dengan jendela uji yang realistis, bukan harapan." },
      { q: "Hasil uji saya tidak memenuhi standar — apakah berarti gagal dan harus mulai dari nol?", a: "Belum tentu — dan di sinilah interpretasi yang benar menentukan nilai uang Anda. Beberapa hasil di bawah standar bisa diperbaiki lewat penyesuaian proses atau formulasi lalu diuji ulang dengan sampel produksi baru; sebagian lainnya bisa jadi soal metode pengambilan sampel yang tidak representatif, bukan kualitas produk sebenarnya; dan kadang hasil itu cukup untuk keperluan lain yang standarnya lebih longgar. Yang jangan dilakukan adalah menguji ulang sampel yang sama berharap angka berubah — itu tidak sah dan terdeteksi. Kami analisis hasil Anda, jelaskan penyebabnya, dan susun langkah perbaikan yang paling efisien sebelum uang berikutnya keluar." },
    ],
    related: ["sni", "bpom", "sertifikasi-halal", "cpotb-obat-tradisional"],
  },
  {
    slug: "audit-klaim-iklan-kesehatan",
    tagline: "Klaim yang menjual hari ini bisa menarik produk Anda besok.",
    heroSub:
      "Audit klaim kemasan dan materi iklan produk kesehatan terhadap izin edar dan peraturan iklan BPOM — sebelum biaya produksi dan iklan mengalir. Untuk merek pangan fungsional, obat tradisional, suplemen, dan kosmetik yang tumbuh lewat pemasaran.",
    timeline: "1–2 minggu untuk satu rangkaian materi",
    intro: [
      "Produk kesehatan punya aturan bicara yang ketat. Klaim yang boleh dikatakan di kemasan, iklan, dan konten pemasaran dibatasi oleh apa yang tertulis dalam izin edarnya — obat tradisional tidak boleh mengklaim menyembuhkan penyakit tertentu, dan suplemen kesehatan tidak boleh bersifat promosi penyembuhan. Seluruhnya tunduk pada pedoman pengawasan iklan BPOM beserta keturunannya, dengan payung UU 17/2023 tentang Kesehatan dan UU 8/1999 tentang Perlindungan Konsumen. Aturannya juga tidak berhenti di TV dan spanduk: marketplace, media sosial, konten influencer, sampai balasan komentar admin masuk wilayah pengawasan — dan BPOM kini memantau ruang digital sama rajinnya dengan pasar fisik.",
      "Hukuman kesalahannya berat dan datang cepat: teguran, larangan tayang, penarikan produk dari peredaran, sampai pencabutan izin edar — tanpa menghitung tuntutan konsumen dan guncangan reputasi yang menyusul. Kesalahan yang berulang di lapangan punya pola yang dikenali. Ada kata menyembuhkan, obat kuat, aman 100%, atau garansi hasil yang melesat dari batas klaim izin edar; testimoni pasien yang dipakai untuk promosi produk nonobat; dan materi influencer yang tidak sesuai materi resmi. Pola yang paling licik: kemasan dan iklan resmi yang rapi, tapi konten penjualan di kanal digital yang menyimpang — sehingga penyimpangan itulah yang ditemukan pengawas lebih dulu daripada kehebatan produknya.",
      "Kami mengaudit seluruh ekosistem komunikasi produk Anda — kemasan, website, katalog, materi marketplace, naskah konten, sampai brief untuk influencer. Setiap klaim dicocokkan ke izin edar dan kriteria peraturan iklan, risiko sanksi dipetakan per materi, dan prioritas perbaikan diberikan sebelum kerugian terjadi. Anda menerima panduan klaim yang aman: daftar kata dan pola yang terlarang, plus formulasi pengganti yang tetap menjual tapi berdiri di atas dasar yang sah. Alur review materi baru juga kami tata agar merek Anda tumbuh cepat tanpa menanam bom waktu di setiap iklannya.",
    ],
    benefits: [
      { title: "Produk tidak ditarik dari pasar", desc: "Klaim dicek sebelum tayang dan tercetak — teguran, larangan tayang, dan penarikan produk terhindar di sumbernya." },
      { title: "Izin edar tetap aman", desc: "Klaim yang melewati batas izin edar adalah jalan menuju pencabutan — audit menjaga aset perizinan paling berharga Anda." },
      { title: "Kampanye digital tidak menembak sendiri", desc: "Konten marketplace, sosial media, dan influencer diaudit satu standar — kanal yang paling cepat viral bukan lagi yang paling rawan." },
      { title: "Panduan klaim yang tetap menjual", desc: "Kata terlarang diberi formulasi pengganti yang sah — pemasaran Anda tetap tajam tanpa melanggar kriteria iklan." },
      { title: "Tim pemasaran mandiri", desc: "Alur review materi internal ditinggalkan — materi baru lolos sesuai aturan tanpa menunggu krisis mengajari." },
    ],
    process: [
      { title: "Inventarisasi materi & klaim", desc: "Seluruh kemasan, iklan, konten, dan materi mitra dikumpulkan — peta permukaan klaim produk Anda tersusun lengkap." },
      { title: "Uji kesesuaian & pemetaan risiko", desc: "Tiap klaim dicocokkan ke izin edar dan kriteria peraturan iklan BPOM — risiko sanksi diprioritaskan per materi." },
      { title: "Perbaikan & formulasi aman", desc: "Materi berisiko diberi koreksi konkret, kata terlarang diberi pengganti yang sah — desain dan naskah siap direvisi tim Anda." },
      { title: "Panduan klaim & alur review", desc: "Panduan klaim aman plus alur persetujuan materi baru diserahkan — kepatuhan iklan menjadi kebiasaan, bukan proyek sesaat." },
    ],
    requirements: [
      "Salinan izin edar/notifikasi produk (nomor MD/BPOM) beserta klaim yang tertulis di dalamnya",
      "Materi yang dipakai saat ini: file kemasan, iklan, banner marketplace, naskah konten, dan brief influencer",
      "Daftar kanal pemasaran yang aktif: e-commerce, sosial media, distributor, agen, atau offline",
      "Klaim atau poin pemasaran yang sedang direncanakan untuk kampanye berikutnya",
      "Riwayat aduan, teguran, atau penghapusan konten oleh platform bila ada (mempercepat pemetaan risiko)",
    ],
    faqs: [
      { q: "Berapa biaya audit klaim dan iklan produk kesehatan?", a: "Jasa audit kami mulai Rp 5 juta untuk satu rangkaian materi satu produk — mencakup kemasan, materi digital, dan kanal pemasaran utama. Bila merek Anda punya banyak varian atau banyak mitra penjualan, skopnya kami petakan dulu dan harganya menyesuaikan jumlah materi — biasanya masih jauh di bawah biaya satu kampanye iklan besar yang berpotensi dibekukan. Kami transparankan skop, jumlah materi, dan hasil yang Anda terima sebelum pekerjaan mulai, sehingga anggaran audit bisa diputuskan dengan angka yang jelas." },
      { q: "Apa saja contoh klaim yang melanggar aturan iklan produk kesehatan?", a: "Contoh yang paling sering muncul: kata menyembuhkan atau obat pada produk yang izin edarnya bukan obat, garansi hasil atau aman 100% yang tidak mungkin dibuktikan, klaim khasiat penyakit tertentu pada obat tradisional padahal batasnya klaim manfaat umum, testimoni pasien untuk suplemen, serta perbandingan dengan produk kompetitor yang tidak berdasar data. Polanya satu: klaim yang melebihi apa yang diizinkan izin edar dan kriteria peraturan iklan BPOM. Yang penting dipahami — pelanggaran tidak harus sengaja; kesalahan alih daya, misalnya brief influencer yang tidak dikawal, tetap dihitung pada merek Anda." },
      { q: "Konten saya ada di marketplace dan dibuat influencer — apakah ikut diawasi BPOM?", a: "Ikut sepenuhnya — pengawasan iklan produk kesehatan kini mencakup ruang digital termasuk e-commerce, media sosial, dan konten kemitraan, dan justru di ruang itulah pelanggaran paling cepat ditemukan karena tersebar masif dan mudah di-screenshot. Merek bertanggung jawab atas materi yang dibuat pihak ketiga atas nama produknya, sehingga brief dan kontrak influencer perlu mengikat pada klaim yang sah. Strategi kami praktis: audit seluruh kanal, berikan panduan klaim yang boleh dipakai konten kreator, lalu pasang alur review materi sebelum tayang — agar pertumbuhan pemasaran Anda tidak ditemani risiko yang ikut tumbuh." },
    ],
    related: ["bpom", "kepatuhan-iklan-digital", "label-gizi", "cpotb-obat-tradisional"],
  },
];

/* ══════════════ LAPISAN PENGAYAAN — PANGAN, KESEHATAN & FARMA ══════════════ */

export const panganKesehatanEnrichment: Record<string, ServiceEnrichment> = {
  "cpotb-obat-tradisional": {
    whoFor: [
      "Produsen obat tradisional dan jamu yang akan mendaftarkan izin edar produk (nomor MD)",
      "Produsen suplemen kesehatan yang membangun pabrik sendiri atau menyewa fasilitas produksi",
      "Pabrik yang sudah beroperasi tapi belum pernah diperiksa CPOTB oleh BPOM",
      "Investor yang membeli atau membangun fasilitas produksi herbal dan ingin kelaikannya terjamin sejak desain",
    ],
    deliverables: [
      "Laporan gap analysis seluruh fasilitas terhadap kriteria CPOTB, dengan prioritas perbaikan dan perkiraan biaya",
      "Paket dokumen CPOTB: SOP produksi, QC/QA, validasi proses, kualifikasi personel, dan format batch record",
      "Simulasi inspeksi penuh dengan tim produksi Anda dan daftar penutupan temuan",
      "Pendampingan inspeksi BPOM sampai Sertifikat CPOTB terbit",
      "Panduan pemeliharaan kelaikan dan roadmap menuju pendaftaran izin edar produk",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 15 jt — tertulis penuh di penawaran" },
      { item: "Biaya inspeksi & sertifikat BPOM", note: "menyesuaikan skala fasilitas — konfirmasi tarif resmi saat pengajuan" },
      { item: "Perbaikan fasilitas (di sisi klien)", note: "sangat bervariasi — dipetakan dengan perkiraan biaya di laporan gap analysis" },
      { item: "Pengujian lab pendukung (air, produk)", note: "tergantung parameter — dipetakan agar tidak ada uji berlebih" },
      { item: "Konsultasi awal & audit pra-inspeksi", note: "termasuk dalam pendampingan — tanpa biaya tambahan" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2023 tentang Kesehatan",
      "PP No. 28 Tahun 2024 tentang Peraturan Pelaksanaan UU No. 17 Tahun 2023 tentang Kesehatan",
      "Peraturan BPOM tentang Tata Cara Penerbitan Sertifikat Cara Produksi Obat Tradisional yang Baik (CPOTB)",
      "Peraturan BPOM tentang Pendaftaran Obat Tradisional (prasyarat izin edar pasca-CPOTB)",
    ],
  },

  "akl-alat-kesehatan": {
    whoFor: [
      "Produsen alat kesehatan dalam negeri yang akan memasarkan produknya",
      "Importir alat kesehatan yang memegang peran izin edar dari pabrikan luar negeri",
      "Distributor dan perusahaan medis yang ingin produknya masuk rumah sakit, klinik, dan lelang Kemenkes",
      "Startup medis dan mitra OEM yang perlu memastikan jalur perizinan perannya benar sejak awal",
    ],
    deliverables: [
      "Hasil penentuan kelas risiko (A–D) dan jalur perizinan yang benar untuk tiap produk",
      "Daftar dokumen teknis lengkap per produk, termasuk daftar untuk pabrikan luar negeri (bila impor)",
      "Pengurusan pengujian ke laboratorium yang hasilnya diterima Kemenkes (bila kelas menuntut)",
      "Pengajuan AKL/AKD di sistem elektronik Kemenkes sampai sertifikat terbit",
      "Panduan pemutakhiran data, perluasan varian, dan kewajiban pasca-terbit",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 7,5 jt per rangkaian produk — tertulis di penawaran" },
      { item: "Biaya resmi Kemenkes (AKL/AKD)", note: "relatif ringan, menyesuaikan jalur dan kelasnya" },
      { item: "Pengujian lab & pembelian sampel", note: "umumnya untuk kelas B–D — dipetakan sejak awal" },
      { item: "Dokumen impor: legalisasi & terjemahan", note: "untuk produk luar negeri — mengikuti ketentuan negara asal" },
      { item: "Pembaruan dokumen pabrikan", note: "FSC/CFS dan ISO 13485 dari pabrikan — memakai dokumen yang masih berlaku" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2023 tentang Kesehatan",
      "PP No. 28 Tahun 2024 tentang Peraturan Pelaksanaan UU No. 17 Tahun 2023 tentang Kesehatan",
      "Permenkes No. 62 Tahun 2017 tentang Izin Edar Alat Kesehatan, Alat Kesehatan Diagnostik In Vitro, dan Reagen Kesehatan Rumah Tangga",
      "Kepmenkes No. 1190/MENKES/PER/VIII/2010 tentang Klasifikasi Alat Kesehatan",
    ],
  },

  "label-gizi": {
    whoFor: [
      "Produsen pangan olahan yang akan mencetak kemasan baru atau revisi desain",
      "Brand pangan yang akan mendaftarkan izin edar BPOM dan butuh berkas label yang benar",
      "Pelaku usaha yang ingin memasang klaim gizi atau klaim fungsi dengan dasar yang sah",
      "Pemilik produk berbasis resep rumahan yang naik kelas ke produksi berlabel",
    ],
    deliverables: [
      "Analisis resep dan susunan daftar komposisi sesuai urutan serta penamaan yang diwajibkan",
      "Hasil pemeriksaan klaim: yang boleh dipakai, yang bersyarat, dan yang harus dihapus",
      "Susunan Informasi Nilai Gizi (ING) berbasis data resep dan rekomendasi parameter uji lab",
      "Koreksi desain kemasan beranotasi per elemen — teks, ukuran, posisi tanda edar, halal, kedaluwarsa",
      "Berkas label final siap cetak dan siap dilampirkan ke pengajuan izin edar",
    ],
    costs: [
      { item: "Jasa review & koreksi label DIGIMAN.ID", note: "mulai Rp 3,5 jt per rangkaian varian — tertulis di penawaran" },
      { item: "Pengujian lab proksimat/parameter gizi", note: "bila belum ada data gizi teruji — parameter minimum yang kami petakan" },
      { item: "Revisi desain oleh desainer klien", note: "koreksi beranotasi dari kami — eksekusi desain tetap di tim Anda" },
      { item: "Konsultasi lanjutan varian baru", note: "tarif ringan per varian tambahan dalam rangkaian yang sama" },
    ],
    legalBasis: [
      "UU No. 18 Tahun 2012 tentang Pangan",
      "PP No. 86 Tahun 2019 tentang Keamanan Pangan",
      "Peraturan BPOM No. 31 Tahun 2018 tentang Label Pangan Olahan",
      "Peraturan BPOM tentang Kriteria dan Tata Cara Pendaftaran Pangan Olahan",
    ],
  },

  "izin-apotek-pbf": {
    whoFor: [
      "Apoteker dan investor yang akan membuka apotek baru atau jaringan apotek",
      "Pelaku usaha distribusi farmasi yang akan mendirikan PBF dan cabangnya",
      "Apotek/PBF yang berencana menambah cabang, mengganti penanggung jawab, atau memperluas cakupan kegiatan",
      "Pemilik sarana farmasi yang ingin menata kepatuhannya menjelang atau setelah pengawasan Dinkes/BPOM",
    ],
    deliverables: [
      "Pemetaan jenis izin yang tepat (apotek, PBF, cabang) beserta urutan pengurusannya",
      "Paket SOP farmasi yang disusun dari kondisi operasional Anda",
      "Pengurusan kualifikasi farmasis: STR, surat penunjukan, dan kelengkapan administrasinya",
      "Pengajuan izin di OSS dan Dinkes sampai pemeriksaan fisik lolos dan izin terbit",
      "Panduan kepatuhan berjalan: penyimpanan, pencatatan, dan kewajiban pengawasan berkala",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 10 jt — tertulis penuh di penawaran" },
      { item: "Penyiapan sarana & peralatan (di sisi klien)", note: "dipetakan per standar yang diperiksa — prioritasnya kami urutkan" },
      { item: "Biaya farmasis penanggung jawab", note: "gaji/perjanjian — tidak masuk jasa kami, namun kami bantu strukturkan" },
      { item: "Biaya resmi izin (OSS/Dinkes)", note: "mengikuti tarif instansi setempat" },
      { item: "Konsultasi pemetaan awal", note: "termasuk dalam pendampingan" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2023 tentang Kesehatan",
      "PP No. 28 Tahun 2024 tentang Peraturan Pelaksanaan UU No. 17 Tahun 2023 tentang Kesehatan",
      "Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek",
      "Kepmenkes No. HK.01.07/MENKES/1982/2017 tentang Pedoman Pembinaan, Penyaluran, dan Pengawasan Obat, Bahan Obat, dan Alat Kesehatan",
    ],
  },

  "haccp-gmp-pangan": {
    whoFor: [
      "Industri pangan yang akan menjadi pemasok retail modern atau rantai restoran",
      "Eksportir pangan yang pembeli/pasar tujuannya menuntut sistem keamanan pangan tersertifikasi",
      "Produsen pangan yang ingin menaikkan sistem higiene dasarnya menjadi sistem pengendalian yang terukur",
      "Perusahaan yang sudah punya SLHS/SNI dan ingin melengkapi arsitektur kepatuhan pangannya",
    ],
    deliverables: [
      "Analisis bahaya per kategori produk dan penetapan titik kendali kritis dengan batas kritisnya",
      "Paket dokumen HACCP & GMP: rencana HACCP, SOP, tindakan koreksi, dan formulir monitoring harian",
      "Pelatihan tim produksi sampai manajer — sistem benar-benar dijalankan, bukan dihafal",
      "Audit internal penuh dan pendampingan audit sertifikasi lembaga terakreditasi",
      "Jadwal surveilans tahunan dan panduan pemeliharaan sistem",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 10 jt — mencakup dokumen, pelatihan, dan pendampingan audit" },
      { item: "Biaya lembaga sertifikasi", note: "berbeda antar lembaga & skala fasilitas — estimasi kami berikan sebelum pilih" },
      { item: "Perbaikan minor fasilitas", note: "bila audit awal menemukan — biasanya kecil dan cepat" },
      { item: "Pelatihan tambahan personel baru", note: "opsional — untuk menjaga keberlanjutan sistem" },
    ],
    legalBasis: [
      "UU No. 18 Tahun 2012 tentang Pangan",
      "PP No. 86 Tahun 2019 tentang Keamanan Pangan",
      "SNI 01-4852-1998 tentang Sistem Manajemen Keamanan Pangan (HACCP)",
      "Codex Alimentarius: General Principles of Food Hygiene dan HACCP Annex",
    ],
  },

  "pangan-organik": {
    whoFor: [
      "Produsen pangan premium yang ingin klaim organiknya tertopang sertifikat resmi",
      "Pelaku pertanian, koperasi, dan pengolah pangan yang menargetkan pasar ekspor (USDA/EU)",
      "Perusahaan yang membangun merek organik dan butuh hak pakai logo organik Indonesia",
      "Produsen lahan konvensional yang berencana konversi ke pertanian organik",
    ],
    deliverables: [
      "Pemetaan skema sertifikasi yang tepat: organik Indonesia, USDA Organic, atau regulasi organik UE",
      "SOP budidaya/pengolahan dan sistem catatan produksi yang memenuhi standar skema",
      "Penataan lahan dan fasilitas bebas kontaminasi beserta pencegahan drift dari lahan tetangga",
      "Pengurusan dengan LSO terakreditasi KAN dan pendampingan inspeksi lahan sampai sertifikat terbit",
      "Hak pakai logo organik plus jadwal surveilans tahunan dan pembaruan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 12 jt — tertulis penuh di penawaran" },
      { item: "Biaya LSO (inspeksi & sertifikat)", note: "tergantung luas lahan, komoditas, dan skema — estimasi per lembaga kami berikan" },
      { item: "Pos ekspor tambahan (bila USDA/EU)", note: "inspektur, dokumentasi, dan pengujian sesuai pasar tujuan" },
      { item: "Perbaikan penataan lahan/gudang", note: "bila pemetaan awal menemukan risiko kontaminasi" },
    ],
    legalBasis: [
      "Peraturan Menteri Pertanian No. 64/Permentan/OT.140/5/2013 tentang Sistem Pertanian Organik",
      "SNI tentang Sistem Pertanian Organik",
      "USDA National Organic Program (untuk pasar Amerika Serikat)",
      "Regulasi organik Uni Eropa (Regulation (EU) 2018/848, untuk pasar Eropa)",
    ],
  },

  "izin-klinik-praktik": {
    whoFor: [
      "Dokter yang membangun klinik sendiri atau memperluas layanan kliniknya",
      "Investor kesehatan yang mendirikan klinik, laboratorium klinik, atau fasilitas fisioterapi",
      "Klinik yang berjalan dan menkejar kewajiban akreditasi sebelum tenggatnya",
      "Badan usaha yang akan bekerja sama dengan tenaga medis dalam struktur fasyankes yang sah",
    ],
    deliverables: [
      "Pemetaan jenis fasyankes dan standar pelayanan yang berlaku untuk layanan yang dibuka",
      "Pengurusan STR dan SIP seluruh tenaga medis dan tenaga kesehatan yang akan praktik",
      "Penyiapan sarana dan dokumen standar pelayanan sesuai yang diperiksa fisik",
      "Pengajuan izin usaha fasyankes via OSS dan pemenuhan komitmennya sampai terbit",
      "Persiapan dan pendampingan akreditasi lembaga resmi plus panduan kewajiban berkala",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 10 jt — tertulis penuh di penawaran" },
      { item: "Biaya STR/SIP tenaga medis", note: "per tenaga — mengikuti tarif konsil dan instansi yang berlaku" },
      { item: "Penyiapan sarana & alat (di sisi klien)", note: "dipetakan per standar pelayanan — prioritas kami urutkan" },
      { item: "Biaya akreditasi lembaga resmi", note: "pada tahap akreditasi — mengikuti tarif lembaga akreditasi" },
      { item: "Konsultasi pemetaan awal", note: "termasuk dalam pendampingan" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2023 tentang Kesehatan",
      "PP No. 28 Tahun 2024 tentang Peraturan Pelaksanaan UU No. 17 Tahun 2023 tentang Kesehatan",
      "Permenkes No. 4 Tahun 2018 tentang Kewajiban Akreditasi Rumah Sakit dan Fasilitas Pelayanan Kesehatan Lainnya",
    ],
  },

  "p2k3-panitia-k3": {
    whoFor: [
      "Perusahaan dengan 100 pekerja atau lebih yang wajib membentuk P2K3",
      "Perusahaan berisiko tinggi (konstruksi, manufaktur berat, energi, logistik) berapa pun jumlah pekerjanya",
      "Perusahaan yang SK P2K3-nya ada tapi tidak berjalan dan akan menghadapi pemeriksaan ketenagakerjaan",
      "Perusahaan yang menyiapkan tender, sertifikasi SMK3, atau penilaian mitra yang menuntut dokumen K3",
    ],
    deliverables: [
      "SK Pembentukan P2K3 dan struktur panitia sesuai komposisi yang dituntut regulasi",
      "Pelatihan dasar pengurus panitia beserta materinya",
      "Program kerja K3 tahunan yang realistis untuk industri Anda",
      "Template notulen rapat, inspeksi, dan arsip kegiatan yang siap dipakai",
      "Pendaftaran dan pelaporan ke instansi ketenagakerjaan plus kalender kegiatan tahunan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 3,5 jt — mencakup SK, program, pelatihan dasar, dan pelaporan" },
      { item: "Sertifikasi Ahli K3/tenaga teknis K3", note: "opsional, via penyelenggara pelatihan — bila kewajiban dasar sudah tertutup" },
      { item: "Sertifikat kompetensi BNSP pengurus", note: "opsional — memperkuat kredibilitas panitia di audit dan tender" },
      { item: "APAR, P3K, dan peralatan K3 (di sisi klien)", note: "bila pemetaan awal menemukan kekosongan — dipetakan prioritasnya" },
    ],
    legalBasis: [
      "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "Permenaker No. 04/MEN/1980 tentang Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3)",
      "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3)",
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan (bab K3)",
    ],
  },

  "laboratorium-uji-produk": {
    whoFor: [
      "Produsen pangan, kosmetik, atau suplemen yang mengajukan izin edar/notifikasi BPOM",
      "Pelaku usaha yang mengejar sertifikasi SNI dan butuh hasil uji yang diterima lembaga sertifikasi",
      "Produsen yang mengurus sertifikasi halal dan butuh bukti uji produk",
      "Eksportir yang perlu COA dari lab terakreditasi untuk pembeli dan bea cukai negara tujuan",
    ],
    deliverables: [
      "Pemetaan tujuan uji beserta daftar parameter minimum yang benar-benar disyaratkan",
      "Rekomendasi laboratorium terakreditasi KAN dengan lingkup yang cocok per parameter",
      "Koordinasi pengiriman sampel, jadwal, dan biaya — transparan sebelum uji berjalan",
      "Interpretasi hasil uji terhadap standar tujuan beserta langkah lanjutnya",
      "Strategi pengujian untuk banyak target sekaligus agar satu hasil menopang beberapa keperluan",
    ],
    costs: [
      { item: "Jasa koordinasi DIGIMAN.ID", note: "mulai Rp 1,5 jt — termasuk pemetaan parameter dan interpretasi hasil" },
      { item: "Biaya pengujian laboratorium", note: "per parameter — kami berikan estimasi sebelum sampel dikirim" },
      { item: "Sampel & pengiriman", note: "ditanggung klien — ketentuan jumlahnya kami pandu" },
      { item: "Pengujian ulang (bila perlu)", note: "dipetakan dengan analisis penyebab — bukan uji ulang buta" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2014 tentang Standarisasi dan Penilaian Kesesuaian",
      "PP No. 102 Tahun 2000 tentang Standarisasi dan Penilaian Kesesuaian Nasional",
      "UU No. 18 Tahun 2012 tentang Pangan (persyaratan keamanan pangan berbasis uji)",
      "UU No. 33 Tahun 2014 tentang Jaminan Produk Halal (bukti uji untuk sertifikasi halal)",
    ],
  },

  "audit-klaim-iklan-kesehatan": {
    whoFor: [
      "Merek obat tradisional, suplemen kesehatan, dan kosmetik yang aktif beriklan",
      "Produsen pangan fungsional yang memasang klaim manfaat di kemasan dan digital",
      "Tim pemasaran yang bekerja dengan influencer, marketplace, dan distributor multi-kanal",
      "Perusahaan yang menerima teguran/aduan dan perlu memulihkan kepatuhan komunikasi produknya",
    ],
    deliverables: [
      "Inventarisasi seluruh klaim lintas kanal: kemasan, iklan, marketplace, sosial media, dan mitra",
      "Pemetaan kesesuaian tiap klaim terhadap izin edar dan kriteria peraturan iklan BPOM",
      "Laporan risiko sanksi per materi dengan prioritas perbaikan",
      "Panduan klaim aman: kata terlarang, formulasi pengganti yang sah, dan contoh penerapannya",
      "Alur review materi baru agar kepatuhan iklan berjalan internal setelah audit",
    ],
    costs: [
      { item: "Jasa audit DIGIMAN.ID", note: "mulai Rp 5 jt per rangkaian materi satu produk — skop tertulis di penawaran" },
      { item: "Revisi desain kemasan & materi (di sisi klien)", note: "koreksi kami beranotasi — eksekusi tetap di tim desain Anda" },
      { item: "Review materi berikutnya", note: "tarif ringan per rangkaian — atau dijalankan internal dengan panduan kami" },
      { item: "Penanganan teguran berjalan", note: "bila ada — dipetakan dan diberi strategi respons tersendiri" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2023 tentang Kesehatan",
      "Peraturan BPOM No. 8 Tahun 2021 tentang Pedoman Pengawasan Iklan Obat, Obat Tradisional, Suplemen Kesehatan, dan Kosmetik",
      "UU No. 8 Tahun 1999 tentang Perlindungan Konsumen",
      "UU No. 1 Tahun 2024 (perubahan UU ITE) — untuk materi promosi di ruang digital",
    ],
  },
};
