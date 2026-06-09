import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CONTACT } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cambridge Education Consultants',
  description: 'Terms and conditions of service for Cambridge Education Consultants. Review our service rules, liability, and student guidelines.',
};

export default function TermsPage() {
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
              { label: 'Terms & Conditions' },
            ]}
            light
          />
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-2">
            Terms &amp; Conditions
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
                Welcome to <strong>Cambridge Education Consultants</strong>. These Terms &amp; Conditions govern your access to and use of our website, counselling services, admission assistance, and visa documentation. By accessing our services, you agree to comply with and be bound by these terms.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                1. Scope of Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Cambridge Education Consultants provides professional guidance for overseas education, specifically including admission processing for MBBS in Tajikistan, university shortlisting, LOR/SOP editing advice, visa documentation filing assistance, and pre-departure briefings.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Please note that we act as facilitators between students and foreign universities. The final decision to grant admission lies solely with the respective academic institution, and the final decision to grant a student visa lies solely with the immigration authority of the destination country.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                2. Eligibility and Student Responsibilities
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Students enrolling for our services must ensure that:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>All documents, educational marksheets, NEET scores, certificates, and identity proofs submitted are 100% genuine and accurate.</li>
                <li>They meet the basic academic eligibility criteria set by foreign institutions and local councils (such as NMC/WHO guidelines for medical graduates).</li>
                <li>They adhere to application deadlines and submit requested documents, fees, and passport copies promptly.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Any delay or rejection caused due to fraudulent, incomplete, or late submission of documents is the sole responsibility of the applicant.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                3. Fees, Payments, and Refund Policy
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Counselling & Processing Fees:</strong> Service processing charges must be paid as outlined in the service agreement signed at the time of registeration.</li>
                <li><strong>University Tuition Fees:</strong> University tuition, hostel, and health insurance fees must be paid directly to the university&apos;s bank account as per their official invoice. We do not accept or handle university tuition fees in cash or local personal bank accounts.</li>
                <li><strong>Refunds:</strong> Processing fees are generally non-refundable once the application has been submitted to the foreign university. University tuition fee refunds are governed by the refund policy of the respective university.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                4. Academic and Visa Compliance
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Foreign universities have strict codes of conduct, exam policies, attendance regulations, and hostel rules. Once admitted, students are required to fully comply with the laws of the host nation (e.g. Tajikistan) and the regulations of their university.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cambridge Education Consultants is not liable for any disciplinary action, expulsion, or visa revocation caused by student misconduct, academic failure, or violations of immigration laws.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                While we make every effort to guide students accurately, Cambridge Education Consultants will not be liable for any indirect, incidental, or consequential damages resulting from academic rejections, visa denials, flight cancellations, host nation political changes, currency rate fluctuations, or revisions in academic regulations by bodies like the National Medical Commission (NMC).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                6. Intellectual Property Rights
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All content on this website, including text, graphics, logos, images, code, and resources, is the property of Cambridge Education Consultants and is protected by copyright and intellectual property laws. Unauthorized distribution or copying of this content is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                7. Changes to Terms and Conditions
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Any changes will be updated on this page with the revised date. Continued use of our website or counselling services after modifications constitute your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">
                8. Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                For questions regarding these Terms &amp; Conditions, please contact us at:
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
