import Header from "@/components/Header";
import Spacer from "@/components/spacer";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation/DesktopNavigation";

import { Inter, DM_Serif_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // If loading a variable font, you don't need to specify the font weight
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
  weight: "400",
});

import "./globals.css";
import GoatCounter from "@/components/GoatCounter";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Roth, Rotter, Laster, Ivanova",
    default:
      "Dr. Sally Roth, Dr. Sari Rotter, Dr. Susan Laster, and Dr. Magdalena Ivanova",
  },

  description: "Pediatricians in Brookline, MA",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} font-sans`}
      >
        <div className="border-t-8 border-blue-400 border-solid"></div>
        <div className="container max-w-screen-lg mx-auto p-4">
          <Header />
          <Spacer border size="large" />
          <div className="grid grid-cols-[max-content_1fr] gap-8">
            <Navigation />
            <main className="w-full">{children}</main>
          </div>
        </div>
        <Footer />
        <GoatCounter />
      </body>
    </html>
  );
}
