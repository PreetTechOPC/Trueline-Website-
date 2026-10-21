"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu when route changes without calling setState in an effect
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
          
          <Link className="flex items-center gap-xs relative z-60" href="/">
            <Image src="/Trueline.png" alt="Trueline Real Estate" width={250} height={80} className="h-16 w-auto object-contain" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-xl" data-active-classes="text-primary font-bold">
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/">Home</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/about" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/about">About Us</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/developments" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/developments">Developments</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/advisory" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/advisory">Advisory</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/contact" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/contact">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-md relative z-60">
            <Link className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary font-label-caps text-label-caps uppercase px-5 lg:px-lg py-2.5 sm:py-sm font-bold transition-all duration-300 hover:bg-primary-fixed-dim hover:tracking-widest text-xs lg:text-sm" href="/contact">
              Schedule Consultation
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-on-surface hover:text-primary transition-colors flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[2rem]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-[#071C51] z-45 lg:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-between px-6 pt-28 pb-10 overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-center my-auto w-full">
          <Link className={`text-2xl uppercase tracking-widest font-bold transition-all py-1 ${pathname === "/" ? "text-primary scale-105" : "text-white/80 hover:text-white"}`} href="/">Home</Link>
          <Link className={`text-2xl uppercase tracking-widest font-bold transition-all py-1 ${pathname === "/about" ? "text-primary scale-105" : "text-white/80 hover:text-white"}`} href="/about">About Us</Link>
          <Link className={`text-2xl uppercase tracking-widest font-bold transition-all py-1 ${pathname === "/developments" ? "text-primary scale-105" : "text-white/80 hover:text-white"}`} href="/developments">Developments</Link>
          <Link className={`text-2xl uppercase tracking-widest font-bold transition-all py-1 ${pathname === "/advisory" ? "text-primary scale-105" : "text-white/80 hover:text-white"}`} href="/advisory">Advisory</Link>
          <Link className={`text-2xl uppercase tracking-widest font-bold transition-all py-1 ${pathname === "/contact" ? "text-primary scale-105" : "text-white/80 hover:text-white"}`} href="/contact">Contact</Link>
        </nav>

        <div className="w-full max-w-70 sm:max-w-xs flex flex-col gap-3 pt-6 border-t border-white/15 text-center shrink-0">
          <Link 
            href="/contact" 
            className="w-full py-3.5 px-6 bg-primary text-[#071C51] font-label-caps text-xs uppercase font-bold tracking-widest text-center shadow-lg hover:bg-primary-container block whitespace-nowrap"
          >
            Schedule Consultation
          </Link>
          <a 
            href="tel:+971506321644"
            className="text-white/90 text-sm flex items-center justify-center gap-2 py-1 hover:text-primary whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[1.1rem] text-primary">call</span>
            <span className="font-semibold">+971 50 632 1644</span>
          </a>
        </div>
      </div>
    </>
  );
}
