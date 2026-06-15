import PawIcon from './PawIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-azul-prof text-white pt-14 pb-[30px]" aria-label="Rodapé">
      <div className="w-[min(92%,1536px)] mx-auto flex flex-wrap gap-[30px] justify-between items-start">
        <div>
          <a href="#topo" aria-label="Bicho Mania — início"
            className="flex items-center gap-[11px] font-fredoka font-semibold text-[1.42rem] text-white">
            <span className="w-[38px] h-[38px] grid place-items-center bg-azul rounded-[13px] text-white shadow-azul">
              <PawIcon className="w-[22px] h-[22px]" />
            </span>
            Bicho<strong className="font-semibold">Mania</strong>
          </a>
          <p className="max-w-[30ch] text-white/70 font-semibold mt-3.5">
            Pet shop, banho &amp; tosa e clínica veterinária no bairro Lourdes, Caxias do Sul. Cuidando de quem você ama desde 2015.
          </p>
        </div>

        <div className="flex gap-[54px] flex-wrap">
          <nav aria-label="Serviços">
            <h4 className="font-fredoka font-medium text-[#7DC0FF] mb-3 text-[1.05rem]">Serviços</h4>
            <ul className="flex flex-col gap-[9px] list-none">
              {[['#banhotosa','Banho & Tosa'],['#vet','Veterinária'],['#loja','Loja Pet'],['#servicos','Vacinas']].map(([h,l]) => (
                <li key={h}><a href={h} className="text-white/[.82] font-bold hover:text-white transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Contato">
            <h4 className="font-fredoka font-medium text-[#7DC0FF] mb-3 text-[1.05rem]">Contato</h4>
            <ul className="flex flex-col gap-[9px] list-none">
              <li><a href="tel:+555430667350" className="text-white/[.82] font-bold hover:text-white transition-colors duration-200">(54) 3066-7350</a></li>
              <li><a href="https://wa.link/9tk1iq" target="_blank" rel="noopener noreferrer" className="text-white/[.82] font-bold hover:text-white transition-colors duration-200">WhatsApp</a></li>
              <li><a href="https://instagram.com/bichomania_caxias" target="_blank" rel="noopener noreferrer" className="text-white/[.82] font-bold hover:text-white transition-colors duration-200">@bichomania_caxias</a></li>
            </ul>
          </nav>

          <address className="not-italic">
            <h4 className="font-fredoka font-medium text-[#7DC0FF] mb-3 text-[1.05rem]">Endereço</h4>
            <ul className="flex flex-col gap-[9px] list-none text-white/[.82] font-bold">
              <li>Rua Simão Cembrani, 117</li>
              <li>Bairro Lourdes</li>
              <li>Caxias do Sul / RS</li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/[.12] mt-10 pt-5 text-center text-white/55 font-bold text-[.85rem]">
        © {year} Bicho Mania · Feito com carinho 🐾
      </div>
    </footer>
  )
}
