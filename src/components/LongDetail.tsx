import Link from 'next/link'
import { site } from '@/data/site'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { BresciaHeader, BresciaFooter, CallButton } from './BresciaShell'
import { BresciaMotion } from './BresciaMotion'
import s from './Brescia.module.css'

type Item = { slug: string; title: string; name?: string; intro?: string; text?: string; detail?: string }
type Props = { kind: 'service' | 'zone'; item: Item; related: Item[] }

const colors: Record<string, { ink: string; paper: string; accent: string; soft: string }> = {
  Catania: { ink: '#17100d', paper: '#f6efe3', accent: '#ef5b2a', soft: '#f5bd76' }, Livorno: { ink: '#103b55', paper: '#f6fbfd', accent: '#177eb5', soft: '#ccebf3' }, Napoli: { ink: '#24191b', paper: '#fff7ee', accent: '#d5333e', soft: '#f7d2ba' }, Padova: { ink: '#102d2b', paper: '#f2f7f3', accent: '#157a63', soft: '#c8e8d8' }, Prato: { ink: '#30241f', paper: '#fbf5ec', accent: '#b75325', soft: '#f0d1ad' }, Salerno: { ink: '#263933', paper: '#f7f5eb', accent: '#d06e42', soft: '#f2d5b8' }, Pescara: { ink: '#082943', paper: '#f3f9fc', accent: '#00a6c8', soft: '#bee9ef' }, Latina: { ink: '#193024', paper: '#f4f8ee', accent: '#6b9d2d', soft: '#dcebb8' }, Trieste: { ink: '#1c2733', paper: '#f4f5f6', accent: '#526f88', soft: '#d6e0e6' }, Brescia: { ink: '#172235', paper: '#f4f1ea', accent: '#b16f00', soft: '#e8e1d1' },
}

export function LongDetail({ kind, item, related }: Props) {
  const c = colors[site.city] || colors.Catania
  const label = kind === 'service' ? 'Servizio dedicato' : 'Zona servita'
  const mainTitle = kind === 'service' ? `${item.title} a ${site.city}` : item.title
  const subject = kind === 'service' ? item.title.toLowerCase() : `carroattrezzi a ${item.name ?? site.city}`
  const base = item.intro ?? item.text ?? `Assistenza organizzata per ${subject}, con attenzione al veicolo e alla situazione.`
  const image = kind === 'service' ? `/images/services/${item.slug}.jpg` : `/images/zones/${item.slug}.jpg`
  const paragraphs = [
    <p key="1"><strong>{mainTitle}</strong> significa prima di tutto affrontare una situazione concreta con ordine. {base} Quando un veicolo si ferma, la fretta può far perdere di vista le informazioni utili: il punto esatto in cui si trova, le condizioni del mezzo, l’accesso alla zona e la destinazione che si desidera raggiungere. Mettere in fila questi elementi rende la richiesta più semplice e permette di preparare il recupero con maggiore attenzione.</p>,
    <p key="2">Non tutte le chiamate nascono dallo stesso problema. Un guasto improvviso, una batteria che non permette l’avviamento, un incidente, una moto non marciabile o un mezzo commerciale fermo richiedono valutazioni diverse. Per questo non trattiamo il recupero come un gesto automatico. La prima fase serve a capire cosa è accaduto e cosa è più prudente fare, evitando di spostare il veicolo nel modo sbagliato oppure di lasciare dettagli importanti alla fine.</p>,
    <p key="3"><strong>La posizione conta, ma conta anche il contesto.</strong> Una strada stretta, un parcheggio sotterraneo, un’area di servizio, un cortile privato, una provinciale o un punto trafficato pongono condizioni differenti. Sapere se il mezzo è in carreggiata, se può essere raggiunto facilmente e se ci sono ostacoli aiuta a individuare l’approccio più adatto. Non servono spiegazioni tecniche: bastano riferimenti chiari e una descrizione onesta di ciò che si vede.</p>,
    <p key="4">Anche la destinazione va definita con calma. Il veicolo può essere portato verso un’officina di fiducia, una carrozzeria, un deposito, un’abitazione o un indirizzo concordato. Decidere prima dove deve arrivare evita passaggi inutili e rende il trasporto più lineare. È una parte essenziale del servizio, perché un recupero organizzato non termina al momento del carico: termina quando il mezzo viene consegnato nel posto giusto.</p>,
    <p key="5"><strong>La rapidità è utile solo quando resta precisa.</strong> Chi ha un’auto ferma desidera naturalmente una risposta veloce, ma vuole anche sapere cosa succederà dopo. Il nostro approccio è diretto: raccogliamo le informazioni che servono, indichiamo il passaggio più sensato e organizziamo il recupero senza aggiungere parole inutili. Questo aiuta a ridurre l’incertezza e lascia al cliente un quadro molto più chiaro della situazione.</p>,
    <p key="6">Per le due ruote, i furgoni e i veicoli danneggiati è ancora più importante usare il metodo corretto. Moto e scooter hanno bisogno di fissaggi dedicati. Un’auto dopo un sinistro può richiedere maggiore prudenza prima di essere caricata. Un furgone può avere peso, attrezzature o vincoli di accesso diversi. Comunicando subito il tipo di mezzo, il servizio può essere impostato con attenzione fin dall’inizio.</p>,
    <p key="7"><strong>Nel territorio di {site.city} ogni percorso ha le sue caratteristiche.</strong> Aree centrali, zone produttive, quartieri periferici, collegamenti verso i comuni vicini e strade extraurbane richiedono tempi e riferimenti diversi. Per questa ragione una pagina dedicata a {subject} non è una promessa astratta: è un modo per preparare meglio la richiesta e sapere quali dettagli comunicare nel momento in cui serve davvero assistenza.</p>,
    <p key="8">Ci sono situazioni in cui il problema sembra piccolo, ma proseguire non è la scelta migliore. Una spia accesa, un rumore insolito, una perdita di potenza o una gomma danneggiata possono trasformarsi in qualcosa di più serio se il veicolo viene forzato. Chiedere un supporto significa valutare con lucidità se è possibile ripartire oppure se è preferibile mettere il mezzo in sicurezza e organizzare il trasferimento.</p>,
    <p key="9"><strong>L’obiettivo è restituire ordine.</strong> Un imprevisto non deve occupare tutta la giornata né costringerti a cercare più contatti, raccontare ogni volta gli stessi dettagli o decidere sotto pressione dove portare l’auto. Con una richiesta chiara, un recupero preparato e una destinazione concordata, la situazione diventa finalmente gestibile. Per {mainTitle}, questo è il valore più concreto: trasformare un fermo imprevisto in un prossimo passo comprensibile.</p>,
  ]
  const headings = ['La tua richiesta, nel dettaglio', 'Capire il problema', 'Posizione e accesso', 'La destinazione la scegli tu', 'Una risposta chiara', 'Attenzione al tipo di mezzo', 'Il territorio', 'Quando serve il trasporto', 'Il prossimo passo']
  return <BresciaMotion><BresciaHeader /><main id="inizio">
    <section className={s.detailHero}><p className={s.eyebrow}>{label}</p><h1>{mainTitle}</h1><p>{base}</p><CallButton /></section>
    <section className={s.detailBody}><aside><p className={s.eyebrow}>INFORMAZIONI UTILI</p><h2>Un recupero preparato bene.</h2><p>Mezzo, posizione e destinazione. Partiamo da qui per organizzare l’intervento.</p></aside><div>{paragraphs.map((p,i) => <article data-reveal key={i}><h3>{headings[i]}</h3>{p}</article>)}</div></section>
    <section className={s.related}><h2>Potrebbe servirti anche</h2><div>{related.filter(v=>v.slug !== item.slug).slice(0,9).map(v=><Link href={'/' + (kind==='service'?'servizi':'zone') + '/' + v.slug + '/'} key={v.slug}>{v.title ?? v.name}<ArrowUpRightIcon /></Link>)}</div></section>
    <section className={s.finalCta}><div><p className={s.eyebrow}>IL VEICOLO È FERMO?</p><h2>Parliamone adesso.</h2><p>Comunica posizione, mezzo e problema. Organizziamo insieme il prossimo passo.</p><CallButton /></div></section>
    </main><BresciaFooter /></BresciaMotion>
}
