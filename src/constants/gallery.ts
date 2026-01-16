/**
 * Datos de galerías de imágenes
 * Estructura para mostrar fotos en diferentes secciones
 */

export type GalleryImage = {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  category?: string
  priority?: boolean
  placeholder?: string // blur placeholder
}

export type GallerySection = {
  id: string
  name: string
  description?: string
  images: GalleryImage[]
}

/**
 * Galería de inicio - Muestra lo mejor del restaurante
 */
export const HERO_GALLERY: GalleryImage[] = [
  {
    id: 'hero-1',
    src: '/images/gallery/hero-1.jpg',
    alt: 'Pizza a leña artesanal Tutto a Leña',
    title: 'Nuestras pizzas',
    description: 'Pizzas cocidas en horno a leña tradicional',
    category: 'pizza',
    priority: true,
  },
  {
    id: 'hero-2',
    src: '/images/gallery/hero-2.jpg',
    alt: 'Interior elegante del restaurante Tutto a Leña',
    title: 'Ambiente acogedor',
    description: 'Espacio diseñado para disfrutar en compañía',
    category: 'interior',
    priority: true,
  },
  {
    id: 'hero-3',
    src: '/images/gallery/hero-3.jpg',
    alt: 'Pasta fresca casera Tutto a Leña',
    title: 'Pastas frescas',
    description: 'Pastas elaboradas diariamente',
    category: 'pasta',
    priority: true,
  },
]

/**
 * Galería de platos - Para menú y secciones
 */
export const MENU_GALLERY: GalleryImage[] = [
  {
    id: 'menu-1',
    src: '/images/menu/pizzas-1.jpg',
    alt: 'Pizza Margherita artesanal',
    title: 'Margherita',
    category: 'pizza',
  },
  {
    id: 'menu-2',
    src: '/images/menu/pizzas-2.jpg',
    alt: 'Pizza Quattro Formaggi',
    title: 'Quattro Formaggi',
    category: 'pizza',
  },
  {
    id: 'menu-3',
    src: '/images/menu/pizzas-3.jpg',
    alt: 'Pizza al Salame Piccante',
    title: 'Al Salame Piccante',
    category: 'pizza',
  },
  {
    id: 'menu-4',
    src: '/images/menu/pastas-1.jpg',
    alt: 'Pasta Carbonara fresca',
    title: 'Carbonara',
    category: 'pasta',
  },
  {
    id: 'menu-5',
    src: '/images/menu/pastas-2.jpg',
    alt: 'Ravioles de ricota caseros',
    title: 'Ravioles de Ricota',
    category: 'pasta',
  },
]

/**
 * Galería del local - Interior, exterior, terraza
 */
export const LOCATION_GALLERY: GalleryImage[] = [
  {
    id: 'location-1',
    src: '/images/location/interior-1.jpg',
    alt: 'Interior restaurante Tutto a Leña',
    title: 'Salón principal',
    category: 'interior',
    priority: true,
  },
  {
    id: 'location-2',
    src: '/images/location/interior-2.jpg',
    alt: 'Zona de comedor íntima',
    title: 'Zona cómoda',
    category: 'interior',
  },
  {
    id: 'location-3',
    src: '/images/location/terraza-1.jpg',
    alt: 'Terraza exterior con ambiente',
    title: 'Nuestra terraza',
    category: 'terraza',
  },
  {
    id: 'location-4',
    src: '/images/location/kitchen-1.jpg',
    alt: 'Cocina abierta con horno a leña',
    title: 'Horno a leña',
    category: 'kitchen',
  },
]

/**
 * Galería de eventos - Fotos de eventos pasados
 */
export const EVENTS_GALLERY: GalleryImage[] = [
  {
    id: 'event-1',
    src: '/images/events/wedding-1.jpg',
    alt: 'Boda en Tutto a Leña',
    title: 'Boda - Junio 2024',
    category: 'wedding',
  },
  {
    id: 'event-2',
    src: '/images/events/corporate-1.jpg',
    alt: 'Evento corporativo en el restaurante',
    title: 'Evento corporativo',
    category: 'corporate',
  },
  {
    id: 'event-3',
    src: '/images/events/birthday-1.jpg',
    alt: 'Celebración de cumpleaños',
    title: 'Cumpleaños',
    category: 'birthday',
  },
]

/**
 * Todas las galerías por sección
 */
export const GALLERIES: Record<string, GallerySection> = {
  hero: {
    id: 'hero',
    name: 'Galería Hero',
    images: HERO_GALLERY,
  },
  menu: {
    id: 'menu',
    name: 'Galería de Platos',
    images: MENU_GALLERY,
  },
  location: {
    id: 'location',
    name: 'Galería del Local',
    images: LOCATION_GALLERY,
  },
  events: {
    id: 'events',
    name: 'Galería de Eventos',
    images: EVENTS_GALLERY,
  },
}

/**
 * Funciones helper
 */
export const getGallery = (galleryId: string): GallerySection | undefined => {
  return GALLERIES[galleryId]
}

export const getGalleryImages = (galleryId: string): GalleryImage[] => {
  return GALLERIES[galleryId]?.images || []
}

export const getPriorityImages = (galleryId: string): GalleryImage[] => {
  return getGalleryImages(galleryId).filter(img => img.priority)
}

/**
 * Obtener imagen por categoría
 */
export const getImagesByCategory = (galleryId: string, category: string): GalleryImage[] => {
  return getGalleryImages(galleryId).filter(img => img.category === category)
}
