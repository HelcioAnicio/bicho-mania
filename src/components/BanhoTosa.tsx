import Image from 'next/image'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-white" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function BanhoTosa() {
  return (
    <section id="banhotosa" aria-labelledby="bt-heading"
      className="relative overflow-hidden py-[clamp(70px,11vh,140px)] text-white"
      style={{ background:'#063463' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:'radial-gradient(80% 70% at 90% 0%,rgba(14,118,217,.5),transparent 60%)' }}
        aria-hidden="true" />

      <div className="relative w-[min(92%,1240px)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[54px] items-center">
        {/* Copy */}
        <div>
          <span className="reveal inline-flex items-center gap-2 font-extrabold uppercase tracking-[.14em] text-[.8rem] text-[#7DC0FF]
            before:content-[''] before:w-[26px] before:h-[3px] before:rounded-full before:bg-[#7DC0FF]">
            O spa do seu pet
          </span>
          <h2 id="bt-heading"
            className="reveal text-[clamp(2.1rem,4.4vw,3.4rem)] mt-4 mb-3.5 text-white"
            style={{ '--stagger':1 } as React.CSSProperties}>
            Um banho que é puro relaxamento
          </h2>
          <p className="reveal text-[1.1rem] text-white/[.78] max-w-[46ch] font-semibold"
            style={{ '--stagger':2 } as React.CSSProperties}>
            Aqui banho não é correria. A gente combina cromoterapia e musicoterapia para deixar seu pet calminho do começo ao fim.
          </p>

          {/* Therapy chips */}
          <div className="reveal flex gap-3 mt-[26px] flex-wrap" style={{ '--stagger':3 } as React.CSSProperties}>
            {[
              { label:'Cromoterapia', icon:<svg width="20" viewBox="0 0 24 24" fill="none" stroke="#7DC0FF" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18" stroke="#7DC0FF"/></svg> },
              { label:'Musicoterapia', icon:<svg width="20" viewBox="0 0 24 24" fill="none" stroke="#7DC0FF" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
            ].map(({ label, icon }) => (
              <span key={label}
                className="flex items-center gap-[9px] bg-white/10 border border-white/[.22] px-4 py-[10px] rounded-[14px] font-extrabold">
                {icon}
                <strong className="font-fredoka font-medium">{label}</strong>
              </span>
            ))}
          </div>

          {/* List */}
          <ul className="mt-[30px] flex flex-col gap-[14px] list-none" role="list">
            {[
              { s:4, text:<><strong>Banho 5 estrelas</strong> com tosa higiênica, corte de unhas e limpeza de ouvidos inclusos.</> },
              { s:5, text:<>Tosa <strong>na máquina, bebê e Spitz</strong> — do clássico ao charmoso, do jeitinho que combina com ele.</> },
              { s:6, text:<>Ambiente <strong>climatizado e higienizado</strong>, com produtos de qualidade e profissionais que amam o que fazem.</> },
            ].map(({ s, text }) => (
              <li key={s} className="reveal flex gap-[14px] items-start font-bold text-[1.06rem]"
                style={{ '--stagger':s } as React.CSSProperties}>
                <span className="flex-none w-7 h-7 rounded-full bg-zap grid place-items-center mt-[1px]" aria-hidden="true">
                  <CheckIcon />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-[30px]" style={{ '--stagger':7 } as React.CSSProperties}>
            <a href="https://wa.link/9tk1iq" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-extrabold font-nunito cursor-pointer rounded-full px-7 py-4 text-[1.05rem] bg-zap text-white shadow-zap transition-transform duration-200 hover:-translate-y-[3px] hover:scale-[1.03]">
              Agendar banho agora
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="reveal-pop relative rounded-g overflow-hidden shadow-heavy aspect-[4/3.4]">
          <Image src="/assets/banho-tosa.png" alt="Sala de banho e tosa da Bicho Mania"
            fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
