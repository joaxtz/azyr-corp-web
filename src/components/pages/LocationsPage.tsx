import React from 'react';
import { PageId } from '../../types';
import { HeroBackground } from '../HeroBackground';
import { LocationCard } from '../LocationCard';
import { ContactCTA } from '../ContactCTA';
import { LOCATIONS } from '../../data/companyData';
import { MapPin, Globe2, Building, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION:
             Navy hero, eyebrow "Our Presence", H1 "Our Locations",
             gold divider line at bottom.
         ======================================================== */}
      <HeroBackground heightClass="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#b8956a] bg-[#001428]/80 border border-[#b8956a]/30 px-3.5 py-1.5 rounded-xs">
              <MapPin className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>Our Presence</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] tracking-tight">
              Our Locations
            </h1>

            <p className="text-base sm:text-lg text-[#f5f0e8]/80 font-sans leading-relaxed">
              Strategically established facilities providing dual-hemisphere coverage, bilingual operations, and round-the-clock enterprise continuity.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ========================================================
          2. LOCATION CARDS:
             2 location cards with MapPin icon, gold top border,
             city name and full address.
         ======================================================== */}
      <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              Operational Centers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight">
              Global Operating Hubs
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              Our primary offices in Monterrey and Bengaluru orchestrate operations across North America, Latin America, and the Asia-Pacific corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {LOCATIONS.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <LocationCard
                  location={loc}
                  variant="light"
                  showExtendedInfo={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Cross-Regional Coordination Callout */}
          <div className="mt-16 bg-white rounded-sm border border-[#e2d5c3] p-8 lg:p-10 shadow-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#001f3f] text-[#b8956a] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#001f3f] text-base">
                    Follow-the-Sun SLA
                  </h4>
                  <p className="text-xs text-[#536173] mt-1 leading-relaxed">
                    Timezone handoffs between CST and IST guarantee seamless uninterrupted coverage for client requests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#001f3f] text-[#b8956a] flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#001f3f] text-base">
                    Cross-Border Governance
                  </h4>
                  <p className="text-xs text-[#536173] mt-1 leading-relaxed">
                    Compliant with international corporate tax, privacy regulations, and regional data protection frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#001f3f] text-[#b8956a] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#001f3f] text-base">
                    Secure Infrastructure
                  </h4>
                  <p className="text-xs text-[#536173] mt-1 leading-relaxed">
                    Encrypted telecom pipelines and SOC2-aligned physical security protocols at both primary premises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. NAVY CTA SECTION:
         ======================================================== */}
      <ContactCTA onNavigate={onNavigate} />
    </div>
  );
};
