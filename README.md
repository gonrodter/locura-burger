# Locura Burger — Desata la Locura

Web one-page para **Locura Burger** (Villamartín, Cádiz). Smash burgers de carne
Dry Aged madurada 120 días. Dirección de arte inspirada en el nivel de
interacción de cravburgers.shop, adaptada por completo a la identidad de
@desatalalocura (verde marca, tinta, tipografía condensada, tono gamberro).

## Stack

- **Next.js 16** (App Router, salida 100% estática)
- **TypeScript** + **Tailwind CSS 4**
- **GSAP + ScrollTrigger** — timelines, secciones pinneadas, reveals
- **Lenis** — smooth scroll (solo desktop, desactivado con reduced-motion)
- Tipografías: **Anton** (display) + **Archivo** (texto), vía `next/font`

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npx tsc --noEmit   # tipos
npm run build      # build de producción (estática)
```

## Despliegue

Cualquier host de Next.js sirve. Lo más directo:

- **Vercel**: importar el repo y desplegar; sin configuración extra.
- Al ser estática, también vale `next build` + hosting estático detrás de un CDN.

## Dónde se edita el contenido

**Todo el contenido de negocio vive en `lib/content.ts`**: textos, carta,
horarios, teléfono, dirección, enlaces de pedido/reserva (Qamarero), redes y
rutas de imágenes. Ningún componente de animación contiene datos del negocio.

## Assets

Ya no quedan placeholders: todas las fotos son de Locura Burger, descargadas de
su carta oficial en Qamarero y optimizadas a webp en `public/images/`
(burgers a 1000×1000, hero a 1200×1200). El wordmark es
`public/images/logo-locura.png`, que además genera `app/favicon.ico` y
`app/apple-icon.png` (lienzo verde con el logo centrado).

Pendiente de que lo aporte el cliente:

| Qué | Para qué | Formato |
| --- | --- | --- |
| Fotos de ambiente: interior, equipo en cocina, clientes | Las tres piezas del collage de «La locura», que hoy usan bodegón y packaging | 3:4, 4:3, 1:1 |
| Recorte de burger sobre fondo transparente | Daría más juego en el hero que la foto enmarcada actual | ~1200×1200 png |
| Tipografía de marca | El wordmark del footer es texto (`.display`); al llegar la fuente se cambia ahí y deja de depender del PNG | woff2 |
| URLs de Aviso legal y Privacidad | `lib/content.ts → footer.legal` | — |

## Sistema de motion

- **Preloader** de marca (~2 s): contador + «Desatando la locura…», salida clip-path.
- **Hero**: titular con reveal por líneas enmascaradas, burger con parallax de puntero, sello giratorio, marquee.
- **Hamburguesas**: lista editorial con imagen sticky; el ítem activo cambia con scroll/hover. En móvil, carrusel con snap.
- **Nuestra carne**: sección pinneada con scrub — 120 días → smash → Maillard.
- **La locura**: collage con parallax multi-velocidad y reveals con clip-path.
- **Footer**: wordmark gigante que sube ligado al scroll.
- **Cursor**: punto + anillo interpolado, estados hover/etiqueta (PEDIR, RESERVAR, MAPA…), blend difference; desactivado en táctil.
- **Botones magnéticos** con retorno elástico.

Accesibilidad: `prefers-reduced-motion` elimina preloader, cursor, pins y
parallax (contenido siempre visible y en orden); navegación por teclado en el
menú (Escape cierra, foco al abrir), HTML semántico, focus visible.

## Datos verificados

Carta, precios, horario (mié–dom 20:30–00:00), dirección (C/ Matadero 28,
Villamartín) y teléfono (611 59 87 13) proceden de la carta oficial en
Qamarero y del perfil de Instagram @desatalalocura (jul/ago 2026).
