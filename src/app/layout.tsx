import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Página para listagem de produtos utilizando Next.Js e Platzi Fake Store API",
  authors: [
    { name: "Ana Karolina", url: "https://github.com/santoskarolina" },
  ],
   openGraph: {
    title: 'Fake Store | Ana Karolina',
    description: 'Teste técnico desenvolvido com Next.js',
    url: 'https://fake-store-omega-ashen.vercel.app',
    siteName: 'Fake Store',
    images: [{
      url: 'https://fake-store-omega-ashen.vercel.app/vercel-icon.png',
      width: 1200,
      height: 630,
      alt: 'Preview da loja Fake Store',
    }],
    locale: 'pt-BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<div className="h-20 bg-brand-blue" />}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
