import type { Metadata } from "next";
import { getSiteData } from "@/lib/site-data";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Kami — PT Digital Bisnis Manajemen (DIGIMAN.ID)",
  description:
    "Mengenal PT Digital Bisnis Manajemen: berdiri 26 Desember 2022, didampingi 46 dewan pakar lintas bidang, ekosistem TOP Konsultan, dan framework Grand Design by Gunara.",
  path: "/tentang-kami",
  keywords: ["tentang digiman.id", "pt digital bisnis manajemen", "gugun gunara", "top konsultan"],
});

export default async function TentangKamiPage() {
  const data = await getSiteData();
  const s = data.settings;

  const values = [
    {
      title: "Transparan sejak awal",
      desc: "Seluruh biaya tertulis di penawaran sebelum Anda setuju — tidak ada biaya siluman di tengah proses. Kami percaya kepercayaan dibangun dari kejelasan, bukan dari penawaran terendah.",
    },
    {
      title: "Garansi di tangan",
      desc: "Bila dokumen tidak terbit karena kesalahan proses kami, seluruh tahap bermasalah kami ulangi tanpa biaya tambahan ditambah kompensasi penundaan. 99,2% dokumen kami terbit sesuai jadwal.",
    },
    {
      title: "Dewan pakar lintas bidang",
      desc: "46 pakar dari hukum, perpajakan, perizinan, sertifikasi, hingga teknologi informasi — setiap persoalan ditangani orang yang benar-benar paham bidangnya, bukan perantara.",
    },
    {
      title: "Satu pintu, seluruh langit",
      desc: "Dari akta pendirian hingga website dan otomasi AI: Anda tidak perlu berpindah-pindah vendor. Satu penanggung jawab akun mengoordinasikan semuanya.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Tentang Kami", path: "/tentang-kami" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Tentang PT Digital Bisnis Manajemen",
          url: `${SITE.url}/tentang-kami`,
          mainEntity: { "@id": `${SITE.url}/#organisasi` },
        }}
      />

      <PublicNav activePath="/tentang-kami" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Tentang Kami", path: "/tentang-kami" }]} />
        </div>

        <h1 className="max-w-3xl font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Kami percaya,{" "}
          <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
            bisnis besar lahir dari fondasi yang sah.
          </span>
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-[1.85] text-white/70">
          <p>
            PT Digital Bisnis Manajemen — yang Anda kenal sebagai{" "}
            <strong className="text-white">DIGIMAN.ID</strong> — resmi berdiri{" "}
            <strong className="text-white">{s.established}</strong> melalui SK
            Kemenkumham <strong className="text-white">{s.skNumber}</strong>. Kami
            lahir dari pengamatan sederhana: terlalu banyak pebisnis Indonesia
            berhenti tumbuh bukan karena ide yang buruk, melainkan karena tersesat
            dalam labirin legalitas, perizinan, dan administrasi — sering kali
            dieksploitasi oleh perantara yang menjual ketidakjelasan.
          </p>
          <p>
            Kami membangun kebalikannya: satu pintu di mana seluruh kebutuhan
            legalitas dan digitalisasi usaha dikerjakan oleh dewan pakar yang
            benar, dengan biaya yang tertulis dari awal, dan progres yang dapat
            dipantau. Dari{" "}
            <strong className="text-white">{s.statClients.toLocaleString("id-ID")}+ badan usaha</strong>{" "}
            yang telah kami dampingi — UMKM pertama kali berdiri hingga perusahaan
            dengan modal miliaran — prinsip kerjanya tidak pernah berganti.
          </p>
          <p>
            Di balik DIGIMAN.ID berdiri ekosistem{" "}
            <strong className="text-white">TOP Konsultan (topkonsultan.com)</strong>{" "}
            yang dipimpin Pendiri & Direktur Utama{" "}
            <strong className="text-white">Gugun Gunara</strong>, dengan framework{" "}
            <strong className="text-white">Grand Design by Gunara</strong> sebagai
            metode pemetaan perjalanan bisnis klien — dari fondasi hukum hingga
            langit digital. Kepemimpinan operasional didukung{" "}
            <strong className="text-white">Muhammad Lutfi Azmi</strong> bersama tim
            dewan pakar lintas bidang.
          </p>
        </div>

        {/* Statistik */}
        <dl className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: `${s.statClients.toLocaleString("id-ID")}+`, l: "Bisnis didampingi" },
            { v: `${s.statExperts}`, l: "Dewan pakar" },
            { v: `${s.statLayers}`, l: "Lapis langit legalitas" },
            { v: `${s.statSuccess}%`, l: "Tingkat keberhasilan" },
          ].map((x) => (
            <div key={x.l} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-center">
              <dt className="sr-only">{x.l}</dt>
              <dd>
                <span className="block font-[family-name:var(--font-grotesk)] text-3xl font-bold text-[var(--gold)]">
                  {x.v}
                </span>
                <span className="mt-1 block text-xs text-white/50">{x.l}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Nilai */}
        <section aria-labelledby="values-heading" className="mt-20">
          <h2 id="values-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Empat nilai yang tidak kami tawar
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-7">
                <span className="font-[family-name:var(--font-grotesk)] text-sm font-bold text-[var(--gold)]">
                  0{i + 1}
                </span>
                <p className="mt-2 text-base font-semibold text-white">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legalitas */}
        <section aria-labelledby="legal-heading" className="mt-20">
          <h2 id="legal-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Legalitas kami — apa yang kami tuntut dari diri sendiri
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
            Jasa yang mengurusi legalitas orang lain wajib memberi contoh paling
            rapi. Seluruh dokumen resmi kami terbuka untuk diverifikasi mitra dan
            klien.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { l: "SK Kemenkumham", v: s.skNumber },
              { l: "NIB (OSS-RBA)", v: s.nibNumber },
              { l: "NPWP Badan", v: s.npwpNumber },
            ].map((x) => (
              <li key={x.l} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-wider text-white/40">{x.l}</p>
                <p className="mt-2 font-[family-name:var(--font-grotesk)] text-sm font-bold text-white">
                  {x.v}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-20">
          <WaCta
            context="kebutuhan bisnis saya"
            sub="Tim kami siap memetakan perjalanan bisnis Anda dengan framework Grand Design by Gunara — dari fondasi hukum hingga langit digital."
          />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
