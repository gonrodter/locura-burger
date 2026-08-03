"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type RevealKind = "up" | "left" | "right" | "scale" | "lift";

const starts: Record<RevealKind, gsap.TweenVars> = {
  up: { y: 42, autoAlpha: 0 },
  left: { x: -42, autoAlpha: 0 },
  right: { x: 42, autoAlpha: 0 },
  scale: { y: 24, scale: 0.94, autoAlpha: 0 },
  // Para piezas cuya opacidad ya controla otro componente.
  lift: { y: 36 },
};

/**
 * Reveal común para contenido secundario marcado con data-scroll-reveal.
 * Los estados iniciales se aplican desde JS para que la página siga siendo
 * completamente legible si el script no carga o el usuario reduce movimiento.
 */
export default function ScrollReveals() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]");

      elements.forEach((element) => {
        const kind = (element.dataset.scrollReveal ?? "up") as RevealKind;
        const delay = Number(element.dataset.revealDelay ?? 0);

        gsap.fromTo(element, starts[kind] ?? starts.up, {
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: kind === "lift" ? undefined : 1,
          duration: 0.82,
          delay,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [reduced]);

  return null;
}
