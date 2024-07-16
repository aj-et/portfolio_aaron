import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
import ReCAPTCHALoader from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is Aaron's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-2 border-black rounded-lg m-5 p-5">
          <Header />
          {/* <ReCAPTCHALoader /> */}
          {children}
          <Toaster />
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
