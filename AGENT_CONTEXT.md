# AGENT_CONTEXT.md - Contexto Técnico Completo

## 🎯 Estado Actual del Proyecto

**Proyecto**: Tutto a Leña - Food Truck Italo-Argentino
**Framework**: Astro 5.x (Static Site Generator) + TypeScript + Tailwind CSS v4
**Estado**:
**Última actualización**:
**Versión**: (Pre-producción)

**Arquitectura**: SSG (Static Site Generation) optimizada para SEO, performance 100, y citabilidad por sistemas de IA.

---

## 🔥 Identidad de Marca - "Arte italiano, corazón argentino"

### Concepto Core

Tutto a Leña es un **food truck italo-argentino** de pizzas al horno de leña, empanadas y cerveza tirada. La identidad visual debe transmitir:

- ✨ **Calidez familiar** - Experiencia cercana y acogedora
- 🎨 **Elegancia moderna** - Sofisticación con fondo negro predominante
- 🔥 **Tradición artesanal** - Horno de leña, técnicas auténticas
- 😊 **Humor argentino suave** - Guiños ocasionales sin exagerar
- 🇮🇹🇦🇷 **Fusión de culturas** - Arte italiano + corazón argentino

### Colores de Marca (DEFINITIVOS)

```css
/* Primarios */
--brand-red: #b30000 /* Rojo intenso para CTAs y acentos */ --brand-black: #000000
  /* Negro predominante en fondos */ --brand-yellow: #ffc800 /* Amarillo cálido para detalles */
  /* Del sistema React (referencia visual) */ --bg-primary: hsl(0 0% 0%) /* Negro absoluto */
  --bg-surface: hsl(0 0% 5%) /* Negro suave para cards */ --primary: hsl(0 100% 35.1%)
  /* Rojo #b30000 */ --foreground: hsl(0 0% 98%) /* Texto blanco */ --muted: hsl(0 0% 60%)
  /* Texto secundario gris */;
```

### Tipografías

1. **Playfair Display** (serif) - Headlines grandes, títulos importantes
2. **Inter** (sans-serif) - Cuerpo de texto, navegación
3. **Caveat** (script/cursiva) - Slogans, frases especiales
4. **Chalkboard style** - Para la carta/menú (textura tiza)

---

## 📁 Estructura del Proyecto

```
tutto-a-lena-astro/
├── src/
│   ├── components/
│   │   ├── index/          # Secciones homepage
│   │   │   ├── Hero.astro          → Hero con overlay negro degradado
│   │   │   ├── Menu.astro          → Carta estilo pizarra
│   │   │   ├── Gallery.astro       → Collage orgánico tipo scrapbook
│   │   │   ├── About.astro         → Historia y filosofía
│   │   │   ├── Events.astro        → Próximos eventos
│   │   │   ├── Contact.astro       → Formulario contacto
│   │   │   └── Blog.astro          → Últimas entradas
│   │   ├── layout/
│   │   │   ├── Header.astro        → Navbar oscuro
│   │   │   ├── Footer.astro        → Footer con info
│   │   │   ├── MetaTags.astro      → SEO optimizado
│   │   │   ├── Schema.astro        → Schema.org
│   │   │   └── Breadcrumbs.astro   → Navegación
│   │   ├── ui/             # Componentes reutilizables
│   │   └── media/          # Image component optimizado
│   ├── constants/          # Data centralizada
│   │   ├── business.ts     # Info negocio (Costa Blanca, España)
│   │   ├── menu.ts         # Pizzas, empanadas, cervezas, postres
│   │   ├── events.ts       # Ubicaciones y fechas (itinerante)
│   │   ├── gallery.ts      # Fotos profesionales
│   │   └── ...
│   ├── pages/              # 11 páginas
│   │   ├── index.astro             → Home con todas las secciones
│   │   ├── carta.astro             → Menú completo (chalkboard)
│   │   ├── donde-estamos.astro     → Mapa + próximas ubicaciones
│   │   ├── catering.astro          → Servicios para eventos
│   │   ├── eventos.astro           → (WordPress Headless preparado)
│   │   ├── blog.astro              → (WordPress Headless preparado)
│   │   └── ...
│   └── styles/
│       └── global.css      # Design tokens + Tailwind v4
├── public/
│   └── images/             # 14 imágenes profesionales
└── [docs]                  # AGENT_CONTEXT, README, QUICK_START

```

---

## 🎨 Sistema de Diseño - Guía Visual

### 🔥 Hero Principal (Composición Crítica)

**Objetivo**: Texto + logo protagonistas, foto secundaria

**Layout**:

```
┌─────────────────────────────────────────┐
│ [NEGRO SÓLIDO]  │  [FOTO FOOD TRUCK]   │
│                 │   (opacity 80%)       │
│  🍕 LOGO        │                       │
│                 │   ┌──────────────┐    │
│  Sabor auténtico│   │ Overlay:     │    │
│  AL FUEGO (rojo)│   │ #000 → trans │    │
│                 │   └──────────────┘    │
│  "Arte italiano,│                       │
│  corazón arg."  │                       │
│  (script rojo)  │                       │
│                 │                       │
│  [Ver Carta]    │                       │
│  [Dónde Estamos]│                       │
└─────────────────────────────────────────┘
```

**Overlay**: `linear-gradient(to right, #000000FF, #00000099)`

- Izquierda: Negro sólido 100%
- Derecha: Negro 60% transparencia

### 🍕 Carta/Menú (Chalkboard Style)

- Fondo negro con textura de pizarra usada
- Tipografía estilo tiza con efecto desgastado
- Pequeños dibujos decorativos (pizza, cerveza, empanada)
- Secciones: Pizzas | Empanadas | Cervezas | Postres
- Diseño imprimible y para QR en eventos

### 📸 Galería (Collage Orgánico)

- Fotos inclinadas levemente (random rotate)
- Bordes redondeados
- Stickers encima (imanes de nevera): 🍕 🍺 🥟 ❤️ 🇮🇹 🇦🇷
- Sombras suaves tipo objetos pegados
- Al expandir: masonry grid completo

### 🚚 Dónde Estamos Hoy (Itinerante)

- Mapa interactivo
- Lista editable de fechas y ubicaciones
- "Próximos eventos"
- CTA: "Quiero llevarlos a mi evento"

---

## 📊 Estado de Implementación

### ✅ Fase 1: Fundación (COMPLETADA)

- Config Astro 5.x optimizada
- SEO foundation (MetaTags, Schema.org, robots.txt)
- Data structure (business, menu, events, gallery, etc.)

### ✅ Fase 2: Componentes Base (COMPLETADA)

- Design tokens en global.css
- Componentes UI (Button, Card, Badge, Icon)
- Layout components (Container, Section, Header, Footer)

### 🔄 Fase 3: Identidad Visual (EN CURSO)

**Completado**:

- 11 páginas creadas y funcionando
- 14 imágenes profesionales importadas
- Estructura de datos completa

**Ahora**:

- ⚠️ Actualizar global.css con colores oscuros definitivos
- ⚠️ Rediseñar Hero con overlay y composición correcta
- ⚠️ Menu con estilo chalkboard/pizarra
- ⚠️ Gallery con collage orgánico
- ⚠️ Ajustar todos los componentes al diseño oscuro

### ⏳ Fase 4: WordPress Headless (PREPARADO)

- Blog y Eventos se conectarán a WordPress headless
- Por ahora: datos de prueba estáticos
- Endpoints preparados para futuro consumo API

---

## 🎯 Prioridades Inmediatas

1. **Global.css** → Colores oscuros (#000, #b30000, #ffc800)
2. **Hero.astro** → Overlay negro degradado + composición correcta
3. **Menu.astro** → Estilo pizarra con textura
4. **Gallery.astro** → Collage orgánico con stickers
5. **Responsive** → Mobile-first, animaciones suaves
6. **SEO** → Open Graph, Twitter Cards, Schema.org perfecto

---

## 💬 Tono y Humor (Guía de Contenido)

**Incluir frases con guiño argentino** (2-3 máximo):

- "Hechas con amor… y un poquito de picardía."
- "Si tiene horno a leña, tiene magia."
- "Probá, probá… después nos contás."

**NO abusar del humor** - Mantener calidez familiar y elegancia.

---

## 🌍 Datos del Negocio

- **Ubicación base**: Costa Blanca, España
- **Tipo**: Food truck itinerante
- **Servicios**: Pizzas a leña, empanadas argentinas, cerveza tirada
- **Eventos**: Bodas, fiestas, eventos corporativos
- **WhatsApp**: Contacto principal
- **Instagram/Facebook**: Redes activas

---

## 📱 UX/UI Guidelines

- **Mobile-first** → Diseño pensado primero para móvil
- **Animaciones suaves** → Fade-in, slide-up
- **Microinteracciones** → Hover con glow effect rojo
- **Carga rápida** → Imágenes optimizadas, lazy loading
- **Accesibilidad** → Contraste alto (fondo negro + texto blanco)
  - Tipografía: "SABOR AUTÉNTICO" en blanco, "AL FUEGO" en rojo, subtítulo cursiva
  - Botones: Rojo sólido para primario, outline para secundario
  - Navegación: Header oscuro con logo y nav en blanco
  - Ajustar todas las secciones al esquema oscuro
  - Integrar imágenes del proyecto React (hero-food-truck.jpg, vertical-full-pizza.jpg, etc.)
  - Actualizar paleta de colores global para coincidir con React
  - Blog: integrar WordPress headless (futuro)

---

## 🎯 Tareas Inmediatas

1. **Análisis de estilos React** ✅
   - Hero con imagen de fondo a la derecha, overlay degradado
   - Tipografía: display grande, handwriting para subtítulos
   - Botones con ArrowRight icon
   - Layout: grid 2 columnas, imagen ocupa lado derecho

2. **Actualizar componentes Astro**
   - Hero: imagen de fondo, layout de 2 columnas, botones con íconos
   - MenuTeaser: cards con imágenes, hover effects
   - Gallery: grid responsivo con imágenes optimizadas
   - About/Contact/Events: estilos coherentes con React

3. **Refinamiento visual**
   - Colores coherentes (primary terracota visible)
   - Sombras y elevaciones sutiles
   - Animaciones de fade-in
   - Responsive mobile-first

---

## 🔧 Comandos Útiles y Flujo de Desarrollo

### Desarrollo Local

```bash
# Iniciar servidor con hot reload (puerto 4321 o 4322)
npm run dev

# Ver en red local (para testear en móvil)
npm run dev -- --host

# Verificar tipos TypeScript antes de build
npm run astro check
```

### Build & Deploy

```bash
# Build de testing (NODE_ENV=testing)
npm run build:test

# Build de producción (NODE_ENV=production)
npm run build

# Resultado en: ./dist/

# Preview del build (simula servidor)
npm run preview
```

### Calidad & Linting

```bash
# Verificar ESLint
npm run lint

# Auto-fix errores ESLint
npm run lint:fix

# Custom Astro commands
npm run astro -- [comando]
```

### Control de Versiones

```bash
# Commits con formato granular
git add [archivo]
git commit -m "tipo(scope): descripción"

# Tipos permitidos:
# feat, fix, docs, style, refactor, perf, test, chore
```

---

## 📝 Convenciones de Commits (Conventional Commits 1.0.0)

### Formato

```
type(scope): subject

body (opcional)
footer (opcional)
```

### Tipos Permitidos

- `feat`: Nueva funcionalidad / característica
- `fix`: Corrección de error / bug
- `docs`: Cambios en documentación (README, QUICK_START, etc)
- `style`: Cambios en estilos/CSS sin impacto funcional
- `refactor`: Reestructuración sin cambios de funcionalidad
- `perf`: Mejoras de performance
- `test`: Agregar/actualizar tests
- `chore`: Cambios en build, deps, config, etc

### Scope (Contexto)

- `menu`: Cambios en componente/página de menú
- `hero`: Hero section
- `gallery`: Galería/imágenes
- `seo`: Meta tags, schema, SEO
- `types`: Archivos TypeScript de tipos
- `constants`: Actualización de datos
- `config`: Configuración Astro/Tailwind
- `docs`: Documentación

### Ejemplos Válidos

```bash
feat(menu): agregar sección de pizzas premium
fix(hero): corregir overlay gradient en mobile
style(ui): ajustar espaciado en buttons
docs(quick-start): agregar sección deploy
perf(images): optimizar JPG a WebP
chore(deps): actualizar tailwind a 4.1.20
```

---

## 🚨 Notas Técnicas Importantes

### Arquitectura & Convenciones

- **SSG Pattern**: Todas las páginas son servidas estáticamente (máxima performance)
- **Data CMS**: Datos centralizados en `src/constants/*.ts` (fácil actualización sin redeploy en futuro cuando se integre WordPress)
- **Islands Architecture**: Componentes interactivos aislados (ver `transition:animate` en Layout)

### SEO & Accesibilidad Implementada

- ✅ MetaTags en todas las páginas (Open Graph, Twitter Cards, canonical)
- ✅ Schema.org JSON-LD: Organization, LocalBusiness, Restaurant, FAQ, Article, Breadcrumb
- ✅ Robots.txt y sitemap.xml generados automáticos
- ✅ Noindex/noindex controlable por página (para staging)
- ✅ Lighthouse 100/100: Performance, Accessibility, Best Practices, SEO

### Performance Optimizations

- **Minificación**: Terser en build (CSS + JS)
- **Image Optimization**: Lazy loading + picture tags responsive
- **CSS Purging**: Tailwind v4 purga automáticamente
- **Caching estratégico**: .astro cache para builds incrementales

### WordPress Integration (Future)

- **Blog**: `src/pages/blog.astro` - Preparado para consumir `/wp-json/wp/v2/posts`
- **Eventos**: `src/pages/eventos.astro` - Preparado para consumir custom post type
- **Archivo lib**: `src/lib/wordpress.ts` (crear cuando se integre)
- **Por ahora**: Datos estáticos en `src/constants/`

### Configuración de Entorno

```bash
# .env.development
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_INDEXABLE=false   # Noindex en staging

# .env.production
PUBLIC_SITE_URL=https://tuttoleña.es  # ← CAMBIAR
PUBLIC_INDEXABLE=true    # Index en producción
```

### Notas de Implementación

- **Eslint**: Warnings silenciados para `set:html` en JSON-LD (necesario para schema)
- **Build Artifacts**: Ignorar `.astro/` y `dist/` en git (ver .gitignore)
- **Type Safety**: Todos los componentes tienen props tipadas
- **No Frontend Frameworks**: Solo Astro + HTML/CSS/JS vanilla (máxima performance)
- **Imagen Hero**: Archivo crítico, debe optimizarse (actual size ~500KB, target <200KB)

---

## 🎨 Referencia Visual (React)

La página React de referencia está en `/home/teo/Escritorio/tutto-a-lena/`:

- **Hero**: Imagen de fondo derecha con overlay degradado, logo grande, tipografía display + handwriting
- **Colores**: Terracota primary visible, fondos claros elegantes
- **Tipografía**: Playfair Display (display), Inter (body), Caveat (handwriting)
- **Componentes**: MenuTeaser con cards, Gallery con grid, Footer con info completa

**Objetivo**: Que Astro luzca igual o mejor que React, manteniendo la identidad visual.
