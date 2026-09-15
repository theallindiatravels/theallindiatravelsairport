import { Users, Briefcase, CheckCircle2, MessageCircle, Phone, Gauge, Snowflake, ShieldCheck } from 'lucide-react';
import { fleetDetails, site, waLink, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';

const specIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  engine: Gauge,
  mileage: Gauge,
  ac: Snowflake,
  safety: ShieldCheck,
};

export default function Fleet() {
  const seo = seoPages['/fleet'];
  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/fleet" keywords={seo.keywords} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Luxury SUV"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Our Fleet</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Vehicles for Every Group Size & Budget
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Every car in our fleet undergoes 25-point mechanical safety checks, daily interior sanitization, and has high-speed chilled air-conditioning. Choose from fuel-efficient sedans to spacious Tempo Travellers.
          </p>
        </div>
      </section>

      {/* Fleet Detail */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="space-y-12">
            {fleetDetails.map((vehicle, i) => (
              <div key={vehicle.name} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-72 object-cover" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-2 shadow-lg">
                      <span className="text-xs text-gray-400">Fare from</span>
                      <div className="text-xl font-bold text-primary-700 font-display">{vehicle.fareFrom}</div>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{vehicle.name}</h2>
                  <p className="text-sm text-gray-400 mb-4">{vehicle.models}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary-500" /> {vehicle.seats}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-primary-500" /> {vehicle.bags}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">{vehicle.bestFor}</p>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {vehicle.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Vehicle Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(vehicle.specs).map(([key, value]) => {
                        const Icon = specIcons[key] || Gauge;
                        return (
                          <div key={key} className="flex items-center gap-2 text-sm">
                            <Icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-gray-500 capitalize">{key}:</span>
                            <span className="font-medium text-gray-700">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={waLink(`Hi, I want to book a ${vehicle.name}. Please share details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle className="w-5 h-5" /> Book This Vehicle
                    </a>
                    <a href={`tel:${site.phoneRaw}`} className="btn-secondary">
                      <Phone className="w-4 h-4" /> Call to Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Safety First"
            title="Our Vehicle Safety Standards"
            subtitle="Every vehicle in our fleet meets strict safety and cleanliness standards before every single trip."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: '25-Point Safety Check', desc: 'Mechanical inspection before every trip — brakes, tires, lights, steering, and engine health.' },
              { icon: Snowflake, title: 'Daily Sanitization', desc: 'Interior cleaned and sanitized daily. Cabin air filters replaced regularly for fresh air.' },
              { icon: Gauge, title: 'Regular Service', desc: 'All vehicles serviced at authorized service centers as per manufacturer schedule.' },
              { icon: ShieldCheck, title: 'GPS Tracking', desc: 'Live GPS tracking on every vehicle for safety and real-time trip monitoring.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
