import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Menu, X, Bell, User, Zap } from 'lucide-react'

const navItems = ['Home', 'Dashboard', 'Habits', 'Insights', 'Progress']

export default function Navbar({ activeSection, setActiveSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className="nav"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: scrolled
          ? 'rgba(6, 10, 15, 0.95)'
          : 'rgba(6, 10, 15, 0.6)',
      }}
    >
      <div className="container nav-inner">
        {/* Logo */}
        <motion.a
          className="nav-logo"
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="nav-logo-icon"
            animate={{ boxShadow: ['0 0 15px rgba(0,196,183,0.3)', '0 0 25px rgba(0,196,183,0.6)', '0 0 15px rgba(0,196,183,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Activity size={18} color="#fff" strokeWidth={2.5} />
          </motion.div>
          Opti<span className="text-gradient-primary">Life</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <motion.button
            className="btn btn-ghost btn-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ position: 'relative', padding: 'var(--space-2)' }}
          >
            <Bell size={18} />
            <span style={{
              position: 'absolute', top: 4, right: 4,
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--primary-400)'
            }} />
          </motion.button>

          <motion.button
            className="btn btn-secondary btn-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <User size={15} />
            <span>Profile</span>
          </motion.button>

          <motion.button
            className="btn btn-primary btn-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Zap size={14} />
            Start Journey
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            className="btn btn-ghost btn-sm nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--border-subtle)',
              background: 'rgba(6, 10, 15, 0.98)'
            }}
          >
            <div className="container" style={{ paddingBlock: 'var(--space-4)' }}>
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  className="nav-link"
                  style={{ display: 'flex', width: '100%', padding: 'var(--space-3) var(--space-4)' }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { setActiveSection(item.toLowerCase()); setMenuOpen(false) }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
