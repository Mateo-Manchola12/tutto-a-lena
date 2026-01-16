# 📁 Estructura del Proyecto - Visión General

## 🏗️ Arquitectura de Carpetas

```
tutto-a-lena-astro/
│
├── 📄 PLAN_DESARROLLO.md           ← Plan maestro (todas las fases)
├── 📄 FASE_1_1_COMPLETADA.md       ← Resumen Fase 1.1
├── 📄 FASE_1_2_COMPLETADA.md       ← Resumen Fase 1.2
├── 📄 FASE_1_3_COMPLETADA.md       ← Resumen Fase 1.3
├── 📄 RESUMEN_EJECUTIVO.md         ← Resumen general proyecto
├── 📄 README.md
├── 📄 astro.config.mjs             ✅ OPTIMIZADO
├── 📄 tsconfig.json
├── 📄 package.json
│
├── 📁 public/
│   ├── 📄 robots.txt               ✅ CREADO - Optimizado para SEO
│   └── 📁 images/                  (Carpeta para imágenes, a llenar)
│       ├── 📁 gallery/
│       ├── 📁 menu/
│       ├── 📁 location/
│       └── 📁 events/
│
├── 📁 src/
│   │
│   ├── 📁 assets/                  (Recursos estáticos)
│   │
│   ├── 📁 components/
│   │   ├── 📁 index/               (Componentes de homepage)
│   │   │   ├── About.astro
│   │   │   ├── Blog.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Events.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Menu.astro
│   │   │   └── SubHero.astro
│   │   │
│   │   ├── 📁 layout/              (Componentes de layout)
│   │   │   ├── Breadcrumbs.astro   ✅ CREADO - Navegación + Schema
│   │   │   ├── Footer.astro
│   │   │   ├── Header.astro
│   │   │   ├── MetaTags.astro      ✅ MEJORADO - Meta tags completos
│   │   │   ├── NavMenu.astro
│   │   │   └── Schema.astro        ✅ CREADO - JSON-LD
│   │   │
│   │   └── 📁 ui/                  (Componentes UI base - TODO Fase 2)
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Badge.astro
│   │       ├── Icon.astro
│   │       ├── Image.astro
│   │       └── ... más componentes
│   │
│   ├── 📁 constants/               ✅ FASE 1.3 - Data centralizada
│   │   ├── business.ts             ✅ Info del negocio
│   │   ├── design-tokens.ts        ✅ Sistema de tokens
│   │   ├── events.ts               ✅ 5 eventos
│   │   ├── faqs.ts                 ✅ 18 preguntas frecuentes
│   │   ├── gallery.ts              ✅ Galerías de imágenes
│   │   ├── menu.ts                 ✅ Menú completo (48 items)
│   │   ├── site_map.ts             ✅ Rutas del sitio
│   │   ├── social.ts               ✅ Redes sociales
│   │   ├── static_paths.ts
│   │   └── testimonials.ts          ✅ 6 reseñas
│   │
│   ├── 📁 layouts/
│   │   └── Layout.astro            (Layout principal)
│   │
│   ├── 📁 lib/
│   │   ├── dom-selector.ts
│   │   ├── image-utils.ts          ✅ CREADO - Optimización imágenes
│   │   └── seo-utils.ts            ✅ CREADO - Utilidades SEO
│   │
│   ├── 📁 pages/                   (Rutas del sitio)
│   │   ├── index.astro             (Homepage)
│   │   ├── 404.astro               ✅ CREADO - Página error personalizada
│   │   ├── 📁 carta/ → index.astro (Menú)
│   │   ├── 📁 donde-estamos/ → index.astro
│   │   ├── 📁 catering/ → index.astro
│   │   ├── 📁 eventos/ → index.astro
│   │   ├── 📁 contacto/ → index.astro
│   │   ├── 📁 blog/ → index.astro
│   │   └── ... más páginas (TODO Fase 3)
│   │
│   ├── 📁 styles/
│   │   ├── global.css              ✅ OPTIMIZADO - CSS Variables
│   │   └── ... archivos de estilos
│   │
│   └── 📁 types/
│       └── pageTypes.d.ts          ✅ EXPANDIDO - 7+ tipos
│
├── 📁 .astro/                      (Build cache)
├── 📁 node_modules/                (Dependencias)
└── 📁 dist/                        (Build output)
```

---

## 🎯 Mapeo de Contenido a Componentes

### Homepage (/)

```
index.astro
├── Header
│   └── MetaTags + Schema (restaurant)
├── Hero
│   └── Imágenes hero gallery
├── MenuTeaser
│   └── 6 pizzas populares
├── SubHero
│   └── Propuesta de valor
├── About
│   └── Historia del restaurante
├── Gallery
│   └── Galería del local (10-15 fotos)
├── Testimonials (NEW)
│   └── 5-6 reseñas aleatorias
├── Events (NEW)
│   └── 3 eventos próximos
├── Contact
│   └── Formulario + información
├── FAQ (NEW - opcional)
│   └── 5 preguntas principales
└── Footer
```

### Página de Menú (/carta)

```
carta/index.astro
├── MenuHero
├── MenuCategories (sticky nav)
├── MenuSection x 6
│   ├── Pizzas (6 items)
│   ├── Pastas (4 items)
│   ├── Carnes (3 items)
│   ├── Entradas (3 items)
│   ├── Postres (3 items)
│   └── Bebidas (4 items)
├── MenuFilters
├── MenuDownload (PDF)
└── FAQSection
```

### Página de Ubicación (/donde-estamos)

```
donde-estamos/index.astro
├── LocationHero
├── Breadcrumbs
├── LocationMap
├── LocationInfo
├── HowToGetThere
└── LocationGallery (fotos del local)
```

### Página de Catering (/catering)

```
catering/index.astro
├── CateringHero
├── Breadcrumbs
├── CateringServices
├── CateringMenus
├── CateringProcess
├── CateringGallery
└── CateringQuoteForm
```

### Página de Eventos (/eventos)

```
eventos/index.astro
├── EventsHero
├── Breadcrumbs
├── EventsList / EventsCalendar
├── EventCard x N
└── PrivateEventsBanner
```

### Página de Contacto (/contacto)

```
contacto/index.astro
├── ContactHero
├── Breadcrumbs
├── ContactForm
├── ContactInfo
├── ContactMap
├── ContactSocial
└── FAQSection
```

---

## 📊 Flujo de Datos

### Flujo Central

```
Constantes (src/constants/)
    ↓
Utilidades (src/lib/)
    ↓
Componentes (src/components/)
    ↓
Páginas (src/pages/)
    ↓
Layout + MetaTags
    ↓
HTML + JSON-LD (SEO)
```

### Ejemplo Práctico: Menú

```
menu.ts (const PIZZAS, PASTAS, etc.)
    ↓
getPopularItems() (utilidad)
    ↓
MenuItem.astro (componente)
    ↓
carta/index.astro (página)
    ↓
<MetaTags> (Open Graph)
<Schema type="restaurant"> (JSON-LD)
```

---

## 🔄 Ciclo de Actualización

### Para actualizar DATOS:

```
1. Editar src/constants/*.ts
2. Los cambios reflejan automáticamente en:
   - Todas las páginas que use esa const
   - Meta tags dinámicos
   - Schemas JSON-LD
   - Búsqueda/filtros
3. No requiere rebuild completo
```

### Para agregar PÁGINAS:

```
1. Crear folder en src/pages/
2. Agregar index.astro
3. Importar constantes necesarias
4. Usar MetaTags + Schema
5. Agregar a site_map.ts
6. El sitemap se genera automáticamente
```

### Para actualizar DISEÑO:

```
1. Modificar design-tokens.ts
2. Los componentes usan variables CSS
3. Cambios globales al instante
4. No requiere editar componentes
```

---

## 🚀 Build Process

```
npm run dev
    ↓
Astro dev server (http://localhost:4321)
    ↓
Hot reload en cambios

npm run build
    ↓
TypeScript checking
    ↓
Astro compilation
    ↓
Optimización assets
    ↓
dist/ (ready to deploy)
```

---

## 📈 Performance Considerations

### Lazy Loading

```
Eagerly loaded:
- Hero images
- Critical above-fold content

Lazy loaded:
- Gallery images
- Below-fold sections
- Event cards
- Testimonial images
```

### Caching Strategy

```
Inmutable (1 año):
- Assets (images, fonts, CSS, JS)

Revalidable (1 hora):
- HTML

No cache:
- API calls (si aplica)
```

### Image Optimization

```
Formatos:
- AVIF (high-quality, small size)
- WebP (good browser support)
- JPEG (fallback)

Sizes (responsive):
- 320px (mobile)
- 640px (tablet)
- 1024px (desktop)
- 1280px (wide desktop)
```

---

## 🔐 Security Headers

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Cache-Control: public, max-age=31536000, immutable
```

---

## 📱 Responsive Breakpoints

```
xs:  320px (mobile)
sm:  640px (large mobile)
md:  768px (tablet)
lg:  1024px (desktop)
xl:  1280px (wide desktop)
2xl: 1536px (ultra-wide)
```

---

## 🎨 Design System Reference

```
Colors:
- Primary: #FF8860 (Terracota)
- Neutral: #1F1E18 a #FFFFFF
- Accent: #2D5016 (Italian Green)

Typography:
- Display: Playfair Display (headings)
- Body: Inter (paragraphs)
- Script: Caveat (decorative)

Spacing: 8px base (4, 8, 12, 16, 24, 32, 48, 64...)
Shadows: xs → 2xl (elegantes para restaurante)
```

---

## 🔗 Links Útiles

### Archivos de Referencia

- [Design Tokens](/src/constants/design-tokens.ts)
- [Business Info](/src/constants/business.ts)
- [Menú Completo](/src/constants/menu.ts)
- [SEO Utils](/src/lib/seo-utils.ts)
- [Image Utils](/src/lib/image-utils.ts)

### Documentación

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Schema.org](https://schema.org)

---

## ✅ Checklist Antes de Iniciar Fase 2

- [ ] ¿Están todos los TODOs de datos actualizados?
- [ ] ¿Se probó `npm run dev` sin errores?
- [ ] ¿Se verificó la estructura de carpetas?
- [ ] ¿Se revisó que constantes tengan datos reales?
- [ ] ¿Se confirmó que no hay enlaces rotos?

---

**Actualización:** 16 de Enero 2026
**Status:** ✅ Fases 1.1, 1.2, 1.3 Completadas
**Próximo:** Fase 2 - Sistema de Diseño y Componentes
