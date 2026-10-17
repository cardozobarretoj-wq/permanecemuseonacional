import Image from "next/image";
import { Cierre } from "@/components/Cierre";
import { Frases } from "@/components/Frases";
import { PiezasEnPared } from "@/components/PiezasEnPared";
import { Reveal } from "@/components/Reveal";
import { Vestibulo } from "@/components/Vestibulo";
import { FOTOS, PIEZAS, type Foto } from "@/data/piezas";

function Fotografia({ foto, ancho, alto, sizes, className = "" }: { foto: Foto; ancho: number; alto: number; sizes: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="foto overflow-hidden">
        <Image src={foto.archivo} alt={foto.alt} width={ancho} height={alto} sizes={sizes} className="h-auto w-full" />
      </div>
      <figcaption className="pequeno mt-3 opacity-90">{foto.pie}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <Vestibulo />

      {/* Contexto: tres frases, una a la vez, mientras se hace scroll */}
      <Frases />

      <PiezasEnPared piezas={PIEZAS} />

      {/* Antes y después: fotografías publicadas por la prensa */}
      <section className="px-[var(--m)] py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="display t-display">Lo que había, y lo que quedó.</h2>
          <p className="mt-6 max-w-[48ch] leading-snug">
            Fotografías publicadas por la prensa el 15 y 16 de octubre de 2026.
          </p>
          <div className="mt-14 grid gap-12 min-[900px]:grid-cols-12 min-[900px]:gap-[var(--m)]">
            <Reveal className="min-[900px]:col-span-4">
              <Fotografia foto={FOTOS.antes} ancho={432} alto={615} sizes="(min-width: 900px) 360px, 100vw" />
            </Reveal>
            <Reveal delay={100} className="min-[900px]:col-span-4 min-[900px]:mt-24">
              <Fotografia foto={FOTOS.esquina} ancho={900} alto={1199} sizes="(min-width: 900px) 360px, 100vw" />
            </Reveal>
            <Reveal delay={200} className="min-[900px]:col-span-4 min-[900px]:mt-48">
              <Fotografia foto={FOTOS.muro} ancho={1000} alto={750} sizes="(min-width: 900px) 360px, 100vw" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* La calle: campo claro */}
      <section className="bg-[var(--field)] px-[var(--m)] py-[clamp(96px,14vw,200px)] text-[var(--field-ink)]">
        <div className="grid gap-x-[var(--m)] gap-y-16 min-[900px]:grid-cols-12 min-[900px]:gap-y-20">
          <Reveal className="min-[900px]:col-span-5">
            <p className="declaracion max-w-[34ch]">
              Antes de estar en una sala, la memoria estuvo en la calle: bordada, cargada, marchada.
            </p>
          </Reveal>
          <Reveal delay={100} className="min-[900px]:col-span-7">
            <Fotografia foto={FOTOS.corazon} ancho={1850} alto={1250} sizes="(min-width: 900px) 58vw, 100vw" />
          </Reveal>
          <Reveal className="min-[900px]:col-span-7">
            <Fotografia foto={FOTOS.colcha} ancho={990} alto={660} sizes="(min-width: 900px) 58vw, 100vw" />
          </Reveal>
          <Reveal delay={100} className="min-[900px]:col-span-4 min-[900px]:col-start-9 min-[900px]:self-end">
            <Fotografia foto={FOTOS.constituyente} ancho={1024} alto={652} sizes="(min-width: 900px) 30vw, 100vw" />
          </Reveal>
        </div>
      </section>

      <Cierre />
    </>
  );
}
