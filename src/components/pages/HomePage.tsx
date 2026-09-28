import React from 'react';
import { PageId } from '../../types';
import { HeroBackground } from '../HeroBackground';
import { VisionMissionSection } from '../VisionMissionSection';
import { LeadershipCard } from '../LeadershipCard';
import { LocationCard } from '../LocationCard';
import { ContactCTA } from '../ContactCTA';
import {
  COMPANY_INFO,
  WHY_AZYR_POINTS,
  CORE_SERVICES,
  TEAM_MEMBERS,
  LOCATIONS,
} from '../../data/companyData';
import {
  Award,
  Handshake,
  Users,
  Cpu,
  GraduationCap,
  Globe2,
  ShoppingBag,
  Headphones,
  Wrench,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  // Icon mapper for Why AZYR section
  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#b8956a]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#b8956a]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#b8956a]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#b8956a]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#b8956a]" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#b8956a]" />;
      default:
        return <Shield className="w-6 h-6 text-[#b8956a]" />;
    }
  };

  // Icon mapper for Services section
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#001f3f]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#001f3f]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#001f3f]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#001f3f]" />;
      default:
        return <Layers className="w-6 h-6 text-[#001f3f]" />;
    }
  };

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION: Full-screen deep navy, geometric grid SVG,
             animated gold horizontal sweep line at 38% height.
             Large logo + vertical gold divider + "AZYR Group of Companies"
             in big bold heading side by side filling the full width.
             Below: headline, subtext, two CTA buttons.
         ======================================================== */}
      <HeroBackground
        showSweepLine={true}
        heightClass="min-h-screen py-24 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col justify-center">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#b8956a] bg-[#001428]/80 border border-[#b8956a]/30 px-3.5 py-1.5 rounded-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>Global Enterprise Conglomerate</span>
            </div>
          </motion.div>

          {/* Large Logo + Vertical Gold Divider + "AZYR Group of Companies" side by side filling full width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10 pb-10 border-b border-[#b8956a]/30"
          >
            {/* Large Logo Emblem */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-sm bg-[#001428] border-2 border-[#b8956a] p-3 shadow-[0_0_30px_rgba(184,149,106,0.25)] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b8956a]/25 via-transparent to-transparent pointer-events-none" />
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#b8956a]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="50,4 96,50 50,96 4,50"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M50 16L78 80H64L50 48L36 80H22L50 16Z"
                    fill="currentColor"
                    fillOpacity="0.95"
                  />
                  <path d="M33 58H67L60 68H40L33 58Z" fill="#001428" />
                  <line
                    x1="30"
                    y1="64"
                    x2="70"
                    y2="64"
                    stroke="#f5f0e8"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <polygon points="50,28 58,42 50,48 42,42" fill="#d8c3a5" />
                </svg>
              </div>
            </div>

            {/* Vertical Gold Divider (visible on md+) */}
            <div className="hidden md:block w-[3px] self-stretch bg-gradient-to-b from-[#b8956a]/20 via-[#b8956a] to-[#b8956a]/20 shadow-[0_0_10px_rgba(184,149,106,0.5)] flex-shrink-0" />

            {/* "AZYR Group of Companies" Big Bold Heading side by side filling full width */}
            <div className="flex-grow">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f5f0e8] tracking-tight leading-none uppercase">
                AZYR
                <span className="text-[#b8956a] font-normal normal-case ml-3 block sm:inline">
                  Group of Companies
                </span>
              </h1>
              <p className="font-serif italic text-[#b8956a] text-base sm:text-xl lg:text-2xl mt-3 tracking-wide">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </motion.div>

          {/* Below: Headline "Building Partnerships. Empowering People. Creating Opportunities.", Subtext, Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-10 max-w-4xl space-y-6"
          >
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {COMPANY_INFO.heroHeadline}
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#f5f0e8]/85 font-sans leading-relaxed max-w-3xl">
              {COMPANY_INFO.heroSubtext}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Gold Filled Button */}
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-sm bg-[#b8956a] hover:bg-[#a58257] text-[#001f3f] font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[#001f3f]" />
              </button>

              {/* Outlined Button */}
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-sm border-2 border-[#b8956a] text-[#f5f0e8] hover:bg-[#b8956a]/15 font-semibold text-base tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire Now</span>
              </button>
            </div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ========================================================
          2. WHY AZYR SECTION:
             White background, 6 cards in a 3-column grid,
             each with a gold left border, lucide icon, title and description.
             Cards: Professional Excellence, Business Partnerships,
             Customer-Centric Approach, Technical Expertise,
             Continuous Learning, Global Reach.
         ======================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              Value Proposition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001f3f] tracking-tight">
              Why AZYR
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              We engineer strategic resilience, technological precision, and human capital solutions that power market-leading enterprises worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_AZYR_POINTS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#faf7f2]/50 hover:bg-[#faf7f2] p-8 rounded-sm border-l-4 border-[#b8956a] border-y border-r border-[#e2d5c3]/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-[#b8956a]/15 flex items-center justify-center">
                    {getWhyIcon(card.iconName)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#001f3f]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#536173] leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#e2d5c3]/50 flex items-center gap-1.5 text-xs font-semibold text-[#b8956a]">
                  <span>AZYR Standard</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>Enterprise Benchmark</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SERVICES PREVIEW SECTION:
             Cream background, 4 service cards in a 2-column grid
             with icon box, title, description and "Learn More" link.
             Services: E-Commerce & Quick-Commerce Partnerships,
             Customer Support Services, Technical Support Services,
             Online Professional Courses.
             "View All Services" button below.
         ======================================================== */}
      <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 relative border-t border-[#e2d5c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              Capabilities & Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001f3f] tracking-tight">
              Enterprise Services
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              Tailored solutions designed to optimize commercial operations, scale omnichannel support, and elevate corporate talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {CORE_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-sm border border-[#e2d5c3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-sm bg-[#f5f0e8] border border-[#e2d5c3] flex items-center justify-center group-hover:bg-[#b8956a] group-hover:border-[#b8956a] transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#b8956a] bg-[#faf7f2] px-3 py-1 rounded-xs border border-[#e2d5c3]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#001f3f] group-hover:text-[#b8956a] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#536173] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#536173]">
                      {service.checklist.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b8956a]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f5f0e8] flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.id);
                      }
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#001f3f] group-hover:text-[#b8956a] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#b8956a]" />
                  </button>

                  <span className="text-xs text-[#a0aec0]">
                    Verified Capability
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* "View All Services" Button Below */}
          <div className="mt-14 text-center">
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-sm bg-[#001f3f] hover:bg-[#001428] text-[#f5f0e8] font-bold text-sm tracking-wide transition-all shadow hover:shadow-md inline-flex items-center gap-3 cursor-pointer"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4 text-[#b8956a]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. ABOUT SNIPPET:
             Full-width two-column split —
             left navy panel with quote "Bigger Vision. Stronger Together.",
             right white panel with about text and "Learn More About Us" button.
         ======================================================== */}
      <section className="w-full overflow-hidden border-y border-[#e2d5c3]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Navy Panel with Quote */}
          <div className="bg-[#001f3f] text-[#f5f0e8] p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            {/* Grid & Diagonal pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(184, 149, 106, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 149, 106, 0.1) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />
            <div className="relative z-10 space-y-6">
              <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                Corporate Tenet
              </span>
              <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f0e8] leading-tight">
                "{COMPANY_INFO.quote}"
              </blockquote>
              <div className="w-20 h-1 bg-[#b8956a]" />
              <p className="text-sm sm:text-base text-[#f5f0e8]/80 max-w-lg leading-relaxed font-sans">
                A unified standard of excellence that binds our global offices, multi-industry divisions, and collaborative enterprise client relationships.
              </p>
            </div>
          </div>

          {/* Right White Panel with About Text and "Learn More About Us" button */}
          <div className="bg-white text-[#1a202c] p-10 sm:p-16 lg:p-20 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
              About AZYR Group
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight">
              A Diversified Enterprise Built for Global Impact
            </h2>
            <p className="text-base text-[#536173] leading-relaxed">
              {COMPANY_INFO.aboutSummary}
            </p>
            <p className="text-sm text-[#536173] leading-relaxed">
              From managing high-velocity logistics partnerships and resilient technical triage desks to curating specialized executive academies, AZYR empowers partners to achieve sustainable growth with institutional confidence.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-sm bg-[#001f3f] hover:bg-[#002b57] text-[#f5f0e8] font-bold text-sm tracking-wide transition-all shadow inline-flex items-center gap-3 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#b8956a]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. VISION & MISSION SECTION:
             Cream background, two cards side by side —
             Vision (gold numbered 01) and Mission (navy numbered 02).
         ======================================================== */}
      <VisionMissionSection />

      {/* ========================================================
          6. LEADERSHIP TEAM SECTION:
             White background, 3 team member photos with name and role.
             Members: James Willson (Regional Head Manager),
             Sophia Cole (Human Resource Head),
             Paul Smith (Technical Engineer Head).
         ======================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              Executive Directorate
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001f3f] tracking-tight">
              Leadership Team
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              Guiding AZYR Group with international vision, operational rigor, and deep domain expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <LeadershipCard member={member} showBio={false} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('leadership');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#001f3f] hover:text-[#b8956a] transition-colors cursor-pointer"
            >
              <span>View Executive Biographies & Philosophy</span>
              <ArrowRight className="w-4 h-4 text-[#b8956a]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. LOCATIONS SECTION:
             Navy background with grid texture, 2 location cards —
             Headquarters Mexico (Boulevard Díaz Ordaz 130, Santa María, 64650 Monterrey, N.L.)
             and India Office Bengaluru (Tower D, Tower C, & Outer Ring Rd, Bellandur, Bengaluru, Karnataka 560103).
         ======================================================== */}
      <section className="w-full bg-[#001f3f] py-20 lg:py-28 relative overflow-hidden border-t border-[#0d3866]">
        {/* Geometric Grid Texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 106, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 106, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              International Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f0e8] tracking-tight">
              Global Presence
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#f5f0e8]/80 leading-relaxed font-sans">
              Headquartered in North America with regional technology command in South Asia, enabling 24/7 client operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
                  variant="navy"
                  showExtendedInfo={true}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('locations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#b8956a] hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore Detailed Regional Jurisdiction & Contacts</span>
              <ArrowRight className="w-4 h-4 text-[#b8956a]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CONTACT CTA SECTION:
             Navy background, "Ready to Work With Us?" heading,
             "Inquire Now" gold button.
         ======================================================== */}
      <ContactCTA onNavigate={onNavigate} />
    </div>
  );
};
