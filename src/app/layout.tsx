import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "200", "300", "500", "600", "700"],
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
        className={`${poppins.variable} ${oswald.variable} antialiased bg-sama-background text-gray-300 font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
