'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  accentColor?: 'teal' | 'orange' | 'white';
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  accentColor = 'teal',
}: SectionHeadingProps) {
  const accentColors = {
    teal: '#14B8C4',
    orange: '#F7931E',
    white: '#ffffff',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={centered ? 'text-center' : ''}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4`}
          style={{
            background: light
              ? 'rgba(255,255,255,0.12)'
              : `rgba(20, 184, 196, 0.1)`,
            color: light ? '#ffffff' : accentColors[accentColor],
            border: `1px solid ${light ? 'rgba(255,255,255,0.2)' : 'rgba(20,184,196,0.2)'}`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accentColors[accentColor] }}
          />
          {badge}
        </div>
      )}

      <h2
        className="font-display text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
        style={{
          color: light ? '#ffffff' : '#0f172a',
        }}
      >
        {title}
      </h2>

      {/* Accent Line */}
      <div className={`flex ${centered ? 'justify-center' : ''} mb-5`}>
        <div
          className="h-1 rounded-full"
          style={{
            width: '60px',
            background: `linear-gradient(to right, ${accentColors[accentColor]}, transparent)`,
          }}
        />
      </div>

      {subtitle && (
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{
            color: light ? 'rgba(255,255,255,0.75)' : '#64748b',
            margin: centered ? '0 auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
