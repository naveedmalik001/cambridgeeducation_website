'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Users, School, Building2, LucideIcon } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  category: 'Officials' | 'Campus' | 'Students';
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/assets/gallery-new/gallery-1.webp',
    title: 'University Officials & Kashmiri Student Cohort',
    category: 'Officials',
    description: 'Group photo of university administration and Kashmiri medical students outside the Tajik National University Medical Center.'
  },
  {
    src: '/assets/gallery-new/gallery-2.webp',
    title: 'Students at Ismoil Somoni Monument',
    category: 'Students',
    description: 'Cambridge Education Consultants students visiting the iconic Ismoil Somoni Monument in Dushanbe, Tajikistan.'
  },
  {
    src: '/assets/gallery-new/gallery-3.webp',
    title: 'Delegation Meeting in Tajikistan',
    category: 'Officials',
    description: 'Cambridge Education Consultants director shaking hands with senior university officials during an official visit.'
  },
  {
    src: '/assets/gallery-new/gallery-4.webp',
    title: 'Medical Students in Practical Session',
    category: 'Students',
    description: 'Kashmiri medical students in white coats posing during their practical classes inside the anatomical science department.'
  },
  {
    src: '/assets/gallery-new/gallery-5-fixed.webp',
    title: 'Meeting with Academic Delegates',
    category: 'Officials',
    description: 'Discussion and exchange of educational details beside the Avicenna wall painting in the university central hall.'
  },
  {
    src: '/assets/gallery-new/gallery-6-fixed.webp',
    title: 'Anatomy Laboratory Session',
    category: 'Campus',
    description: 'Inspection of state-of-the-art anatomical models and laboratory facilities at our partner medical university in Tajikistan.'
  },
  {
    src: '/assets/gallery-new/gallery-7.webp',
    title: 'Official Partnership Alignment',
    category: 'Officials',
    description: 'Joint delegation meeting between university officials and Cambridge Education leaders, aligned under the Tajikistan flag.'
  },
  {
    src: '/assets/gallery-new/gallery-8.webp',
    title: 'Khatlon State Medical University Delegation',
    category: 'Campus',
    description: 'Official visit at the entrance hall of Khatlon State Medical University, a premier choice for MBBS students.'
  },
  {
    src: '/assets/gallery-new/gallery-9.webp',
    title: 'Academic Visit at Tajikistan Institution',
    category: 'Officials',
    description: 'Director of Cambridge Education Consultants during a visit to a prestigious academic institution in Dushanbe.'
  },
  {
    src: '/assets/gallery-new/gallery-10.webp',
    title: 'Student Orientation and Briefing Meeting',
    category: 'Students',
    description: 'Orientation briefing meeting for student batches and university representatives in a lounge hall.'
  }
];

type CategoryFilter = 'all' | 'Officials' | 'Campus' | 'Students';

interface CategoryConfig {
  id: CategoryFilter;
  label: string;
  icon?: LucideIcon;
}

const categories: CategoryConfig[] = [
  { id: 'all', label: 'All Moments' },
  { id: 'Officials', label: 'Officials & Delegates', icon: Users },
  { id: 'Campus', label: 'Campus & Labs', icon: School },
  { id: 'Students', label: 'Student Life', icon: Building2 }
];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (itemSrc: string) => {
    const index = galleryItems.findIndex((item) => item.src === itemSrc);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex! + 1) % galleryItems.length);
    }
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex! - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [lightboxIndex]);

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#083B7A]"
              style={{
                color: isActive ? '#fff' : '#475569',
                backgroundColor: isActive ? '#083B7A' : 'rgba(8,59,122,0.04)',
                border: isActive ? '1px solid #083B7A' : '1px solid rgba(8,59,122,0.08)'
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: '#083B7A', zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {cat.icon && <cat.icon size={16} className={isActive ? 'text-white' : 'text-slate-500'} />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.src}
              className="group flex flex-col rounded-2xl overflow-hidden border border-slate-100 bg-white transition-all duration-300 hover:shadow-xl hover:border-slate-200"
              style={{ boxShadow: '0 4px 20px rgba(8,59,122,0.03)' }}
            >
              {/* Image Container */}
              <div
                className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-50 cursor-pointer"
                onClick={() => openLightbox(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={item.src.includes('gallery-1') || item.src.includes('gallery-2')}
                />
                
                {/* Visual Enhancements: Category Tag */}
                <div
                  className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-white shadow-sm tracking-wider uppercase"
                  style={{ background: 'rgba(8,59,122,0.85)', backdropFilter: 'blur(8px)' }}
                >
                  {item.category}
                </div>

                {/* Hover overlay with glassmorphism */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-[#083B7A]/90 hover:bg-[#083B7A] transition-colors"
                  >
                    <Maximize2 size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col flex-grow border-t border-slate-50">
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-2 block"
                  style={{ color: '#14B8C4' }}
                >
                  {item.category}
                </span>
                <h3
                  className="font-display text-lg font-bold mb-2 group-hover:text-[#083B7A] transition-colors line-clamp-1"
                  style={{ color: '#0f172a' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md"
            style={{ touchAction: 'none' }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Lightbox Body */}
            <div className="flex-grow flex items-center justify-center relative px-4 md:px-16 py-12">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-6 z-10 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Image Container with Framer Motion Animation */}
              <div className="relative w-full max-w-5xl h-[55vh] md:h-[65vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={galleryItems[lightboxIndex].src}
                      alt={galleryItems[lightboxIndex].title}
                      fill
                      sizes="90vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-6 z-10 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Info Panel at Bottom */}
            <div className="bg-slate-900 border-t border-white/10 p-6 md:px-12 text-white text-center">
              <div className="max-w-3xl mx-auto space-y-2">
                <div className="flex items-center justify-center gap-3">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(20, 184, 196, 0.2)', color: '#14B8C4' }}
                  >
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <span className="text-xs text-white/50">
                    {lightboxIndex + 1} of {galleryItems.length}
                  </span>
                </div>
                <h4 className="font-display text-lg md:text-xl font-extrabold tracking-tight">
                  {galleryItems[lightboxIndex].title}
                </h4>
                <p className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
                  {galleryItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
