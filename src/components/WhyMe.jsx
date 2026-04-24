import React from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, Zap, Smartphone, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    desc: 'Premium quality without the premium price tag. Transparent pricing starting at just ₹2,999 — no hidden costs.',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.18)',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Most projects are ready in 5–10 business days. I respect deadlines and keep you updated throughout.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.18)',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: '100% responsive across all devices. Your customers will have a flawless experience on any screen.',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.18)',
  },
  {
    icon: Sparkles,
    title: 'Modern UI / UX',
    desc: 'Websites that look as good as any big brand — clean layouts, smooth animations, and thoughtful design.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.18)',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'SSL certificates, secure setup, fast hosting. Your website will be safe, stable, and always online.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.18)',
  },
  {
    icon: HeartHandshake,
    title: '100% Satisfaction',
    desc: 'I don\'t stop until you\'re completely happy. Revisions are included and support continues after launch.',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.18)',
  },
]

const WhyMe = () => {
  return (
    <section id="why-me" className="why-section">
      <div className="container">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="eyebrow mb-4 reveal">Why Me?</div>
          <h2 className="section-heading text-slate-100 reveal">
            Why businesses{' '}
            <span className="text-gradient" style={{ fontStyle: 'italic' }}>choose me</span>
          </h2>
          <p className="text-slate-500 mt-4 reveal" style={{ fontSize: 15, lineHeight: 1.7 }}>
            I combine professional quality with small-business-friendly pricing — so you always get more than you expect.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            const stagger = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6'][i]
            return (
              <motion.div
                key={r.title}
                className={`why-card glass reveal ${stagger}`}
                style={{ border: `1px solid ${r.border}` }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="why-icon"
                  style={{ background: r.bg, border: `1px solid ${r.border}` }}
                >
                  <Icon size={20} style={{ color: r.color }} />
                </div>
                <h3 className="text-slate-100 font-semibold mb-2" style={{ fontSize: 16 }}>
                  {r.title}
                </h3>
                <p className="text-slate-500" style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                  {r.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyMe