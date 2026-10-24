import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — AGRI-MARITIM: Agribisnis, Peternakan dan Maritim (7 layanan).
 * Sertifikasi sawit berkelanjutan ISPO/RSPO, legalitas perikanan (SIKPI, SIUP, SIPI),
 * perlindungan varietas tanaman (PVT), legalitas peternakan, pakan dan obat hewan,
 * kemitraan plasma inti rakyat, pemanfaatan air tanah (SIPA), dan RIPH impor hortikultura.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif, regulasi konkret,
 * menjawab pertanyaan nyata calon klien (pembaca dan mesin pencari sekaligus).
 */
export const agriMaritimContent: ServiceContent[] = [
  {
    slug: "ispo-rspo-sawit",
    tagline: "Sawit yang menghidupi jutaan keluarga kini dituntut membuktikan bahwa ia tumbuh tanpa merusak tanah, orang, dan masa depan bersama.",
    heroSub:
      "Pendampingan sertifikasi ISPO dari gap analysis prinsip-kriteria, penyiapan dokumen dan SOP lapangan, sampai audit badan sertifikasi terakreditasi serta penerbitan izin penggunaan logo. Untuk perusahaan yang menuju pasar Eropa, jalur RSPO Principles and Criteria 2018 dan ISCC kami tata pada alur data yang sama, termasuk penyiapan geolokasi plot kebun untuk kebutuhan EUDR.",
    timeline: "Gap analysis 2–4 minggu · sertifikasi penuh 4–9 bulan (menyesuaikan luasan dan kesiapan legalitas)",
    intro: [
      "Sertifikasi sawit berkelanjutan bagi pengusaha perkebunan sawit bukan lagi pilihan strategis yang ditunggu senggang, melainkan kewajiban hukum yang mengikat. Perpres Nomor 44 Tahun 2020 menetapkan Sistem Perkebunan Sawit Berkelanjutan Indonesia atau ISPO sebagai kewajiban yang menjangkau seluruh pengusaha perkebunan kelapa sawit, berdiri di atas payung UU 39/2014 tentang Perkebunan yang mengatur seluruh hubungan hukum usaha perkebunan, dari perizinan dan legalitas lahan sampai kewajiban kemitraan di tengah kebun. Sertifikatnya menguji enam kawasan sekaligus: legalitas lahan melalui HGU atau HGB, tata kelola perusahaan, praktik budidaya terbaik, pengelolaan lingkungan dan limbah, kesejahteraan pekerja, serta tanggung jawab sosial ekonomi kepada masyarakat sekitar yang mencakup prinsip FPIC atau persetujuan bebas, awal, dan terinformasi sebelum keputusan pengelolaan lahan diambil. Bagi perusahaan yang memasok pasar Eropa, tuntutannya bertambah lagi: buyer menuntut jalur RSPO Principles and Criteria 2018 dan ISCC, sementara Regulasi (UE) 2023/1115 atau EUDR menuntut data geolokasi plot kebun sebagai bukti produk bebas deforestasi yang kini ditagih sebelum kontrak pasokan diperpanjang, bukan sesudah harga sudah disepakati. Sertifikasi yang benar kini menjadi tiket tunggal untuk tetap berjualan di pasar nasional sekaligus mempertahankan kontrak di pasar global.",
      "Dalam praktik kami, temuan mayor paling sering lahir dari akar yang paling tua: legalitas lahan yang belum tertata sampai tuntas. HGU masih dalam proses, kontrak kemitraan plasma tidak lengkap, atau batas kebun dengan lahan masyarakat tidak pernah dipetakan dengan benar, dan semua itu muncul sebagai temuan mayor yang menahan terbitnya sertifikat berbulan-bulan sementara biaya audit dan biaya tim internal terus berjalan tanpa bisa dihindari. Kawasan kedua yang sering runtuh adalah data: limbah, pestisida, dan data pekerja tercatat tidak konsisten antar departemen sehingga auditor menemukan cerita yang saling bertentangan di dalam satu pemeriksaan, sesuatu yang sebenarnya bisa dicegah bila data dikumpulkan dengan template yang sama sejak awal periode laporan. FPIC yang diperlakukan sebagai formalitas berbalik menjadi konflik sosial yang menghentikan audit di tengah jalan dan mengundang pemberitaan yang tidak diinginkan. Dan ada pula perusahaan yang merasa selesai setelah sertifikat terbit, lalu terkejut saat temuan tahunan tidak ditindaklanjuti dan sertifikatnya dicabut tepat pada surveilans setelah bertahun-tahun biaya sertifikasi sudah terbayar penuh dengan usaha yang tidak sedikit.",
      "Kami menangani sertifikasi sebagai proyek yang berurutan dan terukur, bukan lomba mengumpulkan dokumen di minggu terakhir. Dimulai dari gap analysis terhadap prinsip dan kriteria ISPO yang menghasilkan daftar celah berperingkat risiko beserta roadmap penutupannya, dilanjutkan penyusunan dokumen mutu, SOP, dan rekaman lapangan bersama tim perkebunan Anda sampai benar-benar siap diperiksa, termasuk latihan menjawab pertanyaan auditor yang paling sering muncul di lapangan dan menutup rekaman yang masih bolong. Kami membantu memilih bodi sertifikasi terakreditasi, mendampingi audit dari pembukaan sampai penutupan, dan menyiapkan pembuktian atas temuan minor maupun mayor sampai sertifikat terbit dan izin penggunaan logo diperoleh. Untuk perusahaan yang memasok buyer Eropa, jalur RSPO dan ISCC kami tata pada alur data yang sama, termasuk penyiapan geolokasi plot untuk kebutuhan EUDR sebagai layanan lanjutan yang menyatu. Setelah terbit, kalender surveilans tahunan dan pemantauan temuan kami jalankan agar sertifikasi berdiri lama, bukan sekadar terbit lalu pudar ketika buyer baru mulai bertanya pada tahun-tahun berikutnya.",
    ],
    benefits: [
      { title: "Tetap boleh berjualan", desc: "ISPO adalah kewajiban hukum bagi pengusaha perkebunan sawit menurut Perpres 44/2020, sehingga sertifikat yang sah menutup risiko sanksi administratif dan menjaga pintu pasar nasional tetap terbuka untuk seluruh produk Anda tanpa perlu negosiasi ulang yang melelahkan dengan pembeli lama dan program pemerintah." },
      { title: "Premium pasar Eropa", desc: "Jalur RSPO Principles and Criteria dan ISCC menjawab tuntutan buyer Eropa sebelum mereka bertanya, sementara data geolokasi plot yang tertata membuat kewajiban EUDR menjadi langkah kecil dan bukan kejutan yang mahal saat jadwal audit buyer tiba tanpa peringatan apa pun." },
      { title: "Temuan tidak menumpuk", desc: "Gap analysis berperingkat risiko membuat perbaikan berjalan menurut prioritas yang jelas — temuan minor diselesaikan cepat dan murah sebelum sempat berubah menjadi mayor di saat surveilans tahunan tiba dengan biaya yang jauh lebih besar dari perbaikan dini." },
      { title: "Masyarakat menjadi mitra", desc: "FPIC dan kemitraan yang tertata mengubah potensi konflik menjadi dukungan yang nyata, sehingga audit kawasan sosial tidak lagi menjadi bagian paling menegangkan dari keseluruhan proses sertifikasi di hadapan auditor yang benar-benar datang ke lokasi." },
      { title: "Satu data, banyak keperluan", desc: "Dokumen ISPO yang rapi dipakai ulang untuk RSPO, laporan keberlanjutan, dan audit buyer — perusahaan tidak membangun dari nol setiap kali ada pihak baru yang meminta bukti keberlanjutan dari seluruh rantai pasok kebunnya." },
    ],
    process: [
      { title: "Gap analysis prinsip-kriteria", desc: "Seluruh operasi diperiksa terhadap prinsip dan kriteria ISPO dari legalitas sampai lingkungan — legalitas lahan menjadi pemeriksaan pertama karena di situlah temuan mayor paling sering bersembunyi dan paling mahal diperbaiki mendadak ketika audit sudah resmi dimulai." },
      { title: "Dokumen, SOP, dan rekaman", desc: "Dokumen mutu, SOP budidaya, pengelolaan limbah, data pekerja, dan dokumentasi FPIC disusun bersama tim lapangan Anda sampai benar-benar siap diperiksa auditor — bukan dokumen yang hanya rapi di komputer tetapi kosong saat ditagih di lapangan oleh tim audit." },
      { title: "Audit bodi sertifikasi", desc: "Bodi sertifikasi terakreditasi dihadiri dengan pendampingan penuh dari pembukaan sampai penutupan — temuan minor dan mayor dijawab dengan bukti perbaikan yang jelas sampai rekomendasi terbit." },
      { title: "Sertifikat, logo, surveilans", desc: "Sertifikat dan izin penggunaan logo ISPO diurus sampai terbit — kalender surveilans tahunan, pemantauan temuan, dan persiapan datanya kami jalankan agar sertifikasi bertahan bertahun-tahun." },
    ],
    requirements: [
      "Data legalitas lahan: HGU atau HGB, izin usaha perkebunan, dan status lahan plasma beserta dokumennya",
      "Dokumen perizinan lingkungan yang berlaku, baik AMDAL maupun UKL-UPL sesuai skala kegiatan",
      "Peta kebun, blok, dan batas wilayah termasuk wilayah masyarakat sekitar yang bersinggungan",
      "Data ketenagakerjaan, kesehatan dan keselamatan kerja, serta program CSR yang pernah berjalan",
      "Dokumentasi kemitraan dengan masyarakat dan riwayat komunikasi sosial yang tersedia",
      "Data operasional: produksi, pemakaian pestisida, dan pengelolaan limbah dalam periode berjalan",
    ],
    faqs: [
      { q: "Berapa biaya sertifikasi ISPO dan apa saja yang memengaruhinya?", a: "Jasa pendampingan kami mulai Rp 25 juta dan menyesuaikan luasan kebun serta kedalaman celah yang ditemukan di gap analysis. Biaya audit bodi sertifikasi terakreditasi dihitung terpisah menurut tarif penyedianya dan kami sampaikan transparan sebelum Anda mengikat diri. Biaya perbaikan lapangan, bila diperlukan, diestimasikan lebih dulu dari hasil gap analysis agar tidak ada kejutan di tengah proyek. Dengan urutan kerja seperti ini, total pengeluaran bisa direncanakan sejak awal dan tidak menumpuk di akhir." },
      { q: "Berapa lama proses sertifikasi ISPO sampai sertifikat terbit?", a: "Gap analysis berjalan 2 sampai 4 minggu, sedangkan sertifikasi penuh biasanya 4 sampai 9 bulan tergantung kesiapan legalitas lahan dan data lapangan. Kasus yang paling lama bukan karena auditnya sulit, melainkan karena legalitas lahan dan dokumentasi sosial harus dirapikan lebih dulu. Itulah alasan kami memeriksa keduanya paling awal, sebelum Anda menghabiskan biaya audit untuk berkas yang belum siap. Perusahaan dengan legalitas yang sudah tertata biasanya terbit jauh lebih cepat dari rentang atasnya karena hampir seluruh waktunya terpakai untuk audit, bukan untuk perbaikan mendadak yang berulang." },
      { q: "Apakah ISPO saja cukup, atau saya juga perlu RSPO?", a: "ISPO adalah kewajiban hukum di Indonesia, sedangkan RSPO Principles and Criteria adalah tuntutan pasar yang dipegang buyer internasional terutama di Eropa. Jika produk Anda menuju pasar premium atau buyer yang tunduk pada EUDR, jalur RSPO dan ISCC umumnya tidak terelakkan. Risiko menunda jalur RSPO biasanya bukan denda, melainkan kontrak yang pindah ke pemasok lain yang sudah bersertifikat. Kami menata keduanya pada satu alur data agar perusahaan tidak bekerja dua kali untuk dua sertifikat yang sebenarnya menuntut data inti yang sama." },
    ],
    related: ["laporan-keberlanjutan", "eudr-komoditas", "izin-lingkungan", "plasma-perkebunan-kemitraan"],
  },
  {
    slug: "izin-perikanan-sikpi",
    tagline: "Laut memberi dengan murah hati, tetapi pelabuhan hanya membukanya bagi kapal yang datang dengan dokumen lengkap di tangannya.",
    heroSub:
      "Legalitas usaha perikanan tangkap dan budidaya secara menyeluruh melalui Portal Perizinan Integral Perikanan atau PPIP milik KKP — SIUP, SIPI, SIKL, izin budidaya, pendaftaran nelayan dan alat tangkap, sampai sertifikat asal ikan untuk ekspor. Cocok bagi pemilik kapal, eksportir hasil laut, dan usaha budidaya yang menata legalitasnya sejak awal agar setiap perjalanan dan setiap muatan berdiri di atas dokumen yang sah dan siap diperiksa kapan pun dibutuhkan.",
    timeline: "2–6 minggu tergantung jenis usaha dan kelengkapan berkas kapal",
    intro: [
      "Usaha perikanan tunduk pada tumpukan izin yang sering membuat pemilik kapal bingung mana yang mengikat dan mana yang sekadar administrasi. Payungnya jelas: UU 31/2004 dan perubahannya UU 45/2009 tentang Perikanan, dituntun PP 57/2022 tentang pengelolaan perikanan negara dan penangkapan ikan yang menata kuota, wilayah penangkapan, dan alat tangkap yang boleh dipakai. Lewat Portal Perizinan Integral Perikanan atau PPIP, Kementerian Kelautan dan Perikanan menerbitkan Surat Izin Kegiatan Perikanan Indonesia atau SIKPI yang mengintegrasikan SIUP untuk izin usaha, SIPI untuk penangkapan, dan SIKL untuk kapal dalam satu sistem tunggal. Usaha budidaya juga tercakup penuh: rumput laut, ikan, udang, kepiting, sampai sidat membutuhkan izin budidaya yang sah sebelum panen boleh diperdagangkan ke pasar maupun pabrik olahan besar. Nelayan dan alat tangkap wajib didaftarkan, kapal dipasang VMS dan mengisi logbook sebagai instrumen antipembajakan, dan eksportir membutuhkan sertifikat asal ikan agar muatannya diakui oleh negara tujuan tanpa pertanyaan tambahan yang menunda bongkar muat di pelabuhan asing.",
      "Kesalahan paling mahal di dunia perikanan adalah memerintahkan kapal berlayar sebelum SIPI terbit dengan alasan mengejar musim. Kapal yang ditangkap beroperasi tanpa izin penangkapan bisa ditahan oleh aparat, tangkapannya disita, dan proses pembebasannya memakan waktu berbulan-bulan dengan biaya kru serta cicilan kapal yang terus berjalan tanpa satu rupiah pendapatan masuk ke kas. Kapal dengan VMS mati atau logbook kosong mudah dicurigai melakukan pembajakan ikan, dan tuduhan itu hampir selalu mahal harganya meski akhirnya terbukti keliru. Eksportir yang mengirim kontainer tanpa sertifikat asal ikan berisiko muatannya tertahan di negara tujuan, ditambah nama baik pemasok yang hilang sekali jalan di mata buyer yang selalu punya banyak pemasok lain menunggu. Di sisi budidaya, panen yang dijual tanpa izin budidaya membuat seluruh komoditas berada di wilayah abu-abu yang tidak dilindungi hukum ketika sengketa, pemeriksaan, atau permintaan dokumentasi dari buyer datang tiba-tiba.",
      "Kami memetakan jenis usaha Anda terlebih dahulu, karena kebutuhan izin perikanan sangat bergantung pada apakah Anda menangkap, membudidayakan, mengolah, atau mengekspor. Dari sana kami bangun berkasnya satu per satu: NIB dengan KBLI yang tepat, SIKPI melalui PPIP beserta SIUP, SIPI, dan SIKL bila Anda berlayar, registrasi nelayan dan alat tangkap, sampai izin budidaya sesuai komoditas yang Anda garap. Untuk eksportir, sertifikat asal ikan kami tata mengikuti kalender pengapalan agar kontainer tidak menunggu lama di dermaga sementara biaya demurrage berjalan harian tanpa ampun kepada kas. Instrumen antipembajakan seperti pemasangan VMS, pengisian logbook, dan pelaporan berkala kami siapkan sebagai kebiasaan operasional, bukan dokumen yang baru dicari saat diperiksa. Seluruh biaya ditulis rinci di penawaran dan revisi berkas kami garansi sampai izin terbit tanpa biaya tambahan yang tersembunyi di tengah jalan.",
    ],
    benefits: [
      { title: "Kapal bebas risiko ditahan", desc: "SIPI dan SIKL yang sah sejak kapal berlayar menutup risiko penahanan kapal dan penyitaan tangkapan — biaya pembebasan yang berbulan-bulan tidak akan pernah Anda alami selama usaha ini berjalan dengan dokumen yang benar." },
      { title: "Ekspor tanpa drama pelabuhan", desc: "Sertifikat asal ikan tersusun mengikuti kalender pengapalan sehingga muatan berangkat dan diterima di negara tujuan tanpa demurrage yang menggerus margin sekali jalan." },
      { title: "Satu portal, seluruh izin", desc: "PPIP mengintegrasikan SIUP, SIPI, dan SIKL dalam satu sistem — kami tata sekali agar pembaruan periode berikutnya tidak mengulang penderitaan yang sama." },
      { title: "Bebas tuduhan pembajakan ikan", desc: "VMS aktif, logbook terisi, dan pelaporan terjadwal menjadi bukti operasi yang bersih saat kapal diperiksa di laut maupun ketika dokumentasinya diminta di pelabuhan." },
      { title: "Budidaya berdiri di tanah yang sah", desc: "Izin budidaya per komoditas membuat panen Anda sah diperdagangkan dan terlindungi saat sengketa, audit buyer, atau permintaan dokumentasi asal-usul barang datang mendadak dari buyer internasional." },
    ],
    process: [
      { title: "Pemetaan jenis usaha", desc: "Tangkap, budidaya, olah, atau ekspor — kami petakan izin yang benar-benar mengikat sebelum satu berkas pun disusun, termasuk pemilihan KBLI yang sesuai dengan kegiatan nyata, bukan KBLI yang sekadar terlihat mirip." },
      { title: "NIB dan berkas teknis", desc: "KBLI yang tepat, spesifikasi kapal dan alat tangkap, serta dokumen lokasi dan komoditas budidaya disiapkan sesuai format yang diminta sistem PPIP." },
      { title: "Pengajuan ke PPIP", desc: "SIKPI beserta SIUP, SIPI, dan SIKL diajukan dengan komunikasi aktif kepada KKP — status pengajuan kami pantau dan kekurangan berkas dijawab cepat sampai izin terbit." },
      { title: "Kepatuhan berkelanjutan", desc: "Registrasi alat tangkap, pemasangan VMS, pengisian logbook, sertifikat asal ikan, dan pelaporan berkala dijadwalkan sebagai rutinitas operasional yang tidak bisa dilewatkan pada periode pelayaran mana pun." },
    ],
    requirements: [
      "Dokumen badan usaha: NIB, akta pendirian, dan NPWP yang aktif",
      "Bukti kepemilikan atau sewa kapal beserta spesifikasi dan gambar teknisnya",
      "Data alat tangkap yang digunakan beserta lokasi penangkapan yang dituju",
      "Lokasi dan rencana budidaya beserta komoditasnya (untuk usaha budidaya)",
      "Daftar awak kapal dan dokumen kru yang berlaku (bila relevan)",
      "Dokumen ekspor terakhir seperti PEB atau kontrak pembeli (untuk sertifikat asal ikan)",
    ],
    faqs: [
      { q: "Berapa biaya mengurus izin perikanan?", a: "Jasa kami mulai Rp 3,5 juta menyesuaikan jenis usaha, jumlah kapal, dan izin yang dibutuhkan. Biaya negara untuk tiap izin dihitung terpisah sesuai ketentuan KKP dan ditulis rinci di penawaran sebelum pengajuan dimulai. Untuk eksportir, sertifikat asal ikan dihitung per pengapalan karena kewajibannya memang melekat pada tiap muatan. Anda membayar sesuai kebutuhan nyata usaha, bukan paket yang dipaksakan untuk izin yang sebenarnya tidak Anda perlukan tahun ini." },
      { q: "Berapa lama prosesnya dan apa risikonya jika saya berlayar lebih dulu?", a: "Pengurusan normal berjalan 2 sampai 6 minggu tergantung jenis usaha dan kelengkapan berkas kapal. Kapal yang beroperasi sebelum SIPI terbit berisiko ditahan dengan tangkapan disita, dan pembebasannya bisa memakan waktu berbulan-bulan sementara kru tetap digaji. Menunggu beberapa minggu jauh lebih murah daripada membiarkan kapal diam di pelabuhan tanpa pendapatan. Kami selalu menyusun urutan pengajuan agar kapal pertama bisa berlayar secepat mungkin sementara kapal-kapal lain menyusul secara berurutan." },
      { q: "Apa beda SIUP, SIPI, dan SIKPI?", a: "SIUP adalah izin usaha perikanan yang menyatakan perusahaan Anda sah menjalankan bisnis perikanan. SIPI adalah izin penangkapan yang mengikat kapal tertentu untuk berlayar dan menangkap, sedangkan SIKL melekat pada kapalnya sendiri sebagai identitas kepeseraannya. Melalui PPIP, ketiganya kini diterbitkan dalam satu integrasi bernama SIKPI sehingga pengurusannya jauh lebih sederhana daripada dulu ketika berkas masih harus dijilid dan dibawa ke banyak meja pemeriksa. Pembaruan periode berikutnya juga cukup dijalankan di satu sistem yang sama." },
    ],
    related: ["nib-oss", "api-bea-cukai", "haccp-gmp-pangan", "lartas-ekspor-komoditas"],
  },
  {
    slug: "pvt-varietas-tanaman",
    tagline: "Benih yang Anda ciptakan hari ini dapat menjadi hak yang melindungi panen orang banyak di masa depan yang panjang.",
    heroSub:
      "Pendaftaran Perlindungan Varietas Tanaman atau PVT untuk pemulia, perusahaan benih, universitas, dan lembaga riset yang menghasilkan varietas baru. Hak eksklusif memproduksi dan memperdagangkan materi perbanyakan bekerja seperti paten di dunia tanaman — kami dampingi dari kaji kelayakan dan pemeriksaan DUS sampai sertifikat terbit beserta strategi monetisasi lisensi dan royaltinya.",
    timeline: "Pengajuan 2–4 minggu · pemeriksaan DUS 6–24 bulan sampai sertifikat terbit",
    intro: [
      "Varietas tanaman baru adalah aset yang jarang dilindungi orang, padahal payung hukumnya sudah berdiri sejak lama, terus diperkuat, dan tidak berubah arah sejak era perlindungan varietas dimulai. UU 22/2019 tentang Sistem Budidaya Tanaman memberi pemulia hak eksklusif atas varietas yang dihasilkannya melalui Perlindungan Varietas Tanaman atau PVT, yang bekerja seperti paten di dunia tanaman. Syaratnya lima dan tidak bisa ditawar: varietas baru, unik, homogen, stabil, dan bernama. Pengujian DUS atau Distinct, Uniform, Stable dilakukan oleh Pusat Perlindungan Varietas Pertanian atau PPV di bawah Kementerian Pertanian, dengan peraturan teknisnya ditetapkan dalam peraturan menteri tentang pendaftaran dan perlindungan varietas serta sistem perbenihan tanaman. Hak yang terbit bukan sekadar sertifikat kehormatan: pemegangnya berhak eksklusif memproduksi dan memperdagangkan materi perbanyakan, dengan dua keseimbangan yang diatur hukum, yaitu lisensi wajib untuk kepentingan publik dan pengecualian petani yang menyimpan serta memperbanyak benih untuk tanam sendiri pada lahan mereka masing-masing.",
      "Dalam praktik kami, kerugian terbesar justru dialami pemulia yang baik: varietas unggulan disebarluaskan tanpa didaftarkan, lalu peniru memproduksinya bebas di pasar dan tidak ada jalan hukum yang bisa dipakai untuk menuntut. Nama varietas yang tidak unik atau berkas data pengamatan yang tidak tertata membuat pengajuan gugur di tengah jalan setelah bertahun-tahun menunggu tanpa kepastian yang bisa diceritakan kepada manajemen atau pendana. Perusahaan benih yang menanam varietas milik pihak lain tanpa lisensi bisa tersandera sengketa justru saat produksinya sedang membesar dan kontraknya sedang ramai dipenuhi pesanan baru. Di sisi lain, lembaga riset dan universitas yang tidak memperdagangkan haknya membiarkan aset strategis mati di almari — padahal benih adalah salah satu aset paling bernilai yang bisa menjadi pendapatan royalti berkelanjutan dan modal pembicaraan yang kuat dengan industri benih nasional.",
      "Kami memulai dari kaji kelayakan yang jujur: apakah varietas Anda benar-benar memenuhi lima syarat dan siap diuji DUS, termasuk pemilihan nama yang lolos kriteria dan pemilihan varietas pembanding yang paling tepat. Berkas dan data pengamatan kami susun dengan standar yang diharapkan PPV, lalu pengajuan dijalankan dan pemeriksaan DUS didampingi sampai selesai, dengan rentang waktu realistis 6 sampai 24 bulan tergantung komoditas, musim tanam, dan kecepatan pemeriksa menyusun jadwal kunjungannya. Setelah sertifikat terbit, kami bantu menata strategi monetisasi: lisensi kepada perusahaan benih, skema royalti yang terukur, dan penyesuaian yang hormat dengan hak petani yang dijamin hukum. Untuk lembaga riset dan universitas, portofolio PVT kami tata agar menjadi aset kekayaan intelektual yang bisa ditunjukkan dengan bangga kepada investor, mitra industri, dan penilai program hibah.",
    ],
    benefits: [
      { title: "Hak eksklusif atas benih Anda", desc: "Sertifikat PVT menjadi bukti kepemilikan yang sah atas varietas — peniruan bisa dituntut dan lisensi bisa dijual atau disewakan dengan harga yang layak sepanjang masa perlindungan." },
      { title: "Nilai varietas naik", desc: "Varietas bersertifikat berharga lebih tinggi di mata perusahaan benih, program pemerintah, dan mitra distribusi karena asal-usul serta kualitasnya terbukti lewat dokumen resmi negara." },
      { title: "Aset IP untuk pendanaan", desc: "Portofolio PVT memperkuat proposal hibah riset, kerja sama universitas dengan industri, dan valuasi perusahaan saat mencari investor yang menilai aset tidak berwujud secara serius." },
      { title: "Monetisasi yang adil", desc: "Skema lisensi dan royalti kami tata dengan memahami lisensi wajib untuk kepentingan publik dan pengecualian petani agar strategi Anda bertahan di depan hukum maupun di depan mitra." },
      { title: "Proses yang tidak buntu", desc: "Berkas dan data DUS yang tertata membuat pemeriksaan PPV berjalan terus — bukan berhenti di tengah jalan setelah bertahun-tahun menunggu kabar yang tidak pernah datang dari pengajuan yang tidak tertata." },
    ],
    process: [
      { title: "Kaji kelayakan dan penamaan", desc: "Lima syarat varietas baru, unik, homogen, stabil, dan bernama kami periksa bersama data pemuliaan — nama usulan dipersiapkan agar tidak gugur di tengah jalan." },
      { title: "Berkas dan data pengamatan", desc: "Data karakteristik varietas dan pembandingnya disusun sesuai format PPV sehingga pemeriksaan DUS tidak menemukan celah administratif yang bisa dipersoalkan di tengah pemeriksaan nanti." },
      { title: "Pengajuan dan pemeriksaan DUS", desc: "Pengajuan dijalankan dan pemeriksaan lapangan didampingi penuh — komunikasi dengan pemeriksa terjaga sampai hasil pengujian keluar." },
      { title: "Sertifikat dan monetisasi", desc: "Sertifikat PVT terbit dan langsung dituntun menjadi aset: lisensi kepada perusahaan benih, skema royalti, dan strategi pemasaran benih bersertifikat." },
    ],
    requirements: [
      "Riwayat pemuliaan dan data pengamatan karakteristik varietas yang tersimpan",
      "Sampel benih sesuai ketentuan pemeriksaan DUS yang berlaku",
      "Nama usulan varietas beserta alasan pemilihannya",
      "Varietas pembanding yang paling mirip (bila diketahui oleh pemulia)",
      "Identitas pemegang hak dan perjanjian internal bila varietas hasil kerja pegawai peneliti",
      "Dokumen kepemilikan atau kesepakatan dengan institusi tempat pemuliaan dilakukan",
    ],
    faqs: [
      { q: "Berapa biaya pendaftaran PVT?", a: "Jasa kami mulai Rp 4,5 juta untuk kaji kelayakan, penyusunan berkas, dan pengajuan. Biaya pemeriksaan DUS dan pendaftaran ke PPV dihitung sesuai tarif resminya per komoditas dan kami sampaikan transparan sebelum berkas masuk. Komoditas yang pengamatannya lebih panjang biasanya menanggung biaya pemeriksaan yang lebih besar. Tidak ada biaya yang mengagetkan di tengah proses karena semuanya tertulis jelas di awal sebelum berkas pertama masuk." },
      { q: "Kenapa pemeriksaan DUS bisa memakan waktu sampai dua tahun?", a: "Pengajuan administratif berjalan 2 sampai 4 minggu, tetapi pemeriksaan DUS menuntut pengamatan karakteristik varietas pada musim tanam nyata, sehingga rentang 6 sampai 24 bulan adalah hal yang wajar menurut komoditas. Keterlambatan yang lebih panjang biasanya berasal dari data pengamatan yang tidak tertata atau nama varietas yang gugur. Keduanya kami rapikan di awal agar waktunya terpakai untuk pengamatan, bukan untuk memperbaiki berkas. Risiko paling mahal justru menunda pendaftaran sambil terus menjual benih — hak yang tidak didaftarkan nyaris mustahil dituntut di depan hukum." },
      { q: "Apa beda PVT dengan paten?", a: "Paten melindungi penemuan teknis seperti alat, proses, atau senyawa, sedangkan PVT melindungi varietas tanaman itu sendiri. Untuk pemulia tanaman, PVT adalah jalur perlindungan yang tepat karena paten tidak dirancang menjangkau makhluk hidup yang diperbanyak sebagai benih. Keduanya bisa berjalan bersama bila penelitian Anda menghasilkan varietas sekaligus teknik penunjang produksinya. Portofolio keduanya bersama-sama memperkuat posisi tawar Anda di hadapan industri dan mitra distribusi." },
    ],
    related: ["hak-cipta-paten", "pendaftaran-merek", "hibah-riset", "izin-peternakan-nak"],
  },
  {
    slug: "izin-peternakan-nak",
    tagline: "Usaha ternak yang sehat tumbuh dari dua sumber: hewan yang dirawat dengan sungguh-sungguh dan izin yang lengkap sejak awal.",
    heroSub:
      "Legalitas usaha peternakan, pakan, dan obat hewan dari ujung ke ujung — NIB dan rekomendasi teknis dinas, sertifikat CPB, izin edar pakan dan obat hewan, pengangkutan ternak lintas daerah, sampai sertifikat veterinaria untuk ekspor. Semua disusun sesuai skala usaha agar Anda tidak mengurus lebih dari yang wajib.",
    timeline: "2–6 minggu tergantung skala usaha dan jenis izin",
    intro: [
      "Bisnis ternak menyentuh lebih banyak regulasi daripada yang disadari banyak pemilik farm ketika memulai. Payungnya UU 18/2009 dan perubahannya UU 41/2014 tentang Peternakan dan Kesehatan Hewan, sedangkan struktur perizinannya mengikuti PP 7/2021 tentang kemudahan berusaha yang menuntun NIB dan perizinan berusaha berbasis risiko. Usaha pemeliharaan skala besar menuntut rekomendasi teknis dinas peternakan dan izin lingkungan sebelum beroperasi penuh. Produknya juga diatur tuntas: ternak perlu sertifikat CPB atau Cara Produksi Ternak yang Baik, pakan industri memerlukan izin edar HPA atau Higiene Produksi Pakan melalui sertifikat HPDH, dan obat hewan tunduk pada izin edar OHT dengan prinsip apotek hewan bagi pemakai profesional berizin NVK atau Narkoba Veterinaria. Pengangkutan ternak lintas daerah membutuhkan IPT, sementara ekspor menuntut sertifikat veterinaria yang hanya terbit bila seluruh rantai di atasnya tertata.",
      "Farm besar yang beroperasi tanpa izin lingkungan hidup risikonya bukan sekadar denda: keluhan bau dan limbah dari tetangga bisa berujung pemadaman kegiatan dan konflik yang bertahun-tahun tidak selesai. Produsen pakan yang berjualan tanpa izin edar bermain di tanah yang rapuh — barang bisa disita dan kontrak dengan mitra korporasi seketika tertutup begitu vendor audit menemukannya. Penggunaan obat hewan tanpa pemahaman NVK yang benar meninggalkan residu yang baru ketahuan saat buyer menolak pengiriman di ujung rantai. Pengangkutan ternak tanpa IPT membuat muatan dikembalikan di gerbang kabupaten dengan kerugian yang dihitung per kepala. Dan epidemi seperti flu burung atau PMK mengingatkan semua orang bahwa biosecurity bukan jargon — farm tanpa kesiapannya bisa ditutup dalam hitungan hari.",
      "Kami memetakan kebutuhan Anda berdasarkan skala dan arah bisnis: pemeliharaan, produksi pakan, perdagangan obat hewan, atau kombinasi ketiganya sekaligus. Dari peta itu kami bangun berkasnya berurutan: NIB dengan KBLI yang tepat, rekomendasi teknis dinas peternakan, izin lingkungan bila wajib, sertifikat CPB, izin edar pakan dan OHT, sampai IPT dan sertifikat veterinaria bila Anda menyeberangi provinsi atau negara. SOP biosecurity dan kesehatan hewan kami susun sebagai dokumen yang hidup di lapangan, lengkap dengan pencatatan yang bisa ditunjukkan kapan saja. Pelaporan berkala dan pembaruan izin kami jadwalkan agar farm tidak terkejut di tengah siklus produksi. Semua biaya tertulis rinci sejak penawaran, dan berkas kami revisi sampai izin terbit.",
    ],
    benefits: [
      { title: "Farm berdiri di atas legalitas penuh", desc: "NIB, rekomendasi teknis, dan izin lingkungan yang benar membuat operasi tidak bisa dibongkar oleh satu keluhan masyarakat atau satu pemeriksaan mendadak." },
      { title: "Produk masuk ritel modern", desc: "Sertifikat CPB dan izin edar yang sah menjadi syarat masuk prosesor besar, ritel modern, dan program pemerintah yang menuntut dokumen lengkap." },
      { title: "Pakan dan obat aman dari penyitaan", desc: "Izin edar HPA dan OHT melindungi barang dagangan Anda dari penyitaan serta menutup risiko kontrak yang berhenti tahu-tahu saat vendor audit menemukan celahnya." },
      { title: "Risiko zoonosis terkendali", desc: "SOP biosecurity yang hidup di lapangan membuat farm bertahan saat wabah datang — bukan bubar dalam hitungan hari dengan kerugian yang dihitung per kepala." },
      { title: "Siap ekspor", desc: "Sertifikat veterinaria hanya terbit bila rantai di bawahnya tertata — dan kami menatanya sejak hari pertama, bukan saat kontainer sudah dipesan." },
    ],
    process: [
      { title: "Pemetaan skala dan kebutuhan", desc: "Pemeliharaan, pakan, obat hewan, atau semuanya — peta izin disusun sesuai skala usaha, populasi ternak, dan arah pasar yang Anda tuju." },
      { title: "NIB, rekomendasi teknis, lingkungan", desc: "Dasar perizinan berusaha dibangun lebih dulu, termasuk rekomendasi dinas peternakan dan izin lingkungan bila skala usaha mewajibkannya." },
      { title: "CPB dan izin edar", desc: "Sertifikat CPB, izin edar pakan melalui HPDH, dan OHT untuk obat hewan diurus bersamaan agar produk bisa segera diperdagangkan secara sah." },
      { title: "Kepatuhan berjalan", desc: "IPT untuk pengangkutan lintas daerah, SOP biosecurity, dan pelaporan berkala dijadwalkan sebagai rutinitas farm, bukan dokumen musiman." },
    ],
    requirements: [
      "Dokumen badan usaha: NIB, akta, dan NPWP yang aktif",
      "Bukti penguasaan lahan atau lokasi farm beserta rencana kapasitas populasi ternak",
      "Data jenis dan populasi ternak yang akan dipelihara",
      "Dokumen lingkungan yang tersedia atau rencana pengelolaannya",
      "Data produk pakan atau obat hewan yang akan diedarkan (untuk izin edar)",
      "Data personel teknis dan dokumen NVK yang dimiliki (bila relevan)",
    ],
    faqs: [
      { q: "Berapa biaya legalitas usaha peternakan?", a: "Jasa kami mulai Rp 2,5 juta, menyesuaikan skala usaha dan jumlah izin yang dibutuhkan, karena farm pemeliharaan besar dengan izin edar pakan memiliki peta biaya yang berbeda dari peternakan menengah. Biaya negara untuk tiap izin ditulis rinci sebelum pengajuan dimulai. Perbaikan sarana bila diminta saat audit CPB diestimasikan lebih dulu agar tidak mengejutkan anggaran. Anda selalu tahu pos mana yang sedang dibayar dan untuk apa." },
      { q: "Berapa lama prosesnya dan apa risiko jika farm sudah berjalan tanpa izin?", a: "Pengurusan normal berjalan 2 sampai 6 minggu tergantung skala dan kelengkapan dokumen awal. Farm yang beroperasi tanpa izin lingkungan dan rekomendasi teknis hidup di atas risiko pemadaman kegiatan, denda, dan konflik masyarakat yang jauh lebih mahal daripada biaya pengurusannya. Karena itu kami selalu menata dasar perizinan lebih dulu sebelum menyentuh izin edar produk. Farm yang legalnya tertata juga lebih mudah menambah izin baru saat membesar." },
      { q: "Apakah peternakan kecil juga wajib mengurus semua izin ini?", a: "Tidak semua. Struktur perizinan berbasis risiko dalam PP 7/2021 membuat kewajiban menyesuaikan skala usaha, populasi ternak, dan arah penjualan Anda. Peternakan kecil biasanya cukup dengan NIB dan rekomendasi teknis, sementara farm besar dengan produk pakan atau obat hewan menanggung lapisan izin yang lebih panjang. Kami petakan batasnya sejak pertemuan pertama agar Anda tidak mengurus lebih dari yang wajib dan tidak kekurangan yang penting." },
    ],
    related: ["nib-oss", "sertifikasi-halal", "izin-limbah-b3", "pvt-varietas-tanaman"],
  },
  {
    slug: "plasma-perkebunan-kemitraan",
    tagline: "Kebun yang bertahan puluhan tahun hanyalah kebun yang sejak hari pertama membagi nasibnya dengan desa di sekitarnya.",
    heroSub:
      "Perancangan kemitraan plasma inti rakyat yang memenuhi kewajiban hukum minimal 20 persen lahan menurut Pasal 21 UU 39/2014. Desain skema, perjanjian kemitraan dengan petani, penataan legalitas lahan plasma, kepatuhan FPIC yang terdokumentasi, sampai audit kemitraan berkala — semua dirancang sebelum konflik punya kesempatan lahir.",
    timeline: "Perancangan dan negosiasi 4–8 minggu sesuai jumlah kelompok tani",
    intro: [
      "Kemitraan plasma bagi pengusaha perkebunan bukan program filantropi yang boleh ditunda senggang, melainkan kewajiban hukum yang mengikat. Pasal 21 UU 39/2014 tentang Perkebunan menegaskan setiap pengusaha perkebunan wajib mengalokasikan minimal 20 persen lahan untuk kemitraan dengan petani masyarakat setempat, dan kewajiban itu melekat pada perizinan usaha sebagaimana diatur Peraturan Menteri Pertanian tentang perizinan usaha perkebunan. Bentuk pelaksanaannya dituntun PP 61/2016 tentang Kemitraan Perkebunan yang mengenal pola plasma kelola dan modal kelola beserta mekanisme pembagian hasilnya. Dalam praktik sawit, kemitraan ini juga menentukan harga buah segar atau FFB yang menjadi napas ekonomi ribuan keluarga di sekitar kebun. Sertifikasi seperti ISPO dan RSPO turut menguji kemitraan ini, sehingga kelemahannya langsung terlihat oleh auditor maupun buyer.",
      "Sengketa plasma adalah akar konflik perkebunan di Indonesia, dan hampir selalu lahir dari perancangan yang tergesa di masa lalu. Lahan plasma yang tidak pernah dilegalisir dengan benar akan diklaim ulang ketika harga komoditas naik, dan klaim itu datang bersama aksi yang menghentikan operasi kebun. Perjanjian kemitraan yang tidak tertulis atau pembagian hasil yang tidak transparan menjadi bahan bakar ketegangan yang meledak tepat di musim panen. Perluasan kebun tanpa konsultasi yang layak melanggar prinsip FPIC dan mengubah masyarakat dari mitra menjadi lawan dalam satu keputusan. Konsekuensinya bukan hanya kerugian hari itu: izin bisa dibekukan, sertifikasi ISPO atau RSPO tersandung temuan mayor, dan pembeli internasional mempercepat kepergian mereka.",
      "Kami merancang kemitraan sebelum konflik punya kesempatan lahir. Dimulai dari pemetaan sosial dan lahan, kami menghitung alokasi plasma yang benar, memilih skema yang cocok antara plasma kelola dan modal kelola, lalu menyusun rumus pembagian hasil dan penentuan harga FFB yang bisa dipertanggungjawabkan di depan semua pihak. Perjanjian kemitraan dengan KUD atau kelompok tani kami susun sebagai dokumen hukum yang adil dan terbaca kedua pihak, disertai penataan legalitas lahan plasma bersama jasa pertanahan. Konsultasi masyarakat dan bukti FPIC kami dokumentasikan agar kepatuhan bisa dibuktikan, bukan sekadar diklaim, terutama saat perizinan, perluasan, atau audit sertifikasi datang. Setelah berjalan, audit kemitraan berkala kami jadwalkan agar hubungan ini tetap sehat seumur hidup kebun.",
    ],
    benefits: [
      { title: "Kewajiban 20 persen dipenuhi dengan benar", desc: "Alokasi plasma dihitung, didokumentasikan, dan dilaporkan sesuai Pasal 21 UU 39/2014 — bukan sekadar angka di peta yang tidak bisa dibuktikan saat diperiksa." },
      { title: "Konflik dicegah sebelum menyala", desc: "Skema, pembagian hasil, dan harga FFB yang disepakati di awal menghilangkan bahan bakar sengketa yang biasanya meledak tepat di musim panen." },
      { title: "Perizinan dan perluasan lancar", desc: "Dokumentasi kemitraan yang tertata menjadi syarat yang selalu siap saat pengajuan izin, perluasan kebun, atau pemeriksaan pemerintah datang." },
      { title: "Sertifikasi tidak tersandung temuan sosial", desc: "Kemitraan dan FPIC yang terbukti membuat pemeriksaan ISPO atau RSPO tidak menemukan titik lemah di kawasan sosial yang paling sensitif." },
      { title: "Hubungan mitra seumur kebun", desc: "Perjanjian yang adil dan audit berkala menjaga kepercayaan petani — aset yang tidak bisa dibeli belakangan begitu konflik sudah terjadi." },
    ],
    process: [
      { title: "Pemetaan sosial dan lahan", desc: "Profil masyarakat, kelompok tani, dan status lahan dipetakan dengan teliti — fondasi yang menentukan bentuk kemitraan yang realistis dan bisa dijalankan." },
      { title: "Desain skema kemitraan", desc: "Pilihan plasma kelola atau modal kelola, rumus pembagian hasil, dan mekanisme harga FFB disusun dengan angka yang bisa dipertahankan di depan semua pihak." },
      { title: "Perjanjian dan legalitas lahan", desc: "Perjanjian kemitraan dengan KUD atau kelompok tani disusun sampai tuntas, sementara legalitas lahan plasma ditata bersama jasa pertanahan." },
      { title: "FPIC, dokumentasi, audit", desc: "Konsultasi masyarakat didokumentasikan sebagai bukti kepatuhan FPIC — audit kemitraan berkala dijadwalkan agar hubungan tetap sehat bertahun-tahun." },
    ],
    requirements: [
      "Dokumen izin usaha perkebunan dan legalitas lahan inti yang tersedia",
      "Peta lokasi kebun beserta perhitungan luas untuk alokasi minimal 20 persen",
      "Profil KUD atau kelompok tani setempat dan jumlah petani yang terlibat",
      "Riwayat komunikasi dengan masyarakat dan persoalan sosial yang pernah terjadi (bila ada)",
      "Dokumen kemitraan lama yang berjalan (bila ada) untuk ditinjau ulang",
      "Rencana pengembangan atau perluasan kebun yang akan datang",
    ],
    faqs: [
      { q: "Berapa biaya perancangan kemitraan plasma?", a: "Jasa kami mulai Rp 8,5 juta untuk satu paket perancangan beserta penyusunan perjanjiannya, menyesuaikan skala kebun dan jumlah kelompok tani yang terlibat. Biaya legalisasi lahan dan notaris dihitung terpisah sesuai kebutuhan dokumennya. Fasilitasi konsultasi masyarakat diestimasikan lebih dulu agar anggaran sosial tidak mengejutkan di tengah proses. Semua pos tertulis di penawaran sebelum pekerjaan dimulai." },
      { q: "Berapa lama dan apa risikonya jika kemitraan ditunda?", a: "Perancangan dan negosiasi berjalan 4 sampai 8 minggu tergantung jumlah kelompok tani dan kerumitan lahan. Menunda penataan plasma berarti menunda perizinan dan perluasan, sekaligus membiarkan sengketa menumpuk yang kelak bisa membekukan izin. Memperbaiki kemitraan setelah konflik terbakar selalu jauh lebih mahal daripada merancangnya dari awal. Karena itu kami menasihatkan kemitraan disusun bersamaan dengan perizinan, bukan setelahnya." },
      { q: "Apakah kewajiban 20 persen berlaku untuk semua perusahaan perkebunan?", a: "Pasal 21 UU 39/2014 meletakkan kewajiban minimal 20 persen lahan untuk kemitraan sebagai aturan umum bagi pengusaha perkebunan, dengan penyesuaian bentuk kemitraan yang diakui PP 61/2016. Pengecualian tertentu berlaku sesuai kondisi lahan dan asal-usul kebun, dan penafsirannya butuh ketelitian karena keliru di sini mahal harganya. Kami periksa posisi Anda terhadap aturan itu di awal sebelum skema disusun. Dengan begitu skema yang dibangun berdiri di atas dasar hukum yang benar sejak hari pertama." },
    ],
    related: ["ispo-rspo-sawit", "sengketa-tanah-penyelesaian", "hgu-hgb-pertanahan", "legal-drafting"],
  },
  {
    slug: "izin-air-tanah-sipa",
    tagline: "Air yang Anda angkat dari bumi hari ini adalah hak generasi yang akan datang, dan negara menghitungnya lewat meter yang terpasang.",
    heroSub:
      "Perizinan pemanfaatan air tanah atau SIPA untuk pabrik, hotel, apartemen, perumahan, dan gedung yang memakai sumur bor. Dari identifikasi kebutuhan air dan survei hidrogeologi oleh ahli bersertifikat, taksiran penurunan muka air, pengajuan izin, sampai pemasangan meter, retribusi, dan laporan pengambilan berkala.",
    timeline: "Survei hidrogeologi 2–4 minggu · izin terbit 1–3 bulan",
    intro: [
      "Banyak pengelola gedung dan pabrik baru menyadari ada izin air tanah ketika denda sudah datang ke mejanya. Hukumnya berlapis dan tegas: UU 17/2019 tentang Sumber Daya Air bersama PP 121/2015 beserta perubahannya yang mengatur pemanfaatan air tanah secara teknis. Pihak yang mengambil air tanah melalui sumur bor wajib memiliki izin SIPA yang diterbitkan dinas sumber daya air di provinsi atau kabupaten sesuai kewenangan, umumnya melalui sistem e-perizinan. Pengajuan dibangun di atas survei hidrogeologi oleh ahli kaji tanah bersertifikat, taksiran penurunan muka air, dan rencana pengambilan yang mencantumkan debit sesuai kebutuhan nyata. Setelah izin terbit, kewajibannya berlanjut: pemasangan meter, pembayaran retribusi penggunaan air tanah, dan laporan pengambilan berkala.",
      "Sumur tanpa izin bukan sekadar melanggar administrasi: pemerintah dapat menutup sumur tersebut dan menagih retribusi tertunggak dalam satu kali pukulan untuk berbulan-bulan. Meter yang tidak dipasang membuat besarnya pengambilan ditaksir resmi oleh pemerintah, dan taksiran itu hampir selalu lebih tinggi dari kenyataan. Pengambilan yang melampaui debit izin berisiko pencabutan, dan dalam wilayah dengan masalah amblesan seperti Jakarta, pengetatan pengawasan terus meningkat dari tahun ke tahun. Saat audit kepatuhan klien korporat atau perluasan usaha datang, SIPA yang hilang menjadi pertanyaan pertama yang tidak bisa dijawab setengah hati.",
      "Kami mulai dari identifikasi kebutuhan air dan pemeriksaan dokumen yang sudah Anda miliki, lalu menata survei hidrogeologi bila diperlukan, termasuk rencana pengambilan dan taksiran penurunan muka air yang disusun ahli bersertifikat. Berkas SIPA diajukan ke dinas sumber daya air yang berwenang dengan komunikasi aktif sampai izin terbit. Setelah itu kami tata pemasangan meter, kalender retribusi penggunaan air tanah, dan laporan pengambilan berkala agar kewajiban berjalan tanpa drama. Untuk properti yang sedang membangun, alur ini kami selaraskan dengan izin lingkungan dan PBG sehingga satu rangkaian kepatuhan tidak berulang tiga kali dengan tiga konsultan berbeda.",
    ],
    benefits: [
      { title: "Sumur aman dari penutupan", desc: "Izin yang sah menutup risiko penyegelan sumur oleh petugas dan tagihan retribusi tertunggak yang datang sekaligus untuk berbulan-bulan." },
      { title: "Retribusi dihitung dari data nyata", desc: "Meter terpasang dan laporan berkala tertata — Anda membayar sesuai pengambilan yang tercatat, bukan taksiran resmi yang hampir selalu lebih tinggi." },
      { title: "Debit sesuai kebutuhan riil", desc: "Rencana pengambilan disusun dari kebutuhan operasional yang dihitung benar — tidak berlebih yang menyulut penolakan, tidak kurang yang melilit operasi." },
      { title: "Lega saat audit dan perluasan", desc: "Arsip izin, meter, dan laporan yang rapi menjawab audit kepatuhan klien maupun proses perluasan usaha tanpa kepanikan mendadak." },
      { title: "Satu alur kepatuhan properti", desc: "SIPA kami selaraskan dengan izin lingkungan dan PBG — satu rangkaian dokumen yang saling menopang, tanpa pekerjaan ganda." },
    ],
    process: [
      { title: "Identifikasi kebutuhan air", desc: "Kebutuhan operasional dan kondisi sumur existing kami petakan — dokumen yang sudah ada diperiksa lebih dulu agar tidak ada pekerjaan ganda." },
      { title: "Survei hidrogeologi", desc: "Ahli kaji tanah bersertifikat menyiapkan rencana pengambilan dan taksiran penurunan muka air sesuai kaidah hidrogeologi yang berlaku." },
      { title: "Pengajuan SIPA", desc: "Berkas diajukan ke dinas sumber daya air yang berwenang lewat sistem e-perizinan dengan komunikasi aktif sampai izin terbit." },
      { title: "Meter, retribusi, pelaporan", desc: "Pemasangan meter, kalender pembayaran retribusi penggunaan air tanah, dan laporan pengambilan berkala dijadwalkan sebagai rutinitas bulanan." },
    ],
    requirements: [
      "Data lokasi: hak atas tanah, izin bangunan, dan kegiatan yang memakai air",
      "Perkiraan kebutuhan air harian operasional beserta dasar perhitungannya",
      "Data sumur existing: kedalaman, debit, dan kondisinya (bila sudah ada)",
      "Riwayat penggunaan air seperti tagihan PDAM atau catatan pengambilan",
      "Dokumen izin lingkungan yang tersedia (bila ada)",
    ],
    faqs: [
      { q: "Berapa biaya mengurus SIPA?", a: "Jasa kami mulai Rp 5,5 juta menyesuaikan kebutuhan survei dan kerumitan berkas. Biaya survei hidrogeologi oleh ahli bersertifikat dihitung terpisah bila belum Anda miliki, dan retribusi penggunaan air tanah dibayar kepada pemerintah daerah sesuai volume yang tercatat di meter. Semua pos biaya tertulis rinci sebelum pekerjaan dimulai. Untuk properti yang datanya lengkap, total biayanya biasanya jauh di bawah denda satu kali penutupan sumur." },
      { q: "Berapa lama prosesnya dan apa risikonya bila tanpa izin?", a: "Survei hidrogeologi berjalan 2 sampai 4 minggu, sedangkan penerbitan izin biasanya 1 sampai 3 bulan tergantung daerahnya. Tanpa izin, sumur dapat ditutup paksa dan retribusi tertunggak ditagih sekaligus untuk berbulan-bulan. Menunggu beberapa minggu jauh lebih murah daripada membayar kegagalan kepatuhan bertahun-tahun. Kami juga menyiapkan berkas lebih dulu agar masa tunggu di dinas tidak dipakai untuk memperbaiki dokumen." },
      { q: "Saya sudah berlangganan PDAM, apakah masih butuh SIPA?", a: "Hanya bila Anda tetap mengambil air tanah melalui sumur bor sendiri, karena SIPA mengikat aktivitas pengambilannya, bukan sumber air yang dibeli dari perairan umum. Banyak gedung dan pabrik memakai keduanya sekaligus tanpa menyadari sisi sumurnya tidak berizin. Kami periksa kondisi tersebut di awal agar kewajibannya jelas sejak hari pertama. Bila ternyata sumur tidak dipakai lagi, prosedur penutupan yang benar juga kami arahkan." },
    ],
    related: ["izin-lingkungan", "pbg-slf", "izin-limbah-b3", "kawasan-industri"],
  },
  {
    slug: "riph-impor-hortikultura",
    tagline: "Bawang yang berlayar sebelum dokumennya jadi tidak pernah sampai ke dapur, ia berhenti terlalu lama di pelabuhan.",
    heroSub:
      "Perancangan dan pengajuan RIPH atau Rekomendasi Impor Hortikultura untuk importir bawang merah, bawang putih, kentang, apel, jeruk, dan wortel. Dari perhitungan rencana impor semester, sinkronisasi API dan dokumen bea cukai, sampai pelaporan realisasi serta penyesuaian kuota antar periode agar kalender impor tidak pernah kosong.",
    timeline: "2–4 minggu per periode pengajuan semester",
    intro: [
      "Setiap kontainer bawang merah, bawang putih, kentang, apel, jeruk, atau wortel yang masuk ke Indonesia harus berdiri di atas satu dokumen yang bernama RIPH. Rekomendasi Impor Hortikultura ini wajib diperoleh sebelum barang berangkat dari negara asal, berdasarkan UU 22/2019 tentang Sistem Budidaya Tanaman yang turut mengatur hortikultura serta peraturan Menteri Pertanian terbaru tentang RIPH. Pengajuannya lewat sistem e-perizinan Kementerian Pertanian, dengan jantung berkas berupa perhitungan rencana impor semester: berapa permintaan dalam negeri dan berapa penyediaannya dari panen petani lokal, sehingga kebutuhan impor yang sah bisa ditentukan. Beberapa komoditas menuntut tambahan berupa keterlibatan petani mitra atau kebun pembinaan sebagai bentuk tanggung jawab pengembangan produksi lokal. Dokumen ini juga harus sinkron dengan API-U atau API-UP di bea cukai sesuai ketentuan larangan dan pembatasan impor dalam peraturan Menteri Keuangan terkait.",
      "Kesalahan fatal di dunia ini sederhana: barang sudah berlayar sebelum RIPH terbit. Kontainer berhenti di pelabuhan, demurrage berjalan harian, dan dalam kasus terburuk barang dipaksa re-ekspor dengan seluruh biayanya. Kesalahan kedua bersifat senyap namun sama merusaknya: realisasi impor yang tidak dilaporkan membuat kuota periode berikutnya dikurangi atau pengajuan dihentikan. Rencana impor yang ditulis melampaui kebutuhan pasar riil gampang ditolak karena tidak bisa dibuktikan dengan data produksi dan kebutuhan. Dan saat petani lokal kepanen besar sementara impor terus masuk tanpa perhitungan, kebijakan pembatasan datang lebih cepat daripada rencana Anda.",
      "Kami bekerja dengan kalender, bukan dengan panik. Rencana impor semester Anda kami hitung dari data produksi, kebutuhan pasar, dan realisasi sebelumnya agar angkanya bisa dipertahankan di hadapan pemeriksa. Berkas, termasuk keterlibatan petani mitra atau kebun pembinaan bila komoditas Anda menuntutnya, kami susun dan ajukan lewat e-perizinan Kementan dengan pemantauan status sampai terbit. Setelah barang masuk, sinkronisasi dengan API dan dokumen bea cukai serta pelaporan realisasi kami jalankan tepat waktu agar kuota periode berikutnya tetap aman. Antara satu semester dan semester berikutnya, strategi kuota dan penyesuaiannya kami bantu tata sehingga bisnis impor Anda berjalan seperti kalender, bukan seperti pemadaman.",
    ],
    benefits: [
      { title: "Barang tidak mati di pelabuhan", desc: "RIPH terbit sebelum barang berangkat — demurrage harian dan risiko re-ekspor berhenti sebelum sempat dimulai." },
      { title: "Kuota yang bisa dipertahankan", desc: "Rencana impor dihitung dari data produksi dan kebutuhan pasar, bukan angka yang ditulis asal agar sekadar lolos verifikasi." },
      { title: "Bea cukai menyatu", desc: "Sinkronisasi API-U atau API-UP dan dokumen PEB serta PIB dijalankan bersama RIPH — tidak ada dokumen yang tertinggal di pos lain." },
      { title: "Realisasi terlapor, kuota aman", desc: "Pelaporan realisasi tepat waktu menjaga kuota semester berikutnya tetap penuh — aset paling mahal seorang importir adalah rekam jejaknya." },
      { title: "Hubungan petani lokal tertata", desc: "Keterlibatan petani mitra dan kebun pembinaan tersusun sebagai kepatuhan yang nyata, bukan formalitas yang baru disiapkan saat diperiksa." },
    ],
    process: [
      { title: "Perhitungan rencana semester", desc: "Permintaan dalam negeri, penyediaan lokal, dan realisasi sebelumnya dihitung menjadi rencana impor yang bisa dipertahankan di hadapan pemeriksa." },
      { title: "Penyusunan berkas", desc: "Berkas RIPH disiapkan lengkap, termasuk petani mitra atau kebun pembinaan bila komoditas Anda menuntutnya, sesuai format e-perizinan Kementan." },
      { title: "Pengajuan dan sinkronisasi", desc: "Pengajuan dipantau sampai terbit, lalu disinkronkan dengan API-U atau API-UP serta dokumen PEB dan PIB di sisi bea cukai." },
      { title: "Realisasi dan periode berikutnya", desc: "Pelaporan realisasi dijalankan tepat waktu dan strategi kuota antar semester disiapkan lebih awal agar kalender impor tidak pernah kosong." },
    ],
    requirements: [
      "NIB dan API-U atau API-UP yang aktif",
      "Data impor dan realisasi periode sebelumnya (bila sudah pernah impor)",
      "Rencana volume per komoditas untuk semester yang diajukan",
      "Data pasar dan saluran distribusi yang akan menerima barang",
      "Dokumen petani mitra atau kebun pembinaan (untuk komoditas yang mewajibkannya)",
      "Dokumen PEB atau PIB untuk pelaporan realisasi",
    ],
    faqs: [
      { q: "Berapa biaya pengurusan RIPH?", a: "Jasa kami mulai Rp 3,9 juta per siklus semester, mencakup perhitungan rencana, penyusunan berkas, dan pengajuan. Biaya negara dan kebutuhan fasilitasi petani mitra bila komoditas Anda mewajibkannya dihitung terpisah dan transparan. Karena perizinan ini berulang tiap semester, banyak klien menjalankannya sebagai langganan agar kalender impor tidak pernah kosong. Dengan langganan, strategi kuota antar periode juga bisa disiapkan lebih tenang." },
      { q: "Berapa lama prosesnya dan apa risikonya bila barang berlayar lebih dulu?", a: "Pengajuan berjalan 2 sampai 4 minggu per periode tergantung kelengkapan berkas dan jadwal verifikasi Kementerian Pertanian. Barang yang berlayar sebelum RIPH terbit bisa tertahan di pelabuhan dengan demurrage harian dan risiko re-ekspor bila kuota tidak kunjung terbit. Menahan kapal beberapa minggu selalu lebih murah daripada membayar penginapan kontainer berbulan-bulan. Karena itu kami menetapkan aturan sederhana: tanpa RIPH terbit, tidak ada kapal yang diberangkatkan." },
      { q: "Apa yang terjadi bila kuota impor kurang atau realisasi tidak penuh?", a: "RIPH menuntut keseimbangan: rencana impor yang terlalu besar akan ditolak, sedangkan realisasi yang tidak dilaporkan memangkas kuota periode berikutnya. Penyesuaian antar periode memang bisa dilakukan, tetapi jalurnya harus dimengerti dan diajukan dengan data yang benar. Kami bantu menghitung, melaporkan, dan menata penyesuaiannya agar bisnis Anda tidak kehabisan ruang gerak di semester berikutnya. Rekam jejak pelaporan yang rapi adalah modal terbesar untuk kuota periode berikutnya." },
    ],
    related: ["api-bea-cukai", "lartas-ekspor-komoditas", "sni", "sertifikat-asal"],
  },
];

/**
 * LAPISAN PENGAYAAN — Agri-Maritim.
 * whoFor, deliverables, costs, legalBasis per slug.
 * Digabung otomatis oleh getServiceContent() di index.ts.
 */
export const agriMaritimEnrichment: Record<string, ServiceEnrichment> = {
  "ispo-rspo-sawit": {
    whoFor: [
      "Perusahaan perkebunan sawit nasional yang wajib memiliki sertifikat ISPO menurut Perpres 44/2020 dan sedang memperbarui dokumen lapangannya",
      "Perusahaan sawit dengan buyer Eropa yang menuntut RSPO Principles and Criteria, ISCC, dan data geolokasi plot sesuai EUDR sebelum kontrak diperpanjang",
      "Pabrik CPO dan PK yang kini ditanya asal buah serta legalitas pemasoknya oleh pembeli dan lembaga sertifikasi",
      "Perusahaan yang menjalani surveilans dengan temuan berjalan dan khawatir sertifikatnya dicabut pada audit tahun berikutnya",
    ],
    deliverables: [
      "Laporan gap analysis prinsip-kriteria ISPO dengan daftar celah berperingkat risiko dan roadmap penutupannya",
      "Dokumen mutu, SOP, dan rekaman lapangan yang siap diperiksa auditor tanpa perbaikan mendadak menjelang jadwal audit",
      "Pendampingan audit lengkap beserta jawaban tertulis atas temuan minor dan mayor",
      "Sertifikat ISPO terbit beserta izin penggunaan logo untuk kebutuhan pemasaran",
      "Peta jalur RSPO Principles and Criteria dan ISCC serta penyiapan geolokasi plot untuk kebutuhan EUDR",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 25 jt — menyesuaikan luasan kebun dan kedalaman celah yang ditemukan" },
      { item: "Biaya audit bodi sertifikasi terakreditasi", note: "tarif penyedia sertifikasi — dihitung terpisah dan transparan sejak penawaran" },
      { item: "Perbaikan lapangan atas temuan", note: "diestimasi dari hasil gap analysis — tidak ada kejutan di tengah proyek" },
      { item: "Surveilans tahunan", note: "kewajiban menjaga sertifikat — jadwal dan pemantauan datanya kami siapkan" },
      { item: "Jalur lanjutan RSPO dan ISCC", note: "dipilih bila pasar Anda menuntutnya — alur data dipakai ulang dari ISPO" },
    ],
    legalBasis: [
      "Perpres No. 44 Tahun 2020 tentang Sistem Perkebunan Sawit Berkelanjutan Indonesia (ISPO)",
      "UU No. 39 Tahun 2014 tentang Perkebunan",
      "RSPO Principles and Criteria 2018 — standar sertifikasi sawit berkelanjutan yang dipegang pasar global",
      "Regulasi (UE) 2023/1115 (EUDR) tentang produk bebas deforestasi yang berlaku bagi pemasok pasar Eropa",
    ],
  },

  "izin-perikanan-sikpi": {
    whoFor: [
      "Pemilik kapal perikanan tangkap yang belum memiliki SIPI atau SIKL yang sah sebelum berlayar",
      "Eksportir hasil laut yang membutuhkan sertifikat asal ikan untuk tiap pengapalan ke negara tujuan",
      "Usaha budidaya rumput laut, ikan, udang, kepiting, atau sidat yang akan memasarkan panennya secara sah",
      "Perusahaan olahan ikan yang diminta buyer membuktikan bahan baku berasal dari sumber yang legal",
    ],
    deliverables: [
      "SIKPI terbit meliputi SIUP, SIPI, dan SIKL sesuai kebutuhan usaha Anda",
      "Izin budidaya per komoditas beserta registrasi nelayan dan alat tangkap yang digunakan",
      "Sertifikat asal ikan yang tersusun mengikuti kalender pengapalan untuk tiap muatan yang berangkat",
      "Panduan pemasangan VMS, pengisian logbook, dan pelaporan berkala yang terjadwal",
      "Arsip perizinan yang siap ditunjukkan saat audit buyer atau pemeriksaan di pelabuhan",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 3,5 jt — menyesuaikan jenis usaha dan jumlah kapal" },
      { item: "Biaya negara per izin", note: "sesuai ketentuan KKP — ditulis rinci sebelum pengajuan" },
      { item: "Pemasangan dan langganan VMS", note: "kewajiban antipembajakan untuk kapal tertentu — tarif penyedianya terpisah" },
      { item: "Sertifikat asal ikan", note: "dihitung per pengapalan bagi eksportir" },
    ],
    legalBasis: [
      "UU No. 31 Tahun 2004 jo. UU No. 45 Tahun 2009 tentang Perikanan",
      "PP No. 57 Tahun 2022 tentang Perubahan atas PP No. 9 Tahun 2020 tentang Pengelolaan Perikanan Negara dan Penangkapan Ikan",
      "Peraturan Menteri Kelautan dan Perikanan tentang SIKPI dan Portal Perizinan Integral Perikanan (PPIP)",
      "Peraturan Menteri Kelautan dan Perikanan tentang sertifikat asal ikan untuk perdagangan dan ekspor",
    ],
  },

  "pvt-varietas-tanaman": {
    whoFor: [
      "Pemulia dan perusahaan benih yang menghasilkan varietas baru dan siap diuji DUS",
      "Universitas dan lembaga riset yang ingin mengubah hasil pemuliaan menjadi aset kekayaan intelektual yang produktif",
      "Perusahaan hortikultura dan perbanyakan yang memasok benih ke pasar besar dan ritel",
      "Startup agrikultur yang membangun valuasi perusahaan di atas kepemilikan varietas",
    ],
    deliverables: [
      "Sertifikat Perlindungan Varietas Tanaman atas nama pemegang hak yang sah",
      "Berkas dan data pengamatan DUS yang terdokumentasi rapi untuk keperluan pemeriksaan dan pembaruan berikutnya",
      "Panduan strategi lisensi dan royalti sesuai ketentuan lisensi wajib dan pengecualian petani",
      "Peta jalur pemasaran benih bersertifikat beserta kepatuhan sertifikasi benihnya",
      "Portofolio IP yang siap dipakai untuk proposal hibah, kerja sama industri, dan valuasi",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 4,5 jt — kaji kelayakan, penyusunan berkas, dan pengajuan" },
      { item: "Biaya pemeriksaan DUS", note: "tarif resmi PPV per komoditas — transparan sejak awal" },
      { item: "Biaya pendaftaran dan sertifikat", note: "sesuai ketentuan yang berlaku di Kementerian Pertanian" },
      { item: "Strategi monetisasi varietas", note: "opsional — lisensi, royalti, dan kerja sama dengan perusahaan benih" },
    ],
    legalBasis: [
      "UU No. 22 Tahun 2019 tentang Sistem Budidaya Tanaman (perlindungan varietas tanaman)",
      "PP No. 15 Tahun 1995 jo. PP No. 44 Tahun 2021 tentang Sistem Perbenihan Tanaman",
      "Peraturan Menteri Pertanian No. 22 Tahun 2018 tentang Perlindungan Varietas Tanaman",
      "Peraturan Menteri Pertanian No. 21 Tahun 2018 tentang Pendaftaran Varietas Tanaman",
    ],
  },

  "izin-peternakan-nak": {
    whoFor: [
      "Pemilik farm sapi, unggas, atau kambing skala menengah dan besar yang sedang menata legalitasnya",
      "Produsen dan distributor pakan industri yang membutuhkan izin edar HPA melalui HPDH",
      "Apotek dan toko obat hewan yang menjual produk berizin edar OHT",
      "Eksportir produk ternak dan turunannya yang membutuhkan sertifikat veterinaria",
    ],
    deliverables: [
      "NIB dan perizinan berusaha sesuai KBLI peternakan beserta rekomendasi teknis dinas peternakan",
      "Sertifikat CPB yang memungkinkan produk masuk prosesor besar dan ritel modern",
      "Izin edar pakan melalui HPDH dan izin edar obat hewan OHT",
      "IPT untuk pengangkutan ternak lintas daerah bila kebutuhan distribusi menuntutnya",
      "SOP biosecurity dan kalender pelaporan berkala untuk kepatuhan farm sepanjang tahun",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 2,5 jt — menyesuaikan skala usaha dan jenis izin" },
      { item: "Biaya negara per izin", note: "ditulis rinci sebelum pengajuan sesuai ketentuan yang berlaku" },
      { item: "Perbaikan sarana untuk audit CPB", note: "diestimasi dari hasil pengecekan awal — tidak ada kejutan" },
      { item: "Pelatihan personel farm", note: "opsional — biosecurity, pemakaian obat hewan, dan pencatatan" },
    ],
    legalBasis: [
      "UU No. 18 Tahun 2009 jo. UU No. 41 Tahun 2014 tentang Peternakan dan Kesehatan Hewan",
      "PP No. 7 Tahun 2021 tentang Kemudahan, Perlindungan, dan Pemberdayaan Koperasi dan UMKM",
      "Peraturan Menteri Pertanian No. 9 Tahun 2017 tentang Peredaran Pakan",
      "Peraturan Menteri Pertanian No. 18 Tahun 2017 tentang Peredaran Obat Hewan",
    ],
  },

  "plasma-perkebunan-kemitraan": {
    whoFor: [
      "Perusahaan perkebunan baru yang mengajukan izin usaha dan harus menyiapkan kemitraan sejak awal",
      "Perusahaan yang memperluas kebun dan wajib menyesuaikan alokasi plasma dengan perhitungan yang benar",
      "Pabrik CPO yang menghadapi temuan sosial dalam audit ISPO atau RSPO dan perlu memperbaikinya",
      "Investor PMA sawit yang butuh struktur kemitraan yang tahan uji hukum dan waktu",
    ],
    deliverables: [
      "Dokumen desain skema kemitraan beserta perhitungan alokasi plasma yang bisa dipertahankan",
      "Perjanjian kemitraan dengan KUD atau kelompok tani yang terbaca dan adil kedua pihak",
      "Peta dan dokumentasi legalitas lahan plasma yang ditata sampai tuntas",
      "Dokumentasi konsultasi masyarakat sebagai bukti kepatuhan FPIC yang siap ditunjukkan",
      "Jadwal dan format audit kemitraan berkala untuk kepatuhan jangka panjang",
    ],
    costs: [
      { item: "Jasa perancangan kemitraan DIGIMAN.ID", note: "mulai Rp 8,5 jt — menyesuaikan skala dan jumlah kelompok tani" },
      { item: "Legalisasi lahan dan notaris", note: "diestimasi sesuai kebutuhan dokumen — terpisah dari jasa" },
      { item: "Fasilitasi konsultasi masyarakat", note: "materi, lokasi, dan dokumentasi — estimasi disiapkan lebih dulu" },
      { item: "Audit kemitraan berkala", note: "opsional namun kami anjurkan — menjaga hubungan tetap sehat" },
    ],
    legalBasis: [
      "UU No. 39 Tahun 2014 tentang Perkebunan, khususnya Pasal 21 tentang kewajiban kemitraan minimal 20 persen",
      "PP No. 61 Tahun 2016 tentang Kemitraan Perkebunan",
      "Peraturan Menteri Pertanian No. 98 Tahun 2013 tentang Perizinan Usaha Perkebunan",
      "Standar RSPO Principles and Criteria 2018 tentang FPIC (bagi perusahaan yang menjalani sertifikasi)",
    ],
  },

  "izin-air-tanah-sipa": {
    whoFor: [
      "Pabrik dan kawasan industri yang mengambil air tanah untuk proses produksi",
      "Hotel, apartemen, dan gedung komersial dengan sumur bor sendiri di lokasinya",
      "Pengembang perumahan dan bangunan besar yang menyiapkan kepatuhan sejak tahap awal",
      "Rumah sakit, kampus, dan fasilitas besar dengan kebutuhan air di luar langganan PDAM",
    ],
    deliverables: [
      "Izin SIPA terbit dari dinas sumber daya air yang berwenang",
      "Laporan survei hidrogeologi beserta rencana pengambilan dan taksiran penurunan muka air",
      "Panduan pemasangan meter dan format laporan pengambilan berkala yang siap dipakai",
      "Kalender retribusi penggunaan air tanah yang siap dipakai tim keuangan",
      "Arsip kepatuhan yang siap ditunjukkan saat audit atau perluasan usaha",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 5,5 jt — menyesuaikan kerumitan berkas" },
      { item: "Survei hidrogeologi ahli bersertifikat", note: "dihitung terpisah bila belum tersedia — kami bantu menugaskannya" },
      { item: "Retribusi penggunaan air tanah", note: "dibayar ke pemerintah daerah sesuai volume di meter" },
      { item: "Perpanjangan dan pelaporan berkala", note: "ringan setelah arsip pertama tertata rapi" },
    ],
    legalBasis: [
      "UU No. 17 Tahun 2019 tentang Perubahan atas UU No. 11 Tahun 1974 tentang Sumber Daya Air",
      "PP No. 121 Tahun 2015 dan PP No. 6 Tahun 2022 terkait pemanfaatan air tanah",
      "Peraturan Menteri PUPR dan peraturan daerah terkait tentang izin pemanfaatan air tanah (SIPA)",
    ],
  },

  "riph-impor-hortikultura": {
    whoFor: [
      "Importir bawang merah, bawang putih, kentang, apel, jeruk, dan wortel",
      "Distributor buah dan sayur impor yang membangun kalender pasokan tahunan",
      "Perusahaan FMCG dengan bahan baku hortikultura dari impor",
      "Importir baru yang akan memasuki komoditas hortikultura berlartas",
    ],
    deliverables: [
      "RIPH terbit untuk periode semester yang diajukan",
      "Dokumen perhitungan rencana impor semester yang bisa dipertahankan di hadapan pemeriksa",
      "Sinkronisasi berkas dengan API-U atau API-UP dan dokumen bea cukai",
      "Laporan realisasi impor tepat waktu untuk menjaga kuota berikutnya",
      "Kalender impor semester beserta strategi penyesuaian kuota antar periode",
    ],
    costs: [
      { item: "Jasa pengurusan RIPH DIGIMAN.ID", note: "mulai Rp 3,9 jt per siklus semester" },
      { item: "Biaya negara per pengajuan", note: "sesuai ketentuan Kementerian Pertanian — ditulis rinci di penawaran" },
      { item: "Fasilitasi petani mitra atau kebun pembinaan", note: "untuk komoditas yang mewajibkannya — diestimasi sejak awal" },
      { item: "Langganan siklus semester", note: "opsional — menjaga kalender impor berjalan tanpa kosong" },
    ],
    legalBasis: [
      "UU No. 22 Tahun 2019 tentang Sistem Budidaya Tanaman (mengatur hortikultura)",
      "Peraturan Menteri Pertanian terkini tentang Rekomendasi Impor Hortikultura (RIPH)",
      "Peraturan Menteri Keuangan terkait larangan dan pembatasan impor pada pos tarif kepala undang-undang bea masuk negara",
    ],
  },
};
