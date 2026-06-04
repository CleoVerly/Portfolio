import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
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
    description: "Crafting digital experiences that inspire and innovate",
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
      className={`${outfit.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col md:pl-20">
        {children}
      </body>
    </html>
  );
}
