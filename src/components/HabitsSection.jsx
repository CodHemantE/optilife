import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Clock } from 'lucide-react'

// Office Habits
const defaultHabits = [
  { id: 1, text: 'Take a 5-min walk away from desk', time: '10:00 AM', done: true },
  { id: 2, text: 'Hydration check (Drink water)', time: '12:00 PM', done: false },
  { id: 3, text: '20-20-20 rule for eyes', time: '2:00 PM', done: false },
]

export default function HabitsSection() {
  const [habits, setHabits] = useState(defaultHabits)

  const toggle = (id) => setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h))

  return (
    <section id="daily" className="section">
      <div className="container" style={{ maxWidth: 700 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
           <span className="badge badge-purple" style={{ marginBottom: 'var(--space-3)' }}>DAILY CHECKLIST</span>
           <h2 className="display-lg">Workplace <span className="text-gradient">Habits</span></h2>
        </div>

        <div className="glass-card" style={{ padding: 'var(--space-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <AnimatePresence>
              {habits.map((habit) => (
                <motion.div
                  key={habit.id}
                  className="neumorphic-inset"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4)' }}
                  layout
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <motion.button
                      className="btn"
                      style={{
                        width: 24, height: 24, padding: 0, borderRadius: 'var(--radius-sm)',
                        background: habit.done ? 'var(--primary-600)' : 'var(--bg-base)',
                        border: habit.done ? 'none' : '1px solid var(--border-strong)',
                        color: 'white'
                      }}
                      onClick={() => toggle(habit.id)}
                      whileTap={{ scale: 0.9 }}
                    >
                      {habit.done && <Check size={14} strokeWidth={3} />}
                    </motion.button>
                    <span style={{ 
                      fontSize: 'var(--text-base)', 
                      fontWeight: 500,
                      color: habit.done ? 'var(--text-muted)' : 'var(--text-primary)',
                      textDecoration: habit.done ? 'line-through' : 'none',
                    }}>
                      {habit.text}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
                    <Clock size={14} /> {habit.time}
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
