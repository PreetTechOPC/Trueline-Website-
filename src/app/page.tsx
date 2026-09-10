"use client";
import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
export default function Home() { return ( <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary"> <main className="w-full pt-20 bg-background"><div className="flex flex-col w-full text-on-surface bg-background select-none">

<FadeIn><section className="w-full bg-surface-container-lowest/90 border-b border-primary/20 backdrop-blur-md px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-xs z-30">
<div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-lg">
<a className="flex items-center gap-xxs hover:text-primary transition-colors" href="tel:+97143128800">
<span className="material-symbols-outlined text-primary text-[1rem]">call</span>
<span>+971 4 312 8800</span>
</a>
<a className="flex items-center gap-xxs hover:text-primary transition-colors" href="https://wa.me/97143128800">
<span className="material-symbols-outlined text-primary text-[1rem]">chat</span>
<span>WhatsApp Sovereign Desk</span>
</a>
<div className="hidden sm:flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span>Dubai DIFC • Abu Dhabi • London</span>
</div>
</div>
<div className="flex items-center gap-md">
<span className="hidden md:inline uppercase text-primary tracking-widest font-semibold text-[0.65rem]">Licensed RICS Brokerage</span>
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined hover:text-primary cursor-pointer text-[1.1rem]">public</span>
<span className="material-symbols-outlined hover:text-primary cursor-pointer text-[1.1rem]">share</span>
<span className="material-symbols-outlined hover:text-primary cursor-pointer text-[1.1rem]">shield</span>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full min-h-[780px] lg:min-h-[860px] flex items-center justify-center overflow-hidden -mt-20 pt-20">

<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" data-alt="Dramatic nocturnal cinematic photograph of an ultra luxury penthouse fire-pit terrace overlooking the glowing illuminated skyline of Dubai at dusk, embers of golden warmth swirling into deep midnight blue ambient sky, rich shadows, moody high contrast architectural opulence" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80")' }}>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-surface-container-lowest/90"></div>
<div className="relative z-10 w-full max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-3xl flex flex-col items-center text-center">

<div className="inline-flex items-center gap-xs px-md py-xxs bg-surface-container-high/80 border border-primary/30 backdrop-blur-md mb-md">
<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
<span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary">Sovereign &amp; Institutional Acquisitions</span>
</div>

<h1 className="font-display text-display-mobile md:text-display font-bold text-on-surface tracking-tight max-w-[64rem]">
        Your Dream Home <span className="font-bold text-primary">Awaits</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mt-sm mb-2xl">
        The Journey To Modern Sovereign Living Starts Here At Trueline Estates.
      </p>

<div className="w-full max-w-[64rem] bg-surface-container/85 border border-primary/25 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-md md:p-lg">

<div className="flex items-center justify-start sm:justify-center gap-xs border-b border-outline-variant/30 pb-md mb-md overflow-x-auto" id="search-tabs">
<button className="search-tab-btn active px-lg py-xs font-label-caps text-label-caps uppercase tracking-wider bg-primary text-on-primary font-semibold transition-all" type="button">
            Buy
          </button>
<button className="search-tab-btn px-lg py-xs font-label-caps text-label-caps uppercase tracking-wider bg-surface-container-high text-on-surface hover:bg-primary/20 transition-all" type="button">
            Rent
          </button>
<button className="search-tab-btn px-lg py-xs font-label-caps text-label-caps uppercase tracking-wider bg-surface-container-high text-on-surface hover:bg-primary/20 transition-all" type="button">
            Off Plan
          </button>
<button className="search-tab-btn px-lg py-xs font-label-caps text-label-caps uppercase tracking-wider bg-surface-container-high text-on-surface hover:bg-primary/20 transition-all" type="button">
            Commercial
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-sm items-center">

<div className="relative flex items-center min-h-[56px] bg-surface-container-lowest border border-outline-variant/50 focus-within:border-primary transition-colors">
<span className="material-symbols-outlined text-primary ml-sm text-[1.2rem] flex items-center">location_on</span>
<input className="w-full h-full bg-transparent px-sm py-sm text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-on-surface-variant/60" placeholder="Search Community or Landmark" type="text" defaultValue="Palm Jumeirah, Dubai" />
</div>

<div className="relative flex items-center min-h-[56px] bg-surface-container-lowest border border-outline-variant/50">
<select defaultValue="2" className="w-full h-full bg-transparent text-on-surface font-body-sm text-body-sm px-sm py-sm focus:outline-none cursor-pointer appearance-none">
<option className="bg-surface-container-high text-on-surface" value="">Price (All)</option>
<option className="bg-surface-container-high text-on-surface" value="1">AED 2M - 5M</option>
<option className="bg-surface-container-high text-on-surface" value="2">AED 5M - 15M</option>
<option className="bg-surface-container-high text-on-surface" value="3">AED 15M - 40M</option>
<option className="bg-surface-container-high text-on-surface" value="4">AED 40M+</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-primary pointer-events-none text-[1.1rem]">expand_more</span>
</div>

<div className="relative flex items-center min-h-[56px] bg-surface-container-lowest border border-outline-variant/50">
<select defaultValue="3" className="w-full h-full bg-transparent text-on-surface font-body-sm text-body-sm px-sm py-sm focus:outline-none cursor-pointer appearance-none">
<option className="bg-surface-container-high text-on-surface" value="">Beds &amp; Baths</option>
<option className="bg-surface-container-high text-on-surface" value="1">1 - 2 Bedrooms</option>
<option className="bg-surface-container-high text-on-surface" value="2">3 - 4 Bedrooms</option>
<option className="bg-surface-container-high text-on-surface" value="3">5+ Bedrooms</option>
<option className="bg-surface-container-high text-on-surface" value="penthouse">Penthouses</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-primary pointer-events-none text-[1.1rem]">expand_more</span>
</div>

<div className="relative flex items-center min-h-[56px] bg-surface-container-lowest border border-outline-variant/50">
<select defaultValue="villa" className="w-full h-full bg-transparent text-on-surface font-body-sm text-body-sm px-sm py-sm focus:outline-none cursor-pointer appearance-none">
<option className="bg-surface-container-high text-on-surface" value="">Property Type</option>
<option className="bg-surface-container-high text-on-surface" value="villa">Sky Villa</option>
<option className="bg-surface-container-high text-on-surface" value="mansion">Waterfront Mansion</option>
<option className="bg-surface-container-high text-on-surface" value="penthouse">Duplex Penthouse</option>
<option className="bg-surface-container-high text-on-surface" value="island">Private Island</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-primary pointer-events-none text-[1.1rem]">expand_more</span>
</div>

<button className="w-full min-h-[56px] bg-primary text-on-primary font-label-caps text-label-caps uppercase px-sm font-semibold tracking-widest hover:bg-primary-fixed-dim active:scale-[0.99] transition-all flex items-center justify-center gap-xs leading-[1.1]">
<span className="material-symbols-outlined text-[1.2rem]">search</span>
<span className="whitespace-nowrap">FIND PROPERTIES</span>
</button>
</div>
</div>
</div>
</section></FadeIn>

<div className="w-full bg-surface-container-lowest border-y border-primary/20 py-sm overflow-hidden flex items-center relative whitespace-nowrap">
<div className="flex items-center w-max animate-marquee font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
  <div className="flex items-center gap-xl px-xl flex-shrink-0 whitespace-nowrap">
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
  </div>
  <div className="flex items-center gap-xl px-xl flex-shrink-0 whitespace-nowrap">
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> WATERFRONT VILLAS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> INSTITUTIONAL INVESTMENTS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> COMMERCIAL &amp; OFF-PLAN HUBS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIME PENTHOUSES &amp; SKY MANSIONS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> PRIVATE SOVEREIGN ISLANDS</span>
    <span className="flex items-center gap-sm whitespace-nowrap"><span className="text-primary font-bold">/</span> ADVISORY ACQUISITION</span>
  </div>
</div>
</div>

<FadeIn><section className="relative w-full py-4xl overflow-hidden bg-surface">

<div className="absolute top-6 left-1/2 -translate-x-1/2 font-headline-xl text-[6rem] md:text-[10rem] lg:text-[13rem] font-extrabold uppercase text-surface-container-highest/20 tracking-tighter pointer-events-none select-none whitespace-nowrap">
      TRUSTED PARTNERS
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
<div className="text-center max-w-[56rem] mx-auto mb-3xl">
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface tracking-wide">
          YOUR TRUSTED REAL ESTATE <span className="text-primary">PARTNERS</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-sm">
          Looking for the perfect landmark residence or strategic portfolio acquisition in the UAE and premier global financial capitals? Trueline Real Estate specializes in identifying, acquiring, and structuring prime and ultra-prime assets across Dubai, Abu Dhabi, London, and New York.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-md h-[520px]">

<div className="lg:col-span-7 relative h-full group overflow-hidden border border-primary/30 bg-surface-container">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Dusk panoramic view of Dubai canal skyline with Burj Khalifa and modern skyscrapers reflecting in turquoise blue water, vibrant amber sunset glowing across futuristic glass towers" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-xl flex flex-col items-start">
<span className="px-sm py-xxs bg-primary text-on-primary font-label-caps text-label-caps uppercase font-semibold mb-xs">Principal UAE Hub</span>
<h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">Dubai</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-[28rem] mt-xs hidden sm:block">
              Downtown, Palm Jumeirah, DIFC &amp; Emirates Hills. Access exclusive confidential off-market allocations.
            </p>
<a className="inline-flex items-center gap-xs font-label-caps text-label-caps uppercase text-primary mt-sm group-hover:translate-x-1 transition-transform" href="#">
<span>Explore 140+ Dubai Holdings</span>
<span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
</a>
</div>
</div>

<div className="lg:col-span-3 relative h-full group overflow-hidden border border-outline-variant/30 bg-surface-container">
<div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Black and white modern architectural photography of Saadiyat Island and Al Maryah financial towers in Abu Dhabi, soaring geometry against dramatic sky" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-lg flex flex-col items-start">
<span className="px-sm py-xxs bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold mb-xs">Capital Hub</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">Abu Dhabi</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-[20rem] mt-xs">
              Saadiyat Cultural District &amp; Al Maryah Island trophy residences.
            </p>
<a className="inline-flex items-center gap-xs font-label-caps text-label-caps uppercase text-primary mt-sm group-hover:translate-x-1 transition-transform" href="#">
<span>View Listings</span>
<span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
</a>
</div>
</div>

<div className="lg:col-span-2 relative h-full group overflow-hidden border border-outline-variant/30 bg-surface-container">
<div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Architectural aerial view of Marjan Island in Ras Al Khaimah, clean turquoise coastline with luxury beachfront resorts and white sand beaches" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-lg flex flex-col items-start">
<span className="px-sm py-xxs bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps uppercase font-semibold mb-xs">Emerging</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">RAK</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[0.75rem] mt-xs">
              Al Marjan Island ultra-luxury gaming resorts and private coastal suites.
            </p>
<a className="inline-flex items-center gap-xs font-label-caps text-label-caps uppercase text-primary mt-sm group-hover:translate-x-1 transition-transform" href="#">
<span>Explore</span>
<span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface-container-low overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 font-headline-xl text-[6.5rem] md:text-[11rem] lg:text-[14rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      FOR SALE
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-lg mb-2xl gap-md">
<div>
<span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Curated Inventory</span>
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
            PROPERTIES AVAILABLE FOR <span className="text-primary">SALE</span>
</h2>
</div>
<div className="flex items-center justify-between w-full md:w-auto pt-sm md:pt-0 gap-xl">
<a className="font-label-caps text-label-caps uppercase text-primary hover:text-primary-fixed-dim inline-flex items-center gap-xs tracking-widest font-semibold group" href="#">
<span>VIEW ALL PROPERTIES</span>
<span className="material-symbols-outlined text-[1.1rem] group-hover:translate-x-1 transition-transform">chevron_right</span>
</a>
<div className="flex items-center gap-xs">
<button aria-label="Previous" onClick={() => { const s = document.getElementById('sale-slider'); if(s) s.scrollBy({ left: -400, behavior: 'smooth' }); }} className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
</button>
<button aria-label="Next" onClick={() => { const s = document.getElementById('sale-slider'); if(s) s.scrollBy({ left: 400, behavior: 'smooth' }); }} className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div id="sale-slider" className="flex overflow-x-auto snap-x snap-mandatory gap-xl pb-sm" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

<div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start">
<div className="relative h-64 overflow-hidden bg-surface-container-highest">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Sunlit architectural luxury apartment exterior with palm trees, clean sandy stone facade, floor-to-ceiling glass windows under bright Dubai blue skies" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjOMzi-8HPWX1_T8_rUnqDu_BSN0zb-lOhFdlea_XFl2hXVpNDQrRF484pgpsxpzOlRO_6yQo3keojF820LFAsh2x4yYUn3fjG_RdMnvWMsfg4JYQ5BKry2ARsB-biG7ycyKYQR7eyefxD-BQbIMj0mjYvAXviiDG9TMwLftr7J8xDpQm4i6gUF9nC73O0RNKQ7r7Ez-CdaCW8qdbsO3gtc4yuL2Hm65_lfVMWymgvBZxNHbVbQsEf_g")' }}>
</div>
<div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
              Ready to Handover
            </div>
</div>
<div className="p-lg flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined text-[1.1rem]">apartment</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Signature Apartment</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
                Investors Deal | Spacious Layout | High Floor Panorama
              </p>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span className="truncate">Palm Views West, Palm Jumeirah, Dubai</span>
</div>

<div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
<span>2 Beds</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
<span>3 Baths</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
<span>1,850 sqft</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div>
<span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Asking Price</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">AED 4,850,000</span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Call Broker">
<span className="material-symbols-outlined text-[1rem]">call</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Email Inquiry">
<span className="material-symbols-outlined text-[1rem]">mail</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="WhatsApp Concierge">
<span className="material-symbols-outlined text-[1rem]">chat</span>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start">
<div className="relative h-64 overflow-hidden bg-surface-container-highest">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Modern Mediterranean inspired luxury villa resort building in Dubai with arched porticoes, golden exterior stone finish, and lush palm landscape" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiFtejqdS-YPvK27_rg8nmvT_suMdCR9qSMdzsib-cdlyarxlIwa1qtJsCC1yepqc7vvlMhxd-phJlIWn2HwtfodNbZjJ2kqnkOZVmxtd78ymy07bHwaivNkeQ3Kr8y9PHI_x76tcW4_JjNHLmQRlXDjFek5Wklco6YF4Q5I6b4OVBgmKKujmn74wizqzxGnrpLWdKBc8IdJUgkv0QnmA4O9WFvm6xSC02-iOze4IfuTtNQc0ArLCG9g")' }}>
</div>
<div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
              Prime Off-Market
            </div>
</div>
<div className="p-lg flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined text-[1.1rem]">villa</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Canal Sky Villa</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
                Duplex Living | Private Infinity Pool | Private Elevator
              </p>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span className="truncate">Downtown Boulevard, Dubai, UAE</span>
</div>

<div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
<span>4 Beds</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
<span>5 Baths</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
<span>4,920 sqft</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div>
<span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Asking Price</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">AED 12,400,000</span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Call Broker">
<span className="material-symbols-outlined text-[1rem]">call</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Email Inquiry">
<span className="material-symbols-outlined text-[1rem]">mail</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="WhatsApp Concierge">
<span className="material-symbols-outlined text-[1rem]">chat</span>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start">
<div className="relative h-64 overflow-hidden bg-surface-container-highest">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Elegant low-rise waterfront modern residences in Saadiyat Island Abu Dhabi with warm limestone facades, modern glass balconies, and blue sky" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfLDhsrec_pRfL9r8OCN-3rFRrs3Bq3W8DEWjPOlWVzZ3YGGSVhGqST_FkA4XIOhM32DXpJ8jPdaRkyGfQYbF11wN_7AFS6ZKoFSCdmctdFjHecN_1gR1A5m6LzKT6e1_0FQWo6oi9LfsAv6i0wqkmUrn6DrB71cB1U6kfRSBBVQYpOPVB74n-9ImJQASt6zpS0ukdoeM-T9OaYDFW5w78geM6m0vmpWONwBucHJ1A7su-qWUz9b5_xw")' }}>
</div>
<div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
              Cultural Oasis
            </div>
</div>
<div className="p-lg flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined text-[1.1rem]">domain</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Saadiyat Haven Residence</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
                Museum District | Private Beach Access | LEED Gold
              </p>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span className="truncate">Saadiyat Island, Abu Dhabi</span>
</div>

<div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
<span>3 Beds</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
<span>4 Baths</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
<span>3,150 sqft</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div>
<span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Asking Price</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">AED 7,900,000</span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Call Broker">
<span className="material-symbols-outlined text-[1rem]">call</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Email Inquiry">
<span className="material-symbols-outlined text-[1rem]">mail</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="WhatsApp Concierge">
<span className="material-symbols-outlined text-[1rem]">chat</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 font-headline-xl text-[6.5rem] md:text-[11rem] lg:text-[14rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      FOR RENT
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-lg mb-2xl gap-md">
<div>
<span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-xxs">Prime Leasing Portfolio</span>
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
            PROPERTIES AVAILABLE FOR <span className="text-primary">RENT</span>
</h2>
</div>
<div className="flex items-center justify-between w-full md:w-auto pt-sm md:pt-0 gap-xl">
<a className="font-label-caps text-label-caps uppercase text-primary hover:text-primary-fixed-dim inline-flex items-center gap-xs tracking-widest font-semibold group" href="#">
<span>VIEW ALL PROPERTIES</span>
<span className="material-symbols-outlined text-[1.1rem] group-hover:translate-x-1 transition-transform">chevron_right</span>
</a>
<div className="flex items-center gap-xs">
<button aria-label="Previous" onClick={() => { const s = document.getElementById('rent-slider'); if(s) s.scrollBy({ left: -400, behavior: 'smooth' }); }} className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
</button>
<button aria-label="Next" onClick={() => { const s = document.getElementById('rent-slider'); if(s) s.scrollBy({ left: 400, behavior: 'smooth' }); }} className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div id="rent-slider" className="flex overflow-x-auto snap-x snap-mandatory gap-xl pb-sm" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

<div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start">
<div className="relative h-64 overflow-hidden bg-surface-container-highest">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Interior luxury penthouse balcony overlooking Dubai Marina skyline with stylish designer wire outdoor chairs, coffee table, and endless blue sky" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7qcrKhIzAya82A0rvBIgqxySewH81PgF2Ji8ppbTkNZcj4zxfULb31Z2Tmo4xPgpn_l1fz-gQwCgb5u3TnkKpDx-TJ8m1TTDYcfHQ4TbdmLLzq3NbXu1sD-jZP8MtQpkyEwwBG5iApYx4O8mdth-SfVVOZSkEJQIMHkhQ3yzrRyo3xmtkph0Nrpch8ScxPl-CwsPOCwuhD4vDOnFNzadKcOhhRIhfYix44RPEpRE2M63Yfk15Adx75g")' }}>
</div>
<div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
              Fully Furnished
            </div>
</div>
<div className="p-lg flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined text-[1.1rem]">apartment</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Marina Penthouse Suite</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
                Designer Furniture by Minotti | Concierge &amp; Valet
              </p>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span className="truncate">Marina Promenade, Dubai Marina</span>
</div>

<div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
<span>2 Beds</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
<span>2 Baths</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
<span>1,680 sqft</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div>
<span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Annual Lease</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">AED 240,000 <span className="font-label-sm text-[0.7rem] text-on-surface-variant font-normal">/ Year</span></span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Call Broker">
<span className="material-symbols-outlined text-[1rem]">call</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Email Inquiry">
<span className="material-symbols-outlined text-[1rem]">mail</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="WhatsApp Concierge">
<span className="material-symbols-outlined text-[1rem]">chat</span>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start">
<div className="relative h-64 overflow-hidden bg-surface-container-highest">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Luxury resort style swimming pool terrace surrounded by contemporary glass building in Dubai, crystal clear water with lounge deck and pergola" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4jj-8wvfVwqTdn4EriFV3pCMJ1ebzR-BXtyOzV1F_-jZsGLgTmcgqePfMjPzd5awVh0Hh_6sH8DXvfT6WmuRZAPA7PfBV8SGoEyfi8x9fnj84wLhmE-gRWMcdFbLYwcjAc82kDeqjJZx7m701xCu2gPnp5f32Em6p970Nv3HwzmOKiFSfdkJ6BAGeXUxS1DBYTM7mxF38uyUIgW7JGmfkLPBZy1E1eW8g-rVUUqx1YeBohP-p2nq-yw")' }}>
</div>
<div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
              Ready To Move
            </div>
</div>
<div className="p-lg flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined text-[1.1rem]">pool</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Al Furjan Resort Suite</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
                Near Metro Hub | Full Pool &amp; Garden View | Modern Kitchen
              </p>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span className="truncate">Al Furjan, Dubai, United Arab Emirates</span>
</div>

<div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
<span>1 Bed</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
<span>2 Baths</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
<span>980 sqft</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div>
<span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Annual Lease</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">AED 135,000 <span className="font-label-sm text-[0.7rem] text-on-surface-variant font-normal">/ Year</span></span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Call Broker">
<span className="material-symbols-outlined text-[1rem]">call</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Email Inquiry">
<span className="material-symbols-outlined text-[1rem]">mail</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="WhatsApp Concierge">
<span className="material-symbols-outlined text-[1rem]">chat</span>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-surface-container border border-primary/20 hover:border-primary/60 transition-all flex flex-col justify-between overflow-hidden shadow-lg min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start">
<div className="relative h-64 overflow-hidden bg-surface-container-highest">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Interior perspective through an open luxury apartment glass window looking out onto landscaped palm courtyards and warm terracotta modern architecture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOU5RHF9VBSss3od2vl48IkxoR7Kw2Vti4jQTbC7il1QqnG0BJ2ln2HD4SIAtFhypdLVJqJRuXXpjslebClv78GxcxOCiG_PHcvQ_SyF3cZezP7qW6bfp-BJPf8ceCGlPJmKg3LVxSz5e__NlLpV07cuGup_yLmB1G129BL8IWsqhed8racA10BJE3mtA0Bp2HYccw3LBeGOCQI2ryHniPdeT5bBJzF9ThioocccMsLQ7fyeaVBoWCzg")' }}>
</div>
<div className="absolute top-sm left-sm px-sm py-xxs bg-surface-container-lowest/90 border border-primary/30 font-label-caps text-label-caps uppercase text-primary">
              Vacant &amp; Upgraded
            </div>
</div>
<div className="p-lg flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined text-[1.1rem]">cottage</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Jumeirah Islands Garden Flat</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mb-xs">
                Lake View | Private Landscaped Terrace | 2 Parking Bays
              </p>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-md">
<span className="material-symbols-outlined text-primary text-[1rem]">location_on</span>
<span className="truncate">Jumeirah Islands, Dubai, UAE</span>
</div>

<div className="grid grid-cols-3 gap-xs py-sm border-y border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant mb-md">
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bed</span>
<span>3 Beds</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">bathtub</span>
<span>4 Baths</span>
</div>
<div className="flex items-center gap-xxs">
<span className="material-symbols-outlined text-primary text-[1rem]">square_foot</span>
<span>2,850 sqft</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div>
<span className="font-label-caps text-[0.65rem] uppercase text-on-surface-variant block">Annual Lease</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary">AED 320,000 <span className="font-label-sm text-[0.7rem] text-on-surface-variant font-normal">/ Year</span></span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Call Broker">
<span className="material-symbols-outlined text-[1rem]">call</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="Email Inquiry">
<span className="material-symbols-outlined text-[1rem]">mail</span>
</button>
<button className="w-8 h-8 rounded-none border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors" title="WhatsApp Concierge">
<span className="material-symbols-outlined text-[1rem]">chat</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full min-h-[560px] flex items-center bg-surface-container-lowest overflow-hidden">

<div className="absolute top-6 left-1/2 -translate-x-1/2 font-headline-xl text-[5.5rem] md:text-[9rem] lg:text-[12rem] font-extrabold uppercase text-surface-container-highest/10 pointer-events-none select-none whitespace-nowrap">
      ABOUT TRUELINE • AWARDS
    </div>

<div className="absolute inset-0 bg-cover bg-right md:bg-center opacity-50 mix-blend-luminosity" data-alt="Photorealistic, cinematic, wide-angle shot of an ultra-luxury modern corporate real estate office" style={{ backgroundImage: 'url("/corporate_background.jpg")' }}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
<div className="relative z-10 max-w-[1600px] w-full mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-4xl">
<div className="max-w-[36rem] bg-surface-container/70 border border-primary/20 backdrop-blur-xl p-xl md:p-2xl">
<span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary block mb-xs">Institutional Authority</span>
<h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface mb-md">
          WHO <span className="text-primary">WE ARE</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-xl">
          Trueline Real Estate stands as a prominent and distinguished real estate advisory in the United Arab Emirates and international financial capitals, embodying excellence, discretion, and institutional market authority in an ever-evolving property landscape.
        </p>
<div className="flex flex-wrap items-center gap-md">
<a className="px-xl py-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase font-semibold tracking-widest hover:bg-primary-fixed-dim transition-all shadow-md" href="#">
            Know More
          </a>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-primary text-[1.2rem]">workspace_premium</span>
<span>Winner Best Sovereign Agency 2023 • 2024</span>
</div>
</div>
</div>
</div>
</section></FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface-container-low overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 font-headline-xl text-[6rem] md:text-[10rem] lg:text-[13rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      TESTIMONIALS
    </div>
<div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/30 pb-lg mb-2xl gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg uppercase font-semibold text-on-surface">
            Reviews &amp; Comments
          </h2>
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary mt-xxs block">
            YOU CAN COUNT <span className="text-on-surface">ON US</span>
</span>
</div>
<div className="flex items-center gap-xs">
<button aria-label="Previous Testimonial" className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
</button>
<button aria-label="Next Testimonial" className="w-10 h-10 border border-outline-variant/50 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
</button>
</div>
</div>


<div className="relative w-full flex overflow-hidden py-md" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
  <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-xl pr-xl">
    

<div className="w-[350px] md:w-[450px] shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Firas Najjar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "I have worked with Trueline, specifically their private sovereign client desk. They handled our multi-property acquisition across Dubai and Abu Dhabi with absolute discretion, institutional underwriting, and zero friction. They are unquestionably the pinnacle of real estate advisory."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Verified Portfolio Client • Dubai
          </div>
</div>

<div className="w-[350px] md:w-[450px] shrink-0 p-xl bg-surface-container border border-primary/40 shadow-xl flex flex-col justify-between relative">
<div className="absolute -top-3 right-6 px-sm py-xxs bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest">
            Institutional Trust
          </div>
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Go Inoue</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "By far, this is the best asset management &amp; acquisition company in the UAE. Our family office relies on their advisors for clear yield projection, regulatory conveyance, and impeccable tenant management. Every single requirement was resolved with high precision."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Tokyo • Sovereign Investor
          </div>
</div>

<div className="w-[350px] md:w-[450px] shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Elena Rostova</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "From securing off-market penthouse allocations on the Palm to setting up escrow custodial services, Trueline proved second to none. The level of confidentiality, speed, and market intelligence is unmatched in the Middle East region."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Geneva Private Client
          </div>
</div>

  </div>
  <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-xl pr-xl absolute top-0 left-full">
    

<div className="w-[350px] md:w-[450px] shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Firas Najjar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "I have worked with Trueline, specifically their private sovereign client desk. They handled our multi-property acquisition across Dubai and Abu Dhabi with absolute discretion, institutional underwriting, and zero friction. They are unquestionably the pinnacle of real estate advisory."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Verified Portfolio Client • Dubai
          </div>
</div>

<div className="w-[350px] md:w-[450px] shrink-0 p-xl bg-surface-container border border-primary/40 shadow-xl flex flex-col justify-between relative">
<div className="absolute -top-3 right-6 px-sm py-xxs bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest">
            Institutional Trust
          </div>
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Go Inoue</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "By far, this is the best asset management &amp; acquisition company in the UAE. Our family office relies on their advisors for clear yield projection, regulatory conveyance, and impeccable tenant management. Every single requirement was resolved with high precision."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Tokyo • Sovereign Investor
          </div>
</div>

<div className="w-[350px] md:w-[450px] shrink-0 p-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
<div>
<div className="flex items-center gap-xxs text-primary mb-md">
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-sm">Elena Rostova</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              "From securing off-market penthouse allocations on the Palm to setting up escrow custodial services, Trueline proved second to none. The level of confidentiality, speed, and market intelligence is unmatched in the Middle East region."
            </p>
</div>
<div className="mt-lg pt-sm border-t border-outline-variant/20 font-label-caps text-[0.68rem] uppercase text-primary tracking-wider">
            Geneva Private Client
          </div>
</div>

  </div>
</div>

</div>
</section></FadeIn>

<FadeIn><section className="relative w-full py-4xl bg-surface overflow-hidden">

<div className="absolute top-4 right-1/4 font-headline-xl text-[4rem] md:text-[11rem] lg:text-[14rem] font-extrabold uppercase text-surface-container-highest/15 pointer-events-none select-none whitespace-nowrap">
      FAQ
    </div>
<div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
<div className="mb-2xl">
<h2 className="font-headline-lg text-headline-lg uppercase font-bold text-on-surface">
          ASK ANYTHING <span className="text-primary">FROM US</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Everything you need to know about acquisition protocols, leasing laws, and sovereign property investments. Can't find the answer you're looking for? Please contact our private client team.
        </p>
</div>

<FAQAccordion />
</div>
</section></FadeIn>


<button aria-label="Scroll to top" className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-primary text-on-primary shadow-2xl flex items-center justify-center hover:bg-primary-fixed-dim transition-all hover:scale-105 active:scale-95" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) }} title="Scroll to Top">
<span className="material-symbols-outlined text-[1.3rem]">arrow_upward</span>
</button>

<div className="fixed bottom-6 right-6 z-40 flex flex-col gap-xs items-end">

<a aria-label="Call concierge" className="w-12 h-12 bg-primary text-on-primary shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-primary-fixed-dim transition-all hover:scale-105 active:scale-95" href="tel:+97143128800" title="Direct Telephone Concierge">
<span className="material-symbols-outlined text-[1.4rem]">call</span>
</a>

<a aria-label="Chat on WhatsApp" className="w-12 h-12 bg-[#25D366] text-[#030c29] shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:brightness-110 transition-all hover:scale-105 active:scale-95" href="https://wa.me/97143128800" title="Chat on WhatsApp">
<span className="material-symbols-outlined text-[1.4rem]">chat</span>
</a>
</div>
</div>

</main> </div> ); }