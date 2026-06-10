'use client';

import { motion } from 'framer-motion';
import {
  Clock, Globe, Users, FileCheck, BadgeCheck, HeartHandshake,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const features = [
  {
    icon: Clock,
    title: '30+ Years Experience',
    description:
      'Decades of proven expertise in overseas education counselling with a track record of successful student placements worldwide.',
    color: '#083B7A',
    bg: 'rgba(8,59,122,0.06)',
  },
  {
    icon: Globe,
    title: '1100+ Global Universities',
    description:
      'Access to a vast network of top-ranked universities across 25+ countries — from medical colleges to engineering and business schools.',
    color: '#14B8C4',
    bg: 'rgba(20,184,196,0.06)',
  },
  {
    icon: Users,
    title: 'Personalised Counselling',
    description:
      'One-on-one sessions with experienced counsellors who understand your goals, budget, and academic profile to give the best guidance.',
    color: '#F7931E',
    bg: 'rgba(247,147,30,0.06)',
  },
  {
    icon: FileCheck,
    title: 'Visa Assistance',
    description:
      'End-to-end visa support including documentation, applications, mock interviews, and tracking — with a 98% visa success rate.',
    color: '#083B7A',
    bg: 'rgba(8,59,122,0.06)',
  },
  {
    icon: BadgeCheck,
    title: 'Admission Support',
    description:
      'From university selection and application to offer letters — we handle every step so you can focus on your future.',
    color: '#14B8C4',
    bg: 'rgba(20,184,196,0.06)',
  },
  {
    icon: HeartHandshake,
    title: 'Pre & Post Arrival Support',
    description:
      'Our care doesn\'t end at admission. We support students from pre-departure orientation to settling in at their new university.',
    color: '#F7931E',
    bg: 'rgba(247,147,30,0.06)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function WhyCambridgeSection() {
  return (
    <section id="why-cambridge" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Cambridge Education Consultants?"
          subtitle="We are more than just an education agency. We are your dedicated partners — from the moment you dream of studying abroad to the day you walk into your university."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/70 hover:border-slate-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 border border-transparent"
                  style={{ 
                    background: feature.bg,
                    borderColor: `${feature.color}15`
                  }}
                >
                  <feature.icon size={26} style={{ color: feature.color }} />
                </div>

                {/* Watermarked Outline Number Badge */}
                <div
                  className="absolute top-6 right-6 text-5xl font-black font-display opacity-15 select-none transition-all duration-300 group-hover:scale-105 pointer-events-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: `1.5px ${feature.color}`,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3
                  className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors"
                  style={{ color: '#0f172a' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed mb-1" style={{ color: '#64748b' }}>
                  {feature.description}
                </p>
              </div>

              {/* Bottom Glowing Gradient Line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                style={{ background: `linear-gradient(to right, transparent, ${feature.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
