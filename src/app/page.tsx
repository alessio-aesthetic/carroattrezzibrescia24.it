import Link from 'next/link'
import { faqs, services, site, zones } from '@/data/site'

const zoneItems = (zones as unknown as Array<string | { name: string; slug: string }>).map((zone) =>
  typeof zone === 'string'
    ? { name: zone, slug: zone.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') }
    : zone,
)

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172235]">
      <header className="sticky top-0 z-40 border-b border-[#172235]/10 bg-[#f4f1ea]/95 backdrop-blur">
        <div className="mx-auto flex min-h-[82px] max-w-[1480px] items-center justify-between gap-5 px-5 lg:px-10">
          <Link href="/" className="flex h-14 max-w-[220px] items-center overflow-hidden">
            <img src="/images/logo-brescia.png" alt="Carroattrezzi Brescia 24H" className="max-h-14 w-auto object-contain" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-bold text-[#435069] lg:flex">
            <a href="#interventi">Interventi</a>
            <a href="#metodo">Come lavoriamo</a>
            <a href="#territorio">Zone servite</a>
            <a href="#domande">Domande</a>
          </nav>
          <Link href={`tel:${site.tel}`} className="rounded-full bg-[#f5a800] px-5 py-3 text-sm font-black text-[#172235] shadow-[0_10px_25px_rgba(245,168,0,.25)]">
            Chiama {site.phone}
          </Link>
        </div>
      </header>

      <section className="px-5 pb-24 pt-14 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.26em] text-[#b16f00]">Brescia e provincia · attivi 24 ore</p>
            <h1 className="mt-6 text-5xl font-black leading-[.93] tracking-[-.06em] sm:text-7xl xl:text-8xl">Carroattrezzi a Brescia, quando serve davvero.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#435069]">
              Un veicolo fermo non è mai un dettaglio: può bloccare una giornata di lavoro, un rientro con la famiglia o un viaggio. Per questo il nostro servizio parte da una conversazione chiara, non da promesse vaghe. Ci dici dove sei, che mezzo hai e cosa è successo; noi raccogliamo gli elementi utili per organizzare il recupero più adatto.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`tel:${site.tel}`} className="rounded-full bg-[#172235] px-7 py-4 text-sm font-black text-white">Chiama per assistenza immediata</Link>
              <a href="#interventi" className="rounded-full border-2 border-[#172235]/20 px-7 py-4 text-sm font-black">Scopri gli interventi</a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t-2 border-[#172235]/15 pt-6">
              <div><strong className="block text-3xl">24H</strong><span className="text-sm text-[#526078]">disponibilità</span></div>
              <div><strong className="block text-3xl">1</strong><span className="text-sm text-[#526078]">contatto chiaro</span></div>
              <div><strong className="block text-3xl">Brescia</strong><span className="text-sm text-[#526078]">e provincia</span></div>
            </div>
          </div>
          <div className="relative">
            <img src="/images/hero-brescia-original.png" alt="Carroattrezzi moderno durante un intervento a Brescia" className="h-[420px] w-full rounded-[2.8rem] object-cover shadow-[0_32px_70px_rgba(23,34,53,.2)] lg:h-[660px]" />
            <div className="absolute -bottom-6 left-5 max-w-xs rounded-2xl border border-[#172235]/10 bg-white p-6 shadow-xl lg:left-8">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#b16f00]">Un passaggio alla volta</p>
              <p className="mt-2 text-lg font-black">Prima la sicurezza. Poi il recupero, con una destinazione già concordata.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#172235] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#f5c65a]">Un soccorso spiegato bene</p>
            <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl">Non basta mandare un mezzo. Bisogna mandare quello giusto.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="border-t border-white/20 pt-6"><span className="text-4xl font-black text-[#f5c65a]">01</span><h3 className="mt-7 text-2xl font-black">Ascoltiamo la situazione</h3><p className="mt-3 leading-7 text-slate-300">La posizione precisa, le condizioni del veicolo, l’accesso al punto in cui ti trovi e la destinazione sono informazioni semplici, ma decisive. Servono a evitare un intervento improvvisato.</p></article>
            <article className="border-t border-white/20 pt-6"><span className="text-4xl font-black text-[#f5c65a]">02</span><h3 className="mt-7 text-2xl font-black">Prepariamo il recupero</h3><p className="mt-3 leading-7 text-slate-300">Un’auto, una moto, un furgone o un veicolo danneggiato non richiedono lo stesso approccio. Valutare prima permette di proteggere il mezzo e lavorare con più ordine.</p></article>
            <article className="border-t border-white/20 pt-6"><span className="text-4xl font-black text-[#f5c65a]">03</span><h3 className="mt-7 text-2xl font-black">Concordiamo dove portarlo</h3><p className="mt-3 leading-7 text-slate-300">Officina, carrozzeria, abitazione, deposito o un indirizzo scelto da te: definire la destinazione prima dell’uscita evita telefonate ripetute e decisioni frettolose.</p></article>
            <article className="border-t border-white/20 pt-6"><span className="text-4xl font-black text-[#f5c65a]">04</span><h3 className="mt-7 text-2xl font-black">Restiamo concreti</h3><p className="mt-3 leading-7 text-slate-300">L’obiettivo non è riempire la chiamata di parole. È darti un riferimento chiaro in un momento scomodo e preparare il prossimo passo con attenzione.</p></article>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[.24em] text-[#b16f00]">Quando l’auto si ferma</p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-.05em] sm:text-6xl">Un problema pratico merita risposte pratiche.</h2>
          <div className="mt-10 space-y-7 text-lg leading-8 text-[#435069]">
            <p><strong className="text-[#172235]">Una vettura in panne può fermarsi ovunque:</strong> davanti a casa, in un parcheggio, lungo una provinciale, vicino al luogo di lavoro oppure durante uno spostamento che sembrava normale fino a pochi minuti prima. In quei momenti la cosa più utile non è cercare di indovinare da soli cosa fare. È capire se il mezzo può essere mosso in sicurezza, dove si trova esattamente e quale destinazione ha più senso. Una chiamata ben impostata permette di raccogliere questi dati senza confusione.</p>
            <p>Il servizio di carroattrezzi a Brescia è pensato per chi vuole togliere rapidamente il veicolo da una situazione scomoda, senza perdere il controllo della decisione. Non esistono due recuperi perfettamente identici: cambia il mezzo, cambia il punto di fermo, cambiano gli spazi disponibili e cambiano le priorità del cliente. Un’auto ferma in un’area trafficata richiede attenzione diversa rispetto a un’auto bloccata in un cortile, a una moto da fissare correttamente o a un furgone che deve raggiungere una specifica officina.</p>
            <p><strong className="text-[#172235]">Anche la destinazione fa parte dell’intervento.</strong> Spesso chi chiama pensa soltanto al carroattrezzi, ma il recupero non finisce quando il mezzo viene caricato. Sapere se l’auto deve andare da un meccanico di fiducia, in carrozzeria, presso un deposito o a casa rende tutto più lineare. Per questo la domanda non è soltanto “dove siete?”, ma anche “dove volete che arrivi il veicolo?”. È un dettaglio che risparmia tempo e riduce l’incertezza.</p>
            <p>La rapidità resta importante, soprattutto quando ci si trova in una zona esposta, su una strada di scorrimento o in una situazione che rende difficile attendere. Ma una risposta rapida non deve trasformarsi in una gestione frettolosa. La priorità è sempre mettere la persona e il veicolo nelle condizioni migliori possibili: fermarsi in sicurezza, rendersi visibili, raccogliere riferimenti utili e spiegare con precisione il problema. Da qui nasce un’assistenza affidabile, più facile da gestire anche quando l’imprevisto arriva nel momento meno comodo.</p>
            <p><strong className="text-[#172235]">Brescia è una città fatta di percorsi molto diversi tra loro.</strong> Dal centro alle aree produttive, dalle strade urbane alle tangenziali, dai comuni limitrofi alle direttrici verso il lago e la provincia, il contesto cambia rapidamente. Non serve conoscere ogni via a memoria per chiedere aiuto: una posizione condivisa o un riferimento visibile, insieme al senso di marcia quando necessario, sono spesso sufficienti per inquadrare bene la situazione.</p>
            <p>Chi ha avuto un guasto sa che la parte più frustrante non è solo il fermo del mezzo. È l’insieme delle piccole cose che arrivano dopo: avvisare chi ti aspetta, capire se puoi ripartire, scegliere l’officina, proteggere l’auto da ulteriori danni. Un soccorso organizzato serve proprio a rimettere ordine in questi passaggi. Non promette che l’imprevisto non sia mai esistito; ti aiuta a non lasciare che occupi tutta la giornata.</p>
            <p><strong className="text-[#172235]">Auto, moto e veicoli commerciali meritano cure diverse.</strong> Una due ruote va fissata con criteri specifici. Un mezzo con danni dopo un incidente va valutato prima di essere spostato. Un furgone può trasportare attrezzature o materiale che rendono necessario un approccio più attento. Raccontare il tipo di mezzo durante la chiamata permette di orientare correttamente il recupero fin dall’inizio, senza aggiungere complicazioni quando il carroattrezzi è già sul posto.</p>
            <p>La stessa logica vale per una batteria scarica, una gomma danneggiata, una spia che impedisce di proseguire o un guasto meccanico che non lascia alternative. A volte basta un intervento semplice; altre volte è più prudente caricare il veicolo e portarlo verso un controllo tecnico. Non è il cliente a dover decidere tutto da solo sotto pressione. L’importante è descrivere quello che si vede, indicare dove ci si trova e scegliere insieme il passaggio più sensato.</p>
            <p><strong className="text-[#172235]">Chiamare non significa rinunciare a capire.</strong> Al contrario, significa avere un punto di riferimento per fare ordine. Prima di partire vengono raccolte le informazioni che servono, viene concordata la destinazione e viene spiegato cosa succede dopo. È un modo più professionale di affrontare un guasto: diretto, trasparente e utile per chi deve tornare a muoversi il prima possibile.</p>
          </div>
        </div>
      </section>

      <section id="interventi" className="bg-white px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.24em] text-[#b16f00]">Interventi dedicati</p><h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-6xl">Ogni fermo ha un modo corretto per essere gestito.</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => <Link key={service.slug} href={`/servizi/${service.slug}/`} className="group rounded-[1.8rem] border border-[#172235]/10 bg-[#f8f8f6] p-7 transition hover:-translate-y-1 hover:bg-[#172235] hover:text-white"><div className="flex items-center justify-between"><span className="text-xs font-black text-[#b16f00]">0{index + 1}</span><span className="text-xl text-[#b16f00]">↗</span></div><h3 className="mt-10 text-2xl font-black">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#526078] group-hover:text-slate-300">{service.intro}</p></Link>)}
          </div>
        </div>
      </section>

      <section id="territorio" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-black uppercase tracking-[.24em] text-[#b16f00]">Dove interveniamo</p><h2 className="mt-5 text-4xl font-black tracking-[-.05em] sm:text-6xl">Brescia, i comuni vicini e le strade che li collegano.</h2><p className="mt-7 text-lg leading-8 text-[#435069]">Il territorio cambia molto nel giro di pochi chilometri. Per questo ogni zona ha una pagina dedicata, utile per raccontare il tipo di intervento e le informazioni da preparare quando il mezzo si ferma.</p><Link href={`tel:${site.tel}`} className="mt-8 inline-flex rounded-full bg-[#172235] px-6 py-3.5 text-sm font-black text-white">Parla con noi</Link></div>
          <div className="grid gap-x-8 sm:grid-cols-2">{zoneItems.map((zone, index) => <Link key={zone.slug} href={`/zone/${zone.slug}/`} className="flex items-center justify-between border-b-2 border-[#172235]/10 py-5 text-lg font-black transition hover:px-3"><span>{zone.name}</span><span className="text-[#b16f00]">{String(index + 1).padStart(2, '0')} ↗</span></Link>)}</div>
        </div>
      </section>

      <section id="domande" className="bg-[#e8e1d1] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl"><p className="text-center text-xs font-black uppercase tracking-[.24em] text-[#b16f00]">Domande frequenti</p><h2 className="mt-5 text-center text-4xl font-black tracking-[-.05em] sm:text-6xl">Le informazioni da avere prima di chiamare.</h2><div className="mt-12 divide-y-2 divide-[#172235]/10 border-y-2 border-[#172235]/10">{(faqs as unknown as Array<{ question: string; answer: string } | [string, string]>).map((faq) => { const item = Array.isArray(faq) ? { question: faq[0], answer: faq[1] } : faq; return <details key={item.question} className="py-6"><summary className="cursor-pointer list-none text-xl font-black">{item.question}</summary><p className="mt-4 max-w-3xl leading-7 text-[#435069]">{item.answer}</p></details> })}</div></div>
      </section>

      <section className="bg-[#f5a800] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.24em] text-[#172235]/70">Il veicolo è fermo?</p><h2 className="mt-5 text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-7xl">Parliamone adesso, con calma e in modo concreto.</h2><p className="mt-6 text-lg leading-8 text-[#172235]/80">Comunica il punto in cui ti trovi, il tipo di mezzo e cosa è successo. Ti aiutiamo a capire il recupero più adatto e la destinazione migliore per il veicolo.</p></div><Link href={`tel:${site.tel}`} className="rounded-full bg-[#172235] px-8 py-5 text-base font-black text-white shadow-xl">Chiama {site.phone}</Link></div></section>

      <footer className="bg-[#172235] px-5 py-12 text-white lg:px-10"><div className="mx-auto grid max-w-[1480px] gap-8 md:grid-cols-[1fr_auto_auto]"><div><strong className="text-xl">Carroattrezzi Brescia 24H</strong><p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Assistenza per recupero auto, moto, furgoni e veicoli fermi a Brescia e provincia.</p></div><div className="text-sm text-slate-300"><p>{site.address}</p><p className="mt-1">{site.email}</p></div><Link href={`tel:${site.tel}`} className="text-lg font-black text-[#f5c65a]">{site.phone}</Link></div></footer>
    </main>
  )
}
