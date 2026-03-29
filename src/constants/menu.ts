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
    description: 'Tomate fresco, mozzarella di bufala, albahaca fresca y aceite de oliva Toscano',
    price: 480,
    category: 'pizza',
    ingredients: ['Tomate', 'Mozzarella', 'Albahaca', 'Aceite de oliva'],
    tags: ['vegetariano', 'popular', 'clasico'],
  },
  {
    id: 'pizza-2',
    name: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, queso azul y parmesano. Una sinfonía de sabores',
    price: 550,
    category: 'pizza',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Queso azul', 'Parmesano'],
    tags: ['vegetariano', 'premium'],
  },
  {
    id: 'pizza-3',
    name: 'Salame Piccante',
    description: 'Mozzarella, salame Di Parma, ají fresco y un toque de orégano',
    price: 510,
    category: 'pizza',
    ingredients: ['Salame', 'Mozzarella', 'Ají', 'Orégano'],
    tags: ['picante', 'popular'],
  },
  {
    id: 'pizza-4',
    name: 'La Carnívora',
    description: 'Para los amantes de la carne: salame, jamón, panceta, chorizo y mozzarella',
    price: 580,
    category: 'pizza',
    ingredients: ['Salame', 'Jamón', 'Panceta', 'Chorizo', 'Mozzarella'],
    tags: ['popular', 'premium'],
  },
  {
    id: 'pizza-5',
    name: 'Especial Tutto a Leña',
    description:
      'Nuestro secreto: mozzarella fresca, tomate, rúcula post-cocción, parmesano y jamón crudo premium',
    price: 620,
    category: 'pizza',
    ingredients: ['Mozzarella', 'Tomate', 'Rúcula', 'Parmesano', 'Jamón crudo'],
    tags: ['nuevo', 'popular', 'premium', 'especialidad'],
  },
  {
    id: 'pizza-6',
    name: 'Prosciutto e Rúcula',
    description: 'Mozzarella di bufala, jamón de Parma y rúcula fresca post-horneado',
    price: 560,
    category: 'pizza',
    ingredients: ['Mozzarella', 'Jamón de Parma', 'Rúcula'],
    tags: ['premium', 'popular'],
  },
  {
    id: 'pizza-7',
    name: 'Funghi Porcini',
    description: 'Hongos porcini frescos, mozzarella, trufa negra y queso pecorino',
    price: 580,
    category: 'pizza',
    ingredients: ['Hongos porcini', 'Mozzarella', 'Trufa', 'Pecorino'],
    tags: ['vegetariano', 'premium', 'especialidad'],
  },
  {
    id: 'pizza-8',
    name: 'Marinera',
    description: 'Camarones frescos, almejas, mejillones y un toque de ajo y perejil',
    price: 650,
    category: 'pizza',
    ingredients: ['Camarones', 'Almejas', 'Mejillones', 'Ajo', 'Perejil'],
    tags: ['premium', 'mariscos'],
  },
  {
    id: 'pizza-9',
    name: 'Caprese Gourmet',
    description: 'Tomate San Marzano, mozzarella di bufala, tomate cherry y albahaca fresca',
    price: 520,
    category: 'pizza',
    ingredients: ['Tomate', 'Mozzarella di bufala', 'Tomate cherry', 'Albahaca'],
    tags: ['vegetariano'],
  },
  {
    id: 'pizza-10',
    name: 'Barbecue BBQ',
    description: 'Carnes variadas con salsa BBQ, cebolla caramelizada y queso fundido',
    price: 590,
    category: 'pizza',
    ingredients: ['Carnes', 'Salsa BBQ', 'Cebolla', 'Queso'],
    tags: ['popular'],
  },
  {
    id: 'pizza-11',
    name: 'Vegetariana Premium',
    description: 'Espárragos, zeta de tomate, cebolla morada, pimientos y mozzarella',
    price: 500,
    category: 'pizza',
    ingredients: ['Espárragos', 'Tomate', 'Cebolla', 'Pimientos', 'Mozzarella'],
    tags: ['vegetariano', 'saludable'],
  },
  {
    id: 'pizza-12',
    name: 'La Blanca',
    description: 'Ricota casera, mozzarella, parmesano y un toque de nuez moscada',
    price: 520,
    category: 'pizza',
    ingredients: ['Ricota', 'Mozzarella', 'Parmesano', 'Nuez moscada'],
    tags: ['vegetariano', 'clasico'],
  },
]

// ==================== PASTAS ====================
export const PASTAS: MenuItem[] = [
  {
    id: 'pasta-1',
    name: 'Carbonara Romana',
    description: 'Pasta fresca con guanciale, huevo fresco y queso pecorino. La receta auténtica',
    price: 520,
    category: 'pasta',
    ingredients: ['Pasta fresca', 'Guanciale', 'Huevo', 'Pecorino romano'],
    tags: ['popular', 'clasico', 'premium'],
  },
  {
    id: 'pasta-2',
    name: 'Ravioles de Ricota',
    description: 'Ravioles caseros rellenos de ricota y espinaca con salsa de manteca y salvia',
    price: 480,
    category: 'pasta',
    ingredients: ['Ricota', 'Espinaca', 'Manteca', 'Salvia'],
    tags: ['vegetariano', 'popular', 'casero'],
  },
  {
    id: 'pasta-3',
    name: 'Bolognesa Casera',
    description: 'Pasta con nuestro ragú tradicional cocinado a fuego lento por 3 horas',
    price: 560,
    category: 'pasta',
    ingredients: ['Pasta', 'Carne molida', 'Tomate', 'Vino tinto'],
    tags: ['clasico', 'popular', 'especialidad'],
  },
  {
    id: 'pasta-4',
    name: 'Lasaña Tradicional',
    description: 'Capas de pasta fresca, ragú, bechamel y queso parmesano. Un clásico irresistible',
    price: 520,
    category: 'pasta',
    ingredients: ['Pasta fresca', 'Ragú', 'Bechamel', 'Parmesano'],
    tags: ['popular', 'casero'],
  },
  {
    id: 'pasta-5',
    name: 'Fettuccine Alfredo',
    description: 'Pasta fresca, manteca, crema de leche y parmesano. Cremosidad al máximo',
    price: 500,
    category: 'pasta',
    ingredients: ['Fettuccine', 'Manteca', 'Crema', 'Parmesano'],
    tags: ['vegetariano', 'clasico'],
  },
  {
    id: 'pasta-6',
    name: 'Pappardelle al Ragù di Cinghiale',
    description: 'Pappardelle con ragù de jabalí, tomate y vino. Sabor robusto y sofisticado',
    price: 600,
    category: 'pasta',
    ingredients: ['Pappardelle', 'Ragù de cinghiale', 'Tomate', 'Vino'],
    tags: ['premium', 'especialidad'],
  },
  {
    id: 'pasta-7',
    name: 'Ravioli de Langostino',
    description: 'Ravioli relleno de langostino con salsa de tomate fresco y albahaca',
    price: 580,
    category: 'pasta',
    ingredients: ['Langostino', 'Tomate', 'Albahaca'],
    tags: ['premium', 'mariscos', 'nuevo'],
  },
  {
    id: 'pasta-8',
    name: 'Cacio e Pepe',
    description: 'Pasta, queso pecorino y pimienta negra. La simpleza hecha arte',
    price: 480,
    category: 'pasta',
    ingredients: ['Pasta', 'Pecorino', 'Pimienta negra'],
    tags: ['vegetariano', 'clasico'],
  },
  {
    id: 'pasta-9',
    name: 'Rigatoni alla Amatriciana',
    description: 'Rigatoni con panceta, tomate cherry y pecorino. Tradicional romana',
    price: 510,
    category: 'pasta',
    ingredients: ['Rigatoni', 'Panceta', 'Tomate cherry', 'Pecorino'],
    tags: ['popular', 'clasico'],
  },
]

// ==================== CARNES ====================
export const CARNES: MenuItem[] = [
  {
    id: 'carne-1',
    name: 'Bife de Chorizo Premium',
    description: 'Corte argentino jugoso a la parrilla, acompañado con chimichurri casero fresco',
    price: 700,
    category: 'carne',
    ingredients: ['Bife de chorizo', 'Chimichurri'],
    tags: ['popular', 'premium', 'argentino'],
  },
  {
    id: 'carne-2',
    name: 'Osso Buco a la Milanesa',
    description: 'Muela de ternera estofada en vino tinto con verduras. Cocción de 3 horas',
    price: 780,
    category: 'carne',
    ingredients: ['Ternera', 'Vino tinto', 'Verduras'],
    tags: ['especialidad', 'premium', 'italiano'],
  },
  {
    id: 'carne-3',
    name: 'Pechuga de Pollo Rellena',
    description: 'Pechuga rellena de jamón, queso y hierbas a la manteca',
    price: 560,
    category: 'carne',
    ingredients: ['Pechuga de pollo', 'Jamón', 'Queso'],
    tags: ['popular'],
  },
  {
    id: 'carne-4',
    name: 'Costillas BBQ',
    description: 'Costillas tiernas en salsa BBQ casera, cocidas lentamente en horno',
    price: 650,
    category: 'carne',
    ingredients: ['Costillas', 'Salsa BBQ', 'Hierbas'],
    tags: ['popular', 'nuevo'],
  },
  {
    id: 'carne-5',
    name: 'Carne Vacuna Grill',
    description: 'Selección de cortes premium a la parrilla, acompañada con verduras grilladas',
    price: 720,
    category: 'carne',
    ingredients: ['Carne vacuna', 'Verduras'],
    tags: ['premium', 'argentino'],
  },
  {
    id: 'carne-6',
    name: 'Pato a la Naranja',
    description: 'Pato tierno con salsa de naranja y especias, acompañado con papas paja',
    price: 680,
    category: 'carne',
    ingredients: ['Pato', 'Naranja', 'Especias'],
    tags: ['premium', 'especialidad', 'italiano'],
  },
]

// ==================== ENTRADAS ====================
export const ENTRADAS: MenuItem[] = [
  {
    id: 'entrada-1',
    name: 'Tabla de Quesos y Embutidos Premium',
    description: 'Selección gourmet de quesos y embutidos italianos importados. Para 2-3 personas',
    price: 650,
    category: 'entrada',
    ingredients: ['Quesos italianos', 'Embutidos', 'Pan casero'],
    tags: ['para-compartir', 'popular', 'premium'],
  },
  {
    id: 'entrada-2',
    name: 'Camarones al Ajillo',
    description: 'Camarones frescos salteados con ajo, perejil fresco y aceite de oliva Toscano',
    price: 580,
    category: 'entrada',
    ingredients: ['Camarones', 'Ajo', 'Perejil', 'Aceite de oliva'],
    tags: ['premium', 'mariscos'],
  },
  {
    id: 'entrada-3',
    name: 'Bruschetta al Tomate',
    description: 'Pan tostado con tomate fresco, albahaca, ajo y aceite de oliva',
    price: 320,
    category: 'entrada',
    ingredients: ['Pan', 'Tomate', 'Albahaca', 'Ajo'],
    tags: ['vegetariano', 'clasico'],
  },
  {
    id: 'entrada-4',
    name: 'Calamares a la Romana',
    description: 'Calamares frescos rebozados y fritos, acompañados con limón y alioli casero',
    price: 520,
    category: 'entrada',
    ingredients: ['Calamares', 'Harina', 'Alioli'],
    tags: ['mariscos', 'popular'],
  },
  {
    id: 'entrada-5',
    name: 'Tabla Mixta Italia',
    description: 'Combinación de quesos, embutidos, vegetales frescos y pan tostado. Perfecto para compartir',
    price: 720,
    category: 'entrada',
    ingredients: ['Quesos', 'Embutidos', 'Vegetales', 'Pan'],
    tags: ['para-compartir', 'premium', 'nuevo'],
  },
  {
    id: 'entrada-6',
    name: 'Tabla de Antipasti',
    description: 'Aceitunas, alcachofas, pimientos, mozzarella fresca y pan casero',
    price: 480,
    category: 'entrada',
    ingredients: ['Aceitunas', 'Alcachofas', 'Pimientos', 'Mozzarella', 'Pan'],
    tags: ['vegetariano', 'para-compartir'],
  },
  {
    id: 'entrada-7',
    name: 'Almejas a la Vinagreta',
    description: 'Almejas frescas con vinagreta de tomate, cebolla y cilantro',
    price: 600,
    category: 'entrada',
    ingredients: ['Almejas', 'Vinagreta', 'Cilantro'],
    tags: ['mariscos', 'premium'],
  },
  {
    id: 'entrada-8',
    name: 'Provoleta a la Parrilla',
    description: 'Queso provoleta tostado con orégano, acompañado con pan casero',
    price: 380,
    category: 'entrada',
    ingredients: ['Provoleta', 'Orégano', 'Pan'],
    tags: ['vegetariano', 'argentino'],
  },
]

// ==================== POSTRES ====================
export const POSTRES: MenuItem[] = [
  {
    id: 'postre-1',
    name: 'Tiramisu Clásico',
    description: 'Postre clásico italiano con mascarpone, café expreso y cacao. Hecho en casa',
    price: 280,
    category: 'postre',
    ingredients: ['Mascarpone', 'Café', 'Cacao', 'Vainilla'],
    tags: ['clasico', 'popular', 'italiano'],
  },
  {
    id: 'postre-2',
    name: 'Panna Cotta',
    description: 'Crema italiana suave y delicada con frutas del bosque frescas',
    price: 300,
    category: 'postre',
    ingredients: ['Crema', 'Frutas del bosque'],
    tags: ['italiano'],
  },
  {
    id: 'postre-3',
    name: 'Panettone Premium',
    description: 'Pan dulce italiano con frutos secos y frutas confitadas. Disponible en invierno',
    price: 250,
    category: 'postre',
    ingredients: ['Harinas', 'Frutos secos', 'Frutas confitadas'],
    tags: ['estacional', 'italiano'],
  },
  {
    id: 'postre-4',
    name: 'Panna Cotta de Pistacho',
    description: 'Crema de pistacho con salsa de chocolate y frutos secos',
    price: 320,
    category: 'postre',
    ingredients: ['Crema', 'Pistacho', 'Chocolate'],
    tags: ['premium', 'nuevo'],
  },
  {
    id: 'postre-5',
    name: 'Zabaglione',
    description: 'Postre de huevo batido con vino de Marsala y azúcar. Clásico italiano',
    price: 280,
    category: 'postre',
    ingredients: ['Huevo', 'Marsala', 'Azúcar'],
    tags: ['italiano', 'clasico'],
  },
  {
    id: 'postre-6',
    name: 'Semifreddo de Chocolate',
    description: 'Mousse de chocolate medio congelada con frutos rojos',
    price: 310,
    category: 'postre',
    ingredients: ['Chocolate', 'Crema', 'Frutos rojos'],
    tags: ['popular'],
  },
  {
    id: 'postre-7',
    name: 'Cannoli Sicilianos',
    description: 'Tubos crujientes rellenos de ricota dulce con chocolate y frutas confitadas',
    price: 290,
    category: 'postre',
    ingredients: ['Ricota', 'Chocolate', 'Frutas confitadas'],
    tags: ['italiano', 'popular'],
  },
  {
    id: 'postre-8',
    name: 'Afogato',
    description: 'Helado de vainilla con café expreso caliente vertido sobre él',
    price: 200,
    category: 'postre',
    ingredients: ['Helado', 'Café'],
    tags: ['popular'],
  },
]

// ==================== BEBIDAS ====================
export const BEBIDAS: MenuItem[] = [
  {
    id: 'bebida-1',
    name: 'Vino Tinto - Malbec Premium',
    description: 'Vino tinto argentino de excelente cuerpo y estructura. La copa perfecta para pizza',
    price: 350,
    category: 'bebida',
    ingredients: [],
    tags: ['vino', 'argentino', 'popular'],
  },
  {
    id: 'bebida-2',
    name: 'Vino Blanco - Sauvignon Blanc',
    description: 'Vino blanco fresco y aromático. Ideal para entradas y mariscos',
    price: 330,
    category: 'bebida',
    ingredients: [],
    tags: ['vino'],
  },
  {
    id: 'bebida-3',
    name: 'Cerveza Artesanal IPA',
    description: 'Selección de cervezas artesanales locales premium',
    price: 180,
    category: 'bebida',
    ingredients: [],
    tags: ['cerveza', 'artesanal', 'popular'],
  },
  {
    id: 'bebida-4',
    name: 'Agua Mineral',
    description: 'Agua mineral sin gas o con gas',
    price: 50,
    category: 'bebida',
    ingredients: [],
    tags: [],
  },
  {
    id: 'bebida-5',
    name: 'Prosecco Italiano',
    description: 'Espumante italiano fresco y elegante',
    price: 420,
    category: 'bebida',
    ingredients: [],
    tags: ['vino', 'italiano', 'premium'],
  },
  {
    id: 'bebida-6',
    name: 'Vino Tinto - Barolo Piemontés',
    description: 'Vino tinto italiano premium de la región del Piamonte',
    price: 580,
    category: 'bebida',
    ingredients: [],
    tags: ['vino', 'italiano', 'premium', 'especialidad'],
  },
  {
    id: 'bebida-7',
    name: 'Cerveza Negra Artesanal',
    description: 'Cerveza negra local con notas de chocolate y café',
    price: 160,
    category: 'bebida',
    ingredients: [],
    tags: ['cerveza', 'artesanal'],
  },
  {
    id: 'bebida-8',
    name: 'Fernet Branca',
    description: 'El digestivo italiano clásico, perfecto después de la comida',
    price: 120,
    category: 'bebida',
    ingredients: [],
    tags: ['italiano'],
  },
  {
    id: 'bebida-9',
    name: 'Espresso',
    description: 'Café expreso italiano de primera calidad',
    price: 80,
    category: 'bebida',
    ingredients: [],
    tags: ['cafe'],
  },
  {
    id: 'bebida-10',
    name: 'Cappuccino',
    description: 'Cappuccino cremoso con espuma de leche vaporizada',
    price: 100,
    category: 'bebida',
    ingredients: [],
    tags: ['cafe'],
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
