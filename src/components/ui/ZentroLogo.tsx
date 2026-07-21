import React from 'react';

interface ZentroLogoProps {
  variant?: 'icon' | 'full' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ZentroLogo: React.FC<ZentroLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: { vcet: 'h-6 sm:h-7', text: 'text-xs sm:text-sm', sub: 'text-[9px]' },
    md: { vcet: 'h-8 sm:h-9', text: 'text-sm sm:text-base', sub: 'text-[10px]' },
    lg: { vcet: 'h-10 sm:h-12', text: 'text-lg sm:text-xl', sub: 'text-xs' },
    xl: { vcet: 'h-14 sm:h-16', text: 'text-xl sm:text-2xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (variant === 'icon') {
    return (
      <img
        src="/vcet_logo.png"
        alt="VCET Logo"
        className={`${currentSize.vcet} object-contain shrink-0 ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Official VCET College Logo */}
      <div className="bg-white/95 p-1 rounded-lg shadow-xs flex items-center justify-center shrink-0 border border-slate-200/50">
        <img
          src="/vcet_logo.png"
          alt="VCET Logo"
          className={`${currentSize.vcet} object-contain max-w-[120px] sm:max-w-[160px]`}
        />
      </div>

      <div className="w-[1px] h-6 sm:h-8 bg-slate-700/60 shrink-0" />

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className={`font-black tracking-wider text-white group-hover:text-blue-300 transition-colors ${currentSize.text}`}>
            ZENTRO
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 border border-blue-400/30 shadow-xs">
            2026
          </span>
        </div>
        <span className={`text-slate-400 font-medium ${currentSize.sub}`}>
          Dept. of Computer Science & Engineering
        </span>
      </div>
    </div>
  );
};
