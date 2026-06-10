'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://www.cambridgeeducationconsultants.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-1.5">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  className={light ? 'text-white/50' : 'text-gray-400'}
                />
              )}
              {index === 0 && (
                <Home size={14} className={light ? 'text-white/70' : 'text-gray-400'} />
              )}
              {item.href && index < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className={`text-sm transition-colors ${
                    light
                      ? 'text-white/70 hover:text-white'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`text-sm font-medium ${
                    light ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
