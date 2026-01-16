/**
 * Preguntas Frecuentes (FAQs)
 * Para SEO y mejor experiencia de usuario
 */

export type FAQ = {
  id: string
  question: string
  answer: string
  category?: 'reservas' | 'menu' | 'eventos' | 'catering' | 'general' | 'politica'
  priority?: number
}

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Cómo puedo hacer una reserva en Tutto a Leña?',
    answer:
      'Puedes hacer una reserva de varias formas: 1) Directamente en nuestra plataforma de reservas online, 2) Por teléfono al +54 (011) XXXX-XXXX, 3) Por WhatsApp, 4) Por email. Recomendamos hacer la reserva con al menos 2 días de anticipación, especialmente en fines de semana.',
    category: 'reservas',
    priority: 1,
  },
  {
    id: 'faq-2',
    question: '¿Cuál es el horario de atención?',
    answer:
      'Abierto de lunes a jueves de 12:00 a 23:00, viernes y sábados de 12:00 a 01:00, y domingos de 12:00 a 23:00. Cerrado los 25 de diciembre y 1 de enero.',
    category: 'general',
    priority: 1,
  },
  {
    id: 'faq-3',
    question: '¿Cómo llego al restaurante?',
    answer:
      'Nos encontramos en Calle Principal 123, Buenos Aires (CABA). Contamos con estacionamiento en el local y está ubicado en una zona con fácil acceso a transporte público (líneas de colectivo cercanas y estación de subte). Puedes ver nuestro mapa en la sección "Dónde estamos".',
    category: 'general',
    priority: 2,
  },
  {
    id: 'faq-4',
    question: '¿Ofrecen opciones vegetarianas y veganas?',
    answer:
      'Sí, tenemos varias opciones vegetarianas en nuestro menú. Si eres vegano, te recomendamos contactarnos con anticipación para ofrecerte alternativas personalizadas. Nuestro equipo está encantado de adaptar los platos a tus necesidades dietéticas.',
    category: 'menu',
    priority: 2,
  },
  {
    id: 'faq-5',
    question: '¿Las pizzas son gluten free?',
    answer:
      'Actualmente no ofrecemos masa libre de gluten, pero estamos en proceso de implementarlo. Por favor contactanos para conocer las opciones disponibles y la fecha estimada de lanzamiento.',
    category: 'menu',
    priority: 2,
  },
  {
    id: 'faq-6',
    question: '¿Cuál es la edad mínima para los niños?',
    answer:
      'Aceptamos niños de todas las edades. Tenemos menú especial para niños y sillas altas disponibles. El ambiente es familiar y acogedor para que disfruten toda la familia.',
    category: 'general',
    priority: 2,
  },
  {
    id: 'faq-7',
    question: '¿Se pueden traer mascotas?',
    answer:
      'Sí, aceptamos mascotas en nuestra terraza. Pedimos que sean mantenidas bajo control y que el dueño sea responsable. Ofrecemos agua fresca para ellas.',
    category: 'general',
    priority: 3,
  },
  {
    id: 'faq-8',
    question: '¿Hacen entregas a domicilio?',
    answer:
      'Sí, ofrecemos servicio de delivery en la zona de cobertura. Puedes realizar tu pedido a través de nuestra web o por teléfono. El tiempo de entrega promedio es de 45 minutos.',
    category: 'general',
    priority: 2,
  },
  {
    id: 'faq-9',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos: efectivo, tarjetas de débito, tarjetas de crédito (todas las marcas), transferencia bancaria y billeteras virtuales. Para compras superiores a $5000 con tarjeta, ofrecemos financiación en cuotas sin interés.',
    category: 'general',
    priority: 2,
  },
  {
    id: 'faq-10',
    question: '¿Ofrecen servicio de catering?',
    answer:
      'Sí, contamos con servicio de catering para eventos corporativos, bodas, cumpleaños y celebraciones. Puedes personalizar el menú según tus preferencias. Contáctanos para más información y presupuesto.',
    category: 'catering',
    priority: 1,
  },
  {
    id: 'faq-11',
    question: '¿Cuál es el costo mínimo para catering?',
    answer:
      'El presupuesto mínimo es de $8000 para un servicio básico de catering. El precio final depende del número de comensales, menú elegido y otros servicios adicionales. Realizamos presupuestos personalizados sin costo.',
    category: 'catering',
    priority: 2,
  },
  {
    id: 'faq-12',
    question: '¿Puedo organizar un evento privado?',
    answer:
      'Absolutamente. Contamos con espacio para eventos privados hasta 120 personas. Ofrecemos menú personalizado, decoración y servicio completo. Contáctanos con los detalles de tu evento para darte un presupuesto.',
    category: 'eventos',
    priority: 1,
  },
  {
    id: 'faq-13',
    question: '¿Qué tan adelantado debo reservar para un evento?',
    answer:
      'Recomendamos reservar con al menos 30 días de anticipación. Para eventos grandes (más de 50 personas) o con requerimientos especiales, te sugerimos contactarnos con 60 días antes.',
    category: 'eventos',
    priority: 2,
  },
  {
    id: 'faq-14',
    question: '¿Incluye bebidas en el servicio de catering?',
    answer:
      'Las bebidas se ofrecen de forma opcional. Tenemos paquetes de vinos, cervezas, refrescos y bebidas no alcohólicas. También puedes traer bebidas propias (con costo adicional de descorche).',
    category: 'catering',
    priority: 2,
  },
  {
    id: 'faq-15',
    question: '¿Hay conexión WiFi en el restaurante?',
    answer:
      'Sí, contamos con WiFi de alta velocidad disponible para todos nuestros clientes. La contraseña te la proporcionaremos cuando llegues.',
    category: 'general',
    priority: 3,
  },
  {
    id: 'faq-16',
    question: '¿El local es accesible para personas con discapacidad?',
    answer:
      'Sí, el local cuenta con acceso para sillas de ruedas, baños adaptados y estacionamiento reservado. Si tienes necesidades especiales, por favor indícalo al hacer la reserva.',
    category: 'general',
    priority: 2,
  },
  {
    id: 'faq-17',
    question: '¿Tienen política de cancelación?',
    answer:
      'Las cancelaciones realizadas 48 horas antes de la reserva no tienen costo. Cancelaciones posteriores pueden estar sujetas a cargos. Los eventos privados tienen política específica según el contrato.',
    category: 'politica',
    priority: 2,
  },
  {
    id: 'faq-18',
    question: '¿Cómo es el clima del restaurante?',
    answer:
      'Tutto a Leña combina elegancia italiana con calidez argentina. El ambiente es sofisticado pero acogedor, con música ambiental, iluminación cálida y una decoración que rinde homenaje a la tradición italiana. Perfecto para cenas románticas, celebraciones o comidas en familia.',
    category: 'general',
    priority: 3,
  },
]

// ==================== HELPER FUNCTIONS ====================

/**
 * Obtener FAQs por categoría
 */
export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return FAQS.filter(faq => faq.category === category).sort(
    (a, b) => (a.priority || 999) - (b.priority || 999),
  )
}

/**
 * Obtener todas las categorías con FAQs
 */
export const getFAQCategories = (): Array<FAQ['category']> => {
  const categories = new Set(
    FAQS.map(faq => faq.category).filter(Boolean) as Array<FAQ['category']>,
  )
  return Array.from(categories)
}

/**
 * Buscar FAQs por texto
 */
export const searchFAQs = (query: string): FAQ[] => {
  const lowerQuery = query.toLowerCase()
  return FAQS.filter(
    faq =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery),
  )
}

/**
 * Obtener FAQs prioritarias (para mostrar primero)
 */
export const getPriorityFAQs = (limit: number = 5): FAQ[] => {
  return FAQS.sort((a, b) => (a.priority || 999) - (b.priority || 999)).slice(0, limit)
}

/**
 * Generar schema para FAQPage
 */
export const generateFAQPageSchema = (faqs: FAQ[] = FAQS) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Obtener FAQ por ID
 */
export const getFAQById = (id: string): FAQ | undefined => {
  return FAQS.find(faq => faq.id === id)
}
