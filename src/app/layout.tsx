import type { Metadata } from "next";
import { Manrope,Inter} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toge - Home page",
  description: "The one stop search portal for all those hard-to-find African ingredients in the UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased bg-background`}>
      <body>
        {children}
      </body>
    </html>
  );
}
