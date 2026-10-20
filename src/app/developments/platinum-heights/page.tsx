"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const unitTypes = [
  {
    id: "type-01",
    label: "Type 01 · 1 BHK",
    title: "1 Bedroom Luxury Residence",
    units: "144 Units",
    sqft: "916.7 sqft",
    sqm: "85.16 sqm",
    config: "1 Bed · 2 Baths · Balcony · Kitchen",
    description: "Generous open-concept living and dining area with private balcony access, guest powder room, dedicated master en-suite, and integrated utility space.",
    floorplan: "/platinum-heights/floorplan_1bhk.jpg",
    interior: "/platinum-heights/interior_1bhk.jpg",
    highlights: ["Semi-Furnished with Appliances", "Smart Climate Sensors", "High Floor Panoramas"]
  },
  {
    id: "type-02",
    label: "Type 02 · 2 BHK",
    title: "2 Bedroom Executive Suite",
    units: "24 Units",
    sqft: "1,775.34 sqft",
    sqm: "164.93 sqm",
    config: "2 Beds · 2 Baths · Family Living + Dining · Dual Balconies",
    description: "Expansive layout featuring segregated family living, expansive formal dining, dual private balconies, and master suite with walk-in wardrobe corridor.",
    floorplan: "/platinum-heights/floorplan_2bhk.jpg",
    interior: "/platinum-heights/interior_2bhk.jpg",
    highlights: ["Dual Living Zones", "Panoramic Corner Balconies", "Corian Backsplash Kitchen"]
  },
  {
    id: "type-03",
    label: "Type 03 · 3 BHK",
    title: "3 Bedroom Horizon Residence",
    units: "24 Units",
    sqft: "1,604.80 sqft",
    sqm: "149.09 sqm",
    config: "3 Beds · 3 Baths · Utility · Multiple Balconies",
    description: "Thoughtfully configured three-bedroom layout optimized for natural light and cross-ventilation, complete with private utility quarter and triple balcony viewpoints.",
    floorplan: "/platinum-heights/floorplan_3bhk.jpg",
    interior: "/platinum-heights/interior_3bhk.jpg",
    highlights: ["Triple Skyline Balconies", "Dedicated Utility Room", "Grohe & RAK Sanitaryware"]
  },
  {
    id: "type-04",
    label: "Type 04 · Duplex",
    title: "4 Bedroom Sky Duplex",
    units: "48 Units",
    sqft: "2,415.94 sqft",
    sqm: "224.40 sqm (2 Floors)",
    config: "4 Beds · 4 Baths · Study · 2 Levels (1,208 sqft each)",
    description: "Two-level soaring architectural duplex with sculptural interior staircase, private second-floor study, grand master suites, and double-height architectural presence.",
    floorplan: "/platinum-heights/floorplan_4bhk_duplex.jpg",
    interior: "/platinum-heights/interior_4bhk_duplex.jpg",
    highlights: ["Bi-Level Living (2 Floors)", "Private Executive Study", "Double-Height Voids"]
  },
  {
    id: "type-05",
    label: "Type 05 · Triplex",
    title: "4 Bedroom Crown Triplex",
    units: "16 Units",
    sqft: "2,970.66 sqft",
    sqm: "275.98 sqm (3 Floors)",
    config: "4 Beds · 5 Baths · Private Internal Lift · 3 Levels (990 sqft each)",
    description: "The pinnacle of architectural luxury: a 3-storey sky mansion crowned by a private internal passenger lift, monumental double-height entertaining salon, and panoramic rooftop balconies.",
    floorplan: "/platinum-heights/floorplan_4bhk_triplex.jpg",
    interior: "/platinum-heights/interior_4bhk_triplex.jpg",
    highlights: ["Private Internal Lift/Elevator", "3 Full Storeys", "Skyline Terraces"]
  }
];

const galleryImages = [
  { src: "/platinum-heights/hero_cover.jpg", label: "Dusk Architectural Perspective", category: "Exterior" },
  { src: "/platinum-heights/daylight_exterior.jpg", label: "Daylight Tower Elevation", category: "Exterior" },
  { src: "/platinum-heights/night_exterior.jpg", label: "Illuminated Facade at Night", category: "Exterior" },
  { src: "/platinum-heights/sky_jogging_track.jpg", label: "Sky Jogging & Cycle Track (+24.05m)", category: "Amenities" },
  { src: "/platinum-heights/swimming_pool.jpg", label: "Rooftop Infinity Swimming Pool", category: "Amenities" },
  { src: "/platinum-heights/lobby_space.jpg", label: "Double-Height Grand Lobby", category: "Interiors" },
  { src: "/platinum-heights/exclusive_amenity.jpg", label: "Mid-Tower Landscaped Amenity Terrace", category: "Amenities" },
  { src: "/platinum-heights/clubhouse_lounge.jpg", label: "Clubhouse & Community Social Salon", category: "Interiors" },
  { src: "/platinum-heights/interior_4bhk_triplex.jpg", label: "Triplex Sky Mansion Living Room", category: "Interiors" },
  { src: "/platinum-heights/interior_4bhk_duplex.jpg", label: "Duplex Residence Dining & Staircase", category: "Interiors" },
  { src: "/platinum-heights/location_map.jpg", label: "Strategic UAE Connectivity Map", category: "Masterplan" },
  { src: "/platinum-heights/facade_detail.jpg", label: "Climate-Responsive Perforated Facade", category: "Architecture" }
];

const keyAmenities = [
  {
    icon: "pool",
    title: "Water & Wellness",
    items: ["Rooftop Infinity Pool", "Children's Splash Pool", "Sauna & Steam Bath", "Panoramic Yoga Deck", "High-Performance Gym"]
  },
  {
    icon: "directions_run",
    title: "Sport & Movement",
    items: ["Rooftop Sky Jogging Track (+24.05m)", "Elevated Cycling Track", "7-Hole Golf Simulator", "Outdoor Calisthenics Park", "Multi-Sport Turf (Football/Cricket/Basketball)"]
  },
  {
    icon: "sports_esports",
    title: "Play & Entertainment",
    items: ["Billiards & Games Lounge", "PlayStation Gaming Pods", "Outdoor Cinema Theatre", "Community Amphitheatre", "Dedicated Kids' Play Area"]
  },
  {
    icon: "nature_people",
    title: "Gather & Unwind",
    items: ["Private Sky Lounge", "Resident Clubhouse", "Sunset Viewing Terrace", "Multipurpose Event Hall", "Guest Executive Lounge"]
  },
  {
    icon: "bolt",
    title: "Everyday Convenience",
    items: ["EV Charging Stations", "Business Hub & Meeting Suites", "Guest Kitchen & Pantry", "Dedicated Concierge Desk", "300 Secure Podiums Parking"]
  },
  {
    icon: "apartment",
    title: "Architecture & Design",
    items: ["Signature Perforated Facades", "Illuminated Geometric Exterior", "Lush Landscaped Terraces", "RAK & Grohe Luxury Sanitary", "Double-Height Grand Lobby"]
  }
];

export default function PlatinumHeightsPage() {
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
                <span className="text-primary font-semibold">Platinum Heights</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[0.7rem] uppercase tracking-widest font-bold">
                  CURRENT ACTIVE PROJECT
                </span>
                <span className="px-3 py-1 bg-surface-container-high border border-primary/40 text-primary font-label-caps text-[0.7rem] uppercase tracking-widest font-semibold">
                  OFFICIAL ARCON MANDATE
                </span>
              </div>
            </div>

            {/* Main Hero Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col">
                <span className="font-label-caps text-[0.8rem] uppercase tracking-[0.25em] text-primary font-bold mb-2">
                  EMIRATES CITY • AJMAN, UAE
                </span>
                <h1 className="font-display text-[2.75rem] md:text-[4rem] lg:text-[4.75rem] leading-[1.05] font-bold text-on-surface mb-6">
                  Platinum Heights <br />
                  <span className="text-primary font-light italic text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem]">By Team Arcon</span>
                </h1>
                <p className="font-body-lg text-[1.1rem] text-on-surface-variant leading-relaxed max-w-[42rem] mb-8">
                  Rising 32 storeys (approx. 122.75 M) above the vibrant cityscape of Ajman, Platinum Heights redefines contemporary urban living. Featuring climate-responsive perforated facades, an elevated sky jogging track at +24.05m, rooftop infinity pool, and semi-furnished residences powered by Arcon Connect smart automation.
                </p>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-outline/20 mb-8 bg-surface-container-low/40 p-4 rounded-sm">
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Building Height</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">32 Floors</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">~122.75 M</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Total Residences</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">256 Units</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">1 BHK to 4 BHK Triplex</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Ownership Type</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">100% Freehold</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">All Nationalities</span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[0.68rem] uppercase tracking-widest text-on-surface-variant mb-1">Starting Price</span>
                    <span className="font-headline-sm text-xl font-bold text-primary">AED 495,000</span>
                    <span className="block font-body-sm text-[0.75rem] text-on-surface-variant/70">Flexible Payment Plan</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="/platinum_heights_brochure.pdf" 
                    download="Platinum_Heights_Official_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-[0.8rem] uppercase px-7 py-4 font-bold tracking-widest hover:bg-primary-container transition-all shadow-xl active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[1.2rem]">download</span>
                    <span>Download Brochure (PDF)</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/97143128800?text=Hello%20Trueline,%20I%20would%20like%20to%20inquire%20about%20Platinum%20Heights%20Ajman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-[#030c29] font-label-caps text-[0.8rem] uppercase px-6 py-4 font-bold tracking-widest hover:brightness-110 transition-all shadow-xl active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[1.2rem]">chat</span>
                    <span>Direct Concierge WhatsApp</span>
                  </a>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-transparent border border-primary/40 text-on-surface hover:text-primary font-label-caps text-[0.8rem] uppercase px-6 py-4 font-bold tracking-widest hover:bg-surface-container-high transition-all"
                  >
                    <span>Request Floor Plan & Specs</span>
                    <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-[480px] lg:h-[580px] rounded-sm overflow-hidden border border-primary/30 shadow-2xl group">
                  <Image 
                    src="/platinum-heights/hero_cover.jpg" 
                    alt="Platinum Heights Tower Ajman by Team Arcon" 
                    fill 
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e2b] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 border border-primary/40 px-3 py-1.5 backdrop-blur-md">
                    <span className="font-label-caps text-[0.65rem] uppercase tracking-widest text-primary font-bold">
                      G + 6P + 2A + 1S + 24 FLOORS
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#071C51]/90 backdrop-blur-md border border-[#D8AA36]/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-lg font-bold text-[#F8F8F6]">Arcon Platinum Heights</span>
                      <span className="text-primary font-bold text-sm">300 Parking Spaces</span>
                    </div>
                    <p className="font-body-sm text-[0.8rem] text-[#B7C0C9]">
                      Direct Sheikh Mohammed Bin Zayed Road (E311) corridor connectivity. 30 mins to DXB.
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
                    <span>Ground Level</span> <strong className="text-on-surface">Grand Lobby & Retail</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Podiums</span> <strong className="text-on-surface">G + 6 Parking Levels</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Amenity Floors</span> <strong className="text-on-surface">2 Dedicated Levels</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Service Floor</span> <strong className="text-on-surface">1 Full Wellness Deck</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Residential</span> <strong className="text-on-surface">24 Sky Floors</strong>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">layers</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Residences Composition</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Type 01 (1 BHK)</span> <strong className="text-on-surface">144 Units</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Type 02 (2 BHK)</span> <strong className="text-on-surface">24 Units</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Type 03 (3 BHK)</span> <strong className="text-on-surface">24 Units</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Type 04 (4 BHK Duplex)</span> <strong className="text-on-surface">48 Units</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Type 05 (4 BHK Triplex)</span> <strong className="text-on-surface">16 Units</strong>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">verified</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Specifications & Finishes</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Sanitary Ware</span> <strong className="text-on-surface">RAK Ceramics</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>CP Fittings</span> <strong className="text-on-surface">Grohe (Germany)</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Electrical Switchgear</span> <strong className="text-on-surface">Legrand</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Lobby Cladding</span> <strong className="text-on-surface">Italian Marble & Walnut</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Kitchen Counter</span> <strong className="text-on-surface">Corian & Chimney</strong>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-surface-container border border-primary/20 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[1.6rem]">commute</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Circulation & Logistics</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body-sm">
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Elevators</span> <strong className="text-on-surface">4 High-Speed Lifts</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Central Stairs</span> <strong className="text-on-surface">2 Core Cores</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Car Parkings</span> <strong className="text-on-surface">300 Dedicated Bays</strong>
                  </li>
                  <li className="flex justify-between border-b border-outline/10 pb-1">
                    <span>Plot Area</span> <strong className="text-on-surface">23,143 sqft (2,150 sqm)</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Gross Floor Area</span> <strong className="text-on-surface">138,854 sqft</strong>
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
                  Floor Plans & <span className="text-primary">Unit Layouts</span>
                </h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-[36rem]">
                Choose from five distinctive typologies, from efficient 1-bedroom apartments up to monumental 3-storey sky triplexes equipped with private elevators.
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
                    {selectedUnit.units} Allocated
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
                    href="/platinum_heights_brochure.pdf" 
                    download="Platinum_Heights_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-[#071C51] font-label-caps text-[0.75rem] uppercase px-5 py-3 font-bold tracking-widest hover:bg-primary-container transition-all"
                  >
                    <span className="material-symbols-outlined text-[1.1rem]">picture_as_pdf</span>
                    <span>Download Plan (PDF)</span>
                  </a>

                  <a 
                    href={`https://wa.me/97143128800?text=I%20am%20interested%20in%20${encodeURIComponent(selectedUnit.title)}%20at%20Platinum%20Heights`}
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
                Over six curated zones of wellness, movement, entertainment, and social gathering designed to create an elevated urban sanctuary.
              </p>
            </div>

            {/* Special Highlight: Sky Jogging Track & Rooftop Pool */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              
              <div className="relative h-[380px] rounded-sm overflow-hidden border border-primary/30 group">
                <Image 
                  src="/platinum-heights/sky_jogging_track.jpg" 
                  alt="Sky Jogging Track at Platinum Heights" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e2b] via-[#040e2b]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest inline-block mb-2">
                    Level +24.05m Feature
                  </span>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface mb-2">
                    Sky Jogging &amp; Cycle Track
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Designed at the +24.05 m podium level, this elevated open-air track offers residents panoramic city vistas, safety glass railings, shaded cabana seating, and lush landscaped edges.
                  </p>
                </div>
              </div>

              <div className="relative h-[380px] rounded-sm overflow-hidden border border-primary/30 group">
                <Image 
                  src="/platinum-heights/swimming_pool.jpg" 
                  alt="Rooftop Swimming Pool at Platinum Heights" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e2b] via-[#040e2b]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-on-primary font-label-caps text-[0.65rem] uppercase font-bold tracking-widest inline-block mb-2">
                    Rooftop Crown
                  </span>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface mb-2">
                    Infinity Pool &amp; Sun Deck
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Sunken daybeds, private cabanas, and panoramic coastline views over Ajman and Sharjah. Coupled with adjacent sauna, steam bath, and dedicated kids&apos; splash pool.
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

      {/* 5. ARCON CONNECT SMART LIVING ECOSYSTEM */}
      <FadeIn>
        <section className="w-full py-24 bg-surface border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 flex flex-col">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
                  INTELLIGENT HOME AUTOMATION
                </span>
                <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface mb-6">
                  Arcon Connect <span className="text-primary">Ecosystem</span>
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
                  Platinum Heights is embedded with advanced IoT infrastructure. From digital keyless access and automated climate controls to license plate vehicle entry and instant amenity reservations via your mobile phone.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">lock</span>
                      <span>Smart Home Access</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Smart door locks, digital guest pass codes, and video door phone calls directly to your smartphone.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">nest_thermostat</span>
                      <span>Climate Optimization</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Integrated ambient room temperature sensors and automated schedules to maximize thermal efficiency.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">pin_drop</span>
                      <span>ANPR Parking &amp; EV</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Automatic license-plate recognition barriers, occupancy sensors, and EV charger tracking.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-high border border-outline/20">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <span className="material-symbols-outlined text-[1.2rem]">app_shortcut</span>
                      <span>Amenity Booking</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      One-tap reservations for the clubhouse, multipurpose hall, sports turf, and gym slots.
                    </p>
                  </div>

                </div>
              </div>

              <div className="lg:col-span-6 relative h-[450px] lg:h-[520px] rounded-sm overflow-hidden border border-primary/30">
                <Image 
                  src="/platinum-heights/arcon_connect.jpg" 
                  alt="Arcon Connect Smart Home Features" 
                  fill 
                  className="object-contain bg-[#101a37] p-4" 
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
                {["All", "Exterior", "Amenities", "Interiors", "Masterplan"].map((cat) => (
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

      {/* 7. STRATEGIC LOCATION & TRANSIT CONNECTIONS */}
      <FadeIn>
        <section className="w-full py-24 bg-surface border-b border-outline/20">
          <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary font-semibold block mb-3">
                  SEAMLESS UAE CONNECTIVITY
                </span>
                <h2 className="font-headline-lg text-[2.25rem] md:text-[2.75rem] font-bold uppercase text-on-surface mb-6">
                  Prime Regional <span className="text-primary">Position</span>
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Situated directly on Sheikh Mohammed Bin Zayed Road (E311) in Emirates City, Ajman, Platinum Heights offers unimpeded transit times to the UAE&apos;s leading financial hubs and international airports.
                </p>

                <div className="space-y-3 font-body-sm text-sm">
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Sheikh Mohammed Bin Zayed Road (E311)</span>
                    <strong className="text-primary font-bold uppercase">Direct Access</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Emirates Road (E611)</span>
                    <strong className="text-primary font-bold">5 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Ajman University &amp; Medical City</span>
                    <strong className="text-primary font-bold">12 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Etihad Rail Station (Univ. City)</span>
                    <strong className="text-primary font-bold">15 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Sharjah International Airport</span>
                    <strong className="text-primary font-bold">18 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Dubai International Airport (DXB)</span>
                    <strong className="text-primary font-bold">30 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container border border-outline/10">
                    <span className="text-on-surface font-medium">Downtown Dubai &amp; Burj Khalifa</span>
                    <strong className="text-primary font-bold">40 Minutes</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 relative h-[450px] lg:h-[550px] rounded-sm overflow-hidden border border-primary/30 shadow-2xl">
                <Image 
                  src="/platinum-heights/location_map.jpg" 
                  alt="Platinum Heights Location Map Emirates City" 
                  fill 
                  className="object-contain bg-white p-2" 
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
              DEVELOPER MANDATE • TEAM ARCON
            </span>
            
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-on-surface leading-tight mb-6">
              Secure Your Allocation at <br />
              <span className="text-primary">Platinum Heights</span>
            </h2>

            <p className="font-body-lg text-on-surface-variant max-w-[42rem] mx-auto leading-relaxed mb-10">
              Trueline Real Estate is proud to represent Team Arcon for this landmark launch. Contact our Sovereign Client Desk today for preferential pricing, payment schedule matrices, and confidential unit reservations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/platinum_heights_brochure.pdf" 
                download="Platinum_Heights_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-[#071C51] font-label-caps text-[0.85rem] uppercase px-8 py-4 font-bold tracking-widest hover:bg-primary-container transition-all shadow-xl"
              >
                <span className="material-symbols-outlined text-[1.2rem]">download</span>
                <span>Download Complete Brochure (PDF)</span>
              </a>

              <a 
                href="https://wa.me/97143128800?text=I%20would%20like%20to%20register%20interest%20for%20Platinum%20Heights%20Ajman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-[#030c29] font-label-caps text-[0.85rem] uppercase px-8 py-4 font-bold tracking-widest hover:brightness-110 transition-all shadow-xl"
              >
                <span className="material-symbols-outlined text-[1.2rem]">chat</span>
                <span>WhatsApp Sovereign Desk</span>
              </a>

              <a 
                href="tel:+97143128800"
                className="inline-flex items-center gap-2 bg-transparent border border-outline text-on-surface font-label-caps text-[0.85rem] uppercase px-7 py-4 font-bold tracking-widest hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[1.2rem]">call</span>
                <span>+971 4 312 8800</span>
              </a>
            </div>

          </div>
        </section>
      </FadeIn>

    </main>
  );
}
