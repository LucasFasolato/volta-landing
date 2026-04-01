import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "VOLTA | WhatsApp Sales Automation",
  description: "Convertí tu WhatsApp en un sistema de ventas automático.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} dark`}>
      <body className="bg-background text-on-surface min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}