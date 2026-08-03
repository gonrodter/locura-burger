"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/SplitLines";
import { brand, locura, images } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/**
 * "La locura": collage de imágenes con parallax a distintas
 * velocidades + frases del manifiesto con reveal.
 */
export default function Locura() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = Number(el.dataset.speed ?? 0);
        gsap.fromTo(
          el,
          { y: speed * 60 },
          {
            y: speed * -60,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // Reveal con clip-path de cada imagen
      gsap.utils.toArray<HTMLElement>(".locura-img", root).forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="la-locura" ref={rootRef} className="relative overflow-hidden bg-verde py-24 text-tinta md:py-36">
      <div className="px-5 md:px-10">
        <SplitLines as="h2" className="display text-[clamp(2.6rem,8vw,7rem)]">
          <>Detrás de la locura</>
          <>
            hay <span className="text-hueso">un método</span>
          </>
        </SplitLines>
      </div>

      <div className="relative mt-16 grid grid-cols-2 gap-4 px-5 md:grid-cols-12 md:gap-6 md:px-10">
        <div className="col-span-1 md:col-span-4" data-speed="0.6">
          <div className="locura-img relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-tinta">
            <Image
              src={images.locura1}
              alt="Papas Locas con pulled pork, queso y salsa de la casa"
              fill
              sizes="(min-width: 768px) 30vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-1 mt-16 md:col-span-4 md:mt-32" data-speed="-0.4">
          <div className="locura-img relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-tinta">
            <Image
              src={images.locura2}
              alt="Ignacios: totopos caseros con pulled pork, guacamole y jalapeños"
              fill
              sizes="(min-width: 768px) 30vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-4 md:mt-10" data-speed="0.3">
          <div className="locura-img relative aspect-square overflow-hidden rounded-2xl border-2 border-tinta">
            <Image
              src={images.locura3}
              alt="Croquetas de chuletón hechas en el obrador"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <ul className="mt-20 grid gap-6 px-5 md:grid-cols-2 md:gap-10 md:px-10">
        {locura.frases.map((frase, i) => (
          <li key={i} className="border-t-2 border-tinta pt-4">
            <SplitLines className="display text-2xl md:text-4xl">
              <>{frase}</>
            </SplitLines>
          </li>
        ))}
      </ul>

      <blockquote className="mx-auto mt-24 max-w-3xl px-5 text-center">
        <SplitLines className="display text-[clamp(1.8rem,5vw,3.6rem)]">
          <>{locura.quote}</>
        </SplitLines>
        <div className="mt-6 flex justify-center">
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Instagram"
            className="display inline-flex items-center gap-2 rounded-full border-2 border-tinta bg-tinta px-5 py-3 text-lg text-hueso transition-colors hover:bg-hueso hover:text-tinta"
            data-cursor="label"
            data-cursor-label="SEGUIR"
          >
            <InstagramIcon className="size-5" />
            Síguenos
          </a>
        </div>
      </blockquote>
    </section>
  );
}
