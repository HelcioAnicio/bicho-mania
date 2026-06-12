const INFO = [
  { i:4,
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-white" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label:'Rua Simão Cembrani, 117', sub:'Bairro Lourdes · Caxias do Sul / RS' },
  { i:5,
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-white" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
    label:'Seg a Sex 08h–19h · Sáb 08h–12h', sub:'Domingo fechado' },
  { i:6,
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-white" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>,
    label:'@bichomania_caxias', sub:'Siga o dia a dia da loja no Instagram' },
]

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M.06 24l1.7-6.16a11.86 11.86 0 0 1-1.6-5.95C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.42 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.7-1.45L.06 24zm6.6-3.8c1.68.99 3.28 1.59 5.4 1.59 5.45 0 9.9-4.43 9.9-9.88a9.87 9.87 0 0 0-9.88-9.88c-5.46 0-9.9 4.44-9.9 9.89 0 2.23.65 3.9 1.74 5.65l-1 3.66 3.74-1.03z"/>
  </svg>
)

export default function Visita() {
  return (
    <section id="visita" aria-labelledby="visita-heading"
      className="relative overflow-hidden py-[clamp(70px,11vh,140px)] bg-azul text-white">
      <div className="absolute w-[420px] h-[420px] -top-[140px] -right-[120px] rounded-full bg-white/[.08] pointer-events-none" aria-hidden="true" />
      <div className="absolute w-[300px] h-[300px] -bottom-[130px] -left-[90px] rounded-full bg-white/[.08] pointer-events-none" aria-hidden="true" />

      <div className="relative w-[min(92%,1240px)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[46px] items-stretch">
        <div>
          <span className="reveal inline-flex items-center gap-2 font-extrabold uppercase tracking-[.14em] text-[.8rem] text-[#BFE0FF]">
            Vem pra cá
          </span>
          <h2 id="visita-heading"
            className="reveal text-[clamp(2.2rem,4.6vw,3.6rem)] mt-4 mb-3.5 text-white"
            style={{ '--stagger':1 } as React.CSSProperties}>
            Bora dar um carinho<br />no seu melhor amigo?
          </h2>
          <p className="reveal text-[1.1rem] text-white/[.85] max-w-[46ch] font-semibold"
            style={{ '--stagger':2 } as React.CSSProperties}>
            Chama no WhatsApp ou liga pra gente. Atendimento rápido, sem enrolação e com aquele cuidado de sempre.
          </p>

          <div className="reveal flex flex-wrap gap-[14px] mt-[30px]" style={{ '--stagger':3 } as React.CSSProperties}>
            <a href="https://wa.link/9tk1iq" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-extrabold font-nunito rounded-full px-7 py-4 text-[1.05rem] bg-zap text-white shadow-zap transition-transform duration-200 hover:-translate-y-[3px] hover:scale-[1.03]">
              <WaIcon /> (54) 99910-1694
            </a>
            <a href="tel:+555430667350"
              className="inline-flex items-center gap-2.5 font-extrabold font-nunito rounded-full px-7 py-4 text-[1.05rem] bg-white/[.14] text-white border-2 border-white/50 transition-all duration-200 hover:bg-white/[.24] hover:-translate-y-[3px]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>
              </svg>
              (54) 3066-7350
            </a>
          </div>

          <ul className="mt-[34px] flex flex-col gap-[18px] list-none" role="list">
            {INFO.map(({ i, icon, label, sub }) => (
              <li key={i} className="reveal flex gap-[15px] items-start"
                style={{ '--stagger':i } as React.CSSProperties}>
                <span className="flex-none w-11 h-11 rounded-[14px] bg-white/[.16] grid place-items-center" aria-hidden="true">{icon}</span>
                <span>
                  <strong className="font-fredoka font-medium text-[1.15rem] block">{label}</strong>
                  <span className="text-white/[.82] font-semibold">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="reveal-pop rounded-g overflow-hidden shadow-heavy min-h-[380px] bg-white border-[6px] border-white">
          <iframe
            title="Localização da Bicho Mania no Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Rua%20Sim%C3%A3o%20Cembrani%20117%20Lourdes%20Caxias%20do%20Sul%20RS&output=embed"
            className="w-full h-full min-h-[380px] border-0 block"
            style={{ filter:'saturate(1.05)' }}
          />
        </div>
      </div>
    </section>
  )
}
