'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { lineReveal, fadeUp, slideInRight, staggerFast, viewport } from '@/lib/motion'

interface HeroProps {
  title?: string | null;
  subtitle?: string | null;
  imageUrl?: string | null;
}

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  const listings = [
    { id: 1, price: '₹2.4', unit: 'Cr', name: 'Lumière, Koregaon Park', tags: '4 BHK · 2,840 sqft · NEW', featured: true },
    { id: 2, price: '₹1.85', unit: 'Cr', name: 'The Arch, Baner', tags: '3 BHK · 1,920 sqft', featured: false },
    { id: 3, price: '₹92', unit: 'L', name: 'Skyline, Kharadi', tags: '2 BHK · 1,180 sqft', featured: false },
    { id: 4, price: '₹68', unit: 'L', name: 'Horizon, Wakad', tags: '2 BHK · 950 sqft', featured: false },
  ]

  return (
    <section className="relative bg-[var(--bg-1)] min-h-[calc(100vh-32px-57px)] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"}
          alt={title || "Luxury property"}
          fill
          priority
          className="object-cover grayscale opacity-60 dark:opacity-20 mix-blend-luminosity"
        />
        {/* Blur/Gradient Overlay */}
        <div className="absolute inset-0 bg-[#4A4A4A]/45 dark:bg-[#080808]/70 backdrop-blur-[3px] dark:backdrop-blur-[8px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8E3DA]/30 dark:via-[#080808]/50 to-[var(--bg-1)]" />
      </div>

      {/* Ambient Glow in dark mode */}
      <div className="hero-glow hidden dark:block z-0" />

      <div className="flex-1 max-w-[1440px] w-full mx-auto px-5 md:px-9 pt-12 md:pt-24 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">

        {/* LEFT COLUMN */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">

          {/* Pre-label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.1em]">01 / 06</span>
            <div className="w-px h-4 bg-[var(--border-strong)]" />
            <span className="font-mono text-[10px] text-strata-acid tracking-[0.2em] uppercase">Premium real estate · Pune</span>
          </div>

          {/* H1 */}
          <motion.h1
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            {(title ? title.split(' ') : ['STRATA', 'BUILDS', 'PUNE.']).map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  variants={lineReveal}
                  className={`font-display text-[52px] md:text-[64px] lg:text-[88px] xl:text-[112px] leading-[0.88] ${i === 1 ? 'inline-block px-4' : 'block'} ${i === 0 ? 'tracking-[0.02em] text-[var(--text-1)]' :
                      i === 1 ? 'bg-strata-acid text-strata-acid-text tracking-[0.02em]' :
                        'text-strata-acid'
                    }`}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="font-body text-[14px] text-[var(--text-2)] font-light max-w-[360px] leading-[1.8] mb-10"
          >
            {subtitle || "We curate exceptional homes for people who understand that where you live is a statement about how you live. Direct from developer. Zero brokerage. MahaRERA certified."}
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="
              w-full sm:w-auto
              bg-strata-acid text-strata-acid-text
              font-body font-bold text-[10px] tracking-[0.15em] uppercase
              px-8 py-4
              hover:shadow-glow-btn active:scale-[0.98] transition-all duration-200
            ">
              Book a site visit →
            </button>
            <a href="#projects" className="
              font-mono text-[10px] text-[var(--text-3)] tracking-[0.1em] uppercase
              hover:text-[var(--text-1)] transition-colors duration-200
            ">
              ↗ View all projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="hidden lg:flex col-span-1 lg:col-span-4 lg:col-start-9 flex-col justify-center"
        >
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="font-mono text-[10px] text-[var(--text-3)] uppercase tracking-[0.1em]">Live listings</span>
            <span className="font-mono text-[9px] bg-strata-acid text-strata-acid-text px-2 py-0.5 uppercase tracking-[0.1em] font-bold">24</span>
          </div>

          <div className="flex flex-col gap-2">
            <motion.div variants={staggerFast} initial="hidden" animate="visible" className="flex flex-col gap-2">
              {listings.map((l, i) => (
                <motion.div key={l.id} variants={fadeUp} className={`
                  p-4 transition-colors duration-200 group cursor-pointer
                  ${l.featured ? 'border-l-2 border-strata-acid bg-[var(--acid-muted)] shadow-glow dark:shadow-glow' : 'bg-transparent hover:bg-[var(--bg-3)]'}
                `}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-body font-medium text-[14px] text-[var(--text-1)] group-hover:text-strata-acid transition-colors">{l.name}</div>
                    <div className="font-display text-[20px] text-[var(--text-1)]">{l.price} <span className="text-strata-acid text-[14px]">{l.unit}</span></div>
                  </div>
                  <div className="font-mono text-[9px] text-[var(--text-3)] uppercase tracking-[0.1em]">{l.tags}</div>
                </motion.div>
              ))}

              {/* View all row */}
              <motion.div variants={fadeUp} className="bg-[var(--acid-muted)] p-4 flex justify-between items-center cursor-pointer group hover:bg-[var(--acid-border)] transition-colors">
                <span className="font-mono text-[10px] text-strata-acid uppercase tracking-[0.1em]">+20 more</span>
                <span className="font-mono text-[10px] text-strata-acid uppercase tracking-[0.1em] group-hover:translate-x-1 transition-transform">View all →</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SEARCH BAR (Pinned to bottom) */}
      <div className="absolute bottom-0 left-0 w-full bg-[var(--bg-2)] border-t border-[var(--border)] z-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-9 flex flex-col md:flex-row h-auto md:h-[64px]">

          {/* Tabs */}
          <div className="flex items-center border-b md:border-b-0 md:border-r border-[var(--border)] h-[48px] md:h-full overflow-x-auto hide-scrollbar">
            {['Buy', 'New Projects', 'Commercial'].map((tab, i) => (
              <button key={tab} className={`
                px-6 h-full whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] transition-colors
                ${i === 0 ? 'text-strata-acid' : 'text-[var(--text-3)] hover:text-[var(--text-1)]'}
              `}>
                {tab}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex-1 flex items-center h-[64px] md:h-full px-4 md:px-6">
            <input
              type="text"
              placeholder="Search by location, project, or budget…"
              className="w-full bg-transparent border-none outline-none font-body text-[14px] text-[var(--text-1)] placeholder:text-[var(--text-3)]"
            />
          </div>

          {/* Button */}
          <button className="
            h-[64px] md:h-full px-8 md:px-12
            bg-strata-acid text-strata-acid-text
            font-body font-bold text-[12px] uppercase tracking-[0.15em]
            hover:shadow-glow-btn transition-shadow duration-200
          ">
            Search →
          </button>
        </div>
      </div>
    </section>
  )
}
