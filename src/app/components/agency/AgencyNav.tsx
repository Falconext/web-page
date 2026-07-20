"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FIcon } from "./icons";
import { FX, NAV_LINKS } from "./content";

export default function AgencyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = `https://wa.me/${FX.whatsapp}?text=${encodeURIComponent(
    "Hola Falconext, quiero cotizar un proyecto de software."
  )}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-5 py-3 transition-all duration-300 md:mt-3 md:rounded-full md:px-6 ${
          scrolled
            ? "border border-[var(--fx-border)] bg-[#0d0d10]/80 backdrop-blur-xl md:mx-auto"
            : "border border-transparent bg-transparent"
        }`}
        style={{ width: "min(100%, 72rem)" }}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#FFAB00] to-[#6366F1] text-[15px] font-black text-[#0a0a0c] shadow-[0_6px_20px_-6px_rgba(255,171,0,0.6)]">
            F
          </span>
          <span className="text-[17px] font-bold tracking-tight text-[#f4f5f7]">
            {FX.name}
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-[#9ba1ac] transition-colors hover:bg-white/[0.05] hover:text-[#f4f5f7]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FFAB00] px-5 py-2.5 text-sm font-semibold text-[#1a1300] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Cotizar proyecto
          </a>
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--fx-border)] text-[#f4f5f7] md:hidden"
        >
          <FIcon name={open ? "close" : "menu"} size={22} />
        </button>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-[var(--fx-border)] bg-[#0d0d10]/95 p-2 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] text-[#c8ccd3] transition-colors hover:bg-white/[0.05]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-xl bg-[#FFAB00] px-4 py-3 text-center text-[15px] font-semibold text-[#1a1300]"
            >
              Cotizar proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
