import { motion } from 'framer-motion';

const stats = [
  { value: '1,200+', label: 'Members Trained' },
  { value: '18,400 kg', label: 'Weight Lost' },
  { value: '97%', label: 'Success Stories' }
];

const TRANSFORMATIONS = [
  {
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
    after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=efgh',
    lost: '12 KG',
    period: '90 Days',
    name: 'Amit'
  },
  {
    before: 'https://images.unsplash.com/photo-1520975665877-2f5d1f6f9c2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl',
    after: 'https://images.unsplash.com/photo-1517964603305-629d20f5f57b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=mnop',
    lost: '9 KG',
    period: '75 Days',
    name: 'Priya'
  }
];

export default function Transformations() {
  return (
    <section id="transformations" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Transformation Showcase</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              Real before & after stories from Nerul members.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              A cinematic presentation of real members, premium coaching, and measurable progress.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {TRANSFORMATIONS.map((t) => (
              <div key={t.name} className="section-card rounded-[2rem] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-xl">
                    <img src={t.before} alt={`${t.name} before`} className="w-full h-44 object-cover" />
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">Before</p>
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img src={t.after} alt={`${t.name} after`} className="w-full h-44 object-cover" />
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-200">After</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-white">Lost {t.lost}</p>
                    <p className="text-sm text-slate-400">In {t.period} — {t.name}</p>
                  </div>
                  <div className="rounded-full bg-brand-gold/10 px-3 py-2 text-sm text-brand-gold">Transformation</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="section-card rounded-[2rem] p-8 text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
