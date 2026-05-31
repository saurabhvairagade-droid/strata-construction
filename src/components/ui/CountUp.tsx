'use client'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function CountUp({ to }: { to: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let animationFrameId: number
    let startTime: number | null = null
    const duration = 1800 // ms
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
      setCount(Math.floor(eased * to))
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(to)
      }
    }
    
    animationFrameId = requestAnimationFrame(step)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [inView, to])

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString('en-IN')}
    </span>
  )
}
