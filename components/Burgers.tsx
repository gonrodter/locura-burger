"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/SplitLines";
import MagneticButton from "@/components/MagneticButton";
import { burgers, ordering } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Escaparate editorial: en desktop la imagen queda fija (sticky)
 * mientras la lista de burgers se recorre; el ítem activo cambia
 * con el scroll. En móvil, carrusel horizontal con snap.
 */
export default function Burgers() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".burger-row");
      rows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="hamburguesas"
      ref={rootRef}
      className="relative bg-tinta text-hueso"
    >
      <div className="px-5 pt-24 md:px-10 md:pt-32">
        <SplitLines
          as="h2"
          className="display text-[clamp(2.6rem,8vw,7rem)]"
        >
          <>Nuestras burgers</>
          <>
            te van a <span className="text-verde">quitar el sueño</span>
          </>
        </SplitLines>
      </div>

      {/* Desktop: lista + imagen sticky */}
      <div className="hidden gap-10 px-10 pb-24 pt-16 md:grid md:grid-cols-2">
        <div>
          {burgers.map((b, i) => (
            <article
              key={b.slug}
              className={`burger-row border-t border-hueso/20 py-10 transition-opacity duration-300 ${
                active === i ? "opacity-100" : "opacity-35"
              }`}
              onMouseEnter={() => setActive(i)}
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="display text-[clamp(2rem,4vw,3.6rem)]">
                  {b.nombre}
                </h3>
                <span className="display shrink-0 text-2xl text-verde">
                  {b.precio}
                </span>
              </div>
              {b.etiqueta && (
                <p className="mt-2 inline-block -rotate-1 rounded-full border border-fuego px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuego">
                  {b.etiqueta}
                </p>
              )}
              <p className="mt-4 max-w-md text-sm leading-relaxed text-hueso/80">
                {b.descripcion}
              </p>
            </article>
          ))}
        </div>

        <div className="relative">
          {/* El contenedor sticky no puede ser el padre de <Image fill>:
              necesita position relative/absolute. De ahí el div interior. */}
          <div className="sticky top-24">
            <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-2xl border-2 border-hueso/15">
              {burgers.map((b, i) => (
                <Image
                  key={b.slug}
                  src={b.imagen}
                  alt={`Hamburguesa ${b.nombre}`}
                  fill
                  sizes="(min-width: 768px) min(34rem, 45vw), 100vw"
                  priority={i === 0}
                  className={`object-cover transition-[opacity,transform] duration-500 ease-out ${
                    active === i
                      ? "z-10 scale-100 opacity-100"
                      : "z-0 scale-105 opacity-0"
                  }`}
                />
              ))}
              <span className="display absolute bottom-4 left-5 z-20 text-6xl text-hueso/90">
                0{active + 1}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Móvil: carrusel horizontal con snap */}
      <div
        className="flex snap-x snap-mandatory gap-7 overflow-x-auto px-5 pb-20 pt-14 md:hidden"
        role="list"
        aria-label="Hamburguesas destacadas"
      >
        {burgers.map((b, i) => (
          <article
            key={b.slug}
            role="listitem"
            className="burger-card-mobile extrude flex w-[82vw] shrink-0 snap-center flex-col rounded-2xl border-2 border-hueso/70 bg-[#191919] p-4 [--extrude-color:var(--verde-oscuro)]"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-tinta">
              <Image
                src={b.imagen}
                alt={`Hamburguesa ${b.nombre}`}
                fill
                sizes="82vw"
                className="object-cover"
                loading={i < 2 ? "eager" : "lazy"}
              />
              {b.etiqueta && (
                <p className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full border border-fuego/80 bg-tinta/85 px-3 py-2 text-[0.625rem] font-bold uppercase leading-none tracking-[0.14em] text-fuego backdrop-blur-sm">
                  {b.etiqueta}
                </p>
              )}
            </div>
            <div className="flex flex-1 flex-col px-1">
              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="display text-3xl leading-none">{b.nombre}</h3>
                <span className="display shrink-0 text-xl leading-none text-verde">
                  {b.precio}
                </span>
              </div>
              <div className="mt-4 border-t border-hueso/15 pt-4">
                <p className="text-[0.9rem] leading-[1.55] text-hueso/75">
                  {b.descripcion}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center pb-24">
        <MagneticButton
          href={ordering.cartaUrl}
          external
          cursorLabel="CARTA"
          className="display rounded-full bg-verde px-10 py-5 text-2xl text-tinta border-2 border-verde transition-colors hover:bg-hueso hover:border-hueso"
        >
          Ver carta completa
        </MagneticButton>
      </div>
    </section>
  );
}
