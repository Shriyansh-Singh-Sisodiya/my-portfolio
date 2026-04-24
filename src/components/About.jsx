import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Heart, Target, Award } from 'lucide-react'

const skills = [
  { label: 'React / Next.js', pct: 92 },
  { label: 'Tailwind CSS', pct: 95 },
  { label: 'Node.js / Express', pct: 78 },
  { label: 'UI / UX Design', pct: 85 },
]

const traits = [
  { icon: Code2, label: 'Clean Code',     color: '#3b82f6' },
  { icon: Heart, label: 'Client First',   color: '#ec4899' },
  { icon: Target, label: 'Results Driven', color: '#22c55e' },
  { icon: Award, label: 'Quality Work',   color: '#f59e0b' },
]

const SkillBar = ({ label, pct, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="mb-5"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-slate-400 font-medium">{label}</span>
      <span className="text-xs font-semibold" style={{ color: 'var(--c-accent)' }}>{pct}%</span>
    </div>
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        style={{ width: `${pct}%` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </motion.div>
)

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Eyebrow + heading */}
        <div className="mb-16 max-w-xl">
          <div className="eyebrow mb-4 reveal">Who I Am</div>
          <h2 className="section-heading text-slate-100 reveal">
            Turning ideas into{' '}
            <span className="text-gradient" style={{ fontStyle: 'italic' }}>digital products</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Text ── */}
          <div className="reveal-left">
            <p className="text-slate-400 leading-relaxed mb-6" style={{ fontSize: 16 }}>
              I'm <strong className="text-slate-200">Shriyansh Singh Sisodiya</strong>, currently working as a web developer passionate about helping local businesses get the digital presence they deserve.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10" style={{ fontSize: 16 }}>
              Every gym owner, salon manager, restaurant, or coaching center deserves a website that not only <em className="text-slate-300">looks stunning</em> but actually converts visitors into paying customers — and I build exactly that.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {traits.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="glass-md flex items-center gap-3 px-4 py-3 rounded-xl glass-hover"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="glass quote-card rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Instrument Serif, serif', fontSize: 17, fontStyle: 'italic' }}
              >
                I don't just build websites — I build digital growth engines for small businesses. Let's take your business online, together.
              </p>
            </div>
          </div>

          {/* ── Right: Skills ── */}
          <div className="reveal-right">
            <div
              className="glass rounded-2xl p-8"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3
                className="mb-8 text-slate-200"
                style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, fontStyle: 'italic' }}
              >
                Technical Skills
              </h3>

              {skills.map((s, i) => (
                <SkillBar key={s.label} {...s} delay={i * 0.1} />
              ))}

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  ['10+', 'Projects'],
                  ['100%', 'Satisfaction'],
                  ['5–10d', 'Delivery'],
                ].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div
                      className="text-gradient mb-0.5"
                      style={{ fontFamily: 'Instrument Serif, serif', fontSize: 28, fontStyle: 'italic' }}
                    >
                      {n}
                    </div>
                    <div className="text-xs text-slate-600">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About