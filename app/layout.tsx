import type { Metadata } from "next";
import { siteContent } from "./constants/siteContent";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

import OfflineStatus from "./components/OfflineStatus";

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
  metadataBase: siteContent.seo.metadataBase,
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
        <OfflineStatus />
        {/* App Wrapper */}
        <div className="min-h-[100dvh] flex flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
