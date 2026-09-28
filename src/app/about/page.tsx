import FadeIn from "@/components/FadeIn";
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative w-full bg-background pt-24 pb-12 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Subtle gradient glow in background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="flex flex-col items-start max-w-[48rem]">
              <div className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary mb-6 font-semibold">
                ESTABLISHED 2019 • DUBAI DIFC
              </div>
              <h1 className="font-display text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] tracking-tight font-bold text-on-surface mb-6">
                The Quiet Force<br />
                <span className="text-primary">Behind the Skyline</span>
              </h1>
              <p className="font-body-lg text-[1.1rem] text-on-surface-variant leading-relaxed">
                For years we operated behind closed doors — orchestrating land acquisitions and advising on site viability. That quiet mastery now steps into the light.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Stats Bar */}
      <FadeIn>
        <div className="w-full bg-surface-container-lowest border-y border-outline/20">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3">
            
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-outline/20 p-10 md:p-12 lg:px-16">
              <span className="font-headline-xl text-[2.5rem] font-bold text-primary mb-2">2019</span>
              <span className="font-label-caps text-[0.75rem] uppercase tracking-widest text-on-surface-variant">INCEPTION & FOUNDATION</span>
            </div>
            
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-outline/20 p-10 md:p-12 lg:px-16">
              <span className="font-headline-xl text-[2.5rem] font-bold text-primary mb-2">OFFICIAL</span>
              <span className="font-label-caps text-[0.75rem] uppercase tracking-widest text-on-surface-variant">DEVELOPER ALLIANCES</span>
            </div>
            
            <div className="flex flex-col p-10 md:p-12 lg:px-16">
              <span className="font-headline-xl text-[2.5rem] font-bold text-primary mb-2">ULTRA-PRIME</span>
              <span className="font-label-caps text-[0.75rem] uppercase tracking-widest text-on-surface-variant">ASSET CLASSIFICATION</span>
            </div>

          </div>
        </div>
      </FadeIn>

      {/* 2. Founding Story & Leadership */}
      <FadeIn>
        <section className="w-full py-4xl bg-surface-container-lowest">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-2xl items-start">
            
            {/* Left Column: Founding Story */}
            <div className="lg:col-span-7 flex flex-col gap-2xl">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-md font-semibold">The Quiet Force Behind the Skyline</span>
                
                <div className="border-l-2 border-primary pl-md mb-lg">
                  <p className="font-headline-sm text-[1.4rem] text-primary italic font-medium leading-relaxed">
                    "Founded in 2019. Built on quiet execution, now defining the modern skyline."
                  </p>
                </div>
                
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-md">
                  True luxury rarely announces itself — it creates an unmistakable presence. Founded in 2019, Trueline entered the UAE real estate landscape with a singular focus: master the market from the inside out. For years, we operated behind closed doors, orchestrating prime land acquisitions, advising on site viability, and quietly bringing landmark residential concepts to life without the noise of public fanfare.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-2xl">
                  Our reputation wasn't built on billboards; it was forged through the private trust of those who shape cities.
                </p>
              </div>
              
              <div>
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-md font-semibold">A New Chapter in Modern Living</span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  That quiet mastery now steps into the light. Leveraging years of off-market execution, Trueline has officially aligned with visionary pioneers, welcoming Arcon and AG Developers into our exclusive development lineup — bridging architectural sophistication with private wealth access.
                </p>
              </div>
            </div>

            {/* Right Column: Leadership Quote & Image */}
            <div className="lg:col-span-5 flex flex-col gap-lg">
              <div className="relative h-[450px] w-full rounded-sm overflow-hidden shadow-2xl bg-surface-container-high flex items-center justify-center text-center">
                <Image 
                  src="/about-image.png" 
                  alt="Leadership" 
                  fill 
                  className="object-cover transition-all duration-700" 
                />
              </div>
              
              <div className="bg-surface-container border border-outline/20 p-lg lg:p-xl -mt-12 relative z-10 ml-4 mr-4 lg:ml-8 lg:-ml-12 shadow-2xl">
                <div className="border-l-2 border-primary pl-md mb-md">
                  <p className="font-headline-sm text-[1.15rem] text-primary italic font-medium leading-relaxed">
                    "True leadership is not about adapting to the skyline — it is about having the courage to build what comes next."
                  </p>
                </div>
                <p className="font-body-sm text-[0.95rem] text-on-surface-variant leading-relaxed">
                  Our strategic direction is guided by purposeful innovation, where architectural ambition meets sustainable capital growth — looking beyond market cycles toward enduring value.
                </p>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 3. Progress with Responsibility */}
      <FadeIn>
        <section className="w-full py-4xl bg-surface-container border-y border-outline-variant/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">ESG & Social Impact</span>
            <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface mb-xl">
              Progress with <span className="text-primary">Responsibility</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[48rem] mx-auto mb-2xl">
              Sustainable value creation remains central to the Office’s philosophy. Its commitment to ESG principles, transparent governance, and environmental stewardship reflects a broader belief that true leadership is measured by the lasting impact it leaves behind.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-md border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[2rem]">eco</span>
                </div>
                <h4 className="font-headline-sm uppercase font-semibold text-on-surface">Environmental</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-md border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[2rem]">groups</span>
                </div>
                <h4 className="font-headline-sm uppercase font-semibold text-on-surface">Social Impact</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-md border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[2rem]">policy</span>
                </div>
                <h4 className="font-headline-sm uppercase font-semibold text-on-surface">Governance</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-md border border-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[2rem]">trending_up</span>
                </div>
                <h4 className="font-headline-sm uppercase font-semibold text-on-surface">Sustainability</h4>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. Consultation CTA */}
      <FadeIn>
        <section className="w-full py-4xl bg-background flex flex-col items-center justify-center text-center px-margin-mobile">
          <span className="material-symbols-outlined text-[3rem] text-primary mb-md">forum</span>
          <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface mb-md">
            INITIATE A <span className="text-primary">RELATIONSHIP</span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[32rem] mb-xl">
            For partnership discussions, investment opportunities, strategic collaborations, or general enquiries, we invite you to connect with us.
          </p>
          <Link href="/contact" className="inline-flex bg-primary text-on-primary font-label-caps text-label-caps uppercase px-2xl py-md font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all items-center justify-center gap-sm shadow-xl active:scale-95">
            Confidential Enquiry
            <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
          </Link>
        </section>
      </FadeIn>

    </main>
  );
}
