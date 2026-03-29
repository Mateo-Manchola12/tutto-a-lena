import type { Page } from '@/types/pageTypes'
import { DOMAIN_NAME } from '@constants/static_paths'

const RAW_SITE_MAP: Page[] = [
  {
    name: 'Inicio',
    slug: '',
    description:
      'Descubre Tutto a Leña: pizzas a leña artesanales y auténtica cocina italiana en Buenos Aires',
    priority: 1.0,
  },
  {
    name: 'Carta',
    slug: 'carta',
    description: 'Nuestro menú: pizzas a leña, pastas frescas, carnes y especialidades italianas',
    priority: 0.9,
  },
  {
    name: 'Dónde estamos',
    slug: 'donde-estamos',
    description: 'Ubicación, horarios y cómo llegar a Tutto a Leña en Buenos Aires',
    priority: 0.8,
  },
  {
    name: 'Catering',
    slug: 'catering',
    description: 'Servicio de catering para eventos, bodas y corporativos',
    priority: 0.8,
  },
  {
    name: 'Eventos',
    slug: 'eventos',
    description: 'Eventos y celebraciones especiales en Tutto a Leña',
    priority: 0.7,
  },
  {
    name: 'Galería',
    slug: 'galeria',
    description:
      'Galería de fotos y videos de nuestras pizzas, empanadas, horno a leña y espacios',
    priority: 0.7,
  },
  {
    name: 'Contacto',
    slug: 'contacto',
    description: 'Ponte en contacto con nosotros por cualquier consulta',
    priority: 0.8,
  },
  {
    name: 'Blog',
    slug: 'blog',
    description: 'Blog con recetas, noticias y artículos sobre cocina italiana',
    priority: 0.6,
  },
  {
    name: 'Reservar',
    slug: 'reservar',
    description: 'Reserva tu mesa en línea en Tutto a Leña',
    priority: 0.9,
  },
  {
    name: 'Política de Privacidad',
    slug: 'politica-privacidad',
    description: 'Política de privacidad de Tutto a Leña',
    priority: 0.3,
  },
  {
    name: 'Términos y Condiciones',
    slug: 'terminos-condiciones',
    description: 'Términos y condiciones de uso',
    priority: 0.3,
  },
]

export const SITE_MAP: Page[] = RAW_SITE_MAP.map(page => ({
  ...page,
  path: `${DOMAIN_NAME}/${page.slug}`,
}))

export const getPageBySlug = (slug: string): Page => {
  const page = SITE_MAP.find(entry => entry.slug === slug)
  if (!page) {
    throw new Error(`Page not found in SITE_MAP for slug: ${slug}`)
  }
  return page
}

// Rutas principales para navbar
export const MAIN_ROUTES = RAW_SITE_MAP.filter(page =>
  ['', 'carta', 'donde-estamos', 'catering', 'eventos', 'contacto', 'blog'].includes(page.slug),
)

// Rutas de footer
export const FOOTER_ROUTES = RAW_SITE_MAP

// Rutas no indexadas (si aplica)
export const NO_INDEX_ROUTES = ['politica-privacidad', 'terminos-condiciones', '404']
