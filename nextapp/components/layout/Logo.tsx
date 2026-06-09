'use client';

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export function Logo({ className = 'w-10 h-10', imgClassName = '' }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center bg-white rounded-full p-1.5 shadow-sm border border-slate-100/50 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logo/logo_circle.jpeg"
        alt="Cambridge Education Consultants"
        className={`w-full h-full object-cover rounded-full transition-all duration-300 ${imgClassName}`}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
}
