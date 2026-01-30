// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Modak } from "next/font/google";
// import "./globals.css";
// import { ModalProvider } from "@/contexts/ModalContext";
// import Modal from "@/components/Modal";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });
// const modak = Modak({
//   variable: "--font-modak",
//   weight: "400",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Samuel Eseigbe",
//   description: "Software Developer Portfolio",
//   keywords: ["eseigbe", "samuel"],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={` ${modak.variable} antialiased`}>
//         <ModalProvider>
//           {children}
//           <Modal />
//         </ModalProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/contexts/ModalContext";
import Modal from "@/components/Modal";

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
  title: "Samuel Eseigbe - Software Developer",
  description: "Full-stack developer specializing in modern web applications",
  keywords: [
    "eseigbe",
    "samuel",
    "portfolio",
    "software developer",
    "web developer",
    "full-stack",
  ],
  authors: [{ name: "Samuel Eseigbe" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Samuel Eseigbe - Software Developer",
    description: "Full-stack developer specializing in modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ModalProvider>
          {children}
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}
