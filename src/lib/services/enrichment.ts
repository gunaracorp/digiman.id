/**
 * LAPISAN PENGAYAAN KONTEN — detail mendalam per layanan.
 * Melengkapi konten editorial inti dengan 4 dimensi tambahan yang paling
 * dicari calon klien & mesin pencari:
 *   whoFor       — "apakah layanan ini cocok untuk saya?"
 *   deliverables — "apa yang saya terima di akhir proses?"
 *   costs        — "berapa rincian biayanya?" (query high-intent "biaya X")
 *   legalBasis   — "dasar hukumnya apa?" (sinyal E-E-A-T untuk Google)
 * Digabung otomatis oleh getServiceContent() — aman bila slug belum terdaftar.
 */

export interface ServiceEnrichment {
  whoFor?: string[];
  deliverables?: string[];
  costs?: { item: string; note?: string }[];
  legalBasis?: string[];
}
import { esgEnrichment } from "./esg-keberlanjutan";
import { pendanaanEnrichment } from "./pendanaan-investasi";
import { strukturEnrichment } from "./struktur-korporasi";
import { globalEnrichment } from "./global-ekspansi";
import { kepatuhanDigitalEnrichment } from "./kepatuhan-digital";
import { kreatifEnrichment } from "./kreatif-media";
import { panganKesehatanEnrichment } from "./pangan-kesehatan";
import { propertiEnrichment } from "./properti-infrastruktur";
import { sdmOrganisasiEnrichment } from "./sdm-organisasi";
import { resiliensiEnrichment } from "./resiliensi-bisnis";

const CORE_ENRICHMENT: Record<string, ServiceEnrichment> = {
  /* ══════════════ PENDIRIAN BADAN USAHA ══════════════ */

  "pendirian-pt": {
    whoFor: [
      "Pemilik usaha perorangan yang siap naik kelas menjadi badan hukum",
      "Startup & bisnis keluarga yang butuh struktur resmi untuk mencari investor",
      "Bisnis yang ingin membatasi tanggung jawab pribadi (tanggung jawab terbatas pada modal)",
      "Perusahaan yang akan mengikuti tender, ekspor, atau butuh kredit bank korporasi",
    ],
    deliverables: [
      "Akta Pendirian PT + SK Pengesahan Badan Hukum dari Kemenkumham",
      "NPWP Badan terdaftar (tersinkron otomatis dengan AHU & DJP/Coretax)",
      "NIB + perizinan dasar via OSS-RBA sesuai KBLI usaha Anda",
      "Anggaran Dasar & seluruh dokumen resmi dalam arsip digital rapi",
      "Panduan kewajiban pasca-pendirian: pajak, laporan keuangan, dan perizinan lanjutan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 3,5 jt — tertulis penuh di penawaran" },
      { item: "Biaya notaris pendiri", note: "menyesuaikan modal dasar & kompleksitas struktur" },
      { item: "Biaya pengesahan Kemenkumham", note: "Rp 300.000 untuk PT mikro & kecil (PP 8/2021)" },
      { item: "NPWP Badan", note: "gratis — dibuat otomatis bersama pengesahan" },
      { item: "NIB & akun OSS-RBA", note: "gratis — kewajiban resmi, tanpa biaya negara" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "UU No. 6 Tahun 2023 (Cipta Kerja) & PP No. 8 Tahun 2021",
      "Peraturan Kemenkumham tentang tata cara pengesahan badan hukum via AHU Online",
    ],
  },

  "pt-perorangan": {
    whoFor: [
      "Pelaku UMKM individual yang ingin badan usaha sah tanpa sekutu",
      "Freelancer & profesional yang butuh NPWP badan dan rekening korporasi",
      "Pemilik NIB lama yang mau naik kelas dengan status perusahaan",
      "Usaha kecil yang mengandalkan kemudahan modal & peringkat kredit UMKM",
    ],
    deliverables: [
      "SK Pengesahan PT Perorangan terbit langsung dari sistem AHU-PT Perorangan",
      "NIB + pemetaan perizinan berusaha berbasis risiko untuk KBLI Anda",
      "NPWP Badan aktif dan siap dipakai untuk transaksi",
      "Panduan kewajiban: pelaporan pajak, perubahan data, dan pertanggungjawaban tahunan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 850 rb — termasuk survey KBLI" },
      { item: "Biaya pengesahan Kemenkumham", note: "GRATIS — PP 8/2021 menganjurkan tanpa biaya" },
      { item: "Akta notaris", note: "tidak diperlukan — pendirian deklarasi elektronik" },
      { item: "NIB & OSS-RBA", note: "gratis" },
    ],
    legalBasis: [
      "UU Cipta Kerja — ketentuan PT Perorangan (Pasal 153–153F UU 40/2007)",
      "PP No. 8 Tahun 2021 Bab XIV tentang PT Perorangan",
    ],
  },

  "pendirian-cv": {
    whoFor: [
      "Dua orang atau lebih yang mau bermitra dengan struktur sederhana",
      "Usaha keluarga & bisnis bersama modal terbatas",
      "Usaha jasa yang butuh NPWP badan dan rekening korporasi",
      "Mitra dagang yang belum membutuhkan badan hukum penuh PT",
    ],
    deliverables: [
      "Akta Pendirian CV yang dibuat notaris resmi",
      "NPWP Badan CV untuk kebutuhan transaksi & pajak",
      "NIB via OSS-RBA beserta pemetaan KBLI",
      "Panduan kewajiban pajak (termasuk opsi PPh Final UMKM) & administrasi berjalan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1,8 jt" },
      { item: "Honor notaris akta pendirian", note: "menyesuaikan notaris & kota pendirian" },
      { item: "NIB & akun OSS-RBA", note: "gratis" },
      { item: "NPWP Badan", note: "gratis" },
    ],
    legalBasis: [
      "Kitab Undang-Undang Hukum Dagang (persekutuan CV)",
      "KUH Perdata tentang perikatan & persekutuan",
      "PP No. 5 Tahun 2021 (NIB & perizinan berusaha via OSS)",
    ],
  },

  "pt-pma": {
    whoFor: [
      "Investor asing yang mendirikan usaha di Indonesia",
      "Perusahaan lokal yang menerima masukan modal asing (menjadi PMA)",
      "Korporasi multinasional yang membuka anak usaha Indonesia",
      "Founder luar negeri yang butuh KITAS investor & struktur saham asing",
    ],
    deliverables: [
      "Akta Pendirian PT PMA + SK Pengesahan Kemenkumham",
      "NIB & perizinan berusaha via OSS-RBA sesuai KBLI 5-digit",
      "NPWP Badan + panduan pelaporan LKPM (laporan kegiatan penanaman modal)",
      "Panduan jadwal & bukti penanaman modal (investment commitment) per tahap",
      "Draf struktur kepemilikan sesuai Daftar Negatif Investasi terbaru",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 15 jt — termasuk struktur investasi" },
      { item: "Notaris & pengesahan", note: "menyesuaikan modal dasar (rekomendasi > Rp 10 miliar)" },
      { item: "NIB & OSS-RBA", note: "gratis" },
      { item: "Konsultasi kepatuhan LKPM", note: "termasuk — jadwal triwulan/semester disetel sejak awal" },
    ],
    legalBasis: [
      "UU No. 25 Tahun 2007 tentang Penanaman Modal",
      "UU No. 6 Tahun 2023 (Cipta Kerja) & Peraturan BKPM No. 4 Tahun 2021",
      "PP No. 5 Tahun 2021 tentang Perizinan Berusaha Berbasis Risiko",
    ],
  },

  "firma-ud": {
    whoFor: [
      "Pedagang & usaha dagang milik pribadi yang butuh legalitas formal",
      "Usaha warisan keluarga yang dikelola bersama",
      "Bisnis yang butuh rekening bank atas nama badan usaha",
      "Persekutuan dua orang atau lebih tanpa struktur PT",
    ],
    deliverables: [
      "Akta pendirian Firma/UD dibuat notaris resmi",
      "NIB via OSS-RBA beserta pemetaan KBLI dagang",
      "NPWP badan/persekutuan aktif",
      "Panduan kewajiban pajak (termasuk PPh Final UMKM 0,5%)",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1,2 jt" },
      { item: "Honor notaris", note: "menyesuaikan notaris & kota" },
      { item: "NIB & akun OSS-RBA", note: "gratis" },
      { item: "NPWP", note: "gratis" },
    ],
    legalBasis: [
      "Kitab Undang-Undang Hukum Dagang (Firma & UD)",
      "KUH Perdata tentang persekutuan",
      "PP No. 5 Tahun 2021 (NIB & OSS)",
    ],
  },

  "pendirian-koperasi": {
    whoFor: [
      "Komunitas & karyawan yang mau badan usaha milik bersama",
      "Koperasi desa/kelurahan & unit usaha sekolah",
      "Kelompok UMKM yang mau naik kelas dengan prinsip kekeluargaan",
      "Organisasi yang butuh akses program & pembiayaan koperasi",
    ],
    deliverables: [
      "Akta pendirian + pengesahan badan hukum koperasi dari Kemenkop UKM",
      "AD/ART resmi & susunan pengurus & pengawas",
      "NIB & NPWP koperasi aktif",
      "Panduan RAT perdana, buku koperasi, dan kewajiban pelaporan tahunan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2,5 jt" },
      { item: "Pendampingan RAT perdana", note: "termasuk — notulen & administrasi standar" },
      { item: "NIB & NPWP", note: "gratis" },
    ],
    legalBasis: [
      "UU No. 25 Tahun 1992 tentang Perkoperasian",
      "PP No. 7 Tahun 2021 tentang Kemudahan, Perlindungan, dan Pemberdayaan Koperasi & UMKM",
    ],
  },

  "pendirian-yayasan": {
    whoFor: [
      "Kegiatan sosial, kemanusiaan, dan keagamaan yang butuh badan hukum",
      "Sekolah & lembaga pendidikan nirlaba",
      "Rumah leluhur/RTL & lembaga penghimpun dana sosial",
      "Organisasi yang mau menerima donasi & hibah resmi dari korporasi",
    ],
    deliverables: [
      "Akta Pendirian Yayasan + SK Pengesahan Kemenkumham",
      "AD/ART resmi & susunan organ: pembina, pengurus, pengawas",
      "NIB & NPWP yayasan aktif",
      "Panduan laporan tahunan ke Kemenkumham & kewajiban pajak nirlaba",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 3 jt" },
      { item: "Notaris & pengesahan", note: "menyesuaikan harta penyerahan awal" },
      { item: "NIB & NPWP", note: "gratis" },
      { item: "Konsultasi struktur organ", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 16 Tahun 2001 jo. UU No. 28 Tahun 2004 tentang Yayasan",
      "PP No. 63 Tahun 2010 tentang Pelaksanaan UU Yayasan",
    ],
  },

  "perkumpulan-asosiasi": {
    whoFor: [
      "Asosiasi profesi & asosiasi industri yang butuh legitimasi",
      "Komunitas praktisi yang mau berbadan resmi dengan AD/ART",
      "Aliansi bisnis lintas perusahaan (konsorsium, asosiasi vendor)",
      "Organisasi pelatihan & standarisasi bersama antaranggota",
    ],
    deliverables: [
      "Akta Pendirian Perkumpulan dibuat notaris",
      "AD/ART + program kerja & mekanisme kepengurusan yang benar",
      "NIB & NPWP perkumpulan aktif",
      "Panduan rapat anggota, pemilihan pengurus, dan pelaporan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2,5 jt" },
      { item: "Honor notaris", note: "menyesuaikan notaris & kota" },
      { item: "NIB & NPWP", note: "gratis" },
    ],
    legalBasis: [
      "KUH Perdata — Perkumpulan (Pasal 1653 dst.)",
      "UU No. 17 Tahun 2013 (bila memenuhi kriteria organisasi kemasyarakatan)",
    ],
  },

  /* ══════════════ PERIZINAN & LEGALITAS ══════════════ */

  "nib-oss": {
    whoFor: [
      "Usaha baru yang belum punya izin apa pun dan ingin legal sejak hari pertama",
      "UMKM & bisnis online (dropship, marketplace, jasa) yang butuh NIB",
      "Perusahaan lama yang perizinannya belum rapi atau belum terpetakan",
      "Bisnis yang bingung memilih KBLI yang paling aman untuk kegiatannya",
    ],
    deliverables: [
      "NIB terbit — berlaku sebagai identitas usaha, TDP, dan API (sesuai ketentuan)",
      "Peta lengkap KBLI Anda: tingkat risiko rendah/menengah/tinggi & kewajiannya",
      "Akun OSS-RBA siap pakai + demo singkat pengelolaannya",
      "Panduan kewajiban lanjutan: LK, perizinan lanjutan, dan pertanggungjawaban",
    ],
    costs: [
      { item: "Jasa pendampingan & pemetaan KBLI DIGIMAN.ID", note: "mulai Rp 750 rb" },
      { item: "NIB & akun OSS-RBA", note: "gratis — tanpa biaya negara" },
      { item: "Revisi penambahan KBLI", note: "termasuk sekali dalam jasa" },
    ],
    legalBasis: [
      "UU No. 6 Tahun 2023 (Cipta Kerja)",
      "PP No. 5 Tahun 2021 tentang Perizinan Berusaha Berbasis Risiko",
      "Peraturan Menteri Investasi/BKPM No. 3 & No. 5 Tahun 2021",
    ],
  },

  "izin-sektor-ss": {
    whoFor: [
      "Usaha dengan KBLI risiko menengah-tinggi & tinggi (wajib sertifikat standar/izin)",
      "Restoran, produksi pangan, dan usaha kesehatan",
      "Konstruksi, properti, logistik & transportasi",
      "Usaha pendidikan dan sektor terregulasi lainnya",
    ],
    deliverables: [
      "Sertifikat Standar / izin sektor terbit & terpasang di akun OSS Anda",
      "Daftar persyaratan teknis (standar, kompilasi bukti) yang sudah dipenuhi",
      "Pendampingan inspeksi/verifikasi fisik bila diminta instansi",
      "Panduan kewajiban jangka panjang agar izin tidak dicabut",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1 jt" },
      { item: "Biaya resmi instansi sektor", note: "sesuai kementerian/lembaga — banyak yang gratis" },
      { item: "Survei kelayakan/dokumen teknis", note: "estimasi tertulis saat konsultasi" },
    ],
    legalBasis: [
      "PP No. 5 Tahun 2021 (kewenangan pusat/daerah & instrumen perizinan)",
      "Peraturan teknis kementerian/lembaga sektor terkait",
      "UU No. 6 Tahun 2023 (Cipta Kerja)",
    ],
  },

  "virtual-office": {
    whoFor: [
      "Usaha online & freelancer yang butuh alamat usaha sah tanpa sewa kantor",
      "PT/CV baru yang butuh alamat untuk NIB, NPWP & dokumen bank",
      "Perusahaan luar kota yang butuh presence di kota lain",
      "Tim remote yang butuh alamat surat & ruang meeting profesional",
    ],
    deliverables: [
      "Surat Keterangan Domisili Usaha sah sesuai wilayah pilihan",
      "Alamat virtual office: penerimaan surat + ruang meeting (sesuai paket)",
      "Pendampingan perubahan data domisili di OSS & dokumen lain",
      "Panduan pemilihan wilayah yang aman dari batasan tertentu (mis. DKI Jakarta)",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 500 rb" },
      { item: "Sewa virtual office", note: "menyesuaikan gedung & kota — mulai ratusan ribu/bulan" },
      { item: "Penerbitan SKTU/domisili", note: "sesuai tarif pemda setempat" },
      { item: "Konsultasi pilihan wilayah", note: "termasuk" },
    ],
    legalBasis: [
      "Peraturan daerah/kelurahan tentang penerbitan surat keterangan domisili",
      "Praktik administrasi Kemenkumham & OSS atas alamat kantor",
    ],
  },

  "legalisasi-apostille": {
    whoFor: [
      "Perusahaan & pribadi yang dokumennya dipakai di negara anggota Apostille",
      "Bisnis yang mengekspansi luar negeri (akta, NIB, dokumen perusahaan)",
      "Pelamar kerja/sekolah luar negeri dengan ijazah & dokumen kependudukan",
      "Proses TKA/KITAS yang menuntut dokumen legal yang sah lintas negara",
    ],
    deliverables: [
      "Dokumen terlegalisasi / ber-Apostille sesuai negara tujuan",
      "Terjemahan tersumpah bila diperlukan instansi luar negeri",
      "Pelacakan status per dokumen — transparan dari awal sampai tangan",
      "Pengiriman dokumen asli dengan aman (kurir terlacak)",
    ],
    costs: [
      { item: "Jasa pengurusan DIGIMAN.ID", note: "mulai Rp 350 rb per dokumen" },
      { item: "Biaya resmi Apostille/legalisasi", note: "sesuai tarif instansi (Kemenkumham/Kemenlu)" },
      { item: "Terjemahan tersumpah", note: "menyesuaikan jumlah halaman & jenis dokumen" },
      { item: "Pengiriman dua arah", note: "sesuai lokasi & kecepatan kurir pilihan" },
    ],
    legalBasis: [
      "Perpres No. 26 Tahun 2022 (Indonesia anggota Konvensi Apostille Haag 1961)",
      "UU No. 2 Tahun 2002 tentang Notaris (legalisasi dokumen)",
      "Prosedur Kemenkumham, Kemenlu (TPI), dan perwakilan RI luar negeri",
    ],
  },

  /* ══════════════ KEKAYAAN INTELEKTUAL ══════════════ */

  "pendaftaran-merek": {
    whoFor: [
      "Pemilik bisnis yang mulai dikenali publik dan ingin mengunci nama",
      "UMKM yang jualan di marketplace (banyak platform menuntut merek)",
      "Startup yang mau aman sebelum tumbuh besar atau mengambil investor",
      "Bisnis yang berencana ekspor, franchise, atau lisensi merek",
    ],
    deliverables: [
      "Hasil pencarian kemiripan (survei kelayakan) sebelum diajukan — mengurangi risiko ditolak",
      "Pengajuan resmi ke DJKI Kemenkumham per kelas Nice yang tepat",
      "Sertifikat Merek terbit + seluruh dokumen resmi",
      "Panduan penggunaan tanda ™/® yang benar & kalender perpanjangan 10 tahun",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1,5 jt — termasuk survei kemiripan" },
      { item: "Biaya resmi DJKI per kelas", note: "Rp 250–500 rb (sesuai kategori usaha)" },
      { item: "Kelas tambahan", note: "menyesuaikan jumlah kelas & scope usaha" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2016 tentang Merek & Indikasi Geografis",
      "Permenkumham No. 67 Tahun 2018 (tata cara pendaftaran)",
      "Klasifikasi Nice (11 kelas produk & jasa)",
    ],
  },

  "hak-cipta-paten": {
    whoFor: [
      "Kreator & industri kreatif: musik, film, tulisan, fotografi, desain",
      "Pengembang aplikasi & program komputer yang butuh pencatatan",
      "Peneliti & inovator dengan teknologi baru yang layak dipatenkan",
      "Desainer produk industri yang ingin melindungi bentuk baru",
    ],
    deliverables: [
      "Surat pencatatan Hak Cipta / sertifikat Paten-Desain Industri terbit",
      "Strategi pelindungan: mana yang dicatat (hak cipta), mana yang didaftarkan (paten/desain)",
      "Dokumen resmi DJKI + panduan lisensi & royalti atas karya Anda",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 900 rb" },
      { item: "Biaya resmi DJKI", note: "sesuai jenis karya & kategori pemohon" },
      { item: "Paten & desain industri", note: "menyesuaikan tahapan (pemasyarakatan, pemeriksaan substansi)" },
    ],
    legalBasis: [
      "UU No. 28 Tahun 2014 tentang Hak Cipta",
      "UU No. 13 Tahun 2016 jo. UU No. 63 Tahun 2019 tentang Paten",
      "UU No. 31 Tahun 2000 tentang Desain Industri",
    ],
  },

  "franchise": {
    whoFor: [
      "Pemilik merek yang sudah stabil dan ingin ekspansi via mitra",
      "Bisnis dengan sistem operasi yang sudah baku (SOP jelas)",
      "Fransisor asing yang akan masuk pasar Indonesia",
      "Bisnis yang mau pendapatan berkelanjutan dari fee & royalti",
    ],
    deliverables: [
      "STPW (Surat Tanda Pendaftaran Waralaba) terbit dari Kemenkop UKM",
      "Draf perjanjian franchise (PI, panduan usaha, hak & kewajiban pihak)",
      "Kurasi bahan wajib: prospektus investasi & panduan usaha",
      "Panduan kewajiban fransisor: laporan berkala & pembinaan mitra",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2 jt" },
      { item: "Pendaftaran STPW resmi", note: "gratis via sistem Kemenkop UKM" },
      { item: "Legal drafting perjanjian franchise", note: "menyesuaikan kompleksitas model usaha" },
      { item: "Pendaftaran merek (bila belum)", note: "prasyarat — bisa dibundling" },
    ],
    legalBasis: [
      "PP No. 42 Tahun 2021 (ketentuan waralaba)",
      "Permenkop UKM terkait tata cara pendaftaran STPW",
      "UU No. 20 Tahun 2016 (merek sebagai prasyarat franchise)",
    ],
  },

  /* ══════════════ SERTIFIKASI PRODUK ══════════════ */

  "sertifikasi-halal": {
    whoFor: [
      "Produsen makanan & minuman (dine-in, kemasan, frozen food)",
      "Produsen kosmetika & obat tradisional yang menarget pasar Muslim",
      "UMKM yang menghadapi kewajiban sertifikasi halal untuk produk kemasan",
      "Bisnis F&B yang mau masuk retail besar & ekspor ke negara Muslim",
    ],
    deliverables: [
      "Sertifikat Halal terbit dari BPJPH (berlaku melalui proses SIHALAL)",
      "Pendampingan audit oleh LPH & persiapan sidang fatwa",
      "Panduan penggunaan label Halal Indonesia yang benar pada kemasan",
      "Panduan kewajiban pasca: pemantauan produk, perubahan bahan, perpanjangan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1,5 jt" },
      { item: "Biaya resmi BPJPH", note: "menyesuaikan skala usaha (UMKM mendapat kemudahan)" },
      { item: "Auditor LPH", note: "sesuai jadwal & lokasi lembaga pemeriksa" },
      { item: "Konsultasi daftar bahan & dokumen", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 33 Tahun 2014 jo. UU No. 39 Tahun 2021 (Jaminan Produk Halal)",
      "PP No. 42 Tahun 2024 (aturan pelaksana terbaru)",
      "Prosedur BPJPH, LPH & sidang fatwa BPKJPH",
    ],
  },

  "bpom": {
    whoFor: [
      "Produsen makanan-minuman olahan yang mau masuk toko & marketplace resmi",
      "Produsen kosmetika (notifikasi KLIK) & suplemen/obat tradisional (MD)",
      "UMKM yang mau naik kelas dari jualan informal ke retail modern",
      "Importir produk konsumsi yang butuh izin edar sah",
    ],
    deliverables: [
      "Izin edar MD / notifikasi kosmetika KLIK terbit atas nama usaha Anda",
      "Dokumen registrasi resmi + akses ke sistem BPOM",
      "Panduan label yang benar: kandungan, tanggal kedaluwarsa, klaim yang aman",
      "Pendampingan audit pabrik/sarana bila diminta BPOM",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2 jt" },
      { item: "Biaya resmi BPOM", note: "sesuai jenis produk & skala usaha" },
      { item: "Uji laboratorium (bila perlu)", note: "menyesuaikan parameter & jumlah sampel" },
      { item: "Konsultasi formulasi & label", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 18 Tahun 2012 tentang Pangan",
      "UU No. 17 Tahun 2023 tentang Kesehatan",
      "PP No. 28 Tahun 2024 (pengawasan obat & makanan)",
    ],
  },

  "sni": {
    whoFor: [
      "Produsen produk dengan SNI wajib (kabel, helm, ban, galvanis, dsb.)",
      "Industri yang mau ikut tender & pasokan proyek pemerintah/korporasi",
      "Produsen yang mau masuk retail besar dengan syarat mutu",
      "Eksportir yang diminta bukti kepatuhan standar oleh pembeli",
    ],
    deliverables: [
      "Sertifikat SNI terbit dari LSPro terakreditasi",
      "Pendampingan uji lab & audit penerapan (SPMB) di pabrik",
      "Panduan pemakaian tanda SNI pada produk & kemasan",
      "Panduan pemeliharaan sertifikat: audit pertanggungjawaban berkala",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2,5 jt" },
      { item: "Uji laboratorium", note: "sesuai jenis produk, parameter & jumlah sampel" },
      { item: "Audit LSPro", note: "menyesuaikan lembaga sertifikasi & skala pabrik" },
      { item: "Konsultasi persyaratan teknis SNI", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2014 (Standardisasi & Penilaian Kesesuaian)",
      "PP No. 102 Tahun 2000 tentang Standardisasi Nasional",
      "Peraturan menteri penetapan SNI wajib per jenis produk",
    ],
  },

  "iso": {
    whoFor: [
      "Perusahaan yang mau lolos pra-kualifikasi tender BUMN & korporasi besar",
      "Manajemen yang ingin sistem kerja baku, terukur & auditable",
      "Perusahaan yang sedang meraup pendanaan (due diligence investor)",
      "Bisnis yang menarget kepercayaan klien internasional (ISO 9001/27001)",
    ],
    deliverables: [
      "Sertifikat ISO dari lembaga sertifikasi terakreditasi (JAS-ANSI/IAF)",
      "Gap assessment + dokumen sistem manajemen yang lengkap",
      "Pendampingan audit sertifikasi (stage 1 & stage 2)",
      "Pelatihan internal tim agar sistem jalan sendiri tanpa kami",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 5 jt" },
      { item: "Biaya lembaga sertifikasi", note: "menyesuaikan badan sertifikasi & jumlah karyawan" },
      { item: "Uji/dokumen pendukung (bila perlu)", note: "sesuai standar yang dipilih" },
      { item: "Pembinaan & pelatihan tim", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2014 (kerangka standardisasi nasional)",
      "Standar internasional ISO (9001, 14001, 45001, 27001, dst.)",
      "Akreditasi JAS-ANSI (KAN) untuk pengakuan internasional",
    ],
  },

  /* ══════════════ PERPAJAKAN ══════════════ */

  "npwp-pkp": {
    whoFor: [
      "Badan usaha baru yang belum punya NPWP badan",
      "Perusahaan B2B yang butuh status PKP untuk faktur pajak",
      "Eksportir & pemasok yang transaksinya menuntut PPN",
      "Usaha yang diwajibkan mengukuhan PKP (omzet melewati batas Rp 4,8 M)",
    ],
    deliverables: [
      "NPWP Badan terdaftar & aktif (tersinkron Coretax DJP)",
      "Surat Pengukuhan PKP + nomor yang sah untuk faktur pajak",
      "Aktivasi e-Faktur/e-Bupot & kode enkripsi/faktur digital",
      "Panduan kewajiban: SPT Masa PPN, faktur, dan batas waktu pelaporan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 400 rb" },
      { item: "Pendaftaran NPWP & pengukuhan PKP", note: "gratis — kewajiban resmi DJP" },
      { item: "Pelatihan singkat e-Faktur", note: "termasuk" },
      { item: "Pendampingan migrasi Coretax", note: "termasuk" },
    ],
    legalBasis: [
      "UU KUP (UU No. 28 Tahun 2007 jo. UU No. 7 Tahun 2021/HPP)",
      "PMK No. 112/PMK.010/2022 (pengukuhan PKP)",
      "PMK No. 81 Tahun 2024 (administrasi pajak via Coretax)",
    ],
  },

  "pelaporan-pajak": {
    whoFor: [
      "Perusahaan tanpa staf pajak internal yang andal",
      "Pemilik beberapa badan usaha sekaligus yang butuh satu PIC",
      "Perusahaan yang ingin bebas risiko SP2DK, denda & sanksi DJP",
      "Startup yang butuh laporan pajak rapi untuk due diligence investor",
    ],
    deliverables: [
      "Seluruh SPT Masa & Tahunan terlapor tepat waktu, terdokumentasi",
      "e-Faktur & e-Bupot dikelola penuh setiap masa",
      "Rekonsiliasi & jurnal pajak yang rapi untuk audit",
      "Notifikasi kewajiban + penanganan korespondensi/pemberitahuan DJP",
    ],
    costs: [
      { item: "Jasa kelola pajak DIGIMAN.ID", note: "mulai Rp 500 rb/bulan (sesuai skala & transaksi)" },
      { item: "e-Faktur & e-Bupot", note: "termasuk" },
      { item: "Penanganan SP2DK/korespondensi DJP", note: "sesuai kasus — estimasi tertulis" },
      { item: "Rekap untuk auditor/investor", note: "termasuk" },
    ],
    legalBasis: [
      "UU KUP (UU No. 28 Tahun 2007 jo. UU No. 7 Tahun 2021/HPP)",
      "PMK pelaksana atas SPT, e-Faktur & Coretax (PMK 81/2024)",
    ],
  },

  /* ══════════════ KETENAGAKERJAAN & IMIGRASI ══════════════ */

  "bpjs": {
    whoFor: [
      "Perusahaan yang baru merekrut karyawan pertama",
      "Usaha yang ingin aman dari sanksi ketenagakerjaan & risiko kompensasi",
      "Perusahaan dengan karyawan harian, kontrak, atau proyek",
      "PMA & bisnis yang sedang onboarding tim lokal",
    ],
    deliverables: [
      "Akun kepesertaan JKN (Kesehatan) & BPJS TK aktif atas nama perusahaan",
      "Pendaftaran seluruh karyawan + kartu digital peserta",
      "Perhitungan iuran 5 program TK: JHT, JKK, JKM, JP & JKP",
      "Panduan jadwal tagihan, cara bayar, dan perubahan data bulanan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 300 rb" },
      { item: "Iuran BPJS bulanan", note: "dibayar langsung ke BPJS — sesuai gaji & program" },
      { item: "Pendataan & input karyawan", note: "termasuk" },
      { item: "Kelola perubahan data bulanan", note: "termasuk dalam paket kelola" },
    ],
    legalBasis: [
      "UU No. 24 Tahun 2011 tentang BPJS",
      "UU No. 40 Tahun 2004 (SJSN) & UU No. 13 Tahun 2003",
      "PP No. 86 Tahun 2013 & PP No. 35 Tahun 2015",
    ],
  },

  "kitas-rptka": {
    whoFor: [
      "Perusahaan yang akan merekrut tenaga kerja asing (TKA)",
      "Investor asing yang mau tinggal mengelola usahanya (KITAS investor)",
      "Perusahaan yang menuntut kepatuhan RPTKA sebelum kontrak TKA",
      "Keluarga TKA yang butuh izin tinggal pendamping",
    ],
    deliverables: [
      "Persetujuan RPTKA (rencana penggunaan TKA) via sistem online",
      "KITAS terbit + dokumen imigrasi pendukung",
      "Panduan kewajiban: DKP-TKA, laporan berkala, dan batas jabatan",
      "Pendampingan perpanjangan & perubahan data",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 5 jt (sesuai posisi & tipe KITAS)" },
      { item: "Biaya resmi imigrasi & keimigrasian", note: "sesuai tarif resmi per jenis izin" },
      { item: "DKP-TKA (dana kompensasi)", note: "US$ 100/orang/bulan, dibayar ke kas negara" },
      { item: "Pemeriksaan kesehatan & dokumen pendukung", note: "diatur transparan saat penawaran" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 tentang Ketenagakerjaan",
      "PP No. 34 Tahun 2021 tentang Penggunaan Tenaga Kerja Asing",
      "UU No. 6 Tahun 2011 jo. UU No. 63 Tahun 2024 tentang Imigrasi",
    ],
  },

  /* ══════════════ KORPORASI & LEGAL ══════════════ */

  "perubahan-akta": {
    whoFor: [
      "Perusahaan yang ganti alamat, nama, atau maksud & tujuan usaha",
      "Perusahaan yang menyesuaikan susunan direksi/komisaris atau modal",
      "Perusahaan pasca-investasi yang struktur sahamnya berubah",
      "Perusahaan yang harus menyesuaikan AD dengan regulasi terbaru",
    ],
    deliverables: [
      "Akta Perubahan + SK Pengesahan Kemenkumham",
      "Pembaruan data di AHU, OSS & dokumen perizinan terkait",
      "Pemutakhiran NPWP badan (bila data terdampak)",
      "Panduan kewajiban pasca perubahan agar tidak ada dokumen basi",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 1,5 jt" },
      { item: "Honor notaris akta perubahan", note: "menyesuaikan jenis & kompleksitas" },
      { item: "Biaya pengesahan AHU", note: "sesuai jenis perubahan & skala usaha" },
      { item: "Pembaruan izin turunan (bila perlu)", note: "estimasi tertulis saat konsultasi" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "PP No. 8 Tahun 2021 (pendirian, perubahan, pembubaran PT)",
      "UU No. 2 Tahun 2002 tentang Notaris",
    ],
  },

  "pembubaran": {
    whoFor: [
      "Perusahaan yang berhenti beroperasi & ingin ditutup secara resmi",
      "Pemilik yang mau terlepas dari kewajiban & risiko hukum berjalan",
      "Badan usaha yang NIB-nya masih hidup tapi usaha sudah tidak ada",
      "Korporasi dengan utang/piutang yang perlu diselesaikan terstruktur",
    ],
    deliverables: [
      "Akta/RUPS pembubaran + proses likuidasi yang benar",
      "Pelaporan & pencoretan (dissolution & liquidation) di Kemenkumham",
      "Penuntasan pajak (SPT nihil terakhir, rekonsiliasi) & pembatalan NIB",
      "Dokumen tuntas yang melindungi Anda dari kewajiban mendatang",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2,5 jt" },
      { item: "Notaris & pengumuman", note: "menyesuaikan kondisi perusahaan" },
      { item: "Penuntasan pajak", note: "sesuai kondisi buku & kewajiban berjalan" },
      { item: "Pelaporan Kemenkumham", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 (Pasal 144 dst. — pembubaran & likuidasi)",
      "PP No. 8 Tahun 2021 (prosedur pembubaran & pelaporan)",
      "UU KUP (kewajiban perpajakan sampai penuntasan)",
    ],
  },

  "legal-drafting": {
    whoFor: [
      "Bisnis yang butuh kontrak kuat: kerjasama, vendor, distributor, karyawan",
      "Startup yang butuh kontrak founder, term sheet & vesting",
      "Perusahaan yang akan menghadapi due diligence investor/pembeli",
      "Bisnis yang butuh dokumen standar siap pakai: MOU, NDA, SPK",
    ],
    deliverables: [
      "Dokumen draf disesuaikan kasus Anda — bukan template pasaran",
      "Review kontrak dari pihak lain + catatan risiko & saran revisi",
      "Due diligence report terstruktur (bila lingkup DD)",
      "Pendampingan penandatanganan elektronik tersertifikasi",
    ],
    costs: [
      { item: "Jasa drafting per dokumen standar", note: "mulai Rp 750 rb" },
      { item: "Due diligence", note: "menyesuaikan skala & jumlah dokumen" },
      { item: "Pendampingan negosiasi", note: "sesuai kompleksitas pihak lain" },
      { item: "Retainer legal bulanan", note: "opsional — untuk kebutuhan berkelanjutan" },
    ],
    legalBasis: [
      "KUH Perdata (perikatan) & KUH Dagang",
      "UU No. 11 Tahun 2008 jo. UU No. 1 Tahun 2024 (tanda tangan elektronik)",
      "Praksis advokat (UU No. 18 Tahun 2003) untuk pendampingan sengketa",
    ],
  },

  /* ══════════════ DIGITALISASI & TEKNOLOGI ══════════════ */

  "website-ecommerce": {
    whoFor: [
      "Bisnis yang mau katalog produk & jualan online milik sendiri",
      "UMKM yang bergantung penuh pada marketplace (rental audiens)",
      "Perusahaan yang butuh company profile kredibel & cepat",
      "Bisnis yang mau data pelanggan & komunitas sendiri",
    ],
    deliverables: [
      "Website/toko online siap jualan: domain, hosting & SSL atas nama Anda",
      "SEO dasar + integrasi Google Analytics/Search Console",
      "Pelatihan admin singkat + dokumentasi pengelolaan",
      "Garansi perbaikan bug & pendampingan masa awal operasional",
    ],
    costs: [
      { item: "Pembangunan website/company profile", note: "mulai Rp 3 jt" },
      { item: "Toko online & fitur kustom", note: "menyesuaikan scope — tertulis di penawaran" },
      { item: "Domain & hosting", note: "menyesuaikan spesifikasi — aset milik Anda" },
      { item: "Maintenance bulanan", note: "opsional" },
    ],
    legalBasis: [
      "UU No. 11 Tahun 2008 jo. UU No. 1 Tahun 2024 (ITE)",
      "PP No. 80 Tahun 2019 (Perdagangan Melalui Sistem Elektronik)",
      "UU No. 27 Tahun 2022 (Pelindungan Data Pribadi)",
    ],
  },

  "aplikasi-sistem": {
    whoFor: [
      "Operasional yang masih manual & rawan salah (spreadsheets panik)",
      "Perusahaan multi-cabang yang butuh sistem terpusat",
      "Bisnis dengan alur unik yang tidak bisa dipaksa ke SaaS pasaran",
      "Perusahaan yang mau sistem menjadi aset milik sendiri",
    ],
    deliverables: [
      "Aplikasi web/internal: dashboard, hak akses per peran, laporan otomatis",
      "Dokumentasi teknis + pelatihan tim pengguna",
      "Deployment di server/domain milik Anda",
      "Masa garansi perbaikan bug & pendampingan go-live",
    ],
    costs: [
      { item: "Konsultasi & penetapan scope", note: "custom — harga final tertulis di proposal" },
      { item: "Fase MVP dulu, lalu iterasi", note: "disarankan agar risiko kecil & cepat terpakai" },
      { item: "Infrastruktur (server/domain)", note: "transparan sesuai pemakaian" },
      { item: "Perawatan bulanan", note: "opsional" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 (Pelindungan Data Pribadi)",
      "UU No. 11 Tahun 2008 jo. UU No. 1 Tahun 2024 (ITE)",
      "UU No. 28 Tahun 2014 (hak cipta program komputer — kepemilikan kode diatur jelas di kontrak)",
    ],
  },

  "otomasi-ai": {
    whoFor: [
      "Tim yang kewalahan membalas chat/inbox & follow-up manual",
      "Bisnis yang mau penjualan & layanan 24/7 tanpa menambah staf",
      "Operasi repetitif: invoice, laporan, reminder, entri data",
      "Perusahaan yang mau lead nurturing & retargeting otomatis",
    ],
    deliverables: [
      "Asisten AI (WhatsApp/chatbot) yang dilatih sesuai SOP & data bisnis Anda",
      "Otomasi alur kerja: CRM, invoice, laporan, follow-up terjadwal",
      "Kampanye iklan & konten yang terukur (KPI jelas sejak awal)",
      "Laporan bulanan + iterasi perbaikan berkelanjutan",
    ],
    costs: [
      { item: "Jasa otomasi & pengelolaan DIGIMAN.ID", note: "mulai Rp 2,5 jt/bulan (sesuai kanal & volume)" },
      { item: "Infrastruktur AI (API/komputasi)", note: "transparan sesuai pemakaian" },
      { item: "Budget iklan", note: "terpisah — dikelola penuh dengan laporan terbuka" },
      { item: "Audit awal proses bisnis", note: "termasuk" },
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 (Pelindungan Data Pribadi)",
      "UU No. 11 Tahun 2008 jo. UU No. 1 Tahun 2024 (ITE)",
      "Surat Edaran Kominfo No. 9 Tahun 2023 (etika AI) & Stranas KA 2020–2045",
    ],
  },

  /* ══════════════ DIGITAL GROWTH (4 layanan baru) ══════════════ */

  "wa-business": {
    whoFor: [
      "Bisnis yang jualan & layanan pelanggan utamanya lewat WhatsApp",
      "Tim yang kewalahan membalas chat dari satu ponsel bersama",
      "Toko yang ingin katalog produk bisa dipesan langsung dari chat",
      "Bisnis yang butuh broadcast promo aman dari risiko terblokir Meta",
    ],
    deliverables: [
      "WhatsApp Business API aktif: nomor bisnis terverifikasi + profil lengkap",
      "Katalog produk digital siap pakai — foto, deskripsi, harga, keranjang",
      "Chatbot pemesanan & FAQ yang dilatih dari pertanyaan nyata bisnis Anda",
      "Integrasi notifikasi pesanan ke CRM/spreadsheet + panduan operasional",
    ],
    costs: [
      { item: "Jasa setup WABA & katalog DIGIMAN.ID", note: "mulai Rp 1,5 jt — sekali bayar" },
      { item: "Biaya platform BSP", note: "ratusan ribu/bulan tergantung penyedia & fitur" },
      { item: "Biaya percakapan Meta", note: "chat masuk 24 jam gratis; template keluar tarif per percakapan" },
      { item: "Pengembangan chatbot lanjutan & integrasi", note: "menyesuaikan scope — tertulis di penawaran" },
    ],
    legalBasis: [
      "Ketentuan WhatsApp Business Solution Meta Platform & kebijakan Commerce",
      "UU No. 27 Tahun 2022 (Pelindungan Data Pribadi)",
      "PP No. 80 Tahun 2019 (Perdagangan Melalui Sistem Elektronik)",
    ],
  },

  "google-bisnisku": {
    whoFor: [
      "Bisnis lokal: klinik, restoran, bengkel, sekolah, salon, toko fisik",
      "Usaha yang belum tampil di Google Maps atau profilnya masih kosong",
      "Bisnis yang ratingnya rendah/balasan review tidak profesional",
      "Multi-cabang yang butuh konsistensi profil semua lokasi",
    ],
    deliverables: [
      "Profil Google Business terverifikasi & teroptimasi penuh (kategori, deskripsi, atribut)",
      "Etalase foto & produk/layanan terkurasi + jam operasional akurat",
      "Sistem review: template permintaan & balasan + penanganan review negatif",
      "Laporan performa bulanan: tayangan, klik telepon, permintaan rute",
    ],
    costs: [
      { item: "Jasa optimasi & pendampingan DIGIMAN.ID", note: "mulai Rp 750 rb (sekali bayar) / paket bulanan opsional" },
      { item: "Verifikasi Google", note: "gratis — via pos/telepon/kamera sesuai metode Google" },
      { item: "Foto lokasi & produk", note: "opsional — tersedia paket foto profesional" },
      { item: "Pengelolaan multi-cabang", note: "menyesuaikan jumlah lokasi" },
    ],
    legalBasis: [
      "Ketentuan Google Business Profile Policies & Guidelines",
      "UU No. 8 Tahun 1999 (Perlindungan Konsumen — akurasi informasi usaha)",
      "UU No. 11 Tahun 2008 jo. UU No. 1 Tahun 2024 (ITE)",
    ],
  },

  "marketplace": {
    whoFor: [
      "Produsen/UMKM yang mau jualan di Shopee, Tokopedia, Lazada, TikTok Shop",
      "Toko yang sudah buka tapi sepi order (listing lemah, tanpa strategi promo)",
      "Brand yang mengincar badge toko resmi/Power Merchant",
      "Bisnis yang mau masuk TikTok Shop + live selling & affiliate",
    ],
    deliverables: [
      "Toko resmi terverifikasi di marketplace pilihan (badge bila layak)",
      "Seluruh listing SEO: judul, deskripsi, foto standar platform, varian, stok",
      "Etalase & program promo: voucher, flash sale, gratis ongkir yang menjaga margin",
      "Pelatihan kelola pesanan + evaluasi performa minggu pertama",
    ],
    costs: [
      { item: "Jasa setup & listing DIGIMAN.ID", note: "mulai Rp 1,25 jt per marketplace" },
      { item: "Biaya toko resmi/Power Merchant", note: "sesuai tarif platform (disebutkan terbuka di penawaran)" },
      { item: "Foto & video produk", note: "opsional — paket Branding & Konten Katalog" },
      { item: "Pengelolaan toko bulanan", note: "opsional — sesuai jumlah order & platform" },
    ],
    legalBasis: [
      "PP No. 80 Tahun 2019 (Perdagangan Melalui Sistem Elektronik)",
      "Permendag No. 50 Tahun 2020 (ketentuan PMSE & pelaku usaha)",
      "UU No. 8 Tahun 1999 (Perlindungan Konsumen)",
    ],
  },

  "branding-katalog": {
    whoFor: [
      "Bisnis baru yang butuh identitas visual dari nol",
      "Usaha dengan tampilan lama yang tidak lagi mencerminkan kualitasnya",
      "Penjual marketplace/WA yang fotonya buram & katalognya tidak ada",
      "Brand yang mau konsistensi visual di semua kanal jualan",
    ],
    deliverables: [
      "Paket logo lengkap: file sumber, versi warna/hitam-putih, favicon & profil",
      "Foto produk profesional terkurasi (atau mockup desain untuk layanan)",
      "Katalog digital siap unggah ke Katalog WhatsApp Business & marketplace",
      "Template konten sosmed + panduan brand sederhana yang bisa dipakai tim",
    ],
    costs: [
      { item: "Jasa branding & desain DIGIMAN.ID", note: "mulai Rp 1,5 jt — sesuai cakupan (logo saja / paket penuh)" },
      { item: "Foto studio produk", note: "sesuai jumlah produk — transparan di penawaran" },
      { item: "Fotografer lapangan", note: "opsional untuk produk besar/makanan" },
      { item: "Revisi desain", note: "2 putaran termasuk; putaran lanjutan dihitung jelas" },
    ],
    legalBasis: [
      "UU No. 28 Tahun 2014 (Hak Cipta — karya desain & pemindahan hak pakai tertulis)",
      "UU No. 20 Tahun 2016 (Merek & Indikasi Geografis — logo sebagai merek)",
      "UU No. 24 Tahun 2019 (Ekonomi Kreatif)",
    ],
  },

  /* ══════════════ EKSPANSI PERIZINAN ══════════════ */
  "izin-lingkungan": {
    whoFor: [
      "Pabrik & industri dengan emisi/limbah (produksi, tekstil, pengolahan)",
      "Usaha perluasan kapasitas atau ganti lokasi yang memicu dokumen lingkungan baru",
      "Investor yang pengajuan izin sektornya tertahan menunggu persetujuan lingkungan",
      "Usaha di dalam kawasan industri yang ingin memakai rintisan kawasan (hemat biaya)",
    ],
    deliverables: [
      "Saringan risiko tertulis: jenis dokumen yang wajib (Pernyataan Kesanggupan/UKL-UPL/AMDAL) + alasannya",
      "Dokumen lingkungan lengkap siap diajukan (sesuai jalur yang ditetapkan)",
      "Persetujuan lingkungan terbit & tercatat di OSS-RBA",
      "Rencana Pengelolaan Lingkungan (RPL-RPL) yang realistis + panduan kepatuhan pasca-terbit",
    ],
    costs: [
      { item: "Jasa penyusunan & pendampingan", note: "mulai Rp 2,5 jt untuk UKL-UPL — AMDAL disesuaikan kompleksitas" },
      { item: "Biaya penyusun/laboratorium", note: "pengambilan contoh & uji lab bila diperlukan — transparan di penawaran" },
      { item: "Retribusi daerah", note: "tarif peraturan daerah setempat — kami hitung di awal" },
      { item: "Hemat rintisan kawasan", note: "usaha di kawasan industri ber-AMDAL bisa jauh lebih murah — dianalisis di konsultasi" },
    ],
    legalBasis: [
      "UU No. 32 Tahun 2009 tentang Perlindungan & Pengelolaan Lingkungan Hidup",
      "PP No. 22 Tahun 2021 (Penyelenggaraan PPLH — AMDAL, UKL-UPL, SPPL)",
      "Permen LHK No. 4 Tahun 2021 (tata cara penyusunan dokumen lingkungan)",
    ],
  },
  "pbg-slf": {
    whoFor: [
      "Pemilik yang akan membangun/merenovasi rumah, ruko, gudang, atau gedung",
      "Pemilik gedung yang belum punya SLF dan butuh untuk jual/gadai/buka usaha",
      "Pengusaha yang pengajuan izin usahanya tertahan karena dokumen bangunan",
      "Pembeli properti komersial yang memeriksa kelengkapan dokumen gedung",
    ],
    deliverables: [
      "PBG / SLF terbit resmi dengan QR verifikasi dari SIMBG",
      "Gambar teknis tersusun/perbaikan (arsitektur, struktur, MEP)",
      "Kelengkapan lahan disinkronkan (RTRW/PKKPR, peta situasi, koordinat)",
      "Panduan kewajiban lanjutan: pemeliharaan, perubahan fungsi, masa berlaku",
    ],
    costs: [
      { item: "Jasa pengurusan & pendampingan", note: "mulai Rp 1,5 jt — tergantung kelas bangunan & kompleksitas" },
      { item: "Penyusunan gambar teknis", note: "bila belum ada — dihitung per bangunan, transparan" },
      { item: "Retribusi daerah (tarif PBG)", note: "dihitung sistem sesuai kelas & luas — kami simulasikan di awal" },
      { item: "Jasa pendamping tersertifikasi", note: "untuk gedung yang mewajibkan pendamping — termasuk koordinasi" },
    ],
    legalBasis: [
      "UU No. 28 Tahun 2002 tentang Bangunan Gedung",
      "PP No. 16 Tahun 2021 (Penyelenggaraan Bangunan Gedung — PBG & SLF menggantikan IMB)",
      "Permen PUPR terkait standar teknis & SIMBG",
    ],
  },
  "sbu-konstruksi": {
    whoFor: [
      "Perusahaan konstruksi baru yang akan ikut tender pemerintah/BUMN",
      "Kontraktor dengan SBU kecil yang ingin naik ke Madya/Utama",
      "Perusahaan yang menambah bidang/subkualifikasi (mekanikal, elektrikal, dsb.)",
      "Firma/CV yang bertransformasi ke PT untuk kualifikasi lebih tinggi",
    ],
    deliverables: [
      "SBU terbit & aktif di sistem LPJK",
      "Kualifikasi/subkualifikasi sesuai bidang & target proyek",
      "Personel teknis bersertifikat (SKA/SKT/BNSP) sesuai syarat kualifikasi",
      "Roadmap peningkatan kualifikasi + panduan mempertahankan status",
    ],
    costs: [
      { item: "Jasa pengurusan SBU", note: "mulai Rp 2 jt — tergantung kualifikasi & subkualifikasi" },
      { item: "Biaya registrasi resmi LPJK", note: "sesuai ketentuan — tercantum di penawaran" },
      { item: "Sertifikasi personel", note: "bila belum bersertifikat — dihitung per personel" },
      { item: "Peningkatan kualifikasi", note: "harga terpisah, disesuaikan tambahan personel & pengalaman yang dibutuhkan" },
    ],
    legalBasis: [
      "UU No. 2 Tahun 2017 tentang Jasa Konstruksi",
      "PP No. 22 Tahun 2020 (peraturan pelaksanaan jasa konstruksi)",
      "Permen PUPR No. 10 Tahun 2021 (SBU via sistem LPJK)",
    ],
  },
  "api-bea-cukai": {
    whoFor: [
      "Toko online & trader yang mulai impor stok sendiri",
      "Pabrikan yang butuh bahan baku impor (API-P)",
      "Perusahaan yang diminta supplier luar negeri untuk transaksi legal",
      "Eksporter yang butuh kelengkapan dokumen pabean atas nama sendiri",
    ],
    deliverables: [
      "API-U/API-P aktif di OSS-RBA atas nama perusahaan",
      "Nomor registrasi bea cukai siap untuk PIB/PEB di CEISA",
      "Peta HS Code barang + identifikasi lartas + simulasi biaya pabean",
      "Panduan alur impor/ekspor pertama (dokumen supplier, PIB/PEB, pungutan)",
    ],
    costs: [
      { item: "Jasa pengurusan API & registrasi", note: "mulai Rp 1,5 jt — termasuk pemetaan HS Code" },
      { item: "Penyesuaian kegiatan di OSS", note: "termasuk bila NIB perlu ditambah kegiatan impor" },
      { item: "Pendampingan lartas barang", note: "diestimasi terpisah sesuai izin yang diminta jenis barangnya" },
      { item: "Biaya pabean berjalan", note: "bea masuk/PPN/PPh 22 per transaksi — disimulasikan, bukan dikira-kira" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2006 (Kepabeanan) beserta perubahannya",
      "Permendag No. 36 Tahun 2021 (API-U/API-P & perizinan perdagangan)",
      "NIB berlaku sebagai nomor registrasi bea cukai per skema OSS-RBA (PP No. 5 Tahun 2021)",
    ],
  },
  "izin-distribusi": {
    whoFor: [
      "Produsen yang membangun jaringan agen/reseller lintas daerah",
      "Distributor yang diaudit legalitas oleh principal/retail modern",
      "Perusahaan yang memakai gudang di beberapa wilayah penyaluran",
      "Toko online yang berkembang ke jaringan stok & penyaluran fisik",
    ],
    deliverables: [
      "Izin usaha distribusi / fasilitas pemasaran aktif atas nama perusahaan",
      "KBLI & kegiatan OSS konsisten dengan kegiatan penyaluran",
      "Kelengkapan operasional: format surat jalan, dokumen gudang, kewajiban lapor",
      "Panduan kepatuhan penyaluran + dukungan perluasan wilayah",
    ],
    costs: [
      { item: "Jasa pengurusan izin distribusi", note: "mulai Rp 1,5 jt — sesuai struktur yang dipilih" },
      { item: "Penyesuaian KBLI & izin OSS", note: "termasuk dalam paket" },
      { item: "Fasilitas pemasaran/Warsek", note: "biaya terpisah bila skala menuntut — dievaluasi di konsultasi" },
      { item: "Pendampingan vendor onboarding", note: "opsional — kelengkapan dokumen untuk principal besar" },
    ],
    legalBasis: [
      "PP No. 29 Tahun 2021 (Penyelenggaraan Bidang Perdagangan)",
      "Permendag terkait izin berusaha perdagangan & fasilitas pemasaran",
      "PP No. 5 Tahun 2021 (perizinan berusaha berbasis risiko — OSS-RBA)",
    ],
  },

  /* ══════════════ EKSPANSI SDM & KETENAGAKERJAAN ══════════════ */
  "kitas-investor": {
    whoFor: [
      "Pemegang saham & komisaris PT PMA yang mengurus bisnis di Indonesia",
      "Direksi PMA yang butuh tinggal jangka panjang tanpa status karyawan",
      "Investor asing yang membangun bisnis baru di Indonesia",
      "Pemilik bisnis luar negeri yang rutin bolak-balik dan butuh MERP",
    ],
    deliverables: [
      "E-Visa indeks D2 + KITAS 1–2 tahun atas nama Anda",
      "MERP (izin keluar-masuk berkali-kali) selama masa berlaku",
      "Dokumen perusahaan disinkronkan (modal, akta, struktur) sebelum pengajuan",
      "Panduan batas tinggal, perpanjangan, dan jalur KITAP di masa depan",
    ],
    costs: [
      { item: "Jasa pengurusan lengkap", note: "mulai Rp 7 jt — termasuk e-visa & pendampingan imigrasi" },
      { item: "Biaya resmi imigrasi", note: "PNBP visa/ITAS sesuai durasi — tercantum transparan" },
      { item: "Untuk keluarga (dependent)", note: "dihitung per anggota — istri & anak bisa sekalian" },
      { item: "Perpanjangan tahunan", note: "harga khusus pelanggan lama — diingatkan sebelum jatuh tempo" },
    ],
    legalBasis: [
      "UU No. 6 Tahun 2011 (Keimigrasian) & perubahannya",
      "Perpres No. 10 Tahun 2021 (bidang usaha penanaman modal) beserta perubahannya",
      "Regulasi Kemenkumham/Imigrasi terkait visa indeks investor (D2) & ITAS",
    ],
  },
  "smk3": {
    whoFor: [
      "Perusahaan dengan pekerja 100 orang atau lebih (wajib sertifikasi)",
      "Perusahaan berpotensi bahaya tinggi: konstruksi, manufaktur, kimia, energi",
      "Perusahaan yang diminta sertifikat SMK3 dalam syarat tender",
      "Manajemen yang ingin sistem K3 hidup — bukan dokumen untuk lewat audit saja",
    ],
    deliverables: [
      "Gap analysis terhadap 5 kriteria PP 50/2012 + rencana kerja tertulis",
      "Sistem dokumen SMK3 lengkap (kebijakan, IDHL, perencanaan, prosedur, pemantauan)",
      "Tim internal terlatih menjalankan sistem tanpa bergantung kami",
      "Sertifikat SMK3 terbit dari Kemnaker + kalender kewajiban tindak lanjutnya",
    ],
    costs: [
      { item: "Jasa konsultansi SMK3", note: "mulai Rp 3 jt — sesuai skala & kesiapan perusahaan" },
      { item: "Biaya audit eksternal Kemnaker", note: "sesuai ketentuan & jumlah auditor yang ditugaskan" },
      { item: "Sertifikasi Ahli K3 (bila perlu)", note: "per personel — umum & khusus sesuai kebutuhan industri" },
      { item: "Pelatihan internal", note: "termasuk dalam paket pendampingan penuh" },
    ],
    legalBasis: [
      "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "PP No. 50 Tahun 2012 (penerapan SMK3 — wajib sertifikasi)",
      "Permenaker No. 26/MEN/2014 (penyelenggaraan audit eksternal SMK3)",
    ],
  },
  "bnsp": {
    whoFor: [
      "Pekerja profesional yang butuh sertifikat untuk seleksi kerja/karier",
      "Personel teknis yang disyaratkan SBU konstruksi (SKA/SKT)",
      "Perusahaan yang perlu mensertifikasi banyak pegawai untuk tender/perizinan",
      "Lulusan pelatihan vokasi yang butuh pengakuan kompetensi resmi",
    ],
    deliverables: [
      "Sertifikat Kompetensi BNSP resmi per peserta (masa berlaku 3 tahun)",
      "Skema yang tepat sesuai jabatan & unit kompetensi yang dinilai",
      "Portofolio bukti kerja yang disusun kuat bersama kami",
      "Untuk perusahaan: laporan massal seluruh peserta + jadwal perpanjangan",
    ],
    costs: [
      { item: "Jasa pendampingan", note: "mulai Rp 750 rb per peserta — termasuk persiapan portofolio" },
      { item: "Biaya uji & sertifikasi LSP", note: "sesuai skema — tercantum transparan di penawaran" },
      { item: "Pelatihan pra-uji", note: "opsional — untuk skema yang membutuhkan" },
      { item: "Program massal perusahaan", note: "tarif per peserta lebih efisien — dihitung dari jumlah & skema" },
    ],
    legalBasis: [
      "UU No. 13 Tahun 2003 (Ketenagakerjaan — kompetensi & sertifikasi)",
      "Perpres No. 23 Tahun 2004 (BNSP sebagai lembaga nasional kompetensi)",
      "UU No. 8 Tahun 2019 (perlindungan pekerja & perkembangan kompetensi)",
    ],
  },

  /* ══════════════ EKSPANSI LAINNYA ══════════════ */
  "lkpm": {
    whoFor: [
      "Semua pelaku usaha ber-NIB yang wajib lapor periodik (kecil/menengah/besar)",
      "PT PMA dengan kewajiban LKPM & tekanan kepatuhan dari BKPM",
      "Perusahaan yang menunggak lama dan ingin memulihkan riwayat laporan",
      "Perusahaan yang menyiapkan due diligence investor / pengajuan kredit bank",
    ],
    deliverables: [
      "Kalender kepatuhan: periode & tenggat LKPM sesuai skala usaha Anda",
      "LKPM tersusun & terunggah di OSS-RBA tiap periode + bukti terarsip",
      "Template data 10 menit untuk tim keuangan Anda",
      "Bila menunggak: pemulihan backlog sampai riwayat laporan bersih",
    ],
    costs: [
      { item: "Langganan per periode laporan", note: "mulai Rp 400 rb/laporan — sesuai skala usaha" },
      { item: "Pemulihan tunggakan (backlog)", note: "dihitung dari jumlah periode yang tertunggak" },
      { item: "Konsultasi kepatuhan OSS", note: "termasuk — status perizinan diperiksa sekalian" },
      { item: "Tanggapan teguran", note: "bila muncul — kami susun jawabannya" },
    ],
    legalBasis: [
      "UU No. 25 Tahun 2007 (Penanaman Modal — kewajiban laporan Pasal 17)",
      "Peraturan BKPM No. 5 Tahun 2021 (LKPM & ketentuan laporannya)",
      "Sanksi administratif per UU 25/2007 Pasal 39 (teguran s.d. pencabutan NIB)",
    ],
  },
  "higiene-sanitasi": {
    whoFor: [
      "Restoran, kafe, katering, kantin & usaha jasaboga baru/bekerja",
      "Pabrik & rumah produksi makanan yang memproses pangan untuk konsumen",
      "Usaha yang diminta SLHS oleh platform/retail untuk onboarding",
      "Pemilik yang inspeksi Dinkes mendekat dan ingin lolos di kunjungan pertama",
    ],
    deliverables: [
      "Audit pra-inspeksi dengan checklist penuh permenkes + daftar perbaikan berprioritas",
      "Pemeriksaan kesehatan pekerja diatur (lab kerja sama) — dokumen lengkap",
      "SLHS terbit dari Dinas Kesehatan atas nama usaha",
      "Panduan pemeliharaan harian untuk staf — kelayakan tetap terjaga",
    ],
    costs: [
      { item: "Jasa pendampingan SLHS", note: "mulai Rp 900 rb — sesuai jenis & skala usaha" },
      { item: "Biaya Dinkes/retribusi", note: "sesuai perda setempat — kami hitung di awal" },
      { item: "Pemeriksaan kesehatan pekerja", note: "per pekerja — tarif lab transparan" },
      { item: "Perbaikan lokasi", note: "bila audit menemukan — biasanya kecil; kami urutkan prioritasnya" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2023 (Kesehatan)",
      "PP No. 66 Tahun 2014 (Kesehatan Lingkungan)",
      "Permenkes No. 2 Tahun 2023 (higiene & sanitasi jasaboga — SLHS)",
    ],
  },
  "merek-internasional": {
    whoFor: [
      "Brand yang mulai ekspor atau dijual di marketplace internasional",
      "Bisnis yang produknya mulai ditiru/didaftarkan orang lain di luar negeri",
      "Perusahaan dengan mitra produksi/distribusi di negara lain",
      "Franchisor yang membangun jaringan lintas negara",
    ],
    deliverables: [
      "Strategi negara & kelas Nice tertulis sesuai rencana bisnis Anda",
      "Aplikasi Madrid diajukan via DJKI ke WIPO (negara-negara terpilih)",
      "Pemantauan status per negara + tanggapan pengaduan bila muncul",
      "Kalender perlindungan & perpanjangan 10 tahunan terkelola",
    ],
    costs: [
      { item: "Jasa strategi & pengajuan Madrid", note: "mulai Rp 12 jt — termasuk pemetaan negara/kelas" },
      { item: "Biaya resmi WIPO per negara", note: "tarif resmi per negara — dipetakan transparan sebelum tanda tangan" },
      { item: "Pendaftaran dasar DJKI", note: "bila merek belum terdaftar di Indonesia — diurus dulu bersamaan" },
      { item: "Pembelaan di negara tujuan", note: "bila ada pengaduan — dikoordinasikan dengan partner setempat" },
    ],
    legalBasis: [
      "UU No. 20 Tahun 2016 jo. UU No. 6 Tahun 2023 (Merek & Indikasi Geografis)",
      "Protokol Madrid (Indonesia anggota — berlaku sejak 2 Januari 2018)",
      "Tata cara aplikasi internasional melalui DJKI & WIPO (Peraturan Bersama Madrid)",
    ],
  },
};

/** Gabungan pengayaan inti (44 layanan) + 10 kategori ekspansi (100 layanan) */
export const SERVICE_ENRICHMENT: Record<string, ServiceEnrichment> = {
  ...CORE_ENRICHMENT,
  ...esgEnrichment,
  ...pendanaanEnrichment,
  ...strukturEnrichment,
  ...globalEnrichment,
  ...kepatuhanDigitalEnrichment,
  ...kreatifEnrichment,
  ...panganKesehatanEnrichment,
  ...propertiEnrichment,
  ...sdmOrganisasiEnrichment,
  ...resiliensiEnrichment,
};
