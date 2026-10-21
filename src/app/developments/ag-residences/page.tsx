"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const unitTypes = [
  {
    id: "unit-type-01",
    label: "Unit Type 1 · 2 BR + Sky Terrace",
    title: "2 Bedroom Sky Residence 01",
    units: "4 Penthouses / 5th Flr",
    sqft: "1,028.17 sqft (Int) + 573.50 sqft (Terrace)",
    sqm: "95.52 sqm + 53.28 sqm Terrace",
    config: "2 Beds · 2 Baths · Living Salon · Breakfast Bar · Wrap Sky Terrace",
    description: "North-facing penthouse residence on the 5th floor. Boasts an expansive 53.28 sq.m wrap-around private terrace, open-concept salon, designer kitchen with breakfast bar, and master suite with direct outdoor terrace access.",
    floorplan: "/ag-group/page_2.png",
    interior: "/ag-group/page_3.png",
    highlights: [
      "53.28 sq.m Private Sky Terrace (573.5 sqft)",
      "Direct Elevator Foyer Access",
      "Curated B&D Interiors Natural Earth Palette"
    ]
  },
  {
    id: "unit-type-02",
    label: "Unit Type 2 · 2 BR + Grand Terrace",
    title: "2 Bedroom Executive Sky Residence 02",
    units: "Exclusive Corner Suite",
    sqft: "1,106.74 sqft (Int) + 843.99 sqft (Grand Terrace)",
    sqm: "102.82 sqm + 78.41 sqm Terrace",
    config: "2 Beds · 2 Baths · Formal Dining · Massive Al-Fresco Terrace",
    description: "The largest penthouse residence on the rooftop level. Features an astonishing 78.41 sq.m private outdoor terrace designed for al-fresco sunset gatherings, floor-to-ceiling panoramic glass, and secluded bedroom wings with dedicated dressing corridors.",
    floorplan: "/ag-group/page_2.png",
    interior: "/ag-group/page_4.png",
    highlights: [
      "Massive 78.41 sq.m Al-Fresco Terrace (844 sqft)",
      "Dual Corner Bedroom Elevation & Sunset Views",
      "Gourmet Marble-Top Island & Pantry Bar"
    ]
  },
  {
    id: "unit-type-03",
    label: "Unit Type 3 · 2 BR + Garden Terrace",
    title: "2 Bedroom Horizon Suite 03",
    units: "East Sky Suite",
    sqft: "1,073.38 sqft (Int) + 810.52 sqft (Terrace)",
    sqm: "99.72 sqm + 75.30 sqm Terrace",
    config: "2 Beds · 2 Baths · Separate Dining · Zen Sky Terrace Deck",
    description: "East-facing retreat optimized for natural morning light. Includes a serene 75.30 sq.m private terrace garden, dedicated powder room, and spa-grade walk-in rain showers finished in honed stone and porcelain.",
    floorplan: "/ag-group/page_2.png",
    interior: "/ag-group/page_8.png",
    highlights: [
      "75.30 sq.m Private Sky Deck (810 sqft)",
      "Spa En-Suite with Walk-In Rain Showers",
      "Scandinavian Minimalist Joinery & Fluted Accents"
    ]
  },
  {
    id: "unit-type-04",
    label: "Unit Type 4 · 2 BR + Sunset Terrace",
    title: "2 Bedroom Signature Penthouse 04",
    units: "South-West Suite",
    sqft: "1,116.54 sqft (Int) + 573.50 sqft (Terrace)",
    sqm: "103.73 sqm + 53.28 sqm Terrace",
    config: "2 Beds · 2 Baths · Island Kitchen · Sunset Promenade Deck",
    description: "South-west residence commanding warm natural sunlight and evening sunset views. Direct access to a 53.28 sq.m private terrace plus seamless adjacency to the 207 sq.m shared landscaped rooftop garden and firepit pavilion.",
    floorplan: "/ag-group/page_2.png",
    interior: "/ag-group/page_5.png",
    highlights: [
      "53.28 sq.m Sunset Deck (573.5 sqft)",
      "Adjoining 207.5 sq.m Shared Sky Garden & Firepit",
      "Curated Natural Wood & Linen Finishes"
    ]
  }
];

const galleryImages = [
  { src: "/ag-group/page_3.png", label: "Open-Plan Living & Dining Salon", category: "Interiors" },
  { src: "/ag-group/page_10.png", label: "Private Sky Terrace Garden & Yoga Deck", category: "Terrace" },
  { src: "/ag-group/page_5.png", label: "Gourmet Kitchen & Breakfast Bar", category: "Interiors" },
  { src: "/ag-group/page_8.png", label: "Master Bedroom Suite with Walk-In Wardrobe", category: "Interiors" },
  { src: "/ag-group/page_4.png", label: "Dual-Aspect Living Lounge & Bedroom Wing", category: "Interiors" },
  { src: "/ag-group/page_11.png", label: "Bespoke Master Bathroom & Rain Shower", category: "Interiors" },
  { src: "/ag-group/page_2.png", label: "Fifth Floor Master Architectural & Terrace Plan", category: "Masterplan" },
  { src: "/ag-group/page_12.png", label: "Colors Palette: Chalk, Cream, Khaki & Latte", category: "Design" },
  { src: "/ag-group/page_13.png", label: "Material Nuances: Linen, Stone, Biscuit & Porcelain", category: "Design" },
  { src: "/ag-group/page_14.png", label: "Curated Textures: Scandinavian Oak, Jute & Ceramics", category: "Design" },
  { src: "/ag-group/page_15.png", label: "Embossed Architectural Detailing", category: "Design" },
  { src: "/ag-group/cover.png", label: "G+4 Residences Lifestyle Presentation", category: "Exterior" }
];

const keyAmenities = [
  {
    icon: "deck",
    title: "Terrace & Sky Living",
    items: [
      "Private Sky Terraces (53 to 78 sq.m)",
      "207.5 sq.m Shared Sky Garden",
      "Sunken Outdoor Firepit Pavilion",
      "Pergola Shaded Dining Lounge",
      "Panoramic Sunset Observation Deck"
    ]
  },
  {
    icon: "palette",
    title: "Curation & Aesthetics",
    items: [
      "Interior Architecture by Oscar Andreu",
      "B&D Interiors Design Consultancy",
      "Curated Earth-Tone Color Palette",
      "Honed Natural Stone & Porcelain Tiles",
      "Acoustic Double-Glazed Glass Balustrades"
    ]
  },
  {
    icon: "self_improvement",
    title: "Wellness & Mindfulness",
    items: [
      "Open-Air Rooftop Yoga Platform",
      "Landscaped Mediterranean Flora",
      "Zen Outdoor Seating Pockets",
      "Spa-Grade En-Suite Rain Showers",
      "Biophilic Planter Boxes on Terraces"
    ]
  },
  {
    icon: "apartment",
    title: "Boutique Scale & Privacy",
    items: [
      "Low-Rise G+4 Storey Architecture",
      "Low Density Residential Community",
      "Dual High-Speed Elevator Access",
      "Private Foyer & Entry Hallways",
      "Direct Service & Elect. Rooms Core"
    ]
  },
  {
    icon: "kitchen",
    title: "Kitchen & Cabinetry",
    items: [
      "Integrated Breakfast Bar & Island",
      "Custom Fluted Light Oak Cabinetry",
      "Built-in Premium Kitchen Appliances",
      "Stone Kitchen Splashbacks",
      "Concealed Modern Utility Spaces"
    ]
  },
  {
    icon: "shield_lock",
    title: "Security & Management",
    items: [
      "AG Development Since 1970 Legacy",
      "24/7 Monitored Access Control",
      "Digital Keyless Residence Access",
      "Dedicated Secure Covered Parking",
      "Professional Building Management"
    ]
  }
];

export default function AGResidencesPage() {
  const [selectedUnit, setSelectedUnit] = useState(unitTypes[0]);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [activeGalleryImage, setActiveGalleryImage] = useState(galleryImages[0]);

  const filteredGallery = galleryFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === galleryFilter);

  return (
    <main className="w-full pt-20 bg-background flex flex-col min-h-screen text-on-surface">
      
      {/* 1. HERO SPOTLIGHT */}
      <FadeIn>
        <section className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-primary/20 bg-gradient-to-b from-[#030c29] via-[#07122e] to-[#040e2b]">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            {/* Top Breadcrumbs & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-[0.75rem] uppercase tracking-widest">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/developments" className="hover:text-primary transition-colors">Developments</Link>
                <span>/</span>
                <span className="text-primary font-semibold">AG G+4 Residences</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[0.7rem] uppercase tracking-widest font-bold">
                  NEW LAUNCH
                </span>
                <span className="px-3 py-1 bg-surface-container-high border border-primary/40 text-primary font-label-caps text-[0.7rem] uppercase tracking-widest font-semibold">
                  AG DEVELOPMENT SINCE 1970
                </span>
              </div>
            </div>

            {/* Main Hero Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col">
                <span className="font-label-caps text-[0.8rem] uppercase tracking-[0.25em] text-primary font-bold mb-2">
                  BOUTIQUE RESIDENTIAL CORRIDOR • UAE
                </span>
                <h1 className="font-display text-[2.75rem] md:text-[4rem] lg:text-[4.75rem] leading-[1.05] font-bold text-on-surface mb-6">
                  G+4 Residences <br />
                  <span className="text-primary font-light italic text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem]">By AG Development</span>
                </h1>
                <p className="font-body-lg text-[1.1rem] text-on-surface-variant leading-relaxed max-w-[42rem] mb-8">
                  A boutique European-scale residential masterpiece curated by AG Development (Since 1970). Featuring fifth-floor luxury 2-bedroom penthouses with expansive private sky terraces up to 844 sq.ft, a 207 sq.m shared rooftop garden with sunken firepit, and haute interiors curated by Oscar Andreu &amp; B&amp;D Interiors.
                </p>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-outline/20 mb-8 bg-surface-container-low/40 p-4 rounded-sm">
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Typology</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">G + 4 Floors</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">Boutique Low-Rise</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Penthouses</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">2-Bedroom</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">95.5 to 103.7 sqm</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Sky Terraces</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">Up to 78.4 m²</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">Private Al-Fresco</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Starting Price</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">AED 1,150,000</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">Flexible Payment Plan</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <a 
                    href="/AG GROUP.pdf" 
                    download="AG_Group_G4_Residences_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-xs sm:text-[0.8rem] uppercase px-6 sm:px-7 py-3.5 sm:py-4 font-bold tracking-widest hover:bg-primary-container transition-all shadow-xl active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[1.2rem]">download</span>
                    <span>Download Brochure (PDF)</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/971506321644?text=Hello%20Trueline,%20I%20would%20like%20to%20inquire%20about%20AG%20Group%20G%2B4%20Residences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-[#25D366] text-[#030c29] font-label-caps text-xs sm:text-[0.8rem] uppercase px-5 sm:px-6 py-3.5 sm:py-4 font-bold tracking-widest hover:brightness-110 transition-all shadow-xl active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[1.2rem]">chat</span>
                    <span>Direct Concierge WhatsApp</span>
                  </a>

                  <Link 
                    href="/contact" 
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-transparent border border-primary/40 text-on-surface hover:text-primary font-label-caps text-xs sm:text-[0.8rem] uppercase px-5 sm:px-6 py-3.5 sm:py-4 font-bold tracking-widest hover:bg-surface-container-high transition-all"
                  >
                    <span>Request Floor Plan &amp; Specs</span>
                    <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-[480px] lg:h-[580px] rounded-sm overflow-hidden border border-primary/30 shadow-2xl group">
                  <Image 
                    src="/ag-group/page_3.png" 
                    alt="AG G+4 Residences Living Space by AG Development" 
                    fill 
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e2b] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 border border-primary/40 px-3 py-1.5 backdrop-blur-md">
                    <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary font-bold">
                      G + 4 RESIDENCES · 5TH FLOOR SKY SUITES
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#071C51]/90 backdrop-blur-md border border-[#D8AA36]/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-lg font-bold text-[#F8F8F6]">AG Development Since 1970</span>
                      <span className="text-primary font-bold text-sm">207.5 m² Sky Garden</span>
                    </div>
                    <p className="font-body-sm text-[0.8rem] text-[#B7C0C9]">
                      Curated Scandinavian &amp; Mediterranean aesthetics by Oscar Andreu &amp; B&amp;D Interiors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 2. PROJECT FACTS & CONFIGURATION OVERVIEW */}
      <FadeIn>
        <section className="w-full py-20 bg-surface-container-low border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="text-center max-w-[48rem] mx-auto mb-16">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
                ARCHITECTURAL SPECIFICATIONS
              </span>
              <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface">
                Engineering <span className="text-primary">Mastery</span>
              </h2>
              <p className="font-body-md text-on-surface-variant mt-3">
                All structural parameters, layout areas, and environmental systems are precision engineered to deliver institutional longevity, comfort, and verified yields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">apartment</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Building Breakdown</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Ground Level</span> <strong className="text-on-surface">Grand Lobby &amp; Parking</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Floors 1 to 4</span> <strong className="text-on-surface">Boutique Residences</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>5th Floor Crown</span> <strong className="text-on-surface">Sky Penthouses</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Shared Sky Garden</span> <strong className="text-on-surface">207.51 sq.m</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Terrace Typologies</span> <strong className="text-on-surface">4 Private Decks</strong>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">layers</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">5th Floor Suites Composition</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Unit Type 01</span> <strong className="text-on-surface">95.52 m² + 53.28 m² Ter</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Unit Type 02</span> <strong className="text-on-surface">102.82 m² + 78.41 m² Ter</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Unit Type 03</span> <strong className="text-on-surface">99.72 m² + 75.30 m² Ter</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Unit Type 04</span> <strong className="text-on-surface">103.73 m² + 53.28 m² Ter</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Rooftop Footprint</span> <strong className="text-on-surface">667.06 m² Total</strong>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">palette</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Specifications &amp; Finishes</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Interior Designers</span> <strong className="text-on-surface">Oscar Andreu · B&amp;D</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Curated Palette</span> <strong className="text-on-surface">Chalk, Cream, Khaki</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Wall Coatings</span> <strong className="text-on-surface">Sand (NCS S 2005-Y20R)</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Flooring &amp; Walls</span> <strong className="text-on-surface">Porcelain &amp; Honed Stone</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Cabinetry</span> <strong className="text-on-surface">Fluted Oak &amp; Linen</strong>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">commute</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Circulation &amp; Amenities</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Passenger Lifts</span> <strong className="text-on-surface">Dual Elevators Core</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Central Hall</span> <strong className="text-on-surface">36.20 sq.m Foyer</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Outdoor Firepit</span> <strong className="text-on-surface">Sunken Circular Lounge</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Terrace Lounge</span> <strong className="text-on-surface">Pergola Daybeds</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Service Logistics</span> <strong className="text-on-surface">Dedicated Elect. Core</strong>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>
      </FadeIn>

      {/* 3. INTERACTIVE FLOOR PLANS & RESIDENCE EXPLORER */}
      <FadeIn>
        <section className="w-full py-24 bg-surface border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-2">
                  CURATED LIVING SPACES
                </span>
                <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface">
                  Floor Plans &amp; <span className="text-primary">Unit Layouts</span>
                </h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-[36rem]">
                Explore four distinctive 2-bedroom penthouse layouts on the 5th floor, each crowned by expansive private sky terraces up to 844 sq.ft and seamless access to the shared rooftop garden.
              </p>
            </div>

            {/* Unit Selector Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 mb-10 border-b border-outline/20">
              {unitTypes.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-6 py-3.5 font-label-caps text-[0.8rem] uppercase tracking-wider font-bold whitespace-nowrap transition-all rounded-sm ${
                    selectedUnit.id === unit.id 
                      ? "bg-primary text-[#071C51] shadow-lg" 
                      : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest"
                  }`}
                >
                  {unit.label}
                </button>
              ))}
            </div>

            {/* Selected Unit Details Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-surface-container p-6 md:p-10 border border-primary/20">
              
              {/* Left Column: Info & Specs */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-label-caps text-[0.7rem] uppercase tracking-widest font-bold mb-4">
                    {selectedUnit.units}
                  </div>
                  
                  <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-3">
                    {selectedUnit.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-primary font-label-caps text-sm tracking-wider font-semibold mb-6">
                    <span>{selectedUnit.sqft}</span>
                    <span>•</span>
                    <span>{selectedUnit.sqm}</span>
                  </div>

                  <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                    {selectedUnit.description}
                  </p>

                  <div className="p-4 bg-surface-container-lowest border border-outline/20 mb-6">
                    <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-primary block mb-2 font-bold">
                      Residence Highlights
                    </span>
                    <ul className="space-y-1.5 font-body-sm text-sm text-on-surface">
                      {selectedUnit.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[1rem]">check_circle</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-outline/20 flex flex-wrap items-center gap-4">
                  <a 
                    href="/AG GROUP.pdf" 
                    download="AG_Group_G4_Residences_Floorplan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-[#071C51] font-label-caps text-[0.75rem] uppercase px-5 py-3 font-bold tracking-widest hover:bg-primary-container transition-all"
                  >
                    <span className="material-symbols-outlined text-[1.1rem]">picture_as_pdf</span>
                    <span>Download Plan (PDF)</span>
                  </a>

                  <a 
                    href={`https://wa.me/971506321644?text=I%20am%20interested%20in%20${encodeURIComponent(selectedUnit.title)}%20at%20AG%20G%2B4%20Residences`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-outline text-on-surface hover:text-primary font-label-caps text-[0.75rem] uppercase px-5 py-3 font-bold tracking-widest hover:bg-surface-container-high transition-all"
                  >
                    <span>Check Unit Availability</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visuals (Floorplan + 3D Interior) */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Floor Plan Diagram */}
                <div className="flex flex-col">
                  <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-on-surface-variant mb-2 font-semibold">
                    Architectural Layout Plan
                  </span>
                  <div className="relative w-full h-[320px] md:h-[400px] bg-white rounded-sm overflow-hidden border border-outline/30 flex items-center justify-center p-2 group">
                    <Image 
                      src={selectedUnit.floorplan} 
                      alt={`${selectedUnit.title} Floor Plan`} 
                      fill 
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>

                {/* 3D Interior Visual */}
                <div className="flex flex-col">
                  <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-on-surface-variant mb-2 font-semibold">
                    Interior Concept Render
                  </span>
                  <div className="relative w-full h-[320px] md:h-[400px] rounded-sm overflow-hidden border border-outline/30 group">
                    <Image 
                      src={selectedUnit.interior} 
                      alt={`${selectedUnit.title} Interior`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      </FadeIn>

      {/* 4. SIGNATURE LIFESTYLE & AMENITIES */}
      <FadeIn>
        <section className="w-full py-24 bg-surface-container-low border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="text-center max-w-[48rem] mx-auto mb-16">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
                WORLD-CLASS RESIDENTIAL LIVING
              </span>
              <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface">
                Signature <span className="text-primary">Amenities</span>
              </h2>
              <p className="font-body-md text-on-surface-variant mt-3">
                Over six curated zones of wellness, outdoor living, and architectural serenity designed to create an intimate boutique sanctuary.
              </p>
            </div>

            {/* Special Highlight: Sky Terrace Garden & Yoga Deck */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              
              <div className="relative h-[380px] rounded-sm overflow-hidden border border-primary/30 group">
                <Image 
                  src="/ag-group/page_10.png" 
                  alt="Private Sky Terrace Garden at AG G+4 Residences" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e2b] via-[#040e2b]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest inline-block mb-2">
                    5th Floor Signature
                  </span>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface mb-2">
                    Private Sky Terraces (Up to 78.4 m²)
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Expansive open-air terraces framed by wooden pergola sun-shades, spherical illuminated lanterns, biophilic planters, and bespoke yoga meditation decks.
                  </p>
                </div>
              </div>

              <div className="relative h-[380px] rounded-sm overflow-hidden border border-primary/30 group">
                <Image 
                  src="/ag-group/page_2.png" 
                  alt="207 sq.m Shared Sky Garden with Firepit" 
                  fill 
                  className="object-cover bg-white transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e2b] via-[#040e2b]/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest inline-block mb-2">
                    Rooftop Community Crown
                  </span>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface mb-2">
                    207.5 m² Sky Garden &amp; Firepit
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    A shared social sanctuary featuring a sunken circular firepit pavilion, communal dining pergola, and lush perimeter garden landscaping.
                  </p>
                </div>
              </div>

            </div>

            {/* 6 Amenity Clusters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyAmenities.map((cluster, idx) => (
                <div key={idx} className="p-6 bg-surface-container border border-outline/20 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <span className="material-symbols-outlined text-[1.8rem]">{cluster.icon}</span>
                    <h4 className="font-headline-sm text-lg font-bold text-on-surface">{cluster.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cluster.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant font-body-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 5. COLOR PALETTE & INTERIOR ARCHITECTURE ECOSYSTEM */}
      <FadeIn>
        <section className="w-full py-24 bg-surface border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 flex flex-col">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
                  BESPOKE MATERIALITY &amp; DESIGN
                </span>
                <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface mb-6">
                  Oscar Andreu <span className="text-primary">Curation</span>
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
                  AG G+4 Residences showcases the design vision of Oscar Andreu and B&amp;D Interiors Design Consultancy. A harmonious marriage of Scandinavian restraint and warm Mediterranean textures.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">palette</span>
                      <span>Earth-Tone Spectrum</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Chalk (#D4D2C5), Cream (#D2CABF), Khaki (#887C6A), and Latte (#BEB8AF) layered across natural plaster walls.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">texture</span>
                      <span>Natural Tactile Textures</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Raw natural linen fabrics, honed limestone, porcelain tiles, and textured Sand wall finishes (NCS S 2005-Y20R).
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">carpenter</span>
                      <span>Custom Millwork &amp; Oak</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Vertical fluted light oak wood panels, built-in breakfast bar islands, and flush-frame doors.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">shower</span>
                      <span>Spa Bath En-Suites</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Matte graphite and bronze tapware, floating stone vanity basins, integrated LED recesses, and walk-in rain showers.
                    </p>
                  </div>

                </div>
              </div>

              <div className="lg:col-span-6 relative h-[450px] lg:h-[520px] rounded-sm overflow-hidden border border-primary/30">
                <Image 
                  src="/ag-group/page_12.png" 
                  alt="Color Palette Curation by Oscar Andreu" 
                  fill 
                  className="object-cover" 
                />
              </div>

            </div>

          </div>
        </section>
      </FadeIn>

      {/* 6. PHOTO GALLERY & ARCHITECTURAL VIEWS */}
      <FadeIn>
        <section className="w-full py-24 bg-surface-container-low border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-2">
                  PORTFOLIO GALLERY
                </span>
                <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface">
                  Visual <span className="text-primary">Masterpiece</span>
                </h2>
              </div>

              {/* Gallery Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {["All", "Interiors", "Terrace", "Design", "Masterplan"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-4 py-2 font-label-caps text-[0.75rem] uppercase tracking-wider font-semibold transition-all rounded-sm ${
                      galleryFilter === cat
                        ? "bg-primary text-[#071C51]"
                        : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Image Spotlight Preview */}
            <div className="relative w-full h-[360px] md:h-[540px] rounded-sm overflow-hidden border border-primary/30 mb-6 shadow-2xl">
              <Image 
                src={activeGalleryImage.src} 
                alt={activeGalleryImage.label} 
                fill 
                className="object-cover transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="font-label-caps text-[0.7rem] uppercase tracking-widest text-primary font-bold block mb-1">
                    {activeGalleryImage.category}
                  </span>
                  <h4 className="font-headline-sm text-xl md:text-2xl font-bold text-white">
                    {activeGalleryImage.label}
                  </h4>
                </div>
                <span className="px-3 py-1 bg-black/60 border border-white/20 text-xs font-label-caps uppercase tracking-wider text-white">
                  High Definition Render
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryImage(img)}
                  className={`relative h-24 rounded-sm overflow-hidden border transition-all ${
                    activeGalleryImage.src === img.src 
                      ? "border-primary ring-2 ring-primary/40 scale-[1.02]" 
                      : "border-outline/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={img.label} fill className="object-cover" />
                </button>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* 7. DEVELOPER LEGACY & MASTER VISION */}
      <FadeIn>
        <section className="w-full py-24 bg-surface border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
                  DEVELOPMENT EXCELLENCE SINCE 1970
                </span>
                <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface mb-6">
                  AG Development <span className="text-primary">Heritage</span>
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                  With over 50 years of distinguished presence, AG Development has built an enduring reputation for architectural refinement, bespoke residential communities, and steadfast delivery across the UAE.
                </p>

                <div className="space-y-3 font-body-sm text-sm">
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Developer Legacy</span>
                    <strong className="text-primary font-bold uppercase">Established 1970</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Interior Architecture</span>
                    <strong className="text-primary font-bold">Oscar Andreu</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Consultancy Partner</span>
                    <strong className="text-primary font-bold">B&amp;D Interiors Design</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Design Collaboration</span>
                    <strong className="text-primary font-bold">Cuantic Group Design</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Scale Philosophy</span>
                    <strong className="text-primary font-bold">Boutique Low-Density</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 relative h-[450px] lg:h-[550px] rounded-sm overflow-hidden border border-primary/30 shadow-2xl">
                <Image 
                  src="/ag-group/page_14.png" 
                  alt="Materials and Moodboard by Oscar Andreu" 
                  fill 
                  className="object-cover" 
                />
              </div>

            </div>

          </div>
        </section>
      </FadeIn>

      {/* 8. DEVELOPER PARTNERSHIP & CALL TO ACTION */}
      <FadeIn>
        <section className="w-full py-24 bg-gradient-to-b from-[#07122e] to-[#030c29] text-center">
          <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-tablet">
            
            <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-primary font-bold block mb-4">
              DEVELOPER MANDATE • AG DEVELOPMENT
            </span>
            
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-on-surface leading-tight mb-6">
              Secure Your Allocation at <br />
              <span className="text-primary">AG G+4 Residences</span>
            </h2>

            <p className="font-body-lg text-on-surface-variant max-w-[42rem] mx-auto leading-relaxed mb-10">
              Trueline Real Estate is proud to represent AG Development for this exclusive launch. Contact our Sovereign Client Desk today for preferential pricing, payment schedule matrices, and confidential unit reservations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/AG GROUP.pdf" 
                download="AG_Group_G4_Residences_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-[#071C51] font-label-caps text-[0.85rem] uppercase px-8 py-4 font-bold tracking-widest hover:bg-primary-container transition-all shadow-xl"
              >
                <span className="material-symbols-outlined text-[1.2rem]">download</span>
                <span>Download Complete Brochure (PDF)</span>
              </a>

              <a 
                href="https://wa.me/971506321644?text=I%20would%20like%20to%20register%20interest%20for%20AG%20Group%20G%2B4%20Residences"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-[#030c29] font-label-caps text-[0.85rem] uppercase px-8 py-4 font-bold tracking-widest hover:brightness-110 transition-all shadow-xl"
              >
                <span className="material-symbols-outlined text-[1.2rem]">chat</span>
                <span>WhatsApp Sovereign Desk</span>
              </a>

              <a 
                href="tel:+971506321644"
                className="inline-flex items-center gap-2 bg-transparent border border-outline text-on-surface font-label-caps text-[0.85rem] uppercase px-7 py-4 font-bold tracking-widest hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[1.2rem]">call</span>
                <span>+971 50 632 1644</span>
              </a>
            </div>

          </div>
        </section>
      </FadeIn>

    </main>
  );
}
