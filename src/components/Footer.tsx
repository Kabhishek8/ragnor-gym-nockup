import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/ragnor-logo.png';

const socials = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 py-10 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Ragnor Fitness Prime logo" className="h-14 w-14 rounded-3xl border border-white/10 object-cover bg-black" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">RAGNOR FITNESS PRIME</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Premium coaching, elite performance, and a cinematic gym experience designed to help members achieve their strongest version.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} aria-label={item.label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand-gold hover:text-brand-gold">
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 Ragnor Fitness Prime. All rights reserved.
      </div>
    </footer>
  );
}
