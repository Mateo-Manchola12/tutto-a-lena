/**
 * Menú completo del restaurante
 * Estructura centralizada para todas las secciones de menú
 */

import { Firebase } from '@/lib/firebase'
import type { Menu as MenuType } from '@/types/pageTypes'
export class Menu {
  static data: MenuType | null = null

  static async getInfo() {
    if (!Menu.data)
      Menu.data = await Firebase.getMenuInfo()

    return Menu.data
  }

  static async getTagsById(tagIds: string[]) {
    const menuInfo = await this.getInfo()

    return menuInfo.tags.filter((tag) => tagIds.includes(tag.id))
  }
}
