'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

const phone = '030 204 1924'
const tel = 'tel:+390302041924'

const services = [
  ['01', 'Soccorso stradale 24 ore', 'Assistenza rapida per auto ferme, guasti improvvisi e situazioni urgenti in città e provincia.'],
  ['02', 'Traino auto', 'Trasporto ordinato verso officina, carrozzeria, deposito o destinazione concordata.'],
  ['03', 'Recupero auto incidentata', 'Messa in sicurezza e recupero del veicolo dopo un incidente, con attenzione alla situazione stradale.'],
  ['04', 'Carroattrezzi moto', 'Recupero accurato di moto e scooter non marcianti, caduti o danneggiati.'],
  ['05', 'Assistenza batteria scarica', 'Supporto per veicoli che non si avviano e organizzazione del trasporto quando necessario.'],
  ['06', 'Recupero furgoni', 'Soluzioni per furgoni leggeri, mezzi commerciali e veicoli bloccati durante il lavoro.'],
]

const zones = ['Brescia', 'Roncadelle', 'San Zeno Naviglio', 'Borgosatollo', 'Castel Mella', 'Concesio', 'Rezzato', 'Gussago', 'Cellatica', 'Nave', 'Botticino', 'Flero']

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative mx-2 mt-2 overflow-hidden rounded-4xl bg-[#fff7ed] ring-1 ring-black/5">
        <Gradient className="absolute inset-0 opacity-80" />
        <Container className="relative">
          <Navbar />
          <div className="grid gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:pt-28 lg:pb-36">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b45309]">Soccorso stradale Brescia</p>
              <h1 className="mt-6 max-w-4xl font-display text-6xl/[0.92] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.88] lg:text-9xl/[0.82]">
                Carroattrezzi a Brescia.
              </h1>
              <p className="mt-8 max-w-xl text-xl/8 font-medium text-gray-950/70 sm:text-2xl/9">
                Quando il veicolo si ferma, serve una risposta concreta. Organizziamo soccorso stradale, traino e recupero con una gestione chiara, rapida e presente 24 ore su 24.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={tel} className="bg-[#b45309] text-white data-hover:bg-[#92400e]">Chiama ora {phone}</Button>
                <Button href="#servizi" variant="secondary">Scopri i servizi</Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-gray-950/60">
                <span>24 ore su 24</span><span>Brescia e provincia</span><span>Risposta diretta</span>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <div className="relative min-h-[34rem] overflow-hidden rounded-4xl bg-gray-950 shadow-2xl shadow-orange-950/15">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(251,191,36,0.28),transparent_28%),linear-gradient(135deg,#111827,#292524_60%,#7c2d12)]" />
                <img src="/images/hero-towtruck.webp" alt="Carroattrezzi durante un intervento di soccorso stradale a Brescia" className="absolute inset-0 size-full object-cover mix-blend-screen opacity-90" />
                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">Brescia · 24H</p>
                  <p className="mt-3 max-w-sm font-display text-3xl font-medium leading-tight">Un aiuto organizzato quando non puoi aspettare.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <main>
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal><Subheading>Quando serve davvero</Subheading><Heading as="h2" className="mt-3 max-w-4xl">La strada si ferma. La tua assistenza no.</Heading></Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                ['01', 'Chiami e ci spieghi il problema', 'Raccogliamo posizione, tipo di veicolo e situazione per capire subito quale intervento serve.'],
                ['02', 'Organizziamo il recupero', 'Definiamo con te dove portare il mezzo e prepariamo l’intervento con le informazioni giuste.'],
                ['03', 'Torni a muoverti', 'Il veicolo viene trainato o trasportato con attenzione, senza aggiungere confusione a una giornata già difficile.'],
              ].map(([number, title, text], index) => <Reveal key={number} delay={index * 0.08} className="border-t border-gray-200 pt-6"><p className="font-mono text-sm text-[#b45309]">{number}</p><h3 className="mt-5 font-display text-2xl font-medium text-gray-950">{title}</h3><p className="mt-4 max-w-sm text-base/7 text-gray-600">{text}</p></Reveal>)}
            </div>
          </Container>
        </section>

        <section id="servizi" className="mx-2 rounded-4xl bg-gray-950 py-24 text-white sm:py-32">
          <Container>
            <Reveal><Subheading dark>Servizi</Subheading><Heading as="h2" dark className="mt-3 max-w-4xl">Una squadra pronta per ogni imprevisto.</Heading><p className="mt-6 max-w-2xl text-lg/8 text-gray-300">Dalla batteria scarica al recupero dopo un incidente, ogni intervento viene organizzato in base al mezzo, al punto in cui ti trovi e alla destinazione.</p></Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-4xl bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([number, title, text], index) => <Reveal key={title} delay={index * 0.05} className="bg-gray-950 p-7 transition hover:bg-gray-900 sm:p-9"><p className="font-mono text-sm text-orange-300">{number}</p><h3 className="mt-16 font-display text-2xl font-medium">{title}</h3><p className="mt-4 text-sm/6 text-gray-400">{text}</p><a href={tel} className="mt-7 inline-flex text-sm font-semibold text-orange-300 underline decoration-orange-300/40 underline-offset-4">Parla con noi</a></Reveal>)}
            </div>
          </Container>
        </section>

        <section id="zone" className="py-24 sm:py-32">
          <Container>
            <Reveal><Subheading>Zone servite</Subheading><Heading as="h2" className="mt-3 max-w-3xl">Brescia e i comuni della provincia.</Heading><p className="mt-6 max-w-2xl text-lg/8 text-gray-600">Interveniamo su strade urbane, tangenziali, aree industriali, parcheggi e collegamenti provinciali. Comunica il punto esatto e organizziamo il recupero in modo più preciso.</p></Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-gray-200 pt-8 text-base font-medium text-gray-800 sm:grid-cols-3 lg:grid-cols-4">{zones.map((zone) => <a key={zone} href={tel} className="border-b border-gray-100 pb-4 transition hover:text-[#b45309]">Carroattrezzi a {zone}</a>)}</div>
          </Container>
        </section>

        <section id="contatti" className="mx-2 rounded-4xl bg-[#fff7ed] py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <Reveal><Subheading>Contatti</Subheading><Heading as="h2" className="mt-3 max-w-3xl">Veicolo fermo a Brescia?</Heading><p className="mt-6 max-w-xl text-lg/8 text-gray-600">Chiama direttamente per spiegare la situazione e ricevere indicazioni immediate. Siamo disponibili 24 ore su 24 per organizzare traino, recupero e assistenza stradale.</p></Reveal>
              <Reveal delay={0.1} className="lg:justify-self-end"><a href={tel} className="group block rounded-4xl bg-gray-950 p-8 text-white shadow-xl shadow-orange-950/15 transition hover:-translate-y-1 sm:p-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Numero diretto</p><p className="mt-5 font-display text-4xl font-medium tracking-tight sm:text-5xl">{phone}</p><p className="mt-6 text-sm text-gray-400">Clicca per chiamare il soccorso stradale.</p></a></Reveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
