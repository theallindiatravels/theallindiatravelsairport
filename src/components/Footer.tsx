import { Car, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { site, navLinks, waLink } from '@/data/site';

export default function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  const serviceLinks = [
    { label: 'Airport Taxi', path: '/services' },
    { label: 'One Way Taxi', path: '/services' },
    { label: 'Outstation Cabs', path: '/services' },
    { label: 'Temple Tours', path: '/services' },
  ];
  const routeLinks = [
    { label: 'Chennai to Pondicherry', path: '/routes' },
    { label: 'Chennai to Tirupati', path: '/routes' },
    { label: 'Chennai to Madurai', path: '/routes' },
    { label: 'Chennai to Bangalore', path: '/routes' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-display font-bold text-white text-sm">The All India Travels Airport</span>
                <span className="block text-xs text-gray-500">Chennai Airport Taxi</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Chennai's most trusted taxi service. Airport transfers, outstation cabs, one-way taxi & Tamil Nadu tours — available 24/7 with professional chauffeurs and guaranteed on-time pickups.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={waLink('Hi, I want to book a cab.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-success-500 flex items-center justify-center hover:bg-success-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href={`tel:${site.phoneRaw}`} className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href={`mailto:${site.email}`} className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => onNavigate(link.path)} className="text-sm hover:text-primary-400 transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Popular Routes</h4>
            <ul className="space-y-2.5">
              {routeLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => onNavigate(link.path)} className="text-sm hover:text-primary-400 transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mt-6 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => onNavigate(link.path)} className="text-sm hover:text-primary-400 transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href={`tel:${site.phoneRaw}`} className="text-sm hover:text-primary-400 transition-colors">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href={`mailto:${site.email}`} className="text-sm hover:text-primary-400 transition-colors">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} The All India Travels Airport. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Chennai Airport Taxi & Outstation Cabs — Serving Tamil Nadu since {site.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
