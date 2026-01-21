import type { Metadata } from "next";
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
  title: "AV Edu Overseas – International Education & Visa Guidance",
  description:
    "AV Edu Overseas offers expert guidance for studying abroad, including international education programs, student visa assistance, and personalized support for your overseas education journey.",
  keywords: [
    "AV Edu Overseas",
    "study abroad",
    "international education",
    "student visa guidance",
    "overseas study consultants",
    "admissions support",
  ],
  authors: [{ name: "AV Edu Overseas" }],
  openGraph: {
    title: "AV Edu Overseas – Study Abroad & Visa Guidance",
    description:
      "Get expert guidance for international education, visa processing, and study abroad opportunities with AV Edu Overseas.",
    url: "https://chilamsettiajay04.github.io/av-edu-overseas-next-website/",
    siteName: "AV Edu Overseas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AV Edu Overseas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Edu Overseas – Study Abroad & Visa Guidance",
    description:
      "Expert study abroad guidance, visa support, and international education consulting.",
    images: ["/og-image.png"],
  },
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
