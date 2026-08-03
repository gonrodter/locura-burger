/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO CENTRAL — Desata la Locura / Locura Burger
 *  Todos los textos, datos de negocio e imágenes se editan aquí.
 *  Ningún componente de animación contiene datos del negocio.
 *
 *  Fuentes verificadas (jul/ago 2026):
 *   - Instagram @desatalalocura (bio, dirección, teléfono, links)
 *   - Carta oficial: r.qamarero.com/hamburgueseria-locura
 *  Los campos marcados PLACEHOLDER necesitan material real del cliente.
 * ─────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "Locura Burger",
  shortName: "LOCURA",
  claim: "Un sabor para desatar tu LOCURA",
  instagramHandle: "@desatalalocura",
  instagramUrl: "https://www.instagram.com/desatalalocura/",
  tiktokUrl: "https://www.tiktok.com/@desatala.locura",
} as const;

export const contact = {
  addressLine: "C/ Matadero, 28",
  city: "Villamartín (Cádiz)",
  postalCode: "11650",
  phone: "611 59 87 13",
  phoneHref: "tel:+34611598713",
  // CID de la ficha real, no una búsqueda por texto.
  mapsUrl: "https://www.google.com/maps?cid=12888922028821746732",
} as const;

export const ordering = {
  cartaUrl: "https://r.qamarero.com/hamburgueseria-locura",
  reservasUrl: "https://booking.qamarero.com/new-reservation/hamburgueseria-locura",
  domicilioNota: "Pedido a domicilio por teléfono",
} as const;

export const hours = {
  resumen: "Miércoles a domingo · 20:30 — 00:00",
  dias: [
    { dia: "Lunes", horario: "Cerrado" },
    { dia: "Martes", horario: "Cerrado" },
    { dia: "Miércoles", horario: "20:30 – 00:00" },
    { dia: "Jueves", horario: "20:30 – 00:00" },
    { dia: "Viernes", horario: "20:30 – 00:00" },
    { dia: "Sábado", horario: "20:30 – 00:00" },
    { dia: "Domingo", horario: "20:30 – 00:00" },
  ],
} as const;

/**
 * Reseñas reales de Google (leídas de la ficha el 3/08/2026).
 * Se citan literales, recortadas solo a frases completas.
 * Al actualizarlas hay que revisar también nota y total.
 */
export const resenas = {
  nota: "4,4",
  total: 362,
  fuente: "Google",
  // El bloque !9m1!1b1 abre la ficha directamente en la pestaña Reseñas.
  url: "https://www.google.com/maps/place/Hamburgueser%C3%ADa+Locura/@36.8622027,-5.6428088,17z/data=!4m8!3m7!1s0xd0d751fa8f243c9:0xb2dea64bf9a0942c!9m1!1b1!8m2!3d36.8622027!4d-5.6428088!16s%2Fg%2F11qbv7n502",
  items: [
    {
      autor: "Andrea Crespo",
      fecha: "Julio 2026",
      texto:
        "Bendita locura desde luego, granadinos viviendo en Jerez y ya es la segunda vez que paramos aquí, y no será la última!",
    },
    {
      autor: "Viajeros.sabrosos",
      fecha: "Mayo 2026",
      texto:
        "Si te gustan las hamburguesas de verdad, de las que no tienen competencia, este sitio de Villamartín es una locura.",
    },
    {
      autor: "Helena Sánchez Ruiz",
      fecha: "Junio 2026",
      texto:
        "La mejor hamburguesería que he probado. El servicio excepcional y la calidad inmejorable. Volveré sin duda.",
    },
    {
      autor: "Miguel Moreno",
      fecha: "Febrero 2026",
      texto:
        "Sitio muy moderno y chulo, sillas muy cómodas. La atención de las camareras fue de 10.",
    },
    {
      autor: "Elvira Díaz Betancor",
      fecha: "Julio 2026",
      texto: "Las patatas increíble y la hamburguesa muy buena. Merece la pena mucho.",
    },
    {
      autor: "Fran Vilches",
      fecha: "Mayo 2026",
      texto: "Increíblemente buenas las hamburguesas.",
    },
  ],
} as const;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Hamburguesas", href: "#hamburguesas" },
  { label: "Nuestra carne", href: "#la-carne" },
  { label: "La locura", href: "#la-locura" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Visítanos", href: "#visitanos" },
] as const;

export type Burger = {
  slug: string;
  nombre: string;
  precio: string;
  descripcion: string;
  etiqueta?: string;
  imagen: string; // PLACEHOLDER hasta recibir fotos reales
};

/** Selección firmada de la carta real. Carta completa: ordering.cartaUrl */
export const burgers: Burger[] = [
  {
    slug: "yakuza",
    nombre: "Yakuza",
    precio: "15,00 €",
    etiqueta: "Campeonato de España 2025",
    descripcion:
      "200 g de carne Dry Aged, caramelo salado con jalapeños, cheddar madurado, cebolla caramelizada, mayo asiática y polvo de fritos.",
    imagen: "/images/burgers/yakuza.webp",
  },
  {
    slug: "tapa-arterias-2",
    nombre: "Tapa Arterias 2.0",
    precio: "16,00 €",
    etiqueta: "Campeonato de España 2026",
    descripcion:
      "200 g de carne Dry Aged, doble cheddar americano, doble de bacon, pulled pork, BBQ y mayo In-N-Out con un toque picante.",
    imagen: "/images/burgers/tapa-arterias.webp",
  },
  {
    slug: "singular",
    nombre: "Singular",
    precio: "13,00 €",
    etiqueta: "Homenaje a HUNDRED",
    descripcion:
      "150 g de carne Dry Aged, cheddar americano, crema de camembert, cebolla caramelizada, BBQ y doble de bacon.",
    imagen: "/images/burgers/singular.webp",
  },
  {
    slug: "original",
    nombre: "Original",
    precio: "12,50 €",
    etiqueta: "La de siempre",
    descripcion:
      "150 g de carne Dry Aged, crema de cacahuete, pepinillos, cebolla caramelizada y crispy, bacon, cheddar, BBQ y salsa Locura.",
    imagen: "/images/burgers/original.webp",
  },
  {
    slug: "messy-meat",
    nombre: "Messy Meat",
    precio: "15,00 €",
    etiqueta: "Para mancharse",
    descripcion:
      "150 g de carne Dry Aged picada en plancha con pulled pork, cebolla crujiente, BBQ, cheddar y bacon bits.",
    imagen: "/images/burgers/messy-meat.webp",
  },
  {
    slug: "bacon-jam",
    nombre: "Bacon Jam",
    precio: "15,00 €",
    etiqueta: "Dulce y ahumada",
    descripcion:
      "200 g de carne Dry Aged, crema de camembert, queso ahumado, mermelada de bacon y salsa Emmy.",
    imagen: "/images/burgers/bacon-jam.webp",
  },
];

export const carne = {
  titulo: "La carne manda",
  pasos: [
    {
      numero: "120",
      unidad: "días",
      titulo: "Maduración Dry Aged",
      texto:
        "Carne madurada 120 días. Concentración de sabor que no se puede imitar ni acelerar.",
    },
    {
      numero: "24",
      unidad: "h",
      titulo: "Picada cada día",
      texto:
        "Se pica y se bolea en el obrador cada día, nunca preformada. Después, aplastada contra el acero ardiendo.",
    },
    {
      numero: "300",
      unidad: "°C",
      titulo: "Reacción de Maillard",
      texto:
        "La corteza se carameliza, los bordes crujen y el interior se queda jugoso. Química a nuestro favor.",
    },
  ],
} as const;

export const locura = {
  titulo: "Detrás de la locura hay un método",
  frases: [
    "Picamos la carne cada día en el obrador.",
    "Salsas de la casa. Ninguna sale de un cubo.",
    "Dos hamburguesas llevadas al Campeonato de España.",
    "Villamartín en el mapa burger nacional.",
  ],
  // Comillas tipográficas: Anton no tiene glifo para « », se veían como << >>
  quote: "“O te vuelve loco o no lo hemos hecho bien.”",
} as const;

export const marqueeItems = [
  "Smash",
  "Dry Aged 120 días",
  "Buey gallego",
  "Pan artesano",
  "Salsas de la casa",
  "Villamartín",
] as const;

export const footer = {
  fraseFinal: "¿Lo oyes? Es tu cabeza pidiendo otra.",
  legal: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/politica-de-privacidad" },
  ],
} as const;

/**
 * IMÁGENES — todas son fotografía real de Locura Burger, tomadas de su carta
 * oficial (Qamarero) y optimizadas a webp en /public/images.
 *
 * PENDIENTE de material propio del cliente:
 *  - Fotos de ambiente: interior del local, equipo en cocina, clientes.
 *    Ahora esas tres piezas del collage usan bodegón de producto y packaging.
 *  - Un recorte de burger sobre fondo transparente daría más juego en el hero.
 */
export const images = {
  /** Wordmark oficial (PNG negro con alfa). En fondos oscuros se recolorea
   *  con mask-image, no con una segunda versión del archivo. */
  logo: "/images/logo-locura.png",
  logoRatio: 800 / 200,
  heroBurger: "/images/hero-burger.webp",
  plancha: "/images/carne/carne-panoramica.webp",
  // Collage de "La locura": platos de elaboración propia que no salen en
  // ninguna otra sección. Provisional hasta tener fotos de proceso.
  locura1: "/images/locura/obrador-1.webp",
  locura2: "/images/locura/obrador-2.webp",
  locura3: "/images/locura/obrador-3.webp",
} as const;
