import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownIcon, ArrowUpRightIcon, CheckIcon, MapPinIcon, WrenchScrewdriverIcon, TruckIcon, BoltIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { faqs, services, site } from '@/data/site'
import { editorial } from '@/data/brescia-editorial'
import { BresciaHeader, BresciaFooter, CallButton, zoneLinks } from './BresciaShell'
import { BresciaMotion } from './BresciaMotion'
import s from './Brescia.module.css'

const icons = [ClockIcon, TruckIcon, ShieldCheckIcon, WrenchScrewdriverIcon, BoltIcon, TruckIcon, MapPinIcon]
const chapters = ['Una vettura ferma. Una soluzione da organizzare.', 'Ogni recupero ha le sue esigenze.', 'Scegli tu dove portare il veicolo.', 'Rapidità, senza perdere attenzione.', 'Dalla città alle strade della provincia.', 'Rimettiamo in ordine la tua giornata.', 'Un’attenzione diversa per ogni mezzo.', 'Ripartire o trasportare? Valutiamolo.', 'Tutte le informazioni, prima di decidere.']
const steps = [
  { icon: MapPinIcon, title: 'Ci dici dove sei.', text: 'Posizione, modello del veicolo e problema: partiamo dalle informazioni essenziali. Un riferimento visibile o il nome della strada aiutano a individuare il punto esatto.' },
  { icon: WrenchScrewdriverIcon, title: 'Prepariamo il recupero.', text: 'Valutiamo gli accessi e le condizioni del mezzo. Concordiamo il tipo di intervento, la destinazione e i dettagli economici prima di organizzare l’uscita.' },
  { icon: TruckIcon, title: 'Ti aiutiamo a proseguire.', text: 'Il veicolo viene recuperato e trasferito verso la destinazione concordata. Officina, carrozzeria o deposito: sai dove andrà il mezzo e quale sarà il prossimo passo.' },
]

export default function BresciaHome() {
  return <BresciaMotion><BresciaHeader /><main id="inizio">
    <section className={s.hero} aria-labelledby="titolo">
      <Image src="/images/hero-brescia-original.png" alt="Tecnico che assicura un’auto sulla piattaforma di un carroattrezzi a Brescia" fill priority sizes="100vw" className={s.heroImage} />
      <div className={s.heroVeil} />
      <div className={s.heroContent}><p className={s.heroLabel}><span /> AL TUO FIANCO, 24 ORE SU 24</p>
        <h1 id="titolo"><span>Carroattrezzi</span><span>a Brescia.</span><em>Si riparte da qui.</em></h1>
        <p>Un guasto cambia i programmi.<br /><strong>Una chiamata rimette tutto in movimento.</strong><br />Soccorso stradale, recupero e traino a Brescia e provincia.</p>
        <CallButton label="Il veicolo è fermo? Chiamaci" />
        <a className={s.heroExplore} href="#metodo">Scopri come ti aiutiamo <ArrowDownIcon /></a>
      </div>
      <div className={s.heroCaption}><span>01 / ASSISTENZA SUL TERRITORIO</span><p>Il tuo mezzo.<br /><b>La nostra attenzione.</b></p></div>
    </section>
    <div className={s.assurances}><div><ClockIcon /><span><b>Anche di notte</b>Richieste 24 ore su 24</span></div><div><MapPinIcon /><span><b>Brescia e provincia</b>Un riferimento sul territorio</span></div><div><ShieldCheckIcon /><span><b>Tutto concordato</b>Intervento e destinazione chiari</span></div></div>
    <section className={s.introduction} id="metodo"><div data-reveal><p className={s.eyebrow}>IL FERMO È UN IMPREVISTO. IL SOCCORSO NO.</p><h2>Meno incertezza.<br /><span>Più attenzione a te.</span></h2></div><div className={s.introText} data-reveal><p>Quando l’auto non riparte, hai bisogno di sapere <strong>chi chiamare, cosa succederà e dove verrà portato il veicolo.</strong> Sono le prime cose che mettiamo a fuoco insieme.</p><p>Da un parcheggio in città a una strada extraurbana, organizziamo il soccorso partendo dalla situazione reale. Nessuna decisione lasciata al caso: ascoltiamo il problema e valutiamo il recupero adatto al tuo mezzo.</p><a className={s.textLink} href={site.tel}>Parla con noi <ArrowUpRightIcon /></a></div></section>
    <section className={s.processSection}><div className={s.processHeading} data-reveal><span>COME LAVORIAMO</span><p>Una chiamata.<br /><strong>Tre passaggi chiari.</strong></p></div><div className={s.steps}>{steps.map((v, i) => <article data-reveal key={v.title}><div className={s.stepTop}><v.icon /><span>0{i + 1}</span></div><h3>{v.title}</h3><p>{v.text}</p></article>)}</div></section>
    <section id="interventi" className={s.servicesSection}><div className={s.sectionHeading} data-reveal><div><p className={s.eyebrow}>IL SERVIZIO GIUSTO, QUANDO SERVE</p><h2>Per ogni fermo,<br /><span>un prossimo passo.</span></h2></div><p>Non tutti i veicoli si recuperano allo stesso modo. Scegli la situazione più vicina alla tua e scopri come possiamo aiutarti.</p></div>
      <div className={s.serviceList}>{services.map((v, i) => { const Icon = icons[i]; return <Link data-reveal href={'/servizi/' + v.slug + '/'} className={s.serviceRow} key={v.slug}><span className={s.serviceIndex}>0{i + 1}</span><Icon className={s.serviceIcon} /><div><h3>{v.title}</h3><p>{v.intro}</p></div><ArrowUpRightIcon className={s.rowArrow} /></Link> })}</div>
    </section>
    <section className={s.imageStory}><Image src="/images/home-hero.jpg" alt="Recupero di un veicolo su strada" fill sizes="100vw" /><div /><div className={s.imageStoryCopy} data-reveal><p className={s.heroLabel}>LA CURA SI VEDE NEI DETTAGLI</p><h2>Non è soltanto<br />spostare un’auto.</h2><p>È proteggere il tuo mezzo, chiarire la destinazione e aiutarti a riprendere il controllo della giornata.</p></div></section>
    <section className={s.editorial}><div className={s.editorialHeading} data-reveal><p className={s.eyebrow}>SOCCORSO STRADALE A BRESCIA</p><h2>Il recupero,<br /><span>spiegato bene.</span></h2><p>Quello che conta quando il veicolo si ferma. Informazioni concrete, per affrontare l’imprevisto con più chiarezza.</p></div><div className={s.chapters}>{editorial.map((html, i) => <article data-reveal key={i}><span className={s.chapterNumber}>0{i + 1}</span><h3>{chapters[i]}</h3><p dangerouslySetInnerHTML={{ __html: html }} /></article>)}</div></section>
    <section className={s.territory} id="territorio"><div data-reveal><p className={s.eyebrow}>VICINI ALLA TUA STRADA</p><h2>Brescia.<br />E tutto intorno.</h2><p>Dal centro alle zone produttive, dalle tangenziali ai comuni vicini. Dicci il punto in cui ti trovi: valuteremo accesso, tipo di mezzo e percorso verso la destinazione.</p><CallButton quiet label="Verifica l’intervento nella tua zona" /></div><div className={s.zones}>{zoneLinks.map(v => <Link data-reveal key={v.slug} href={'/zone/' + v.slug + '/'}><MapPinIcon /><span>{v.name}</span><ArrowUpRightIcon /></Link>)}</div></section>
    <section className={s.faqSection} id="domande"><div data-reveal><p className={s.eyebrow}>PRIMA DI CHIAMARE</p><h2>Le risposte<br /><span>che ti servono.</span></h2><p>Hai una situazione particolare?<br />Descrivila direttamente al telefono.</p></div><div>{faqs.map(([q,a]) => <details className={s.faq} key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className={s.finalCta}><div data-reveal><p className={s.eyebrow}>LA PROSSIMA MOSSA È SEMPLICE</p><h2>Tu hai un imprevisto.<br /><span>Noi ti ascoltiamo.</span></h2><p>Comunica posizione, veicolo e problema.<br />Insieme organizziamo il recupero più adatto.</p><CallButton label="Chiama il soccorso stradale" /><p className={s.finalNote}><CheckIcon /> Auto, moto e veicoli commerciali</p></div><div className={s.h24} aria-hidden="true">24<span>/7</span></div></section>
  </main><BresciaFooter /></BresciaMotion>
}
