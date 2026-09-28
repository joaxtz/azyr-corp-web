import React from 'react';
import { LocationDetail } from '../types';
import { MapPin, Phone, Mail, Clock, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface LocationCardProps {
  location: LocationDetail;
  variant?: 'navy' | 'light';
  showExtendedInfo?: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  variant = 'navy',
  showExtendedInfo = true,
}) => {
  const isNavy = variant === 'navy';

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.name} ${location.address}`
  )}`;

  return (
    <div
      className={`rounded-sm transition-all duration-300 border-t-4 border-[#b8956a] relative overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl ${
        isNavy
          ? 'bg-[#001730] border-x border-b border-[#0d3866] text-[#f5f0e8]'
          : 'bg-white border-x border-b border-[#e2d5c3] text-[#001f3f]'
      }`}
    >
      {/* Decorative subtle texture */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#b8956a 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="p-8 sm:p-10 space-y-6">
        {/* Header with Type & Country */}
        <div className="flex items-center justify-between border-b border-[#b8956a]/30 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-[#b8956a]/20 flex items-center justify-center text-[#b8956a]">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest">
              {location.type}
            </span>
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-xs border ${
              isNavy
                ? 'border-[#0d3866] bg-[#001f3f] text-[#f5f0e8]'
                : 'border-[#e2d5c3] bg-[#f5f0e8] text-[#001f3f]'
            }`}
          >
            {location.timezone}
          </span>
        </div>

        {/* City and Name */}
        <div>
          <h3
            className={`font-serif text-2xl sm:text-3xl font-bold ${
              isNavy ? 'text-[#f5f0e8]' : 'text-[#001f3f]'
            }`}
          >
            {location.name}
          </h3>
          <p className="text-sm font-semibold text-[#b8956a] mt-1">
            {location.city}, {location.country}
          </p>
        </div>

        {/* Address with MapPin Icon */}
        <div className="flex items-start gap-3 pt-2">
          <MapPin className="w-6 h-6 text-[#b8956a] flex-shrink-0 mt-0.5" />
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isNavy ? 'text-[#f5f0e8]/85' : 'text-[#536173]'
            }`}
          >
            {location.address}
          </p>
        </div>

        {/* Contact details */}
        <div
          className={`space-y-2.5 pt-4 text-xs sm:text-sm border-t ${
            isNavy ? 'border-[#0d3866]' : 'border-[#f5f0e8]'
          }`}
        >
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#b8956a] flex-shrink-0" />
            <span className={isNavy ? 'text-[#f5f0e8]/90' : 'text-[#1a202c]'}>
              {location.phone}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#b8956a] flex-shrink-0" />
            <a
              href={`mailto:${location.email}`}
              className="text-[#b8956a] hover:underline"
            >
              {location.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#b8956a] flex-shrink-0" />
            <span className={isNavy ? 'text-[#f5f0e8]/75' : 'text-[#536173]'}>
              {location.businessHours}
            </span>
          </div>
        </div>

        {/* Extended Highlights */}
        {showExtendedInfo && location.highlights && (
          <div
            className={`pt-4 border-t ${
              isNavy ? 'border-[#0d3866]' : 'border-[#f5f0e8]'
            }`}
          >
            <p className="text-xs uppercase font-bold tracking-wider text-[#b8956a] mb-3">
              Operational Scope
            </p>
            <ul className="space-y-2">
              {location.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8956a] flex-shrink-0" />
                  <span className={isNavy ? 'text-[#f5f0e8]/85' : 'text-[#536173]'}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* External Map Directions Link */}
      <div
        className={`px-8 sm:px-10 py-4 border-t flex items-center justify-between ${
          isNavy
            ? 'bg-[#001428] border-[#0d3866]'
            : 'bg-[#faf7f2] border-[#e2d5c3]'
        }`}
      >
        <span className="text-xs font-semibold text-[#b8956a]">
          Verified Corporate Office
        </span>
        <a
          href={mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b8956a] hover:text-white transition-colors group"
        >
          <span>View on Map</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};
