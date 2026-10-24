import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbLd, SITE } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Kebijakan Privasi — DIGIMAN.ID",
  description:
    "Kebijakan privasi DIGIMAN.ID (PT Digital Bisnis Manajemen): data apa yang kami kumpulkan, bagaimana digunakan, keamanan, kerahasiaan dokumen klien, dan hak Anda. Sesuai UU PDP Indonesia.",
  path: "/kebijakan-privasi",
});

const SECTIONS = [
  {
    h: "1. Data yang Kami Kumpulkan",
    p: [
      "Saat Anda menghubungi kami (form konsultasi, WhatsApp, email), kami mengumpulkan: nama, nomor kontak, email, dan ringkasan kebutuhan Anda. Saat layanan berjalan, kami memproses dokumen kependudukan dan perusahaan yang Anda berikan — hanya sebatas yang diperlukan untuk menyelesaikan layanan.",
      "Website ini tidak memasang pelacak iklan pihak ketiga secara default. Data kunjungan halaman dicatat secara agregat (tanpa identitas) untuk keperluan statistik internal perbaikan layanan.",
    ],
  },
  {
    h: "2. Penggunaan & Kerahasiaan Dokumen Klien",
    p: [
      "Data dan dokumen Anda digunakan semata-mata untuk: menyelesaikan layanan yang Anda pesan, berkomunikasi terkait progres, dan kewajiban administratif kepada instansi resmi. Kami tidak menjual, menyewakan, atau membagikan data Anda kepada pihak ketiga untuk pemasaran.",
      "Dokumen hukum dan keuangan klien diperlakukan sebagai kerahasiaan profesi: akses dibatasi pada tim yang menangani layanan Anda, penyimpanan digital dilindungi, dan non-disclosure agreement tersedia atas permintaan. Dokumen fisik disimpan di kantor dengan pengawasan yang layak dan dikembalikan/dimusnahkan atas permintaan setelah layanan selesai.",
    ],
  },
  {
    h: "3. Pemrosesan oleh Pihak Ketiga Fungsional",
    p: [
      "Untuk menyelesaikan layanan, sebagian data wajib diteruskan ke pihak yang berwenang: notaris, Kemenkumham, OSS/DJP, instansi sertifikasi, dan kurir untuk pengiriman dokumen. Penerusan ini dilakukan berdasar kebutuhan layanan dan ketentuan hukum — bukan untuk kepentingan komersial.",
      "Kami memilih penyedia layanan pendukung (hosting, email, penyimpanan) yang menerapkan standar keamanan memadai dan terikat kewajiban kerahasiaan.",
    ],
  },
  {
    h: "4. Hak Anda",
    p: [
      "Sesuai Undang-Undang Perlindungan Data Pribadi (UU No. 27 Tahun 2022), Anda berhak: meminta akses atas data pribadi Anda yang kami pegang, meminta perbaikan data yang tidak akurat, meminta penghapusan sepanjang tidak bertentangan dengan kewajiban hukum (misalnya arsip perpajakan), dan menarik persetujuan pemrosesan non-esensial.",
      "Permintaan dapat dikirim ke kontak di bawah; kami menanggapi maksimal 14 hari kerja.",
    ],
  },
  {
    h: "5. Keamanan & Retensi",
    p: [
      "Kami menerapkan langkah teknis dan organisatoris yang wajar: akses berbasis peran, enkripsi pada salinan digital sensitif, dan pembatasan perangkat yang menangani dokumen klien. Tidak ada sistem yang 100% kebal; bila terjadi insiden data yang berdampak, kami memberitahu pihak terdampak sesuai ketentuan UU PDP.",
      "Data klien disimpan selama diperlukan untuk layanan berjalan plus masa retensi yang dituntut hukum Indonesia (misalnya arsip pajak 10 tahun). Setelah itu, data dihapus atau dianonimkan secara aman.",
    ],
  },
  {
    h: "6. Perubahan Kebijakan",
    p: [
      "Kebijakan ini dapat diperbarui mengikuti perkembangan regulasi dan layanan. Versi terbaru selalu tersedia di halaman ini dengan tanggal pembaruan. Perubahan material yang memengaruhi hak Anda akan dikomunikasikan secara langsung bila Anda adalah klien aktif.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "Kebijakan Privasi", path: "/kebijakan-privasi" }])} />

      <PublicNav activePath="/kebijakan-privasi" />

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "Kebijakan Privasi", path: "/kebijakan-privasi" }]} />
        </div>

        <h1 className="font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Kebijakan Privasi
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
          Untuk hak privasi Anda: hubungi{" "}
          <a href={`mailto:${SITE.email}`} className="text-[var(--gold)] hover:underline">
            {SITE.email}
          </a>{" "}
          — permintaan Anda ditangani manusia yang paham konteksnya, bukan ticket
          bot.
        </p>
      </main>

      <PublicFooter />
    </div>
  );
}
