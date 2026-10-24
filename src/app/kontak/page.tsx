import type { Metadata } from "next";
import { getSiteData } from "@/lib/site-data";
import { buildMetadata, JsonLd, breadcrumbLd, SITE, waLink } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import ContactForm from "@/components/digiman/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Kontak & Kantor DIGIMAN.ID — Hubungi Dewan Pakar Kami",
  description:
    "Hubungi DIGIMAN.ID: WhatsApp +62 813-1651-6524, email halo@digiman.id, kantor pusat Tasikmalaya, cabang Bandung & Sukarame, representative office Jakarta SCBD. Balasan di bawah 1×24 jam.",
  path: "/kontak",
  keywords: ["kontak digiman.id", "alamat kantor digiman", "konsultasi legalitas gratis"],
});

export default async function KontakPage() {
  const data = await getSiteData();
  const s = data.settings;

  const typeLabel: Record<string, string> = {
    HEAD: "Head Office",
    BRANCH: "Branch Office",
    REP: "Representative Office",
  };

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd
        data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Kontak", path: "/kontak" }])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE.url}/kontak`,
          mainEntity: {
            "@type": "ProfessionalService",
            name: SITE.company,
            telephone: `+${s.waNumber}`,
            email: s.email,
            openingHours: s.hours,
            address: {
              "@type": "PostalAddress",
              streetAddress: s.addressFull,
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              telephone: `+${s.waNumber}`,
              availableLanguage: ["id", "Indonesian"],
            },
          },
        }}
      />

      <PublicNav activePath="/kontak" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Kontak", path: "/kontak" }]} />
        </div>

        <h1 className="max-w-3xl font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Satu pesan,{" "}
          <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
            dewan pakar yang tepat.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
          Ceritakan kebutuhan Anda melalui WhatsApp, form, atau datang langsung
          ke kantor terdekat. Konsultasi awal selalu gratis — dalam 1×24 jam
          Anda terhubung dengan pakar bidang Anda.
        </p>

        {/* Kanal utama */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <a
            href={waLink(s.waNumber, "Halo DIGIMAN.ID, saya ingin konsultasi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-7 transition-colors hover:border-emerald-500/50"
          >
            <p className="text-xs uppercase tracking-wider text-emerald-400">WhatsApp — tercepat</p>
            <p className="mt-2 font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
              {s.waDisplay}
            </p>
            <p className="mt-1 text-xs text-white/40">Respon rata-rata di bawah 1 jam kerja</p>
          </a>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7">
            <p className="text-xs uppercase tracking-wider text-white/40">Email</p>
            <p className="mt-2 font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
              {s.email}
            </p>
            <p className="mt-1 text-xs text-white/40">Untuk dokumen & penawaran resmi</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7">
            <p className="text-xs uppercase tracking-wider text-white/40">Jam operasional</p>
            <p className="mt-2 font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
              {s.hours}
            </p>
            <p className="mt-1 text-xs text-white/40">WhatsApp berjalan lebih lama</p>
          </div>
        </div>

        {/* Kantor */}
        <section aria-labelledby="offices-heading" className="mt-16">
          <h2 id="offices-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Jaringan kantor kami
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Lima titik layanan — dan layanan penuh daring untuk klien di seluruh Indonesia.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.offices.map((o) => (
              <li key={o.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">
                  {typeLabel[o.type] ?? o.type}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{o.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{o.address}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Form */}
        {s.contactFormEnabled && (
          <section aria-labelledby="form-heading" className="mt-16">
            <h2 id="form-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
              Atau isi formulir ini
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Sampaikan kebutuhan Anda — pesan masuk ke panel kami dan tim yang tepat akan menghubungi Anda.
            </p>
            <div className="mt-8 max-w-2xl rounded-2xl border border-white/8 bg-white/[0.03] p-8">
              <ContactForm services={data.services.map((x) => x.title)} />
            </div>
          </section>
        )}
      </main>

      <PublicFooter />
    </div>
  );
}
