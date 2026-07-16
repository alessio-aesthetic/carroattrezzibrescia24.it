import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-12 border-b border-gray-950/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-[#132844] text-xs font-black text-[#f5c451]">CB</span><span className="font-black text-[#132844]">Carroattrezzi Brescia</span></div>
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
                <li>Via Antonio Allegri, 8725124 Brescia BS</li>
                <li><a href="tel:+390302041924" className="hover:text-[#b45309]">030 204 1924</a></li>
                <li>Attivi 24 ore su 24</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Carroattrezzi Brescia 24H. Tutti i diritti riservati.</p>
          </div>
        </Container>
    </footer>
  )
}
