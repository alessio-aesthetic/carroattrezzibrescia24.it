import type { Metadata } from 'next'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { site, zones } from '@/data/site'

const slugify = (name: string) => name.toLowerCase().replaceAll(' ', '-')

export function generateStaticParams() {
  return zones.map((name) => ({ slug: slugify(name) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const name = zones.find((item) => slugify(item) === params.slug) ?? 'Brescia'
  return { title: `Carroattrezzi a ${name}`, description: `Carroattrezzi e soccorso stradale a ${name}: traino, recupero auto, moto e assistenza per veicoli fermi.` }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const name = zones.find((item) => slugify(item) === params.slug) ?? 'Brescia'
  return <div className="min-h-screen bg-white text-slate-950"><Container><Navbar /></Container><main><section className="bg-[#f6f8fa] py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e85d32]">Brescia e provincia</p><h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] text-[#132844] sm:text-7xl">Carroattrezzi a {name}</h1><p className="mt-8 max-w-3xl text-xl leading-8 text-slate-700">Se il veicolo si ferma a {name}, puoi contare su un riferimento per organizzare traino, recupero e soccorso stradale con una comunicazione semplice e concreta.</p><Button href={site.tel} className="mt-9 bg-[#e85d32] text-white data-hover:bg-[#c84a22]">Chiama {site.phone}</Button></Container></section><section className="bg-white py-20 sm:py-28"><Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e85d32]">Assistenza locale</p><h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-[#132844]">Quando serve un recupero, conta conoscere il territorio.</h2></div><div className="space-y-6 text-lg leading-8 text-slate-700"><p>Le strade urbane, le aree produttive, i parcheggi e i collegamenti verso Brescia possono richiedere modalità diverse. Per questo chiediamo il punto esatto, il tipo di veicolo e il problema riscontrato prima di organizzare l’intervento.</p><p>Il <strong>soccorso stradale a {name}</strong> comprende auto in panne, veicoli incidentati, moto, scooter e mezzi che devono essere trasportati verso officina, carrozzeria o deposito. Indicazioni chiare aiutano a ridurre attese e manovre non necessarie.</p><p>Durante la chiamata puoi spiegare le condizioni della strada e comunicare una destinazione precisa. In questo modo il recupero viene preparato con maggiore attenzione e la situazione resta sotto controllo.</p></div></Container></section><section className="bg-[#132844] py-20 text-white sm:py-24"><Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c451]">Pronto intervento</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">Veicolo fermo a {name}?</h2></div><Button href={site.tel} className="bg-[#e85d32] text-white data-hover:bg-[#c84a22]">Chiama {site.phone}</Button></Container></section></main><Footer /></div>
}
