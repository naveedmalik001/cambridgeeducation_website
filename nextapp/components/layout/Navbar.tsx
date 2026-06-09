'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, Phone, Building2
} from 'lucide-react';
import { universities } from '@/data/universities';
import { countries } from '@/data/countries';
import { getWhatsAppLink, CONTACT } from '@/lib/utils';

interface NavChild {
  label: string;
  href: string;
  sub: string;
  slug?: string;
  flag?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'MBBS in Tajikistan',
    href: '#tajikistan',
    children: universities.map((u) => ({
      label: u.name,
      href: `/universities/${u.slug}`,
      sub: u.location,
    })),
  },
  {
    label: 'Study Abroad',
    href: '#countries',
    children: countries.map((c) => ({
      label: c.name,
      href: `/countries/${c.slug}`,
      sub: c.continent,
      slug: c.slug,
      flag: c.flag,
    })),
  },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? 'bg-white shadow-md'
    : isHome
    ? 'bg-transparent'
    : 'bg-white shadow-sm';

  const textColor = scrolled || !isHome ? 'text-gray-800' : 'text-white';
  const logoFilter = '';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0" aria-label="Cambridge Education Consultants Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo/logo.png"
                alt="Cambridge Education Consultants"
                className="h-8 md:h-11 lg:h-14 w-auto object-contain transition-all duration-300"
                style={{
                  filter: scrolled || !isHome ? 'none' : 'brightness(0) invert(1)'
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${textColor} hover:opacity-80`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden z-50"
                          style={{
                            width: item.label === 'Study Abroad' ? '600px' : '340px',
                          }}
                        >
                          <div
                            className={`p-3 ${
                              item.label === 'Study Abroad'
                                ? 'grid grid-cols-2 gap-1'
                                : 'flex flex-col gap-1'
                            }`}
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                {('flag' in child) && child.slug && (
                                  <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100 shadow-sm flex-shrink-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={`https://flagcdn.com/w160/${
                                        child.slug === 'uk-ireland' ? 'gb' :
                                        child.slug === 'australia-newzealand' ? 'au' :
                                        child.slug === 'germany-europe' ? 'de' :
                                        child.slug === 'tajikistan' ? 'tj' :
                                        child.slug === 'bangladesh' ? 'bd' :
                                        child.slug === 'kazakhstan' ? 'kz' :
                                        child.slug === 'georgia' ? 'ge' :
                                        child.slug === 'uzbekistan' ? 'uz' :
                                        child.slug === 'iran' ? 'ir' :
                                        child.slug === 'usa' ? 'us' :
                                        child.slug === 'canada' ? 'ca' :
                                        child.slug === 'malaysia' ? 'my' : 'tj'
                                      }.png`}
                                      alt=""
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}
                                {!('flag' in child) && (
                                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'rgba(8,59,122,0.08)' }}>
                                    <Building2 size={14} style={{ color: '#083B7A' }} />
                                  </div>
                                )}
                                <div>
                                  <div className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors"
                                    style={{ color: 'inherit' }}>
                                    {child.label}
                                  </div>
                                  <div className="text-xs text-gray-400">{child.sub}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${textColor} hover:opacity-80 ${
                      pathname === item.href ? 'font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:+918899561414`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${textColor}`}
              >
                <Phone size={15} />
                <span>+91 88995 61414</span>
              </a>
              <a
                href={getWhatsAppLink(CONTACT.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal text-sm px-4 py-2"
                style={{
                  background: 'linear-gradient(135deg, #14B8C4, #0e8a94)',
                  color: 'white',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Talk to Counsellor
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
              aria-label="Open menu"
              id="mobile-menu-btn"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-nav-overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="mobile-nav-drawer"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100"
                style={{ background: '#083B7A' }}>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/logo/logo.png"
                    alt="Cambridge Education Consultants"
                    className="h-8 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white hover:bg-white/10"
                  id="mobile-close-btn"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="p-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.label ? null : item.label
                            )
                          }
                          className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileExpanded === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-3"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 text-sm hover:bg-blue-50 hover:text-primary transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {('flag' in child) && child.slug && (
                                    <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        src={`https://flagcdn.com/w160/${
                                          child.slug === 'uk-ireland' ? 'gb' :
                                          child.slug === 'australia-newzealand' ? 'au' :
                                          child.slug === 'germany-europe' ? 'de' :
                                          child.slug === 'tajikistan' ? 'tj' :
                                          child.slug === 'bangladesh' ? 'bd' :
                                          child.slug === 'kazakhstan' ? 'kz' :
                                          child.slug === 'georgia' ? 'ge' :
                                          child.slug === 'uzbekistan' ? 'uz' :
                                          child.slug === 'iran' ? 'ir' :
                                          child.slug === 'usa' ? 'us' :
                                          child.slug === 'canada' ? 'ca' :
                                          child.slug === 'malaysia' ? 'my' : 'tj'
                                        }.png`}
                                        alt=""
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  )}
                                  <span>{child.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center px-3 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:+918899561414"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 font-medium text-sm transition-colors"
                  style={{ borderColor: '#083B7A', color: '#083B7A' }}
                >
                  <Phone size={16} />
                  +91 88995 61414
                </a>
                <a
                  href={getWhatsAppLink(CONTACT.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium text-sm"
                  style={{ background: '#25D366' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Talk to Counsellor on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
