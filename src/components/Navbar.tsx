import { useEffect, useState } from 'react';
import { Menu, X, Phone, Car } from 'lucide-react';
import { navLinks, site, waLink } from '@/data/site';

export default function Navbar({ currentPath, onNavigate }: { currentPath: string; onNavigate: (path: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path: string) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-20">
        <button onClick={() => go('/')} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform">
            <Car className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className={`block font-display font-bold text-sm sm:text-base leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              The All India Travels
            </span>
            <span className={`block text-xs leading-tight ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
              Chennai Airport Taxi
            </span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => go(link.path)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === link.path
                  ? scrolled
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-white/15 text-white'
                  : scrolled
                    ? 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                    : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-semibold ${scrolled ? 'text-gray-700 hover:text-primary-700' : 'text-white hover:text-white/80'}`}
          >
            <Phone className="w-4 h-4" />
            {site.phone}
          </a>
          <a
            href={waLink('Hi, I want to book a cab. Please share fare details.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                  currentPath === link.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={waLink('Hi, I want to book a cab. Please share fare details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2"
            >
              Book on WhatsApp
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-secondary mt-2">
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
