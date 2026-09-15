import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { extendedFaqs, site, waLink, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const seo = seoPages['/faq'];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: extendedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/faq" keywords={seo.keywords} structuredData={faqLd} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/16092722/pexels-photo-16092722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="FAQ"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">FAQ</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Everything you need to know about our Chennai taxi booking, airport pickup protocols, outstation fares, and service policies.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-3xl">
          <div className="space-y-3">
            {extendedFaqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border transition-all ${
                  open === i ? 'border-primary-200 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${open === i ? 'text-primary-600' : 'text-gray-400'}`} />
                    <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 pl-13 text-sm text-gray-500 leading-relaxed ml-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              badge="Still Have Questions?"
              title="We're Here to Help — 24/7"
              subtitle="Call or WhatsApp us anytime. We always pick up the phone and are happy to answer any questions about your trip."
            />
            <div className="flex flex-wrap justify-center gap-3">
              <a href={waLink('Hi, I have a question about booking a cab.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
              </a>
              <a href={`tel:${site.phoneRaw}`} className="btn-secondary">
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
