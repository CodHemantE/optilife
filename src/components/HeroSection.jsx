import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Users, Shield, Star, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
}

const statsData = [
  { value: '2M+', label: 'Active Patients', icon: Users },
  { value: '99%', label: 'Clinical Accuracy', icon: ShieldCheck },
  { value: '24/7', label: 'Health Monitoring', icon: TrendingUp },
  { value: 'HIPAA', label: 'Compliant Security', icon: Shield },
]

export default function HeroSection({ setActiveSection }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={containerRef} className="section bg-medical-pattern" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <motion.div className="container" style={{ y, opacity }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <span className="badge badge-primary" style={{ marginBottom: 'var(--space-6)' }}>
              <ShieldCheck size={14} /> CERTIFIED TELEMEDICINE APP
            </span>
          </motion.div>

          <motion.h1 className="display-xl" variants={fadeUp} custom={1} initial="hidden" animate="visible" style={{ marginBottom: 'var(--space-6)' }}>
            Digital Healthcare, <br />
            <span className="text-gradient">Personalized for You</span>
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-10)', maxWidth: 600, margin: '0 auto var(--space-10)' }}>
            Monitor vital signs, communicate with certified doctors, and manage your medical records in one secure, intuitive platform.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginBottom: 'var(--space-16)' }}>
            <button className="btn btn-primary btn-lg" onClick={() => setActiveSection('dashboard')}>
              Start Free Consultation <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary btn-lg">
              <Play size={16} /> How it Works
            </button>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
            {statsData.map((stat, i) => (
              <div key={stat.label} className="neumorphic-card" style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
                <div className="icon-wrap icon-wrap-primary" style={{ width: 48, height: 48, marginBottom: 'var(--space-3)' }}>
                  <stat.icon size={22} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 800 }}>{stat.value}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
