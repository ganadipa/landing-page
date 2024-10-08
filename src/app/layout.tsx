import type { Metadata } from "next";
import {
  Inter as FontSans,
  Albert_Sans as AlbertSans,
  Unbounded,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const albertSans = AlbertSans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Zamrood by Pandooin | Premium Travel Experiences in Indonesia",
  description:
    "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/**
       * Body will have a maximum width of 2000px
       * and will be centered horizontally
       *
       * The font family is set to Albert Sans, with the following is ready to be used:
       * - font-albert-sans
       * - font-sans
       * - font-unbounded
       */}
      <body
        className={cn(
          "relative min-h-screen bg-white-default font-albert-sans antialiased w-full max-w-[2000px] mx-auto",
          fontSans.variable,
          albertSans.variable,
          unbounded.variable
        )}
      >
        {/** All pages will have a navbar */}
        <Header />

        {children}

        {/** All pages will have a footer */}
        <Footer />
      </body>
    </html>
  );
}
