import { Star, MessageCircle, Phone, Quote } from 'lucide-react';
import { extendedTestimonials, stats, site, waLink, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function Reviews() {
  const seo = seoPages['/reviews'];
  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/reviews" keywords={seo.keywords} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/9432498/pexels-photo-9432498.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Chennai city"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Customer Reviews</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            10,000+ Happy Passengers & Counting
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Real reviews from real travellers who chose The All India Travels Airport for their airport and outstation journeys across Tamil Nadu and South India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-600 text-white">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-display">{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Testimonials"
            title="What Our Passengers Say"
            subtitle="From airport pickups at 2 AM to multi-day temple tours — here is what travellers say about their experience with us."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedTestimonials.map((t) => (
              <div key={t.name} className="card p-6 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-100 mb-2" />
                <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8572308/pexels-photo-8572308.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Chennai Marina Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/95 to-primary-600/80" />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance">
            Join 10,000+ Happy Travellers
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-balance">
            Book your ride today and experience the service that has earned us a 4.9-star rating from thousands of passengers.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href={waLink('Hi, I want to book a cab.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> Book on WhatsApp
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 hover:!text-white">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
