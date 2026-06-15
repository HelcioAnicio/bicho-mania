import PawIcon from './PawIcon'

const SPECS = [
  'Cardiologia', 'Dermatologia', 'Ortopedia', 'Endocrinologia',
  'Cirurgia',    'Gastrologia',  'Nefrologia', 'Animais não convencionais',
]

export default function Vet() {
  return (
    <section id="vet" aria-labelledby="vet-heading"
      className="py-[clamp(70px,11vh,140px)] text-center">
      <div className="w-[min(92%,1240px)] mx-auto">
        <div className="reveal mb-[42px] flex flex-col items-center">
          <span className="inline-flex items-center gap-2 font-black uppercase tracking-[.14em] text-[.8rem] text-azul">
            Clínica veterinária
          </span>
          <h2 id="vet-heading" className="text-[clamp(2.1rem,4.4vw,3.4rem)] mt-4 mb-3.5 mx-auto max-w-[16ch]">
            Especialistas pra cada fase, cada raça, cada bichinho
          </h2>
          <p className="text-[1.1rem] text-tinta-mole max-w-[46ch] font-semibold">
            Da consulta de rotina ao cuidado especializado — inclusive para os pets não convencionais.
          </p>
        </div>

        <ul className="flex flex-wrap gap-[14px] justify-center max-w-[880px] mx-auto list-none" role="list">
          {SPECS.map((s, i) => (
            <li key={s}>
              <div
                className="spec reveal-pop flex items-center gap-[11px] bg-white border border-[rgba(14,118,217,.14)]
                  px-[22px] py-[14px] rounded-full font-extrabold text-[1.02rem] shadow-suave cursor-default
                  transition-all duration-200 hover:bg-azul hover:text-white hover:-translate-y-1 hover:rotate-[-2deg]
                  group"
                style={{ '--stagger':i } as React.CSSProperties}
              >
                <PawIcon className="w-[22px] h-[22px] text-azul group-hover:text-white transition-all duration-300 group-hover:rotate-[20deg] group-hover:scale-[1.2]" />
                {s}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
