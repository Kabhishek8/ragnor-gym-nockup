import { motion } from 'framer-motion';

const IMAGES = [
  'https://images.unsplash.com/photo-1554284126-aa88f22d8a5f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f2e8c1f1f1b6f6c1b8b9d1a7d6a9b2e',
  'https://images.unsplash.com/photo-1526403224748-0d5bd9a7b3f7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a0a6b9b3c2a4d3e5f6a7b8c9d0e1f2a',
  'https://images.unsplash.com/photo-1546484959-f5a5d4f78f06?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001d0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
  'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a',
  'https://images.unsplash.com/photo-1526403224744-0b5bd9a7b3f6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b'
];

export default function Gallery() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Gallery</p>
          <h2 className="mt-3 text-3xl font-bold text-white">A look inside Ragnor Fitness Prime</h2>
        </div>

        <motion.div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {IMAGES.map((src, i) => (
            <motion.div key={src} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl">
              <img src={src} alt={`Gym photo ${i + 1}`} className="w-full h-56 object-cover gallery-img" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
