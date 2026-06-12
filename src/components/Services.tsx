'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const CARDS = [
  { num:'01', title:'Banho & Tosa',      tags:['Cromoterapia','Musicoterapia','Tosa bebê','Hidratação'], img:'/assets/banho-tosa.png', alt:'Sala de banho e tosa',
    desc:'Banho com cromoterapia e musicoterapia, tosa higiênica, na máquina, bebê e Spitz. Seu pet relaxa e sai um espetáculo.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-[34px] h-[34px]" aria-hidden="true"><path d="M3 14h18M5 14V9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3"/><path d="M3 14a6 6 0 0 0 6 6h2"/><circle cx="17.5" cy="7.5" r="2.5"/><path d="m20 10 1 1"/></svg> },
  { num:'02', title:'Clínica Veterinária', tags:['Consultas','Dermatologia','Cardiologia','Cirurgia'], img:'/assets/espera.png', alt:'Sala de espera da clínica',
    desc:'Consultas e especialidades com quem entende. Cardiologia, dermato, ortopedia e muito mais — pertinho de você.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-[34px] h-[34px]" aria-hidden="true"><path d="M11 2h2v4h4v2h-4v4h-2V8H7V6h4z" fill="currentColor" stroke="none"/><path d="M5 22a4 4 0 0 1-1-7.9V13a8 8 0 0 1 16 0v1.1A4 4 0 0 1 19 22z"/></svg> },
  { num:'03', title:'Loja Pet',            tags:['Rações','Petiscos','Acessórios','Brinquedos'], img:'/assets/loja.png', alt:'Interior da loja pet',
    desc:'Rações, petiscos, medicamentos, acessórios, brinquedos e higiene. Tudo que seu bichinho precisa, com curadoria de quem ama.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-[34px] h-[34px]" aria-hidden="true"><path d="M6 2h12l1 5H5z"/><path d="M5 7v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7"/><path d="M9 12h6"/></svg> },
  { num:'04', title:'Vacinas',             tags:['V8 / V10','Antirrábica','Carteirinha','Reforços'], img:'/assets/fachada.png', alt:'Bicho Mania',
    desc:'Calendário de vacinação em dia, com aplicação tranquila e orientação completa pra manter a saúde do seu pet protegida.',
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="w-[34px] h-[34px]" aria-hidden="true"><path d="m18 2 4 4-9 9-4 1 1-4z"/><path d="m14 6 4 4"/><path d="M11 19a4 4 0 1 1-6-3.5"/></svg> },
]

export default function Services() {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const barRef   = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!matchMedia('(min-width:861px)').matches) return
    const wrap = wrapRef.current, track = trackRef.current, bar = barRef.current
    if (!wrap || !track) return

    const onScroll = () => {
      const rect  = wrap.getBoundingClientRect()
      const total = wrap.offsetHeight - window.innerHeight
      const p     = Math.min(Math.max(-rect.top / total, 0), 1)
      track.style.transform = `translateX(${-(p * (track.scrollWidth - track.clientWidth))}px)`
      if (bar) bar.style.width = p * 100 + '%'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  return (
    <section id="servicos" aria-labelledby="svc-heading"
      className="relative svc-wrap" style={{ background:'linear-gradient(180deg,#fff,#F1F8FF)', height:'340vh' }}>
      <div className="svc-sticky sticky top-0 h-svh flex flex-col justify-center overflow-hidden">
        {/* Head */}
        <div className="w-[min(92%,1240px)] mx-auto mb-[30px] reveal">
          <span id="svc-heading"
            className="inline-flex items-center gap-2 font-extrabold uppercase tracking-[.14em] text-[.8rem] text-azul
              before:content-[''] before:w-[26px] before:h-[3px] before:rounded-full before:bg-azul">
            Tudo num lugar só
          </span>
          <h2 className="text-[clamp(2.1rem,4.4vw,3.4rem)] mt-4 mb-3.5 max-w-[16ch]">
            Quatro jeitos de cuidar de quem você ama
          </h2>
          {/* Progress */}
          <div className="svc-progress h-[5px] bg-ceu-2 rounded-full overflow-hidden mt-4 max-w-xs" aria-hidden="true">
            <i ref={barRef} className="block h-full w-0 bg-azul rounded-full transition-none" />
          </div>
          <p className="svc-hint flex items-center gap-2 text-tinta-mole font-extrabold text-[.82rem] mt-[18px] uppercase tracking-[.06em]" aria-hidden="true">
            role pra baixo, as seções deslizam ◢
          </p>
        </div>

        {/* Track */}
        <div ref={trackRef} className="svc-track flex gap-[30px]"
          style={{ paddingInline:'max(4vw, calc((100vw - 1240px)/2 + 4vw))' }}>
          {CARDS.map(c => (
            <article key={c.num}
              className="svc-card flex-[0_0_clamp(310px,42vw,560px)] bg-white rounded-g overflow-hidden shadow-suave border border-[rgba(14,118,217,.14)] flex flex-col transition-all duration-300 hover:shadow-azul hover:-translate-y-1">
              <div className="flex items-center justify-between px-[34px] pt-[34px]">
                <span className="font-fredoka text-[3.4rem] text-ceu-2 leading-[.8]" aria-hidden="true">{c.num}</span>
                <span className="w-16 h-16 rounded-[20px] bg-azul grid place-items-center text-white shadow-azul">{c.icon}</span>
              </div>
              <h3 className="font-fredoka text-[2rem] px-[34px] pt-[18px] pb-1.5">{c.title}</h3>
              <p className="px-[34px] text-tinta-mole font-semibold">{c.desc}</p>
              <div className="flex flex-wrap gap-2 px-[34px] pt-[18px]">
                {c.tags.map(t => (
                  <span key={t} className="bg-ceu text-azul-esc font-extrabold text-[.82rem] px-[13px] py-[6px] rounded-full">{t}</span>
                ))}
              </div>
              <div className="relative mx-[34px] mt-6 mb-[34px] rounded-m overflow-hidden h-[190px] bg-ceu">
                <Image src={c.img} alt={c.alt} fill sizes="560px" className="object-cover" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
