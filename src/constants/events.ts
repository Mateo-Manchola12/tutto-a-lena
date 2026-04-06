/**
 * Eventos del restaurante
 * Próximos eventos y celebraciones
 */

export type Event = {
  id: string
  title: string
  description: string
  date: Date
  startTime: string
  endTime?: string
  image?: string
  location?: string
  capacity?: number
  price?: number
  featured?: boolean
  tags?: Array<'promocion' | 'cena-especial' | 'musica-vivo' | 'wine-tasting' | 'chef-especial'>
  registrationLink?: string
  contactPerson?: string
  contactEmail?: string
  registrationDeadline?: Date
}

export const EVENTS: Event[] = [
  {
    id: 'event-1',
    title: 'Noche de Vinos Italianos',
    description:
      'Experiencia única degustando vinos italianos premium acompañados de nuestra mejor cocina. El Chef especialista en vinos nos guiará en este viaje por las regiones viñateras de Italia.',
    date: new Date('2026-02-14'),
    startTime: '19:30',
    endTime: '22:30',
    price: 850,
    capacity: 40,
    featured: true,
    tags: ['wine-tasting', 'cena-especial'],
    registrationLink: 'https://booking.tutto-a-lena.com/event-1',
    contactEmail: 'eventos@tutto-a-lena.com',
    registrationDeadline: new Date('2026-02-10'),
  },
  {
    id: 'event-2',
    title: 'Música en Vivo - Jazz Italiano',
    description:
      'Disfruta de una velada mágica con jazz en vivo mientras degusts nuestras especialidades italianas. Ambiente romántico y sofisticado para parejas y grupos.',
    date: new Date('2026-02-20'),
    startTime: '20:00',
    endTime: '23:30',
    capacity: 80,
    featured: true,
    tags: ['musica-vivo'],
    registrationLink: 'https://booking.tutto-a-lena.com/event-2',
  },
  {
    id: 'event-3',
    title: 'Happy Hour - Viernes 50% OFF',
    description:
      'Todos los viernes de 17:00 a 19:00: 50% de descuento en pizzas y bebidas seleccionadas.',
    date: new Date('2026-02-27'),
    startTime: '17:00',
    endTime: '19:00',
    featured: true,
    tags: ['promocion'],
  },
  {
    id: 'event-4',
    title: 'Cena especial - Menú Chef',
    description:
      'Deja que nuestro Chef sorprenda con un menú especial de 5 pasos. Una experiencia culinaria único diseñada para los más exigentes.',
    date: new Date('2026-03-07'),
    startTime: '19:30',
    price: 950,
    capacity: 30,
    tags: ['cena-especial', 'chef-especial'],
    registrationLink: 'https://booking.tutto-a-lena.com/event-4',
    registrationDeadline: new Date('2026-03-03'),
  },
  {
    id: 'event-5',
    title: 'Clase de Cocina - Cómo hacer pasta fresca',
    description:
      'Aprende directamente de nuestros chefs cómo preparar pasta fresca auténtica. Incluye clase práctica, menú 4 pasos y vino.',
    date: new Date('2026-03-15'),
    startTime: '15:00',
    endTime: '18:00',
    price: 450,
    capacity: 20,
    tags: ['chef-especial'],
    registrationLink: 'https://booking.tutto-a-lena.com/event-5',
    registrationDeadline: new Date('2026-03-10'),
  },
]

// ==================== HELPER FUNCTIONS ====================

/**
 * Obtener eventos próximos
 */
export const getUpcomingEvents = (days: number = 30): Event[] => {
  const now = new Date()
  const limitDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000)

  return EVENTS.filter(e => e.date >= now && e.date <= limitDate).sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  )
}