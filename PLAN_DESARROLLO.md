# 🎯 Plan de Desarrollo - Tutto a Leña (Astro)

## 📋 Análisis de Situación Actual

### Proyecto React (Referencia)

- ✅ Prueba de concepto básica
- ✅ Páginas: Index, Menu, Locations, Catering, Contact
- ✅ Componentes: Navbar, Hero, MenuTeaser, Gallery, Footer
- ⚠️ No optimizado para SEO (SPA)
- ⚠️ Funcionalidad básica

### Proyecto Astro (A Desarrollar)

- ✅ Estructura base creada
- ✅ Layout principal configurado
- ✅ Configuración Astro optimizada (sitemap, htaccess)
- ✅ Tailwind CSS configurado
- ✅ Fuentes importadas (Inter, Playfair Display, Caveat)
- 🔄 Componentes parcialmente implementados
- ❌ Falta contenido real
- ❌ Falta optimización SEO completa
- ❌ Falta responsive design

---

## 🎯 Objetivo Final

Crear una web profesional para **Tutto a Leña** con:

- ⚡ Rendimiento excelente (100/100 Lighthouse)
- 🔍 SEO optimizado (meta tags, schema.org, Open Graph)
- 📱 Diseño completamente responsive
- ♿ Accesibilidad WCAG 2.1 AA
- 🎨 Diseño elegante y moderno
- 🚀 Carga ultrarrápida
- 📊 Analytics integrado

---

## 📅 Plan de Desarrollo - Fase por Fase

### **FASE 1: Fundamentos y Arquitectura** ⚙️

**Objetivo:** Establecer bases sólidas para el proyecto

#### 1.1 Configuración y Optimización

- [x] Revisar y optimizar `astro.config.mjs`
- [ ] Configurar variables de entorno (`.env.production`, `.env.development`)
- [ ] Configurar compresión de imágenes (Sharp, Astro Image)
- [ ] Configurar PWA (opcional)
- [ ] Establecer sistema de Design Tokens (colores, tipografías, espaciados)

#### 1.2 SEO - Configuración Base

- [ ] Implementar MetaTags.astro completo con:
  - Meta tags básicos (title, description, keywords)
  - Open Graph (Facebook, LinkedIn)
  - Twitter Cards
  - Canonical URLs
  - Alternate languages (si aplica)
- [ ] Crear componente Schema.org para structured data:
  - Restaurant schema
  - LocalBusiness schema
  - Menu schema
  - Review schema
- [ ] Configurar robots.txt
- [ ] Configurar sitemap.xml automático
- [ ] Implementar breadcrumbs

#### 1.3 Estructura de Constantes y Data

- [ ] Definir constantes globales (`src/constants/`):
  - `business.ts` - Info del negocio (dirección, teléfono, horarios)
  - `menu.ts` - Estructura del menú completo
  - `social.ts` - Redes sociales
  - `gallery.ts` - Galerías de imágenes
  - `testimonials.ts` - Reseñas de clientes
- [ ] Crear tipos TypeScript para toda la data

---

### **FASE 2: Sistema de Diseño y Componentes Base** 🎨

**Objetivo:** Crear biblioteca de componentes reutilizables

#### 2.1 Componentes UI Base

- [ ] **Button.astro** - Variantes (primary, secondary, outline, ghost)
- [ ] **Card.astro** - Para platos, eventos, testimonios
- [ ] **Section.astro** - Wrapper consistente para secciones
- [ ] **Container.astro** - Contenedor responsive
- [ ] **Badge.astro** - Etiquetas (nuevo, popular, vegetariano)
- [ ] **Icon.astro** - Sistema de iconos (Lucide o similar)
- [ ] **Image.astro** - Wrapper para imágenes optimizadas
- [ ] **Link.astro** - Enlaces consistentes

#### 2.2 Componentes de Layout

- [ ] **Header.astro** - Optimizado y responsive
- [ ] **NavMenu.astro** - Menú de navegación con animaciones
  - Desktop: horizontal
  - Mobile: hamburger menu
  - Indicador de página activa
- [ ] **Footer.astro** - Completo con:
  - Links rápidos
  - Información de contacto
  - Mapa de sitio
  - Redes sociales
  - Copyright y legal
- [ ] **Breadcrumbs.astro** - Navegación contextual
- [ ] **SkipToContent.astro** - Accesibilidad

#### 2.3 Estilos Globales

- [ ] Normalizar CSS custom properties
- [ ] Definir sistema de spacing
- [ ] Crear utilidades Tailwind personalizadas
- [ ] Implementar dark mode (opcional)
- [ ] Animaciones y transiciones suaves

---

### **FASE 3: Páginas Principales** 📄

**Objetivo:** Desarrollar todas las páginas con contenido rico

#### 3.1 Página de Inicio (`/`)

**Componentes a crear:**

- [ ] **Hero.astro** - Hero section impactante

  - Imagen/video de fondo de alta calidad
  - CTA principal ("Reservar ahora", "Ver menú")
  - Texto descriptivo corto y potente
  - Animaciones de entrada

- [ ] **SubHero.astro / ValueProposition.astro**

  - Propuesta de valor única
  - 3-4 puntos clave (tradición, calidad, ambiente, etc.)

- [ ] **MenuTeaser.astro** - Preview del menú

  - 3-6 platos destacados
  - Imágenes de alta calidad
  - Precios (opcional)
  - Botón "Ver menú completo"

- [ ] **About.astro** - Sobre el restaurante

  - Historia de Tutto a Leña
  - Filosofía culinaria
  - Imágenes del lugar/equipo

- [ ] **Gallery.astro** - Galería de fotos

  - Grid responsive con Masonry layout
  - Lightbox para ampliar imágenes
  - Lazy loading

- [ ] **Testimonials.astro** - Reseñas de clientes

  - Carrusel o grid de testimonios
  - Estrellas de rating
  - Fotos de clientes (opcional)

- [ ] **Events.astro** - Eventos próximos

  - Lista/grid de eventos
  - Fechas y descripciones
  - CTA para reservar

- [ ] **Contact.astro** - Contacto rápido
  - Formulario inline
  - Mapa de ubicación
  - Horarios de apertura

**SEO específico:**

- [ ] Meta description optimizada
- [ ] Structured data: Restaurant, Organization
- [ ] Imágenes con alt text descriptivo

---

#### 3.2 Página de Menú (`/menu` o `/carta`)

**Componentes a crear:**

- [ ] **MenuHero.astro** - Hero específico del menú
- [ ] **MenuCategories.astro** - Navegación por categorías
  - Sticky navigation
  - Smooth scroll
- [ ] **MenuSection.astro** - Sección por categoría
  - Entradas, Pizzas, Pastas, Carnes, Postres, Bebidas
- [ ] **MenuItem.astro** - Card individual de plato
  - Nombre del plato
  - Descripción
  - Ingredientes
  - Precio
  - Imagen (opcional)
  - Badges (vegetariano, picante, nuevo, popular)
- [ ] **MenuFilters.astro** - Filtros (vegetariano, gluten-free, etc.)
- [ ] **MenuDownload.astro** - Descargar PDF del menú

**SEO específico:**

- [ ] Structured data: MenuItem, MenuSection
- [ ] Rich snippets para cada plato
- [ ] Keywords: platos italianos, pizzas a leña, etc.

---

#### 3.3 Página Dónde Estamos (`/donde-estamos` o `/locations`)

**Componentes a crear:**

- [ ] **LocationHero.astro**
- [ ] **LocationMap.astro** - Mapa interactivo
  - Google Maps embed o Leaflet
  - Marcador personalizado
- [ ] **LocationInfo.astro** - Información detallada
  - Dirección completa
  - Teléfono con click-to-call
  - Email con click-to-email
  - Horarios de apertura (schema.org)
- [ ] **HowToGetThere.astro** - Cómo llegar
  - Transporte público
  - Parking
  - Accesibilidad
- [ ] **LocationGallery.astro** - Fotos del local
  - Interior
  - Terraza
  - Cocina (opcional)

**SEO específico:**

- [ ] Structured data: LocalBusiness, OpeningHoursSpecification
- [ ] Google My Business integration
- [ ] Local SEO keywords

---

#### 3.4 Página de Eventos (`/eventos`)

**Componentes a crear:**

- [ ] **EventsHero.astro**
- [ ] **EventsList.astro** - Lista de eventos
- [ ] **EventCard.astro** - Card individual
  - Fecha y hora
  - Título
  - Descripción
  - Imagen
  - Botón de reserva
- [ ] **EventsCalendar.astro** - Calendario visual (opcional)
- [ ] **PrivateEvents.astro** - Eventos privados
  - Cumpleaños
  - Bodas
  - Corporativos
- [ ] **EventsBookingForm.astro** - Formulario de reserva

**SEO específico:**

- [ ] Structured data: Event
- [ ] Dynamic title con nombre del evento
- [ ] Social sharing optimizado

---

#### 3.5 Página de Catering (`/catering`)

**Componentes a crear:**

- [ ] **CateringHero.astro**
- [ ] **CateringServices.astro** - Servicios que ofrecen
  - Eventos corporativos
  - Bodas
  - Fiestas privadas
- [ ] **CateringMenu.astro** - Menús disponibles
- [ ] **CateringProcess.astro** - Proceso paso a paso
- [ ] **CateringGallery.astro** - Fotos de eventos pasados
- [ ] **CateringQuoteForm.astro** - Formulario de cotización
  - Fecha del evento
  - Número de personas
  - Tipo de evento
  - Preferencias especiales

**SEO específico:**

- [ ] Keywords: catering italiano, catering empresas, etc.
- [ ] Structured data: Service

---

#### 3.6 Página de Contacto (`/contacto`)

**Componentes a crear:**

- [ ] **ContactHero.astro**
- [ ] **ContactForm.astro** - Formulario completo
  - Nombre
  - Email
  - Teléfono
  - Asunto
  - Mensaje
  - Validación frontend y backend
  - Captcha (opcional)
- [ ] **ContactInfo.astro** - Info de contacto
  - Dirección
  - Teléfono
  - Email
  - Horarios
- [ ] **ContactMap.astro** - Mapa
- [ ] **ContactSocial.astro** - Redes sociales
- [ ] **ContactFAQ.astro** - Preguntas frecuentes

**SEO específico:**

- [ ] Structured data: ContactPage
- [ ] No-index para formulario de confirmación

---

#### 3.7 Páginas Adicionales

- [ ] **Página 404** - Personalizada y útil
- [ ] **Página de Reservas** (`/reservar`)
  - Integración con sistema de reservas
  - Calendario de disponibilidad
- [ ] **Blog** (`/blog`) - Opcional pero recomendado para SEO
  - Recetas
  - Eventos pasados
  - Noticias del restaurante
- [ ] **Página Legal**
  - Política de privacidad
  - Términos y condiciones
  - Cookies policy
- [ ] **Página de Gracias** - Post-formularios

---

### **FASE 4: Funcionalidades Avanzadas** 🚀

**Objetivo:** Añadir interactividad y funcionalidades modernas

#### 4.1 Formularios

- [ ] Backend API para manejo de formularios:
  - Astro API routes
  - Validación con Zod
  - Envío de emails (Resend, SendGrid, Nodemailer)
- [ ] Mensajes de éxito/error con toasts
- [ ] Loading states
- [ ] Rate limiting

#### 4.2 Sistema de Reservas

- [ ] Integración con sistema externo (OpenTable, TheFork, etc.)
- [ ] O implementar sistema custom:
  - Calendario de disponibilidad
  - Selección de fecha/hora
  - Número de comensales
  - Confirmación por email

#### 4.3 Galería Avanzada

- [ ] Lightbox con navegación
- [ ] Infinite scroll o paginación
- [ ] Categorías (Interior, Platos, Eventos, etc.)
- [ ] Lazy loading optimizado

#### 4.4 Interactividad con React

- [ ] Components Islands para interactividad:
  - Menú hamburguesa
  - Carrusel de imágenes
  - Formularios
  - Filtros
- [ ] Mantener hidratación mínima (`client:load`, `client:visible`, etc.)

#### 4.5 Animaciones

- [ ] Scroll animations (View Transitions API o Intersection Observer)
- [ ] Micro-interacciones en botones/cards
- [ ] Page transitions suaves
- [ ] Loading animations

---

### **FASE 5: Optimización SEO Avanzada** 🔍

**Objetivo:** Maximizar visibilidad en buscadores

#### 5.1 Technical SEO

- [ ] Core Web Vitals optimization
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] Compresión Brotli/Gzip
- [ ] Lazy loading de imágenes y videos
- [ ] Preload de recursos críticos
- [ ] Font optimization (font-display: swap)
- [ ] Critical CSS inline

#### 5.2 Content SEO

- [ ] Keywords research
- [ ] Optimización de contenido en cada página
- [ ] Heading hierarchy (H1, H2, H3)
- [ ] Alt text para todas las imágenes
- [ ] Internal linking strategy
- [ ] External linking (partners, proveedores)

#### 5.3 Structured Data

- [ ] Restaurant schema completo
- [ ] Menu schema
- [ ] LocalBusiness schema
- [ ] Review schema (si hay reviews)
- [ ] Event schema
- [ ] FAQPage schema
- [ ] Breadcrumbs schema
- [ ] Article schema (para blog)

#### 5.4 Local SEO

- [ ] Google My Business optimization
- [ ] NAP consistency (Name, Address, Phone)
- [ ] Local citations
- [ ] Geo-targeted keywords
- [ ] Local structured data

#### 5.5 Social Media

- [ ] Open Graph tags optimizados
- [ ] Twitter Cards
- [ ] Pinterest rich pins
- [ ] WhatsApp preview
- [ ] Imágenes sociales (1200x630px)

---

### **FASE 6: Performance y Testing** ⚡

**Objetivo:** Garantizar rendimiento óptimo

#### 6.1 Performance Optimization

- [ ] Análisis con Lighthouse
- [ ] Análisis con PageSpeed Insights
- [ ] Análisis con WebPageTest
- [ ] Optimización de imágenes:
  - Formatos modernos (WebP, AVIF)
  - Responsive images
  - Lazy loading
- [ ] Minificación CSS/JS
- [ ] Tree shaking
- [ ] Code splitting
- [ ] Preconnect a dominios externos
- [ ] DNS prefetch

#### 6.2 Testing

- [ ] Testing en múltiples navegadores:
  - Chrome, Firefox, Safari, Edge
- [ ] Testing en dispositivos móviles:
  - iPhone, Android
  - Diferentes tamaños de pantalla
- [ ] Testing de formularios
- [ ] Testing de accesibilidad:
  - WAVE
  - axe DevTools
  - Screen reader testing
- [ ] Testing de SEO:
  - Google Search Console
  - Bing Webmaster Tools

#### 6.3 Responsive Design

- [ ] Mobile-first approach
- [ ] Breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- [ ] Touch-friendly UI (botones mínimo 44x44px)
- [ ] Orientación landscape/portrait
- [ ] Diseño adaptable a tablets

---

### **FASE 7: Contenido y Assets** 📸

**Objetivo:** Contenido de calidad profesional

#### 7.1 Fotografía

- [ ] Sesión fotográfica profesional:
  - Platos del menú (mínimo 30 fotos)
  - Interior del restaurante (10-15 fotos)
  - Exterior y fachada (5 fotos)
  - Equipo/staff (opcional)
  - Proceso de cocina (opcional)
- [ ] Optimización de imágenes
- [ ] Naming consistente
- [ ] Organización en carpetas

#### 7.2 Copywriting

- [ ] Redacción de textos para todas las secciones
- [ ] Tono de voz consistente (elegante, cálido, acogedor)
- [ ] Keywords naturalmente integradas
- [ ] Call-to-actions persuasivos
- [ ] Storytelling de la marca

#### 7.3 Videos (opcional pero recomendado)

- [ ] Video hero para homepage
- [ ] Video del proceso de cocina
- [ ] Testimonios en video
- [ ] Tour virtual del restaurante

---

### **FASE 8: Integrations y Analytics** 📊

**Objetivo:** Medir y mejorar

#### 8.1 Analytics

- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Meta Pixel (Facebook/Instagram)
- [ ] Hotjar o similar (heatmaps)
- [ ] Configurar eventos personalizados:
  - Clicks en reservas
  - Visualización del menú
  - Envío de formularios
  - Clicks en teléfono/email

#### 8.2 Integraciones

- [ ] Google Maps API
- [ ] Sistema de reservas (OpenTable, TheFork, etc.)
- [ ] Email marketing (Mailchimp, SendGrid)
- [ ] WhatsApp Business API
- [ ] Instagram Feed API

#### 8.3 Monitoring

- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

---

### **FASE 9: Pre-Lanzamiento** 🚦

**Objetivo:** Revisión final antes de publicar

#### 9.1 Checklist Pre-Lanzamiento

- [ ] Lighthouse score > 90 en todas las categorías
- [ ] Todas las páginas funcionan correctamente
- [ ] Todos los formularios envían correctamente
- [ ] Links externos abren en nueva pestaña
- [ ] Links internos funcionan
- [ ] 404 page funciona
- [ ] Favicon y meta images configurados
- [ ] robots.txt configurado
- [ ] sitemap.xml generado
- [ ] SSL certificate instalado
- [ ] Domain y hosting configurados
- [ ] Email configurado
- [ ] Backup strategy definida

#### 9.2 SEO Checklist

- [ ] Google Search Console configurado
- [ ] Bing Webmaster Tools configurado
- [ ] Sitemap enviado
- [ ] robots.txt verificado
- [ ] Meta tags en todas las páginas
- [ ] Structured data válido
- [ ] Canonical URLs configurados
- [ ] No broken links

#### 9.3 Legal

- [ ] GDPR compliance (si aplica)
- [ ] Cookie consent banner
- [ ] Política de privacidad
- [ ] Términos y condiciones
- [ ] Copyright notices

---

### **FASE 10: Lanzamiento y Post-Lanzamiento** 🎉

**Objetivo:** Publicar y optimizar continuamente

#### 10.1 Lanzamiento

- [ ] Deploy a producción
- [ ] Verificar DNS propagation
- [ ] Testing post-deployment
- [ ] Verificar Analytics funcionando
- [ ] Anuncio en redes sociales
- [ ] Email a lista de clientes

#### 10.2 Post-Lanzamiento

- [ ] Monitorizar primeras 24-48h
- [ ] Recopilar feedback de usuarios
- [ ] Fix de bugs urgentes
- [ ] Optimización basada en datos reales

#### 10.3 Mantenimiento Continuo

- [ ] Actualización de contenido mensual
- [ ] Publicación de blog (semanal/mensual)
- [ ] Actualización de menú
- [ ] Actualización de eventos
- [ ] Revisión de Analytics mensual
- [ ] SEO optimization continua
- [ ] Actualizaciones de seguridad
- [ ] Backup regular

---

## 🛠️ Stack Tecnológico Recomendado

### Core

- **Framework:** Astro 5+
- **CSS:** Tailwind CSS 4+
- **TypeScript:** Para type safety
- **React:** Para componentes interactivos (Islands)

### Optimización

- **Imágenes:** Sharp, Astro Image
- **Fonts:** Fontsource (auto-hosted)
- **Icons:** Lucide Icons o similar

### SEO

- **Sitemap:** @astrojs/sitemap
- **Schema.org:** Custom implementation
- **Analytics:** Google Analytics 4

### Forms & Backend

- **Validation:** Zod
- **Email:** Resend / SendGrid / Nodemailer
- **API Routes:** Astro API endpoints

### Testing & QA

- **Lighthouse:** Integrado en DevTools
- **Accessibility:** axe DevTools
- **SEO:** Screaming Frog, Ahrefs

---

## 📈 Métricas de Éxito

### Performance

- ✅ Lighthouse Performance: > 95
- ✅ Lighthouse SEO: 100
- ✅ Lighthouse Accessibility: > 95
- ✅ Lighthouse Best Practices: 100
- ✅ LCP: < 2.5s
- ✅ FID: < 100ms
- ✅ CLS: < 0.1

### SEO

- ✅ Indexación en Google: 100%
- ✅ Rich results en SERP
- ✅ Featured snippets (objetivo)
- ✅ Local Pack ranking (top 3)

### Business

- ✅ Incremento de reservas online
- ✅ Incremento de llamadas/emails
- ✅ Reducción bounce rate
- ✅ Incremento tiempo en página
- ✅ Mejor posicionamiento vs competencia

---

## 📝 Notas Importantes

### Prioridades

1. **SEO y Performance** - No negociable
2. **Mobile-first** - Mayoría de usuarios en móvil
3. **Contenido de calidad** - Fotos profesionales
4. **Usabilidad** - Fácil de navegar
5. **Velocidad** - Carga ultrarrápida

### Best Practices

- Commits frecuentes y descriptivos
- Branch strategy: main, develop, feature branches
- Code reviews
- Testing antes de merge
- Documentation inline
- README actualizado

### Recursos Necesarios

- **Tiempo estimado:** 3-6 semanas (dependiendo de disponibilidad)
- **Fotografía profesional:** Presupuesto recomendado
- **Copywriting:** Considerar copywriter profesional
- **Hosting:** VPS o Cloud (Vercel, Netlify, Cloudflare Pages)
- **Domain:** .com o .es

---

## 🎯 Próximos Pasos Inmediatos

1. ✅ **Revisar y aprobar este plan**
2. **Fase 1.1** - Configuración base
3. **Fase 1.2** - SEO foundation
4. **Fase 2** - Componentes base
5. **Fase 3.1** - Homepage completa
6. Continue step by step...

---

**¿Listo para empezar? 🚀**

_Este plan está vivo y puede ajustarse según necesidades y feedback durante el desarrollo._
