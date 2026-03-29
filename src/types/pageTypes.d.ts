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
