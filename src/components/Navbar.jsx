import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hexagon, Menu, X, Bell } from 'lucide-react'

// Minimal Navigation items
const navItems = ['Assistant', 'Awareness', 'Daily']

export default function Navbar({ activeSection, setActiveSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <motion.a
          className="nav-logo"
          href="#"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--text-primary)', textDecoration: 'none' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="icon-wrap icon-wrap-primary" style={{ width: 32, height: 32, borderRadius: 'var(--radius-sm)' }}>
            <Hexagon size={18} strokeWidth={2.5} />
          </div>
          OptiLife
        </motion.a>

        <ul className="nav-links" style={{ display: 'flex', gap: 'var(--space-1)', listStyle: 'none' }}>
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions" style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
          <button className="btn btn-ghost btn-sm" style={{ width: 36, height: 36, padding: 0 }}>
            <Bell size={18} color="var(--text-secondary)" />
          </button>
          
          <button className="btn btn-primary btn-sm" style={{ paddingInline: 'var(--space-5)' }}>
            Sign In
          </button>

          <button
            className="btn btn-secondary btn-sm nav-mobile-btn"
            style={{ width: 36, height: 36, padding: 0 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-default)' }}
          >
            <div className="container" style={{ paddingBlock: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {navItems.map((item) => (
                <button
                  key={item}
                  className="nav-link"
                  style={{ textAlign: 'left', padding: 'var(--space-3)' }}
                  onClick={() => { setActiveSection(item.toLowerCase()); setMenuOpen(false); }}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
