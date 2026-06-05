import { motion } from 'framer-motion';
import { Award, Dumbbell, HeartHandshake } from 'lucide-react';

const coachStats = [
  { label: 'Years Coaching', value: '12+' },
  { label: 'Certified Pros', value: '20+' },
  { label: 'Client Retention', value: '94%' }
];

export default function Trainers() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Meet Your Coach</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">A professional trainer with championship-level experience.</h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="section-card grid gap-8 rounded-[2.5rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-soft md:grid-cols-[0.9fr_0.75fr] lg:p-12">
          <div className="rounded-[2rem] bg-white/5 p-6 md:p-8 flex flex-col gap-6 md:flex-row md:items-start">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd" alt="Coach Arjun Ragnor" className="h-32 w-32 rounded-2xl object-cover" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Head Coach</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Coach Arjun Ragnor</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Coach Arjun is a Navi Mumbai-based professional with 12+ years of coaching experience across competitive athletes and transformation clients. Certified in strength & conditioning, sports nutrition, and corrective movement, his premium approach blends data-driven programming and hands-on coaching.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Specialty</p>
                  <p className="mt-3 text-lg font-semibold text-white">Body recomposition & performance</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Approach</p>
                  <p className="mt-3 text-lg font-semibold text-white">Precision programming and long-term accountability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {coachStats.map((stat) => (
                <div key={stat.label} className="section-card rounded-[1.75rem] p-6 text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-brand-gold/10 p-7">
              <div className="flex items-center gap-4 text-brand-gold">
                <Award className="h-6 w-6" />
                <p className="font-semibold uppercase tracking-[0.24em]">Award-winning training</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Join a premium coaching system that delivers serious results, confidence, and the mindset of a champion.
              </p>
              <a href="https://wa.me/919137454549" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/15">
                Work With Coach
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
