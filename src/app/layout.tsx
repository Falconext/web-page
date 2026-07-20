import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

/** Identidad de la web pública: Falconext (estudio de software). */
const FX_SITE = {
  name: "Falconext",
  url: "https://falconext.com",
  email: "hola@falconext.com",
  phone: "+51 932 332 556",
  logo: "/assets/fnlogo.png",
  og: "/assets/bannerfx.png",
  socials: {
    instagram: "https://instagram.com/falconext",
    linkedin: "https://www.linkedin.com/company/falconext",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const title = "Falconext | Desarrollo de software, páginas web, e-commerce y apps";
  const description =
    "Estudio de software en Perú. Creamos software a medida, páginas web, landings, e-commerce y aplicaciones móviles con diseño de nivel mundial e ingeniería que convierte.";

  return {
    metadataBase: new URL(FX_SITE.url),
    title: {
      default: title,
      template: `%s | ${FX_SITE.name}`,
    },
    description,
    keywords: [
      "desarrollo de software",
      "software a medida",
      "agencia de software",
      "estudio de software perú",
      "desarrollo web perú",
      "páginas web",
      "landing page",
      "ecommerce perú",
      "tienda online",
      "aplicaciones móviles",
      "app móvil perú",
      "desarrollo de apps",
      "diseño ux ui",
      "falconext",
    ],
    authors: [{ name: FX_SITE.name, url: FX_SITE.url }],
    creator: FX_SITE.name,
    publisher: FX_SITE.name,
    icons: {
      icon: [
        { url: FX_SITE.logo, sizes: "32x32", type: "image/png" },
        { url: FX_SITE.logo, sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: FX_SITE.logo, sizes: "180x180", type: "image/png" }],
      shortcut: [FX_SITE.logo],
    },
    manifest: "/manifest.json",
    openGraph: {
      title,
      description,
      url: `${FX_SITE.url}/`,
      siteName: FX_SITE.name,
      images: [
        {
          url: FX_SITE.og,
          width: 1200,
          height: 630,
          alt: `${FX_SITE.name} - Estudio de software en Perú`,
        },
      ],
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [FX_SITE.og],
      creator: `@${FX_SITE.name.toLowerCase()}`,
    },
    alternates: {
      canonical: FX_SITE.url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "technology",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO (JSON-LD) — Falconext como estudio de software.
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: FX_SITE.name,
    url: FX_SITE.url,
    logo: `${FX_SITE.url}${FX_SITE.logo}`,
    email: FX_SITE.email,
    description:
      "Estudio de software en Perú: software a medida, páginas web, e-commerce y aplicaciones móviles.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: FX_SITE.phone,
      contactType: "sales",
      areaServed: "PE",
      availableLanguage: "Spanish",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
    sameAs: [FX_SITE.socials.instagram, FX_SITE.socials.linkedin].filter(Boolean),
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: FX_SITE.name,
    url: FX_SITE.url,
    image: `${FX_SITE.url}${FX_SITE.logo}`,
    priceRange: "$$",
    areaServed: "PE",
    description:
      "Desarrollo de software a medida, páginas web, landings, e-commerce y apps móviles.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "50",
    },
  };

  return (
    <html lang="es" className="">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0c" />
        <link
          precedence="default"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          precedence="default"
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
        />
      </head>
      <body>
        <ClientLayout children={children} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17010708778"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17010708778');
            `,
          }}
        />
      </body>
    </html>
  );
}
