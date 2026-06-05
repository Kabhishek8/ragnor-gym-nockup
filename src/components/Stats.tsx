import { motion } from 'framer-motion';

const stats = [
  { label: 'Members Trained', value: '1,200+' },
  { label: 'Total Weight Lost', value: '18,400 kg' },
  { label: 'Avg Transformation', value: '10–15 kg' },
  { label: 'Client Success Rate', value: '97%' }
];

export default function Stats() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#0b0b0b] border border-white/6 p-6 text-center">
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
