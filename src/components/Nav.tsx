'use client'

import { useEffect, useState } from 'react'
import PawIcon from './PawIcon'

const LINKS = [
  { href: '#servicos',   label: 'Serviços'      },
  { href: '#banhotosa',  label: 'Banho & Tosa'  },
  { href: '#vet',        label: 'Veterinária'   },
  { href: '#loja',       label: 'A Loja'        },
  { href: '#visita',     label: 'Contato'       },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className={[
          'fixed inset-x-0 top-0 z-[200] flex items-center justify-between transition-all duration-300',
          'px-[clamp(16px,4vw,46px)]',
          solid
            ? 'bg-white/86 backdrop-blur-[14px] shadow-[0_8px_30px_-18px_rgba(10,33,56,.4)] py-3'
            : 'py-[18px]',
        ].join(' ')}
      >
        {/* Brand */}
        <a href="#topo" aria-label="Bicho Mania — início"
          className="flex items-center gap-[11px] font-fredoka font-semibold text-[1.42rem] text-azul-esc">
          <span className="w-[38px] h-[38px] grid place-items-center bg-azul rounded-[13px] text-white shadow-azul">
            <PawIcon className="w-[22px] h-[22px]" />
          </span>
          Bicho<strong className="text-tinta font-semibold">Mania</strong>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 font-nunito font-bold list-none">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="relative text-[.98rem] text-tinta transition-colors duration-200 hover:text-azul
                  after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[3px] after:w-0
                  after:rounded-full after:bg-azul after:transition-all after:duration-300
                  hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="tel:+555430667350"
          className="hidden md:inline-flex items-center gap-2 whitespace-nowrap bg-azul text-white
            px-5 py-[11px] rounded-full font-nunito font-extrabold shadow-azul
            transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-azul-esc">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          (54) 3066-7350
        </a>

        {/* Mobile burger */}
        <button onClick={() => setOpen(o => !o)} aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1">
          {[
            open ? 'rotate-45 translate-y-2' : '',
            open ? 'opacity-0' : '',
            open ? '-rotate-45 -translate-y-2' : '',
          ].map((cls, i) => (
            <span key={i}
              className={`block w-[26px] h-[3px] rounded-full bg-azul-esc transition-all duration-300 origin-center ${cls}`} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu de navegação"
          className="fixed inset-x-0 top-0 z-[190] bg-white/95 backdrop-blur-[14px] pt-20 pb-8 px-6
            flex flex-col gap-4 shadow-suave md:hidden">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-xl font-bold text-tinta py-2 border-b border-[rgba(14,118,217,.1)] hover:text-azul transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+555430667350" onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-azul text-white px-5 py-3 rounded-full font-extrabold shadow-azul">
            (54) 3066-7350
          </a>
        </div>
      )}
    </>
  )
}
