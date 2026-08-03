import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveals from "@/components/ScrollReveals";
import type { LegalSection } from "@/lib/legal";

type Props = {
  titulo: string;
  subtitulo: string;
  intro: readonly string[];
  secciones: readonly LegalSection[];
};

/**
 * Plantilla de páginas legales: mismo marco (nav + footer) que la home,
 * con una columna de lectura sobria sobre fondo hueso.
 */
export default function LegalPage({ titulo, subtitulo, intro, secciones }: Props) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Nav />
      <ScrollReveals />
      <main className="px-5 pb-24 pt-32 md:px-10 md:pt-40">
        <header className="mx-auto max-w-3xl border-b-2 border-tinta pb-10" data-scroll-reveal="up">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-verde-oscuro">
            {subtitulo}
          </p>
          <h1 className="display text-[clamp(2.6rem,9vw,5.5rem)]">{titulo}</h1>
        </header>

        <div className="mx-auto max-w-3xl">
          <div className="mt-10 space-y-4 text-base leading-relaxed text-tinta/80 md:text-lg" data-scroll-reveal="up">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {secciones.map((sec) => (
            <section key={sec.titulo} className="mt-14" data-scroll-reveal="up">
              <h2 className="display text-2xl md:text-3xl">{sec.titulo}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-tinta/80">
                {sec.bloques.map((b, i) => {
                  if (b.tipo === "parrafo") return <p key={i}>{b.texto}</p>;
                  if (b.tipo === "lista")
                    return (
                      <ul key={i} className="ml-5 list-disc space-y-2 marker:text-verde-oscuro">
                        {b.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    );
                  return (
                    <dl key={i} className="grid gap-2 border-l-2 border-verde pl-5">
                      {b.items.map((d) => (
                        <div key={d.clave} className="flex flex-wrap gap-x-2">
                          <dt className="font-bold text-tinta">{d.clave}:</dt>
                          <dd>{d.valor}</dd>
                        </div>
                      ))}
                    </dl>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
