"use client";

/**
 * Iconos de la landing de agencia mediante lucide-react (SVG inline, sin red).
 * Se expone <FIcon name="..."/> con un nombre estable para todo el módulo,
 * evitando el flash de Iconify (que carga glifos por API en runtime).
 */
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Code2,
  Globe,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Search,
  PencilRuler,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Star,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";

const MAP = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "chevron-right": ChevronRight,
  code: Code2,
  globe: Globe,
  cart: ShoppingBag,
  smartphone: Smartphone,
  sparkles: Sparkles,
  search: Search,
  design: PencilRuler,
  rocket: Rocket,
  trending: TrendingUp,
  check: CheckCircle2,
  star: Star,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
  whatsapp: MessageCircle,
  instagram: Instagram,
  linkedin: Linkedin,
  menu: Menu,
  close: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof MAP;

export function FIcon({
  name,
  size = 20,
  className,
  strokeWidth = 2,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  const Cmp = MAP[name];
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} style={style} />;
}
