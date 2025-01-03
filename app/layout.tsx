import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejas Nanoti | Web Dev | Blockchain | Machine Learning",
  description:
    "Tejas Nanoti is a Full Stack Web developer based in India. Currently working on open-source projects and freelancing.",
  metadataBase: new URL("https://tejasnanoti.vercel.app"),
  openGraph: {
    title: "Tejas Nanoti • Web dev • Blockchain • ML Enthusiast",
    description:
      "20 year old MERN Stack & Ethereum Blockchain Developer. Based in India.",
    url: "https://tejasnanoti.vercel.app",
    images: {
      url: "/opengraph-image.png",
      width: 1920,
      height: 960,
      alt: "Tejas Nanoti | Web Dev | Blockchain | Machine Learning",
    },
    siteName: "Tejas Nanoti's Personal Portfolio Website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
