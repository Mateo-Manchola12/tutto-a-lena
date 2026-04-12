import { Firebase } from '@/lib/firebase'
import type { EventEntry, EventsDocument } from '@/types/pageTypes'

const DATE_FORMATTER = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const parseEventDate = (value: string) => new Date(`${value}T00:00:00`)

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

export class EventsInfo {
  static data: EventsDocument | null = null

  static async getInfo() {
    if (!EventsInfo.data) {
      EventsInfo.data = (await Firebase.getEventsInfo()) ?? { events: [] }
    }

    return EventsInfo.data
  }
}

export const sortEventsByDate = (events: EventEntry[]) => {
  return [...events].sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())
}

export const getUpcomingEvents = async (days: number = 30): Promise<EventEntry[]> => {
  const today = startOfDay(new Date())
  const limitDate = new Date(today)
  limitDate.setDate(limitDate.getDate() + days)
  const { events } = await EventsInfo.getInfo()

  return sortEventsByDate(events).filter((event) => {
    const eventDate = parseEventDate(event.date)
    return eventDate >= today && eventDate <= limitDate
  })
}

export const parseEventTime = (dateStr: string, timeStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  const [hours, minutes] = timeStr.split(':').map(Number)
  return new Date(year, month - 1, day, hours, minutes)
}

export const getCurrentEvent = async (): Promise<EventEntry | null> => {
  const today = startOfDay(new Date())
  const { events } = await EventsInfo.getInfo()

  for (const event of sortEventsByDate(events)) {
    const eventDate = parseEventDate(event.date)
    if (eventDate.getTime() === today.getTime()) {
      return event
    }
  }

  return null
}

export const formatEventDate = (value: string) => DATE_FORMATTER.format(parseEventDate(value))

export const hasValidatedLocation = (event: EventEntry) => {
  return Boolean(event.locationPlaceId && event.locationCoordinates && event.locationGoogleMapsUrl)
}

export const getEventMapEmbedUrl = (event: EventEntry) => {
  const coordinates = event.locationCoordinates

  if (!coordinates) {
    return null
  }

  return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15&output=embed`
}