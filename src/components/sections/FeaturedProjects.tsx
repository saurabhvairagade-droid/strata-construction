'use client'
import { motion } from 'framer-motion'
import { Kicker } from '../ui/Kicker'
import { PropertyCard } from '../ui/PropertyCard'
import { slideInLeft, fadeUp, staggerMed, scaleIn, viewport } from '@/lib/motion'

export function FeaturedProjects() {
  const projects = [
    {
      id: 'lumiere',
      name: 'Lumière Residences',
      location: 'Koregaon Park, Pune',
      price: '₹2.40',
      priceUnit: 'Cr',
      area: '2,840',
      bhk: '4',
      status: 'Ready to move',
      rera: 'P52100034521',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=82',
      featured: true,
      badges: ['NEW', '4 BHK', 'Ready to move']
    },
    {
      id: 'arch',
      name: 'The Arch',
      location: 'Baner, Pune',
      price: '₹1.85',
      priceUnit: 'Cr',
      area: '1,920',
      bhk: '3',
      status: 'Dec 2025',
      rera: 'P52100041872',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=82',
      featured: true,
      badges: ['3 BHK', 'Dec 2025']
    },
    {
      id: 'skyline',
      name: 'Skyline',
      location: 'Kharadi, Pune',
      price: '₹92',
      priceUnit: 'L',
      area: '1,180',
      bhk: '2',
      status: 'Q3 2026',
      rera: 'P52100048934',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      badges: ['2 BHK', 'Q3 2026', 'Under construction']
    }
  ]

  return (
    <section id="projects" className="bg-[var(--bg-1)] py-24 px-5 md:px-9 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <Kicker index="02" total="06" title="Featured projects" />
            <motion.h2 
              variants={slideInLeft} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewport}
              className="font-display text-[48px] md:text-[64px] text-[var(--text-1)] leading-[0.92]"
            >
              OUR PROJECTS.
            </motion.h2>
          </div>

          <div className="flex flex-col md:items-end gap-6 max-w-[480px]">
            <motion.p 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewport}
              className="font-body text-[14px] text-[var(--text-2)] font-light leading-[1.8] md:text-right"
            >
              Three flagship developments across Pune&apos;s most coveted addresses. Each project MahaRERA registered, delivered on schedule.
            </motion.p>
            <motion.a 
              href="#projects" 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewport}
              className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.1em] uppercase hover:text-[var(--text-1)] transition-colors duration-200"
            >
              View all projects →
            </motion.a>
          </div>
        </div>

        {/* Grid */}
        <div className="bg-[var(--border)] p-px">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            variants={staggerMed}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {projects.map((p) => (
              <motion.div key={p.id} variants={scaleIn} className="bg-[var(--bg-1)] h-full">
                <PropertyCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
