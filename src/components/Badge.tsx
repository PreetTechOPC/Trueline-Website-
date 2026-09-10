import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-sm py-xxs bg-[#012498]/40 border border-[#D8AA36]/30 font-label-caps uppercase text-[#F8F8F6] rounded-none">
      {children}
    </span>
  );
}
