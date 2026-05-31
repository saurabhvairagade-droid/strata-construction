'use client'
import { motion } from 'framer-motion'
import { CalendarCheck, Eye, Key } from 'lucide-react'
import { Kicker } from '../ui/Kicker'
import { slideInLeft, fadeUp, staggerSlow, viewport } from '@/lib/motion'

export function HowItWorks() {
  const steps = [
    { num: '01', icon: CalendarCheck, title: 'Book a site visit', desc: 'Call us or fill the form. Our relationship manager will confirm a visit within 2 hours — no spam calls, no aggressive follow-ups.' },
    { num: '02', icon: Eye, title: 'Tour & choose', desc: 'Walk the actual site, meet the construction team, review floor plans. We show you everything — including what\'s still being built.' },
    { num: '03', icon: Key, title: 'Own it', desc: 'Legal verification, payment plan, registration — our team guides every step. Most buyers complete paperwork in under 7 working days.' },
  ]

  return (
    <section id="process" className="bg-[var(--bg-1)] py-24 px-5 md:px-9">
      <div className="max-w-[1440px] mx-auto">
        <Kicker index="04" total="06" title="Our process" />
        
        <motion.h2 
          variants={slideInLeft} 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewport}
          className="font-display text-[48px] md:text-[64px] text-[var(--text-1)] leading-[0.92] mb-20"
        >
          THE PROCESS.
        </motion.h2>

        <motion.div 
          variants={staggerSlow} 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <div className="font-display text-[80px] text-[var(--border-strong)] leading-none mb-6 select-none transition-colors">
                {step.num}
              </div>
              
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[100px] w-[calc(100%-100px+1rem)] h-px bg-[var(--border)] hidden md:block" />
              )}
              
              <div className="w-10 h-10 border border-[var(--acid-border)] flex items-center justify-center mb-4 bg-[var(--bg-2)] relative z-10">
                <step.icon size={18} className="text-strata-acid" />
              </div>
              
              <div className="font-body font-medium text-[15px] text-[var(--text-1)] mb-2">
                {step.title}
              </div>
              
              <p className="font-body text-[13px] text-[var(--text-2)] leading-[1.8] max-w-[320px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
