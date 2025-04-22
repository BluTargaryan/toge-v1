import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Toge - Shop page",
  description: "The one stop search portal for all those hard-to-find African ingredients in the UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}
