import { BresciaHeader, BresciaFooter } from '@/components/BresciaShell'
import { BresciaMotion } from '@/components/BresciaMotion'
import s from '@/components/Brescia.module.css'

export default function PrivacyPage() {
  return <BresciaMotion><BresciaHeader /><main id="inizio" className={s.detailHero}>
    <h1>Informativa privacy e cookie</h1>
    <p>Il sito raccoglie solo i dati necessari per rispondere alle richieste di assistenza e per garantire il corretto funzionamento delle pagine.</p>
    <p>I dati inviati volontariamente tramite telefono o altri canali vengono trattati con riservatezza e non sono ceduti per finalità estranee alla richiesta.</p>
    <p>Per informazioni sul trattamento puoi contattarci ai recapiti indicati nel sito.</p>
  </main><BresciaFooter /></BresciaMotion>
}
