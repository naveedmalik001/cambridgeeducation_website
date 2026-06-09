'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle, GraduationCap, FileText, Mail, Stamp, Plane, BadgeCheck, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CONTACT, getWhatsAppLink } from '@/lib/utils';

const steps = [
  {
    icon: MessageCircle,
    title: 'Counselling',
    desc: 'Free one-on-one session with our expert J&K counsellors to understand your goals and budget.',
    color: '#14B8C4',
  },
  {
    icon: GraduationCap,
    title: 'Selection',
    desc: 'We shortlist the best-fit universities from our global network based on your preferences.',
    color: '#F7931E',
  },
  {
    icon: FileText,
    title: 'Application',
    desc: 'Complete application assistance — SOP, LOR, and form submissions managed by our team.',
    color: '#14B8C4',
  },
  {
    icon: Mail,
    title: 'Offer Letter',
    desc: 'Receive your university offer letter. We guide you through acceptance and fee details.',
    color: '#F7931E',
  },
  {
    icon: Stamp,
    title: 'Visa Support',
    desc: 'End-to-end visa support: documentation, application, mock interviews, and tracking.',
    color: '#14B8C4',
  },
  {
    icon: Plane,
    title: 'Pre-Departure',
    desc: 'Pre-departure briefing, flight bookings, travel insurance — we prepare you fully.',
    color: '#F7931E',
  },
  {
    icon: BadgeCheck,
    title: 'Admission',
    desc: 'Arrive, complete enrollment, and begin your classes with our ongoing post-arrival support.',
    color: '#14B8C4',
  },
];

export function SuccessJourneySection() {
  return (
    <section
      id="success-journey"
      className="section-padding bg-gradient-to-br from-[#05244C] via-[#031c3a] to-[#021533] relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="ambient-blob ambient-teal w-[400px] h-[400px] -top-20 -left-20 opacity-10" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Your Journey"
          title="Your Success Journey with Cambridge"
          subtitle="We walk with you every step of the way — from your first counselling session to the moment you step into your university abroad."
          light={true}
        />

        {/* Timeline Grid */}
        <div className="mt-20 relative">
          {/* Horizontal line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-[2px]"
            style={{
              background: 'linear-gradient(to right, #14B8C4 0%, #F7931E 50%, #14B8C4 100%)',
              opacity: 0.3,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step number container (Glassmorphic) */}
                <div
                  className="w-20 h-20 rounded-full flex flex-col items-center justify-center relative z-10 mb-5 transition-all duration-300 group-hover:scale-105 shadow-2xl bg-[#0b2242]/70 border border-slate-700/50 backdrop-blur-md"
                >
                  <step.icon size={22} style={{ color: step.color }} />
                  <span
                    className="text-[10px] font-extrabold mt-1 uppercase tracking-wider"
                    style={{ color: step.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Connector dot (desktop) */}
                <div
                  className="hidden lg:block absolute top-10 w-3.5 h-3.5 rounded-full -translate-y-1/2 transition-transform duration-300 group-hover:scale-125 z-20 border-2 border-[#05244C]"
                  style={{ background: step.color, left: '50%', transform: 'translate(-50%, -50%)' }}
                />

                <h3 className="font-display font-bold text-sm text-white mb-2">{step.title}</h3>
                <p className="text-xs leading-relaxed text-slate-300 max-w-[160px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm mb-4">Ready to begin your journey?</p>
          <a
            href={getWhatsAppLink(CONTACT.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-white font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35"
            style={{ background: 'linear-gradient(135deg, #F7931E, #d97a10)' }}
            id="journey-cta-btn"
          >
            Start Your Journey Today
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
