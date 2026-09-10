import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl mb-4xl">
          <div className="lg:col-span-1">
            <Image src="/Trueline.png" alt="Trueline Real Estate" width={300} height={100} className="h-24 w-auto object-contain mb-md" />
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[20rem]">
              Sovereign advisory, institutional acquisition, and prime global residential assets.
            </p>
          </div>
          
          <div className="flex flex-col gap-sm lg:pl-xl">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-xs">Quick Links</span>
            <Link href="/" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
            <Link href="/developments" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Developments</Link>
            <Link href="/advisory" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Advisory</Link>
            <Link href="/private-office" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Private Office</Link>
            <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-start gap-lg lg:justify-self-end">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[1.5rem]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="h-12 w-px bg-primary/40 shrink-0 mt-1"></div>
            <div className="flex flex-col gap-xs pt-2">
              <p className="font-body-lg text-body-lg text-on-surface">Abu Dhabi, UAE</p>
              <p className="font-body-lg text-body-lg text-on-surface">Dubai, UAE</p>
            </div>
          </div>

          <div className="flex items-start gap-lg lg:justify-self-end">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[1.5rem]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            </div>
            <div className="h-20 w-px bg-primary/40 shrink-0 mt-1"></div>
            <div className="flex flex-col gap-xs pt-2">
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
