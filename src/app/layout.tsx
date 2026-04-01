import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const title = "VOLTA | WhatsApp convertido en sistema operativo para tu negocio";
const description =
  "VOLTA conecta soluciones sobre WhatsApp para atender, vender, gestionar turnos, pedidos, comprobantes y operacion con mas orden.";
const socialImage = "/voltaLOGO.png";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

const metadataBase = new URL(
  siteUrl
    ? siteUrl.startsWith("http")
      ? siteUrl
      : `https://${siteUrl}`
    : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "VOLTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="min-h-screen bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
