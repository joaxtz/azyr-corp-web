/**
 * AZYR Group of Companies - Official Corporate Website
 * @license Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { LeadershipPage } from './components/pages/LeadershipPage';
import { LocationsPage } from './components/pages/LocationsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'leadership', 'locations', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    // Check initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    navigateTo('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8] text-[#1a202c]">
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={selectedServiceId}
          />
        )}
        {currentPage === 'leadership' && (
          <LeadershipPage onNavigate={navigateTo} />
        )}
        {currentPage === 'locations' && <LocationsPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      {/* Global Corporate Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
