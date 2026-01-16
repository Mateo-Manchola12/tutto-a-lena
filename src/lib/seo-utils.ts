/**
 * Utilidades para SEO
 * Funciones helper para generar meta tags, structured data, etc.
 */

import { BUSINESS_INFO } from '@/constants/business'

export interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article' | 'product' | 'video'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  author?: string
  publishedDate?: Date
  modifiedDate?: Date
  structuredData?: Record<string, any>
}

/**
 * Generar título SEO
 */
export const generateTitle = (pageTitle?: string): string => {
  if (!pageTitle) return 'Tutto a Leña | Arte italiano, corazón argentino'
  return `${pageTitle} | Tutto a Leña`
}

/**
 * Generar descripción META
 */
export const generateDescription = (description?: string): string => {
  if (!description) return BUSINESS_INFO.description
  return description.length > 160 ? description.substring(0, 157) + '...' : description
}

/**
 * Generar URL canónica
 */
export const generateCanonical = (path?: string): string => {
  const basePath = BUSINESS_INFO.website.url
  if (!path) return basePath
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`
}

/**
 * Generar OG Image
 */
export const generateOgImage = (image?: string): string => {
  if (!image) return `${BUSINESS_INFO.website.url}/og-image.jpg`
  if (image.startsWith('http')) return image
  return `${BUSINESS_INFO.website.url}${image.startsWith('/') ? image : '/' + image}`
}

/**
 * Generar structured data para Organization
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    logo: `${BUSINESS_INFO.website.url}/logo.png`,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website.url,
    sameAs: BUSINESS_INFO.socialProfiles,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: BUSINESS_INFO.phone.raw,
      email: BUSINESS_INFO.email.display,
    },
  }
}

/**
 * Generar structured data para Restaurant
 */
export const generateRestaurantSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website.url}/logo.png`,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website.url,
    telephone: BUSINESS_INFO.phone.raw,
    email: BUSINESS_INFO.email.display,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.location.street,
      addressLocality: BUSINESS_INFO.location.city,
      addressRegion: BUSINESS_INFO.location.state,
      postalCode: BUSINESS_INFO.location.zipCode,
      addressCountry: BUSINESS_INFO.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.location.coordinates.latitude,
      longitude: BUSINESS_INFO.location.coordinates.longitude,
    },
    sameAs: BUSINESS_INFO.socialProfiles,
    openingHoursSpecification: generateOpeningHours(),
  }
}

/**
 * Generar openingHoursSpecification schema
 */
export const generateOpeningHours = () => {
  const hours = BUSINESS_INFO.hours
  const daysOfWeek = [
    { day: 'Monday', hours: hours.monday },
    { day: 'Tuesday', hours: hours.tuesday },
    { day: 'Wednesday', hours: hours.wednesday },
    { day: 'Thursday', hours: hours.thursday },
    { day: 'Friday', hours: hours.friday },
    { day: 'Saturday', hours: hours.saturday },
    { day: 'Sunday', hours: hours.sunday },
  ]

  return daysOfWeek.map(({ day, hours }) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day,
    opens: hours.open,
    closes: hours.close,
  }))
}

/**
 * Generar LocalBusiness schema
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website.url}/logo.png`,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website.url,
    telephone: BUSINESS_INFO.phone.raw,
    email: BUSINESS_INFO.email.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.location.street,
      addressLocality: BUSINESS_INFO.location.city,
      addressRegion: BUSINESS_INFO.location.state,
      postalCode: BUSINESS_INFO.location.zipCode,
      addressCountry: BUSINESS_INFO.location.country,
    },
    sameAs: BUSINESS_INFO.socialProfiles,
    foundingDate: `${BUSINESS_INFO.foundedYear}`,
  }
}

/**
 * Generar BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generar FAQPage schema
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

/**
 * Generar Article schema (para blog)
 */
export const generateArticleSchema = (props: {
  title: string
  description: string
  image: string
  publishedDate: Date
  modifiedDate?: Date
  author?: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    image: generateOgImage(props.image),
    datePublished: props.publishedDate.toISOString(),
    dateModified: props.modifiedDate?.toISOString() || props.publishedDate.toISOString(),
    author: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
    },
  }
}

/**
 * Generar aggregate schema
 */
export const mergeSchemas = (schemas: Record<string, any>[]): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  }
}
