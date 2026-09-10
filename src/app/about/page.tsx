import FadeIn from "@/components/FadeIn";
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-start bg-surface-container-highest overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{ backgroundImage: 'url("/corporate_background.jpg")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <div className="relative z-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full max-w-[1600px] mx-auto">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-md">The Private Office</span>
            <h1 className="font-headline-xl text-[2.5rem] md:text-[4.5rem] uppercase font-bold text-on-surface leading-tight mb-lg">
              Premium Real Estate <br/>
              Solutions Across <span className="text-primary">UAE</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white max-w-[42rem] font-medium mb-lg">
              We provide access to high-value property investments and complete real estate services.
            </p>
            <ul className="text-white font-body-md text-body-md mb-xl flex flex-col gap-sm">
              <li className="flex items-center gap-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Property buying, selling &amp; leasing</li>
              <li className="flex items-center gap-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Off-plan &amp; ready properties</li>
              <li className="flex items-center gap-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Investment advisory</li>
              <li className="flex items-center gap-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>Portfolio management</li>
            </ul>
            <Link href="/contact" className="inline-flex bg-primary text-on-primary font-label-caps text-label-caps uppercase px-2xl py-md font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all items-center justify-center gap-sm">
              Explore Our Vision
              <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* 2. Strategic Direction with Sheikh Image */}
      <FadeIn>
        <section className="w-full py-4xl bg-surface-container-lowest">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            
            <div className="flex flex-col gap-md">
              <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl bg-surface-container-high flex items-center justify-center text-center p-md">
                <Image 
                  src="/about-image.png" 
                  alt="Sheikh Sultan Bin Nasser Al Humaid Al Nuaimi" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="text-center pt-sm border-t border-primary/20">
                <span className="font-headline-sm uppercase text-primary tracking-[0.2em] font-semibold block">Sheikh Sultan Bin Nasser Al Nuaimi</span>
              </div>
            </div>

            <div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Strategic Direction</span>
              <h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface mb-lg">
                Modern <span className="text-primary">Leadership</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-md">
                At the heart of a dynamic and evolving portfolio, The Private Office serves as a central force for strategic direction, enterprise development, and long-term value creation.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-xl">
                Grounded in a philosophy of sustainable growth and guided by a forward-looking regional vision, the Office cultivates businesses that respond to market needs while maintaining the highest standards of quality, governance, and service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="border-l-2 border-primary pl-md">
                  <h4 className="font-headline-sm uppercase text-on-surface mb-xs font-semibold">Heritage</h4>
                  <p className="font-body-sm text-on-surface-variant">Rooted in values passed down through generations, built on trust.</p>
                </div>
                <div className="border-l-2 border-primary pl-md">
                  <h4 className="font-headline-sm uppercase text-on-surface mb-xs font-semibold">Vision</h4>
                  <p className="font-body-sm text-on-surface-variant">A forward-looking approach shaping opportunities for tomorrow.</p>
                </div>
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
