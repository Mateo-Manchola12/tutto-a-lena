# ✅ FASE 1.2 - SEO Foundation y Meta Tags

## Completado

### ✅ MetaTags.astro - Componente Completo

Ubicación: `src/components/layout/MetaTags.astro`

**Incluye:**

- Meta tags básicos (charset, viewport, description, keywords, robots)
- Canonical URLs automáticas
- **Open Graph** - Para Facebook, LinkedIn, WhatsApp
  - og:locale, og:type, og:title, og:description, og:image
  - Dimensiones de imagen: 1200x630px
- **Twitter Cards** - Optimizado para compartir
  - twitter:card, twitter:title, twitter:description, twitter:image
- **Article Meta Tags** - Para blog/contenido
  - article:published_time, article:modified_time
  - publish_date
- **Verificación de sitios** - Placeholders para:
  - Google Search Console
  - Bing Webmaster Tools
- **Apple Meta Tags** - Para dispositivos Apple
  - apple-mobile-web-app-capable
  - apple-touch-icon
- **Prefetch & DNS** - Optimizaciones de carga
  - Preconnect a fonts.googleapis.com
  - DNS prefetch a Google Analytics y GTM

### ✅ Schema.astro - Structured Data JSON-LD

Ubicación: `src/components/layout/Schema.astro`

**Soporta múltiples tipos:**

- Organization schema
- Restaurant schema
- LocalBusiness schema
- Breadcrumb schema
- FAQ schema
- Article schema
- Aggregate schema (para combinar múltiples)

**Características:**

- Generación automática según tipo
- Personalización con custom schemas
- Salida limpia como `<script type="application/ld+json">`

### ✅ Breadcrumbs.astro - Navegación + Schema

Ubicación: `src/components/layout/Breadcrumbs.astro`

**Incluye:**

- Componente visual accesible con `<nav>`
- Auto-generación de schema BreadcrumbList
- Indicador de página actual con `aria-current="page"`
- Estilos responsivos
- Accesibilidad WCAG 2.1

### ✅ robots.txt - Configuración SEO

Ubicación: `public/robots.txt`

**Contiene:**

- User-agent general y específicos (Googlebot, Bingbot)
- Reglas de Crawl-delay optimizadas
- Rutas excluidas (admin, private)
- Ubicaciones de sitemaps
- Configuración diferenciada por bot

### ✅ 404.astro - Página Personalizada

Ubicación: `src/pages/404.astro`

**Características:**

- Diseño elegante y profesional
- Botones CTA (Volver al inicio, Contactanos)
- Navegación rápida a secciones principales
- Sugerencias de páginas relacionadas
- Meta tags con `noindex: true`
- Schema.org integrado
- Responsive design (mobile-first)

### ✅ image-utils.ts - Utilidades de Imágenes

Ubicación: `src/lib/image-utils.ts`

**Funciones helper incluidas:**

- `generateSrcSet()` - Para responsive images
- `generateSizes()` - Atributo sizes automático
- `getImageDimensions()` - Dimensiones por contexto
- `getOptimizedImageUrl()` - URL optimizadas (CDN ready)
- `shouldLazyLoad()` - Lógica de lazy loading
- `getImagePlaceholder()` - LQIP (Low Quality Image Placeholder)
- `validateImage()` - Validación de formato
- `getImageA11yAttributes()` - Atributos de accesibilidad
- `getImageOptions()` - Opciones recomendadas por contexto

**Contextos soportados:**

- hero (eager, high quality, avif)
- card (lazy, medium quality, webp)
- thumbnail (lazy, medium quality, webp)
- gallery (lazy, high quality, avif)
- product (eager, high quality, avif)

## SEO Foundation Checklist

### ✅ Core SEO Elements

- ✅ Meta tags básicos completos
- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards
- ✅ Canonical URLs automáticas
- ✅ Robots meta tags
- ✅ Robots.txt configurado
- ✅ Sitemap automático (vía @astrojs/sitemap)

### ✅ Structured Data (JSON-LD)

- ✅ Organization schema
- ✅ Restaurant schema (con horarios)
- ✅ LocalBusiness schema
- ✅ BreadcrumbList schema
- ✅ FAQPage schema
- ✅ Article schema
- ✅ Aggregate schema

### ✅ Technical SEO

- ✅ 404 page personalizada con schema
- ✅ Image optimization utils
- ✅ Lazy loading strategy
- ✅ Responsive images setup
- ✅ Prefetch/DNS optimization

### ✅ Accessibility (A11y)

- ✅ Breadcrumbs con `aria-label` y `aria-current`
- ✅ Image alt attributes
- ✅ Semantic HTML

## Parámetros a Actualizar (TODO)

### En `.env.production` y `.env.development`:

```env
# Actualizar si el dominio cambia
PUBLIC_SITE_URL=https://tutto-a-lena.com
PUBLIC_INDEXABLE=true
```

### En `src/components/layout/MetaTags.astro`:

- [ ] Cambiar `meta[name="google-site-verification"]` - verificación real
- [ ] Cambiar `meta[name="msvalidate.01"]` - verificación Bing
- [ ] Revisar Twitter handle `@tuttoleña`

### En `src/lib/image-utils.ts`:

- [ ] Actualizar `/images/gallery/` paths con rutas reales
- [ ] Agregar más placeholders según imágenes reales

### En `public/robots.txt`:

- [ ] Cambiar URL de sitemap si es diferente
- [ ] Agregar rutas específicas a excluir si es necesario

## Testing Recomendado

### Verificar en Google Search Console:

```bash
# Copia en el HTML head (encontrar en MetaTags.astro)
<meta name="google-site-verification" content="XXX">
```

### Verificar Structured Data:

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### Verificar Open Graph:

- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/sharing
- Open Graph Preview: https://www.opengraphimage.com/

### Testing Local:

```bash
npm run dev
# Abirir http://localhost:4321/404 para probar página 404
# Inspeccionar elementos para verificar meta tags
```

## Integración en Layouts

### Uso en Layout.astro:

```astro
---
import MetaTags from '@/components/layout/MetaTags.astro'
import Schema from '@/components/layout/Schema.astro'
---

<head>
  <MetaTags
    title="Título página"
    description="Descripción meta"
    keywords={['palabra clave 1', 'palabra clave 2']}
  />
  <Schema type="restaurant" />
</head>
```

### Uso en páginas específicas:

```astro
---
import MetaTags from '@/components/layout/MetaTags.astro'
import Breadcrumbs from '@/components/layout/Breadcrumbs.astro'

const breadcrumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Menú', href: '/carta' },
]
---

<Breadcrumbs items={breadcrumbs} />
<MetaTags
  title="Nuestra Carta"
  description="Descubre nuestro menú..."
  ogImage="/images/menu-og.jpg"
/>
```

## Estadísticas

- ✅ 4 componentes mejorados/creados
- ✅ 2 utilidades creadas
- ✅ 1 página especial (404)
- ✅ 1 archivo de configuración (robots.txt)
- ✅ +200 líneas de código SEO-optimizado

## Próximos Pasos

### Fase 1.3: Estructura Final de Datos

- [ ] Crear archivo de menú completo (`menu.ts`)
- [ ] Crear archivo de testimonios (`testimonials.ts`)
- [ ] Crear archivo de eventos (`events.ts`)
- [ ] Crear archivo de FAQs (`faqs.ts`)
- [ ] Sincronizar todas las constantes

### Fase 2: Sistema de Diseño

- [ ] Crear componentes UI base (Button, Card, Badge, etc.)
- [ ] Crear componentes de layout mejorados
- [ ] Establecer sistema de animaciones

---

**Status: ✅ COMPLETO**
**Siguiente: Fase 1.3 - Estructura de Constantes Finales**
