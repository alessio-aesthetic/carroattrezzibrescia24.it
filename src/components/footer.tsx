import { Container } from './container'
import { Gradient } from './gradient'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="px-2 pb-2 pt-2">
      <Gradient className="rounded-4xl bg-[#fff7ed]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 border-b border-gray-950/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <Logo className="h-9" />
              <p className="mt-6 max-w-sm text-sm/6 text-gray-600">
                Soccorso stradale, traino e recupero veicoli a Brescia e provincia, con assistenza disponibile 24 ore su 24.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-950/50">Servizi</p>
              <ul className="mt-5 space-y-3 text-sm font-medium text-gray-800">
                <li>Soccorso stradale 24 ore</li>
                <li>Traino e recupero auto</li>
                <li>Carroattrezzi moto e furgoni</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-950/50">Contatti</p>
              <ul className="mt-5 space-y-3 text-sm font-medium text-gray-800">
                <li>Brescia e provincia</li>
                <li><a href="tel:+390302041924" className="hover:text-[#b45309]">030 204 1924</a></li>
                <li>Attivi 24 ore su 24</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Carroattrezzi Brescia 24H. Tutti i diritti riservati.</p>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
