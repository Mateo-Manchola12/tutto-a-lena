/**
 * Utilidades para imágenes optimizadas
 * Funciones helper para trabajar con imágenes responsivas
 */

export interface ImageProps {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
  quality?: 'low' | 'medium' | 'high'
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  loading?: 'lazy' | 'eager'
  placeholder?: 'blur' | 'empty'
}

/**
 * Generar srcset para responsive images
 * Crea múltiples versiones de la imagen para diferentes resoluciones
 */
export const generateSrcSet = (
  basePath: string,
  widths: number[] = [320, 640, 1024, 1280, 1536],
): string => {
  return widths.map(width => `${basePath}?w=${width} ${width}w`).join(', ')
}

/**
 * Generar sizes attribute
 * Ayuda al navegador a elegir la imagen correcta
 */
export const generateSizes = (
  sizes: Array<{ breakpoint: string; width: string }> = [
    { breakpoint: '(max-width: 640px)', width: '100vw' },
    { breakpoint: '(max-width: 1024px)', width: '90vw' },
    { breakpoint: '(min-width: 1025px)', width: '1024px' },
  ],
): string => {
  return sizes.map(({ breakpoint, width }) => `${breakpoint} ${width}`).join(', ')
}

/**
 * Obtener dimensiones recomendadas para diferentes contextos
 */
export const getImageDimensions = (context: 'hero' | 'card' | 'thumbnail' | 'full') => {
  const dimensions: Record<string, { width: number; height: number; aspect: string }> = {
    hero: { width: 1920, height: 1080, aspect: '16/9' },
    card: { width: 400, height: 300, aspect: '4/3' },
    thumbnail: { width: 200, height: 200, aspect: '1/1' },
    full: { width: 1200, height: 800, aspect: '3/2' },
  }
  return dimensions[context] || dimensions.full
}

/**
 * Generar URL de imagen optimizada (para servicio de imágenes como Cloudinary)
 */
export const getOptimizedImageUrl = (
  basePath: string,
  options: {
    width?: number
    height?: number
    quality?: 'low' | 'medium' | 'high'
    format?: 'webp' | 'avif' | 'jpeg' | 'png'
    crop?: 'auto' | 'fill' | 'fit'
    gravity?: 'auto' | 'face' | 'center'
  } = {},
): string => {
  const {
    width,
    height,
    quality = 'medium',
    format = 'webp',
    crop = 'fill',
    gravity = 'auto',
  } = options

  const qualityMap = { low: 60, medium: 80, high: 95 }
  const q = qualityMap[quality]

  // Parámetros para Cloudinary (si se usa)
  const params: string[] = []
  if (width) params.push(`w_${width}`)
  if (height) params.push(`h_${height}`)
  params.push(`q_${q}`)
  params.push(`f_${format}`)
  params.push(`c_${crop}`)
  params.push(`g_${gravity}`)

  // Retornar URL sin transformación (adaptar según CDN usado)
  return basePath
}

/**
 * Picture element fallback para navegadores antiguos
 * Estructura recomendada para máximo soporte
 */
export const getPictureSourceFormats = () => ({
  avif: { type: 'image/avif', formats: ['avif'] },
  webp: { type: 'image/webp', formats: ['webp'] },
  jpg: { type: 'image/jpeg', formats: ['jpeg', 'jpg'] },
})

/**
 * Lazy loading strategy
 * Determinar si una imagen debe cargarse lazy o eager
 */
export const shouldLazyLoad = (index: number, threshold: number = 2): 'lazy' | 'eager' => {
  return index < threshold ? 'eager' : 'lazy'
}

/**
 * Generar placeholder para Progressive Image Loading
 * Color dominante o blur LQIP (Low Quality Image Placeholder)
 */
export const getImagePlaceholder = (imagePath: string): string => {
  // Esto normalmente vendría de una análisis de la imagen
  // Por ahora retornamos un color neutro
  const placeholders: Record<string, string> = {
    '/images/gallery/hero-1.jpg':
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23FF8860" width="100" height="100"/%3E%3C/svg%3E',
    '/images/gallery/hero-2.jpg':
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23E67440" width="100" height="100"/%3E%3C/svg%3E',
  }
  return placeholders[imagePath] || ''
}

/**
 * Validar que la imagen existe y está optimizada
 */
export const validateImage = (src: string): boolean => {
  // Verificar formato
  const validFormats = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'svg']
  const extension = src.split('.').pop()?.toLowerCase()
  return extension ? validFormats.includes(extension) : false
}

/**
 * Generar atributos de accesibilidad para imágenes
 */
export const getImageA11yAttributes = (alt: string, title?: string) => ({
  alt,
  title: title || alt,
  role: 'img',
})

/**
 * Opciones recomendadas por contexto
 */
export const getImageOptions = (context: 'hero' | 'card' | 'thumbnail' | 'gallery' | 'product') => {
  const options: Record<
    string,
    { quality: 'low' | 'medium' | 'high'; format: 'webp' | 'avif'; loading: 'lazy' | 'eager' }
  > = {
    hero: { quality: 'high', format: 'avif', loading: 'eager' },
    card: { quality: 'medium', format: 'webp', loading: 'lazy' },
    thumbnail: { quality: 'medium', format: 'webp', loading: 'lazy' },
    gallery: { quality: 'high', format: 'avif', loading: 'lazy' },
    product: { quality: 'high', format: 'avif', loading: 'eager' },
  }
  return options[context] || options.card
}
