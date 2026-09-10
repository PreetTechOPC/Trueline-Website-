import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <div className={`relative flex items-center bg-transparent border border-[#B7C0C9]/25 focus-within:border-[#D8AA36] transition-colors duration-300 rounded-none group ${className}`}>
      {icon && (
        <span className="material-symbols-outlined text-[#D8AA36] ml-sm text-[1.2rem]">
          {icon}
        </span>
      )}
      <input 
        className="w-full bg-transparent px-sm py-sm text-[#F8F8F6] font-body-sm focus:outline-none placeholder:text-[#B7C0C9]/60 focus:placeholder:-translate-y-3 focus:placeholder:text-[0.65rem] focus:placeholder:font-label-caps focus:placeholder:uppercase focus:placeholder:text-[#D8AA36] transition-all"
        {...props} 
      />
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export function Select({ options, className = '', ...props }: SelectProps) {
  return (
    <div className={`relative bg-transparent border border-[#B7C0C9]/25 focus-within:border-[#D8AA36] transition-colors duration-300 rounded-none ${className}`}>
      <select 
        className="w-full bg-transparent text-[#F8F8F6] font-body-sm px-sm py-sm focus:outline-none cursor-pointer appearance-none rounded-none"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#040e2b] text-[#F8F8F6]">
            {opt.label}
          </option>
        ))}
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-[#D8AA36] pointer-events-none text-[1.1rem]">
        expand_more
      </span>
    </div>
  );
}
