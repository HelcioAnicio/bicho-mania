'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import PawIcon from './PawIcon'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M.06 24l1.7-6.16a11.86 11.86 0 0 1-1.6-5.95C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.42 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.7-1.45L.06 24zm6.6-3.8c1.68.99 3.28 1.59 5.4 1.59 5.45 0 9.9-4.43 9.9-9.88a9.87 9.87 0 0 0-9.88-9.88c-5.46 0-9.9 4.44-9.9 9.89 0 2.23.65 3.9 1.74 5.65l-1 3.66 3.74-1.03zm11.39-5.55c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42z" />
  </svg>
)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches
    if (reduce) return
    const hero = heroRef.current
    if (!hero) return

    const floats = [...hero.querySelectorAll<HTMLElement>('[data-float]')]
    const decos  = [...hero.querySelectorAll<HTMLElement>('[data-par]')]

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      const dx = (e.clientX - r.width  / 2) / r.width
      const dy = (e.clientY - r.height / 2) / r.height
      floats.forEach(f => {
        f.style.transform = `translate(${dx * +f.dataset.float! * 30}px,${dy * +f.dataset.float! * 30}px)`
      })
    }
    const onLeave = () => floats.forEach(f => (f.style.transform = ''))
    const onScroll = () => {
      const y = window.scrollY
      decos.forEach(d => { d.style.transform = `translateY(${y * +d.dataset.par!}px)` })
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      ref={heroRef}
      id="topo"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(120% 90% at 85% -10%,#BFE0FF 0%,transparent 55%),
          radial-gradient(120% 120% at -10% 110%,#DCEEFF 0%,transparent 55%),
          linear-gradient(180deg,#F4FAFF,#fff)`,
      }}
    >
      {/* Decorative paw prints */}
      <PawIcon data-par="0.05" className="paw-deco absolute text-azul/[.16] pointer-events-none" style={{ left:'7%', top:'24%', width:60 }} />
      <PawIcon data-par="-0.04" className="paw-deco absolute text-azul/[.16] pointer-events-none" style={{ right:'42%', bottom:'14%', width:44 }} />

      <div className="w-[min(92%,1240px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-8 items-center pt-[90px] pb-10 w-full">

        {/* ── Copy ── */}
        <div>
          <span className="reveal inline-flex items-center gap-[9px] bg-white border border-[rgba(14,118,217,.14)] text-azul-esc font-extrabold text-[.86rem] px-4 py-2 rounded-full shadow-suave uppercase tracking-[.04em]">
            <span className="w-[9px] h-[9px] rounded-full bg-zap animate-pulse-dot" aria-hidden="true" />
            Em Caxias do Sul · desde 2015
          </span>

          <h1 className="reveal text-[clamp(2.9rem,6.2vw,5.3rem)] mt-[22px] mb-[18px] font-fredoka"
            style={{ '--stagger': 1 } as React.CSSProperties}>
            Aqui seu pet é tratado feito{' '}
            <span className="hero-marker text-azul">gente da família</span>
          </h1>

          <p className="reveal text-[clamp(1.05rem,1.5vw,1.28rem)] text-tinta-mole max-w-[30em] font-semibold"
            style={{ '--stagger': 2 } as React.CSSProperties}>
            Banho &amp; tosa com cromoterapia e musicoterapia, clínica veterinária completa e uma loja pet pra fazer mimo. Tudo num lugar só — pertinho de você, no bairro Lourdes.
          </p>

          <div className="reveal flex flex-wrap gap-[14px] mt-[30px]" style={{ '--stagger': 3 } as React.CSSProperties}>
            <a href="https://wa.link/9tk1iq" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-extrabold font-nunito cursor-pointer rounded-full px-7 py-4 text-[1.05rem] bg-zap text-white shadow-zap transition-transform duration-200 hover:-translate-y-[3px] hover:scale-[1.03]">
              <WaIcon /> Falar no WhatsApp
            </a>
            <a href="#servicos"
              className="inline-flex items-center gap-2.5 font-extrabold font-nunito cursor-pointer rounded-full px-7 py-4 text-[1.05rem] bg-white text-azul-esc shadow-suave transition-transform duration-200 hover:-translate-y-[3px] hover:scale-[1.03]">
              Conhecer serviços
            </a>
          </div>

          <div className="reveal flex gap-[26px] mt-[34px] flex-wrap" style={{ '--stagger': 4 } as React.CSSProperties}>
            <div className="flex flex-col">
              <strong className="font-fredoka text-[1.8rem] text-azul-esc leading-none">+400</strong>
              <span className="text-sol text-[1.05rem]" aria-hidden="true">★★★★★</span>
              <span className="text-[.84rem] font-bold text-tinta-mole">avaliações no Google</span>
            </div>
            <div className="flex flex-col">
              <strong className="font-fredoka text-[1.8rem] text-azul-esc leading-none">11</strong>
              <span className="text-[.84rem] font-bold text-tinta-mole">anos cuidando<br />de Caxias</span>
            </div>
            <div className="flex flex-col">
              <strong className="font-fredoka text-[1.8rem] text-azul-esc leading-none">3 em 1</strong>
              <span className="text-[.84rem] font-bold text-tinta-mole">banho, vet<br />e pet shop</span>
            </div>
          </div>
        </div>

        {/* ── Visual ── */}
        <div className="hero-visual relative h-[min(76vh,640px)]">
          <div className="absolute rounded-full blur-[2px] z-0 pointer-events-none"
            style={{ width:'62%', height:'62%', left:'18%', top:'12%', background:'radial-gradient(circle,#9CCDFF,#BFE0FF)' }}
            aria-hidden="true" />

          <div className="reveal-pop absolute inset-0 rounded-g overflow-hidden shadow-azul" style={{ '--rot':'3deg' } as React.CSSProperties}>
            <Image src="/assets/fachada.png" alt="Fachada da Bicho Mania em Caxias do Sul"
              fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-[rgba(6,52,99,.32)]" aria-hidden="true" />
          </div>

          {/* Float cards */}
          {[
            { cls:'float-card absolute bg-white rounded-[18px] p-[13px_16px] shadow-azul flex items-center gap-[11px] font-extrabold z-[3]', pos:{ left:-28, top:'14%' }, float:'1',
              ic:<span className="w-[38px] h-[38px] rounded-[12px] grid place-items-center bg-azul text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M12 21s-7-4.5-9.3-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.3 12C19 16.5 12 21 12 21z"/></svg></span>,
              text:<span className="text-tinta text-sm leading-tight">Banho 5 estrelas<small className="block font-bold text-tinta-mole text-[.74rem]">com aromaterapia</small></span> },
            { cls:'float-card absolute bg-white rounded-[18px] p-[13px_16px] shadow-azul flex items-center gap-[11px] font-extrabold z-[3]', pos:{ right:-22, top:'42%' }, float:'1.5',
              ic:<span className="w-[38px] h-[38px] rounded-[12px] grid place-items-center bg-zap text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>,
              text:<span className="text-tinta text-sm leading-tight">Atendimento hoje<small className="block font-bold text-tinta-mole text-[.74rem]">sem fila, com carinho</small></span> },
            { cls:'float-card absolute bg-white rounded-[18px] p-[13px_16px] shadow-azul flex items-center gap-[11px] font-extrabold z-[3]', pos:{ left:'6%', bottom:-22 }, float:'0.7',
              ic:<span className="w-[38px] h-[38px] rounded-[12px] grid place-items-center bg-sol text-azul-prof"><PawIcon className="w-5 h-5"/></span>,
              text:<span className="text-tinta text-sm leading-tight">Pet feliz<small className="block font-bold text-tinta-mole text-[.74rem]">volta pra casa cheiroso</small></span> },
          ].map((c, i) => (
            <div key={i} className={c.cls} style={c.pos as React.CSSProperties} data-float={c.float} aria-hidden="true">
              {c.ic}{c.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#servicos" aria-label="Rolar para explorar serviços"
        className="absolute left-1/2 bottom-[22px] -translate-x-1/2 flex flex-col items-center gap-1.5 text-azul-esc font-extrabold text-[.78rem] tracking-[.1em] uppercase z-[5]">
        role pra explorar
        <span className="scroll-mouse w-[22px] h-[36px] border-2 border-azul-esc rounded-[14px]" aria-hidden="true" />
      </a>
    </header>
  )
}
