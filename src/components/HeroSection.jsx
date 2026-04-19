import { motion } from 'framer-motion'
import { ArrowRight, Bot, Compass, ShieldCheck } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  })
}

export default function HeroSection({ setActiveSection }) {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
        
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
          <span className="badge" style={{ marginBottom: 'var(--space-6)' }}>
            <Bot size={12} /> ENTERPRISE WELLNESS AI
          </span>
        </motion.div>

        <motion.h1 className="display-xl" custom={1} initial="hidden" animate="visible" variants={fadeUp} style={{ marginBottom: 'var(--space-6)' }}>
          Workplace Wellness, <br />
          Simplified.
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-10)', maxWidth: 600, margin: '0 auto var(--space-8)' }}>
          Get instant AI answers for HR policies, track office-related health symptoms, and build sustainable habits to thrive at work and in life.
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginBottom: 'var(--space-16)' }}>
          <button className="btn btn-primary btn-lg" onClick={() => document.getElementById('assistant').scrollIntoView({ behavior: 'smooth' })}>
            Ask the AI Assistant <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary btn-lg" onClick={() => setActiveSection('tracker')}>
            <Compass size={18} /> Symptom Tracker
          </button>
        </motion.div>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-6)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><ShieldCheck size={16} /> Data Completely Private</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><ShieldCheck size={16} /> 24/7 Availability</div>
        </motion.div>

      </div>
    </section>
  )
}
