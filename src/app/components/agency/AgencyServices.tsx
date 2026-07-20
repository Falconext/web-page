"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FIcon } from "./icons";
import { SERVICES, type Service } from "./content";
import { Reveal, staggerContainer, staggerItem } from "./primitives";

export default function AgencyServices() {
  return (
    <section id="servicios" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Servicios"
          title="Cualquier tipo de software, un solo equipo"
          subtitle="Desde una landing que convierte hasta una plataforma completa a medida. Lo diseñamos, lo construimos y lo mantenemos."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      variants={staggerItem}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--fx-border)] bg-[var(--fx-surface)] p-6 md:p-7 ${service.span} ${
        service.featured ? "fx-ring-gradient" : "hover:border-[var(--fx-border-strong)]"
      }`}
    >
      {/* glow al hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FFAB00]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.04] text-[#FFAB00] ring-1 ring-inset ring-white/[0.06]">
        <FIcon name={service.icon} size={24} />
      </span>

      <h3 className="text-lg font-bold text-[#f4f5f7] md:text-xl">{service.title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-[#9ba1ac]">{service.desc}</p>

      {service.bullets && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="rounded-full border border-[var(--fx-border)] bg-white/[0.02] px-3 py-1 text-xs text-[#c8ccd3]"
            >
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c8ccd3] transition-colors group-hover:text-[#FFAB00]">
          Saber más
          <FIcon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.article>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  center = true,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--fx-border)] bg-white/[0.03] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFAB00]">
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance text-3xl font-black tracking-tight text-[#f4f5f7] md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[#9ba1ac] md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
