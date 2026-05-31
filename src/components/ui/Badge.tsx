export function Badge({ children, variant = 'ghost' }: { children: React.ReactNode, variant?: 'acid' | 'ghost' }) {
  return (
    <span className={`
      font-mono text-[9px] px-2 py-1 uppercase tracking-[0.15em] font-bold
      ${variant === 'acid' 
        ? 'bg-strata-acid text-strata-acid-text' 
        : 'bg-[var(--bg-3)] text-[var(--text-2)] border border-[var(--border)]'}
    `}>
      {children}
    </span>
  )
}
