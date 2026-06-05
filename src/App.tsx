import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Stats from './components/Stats';
import MembershipComparison from './components/MembershipComparison';
import Memberships from './components/Memberships';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,197,24,0.1),_transparent_32%),radial-gradient(circle_at_20%_70%,_rgba(255,255,255,0.06),_transparent_22%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.45),_transparent_65%)]" />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Features />
        <Programs />
        <Transformations />
        <Gallery />
        <Stats />
        <Trainers />
        <Memberships />
        <MembershipComparison />
        <Testimonials />
        <Contact />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:hidden">
        <a
          href="#contact"
          className="w-full max-w-3xl rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(245,197,24,0.22)]"
          aria-label="Book your free trial session"
        >
          Book Free Trial Session
        </a>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;
