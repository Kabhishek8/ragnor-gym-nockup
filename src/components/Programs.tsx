import { Dumbbell, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    icon: HeartHandshake,
    title: 'Weight Loss Program',
    description: 'Sculpt lean muscle, burn fat efficiently, and build lasting nutrition habits.',
    cta: 'Start Losing'
  },
  {
    icon: Dumbbell,
    title: 'Muscle Building Program',
    description: 'Advanced hypertrophy plans that maximize strength, density, and size.',
    cta: 'Build Muscle'
  },
  {
    icon: ShieldCheck,
    title: 'Strength Training',
    description: 'Powerful lifts, strategic programming, and progressive overload for peak performance.',
    cta: 'Train Strength'
  },
  {
    icon: Users,
    title: 'Personal Training',
    description: 'One-on-one coaching with tailored sessions, accountability, and premium support.',
    cta: 'Book Coach'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="px-6 pb-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Programs</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">The training path built for your next level.</h2>
          </div>
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            Choose from focused packages designed for targeted outcomes, premium support, and long-term transformation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="section-card rounded-[2rem] p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-gold/10 text-brand-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">Premium</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{program.description}</p>
                <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:brightness-105">
                  {program.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
