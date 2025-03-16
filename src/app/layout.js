
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"] 
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata = {
  title: "Celeste Lu",
  description: "Full Stack Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
