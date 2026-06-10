'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageSquare, GraduationCap, FileText, ClipboardList,
  Globe, Home, Plane, Award, Users, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, GraduationCap, FileText, ClipboardList,
  Globe, Home, Plane, Award, Users,
};

const colors = [
  { bg: 'rgba(8,59,122,0.06)', icon: '#083B7A', hover: '#083B7A' },
  { bg: 'rgba(20,184,196,0.06)', icon: '#14B8C4', hover: '#14B8C4' },
  { bg: 'rgba(247,147,30,0.06)', icon: '#F7931E', hover: '#F7931E' },
  { bg: 'rgba(8,59,122,0.06)', icon: '#083B7A', hover: '#083B7A' },
  { bg: 'rgba(20,184,196,0.06)', icon: '#14B8C4', hover: '#14B8C4' },
  { bg: 'rgba(247,147,30,0.06)', icon: '#F7931E', hover: '#F7931E' },
  { bg: 'rgba(8,59,122,0.06)', icon: '#083B7A', hover: '#083B7A' },
  { bg: 'rgba(20,184,196,0.06)', icon: '#14B8C4', hover: '#14B8C4' },
  { bg: 'rgba(247,147,30,0.06)', icon: '#F7931E', hover: '#F7931E' },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Our Step-by-Step Process"
          title="How We Help You Study Abroad"
          subtitle="We guide you through every stage of your international education journey — from initial counselling to settling on campus."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || MessageSquare;
            const color = colors[i % colors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-hover group bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-card hover:shadow-card-hover relative overflow-hidden flex flex-col"
              >
                {/* Step Badge */}
                <div
                  className="absolute top-6 right-6 font-display font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full z-20 border"
                  style={{
                    color: color.icon,
                    backgroundColor: `${color.icon}08`,
                    borderColor: `${color.icon}20`,
                  }}
                >
                  Step 0{i + 1}
                </div>

                {/* Hover gradient bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${color.bg}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  style={{ background: color.bg }}
                >
                  <Icon size={22} style={{ color: color.icon }} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3
                    className="font-display font-bold text-base mb-2 group-hover:text-primary transition-colors"
                    style={{ color: '#0f172a' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mt-auto pt-4 border-t border-slate-100/50">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs" style={{ color: '#475569' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: color.icon }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #083B7A, #0d5fa0)' }}
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
