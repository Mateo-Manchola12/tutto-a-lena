import { Firebase } from '@/lib/firebase'
import type { EventEntry, EventsDocument } from '@/types/pageTypes'

const DEFAULT_EVENTS_DOCUMENT: EventsDocument = {
  events: [
    {
      id: 'event-1',
      title: 'Noche de Vinos Italianos',
      description:
        'Experiencia única degustando vinos italianos premium acompañados de nuestra mejor cocina. El Chef especialista en vinos nos guiará en este viaje por las regiones viñateras de Italia.',
      date: '2026-02-14',
      startTime: '19:30',
      endTime: '22:30',
      location: 'Evento itinerante por confirmar',
      featured: true,
    },
    {
      id: 'event-2',
      title: 'Música en Vivo - Jazz Italiano',
      description:
        'Disfruta de una velada mágica con jazz en vivo mientras degustas nuestras especialidades italianas. Ambiente romántico y sofisticado para parejas y grupos.',
      date: '2026-02-20',
      startTime: '20:00',
      endTime: '23:30',
      location: 'Restaurante anfitrión por confirmar',
      featured: true,
    },
    {
      id: 'event-3',
      title: 'Happy Hour - Viernes 50% OFF',
      description: 'Todos los viernes de 17:00 a 19:00: 50% de descuento en pizzas y bebidas seleccionadas.',
      date: '2026-02-27',
      startTime: '17:00',
      endTime: '19:00',
      location: 'Feria gastronómica por confirmar',
      featured: true,
    },
    {
      id: 'event-4',
      title: 'Cena especial - Menú Chef',
      description:
        'Deja que nuestro chef sorprenda con un menú especial de 5 pasos. Una experiencia culinaria única diseñada para los más exigentes.',
      date: '2026-03-07',
      startTime: '19:30',
      location: 'Cena privada en espacio asociado',
      featured: false,
    },
    {
      id: 'event-5',
      title: 'Clase de Cocina - Cómo hacer pasta fresca',
      description:
        'Aprende directamente de nuestros chefs cómo preparar pasta fresca auténtica. Incluye clase práctica, menú 4 pasos y vino.',
      date: '2026-03-15',
      startTime: '15:00',
      endTime: '18:00',
      location: 'Taller gastronómico colaborativo',
      featured: false,
    },
  ],
}

const DATE_FORMATTER = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const parseEventDate = (value: string) => new Date(`${value}T00:00:00`)

export class EventsInfo {
  static data: EventsDocument | null = null

  static async getInfo() {
    if (!EventsInfo.data) {
      EventsInfo.data = (await Firebase.getEventsInfo()) ?? DEFAULT_EVENTS_DOCUMENT
    }

    return EventsInfo.data
  }
}

export const sortEventsByDate = (events: EventEntry[]) => {
  return [...events].sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())
}

export const getUpcomingEvents = async (days: number = 30): Promise<EventEntry[]> => {
  const now = new Date()
  const limitDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000)
  const { events } = await EventsInfo.getInfo()

  return sortEventsByDate(events).filter((event) => {
    const eventDate = parseEventDate(event.date)
    return eventDate >= now && eventDate <= limitDate
  })
}

export const parseEventTime = (dateStr: string, timeStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  const [hours, minutes] = timeStr.split(':').map(Number)
  return new Date(year, month - 1, day, hours, minutes)
}

export const getCurrentEvent = async (): Promise<EventEntry | null> => {
  const now = new Date()
  const { events } = await EventsInfo.getInfo()

  for (const event of sortEventsByDate(events)) {
    const startTime = parseEventTime(event.date, event.startTime)
    const endTime = event.endTime ? parseEventTime(event.date, event.endTime) : startTime

    if (now >= startTime && now <= endTime) {
      return event
    }
  }

  return null
}

export const formatEventDate = (value: string) => DATE_FORMATTER.format(parseEventDate(value))