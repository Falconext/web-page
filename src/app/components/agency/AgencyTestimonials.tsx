"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FIcon } from "./icons";
import { TESTIMONIALS } from "./content";
import { SectionHeading } from "./AgencyServices";
import { staggerContainer, staggerItem } from "./primitives";

export default function AgencyTestimonials() {
  const reduce = useReducedMotion();
  return (
    <section id="testimonios" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="No lo decimos nosotros. Lo dicen los negocios que confiaron en Falconext."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="flex flex-col rounded-3xl border border-[var(--fx-border)] bg-[var(--fx-surface)] p-7 transition-colors hover:border-[var(--fx-border-strong)]"
            >
              <div className="mb-4 flex gap-0.5 text-[#FFAB00]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FIcon key={i} name="star" size={16} className="fill-[#FFAB00]" />
                ))}
              </div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-[#c8ccd3]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--fx-border)] pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#FFAB00] to-[#6366F1] text-sm font-bold text-[#0a0a0c]">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-[#f4f5f7]">{t.name}</div>
                  <div className="text-xs text-[#9ba1ac]">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
