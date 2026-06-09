import type { Metadata } from 'next';
import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LeadForm } from '@/components/ui/LeadForm';
import { CONTACT, getWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us | Cambridge Education Consultants',
  description:
    'Contact Cambridge Education Consultants for free counselling on MBBS in Tajikistan and Study Abroad. Office in Srinagar, J&K. Call +91 88995 61414.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ background: 'linear-gradient(135deg, #083B7A, #0a4a96)' }}
      >
        <div className="container-custom">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5 text-white"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            ✦ Contact Us
          </div>
          <h1
            className="font-display text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Get in Touch
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Our expert counsellors are here to guide you. Contact us for free counselling on MBBS in Tajikistan and Study Abroad opportunities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left — Info */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              {/* Contact Cards */}
              {[
                {
                  icon: MapPin,
                  title: 'Our Office',
                  content: CONTACT.address,
                  color: '#083B7A',
                  bg: 'rgba(8,59,122,0.08)',
                  isText: true,
                },
                {
                  icon: Phone,
                  title: 'Phone Numbers',
                  content: CONTACT.phones.join('\n'),
                  color: '#14B8C4',
                  bg: 'rgba(20,184,196,0.08)',
                  isText: false,
                  phones: CONTACT.phones,
                },
                {
                  icon: Mail,
                  title: 'Email Address',
                  content: CONTACT.email,
                  color: '#F7931E',
                  bg: 'rgba(247,147,30,0.08)',
                  isText: true,
                },
                {
                  icon: Clock,
                  title: 'Office Hours',
                  content: 'Mon–Sat: 9:00 AM – 6:00 PM\nSunday: 10:00 AM – 2:00 PM',
                  color: '#083B7A',
                  bg: 'rgba(8,59,122,0.08)',
                  isText: true,
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4.5 p-6 bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:scale-[1.01] transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: card.bg }}
                  >
                    <card.icon size={20} style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#94a3b8' }}>
                      {card.title}
                    </p>
                    {card.phones ? (
                      <div className="flex flex-col gap-1">
                        {card.phones.map((p) => (
                          <a key={p} href={`tel:${p}`} className="text-sm font-medium hover:text-teal transition-colors" style={{ color: '#334155' }}>
                            {p}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed" style={{ color: '#334155', whiteSpace: 'pre-line' }}>
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppLink(CONTACT.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-page-whatsapp-btn"
                className="flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold text-base transition-all hover:opacity-90 hover:scale-[1.01]"
                style={{ background: '#25D366', boxShadow: '0 8px 24px rgba(37,211,102,0.3)' }}
              >
                <MessageCircle size={22} />
                WhatsApp: {CONTACT.whatsapp}
              </a>
            </div>

            {/* Right — Form + Map */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Lead Form */}
              <div
                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <LeadForm
                  title="Send Us a Message"
                  subtitle="Fill in your details below and we'll get back to you within 24 hours."
                />
              </div>

              {/* Map */}
              <div
                className="rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300"
                style={{ height: '300px' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13197.524!2d74.7600!3d34.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855db4fe80b7%3A0xbcf553d4e2cbbfbe!2sBaghat%2C%20Srinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cambridge Education Consultants - Srinagar Office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
