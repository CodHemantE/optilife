import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Zap, Menu, X, Bell, User } from 'lucide-react'

const navItems = ['Home', 'Dashboard', 'Habits', 'Insights', 'Progress']

export default function Navbar({ activeSection, setActiveSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container nav-inner" style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <motion.a
          className="nav-logo"
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="icon-wrap icon-wrap-primary" style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)' }}>
            <Activity size={20} strokeWidth={2.5} />
          </div>
          Opti<span style={{ color: 'var(--primary-600)' }}>Life</span>
        </motion.a>

        <ul className="nav-links" style={{ display: 'flex', gap: 'var(--space-2)' }}>
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

        <div className="nav-actions" style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <motion.button className="btn btn-secondary btn-sm" style={{ width: 40, height: 40, padding: 0, borderRadius: '50%' }}>
            <Bell size={18} />
          </motion.button>
          
          <motion.button className="btn btn-primary btn-sm" style={{ paddingInline: 'var(--space-5)' }}>
            <User size={16} />
            <span>Patient Portal</span>
          </motion.button>

          <motion.button
            className="btn btn-secondary btn-sm nav-mobile-btn"
            style={{ width: 40, height: 40, padding: 0 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', background: 'var(--bg-surface)', boxShadow: 'var(--shadow-neu)' }}
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
