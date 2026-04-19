import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DashboardSection from './components/DashboardSection'
import HabitsSection from './components/HabitsSection'
import InsightsSection from './components/InsightsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 }
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} scrolled={scrolled} />
      <main style={{ flex: 1, paddingTop: '68px' }}>
        <HeroSection setActiveSection={setActiveSection} />
        <DashboardSection />
        <HabitsSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  )
}
