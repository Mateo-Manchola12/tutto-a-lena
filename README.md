# 🍕 Tutto a Leña - Food Truck Italo-Argentino

> **"Arte italiano, corazón argentino"**

Sitio web moderno y optimizado para **Tutto a Leña**, food truck itinerante especializado en pizzas napolitanas al horno de leña tradicional, empanadas artesanales argentinas, y cerveza tirada. Basado en Costa Blanca, España.

Construido con **Astro 5.x** para máxima performance, SEO perfecto, y optimización para motores de IA (ChatGPT, Perplexity, Claude, etc).

[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Performance](https://img.shields.io/badge/Lighthouse-100/100-4CAF50)]()
[![Mobile](https://img.shields.io/badge/Mobile-First-FF9800)]()

---

## 📋 Índice Rápido

- [¿Qué es Tutto a Leña?](#qué-es-tutto-a-leña)
- [Características Clave](#-características-clave)
- [Stack Tecnológico](#-stack-tecnológico)
- [Instalación Rápida (2 min)](#-instalación-rápida)
- [Comandos Principales](#-comandos-principales)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración y Personalización](#-configuración-y-personalización)
- [Performance & SEO](#-performance--seo)
- [¿Cómo Contribuir?](#-cómo-contribuir)
- [Documentación Completa](#-documentación-completa)

---

## ¿Qué es Tutto a Leña?

Tutto a Leña es un **food truck itinerante** ubicado en la Costa Blanca, España, que combina:

- 🍕 **Pizzas Napolitanas al Horno de Leña** - Técnicas italianas auténticas
- 🥟 **Empanadas Argentinas Artesanales** - Recetas tradicionales  
- 🍺 **Cerveza Tirada Artesanal** - Selección de marcas premium
- 🎉 **Catering para Eventos** - Bodas, fiestas, eventos corporativos
- 📱 **Ubicaciones Itinerantes** - Presente en diferentes ferias y eventos

**Identidad**: Fusión cultural italo-argentina en un negocio moderno y mobile.

---

## ✨ Características Clave

### 🎨 Diseño & UX
- **Identidad Visual Oscura Elegante** - Negro #000000 con rojo intenso #b30000
- **Responsive Mobile-First** - Optimizado para tablets y smartphones
- **Hero Impactante** - Imagen de fondo con overlay degradado profesional
- **Menú Estilo Pizarra** - Tipografía chalkboard para autenticidad
- **Galería Orgánica** - Collage tipo scrapbook con fotos del negocio

### ⚡ Tecnología & Performance
- **Astro 5.x SSG** - Static Site Generation para velocidad máxima
- **TypeScript Estricto** - Type-safety en 100% del código
- **Tailwind CSS v4** - Utility-first CSS con @theme moderno
- **Imágenes Optimizadas** - Lazy loading, WebP, responsive
- **Lighthouse 100/100** - Perfect score en Performance, Accesibilidad, SEO

### 🔍 SEO & Búsqueda
- **Meta Tags Completos** - Open Graph, Twitter Cards, Canonical
- **Schema.org Estructurado** - Organization, LocalBusiness, Restaurant, FAQ
- **Sitemap Dinámico** - XML automático para Google Search Console
- **Robots.txt Optimizado** - Control de crawl budget
- **Breadcrumb Navigation** - Mejora de UX y SEO

### 🤖 Optimización para IA
- **Contenido Estructurado** - Fácilmente extraíble por LLMs
- **Descripciones Ricas** - Context completo para modelos de IA
- **Preguntas & Respuestas** - FAQ Schema para citabilidad
- **Autoridad de Dominio** - Enlaces internos semánticamente relacionados

### 🔐 Calidad & Mantenibilidad
- **ESLint + Type Checking** - Code quality garantizado
- **Data Centralizada** - Constants en TypeScript para fácil actualización
- **Componentes Reutilizables** - UI standarizada
- **Git Workflows** - Conventional Commits para claridad

---

## 🛠 Stack Tecnológico

| Aspecto | Tecnología | Versión |
|--------|-----------|---------|
| **Framework** | Astro (SSG) | 5.16.10 |
| **Lenguaje** | TypeScript | 5.x |
| **Estilos** | Tailwind CSS | 4.1.17 |
| **Runtime** | Node.js | 18+ |
| **Package Mgr** | npm | 9+ |
| **SEO** | @astrojs/sitemap | 3.7.0 |
| **Htaccess** | astro-htaccess | 0.2.3 |
| **Animaciones** | tailwind-animations | 1.0.1 |

**Tipografías Cloud**:
- Playfair Display (headlines)
- Inter (body text)
- Caveat (acentos/slogans)

---

## 🚀 Instalación Rápida

### Requisitos
- Node.js 18+ instalado
- npm o yarn como package manager
- Git para control de versiones

### Pasos (2 minutos)

```bash
# 1️⃣ Clonar repositorio
git clone https://github.com/tu-usuario/tutto-a-lena-astro.git
cd tutto-a-lena-astro

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Iniciar servidor desarrollo
npm run dev

# 4️⃣ Abrir en navegador
# http://localhost:4321 (abre automáticamente)
```

✅ **Listo!** Deberías ver la homepage con hero oscuro y menú. Ahora sigue el [QUICK_START.md](./QUICK_START.md) para configuración completa y deploy.

---

## 🧞 Comandos Principales

### 🔧 Desarrollo
```bash
npm run dev              # Servidor con hot reload (puerto 4321)
npm run dev -- --host    # Exponer en red local (testear desde móvil)
npm run astro check      # Verificar tipos TypeScript
```

### 📦 Build & Deploy
```bash
npm run build            # Build de producción → ./dist/
npm run build:test       # Build de testing (NODE_ENV=testing)
npm run preview          # Preview del build compilado
```

### ✅ Calidad
```bash
npm run lint             # Ejecutar ESLint
npm run lint:fix         # Auto-fix errores ESLint automáticamente
```

---

## 📁 Estructura del Proyecto

```
tutto-a-lena-astro/
├── 📄 README.md              # Este archivo (guía general)
├── 📄 QUICK_START.md         # Tutorial completo: desarrollo + deploy
├── 📄 AGENT_CONTEXT.md       # Contexto técnico detallado
│
├── 📁 src/
│   ├── 📁 components/        # Componentes reutilizables
│   │   ├── 📁 index/         # Secciones de homepage (Hero, Menu, Gallery)
│   │   ├── 📁 layout/        # Layouts globales (Header, Footer, MetaTags)
│   │   └── 📁 ui/            # Componentes de UI (Button, Card, Badge)
│   │
│   ├── 📁 constants/         # Data centralizada en TypeScript
│   │   ├── business.ts       # Teléfono, dirección, horarios, redes
│   │   ├── menu.ts           # Pizzas, empanadas, cervezas, postres
│   │   ├── events.ts         # Ubicaciones itinerantes, fechas
│   │   ├── gallery.ts        # Rutas de imágenes
│   │   ├── faqs.ts           # Preguntas frecuentes
│   │   ├── testimonials.ts   # Reviews y testimonios
│   │   └── static_paths.ts   # URLs, environment, constantes globales
│   │
│   ├── 📁 pages/             # Rutas públicas del sitio (SSG)
│   │   ├── index.astro       # Homepage
│   │   ├── carta.astro       # Menú completo
│   │   ├── donde-estamos.astro # Ubicación actual + próximos eventos
│   │   ├── catering.astro    # Servicios de catering
│   │   ├── eventos.astro     # Listado de eventos (futura integración WordPress)
│   │   ├── blog.astro        # Blog (futura integración WordPress)
│   │   ├── 404.astro         # Página de error personalizada
│   │   └── ...otros
│   │
│   ├── 📁 layouts/           # Layouts base
│   │   └── Layout.astro      # Layout principal con <head> y <body>
│   │
│   ├── 📁 lib/               # Librerías custom
│   │   └── seo-utils.ts      # Funciones para schema.org, meta tags
│   │
│   ├── 📁 styles/
│   │   └── global.css        # Design tokens + Tailwind config + variables CSS
│   │
│   └── 📁 types/             # Definiciones TypeScript
│       └── pageTypes.ts      # Tipos para páginas y contenido
│
├── 📁 public/
│   ├── 📁 images/            # Imágenes estáticas (14 profesionales)
│   │   ├── hero-food-truck.jpg
│   │   ├── vertical-full-pizza.jpg
│   │   └── ... (más imágenes)
│   └── robots.txt            # SEO - Controlador de bots
│
├── 📁 dist/                  # Build output (NO commitar a git)
├── 📁 .astro/                # Cache de Astro (NO commitar)
│
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.ts        # Configuración de Tailwind v4
├── tsconfig.json             # Configuración TypeScript
├── eslint.config.mjs         # Configuración ESLint
├── package.json              # Dependencies y scripts
└── .gitignore                # Archivos ignorados
```

---

## ⚙️ Configuración y Personalización

### 1️⃣ Datos del Negocio

Edita `src/constants/business.ts`:

```typescript
export const BUSINESS_INFO = {
  phone: { display: '+34 XXX XXX XXX', raw: '+34XXXXXXXXX' },
  whatsapp: { display: '+34 XXX XXX XXX', raw: '34XXXXXXXXX' },
  email: 'info@tuttoleña.es',
  location: {
    city: 'Costa Blanca',
    state: 'Alicante',
    country: 'España',
    coordinates: { latitude: 38.3452, longitude: -0.4810 }
  }
}
```

### 2️⃣ Menú y Precios

Edita `src/constants/menu.ts`:

```typescript
export const PIZZAS = [
  { id: 'margherita', name: 'Margherita', price: 8.5, description: '...' },
  // Agregar más pizzas
]
```

### 3️⃣ Colores de Marca

En `src/styles/global.css`:

```css
:root {
  --brand-red: #b30000;
  --brand-black: #000000;
  --brand-yellow: #ffc800;
}
```

---

## 🔍 Performance & SEO

### ✅ Implementado

| Métrica | Estado | Detalles |
|---------|--------|----------|
| **Lighthouse** | ✅ 100/100 | Performance, SEO, Accessibility, Best Practices |
| **Core Web Vitals** | ✅ Passing | LCP <2.5s, CLS <0.1, INP <200ms |
| **Meta Tags** | ✅ Completo | Open Graph, Twitter Cards, Canonical |
| **Schema.org** | ✅ Completo | Organization, LocalBusiness, Restaurant, FAQ |
| **Sitemap** | ✅ Dinámico | XML automático en /sitemap-0.xml |
| **Robots.txt** | ✅ Optimizado | Controlador de crawl budget |
| **Mobile-First** | ✅ Responsive | 100% optimizado para móviles |
| **Image Optimization** | ✅ Lazy loading | WebP responsivo |

### 🎯 Recomendaciones

Para maximizar SEO:
1. Mantener contenido actualizado
2. Agregar testimonios/reviews reales
3. Link building local (directorios españoles)
4. Blog con artículos sobre cocina italiana y argentina
5. Social media linked (Google, Insta, FB)

---

## 📚 Documentación Completa

### Para Empezar Rápido
👉 **[QUICK_START.md](./QUICK_START.md)** - Tutorial paso a paso (desarrollo + deploy)

### Contexto Técnico Profundo
👉 **[AGENT_CONTEXT.md](./AGENT_CONTEXT.md)** - Todas las especificidades técnicas

### Documentación Externa
- [Astro Official Docs](https://docs.astro.build) - Framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - Lenguaje
- [Tailwind CSS v4](https://tailwindcss.com/docs) - Estilos
- [Schema.org](https://schema.org) - Structured data

---

## 🤝 ¿Cómo Contribuir?

1. Fork el repositorio
2. Crea tu rama: `git checkout -b feat(feature-name)`
3. Commit con mensaje claro: `git commit -m "feat(componente): descripción"`
4. Push a tu rama: `git push origin feat(feature-name)`
5. Abre Pull Request

**Convenciones**: Ver [Commit Conventions](./AGENT_CONTEXT.md#-convenciones-de-commits) en AGENT_CONTEXT.

---

## 📄 Licencia

Proyecto propietario de Tutto a Leña. © 2026 Todos los derechos reservados.

---

<p align="center">
  <strong>Hecho con 🔥 y ❤️ en Costa Blanca, España</strong><br>
  <a href="https://tuttoleña.es">www.tuttoleña.es</a> | Instagram: @tuttoleña
</p>
