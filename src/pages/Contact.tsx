import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User } from 'lucide-react';
import { useState } from 'react';
import { site, waLink, faqs, seoPages } from '@/data/site';
import SectionHeader from '@/components/SectionHeader';
import SEO from '@/components/SEO';
import OpenStreetMapPlaceInput from '@/components/OpenStreetMapPlaceInput';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    vehicle: 'Sedan',
    message: '',
  });

  const message = `Hi, I want to book a cab.\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nVehicle: ${form.vehicle}\nMessage: ${form.message}`;
  const seo = seoPages['/contact'];

  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={seo.title} description={seo.description} path="/contact" keywords={seo.keywords} />
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/16092722/pexels-photo-16092722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Contact"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-page relative z-10 text-center text-white">
          <span className="badge bg-primary-500/90 text-white mb-4">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white text-balance">
            Get in Touch — We're Here 24/7
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto text-balance">
            Book a cab, ask about fares, or plan a custom tour. Call or WhatsApp us anytime — we always pick up the phone.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: 'Call Us', value: site.phone, href: `tel:${site.phoneRaw}`, color: 'bg-secondary-600' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: waLink('Hi, I want to book a cab.'), color: 'bg-success-500' },
              { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, color: 'bg-primary-600' },
              { icon: Clock, label: 'Hours', value: site.hours, href: null, color: 'bg-accent-500' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card p-6 text-center group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{item.label}</h3>
                <p className="text-base font-bold text-gray-900 mt-1">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <span className="badge bg-primary-50 text-primary-700 mb-4">Send a Message</span>
            <h2 className="section-title text-balance">Instant Cab Enquiry</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Fill in your trip details to send an instant enquiry straight to our 24/7 WhatsApp dispatch desk. Get a fixed quote with all tolls and taxes included.
            </p>
            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field pl-10 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field pl-10 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <OpenStreetMapPlaceInput
                    placeholder="Where should we pick you up?"
                    value={form.pickup}
                    onChange={(pickup) => setForm({ ...form, pickup })}
                    className="input-field pl-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Drop Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <OpenStreetMapPlaceInput
                    placeholder="Where are you going?"
                    value={form.drop}
                    onChange={(drop) => setForm({ ...form, drop })}
                    className="input-field pl-10 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Travel Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Vehicle Type</label>
                  <select
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                    className="input-field text-sm"
                  >
                    <option>Sedan</option>
                    <option>SUV / Innova</option>
                    <option>Tempo Traveller</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message (Optional)</label>
                <textarea
                  placeholder="Any special requests?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="input-field text-sm resize-none"
                />
              </div>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <Send className="w-5 h-5" /> Send Enquiry on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <span className="badge bg-primary-50 text-primary-700 mb-4">Visit Us</span>
            <h2 className="section-title text-balance">Our Location</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              We are based near Chennai International Airport (MAA) in Meenambakkam, serving all of Tamil Nadu, Pondicherry, Andhra Pradesh, and Karnataka.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Address</h4>
                  <p className="text-sm text-gray-500 mt-1">{site.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Phone</h4>
                  <a href={`tel:${site.phoneRaw}`} className="text-sm text-gray-500 mt-1 hover:text-primary-700 transition-colors block">{site.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-success-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-success-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                  <a href={`mailto:${site.email}`} className="text-sm text-gray-500 mt-1 hover:text-primary-700 transition-colors block">{site.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-sm text-gray-500 mt-1">{site.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our Chennai taxi booking, airport pickup protocols, and outstation fares."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <span className="ml-4 text-primary-600 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
