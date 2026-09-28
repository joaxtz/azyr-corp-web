import React from 'react';

interface HeroBackgroundProps {
  showSweepLine?: boolean;
  className?: string;
  children?: React.ReactNode;
  heightClass?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  showSweepLine = false,
  className = '',
  children,
  heightClass = 'min-h-[520px] lg:min-h-[620px]',
}) => {
  return (
    <div
      className={`relative w-full bg-[#001f3f] text-[#f5f0e8] overflow-hidden flex flex-col justify-between ${heightClass} ${className}`}
    >
      {/* Base Deep Navy Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#002b57] via-[#001f3f] to-[#001428] pointer-events-none" />

      {/* Geometric SVG Grid Texture */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 106, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 106, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Diagonal Accent Lines Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 64px,
            rgba(184, 149, 106, 0.12) 64px,
            rgba(184, 149, 106, 0.12) 65px
          )`,
        }}
      />

      {/* Subtle Geometric Corner Accent SVG Watermarks */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 text-[#b8956a]/10 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="400" cy="0" r="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="400" cy="0" r="220" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="0" x2="180" y2="400" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      </svg>

      {/* Animated Gold Horizontal Sweep Line at 38% Height */}
      {showSweepLine && (
        <div
          className="absolute left-0 right-0 z-10 pointer-events-none overflow-hidden"
          style={{ top: '38%' }}
        >
          {/* Subtle static guideline */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#b8956a]/30 to-transparent" />
          {/* High-speed shimmer sweep line */}
          <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#b8956a] to-transparent shadow-[0_0_12px_#b8956a] animate-sweep-line" />
        </div>
      )}

      {/* Main Content Slot */}
      <div className="relative z-20 w-full flex-grow flex flex-col justify-center">
        {children}
      </div>

      {/* Permanent Gold Horizontal Divider Line at Bottom of Every Hero */}
      <div className="relative z-20 w-full h-[2px] bg-gradient-to-r from-transparent via-[#b8956a] to-transparent shadow-[0_1px_8px_rgba(184,149,106,0.35)]" />
    </div>
  );
};
