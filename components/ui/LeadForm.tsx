'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  courseInterested: z.string().min(1, 'Please select a course'),
  countryInterested: z.string().min(1, 'Please select a country'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;


const courses = [
  'MBBS in Tajikistan',
  'MBBS Abroad (Other)',
  'Engineering Abroad',
  'MBA Abroad',
  'Bachelor\'s Degree Abroad',
  'Master\'s Degree Abroad',
  'Study in UK/Ireland',
  'Study in USA/Canada',
  'Study in Australia/New Zealand',
  'Study in Germany/Europe',
  'Study in Malaysia',
  'Other',
];

const countriesList = [
  'Tajikistan',
  'Kazakhstan',
  'Georgia',
  'Uzbekistan',
  'Bangladesh',
  'Iran',
  'USA',
  'Canada',
  'UK & Ireland',
  'Australia & New Zealand',
  'Germany & Europe',
  'Malaysia',
  'Not Sure Yet',
];

interface LeadFormProps {
  light?: boolean;
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export function LeadForm({
  light = false,
  compact = false,
  title = 'Get Free Counselling',
  subtitle = 'Fill in your details and our expert counsellors will reach out within 24 hours.',
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call — replace with actual form submission endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };  const inputClass = light
    ? 'w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all duration-200 bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:bg-white/15 focus:border-white/30 focus:ring-4 focus:ring-white/5'
    : 'w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all duration-200 bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/10';

  const labelClass = light
    ? 'block mb-1.5 font-semibold text-[10px] uppercase tracking-wider text-slate-350'
    : 'block mb-1.5 font-semibold text-[10px] uppercase tracking-wider text-slate-500';

  return (
    <div>
      {(title || subtitle) && !compact && (
        <div className="mb-6">
          {title && (
            <h3
              className="font-display text-xl font-bold mb-2"
              style={{
                color: light ? 'white' : '#0f172a',
              }}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm" style={{ color: light ? 'rgba(255,255,255,0.7)' : '#64748b' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10 text-center gap-4"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(20, 184, 196, 0.15)' }}
            >
              <CheckCircle size={32} style={{ color: '#14B8C4' }} />
            </div>
            <div>
              <h4
                className="text-lg font-bold mb-1"
                style={{ color: light ? 'white' : '#0f172a' }}
              >
                Thank You! We&apos;ll Contact You Soon
              </h4>
              <p
                className="text-sm"
                style={{ color: light ? 'rgba(255,255,255,0.7)' : '#64748b' }}
              >
                Our counsellors will reach out within 24 hours. You can also WhatsApp us directly.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm underline"
              style={{ color: '#14B8C4' }}
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            id="lead-enquiry-form"
          >
            <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
              {/* Name */}
              <div>
                <label className={labelClass} htmlFor="lead-name">Full Name *</label>
                <input
                  id="lead-name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClass}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass} htmlFor="lead-phone">Phone Number *</label>
                <input
                  id="lead-phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={labelClass} htmlFor="lead-email">Email Address *</label>
              <input
                id="lead-email"
                type="email"
                placeholder="your@email.com"
                className={inputClass}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Course */}
              <div>
                <label className={labelClass} htmlFor="lead-course">Course Interested *</label>
                <select
                  id="lead-course"
                  className={`${inputClass} cursor-pointer`}
                  {...register('courseInterested')}
                >
                  <option value="" className="text-slate-800">Select Course</option>
                  {courses.map((c) => (
                    <option key={c} value={c} className="text-slate-800">{c}</option>
                  ))}
                </select>
                {errors.courseInterested && (
                  <p className="text-red-400 text-xs mt-1">{errors.courseInterested.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className={labelClass} htmlFor="lead-country">Country Interested *</label>
                <select
                  id="lead-country"
                  className={`${inputClass} cursor-pointer`}
                  {...register('countryInterested')}
                >
                  <option value="" className="text-slate-800">Select Country</option>
                  {countriesList.map((c) => (
                    <option key={c} value={c} className="text-slate-800">{c}</option>
                  ))}
                </select>
                {errors.countryInterested && (
                  <p className="text-red-400 text-xs mt-1">{errors.countryInterested.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            {!compact && (
              <div>
                <label className={labelClass} htmlFor="lead-message">Message (Optional)</label>
                <textarea
                  id="lead-message"
                  rows={3}
                  placeholder="Tell us about your queries or requirements..."
                  className={`${inputClass} resize-vertical`}
                  {...register('message')}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white font-bold text-sm transition-all duration-300 ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#083B7A] to-[#0d4f9f] hover:shadow-lg hover:shadow-blue-500/15 hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit Enquiry
                </>
              )}
            </button>

            <p className="text-xs text-center" style={{ color: light ? 'rgba(255,255,255,0.5)' : '#94a3b8' }}>
              By submitting, you agree to be contacted by our team. Your data is safe with us.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
