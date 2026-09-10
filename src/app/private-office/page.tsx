import FadeIn from "@/components/FadeIn";
export default function PrivateOfficePage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Ultra-Exclusive Hero Section */}
      <FadeIn><section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale contrast-150" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7qcrKhIzAya82A0rvBIgqxySewH81PgF2Ji8ppbTkNZcj4zxfULb31Z2Tmo4xPgpn_l1fz-gQwCgb5u3TnkKpDx-TJ8m1TTDYcfHQ4TbdmLLzq3NbXu1sD-jZP8MtQpkyEwwBG5iApYx4O8mdth-SfVVOZSkEJQIMHkhQ3yzrRyo3xmtkph0Nrpch8ScxPl-CwsPOCwuhD4vDOnFNzadKcOhhRIhfYix44RPEpRE2M63Yfk15Adx75g")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
        <div className="relative z-20 text-center px-margin-mobile w-full max-w-[1200px]">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.4em] text-on-surface-variant block mb-lg">Invitation Only</span>
          <h1 className="font-headline-xl text-[2.5rem] md:text-[5rem] lg:text-[7rem] uppercase font-bold tracking-widest text-on-surface shadow-black drop-shadow-2xl">
            PRIVATE <span className="font-bold text-primary">OFFICE</span>
          </h1>
          <div className="w-px h-16 bg-primary/50 mx-auto mt-xl mb-xl"></div>
          <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant max-w-[42rem] mx-auto mt-lg font-medium leading-loose">
            Where the world&apos;s most significant real estate transactions occur in absolute silence.
          </p>
        </div>
      </section></FadeIn>

      {/* 2. The Private Office Manifesto */}
      <FadeIn><section className="w-full py-4xl bg-background border-b border-outline-variant/10">
        <div className="max-w-[1000px] mx-auto px-margin-mobile text-center">
          <p className="font-body-lg text-[1.5rem] md:text-[2rem] text-on-surface-variant font-bold leading-relaxed">
            The Trueline Private Office operates strictly beyond the public domain. We cater exclusively to Sovereign Wealth Funds, Royal Families, and Ultra-High-Net-Worth Individuals requiring bespoke acquisition strategies, absolute anonymity, and off-market asset curation.
          </p>
        </div>
      </section></FadeIn>

      {/* 3. Core Capabilities Grid */}
      <FadeIn><section className="w-full py-4xl bg-surface-container-lowest">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
            
            {/* Capability 1 */}
            <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-2xl flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-outline-variant/20">
              <span className="material-symbols-outlined text-[2.5rem] text-primary mb-lg font-bold">visibility_off</span>
              <h3 className="font-label-caps text-label-caps uppercase tracking-[0.2em] font-semibold text-on-surface mb-md">
                Absolute Discretion
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Complete anonymity is the cornerstone of our Private Office. All acquisitions, divestments, and structuring are handled through secure, confidential channels to protect client identity at all costs.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-2xl flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-outline-variant/20">
              <span className="material-symbols-outlined text-[2.5rem] text-primary mb-lg font-bold">diamond</span>
              <h3 className="font-label-caps text-label-caps uppercase tracking-[0.2em] font-semibold text-on-surface mb-md">
                Off-Market Curation
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Access to trophy assets, private islands, and ultra-prime penthouses that will never reach the public market. We connect sellers of ultra-luxury real estate directly with qualified global capital.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="bg-surface-container hover:bg-surface-container-high transition-colors p-2xl flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[2.5rem] text-primary mb-lg font-bold">corporate_fare</span>
              <h3 className="font-label-caps text-label-caps uppercase tracking-[0.2em] font-semibold text-on-surface mb-md">
                Family Office Structuring
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Seamless coordination with international tax advisors, legal entities, and wealth managers to ensure real estate portfolios are acquired and structured optimally across multiple jurisdictions.
              </p>
            </div>

          </div>
        </div>
      </section></FadeIn>

      {/* 4. "Request Access" VIP Application */}
      <FadeIn><section className="w-full py-4xl bg-surface-container relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity grayscale" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4jj-8wvfVwqTdn4EriFV3pCMJ1ebzR-BXtyOzV1F_-jZsGLgTmcgqePfMjPzd5awVh0Hh_6sH8DXvfT6WmuRZAPA7PfBV8SGoEyfi8x9fnj84wLhmE-gRWMcdFbLYwcjAc82kDeqjJZx7m701xCu2gPnp5f32Em6p970Nv3HwzmOKiFSfdkJ6BAGeXUxS1DBYTM7mxF38uyUIgW7JGmfkLPBZy1E1eW8g-rVUUqx1YeBohP-p2nq-yw")' }}></div>
        <div className="absolute inset-0 bg-background/80"></div>
        
        <div className="relative z-10 max-w-[800px] w-full mx-auto px-margin-mobile text-center">
          <span className="material-symbols-outlined text-[3rem] text-primary mb-md font-bold">key</span>
          <h2 className="font-headline-lg text-[2rem] md:text-[3.5rem] uppercase font-bold text-on-surface mb-md tracking-widest">
            REQUEST <span className="font-bold text-primary">ACCESS</span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-2xl">
            Membership to the Trueline Private Office is strictly vetted. Please submit a preliminary enquiry to arrange a confidential discussion with our Managing Partners.
          </p>
          
          <div className="bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-md p-2xl flex flex-col gap-lg items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-lg">
              <input type="text" placeholder="Principal Name / Representative" className="w-full bg-transparent border-b border-outline-variant/50 px-sm py-sm text-on-surface font-body-sm focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40 text-center md:text-left" />
              <input type="email" placeholder="Secure Email Address" className="w-full bg-transparent border-b border-outline-variant/50 px-sm py-sm text-on-surface font-body-sm focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40 text-center md:text-left" />
            </div>
            <button className="mt-md bg-transparent border border-primary text-primary hover:bg-primary hover:text-on-primary font-label-caps text-label-caps uppercase px-2xl py-md font-semibold tracking-widest transition-all">
              Submit Enquiry
            </button>
            <span className="font-label-caps text-[0.6rem] uppercase tracking-widest text-on-surface-variant mt-sm">All submissions are protected by NDA</span>
          </div>
        </div>
      </section></FadeIn>

    </main>
  );
}
