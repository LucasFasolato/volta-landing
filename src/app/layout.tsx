import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ProductIntentAnalytics } from "@/components/analytics/product-intent-analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "VOLTA | Tu próximo paso, online.";
const description =
  "Productos digitales simples y profesionales para vender, recibir reservas, mostrar tu trabajo y automatizar procesos. Conocé VOLTA Store, Booking y Portfolio; Automate está en preparación.";
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
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <ProductIntentAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
