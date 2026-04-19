import { motion } from 'framer-motion'
import { Download, Star, ShieldCheck } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section bg-medical-pattern" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          className="neumorphic-card"
          style={{
            padding: 'var(--space-12)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="display-lg" style={{ marginBottom: 'var(--space-4)' }}>
              Your Health, <span style={{ color: 'var(--primary-600)' }}>In Your Hands</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', maxWidth: 600, margin: '0 auto var(--space-8)' }}>
              Join thousands of patients who have transformed their healthcare experience with OptiLife. Secure, compliant, and easy to use.
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button className="btn btn-primary btn-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Download size={20} /> Download for iOS
              </motion.button>
              <motion.button className="btn btn-secondary btn-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Download size={20} /> Download for Android
              </motion.button>
            </div>

            <div style={{ marginTop: 'var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)' }}>
              <div style={{ display: 'flex', color: 'var(--warning)' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>4.9/5 Rating on App Store</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
