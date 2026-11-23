# SPEK EKSPANSI 165 LAYANAN — 21 LAYANAN BARU (Task 23)

Konteks: situs sudah punya 144 layanan (18 kategori). Tugas ini menambah 21 layanan
BARU + 2 KATEGORI BARU sehingga total menjadi 165 layanan / 20 kategori.
Dua kategori baru: `signature` (Layanan Istimewa Gunara) dan `agri-maritim`
(Agribisnis, Peternakan & Maritim).

## STANDAR PENULISAN (WAJIB — sama dengan pustaka Task 22)

Setiap layanan adalah satu objek `ServiceContent` (dari `./types`) + satu entri
enrichment `ServiceEnrichment` (import type dari `./enrichment`, BUKAN `./types`).
Struktur file mengikuti pola `src/lib/services/resiliensi-bisnis.ts`:

- `slug` — persis seperti di tabel bawah (jangan diubah; dipakai KATALOG & DB).
- `tagline` — 1 kalimat puitis, metafora kuat, tanpa emoji, tanpa tanda hubung ganda berlebihan.
- `heroSub` — 1–2 kalimat: apa yang dikerjakan + untuk siapa.
- `timeline` — estimasi realistis, format "X minggu · Y bulan".
- `intro` — TEPAT 3 paragraf, tiap paragraf 3–5 kalimat:
  P1: konteks + regulasi KONKRET (sebut nomor UU/PP/Permen yang benar dari tabel).
  P2: kesalahan/konsekuensi nyata yang dialami pelaku usaha (kualitatif, spesifik).
  P3: bagaimana DIGIMAN.ID menangani (proses, prinsip transparansi & garansi).
- `benefits` — TEPAT 5 item {title, desc} (desc 1–2 kalimat).
- `process` — TEPAT 4 langkah {title, desc}.
- `requirements` — 4–6 butir dokumen/kebutuhan klien.
- `faqs` — TEPAT 3 {q, a}; jawaban 2–4 kalimat; minimal satu menjawab biaya,
  satu menjawab lama proses/risiko.
- `related` — TEPAT 4 slug dari daftar slug SAH di bawah (wajib valid!).
- Enrichment: `whoFor` 4 butir; `deliverables` 5 butir; `costs` 4–5 {item, note?}
  (note menyebut harga "mulai Rp X" sesuai tabel); `legalBasis` 3–4 regulasi lengkap.

Gaya bahasa: Indonesia formal hangat, tanpa emoji, tanpa markdown, tanpa jargon
berlebihan; istilah teknis dijelaskan saat pertama muncul. Setiap paragraf konten
harus mengandung informasi REGULASI atau FAKTUAL yang bisa diverifikasi.

## DAFTAR SLUG SAH untuk `related` (144 lama + 21 baru)

Lama: pendirian-pt, pt-perorangan, pendirian-cv, pt-pma, firma-ud, pendirian-koperasi,
pendirian-yayasan, perkumpulan-asosiasi, nib-oss, izin-sektor-ss, virtual-office,
legalisasi-apostille, izin-lingkungan, pbg-slf, sbu-konstruksi, api-bea-cukai,
izin-distribusi, pendaftaran-merek, hak-cipta-paten, merek-internasional, franchise,
sertifikasi-halal, bpom, sni, iso, higiene-sanitasi, npwp-pkp, pelaporan-pajak, bpjs,
kitas-rptka, kitas-investor, smk3, bnsp, perubahan-akta, pembubaran, legal-drafting,
lkpm, website-ecommerce, aplikasi-sistem, otomasi-ai, wa-business, google-bisnisku,
marketplace, branding-katalog, laporan-keberlanjutan, jejak-karbon-nzkc, kredit-karbon,
esg-rantai-pasok, gedung-hijau, sertifikasi-b-corp, epr-kemasan, pembiayaan-hijau,
eudr-komoditas, csr-cdas, pitch-deck-investor, valuasi-bisnis, data-room-virtual,
pendanaan-scf, kredit-kur, hibah-riset, esop-program, convertible-note-safe,
jamintel-ip-jaminan, restrukturisasi-utang, pendirian-holding,
perjanjian-pendiri-vesting, joint-venture, akuisisi-merger-umkm, spin-off-divestasi,
piagam-keluarga-bisnis, suksesi-penerus, perjanjian-pemegang-saham,
tata-kelola-korporat, dewan-komisaris-mandiri, kantor-perwakilan-asing,
entitas-luar-negeri, sertifikat-asal, inkoterm-kontrak-ekspor, kawasan-berikat,
transfer-pricing, ekspor-marketplace-global, antidumping-bmtp,
lartas-ekspor-komoditas, distributor-brand-asing, kepatuhan-uu-pdp, dpo-layanan,
pse-komdigi, audit-siber, respons-insiden-data, kepatuhan-iklan-digital,
tata-kelola-ai, kebijakan-privasi-situs, kepatuhan-fintech-ojk,
kepatuhan-dagang-daring, sertifikat-film-lsf, izin-event-konser,
izin-reklame-luar-ruang, lisensi-musik-lmk, isbn-penerbitan, rating-game-igrs,
pendaftaran-pers-online, lisensi-merchandise, kontrak-talent-kreator,
badan-usaha-produksi-film, cpotb-obat-tradisional, akl-alat-kesehatan, label-gizi,
izin-apotek-pbf, haccp-gmp-pangan, pangan-organik, izin-klinik-praktik,
p2k3-panitia-k3, laboratorium-uji-produk, audit-klaim-iklan-kesehatan,
due-diligence-properti, pengalihan-hak-tanah, hgu-hgb-pertanahan,
izin-usaha-perumahan, konsesi-ppjt-infrastruktur,
sertifikasi-menara-telekomunikasi, kawasan-industri, sengketa-tanah-penyelesaian,
izin-tambang-iup, izin-energi-terbarukan, struktur-organisasi-grading,
audit-payroll, kontrak-kerja-pkwt, program-magang, alih-daya-outsourcing,
phk-terkelola, lks-bipartit, iso-37001-antisuap, sistem-penilaian-kinerja,
kebijakan-remote-hybrid, asuransi-bisnis, forensik-digital, manajemen-krisis-pr,
bisnis-kontinuitas-bcp, pencegahan-fraud-sop, manajemen-risiko-erm,
sengketa-bisnis-mediasi, penagihan-piutang-legal, perlindungan-domain-brand,
manajemen-reputasi-online.

Baru (boleh saling dirujuk): dna-bisnis-360, launchpad-30-hari,
shield-kepatuhan-tahunan, deal-room-negosiasi, exit-ready-valuation,
tender-ready-program, pendiri-pribadi-shield, ispo-rspo-sawit,
izin-perikanan-sikpi, pvt-varietas-tanaman, izin-peternakan-nak,
plasma-perkebunan-kemitraan, izin-air-tanah-sipa, riph-impor-hortikultura,
kitap-pasangan-investor, skb-relief-pajak-treaty, keberatan-banding-pajak,
indikasi-geografis-sttig, bujp-jasa-keamanan, izin-limbah-b3,
skttk-personel-konstruksi.

## KATEGORI 1 — SIGNATURE: Layanan Istimewa Gunara (7 layanan)

Ini PRODUK BERBRAND GUNARA — tidak ada situs konsultan mana pun yang menjualnya
sebagai produk bernama. Sudut pandang menulis: produk terstandar dengan metodologi,
bukan jasa umum.

### 1. slug: `dna-bisnis-360` | Judul: Gunara Business DNA™ — Audit Legal 360°
Ikon: Fingerprint | Harga: Mulai Rp 4,9 jt
Timeline: Pemetaan 3–7 hari kerja · laporan & roadmap 1–2 minggu
Isi: audit menyeluruh kesehatan legal-kepatuhan bisnis: dokumen badan usaha (akta &
perubahannya, SK Kemenkumham), NIB & kecocokan KBLI dengan aktivitas nyata,
perizinan sektor, pajak (SPT, bukti potong, pembukuan), ketenagakerjaan (BPJS,
kontrak), merek & kekayaan intelektual, kontrak dagang. Hasil: skor kesehatan DNA
(dari 100), daftar celah berperingkat risiko, roadmap penutupan 12 bulan + estimasi biaya.
Metafora inti: "mobil punya servis berkala; bisnis jarang punya". Sanksi akibat
celah: denda UU KUP, sanksi administratif OSS (PP 5/2021), pidana lingkungan bila relevan.
Regulasi: UU 40/2007; PP 5/2021 (OSS-RBA) jo UU 6/2023; UU KUP 28/2007 jo UU 7/2021;
UU 13/2003.
Related: ["shield-kepatuhan-tahunan", "nib-oss", "lkpm", "legal-drafting"]

### 2. slug: `launchpad-30-hari` | Judul: Gunara LaunchPad 30 — Ide ke Bisnis Resmi dalam 30 Hari
Ikon: Rocket | Harga: Mulai Rp 9,9 jt
Timeline: Program terstruktur 30 hari · 4 fase mingguan
Isi: program paket lengkap pendirian+identitas+infrastruktur: Minggu 1 badan usaha
(pilih entitas, akta, NIB); Minggu 2 identitas (merek DGIP, domain, NPWP/PKP, WA
Business); Minggu 3 infrastruktur jualan (katalog WhatsApp, landing page, template
faktur, kontrak dasar penjualan); Minggu 4 kepatuhan awal & go-live (kalender
kewajiban, checklist operasional). Sasaran: hari ke-30 bisnis sah, beridentitas,
dan siap menerima pesanan. Cocok: pembuka usaha baru, UMKM naik kelas, pindah dari
usaha lama yang belum legal.
Regulasi: UU 40/2007; PP 8/2021 (perlindungan UMKM & pendirian mudah); UU 20/2016
(Merek); UU KUP.
Related: ["pendirian-pt", "pendaftaran-merek", "wa-business", "npwp-pkp"]

### 3. slug: `shield-kepatuhan-tahunan` | Judul: Gunara Compliance Shield™ — Langganan Penjaga Kewajiban
Ikon: CalendarCheck | Harga: Mulai Rp 2,9 jt/bulan
Timeline: Langganan bulanan · kontrak 12 bulan · onboarding 1 minggu
Isi: kalender kewajiban personal per bisnis (SPT masa & tahunan, LKPM OSS, laporan
keuangan, perpanjangan izin, BPJS bulanan, PH dan pelaporan ketenagakerjaan),
pengingat proaktif via WhatsApp, eksekusi administratif dalam kuota bulanan,
peringatan dini izin kedaluwarsa H-90/H-60/H-30, dashboard status. Sudut: kepatuhan
bukan proyek sekali jadi — ia kebiasaan bulanan yang harus dijaga; dari tahun-tahun
terakhir, sanksi paling mahal lahir dari lupa, bukan dari sengaja.
Regulasi: UU KUP 28/2007 jo UU 7/2021; PP 5/2021 (kewajiban laporan OSS); UU 24/2011
(BPJS); UU 13/2003.
Related: ["dna-bisnis-360", "pelaporan-pajak", "lkpm", "bpjs"]

### 4. slug: `deal-room-negosiasi` | Judul: Gunara Deal Desk — Pendampingan Negosiasi Investasi & Aliansi
Ikon: MessagesSquare | Harga: Mulai Rp 12,5 jt per deal
Timeline: Term sheet hingga closing 4–12 minggu
Isi: pendampingan penuh founder/owner saat menerima LOI/term sheet investor,
mitra JV asing, atau penawaran akuisisi: membaca & membongkar term sheet
(valuasi, liquidation preference, board seat, drag-along/tag-along, vesting),
koordinasi due diligence dua arah, strategi kursi negosiasi, drafting & negosiasi
SHA/SPA bersama notaris, closing dan kewajiban pasca-closing (BKPM, KPPU bila
ambang notifikasi tercapai). Beda dengan data-room-virtual (alat): ini pendamping
manusia di meja negosiasi.
Regulasi: UU 40/2007; UU 25/2007 (Penanaman Modal); UU 5/1999 & PP 57/2010
(larangan monopoli — notifikasi akuisisi KPPU bila ambang terpenuhi).
Related: ["data-room-virtual", "valuasi-bisnis", "perjanjian-pemegang-saham", "akuisisi-merger-umkm"]

### 5. slug: `exit-ready-valuation` | Judul: Gunara Exit Ready™ — Program Kesiapan Dijual & Suksesi
Ikon: PackageCheck | Harga: Mulai Rp 15 jt
Timeline: Program 6–12 bulan · evaluasi kuartalan
Isi: program menyiapkan bisnis agar layak dibeli/diseraikan dengan harga premium:
7 pilar — pembukuan bersih & laporan auditable; legalitas bebas cacat (due diligence
diri); kekayaan intelektual terdaftar atas nama PT; kontrak kunci terdokumentasi
(pelanggan, pemasok, karyawan); tim berjalan tanpa bergantung pendiri; struktur
pajak efisien & patuh; narasi pertumbuhan & data metrik. Keluaran: skor Exit-Ready
per pilar + rencana kerja kuartalan. Membedakan penjual siap vs tidak: diskon
harga 20–40% dan penundaan closing biasanya lahir dari temuan DD, bukan dari pasar.
Regulasi: UU 40/2007; PSAK & SAK-EP; UU KUP; UU 20/2016 (Merek).
Related: ["valuasi-bisnis", "suksesi-penerus", "pelaporan-pajak", "data-room-virtual"]

### 6. slug: `tender-ready-program` | Judul: Gunara TenderReady™ — Kesiapan Dokumen Lelang & Tender
Ikon: Trophy | Harga: Mulai Rp 6,5 jt
Timeline: Penataan kesiapan 2–6 minggu sesuai kondisi awal
Isi: program kesiapan mengikuti pengadaan pemerintah & korporasi: pemetaan
kualifikasi yang dituntut bidang terkait (NIB, SBU/SKK konstruksi, sertifikat
standar SNI bila wajib), personel bersertifikat (SKA/SKT/SKTTK), dokumen
administratif baku LPSE, registrasi vendor (LPSE daerah, portal supplier korporasi
seperti SAP Ariba), kalender & saringan tender relevan, simulasi evaluasi
administrasi agar tidak gugur di babak pertama. Mayoritas peserta lelang gugur
administratif sebelum kualifikasi teknis dinilai — di itulah produk ini bekerja.
Regulasi: Perpres 16/2018 jo Perpres 12/2021 (Pengadaan Barang/Jasa Pemerintah);
UU 2/2017 (Jasa Konstruksi); PP 8/2021.
Related: ["sbu-konstruksi", "skttk-personel-konstruksi", "sni", "virtual-office"]

### 7. slug: `pendiri-pribadi-shield` | Judul: Gunara Founder Shield™ — Proteksi Pribadi di Balik Bisnis
Ikon: LifeBuoy | Harga: Mulai Rp 7,5 jt
Timeline: Pemetaan 1–2 minggu · implementasi 1–2 bulan
Isi: memisahkan nasib pribadi pendiri dari risiko perusahaan: pemetaan tanggung
jawab pribadi (saat apa direksi/komisaris/pendiri bisa dijerat utang pribadi),
pemisahan rekening & aset, klausul SHA antar pemain keluarga, surat wasiat & kuasa
khusus (apabila pendiri meninggal/tidak cakap — siapa berwenang tanda tangan apa),
asuransi jiwa kunci & tanggung jawab, aturan pinjaman pribadi-perseroan yang sah.
Ditulis manusiawi: bisnis dibangun puluhan tahun bisa kacau oleh satu peristiwa
yang tidak dibicarakan.
Regulasi: UU 40/2007 (tanggung jawab direksi & pinjaman kepada anggota direksi);
KUHPerdata & UU 1/1974 jo UU 16/2019 (harta bersama perkawinan); UU 5/1960
(wasiat); UU 40/2014 (asuransi).
Related: ["perjanjian-pendiri-vesting", "suksesi-penerus", "piagam-keluarga-bisnis", "asuransi-bisnis"]

## KATEGORI 2 — AGRI-MARITIM: Agribisnis, Peternakan & Maritim (7 layanan)

### 8. slug: `ispo-rspo-sawit` | Judul: Sertifikasi Sawit Berkelanjutan ISPO/RSPO
Ikon: Leaf | Harga: Mulai Rp 25 jt (menyesuaikan luasan)
Timeline: Gap analysis 2–4 minggu · sertifikasi penuh 4–9 bulan
Isi: wajib hukumnya bagi pengusaha perkebunan sawit (Perpres 44/2020): gap analysis
prinsip-kriteria ISPO (legalitas lahan HGU/HGB, tata kelola, praktik budidaya
terbaik, pengelolaan lingkungan & limbah, kesejahteraan pekerja, tanggung jawab
sosial-ekonomi masyarakat sekitar termasuk FPIC), penyiapan dokumen & SOP, audit
bodi sertifikasi terakreditasi, pemantauan temuan minor-major, sertifikat & izin
penggunaan logo. Untuk yang ekspor ke pasar Eropa: jalur RSPO P&C dan ISCC.
Kaitkan dengan EUDR (geolokasi plot) sebagai layanan lanjutan.
Regulasi: Perpres 44/2020 (Sistem Perkebunan Sawit Berkelanjutan/ISPO); UU 39/2014
(Perkebunan); RSPO P&C 2018; Regulasi EUDR (UE) 2023/1115.
Related: ["laporan-keberlanjutan", "eudr-komoditas", "izin-lingkungan", "plasma-perkebunan-kemitraan"]

### 9. slug: `izin-perikanan-sikpi` | Judul: Legalitas Usaha Perikanan (SIKPI, SIUP & SIPI)
Ikon: Fish | Harga: Mulai Rp 3,5 jt
Timeline: 2–6 minggu tergantung jenis usaha
Isi: legalitas perikanan tangkap & budidaya lewat PPIP (Portal Perizinan Integral
Perikanan) KKP: SIUP (izin usaha perikanan), SIPI (izin penangkapan) & SIKL untuk
kapal, izin budidaya (rumput laut, ikan, udang, kepiting, sidat), pendaftaran
nelayan & alat tangkap, sertifikat asal ikan untuk ekspor, kepatuhan antipembajakan
(VMS, logbook). Kesalahan umum: kapal beroperasi tanpa SIPI terbit → kapal bisa
diseize, tangkapan disita, dan proses pembebasan berbulan-bulan.
Regulasi: UU 31/2004 jo UU 45/2009 (Perikanan); PP tentang pengelolaan perikanan
negara & penangkapan ikan (PP 57/2022); Permen KP tentang SIKPI/PPIP.
Related: ["nib-oss", "api-bea-cukai", "haccp-gmp-pangan", "lartas-ekspor-komoditas"]

### 10. slug: `pvt-varietas-tanaman` | Judul: Perlindungan Varietas Tanaman (PVT)
Ikon: Sprout | Harga: Mulai Rp 4,5 jt
Timeline: Pengajuan 2–4 minggu · pemeriksaan DUS 6–24 bulan
Isi: hak pemulia atas varietas baru (rights yang setara "paten" di dunia tanaman):
syarat varietas baru-unik-homogen-stabil-bernama, pengujian DUS (Distinct,
Uniform, Stable) oleh PPV (Pusat Perlindungan Varietas Pertanian), hak eksklusif
memproduksi & memperdagangkan materi perbanyakan, lisensi wajib untuk kepentingan
publik, pengecualian petani (menyimpan & memperbanyak benih untuk tanam sendiri).
Untuk pemulia, perusahaan benih, universitas & peneliti yang menghasilkan varietas.
Hampir tak ada konsultan yang memproduktifkan PVT sebagai layanan — padahal
benih adalah aset strategis nasional.
Regulasi: UU 22/2019 (Sistem Budidaya Tanaman — PVT); PP tentang perakitan,
sertifikasi & peredaran benih; Permentan tentang pendaftaran & perlindungan varietas.
Related: ["hak-cipta-paten", "pendaftaran-merek", "hibah-riset", "izin-peternakan-nak"]

### 11. slug: `izin-peternakan-nak` | Judul: Legalitas Peternakan, Pakan & Obat Hewan
Ikon: Beef | Harga: Mulai Rp 2,5 jt
Timeline: 2–6 minggu tergantung skala
Isi: legalitas usaha ternak menyeluruh: NIB KBLI peternakan + rekomendasi teknis
dinas peternakan, izin pemeliharaan ternak skala besar (dengan izin lingkungan),
sertifikat CPB ternak (Cara Produksi Baik), peredaran pakan (izin edar HPA —
Higiene Produksi Pakan via HPDH), obat hewan (izin edar OHT & prinsip apotek
hewan), pengangkutan ternak lintas daerah (IPT), narkoba veterinaria? tidak —
sebut NVK (Narkoba Veterinaria, Kontrolir, Jamu) untuk pemakai, dan sertifikat
veterinaria untuk ekspor. Biosecurity & zoonosis sebagai bahasa risiko.
Regulasi: UU 18/2009 jo UU 41/2014 (Peternakan & Kesehatan Hewan); PP 7/2021
(kemudahan berusaha); Permentan tentang CPB, pakan & obat hewan.
Related: ["nib-oss", "sertifikasi-halal", "izin-limbah-b3", "pvt-varietas-tanaman"]

### 12. slug: `plasma-perkebunan-kemitraan` | Judul: Kemitraan Plasma Inti Rakyat (PIR)
Ikon: Trees | Harga: Mulai Rp 8,5 jt
Timeline: Perancangan & negosiasi 4–8 minggu
Isi: hukumnya WAJIB: setiap pengusaha perkebunan wajib mengalokasikan minimal 20%
lahan untuk kemitraan dengan petani (UU 39/2014 ps. 21). Layanan: desain skema
(plasma kelola/modal kelola, pembagian hasil, FFB price setting), perjanjian
kemitraan dengan KUD/kelompok tani, penataan legalitas lahan plasma, kepatuhan
FPIC & konsultasi masyarakat, dokumentasi untuk perizinan & perluasan, audit
kemitraan berkala. Sengketa plasma adalah akar konflik perkebunan & pembekuan
izin — rancang dari awal, jangan pulih setelah terbakar.
Regulasi: UU 39/2014 (Perkebunan) ps. 21; PP 61/2016 (Kemitraan Perkebunan);
Permentan 98/2013 (perizinan usaha perkebunan & kemitraan).
Related: ["ispo-rspo-sawit", "sengketa-tanah-penyelesaian", "hgu-hgb-pertanahan", "legal-drafting"]

### 13. slug: `izin-air-tanah-sipa` | Judul: Pemanfaatan Air Tanah & Sumber Daya Air (SIPA)
Ikon: Droplets | Harga: Mulai Rp 5,5 jt
Timeline: Survei hidrogeologi 2–4 minggu · izin 1–3 bulan
Isi: pabrik, hotel, apartemen, perumahan & gedung yang memakai air tanah WAJIB
memiliki izin (SIPA) & membayar retribusi: identifikasi kebutuhan air, survei
hidrogeologi oleh ahli kaji tanah bersertifikat, rencana pengambilan & taksiran
penurunan muka air, pengajuan SIPA ke sumber daya air (provinsi/kabupaten via
e-perizinan), pemasangan meter, pembayaran PMH/PSDH? (sebut: retribusi penggunaan
air tanah), laporan pengambilan berkala. Risiko tanpa izin: penutupan sumur,
denda & tagihan retribusi tertunggak berbulan-bulan sekaligus.
Regulasi: UU 17/2019 (Sumber Daya Air); PP 121/2015 jo PP 6/2022 (pemanfaatan
air tanah); Permen PUPR/Perda terkait SIPA.
Related: ["izin-lingkungan", "pbg-slf", "izin-limbah-b3", "kawasan-industri"]

### 14. slug: `riph-impor-hortikultura` | Judul: RIPH — Rekomendasi Impor Hortikultura
Ikon: Apple | Harga: Mulai Rp 3,9 jt per siklus semester
Timeline: 2–4 minggu per periode pengajuan
Isi: importir bawang merah, bawang putih, kentang, apel, jeruk, wortel dll WAJIB
RIPH (Rekomendasi Impor Hortikultura) sebelum barang berangkat: perhitungan rencana
impor semester (permintaan-penyediaan dalam negeri), persyaratan petani mitra
& kebun pembinaan untuk beberapa komoditas, pengajuan via sistem e-perizinan
Kementan, sinkronisasi API-U/UP & PEB/PIB, pelaporan realisasi impor, penyesuaian
kuota antar periode. Kesalahan fatal: barang sudah berlayar tanpa RIPH → stuck
di pelabuhan, demurrage harian, hingga re-ekspor.
Regulasi: UU 22/2019 (Hortikultura di dalam SBT); Permentan tentang Rekomendasi
Impor Hortikultura (RIPH, terbaru); PMK terkait lartas impor bea cukai.
Related: ["api-bea-cukai", "lartas-ekspor-komoditas", "sni", "sertifikat-asal"]

## KATEGORI 3 — SEBAR KE KATEGORI LAMA (7 layanan)

### 15. slug: `kitap-pasangan-investor` | Judul: KITAP — Izin Tinggal Tetap (Pasangan, Investor, Pensiun)
Ikon: Luggage | Kategori: ketenagakerjaan | Harga: Mulai Rp 4,5 jt
Timeline: VTT/KITAS pra-syarat 1–2 bulan · KITAP 2–4 minggu setelahnya
Isi: izin tinggal tetap 5 tahun: KITAP pasangan (WNA kawin WNI — setelah VTT
atau perkawinan tercatat 2 tahun; termasuk izin kerja mandiri pasangan), KITAP
investor/eksekutif (direktur utama/komisaris PT PMA dengan modal disetor),
KITAP pensiun (55+, bukti penghasilan/pendepositan), e-POA, integrasi aplikasi
evisa.imigrasi.go.id, pembaruan & izin masuk-keluar (MERP terkini). Kesalahan:
status pasangan kawin belum tercatat → pengajuan bermasalah; exit-re-entry lupa
diperbarui → status hangus di bandara.
Regulasi: UU 6/2011 (Keimigrasian) jo perubahan; PP 31/2013 jo PP 45/2024
(pengendalian keimigrasian); Permenkumham terkait izin tinggal tetap.
Related: ["kitas-rptka", "kitas-investor", "pt-pma", "kantor-perwakilan-asing"]

### 16. slug: `skb-relief-pajak-treaty` | Judul: SKB & Tax Relief Pajak Luar Negeri (P3B)
Ikon: Landmark | Kategori: pajak | Harga: Mulai Rp 3,5 jt
Timeline: SKB 2–4 minggu · refund 6–12 bulan
Isi: menghentikan pemotongan pajak yang tidak seharusnya & mengembalikan
kelebihan: SKB PPh 4(2)/PPh 23 (jasa, sewa, royalti, dividen) untuk pihak
tertentu, pengurangan tarif PPh 26 via Perjanjian Penghindaran Pajak Ganda
(bukti domisili DGT-1/DGT-2 dari negara mitra), bunga pinjaman luar negeri,
upah pesawat udara/kapal, refund kelebihan potong & restitusi. Untuk: WAPU
luar negeri, importir jasa, perusahaan dengan pinjaman LN, investor asing
menerima dividen dari RI. Uang kembali nyata, bukan sekadar kepatuhan.
Regulasi: UU PPh 7/1983 jo perubahan (PPh 26 & SKB); UU KUP (restitusi);
UU No. 7/2021 (ratifikasi MLI/instrumen OECD); PMK tentang teknik bukti
domisili pajak luar negeri (DGT-1/DGT-2).
Related: ["transfer-pricing", "npwp-pkp", "pelaporan-pajak", "entitas-luar-negeri"]

### 17. slug: `keberatan-banding-pajak` | Judul: Keberatan, Banding & Sengketa Pajak
Ikon: Scale | Kategori: pajak | Harga: Mulai Rp 5 jt
Timeline: Keberatan 2–4 bulan · banding 6–18 bulan
Isi: melawan SPHP/SKP kurang bayar dengan prosedur yang benar: analisis
pemeriksaan (temuan mana yang bisa dibantah — koreksi fiskal, penghitungan,
bukti), keberatan ke DJP dalam 30 hari, banding ke Pengadilan Pajak bila
keberatan ditolak/sebagian, sela: keberatan atas penindakan (SP2DK), TERA,
penundaan penagihan (18–24 bulan), pembayaran & pembebasan. Strategi: tidak
semua temuan layak diperjuangkan — hitung nilai sengketa, biaya, peluang;
komposisi bukti menentukan, bukan emosi.
Regulasi: UU KUP 28/2007 jo UU 7/2021 (keberatan & banding); PP 17/2021
(Pengadilan Pajak); PMK tentang tata cara keberatan, banding & sengketa pajak.
Related: ["pelaporan-pajak", "transfer-pricing", "sengketa-bisnis-mediasi", "npwp-pkp"]

### 18. slug: `indikasi-geografis-sttig` | Judul: Indikasi Geografis & Sertifikat STTIG
Ikon: MapPinned | Kategori: ki | Harga: Mulai Rp 8 jt
Timeline: Pengajuan IG 6–18 bulan · STTIG per produsen 1–3 bulan
Isi: melindungi asal-usul yang membuat produk mahal: kopi Gayo/Toraja/Kintamani,
batik, asam jawa Ponorogo, dll. Tiga lapis: (1) pendaftaran Indikasi Geografis
ke DGIP oleh komite (kelompok masyarakat/koperasi) — buku syarat (kualitas,
reputasi, peta wilayah, iklim-tanah, proses), (2) penetapan IG, (3) STTIG per
produsen di wilayah agar berhak memakai nama. Manfaat: harga premium, akses
ekspor, tameng anti pemalsuan. Fasilitasi lengkap: penyusunan buku syarat,
peta batas, pengujian kualitas, pendampingan komite.
Regulasi: UU 20/2016 (Merek & Indikasi Geografis); PP 51/2007 (Indikasi
Geografis); Permen Hukum terkait pendaftaran IG & STTIG.
Related: ["pendaftaran-merek", "sni", "hak-cipta-paten", "franchise"]

### 19. slug: `bujp-jasa-keamanan` | Judul: Izin Usaha Jasa Keamanan (BUJP)
Ikon: Siren | Kategori: perizinan | Harga: Mulai Rp 4,5 jt
Timeline: 1–3 bulan
Isi: pendirian & perizinan badan usaha jasa penunjang keamanan (perusahaan
security): pemilihan bentuk badan, NIB KBLI jasa penunjang keamanan,
kewajiban personel bersertifikat Gada (Pratama/Madya/Utama) lewat pelatihan
terakreditasi Polri, pelaporan/registrasi BUJP ke Polri (Direktorat Sabhara)
via sistem terkini, SOP operasional & kontrak kerja personel yang patuh,
perizinan cabang. Kesalahan umum: memakai KBLI umum lalu kontrak dengan
klien korporasi ditolak saat audit vendor.
Regulasi: UU 2/2002 (Kepolisian Negara RI); Peraturan Kapolri tentang
pengawasan & pembinaan BUJP; PP 8/2021 (kewenangan usaha).
Related: ["pendirian-pt", "nib-oss", "bnsp", "iso"]

### 20. slug: `izin-limbah-b3` | Judul: Persetujuan & Pengelolaan Limbah B3 (LB3)
Ikon: Biohazard | Kategori: esg | Harga: Mulai Rp 6,5 jt
Timeline: 1–3 bulan tergantung jenis & volume limbah
Isi: generator limbah B3 (pabrik, bengkel, galvanis, percetakan, laboratorium,
rumah sakit, SPBU): identitas & klasifikasi limbah (kode limbah), persetujuan
teknis TPS penyimpanan sementara (standar bangunan, label, MDS), kontrak
transporter & pengolah/pemusnah berizin, manifest elektronik (SIPN),
laporan pengelolaan berkala (LAPB3), rencana pengurangan, protokol
respons tumpahan. Tanpa tata kelola yang benar: sanksi administratif,
denda lingkungan, bahkan pidana UU 32/2009 — dan biaya pemulihan
jauh melebihi biaya kepatuhan.
Regulasi: UU 32/2009 (PPLH); PP 22/2021 (Penyelenggaraan Perlindungan &
Pengelolaan Lingkungan — termasuk LB3); Permen LHK tentang penyimpanan
sementara & tata cara pengelolaan LB3.
Related: ["izin-lingkungan", "laporan-keberlanjutan", "p2k3-panitia-k3", "laboratorium-uji-produk"]

### 21. slug: `skttk-personel-konstruksi` | Judul: SKTTK & SKA/SKT Personel Konstruksi
Ikon: HardHat | Kategori: properti | Harga: Mulai Rp 1,5 jt per personel
Timeline: 2–6 minggu tergantung kelengkapan riwayat
Isi: legalitas personel jasa konstruksi (LPJK): SKA (ahli), SKT (terampil),
TDK (terampil khusus) dari uji kelayakan, lalu SKTTK (tanda terdaftar)
yang wajib dimiliki personel di lapangan proyek; kualifikasi pendidikan &
pengalaman, rapor per matrik kualifikasi, pengurusan individual maupun
paket korporasi (menyamakan tim dengan kualifikasi SBU), pembaruan &
penyesuaian aturan berlaku terkini. Proyek tanpa personel terdaftar bisa
gagal administrasi lelang & menimbulkan risiko keselamatan yang tidak
tertutup asuransi.
Regulasi: UU 2/2017 (Jasa Konstruksi); PP 22/2020 (perubahan atas PP 29/2000);
Permen PUPR tentang uji kelayakan SKA/SKT/TDK & tata cara SKTTK.
Related: ["sbu-konstruksi", "bnsp", "pbg-slf", "tender-ready-program"]

## RULES TEKNIS EXPORT (WAJIB)

File harus mengekspor DUA hal, contoh (ganti nama variabel sesuai tugas):
```ts
import type { ServiceContent } from "./types";
import type { ServiceEnrichment } from "./enrichment";

export const signatureContent: ServiceContent[] = [ /* 7 layanan */ ];
export const signatureEnrichment: Record<string, ServiceEnrichment> = { /* 7 slug */ };
```
- JANGAN menambah field di luar interface; JANGAN mengimpor dari "./types" untuk
  ServiceEnrichment (didefinisikan di "./enrichment").
- Setelah menulis file, jalankan: `cd /home/z/my-project && bunx tsc --noEmit 2>&1 | grep -i <nama-file>` —
  hasil harus kosong (error dari file lain = utang legacy, abaikan).
- Validasi jumlah item tiap layanan dengan skrip bun (intro=3, benefits=5,
  process=4, requirements 4–6, faqs=3, related=4 valid, whoFor=4, deliverables=5,
  costs 4–5, legalBasis 3–4) — semua slug related harus ada di daftar slug SAH di atas.
