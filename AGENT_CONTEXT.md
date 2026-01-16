# AGENT_CONTEXT.md

## 🎯 Estado Actual del Proyecto

**Proyecto**: Tutto a Leña - Food Truck Italo-Argentino
**Framework**: Astro 5.x + React islands
**Estado**: Fase 3 - Implementación de Identidad Visual
**Última actualización**: 16 enero 2026

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
--brand-red: #b30000        /* Rojo intenso para CTAs y acentos */
--brand-black: #000000      /* Negro predominante en fondos */
--brand-yellow: #ffc800     /* Amarillo cálido para detalles */

/* Del sistema React (referencia visual) */
--bg-primary: hsl(0 0% 0%)           /* Negro absoluto */
--bg-surface: hsl(0 0% 5%)           /* Negro suave para cards */
--primary: hsl(0 100% 35.1%)         /* Rojo #b30000 */
--foreground: hsl(0 0% 98%)          /* Texto blanco */
--muted: hsl(0 0% 60%)               /* Texto secundario gris */
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

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev          # Puerto 4321 o 4322

# Calidad
npm run lint         # ESLint para .astro
npm run build        # Build producción (terser minify)
npm run preview      # Preview del build

# Git (commits granulares)
git add <archivos>
git commit -m "tipo(scope): mensaje descriptivo"
```

---

## 📝 Convenciones de Commits

- `feat(componente)`: Nueva funcionalidad
- `fix(página)`: Corrección de bug
- `style(ui)`: Cambios visuales/CSS
- `refactor(lib)`: Refactorización sin cambios funcionales
- `docs(...)`: Cambios en documentación
- `chore(config)`: Cambios de configuración/herramientas

---

## 🚨 Notas Importantes

- **Blog**: Se usará WordPress headless (NO implementar ahora)
- **Imágenes**: Están en `public/images/` copiadas desde React
- **Build**: Requiere `terser` instalado como devDependency
- **Lint**: Configurado con warnings silenciados para `set:html` en JSON-LD
- **SEO**: Todas las páginas tienen MetaTags, Schema y Breadcrumbs implementados
- **Datos**: Centralizado en `src/constants/` - actualizar con valores reales del negocio

---

## 🎨 Referencia Visual (React)

La página React de referencia está en `/home/teo/Escritorio/tutto-a-lena/`:

- **Hero**: Imagen de fondo derecha con overlay degradado, logo grande, tipografía display + handwriting
- **Colores**: Terracota primary visible, fondos claros elegantes
- **Tipografía**: Playfair Display (display), Inter (body), Caveat (handwriting)
- **Componentes**: MenuTeaser con cards, Gallery con grid, Footer con info completa

**Objetivo**: Que Astro luzca igual o mejor que React, manteniendo la identidad visual.
