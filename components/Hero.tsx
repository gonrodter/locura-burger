"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import SplitLines from "@/components/SplitLines";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import { marqueeItems, ordering, images } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Hero: titular editorial, burger central que responde al puntero
 * (parallax sutil) y CTAs. Marquee de ingredientes al pie.
 */
export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    const burger = burgerRef.current;
    if (!root || !burger) return;

    const ctx = gsap.context(() => {
      // Entrada del burger
      gsap.fromTo(
        burger,
        { y: 120, autoAlpha: 0, rotate: -8 },
        {
          y: 0,
          autoAlpha: 1,
          rotate: 0,
          duration: 1.1,
          ease: "power4.out",
          delay: 1.9,
        },
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 2.34,
        },
      );

      gsap.fromTo(
        ".hero-accolade-badge",
        { x: -18, rotate: -6, autoAlpha: 0 },
        {
          x: 0,
          rotate: -2,
          autoAlpha: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          delay: 2.02,
        },
      );

      gsap.fromTo(
        ".hero-mobile-visual",
        { y: 70, rotate: 5, scale: 0.92, autoAlpha: 0 },
        {
          y: 0,
          rotate: 1,
          scale: 1,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power4.out",
          delay: 2.28,
        },
      );

      // Parallax con el puntero (solo desktop)
      if (window.matchMedia("(pointer: fine)").matches) {
        const xTo = gsap.quickTo(burger, "x", {
          duration: 0.6,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(burger, "y", {
          duration: 0.6,
          ease: "power3.out",
        });
        const rTo = gsap.quickTo(burger, "rotate", {
          duration: 0.8,
          ease: "power3.out",
        });
        const onMove = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          xTo(nx * 36);
          yTo(ny * 24);
          rTo(nx * 6);
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="inicio"
      ref={rootRef}
      /* overflow-x-clip (no -hidden): el marquee va rotado y sus esquinas
         deben poder sobresalir en vertical sin que las corte la sección. */
      className="relative flex min-h-svh flex-col justify-between overflow-x-clip bg-hueso pt-24"
    >
      {/* Titular y acciones mandan; la imagen continúa la composición en móvil
          y se coloca a la derecha en escritorio. */}
      <div className="relative z-10 flex flex-1 items-center px-5 pb-7 pt-3 md:px-10 md:py-8">
        <div className="relative w-full">
          <div className="relative z-10 md:max-w-[58%] lg:max-w-[60%]">
            <SplitLines
              as="h1"
              className="display text-[clamp(4.8rem,21.5vw,7.75rem)] leading-[0.84] text-tinta md:text-[clamp(5.5rem,12.4vw,11rem)]"
              delay={1.7}
              trigger={false}
            >
              <>Desata</>
              <>
                la <span className="text-fuego">locura</span>
              </>
            </SplitLines>

            <div className="mt-7 hidden items-center gap-4 md:flex">
              <span className="hero-accolade-badge display shrink-0 -rotate-2 border-2 border-tinta bg-verde px-3 py-2 text-center text-lg leading-[0.9] shadow-[4px_4px_0_var(--tinta)]">
                2025
                <span className="block text-xs">2026</span>
              </span>
              <SplitLines
                as="p"
                className="display text-[clamp(1.6rem,2.15vw,2.3rem)] leading-[0.98] text-tinta"
                delay={2.02}
                stagger={0.08}
                trigger={false}
              >
                <>De <span className="text-verde-oscuro">Villamartín</span> al</>
                <>Campeonato de España.</>
              </SplitLines>
            </div>

            <div className="mt-7 grid w-full grid-cols-[1.15fr_0.85fr] gap-2.5 md:flex md:w-auto md:gap-4">
              <MagneticButton
                href={ordering.cartaUrl}
                external
                cursorLabel="PEDIR"
                className="hero-cta display min-w-0 whitespace-nowrap rounded-full border-2 border-tinta bg-tinta px-3 py-[1.05rem] text-center text-[1.05rem] leading-none text-hueso transition-colors hover:border-fuego hover:bg-fuego md:px-8 md:py-4 md:text-xl"
              >
                Ver la carta
              </MagneticButton>
              <MagneticButton
                href={ordering.reservasUrl}
                external
                cursorLabel="RESERVAR"
                className="hero-cta display min-w-0 whitespace-nowrap rounded-full border-2 border-tinta bg-transparent px-3 py-[1.05rem] text-center text-[1.05rem] leading-none text-tinta transition-colors hover:bg-verde md:px-8 md:py-4 md:text-xl"
              >
                Reservar
              </MagneticButton>
            </div>

            {/* En móvil la fotografía no es un añadido al final: ocupa el
                tercio inferior y cierra la composición antes del marquee. */}
            <div className="hero-mobile-visual relative mt-7 aspect-[4/3] w-[calc(100%-6px)] rotate-1 md:hidden">
              <div className="extrude relative size-full overflow-hidden rounded-lg border-2 border-tinta [--extrude-color:var(--verde)]">
                <Image
                  src={images.heroBurger}
                  alt="Smash burger de Locura Burger"
                  fill
                  loading="eager"
                  sizes="calc(100vw - 46px)"
                  className="object-cover"
                />
              </div>
              <p className="display absolute -left-2 top-4 -rotate-3 border-2 border-tinta bg-queso px-4 py-2 text-base leading-none shadow-[4px_4px_0_var(--tinta)]">
                Dry Aged · 120 días
              </p>
            </div>
          </div>

          {/* Burger héroe + sello: centrado vertical sobre el bloque de texto */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(42vw,590px,66vh)] items-center md:flex lg:w-[min(48vw,720px,76vh)]"
            aria-hidden="true"
          >
            <div
              ref={burgerRef}
              className="relative w-full will-change-transform"
            >
              {/* Radio contenido a propósito: la extrusión es la unión de dos
                  rectángulos desplazados en diagonal y, con radios grandes,
                  deja una muesca en las esquinas opuestas. */}
              <div className="extrude relative aspect-square overflow-hidden rounded-lg border-2 border-tinta [--extrude-color:var(--verde)]">
                <Image
                  src={images.heroBurger}
                  alt=""
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 40vw, 1px"
                  className="object-cover"
                />
              </div>

              {/* Sello giratorio sobre la esquina superior derecha de la foto */}
              <div className="seal-spin absolute -top-10 right-2 size-24 lg:-top-12 lg:size-28">
                <svg viewBox="0 0 100 100" className="size-full fill-verde-oscuro">
                  <defs>
                    <path
                      id="circ"
                      d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="display" fontSize="9.5">
                    {/* textLength = circunferencia (2π·38) para cerrar el aro exacto */}
                    <textPath
                      href="#circ"
                      startOffset="0"
                      textLength="238.7"
                      lengthAdjust="spacing"
                    >
                      SMASH · DRY AGED · VILLAMARTÍN · LOCURA ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee inferior: z-20 para montar sobre la sección siguiente */}
      <div className="relative z-20 translate-y-3 -rotate-1 border-y-2 border-tinta bg-verde py-3 md:translate-y-6">
        <Marquee
          items={marqueeItems}
          className="display text-2xl text-tinta md:text-3xl"
          ariaLabel="Lo que nos define"
        />
      </div>
    </section>
  );
}
