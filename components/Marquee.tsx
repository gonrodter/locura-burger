type Props = {
  items: readonly string[];
  className?: string;
  separator?: string;
  duration?: number;
  ariaLabel?: string;
};

/** Marquee infinito por CSS (transform, GPU). Contenido duplicado aria-hidden. */
export default function Marquee({
  items,
  className = "",
  separator = "✷",
  duration = 28,
  ariaLabel,
}: Props) {
  const sequence = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      {...(hidden ? { "aria-hidden": true } : {})}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          {/* leading propio: con el 0.95 de .display la tilde de VILLAMARTÍN
              sobresale de la caja y la recorta el overflow del marquee. */}
          <span className="px-5 leading-[1.3] md:px-8">{item}</span>
          <span className="text-fuego" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden ${className}`}
      {...(ariaLabel ? { role: "group", "aria-label": ariaLabel } : {})}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {sequence(false)}
        {sequence(true)}
      </div>
    </div>
  );
}
