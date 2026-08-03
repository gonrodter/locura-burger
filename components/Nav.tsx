"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { brand, contact, images, nav, ordering } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Barra fija + panel de navegación sobre la página desenfocada. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const backdropRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  // Fuera de la home los anclajes necesitan la ruta raíz delante.
  const anchorBase = usePathname() === "/" ? "" : "/";

  useEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    const links = panel.querySelectorAll<HTMLElement>(".menu-panel-link");
    const meta = panel.querySelector<HTMLElement>(".menu-panel-meta");

    if (reduced) {
      backdrop.style.visibility = open ? "visible" : "hidden";
      backdrop.style.opacity = open ? "1" : "0";
      panel.style.visibility = open ? "visible" : "hidden";
      panel.style.opacity = open ? "1" : "0";
      return;
    }

    gsap.killTweensOf([backdrop, panel, ...links, meta]);

    const timeline = open
      ? gsap
          .timeline()
          .set([backdrop, panel], { visibility: "visible" })
          .to(backdrop, { autoAlpha: 1, duration: 0.35, ease: "power2.out" })
          .fromTo(
            panel,
            { autoAlpha: 0, y: -14, scale: 0.96 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.38, ease: "power3.out" },
            "-=0.25",
          )
          .fromTo(
            links,
            { autoAlpha: 0, x: 14 },
            { autoAlpha: 1, x: 0, duration: 0.3, stagger: 0.04, ease: "power2.out" },
            "-=0.22",
          )
          .fromTo(
            meta,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.28, ease: "power2.out" },
            "-=0.18",
          )
      : gsap
          .timeline({
            onComplete: () => gsap.set([backdrop, panel], { visibility: "hidden" }),
          })
          .to(meta, { autoAlpha: 0, y: 8, duration: 0.14, ease: "power2.in" })
          .to(
            [...links].reverse(),
            { autoAlpha: 0, x: 12, duration: 0.16, stagger: 0.025, ease: "power2.in" },
            "-=0.08",
          )
          .to(
            panel,
            { autoAlpha: 0, y: -12, scale: 0.96, duration: 0.26, ease: "power3.in" },
            "-=0.06",
          )
          .to(backdrop, { autoAlpha: 0, duration: 0.28, ease: "power2.inOut" }, "<");

    return () => {
      timeline.kill();
    };
  }, [open, reduced]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60]">
        <div className="flex items-center justify-between px-5 py-4 md:px-10">
          <a
            href={`${anchorBase}#inicio`}
            className="flex items-center rounded-full border-2 border-tinta bg-verde px-4 py-1.5 md:py-1"
            data-cursor="hover"
            aria-label={`${brand.name} — inicio`}
          >
            <Image
              src={images.logo}
              alt={brand.name}
              width={800}
              height={200}
              className="h-6 w-auto md:h-7"
            />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={ordering.cartaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block display text-lg bg-fuego text-hueso rounded-full px-6 py-2.5 border-2 border-tinta transition-colors hover:bg-tinta"
              data-cursor="label"
              data-cursor-label="PEDIR"
            >
              Pedir
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-panel"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className={`display flex items-center gap-2 rounded-full border-2 border-tinta px-6 py-2.5 text-lg text-tinta transition-colors duration-300 hover:bg-queso ${
                open ? "bg-queso" : "bg-hueso"
              }`}
              data-cursor="hover"
            >
              <span className="inline-grid overflow-hidden leading-none" aria-hidden="true">
                <span
                  className={`col-start-1 row-start-1 transition-all duration-300 ease-out ${
                    open ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                  }`}
                >
                  Menú
                </span>
                <span
                  className={`col-start-1 row-start-1 transition-all duration-300 ease-out ${
                    open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                >
                  Cerrar
                </span>
              </span>
              <span className="relative h-3.5 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-all duration-200 ease-out ${
                    open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                    open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "translate-y-0 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <button
        ref={backdropRef}
        type="button"
        tabIndex={-1}
        aria-label="Cerrar menú pulsando fuera"
        onClick={() => setOpen(false)}
        className="invisible fixed inset-0 z-40 bg-tinta/15 opacity-0 backdrop-blur-md"
      />

      <div
        id="menu-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className="invisible fixed right-5 top-[4.75rem] z-50 max-h-[calc(100svh-6rem)] w-[min(22rem,calc(100vw-2.5rem))] origin-top-right overflow-y-auto rounded-[24px] border-2 border-tinta bg-verde p-6 text-tinta opacity-0 shadow-[0_24px_70px_-24px_rgba(16,16,16,0.7)] md:right-10 md:top-20 md:p-7"
      >
        <nav aria-label="Secciones">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={`${anchorBase}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="menu-panel-link display block text-[clamp(1.9rem,4.5vh,2.65rem)] leading-[1.05] transition-all duration-200 hover:translate-x-1 hover:text-hueso focus-visible:text-hueso"
                  data-cursor="hover"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-panel-meta mt-6 flex items-center justify-between gap-4 border-t-2 border-tinta/20 pt-4">
          <p className="text-[0.68rem] font-bold uppercase leading-5 tracking-[0.12em] text-tinta/65">
            {contact.addressLine}
            <br />
            {contact.city}
          </p>
          <a
            href={contact.phoneHref}
            className="display shrink-0 rounded-full border-2 border-tinta px-4 py-2 text-lg transition-colors hover:bg-tinta hover:text-hueso"
            data-cursor="hover"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </>
  );
}
