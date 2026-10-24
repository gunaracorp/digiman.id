/**
 * DATA PROFIL KOTA — fondasi Programmatic SEO DIGIMAN.ID.
 * 65 kota × konten unik (provinsi, pulau, sektor ekonomi, hook editorial)
 * → halaman /legalitas/[kota] yang bermanfaat nyata bagi pencari lokal,
 *   bukan doorway page: setiap kota punya fakta ekonomi & panduan berbeda.
 *
 * CATATAN: "jogja" sengaja tidak dibuat halaman (sinonim Yogyakarta)
 * untuk mencegah duplikasi konten — slug tersebut tetap hidup di korpus
 * kata kunci & tagar sosial.
 */

export interface CityProfile {
  slug: string;
  name: string;
  province: string;
  island: string;
  /** Kantor/cabang terdekat yang melayani kota ini */
  hub: string;
  /** Sektor ekonomi dominan — dipakai untuk konten unik & rekomendasi KBLI */
  economy: string[];
  /** Hook editorial unik per kota (1–2 kalimat) */
  hook: string;
}

type Raw = [slug: string, name: string, province: string, island: string, hub: string, economy: string, hook: string];

const RAW: Raw[] = [
  ["jakarta", "Jakarta", "DKI Jakarta", "Jawa", "Jakarta", "kantor pusat, jasa keuangan, ritel modern, startup teknologi", "Ibu kota Indonesia memusatkan lebih dari separuh kantor pusat korporasi nasional — KBLI jasa keuangan, konsultan, dan perdagangan besar mendominasi pendaftaran NIB di sini."],
  ["jakarta-selatan", "Jakarta Selatan", "DKI Jakarta", "Jawa", "Jakarta", "koridor digital TB Simatupang, SCBD, F&B premium, kreatif", "Koridor TB Simatupang–SCBD menjadi sarang startup dan agency — banyak pendiri di sini memilih PT sejak hari pertama agar investasi angels tidak terbentur akta."],
  ["jakarta-pusat", "Jakarta Pusat", "DKI Jakarta", "Jawa", "Jakarta", "korporasi, PMA, perdagangan besar, hospitalitas", "Thamrin–Sudirman adalah alamat bisnis paling bergengsi di Indonesia; PT PMA aktif berdiri di sini untuk menampung modal asing melalui jalur BKPM."],
  ["jakarta-barat", "Jakarta Barat", "DKI Jakarta", "Jawa", "Jakarta", "logistik Cengkareng, PIK, manufaktur ringan, ritel grosir", "Dari Puri hingga PIK, Jakarta Barat menggabungkan gudang logistik dekat bandara dengan pusat pertumbuhan properti baru — ideal untuk usaha distribusi."],
  ["surabaya", "Surabaya", "Jawa Timur", "Jawa", "Surabaya", "pelabuhan Tanjung Perak, perdagangan, manufaktur, logistik", "Kota Pahlawan berdiri di atas denyut Tanjung Perak — importir, eksportir, dan pemasok industri membutuhkan NIB dengan KBLI ekspor-impor yang tepat sejak awal."],
  ["bandung", "Bandung", "Jawa Barat", "Jawa", "Bandung", "industri kreatif, fashion, F&B, teknologi, pendidikan", "Kota kreatif Asia Afrika melahirkan brand fashion dan F&B baru setiap bulan — pendaftaran merek disini bukan pilihan, melainkan keharusan sebelum brand dicuri kompetitor."],
  ["medan", "Medan", "Sumatera Utara", "Sumatera", "Medan", "perkebunan sawit & karet, perdagangan, kuliner, BUMD", "Gerbang Sumatera ini memasok separuh komoditas perkebunan nasional; PT diperlukan untuk kontrak off-taker dan ekspor melalui Belawan."],
  ["semarang", "Semarang", "Jawa Tengah", "Jawa", "Semarang", "pelabuhan Tanjung Emas, garmen, logistik, agroindustri", "Tanjung Emas menjadikan Semarang simpul ekspor Jawa Tengah — industri garmen dan makanan olahan tumbuh cepat dan butuh legalitas rapi untuk sertifikasi."],
  ["makassar", "Makassar", "Sulawesi Selatan", "Sulawesi", "Makassar", "gerbang Indonesia timur, perikanan, kakao, logistik", "Sang gerbang Indonesia Timur: produk kakao dan hasil laut Sulawesi terhubung dunia dari sini, dan pembeli global menuntut badan hukum resmi + sertifikasi."],
  ["palembang", "Palembang", "Sumatera Selatan", "Sumatera", "Palembang", "migas, batubara, Sungai Musi, konstruksi", "Dari timah Sungai Musi hingga kontraktor migas, Palembang adalah kota tender — legalitas perusahaan yang rapi adalah syarat lolos prekualifikasi."],
  ["tangerang", "Tangerang", "Banten", "Jawa", "Jakarta", "kawasan industri Cikupa & Jatake, manufaktur, logistik udara", "Berbatasan langsung dengan Soekarno-Hatta, kawasan industri Tangerang menyuplai manufaktur dan logistik udara — KBLI gudang & ekspedisi paling ramai di sini."],
  ["tangerang-selatan", "Tangerang Selatan", "Banten", "Jawa", "Jakarta", "BSD City, properti, teknologi, kantor regional", "BSD City menarik kantor regional dan perusahaan teknologi — struktur PT dengan saham jelas memudahkan pendanaan ventura di kemudian hari."],
  ["depok", "Depok", "Jawa Barat", "Jawa", "Jakarta", "pendidikan, ritel, jasa, komuter Jabodetabek", "Kota mahasiswa dengan pasar konsumen muda — usaha edukasi, kos-kosan modern, dan F&B tumbuh cepat dan hanya butuh PT Perorangan untuk mulai legal."],
  ["bekasi", "Bekasi", "Jawa Barat", "Jawa", "Jakarta", "MM2100, Kawasan EJIP, manufaktur otomotif, supplier", "Suplai otomotif dan elektronik nasional berdenyut dari kawasan industri Bekasi — vendor lokal dipersyaratkan PT dengan NIB & ISO untuk masuk rantai pasok."],
  ["bogor", "Bogor", "Jawa Barat", "Jawa", "Bandung", "agroindustri, pariwisata pegunungan, pendidikan, UMKM", "Kota Hujan memiliki industri agrowisata dan pangan olahan yang kuat — sertifikasi halal & BPOM jadi pembeda utama produk lokal masuk ritel modern."],
  ["batam", "Batam", "Kepulauan Riau", "Sumatera", "Batam", "kawasan bebas (FTZ), elektronik, galangan kapal, dekat Singapura", "Status Free Trade Zone membuat Batam unik: pemilik usaha harus memahami aturan FTZ, BIFZA, dan KBLI manufaktur elektronik sebelum NIB terbit."],
  ["pekanbaru", "Pekanbaru", "Riau", "Sumatera", "Pekanbaru", "migas, sawit, jasa penunjang energi", "Ekonomi Riau berputar di energi dan sawit — perusahaan jasa penunjang migas wajib punya badan hukum PT untuk memenuhi kualifikasi tender."],
  ["bandar-lampung", "Bandar Lampung", "Lampung", "Sumatera", "Bandar Lampung", "sawit, lada, pelabuhan Panjang, agroindustri", "Pelabuhan Panjang mengirim lada dan CPO ke seluruh dunia — eksportir Lampung butuh PT, NIB ekspor, dan dokumen kepatuhan yang bersih."],
  ["padang", "Padang", "Sumatera Barat", "Sumatera", "Padang", "kuliner, pariwisata, pendidikan, jasa", "Rantau Minang melahirkan pengusaha keras — warung besar, katering, dan brand kuliner Padang kini menuju franchise yang menuntut merek terdaftar DJKI."],
  ["malang", "Malang", "Jawa Timur", "Jawa", "Surabaya", "agro (apel & sayur), pendidikan, pariwisata", "Kota apel dengan ekonomi kampus: produk olahan pertanian dan jasa pendidikan tumbuh bersama — banyak pemilik usaha mulai dari PT Perorangan lalu naik ke PT."],
  ["denpasar", "Denpasar", "Bali", "Bali & Nusa Tenggara", "Denpasar", "pariwisata, hospitality, F&B, digital nomad, seni", "Pusat ekonomi pulau dewata: villa, restoran, dan agency kreatif padat — investor asing umumnya berdiri PMA di Bali dengan KBLI hospitality yang presisi."],
  ["yogyakarta", "Yogyakarta", "DI Yogyakarta", "Jawa", "Yogyakarta", "pendidikan, pariwisata budaya, industri kreatif, digital", "Kota pelajar dan budaya — studio kreatif, sekolah bahasa, dan startup digital tumbuh dari komunitas; legalitas fleksibel seperti PT Perorangan sangat diminati."],
  ["surakarta", "Surakarta", "Jawa Tengah", "Jawa", "Semarang", "batik, kuliner, pendidikan, kerajinan", "Solo menjaga tradisi batik dan kuliner yang kini diekspor — merek & hak cipta motif batik adalah aset yang wajib dilindungi sejak dini."],
  ["tasikmalaya", "Tasikmalaya", "Jawa Barat", "Jawa", "Tasikmalaya", "UMKM bordir & logam, kuliner, kerajinan, agro", "Kota resmi kami: pusat UMKM bordir, kerajinan logam, dan kuliner Jawa Barat — banyak pengrajin Tasik yang kini menembus pasar nasional lewat marketplace dan butuh badan usaha resmi untuk payroll & kontrak."],
  ["cirebon", "Cirebon", "Jawa Barat", "Jawa", "Cirebon", "pelabuhan, batik Trusmi, gudang logistik, garmen", "Trusmi membesarkan ratusan rumah batik; pelabuhan dan tol Trans-Jawa membuat Cirebon titik strategis gudang distribusi Pulau Jawa bagian barat."],
  ["cimahi", "Cimahi", "Jawa Barat", "Jawa", "Bandung", "industri ringan, teknologi, militer, jasa", "Kota kecil padat di antara Bandung — industri ringan dan jasa teknologi berkembang dengan biaya operasional lebih rendah dari kota tetangganya."],
  ["sukabumi", "Sukabumi", "Jawa Barat", "Jawa", "Bandung", "agroindustri, perikanan pantai selatan, pariwisata", "Panen laut selatan dan agrowisata pegunungan menjadi mesin ekonomi — usaha pengolahan hasil tani/laut butuh PIRT, halal, hingga BPOM saat skala naik."],
  ["garut", "Garut", "Jawa Barat", "Jawa", "Bandung", "kuliner (dodol), kulit, agrowisata, kerajinan", "Dodol dan kulit Garut punya identitas geografis — pelaku usaha di sini dianjurkan mengunci nama dagang melalui merek sebelum kemitraan distributor masuk."],
  ["cianjur", "Cianjur", "Jawa Barat", "Jawa", "Bandung", "pertanian pangan, hortikultura, agroindustri", "Lumbung pangan Jawa Barat: padi dan hortikultura memasok Jabodetabek — koperasi dan badan usaha petani di sini tumbuh untuk menangkap kontrak BUMN."],
  ["purwakarta", "Purwakarta", "Jawa Barat", "Jawa", "Bandung", "industri kecil, waduk Jatiluhur, pertanian", "Antara Jakarta dan Bandung dengan tarif tanah kompetitif — kawasan industri Purwakarta menampung pabrik pendukung otomotif dan elektronik."],
  ["karawang", "Karawang", "Jawa Barat", "Jawa", "Jakarta", "industri otomotif & elektronik, lumbung padi", "Kawasan Industri Karawang (KIK) menjadi rumah pabrik otomotif global — pendirian PMA untuk supplier asing rutin kami proses di kawasan ini."],
  ["cikarang", "Cikarang", "Jawa Barat", "Jawa", "Jakarta", "Jababeka, MM2100, manufaktur ekspor, PMA", "Jababeka adalah kawasan industri terbesar di Asia Tenggara — ribuan PMA dan vendor ekspor berdiri di sini; kecepatan pengesahan SK sangat menentukan jadwal pabrik."],
  ["serang", "Serang", "Banten", "Jawa", "Jakarta", "industri, keraton, pertanian, logistik", "Ibu kota Banten dengan akses tol ganda — kawasan industri Serang menarik pabrik yang ingin dekat pelabuhan Merak tanpa biaya kota besar."],
  ["cilegon", "Cilegon", "Banten", "Jawa", "Jakarta", "Krakatau Steel, petrokimia, energi, fabrikasi logam", "Kota baja: ekosistem Krakatau Steel melahirkan ratusan kontraktor fabrikasi dan jasa industri yang semuanya wajib berbadan hukum untuk tender."],
  ["salatiga", "Salatiga", "Jawa Tengah", "Jawa", "Semarang", "industri kecil, pangan olahan, jasa", "Kota kecil yang gesit — industri pangan dan jasa UMKM berkembang tenang; legalitas ringan seperti PT Perorangan cocok untuk pemula di sini."],
  ["magelang", "Magelang", "Jawa Tengah", "Jawa", "Semarang", "pariwisata Borobudur, agrowisata, pendidikan", "Gerbang Borobudur memutar ekonomi wisata — homestay, travel, dan produk lokal perlu legalitas & merek agar bisa masuk OTA dan ritel bandara."],
  ["purwokerto", "Purwokerto", "Jawa Tengah", "Jawa", "Semarang", "pangan, agrowisata, pendidikan, kesehatan", "Pusat Banyumas dengan ekonomi kampus dan pangan — banyak klinik, lembaga kursus, dan usaha makanan olahan yang tumbuh dan butuh izin sektor."],
  ["kediri", "Kediri", "Jawa Timur", "Jawa", "Surabaya", "industri rokok, perdagangan, agroindustri", "Ekonomi Gudang Garam menopang ribuan supplier kecil di Kediri — vendor kemasan dan logistik dipersyaratkan badan usaha resmi untuk kontrak."],
  ["jember", "Jember", "Jawa Timur", "Jawa", "Surabaya", "tembakau, pendidikan, agroindustri, fashion JFC", "Festival Fashion Jember membuktikan industri lokal bisa naik kelas — brand lokal di sini kami dorong mendaftarkan merek sebelum masuk mall nasional."],
  ["madiun", "Madiun", "Jawa Timur", "Jawa", "Surabaya", "industri kecil, pangan, perdagangan antar-pulau", "Simpul ekonomi Jalur Selatan Jawa — usaha pangan dan perdagangan kecil-kecilan yang mulai menerima kontrak dari kota besar perlu PT untuk faktur resmi."],
  ["gresik", "Gresik", "Jawa Timur", "Jawa", "Surabaya", "semen, pelabuhan, industri berat, JIIPE", "Rumah Semen Indonesia dan kawasan JIIPE (industri + pelabuhan terintegrasi) — investor manufaktur berat umumnya berdiri PMA dengan fasilitas khusus."],
  ["sidoarjo", "Sidoarjo", "Jawa Timur", "Jawa", "Surabaya", "industri kecil (kerupuk & kulit), komuter, perdagangan", "Kota kerupuk dan kulit dengan ribuan home industry — ketika pesanan ekspor datang, naik kelas ke PT dengan sertifikasi adalah langkah wajib."],
  ["pasuruan", "Pasuruan", "Jawa Timur", "Jawa", "Surabaya", "kawasan industri, agro, pelabuhan", "Kawasan industri Pasuruan menopang manufaktur Jawa Timur timur laut — ditopang agroproduk pegunungan Bromo-Tengger."],
  ["probolinggo", "Probolinggo", "Jawa Timur", "Jawa", "Surabaya", "agro, gerbang Bromo, perikanan", "Kota gerbang Bromo dengan petani kopi & cengkeh — pelaku agrowisata dan eksportir komoditas butuh NIB dan sertifikasi untuk naik kelas."],
  ["banyuwangi", "Banyuwangi", "Jawa Timur", "Jawa", "Surabaya", "pariwisata, perkebunan, tambang emas", "Kota terbesar di Jawa Timur: wisata Ijen-Baluran, perkebunan, dan pertambangan — ekonominya membutuhkan konsultan legalitas lintas sektor."],
  ["sleman", "Sleman", "DI Yogyakarta", "Jawa", "Yogyakarta", "universitas, industri kreatif, SEZ Pendowa, properti", "Rumah bagi kampus-kampus besar dan koridor ekonomi baru — jasa kreatif, pendidikan nonformal, dan properti sewa berkembang pesat."],
  ["balikpapan", "Balikpapan", "Kalimantan Timur", "Kalimantan", "Balikpapan", "migas, gerbang IKN, jasa energi, logistik", "Gerbang utama menuju IKN Nusantara — kontraktor dan supplier jasa energi berbondong mendirikan PT untuk membidik proyek-proyek IKN."],
  ["samarinda", "Samarinda", "Kalimantan Timur", "Kalimantan", "Balikpapan", "batubara, IKN, perdagangan sungai", "Pusat pertambangan batubara Mahakam — perusahaan trading dan jasa tambang harus punya struktur PT yang bersih demi audit dan kontrak pemda."],
  ["banjarmasin", "Banjarmasin", "Kalimantan Selatan", "Kalimantan", "Banjarmasin", "batubara, sungai, perdagangan, sawit", "Kota seribu sungai dengan pasar perdagangan terbesar Kalimantan — distribusi batubara dan sawit menuntut dokumen legal yang presisi."],
  ["pontianak", "Pontianak", "Kalimantan Barat", "Kalimantan", "Pontianak", "perkebunan, perbatasan Malaysia, perdagangan", "Kota Khatulistiwa di perbatasan langsung dengan Malaysia — potensi ekspor lintas negara membuat legalitas standar internasional penting."],
  ["manado", "Manado", "Sulawesi Utara", "Sulawesi", "Manado", "perikanan, pariwisata Bunaken, pertanian", "Gerbang Indonesia timur laut: nelayan modern, wisata bawah laut, dan ekspor ikan — PT dengan sertifikasi mutu membuka pasar Jepang & Eropa."],
  ["palu", "Palu", "Sulawesi Tengah", "Sulawesi", "Makassar", "nikel, industri pengolahan, pesisir", "Boom nikel membuat Palu tumbuh cepat — vendor jasa dan logistik penunjang smelter wajib berbadan hukum untuk kontrak industri pengolahan."],
  ["gorontalo", "Gorontalo", "Gorontalo", "Sulawesi", "Manado", "jagung, perikanan, agroindustri", "Lumbung jagung nasional dengan pesisir timur — usaha pengolahan jagung dan ikan berkembang dan mulai menapaki pasar provinsi lain."],
  ["ambon", "Ambon", "Maluku", "Maluku", "Ambon", "perikanan, cengkeh, pariwisata", "Manise: laut Banda menyimpan nila ekspor — perusahaan pengolahan ikan dan rempah Ambon menunjuk kami untuk NIB ekspor dan halal."],
  ["ternate", "Ternate", "Maluku Utara", "Maluku", "Ternate", "pala & cengkeh, perikanan, sejarah rempah", "Kota rempah dunia — jejak VOC kini digantikan eksportir pala modern yang butuh struktur PT dan dokumen fitosanitary yang rapi."],
  ["sorong", "Sorong", "Papua Barat Daya", "Papua", "Sorong", "migas, gerbang Raja Ampat, perikanan", "Gerbang Raja Ampat dengan aktivitas migas kuat — jasa penunjang lepas pantai dan wisata premium sama-sama membutuhkan badan hukum."],
  ["jayapura", "Jayapura", "Papua", "Papua", "Jayapura", "pemerintahan, perdagangan, pendidikan", "Ibu kota Papua dengan proyek infrastruktur masif — kontraktor lokal dan nasional mendirikan PT dengan domisili Papua untuk tender pemda."],
  ["mataram", "Mataram", "Nusa Tenggara Barat", "Bali & Nusa Tenggara", "Mataram", "pariwisata Lombok, mutiara, agro", "Lombok naik kelas sebagai destinasi premium — investasi villa dan hospitality (termasuk investor asing) tumbuh dan butuh PMA atau PT lokal yang benar."],
  ["kupang", "Kupang", "Nusa Tenggara Timur", "Bali & Nusa Tenggara", "Kupang", "pemerintahan, perikanan, peternakan", "Pusat NTT dengan sumber daya ternak dan laut — usaha peternakan modern dan pengolahan ikan mulai membutuhkan izin usaha terstruktur."],
  ["jambi", "Jambi", "Jambi", "Sumatera", "Palembang", "migas, sawit, karet", "Ekonomi migas dan sawit Jambi menghidupi ratusan kontraktor dan trader — badan hukum resmi syarat masuk daftar vendor perusahaan besar."],
  ["bengkulu", "Bengkulu", "Bengkulu", "Sumatera", "Bengkulu", "perikanan, kopi, pemerintahan", "Kota Bunga Raflesia — kopi robusta Bengkulu dan hasil laut naik nilai saat pengolahnya berbadan usaha dengan sertifikasi."],
  ["pangkal-pinang", "Pangkal Pinang", "Kepulauan Bangka Belitung", "Sumatera", "Pangkal Pinang", "timah, lada, perikanan", "Ibu kota Bangka Belitung: timah dan lada putih dunia — pelaku ekspor di sini perlu PT + NIB dengan KBLI perdagangan ekspor yang tepat."],
  ["metro-lampung", "Metro Lampung", "Lampung", "Sumatera", "Bandar Lampung", "perdagangan, jasa, pendidikan", "Kota rencana yang rapi di jantung Lampung — jasa, pendidikan, dan ritelnya tumbuh sebagai satelit Bandar Lampung."],
  ["luwuk", "Luwuk", "Sulawesi Tengah", "Sulawesi", "Makassar", "migas (LNG), perikanan, pertambangan", "Rumah LNG Banggai — vendor jasa energi dan perikanan timur tumbuh; domisili Luwuk membuat tender regional lebih mudah."],
  ["palangka-raya", "Palangka Raya", "Kalimantan Tengah", "Kalimantan", "Banjarmasin", "sawit, kehutanan, pemerintahan", "Ibu kota Kalimantan Tengah dengan ekonomi sawit — perusahaan kebun dan pengolah CPO membutuhkan izin lingkungan dan legalitas yang tertata."],
];

export const CITY_PROFILES: CityProfile[] = RAW.map(
  ([slug, name, province, island, hub, economy, hook]) => ({
    slug,
    name,
    province,
    island,
    /**
     * HANYA kantor riil yang dipakai sebagai hub (anti klaim palsu):
     * Head Office Tasikmalaya + Branch Bandung. Seluruh kota lain tetap
     * dilayani penuh daring dari kantor pusat — jujur dan terverifikasi.
     */
    hub:
      slug === "tasikmalaya"
        ? "kantor pusat Tasikmalaya"
        : province === "DKI Jakarta" || province === "Jawa Barat" || province === "Banten"
          ? "cabang Bandung"
          : "kantor pusat Tasikmalaya",
    economy: economy.split(",").map((s) => s.trim()),
    hook,
  })
);

export const CITY_SLUGS = CITY_PROFILES.map((c) => c.slug);

export function getCity(slug: string): CityProfile | undefined {
  return CITY_PROFILES.find((c) => c.slug === slug);
}

/** Kota tetangga: provinsi sama dulu, lalu pulau sama (maksimal 8) — internal link mesh */
export function getNeighborCities(slug: string, max = 8): CityProfile[] {
  const self = getCity(slug);
  if (!self) return [];
  const sameProv = CITY_PROFILES.filter((c) => c.province === self.province && c.slug !== slug);
  const sameIsland = CITY_PROFILES.filter(
    (c) => c.island === self.island && c.province !== self.province && c.slug !== slug
  );
  return [...sameProv, ...sameIsland].slice(0, max);
}

/** Label kota dalam format judul ("tasikmalaya" → "Tasikmalaya") untuk tampilan */
export function cityLabel(slug: string): string {
  return getCity(slug)?.name ?? slug;
}
