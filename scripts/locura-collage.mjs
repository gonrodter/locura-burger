/**
 * Collage de la sección "Detrás de la locura hay un método".
 * Provisional: usa platos de elaboración propia que NO aparecen en ninguna
 * otra sección, para no repetir las fotos del escaparate ni la del hero.
 * Sustituir por fotos de proceso (obrador, salsas, plancha) cuando las haya.
 */
import sharp from "sharp";

const BASE = "media/restaurant/fdbebd6a-568b-4c43-81ee-41484bd77a75/";
const CF = "https://d2bmm19ntgdksj.cloudfront.net/";
const url = (key) =>
  CF +
  Buffer.from(
    JSON.stringify({
      bucket: "qamarero-backend-production-static-files",
      key: BASE + key,
      quality: 95,
      format: "jpeg",
    }),
  ).toString("base64");

const piezas = [
  ["product/1000397042.jpg", "obrador-1", 900, 1200], // Papas Locas
  ["product/1000397045.jpg", "obrador-2", 1200, 900], // Ignacios
  ["product/362738.jpg", "obrador-3", 1000, 1000], // Croquetas de chuletón
];

for (const [key, name, w, h] of piezas) {
  const res = await fetch(url(key));
  if (!res.ok) {
    console.log("FALLO", name, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf)
    .resize(w, h, { fit: "cover", position: "attention" })
    .webp({ quality: 84 })
    .toFile(`public/images/locura/${name}.webp`);
  console.log("ok", name);
}
