import { MapPin, Clock, Navigation, ArrowRight, MessageCircle, Phone, Plane } from 'lucide-react';
import { popularRoutes, airportCityRoutes, site, waLink, seoPages, extendedRoutes } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function Routes() {
  const seo = seoPages['/routes'];
  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/routes" keywords={seo.keywords} />
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/30317431/pexels-photo-30317431.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Highway road trip"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Routes & Fares</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Chennai Taxi Fares & Route Tariff
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Explore clear, pocket-friendly cab fares from Chennai International Airport across Tamil Nadu, Pondicherry, Andhra Pradesh, and Karnataka. Pay only for what you travel with zero surge tricks.
          </p>
        </div>
      </section>

      {/* Airport City Drop Rates */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="Airport City Drop"
            title="Chennai Airport City Drop Rates"
            subtitle="Arrived at Meenambakkam Airport? Skip the long taxi queues. Pre-book an air-conditioned, sanitized sedan with verified drivers waiting for you at the arrival ramp."
          />
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-5 py-4 font-semibold text-gray-700 flex items-center gap-2"><Plane className="w-4 h-4 text-primary-600" /> From Airport</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Destination</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Distance</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Travel Time</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Fare (AC Sedan)</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {airportCityRoutes.map((route) => (
                  <tr key={route.to} className="hover:bg-primary-50/30 transition-colors">
                    <td className="px-5 py-4 text-gray-400 text-xs">MAA</td>
                    <td className="px-5 py-4">
                      <div className="font-medium text-gray-900">{route.to}</div>
                      <div className="text-xs text-gray-400">{route.area}</div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{route.distance}</td>
                    <td className="px-5 py-4 text-gray-600">{route.time}</td>
                    <td className="px-5 py-4 font-bold text-primary-700">{route.fare}</td>
                    <td className="px-5 py-4">
                      <a
                        href={waLink(`Hi, I want to book a cab from Chennai Airport to ${route.to}. Fare: ${route.fare}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-success-600 hover:text-success-700 flex items-center gap-1"
                      >
                        <MessageCircle className="w-4 h-4" /> Book
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Outstation Routes */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Outstation Routes"
            title="Popular Outstation Routes from Chennai"
            subtitle="Transparent one-way and round-trip fares for the most booked routes across Tamil Nadu and South India."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...popularRoutes, ...extendedRoutes].map((route) => (
              <div key={`${route.from}-${route.to}`} className="card overflow-hidden group">
                <div className="relative h-40 overflow-hidden">
                  <img src={route.image} alt={`${route.from} to ${route.to}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      {route.from}
                      <ArrowRight className="w-3.5 h-3.5" />
                      {route.to}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5"><Navigation className="w-4 h-4" /> {route.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {route.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400">Starting from</span>
                      <div className="text-2xl font-bold text-gray-900 font-display">{route.fare}</div>
                    </div>
                    <a
                      href={waLink(`Hi, I want to book a cab from ${route.from} to ${route.to}. Fare: ${route.fare}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm !px-4 !py-2.5"
                    >
                      Book Now
                    </a>
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
            src="https://images.pexels.com/photos/39409614/pexels-photo-39409614.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Scenic road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/95 to-primary-600/80" />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance">
            Don't See Your Route? Just Ask!
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-balance">
            We cover all routes across Tamil Nadu, Pondicherry, Andhra Pradesh, and Karnataka. Send us your pickup and drop for an instant quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href={waLink('Hi, I want a fare quote for my route.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> Get Instant Quote
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
