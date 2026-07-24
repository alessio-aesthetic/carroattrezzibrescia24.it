import Link from 'next/link'

import { Container } from '@/components/container'
import { faqs, services, site, zones } from '@/data/site'

export default function TailAwesomeBrescia() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <Container className="flex min-h-[78px] items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3 font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0f3d6e] text-xl text-white">+</span>
            <span>{site.name}</span>
          </Link>
          <nav className="hidden gap-7 text-sm font-bold text-slate-600 lg:flex">
            <a href="#servizi">Servizi</a><a href="#zone">Zone</a><a href="#faq">FAQ</a>
          </nav>
          <Link href={site.tel} className="rounded-lg bg-[#e85d32] px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-900/15">Chiama {site.phone}</Link>
        </Container>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-white py-14 sm:py-24">
          <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#e85d32]">Soccorso stradale, con una regia chiara</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-[#0f3d6e] sm:text-8xl">Carroattrezzi a Brescia</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Quando il veicolo si ferma, la cosa piÃ¹ utile Ã¨ sapere subito quale sarÃ  il prossimo passo. Raccogliamo posizione, mezzo e problema e organizziamo il recupero con attenzione alla sicurezza e alla destinazione.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href={site.tel} className="rounded-lg bg-[#e85d32] px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-900/15">Richiedi assistenza</Link><a href="#servizi" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800">Vedi i servizi</a></div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6"><div><p className="text-2xl font-black text-[#0f3d6e]">24H</p><p className="mt-1 text-xs font-bold text-slate-500">disponibilitÃ </p></div><div><p className="text-2xl font-black text-[#0f3d6e]">BRESCIA</p><p className="mt-1 text-xs font-bold text-slate-500">cittÃ  e provincia</p></div><div><p className="text-2xl font-black text-[#0f3d6e]">CHIARO</p><p className="mt-1 text-xs font-bold text-slate-500">prima di partire</p></div></div>
            </div>
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#0f3d6e] p-3 shadow-2xl shadow-slate-900/15"><div className="h-[430px] overflow-hidden rounded-[1.5rem]"><img src="/images/recovery-operation.jpg" alt="Carroattrezzi in intervento a Brescia" className="h-full w-full object-cover" /></div><div className="absolute bottom-7 left-7 right-7 rounded-xl bg-white p-5 shadow-xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#e85d32]">Una richiesta, meno passaggi</p><p className="mt-2 text-lg font-black text-[#0f3d6e]">Ti aiutiamo a togliere il veicolo dalla difficoltÃ .</p></div></div>
          </Container>
        </section>

        <section id="servizi" className="py-20 sm:py-28"><Container><div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-[#e85d32]">Interventi</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0f3d6e] sm:text-6xl">Servizi pensati per ogni fermo veicolo.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Ogni mezzo richiede un recupero diverso. Per questo valutiamo condizioni, accessi e destinazione prima di organizzare il trasporto.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((service,index)=><Link key={service.slug} href={`/servizi/${service.slug}/`} className="group border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#e85d32] hover:shadow-xl"><div className="flex items-center justify-between"><span className="text-xs font-black text-[#e85d32]">0{index+1}</span><span className="text-slate-400">â†—</span></div><h3 className="mt-12 text-xl font-black text-[#0f3d6e]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.intro}</p></Link>)}</div></Container></section>

        <section id="zone" className="bg-[#0f3d6e] py-20 text-white sm:py-28"><Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Brescia e dintorni</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Dove possiamo aiutarti.</h2><p className="mt-6 text-lg leading-8 text-blue-100">Dalla cittÃ  ai comuni vicini, organizziamo soccorso, traino e trasporto per auto, moto e furgoni.</p></div><div className="grid gap-x-8 sm:grid-cols-2">{zones.map(zone=><Link key={zone} href={`/zone/${zone.toLowerCase().replace(/\s+/g,'-')}/`} className="flex justify-between border-b border-white/20 py-4 font-bold text-white transition hover:border-orange-300">{zone}<span>â†—</span></Link>)}</div></Container></section>

        <section id="faq" className="bg-white py-20 sm:py-28"><Container className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-[#e85d32]">FAQ</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0f3d6e] sm:text-6xl">Le risposte prima della chiamata.</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question,answer])=><details key={question} className="group py-6"><summary className="flex cursor-pointer list-none justify-between gap-5 text-lg font-black text-slate-950"><span>{question}</span><span className="text-2xl text-[#e85d32] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{answer}</p></details>)}</div></Container></section>

        <section className="bg-[#e85d32] py-16"><Container className="flex flex-col justify-between gap-8 text-white lg:flex-row lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.24em] text-orange-100">Serve assistenza?</p><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Chiama e raccontaci cosa Ã¨ successo.</h2></div><Link href={site.tel} className="inline-flex rounded-lg bg-[#0f3d6e] px-7 py-4 text-center text-sm font-black text-white shadow-xl shadow-orange-950/20">Chiama {site.phone}</Link></Container></section>
      </main>

      <footer className="bg-white py-10"><Container className="flex flex-col justify-between gap-5 text-sm text-slate-500 sm:flex-row"><div><p className="font-black text-[#0f3d6e]">{site.name}</p><p className="mt-2">{site.address}</p><p>{site.email}</p></div><Link href={site.tel} className="font-black text-[#e85d32]">{site.phone}</Link></Container></footer>
    </div>
  )
}
