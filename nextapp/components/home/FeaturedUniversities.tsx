'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { universities } from '@/data/universities';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export function FeaturedUniversities() {
  return (
    <section
      id="featured-universities"
      className="section-padding"
      style={{ background: '#f1f5f9' }}
    >
      <div className="container-custom">
        <SectionHeading
          badge="Featured Universities"
          title="Top Medical Universities in Tajikistan"
          subtitle="All universities are WHO listed, NMC compliant, and FMGE/NExT eligible. Start your MBBS journey with trusted institutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {universities.map((uni, index) => (
            <motion.div
              key={uni.slug}
              variants={cardVariants}
              className="card-hover group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(8,59,122,0.85) 0%, transparent 60%)' }}
                />
                {/* Rank badge */}
                {index === 0 && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ background: '#F7931E' }}
                  >
                    ⭐ Ranked #1 in Tajikistan
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                    <MapPin size={13} className="text-teal" />
                    {uni.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3
                      className="font-display text-lg font-extrabold mb-1 group-hover:text-primary transition-colors leading-tight"
                      style={{ color: '#0f172a' }}
                    >
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs" style={{ color: '#64748b' }}>
                      <Calendar size={12} />
                      Est. {uni.established}
                    </div>
                  </div>
                  <div
                    className="px-2.5 py-1 rounded-lg text-xs font-bold flex-shrink-0"
                    style={{ background: 'rgba(8,59,122,0.06)', color: '#083B7A' }}
                  >
                    {uni.shortName}
                  </div>
                </div>

                {/* Duration */}
                <div
                  className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-4 uppercase tracking-wider"
                  style={{ background: 'rgba(20,184,196,0.06)', color: '#0e8a94' }}
                >
                  <CheckCircle2 size={13} />
                  {uni.mbbsDuration}
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-2 mb-5 flex-1">
                  {uni.highlights.slice(0, 5).map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: '#14B8C4' }}
                      />
                      <span className="text-xs font-medium" style={{ color: '#475569' }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Accreditation badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {uni.accreditations.slice(0, 4).map((acc) => (
                    <span
                      key={acc}
                      className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: 'rgba(8,59,122,0.06)', color: '#083B7A' }}
                    >
                      {acc}
                    </span>
                  ))}
                </div>

                {/* Fees */}
                <div
                  className="rounded-2xl p-4 mb-5"
                  style={{ background: '#f8fafc', border: '1px solid #f1f5f9' }}
                >
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div style={{ color: '#94a3b8' }} className="font-semibold uppercase tracking-wider text-[9px]">Tuition Fee</div>
                      <div className="font-bold text-sm" style={{ color: '#0f172a' }}>{uni.tuitionFee}</div>
                    </div>
                    <div>
                      <div style={{ color: '#94a3b8' }} className="font-semibold uppercase tracking-wider text-[9px]">Total/Year</div>
                      <div className="font-bold text-sm" style={{ color: '#0f172a' }}>{uni.totalFee}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2.5 mt-auto">
                  <Link
                    href={`/universities/${uni.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-blue-500/10"
                    style={{ background: 'linear-gradient(135deg, #083B7A, #0d5fa0)' }}
                  >
                    View Details
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={uni.brochurePath}
                    download
                    className="flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-bold border border-slate-200 transition-all hover:bg-slate-50 hover:border-slate-300 text-slate-600"
                    title={`Download ${uni.name} brochure`}
                  >
                    <Download size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-4" style={{ color: '#64748b' }}>
            Looking for detailed information, fee structures, or admission assistance?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
            style={{ background: 'linear-gradient(135deg, #14B8C4, #0e8a94)' }}
          >
            Get Free Admission Guidance
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
