import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Crytopin",
  description: "Invest in Crypto today",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="w-full h-screen flex flex-col justify-between items-center">
        <Header />
        <main className="w-full flex flex-col justify-center items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
