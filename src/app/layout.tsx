import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ProductIntentAnalytics } from "@/components/analytics/product-intent-analytics";
import { siteDescription, siteTitle, siteUrl } from "@/data/site";
import "./globals.css";
import "./corporate-sections.css";
import "./corporate-responsive.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "VOLTA",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "VOLTA",
    type: "website",
    locale: "es_AR",
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#f7f9f8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={instrumentSans.variable}>
      <body>
        {children}
        <ProductIntentAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
