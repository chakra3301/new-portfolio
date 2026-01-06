import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Genesis | Creative Technologist & Digital Artist",
  description:
    "Portfolio of a creative technologist crafting immersive digital experiences at the intersection of design, code, and creative vision.",
  keywords: [
    "creative developer",
    "digital artist",
    "web development",
    "interactive design",
    "WebGL",
    "generative art",
    "portfolio",
  ],
  authors: [{ name: "Genesis" }],
  openGraph: {
    title: "Genesis | Creative Technologist & Digital Artist",
    description:
      "Crafting immersive digital experiences at the intersection of design, code, and creative vision.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis | Creative Technologist",
    description:
      "Crafting immersive digital experiences at the intersection of design, code, and creative vision.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
        {/* Global noise overlay */}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
