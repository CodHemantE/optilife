import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, FileText } from 'lucide-react'

const awarenessTips = [
  {
    icon: AlertCircle,
    title: 'Ergonomic Risk Detected',
    desc: 'You have been seated for over 2 hours without a break. Stand up, stretch, and check your posture to prevent lower back strain.',
    color: 'var(--warning)',
    action: 'Posture Guide'
  },
  {
    icon: FileText,
    title: 'Weekly Wellness Report',
    desc: 'Your average stress level remained in the low-risk zone this week. Keep up the 5-minute walks during breaks!',
    color: 'var(--success)',
    action: 'View Detailed Log'
  }
]

export default function InsightsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="awareness" className="section" ref={ref}>
      <div className="container">
        <h2 className="display-lg" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          Workplace <span className="text-gradient">Awareness</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          {awarenessTips.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card"
              style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div className="icon-wrap" style={{ width: 40, height: 40, color: item.color }}>
                  <item.icon size={20} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{item.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              <button className="btn btn-secondary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                {item.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
