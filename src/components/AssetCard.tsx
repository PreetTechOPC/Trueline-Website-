import React from 'react';

interface AssetCardProps {
  imageSrc: string;
  badge?: string;
  type: string;
  title: string;
  description: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  priceTitle: string;
  price: string;
  priceSuffix?: string;
}

export function AssetCard({
  imageSrc,
  badge,
  type,
  title,
  description,
  location,
  beds,
  baths,
  sqft,
  priceTitle,
  price,
  priceSuffix
}: AssetCardProps) {
  return (
    <div className="group bg-[#071C51] border border-[#D8AA36]/12 hover:border-[#D8AA36]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-none hover:shadow-[0_20px_50px_rgba(1,36,152,0.35)] rounded-none">
      <div className="relative h-64 overflow-hidden bg-surface-container-highest">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-800 ease-out group-hover:scale-[1.03]"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
        {badge && (
          <div className="absolute top-sm left-sm px-sm py-xxs bg-[#040e2b]/90 border border-[#D8AA36]/30 font-label-caps uppercase text-[#D8AA36]">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-lg flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-xs text-[#D8AA36] mb-xs">
            <span className="material-symbols-outlined text-[1.1rem]">{type}</span>
            <span className="font-headline-sm font-semibold text-[#F8F8F6]">{title}</span>
          </div>
          <p className="font-body-sm text-[#B7C0C9] line-clamp-1 mb-xs">
            {description}
          </p>
          <div className="flex items-center gap-xs text-[#B7C0C9] font-label-caps uppercase mb-md">
            <span className="material-symbols-outlined text-[#D8AA36] text-[1rem]">location_on</span>
            <span className="truncate">{location}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-xs py-sm border-y border-[#B7C0C9]/12 font-body-sm text-[#B7C0C9] mb-md">
            <div className="flex items-center gap-xxs">
              <span className="material-symbols-outlined text-[#D8AA36] text-[1rem]">bed</span>
              <span className="text-[#F8F8F6] font-medium">{beds} Beds</span>
            </div>
            <div className="flex items-center gap-xxs">
              <span className="material-symbols-outlined text-[#D8AA36] text-[1rem]">bathtub</span>
              <span className="text-[#F8F8F6] font-medium">{baths} Baths</span>
            </div>
            <div className="flex items-center gap-xxs">
              <span className="material-symbols-outlined text-[#D8AA36] text-[1rem]">square_foot</span>
              <span className="text-[#F8F8F6] font-medium">{sqft} sqft</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-xs">
          <div>
            <span className="font-label-caps text-[0.65rem] uppercase text-[#B7C0C9] block">{priceTitle}</span>
            <span className="font-headline-sm font-bold text-[#D8AA36]">
              {price} {priceSuffix && <span className="font-label-sm text-[0.7rem] text-[#B7C0C9] font-normal">{priceSuffix}</span>}
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <button className="w-8 h-8 rounded-none border border-[#B7C0C9]/25 flex items-center justify-center text-[#B7C0C9] hover:text-[#D8AA36] hover:border-[#D8AA36] transition-colors" title="Call Broker">
              <span className="material-symbols-outlined text-[1rem]">call</span>
            </button>
            <button className="w-8 h-8 rounded-none border border-[#B7C0C9]/25 flex items-center justify-center text-[#B7C0C9] hover:text-[#D8AA36] hover:border-[#D8AA36] transition-colors" title="Email Inquiry">
              <span className="material-symbols-outlined text-[1rem]">mail</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
