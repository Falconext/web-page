"use client";

import { FIcon } from "./icons";
import { FX } from "./content";
import { Reveal, CtaButton } from "./primitives";

export default function AgencyCTA() {
  const wa = `https://wa.me/${FX.whatsapp}?text=${encodeURIComponent(
    "Hola Falconext, quiero cotizar un proyecto de software."
  )}`;

  return (
    <section id="contacto" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="fx-ring-gradient relative overflow-hidden rounded-[32px] border border-[var(--fx-border)] bg-[#0f0f14] px-6 py-16 text-center md:px-16 md:py-20">
            {/* glow interno */}
            <div className="pointer-events-none absolute inset-0 -z-0">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFAB00]/15 blur-[80px]" />
              <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-[#6366F1]/15 blur-[80px]" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black tracking-tight text-[#f4f5f7] md:text-5xl">
                ¿Tienes una idea? <span className="fx-text-gradient">Hagámosla real.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-pretty text-base text-[#9ba1ac] md:text-lg">
                Cuéntanos qué necesitas y te enviamos una propuesta clara sin compromiso.
                Respondemos el mismo día.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaButton href={wa} className="w-full sm:w-auto">
                  <FIcon name="whatsapp" size={18} />
                  Escríbenos por WhatsApp
                </CtaButton>
                <CtaButton href={`mailto:${FX.email}`} variant="ghost" className="w-full sm:w-auto">
                  <FIcon name="mail" size={18} />
                  {FX.email}
                </CtaButton>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#9ba1ac]">
                <span className="inline-flex items-center gap-2">
                  <FIcon name="check" size={16} className="text-[#28c840]" />
                  Propuesta en 24h
                </span>
                <span className="inline-flex items-center gap-2">
                  <FIcon name="check" size={16} className="text-[#28c840]" />
                  Sin compromiso
                </span>
                <span className="inline-flex items-center gap-2">
                  <FIcon name="check" size={16} className="text-[#28c840]" />
                  Pagos por etapas
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
