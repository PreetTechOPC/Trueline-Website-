"use client";

import { useState } from 'react';
import FadeIn from "@/components/FadeIn";
import Link from 'next/link';
import Image from 'next/image';

const developmentsList = [
  {
    id: "platinum-heights",
    title: "Platinum Heights",
    developer: "Team Arcon",
    tag: "Arcon Lineup",
    badge: "CURRENT ACTIVE PROJECT",
    isCurrentActive: true,
    image: "/platinum-heights/hero_cover.jpg",
    location: "Emirates City, Sheikh M. Bin Zayed Rd (E311), Ajman",
    description: "Rising 32 storeys (approx. 122.75M) with climate-responsive perforated facades, +24.05m sky jogging track, rooftop infinity pool, and semi-furnished 1-4 BHK duplex & triplex residences with Arcon Connect.",
    specs: "32 Floors · 256 Residences · Freehold",
    price: "From AED 495,000 · Flexible Payment Plan",
    brochureUrl: "/platinum_heights_brochure.pdf",
    projectUrl: "/developments/platinum-heights"
  },
  {
    id: "ag-g4-residences",
    title: "AG G+4 Residences",
    developer: "AG Development",
    tag: "AG Developers",
    badge: "NEW LAUNCH",
    isCurrentActive: false,
    image: "/ag-group/page_3.png",
    location: "Prime UAE Residential Corridor",
    description: "Boutique low-rise residential enclave featuring fifth-floor luxury 2BR penthouse residences with expansive private sky terraces up to 844 sq.ft, 207 sq.m shared rooftop garden with firepit, and bespoke interiors curated by Oscar Andreu and B&D Interiors.",
    specs: "G+4 Floors · 2BR Penthouse Suites · Sky Terraces",
    price: "From AED 1,150,000 · Tailored Payment Structure",
    brochureUrl: "/AG GROUP.pdf",
    projectUrl: "/developments/ag-residences"
  }
];

export default function DevelopmentsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDevelopments = activeFilter === "All"
    ? developmentsList
    : developmentsList.filter(d => {
        if (activeFilter === "Arcon Lineup") return d.tag === "Arcon Lineup";
        if (activeFilter === "AG Developers") return d.tag === "AG Developers";
        return true;
      });

  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative w-full bg-background pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          <div className="relative z-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full max-w-[1600px] mx-auto text-left">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-6 font-semibold">
              CURATED ARCHITECTURAL PORTFOLIO
            </span>
            <h1 className="font-display text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] font-bold text-on-surface mb-6">
              Signature Developments & <br className="hidden md:block"/>
              <span className="text-primary">Strategic Alliances</span>
            </h1>
            <p className="font-body-lg text-[1.1rem] text-on-surface-variant leading-relaxed max-w-[42rem]">
              Access premier off-plan launches, bespoke sky villas and institutional residential communities curated alongside our official development partners.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 2. Filter Tabs */}
      <section className="w-full bg-[#051540] border-y border-outline/20 sticky top-20 z-30 shadow-md">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="flex overflow-x-auto no-scrollbar items-center py-4 gap-2">
            <button 
              onClick={() => setActiveFilter("All")}
              className={`font-label-caps text-[0.8rem] uppercase tracking-widest font-bold px-6 py-3 rounded-md whitespace-nowrap shadow-sm transition-all ${
                activeFilter === "All"
                  ? "bg-primary text-[#071C51]"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              }`}
            >
              All Developments ({developmentsList.length})
            </button>
            <button 
              onClick={() => setActiveFilter("Arcon Lineup")}
              className={`font-label-caps text-[0.8rem] uppercase tracking-widest font-semibold px-6 py-3 rounded-md transition-colors whitespace-nowrap ${
                activeFilter === "Arcon Lineup"
                  ? "bg-primary text-[#071C51] font-bold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              }`}
            >
              Arcon Lineup ({developmentsList.filter(d => d.tag === "Arcon Lineup").length})
            </button>
            <button 
              onClick={() => setActiveFilter("AG Developers")}
              className={`font-label-caps text-[0.8rem] uppercase tracking-widest font-semibold px-6 py-3 rounded-md transition-colors whitespace-nowrap ${
                activeFilter === "AG Developers"
                  ? "bg-primary text-[#071C51] font-bold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              }`}
            >
              AG Developers ({developmentsList.filter(d => d.tag === "AG Developers").length})
            </button>
          </div>
        </div>
      </section>

      {/* 3. CURRENT ACTIVE PROJECT SPOTLIGHT BANNER */}
      <FadeIn>
        <section className="w-full bg-[#030c29] border-b border-primary/20 py-12 md:py-16">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="bg-gradient-to-r from-[#071C51] to-[#040e2b] border border-primary/40 rounded-sm p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual */}
                <div className="lg:col-span-5 relative h-[260px] md:h-[340px] rounded-sm overflow-hidden border border-primary/30 group">
                  <Image 
                    src="/platinum-heights/hero_cover.jpg" 
                    alt="Platinum Heights - Current Active Project" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 left-3 bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest px-3 py-1 shadow-md">
                    CURRENT ACTIVE PROJECT
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 text-primary font-label-caps text-[0.65rem] uppercase tracking-wider font-semibold">
                    Freehold · All Nationalities
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-caps text-[0.7rem] uppercase tracking-[0.2em] text-primary font-bold">
                        FEATURED ACTIVE LAUNCH • TEAM ARCON MANDATE
                      </span>
                    </div>

                    <h2 className="font-headline-lg text-2xl md:text-4xl font-bold text-white mb-3">
                      Platinum Heights — <span className="text-primary italic font-light">Emirates City, Ajman</span>
                    </h2>

                    <p className="font-body-md text-sm md:text-base text-[#B7C0C9] leading-relaxed mb-6">
                      An iconic 32-storey residential tower redefining contemporary living with climate-responsive perforated facades, +24.05m sky jogging track, rooftop infinity pool, and semi-furnished 1 to 4 BHK duplex &amp; triplex residences with Arcon Connect.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-outline/20 mb-6 bg-surface-container-lowest/50 px-3">
                      <div>
                        <span className="text-[0.65rem] font-label-caps uppercase text-on-surface-variant block">Configuration</span>
                        <strong className="text-primary font-headline-sm text-sm">32 Floors (122M)</strong>
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-label-caps uppercase text-on-surface-variant block">Residences</span>
                        <strong className="text-primary font-headline-sm text-sm">256 Units</strong>
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-label-caps uppercase text-on-surface-variant block">Parking</span>
                        <strong className="text-primary font-headline-sm text-sm">300 Bays (G+6P)</strong>
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-label-caps uppercase text-on-surface-variant block">Starting Price</span>
                        <strong className="text-primary font-headline-sm text-sm">AED 495,000</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <Link 
                      href="/developments/platinum-heights"
                      className="w-full sm:w-auto text-center bg-primary text-[#071C51] font-label-caps text-xs sm:text-[0.75rem] uppercase px-5 sm:px-6 py-3 font-bold tracking-widest hover:bg-primary-container transition-all shadow-lg"
                    >
                      Explore Project Details &amp; Floor Plans →
                    </Link>

                    <a 
                      href="/platinum_heights_brochure.pdf"
                      download="Platinum_Heights_Brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto justify-center border border-primary/40 text-white hover:text-primary font-label-caps text-xs sm:text-[0.75rem] uppercase px-4 sm:px-5 py-3 font-semibold tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[1rem]">download</span>
                      <span>Brochure (PDF)</span>
                    </a>

                    <a 
                      href="https://wa.me/971506321644?text=I%20am%20interested%20in%20Platinum%20Heights%20Ajman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto justify-center text-[#25D366] hover:underline font-label-caps text-xs sm:text-[0.75rem] uppercase tracking-wider font-bold flex items-center gap-1 py-1"
                    >
                      <span className="material-symbols-outlined text-[1.1rem]">chat</span>
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. Cards Grid Section */}
      <FadeIn>
        <section className="w-full py-20 lg:py-28 bg-[#F8F8F6]">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="mb-10">
              <span className="font-label-caps text-xs uppercase tracking-widest text-[#071C51]/70 font-semibold block mb-1">
                Showing {filteredDevelopments.length} Projects
              </span>
              <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-[#071C51]">
                {activeFilter === "All" ? "All Development Mandates" : activeFilter}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDevelopments.map((dev) => (
                <div 
                  key={dev.id} 
                  className={`bg-white border transition-all flex flex-col p-4 rounded-sm ${
                    dev.isCurrentActive 
                      ? "border-primary shadow-lg ring-2 ring-primary/30" 
                      : "border-[#D9D9D7] shadow-sm hover:shadow-xl"
                  }`}
                >
                  <div className="relative w-full h-[260px] bg-[#E0E0DE] mb-6 rounded-sm border border-[#D9D9D7] overflow-hidden group">
                    <Image 
                      src={dev.image} 
                      alt={dev.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {dev.badge && (
                      <div className={`absolute top-3 left-3 px-3 py-1 font-label-caps text-[0.65rem] uppercase font-bold tracking-widest shadow-md ${
                        dev.isCurrentActive 
                          ? "bg-primary text-[#071C51]" 
                          : "bg-[#071C51] text-white"
                      }`}>
                        {dev.badge}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow px-2 pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[0.7rem] uppercase tracking-widest font-bold text-primary font-label-caps">
                        {dev.developer}
                      </span>
                      <span className="text-[0.68rem] text-[#05143A]/60 font-semibold">
                        {dev.specs}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-[1.35rem] font-bold text-[#071C51] mb-2 leading-tight">
                      {dev.title}
                    </h3>
                    
                    <p className="font-body-sm text-[0.85rem] text-[#05143A]/80 mb-3 font-semibold uppercase tracking-wider">
                      Location: {dev.location}
                    </p>
                    
                    <p className="font-body-sm text-[0.95rem] text-[#05143A] leading-relaxed mb-6 line-clamp-3">
                      {dev.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-[#D9D9D7]/60">
                      <p className="font-label-sm text-[0.9rem] text-[#071C51] font-bold mb-4">
                        {dev.price}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {dev.projectUrl && dev.projectUrl !== "#" ? (
                          <Link 
                            href={dev.projectUrl}
                            className="font-label-sm text-[0.9rem] text-[#012498] font-bold flex items-center hover:underline"
                          >
                            Explore Project <span className="ml-1 text-[1.1rem]">→</span>
                          </Link>
                        ) : null}

                        {dev.brochureUrl && dev.brochureUrl !== "#" ? (
                          <a 
                            href={dev.brochureUrl}
                            download={`${dev.title.replace(/\s+/g, '_')}_Brochure.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-label-sm text-[0.85rem] text-primary hover:text-[#071C51] font-bold flex items-center gap-1 transition-colors"
                          >
                            <span className="material-symbols-outlined text-[1rem]">download</span>
                            <span>Brochure (PDF)</span>
                          </a>
                        ) : (
                          <a 
                            href="https://wa.me/971506321644"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-label-sm text-[0.85rem] text-primary hover:text-[#071C51] font-bold flex items-center gap-1 transition-colors"
                          >
                            <span>Request Details</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 5. Developer Partnerships Marquee */}
      <FadeIn>
        <section className="w-full py-xl bg-surface-container border-y border-outline-variant/20 overflow-hidden flex flex-col items-center justify-center">
          <span className="font-label-caps text-[0.65rem] uppercase tracking-[0.3em] text-on-surface-variant mb-md">Official Developer Partnerships</span>
          <div className="relative w-full flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">TEAM ARCON</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">EMAAR</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">NAKHEEL</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">OMNIYAT</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAR GLOBAL</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">BINGHATTI</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAMAC</span>
            </div>
            <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] absolute top-0 left-full">
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">TEAM ARCON</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">EMAAR</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">NAKHEEL</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">OMNIYAT</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAR GLOBAL</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">BINGHATTI</span>
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAMAC</span>
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
