"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import AgencyNav from "./AgencyNav";
import AgencyHero from "./AgencyHero";
import AgencyServices from "./AgencyServices";
import AgencyPortfolio from "./AgencyPortfolio";
import AgencyProcess from "./AgencyProcess";
import AgencyTestimonials from "./AgencyTestimonials";
import AgencyCTA from "./AgencyCTA";
import AgencyFooter from "./AgencyFooter";

export default function AgencyLanding() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-[#f4f5f7] antialiased selection:bg-[#FFAB00]/30 selection:text-white">
      {/* Barra de progreso de scroll */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#FFAB00] to-[#6366F1]"
      />

      <AgencyNav />

      <main>
        <AgencyHero />
        <AgencyServices />
        <AgencyPortfolio />
        <AgencyProcess />
        <AgencyTestimonials />
        <AgencyCTA />
      </main>

      <AgencyFooter />
    </div>
  );
}
