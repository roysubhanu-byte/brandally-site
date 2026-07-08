import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Tracking from "@/components/Tracking";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "BrandAlly — Tools, Tech & Strategy to Power Your Growth",
    template: "%s | BrandAlly",
  },
  description:
    "BrandAlly runs paid media and demand gen for USA-based D2C brands, B2B firms, and agencies. Meta, Google, LinkedIn, and TikTok ads that pay you back.",
  keywords: ["paid media agency", "demand generation", "B2B marketing", "US agencies", "D2C brands", "growth consulting"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrandAlly",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-ink text-white min-h-screen flex flex-col antialiased`}
      >
        <Tracking />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
