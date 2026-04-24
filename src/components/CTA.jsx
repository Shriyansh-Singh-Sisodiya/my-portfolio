import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-inner glass"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 bg-grid rounded-[inherit] pointer-events-none"
            style={{ opacity: 0.15 }}
          />

          <div className="relative z-10">
            <div className="eyebrow mb-6" style={{ justifyContent: 'center' }}>
              Let's Work Together
            </div>

            <h2
              className="mb-4 mx-auto"
              style={{
                fontFamily: 'Instrument Serif, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 5vw, 68px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                maxWidth: 720,
              }}
            >
              Let's build something{' '}
              <span className="text-gradient">exceptional</span>
            </h2>

            <p
              className="text-slate-500 mb-10 mx-auto"
              style={{ fontSize: 15, maxWidth: 460, lineHeight: 1.7 }}
            >
              Ready to grow your business online? Let's create a website that makes your business stand out and turns visitors into customers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+918964021179" className="btn btn-primary">
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/918964021179?text=Hi%20Shriyansh%2C%20I%20want%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp Me
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn btn-ghost"
              >
                Send a Message <ArrowRight size={15} />
              </a>
            </div>

            {/* Trust micro-line */}
            <p className="text-slate-700 text-xs mt-10 tracking-widest uppercase">
              Free consultation · No commitment · Fast turnaround
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA