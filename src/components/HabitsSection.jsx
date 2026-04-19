import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Plus, Droplets, Moon, Dumbbell, Apple, BookOpen, Sun, Coffee, Wind } from 'lucide-react'

const habits = [
  { id: 1, icon: Droplets, label: 'Drink 2L Water', color: 'var(--primary-400)', bg: 'rgba(0,196,183,0.12)', streak: 12, completed: true, category: 'Health' },
  { id: 2, icon: Sun, label: 'Morning Meditation', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', streak: 7, completed: true, category: 'Mind' },
  { id: 3, icon: Dumbbell, label: '30 min Workout', color: 'var(--secondary-400)', bg: 'rgba(139,92,246,0.12)', streak: 5, completed: false, category: 'Fitness' },
  { id: 4, icon: Apple, label: 'Eat 5 Fruits & Veg', color: 'var(--accent-400)', bg: 'rgba(34,197,94,0.12)', streak: 9, completed: true, category: 'Nutrition' },
  { id: 5, icon: BookOpen, label: 'Read 30 mins', color: '#f472b6', bg: 'rgba(244,114,182,0.12)', streak: 3, completed: false, category: 'Growth' },
  { id: 6, icon: Moon, label: 'Sleep by 11 PM', color: 'var(--secondary-400)', bg: 'rgba(139,92,246,0.12)', streak: 14, completed: true, category: 'Sleep' },
  { id: 7, icon: Coffee, label: 'No Caffeine after 3', color: '#fb923c', bg: 'rgba(251,146,60,0.12)', streak: 2, completed: false, category: 'Health' },
  { id: 8, icon: Wind, label: 'Deep Breathing', color: 'var(--primary-300)', bg: 'rgba(77,218,209,0.12)', streak: 8, completed: true, category: 'Mind' },
]

const categories = ['All', 'Health', 'Fitness', 'Mind', 'Nutrition', 'Sleep', 'Growth']

export default function HabitsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')
  const [habitState, setHabitState] = useState(() =>
    Object.fromEntries(habits.map(h => [h.id, h.completed]))
  )

  const filtered = activeCategory === 'All'
    ? habits
    : habits.filter(h => h.category === activeCategory)

  const completedCount = Object.values(habitState).filter(Boolean).length
  const totalCount = habits.length
  const progressPct = Math.round((completedCount / totalCount) * 100)

  return (
    <section id="habits" className="section" ref={ref} style={{ position: 'relative', background: 'var(--bg-surface)' }}>
      {/* bg decor */}
      <div className="bg-glow-circle" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,196,183,0.06) 0%, transparent 70%)', left: -100, bottom: '10%' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'var(--space-16)', alignItems: 'start' }}>
          {/* Left side — headline & summary */}
          <div style={{ position: 'sticky', top: 100 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-green" style={{ marginBottom: 'var(--space-5)' }}>
                <Check size={11} /> HABIT TRACKER
              </span>
              <h2 className="display-lg" style={{ marginBottom: 'var(--space-5)' }}>
                Build Habits That <span className="text-gradient">Stick</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                Track your daily rituals and watch your streaks grow. Consistency is the key to transformation.
              </p>

              {/* Daily summary card */}
              <motion.div
                className="glass-card"
                style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}
                whileHover={{ y: -4, boxShadow: 'var(--glow-sm)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                  <div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 4 }}>Today's Progress</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 800 }}>
                      {completedCount}<span style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', fontWeight: 400 }}>/{totalCount}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 4 }}>Score</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--primary-400)' }}>
                      {progressPct}%
                    </div>
                  </div>
                </div>

                <div className="progress-track" style={{ height: 8, marginBottom: 'var(--space-4)' }}>
                  <motion.div
                    className="progress-fill"
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>

                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                  {progressPct >= 80 ? '🔥 Outstanding! You\'re crushing it today!' :
                   progressPct >= 60 ? '⚡ Great progress! Keep pushing!' :
                   '💪 Let\'s complete more habits today!'}
                </p>
              </motion.div>

              {/* Streak highlight */}
              <motion.div
                className="glass-card"
                style={{ padding: 'var(--space-5)', background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(251,146,60,0.05))', borderColor: 'rgba(245,158,11,0.2)' }}
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ fontSize: '2rem' }}
                  >
                    🔥
                  </motion.div>
                  <div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', fontWeight: 600 }}>14-Day Streak!</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Sleep habit — longest streak</div>
                  </div>
                  <span className="badge" style={{ marginLeft: 'auto', background: 'rgba(245,158,11,0.15)', color: 'var(--warning)', border: '1px solid rgba(245,158,11,0.25)' }}>Best</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side — habits list */}
          <div>
            {/* Category filter */}
            <motion.div
              style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    border: '1px solid',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderColor: activeCategory === cat ? 'var(--primary-400)' : 'var(--border-subtle)',
                    background: activeCategory === cat ? 'rgba(0,196,183,0.15)' : 'transparent',
                    color: activeCategory === cat ? 'var(--primary-400)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* Habit items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {filtered.map((habit, i) => {
                const Icon = habit.icon
                const done = habitState[habit.id]
                return (
                  <motion.div
                    key={habit.id}
                    className="glass-card"
                    style={{
                      padding: 'var(--space-4) var(--space-5)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                      cursor: 'pointer',
                      borderColor: done ? 'rgba(0,196,183,0.3)' : 'var(--border-subtle)',
                      background: done ? 'rgba(0,196,183,0.04)' : 'var(--bg-glass)',
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    whileHover={{ x: 4, boxShadow: `0 4px 20px rgba(0,0,0,0.3)` }}
                    onClick={() => setHabitState(s => ({ ...s, [habit.id]: !s[habit.id] }))}
                  >
                    {/* Icon */}
                    <div className="icon-wrap" style={{ background: habit.bg, color: habit.color, width: 42, height: 42, flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>

                    {/* Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 2, color: done ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {habit.label}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>🔥 {habit.streak} day streak</span>
                        <span className="badge" style={{ fontSize: '9px', padding: '1px 6px', background: `${habit.color}15`, color: habit.color, border: `1px solid ${habit.color}25` }}>
                          {habit.category}
                        </span>
                      </div>
                    </div>

                    {/* Checkmark */}
                    <motion.div
                      style={{
                        width: 28, height: 28, borderRadius: 'var(--radius-full)',
                        border: `2px solid ${done ? 'var(--primary-400)' : 'var(--border-subtle)'}`,
                        background: done ? 'var(--primary-400)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s'
                      }}
                      animate={done ? { scale: [1, 1.2, 1] } : {}}
                    >
                      {done && <Check size={14} color="#060a0f" strokeWidth={3} />}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Add habit button */}
            <motion.button
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: 'var(--space-4)', justifyContent: 'center' }}
              whileHover={{ scale: 1.02, borderColor: 'var(--primary-400)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Plus size={16} />
              Add New Habit
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
