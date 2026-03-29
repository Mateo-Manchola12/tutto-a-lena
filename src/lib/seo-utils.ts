/**
 * Utilidades para SEO
 * Funciones helper para generar meta tags, structured data, etc.
 */

import { BUSINESS_INFO } from '@/constants/business'

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
  const hours = BUSINESS_INFO.hours as Record<string, { open: string; close: string }>
  const dayMapping = [
    { schemaDay: 'Monday', keys: ['monday', 'Monday', 'lunes', 'Lunes'] },
    { schemaDay: 'Tuesday', keys: ['tuesday', 'Tuesday', 'martes', 'Martes'] },
    { schemaDay: 'Wednesday', keys: ['wednesday', 'Wednesday', 'miercoles', 'miércoles', 'Miércoles'] },
    { schemaDay: 'Thursday', keys: ['thursday', 'Thursday', 'jueves', 'Jueves'] },
    { schemaDay: 'Friday', keys: ['friday', 'Friday', 'viernes', 'Viernes'] },
    { schemaDay: 'Saturday', keys: ['saturday', 'Saturday', 'sabado', 'sábado', 'Sábado'] },
    { schemaDay: 'Sunday', keys: ['sunday', 'Sunday', 'domingo', 'Domingo'] },
  ]

  return dayMapping
    .map(({ schemaDay, keys }) => {
      const dayHours = keys.map(key => hours[key]).find(Boolean)
      if (!dayHours) return null

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: schemaDay,
        opens: dayHours.open,
        closes: dayHours.close,
      }
    })
    .filter(Boolean)
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
