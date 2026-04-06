/**
 * Información del negocio - Central para toda la web
 *
 * SECCIONES:
 * - Identidad: name, tagline, description
 * - Contacto: phone, email, whatsapp (con helpers getWhatsappUrl())
 * - Ubicación: address, coordinates, googleMapsUrl
 * - Horarios: hours
 * - URLs: website
 * - Redes sociales: social (con helper getSocialUrl())
 * - CTAs: cta (rutas de páginas + mensajes WhatsApp predefinidos)
 * - Schema.org: structured data para SEO
 *
 * USO EN COMPONENTES:
 * import { BUSINESS_INFO, getWhatsappUrl, getSocialUrl } from '@constants/business'
 *
 * EJEMPLOS:
 * - Links simples: href={BUSINESS_INFO.cta.menu} → /carta
 * - WhatsApp dinámico: href={getWhatsappUrl('catering')} → https://wa.me/...?text=Hola...
 * - Redes sociales: href={getSocialUrl('instagram')} → https://instagram.com/tuttoleña
 *
 * Utilizados en: SEO, footer, contacto, schema.org, CTAs, etc.
 */

import { getBusinessInfo } from '@/lib/firebase'

// export const BUSINESS_INFO = {
//   // Identidad
//   name: 'Tutto a Leña',
//   description:
//     'Restaurante italiano auténtico con pizzas a leña artesanales, pastas frescas y una experiencia culinaria única que fusiona tradición italiana con el calor argentino.',

//   // Contacto
//   phone: {
//     display: '+54 (011) XXXX-XXXX',
//     href: 'tel:+541100000000',
//     raw: '+541100000000',
//   },
//   email: {
//     display: 'info@tutto-a-lena.com',
//     href: 'mailto:info@tutto-a-lena.com',
//   },
//   whatsapp: {
//     display: '+54 911 XXXX-XXXX',
//     href: 'https://wa.me/5491100000000?text=Hola%20Tutto%20a%20Leña!',
//     raw: '5491100000000',
//   },

//   // Horarios de apertura
//   hours: {
//     "Lunes": { open: '12:00', close: '23:00' },
//     "Martes": { open: '12:00', close: '23:00' },
//     "Miércoles": { open: '12:00', close: '23:00' },
//     "Jueves": { open: '12:00', close: '00:00' },
//     "Viernes": { open: '12:00', close: '01:00' },
//     "Sábado": { open: '12:00', close: '01:00' },
//     "Domingo": { open: '12:00', close: '23:00' },
//   },

//   // URLs
//   website: {
//     domain: 'tutto-a-lena.com',
//     url: 'https://tutto-a-lena.com',
//   },

//   // CTAs y Links de acciones
//   cta: {
//     // Links principales
//     menu: '/carta',
//     catering: '/catering',
//     events: '/eventos',
//     contact: '/contacto',
//     location: '/donde-estamos',
//     gallery: '/galeria',
//     home: '/',

//     // WhatsApp con mensajes predefinidos
//     whatsappMessages: {
//       default: 'Hola Tutto a Leña! Quisiera hacer una consulta',
//       catering:
//         'Hola, quisiera consultar sobre catering para mi evento. Me gustaría conocer opciones y presupuestos.',
//       events:
//         'Hola, quisiera conocer más sobre vuestros eventos y servicios especiales. Tengo un evento próximo.',
//       general: 'Hola, tengo una consulta',
//       booking: 'Hola, me gustaría consultar disponibilidad y hacer una reserva',
//       inquiry: 'Hola, quisiera más información sobre vuestros servicios',
//     },
//   },

//   // Precios típicos
//   priceRange: '$$', // $ = económico, $$ = medio, $$$ = costoso, $$$$ = muy costoso

//   // Año de fundación
//   foundedYear: 2020,
// }

export const BUSINESS_INFO = await getBusinessInfo()

export default BUSINESS_INFO

/**
 * Helper para construir URLs de WhatsApp con mensajes predefinidos
 * @param messageType - Tipo de mensaje (default, catering, events, general, booking, inquiry)
 * @param customMessage - Mensaje personalizado (opcional, sobrescribe el predefinido)
 */
export const getWhatsappUrl = (
  messageType: keyof typeof BUSINESS_INFO.cta.whatsappMessages = 'default',
  customMessage?: string,
): string => {
  const phoneNumber = BUSINESS_INFO.whatsapp.raw
  const message = customMessage || BUSINESS_INFO.cta.whatsappMessages[messageType]
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}