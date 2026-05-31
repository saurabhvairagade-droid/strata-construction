export function Footer() {
  return (
    <footer className="bg-[var(--bg-1)] border-t border-[var(--border)] py-12 px-5 md:px-9">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <div className="font-display text-[26px] tracking-[5px] flex items-center uppercase">
              <span className="text-[var(--text-1)]">STRAT</span>
              <span className="text-strata-acid">A</span>
            </div>
            <p className="font-body text-[13px] text-[var(--text-2)]">
              Built different. Delivered on time.
            </p>
            <p className="font-mono text-[10px] text-[var(--text-3)] leading-relaxed mt-4">
              MahaRERA registered developer. All projects registered under Maharashtra Real Estate Regulatory Authority.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[9px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-2">Projects</h4>
            <a href="#projects" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">Lumière</a>
            <a href="#projects" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">The Arch</a>
            <a href="#projects" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">Skyline</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[9px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-2">Company</h4>
            <a href="#about" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">About</a>
            <a href="#process" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">Process</a>
            <a href="#team" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">Team</a>
            <a href="#contact" className="font-body text-[13px] text-[var(--text-2)] hover:text-strata-acid transition-colors">Contact</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[9px] text-[var(--text-3)] tracking-[0.15em] uppercase mb-2">Reach Us</h4>
            <p className="font-body text-[13px] text-[var(--text-2)]">+91 20 2640 5555</p>
            <p className="font-body text-[13px] text-[var(--text-2)]">hello@strata.in</p>
            <p className="font-body text-[13px] text-[var(--text-2)] mt-2">
              Strata House, 14 North Main Road<br/>
              Koregaon Park, Pune — 411001
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] text-[var(--text-3)]">
            © 2026 Strata Developers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-[9px] text-[var(--text-3)] hover:text-[var(--text-1)]">Privacy Policy</a>
            <span className="text-[var(--text-3)]">·</span>
            <a href="#" className="font-mono text-[9px] text-[var(--text-3)] hover:text-[var(--text-1)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
