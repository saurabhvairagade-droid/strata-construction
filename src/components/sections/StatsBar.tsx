'use client'
import { motion } from 'framer-motion'
import { staggerFast, slideInLeft, viewport } from '@/lib/motion'
import { StatBlock } from '../ui/StatBlock'

export function StatsBar() {
  const stats = [
    { to: 120, suffix: '+', label: 'Homes delivered' },
    { to: 18, suffix: 'yr', label: 'In the market' },
    { to: 24, suffix: '', label: 'Projects completed' },
    { to: 1200, suffix: 'Cr+', label: '₹ Delivered value' },
  ]

  return (
    <section className="bg-[var(--bg-2)] border-b border-[var(--border)] relative z-10">
      <div className="max-w-[1440px] mx-auto overflow-x-auto hide-scrollbar">
        <motion.div
          className="grid grid-cols-4 min-w-[800px] lg:min-w-full"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={slideInLeft}>
              <StatBlock {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
