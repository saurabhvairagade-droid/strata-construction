'use client'
import { motion } from 'framer-motion'

const ITEMS = [
  '3 new projects launching in Pune — 2025',
  'MahaRERA registered · Fully verified',
  '₹1,200 Cr+ delivered value',
  'Zero brokerage · Direct from developer',
  '1,200+ families housed since 2008',
  'Responding within 2 hours',
  'Pune\'s fastest-growing luxury developer',
  '18 years · 24 completed projects'
]

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="bg-strata-acid overflow-hidden py-[7px]" aria-hidden="true">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[10px] font-bold text-strata-acid-text tracking-[0.2em] uppercase px-8 inline-flex items-center gap-3 shrink-0"
          >
            <span className="w-[4px] h-[4px] rounded-full bg-strata-acid-text shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
