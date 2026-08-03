"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { images } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Loader corto de marca: contador + "DESATANDO LA LOCURA…" y salida
 * con clip-path. Duración fija ~1.6s, no bloquea más de lo necesario.
 * Con prefers-reduced-motion no se muestra.
 */
export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    const counter = counterRef.current;
    if (!root || !counter) return;

    const state = { n: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setDone(true) });
      tl.to(state, {
        n: 100,
        duration: 1.3,
        ease: "power2.inOut",
        onUpdate: () => {
          counter.textContent = String(Math.round(state.n)).padStart(3, "0");
        },
      })
        .to(root, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.7,
          ease: "power4.inOut",
        })
        .set(root, { display: "none" });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  if (done || reduced) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] grid place-items-center bg-verde text-tinta"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element -- el loader debe pintar sin esperar al optimizador */}
        <img
          src={images.logo}
          alt=""
          width={800}
          height={200}
          className="w-[clamp(13rem,42vw,30rem)]"
        />
        <p className="text-sm uppercase tracking-[0.3em]">
          Desatando la locura…
        </p>
      </div>
      <span
        ref={counterRef}
        className="display absolute bottom-6 right-8 text-[clamp(2rem,6vw,4rem)] tabular-nums"
      >
        000
      </span>
    </div>
  );
}
