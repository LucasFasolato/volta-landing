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

export const metadata: Metadata = {
  title: "VOLTA | WhatsApp convertido en infraestructura comercial",
  description:
    "VOLTA convierte WhatsApp en una capa operativa que responde, ordena y ejecuta acciones para vender mas con menos carga manual.",
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
