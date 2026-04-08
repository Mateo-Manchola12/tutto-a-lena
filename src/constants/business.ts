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