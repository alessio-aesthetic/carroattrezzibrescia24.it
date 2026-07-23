import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() { return <div className="min-h-screen bg-white text-slate-900"><Container><Navbar /></Container><main className="py-20 sm:py-28"><Container><h1 className="text-5xl font-black text-[#132844]">Informativa privacy e cookie</h1><div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-700"><p>Il sito raccoglie solo i dati necessari per rispondere alle richieste di assistenza e per garantire il corretto funzionamento delle pagine.</p><p>I dati inviati volontariamente tramite telefono o altri canali vengono trattati con riservatezza e non sono ceduti per finalità estranee alla richiesta.</p><p>Per informazioni sul trattamento puoi contattarci ai recapiti indicati nel sito.</p></div></Container></main><Footer /></div> }
