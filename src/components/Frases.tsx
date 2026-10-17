"use client";

import { useEffect, useRef, useState } from "react";

const FRASES = [
  "Un museo guarda lo que un país decide no olvidar. Una pared vacía no borra lo que colgó en ella.",
  "Un país tiene heridas, y es válido recordarlas: callar no las cierra.",
  "Aquí cada pieza vuelve a tener su nombre, su fecha y su historia.",
];

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);
const suave = (x: number) => x * x * (3 - 2 * x);

/**
 * Una frase fija en pantalla mientras se hace scroll. Cada una aparece poco a poco, se queda un tramo largo
 * a plena luz y se va antes de que llegue la siguiente. El scroll controla todo el movimiento.
 * Sin JavaScript las tres se muestran seguidas.
 */
export function Frases() {
  const caja = useRef<HTMLElement>(null);
  const frases = useRef<(HTMLParagraphElement | null)[]>([]);
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let ultima = -1;
    const calcular = () => {
      raf = 0;
      const el = caja.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const recorrido = r.height - vh;
      if (recorrido <= 0) return;
      // La primera frase empieza a aparecer cuando la sección ya asoma, antes de quedar fija.
      const adelanto = vh * 0.45;
      const s = clamp((-r.top + adelanto) / (recorrido + adelanto));
      const n = FRASES.length;

      frases.current.forEach((p, i) => {
        if (!p) return;
        const u = s * n - i; // 0..1 dentro del tramo de esta frase
        const entra = suave(clamp(u / 0.16));
        const sale = i === n - 1 ? 0 : suave(clamp((u - 0.84) / 0.16));
        const visible = u < 0 ? 0 : Math.min(entra, 1 - sale);
        p.style.opacity = String(visible);
        const dy = reducido ? 0 : u < 0.5 ? (1 - entra) * 36 : -sale * 36;
        p.style.transform = `translateY(${dy}px)`;
      });

      const idx = clamp(Math.floor(s * n), 0, n - 1);
      if (idx !== ultima) {
        ultima = idx;
        setActiva(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calcular);
    };
    calcular();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={caja} id="contexto" className="frases" style={{ ["--n" as string]: FRASES.length }}>
      <div className="frases-escena">
        {FRASES.map((texto, i) => (
          <p
            key={i}
            ref={(el) => {
              frases.current[i] = el;
            }}
            className="declaracion frases-frase"
            aria-hidden={i !== activa}
          >
            {texto}
          </p>
        ))}
      </div>
    </section>
  );
}
