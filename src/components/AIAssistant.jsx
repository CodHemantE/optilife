import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Send } from 'lucide-react'

import knowledgeBase from '../chatbotKnowledge.json'

export default function AIAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Welcome to OptiLife! How can I assist you with the medical knowledge base today?');
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = () => {
    const query = input.toLowerCase().trim();
    if (!query) return;

    setIsTyping(true);
    setResponse(''); // Clear immediately for effect

    setTimeout(() => {
      // Find the first document that contains the query
      const match = knowledgeBase.find(entry => entry.text.toLowerCase().includes(query));
      
      const aiReply = match 
        ? `Found in [${match.id}]:\n\n${match.text}...` 
        : "I couldn't find any information in the dataset about that query. Please try searching for specific medical terms or diseases (e.g. 'pulmonary embolism', 'chronic pain').";
      
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
