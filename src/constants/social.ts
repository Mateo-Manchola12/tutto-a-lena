/**
 * Configuración de redes sociales
 * Utilizado en header, footer, sharing, links, etc.
 */

export type SocialNetwork = {
  id: string
  name: string
  url: string
  icon: string
  color: string
  username?: string
  followers?: number
}

export const SOCIAL_NETWORKS: Record<string, SocialNetwork> = {
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/tuttoleña',
    icon: 'facebook',
    color: '#1877F2',
    username: 'tuttoleña',
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/tuttoleña',
    icon: 'instagram',
    color: '#E4405F',
    username: '@tuttoleña',
  },
  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/5491100000000?text=Hola%20Tutto%20a%20Leña!%20Quisiera%20hacer%20una%20consulta',
    icon: 'whatsapp',
    color: '#25D366',
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://tiktok.com/@tuttoleña',
    icon: 'tiktok',
    color: '#000000',
    username: '@tuttoleña',
  },
  tripadvisor: {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    url: 'https://tripadvisor.com/restaurants/tuttoleña',
    icon: 'tripadvisor',
    color: '#003580',
  },
  google: {
    id: 'google',
    name: 'Google Maps',
    url: 'https://google.com/maps/place/Tutto+a+Leña',
    icon: 'map-pin',
    color: '#4285F4',
  },
}

/**
 * Array ordenado de redes sociales para mostrar en UI
 * Selecciona las que quieras mostrar
 */
export const ACTIVE_SOCIAL_NETWORKS = ['facebook', 'instagram', 'whatsapp', 'tiktok', 'google']

export const getSocialNetwork = (id: string): SocialNetwork | undefined => {
  return SOCIAL_NETWORKS[id]
}

export const getActiveSocialNetworks = (): SocialNetwork[] => {
  return ACTIVE_SOCIAL_NETWORKS.map(id => SOCIAL_NETWORKS[id]).filter(Boolean)
}

/**
 * URLs para compartir en redes sociales
 * @param url - URL de la página
 * @param title - Título de la página
 * @param description - Descripción
 */
export const getShareUrls = (url: string, title: string, description?: string) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || '')

  return {
    facebook: `https://facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDescription}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0D%0A${encodedUrl}`,
  }
}
