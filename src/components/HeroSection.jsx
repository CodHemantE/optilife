import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, ArrowRight, Play, TrendingUp, Users, Award, Star } from 'lucide-react'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
}

const statsData = [
  { value: '2.4M+', label: 'Active Users', icon: Users },
  { value: '94%', label: 'Goal Achievement', icon: TrendingUp },
  { value: '4.9★', label: 'App Rating', icon: Star },
  { value: '50+', label: 'Health Metrics', icon: Award },
]

export default function HeroSection({ setActiveSection }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="section bg-grid"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Background glows */}
      <motion.div
        className="bg-glow-circle"
        style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,196,183,0.12) 0%, transparent 70%)', top: -200, left: -200 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-glow-circle"
        style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', bottom: -150, right: -100 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div className="container" style={{ y, opacity }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <span className="badge badge-primary" style={{ marginBottom: 'var(--space-6)', fontSize: '0.7rem' }}>
              <Zap size={11} />
              AI-POWERED WELLNESS PLATFORM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="display-xl"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: 'var(--space-6)' }}
          >
            Optimize Every<br />
            <span className="text-gradient">Dimension of Life</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-10)',
              maxWidth: 560,
              margin: '0 auto var(--space-10)'
            }}
          >
            Track habits, monitor health metrics, and unlock AI-driven insights that transform your daily routines into life-changing results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-16)' }}
          >
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,196,183,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveSection('dashboard')}
            >
              <Zap size={18} />
              Get Started Free
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              className="btn btn-secondary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Play size={16} style={{ fill: 'currentColor' }} />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-4)',
              maxWidth: 680,
              margin: '0 auto'
            }}
          >
            {statsData.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: 'var(--space-4)', textAlign: 'center' }}
                  whileHover={{ y: -4, boxShadow: 'var(--glow-sm)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <Icon size={16} color="var(--primary-400)" style={{ marginBottom: 'var(--space-2)', margin: '0 auto var(--space-2)' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 2 }}>
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4 + i * 2,
            height: 4 + i * 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'var(--primary-400)' : 'var(--secondary-400)',
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 20}%`,
            opacity: 0.4,
          }}
          animate={{ y: [0, -20 - i * 5, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}
    </section>
  )
}
