export function Kicker({ index, total, title }: { index: string, total: string, title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-[10px] text-[var(--text-3)] tracking-[0.1em]">
        {index} / {total}
      </span>
      <div className="w-px h-4 bg-[var(--border-strong)]" />
      <span className="font-mono text-[10px] text-strata-acid tracking-[0.2em] uppercase">
        {title}
      </span>
    </div>
  )
}
