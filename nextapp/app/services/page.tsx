import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LeadForm } from '@/components/ui/LeadForm';
import { getWhatsAppLink, CONTACT } from '@/lib/utils';
import {
  MessageSquare, GraduationCap, FileText, ClipboardList,
  Globe, Home, Plane, Award, Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Cambridge Education Consultants',
  description:
    'Cambridge Education Consultants offers end-to-end study abroad services — Career Counselling, University Selection, Application Support, Visa Guidance, and Post-Arrival Support.',
};

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, GraduationCap, FileText, ClipboardList,
  Globe, Home, Plane, Award, Users,
};

const colors = ['#083B7A', '#14B8C4', '#F7931E'];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #083B7A, #0a4a96)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80"
            alt="Services background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 text-white"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            ✦ What We Do
          </div>
          <h1
            className="font-display text-4xl md:text-6xl font-extrabold text-white mb-5"
          >
            Our Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            From your first counselling session to settling in abroad — we handle every step of your study abroad journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || MessageSquare;
              const color = colors[i % colors.length];

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover card-hover group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}12` }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>

                  <h2
                    className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                    style={{ color: '#0f172a' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm" style={{ color: '#475569' }}>
                        <CheckCircle2 size={14} style={{ color, flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                badge="Get Started"
                title="Ready to Begin Your Study Abroad Journey?"
                subtitle="Our counsellors are ready to guide you — completely free of charge. Talk to us today."
                centered={false}
              />
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(CONTACT.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Counsellor
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: '#083B7A' }}
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div
              className="rounded-3xl p-8 md:p-10 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 bg-white"
            >
              <LeadForm title="Request a Free Consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
