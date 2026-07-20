/**
 * Contenido de la landing de agencia de software · marca FALCONEXT.
 * Copy nuevo orientado a conversión — editable a voluntad.
 * (Autocontenido: no usa el BRAND de Krezka a propósito.)
 */
import type { IconName } from "./icons";

export const FX = {
  name: "Falconext",
  tagline: "Software que impulsa negocios",
  whatsapp: "51972258391",
  email: "hola@falconext.com",
  website: "https://falconext.com",
  phoneLabel: "+51 972 258 391",
  socials: {
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
} as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
] as const;

export const HERO_STATS = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes que repiten" },
  { value: "12", label: "Días al primer entregable" },
] as const;

/** Servicios — grid bento. `span` controla el ancho en desktop (de 6 columnas). */
export type Service = {
  icon: IconName;
  title: string;
  desc: string;
  span: string; // clases de columna para el bento
  featured?: boolean;
  bullets?: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "code",
    title: "Software a medida",
    desc: "Plataformas, ERPs y sistemas internos diseñados para tu operación exacta. Escalables, seguros y listos para crecer contigo.",
    span: "lg:col-span-4",
    featured: true,
    bullets: ["APIs & integraciones", "Paneles de administración", "Automatización de procesos"],
  },
  {
    icon: "globe",
    title: "Páginas & Landings",
    desc: "Sitios rápidos que convierten visitas en clientes.",
    span: "lg:col-span-2",
  },
  {
    icon: "cart",
    title: "E-commerce",
    desc: "Tiendas online con pagos, inventario y envíos integrados.",
    span: "lg:col-span-2",
  },
  {
    icon: "smartphone",
    title: "Apps móviles",
    desc: "Aplicaciones iOS y Android con una sola base de código.",
    span: "lg:col-span-2",
  },
  {
    icon: "sparkles",
    title: "Diseño de producto & IA",
    desc: "UX/UI de alto nivel e integraciones con IA que hacen tu producto memorable y eficiente.",
    span: "lg:col-span-2",
  },
];

/** Proyectos — mockups generados por CSS, sin imágenes externas. */
export type Project = {
  name: string;
  category: string;
  result: string;
  variant: "dashboard" | "store" | "mobile" | "landing";
  accent: "amber" | "violet" | "mixed";
};

export const PROJECTS: Project[] = [
  { name: "Nexo Retail", category: "ERP · Punto de venta", result: "+35% en velocidad de venta", variant: "dashboard", accent: "amber" },
  { name: "Botica Vida", category: "E-commerce", result: "x3 pedidos online en 2 meses", variant: "store", accent: "violet" },
  { name: "RutaGo", category: "App móvil · Logística", result: "8k descargas el primer mes", variant: "mobile", accent: "mixed" },
  { name: "Estudio Lumen", category: "Landing · Marca", result: "+52% de conversión", variant: "landing", accent: "amber" },
];

export type Step = {
  n: string;
  title: string;
  desc: string;
  icon: IconName;
};

export const PROCESS: Step[] = [
  { n: "01", title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y usuarios. Definimos alcance y métricas de éxito.", icon: "search" },
  { n: "02", title: "Diseño", desc: "Prototipos y UI de alta fidelidad. Validamos la experiencia antes de escribir código.", icon: "design" },
  { n: "03", title: "Desarrollo", desc: "Construimos en sprints con entregas visibles cada semana. Código limpio y probado.", icon: "code" },
  { n: "04", title: "Lanzamiento & Soporte", desc: "Desplegamos, medimos y optimizamos. Seguimos a tu lado después del go-live.", icon: "rocket" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Falconext entendió nuestro negocio mejor que nosotros. El sistema que construyeron nos ahorra horas cada día y el diseño se ve de otro nivel.",
    name: "Carla Mendoza",
    role: "Gerente General · Nexo Retail",
    initials: "CM",
  },
  {
    quote:
      "Pasamos de una idea a una tienda online funcionando en menos de un mes. Las ventas hablan por sí solas.",
    name: "Luis Farfán",
    role: "Fundador · Botica Vida",
    initials: "LF",
  },
  {
    quote:
      "Profesionales, rápidos y obsesionados con los detalles. Es raro encontrar un equipo que cumple lo que promete.",
    name: "Andrea Ríos",
    role: "CMO · Estudio Lumen",
    initials: "AR",
  },
];
