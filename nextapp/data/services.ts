import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    icon: 'MessageSquare',
    title: 'Career Counselling',
    description:
      'One-on-one personalised sessions to map your academic profile, budget, and select the perfect study destination.',
    features: [
      'Profile evaluation',
      'Country comparison',
      'Budget planning',
    ],
  },
  {
    id: '2',
    icon: 'GraduationCap',
    title: 'University Selection',
    description:
      'Shortlisting top-ranked, NMC-compliant, and WHO-listed medical and academic universities matching your criteria.',
    features: [
      'University shortlisting',
      'Fee structure analysis',
      'NMC compliance verification',
    ],
  },
  {
    id: '3',
    icon: 'FileText',
    title: 'Application & Admission',
    description:
      'Complete handling of your university application forms, documents verification, and securing your offer letter.',
    features: [
      'Form submission support',
      'SOP & LOR assistance',
      'Admission offer tracking',
    ],
  },
  {
    id: '4',
    icon: 'Globe',
    title: 'Visa Assistance',
    description:
      'End-to-end guidance through student student visa documentation, online filing, appointment booking, and mock interviews.',
    features: [
      'Visa file compilation',
      'Mock interview prep',
      '98% visa success rate',
    ],
  },
  {
    id: '5',
    icon: 'Plane',
    title: 'Travel & Pre-Departure',
    description:
      'Arranging group travel flights, foreign exchange, student travel insurance, and holding pre-departure orientation briefings.',
    features: [
      'Group travel booking',
      'Forex & insurance support',
      'Pre-departure briefing',
    ],
  },
  {
    id: '6',
    icon: 'Users',
    title: 'Post-Arrival Support',
    description:
      'Coordination on-campus for hostel allocation, mess setup, local sim/bank account, and enrolment assistance.',
    features: [
      'Hostel & mess setup',
      'Local sim & bank account',
      'Ongoing local guidance',
    ],
  },
];
