/**
 * Menú completo del restaurante
 * Estructura centralizada para todas las secciones de menú
 */

import type { MenuItem } from '@/types/pageTypes'

// ==================== PIZZAS ====================
export const PIZZAS: MenuItem[] = [
  {
    id: 'pizza-1',
    name: 'Margherita',
    description: 'Tomate fresco, mozzarella, albahaca fresca y aceite de oliva',
    price: 450,
    category: 'pizza',
    ingredients: ['Tomate', 'Mozzarella', 'Albahaca', 'Aceite de oliva'],
    tags: ['vegetariano', 'popular'],
  },
  {
    id: 'pizza-2',
    name: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, queso azul y parmesano',
    price: 520,
    category: 'pizza',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Queso azul', 'Parmesano'],
    tags: ['vegetariano'],
  },
  {
    id: 'pizza-3',
    name: 'Salame Piccante',
    description: 'Mozzarella, salame picante, ají fresco y orégano',
    price: 480,
    category: 'pizza',
    ingredients: ['Salame', 'Mozzarella', 'Ají', 'Orégano'],
    tags: ['picante', 'popular'],
  },
  {
    id: 'pizza-4',
    name: 'Carnívora',
    description: 'Salame, jamón, panceta, chorizo y mozzarella',
    price: 550,
    category: 'pizza',
    ingredients: ['Salame', 'Jamón', 'Panceta', 'Chorizo', 'Mozzarella'],
    tags: ['popular'],
  },
  {
    id: 'pizza-5',
    name: 'Especial Tutto a Leña',
    description:
      'Nuestro secreto: mozzarella fresca, tomate, rúcula post-cocción, parmesano y jamón crudo',
    price: 580,
    category: 'pizza',
    ingredients: ['Mozzarella', 'Tomate', 'Rúcula', 'Parmesano', 'Jamón crudo'],
    tags: ['nuevo', 'popular', 'premium'],
  },
]

// ==================== PASTAS ====================
export const PASTAS: MenuItem[] = [
  {
    id: 'pasta-1',
    name: 'Carbonara',
    description: 'Pasta fresca con guanciale, huevo y queso pecorino',
    price: 480,
    category: 'pasta',
    ingredients: ['Pasta fresca', 'Guanciale', 'Huevo', 'Pecorino romano'],
    tags: ['popular'],
  },
  {
    id: 'pasta-2',
    name: 'Ravioles de Ricota',
    description: 'Ravioles rellenos de ricota y espinaca con salsa de manteca y salvia',
    price: 450,
    category: 'pasta',
    ingredients: ['Ricota', 'Espinaca', 'Manteca', 'Salvia'],
    tags: ['vegetariano', 'popular'],
  },
  {
    id: 'pasta-3',
    name: 'Bolognesa Casera',
    description: 'Pasta con nuestro ragú tradicional cocinado a fuego lento',
    price: 520,
    category: 'pasta',
    ingredients: ['Pasta', 'Carne molida', 'Tomate', 'Vino tinto'],
    tags: ['clasico', 'popular'],
  },
  {
    id: 'pasta-4',
    name: 'Lasaña Tradicional',
    description: 'Capas de pasta fresca, ragú, bechamel y queso parmesano',
    price: 480,
    category: 'pasta',
    ingredients: ['Pasta fresca', 'Ragú', 'Bechamel', 'Parmesano'],
    tags: [],
  },
]

// ==================== CARNES ====================
export const CARNES: MenuItem[] = [
  {
    id: 'carne-1',
    name: 'Bife de Chorizo',
    description: 'Corte argentino jugoso a la parrilla, acompañado con chimichurri casero',
    price: 650,
    category: 'carne',
    ingredients: ['Bife de chorizo', 'Chimichurri'],
    tags: ['popular', 'premium'],
  },
  {
    id: 'carne-2',
    name: 'Osso Buco',
    description: 'Muela de ternera estofada en vino tinto con verduras',
    price: 720,
    category: 'carne',
    ingredients: ['Ternera', 'Vino tinto', 'Verduras'],
    tags: ['especialidad', 'premium'],
  },
  {
    id: 'carne-3',
    name: 'Pechuga de Pollo Rellena',
    description: 'Pechuga rellena de jamón y queso a la manteca',
    price: 520,
    category: 'carne',
    ingredients: ['Pechuga de pollo', 'Jamón', 'Queso'],
    tags: [],
  },
]

// ==================== ENTRADAS ====================
export const ENTRADAS: MenuItem[] = [
  {
    id: 'entrada-1',
    name: 'Tabla de Quesos y Embutidos',
    description: 'Selección gourmet de quesos y embutidos italianos',
    price: 580,
    category: 'entrada',
    ingredients: ['Quesos italianos', 'Embutidos', 'Pan casero'],
    tags: ['para-compartir', 'popular'],
  },
  {
    id: 'entrada-2',
    name: 'Camarones al Ajillo',
    description: 'Camarones salteados con ajo, perejil y aceite de oliva',
    price: 520,
    category: 'entrada',
    ingredients: ['Camarones', 'Ajo', 'Perejil', 'Aceite de oliva'],
    tags: [],
  },
  {
    id: 'entrada-3',
    name: 'Bruschetta',
    description: 'Pan tostado con tomate fresco, albahaca y ajo',
    price: 280,
    category: 'entrada',
    ingredients: ['Pan', 'Tomate', 'Albahaca', 'Ajo'],
    tags: ['vegetariano', 'nuevo'],
  },
]

// ==================== POSTRES ====================
export const POSTRES: MenuItem[] = [
  {
    id: 'postre-1',
    name: 'Tiramisu',
    description: 'Postre clásico italiano con mascarpone, café y cacao',
    price: 220,
    category: 'postre',
    ingredients: ['Mascarpone', 'Café', 'Cacao', 'Vainilla'],
    tags: ['clasico', 'popular'],
  },
  {
    id: 'postre-2',
    name: 'Panna Cotta',
    description: 'Crema italiana suave con frutas del bosque',
    price: 240,
    category: 'postre',
    ingredients: ['Crema', 'Frutas del bosque'],
    tags: [],
  },
  {
    id: 'postre-3',
    name: 'Panettone',
    description: 'Pan dulce italiano con frutos secos (disponible en invierno)',
    price: 200,
    category: 'postre',
    ingredients: ['Harinas', 'Frutos secos', 'Frutas confitadas'],
    tags: ['estacional'],
  },
]

// ==================== BEBIDAS ====================
export const BEBIDAS: MenuItem[] = [
  {
    id: 'bebida-1',
    name: 'Vino Tinto - Malbec',
    description: 'Vino tinto argentino de excelente cuerpo',
    price: 300,
    category: 'bebida',
    ingredients: [],
    tags: [],
  },
  {
    id: 'bebida-2',
    name: 'Vino Blanco - Sauvignon Blanc',
    description: 'Vino blanco fresco y aromático',
    price: 280,
    category: 'bebida',
    ingredients: [],
    tags: [],
  },
  {
    id: 'bebida-3',
    name: 'Cerveza Artesanal',
    description: 'Selección de cervezas artesanales locales',
    price: 120,
    category: 'bebida',
    ingredients: [],
    tags: [],
  },
  {
    id: 'bebida-4',
    name: 'Agua Mineral',
    description: 'Agua mineral sin gas o con gas',
    price: 40,
    category: 'bebida',
    ingredients: [],
    tags: [],
  },
]

// ==================== MENÚ COMPLETO ====================
export const COMPLETE_MENU = {
  pizzas: PIZZAS,
  pastas: PASTAS,
  carnes: CARNES,
  entradas: ENTRADAS,
  postres: POSTRES,
  bebidas: BEBIDAS,
}

// ==================== HELPER FUNCTIONS ====================

/**
 * Obtener todos los items del menú
 */
export const getAllMenuItems = (): MenuItem[] => {
  return [...PIZZAS, ...PASTAS, ...CARNES, ...ENTRADAS, ...POSTRES, ...BEBIDAS]
}

/**
 * Obtener items por categoría
 */
export const getMenuItemsByCategory = (
  category: 'pizza' | 'pasta' | 'carne' | 'entrada' | 'postre' | 'bebida',
): MenuItem[] => {
  return getAllMenuItems().filter(item => item.category === category)
}

/**
 * Obtener items populares
 */
export const getPopularItems = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.tags?.includes('popular'))
}

/**
 * Obtener items nuevos
 */
export const getNewItems = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.tags?.includes('nuevo'))
}

/**
 * Obtener items vegetarianos
 */
export const getVegetarianItems = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.tags?.includes('vegetariano'))
}

/**
 * Obtener items veganos
 */
export const getVeganItems = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.tags?.includes('vegano'))
}

/**
 * Obtener items sin gluten
 */
export const getGlutenFreeItems = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.tags?.includes('sin-gluten'))
}

/**
 * Obtener items picantes
 */
export const getSpicyItems = (): MenuItem[] => {
  return getAllMenuItems().filter(item => item.tags?.includes('picante'))
}

/**
 * Buscar item por nombre o descripción
 */
export const searchMenuItem = (query: string): MenuItem[] => {
  const lowerQuery = query.toLowerCase()
  return getAllMenuItems().filter(
    item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery),
  )
}

/**
 * Obtener rango de precios
 */
export const getPriceRange = () => {
  const items = getAllMenuItems().filter(item => item.price)
  const prices = items.map(item => item.price || 0)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}
