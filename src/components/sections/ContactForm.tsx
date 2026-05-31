'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { slideInLeft, slideInRight, viewport } from '@/lib/motion'

export function ContactForm() {
  return (
    <section id="contact" className="bg-[var(--bg-2)] py-24 px-5 md:px-9 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* Left Column (Form) */}
        <motion.div 
          className="lg:col-span-7"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.1em]">GET IN TOUCH</span>
            <div className="w-px h-4 bg-[var(--border-strong)]" />
            <span className="font-mono text-[10px] text-strata-acid tracking-[0.2em] uppercase">Book a site visit</span>
          </div>
          
          <h2 className="font-display text-[48px] md:text-[64px] text-[var(--text-1)] leading-[0.92] mb-6">
            BOOK A SITE VISIT.
          </h2>
          
          <p className="font-body text-[14px] md:text-[15px] text-[var(--text-2)] font-light leading-[1.8] mb-12 max-w-[480px]">
            Our team responds within 2 hours on working days. No spam, no third-party broker calls — ever.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your full name" 
                required
                className="w-full bg-[var(--bg-3)] border border-[var(--border)] text-[var(--text-1)] placeholder:text-[var(--text-3)] font-body text-[13px] px-4 py-3 outline-none focus:border-[var(--border-strong)] focus:shadow-glow transition-all duration-200"
              />
              <input 
                type="tel" 
                placeholder="+91 xxxxxxxxxx" 
                required
                className="w-full bg-[var(--bg-3)] border border-[var(--border)] text-[var(--text-1)] placeholder:text-[var(--text-3)] font-body text-[13px] px-4 py-3 outline-none focus:border-[var(--border-strong)] focus:shadow-glow transition-all duration-200"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="your@email.com (Optional)" 
              className="w-full bg-[var(--bg-3)] border border-[var(--border)] text-[var(--text-1)] placeholder:text-[var(--text-3)] font-body text-[13px] px-4 py-3 outline-none focus:border-[var(--border-strong)] focus:shadow-glow transition-all duration-200"
            />
            
            <select 
              required
              className="w-full bg-[var(--bg-3)] border border-[var(--border)] text-[var(--text-1)] font-body text-[13px] px-4 py-3 outline-none focus:border-[var(--border-strong)] focus:shadow-glow transition-all duration-200 appearance-none"
            >
              <option value="" disabled selected className="text-[var(--text-3)]">Select a project</option>
              <option value="lumiere">Lumière, Koregaon Park</option>
              <option value="arch">The Arch, Baner</option>
              <option value="skyline">Skyline, Kharadi</option>
              <option value="general">General Enquiry</option>
            </select>
            
            <textarea 
              rows={4}
              placeholder="Tell us about your requirements — budget, timeline, preferred floor, etc. (Optional)" 
              className="w-full bg-[var(--bg-3)] border border-[var(--border)] text-[var(--text-1)] placeholder:text-[var(--text-3)] font-body text-[13px] px-4 py-3 outline-none focus:border-[var(--border-strong)] focus:shadow-glow transition-all duration-200 resize-none"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full bg-strata-acid text-strata-acid-text font-body font-bold text-[12px] tracking-[0.15em] uppercase px-6 py-4 hover:shadow-glow-btn transition-shadow duration-200 mt-2"
            >
              Book a site visit →
            </button>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              {['No brokerage', 'RERA verified', 'Responds in 2hrs'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={12} className="text-strata-acid" />
                  <span className="font-mono text-[10px] text-[var(--text-3)] uppercase tracking-[0.1em]">{item}</span>
                </div>
              ))}
            </div>
          </form>
        </motion.div>

        {/* Right Column (Contact Info) */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-between"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-1">CALL US</div>
              <div className="font-body text-[18px] text-[var(--text-1)]">+91 20 2640 5555</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-1">WHATSAPP</div>
              <div className="font-body text-[18px] text-[var(--text-1)]">+91 98765 43210</div>
            </div>
            <div className="sm:col-span-2">
              <div className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-1">VISIT US</div>
              <div className="font-body text-[15px] text-[var(--text-1)] leading-[1.6]">
                Strata House, 14 North Main Road<br/>
                Koregaon Park, Pune — 411001
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-1">RERA REGISTRATION</div>
              <div className="font-mono text-[11px] text-[var(--text-2)] leading-[1.8]">
                P52100034521 (Lumière)<br/>
                P52100041872 (The Arch)<br/>
                P52100048934 (Skyline)
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden border border-[var(--border)]">
            <Image 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=480&q=82" 
              alt="Strata luxury interior — Lumière, Koregaon Park" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
