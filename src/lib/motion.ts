import type { Variants } from 'framer-motion'

// Ease curve — custom cubic bezier for all transitions
// Snappy start, smooth landing
export const ease = [0.16, 1, 0.3, 1] as const

// ── Entrance animations ──────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease } },
}

// ── Hero H1 line reveal (clip from below) ────────────
// Wrap each line in overflow-hidden, then animate y
export const lineReveal: Variants = {
  hidden:  { y: '105%' },
  visible: { y: '0%', transition: { duration: 0.9, ease } },
}

// ── Stagger containers ────────────────────────────────
export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerMed: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
}

// ── Hover micro-interactions ──────────────────────────
export const cardHover = {
  rest:  { y: 0,  transition: { duration: 0.3, ease } },
  hover: { y: -4, transition: { duration: 0.3, ease } },
}

// ── Viewport config (use with whileInView) ────────────
export const viewport = { once: true, margin: '-72px' } as const
