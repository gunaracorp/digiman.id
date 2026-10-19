import type { Metadata } from "next";
import { getSiteData } from "@/lib/site-data";
import { buildMetadata, JsonLd, breadcrumbLd, SITE, waLink } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Paket & Harga Legalitas Bisnis — Transparan Sejak Awal | DIGIMAN.ID",
  description:
    "Empat paket legalitas & digitalisasi: Paket Berdiri (Rp 850rb), Paket Tumbuh (Rp 3,5jt), Paket Terbang (Rp 7,5jt), dan Paket 7 Lapis Langit (PMA & Enterprise). Tanpa biaya tersembunyi.",
  path: "/paket-harga",
  keywords: ["paket pendirian pt harga", "biaya pendirian pt", "harga jasa legalitas usaha"],
});

const PAKET = [
  {
    name: "Paket Berdiri",
    price: "Rp 850 rb",
    for: "Freelancer, kreator & pebisnis solo",
    desc: "Legalitas resmi tanpa akta notaris — PT Perorangan via OSS, terbit dalam hitungan hari.",
    items: [
      "PT Perorangan (UUCK) resmi",
      "NIB sebagai legalitas pasti",
      "Pemetaan KBLI optimal",
      "Panduan kewajiban pajak dasar",
    ],
    highlight: false,
  },
  {
    name: "Paket Tumbuh",
    price: "Rp 3,5 jt",
    for: "UMKM & bisnis yang siap naik kelas",
    desc: "PT lengkap berbadan hukum: akta notaris, SK Kemenkumham, NPWP badan, dan NIB — siap kredit & tender.",
    items: [
      "Akta notaris + SK Kemenkumham",
      "NPWP badan & NIB otomatis",
      "Domisili usaha",
      "Konsultasi KBLI gratis",
      "Orientasi kewajiban rutin",
    ],
    highlight: true,
  },
  {
    name: "Paket Terbang",
    price: "Rp 7,5 jt",
    for: "Bisnis yang bangun brand & digital",
    desc: "PT + merek + website: fondasi hukum dan aset digital dalam satu paket — langit ke-7 Digiman.",
    items: [
      "Semua isi Paket Tumbuh",
      "Pendaftaran merek ke DJKI",
      "Website company profile premium",
      "SEO & Google Business Profile",
      "Email bisnis & domain",
    ],
    highlight: false,
  },
  {
    name: "Paket 7 Lapis Langit",
    price: "Mulai Rp 15 jt",
    for: "PMA, ekspansi & enterprise",
    desc: "PT PMA, perizinan sektor, sertifikasi, hingga sistem internal — dirancang lewat Grand Design by Gunara.",
    items: [
      "Pendirian PT PMA / ekspansi",
      "Perizinan sektor lengkap",
      "Sertifikasi (Halal/BPOM/SNI/ISO)",
      "Struktur pajak & kepatuhan",
      "Aplikasi & otomasi AI",
      "Dewan pakar khusus akun",
    ],
    highlight: false,
  },
];

export default async function PaketHargaPage() {
  const data = await getSiteData();
  const s = data.settings;

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Paket & Harga", path: "/paket-harga" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Paket Legalitas & Digitalisasi DIGIMAN.ID",
          itemListElement: PAKET.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Offer",
              name: `${p.name} — DIGIMAN.ID`,
              priceCurrency: "IDR",
              description: p.desc,
              url: `${SITE.url}/paket-harga`,
            },
          })),
        }}
      />

      <PublicNav activePath="/paket-harga" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Paket & Harga", path: "/paket-harga" }]} />
        </div>

        <h1 className="max-w-3xl font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Harga yang tertulis,{" "}
          <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
            bukan yang dikira-kira.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
          Seluruh biaya — honor notaris, resi pemerintahan, dan jasa kami —
          tertulis jelas sebelum Anda setuju. Tidak ada biaya siluman; jika ada
          kebutuhan di luar scope, kami konfirmasi dulu.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PAKET.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.highlight
                  ? "border-[var(--gold)]/50 bg-gradient-to-b from-[var(--gold)]/[0.10] to-transparent shadow-xl shadow-amber-500/10"
                  : "border-white/8 bg-white/[0.03]"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a1206]">
                  Paling dipilih
                </span>
              )}
              <p className="font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
                {p.name}
              </p>
              <p className="mt-1 text-xs text-white/45">{p.for}</p>
              <p className="mt-4 font-[family-name:var(--font-grotesk)] text-3xl font-bold text-[var(--gold)]">
                {p.price}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/55">{p.desc}</p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-white/5 pt-5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/65">
                    <svg aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(s.waNumber, `Halo DIGIMAN.ID, saya tertarik dengan ${p.name} (${p.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 rounded-full py-3 text-center text-sm font-bold transition-transform hover:scale-[1.02] active:scale-95 ${
                  p.highlight
                    ? "bg-[var(--gold)] text-[#1a1206] shadow-lg shadow-amber-500/25"
                    : "border border-white/15 text-white hover:border-white/30"
                }`}
              >
                Ambil paket ini
              </a>
            </div>
          ))}
        </div>

        {/* Klarifikasi harga */}
        <section aria-labelledby="price-note-heading" className="mt-16 rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-10">
          <h2 id="price-note-heading" className="font-[family-name:var(--font-grotesk)] text-xl font-bold">
            Kenapa harga kami "mulai dari"?
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-[1.85] text-white/60">
            <p>
              Karena kejujuran lebih penting daripada angka yang manis. Biaya
              akhir menyesuaikan tiga hal: jumlah pendiri & pemegang saham,
              jumlah KBLI yang diperlukan, dan izin sektor yang menyusul.
              Perusahaan dengan 2 pendiri dan 5 KBLI memang berbeda biayanya
              dengan perusahaan 4 pendiri 15 KBLI — kami tidak melekatkan harga
              seragam lalu memotong layanan.
            </p>
            <p>
              Yang kami jamin: penawaran tertulis lengkap <em>sebelum</em> Anda
              setuju, semua komponen dijabarkan (honor notaris, resi
              pemerintahan, jasa), dan tidak ada satu rupiah pun diminta di luar
              penawaran itu. Inilah standar yang membuat kami
              di-referensikan pelanggan kepada rekan bisnisnya.
            </p>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
