/**
 * Información del negocio - Centrale para toda la web
 * Utilizados en SEO, footer, contacto, schema.org, etc.
 */

export const BUSINESS_INFO = {
  // Identidad
  name: 'Tutto a Leña',
  tagline: 'Arte italiano, corazón argentino',
  description:
    'Restaurante italiano auténtico con pizzas a leña artesanales, pastas frescas y una experiencia culinaria única que fusiona tradición italiana con el calor argentino.',

  // Contacto
  phone: {
    display: '+54 (011) XXXX-XXXX',
    href: 'tel:+541100000000',
    raw: '+541100000000',
  },
  email: {
    display: 'info@tutto-a-lena.com',
    href: 'mailto:info@tutto-a-lena.com',
  },
  whatsapp: {
    display: '+54 911 XXXX-XXXX',
    href: 'https://wa.me/5491100000000?text=Hola%20Tutto%20a%20Leña!',
    raw: '5491100000000',
  },

  // Ubicación
  location: {
    street: 'Calle Principal 123',
    city: 'Buenos Aires',
    state: 'CABA',
    zipCode: '1425',
    country: 'Argentina',
    coordinates: {
      latitude: -34.6037, // Ejemplo - actualizar con coordenadas reales
      longitude: -58.3816, // Ejemplo - actualizar con coordenadas reales
    },
    googleMapsUrl: 'https://maps.google.com/?q=Tutto+a+Leña,+Buenos+Aires',
  },

  // Horarios de apertura
  hours: {
    monday: { open: '12:00', close: '23:00' },
    tuesday: { open: '12:00', close: '23:00' },
    wednesday: { open: '12:00', close: '23:00' },
    thursday: { open: '12:00', close: '00:00' },
    friday: { open: '12:00', close: '01:00' },
    saturday: { open: '12:00', close: '01:00' },
    sunday: { open: '12:00', close: '23:00' },
    // Especiales
    holidays: [
      { date: '2026-01-01', closed: true, reason: 'Año Nuevo' },
      { date: '2026-02-16', closed: true, reason: 'Carnaval' },
      { date: '2026-12-25', closed: true, reason: 'Navidad' },
    ],
  },

  // URLs
  website: {
    domain: 'tutto-a-lena.com',
    url: 'https://tutto-a-lena.com',
    urlEn: 'https://tutto-a-lena.com/en',
    urlEs: 'https://tutto-a-lena.com',
  },

  // Redes sociales
  social: {
    facebook: 'https://facebook.com/tuttoleña',
    instagram: 'https://instagram.com/tuttoleña',
    whatsapp: 'https://wa.me/5491100000000',
    tripadvisor: 'https://tripadvisor.com/restaurants/tuttoleña',
    google: 'https://google.com/maps/place/Tutto+a+Leña',
  },

  // Redes - para schema.org
  socialProfiles: [
    'https://facebook.com/tuttoleña',
    'https://instagram.com/tuttoleña',
    'https://tripadvisor.com/restaurants/tuttoleña',
  ],

  // CTAs y Links de acciones
  cta: {
    // Links principales
    menu: '/carta',
    catering: '/catering',
    events: '/eventos',
    contact: '/contacto',
    location: '/donde-estamos',
    gallery: '/galeria',
    home: '/',

    // WhatsApp con mensajes predefinidos
    whatsappMessages: {
      default: 'Hola Tutto a Leña! Quisiera hacer una consulta',
      catering:
        'Hola, quisiera consultar sobre catering para mi evento. Me gustaría conocer opciones y presupuestos.',
      events:
        'Hola, quisiera conocer más sobre vuestros eventos y servicios especiales. Tengo un evento próximo.',
      general: 'Hola, tengo una consulta',
      booking: 'Hola, me gustaría consultar disponibilidad y hacer una reserva',
      inquiry: 'Hola, quisiera más información sobre vuestros servicios',
    },
  },

  // Certificaciones y reconocimientos
  certifications: ['Restaurante registrado', 'Habilitación municipal', 'Certificado de calidad'],

  // Métodos de pago
  paymentMethods: [
    'CASH',
    'CREDIT_CARD',
    'DEBIT_CARD',
    'PAYPAL',
    'BANK_TRANSFER',
    'CRYPTOCURRENCY',
  ],

  // Precios típicos
  priceRange: '$$', // $ = económico, $$ = medio, $$$ = costoso, $$$$ = muy costoso

  // Capacidad
  capacity: {
    indoor: 80,
    outdoor: 40,
    total: 120,
  },

  // Amenidades
  amenities: [
    'WiFi',
    'Aire acondicionado',
    'Terraza',
    'Estacionamiento',
    'Accesibilidad',
    'Mascotas permitidas',
    'Eventos privados',
    'Catering',
    'Reservas online',
  ],

  // Servicios especiales
  specialServices: ['catering', 'privateEvents', 'deliveries', 'takeOut', 'diningTable', 'seating'],

  // Staff
  staff: {
    owner: 'Nombre del propietario',
    chef: 'Nombre del chef',
    manager: 'Nombre del gerente',
  },

  // Año de fundación
  foundedYear: 2020,

  // Descripción larga para about
  fullDescription: `
Tutto a Leña es más que un restaurante; es una experiencia culinaria que
fusiona la autenticidad italiana con el calor y la pasión argentina.

Nuestro compromiso es ofrecer platos elaborados con ingredientes premium,
técnicas tradicionales italianas y la calidad que usted se merece.

Desde nuestras pizzas cocidas en horno a leña hasta nuestras pastas frescas
elaboradas diariamente, cada plato es una celebración del buen comer.

Con un ambiente acogedor, atención personalizada y una carta de vinos
seleccionados especialmente, Tutto a Leña es el lugar perfecto para compartir
momentos especiales en familia, con amigos o en eventos corporativos.
  `,
}

/**
 * Schema.org - Structured Data
 * Para SEO y mejor indexación en buscadores
 */
export const SCHEMA = {
  // Tipo: Restaurant
  restaurant: {
    '@type': 'Restaurant',
    name: BUSINESS_INFO.name,
    image: '/og-image.jpg', // Actualizar con imagen real
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website.url,
    telephone: BUSINESS_INFO.phone.raw,
    email: BUSINESS_INFO.email.display,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.location.street,
      addressLocality: BUSINESS_INFO.location.city,
      addressRegion: BUSINESS_INFO.location.state,
      postalCode: BUSINESS_INFO.location.zipCode,
      addressCountry: BUSINESS_INFO.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.location.coordinates.latitude,
      longitude: BUSINESS_INFO.location.coordinates.longitude,
    },
    sameAs: BUSINESS_INFO.socialProfiles,
  },

  // Tipo: LocalBusiness
  localBusiness: {
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    image: '/og-image.jpg',
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website.url,
    telephone: BUSINESS_INFO.phone.raw,
    email: BUSINESS_INFO.email.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.location.street,
      addressLocality: BUSINESS_INFO.location.city,
      addressRegion: BUSINESS_INFO.location.state,
      postalCode: BUSINESS_INFO.location.zipCode,
      addressCountry: BUSINESS_INFO.location.country,
    },
    sameAs: BUSINESS_INFO.socialProfiles,
    foundingDate: `${BUSINESS_INFO.foundedYear}`,
  },

  // Tipo: Organization
  organization: {
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    logo: '/logo.png', // Actualizar con logo real
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website.url,
    sameAs: BUSINESS_INFO.socialProfiles,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: BUSINESS_INFO.phone.raw,
      email: BUSINESS_INFO.email.display,
    },
  },
}

export default BUSINESS_INFO

/**
 * Helper para construir URLs de WhatsApp con mensajes predefinidos
 * @param messageType - Tipo de mensaje (default, catering, events, general, booking, inquiry)
 * @param customMessage - Mensaje personalizado (opcional, sobrescribe el predefinido)
 */
export const getWhatsappUrl = (
  messageType: keyof typeof BUSINESS_INFO.cta.whatsappMessages = 'default',
  customMessage?: string
): string => {
  const phoneNumber = BUSINESS_INFO.whatsapp.raw
  const message = customMessage || BUSINESS_INFO.cta.whatsappMessages[messageType]
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

/**
 * Helper para construir URLs de redes sociales
 */
export const getSocialUrl = (network: keyof typeof BUSINESS_INFO.social): string => {
  return BUSINESS_INFO.social[network]
}
