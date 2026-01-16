# ⚡ Quick Start Guide - Tutto a Leña

## 🚀 Inicio Rápido (2 minutos)

### 1️⃣ Verificar que funciona

```bash
cd /home/teo/Escritorio/tutto-a-lena-astro
npm run dev
```

Abre `http://localhost:4321` - Deberías ver la homepage con hero oscuro.

---

## 📋 Checklist de Datos Reales

### 🔴 URGENTE - Actualizar Contacto

```typescript
// src/constants/business.ts
export const BUSINESS_INFO = {
  phone: {
    display: '+34 XXX XXX XXX', // ← CAMBIAR
    raw: '+34XXXXXXXXX',
  },
  whatsapp: {
    display: '+34 XXX XXX XXX', // ← CAMBIAR
    raw: '34XXXXXXXXX',
  },
  email: {
    display: 'info@tuttoleña.es', // ← CAMBIAR
    href: 'mailto:info@tuttoleña.es',
  },
}
```

### 🟡 IMPORTANTE - Ubicación y Redes

```typescript
// src/constants/business.ts - Ubicación Base
location: {
  street: '', // Food truck itinerante, no hay dirección fija
  city: 'Costa Blanca',
  state: 'Alicante',
  country: 'España',
  coordinates: {
    latitude: 38.3452, // ← GPS real Costa Blanca
    longitude: -0.4810,
  },
}

// src/constants/social.ts - Redes Sociales
export const SOCIAL_NETWORKS = {
  instagram: {
    url: 'https://instagram.com/tuttoleña', // ← CAMBIAR
    username: '@tuttoleña',
  },
  facebook: {
    url: 'https://facebook.com/tuttoleña', // ← CAMBIAR
  },
  whatsapp: {
    url: 'https://wa.me/34XXXXXXXXX', // ← CAMBIAR
  },
}
```

### 🟢 OPCIONAL - Ubicaciones Itinerantes

```typescript
// src/constants/events.ts - Próximas Ubicaciones
export const EVENTS = [
  {
    id: 'evento-1',
    title: 'Feria de Benidorm',
    date: new Date('2026-02-15'),
    location: 'Plaza Mayor, Benidorm',
    description: 'Estaremos en la feria gastronómica',
    featured: true,
  },
  // Agregar más eventos/ubicaciones
]
```

---

## 🍕 Menú y Carta

### Precios y Productos

```typescript
// src/constants/menu.ts

// PIZZAS - Actualizar nombres y precios
export const PIZZAS = [
  {
    id: 'margherita',
    name: 'Margherita',
    price: 8.50, // ← CAMBIAR PRECIO REAL
    description: 'Tomate, mozzarella, albahaca fresca',
  },
  // ... más pizzas
]

// EMPANADAS - Productos argentinos
export const EMPANADAS = [
  {
    id: 'carne',
    name: 'Empanada de Carne',
    price: 3.00, // ← CAMBIAR
    description: 'Carne picada, cebolla, especias',
  },
  // ... más empanadas
]

// CERVEZAS - Marcas disponibles
export const BEERS = [
  {
    id: 'ipa',
    name: 'IPA Artesanal',
    price: 4.50, // ← CAMBIAR
    size: '330ml',
  },
]
```

---

## 🎉 Eventos e Itinerario

### Gestionar Ubicaciones

```typescript
// src/constants/events.ts

export const EVENTS = [
  {
    id: 'unique-id',
    title: 'Nombre del evento',
    date: new Date('2026-MM-DD'),
    location: 'Dirección exacta',
    coordinates: {
      lat: 38.xxxx,
      lng: -0.xxxx,
    },
    featured: true, // Aparece destacado en home
    description: 'Descripción breve',
  },
]
```

**Notas**:
- Usar fechas futuras reales
- Coordenadas precisas para Google Maps
- `featured: true` para eventos importantes

---

## 📰 WordPress Headless (Preparado)

### Configuración Futura

El sitio está **preparado** para conectar con WordPress:

```typescript
// Crear archivo: src/lib/wordpress.ts

const WORDPRESS_API_URL = 'https://tu-wordpress.com/wp-json/wp/v2'

export async function getPosts() {
  const res = await fetch(`${WORDPRESS_API_URL}/posts`)
  return res.json()
}

export async function getEvents() {
  // Custom post type 'eventos'
  const res = await fetch(`${WORDPRESS_API_URL}/eventos`)
  return res.json()
}
```

### Páginas Afectadas

- `src/pages/blog.astro` - Consumirá `/posts`
- `src/pages/eventos.astro` - Consumirá `/eventos`

**Por ahora**: Datos estáticos en `src/constants/`

---

## 📸 Imágenes y Assets

### Imágenes Actuales (14 fotos)

```
public/images/
├── hero-food-truck.jpg          # Hero principal
├── oven-mosaic-front-face.jpg   # Horno con mosaico
├── vertical-full-pizza.jpg      # Pizza completa
├── pizza-slice-cool-photo.jpg   # Porción de pizza
├── empanada-realy-good-looking.jpg
├── pizza-and-beer.jpg
└── ... (más 8 imágenes)
```

### Agregar Nuevas Imágenes

1. Colocar en `public/images/`
2. Actualizar `src/constants/gallery.ts`:

```typescript
export const GALLERY_IMAGES = [
  {
    id: 'nueva-foto',
    src: '/images/nueva-foto.jpg',
    alt: 'Descripción',
    category: 'pizzas', // pizzas, empanadas, eventos, horno
  },
]
```

---

## 🎨 Ajustes Visuales

### Colores de Marca

Los colores ya están definidos en `src/styles/global.css`:

```css
--brand-red: #b30000;
--brand-black: #000000;
--brand-yellow: #ffc800;
```

**No cambiar** estos colores - son parte de la identidad.

### Textos con Humor Argentino

Ubicaciones actuales:
- Hero: "Si tiene horno a leña, tiene magia."
- Menu: "Probá, probá… después nos contás."
- About: "Hechas con amor… y un poquito de picardía."

**Regla**: Máximo 2-3 frases con guiño argentino, mantener elegancia.

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev              # localhost:4321
npm run dev -- --host    # Exponer en red local

# Build
npm run build            # Compila a ./dist/
npm run preview          # Preview del build

# Calidad
npm run lint             # ESLint
npm run lint:fix         # Auto-fix errores
npm run astro check      # Type checking
```

---

## 📊 Workflow de Commits

### Formato Granular

```bash
git add [archivo]
git commit -m "tipo(scope): descripción breve"
```

**Tipos**:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Estilos visuales
- `refactor`: Refactorización
- `perf`: Performance

**Ejemplos**:
```bash
git commit -m "feat(menu): actualizar precios pizzas"
git commit -m "fix(hero): corregir overlay gradient"
git commit -m "docs(readme): agregar sección WordPress"
```

---

## 🔍 Troubleshooting

### Problema: Build falla

```bash
npm run astro check
```

Revisar errores TypeScript.

### Problema: Imágenes no cargan

Verificar:
1. Ruta correcta en `public/images/`
2. Formato: `.jpg`, `.png`, `.webp`
3. Sin espacios en nombre de archivo

### Problema: Estilos no aplican

```bash
# Limpiar cache
rm -rf node_modules/.astro
npm run dev
```

---

## 📚 Recursos

- **AGENT_CONTEXT.md** - Contexto técnico completo
- **README.md** - Documentación general
- [Astro Docs](https://docs.astro.build)
- [Tailwind v4 Docs](https://tailwindcss.com/docs)

---

## ✅ Checklist Pre-Deploy

- [ ] Actualizar contacto (teléfono, email, WhatsApp)
- [ ] Agregar redes sociales reales
- [ ] Actualizar precios del menú
- [ ] Agregar eventos/ubicaciones futuras
- [ ] Verificar imágenes optimizadas
- [ ] Probar formulario de contacto
- [ ] Verificar SEO (meta tags, Schema.org)
- [ ] Test en móvil
- [ ] Lighthouse score 90+
- [ ] npm run build sin errores

---

<p align="center">
  <strong>¿Listo para empezar?</strong><br>
  <code>npm run dev</code> y comienza a personalizar! 🚀
</p>

### Opción C: Profesional (5-6 horas)

```
1. Datos + imágenes
2. Fase 2 (componentes)
3. Todas las páginas
4. Testing + optimización
```

---

## 📁 Archivos Clave Para Editar

### Ubicación: `/home/teo/Escritorio/tutto-a-lena-astro/src/constants/`

```
business.ts      ← Teléfono, dirección, horarios, redes
menu.ts          ← Precios, items, descripciones
events.ts        ← Fechas, precios, eventos
testimonials.ts  ← Testimonios reales de clientes
faqs.ts          ← Preguntas frecuentes
social.ts        ← URLs de redes sociales
gallery.ts       ← Rutas de imágenes
```

---

## 🖼️ Para Agregar Imágenes

### 1. Crear carpetas

```bash
mkdir -p public/images/{gallery,menu,location,events}
```

### 2. Copiar imágenes

```bash
# Ubicar imágenes en:
public/images/gallery/hero-1.jpg
public/images/menu/pizzas-1.jpg
public/images/location/interior-1.jpg
public/images/events/event-1.jpg
```

### 3. Actualizar rutas en constantes

```typescript
// src/constants/gallery.ts
export const HERO_GALLERY: GalleryImage[] = [
  {
    src: '/images/gallery/hero-1.jpg', // ← ACTUALIZAR RUTAS
    alt: '...',
  },
]
```

---

## 🎯 Próximos Pasos Directos

### Para Fase 2 (Sistema de Diseño):

Crear componentes UI base en `src/components/ui/`:

```typescript
// Button.astro
// Card.astro
// Badge.astro
// Icon.astro
// Image.astro
// Section.astro
// Container.astro
```

Luego crear componentes por sección en `src/components/index/`:

```typescript
// MenuTeaser.astro
// Gallery.astro
// Events.astro
// Testimonials.astro
// etc.
```

### Para Fase 3 (Páginas):

Crear archivos en `src/pages/`:

```
pages/
├── index.astro (HOMEPAGE)
├── 404.astro (HECHO ✅)
├── carta/
│   └── index.astro
├── donde-estamos/
│   └── index.astro
├── catering/
│   └── index.astro
├── eventos/
│   └── index.astro
└── contacto/
    └── index.astro
```

---

## 🧪 Testing

```bash
# Verificar TypeScript
npm run lint

# Dev server con hot reload
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

---

## 📊 Progress Tracker

```
Fase 1 ████████████████████ 100% ✅
├── 1.1 Configuración █████ 100% ✅
├── 1.2 SEO Foundation █████ 100% ✅
└── 1.3 Data Structure █████ 100% ✅

Fase 2 ░░░░░░░░░░░░░░░░░░░░░  0% ⏳
├── UI Components ░░░░░░
├── Layout Components ░░░░░░
└── Animation System ░░░░░░

Fase 3 ░░░░░░░░░░░░░░░░░░░░░  0% ⏳
├── Homepage ░░░░░░
├── Menu Page ░░░░░░
├── Location Page ░░░░░░
├── Events Page ░░░░░░
├── Catering Page ░░░░░░
└── Contact Page ░░░░░░
```

---

## 🔍 Verificación Rápida

Después de actualizar datos, verificar:

- [ ] `npm run dev` sin errores
- [ ] Visitar http://localhost:4321/404 (debe cargar)
- [ ] Abrir DevTools → Elements (revisar meta tags)
- [ ] Abrir DevTools → Network (revisar assets)
- [ ] Lighthouse audit (debería ser > 90)

---

## 📞 Contacto y Soporte

### Documentación Creada:

- `PLAN_DESARROLLO.md` - Plan maestro completo
- `RESUMEN_EJECUTIVO.md` - Resumen de lo hecho
- `ESTRUCTURA_PROYECTO.md` - Explicación de carpetas
- `FASE_1_1_COMPLETADA.md` - Detalles Fase 1.1
- `FASE_1_2_COMPLETADA.md` - Detalles Fase 1.2
- `FASE_1_3_COMPLETADA.md` - Detalles Fase 1.3

### Enlaces Útiles:

- Astro: https://docs.astro.build
- TypeScript: https://www.typescriptlang.org
- Tailwind: https://tailwindcss.com
- Schema.org: https://schema.org

---

## ⚡ TL;DR (Muy Rápido)

Si solo tienes 30 minutos:

1. **Abre un terminal:**

   ```bash
   cd /home/teo/Escritorio/tutto-a-lena-astro
   npm run dev
   ```

2. **Edita datos críticos en:**

   - `src/constants/business.ts` (teléfono, dirección)
   - `src/constants/menu.ts` (precios)

3. **Guarda y recarga** el navegador

4. **Verifica en DevTools** que los meta tags sean correctos

✅ **Done!** La base está lista. Ahora puedes continuar con Fase 2.

---

## 🎓 Arquitectura en 60 Segundos

```
Constantes (datos)
    ↓ Importar en
Componentes (UI)
    ↓ Usar en
Páginas (rutas)
    ↓ Con MetaTags + Schema
Salida HTML + SEO ✅
```

---

**Proyecto:** Tutto a Leña
**Fase Actual:** 1 Completada ✅ | Fase 2 Pendiente
**Tiempo Estimado:** 30 min (datos) → 3 horas (completo)
**Status:** 🟢 Ready to Continue
