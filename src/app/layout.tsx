import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOLTA | Automatizá tu WhatsApp y vendé en automático",
  description:
    "VOLTA convierte WhatsApp en un sistema de ventas que responde, organiza y guía a tus clientes sin intervención constante.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} dark`}>
      <body className="min-h-screen bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}