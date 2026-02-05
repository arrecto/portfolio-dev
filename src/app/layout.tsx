import type { Metadata } from "next";
import { Geist, Geist_Mono, Xanh_Mono } from "next/font/google";
import {Poppins, Open_Sans} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const xanhMono = Xanh_Mono({
  weight: ["400"],
  variable: "--font-xanh-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Allen Ivan Recto Portfolio",
  description: "My portfolio as backend systems and machine learning engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${openSans.variable} ${xanhMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
