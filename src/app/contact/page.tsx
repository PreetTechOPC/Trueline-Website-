import FadeIn from "@/components/FadeIn";
export default function ContactPage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Hero Header */}
      <FadeIn>
        <section className="relative w-full pt-16 pb-12 bg-background border-b border-outline-variant/10">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-3 font-semibold">
              GLOBAL PRESENCE &amp; PRIVATE CONCIERGE
            </span>
            <h1 className="font-display text-[2.5rem] md:text-[3.75rem] lg:text-[4.25rem] font-bold text-on-surface leading-tight">
              Dubai Global <span className="text-primary">Headquarters</span>
            </h1>
            <p className="font-body-lg text-[1.05rem] text-on-surface-variant max-w-[42rem] mt-4 leading-relaxed">
              Operating from the Dubai International Financial Centre (DIFC), Trueline orchestrates high-value transactions, developer mandates, and private wealth advisory across the UAE.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 2. Global Headquarters Feature Cards */}
      <FadeIn>
        <section className="w-full py-16 lg:py-20 bg-surface-container-lowest border-b border-outline-variant/10">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Physical Location */}
              <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all p-8 md:p-10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[1.4rem]">location_on</span>
                  </div>
                  <span className="font-label-caps text-[0.68rem] uppercase tracking-widest text-primary font-semibold block mb-1">
                    GLOBAL HEADQUARTERS
                  </span>
                  <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface mb-4">
                    Dubai DIFC
                  </h3>
                  <p className="font-body-md text-[0.95rem] text-on-surface-variant leading-relaxed">
                    DIFC Gate Precinct 4, Level 18<br />
                    Dubai International Financial Centre<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant/80">
                    Prime Financial District
                  </span>
                </div>
              </div>

              {/* Direct Communications */}
              <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all p-8 md:p-10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[1.4rem]">call</span>
                  </div>
                  <span className="font-label-caps text-[0.68rem] uppercase tracking-widest text-primary font-semibold block mb-1">
                    SOVEREIGN DESK
                  </span>
                  <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface mb-4">
                    Direct Contact
                  </h3>
                  <div className="flex flex-col gap-3 font-body-md text-[0.95rem]">
                    <a href="tel:+971506321644" className="text-on-surface hover:text-primary transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[1rem]">call</span>
                      <span className="font-semibold">+971 50 632 1644</span>
                    </a>
                    <a href="https://wa.me/971506321644" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline flex items-center gap-2">
                      <span className="material-symbols-outlined text-[1rem]">chat</span>
                      <span className="font-semibold">WhatsApp Concierge</span>
                    </a>
                    <a href="mailto:concierge@trueline.com" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[1rem]">mail</span>
                      <span>concierge@trueline.com</span>
                    </a>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant/80">
                    Direct Concierge Access
                  </span>
                </div>
              </div>

              {/* Operating Hours & Standards */}
              <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all p-8 md:p-10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[1.4rem]">schedule</span>
                  </div>
                  <span className="font-label-caps text-[0.68rem] uppercase tracking-widest text-primary font-semibold block mb-1">
                    CLIENT SERVICES
                  </span>
                  <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface mb-4">
                    Executive Hours
                  </h3>
                  <p className="font-body-md text-[0.95rem] text-on-surface-variant leading-relaxed mb-3">
                    Monday – Friday: 9:00 AM – 6:00 PM GST<br />
                    Saturday – Sunday: Sovereign Desk On-Call
                  </p>
                  <p className="font-body-sm text-[0.8rem] text-on-surface-variant/80">
                    Private consultations available by prior appointment.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary font-semibold">
                    Regulated Brokerage (RICS &amp; DLD)
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. Direct Concierge & Inquiry Form */}
      <FadeIn><section className="w-full py-4xl bg-background relative">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4xl">
            
            {/* Left: Direct Contact */}
            <div className="flex flex-col justify-center">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Immediate Assistance</span>
              <h2 className="font-headline-lg text-[2rem] md:text-[2.5rem] uppercase font-bold text-on-surface mb-lg">
                DIRECT <span className="font-semibold text-primary">CONCIERGE</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-2xl max-w-[32rem]">
                For immediate assistance regarding bespoke property acquisition, portfolio management, or off-market access, please connect directly with our Sovereign Desk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-lg">
                <a href="tel:+971506321644" className="group flex items-center gap-md bg-surface-container border border-outline-variant/30 hover:border-primary/50 p-lg transition-all w-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant block mb-xxs">Direct Line</span>
                    <span className="font-label-lg font-semibold text-on-surface">+971 50 632 1644</span>
                  </div>
                </a>

                <a href="https://wa.me/971506321644" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-md bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366]/50 p-lg transition-all w-full">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant block mb-xxs">WhatsApp Concierge</span>
                    <span className="font-label-lg font-semibold text-on-surface">Message Now</span>
                  </div>
                </a>
              </div>
              
              <div className="mt-2xl">
                <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant block mb-sm">General Inquiries</span>
                <a href="mailto:concierge@trueline.com" className="font-label-lg text-primary hover:underline underline-offset-4">concierge@trueline.com</a>
              </div>
            </div>

            {/* Right: Secure Form */}
            <div className="bg-surface-container-highest p-2xl md:p-4xl border border-outline-variant/20">
              <h3 className="font-headline-sm text-headline-sm uppercase font-semibold text-on-surface mb-xs">Submit an Inquiry</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl">A senior portfolio manager will contact you within 24 hours.</p>
              
              <form className="flex flex-col gap-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">First Name</label>
                    <input type="text" className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">Last Name</label>
                    <input type="text" className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input type="email" className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">Phone Number (Optional)</label>
                  <input type="tel" className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors" />
                </div>
                
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">Inquiry Type</label>
                  <select defaultValue="" className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled>Select inquiry type</option>
                    <option value="developer-lineup">Developer Lineup</option>
                    <option value="off-market">Off-Market Acquisition</option>
                    <option value="sovereign">Sovereign Advisory</option>
                  </select>
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">Capital Allocation</label>
                  <select defaultValue="" className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled>Select tier</option>
                    <option value="2m-5m">AED 2M-5M</option>
                    <option value="5m-15m">AED 5M-15M</option>
                    <option value="15m-40m">AED 15M-40M</option>
                    <option value="40m-plus">AED 40M+</option>
                  </select>
                </div>

                <button type="button" className="mt-md bg-primary text-on-primary font-label-caps text-label-caps uppercase px-xl py-md font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-xs">
                  Request Callback
                  <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                </button>
                <p className="font-body-sm text-[0.75rem] text-on-surface-variant text-center mt-2">
                  Submissions route directly to the Sovereign Desk (+971 50 632 1644).
                </p>
              </form>
            </div>

          </div>
        </div>
      </section></FadeIn>

    </main>
  );
}
