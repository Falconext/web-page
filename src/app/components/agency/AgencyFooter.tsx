"use client";

import { FIcon, type IconName } from "./icons";
import { FX, NAV_LINKS } from "./content";

export default function AgencyFooter() {
  const year = 2026; // evita hydration mismatch por new Date()
  return (
    <footer className="relative border-t border-[var(--fx-border)] px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Marca */}
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#FFAB00] to-[#6366F1] text-[15px] font-black text-[#0a0a0c]">
              F
            </span>
            <span className="text-[17px] font-bold tracking-tight text-[#f4f5f7]">{FX.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9ba1ac]">
            {FX.tagline}. Diseñamos y construimos software a medida, web, e-commerce y apps para negocios que quieren crecer.
          </p>
          <div className="mt-5 flex gap-2">
            {([
              { icon: "mail", href: `mailto:${FX.email}`, label: "Email" },
              { icon: "whatsapp", href: `https://wa.me/${FX.whatsapp}`, label: "WhatsApp" },
              { icon: "instagram", href: FX.socials.instagram, label: "Instagram" },
              { icon: "linkedin", href: FX.socials.linkedin, label: "LinkedIn" },
            ] as { icon: IconName; href: string; label: string }[]).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--fx-border)] text-[#c8ccd3] transition-colors hover:border-transparent hover:bg-white/[0.06] hover:text-[#FFAB00]"
              >
                <FIcon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-sm font-semibold text-[#f4f5f7]">Navegación</h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[#9ba1ac] transition-colors hover:text-[#f4f5f7]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-semibold text-[#f4f5f7]">Contacto</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#9ba1ac]">
            <li className="flex items-center gap-2">
              <FIcon name="mail" size={16} className="text-[#FFAB00]" />
              {FX.email}
            </li>
            <li className="flex items-center gap-2">
              <FIcon name="phone" size={16} className="text-[#FFAB00]" />
              {FX.phoneLabel}
            </li>
            <li className="flex items-center gap-2">
              <FIcon name="pin" size={16} className="text-[#FFAB00]" />
              Perú · Trabajamos remoto
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[var(--fx-border)] pt-6 text-xs text-[#7b8089] sm:flex-row">
        <span>© {year} {FX.name}. Todos los derechos reservados.</span>
        <div className="flex gap-5">
          <a href="/privacidad" className="transition-colors hover:text-[#c8ccd3]">Privacidad</a>
          <a href="#top" className="transition-colors hover:text-[#c8ccd3]">Volver arriba</a>
        </div>
      </div>
    </footer>
  );
}
