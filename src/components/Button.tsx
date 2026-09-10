import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-label-caps uppercase transition-all duration-300 rounded-none cursor-pointer';

  const variants = {
    primary: 'bg-[#D8AA36] text-[#040e2b] px-lg py-sm font-semibold hover:bg-[#F0C450] hover:tracking-[0.22em]',
    secondary: 'bg-transparent border border-[#D8AA36]/40 text-[#F8F8F6] px-lg py-sm hover:bg-[#D8AA36]/[0.08] hover:border-[#F0C450]',
    text: 'text-[#F8F8F6] pb-2 relative group'
  };

  if (variant === 'text') {
    return (
      <button className={`${baseClasses} ${variants.text} ${className}`} {...props}>
        {children}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D8AA36] origin-left scale-x-100 group-hover:scale-x-105 transition-transform duration-300"></span>
      </button>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
