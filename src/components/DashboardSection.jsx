import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Heart, Activity, Droplets, ArrowRight } from 'lucide-react'

// Hook for counting
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])
  return count
}

const metricsCards = [
  { icon: Heart, color: 'var(--danger)', label: 'Heart Rate', value: 72, unit: 'BPM', status: 'Optimal' },
  { icon: Activity, color: 'var(--primary-600)', label: 'Blood Pressure', value: '118/75', unit: 'mmHg', status: 'Normal' },
  { icon: Droplets, color: 'var(--secondary-500)', label: 'SpO2 Level', value: 98, unit: '%', status: 'Healthy' }
]

export default function DashboardSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const heartRate = useCounter(72, 1000, inView)

  return (
    <section id="dashboard" className="section" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-3)' }}>LIVE VITALS</span>
          <h2 className="display-lg">Patient <span className="text-gradient">Dashboard</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
          {metricsCards.map((m, i) => (
            <motion.div
              key={m.label}
              className="neumorphic-card"
              style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="icon-wrap" style={{ width: 48, height: 48, color: m.color }}>
                  <m.icon size={24} />
                </div>
                <span className="badge" style={{ color: m.color }}>{m.status}</span>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, fontFamily: 'var(--font-display)', color: m.color }}>
                  {m.label === 'Heart Rate' ? heartRate : m.value} <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{m.unit}</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{m.label}</div>
              </div>
              <div className="neumorphic-inset" style={{ height: 60, padding: 8, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                  {/* Fake ECG graph effect */}
                  {[...Array(12)].map((_, j) => (
                    <motion.div
                      key={j}
                      style={{ flex: 1, background: m.color, borderRadius: 2 }}
                      initial={{ height: '10%' }}
                      animate={inView ? { height: `${Math.random() * 80 + 20}%` } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: j * 0.1 }}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
