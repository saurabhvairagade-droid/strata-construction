'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Kicker } from '../ui/Kicker'
import { slideInLeft, fadeUp, staggerMed, viewport } from '@/lib/motion'

export function Team() {
  const team = [
    {
      id: 1,
      name: "Vikram Strata",
      title: "Founder & Managing Director",
      bio: "20 years in Pune's property market. Vikram started Strata with one conviction: that buyers deserve the truth about what they're buying. Architecture degree from SPA Delhi, MBA from ISB Hyderabad.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=82"
    },
    {
      id: 2,
      name: "Ananya Sharma",
      title: "Head of Design & Architecture",
      bio: "Trained at the Architectural Association, London. Led design on all 24 Strata projects. Believes that the best homes are the ones you stop noticing — because they just fit.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=82"
    },
    {
      id: 3,
      name: "Rohan Desai",
      title: "Head of Customer Experience",
      bio: "Ex-Marriott, ex-Four Seasons. Rohan brought hospitality thinking to real estate — from the first call to possession day. If you've ever been pleasantly surprised by a developer, this is why.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  return (
    <section id="team" className="bg-[var(--bg-1)] py-24 px-5 md:px-9">
      <div className="max-w-[1440px] mx-auto">
        <Kicker index="06" total="06" title="The people" />
        
        <motion.h2 
          variants={slideInLeft} 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewport}
          className="font-display text-[48px] md:text-[64px] text-[var(--text-1)] leading-[0.92] mb-16"
        >
          THE TEAM.
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={fadeUp} className="
              bg-gradient-to-b from-[var(--bg-2)] to-[var(--bg-3)]
              border border-[var(--border)]
              shadow-card group overflow-hidden
            ">
              <div className="relative w-full h-[320px] md:h-[240px] lg:h-[320px] overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-[1.02] transition duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-body font-medium text-[15px] text-[var(--text-1)] mb-1">{member.name}</h3>
                <div className="font-mono text-[10px] text-strata-acid tracking-[0.12em] uppercase mb-4">{member.title}</div>
                <p className="font-body text-[13px] text-[var(--text-2)] leading-[1.75] font-light">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
