import { motion } from 'framer-motion'
import { Activity, Twitter, Github, Heart } from 'lucide-react'

const footerLinks = {
  Patients: ['Find a Doctor', 'Teleconsultation', 'Prescriptions', 'Medical Records'],
  Company: ['About Us', 'Careers', 'Contact', 'Clinic Locations'],
  Legal: ['HIPAA Compliance', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-base)', borderTop: '1px solid rgba(13, 148, 136, 0.1)', paddingBlock: 'var(--space-12)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--space-10)', marginBottom: 'var(--space-12)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800 }}>
              <div className="icon-wrap icon-wrap-primary" style={{ width: 32, height: 32 }}>
                <Activity size={18} strokeWidth={3} />
              </div>
              Opti<span style={{ color: 'var(--primary-600)' }}>Life</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6, maxWidth: 260, marginBottom: 'var(--space-6)' }}>
              Modern healthcare platform delivering secure, remote telemedicine solutions.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {[Twitter, Github].map((Icon, i) => (
                <button
                  key={i}
                  className="btn btn-secondary"
                  style={{ width: 36, height: 36, padding: 0, borderRadius: '50%' }}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--primary-900)', marginBottom: 'var(--space-4)' }}>
                {heading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'rgba(13, 148, 136, 0.1)', marginBottom: 'var(--space-6)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            © 2026 OptiLife Health. Built with <Heart size={14} fill="var(--danger)" color="var(--danger)" /> for patient care.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <span className="badge badge-primary">HIPAA COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
