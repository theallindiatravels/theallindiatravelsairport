import { useEffect } from 'react';
import { site } from '@/data/site';

export interface SEOData {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  structuredData?: object;
}

const BASE_URL = 'https://www.theallindiatravels.online';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: site.name,
  description: 'Chennai Airport Taxi & Outstation Cabs. 24/7 airport transfers, one-way outstation taxi, temple tours, and holiday trips across Tamil Nadu, Pondicherry & South India.',
  url: BASE_URL,
  telephone: site.phone,
  email: site.email,
  areaServed: ['Chennai', 'Tamil Nadu', 'Pondicherry', 'Andhra Pradesh', 'Karnataka', 'South India'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Chennai International Airport (MAA), Meenambakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600027',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '₹399 - ₹7,999',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating,
    reviewCount: '10000',
  },
};

export default function SEO({ title, description, path, image, type = 'website', keywords, structuredData }: SEOData) {
  const fullUrl = `${BASE_URL}${path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} — ${site.name}`;
  const img = image || 'https://images.pexels.com/photos/34405181/pexels-photo-34405181.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630';

  useEffect(() => {
    document.title = fullTitle;

    setMeta('name', 'description', description);
    if (keywords?.length) setMeta('name', 'keywords', keywords.join(', '));

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', img);
    setMeta('property', 'og:site_name', site.name);
    setMeta('property', 'og:locale', 'en_IN');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', img);

    setLink('canonical', fullUrl);

    setJsonLd('ld-organization', organizationLd);

    if (structuredData) {
      setJsonLd('ld-page', structuredData);
    } else {
      const existing = document.getElementById('ld-page');
      if (existing) existing.remove();
    }
  }, [fullTitle, description, fullUrl, img, type, keywords, structuredData]);

  return null;
}
