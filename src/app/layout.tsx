import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Las gotas de mi vaso | Cristina Alcal\u00e1-Zamora",
  description:
    "Cada gota cuenta. Marketing, IA, reflexiones y todo lo que cae en mi vaso. Por Cristina Alcal\u00e1-Zamora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${garamond.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="mx-auto max-w-2xl px-6">
          <Header />
          <main className="py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
