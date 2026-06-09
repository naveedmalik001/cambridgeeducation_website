'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  IndianRupee, BookOpen, ShieldCheck, Utensils, Globe2,
  Stethoscope, GraduationCap, Activity, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const reasons = [
  { icon: IndianRupee, title: 'Affordable Fees', desc: 'MBBS at $3,000–$5,000/year. Total cost far lower than private colleges in India.', color: '#14B8C4' },
  { icon: BookOpen, title: 'English Medium', desc: 'All lectures, textbooks, and clinical training conducted entirely in English.', color: '#083B7A' },
  { icon: ShieldCheck, title: 'Safe Country', desc: 'Tajikistan is politically stable with a welcoming environment for Indian students.', color: '#F7931E' },
  { icon: Utensils, title: 'Indian Food Available', desc: 'Indian restaurants, mess facilities, and familiar food widely available near campuses.', color: '#14B8C4' },
  { icon: Globe2, title: 'WHO Listed', desc: 'Universities are WHO listed — graduates eligible to practice globally.', color: '#083B7A' },
  { icon: ShieldCheck, title: 'NMC Compliant', desc: 'All featured universities are NMC compliant, essential for Indian doctors.', color: '#F7931E' },
  { icon: GraduationCap, title: 'FMGE/NExT Eligible', desc: 'Graduates can appear in FMGE and upcoming NExT examinations to practice in India.', color: '#14B8C4' },
  { icon: Activity, title: 'High Clinical Exposure', desc: 'Hands-on training in large teaching hospitals with diverse patient exposure from Year 1.', color: '#083B7A' },
];

const stats = [
  { value: 3000, suffix: '+', label: 'Indian Students in Tajikistan', prefix: '', displayValue: '' },
  { value: 3, suffix: '', label: 'NMC Compliant Universities', prefix: '', displayValue: '' },
  { value: 0, suffix: '', label: 'MBBS Duration (1 Year Internship Mandatory)', prefix: '', displayValue: '5+1 Yrs' },
  { value: 98, suffix: '%', label: 'Visa Approval Rate', prefix: '', displayValue: '' },
];

export function TajikistanSection() {
  return (
    <section
      id="tajikistan"
      className="section-padding bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="ambient-blob ambient-teal w-[500px] h-[500px] -top-20 -right-20 opacity-15" />
      <div className="ambient-blob ambient-blue w-[400px] h-[400px] -bottom-20 -left-20 opacity-15" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <SectionHeading
          badge="Primary Focus"
          title="MBBS in Tajikistan"
          subtitle="Tajikistan has emerged as the top choice for Indian NEET aspirants seeking affordable, WHO-listed, NMC-compliant MBBS education in English medium."
          light={true}
        />

        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative rounded-3xl overflow-hidden border border-slate-800/40"
          style={{ height: '420px', boxShadow: '0 24px 60px rgba(0,0,0,0.3)' }}
        >
          <Image
            src="/assets/hero/tajikistan-mountains.jpg"
            alt="Tajikistan mountain landscape — MBBS in Tajikistan"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
            style={{
              background: 'linear-gradient(to top, rgba(3,23,48,0.95) 0%, rgba(3,23,48,0.5) 60%, transparent 100%)',
            }}
          >
            <div className="max-w-xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                style={{
                  background: 'rgba(20, 184, 196, 0.2)',
                  border: '1px solid rgba(20, 184, 196, 0.4)',
                  color: '#5eead4',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#14B8C4' }} />
                Land of Opportunities
              </div>
              <h3
                className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3"
              >
                Study MBBS in the Heart of Central Asia
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-5">
                Affordable, WHO-listed, English-medium medical universities with NMC compliance for Indian MBBS aspirants.
              </p>
              <Link
                href="/universities/tajik-national-university"
                className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm group hover:text-teal-300 transition-colors"
              >
                Explore Universities
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-3xl border border-slate-800/60 bg-gradient-to-b from-[#0c2447] to-[#041835] backdrop-blur-md hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 relative group overflow-hidden"
              style={{
                boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
              }}
            >
              {/* Top border ambient line */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div
                className="font-display text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-teal-200 mb-1"
              >
                {stat.displayValue ? (
                  <span>{stat.displayValue}</span>
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Study */}
        <div className="mt-20">
          <h3
            className="font-display text-2xl md:text-3xl font-extrabold text-center text-white mb-10"
          >
            Why Study MBBS in Tajikistan?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-hover group p-6 rounded-3xl border border-slate-800/50 bg-[#0b2242]/40 backdrop-blur-md hover:bg-[#0c284e]/60 hover:border-slate-700/80 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Glowing Icon Container */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 bg-slate-950/60 border border-slate-800/80 group-hover:border-teal-500/20"
                    style={{
                      boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.02)',
                    }}
                  >
                    <reason.icon size={20} style={{ color: reason.color }} />
                  </div>
                  
                  <h4 className="font-display font-semibold text-sm lg:text-base mb-2.5 text-white group-hover:text-teal-300 transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-xs lg:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {reason.desc}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"
                  style={{
                    background: `linear-gradient(to right, ${reason.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
