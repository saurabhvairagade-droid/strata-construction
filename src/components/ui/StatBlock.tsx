import { CountUp } from './CountUp'

export function StatBlock({ to, suffix, label }: { to: number, suffix: string, label: string }) {
  return (
    <div className="py-6 px-9 border-r border-[var(--border)] last:border-r-0">
      <div className="font-display text-[40px] text-[var(--text-1)] leading-none">
        <CountUp to={to} /><span className="text-strata-acid text-[32px]">{suffix}</span>
      </div>
      <div className="font-mono text-[9px] text-[var(--text-3)] tracking-[0.15em] uppercase mt-2">
        {label}
      </div>
    </div>
  )
}
