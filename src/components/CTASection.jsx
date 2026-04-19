import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, ArrowRight, Apple, Smartphone, Star } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Big glow blob */}
      <motion.div
        className="bg-glow-circle"
        style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(0,196,183,0.1) 0%, transparent 65%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="bg-glow-circle"
        style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', top: '10%', right: '5%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-6)' }}>
            <Star size={11} /> START YOUR JOURNEY
          </span>

          <h2 className="display-xl" style={{ marginBottom: 'var(--space-6)', maxWidth: 680, margin: '0 auto var(--space-6)' }}>
            Ready to Become<br />
            Your <span className="text-gradient">Best Self?</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-xl)',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '0 auto var(--space-10)',
          }}>
            Join 2.4 million people who already use OptiLife to build life-changing habits and reach their full potential.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.06, boxShadow: '0 10px 40px rgba(0,196,183,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{ paddingInline: 'var(--space-10)' }}
            >
              <Zap size={18} />
              Start Free — No Credit Card
              <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Store badges */}
          <motion.div
            style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {[
              { Icon: Apple, label: 'App Store', sub: 'Download on the' },
              { Icon: Smartphone, label: 'Google Play', sub: 'Get it on' },
            ].map(({ Icon, label, sub }) => (
              <motion.button
                key={label}
                className="glass-card"
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                  cursor: 'pointer', border: '1px solid var(--border-default)',
                  background: 'var(--bg-glass)', borderRadius: 'var(--radius-lg)',
                }}
                whileHover={{ scale: 1.04, boxShadow: 'var(--glow-sm)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={24} color="var(--text-primary)" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{sub}</div>
                  <div style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>{label}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.div
            style={{ marginTop: 'var(--space-12)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div style={{ display: 'flex' }}>
              {['#00c4b7', '#8b5cf6', '#22c55e', '#f59e0b', '#f472b6'].map((c, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${c}, ${c}88)`,
                  border: '2px solid var(--bg-base)',
                  marginLeft: i === 0 ? 0 : -10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700, color: i < 2 ? '#060a0f' : '#fff'
                }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>2,400,000+</strong> people already optimizing their life
            </div>
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="var(--warning)" color="var(--warning)" />
              ))}
            </div>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>4.9 / 5.0</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
