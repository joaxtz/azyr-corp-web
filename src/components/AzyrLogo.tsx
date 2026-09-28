import React from 'react';

interface AzyrLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const AzyrLogo: React.FC<AzyrLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  onClick,
}) => {
  // Dimension classes based on size variant
  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'md':
        return 'w-10 h-10';
      case 'lg':
        return 'w-14 h-14';
      case 'hero':
        return 'w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32';
      default:
        return 'w-10 h-10';
    }
  };

  const getTitleSize = () => {
    switch (size) {
      case 'sm':
        return 'text-base font-bold tracking-tight';
      case 'md':
        return 'text-lg font-bold tracking-tight';
      case 'lg':
        return 'text-2xl font-bold tracking-tight';
      case 'hero':
        return 'text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none';
      default:
        return 'text-lg font-bold tracking-tight';
    }
  };

  const getTaglineSize = () => {
    switch (size) {
      case 'sm':
        return 'text-[9px] tracking-wider';
      case 'md':
        return 'text-[11px] tracking-widest';
      case 'lg':
        return 'text-xs tracking-widest';
      case 'hero':
        return 'text-sm md:text-base tracking-[0.25em]';
      default:
        return 'text-[11px] tracking-widest';
    }
  };

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`inline-flex items-center gap-3 md:gap-4 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Precision Geometric Monogram Crest */}
      <div
        className={`relative ${getIconSize()} flex-shrink-0 rounded-sm bg-[#001428] border border-[#b8956a]/40 shadow-md overflow-hidden flex items-center justify-center p-1.5 transition-transform duration-300 ${
          onClick ? 'group-hover:border-[#b8956a] group-hover:scale-105' : ''
        }`}
      >
        {/* Subtle inner gold sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b8956a]/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Crisp Geometric Vector Emblem */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#b8956a]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Diamond Accent */}
          <polygon
            points="50,4 96,50 50,96 4,50"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeOpacity="0.4"
          />
          {/* Inner Geometric A & Z Monogram */}
          <path
            d="M50 16L78 80H64L50 48L36 80H22L50 16Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          <path
            d="M33 58H67L60 68H40L33 58Z"
            fill="#001428"
          />
          {/* Horizontal Crossbar in Warm Gold */}
          <line
            x1="32"
            y1="64"
            x2="68"
            y2="64"
            stroke="#f5f0e8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Golden Center Core Diamond */}
          <polygon
            points="50,28 58,42 50,48 42,42"
            fill="#d8c3a5"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif text-[#f5f0e8] ${getTitleSize()} transition-colors ${onClick ? 'group-hover:text-[#b8956a]' : ''}`}>
            AZYR
            <span className="font-light text-[#b8956a] ml-1.5">Group</span>
          </span>
          <span className={`font-sans font-medium uppercase text-[#b8956a] ${getTaglineSize()}`}>
            of Companies
          </span>
        </div>
      )}
    </div>
  );
};
