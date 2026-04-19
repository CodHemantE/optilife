import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Send } from 'lucide-react'

const responses = {
  "hello": "Hello! I'm your OptiLife assistant, here to help you thrive at work. What can I do for you?",
  "work from home policy": "Our flexible work policy promotes work-life balance. You can work remotely 2-3 days per week, coordinating with your team lead for specific arrangements.",
  "vacation policy": "We value rest and rejuvenation! Full-time employees receive 20 days of paid vacation annually, accrued monthly. Submit requests through the HR portal at least 2 weeks in advance.",
  "sick leave": "Your health matters! You're entitled to 10 paid sick days annually. Please notify your manager as soon as possible and submit documentation for absences exceeding 3 days.",
  "expense report": "For expense reimbursement, submit reports through the finance portal within 30 days of purchase. Ensure all receipts are clearly scanned and categorized correctly.",
  "benefits": "We offer comprehensive benefits including health, dental, vision insurance, 401(k) matching up to 6%, annual wellness stipend of $500, and mental health resources.",
  "training budget": "Invest in yourself! Each employee has an annual training budget of $2,000 for professional development. Submit requests through the learning portal.",
  "performance review": "Growth through feedback: Performance reviews are conducted bi-annually in June and December. Start self-assessment 3 weeks before your scheduled review.",
  "it support": "For technical support, create a ticket through the helpdesk portal or call ext. 1234 for urgent issues. Our IT team is here to help!",
  "meeting rooms": "Book meeting spaces through the Office365 calendar. Rooms must be booked at least 1 hour in advance. Virtual meeting options are always available.",
  "career development": "OptiLife supports your growth! We offer mentorship programs, skill workshops, and career coaching. Schedule a meeting with your manager to discuss your career path.",
  "wellness programs": "Your well-being is our priority! Access our wellness platform for meditation sessions, fitness classes, and mental health resources. Monthly wellness challenges available!"
};

export default function AIAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Welcome to OptiLife! How can I assist you today?');
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = () => {
    const query = input.toLowerCase().trim();
    if (!query) return;

    setIsTyping(true);
    setResponse(''); // Clear immediately for effect

    setTimeout(() => {
      const match = Object.keys(responses).find(key => query.includes(key));
      const aiReply = match 
        ? responses[match] 
        : "I don't have specific information about that query. Please reach out to HR or your supervisor for more details, or try asking about our wellness programs, benefits, or career development opportunities!";
      
      setResponse(aiReply);
      setIsTyping(false);
      setInput('');
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getResponse();
    }
  };

  return (
    <section id="assistant" className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="neumorphic-card" style={{ padding: 'var(--space-8)' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="icon-wrap icon-wrap-primary" style={{ width: 48, height: 48, background: 'var(--primary-600)', color: 'white', boxShadow: 'var(--glow-primary)' }}>
              <Lightbulb size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0, color: 'var(--primary-900)' }}>
                <span style={{ color: 'var(--primary-600)' }}>OptiLife</span> Assistant
              </h2>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                Empowering your workplace journey
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about workplace policies, career growth, or well-being..."
              style={{
                flex: 1,
                padding: 'var(--space-3) var(--space-4)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--text-base)',
                background: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
                outline: 'none',
                boxShadow: 'var(--shadow-neu-inset)',
                transition: 'border-color var(--transition-fast)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary-400)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-default)'}
            />
            <button className="btn btn-primary" onClick={getResponse} style={{ paddingInline: 'var(--space-6)' }}>
              <Send size={18} /> Send
            </button>
          </div>

          {/* Response Area */}
          <div className="neumorphic-inset" style={{ padding: 'var(--space-5)', minHeight: 80, display: 'flex', alignItems: 'center' }}>
            {isTyping ? (
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <motion.div style={{ width: 8, height: 8, background: 'var(--primary-500)', borderRadius: '50%' }} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0 }} />
                <motion.div style={{ width: 8, height: 8, background: 'var(--primary-500)', borderRadius: '50%' }} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }} />
                <motion.div style={{ width: 8, height: 8, background: 'var(--primary-500)', borderRadius: '50%' }} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }} />
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ lineHeight: 1.6, color: 'var(--text-primary)', fontWeight: 500 }}>
                {response}
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
