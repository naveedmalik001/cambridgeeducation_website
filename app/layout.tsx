import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingContactButtons } from '@/components/ui/FloatingContactButtons';
import { SITE } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | Cambridge Education Consultants`,
  },
  description: SITE.description,
  icons: {
    icon: '/assets/logo/logo_circle.jpeg',
    shortcut: '/assets/logo/logo_circle.jpeg',
    apple: '/assets/logo/logo_circle.jpeg',
  },
  keywords: [
    'MBBS in Tajikistan',
    'Study Abroad',
    'Cambridge Education Consultants',
    'MBBS Abroad',
    'Medical Universities Tajikistan',
    'Study in Tajikistan',
    'FMGE Coaching',
    'NMC Approved Universities',
    'Education Consultancy Srinagar',
    'Study in Kazakhstan',
    'Study in Georgia',
    'Visa Assistance',
    'Admission Support',
  ],
  authors: [{ name: 'Cambridge Education Consultants' }],
  creator: 'Cambridge Education Consultants',
  publisher: 'Cambridge Education Consultants',
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cambridge Education Consultants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Cambridge Education Consultants',
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th Floor, Chinar Heights, Baghat (Airport Road)',
    addressLocality: 'Srinagar',
    addressRegion: 'Jammu & Kashmir',
    addressCountry: 'IN',
  },
  telephone: ['+918899561414', '+918899571414', '+918899581414'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+918899584444',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi', 'Urdu', 'Kashmiri'],
  },
  sameAs: [
    'https://www.facebook.com/cambridgeeducationconsultants',
    'https://www.instagram.com/cambridgeeducationconsultants',
    'https://www.youtube.com/@cambridgeeducationconsultants',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
        className="overflow-x-hidden w-full relative flex flex-col min-h-screen"
      >
        <Navbar />
        <div className="overflow-x-hidden w-full relative flex-grow flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
