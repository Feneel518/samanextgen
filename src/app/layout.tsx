import type { Metadata } from "next";
import { Oswald, Poppins, Syne } from "next/font/google";
import "./globals.css";
import ScreenSize from "@/components/ScreenSize";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "AI SaaS Landing Page",
  description: "Created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${syne.variable} antialiased bg-sama-background text-gray-300 font-poppins m-4 border border-gray-200/20`}
      >
        <div className="fixed bottom-8 left-8">
          <ScreenSize></ScreenSize>
        </div>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
