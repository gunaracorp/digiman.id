# SPESIFIKASI KONTEN EKSPANSI 100 LAYANAN — DIGIMAN.ID

Berkas ini adalah arahan konten untuk 100 layanan baru (10 kategori × 10 layanan).
Data katalog (slug, title, desc, price, features, icon, category) SUDAH ADA di
`src/lib/catalog.ts` — JANGAN diubah. Subagent menulis KONTEN EDITORIAL saja
(tagline, intro, benefits, process, requirements, faqs, related + enrichment)
di file `src/lib/services/<nama>.ts` masing-masing.

## Aturan umum penulisan (WAJIB untuk semua)

1. Bahasa Indonesia editorial penuh — gaya sama dengan `src/lib/services/lainnya-ekspansi.ts` (BACA FILE INI DULU sebagai contoh emas).
2. Per layanan:
   - `tagline`: 1 kalimat puitis-menggigit (contoh: "Laporan kecil yang menyelamatkan seluruh perizinan Anda.")
   - `heroSub`: 1–2 kalimat menjelaskan nilai + siapa
   - `timeline`: estimasi realistis (mis. "3–7 hari kerja", "4–8 minggu")
   - `intro`: TEPAT 3 paragraf, tiap paragraf 3–5 kalimat. Paragraf 1: masalah/konteks regulasi (sebutkan regulasi konkret). Paragraf 2: konsekuensi/kesalahan umum. Paragraf 3: bagaimana DIGIMAN menanganinya (proses nilainya).
   - `benefits`: TEPAT 5 item {title, desc} — desc 1–2 kalimat spesifik
   - `process`: TEPAT 4 langkah {title, desc} — alur kerja nyata DIGIMAN
   - `requirements`: 4–6 string dokumen/kebutuhan klien
   - `faqs`: TEPAT 3 {q, a} — a 2–4 kalimat, menjawab query nyata (biaya, lama, risiko, syarat)
   - `related`: TEPAT 4 slug valid dari daftar slug yang diberikan
3. Enrichment (record kedua di file yang sama):
   - `whoFor`: 4 string profil klien
   - `deliverables`: 5 string hasil konkret
   - `costs`: 4–5 {item, note} — note menyebut kisaran harga/mekanisme
   - `legalBasis`: 3–4 regulasi RI (gunakan arahan di bawah; tulis lengkap: "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi")
4. HANYA karakter ASCII + tanda baca Indonesia standar. Gunakan tanda kutip dengan escape benar. TANPA emoji.
5. JANGAN mengubah file lain. JANGAN menjalankan migrasi. HANYA tulis file konten Anda sendiri.
6. TSC strict harus lulus: `bunx tsc --noEmit 2>&1 | grep <file-anda>` harus 0 baris.
7. Angka harga: koma desimal Indonesia (Rp 7,5 jt), satuan rb/jt/bln konsisten dengan price di catalog.ts.

## Slug valid untuk `related` (44 lama + 100 baru per kategori sendiri)

Lama: pendirian-pt, pt-perorangan, pendirian-cv, pt-pma, firma-ud, pendirian-koperasi, pendirian-yayasan, perkumpulan-asosiasi, nib-oss, izin-sektor-ss, virtual-office, legalisasi-apostille, izin-lingkungan, pbg-slf, sbu-konstruksi, api-bea-cukai, izin-distribusi, pendaftaran-merek, hak-cipta-paten, merek-internasional, franchise, sertifikasi-halal, bpom, sni, iso, higiene-sanitasi, npwp-pkp, pelaporan-pajak, bpjs, kitas-rptka, kitas-investor, smk3, bnsp, perubahan-akta, pembubaran, legal-drafting, lkpm, website-ecommerce, aplikasi-sistem, otomasi-ai, wa-business, google-bisnisku, marketplace, branding-katalog.
Baru: gunakan slug kategori Anda sendiri (semuanya valid) + slug kategori lain DENGAN arahan spesifik di bawah.

---

## KATEGORI 1 — esg: ESG & Keberlanjutan (file: `src/lib/services/esg-keberlanjutan.ts`, export: `esgContent` + `esgEnrichment`)

Regulasi inti kategori: POJK 51/2017 (laporan keberlanjutan), PP 98/2021 & Perpres 98/2021 (nilai ekonomi karbon, NZKC), PP 81/2023 (persampahan & EPR), UU 18/2008 (pengelolaan sampah), UU 32/2009 (lingkungan hidup), SNI ISO 14064/ISO 31000, EU Regulation 2023/1115 (EUDR), UU 40/2007 ps.74 (CSR), UU 3/2020 (CDAS migas), PP 47/2012 (CSR lingkungan).

1. `laporan-keberlanjutan` — Angle: kewajiban emitens (POJK 51/2017) dan peluang non-emitens (tender, buyer global minta laporan ESG). Jelaskan kerangka GRI dan IFRS S1/S2 (ISSB), materialitas ganda, struktur 3 pilar E-S-G, siklus data tahunan. FAQ: wajib atau tidak; berapa lama menyusun; apakah bisa dipakai untuk OJK & buyer sekaligus. Related: [jejak-karbon-nzkc, esg-rantai-pasok, iso, pembiayaan-hijau].
2. `jejak-karbon-nzkc` — Angle: Scope 1/2/3 dijelaskan sederhana, GHG Protocol & SNI ISO 14064, roadmap NZKC (net zero) berjenjang sampai 2060, kaitan dengan SRN dan pasar karbon Indonesia. Related: [laporan-keberlanjutan, kredit-karbon, izin-lingkungan, energi? → gunakan izin-energi-terbarukan].
3. `kredit-karbon` — Angle: cara proyek (rehabilitasi hutan, konservasi, energi terbarukan, sampah) menghasilkan kredit; MRV (Measurement, Reporting, Verification); SRN-PPI; pembeli domestik & internasional; jangan janji harga pasti. Related: [jejak-karbon-nzkc, izin-lingkungan, izin-energi-terbarukan, laporan-keberlanjutan].
4. `esg-rantai-pasok` — Angle: buyer global (retail UE/US, manufaktur otomotif) menuntut data ESG pemasok; assessment bertingkat, kode etik vendor, SMETA/Sedex-style audit readiness. Related: [laporan-keberlanjutan, sni, iso, eudr-komoditas].
5. `gedung-hijau` — Angle: GREENSHIP (GBCI) & EDGE (IFC); hemat energi 20-30% biaya operasional; manfaat sewa/tender instansi; kaitan PBG-SLF & SNI konservasi energi (SNI 6390). Related: [pbg-slf, jejak-karbon-nzkc, laporan-keberlanjutan, kawasan-industri].
6. `sertifikasi-b-corp` — Angle: B Corp = sertifikasi keberdampak global (B Lab); BIA 200+ pertanyaan, skor ≥80; sedikit sekali perusahaan Indonesia bersertifikat — peluang diferensiasi; proses verifikasi 6-12 bulan. Related: [tata-kelola-korporat, sertifikasi-b-corp → ganti dengan laporan-keberlanjutan, esop-program, csr-cdas].
7. `epr-kemasan` — Angle: PP 81/2023 menegaskan tanggung jawab produsen (EPR) — target pengembalian kemasan bertahap; SIPSN; skema koleksi & kemitraan bank sampah/daur ulang; risiko administratif & reputasi. Related: [izin-lingkungan, laporan-keberlanjutan, bpom, izin-distribusi].
8. `pembiayaan-hijau` — Angle: POJK 60/2017 green bond, sukuk hijau, sustainability-linked loan; kelayakan proyek, framework & opini second party; bunga lebih kompetitif; akses investor global. Related: [laporan-keberlanjutan, kredit-karbon, restrukturisasi-utang, jejak-karbon-nzkc].
9. `eudr-komoditas` — Angle: EU Deforestation Regulation 2023/1115 berlaku untuk kopi, kakao, sawit, karet, kayu, soy + turunannya; wajib geolocation plot & due diligence; tanpa itu ekspor ke UE terhenti; sistem traceability berkelanjutan. Related: [esg-rantai-pasok, lartas-ekspor-komoditas, api-bea-cukai, sertifikat-asal].
10. `csr-cdas` — Angle: kewajiban CSR ps.74 UU 40/2007 (denda 10% anggaran bila diabaikan), CDAS migas 1-5% (UU 3/2020), PP 47/2012; program terukur vs sumbangan; mitra pelaksana & pelaporan. Related: [pendirian-yayasan, laporan-keberlanjutan, pt-pma, izin-tambang-iup].

## KATEGORI 2 — pendanaan: Pendanaan & Investasi (file: `src/lib/services/pendanaan-investasi.ts`, export: `pendanaanContent` + `pendanaanEnrichment`)

Regulasi inti: POJK 57/2020 (SCF), UU 40/2007 (PT — saham), UU 13/2016 & PP 36/2018 (IP sebagai jaminan/jaminfidusia), UU 37/2004 (kepailitan & PKPU), PMK KUR, POJK 11/POJK.03/2020 (restrukturisasi kualitas aset), UU PPh (proyeksi pajak saham).

1. `pitch-deck-investor` — Angle: struktur deck 12-15 slide (masalah, solusi, pasar, traksi, model, tim, angka, ask); kesalahan umum founder; proyeksi & one-pager; latihan Q&A investor. Related: [valuasi-bisnis, data-room-virtual, convertible-note-safe, akuisisi-merger-umkm].
2. `valuasi-bisnis` — Angle: metode DCF, multiple (EV/EBITDA, P/S), asset-based; kapan valuasi dibutuhkan (jual saham, warisan, sengketa, garansi utang); laporan tertulis; faktor diskonto pasar Indonesia. Related: [akuisisi-merger-umkm, pitch-deck-investor, suksesi-penerus, data-room-virtual].
3. `data-room-virtual` — Angle: due diligence investor meminta 150-300 dokumen; struktur folder standar; gap list & perbaikan; akses aman & log; percepatan close. Related: [pitch-deck-investor, akuisisi-merger-umkm, legal-drafting, valuasi-bisnis].
4. `pendanaan-scf` — Angle: SCF = pendanaan massal berbasis saham via platform berizin OJK (POJK 57/2020); syarat PT & lembar faktual; vs pinjaman konvensional; pelaporan pasca. Related: [pendirian-pt, pitch-deck-investor, valuasi-bisnis, legal-drafting].
5. `kredit-kur` — Angle: KUR bunga subsidi (cek PMK terbaru), syarat PME & plafon; profil bisnis, proyeksi kas, agunan alternatif; alternatif kredit modal kerja non-KUR. Related: [pt-perorangan, nib-oss, npwp-pkp, virtual-office].
6. `hibah-riset` — Angle: skema Kedaireka (match funding), RISPRO LPDP, BRIN, hibah koperasi; struktur proposal, MOU mitra, anggaran; IP hasil riset. Related: [pendirian-yayasan, hak-cipta-paten, pendirian-koperasi, pitch-deck-investor].
7. `esop-program` — Angle: pool saham 10-15%, vesting 4 tahun + cliff 1; PPh saat transfer & jual; perjanjian karyawan; retensi talenta. Related: [perjanjian-pendiri-vesting, pendirian-pt, valuasi-bisnis, convertible-note-safe].
8. `convertible-note-safe` — Angle: pendanaan pre-seed tanpa set valuasi; valuation cap & discount; SAFE vs note (bunga & jatuh tempo); proyeksi dilusi; sinkron akta. Related: [pitch-deck-investor, esop-program, pendirian-pt, perjanjian-pendiri-vesting].
9. `jamintel-ip-jaminan` — Angle: UU 13/2016 membuka merek/paten sebagai jaminan kredit; pendaftaran jaminfidusia di DJKI; penilaian aset IP; negosiasi bank; jarang diketahui UMKM kreatif. Related: [pendaftaran-merek, hak-cipta-paten, kredit-kur, valuasi-bisnis].
10. `restrukturisasi-utang` — Angle: tanda-tanda distres (kolektibilitas, arus kas); opsi rescheduling, reprofiling, reconditioning; PKPU sebagai payung hukum; negosiasi bank; UU 37/2004. Related: [pelaporan-pajak, legal-drafting, akuisisi-merger-umkm, valuasi-bisnis].

## KATEGORI 3 — struktur: Struktur Grup & Transaksi (file: `src/lib/services/struktur-korporasi.ts`, export: `strukturContent` + `strukturEnrichment`)

Regulasi inti: UU 40/2007, UU 25/2007 (PMA), UU 5/1999 & UU 5/2020 (larangan monopoli — notifikasi merger KPPU), UU Ciptaker, Bw (kewarisan), KNKGC pedoman tata kelola, POJK untuk publik.

1. `pendirian-holding` — Angle: kapan holding perlu; pola PT induk-anak; konsolidasi fiskal; perlindungan aset & kesiapan M&A; notifikasi KPPU bila perampatan penguasaan. Related: [akuisisi-merger-umkm, perubahan-akta, pt-pma, perjanjian-pemegang-saham].
2. `perjanjian-pendiri-vesting` — Angle: 65% startup gagal karena konflik pendiri; pembagian saham (bukan 50-50 otomatis), vesting, leaver provisions; IP assignment ke PT. Related: [pendirian-pt, esop-program, convertible-note-safe, perjanjian-pemegang-saham].
3. `joint-venture` — Angle: JV entitas vs kontraktual; kontribusi modal & IP; pengendalian (50-50 deadlock), exit; perbedaan dengan kerja sama sederhana. Related: [pt-pma, legal-drafting, perjanjian-pemegang-saham, distributor-brand-asing].
4. `akuisisi-merger-umkm` — Angle: pembeli vs penjual; due diligence hukum & finansial; struktur pembayaran (cash, earn-out); akta merger/akuisisi & notifikasi KPPU; pasca-transaksi. Related: [legal-drafting, valuasi-bisnis, pendirian-holding, data-room-virtual].
5. `spin-off-divestasi` — Angle: memisahkan divisi jadi entitas baru; pemisahan aset, pegawai (alih perjanjian), kontrak; takaran pajak; jual saham vs jual aset. Related: [akuisisi-merger-umkm, pendirian-holding, phk-terkelola, perubahan-akta].
6. `piagam-keluarga-bisnis` — Angle: konflik keluarga = pembunuh bisnis #1 di Indonesia; piagam = konstitusi (nilai, kedudukan, kerja, dividen, sengketa); forum keluarga; bukan akta notaris semata. Related: [suksesi-penerus, perjanjian-pemegang-saham, tata-kelola-korporat, pendirian-pt].
7. `suksesi-penerus` — Angle: 90% bisnis keluarga gagal di generasi ke-3; transfer saham & pajaknya; testamen/hibah; pengembangan penerus; timeline bertahap. Related: [piagam-keluarga-bisnis, valuasi-bisnis, perubahan-akta, dewan-komisaris-mandiri].
8. `perjanjian-pemegang-saham` — Angle: SHA melindungi minoritas & mayoritas; tag-along/drag-along, ROFR, kurungan pengalihan, kebijakan dividen, deadlock resolution; kontras dengan akta. Related: [pendirian-pt, pt-pma, joint-venture, perjanjian-pendiri-vesting].
9. `tata-kelola-korporat` — Angle: GCG bukan untuk korporasi besar saja; manual tata kelola, kode etik, whistleblowing; manfaat: bank, investor, tender BUMN; KNKGC. Related: [dewan-komisaris-mandiri, iso-37001-antisuap, tata-kelola-ai, perjanjian-pemegang-saham].
10. `dewan-komisaris-mandiri` — Angle: komisaris profesional sebagai pengawas & penasihat strategis; kriteria independen; agenda kerja & honorarium; kredibilitas investor. Related: [tata-kelola-korporat, suksesi-penerus, akuisisi-merger-umkm, piagam-keluarga-bisnis].

## KATEGORI 4 — global: Ekspansi Global (file: `src/lib/services/global-ekspansi.ts`, export: `globalContent` + `globalEnrichment`)

Regulasi inti: Peraturan BKPM 5/2021 (kantor perwakilan), UU 25/2007, ATIGA/ACFTA/AANZFTA (CO), ICC Incoterms 2020, UU 17/2006 (kepabeanan), PMK 172/PMK.03/2023 (TP), UU 17/2006 & PP 34/2011 (antidumping/BMTP/CVD), UU 7/2014 (perdagangan), SVLK/PermenLHK.

1. `kantor-perwakilan-asing` — Angle: KP3A/KP2A/KPPA via OSS; dilarang transaksi langsung; biaya & durasi; jalur menuju PT PMA. Related: [pt-pma, nib-oss, kitas-investor, virtual-office].
2. `entitas-luar-negeri` — Angle: kapan butuh entitas luar (Singapura untuk investor, UE untuk VAT, Dubai untuk kemitraan); bandingkan biaya & pajak garis besar; kepatuhan tahunan; sinkron dengan PT Indonesia. Related: [pt-pma, kantor-perwakilan-asing, transfer-pricing, legalisasi-apostille].
3. `sertifikat-asal` — Angle: 13 FTA Indonesia; Form D (ASEAN), ACFTA, AANZFTA; kriteria asal (RVC/CTC) & BOM; tarif 0% sebagai senjata kompetitif; kesalahan umum HS/BOM. Related: [api-bea-cukai, ekspor-marketplace-global, eudr-komoditas, inkoterm-kontrak-ekspor].
4. `inkoterm-kontrak-ekspor` — Angle: FOB vs CIF vs EXW — risiko & biaya; L/C, T/T, DP; klausul force majeure & arbitrase; kesalahan kontrak mahal. Related: [api-bea-cukai, sertifikat-asal, legal-drafting, kawasan-berikat].
5. `kawasan-berikat` — Angle: KB & KB Terintegrasi; PIBK/PEB tak tertagih bea masuk; KITE impor sementara; syarat kelayakan; pelaporan kepabeanan. Related: [api-bea-cukai, izin-distribusi, kawasan-industri, inkoterm-kontrak-ekspor].
6. `transfer-pricing` — Angle: transaksi berelasi = titik rawan koreksi raksasa; PMK 172/2023; TP Doc & benchmark; kesesuaian arm's length; pemeriksaan DJP. Related: [pelaporan-pajak, pendirian-holding, entitas-luar-negeri, pt-pma].
7. `ekspor-marketplace-global` — Angle: Amazon/Alibaba/Etsy; struktur legal (dari PT/perorangan), VAT pasar tujuan (IOSS UE, sales tax US), FBA & logistik; pembayaran lintas negara. Related: [marketplace, api-bea-cukai, sertifikat-asal, pembubaran → ganti npwp-pkp].
8. `antidumping-bmtp` — Angle: industri nasional tertekan impor murah; petisi ke KADI; bukti kerugian; BM/BMTP/CVD; sisi pembela (importir terdampak). Related: [api-bea-cukai, izin-distribusi, legal-drafting, lartas-ekspor-komoditas].
9. `lartas-ekspor-komoditas` — Angle: komoditas sensitif: kayu (SVLK/V-Legal), CPO (PE), ikan, minerba; kementerian per komoditas; sanksi muat tanpa lartas; traceability. Related: [api-bea-cukai, izin-tambang-iup, eudr-komoditas, sertifikat-asal].
10. `distributor-brand-asing` — Angle: menjadi master distributor; perjanjian eksklusif wilayah & target; perizinan dagang; kepatuhan produk (SNI/BPOM/halal); proteksi bila brand mencabut. Related: [izin-distribusi, franchise, joint-venture, legal-drafting].

## KATEGORI 5 — kepatuhan-digital: Kepatuhan Digital & Data (file: `src/lib/services/kepatuhan-digital.ts`, export: `kepatuhanDigitalContent` + `kepatuhanDigitalEnrichment`)

Regulasi inti: UU 27/2022 (PDP), PP 71/2019 (PSTE), Permenkominfo 5/2020 (PSE), Perpres 47/2023 (SSN), SE Kominfo 9/2023 (etika AI), UU ITE, PP 80/2019 & Permendag 50/2020 (dagang daring), POJK 10/2022 (LPBBTI), UU 4/2023 (P2SK).

1. `kepatuhan-uu-pdp` — Angle: masa transisi UU PDP berakhir 2026 — sanksi administratif 2% pendapatan tahunan; audit alur data, basis legal, DPA, roadmap; wajib bagi semua pemroses data. Related: [dpo-layanan, kebijakan-privasi-situs, respons-insiden-data, tata-kelola-ai].
2. `dpo-layanan` — Angle: UU PDP mensyaratkan petugas pelindungan data untuk pemroses berisiko; DPOaaS = penunjukan resmi, kader, pelaporan; vs rekrut internal. Related: [kepatuhan-uu-pdp, respons-insiden-data, kebijakan-privasi-situs, audit-siber].
3. `pse-komdigi` — Angle: SEMUA penyelenggara sistem elektronik (termasuk website company profile dengan pendaftaran user!) wajib PSE; tanpa itu risiko blokir (kasus 2022 — 5 platform diblokir); proses PSE Tera/Privat. Related: [website-ecommerce, aplikasi-sistem, kepatuhan-uu-pdp, otomasi-ai].
4. `audit-siber` — Angle: kebocoran = kerugian finansial + reputasi + UU PDP; praktik assessment (konfigurasi, akses, backup), bukan sekadar software; roadmap perbaikan; kesiapan ISO 27001. Related: [respons-insiden-data, kepatuhan-uu-pdp, bisnis-kontinuitas-bcp, iso].
5. `respons-insiden-data` — Angle: UU PDP: notifikasi 3×24 jam ke subjek & lembaga; protokol 72 jam; forensik awal; komunikasi publik; retainer bermakna siap sebelum insiden. Related: [kepatuhan-uu-pdp, audit-siber, manajemen-krisis-pr, forensik-digital].
6. `kepatuhan-iklan-digital` — Angle: label "iklan"/endorsement, klaim produk, UU 8/1999 & UU ITE; praktik affiliate & KOL; sanksi & risiko blokir; panduan tim marketing. Related: [kepatuhan-dagang-daring, audit-klaim-iklan-kesehatan, kebijakan-privasi-situs, otomasi-ai].
7. `tata-kelola-ai` — Angle: AI dipakai tanpa aturan = risiko bias, kebocoran data latih, hak cipta; SE Kominfo 9/2023; kebijakan AI perusahaan; vendor & data; EU AI Act untuk ekspor digital. Related: [kepatuhan-uu-pdp, otomasi-ai, hak-cipta-paten, tata-kelola-korporat].
8. `kebijakan-privasi-situs` — Angle: privacy policy & T&C bukan template copy-paste — harus mencerminkan alur data nyata; cookie & consent; jasa kecil dampak besar. Related: [kepatuhan-uu-pdp, pse-komdigi, website-ecommerce, kepatuhan-dagang-daring].
9. `kepatuhan-fintech-ojk` — Angle: fintech = sektor paling padat regulasi (POJK 10/2022 LPBBTI, UU P2SK); model bisnis menentukan lisensi; pelaporan; sanksi; jangan operasi abu-abu. Related: [kepatuhan-uu-pdp, legal-drafting, pendirian-pt, audit-siber].
10. `kepatuhan-dagang-daring` — Angle: PP 80/2019 & Permendag 50/2020: identitas pedagang, label iklan, retur, rating; kasus penutupan toko & blokir; audit toko Anda sendiri. Related: [marketplace, website-ecommerce, kepatuhan-iklan-digital, wa-business].

## KATEGORI 6 — kreatif: Industri Kreatif & Media (file: `src/lib/services/kreatif-media.ts`, export: `kreatifContent` + `kreatifEnrichment`)

Regulasi inti: UU 33/2009 (perfilman) & PP 19/2017, UU 28/2014 (hak cipta & LMK), PP 56/2021 (royalti), Peraturan Perpusnas (ISBN), PP 71/2019 (game/IGRS via Komdigi), UU 40/1999 (pers), UU 20/2016 (merek), Peraturan Polri (izin keramaian), UU 1/2022 (reklame per daerah).

1. `sertifikat-film-lsf` — Angle: semua film/iklan/trailer penayangan komersial wajib lulus sensor LSF; dokumen produksi; koreksi; streaming platform juga minta. Related: [badan-usaha-produksi-film, hak-cipta-paten, izin-event-konser, kontrak-talent-kreator].
2. `izin-event-konser` — Angle: event = banyak izin paralel (polisi, tempat, parkir, pemadam, kesehatan); timeline 30-45 hari; SOP keamanan & asuransi; promotor pemula sering tersandung. Related: [badan-usaha-produksi-film, izin-reklame-luar-ruang, lisensi-musik-lmk, kontrak-talent-kreator].
3. `izin-reklame-luar-ruang` — Angle: reklame diatur perda — jenis, lokasi, tarif, masa berlaku; risiko penutupan & denda; videotron & billboard digital; perpanjangan. Related: [pbg-slf, izin-event-konser, izin-usaha-perumahan, branding-katalog].
4. `lisensi-musik-lmk` — Angle: UU 28/2014: penggunaan musik komersial wajib royalti ke LMK (WAMI, RAIV, KCI); kafe, restoran, YouTube, aplikasi; tarif per kategori; risiko gugatan. Related: [hak-cipta-paten, izin-event-konser, kontrak-talent-kreator, sertifikat-film-lsf].
5. `isbn-penerbitan` — Angle: ISBN & penerbit resmi di Perpusnas; KDT; deposit; self-publishing vs penerbit; distribusi legal & iklan. Related: [hak-cipta-paten, website-ecommerce, kontrak-talent-kreator, pendaftaran-pers-online].
6. `rating-game-igrs` — Angle: game (termasuk yang monetisasi iklan!) wajib registrasi & rating IGRS Komdigi; kasus blokir game global; dokumen gameplay; perbaikan konten. Related: [pse-komdigi, aplikasi-sistem, hak-cipta-paten, website-ecommerce].
7. `pendaftaran-pers-online` — Angle: media online terdaftar Dewan Pers = kredibilitas + akses iklan pemerintah + perlindungan UU pers; standar UUT; verifikasi. Related: [pse-komdigi, website-ecommerce, hak-cipta-paten, kontrak-talent-kreator].
8. `lisensi-merchandise` — Angle: monetisasi karakter/brand via merch; kontrak lisensi, royalti, QC; perlindungan merek & karakter; kolaborasi brand. Related: [pendaftaran-merek, hak-cipta-paten, kontrak-talent-kreator, franchise].
9. `kontrak-talent-kreator` — Angle: influencer/creator = aset tanpa kontrak = risiko; eksklusivitas, revenue share, IP, morals clause; UU ITE; skenario keluar. Related: [legal-drafting, kontrak-talent-kreator → ganti lisensi-merchandise, pendaftaran-pers-online, lisensi-musik-lmk].
10. `badan-usaha-produksi-film` — Angle: production house berbadan usaha (SIUP Film); kontrak produksi & talent; pemilikan hak cipta; akses subsidi & tender profil film. Related: [pendirian-pt, sertifikat-film-lsf, kontrak-talent-kreator, hak-cipta-paten].

## KATEGORI 7 — pangan-kesehatan: Pangan, Kesehatan & Farma (file: `src/lib/services/pangan-kesehatan.ts`, export: `panganKesehatanContent` + `panganKesehatanEnrichment`)

Regulasi inti: UU 17/2023 (Kesehatan — menggantikan UU 36/2009 dll.), PP 28/2024, Peraturan BPOM (CPOTB, label, iklan), Permenkes (AKL/AKD, fasyankes, STR/SIP), UU 18/2012 (pangan), Codex HACCP, SNI 6729 & Permentan 64/2013 (organik), UU 1/1970 & Permenaker 4/1980 (P2K3), akreditasi KAN.

1. `cpotb-obat-tradisional` — Angle: CPOTB = syarat produksi OBH/suplemen; fasilitas, SOP, validasi; inspeksi BPOM; salah satunya membuat banyak pabrik kecil gagal pertama. Related: [bpom, haccp-gmp-pangan, laboratorium-uji-produk, sertifikasi-halal].
2. `akl-alat-kesehatan` — Angle: AKL/AKD Kemenkes (bukan BPOM!); klasifikasi risiko A-D; dokumen teknis; importir vs produsen; distribusi legal. Related: [izin-klinik-praktik, bpom, sni, izin-distribusi].
3. `label-gizi` — Angle: ING, RDA, klaim gizi; peraturan BPOM label pangan; kesalahan label = penarikan produk; review sebelum cetak. Related: [bpom, higiene-sanitasi, sertifikasi-halal, audit-klaim-iklan-kesehatan].
4. `izin-apotek-pbf` — Angle: UU Kesehatan baru & PP 28/2024; SIA/SIPA apotek, izin PBF; farmasis penanggung jawab; sarana & SOP. Related: [izin-klinik-praktik, izin-distribusi, izin-sektor-ss, virtual-office].
5. `haccp-gmp-pangan` — Angle: HACCP = syarat eksportir & retail modern; CCP, monitoring, verifikasi; vs SLHS (tempat) & SNI (produk) — beda lapisan; sertifikasi. Related: [sni, higiene-sanitasi, cpotb-obat-tradisional, laporan-keberlanjutan].
6. `pangan-organik` — Angle: premium market; skema organik Indonesia (Permentan 64/2013, SNI 6729), USDA/EU untuk ekspor; inspeksi lahan; logo organik. Related: [sertifikasi-halal, sni, eudr-komoditas, laporan-keberlanjutan].
7. `izin-klinik-praktik` — Angle: izin fasyankes (Kemenkes/Dinkes) + STR/SIP tenaga medis; PP 28/2024; sarana standar; akreditasi. Related: [izin-sektor-ss, akl-alat-kesehatan, izin-apotek-pbf, higiene-sanitasi].
8. `p2k3-panitia-k3` — Angle: P2K3 wajib 100+ pekerja (atau berisiko); Permenaker 4/1980; SK panitia, pelatihan, program tahunan, laporan; sering diminta saat pemeriksaan. Related: [smk3, bnsp, lks-bipartit, audit-payroll].
9. `laboratorium-uji-produk` — Angle: uji lab = pintu semua sertifikasi; KAN-accredited; parameter per tujuan (SNI/BPOM/halal/ekspor); interpretasi hasil; efisiensi biaya uji. Related: [sni, bpom, sertifikasi-halal, cpotb-obat-tradisional].
10. `audit-klaim-iklan-kesehatan` — Angle: klaim "menyembuhkan" tanpa izin = sanksi & penarikan; peraturan iklan BPOM; kesesuaian izin edar vs klaim; kemasan & digital. Related: [bpom, kepatuhan-iklan-digital, label-gizi, cpotb-obat-tradisional].

## KATEGORI 8 — properti: Properti & Infrastruktur (file: `src/lib/services/properti-infrastruktur.ts`, export: `propertiContent` + `propertiEnrichment`)

Regulasi inti: UU 5/1960 (UUPA), PP 18/2021 (hak atas tanah), PP 24/1997 (pendaftaran tanah), UU 1/2011 (perumahan) & PP 12/2021, PP 78/2019 (KPBU), UU 36/1999 (telekomunikasi), UU 3/2014 & PP 142/2015 (kawasan industri), UU 3/2020 & PP 96/2021 (minerba), UU 30/2007 (energi) & PP 112/2022, UU 28/2002 & PP 16/2021 (PBG).

1. `due-diligence-properti` — Angle: sebelum DP — cek sertifikat di BPN, sengketa, KKPR, guna lahan; laporan risiko; kasus ganda sertifikat. Related: [pengalihan-hak-tanah, hgu-hgb-pertanahan, pbg-slf, sengketa-tanah-penyelesaian].
2. `pengalihan-hak-tanah` — Angle: jual beli/hibah/APHT; PPAT, pajak (PPh & BPHTB), balik nama BPN; kesalahan umum: bayar penuh sebelum cek. Related: [due-diligence-properti, pengalihan-hak-tanah → ganti virtual-office, izin-usaha-perumahan, perubahan-akta].
3. `hgu-hgb-pertanahan` — Angle: HGU untuk perkebunan/pertanian, HGB untuk industri/komersial; perolehan, perpanjangan, peningkatan; agunan kredit. Related: [izin-tambang-iup, due-diligence-properti, kawasan-industri, kredit-kur].
4. `izin-usaha-perumahan` — Angle: pengembang wajib izin usaha (PUPR/pemda); kewajiban rumah susun (matrikulasi); PBG per tahap; PPJB. Related: [pbg-slf, pengalihan-hak-tanah, due-diligence-properti, virtual-office].
5. `konsesi-ppjt-infrastruktur` — Angle: KPBU (PP 78/2019): pola pembiayaan, PPJT, dukungan pemerintah; bankability; studi kelayakan; contoh sektor. Related: [kawasan-industri, izin-energi-terbarukan, pendirian-holding, valuasi-bisnis].
6. `sertifikasi-menara-telekomunikasi` — Angle: menara/BTS = izin lokasi + konstruksi + uji keamanan; sharing infrastruktur; kasus penutupan menara; kepatuhan penyelenggaraan. Related: [pbg-slf, pse-komdigi, izin-usaha-perumahan, kawasan-industri].
7. `kawasan-industri` — Angle: status kawasan industri (PP 142/2015) = fasilitas bagi pengelola & tenant; KKPR, lingkungan; insentif; sistem perizinan tenant. Related: [kawasan-berikat, izin-lingkungan, izin-tambang-iup, nib-oss].
8. `sengketa-tanah-penyelesaian` — Angle: batas, ganda sertifikat, garapan; penelusuran riwayat; mediasi & aduan BPN; upaya hukum; pencegahan. Related: [due-diligence-properti, legal-drafting, sengketa-bisnis-mediasi, pengalihan-hak-tanah].
9. `izin-tambang-iup` — Angle: IUP eksplorasi/operasi produksi, IUPK; ESDM & pemda; RKAB; good mining practice; pascatambang; kewajiban DMO? (ringan saja). Related: [izin-lingkungan, hgu-hgb-pertanahan, kawasan-industri, lartas-ekspor-komoditas].
10. `izin-energi-terbarukan` — Angle: PLTS rooftop & IUPTLU; PP 112/2022; koneksi PLN; insentif; proyek komersial vs skala kecil. Related: [jejak-karbon-nzkc, konsesi-ppjt-infrastruktur, nib-oss, pembiayaan-hijau].

## KATEGORI 9 — sdm-organisasi: SDM & Organisasi (file: `src/lib/services/sdm-organisasi.ts`, export: `sdmOrganisasiContent` + `sdmOrganisasiEnrichment`)

Regulasi inti: UU 13/2003 jo. UU 6/2023 (Ciptaker), PP 34-36/2021, PMK 168/2023 (PPh 21), UU 1/1970 & PP 50/2012 (K3), SNI ISO 37001, UU 31/1999 (anti-gratifikasi), Permennaker 6/2020 (pemagangan), Permenaker 31/2013 (LKS Bipartit), UU PDP (data karyawan).

1. `struktur-organisasi-grading` — Angle: tumbuh tanpa struktur = chaos; kartu jabatan, grading, pay range; fairness & retensi; implementasi bertahap. Related: [sistem-penilaian-kinerja, audit-payroll, kontrak-kerja-pkwt, tata-kelola-korporat].
2. `audit-payroll` — Angle: PPh 21 (PMK 168/2023), THR, BPJS, status kontrak; kesalahan payroll = denda + gugatan; audit bertahap; perbaikan aman. Related: [npwp-pkp, bpjs, kontrak-kerja-pkwt, pelaporan-pajak].
3. `kontrak-kerja-pkwt` — Angle: PKWT vs PKWTT pasca-Ciptaker; dana kompensasi; jasa kreatif vs hubungan kerja; template & risiko. Related: [alih-daya-outsourcing, program-magang, phk-terkelola, audit-payroll].
4. `program-magang` — Angle: magang = bukan kerja gratis; pemagangan (Permennaker 6/2020), PKL, magang mahasiswa; perjanjian, asuransi, batas; manfaat program terstruktur. Related: [kontrak-kerja-pkwt, bnsp, lks-bipartit, program-magang → ganti sistem-penilaian-kinerja].
5. `alih-daya-outsourcing` — Angle: pasca-Ciptaker: jenis pekerjaan & perjanjian perusahaan alih daya; perlindungan pekerja; audit penyedia; risiko pengadilan (hubungan kerja langsung). Related: [kontrak-kerja-pkwt, bpjs, audit-payroll, legal-drafting].
6. `phk-terkelola` — Angle: PHK = titik rawan gugatan; alasan valid, prosedur, uang pesangon (PP 35/2021), bipartit/mediasi; komunikasi manusiawi; dokumentasi. Related: [kontrak-kerja-pkwt, lks-bipartit, legal-drafting, sengketa-bisnis-mediasi].
7. `lks-bipartit` — Angle: wajib 50+ pekerja; forum perundingan; SK & pendaftaran Disnaker; program tahunan; sering diminta di tender & sertifikasi. Related: [bpjs, smk3, p2k3-panitia-k3, phk-terkelola].
8. `iso-37001-antisuap` — Angle: tender BUMN & mitra global menuntut sistem antisuap; ISO 37001; kebijakan hadiah, due diligence, whistleblowing; audit sertifikasi. Related: [iso, tata-kelola-korporat, pencegahan-fraud-sop, dewan-komisaris-mandiri].
9. `sistem-penilaian-kinerja` — Angle: KPI/OKR yang adil & terukur; siklus review; kaitan kompensasi (sah secara hukum); pelatihan penilai. Related: [struktur-organisasi-grading, esop-program, audit-payroll, kontrak-kerja-pkwt].
10. `kebijakan-remote-hybrid` — Angle: kerja fleksibel = jam kerja fleksibel (Ciptaker); kebijakan tertulis, keamanan data (UU PDP), kompensasi & kehadiran; risiko gugatan tanpa kebijakan. Related: [kepatuhan-uu-pdp, kontrak-kerja-pkwt, kebijakan-privasi-situs, audit-payroll].

## KATEGORI 10 — resiliensi: Resiliensi & Perlindungan Bisnis (file: `src/lib/services/resiliensi-bisnis.ts`, export: `resiliensiContent` + `resiliensiEnrichment`)

Regulasi inti: UU 40/2014 (asuransi), UU ITE (bukti elektronik), UU 30/1999 (arbitrase), KUHPerdata (wanprestasi & kewajiban), UU 42/1999 (fidusia), UU 8/2010 (APU), SNI ISO 31000/22301 (referensi), UU 27/2022 (PDP), kebijakan PANDI.

1. `asuransi-bisnis` — Angle: polis menganggur vs risiko terbuka; pemetaan risiko → jenis pertanggungan (all risk, marine, liability, money, cyber); premi & klausul; pendampingan klaim. Related: [bisnis-kontinuitas-bcp, manajemen-risiko-erm, pencegahan-fraud-sop, manajemen-krisis-pr].
2. `forensik-digital` — Angle: pencurian data/objek IP oleh orang dalam; pengamanan bukti yang sah (chain of custody); analisis log; laporan kuat di pengadilan; UU ITE. Related: [respons-insiden-data, perlindungan-domain-brand, pencegahan-fraud-sop, sengketa-bisnis-mediasi].
3. `manajemen-krisis-pr` — Angle: viral negatif 24 jam; peta skenario, tim, holding statement, pemulihan; latihan simulasi. Related: [manajemen-reputasi-online, respons-insiden-data, manajemen-krisis-pr → ganti asuransi-bisnis, tata-kelola-korporat].
4. `bisnis-kontinuitas-bcp` — Angle: kegagalan sistem/vendor/bencana; BIA, RTO/RPO, rencana per skenario; uji simulasi; kaitan SSN & ISO 22301. Related: [audit-siber, asuransi-bisnis, manajemen-risiko-erm, aplikasi-sistem].
5. `pencegahan-fraud-sop` — Angle: fraud = kombinasi kesempatan & tekanan; kontrol internal, pemisahan tugas, SOP pengadaan; whistleblowing; audit rutin. Related: [forensik-digital, tata-kelola-korporat, iso-37001-antisuap, manajemen-risiko-erm].
6. `manajemen-risiko-erm` — Angle: ERM = satu bahasa risiko; registrasi risiko, matriks, mitigasi, monitoring; ISO 31000; untuk investor & bank. Related: [bisnis-kontinuitas-bcp, asuransi-bisnis, pencegahan-fraud-sop, tata-kelola-korporat].
7. `sengketa-bisnis-mediasi` — Angle: pengadilan bertahun-tahun; mediasi & arbitrase (UU 30/1999, BANI); klausul arbitrase sejak kontrak; strategi posisi hukum. Related: [legal-drafting, penagihan-piutang-legal, sengketa-tanah-penyelesaian, forensik-digital].
8. `penagihan-piutang-legal` — Angle: piutang macet = aliran kas mati; somasi, perjanjian angsuran, gugatan, eksekusi jaminan fidusia; dokumentasi utang; UU 42/1999. Related: [legal-drafting, sengketa-bisnis-mediasi, restrukturisasi-utang, valuasi-bisnis].
9. `perlindungan-domain-brand` — Angle: domain dicuri/email ditiru = phishing atas nama Anda; SPF/DKIM/DMARC, domain lock, pemantauan brandjacking; prosedur pemulihan. Related: [pendaftaran-merek, audit-siber, kepatuhan-uu-pdp, forensik-digital].
10. `manajemen-reputasi-online` — Angle: halaman Google = etalase kedua; audit SERP, protokol review, strategi konten; ORM bulanan; batas etis & legal. Related: [manajemen-krisis-pr, google-bisnisku, perlindungan-domain-brand, kepatuhan-iklan-digital].
