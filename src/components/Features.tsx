import { Award, Dumbbell, LayoutGrid, TrendingUp, Users, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Award, title: 'Certified Trainers', description: 'World-class coaches with top certifications and real coaching experience.' },
  { icon: Dumbbell, title: 'Modern Equipment', description: 'Premium strength machines, Olympic racks, and recovery tools.' },
  { icon: HeartHandshake, title: 'Fat Loss Programs', description: 'Structured nutrition and training plans to lose fat and keep it off.' },
  { icon: Dumbbell, title: 'Muscle Building Programs', description: 'Progressive hypertrophy plans to build size and strength safely.' },
  { icon: Users, title: 'Personal Training', description: 'One-on-one coaching with personalised programs and accountability.' },
  { icon: LayoutGrid, title: 'Nutrition Guidance', description: 'Evidence-based nutrition support tailored to your lifestyle.' }
];

export default function Features() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Why Choose Ragnor Fitness</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">Elite coaching, premium environment, undeniable results.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            A local Navi Mumbai gym delivering measurable transformations with a premium service experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                className="section-card rounded-[2rem] p-7"
              >
                <div className="inline-flex items-center justify-center rounded-3xl bg-brand-gold/10 p-4 text-brand-gold shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
