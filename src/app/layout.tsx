import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ProductIntentAnalytics } from "@/components/analytics/product-intent-analytics";
import "./globals.css";
import "./volta-flow.css";

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

const title = "VOLTA | Tu próximo paso, online.";
const description =
  "VOLTA crea productos digitales simples y profesionales para vender, mostrar tu trabajo, gestionar reservas y automatizar procesos. Conocé VOLTA Store, Portfolio y Booking y descubrí VOLTA Automate en preparación.";
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
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
        <ProductIntentAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
