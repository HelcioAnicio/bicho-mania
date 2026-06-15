'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const ITEMS = [
  { img:'/assets/fachada.png',   alt:'Fachada da Bicho Mania', small:'Bairro Lourdes', cap:'Nossa fachada azul'    },
  { img:'/assets/loja.png',      alt:'Loja pet',               small:'Loja pet',       cap:'Tudo pra mimar'        },
  { img:'/assets/banho-tosa.png',alt:'Banho e tosa',           small:'Banho & tosa',   cap:'O spa dos bichos'      },
  { img:'/assets/espera.png',    alt:'Sala de espera',         small:'Recepção',       cap:'Espera aconchegante'   },
  { img:'/assets/dona.png',      alt:'Equipe da Bicho Mania',  small:'Nossa gente',    cap:'Atendimento que ama'   },
]

export default function Tour() {
  const railRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    let down = false, sx = 0, sl = 0

    const onDown  = (e: PointerEvent) => { down=true; sx=e.pageX; sl=rail.scrollLeft; rail.setPointerCapture(e.pointerId); rail.style.cursor='grabbing' }
    const onMove  = (e: PointerEvent) => { if(!down) return; rail.scrollLeft = sl-(e.pageX-sx) }
    const onUp    = () => { down=false; rail.style.cursor='' }

    rail.addEventListener('pointerdown', onDown)
    rail.addEventListener('pointermove', onMove)
    rail.addEventListener('pointerup',   onUp)
    rail.addEventListener('pointerleave',onUp)
    return () => {
      rail.removeEventListener('pointerdown', onDown)
      rail.removeEventListener('pointermove', onMove)
      rail.removeEventListener('pointerup',   onUp)
      rail.removeEventListener('pointerleave',onUp)
    }
  }, [])

  return (
    <section id="loja" aria-labelledby="tour-heading"
      className="py-[clamp(70px,11vh,140px)]"
      style={{ background:'linear-gradient(180deg,#F1F8FF,#fff)' }}>
      <div className="w-[min(92%,1240px)] mx-auto reveal">
        <span className="inline-flex items-center gap-2 font-black uppercase tracking-[.14em] text-[.8rem] text-azul
          before:content-[''] before:w-[26px] before:h-[3px] before:rounded-full before:bg-azul">
          Dê um passeio
        </span>
        <h2 id="tour-heading" className="text-[clamp(2.1rem,4.4vw,3.4rem)] mt-4 mb-3.5 max-w-[16ch]">
          Um cantinho pensado pra deixar o seu pet feliz
        </h2>
        <p className="text-[1.1rem] text-tinta-mole max-w-[46ch] font-semibold">
          Arraste para o lado e conheça cada espaço da Bicho Mania, no bairro Lourdes.
        </p>
      </div>

      <p className="reveal flex items-center gap-2.5 text-tinta-mole font-extrabold uppercase tracking-[.08em] text-[.8rem]
        w-[min(92%,1240px)] mx-auto mt-2" aria-hidden="true">
        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18-6-6 6-6M15 6l6 6-6 6"/>
        </svg>
        arraste para explorar
      </p>

      <div ref={railRef} role="list" aria-label="Galeria da loja" className="tour-rail">
        {ITEMS.map((item, i) => (
          <figure key={i} role="listitem"
            className="tour-item reveal-pop flex-[0_0_clamp(260px,30vw,400px)] scroll-snap-center rounded-g overflow-hidden relative shadow-suave aspect-[3/3.6] cursor-pointer group"
            style={{ '--stagger':i } as React.CSSProperties}>
            <Image src={item.img} alt={item.alt} fill
              sizes="(max-width:768px) 80vw, 30vw" className="object-cover transition-transform duration-700 ease-ease group-hover:scale-[1.07]" loading="lazy" />
            <figcaption className="absolute left-0 right-0 bottom-0 px-[22px] pt-[22px] pb-[20px] text-white font-fredoka text-[1.3rem]"
              style={{ background:'linear-gradient(transparent,rgba(6,52,99,.85))' }}>
              <small className="block font-nunito font-extrabold text-[.78rem] opacity-85 uppercase tracking-[.08em]">{item.small}</small>
              {item.cap}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
