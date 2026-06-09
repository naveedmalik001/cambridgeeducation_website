import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent('Hello! I am interested in studying abroad. Please guide me.');
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim();
}

export const CONTACT = {
  whatsapp: '+918899561414',
  phones: ['+918899561414', '+918899571414', '+918899581414'],
  address: '5th Floor, Chinar Heights, Baghat (Airport Road), Srinagar, Jammu & Kashmir',
  email: 'info@cambridgeeducation.in',
  youtube: 'https://www.youtube.com/@cambridgeeducationconsultants',
  youtubeVideoId: 'HviJgU1vp4Q', // Educational video ID (can be customized)
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.123456789!2d74.7976!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzAxLjEiTiA3NMKwNDcnNTEuNCJF!5e0!3m2!1sen!2sin!4v1234567890',
};

export const SITE = {
  name: 'Cambridge Education Consultants',
  title: 'Cambridge Education Consultants | MBBS in Tajikistan | Study Abroad Experts',
  description:
    'Cambridge Education Consultants helps students secure admissions in top medical universities in Tajikistan and leading universities worldwide. MBBS Abroad, Study Abroad, Visa Assistance and End-to-End Admission Support.',
  url: 'https://www.cambridgeeducationconsultants.com',
  logo: '/assets/logo/logo.jpeg',
  brochure: '/cambridge_brochure/cambridge-education-consultants.pdf',
};
