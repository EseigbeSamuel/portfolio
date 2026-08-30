import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/contexts/ModalContext";
import Modal from "@/components/Modal";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import Noise from "@/components/Noise";

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
  metadataBase: new URL("https://samueleseigbe.vercel.app/"),
  title: "Samuel Eseigbe - Software Engineer",
  description:
    "Software Engineer specializing in modern web and mobile applications",
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
    description:
      "Software Engineer specializing in modern web and mobile applications",
    type: "website",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Samuel Eseigbe - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Eseigbe - Software Engineer",
    description:
      "Software Engineer specializing in modern web and mobile applications",
    images: ["/portfolio.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
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
        {/* <Noise /> */}
        <ModalProvider>
          {children}
          <Modal />
        </ModalProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
