"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TOTAL_REPORTADO, imagenDe, urlCatalogo, type Pieza } from "@/data/piezas";

type Estilo = "madera" | "negro" | "caja";
type Caja = { x: number; y: number; w: number; h: number };
type Hueco = {
  pieza?: Pieza;
  estilo: Estilo;
  residuos: [number, number, number][];
  etiqueta: boolean;
  m: Caja; // móvil
  d: Caja; // escritorio
};

/** Números pseudoaleatorios con semilla fija: la pared se ve igual en servidor y en cliente. */
function azar(semilla: number) {
  let a = semilla;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Medidas = {
  columnas: number;
  x0: number;
  ancho: number;
  hueco: number;
  arriba: number;
  abajo: number;
  hPieza: [number, number];
  hVacio: [number, number];
  wVacio: [number, number];
};

/** Reparte los huecos en columnas, siempre en la más baja, como una pared de galería. */
function componer(tipos: boolean[], ratios: (number | undefined)[], m: Medidas, semilla: number) {
  const r = azar(semilla);
  const col = (m.ancho - m.hueco * (m.columnas - 1)) / m.columnas;
  const bajo = Array(m.columnas).fill(m.arriba);
  const cajas = tipos.map((esPieza, k) => {
    let c = 0;
    for (let i = 1; i < m.columnas; i++) if (bajo[i] < bajo[c] - 0.5) c = i;
    const [h0, h1] = esPieza ? m.hPieza : m.hVacio;
    const w = esPieza ? col * (0.92 + r() * 0.08) : col * (m.wVacio[0] + r() * (m.wVacio[1] - m.wVacio[0]));
    const azarH = h0 + r() * (h1 - h0);
    // Si la pieza tiene foto, el marco sigue su proporción para no dejar barras negras.
    const ratio = ratios[k];
    const h = esPieza && ratio ? Math.min(Math.max(w / ratio, h0 * 0.55), h1 * 1.25) : azarH;
    const x = m.x0 + c * (col + m.hueco) + (col - w) * r();
    const caja = { x: +x.toFixed(2), y: +bajo[c].toFixed(2), w: +w.toFixed(2), h: +h.toFixed(2) };
    bajo[c] += h + m.hueco;
    return caja;
  });
  return { cajas, alto: +(Math.max(...bajo) - m.hueco + m.abajo).toFixed(2) };
}

const ESTILOS: Estilo[] = ["madera", "caja", "negro", "madera", "negro", "caja"];

function construir(piezas: Pieza[]) {
  const total = Math.max(TOTAL_REPORTADO, piezas.length);
  const r = azar(7);
  // Las piezas con nombre quedan repartidas por toda la pared; el resto son espacios vacíos.
  const posiciones = new Set(piezas.map((_, i) => Math.floor(((i + 0.5) * total) / piezas.length)));
  const tipos = Array.from({ length: total }, (_, i) => posiciones.has(i));
  let n = 0;
  const ratios = tipos.map((esPieza) => (esPieza ? imagenDe(piezas[n++])?.ratio : undefined));

  const movil = componer(
    tipos,
    ratios,
    { columnas: 2, x0: 5, ancho: 90, hueco: 4, arriba: 5, abajo: 6, hPieza: [34, 42], hVacio: [15, 22], wVacio: [0.55, 0.85] },
    11,
  );
  const escritorio = componer(
    tipos,
    ratios,
    { columnas: 6, x0: 3, ancho: 82, hueco: 2.6, arriba: 3, abajo: 4, hPieza: [16, 21], hVacio: [7, 11], wVacio: [0.55, 0.85] },
    23,
  );

  let k = 0;
  const huecos: Hueco[] = tipos.map((esPieza, i) => {
    const pieza = esPieza ? piezas[k++] : undefined;
    return {
      pieza,
      estilo: ESTILOS[i % ESTILOS.length],
      residuos: [
        [-6 + r() * 3, 10 + r() * 70, 0.7 + r() * 0.4],
        [100 + r() * 4, 10 + r() * 70, 0.6 + r() * 0.5],
      ],
      etiqueta: esPieza && k % 2 === 1,
      m: movil.cajas[i],
      d: escritorio.cajas[i],
    };
  });
  return { huecos, altoM: movil.alto, altoD: escritorio.alto };
}

const vars = (h: Hueco) =>
  ({
    "--mx": `${h.m.x}cqw`, "--my": `${h.m.y}cqw`, "--mw": `${h.m.w}cqw`, "--mh": `${h.m.h}cqw`,
    "--dx": `${h.d.x}cqw`, "--dy": `${h.d.y}cqw`, "--dw": `${h.d.w}cqw`, "--dh": `${h.d.h}cqw`,
  }) as React.CSSProperties;

type Seleccion = { modo: "ficha"; pieza: Pieza; estilo: Estilo } | { modo: "vacio" } | null;

/**
 * Una sala dibujada en código con las piezas ya colgadas y los espacios que quedaron vacíos.
 * La posición es ilustrativa: no se afirma dónde colgaba cada pieza.
 */
export function PiezasEnPared({ piezas }: { piezas: Pieza[] }) {
  const [sel, setSel] = useState<Seleccion>(null);
  const [encendida, setEncendida] = useState(false);
  const dialogo = useRef<HTMLDialogElement>(null);
  const sala = useRef<HTMLDivElement>(null);
  const [{ huecos, altoM, altoD }] = useState(() => construir(piezas));

  // Las luces de la sala se encienden al entrar en pantalla.
  useEffect(() => {
    const el = sala.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setEncendida(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (sel && !d.open) d.showModal();
    if (!sel && d.open) d.close();
  }, [sel]);

  return (
    <section id="piezas" className="px-[var(--m)] py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="display t-display">Lo que colgaba en estas salas.</h2>
        <p className="mt-6 max-w-[52ch] leading-snug">
          Toca una pieza para leer su ficha. Los espacios vacíos son las que todavía no tienen nombre.
        </p>

        <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
          <filter id="tiza" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="4" result="ruido" />
            <feDisplacementMap in="SourceGraphic" in2="ruido" scale="5" />
          </filter>
        </svg>

        <div ref={sala} className="sala mt-12" data-encendida={encendida}>
          <svg className="sala-techo" viewBox="0 0 100 15" preserveAspectRatio="none" aria-hidden="true">
            <rect width="100" height="15" fill="#2c2c2e" />
            <polygon points="0,10 6,10 36,2.2 31,2.2" fill="#1d1613" />
            <polygon points="60,10 66,10 36,2.2 41,2.2" fill="#1d1613" />
            <polygon points="100,10 94,10 64,2.2 69,2.2" fill="#1d1613" />
            <polygon points="40,10 34,10 64,2.2 69,2.2" fill="#1d1613" />
            <rect y="10" width="100" height="2.2" fill="#2a1f18" />
            <rect y="12.2" width="100" height="0.7" fill="#0f0f10" />
            <rect y="12.9" width="100" height="2.1" fill="#202023" />
            <g fill="#0b0b0c">
              <rect x="12" y="12.9" width="9" height="0.9" />
              <rect x="45" y="12.9" width="9" height="0.9" />
              <rect x="79" y="12.9" width="9" height="0.9" />
            </g>
            <g fill="#fff6df">
              <rect x="14" y="13.6" width="5" height="0.9" />
              <rect x="47" y="13.6" width="5" height="0.9" />
              <rect x="81" y="13.6" width="5" height="0.9" />
            </g>
          </svg>
          <div className="sala-focos" aria-hidden="true">
            <span style={{ left: "16.5%" }} />
            <span style={{ left: "49.5%" }} />
            <span style={{ left: "83.5%" }} />
            {/* En móvil la pared es larga: más filas de focos para que ninguna pieza quede a oscuras. */}
            {[91, 171, 251, 331].map((t) =>
              [16.5, 49.5, 83.5].map((l) => (
                <span key={`${t}-${l}`} className="foco-extra" style={{ left: `${l}%`, ["--t" as string]: `${t}cqw` }} />
              )),
            )}
          </div>

          <div
            className="sala-pared"
            style={{ ["--alto-m" as string]: `${altoM}cqw`, ["--alto-d" as string]: `${altoD}cqw` }}
          >
            {huecos.map((h, i) => {
              const p = h.pieza;
              const foto = p ? imagenDe(p) : undefined;
              return (
                <button
                  key={i}
                  type="button"
                  className="hueco"
                  data-colgada={Boolean(p)}
                  data-estilo={h.estilo}
                  style={vars(h)}
                  aria-label={p ? `Abrir la ficha de ${p.corto}` : "Espacio vacío: una pieza retirada sin nombre público"}
                  onClick={() => setSel(p ? { modo: "ficha", pieza: p, estilo: h.estilo } : { modo: "vacio" })}
                >
                  {!p &&
                    h.residuos.map(([t, l, z], j) => (
                      <span key={j} className="residuo" style={{ top: `${t}%`, left: `${l}%`, ["--z" as string]: z }} aria-hidden="true" />
                    ))}
                  <span className="gancho" style={{ left: "14%" }} />
                  <span className="gancho" style={{ right: "14%" }} />
                  {p && (
                    <>
                      <span className="hueco-cuadro">
                        <span className="hueco-paspartu">
                          {foto ? (
                            <span className="hueco-lienzo hueco-foto">
                              <Image src={foto.archivo} alt={foto.alt} fill sizes="(min-width: 900px) 16vw, 45vw" className="object-contain" />
                            </span>
                          ) : (
                            <span className="hueco-lienzo">{p.corto}</span>
                          )}
                        </span>
                      </span>
                      {h.etiqueta && <span className="etiqueta-pared" aria-hidden="true" />}
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <div className="sala-esquina" aria-hidden="true">
            <span className="esq-hueco" style={{ left: "16%", top: "8%", width: "34%", height: "26%" }} />
            <span className="esq-hueco" style={{ left: "56%", top: "8%", width: "30%", height: "34%" }} />
            <span className="esq-hueco" style={{ left: "16%", top: "42%", width: "34%", height: "20%" }} />
            <span className="esq-hueco" style={{ left: "56%", top: "50%", width: "30%", height: "14%" }} />
            <span className="etiqueta-pared" style={{ left: "16%", top: "68%", width: "40%" }} />
          </div>

          <div className="sala-zocalo" aria-hidden="true" />
          <div className="sala-suelo" aria-hidden="true">
            <div className="sala-plano" />
            <div className="sala-brillo" />
          </div>
          <div className="sala-oscuridad" aria-hidden="true" />
          <div className="sala-vineta" aria-hidden="true" />
        </div>

        <p className="pequeno muted mt-4 max-w-[70ch]">
          La sala es una ilustración, inspirada en las imágenes de prensa; las
          fotografías de las piezas fueron publicadas por La Silla Vacía y El Colombiano. La posición de cada pieza es ilustrativa: no corresponde
          a su ubicación original.
        </p>
      </div>

      <dialog
        ref={dialogo}
        className="ficha-hoja"
        aria-label={sel?.modo === "ficha" ? sel.pieza.titulo : "Espacio sin nombre público"}
        onClose={() => setSel(null)}
        onClick={(e) => e.target === dialogo.current && setSel(null)}
      >
        {sel && (
          <div className="ficha-cuerpo">
            <button type="button" className="ficha-cerrar" aria-label="Cerrar" onClick={() => setSel(null)}>
              ×
            </button>

            {sel.modo === "vacio" && (
              <>
                <h3 className="display t-head">Un espacio sin nombre.</h3>
                <p className="mt-6 leading-relaxed">
                  Se habla de al menos {TOTAL_REPORTADO} piezas retiradas y aquí hay {piezas.length} registros. El Museo no ha publicado el
                  inventario, así que cada espacio vacío queda señalado hasta que exista información verificable.
                </p>
              </>
            )}

            {sel.modo === "ficha" && (
              <>
                {imagenDe(sel.pieza) && (
                  <figure className="mb-8">
                    <div className="ficha-marco" data-estilo={sel.estilo} style={{ ["--ratio" as string]: imagenDe(sel.pieza)!.ratio ?? 1 }}>
                      <div className="fm-cuadro">
                        <div className="fm-paspartu">
                          <div className="fm-foto">
                            <Image src={imagenDe(sel.pieza)!.archivo} alt={imagenDe(sel.pieza)!.alt} fill sizes="(min-width: 900px) 360px, 80vw" className="object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <figcaption className="pequeno muted mt-4 text-center">Fotografía: {imagenDe(sel.pieza)!.credito}</figcaption>
                  </figure>
                )}
                <p className="pequeno muted">{sel.pieza.sala}</p>
                <h3 className="display t-head mt-2">{sel.pieza.corto}</h3>
                {sel.pieza.corto !== sel.pieza.titulo && <p className="muted mt-2">{sel.pieza.titulo}</p>}
                <p className="pequeno muted mt-4">
                  {[sel.pieza.tipo, sel.pieza.autoria, sel.pieza.fecha].filter(Boolean).join(" · ")}
                </p>
                <p className="mt-6 leading-relaxed">{sel.pieza.resumen}</p>
                <p className="pequeno muted mt-4 leading-relaxed">{sel.pieza.contexto}</p>
                {sel.pieza.catalogo && (
                  <p className="mt-8">
                    <a href={urlCatalogo(sel.pieza.catalogo)} target="_blank" rel="noopener noreferrer" className="enlace">
                      Ver el registro en el catálogo del Museo
                    </a>
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
