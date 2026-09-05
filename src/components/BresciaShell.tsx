import Link from 'next/link'
import { ArrowUpRightIcon, PhoneIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { services, site, zones } from '@/data/site'
import s from './Brescia.module.css'

export const zoneLinks = zones.map(name => ({ name, slug: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') }))

export function CallButton({ label = 'Richiedi soccorso', quiet = false }: { label?: string; quiet?: boolean }) {
  return <a className={quiet ? s.quietCall : s.call} href={site.tel}>
    <PhoneIcon aria-hidden="true" /><span>{label}<strong>{site.phone}</strong></span><ArrowUpRightIcon aria-hidden="true" />
  </a>
}

export function BresciaHeader() {
  return <header className={s.header}>
    <Link href="/" className={s.brand} aria-label="Carroattrezzi Brescia 24H, homepage">
      <img src="/images/brand-brescia.png" alt="" width="56" height="56" />
      <span>BRESCIA<span>SOCCORSO STRADALE <b>24H</b></span></span>
    </Link>
    <nav className={s.nav} aria-label="Navigazione principale">
      <details className={s.dropdown}><summary>Servizi <ChevronDownIcon /></summary><div>{services.map(v => <Link key={v.slug} href={'/servizi/' + v.slug + '/'}>{v.title}<ArrowUpRightIcon /></Link>)}</div></details>
      <details className={s.dropdown}><summary>Zone servite <ChevronDownIcon /></summary><div>{zoneLinks.map(v => <Link key={v.slug} href={'/zone/' + v.slug + '/'}>{v.name}<ArrowUpRightIcon /></Link>)}</div></details>
      <Link href="/#metodo">Il nostro metodo</Link><Link href="/#contatti">Contatti</Link>
    </nav>
    <a href={site.tel} className={s.headerPhone}><PhoneIcon /><span>{site.phone}</span></a>
    <details className={s.mobileMenu}><summary aria-label="Apri menu"><Bars3Icon /></summary><nav aria-label="Menu mobile"><b>Servizi</b>{services.map(v => <Link key={v.slug} href={'/servizi/' + v.slug + '/'}>{v.title}</Link>)}<b>Zone servite</b>{zoneLinks.map(v => <Link key={v.slug} href={'/zone/' + v.slug + '/'}>{v.name}</Link>)}</nav></details>
  </header>
}

export function BresciaFooter() {
  return <>
    <footer className={s.footer} id="contatti"><div className={s.footerTop}>
      <div><p className={s.footerName}>Brescia.<br /><span>Ci siamo.</span></p><p>Soccorso stradale per auto, moto e veicoli commerciali. Una richiesta chiara, un recupero organizzato.</p></div>
      <div><h3>Parliamone</h3><a className={s.footerPhone} href={site.tel}>{site.phone}</a><a href={'mailto:' + site.email}>{site.email}</a><p>{site.address}</p></div>
      <div><h3>Esplora</h3><Link href="/#interventi">I nostri servizi</Link><Link href="/#territorio">Brescia e provincia</Link><Link href="/privacy/">Privacy e cookie</Link></div>
    </div><div className={s.footerBottom}><span>Carroattrezzi Brescia 24H</span><span>Assistenza, anche quando non era nei programmi.</span><a href="#inizio">Torna in alto ↑</a></div></footer>
    <a className={s.mobileCall} href={site.tel}><PhoneIcon /><span>Chiama il soccorso</span><strong>{site.phone}</strong></a>
  </>
}
