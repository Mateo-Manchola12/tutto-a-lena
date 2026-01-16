# ⚡ Quick Start Guide - Cómo Continuar

## 🚀 Para Empezar Inmediatamente

### 1️⃣ Verificar que todo funciona

```bash
cd /home/teo/Escritorio/tutto-a-lena-astro
npm run dev
```

Debería abrir en `http://localhost:4321`

### 2️⃣ Actualizar Datos Críticos

Estos archivos DEBEN ser actualizados con datos reales:

#### 🔴 URGENTE:

```typescript
// src/constants/business.ts
export const BUSINESS_INFO = {
  phone: {
    display: '+54 (011) XXXX-XXXX', // ← CAMBIAR
    raw: '+541100000000', // ← CAMBIAR
  },
  whatsapp: {
    display: '+54 911 XXXX-XXXX', // ← CAMBIAR
    raw: '5491100000000', // ← CAMBIAR
  },
  location: {
    street: 'Calle Principal 123', // ← CAMBIAR
    city: 'Buenos Aires',
    coordinates: {
      latitude: -34.6037, // ← CAMBIAR (GPS real)
      longitude: -58.3816, // ← CAMBIAR (GPS real)
    },
  },
  hours: {
    monday: { open: '12:00', close: '23:00' }, // ← CAMBIAR según horarios
    // ... más horarios
  },
}
```

#### 🟡 IMPORTANTE:

```typescript
// src/constants/menu.ts
export const PIZZAS = [
  {
    id: 'pizza-1',
    name: 'Margherita',
    price: 450, // ← CAMBIAR PRECIOS REALES
    // ...
  },
]

// src/constants/social.ts
export const SOCIAL_NETWORKS = {
  facebook: {
    url: 'https://facebook.com/tuttoleña', // ← CAMBIAR
  },
  instagram: {
    url: 'https://instagram.com/tuttoleña', // ← CAMBIAR
  },
  // ...
}

// src/constants/events.ts
export const EVENTS = [
  {
    date: new Date('2026-02-14'), // ← CAMBIAR FECHAS REALES
    price: 850, // ← CAMBIAR PRECIOS
    // ...
  },
]
```

---

## 📝 Workflow Recomendado

### Opción A: Rápido (1-2 horas)

```
1. Actualizar datos en constants/*.ts
2. Probar npm run dev
3. Correr Fase 2 (componentes UI)
```

### Opción B: Completo (3-4 horas)

```
1. Actualizar todos los datos
2. Agregar imágenes reales
3. Correr Fase 2 (componentes UI)
4. Crear páginas básicas
```

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
