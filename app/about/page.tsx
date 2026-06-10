import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageCircle, Award, Users, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LeadForm } from '@/components/ui/LeadForm';
import { getWhatsAppLink, CONTACT } from '@/lib/utils';
import { GalleryGrid } from '@/components/about/GalleryGrid';


export const metadata: Metadata = {
  title: 'About Us | Cambridge Education Consultants',
  description:
    'Learn about Cambridge Education Consultants — 30+ years of excellence in overseas education consultancy based in Srinagar, J&K. Your trusted partner for MBBS in Tajikistan and Study Abroad.',
};

const milestones = [
  { year: '1994', title: 'Founded', desc: 'Cambridge Education Consultants was established in Srinagar with a mission to help Kashmiri students access global education.' },
  { year: '2000', title: 'Expanded Services', desc: 'Expanded to cover Study Abroad destinations including Europe, USA, and Canada alongside South Asian options.' },
  { year: '2010', title: 'MBBS Focus', desc: 'Began specializing in MBBS abroad — partnering with top medical universities in Central Asia and Eastern Europe.' },
  { year: '2015', title: 'Tajikistan Partners', desc: 'Forged official partnerships with leading medical universities in Tajikistan — offering NMC-compliant MBBS programs.' },
  { year: '2024', title: '500+ Students', desc: 'Milestone of 500+ students successfully placed in universities across 25+ countries worldwide.' },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'We are committed to the highest standards in education consultancy — ensuring every student gets the best guidance.' },
  { icon: Users, title: 'Student-First', desc: 'Every decision we make is centered on the best outcome for our students. Your success is our success.' },
  { icon: Globe, title: 'Global Network', desc: 'Our 1100+ university partnerships worldwide give you access to the best education destinations.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80"
          alt="About Cambridge Education Consultants"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(8,59,122,0.9) 0%, rgba(8,59,122,0.65) 60%, rgba(8,59,122,0.3) 100%)' }}
        />
        <div className="container-custom relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 text-white"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            About Us
          </div>
          <h1
            className="font-display text-4xl md:text-6xl font-extrabold text-white mb-5 max-w-2xl"
          >
            30+ Years of Guiding Students Abroad
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Cambridge Education Consultants has been the most trusted education consultancy in Jammu & Kashmir since 1994.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="A Legacy Built on Trust"
                subtitle=""
                centered={false}
              />
              <div className="space-y-4 text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                <p>
                  Founded in 1994 in the heart of Srinagar, Cambridge Education Consultants began with a simple but powerful vision — 
                  to help students from Jammu & Kashmir access the best education opportunities worldwide.
                </p>
                <p>
                  Over three decades, we have grown into one of the most trusted education consultancy firms in the region, 
                  with a track record of successfully placing over 500+ students in top universities across 25+ countries.
                </p>
                <p>
                  We specialize in MBBS in Tajikistan — helping NEET aspirants secure admissions in WHO-listed, 
                  NMC-compliant medical universities at affordable costs. We also guide students to top universities 
                  in the USA, Canada, UK, Australia, Germany, and more.
                </p>
                <p>
                  Our team of experienced counsellors provides personalized, end-to-end support — from choosing the right 
                  university to post-arrival assistance. We believe every student deserves world-class education, 
                  regardless of financial background.
                </p>
              </div>

              {/* Stats Card (moved here so it doesn't overlay the image) */}
              <div className="mt-8 grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm max-w-md">
                {[
                  { v: '30+', l: 'Years' },
                  { v: '500+', l: 'Students' },
                  { v: '25+', l: 'Countries' },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <div className="font-display font-extrabold text-lg md:text-xl" style={{ color: '#083B7A' }}>
                      {v}
                    </div>
                    <div className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppLink(CONTACT.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircle size={16} />
                  Talk to Us
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ background: '#083B7A' }}
                >
                  Our Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Image Container — uses aspect-[3/4] matching the vertical image aspect ratio to avoid any cropping */}
            <div className="relative aspect-[3/4] max-w-[420px] lg:ml-auto w-full rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 50px rgba(8,59,122,0.15)' }}>
              <Image
                src="/assets/ceo/ceo-suhail-wahid.webp"
                alt="Mr. Suhail Wahid Malik, CEO of Cambridge Education Consultants"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* CEO Name Plate Tag */}
              <div
                className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl text-center z-10 border border-white/10"
                style={{ background: 'rgba(8,59,122,0.85)', backdropFilter: 'blur(10px)' }}
              >
                <h4 className="font-display text-white font-extrabold text-sm md:text-base tracking-wide leading-tight">
                  Mr. Suhail Wahid Malik
                </h4>
                <p className="text-[10px] md:text-xs text-teal-300 font-bold uppercase tracking-widest mt-1">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="Our values guide everything we do — from the way we counsel students to how we choose our university partners."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl border card-hover group text-center"
                style={{ borderColor: '#e2e8f0', boxShadow: '0 2px 16px rgba(8,59,122,0.05)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(8,59,122,0.06)' }}
                >
                  <v.icon size={28} style={{ color: '#083B7A' }} />
                </div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: '#0f172a' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <SectionHeading
            badge="Our History"
            title="30 Years of Excellence"
            subtitle="Key milestones in our journey to become the most trusted education consultancy in J&K."
          />
          <div className="mt-12 relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
              style={{ background: 'linear-gradient(to bottom, #083B7A, #14B8C4)' }}
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className="p-5 rounded-2xl border bg-white inline-block text-left"
                      style={{ borderColor: '#e2e8f0', boxShadow: '0 2px 12px rgba(8,59,122,0.06)' }}
                    >
                      <h3
                        className="font-display font-bold text-base mb-1"
                        style={{ color: '#083B7A' }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#475569' }}>{m.desc}</p>
                    </div>
                  </div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative z-10"
                    style={{ background: 'linear-gradient(135deg, #083B7A, #14B8C4)' }}
                  >
                    {m.year}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Photo Gallery */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <SectionHeading
            badge="Moments & Memories"
            title="Official Photo Gallery & Albums"
            subtitle="Highlights from our university delegation visits, student cohorts, practical classes, and official seminars."
          />
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #083B7A, #0a4a96)' }}>
        <div className="container-custom text-center">
          <h2
            className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Start Your Journey with Us Today
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join thousands of students who trusted Cambridge Education Consultants to shape their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppLink(CONTACT.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
              style={{ background: '#25D366' }}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold"
              style={{ background: 'white', color: '#083B7A' }}
            >
              Get Free Counselling
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
