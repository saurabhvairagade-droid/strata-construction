'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Kicker } from '../ui/Kicker'
import { slideInLeft, staggerSlow, viewport } from '@/lib/motion'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "We looked at six developers before choosing Strata. The difference was night and day — every question had an answer, every date was kept. We got possession 12 days before the committed date.",
      name: "Rahul Mehta",
      role: "Senior Engineering Manager, Infosys",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=82"
    },
    {
      id: 2,
      quote: "Managing a property purchase from Dubai felt impossible — until Strata. Virtual tours, WhatsApp updates, and a dedicated relationship manager made it feel effortless. We never once felt like we were at an information disadvantage.",
      name: "Priya & Aditya Joshi",
      role: "NRI buyers, based in Dubai",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=82"
    },
    {
      id: 3,
      quote: "As an investor I've bought from 4 developers in Pune. Strata's MahaRERA compliance, escrow structure, and construction quality are simply a tier above. The returns on my Kharadi units are already tracking 14% above projection.",
      name: "Sanjay Kulkarni",
      role: "Co-founder, TechVentures Pune",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
    }
  ]

  return (
    <section className="bg-[var(--bg-2)] py-24 px-5 md:px-9 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <Kicker index="05" total="06" title="What clients say" />
        
        <motion.h2 
          variants={slideInLeft} 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewport}
          className="font-display text-[48px] md:text-[64px] text-[var(--text-1)] leading-[0.92] mb-16"
        >
          WHAT THEY SAY.
        </motion.h2>

        <motion.div 
          className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar md:grid md:grid-cols-3"
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={slideInLeft} className="flex-shrink-0 w-[320px] md:w-auto">
              <div className="
                bg-gradient-to-b from-[var(--bg-2)] to-[var(--bg-3)]
                border border-[var(--border)]
                shadow-card h-full
                p-6 flex flex-col
              ">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-strata-acid fill-strata-acid" />
                  ))}
                </div>
                
                <p className="font-body text-[13px] text-[var(--text-2)] leading-[1.85] mb-6 flex-grow italic">
                  &quot;{t.quote}&quot;
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)] mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[var(--border-strong)]">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-[13px] text-[var(--text-1)]">{t.name}</div>
                    <div className="font-mono text-[9px] text-[var(--text-3)] tracking-[0.1em] mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
