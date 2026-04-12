import { Firebase } from '@/lib/firebase'
import type { Gallery as GalleryType, GalleryImage } from '@/types/pageTypes'

/**
 * Lookup de clases Tailwind para span de galería.
 * Todas las clases están hardcodeadas aquí para que el scanner
 * de Tailwind las incluya siempre (evita purge en producción).
 */
export const GALLERY_SPAN_CLASSES = {
  col: {
    default: { 1: 'col-span-1', 2: 'col-span-2' } as Record<1 | 2, string>,
    sm: { 1: 'sm:col-span-1', 2: 'sm:col-span-2' } as Record<1 | 2, string>,
    md: { 1: 'md:col-span-1', 2: 'md:col-span-2' } as Record<1 | 2, string>,
  },
  row: {
    default: { 1: 'row-span-1', 2: 'row-span-2' } as Record<1 | 2, string>,
    sm: { 1: 'sm:row-span-1', 2: 'sm:row-span-2' } as Record<1 | 2, string>,
    md: { 1: 'md:row-span-1', 2: 'md:row-span-2' } as Record<1 | 2, string>,
  },
}

export class Gallery {
  static data: GalleryType | null = null

  static async getInfo(): Promise<GalleryType | null> {
    if (!Gallery.data) Gallery.data = await Firebase.getGalleryInfo()
    return Gallery.data
  }

  /**
   * Retorna hasta `count` fotos marcadas como destacadas,
   * ordenadas por `order` ascendente. Para la sección de galería
   * en la home.
   */
  static async getFeatured(count = 6): Promise<GalleryImage[]> {
    const gallery = await this.getInfo()
    if (!gallery) return []

    return gallery.images
      .filter((img) => img.featured)
      .sort((a, b) => a.order - b.order)
      .slice(0, count)
  }

  /**
   * Retorna todas las fotos ordenadas por `order`.
   * Para la página /galeria.
   */
  static async getAllSorted(): Promise<GalleryImage[]> {
    const gallery = await this.getInfo()
    if (!gallery) return []

    return gallery.images.slice().sort((a, b) => a.order - b.order)
  }

  /**
   * Construye el string de clases Tailwind para las columnas
   * y filas de una imagen, en los tres breakpoints.
   */
  static getSpanClass(img: GalleryImage): string {
    const col = [
      GALLERY_SPAN_CLASSES.col.default[img.colSpan.default],
      GALLERY_SPAN_CLASSES.col.sm[img.colSpan.sm],
      GALLERY_SPAN_CLASSES.col.md[img.colSpan.md],
    ].join(' ')

    const row = [
      GALLERY_SPAN_CLASSES.row.default[img.rowSpan.default],
      GALLERY_SPAN_CLASSES.row.sm[img.rowSpan.sm],
      GALLERY_SPAN_CLASSES.row.md[img.rowSpan.md],
    ].join(' ')

    return `${col} ${row}`
  }
}
