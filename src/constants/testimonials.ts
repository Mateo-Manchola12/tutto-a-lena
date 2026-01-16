/**
 * Testimonios de clientes
 * Reviews y reseñas para mostrar en la página
 */

export type Testimonial = {
  id: string
  name: string
  role?: string
  content: string
  rating: 1 | 2 | 3 | 4 | 5
  image?: string
  date?: Date
  verified?: boolean
  platform?: 'google' | 'tripadvisor' | 'instagram' | 'custom'
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'María González',
    role: 'Cliente habitual',
    content:
      'Excelente experiencia en Tutto a Leña. Las pizzas son simplemente deliciosas y la atención del personal es impecable. Definitivamente volveremos.',
    rating: 5,
    verified: true,
    platform: 'google',
    date: new Date('2025-12-15'),
  },
  {
    id: 'testimonial-2',
    name: 'Juan Martínez',
    role: 'Visitante',
    content:
      'El ambiente es muy cálido y acogedor. La comida está a la altura de los mejores restaurantes italianos. 100% recomendado.',
    rating: 5,
    verified: true,
    platform: 'tripadvisor',
    date: new Date('2025-11-20'),
  },
  {
    id: 'testimonial-3',
    name: 'Ana López',
    content:
      'Nos encantó la propuesta gastronómica. Las pastas frescas son de primera calidad y el horno a leña le da un toque especial a cada pizza.',
    rating: 5,
    verified: true,
    platform: 'google',
    date: new Date('2025-11-10'),
  },
  {
    id: 'testimonial-4',
    name: 'Carlos Díaz',
    role: 'Evento corporativo',
    content:
      'Organizamos un evento en Tutto a Leña y fue perfecto. El equipo fue muy profesional y la comida, simplemente exquisita.',
    rating: 5,
    verified: true,
    platform: 'custom',
    date: new Date('2025-10-05'),
  },
  {
    id: 'testimonial-5',
    name: 'Rosa Fernández',
    role: 'Cliente desde la apertura',
    content:
      'Desde que abrió este lugar se convirtió en nuestro restaurante favorito. Calidad, autenticidad y pasión en cada plato.',
    rating: 5,
    verified: false,
    platform: 'instagram',
    date: new Date('2025-09-30'),
  },
  {
    id: 'testimonial-6',
    name: 'Pablo Ruiz',
    content:
      'Muy buena la experiencia. El servicio atento, la comida deliciosa y el ambiente perfecto para una noche especial.',
    rating: 4,
    verified: true,
    platform: 'google',
    date: new Date('2025-09-15'),
  },
]

// ==================== HELPER FUNCTIONS ====================

/**
 * Obtener calificación promedio
 */
export const getAverageRating = (): number => {
  if (TESTIMONIALS.length === 0) return 0
  const sum = TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0)
  return Math.round((sum / TESTIMONIALS.length) * 10) / 10
}

/**
 * Obtener testimonios por rating
 */
export const getTestimonialsByRating = (rating: 1 | 2 | 3 | 4 | 5): Testimonial[] => {
  return TESTIMONIALS.filter(t => t.rating === rating)
}

/**
 * Obtener testimonios verificados
 */
export const getVerifiedTestimonials = (): Testimonial[] => {
  return TESTIMONIALS.filter(t => t.verified)
}

/**
 * Obtener testimonios recientes
 */
export const getRecentTestimonials = (days: number = 30): Testimonial[] => {
  const now = new Date()
  const limitDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
  return TESTIMONIALS.filter(t => t.date && t.date > limitDate).sort(
    (a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0),
  )
}

/**
 * Obtener testimonios por plataforma
 */
export const getTestimonialsByPlatform = (
  platform: 'google' | 'tripadvisor' | 'instagram' | 'custom',
): Testimonial[] => {
  return TESTIMONIALS.filter(t => t.platform === platform)
}

/**
 * Obtener testimonios al azar (para rotación)
 */
export const getRandomTestimonials = (limit: number = 3): Testimonial[] => {
  const shuffled = [...TESTIMONIALS].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(limit, TESTIMONIALS.length))
}

/**
 * Contar testimonios por rating
 */
export const countTestimonialsByRating = () => {
  return {
    5: TESTIMONIALS.filter(t => t.rating === 5).length,
    4: TESTIMONIALS.filter(t => t.rating === 4).length,
    3: TESTIMONIALS.filter(t => t.rating === 3).length,
    2: TESTIMONIALS.filter(t => t.rating === 2).length,
    1: TESTIMONIALS.filter(t => t.rating === 1).length,
  }
}

/**
 * Generar schema para AggregateRating
 */
export const generateAggregateRatingSchema = () => {
  const average = getAverageRating()

  return {
    '@type': 'AggregateRating',
    ratingValue: average,
    bestRating: 5,
    worstRating: 1,
    ratingCount: TESTIMONIALS.length,
    reviewCount: TESTIMONIALS.length,
  }
}
