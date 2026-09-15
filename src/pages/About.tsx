import { Heart, ShieldCheck, Clock, BadgeIndianRupee, Phone, MessageCircle, CheckCircle2, Users, Car, Award } from 'lucide-react';
import { site, stats, waLink, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';

const values = [
  { icon: Heart, title: 'Family Values', desc: 'We treat every traveller like our own guest — not an anonymous fare. Dignity, respect, and warmth in every ride.' },
  { icon: ShieldCheck, title: 'Safety First', desc: '25-point mechanical checks, verified chauffeurs, live GPS tracking, and sanitized cabins on every trip.' },
  { icon: BadgeIndianRupee, title: 'Transparent Pricing', desc: 'No surge pricing — ever. The fare you are quoted is the fare you pay, even at midnight or during monsoon rains.' },
  { icon: Clock, title: 'Always On Time', desc: 'We track every flight and guarantee on-time pickups. 45 minutes of free waiting time for delayed arrivals.' },
];

const milestones = [
  { year: '2016', title: 'The Beginning', desc: 'Founded with a single sedan outside Chennai International Airport, driven by our founder who treated every arrival as an honored guest.' },
  { year: '2018', title: 'Growing Trust', desc: 'Word spread through Chennai\'s diaspora, NRI travellers, and IT professionals along the OMR corridor. Fleet expanded to 15 vehicles.' },
  { year: '2021', title: '50+ Vehicle Fleet', desc: 'Added Innova Crystas, Ertigas, and Tempo Travellers. Crossed 5,000 satisfied passengers with a 4.9-star average rating.' },
  { year: '2024', title: '10,000+ Passengers', desc: 'Now serving over 10,000 happy travellers with 50+ modern vehicles, covering all of Tamil Nadu, Pondicherry, Andhra & Karnataka.' },
];

export default function About() {
  const seo = seoPages['/about'];
  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/about" keywords={seo.keywords} />
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8572308/pexels-photo-8572308.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Chennai city"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Chennai's Trusted Airport Taxi Service Since 2016
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Founded right outside Chennai International Airport (MAA), we are a proud family-owned taxi business dedicated to removing the stress, surprise surcharges, and uncertainty from airport and outstation travel.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge bg-primary-50 text-primary-700 mb-4">Our Story</span>
            <h2 className="section-title text-balance">
              Built on Family Values, Honesty & South Indian Warmth
            </h2>
            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
              <p>
                In late 2016, our founder stood outside Chennai International Airport in Meenambakkam and noticed a recurring tragedy: tired families, nervous solo flyers, and weary business travellers arriving late at night only to face aggressive touts, broken air conditioning, inflated midnight quotes, and sudden surge pricing.
              </p>
              <p>
                Believing that the first impression of Chennai and Tamil Nadu should be one of genuine dignity, safety, and respect, <strong className="text-gray-900">The All India Travels Airport</strong> was born. We began with just a single well-maintained sedan, driven with pride by founders who treated every arrival not as an anonymous fare, but as an honored family guest.
              </p>
              <p>
                We made simple, unbreakable promises: <em>never charge surge pricing during sudden monsoon rains, track every passenger's flight so they never wait alone at the terminal curb, keep every cabin spotless, and always pick up the phone directly when a customer calls.</em>
              </p>
              <p>
                Today, with a trusted fleet of <strong className="text-gray-900">50+ modern vehicles</strong> — from fuel-efficient sedans to luxury Innova Crystas and spacious Tempo Travellers — we serve over 10,000 satisfied passengers across Tamil Nadu, Pondicherry, Andhra Pradesh, and Karnataka.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href={waLink('Hi, I want to book a cab.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" /> Book a Cab
              </a>
              <a href={`tel:${site.phoneRaw}`} className="btn-secondary">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/12903045/pexels-photo-12903045.jpeg?auto=compress&cs=tinysrgb&w=940&h=700"
              alt="Chennai cityscape"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 hidden sm:flex">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 font-display">{site.founded}</div>
                <div className="text-xs text-gray-400">Serving since</div>
              </div>
            </div>
          </div>
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

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <SectionHeader
            badge="Our Values"
            title="What Makes Us Different"
            subtitle="Four unbreakable promises that have guided every single ride since 2016."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeader
            badge="Our Journey"
            title="From One Sedan to 50+ Vehicles"
            subtitle="A decade of building trust, one ride at a time."
          />
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold font-display flex-shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-16 bg-primary-200 mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-gray-900">{m.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-8">
              {[
                { icon: Users, label: '10,000+ Happy Passengers' },
                { icon: Car, label: '50+ Modern Vehicles' },
                { icon: ShieldCheck, label: '100% Safety Record' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium text-center max-w-[100px]">{item.label}</span>
                </div>
              ))}
            </div>
            <h2 className="section-title text-balance">Our Unbreakable Promise to You</h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-balance">
              We will never charge surge pricing. We will always track your flight. We will keep every cabin spotless. And we will always pick up the phone when you call. That is not just a slogan — it is the standard we have maintained for over 10,000 passengers since 2016.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a href={waLink('Hi, I want to book a cab.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" /> Book Your Ride
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
