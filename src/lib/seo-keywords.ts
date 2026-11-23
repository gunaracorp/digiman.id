/**
 * DIGIMAN.ID — SEO GOD MODE: Korpus 1.000 Kata Kunci + 1.000 Tagar.
 *
 * Generator DETERMINISTIK (tanpa random) — hasil identik di server & client,
 * aman terhadap hydration mismatch. Strategi:
 *   1. Entitas & brand dulu (asosiasi nama → SERP brand).
 *   2. Layanan inti (apa yang dijual).
 *   3. Long-tail intent (biaya/syarat/cara — query nyata pencari).
 *   4. Kombinasi layanan × kota (local SEO nasional).
 *   5. Kombinasi long-tail × kota & layanan × modifier intent.
 * Semua chip dirender SEBAGAI TEKS TERLIHAT di komponen SeoHub → ini konten
 * direktori yang sah (bukan hidden text), berfungsi seperti halaman tag.
 */

// ─────────────────────────── Basis terkurasi ───────────────────────────

/** Entitas & brand — harus muncul paling depan. */
const ENTITIES: string[] = [
  "digiman.id",
  "digiman id",
  "pt digital bisnis manajemen",
  "gugun gunara",
  "muhammad lutfi azmi",
  "prabudanling",
  "santri angon",
  "top konsultan internasional",
  "topkonsultan.web.id",
  "gunara os",
  "gunara os 165 dokumen",
  "standarisasi gunara os",
  "paket pga-39",
  "paket pga-45",
  "paket pga-72",
  "paket pga-120",
  "paket pga-165",
  "super organisasi",
  "165 dokumen super organisasi",
  "7 lapis langit legalitas",
  "jasa legalitas bisnis indonesia",
  "konsultan legalitas terpercaya",
  "biro jasa legalitas",
  "kantor jasa legalitas",
  "partner legalitas umkm",
  "konsultan bisnis & manajemen",
  "konsultan digitalisasi bisnis",
  "agensi transformasi digital",
  "dewan pakar bisnis",
  "46 dewan pakar",
];

/** Layanan inti (dasar kombinasi). */
const SERVICES: string[] = [
  "pendirian pt",
  "pt perorangan uuck",
  "pendirian cv",
  "pendirian pt pma",
  "investasi asing indonesia",
  "pendirian firma",
  "pendirian ud",
  "pendirian persekutuan",
  "pendirian koperasi",
  "pendirian yayasan",
  "pendirian lembaga nirlaba",
  "pendirian perkumpulan",
  "pendirian asosiasi",
  "penerbitan nib",
  "oss rba",
  "pemetaan kbli",
  "izin usaha sektor",
  "sertifikat standar",
  "domisili usaha",
  "virtual office",
  "legalisasi dokumen",
  "apostille",
  "terjemahan tersumpah",
  "pendaftaran merek",
  "pendaftaran hak cipta",
  "pendaftaran paten",
  "pendaftaran desain industri",
  "sertifikasi halal",
  "sertifikasi iso",
  "npwp badan",
  "akta pendirian perusahaan",
  "pengesahan sk kemenkumham",
  "perubahan anggaran dasar",
  "tambahan kbli",
  "website company profile",
  "pembuatan toko online",
  "sistem informasi manajemen",
  "aplikasi bisnis custom",
  "ai chatbot layanan pelanggan",
  "digital marketing",
  "seo website perusahaan",
  "laporan keuangan perusahaan",
  "pajak badan",
  "struktur organisasi",
  "sop perusahaan",
  "audit internal",
  "rekrutmen dan hrd",
  "konsultan manajemen",
];

/** Modifikasi intent — dipasangkan dengan layanan. */
const MODIFIERS: string[] = [
  "murah",
  "terpercaya",
  "terbaik",
  "cepat",
  "resmi",
  "legal",
  "online",
  "garansi terbit",
  "terlengkap",
  "profesional",
  "berpengalaman",
  "proses cepat",
  "100% online",
  "bergaransi",
  "harga transparan",
  "konsultasi gratis",
];

/** Long-tail intent — query nyata yang diketik orang di Google. */
const LONG_TAILS: string[] = [
  "biaya pendirian pt",
  "syarat pendirian pt",
  "cara pendirian pt",
  "prosedur pendirian pt",
  "biaya pendirian cv",
  "syarat pendirian cv",
  "cara pendirian cv",
  "biaya pendirian pt perorangan",
  "syarat pt perorangan uuck",
  "cara daftar pt perorangan",
  "biaya pendirian pt pma",
  "syarat pendirian pt pma",
  "aturan investasi asing",
  "persyaratan modal asing",
  "biaya pendirian koperasi",
  "syarat pendirian yayasan",
  "biaya pendirian yayasan",
  "syarat pendirian perkumpulan",
  "perbedaan pt dan cv",
  "perbedaan pt dan ud",
  "perbedaan firma dan cv",
  "pt vs cv mana yang lebih baik",
  "apa itu nib",
  "cara daftar nib online",
  "apa itu oss rba",
  "cara mengurus oss",
  "apa itu kbli",
  "kbli untuk toko online",
  "kbli untuk jasa",
  "cara ubah kbli perusahaan",
  "biaya pendaftaran merek",
  "cara daftar merek dagang",
  "syarat pendaftaran merek",
  "masa berlaku merek terdaftar",
  "merek vs hak cipta",
  "cara daftar hak cipta",
  "cara daftar paten",
  "biaya daftar paten",
  "desain industri terdaftar",
  "biaya sertifikasi halal",
  "cara daftar sertifikasi halal",
  "syarat sertifikasi halal",
  "sertifikasi iso 9001",
  "apa itu apostille",
  "cara mengurus apostille",
  "legalisasi dokumen ke luar negeri",
  "jasa terjemahan tersumpah",
  "syarat virtual office",
  "biaya virtual office",
  "virtual office untuk nib",
  "domisili usaha itu apa",
  "surat keterangan domisili",
  "biaya npwp badan",
  "cara daftar npwp badan",
  "akta pendirian perusahaan itu apa",
  "pengesahan akta kemenkumham",
  "biaya ubah anggaran dasar",
  "wajib lapor tahunan perusahaan",
  "panduan wajib lapor",
  "apa itu gunara os",
  "harga gunara os",
  "contoh dokumen super organisasi",
  "standarisasi sop perusahaan",
  "cara membuat sop perusahaan",
  "struktur organisasi perusahaan",
  "jasa pembuatan website perusahaan",
  "biaya website company profile",
  "biaya toko online",
  "jasa ai chatbot",
  "biaya digital marketing",
  "jasa seo lokal",
  "cara naik di google",
  "biaya laporan keuangan perusahaan",
  "jasa pajak badan",
  "konsultan manajemen untuk umkm",
  "jasa audit internal",
  "paket legalitas usaha lengkap",
  "paket pendirian pt murah",
  "konsultan pendirian pt terpercaya",
  "jasa pendirian perusahaan bergaransi",
  "biro jasa umkm",
  "legalitas usaha untuk mengikuti tender",
  "legalitas untuk pengajuan pinjaman",
  "syarat ikut lelang proyek",
  "persiapan modal investasi",
  "panduan mulai bisnis dari nol",
  "checklist legalitas startup",
  "legalitas usaha online shop",
  "izin usaha untuk franchise",
];

/** Kota/kabupaten — cakupan local SEO nasional. */
const CITIES: string[] = [
  "jakarta",
  "jakarta selatan",
  "jakarta pusat",
  "jakarta barat",
  "surabaya",
  "bandung",
  "medan",
  "semarang",
  "makassar",
  "palembang",
  "tangerang",
  "tangerang selatan",
  "depok",
  "bekasi",
  "bogor",
  "batam",
  "pekanbaru",
  "bandar lampung",
  "padang",
  "malang",
  "denpasar",
  "yogyakarta",
  "surakarta",
  "tasikmalaya",
  "cirebon",
  "cimahi",
  "sukabumi",
  "garut",
  "cianjur",
  "purwakarta",
  "karawang",
  "cikarang",
  "serang",
  "cilegon",
  "salatiga",
  "magelang",
  "purwokerto",
  "kediri",
  "jember",
  "madiun",
  "gresik",
  "sidoarjo",
  "pasuruan",
  "probolinggo",
  "banyuwangi",
  "jogja",
  "sleman",
  "balikpapan",
  "samarinda",
  "banjarmasin",
  "pontianak",
  "manado",
  "palu",
  "gorontalo",
  "ambon",
  "ternate",
  "sorong",
  "jayapura",
  "mataram",
  "kupang",
  "jambi",
  "bengkulu",
  "pangkal pinang",
  "metro lampung",
  "luwuk",
  "palangka raya",
];

// ─────────────────────────── Mesin kombinasi ───────────────────────────

function buildKeywords(): string[] {
  const out = new Set<string>();
  const add = (s: string) => {
    const t = s.replace(/\s+/g, " ").trim().toLowerCase();
    if (t.length >= 6 && t.length <= 72) out.add(t);
  };

  // 1) Entitas & brand + layanan + long-tail + modifier (versi berdiri sendiri)
  ENTITIES.forEach(add);
  SERVICES.forEach(add);
  LONG_TAILS.forEach(add);
  ["jasa pendirian pt", "jasa pendirian cv", "jasa legalitas usaha", "konsultan pendirian perusahaan", "layanan virtual office", "jasa pendaftaran merek"].forEach(add);

  // 2) Layanan × Kota — inti direktori local SEO
  for (const s of SERVICES) for (const c of CITIES) add(`${s} ${c}`);

  // 3) Long-tail × Kota — query super spesifik
  for (const l of LONG_TAILS) {
    for (const c of ["jakarta", "bandung", "surabaya", "tasikmalaya", "bekasi", "depok", "tangerang", "medan", "makassar", "semarang"]) {
      add(`${l} ${c}`);
    }
  }

  // 4) Layanan × Modifier — intent komersial
  for (const s of SERVICES) {
    for (const m of MODIFIERS) add(`${s} ${m}`);
  }

  // 5) Layanan × Kota × Modifier — long-tail nasional
  for (const s of SERVICES) {
    for (const c of ["jakarta", "bandung", "surabaya", "tasikmalaya", "bekasi", "depok"]) {
      for (const m of ["murah", "terpercaya", "cepat", "garansi terbit"]) {
        add(`${s} ${c} ${m}`);
      }
    }
  }

  return [...out];
}

/** CamelCase → tagar sah (tanpa spasi/simbol, tidak diawali angka). */
function toTag(s: string): string {
  const camel = s
    .split(/[^a-z0-9]+/i)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  const safe = /^[0-9]/.test(camel) ? `Tag${camel}` : camel;
  return `#${safe}`;
}

/** Tagar terkurasi (universe bisnis/legal) — di depan. */
const CURATED_TAGS: string[] = [
  "#DIGIMANID", "#GunaraOS", "#GugunGunara", "#MuhammadLutfiAzmi",
  "#Prabudanling", "#SantriAngon", "#TopKonsultanInternasional",
  "#PendirianPT", "#PendirianCV", "#PTPMA", "#PTPerorangan", "#UUCK",
  "#NIB", "#OSSRBA", "#KBLI", "#PendaftaranMerek", "#HakCipta", "#Paten",
  "#DesainIndustri", "#SertifikasiHalal", "#VirtualOffice", "#Apostille",
  "#LegalitasUsaha", "#LegalitasBisnis", "#UmkmIndonesia", "#UMKMNaikKelas",
  "#BisnisIndonesia", "#WirausahaIndonesia", "#StartupIndonesia",
  "#DigitalisasiBisnis", "#SuperOrganisasi", "#PGA165", "#PGA120",
  "#PGA72", "#PGA45", "#PGA39", "#StandarisasiDokumen", "#SOPPerusahaan",
  "#KonsultanBisnis", "#KonsultanLegalitas", "#KonsultanManajemen",
  "#TransformasiDigital", "#AIChatbot", "#DigitalMarketing", "#SEOLokal",
  "#CompanyProfile", "#TokoOnline", "#WebsiteMurah", "#InvestasiAsing",
  "#KoperasiIndonesia", "#Yayasan", "#LembagaNirlaba", "#SertifikatStandar",
  "#IzinUsaha", "#DomisiliUsaha", "#TerjemahanTersumpah", "#Notaris",
  "#Kemenkumham", "#OSS", "#NPWP", "#AktaPendirian", "#SKKemenkumham",
  "#ISO9001", "#AuditInternal", "#HRD", "#ManajemenBisnis", "#EkspansiBisnis",
  "#Franchise", "#HalalIndonesia", "#UsahaBergaransi", "#GaransiTerbit",
  "#CekLegalitas", "#BisnisResmi", "#NaikKelas", "#BanggaBuatanIndonesia",
];

function buildHashtags(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (t: string) => {
    const key = t.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(t);
    }
  };
  CURATED_TAGS.forEach(push);
  // Tagar camel dari seluruh korpus kata kunci (terkurasi → kombinasi),
  // memberi cakupan ribuan topik tanpa duplikat.
  for (const kw of buildKeywords()) push(toTag(kw));
  // Pengisi cadangan (deterministik) bila dedupe menurunkan jumlah di bawah 1000.
  if (out.length < 1000) {
    const fillCities = ["cilacap", "kusuk bangka", "baubau", "kendari", "bitung", "binjai", "dumai", "tebing tinggi"];
    for (const kw of buildKeywords()) {
      for (const c of fillCities) {
        if (out.length >= 1000) break;
        push(toTag(`${kw} ${c}`));
      }
      if (out.length >= 1000) break;
    }
  }
  return out;
}

// ─────────────────────────── Hasil akhir (pin 1.000) ───────────────────────────

const KEYWORDS_RAW = buildKeywords();
const HASHTAGS_RAW = buildHashtags();

/** Tepat 1.000 kata kunci. */
export const ALL_KEYWORDS: string[] = KEYWORDS_RAW.slice(0, 1000);
/** Tepat 1.000 tagar. */
export const ALL_HASHTAGS: string[] = HASHTAGS_RAW.slice(0, 1000);

/** N kata kunci teratas (urutan prioritas entitas → layanan → long-tail → kombinasi). */
export function topKeywords(n: number): string[] {
  return ALL_KEYWORDS.slice(0, Math.max(0, Math.min(n, ALL_KEYWORDS.length)));
}

/** N tagar teratas. */
export function topHashtags(n: number): string[] {
  return ALL_HASHTAGS.slice(0, Math.max(0, Math.min(n, ALL_HASHTAGS.length)));
}

/** Statistik korpus — dipakai UI & README. */
export const SEO_STATS = {
  keywords: ALL_KEYWORDS.length,
  hashtags: ALL_HASHTAGS.length,
  cities: CITIES.length,
  services: SERVICES.length,
  longTails: LONG_TAILS.length,
} as const;

/** Pasangan layanan × kota terpilih untuk blok "Direktori Layanan × Kota". */
export const DIRECTORY_PAIRS: string[] = (() => {
  const pairs: string[] = [];
  const featured = SERVICES.slice(0, 16);
  const top = ["jakarta", "bandung", "surabaya", "medan", "makassar", "semarang"];
  for (const s of featured) for (const c of top) pairs.push(`${s} ${c}`);
  return pairs.slice(0, 96);
})();
