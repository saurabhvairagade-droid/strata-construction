'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorDot() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 900, damping: 45 })
  const sy = useSpring(y, { stiffness: 900, damping: 45 })

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      className="
        fixed w-[6px] h-[6px] rounded-full
        bg-strata-acid
        pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2
        hidden md:block
        mix-blend-difference
      "
      style={{ x: sx, y: sy }}
    />
  )
}
