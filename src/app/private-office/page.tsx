import FadeIn from "@/components/FadeIn";

export default function PrivateOfficePage() {
  return (
    <main className="w-full pt-24 bg-[#030914] flex flex-col min-h-screen text-white">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative w-full py-16 lg:py-24 overflow-hidden border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-6 font-semibold">
              CONFIDENTIAL FIDUCIARY ADVISORY
            </span>
            <h1 className="font-display text-[3rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] font-bold text-white mb-6">
              Discretion as a Standard.<br />
              <span className="text-primary">Access Without Limits.</span>
            </h1>
            <p className="font-body-lg text-[1.2rem] text-white/80 leading-relaxed max-w-[48rem]">
              Trueline Private Office represents family offices, sovereign funds, and ultra-high-net-worth principals seeking exclusive, unlisted real estate acquisitions across the UAE and global capitals.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 2. Three Cards Grid */}
      <FadeIn>
        <section className="w-full py-16 bg-[#030914] border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#07132D] border border-[#0F224A] p-8 rounded-sm shadow-xl hover:bg-[#0A1A3A] transition-colors">
                <h3 className="font-headline-sm text-[1.25rem] font-bold text-primary mb-3">Trophy Procurement</h3>
                <p className="font-body-sm text-white/70 leading-relaxed text-[0.95rem]">
                  Unlisted waterfront estates on Palm Jumeirah, private island parcels, and off-market branded penthouses directly from principal owners.
                </p>
              </div>

              <div className="bg-[#07132D] border border-[#0F224A] p-8 rounded-sm shadow-xl hover:bg-[#0A1A3A] transition-colors">
                <h3 className="font-headline-sm text-[1.25rem] font-bold text-primary mb-3">Strategic Capital</h3>
                <p className="font-body-sm text-white/70 leading-relaxed text-[0.95rem]">
                  Full-floor residential buyouts, forward-funding development ventures, and stress-tested financial underwriting for institutional portfolios.
                </p>
              </div>

              <div className="bg-[#07132D] border border-[#0F224A] p-8 rounded-sm shadow-xl hover:bg-[#0A1A3A] transition-colors">
                <h3 className="font-headline-sm text-[1.25rem] font-bold text-primary mb-3">Fiduciary Conveyance</h3>
                <p className="font-body-sm text-white/70 leading-relaxed text-[0.95rem]">
                  Absolute anonymity through DIFC/ADGM SPVs, custodial escrow mechanisms, and turnkey legal conveyance from mandate to title deed.
                </p>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. Restricted Asset Dossier */}
      <FadeIn>
        <section className="w-full py-20 lg:py-32 bg-[#030914]">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="font-label-caps text-[0.85rem] uppercase tracking-[0.25em] text-primary font-bold mb-6">
                  RESTRICTED ASSET DOSSIER
                </span>
                <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-bold text-white mb-6">
                  Palm Jumeirah Ultra-Prime Waterfront Compound <span className="text-white/40 text-[1.5rem] md:text-[2rem] font-medium align-middle ml-2">(28,000 sqft plot)</span>
                </h2>
                <p className="font-body-md text-[1.05rem] text-white/60 leading-relaxed mb-10 max-w-[36rem]">
                  Detailed underwriting packs, site feasibility decks, and private island releases require an executed non-disclosure agreement and verified principal identification.
                </p>
                <a href="https://wa.me/97143128800" target="_blank" rel="noopener noreferrer" className="font-label-caps text-[0.9rem] uppercase tracking-widest font-bold text-white hover:text-primary transition-colors flex items-center">
                  Execute NDA & Unlock
                </a>
              </div>

              <div className="lg:col-span-6">
                {/* Locked Blurred Wireframe Card */}
                <div className="relative w-full aspect-[4/3] bg-[#07132D]/50 border border-white/10 rounded-sm overflow-hidden flex flex-col justify-center items-center backdrop-blur-sm group cursor-not-allowed">
                  {/* Subtle blurred shapes in background */}
                  <div className="absolute inset-0 bg-[url('/corporate_background.jpg')] bg-cover bg-center opacity-30 blur-2xl scale-110"></div>
                  <div className="absolute inset-0 bg-[#030914]/60 backdrop-blur-md"></div>
                  
                  {/* Lock icon overlay */}
                  <div className="relative z-10 flex flex-col items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-[4rem] text-white mb-4">lock</span>
                    <span className="font-label-caps text-[0.8rem] uppercase tracking-widest text-white">Dossier Locked</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
