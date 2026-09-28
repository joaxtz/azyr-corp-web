import React, { useState } from 'react';
import { PageId } from '../types';
import { AzyrLogo } from './AzyrLogo';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'locations', label: 'Locations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#001f3f] border-b border-[#0d3866]/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Left-Aligned */}
          <div className="flex-shrink-0">
            <AzyrLogo
              size="md"
              onClick={() => handleNav('home')}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                currentPage === 'home'
                  ? 'text-[#b8956a]'
                  : 'text-[#f5f0e8]/80 hover:text-[#f5f0e8]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#b8956a]" />
              )}
            </button>

            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                    isActive
                      ? 'text-[#b8956a]'
                      : 'text-[#f5f0e8]/80 hover:text-[#f5f0e8]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#b8956a]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Gold Inquire Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-2.5 rounded-sm bg-[#b8956a] hover:bg-[#a58257] text-[#001f3f] font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#001f3f]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNav('contact')}
              className="px-3 py-1.5 rounded-sm bg-[#b8956a] text-[#001f3f] font-semibold text-xs tracking-wide"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f5f0e8] hover:text-[#b8956a] rounded-sm focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001428] border-b border-[#0d3866] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-3 py-2.5 rounded-sm text-base font-medium flex items-center justify-between ${
              currentPage === 'home'
                ? 'bg-[#00264d] text-[#b8956a] font-semibold'
                : 'text-[#f5f0e8] hover:bg-[#001f3f]'
            }`}
          >
            <span>Home</span>
            {currentPage === 'home' && <span className="w-2 h-2 rounded-full bg-[#b8956a]" />}
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-base font-medium flex items-center justify-between ${
                currentPage === item.id
                  ? 'bg-[#00264d] text-[#b8956a] font-semibold'
                  : 'text-[#f5f0e8] hover:bg-[#001f3f]'
              }`}
            >
              <span>{item.label}</span>
              {currentPage === item.id && <span className="w-2 h-2 rounded-full bg-[#b8956a]" />}
            </button>
          ))}

          <div className="pt-4 border-t border-[#0d3866] flex flex-col gap-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3 text-center bg-[#b8956a] hover:bg-[#a58257] text-[#001f3f] font-bold rounded-sm text-sm tracking-wide shadow"
            >
              Inquire Now
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-[#b8956a] pt-2">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>International Toll Support Available</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
