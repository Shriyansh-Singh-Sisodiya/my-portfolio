import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import profileImg from '../assets/image.png';
const WORDS = ['Businesses', 'Restaurants', 'Gyms', 'Salons', 'Coaches']

function RotatingWord() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="relative inline-block overflow-hidden align-middle" style={{ height: '1.1em', verticalAlign: '-0.1em' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          className="text-gradient block"
          style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {WORDS[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

import { AnimatePresence } from 'framer-motion'

const statItems = [
  { num: '10+', label: 'Projects Delivered' },
  { num: '₹2999', label: 'Starting Price' },
  { num: '100%', label: 'Client Satisfaction' },
]

const Hero = () => {
  const canvasRef = useRef(null)

  // Subtle particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, particles, raf

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const initParticles = () => {
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        o: Math.random() * 0.35 + 0.05,
        hue: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6',
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.hue
        ctx.globalAlpha = p.o
        ctx.fill()
      })
      ctx.globalAlpha = 1
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 90) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(draw)
    }

    resize(); initParticles(); draw()
    window.addEventListener('resize', () => { resize(); initParticles() })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="home" className="hero-section bg-aurora">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', opacity: 0.8,
        }}
      />

      {/* Grid texture */}
      <div
        className="bg-grid absolute inset-0 pointer-events-none"
        style={{ opacity: 0.3 }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* ── Left Text ── */}
          <div className="flex-1 max-w-[640px]">

            {/* Available badge */}
            <div className="badge-available mb-8" style={{ animationDelay: '0.1s' }}>
              <span className="badge-dot" />
              Open for new projects
            </div>

            {/* Heading */}
            <h1 className="hero-heading mb-6" style={{ fontSize: 'clamp(44px, 6vw, 88px)' }}>
              <span className="hero-line">
                <span className="hero-line-inner">Websites that</span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner">
                  grow{' '}
                  <RotatingWord />
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner" style={{ color: 'var(--c-muted)', fontSize: '0.7em', fontStyle: 'normal', fontFamily: 'Outfit, sans-serif', fontWeight: 300, letterSpacing: '-0.01em' }}>
                  online — affordably.
                </span>
              </span>
            </h1>

            {/* Sub text */}
            <p
              className="fade-in mb-10 text-slate-400 leading-relaxed"
              style={{ animationDelay: '0.55s', fontSize: 16, maxWidth: 480 }}
            >
              I'm <strong className="text-slate-200 font-medium">Shriyansh Singh Sisodiya</strong> — a web developer who builds modern, fast, and affordable websites for local businesses across India.
            </p>

            {/* CTAs */}
            <div className="fade-in flex flex-wrap gap-4 mb-14" style={{ animationDelay: '0.7s' }}>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn btn-primary"
              >
                Get Your Website <ArrowRight size={15} />
              </a>
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn btn-ghost"
              >
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="fade-in flex gap-8 flex-wrap" style={{ animationDelay: '0.85s' }}>
              {statItems.map((s, i) => (
                <div key={i}>
                  <div className="counter-number text-gradient">{s.num}</div>
                  <div className="text-xs text-slate-500 mt-0.5 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Avatar ── */}
          <div
            className="hidden lg:flex flex-col items-center gap-6 flex-shrink-0"
            style={{ opacity: 0, animation: 'fadeIn 1s 0.9s var(--ease-out-expo) both' }}
          >
            {/* Orb */}
            <motion.div
              className="avatar-orb"
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <div className="avatar-orb-ring" />
              <div className="avatar-orb-inner" />
              <div className="avatar-initials"> <img src={profileImg} alt="profile" className='AvatarImg' /></div>
            </motion.div>

            {/* Floating glass info card */}
            <motion.div
              className="glass rounded-2xl px-6 py-4 text-center"
              style={{ border: '1px solid rgba(255,255,255,0.08)', minWidth: 220 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: 'easeInOut' }}
            >
              <div
                className="text-sm font-semibold mb-1"
                style={{ fontFamily: 'Instrument Serif, serif', fontSize: 17 }}
              >
                Shriyansh Singh Sisodiya
              </div>
              <div className="text-xs text-slate-500">Web Developer · India</div>
              <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                {['React', 'Next.js', 'Tailwind', 'Node'].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <span style={{ fontSize: 10, letterSpacing: '0.15em', color: 'var(--c-muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero