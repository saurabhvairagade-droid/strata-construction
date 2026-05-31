import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        strata: {
          bg1:    'var(--bg-1)',
          bg2:    'var(--bg-2)',
          bg3:    'var(--bg-3)',
          t1:     'var(--text-1)',
          t2:     'var(--text-2)',
          t3:     'var(--text-3)',
          border: 'var(--border)',
          'border-strong': 'var(--border-strong)',
          acid:       'var(--acid)',
          'acid-text':'var(--acid-text)',
          'acid-muted': 'var(--acid-muted)',
          'acid-border':'var(--acid-border)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      boxShadow: {
        'card':         'var(--shadow-card)',
        'card-hover':   'var(--shadow-card-hover)',
        'glow':         'var(--shadow-glow)',
        'glow-strong':  'var(--shadow-glow-strong)',
        'glow-btn':     '0 0 0 1px rgba(235,255,56,0.30), 0 4px 20px rgba(235,255,56,0.25)',
        'nav':          'var(--shadow-nav)',
      },
      backgroundImage: {
        'card-dark':  'linear-gradient(to top, #1C1C1C 0%, #121212 100%)',
        'card-light': 'linear-gradient(to top, #F8F5F0 0%, #F0EBE3 100%)',
      },
    },
  },
}
export default config
