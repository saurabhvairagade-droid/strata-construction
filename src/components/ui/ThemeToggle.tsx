'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-8 h-8" /> // prevent hydration flash

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="
        w-8 h-8 flex items-center justify-center
        border border-[var(--border)]
        text-[var(--text-2)]
        hover:text-[var(--text-1)]
        hover:border-[var(--border-strong)]
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-strata-acid
      "
      aria-label="Toggle colour theme"
    >
      {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
    </button>
  )
}
