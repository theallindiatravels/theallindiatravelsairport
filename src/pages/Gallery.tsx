import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { galleryImages, site, waLink, seoPages } from '@/data/site';
import SEO from '@/components/SEO';

const categories = ['All', 'Airport', 'Destinations', 'Temples', 'Hill Stations', 'City', 'Highway'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const seo = seoPages['/gallery'];

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/gallery" keywords={seo.keywords} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/37678479/pexels-photo-37678479.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="South India temple gallery"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Gallery</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Moments from Our Journeys
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            A visual journey through the destinations, temples, hill stations, and highways we travel across Tamil Nadu and South India.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-page">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setLightbox(img.src)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  i % 5 === 0 || i % 7 === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ minHeight: i % 5 === 0 || i % 7 === 0 ? '400px' : '200px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="badge bg-primary-600/90 text-white text-xs">{img.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-page text-center">
          <h2 className="section-title text-balance">Ready to Explore South India?</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-balance">
            Book a cab and start your own journey through the temples, beaches, and hill stations of Tamil Nadu.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <a href={waLink('Hi, I want to book a cab for a trip.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> Book Your Trip
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-secondary">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl" aria-label="Close">✕</button>
          <img src={lightbox} alt="Gallery image" className="max-w-full max-h-full rounded-xl object-contain" />
        </div>
      )}
    </div>
  );
}
