import FadeIn from "@/components/FadeIn";
import Link from 'next/link';

export default function AdvisoryPage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Corporate Hero Section */}
      <FadeIn><section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center bg-surface-container-highest overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: 'url("/corporate_background.jpg")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
        <div className="relative z-20 text-center px-margin-mobile w-full max-w-[1200px]">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-md shadow-black drop-shadow-md">Market Intelligence</span>
          <h1 className="font-headline-xl text-[2.5rem] md:text-[6rem] uppercase font-bold text-on-surface shadow-black drop-shadow-2xl">
            ADVISORY
          </h1>
          <p className="font-body-lg text-body-lg text-white max-w-[42rem] mx-auto mt-lg shadow-black drop-shadow-lg font-medium">
            Institutional-grade acquisition strategy, valuation modeling, and global market research for the world&apos;s most discerning investors.
          </p>
        </div>
      </section></FadeIn>

      {/* 2. Core Services Grid */}
      <FadeIn><section className="w-full py-4xl bg-surface-container-lowest">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          
          <div className="text-center mb-2xl">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Comprehensive Solutions</span>
            <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
              OUR <span className="text-primary">EXPERTISE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            
            {/* Service 1 */}
            <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-colors p-xl flex flex-col items-start shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-lg border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-[2rem]">account_balance</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface mb-sm">
                Portfolio Management
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Strategic asset allocation and yield optimization. We construct and manage diversified real estate portfolios tailored to your specific risk and return parameters across prime global markets.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-colors p-xl flex flex-col items-start shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-lg border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-[2rem]">real_estate_agent</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface mb-sm">
                Global Mortgages
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bespoke financing structures for international UHNW buyers. Our in-house mortgage advisory manages pre-approvals, property valuations, and rate hedging directly with leading tier-1 private lenders.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-colors p-xl flex flex-col items-start shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-lg border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-[2rem]">gavel</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface mb-sm">
                Legal & Conveyancing
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Seamless transaction execution. Our dedicated legal conveyance desk prepares unified MOUs, secures No Objection Certificates (NOC), and represents you at the Land Department for title deed execution.
              </p>
            </div>

          </div>
        </div>
      </section></FadeIn>

      {/* 3. Market Intelligence & Analytics */}
      <FadeIn><section className="w-full py-4xl bg-surface-container border-y border-outline-variant/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full border-[1px] border-primary rounded-full scale-150 translate-x-1/4 -translate-y-1/4"></div>
          <div className="w-full h-full border-[1px] border-primary rounded-full scale-110 translate-x-1/4 -translate-y-1/4 absolute top-0"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            
            <div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Empirical Edge</span>
              <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface mb-lg">
                DATA-DRIVEN <span className="text-primary">DECISIONS</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-xl max-w-[32rem]">
                Our proprietary market intelligence aggregates macroeconomic indicators, granular localized transactional data, and predictive yield modeling to ensure our clients execute acquisitions ahead of the market curve.
              </p>
              <Link href="/contact" className="inline-flex bg-transparent border border-primary text-primary hover:bg-primary hover:text-on-primary font-label-caps text-label-caps uppercase px-lg py-sm font-semibold tracking-widest transition-all items-center justify-center gap-xs">
                Request Q3 Market Report
                <span className="material-symbols-outlined text-[1.1rem]">download</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-xl">
              <div className="border-l-2 border-primary pl-lg py-sm">
                <span className="font-headline-xl text-[3rem] font-bold text-on-surface block leading-none mb-xs">AED 4.2B</span>
                <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-primary">Assets Advised (2023)</span>
              </div>
              <div className="border-l-2 border-primary pl-lg py-sm">
                <span className="font-headline-xl text-[3rem] font-bold text-on-surface block leading-none mb-xs">+14.5%</span>
                <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-primary">Avg. Portfolio Yield</span>
              </div>
              <div className="border-l-2 border-primary pl-lg py-sm">
                <span className="font-headline-xl text-[3rem] font-bold text-on-surface block leading-none mb-xs">85+</span>
                <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-primary">UHNW Families Advised</span>
              </div>
              <div className="border-l-2 border-primary pl-lg py-sm">
                <span className="font-headline-xl text-[3rem] font-bold text-on-surface block leading-none mb-xs">4</span>
                <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-primary">Global Financial Hubs</span>
              </div>
            </div>

          </div>
        </div>
      </section></FadeIn>

      {/* 4. Consultation CTA */}
      <FadeIn><section className="w-full py-4xl bg-background flex flex-col items-center justify-center text-center px-margin-mobile">
        <span className="material-symbols-outlined text-[3rem] text-primary mb-md">handshake</span>
        <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface mb-md">
          INITIATE A <span className="text-primary">RELATIONSHIP</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[32rem] mb-xl">
          Engage with our Sovereign Desk for a confidential consultation regarding your real estate acquisition, divestment, or portfolio structuring requirements.
        </p>
        <Link href="/contact" className="inline-flex bg-primary text-on-primary font-label-caps text-label-caps uppercase px-2xl py-md font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all items-center justify-center gap-sm shadow-xl active:scale-95">
          Schedule Consultation
          <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
        </Link>
      </section></FadeIn>

    </main>
  );
}
