import {
  Plane, ArrowLeftRight, Car, Church, Mountain, Briefcase,
  Clock, ShieldCheck, BadgeIndianRupee, Star, MapPin, Users,
  MessageCircle, Phone, CheckCircle2, ArrowRight, Navigation,
} from 'lucide-react';
import {
  services, fleet, popularRoutes, testimonials, stats,
  bookingSteps, site, waLink, seoPages,
} from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import BookingForm from '@/components/BookingForm';
import SEO from '@/components/SEO';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane, ArrowLeftRight, Car, Church, Mountain, Briefcase,
};

export default function Home({ onNavigate }: { onNavigate: (path: string) => void }) {
  const seo = seoPages['/'];
  return (
    <div>
      <SEO title={seo.title} description={seo.description} path="/" keywords={seo.keywords} />
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/34405181/pexels-photo-34405181.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Chennai Airport taxi pickup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-page relative z-10 grid lg:grid-cols-5 gap-8 items-center py-16">
          <div className="lg:col-span-3 text-white">
            <span className="badge bg-primary-500/90 text-white mb-5 animate-fade-in-up">
              <Star className="w-3.5 h-3.5 fill-white" />
              {site.rating} Rated · 10,000+ Passengers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight text-balance animate-fade-in-up animate-delay-100">
              Chennai Airport Taxi & Outstation Cabs
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl leading-relaxed animate-fade-in-up animate-delay-200">
              Experience seamless airport transfers from Chennai International Airport (MAA) and budget-friendly one-way outstation taxi rides across Tamil Nadu, Pondicherry, Tirupati & South India. Professional chauffeurs, spotless AC vehicles, and guaranteed on-time pickups.
            </p>
            <div className="flex flex-wrap gap-3 mt-7 animate-fade-in-up animate-delay-300">
              <a
                href={waLink('Hi, I want to book a cab. Please share fare details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" /> Book Your Cab Now
              </a>
              <button onClick={() => onNavigate('/routes')} className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 hover:!text-white">
                View Routes & Fares <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-5 mt-8 animate-fade-in-up animate-delay-500">
              {[
                { icon: Clock, label: '24/7 Available' },
                { icon: ShieldCheck, label: 'No Surge Pricing' },
                { icon: BadgeIndianRupee, label: 'Best Price Guarantee' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/90 text-sm">
                  <item.icon className="w-4 h-4 text-primary-400" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 animate-slide-in-right animate-delay-300">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
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

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Our Services"
            title="Premium Taxi Services in Chennai"
            subtitle="Whether you are stepping off a flight at Meenambakkam or heading across Tamil Nadu for a holiday, we deliver prompt, comfortable rides at the guaranteed best rates."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.title} className="card overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center shadow-lg">
                        {Icon && <Icon className="w-5 h-5 text-white" />}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                    <ul className="space-y-1.5">
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
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                    >
                      Book this service <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="Popular Routes"
            title="Popular Outstation Routes from Chennai"
            subtitle="Transparent fares for the most booked routes across Tamil Nadu and South India. No hidden charges, no surge tricks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route) => (
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
          <div className="text-center mt-10">
            <button onClick={() => onNavigate('/routes')} className="btn-secondary">
              View All Routes & Fares <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Our Fleet"
            title="Vehicles for Every Group Size & Budget"
            subtitle="Every car in our fleet undergoes 25-point mechanical safety checks, daily interior sanitization, and has high-speed chilled air-conditioning."
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
                      href={waLink(`Hi, I want to book a ${vehicle.name}. Please share details.`)}
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="How It Works"
            title="Book Your Ride in 4 Easy Steps"
            subtitle="Booking your ride with The All India Travels takes less than 60 seconds — no mandatory app downloads or advance registration."
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Testimonials"
            title="What Our Passengers Say"
            subtitle="Real reviews from real travellers who chose The All India Travels for their airport and outstation journeys."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
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
            src="https://images.pexels.com/photos/9432498/pexels-photo-9432498.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Chennai city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/95 to-primary-600/80" />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance">
            Ready to Travel? Get Your Instant Quote Now
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-balance">
            Book Chennai's most dependable airport taxi, outstation cab, or customized holiday package. Experience polite drivers, clean cars, and 100% on-time guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href={waLink('Hi, I want to book a cab. Please share fare details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
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
