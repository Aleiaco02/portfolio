import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Alessandro Iacovelli",
  description: "Portfolio personale di Alessandro Iacovelli, Front End Developer.",
  openGraph: {
    title: "Alessandro Iacovelli",
    description: "Portfolio personale di Alessandro Iacovelli, Front End Developer.",
    url: "https://alessandroiacovelli.it",
    siteName: "Alessandro Iacovelli",
    images: [
      {
        url: "https://alessandroiacovelli.it/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <ParticleBackground />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
