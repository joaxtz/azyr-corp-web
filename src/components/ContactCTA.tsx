import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Sparkles, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactCTAProps {
  onNavigate: (page: PageId) => void;
  title?: string;
  subtitle?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  onNavigate,
  title = 'Ready to Work With Us?',
  subtitle = 'Discover how AZYR Group of Companies can accelerate your business operations, support infrastructure, and workforce capability.',
}) => {
  return (
    <section className="relative w-full bg-[#001f3f] py-20 lg:py-24 overflow-hidden border-t border-[#0d3866]">
      {/* Geometric background grid & diagonal textures */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 106, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 106, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 50px,
            rgba(184, 149, 106, 0.1) 50px,
            rgba(184, 149, 106, 0.1) 51px
          )`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8956a] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#b8956a]" />
            <span>Strategic Enterprise Engagement</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f0e8] tracking-tight max-w-3xl mx-auto leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#f5f0e8]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#b8956a] hover:bg-[#a58257] text-[#001f3f] font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[#001f3f]" />
            </button>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-sm border border-[#b8956a] text-[#f5f0e8] hover:bg-[#b8956a]/15 font-semibold text-base tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#b8956a]" />
              <span>Explore All Capabilities</span>
            </button>
          </div>

          {/* Subtle reassurance */}
          <p className="text-xs text-[#b8956a]/80 pt-3">
            Response turnaround within 24 business hours from our regional headquarters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
