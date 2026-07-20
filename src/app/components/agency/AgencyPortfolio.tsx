"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FIcon } from "./icons";
import { PROJECTS, type Project } from "./content";
import { SectionHeading } from "./AgencyServices";
import { staggerContainer, staggerItem } from "./primitives";

const ACCENT: Record<Project["accent"], string> = {
  amber: "#FFAB00",
  violet: "#6366F1",
  mixed: "#FFAB00",
};

export default function AgencyPortfolio() {
  return (
    <section id="proyectos" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Proyectos"
          title="Resultados que se ven y se miden"
          subtitle="Una muestra de lo que construimos para negocios reales. Diseño impecable, ingeniería sólida, impacto en el negocio."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const accent = ACCENT[project.accent];
  return (
    <motion.article
      variants={staggerItem}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--fx-border)] bg-[var(--fx-surface)] transition-colors hover:border-[var(--fx-border-strong)]"
    >
      {/* Preview */}
      <div className="relative h-56 overflow-hidden border-b border-[var(--fx-border)] bg-[#0c0c11] p-6 md:h-64">
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: `radial-gradient(80% 60% at 50% 0%, ${accent}22, transparent 70%)` }}
        />
        <div className="relative h-full">
          <ProjectMockup variant={project.variant} accent={accent} />
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider" style={{ color: accent }}>
            {project.category}
          </div>
          <h3 className="mt-1.5 text-xl font-bold text-[#f4f5f7]">{project.name}</h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[#9ba1ac]">
            <FIcon name="trending" size={16} style={{ color: accent }} />
            {project.result}
          </div>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--fx-border)] text-[#c8ccd3] transition-all duration-300 group-hover:border-transparent group-hover:bg-[#FFAB00] group-hover:text-[#1a1300]">
          <FIcon name="arrow-up-right" size={20} />
        </span>
      </div>
    </motion.article>
  );
}

function ProjectMockup({ variant, accent }: { variant: Project["variant"]; accent: string }) {
  if (variant === "mobile") {
    return (
      <div className="flex h-full items-center justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-full w-20 shrink-0 rounded-2xl border border-[var(--fx-border)] bg-[#14141b] p-2"
            style={{ transform: `translateY(${i === 1 ? -10 : 0}px)` }}
          >
            <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-white/15" />
            <div className="mb-2 h-10 rounded-lg" style={{ background: `linear-gradient(135deg, ${accent}55, transparent)` }} />
            <div className="space-y-1.5">
              <div className="h-2 rounded bg-white/10" />
              <div className="h-2 w-3/4 rounded bg-white/[0.07]" />
              <div className="h-2 w-1/2 rounded bg-white/[0.07]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "store") {
    return (
      <div className="grid h-full grid-cols-3 gap-2.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-[var(--fx-border)] bg-[#14141b]">
            <div className="h-1/2" style={{ background: `linear-gradient(135deg, ${accent}44, transparent)` }} />
            <div className="space-y-1 p-2">
              <div className="h-1.5 rounded bg-white/12" />
              <div className="h-1.5 w-2/3 rounded" style={{ background: `${accent}99` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "landing") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <div className="h-3 w-28 rounded-full" style={{ background: `linear-gradient(90deg, ${accent}, #6366F1)` }} />
        <div className="h-2 w-40 rounded-full bg-white/12" />
        <div className="h-2 w-32 rounded-full bg-white/[0.07]" />
        <div className="mt-2 h-7 w-24 rounded-full" style={{ background: accent }} />
        <div className="mt-1 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-10 w-14 rounded-lg border border-[var(--fx-border)] bg-white/[0.04]" />
          ))}
        </div>
      </div>
    );
  }

  // dashboard
  return (
    <div className="flex h-full gap-3">
      <div className="w-1/4 space-y-2 rounded-xl border border-[var(--fx-border)] bg-[#14141b] p-2.5">
        <div className="h-6 rounded-lg" style={{ background: `${accent}33` }} />
        <div className="h-2.5 rounded bg-white/10" />
        <div className="h-2.5 rounded bg-white/[0.07]" />
        <div className="h-2.5 rounded bg-white/[0.07]" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex gap-3">
          <div className="h-12 flex-1 rounded-lg border border-[var(--fx-border)] bg-white/[0.03]" />
          <div className="h-12 flex-1 rounded-lg" style={{ background: `linear-gradient(135deg, ${accent}44, transparent)` }} />
          <div className="h-12 flex-1 rounded-lg border border-[var(--fx-border)] bg-white/[0.03]" />
        </div>
        <div className="flex h-[calc(100%-3.75rem)] items-end gap-1.5 rounded-lg border border-[var(--fx-border)] bg-white/[0.02] p-3">
          {[40, 65, 50, 80, 55, 72, 90, 60, 78].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: accent, opacity: 0.4 + (h / 100) * 0.6 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
