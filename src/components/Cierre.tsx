import Link from "next/link";
import { FOTOS, FUENTES } from "@/data/piezas";
import { Reveal } from "./Reveal";

export function Cierre() {
  return (
    <>
      {/* Cierre: invitación sobre el nombre recortado */}
      <footer
        id="fuentes"
        className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-[var(--field)] px-[var(--m)] pt-[clamp(72px,9vw,128px)] text-[var(--field-ink)]"
      >
        <div className="grid gap-12 min-[900px]:grid-cols-12">
          <Reveal className="min-[900px]:col-span-7">
            <p className="display t-display">Lo que se nombra, permanece.</p>
            <Link href="/" className="boton mt-10">
              Volver al inicio
            </Link>
          </Reveal>
          <Reveal delay={100} className="min-[900px]:col-span-3 min-[900px]:col-start-10">
            <p className="font-medium">Fuentes</p>
            <ul className="mt-3 space-y-2">
              {FUENTES.map((f) => (
                <li key={f.url}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="enlace">
                    {f.medio}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-24">
          <p className="max-w-[60ch]">
            Sitio independiente, no afiliado al Museo Nacional de Colombia. La información
            proviene de reportes de prensa; el Museo no ha publicado un inventario oficial de
            las piezas retiradas. Las fotografías muestran el contexto, no las piezas retiradas.
          </p>
          <p className="mt-4 max-w-[60ch]">
            Fotografías:{" "}
            {Object.values(FOTOS).map((f, i, todas) => (
              <span key={f.archivo}>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="enlace">
                  {f.credito}
                </a>
                , {f.autor} ({f.licencia}, {f.via ?? "vía Wikimedia Commons o Flickr"})
                {i < todas.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
          <p
            aria-hidden="true"
            className="display mt-6 translate-y-[26%] select-none whitespace-nowrap text-[26vw] leading-[0.8]"
          >
            Permanece
          </p>
        </div>
      </footer>
    </>
  );
}
