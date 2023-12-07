import Header from "@/components/Header";
import Spacer from "@/components/Spacer2";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation/DesktopNavigation";

import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import GoatCounter from "@/components/GoatCounter";
import { Metadata } from "next";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Roth, Rotter, Laster, Ivanova",
    default:
      "Dr. Sally Roth, Dr. Sari Rotter, Dr. Susan Laster, and Dr. Magdalena Ivanova",
  },

  themeColor: "#1f2937",

  description: "Pediatricians in Brookline, MA",
};

const BetaBadge = () => (
  <div className="fixed inline bg-red-700 px-24 py-1 font-bold text-white rotate-45 right-[-3.5rem] top-10 uppercase">
    Beta!
  </div>
);

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
          <div className="block md:grid grid-cols-[max-content_1fr] gap-8">
            <Navigation />
            <main className="w-full">{children}</main>
          </div>
        </div>
        <Footer />
        <GoatCounter />
        <MobileNavigation />
      </body>
    </html>
  );
}
