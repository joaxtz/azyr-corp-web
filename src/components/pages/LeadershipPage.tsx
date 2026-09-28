import React from 'react';
import { PageId } from '../../types';
import { HeroBackground } from '../HeroBackground';
import { LeadershipCard } from '../LeadershipCard';
import { ContactCTA } from '../ContactCTA';
import { TEAM_MEMBERS } from '../../data/companyData';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION:
             Navy hero, eyebrow "The People Behind AZYR",
             H1 "Our Leadership Team", gold divider line at bottom.
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
              <Users className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>The People Behind AZYR</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] tracking-tight">
              Our Leadership Team
            </h1>

            <p className="text-base sm:text-lg text-[#f5f0e8]/80 font-sans leading-relaxed">
              Seasoned executives, technical innovators, and people leaders committed to delivering institutional resilience and collaborative value.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ========================================================
          2. LEADERSHIP TEAM:
             3 team member portrait cards centered,
             each with gold bottom accent bar, name and role.
         ======================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
              Executive Council
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight">
              Executive Stewardship
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              Our leadership unites multi-decade industry experience across cross-border trade, human capital strategy, and enterprise technical triage.
            </p>
          </div>

          {/* Centered 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="h-full"
              >
                <LeadershipCard member={member} showBio={true} />
              </motion.div>
            ))}
          </div>

          {/* Leadership Pillars Subsection */}
          <div className="mt-20 pt-16 border-t border-[#e2d5c3] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-sm bg-[#faf7f2] border border-[#e2d5c3] space-y-3">
              <div className="w-10 h-10 rounded-sm bg-[#001f3f] flex items-center justify-center text-[#b8956a]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#001f3f]">
                Governance & Fiduciary Rigor
              </h3>
              <p className="text-xs sm:text-sm text-[#536173] leading-relaxed">
                Operating under transparent compliance, strict ethical charters, and international audit benchmarks across every entity.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#faf7f2] border border-[#e2d5c3] space-y-3">
              <div className="w-10 h-10 rounded-sm bg-[#001f3f] flex items-center justify-center text-[#b8956a]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#001f3f]">
                People-First Culture
              </h3>
              <p className="text-xs sm:text-sm text-[#536173] leading-relaxed">
                Investing deeply in employee wellbeing, meritocratic advancement, and continuous educational sponsorships.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#faf7f2] border border-[#e2d5c3] space-y-3">
              <div className="w-10 h-10 rounded-sm bg-[#001f3f] flex items-center justify-center text-[#b8956a]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#001f3f]">
                Operational Mastery
              </h3>
              <p className="text-xs sm:text-sm text-[#536173] leading-relaxed">
                Executing SLA commitments with zero complacency, backed by rigorous real-time metric visibility.
              </p>
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
