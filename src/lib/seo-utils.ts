/**
 * Utilidades para SEO
 * Funciones helper para generar meta tags, structured data, etc.
 */

import { BusinessInfo } from '@/constants/business'

const businessInfo = await BusinessInfo.getInfo()

/**
 * Generar OG Image
 */
export const generateOgImage = (image?: string): string => {
  if (!image) return `${businessInfo.website.url}/og-image.jpg`
  if (image.startsWith('http')) return image
  return `${businessInfo.website.url}${image.startsWith('/') ? image : '/' + image}`
}

/**
 * Generar structured data para Organization
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    logo: `${businessInfo.website.url}/logo.png`,
    description: businessInfo.description,
    url: businessInfo.website.url,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: businessInfo.phone.raw,
      email: businessInfo.email.display,
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
    name: businessInfo.name,
    image: `${businessInfo.website.url}/logo.png`,
    description: businessInfo.description,
    url: businessInfo.website.url,
    telephone: businessInfo.phone.raw,
    email: businessInfo.email.display,
    priceRange: businessInfo.priceRange,
    openingHoursSpecification: generateOpeningHours(),
  }
}

/**
 * Generar openingHoursSpecification schema
 */
export const generateOpeningHours = () => {
  const hours = businessInfo.hours as Record<string, { open: string; close: string }>
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
    name: businessInfo.name,
    image: `${businessInfo.website.url}/logo.png`,
    description: businessInfo.description,
    url: businessInfo.website.url,
    telephone: businessInfo.phone.raw,
    email: businessInfo.email.display,
    foundingDate: `${businessInfo.foundedYear}`,
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
      name: businessInfo.name,
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
