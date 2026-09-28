import React from 'react';
import { PageId } from '../../types';
import { HeroBackground } from '../HeroBackground';
import { ContactCTA } from '../ContactCTA';
import { CORE_SERVICES, ONLINE_COURSES } from '../../data/companyData';
import {
  ShoppingBag,
  Headphones,
  Wrench,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
}) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-8 h-8 text-[#b8956a]" />;
      case 'Headphones':
        return <Headphones className="w-8 h-8 text-[#b8956a]" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-[#b8956a]" />;
      case 'BookOpen':
        return <BookOpen className="w-8 h-8 text-[#b8956a]" />;
      default:
        return <Layers className="w-8 h-8 text-[#b8956a]" />;
    }
  };

  const service1 = CORE_SERVICES[0]; // E-Commerce & Quick-Commerce
  const service2 = CORE_SERVICES[1]; // Customer Support
  const service3 = CORE_SERVICES[2]; // Technical Support
  const service4 = CORE_SERVICES[3]; // Online Professional Courses

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION:
             Navy hero, eyebrow "What We Offer", H1 "Our Services",
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
              <Layers className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>What We Offer</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] tracking-tight">
              Our Services
            </h1>

            <p className="text-base sm:text-lg text-[#f5f0e8]/80 font-sans leading-relaxed">
              Engineered operational partnerships, responsive customer and technical support ecosystems, and accredited executive learning pathways.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ========================================================
          SERVICE 1: E-Commerce & Quick-Commerce Partnerships
          Layout: Text on Left + Checklist Card on Right (White background)
         ======================================================== */}
      <section
        id="ecommerce-partnerships"
        className="w-full bg-white py-20 lg:py-24 border-b border-[#e2d5c3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text on Left (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#001f3f] flex items-center justify-center">
                  {getServiceIcon(service1.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                    01 / {service1.badge}
                  </span>
                  <span className="text-xs text-[#536173]">
                    Scalable Enterprise Distribution
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight">
                {service1.title}
              </h2>

              <p className="text-base sm:text-lg text-[#536173] leading-relaxed">
                {service1.fullDesc}
              </p>

              <p className="text-sm text-[#536173] leading-relaxed">
                Whether deploying specialized regional dark store logistics or scaling digital catalog distribution across multi-territory digital storefronts, our infrastructure delivers reliability, speed, and real-time operational transparency.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-sm bg-[#001f3f] hover:bg-[#002a54] text-[#f5f0e8] font-bold text-sm tracking-wide transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Commerce Partnerships</span>
                  <ArrowRight className="w-4 h-4 text-[#b8956a]" />
                </button>
              </div>
            </motion.div>

            {/* Checklist Card on Right (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-[#faf7f2] rounded-sm border-t-4 border-[#b8956a] border-x border-b border-[#e2d5c3] p-8 sm:p-10 shadow-md"
            >
              <h3 className="font-serif text-xl font-bold text-[#001f3f] mb-4 pb-3 border-b border-[#e2d5c3]">
                Service Delivery Scope
              </h3>

              <ul className="space-y-4">
                {service1.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#b8956a] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sm text-[#001f3f] block">
                        {item}
                      </span>
                      <span className="text-xs text-[#536173]">
                        Structured enterprise benchmark & SLA metrics.
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#e2d5c3] flex items-center justify-between text-xs text-[#536173]">
                <span className="font-semibold text-[#b8956a] uppercase tracking-wider">
                  Engagement Model
                </span>
                <span>Direct Dedicated Directorate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE 2: Customer Support Services
          Layout: Checklist Card on Left + Text on Right (Cream background)
         ======================================================== */}
      <section
        id="customer-support"
        className="w-full bg-[#f5f0e8] py-20 lg:py-24 border-b border-[#e2d5c3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Checklist Card on Left (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 order-2 lg:order-1 bg-white rounded-sm border-t-4 border-[#001f3f] border-x border-b border-[#e2d5c3] p-8 sm:p-10 shadow-md"
            >
              <h3 className="font-serif text-xl font-bold text-[#001f3f] mb-4 pb-3 border-b border-[#e2d5c3]">
                Customer Support Deliverables
              </h3>

              <ul className="space-y-4">
                {service2.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#001f3f] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sm text-[#001f3f] block">
                        {item}
                      </span>
                      <span className="text-xs text-[#536173]">
                        Bilingual Spanish-English & regional language capability.
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#e2d5c3] flex items-center justify-between text-xs text-[#536173]">
                <span className="font-semibold text-[#001f3f] uppercase tracking-wider">
                  Omnichannel Standard
                </span>
                <span>Voice &bull; Chat &bull; Ticket CRM</span>
              </div>
            </motion.div>

            {/* Text on Right (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#001f3f] flex items-center justify-center">
                  {getServiceIcon(service2.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                    02 / {service2.badge}
                  </span>
                  <span className="text-xs text-[#536173]">
                    High-Empathy Customer Engagement
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight">
                {service2.title}
              </h2>

              <p className="text-base sm:text-lg text-[#536173] leading-relaxed">
                {service2.fullDesc}
              </p>

              <p className="text-sm text-[#536173] leading-relaxed">
                With operating teams trained in active listening, swift dispute resolution, and rigorous CSAT monitoring, AZYR handles millions of critical touchpoints annually on behalf of consumer brands and enterprise platforms.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-sm bg-[#b8956a] hover:bg-[#a58257] text-[#001f3f] font-bold text-sm tracking-wide transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Customer Support Services</span>
                  <ArrowRight className="w-4 h-4 text-[#001f3f]" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE 3: Technical Support Services
          Layout: Text on Left + Checklist Card on Right (White background)
         ======================================================== */}
      <section
        id="technical-support"
        className="w-full bg-white py-20 lg:py-24 border-b border-[#e2d5c3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text on Left (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#001f3f] flex items-center justify-center">
                  {getServiceIcon(service3.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block">
                    03 / {service3.badge}
                  </span>
                  <span className="text-xs text-[#536173]">
                    Mission-Critical Systems Triage
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#001f3f] tracking-tight">
                {service3.title}
              </h2>

              <p className="text-base sm:text-lg text-[#536173] leading-relaxed">
                {service3.fullDesc}
              </p>

              <p className="text-sm text-[#536173] leading-relaxed">
                Operating out of our Bengaluru and Monterrey technical centers, our Tier-1 to Tier-3 support teams provide diagnostic expertise across server runtimes, integration APIs, database queries, and client-side application bottlenecks.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-sm bg-[#001f3f] hover:bg-[#002a54] text-[#f5f0e8] font-bold text-sm tracking-wide transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Deploy Technical Support Teams</span>
                  <ArrowRight className="w-4 h-4 text-[#b8956a]" />
                </button>
              </div>
            </motion.div>

            {/* Checklist Card on Right (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-[#faf7f2] rounded-sm border-t-4 border-[#b8956a] border-x border-b border-[#e2d5c3] p-8 sm:p-10 shadow-md"
            >
              <h3 className="font-serif text-xl font-bold text-[#001f3f] mb-4 pb-3 border-b border-[#e2d5c3]">
                Technical Capabilities Checklist
              </h3>

              <ul className="space-y-4">
                {service3.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#b8956a] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sm text-[#001f3f] block">
                        {item}
                      </span>
                      <span className="text-xs text-[#536173]">
                        Strict escalation governance & root-cause audits.
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#e2d5c3] flex items-center justify-between text-xs text-[#536173]">
                <span className="font-semibold text-[#b8956a] uppercase tracking-wider">
                  Availability Standard
                </span>
                <span>24/7 Follow-the-Sun Rotations</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE 4: Online Professional Courses
          Layout: 4 course cards in 2-column grid:
          - HR Professional Course
          - Personality Development Course
          - Foreign Language Courses
          - Professional Skills Development
         ======================================================== */}
      <section
        id="online-courses"
        className="w-full bg-[#f5f0e8] py-20 lg:py-28 border-b border-[#e2d5c3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8956a] font-bold mb-2">
              <GraduationCap className="w-4 h-4 text-[#b8956a]" />
              <span>AZYR Academy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001f3f] tracking-tight">
              {service4.title}
            </h2>
            <div className="w-16 h-1 bg-[#b8956a] mx-auto mt-4 mb-4" />
            <p className="text-base text-[#536173] leading-relaxed">
              Curated corporate upskilling programs and certification pathways designed for modern corporate and international workplace excellence.
            </p>
          </div>

          {/* 4 Course Cards in 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {ONLINE_COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-sm border-t-4 border-[#b8956a] border-x border-b border-[#e2d5c3] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-[#b8956a] tracking-wider">
                      Course 0{idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#536173] bg-[#f5f0e8] px-2.5 py-1 rounded-xs border border-[#e2d5c3]">
                      <Clock className="w-3.5 h-3.5 text-[#b8956a]" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#001f3f]">
                    {course.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#b8956a]">
                    {course.tagline}
                  </p>

                  <p className="text-sm text-[#536173] leading-relaxed font-sans">
                    {course.description}
                  </p>

                  <div className="pt-3 border-t border-[#f5f0e8]">
                    <p className="text-xs uppercase font-bold text-[#001f3f] mb-2">
                      Core Modules
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.keyTopics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-[#536173] bg-[#faf7f2] px-2 py-0.5 rounded-xs border border-[#e2d5c3]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f5f0e8] flex items-center justify-between">
                  <span className="text-xs text-[#536173]">
                    {course.delivery}
                  </span>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#001f3f] hover:text-[#b8956a] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire for Enrollment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#b8956a]" />
                  </button>
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
