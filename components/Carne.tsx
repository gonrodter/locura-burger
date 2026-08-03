"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/SplitLines";
import { carne, images } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * "Nuestra carne": maduración, smash y reacción de Maillard.
 * Desktop: sección pinneada; los tres pasos se relevan con el scroll
 * mientras la imagen de la plancha escala lentamente detrás.
 * Móvil / reduced-motion: pasos apilados, sin pin.
 */
export default function Carne() {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const pin = pinRef.current;
    if (!pin) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const steps = gsap.utils.toArray<HTMLElement>(".carne-step", pin);

      // Estado inicial en JS, no en CSS: si el script no llegara a ejecutarse
      // los pasos deben quedar visibles, nunca ocultos para siempre.
      gsap.set(steps.slice(1), { autoAlpha: 0, yPercent: 24 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: `+=${steps.length * 90}%`,
          pin: true,
          scrub: 0.6,
          // Las imágenes cargan tarde y cambian la altura: al refrescar hay que
          // recalcular los tweens en vez de reutilizar los valores cacheados.
          invalidateOnRefresh: true,
        },
      });

      // Solo tweens `to`: un `fromTo` aplicaría su estado inicial al construir
      // la línea de tiempo (immediateRender), no al llegar su turno, y dejaría
      // el paso visible desde el principio.
      steps.forEach((step, i) => {
        if (i > 0) {
          tl.to(step, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
        tl.to(step, { duration: 0.6 }); // pausa de lectura
        if (i < steps.length - 1) {
          tl.to(step, {
            autoAlpha: 0,
            yPercent: -24,
            duration: 0.5,
            ease: "power2.in",
          });
        }
      });

      // Se aleja con el scroll: arranca ligeramente ampliada y termina en 1,
      // que es el mínimo que cubre el contenedor sin dejar huecos.
      tl.fromTo(
        ".carne-img",
        { scale: 1.12 },
        { scale: 1, duration: tl.duration(), ease: "none" },
        0,
      );
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section id="la-carne" ref={rootRef} className="relative bg-[#161311] text-hueso">
      <div className="px-5 pt-24 md:px-10 md:pt-32">
        <SplitLines
          as="h2"
          className="display text-center text-[clamp(2.6rem,8vw,7rem)] md:text-left"
        >
          <>Nuestra carne</>
          <>
            <span className="text-fuego">manda</span>
          </>
        </SplitLines>
      </div>

      <div ref={pinRef} className={`relative ${reduced ? "" : "md:h-svh"}`}>
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
          <Image
            src={images.plancha}
            alt=""
            fill
            sizes="100vw"
            className="carne-img object-cover opacity-30 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161311] via-transparent to-[#161311]" />
        </div>

        <div
          className={`relative grid gap-20 px-5 py-20 ${
            reduced ? "" : "md:block md:h-full md:gap-0 md:px-0 md:py-0"
          }`}
        >
          {carne.pasos.map((paso) => (
            <div
              key={paso.titulo}
              className={`carne-step ${
                reduced ? "" : "md:absolute md:inset-0 md:grid md:place-items-center"
              }`}
            >
              <div className="mx-auto max-w-3xl px-5 text-center">
                <p
                  className="display text-[clamp(5rem,18vw,14rem)] leading-none text-transparent"
                  style={{ WebkitTextStroke: "2px var(--fuego)" }}
                >
                  {paso.numero}
                  <span
                    className="ml-3 text-[0.25em] text-fuego"
                    style={{ WebkitTextStroke: "0px transparent" }}
                  >
                    {paso.unidad}
                  </span>
                </p>
                <h3 className="display mt-6 text-3xl md:text-5xl">{paso.titulo}</h3>
                <p className="mx-auto mt-4 max-w-md text-base text-hueso/75">
                  {paso.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-28" />
    </section>
  );
}
