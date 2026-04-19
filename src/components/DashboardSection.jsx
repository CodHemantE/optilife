import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, Activity, BrainCircuit } from 'lucide-react'

const symptoms = [
  { icon: Eye, title: 'Digital Eye Strain', tracked: '4 hrs screen time', severity: 'Low', color: 'var(--primary-600)' },
  { icon: Activity, title: 'Posture & Back Pain', tracked: '2 episodes this week', severity: 'Moderate', color: 'var(--warning)' },
  { icon: BrainCircuit, title: 'Burnout / Stress', tracked: 'Normal levels', severity: 'Low', color: 'var(--success)' }
]

export default function DashboardSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tracker" className="section" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-3)' }}>MY HEALTH</span>
          <h2 className="display-lg">Office Symptom <span className="text-gradient">Tracker</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
          {symptoms.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass-card"
              style={{ padding: 'var(--space-6)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                <div className="icon-wrap" style={{ width: 44, height: 44, color: s.color, background: 'var(--bg-surface)' }}>
                  <s.icon size={22} />
                </div>
                <span className={`badge`} style={{ color: s.color, border: `1px solid ${s.color}` }}>{s.severity}</span>
              </div>
              
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                Status: {s.tracked}
              </p>
              
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 'var(--space-4)', width: '100%' }}>
                Log Symptom
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
