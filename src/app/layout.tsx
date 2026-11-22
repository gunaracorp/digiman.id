import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { MotionProvider } from "@/components/digiman/motion/providers";
import { ORG } from "@/content/holding";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ORG.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DIGIMAN.ID — Holding Digital Indonesia | Kaji Dulu, Baru Bangun",
    template: "%s — DIGIMAN.ID",
  },
  description: ORG.description,
  keywords: [
    "DIGIMAN",
    "digital holding",
    "holding digital Indonesia",
    "konsultan transformasi digital",
    "jasa pembuatan website",
    "konsultan manajemen & SOP",
    "riset bisnis & studi kelayakan",
    "otomasi AI",
    "pendirian PT",
    "venture building",
  ],
  authors: [{ name: "DIGIMAN.ID", url: siteUrl }],
  creator: "DIGIMAN.ID",
  publisher: "DIGIMAN.ID",
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "DIGIMAN.ID",
    title: "DIGIMAN.ID — Holding Digital Indonesia | Kaji Dulu, Baru Bangun",
    description: ORG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGIMAN.ID — Holding Digital Indonesia | Kaji Dulu, Baru Bangun",
    description: ORG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/digiman-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-foreground`}
      >
        <MotionProvider>{children}</MotionProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
