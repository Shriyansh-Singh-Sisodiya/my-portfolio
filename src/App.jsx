import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

/* ── Custom cursor ──────────────────────────────────────────────── */
function CustomCursor() {
  const dot  = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let raf

    const move = e => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', move)

    const tick = () => {
      if (dot.current) {
        dot.current.style.left  = `${mx}px`
        dot.current.style.top   = `${my}px`
      }
      // Lerp ring toward mouse
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      if (ring.current) {
        ring.current.style.left = `${rx}px`
        ring.current.style.top  = `${ry}px`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Hover detection
    const addHover = () => ring.current?.classList.add('hover')
    const rmHover  = () => ring.current?.classList.remove('hover')
    const interactables = 'a, button, input, textarea, [role="button"], .glass-hover'

    const attachHover = () => {
      document.querySelectorAll(interactables).forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', rmHover)
      })
    }

    attachHover()

    // Click effect
    const click = () => {
      ring.current?.classList.add('click')
      setTimeout(() => ring.current?.classList.remove('click'), 200)
    }
    window.addEventListener('mousedown', click)

    // Hide on leave / show on enter
    const hide = () => { dot.current && (dot.current.style.opacity = '0'); ring.current && (ring.current.style.opacity = '0') }
    const show = () => { dot.current && (dot.current.style.opacity = '1'); ring.current && (ring.current.style.opacity = '1') }
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', click)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}

/* ── Scroll Reveal ──────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const classes = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale']
    const all = document.querySelectorAll(classes.join(','))

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )

    all.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Section Divider ────────────────────────────────────────────── */
const Divider = () => <hr className="divider-glow" />

/* ── App ─────────────────────────────────────────────────────────── */
function App() {
  useScrollReveal()

  return (
    <div className="bg-mesh noise-overlay" style={{ color: 'var(--c-text)' }}>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Projects />
        <Divider />
        <WhyMe />
        <Divider />
        <Pricing />
        <Divider />
        <Testimonials />
        <Divider />
        <CTA />
        <Divider />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918964021179?text=Hi%20Shriyansh%2C%20I%20need%20a%20website%20for%20my%20business"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
        title="WhatsApp Me"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  )
}

export default App