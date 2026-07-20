"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Revela contenido al entrar en viewport (una sola vez). Respeta reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Contenedor con hijos en stagger. Usa <Stagger.Item> para cada hijo. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Fondo ambiental: blobs con glow + grano + grid sutil. */
export function Ambience({ withGrid = false }: { withGrid?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden fx-grain">
      {withGrid && <div className="absolute inset-0 fx-grid-lines" />}
      <div
        className="fx-blob"
        style={{
          top: "-8%",
          left: "8%",
          width: "42vw",
          height: "42vw",
          maxWidth: 620,
          maxHeight: 620,
          background: "radial-gradient(circle, rgba(255,171,0,0.22), transparent 62%)",
        }}
      />
      <div
        className="fx-blob"
        style={{
          bottom: "-14%",
          right: "4%",
          width: "46vw",
          height: "46vw",
          maxWidth: 680,
          maxHeight: 680,
          background: "radial-gradient(circle, rgba(99,102,241,0.24), transparent 62%)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}

/** Botón primario con glow ámbar y micro-interacción. */
export function CtaButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFAB00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-[#FFAB00] text-[#1a1300] hover:bg-[#ffb61f] shadow-[0_10px_40px_-10px_rgba(255,171,0,0.6)]"
      : "border border-[var(--fx-border-strong)] bg-white/[0.02] text-[#f4f5f7] hover:bg-white/[0.06]";
  return (
    <motion.a
      href={href}
      className={`${base} ${styles} ${className}`}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
