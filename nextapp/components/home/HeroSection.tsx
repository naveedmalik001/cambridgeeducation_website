'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, MessageCircle, Star, ShieldCheck, GraduationCap } from 'lucide-react';
import { getWhatsAppLink, SITE, CONTACT } from '@/lib/utils';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function HeroSection() {
  const officeSlides = [
    '/assets/office/office-1.webp',
    '/assets/office/office-2.webp',
    '/assets/office/office-3.webp',
    '/assets/office/office-4.webp',
    '/assets/office/office-5.webp',
    '/assets/office/office-6.webp',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % officeSlides.length);
    }, 4500); // Cycle every 4.5 seconds
    return () => clearInterval(timer);
  }, [officeSlides.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] pt-24 pb-20"
    >
      {/* Ambient gradient blobs (Stripe/Apple style) */}
      <div className="ambient-blob ambient-blue w-[600px] h-[600px] -top-40 -left-40 opacity-20" />
      <div className="ambient-blob ambient-teal w-[700px] h-[700px] -bottom-30 -right-20 opacity-25" />
      <div className="ambient-blob ambient-orange w-[400px] h-[400px] top-1/4 right-1/4 opacity-15" />

      {/* Modern thin overlay grids to feel like a custom next.js app */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-blue-950/60 border border-blue-800/40 text-teal-400"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Trusted J&K Medical Education Experts
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Your Trusted Partner in
              <span className="block mt-1 text-gradient" style={{ backgroundImage: 'linear-gradient(135deg, #14B8C4 0%, #00D4E0 100%)' }}>
                Turning Dreams
              </span>
              into Reality
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
            >
              Cambridge Education Consultants helps students secure admissions in top medical universities in Tajikistan and leading universities worldwide. End-to-end guidance from Srinagar, J&K.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto mb-10"
            >
              <Link
                href="#tajikistan"
                id="hero-mbbs-btn"
                className="btn-orange flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all text-sm font-semibold rounded-2xl px-6 py-3.5"
                style={{
                  background: 'linear-gradient(135deg, #F7931E, #d97a10)',
                  color: 'white',
                }}
              >
                Explore MBBS in Tajikistan
                <ArrowRight size={16} />
              </Link>

              <a
                href={SITE.brochure}
                download
                id="hero-brochure-btn"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#083B7A] transition-all text-sm font-semibold rounded-2xl px-6 py-3.5 shadow-lg shadow-black/10"
              >
                <Download size={16} />
                Download Brochure
              </a>

              <a
                href={getWhatsAppLink(CONTACT.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2 text-white font-semibold text-sm rounded-2xl px-6 py-3.5 shadow-lg shadow-green-500/15 hover:shadow-green-500/25 transition-all"
                style={{
                  background: '#25D366',
                }}
              >
                <MessageCircle size={16} />
                WhatsApp Counsel
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 w-full"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <ShieldCheck size={16} className="text-teal" />
                WHO Listed &amp; NMC Compliant
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Star size={16} className="text-orange" fill="#F7931E" stroke="#F7931E" />
                500+ Placements (30+ Years)
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <GraduationCap size={16} className="text-teal" />
                English Medium Programs
              </div>
            </motion.div>
          </div>

          {/* Right Column - Student Image & Floating Stats */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Student Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative w-full aspect-[4/5] max-w-[400px] rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-slate-800/40 bg-slate-950 z-10"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={officeSlides[currentSlide]}
                    alt={`Cambridge Education Office - Slide ${currentSlide + 1}`}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-slate-950/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800/60">
                {officeSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      currentSlide === index ? 'bg-teal-400 w-5' : 'bg-slate-500/70 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#031730]/60 via-transparent to-transparent pointer-events-none z-10" />
            </motion.div>

            {/* Floating Stats Card 1 (Experience) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ y: -4 }}
              className="absolute md:-left-6 left-2 top-16 md:scale-100 scale-90 origin-left bg-[#041E42]/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/40 flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-teal">
                <Star size={18} fill="#14B8C4" stroke="#14B8C4" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Years Excellence</div>
              </div>
            </motion.div>

            {/* Floating Stats Card 2 (Students) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              whileHover={{ y: -4 }}
              className="absolute md:-right-4 right-2 bottom-24 md:scale-100 scale-90 origin-right bg-[#041E42]/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/40 flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-teal animate-pulse-ring">
                <GraduationCap size={18} />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Students Placed</div>
              </div>
            </motion.div>

            {/* Floating Stats Card 3 (Visa) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              whileHover={{ y: -4 }}
              className="absolute md:-bottom-6 bottom-4 md:left-10 left-6 md:scale-100 scale-90 origin-left bg-[#041E42]/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/40 flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-orange">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Visa Success</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
