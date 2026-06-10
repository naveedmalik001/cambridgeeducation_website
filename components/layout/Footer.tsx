import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { universities } from '@/data/universities';
import { countries } from '@/data/countries';
import { CONTACT, getWhatsAppLink } from '@/lib/utils';

// Custom social icon SVGs
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'MBBS in Tajikistan', href: '/#tajikistan' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Download Brochure', href: '/cambridge_brochure/cambridge-education-consultants.pdf' },
];

const socialLinks = [
  {
    Icon: FacebookIcon,
    href: 'https://facebook.com/cambridge.education.consultants',
    label: 'Facebook',
    bg: '#1877F2',
    color: '#ffffff'
  },
  {
    Icon: InstagramIcon,
    href: 'https://instagram.com/cambridge.education_consultant',
    label: 'Instagram',
    bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    color: '#ffffff'
  },
  {
    Icon: YoutubeIcon,
    href: 'https://www.youtube.com/@cambridgeeducationconsultants',
    label: 'YouTube',
    bg: '#FF0000',
    color: '#ffffff'
  }
];

export function Footer() {
  return (
    <footer style={{ background: '#062d5e' }}>
      {/* Top CTA Bar */}
      <div style={{ background: 'linear-gradient(135deg, #14B8C4, #0e8a94)' }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-5">
            <div className="text-white text-center md:text-left">
              <p className="font-semibold text-lg">Ready to Start Your Journey Abroad?</p>
              <p className="text-sm opacity-90">Get expert counselling from our team today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="flex items-center justify-center gap-2 bg-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:bg-gray-100"
                style={{ color: '#083B7A' }}
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href={getWhatsAppLink(CONTACT.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white border-2 border-white border-opacity-60 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:bg-white hover:bg-opacity-10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5" aria-label="Cambridge Education Consultants Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo/logo.png"
                alt="Cambridge Education Consultants"
                className="h-12 md:h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-200">
              Your trusted partner for MBBS in Tajikistan and Study Abroad opportunities worldwide. 
              30+ years of excellence in education consultancy.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label, bg, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-md"
                  style={{ background: bg, color: color }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => {
                const isStatic = link.href.endsWith('.pdf') || link.href.startsWith('/#');
                if (isStatic) {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group text-decoration-none"
                      >
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Universities + Countries */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Universities in Tajikistan
            </h3>
            <ul className="space-y-2.5 mb-6">
              {universities.map((u) => (
                <li key={u.slug}>
                  <Link
                    href={`/universities/${u.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {u.shortName} — {u.name.split(' ').slice(-2).join(' ')}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Study Destinations
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {countries.slice(0, 8).map((c) => (
                <Link
                  key={c.slug}
                  href={`/countries/${c.slug}`}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10 shadow-sm flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://flagcdn.com/w160/${
                        c.slug === 'uk-ireland' ? 'gb' :
                        c.slug === 'australia-newzealand' ? 'au' :
                        c.slug === 'germany-europe' ? 'de' :
                        c.slug === 'tajikistan' ? 'tj' :
                        c.slug === 'bangladesh' ? 'bd' :
                        c.slug === 'kazakhstan' ? 'kz' :
                        c.slug === 'georgia' ? 'ge' :
                        c.slug === 'uzbekistan' ? 'uz' :
                        c.slug === 'iran' ? 'ir' :
                        c.slug === 'usa' ? 'us' :
                        c.slug === 'canada' ? 'ca' :
                        c.slug === 'malaysia' ? 'my' : 'tj'
                      }.png`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#14B8C4' }} />
                <p className="text-sm leading-relaxed text-slate-200">
                  {CONTACT.address}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-sm text-slate-200 hover:text-white transition-colors group"
                  >
                    <Phone size={14} style={{ color: '#14B8C4' }} />
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm text-slate-200 hover:text-white transition-colors"
              >
                <Mail size={14} style={{ color: '#14B8C4' }} />
                {CONTACT.email}
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppLink(CONTACT.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold mt-2 transition-all hover:opacity-90"
                style={{ background: '#25D366', width: 'fit-content' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.938 1.394 5.617L.05 23.5l6.09-1.327A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.867 0-3.617-.491-5.14-1.35l-.37-.218-3.816.832.876-3.709-.24-.382A9.791 9.791 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                WhatsApp Counsellor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1.5">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Cambridge Education Consultants. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Designed & Developed by{' '}
                <a
                  href="https://instagram.com/immnaveed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#14B8C4] hover:text-white transition-colors font-semibold hover:underline"
                >
                  IMMNAVEED
                </a>
                <span className="mx-2 text-slate-600">|</span>
                <a
                  href="https://www.immnaveed.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors font-semibold hover:underline uppercase tracking-wider text-[10px]"
                >
                  Brand Strategist & Growth Consultant
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Sitemap', href: '/sitemap.xml', isStatic: true },
              ].map((link) => {
                if (link.isStatic) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-white transition-colors font-medium text-decoration-none"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
