"use client";

import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <GoogleTranslateWidget />
        {children}
      </body>
    </html>
  );
}
