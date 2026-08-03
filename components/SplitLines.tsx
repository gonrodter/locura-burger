"use client";

import {
  Children,
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode; // cada hijo = una línea enmascarada
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** anima al entrar en viewport (por defecto) o inmediatamente */
  trigger?: boolean;
};

/**
 * Reveal de líneas con máscara: cada hijo se envuelve en un
 * contenedor overflow-hidden y sube desde abajo con stagger.
 */
export default function SplitLines({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  stagger = 0.09,
  trigger = true,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const lines = root.querySelectorAll<HTMLElement>(".mask-line > span");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          ease: "power4.out",
          delay,
          stagger,
          ...(trigger
            ? {
                scrollTrigger: {
                  trigger: root,
                  start: "top 85%",
                  once: true,
                },
              }
            : {}),
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced, delay, stagger, trigger]);

  return (
    <Tag ref={rootRef} className={`split-lines ${className ?? ""}`}>
      {Children.map(children, (child) => (
        <span className="mask-line">
          <span>{child}</span>
        </span>
      ))}
    </Tag>
  );
}
