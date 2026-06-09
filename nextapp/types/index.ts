export interface University {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  established: string;
  location: string;
  country: string;
  image: string;
  logo?: string;
  description: string;
  highlights: string[];
  accreditations: string[];
  mbbsDuration: string;
  tuitionFee: string;
  hostelFee: string;
  totalFee: string;
  brochurePath: string;
  featured: boolean;
  stats: { label: string; value: string }[];
  admissionProcess: string[];
  eligibility: string[];
  facilities: string[];
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  flag: string;
  continent: string;
  image: string;
  overview: string;
  whyStudyHere: string[];
  topUniversities: string[];
  averageTuitionFee: string;
  livingCost: string;
  admissionRequirements: string[];
  visaInfo: string;
  countryGuide?: string;
  popular: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  university: string;
  country: string;
  image: string;
  quote: string;
  year: string;
}

export interface StatCard {
  value: string;
  label: string;
  suffix?: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  courseInterested: string;
  countryInterested: string;
  message: string;
}
