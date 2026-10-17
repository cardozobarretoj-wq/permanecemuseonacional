import Image from "next/image";
import { FOTOS } from "@/data/piezas";

export function Vestibulo() {
  return (
    <>
      {/* Portada: titular a la izquierda, la fachada del museo a sangre a la derecha */}
      <section className="grid min-h-svh pt-[76px] min-[900px]:grid-cols-12">
        <div className="fuera-arriba flex flex-col justify-center gap-10 px-[var(--m)] py-16 min-[900px]:col-span-6 min-[900px]:py-0">
          <h1 className="display t-hero">
            <span className="block">La memoria</span>
            <span className="block">no pide permiso.</span>
          </h1>
          <p className="max-w-[44ch] leading-snug">
            Cerca de treinta piezas sobre la paz, la diversidad y la memoria fueron retiradas
            del Museo Nacional de Colombia el 15 de octubre de 2026. Aquí están las que se han
            podido nombrar.
          </p>
          <p className="pequeno muted">Desliza para entrar</p>
        </div>
        <div className="relative min-h-[56svh] overflow-hidden min-[900px]:col-span-6 min-[900px]:min-h-[calc(100svh-76px)]">
          <Image
            src={FOTOS.entrada.archivo}
            alt={FOTOS.entrada.alt}
            fill
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className="zoom-lento object-cover object-[50%_40%]"
          />
        </div>
      </section>
    </>
  );
}
