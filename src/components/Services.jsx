import React from 'react'
import { motion } from 'framer-motion'
import { Globe, LayoutTemplate, User, RefreshCw, ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Globe,
    title: 'Business Websites',
    desc: 'Complete multi-page online presence for shops, gyms, salons, coaching centers and all local businesses.',
    tags: ['5–8 Pages', 'SEO Ready', 'Fast'],
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.15)',
  },
  {
    num: '02',
    icon: LayoutTemplate,
    title: 'Landing Pages',
    desc: 'Focused, high-converting single-page sites built specifically to capture leads and drive sales.',
    tags: ['High Converting', 'Analytics', 'Forms'],
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.15)',
  },
  {
    num: '03',
    icon: User,
    title: 'Portfolio Sites',
    desc: 'Showcase your creative work, services, or resume with a polished portfolio that opens doors.',
    tags: ['Personal Brand', 'Gallery', 'Blog'],
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.15)',
  },
  {
    num: '04',
    icon: RefreshCw,
    title: 'Website Redesign',
    desc: 'Is your old website hurting your business? I\'ll modernize it completely — new look, better speed, better results.',
    tags: ['Modern UI', 'Speed Boost', 'Mobile Fix'],
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.15)',
  },
]

const card = {
  hidden: { opacity: 0, y: 30 },
  show: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] } }),
}

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-4 reveal">What I Do</div>
            <h2 className="section-heading text-slate-100 reveal">
              Services built for{' '}
              <span className="text-gradient" style={{ fontStyle: 'italic' }}>small business</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs reveal" style={{ fontSize: 14, lineHeight: 1.7 }}>
            Tailored digital solutions that actually get you more customers.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.num}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="service-card glass glass-hover group"
                style={{ border: `1px solid ${s.border}30` }}
              >
                {/* Big number background */}
                <span
                  className="service-card-number"
                  style={{
                    fontFamily: 'Instrument Serif, serif',
                    background: `linear-gradient(135deg, ${s.color}40, transparent)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.3,
                  }}
                >
                  {s.num}
                </span>

                {/* Icon */}
                <div
                  className="service-icon-wrap"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                >
                  <Icon size={22} style={{ color: s.color }} />
                </div>

                <h3
                  className="text-slate-100 font-semibold mb-3"
                  style={{ fontSize: 17 }}
                >
                  {s.title}
                </h3>
                <p className="text-slate-500 mb-5" style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.tags.map(t => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{ background: s.bg, borderColor: s.border, color: s.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <div
                  className="flex items-center gap-1.5 text-xs font-semibold tracking-wide"
                  style={{ color: s.color }}
                >
                  Learn more
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services