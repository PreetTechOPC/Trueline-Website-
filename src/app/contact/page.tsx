import FadeIn from "@/components/FadeIn";
export default function ContactPage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 2. Global Offices Grid */}
      <FadeIn><section className="w-full py-4xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
            
            {/* Dubai */}
            <div className="bg-background border border-outline-variant/20 hover:border-primary/50 transition-colors p-xl flex flex-col group">
              <span className="font-headline-md text-headline-md font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors">Dubai</span>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary mb-lg">Global Headquarters</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">DIFC Gate Precinct 4, Level 18</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Dubai, United Arab Emirates</p>
              <div className="mt-auto pt-lg border-t border-outline-variant/10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[1rem] text-primary">call</span>
                <a href="tel:+97143128800" className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors">+971 4 312 8800</a>
              </div>
            </div>

            {/* London */}
            <div className="bg-background border border-outline-variant/20 hover:border-primary/50 transition-colors p-xl flex flex-col group">
              <span className="font-headline-md text-headline-md font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors">London</span>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary mb-lg">European Desk</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">14 Grosvenor Square</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Mayfair, London W1K 6LF, UK</p>
              <div className="mt-auto pt-lg border-t border-outline-variant/10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[1rem] text-primary">call</span>
                <a href="tel:+442079460912" className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors">+44 20 7946 0912</a>
              </div>
            </div>

            {/* New York */}
            <div className="bg-background border border-outline-variant/20 hover:border-primary/50 transition-colors p-xl flex flex-col group">
              <span className="font-headline-md text-headline-md font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors">New York</span>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary mb-lg">Americas Desk</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">767 Fifth Avenue</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Manhattan, NY 10153, USA</p>
              <div className="mt-auto pt-lg border-t border-outline-variant/10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[1rem] text-primary">call</span>
                <a href="tel:+12125550198" className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors">+1 212 555 0198</a>
              </div>
            </div>

            {/* Singapore */}
            <div className="bg-background border border-outline-variant/20 hover:border-primary/50 transition-colors p-xl flex flex-col group">
              <span className="font-headline-md text-headline-md font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors">Singapore</span>
              <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary mb-lg">Asia Pacific Desk</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">Marina Bay Financial Centre</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Tower 2, Singapore 018983</p>
              <div className="mt-auto pt-lg border-t border-outline-variant/10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[1rem] text-primary">call</span>
                <a href="tel:+6567182000" className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors">+65 6718 2000</a>
              </div>
            </div>

          </div>
        </div>
      </section></FadeIn>

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
                <a href="tel:+97143128800" className="group flex items-center gap-md bg-surface-container border border-outline-variant/30 hover:border-primary/50 p-lg transition-all w-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant block mb-xxs">Direct Line</span>
                    <span className="font-label-lg font-semibold text-on-surface">+971 4 312 8800</span>
                  </div>
                </a>

                <a href="https://wa.me/97143128800" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-md bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366]/50 p-lg transition-all w-full">
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
                  <label className="font-label-caps text-[0.65rem] uppercase tracking-widest text-on-surface-variant">Area of Interest</label>
                  <select className="bg-background border-b border-outline-variant/50 px-sm py-sm text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled selected>Select an option</option>
                    <option value="portfolio">Portfolio Management</option>
                    <option value="developments">Off-Plan Developments</option>
                    <option value="mortgage">Global Mortgages</option>
                    <option value="private-office">Private Office Access</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <button type="button" className="mt-md bg-primary text-on-primary font-label-caps text-label-caps uppercase px-xl py-md font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-xs">
                  Request Callback
                  <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section></FadeIn>

    </main>
  );
}
