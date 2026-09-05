'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import s from './Brescia.module.css'

export function BresciaMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add(s.revealed)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08 })
    root.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    let frame = 0
    const update = () => {
      frame = 0
      const range = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty('--progress', String(range > 0 ? window.scrollY / range : 0))
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', scroll, { passive: true })
    update()
    return () => { observer.disconnect(); window.removeEventListener('scroll', scroll); cancelAnimationFrame(frame) }
  }, [])
  return <div ref={ref} className={s.site}><div className={s.progress} aria-hidden="true" />{children}</div>
}
