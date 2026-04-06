type BusinessHour = {
    open: string
    close: string
}

const WEEK_DAY_ORDER = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
]

const normalizeDay = (day: string): string => {
    return day
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

const getDayOrder = (day: string): number => {
    const normalized = normalizeDay(day)
    const index = WEEK_DAY_ORDER.findIndex((weekDay) => normalized.startsWith(weekDay))
    return index === -1 ? Number.POSITIVE_INFINITY : index
}

export const sortBusinessHours = (hours: Record<string, BusinessHour> | undefined) => {
    return Object.entries(hours ?? {}).sort(([dayA], [dayB]) => {
        const orderA = getDayOrder(dayA)
        const orderB = getDayOrder(dayB)

        if (orderA !== orderB) {
            return orderA - orderB
        }

        return dayA.localeCompare(dayB, 'es')
    })
}
