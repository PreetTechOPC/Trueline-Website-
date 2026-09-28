import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trueline Real Estate",
  description: "Trueline Real Estate Portal",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-inter bg-background text-on-surface selection:bg-primary selection:text-on-primary overflow-x-hidden pb-12 sm:pb-0">
        <Header />
        {children}
        <Footer />
        
        {/* Mobile Sticky Action Tray */}
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-[#071C51]/80 backdrop-blur-md border-t border-white/10 z-[100] flex items-center sm:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
          <a href="tel:+97143128800" className="flex-1 flex items-center justify-center h-full border-r border-white/10 text-white hover:bg-white/5 active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[1.1rem] mr-2 text-primary">call</span>
            <span className="font-label-caps text-[0.65rem] uppercase tracking-widest mt-0.5">Call Concierge</span>
          </a>
          <a href="https://wa.me/97143128800" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center h-full text-white hover:bg-white/5 active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[1.1rem] mr-2 text-[#25D366]">chat</span>
            <span className="font-label-caps text-[0.65rem] uppercase tracking-widest mt-0.5">WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  );
}
