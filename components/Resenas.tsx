"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/SplitLines";
import MagneticButton from "@/components/MagneticButton";
import { resenas } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const Estrellas = ({ className = "" }: { className?: string }) => (
  <span className={className} role="img" aria-label="5 de 5 estrellas">
    <span aria-hidden="true">★★★★★</span>
  </span>
);

/**
 * "Reseñas": nota de Google que sube contando y muro de citas
 * literales en cascada. Fondo tinta para cortar entre el verde
 * de La locura y el hueso de Visítanos.
 */
export default function Resenas() {
  const rootRef = useRef<HTMLElement>(null);
  const notaRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const nota = notaRef.current;
      if (nota) {
        const destino = Number(resenas.nota.replace(",", "."));
        const contador = { valor: 0 };
        gsap.to(contador, {
          valor: destino,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            nota.textContent = contador.valor.toFixed(1).replace(".", ",");
          },
          scrollTrigger: { trigger: nota, start: "top 85%", once: true },
        });
      }

      gsap.fromTo(
        ".resena-card",
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".resenas-muro", start: "top 80%", once: true },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="resenas"
      ref={rootRef}
      className="relative overflow-hidden bg-tinta py-24 text-hueso md:py-36"
    >
      <div className="px-5 md:px-10">
        <SplitLines as="h2" className="display text-[clamp(2.6rem,8vw,7rem)]">
          <>No lo decimos</>
          <>
            nosotros, <span className="text-verde">lo dicen ellos</span>
          </>
        </SplitLines>
      </div>

      <div className="mt-14 flex flex-col items-start gap-8 px-5 md:mt-20 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="flex items-end gap-6">
          <p className="display leading-[0.8] text-[clamp(4.5rem,13vw,10rem)] text-verde">
            <span ref={notaRef}>{resenas.nota}</span>
          </p>
          <div className="pb-2">
            <Estrellas className="block text-xl tracking-[0.15em] text-queso md:text-2xl" />
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-hueso/60">
              {resenas.total} reseñas en {resenas.fuente}
            </p>
          </div>
        </div>

        <MagneticButton
          href={resenas.url}
          external
          cursorLabel="LEER"
          className="display rounded-full border-2 border-hueso px-8 py-4 text-lg transition-colors hover:bg-hueso hover:text-tinta"
        >
          Ver todas en Google
        </MagneticButton>
      </div>

      <div className="resenas-muro mt-16 columns-1 gap-5 px-5 md:mt-20 md:columns-2 md:gap-6 md:px-10 lg:columns-3">
        {resenas.items.map((r, i) => (
          <figure
            key={r.autor}
            className={`resena-card mb-5 break-inside-avoid rounded-2xl border-2 border-hueso bg-hueso p-6 text-tinta md:mb-6 ${
              i % 3 === 1 ? "-rotate-1" : i % 3 === 2 ? "rotate-1" : ""
            } ${i >= 4 ? "hidden md:block" : ""}`}
          >
            <Estrellas className="block text-base tracking-[0.15em] text-verde-oscuro" />
            <blockquote className="mt-4 text-lg leading-snug md:text-xl">
              “{r.texto}”
            </blockquote>
            <figcaption className="mt-5 flex items-baseline justify-between gap-3 border-t-2 border-tinta/15 pt-3">
              <span className="display text-lg">{r.autor}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-tinta/50">
                {r.fecha}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
