"use client";
import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import Image from "next/image";
export default function Home() { return ( <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary"> <main className="w-full pt-20 bg-background"><div className="flex flex-col w-full text-on-surface bg-background select-none">

<FadeIn><section className="w-full bg-surface-container-lowest/90 border-b border-primary/20 backdrop-blur-md px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-xs z-30">
<div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-lg">
<a className="flex items-center gap-xxs hover:text-primary transition-colors" href="tel:+971506321644">
<span className="material-symbols-outlined text-primary text-[1rem]">call</span>
<span>+971 50 632 1644</span>
</a>
<a className="flex items-center gap-xxs hover:text-primary transition-colors" href="https://wa.me/971506321644">
<span className="material-symbols-outlined text-primary text-[1rem]">chat</span>
<span>WhatsApp Sovereign Desk</span>
</a>
<div className="hidden sm:flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span>Dubai DIFC • Abu Dhabi • London</span>
</div>
</div>
<div className="flex items-center gap-md">
<span className="hidden md:inline uppercase text-primary tracking-widest font-semibold text-[0.65rem]">Licensed RICS Brokerage</span>
</div>
</div>
</section></FadeIn>

<FadeIn>
  <section className="relative w-full bg-background pt-20 pb-12 sm:pt-24 lg:pt-32 lg:pb-16 overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side Content */}
        <div className="flex flex-col items-start z-10">
          <h1 className="font-display text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] xl:text-[4.5rem] leading-[1.1] tracking-tight font-bold text-on-surface mb-2">
            Built on Discretion.<br />
            <span className="text-primary">Defined by Vision.</span>
          </h1>
          <p className="font-body-lg text-[0.95rem] sm:text-[1.05rem] text-on-surface-variant max-w-152 mt-3 sm:mt-4 mb-6 sm:mb-8 leading-relaxed">
            Founded in 2019 on quiet execution, Trueline now brings its private-market mastery into the open — through strategic alliances with Arcon and AG Developers for principals who value discretion as much as returns.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a href="/developments" className="w-full sm:w-auto text-center bg-primary text-on-primary font-label-caps text-xs sm:text-[0.8rem] uppercase px-5 sm:px-6 py-3 sm:py-3.5 font-bold tracking-widest hover:bg-primary-container transition-all">
              EXPLORE DEVELOPMENTS
            </a>
            <a href="https://wa.me/971506321644" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-transparent border border-outline text-on-surface font-label-caps text-xs sm:text-[0.8rem] uppercase px-5 sm:px-6 py-3 sm:py-3.5 font-bold tracking-widest hover:bg-surface-container-low transition-all">
              SPEAK TO SOVEREIGN DESK
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full h-65 sm:h-87.5 lg:h-112.5 xl:h-125 rounded-sm overflow-hidden z-10 border border-outline/20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}
          ></div>
        </div>
      </div>
    </div>
  </section>
</FadeIn>

<FadeIn>
  <div className="w-full bg-surface-container-low border-b border-outline/20 -mt-2">
    <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-8 sm:py-10">
      <div className="flex flex-col lg:border-r border-outline/20 pb-4 sm:pb-0 sm:pr-6 lg:pr-8">
        <span className="font-headline-xl text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">AED 2.4B+</span>
        <span className="font-label-caps text-[0.65rem] sm:text-label-caps uppercase tracking-widest text-on-surface-variant">ASSET TRANSACTIONS</span>
      </div>
      <div className="flex flex-col lg:border-r border-outline/20 pb-4 sm:pb-0 sm:pr-6 lg:px-8">
        <span className="font-headline-xl text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</span>
        <span className="font-label-caps text-[0.65rem] sm:text-label-caps uppercase tracking-widest text-on-surface-variant">DEVELOPER MANDATES</span>
      </div>
      <div className="flex flex-col lg:border-r border-outline/20 pb-4 sm:pb-0 sm:pr-6 lg:px-8">
        <span className="font-headline-xl text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">30+ YEARS</span>
        <span className="font-label-caps text-[0.65rem] sm:text-label-caps uppercase tracking-widest text-on-surface-variant">EXPERIENCE</span>
      </div>
      <div className="flex flex-col lg:pl-8">
        <span className="font-headline-xl text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2</span>
        <span className="font-label-caps text-[0.65rem] sm:text-label-caps uppercase tracking-widest text-on-surface-variant">CITIES • ABU DHABI &amp; DUBAI</span>
      </div>
    </div>
    <div className="w-full bg-background border-t border-outline/20">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-3 sm:py-4 flex items-center justify-center sm:justify-start text-center sm:text-left">
        <span className="font-label-caps text-[0.68rem] sm:text-[0.75rem] uppercase tracking-widest text-primary font-semibold">
          Regulated and advised in line with RICS, DLD, DIFC and ADGM standards.
        </span>
      </div>
    </div>
  </div>
</FadeIn>

<div className="w-full bg-surface-container-lowest border-y border-primary/20 py-sm overflow-hidden flex items-center relative whitespace-nowrap">
<div className="flex items-center w-max animate-marquee font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
  <div className="flex items-center gap-xl px-xl shrink-0 whitespace-nowrap">
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
  </div>
  <div className="flex items-center gap-xl px-xl shrink-0 whitespace-nowrap">
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
  </div>
</div>
</div>

<FadeIn><section className="relative w-full py-4xl overflow-hidden bg-surface">

<div className="absolute top-6 left-1/2 -translate-x-1/2 font-headline-xl text-[6rem] md:text-[10rem] lg:text-[13rem] font-extrabold uppercase text-surface-container-highest/20 tracking-tighter pointer-events-none select-none whitespace-nowrap">
      TRUSTED PARTNERS
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
<div className="text-center max-w-224 mx-auto mb-3xl">
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface tracking-wide">
          YOUR TRUSTED REAL ESTATE <span className="text-primary">PARTNERS</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-sm">
          Looking for the perfect landmark residence or strategic portfolio acquisition in the UAE and premier global financial capitals? Trueline Real Estate specializes in identifying, acquiring, and structuring prime and ultra-prime assets across Dubai, Abu Dhabi, London, and New York.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-md min-h-130">

<div className="md:col-span-2 lg:col-span-7 relative min-h-85 md:min-h-100 lg:h-full group overflow-hidden border border-primary/30 bg-surface-container">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Dusk panoramic view of Dubai canal skyline with Burj Khalifa and modern skyscrapers reflecting in turquoise blue water, vibrant amber sunset glowing across futuristic glass towers" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}>
</div>
<div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 sm:p-xl flex flex-col items-start">
<span className="px-sm py-xxs bg-primary text-on-primary font-label-caps text-label-caps uppercase font-semibold mb-xs">Principal UAE Hub</span>
<h3 className="font-headline-md text-2xl sm:text-headline-md font-bold text-on-surface uppercase">Dubai</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-112 mt-xs hidden sm:block">
              Downtown, Palm Jumeirah, DIFC &amp; Emirates Hills. Access exclusive confidential off-market allocations.
            </p>
<a className="inline-flex items-center gap-xs font-label-caps text-label-caps uppercase text-primary mt-sm group-hover:translate-x-1 transition-transform" href="/developments">
<span>Explore 140+ Dubai Holdings</span>
<span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
</a>
</div>
</div>

<div className="md:col-span-1 lg:col-span-3 relative min-h-65 md:min-h-75 lg:h-full group overflow-hidden border border-outline-variant/30 bg-surface-container">
<div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Black and white modern architectural photography of Saadiyat Island and Al Maryah financial towers in Abu Dhabi, soaring geometry against dramatic sky" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}>
</div>
<div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 sm:p-lg flex flex-col items-start">
<span className="px-sm py-xxs bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold mb-xs">Capital Hub</span>
<h3 className="font-headline-sm text-xl sm:text-headline-sm font-bold text-on-surface uppercase">Abu Dhabi</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-80 mt-xs">
              Saadiyat Cultural District &amp; Al Maryah Island trophy residences.
            </p>
<a className="inline-flex items-center gap-xs font-label-caps text-label-caps uppercase text-primary mt-sm group-hover:translate-x-1 transition-transform" href="/developments">
<span>View Listings</span>
<span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
</a>
</div>
</div>

<div className="md:col-span-1 lg:col-span-2 relative min-h-65 md:min-h-75 lg:h-full group overflow-hidden border border-outline-variant/30 bg-surface-container">
<div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Architectural aerial view of Marjan Island in Ras Al Khaimah, clean turquoise coastline with luxury beachfront resorts and white sand beaches" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}>
</div>
<div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 sm:p-lg flex flex-col items-start">
<span className="px-sm py-xxs bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold mb-xs">Emerging</span>
<h3 className="font-headline-sm text-xl sm:text-headline-sm font-bold text-on-surface uppercase">RAK</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[0.75rem] mt-xs">
              Al Marjan Island ultra-luxury gaming resorts and private coastal suites.
            </p>
<a className="inline-flex items-center gap-xs font-label-caps text-label-caps uppercase text-primary mt-sm group-hover:translate-x-1 transition-transform" href="/developments">
<span>Explore</span>
<span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section></FadeIn>

{/* CURRENT ACTIVE PROJECT SPOTLIGHT */}
<FadeIn>
  <section className="relative w-full py-24 lg:py-32 bg-linear-to-b from-[#030c29] via-[#07122e] to-[#040e2b] border-y border-primary/25 overflow-hidden">
    <div className="absolute top-4 right-1/2 translate-x-1/2 font-headline-xl text-[5rem] md:text-[9rem] lg:text-[13rem] font-extrabold uppercase text-surface-container-highest/10 pointer-events-none select-none whitespace-nowrap">
      ACTIVE LAUNCH
    </div>
    
    <div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Column: Visual Showcase */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full h-90 sm:h-110 lg:h-125 rounded-sm overflow-hidden border border-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <Image 
              src="/platinum-heights/hero_cover.jpg" 
              alt="Platinum Heights - Current Active Project by Team Arcon" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#030c29] via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute top-4 left-4 bg-primary text-[#071C51] font-label-caps text-[0.7rem] uppercase px-3 py-1 font-bold tracking-widest shadow-lg">
              CURRENT ACTIVE PROJECT
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#071C51]/95 backdrop-blur-md border border-primary/30 flex items-center justify-between">
              <div>
                <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary font-bold block">Developer</span>
                <span className="font-headline-sm text-base font-bold text-[#F8F8F6]">Team Arcon Official Partnership</span>
              </div>
              <span className="font-label-caps text-[0.7rem] uppercase text-[#D8AA36] font-bold border border-[#D8AA36]/40 px-2.5 py-1">
                100% Freehold
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Project Highlights */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-[0.75rem] uppercase tracking-[0.25em] text-primary font-bold">
              FLAGSHIP LAUNCH • EMIRATES CITY, AJMAN
            </span>
          </div>

          <h2 className="font-display text-[2.25rem] md:text-[3.25rem] leading-[1.1] font-bold text-on-surface mb-4">
            Platinum Heights <br />
            <span className="text-primary font-light italic text-[1.85rem] md:text-[2.5rem]">By Team Arcon</span>
          </h2>

          <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
            Rising 32 floors (approx. 122.75 M) as an iconic residential landmark on Ajman&apos;s evolving skyline. Featuring climate-responsive perforated facades, +24.05m sky jogging track, rooftop infinity pool, and semi-furnished 1-4 BHK duplex &amp; triplex residences with Arcon Connect.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full py-4 border-y border-outline/20 mb-8 bg-surface-container-low/40 p-3">
            <div>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-wider text-on-surface-variant block">Configuration</span>
              <span className="font-headline-sm text-lg font-bold text-primary">32 Floors</span>
            </div>
            <div>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-wider text-on-surface-variant block">Residences</span>
              <span className="font-headline-sm text-lg font-bold text-primary">256 Units</span>
            </div>
            <div>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-wider text-on-surface-variant block">Wellness Track</span>
              <span className="font-headline-sm text-lg font-bold text-primary">+24.05m</span>
            </div>
            <div>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-wider text-on-surface-variant block">Starting From</span>
              <span className="font-headline-sm text-lg font-bold text-primary">AED 495K</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link 
              href="/developments/platinum-heights"
              className="w-full sm:w-auto text-center bg-primary text-[#071C51] font-label-caps text-xs sm:text-[0.8rem] uppercase px-6 sm:px-7 py-3 sm:py-3.5 font-bold tracking-widest hover:bg-primary-container transition-all shadow-xl active:scale-95"
            >
              Explore Project Details
            </Link>

            <a 
              href="/platinum_heights_brochure.pdf" 
              download="Platinum_Heights_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center border border-primary/40 text-on-surface hover:text-primary font-label-caps text-xs sm:text-[0.8rem] uppercase px-5 sm:px-6 py-3 sm:py-3.5 font-bold tracking-widest hover:bg-surface-container-high transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[1.1rem]">download</span>
              <span>Brochure (PDF)</span>
            </a>

            <a 
              href="https://wa.me/971506321644?text=Hello%20Trueline,%20I%20am%20inquiring%20about%20the%20active%20project%20Platinum%20Heights"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center text-[#25D366] hover:underline font-label-caps text-xs sm:text-[0.75rem] uppercase tracking-widest font-bold flex items-center gap-1.5 py-1"
            >
              <span className="material-symbols-outlined text-[1.2rem]">chat</span>
              <span>WhatsApp Sovereign Desk</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>
</FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface-container-low overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 font-headline-xl text-[6.5rem] md:text-[11rem] lg:text-[14rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      FOR SALE
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-lg mb-2xl gap-md">
<div>
<span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Curated Inventory</span>
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
            PROPERTIES AVAILABLE FOR <span className="text-primary">SALE</span>
</h2>
</div>
<div className="flex items-center justify-between w-full md:w-auto pt-sm md:pt-0 gap-xl">
<Link className="font-label-caps text-label-caps uppercase text-primary hover:text-primary-fixed-dim inline-flex items-center gap-xs tracking-widest font-semibold group" href="/developments">
<span>VIEW ALL PROPERTIES</span>
<span className="material-symbols-outlined text-[1.1rem] group-hover:translate-x-1 transition-transform">chevron_right</span>
</Link>
<div className="flex items-center gap-xs">
<button aria-label="Previous" onClick={() => { const s = document.getElementById('sale-slider'); if(s) s.scrollBy({ left: -400, behavior: 'smooth' }); }} className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
</button>
<button aria-label="Next" onClick={() => { const s = document.getElementById('sale-slider'); if(s) s.scrollBy({ left: 400, behavior: 'smooth' }); }} className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div id="sale-slider" className="flex overflow-x-auto snap-x snap-mandatory gap-xl pb-sm" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

{/* Platinum Heights - Current Active Project in Feed */}
<div className="group bg-surface-container border-2 border-primary/60 hover:border-primary transition-all flex flex-col justify-between overflow-hidden shadow-2xl min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] shrink-0 snap-start relative">
  <div className="relative h-64 overflow-hidden bg-surface-container-highest">
    <div 
      className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" 
      style={{ backgroundImage: 'url("/platinum-heights/hero_cover.jpg")' }} 
    />
    <div className="absolute top-sm left-sm px-sm py-xxs bg-primary text-[#071C51] font-label-caps text-label-caps uppercase font-bold tracking-widest shadow-md">
      Current Active Project
    </div>
    <div className="absolute top-sm right-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-[0.65rem] uppercase text-primary font-semibold">
      Team Arcon
    </div>
  </div>
  <div className="p-lg flex flex-col grow justify-between">
    <div>
      <div className="flex items-center gap-xs text-primary mb-xs">
        <span className="material-symbols-outlined text-[1.1rem]">apartment</span>
        <Link href="/developments/platinum-heights" className="font-headline-sm text-headline-sm font-semibold text-on-surface hover:text-primary transition-colors">
          Platinum Heights
        </Link>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
        32 Storeys | +24.05m Sky Jogging Track | Arcon Connect Smart Living
      </p>
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
        <span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
        <span className="truncate">Emirates City, Ajman, UAE (Direct E311)</span>
      </div>

      <div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
        <div className="flex items-center gap-xxs">
          <span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
          <span>1 - 4 Beds</span>
        </div>
        <div className="flex items-center gap-xxs">
          <span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
          <span>2 - 5 Baths</span>
        </div>
        <div className="flex items-center gap-xxs">
          <span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
          <span>Up to 2,971 sqft</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-xs">
      <div>
        <span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Starting Price</span>
        <span className="font-headline-sm text-headline-sm font-bold text-primary">AED 495,000</span>
      </div>
      <div className="flex items-center gap-xs">
        <Link href="/developments/platinum-heights" className="px-3 py-1.5 bg-primary text-[#071C51] font-label-caps text-[0.7rem] uppercase font-bold tracking-wider hover:bg-primary-container transition-all">
          Explore
        </Link>
        <a href="/platinum_heights_brochure.pdf" download="Platinum_Heights_Brochure.pdf" className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Download Brochure">
          <span className="material-symbols-outlined text-[1rem]">download</span>
        </a>
        <a href="https://wa.me/971506321644?text=I%20am%20interested%20in%20Platinum%20Heights" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-[#25D366] hover:border-[#25D366] transition-colors" title="WhatsApp Concierge">
          <span className="material-symbols-outlined text-[1rem]">chat</span>
        </a>
      </div>
    </div>
  </div>
</div>

{/* AG G+4 Residences - New Launch by AG Development */}
<div className="group bg-surface-container border border-outline-variant/40 hover:border-primary transition-all flex flex-col justify-between overflow-hidden shadow-xl min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] shrink-0 snap-start relative">
  <div className="relative h-64 overflow-hidden bg-surface-container-highest">
    <div 
      className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" 
      style={{ backgroundImage: 'url("/ag-group/page_3.png")' }} 
    />
    <div className="absolute top-sm left-sm px-sm py-xxs bg-[#071C51] text-white font-label-caps text-label-caps uppercase font-bold tracking-widest shadow-md">
      New Launch
    </div>
    <div className="absolute top-sm right-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-[0.65rem] uppercase text-primary font-semibold">
      AG Development
    </div>
  </div>
  <div className="p-lg flex flex-col grow justify-between">
    <div>
      <div className="flex items-center gap-xs text-primary mb-xs">
        <span className="material-symbols-outlined text-[1.1rem]">deck</span>
        <Link href="/developments/ag-residences" className="font-headline-sm text-headline-sm font-semibold text-on-surface hover:text-primary transition-colors">
          AG G+4 Residences
        </Link>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
        Boutique 2BR Sky Suites | Private Terraces up to 844 sqft | Rooftop Garden
      </p>
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
        <span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
        <span className="truncate">Prime UAE Residential Enclave</span>
      </div>

      <div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
        <div className="flex items-center gap-xxs">
          <span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
          <span>2 Beds</span>
        </div>
        <div className="flex items-center gap-xxs">
          <span className="material-symbols-outlined text-primary text-[1rem]">yard</span>
          <span>Sky Terrace</span>
        </div>
        <div className="flex items-center gap-xxs">
          <span className="material-symbols-outlined text-primary text-[1rem]">palette</span>
          <span>B&amp;D Interiors</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-xs">
      <div>
        <span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Starting Price</span>
        <span className="font-headline-sm text-headline-sm font-bold text-primary">AED 1,150,000</span>
      </div>
      <div className="flex items-center gap-xs">
        <Link href="/developments/ag-residences" className="px-3 py-1.5 bg-primary text-[#071C51] font-label-caps text-[0.7rem] uppercase font-bold tracking-wider hover:bg-primary-container transition-all">
          Explore
        </Link>
        <a href="/AG GROUP.pdf" download="AG_Group_G4_Residences_Brochure.pdf" className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Download Brochure">
          <span className="material-symbols-outlined text-[1rem]">download</span>
        </a>
        <a href="https://wa.me/971506321644?text=I%20am%20interested%20in%20AG%20Group%20G%2B4%20Residences" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-[#25D366] hover:border-[#25D366] transition-colors" title="WhatsApp Concierge">
          <span className="material-symbols-outlined text-[1rem]">chat</span>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full min-h-140 flex items-center bg-surface-container-lowest overflow-hidden">

<div className="absolute top-6 left-1/2 -translate-x-1/2 font-headline-xl text-[5.5rem] md:text-[9rem] lg:text-[12rem] font-extrabold uppercase text-surface-container-highest/10 pointer-events-none select-none whitespace-nowrap">
      ABOUT TRUELINE • AWARDS
    </div>

<div className="absolute inset-0 bg-cover bg-right md:bg-center opacity-50 mix-blend-luminosity" data-alt="Photorealistic, cinematic, wide-angle shot of an ultra-luxury modern corporate real estate office" style={{ backgroundImage: 'url("/corporate_background.jpg")' }}>
</div>
<div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-transparent"></div>
<div className="relative z-10 max-w-[1600px] w-full mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-4xl">
<div className="max-w-144 bg-surface-container/70 border border-primary/20 backdrop-blur-xl p-xl md:p-2xl">
<span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-xs">Institutional Authority</span>
<h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface mb-md">
          WHO <span className="text-primary">WE ARE</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-xl">
          Trueline Real Estate stands as a prominent and distinguished real estate advisory in the United Arab Emirates and international financial capitals, embodying excellence, discretion, and institutional market authority in an ever-evolving property landscape.
        </p>
<div className="flex flex-wrap items-center gap-md">
<a className="px-xl py-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all shadow-md" href="#">
            Know More
          </a>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-primary text-[1.2rem]">workspace_premium</span>
<span>Winner Best Sovereign Agency 2023 • 2024</span>
</div>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface-container-low overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 font-headline-xl text-[6rem] md:text-[10rem] lg:text-[13rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      TESTIMONIALS
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-lg mb-2xl gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
            Reviews &amp; Comments
          </h2>
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary mt-xxs block">
            YOU CAN COUNT <span className="text-on-surface">ON US</span>
</span>
</div>
<div className="flex items-center gap-xs">
<button aria-label="Previous Testimonial" className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
</button>
<button aria-label="Next Testimonial" className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
</button>
</div>
</div>


<div className="relative w-full flex overflow-hidden py-md" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
  <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-xl pr-xl">
    

<div className="w-87.5 md:w-112.5 shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Firas Najjar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              &quot;I have worked with Trueline, specifically their private sovereign client desk. They handled our multi-property acquisition across Dubai and Abu Dhabi with absolute discretion, institutional underwriting, and zero friction. They are unquestionably the pinnacle of real estate advisory.&quot;
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Verified Portfolio Client • Dubai
          </div>
</div>

<div className="w-87.5 md:w-112.5 shrink-0 p-xl bg-surface-container border border-primary/40 shadow-xl flex flex-col justify-between relative">
<div className="absolute -top-3 right-6 px-sm py-xxs bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest">
            Institutional Trust
          </div>
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Go Inoue</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              &quot;By far, this is the best asset management &amp; acquisition company in the UAE. Our family office relies on their advisors for clear yield projection, regulatory conveyance, and impeccable tenant management. Every single requirement was resolved with high precision.&quot;
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Tokyo • Sovereign Investor
          </div>
</div>

<div className="w-87.5 md:w-112.5 shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Elena Rostova</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              &quot;From securing off-market penthouse allocations on the Palm to setting up escrow custodial services, Trueline proved second to none. The level of confidentiality, speed, and market intelligence is unmatched in the Middle East region.&quot;
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Geneva Private Client
          </div>
</div>

  </div>
  <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-xl pr-xl absolute top-0 left-full">
    

<div className="w-87.5 md:w-112.5 shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Firas Najjar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "I have worked with Trueline, specifically their private sovereign client desk. They handled our multi-property acquisition across Dubai and Abu Dhabi with absolute discretion, institutional underwriting, and zero friction. They are unquestionably the pinnacle of real estate advisory."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Verified Portfolio Client • Dubai
          </div>
</div>

<div className="w-87.5 md:w-112.5 shrink-0 p-xl bg-surface-container border border-primary/40 shadow-xl flex flex-col justify-between relative">
<div className="absolute -top-3 right-6 px-sm py-xxs bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest">
            Institutional Trust
          </div>
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Go Inoue</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "By far, this is the best asset management &amp; acquisition company in the UAE. Our family office relies on their advisors for clear yield projection, regulatory conveyance, and impeccable tenant management. Every single requirement was resolved with high precision."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Tokyo • Sovereign Investor
          </div>
</div>

<div className="w-87.5 md:w-112.5 shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Elena Rostova</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "From securing off-market penthouse allocations on the Palm to setting up escrow custodial services, Trueline proved second to none. The level of confidentiality, speed, and market intelligence is unmatched in the Middle East region."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Geneva Private Client
          </div>
</div>

  </div>
</div>

</div>
</section></FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface overflow-hidden">

<div className="absolute top-4 right-1/4 font-headline-xl text-[4rem] md:text-[11rem] lg:text-[14rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      FAQ
    </div>
<div className="relative z-10 max-w-300 mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
<div className="mb-2xl">
<h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface">
          ASK ANYTHING <span className="text-primary">FROM US</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Everything you need to know about acquisition protocols, leasing laws, and sovereign property investments. Can&apos;t find the answer you&apos;re looking for? Please contact our private client team.
        </p>
</div>

<FAQAccordion />
</div>
</section></FadeIn>


<button aria-label="Scroll to top" className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-primary text-on-primary shadow-2xl hidden sm:flex items-center justify-center hover:bg-primary-fixed-dim transition-all hover:scale-105 active:scale-95" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) }} title="Scroll to Top">
<span className="material-symbols-outlined text-[1.3rem]">arrow_upward</span>
</button>

<div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-xs items-end">

<a aria-label="Call concierge" className="w-12 h-12 bg-primary text-on-primary shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-primary-fixed-dim transition-all hover:scale-105 active:scale-95" href="tel:+971506321644" title="Direct Telephone Concierge">
<span className="material-symbols-outlined text-[1.4rem]">call</span>
</a>

<a aria-label="Chat on WhatsApp" className="w-12 h-12 bg-[#25D366] text-[#030c29] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:brightness-110 transition-all hover:scale-105 active:scale-95" href="https://wa.me/971506321644" title="Chat on WhatsApp">
<span className="material-symbols-outlined text-[1.4rem]">chat</span>
</a>
</div>
</div>

</main> </div> ); }