import {
  Plane, ArrowLeftRight, Car, Church, Mountain, Briefcase,
  CheckCircle2, MessageCircle, Phone, Users, ArrowRight,
} from 'lucide-react';
import { services, fleet, fareTable, bookingSteps, site, waLink, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import BookingForm from '@/components/BookingForm';
import SEO from '@/components/SEO';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane, ArrowLeftRight, Car, Church, Mountain, Briefcase,
};

export default function Services() {
  const seo = seoPages['/services'];
  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/services" keywords={seo.keywords} />
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/34405177/pexels-photo-34405177.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Taxi services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Comprehensive Taxi Services in Chennai & Tamil Nadu
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            From prompt Chennai International Airport transfers to budget-friendly one-way outstation cabs, scenic temple tours, and executive corporate rentals — we deliver safe, punctual, and transparent rides across South India.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="What We Offer"
            title="Designed for Comfort, Safety & Value"
            subtitle="Every trip is powered by clean, sanitized vehicles, licensed professional chauffeurs, live GPS tracking, and transparent upfront billing with zero hidden surcharges."
          />
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const reversed = i % 2 === 1;
              return (
                <div key={service.title} className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30">
                        {Icon && <Icon className="w-6 h-6 text-white" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5">{service.desc}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(`Hi, I'm interested in your ${service.title}. Please share details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <MessageCircle className="w-5 h-5" /> Book This Service
                    </a>
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-64 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Our Fleet"
            title="Vehicles for Every Group Size & Budget"
            subtitle="Every car undergoes 25-point mechanical safety checks, daily interior sanitization, and has high-speed chilled air-conditioning."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleet.map((vehicle) => (
              <div key={vehicle.name} className="card overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{vehicle.models}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary-500" /> {vehicle.seats}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-primary-500" /> {vehicle.bags}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">{vehicle.bestFor}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400">Fare from</span>
                      <div className="text-xl font-bold text-primary-700 font-display">{vehicle.fareFrom}</div>
                    </div>
                    <a
                      href={waLink(`Hi, I want to book a ${vehicle.name}.`)}
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

      {/* Fare Table */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="Fare Chart"
            title="Estimated Service Fare Chart"
            subtitle="No midnight surprise charges or surge fees during peak hours. Transparent tariffs designed to save you money."
          />
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-5 py-4 font-semibold text-gray-700">Service Type</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Vehicle Category</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Capacity</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Base Rate / Fare</th>
                  <th className="px-5 py-4 font-semibold text-gray-700">Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fareTable.map((row, i) => (
                  <tr key={i} className="hover:bg-primary-50/30 transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-900">{row.service}</td>
                    <td className="px-5 py-4 text-gray-600">{row.vehicle}</td>
                    <td className="px-5 py-4 text-gray-600">{row.seats}</td>
                    <td className="px-5 py-4 font-bold text-primary-700">{row.fare}</td>
                    <td className="px-5 py-4 text-gray-500 text-xs">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="How It Works"
            title="How Booking Works in 4 Easy Steps"
            subtitle="Booking your ride takes less than 60 seconds without mandatory app downloads or advance registration."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary-700 font-display">{step.step}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i < bookingSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-5 -right-3 w-6 h-6 text-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Booking Form */}
      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge bg-primary-50 text-primary-700 mb-4">Ready to Book?</span>
            <h2 className="section-title text-balance">Get Your Instant Quote Now</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Book Chennai's most dependable airport taxi, outstation cab, or customized holiday package. Experience polite drivers, clean cars, and 100% on-time guarantee.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href={waLink('Hi, I want to book a cab.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href={`tel:${site.phoneRaw}`} className="btn-secondary">
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
