import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CONTACT } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cambridge Education Consultants',
  description: 'Privacy Policy for Cambridge Education Consultants. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 3, 2026';

  return (
    <>
      {/* Mini Hero */}
      <section className="relative pt-32 pb-16 bg-[#041E42] overflow-hidden">
        {/* Background ambient light */}
        <div className="ambient-blob ambient-teal w-[300px] h-[300px] -top-10 -right-10 opacity-10" />
        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
            light
          />
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            <div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                At <strong>Cambridge Education Consultants</strong>, we are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, apply for counselling, or use our services.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We collect personal information that you voluntarily provide to us when you fill out lead forms, subscribe to our newsletter, request university brochures, or communicate with our counsellors. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Personal Identity:</strong> Full name, age, date of birth, gender, and photograph.</li>
                <li><strong>Contact Information:</strong> Email address, mobile phone number, WhatsApp number, and mailing address.</li>
                <li><strong>Academic History:</strong> Academic transcripts, board exam results (NEET scores for MBBS applicants, 10th/12th scores), language proficiency scores, and curriculum vitae.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and activity logs gathered via cookies when you browse our site.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We use the information we collect for various business and educational purposes, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Providing personalized admission and academic counselling services.</li>
                <li>Processing applications, documentation, and visa filings with foreign universities.</li>
                <li>Sending you updates, brochures, newsletters, and informational materials regarding MBBS in Tajikistan and other study abroad programs.</li>
                <li>Responding to inquiries, scheduling calls, and communicating via phone, email, or WhatsApp.</li>
                <li>Improving our website performance, user experience, and optimizing our marketing outreach.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only under the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Universities & Admission Boards:</strong> To process your applications, we share necessary academic records and identity details with target institutions in Tajikistan and other countries.</li>
                <li><strong>Visa and Immigration Authorities:</strong> To assist with your student visa applications and immigration clearance.</li>
                <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process to protect our rights, safety, or the security of our users.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We implement robust security measures, including physical, administrative, and technical controls, to protect your personal data from unauthorized access, loss, alteration, or disclosure. However, please note that no method of transmission over the internet or database storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                5. Cookies Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website uses cookies to enhance user experience, track site usage analytics, and deliver targeted ads. You can manage or disable cookies directly through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Depending on your location, you may have specific rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>The right to access the personal information we hold about you.</li>
                <li>The right to request corrections or updates to inaccurate information.</li>
                <li>The right to request erasure of your data when it is no longer required for academic processing.</li>
                <li>The right to opt-out of marketing emails or SMS notifications at any time.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-slate-700 space-y-1.5 text-sm">
                <p><strong>Cambridge Education Consultants</strong></p>
                <p>Address: {CONTACT.address}</p>
                <p>Hotline: {CONTACT.phones[0]} / {CONTACT.phones[2]}</p>
                <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-primary font-semibold hover:underline">{CONTACT.email}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
