# AGENT_CONTEXT.md

## 🎯 Estado Actual del Proyecto

**Proyecto**: Tutto a Leña - Sitio web restaurante con pizzas a leña
**Framework**: Astro 5.x + React islands
**Estado**: Fase 3 - Refinamiento visual y de contenido
**Última actualización**: 16 enero 2026

---

## 📁 Estructura Principal

```
tutto-a-lena-astro/
├── src/
│   ├── components/
│   │   ├── index/          # Secciones homepage (Hero, Menu, About, Gallery, etc.)
│   │   ├── layout/         # Layout components (Header, Footer, Nav, MetaTags, Schema, Breadcrumbs)
│   │   ├── ui/             # UI base (Button, Card, Badge, Icon)
│   │   └── media/          # Image component
│   ├── constants/          # Data centralizada
│   │   ├── business.ts     # Info negocio (dirección, teléfono, horarios, schema.org)
│   │   ├── menu.ts         # 48 items de menú en 6 categorías
│   │   ├── events.ts       # Eventos próximos
│   │   ├── testimonials.ts # Reseñas de clientes
│   │   ├── faqs.ts         # 18 preguntas frecuentes
│   │   ├── gallery.ts      # Galerías de imágenes
│   │   ├── social.ts       # Redes sociales
│   │   └── site_map.ts     # Rutas y meta SEO
│   ├── lib/                # Utilidades (SEO, imágenes, DOM)
│   ├── pages/              # Páginas del sitio (index, carta, eventos, contacto, etc.)
│   ├── styles/
│   │   └── global.css      # CSS + design tokens
│   └── types/              # TypeScript definitions
├── public/
│   ├── images/             # Imágenes del proyecto React (hero-food-truck.jpg, pizza-and-beer.jpg, etc.)
│   └── robots.txt
├── PLAN_DESARROLLO.md      # Plan maestro de 10 fases
├── ESTRUCTURA_PROYECTO.md  # Explicación técnica
├── QUICK_START.md          # Guía rápida para continuar
└── README.md               # Documentación principal
```

---

## 🎨 Sistema de Diseño (React Reference)

### Colores de React Reference

- **Background**: Negro/gris muy oscuro (`#000` - `#0F0F0F`)
- **Primary/Accent**: Rojo intenso (`#DC2626` - `#EF4444`) para CTAs y destacados
- **Text Primary**: Blanco (`#FFFFFF`) para títulos principales
- **Text Secondary**: Gris claro (`#9CA3AF`) para descripciones
- **Borders/Outline**: Gris oscuro para botones outline

### Tipografías de React Reference

- **Display Headlines**: Serif grande (Playfair Display) en mayúsculas para "SABOR AUTÉNTICO"
- **Accent Text**: Serif rojo en mayúsculas para "AL FUEGO"
- **Subtitle Script**: Cursiva roja para "Arte italiano, corazón argentino"
- **Body**: Sans-serif claro (Inter) para descripciones

### Componentes UI Base

- `Button.astro` - 4 variantes (primary, secondary, outline, ghost) y 3 tamaños
- `Card.astro` - Cards con imagen y contenido
- `Badge.astro` - Etiquetas con estados
- `Container.astro` - Wrapper con max-width responsive
- `Section.astro` - Secciones con título/subtítulo opcionales

---

## 📊 Estado de Fases

### ✅ Fase 1: Fundación (COMPLETADA)

- 1.1: Config Astro optimizada, build con terser, cache headers, security headers
- 1.2: SEO foundation (MetaTags, Schema, Breadcrumbs, robots.txt, 404)
- 1.3: Data structure (business, menu, events, FAQs, gallery, testimonials)

### ✅ Fase 2: Componentes UI (COMPLETADA)

- Design tokens (70+ CSS variables)
- Componentes base reutilizables (Button, Card, Badge, Icon, Image)
- Layout components (Container, Section)
- Lint configurado (ESLint + Astro)

### 🔄 Fase 3: Páginas y Contenido (EN PROGRESO)

- **Completado**:

  - 11 páginas creadas (index, carta, donde-estamos, catering, eventos, contacto, blog, reservar, política, términos, 404)
  - Build exitoso
  - Navegación funcional
  - Imágenes copiadas desde proyecto React

- **Pendiente**:
  - ⚠️ **PRIORIDAD MÁXIMA**: Replicar diseño oscuro de React reference
    - Hero: fondo negro con overlay, imagen del horno a la derecha, texto blanco/rojo
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
