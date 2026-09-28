import React, { useState } from 'react';
import { PageId } from '../../types';
import { HeroBackground } from '../HeroBackground';
import { LOCATIONS, COMPANY_INFO } from '../../data/companyData';
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  RotateCcw,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real enterprise dispatch
    setTimeout(() => {
      const generatedId = `AZYR-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO SECTION:
             Navy hero, eyebrow "Get in Touch", H1 "Inquire Now",
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
              <Sparkles className="w-3.5 h-3.5 text-[#b8956a]" />
              <span>Get in Touch</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] tracking-tight">
              Inquire Now
            </h1>

            <p className="text-base sm:text-lg text-[#f5f0e8]/80 font-sans leading-relaxed">
              Initiate a strategic partnership dialogue, request service proposals, or connect with our regional corporate offices.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* ========================================================
          2. TWO-COLUMN LAYOUT:
             Left: Office addresses with MapPin icons + general enquiries note
             Right: Contact form (Full Name, Email Address, Company/Organisation, Message, "Send Enquiry" button)
             On submit: Success state with thank you message
         ======================================================== */}
      <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Office Addresses with MapPin icons + General Enquiries Note (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-2">
                  Official Channels
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#001f3f] tracking-tight">
                  Global Office Directory
                </h2>
                <div className="w-12 h-1 bg-[#b8956a] mt-3 mb-4" />
                <p className="text-sm text-[#536173] leading-relaxed">
                  Our corporate secretariats in Monterrey and Bengaluru handle executive partnerships, client onboarding, and general inquiries.
                </p>
              </div>

              {/* Office Addresses Cards */}
              <div className="space-y-6">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.id}
                    className="bg-white rounded-sm border-l-4 border-[#b8956a] border-y border-r border-[#e2d5c3] p-6 shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-lg text-[#001f3f]">
                        {loc.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#b8956a] uppercase">
                        {loc.country}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#b8956a] flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#536173] leading-relaxed">
                        {loc.address}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#f5f0e8] flex flex-col space-y-1.5 text-xs text-[#536173]">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#b8956a]" />
                        <span className="font-medium text-[#001f3f]">{loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#b8956a]" />
                        <a href={`mailto:${loc.email}`} className="text-[#b8956a] hover:underline">
                          {loc.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#b8956a]" />
                        <span>{loc.businessHours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* General Enquiries Note */}
              <div className="bg-[#001f3f] text-[#f5f0e8] p-6 rounded-sm border border-[#0d3866] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8956a]">
                  <Mail className="w-4 h-4 text-[#b8956a]" />
                  <span>General Corporate Enquiries</span>
                </div>
                <p className="text-xs text-[#f5f0e8]/80 leading-relaxed font-sans">
                  For press, institutional alliances, or supplier tenders, you may also email{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.inquiryEmail}`}
                    className="text-[#b8956a] underline font-semibold"
                  >
                    {COMPANY_INFO.inquiryEmail}
                  </a>
                  . Our corporate affairs team responds to all formal correspondence within 24–48 business hours.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Contact Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white rounded-sm border-t-4 border-[#001f3f] border-x border-b border-[#e2d5c3] p-8 sm:p-12 shadow-lg"
            >
              {submitted ? (
                /* Success State with Thank You Message */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#b8956a]/15 text-[#b8956a] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest">
                      Inquiry Registered
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#001f3f]">
                      Thank You, {formData.fullName}
                    </h3>
                    <p className="text-sm sm:text-base text-[#536173] max-w-md mx-auto leading-relaxed">
                      Your inquiry has been successfully transmitted to the AZYR Executive Directorate. A dedicated client advisor will review your specifications and get in touch.
                    </p>
                  </div>

                  <div className="bg-[#faf7f2] border border-[#e2d5c3] p-4 rounded-sm text-xs text-[#536173] max-w-sm mx-auto space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-[#001f3f]">Reference Code:</span>
                      <span className="font-mono font-bold text-[#b8956a]">{inquiryId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-[#001f3f]">Confirmation Email:</span>
                      <span>{formData.email}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-sm border border-[#b8956a] text-[#001f3f] hover:bg-[#b8956a]/15 font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#b8956a]" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#b8956a] tracking-widest block mb-1">
                      Direct Engagement Form
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#001f3f]">
                      Inquire Now
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536173] mt-1">
                      Please provide your details below and our regional coordination team will contact you.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#001f3f]">
                      Full Name <span className="text-[#b8956a]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-4 py-3 rounded-sm border border-[#e2d5c3] focus:border-[#b8956a] focus:ring-1 focus:ring-[#b8956a] text-sm text-[#001f3f] placeholder-[#a0aec0] bg-[#fcfaf7]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#001f3f]">
                      Email Address <span className="text-[#b8956a]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-sm border border-[#e2d5c3] focus:border-[#b8956a] focus:ring-1 focus:ring-[#b8956a] text-sm text-[#001f3f] placeholder-[#a0aec0] bg-[#fcfaf7]"
                    />
                  </div>

                  {/* Company / Organisation */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#001f3f]">
                      Company / Organisation <span className="text-[#b8956a]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global Logistics Inc."
                      className="w-full px-4 py-3 rounded-sm border border-[#e2d5c3] focus:border-[#b8956a] focus:ring-1 focus:ring-[#b8956a] text-sm text-[#001f3f] placeholder-[#a0aec0] bg-[#fcfaf7]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#001f3f]">
                      Message / Inquiry Details <span className="text-[#b8956a]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your operational scope, partnership objectives, or course enrollment questions..."
                      className="w-full px-4 py-3 rounded-sm border border-[#e2d5c3] focus:border-[#b8956a] focus:ring-1 focus:ring-[#b8956a] text-sm text-[#001f3f] placeholder-[#a0aec0] bg-[#fcfaf7] resize-none"
                    />
                  </div>

                  {/* "Send Enquiry" Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-sm bg-[#b8956a] hover:bg-[#a58257] text-[#001f3f] font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4 text-[#001f3f]" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#536173] text-center pt-1">
                    By submitting this form, you acknowledge that AZYR Group will process your information strictly for corporate communication in compliance with privacy guidelines.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
