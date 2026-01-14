import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderShell from "./_components/header-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eLearning LMS",
  description: "Interactive learning platform with modern, animated UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-sky-50/40 to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
          <HeaderShell />

          <main className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
