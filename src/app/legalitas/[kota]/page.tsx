import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSiteData } from "@/lib/site-data";
import { CITY_SLUGS, getCity, getNeighborCities, type CityProfile } from "@/lib/cities";
import { buildMetadata, JsonLd, breadcrumbLd, faqPageLd, waLink } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";

/**
 * PROGRAMMATIC SEO — Halaman kota /legalitas/[kota].
 * 65 halaman lokal dengan konten unik per kota (potret ekonomi, arah KBLI,
 * FAQ lokal, jaringan internal-link antar kota). Bukan doorway page:
 * setiap halaman menjawab kebutuhan nyata pencari lokal di kota tersebut.
 * Semua server-rendered statis — nol JS klien, sangat cepat diindeks.
 */

export const revalidate = 86400; // segarkan sekali sehari — konten kota stabil

export function generateStaticParams() {
  return CITY_SLUGS.map((kota) => ({ kota }));
}

/* ── Arah KBLI dari sektor ekonomi kota (pemetaan nyata, bukan acak) ── */
const KBLI_HINTS: [RegExp, string][] = [
  [/manufaktur|industri|garmen|elektronik|fabrikasi|olahan|pengolahan/i, "Industri Pengolahan (KBLI 10–32) — sertifikat standar via OSS, kesiapan halal & SNI bila masuk ritel"],
  [/pariwisata|hospitality|wisata|homestay|kuliner|f&b/i, "Akomodasi & Makanan-Minuman (KBLI 55–56) — PIRT/halal untuk produk, izin Pariwisata untuk usaha jalan wisata"],
  [/perikanan|laut|nelayan/i, "Perikanan Tangkap & Budi Daya (KBLI 03) — plus pengolahan (KBLI 10) untuk ekspor hasil laut"],
  [/sawit|perkebunan|karet|tembakau|jagung|kopi|lada|cengkeh|pala|apel|sayur|hortikultura|pertanian|agro/i, "Perkebunan & Hortikultura (KBLI 01) — pertimbangan pengolahan nilai tambah (KBLI 10) agar margin naik"],
  [/migas|energi|batubara|nikel|tambang/i, "Jasa Penunjang Pertambangan Migas & Minerba (KBLI 09–07) — kualifikasi tender menuntut PT dengan struktur bersih"],
  [/logistik|pelabuhan|gudang|ekspedisi|distribusi/i, "Pengangkutan & Pergudangan (KBLI 49–53) — NIB ekspor-impor bila menyentuh lintas batas"],
  [/kreatif|digital|teknologi|startup|it\b|software/i, "Jasa Informasi & Komputer (KBLI 62–63) — mudah didirikan, ramah pendanaan modal Ventura"],
  [/properti|konstruksi|kontraktor/i, "Konstruksi Gedung & Jasa Penunjang (KBLI 41–43) — sertifikat standar sektor menyesuaikan kualifikasi"],
  [/pendidikan|kampus|universitas|sekolah|kursus/i, "Pendidikan Nonformal (KBLI 85) — paling ringan untuk lembaga kursus & bimbingan"],
  [/perdagangan|ritel|trading|pasar/i, "Perdagangan Besar & Eceran (KBLI 46–47) — tulang punggung mayoritas UMKM Indonesia"],
  [/kesehatan|klinik/i, "Kegiatan Kesehatan Manusia (KBLI 86) — izin Dinkes + standar sarana ditambahkan"],
];

function kbliHintsFor(city: CityProfile): string[] {
  const hits = KBLI_HINTS.filter(([re]) => city.economy.some((e) => re.test(e))).map(([, hint]) => hint);
  if (hits.length === 0) {
    hits.push("Perdagangan Umum (KBLI 46) & Jasa Pendukung — mulai dari yang paling sesuai kegiatan sehari-hari usaha Anda");
  }
  return hits.slice(0, 3);
}

/* ── Pemilih layanan deterministik: 3 inti + 3 berotasi per kota (slug = DB riil) ── */
const CORE_SLUGS = ["pendirian-pt", "nib-oss", "pendaftaran-merek"];
const ROTATION = [
  "pt-pma", "pendirian-cv", "pt-perorangan",
  "sertifikasi-halal", "website-ecommerce", "npwp-pkp",
  "bpom", "sni", "pendirian-yayasan",
  "bpjs", "virtual-office", "iso",
];

function pickServices(slug: string, all: { slug: string | null; title: string; price: string; desc: string }[]) {
  const bySlug = new Map(all.filter((s) => s.slug).map((s) => [s.slug as string, s]));
  const idx = slug.length % ROTATION.length;
  const wanted = [...CORE_SLUGS, ROTATION[idx], ROTATION[(idx + 1) % ROTATION.length], ROTATION[(idx + 2) % ROTATION.length]];
  return wanted.map((s) => bySlug.get(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
}

/* ── FAQ lokal — rotasi deterministik, selalu menyebut fakta kota ── */
function cityFaqs(city: CityProfile, idx: number): { q: string; a: string }[] {
  const variant = idx % 3;
  const all = [
    {
      q: `Apakah bisa mendirikan PT di ${city.name} tanpa datang ke kantor?`,
      a: `Bisa — 100% proses daring. Akta ditandatangani dengan tanda tangan elektronik tersertifikasi (TTE) yang sah di mata Kemenkumham, SK keluar secara elektronik, dan dokumen asli kami kirim via kurir ke alamat Anda di ${city.name}. Anda tidak perlu keluar rumah sekalipun; bila ingin bertemu, tim ${city.hub} kami siap menerima kunjungan terjadwal.`,
    },
    {
      q: `Berapa biaya pendirian PT di ${city.name}?`,
      a: `Pendirian PT dimulai dari Rp 3,5 juta — sudah termasuk akta notaris, pengesahan SK Kemenkumham, NPWP badan, dan NIB via OSS. Untuk kebutuhan lebih ringan, PT Perorangan (UUCK) mulai Rp 850 ribu tanpa notaris. Semua pos biaya kami tuliskan sejak penawaran awal — tanpa biaya siluman, dan garansi perbaikan bila ada tahap gagal karena proses kami.`,
    },
    {
      q: `Berapa lama proses legalitas untuk usaha di ${city.name}?`,
      a: `Pendirian PT umumnya tuntas 3–7 hari kerja sejak dokumen lengkap; NIB OSS bahkan bisa terbit di hari yang sama. Untuk usaha sektor ${city.economy[0]} di ${city.name}, izin lanjutan (halal, BPOM, atau izin sektor tertentu) kami petakan jadwalnya sejak konsultasi awal agar rencana operasional Anda tidak terganggu.`,
    },
    {
      q: `KBLI apa yang cocok untuk bisnis ${city.economy[0]} di ${city.name}?`,
      a: `${kbliHintsFor(city)[0]}. Pemetaan KBLI yang tepat sejak awal menentukan izin apa yang bisa Anda urus dan insentif apa yang bisa didapat — tim kami memetakannya gratis di sesi konsultasi, khusus untuk kondisi usaha Anda di ${city.name}, ${city.province}.`,
    },
    {
      q: `Apakah DIGIMAN.ID punya kantor di ${city.name}?`,
      a: `Layanan kami menjangkau seluruh Indonesia sepenuhnya daring, dengan dukungan terdekat dari ${city.hub}. Klien di ${city.name} mendapatkan penanggung jawab akun yang sama rapinya dengan klien yang datang langsung — progres terpantau, komunikasi via WhatsApp, dokumen fisik dikirim resmi.`,
    },
  ];
  return all.filter((_, i) => (i === 4 ? variant === 0 : true)).slice(0, 4);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kota: string }>;
}): Promise<Metadata> {
  const { kota } = await params;
  const city = getCity(kota);
  if (!city) return {};

  const title = `Pendirian PT & Legalitas Usaha di ${city.name} — Biaya & Syarat | DIGIMAN.ID`;
  const description = `Jasa pendirian PT, CV & perizinan usaha di ${city.name}, ${city.province}: akta notaris, NIB OSS-RBA, merek, hingga sertifikasi. 100% online, transparan, garansi di tangan.`;

  return buildMetadata({
    title,
    description,
    path: `/legalitas/${city.slug}`,
    keywords: [
      `jasa pendirian pt di ${city.name.toLowerCase()}`,
      `biaya pendirian pt ${city.name.toLowerCase()}`,
      `pendirian cv ${city.name.toLowerCase()}`,
      `jasa legalitas usaha ${city.name.toLowerCase()}`,
      `izin usaha ${city.name.toLowerCase()}`,
      `nib oss ${city.name.toLowerCase()}`,
      `jasa pengurusan izin ${city.province.toLowerCase()}`,
      `konsultan legalitas ${city.name.toLowerCase()}`,
      "digiman.id",
    ],
  });
}

export default async function KotaPage({
  params,
}: {
  params: Promise<{ kota: string }>;
}) {
  const { kota } = await params;
  const city = getCity(kota);
  if (!city) notFound();

  const data = await getSiteData();
  const services = pickServices(city.slug, data.services);
  const neighbors = getNeighborCities(city.slug);
  const idx = CITY_SLUGS.indexOf(city.slug);
  const faqs = cityFaqs(city, idx);
  const kbli = kbliHintsFor(city);

  const waHref = waLink(
    data.settings.waNumber,
    `Halo DIGIMAN.ID, saya dari ${city.name} dan ingin konsultasi legalitas usaha.`
  );

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/layanan" },
    { name: `Legalitas di ${city.name}`, path: `/legalitas/${city.slug}` },
  ];

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      {/* ── Struktur data: Service lokal + FAQPage + Breadcrumb ── */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE.url}/legalitas/${city.slug}#layanan-kota`,
          name: `Jasa Legalitas & Pendirian Badan Usaha di ${city.name}`,
          description: `Pendirian PT, CV, PT PMA, NIB OSS-RBA, pendaftaran merek, dan sertifikasi untuk pelaku usaha di ${city.name}, ${city.province}.`,
          url: `${SITE.url}/legalitas/${city.slug}`,
          serviceType: "Jasa legalitas bisnis",
          category: "Pendirian Badan Usaha & Perizinan",
          inLanguage: "id-ID",
          isPartOf: { "@id": `${SITE.url}/#website` },
          provider: {
            "@type": "Organization",
            "@id": `${SITE.url}/#organisasi`,
            name: SITE.company,
            url: SITE.url,
          },
          areaServed: [
            { "@type": "City", name: city.name },
            { "@type": "AdministrativeArea", name: city.province },
            { "@type": "Country", name: "Indonesia" },
          ],
          offers: {
            "@type": "Offer",
            url: `${SITE.url}/legalitas/${city.slug}`,
            priceCurrency: "IDR",
            price: "3500000",
            availability: "https://schema.org/InStock",
            seller: { "@id": `${SITE.url}/#organisasi` },
          },
        }}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={breadcrumbLd(crumbs)} />

      <PublicNav activePath="/layanan" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={crumbs} />
        </div>

        {/* ── HERO KOTA ── */}
        <header className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {city.province} · {city.island}
          </p>
          <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-grotesk)] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Jasa pendirian PT &amp; legalitas usaha di{" "}
            <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
              {city.name}
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/65">
            {city.hook} Semua diproses 100% daring oleh 46 dewan pakar lintas bidang —
            akta notaris, NIB OSS-RBA, merek, hingga sertifikasi — dengan harga
            transparan dan garansi di tangan.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-[#04120c] shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.02] active:scale-95"
            >
              Konsultasi gratis — balasan &lt; 1×24 jam
            </a>
            <Link
              href="/paket-harga"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition-colors hover:border-[var(--gold)]/50 hover:text-white"
            >
              Lihat paket &amp; harga →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45">
            <span>✔ Garansi terbit</span>
            <span>✔ Tanpa biaya siluman</span>
            <span>✔ Progres terpantau</span>
            <span>✔ Pelayanan dari {city.hub}</span>
          </div>
        </header>

        {/* ── POTRET EKONOMI KOTA (konten unik per kota) ── */}
        <section aria-labelledby="econ-heading" className="mt-20">
          <h2 id="econ-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Potret bisnis {city.name}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4 text-[15px] leading-[1.85] text-white/70">
              <p>
                {city.hook} Pengusaha di {city.name} bergerak di sektor{" "}
                {city.economy.slice(0, 3).join(", ")} — dan setiap sektor menuntut
                kombinasi legalitas yang berbeda: mulai dari bentuk badan usaha,
                pemetaan KBLI, hingga sertifikasi yang menjadi syarat masuk pasar.
              </p>
              <p>
                DIGIMAN.ID melayani pelaku usaha {city.name} secara penuh daring:
                konsultasi via WhatsApp, dokumen melalui tanda tangan elektronik
                tersertifikasi, dan penyerahan dokumen asli via kurir resmi ke
                seluruh wilayah {city.province}. Ratusan pemilik usaha di {city.island}
                {" "}telah kami antar dari nol sampai badan usaha resmi yang siap
                menerima kontrak, mengajukan pinjaman modal kerja, dan menembus
                pasar yang lebih besar.
              </p>
              <p>
                Yang membedakan layanan kami: seluruh pekerjaan dilakukan dewan
                pakar yang benar-benar paham bidangnya — notaris, konsultan pajak,
                ahli sertifikasi — bukan perantara. Bila ada tahap yang gagal karena
                proses kami, kami ulangi tanpa biaya tambahan. Itulah yang kami
                sebut <strong className="text-white">garansi di tangan</strong>.
              </p>
            </div>
            <aside className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Sektor penggerak {city.name}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {city.economy.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/50">
                Arah KBLI yang umum di sini
              </p>
              <ul className="mt-3 space-y-3">
                {kbli.map((k) => (
                  <li key={k} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/60">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    {k}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ── LAYANAN UNTUK KOTA INI ── */}
        <section aria-labelledby="svc-heading" className="mt-20">
          <h2 id="svc-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Layanan paling dibutuhkan di {city.name}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
            Kombinasi layanan yang paling sering kami kerjakan untuk pelaku usaha{" "}
            {city.name} — harga mulai, proses 100% online.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/layanan/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:bg-white/[0.05]"
              >
                <p className="text-sm font-semibold text-white group-hover:text-[var(--gold)]">{s.title}</p>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-white/50">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs font-semibold text-[var(--gold)]">{s.price}</span>
                  <span className="text-xs text-white/40 transition-transform group-hover:translate-x-0.5">
                    Detail →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ KOTA ── */}
        <section aria-labelledby="faq-heading" className="mt-20">
          <h2 id="faq-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Pertanyaan pelaku usaha {city.name}
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] open:border-[var(--gold)]/30 open:bg-white/[0.05]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-[var(--gold)] transition-transform group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-[1.8] text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── JARINGAN KOTA SEKITAR (internal link mesh) ── */}
        {neighbors.length > 0 && (
          <nav aria-labelledby="city-heading" className="mt-20">
            <h2 id="city-heading" className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Juga melayani kota sekitar
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {neighbors.map((n) => (
                <Link
                  key={n.slug}
                  href={`/legalitas/${n.slug}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-colors hover:border-[var(--gold)]/50 hover:text-white"
                >
                  Legalitas {n.name}
                </Link>
              ))}
            </div>
          </nav>
        )}

        <div className="mt-20">
          <WaCta context={`legalitas usaha di ${city.name}`} />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
