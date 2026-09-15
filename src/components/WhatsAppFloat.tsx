import { MessageCircle, Phone } from 'lucide-react';
import { site, waLink } from '@/data/site';

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href={`tel:${site.phoneRaw}`}
        className="fixed bottom-6 right-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg shadow-slate-900/30 transition-all duration-300 hover:scale-110 hover:bg-slate-900"
        aria-label="Call The All India Travels"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={waLink('Hi, I want to book a cab. Please share fare details.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-success-500 shadow-lg shadow-success-500/40 transition-all duration-300 hover:scale-110 hover:bg-success-600 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-error-500" />
      </a>
    </>
  );
}
