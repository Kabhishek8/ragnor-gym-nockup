import { FormEvent, useState } from 'react';
import { Clock3, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="px-6 pb-24 pt-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.8fr]">
        <div className="section-card rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">Get in touch and book your free trial.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Connect by phone or WhatsApp, visit our premium facility, or send a booking request directly from the form.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5">
              <Phone className="h-6 w-6 text-brand-gold" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone / WhatsApp</p>
                <a href="https://wa.me/919137454549" target="_blank" rel="noreferrer" className="text-base font-semibold text-white">+91 91374 54549</a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5">
              <MessageCircle className="h-6 w-6 text-brand-gold" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">WhatsApp</p>
                <a href="https://wa.me/919137454549" target="_blank" rel="noreferrer" className="text-base font-semibold text-white">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl bg-white/5 p-5">
              <MapPin className="h-6 w-6 text-brand-gold" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Address</p>
                <p className="text-base font-semibold text-white">RAGNOR FITNESS PRIME
                <br />First Floor, Amrita Sadan,
                <br />Station West, Nerul East, Sector 22,
                <br />Nerul, Navi Mumbai, Maharashtra 400706</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5">
              <Clock3 className="h-6 w-6 text-brand-gold" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Gym Timings</p>
                <p className="text-base font-semibold text-white">Mon–Sun • 5:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              title="Ragnor Fitness Prime location map"
              src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>

        <div className="section-card rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Ready for your first session?</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Book Free Trial Session</h3>
            </div>
            <div className="rounded-3xl bg-brand-gold/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Zero charge
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Full name</span>
              <input type="text" required className="mt-3 w-full rounded-3xl border border-white/10 bg-[#111111] px-4 py-4 text-white outline-none transition focus:border-brand-gold" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email</span>
              <input type="email" required className="mt-3 w-full rounded-3xl border border-white/10 bg-[#111111] px-4 py-4 text-white outline-none transition focus:border-brand-gold" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Goal</span>
              <select required className="mt-3 w-full rounded-3xl border border-white/10 bg-[#111111] px-4 py-4 text-white outline-none transition focus:border-brand-gold">
                <option value="">Select a goal</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="personal_training">Personal Training</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Message</span>
              <textarea rows={4} className="mt-3 w-full rounded-3xl border border-white/10 bg-[#111111] px-4 py-4 text-white outline-none transition focus:border-brand-gold" placeholder="Tell us your training goals." />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-105">
              <Send className="h-4 w-4" />
              Send Request
            </button>
          </form>

          {submitted && (
            <div className="mt-6 rounded-3xl bg-brand-gold/10 p-5 text-sm text-slate-100">
              Thanks! Your request has been received. We will contact you within 24 hours.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
