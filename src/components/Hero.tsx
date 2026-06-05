import { motion } from 'framer-motion';

const HERO_BG = 'https://images.unsplash.com/photo-1546484959-f5a5d4f78f06?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e';
const ATHLETE = 'https://images.unsplash.com/photo-1520975911956-5e6a4f76f7e4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
      <div className="absolute inset-0 -z-5 bg-black/60" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="z-10 lg:col-span-6">
            <span className="mb-4 inline-flex rounded-full border border-brand-gold/20 bg-brand-gold/8 px-3 py-1 text-xs uppercase tracking-[0.32em] text-brand-gold">
              Premium Fitness Experience
            </span>
            <h1 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">Transform Your Body. Build Your Legacy.</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">Premium coaching, modern equipment, and proven systems in Nerul, Navi Mumbai that deliver measurable results and lasting confidence.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black">Claim Free Trial</a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">View Programs</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="hidden lg:col-span-6 lg:block">
            <div className="relative ml-auto max-w-lg">
              <div className="absolute -right-12 -bottom-6 z-20 w-[520px] overflow-hidden rounded-[1.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <img src={ATHLETE} alt="Athlete" className="w-full h-[620px] object-cover" />
              </div>
              <div className="absolute -right-20 -bottom-12 h-[620px] w-[520px] rounded-[1.5rem] border border-white/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
