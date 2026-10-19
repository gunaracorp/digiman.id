import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Syarat & Ketentuan Layanan — DIGIMAN.ID",
  description:
    "Syarat dan ketentuan penggunaan layanan DIGIMAN.ID (PT Digital Bisnis Manajemen): ruang lingkup jasa, kewajiban klien, pembayaran, garansi, dan batasan tanggung jawab.",
  path: "/syarat-ketentuan",
});

const SECTIONS = [
  {
    h: "1. Definisi & Ruang Lingkup",
    p: [
      "DIGIMAN.ID adalah merek layanan PT Digital Bisnis Manajemen, badan hukum Indonesia terdaftar di Kementerian Hukum dan HAM dengan SK AHU-059566.AH.01.30.Tahun 2022. Dengan menggunakan website ini, Anda setuju pada syarat dan ketentuan berikut tanpa pengecualian.",
      "Layanan kami mencakup: pendirian badan usaha, pengurusan perizinan dan sertifikasi, layanan perpajakan dan ketenagakerjaan, penyusunan dokumen legal, serta jasa digitalisasi. Ruang lingkup spesifik setiap layanan ditetapkan dalam penawaran tertulis per klien — dokumen penawaran tersebut merupakan bagian tak terpisahkan dari syarat ini.",
    ],
  },
  {
    h: "2. Konsultasi & Penawaran",
    p: [
      "Konsultasi awal disediakan tanpa biaya dan tidak menciptakan kewajiban bagi kedua pihak. Estimasi biaya dan waktu yang disampaikan saat konsultasi bersifat indikatif; angka yang mengikat adalah yang tertulis dalam penawaran resmi.",
      "Penawaran berlaku selama 30 hari kalender sejak diterbitkan, kecuali dinyatakan lain. Perubahan regulasi pemerintah setelah penawaran disetujui dapat memengaruhi biaya pihak ketiga (notaris, resi instansi) dan akan dikomunikasikan secara transparan sebelum diteruskan.",
    ],
  },
  {
    h: "3. Kewajiban Klien",
    p: [
      "Anda wajib menyediakan dokumen dan data yang benar, lengkap, dan sah — termasuk identitas, alamat, dan kewenangan untuk bertindak atas nama pihak yang diwakilkan. Keterlambatan proses yang disebabkan kelengkapan dokumen tidak dihitung sebagai keterlambatan pengerjaan kami.",
      "Anda menjamin bahwa seluruh informasi yang diberikan tidak melanggar hukum dan tidak melibatkan kegiatan yang dilarang peraturan Indonesia. Kami berhak menolak atau menghentikan layanan bila menemukan indikasi penyelundupan identitas, pencucian uang, atau kegiatan melawan hukum lainnya.",
    ],
  },
  {
    h: "4. Pembayaran",
    p: [
      "Pembayaran dilakukan sesuai skema yang tercantum dalam penawaran (umumnya di muka penuh atau bertahap untuk paket besar). Resmi pembayaran diterbitkan setiap transaksi.",
      "Dana yang telah digunakan untuk biaya pihak ketiga (honor notaris, resi pemerintahan, layanan lab) tidak dapat dikembalikan, karena telah menjadi kewajiban kepada pihak ketiga tersebut. Kebijakan pengembalian untuk komponen jasa diatur dalam penawaran.",
    ],
  },
  {
    h: "5. Garansi & Batasan Tanggung Jawab",
    p: [
      "Garansi Terbit: bila dokumen tidak terbit karena kesalahan proses atau administrasi pihak kami, tahap yang bermasalah dikerjakan ulang tanpa biaya tambahan ditambah kompensasi sesuai ketentuan penawaran. Garansi tidak mencakup penolakan akibat data palsu klien, perubahan regulasi mendadak, atau kebijakan instansi di luar kendali kami.",
      "Kewajiban kami dibatasi maksimal pada nilai jasa yang dibayarkan klien untuk layanan terkait. Kami tidak menanggung kerugian tidak langsung seperti kehilangan keuntungan bisnis. Keseluruhan hubungan hukum ini tunduk pada hukum Republik Indonesia dan diselesaikan secara musyawarah; bila tidak tercapai, penyelesaian diajukan ke Pengadilan Negeri Tasikmalaya.",
    ],
  },
  {
    h: "6. Kekayaan Intelektual & Konten Website",
    p: [
      "Seluruh konten website ini — teks panduan, struktur layanan, tampilan, dan merek DIGIMAN.ID — dilindungi hukum kekayaan intelektual. Diperbolehkan mengutip sebagian untuk keperluan rujukan dengan atribusi dan tautan ke sumber; dilarang menyalin menyeluruh untuk kepentingan komersial tanpa izin tertulis.",
      "Konten edukatif pada website ini disusun dengan kehati-hatian namun bukan pengganti nasihat hukum individual atas kasus Anda. Keputusan bisnis dan hukum tetap sebaiknya dikonfirmasi melalui konsultasi langsung.",
    ],
  },
];

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Syarat & Ketentuan", path: "/syarat-ketentuan" }])} />

      <PublicNav activePath="/syarat-ketentuan" />

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Syarat & Ketentuan", path: "/syarat-ketentuan" }]} />
        </div>

        <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Syarat & Ketentuan
        </h1>
        <p className="mt-4 text-sm text-white/40">
          Terakhir diperbarui:{" "}
          {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((sec) => (
            <section key={sec.h}>
              <h2 className="font-[family-name:var(--font-grotesk)] text-xl font-bold text-white">
                {sec.h}
              </h2>
              {sec.p.map((par, i) => (
                <p key={i} className="mt-3 text-[15px] leading-[1.85] text-white/65">
                  {par}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-14 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/55">
          Pertanyaan tentang syarat ini? Hubungi{" "}
          <a href={`mailto:${SITE.email}`} className="text-[var(--gold)] hover:underline">
            {SITE.email}
          </a>{" "}
          — kami jelaskan dalam bahasa yang jelas, bukan dalam labirin klausul.
        </p>
      </main>

      <PublicFooter />
    </div>
  );
}
