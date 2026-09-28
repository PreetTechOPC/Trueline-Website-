import FadeIn from "@/components/FadeIn";
import Link from 'next/link';
import Image from 'next/image';

export default function DevelopmentsPage() {
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
            <button className="font-label-caps text-[0.8rem] uppercase tracking-widest font-bold bg-primary text-[#071C51] px-6 py-3 rounded-md whitespace-nowrap shadow-sm">
              All Developments (18)
            </button>
            <button className="font-label-caps text-[0.8rem] uppercase tracking-widest font-semibold text-on-surface-variant hover:text-on-surface hover:bg-white/5 px-6 py-3 rounded-md transition-colors whitespace-nowrap">
              Arcon Lineup (6)
            </button>
            <button className="font-label-caps text-[0.8rem] uppercase tracking-widest font-semibold text-on-surface-variant hover:text-on-surface hover:bg-white/5 px-6 py-3 rounded-md transition-colors whitespace-nowrap">
              AG Developers (7)
            </button>
            <button className="font-label-caps text-[0.8rem] uppercase tracking-widest font-semibold text-on-surface-variant hover:text-on-surface hover:bg-white/5 px-6 py-3 rounded-md transition-colors whitespace-nowrap">
              Prime Waterfront
            </button>
            <button className="font-label-caps text-[0.8rem] uppercase tracking-widest font-semibold text-on-surface-variant hover:text-on-surface hover:bg-white/5 px-6 py-3 rounded-md transition-colors whitespace-nowrap">
              Off-Market
            </button>
          </div>
        </div>
      </section>

      {/* 3. Cards Section */}
      <FadeIn>
        <section className="w-full py-24 lg:py-32 bg-[#F8F8F6]">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white border border-[#D9D9D7] shadow-sm hover:shadow-xl transition-shadow flex flex-col p-4 rounded-sm">
                <div className="relative w-full h-[260px] bg-[#E0E0DE] mb-6 rounded-sm border border-[#D9D9D7] overflow-hidden group">
                  <Image src="/dev_card_1.jpg" alt="The Arcon Horizon Sky Residences" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <h3 className="font-headline-sm text-[1.35rem] font-bold text-[#071C51] mb-2 leading-tight">The Arcon Horizon Sky Residences</h3>
                  <p className="font-body-sm text-[0.85rem] text-[#05143A]/80 mb-4 font-semibold uppercase tracking-wider">Location: Downtown / Business Bay Canal, Dubai</p>
                  <p className="font-body-sm text-[0.95rem] text-[#05143A] leading-relaxed mb-6">
                    Private plunge pools, panoramic double-height glass, and Italian joinery. 2 to 4-bed sky duplexes.
                  </p>
                  <div className="mt-auto">
                    <p className="font-label-sm text-[0.9rem] text-[#071C51] font-bold mb-4">From AED 4,200,000 · 60/40 Payment Plan</p>
                    <button className="font-label-sm text-[0.9rem] text-[#012498] font-bold flex items-center hover:underline">
                      Download Brochure (PDF) <span className="ml-1 text-[1.1rem]">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#D9D9D7] shadow-sm hover:shadow-xl transition-shadow flex flex-col p-4 rounded-sm">
                <div className="relative w-full h-[260px] bg-[#E0E0DE] mb-6 rounded-sm border border-[#D9D9D7] overflow-hidden group">
                  <Image src="/corporate_background.jpg" alt="AG Signature Terraces" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <h3 className="font-headline-sm text-[1.35rem] font-bold text-[#071C51] mb-2 leading-tight">AG Signature Terraces</h3>
                  <p className="font-body-sm text-[0.85rem] text-[#05143A]/80 mb-4 font-semibold uppercase tracking-wider">Location: Meydan / MBR City Corridor, Dubai</p>
                  <p className="font-body-sm text-[0.95rem] text-[#05143A] leading-relaxed mb-6">
                    Lagoon-facing private terraces, wellness suites, and high-yield investor allocations. 1 to 3-bed suites.
                  </p>
                  <div className="mt-auto">
                    <p className="font-label-sm text-[0.9rem] text-[#071C51] font-bold mb-4">From AED 1,850,000 · 8.4% Projected Yield</p>
                    <button className="font-label-sm text-[0.9rem] text-[#012498] font-bold flex items-center hover:underline">
                      Download Brochure (PDF) <span className="ml-1 text-[1.1rem]">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#D9D9D7] shadow-sm hover:shadow-xl transition-shadow flex flex-col p-4 rounded-sm">
                <div className="relative w-full h-[260px] bg-[#E0E0DE] mb-6 rounded-sm border border-[#D9D9D7] overflow-hidden group">
                  <Image src="/dev_hero.jpg" alt="Third featured project card" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <h3 className="font-headline-sm text-[1.35rem] font-bold text-[#071C51] mb-2 leading-tight">[ Third featured project card ]</h3>
                  <p className="font-body-sm text-[0.85rem] text-[#05143A]/80 mb-4 font-semibold uppercase tracking-wider">Location: [ Location details ]</p>
                  <p className="font-body-sm text-[0.95rem] text-[#05143A] leading-relaxed mb-6">
                    Repeat card pattern — image, location, spec line, price, brochure CTA.
                  </p>
                  <div className="mt-auto">
                    <p className="font-label-sm text-[0.9rem] text-[#071C51] font-bold mb-4">From AED [ Price ] · [ Payment Plan ]</p>
                    <button className="font-label-sm text-[0.9rem] text-[#012498] font-bold flex items-center hover:underline">
                      Download Brochure (PDF) <span className="ml-1 text-[1.1rem]">→</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

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
