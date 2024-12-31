import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed Tergui - Software Engineer",
  description: "Mohamed Tergui is a full-stack software engineer based in Morocco, specializing in building robust web and mobile applications.",
  manifest: "/manifest.json",
  keywords: "Mohamed Tergui, Software Engineer, Full Stack Developer, Web Development, Mobile Applications, Next.js, React, JavaScript",
  openGraph: {
    title: "Mohamed Tergui - Software Engineer",
    description: "Explore the portfolio of Mohamed Tergui, a full-stack software engineer based in Morocco.",
    url: "https://mohamedtergui.vercel.app", 
    siteName: "Mohamed Tergui",
    images: [
      {
        url: "https://mohamedtergui.vercel.app/image.jpg", 
        width: 800,
        height: 600,
        alt: "Mohamed Tergui - Software Engineer",
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-back font-poppins">
      <body className={poppins.className}>
        <Cursor />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
