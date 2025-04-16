import type { Metadata } from "next";
import { Manrope,Inter} from "next/font/google";
import "./globals.css";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased bg-background box-border`}>
      <body className="overflow-x-hidden">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
