import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Eye, Target, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle Cream Texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(184, 149, 106, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8956a] font-bold mb-3">
            <Compass className="w-4 h-4 text-[#b8956a]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001f3f] tracking-tight">
            Vision & Mission
          </h2>
          <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#536173] leading-relaxed">
            Our strategic compass articulates where we are headed and the foundational commitments that govern how we serve our global clients.
          </p>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 01: Vision (Gold Numbered 01) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-sm border-t-4 border-[#b8956a] p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background Watermark Number 01 */}
            <span className="absolute top-4 right-6 text-7xl lg:text-8xl font-serif font-black text-[#b8956a]/15 select-none pointer-events-none">
              01
            </span>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-[#b8956a]/15 flex items-center justify-center text-[#b8956a]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                    Direction 01
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#001f3f]">
                    Our Vision
                  </h3>
                </div>
              </div>

              <blockquote className="font-serif text-lg text-[#001f3f] font-normal leading-relaxed mb-6 italic">
                "{COMPANY_INFO.visionStatement}"
              </blockquote>

              <p className="text-sm text-[#536173] leading-relaxed">
                We envision a unified international ecosystem where businesses of all scales unlock agile operational depth, borderless customer engagement, and high-caliber human talent without legacy friction.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#f5f0e8] flex items-center gap-2 text-xs font-semibold text-[#b8956a] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future-Forward Enterprise Horizon</span>
            </div>
          </motion.div>

          {/* Card 02: Mission (Navy Numbered 02) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-sm border-t-4 border-[#001f3f] p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background Watermark Number 02 */}
            <span className="absolute top-4 right-6 text-7xl lg:text-8xl font-serif font-black text-[#001f3f]/10 select-none pointer-events-none">
              02
            </span>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-[#001f3f]/10 flex items-center justify-center text-[#001f3f]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#001f3f] tracking-widest block">
                    Execution 02
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#001f3f]">
                    Our Mission
                  </h3>
                </div>
              </div>

              <blockquote className="font-serif text-lg text-[#001f3f] font-normal leading-relaxed mb-6 italic">
                "{COMPANY_INFO.missionStatement}"
              </blockquote>

              <p className="text-sm text-[#536173] leading-relaxed">
                By blending operational agility, stringent engineering protocols, empathetic customer care, and continuous professional upskilling, we deliver measurable competitive advantages to our clients day in and day out.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#f5f0e8] flex items-center gap-2 text-xs font-semibold text-[#001f3f] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#001f3f]" />
              <span>Real Execution. Lasting Impact.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
