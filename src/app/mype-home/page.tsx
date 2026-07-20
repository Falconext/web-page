'use client';

// Landing anterior del producto MYPE (facturación SUNAT), preservada aquí.
// La home "/" ahora muestra la landing de agencia de software (Falconext).
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Pricing from '../ui/pricing';
import Hardware from '../components/landing/Hardware';
import StorePreview from '../components/landing/StorePreview';
import Advisors from '../ui/advisors';
import Testimonials from '../ui/testimonials';
import Questions from '../ui/questions';
import Contact from '../ui/contact';
import { ScrollProgressBar } from '../ui/background-effects';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function MypeHome() {
  const containerClassName = 'relative overflow-hidden min-h-screen text-gray-900 dark:text-[#ffffff] transition-colors duration-300';

  return (
    <>
      <ScrollProgressBar />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-[#0E0E0E] transition-colors duration-300">
        <div className="absolute inset-0 bg-transparent dark:bg-[#0E0E0E]/20 -z-10" />
      </div>

      <motion.div
        className={`${containerClassName}`}
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <Hero />
        <Features />
        <Hardware />
        <StorePreview />
        <Pricing showComparison={false} />
        <Advisors />
        <Testimonials />
        <Questions />
        <Contact />
      </motion.div>
    </>
  );
}
