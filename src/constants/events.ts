import { Firebase } from '@/lib/firebase'
import type { EventEntry, EventsDocument } from '@/types/pageTypes'

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
      EventsInfo.data = (await Firebase.getEventsInfo()) ?? { events: [] }
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