"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FIcon } from "./icons";
import { FX, HERO_STATS } from "./content";
import { CtaButton, staggerContainer, staggerItem } from "./primitives";
import ShaderBackground from "./ShaderBackground";

export default function AgencyHero() {
  const reduce = useReducedMotion();
  const wa = `https://wa.me/${FX.whatsapp}?text=${encodeURIComponent(
    "Hola Falconext, quiero cotizar un proyecto de software."
  )}`;

  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-20 pt-32 md:pt-44">
      {/* Fondo animado (shader aurora) */}
      <ShaderBackground className="z-0 opacity-90" />
      {/* Scrim: oscurece el centro (legibilidad del texto) y deja ver los trazos en los bordes */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_48%_at_50%_38%,rgba(10,10,12,0.62),transparent_72%)]" />
      {/* Fundidos superior e inferior para integrar con nav y siguiente sección */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-[#0a0a0c] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-56 bg-gradient-to-b from-transparent to-[#0a0a0c]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={staggerItem} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--fx-border)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[#c8ccd3]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFAB00] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFAB00]" />
              </span>
              Estudio de software · Perú
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#f4f5f7] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Construimos el <span className="fx-text-gradient">software</span> que
            <br className="hidden sm:block" /> hace crecer tu negocio
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#9ba1ac] md:text-lg"
          >
            Sistemas a medida, páginas web, e-commerce y apps. Diseño de nivel mundial
            e ingeniería que convierte ideas en productos que la gente ama usar.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CtaButton href={wa} className="w-full sm:w-auto">
              Cotiza tu proyecto
              <FIcon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-0.5" />
            </CtaButton>
            <CtaButton href="#proyectos" variant="ghost" className="w-full sm:w-auto">
              Ver proyectos
            </CtaButton>
          </motion.div>
        </motion.div>

        {/* Visual hero: cluster de tarjetas bento flotando */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <HeroMockup />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4"
        >
          {HERO_STATS.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="text-center">
              <div className="text-3xl font-black text-[#f4f5f7] md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-[#9ba1ac] md:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** Mockup de "producto" construido 100% con CSS — sin imágenes externas. */
function HeroMockup() {
  const reduce = useReducedMotion();
  const float = reduce
    ? {}
    : { animate: { y: [0, -10, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const } };

  return (
    <div className="relative">
      {/* Glow detrás */}
      <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[40px] bg-gradient-to-b from-[#FFAB00]/10 via-[#6366F1]/10 to-transparent blur-2xl" />

      {/* Ventana principal */}
      <div className="fx-ring-gradient overflow-hidden rounded-2xl border border-[var(--fx-border)] bg-[#0f0f14]/90 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
        {/* barra superior */}
        <div className="flex items-center gap-2 border-b border-[var(--fx-border)] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.04]" />
        </div>
        {/* cuerpo dashboard */}
        <div className="grid grid-cols-3 gap-3 p-4 md:gap-4 md:p-6">
          <div className="col-span-1 space-y-3">
            <div className="h-8 rounded-lg bg-white/[0.05]" />
            <div className="h-24 rounded-xl bg-gradient-to-br from-[#FFAB00]/25 to-[#FFAB00]/5" />
            <div className="h-4 w-3/4 rounded bg-white/[0.05]" />
            <div className="h-4 w-1/2 rounded bg-white/[0.04]" />
          </div>
          <div className="col-span-2 space-y-3">
            <div className="flex gap-3">
              <div className="h-16 flex-1 rounded-xl border border-[var(--fx-border)] bg-white/[0.03]" />
              <div className="h-16 flex-1 rounded-xl border border-[var(--fx-border)] bg-white/[0.03]" />
              <div className="h-16 flex-1 rounded-xl border border-[var(--fx-border)] bg-gradient-to-br from-[#6366F1]/25 to-transparent" />
            </div>
            {/* barras de "gráfico" */}
            <div className="flex h-28 items-end gap-2 rounded-xl border border-[var(--fx-border)] bg-white/[0.02] p-3">
              {[42, 68, 35, 84, 56, 72, 48, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#FFAB00] to-[#6366F1]"
                  style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.65 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta flotante superpuesta */}
      <motion.div
        {...float}
        className="absolute -bottom-6 -right-2 hidden w-56 rounded-2xl border border-[var(--fx-border)] bg-[#12121a]/90 p-4 shadow-2xl backdrop-blur-md sm:block md:-right-8"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#28c840]/15 text-[#28c840]">
            <FIcon name="check" size={22} />
          </span>
          <div>
            <div className="text-sm font-semibold text-[#f4f5f7]">Deploy exitoso</div>
            <div className="text-xs text-[#9ba1ac]">Producción · hace 2 min</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
