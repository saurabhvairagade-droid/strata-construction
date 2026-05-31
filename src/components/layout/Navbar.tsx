'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`
      sticky top-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-[var(--bg-1)]/95 backdrop-blur-sm shadow-nav' : 'bg-transparent'}
    `}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-9 h-[57px] grid grid-cols-2 md:grid-cols-3 items-center">
        {/* LOGO */}
        <a href="#" className="font-display text-[26px] tracking-[5px] flex items-center w-[180px] uppercase">
          <span className="text-[var(--text-1)]">STRAT</span>
          <span className="text-strata-acid">A</span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-strata-acid transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* DESKTOP RIGHT (THEME + CTA) */}
        <div className="hidden md:flex items-center justify-end gap-4 w-[180px] ml-auto">
          <ThemeToggle />
          <button className="
            bg-strata-acid text-strata-acid-text
            font-body font-bold text-[10px] tracking-[0.15em] uppercase
            px-5 py-[9px]
            hover:shadow-glow-btn transition-shadow duration-200
          ">
            Book call ↗
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden justify-end">
          <button 
            className="text-[var(--text-1)] p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[var(--bg-2)] z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="#" className="font-display text-[26px] tracking-[5px] flex items-center uppercase" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[var(--text-1)]">STRAT</span>
                <span className="text-strata-acid">A</span>
              </a>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button 
                  className="text-[var(--text-1)] p-2 -mr-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-[14px] uppercase tracking-[0.12em] text-[var(--text-1)] border-b border-[var(--border)] pb-4"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pb-8">
              <button className="
                w-full bg-strata-acid text-strata-acid-text
                font-body font-bold text-[12px] tracking-[0.15em] uppercase
                px-6 py-4 flex justify-center items-center gap-2
              ">
                Book a site visit →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
