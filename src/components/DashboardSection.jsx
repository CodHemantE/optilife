import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Heart, Droplets, Moon, Flame, Activity, Brain, TrendingUp, Zap } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] } }
})

// Animated counter hook
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

// Ring Progress Chart SVG
function RingProgress({ percentage, color = 'var(--primary-500)', size = 100, strokeWidth = 8, label, sublabel }) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke="var(--bg-elevated)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div className="ring-label">
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size > 90 ? 'var(--text-xl)' : 'var(--text-sm)', color: 'var(--text-primary)' }}>
          {label}
        </div>
        {sublabel && (
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2 }}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  )
}

// Weekly bar chart
const weeklyData = [
  { day: 'Mon', value: 78, label: '7,800' },
  { day: 'Tue', value: 65, label: '6,500' },
  { day: 'Wed', value: 90, label: '9,000' },
  { day: 'Thu', value: 55, label: '5,500' },
  { day: 'Fri', value: 82, label: '8,200' },
  { day: 'Sat', value: 95, label: '9,500' },
  { day: 'Sun', value: 70, label: '7,000' },
]

function BarChart({ data, inView }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-end', height: 120 }}>
      {data.map((item, i) => (
        <div key={item.day} className="chart-bar">
          <motion.div
            className="chart-bar-fill"
            style={{ height: 0 }}
            animate={inView ? { height: `${item.value}%` } : { height: 0 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
          />
          <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: 4 }}>{item.day}</span>
        </div>
      ))}
    </div>
  )
}

const metricsCards = [
  {
    icon: Heart, color: '#ef4444', bg: 'rgba(239,68,68,0.12)',
    label: 'Heart Rate', value: 72, unit: 'bpm', status: 'Optimal',
    statusColor: 'var(--accent-400)', progress: 80
  },
  {
    icon: Droplets, color: 'var(--primary-400)', bg: 'rgba(0,196,183,0.12)',
    label: 'Hydration', value: 2.1, unit: 'L', status: 'Good',
    statusColor: 'var(--primary-400)', progress: 70
  },
  {
    icon: Moon, color: 'var(--secondary-400)', bg: 'rgba(139,92,246,0.12)',
    label: 'Sleep', value: 7.5, unit: 'hrs', status: 'Excellent',
    statusColor: 'var(--accent-400)', progress: 94
  },
  {
    icon: Flame, color: 'var(--warning)', bg: 'rgba(245,158,11,0.12)',
    label: 'Calories', value: 1840, unit: 'kcal', status: 'On Track',
    statusColor: 'var(--primary-400)', progress: 62
  },
]

export default function DashboardSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const stepsCount = useCounter(8247, 1200, inView)

  return (
    <section id="dashboard" className="section" ref={ref} style={{ position: 'relative' }}>
      {/* Subtle bg glow */}
      <div className="bg-glow-circle" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', right: -100, top: '20%' }} />

      <div className="container">
        {/* Heading */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}
        >
          <span className="badge badge-purple" style={{ marginBottom: 'var(--space-4)' }}>
            <Activity size={11} /> LIVE DASHBOARD
          </span>
          <h2 className="display-lg" style={{ marginBottom: 'var(--space-4)' }}>
            Your Health at a <span className="text-gradient">Glance</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', maxWidth: 500, margin: '0 auto' }}>
            Real-time insights into every health dimension, beautifully visualized.
          </p>
        </motion.div>

        {/* Main dashboard grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>

          {/* Left column — metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            {metricsCards.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.label}
                  className="glass-card metric-card"
                  variants={fadeUp(0.1 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -6, boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 20px ${m.color}30` }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                    <div className="icon-wrap" style={{ background: m.bg, color: m.color, width: 40, height: 40 }}>
                      <Icon size={18} />
                    </div>
                    <span className="badge" style={{ background: `${m.statusColor}15`, color: m.statusColor, border: `1px solid ${m.statusColor}30`, fontSize: '9px' }}>
                      {m.status}
                    </span>
                  </div>

                  <div className="stat-number" style={{ fontSize: 'var(--text-2xl)', marginBottom: 2 }}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.08 }}
                    >
                      {m.value}
                    </motion.span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 400, color: 'var(--text-muted)', marginLeft: 4 }}>{m.unit}</span>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>{m.label}</div>

                  <div className="progress-track">
                    <motion.div
                      className="progress-fill"
                      style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}99)`, width: 0 }}
                      animate={inView ? { width: `${m.progress}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>0</span>
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{m.progress}%</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right column — big cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

            {/* Steps today */}
            <motion.div
              className="glass-card"
              style={{ padding: 'var(--space-6)', flex: 1 }}
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, boxShadow: 'var(--glow-sm), var(--shadow-card)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 4 }}>Steps Today</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                    <span className="stat-number">{stepsCount.toLocaleString()}</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}> / 10,000</span>
                  </div>
                </div>
                <RingProgress percentage={Math.round((stepsCount / 10000) * 100)} size={90} label={`${Math.round((stepsCount / 10000) * 100)}%`} sublabel="goal" />
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <BarChart data={weeklyData} inView={inView} />
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                {[
                  { label: 'Distance', value: '6.2 km', icon: TrendingUp },
                  { label: 'Calories', value: '312 kcal', icon: Flame },
                  { label: 'Active', value: '47 min', icon: Zap },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} style={{ flex: 1, background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', textAlign: 'center' }}>
                      <Icon size={14} color="var(--primary-400)" style={{ marginBottom: 4 }} />
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>{s.value}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{s.label}</div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* AI Insight card */}
            <motion.div
              className="glass-card"
              style={{ padding: 'var(--space-6)', background: 'linear-gradient(135deg, rgba(0,196,183,0.08), rgba(139,92,246,0.06))', borderColor: 'var(--border-default)' }}
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, boxShadow: 'var(--glow-primary)' }}
            >
              <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                <motion.div
                  className="icon-wrap icon-wrap-primary"
                  style={{ width: 44, height: 44, flexShrink: 0 }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Brain size={20} />
                </motion.div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--primary-400)', fontWeight: 600, marginBottom: 4, letterSpacing: '0.05em' }}>AI INSIGHT</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                    Your sleep quality improved by <strong style={{ color: 'var(--accent-400)' }}>18%</strong> this week. Try maintaining your 10:30 PM bedtime — it significantly boosts your REM cycles.
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <span className="badge badge-primary">Sleep</span>
                    <span className="badge badge-green">+18%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
