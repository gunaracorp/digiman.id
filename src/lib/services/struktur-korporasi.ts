import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

/**
 * Konten editorial — KATEGORI STRUKTUR GRUP & TRANSAKSI (10 layanan).
 * Holding, perjanjian pendiri & vesting, joint venture, akuisisi-merger,
 * spin-off & divestasi, piagam keluarga bisnis, suksesi, SHA,
 * tata kelola korporat, dewan komisaris profesional.
 * Standar penulisan sama dengan seluruh pustaka: spesifik, edukatif,
 * menjawab pertanyaan nyata calon klien (pembaca + mesin pencari sekaligus).
 */
export const strukturContent: ServiceContent[] = [
  {
    slug: "pendirian-holding",
    tagline: "Satu induk yang tegak, seluruh grup berdiri lebih rendah risikonya.",
    heroSub:
      "Strukturisasi perusahaan holding: satu induk yang mengendalikan banyak entitas dengan efisiensi pajak, perlindungan aset, dan kesiapan menerima investor — untuk pemilik usaha yang sudah mengelola lebih dari satu perusahaan.",
    timeline: "2–6 minggu, tergantung jumlah entitas yang direstrukturisasi",
    intro: [
      "Pemilik usaha yang bertahan cukup lama hampir selalu berakhir dengan keadaan yang sama: beberapa perusahaan berdiri berdampingan tanpa induk — satu untuk distribusi, satu untuk produksi, satu lagi menyimpan properti — semuanya sejajar di bawah nama pribadi yang sama. Struktur rata ini nyaman di awal, tetapi menumpuk masalah diam-diam: risiko satu entitas menular ke yang lain, laba berpindah lewat transfer antar perusahaan tanpa dasar yang benar, dan saat investor atau bank datang, mereka melihat tabel kepemilikan yang tidak bisa dibaca. UU 40/2007 memberi jalan yang benar: pola induk-anak, di mana induk memegang saham entitas operasional dan kendali berpindah dari tangan pribadi ke struktur yang terdokumentasi — lengkap dengan peluang konsolidasi fiskal (PMK 239/PMK.03/2014) dan dividen antar perusahaan dalam negeri yang kini tanpa PPh (PMK 130/2020).",
      "Yang berbahaya bukan ide menata ulang, tapi cara asal-jadi yang sering dipakai: saham dialihkan dulu, pajaknya baru disadari kemudian — padahal pengalihan saham PT tanpa harga pasar atau lewat transaksi swasta dikenai PPh final 0,5% (PMK 68/2023) yang nilainya mengikuti harga saham perusahaan. Kesalahan lain yang mahal: restrukturisasi yang membentuk konsentrasi penguasaan besar ternyata menabrak kewajiban notifikasi ke KPPU (UU 5/1999 jo. PP 57/2010 dan Peraturan KPPU 3/2019 jo. 2/2023) — keterlambatannya berujung denda administratif hingga miliaran rupiah. Dan tanpa perjanjian pemegang saham, induk yang baru berdiri justru menjadi medan sengketa baru antara pemiliknya sendiri.",
      "Kami menata ulang grup Anda dari peta, bukan dari tebakan: pemetaan aset dan entitas yang ada, desain pola induk-anak yang fungsional (induk investasi, entitas operasional, entitas pemegang aset seperti properti dan kekayaan intelektual), hitungan takaran pajak setiap langkah alih saham SEBELUM akta diteken, pendirian entitas induk beserta rangkaian akta pengalihannya, lalu sinkronisasi NIB dan KBLI seluruh grup. Kebutuhan notifikasi KPPU kami periksa sejak awal — dan bila struktur Anda memang terkena ambang, notifikasinya kami siapkan bersama. Hasilnya satu peta struktur yang bisa Anda bawa ke investor, bank, dan calon pembeli tanpa perlu meminta maaf atas kekacauannya.",
    ],
    benefits: [
      { title: "Risiko tidak menular antar entitas", desc: "Aset inti seperti properti dan teknologi dipisahkan dari risiko operasional — masalah satu lini tidak menyeret seluruh kekayaan Anda." },
      { title: "Arus laba yang efisien", desc: "Dividen antar perusahaan dalam negeri kini tanpa PPh (PMK 130/2020) — laba naik ke induk untuk diputar tanpa kebocoran berulang." },
      { title: "Siap menyambut investor", desc: "Investor masuk di level induk atau di entitas tertentu saja — tanpa membongkar seluruh grup untuk satu pendanaan." },
      { title: "Kendali terdokumentasi", desc: "Siapa memutuskan apa di level grup tertulis jelas — bukan sekadar persentase saham yang ditafsirkan emosional." },
      { title: "Pajak dihitung sebelum tanda tangan", desc: "Setiap langkah alih saham diperkirakan biayanya lebih dulu — tidak ada kejutan 0,5% yang datang setelah akta terlanjur sah." },
    ],
    process: [
      { title: "Pemetaan entitas & tujuan", desc: "Seluruh perusahaan, aset, dan tujuan strategis Anda dipetakan — termasuk porsi kepemilikan dan permasalahan yang sedang dirasakan." },
      { title: "Desain struktur & takaran pajak", desc: "Pola induk-anak dirancang fungsional — setiap langkah pengalihan dihitung pajak dan biayanya, notifikasi KPPU dicek sejak sini." },
      { title: "Pendirian induk & alih saham", desc: "Entitas induk didirikan, saham dialihkan bertahap lewat akta notaris dan pengesahan — sesuai urutan yang paling aman secara pajak." },
      { title: "Sinkronisasi & dokumen grup", desc: "NIB, KBLI, buku pemegang saham, dan perjanjian pemegang saham dirapikan — peta struktur akhir Anda serah terima dalam satu arsip." },
    ],
    requirements: [
      "Akta & SK pengesahan seluruh entitas yang ada, beserta data pemegang sahamnya",
      "Daftar aset dan unit usaha yang ingin dipetakan ke entitas tertentu",
      "Laporan keuangan ringkas tiap entitas (untuk menakar pengalihan saham)",
      "Tujuan strategisnya: pemisahan risiko, persiapan investor, warisan, atau efisiensi pajak",
      "Kesediaan mengalihkan saham secara bertahap bila perhitungan pajak menyarankannya",
    ],
    faqs: [
      { q: "Berapa total biaya mendirikan struktur holding?", a: "Jasa pendampingan kami mulai Rp 15 juta untuk desain struktur dan seluruh pengurusan inti — ditulis penuh di penawaran sebelum pekerjaan dimulai. Di luar itu ada biaya notaris dan pengesahan per entitas yang menyesuaikan kompleksitasnya, serta PPh final 0,5% atas pengalihan saham yang nilainya mengikuti harga saham perusahaan yang dialihkan. Karena itu kami selalu menakar pajak pengalihan di tahap desain — Anda tahu total kebutuhan dananya sebelum memutuskan, bukan setelah akta terbit." },
      { q: "Apakah restrukturisasi holding saya harus dilaporkan ke KPPU?", a: "Tidak semua — kewajiban notifikasi muncul bila ambang tertentu tercapai: perampasan penguasaan yang melibatkan usaha dengan aset di atas Rp 2,5 triliun atau penjualan di atas Rp 5 triliun, atau nilai transaksi yang melampaui Rp 250 miliar menurut UU Cipta Kerja. Notifikasi dilakukan pasca-transaksi dalam jangka waktu yang diatur peraturan KPPU, dan melewatkannya berakibat denda administratif yang bisa mencapai miliaran rupiah. Strukturisasi internal grup yang tidak membentuk konsentrasi penguasaan baru umumnya tidak terkena — kami periksa posisinya sejak tahap desain agar Anda tidak menebak-nebak." },
      { q: "Bisakah saya memindahkan saham anak ke induk sendiri tanpa dibantu?", a: "Secara administratif bisa — akta pengalihan saham bisa diperoleh, dan sistem AHU menerima perubahannya. Yang membuat orang menyesal bukan prosesnya, tapi yang tidak dihitung sebelumnya: takaran pajak pengalihan, urutan pengalihan yang seharusnya dilakukan bertahap, dan akibatnya pada fasilitas pajak atau perizinan entitas yang dialihkan. Plus, tanpa perjanjian pemegang saham di level induk, struktur baru itu bisa jadi sengketa baru saat keputusan besar datang. Pekerjaan kami persis di bagian yang tidak terlihat dari luar: takarannya, urutannya, dan dokumen pengendalinya." },
    ],
    related: ["akuisisi-merger-umkm", "perubahan-akta", "pt-pma", "perjanjian-pemegang-saham"],
  },
  {
    slug: "perjanjian-pendiri-vesting",
    tagline: "Persahabatan yang tulus pun tetap butuh perjanjian yang tertulis.",
    heroSub:
      "Kesepakatan para pendiri: pembagian saham yang jujur, vesting empat tahun, dan aturan keluar-masuk yang jelas — supaya konflik orang-orang terdekat tidak menjadi alasan kematian perusahaan yang baru mulai bergerak.",
    timeline: "5–10 hari kerja setelah data pendiri lengkap",
    intro: [
      "Riset klasik Noam Wasserman atas ribuan startup menemukan fakta yang menyakitkan: sekitar 65% kegagalan startup berakar pada konflik antara pendirinya sendiri — bukan pasar, bukan pendanaan. Di hari-hari awal semuanya terasa sepele: saham dibagi rata karena malu membahas kontribusi, peran tidak dipertegas karena 'nanti juga jelas sendiri', dan kode, desain, atau rahasia dagang masih atas nama pribadi pendiri. UU 40/2007 hanya mencatat persentase saham di akta — ia tidak mengatur apa yang terjadi ketika satu pendiri keluar di bulan kedelapan, atau ketika dua pendiri berdua 50-50 tidak bisa memutuskan apa pun. Wilayah itulah yang diisi perjanjian pendiri: pembagian saham berbasis kontribusi, vesting, ketentuan pendiri keluar (leaver), dan pengalihan hak kekayaan intelektual ke perusahaan.",
      "Kesalahan yang paling sering memakan startup Indonesia: pendiri yang keluar lebih awal tetap membawa saham penuhnya — tim yang tinggal merasa bekerja untuk orang yang sudah tidak berkontribusi, dan investor yang melihat tabel kapitalisasi rapuh langsung menurunkan tawarannya. Kesalahan kedua: hak kekayaan intelektual tidak pernah dialihkan — hak cipta program komputer lahir di tangan pembuatnya (UU 28/2014), jadi tanpa perjanjian pengalihan tertulis, aplikasi inti perusahaan secara hukum milik orangnya, bukan milik PT. Kesalahan ketiga: tidak ada mekanisme resolusi — konflik kecil menunggu sampai menjadi gugatan. Ketiganya bisa ditutup dalam satu dokumen yang ditandatangani saat semua orang masih berdamai.",
      "Kami memandu percakapan yang biasa dihindari para pendiri — dan menuliskan jawabannya: sesi pemetaan kontribusi (modal, waktu, karya, jaringan) menghasilkan pembagian saham yang bisa dipertanggungjawabkan, bukan sekadar rata. Skema vesting empat tahun dengan tebing satu tahun menjamin saham diperoleh seiring kontribusi; ketentuan good leaver dan bad leaver mengatur apa yang dibawa orang yang pergi; perjanjian pengalihan hak kekayaan intelektual memindahkan kode, desain, dan rahasia dagang ke PT. Semuanya tertulis, ditandatangani seluruh pendiri, dan disinkronkan dengan akta pendirian — supaya dokumen pertama perusahaan Anda bukan sengketa pertamanya.",
    ],
    benefits: [
      { title: "Pembagian yang adil, bukan sekadar rata", desc: "Saham mengikuti kontribusi nyata — modal, waktu, karya, jaringan — dan alasannya tertulis sehingga tidak dibantah kemudian." },
      { title: "Saham patuh pada kontribusi", desc: "Vesting empat tahun dengan tebing satu tahun — pendiri yang pergi dini tidak membawa separuh perusahaan yang belum ia bangun." },
      { title: "Kepergian tidak meledak jadi perang", desc: "Ketentuan good leaver dan bad leaver sudah menjawab sebelumnya: berapa yang dibawa, ke siapa sahamnya kembali, dengan harga bagaimana." },
      { title: "Karya dan teknologi milik perusahaan", desc: "Kode, desain, dan rahasia dagang dialihkan ke PT secara tertulis — aset paling bernilai tidak melanglang buah atas nama pribadi." },
      { title: "Tabel kapitalisasi yang dipercaya investor", desc: "Due diligence investor menemukan struktur yang rapi — negosiasi pendanaan berjalan di atas kepercayaan, bukan keraguan." },
    ],
    process: [
      { title: "Sesi pemetaan kontribusi", desc: "Pertanyaan-pertanyaan yang selama ini dihindari diajukan dengan moderat — kontribusi tiap pendiri dikenali dan dinilai bersama." },
      { title: "Perumusan skema vesting & leaver", desc: "Jadwal pemerolehan saham, tebing, ketentuan keluar, dan harga pengembalian dirumuskan sesuai kondisi tim Anda." },
      { title: "Penyusunan perjanjian & IP assignment", desc: "Perjanjian pendiri dan perjanjian pengalihan hak kekayaan intelektual ditulis lengkap — bahasanya jelas, bukan templat asal." },
      { title: "Penandatanganan & sinkronisasi akta", desc: "Seluruh pendiri menandatangani, dokumen disinkronkan dengan akta pendirian — dan tiap pendiri menerima salinan arsipnya." },
    ],
    requirements: [
      "Data seluruh pendiri: identitas, peran, dan bentuk kontribusinya (modal, waktu, karya, jaringan)",
      "Akta pendirian dan kondisi saham saat ini (bila perusahaan sudah berdiri)",
      "Daftar aset tak berwujud yang perlu dialihkan: kode, desain, merek, proses, data",
      "Kesepakatan kasar antar pendiri tentang arah usaha (kami rapikan dan tuliskan)",
      "Kemauan semua pendiri duduk bersama dalam satu sesi kesepakatan",
    ],
    faqs: [
      { q: "Berapa biaya membuat perjanjian pendiri dan vesting?", a: "Jasa penyusunan kami mulai Rp 5 juta — mencakup sesi fasilitasi, perumusan skema, dan dokumen lengkap untuk seluruh pendiri. Bila kondisi saham perlu diubah lewat akta perubahan, biaya notarisnya menyesuaikan dan kami kalkulasikan dulu. Bandingkan dengan biaya satu sengketa pendiri: jauh lebih kecil, dan digunakan sebelum masalah terjadi, bukan sesudah." },
      { q: "Kami sudah berdiri dengan saham 50-50 — apakah masih bisa diterapkan vesting?", a: "Bisa, dan justru itu pola yang paling sering kami tangani. Vesting bisa diterapkan mulai titik sekarang: saham yang sudah sah tetap milik pemiliknya, tetapi saham yang belum 'tercapai' sesuai jadwal baru menjadi objek ketentuan pemerolehan — atau diterapkan pada restrukturisasi porsi yang disepakati bersama. Perubahannya disahkan lewat akta dan disertai perjanjian pendiri yang mengikat semua pihak. Yang penting mulai sebelum pengunduran diri pertama terjadi, bukan sesudahnya." },
      { q: "Apa bedanya perjanjian pendiri dengan akta pendirian?", a: "Akta pendirian adalah dokumen resmi yang mengikat perusahaan terhadap negara dan pihak ketiga — isinya terbatas pada hal-hal yang diatur undang-undang. Perjanjian pendiri mengatur detail yang memang tidak patut atau tidak bisa ditulis di akta: vesting, ketentuan leaver, komitmen kerja, resolusi konflik, dan pengalihan kekayaan intelektual. Keduanya harus sinkron — perjanjian yang bertentangan dengan akta akan lemah posisinya. Kami menyusun keduanya sebagai satu paket agar tidak saling meniadakan." },
    ],
    related: ["pendirian-pt", "esop-program", "convertible-note-safe", "perjanjian-pemegang-saham"],
  },
  {
    slug: "joint-venture",
    tagline: "Mitra yang tepat menggandakan kekuatan — perjanjian yang tepat mencegah ia menggandakan masalah.",
    heroSub:
      "Struktur joint venture entitas atau kontraktual yang melindungi modal, teknologi, dan kendali Anda — dari pemilihan bentuk yang benar sampai mekanisme keluar yang tidak berujung perang.",
    timeline: "3–8 minggu, termasuk masa negosiasi kedua pihak",
    intro: [
      "Joint venture di Indonesia punya dua jalur yang hasilnya sangat berbeda: JV berbadan hukum — PT patungan yang didirikan bersama (berbentuk PMA bila melibatkan pihak asing, tunduk pada UU 25/2007 dan daftar bidang usaha Perpres 10/2021 jo. 49/2021) — atau JV kontraktual, perjanjian kerja sama usaha tanpa badan baru yang berdiri di atas kebebasan berkontrak (Pasal 1338 KUHPerdata). Pilihan ini menentukan hampir segalanya: bagaimana pajaknya mengalir, seberapa kuat kendali Anda, bagaimana teknologi dan merek diperlakukan, dan seberapa mudah hubungan itu diakhiri. Banyak kerja sama besar dimulai dari memorandum asal — dan tumbuh menjadi transaksi jutaan dolar dengan dokumen yang tidak pernah menyusul.",
      "Kegagalan JV hampir selalu punya pola yang sama: kontribusi tidak didefinisikan — modal nyata dibandingkan dengan janji akses pasar yang tak pernah terukur; kendali 50-50 tanpa mekanisme kebuntuan sehingga keputusan strategis macet di tengah jalan; teknologi pindah tangan tanpa lisensi yang benar sehingga mitra keluar membawa kemampuan inti; dan tidak ada jalur keluar tertulis sehingga hubungan mati hanya dengan cara yang mahal. Kerja sama sederhana boleh mengandalkan niat baik — joint venture tidak, karena JV adalah bentuk pernikahan usaha yang digabungkan harta dan keterampilannya.",
      "Kami mengawali dari analisis bentuk: kapan JV berbadan hukum lebih tepat, kapan kontraktual cukup — dengan pertimbangan pajak, perizinan, dan umur kerja sama. Due diligence ringkas atas calon mitra, pemetaan kontribusi dan pembagian hasil, lalu penyusunan dokumen inti: perjanjian JV dan perjanjian pemegang saham (bila berbadan hukum) yang mengatur hak suara, ambang keputusan, lisensi teknologi, klausul nonkompetisi, mekanisme kebuntuan bertingkat (penyelesaian kepemimpinan, mediasi, hingga skema jual-beli), dan jalur keluar. Untuk JV bersanding dengan pihak asing, pengurusan PMA dan perizinannya kami tangani bersamaan — supaya perjanjian yang indah di atas kertas juga sah untuk dijalankan.",
    ],
    benefits: [
      { title: "Bentuk JV yang tepat sejak awal", desc: "Entitas atau kontraktual dipilih dari analisis — bukan kebiasaan — sehingga pajak, kendali, dan risikonya sesuai umur kerja sama." },
      { title: "Kontribusi dan hasil yang bertakaran", desc: "Modal, teknologi, akses pasar, dan tenaga dikonversi menjadi hak yang jelas — tidak ada mitra yang merasa menanggung lebih dari yang ia terima." },
      { title: "Kendali tetap terlindungi", desc: "Ambang keputusan, hak veto atas hal strategis, dan mekanisme kebuntuan menjaga kerja sama 50-50 tetap bisa berjalan." },
      { title: "Teknologi dan merek tetap milik Anda", desc: "Lisensi yang benar dan klausul nonkompetisi memastikan kemampuan inti tidak pindah ke mitra bersama dengan kerja samanya." },
      { title: "Keluar tidak menjadi perang", desc: "Jalur exit tertulis sejak awal — jual saham, tarik diri bertahap, atau bubar dengan prosedur yang sudah disepakati." },
    ],
    process: [
      { title: "Analisis bentuk & struktur", desc: "Kebutuhan kedua pihak dianalisis — JV berbadan hukum atau kontraktual dipilih dengan alasan yang bisa dipertanggungjawabkan." },
      { title: "Due diligence & pemetaan kontribusi", desc: "Legalitas calon mitra dicek ringkas, kontribusi dan ekspektasi kedua sisi dipetakan sebelum perundingan dokumen." },
      { title: "Perundingan & penyusunan dokumen", desc: "Perjanjian JV dan SHA disusun lalu diperundingkan — kendali, IP, kebuntuan, dan exit tertutup semua." },
      { title: "Legalisasi & kesiapan berjalan", desc: "Akta, pengesahan, dan perizinan diurus (termasuk PMA bila ada pihak asing) — kerja sama Anda siap dijalankan, bukan hanya ditandatangani." },
    ],
    requirements: [
      "Profil calon mitra dan tujuan kerja sama yang dikejar",
      "Bentuk kontribusi masing-masing pihak: modal, teknologi, aset, SDM, atau akses pasar",
      "Rencana usaha JV: bidang KBLI, target, dan masa kerja sama yang diharapkan",
      "Hal-hal yang Anda waspadai: kendali, kekayaan intelektual, risiko kompetitor",
      "Dokumen legal kedua pihak: akta, NIB, dan perizinan yang relevan",
    ],
    faqs: [
      { q: "JV berbadan hukum atau kontraktual — mana yang lebih baik?", a: "Tergantung apa yang dibangun: bila kerja samanya adalah usaha jangka panjang dengan modal, karyawan, dan risiko sendiri, PT patungan lebih tepat karena tanggung jawabnya terbatas dan investor mudah melihat strukturnya. Bila yang dikejar adalah proyek atau kolaborasi bersifat teknis dengan risiko yang tetap di masing-masing pihak, JV kontraktual jauh lebih ringan dan cepat. Kesalahan mahal adalah memilih dari kebiasaan — JV kontraktual untuk usaha besar berarti risiko tidak terbatas, sementara PT untuk proyek kecil berarti biaya kepatuhan yang tidak proporsional. Kami ajarkan pilihannya lewat analisis konkret kasus Anda." },
      { q: "Berapa biaya menyusun struktur joint venture?", a: "Jasa penyusunan struktur dan dokumen JV kami mulai Rp 12 juta — mencakup analisis bentuk, due diligence ringkas mitra, dan perundingan dokumen inti. Bila JV berdiri sebagai PT, ada biaya notaris dan pengesahan tambahan; bila melibatkan pihak asing, ada pengurusan PMA dan perizinan OSS yang biayanya kalkulasi terpisah namun transparan sejak penawaran. Perundingan tambahan melewati batas yang disepakati dikenai sesi lanjutan — Anda selalu tahu posisi biayanya." },
      { q: "Bagaimana kalau mitra berhenti berkontribusi di tengah jalan?", a: "Justru untuk skenario ini perjanjian JV dibuat: kontribusi yang tidak terpenuhi berkonsekuensi tertulis — penyesuaian porsi, kewajiban melengkapi, atau hak mengakhiri. Untuk JV berbadan hukum, perjanjian pemegang sahamnya menampung mekanisme jual-beli: pihak yang berkontribusi bisa membeli porsi yang lesu dengan harga berdasarkan rumus yang sudah disepakati. Tanpa dokumen ini, satu-satunya pilihan Anda adalah menegosiasikan dari posisi lemah atau menggugat — dua-duanya mahal. Dokumen yang baik membuat pihak yang lesu sadar lebih dulu bahwa keluar rapi lebih murah daripada bertahan merusak." },
    ],
    related: ["pt-pma", "legal-drafting", "perjanjian-pemegang-saham", "distributor-brand-asing"],
  },
  {
    slug: "akuisisi-merger-umkm",
    tagline: "Membeli atau menjual perusahaan bukan lompatan iman — ia pekerjaan yang bisa diperiksa.",
    heroSub:
      "Due diligence hukum dan finansial, valuasi yang bisa dipertahankan, struktur pembayaran yang melindungi dua pihak, sampai akta dan pengurusan pasca-transaksi — untuk pembeli yang mau yakin dan pemilik yang mau melepas dengan rapi.",
    timeline: "6–16 minggu dari due diligence sampai serah terima",
    intro: [
      "Setiap merger, konsolidasi, dan akuisisi di Indonesia berjalan di atas kerangka yang jelas: UU 40/2007 mendefinisikan ketiganya dan menuntut persetujuan RUPS serta pengesahan bagi merger dan konsolidasi; pengalihan saham pada akuisisi dikenai PPh final 0,5% (PMK 68/2023); dan transaksi yang membentuk konsentrasi penguasaan besar wajib dinotifikasikan ke KPPU (UU 5/1999 jo. PP 57/2010, Peraturan KPPU 3/2019 jo. 2/2023). Untuk transaksi yang menyentuh UMKM, PP 7/2021 memberi kerangka skala usahanya. Kerangkanya ringkas — tapi risikonya nyata dan sama besarnya dengan transaksi korporasi: tunggakan pajak yang tersembunyi, sengketa aset yang belum tercatat, kewajiban ketenagakerjaan yang menunggu, dan perizinan yang ternyata tidak selaras dengan usaha yang berjalan.",
      "Kesalahan yang paling mahal dalam pembelian usaha adalah menandatangani sebelum memeriksa: harga disepakati dari obrolan, uang penuh dibayar, lalu pembeli menemukan hutang pajak, gugatan karyawan, atau aset yang masih digadai — karena membeli saham berarti mewarisi SELURUH kewajiban perusahaan, bukan hanya asetnya yang terlihat. Di sisi penjual, kekacauan yang tidak ditata sebelum masuk pasar langsung dipotong dari harga: dokumen pencampur aduk, laporan keuangan yang tidak konsisten, dan kontrak inti yang tidak bisa ditunjukkan. Dan ada yang terlupakan di tengah euforia: notifikasi KPPU yang keterlambatannya berdenda, serta periode pasca-transaksi yang menggantung karena tidak ada yang ditunjuk menanganinya.",
      "Kami bekerja untuk dua sisi dengan standar yang sama. Untuk pembeli: due diligence menyeluruh — legalitas, pajak, ketenagakerjaan, aset, perizinan, kontrak inti — laporan temuan yang jadi dasar negosiasi harga dan jaminan, struktur pembayaran yang melindungi (tahapan, rekening bersama, earn-out), lalu akta, pengesahan, notifikasi KPPU bila terkena ambang, dan pengurusan pasca-transaksi sampai nama dan sistem benar-benar berpindah. Untuk penjual: menata dokumen dan data room sebelum calon pembeli datang, memperlihatkan nilai yang seharusnya diperhitungkan, dan menjaga kewajiban yang tidak menggantung setelah serah terima. Transaksi dua arah yang aman itu mungkin — asalkan kedua sisi dibebani kewajiban yang sama rapi.",
    ],
    benefits: [
      { title: "Anda tahu persis apa yang dibeli", desc: "Due diligence membuka hutang, sengketa, dan kewajiban yang tersembunyi — sebelum tanda tangan, bukan sesudahnya." },
      { title: "Harga yang bisa dipertahankan", desc: "Negosiasi berjalan di atas data dan valuasi — bukan atas kesan, kebanggaan, atau tekanan tenggat." },
      { title: "Pembayaran terstruktur dua pihak", desc: "Tahapan pembayaran, rekening bersama, dan earn-out menjaga pembeli dari overpay dan penjual dari kegagalan bayar." },
      { title: "Sah sampai ke sistem", desc: "Akta, pengesahan, buku saham, dan notifikasi KPPU bila terkena ambang — transaksi tidak berhenti di kertas jabat tangan." },
      { title: "Pasca-transaksi tidak menggantung", desc: "Perubahan akta, perbaruan NIB, penunjukan organ, dan integrasi dokumen ditutup rapi — perusahaan baru Anda benar-benar siap berjalan." },
    ],
    process: [
      { title: "Persiapan & data room", desc: "Tujuan transaksi dan strukturnya ditegaskan — dokumen target dikumpulkan terstruktur (untuk penjual: kekacauan dibereskan dulu)." },
      { title: "Due diligence & valuasi", desc: "Legalitas, pajak, ketenagakerjaan, aset, dan perizinan diperiksa — temuan menjadi dasar harga, jaminan, dan syarat penutupan." },
      { title: "Struktur & perundingan", desc: "Skema pembayaran disusun — tunai, bertahap, escrow, earn-out — lalu perjanjian utama diperundingkan dan diteken." },
      { title: "Penutupan & pasca-transaksi", desc: "Akta merger/akuisisi atau pengalihan saham diurus, pengesahan dan notifikasi selesai, pasca-transaksi dituntaskan sampai bersih." },
    ],
    requirements: [
      "Akta, SK pengesahan, NIB, dan perizinan perusahaan target",
      "Laporan keuangan dan data pajak (SPT, bukti setor) minimal dua tahun terakhir",
      "Daftar aset, kontrak penting, dan karyawan beserta status hubungan kerjanya",
      "Tujuan transaksi: porsi yang dibeli, skema pembayaran yang diharapkan, rencana pasca",
      "Kesediaan membuka data room dan memfasilitasi due diligence",
    ],
    faqs: [
      { q: "Berapa biaya proses akuisisi atau merger?", a: "Jasa pendampingan kami mulai Rp 20 juta — mencakup due diligence, penyusunan struktur, dan pengurusan inti transaksi; biaya menyesuaikan kompleksitas target dan ditulis transparan di penawaran. Di luar jasa ada biaya notaris dan pengesahan, serta PPh final 0,5% atas pengalihan saham yang nilainya mengikuti harga transaksi (PMK 68/2023). Notifikasi KPPU — bila transaksi terkena ambang — tidak berbiaya, tapi keterlambatannya berdenda; karena itu statusnya kami periksa sejak awal. Total kebutuhan dana Anda kami kalkulasi sebelum pekerjaan dimulai." },
      { q: "Lebih aman membeli saham atau membeli aset?", a: "Membeli saham berarti mewarisi seluruh perusahaan — termasuk seluruh kewajibannya yang tersembunyi; kelebihannya, kontrak dan perizinan umumnya berjalan tanpa perlu dialihkan satu per satu. Membeli aset berarti memilih apa yang dibeli dan kewajiban lama tidak ikut — tetapi tiap aset (tanah, kendaraan, kontrak) harus dialihkan sesuai prosedurnya, dan beberapa kontrak perlu persetujuan mitranya. Due diligence yang menentukan jalurnya: bila perusahaan bersih, beli saham lebih cepat; bila terlalu banyak kewajiban, beli aset lebih aman. Kami menyajikan kedua jalur dengan angkanya sebelum Anda memilih." },
      { q: "Berapa lama proses akuisisi biasanya selesai?", a: "Untuk target skala usaha kecil-menengah dengan dokumen tertata, 6–10 minggu dari due diligence sampai serah terima sudah realistis; bila ada struktur pembayaran bertahap, penataan dokumen, atau notifikasi KPPU, kisarannya naik ke 12–16 minggu. Yang paling sering memakan waktu bukan pengurusannya, tapi pengumpulan dokumen target — karena itulah penjual yang menyiapkan data room lebih dulu biasanya menutup lebih cepat dan dengan harga lebih baik. Jadwal penuh dengan titik-titik keputusannya kami serahkan di awal agar Anda bisa mengendalikan tempo transaksinya." },
    ],
    related: ["legal-drafting", "valuasi-bisnis", "pendirian-holding", "data-room-virtual"],
  },
  {
    slug: "spin-off-divestasi",
    tagline: "Melepas satu lengan supaya tubuh perusahaan bergerak lebih kuat.",
    heroSub:
      "Pemisahan unit usaha atau divestasi divisi dengan aset, pegawai, dan kontrak yang ikut pindah secara tertata — nilai unit yang dilepas maksimal, perusahaan induk yang tersisa tetap sehat.",
    timeline: "2–4 bulan, tergantung ukuran divisi yang dipisahkan",
    intro: [
      "UU 40/2007 mengenal pemisahan perseroan secara formal — perusahaan memisahkan aset, kewajiban, dan haknya menjadi dua entitas atau lebih, dengan atau tanpa penawaran saham ke pemegang lama (Pasal 1 ayat (11)). Divestasi bisa juga berjalan lebih ringkas: menjual saham unit yang sudah berbadan hukum, atau menjual aset unit yang masih menyatu. Ketiga jalur ini beda takarannya: pengalihan saham dikenai PPh final 0,5% (PMK 68/2023), pengalihan aset berjalan di bawah rezim PPh badan, dan pemisahan akta menuntut persetujuan RUPS serta pengesahan. Satu undang-undang ketenagakerjaan yang sering dilupakan menentukan kelancarannya: Pasal 163 UU 13/2003 — dalam pemisahan perusahaan, seluruh hak dan kewajiban hubungan kerja berlanjut ke penerima pengalihan, bukan putus.",
      "Kesalahan yang paling sering menggerogoti nilai divestasi: unit dilepas tanpa dokumen berdiri sendiri — laporan keuangan terpisah tidak ada, kontras dengan induk tidak jelas, sehingga calon pembeli menawar dari posisi ragu dan harga turun. Kesalahan kedua: aset dan kontrak dipindahkan dengan cara yang tidak diakui hukum, lalu klaim muncul dari pihak yang merasa haknya berpindah tanpa persetujuan. Kesalahan ketiga: pegawai dialihkan dengan surat pengumuman satu halaman — padahal hubungan kerjanya berpindah menurut Pasal 163 dan butuh komunikasi serta penyesuaian yang benar; sengketa yang lahir dari sini menurunkan nilai penjualan sekaligus. Pajak yang tidak dihitung dulu melengkapi daftar itu — menggerus hasil penjualan di tengah jalan.",
      "Kami mengawali dengan kajian struktur: jual saham, jual aset, atau pemisahan lewat akta — dengan perbandingan pajak, waktu, dan dampaknya pada induk. Lalu pekerjaan pemisahan: entitas baru didirikan bila jalurnya menuntut, aset dan kontrak dipetakan serta dialihkan sesuai prosedurnya, pegawai dialihkan dengan alur yang sah dan manusiawi, data room penjualan disusun supaya calon pembeli menemukan unit yang tertata, dan negosiasi didampingi sampai serah terima. Setelahnya kepatuhan pasca ikut kami tuntaskan: pelaporan, perubahan perizinan, dan penyesuaian struktur induk. Unit yang Anda lepaskan harus keluar dengan harga terbaik — dan induk yang tersisa harus lebih fokus, bukan lebih lemah.",
    ],
    benefits: [
      { title: "Nilai unit terlihat dan maksimal", desc: "Laporan terpisah, dokumen tertata, dan data room rapi — pembeli menawar berdasarkan nilai, bukan keraguan." },
      { title: "Induk lebih fokus, bukan lebih lemah", desc: "Sumber daya dan manajemen kembali terkonsentrasi pada unit inti — pemisahan menjadi penguatan, bukan luka." },
      { title: "Pegawai ikut pindah tanpa drama", desc: "Pengalihan hubungan kerja berjalan sesuai Pasal 163 UU 13/2003 — hak terjaga, sengketa terhindar, operasional tidak terganggu." },
      { title: "Pajak diketahui sebelum tanda tangan", desc: "Jalur jual saham atau jual aset diperbandingkan takarannya lebih dulu — hasil penjualan tidak tergerus kejutan di tengah jalan." },
      { title: "Pembeli menerima paket siap jalan", desc: "Aset, kontrak, perizinan, dan tim yang sudah berdiri sendiri — transaksi ditutup lebih cepat dengan harga yang lebih baik." },
    ],
    process: [
      { title: "Kajian struktur & pilihan jalur", desc: "Jual saham, jual aset, atau pemisahan akta diperbandingkan — pajak, waktu, dan dampaknya pada induk dipetakan." },
      { title: "Pemisahan aset, kontrak & pegawai", desc: "Aset dan kontrak dialihkan sesuai prosedurnya, pegawai berpindah dengan alur yang sah — dokumen pemisahan tertib semua." },
      { title: "Akta, perizinan & penawaran", desc: "Entitas baru didirikan bila diperlukan, perizinan disesuaikan, data room disiapkan — penawaran ke calon pembeli didampingi." },
      { title: "Serah terima & kepatuhan pasca", desc: "Pembayaran dan serah terima ditutup, pelaporan dan penyesuaian perizinan selesai — induk dan unit baru sama-sama bersih." },
    ],
    requirements: [
      "Data divisi yang dilepas: aset, omzet, karyawan, dan kontrak pentingnya",
      "Akta, SK pengesahan, dan laporan keuangan perusahaan induk",
      "Tujuan melepasnya: kebutuhan tunai, fokus bisnis, atau pemisahan kepemilikan",
      "Calon pembeli bila sudah ada (atau kesediaan kami bantu menyiapkan penawarannya)",
      "Kesediaan menjalankan proses bertahap sesuai urutan yang aman secara pajak",
    ],
    faqs: [
      { q: "Berapa biaya proses spin-off atau divestasi?", a: "Jasa pendampingan kami mulai Rp 15 juta untuk kajian struktur dan seluruh pengurusan inti — ditulis lengkap di penawaran sebelum pekerjaan berjalan. Di luar itu ada biaya notaris dan pengesahan bila jalur menuntut akta baru, serta pajak pengalihan yang besarannya bergantung jalur: PPh final 0,5% untuk pengalihan saham, rezim PPh badan untuk pengalihan aset. Karena perbedaan jalur bisa mengubah total pajak secara signifikan, takarannya kami sajikan di tahap kajian — keputusan jalur diambil dengan angka di tangan." },
      { q: "Lebih baik menjual saham unit atau menjual asetnya?", a: "Menjual saham lebih ringkas — satu transaksi, seluruh unit berpindah, pembeli menerima perusahaan yang berdiri sendiri; konsekuensinya, seluruh kewajiban unit ikut berpindah, jadi unit harus bersih lebih dulu. Menjual aset memberi kendali penuh atas apa yang dibeli dan kewajiban lama tidak ikut — tetapi tiap aset dialihkan sesuai prosedurnya dan kontrak mungkin butuh persetujuan mitra. Untuk unit yang tertata, jual saham biasanya lebih cepat dan harganya lebih baik; untuk unit yang berantakan kewajibannya, jual aset lebih aman. Kajian awal kami membandingkan keduanya dengan angka nyata milik Anda." },
      { q: "Apa yang terjadi pada karyawan divisi yang dilepas?", a: "Menurut Pasal 163 UU 13/2003, dalam pemisahan perusahaan seluruh hak dan kewajiban hubungan kerja berlanjut ke penerima pengalihan — karyawan tidak otomatis di-PHK, dan masa kerjanya berlanjut. Meski begitu, pengalihan tetap butuh ditangani dengan benar: komunikasi yang jujur, penyesuaian perjanjian kerja bila strukturnya berubah, dan pengurusan administrasinya. Penanganan yang baik justru menjadi nilai jual — pembeli menerima tim yang tenang dan produktif, bukan tim yang sedang panik. Kami menyiapkan alur ini bersama tim SDM Anda." },
    ],
    related: ["akuisisi-merger-umkm", "pendirian-holding", "phk-terkelola", "perubahan-akta"],
  },
  {
    slug: "piagam-keluarga-bisnis",
    tagline: "Perusahaan keluarga yang tahan badai dibangun bukan dari darah — tapi dari aturan yang disepakati saat damai.",
    heroSub:
      "Piagam keluarga bisnis: konstitusi tertulis yang mengatur siapa boleh masuk, siapa berkuasa, bagaimana dividen dibagi, dan bagaimana pertengkaran diselesaikan — disusun ketika semua orang masih berdamai, bukan saat sudah terlanjur tidak.",
    timeline: "2–4 minggu, termasuk sesi forum keluarga",
    intro: [
      "Mayoritas korporasi Indonesia adalah bisnis keluarga — dan penelitian lintas negara memberi angka yang konsisten: hanya sekitar sepertiga yang bertahan ke generasi kedua, dan kurang dari seperlima sampai generasi ketiga. Pembunuhnya jarang kompetitor; pembunuhnya adalah keluarga itu sendiri — sengketa saham antara saudara, menantu dan anak yang bertarung di ruang direksi, dividen yang dibagikan tanpa aturan, dan pendiri yang memerintah dari kursi sampai tidak bisa lagi. Piagam keluarga bisnis adalah jawaban yang sudah terbukti di korporasi keluarga dunia: sebuah konstitusi tertulis yang mengatur nilai keluarga, kedudukan tiap anggota (pemilik, pengurus, pekerja, atau penerima manfaat), aturan masuk-keluarga ke perusahaan, kebijakan dividen, forum keluarga, dan mekanisme penyelesaian sengketa — berdiri di atas kebebasan berkontrak Pasal 1338 KUHPerdata dan disinkronkan dengan struktur saham di UU 40/2007.",
      "Kesalahan yang paling umum bukan menyusun piagam yang salah — tapi menunda menyusunnya sama sekali: 'nanti kalau anak-anak sudah besar', padahal aturan yang disusun saat damai adalah satu-satunya yang dihormati saat tidak damai. Kesalahan kedua: aturan hanya ada di kepala pendiri — dan berakhir di rumah sakit bersama sang pendiri. Kesalahan ketiga: piagam disusun sekadar formalitas lalu tidak pernah dipakai — tidak ada forum keluarga yang menjalankannya, tidak ada evaluasi, tidak ada mekanisme sengketa yang benar-benar dituntun. Dan kesalahan yang paling mahal: mengandalkan dokumen notaris saja tanpa mengikatnya ke struktur perusahaan — piagam yang tidak tersinkron dengan perjanjian pemegang saham dan akta mudah dilanggar karena tidak ada konsekuensinya.",
      "Kami bekerja dengan pendekatan yang membuat piagam hidup: fasilitasi forum keluarga yang dimoderasi netral — tempat harapan dan ketakutan tiap anggota diucapkan sebelum ditulis; perumusan konstitusi yang mencakup nilai, matriks kedudukan anggota, kebijakan dividen, aturan masuk anggota keluarga ke perusahaan (kriteria, pendidikan, pengalaman), dan mekanisme sengketa bertingkat — dari mediasi keluarga, majelis penengah, sampai arbitrase (UU 30/1999). Dokumen disinkronkan dengan perjanjian pemegang saham dan akta supaya ia benar-benar mengikat perusahaan, lalu ditandatangani semua pihak kunci dengan kalender evaluasi berkala — karena piagam yang baik adalah dokumen hidup, yang ikut dewasa bersama keluarganya.",
    ],
    benefits: [
      { title: "Konflik diselesaikan tanpa meruntuhkan usaha", desc: "Mekanisme bertingkat mengambil sengketa sebelum ia merangkak ke ruang pengadilan atau gosip keluarga." },
      { title: "Generasi berikutnya tahu aturannya sejak awal", desc: "Tidak ada harapan tersembunyi yang menjadi luka: syarat masuk, hak, dan batas sudah tertulis jauh sebelum dibutuhkan." },
      { title: "Dividen dan pekerjaan keluarga ada kebijakannya", desc: "Berapa yang dibagikan, berapa yang diputar, dan bagaimana anggota keluarga bekerja — ditentukan aturan, bukan suasana hati." },
      { title: "Kedudukan pemilik dan pengurus tidak tertukar", desc: "Yang memegang saham dan yang menjalankan perusahaan dipisahkan perannya — pendiri tidak memerintah dari ranjang rumah sakit." },
      { title: "Kesepakatan yang mengikat perusahaan", desc: "Piagam disinkronkan dengan SHA dan akta — bukan dokumen rasa yang lemah saat diuji." },
    ],
    process: [
      { title: "Forum keluarga pertama", desc: "Sesi dimoderasi netral — harapan, ketakutan, dan keluhan tiap anggota diucapkan dan dicatat sebelum aturan dirumuskan." },
      { title: "Perumusan konstitusi keluarga", desc: "Nilai, matriks kedudukan, kebijakan dividen, aturan masuk, dan mekanisme sengketa dirumuskan bersama — bahasanya bahasa keluarga sendiri." },
      { title: "Sinkronisasi dengan struktur perusahaan", desc: "Piagam diikat ke perjanjian pemegang saham dan akta — ketentuannya punya daya berlaku, bukan hanya daya ingat." },
      { title: "Penandatanganan & kalender evaluasi", desc: "Seluruh pihak kunci menandatangani, forum keluarga dijadwalkan berkala — piagam dievaluasi dan ikut berkembang." },
    ],
    requirements: [
      "Silsilah anggota keluarga dan kedudukan mereka saat ini",
      "Struktur perusahaan: akta, porsi saham, dan organ yang berjalan",
      "Permasalahan yang pernah atau sedang muncul (ditutup, bukan disembunyikan)",
      "Kesediaan seluruh pihak kunci hadir di forum keluarga",
      "Gambaran jangka panjang yang diinginkan keluarga (siapa melanjutkan, bagaimana berbagi)",
    ],
    faqs: [
      { q: "Apakah piagam keluarga bisnis itu akta notaris?", a: "Bukan semata akta — piagam adalah dokumen kesepakatan keluarga yang menangkap nilai, kedudukan, dan aturan main yang jauh lebih dalam daripada yang bisa ditampung akta. Agar mengikat perusahaan, ketentuan-ketentuan operasionalnya kami jemput ke dokumen yang berdaya hukum: perjanjian pemegang saham, akta perubahan, atau kuasa-kuasa tertentu. Jadi komposisinya dua lapis: piagam sebagai konstitusi, dokumen legal sebagai giginya. Keluarga yang hanya punya akta biasanya kehilangan nilai; keluarga yang hanya punya piagam tanpa gigi legal kehilangan daya tahan." },
      { q: "Berapa biaya menyusun piagam keluarga bisnis?", a: "Jasa kami mulai Rp 10 juta — mencakup fasilitasi forum keluarga, perumusan konstitusi, dan sinkronisasi dengan struktur perusahaan. Untuk keluarga dengan cabang-cabang besar atau konflik yang sudah berjalan, diperlukan sesi forum tambahan yang kalkulasinya transparan sebelum berjalan. Biaya notaris muncul bila ketentuan dijemput ke akta atau SHA — dan kami sarankan itu, karena piagam tanpa gigi legal mudah dilanggar. Dibandingkan satu sengketa saudara yang berujung gugatan, biaya ini jauh lebih murah dari sekadar angka." },
      { q: "Keluarga kami sudah mulai bertengkar — apakah masih bisa disusun?", a: "Bisa, dan sering kali justru paling tepat disusun saat itu — karena semua pihak akhirnya menyadari bahwa tanpa aturan tertulis, pertengkaran berikutnya lebih merusak lagi. Yang berbeda hanyalah pendekatannya: fasilitator netral menjadi wajib, agenda berfokus pada aturan ke depan bukan menghakimi masa lalu, dan langkah pertama biasanya menahan hal-hal yang bisa memperburuk (pengalihan saham, pengangkatan jabatan) sampai kesepakatan dasar tercapai. Keluarga yang datang saat pertengkaran masih di permukaan hampir selalu pulang dengan dokumen; yang datang setelah gugatan diajukan datang dengan kantong pengacara." },
    ],
    related: ["suksesi-penerus", "perjanjian-pemegang-saham", "tata-kelola-korporat", "pendirian-pt"],
  },
  {
    slug: "suksesi-penerus",
    tagline: "Kepemimpinan terbaik adalah yang dipindahkan sebelum ia terpaksa dipindahkan.",
    heroSub:
      "Perencanaan suksesi: pemetaan penerus dan kesiapannya, pengalihan saham beserta pajaknya, struktur testamen atau hibah — supaya kepemimpinan dan kepemilikan berpindah terencana, bukan lewat drama keluarga saat sudah terlambat.",
    timeline: "1–3 bulan untuk struktur; pengembangan penerus berjalan bertahun",
    intro: [
      "Angka yang berulang di riset bisnis keluarga dunia: mayoritas tidak lolos ke generasi kedua, dan sekitar 90% hilang sebelum generasi ketiga — bukan karena bisnisnya gagal, tapi karena peralihannya tidak pernah direncanakan. Hukum Indonesia punya skenario default yang keras: pendiri meninggal tanpa wasiat, saham diwariskan menurut hukum kewarisan (KUHPerdata Pasal 830 dan seterusnya) — terbagi ke seluruh ahli waris — dan kendali perusahaan pecah di tengah masa duka. Ada pula takaran yang harus diketahui sejak awal: warisan dan hibah bukan objek PPh (Pasal 4 ayat (3) UU PPh), tetapi pengalihan saham PT tanpa harga pasar — termasuk skema hibah saham — dikenai PPh final 0,5% atas nilai pengalihaannya (PMK 68/2023); hibah antar-hidup menuntut akta notaris (Pasal 1666 KUHPerdata), dan wasiat disusun menurut aturan testamen (KUHPerdata Pasal 892 dan seterusnya).",
      "Kesalahan yang paling sering: menunggu — suksesi disusun saat kesehatan sudah menurun, saat keputusan paling besar harus diambil di masa paling lemah. Kesalahan kedua: saham dibagi rata ke semua anak tanpa membedakan siapa yang mengelola dan siapa yang memanfaatkan — hasilnya dua kubu di satu ruang direksi, atau saudara yang tidak tertarik usaha tetap memegang saham penuh hak suara. Kesalahan ketiga: penerus ditunjuk tapi tidak disiapkan — tidak ada pengembangan, tidak ada tanggung jawab bertahap, dan saat kursinya kosong ia berdiri di depan perusahaan yang tidak ia pahami. Dan yang meringkus semuanya: pajak pengalihan tidak pernah dihitung, sehingga pengalihan yang sudah direncanakan pun tergantung karena beban dananya tidak disiapkan.",
      "Kami menyusun suksesi sebagai program bertahap, bukan satu tanda tangan: pemetaan penerus dan kesiapannya (termasuk kejujuran bila penerus yang paling dekat bukan yang paling siap), desain struktur pengalihan bertahap — hibah saham yang dijadwalkan, struktur holding yang memisahkan kepemilikan dari manajemen, pengangkatan penerus profesional bila keluarga tidak menyediakan — dengan takaran pajak 0,5% final dihitung dan dijadwalkan lebih dulu. Dokumen kewarisan (testamen, akta hibah via notaris mitra) disusun selaras dengan struktur saham, didukung perjanjian pemegang saham yang melindungi perusahaan saat transisi, dan program pengembangan penerus yang menjadikan suksesi proses bertahun-tahun — bukan kejutan satu malam.",
    ],
    benefits: [
      { title: "Kendali tidak pecah oleh kewarisan otomatis", desc: "Struktur pengalihan mencegah saham terbagi bata ke semua ahli waris — kendali tetap pada tangan yang mengelola." },
      { title: "Pajak dihitung, bukan kejutan", desc: "PPh final 0,5% atas pengalihan saham dihitung dan dijadwalkan sejak awal — pengalihan tidak tergantung karena dana yang tidak disiapkan." },
      { title: "Penerus siap sebelum terpilih", desc: "Program pengembangan dan tanggung jawab bertahap — suksesi adalah pendewasaan, bukan pengumuman mendadak." },
      { title: "Dokumen kewarisan tidak jadi medan gugatan", desc: "Testamen, akta hibah, dan SHA disusun selaras — tiap ahli waris tahu kedudukannya tanpa perlu bertarung." },
      { title: "Perusahaan tetap berjalan di masa peralihan", desc: "Masa transisi dijalankan sesuai peta yang sudah ditulis — pelanggan, bank, dan karyawan tidak merasakan guncangan." },
    ],
    process: [
      { title: "Pemetaan penerus & kesiapan", desc: "Calon penerus, kapasitasnya, dan keinginan pendiri dipetakan dengan jujur — termasuk opsi penerus profesional." },
      { title: "Desain struktur pengalihan & pajaknya", desc: "Jalur hibah bertahap, holding, dan wasiat dirancang — takaran 0,5% final dan biaya notaris dihitung lebih dulu." },
      { title: "Penyusunan dokumen kewarisan", desc: "Testamen dan akta hibah disusun via notaris, sinkron dengan akta saham dan perjanjian pemegang saham." },
      { title: "Implementasi bertahap & pengembangan penerus", desc: "Pengalihan berjalan sesuai jadwal, penerus dibesarkan melalui tanggung jawab bertahap — evaluasi berkala menjaga arahnya." },
    ],
    requirements: [
      "Struktur kepemilikan saat ini: akta, porsi saham, dan data seluruh pemegang",
      "Daftar calon penerus dan peran mereka selama ini di perusahaan",
      "Keinginan pendiri: siapa mengelola, siapa memanfaatkan, apa yang diserahkan",
      "Kondisi usia dan kesehatan (memengaruhi prioritas jadwal)",
      "Kesediaan menjalankan pengalihan secara bertahap, bukan sekaligus",
    ],
    faqs: [
      { q: "Berapa biaya perencanaan suksesi?", a: "Jasa penyusunan struktur suksesi kami mulai Rp 10 juta — mencakup pemetaan, desain struktur, dan koordinasi seluruh dokumen. Di luar itu ada biaya notaris untuk akta hibah dan testamen yang menyesuaikan jumlah aset yang dialihkan, serta PPh final 0,5% atas nilai pengalihan saham (PMK 68/2023) yang kami hitung dan jadwalkan sejak tahap desain. Pengalihan bertahap memungkinkan beban pajak tersebar antar tahun sesuai kemampuan — itu salah satu alasan suksesi direncanakan bertahun-tahun, bukan dikejar dalam sebulan." },
      { q: "Hibah saham kepada anak apakah dikenai pajak?", a: "Hibah itu sendiri bukan objek PPh — Pasal 4 ayat (3) UU PPh mengecualikan hibah dan warisan dari objek pajak penghasilan. Tetapi pengalihan saham perseroan terbatas tanpa harga pasar — termasuk melalui hibah — dikenai PPh final 0,5% atas nilai pengalihaannya menurut PMK 68/2023, dengan nilai yang ditetapkan secara realistis. Artinya biaya pajaknya tetap ada dan harus diperhitungkan dalam rencana pengalihan. Karena itulah strategi bertahap dan penilaian nilai yang benar penting: pajaknya dijadwalkan, bukan mengejutkan." },
      { q: "Tidak ada anak saya yang tertarik mengelola bisnis — bagaimana suksesinya?", a: "Itu skenario yang jauh lebih sehat ketimbang memaksakan penerus yang tidak ingin: keluarga tetap menjadi PEMILIK melalui struktur kepemilikan (biasanya holding), sementara pengelolaan diserahkan ke direksi profesional yang diawasi komisaris yang berpengalaman. Pendapatan keluarga mengalir sebagai dividen sesuai kebijakan yang tertulis, dan penerus bisa dilibatkan di level pengawasan — dewan komisaris atau dewan penasihat — tanpa menjalankan operasional. Banyak bisnis keluarga justru selamat generasi kedua persis karena berani melepas asumsi 'harus anak yang menjadi direktur'. Strukturnya kami susun agar kendali keluarga tetap nyata, bukan hanya simbolik." },
    ],
    related: ["piagam-keluarga-bisnis", "valuasi-bisnis", "perubahan-akta", "dewan-komisaris-mandiri"],
  },
  {
    slug: "perjanjian-pemegang-saham",
    tagline: "Akta mengatakan siapa pemiliknya — SHA mengatakan bagaimana ia memerintah.",
    heroSub:
      "Perjanjian Pemegang Saham yang melindungi minoritas, mengikat mayoritas, dan sudah menyiapkan jawaban untuk kebuntuan: hak suara, kurungan pengalihan, tag-along, drag-along, kebijakan dividen, dan jalur keluar.",
    timeline: "7–14 hari kerja setelah data pemegang saham lengkap",
    intro: [
      "Akta pendirian adalah dokumen wajib (UU 40/2007) — tetapi ia dirancang untuk mengikat perusahaan terhadap negara dan pihak ketiga, bukan untuk mengatur detail hubungan antar pemegang saham. Pertanyaan-pertanyaan yang paling sering menghancurkan perusahaan justru hidup di wilayah yang tidak ditulis akta: berapa kuorum keputusan strategis, bolehkah saham dijual ke siapa saja, apa hak pemegang minoritas ketika mayoritas menjual, kapan dan berapa dividen dibagikan, dan apa yang terjadi ketika dua kubu tidak bisa memutuskan apa pun. Di sanalah Perjanjian Pemegang Saham (Shareholders Agreement, SHA) berdiri — dilindungi kebebasan berkontrak Pasal 1338 KUHPerdata, dan diperkuat klausul penyelesaian sengketa yang menjunjung UU 30/1999 tentang arbitrase dan penyelesaian sengketa.",
      "SHA yang buruk lebih berbahaya daripada tidak ada: templat internet yang tidak cocok dengan kondisi pemegang saham, klausul yang bertentangan dengan akta sehingga lemah saat diuji, atau SHA yang ditandatangani lalu tidak pernah disinkronkan dengan buku saham. Ketiadaan ketentuan inti berakibat klasik: pemegang minoritas yang didominasi tanpa perlindungan; saham dialihkan ke pihak asing tanpa hak membeli dahulu (right of first refusal) bagi pemegang lama; tahun-tahun perusahaan untung tanpa dividen karena tidak ada kebijakannya; dan kebuntuan 50-50 yang tidak punya mekanisme keluar — perusahaan lumpuh, dua kubu saling mengunci, operasional jadi sandera. Semua itu terjadi bukan karena orangnya jahat, tapi karena aturannya tidak pernah ditulis.",
      "Kami menyusun SHA dari pemetaan kepentingan nyata tiap pemegang — bukan dari templat: hak suara dan ambang keputusan untuk hal-hal strategis, kurungan pengalihan saham dengan hak membeli dahulu, klausul tag-along yang membawa minoritas ikut terjual, drag-along yang membebaskan mayoritas menjual tanpa meninggalkan sisa, kebijakan dividen dan pendanaan lanjutan, mekanisme kebuntuan bertingkat (negosiasi, mediasi, hingga skema jual-beli), dan klausul kerahasiaan serta nonkompetisi. Dokumen diperundingkan sampai seimbang, disinkronkan dengan akta dan buku pemegang saham, lalu ditandatangani seluruh pemegang — sehingga aturan main perusahaan Anda berdiri di atas dokumen, bukan di atas kepercayaan yang bisa habis.",
    ],
    benefits: [
      { title: "Minoritas terlindungi, mayoritas tetap bergerak", desc: "Hak informasi, perlindungan tag-along, dan ambang keputusan menjaga keseimbangan — tanpa mematikan kemampuan memutuskan." },
      { title: "Kursi tidak dijual begitu saja", desc: "Kurungan pengalihan dan hak membeli dahulu memastikan saham tidak berpindah ke pihak asing tanpa persetujuan." },
      { title: "Untung akhirnya sampai ke pemegang", desc: "Kebijakan dividen tertulis — pembagian laba menjadi kewajiban yang jelas, bukan pemberian yang menunggu suasana hati." },
      { title: "Kebuntuan punya jalan keluar tertulis", desc: "Mekanisme bertingkat dari negosiasi sampai skema jual-beli — perusahaan tidak menjadi sandera dua kubu yang saling mengunci." },
      { title: "Investor tahu aturannya sejak awal", desc: "SHA yang rapi menjadi sinyal kedewasaan — due diligence pendanaan berjalan lebih cepat dan tawaran lebih baik." },
    ],
    process: [
      { title: "Pemetaan kepentingan pemegang saham", desc: "Posisi, ekspektasi, dan kekhawatiran tiap pemegang dipetakan — dasar perumusan klausul yang benar-benar dipakai." },
      { title: "Perumusan klausul inti", desc: "Hak suara, pengalihan, tag-along, drag-along, dividen, dan deadlock dirumuskan sesuai kondisi perusahaan Anda." },
      { title: "Perundingan & penyempurnaan", desc: "Draf diperundingkan hingga seimbang — istilah teknis dijelaskan, konsekuensi tiap klausul diperlihatkan jujur." },
      { title: "Penandatanganan & sinkronisasi akta", desc: "Dokumen diteken seluruh pemegang, disinkronkan dengan akta dan buku saham — aturan main siap diuji kapan pun." },
    ],
    requirements: [
      "Daftar pemegang saham beserta porsi dan perannya",
      "Akta pendirian dan seluruh akta perubahannya",
      "Rencana ke depan: rencana masuknya investor, pengalihan, atau exit",
      "Gesekan atau risiko yang dirasakan tiap pihak (ditutup sejak sini, bukan saat sengketa)",
      "Kesediaan seluruh pemegang kunci mengikuti perundingan yang terbuka",
    ],
    faqs: [
      { q: "Berapa biaya menyusun perjanjian pemegang saham?", a: "Jasa penyusunan kami mulai Rp 6 juta untuk perusahaan dengan struktur pemegang saham yang wajar — mencakup pemetaan, draf, dan satu putaran perundingan. Bila pihak yang duduk di meja banyak atau kepentingannya berjauhan, putaran perundingan tambahan dihitung transparan per sesi. Biaya notaris muncul bila klausul tertentu perlu dijemput ke akta agar mengikat perusahaan — dan kami sarankan untuk klausul yang paling penting. Total biayanya tetap jauh di bawah satu sengketa saham yang berujung di pengadilan." },
      { q: "Apa bedanya SHA dengan akta pendirian?", a: "Akta pendirian mengikat perusahaan sebagai badan hukum dan diumumkan ke publik — isinya dibatasi hal-hal yang diatur undang-undang. SHA mengatur hubungan antar pemegang saham dengan detail yang memang tidak patut ditulis di akta: tag-along, drag-along, hak membeli dahulu, kebijakan dividen, dan mekanisme kebuntuan. Keduanya harus sinkron — SHA yang bertentangan dengan akta akan kalah posisi saat diuji, karena akta adalah dokumen yang dibaca negara. Pekerjaan kami memastikan keduanya satu bahasa: aturan di SHA punya gigi di akta." },
      { q: "Apakah SHA mengikat pihak yang tidak ikut menandatangani?", a: "Pada dasarnya SHA mengikat para penandatangan — dan justru karena itu seluruh pemegang saham kunci harus ikut menandatangani, bukan hanya sebagian. Namun beberapa klausul tetap berdaya terhadap pihak ketiga: hak membeli dahulu yang diikuti dengan pembatasan pencatatan pengalihan saham, klausul kerahasiaan yang disertai sanksi kontraktual, dan ketentuan yang dijemput ke akta sehingga terbaca siapa pun yang memeriksa. Investor yang masuk kemudian biasanya menerima SHA melalui perjanjian aksesi — inilah sebabnya SHA yang baik dirancang siap-aksesi sejak awal. Perencanaannya kami lakukan sejak draf pertama." },
    ],
    related: ["pendirian-pt", "pt-pma", "joint-venture", "perjanjian-pendiri-vesting"],
  },
  {
    slug: "tata-kelola-korporat",
    tagline: "Kredibilitas tidak dinyatakan — ia disusun, ditulis, dan dilaporkan.",
    heroSub:
      "Manual tata kelola, kode etik, sistem pelaporan pelanggaran (whistleblowing), dan pelatihannya — struktur pemerintahan perusahaan yang membuat bank, investor, dan tender BUMN percaya Anda sejak dokumen pertama.",
    timeline: "3–6 minggu sampai dokumen dan sosialisasi selesai",
    intro: [
      "Good corporate governance dulu dianggap urusan emiten dan bank besar — kini ia menjadi prasyarat praktis bagi hampir semua pertumbuhan: kuesioner pra-kualifikasi tender BUMN dan proyek pemerintah, kredit korporasi, masuk rantai pasok global, dan due diligence investor semuanya menanyakan hal yang sama — bagaimana perusahaan Anda dipimpin, diawasi, dan dijaga dari kecurangan. Kerangkanya sudah tersedia lama di Indonesia: UU 40/2007 menetapkan organ perusahaan dan tanggung jawabnya, Pedoman Umum Good Corporate Governance Indonesia dari KNKGC menjadi rujukan nasionalnya, POJK 21/POJK.04/2023 bahkan memperluas tata kelola ke pelaku usaha keluarga dan konglomerasi di sektor JII, dan Peraturan Menteri BUMN PER-2/MBU/03/2023 menuntut integritas dari vendor yang bekerja dengan BUMN. Elemen intinya sederhana namun menuntut kesungguhan: manual tata kelola, kode etik, pengelolaan konflik kepentingan, dan sistem whistleblowing yang melindungi pelapor.",
      "Kegagalan tata kelola punya wajah yang membosankan tapi mahal: dokumen disusun sekadar mengarungi tender lalu disimpan — saat auditor atau kuesioner berikutnya datang, isinya tidak cocok dengan praktik nyata. Kode etik tidak pernah disosialisasikan sehingga karyawan tidak tahu ia ada; kanal whistleblowing berdiri tanpa perlindungan pelapor sehingga tidak ada yang berani memakainya; konflik kepentingan terjadi setiap hari tanpa pencatatan; dan tidak ada evaluasi berkala — seluruh struktur hidup di atas kertas. Akibatnya bukan hanya gagal tender: fraud yang berjalan bertahun-tahun tidak terdeteksi, keputusan penting tidak tercatat sehingga tidak ada yang bisa dipertanggungjawabkan, dan bank yang membaca profil risiko perusahaan memberi kesimpulan sendiri.",
      "Kami menyusun tata kelola yang proporsional dengan ukuran Anda — bukan dokumen seribu halaman yang tidak pernah dibaca: asesmen praktik yang sudah berjalan, manual tata kelola dan pembentukan komite yang realistis (audit dan pengendalian risiko dengan format yang sesuai skala), kode etik beserta mekanisme pencatatan konflik kepentingan, kebijakan whistleblowing dengan kanal yang aman dan perlindungan pelapor yang nyata, lalu pelatihan dan sosialisasi sampai budayanya menyentuh lini — ditutup kesiapan menjawab kuesioner tender, audit, dan due diligence. Hasilnya bukan tumpukan kertas: ia menjadi alat yang membuat perusahaan Anda terbaca sebagai pihak yang bisa dipercaya — di ruang rapat bank, tender, dan meja investor.",
    ],
    benefits: [
      { title: "Lolos kuesioner tender dan pra-kualifikasi", desc: "Jawaban atas kuesioner GCG, kode etik, dan whistleblowing tersedia dan cocok dengan praktik nyata perusahaan." },
      { title: "Kredit bank dengan profil yang terbaca", desc: "Tata kelola yang tertata menurunkan persepsi risiko — negosiasi plafon dan suku bunga berjalan dari posisi yang lebih kuat." },
      { title: "Fraud dan kebocoran terkendali", desc: "Kanal pelaporan yang aman dan pengendalian yang nyata menyingkap masalah lebih dulu — sebelum menjadi kerugian besar." },
      { title: "Keputusan bertanggung jawab dan tercatat", desc: "Struktur rapat, kewenangan, dan pencatatan membuat tiap keputusan besar bisa ditelusuri — dan dipertanggungjawabkan." },
      { title: "Budaya, bukan sekadar dokumen", desc: "Pelatihan dan sosialisasi menuntaskan gap antara dokumen dan praktik — tata kelola yang dijalankan, bukan disimpan." },
    ],
    process: [
      { title: "Asesmen tata kelola", desc: "Praktik berjalan dipetakan terhadap pedoman GCG — celah dan risiko teridentifikasi dengan prioritas yang jelas." },
      { title: "Penyusunan manual & kode etik", desc: "Manual tata kelola, kewenangan organ, komite yang proporsional, kode etik, dan mekanisme konflik kepentingan disusun." },
      { title: "Sistem pelaporan & kanal aman", desc: "Kebijakan whistleblowing dengan perlindungan pelapor ditetapkan — kanal pelaporan dinyalakan dan diuji." },
      { title: "Pelatihan, sosialisasi & evaluasi", desc: "Pimpinan dan karyawan dilatih, kesiapan menjawab tender/audit disiapkan, kalender evaluasi berkala ditetapkan." },
    ],
    requirements: [
      "Struktur organ saat ini: direksi, komisaris, dan organ lain yang berjalan",
      "Dokumen internal yang sudah ada: SOP, deskripsi kerja, peraturan perusahaan",
      "Konteks penggunaannya: tender BUMN/pemerintah, kredit bank, atau kesiapan investor",
      "Riwayat kejadian kepatuhan yang pernah terjadi (ditutup, bukan disembunyikan)",
      "Komitmen pimpinan puncak menjalankan hasilnya — bukan sekadar menandatangani",
    ],
    faqs: [
      { q: "Perusahaan saya masih kecil — apakah benar perlu tata kelola korporat?", a: "Perlu — dengan skala yang proporsional. Yang menuntut perusahaan kecil bukan undang-undang tata kelola yang rumit, tapi pintu-pintu pertumbuhannya: tender BUMN dan pemerintah menanyakan kode etik dan whistleblowing, bank menilai profil tata kelola sebelum memberi kredit, dan investor melihat struktur pemerintahan sebagai sinyal kedewasaan. Tata kelola untuk usaha kecil berarti manual yang ringkas, kode etik satu-dua halaman yang benar-benar dijalankan, dan kanal pelaporan sederhana yang aman — bukan dokumen seribu halaman. Kebalikannya juga benar: perusahaan besar tanpa tata kelola berdiri di atas kebiasaan, dan kebiasaan tidak diuji." },
      { q: "Berapa biaya menyiapkan tata kelola korporat?", a: "Jasa kami mulai Rp 10 juta — mencakup asesmen, penyusunan manual dan kode etik, kebijakan whistleblowing, serta sesi sosialisasi pertama. Kanal whistleblowing bisa berjalan dengan pengaturan sederhana tanpa biaya berkelanjutan, atau berlangganan fitur lanjutan bila perusahaan Anda membutuhkannya; pelatihan batch tambahan dihitung transparan. Pembaruan tahunan disarankan agar dokumen mengikuti perubahan perusahaan dan regulasi. Dibandingkan satu kegagalan tender atau satu kasus fraud yang terlambat terdeteksi, biayanya adalah angka terkecil dalam cerita ini." },
      { q: "Apa bedanya kode etik dengan sistem whistleblowing?", a: "Kode etik adalah normanya: nilai dan larangan yang menjadi dasar perilaku — konflik kepentingan, suap, rahasia dagang, perlakuan adil. Whistleblowing adalah mekanismenya: jalur bagi siapa pun untuk melaporkan pelanggaran kode etik itu, dengan perlindungan pelapor dan proses penanganan yang jelas. Dokumen tanpa mekanisme berhenti sebagai hiasan dinding; mekanisme tanpa norma tidak punya rujukan apa yang dilanggar. Keduanya kami susun sebagai satu paket yang saling mengunci — plus pelatihannya, karena keduanya hidup dari orang yang memahaminya." },
    ],
    related: ["dewan-komisaris-mandiri", "iso-37001-antisuap", "tata-kelola-ai", "perjanjian-pemegang-saham"],
  },
  {
    slug: "dewan-komisaris-mandiri",
    tagline: "Kursi yang selama ini kosong bisa jadi justru yang paling berpengaruh di ruang rapat.",
    heroSub:
      "Penempatan komisaris profesional independen yang benar-benar bekerja: mengawasi arah, menguji risiko, menantang rencana direksi — dan melaporkan semuanya secara berkala kepada pemilik.",
    timeline: "1–2 minggu untuk penempatan; layanan berjalan per bulan",
    intro: [
      "UU 40/2007 menuntut setiap PT memiliki komisaris — tugasnya mengawasi kebijakan pengurusan dan memberi nasihat kepada direksi (Pasal 108), dengan tanggung jawab hukum yang nyata bila tugas itu diabaikan. Realitasnya di ribuan perusahaan lain: kursi komisaris diisi saudara, sahabat, atau stempel hidup — tidak ada agenda kerja, tidak ada rapat, tidak ada laporan. Padahal kriteria independen dan fungsi pengawasan yang benar sudah lama menjadi standar dunia korporasi: POJK 33/POJK.04/2014 menuntut dewan komisaris independen minimal 30 persen untuk emiten, dan pedoman KNKGC memperluas standar yang sama ke seluruh korporasi. Komisaris independen adalah mata dan telinga pemilik di ruang yang tidak lagi mereka jalani langsung — sekaligus penasihat strategis yang pengalamannya dibangun dari banyak perusahaan, bukan satu.",
      "Kesalahan yang paling sering: komisaris dianggap jabatan kehormatan — diberi kepada orang dekat sebagai penghargaan, bukan diberi mandat kerja. Kesalahan kedua: honorarium diatur lisan tanpa kontrak penugasan — menciptakan zona abu-abu yang berbahaya bagi kedua sisi, sebab pengawasan yang dibayar tanpa struktur bisa disalahpahami sebagai hadiah, padahal justru kontrak penugasan yang tertulis membuatnya bersih dan profesional. Kesalahan ketiga: komisaris tidak diberi akses informasi — ia tidak bisa mengawasi yang tidak ia lihat, dan tanpa agenda rapat serta hak informasi, fungsinya mati diam-diam. Pada akhirnya yang paling merugi adalah pemilik: ia membayar kursi yang tidak bekerja, sementara risiko berjalan tanpa pengawasan.",
      "Kami menyediakan komisaris profesional yang benar-benar bekerja: pencocokan kandidat berdasarkan pengalaman industri dan kriteria independensi yang ketat, penetapan mandat yang tertulis — agenda kerja tahunan, frekuensi rapat, hak akses informasi, batas kewenangan — kontrak penugasan yang membuat honorarium bersih dan terdokumentasi, evaluasi kinerja berkala, dan laporan berkala ke pemilik. Komisaris kami hadir bukan untuk menyetujui semua keputusan direksi, tapi untuk mengujinya: menanyakan asumsi, menandai risiko, dan memastikan perusahaan berjalan sesuai arah pemiliknya. Untuk perusahaan yang menyiapkan kredit, investasi, atau suksesi, kursi yang diisi dengan benar ini sering menjadi pembeda yang paling murah namun paling terlihat.",
    ],
    benefits: [
      { title: "Pengawasan yang bekerja, bukan stempel", desc: "Agenda kerja, rapat terjadwal, dan hak informasi menjadikan fungsi pengawasan nyata — komisaris tidak lagi hiasan akta." },
      { title: "Nasihat dari pengalaman lintas perusahaan", desc: "Komisaris profesional membawa pola dan pengalaman dari banyak usaha — perspektif yang tidak bisa dibeli dari dalam." },
      { title: "Kredibilitas di mata bank dan investor", desc: "Dewan komisaris yang independen dan bekerja adalah sinyal kedewasaan — due diligence dan negosiasi berjalan lebih mulus." },
      { title: "Pemilik menerima laporan yang tidak difilter", desc: "Laporan berkala langsung ke pemilik — kebenaran yang tidak selalu dilaporkan direksi sampai ke tangan Anda." },
      { title: "Honorarium yang bersih dan tertulis", desc: "Kontrak penugasan membuat peran, kewajiban, dan imbalannya terdokumentasi — profesional dan bebas zona abu-abu." },
    ],
    process: [
      { title: "Pemetaan kebutuhan & profil kandidat", desc: "Tantangan perusahaan dan harapan pemilik dipetakan — profil komisaris yang tepat dirumuskan dari sini." },
      { title: "Penetapan mandat & agenda kerja", desc: "Ruang lingkup, agenda tahunan, frekuensi rapat, dan hak akses informasi ditetapkan tertulis — mandat yang bisa diukur." },
      { title: "Penempatan & kontrak penugasan", desc: "Kandidat cocok ditempatkan, akta perubahan organ diurus, kontrak penugasan ditandatangani — semua bersih sejak hari pertama." },
      { title: "Evaluasi berkala & laporan ke pemilik", desc: "Kinerja dievaluasi berkala, laporan terkirim ke pemilik — penyesuaian mandat dilakukan saat kebutuhan berubah." },
    ],
    requirements: [
      "Profil perusahaan dan struktur organ saat ini (direksi, komisaris, saham)",
      "Bidang usaha dan tantangan utama yang sedang dihadapi",
      "Harapan peran komisaris: pengawasan, penasihat strategis, atau keduanya",
      "Jadwal rapat yang realistis dan informasi yang bisa diberikan aksesnya",
      "Kesediaan pimpinan menerima pengawasan yang benar-benar dijalankan",
    ],
    faqs: [
      { q: "Berapa biaya layanan dewan komisaris profesional?", a: "Honorarium komisaris profesional kami mulai Rp 8 juta per bulan per orang — ditulis penuh di kontrak penugasan bersama ruang lingkup, frekuensi rapat, dan kewajiban pelaporannya. Jasa pencocokan dan penempatannya masuk penawaran penempatan awal, dan biaya akta perubahan organ dihitung terpisah sesuai tarif notaris. Tidak ada biaya tersembunyi di belakang honorarium — justru kebersihan struktur imbalan itulah salah satu nilai layanan ini: pengawasan yang dibayar secara benar bersih secara hukum dan berjalan profesional." },
      { q: "Apa bedanya komisaris dengan direksi?", a: "Direksi menjalankan perusahaan setiap hari — mengambil keputusan operasional dan strategis harian; komisaris mengawasi kebijakan pengurusan dan menasihati direksi — ia tidak menjalankan, ia menguji. Komisaris independen menambah satu lapisan: ia tidak memiliki hubungan kepentingan dengan pemegang saham atau direksi yang menggurui, sehingga penilaiannya tidak tertarik ke belakang. Dalam praktiknya keduanya saling mengunci: direksi yang bergerak cepat dijaga komisaris yang menguji arah, dan komisaris yang menandai risiko mendapat direksi yang menjawab dengan data. Perusahaan yang dua organnya bekerja serius terlihat langsung dari kualitas rapatnya." },
      { q: "Apakah komisaris juga menanggung tanggung jawab hukum?", a: "Ya — dan justru karena itulah komisaris profesional bernilai. UU 40/2007 menuntut komisaris menjalankan tugasnya dengan itikad baik dan penuh tanggung jawab; kelalaian pengawasan yang terbukti bisa dikenai tanggung jawab pribadi. Konsekuensinya bagi Anda: komisaris profesional bekerja dengan mandat tertulis, membaca dokumen, hadir berfikir di rapat, dan melaporkan temuan — bukan sekadar menandatangani akta perubahan organ lalu menghilang. Tanggung jawab yang nyata itu berlaku dua arah: ia melindungi perusahaan dari pengawasan yang kosong, dan melindungi dirinya dengan bekerja sesuai mandat. Inilah bedanya membeli kursi dengan menyewa fungsi." },
    ],
    related: ["tata-kelola-korporat", "suksesi-penerus", "akuisisi-merger-umkm", "piagam-keluarga-bisnis"],
  },
];

/**
 * LAPISAN PENGAYAAN — kategori struktur grup & transaksi.
 * whoFor, deliverables, costs, legalBasis per layanan.
 */
export const strukturEnrichment: Record<string, ServiceEnrichment> = {
  "pendirian-holding": {
    whoFor: [
      "Pemilik usaha yang mengelola beberapa perusahaan secara sejajar tanpa induk",
      "Bisnis keluarga dengan banyak anak usaha yang kendalinya masih di tangan pribadi",
      "Grup yang bersiap menerima investor atau memasuki transaksi M&A",
      "Pemilik yang ingin memisahkan aset berisiko tinggi (properti, teknologi) dari entitas operasional",
    ],
    deliverables: [
      "Peta struktur grup beserta justifikasi desainnya",
      "Akta pendirian entitas induk + SK pengesahan badan hukum",
      "Rangkaian akta pengalihan saham antar entitas yang sah dan bertahap",
      "Sinkronisasi NIB dan KBLI seluruh entitas di grup",
      "Dokumen pengendalian grup: perjanjian pemegang saham induk + buku pemegang saham",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 15 jt — desain struktur hingga dokumen grup, tertulis penuh di penawaran" },
      { item: "Notaris & pengesahan per entitas", note: "menyesuaikan jumlah entitas dan kompleksitas pengalihan" },
      { item: "PPh final 0,5% pengalihan saham", note: "sesuai nilai saham yang dialihkan (PMK 68/2023) — ditakar sejak tahap desain" },
      { item: "Notifikasi KPPU", note: "tanpa biaya negara bila terkena ambang — keterlambatannya berdenda, statusnya kami cek lebih dulu" },
      { item: "Sinkronisasi NIB & KBLI via OSS", note: "gratis — kewajiban resmi, tanpa biaya" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "PMK No. 239/PMK.03/2014 tentang konsolidasi fiskal penggabungan perusahaan",
      "PMK No. 130/PMK.010/2020 (PPh Pasal 32) & PMK No. 68 Tahun 2023 (PPh pengalihan saham)",
      "UU No. 5 Tahun 1999 jo. PP No. 57 Tahun 2010 & Peraturan KPPU No. 3/2019 jo. 2/2023 (notifikasi merger)",
    ],
  },

  "perjanjian-pendiri-vesting": {
    whoFor: [
      "Tim pendiri startup dua orang ke atas yang membagi saham untuk pertama kali",
      "Pendiri yang akan menambah cofounder atau restrukturisasi porsi saham",
      "Perusahaan yang bersiap menerima investor dan butuh tabel kapitalisasi yang dipercaya",
      "Tim pendiri yang kekayaan intelektualnya (kode, desain, data) masih atas nama pribadi",
    ],
    deliverables: [
      "Perjanjian pendiri lengkap: vesting, leaver, komitmen kerja, resolusi konflik",
      "Perjanjian pengalihan hak kekayaan intelektual ke perusahaan (IP assignment)",
      "Matriks pembagian saham beserta justifikasi kontribusinya",
      "Kalender vesting empat tahun dengan tebing satu tahun",
      "Sinkronisasi dengan akta pendirian dan panduan perubahannya",
    ],
    costs: [
      { item: "Jasa penyusunan DIGIMAN.ID", note: "mulai Rp 5 jt — termasuk sesi fasilitasi dan dokumen untuk seluruh pendiri" },
      { item: "Notaris akta perubahan (bila perlu)", note: "menyesuaikan kondisi saham saat ini" },
      { item: "PPh final 0,5% (bila restrukturisasi porsi)", note: "atas pengalihan saham yang nilainya disepakati realistis" },
      { item: "Sesi perundingan lanjutan", note: "opsional — per sesi, transparan sebelum berjalan" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "UU No. 28 Tahun 2014 tentang Hak Cipta (pengalihan tertulis hak ekonomi)",
      "UU No. 30 Tahun 2000 tentang Rahasia Dagang",
      "UU No. 2 Tahun 2014 tentang Jabatan Notaris",
    ],
  },

  "joint-venture": {
    whoFor: [
      "Perusahaan domestik yang bermitra dengan pemasok, distributor, atau teknolog",
      "Usaha Indonesia yang menjalin kerja sama dengan pihak asing (JV bersanding PMA)",
      "Dua perusahaan yang menggabungkan kekuatan untuk satu proyek atau satu pasar",
      "Pemilik teknologi atau merek yang ingin kolaborasi tanpa kehilangan kendali atasnya",
    ],
    deliverables: [
      "Rekomendasi struktur JV (entitas vs kontraktual) beserta alasannya",
      "Perjanjian JV kontraktual, atau akta pendirian + perjanjian pemegang saham bila berbadan hukum",
      "Matriks kontribusi dan pembagian hasil kedua pihak",
      "Klausul perlindungan kekayaan intelektual dan nonkompetisi",
      "Mekanisme kebuntuan dan jalur keluar (exit) yang tertulis",
    ],
    costs: [
      { item: "Jasa penyusunan DIGIMAN.ID", note: "mulai Rp 12 jt — analisis bentuk hingga perundingan dokumen inti" },
      { item: "Notaris & pengesahan (bila berbadan hukum)", note: "menyesuaikan modal dan struktur patungan" },
      { item: "Perizinan PMA/OSS (bila ada pihak asing)", note: "dihitung terpisah dan transparan sejak penawaran" },
      { item: "Pendampingan perundingan lanjutan", note: "opsional per sesi — untuk negosiasi yang melewati batas awal" },
    ],
    legalBasis: [
      "UU No. 25 Tahun 2007 tentang Penanaman Modal",
      "Perpres No. 10 Tahun 2021 jo. Perpres No. 49 Tahun 2021 (bidang usaha penanaman modal)",
      "KUHPerdata (kebebasan berkontrak — Pasal 1338)",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
    ],
  },

  "akuisisi-merger-umkm": {
    whoFor: [
      "Pembeli yang ingin mengakuisisi usaha dan butuh kepastian atas apa yang dibeli",
      "Pemilik usaha yang mau melepas atau menggabungkan perusahaannya dengan harga terbaik",
      "Perusahaan yang mengakuisisi kompetitor atau mitra di rantai pasoknya",
      "Investor yang memasuki perusahaan melalui akuisisi saham mayoritas",
    ],
    deliverables: [
      "Laporan due diligence hukum: legalitas, pajak, ketenagakerjaan, aset, perizinan",
      "Rekomendasi struktur transaksi beserta takaran pajaknya",
      "Draf perjanjian utama (SPA) atau akta merger/akuisisi",
      "Notifikasi KPPU bila transaksi terkena ambang",
      "Pengurusan pasca-transaksi: pengesahan, perubahan akta, perbaruan NIB dan dokumen",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 20 jt — due diligence hingga pasca-transaksi, transparan di penawaran" },
      { item: "Notaris & pengesahan", note: "akta pengalihan saham atau merger — menyesuaikan kompleksitas" },
      { item: "PPh final 0,5% pengalihan saham", note: "atas nilai transaksi (PMK 68/2023)" },
      { item: "Notifikasi KPPU", note: "tanpa biaya bila terkena ambang — keterlambatannya berdenda administratif" },
      { item: "Valuasi independen", note: "opsional — bila struktur harga membutuhkan penilaian pihak ketiga" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "UU No. 5 Tahun 1999 jo. UU Cipta Kerja & PP No. 57 Tahun 2010 (notifikasi KPPU)",
      "PP No. 7 Tahun 2021 (skala usaha mikro, kecil, menengah)",
      "PMK No. 68 Tahun 2023 (PPh atas pengalihan saham)",
    ],
  },

  "spin-off-divestasi": {
    whoFor: [
      "Grup usaha yang memisahkan unit non-inti agar fokus pada bisnis utama",
      "Pemilik yang mau menjual satu divisi atau unit usaha dengan nilai maksimal",
      "Bisnis keluarga yang membagi usaha antar anggota atau antar generasi",
      "Korporasi yang melepas unit yang sudah kehilangan sinergi dengan induknya",
    ],
    deliverables: [
      "Kajian struktur dan rekomendasi jalur (jual saham, jual aset, atau pemisahan akta)",
      "Akta pemisahan atau pendirian entitas baru beserta pengesahannya",
      "Rencana dan dokumen pengalihan aset, kontrak, dan pegawai",
      "Data room penjualan untuk calon pembeli",
      "Pelaporan dan kepatuhan pasca-pemisahan (perizinan, dokumen induk)",
    ],
    costs: [
      { item: "Jasa pendampingan DIGIMAN.ID", note: "mulai Rp 15 jt — kajian struktur hingga serah terima" },
      { item: "Notaris & pengesahan", note: "bila jalur menuntut akta pemisahan atau entitas baru" },
      { item: "Pajak pengalihan", note: "PPh final 0,5% untuk saham (PMK 68/2023) atau rezim PPh badan untuk aset — diperbandingkan di kajian" },
      { item: "Valuasi independen", note: "opsional — memperkuat posisi tawar di meja pembeli" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (pemisahan perseroan)",
      "UU No. 13 Tahun 2003 Pasal 163 (pengalihan perusahaan dan hubungan kerja)",
      "PMK No. 68 Tahun 2023 (PPh atas pengalihan saham)",
      "UU No. 6 Tahun 2023 (Cipta Kerja) dan peraturan pelaksanaannya",
    ],
  },

  "piagam-keluarga-bisnis": {
    whoFor: [
      "Bisnis keluarga multi generasi yang kedudukan anggotanya mulai rumit",
      "Pendiri yang anak-anaknya mulai masuk ke perusahaan",
      "Keluarga dengan anggota yang memegang saham namun tidak semua terlibat kerja",
      "Keluarga yang mulai terlihat gesekan dan ingin menahannya sebelum menjadi sengketa",
    ],
    deliverables: [
      "Piagam keluarga bisnis (konstitusi keluarga) yang ditandatangani pihak kunci",
      "Matriks kedudukan anggota: pemilik, pengurus, pekerja, penerima manfaat",
      "Kebijakan dividen, aturan masuk anggota keluarga, dan kebijakan karier",
      "Mekanisme penyelesaian sengketa bertingkat dan forum keluarga",
      "Sinkronisasi dengan perjanjian pemegang saham dan akta + kalender evaluasi",
    ],
    costs: [
      { item: "Jasa DIGIMAN.ID", note: "mulai Rp 10 jt — termasuk fasilitasi forum keluarga dan penyusunan konstitusi" },
      { item: "Sesi forum tambahan", note: "untuk keluarga besar atau konflik yang sudah berjalan — transparan per sesi" },
      { item: "Notaris (sinkron akta/SHA)", note: "bila ketentuan dijemput ke dokumen legal agar mengikat perusahaan" },
      { item: "Pembaharuan piagam berkala", note: "opsional — piagam adalah dokumen hidup yang ikut berkembang" },
    ],
    legalBasis: [
      "KUHPerdata (kebebasan berkontrak Pasal 1338 & hukum kewarisan Pasal 830 dan seterusnya)",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (sinkronisasi saham dan organ)",
      "UU No. 30 Tahun 1999 tentang Arbitrase dan Alternatif Penyelesaian Sengketa",
      "UU No. 2 Tahun 2014 tentang Jabatan Notaris",
    ],
  },

  "suksesi-penerus": {
    whoFor: [
      "Pendiri berusia matang yang ingin peralihan terencana, bukan terpaksa",
      "Bisnis keluarga dengan beberapa ahli waris dan potensi pembagian kendali",
      "Pendiri yang sehat namun sadar suksesi perlu disusun bertahun-tahun",
      "Keluarga dengan penerus yang belum jelas arah dan kesiapannya",
    ],
    deliverables: [
      "Peta suksesi beserta rekomendasi strukturnya",
      "Desain pengalihan bertahap: hibah saham terjadwal, holding, atau kombinasi",
      "Dokumen kewarisan: testamen dan akta hibah via notaris mitra",
      "Sinkronisasi akta perubahan saham dan perjanjian pemegang saham",
      "Program pengembangan kapabilitas penerus dengan tanggung jawab bertahap",
    ],
    costs: [
      { item: "Jasa penyusunan DIGIMAN.ID", note: "mulai Rp 10 jt — pemetaan hingga koordinasi seluruh dokumen" },
      { item: "Notaris hibah & testamen", note: "menyesuaikan jenis dan jumlah aset yang dialihkan" },
      { item: "PPh final 0,5% pengalihan saham", note: "atas nilai pengalihan (PMK 68/2023) — dihitung dan dijadwalkan sejak desain" },
      { item: "Konsolidasi struktur holding", note: "opsional — bila kepemilikan perlu dipisahkan dari manajemen" },
    ],
    legalBasis: [
      "KUHPerdata (kewarisan Pasal 830, testamen Pasal 892, hibah Pasal 1666 dan seterusnya)",
      "UU No. 7 Tahun 1983 tentang PPh & PMK No. 68 Tahun 2023 (PPh pengalihan saham)",
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "UU No. 2 Tahun 2014 tentang Jabatan Notaris",
    ],
  },

  "perjanjian-pemegang-saham": {
    whoFor: [
      "PT dengan dua pemegang saham ke atas yang belum punya aturan main tertulis",
      "Perusahaan yang bersiap menerima investor baru ke dalam sahamnya",
      "Joint venture berbadan hukum dengan pemegang saham dari beberapa pihak",
      "Keluarga atau grup dengan saham yang tersebar di beberapa pemegang kunci",
    ],
    deliverables: [
      "Perjanjian Pemegang Saham (SHA) lengkap untuk seluruh pemegang",
      "Klausul kurungan pengalihan, hak membeli dahulu, tag-along, dan drag-along",
      "Kebijakan dividen dan pendanaan lanjutan",
      "Mekanisme kebuntuan bertingkat dan jalur keluar",
      "Sinkronisasi dengan akta dan buku pemegang saham",
    ],
    costs: [
      { item: "Jasa penyusunan DIGIMAN.ID", note: "mulai Rp 6 jt — pemetaan, draf, dan satu putaran perundingan" },
      { item: "Notaris (bila klausul dijemput ke akta)", note: "kami sarankan untuk klausul paling penting agar mengikat perusahaan" },
      { item: "Putaran perundingan tambahan", note: "opsional per sesi — bila pihak yang duduk di meja banyak" },
      { item: "Penyesuaian saat investor masuk", note: "opsional — perjanjian aksesi untuk pemegang baru" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "KUHPerdata Pasal 1338 (kebebasan berkontrak)",
      "UU No. 30 Tahun 1999 tentang Arbitrase dan Alternatif Penyelesaian Sengketa",
      "UU No. 2 Tahun 2014 tentang Jabatan Notaris",
    ],
  },

  "tata-kelola-korporat": {
    whoFor: [
      "Perusahaan vendor BUMN/pemerintah yang menghadapi kuesioner GCG dan pra-kualifikasi tender",
      "Korporasi keluarga yang mengejar kredit bank atau kesiapan investor",
      "Perusahaan yang tumbuh cepat dan mulai kehilangan kendali atas praktik internalnya",
      "Usaha yang menyiapkan sertifikasi antisuap (ISO 37001) atau audit kepatuhan",
    ],
    deliverables: [
      "Manual tata kelola beserta struktur kewenangan dan komite yang proporsional",
      "Kode etik dan mekanisme pencatatan konflik kepentingan",
      "Kebijakan whistleblowing dengan kanal aman dan perlindungan pelapor",
      "Materi pelatihan dan laporan sosialisasi ke seluruh lini",
      "Peta kesiapan menjawab kuesioner tender, audit, dan due diligence",
    ],
    costs: [
      { item: "Jasa penyusunan DIGIMAN.ID", note: "mulai Rp 10 jt — asesmen hingga sosialisasi pertama" },
      { item: "Kanal whistleblowing", note: "versi sederhana tanpa biaya berkelanjutan; fitur lanjutan berlangganan" },
      { item: "Pelatihan tambahan", note: "opsional per batch — untuk tim yang lebih besar atau lokasi terpisah" },
      { item: "Pembaruan tahunan", note: "disarankan — dokumen mengikuti perubahan perusahaan dan regulasi" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas",
      "Pedoman Umum Good Corporate Governance Indonesia (Komite Nasional Kebijakan Governance)",
      "POJK No. 21/POJK.04/2023 (tata kelola pelaku usaha keluarga dan konglomerasi sektor JII)",
      "Peraturan Menteri BUMN PER-2/MBU/03/2023 (pemeliharaan nilai inti & integritas vendor BUMN)",
    ],
  },

  "dewan-komisaris-mandiri": {
    whoFor: [
      "PT keluarga yang membutuhkan pengawasan objektif di luar lingkaran keluarga",
      "Perusahaan yang tumbuh cepat dan keputusannya mulai melebihi kemampuan pemilik mengawasi",
      "Grup yang menyiapkan kredit korporasi, investasi, atau kesiapan transaksi",
      "Perusahaan pasca-akuisisi yang butuh pengawasan baru di atas direksi lama",
    ],
    deliverables: [
      "Kontrak penugasan komisaris: mandat, ruang lingkup, dan honorarium tertulis",
      "Agenda kerja tahunan dan kalender rapat yang terjadwal",
      "Laporan kinerja dan evaluasi berkala kepada pemilik",
      "Masukan strategis dan catatan risiko dari tiap rapat",
      "Pengurusan akta perubahan komposisi organ (bila penempatan baru)",
    ],
    costs: [
      { item: "Honorarium komisaris profesional", note: "mulai Rp 8 jt/bulan per orang — tertulis penuh di kontrak penugasan" },
      { item: "Jasa pencocokan & penempatan", note: "sekali di awal — masuk penawaran penempatan" },
      { item: "Notaris akta perubahan organ", note: "bila penempatan mengubah komposisi komisaris di akta" },
      { item: "Biaya rapat & akomodasi", note: "menyesuaikan frekuensi dan lokasi — disepakati di kontrak" },
      { item: "Layanan dewan pendamping", note: "opsional — dewan penasihat lebih dari satu orang untuk kebutuhan khusus" },
    ],
    legalBasis: [
      "UU No. 40 Tahun 2007 tentang Perseroan Terbatas (tugas dan tanggung jawab komisaris)",
      "POJK No. 33/POJK.04/2014 (dewan komisaris dan direksi emiten — kriteria independen)",
      "Pedoman Umum Good Corporate Governance Indonesia (Komite Nasional Kebijakan Governance)",
      "Peraturan Kemenkumham tentang perubahan data organ perseroan via sistem AHU Online",
    ],
  },
};
