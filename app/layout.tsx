import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BrandAlly — Tools, Tech & Strategy to Power Your Growth",
    template: "%s | BrandAlly",
  },
  description:
    "BrandAlly helps USA-based agencies, D2C brands, and founders scale with smarter tools, better research, and clear growth systems.",
  keywords: ["SaaS marketing", "growth consulting", "US agencies", "D2C brands", "marketing tools"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrandAlly",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
