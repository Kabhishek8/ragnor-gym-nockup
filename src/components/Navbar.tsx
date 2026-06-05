import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white sm:px-8">
        <a href="#home" className="flex items-center gap-3 font-semibold uppercase tracking-[0.28em] text-brand-gold">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-brand-gold shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>RAGNOR PRIME</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white transition hover:border-brand-gold hover:text-brand-gold">
            Contact
          </a>
          <a href="#membership" className="rounded-full bg-brand-gold px-5 py-2 font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110">
            Join Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-brand-gold md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 text-white md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-3xl px-4 py-3 transition hover:bg-white/5" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#contact" className="rounded-full bg-white/5 px-5 py-3 text-center transition hover:bg-white/10">
              Contact
            </a>
            <a href="#membership" className="rounded-full bg-brand-gold px-5 py-3 text-center font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110">
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
