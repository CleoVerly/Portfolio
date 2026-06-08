import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLEOVERLY — Full-Stack Developer Portfolio",
  description:
    "Portfolio website of CLEOVERLY — Full-Stack Developer passionate about building modern, performant web applications with React, Next.js, and TypeScript.",
  keywords: [
    "portfolio",
    "web developer",
    "full-stack",
    "react",
    "next.js",
    "typescript",
  ],
  openGraph: {
    title: "CLEOVERLY — Full-Stack Developer",
    description: "I build fast, clean web products — from first sketch to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
