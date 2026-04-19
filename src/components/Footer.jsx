import { motion } from 'framer-motion'
import { Activity, Twitter, Github, Instagram, Mail, Heart } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Dashboard', 'Habits', 'Insights', 'Mobile App', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Support: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-8)' }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
          {/* Brand */}
          <div>
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="nav-logo-icon">
                <Activity size={18} color="#fff" strokeWidth={2.5} />
              </div>
              Opti<span className="text-gradient-primary">Life</span>
            </motion.div>

            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7, maxWidth: 260, marginBottom: 'var(--space-6)' }}>
              Your AI-powered wellness companion. Build better habits, track your health, and unlock your potential.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {[Twitter, Github, Instagram, Mail].map((Icon, i) => (
                <motion.button
                  key={i}
                  className="btn btn-ghost btn-sm"
                  style={{ padding: 'var(--space-2)', width: 36, height: 36, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}
                  whileHover={{ scale: 1.1, borderColor: 'var(--primary-400)', color: 'var(--primary-400)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-4)', letterSpacing: '0.02em' }}>
                {heading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {links.map(link => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                      whileHover={{ color: 'var(--text-primary)', x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 'var(--space-6)' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            © 2026 OptiLife. Made with <Heart size={13} fill="var(--danger)" color="var(--danger)" /> for your wellness.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <span className="badge badge-primary">v2.0</span>
            <span className="badge badge-green">Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
