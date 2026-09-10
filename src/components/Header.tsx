"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
          
          <Link className="flex items-center gap-xs relative z-[60]" href="/">
            <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-widest font-bold">Trueline</span>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">Estates</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-xl" data-active-classes="text-primary font-bold">
            <Link className={`uppercase transition-colors font-bold ${pathname === "/" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/">Home</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/developments" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/developments">Developments</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/advisory" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/advisory">Advisory</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/private-office" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/private-office">Private Office</Link>
            <Link className={`font-label-caps text-label-caps uppercase transition-colors font-bold ${pathname === "/contact" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`} href="/contact">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-md relative z-[60]">
            <Link className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary font-label-caps text-label-caps uppercase px-lg py-sm font-bold transition-all duration-300 hover:bg-primary-fixed-dim hover:tracking-widest" href="/contact">
              Schedule Consultation
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-on-surface hover:text-primary transition-colors flex items-center justify-center"
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
        className={`fixed inset-0 bg-background/95 backdrop-blur-2xl z-[45] lg:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-2xl">
          <Link className={`text-[1.5rem] uppercase tracking-widest font-bold transition-all ${pathname === "/" ? "text-primary scale-110" : "text-on-surface-variant hover:text-on-surface"}`} href="/">Home</Link>
          <Link className={`text-[1.5rem] uppercase tracking-widest font-bold transition-all ${pathname === "/developments" ? "text-primary scale-110" : "text-on-surface-variant hover:text-on-surface"}`} href="/developments">Developments</Link>
          <Link className={`text-[1.5rem] uppercase tracking-widest font-bold transition-all ${pathname === "/advisory" ? "text-primary scale-110" : "text-on-surface-variant hover:text-on-surface"}`} href="/advisory">Advisory</Link>
          <Link className={`text-[1.5rem] uppercase tracking-widest font-bold transition-all ${pathname === "/private-office" ? "text-primary scale-110" : "text-on-surface-variant hover:text-on-surface"}`} href="/private-office">Private Office</Link>
          <Link className={`text-[1.5rem] uppercase tracking-widest font-bold transition-all ${pathname === "/contact" ? "text-primary scale-110" : "text-on-surface-variant hover:text-on-surface"}`} href="/contact">Contact</Link>
        </nav>
        
        <div className="absolute bottom-4xl flex flex-col items-center gap-md">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">Concierge Desk</span>
          <a href="tel:+97143128800" className="font-body-lg text-body-lg text-on-surface">+971 4 312 8800</a>
        </div>
      </div>
    </>
  );
}
