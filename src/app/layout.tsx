import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/contexts/ModalContext";
import Modal from "@/components/Modal";
import { Analytics } from "@vercel/analytics/next";
import Noise from "@/components/Noise";

// Display font for headings - bold, modern, tech-forward
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

// Body text - clean, readable, professional
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Code and technical content - developer favorite
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samuel Eseigbe - Software Engineer",
  description: "Software Engineer specializing in modern web applications",
  keywords: [
    "eseigbe",
    "samuel",
    "portfolio",
    "software developer",
    "software engineer",
    "web developer",
    "full-stack",
  ],
  authors: [{ name: "Samuel Eseigbe" }],
  icons: {
    icon: "/vercel.svg",
  },
  openGraph: {
    title: "Samuel Eseigbe - Software Engineer",
    description: "Software Engineer specializing in modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <Noise />
        <ModalProvider>
          {children}
          <Modal />
        </ModalProvider>
      </body>
      <Analytics />
    </html>
  );
}
