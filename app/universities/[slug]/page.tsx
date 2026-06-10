import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2, Download, ArrowRight, MapPin, Calendar,
  Clock, DollarSign, GraduationCap, Phone, MessageCircle
} from 'lucide-react';
import { universities, getUniversityBySlug } from '@/data/universities';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { LeadForm } from '@/components/ui/LeadForm';
import { CONTACT, getWhatsAppLink } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uni = getUniversityBySlug(slug);
  if (!uni) return { title: 'University Not Found' };

  return {
    title: `${uni.name} | MBBS in Tajikistan`,
    description: `Study MBBS at ${uni.name} in ${uni.location}. ${uni.mbbsDuration}. WHO Listed, NMC Compliant. Tuition: ${uni.tuitionFee}. Get expert guidance from Cambridge Education Consultants.`,
    openGraph: {
      title: `${uni.name} | MBBS in Tajikistan`,
      description: uni.description,
      images: [{ url: uni.image, width: 1200, height: 630, alt: uni.name }],
    },
  };
}

export default async function UniversityPage({ params }: PageProps) {
  const { slug } = await params;
  const uni = getUniversityBySlug(slug);
  if (!uni) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: uni.name,
    url: `https://www.cambridgeeducationconsultants.com/universities/${uni.slug}`,
    image: uni.image,
    foundingDate: uni.established,
    address: {
      '@type': 'PostalAddress',
      addressLocality: uni.location,
      addressCountry: 'TJ',
    },
    description: uni.description,
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
          src={uni.image}
          alt={uni.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,59,122,0.92) 0%, rgba(8,59,122,0.6) 50%, rgba(8,59,122,0.2) 100%)' }}
        />
        <div className="container-custom relative z-10 pb-10 pt-24">
          <Breadcrumb
            items={[
              { label: 'MBBS in Tajikistan', href: '/#tajikistan' },
              { label: uni.name },
            ]}
            light
          />
          <h1
            className="font-display text-3xl md:text-5xl font-extrabold text-white mt-4 mb-3"
          >
            {uni.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {uni.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> Est. {uni.established}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {uni.mbbsDuration}
            </span>
          </div>
          {/* Accreditation badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {uni.accreditations.map((acc) => (
              <span
                key={acc}
                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                {acc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-4"
                style={{ color: '#0f172a' }}
              >
                About {uni.name}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
                {uni.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {uni.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#14B8C4' }} />
                    <span className="text-sm font-medium" style={{ color: '#334155' }}>{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                University at a Glance
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {uni.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-5 rounded-2xl border"
                    style={{ borderColor: '#e2e8f0', background: 'white', boxShadow: '0 2px 12px rgba(8,59,122,0.06)' }}
                  >
                    <div
                      className="font-display text-2xl font-extrabold mb-1"
                      style={{ color: '#083B7A' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: '#64748b' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fee Structure */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Fee Structure
              </h2>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#e2e8f0' }}>
                <div
                  className="px-6 py-4 flex items-center gap-2 text-white font-semibold"
                  style={{ background: '#083B7A' }}
                >
                  <DollarSign size={18} />
                  Annual Fee Breakdown
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { label: 'Tuition Fee', value: uni.tuitionFee },
                    { label: 'Hostel/Accommodation Fee', value: uni.hostelFee },
                    { label: 'Total Annual Cost', value: uni.totalFee },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm font-medium" style={{ color: '#475569' }}>{label}</span>
                      <span className="text-sm font-bold" style={{ color: '#0f172a' }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 text-xs" style={{ background: '#f8fafc', color: '#94a3b8' }}>
                  * Fees are approximate and subject to change. Contact us for the latest fee structure.
                </div>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Eligibility Criteria
              </h2>
              <div className="space-y-3">
                {uni.eligibility.map((e) => (
                  <div key={e} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(8,59,122,0.1)' }}
                    >
                      <CheckCircle2 size={14} style={{ color: '#083B7A' }} />
                    </div>
                    <span className="text-sm" style={{ color: '#475569' }}>{e}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Process */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-6"
                style={{ color: '#0f172a' }}
              >
                Admission Process
              </h2>
              <div className="relative">
                <div
                  className="absolute left-5 top-0 bottom-0 w-0.5"
                  style={{ background: 'linear-gradient(to bottom, #083B7A, #14B8C4)' }}
                />
                <div className="space-y-6 pl-14">
                  {uni.admissionProcess.map((step, i) => (
                    <div key={step} className="relative">
                      <div
                        className="absolute -left-14 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: i % 2 === 0 ? '#083B7A' : '#14B8C4' }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm font-medium pt-2.5" style={{ color: '#334155' }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Facilities */}
            <section>
              <h2
                className="font-display text-2xl font-extrabold mb-5"
                style={{ color: '#0f172a' }}
              >
                Campus Facilities
              </h2>
              <div className="flex flex-wrap gap-2">
                {uni.facilities.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                    style={{
                      background: 'rgba(20,184,196,0.08)',
                      color: '#0e8a94',
                      border: '1px solid rgba(20,184,196,0.2)',
                    }}
                  >
                    <GraduationCap size={14} />
                    {f}
                  </span>
                ))}
              </div>
            </section>

            {/* Brochure Download */}
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #083B7A, #0d5fa0)' }}
            >
              <div>
                <h3 className="text-white font-bold text-lg mb-1">
                  Download {uni.name} Brochure
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Get complete details about the MBBS program, fee structure, and admission process.
                </p>
              </div>
              <a
                href={uni.brochurePath}
                download
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all hover:scale-105 flex-shrink-0"
                style={{ background: '#F7931E', color: 'white' }}
              >
                <Download size={16} />
                Download Brochure
              </a>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-5">
              {/* Quick Apply */}
              <div
                className="rounded-2xl p-6 border border-gray-100"
                style={{ boxShadow: '0 4px 24px rgba(8,59,122,0.08)' }}
              >
                <LeadForm
                  compact
                  title="Apply Now"
                  subtitle="Get free admission guidance"
                />
              </div>

              {/* Contact Card */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(135deg, #083B7A, #0a4a96)' }}
              >
                <h3 className="font-bold text-base mb-4">Need Help? Call Us</h3>
                <div className="flex flex-col gap-3">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
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

              {/* Other Universities */}
              <div
                className="rounded-2xl p-5 border border-gray-100"
                style={{ background: '#f8fafc' }}
              >
                <h3
                  className="font-bold text-sm uppercase tracking-wider mb-3"
                  style={{ color: '#64748b' }}
                >
                  Other Universities
                </h3>
                <div className="flex flex-col gap-2">
                  {universities
                    .filter((u) => u.slug !== uni.slug)
                    .map((u) => (
                      <Link
                        key={u.slug}
                        href={`/universities/${u.slug}`}
                        className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white hover:shadow-sm transition-all group"
                        style={{ border: '1px solid #e2e8f0' }}
                      >
                        <span className="text-sm font-medium group-hover:text-primary transition-colors" style={{ color: '#334155' }}>
                          {u.shortName}
                        </span>
                        <ArrowRight size={14} style={{ color: '#94a3b8' }} />
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
