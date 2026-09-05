'use client'

import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => setVisible(localStorage.getItem('brescia-cookie-consent') !== 'accepted'), [])
  if (!visible) return null
  return <div className="fixed inset-x-4 bottom-20 z-[60] max-w-sm rounded-lg sm:left-auto sm:bottom-4 sm:right-4 border border-slate-200 bg-white p-5 shadow-2xl"><p className="text-sm leading-6 text-slate-700">Usiamo solo cookie tecnici necessari al funzionamento del sito. Puoi leggere l’informativa e scegliere se accettare.</p><div className="mt-4 flex flex-wrap gap-3"><button onClick={() => { localStorage.setItem('brescia-cookie-consent', 'accepted'); setVisible(false) }} className="rounded-md bg-[#132844] px-5 py-2 text-sm font-bold text-white">Accetta</button><a href="/privacy" className="rounded-md border border-slate-300 px-5 py-2 text-sm font-bold text-[#132844]">Informativa</a></div></div>
}

