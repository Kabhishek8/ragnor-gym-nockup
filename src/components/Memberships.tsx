import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '₹3,499',
    description: 'Gym access and essential support — perfect for steady progress.',
    features: ['Gym Access', 'Intro fitness assessment', 'Locker access'],
    badge: 'Best start'
  },
  {
    name: 'Premium',
    price: '₹9,999',
    description: 'Most popular: gym access with diet guidance and tracking for steady transformation.',
    features: ['Unlimited Access', 'Diet Guidance', 'Personal Program', 'Monthly Body Scan'],
    badge: 'Most popular',
    highlight: true
  },
  {
    name: 'Elite',
    price: '₹22,999',
    description: 'Full VIP experience with dedicated personal training, recovery, and lifestyle support.',
    features: ['Personal Training', 'Custom Workout Plan', 'Nutrition Support', 'Recovery Therapy'],
    badge: 'Top-tier'
  }
];

export default function Memberships() {
  return (
    <section id="membership" className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Membership Plans</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">Choose the premium tier that fits your transformation.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Each plan is structured to convert high-intent visitors into loyal members and committed athletes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`rounded-[2rem] border p-8 shadow-soft transition ${
                plan.highlight ? 'border-brand-gold/30 bg-brand-gold/10' : 'border-white/10 bg-[#0d0d0d]'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{plan.name}</p>
                  <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>
                </div>
                <span className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-gold">
                  {plan.badge}
                </span>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300">{plan.description}</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919137454549" target="_blank" rel="noreferrer" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                plan.highlight ? 'bg-white text-black hover:bg-slate-100' : 'bg-brand-gold text-black hover:brightness-105'
              }`}>
                Join {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
