import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ParticlesBackground } from "./(components)/particles-background";
import type { PropsWithChildren } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angelin",
  description: "Welcome to my personal portfolio.",
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }] },
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-svh`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
