import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2, Download, ArrowRight, DollarSign,
  Home, GraduationCap, MessageCircle, Phone, BookOpen
} from 'lucide-react';
import { countries, getCountryBySlug } from '@/data/countries';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { LeadForm } from '@/components/ui/LeadForm';
import { CONTACT, getWhatsAppLink } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: 'Country Not Found' };

  return {
    title: `Study in ${country.name} | Cambridge Education Consultants`,
    description: `Study in ${country.name} with Cambridge Education Consultants. ${country.overview.slice(0, 150)}...`,
    openGraph: {
      title: `Study in ${country.name} | Cambridge Education Consultants`,
      description: country.overview,
      images: [{ url: country.image, width: 1200, height: 630, alt: `Study in ${country.name}` }],
    },
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Study in ${country.name}`,
    description: country.overview,
    url: `https://www.cambridgeeducationconsultants.com/countries/${country.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={country.image}
          alt={`Study in ${country.name}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,59,122,0.9) 0%, rgba(8,59,122,0.5) 50%, transparent 100%)' }}
        />
        <div className="container-custom relative z-10 pb-10 pt-24">
          <Breadcrumb
            items={[
              { label: 'Study Abroad', href: '/#countries' },
              { label: country.name },
            ]}
            light
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-md flex-shrink-0">
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
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1
                className="font-display text-3xl md:text-5xl font-extrabold text-white mb-1"
              >
                Study in {country.name}
              </h1>
              <p className="text-white/70 text-sm">{country.continent}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-4"
                style={{ color: '#0f172a' }}
              >
                Country Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
                {country.overview}
              </p>
            </section>

            {/* Why Study Here */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Why Study in {country.name}?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {country.whyStudyHere.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}
                  >
                    <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: '#14B8C4' }} />
                    <span className="text-sm font-medium" style={{ color: '#334155' }}>{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Universities */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Top Universities in {country.name}
              </h2>
              <div className="space-y-3">
                {country.topUniversities.map((uni, i) => (
                  <div
                    key={uni}
                    className="flex items-center gap-4 p-4 rounded-xl border bg-white hover:shadow-sm transition-all"
                    style={{ borderColor: '#e2e8f0' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: i % 2 === 0 ? '#083B7A' : '#14B8C4' }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#334155' }}>{uni}</span>
                  </div>
                ))}
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border bg-slate-50/50 border-dashed"
                  style={{ borderColor: '#cbd5e1' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 font-bold text-sm flex-shrink-0 bg-slate-100"
                  >
                    +
                  </div>
                  <span className="text-sm font-semibold text-slate-500">...and many more</span>
                </div>
              </div>
            </section>

            {/* Fees & Living Cost */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Cost of Education
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div
                  className="p-6 rounded-2xl border flex items-start gap-4"
                  style={{ borderColor: '#e2e8f0', background: 'white', boxShadow: '0 2px 12px rgba(8,59,122,0.06)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(8,59,122,0.08)' }}
                  >
                    <GraduationCap size={22} style={{ color: '#083B7A' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>
                      Average Tuition Fee
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#0f172a' }}>
                      {country.averageTuitionFee}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#64748b' }}>Per academic year</p>
                  </div>
                </div>
                <div
                  className="p-6 rounded-2xl border flex items-start gap-4"
                  style={{ borderColor: '#e2e8f0', background: 'white', boxShadow: '0 2px 12px rgba(8,59,122,0.06)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(20,184,196,0.08)' }}
                  >
                    <Home size={22} style={{ color: '#14B8C4' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#94a3b8' }}>
                      Average Living Cost
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#0f172a' }}>
                      {country.livingCost}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#64748b' }}>Per month (approx.)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Admission Requirements */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Admission Requirements
              </h2>
              <div className="space-y-3">
                {country.admissionRequirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(8,59,122,0.1)' }}
                    >
                      <CheckCircle2 size={14} style={{ color: '#083B7A' }} />
                    </div>
                    <span className="text-sm" style={{ color: '#475569' }}>{req}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Visa Info */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-4"
                style={{ color: '#0f172a' }}
              >
                Visa Information
              </h2>
              <div
                className="p-6 rounded-2xl border"
                style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                  {country.visaInfo}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold"
                    style={{ background: '#083B7A' }}
                  >
                    Get Visa Guidance
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={getWhatsAppLink(CONTACT.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold"
                    style={{ background: '#25D366' }}
                  >
                    <MessageCircle size={14} />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* Download Country Guide */}
            {country.countryGuide && (
              <div
                className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #14B8C4, #0e8a94)' }}
              >
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Download {country.name} Study Guide
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Complete guide to studying in {country.name}
                  </p>
                </div>
                <a
                  href={country.countryGuide}
                  download
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap flex-shrink-0"
                  style={{ background: 'white', color: '#0e8a94' }}
                >
                  <Download size={16} />
                  Download Guide
                </a>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-5">
              <div
                className="rounded-2xl p-6 border border-gray-100"
                style={{ boxShadow: '0 4px 24px rgba(8,59,122,0.08)' }}
              >
                <LeadForm
                  compact
                  title={`Study in ${country.name}`}
                  subtitle="Get free expert counselling"
                />
              </div>

              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(135deg, #083B7A, #0a4a96)' }}
              >
                <h3 className="font-bold text-base mb-4">Talk to Our Experts</h3>
                <div className="flex flex-col gap-3">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Phone size={14} />
                      {phone}
                    </a>
                  ))}
                </div>
                <a
                  href={getWhatsAppLink(CONTACT.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold text-sm w-full"
                  style={{ background: '#25D366' }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>

              {/* Other Countries */}
              <div
                className="rounded-2xl p-5 border border-gray-100"
                style={{ background: '#f8fafc' }}
              >
                <h3
                  className="font-bold text-sm uppercase tracking-wider mb-3"
                  style={{ color: '#64748b' }}
                >
                  Other Destinations
                </h3>
                <div className="flex flex-col gap-1.5">
                  {countries
                    .filter((c) => c.slug !== country.slug)
                    .slice(0, 6)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        href={`/countries/${c.slug}`}
                        className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white hover:shadow-sm transition-all group"
                        style={{ border: '1px solid #e2e8f0' }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
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
                          <span className="text-sm font-medium group-hover:text-primary transition-colors" style={{ color: '#334155' }}>
                            {c.name}
                          </span>
                        </div>
                        <ArrowRight size={13} style={{ color: '#94a3b8' }} />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
