'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { services, zones } from '@/data/site'

const links = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#zone', label: 'Zone servite' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contatti', label: 'Contatti' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.slice(2).map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <PlusGridItem className="relative flex items-center px-4 py-3 text-base font-medium text-gray-950">
        <details className="group">
          <summary className="cursor-pointer list-none">Servizi <span className="text-xs">Ã¢Å’â€ž</span></summary>
          <div className="absolute left-0 top-full z-20 mt-2 grid w-[26rem] grid-cols-2 gap-x-5 gap-y-2 rounded-2xl border border-black/10 bg-white p-5 text-sm shadow-xl">
            {services.map((service) => <Link key={service.slug} href={`/servizi/${service.slug}`} className="py-1 font-medium text-gray-800 hover:text-[#b45309]">{service.title}</Link>)}
          </div>
        </details>
      </PlusGridItem>
      <PlusGridItem className="relative flex items-center px-4 py-3 text-base font-medium text-gray-950">
        <details className="group">
          <summary className="cursor-pointer list-none">Zone <span className="text-xs">Ã¢Å’â€ž</span></summary>
          <div className="absolute right-0 top-full z-20 mt-2 grid w-[24rem] grid-cols-2 gap-x-5 gap-y-2 rounded-2xl border border-black/10 bg-white p-5 text-sm shadow-xl">
            {zones.map((zone) => <Link key={zone} href={'/zone/' + zone.toLowerCase().replaceAll(' ', '-')} className="text-sm font-medium text-gray-800">Carroattrezzi a {zone}</Link>)}
          </div>
        </details>
      </PlusGridItem>
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <details>
          <summary className="cursor-pointer list-none text-base font-medium text-gray-950">Servizi</summary>
          <div className="mt-3 grid gap-3 border-l border-black/10 pl-4">
            {services.map((service) => <Link key={service.slug} href={`/servizi/${service.slug}`} className="text-sm font-medium text-gray-800">{service.title}</Link>)}
          </div>
        </details>
        <details>
          <summary className="cursor-pointer list-none text-base font-medium text-gray-950">Zone servite</summary>
          <div className="mt-3 grid gap-3 border-l border-black/10 pl-4">
            {zones.map((zone) => <Link key={zone} href={'/zone/' + zone.toLowerCase().replaceAll(' ', '-')} className="text-sm font-medium text-gray-800">Carroattrezzi a {zone}</Link>)}
          </div>
        </details>
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-8 sm:pt-10">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Carroattrezzi Brescia home" className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#132844] text-xs font-black text-[#f5c451]">CB</span>
                <span className="hidden text-sm font-black uppercase tracking-[0.12em] text-[#132844] sm:inline">Carroattrezzi Brescia</span>
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <Link href="tel:+390302041924" className="hidden rounded-full bg-[#b45309] px-4 py-2 text-sm font-semibold text-white lg:block">
            Chiama 030 204 1924
          </Link>
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
