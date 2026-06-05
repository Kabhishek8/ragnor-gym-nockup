import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-black shadow-glow transition hover:scale-105 sm:bottom-8 sm:right-8"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
