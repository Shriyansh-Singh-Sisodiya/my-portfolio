import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Home', 'About', 'Services', 'Projects', 'Why Me', 'Pricing', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(' ', '-').replace(' ', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 group"
              style={{ cursor: 'none', background: 'none', border: 'none' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                S³
              </div>
              <span
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  fontStyle: 'italic',
                  fontSize: 20,
                  background: 'linear-gradient(130deg, #e2e8f0, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Shriyansh
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="nav-link"
                  style={{ background: 'none', border: 'none' }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Hire me CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+918964021179" className="btn btn-primary text-sm" style={{ padding: '10px 22px' }}>
                Hire Me
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg glass"
              onClick={() => setMobileOpen(true)}
              style={{ cursor: 'none', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Menu size={20} className="text-slate-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center"
          style={{ cursor: 'none', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <X size={20} className="text-slate-300" />
        </button>

        <div className="flex flex-col items-center gap-1">
          {links.map((l, i) => (
            <motion.button
              key={l}
              onClick={() => scrollTo(l)}
              className="mobile-nav-link"
              style={{ background: 'none', border: 'none', cursor: 'none' }}
              initial={{ opacity: 0, x: 40 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: i * 0.06 }}
            >
              {l}
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <a href="tel:+918964021179" className="btn btn-primary">Call Now</a>
          <a
            href="https://wa.me/918964021179"
            className="btn btn-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar