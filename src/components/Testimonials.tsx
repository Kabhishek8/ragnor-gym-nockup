import { MessageSquare, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Priya Shah',
    role: 'Member, Weight Loss Program',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
    quote: 'I lost 10kg and gained so much confidence. The coaching is personal and focused.'
  },
  {
    name: 'Rohan Mehta',
    role: 'Athlete, Strength Training',
    photo: 'https://images.unsplash.com/photo-1545996124-1c1d5b6a9d5b?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=efgh',
    quote: 'The environment and trainers are top-tier. I hit new PRs every month.'
  },
  {
    name: 'Simran Kaur',
    role: 'Client, Personal Training',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl',
    quote: 'Personal training that actually listens. The results speak for themselves.'
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Testimonials</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">Elite reviews from clients who leveled up.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="section-card rounded-[2rem] p-6"
            >
              <div className="flex items-center gap-4">
                <img src={review.photo} alt={review.name} className="h-12 w-12 rounded-xl object-cover" />
                <div>
                  <div className="flex items-center gap-2 text-brand-gold">
                    <MessageSquare className="h-4 w-4" />
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-brand-gold" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-100">“{review.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
