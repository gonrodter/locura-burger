import SplitLines from "@/components/SplitLines";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import { contact, hours, ordering } from "@/lib/content";

/** Dirección, horario y todas las vías de pedido. */
export default function Visitanos() {
  return (
    <section id="visitanos" className="relative bg-hueso py-24 text-tinta md:py-36">
      <div className="px-5 md:px-10">
        <SplitLines as="h2" className="display text-[clamp(2.6rem,8vw,7rem)]">
          <>Visítanos en Villamartín,</>
          <>
            <span className="text-fuego">zona cero</span>
          </>
        </SplitLines>
      </div>

      <div className="mt-16 grid gap-12 px-5 md:grid-cols-3 md:gap-8 md:px-10">
        <div>
          <h3 className="display mb-4 text-xl text-verde-oscuro">
            Dónde
          </h3>
          <p className="display text-3xl">
            {contact.addressLine}
            <br />
            {contact.city}
            <br />
            {contact.postalCode}
          </p>
          <MagneticButton
            href={contact.mapsUrl}
            external
            cursorLabel="MAPA"
            className="display mt-5 rounded-full border-2 border-tinta bg-verde px-6 py-3 text-lg text-tinta transition-colors hover:bg-fuego hover:text-hueso"
          >
            Cómo llegar
          </MagneticButton>
        </div>

        <div>
          <h3 className="display mb-4 text-xl text-verde-oscuro">
            Cuándo
          </h3>
          <table className="w-full max-w-xs">
            <caption className="sr-only">Horario de apertura</caption>
            <tbody>
              {hours.dias.map((d) => (
                <tr key={d.dia} className="border-b border-tinta/15">
                  <th scope="row" className="py-2 text-left font-normal">
                    {d.dia}
                  </th>
                  <td
                    className={`py-2 text-right ${
                      d.horario === "Cerrado" ? "text-tinta/40" : "font-semibold"
                    }`}
                  >
                    {d.horario}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="display mb-4 text-xl text-verde-oscuro">
            Pide
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href={contact.phoneHref}
                className="display text-3xl underline-offset-4 hover:underline"
                data-cursor="label"
                data-cursor-label="LLAMAR"
              >
                {contact.phone}
              </a>
              <p className="text-sm text-tinta/60">{ordering.domicilioNota}</p>
            </li>
            <li className="flex flex-wrap gap-3 pt-2">
              <MagneticButton
                href={ordering.cartaUrl}
                external
                cursorLabel="PEDIR"
                className="display rounded-full bg-tinta px-6 py-3 text-lg text-hueso border-2 border-tinta transition-colors hover:bg-fuego hover:border-fuego"
              >
                Carta online
              </MagneticButton>
              <MagneticButton
                href={ordering.reservasUrl}
                external
                cursorLabel="RESERVAR"
                className="display rounded-full px-6 py-3 text-lg text-tinta border-2 border-tinta transition-colors hover:bg-verde"
              >
                Reservar
              </MagneticButton>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-24 -rotate-1 border-y-2 border-tinta bg-queso py-3">
        <Marquee
          items={[hours.resumen, contact.addressLine + ", " + contact.city, contact.phone]}
          className="display text-2xl md:text-3xl"
          duration={22}
          ariaLabel="Horario y contacto"
        />
      </div>
    </section>
  );
}
