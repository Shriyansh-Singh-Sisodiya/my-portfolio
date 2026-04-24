import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Om Gas Agency Itarsi',
    type: 'Gas Agency Website',
    desc: 'Bold, energetic website with class schedules, trainer profiles, membership plans and an integrated booking system.',
    image: 'https://img.freepik.com/free-photo/young-stylish-asian-man-with-mobile-phone-backpack-against-row-green-atm_627829-1114.jpg',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    accent: '#3b82f6',
    demo: '#',
  },
  {
    num: '02',
    title: 'Spice Garden',
    type: 'Restaurant Website',
    desc: 'Mouth-watering restaurant site with online menu, table reservations, gallery, and integrated Google Maps.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&q=80',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    accent: '#f59e0b',
    demo: '#',
  },
  {
    num: '03',
    title: 'BrightPath Academy',
    type: 'Coaching Institute',
    desc: 'Professional coaching website with course listings, batch schedules, faculty pages, results showcase, and student enrollment.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop&q=80',
    tags: ['React', 'Firebase', 'Tailwind'],
    accent: '#8b5cf6',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-4 reveal">Featured Work</div>
            <h2 className="section-heading text-slate-100 reveal">
              Recent{' '}
              <span className="text-gradient" style={{ fontStyle: 'italic' }}>projects</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs reveal" style={{ fontSize: 14, lineHeight: 1.7 }}>
            Real sites built for real businesses, each designed to convert.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              className="project-card glass glass-hover"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="project-image-wrap" style={{ aspectRatio: '16/9', minHeight: 220 }}>
                  <div className="project-number">Project {p.num}</div>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  {/* Hover overlay */}
                  <div className="project-overlay">
                    <a
                      href={p.demo}
                      className="btn btn-ghost text-sm"
                      style={{ width: 'fit-content' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div
                    className="text-xs font-semibold tracking-widest mb-3 uppercase"
                    style={{ color: p.accent }}
                  >
                    {p.type}
                  </div>
                  <h3
                    className="text-slate-100 mb-3"
                    style={{ fontFamily: 'Instrument Serif, serif', fontSize: 28, fontStyle: 'italic' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-slate-500 mb-6" style={{ fontSize: 14, lineHeight: 1.75 }}>
                    {p.desc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map(t => (
                      <span
                        key={t}
                        className="tech-tag"
                        style={{
                          background: `${p.accent}10`,
                          borderColor: `${p.accent}25`,
                          color: p.accent,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.demo}
                    className="btn btn-ghost w-fit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects