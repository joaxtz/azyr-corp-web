import React from 'react';
import { PageId } from '../../types';
import { HeroBackground } from '../HeroBackground';
import { VisionMissionSection } from '../VisionMissionSection';
import { ContactCTA } from '../ContactCTA';
import { COMPANY_INFO, CORE_VALUES } from '../../data/companyData';
import {
  ShieldCheck,
  Lightbulb,
  Users2,
  TrendingUp,
  Sparkles,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#b8956a]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#b8956a]" />;
      case 'Users2':
        return <Users2 className="w-6 h-6 text-[#b8956a]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#b8956a]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#b8956a]" />;
    }
  };

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION:
             Navy hero with grid texture, eyebrow "About Us",
             H1 "Who We Are", gold divider line at bottom.
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
              <Building2 className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>About Us</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] tracking-tight">
              Who We Are
            </h1>

            <p className="text-base sm:text-lg text-[#f5f0e8]/80 font-sans leading-relaxed">
              AZYR Group of Companies unites international operational acumen, scalable customer infrastructure, and transformative executive learning to propel modern enterprises forward.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ========================================================
          2. TWO-COLUMN SECTION:
             Left: Story text about AZYR being a diversified business group
             Right: Navy panel with quote
         ======================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Text (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                Our Corporate Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight leading-tight">
                A Diversified Business Group with a Unified Standard of Excellence
              </h2>

              <p className="text-base text-[#536173] leading-relaxed">
                Founded with a conviction that collaborative synergy yields enduring competitive advantages, AZYR Group of Companies has grown into a multinational conglomerate. We operate across key business pillars: strategic e-commerce distribution, omnichannel customer experience, mission-critical technical support, and industry-accredited professional education.
              </p>

              <p className="text-base text-[#536173] leading-relaxed">
                Our enterprise model leverages regional headquarters in Monterrey, Mexico and operational command centers in Bengaluru, India. This cross-continental architecture gives our clients the distinct advantage of high responsiveness, time-zone diversity, and localized operational mastery.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#faf7f2] border border-[#e2d5c3] space-y-1">
                  <div className="flex items-center gap-2 text-[#001f3f] font-serif font-bold text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#b8956a]" />
                    <span>Multinational Reach</span>
                  </div>
                  <p className="text-xs text-[#536173]">
                    Active operations supporting enterprise partners across the Americas and Asia-Pacific.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#faf7f2] border border-[#e2d5c3] space-y-1">
                  <div className="flex items-center gap-2 text-[#001f3f] font-serif font-bold text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#b8956a]" />
                    <span>Cross-Industry Agility</span>
                  </div>
                  <p className="text-xs text-[#536173]">
                    Decoupled service modules customized for retail, enterprise tech, and corporate learning.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Navy Panel with Quote (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-[#001f3f] text-[#f5f0e8] p-8 sm:p-12 rounded-sm border-2 border-[#b8956a] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            >
              {/* Subtle background grid */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(184, 149, 106, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 149, 106, 0.15) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              <div className="relative z-10 space-y-6">
                <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                  The AZYR Credo
                </span>
                <blockquote className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f0e8] leading-snug italic">
                  "{COMPANY_INFO.quote}"
                </blockquote>
                <div className="w-16 h-1 bg-[#b8956a]" />
                <p className="text-sm text-[#f5f0e8]/80 leading-relaxed font-sans">
                  "We do not view partnerships as transactional contracts. We view them as symbiotic alliances where shared vision, transparent accountability, and mutual investment create compounding success."
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-[#0d3866] flex items-center justify-between text-xs text-[#b8956a]">
                <span className="font-semibold uppercase tracking-wider">
                  AZYR Executive Directorate
                </span>
                <span>Monterrey &bull; Bengaluru</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VISION & MISSION SECTION:
             Two cards (01 gold / 02 navy)
         ======================================================== */}
      <VisionMissionSection />

      {/* ========================================================
          4. CORE VALUES SECTION:
             4 cards in 2-column grid —
             Professionalism, Innovation, Collaboration, Continuous Growth —
             each with lucide icon and gold left border.
         ======================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 relative border-t border-[#e2d5c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              Foundational Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001f3f] tracking-tight">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              These fundamental principles guide every decision we make, every partnership we structure, and every service we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {CORE_VALUES.map((value, idx) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#faf7f2]/60 hover:bg-[#faf7f2] p-8 lg:p-10 rounded-sm border-l-4 border-[#b8956a] border-y border-r border-[#e2d5c3] shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-sm bg-[#b8956a]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#b8956a] transition-colors">
                  {getValueIcon(value.iconName)}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold text-[#001f3f] group-hover:text-[#b8956a] transition-colors">
                      {value.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#b8956a] uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#536173] leading-relaxed font-sans">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. NAVY CTA SECTION:
         ======================================================== */}
      <ContactCTA onNavigate={onNavigate} />
    </div>
  );
};
