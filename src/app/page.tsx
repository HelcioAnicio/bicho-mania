import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BanhoTosa from '@/components/BanhoTosa'
import Vet from '@/components/Vet'
import Tour from '@/components/Tour'
import Familia from '@/components/Familia'
import Visita from '@/components/Visita'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CustomCursor from '@/components/CustomCursor'
import RevealInit from '@/components/RevealInit'

export default function Page() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-azul focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>
      <CustomCursor />
      <RevealInit />
      <Nav />
      <main id="main-content">
        <Hero />
        <Services />
        <BanhoTosa />
        <Vet />
        <Tour />
        <Familia />
        <Visita />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
