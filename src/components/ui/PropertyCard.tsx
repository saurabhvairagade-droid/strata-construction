'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cardHover } from '@/lib/motion'

export interface PropertyCardProps {
  id: string
  name: string
  location: string
  price: string
  priceUnit: string
  area: string
  bhk: string
  status: string
  rera: string
  image: string
  featured?: boolean
  badges?: string[]
}

export function PropertyCard({
  name,
  location,
  price,
  priceUnit,
  area,
  bhk,
  status,
  rera,
  image,
  featured = false,
  badges = [],
}: PropertyCardProps) {
  return (
    <motion.div variants={cardHover} initial="rest" whileHover="hover">
      <div className={`
        ${featured ? 'border-[var(--acid-border)] shadow-glow hover:shadow-glow-strong' : 'border-[var(--border)] shadow-card hover:shadow-card-hover'}
        border bg-gradient-to-b from-[var(--bg-2)] to-[var(--bg-3)]
        transition-all duration-300 group cursor-pointer
        relative overflow-hidden
      `}>
        {featured && (
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-strata-acid z-10" />
        )}

        <div className="relative h-[240px] overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover group-hover:scale-[1.03] transition duration-500" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75" />
          <div className="absolute top-3 left-3 flex gap-2">
            {badges.map((badge, i) => (
              <span key={i} className={`font-mono text-[9px] px-2 py-1 uppercase tracking-[0.15em] font-bold ${badge === 'NEW' ? 'bg-strata-acid text-strata-acid-text' : 'bg-white/10 text-white border border-white/20'}`}>
                {badge}
              </span>
            ))}
          </div>
          <div className="absolute bottom-3 left-3">
            <div className="font-display text-[32px] text-white leading-none mb-1">
              {price} <span className="text-strata-acid">{priceUnit}</span>
            </div>
            <div className="font-mono text-[10px] text-white/50">{location}</div>
          </div>
        </div>

        <div className="p-4">
          <div className="font-body font-medium text-[14px] text-[var(--text-1)] mb-1">
            {name}
          </div>
          <div className="font-mono text-[10px] text-[var(--text-3)] mb-4">
            MahaRERA: {rera}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
            <span className="font-mono text-[10px] text-[var(--text-3)]">{area} sqft</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span className="font-mono text-[10px] text-[var(--text-3)]">{bhk} BHK</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span className="font-mono text-[10px] text-strata-acid">{status}</span>
          </div>
        </div>

        <div className="
          px-4 py-3 border-t border-[var(--border)]
          flex items-center justify-between
        ">
          <span className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.1em] uppercase">
            View project →
          </span>
          <div className="w-6 h-px bg-strata-acid group-hover:w-10 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}
