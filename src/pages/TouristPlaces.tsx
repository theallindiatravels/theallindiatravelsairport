import { MapPin, Clock, Navigation, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { touristPlaces, site, waLink, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function TouristPlaces() {
  const seo = seoPages['/tourist-places'];
  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/tourist-places" keywords={seo.keywords} />
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/37678479/pexels-photo-37678479.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="South India temple"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Tourist Places</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Explore South India with The All India Travels Airport
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            From ancient temple towns to misty hill stations and French-colonial beach promenades — discover the best of Tamil Nadu and beyond with our custom tour packages.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="Destinations"
            title="Popular Tourist Destinations from Chennai"
            subtitle="Custom multi-day itineraries with experienced drivers who know the routes, temple timings, and best local dining spots."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {touristPlaces.map((place) => (
              <div key={place.name} className="card overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="text-2xl font-bold font-display text-white">{place.name}</h3>
                    <p className="text-sm text-white/80">{place.tagline}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{place.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1.5"><Navigation className="w-4 h-4 text-primary-500" /> {place.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary-500" /> {place.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {place.highlights.map((h) => (
                      <span key={h} className="badge bg-primary-50 text-primary-700">
                        <MapPin className="w-3 h-3" /> {h}
                      </span>
                    ))}
                  </div>
                  <a
                    href={waLink(`Hi, I want to book a tour to ${place.name}. Please share package details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <MessageCircle className="w-5 h-5" /> Book This Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tour With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Why Tour With Us"
            title="More Than Just a Taxi Ride"
            subtitle="Our drivers are your local guides — they know temple timings, VIP darshan queues, dress codes, and the best pure-veg dining spots."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Expert Route Knowledge', desc: 'Drivers who know every temple opening hour, morning abhishekam timing, and VIP seeghra darshan queue.' },
              { title: 'Flexible Itineraries', desc: 'Custom multi-day tours with flexible halt points. Stop where you want, eat where you want, stay as long as you want.' },
              { title: 'Pure Veg Dining', desc: 'Drivers who can guide you to the best pure vegetarian restaurants along your pilgrimage route.' },
              { title: 'Comfortable Vehicles', desc: 'AC sedans, Innova Crystas, and Tempo Travellers — all sanitized daily with chilled air-conditioning.' },
              { title: 'Transparent Pricing', desc: 'Fixed per-km rates with all tolls, driver allowance, and taxes clarified upfront. No hidden charges.' },
              { title: 'Family-Friendly', desc: 'Safe, comfortable travel for families with children, elderly parents, and large pilgrimage groups.' },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5330349/pexels-photo-5330349.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Ooty tea gardens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/95 to-primary-600/80" />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance">
            Plan Your Dream South India Trip
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-balance">
            From a one-day Mahabalipuram trip to a week-long temple circuit, we create custom itineraries for every group and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href={waLink('Hi, I want to plan a tour. Please help me with an itinerary.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> Plan My Trip
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 hover:!text-white">
              Call to Plan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
