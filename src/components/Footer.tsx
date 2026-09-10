import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2xl mb-4xl">
          <div>
            <Image src="/Trueline.png" alt="Trueline Real Estate" width={300} height={100} className="h-24 w-auto object-contain mb-md" />
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[20rem]">
              Sovereign advisory, institutional acquisition, and prime global residential assets.
            </p>
          </div>
          
          <div className="flex items-center gap-lg">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[1.5rem]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="h-12 w-px bg-primary/40 shrink-0"></div>
            <div className="flex flex-col gap-xs">
              <p className="font-body-lg text-body-lg text-on-surface">Abu Dhabi, UAE</p>
              <p className="font-body-lg text-body-lg text-on-surface">Dubai, UAE</p>
            </div>
          </div>

          <div className="flex items-center gap-lg">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[1.5rem]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            </div>
            <div className="h-20 w-px bg-primary/40 shrink-0"></div>
            <div className="flex flex-col gap-xs">
              <a href="tel:+971506321644" className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors">+971 506321644</a>
              <a href="tel:+971503312949" className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors">+971 503312949</a>
              <a href="tel:025833786" className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors">02 5833786</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-md pt-xl border-t border-outline-variant/20">
          <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">© 2024 Trueline Real Estate Sovereign Holdings. All rights reserved.</p>
          <p className="font-label-caps text-label-caps uppercase text-primary tracking-widest">Regulated by RICS &amp; Global Private Wealth Disclosures</p>
        </div>
      </div>
    </footer>
  );
}
