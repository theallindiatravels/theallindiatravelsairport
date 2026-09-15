import { MessageCircle } from 'lucide-react';
import { waLink } from '@/data/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink('Hi, I want to book a cab. Please share fare details.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-success-500 shadow-lg shadow-success-500/40 flex items-center justify-center hover:bg-success-600 hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-error-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
