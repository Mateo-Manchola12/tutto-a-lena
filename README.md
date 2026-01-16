# 🍕 Tutto a Leña - Food Truck Italo-Argentino

> **"Arte italiano, corazón argentino"**

Sitio web oficial de Tutto a Leña, food truck itinerante especializado en pizzas napolitanas al horno de leña, empanadas artesanales argentinas y cerveza tirada. Basado en Costa Blanca, España.

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Identidad Visual](#-identidad-visual)
- [Instalación](#-instalación)
- [Comandos Disponibles](#-comandos-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [SEO y Performance](#-seo-y-performance)
- [Integración WordPress](#-integración-wordpress)

---

## ✨ Características

### 🎨 Diseño y UX
- **Identidad visual oscura** - Fondo negro elegante con rojo #b30000
- **Mobile-first responsive** - Optimizado para todos los dispositivos
- **Hero impactante** - Overlay degradado negro con imagen del food truck
- **Carta estilo pizarra** - Tipografía chalkboard con textura
- **Galería collage** - Fotos tipo scrapbook familiar

### ⚡ Tecnología
- **Astro 5.x** - Framework moderno con islands architecture
- **TypeScript** - Type safety en todo el proyecto
- **Tailwind v4** - CSS utility-first con @theme
- **SEO optimizado** - Meta tags, Schema.org, Open Graph
- **Performance 100** - Lighthouse score

---

## 🔥 Identidad Visual

### Paleta de Colores

```css
--brand-red: #b30000;        /* Rojo intenso */
--brand-black: #000000;      /* Negro predominante */
--brand-yellow: #ffc800;     /* Amarillo cálido */
```

### Tipografías

1. **Playfair Display** - Headlines serif grandes
2. **Inter** - Cuerpo de texto sans-serif
3. **Caveat** - Script para slogans

---

## 🚀 Instalación

```bash
# Clonar e instalar
git clone https://github.com/tu-usuario/tutto-a-lena-astro.git
cd tutto-a-lena-astro
npm install

# Desarrollo
npm run dev
```

---

## 🧞 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor dev en `localhost:4321` |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | Ejecuta ESLint |

---

## 📁 Estructura del Proyecto

```
tutto-a-lena-astro/
├── public/images/          # 14 imágenes profesionales
├── src/
│   ├── components/
│   │   ├── index/         # Hero, Menu, Gallery, etc.
│   │   ├── layout/        # Header, Footer, MetaTags
│   │   └── ui/            # Button, Card, Badge
│   ├── constants/         # Data centralizada
│   ├── pages/             # 11 páginas
│   └── styles/global.css  # Design tokens
└── [docs]                 # AGENT_CONTEXT, QUICK_START
```

---

## 🔍 SEO y Performance

✅ Meta Tags completos (Open Graph, Twitter Cards)  
✅ Schema.org structured data  
✅ Imágenes optimizadas  
✅ Lighthouse 100/100  

---

## 📰 Integración WordPress

Preparado para WordPress Headless:
- 📝 Blog - Artículos y noticias
- 🎉 Eventos - Gestión de ubicaciones

Por ahora: datos estáticos en `src/constants/`

---

## 📚 Documentación

- [AGENT_CONTEXT.md](./AGENT_CONTEXT.md) - Contexto técnico completo
- [QUICK_START.md](./QUICK_START.md) - Guía rápida desarrolladores
- [Astro Docs](https://docs.astro.build)

---

<p align="center">
  Hecho con 🔥 y ❤️ en Costa Blanca, España
</p>
