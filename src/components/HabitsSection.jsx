import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Calendar, Activity, Pill } from 'lucide-react'

// Telemedicine/Health Care Plans (replacing Habits)
const defaultPlans = [
  { id: 1, text: 'Take Morning Medication', category: 'medication', done: true, streak: 12 },
  { id: 2, text: '30-Minute Checkin Walk', category: 'activity', done: false, streak: 3 },
  { id: 3, text: 'Log Blood Pressure', category: 'vitals', done: false, streak: 5 },
]

export default function HabitsSection() {
  const [plans, setPlans] = useState(defaultPlans)

  const toggle = (id) => setPlans(plans.map(p => p.id === id ? { ...p, done: !p.done } : p))

  return (
    <section id="habits" className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
           <span className="badge badge-purple" style={{ marginBottom: 'var(--space-3)' }}>TREATMENT PLAN</span>
           <h2 className="display-lg">Daily <span style={{ color: 'var(--primary-600)' }}>Adherence</span></h2>
        </div>

        <div className="neumorphic-card" style={{ padding: 'var(--space-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <AnimatePresence>
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  className="neumorphic-inset"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4)' }}
                  layout
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <motion.button
                      className="btn"
                      style={{
                        width: 28, height: 28, padding: 0, borderRadius: '50%',
                        background: plan.done ? 'var(--primary-500)' : 'var(--bg-base)',
                        border: plan.done ? 'none' : '2px solid var(--border-strong)',
                        color: 'white',
                        boxShadow: plan.done ? 'var(--glow-primary)' : 'var(--shadow-neu-inset)'
                      }}
                      onClick={() => toggle(plan.id)}
                      whileTap={{ scale: 0.9 }}
                    >
                      {plan.done && <Check size={16} strokeWidth={3} />}
                    </motion.button>
                    <span style={{ 
                      fontSize: 'var(--text-lg)', 
                      fontWeight: 600,
                      color: plan.done ? 'var(--text-muted)' : 'var(--text-primary)',
                      textDecoration: plan.done ? 'line-through' : 'none',
                      transition: 'all 0.3s'
                    }}>
                      {plan.text}
                    </span>
                  </div>
                  
                  <div className="badge badge-primary">
                    <Calendar size={12} style={{ marginRight: 4 }} /> {plan.streak} Day Streak
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
