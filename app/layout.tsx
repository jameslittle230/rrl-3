import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation/DesktopNavigation";

import { DM_Serif_Display, DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";
import GoatCounter from "@/components/GoatCounter";
import { Metadata, Viewport } from "next";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://washingtonsquarepediatrics.com'),
  alternates: { canonical: "/" },
  title: {
    template: "%s | Washington Square Pediatrics",
    default: "Drs. Sally Roth, Susan Laster, and Cara Guenther",
  },
  description: "Pediatricians in Brookline, MA",
};

export const viewport: Viewport = {
  themeColor: "#1f2937",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} font-sans`}
      >
        <div className="container max-w-screen-lg mx-auto p-4 bg-">
          <Header className="mb-4 md:mb-8" />
          <div className="block md:grid grid-cols-[max-content_1fr] gap-8">
            <Navigation />
            <main className="w-full" id="content">{children}</main>
          </div>
        </div>
        <Footer />
        <MobileNavigation />
        <GoatCounter />
      </body>
    </html>
  );
}
