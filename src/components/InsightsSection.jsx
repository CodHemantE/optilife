import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, TrendingUp, Lightbulb, Shield, Zap, Target, ChevronRight } from 'lucide-react'

const insights = [
  {
    icon: Brain, color: 'var(--secondary-400)', bg: 'rgba(139,92,246,0.12)',
    category: 'COGNITIVE', badge: 'badge-purple',
    title: 'Peak Focus Hours',
    description: 'Your cognitive performance peaks between 9–11 AM. Schedule your deepest work during this window.',
    metric: '+34%', metricLabel: 'Focus Score',
    tags: ['Brain', 'Productivity'],
  },
  {
    icon: TrendingUp, color: 'var(--accent-400)', bg: 'rgba(34,197,94,0.12)',
    category: 'FITNESS', badge: 'badge-green',
    title: 'Recovery Optimization',
    description: 'Your HRV data suggests an active recovery day today. Light yoga will maximize tomorrow\'s performance.',
    metric: '92%', metricLabel: 'Recovery',
    tags: ['HRV', 'Sleep'],
  },
  {
    icon: Lightbulb, color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
    category: 'NUTRITION', badge: 'badge-primary',
    title: 'Protein Timing',
    description: 'Consuming 30g protein within 45 mins post-workout boosts muscle synthesis by up to 25% for your body type.',
    metric: '+25%', metricLabel: 'Muscle Synth',
    tags: ['Protein', 'Recovery'],
  },
  {
    icon: Shield, color: 'var(--primary-400)', bg: 'rgba(0,196,183,0.12)',
    category: 'IMMUNITY', badge: 'badge-primary',
    title: 'Immune Boost Pattern',
    description: 'Your sleep consistency score correlates strongly with immune markers. Maintain your current sleep schedule.',
    metric: '↑ 28%', metricLabel: 'Immune Score',
    tags: ['Sleep', 'Health'],
  },
]

const weeklyScore = [
  { day: 'M', score: 82 }, { day: 'T', score: 91 }, { day: 'W', score: 75 },
  { day: 'T', score: 88 }, { day: 'F', score: 94 }, { day: 'S', score: 79 }, { day: 'S', score: 86 }
]

export default function InsightsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="insights" className="section" ref={ref} style={{ position: 'relative' }}>
      <div className="bg-glow-circle" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,196,183,0.07) 0%, transparent 70%)', right: -150, top: '30%' }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}
        >
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-4)' }}>
            <Brain size={11} /> AI INSIGHTS
          </span>
          <h2 className="display-lg" style={{ marginBottom: 'var(--space-4)' }}>
            Intelligent <span className="text-gradient">Recommendations</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', maxWidth: 520, margin: '0 auto' }}>
            Our AI analyzes 50+ biomarkers to deliver personalized, actionable insights just for you.
          </p>
        </motion.div>

        {/* Insights grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginBottom: 'var(--space-8)' }}>
          {insights.map((insight, i) => {
            const Icon = insight.icon
            return (
              <motion.div
                key={insight.title}
                className="glass-card"
                style={{ padding: 'var(--space-6)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 12px 35px rgba(0,0,0,0.4), 0 0 25px ${insight.color}20` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div className="icon-wrap" style={{ background: insight.bg, color: insight.color, width: 44, height: 44 }}>
                      <Icon size={20} />
                    </div>
                    <span style={{ fontSize: '10px', color: insight.color, fontWeight: 700, letterSpacing: '0.08em' }}>
                      {insight.category}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: insight.color }}>
                      {insight.metric}
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{insight.metricLabel}</div>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                  {insight.title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-4)' }}>
                  {insight.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {insight.tags.map(tag => (
                      <span key={tag} className="badge" style={{ fontSize: '9px', background: `${insight.color}12`, color: insight.color, border: `1px solid ${insight.color}25` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className="btn btn-ghost btn-sm"
                    style={{ color: insight.color, fontSize: 'var(--text-xs)', gap: 4 }}
                    whileHover={{ x: 4 }}
                  >
                    Learn more <ChevronRight size={12} />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Weekly wellness score card */}
        <motion.div
          className="glass-card"
          style={{
            padding: 'var(--space-8)',
            background: 'linear-gradient(135deg, rgba(0,196,183,0.06), rgba(139,92,246,0.04))',
            borderColor: 'var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-10)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          whileHover={{ boxShadow: 'var(--glow-sm)' }}
        >
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 8 }}>Weekly Wellness Score</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-6xl)', fontWeight: 900, lineHeight: 1 }}>
              <span className="text-gradient">86</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-400)', marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
              <TrendingUp size={14} />
              +7 from last week — Excellent!
            </div>
          </div>

          <div className="divider" style={{ width: 1, height: 100, background: 'var(--border-subtle)', flexShrink: 0 }} />

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>Daily breakdown</div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-end', height: 70 }}>
              {weeklyScore.map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <motion.div
                    style={{
                      width: '100%',
                      borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                      background: d.score >= 90 ? 'var(--accent-400)' : d.score >= 80 ? 'var(--primary-400)' : 'var(--secondary-400)',
                      height: 0,
                      minHeight: 4,
                    }}
                    animate={inView ? { height: `${d.score * 0.65}%` } : { height: 0 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.6, ease: [0.4,0,0.2,1] }}
                  />
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Zap size={15} />
              Full Report
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
