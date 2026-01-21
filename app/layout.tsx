import type { Metadata } from "next";
import { siteContent } from "./constants/siteContent";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

import Navbar from "./Navbar/page";
import CTA from "./CTA/page";
import Footer from "./Footer/page";
import Home from "./Home/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  authors: [{ name: siteContent.global.brandName }],
  openGraph: siteContent.seo.openGraph,
  twitter: siteContent.seo.twitter as Metadata["twitter"],
};

/* ---------------- VIEWPORT (CRITICAL) ---------------- */

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color-background`}
      >
        {/* App Wrapper */}
        <div className="min-h-[100dvh] flex flex-col overflow-x-hidden">
          {/* Navbar */}
          <Navbar />
          <Home />

          {/* Main Content */}
          <main className="flex-1 w-full max-w-[1400px] mx-auto">
            {children}
          </main>

          {/* CTA & Footer */}
          <CTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
