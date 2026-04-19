import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, FileText, AlertTriangle } from 'lucide-react'

const insights = [
  {
    icon: AlertTriangle,
    title: 'Irregular Heart Rate Detected',
    desc: 'Between 2:00 AM and 4:00 AM, sensors detected minor irregularities. Consider reviewing with Dr. Simmons.',
    color: 'var(--warning)',
    action: 'Book Teleconsult'
  },
  {
    icon: FileText,
    title: 'Lab Results Ready',
    desc: 'Your recent Comprehensive Metabolic Panel (CMP) results have been uploaded to your portal.',
    color: 'var(--primary-600)',
    action: 'View Results'
  }
]

export default function InsightsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="insights" className="section" ref={ref}>
      <div className="container">
        <h2 className="display-lg" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          Clinical <span style={{ color: 'var(--secondary-500)' }}>Insights</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          {insights.map((item, i) => (
            <motion.div
              key={i}
              className="neumorphic-card"
              style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div className="icon-wrap" style={{ width: 40, height: 40, color: item.color }}>
                  <item.icon size={20} />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>{item.title}</h3>
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
