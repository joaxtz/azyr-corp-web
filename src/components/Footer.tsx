import React from 'react';
import { PageId } from '../types';
import { AzyrLogo } from './AzyrLogo';
import { COMPANY_INFO, LOCATIONS } from '../data/companyData';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#001428] text-[#f5f0e8] border-t-2 border-[#b8956a] relative z-20">
      {/* Upper Subtle Grid Texture */}
      <div
        className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(184, 149, 106, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 149, 106, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand + Tagline + Description (5 cols on md/lg) */}
          <div className="md:col-span-5 space-y-6">
            <AzyrLogo
              size="lg"
              onClick={() => handleNav('home')}
            />

            <div className="space-y-3">
              <p className="font-serif italic text-[#b8956a] text-lg font-medium tracking-wide">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-sm text-[#f5f0e8]/75 leading-relaxed max-w-md">
                {COMPANY_INFO.aboutSummary}
              </p>
            </div>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#f5f0e8]/60">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b8956a]" />
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="hover:text-[#b8956a] transition-colors"
                >
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b8956a]" />
                <span>Global Enquiries: {COMPANY_INFO.phoneMexico}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols on md/lg) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#f5f0e8] tracking-wide border-b border-[#0d3866] pb-3 flex items-center justify-between">
              <span>Quick Navigation</span>
              <span className="w-8 h-[2px] bg-[#b8956a]" />
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About AZYR' },
                { id: 'services', label: 'Enterprise Services' },
                { id: 'leadership', label: 'Leadership Team' },
                { id: 'locations', label: 'Global Locations' },
                { id: 'contact', label: 'Contact & Inquiries' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id as PageId)}
                    className="flex items-center gap-2 text-[#f5f0e8]/70 hover:text-[#b8956a] transition-colors group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#b8956a] transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Two Office Addresses (4 cols on md/lg) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#f5f0e8] tracking-wide border-b border-[#0d3866] pb-3 flex items-center justify-between">
              <span>Our Global Offices</span>
              <span className="w-8 h-[2px] bg-[#b8956a]" />
            </h3>

            <div className="space-y-6">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="p-4 rounded-sm bg-[#001f3f]/60 border border-[#0d3866] hover:border-[#b8956a]/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#b8956a] flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif font-bold text-sm text-[#f5f0e8]">
                          {loc.name}
                        </h4>
                        <span className="text-[10px] uppercase font-semibold text-[#b8956a] tracking-wider">
                          {loc.country}
                        </span>
                      </div>
                      <p className="text-xs text-[#f5f0e8]/70 leading-relaxed">
                        {loc.address}
                      </p>
                      <p className="text-[11px] text-[#b8956a] pt-1">
                        {loc.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line at Bottom */}
      <div className="border-t border-[#0d3866] bg-[#000f1f] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5f0e8]/50">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#b8956a] transition-colors"
            >
              Corporate Governance
            </button>
            <span className="text-[#0d3866]">|</span>
            <button
              onClick={() => handleNav('services')}
              className="hover:text-[#b8956a] transition-colors"
            >
              Service Level Agreements
            </button>
            <span className="text-[#0d3866]">|</span>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#b8956a] transition-colors"
            >
              Legal & Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
