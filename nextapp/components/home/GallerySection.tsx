'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryGrid } from '@/components/about/GalleryGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';
import { ArrowRight, Grid3X3 } from 'lucide-react';

export function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#f8fafc' }}>
      {/* Background patterns */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#083B7A 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="University Gallery"
          title="Moments & Memories"
          subtitle="Explore the academic environment, student delegations, and official seminars at our partner medical universities abroad."
        />

        <div className="mt-12 flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Collapsed Teaser State */
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-5xl text-center"
              >
                {/* Preview cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 rounded-2xl overflow-hidden p-3 bg-white border border-slate-100 shadow-sm mb-8">
                  {[
                    '/assets/gallery-new/gallery-1.webp',
                    '/assets/gallery-new/gallery-2.webp',
                    '/assets/gallery-new/gallery-3.webp',
                    '/assets/gallery-new/gallery-4.webp',
                  ].map((src, idx) => (
                    <div key={idx} className="relative h-44 sm:h-52 rounded-xl overflow-hidden group bg-slate-50">
                      <Image
                        src={src}
                        alt="Gallery Teaser Preview"
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/30 transition-colors" />
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold shadow-lg shadow-[#083B7A]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#083B7A]/35 hover:scale-[1.03] cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #083B7A, #0a4a96)' }}
                  >
                    <Grid3X3 size={18} />
                    <span>View Our Album</span>
                    <ArrowRight size={18} className="animate-pulse" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Expanded Full Gallery State */
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl relative">
                  {/* Close Button to collapse back */}
                  <div className="flex justify-end mb-6">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-5 py-2 rounded-full text-xs font-bold text-[#083B7A] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Hide Album
                    </button>
                  </div>
                  <GalleryGrid />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
