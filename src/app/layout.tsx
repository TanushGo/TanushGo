import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tanush Goel - Full Stack Developer and AI Engineer",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
}

    



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const meta = {
    title: "Tanush Goel - Full Stack Developer and AI Engineer",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    type: "website",
    name: "Tanush Goel",
    designation: "Full Stack Developer and AI Engineer",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/tanushgoel/",
      github: "https://github.com/TanushGo",
    }}

  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="dark:bg-gray-800 w-full">
        <Navbar userInfo={meta}/>
        <div>{children}</div>
        <Footer />
        </main>
        
      </ThemeProvider>
      </body>
    </html>
  );
}




