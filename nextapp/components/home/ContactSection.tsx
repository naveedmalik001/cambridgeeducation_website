'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Mail, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LeadForm } from '@/components/ui/LeadForm';
import { CONTACT, getWhatsAppLink } from '@/lib/utils';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container-custom">
        <SectionHeading
          badge="Get in Touch"
          title="Talk to Our Expert Counsellors"
          subtitle="Have questions about MBBS in Tajikistan or Study Abroad? Our counsellors are ready to guide you."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info Cards */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 bg-white">
              <div className="p-6" style={{ background: '#083B7A' }}>
                <h3 className="font-display text-white font-extrabold text-xl mb-1.5">
                  Cambridge Education Consultants
                </h3>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Your gateway to global education
                </p>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-4.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(8,59,122,0.06)' }}
                  >
                    <MapPin size={16} style={{ color: '#083B7A' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Address</p>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: '#334155' }}>
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(20,184,196,0.06)' }}
                  >
                    <Phone size={16} style={{ color: '#14B8C4' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Phone</p>
                    <div className="flex flex-col gap-1.5">
                      {CONTACT.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-sm font-semibold transition-colors hover:text-teal text-[#334155]"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(247,147,30,0.06)' }}
                  >
                    <Mail size={16} style={{ color: '#F7931E' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm font-semibold hover:text-primary transition-colors text-[#334155]"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(8,59,122,0.06)' }}
                  >
                    <Clock size={16} style={{ color: '#083B7A' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>Office Hours</p>
                    <p className="text-sm font-medium text-[#334155]">Mon–Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-sm font-medium text-[#334155]">Sunday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={getWhatsAppLink(CONTACT.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="mt-2 flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.01] shadow-lg shadow-green-500/15"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp — {CONTACT.whatsapp}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 bg-white"
              style={{ height: '220px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13197.524!2d74.7600!3d34.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855db4fe80b7%3A0xbcf553d4e2cbbfbe!2sBaghat%2C%20Srinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cambridge Education Consultants Office Location"
              />
            </div>
          </motion.div>

          {/* Right — Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <LeadForm
              title="Get Free Counselling"
              subtitle="Tell us about yourself and our expert counsellors will reach out within 24 hours."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
