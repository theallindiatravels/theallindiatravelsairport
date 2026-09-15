import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, site, waLink } from '@/data/site';

export default function Navbar({ currentPath, onNavigate }: { currentPath: string; onNavigate: (path: string) => void }) {
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md backdrop-blur-md transition-all duration-300"
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-20">
        <button onClick={() => go('/')} className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="The All India Travels Airport"
            className="h-10 w-10 rounded-xl object-cover shadow-lg shadow-primary-600/30 transition-transform group-hover:scale-105"
          />
          <div className="text-left">
            <span className="block font-display font-bold text-sm sm:text-base leading-tight text-gray-900">
              The All India Travels Airport
            </span>
            <span className="block text-xs leading-tight text-gray-500">
              Chennai Airport Taxi
            </span>
          </div>
        </button>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => go(link.path)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === link.path
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary-700"
          >
            <Phone className="w-4 h-4" />
            {site.phone}
          </a>
          <a
            href={waLink('Hi, The All India Travels Airport. I want to book a cab. Please share fare details.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden rounded-lg p-2 text-gray-900"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto py-4 flex flex-col gap-1">
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
              href={waLink('I want to book a cab. Please share fare details.')}
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
