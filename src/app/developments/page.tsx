import FadeIn from "@/components/FadeIn";
import Link from 'next/link';

export default function DevelopmentsPage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Elevated Hero Section */}
      <FadeIn><section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center bg-surface-container-highest overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity" style={{ backgroundImage: 'url("/dev_hero.jpg")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
        <div className="relative z-20 text-center px-margin-mobile w-full max-w-[1200px]">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-md shadow-black drop-shadow-md">Future Living</span>
          <h1 className="font-headline-xl text-[2.5rem] md:text-[6rem] uppercase font-bold text-on-surface shadow-black drop-shadow-2xl">
            DEVELOPMENTS
          </h1>
          <p className="font-body-lg text-body-lg text-white max-w-[42rem] mx-auto mt-lg shadow-black drop-shadow-lg font-medium">
            Discover our exclusive portfolio of off-plan sovereign residences and waterfront megaprojects.
          </p>
        </div>
      </section></FadeIn>

      {/* 2. Project Filter Bar */}
      <FadeIn><section className="w-full bg-surface-container-lowest/90 border-b border-primary/20 backdrop-blur-md sticky top-20 z-30">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="flex overflow-x-auto no-scrollbar gap-lg py-md">
            <button className="font-label-caps text-label-caps uppercase tracking-widest font-semibold text-primary border-b-2 border-primary pb-xs whitespace-nowrap">
              All Projects
            </button>
            <button className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs whitespace-nowrap">
              Waterfront
            </button>
            <button className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs whitespace-nowrap">
              Skyscrapers
            </button>
            <button className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs whitespace-nowrap">
              Private Islands
            </button>
          </div>
        </div>
      </section></FadeIn>

      {/* 3. Featured Developments Grid */}
      <FadeIn><section className="w-full py-4xl bg-background">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-lg mb-2xl gap-md">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Exclusive Access</span>
              <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
                FEATURED <span className="text-primary">PROJECTS</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl">
            
            {/* Card 1 */}
            <div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg h-full">
              <div className="relative h-[400px] overflow-hidden bg-surface-container-highest">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("/dev_card_1.jpg")' }}>
                </div>
                <div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
                  Handover Q4 2027
                </div>
              </div>
              <div className="p-xl flex flex-col flex-grow justify-between">
                <div>
                  <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-xs">By Emaar Properties</span>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mb-md">
                    The Oasis Waterfront Mansions
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-lg">
                    An ultra-luxury residential sanctuary featuring bespoke 5 to 6-bedroom waterfront mansions with unparalleled privacy, zero-radius infinity pools, and expansive architectural mastery.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-md py-md border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-xl">
                    <div>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-primary mb-xxs">Starting Price</span>
                      <span className="font-semibold text-on-surface">AED 18,500,000</span>
                    </div>
                    <div>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-primary mb-xxs">Location</span>
                      <span className="font-semibold text-on-surface">Dubai Water Canal</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps uppercase py-md font-semibold tracking-widest hover:bg-primary-fixed-dim active:scale-[0.99] transition-all flex items-center justify-center gap-xs">
                  Register Interest
                  <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg h-full">
              <div className="relative h-[400px] overflow-hidden bg-surface-container-highest">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOU5RHF9VBSss3od2vl48IkxoR7Kw2Vti4jQTbC7il1QqnG0BJ2ln2HD4SIAtFhypdLVJqJRuXXpjslebClv78GxcxOCiG_PHcvQ_SyF3cZezP7qW6bfp-BJPf8ceCGlPJmKg3LVxSz5e__NlLpV07cuGup_yLmB1G129BL8IWsqhed8racA10BJE3mtA0Bp2HYccw3LBeGOCQI2ryHniPdeT5bBJzF9ThioocccMsLQ7fyeaVBoWCzg")' }}>
                </div>
                <div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
                  Handover Q2 2026
                </div>
              </div>
              <div className="p-xl flex flex-col flex-grow justify-between">
                <div>
                  <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-xs">By Omniyat</span>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mb-md">
                    Orla Dorchester Collection
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-lg">
                    A crowning architectural achievement on the apex of Palm Jumeirah. Bespoke simplex and duplex residences managed exclusively by the Dorchester Collection.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-md py-md border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-xl">
                    <div>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-primary mb-xxs">Starting Price</span>
                      <span className="font-semibold text-on-surface">AED 32,000,000</span>
                    </div>
                    <div>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-primary mb-xxs">Location</span>
                      <span className="font-semibold text-on-surface">Palm Jumeirah</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps uppercase py-md font-semibold tracking-widest hover:bg-primary-fixed-dim active:scale-[0.99] transition-all flex items-center justify-center gap-xs">
                  Register Interest
                  <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section></FadeIn>

      {/* 4. Developer Partnerships Marquee */}
      <FadeIn><section className="w-full py-xl bg-surface-container border-y border-outline-variant/20 overflow-hidden flex flex-col items-center justify-center">
        <span className="font-label-caps text-[0.65rem] uppercase tracking-[0.3em] text-on-surface-variant mb-md">Official Developer Partnerships</span>
        <div className="relative w-full flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">EMAAR</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">NAKHEEL</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">OMNIYAT</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAR GLOBAL</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">BINGHATTI</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAMAC</span>
          </div>
          <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] absolute top-0 left-full">
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">EMAAR</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">NAKHEEL</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">OMNIYAT</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAR GLOBAL</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">BINGHATTI</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest font-bold text-on-surface/40 mx-2xl">DAMAC</span>
          </div>
        </div>
      </section></FadeIn>

    </main>
  );
}
