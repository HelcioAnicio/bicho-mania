'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Familia() {
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = countersRef.current
    if (!container) return

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el  = e.target as HTMLElement
        const end = +el.dataset.count!
        const suf = el.dataset.suffix || ''
        const dur = 1400; let t0 = 0

        const step = (t: number) => {
          if (!t0) t0 = t
          const p = Math.min((t - t0) / dur, 1)
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        io.unobserve(el)
      })
    }, { threshold: 0.6 })

    container.querySelectorAll<HTMLElement>('[data-count]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="py-[clamp(70px,11vh,140px)]" aria-labelledby="fam-heading">
      <div className="w-[min(92%,1240px)] mx-auto grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-[54px] items-center">
        {/* Photo */}
        <div className="reveal-pop relative rounded-g overflow-hidden shadow-azul aspect-square bg-ceu">
          <Image src="/assets/dona.png" alt="Equipe da Bicho Mania com um cãozinho"
            fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover" loading="lazy" />
          <div className="absolute right-[-14px] bottom-6 bg-white rounded-[20px] px-[18px] py-[14px] shadow-azul flex items-center gap-3"
            aria-label="Nota 5 estrelas — mais de 400 avaliações">
            <span className="font-fredoka text-[2rem] text-azul-esc leading-none">5,0</span>
            <small className="font-extrabold text-tinta-mole text-[.78rem]">★★★★★<br />+400 avaliações</small>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="reveal inline-flex items-center gap-2 font-extrabold uppercase tracking-[.14em] text-[.8rem] text-azul
            before:content-[''] before:w-[26px] before:h-[3px] before:rounded-full before:bg-azul">
            Gente que ama bicho
          </span>
          <blockquote className="reveal font-fredoka font-normal text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.22] text-tinta mt-4"
            style={{ '--stagger':1 } as React.CSSProperties}>
            "A gente não cuida de <span className="text-azul">cliente</span>, a gente cuida de{' '}
            <span className="text-azul">família</span> — de quatro patas e de duas."
          </blockquote>
          <p id="fam-heading" className="reveal mt-[22px] font-extrabold text-azul-esc"
            style={{ '--stagger':2 } as React.CSSProperties}>
            Equipe Bicho Mania
            <small className="block text-tinta-mole font-bold">cuidando de Caxias do Sul desde 2015</small>
          </p>
          <div ref={countersRef}
            className="reveal flex gap-9 mt-[34px] flex-wrap"
            style={{ '--stagger':3 } as React.CSSProperties}>
            <div className="flex flex-col">
              <strong data-count="400" data-suffix="+" className="font-fredoka text-[2.6rem] text-azul leading-none">0</strong>
              <span className="font-extrabold text-tinta-mole text-[.9rem]">avaliações 5 estrelas</span>
            </div>
            <div className="flex flex-col">
              <strong data-count="11" data-suffix=" anos" className="font-fredoka text-[2.6rem] text-azul leading-none">0</strong>
              <span className="font-extrabold text-tinta-mole text-[.9rem]">de história</span>
            </div>
            <div className="flex flex-col">
              <strong data-count="3" data-suffix=" em 1" className="font-fredoka text-[2.6rem] text-azul leading-none">0</strong>
              <span className="font-extrabold text-tinta-mole text-[.9rem]">serviços num lugar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
