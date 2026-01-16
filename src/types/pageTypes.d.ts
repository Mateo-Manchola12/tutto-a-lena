type SinglePage = {
  name: string
  path?: string
  slug: string
  clickable?: true
  description: string
  priority?: number
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

type ParentPage = {
  name: string
  path?: string
  slug: string
  description: string
  clickable?: false
  subpages: Page[]
  priority?: number
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export type Page = SinglePage | ParentPage

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
  tags?: ('vegetariano' | 'vegano' | 'picante' | 'sin-gluten' | 'nuevo' | 'popular')[]
}
