type SinglePage = {
  name: string
  slug: string
  clickable?: true
  description: string
  priority?: number
}

export type Page = SinglePage

// Metadatos SEO
export type SeoMetadata = {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  noindex?: boolean
  nofollow?: boolean
  structuredData?: Record<string, any>
}

// Structured Data tipos comunes
export type SchemaOrganization = {
  '@context': 'https://schema.org'
  '@type': 'Organization' | 'LocalBusiness' | 'Restaurant'
  name: string
  description?: string
  url?: string
  image?: string
  telephone?: string
  email?: string
  address?: SchemaAddress
  sameAs?: string[]
  foundingDate?: string
  contactPoint?: SchemaContactPoint
}

export type SchemaAddress = {
  '@type': 'PostalAddress'
  streetAddress: string
  addressLocality: string
  addressRegion?: string
  postalCode?: string
  addressCountry: string
}

export type SchemaContactPoint = {
  '@type': 'ContactPoint'
  contactType: string
  telephone: string
  email?: string
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price?: number
  category: 'pizza' | 'pasta' | 'carne' | 'entrada' | 'postre' | 'bebida'
  image?: string
  ingredients?: string[]
  tags?: ('vegetariano' | 'vegano' | 'picante' | 'sin-gluten' | 'nuevo' | 'popular' | 'especialidad' | 'premium' | 'mariscos' | 'argentino' | 'italiano' | 'clasico' | 'casero' | 'para-compartir' | 'estacional' | 'saludable' | 'cerveza' | 'artesanal' | 'vino' | 'cafe')[]
}


export interface BusinessInfo {
  name: string
  description: string
  phone: {
    display: string
    href: string
    raw: string
  }
  email: {
    display: string
    href: string
  }
  whatsapp: {
    display: string
    href: string
    raw: string
  }
  hours: {
    Lunes: {
      open: string
      close: string
    }
    Martes: {
      open: string
      close: string
    }
    Miércoles: {
      open: string
      close: string
    }
    Jueves: {
      open: string
      close: string
    }
    Viernes: {
      open: string
      close: string
    }
    Sábado: {
      open: string
      close: string
    }
    Domingo: {
      open: string
      close: string
    }
  }
  website: {
    domain: string
    url: string
    urlEs: string
  }
  cta: {
    menu: string
    catering: string
    events: string
    contact: string
    location: string
    gallery: string
    home: string
    whatsappMessages: {
      default: string
      catering: string
      events: string
      general: string
      booking: string
      inquiry: string
    }
  }
  priceRange: string
  foundedYear: number
}
