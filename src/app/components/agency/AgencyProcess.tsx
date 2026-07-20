"use client";

import { motion } from "framer-motion";
import { FIcon } from "./icons";
import { PROCESS } from "./content";
import { SectionHeading } from "./AgencyServices";
import { staggerContainer, staggerItem } from "./primitives";

export default function AgencyProcess() {
  return (
    <section id="proceso" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Proceso"
          title="Cómo trabajamos"
          subtitle="Un método claro y sin sorpresas. Sabes exactamente en qué etapa está tu proyecto en todo momento."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.n}
              variants={staggerItem}
              className="group relative flex flex-col rounded-3xl border border-[var(--fx-border)] bg-[var(--fx-surface)] p-6 transition-colors hover:border-[var(--fx-border-strong)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.04] text-[#6366F1] ring-1 ring-inset ring-white/[0.06] transition-colors group-hover:text-[#FFAB00]">
                  <FIcon name={step.icon} size={24} />
                </span>
                <span className="text-4xl font-black text-white/[0.08] transition-colors group-hover:text-white/[0.14]">
                  {step.n}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#f4f5f7]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9ba1ac]">{step.desc}</p>

              {i < PROCESS.length - 1 && (
                <span className="absolute -right-2 top-11 hidden text-[var(--fx-border-strong)] lg:block">
                  <FIcon name="chevron-right" size={22} />
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
