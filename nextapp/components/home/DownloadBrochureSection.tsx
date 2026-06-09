'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/utils';

export function DownloadBrochureSection() {
  return (
    <section id="download-brochure" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #14B8C4 0%, #0e8a94 40%, #083B7A 100%)',
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'white' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10"
        style={{ background: 'white' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ border: '2px solid white' }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left max-w-xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white',
              }}
            >
              <BookOpen size={12} />
              Free Resource
            </div>
            <h2
              className="font-display text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight"
            >
              Download Cambridge Education Consultants Brochure
            </h2>
            <p
              className="text-base md:text-lg mb-0 lg:mb-6"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Get complete information about MBBS in Tajikistan, university options, fee structures, 
              admission requirements, and our complete range of services.
            </p>

            {/* Features list */}
            <div className="hidden lg:flex flex-col gap-2 mb-0">
              {[
                'University details & fee structures',
                'Admission process & requirements',
                'Visa guidance & documentation',
                'Contact details & office locations',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                  >
                    <ArrowRight size={10} color="white" />
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-5 p-8 rounded-3xl w-full max-w-sm"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Icon */}
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <BookOpen size={48} color="white" />
            </div>

            <div className="text-center">
              <h3 className="text-white font-bold text-xl mb-1">
                Cambridge Brochure 2026
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Complete guide to studying abroad with Cambridge Education Consultants
              </p>
            </div>

            <a
              href={SITE.brochure}
              download
              id="download-brochure-btn"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105"
              style={{
                background: 'white',
                color: '#083B7A',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <Download size={22} />
              Download Now — Free
            </a>

            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              PDF format · No registration required
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
