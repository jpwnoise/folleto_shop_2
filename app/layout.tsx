import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Novillero Pescadería - Mariscos y Pescados Frescos a Domicilio",
  description:
    "Mariscos y pescados frescos con servicio a domicilio gratis. Camarón, tilapia, salmón, atún y más. Tel: 331-326-2108",
  openGraph: {
    title: "Novillero Pescadería",
    description: "Mariscos y pescados frescos con servicio a domicilio gratis",
    url: "https://folletoshop.vercel.app/",
    siteName: "Novillero Pescadería",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen font-[var(--font-poppins)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
