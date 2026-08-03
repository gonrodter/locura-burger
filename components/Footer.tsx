"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import { brand, footer, nav, ordering } from "@/lib/content";
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

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="3.75 1 15.571 16.295"
    fill="currentColor"
    className={className}
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.17-1.095A5.19 5.19 0 0 1 14.275 1H11.53v11.016a2.7 2.7 0 0 1-.017.299 2.47 2.47 0 0 1-2.457 2.184 2.472 2.472 0 0 1 0-4.944c.32 0 .628.061.912.17V6.94A5.212 5.212 0 0 0 3.75 12.084a5.21 5.21 0 0 0 5.212 5.211 5.21 5.21 0 0 0 5.212-5.211V6.49a7.88 7.88 0 0 0 5.147 1.898V5.562Z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: brand.instagramUrl, Icon: InstagramIcon, size: "h-5 w-5" },
  { label: "TikTok", href: brand.tiktokUrl, Icon: TikTokIcon, size: "h-[18px] w-[18px]" },
];

/**
 * Cierre: tarjeta oscura sobre el fondo hueso, con frase final, CTA,
 * columnas de navegación y wordmark LOCURA que sube desde abajo.
 */
export default function Footer() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  // Fuera de la home los anclajes necesitan la ruta raíz delante.
  const anchorBase = usePathname() === "/" ? "" : "/";

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-wordmark",
        { yPercent: 55 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <footer ref={rootRef} className="bg-hueso px-4 pb-5 pt-10 sm:px-5 sm:pt-14">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] bg-tinta text-hueso shadow-[0_28px_80px_-60px_rgba(16,16,16,0.75)] transition-[max-width] duration-300 ease-out lg:hover:max-w-[calc(100vw-2.5rem)]">
        <div className="mx-auto max-w-7xl px-5 pb-0 pt-10 sm:px-8 sm:pt-14 lg:px-10">
          <p className="display max-w-3xl text-[clamp(2rem,5vw,4.25rem)]">
            {footer.fraseFinal}
          </p>

          <div className="mt-8">
            <MagneticButton
              href={ordering.cartaUrl}
              external
              cursorLabel="PEDIR"
              className="display rounded-full bg-verde px-10 py-5 text-2xl text-tinta border-2 border-verde transition-colors hover:bg-fuego hover:border-fuego hover:text-hueso"
            >
              Pedir ahora
            </MagneticButton>
          </div>

          <div className="mt-14 grid gap-9 border-t border-hueso/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="display text-2xl">{brand.name}</p>
              <p className="mt-4 max-w-[240px] text-sm font-medium leading-6 text-hueso/60">
                {brand.claim}
              </p>
            </div>

            <nav aria-label="Navegación del pie">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-verde">
                Secciones
              </p>
              <ul className="mt-4 grid gap-3 text-sm font-bold uppercase leading-5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={`${anchorBase}${item.href}`}
                      className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:text-verde"
                      data-cursor="hover"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-verde">
                Legal
              </p>
              <ul className="mt-4 grid gap-3 text-sm font-bold uppercase leading-5">
                {footer.legal.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:text-verde"
                      data-cursor="hover"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-verde">
                Redes
              </p>
              <div className="mt-4 flex items-center gap-4">
                {socials.map(({ label, href, Icon, size }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.name} en ${label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-hueso/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-verde hover:text-tinta"
                    data-cursor="hover"
                  >
                    <Icon className={size} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Wordmark de cierre en texto, no en imagen: a este tamaño el PNG del
              logo se difumina. Cuando llegue la tipografía de marca basta con
              cambiar la fuente de .display (o aplicar una propia aquí). */}
          <div className="relative mt-12 min-h-[92px] sm:mt-14 sm:min-h-[150px] md:min-h-[185px] lg:min-h-[235px] xl:min-h-[265px]">
            <p
              aria-hidden="true"
              className="footer-wordmark display pointer-events-none absolute -bottom-[0.14em] left-1/2 w-full -translate-x-1/2 select-none text-center leading-[0.8] text-verde will-change-transform text-[clamp(3.5rem,20vw,19rem)]"
            >
              {brand.shortName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
