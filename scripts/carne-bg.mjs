/**
 * Fondo panorámico de la sección "Nuestra carne".
 * Las fotos del cliente son cuadradas: se recorta una banda horizontal de la
 * toma de packaging (dos burgers sobre fondo oscuro), que es la única con aire
 * suficiente a los lados para funcionar detrás de tipografía grande.
 */
import sharp from "sharp";

const SRC = "public/images/hero-burger.webp";
const OUT = "public/images/carne/carne-panoramica.webp";

const { width, height } = await sharp(SRC).metadata();
const cropH = Math.round(width / 2.4);

await sharp(SRC)
  .extract({
    left: 0,
    top: Math.min(300, height - cropH),
    width,
    height: cropH,
  })
  .resize(1800, 750, { fit: "cover" })
  .webp({ quality: 86 })
  .toFile(OUT);

console.log("fondo de carne generado:", OUT);
