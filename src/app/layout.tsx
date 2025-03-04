import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const geistSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Consult With Siva",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
