import React from 'react'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Why Me', 'Pricing', 'Contact']
const serviceLinks = ['Business Websites', 'Landing Pages', 'Portfolio Sites', 'Website Redesign']

const Footer = () => {
  const scrollTo = id => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, '-').replace(' ', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="footer-brand mb-3">Shriyansh</div>
            <p className="text-slate-600 mb-5" style={{ fontSize: 13, lineHeight: 1.7 }}>
              Modern websites for small businesses across India. Affordable, fast, and built to convert.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="btn-icon">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-300 font-semibold mb-5 text-sm tracking-wide">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="text-slate-600 hover:text-slate-300 text-sm transition-colors"
                    style={{ background: 'none', border: 'none', cursor: 'none', padding: 0, textAlign: 'left' }}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-300 font-semibold mb-5 text-sm tracking-wide">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(l => (
                <li key={l}>
                  <span className="text-slate-600 text-sm">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 font-semibold mb-5 text-sm tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+918964021179"
                  className="text-slate-600 hover:text-slate-300 text-sm transition-colors"
                  style={{ cursor: 'none' }}
                >
                  +91 8964021179
                </a>
              </li>
              <li>
                <a
                  href="mailto:shriyanshsinghsisodiya@gmail.com"
                  className="text-slate-600 hover:text-slate-300 text-sm transition-colors break-all"
                  style={{ cursor: 'none' }}
                >
                  shriyanshsinghsisodiya@gmail.com
                </a>
              </li>
              <li className="text-slate-600 text-sm">India · Remote</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8">
          <p className="text-slate-700 text-xs">
            © {year} Shriyansh Singh Sisodiya. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer