'use client'

import { TruckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  return (
    <motion.span
      whileHover={{ y: -1 }}
      className={`inline-flex items-center gap-2.5 text-gray-950 ${className ?? ''}`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-[#b45309] text-white shadow-sm shadow-orange-900/20">
        <TruckIcon className="size-5" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight leading-none">
        Carroattrezzi <span className="text-[#b45309]">Brescia</span>
      </span>
    </motion.span>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <span className={`grid place-items-center rounded-xl bg-[#b45309] text-white ${className ?? ''}`}>
      <TruckIcon className="size-1/2" />
    </span>
  )
}
