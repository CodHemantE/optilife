import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-default)', paddingBlock: 'var(--space-8)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)' }}>
            <Hexagon size={16} /> OptiLife Workplace
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Privacy</a>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Terms</a>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>HR Portal</a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', margin: 0 }}>
            © 2026 Corporate Wellness AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
