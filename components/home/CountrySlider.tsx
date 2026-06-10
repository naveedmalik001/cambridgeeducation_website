'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { countries } from '@/data/countries';

export function CountrySlider() {
  // Tripled the countries list for seamless infinite looping on wider viewports
  const marqueeCountries = [...countries, ...countries, ...countries];

  return (
    <section id="countries" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Study Abroad"
          title="Explore Study Destinations"
          subtitle="From Central Asia to Europe — we help you get admitted to top universities worldwide."
          centered={true}
        />

        {/* Marquee Ticker Wrapper */}
        <div className="mt-12 relative w-full overflow-hidden py-6">
          {/* Smooth side fading overlays (Stripe style) */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Infinite marquee track */}
          <div className="animate-marquee flex items-center">
            {marqueeCountries.map((country, i) => (
              <Link
                key={`${country.slug}-${i}`}
                href={`/countries/${country.slug}`}
                id={`country-card-${country.slug}-${i}`}
                className="flex flex-col items-center gap-3.5 group px-6 flex-shrink-0"
              >
                {/* Circular Flag Container */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-slate-100 shadow-card group-hover:shadow-card-hover flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-teal/30 transition-all duration-300 ease-out">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/w160/${
                      country.slug === 'uk-ireland' ? 'gb' :
                      country.slug === 'australia-newzealand' ? 'au' :
                      country.slug === 'germany-europe' ? 'de' :
                      country.slug === 'tajikistan' ? 'tj' :
                      country.slug === 'bangladesh' ? 'bd' :
                      country.slug === 'kazakhstan' ? 'kz' :
                      country.slug === 'georgia' ? 'ge' :
                      country.slug === 'uzbekistan' ? 'uz' :
                      country.slug === 'iran' ? 'ir' :
                      country.slug === 'usa' ? 'us' :
                      country.slug === 'canada' ? 'ca' :
                      country.slug === 'malaysia' ? 'my' : 'tj'
                    }.png`}
                    alt={`Flag of ${country.name}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
                  />
                </div>

                {/* Country details */}
                <div className="text-center">
                  <p className="font-display font-bold text-xs md:text-sm text-slate-800 group-hover:text-primary transition-colors leading-tight">
                    {country.name}
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    {country.continent}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-teal transition-colors"
          >
            Can&apos;t find your destination? Talk to a counsellor
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
