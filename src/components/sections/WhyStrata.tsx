'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Clock, Zap, Star } from 'lucide-react'
import { Kicker } from '../ui/Kicker'
import { slideInLeft, fadeIn, scaleIn, staggerMed, viewport } from '@/lib/motion'

export function WhyStrata() {
  const usps = [
    { icon: Shield, title: 'MahaRERA Registered', desc: 'Every project registered with Maharashtra RERA. Full transparency on approvals, timelines, and escrow.' },
    { icon: Clock, title: 'Delivered On Time', desc: '24 out of 24 projects delivered on or before the committed date. Your possession date is a promise, not an estimate.' },
    { icon: Zap, title: 'Direct from Developer', desc: 'Zero brokerage. Zero middlemen. You deal directly with our team from your first call to the day you get your keys.' },
    { icon: Star, title: 'Award-Winning Design', desc: 'Recipient of the Pune Property Awards 2024 — Best Luxury Developer. Designed by architects who have worked with Perkins & Will and HOK.' },
  ]

  return (
    <section id="about" className="bg-[var(--bg-2)] py-24 px-5 md:px-9">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Kicker index="03" total="06" title="Why choose us" />
          
          <motion.h2 
            variants={slideInLeft} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport}
            className="font-display text-[48px] md:text-[64px] text-[var(--text-1)] leading-[0.92] mb-6"
          >
            WHY CHOOSE STRATA.
          </motion.h2>

          <motion.p 
            variants={slideInLeft} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport}
            className="font-body text-[14px] md:text-[15px] text-[var(--text-2)] font-light leading-[1.8] mb-12 max-w-[480px]"
          >
            Since 2008, we&apos;ve delivered 24 projects across Pune&apos;s most premium addresses. We don&apos;t build apartments — we build the address your family will be proud of for generations.
          </motion.p>

          <motion.div 
            variants={fadeIn} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport}
            className="grid grid-cols-3 gap-6 mb-12"
          >
            <div>
              <div className="font-display text-[32px] text-[var(--text-1)] mb-1">₹1,200 <span className="text-strata-acid">Cr+</span></div>
              <div className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-[0.15em]">Delivered</div>
            </div>
            <div>
              <div className="font-display text-[32px] text-[var(--text-1)] mb-1">24</div>
              <div className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-[0.15em]">Projects</div>
            </div>
            <div>
              <div className="font-display text-[32px] text-[var(--text-1)] mb-1">18</div>
              <div className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-[0.15em]">Years</div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport}
            className="relative h-[240px] md:h-[320px] w-full overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=82" 
              alt="Strata development team reviewing project plans" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Column (USPs) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            variants={staggerMed} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
          >
            {usps.map((usp, i) => (
              <motion.div key={i} variants={scaleIn} className="
                bg-gradient-to-b from-[var(--bg-2)] to-[var(--bg-3)]
                border border-[var(--border)]
                shadow-card p-8
                flex flex-col
              ">
                <div className="w-10 h-10 mb-6 flex items-center justify-center border border-[var(--acid-border)]">
                  <usp.icon size={20} className="text-strata-acid" />
                </div>
                <h3 className="font-body font-medium text-[15px] text-[var(--text-1)] mb-3">{usp.title}</h3>
                <p className="font-body text-[13px] text-[var(--text-2)] font-light leading-[1.75]">{usp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
