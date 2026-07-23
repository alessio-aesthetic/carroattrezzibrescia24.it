import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { services, site } from '@/data/site'

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug)
  return { title: `${service?.title ?? 'Servizio'} a Brescia`, description: `${service?.title ?? 'Soccorso stradale'} a Brescia: assistenza chiara e recupero del veicolo verso la destinazione concordata.` }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug) ?? services[0]
  return <div data-template={site.template} className="min-h-screen bg-white text-slate-950"><Container><Navbar /></Container><main><section className="bg-[#f6f8fa] py-20 sm:py-28"><Container><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e85d32]">Servizio a Brescia</p><h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] text-[#132844] sm:text-7xl">{service.title} a Brescia</h1><p className="mt-8 max-w-3xl text-xl leading-8 text-slate-700">{service.intro}</p><div className="mt-9 flex flex-wrap gap-3"><Button href={site.tel} className="bg-[#e85d32] text-white data-hover:bg-[#c84a22]">Chiama {site.phone}</Button><Button href="/#servizi" variant="secondary">Tutti i servizi</Button></div></Container></section><section className="bg-white py-20 sm:py-28"><Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e85d32]">Come lavoriamo</p><h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-[#132844]">Una gestione ordinata, dal primo contatto alla destinazione.</h2></div><div className="space-y-6 text-lg leading-8 text-slate-700"><p>Quando il veicolo si ferma, la priorità è capire rapidamente che cosa è successo e dove si trova. Una descrizione precisa del mezzo, della posizione e delle condizioni permette di preparare meglio il recupero e di evitare passaggi inutili.</p><p>Il servizio di <strong>{service.title.toLowerCase()} a Brescia</strong> viene organizzato tenendo conto della sicurezza, degli accessi e della destinazione indicata. Prima di procedere puoi comunicare se l’auto si trova in strada, in un parcheggio, in un cortile o lungo un collegamento a scorrimento veloce.</p><p>Restiamo disponibili per chiarire i dettagli pratici: dove portare il veicolo, quali informazioni servono e come preparare l’area quando il mezzo è fermo in una posizione delicata.</p></div></Container></section><section className="bg-[#132844] py-20 text-white sm:py-24"><Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c451]">Serve assistenza?</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">Parlaci del veicolo e della situazione.</h2></div><Button href={site.tel} className="bg-[#e85d32] text-white data-hover:bg-[#c84a22]">Chiama {site.phone}</Button></Container></section></main><Footer /></div>
}

